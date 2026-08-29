# 見送り済み Issue 台帳

Triage Issues エージェント（`.github/workflows/triage-issues.yml`）が「見送り」と判断して close した
改善提案の一覧。

**この台帳の目的**: 各エージェントが suggest-improvements skill で改善提案を起票する際に、
既に見送られたテーマを再び起票しないようにするため。Issue を起票する前に必ずこのファイルを読むこと。

同じテーマの提案は、**状況が変わった場合を除き起票してはならない**。
状況が変わった場合（外部要因だったものが解消された、代替ソースが利用可能になった等）は、
新規 Issue の冒頭に `関連: #<台帳の Issue 番号>（見送り後に状況が変化）` と何が変わったのかを明記すること。

| Issue | エージェント | 見送りテーマ | 該当基準 | 判断日 |
| --- | --- | --- | --- | --- |
| #15 | news-briefing | Reuters RSS の description が空なので記事本文取得の代替手段を追加する | 重複 | 2026-08-20 |
| #23 | tech-feed | Lobsters のスコアが RSS から取れず全件 `?` になるので JSON API 等で補完する | 重複 | 2026-08-20 |
| #359 | news-briefing | NHK 記事本文が利用意向確認ゲート（NHK ONE）でブロックされるため、本文取得の代替手段（NEWS WEB EASY の JSON API 等）を追加する | 外部要因 / 重複 | 2026-08-21 |
| #42, #356 | hackernews-top10 | Hacker News の上位10件に最低スコア閾値を設けて低スコアの直近投稿を除外する（上位N件を取得してスコア順に再選出する案を含む） | 効果不確実（オーナー判断: 色々なスコア帯の記事を見たいため導入しない） | 2026-08-23 |
| #12 | ai-watch | DeepMind ブログの記事 URL / 公開日が取得できないため URL 抽出やフォールバックを強化する | 重複（情報源を `deepmind.google/blog/rss.xml` に切替済みで解消。`discover/blog` の HTML パース禁止も明記済み） | 2026-08-23 |
| #501 | ai-watch | DeepMind ブログ記事の公開日が月単位でしか取れず日付フィルタが不正確なため、公開日の取得方法を改善する | 重複（`deepmind.google/blog/rss.xml` への切替済みで `pubDate` から日次精度の公開日が取得可能。HTML スクレイピングへの回帰案は採用しない） | 2026-08-26 |
| #38 | geopolitics-dual-view | Kyiv Independent が RSS ではなく HTML（Next.js SPA）を返し取得不能なため、取得方法の変更や代替ウクライナ系ソースを追加する | 重複（PR #658 で Kyiv Independent はプロンプトから削除済み。代替として Ukrinform EN `ukrinform.net/rss/block-lastnews` を採用済みで、Ukrainska Pravda RSS ともども疎通確認済み） | 2026-08-28 |
| #140 | geopolitics-dual-view | Tehran Times RSS が数日遅延・停止してイラン政府系視点が欠落するため、Press TV 等の代替イラン系ソースへ差し替える | 外部要因（上流の断続的な配信停止。2026-08-29 時点で `tehrantimes.com/rss` は HTTP 200・最新記事は約8時間前と正常稼働に復帰しており、直近14本のレポートでも取得失敗なし。代替案の Press TV は `/rss` `/rss.xml` `/rss/` すべて TLS 検証失敗で到達不能なため、稼働中のソースを死んだソースに置き換えることになる。IRNA `en.irna.ir/rss` も正常稼働中で政府系視点の欠落は発生していない） | 2026-08-29 |

## 該当基準

- **外部要因** — 外部要因で自リポジトリでは解決不能（Cloudflare ブロック、JS レンダリング必須、RSS 側の更新頻度など）
- **一過性** — 一過性イベント起因（期間限定の現象に対して恒久ルールを足すと平常時に悪影響）
- **重複** — 既存プロンプトの指示と実質重複
- **効果不確実** — 改善効果が測れない、または他の品質とのトレードオフが大きい
