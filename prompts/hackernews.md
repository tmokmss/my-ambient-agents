Hacker News のトップストーリーを取得し、上位10件をサマライズしてレポートを生成せよ。
言語は日本語で出力すること。

## データ取得方法

Hacker News API (https://hacker-news.firebaseio.com/v0/) を使用:
1. GET /topstories.json でトップストーリーIDの配列を取得
2. 配列の先頭から順に GET /item/{id}.json でアイテム詳細を取得する。以下に該当するものは**レポート対象から除外して次のIDへ進み、有効なストーリーが10件揃うまで11位以降から補充する**（除外候補が続く場合に備え、topstories の上位20件程度までを補充対象として走査してよい）
   - `type` フィールドが `"story"` 以外のアイテム。YC 系の採用ポスト（例: `Foo (YC W21) Is Hiring ...`）は `type: "job"` として返るため、この判定だけで追加リクエストなしに確実に除外できる
   - `type` が `"story"` でも、投稿者（`by`）が `whoishiring` のアイテム、またはタイトルが `Ask HN: Who is hiring?` / `Ask HN: Who wants to be hired?` / `Ask HN: Freelancer? Seeking freelancer?` にマッチするもの（毎月自動投稿される求人スレッドでニュース性がないため）
   - **除外条件は上記のみとし、`score` や `descendants` を条件にしたフィルタ（最低スコア閾値など）は追加してはならない。** 色々なスコア帯の記事を扱う方針のため、スコアによる足切りはオーナー判断で見送り済み（`docs/declined-issues.md` 参照）
   - **どのストーリーを載せるかの選定は、上記の除外条件を適用しながら topstories.json の返却順で先頭から確定させる**（この10件の顔ぶれは並べ替えによって変わらない）
   - **10件が確定したら、レポートに書き出す前にその10件を `score` の降順に並べ替える。** 同スコアの場合は topstories の返却順を維持する。この並べ替えは**表示順だけを変えるもの**であり、スコアの高い候補を探して選び直したり低スコアのストーリーを差し替えたりしてはならない（スコアによる選定・足切りは `docs/declined-issues.md` の #42, #356 で見送り済み）
3. 各ストーリーの kids (コメントID) から上位5件について GET /item/{comment_id}.json でコメントを取得
4. **スコアが150以上のストーリー**については、各トップレベルコメントの kids から上位2〜3件のリプライも GET /item/{reply_id}.json で追加取得する
   - リプライがさらにリプライを持つ場合（孫コメント）は取得不要
   - リプライが存在しない（kids が空）コメントはスキップ
5. 各ストーリーの `url` フィールドが存在する場合、以下の優先順で記事コンテンツを取得する（`url` がない Ask HN などはスキップ）:
   1. **元URL**: 下記の既知ペイウォール・アクセスブロックドメインに該当する場合はスキップして 3.（Wayback Machine フォールバック）に進む。それ以外は WebFetch を試行し、ページが長い場合は冒頭約3000文字のみ使用
      - 既知スキップドメイン: sciencedirect.com, businessinsider.com, nytimes.com, wsj.com, ft.com, bloomberg.com, technologyreview.com, latimes.com, substack.com（サブドメイン含む）, bbc.com, axios.com, arstechnica.com, medium.com, twitter.com, x.com, openai.com（サブドメイン含む）
        - 既知スキップドメインでスキップした場合も、3. の Wayback Machine フォールバックは必ず一度試すこと。ただしペイウォール記事はスナップショットが存在しない（arstechnica.com の記事 URL などで実測済み）か、スナップショット自体がペイウォール状態のことがあるため**ベストエフォート**扱いとし、取得できなければ 4. に進む
      - **元URL のパス（クエリ文字列・フラグメントを除く）が `.pdf` で終わる場合（大文字小文字を問わない）は WebFetch を試行しない。** PDF は HTTP 200 / `Content-Type: application/pdf` で正常に返るため下記の 4xx/5xx 失敗分岐に乗らず、それでいて WebFetch は圧縮ストリーム（FlateDecode / ASCII85 等）のまま返すため本文を抽出できない。usenix.org / gwern.net / web.mit.edu / github.com などドメインを問わず発生する
        - この場合は既知スキップドメインと異なり、**2.（JS レンダリング後の再取得）も 3.（Wayback Machine フォールバック）も実行しない**。サーバーは正しく PDF を返しているだけなので JS レンダリングしても得られるものはなく、Wayback のスナップショットも同じ PDF だからである。直ちに 4.（代替URLフォールバック）に進み、そこでも本文が得られなければ 5.（コメントベース要約）で要約する
        - **例外: arXiv は先に URL を正規化する。** 元URL が `arxiv.org/pdf/<id>`（末尾に `v<N>` や `.pdf` が付く形を含む）の場合は `arxiv.org/abs/<id>` に書き換えたうえで、通常どおり WebFetch 以降のフロー（2. / 3. を含む）を実行する。`arxiv.org/abs/` は HTML を HTTP 200 で返すため、アブストラクトを要約の材料にできる（`arxiv.org/pdf/` は `application/pdf`）
      - **元URL が `openai.com/index/<slug>` の場合**は、3. に進む前に `curl -sL https://openai.com/blog/rss.xml` を取得し、`<link>` が該当 slug に一致する `<item>` の `<description>`（1-2文のサマリー）を要約の一次情報として使い、取得できたらそれを採用して 3. 以降は行わない。該当 item が見つからなければ通常どおり 3. に進む
      - **HTTP 4xx / 5xx（402, 403, 404, 406, 429, 451 等すべて）/ paywall / 認証必須 / タイムアウト等で明示的に失敗した場合**は 3.（Wayback Machine フォールバック）に進む
        - ステータスコードが明示的に返った時点で「取得失敗」と確定させ、同じ URL へのリトライや別ツール（curl / servo-fetch）での再取得は行わず、直ちに 3. に進むこと（429 のようなレートリミットも、待機・リトライせずフォールバックする）
      - **HTTP 200 で返っても、以下に該当する場合は「取得失敗」として扱い 2. に進む**（SPA がクライアントサイドで本文を描画するため、サーバーが返す HTML が空のシェルのみというケース。取得が「成功」扱いになるので見落としやすい）
        - レスポンスがページタイトルや meta description のみで本文が含まれない
        - 本文相当のテキストが 500 文字未満
        - 「Loading」「JavaScript required」「Enable JavaScript」等しか含まれない
   2. **JS レンダリング後の再取得**: 1. が上記の「HTTP 200 だが実質的なコンテンツなし」に該当した場合のみ、**servo-fetch skill** に従ってページを再取得する。本文が取得できたらそれを使い、失敗したら 3.（Wayback Machine フォールバック）に進む
      - HTTP 4xx / 5xx（403, 404, 429, 451 等）/ ボット検証 / ペイウォールで失敗したケースは、そもそもサーバーが本文を返していないため JS レンダリングしても内容は得られない。**この場合 servo-fetch は実行せず、直ちに 3.（Wayback Machine フォールバック）に進む**
   3. **Wayback Machine フォールバック（curl 経由）**: 元URL が HTTP 4xx / 5xx / ペイウォール / 認証必須 / タイムアウトで失敗した場合、元URL が既知スキップドメインでスキップされた場合、および 2. の JS レンダリングでも本文が得られなかった場合に実行する
      - **WebFetch は使わず、必ず `curl` を使うこと。** `web.archive.org` / `archive.org` は WebFetch がツールレベルでブロックされている（`Claude Code is unable to fetch from ...`）が、curl からは正常にアクセスできる
      - a. スナップショットの有無を確認する
        ```
        curl -sS --max-time 30 "https://archive.org/wayback/available?url=<元URL>"
        ```
        - レスポンス JSON の `archived_snapshots.closest` が存在し、かつ `status` が `"200"` の場合のみ、その `timestamp`（例: `20260814104128`）を採用する
        - `archived_snapshots` が空オブジェクト `{}` の場合、または `status` が `"200"` 以外の場合はスナップショットなしとして 4. に進む
      - b. スナップショット本文を取得する
        ```
        curl -sSL --max-time 60 "https://web.archive.org/web/<timestamp>if_/<元URL>" -o /tmp/wayback.html
        ```
        - 取得した HTML から `<script>` / `<style>` ブロックとタグを除去し、本文の冒頭約3000文字を要約の材料として使う
      - **`<timestamp>` 直後の `if_` サフィックスは必須**（Wayback のバナーや注入 JS を除いた、アーカイブ時点の原本 HTML が返る）。`https://web.archive.org/web/latest/<元URL>` は Wayback のトップページにリダイレクトされ、`https://web.archive.org/web/2/<元URL>` は Cloudflare のブロックページのスナップショットに解決されることがあるため、**どちらの形式も使ってはならない**
      - 取得結果が Cloudflare の「Attention Required」「Just a moment...」「Enable JavaScript and cookies to continue」などのブロックページを保存したものだった場合、または 1. と同じ基準（本文相当のテキストが 500 文字未満、タイトルのみ 等）で実質的なコンテンツがないと判断される場合は、**失敗扱いとして 4. に進む**
      - 本文が取得できた場合は、それが**アーカイブ時点のスナップショット**であり最新の内容と異なる可能性がある点に注意して要約する
   4. **代替URLフォールバック**: 取得済みコメント（トップレベル＋リプライ）の `text` フィールドから、記事本文を読める代替URL（一次情報、著者の公式ブログ、論文のアブストラクトページ、プレスリリース、GitHub リポジトリなど）を抽出して WebFetch を試みる。HN ではペイウォール記事に有志が一次ソースをコメントすることが多いため有効
      - **試行禁止ドメイン**: 以下のドメインは WebFetch がツールレベルでブロックしており（`Claude Code is unable to fetch from ...`）、curl での代替手段も確認できていないため **試行してはならない**: `archive.is` / `archive.ph` / `archive.today` / `archive.md` / `archive.li` / `archive.fo` / `12ft.io` / `freedium.cfd`
        - コメントやストーリー本文にこれらの URL が含まれていても無視すること。他に候補がなければ試行せず直ちに 5. のコメントベース要約に進む
      - **`web.archive.org` / `archive.org` は WebFetch 経由のみ禁止**（ツールレベルでブロックされているため）。これらへのアクセスは 3. と同じ curl 手順で行うこと。コメント中に `https://web.archive.org/web/<timestamp>/<url>` 形式の URL があった場合は、`<timestamp>` の直後に `if_` を挿入した URL を `curl -sSL --max-time 60` で取得する
      - 1. の既知スキップドメインに該当する URL も同様に対象外とする
      - **パスが `.pdf` で終わる代替URL も 1. と同じ理由（WebFetch がテキストを抽出できない）で対象外とする。** ただし `arxiv.org/pdf/<id>` は 1. と同様に `arxiv.org/abs/<id>` に書き換えれば試行してよい
      - URL抽出時は HTML エンティティをデコードする（例: `&#x2F;` → `/`、`&amp;` → `&`）
      - 複数ヒットした場合は最初に成功したものを採用する
      - 代替URL の取得結果も 1. と同じ基準で判定し、「HTTP 200 だが実質的なコンテンツなし」なら servo-fetch skill での再取得を試みてよい
   5. **コメントベース要約**: 元URL・Wayback スナップショット・代替URL のいずれも取得できない場合は、コメント本文から記事内容を推測して要約する

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/10-00-${AGENT_SLUG}.md)

本文は以下の構造で書く:

各ストーリーについて（**「データ取得方法」手順2でスコア降順に並べ替えた後の順序**で記載する）:

- 見出しの番号 1〜10 は、**並べ替え後の配列に対して先頭から機械的に振り直す**（1 = 最高スコア、10 = 最低スコア）。topstories API 上の順位は番号として使わない
- 書き出す前に次を検証する: 10件の HN item ID がすべて異なること（同じストーリーを二重に書いていない）、番号が 1 から 10 まで重複・欠番なく並んでいること、**Score** の値が上から下へ単調に減少（同値は可）していること

## 1. [Story Title](url)

**Score:** {score} | **Comments:** {descendants} | [Post](https://news.ycombinator.com/item?id={id})

{ストーリーの内容を2-3文で要約。記事コンテンツが取得できた場合はその内容を優先し、取得できなかった場合はコメントから推測して要約する}

### Key Discussion Points

- **{commenter}**: {コメントの要約}
  - **{reply_commenter}**: {リプライの要約}（スコア150以上のストーリーのみ、リプライがある場合）
- **{commenter}**: {コメントの要約}

最後に ## Trends セクションを設け、トップ10に共通するテーマや傾向を簡潔にまとめる。
