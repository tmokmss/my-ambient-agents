現在の日本時間: ${JST_TIME}

世界のバズ・トレンドを収集し、暇つぶしに読めるダイジェストレポートを日本語で生成せよ。

## データソースと取得方法

以下の5ソースからデータを取得する。
注意: WebFetch ツールでブロックされるサイトがあるため、データ取得には curl コマンドを使うこと。
JSON のパースには jq を使うこと。

### 1. はてなブックマーク (日本のホットエントリ)
RSSを取得してパース:
- https://b.hatena.ne.jp/hotentry/general.rss (総合)
各エントリの title, link, description, bookmarkcount を取得。
このフィードは RSS 2.0 ではなく **RSS 1.0 (RDF)** 形式で、デフォルト名前空間 rss (http://purl.org/rss/1.0/) の要素を参照すること。
名前空間を省いた `.//item` は必ず0件になる。また item は channel の子ではなく rdf:RDF 直下にある。
bookmarkcount は名前空間 hatena (http://www.hatena.ne.jp/info/xmlns#) の要素。

```python
import xml.etree.ElementTree as ET
ns = {'rss': 'http://purl.org/rss/1.0/', 'hatena': 'http://www.hatena.ne.jp/info/xmlns#'}
root = ET.parse('hb.rss').getroot()   # ルートは rdf:RDF
items = root.findall('rss:item', ns)  # channel の子ではなく RDF 直下
for it in items:
    title = it.findtext('rss:title', '', ns)
    link  = it.findtext('rss:link', '', ns)
    desc  = it.findtext('rss:description', '', ns)
    bc    = it.findtext('hatena:bookmarkcount', '', ns)
```

正規表現でパースする場合、実タグは `<item rdf:about="...">` なので `<item>` ではなく `<item [^>]*>` にマッチさせること。
パース結果が0件だった場合は「取得失敗」と判断する前に名前空間指定の誤りを疑い、上記の方法で取り直すこと。

### 2. Togetter (X/Twitterまとめ)
RSSを取得してパース:
- https://togetter.com/rss/hot
各エントリの title, link, description を取得。

### 3. Google Trends (日本の検索トレンド)
RSSを取得してパース:
- https://trends.google.co.jp/trending/rss?geo=JP
名前空間 ht (https://trends.google.com/trending/rss) の要素を参照すること。
各エントリの title, ht:approx_traffic を取得。
関連ニュースがある場合は ht:news_item 内の ht:news_item_title と ht:news_item_url も取得。
ただし ht:news_item が0件、または ht:news_item_url がすべて空のエントリは候補から除外し、次点のキーワードへ繰り上げる
（トラフィックの多寡にかかわらず除外する）。話題になった根拠となるニュース記事が取れたエントリのみを掲載し、
推測でトレンド入りの理由を書いてはならない。

### 4. YouTube Trending (トレンド動画)
YouTube Data API を使用して、US と JP の2地域のトレンド動画を取得する:
- US: curl "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=$YOUTUBE_DATA_API_KEY"
- JP: curl "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=JP&maxResults=20&key=$YOUTUBE_DATA_API_KEY"
snippet.title, snippet.channelTitle, statistics.viewCount を取得。
各動画のURLは https://www.youtube.com/watch?v={id} の形式でリンクすること。
注意: API キーは環境変数 $YOUTUBE_DATA_API_KEY を直接参照すること。キーの値を echo や print で出力してはならない。
取得後に jq で `statistics.viewCount` が 10000 未満（ライブ配信中・終了直後など視聴数未集計の動画）の動画を除外し、残った動画からピックアップすること。
US と JP の両方を取得したら、ピックアップ前に「重複排除」の「同一レポート内の重複（YouTube US / JP）」に従い、両リージョンに共通して出現する video ID をチェックすること。

### 5. 英語圏ネットカルチャー (Boing Boing + Atlas Obscura)
以下の2つのRSSを両方取得してパースする。どちらも RSS 2.0 で item/title・link・description の構造が同じなので、同じパース処理を流用してよい:
- Boing Boing: `curl -sL --max-time 30 -A "Mozilla/5.0 (compatible; ambient-agent/1.0)" "https://boingboing.net/feed"` (約30件)
- Atlas Obscura: `curl -sL --max-time 30 -A "Mozilla/5.0 (compatible; ambient-agent/1.0)" "https://www.atlasobscura.com/feeds/latest"` (約27件)
各エントリの title, link, description, category（複数あり得る）, dc:creator を取得し、どちらのフィード由来かを保持しておく（レポートでソース名を併記するため）。

Boing Boing のエントリのうち、`<category>` に `BoingBoing Shop` または `shop` を含むもの、
あるいは `<dc:creator>` が `Boing Boing's Shop` であるものは、アフィリエイト目的の商品販売・オンラインコース紹介記事
（スポンサードコンテンツ）であるため、ピックアップ候補から必ず除外する。
「$19.99 のこのアプリが…」のようにタイトルだけではニュース記事と区別がつかないため、
タイトルの文面ではなく必ず category / dc:creator フィールドで機械的に判定すること。
この除外は Boing Boing にのみ適用し、Atlas Obscura には適用しない。

片方のフィードだけ取得に失敗した場合は「取得失敗時の対応」のルールに従いリトライせずスキップし、取得できた側だけでこのセクションを成立させる。

## 取得失敗時の対応

各ソースの取得が失敗した場合（HTTP エラー、空レスポンス、パース不能など）は、リトライせずそのソースをスキップしてレポートに「取得失敗」と明記する。
最低2ソース以上のデータが取得できればレポートを生成する。全ソース失敗の場合はレポートを生成しない。

## 重複排除

### 過去レポートとの重複

以下のコマンドを実行し、過去レポートに掲載済みのタイトル・URL 一覧を取得する:

```bash
node scripts/report-index.mjs ${AGENT_SLUG} 3
```

本日を含む直近3つの日付ディレクトリ（YYYY-MM-DD）の "${AGENT_SLUG}" レポートから、掲載済み項目を `URL<TAB>タイトル` 形式で抽出したものが出力される
（リンクを持たない Google Trends のキーワードは URL 欄が `-` になる）。1日複数回実行時に直近3件がすべて当日分となり前日以前が参照されなくなるのを避けるため、件数ではなく日数で範囲を取っている。
**過去レポートの本文を Read で読み込んではならない。** 重複判定に必要なのはタイトルと URL だけであり、このコマンドの出力のみを参照すること。
過去に取り上げたネタと同一または非常に類似したトピックは除外すること。
同じURL、同じ話題の別記事、同一事件の続報、同一YouTube video IDなどは重複とみなす。

### 同一レポート内の重複（YouTube US / JP）

US と JP の `mostPopular` 取得結果を **video ID で突き合わせ**、両方に含まれる ID を検出する。
K-POP の新曲 M/V など世界同時公開の動画では両リージョンに同じ動画が入ることが定期的に発生する。
`statistics.viewCount` は地域別ではなく全世界の累計再生数であり US / JP で同じ値になるため、再生数では掲載先の優劣を判定できない。
両リージョンに出現した動画は **`## YouTube Trending (US)` にのみ掲載し、`## YouTube Trending (JP)` の候補からは機械的に除外する**。
JP セクションは除外後の残り候補から次点を繰り上げて所定の件数を満たすこと。
情報を落とさないため、US 側の解説文の末尾に「JP のトレンドにも同時ランクインしている」旨を1文添える。
除外の結果 JP の候補が3件未満になった場合は、無理に件数を埋めず取得できた件数のみを掲載し、
セクション末尾に「※ US トレンドとの重複を除いた新規動画が N 件のみだった」旨の注記を1行入れる。

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- title: "世界バズ・ダイジェスト（{日本時間の日付}）" の形式にする（例: 世界バズ・ダイジェスト（2026年3月6日））
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/08-00-${AGENT_SLUG}.md)
- tags: 記事の内容に応じて自由にタグをつける（例: "ai", "gaming", "politics", "security", "culture" など）。ソース名をタグにする必要はない

本文の構造:

ソース別にセクションを分け、各ソースから面白い・注目すべきトピックを3-5件ピックアップする。
単なるタイトル列挙ではなく、なぜ面白いのか・何が話題なのかを1-2文で解説する。

## はてなブックマーク
- **[タイトル](元記事url)** ([{users}users](はてブページurl)) - 日本語で内容の解説
はてブページURLは https://b.hatena.ne.jp/entry/s/{元記事URLからhttps://を除いたもの} の形式（例: 元記事が https://example.com/foo なら https://b.hatena.ne.jp/entry/s/example.com/foo）

## Togetter
- **[タイトル](url)** - 日本語で内容の解説

## Google Trends (日本)
- **キーワード** ({検索ボリューム}) - 関連ニュース: [ニュースタイトル](url) / なぜ話題なのかを1-2文で解説

関連ニュース情報が空のエントリを除外した結果、候補が3件未満になった場合は、無理に件数を埋めず取得できた件数のみを掲載し、セクション末尾に「※ 関連ニュース情報のあるトレンドが N 件のみだった」旨の注記を1行入れる。

## YouTube Trending (US)
- **[タイトル](url)** ({再生数}, {チャンネル名}) - 日本語で内容の解説

## YouTube Trending (JP)
- **[タイトル](url)** ({再生数}, {チャンネル名}) - 日本語で内容の解説

## 英語圏ネットカルチャー
- **[タイトル](url)** (Boing Boing) - 日本語で内容の解説
- **[タイトル](url)** (Atlas Obscura) - 日本語で内容の解説

Boing Boing と Atlas Obscura の記事を合算した候補から3-5件をピックアップし、各項目の末尾に上記のようにソース名を併記する。
偏りを避けるため、片方のフィードから採用するのは最大4件までとする。
重複排除後の合算候補が3件未満になった場合は、無理に件数を埋めず取得できた件数のみを掲載し、セクション末尾に「※ 新規に取り上げられる記事が N 件のみだった」旨の注記を1行入れる。

最後に ## ひとこと セクションで、全体を通じて気になったトピックを1つだけ取り上げて軽くコメントする。
