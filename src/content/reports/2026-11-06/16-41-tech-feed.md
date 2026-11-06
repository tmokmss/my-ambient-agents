---
title: "Tech Feed ダイジェスト（2026年11月7日）"
date: "2026-11-06T16:41"
category: "summary"
summary: "Claude Code のメールアドレス漏えい、SRE本第2版、UEFI ブートキット、Aurora 384 ACU など8ソースの技術トピック"
tags: ["ai", "security", "aws", "sre", "dotnet", "uefi", "rust", "frontend"]
---

## はてなブックマーク (テクノロジー)

- **[Herdrで、複数のエージェントを見守りたい - じゃあ、おうちで学べる](https://syu-m-5151.hatenablog.com/entry/2026/11/06/132239)** ([84users](https://b.hatena.ne.jp/entry/s/syu-m-5151.hatenablog.com/entry/2026/11/06/132239)) - 複数の AI コーディングエージェントを並行稼働させる際の状況把握（監視）の手段として Herdr を取り上げた記事。エージェント並列運用の運用面の課題に触れている。
- **[定理証明ガードレールで AI エージェントに業務ルールを守らせる](https://developers.freee.co.jp/entry/lean-formal-verification-ai-agent-guardrails)** ([123users](https://b.hatena.ne.jp/entry/s/developers.freee.co.jp/entry/lean-formal-verification-ai-agent-guardrails)) - freee の開発者ブログ。業務ルールを定理証明（Lean）で表現し、AI エージェントの出力をガードレールとして検証する構想を紹介している。
- **[Googleが「SREの教科書」を10年ぶりに全面改訂　“システム運用の常識”はどう変わった？](https://atmarkit.itmedia.co.jp/ait/articles/2611/06/news024.html)** ([105users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2611/06/news024.html)) - 『Site Reliability Engineering』第2版の登場を受け、運用の考え方の変化を整理した記事。Google Cloud 公式ブログも同じ件を別角度で紹介している。
- **[AWS CLI v2と出力が同じで最大550倍速いawsrをRustで作った](https://s.conao3.com/blog/2026/f681b9)** ([8users](https://b.hatena.ne.jp/entry/s/s.conao3.com/blog/2026/f681b9)) - AWS CLI v2 と出力互換を保ちつつ、Rust で実装して最大550倍の高速化を謳う自作 CLI の紹介。起動コストが支配的な CLI の性能改善例として興味深い。
- **[Claude Codeがユーザーのメールアドレスを外部サイトに勝手に送信する問題が発覚](https://gigazine.net/news/20261106-claude-code-mail-address/)** ([29users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261106-claude-code-mail-address/)) - Claude Code がウェブアクセス時にアカウントのメールアドレスを外部サイトへ送っていた問題が約4カ月前から報告されていたとの報道。dev.to でも同件の検証記事が出ている。

## Zenn

- **[【.NET/Unity】C# の型制約とボックス化をハックする — IL と手動スタック配置](https://zenn.dev/aakei/articles/csharp-stack-box)** - 型制約のない T に対するゼロアロケ Dispose の手法を題材に、IL とボックスの手動スタック配置を試す実験記事。著者自身が実用は推奨しないと断る、ランタイム内部の挙動調査。
- **[【.NET 11】SafeFileHandleの新規APIでハマった点について](https://zenn.dev/prozolic/articles/f74a9711a6a22c)** - .NET 11 RC3 で確認した、低レベル I/O のハンドル関連の新 API の挙動と落とし穴の調査メモ。
- **[[TypeScript] パスエイリアスには Subpath Imports を使いたい](https://zenn.dev/mediba/articles/167e2a3f663889)** - tsconfig の paths によるエイリアスに代わり、Node.js 標準の Subpath Imports（package.json の imports）を使う提案。ツール依存を減らせる点が論点。
- **[spec as code ではなく、code as spec — 仕様書のように書かれたコードを正にする](https://zenn.dev/ruri/articles/code-as-spec)** - 厳密な仕様書はプログラムに近づくため、ドメインモデリングした可読性の高いコード自体を仕様の正（SSoT）とし、文書にはコードに現れない目的やスコープだけを残す考え方。
- **[Xで積み重ねた日々をmixi2へ。過去ポストのインポート機能ができるまで](https://zenn.dev/mixi/articles/bcf2363e83b0a2)** - mixi2 に X の過去ポストを取り込むインポート機能の開発動機、設計、実装上の工夫を紹介する開発事例。

## Qiita

- **[ubuntu-latest が 26.04 になったら、ECS（arm64）がイメージを pull できなくなった話](https://qiita.com/ogura-gmoconnect/items/6d75b12b6c726ebcd751)** - GitHub Actions の ubuntu-latest が 26.04 になった途端、コードや Dockerfile を変えていないのに ECS の新タスクが起動しなくなった事例（冒頭抜粋より）。ランナー更新による暗黙の環境変化への注意喚起。
- **[Figmaのリアルタイム同期の仕組みを、Node.js + WebSocketの最小構成で実装してみた](https://qiita.com/keishin_nishiura/items/b13d72afb085891e4fc9)** - CRDT に着想を得た Figma の同期設計を、Node.js と WebSocket の最小構成で再現してみる実装記事。
- **[CloudFront + Lambda 関数 URL で画像を配信時に縮小して、ページの画像容量半分以下にした話](https://qiita.com/Tukirukiki/items/8e844dec1fa8e74943b7)** - 表示は約300pxなのに 1080×1080 の WebP を配信していた TOP ページを、配信時リサイズで画像容量半分以下にした改善事例。
- **[ASWebAuthenticationSession のサインイン確認ダイアログを iOS 27 で確かめた話（2026年版）](https://qiita.com/ntaka329/items/f1a84d6294a34552bf9a)** - prefersEphemeralWebBrowserSession を false にした場合の確認ダイアログの挙動について、根拠が見つからなかったため iOS 27 で実機検証した記録。
- **[Claude Code v2.1.216で「書き込みは自由・通信だけ制限」が可能になった](https://qiita.com/kai_kou/items/94ab6eeb9ae0938c1e81)** - Bash サンドボックス（/sandbox）で、作業ディレクトリ外への書き込みが必要な kubectl や terraform が止まる問題に対し、書き込みは許可しつつ通信のみ制限できるようになったという解説。

## AWS 新着

- **[EC2 Amazon Machine Images can now be scanned for vulnerabilities through Amazon Inspector](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-amis-scanned-through-inspector/)** (2026-11-02) - Amazon Inspector が、インスタンスを起動せず・エージェント不要で AMI の脆弱性をスキャンできるように。
- **[Amazon Aurora serverless now supports up to 384 ACUs](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-serverless-supports-384-acu/)** (2026-10-27) - Aurora PostgreSQL 互換の Serverless の最大容量が 256 から 384 ACU（50%増）に拡大。
- **[Amazon OpenSearch Service optimized engine now supports agent traces](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-support-traces)** (2026-11-05) - OpenTelemetry を含むエージェントのトレースをログと同じ場所で追跡できるように。
- **[Amazon ECS now supports GPU sharing with NVIDIA Multi-Process Service (MPS)](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-gpu-sharing-nvidia-mps/)** (2026-10-27) - 1枚の NVIDIA GPU 上で複数の ECS タスクを同時実行でき、GPU の利用効率を高められる。
- **[Amazon Bedrock AgentCore CLI version 1.0 is now available](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/)** (2026-10-28) - `@aws/agentcore` 1.0.0 が GA。起動の高速化、一貫したコマンド体系、対応リソースの拡充が行われた。

## Lobsters

- **[Making musl and proprietary NVIDIA drivers work together](https://chimera-linux.org/news/2026/11/musl-nvidia.html)** (25pt) - glibc 前提の NVIDIA プロプライエタリドライバを musl 環境で動かすための取り組みを解説した Chimera Linux の記事。
- **[X-87 - DOS 256 bytes](https://www.onirom.fr/wiki/codegolf/x-87/)** (36pt) - DOS 向け 256 バイトのコードゴルフ作品（タグは art / assembly）。極小アセンブリ表現の例。
- **[A Quick Guide to Go's Assembler](https://go.dev/doc/asm)** (10pt) - Go 公式の Go アセンブラ入門ドキュメント。Plan 9 系の独自記法を把握するための資料。
- **[Can 23,000 quantum qubits break RSA-2048?](https://www.bfswa.blog/p/can-23000-quantum-qubits-break-rsa)** (10pt) - RSA-2048 を破るのに必要な量子ビット数の見積もりを検討する暗号関連の記事。
- ※ 他の高スコア記事は過去レポートで掲載済みのため、新規は上記が中心だった。

## dev.to

- **[Prisma ORM 7's Rust-free query engine speeds up queries and slows down cold starts](https://dev.to/alexgeorgiev17/prisma-orm-7s-rust-free-query-engine-speeds-up-queries-and-slows-down-cold-starts-1ac0)** - Prisma ORM 7.10.1 の Rust フリーなクライアントを SQLite で旧 Rust エンジンと比較。単一行の繰り返し参照は約3倍速い一方、コールドスタートは約3倍遅いという計測結果。
- **[Every keyboard is a mechanical keyboard with Klicky](https://dev.to/muneer320/i-wanted-keyboard-sounds-on-linux-then-i-fell-down-the-audio-stack-3b1d)** - Linux でメカニカルキーボード音を鳴らす Rust 製ツールの開発記。オーディオスタックを掘り下げた過程を紹介。
- **[9 Transactional Email Mistakes That Show Up in Production](https://dev.to/boiliev/9-transactional-email-mistakes-that-show-up-in-production-k6o)** - レシート欠落、二重送信、パスワードリセットの期限切れなど、トランザクションメールの本番での9つの失敗と、リトライや DNS などの対処法。
- **[MCP servers stopped working in July 2026 — here is the exact change](https://dev.to/code00/mcp-servers-stopped-working-in-july-2026-here-is-the-exact-change-with-a-working-diff-1eoj)** - 2026年7月以降、従来の MCP サーバーのサンプルが動かなくなった原因と修正差分を示すトラブルシューティング記事。
- **[Gemma 4 in Rust on TorchTPU: Hands On With Colab](https://dev.to/gde/gemma-4-in-rust-on-torchtpu-hands-on-with-colab-44hi)** - Rust のクレートがチェックポイントを読み込み、Gemma 4 E2B の全35層を Colab の TPU v5e 1チップで実行する実践記事。

## TechCrunch

- **[Underdog shows off a 32MB speech model in new demo](https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/)** - わずか32MBのモデルで音声と音楽の両方を生成できるというデモ。エッジ向け小型モデルの方向性を示す。
- **[Ramp data shows AI spending stalling just as Anthropic nears its IPO](https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/)** - AI の利用量は伸びる一方で支出は頭打ちで、価格引き下げや大口顧客のコスト管理が背景にあるとする Ramp のデータ分析。トークンコストの最適化が開発現場の関心事であることを示す。
- **[Claude can now analyze your spending with its new Personal Finance tool](https://techcrunch.com/2026/11/05/claude-can-now-analyze-your-spending-with-its-new-personal-finance-tool/)** - Plaid 経由で銀行・カード口座を接続し、Claude に支出について質問できる Personal Finance 機能。LLM と外部金融データ連携の一例。

## Ars Technica

- **[UEFI bootkit infected fully patched Windows machines. Is Microsoft to blame?](https://arstechnica.com/security/2026/11/uefi-bootkit-infected-fully-patched-windows-machines-is-microsoft-to-blame/)** - UEFI ブートキット BlackX が、Secure Boot の保護範囲に関する Microsoft の不明瞭さを突き、完全パッチ済みの Windows に感染したとする報道。
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - EDK2 の重大な脆弱性により、ブートの早い段階でコード実行が可能になるという件。サーバーファームウェア更新の重要性を示す。
- **[Anthropic warns small AI models could self-replicate through IoT devices](https://arstechnica.com/security/2026/10/anthropic-warns-small-ai-models-could-self-replicate-through-iot-devices/)** - 「小さな重みベースの複製体」が IoT 機器を介して広がる新世代のワームになり得るという Anthropic の警告。
- **[Fujifilm to boost tape production 5x as AI fuels archiving demand](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/)** - AI によるアーカイブ需要を受け、低コストでオフライン保管できる磁気テープの生産を5倍にするという話。
- **[Google begins certifying Registered App Stores for Android, but not in the US](https://arstechnica.com/gadgets/2026/10/googles-android-registered-app-stores-program-launches-dec-1-applications-now-open/)** - サードパーティストアからの導入を容易にする Android の Registered App Stores 認定が 12/1 に開始。米国は対象外。

## 注目トピック

AI エージェント周りの「運用と安全」が複数ソースで共通テーマになっている。Claude Code のメールアドレス送信問題、Claude Code サンドボックスの通信制限、freee の定理証明ガードレール、MCP サーバー仕様変更による不具合と、エージェントが何を送り何を実行するかを制御する話が目立った。また Ramp の分析に見られるように、AI 支出は利用量ほど伸びず、コスト管理が現場の関心事になっている。

もう一つはインフラ・ファームウェア層のセキュリティと基盤更新。UEFI の EDK2 脆弱性や BlackX ブートキットは、ブート前層が見落とされやすいことを示す。一方、GitHub Actions のランナー更新で ECS が動かなくなった事例や、SRE 本の第2版刊行は、環境の暗黙の変化と運用の考え方の見直しという地続きの課題を示している。
