Hacker News のトップストーリーを取得し、上位10件をサマライズしてレポートを生成せよ。
言語は日本語で出力すること。

## データ取得方法

Hacker News API (https://hacker-news.firebaseio.com/v0/) を使用:
1. GET /topstories.json でトップストーリーIDの配列を取得
2. 上位10件の各IDについて GET /item/{id}.json でストーリー詳細を取得
3. 各ストーリーの `url` フィールドが存在する場合、WebFetch でリンク先の記事コンテンツを取得する
   - ページが非常に長い場合は冒頭部分（約3000文字）のみ使用する
   - 取得失敗（paywall、認証必須、タイムアウトなど）の場合はコメントベースの要約にフォールバックする
   - `url` フィールドがない場合（Ask HN など）はスキップする
4. 各ストーリーの kids (コメントID) から上位5件について GET /item/{comment_id}.json でコメントを取得
5. **スコアが150以上のストーリー**については、各トップレベルコメントの kids から上位2〜3件のリプライも GET /item/{reply_id}.json で追加取得する
   - リプライがさらにリプライを持つ場合（孫コメント）は取得不要
   - リプライが存在しない（kids が空）コメントはスキップ

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
