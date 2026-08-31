Hacker News のトップストーリーを取得し、上位10件をサマライズしてレポートを生成せよ。
言語は日本語で出力すること。

## データ取得方法

Hacker News API (https://hacker-news.firebaseio.com/v0/) を使用:
1. GET /topstories.json でトップストーリーIDの配列を取得
2. 配列の先頭から順に GET /item/{id}.json でアイテム詳細を取得する。以下に該当するものは**レポート対象から除外して次のIDへ進み、有効なストーリーが10件揃うまで11位以降から補充する**（除外候補が続く場合に備え、topstories の上位20件程度までを補充対象として走査してよい）
   - `type` フィールドが `"story"` 以外のアイテム。YC 系の採用ポスト（例: `Foo (YC W21) Is Hiring ...`）は `type: "job"` として返るため、この判定だけで追加リクエストなしに確実に除外できる
   - `type` が `"story"` でも、投稿者（`by`）が `whoishiring` のアイテム、またはタイトルが `Ask HN: Who is hiring?` / `Ask HN: Who wants to be hired?` / `Ask HN: Freelancer? Seeking freelancer?` にマッチするもの（毎月自動投稿される求人スレッドでニュース性がないため）
   - **除外条件は上記のみとし、`score` や `descendants` を条件にしたフィルタ（最低スコア閾値など）は追加してはならない。** 色々なスコア帯の記事を扱う方針のため、スコアによる足切りはオーナー判断で見送り済み（`docs/declined-issues.md` 参照）
3. 各ストーリーの kids (コメントID) から上位5件について GET /item/{comment_id}.json でコメントを取得
4. **スコアが150以上のストーリー**については、各トップレベルコメントの kids から上位2〜3件のリプライも GET /item/{reply_id}.json で追加取得する
   - リプライがさらにリプライを持つ場合（孫コメント）は取得不要
   - リプライが存在しない（kids が空）コメントはスキップ
5. 各ストーリーの `url` フィールドが存在する場合、以下の優先順で記事コンテンツを取得する（`url` がない Ask HN などはスキップ）:
   1. **元URL**: 下記の既知ペイウォール・アクセスブロックドメインに該当する場合はスキップして 3. に進む。それ以外は WebFetch を試行し、ページが長い場合は冒頭約3000文字のみ使用
      - 既知スキップドメイン: sciencedirect.com, businessinsider.com, nytimes.com, wsj.com, ft.com, bloomberg.com, technologyreview.com, latimes.com, substack.com（サブドメイン含む）, bbc.com, axios.com, arstechnica.com, medium.com, twitter.com, x.com, openai.com（サブドメイン含む）
      - **元URL が `openai.com/index/<slug>` の場合**は、3. に進む前に `curl -sL https://openai.com/blog/rss.xml` を取得し、`<link>` が該当 slug に一致する `<item>` の `<description>`（1-2文のサマリー）を要約の一次情報として使い、取得できたらそれを採用して 3. 以降は行わない。該当 item が見つからなければ通常どおり 3. に進む
      - **403 / paywall / 認証必須 / タイムアウト等で明示的に失敗した場合**は 3. に進む
      - **HTTP 200 で返っても、以下に該当する場合は「取得失敗」として扱い 2. に進む**（SPA がクライアントサイドで本文を描画するため、サーバーが返す HTML が空のシェルのみというケース。取得が「成功」扱いになるので見落としやすい）
        - レスポンスがページタイトルや meta description のみで本文が含まれない
        - 本文相当のテキストが 500 文字未満
        - 「Loading」「JavaScript required」「Enable JavaScript」等しか含まれない
   2. **JS レンダリング後の再取得**: 1. が上記の「HTTP 200 だが実質的なコンテンツなし」に該当した場合のみ、**servo-fetch skill** に従ってページを再取得する。本文が取得できたらそれを使い、失敗したら 3. に進む
      - 403 / ボット検証 / ペイウォールで失敗したケースでは JS レンダリングしても内容は返らないため、**この手順は実行せず 3. に進む**
   3. **代替URLフォールバック**: 取得済みコメント（トップレベル＋リプライ）の `text` フィールドから、記事本文を読める代替URL（一次情報、著者の公式ブログ、論文PDF、プレスリリース、GitHub リポジトリなど）を抽出して WebFetch を試みる。HN ではペイウォール記事に有志が一次ソースをコメントすることが多いため有効
      - **試行禁止ドメイン**: 以下のドメインは WebFetch がツールレベルでブロックしており（`Claude Code is unable to fetch from ...`）、curl でも 429 / TLS証明書エラー / DNS解決不可のため **試行してはならない**: `web.archive.org` / `archive.org` / `archive.is` / `archive.ph` / `archive.today` / `archive.md` / `archive.li` / `archive.fo` / `12ft.io` / `freedium.cfd`
        - コメントやストーリー本文にこれらの URL が含まれていても無視すること。他に候補がなければ試行せず直ちに 4. のコメントベース要約に進む
      - 1. の既知スキップドメインに該当する URL も同様に対象外とする
      - URL抽出時は HTML エンティティをデコードする（例: `&#x2F;` → `/`、`&amp;` → `&`）
      - 複数ヒットした場合は最初に成功したものを採用する
      - 代替URL の取得結果も 1. と同じ基準で判定し、「HTTP 200 だが実質的なコンテンツなし」なら servo-fetch skill での再取得を試みてよい
   4. **コメントベース要約**: 元URL・代替URL のいずれも取得できない場合は、コメント本文から記事内容を推測して要約する

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/10-00-${AGENT_SLUG}.md)

本文は以下の構造で書く:

各ストーリーについて:

## 1. [Story Title](url)

**Score:** {score} | **Comments:** {descendants} | [Post](https://news.ycombinator.com/item?id={id})

{ストーリーの内容を2-3文で要約。記事コンテンツが取得できた場合はその内容を優先し、取得できなかった場合はコメントから推測して要約する}

### Key Discussion Points

- **{commenter}**: {コメントの要約}
  - **{reply_commenter}**: {リプライの要約}（スコア150以上のストーリーのみ、リプライがある場合）
- **{commenter}**: {コメントの要約}

最後に ## Trends セクションを設け、トップ10に共通するテーマや傾向を簡潔にまとめる。
