日本の主要ニュースを取得し、朝のブリーフィングレポートを生成せよ。
言語は日本語で出力すること。

## データ取得方法

以下のRSSフィードからニュースを取得する。取得はいずれも `curl -sL --max-time 30` を使い、XMLをパースしてタイトル・リンク・概要を抽出する。

1. **NHK News Web 主要** (国内の主要ニュース)
   - URL: https://www.nhk.or.jp/rss/news/cat0.xml （失敗時は https://www3.nhk.or.jp/rss/news/cat0.xml を試す）
   - 全件を抽出する。このフィードは構造上7件前後しか配信されないため、件数が少ないことは取得失敗ではない

2. **NHK News Web 国際** (国際ニュース)
   - URL: https://www.nhk.or.jp/rss/news/cat6.xml （失敗時は https://www3.nhk.or.jp/rss/news/cat6.xml を試す）
   - 最新10件を抽出

3. **NHK News Web 社会** (国内ニュースの補完用)
   - URL: https://www.nhk.or.jp/rss/news/cat1.xml （失敗時は https://www3.nhk.or.jp/rss/news/cat1.xml を試す）
   - 最新10件を抽出

4. **NHK News Web 政治** (国内ニュースの補完用)
   - URL: https://www.nhk.or.jp/rss/news/cat4.xml （失敗時は https://www3.nhk.or.jp/rss/news/cat4.xml を試す）
   - 最新10件を抽出

5. **NHK News Web 経済** (国内ニュースの補完用)
   - URL: https://www.nhk.or.jp/rss/news/cat5.xml （失敗時は https://www3.nhk.or.jp/rss/news/cat5.xml を試す）
   - 最新10件を抽出

6. **Yahoo!ニュース トピックス（国際）**
   - URL: https://news.yahoo.co.jp/rss/topics/world.xml
   - 全件（8件程度）を抽出

7. **時事通信 アクセスランキング** (RDF形式)
   - URL: https://www.jiji.com/rss/ranking.rdf
   - 最新10件を抽出

8. **毎日新聞 ニュース速報（総合）** (RDF形式)
   - URL: https://mainichi.jp/rss/etc/mainichi-flash.rss
   - 最新10件を抽出

時事通信・毎日新聞のフィードは RSS 2.0 ではなく **RSS 1.0 (RDF)** 形式で、デフォルト名前空間 `xmlns="http://purl.org/rss/1.0/"` を持つ。item は channel の子ではなく rdf:RDF 直下にあり、実タグは `<item rdf:about="...">`、更新日時は `pubDate` ではなく `dc:date` にある。

```python
ns = {'rss': 'http://purl.org/rss/1.0/', 'dc': 'http://purl.org/dc/elements/1.1/'}
root = ET.fromstring(xml_text)          # ルートは rdf:RDF
items = root.findall('rss:item', ns)   # 名前空間を省いた .//item は必ず0件になる
date = items[0].findtext('dc:date', namespaces=ns)
```

正規表現・grep で抽出する場合は `<item(\s[^>]*)?>(.*?)</item>` のように属性付きタグにマッチし、かつ `<items>` 要素に誤マッチしない形を使うこと（`<item>` の完全一致は0件、`<item[^>]*>` は `<items>` に誤マッチする）。これらのフィードでパース結果が0件だった場合は、取得失敗と判断する前にパース方法を見直して取り直すこと。

Yahoo!ニュース・時事通信・毎日新聞のフィードは item の description が実質空（配信元の固定文言または空文字列）なので、タイトルだけで要約せず、必ずリンク先の記事本文を取得して内容を把握したうえで要約すること。

NHK の記事ページ（`news.web.nhk/newsweb/...`）は NHK ONE の利用意向確認ゲートにより本文が配信されず、HTML に含まれるのは「あわせて読みたい」「注目ワード」「深掘りコンテンツ」「新着ニュース」などのナビゲーションだけである。そのため NHK の記事ページの HTML（`<p>` / `<h1>` 等）をパースして本文として使ってはならない。NHK の記事は RSS item の `<description>` を要約ソースにする。補足情報が必要な場合に限り、記事ページ内の JSON-LD（`NewsArticle` の `description` / `datePublished` / `genre`）または `og:description` を参照してよいが、いずれも途中で切れているため推測で補完しないこと。

レポートに載せる各記事の URL は、必ずその記事自身の RSS item の `<link>` を使う。記事ページ内の関連記事リンクや他記事のタイトルを流用しないこと。

### 取得失敗時の対応

- HTTP ステータスが 200 以外、または item が 0 件のフィードは**取得失敗**と見なす。
- HTTP ステータスが 200 かつ item が 1 件以上でも、最新記事の `pubDate`（RDF 形式の時事通信・毎日新聞では `dc:date`。item に無ければ `lastBuildDate`）が実行時刻から 24 時間以上古いフィードは、配信停止または古いキャッシュを返していると判断し**取得失敗**と見なす。閾値を 24 時間にするのは、更新頻度の低いカテゴリ（NHK 政治など）を誤って失敗扱いしないため。
- item が 1 件以上あり、指定した抽出件数を下回っているだけの場合は取得失敗と見なさない。件数不足を理由に再試行・スキップ・注記のいずれも行わない。
- 取得失敗したフィードは、フォールバック URL が指定されていればそれを試し、無ければ 1 回だけ再試行する。フォールバックの結果も上記の判定で取得失敗となる場合は、そのソースをスキップして残りのソースでレポートを作成する。
- 1 ソースでも成功していればレポートを生成し、失敗を理由に処理を中断しない。
- スキップしたソースがある場合は、レポート末尾に `> 取得できなかったソース: {ソース名（理由）}` の形式で1行注記する。

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/00-00-${AGENT_SLUG}.md)

本文は以下の構造で書く:

## 主要ニュース

各ソースから重要度の高いニュースを選び、重複を除いて10件程度にまとめる。国内ニュースに偏らないよう、国際ニュースを3件程度は含める。

国内ニュースは NHK 主要（cat0）を最優先で採用し、cat0 だけで国内枠（7件程度）が埋まらない場合は NHK 社会（cat1）・政治（cat4）・経済（cat5）・時事通信・毎日新聞から重要度順に補充する。すでに採用した記事と同一 URL または同一見出しのものは重複として除外する。

各ニュースについて:

### [ニュースタイトル](url)

**ソース:** NHK / Yahoo!ニュース / 時事通信 / 毎日新聞 のいずれか（複数ソースが報じている場合は併記）

{ニュースの内容を2-3文で要約}

最後に ## 今日の注目ポイント セクションを設け、主要テーマや注目すべき動向を3-5個の箇条書きで簡潔にまとめる。
