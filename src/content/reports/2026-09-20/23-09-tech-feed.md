---
title: "Tech Feed ダイジェスト（2026年9月21日）"
date: "2026-09-20T23:09"
category: "summary"
summary: "Jevの技術的検証記事が各ソースで多数登場。AWSはEC2 T8i GAとDevOps Agent、Ars TechnicaはGoogleの潜入捜査によるサプライチェーン攻撃グループ摘発が目立った"
tags: ["ai", "llm", "aws", "security", "devtools", "flutter", "serverless"]
---

## はてなブックマーク (テクノロジー)

- **[Jevはサイコロを振らない｜「較正された確率」の意外な落とし穴](https://note.com/kantahayashiai/n/n4c54eed30787)** ([92users](https://b.hatena.ne.jp/entry/s/note.com/kantahayashiai/n/n4c54eed30787)) - 判断だけを高速に返すAIモデル「Jev」が返す確率値について、実際にキャリブレーション（較正）されているかを検証した記事。見た目の確率値をそのまま信頼度として使うと痛い目を見る、という統計的な落とし穴を指摘している。
- **[Jevには残念なことに技術的な革新は無いが、すでにそこにあることが強いアドバンテージ](https://anond.hatelabo.jp/20260920135749)** ([46users](https://b.hatena.ne.jp/entry/s/anond.hatelabo.jp/20260920135749)) - Jevの仕組み自体は既存のLLM推論技術の組み合わせに過ぎないとしつつも、「今すぐ使えるものとして存在している」ことこそが最大の強みだと分析する技術者視点の考察。
- **[GitHub - minorun365/minorun-marp-skill](https://github.com/minorun365/minorun-marp-skill)** ([34users](https://b.hatena.ne.jp/entry/s/github.com/minorun365/minorun-marp-skill)) - Marpで登壇スライドを作るためのAIエージェント向けスキル集。ストーリー構成・図解・デザインバランスのガイドラインと黒背景テーマ、検査ツールをセットで提供し、AIにスライド作成を任せやすくしている。
- **[json-render と Jev で UI を組み立ててみた](https://azukiazusa.dev/blog/json-render-jev/)** ([19users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/json-render-jev/)) - JSONスキーマからUIを動的生成するjson-renderと、判断だけを返すJevを組み合わせ、状況に応じたUIコンポーネントの選択をJevに任せる実装例。
- **[コーディングエージェントに全部書かせない！－AIに任せる実装と、決定論的に作るサーバーレス基盤の境界設計](https://www.docswell.com/s/himanago/59N779-serverlessdays2026swallowkit)** ([15users](https://b.hatena.ne.jp/entry/s/www.docswell.com/s/himanago/59N779-serverlessdays2026swallowkit)) - ServerlessDaysのスライド資料。AIコーディングエージェントに任せる範囲と、決定論的な動作が求められるサーバーレス基盤側の境界線をどう引くかを整理している。

## Zenn

- **[高速判断AI Jevのユースケースとオープン実装を雑にまとめる](https://zenn.dev/karaage0703/articles/jev-use-cases-open-implementations)** - 発表から数日で急増した「Jev」の解説記事・実用例・オープンな類似実装を横断的にまとめたキュレーション記事。情報が乱立する中で全体像を掴むのに便利な内容になっている。
- **[Jevを、自然言語で分類基準を渡せる識別モデルとして使う](https://zenn.dev/cybernetics/articles/4f3762bd470fc4)** - Jevの挙動を確率的分類器の数式で定式化し、通常の分類器 $\hat p_\theta(y\mid x)$ に対してJevは質問と候補の説明を追加入力として渡せる点を理論的に整理している。
- **[Jevでハーネスエンジニアリング](https://zenn.dev/watany/articles/36e11a20ce3743)** - Jevを「状態と質問を受け取り、型付きの回答を確率とともに返すモデル」と定義し、これを既存のAIエージェントのハーネス（実行環境）に組み込む設計を論じている。
- **[AI開発チームの作り方と育て方 — マルチエージェント開発組織の設計と運用](https://zenn.dev/hampen2929/books/ai-dev-team-guide)** - 複数のAIエージェントで開発を回すチームの設計書。業務の完了条件、役割分担、並列化、検収といった観点を、実際のTypeScriptアプリへの機能追加を題材に解説している。
- **[1日の開発の流れをスキル化してみたら、想像以上に快適だった](https://zenn.dev/tenkei/articles/9f8921926bb003)** - GitHub Issue取得→AIによる設計・実装→別AIによるレビュー→動作確認→PR作成、という日々の開発フローをClaude Skillとして定型化した実践例。

## Qiita

- **[5分でJev入門（すぐ使う）](https://qiita.com/Ninagawa123/items/8ec3f5fe18c20fab1b2a)** - 超短い回答を高速に返すJevを、理屈抜きでとにかく触ってみるための最短手順をまとめたハンズオン記事。同じ記事がはてなブックマークでも202usersを集めており、関心の高さがうかがえる。
- **[Jevはどこで使うべきか？ LLM・機械学習・ルールベースとの使い分け](https://qiita.com/Isaka-code/items/8944ef8b521517f92da0)** - 分類・判定・スコアリングに特化したJevを、通常のLLM、従来の機械学習、ルールベース実装とどう使い分けるべきかを整理した実践的な判断基準の記事。
- **[Jevは学習なしに使えるカテゴリ分類器だ！ということでMNISTやらせてみたらダメダメだった件](https://qiita.com/segavvy/items/b08eee93a0abe0c0726d)** - ゼロショット分類器として期待されたJevにMNIST画像分類（各数字10枚、seed=42で抽出）を試させたところ精度が出なかったという定量的な検証結果を報告している。
- **[Windows の防御設定を「確かめて、直して、見張る」常駐ツール Agent Fettle をクローズドβ公開しました](https://qiita.com/nobukz/items/64a2ccb8b89fcc439aed)** - Norton 360からMicrosoft Defenderに戻す際に作った個人ツールを、C#/.NET製の常駐セキュリティ監視ツールとして製品化した開発記。
- **[AWSの最軽量LLM「Amazon Nova Micro」がJevの代わりとなるか検証してみた](https://qiita.com/nasuvitz/items/4d27833640ff36b5d8c5)** - 外部サービスへのデータ送信が社内審査で制約されるエンタープライズ用途を想定し、判断特化型のJevをAWS内で完結するNova Microで代替できるか検証している。

## AWS 新着

- **[Introducing Amazon EC2 T8i instances](https://aws.amazon.com/about-aws/whats-new/2026/09/ec2-t8i-instances-ga/)** (2026-09-17) - 第6世代Intel Xeon 6プロセッサを採用した低コストのバーストパフォーマンス型EC2インスタンスがGAに。同じ件をはてなブックマーク経由のDevelopersIO記事も、東京リージョンでの起動とCPU情報確認という別角度で報じている。
- **[AWS DevOps Agent adds support for bidirectional Slack communication](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-devops-agent-bidirectional-slack-communication)** (2026-09-11) - AWS、マルチクラウド、オンプレミス環境にまたがる運用調査をSlack上で完結できるようになり、エンジニアがSlackから双方向にAgentへ指示・確認できるようになった。
- **[Amazon Bedrock Managed Knowledge Base now supports multimodal embeddings for video, audio, and image content with TwelveLabs Marengo 3.0](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-multimodal-embeddings-twelvelabs-marengo/)** (2026-09-11) - TwelveLabs Marengo 3.0が埋め込みモデルとして追加され、動画・音声・画像を横断したマルチモーダルなRAG検索がBedrock標準機能で組めるようになった。
- **[AWS Lambda now supports direct read configuration for Amazon S3 Files](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-direct-read-s3files/)** (2026-09-11) - LambdaがS3 Filesの高性能ストレージとS3バケットのどちらから読み込むかを設定できるようになり、サーバーレスアーキテクチャのストレージ選定の自由度が増した。
- **[Amazon OpenSearch Serverless is now available on v0 by Vercel](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-opensearch-serverless-available-V0-vercel/)** (2026-09-10) - AIでアプリを生成するVercelのv0からOpenSearch Serverlessを直接組み込めるようになり、検索・AI機能付きのフルスタックアプリを短時間で構築できる。

## Lobsters

- **[Beyond jj: config & tools ecosystem](https://andre.arko.net/2026/09/16/beyond-jj-config-and-tools-ecosystem/)** (45pt) - 分散バージョン管理システムJujutsu（jj）を取り巻く設定ファイルや周辺ツールのエコシステムを整理した記事。単体のVCSコマンドだけでなく、周辺環境まで含めて使いこなすための情報がまとまっている。
- **[What happens to TLDs when their country stops existing? (2022)](https://astrid.tech/2022/04/05/0/dead-tlds/)** (33pt) - 国が消滅・分裂した際にそのccTLD（国別トップレベルドメイン）がどう扱われるかを、ソ連崩壊などの実例を交えてDNS運用の観点から解説している。
- **[Software sandboxing: The basics (2025)](https://blog.emilua.org/2025/01/12/software-sandboxing-basics/)** (27pt) - seccomp、名前空間、ケーパビリティなどOSレベルのサンドボックス技術の基礎を整理した入門記事で、実装の第一歩として参照しやすい内容になっている。
- **[An actively maintained and updated Motif fork actually exists](https://www.osnews.com/story/145877/an-actively-maintained-and-updated-motif-fork-actually-exists/)** (20pt) - 1980年代からのUNIX向けGUIツールキットMotifの、実際にメンテナンスが継続されているフォークが存在するという発見を報告する記事。レガシーUNIX環境の保守という観点で興味深い。
- **[ChatGPT now knows what you do on other websites via ad collector](https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/)** (14pt) - ChatGPTが広告収集の仕組みを通じて他サイトでの行動を把握できるようになっている実態を追った調査記事で、AIサービスとアドテクの結合によるプライバシーリスクを指摘している。

## dev.to

- **[Building With AI When You Don't Know Architecture: A Survival Guide](https://dev.to/james_anderson_h/building-with-ai-when-you-dont-know-architecture-a-survival-guide-1ma3)** - 正式なアーキテクチャの知識がないままAIの力でアプリを作る際に陥りがちな落とし穴と、それを乗り切るための実践的な考え方をまとめたサバイバルガイド。
- **[Gemma 4 on a 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l)** - 量子化認識トレーニング（QAT）済みのGemma 4 GGUFを使うことで、4GB級のノートPC GPUでもモデルサイズを9.5GiBから1.6GiBまで圧縮して動作させられることを実測した検証記事。
- **[The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)** - Flutterのウィジェットビルダーが抱える冗長さやクロージャの複雑化、context.watchの落とし穴を、コンテナとBuildContextの1:1対称性という設計で解消しようという提案。

## TechCrunch

- **[Vocci's ring adds a new form factor to meeting note-taking](https://techcrunch.com/2026/09/20/voccis-ring-adds-a-new-form-factor-to-meeting-note-taking/)** - 249ドルの指輪型デバイスで会議の音声を記録・要約するVocciを紹介する記事。常時録音するウェアラブルという形態が持つプライバシー上の懸念にも触れている。
- **[Elon Musk's latest Boring Company pitch involves a Hyperloop between Austin and San Antonio](https://techcrunch.com/2026/09/20/elon-musks-latest-boring-company-pitch-involves-a-hyperloop-between-austin-and-san-antonio/)** - Boring Companyが新たに提案したオースティン〜サンアントニオ間のハイパーループ構想を伝える記事。同社が過去に発表した大型プロジェクトの多くが実現していない点も指摘されている。
- ※ 他ソースとの重複を除いた新規記事が2件のみだった。

## Ars Technica

- **[An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)** - Googleの脅威インテリジェンスチームが、サプライチェーン攻撃を仕掛けるハッキング集団「TeamPCP」の内部にスパイを送り込んでいたことを明らかにした調査報道。
- **[Once popular for attacking AI, ASCII smuggling is embraced by spammers](https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/)** - 人間には見えないUnicodeの制御文字ブロックを使ってAIへのプロンプトインジェクションに使われていた「ASCIIスマグリング」の手法が、今度はスパム業者に転用され始めている実態を報じている。
- **[Android can now securely migrate your logins between password managers](https://arstechnica.com/gadgets/2026/09/android-can-now-securely-migrate-your-logins-between-password-managers/)** - Androidにパスワードマネージャー間でログイン情報を安全に移行できる標準機能が追加された。対応アプリはまだ少ないが、認証情報の可搬性を高める仕組みとして注目される。
- **[Republican bill would order ISPs, DNS providers, and VPNs to block piracy sites](https://arstechnica.com/tech-policy/2026/09/republican-bill-would-order-isps-dns-providers-and-vpns-to-block-piracy-sites/)** - 著作権者が裁判所命令によって海外の海賊版サイトをISP・DNSプロバイダ・VPN事業者にブロックさせやすくする法案が米議会に提出された。インターネットインフラ層への規制強化として技術的影響が大きい。
- **[Trust, not features, is the real deficit: VMware tries to appease SMBs](https://arstechnica.com/information-technology/2026/09/trust-not-features-is-the-real-deficit-vmware-tries-to-appease-smbs/)** - BroadcomによるVMware買収後の値上げ・ライセンス変更で信頼を失った中小企業顧客に対し、VMwareがVCF（VMware Cloud Foundation）偏重の戦略を見直す姿勢を示している。

## 注目トピック

今回のダイジェストで最も目立ったのは、判断・分類特化型の新AIモデル「Jev」を巡る技術者コミュニティの検証ラッシュである。単なる「Jevとは何か」という紹介記事の段階は過ぎ、確率のキャリブレーション精度（はてな）、MNISTでの定量的な性能検証（Qiita）、既存LLMや機械学習・ルールベースとの使い分け（Qiita）、分類器としての数式的定式化（Zenn）、UIコンポーネント選択への応用（はてな）など、実装・評価のフェーズに移行しているのが特徴的だった。文章生成に依存しない軽量な意思決定モデルというアプローチが、コスト・レイテンシ・データ送信ポリシーの制約が厳しいエンタープライズ用途で特に注目されている様子がうかがえる。

もう一つの軸はセキュリティで、Ars TechnicaのGoogleによるサプライチェーン攻撃グループへの潜入捜査や、AIへのプロンプトインジェクション手法だったASCIIスマグリングがスパムに転用される流れなど、攻撃手法が別の目的に横展開していく事例が目立った。AWS新着ではEC2 T8iのGAやDevOps AgentのSlack双方向対応など、開発者の日々のワークフローに直結するアップデートが中心となっている。
