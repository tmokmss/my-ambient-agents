---
title: "Tech Feed ダイジェスト（2026年11月9日）"
date: "2026-11-08T15:54"
category: "summary"
summary: "MCP復権の背景、マルチエージェント設計15パターン、Claude Codeの設定ファイル経由の秘密情報漏洩、AWSのSOCI/GPU分割など"
tags: ["ai", "mcp", "security", "aws", "agents", "devops", "rust", "linux"]
---

## はてなブックマーク (テクノロジー)
- **[MCPはなぜ復権したのか：CLIが支持された理由と、流れを変えた仕様変更](https://hiraoku.dev/blog/mcp-cli-cloud/)** ([122users](https://b.hatena.ne.jp/entry/s/hiraoku.dev/blog/mcp-cli-cloud/)) - 一度はCLI連携が支持されたMCPが再び注目される経緯を、仕様変更の観点から整理した解説。エージェントのツール連携方式を選ぶ際の背景として参考になる。
- **[生成AI時代のIAMのマニアックな話](https://speakerdeck.com/takuros/jaws-festa-2026-public)** ([125users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/takuros/jaws-festa-2026-public)) - JAWS FESTA 2026 の登壇資料。生成AI・エージェント時代にAWS IAMの権限設計で意識すべき細部を扱う。
- **[【図解あり】マルチエージェント設計「15のパターン」 GitHub、Google、Siemensの知見を一気に整理](https://atmarkit.itmedia.co.jp/ait/articles/2611/08/news001.html)** ([109users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2611/08/news001.html)) - 複数社の知見をもとにマルチエージェントの設計パターンを図解で整理。役割分担やオーケストレーション設計の見取り図になる。
- **[AWSを利用する上で知っておきたい名前解決の話 2026](https://speakerdeck.com/nagisa53/aws-o-riyou-suru-ue-de-shi-te-okitai-namae-kaiketsu-no-hanashi-2026)** ([96users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/nagisa53/aws-o-riyou-suru-ue-de-shi-te-okitai-namae-kaiketsu-no-hanashi-2026)) - VPC内外のDNS解決の仕組みを整理したスライド。ハイブリッド構成でのトラブルシュートの土台になる。
- **[Claude Codeの「今後確認しない」が秘密情報をGitHubに漏らす — 1,122件の公開ファイルに1,379件の秘密情報](https://dev.ponkotsu.dev/entry/claude-code-settings-local-secrets)** ([20users](https://b.hatena.ne.jp/entry/s/dev.ponkotsu.dev/entry/claude-code-settings-local-secrets)) - 権限確認で「今後確認しない」を選ぶと、許可したコマンド文字列（トークン等を含みうる）がローカル設定ファイルに残り、それが公開リポジトリにコミットされて漏れる問題を調査。設定ファイルを `.gitignore` に含める運用の重要性を示す。

## Zenn
- **[シン・ウルトラモード](https://zenn.dev/aws_japan/articles/kiro-crew-ultra-mode)** - Kiro CLI や Claude Code などのエージェントのチャットをダッシュボードや Slack から扱うOSS「Kiro Crew」の新機能紹介。
- **[意思決定だけで週100コミット積むAI開発手法](https://zenn.dev/kingyosun/articles/kukuri-ai-dev)** - P2P SNS「kukuri」の開発でAIコーディングを使い、人は意思決定に専念して高いコミット頻度を実現する進め方を紹介。
- **[Claudeを使いこなす人に、MagicPodは要るのか。知らないアプリでPlaywrightと比べた記録](https://zenn.dev/genda_jp/articles/7b423bcd20b532)** - 刷新されたMagicPodのMCPサーバー経由でのテスト作成を、Claude + Playwright と比較した検証記録。
- **[コードを読まずにバイブコーディングしたら、Claude Codeは分かっていてスルーしていた](https://zenn.dev/nexta_/articles/42a828ca2b8a02)** - 複数のClaude Codeセッションを並行運用する中で、コードを読まずに進めた際に見えてきた問題点を共有。
- **[タスク管理までAIエージェントに任せたら、確認待ちに答えるだけになった](https://zenn.dev/rescuenow/articles/4c03a548cd6589)** - 司令塔エージェントにタスク管理まで任せた結果、人の役割が確認への応答に寄っていった体験と運用上の知見。

## Qiita
※ 各解説は冒頭抜粋から読み取れる範囲に限る。
- **[RAGに入れる資料を「下ごしらえ」したら、誤答率が30%→13%に下がった（Bedrock Knowledge Bases）](https://qiita.com/MURAMASA2470/items/a7c351ba251da81f507e)** - 資料をそのまま置くのではなく前処理することで、RAGの誤答率が大きく下がったという検証。
- **[Goのerrorがnilにならないとき、ポインタではなくinterfaceの型を見る](https://qiita.com/Shiro_Shihi/items/10e5d76ebd638a2c472f)** - 型付きnilを返すと `error == nil` が false になる、Go特有のinterfaceのnil比較の落とし穴を整理。
- **[[宇宙最速!?]AI音声チャットでTTFA 0.2秒を実現したった~Jev × ElevenLabs~](https://qiita.com/kikuziro/items/027679848c85f95b7ef7)** - 最初の音声が鳴るまでの時間（TTFA）を指標に、AI音声チャットの応答を0.2秒まで短縮した工夫。
- **[OCI Database ServicesのマネージドMCPサーバーをCodexから使ってみた](https://qiita.com/mo__mo/items/4a8b7100b6b65a582889)** - 2026年10月に追加されたOCIのマネージドMCPサーバーを、MCP対応クライアントから自然言語で操作する検証。
- **[差分を流れ順に 1 ステップずつ読むツールを作った話](https://qiita.com/y_tsubasa/items/46a5748d97ca50ed00ad)** - AI生成コードのレビューで、ファイルパス順の `git diff` ではなく処理の流れ順に差分を読めるツールを作った話。

## AWS 新着
- **[Amazon CloudFront now provides viewer ISP and post-quantum TLS details](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/)** (2026-10-30) - 閲覧者のISP名を示す `CloudFront-Viewer-ISP` ヘッダーなどをオリジンへ転送可能に。ネットワーク起因の問題切り分けやPQ-TLSの採用状況把握に使える。
- **[Amazon SageMaker AI inference now supports GPU partitioning for real-time endpoints](https://aws.amazon.com/about-aws/whats-new/2026/10/sagemaker-gpu-partitioning/)** (2026-10-30) - NVIDIA MIG等で1枚のGPUを分割し、複数モデルを1つのGPU上で動かせる。小型モデルのコスト効率改善に有効。
- **[AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/)** (2026-10-28) - OCIイメージ形式のLambda関数でSOCIによる遅延ロードに対応し、大きなイメージの起動を短縮。
- **[Amazon ECS Managed Instances adds cross-instance and Spot consolidation](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-managed-instances-consolidation/)** (2026-10-28) - インスタンス間およびSpotのコンソリデーションで、タスクを集約して無駄なインスタンスを減らす最適化が追加。
- **[Amazon RDS now supports per snapshot billing](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-rds-per-snapshot-billing/)** (2026-11-02) - 従来は集計されていたRDSスナップショット料金をスナップショット単位で確認可能に。コスト配分の粒度が上がる。

## Lobsters
- **[I'm not a fan of Deno's security model (2024)](https://goldstein.lol/posts/deno-security/)** (25pt) - Denoのパーミッション型セキュリティモデルの限界を指摘する論考。ランタイムの権限制御が実際に防げる範囲を考える材料。
- **[Dear Open Source Developers: It's OK not to embargo](https://opensourcesecurity.io/2026/10-embargo/)** (26pt) - OSSの脆弱性対応で、必ずしも非公開期間（エンバーゴ）を設けなくてよいとする主張。開示プロセスの再考を促す。
- **[Nspawn 3.0: A Docker-compatible Engine API for systemd-nspawn containers](https://blog.nspawn.org/posts/nspawn-3-0-a-docker-compatible-engine-api-for-systemd-nspawn-containers/)** (10pt) - systemd-nspawn コンテナ向けに Docker 互換の Engine API を提供するリリース。既存のDockerツールからnspawnを扱える。
- **[systemd loves Rust](https://amutable.com/blog/systemd-loves-rust)** (9pt) - systemd における Rust 採用の動向を扱う記事。
- **[Workflow dependency lockfiles](https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles)** (5pt) - GitHub Actions のワークフロー依存関係をロックファイルで固定する仕組みの公式ドキュメント。サプライチェーン攻撃対策として有用。

## dev.to
- **[Redis 8.12-rc1's roaring bitmap type shrinks a sparse bitmap from 24MB to 239KB](https://dev.to/alexgeorgiev17/redis-812-rc1s-roaring-bitmap-type-shrinks-a-sparse-bitmap-from-24mb-to-239kb-5bll)** - Redis 8.12-rc1 の新しい roaring bitmap 型で、2億ビットの疎なビットマップが24MBから239KBに縮小し、BITCOUNTが約14倍高速になったという実測。
- **[Why Telling an LLM to Be Careful Doesn't Work: Penalty Prompts Had a 0% Abstention Rate](https://dev.to/fgrandon/why-telling-an-llm-to-be-careful-doesnt-work-penalty-prompts-had-a-0-abstention-rate-49ij)** - Gemma 2/3/4 と Ollama での再現実験で、「慎重に答えよ」というペナルティ付きプロンプトでは回答を控える率が0%だったと報告。
- **[I Attacked a Real LLM Agent With Hidden Text. Here's What It Did](https://dev.to/tinniaru3005/i-attacked-a-real-llm-agent-with-hidden-text-heres-what-it-did-free-kaggle-notebooks-1799)** - 文書やWebページに隠したテキストで実際のLLMエージェントを攻撃し、その挙動を検証（Kaggle Notebook付き）。プロンプトインジェクション対策の参考になる。
- **[Securing an EOL Host Against PHP2Shell](https://dev.to/besworks/securing-an-eol-host-against-php2shell-p8e)** - サポート切れホスト上で、PHPランタイムをホストOSから切り離してPHP2Shell脆弱性の影響を抑える手順。
- **[Leveling the Playing Field: Building a 100% Offline Kubernetes Docs RAG Exam Assistant with Web AI, Gemma 4, and WebGPU](https://dev.to/gde/leveling-the-playing-field-building-a-100-offline-kubernetes-docs-rag-exam-assistant-with-web-ai-53bi)** - Gemma 4 と WebGPU によりブラウザ内で完結するオフラインRAGでKubernetesドキュメント検索を行う実装。

## TechCrunch
※ 他ソースとの重複や非技術記事を除くと、新規で技術寄りの記事は2件のみだった。
- **[Megaspeed exec was recruited to spy on Nvidia CEO, according to US intelligence memo](https://techcrunch.com/2026/11/07/chinese-exec-was-recruited-to-spy-on-nvidia-ceo-according-to-us-intelligence-memo/)** - 米情報当局のメモとして、中国の情報機関がMegaspeedの幹部を使いNvidia CEOの動向を探らせたと報じる。AI半導体を巡る地政学リスクの文脈。同じ件をArs Technicaも「議会がNvidia CEOを召喚」という角度で報じている。
- **[After blocking Muse, Amazon now lets users text Alexa to help them shop](https://techcrunch.com/2026/11/06/after-blocking-muse-amazon-now-lets-users-text-alexa-to-help-them-shop/)** - AmazonはMetaのMuseエージェントによるアクセスを遮断する一方、自社のAlexaにテキストで買い物を任せる機能を展開。外部AIエージェントによるプラットフォームアクセスの扱いが焦点。

## Ars Technica
- **[VMware releases vSphere Express for virtualization on up to 128 cores](https://arstechnica.com/information-technology/2026/11/vmware-releases-vsphere-express-for-virtualization-on-up-to-128-cores/)** - 最大128コアまでの小規模環境向けに vSphere Express を投入。ライセンス変更で離れた下位顧客に向けた動き。
- **[AMD's record quarter: Data center business doubles, while gaming craters](https://arstechnica.com/gadgets/2026/11/amds-record-quarter-data-center-business-doubles-while-gaming-craters/)** - 四半期売上は過去最高の134億ドル。データセンター事業が倍増する一方、ゲーミング売上は40%減。AI需要の偏りを示す。
- **["Does Meta think we can't read?" Meta abandons sketchy commercial terms update.](https://arstechnica.com/tech-policy/2026/11/does-meta-think-we-cant-read-meta-abandons-sketchy-commercial-terms-update/)** - Facebookページ所有者にリンク先コンテンツのAI学習利用を許諾させる規約変更をMetaが撤回。AI学習とデータ利用許諾を巡るプラットフォーム規約の例。
- **[As US ties fray, Europe plans first undersea cable link to Greenland](https://arstechnica.com/gadgets/2026/10/as-us-ties-fray-europe-plans-first-undersea-cable-link-to-greenland/)** - 米国経由を避けてカナダ・日本・韓国を結ぶPan-Arcticケーブル計画。ネットワーク基盤の地政学的な再編。

## 注目トピック
今回はAIエージェント周辺の「つなぎ方」と「守り方」が複数ソースで目立った。MCPの復権（はてブ）、マルチエージェント設計パターン、OCIのマネージドMCPサーバー（Qiita）、Amazonによる外部エージェント遮断（TechCrunch）は、エージェントがツールやプラットフォームにどう接続し、どこまで許可するかという同じ問いの別側面である。一方で、Claude Codeの「今後確認しない」設定が秘密情報を公開リポジトリに漏らす事例、隠しテキストによるエージェント攻撃（dev.to）、Denoの権限モデルへの批判（Lobsters）は、権限を緩めた運用や設定ファイルが新たな攻撃面になることを示している。

インフラ面ではコンテナ・GPUの利用効率化が共通の流れだった。LambdaのSOCI遅延ロード、SageMakerのGPU分割、ECS Managed Instancesのコンソリデーションと、AWSの新機能は起動時間と稼働率の改善に集中している。また、AMDのデータセンター事業倍増やNvidia周辺の地政学報道は、AI需要が半導体・ネットワーク基盤にまで及んでいることを裏付ける。
