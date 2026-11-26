---
title: "Tech Feed ダイジェスト（2026年11月26日 昼）"
date: "2026-11-26T03:28"
category: "summary"
summary: "Messages API の Rust 移行、Skills over MCP、Lambda MicroVM 連携、spec は実装後に8割削除など8ソースの技術トピック"
tags: ["ai", "mcp", "aws", "rust", "security", "frontend", "formal-verification", "browser"]
---

## はてなブックマーク (テクノロジー)
- **[日本語サイトで指定しておきたいCSS 2026年版 - Qiita](https://qiita.com/tofu_frontend/items/6a1bb7d80a58736eef0e)** ([234users](https://b.hatena.ne.jp/entry/s/qiita.com/tofu_frontend/items/6a1bb7d80a58736eef0e)) - 日本語サイトで設定しておくと良い CSS 指定を 2026 年時点の状況でまとめた記事。フロントエンド実装の定番チェックリストとして高い支持を集めている。
- **[MCPに新機能「Skills over MCP」登場。ツールとの接続だけでなく使い方のスキルもMCP経由で提供](https://www.publickey1.jp/blog/26/mcpskills_over_mcpmcp.html)** ([63users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/mcpskills_over_mcpmcp.html)) - MCP が、ツールへの接続だけでなく「そのツールの使い方」を示すスキルもサーバー経由で配布できるようになる拡張。エージェントにツール連携と運用知識を一緒に渡せる点が注目される。
- **[Migrating our Messages API to Rust](https://www.anthropic.com/research/migrating-api-to-rust)** ([23users](https://b.hatena.ne.jp/entry/s/www.anthropic.com/research/migrating-api-to-rust)) - Anthropic が自社 Messages API を Rust へ移行した事例を紹介する記事。大規模 API サーバーの実装言語移行の判断材料になる。
- **[「Google Workspace MCPサーバ」と「Google Workspace CLI」が正式版としてリリース](https://www.publickey1.jp/blog/26/google_workspace_mcpgoogle_workspace_cli.html)** ([34users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/google_workspace_mcpgoogle_workspace_cli.html)) - Google Workspace を AI エージェントやスクリプトから操作するための MCP サーバーと CLI が GA。業務自動化の足場が公式に整った。
- **[タイムズはどうすべきだったのか、JPKI を用いた eKYC の今後 | blog.jxck.io](https://blog.jxck.io/entries/2026-11-25/ekyc-over-jpki.html)** ([12users](https://b.hatena.ne.jp/entry/s/blog.jxck.io/entries/2026-11-25/ekyc-over-jpki.html)) - マイナンバーカードの公的個人認証（JPKI）を使った eKYC のあり方を、タイムズの件を題材に技術面から論じるブログ。

## Zenn
- **[specは実装後に8割削除しよう](https://zenn.dev/ruri/articles/distill-specs-after-implementation)** - Spec Kit / OpenSpec 系の仕様駆動開発で、実際の spec 7 本を数えると8割強は消してよかったという検証。機能要件は型・テストへ、設計判断は ADR へ移し、意図・スコープ境界・外部前提だけを残す方針を示す。
- **[著名なRust製OSSをLean 4で形式検証してみたら、めちゃめちゃバグが見つかった話](https://zenn.dev/koukyosyumei/articles/31c8fcf4da45b7)** - Axum ベースの Rust Web アプリをLean 4 で検証するフレームワーク h5i のベンチマーク作成中に、実際のセキュリティ脆弱性が複数見つかったという報告。認可やデータ分離のロジックを形式検証にかける実例。
- **[AIエージェントのMemory設計 ― 会話履歴・業務データ・長期Memoryの使い分け](https://zenn.dev/taru_neko/articles/ai-agent-memory-architecture-2026)** - 経費精算システムを例に短期・長期 Memory の構成を整理し、既存のセッション管理や業務 DB で足りる場面と専用の長期 Memory 機構が必要になる条件を比較している。更新・削除やセキュリティ設計にも触れる。
- **[AIを使った開発に「敵対的検証」を取り入れてみた](https://zenn.dev/visionarray/articles/26b316ff128513)** - Codex や Claude Code による設計・実装・レビューに「敵対的検証」を取り入れたところ、通常のコードレビューで見つからなかった問題が見つかったという体験記。
- **[【自動化】Muse のサイドチャットへ Webhook を届ける MuseKnock の仕組み](https://zenn.dev/codehex/articles/33bc6ee330b880)** - Meta の個人向け AI エージェント Muse を、Slack のメンションや GitHub のリリースなど外部イベントで即座に動かす仕組みの実装解説。

## Qiita
- **[VS Code 1.148：エージェント専用の Dev Container と Sandbox profiles。「隔離」の3種類を使い分ける](https://qiita.com/shahin0809/items/05a6c7431ee7e5b6e520)** - VS Code 1.148 の、エージェント専用 Dev Container と Sandbox profiles を整理し、隔離の3種類の使い分けを解説する記事（冒頭抜粋より）。
- **[【JavaScript】イテレータを文字列に変換できるよ！](https://qiita.com/rana_kualu/items/1bb54c15ab8d1b97d77e)** - ES2027 で入る見込みの `iter.join()` の紹介。`[1, 2, 3].values().join('---')` のようにイテレータを配列化せず直接文字列化できる（冒頭抜粋より）。
- **[LM Studio経由が10 tok/sなのは --n-gpu-layers 9 が渡されていたから。設定ファイルで gpuStrictVramCap を false にすると24 tok/s](https://qiita.com/mukai3/items/4194902b97d0955f2c0f)** - VRAM 8GB の RTX 3060 Ti で Qwen3.6-35B-A3B を動かすと、LM Studio 経由は 10 tok/s、llama-server 直接起動は 26 tok/s と差が出た原因を追跡したトラブルシューティング。設定ファイルの変更で 24 tok/s まで改善する。
- **[[俺のターン！]Amazon Textract Insightsで遊戯王カードを分類・抽出してみた](https://qiita.com/kikuziro/items/7a4c618b1ded3350870f)** - 2026年11月20日に GA した Amazon Textract Insights（書類種別の判定と指定項目の抽出）を、遊戯王カードで試した検証記事。
- **[【OCIベクトルDB】無料枠から始められるRAGを無料で始める前に知っておきたいこと](https://qiita.com/N-Kyo/items/f976e9467320807b2c3f)** - 11月17日にリリースノートへ載った Oracle Autonomous AI Vector Database を取り上げ、Always Free 枠で RAG を始める際の注意点を整理している（冒頭抜粋より）。

## AWS 新着
- **[AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-microvm/)** (2026-11-25) - Lambda durable functions から MicroVM 上の処理を実行・管理する拡張が developer preview で登場。長時間・状態を持つワークフローを MicroVM と組み合わせて構成できる。
- **[AWS Systems Manager Automation now automates operational tasks in Azure and Google Cloud](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-multicloud-automation/)** (2026-11-23) - Systems Manager Automation の runbook で、AWS だけでなく Azure と Google Cloud のリソース操作も自動化できるようになった。
- **[Amazon CloudFront Announces HTTP/2 Support for Connections to Origins](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-cloudfront-http2-origins/)** (2026-11-23) - CloudFront からカスタムオリジン／VPC オリジンへの接続で HTTP/2 をサポート。少ない接続で多数のリクエストを送れるため、オリジン側の接続数が減る。
- **[Amazon RDS for SQL Server now supports up to 500 databases per instance](https://aws.amazon.com/about-aws/whats-new/2026/11/rds-sqlserver-supports-500-databases-per-instance)** (2026-11-24) - 1インスタンスあたりの DB 数上限が 100 から 500 に拡大。SaaS のマルチテナント構成で集約密度を上げられる。
- **[Amazon Transcribe Turbo: more accurate transcripts and natural turn-taking for voice agents, now in public preview](https://aws.amazon.com/about-aws/whats-new/2026/11/transcribe-turbo-preview/)** (2026-11-25) - 次世代の音声認識モデル Transcribe Turbo が US East (Ohio) でパブリックプレビュー。バッチ・ストリーミング両対応で、音声エージェント向けに精度と自然なターンテイキングを改善する。

## Lobsters
- **[Slow Ubuntu security response times](https://www.openwall.com/lists/oss-security/2026/11/25/9)** (53pt) - oss-security メーリングリストで、Ubuntu のセキュリティ対応の遅さが指摘されている。タグは linux / security。
- **[Marginalia Search, Money, C++, Rust, AI, stuff](https://www.marginalia.nu/log/a_141_marginalia_update/)** (102pt) - 独立系検索エンジン Marginalia の近況報告。C++・Rust・AI などの話題に触れており、20コメントの議論になっている。
- **[October in Servo: video captions and inert content](https://servo.org/blog/2026/11/25/october-in-servo/)** (39pt) - Rust 製ブラウザエンジン Servo の10月の進捗。動画キャプション対応と inert コンテンツ対応が見出しに挙がっている。
- **[Typed indexes in Zig](https://lvignoli.eu/posts/2026-11-16-typed-indexes-in-zig/)** (8pt) - Zig で配列のインデックスを型で区別する手法を扱う記事。
- **[Dutch data protection authority advises against purchasing AI camera glasses](https://autoriteitpersoonsgegevens.nl/en/current/ap-advises-against-purchasing-ai-camera-glasses-serious-risks-for-users-and-bystanders)** (21pt) - オランダのデータ保護当局が、AI カメラ付きメガネの購入を控えるよう勧告。利用者と周囲の人の双方にリスクがあるとしている。

## dev.to
- **[How much does it cost to run a text game with LLMs](https://dev.to/hiper2d/how-much-does-it-cost-to-run-a-text-game-with-llms-57o7)** - LLM のテキストゲームを運用する際の費用の見積もり方を扱う。入出力・キャッシュのトークン単価だけでは不十分で、推論トークンの消費量やキャッシュ率を把握する必要があると主張する。
- **[E2B, E4B or 12B? On an 8 GB RTX 3050, Serve Gemma 4 E4B](https://dev.to/gde/e2b-e4b-or-12b-on-an-8-gb-rtx-3050-serve-gemma-4-e4b-1eji)** - 8GB の RTX 3050 で Gemma 4 を動かす比較。thinking を有効にすると E4B は GSM8K 最初の157問で12B と同じ153問正解で、所要時間は0.55時間対0.96時間だった。
- **[Proofreader vs. Rewriter vs. Prompt API: Test the Task, Not the Demo](https://dev.to/gde/proofreader-vs-rewriter-vs-prompt-api-test-the-task-not-the-demo-pi9)** - ブラウザ内蔵 AI の Proofreader / Rewriter / Prompt API を、デモではなくタスク単位でテストすべきという記事。「文章を良くする」が誤字修正と言い換えなど複数の別タスクを含む点を指摘する。
- **[Find the production agent failures that every health check misses](https://dev.to/googlecloud/find-the-production-agent-failures-that-every-health-check-misses-39j8)** - ヘルスチェックでは見えない本番エージェントの失敗を拾い、要望に応じて原因コード行まで辿るオープンソースの品質エージェント AQuA の紹介。ダッシュボードはローカルで試せる。
- **[Why Is Credential Rotation So Hard? Follow One Leaked Production Key](https://dev.to/gitguardian/why-is-credential-rotation-so-hard-follow-one-leaked-production-key-9o1)** - 漏洩した本番キー1つに13個のコピーがあり、チームは1つしか把握していなかった事例から、ハードコードされたフォールバックなどシークレットローテーションが難しい理由を追う。

## TechCrunch
- **[OpenAI says heavy ChatGPT users may hit limits sooner as it merges Chat and Work](https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/)** - OpenAI が ChatGPT の Chat と Work を統合し、使用量メーターを一本化する。ヘビーユーザーは利用上限に早く達する可能性がある。
- **[DOJ accuses former cyber executive of defrauding ransomware victims by secretly paying hackers](https://techcrunch.com/2026/11/25/doj-accuses-former-cyber-executive-of-defrauding-ransomware-victims-by-secretly-paying-hackers/)** - 米司法省が元サイバー企業幹部を起訴。ランサムウェア被害者に代わって攻撃者へ秘密裏に身代金を払い、被害者に多めに請求して差額を得ていたとされる。
- **[FCC approves SpaceX plan to put AI data centers in space](https://techcrunch.com/2026/11/25/fcc-approves-spacex-plan-to-put-ai-data-centers-in-space/)** - FCC が SpaceX の宇宙 AI データセンター計画を承認。科学研究への影響など反対意見の一部は、FCC の規制権限外として退けた。Ars Technica も衛星100万基の認可を別角度で報じている。
- **[AI data centers are becoming harder to build, and neoclouds are feeling it](https://techcrunch.com/podcast/ai-data-centers-are-becoming-harder-to-build-and-neoclouds-are-feeling-it/)** - Nvidia は完成間近になるまで AI データセンターの支援をしない方針で、ネオクラウドは建設遅延と債務コスト上昇に直面している。土地・電力・完成した建屋が重視されるというポッドキャスト回。

## Ars Technica
- **[Ladybird browser's first downloadable alpha is surprisingly capable](https://arstechnica.com/gadgets/2026/11/ladybirds-new-alpha-shows-theres-life-beyond-chromium/)** - 独立系ブラウザエンジン Ladybird が初のダウンロード可能なアルファ版を Linux と macOS 向けに公開し、Ars が実際に試した。Chromium 以外の選択肢として注目される。
- **[Google search alternative Kagi launches Gmail rival](https://arstechnica.com/gadgets/2026/11/google-search-alternative-kagi-launches-gmail-rival/)** - 検索の Kagi がメールサービスを開始。プライバシーの約束と AI 機能という珍しい組み合わせを売りにしている。
- **[AI may soon change what it means to be a theoretical physicist](https://arstechnica.com/ai/2026/11/ai-can-do-the-calculations-physicists-are-figuring-out-what-comes-next/)** - フロンティア AI が、トップ物理学者が丸一日かけていた計算問題をすでに解いているとして、理論物理学者の役割がどう変わるかを探る記事。
- **[Surveillance pricing uses our personal data to make us pay more](https://arstechnica.com/tech-policy/2026/11/surveillance-pricing-uses-our-personal-data-to-make-us-pay-more/)** - 個人データを使ったパーソナライズ価格が、不公平で偏った価格につながりうることを論じる。

## 注目トピック
MCP とエージェント周辺の「使い方の標準化」が進んでいる。Skills over MCP でツールの使い方まで MCP 経由で配れるようになり、Google Workspace の MCP サーバーと CLI が GA した。AWS でも Lambda durable functions と MicroVM の連携、Systems Manager のマルチクラウド自動化が出ている。Zenn では Memory 設計、敵対的検証、spec を実装後に整理する運用など、エージェント開発の設計・運用知見が目立つ。

もう一つの流れは検証と実装基盤の見直し。Lean 4 による Rust OSS の形式検証で実際の脆弱性が見つかり、Anthropic は Messages API を Rust へ移行した。ブラウザ領域では Ladybird の初アルファ版と Servo の進捗が並び、Chromium・WebKit 以外のエンジンへの関心が続いている。
