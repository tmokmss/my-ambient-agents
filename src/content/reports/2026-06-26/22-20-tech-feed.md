---
title: "Tech Feed ダイジェスト（2026年6月27日）"
date: "2026-06-26T22:20"
category: "summary"
summary: "カスタムシリコン競争激化・Auroraコスト逆転・メインフレーム離脱失敗・PostgreSQL再評価・NYT vs Microsoft著作権訴訟"
tags: ["ai", "llm", "security", "aws", "database", "hardware", "frontend", "devtools", "zig", "agents"]
---

## はてなブックマーク (テクノロジー)

- **[メインフレーム離脱プロジェクトの7割超が失敗、理由は「生成AIの過大評価」](https://www.itmedia.co.jp/enterprise/articles/2606/25/news052.html)** ([82users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/enterprise/articles/2606/25/news052.html)) - 調査会社が報告した大規模研究によると、メインフレームからクラウド/モダンシステムへの移行プロジェクト70%以上が失敗しており、その主因は「生成AIが複雑なレガシーコードの自動変換を担える」という過信だという。実際にはCOBOLの暗黙知や業務ルールをAIが把握できず、人手のリエンジニアリングが依然として必要であることが浮き彫りになっている。

- **[インスタンスサイズを「上げた」のに、Auroraのコストが「下がった」話 - Timee Product Team Blog](https://tech.timee.co.jp/entry/2026/06/26/155400)** ([75users](https://b.hatena.ne.jp/entry/s/tech.timee.co.jp/entry/2026/06/26/155400)) - AuroraのインスタンスをアップサイズするとI/Oコストが劇的に下がり総合コストが逆転した実例報告。メモリ増量でバッファキャッシュヒット率が上昇し、ストレージI/O課金が激減する「Aurora I/O最適化」の機序が実測値付きで解説されており、クラウドDBコスト最適化の盲点を突く内容として注目を集めた。

- **[個人の資産運用、AIチャットで完結　銀行28社連合が28年度にも実現へ - 日本経済新聞](https://www.nikkei.com/article/DGXZQOUB246DY0U6A620C2000000/)** ([69users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOUB246DY0U6A620C2000000/)) - 三菱UFJや三井住友など国内銀行28社が連携し、預金・投資信託・保険などの横断的な資産運用をAIチャット一本で完結させるプラットフォームを2028年度に提供開始する方向で調整中と報道された。Open Banking APIと生成AIを組み合わせたフィンテックが大手銀行連合として動き出す点が画期的で、各社の顧客データを横断活用する枠組みの法的設計が注目される。

- **[「アラーティング」の話をしよう — SREconや論文等の最先端とのギャップをみる](https://speakerdeck.com/yuukit/alerting-in-the-wild)** ([36users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/yuukit/alerting-in-the-wild)) - SREcon登壇資料とアカデミック論文を参照しながら、現場のアラーティング実践が「アラート疲弊を防ぐ設計」「SLOベース通知」「マルチウィンドウ閾値」といった理論的最先端からどれだけ乖離しているかを分析したスライド。実際の運用現場でよく見られるアンチパターンと改善のヒントが整理されており、SRE実践者に刺さる内容だ。

- **[スマホでも213tok/sの爆速推論を実現するモデル「LFM2.5-230M」無料公開](https://pc.watch.impress.co.jp/docs/news/2120513.html)** ([19users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2120513.html)) - Liquid AIが開発した230Mパラメータの超小型モデル「LFM2.5-230M」がモバイル端末で毎秒213トークン生成を実現しながら、同サイズのTransformerモデルを大幅に上回る精度を達成したと発表された。Transformer以外のアーキテクチャ（Liquid Neural Networks）が実用的なエッジAI推論に展開できることを示す重要な実証例だ。

## Zenn

- **[【Claude Code × OpenTelemetry】Splunk でエージェント・スキル・モデル別にコストを確認する方法](https://zenn.dev/yukurash/articles/19ece516497d40)** - Claude Codeでサブエージェントやスキルを多数動かす際のAPI費用内訳をSplunkで可視化する構成を解説した記事。OTelコレクタを介してエージェントID・スキル名・使用モデルのディメンションをメトリクスに付与し、ダッシュボードで「どのエージェントが費用を食っているか」を特定できるようにした実践報告であり、Claude Codeの組織運用コスト管理の先行事例として価値が高い。

- **[AI時代のコードレビューは人に向けるな、仕組みに向けろ](https://zenn.dev/manalink_dev/articles/ai-coding-era-review-to-dev-process-not-human)** - AIが実装コードの大半を生成する時代に「特定の人の書き方を指摘するレビュー」は意味を失い、CIパイプラインやlintルール・型チェック・テスト設計として「仕組みに向けたレビュー」へシフトすべきだという提言。AI生成コードが増えるほどレビューの目的がスタイル指摘から設計・仕様の確認に純化する変化の本質を鋭く言語化している。

- **[ローカルのGit差分をGitHub風UIでレビューできる「difit」を使ってみた](https://zenn.dev/rescuenow/articles/535533464da3cf)** - CLIツール「difit」はローカルの`git diff`をGitHubの「Files changed」タブに酷似したブラウザUIでレビューできるツール。CIなしでもPRレビュー相当の視認性が得られるため、AIが大量生成したコードを1コミットずつ丁寧に確認したい場合に特に有用で、AIコーディング時代の「セルフレビュー」ワークフローの改善ツールとして紹介されている。

- **[マイクラを声で動かそうとしたら令和の「ピカチュウげんきでちゅう」になった話](https://zenn.dev/m2lab/articles/koe-craft-agent-amivoice)** - MinecraftをAmiVoice音声認識APIとLLMエージェントで音声操作するMODを自作した開発記録。「前に進む」「木を切る」などの自然言語命令をリアルタイム認識してMinecraft APIに変換するパイプラインの実装詳細が面白い。AI音声エージェントをゲームエンジンに統合するアイデアの具体的な実装例として、ゲーム×AI開発に関心ある読者の参考になる。

- **[Unity 6時代にUniTaskはまだ必要か？Awaitable登場後の使い分けを整理する](https://zenn.dev/gamedev_toollab/articles/1c793e678197f9)** - Unity 6で公式に強化されたAwaitable（Unity標準の非同期API）とUniTaskの性能・機能・適用シーンを比較した記事。AllocationフリーなUniTaskの優位性が依然として残るケースと、AwaitableだけでカバーできるシーンがUnityバージョン別の実測データで整理されており、Unityゲーム開発の非同期設計の最新指針として実用的だ。

## Qiita

- **[BigQueryでグラフ分析ができる！新しい「Graph」機能をSNSデータの例で試してみた](https://qiita.com/ta-ito0611/items/432725de703dc4b644aa)** - BigQueryに追加されたGraph分析機能を使い、SNSのフォロー関係を表現するグラフデータを定義してページランクや最短経路を標準SQLで計算する実験記事。グラフDBを別途用意せずBigQueryの中でグラフクエリが完結するため、既存のデータウェアハウス基盤でネットワーク分析が可能になる点が評価されている。

- **[【Frontend CSS – パート14】Style Query・Container Naming・実践パターンまで徹底解説](https://qiita.com/tuanphan/items/5179c23d9b5a25ceeb2f)** - CSS Style Queryを使って親要素のカスタムプロパティ値に応じて子要素のスタイルを切り替えるテクニックを、Container Namingと組み合わせた実践パターンで解説した記事。JavaScriptを一切使わずCSSのみで「状態に応じたコンポーネントスタイリング」を実現する手法として、モダンCSSの表現力の広がりを示す内容だ。

- **[Chrome DevTools for Agentsのトークン消費・実行時間をplaywright-cliと比べてみた](https://qiita.com/y-mae/items/170cd4566e4ad01f969e)** - ChromeのAIエージェント向けDevTools拡張とPlaywright CLIを使ってブラウザ操作タスクを実行した際のLLMトークン消費量・レイテンシ・成功率を比較検証した実験報告。DevTools統合によりDOM構造の解釈精度が向上する一方でトークン消費が増加するトレードオフが数値で示されており、AIブラウザ自動化の選定基準として参考になる。

- **[Copilot+ PCを1年使った結果、NPUよりメモリ増やした方が幸せになる](https://qiita.com/miyakiyo/items/34960d2014bb09cf9952)** - Qualcomm Snapdragon X EliteのNPUを搭載したCopilot+ PCを1年間実務で使った感想として、NPU専用機能よりも大容量メモリによるキャッシュ効率とマルチタスク性能の向上の方がローカルLLM実行に実用的な差をもたらすという結論が述べられている。ローカルAI実行機器の購入指針として、スペック宣伝と実用体験のギャップを正直に報告した内容だ。

## AWS 新着

- **[Amazon EC2 R8g instances now available in additional regions](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-r8g-instances-additional-regions/)** (2026-06-26) - Graviton4搭載のメモリ最適化インスタンスR8gが追加リージョンで利用可能になった。前世代R7gに比べてメモリ帯域幅・CPUパフォーマンスが大幅に改善されており、大規模インメモリDBや推論ワークロードをARM Gravitonで動かす選択肢が広がる。

- **[Amazon Redshift adds Reserved Instance upfront pricing options for RG instances](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-redshift-ri-upfront-pricing-rg-instances)** (2026-06-25) - RedshiftのGraviton4世代インスタンス（RGシリーズ）に対して1年・3年の前払いReserved Instanceが購入可能になった。最大75%のコスト削減が見込め、DWH基盤の長期コスト固定が可能になることで本番環境への採用加速が期待される。

- **[AWS Backup enhances Amazon S3 backup copy performance](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-backup-amazon-s3-copy-enhancement/)** (2026-06-25) - AWS BackupによるS3バックアップのクロスリージョンコピー速度が大幅に向上した。大量オブジェクトを持つバケットのコピー時間が短縮され、DR要件のRPO達成がより現実的になるアップデートだ。

- **[AWS GovCloud (US) now offers US-based, US citizen 24/7 technical support for all customers by default](https://aws.amazon.com/about-aws/whats-new/2026/06/default-govcloud-us-based-support/)** (2026-06-25) - GovCloud利用のすべての顧客に対し、米国在住・米国市民のサポートエンジニアによる24時間サポートがデフォルトで提供されるようになった。高機密環境でのAWS利用におけるサプライチェーンリスクへの懸念に応えた措置で、DoD向け製品の調達要件を満たしやすくなる。

## Lobsters

- **[Anatomy of a Failed (Nation-State?) Attack](https://grack.com/blog/2026/06/25/dissecting-a-failed-nation-state-attack/)** (32pt) - 国家レベルと思われる攻撃者による侵入試行の痕跡を技術的に解剖したブログ記事。TTP（戦術・技術・手順）の分析からインフラの特徴・コマンドのパターン・失敗した理由までが詳述されており、国家支援型APT攻撃の実際の手口と防御観点を学べる希少な一次情報として高く評価されている。

- **[All you need is PostgreSQL](https://ebellani.github.io/blog/2026/all-you-need-is-postgresql/)** (33pt) - キューイング・イベントストリーミング・全文検索・ベクトル検索・グラフクエリなど、専用サービスに切り出しがちな機能がPostgreSQLの拡張機能（pgvector・pg_cron・pg_partman等）でカバーできることを実例で示した記事。マイクロサービスの複雑さを増やす前にPostgres一本で解決できないか再考する視点は、過度な分散化への反省としてLobstersコミュニティに刺さった。

- **[SPIR-V Backend Progress](https://ziglang.org/devlog/2026/#2026-06-26)** (27pt) - ZigコンパイラのSPIR-Vバックエンド（GPU/Vulkanシェーダー向けコード生成）の実装進捗を報告した公式devlog。ZigでGPUシェーダーをネイティブに書けるようになる可能性を示すマイルストーンで、システムプログラミング言語がグラフィクスパイプラインまでカバーする展望が具体化しつつある。

- **[swsim: A software SIM card](https://github.com/tomasz-lisowski/swsim)** (26pt) - ハードウェアSIMカードをC言語でソフトウェアエミュレートするOSSプロジェクト。SIM Application Toolkit（STK）・UICC仕様・通信プロトコルをすべてソフトウェアで再現しており、IoTデバイスのeSIM/iSIM開発・通信スタックのテスト・セキュリティ研究に活用できる低レイヤー実装として注目を集めている。

- **[Design Patterns Suck](https://luminousmen.com/post/design-patterns-suck/)** (19pt) - GoFデザインパターンを機械的に適用することへの批判的考察。パターンはコンテキストを無視した強制適用によって過度な抽象化・間接層の増大・コードの読みにくさを招くと論じており、「パターン名が会話に出てきたら問題のサインかもしれない」という主張が議論を呼んだ。AI生成コードがパターンを過剰適用しがちな現代に改めて読む価値がある。

## dev.to

- **[The $30,000 Claude bill and what it means for SL teams](https://dev.to/induwara_ashinsana_9e4d5b/the-30000-claude-bill-and-what-it-means-for-sl-teams-kem)** - チームがClaude APIを制限なく使い始めて月3万ドルの請求が届いた実体験をもとに、コスト上限設定・使用量モニタリング・モデル選択戦略（高価なOpusを安価なHaikuで代替できるタスクの分類）を論じた記事。AIツールのコスト管理が事業リスクになりうることを示す生々しい事例として注目されている。

- **[96% of cuBLAS, no `unsafe`: what cuTile Rust proves](https://dev.to/creeta/96-of-cublas-no-unsafe-what-cutile-rust-proves-4ldp)** - NVIDIAのCUDA行列演算ライブラリcuBLASの96%の性能を`unsafe`コードなしのRustで実現したcuTileプロジェクトの技術解説。CUDAカーネルのメモリ安全な代替実装がここまで性能に近づけることを示しており、GPUコンピューティング領域でのRustの実用性向上を裏付けるベンチマーク結果として機械学習エンジニアとRust開発者の双方から注目された。

- **[The Langfuse migration that cost us a sprint: how I now budget LLM observability](https://dev.to/jasmine_park_dev/the-langfuse-migration-that-cost-us-a-sprint-how-i-now-budget-llm-observability-ane)** - LLMトレーシングツールをLangfuseに移行した際にスプリントを丸ごと消費してしまった失敗談と、移行後のLLM可観測性コスト管理の方法論。トレースのサンプリング設定・ストレージコスト上限・メトリクスの取捨選択など、LLMオブザーバビリティを本番で維持するための実践的な設計判断がまとめられている。

- **[I let my AI agent provision cloud infra. Then I made sure it couldn't go bankrupt doing it.](https://dev.to/vdalal/i-let-my-ai-agent-provision-cloud-infra-then-i-made-sure-it-couldnt-go-bankrupt-doing-it-g1p)** - AIエージェントにTerraformを通じてクラウドインフラを自律プロビジョニングさせた際に、エージェントが不必要に高価なリソースを起動しないよう予算ガードレールを実装した実践報告。コスト上限をツール定義に埋め込み・Infracostで差分評価・自動承認ポリシーを組み合わせることで「自律しつつも破産しないエージェント」を実現した手法が具体的なコード付きで紹介されている。

## TechCrunch

- **[Why everyone from OpenAI to SpaceX is building their own chips (and turning up the heat on Nvidia)](https://techcrunch.com/video/why-everyone-from-openai-to-spacex-is-building-their-own-chips-and-turning-up-the-heat-on-nvidia/)** (2026-06-26) - OpenAI・SpaceX・Google・Amazonなどがそれぞれ独自AIチップ開発に乗り出している理由と、それがNvidiaの支配的地位に与える影響を分析した動画記事。TCO最適化・Nvidia依存リスクの分散・特定ワークロードへの特化という動機が重なり、カスタムシリコンへの投資がビッグテックの共通戦略になりつつあることを整理している。

- **[Russian hackers were behind $2.5B hack of Jaguar Land Rover: Report](https://techcrunch.com/2026/06/26/russian-hackers-were-behind-2-5-billion-hack-of-jaguar-land-rover-report/)** (2026-06-26) - ジャガー・ランドローバーを標的にしたサイバー攻撃の被害総額が25億ドルに達し、ロシア系ハッカーグループが関与していると報告された。車載ソフトウェア・サプライチェーンシステム・設計データの窃取を組み合わせた高度な攻撃で、自動車メーカーがNation-State攻撃の主要ターゲットになっている現状を示す。

- **[It's not about Anthropic vs. OpenAI anymore](https://techcrunch.com/2026/06/26/its-not-about-anthropic-vs-openai-anymore/)** (2026-06-26) - AI業界の競争軸が「AnthropicとOpenAIのどちらが優れたモデルを出すか」から、エージェントプラットフォーム・エンタープライズ統合・規制対応・ハードウェア垂直統合という多次元の戦いに移行しているとTechCrunchが分析。今後の勝者はモデル単体の性能ではなくエコシステム構築力で決まるという視点は、AIスタートアップ投資と開発者戦略の両面に示唆を与える。

- **[TikTok's road to becoming a super app](https://techcrunch.com/2026/06/26/tiktoks-road-to-becoming-a-super-app/)** (2026-06-26) - TikTokがライブコマース・決済・地図・予約機能を段階的に統合してWeChat型スーパーアプリを目指す戦略を解説した分析記事。米国でのTikTok存続問題が落ち着いた後に加速している機能拡張が整理されており、プラットフォームが単なる動画アプリからOS的存在になるロードマップの全容が見えてくる。

## Ars Technica

- **[NYT slams Microsoft for building copyright-infringing supercomputer for OpenAI](https://arstechnica.com/tech-policy/2026/06/microsoft-built-supercomputer-to-help-openai-infringe-copyrights-nyt-alleged/)** (2026-06-26) - New York Timesが著作権侵害訴訟の訴状を更新し、MicrosoftがOpenAIのために構築した大規模スーパーコンピュータが著作権保護コンテンツの大規模学習を目的として設計・運用されたと主張した。個別モデルへの訴訟からインフラ提供者（Microsoft）まで責任を拡大しようとする法的戦略は、AI学習データの法的責任範囲をめぐる重要な前例となる可能性がある。

- **[Russian citizens told 「switch to Android」 after Apple blocks key Russian apps](https://arstechnica.com/gadgets/2026/06/russian-citizens-told-switch-to-android-after-apple-blocks-key-russian-apps/)** (2026-06-26) - 制裁強化を受けてAppleがロシア国内の主要アプリ（金融・地図・政府サービス等）をApp Storeから削除したことを受け、ロシア当局が国民にAndroid端末への切り替えを推奨し始めた。モバイルエコシステムが地政学的ツールとして機能する典型例で、AppleのApp Store管理権限が事実上の経済制裁手段になっていることを示している。

- **[Ars Live: What's the latest in the aftermath of the New Glenn catastrophe?](https://arstechnica.com/space/2026/06/ars-live-whats-the-latest-in-the-aftermath-of-the-new-glenn-catastrophe/)** (2026-06-26) - Blue Originの大型ロケット「New Glenn」の失敗事故後の調査状況と打ち上げ計画への影響をArs Technicaが詳報した。SpaceXの事実上の独占が続く軌道投入市場において、New Glennの失敗がBlue Originの商業打ち上げサービス参入スケジュールと顧客への影響をどう変えるかが議論されている。

- **[FCC accused of hiding Chairman Carr's messages with DOGE and Musk](https://arstechnica.com/tech-policy/2026/06/fcc-accused-of-hiding-chairman-carrs-messages-with-doge-and-musk/)** (2026-06-26) - 電子フロンティア財団（EFF）などがFCCに対し、Carr委員長とDOGE・イーロン・マスクとのやり取りを情報公開法（FOIA）請求に基づいて開示するよう求めているにもかかわらず、FCCが記録を隠蔽していると非難した。通信規制機関とテック億万長者の不透明な関係が監視される中、AI・通信インフラ政策の決定過程への疑念が高まっている。

## 注目トピック

本日のフィードを横断して浮かび上がる最大のテーマは**「AIコストの現実と持続可能性」**だ。月3万ドルのClaude請求書・Langfuse移行に費やしたスプリント・インフラコスト上限を設けないAIエージェントの暴走という複数の実体験記事が並び、AI活用の「実験フェーズ」から「本番コスト管理フェーズ」への移行が現場レベルで進んでいることがわかる。Claude Code × OpenTelemetryによるモデル別コスト可視化も同じ文脈にあり、AIツールを「使う」から「測って最適化する」への成熟が共通したテーマとして見えてくる。

もう一つの大きな流れは**「カスタムシリコンとアーキテクチャの多様化」**だ。OpenAI・SpaceXをはじめ大手テック企業が独自チップ開発に走る動きが整理された一方、LFM2.5-230MのTransformer外アーキテクチャがモバイルで高性能を示し、ZigがGPUシェーダー（SPIR-V）バックエンドを実装し、cuTile RustがcuBLASの96%性能をunsafeなしで達成した。単一アーキテクチャへの依存を脱する動きがハードウェア・コンパイラ・言語の各レイヤーで同時進行しており、次世代コンピューティング基盤の多元化が着実に進んでいる。セキュリティ面ではNation-State攻撃の解剖・ジャガー・ランドローバーへの25億ドル被害・Appleによるロシアアプリ遮断と、技術インフラが地政学的緊張の最前線であり続けていることが改めて際立つ週となった。
