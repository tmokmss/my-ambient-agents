---
title: "Tech Feed ダイジェスト（2026年11月13日）"
date: "2026-11-13T01:45"
category: "summary"
summary: "Microsoft 365 大規模障害、無印良品のカード番号保持問題、Rust 1.100.0、AgentCore 新ランタイム、Gemini 4 Hydrogen など"
tags: ["aws", "ai", "security", "rust", "agents", "infrastructure", "vscode"]
---

## はてなブックマーク (テクノロジー)
- **[無印良品「21年までクレカ番号で顧客を識別していた」　“全ケタ保有＆漏えい“巡り謝罪　削除漏れなぜ発生](https://www.itmedia.co.jp/article/2611/12/2000003144/)** ([765users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/article/2611/12/2000003144/)) - 顧客識別にクレジットカード番号を使い、その全桁を保持し続けていたことと、削除漏れが起きた経緯を扱う記事。識別子の設計とデータのライフサイクル管理（廃止したデータの確実な削除）という観点で参考になる。
- **[MetaのAIエージェント「Muse」に課金して使い倒した結果の、小ネタと生存戦略](https://www.hageatama.org/20261112/1794464751)** ([375users](https://b.hatena.ne.jp/entry/s/www.hageatama.org/20261112/1794464751)) - Meta のパーソナル AI エージェント Muse を有料プランで使い込んだ筆者による実践メモ。使い方の小ネタと、運用上の工夫がまとまっている。
- **[マイクロソフトで接続障害が発生 世界各地に影響のおそれ | NHKニュース](https://news.web.nhk/newsweb/na/nd-20261113de75121)** ([158users](https://b.hatena.ne.jp/entry/s/news.web.nhk/newsweb/na/nd-20261113de75121)) - Microsoft 365 で Outlook のメール送信などに影響する大規模障害が発生。SaaS 依存先の障害に備えた代替連絡手段の確保という運用面の教訓を改めて考えさせる。日経・ITmedia・朝日なども同じ障害を報じており、TechCrunch も Outlook の障害を取り上げている。
- **[Claudeコードでハーネスエンジニアリングを実践する — 5層の設計パターン](https://zenn.dev/sasadango28/articles/claude-code-harness-engineering-20260415)** ([49users](https://b.hatena.ne.jp/entry/s/zenn.dev/sasadango28/articles/claude-code-harness-engineering-20260415)) - Claude Code を安定して動かすための周辺環境（ハーネス）の設計を、5 層のパターンとして整理した記事。
- **[Announcing Rust 1.100.0 | Rust Blog](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/)** ([21users](https://b.hatena.ne.jp/entry/s/blog.rust-lang.org/2026/11/12/Rust-1.100.0/)) - Rust の 1.100.0 リリース告知。節目のバージョンで、Lobsters でも 69pt を集めている。

## Zenn
- **[Tauri の MSI インストーラーが更新のたびに削除済みデスクトップショートカットを復活させる問題を直した話](https://zenn.dev/takahiro_nago/articles/article-tauri-msi-desktop-shortcut)** - Tauri の MSI 版だけで起きる、更新のたびにショートカットが復活する問題を tauri-bundler 側で修正して PR がマージされた話。WiX のアップグレード挙動と、レビューで指摘された「この修正では直らないこと」にも触れている。
- **【備忘録】[Transformerを数式レベルからnumpyのみで実装して理解する（②Backward Propagation編）](https://zenn.dev/matsu8/articles/a01ba3fc713e03)** - 前回の Forward 編に続き、各部品の誤差逆伝播を numpy だけで実装し、損失から全パラメータまで勾配が流れることを確認する。
- **[Amazon Bedrock AgentCore Gatewayで、vLLMのQwenとAmazon Bedrockを使い分けてみた](https://zenn.dev/fusic/articles/4dc357178cbc1e)** - 平日昼だけ借りる RunPod 上の vLLM（Qwen）と Bedrock を、AgentCore Gateway の推論ターゲットで 1 つの OpenAI 互換 API にまとめる構成を検証。GPU が無い時間帯は Bedrock にフォールバックさせる。
- **[Claude Code に忘れさせたら、トークン使用量が4割減った](https://zenn.dev/sae_eng/articles/0e9ed7205ebc41)** - compact の設定と、離席中に compact させる仕組みを調整して、送信トークン合計が約 4 割減った事例。著者自身の会話記録による概算で、条件は厳密には揃っていない。
- **[週刊Cloudflare - 2026/11/08週](https://zenn.dev/gemcook/articles/weekly-cloudflare_2026_1101-1107)** - 11/01〜11/07 の Cloudflare 更新を網羅的にまとめた週報。Wrangler のパッチ更新などが載っている。

## Qiita
- **[VS Code の Local harness は2027年2月に削除：Copilot harness へ移行する手順とつまずきポイント](https://qiita.com/shahin0809/items/ccb8a8ddf11d6cb4113d)** - 冒頭抜粋と題名によると、VS Code の Local harness が 2027 年 2 月に削除されるため、Copilot harness へ移行する手順を解説する記事。
- **[お漏らししまくりの今だからこそIAPを再度推していく](https://qiita.com/hokutoh/items/873f5117f8507123d509)** - アプリ側ログインは言語・フレームワークの脆弱性に無力なので、リクエストがアプリに届く前に認証する IAP（Identity-Aware Proxy）を推す記事。銀の弾丸ではなく利用シーンは限られる、とも断っている（冒頭抜粋より）。
- **[【Production Ready RAG】PDF・Office・テキストなど17形式で、原文の引用箇所をハイライトしてみた](https://qiita.com/engchina/items/68febc83ffd16eb56f08)** - RAG の回答に付く出典が、PDF のページ・Excel のシート・行など元文書のどこに当たるかを辿れる、という課題に取り組む実装記事（冒頭抜粋から）。
- **[VSCodeのCompare Modelsが面白そうなので試してみた](https://qiita.com/shivvvvvv/items/c1feef6d2ad5ff7f8f73)** - 11/11 に Stable 配信された VS Code 1.146 の新機能 Compare Models を解説し、実際に試す記事。
- **[DDD・CQRS・イベント駆動を組み合わせたバックエンドアーキテクチャ設計](https://qiita.com/ditchcrimson/items/ce71bf981e5cdd0bd8f5)** - ビジネスロジックと技術的実装を分離する方針で、DDD・CQRS・イベント駆動を組み合わせたバックエンド設計を紹介（冒頭抜粋より）。

## AWS 新着
- **[The next generation AgentCore runtime is now the default](https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/)** (2026-11-12) - Bedrock AgentCore の新規ランタイムが次世代ランタイムをデフォルトとして使うようになった。初期化済みエージェントのスナップショットから各セッションを復元する方式。
- **[Amazon Cognito now supports OAuth 2.0 token exchange](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/)** (2026-11-12) - Cognito が RFC 8693 のトークン交換に対応。Web・モバイルアプリに加え AI エージェントのアクセス制御でも使えるとされている。
- **[Amazon Managed Service for Apache Flink introduces enhanced snapshots](https://aws.amazon.com/about-aws/whats-new/2026/11/managed-flink-enhanced-snapshots/)** (2026-11-12) - Flink アプリケーションの状態を取得・エクスポート・復元でき、アプリケーションや AWS リージョンをまたいで移せるようになった。
- **[AWS Glue announces automatic version upgrades for Apache Spark jobs](https://aws.amazon.com/about-aws/whats-new/2026/11/glue-spark-auto-upgrades/)** (2026-11-12) - Spark ジョブを手動の調整なしで最新の Glue ランタイムに追従させる自動バージョンアップ機能。
- **[Amazon Aurora and RDS now support Graviton5-based R9g database instances](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-aurora-rds-postgresql-mysql-mariadb-r9g-instances/)** (2026-11-12) - Graviton5 ベースの R9g インスタンスが、Aurora（PostgreSQL / MySQL 互換）と RDS（PostgreSQL / MySQL / MariaDB）で GA。

## Lobsters
- **[Hello Baochip](https://ratfactor.com/cards/hello-baochip)** (52pt) - Baochip を試す入門的なハードウェア記事（hardware タグ）。
- **[Adapting CPython for yk](https://tratt.net/laurie/blog/2026/adapting_cpython_for_yk.html)** (18pt) - Laurence Tratt による、CPython を yk（メタトレーシング JIT の枠組み）向けに適応させる話（compilers / python タグ）。
- **[Paths in pieces](https://stoppels.ch/2026/11/12/paths-in-pieces.html)** (16pt) - Unix のパス処理を扱う記事（unix タグ）。
- **[Secure Exclaves and Ambient Sensing](https://security.apple.com/blog/secure-exclaves/)** (3pt) - Apple Security Research ブログの記事。Secure Exclaves と環境センシングのプライバシー・セキュリティを扱う。
- **[Announcing the GraphQL over HTTP specification](https://graphql.org/blog/2026-11-12-announcing-the-graphql-over-http-spec/)** (1pt) - GraphQL を HTTP 上で扱う方法を定めた仕様の公開告知。投稿直後でスコアは低いが、API 開発者には重要な標準化。

## dev.to
- **[MCP Is Dead Simple. And That's Exactly the Problem](https://dev.to/sylwia-lask/mcp-is-dead-simple-and-thats-exactly-the-problem-5811)** - MCP は実装が極めて単純であることが、かえって問題を生むという論考。TypeScript での実装を例に議論している。
- **[What Changes With the A2UI 1.0 Release](https://dev.to/gde/what-changes-with-the-a2ui-10-release-31eo)** - 同じ通貨エージェントを A2UI 0.9 と 1.0 で実装して比較。1.0 ではレートカードの出力トークンが 223 から 21 に減るなど、プロトコルの変更点を示す。
- **[Your Agent Needs a Schema, Not a Better Prompt](https://dev.to/dailycontext/your-agent-needs-a-schema-not-a-better-prompt-53bm)** - エージェントの失敗はプロンプトの改善ではなく、スキーマによる構造化で防ぐべきだという設計論。
- **[Two rejected series stalled all my metrics](https://dev.to/slima4/two-rejected-series-stalled-all-my-metrics-2523)** - 本番は正常なのにアラートが 3 件発火した事例。レートリミッタがクライアントアドレスをメトリクスのラベルに入れ、429 のリトライが重なって停滞した原因を追う。Prometheus / Grafana の運用で役立つトラブルシューティング。
- **[Five of My Eight Agents Left Out the Same Caveat. A Vote Would Have Made It Official.](https://dev.to/p0rt/five-of-my-eight-agents-left-out-the-same-caveat-a-vote-would-have-made-it-official-d5j)** - 260 構成を同一トークン予算で比較した調査で、エージェントチームによるスコア変化は平均 0.0%。マルチエージェントが有効になる条件を考える。

## TechCrunch
- **[Jensen Huang's exit puts Nvidia's support for open source in question](https://techcrunch.com/2026/11/12/jensen-huangs-exit-puts-nvidias-support-for-open-source-in-question/)** - Huang 氏の辞任で、Hugging Face 買収、オープンウェイトモデル、モデル公開規制への反対姿勢といった Nvidia のオープンソース AI への関与が揺らぐ可能性を分析する。
- **[Muse can now place calls to US businesses — if you pay](https://techcrunch.com/2026/11/12/muse-can-now-place-calls-to-u-s-businesses-if-you-pay/)** - Meta の Muse が米国の事業者への発信ができるようになった。ただし有料機能。

※ 他ソースとの重複・過去掲載分を除くと、新規記事は 2 件のみだった。

## Ars Technica
- **[Google rolls out Gemini 4 Hydrogen, finally replacing 3.8 Flash](https://arstechnica.com/google/2026/11/google-rolls-out-gemini-4-hydrogen-finally-replacing-3-8-flash/)** - Google が 3.8 Flash の後継として Gemini 4 Hydrogen を展開。Carbon や Argon のような、ゆっくりセキュリティを重視する段階的リリースではない点が特徴。TechCrunch も、このモデルで強化された Google 検索の AI モードを報じている。
- **[Ships loiter near subsea cables amid Iran's warnings to Trump](https://arstechnica.com/gadgets/2026/11/ships-loiter-near-subsea-cables-amid-irans-warnings-to-trump/)** - 米国が軍事攻撃を再び強めた場合に海底ケーブルを攻撃するとイランが警告する中、ケーブル付近に船舶が滞留している。インターネット基盤の物理的な脆弱性を示す話題。

※ 他ソースとの重複・過去掲載分を除くと、新規記事は 2 件のみだった。

## 注目トピック
今日は AI エージェントの運用基盤まわりの話題が目立った。AWS では AgentCore の次世代ランタイムがデフォルトになり、Cognito の OAuth 2.0 トークン交換対応が加わった。エージェントがスナップショットから素早く復元され、トークン交換で認証されるという流れが標準機能として整いつつある。dev.to や Zenn でも、MCP の設計、A2UI 1.0、エージェントチームの効果検証、トークン節約など、エージェントを実運用するための知見が並んだ。

運用面では、Microsoft 365 の大規模障害と、無印良品のカード番号保持問題が広く注目された。前者は SaaS 依存先の障害への備え、後者は不要になったデータを確実に消す設計と運用の重要性を示している。また、Nvidia の CEO 交代はオープンソース AI のエコシステムに及ぶ影響が議論されている。Google の Gemini 4 Hydrogen のように、モデルの更新が速いため、利用側ではモデル切り替えを前提にした設計がますます重要になりそうだ。
