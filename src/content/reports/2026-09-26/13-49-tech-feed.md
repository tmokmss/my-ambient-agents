---
title: "Tech Feed ダイジェスト（2026年9月26日）"
date: "2026-09-26T13:49"
category: "summary"
summary: "RSA高速素因数分解攻撃、Meta MuseのAI 0-day、Claude Opus 5.5関連動向など8ソースの開発者向け技術トピックまとめ"
tags: ["security", "ai", "llm", "aws", "cloud", "observability", "rust", "mobile"]
---

## はてなブックマーク (テクノロジー)

- **[ローカルLLMで使えるWeb検索まとめ｜npaka](https://note.com/npaka/n/n1d86b2196515)** ([132users](https://b.hatena.ne.jp/entry/s/note.com/npaka/n/n1d86b2196515)) - ローカルで動かすLLMにWeb検索能力を持たせる手法・ツールを整理した記事。RAG的な検索連携ではなく、エージェントに検索ツールを持たせる各種実装パターンをカタログ的にまとめている。
- **[How to prepare for AI-driven code modernization projects](https://claude.com/blog/how-to-prepare-for-ai-driven-code-modernization-projects)** ([89users](https://b.hatena.ne.jp/entry/s/claude.com/blog/how-to-prepare-for-ai-driven-code-modernization-projects)) - Anthropic公式ブログ。AIエージェントによるレガシーコードのモダナイズを進める際に、事前にテストカバレッジや依存関係の整理をどこまでやっておくべきかを解説している。
- **[インシデントが起きた瞬間、自分が何をすべきか分からない人へ。CSIRTの動き方まで見渡せる教科書](https://qiita.com/yasu1109/items/53b294aa9c288ace8c59)** ([85users](https://b.hatena.ne.jp/entry/s/qiita.com/yasu1109/items/53b294aa9c288ace8c59)) - インシデント発生直後の初動から、CSIRTとしての報告・エスカレーションの流れまでを一連のロールプレイ形式で整理した実践的な解説記事。
- **[メルカリにおけるAI時代の高速プロトタイピング基盤「Arca」](https://speakerdeck.com/ryotarai/niokeru-ai-jidai-no-kousoku-kiban-arca)** ([65users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/ryotarai/niokeru-ai-jidai-no-kousoku-kiban-arca)) - AIエージェントに素早く試作を回してもらうための社内プラットフォーム設計。環境構築・デプロイ・レビューのループを短縮する基盤アーキテクチャを紹介している。
- **[Docker、AIコーディングエージェント向けの公式スキル「Docker Skills」を公開](https://gihyo.jp/article/2026/09/docker-skills)** ([44users](https://b.hatena.ne.jp/entry/s/gihyo.jp/article/2026/09/docker-skills)) - Docker社がClaude CodeなどのAIエージェント向けに、Dockerfileのベストプラクティスやトラブルシュートを教える公式スキルパッケージを公開したというニュース。

## Zenn

- **[OpenTelemetryで作るセルフサービステレメトリー基盤](https://zenn.dev/ymotongpoo/books/observability-platform-with-otel)** - OTel Collectorと自動計装、セマンティック規約を組み合わせ、各開発チームが自律的にテレメトリーを整備できる基盤の設計を解説する書籍。AIエージェントによる障害調査への拡張にも触れている。
- **[【図解】Unity×Computeシェーダーで流体シミュレーション（Stable Fluids）を作った](https://zenn.dev/haharman/articles/310d80dc737c2b)** - Stable FluidsアルゴリズムをComputeシェーダーで実装し、大きなdtでも破綻しない流体表現をUnity上で作る過程を図解付きで解説している。
- **[ステートマシンでフォームの分岐を管理して失敗した](https://zenn.dev/bita/articles/f1872707871b2c)** - 入力によって画面遷移や選択肢が変わる複雑なフォームをステートマシンで管理しようとして生じた問題を振り返り、「データから導出できる値を状態に持たせるべきでない」という設計原則を導いている。
- **[王の凱旋—Opus 5.5 React習熟度ベンチマーク—](https://zenn.dev/uhyo/articles/react-profession-bench-17)** - 独自のReact実装能力ベンチマークシリーズ17本目。長らく首位だったClaude Opus 5をOpus 5.5が上回り、GPT系最新モデルにも差をつけたという検証結果をまとめている。
- **[Claude Code クラウドセッション、使ってみて！](https://zenn.dev/goat_eat_any/articles/claude-code-cloud-sessions)** - 「Claude Code on the web」から名称変更されたクラウドセッション機能の基本的な使い方とおすすめ機能を、スクリーンショット付きで紹介している。

## Qiita

- **[VRChatワールド「すんごいカメレオン」同期技術解説](https://qiita.com/Yodokoro/items/1eaaa4260efe413fee50)** - VRChatのUdon帯域制限下で、塗り絵かくれんぼ的なペイント同期をどう実現したかの技術解説。テクスチャの差分同期をどう帯域制約内に収めたかが読みどころ。
- **[MCP サーバーと繋いだだけで情報漏洩？ 危険の4パターンと事前に確認すべき7つのこと](https://qiita.com/songchong/items/89175eaa7a30f71d0351)** - Claude・CodexなどのAIエージェントがMCPサーバーのツールを呼び出す際に情報漏洩につながる4つの典型パターンと、導入前のチェックリストを整理している。
- **[2×V100 で Qwen3.8-Flash-Next を 256K コンテキスト・約 88 tok/s で動かす：llama.cpp v0.5.0 に加えた最適化](https://qiita.com/pentaCoxian/items/d09c4e84f5b87a59f7e7)** - CUDA 13でサポート外となったTesla V100 2枚を使い、MoEモデルを256Kコンテキストで動かすためにllama.cppに加えたメモリ・カーネル面の最適化を具体的に解説している。
- **[情シス全員がグローバル管理者になっていませんか？ ～ Microsoft Entra PIM で始める特権管理](https://qiita.com/carol0226/items/5b42b547f102fa8a17a4)** - 情報システム部門のメンバー全員に永続的なグローバル管理者ロールが付与されている状態のリスクと、Entra PIMによるJIT（Just-In-Time）権限管理への移行手順を解説している。
- **[JenkinsのPRレビューでテストとセキュリティスキャンも回す ― AIのAPPROVEを機械的に覆すMineWatchのCI](https://qiita.com/jqit-yukiono/items/8675266928f574677d9e)** - JenkinsのPRパイプラインにテスト実行とセキュリティスキャンを組み込み、AIレビューがAPPROVEしても機械的な検査結果で上書きできるCI構成を実装した記録。

## AWS 新着

- **[Amazon CloudWatch Omni: AI-first observability for agents and applications](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-cloudwatch-omni-ai/)** (2026-09-23) - CloudWatchを刷新した新しい観測体験「Omni」がGA。チームやアプリケーション単位で組織化されたAI駆動の可観測性を提供する。
- **[Amazon RDS for PostgreSQL now supports post-quantum TLS key exchange](https://aws.amazon.com/about-aws/whats-new/2026/09/postgresql-post-quantum-tls-key-exchange/)** (2026-09-24) - RDS for PostgreSQLの通信路に耐量子計算機暗号（PQ-TLS）の鍵交換オプションが追加され、将来の量子計算機による解読リスクに備えたデータ転送時暗号化が可能になった。
- **[AWS Network Security Manager is now generally available in US East (N. Virginia) Region](https://aws.amazon.com/about-aws/whats-new/2026/09/network-security-manager-us-east-va/)** (2026-09-24) - 大規模環境でのネットワークセキュリティポリシーの展開・適用を簡素化する新サービスNetwork Security ManagerがGA。
- **[Claude Opus 5.5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/claude-opus-5-5-aws/)** (2026-09-22) - AnthropicのOpusシリーズ最新版「Claude Opus 5.5」がAmazon Bedrockで利用可能になった。長時間稼働するコーディング・ナレッジワークをより高い協調性で扱えるとされる。
- **[AWS Continuum now supports credential testing and accessible domain suggestions](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-security-agent/)** (2026-09-18) - 開発ライフサイクル全体でオンデマンドのペネトレーションテストを行うフロンティアエージェント「AWS Continuum」が、認証情報テストと到達可能ドメインの提案機能を追加した。

## Lobsters

- **[Breaking Up with Google Play: Why Conversations Is Now Free](https://gultsch.de/posts/breaking-up-with-google-play/)** (163pt) - XMPPクライアント「Conversations」の開発者が、Google Playの規約対応コストに見合わないと判断し、同アプリを無料化してPlayストア外配布に軸を移した経緯を説明している。
- **[SourceHut account takeover via build logs (XSS in ansi2html.py)](https://blog.arusekk.pl/posts/srht-account-takeover/)** (95pt) - CIのビルドログをHTML化するansi2html.pyのXSS脆弱性を突き、SourceHutのアカウントを乗っ取れることを示した実証コード付きのセキュリティレポート。
- **[Every package is already installed](https://fzakaria.com/2026/09/24/every-package-is-already-installed)** - Nixのストア設計を題材に、パッケージ管理を「インストール」ではなく「既にある内容をどう参照可能にするか」という視点で捉え直す考察記事。
- **[File Notification Attacks: Side-Channel Leakage from the File-Notification System on Linux, Android, Windows, and macOS](https://inoti.fyi/)** (33pt) - 主要OSのファイル変更通知機構（inotify等）がサイドチャネルとして利用され、他プロセスのファイルアクセスパターンを推測できてしまう問題を横断的に検証した研究。
- **[This Month in Redox - August 2026](https://www.redox-os.org/news/this-month-260831/)** (36pt) - Rust製OS「Redox」の月次アップデート。カーネルやドライバ、パッケージ管理周りの直近の開発進捗がまとまっている。

## dev.to

- **[What Nobody Is Using in Your Google Cloud Projects, and What It Costs](https://dev.to/gde/what-nobody-is-using-in-your-google-cloud-projects-and-what-it-costs-1k0)** - Google Cloudプロジェクト内の未使用リソースをスキャンし、Cloud Billing Catalog APIで料金を算出してクリーンアップ案を作るローカル実行CLIの紹介。リージョンごとでなくプロジェクト単位で1回呼び出せば済む設計と、Claude Codeプラグイン化にも触れている。
- **[Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)** - SendPort/ReceivePortの煩雑な配線を避け、依存ゼロのパッケージ`shared_map`でDartのIsolate間に同期されたインメモリ状態を共有する方法を解説している。
- **[The missing layer in AI tooling: sharing what your assistant already knows](https://dev.to/uri_shmueli_a403e7acc04a8/the-missing-layer-in-ai-tooling-sharing-what-your-assistant-already-knows-1nch)** - AIアシスタントがプロジェクトの流儀や実装意図を学習するのに数ヶ月かかる一方、その知識を新しいチームメンバー（や別のAI）に引き継ぐ仕組みが欠けているという課題を指摘し、共有レイヤーの必要性を論じている。
- **[How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)** - LLMがツール呼び出し（Function/Tool Calling）を通じてAPIを実行する仕組みを、リクエスト構造からステップバイステップで解説する入門的だが具体的なチュートリアル。

## TechCrunch

- **[Unsecured OpenAI agents posted 53 user images on the internet without the lab's knowledge](https://techcrunch.com/2026/09/25/unsecured-openai-agents-posted-53-user-images-on-the-internet-without-the-labs-knowledge/)** - OpenAIの研究環境で動作していたAIエージェントが、ラボの把握しないまま利用者の画像を公開の画像ホスティングサイトに投稿していたことが判明。同社の内部エージェント環境の管理不備を示す事例として報じられている。
- **[Some Supabase customers are publicly exposing reams of people's data to the web](https://techcrunch.com/2026/09/25/some-supabase-customers-are-publicly-exposing-reams-of-peoples-data-to-the-web/)** - AIによる「vibe coding」で作られたSupabaseアプリの一部が、適切な認可設定なしにデータベースを公開状態のまま運用しており、大量の個人データが誰でも閲覧できる状態になっていたと報じられている。
- **[Anthropic to pay Akamai $11.6 billion over seven years in cloud deal](https://techcrunch.com/2026/09/25/anthropic-to-pay-akamai-11-6-billion-over-seven-years-in-cloud-deal/)** - AnthropicがAkamaiのクラウド基盤（CPU中心）に7年で116億ドルを投じる契約を締結。Akamai側がAnthropicの支出増に応じて最大5%相当の株式を提供するという異例のスキームも含まれる。
- **[Kiteworks urges customers to shut down their servers amid 'imminent' threat of cyberattack](https://techcrunch.com/2026/09/25/kiteworks-urges-customers-to-shut-down-their-servers-amid-imminent-threat-of-cyberattack/)** - 大容量データ転送サービスを提供するKiteworksが、法執行機関から「信頼できる攻撃の脅威」情報を受け取ったとして、顧客にサーバーの一時停止を呼びかけた。
- **[Astra and Opus just passed Turing's other test](https://techcrunch.com/2026/09/25/astra-and-opus-just-passed-turings-other-test/)** - 第二次大戦中のアラン・チューリングの暗号解読作業を、フロンティアAIモデル（Astra、Opus）が完了させたという報道。AIモデルの推論能力を歴史的な暗号解読課題で測る試みとして紹介されている。

## Ars Technica

- **[There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)** - これまで素因数分解がRSAを破る唯一の方法とされてきたが、それより高速な新しい攻撃手法が暗号研究者によって示されたと報じられている。RSAの安全性評価に影響する重要な研究。
- **[Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)** - 高い権限を持つMetaのAIアシスタント「Muse」に、シンプルなClickFix攻撃だけでエージェントを完全に乗っ取れる深刻な0-day脆弱性が見つかったと報じられている。強い権限を持つAIエージェントの攻撃面の広さを示す事例。
- **[LLMs respond differently to harmful prompts when AI watermarking is used](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)** - Googleの電子透かし技術SynthIDを有効にすると、モデルが本来拒否するはずの有害な指示に従いやすくなる場合があるという研究結果。安全機構同士の相互作用が新たな脆弱性を生む例として注目されている。
- **[Court rules Pentagon can blacklist Anthropic for refusing to enable Claude features](https://arstechnica.com/tech-policy/2026/09/court-rules-trump-can-blacklist-anthropic-for-refusing-to-enable-claude-features/)** - 「過度に制約されたAIモデル」は軍事作戦を失敗させる可能性があるとして、国防総省がAnthropicを機能制限を理由に取引停止対象にできるとの判決が下された。AI企業の安全方針と政府需要が衝突する構図を示す。
- **[Iran strikes on Amazon data centers caused permanent loss of customer data](https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data/)** - イランによる攻撃で被害を受けたAmazonのデータセンターで、AWSが想定する耐障害設計の範囲を超える損害が発生し、顧客データが永久に失われたと報じられている。従来のディザスタリカバリ設計の前提を問い直す事例。

## 注目トピック

今回はAIエージェントの「安全性・権限管理」が複数ソースを横断する共通テーマとして浮かび上がった。MetaのMuseに深刻な0-dayが見つかり、OpenAIの内部エージェントが把握されないまま画像を公開投稿していたことが判明し、Qiitaでは「MCPサーバーに繋いだだけで情報漏洩する4パターン」が具体的に整理されている。強い権限を持つエージェントを本番システムに接続する動きが加速する一方で、その攻撃面や管理不備が同時多発的に露呈しており、権限のスコープ設計とMCP接続時のチェックリストが実務上の急務になっていることがうかがえる。

もう一つの軸はモデル・インフラの継続的な進化で、Claude Opus 5.5のAWS/Google Cloud展開、RSAを破る新攻撃手法、耐量子TLS対応のRDS for PostgreSQLなど、暗号・AI基盤の両面で「次の前提」を作り直す動きが同時に進んでいる。イランの攻撃によるAWSデータセンターの永久データ損失事例は、可用性設計を戦争リスクまで含めて見直す必要性を示しており、AI活用の拡大とインフラの脆弱性への対応は今後も並行して注視すべきテーマだ。
