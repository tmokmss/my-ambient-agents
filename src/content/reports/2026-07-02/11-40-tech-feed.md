---
title: "Tech Feed ダイジェスト（2026年7月2日）"
date: "2026-07-02T11:40"
category: "summary"
summary: "AIミルグラム実験・Claude Fable5復活・Astro 7.0・EU-US データ移転最高裁判断・Venice AIやHonda等AIマネー多様化など"
tags: ["ai", "llm", "security", "aws", "cloud", "privacy", "devops", "agents"]
---

## はてなブックマーク (テクノロジー)

- **[Getting started with loops | Claude by Anthropic](https://claude.com/blog/getting-started-with-loops)** ([197users](https://b.hatena.ne.jp/entry/s/claude.com/blog/getting-started-with-loops)) - Anthropic公式ブログによる、Claude Codeで繰り返しタスクを「ループ」として扱う機能の使い方ガイド。定期実行やポーリングのような反復作業をエージェントに安全に任せる際の設計指針が示されている。
- **[AIに「相手に電気ショックを与えろ」と命じ続けたらボタンを押すのか？　11のLLMで“ミルグラム実験”](https://www.itmedia.co.jp/news/articles/2607/02/news029.html)** ([114users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/02/news029.html)) - 11種類のLLMに対し権威者を装って有害な指示を出し続け、どこまで従うかを検証した心理学実験の再現記事。モデルによって指示への抵抗・拒否の傾向が大きく異なることが示されている。
- **[Claude Mythos／Fableで学習したとする無検閲AI「Qwythos-9B」GGUF版が登場...（生成AIウィークリー）](https://www.techno-edge.net/article/2026/07/02/5247.html)** ([41users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/07/02/5247.html)) - 有力モデルの出力で学習したとする無検閲AIモデルの公開や、商用利用可能な画像生成AI「Krea 2」など、直近1週間の生成AIリリースをまとめた記事。有名モデルの派生・蒸留モデルが野良で急速に広がる実態が伺える。
- **[DNSログをClaudeに読ませたら、洗濯機が72秒おきに東京のサーバーへ通信していることがわかった](https://techfeed.io/entries/6a444a9071759f74d1a07f7b)** ([18users](https://b.hatena.ne.jp/entry/s/techfeed.io/entries/6a444a9071759f74d1a07f7b)) - 自宅のDNSログをClaudeに解析させたところ、スマート洗濯機が短間隔で外部サーバーと通信していることが判明したという調査記録。IoT機器の不透明な通信実態をLLMによるログ解析で可視化する実践例。
- **[静的サイトジェネレータ「Astro 7.0」正式リリース、ビルドシステムがVite 8/Rolldownに、Rust製コンパイラ採用で高速化](https://www.publickey1.jp/blog/26/astro_70vite_8rolldownrust.html)** ([11users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/astro_70vite_8rolldownrust.html)) - Astroのメジャーバージョン7.0がリリースされ、ビルドシステムがVite 8/Rolldownに刷新、Rust製コンパイラの採用でビルド速度が大幅に向上した。本サイト自体もAstro製であり、今後のアップグレード検討材料になる。

## Zenn

- **[Claude Fable 5が帰ってきたので情報を整理した](https://zenn.dev/acntechjp/articles/498c1dc866af19)** - 公開からわずか3日で利用停止となっていたClaude Fable 5が7月1日に復活した経緯を整理した記事。輸出規制解除のニュースとも連動しており、モデルの可用性が政策判断に左右される現状を実務目線で伝えている。
- **[「命名品質特性」── 名前の良し悪しを16の性質と8つの効果で評価する](https://zenn.dev/kagan/articles/naming-quality-characteristics)** - 「良い命名」を感覚論で終わらせず、16の性質と8つの効果に分解して体系的に評価するフレームワークを提案した記事。命名という属人化しがちな領域をソフトウェア品質特性の考え方で整理し直している。
- **[影響のあるアプリだけVRTを実行するようにして、CircleCIのクレジットを削減した](https://zenn.dev/socialplus/articles/9368594bc4ce7c)** - CircleCIのコスト増を機に消費内訳を調査し、変更の影響があるアプリのみVRT(ビジュアルリグレッションテスト)を実行するよう絞り込んだ実践記録。Storybookビルドやスクリーンショット撮影がコストの大半を占めていた具体的な内訳が参考になる。
- **[Web 標準動向 2026年6月版](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202606)** - W3Cメンバーであるサイボウズのフロントエンドチームによる、2026年6月のWeb標準化動向まとめ。新しいCSS/JS仕様やブラウザAPIの提案状況を定点観測しており、標準化プロセスの流れを追いたい開発者に有用な連載記事。
- **[（2）中学生が作っている自作OS、mochiOS - ケーパビリティなどのお話](https://zenn.dev/nekogakure/articles/60ca06b71029a2)** - 中学3年生が趣味で開発しているOS「mochiOS」の、ケーパビリティベースのセキュリティモデルを解説した連載記事。既存OSがあるのに一から作る挑戦そのものが、低レイヤー学習の実践例として読み応えがある。

## Qiita

- **[RailsとDBインデックス 〜なぜ index があると速いのか〜](https://qiita.com/akachiryo/items/5299101bce85b5970776)** - RDBのインデックスがなぜ検索を高速化するのかを、B-treeの構造やRailsのクエリ発行と絡めて基礎から解説した記事。「なんとなく貼っている」インデックスの効果を実行計画レベルで理解し直したい人向け。
- **[動的グローバルIPでもセルフホストを守る ― JenkinsでCloudflare WAFの許可リストを自動追従させる](https://qiita.com/jqit-yukiono/items/a98eebcad49029304b4e)** - 固定IPを持たない自宅セルフホスト環境で、動的に変わるグローバルIPをJenkinsで定期検知しCloudflare WAFの許可リストへ自動反映する仕組みを構築した記事。個人インフラのセキュリティ運用を自動化する工夫が示されている。
- **[「VPC内通信もTLSにすべき？」と聞かれて ── そもそもAWS内で盗聴できるのか脅威モデルで確かめた話](https://qiita.com/ntaka329/items/de23144fdf7305a2e0c1)** - 「VPC内の通信は暗号化不要か」という疑問に対し、実際に盗聴が可能かどうかを脅威モデリングの手法で検証した記事。思い込みで判断せず攻撃面を具体的に洗い出すセキュリティ設計の考え方が学べる。
- **[【ハンズオン】AgentCore最新機能でRAG & AIエージェント構築に入門！](https://qiita.com/minorun365/items/7d06434cf830df9c54ff)** - Amazon Bedrock AgentCoreの最新機能を使い、RAGパイプラインと自律型AIエージェントを実際に構築するハンズオン記事。マネージドのエージェント基盤を使う際の具体的なセットアップ手順とハマりどころが手を動かしながら学べる。
- **[君たちはどう Fable のか ~ 公式ドキュメントによる Claude Fable 5 の使い方の本質](https://qiita.com/tomoki-miso/items/36e5893e4d235625de44)** - 復活したClaude Fable 5の公式ドキュメントを読み込み、その使い所や設計思想を改めて整理した記事。輸出規制解除に伴うリリース再開のタイミングで、Fableというモデルの立ち位置を実務者視点から捉え直している。

## AWS 新着

- **[AWS CloudFormation and CDK accelerate development feedback loops with pre-deployment validation on all stack operations](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cloudformation/)** (2026-06-30) - CloudFormationとCDKに、スタック操作全般でデプロイ前検証を即座に返す機能が追加された。実際にリソースをプロビジョニングする前にエラーを検知できるようになり、インフラのデプロイ・修正サイクルを大きく短縮する。
- **[Amazon CloudWatch supports creating alarms from log queries](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-log-alarms/)** (2026-07-01) - CloudWatchでログクエリの結果から直接アラームを作成できるようになった。ログ分析画面を離れることなく異常検知の仕組みを組み込めるようになり、オブザーバビリティ運用の設定コストが下がる。
- **[AWS Artifact now includes Assurance Assistant for compliance inquiries](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-artifact-assurance-assistant/)** (2026-07-01) - コンプライアンス文書を管理するAWS Artifactに、引用付き回答を生成するAIアシスタント「Assurance Assistant」が追加された。監査対応でのセキュリティ・コンプライアンス質問への回答作業を、根拠を示しながら効率化できる。
- **[Amazon MSK now offers AI Agent Skills to help developers operate MSK efficiently and accelerate migrations to MSK](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-msk-ai-agent-skills)** (2026-06-22) - マネージドKafkaサービスAmazon MSK向けに、AIコーディングアシスタントへ運用ノウハウを提供する「AI Agent Skills」が追加された。クラスタ運用や移行作業をAIエージェントに相談しながら進められる、専門知識のエージェント組み込み例。
- **[Amazon GuardDuty AI-powered investigations accelerate threat response (Preview)](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-guardduty/)** (2026-06-23) - Amazon GuardDutyにAIによる自動調査機能がプレビュー追加され、検知結果とアカウント情報を自動分析して脅威対応を加速する。セキュリティアナリストが行っていた初動調査の一部をAIが肩代わりする方向性を示している。

## Lobsters

- **[US Supreme Court just blew up EU-US Data Transfers](https://noyb.eu/en/us-supreme-court-just-blew-eu-us-data-transfers)** (142pt) - 米最高裁がEU-米国間データ移転の枠組みに関わる判断を下し、既存の適法性の前提を覆したと報じる記事。GDPR対応で同枠組みに依存してきた米国企業のデータ処理体制に、実務上大きな見直しを迫る可能性がある。
- **[All Package Management Functionality Moved from Compiler to Build System](https://ziglang.org/devlog/2026/?2026-06-30#2026-06-30)** (66pt) - Zig言語がパッケージ管理機能をコンパイラ本体からビルドシステム側へ完全に移管した開発ログ。コンパイラの責務を軽量に保ちつつパッケージ解決ロジックをビルドシステムに集約する設計判断の背景が語られている。
- **[Uruky - The Paid European Search Engine](https://robheghan.prose.sh/26_06_30_uruky)** (41pt) - 広告に依存せず利用料で運営される欧州発の検索エンジン「Uruky」を紹介した記事。GoogleやBingに依存しない検索インフラの選択肢として、収益モデルとインデックス構築の現実的な難しさを論じている。
- **[Progress Report: Linux 7.1 - Asahi Linux](https://asahilinux.org/2026/06/progress-report-7-1/)** (40pt) - Apple Silicon Mac向けLinuxディストリビューション「Asahi Linux」の最新進捗レポート。GPU/電源管理まわりのドライバ改善など、非公式ながら着実に完成度を高めているアップストリーム化の取り組みが共有されている。
- **[Changes to Godot Engine Contribution Policies](https://godotengine.org/article/contribution-policy-2026/)** (40pt) - オープンソースゲームエンジンGodotが、コントリビューションの受け入れ方針を改定したと発表した記事。急増するコントリビューターやAI生成コードの提出にどう向き合うか、OSSプロジェクトのガバナンス面での対応が読み取れる。

## dev.to

- **[Your AI coding agent gets expensive one reasonable decision at a time](https://dev.to/nazarii-ahapevych/your-ai-coding-agent-gets-expensive-one-reasonable-decision-at-a-time-735)** - AIコーディングエージェントの利用料金が、個々には妥当に見える判断の積み重ねでいつの間にか高額化していく仕組みを、実際の請求額の推移とともに解説した記事。無駄なコンテキスト肥大化がコストに直結する具体例が示されている。
- **[code-review-graph vs Graphify vs codebase-memory-mcp: The Best Code Intelligence MCP Tools for AI Coding Agents](https://dev.to/coder11/code-review-graph-vs-graphify-vs-codebase-memory-mcp-the-best-code-intelligence-mcp-tools-for-ai-3ea)** - Claude CodeやCursor、Codexとのペア作業で中〜大規模リポジトリを扱う際に有効な、コードベース理解を助けるMCPサーバー3種を比較した記事。コード構造をグラフ化してエージェントに渡すアプローチの違いが整理されている。
- **[Exactly-Once by Default: How Durable Execution Changed the Way I Build Automations](https://dev.to/achiya-automation/exactly-once-by-default-how-durable-execution-changed-the-way-i-build-automations-2gbm)** - ノーコード自動化基盤から34本のワークフローをTypeScriptに書き直した経験を踏まえ、Durable Execution(耐久実行)が「確実に1回だけ実行される」保証をどう実現するかを解説した記事。分散処理の冪等性設計の実践例。
- **[SOC 2 CC7.1: What Auditors Actually Ask For in Vulnerability Management](https://dev.to/patchvex/soc-2-cc71-what-auditors-actually-ask-for-in-vulnerability-management-15lg)** - SOC 2 Type II監査で脆弱性管理に関して実際に求められる証跡は何かを、監査人視点で具体的に解説した記事。要求事項に沿った準備の勘所を実務者向けに示している。
- **[Building Docker Containers with Persistent Storage](https://dev.to/highbee/building-docker-containers-with-persistent-storage-p1d)** - コンテナを削除するとデータが消えるという初心者がよく驚く挙動を起点に、ボリュームを使った永続化ストレージの設計方法を解説した入門記事。Webアプリやデータベースを安全にコンテナ化する基礎がまとまっている。

## TechCrunch

- **[Indian tech tycoon bets $30M of his own money to build AI alternative to Microsoft Office](https://techcrunch.com/2026/07/01/indian-tech-tycoon-bets-30m-to-build-an-ai-alternative-to-microsoft-office/)** - インドの起業家Bhavin Turakhia氏が自己資金3000万ドルを投じ、AIを組み込んだMicrosoft Office・Google Apps対抗の生産性スイート「Neo」を開発している。既存オフィスソフト市場にAIネイティブな挑戦者を送り込む動きだ。
- **[Even Honda is pivoting to data centers](https://techcrunch.com/2026/07/01/even-honda-is-pivoting-to-data-centers/)** - 自動車メーカーのHondaが、データセンター向けバッテリー製造に乗り出したと報じられた。AIデータセンターの急拡大が電力・蓄電インフラ需要を自動車産業にまで波及させている実例だ。
- **[Venice AI becomes a unicorn with $65M Series A as its privacy-first AI platform takes off](https://techcrunch.com/2026/07/01/venice-ai-becomes-a-unicorn-with-65m-series-a-as-its-privacy-first-ai-platform-takes-off/)** - プライバシー重視を掲げるAIプラットフォーム「Venice AI」が6500万ドルのシリーズAを調達しユニコーン入りした。年間経常収益7000万ドル超で既に黒字だといい、データ収集を前提としない代替AIサービスへの需要が収益として表れている。
- **[SpaceX has an AI device prototype, and it sure sounds phone-ish](https://techcrunch.com/2026/07/01/spacex-has-an-ai-device-prototype-and-it-sure-sounds-phone-ish/)** - SpaceXが投資家向けに「ハンドセットのような」AIデバイスの試作機を見せていたと報じられた。衛星通信とAIデバイスを組み合わせた新たなハードウェア展開への参入を示唆する動きだ。
- **[Meta, like SpaceX, looks to turn excess AI compute into cash](https://techcrunch.com/2026/07/01/meta-like-spacex-looks-to-turn-excess-ai-compute-into-cash/)** - Metaが余剰のAI計算資源をクラウドサービスとして外部提供する事業を計画していると報じられた。SNS企業から大手クラウド事業者と競合するインフラ提供者へと変貌しつつあり、AI計算資源そのものが収益源化する潮流を象徴する。

## Ars Technica

- **[Sony announces end of PlayStation discs, parts of digital store in the same day](https://arstechnica.com/gaming/2026/07/sony-will-stop-making-physical-copies-of-playstation-games-in-2028/)** - Sonyが2028年までにPlayStation向け物理ディスク生産を終了すると発表し、同日にデジタルストアの一部機能終了も明らかにした。ゲームの「所有」から「アクセス権」への移行が進む中、購入コンテンツへのアクセス保証が改めて問われている。
- **[NASA inspector general suggests Boeing's Starliner will now be a decade late](https://arstechnica.com/space/2026/07/nasa-inspector-general-suggests-boeings-starliner-will-now-be-a-decade-late/)** - NASA監察官が、BoeingのStarliner宇宙船の認証取得が当初計画から10年遅れの2027年にずれ込む可能性を指摘した。大型商業宇宙開発プロジェクトの遅延が常態化している現状を象徴する報告だ。
- **[A good little EV you won't be able to buy soon: The Volvo EX30 Cross Country](https://arstechnica.com/cars/2026/07/the-volvo-ex30-cross-country-review-a-victim-of-geopolitics/)** - 高評価のコンパクトEV「Volvo EX30 Cross Country」が、対中関税や地政学的規制の影響で米国市場から実質的に締め出される見込みだとするレビュー記事。技術的完成度と市場政策が切り離せない自動車業界の現実を伝えている。
- **[A space history mystery: What happened to the Viking arm used 50 years ago?](https://arstechnica.com/space/2026/07/50-years-on-will-the-mars-lander-arm-that-opened-the-air-and-space-raise-its-hand/)** - 50年前の火星探査機Vikingで使われたロボットアームの行方を追う調査記事。当時の技術資産がどう保管・展示され、あるいは失われたのかを辿り、宇宙開発の記録管理という地味だが重要な課題を浮き彫りにしている。

## 注目トピック

今日目立つのは、AIマネーの流入先がモデル企業だけでなく多方面に広がっている点だ。インドの起業家がAI搭載オフィススイートに自己資金3000万ドルを投じ、プライバシー重視の「Venice AI」が6500万ドル調達で黒字ユニコーン入りする一方、Meta・SpaceXは余剰のAI計算資源そのものを外部提供する事業へと動き出した。さらに自動車メーカーのHondaがデータセンター向けバッテリー製造に乗り出すなど、AIインフラの電力・計算資源需要が本業とは無縁だった業界にまで波及している。かつては「モデルをどう賢くするか」で語られていたAI競争が、いまや「AIが生み出す需要をどう収益化するか」という周辺ビジネスの奪い合いへと重心を移しつつある。

もう一つの軸は、AIをどう検証し統制すべきかという問いの継続だ。はてなブックマークでは11のLLMに服従圧力をかける“ミルグラム実験”が114usersを集め、有力モデルの出力を学習したとする無検閲AI「Qwythos-9B」の野良拡散も報告された。一方でAWSはGuardDutyのAI自動調査やArtifact Assurance Assistantなど、AIを使ってAI自身やコンプライアンスを監視する機能を相次いで投入している。加えて米最高裁がEU-US間データ移転の枠組みを覆す判断を下したことは、越境データ処理を前提に成長してきたAIサービスのガバナンスにも今後波及しうる火種として注目される。
