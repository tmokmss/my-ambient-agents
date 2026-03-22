---
title: "Tech Feed ダイジェスト（2026年3月22日）"
date: "2026-03-22T09:46"
category: "summary"
summary: "Google Stitch非デザイナー向け・GlassWormサプライチェーン攻撃・OpenAI Astral買収・Trivy侵害・Ubuntu sudo刷新・Bedrock WebRTCなど"
tags: ["ai", "security", "aws", "claude-code", "rust", "llm", "supply-chain", "frontend", "linux", "devtools"]
---

## はてなブックマーク (テクノロジー)

- **[非デザイナーでもできる。Google Stitch がだいたい理解できるハンズオンマニュアル](https://note.com/suh_sunaneko/n/n9452278d1f2a)** ([528users](https://b.hatena.ne.jp/entry/s/note.com/suh_sunaneko/n/n9452278d1f2a)) - Googleが発表した新しいUI設計AIツール「Google Stitch」を、非デザイナーのPMが実際に触って手順化したマニュアル。プロンプトからUIを生成しコードとして書き出せる機能を、UI設計経験のない人でも再現できるよう段階的に解説しており、Figma/Canvaに続くノーデザイナー向けAIツールとして注目度が急上昇している。

- **[AIエージェントが「最初から戦力になる」リポジトリ設計 — AGENTS.md・ディレクトリ構造・バリデーション戦略の実践ガイド](https://qiita.com/akira_papa_AI/items/0385b6d1468e6d564b50)** ([127users](https://b.hatena.ne.jp/entry/s/qiita.com/akira_papa_AI/items/0385b6d1468e6d564b50)) - 同じCursorを使っているのに生産性が10倍異なる原因はリポジトリ設計にあるという視点から、AGENTS.mdの書き方・ディレクトリ構造・AIが理解しやすいバリデーション戦略を体系的に解説。AIコーディングエージェントに「文脈を与える設計」というアプローチで、チーム全員の底上げを図る実践ガイド。

- **[RAGパイプラインを捨てて claude -p に Grep させたら3時間で社内ナレッジ Bot が動いた](https://zenn.dev/kok1eeeee/articles/knowledge-chatbot-agentic-search)** ([24users](https://b.hatena.ne.jp/entry/s/zenn.dev/kok1eeeee/articles/knowledge-chatbot-agentic-search)) - Embedding・ベクトルDB・Retrieval パイプラインをすべて廃棄し、`claude -p` にGrepをさせるだけで200ページ超のGoogle Sitesを検索・回答できる社内チャットボットを構築した実験記録。「RAGは複雑さを正当化できるか？」という問いに対して、シンプルなgrepベースのアジェンティック検索で十分なケースがあることを示している。

- **[Claude Code のスキルとして動作する日報自動生成ツールを作った](https://syu-m-5151.hatenablog.com/entry/2026/03/21/160442)** ([105users](https://b.hatena.ne.jp/entry/s/syu-m-5151.hatenablog.com/entry/2026/03/21/160442)) - SlackのDMやPR履歴などの散在する作業ログをClaude Codeが自動的に集約し、日報フォーマットで出力するスキルを実装した記事。定型業務をゼロ入力で完了させる「AI琥珀剤」的な使い方として、Claude Codeスキル開発の具体的実装例を提供している。

- **[【緊急】GitHub/npmを汚染する「見えないコード」の脅威：GlassWorm対策](https://qiita.com/sarubot/items/df077776b293163e0a42)** ([多数](https://b.hatena.ne.jp/entry/s/qiita.com/sarubot/items/df077776b293163e0a42)) - 2026年3月に発覚した「GlassWorm」と呼ばれるサプライチェーン攻撃で、GitHub・npm・VSCode拡張機能など400以上のリポジトリにUnicodeの不可視文字を使った悪意あるコードが埋め込まれた。コードレビューでは見えないが実行時に活性化する手法で、`git diff` や通常の検索をすり抜けるため、検出ツールと対策手順を詳説している。

## Zenn

- **[cmuxで変わるClaude Codeのマルチプロジェクト開発体験](https://zenn.dev/hummer/articles/cmux-ecosystem-claude-code)** - サブエージェントの動作が不透明でカレントディレクトリ依存のClaude Codeの弱点を、ターミナルマルチプレクサ「cmux」を軸にしたエコシステムで解決する記事。4つのリポジトリを組み合わせ、複数プロジェクトをまたいだ作業やサブエージェントの可視化を実現することで、Claude Codeをより本格的な開発ツールに育てる試みを紹介。

- **[DGX Sparkで色々なローカルLLMを動かした比較結果](https://zenn.dev/karaage0703/articles/fcca40c614dffd)** - NVIDIA DGX Spark（GB10・ARM64・128GB統合メモリ）で、Ollama・vLLM・SGLangの3つの推論エンジンを使い各種ローカルLLMを実行した比較レポート。最新のコンパクトなAI特化ハードウェアで動かせるモデルの種類と推論速度の実測値を示しており、オンプレミスLLM構築を検討する組織にとって参考になる実用的なデータ。

- **[仕様駆動開発スターターキットを公開しました](https://zenn.dev/sakamotchi8/articles/spec-driven-starter-introduction)** - 人間がコードを直接書くのではなく「仕様書を書く」だけでAIエージェントが実装する「仕様駆動開発（SDD）」のスターターキットを公開した記事。AGENTS.mdや構造化された仕様ファイルをリポジトリに配置するだけで、エージェントが仕様→テスト→実装の順で自律的に開発サイクルを回せる環境を整備する手法を解説している。

- **[AI生成文から「AIくささ」を取り除く技術と、Claude Codeスキルに組み込むまでの話](https://zenn.dev/m0370/articles/205c9340a418c3)** - WikipediaのAIクリーンアッププロジェクトが特定した「AIくさい」頻出語句（"pivotal"・"landscape"・"tapestry"など）のパターンを活用し、Claude Codeのスキルとして出力文の「AI臭」を自動除去する仕組みを実装した記事。プロンプトエンジニアリングではなく後処理フィルタとして機能させる設計思想が実用的。

- **[Ghostty 1.3が来たぞ](https://zenn.dev/kawarimidoll/articles/5382959edf38fc)** - Zig製の高性能ターミナルエミュレータ「Ghostty」のv1.3.0がリリース。新機能の詳細な解説記事で、高速なGPUレンダリングと豊富なカスタマイズ性が評価されているGhosttyが、また一歩成熟した。

## Qiita

- **[OpenCode vs Claude Code、ファイ！！ OSSコーディングエージェントの実力を検証してみた](https://qiita.com/miruky/items/293ad0d3bc4d0cc41b08)** - GitHubスター127K超を誇るOSSのコーディングエージェント「OpenCode」とClaude Codeを実際のタスクで比較検証した記事。「Claude Codeキラー」として注目を集めるOSSの実力を、同一タスクへの対応品質・操作感・費用の観点で評価しており、コーディングエージェント市場の競争激化を示す内容。

- **[「新人にAI禁止令を出した組織」が、どのくらい開発フローでAIを使っているか](https://qiita.com/WdknWdkn/items/22e6a3faea1bdcaefef3)** - 以前「新人へのAI禁止令」で話題になった著者が、現在どの程度AIを開発フローに組み込んでいるかの続報。ABEMA Primeでも取り上げられた問題提起から約1年後の実情を報告しており、「禁止」から「管理された活用」へのフロー変化を具体的なツール・プロセスとともに示している。

- **[APMだけでは守れない時代へ ― Runtime-native Observabilityとは何か、なぜ今なのか](https://qiita.com/keitah/items/dfa2b6a635468705d06c)** - 従来のAPMが「アプリケーション層」を観測するのに対し、Runtime-native Observabilityは「言語ランタイム層」を直接観測することで、ガベージコレクション・メモリアロケーション・スレッドコンテキストスイッチなど深いレイヤーの問題を検出できることを解説。クラウドネイティブ環境での複雑な性能問題に対応するための次世代可観測性手法を整理した記事。

- **[高校の文化祭で簡易POSを作って学んだ、「ITを入れれば効率化する」とは限らないという話](https://qiita.com/Towa_ONGRKL/items/ee5c69831501251a0ec0)** - たい焼き屋向けにSpreadsheet+Apps ScriptでPOSを作った高校生がリアルな現場で直面した「ITが逆に遅い」問題を赤裸々に語る記事。「現場のワークフローを理解せずにITを導入することの危険」を身をもって学んだ体験談で、業務改善に取り組むエンジニアが初心に立ち返るきっかけとなる良質なリフレクション。

## AWS 新着

- **[Amazon Bedrock AgentCore Runtime adds WebRTC support for real-time bidirectional streaming](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-webrtc/)** (Mar 21) - Bedrock AgentCore RuntimeがリアルタイムのWebRTC双方向ストリーミングに対応。既存のWebSocketに加えP2P・UDP ベースのトランスポートでブラウザ・モバイルアプリからの音声・映像ストリームをエージェントへ低遅延で送受信できるようになり、音声エージェントの実装が容易になる。

- **[Amazon EKS announces 99.99% SLA and new 8XL scaling tier for Provisioned Control Plane clusters](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-eks-announces-sla-8xl-scaling-tier/)** (Mar 21) - EKS Provisioned Control PlaneクラスターのSLAが99.99%に引き上げられ、新たに最大スケールの8XLティアも追加。大規模本番環境でのKubernetes運用に求められる可用性保証とスケーラビリティが強化され、エンタープライズ向けの信頼性が向上した。

- **[AWS adds support for NIXL with EFA to accelerate LLM inference at scale](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-support-nixl-with-efa/)** (Mar 20) - NVIDIA Inference Xfer Library（NIXL）がElastic Fabric Adapter（EFA）と統合され、EC2上での分散LLM推論のプリフィルとデコードを分離したdisaggregated推論が高速化。TrainiumベースのEC2インスタンスでの大規模LLM推論コスト削減と低遅延化に直結するアップデート。

- **[AWS Neuron Dynamic Resource Allocation support for Amazon EKS](https://aws.amazon.com/about-aws/whats-new/2026/03/neuron-eks-dra-support/)** (Mar 21) - AWS Neuron DRAドライバーがEKSに対応し、KubernetesネイティブのハードウェアアウェアスケジューリングがTrainiumインスタンスで利用可能に。ML推論ポッドへのNeuronコアを柔軟に割り当てられるようになり、EKS上でのML推論ワークロードの効率的なリソース管理が実現できる。

## Lobsters

- **[Thoughts on OpenAI acquiring Astral and uv/ruff/ty](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/)** - Pythonツールチェーンのデファクトスタンダードになりつつあるuv（パッケージマネージャ）・ruff（リンター）・ty（型チェッカー）を開発するAstralをOpenAIが買収することへの懸念を、Simon Willisonが整理した考察。OSSプロジェクトの重要なインフラをAI企業が掌握することのリスクと、Pythonエコシステムの独立性への影響が議論されている。

- **[Ubuntu 26.04 Ends 46 Years of Silent sudo Passwords](https://pbxscience.com/ubuntu-26-04-ends-46-years-silent-sudo-passwords/)** - Ubuntu 26.04 LTSではsudoコマンド実行時に入力したパスワードが「*」でマスク表示されるようになり、1980年以来続いてきた「パスワード入力が画面に一切表示されない」慣例が廃止される見通しを報告。初心者ユーザーの混乱を減らす目的だが、セキュリティ慣行への影響も議論されている。

- **[Security advisory for Cargo (CVE-2026-33056)](https://blog.rust-lang.org/2026/03/21/cve-2026-33056/)** - RustのパッケージマネージャCargoに関するセキュリティアドバイザリが公開（CVE-2026-33056）。Rustエコシステムを使う開発者は速やかにCargo・Rustツールチェーンを更新することが推奨されており、サプライチェーンセキュリティの観点でも重要なアップデート。

- **[The Three Pillars of JavaScript Bloat](https://43081j.com/2026/03/three-pillars-of-javascript-bloat)** - JavaScriptバンドルが肥大化する根本原因を「依存関係の重複」「ツリーシェイキング不全」「不適切な動的インポート」という3つの柱として分析した記事。AIが生成するコードがnpmパッケージを安易に追加しがちな現状を踏まえると、バンドルサイズ監視の重要性を改めて示す内容。

- **[SSH certificates and git signing](https://codon.org.uk/~mjg59/blog/p/ssh-certificates-and-git-signing/)** - SSHの証明書機能とgitのコミット署名を組み合わせて、組織のCA（認証局）から発行したSSH証明書でgitコミットに署名する方法を解説。GPG署名の代替として管理コストを下げながらコミットの真正性を保証する実用的なアプローチで、DevSecOpsの観点から注目される。

## dev.to

- **[Introducing a New Go PDF Library: Fast, Lightweight, and CJK-Friendly](https://dev.to/viklogix/introducing-a-new-go-pdf-library-fast-lightweight-and-cjk-friendly-solution-for-pdf-generation-cgc)** - Go向けの新しいPDFライブラリ「gpdf」を紹介。Chromiumベースの解決策（バイナリ300MB超）に依存せず標準ライブラリのみでPDFを直接生成することで10〜30倍の高速化を達成し、日本語・中国語・韓国語などCJKテキストのフォント埋め込みにも正式対応。グローバル展開するGoアプリのPDF生成ユースケースで有力な選択肢となりうる。

- **[SOC 2 Compliant AI Platform: What the Certification Misses About AI Security](https://dev.to/jaipalsingh/soc-2-compliant-ai-platform-what-the-certification-misses-about-ai-security-39n6)** - 2023年のSamsungエンジニアがChatGPTに機密コードを入力した事件を軸に、SOC 2認証がAI固有のリスク（学習データへの吸収・推論ログの保持・マルチテナントGPUでの側チャネル攻撃）をカバーしていない問題を体系的に分析。「SOC 2はAIプラットフォーム評価のスタートラインにすぎない」という結論で、企業がAIベンダーを評価する際の追加チェックリストを提示している。

## TechCrunch

- **[Are AI tokens the new signing bonus or just a cost of doing business?](https://techcrunch.com/2026/03/21/are-ai-tokens-the-new-signing-bonus-or-just-a-cost-of-doing-business/)** - 一部のテック企業がClaude・GPT・Geminiなどへのアクセストークンを採用条件やオファーレターに盛り込む動きが出ており、「AIトークン＝新たな採用シグナリングボーナス」という見方を分析。開発者の生産性向上が数値化されるにつれ、AI利用コストの「給与への組み込み」が議論されるようになった現象を報告している。

- **[New court filing reveals Pentagon told Anthropic the two sides were nearly aligned](https://techcrunch.com/2026/03/20/new-court-filing-reveals-pentagon-told-anthropic-the-two-sides-were-nearly-aligned-a-week-after-trump-declared-the-relationship-kaput/)** - トランプ政権が国家安全保障リスクを理由にAnthropicとの関係破棄を宣言した1週間後に、国防総省は「両者はほぼ合意に達していた」と伝えていたことが法廷文書で判明。Anthropicが提出した宣誓供述書は「技術的誤解に基づく国家安全保障の主張」として反論しており、AI企業の政府調達をめぐる政治的な複雑さを示す事例として注目されている。

- **[Publisher pulls horror novel 'Shy Girl' over AI concerns](https://techcrunch.com/2026/03/21/publisher-pulls-horror-novel-shy-girl-over-ai-concerns/)** - 自己出版でSNS発の人気を博したホラー小説「Shy Girl」について、NYTの調査でAI生成テキストが大部分を占めている可能性が示唆され、出版社Hachette Book GroupがUK市場での発売を取り止め・米国展開も中止。著者は否定しているが、書籍出版業界でのAI検出・契約基準整備の議論に火が付いている。

- **[Microsoft rolls back some of its Copilot AI bloat on Windows](https://techcrunch.com/2026/03/20/microsoft-rolls-back-some-of-its-copilot-ai-bloat-on-windows/)** - MicrosoftがWindowsのPhotos・Widgets・Notepad等のアプリから一部のCopilotエントリーポイントを削減。品質向上へのコミットメントを繰り返し表明しつつも、ユーザーからの批判が続くAI機能の過剰統合を部分的に巻き戻す姿勢を見せた。

## Ars Technica

- **[Widely used Trivy scanner compromised in ongoing supply-chain attack](https://arstechnica.com/security/2026/03/widely-used-trivy-scanner-compromised-in-ongoing-supply-chain-attack/)** - GitHubスター33,200を誇るコンテナ脆弱性スキャナー「Trivy」のほぼ全バージョンがサプライチェーン攻撃で侵害された。攻撃者は窃取した認証情報でforce pushを実行し、trivy-actionのタグが悪意ある依存関係を参照するよう書き換えた。CIパイプラインでTrivyを使用している組織はシークレットのローテーションが急務とされており、GlassWorm問題とともにサプライチェーンセキュリティへの警鐘が鳴らされている。

- **[Microsoft keeps insisting that it's deeply committed to the quality of Windows 11](https://arstechnica.com/gadgets/2026/03/microsoft-keeps-insisting-that-its-deeply-committed-to-the-quality-of-windows-11/)** - WindowsチームのVP Pavan Davuluriが「Windows品質へのコミット」を今年に入ってから何度も公言している状況を、「料理人が何度も料理の品質を叫ぶレストラン」に喩えて批評。Copilotの過剰な統合・バグ・広告の多さへの不満を抱えるユーザーに対し、「不要なCopilotエントリーポイントを削減」を行動項目に掲げる公式ブログ記事の内容を分析している。

## 注目トピック

今週最も際立ったテーマは**サプライチェーンセキュリティの同時多発的な脅威**だ。Trivyスキャナーの侵害（force pushによるCI/CDパイプラインへの悪意ある依存関係注入）、GlassWorm（Unicodeの不可視文字を使ったGitHub/npm汚染）、そしてCargoのCVEが相次いで明るみに出た。Trivyは「脆弱性を見つけるためのツール自体が攻撃された」という皮肉な事態で、セキュリティツールの真正性検証という新たな課題を浮き彫りにしている。QiitaのGlassWorm記事が示すように「見えないコード」の脅威は既存のコードレビューやgit diffでは防ぎきれず、Unicode制御文字の検出ツール導入が現実的な対策として急務となっている。

もう一つの大きな流れは**AIツールのエコシステム統合・独占への懸念**だ。OpenAIによるAstral（uv/ruff/ty）の買収は、Pythonの開発ツールチェーンがAI企業の傘下に入ることへの危機感をコミュニティに与えている。一方で日本の開発者コミュニティではClaude Codeの活用がより高度化・構造化されており、「AGENTS.mdによるリポジトリ設計」「cmuxによるマルチプロジェクト管理」「仕様駆動開発」など、エージェントが安定して動ける環境設計（ハーネスエンジニアリング）の実践が広がりを見せている。AIコーディングエージェントはプロンプトを書く段階から「エージェントが自律稼働できる構造を設計する」段階へと確実に移行しつつある。
