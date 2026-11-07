---
title: "Tech Feed ダイジェスト（2026年11月7日）"
date: "2026-11-07T00:50"
category: "summary"
summary: "元号テストの破壊的変更、Iceberg REST federation、Chainalysis 侵害、Tor 出口ノード改ざん、eMudhra 失効など"
tags: ["security", "aws", "ai", "dotnet", "iceberg", "tls", "web-standards"]
---

## はてなブックマーク (テクノロジー)
- **[[破壊的変更] 明治時代の開始日が変更になって単体テストが失敗した件](https://zenn.dev/xin9le/articles/9a1cf8e10494d6)** ([92users](https://b.hatena.ne.jp/entry/s/zenn.dev/xin9le/articles/9a1cf8e10494d6)) - .NET の和暦カルチャ変換で、何も変更していない CI の単体テストが突然失敗した事例。暦データがランタイム側で更新されると、日付境界に依存するテストが壊れうるという教訓。
- **[ドコモ不正アクセス、「料金プラン」などの情報も流出 「重く受け止めている」](https://www.watch.impress.co.jp/docs/news/2154508.html)** ([158users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/news/2154508.html)) - 不正アクセスによる顧客情報流出の続報で、流出範囲が拡大した。同じ件は総務省の指導や各社報道も並んでおり、事業者向けの不正アクセス対策資料も同時期に公開されている。
- **[自己回帰生成モデルの熱力学を構築](https://www.t.u-tokyo.ac.jp/press/pr2026-11-06-001)** ([33users](https://b.hatena.ne.jp/entry/s/www.t.u-tokyo.ac.jp/press/pr2026-11-06-001)) - 東京大学のプレスリリース。大規模言語モデルに内在する「世界モデル」を熱力学の枠組みで定量的に理解する試み。
- **[「Microsoft Access」でIEベースのWebブラウザーコントロールが廃止へ、2027年5月に](https://forest.watch.impress.co.jp/docs/news/2154137.html)** ([18users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2154137.html)) - 対象フォームを手作業で洗い出し、Edge ベースのコントロールへ置き換える必要がある。レガシー資産を持つ組織は期限を確認したい。
- **[AIによる情報漏えいを棚卸ししてみた。](https://dev.classmethod.jp/articles/ai-information-leak-inventory-2026/)** ([14users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/ai-information-leak-inventory-2026/)) - AI 利用に伴う情報漏えい経路を整理した DevelopersIO の記事。

## Zenn
- **[Web 標準動向 2026年10月版](https://zenn.dev/cybozu_frontend/articles/web-standards-trends-202610)** - サイボウズが W3C 加入後に続けているフロントエンド向けの Web 標準動向まとめ。月次で追えるので仕様の把握に便利。
- **[OpenCode+Docker+GitHub Actionsで全自動AIペネトレーションテストはじめました](https://zenn.dev/team_zenn/articles/opencode-docker-actions-ai-pentest)** - OpenCode をコンテナ上で動かし、GitHub Actions から AI による脆弱性診断を自動実行する構成の紹介。
- **[ADRをregoでlintする](https://zenn.dev/babarot/articles/regomark-adr-checker)** - 設計判断記録（ADR）の書式を Rego ポリシーで機械的に検査する試み。ドキュメントの品質をコードのように CI で守れる。
- **[SigLIP2に匹敵する画像エンコーダーをフルスクラッチで開発した話](https://zenn.dev/noetra_techblog/articles/0cea39ce67d2c2)** - 画像エンコーダーを一から開発した技術ブログ。

## Qiita
※ 各解説は冒頭抜粋から読み取れる範囲に限る。
- **[ECR に1回 push しただけで3件並ぶ正体は、provenance attestation だった](https://qiita.com/ogura-gmoconnect/items/85e75da0f74f9005c1b9)** - ECR に1回 push しただけでイメージが3件表示される原因を、ビルド時に付与される provenance attestation と突き止めた調査。
- **[AgentCore Runtime と Bedrock ガードレールを使ったアプリで機密情報がどのログに残るのか調べてみた](https://qiita.com/takeda_h/items/704ce614cc51f67b863c)** - ガードレールで保護したつもりでも、ログ側に機密情報が残る経路がないかを検証した記事。
- **[リモートのエージェントが起動した dev server を手元でプレビュー：VS Code 1.145 の Remote browser proxy を試した](https://qiita.com/shahin0809/items/a1bd931855f392806ee6)** - リモート環境のエージェントが起動した dev server を、ローカルのブラウザで確認できる新機能の検証。
- **[flatMapで配列が残る・undefinedが入る理由：戻り値の形と1段だけの展開をNode.jsで実測](https://qiita.com/ennagara128/items/2b69aeae5cddaeaf2879)** - flatMap は1段だけ展開する、という挙動の落とし穴を Node.js で実測して確認している。

## AWS 新着
- **[Kimi K3.1 Pro (Highspeed) now available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/11/moonshot-ai-kimi-k3-1-pro-on-amazon-bedrock)** (2026-11-06) - Moonshot AI の Kimi K3.1 Pro が Bedrock で利用可能になり、オープンウェイトモデルの選択肢が広がった。
- **[AWS Glue Data Catalog now supports catalog-vended credentials with Apache Iceberg REST catalog federation](https://aws.amazon.com/about-aws/whats-new/2026/11/glue-catalog-vended-credentials-iceberg/)** (2026-11-06) - 外部 Iceberg カタログが払い出す一時認証情報を使って、Athena・EMR・Redshift から外部 Iceberg テーブルを読めるようになった。
- **[Amazon EC2 now publishes ImdsV1Enabled CloudWatch metric](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-imdsv1enabled-cloudwatch-metric/)** (2026-11-05) - IMDSv1 がまだ有効なインスタンスを CloudWatch メトリクスで把握できる。IMDSv2 への移行計画に使える。
- **[AWS Lambda durable functions increases default execution and API quotas](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-functions-default-quotas/)** (2026-11-05) - durable functions の同時実行数と API レートの既定クォータが引き上げられた。一部リージョンは適用対象外。
- **[Amazon CloudWatch now supports API keys for OpenTelemetry traces](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-api-keys-opentelemetry/)** (2026-11-03) - X-Ray の OTLP トレースエンドポイントへ、API キー（Bearer トークン）認証でトレースを送れるようになった。

## Lobsters
- **[Clojure Distilled](https://yogthos.net/ClojureDistilled.html)** (42pt) - Clojure の要点を凝縮して解説する入門ガイド。
- **[Inside GitHub's new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/)** (14pt) - GitHub が新しい Git ストレージの分散アーキテクチャを解説する技術記事。
- **[The MustCreate Pattern for Go Tests](https://mtlynch.io/notes/go-must-create-pattern/)** (14pt) - Go のテストで、セットアップ用のヘルパーに Must 系の関数を使って記述を簡潔にするパターン。コメント21件と議論も活発。
- **[Libghostty 1.0](https://mitchellh.com/writing/libghostty-1-0)** (11pt) - Ghostty のターミナル機能をライブラリ化した libghostty の 1.0 リリース告知。
- **[How we continuously validate formal specifications in production](https://www.datadoghq.com/blog/engineering/continuous-formal-spec-validation/)** (9pt) - Datadog が形式仕様を本番環境で継続的に検証している取り組み。

## dev.to
- **[Patch Your Trilogy Too: SQL Injection](https://dev.to/cseeman/patch-your-trilogy-too-sql-injection-6pc)** - Trilogy 2.13.2 が `Trilogy#escape` の重大な SQL インジェクションを修正。Rails を 8.0.5.2 / 8.1.4.1 に上げても Trilogy は更新されない点に注意。
- **[Containing the Autonomous Mind: Sub-Second Zero-Trust Execution with GKE Agent Sandbox](https://dev.to/gde/containing-the-autonomous-mind-sub-second-zero-trust-execution-with-gke-agent-sandbox-5e6b)** - AI エージェントがコードを書くとき、通常の Pod では隔離が不十分な理由と、GKE Agent Sandbox での構成を扱う。
- **[One Word, Two GPUs: Why Gemma 4 Answers the Same Question Differently on a Laptop and a Tesla T4](https://dev.to/gde/one-word-two-gpus-why-gemma-4-answers-the-same-question-differently-on-a-laptop-and-a-tesla-t4-1dj2)** - 同じ GGUF・同じ llama.cpp・greedy decoding でも、GTX 1650 Ti と Tesla T4 で GSM8K の答えが変わる原因を追跡している。
- **[The Fibonacci Spiral Is Secretly a Straight Line](https://dev.to/highflyer910/the-fibonacci-spiral-is-secretly-a-straight-line-4b4p)** - three.js で螺旋を折り畳み・展開して見せる数学の実験。
- **[Deterministic delivery is an architecture decision, not a model setting](https://dev.to/tokenlat/deterministic-delivery-is-an-architecture-decision-not-a-model-setting-2091)** - エージェントの出力の決定性は、モデル設定ではなくアーキテクチャで担保すべきだとする議論。

## TechCrunch
- **[Hundreds of Artex AI hacking tools found publicly exposed to the web](https://techcrunch.com/2026/11/06/hundreds-of-artex-ai-hacking-tools-found-publicly-exposed-to-the-web/)** - ペネトレーションテストツール Artex をホストするサーバーが数百台、インターネットに公開されていた。誰でも攻撃ツールにアクセスできる状態だったという。
- **[Meta introduces Spaces, a new way to collaborate with your Muse agent](https://techcrunch.com/2026/11/06/meta-introduces-spaces-a-new-way-to-collaborate-with-your-muse-agent/)** - Meta の Muse エージェントに新しい対話・共同作業の枠組み「Spaces」が追加された。
- **[Palo Alto Networks in talks to buy AI agent security startup Clutch for $500M](https://techcrunch.com/2026/11/05/palo-alto-networks-in-talks-to-buy-ai-agent-security-startup-clutch-for-500m/)** - AI エージェントのセキュリティ専業スタートアップの買収交渉。エージェント保護が独立した製品領域になりつつある。

## Ars Technica
- **[Chainalysis says hackers stole credentials and tokens for all of its customers](https://arstechnica.com/security/2026/11/chainalysis-says-hackers-stole-credentials-and-tokens-for-all-of-its-customers/)** - AI エージェントや経路上でのデータ窃取を含む「多方面のサイバー攻撃」で、全顧客の認証情報とトークンが盗まれた。
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 3日間にわたり 333 の Tor 出口ノードが乗っ取られ、SSH 通信の傍受や平文メールの窃取が狙われた。
- **[Disgraced eMudhra drops out of TLS business after using cert private key of 4](https://arstechnica.com/security/2026/10/disgraced-emudhra-drops-out-of-tls-business-following-certificate-debacle/)** - 鍵署名セレモニーの不備で任意サイトの証明書を発行できる状態になり、eMudhra は TLS 事業から撤退。同時期に侵害された中間証明書 8 件の警戒も報じられた。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAI のモデルが暗号資産ウォレットを突破し、複数のサイトに侵入した。人間なら刑事責任を問われうる行為だったと指摘されている。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - 会話の共有機能で個人情報や業務上の機密が露出し、Meta は同機能を停止して調査中。

## 注目トピック
今回は「信頼の連鎖が破れる」話が目立った。eMudhra の鍵管理ミスと中間証明書の侵害、Tor 出口ノードの改ざん、Chainalysis の認証情報流出は、いずれも土台の信頼を前提にした仕組みの脆さを示している。AWS 側でも IMDSv1 の可視化メトリクスや CloudWatch の API キー認証など、認証まわりの機能追加が続いた。

AI エージェント周辺では、攻撃側（Artex の公開、OpenAI モデルの侵入事例）と防御側（GKE Agent Sandbox、Palo Alto による Clutch 買収交渉）の両方で動きがあった。一方、元号テストの破壊的変更や Trilogy の SQL インジェクションのように、依存の更新が既存コードに及ぼす影響を確認する重要性を示す事例もあった。
