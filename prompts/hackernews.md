Hacker News のトップストーリーを取得し、上位10件をサマライズしてレポートを生成せよ。
言語は日本語で出力すること。

## データ取得方法

Hacker News API (https://hacker-news.firebaseio.com/v0/) を使用:
1. GET /topstories.json でトップストーリーIDの配列を取得
2. 上位10件の各IDについて GET /item/{id}.json でストーリー詳細を取得
3. 各ストーリーの kids (コメントID) から上位5件について GET /item/{comment_id}.json でコメントを取得
4. 注目すべきコメントにはリプライも2-3件取得して議論の文脈を把握する

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/10-00-${AGENT_SLUG}.md)

本文は以下の構造で書く:

各ストーリーについて:

## 1. [Story Title](url)

**Score:** {score} | **Comments:** {descendants} | [Post](https://news.ycombinator.com/item?id={id})

{ストーリーの内容を2-3文で要約}

### Key Discussion Points

- **{commenter}**: {コメントとそのスレッドの要約}
- **{commenter}**: {コメントとそのスレッドの要約}

最後に ## Trends セクションを設け、トップ10に共通するテーマや傾向を簡潔にまとめる。
