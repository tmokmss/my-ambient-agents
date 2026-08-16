---
title: "Tech Feed ダイジェスト（2026年7月11日）"
date: "2026-07-11T10:24"
category: "summary"
summary: "AI時代のスキル劣化論・Postgres完全Rust移植・AGENTS.md最適解の330実験検証・EU対MetaのUX規制など"
tags: ["ai", "agent", "aws", "security", "rust", "database"]
---

## はてなブックマーク (テクノロジー)

- **[「AIデスキリング」が始まった…生産性向上の影で、AIは人間の思考とスキルを静かにむしばんでいる](https://www.businessinsider.jp/article/2606-ai-deskilling-impact-on-worker-skills-productivity/)** ([190users](https://b.hatena.ne.jp/entry/s/www.businessinsider.jp/article/2606-ai-deskilling-impact-on-worker-skills-productivity/)) - AIツールへの依存が進むほど、コードを書く・問題を分解するといった基礎的な思考プロセスが人間側から失われていく「デスキリング」現象を扱った記事。生産性指標には表れにくい能力低下のリスクに警鐘を鳴らしている。
- **[【無料】 ObsidianはAIの記憶保管には向いていない｜松濤Vimmer](https://note.com/shotovim/n/n40164f5b555c)** ([171users](https://b.hatena.ne.jp/entry/s/note.com/shotovim/n/n40164f5b555c)) - メモアプリObsidianをAIエージェントの長期記憶保管先として使う運用を試した結果、ファイル粒度や検索性の面で不向きだったとする記事。AIの記憶をどこに永続化すべきかという設計論点を具体的な失敗経験から論じている。
- **[Claude Codeとハーネスについて考えてみる](https://speakerdeck.com/oikon48/claude-codetohanesunituitekao-etemiru)** ([134users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/oikon48/claude-codetohanesunituitekao-etemiru)) - Claude Codeのようなコーディングエージェントを業務で安定運用するために必要な「ハーネス」（実行環境・検証・フィードバックループ）の設計思想を整理した発表資料。エージェント任せにしすぎず、周辺の仕組みづくりが成果を左右する点を論じている。
- **[AI 2040: Plan A](https://ai-2040.com/)** ([97users](https://b.hatena.ne.jp/entry/s/ai-2040.com/)) - 2040年に向けたAI技術の発展シナリオを描いた考察サイト。楽観的な「Plan A」の道筋を軸に、社会・経済へのAIの浸透がどのような段階を踏むかを整理している。
- **["Windows"PCにサードパーティー製ウイルス対策ソフトはまだ必要か](https://japan.zdnet.com/article/35250124/)** ([61users](https://b.hatena.ne.jp/entry/s/japan.zdnet.com/article/35250124/)) - Windows Defenderの標準機能が強化された現在でも、サードパーティ製のウイルス対策ソフトを追加導入する必要があるかを検証した記事。標準セキュリティ機能の到達点と、依然として残る補完領域を具体的に整理している。

## Zenn

- **[2026年7月時点で分かっているDuckDB v2の新機能](https://zenn.dev/yutannihilation/articles/779cbe9909a637)** - 今秋リリース予定のDuckDB v2について、直近のDuckCon #7で予告された新機能を紹介した記事。分析用インメモリDBの進化の方向性を早期に押さえておきたい開発者向けの速報的まとめ。
- **[CodexのdefaultをGPT-5.6 Terraにした理由：GPT-5.5/5.4との比較](https://zenn.dev/hjpotter1/articles/59622ac112d0a7)** - Codexの利用枠を効率よく使うため、GPT-5.5・5.4と比較しながらデフォルトモデルをGPT-5.6 Terraに切り替えた判断理由を紹介した記事。週次利用枠の消費ペースというコスト面から実務的にモデルを選定している。
- **[DGX Spark (GB10) でローカルLLMを7本ベンチマークした【2026年7月】](https://zenn.dev/phpmyadmin/articles/f243076e9ec1fe)** - NVIDIA DGX Spark（ユニファイドメモリ128GB）を使い、最新のオープンウェイトLLM7本を実際にベンチマークした記事。「128GBでどこまで動くか」という実用的な指標をローカルLLM運用者向けに提供している。
- **[Loop Engineeringで失敗しないためのハーネス設計](https://zenn.dev/kamo78/articles/kaji-guarded-loop-engineering)** - AIコーディングエージェントが「動きました」「全テストパス」と報告しながら実際には何も完了していない、という典型的な失敗パターンに対し、それを検知・防止するハーネス設計のアプローチを論じた記事。
- **[Claude Codeに「昨日の続き」を思い出させるローカル知識ベースCLI「lk」を作った](https://zenn.dev/syarihu/articles/a811f2d2d9f149)** - Claude Codeのセッションが変わるたびに前回読み解いたモジュールを最初から読み直してしまう問題を解消するため、ローカルに知識ベースを持たせるCLIツール「lk」を自作した記事。エージェントの記憶の永続化という課題への具体的な実装例。

## Qiita

- **[AGENTS.mdには何を書くべき？その2 〜4モデル×330実験で検証〜](https://qiita.com/rummy_p/items/b5cf4c9c40268cf75c4a)** - AIコーディングエージェント向けの指示ファイル「AGENTS.md」に何を書くと効果的かを、4種類のモデルに対し330回の実験を行って定量的に検証した記事。感覚論になりがちなプロンプト設計を、データに基づいて裏付けている。
- **[AWS MCP Serverが普通に使えるようになったよ！](https://qiita.com/moritalous/items/6102ef63dc60c7e6ee3d)** - AWS MCP ServerがOAuth対応などを経て実用的に使えるようになった状況を、実際の接続手順を交えて紹介した記事。AIエージェントからAWSリソースを扱う際の最新のセットアップ方法を確認できる。
- **[GPUだけでLLMを動かす必要はない](https://qiita.com/DanielOkada/items/8d25b244be168cbc0d6b)** - LLM推論というとGPU一択と思われがちな中で、CPUやオフロードを組み合わせた構成でも実用的に動かせるという主張を具体的な構成例とともに紹介した記事。
- **[Copilot Studio の自律型エージェントの作成方法を整理してみた](https://qiita.com/Takashi_Masumori/items/4ed4994f8641e5a9e58e)** - Microsoft Copilot Studioで自律的に動作するAIエージェントを構築する手順を整理した記事。ノーコード寄りのプラットフォームでのエージェント構築フローを具体的に示している。
- **[LM StudioでローカルLLM環境を構築してみた](https://qiita.com/Hinata-H/items/00542a07b227f79635f5)** - デスクトップアプリ「LM Studio」を使ってローカルLLM環境を構築する手順を紹介した記事。クラウドAPIに頼らずローカルでLLMを試したい開発者向けの入門的な内容。

## AWS 新着

- **[AWS DMS Schema Conversion now supports offline SQL Server conversion](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-dms-schema-conversion-offline-source/)** (2026-07-10) - AWS DMS Schema Conversionが、稼働中のSQL Serverに接続せずオフラインでスキーマ変換を行えるようになった。本番DBへの接続要件を減らし、移行計画の初期段階でスキーマ分析を進めやすくしている。
- **[Amazon Location Service enhances Places APIs with new address and search options](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-location-service-enhanced-address-search)** (2026-07-10) - Amazon Location ServiceのPlaces APIが、住所表記の形式指定や複数条件検索など新しいオプションに対応した。位置情報を扱うアプリでの住所処理の柔軟性が広がる。
- **[AWS Organizations now applies account departure security controls by default for new organizations](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-organizations-security-controls-new-orgs-console/)** (2026-07-10) - AWS Organizationsで新規作成した組織に対し、アカウントが組織を離脱する際のセキュリティ制御がデフォルトで適用されるようになった。設定漏れによる離脱時のリスクを構成の出発点から抑える狙いがある。
- **[Amazon EC2 now supports using an EBS volume for Replace Root Volume](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ec2-replace-root-volume-ebs-volume/)** (2026-07-09) - EC2インスタンスのルートボリュームを、稼働中のインスタンスを止めずに既存のEBSボリュームへ置き換えられるようになった。障害復旧や検証済みイメージへの切り戻しを、より柔軟に行える。
- **[AWS Builder Center Now Offers Free Sandbox Environments](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-builder-center-sandbox/)** (2026-07-08) - AWS Builder Centerが、対象のワークショップから直接リクエストできる無料の期間限定サンドボックス環境を提供開始した。個人のAWSアカウントを用意せずに学習・検証を始められる。

## Lobsters

- **[You paid me, a long-time Linux user, to use Windows 11 exclusively for a month: here's how it went](https://www.osnews.com/story/145459/you-paid-me-a-long-time-linux-user-to-use-windows-11-exclusively-for-a-month-heres-how-it-went/)** (136pt) - 長年のLinuxユーザーが報酬を受けて1ヶ月間Windows 11だけを使い続けた体験記。慣れたワークフローが通用しない場面と、逆に見直されたWindows側の使い勝手の両方が具体的に語られている。
- **[An update on the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)** (35pt) - AIクローラーによる過剰なスクレイピングがOSSプロジェクトのインフラに負荷をかけている問題について、対策の進展状況を追ったLWNの続報記事。Anubisなどの防御ツールの導入状況や課題が扱われている。
- **[Postgres rewritten in Rust, now passing 100% of the Postgres regression tests](https://github.com/malisper/pgrust)** (22pt) - PostgreSQLをRustで書き直すプロジェクト「pgrust」が、PostgreSQL本家のリグレッションテストを100%通過する水準に到達したと報告している。メモリ安全な言語への基幹DBエンジン移植が、実用段階に近づきつつある事例。
- **[I tried NetBSD as a desktop, and it felt like stepping into the '90s in a good way](https://www.howtogeek.com/i-tried-netbsd-as-a-desktop-and-it-felt-like-stepping-into-the-90s-in-a-good-way/)** (13pt) - NetBSDをデスクトップ用途で試したレビュー記事。最新のLinuxディストリビューションとは異なる、90年代的なシンプルさが好意的に評価されている。
- **[What Every Python Developer Should Know About the CPython ABI](https://labs.quansight.org/blog/python-abi-abi3t)** (7pt) - CPythonのABI（バイナリインターフェース）の仕組みと、拡張モジュール開発者が安定ABI（abi3）を使う際に注意すべき点を解説した記事。C拡張を書く開発者向けの実践的なリファレンス。

## dev.to

- **[Claude Code's Mid-Year AI Boost: Enhanced Workflows and New Features](https://dev.to/davekurian/claude-codes-mid-year-ai-boost-enhanced-workflows-and-new-features-1e21)** - Claude Codeの2026年中期アップデートを振り返り、アプリ内ブラウザやSonnet 5モデルの統合など、モデルの入れ替わりの裏で積み上がってきた恒常的な機能層に焦点を当てた記事。
- **[Pipeline, Flow, or Chain? Picking the Right Tool to Wire LLM Calls Together](https://dev.to/phimage/pipeline-flow-or-chain-picking-the-right-tool-to-wire-llm-calls-together-46k5)** - 複数のLLM呼び出しを連携させる際に「パイプライン」「フロー」「チェーン」のどの設計パターンを選ぶべきかを、それぞれの向き不向きとともに整理した記事。LLMアプリの構成設計に迷う開発者向けの判断材料を提供している。
- **[The Architecture of On-Chain AI Agent Execution: Beyond Smart Contracts](https://dev.to/claudia-ve/the-architecture-of-on-chain-ai-agent-execution-beyond-smart-contracts-4jlj)** - オンチェーンで動くAIエージェントを、単にスマートコントラクトにAPI呼び出しを付け足すだけでなく、どのようなアーキテクチャで実行すべきかを論じた記事。ブロックチェーンとAIエージェントの接続点を扱っている。
- **[CSP Builder: a small tool that solves a specific problem](https://dev.to/mryesiller/csp-builder-a-small-tool-that-solves-a-specific-problem-55ld)** - 仕様が読みにくいContent Security Policy（CSP）の設定を、XSS対策のためにわかりやすく組み立てられる小さなツールを自作した記事。セキュリティ設定のとっつきにくさを解消する実用的なアプローチ。
- **[Your Trading Bot's Backtest Is Lying to You - Here Are the 4 Ways](https://dev.to/aurora_systems/your-trading-bots-backtest-is-lying-to-you-here-are-the-4-ways-5044)** - バックテストで+740%だった取引アルゴリズムが実運用ではわずかな利益しか出さなかった経験をもとに、バックテストが実態を偽ってしまう4つの典型的な原因を解説した記事。過去データでの検証全般に通じる教訓を扱っている。

## TechCrunch

- **[US cybersecurity agency CISA had to build its incident playbook during the incident, agency reveals](https://techcrunch.com/2026/07/10/us-cyber-agency-cisa-had-to-build-its-incident-playbook-during-the-incident-agency-reveals/)** - 米サイバーセキュリティ機関CISAが、大規模な情報漏えいインシデントへの対応手順を、事前に用意していたのではなく対応の最中に組み立てていたことが明らかになった。国レベルの危機対応体制の準備不足を示す事例として報じられている。
- **[A new app, HyperTexting, turns the open web into a scrollable social media-like feed](https://techcrunch.com/2026/07/10/a-new-app-hypertexting-turns-the-open-web-into-a-scrollable-social-media-like-feed/)** - ウェブサイトやブログ、ニュースレター、ポッドキャストをスクロール型のソーシャルメディア風フィードに変換する新アプリ「HyperTexting」が登場した。オープンウェブのコンテンツを、SNSに慣れたユーザー向けの消費体験に作り替える試み。
- **[Phia accused of 'cookie stuffing,' taking affiliate credit on purchases it didn't earn](https://techcrunch.com/2026/07/10/phia-accused-of-cookie-stuffing-taking-affiliate-credit-on-purchases-it-didnt-earn/)** - ショッピング比較スタートアップPhiaが、実際には貢献していない購入に対してアフィリエイト報酬を得る「クッキースタッフィング」を行っていたと告発された。アドテク領域における不正なトラッキング手法の実例として注目されている。

## Ars Technica

- **[Quantum error correction can constantly recalibrate a processor](https://arstechnica.com/science/2026/07/quantum-error-correction-can-constantly-recalibrate-a-processor/)** - 量子誤り訂正の仕組みを、単なるエラー修正だけでなくプロセッサ自体を継続的に再較正する手段として活用する研究が報じられた。量子コンピュータの安定動作を支える基盤技術の進展を示している。
- **[Valve's new Steam Machine verification system is silent on these Steam Deck-busters](https://arstechnica.com/gaming/2026/07/valves-steam-machine-verified-ratings-offer-more-questions-than-answers/)** - Valveの新型ゲーム機「Steam Machine」向けに導入されたゲーム互換性の検証システムが、Steam Deckでは問題になった特定の技術的課題について評価基準を明示していない点を指摘した記事。認証制度の透明性が問われている。
- **[NASA sure seems to be asking an awful lot of private space stations](https://arstechnica.com/space/2026/07/nasa-finally-releases-a-critical-planning-document-for-private-space-stations/)** - NASAが民間宇宙ステーション計画に向けた重要な計画文書をようやく公開したものの、その要求水準の高さが民間事業者にとって過大な負担になりかねないと分析した記事。国際宇宙ステーション後継計画の実現性に関わる内容。
- **[An orbiting disco ball gave Einstein's theory its most precise test yet](https://arstechnica.com/science/2026/07/an-orbiting-disco-ball-gave-einsteins-theory-its-most-precise-test-yet/)** - 鏡面を持つ人工衛星「ミラーボール」を使ったレーザー測距実験により、一般相対性理論がこれまでで最も精密に検証されたと報じられた。地上と衛星間の測定精度を高める技術的工夫が科学的成果を支えている。

## 注目トピック

今回のダイジェストで際立つのは、AIエージェントを「どう使うか」から「どう長期的に運用・記憶させるか」へ関心が移っている点だ。はてなブックマークの「AIデスキリング」記事はAI依存が人間の思考力を静かに蝕むリスクを指摘し、「ObsidianはAIの記憶保管には向いていない」はエージェントの長期記憶をどこに永続化すべきかという実装上の壁を扱っている。Zennの「Claude Codeに『昨日の続き』を思い出させるローカル知識ベースCLI『lk』」やLoop Engineeringのハーネス設計記事も同じ軸にあり、Qiitaの「AGENTS.mdには何を書くべき？330実験で検証」のように、勘に頼らずデータでエージェント運用を裏付けようとする動きが具体化してきている。

もう一つの軸は、基幹ソフトウェアをより安全な形へ作り直す動きの継続と、それを取り巻く運用・規制の摩擦だ。LobstersのPostgresをRustで完全移植した「pgrust」がリグレッションテスト100%通過に到達した一方、同じLobstersでは生成AIクローラーによる過剰スクレイピングがOSSインフラを圧迫し続けている「スクレイパー問題」の続報も注目を集めた。TechCrunchが報じたCISAの「インシデント対応中に初めて対応手順を組み立てていた」という実態や、AWSのアカウント離脱時セキュリティ制御のデフォルト化、Ars TechnicaのSteam Machine認証制度の不透明さも合わせると、技術の実装力そのものよりも、それを安全に運用し検証可能にする体制づくりが各所で追いついていない現状が浮かび上がる。
