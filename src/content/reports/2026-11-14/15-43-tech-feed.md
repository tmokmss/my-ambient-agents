---
title: "Tech Feed ダイジェスト（2026年11月15日）"
date: "2026-11-14T15:43"
category: "summary"
summary: "Cognito 自己サインアップ悪用、llama.cpp v1.0、DocumentDB のポスト量子 TLS、PHP 緊急パッチなど開発者向け注目記事"
tags: ["aws", "security", "ai", "llm", "devops", "claude-code", "rust"]
---

## はてなブックマーク (テクノロジー)
- **[AWSでゼロトラスト構成を作る手順を5つのパートに分けて整理してみた - Qiita](https://qiita.com/yama3133/items/11a360fc97ed3ec09742)** ([73users](https://b.hatena.ne.jp/entry/s/qiita.com/yama3133/items/11a360fc97ed3ec09742)) - 「社内だから信頼する」前提を置かず、アクセスごとに身元と権限を確認するゼロトラストを、AWS 上でどのリソースを作れば形になるかという観点で5パートに分けて整理した記事。
- **[Cognitoの自己サインアップが有効だと、誰でもAWSの一時認証情報を取得できる：AI攻撃ツールARTEXの事例と確認したい設定3点 | DevelopersIO](https://dev.classmethod.jp/articles/cognito-self-signup-agentic-attack/)** ([17users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/cognito-self-signup-agentic-attack/)) - Cognito ID プールの自己サインアップが有効だと外部の誰でも一時認証情報を取得できてしまう問題を、AI 攻撃ツール ARTEX の事例とともに解説し、確認すべき設定3点を挙げている。
- **[An update on our recent security incident · Cursor](https://cursor.com/blog/security-incident-update)** ([11users](https://b.hatena.ne.jp/entry/s/cursor.com/blog/security-incident-update)) - Cursor 公式による直近のセキュリティインシデントの続報。開発ツールベンダー自身の事案であり、利用者は公式の対応内容を確認しておきたい。
- **[llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](https://huggingface.co/blog/ggml-org/llama-cpp-v1)** ([11users](https://b.hatena.ne.jp/entry/s/huggingface.co/blog/ggml-org/llama-cpp-v1)) - ローカル LLM 推論の事実上の基盤である llama.cpp が v1.0.0 に到達。ローカル AI エコシステムの土台を強化するというリリース告知。
- **[Qwen3.8 Flash Nextに混ざる中国語を、出力層の書き換えで消した: 27%→0%、他の重みは1バイトも変えずに](https://zenn.dev/caphtech/articles/qwen38-zh-ban)** ([9users](https://b.hatena.ne.jp/entry/s/zenn.dev/caphtech/articles/qwen38-zh-ban)) - 出力層のみを書き換えて、意図しない中国語混入率を27%から0%にしたという検証。ファインチューニングなしで他の重みを変えない点が特徴。

## Zenn
- **[1時間で作るPerlOS: Yet Another Perl Computer](https://zenn.dev/takesako/articles/e9b10360d889ca)** - 組み込み用 Perl 処理系 microperl を自作 OS に組み込み、起動すると Perl シェルが使える PerlOS を作る手順。C の数十行のコードと QEMU から始め、標準ライブラリやブートの仕組みなど低レイヤーを学べる。
- **[【2026/11/13時点】Claude Duet を Team プランで触ってみた（組織で使うときの注意点つき）](https://zenn.dev/canly/articles/e2bd67c9a4c18b)** - Team プランの管理画面に現れた Claude Duet（ベータ）を組織で有効化して試し、管理者がどこまで制限できるかをまとめた検証記事。提供範囲は公式ヘルプ上、米国の Pro / Max / Ultra が中心とのこと。
- **[Claude Codeで最近使っているTips【2026/11】](https://zenn.dev/oikon/articles/claude-code-recipe)** - Claude Code 書籍の著者による直近の実用 Tips 集。日常の使い方を改善したい人向け。
- **[SlackでMarkdown記法が使えるようになっていた](https://zenn.dev/lnest_knowledge/articles/ed5977bd7b6c1f)** - Markdown 文字列を貼り付けて投稿すると、表なども表示されることを確認した検証記事。macOS 版とブラウザ版での確認で、全環境で同じ動作かは未確認と注記されている。

## Qiita
- **[Claude Codeを並列で回すとsettings.jsonが壊れる問題を、mkdirロックとアトミック書き込みで止める](https://qiita.com/joinclass/items/8c40b05a48487aa588c0)** - launchd から17本以上のジョブで Claude Code を動かす運用で起きた settings.json 破損を、mkdir による排他ロックとアトミック書き込みで防いだ実践記録（冒頭抜粋より）。
- **[Proxmox × Cisco：Open vSwitchのRSTPで起動・ネットワーク変更時の約30秒待ちを短縮する](https://qiita.com/hshimomu/items/56618894a7e07af50d74)** - Proxmox 上の Cisco 仮想アプライアンス環境で、Open vSwitch の RSTP 設定により起動・ネットワーク変更時の約30秒待ちを短縮する話。
- **[QuarkusのCycloneDX ExtensionでSBOMを生成・埋め込み、実行中のアプリから取得してみた](https://qiita.com/autonomura/items/15e2fdda0840f4a9c7e2)** - Quarkus の CycloneDX Extension で SBOM を生成してアプリに埋め込み、実行中に取得する検証。脆弱性の影響調査やサプライチェーン対策の基礎になる。
- **[ちょっと見ない間にClaude APIが進化してた！](https://qiita.com/moritalous/items/9e7c02b749037238b2bc)** - Python と公式 SDK で、モデル呼び出しだけではなくなった Claude API の新機能を試す記事（冒頭抜粋より）。
- **[Claude Codeに同じ調査を繰り返させないためのメモの残し方](https://qiita.com/kentasatomi/items/06ccfbf7f6a2a24883ff)** - Anthropic が11月6日に公開した技術解説「The components of agent memory」を踏まえ、エージェントが得た知識を次のセッションへ残す方法を扱う（冒頭抜粋より）。

## AWS 新着
- **[Amazon Bedrock AgentCore Identity now supports OAuth 2.0 discovery URLs](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-oauth2-discovery/)** (2026-11-13) - インバウンド JWT 認可とアウトバウンド OAuth 認証情報プロバイダの両方で、認可サーバーの discovery URL を指定できるようになり、IdP 連携の設定が簡素化される。
- **[AWS Batch on Amazon EKS adds Linux capabilities, seccomp, and pod-level settings](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-batch-eks-security-context/)** (2026-11-13) - EKS ジョブ定義で Linux capabilities、seccomp プロファイル、Pod レベル設定などの Kubernetes security context を指定可能に。
- **[Amazon DocumentDB (with MongoDB compatibility) now supports post-quantum TLS, wildcard indexes, and $unionWith in version 8.0.3](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-documentdb-8-0-3/)** (2026-11-10) - 8.0.3 でハイブリッドのポスト量子鍵交換 TLS、ワイルドカードインデックス、`$unionWith` ステージ、新しい change stream イベントが追加された。
- **[Amazon OpenSearch Service announces managed cross-Region disaster recovery](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-managed-cross-region-disaster-recovery/)** (2026-11-10) - 検索・AI・分析ワークロード向けに、マネージドなクロスリージョン災害復旧が利用できるようになった。
- **[Aurora PostgreSQL with express configuration now supported in CloudFormation](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation/)** (2026-11-13) - Aurora PostgreSQL の express configuration を CloudFormation で扱えるようになり、IaC でクラスターのデプロイを自動化できる。

## Lobsters
- **[The need for at least a third option](https://blog.ovalerio.net/archives/3359)** (70pt) - モバイル OS が実質2強である現状に対し、少なくとも第三の選択肢が必要だと論じる記事（タグ: android, ios, mobile）。コメントも32件と議論が活発。
- **[Running a law firm on Free software (2026 edition)](https://decoded.legal/blog/2026/11/running-a-law-firm-on-free-software-2026-edition/)** (43pt) - 法律事務所をフリーソフトウェアで運用する2026年版の実践報告。業務システムを OSS で固める際の参考になる。
- **[Someone's impersonating this blog](https://mattbee.mataroa.blog/p/someones-impersonating-this-blog/)** (37pt) - 個人ブログのなりすましサイトが現れた件の報告（タグ: security）。
- **[A technical vision for the Haskell ecosystem](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078)** (15pt) - Haskell エコシステムの技術的ビジョンを示す Discourse の投稿。
- **[Pointer Provenance in Rust vs C++](https://sofiabelen.github.io/projects/pointer-provenance-in-rust-vs-cpp/)** (12pt) - ポインタ・プロベナンス（ポインタの出自）の扱いを Rust と C++ で比較する記事。低レイヤーの未定義動作の理解に役立つ。

## dev.to
- **[How much does it cost to run a text game with LLMs](https://dev.to/hiper2d/how-much-does-it-cost-to-run-a-text-game-with-llms-57o7)** - 入出力・キャッシュ・推論トークンの単価だけでは総コストが読めないという問題意識から、LLM テキストゲームの実運用コストを見積もる試み。
- **[nginx 1.31's json_set directive rejects a bad webhook payload about 13 times faster than forwarding it](https://dev.to/alexgeorgiev17/nginx-131s-jsonset-directive-rejects-a-bad-webhook-payload-about-13-times-faster-than-forwarding-3b00)** - nginx 1.31 のネイティブ JSON パーサで不正な webhook を弾くと、Python バックエンドで検証するより低並行時に約13倍速く、拒否が多い場合はバックエンドへのリクエストも減らせる。拒否がなくても測定可能なオーバーヘッドはなかったとのこと。
- **[Scope WebMCP Tools to the Open React Workflow](https://dev.to/gde/scope-webmcp-tools-to-the-open-react-workflow-262o)** - 一覧画面では WebMCP ツールが0件、イベント下書きを開くと4件見える、というように React の開いているワークフローに応じてツール公開範囲を絞る設計。
- **[My ML Feature Used the Wrong Unit. The Threshold Was 400x Too Large.](https://dev.to/pavel_kkkkazantsev/my-ml-feature-used-the-wrong-unit-the-threshold-was-400x-too-large-4add)** - 取引サイズと1秒あたり NAV の閾値を比較していて単位が合わず、特徴量がほぼ0に潰れたデバッグ事例。監査で他に3件の学習/推論間の特徴量契約バグも見つかった。
- **[Snapshotting a DigitalOcean Droplet while it's running](https://dev.to/remdore/snapshotting-a-digitalocean-droplet-while-its-running-4m3c)** - 稼働中の Droplet のスナップショットについて、公式ドキュメントの注意点を踏まえて Postgres などへの影響を検討する記事。

## TechCrunch
- **[AI agent startup LangChain hits $3B valuation](https://techcrunch.com/2026/11/13/ai-agent-startup-langchain-hits-3b-valuation/)** - LangChain の評価額が30億ドルに到達。モデル・プラットフォーム非依存のエージェント管理ツール LangSmith は7,000社の顧客を持つという。
- **[Nebius tests the neocloud playbook with $40 billion in planned spending](https://techcrunch.com/2026/11/12/nebius-tests-the-neocloud-playbook-with-40-billion-in-planned-spending/)** - Nebius は400億ドルの AI インフラ拡張を顧客の前払いと融資で賄う計画だが、Microsoft 向けデータセンターの遅延が資金調達モデルへの疑問を呼んでいる。
- **[ElevenLabs' new app combines meeting note-taking and dictation for teams](https://techcrunch.com/2026/11/13/elevenlabs-new-app-combines-meeting-note-taking-and-dictation-for-teams/)** - ElevenLabs が会議ノートと音声ディクテーションを統合した、チーム・企業向けの新アプリ ElevenAI を発表した。

## Ars Technica
- **[VMware releases vSphere Express for virtualization on up to 128 cores](https://arstechnica.com/information-technology/2026/11/vmware-releases-vsphere-express-for-virtualization-on-up-to-128-cores/)** - VMware が最大128コアまでの小規模環境向けに vSphere Express を投入。低価格帯の顧客の声を聞いた結果と担当者が説明している。
- **[PHP warns it plans to release 2 emergency patches imminently](https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/)** - PHP のメンテナが緊急パッチ2件を近く出すと予告。未確認ながら PHP2Shell エクスプロイトによる遠隔コード実行の報告があるという（10月21日の記事）。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - Meta Muse の会話共有機能で個人・業務上の機密が露出し、Meta は調査中に共有機能を停止した（10月20日の記事）。
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みの4件の脆弱性を連鎖させ、未パッチの Plex サーバーにマルウェアを入れる攻撃が確認されている（10月19日の記事）。
- **[ReactOS reaches major milestone with NTFS install support](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/)** - ReactOS が新しいドライバで NTFS へのインストールに対応した。

## 注目トピック
今回は「AI エージェントを取り巻く認証・権限・実行環境」が共通テーマだった。AWS では AgentCore Identity の OAuth discovery 対応や Batch on EKS の security context 拡張、Cognito 自己サインアップが AI 攻撃ツールに悪用されうるという指摘、WebMCP ツールの公開範囲を画面の文脈で絞る設計など、エージェントに何をどこまで許すかが実装レベルの課題になっている。Cursor のインシデント続報や Meta Muse の共有機能停止も、AI 開発ツールの運用リスクを意識させる。

もう一つは、ローカル推論とモデル改変の成熟だ。llama.cpp v1.0.0 の到達、出力層だけを書き換えて中国語混入を抑えた Qwen の検証、nginx のネイティブ JSON 検証による効率化など、既存基盤に小さな変更を加えて効果を出す事例が目立った。一方で Plex や PHP の緊急パッチ予告のように、基本的なパッチ適用の重要さも変わっていない。
