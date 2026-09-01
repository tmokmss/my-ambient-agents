現在の日本時間: ${JST_TIME}

テック系RSSフィードを巡回し、開発者向けダイジェストレポートを日本語で生成せよ。

## データソースと取得方法

以下の8ソースからデータを取得する。
注意: WebFetch ツールでブロックされるサイトがあるため、データ取得には curl コマンドを使うこと。
XML/Atom のパースには Python（`re.DOTALL` を有効にした正規表現）を使うこと。
`<description>` などが複数行の CDATA で出力されるフィードがあり、単一行前提の grep/sed では中身が空になる。

### 1. はてなブックマーク テクノロジー
RSSを取得し、Python で RDF 全体をパースする（`head` 等で出力を制限してはならない）:

```bash
curl -s --max-time 15 'https://b.hatena.ne.jp/hotentry/it.rss' | python3 -c "
import sys, re, html
data = sys.stdin.read()
for m in re.finditer(r'<item rdf:about=\"([^\"]+)\">(.*?)</item>', data, re.DOTALL):
    url = m.group(1)
    content = m.group(2)
    title = re.search(r'<title>(.*?)</title>', content)
    count = re.search(r'<hatena:bookmarkcount>(.*?)</hatena:bookmarkcount>', content)
    if title:
        print(count.group(1) if count else '?', html.unescape(title.group(1)), url)
"
```

各エントリの title, link, bookmarkcount を全件取得すること。

はてブの「テクノロジー」カテゴリは IT 全般を広く扱うカテゴリで、家電・ガジェットのレビュー、医療・健康、税務・資格・就活、政治・行政・芸能・事件のニュース、生活 tips や SNS のバズまとめが高いブックマーク数で混入する。
ブックマーク数は話題性の指標であって技術的価値のシグナルではないため、**ブックマーク数順にそのまま採用せず、取得した全件から次の基準で技術記事を選ぶ**こと。

- 優先する: 実装・コード、ライブラリ／フレームワーク、インフラ・クラウド、セキュリティ、設計・アーキテクチャ、パフォーマンス、AI/LLM の開発利用、OSS・開発ツール、障害レポート／ポストモーテム、標準仕様・プロトコルなど、開発者にとって技術的知見のある記事
- 除外する: 一般消費者向けの家電・ガジェット・製品レビュー、医療・健康・脳科学、税務・控除・資格試験・就活／転職のマインド論、政治・行政・芸能・事件事故のニュース、技術的知見を伴わない生活 tips・SNS バズまとめ

判断はタイトルのキーワードによる機械的な除外ではなく、タイトルから読み取れる主題で行うこと。
「AI で就活」のように技術用語を含んでいても主題が非技術のものは除外し、逆にハードウェアの内部構造、電池・半導体などの要素技術、開発ツールベンダーの動向のように、一見プロダクト寄りでも開発者にとって技術的知見のあるものは対象に含めてよい。
上記基準を満たす記事が3件に満たない場合は、無理に枠を埋めず件数を減らしてよい。

### 2. Zenn トレンド
RSSを取得し、Python でパースする（このフィードは Atom ではなく RSS 2.0 で、`<title>` と `<description>` が複数行の CDATA で出力される。CDATA を展開する前にタグ除去すると `<![CDATA[` から `]]>` までが1つのタグとみなされて消え、タイトルも概要も全件空になる）:

```bash
curl -s --max-time 15 'https://zenn.dev/feed' | python3 -c "
import sys, re, html
d = sys.stdin.read()
def unwrap(s):
    m = re.search(r'<!\[CDATA\[(.*?)\]\]>', s, re.S)
    s = m.group(1) if m else s
    s = re.sub(r'<[^>]+>', ' ', s)
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()
for it in re.findall(r'<item[^>]*>(.*?)</item>', d, re.S)[:20]:
    g = lambda tag: (lambda m: unwrap(m.group(1)) if m else '')(re.search(r'<%s[^>]*>(.*?)</%s>' % (tag, tag), it, re.S))
    print('TITLE:', g('title')); print('URL:', g('link')); print('DESC:', g('description')[:300]); print('---')
"
```

各エントリの title, link, description を全件取得すること。

### 3. Qiita 人気記事
Atom フィードを取得し、Python でパースする（このフィードに `<summary>` は存在せず、概要は `<content>` に入っている。また `<link>` は `href` 属性を持つ自己終端タグでテキストノードに URL がないため、属性から取り出す必要がある）:

```bash
curl -s --max-time 15 'https://qiita.com/popular-items/feed.atom' | python3 -c "
import sys, re, html
d = sys.stdin.read()
def clean(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s))).strip()
for e in re.findall(r'<entry[^>]*>(.*?)</entry>', d, re.S):
    title = re.search(r'<title[^>]*>(.*?)</title>', e, re.S)
    link = re.search(r'<link[^>]*href=\"([^\"]+)\"', e)
    body = re.search(r'<content[^>]*>(.*?)</content>', e, re.S)
    print('TITLE:', clean(title.group(1)) if title else '')
    print('URL:', link.group(1).split('?')[0] if link else '')
    print('DESC:', clean(body.group(1))[:300] if body else '')
    print('---')
"
```

各エントリの title, link, content を全件取得すること。
`href` には `?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items` という追跡パラメータが付くので、上のスニペットのように `?` 以降を落としてからレポートのリンクに使うこと。
`<content>` の中身は記事全文ではなく末尾が「...」で切られた冒頭の抜粋なので、全文の要約と誤解せず「冒頭抜粋」として扱い、解説を書く際も抜粋から読み取れる範囲に留めること。

popular-items はビュー数・いいね数ベースのランキングであり、共感系・入門系の記事が技術記事と同等以上のスコアを獲得しやすい構造になっている。
そのため**上位順にそのまま採用せず、取得した記事全体から次の基準で技術記事を選ぶ**こと。

- 優先する: 実装、ライブラリ／フレームワーク、インフラ、セキュリティ、設計パターン、パフォーマンス、トラブルシューティング、新しいツールの検証など、コード・仕様・具体的な技術的知見を含む記事
- 除外する: 未経験者／新人向けのキャリアアドバイス、マインドセット・モチベーション・処世術、コミュニケーション／報連相／ビジネスマナー、学習ロードマップ・資格試験の勉強法・合格体験記、言語の基礎構文のみを解説する初心者向け入門記事

判断はタイトルのキーワードによる機械的な除外ではなく、タイトルと冒頭抜粋から読み取れる内容で行うこと
（「Rust 入門」「新卒研修で作った社内基盤」のように、初学者向けの語を含んでいても技術的知見のある記事は対象に含める）。
上記基準を満たす記事が3件に満たない場合は、無理に枠を埋めず件数を減らしてよい。

### 4. AWS Whats New
RSSを取得してパース:
- https://aws.amazon.com/about-aws/whats-new/recent/feed/
各エントリの title, link, pubDate, description を取得。

### 5. Lobsters
JSON API を取得してパース（RSS にはスコア情報が含まれないため JSON API を使用する）:
- https://lobste.rs/hottest.json

```bash
curl -s --max-time 15 'https://lobste.rs/hottest.json' | python3 -c "
import sys, json
data = json.load(sys.stdin)
for item in data[:15]:
    print('TITLE:', item['title'])
    print('URL:', item['url'])
    print('SCORE:', item['score'])
    print('COMMENTS:', item['comment_count'])
    print('COMMENTS_URL:', item['comments_url'])
    print('TAGS:', ','.join(item.get('tags', [])))
    print('---')
"
```

各エントリの title, url, score, comment_count, tags を取得。タグ（programming, security, web 等）を品質フィルタとして活用してよい。

### 6. dev.to
JSON API を取得してパース（RSS には言語情報が含まれず、ポルトガル語・スペイン語等の非英語記事が混入するため JSON API を使用する）:
- https://dev.to/api/articles?per_page=30

```bash
curl -s --max-time 15 'https://dev.to/api/articles?per_page=30' | python3 -c "
import sys, json, re
for a in json.load(sys.stdin):
    if a.get('language') != 'en': continue
    desc = re.sub(r'\s+', ' ', (a.get('description') or '')).strip()
    print('TITLE:', a['title'])
    print('URL:', a['url'])
    print('REACTIONS:', a.get('positive_reactions_count'))
    print('COMMENTS:', a.get('comments_count'))
    print('TAGS:', ','.join(a.get('tag_list') or []))
    print('DESC:', desc[:300])
    print('---')
"
```

各エントリの title, url, description を取得。`language` が `"en"` 以外（`null` を含む）のエントリはスキップする。
併せて取得できる positive_reactions_count と tag_list は、Lobsters の score / tags と同様に品質フィルタとして活用してよい
（リアクションがほとんど付いていない記事や、技術的な内容を伴わないタグのみの記事は候補から外してよい）。

### 7. TechCrunch
RSSを取得し、Python でパースする（`<description>` は複数行の CDATA で出力されるため、`re.DOTALL` と CDATA 展開が必須。単一行の grep/sed では概要が空になる）:

```bash
curl -s --max-time 15 'https://techcrunch.com/feed/' | python3 -c "
import sys, re, html
d = sys.stdin.read()
def unwrap(s):
    m = re.search(r'<!\[CDATA\[(.*?)\]\]>', s, re.S)
    s = m.group(1) if m else s
    s = re.sub(r'<[^>]+>', ' ', s)
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()
for it in re.findall(r'<item[^>]*>(.*?)</item>', d, re.S)[:10]:
    g = lambda tag: (lambda m: unwrap(m.group(1)) if m else '')(re.search(r'<%s[^>]*>(.*?)</%s>' % (tag, tag), it, re.S))
    desc = g('description') or g('content:encoded')[:300]
    print('TITLE:', g('title')); print('URL:', g('link')); print('DATE:', g('pubDate')); print('DESC:', desc); print('---')
"
```

各エントリの title, link, pubDate, description を取得。

### 8. Ars Technica
`index` フィードは全社共通の総合フィードで、健康・自動車・宇宙・カルチャー・ゲームなど非技術カテゴリが大半を占める。
そのため**カテゴリ別フィードを併用**し、`technology-lab`（IT・セキュリティ中心）→ `gadgets`（ハードウェア）→ `index`（総合）の3本を続けて取得して連結し、まとめてパースする（`<description>` は複数行 CDATA なので `re.DOTALL` と CDATA 展開が必須）:

```bash
curl -s --max-time 15 \
  'https://feeds.arstechnica.com/arstechnica/technology-lab' \
  'https://feeds.arstechnica.com/arstechnica/gadgets' \
  'https://feeds.arstechnica.com/arstechnica/index' | python3 -c "
import sys, re, html
d = sys.stdin.read()
def unwrap(s):
    m = re.search(r'<!\[CDATA\[(.*?)\]\]>', s, re.S)
    s = m.group(1) if m else s
    s = re.sub(r'<[^>]+>', ' ', s)
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()
seen = set()
for it in re.findall(r'<item[^>]*>(.*?)</item>', d, re.S):
    g = lambda tag: (lambda m: unwrap(m.group(1)) if m else '')(re.search(r'<%s[^>]*>(.*?)</%s>' % (tag, tag), it, re.S))
    url = g('link')
    if not url or url in seen: continue
    seen.add(url)
    cat = re.sub(r'^https?://[^/]+/', '', url).split('/')[0]
    desc = g('description') or g('content:encoded')[:300]
    print('TITLE:', g('title')); print('URL:', url); print('CATEGORY:', cat); print('DATE:', g('pubDate')); print('DESC:', desc); print('---')
"
```

各エントリの title, link, pubDate, description を取得する。URL で重複排除しており、3フィード合計で50件前後の候補が得られる（`head` 等で出力を制限してはならない）。
`CATEGORY` は記事 URL の第1パスセグメント（`security` / `ai` / `gadgets` / `health` など）で、選別のシグナルとして使う。
なお **RSS のフィードスラッグとして有効なのは `technology-lab` / `gadgets` / `index` のみ**で、`security` や `ai` は記事 URL のパスとしては現れるがフィード URL に使うと 404 になる。上記3本以外を試してはならない。

`index` を含めている以上、非技術カテゴリの記事は必ず混入する。**取得順にそのまま採用せず、取得した全件から次の基準で選ぶ**こと。

- 優先する: `/security/`、`/ai/`、`/information-technology/`、`/gadgets/` 配下のうち、脆弱性・攻撃手法・インフラ・OS・ネットワーク・半導体・AI の技術的な仕組みなど、開発者にとって技術的知見のある記事。`/tech-policy/` 配下は技術規制・プライバシー・著作権・独占禁止・プラットフォーム法制など、技術産業の構造に関わるものに限って対象とする
- 除外する: `/health/`、`/cars/`、`/culture/`、`/gaming/`、`/science/`、`/space/`、`/staff/` 配下の記事、および `/tech-policy/` 配下でも純粋な政治スキャンダル・選挙・人事に終始する記事

判断は URL パスやキーワードによる機械的な除外ではなく、タイトルと概要から読み取れる主題で行うこと
（`/science/` でも半導体・計算機科学の要素技術を扱うものは含めてよく、逆に `/gadgets/` でも消費者向けの購入ガイドに終始するものは除外する）。
上記基準を満たす記事が3件に満たない場合は、無理に枠を埋めず件数を減らしてよい。

## 取得失敗時の対応

各ソースの取得が失敗した場合（HTTP エラー、空レスポンス、パース不能など）は、リトライせずそのソースをスキップしてレポートに「取得失敗」と明記する。
最低2ソース以上のデータが取得できればレポートを生成する。全ソース失敗の場合はレポートを生成しない。

RSS の `<description>` が空に見える場合、多くはパーサが複数行 CDATA に対応していないことが原因（フィード側の問題ではない）。
上記スニペットのように `re.DOTALL` と CDATA 展開を使ったパースを必ず試し、それでも空のときだけ `<content:encoded>` にフォールバックすること。
Atom フィード（Qiita 等）では概要が `<summary>` ではなく `<content>` に入っていることがあり、`<summary>` が全件空でもフィード側の問題ではない。その場合は `<content>` を見ること。
個別記事を WebFetch/curl で取得しに行く必要はない。

## 重複排除

### 過去レポートとの重複

src/content/reports/ ディレクトリ以下を再帰的に検索し、ファイル名に "${AGENT_SLUG}" を含むものをパスの降順でソートし、直近3件を読み込む。
過去に取り上げたネタと同一または非常に類似したトピックは除外すること。
同じURL、同じ話題の別記事、同一事件の続報などは重複とみなす。

### 同一レポート内の重複（同一ニュースイベント）

大きなニュースイベントは複数のソースが同時に報じるため、ソースごとに独立して選んでいると、URL が違うだけの同じ話題が別々のセクションに並ぶ。
これを防ぐため、各ソースの候補を出し揃えた後、**ピックアップを確定する前に全ソース横断で**候補をグループ化すること。

- 判定軸は「同じ発表・同じ事件・同じプロダクト／機能のリリースに起因するか」。URL やドメインが異なっても同一グループとみなす。
  - TechCrunch と Ars Technica が同一の事件を別々の見出しで報じている
  - はてなブックマークに同一インシデントの報道が複数社分並んでいる
  - 一次情報（公式アナウンス、リポジトリ）と、それを解説した記事
  - 「第N報」「続報」など、同一事象を追いかけたページ
- **同一グループから掲載するのは最大1件**とする。代表は次の順で選ぶ。
  1. 独自取材・技術的な深掘り・一次情報を含む方
  2. 同等なら情報量の多い方
  3. はてなブックマーク内の複数候補どうしなら、ブックマーク数が最大のもの
- 代表以外はそのソースの候補から除外し、次点を繰り上げて所定の件数を満たす。
- 情報を落とさないため、代表の解説文の末尾に「同じ件を {他ソース名} も別角度で報じている」旨を1文添える。
- 繰り上げてもなお候補が規定件数に満たない場合は無理に埋めず、そのセクションの末尾に「※ 他ソースとの重複を除いた新規記事が N 件のみだった」旨の注記を1行入れる。
- このルールは特定の企業やイベント（WWDC 等）に限定せず、あらゆるトピックに一律で適用する。個別のイベント向けに例外や特別ルールを追加してはならない。

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- title: "Tech Feed ダイジェスト（{日本時間の日付}）" の形式にする（例: Tech Feed ダイジェスト（2026年3月6日））
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/06-03-${AGENT_SLUG}.md)
- tags: 記事の内容に応じて自由にタグをつける（例: "aws", "frontend", "security", "ai", "devops", "golang" 等）。ソース名をタグにする必要はない

本文の構造:

ソース別にセクションを分け、各ソースから注目すべきトピックを3-5件ピックアップする。
単なるタイトル列挙ではなく、技術的な解説を1-2文で付与する。
英語記事は日本語で要約すること。

## はてなブックマーク (テクノロジー)
- **[タイトル](元記事url)** ([{users}users](はてブページurl)) - 解説
はてブページURLは https://b.hatena.ne.jp/entry/s/{元記事URLからhttps://を除いたもの} の形式（例: 元記事が https://example.com/foo なら https://b.hatena.ne.jp/entry/s/example.com/foo）

## Zenn
- **[タイトル](url)** - 解説

## Qiita
- **[タイトル](url)** - 解説

## AWS 新着
- **[タイトル](url)** ({日付}) - 解説

## Lobsters
- **[タイトル](url)** ({score}pt) - 日本語で解説

## dev.to
- **[タイトル](url)** - 日本語で解説

## TechCrunch
- **[タイトル](url)** - 日本語で解説

## Ars Technica
- **[タイトル](url)** - 日本語で解説

## 注目トピック
全ソースを通じて特に注目すべき技術トレンドや話題を1-2段落でまとめる。
