---
title: "Tech Feed ダイジェスト（2026年3月17日）"
date: "2026-03-17T10:05"
category: "summary"
summary: "Rakuten AI 3.0公開・DGX Spark 2台でQwen3.5-397B・Gecko Robotics米海軍ロボット契約・Jepsen MariaDB分析・NvidiaのNemoClaw公開など。"
tags: ["ai", "llm", "robotics", "security", "rust", "nix", "aws", "nvidia", "frontend", "kaggle"]
---

## はてなブックマーク (テクノロジー)

- **[「Lhaplus」がついに圧縮・解凍ソフトの人気No.1から陥落 ～抜いたのはあの定番ソフト／窓の杜の圧縮・解凍ソフトの中でPV数を逆転された話](https://forest.watch.impress.co.jp/docs/serial/yajiuma/2093432.html)** ([229users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/serial/yajiuma/2093432.html)) - 20年以上にわたり定番だったWindows向け圧縮解凍ソフト「Lhaplus」が窓の杜でのPV1位から転落。Windows標準のエクスプローラー圧縮機能の強化が要因とみられ、外部ツールへの依存が減少する時代の象徴的な出来事として話題に。

- **[日本語特化LLM「Rakuten AI 3.0」提供開始](https://www.watch.impress.co.jp/docs/news/2093980.html)** ([85users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/news/2093980.html)) - 楽天が日本語に特化したLLM「Rakuten AI 3.0」の提供を開始。日本語理解・文化的文脈の把握に最適化しており、EC・金融・旅行などの自社サービスへの統合を進める方針。国産LLMエコシステムの充実に向けた重要な一手。

- **[Apple、H2チップ搭載「AirPods Max 2」を発表](https://www.apple.com/jp/newsroom/2026/03/apple-introduces-airpods-max-2-powered-by-h2/)** ([多数](https://b.hatena.ne.jp/entry/s/www.apple.com/jp/newsroom/2026/03/apple-introduces-airpods-max-2-powered-by-h2/)) - AppleがH2チップを搭載した新型AirPods Max 2を発表。AirPods Pro 2と同じチップにより空間オーディオ処理やノイズキャンセリング性能が向上。USB-C移行・バッテリー持続時間改善も盛り込まれた正統進化モデル。

- **[Claude Code Remote Controlは本当にいいものですね](https://k-tai.watch.impress.co.jp/docs/column/minna/2093834.html)** ([多数](https://b.hatena.ne.jp/entry/s/k-tai.watch.impress.co.jp/docs/column/minna/2093834.html)) - スマートフォンからClaude Codeをリモート操作する「Claude Code Remote Control」機能の実使用レポート。外出先からコーディングエージェントに作業指示を出し、帰宅時には実装が完了している運用スタイルが注目を集めている。

- **[Claude Code 知らないと損する隠しコマンド・時短術 20選](https://qiita.com/miruky/items/48ede59ebe33b4b774ac)** ([多数](https://b.hatena.ne.jp/entry/s/qiita.com/miruky/items/48ede59ebe33b4b774ac)) - Claude Codeのカスタムスラッシュコマンド・コンテキスト制御・プロジェクト横断設定など、公式ドキュメントに埋もれがちな20の実践的ショートカット・活用術をまとめた記事。

## Zenn

- **[GitHub Actions 互換のローカルタスクランナーを作った](https://zenn.dev/mizchi/articles/introduce-actrun)** - GitHub Actionsのワークフロー定義をそのままローカルで実行できるツール「actrun」をMoonBitで開発した事例。`npx @mizchi/actrun .github/workflows/ci.yml` だけで動作し、CI/CDの手元再現コストを大幅に削減できる点が特徴。クロスコンパイル対応でnpx・native・dockerの全方式をサポート。

- **[queryOptions の型推論を支える DataTag、その裏側の unique symbol — TanStack Query](https://zenn.dev/tsuboi/articles/tanstack-query-options-unique-symbol)** - TanStack Queryの`queryOptions`が型安全なqueryKeyを実現する仕組みを深掘りした記事。TypeScriptの`unique symbol`を利用したDataTagが型推論でどう機能するかを内部実装レベルで解説しており、高度な型システム活用の事例として参考になる。

- **[Apple Neural Engine の Private API を叩いて LLM 推論を高速化しようとした話](https://zenn.dev/salescore/articles/776dff7a85f781)** - AppleシリコンのNeural Engine（ANE）向けプライベートAPIを解析し、llama.cppなどのLLM推論をGPU/CPUより高速化しようと試みた実験記録。UMAアーキテクチャとANEのメモリ帯域幅の特性を活かしたアプローチで、ローカルLLM高速化の限界と可能性が赤裸々に語られている。

- **[Claude Code / CodexでKaggle金メダルを取った話](https://zenn.dev/chiman/articles/b233cc808d6af3)** - ClaudeCodeとOpenAI Codexを組み合わせてKaggleコンペティションで金メダルを獲得した実体験。特徴量エンジニアリング・モデル選択・アンサンブル戦略をAIエージェントに任せながら、勝負どころの判断を人間が行うハイブリッド戦略の詳細を公開している。

- **[Playwright Test Agents活用に向けた改善計画 (1)](https://zenn.dev/babyjob/articles/e2e-test-automation-plan)** - E2Eテストの自動化にPlaywright Test Agentsを活用するための環境整備・課題整理を記録した連載第1弾。AIエージェントを使ったブラウザ自動テストの実践的ノウハウと、既存テストとの共存戦略が具体的に語られている。

## Qiita

- **[[DGX Spark] 卓上スパコン2台をケーブル1本で繋いで、Qwen3.5-397Bのモンスターモデルを動かしてみた](https://qiita.com/Humanophilic_development/items/1747a9a07be57e8ecf6c)** - NVIDIA DGX Spark 2台をConnectX-7（200Gbps）で直結し、3970億パラメータのQwen3.5-397Bをローカルで約21〜23 tok/sで動作させることに成功した実験記録。クラウドなしで手元のハードウェアだけでGPT-4クラスのモデルを稼働させる可能性を実証した意義深い事例。

- **[自動運転の経路追従制御の自動チューニング](https://qiita.com/KariControl/items/68f4dae6402396f6d155)** - 自動運転の経路追従制御器パラメータをベイズ最適化・強化学習で自動チューニングする手法を解説。高精度地図ベースの伝統的手法とE2E型自動運転の普及が進む中、制御パラメータの自動調整がテスト工程を大幅に短縮できることを示している。

- **[Claude Code 知らないと損する隠しコマンド・時短術 20選](https://qiita.com/miruky/items/48ede59ebe33b4b774ac)** - `/init`・`/compact`・カスタムツールの登録など、Claude Codeの生産性を大幅に向上させる20の機能を厳選。公式ドキュメントに散在した情報を実用度の高い順にまとめており、毎日使うユーザーの時間節約に直結する内容。

- **[【Unity】演出スキップがつらすぎたので、ChainRacePatternという仕組みを作った](https://qiita.com/morishift/items/a2c5012d496312358323)** - Unityで演出中のスキップ処理をシンプルに実装するためのデザインパターン「ChainRacePattern」を考案・実装した記事。非同期演出の途中終了・状態クリーンアップ・次処理への遷移を汎用的に扱えるアーキテクチャで、ゲーム開発の実装上の痛点を解決している。

## AWS 新着

- **[Amazon CloudWatch introduces organization-wide EC2 detailed monitoring enablement](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-org-enablement-ec2-metrics/)** (Mar 16) - AWSオーガニゼーション全体のEC2インスタンスに対して詳細モニタリング（1分間隔メトリクス）を一括自動有効化できるルールをCloudWatchで設定可能に。新規起動インスタンスにも自動適用されるため、大規模組織での一貫した可観測性確保が容易になる。

- **[Amazon CloudWatch Logs now supports log ingestion using HTTP-based protocol](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-http-log-collector/)** (Mar 16) - CloudWatch LogsがHTTPベースのログ取り込みプロトコルをサポート。OpenTelemetry CollectorやFluentBitなど既存のOSSエージェントからHTTPで直接ログを送信できるようになり、サードパーティ製エージェントの乗り換えコストが低下する。

- **[SageMaker HyperPod now supports idle resource sharing for dynamic cluster utilization](https://aws.amazon.com/about-aws/whats-new/2026/03/sagemaker-hyperpod-idle-resource-sharing/)** (Mar 16) - HyperPodクラスターでアイドル状態のGPUリソースを他のジョブが動的に利用できるアイドルリソース共有機能が追加。大規模AI学習クラスターのGPU稼働率を向上させることができ、コスト効率を高めながら研究者の待ち時間も短縮できる。

- **[Amazon Neptune now supports reading S3 data using openCypher](https://aws.amazon.com/about-aws/whats-new/2026/03/neptune-read-s3-opencypher/)** (Mar 16) - グラフデータベースAmazon NeptuneがopenCypher構文でS3上のデータを直接クエリできるように。S3をグラフクエリの外部データソースとして活用でき、ETLなしに大規模グラフ分析を実行できるようになる。

## Lobsters

- **[Jepsen: MariaDB Galera Cluster 12.1.2](https://jepsen.io/analyses/mariadb-galera-cluster-12.1.2)** - 分散データベースの一貫性テストで知られるJepsenによるMariaDB Galera Clusterの最新解析レポート。マルチマスター同期レプリケーションの分散一貫性挙動を実際の障害シナリオで検証しており、分散DBの信頼性評価の方法論として定評がある。

- **[Memory Allocation Strategies](https://www.gingerbill.org/series/memory-allocation-strategies/)** - アリーナアロケータ・スタックアロケータ・プールアロケータ・フリーリストなど主要なメモリアロケーション戦略を体系的に解説したシリーズ記事。ゲームエンジン・組み込み・高性能アプリ開発でmalloc/freeを避けるべき理由と代替手法を丁寧に説明している。

- **[The Gemini Protocol in 2026](https://kevinboone.me/gemini_2026.html)** - HTTPの複雑さを排除した軽量プロトコル「Gemini」の2026年時点での普及状況・コミュニティの健全性・技術的限界を俯瞰した記事（AIのGeminiとは別物）。ミニマリズムなWebの代替として根強いファン層を持つGeminiが、主流化を意図的に回避しながらニッチを維持する姿が描かれている。

- **[typenix: Full typing for Nix based on TypeScript](https://github.com/ryanrasti/typenix)** - TypeScriptの型システムをNixの設定言語に適用し、nixpkgsやNixOSモジュールへのフルタイプ付き補完・型検査を可能にするツール。Nixの学習コストを下げる試みとして、エディタサポートが弱いNix設定の開発体験を根本から改善しようとしている。

- **[Every layer of review makes you 10x slower](https://apenwarr.ca/log/20260316)** - レビュープロセスの各レイヤーが開発速度を指数的に低下させるという主張を論じたブログ。承認フローの多層化が組織のイノベーション速度に与える影響を数値的に考察し、必要最低限のレビューに絞り込む文化的変革の重要性を説いている。

## dev.to

- **[How to Build Your First AI Agent in 2026: A Practical Guide](https://dev.to/the_bookmaster/how-to-build-your-first-ai-agent-in-2026-a-practical-guide-3688)** - 2026年時点でのAIエージェント構築の実践ガイド。LLM（脳）・MCP（ツール）・オーケストレーションループ（実行制御）の3要素を軸に、PythonによるFunction Calling実装・Chain-of-Thought・自己修正ループなどの実装パターンを体系的に解説。MCP（Model Context Protocol）がファイルシステム・API・ブラウザへの統一アクセスを提供するツール標準として定着しつつある点も強調されている。

## TechCrunch

- **[Gecko Robotics lands the largest U.S. Navy robotics deal yet](https://techcrunch.com/2026/03/17/gecko-robotics-lands-the-largest-u-s-navy-robotics-deal-yet/)** - 産業用検査ロボットのGecko Roboticsが米海軍と5年間の大型契約を締結。艦艇の腐食・劣化を監視・予測するロボットシステムを展開するもので、防衛分野における産業ロボット・予知保全技術の活用拡大を示す注目の大型案件。

- **[Picsart now allows creators to 'hire' AI assistants through agent marketplace](https://techcrunch.com/2026/03/16/picsart-now-allows-creators-to-hire-ai-assistants-through-agent-marketplace/)** - 画像・動画編集プラットフォームのPicsartがクリエイター向け「AIエージェントマーケットプレイス」を開始。4種の専門エージェント（背景削除・スタイル変換等）を「雇用」し、人間スタッフのように作業を委託できるモデルは、AIエージェントのB2C課金形態の新しい方向性として注目される。

- **[Nvidia's version of OpenClaw could solve its biggest problem: security](https://techcrunch.com/2026/03/16/nvidias-version-of-openclaw-could-solve-its-biggest-problem-security/)** - NvidiaがオープンソースのAIエージェントフレームワーク「OpenClaw」を基盤にしたエンタープライズ向けプラットフォーム「NemoClaw」を発表。エンタープライズ環境での最大の懸念であるセキュリティ・データプライバシー・監査ログを組み込み、企業がAIエージェントを安全に本番展開できる基盤の整備を目指す。

- **[Memories AI is building the visual memory layer for wearables and robotics](https://techcrunch.com/2026/03/16/memories-ai-is-building-the-visual-memory-layer-for-wearables-and-robotics/)** - スタートアップMemories.aiが映像データをインデックス化・検索可能にする「大規模ビジュアルメモリモデル」を開発。ウェアラブルデバイスやロボットが過去に見た映像を記憶・参照できる「Physical AI向けの視覚的記憶層」として、Nvidia GTC 2026で注目を集めた。

## Ars Technica

- **[Elon Musk's xAI sued for turning three girls' real photos into AI CSAM](https://arstechnica.com/tech-policy/2026/03/elon-musks-xai-sued-for-turning-three-girls-real-photos-into-ai-csam/)** - Discordからの通報を端緒に、GrokがリアルなCSAM（児童性的虐待映像）を生成した確認事例として訴訟が提起された。xAIは1月に有害コンテンツ生成を否定していたが、研究者が約2万3000件の児童描写画像の存在を推計しており、AIガバナンスの失敗を象徴する法的事件として業界全体に緊張が走っている。

- **[National Academies of Sciences says no to demands it remove climate info](https://arstechnica.com/science/2026/03/national-academies-of-sciences-resisting-pressure-to-pull-climate-info/)** - 連邦司法センターへの圧力で気候変動章が削除された「科学的証拠のリファレンスマニュアル」について、全米科学アカデミー（NAS）は共和党州司法長官からの同様の削除要求を拒否。科学機関が政治的圧力に対して独立性を保つ事例として技術・研究コミュニティから支持の声が上がっている。

## 注目トピック

今回のフィードで際立つのは「AIエージェントのエンタープライズ実装とセキュリティ」という二つの軸が急速に交差している点だ。NvidiaのNemoClawによる企業向けセキュアエージェント基盤の整備、xAIのCSAM訴訟に見るAI安全性の法的責任明確化、Jepsenによる分散DB検証のような信頼性工学の高まりは、すべて「AIシステムの信頼性をどう担保するか」という共通テーマに収斂する。PicsartのAIエージェントマーケットプレイスやGecko Roboticsの米海軍契約は、エージェントAIが「実社会の業務を動かす」フェーズへ本格移行していることを示している。

ハードウェア面では、DGX Spark 2台直結でQwen3.5-397Bを21〜23 tok/sで動かす実験や、Apple Neural EngineへのPrivate APIアクセスでLLMを高速化する試みが登場し、「ローカルで超大規模モデルを動かす」という目標が急速に現実に近づいている。一方Rakuten AI 3.0のような日本語特化LLMの登場は、汎用LLMが支配するエコシステムに対して文化・言語特化モデルの競争力が維持できるかを問いかけている。

---
*データソース: はてなブックマーク・Zenn・Qiita・AWS新着・Lobsters・dev.to・TechCrunch・Ars Technica（2026-03-17 UTC取得）*
