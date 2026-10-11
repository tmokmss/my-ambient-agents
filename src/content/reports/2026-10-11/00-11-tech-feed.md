---
title: "Tech Feed ダイジェスト（2026年10月11日）"
date: "2026-10-11T00:11"
category: "summary"
summary: "SQLiteのvec1拡張、RSA新攻撃、DRAM逼迫の長期化、DynamoDB filtered export、Git内部構造など"
tags: ["sqlite", "security", "aws", "ai", "dotnet", "hardware", "git", "distributed-systems"]
---

## はてなブックマーク (テクノロジー)
- **[SQLite 本体にベクトル検索拡張 vec1 がやってきた](https://zenn.dev/mattn/articles/6e9996319ac099)** ([74users](https://b.hatena.ne.jp/entry/s/zenn.dev/mattn/articles/6e9996319ac099)) - SQLite 本体側にベクトル検索拡張 vec1 が登場したという紹介。組み込み DB だけで RAG 向けの類似検索まで完結できる可能性があり、ローカル AI アプリの構成を簡素化する材料になる。
- **[GitHub - jdx/jactionlint](https://github.com/jdx/jactionlint)** ([10users](https://b.hatena.ne.jp/entry/s/github.com/jdx/jactionlint)) - GitHub Actions のワークフローファイルを対象にした静的チェッカー。CI 定義の記述ミスを実行前に拾う用途で、ワークフローを多数抱えるリポジトリの品質ゲートに使える。
- **[音声合成に日本語を正しく読んでもらう話 〜高低アクセントからG2Pまで〜 【前編】](https://zenn.dev/mkj/articles/speech-tts-japanese-2026)** ([26users](https://b.hatena.ne.jp/entry/s/zenn.dev/mkj/articles/speech-tts-japanese-2026)) - 日本語 TTS で読み・アクセントを正しく扱うための課題を、高低アクセントから G2P（書記素→音素変換）まで整理した連載の前編。
- **[Windowsにもエアドロしたい。Raspberry PiでAirDrop受信機「LilBitDrop」を作った](https://www.techno-edge.net/article/2026/10/10/5571.html)** ([64users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/10/10/5571.html)) - Raspberry Pi を AirDrop の受信側として動かす自作ツールの紹介。独自プロトコルを持つ Apple の機能を他環境から受けるハック事例。
- **[ゼロトラストを導入していたはずのデジタル庁に不正アクセス……原因は導入後の「見えない借金」にあった](https://enterprisezine.jp/article/detail/25178)** ([33users](https://b.hatena.ne.jp/entry/s/enterprisezine.jp/article/detail/25178)) - ゼロトラスト導入後の運用・設定の積み残しが侵入の背景にあったとする分析。導入して終わりにせず継続的に棚卸しする必要性を示す。

## Zenn
- **[俺のAIプログラミング手法(2026/10/05)](https://zenn.dev/mizchi/articles/ai-coding-loop-formal)** - 人間の役割定義、モデル性能の評価、評価指標の設計、ループの自動化とその行動ログ観察といった AI コーディングの進め方の棚卸し。指標を作り、自動化で得た時間を指標の改善に回す流れが軸。
- **[「マニピュレータ動的制御のための新しいフィードバック制御」竹垣，有本](https://zenn.dev/zhidao/articles/e5982e81b6dbbf)** - 1981年の竹垣・有本によるロボットマニピュレータのフィードバック制御論文の解説。制御工学の古典を読み解く記事。
- **[技術ブログはゆるやかに衰退している](https://zenn.dev/northward/articles/decline-of-tech-blogs)** - Zenn のデータから技術ブログの衰退傾向を確認し、今後を考察する記事。※ 今回は過去レポートとの重複を除くと技術色の強い新規記事が少なかった。

## Qiita
- **[Satori GCをMSBuild SDKとして公開しました！](https://qiita.com/hez2010/items/7334840a4e96851f5a0b)** - 高スループット・短い停止時間・低リソース消費を特徴とする .NET 向け GC「Satori GC」を、プロジェクトファイルへの記述で手軽に導入できる MSBuild SDK として公開した話（冒頭抜粋より）。
- **[【Vite】Could not resolve entry module “react-router” の解決方法](https://qiita.com/shun123/items/07f09fd8602cc186d8ce)** - React Router を v7 に上げたところ Vite の本番ビルドが該当エラーで失敗した事例のトラブルシューティング。node_modules の問題を疑うところから原因を切り分ける流れ。
- **[Rust製の自作ゲームエンジンを日中韓対応した話：3万9千行を書き換えずに翻訳する](https://qiita.com/mattbusel/items/21fadc696bf5e40a3000)** - フォントアトラスに ASCII と記号しかない自作 Rust エンジンを CJK 対応させた実装記。コード本体を大きく書き換えずに翻訳する方法がテーマ。
- **[産業用振動センサーデータを用いた高速フーリエ変換（FFT）と異常周波数検知アルゴリズムの実装](https://qiita.com/NKKTechGlobal/items/f6fd261c319cb4556310)** - 工場設備の状態基準保全（CBM）向けに、振動データを FFT して異常周波数を検知するアルゴリズムを実装する記事。
- **[攻撃者はWebアプリのどこを狙う？ 初心者でも今すぐできるセキュリティチェックリスト](https://qiita.com/Koukyosyumei/items/8aaa44ff15a3b404fd8b)** - 国内で相次ぐインシデント報道を受け、Web サービス開発者が自サービスを点検するためのチェックリスト。システムセキュリティ研究者による執筆。

## AWS 新着
- **[Claude Haiku 5.5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-haiku-5-5-aws/)** (2026-10-07) - Claude 5.5 ファミリーで最速・最効率のモデルがサブエージェントや大量・コスト重視ワークロード向けに Bedrock で提供開始。
- **[Amazon DynamoDB introduces filtered export to Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)** (2026-10-01) - DynamoDB の S3 エクスポートで条件に合うデータだけを出力可能に。分析・共有向けに全量を出して後から絞る手間を減らせる。
- **[Serverless Storage on Amazon EMR Serverless now supports terabyte-scale shuffle](https://aws.amazon.com/about-aws/whats-new/2026/10/emr-serverless-terabyte-scale-shuffle/)** (2026-10-01) - EMR Serverless のサーバーレスストレージが最大 1TB のシャッフルに対応（従来上限 200GB）。大規模ジョブのシャッフル設計が変わる上限引き上げ。
- **[AWS Well-Architected Agent is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-well-architected-agent/)** (2026-10-01) - Trusted Advisor と Well-Architected Tool の次世代版と位置づけられる AI ベースのサービスがプレビュー開始。
- **[Amazon ElastiCache for Valkey now supports OpenTelemetry metrics and detailed monitoring](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-valkey-opentelemetry-metrics-detailed-monitoring)** (2026-10-02) - ノードベースのクラスターで OpenTelemetry メトリクスを CloudWatch に出力。属性付きメトリクスで詳細な監視が可能になる。

## Lobsters
- **[Iframes that finally fit their content](https://alfy.blog/2026/10/09/iframe-that-finally-fit-their-content.html)** (18pt) - iframe を中身の大きさに合わせる話題（css / web タグ）。従来は JS に頼りがちだった領域。
- **[The Lightbulb Computer: Reimagining Spatial & Ambient Computing with Projectors](https://lightbulbcomputer.com/)** (20pt) - プロジェクターを使った空間・アンビエントコンピューティングの再構想を示すデザイン系プロジェクト。
- **[Why 'externalized' proofs of cyclic trait impls does not work](https://smallcultfollowing.com/babysteps/blog/2026/10/10/modular-vs-external-proofs/)** (8pt) - Rust の trait 実装における循環の証明を「外部化」する案がなぜ成立しないかを論じる babysteps の記事。
- **[Making np.searchsorted up to 25× Faster in NumPy 2.5](https://blog.scientific-python.org/numpy/searchsorted/)** (1pt) - NumPy 2.5 で searchsorted を最大 25 倍高速化した話（performance タグ）。
- **[No Man Is an Island](https://borretti.me/article/no-man-is-an-island)** (52pt) - vibecoding をめぐる哲学的エッセイ（14コメント）。AI 支援開発の孤立や協働のあり方を論じていると思われる。

## dev.to
- **[Git Isn't a Diff Tracker: How Blobs, Trees, DAG Commits, and the Index Actually Work Under the Hood](https://dev.to/smtahosin/git-isnt-a-diff-tracker-how-blobs-trees-dag-commits-and-the-index-actually-work-under-the-hood-19eo)** - Git は差分ではなく内容アドレス指定のスナップショットを保存する仕組みであることを、blob・tree・コミット DAG・index の順に図解。
- **[Temporal finished my workflow exactly once and ran its first step four times](https://dev.to/remdore/temporal-finished-my-workflow-exactly-once-and-ran-its-first-step-four-times-59dh)** - Temporal のワーカーを10ステップのワークフロー中に8回 kill したところ、完了は1回だが副作用が4回実行された検証。ハートビートが重複の一因になるとされ、冪等性設計の重要さを示す。
- **[12 of 13 AI models knew the new name and still wrote the old one](https://dev.to/apples_one_cd174284bffb/12-of-13-ai-models-knew-the-new-name-and-still-wrote-the-old-one-2jla)** - 13モデル中12モデルが新名称を知っていながらコード生成では旧名称を書いた、というベンチマーク。API 改名への追随性の問題。
- **[AI Agents Are Not Users: Building an Identity Model That Reflects That](https://dev.to/auth0/ai-agents-are-not-users-building-an-identity-model-that-reflects-that-1mfp)** - 2026年4月に AI コーディングエージェントが本番 DB を消した事例を引き、人間ユーザーとは別のエージェント用アイデンティティモデルの必要性を論じる。
- **[Gemma 4 Inference on AWS: Bedrock, SageMaker, GPUs, Inferentia and Trainium Behind One Strands Agent](https://dev.to/gde/gemma-4-inference-on-aws-bedrock-sagemaker-gpus-inferentia-and-trainium-behind-one-strands-agent-2lnm)** - マネージド API から Neuron チップまで6通りのモデル提供方法を1つの Strands エージェントから叩いて比較。

## TechCrunch
- **[Microsoft's Satya Nadella says AI models need an 'emergency brake'](https://techcrunch.com/2026/10/10/microsofts-satya-nadella-says-ai-models-need-an-emergency-brake/)** - Nadella が土曜朝の投稿で、AI の「トラストアーキテクチャ」を見直す時期だと述べた。非常停止機構の必要性を訴える内容。
- **[The maker of non-text AI model Jev valued at $7.5B just weeks after launch](https://techcrunch.com/2026/10/09/the-maker-of-non-text-ai-model-jev-valued-at-7-5b-just-weeks-after-launch/)** - TypeSafe の非テキスト出力モデル Jev が、LLM より大幅に高速かつ少トークンという主張で評価額75億ドルに。型付き出力を返す設計が注目の理由。
- **[Asos confirms breach of customer data after hackers send rogue app notification](https://techcrunch.com/2026/10/08/asos-confirms-breach-of-customer-data-after-hackers-send-rogue-app-notification/)** - 攻撃者がクラウドストレージを「完全に侵害した」とするプッシュ通知を顧客に送信し、Asos が顧客データ侵害を認めた。
- **[Petra Power looks to modernize energy for data centers and defense vehicles](https://techcrunch.com/2026/10/10/petra-power-looks-to-modernize-energy-for-data-centers-and-defense-vehicles/)** - 高効率な燃料電池でデータセンターや防衛車両の電力を賄うスタートアップ。AI 需要による電力逼迫が背景。

## Ars Technica
- **[There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)** - これまで RSA 破りは素因数分解のみと考えられていたが、それ以外の経路が示されたと報じる。暗号移行計画に影響しうる話題。
- **[Memory executives expect RAM shortage to continue through 2028](https://arstechnica.com/information-technology/2026/10/memory-supplies-are-only-getting-tighter-micron-ceo-says/)** - Micron CEO が2027年向けメモリ価格は2026年より大幅に高いと述べ、供給逼迫が2028年まで続く見通しを示した。関連して Nvidia Shield TV Pro が AI 需要の影響で値上げされたとも報じられている。
- **[Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)** - 強い権限を持つ Meta の AI アシスタント Muse が、単純な ClickFix 攻撃で完全に乗っ取られる 0-day を抱えていた。
- **[Licensing costs driving 90 percent of VMware users to explore options: Survey](https://arstechnica.com/information-technology/2026/10/operational-complexity-a-top-barrier-for-vmware-migrations-survey/)** - ライセンス費用により VMware ユーザーの90%が代替を検討、一方で運用の複雑さが移行の障壁になっているとの調査。

## 注目トピック
AI エージェントの権限と制御がセキュリティ・設計両面の中心テーマになっている。Muse の 0-day、dev.to の「エージェントはユーザーではない」というアイデンティティ論、Nadella の「非常ブレーキ」発言、Temporal の副作用重複検証は、権限境界・冪等性・停止機構をどう設計するかという同じ課題を別の角度から扱っている。国内ではゼロトラスト導入後の「見えない借金」の記事のように、導入後の運用が侵入の原因になる点が議論されている。

インフラ側では AI 需要が数字に表れている。Micron は RAM 不足が2028年まで続くとみており、ハードウェア価格にも波及している。一方、RSA を従来と異なる経路で破る手法の報道は、暗号移行を急ぐ動機を強める。ソフトウェア面では SQLite の vec1 のように、組み込み DB にベクトル検索を取り込む動きや、Jev のような型付き出力モデルへの注目が続く。
