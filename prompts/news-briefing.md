日本の主要ニュースを取得し、朝のブリーフィングレポートを生成せよ。
言語は日本語で出力すること。

## データ取得方法

以下のRSSフィードからニュースを取得する。取得はいずれも `curl -sL --max-time 30` を使い、XMLをパースしてタイトル・リンク・概要を抽出する。

1. **NHK News Web 主要** (国内の主要ニュース)
   - URL: https://www3.nhk.or.jp/rss/news/cat0.xml （失敗時は https://www.nhk.or.jp/rss/news/cat0.xml を試す）
   - 全件を抽出する。このフィードは構造上7件前後しか配信されないため、件数が少ないことは取得失敗ではない

2. **NHK News Web 国際** (国際ニュース)
   - URL: https://www3.nhk.or.jp/rss/news/cat6.xml （失敗時は https://www.nhk.or.jp/rss/news/cat6.xml を試す）
   - 最新10件を抽出

3. **NHK News Web 社会** (国内ニュースの補完用)
   - URL: https://www3.nhk.or.jp/rss/news/cat1.xml （失敗時は https://www.nhk.or.jp/rss/news/cat1.xml を試す）
   - 最新10件を抽出

4. **NHK News Web 政治** (国内ニュースの補完用)
   - URL: https://www3.nhk.or.jp/rss/news/cat4.xml （失敗時は https://www.nhk.or.jp/rss/news/cat4.xml を試す）
   - 最新10件を抽出

5. **NHK News Web 経済** (国内ニュースの補完用)
   - URL: https://www3.nhk.or.jp/rss/news/cat5.xml （失敗時は https://www.nhk.or.jp/rss/news/cat5.xml を試す）
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

Yahoo!ニュース・時事通信・毎日新聞のフィードは item の description が実質空（配信元の固定文言または空文字列）なので、タイトルだけで要約せず、必ずリンク先の記事本文を取得して内容を把握したうえで要約すること。NHK のフィードについても、レポートに採用する記事はリンク先本文を可能な範囲で取得し内容を確認する。

### 取得失敗時の対応

- HTTP ステータスが 200 以外、または item が 0 件のフィードは**取得失敗**と見なす。
- item が 1 件以上あり、指定した抽出件数を下回っているだけの場合は取得失敗と見なさない。件数不足を理由に再試行・スキップ・注記のいずれも行わない。
- 取得失敗したフィードは 1 回だけ再試行し、それでも失敗する場合はそのソースをスキップして残りのソースでレポートを作成する。
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
