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

### 2. Zenn トレンド
RSSを取得してパース:
- https://zenn.dev/feed
各エントリの title, link, description を取得。

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
RSSを取得してパース:
- https://dev.to/feed
各エントリの title, link, description を取得。

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
RSSを取得し、TechCrunch と同じスクリプトでパースする（URL のみ差し替え。こちらも `<description>` は複数行 CDATA）:

```bash
curl -s --max-time 15 'https://feeds.arstechnica.com/arstechnica/index' | python3 -c "
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

## 取得失敗時の対応

各ソースの取得が失敗した場合（HTTP エラー、空レスポンス、パース不能など）は、リトライせずそのソースをスキップしてレポートに「取得失敗」と明記する。
最低2ソース以上のデータが取得できればレポートを生成する。全ソース失敗の場合はレポートを生成しない。

RSS の `<description>` が空に見える場合、多くはパーサが複数行 CDATA に対応していないことが原因（フィード側の問題ではない）。
上記スニペットのように `re.DOTALL` と CDATA 展開を使ったパースを必ず試し、それでも空のときだけ `<content:encoded>` にフォールバックすること。
Atom フィード（Qiita 等）では概要が `<summary>` ではなく `<content>` に入っていることがあり、`<summary>` が全件空でもフィード側の問題ではない。その場合は `<content>` を見ること。
個別記事を WebFetch/curl で取得しに行く必要はない。

## 重複排除

src/content/reports/ ディレクトリ以下を再帰的に検索し、ファイル名に "${AGENT_SLUG}" を含むものをパスの降順でソートし、直近3件を読み込む。
過去に取り上げたネタと同一または非常に類似したトピックは除外すること。
同じURL、同じ話題の別記事、同一事件の続報などは重複とみなす。

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
