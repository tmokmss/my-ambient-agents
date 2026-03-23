日本の主要ニュースを取得し、朝のブリーフィングレポートを生成せよ。
言語は日本語で出力すること。

## データ取得方法

以下の2つのRSSフィードからニュースを取得する:

1. **NHK News Web** (主要ニュース)
   - URL: https://www.nhk.or.jp/rss/news/cat0.xml
   - curl で取得し、XMLをパースして最新15件のタイトル・リンク・概要を抽出

2. **Reuters Japan**
   - URL: https://assets.wor.jp/rss/rdf/reuters/top.rdf
   - curl で取得し、同様にパース

各フィードから記事を取得したら、リンク先の記事本文も可能な範囲で取得し内容を把握する。

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/00-00-${AGENT_SLUG}.md)

本文は以下の構造で書く:

## 主要ニュース

両ソースから重要度の高いニュースを選び、重複を除いて10件程度にまとめる。

各ニュースについて:

### [ニュースタイトル](url)

**ソース:** NHK / Reuters

{ニュースの内容を2-3文で要約}

最後に ## 今日の注目ポイント セクションを設け、主要テーマや注目すべき動向を3-5個の箇条書きで簡潔にまとめる。
