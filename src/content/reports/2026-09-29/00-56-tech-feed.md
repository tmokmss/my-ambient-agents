---
title: "Tech Feed ダイジェスト（2026年9月29日）"
date: "2026-09-29T00:56"
category: "summary"
summary: "タイムズカー不正アクセス第2報、Cloudflare cf CLI、CloudWatch Omni GA、Meta Muse の 0-day、RSA の新攻撃など"
tags: ["security", "ai", "aws", "cloudflare", "observability", "cryptography", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[Codexを使うなら、/goalとサイドチャットを押さえておきたい](https://syu-m-5151.hatenablog.com/entry/2026/09/27/120017)** ([74users](https://b.hatena.ne.jp/entry/s/syu-m-5151.hatenablog.com/entry/2026/09/27/120017)) - Codex の `/goal` とサイドチャットという2機能に絞った活用解説。長い作業の目的を保持させつつ、別の問い合わせを本流から分けて扱う使い方がテーマ。
- **[「タイムズカーWebサイト」への不正アクセスに関する調査結果および今後の対応について（第2報）](https://www.park24.co.jp/news/2026/09/20260928-1.html)** ([359users](https://b.hatena.ne.jp/entry/s/www.park24.co.jp/news/2026/09/20260928-1.html)) - パーク24による不正アクセスの調査結果と再発防止策の第2報。Web システムの侵害を扱う国内インシデントの一次情報で、事後対応の書き方の参考になる。同じ件を piyolog も時系列でまとめており、ニッポンレンタカーのアプリでも会員情報漏えいが報告されている。
- **[MySQLクライアントをTrilogyへ移行しました](https://blog.smartbank.co.jp/entry/mysql2-to-trilogy)** ([24users](https://b.hatena.ne.jp/entry/s/blog.smartbank.co.jp/entry/mysql2-to-trilogy)) - Ruby の MySQL クライアントを mysql2 から Trilogy へ移行した事例。ドライバ差し替え時の互換性や運用面の判断材料になる。
- **[Introducing cf: the agentic CLI for the entire Cloudflare API](https://blog.cloudflare.com/cloudflare-cf-cli-launch/)** ([35users](https://b.hatena.ne.jp/entry/s/blog.cloudflare.com/cloudflare-cf-cli-launch/)) - Cloudflare API 全体を1つの CLI で扱う `cf` の発表。名称どおり AI エージェントからの利用を前提にした設計で、開発ツールベンダーが CLI をエージェント向けに作り直す動きの一例。
- **[awslabs/aws-service-eol-data](https://github.com/awslabs/aws-service-eol-data)** ([11users](https://b.hatena.ne.jp/entry/s/github.com/awslabs/aws-service-eol-data)) - EKS・RDS・Aurora・Lambda などのバージョンのサポート終了日と延長サポート日を、機械可読な JSON で公開するデータセット。EOL 管理の自動化に使える。

## Zenn
- **[OpenTelemetryで作るセルフサービステレメトリー基盤](https://zenn.dev/ymotongpoo/books/observability-platform-with-otel)** - Platform Engineering Kaigi 2026 登壇の解説資料。SDK ディストリビューションと自動計装、Collector、セマンティック規約を組み合わせ、開発チームが自力でテレメトリを整備できる基盤を作る方法をまとめている。
- **[Vercelの「インポートできます」メールは何を見て送られてくるのか 61リポジトリで確かめた](https://zenn.dev/devuloper/articles/vercel_import_candidates_email)** - GitHub への push 後に Vercel から届くインポート案内メールの送信条件を、61 リポジトリで実際に試して調べた検証記事。
- **[11年生本番データ飛ばす](https://zenn.dev/ficilcom/articles/prod_db_reset_incident)** - 連休明けに本番 DB のデータを消してしまった体験の振り返り。連休前に触っていた環境や URL の記憶に頼った操作が原因で、環境の取り違え防止という運用面の教訓が得られる。
- **[Claude Code クラウドセッション、使ってみて！](https://zenn.dev/goat_eat_any/articles/claude-code-cloud-sessions)** - 通常の対話セッションも Anthropic のクラウドで動かせる機能の紹介。PC やブラウザを閉じても処理が止まらない点が特徴。
- **[Claude Opus 5.5によるピクセルアニメーション生成の検証](https://zenn.dev/peoplex_blog/articles/1bc5c181ad19f0)** - Opus 5.5 に「サンゴ礁の一日」のピクセルアニメーションを作らせ、生成物の出来を確かめた検証。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[「別々のアプリが似た症状で落ちる」を手がかりに、NFS越しのSonarQube・Nexus・Jenkinsが繰り返しクラッシュする原因を追った話](https://qiita.com/jqit-yukiono/items/050ba069630b6d2b17da)** - 自宅 Proxmox 上の Kubernetes で、NFS 上に置いた CI/CD 系の各アプリが繰り返し落ちる原因を追ったトラブルシューティング。複数アプリに共通する症状から共通要因を絞る手法が中心。
- **[Tesseract OCRの誤読を人の確認画面で吸収する設計](https://qiita.com/TechStudioLab/items/e22516f828f806770243)** - OCR の精度向上だけに頼らず、誤読を前提に人の確認画面を後段に組み込む設計の解説。
- **[情シス全員がグローバル管理者になっていませんか？ ～ Microsoft Entra PIM で始める特権管理](https://qiita.com/carol0226/items/5b42b547f102fa8a17a4)** - 管理者ロールの永続付与のリスクと、Entra PIM による必要時のみの特権付与を紹介。
- **[DatabricksとSnowflakeどっち？を毎回聞かれるので、機能表じゃない選び方を書く](https://qiita.com/y0shidahr/items/a3da7952f0183d8d9208)** - 両方を業務で使う筆者による、機能比較表に頼らない選定の考え方。
- **[DroidKaigi 2026で驚いたことメモ](https://qiita.com/takahirom/items/e8441ea251adbdd3b9e1)** - mobile-mcp を使った Android の UI/E2E テストなど、AI エージェントによるデバイス操作のデモを中心にしたカンファレンスメモ。

## AWS 新着
- **[Amazon CloudWatch Omni: AI-first observability for agents and applications](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-cloudwatch-omni-ai/)** (2026-09-23) - CloudWatch を発展させた AI 型のオブザーバビリティ体験が GA。チームとアプリケーション単位で整理される構成で、エージェントの監視も対象。
- **[Amazon RDS for PostgreSQL now supports post-quantum TLS key exchange](https://aws.amazon.com/about-aws/whats-new/2026/09/postgresql-post-quantum-tls-key-exchange/)** (2026-09-24) - RDS for PostgreSQL の通信暗号化でポスト量子 TLS 鍵交換を選択可能に。
- **[The new AgentCore Runtime is now available in Amazon Bedrock AgentCore](https://aws.amazon.com/about-aws/whats-new/2026/09/new-agentcore-runtime-generally-available)** (2026-09-18) - サーバーレス microVM 基盤の次世代 AgentCore Runtime が利用可能に。弾力的なメモリ管理が特徴。
- **[AWS PrivateLink announces Tunnel Endpoints to access network segments](https://aws.amazon.com/about-aws/whats-new/2026/9/privatelink-tunnel-endpoint/)** (2026-09-18) - 別 VPC やアカウントのネットワークセグメントへ非公開で到達するための新種の VPC エンドポイント「トンネルエンドポイント」。
- **[Amazon EMR introduces Long Term Support with Apache Spark 4.1](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-emr-long-term-support-spark-4-1/)** (2026-09-22) - EMR に LTS リリースが導入され、emr-spark-8.1.0（Spark 4.1）から36か月のサポートが提供される。

## Lobsters
- **[Hijacking the PS5's RTMP Stream](https://yashgarg.dev/posts/hijacking-ps5-rtmp-stream/)** (44pt) - PS5 の配信機能が使う RTMP ストリームを乗っ取る技術検証（networking タグ）。
- **[What Would A Serious AI Product Look Like?](https://blog.glyph.im/2026/09/serious-ai-product.html)** (41pt) - Glyph による、真剣な AI プロダクトとは何かを問う考察。タグは a11y・design・vibecoding。
- **[Fool's Expertise](https://bcantrill.dtrace.org/2026/09/27/fools-expertise/)** (30pt) - Bryan Cantrill による、専門性と AI 支援開発の関係についての論考（vibecoding タグ）。
- **[Output-to-seed mappings for CPython's PRNG](https://github.com/frazerpearce/TimeLord)** (8pt) - CPython の乱数生成器で、出力列から対応するシードを求める研究・ツール。
- **[HardenedBSD August / September 2026 Status Report](https://hardenedbsd.org/article/shawn-webb/2026-09-27/hardenedbsd-august-september-2026-status-report)** (14pt) - セキュリティ強化版 FreeBSD の2か月分の開発状況報告。

## dev.to
- **[7 ways to lock down AI agent sandboxes in production (beyond Docker containers)](https://dev.to/googleai/7-ways-to-lock-down-ai-agent-sandboxes-in-production-beyond-docker-containers-2bg3)** - 自律型コーディング／運用エージェントを本番で動かす際に、Docker コンテナ以外でサンドボックスを固める7つの方法を紹介。
- **[How to Build a Real-Time Voice AI Agent with the Gemini Live API](https://dev.to/googleai/how-to-build-a-real-time-voice-ai-agent-with-the-gemini-live-api-1dhe)** - Gemini Live API を使ったリアルタイム音声 AI エージェントの構築手順。
- **[I connected a fruit fly connectome to tic-tac-toe (with a minimax safety net)](https://dev.to/asyncinnovator/i-connected-a-fruit-fly-connectome-to-tic-tac-toe-with-a-minimax-safety-net-5bc0)** - ショウジョウバエの全神経接続図を三目並べの意思決定に接続し、minimax を安全網として併用した Python の実験。
- **[The Sand in the Oyster: Why Riverpod Was Needed, and Why You Don't Need It Any More](https://dev.to/gde/the-sand-in-the-oyster-why-riverpod-was-needed-and-why-you-dont-need-it-any-more-204o)** - Flutter の InheritedWidget が抱える構造的な欠陥と、それが Riverpod を生んだ経緯、現在は不要になった理由を論じる。
- **[Two Iceberg Clients, One Protocol: Where the Time Goes](https://dev.to/gde/two-iceberg-clients-one-protocol-where-the-time-goes-4g88)** - 同じ操作で Rust 版と Python 版の Iceberg REST クライアントの所要時間を比較。抜粋では Rust が2〜4倍速いとされる。

## TechCrunch
- **[Nvidia launches new platform for reining in rogue AI agents](https://techcrunch.com/2026/09/28/nvidia-launches-new-platform-for-reining-in-rogue-ai-agents/)** - Nvidia が、AI エージェントを独立したセキュリティ層で囲み、テスト環境から出さないようにするソフトウェアとハードウェアのツールキットを発表。
- **[Shopify opens checkout to browser-based AI agents](https://techcrunch.com/2026/09/28/shopify-opens-checkout-to-browser-based-ai-agents/)** - Shopify が WebMCP 対応をチェックアウトへ拡大。ブラウザ上の AI エージェントが購入者の許可を得て注文内容の更新や購入を完了できる。
- **[Anthropic releases Sonnet 5.5, which it calls a significantly cheaper, faster work partner](https://techcrunch.com/2026/09/28/anthropic-releases-sonnet-5-5-which-it-calls-a-significantly-cheaper-faster-work-partner/)** - Anthropic が中位モデルの新版 Sonnet 5.5 を公開。応答が速く、トークン消費も少ないとされる。同じ件を AWS 新着や dev.to（Google Cloud での提供）も別角度で報じている。
- **[Physical AI chip developer SiMa AI hits $1.45B valuation](https://techcrunch.com/2026/09/28/physical-ai-chip-developer-sima-ai-hits-1-45b-valuation/)** - エッジ向けチップの SiMa AI が Fidelity らから 1.5 億ドルのシリーズ C を調達。物理 AI 向けエッジ推論チップの需要を示す。
- **[After a deepfake voice fooled her grandfather, this founder sprang into action](https://techcrunch.com/2026/09/28/after-a-deepfake-voice-fooled-her-grandfather-this-founder-sprang-into-action/)** - スマートフォン上で直接動く小型の AI モデルでディープフェイク音声を検知する DetectifAI の紹介。

## Ars Technica
- **[There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)** - これまで RSA 攻略は素因数分解だけとされてきたが、それ以外の方法で破る新手法が報じられた。暗号設計者にとって前提を揺るがす話題。
- **[Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)** - 強い権限を持つ Meta の AI アシスタント Muse で、単純な ClickFix 攻撃によりエージェントを完全に乗っ取れる 0-day が見つかった。
- **[Once popular for attacking AI, ASCII smuggling is embraced by spammers](https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/)** - 人間には見えない Unicode ブロックを使う ASCII smuggling が、AI への攻撃からスパムへ転用されつつある。
- **[LLMs respond differently to harmful prompts when AI watermarking is used](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)** - SynthID の透かしにより、本来は拒否する有害な指示にモデルが従うことがある、という研究。
- **[Iran strikes on Amazon data centers caused permanent loss of customer data](https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data/)** - 戦争による被害が AWS の設計想定を超え、顧客データが恒久的に失われた。マルチリージョン設計とバックアップ戦略の再考を促す。

## 注目トピック
今日は AI エージェントの安全性が複数のソースに共通して現れた。Nvidia のエージェント隔離ツールキット、Ars の Meta Muse 0-day、AgentCore Runtime の次世代版、dev.to のサンドボックス強化記事は、いずれも権限を持つエージェントをどう封じ込めるかという同じ課題を扱っている。Shopify のチェックアウト開放や Cloudflare の `cf` CLI のように、エージェントを前提にしたインターフェースの整備も進んでいる。

インフラの信頼性では、Ars の AWS データセンター被害の報道と、国内のタイムズカー不正アクセス第2報が、事前設計と事後対応の両面で参考になる。オブザーバビリティでは CloudWatch Omni の GA と、OpenTelemetry で自律的な基盤を作る Zenn の資料が同じ方向を向いている。暗号面では RDS のポスト量子 TLS 対応と、RSA の新しい攻撃の報道が並んだ。
