---
title: "Tech Feed ダイジェスト（2026年6月25日）夜版"
date: "2026-06-25T11:51"
category: "summary"
summary: "自衛隊機密USB感染・IBM 1nm未満チップ・Gemini 3.5 computer use・Lambda MicroVM・Cellebrite対ロシア"
tags: ["security", "hardware", "ai", "aws", "llm", "devtools", "robotics", "quantum", "gamedev"]
---

## はてなブックマーク (テクノロジー)

- **[自衛隊、機密システムに感染USB接続　中国系ウイルス1年気づかず](https://www.nikkei.com/article/DGXZQOCD075JJ0X00C26A5000000/)** ([455users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOCD075JJ0X00C26A5000000/)) - 航空自衛隊の機密情報扱いシステムに接続されたUSBメモリが1年以上にわたってマルウェア感染を検知されなかったことが判明した。中国系サイバー攻撃グループの関与が疑われており、物理的に分離されたエアギャップ環境をUSBで突破するという古典的手法が防衛機密インフラでも依然として有効であることを示す深刻な事案だ。

- **[ソニー、aiboの国内販売を終了](https://www.watch.impress.co.jp/docs/news/2119925.html)** ([192users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/news/2119925.html)) - ソニーが家庭向けペットロボット「aibo」の国内新規販売を終了すると発表した。既存オーナー向けのサービスサポートは継続するが、AIロボット市場が急拡大する中で先駆的な製品が市場から退くことは、国内ロボット産業のハードウェア開発・量産能力の現在地を考えさせる象徴的な出来事だ。

- **[今も「パスワードの定期変更」ルールが生き残っている企業では、何が起きているのか](https://levtech.jp/media/detail_881/)** ([189users](https://b.hatena.ne.jp/entry/s/levtech.jp/media/detail_881/)) - NIST SP 800-63Bで2017年以降「定期変更は不要」とされているにもかかわらず国内企業でルールが生き残る理由（監査基準の硬直性・IT部門の情報更新不足・経営層の慣習）を分析した記事。セキュリティポリシーのアップデートがいかに組織的に困難かを示す問題提起であり、ゼロトラスト移行を進める組織の変革管理にも示唆が多い。

- **[Gemini 3.5 Flashにcomputer use機能が追加、PCを操作するエージェント構築が可能に](https://gigazine.net/news/20260625-gemini-3-5-computer-use/)** ([14users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260625-gemini-3-5-computer-use/)) - GoogleがGemini 3.5 FlashにComputer Use機能を追加し、スクリーンショット認識→クリック・入力・スクロールのGUI操作を自律実行するエージェント構築が可能になった。Anthropic Claude 3.5に続く主要LLMの対応で、RPA・UIテスト自動化・デスクトップAIエージェントの実装基盤が急速に揃いつつある。

- **[孫正義氏が明かした「ロボット自動量産工場」の実態](https://www.itmedia.co.jp/business/articles/2606/25/news053.html)** ([17users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/business/articles/2606/25/news053.html)) - ソフトバンクグループの孫正義会長がAGI到来後を見据えたロボット自動量産工場構想を明かした。AIとロボットが新型ロボットを自律生産するという「ロボット工場のロボット化」は製造業自動化の自己増殖的な加速段階を示唆しており、半導体・物流に続くロボティクス産業の資本競争が本格化しつつある。

## Zenn

- **[AI時代のコードレビューは人に向けるな、仕組みに向けろ](https://zenn.dev/manalink_dev/articles/ai-coding-era-review-to-dev-process-not-human)** - AIが生成したコードを個人のスキルに帰着させてレビューする文化から、「なぜそのコードが生まれるのか」というプロセス・設計ルール・プロンプト設計そのものを改善する方向へシフトすべきだと論じた記事。AIコーディングが主役になるほど「コードの品質責任」の所在が変わり、レビュアーの役割が根本から変わるという視点が鋭い。

- **[Unity 6時代にUniTaskはまだ必要か？Awaitable登場後の使い分けを整理する](https://zenn.dev/gamedev_toollab/articles/1c793e678197f9)** - Unity 6でネイティブ搭載されたAwaitable（ゼロアロケーションの非同期型）とサードパーティのUniTaskの性能・機能・互換性を実測値で比較した記事。Awaitableはパフォーマンスで優位だがUniTaskのエコシステム・豊富な演算子・既存コード資産との兼ね合いで移行判断が複雑になるというトレードオフが丁寧に整理されており、Unityエンジニアの移行決断に直結する内容だ。

- **[「AIがSQLを書いてくれる」で終わらせない — 分析基盤の育て方](https://zenn.dev/tribeau/articles/c961141dd4c9c8)** - AIにSQLを生成させるだけでは分析基盤は育たないという立場から、dbt・データカタログ・テスト戦略を組み合わせた「メンテナブルな分析基盤」の設計を論じた記事。AI生成クエリを資産として蓄積するにはセマンティクスの文書化とレグレッションテストの整備が不可欠であり、LLM活用と組織的データ管理の両立を図るデータエンジニアに実践的な指針を提供する。

- **[小さいローカルLLMをファインチューニングしてタスクに特化させ、Unityで利用する](https://zenn.dev/meson_tech_blog/articles/fine-tuning-local-llm)** - LoRAを使って7B〜13BクラスのLLMをゲームキャラクター応答に特化させ、Unityからローカル推論エンドポイントを呼び出す実装例を解説した記事。クラウドAPIを使わずオフラインで動作する組み込みLLMの実用化手順が具体的に示されており、ゲーム・産業機器・エッジデバイスでのLLM活用を検討する開発者に参考になる内容だ。

- **[AWS13冠は、何を証明して、何を証明しないのか](https://zenn.dev/honey_aws/articles/certifications-and-tradeoff-judgment)** - AWS認定資格13冠取得者が「資格はサービス知識の広さを証明するがアーキテクチャ判断力は別問題」と率直に論じた記事。学習コストとビジネス価値のトレードオフを誠実に言語化しており、AIツールが設計の一部を担うようになった今、エンジニアの専門性と資格の関係を問い直す視点を提供する。

## Qiita

- **[AIの嘘を見抜く？Gemini の検索＆画像グラウンディングを試してわかったこと](https://qiita.com/ta-ito0611/items/646d3d1efb535737416d)** - GeminiのGoogle Searchグラウンディングと画像グラウンディングを実際に試し、ハルシネーション抑制効果と誤情報混入リスクの両面を評価した記事。検索グラウンディングは引用ソースが付与されて事実確認が容易になる一方、検索結果に誤情報が含まれると逆に確信度が高まってしまうリスクも観察されており、RAGとグラウンディングを実務に使う際の重要な注意点が整理されている。

- **[BigQueryでグラフ分析ができる！新しい「Graph」機能をSNSデータの例で試してみた](https://qiita.com/ta-ito0611/items/432725de703dc4b644aa)** - BigQueryに追加されたネイティブグラフ分析機能をSNSフォロー関係データに適用し、PageRankや最短経路探索を実行した実験記事。GoogleのGQL（Graph Query Language）をSQLと同一エンジンで使える設計により、別途グラフDBを立てずにBigQueryだけでネットワーク分析が完結する。ナレッジグラフ・不正検知・推薦システムへの応用が見込まれる重要なアップデートだ。

- **[IDOR — ソフトウェアアーキテクチャにおける「無邪気」だが致命的な脆弱性？](https://qiita.com/luan_nguyen/items/d21c24d910853b96e542)** - IDOR（Insecure Direct Object Reference）が2026年でも頻繁に発生する原因をアーキテクチャ設計の視点から分析した記事。認可チェックをAPIゲートウェイ・サービス層・データアクセス層のどこに置くかという設計判断が漏洩リスクに直結することが具体例で示されており、AIが自動生成したAPIエンドポイントで特に発生しやすい問題として再評価が求められている。

- **[ループエンジニアリングでAI編集部を作る：週刊少年バカゲーの自律運営実験](https://qiita.com/onaka_yurusugi/items/1c16ff9e3942e870e02c)** - 複数のAIエージェントをパイプライン接続し「企画→取材→執筆→校閲→公開」を自律的に回す擬似編集部システムを構築した実験記事。各エージェントが前工程の成果物を受け取って次工程を担う設計パターンが具体的に示されており、AIによる長期タスク自動化の可能性と「品質評価をどこで人間が介入するか」という実践的な設計課題が浮き彫りになっている。

- **[論文の海から知を掘り出す — 精度91%のGraph RAGと専用DBをゼロから作った話](https://qiita.com/hisaho/items/e481aa076a2b7d3a6750)** - 学術論文の引用グラフと概念グラフを組み合わせたGraph RAGを自作し、通常のベクトル検索RAGより精度91%を達成した実装レポート。グラフDBとして独自のインメモリ構造を設計した理由（Neo4jの学習コスト・クエリ複雑性）と、エッジ品質管理がボトルネックになるという知見が詳述されており、高精度RAGを必要とする研究・法務・医療ドメインの開発者に参考になる。

## AWS 新着

- **[AWS Lambda MicroVMs for isolated execution of user and AI-generated code](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lambda-microvms/)** (2026-06-22) - Lambda上で信頼できないユーザーコードやAI生成コードを軽量MicroVM内の隔離サンドボックスで安全に実行できる新機能。LambdaをコードインタープリターやAIエージェントのツール実行環境として利用する際のセキュリティ境界が確保され、「AIが生成したコードをどこで安全に動かすか」という需要に対してインフラ側が直接答えを出した注目アップデートだ。

- **[Amazon OpenSearch Service now offers AI-assisted migrations](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-opensearch-service-ai-migrations)** (2026-06-23) - ElasticsearchやセルフホストOpenSearchからマネージドOpenSearchへの移行をAIが分析・支援する機能が追加された。インデックスマッピング変換・クエリ互換性確認・パフォーマンス影響分析を自動化し、従来は専門知識が必要だった移行作業の難易度を大幅に引き下げることが期待される。

- **[Amazon Neptune now supports AWS CloudFormation for global databases](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-neptune-aws-cloudformation/)** (2026-06-24) - グラフDBサービスNeptuneのグローバルデータベース構成がCloudFormationでIaC化できるようになった。マルチリージョンのグラフDB展開をコードで宣言的に管理できるようになり、ナレッジグラフ・不正検知・レコメンデーションシステムの本番インフラ管理が大幅に容易になる。

- **[Amazon CloudWatch now supports tags on dashboards](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-tags-on-dashboards)** (2026-06-24) - CloudWatchダッシュボードにタグ付けが対応し、チーム・環境・コスト配賦単位での整理・検索・アクセス制御が可能になった。多数のダッシュボードを複数チームで管理する大規模運用環境でのガバナンス改善に直結するシンプルだが実用的なアップデートだ。

- **[SageMaker Notebook Instances now support G6e instance types](https://aws.amazon.com/about-aws/whats-new/2026/03/g6e-new-launch-sagemaker-notebook-instances/)** (2026-06-23) - SageMaker NotebookインスタンスにNVIDIA L40S GPU（VRAM 48GB）を搭載したG6eインスタンスが追加された。生成AIの実験・ファインチューニング・マルチモーダルモデル開発に必要な大容量VRAMをNotebook環境から直接利用でき、G7eに続くGPUラインアップ強化でSageMakerのML開発環境が充実する。

## Lobsters

- **[UK Wikipedia Workers seek union recognition](https://utaw.tech/news/wikipedia-recognition)** (50pt) - ウィキペディアを運営するウィキメディア財団の英国スタッフが労働組合結成の認定を求めていることが明らかになった。非営利デジタル公共インフラを支えるワーカーが組合権を求める動きは、OSSコミュニティ・フリーカルチャー運動の持続可能な組織運営をめぐる議論に新たな観点を加えており、テック業界全体の労働環境議論と重なる文脈で注目されている。

- **[Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54)** (37pt) - 1996年リリースのGIMP 0.54.1を現代のLinux環境でFlatpakとして動かせるようにパッケージングしたプロジェクト。30年前のGTK1.xアプリを動かすために必要なライブラリ互換レイヤーの整備作業が詳述されており、Flatpakのサンドボックス設計の理解を深めるレトロコンピューティングの好事例だ。

- **[AOL was down (1996) (2026)](https://ngrok.com/blog/aol-was-down-1996)** (28pt) - 1996年にAOLのプリペイドサービス開始直後、数百万ユーザーが一斉接続してシステムが完全停止した障害をngrokが現代視点で振り返った技術的回顧録。容量計画の失敗・オンコール対応の原始的な手法・障害通知手段の貧しさと比較して現代のSRE・インフラ設計がいかに進歩したかが浮き彫りになり、歴史から学ぶ示唆に富む読み物だ。

- **[How to Write an Effective Software Design Document](https://refactoringenglish.com/excerpts/write-an-effective-design-doc/)** (22pt) - ソフトウェア設計ドキュメントの構造・文体・読者設定を体系的に解説した記事。「なぜそのアーキテクチャを選んだか」という意思決定の記録こそが設計ドキュメントの核心であり、実装仕様の羅列ではないという原則が強調されている。AIが大量のコードを生成する時代に人間が担う「設計を言語化する」スキルの重要度が増しており、タイムリーな内容だ。

- **[Ignore DNSSEC if you like MITM attacks](https://whynothugo.nl/journal/2026/06/24/ignore-dnssec-if-you-like-mitm-attacks/)** (16pt) - DNSSECを無効化・無視しているシステムがDNSスプーフィングによるMITM攻撃に晒されるリスクを実例で解説した記事。リゾルバ設定でDNSSEC検証をオフにしているケースが多く「動いているから問題ない」という誤認が深刻なリスクを生んでいると警告しており、インフラエンジニアのDNS設定見直しを促す内容だ。

## dev.to

- **[Vibe-Memory Part 3: pgvector Performance Optimization — How I Cut Query Time From 800ms to 15ms](https://dev.to/kevinten10/vibe-memory-part-3-pgvector-performance-optimization-how-i-cut-query-time-from-800ms-to-15ms-15l7)** - pgvectorによるベクトル検索クエリを800msから15msへ53倍高速化した最適化手法を解説した記事。IVFFlatとHNSWのインデックス選択・ef_searchパラメータチューニング・PostgreSQL autovacuum設定など、本番pgvector環境での必要なパフォーマンスチューニングの知識が体系的にまとめられており、RAGシステムのレイテンシ改善に直結する実践的な内容だ。

- **[AI System Design Interview Questions: ChatGPT, RAG, LLM Inference, and Agents](https://dev.to/arslan_ah/ai-system-design-interview-questions-chatgpt-rag-llm-inference-and-agents-1doi)** - AIシステム設計面接で頻出の問題（ChatGPTのアーキテクチャ・RAGパイプライン・LLM推論最適化・マルチエージェントシステム）をQ&A形式でまとめたリファレンス記事。コンテキスト長・キャッシング戦略・ベクトルDB選択など実際の設計判断が問われる背景とともに解説されており、面接準備と現場設計の復習を兼ねたリソースとして価値がある。

- **[The 47 Words That Make Your Text Sound AI-Written](https://dev.to/david_musijenko/the-47-words-that-make-your-text-sound-ai-written-and-what-to-use-instead-4c4)** - LLMが繰り返し使うAIっぽい語彙47語（「delve」「realm」「leverage」「synergy」など）を特定し、代替表現を提示した記事。ライティング品質の向上という観点だけでなく、AI生成テキストの文体的特徴を理解することでAI検出の仕組みを逆側から学べる二重の価値がある。ドキュメント・コミット・PRの文章にAIを活用する開発者に参考になる視点だ。

- **[The Developer's Map of Quantum Computing: From Qubits to Fault-Tolerant Machines](https://dev.to/amanraza/the-developers-map-of-quantum-computing-from-qubits-to-fault-tolerant-machines-35gp)** - 量子コンピュータをソフトウェアエンジニア視点でマッピングした入門記事。量子ゲート・誤り訂正・Qiskit/Cirqのような開発ツールチェーンへのロードマップが体系化されており、古典的プログラミングバックグラウンドから量子コンピュータに入門する際の概観として読みやすい。実用的な量子優位性が現れ始めた現在、基礎概念を押さえる意義が高まっている。

## TechCrunch

- **[Cellebrite said it cut off Russia, but Russia used its tools anyway](https://techcrunch.com/2026/06/25/cellebrite-said-it-cut-off-russia-but-russia-used-is-tools-anyway/)** (2026-06-25) - イスラエルのスマートフォン解析ツールメーカーCellebriteが「ロシアへの販売停止」を表明した後も、ロシア当局が反体制活動家のiPhoneを解析するためにCellebriteのツールを使用し続けた証拠をセキュリティ研究者が発見した。第三国経由の迂回調達という輸出規制の抜け穴と、デュアルユース監視ツールのサプライチェーン管理の困難さが改めて浮き彫りになっている。

- **[Europe is pushing back on Washington's chip war](https://techcrunch.com/2026/06/24/europe-is-pushing-back-on-washingtons-chip-war/)** (2026-06-25) - ASMLなどの欧州半導体企業が米国の対中輸出規制に対して独自の立場を打ち出し始めた。現時点では旧世代DUV（深紫外線）露光装置の輸出は許容されているという実態を軸に、欧州企業の商業利益と米国の戦略的意図が衝突する構造を分析しており、ASML・IMEC・European Chips Actを軸に半導体の地政学が複雑化していることを示している。

- **[AI researchers continue to leave Google for its rivals](https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/)** (2026-06-24) - GoogleのDeepMindからJonas AdlerとAlexander PritzelがAnthropicに移籍したと報じられた。Noam ShazeerのCharacter.AI設立、John JumperのNobel受賞後の独立など、Google発のトップAI研究者流出が続いており、AIタレント争奪戦でGoogleが不利な立場に置かれていることがデータとして積み上がっている。

- **[Cerebras stock plunges after earnings as CEO says margin outlook was misunderstood](https://techcrunch.com/2026/06/24/cerebras-stock-plunges-after-earnings-as-ceo-says-margin-outlook-was-misunderstood/)** (2026-06-24) - AIチップメーカーCerebrasが初の公開決算でコアビジネスの粗利益率が想定を下回るガイダンスを示し株価が急落した。CEOは「投資家に誤解された」と説明したが、Wafer-Scale Engineの量産コスト構造が市場期待に届いていない現実を示しており、GPU対抗チップの商業化の難しさを改めて浮き彫りにした。

- **[Agility Robotics plans to go public via SPAC in a $2.5B deal](https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/)** (2026-06-24) - 二足歩行ロボット「Digit」を開発するAgility Roboticsが総額25億ドルのSPAC上場を計画していることが明らかになった。AmazonのFulfillmentセンターでDigitが実稼働中という商業化実績が評価につながっており、Figure・1X・Teslaとのヒューマノイドロボット競争が資本市場でも加速している。

## Ars Technica

- **[IBM claims world's first sub-1 nanometer chip technology](https://arstechnica.com/gadgets/2026/06/ibm-claims-worlds-first-sub-1-nanometer-chip-technology/)** (2026-06-25) - IBMが1ナノメートル未満のトランジスタ技術「ナノスタック（nanostack）」を世界初として発表した。従来のGAAFETトランジスタを積層することでスケーリングの限界を突破する設計で、同一チップ面積でのトランジスタ密度が大幅に向上しパフォーマンスまたは電力効率の改善が期待される。ムーアの法則の終焉が語られる中で新世代チップスケーリングへの道筋を示す重要な発表だ。

- **[Hotly anticipated Grand Theft Auto VI will cost more than other AAA games](https://arstechnica.com/gaming/2026/06/grand-theft-auto-vi-will-cost-80-without-a-physical-disc/)** (2026-06-24) - GTA6が物理ディスクなしで80ドルという他のAAAタイトルより高い価格設定であることが判明した。ゲーム業界全体でのコスト上昇（開発規模・人件費・インフレ）を背景にした値上げで、AIアセット生成やプロシージャル技術が普及しても開発コスト削減に直結しないという現実を示しており、ゲームエンジンビジネスモデルの変化を考えるうえで興味深い事例だ。

- **[FCC plans ID mandate that could block anonymous use of prepaid burner phones](https://arstechnica.com/tech-policy/2026/06/fcc-plans-id-mandate-that-could-block-anonymous-use-of-prepaid-burner-phones/)** (2026-06-24) - 米FCCが提案するプリペイド携帯購入時の身分証明義務化に対して、プライバシー擁護団体・DV被害者支援団体・セキュリティ研究者が強く反発している。匿名通信インフラの消失は内部告発者・ジャーナリスト・マイノリティコミュニティへの不均衡な打撃となるという批判が集まっており、通信プライバシーと犯罪抑止のバランスをめぐる政策論争が続いている。

## 注目トピック

本日のフィードを横断して際立つのは**ハードウェア革新の同時多発**だ。IBMが1nm未満チップ技術「ナノスタック」を発表し、OpenAI×Broadcomの推論専用ASICが正式発表され、さらにAWS Lambda MicroVMが「AI生成コードの安全な実行サンドボックス」という全く新しい需要に応えた。ソフトウェアスタックの最上位（LLMエージェントのcomputer use対応）からシリコンの最下位（1nm未満プロセス）まで、AI活用のインフラが同日に複数の層で同時に前進したという稀なタイミングだ。Cerebrasの株価急落はカスタムAIチップの量産コスト構造が市場期待にまだ届いていないことを示し、AI研究者のGoogle流出はタレント争奪戦の激化を裏付けている——ハードウェア・ソフトウェア・人材の三面でAI競争が加速した一日だった。

セキュリティ面では**自衛隊機密システムへのUSB感染が1年間検知されなかった**という国内事案が最大の話題だ。エアギャップ環境をUSBで突破するという「古典的手法」の有効性と組織内検知体制の問題が同時に露わになり、Cellebriteの輸出規制回避・DNSSECを無視したMITMリスク・IDORの再評価を含む本日のセキュリティ記事全体が「技術的には既知の手法が最前線の攻撃で今も有効であり続ける」という繰り返される教訓を指し示している。
