---
title: "Tech Feed ダイジェスト（2026年7月25日）"
date: "2026-07-25T10:43"
category: "summary"
summary: "ChromeがCtrl+GショートカットをGemini起動用に無断で奪う挙動が波紋、政府のアジャイル検討会や生成AIガイドライン整備などガバナンス系の話題も目立った一日"
tags: ["ai", "security", "aws", "devops", "golang"]
---

## はてなブックマーク (テクノロジー)

- **[『生成AIガイドライン、誰か作って』と言われたときに読む実務メモ](https://zenn.dev/gangy/articles/0c6c2153784bd8)** ([144users](https://b.hatena.ne.jp/entry/s/zenn.dev/gangy/articles/0c6c2153784bd8)) - 現場で「AIガイドラインを作って」と丸投げされがちな担当者向けに、何を検討し何を明文化すべきかを整理した実務メモ。ゼロから作る際の論点の抜け漏れを防ぐチェックリスト的な内容として読まれている。
- **[AIが迷わず仕事を進められる「型」の作り方 〜10の工夫と638セッションの実測〜](https://note.com/chan_san_jp/n/n137415f2ef48)** ([129users](https://b.hatena.ne.jp/entry/s/note.com/chan_san_jp/n/n137415f2ef48)) - AIエージェントが指示のたびに迷わず作業を進められるよう、638セッション分の実測データをもとに指示・コンテキストの「型」を10の工夫としてまとめた記事。感覚論ではなく実測に基づく再現性のあるプロンプト設計を志向している。
- **[アジャイル開発に関する有識者検討会（第7回）｜デジタル庁](https://www.digital.go.jp/councils/procurement-agile-opensource/agile-review-meeting/46a036e6-a531-4655-b146-76a1d340feb5)** ([115users](https://b.hatena.ne.jp/entry/s/www.digital.go.jp/councils/procurement-agile-opensource/agile-review-meeting/46a036e6-a531-4655-b146-76a1d340feb5)) - 政府の情報システム調達におけるアジャイル開発・オープンソース活用のあり方を議論する有識者検討会の第7回資料。官公庁システムの調達プロセスに民間のアジャイル慣行をどう組み込むかが継続的な論点になっている。
- **[AI時代のエンジニアリングマネージャーのあり方｜外部品質編 〜品質の可視化を、現場と経営をつなぐ形にするまで〜](https://zenn.dev/loglass/articles/ef099b123153cf)** ([100users](https://b.hatena.ne.jp/entry/s/zenn.dev/loglass/articles/ef099b123153cf)) - AIによる実装が高速化する中で、外部品質（バグ数やユーザー影響など）をどう可視化し、現場のエンジニアリング判断と経営層の意思決定を橋渡しするかを論じたEM向けの実践記事。
- **[Building verification loops in Claude Code with skills](https://claude.com/blog/building-verification-loops-in-claude-code-with-skills)** ([55users](https://b.hatena.ne.jp/entry/s/claude.com/blog/building-verification-loops-in-claude-code-with-skills)) - Anthropic公式が、Claude CodeのSkills機能を使ってエージェントの出力を自己検証させる「検証ループ」の組み方を解説した記事。生成結果を鵜呑みにせずエージェント自身にチェックさせる設計パターンを公式ベストプラクティスとして提示している。

## Zenn

- **[2bitに量子化したKimi K2.7 CodeにMac Studio 1台で$69,875を稼いでもらった](https://zenn.dev/hellohazime/articles/kimi_k27_code_swelancer_local)** - オープンウェイトモデルKimi K2.7 Codeを2bit量子化してMac Studio1台のローカル環境で動かし、SWE系のフリーランスタスクベンチマークで約7万ドル相当を「稼がせた」検証記録。クラウドAPIに頼らずローカルの量子化モデルだけで実用レベルの成果を出せることを示した事例。
- **[Go 1.27 から uuid 実装がサポートされる！ので個人的に気になった議論とその着地をまとめてみた](https://zenn.dev/layerx/articles/f7124d4e761c1f)** - Go 1.27で標準サポートされることになったUUID実装を巡り、提案段階でどのような設計議論（バージョン選択やAPI形状など）が交わされ、最終的にどう着地したかを追った記事。標準ライブラリ入りの過程を追える内容。
- **[1-bit LLM「Bonsai」活用ガイド — 1.15GB で動く 8B モデルをローカルで使い倒す](https://zenn.dev/tkou15/articles/bonsai-1bit-llm-guide)** - Caltech発スタートアップPrismMLが発表した1-bit LLMファミリー「Bonsai」を実際にローカルで動かす活用ガイド。8Bクラスのモデルがわずか1.15GBに収まり、省メモリ環境でもLLMを動かせる選択肢として紹介している。
- **[エンジニアの成果、結局どう測ればいいのか](https://zenn.dev/awesome_kou/articles/engineer-performance-metrics)** - 「PRを120個マージしました」的な定量報告だけでは成果を語れないというジレンマを起点に、エンジニアの評価軸をどう設計すべきかを論じた記事。AIによる実装量の増加で評価がさらに難しくなっている現状を踏まえている。
- **[検索画面のUI設計で、バックエンドエンジニアが早めに口出しすべき3つのこと](https://zenn.dev/ncdc/articles/6c8eabde83cf0a)** - 「とりあえずあいまい検索で」「並び替えは全部入れましょう」といった検索UI要件が後からバックエンドの実装コストを膨らませがちな問題について、設計初期段階でバックエンドエンジニアが指摘すべき3つの論点を整理した記事。

## Qiita

- **[MCPサーバの`GET /mcp`を200で返したら、Cloudflareの無料枠10万リクエストが7時間で溶けた話](https://qiita.com/viva_tweet_x/items/3ff94aa7a63392e56d20)** - MCPサーバーのヘルスチェック用エンドポイントを安易に200で返す実装にしたところ、意図せぬ大量アクセスを誘発しCloudflareの無料リクエスト枠が7時間で枯渇した実体験。MCPサーバー公開時のレート制御の重要性を痛感させる事例。
- **[JenkinsでGitHub Copilot CLIにPRを自動レビューさせる ― E2BIG・プロンプトインジェクション・トークン地獄との戦い](https://qiita.com/jqit-yukiono/items/21c54529410ba960c388)** - JenkinsパイプラインからGitHub Copilot CLIを呼び出しPR差分を自動レビューさせる仕組みを構築する中で直面した、コマンドライン引数の上限（E2BIG）、プロンプトインジェクション対策、トークン消費量の肥大化といった実運用上の障壁とその対処法をまとめた記事。
- **[AIエージェントに長期記憶を足す前に ── 「精度が上がる」の数字は、いま誰も再現できていない](https://qiita.com/outcast_zari/items/416f0c9841c9292de226)** - AIエージェントに長期記憶を持たせると精度が上がるとされる各種ベンチマークの数字が、実は誰も追試で再現できていないと指摘する批判的な記事。長期記憶機構を導入する前に、その効果測定の妥当性自体を疑うべきだという問題提起。
- **[Copilot Studio 高額請求（100倍）に注意！（2026年8月現在）](https://qiita.com/mnoda/items/aa4d7599cdffe0423472)** - Microsoft Copilot Studioで、指定するLLMのグレード（Basic/Standard/Premium）によって同じ問い合わせでも料金が最大100倍に跳ね上がるケースがあると注意喚起する記事。モデル選択が想定外のコスト増につながるリスクを実例とともに解説している。
- **[[rclone] LinuxでOneDriveをファイルシステムに「ちゃんと」マウントする](https://qiita.com/alpaca-honke/items/745df317fc4778e8a5fb)** - LinuxデスクトップでOneDriveをファイルシステムとしてマウントする際、定番のabraunegg/onedriveでは同期が不安定だったため、rcloneを使ってより安定した構成に切り替えた実践記録。

## AWS 新着

- **[AWS Network Load Balancer now supports Listener Rules for custom traffic routing](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-network-load-balancer-supports-listener-rules/)** (2026-07-22) - NLB（Network Load Balancer）がリスナールールに対応し、送信元IPアドレスなどの条件に応じて異なるターゲットグループへ接続を振り分けられるようになった。従来ALBでしかできなかった細かいルーティング制御がL4でも可能になる。
- **[Amazon MWAA now supports Apache Airflow version 2.11.2](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-mwaa-now-supports-apache-airflow-version-2-11-2)** (2026-07-24) - マネージドAirflowサービスAmazon MWAAが最新のApache Airflow 2.11.2に対応した。データパイプライン運用者は最新版の機能改善やバグ修正をマネージド環境上で利用できるようになる。
- **[AWS Lambda durable functions now supports customer managed key encryption](https://aws.amazon.com/about-aws/whats-new/2026/07/durablefunctions-cmk/)** (2026-07-22) - Lambda durable functionsの実行データを、AWS KMSのカスタマー管理キー（CMK）で暗号化できるようになった。ステートフルな長時間実行ワークフローにおいても、鍵管理をAWSアカウント側で完全にコントロールできる。
- **[Amazon SES simplifies sending emails over SMTP using Mail Manager](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ses-simplified-smtp-mail-manager)** (2026-07-24) - Amazon SESが、Mail Manager経由でSMTPメール送信を行う際のコンソール設定を簡素化した。従来複雑だったSMTP送信の初期セットアップが少ないステップで完結するようになった。
- **[Amazon Corretto July 2026 Quarterly Updates](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-corretto-july-2026-quarterly-updates)** (2026-07-22) - AmazonのOpenJDKディストリビューションCorrettoの2026年7月期の四半期セキュリティ・重要アップデートが公開された。LTS版・機能リリース版の双方が対象で、本番稼働中のJavaランタイムの定期パッチ適用が求められる。

## Lobsters

- **[Chrome's breaking and entering](https://unsung.aresluna.org/chromes-breaking-and-entering/)** (46pt) - Chromeが利用者の許可なくMac上のCtrl+Gショートカットを乗っ取り、コーディングエディタ内でさえChrome版Geminiのポップアップを強制的に起動するようになっていたと告発する記事。しかもこの挙動を無効化するには設定の奥深くまで潜る必要があり、ブラウザによる「不法侵入」的なUXだと厳しく批判している。
- **[We Are Not Special](https://www.hillelwayne.com/post/we-are-not-special/)** (16pt) - ソフトウェアエンジニアリングは他の工学分野と比べて特殊だという思い込みに反論するエッセイ。橋の設計途中で始点・終点を動かさない土木エンジニアの例などを引きながら、要件変更への耐性のなさは「ソフトウェアだけの宿命」ではないと論じている。
- **[the perils of parsing type inference declarations in c](https://sebsite.pw/w/20260725-auto.html)** (6pt) - C23で追加された`auto`による型推論宣言を巡り、外側スコープの同名typedefとの衝突時にGCCとClangで解釈が食い違うパース上の落とし穴を実例のコードで検証した記事。同じCコンパイラでも文法の解釈がここまでずれる具体例として興味深い。
- **[I'm running the ICFP programming contest (2026)](https://eieio.games/blog/im-running-the-icfp-programming-contest/)** (5pt) - 第29回ICFPプログラミングコンテストを主催した著者が、AIエージェント全盛の時代に「無人エージェントを72時間ループさせるだけ」が勝ち筋にならないよう腐心して設計した経緯を綴った記事。コンテスト設計自体がAI時代への対応を迫られている。
- **[A Love Letter to Object Orientation](https://blog.mempko.com/a-love-letter-to-object-orientation/)** (4pt) - クラス階層としてのオブジェクト指向が廃れた一方で、「インターネットそのものがオブジェクト指向システムである」という本来の思想は見失われたと説く記事。著者が開発する「Abject」プロジェクトを通じ、AI時代にこそオブジェクト指向の本質的な価値を再評価しようとしている。

## dev.to

- **[I Fabricated a Claim About LLM Judges. Then I Ran the Apology Experiment.](https://dev.to/zxpmail/i-fabricated-a-claim-about-llm-judges-then-i-ran-the-apology-experiment-3ke6)** - 著者自身がLLM Judge（AIによる評価者）に関する主張をあえて捏造し、その誤りを指摘された際にLLMがどう「謝罪」するかを検証した実験記事。AI評価システムの信頼性と誤り訂正プロセスの脆さを自己言及的に浮き彫りにしている。
- **[Stop letting your coding agent claim "pixel-perfect". Make it prove 97.49%.](https://dev.to/hongnoul/stop-letting-your-coding-agent-claim-pixel-perfect-make-it-prove-9749-f4f)** - コーディングエージェントがブラウザも開かずに「ピクセルパーフェクト」と自己申告する現状に対し、実際にスクリーンショット比較などで数値的に検証させるべきだと説く記事。エージェントの自己申告を鵜呑みにしない検証プロセスの重要性を訴えている。
- **[ML Without Magic: Building a Tiny Language Model in Pure Node.js and Watching Every Weight Change](https://dev.to/maktordev/ml-without-magic-building-a-tiny-language-model-in-pure-nodejs-and-watching-every-weight-change-5dfh)** - TensorFlowやPyTorchなどのフレームワークを一切使わず、トークナイズから埋め込み、Transformer、逆伝播までを素のNode.jsだけで実装し、重みの変化を1つずつ観察できる小さな言語モデルを構築した教育的な記事。
- **[The AI wrote it. But you still own it.](https://dev.to/dip_032d2fe1959e1990ddbb1/the-ai-wrote-it-but-you-still-own-it-1hdn)** - AIエージェントがほぼ全て書いたPRを目の前にした著者が、コードの品質自体は問題なくても「所有者」としての責任は変わらないと再認識した体験を綴ったエッセイ。AI生成コードのレビュー責任の所在を問い直している。
- **[From Raw Tickets to Verified Context: An AI-Driven Pipeline for GitHub Issues](https://dev.to/lbobylev/from-raw-tickets-to-verified-context-an-ai-driven-pipeline-for-github-issues-l40)** - サポートに届く粗いチケット情報を、AIエージェントが検証済みのコンテキストに整形してからGitHub Issueへ変換するパイプラインを構築した記事。問題の本質は「コードの質」より「入力データの質」にあるという指摘が起点になっている。

## TechCrunch

- **[I tried out OpenAI's new AI keypad](https://techcrunch.com/2026/07/24/i-tried-out-openais-new-ai-keypad-which-will-be-fun-for-coders-and-slightly-mystifying-to-everyone-else/)** - OpenAIが発表した専用AIキーパッドの実機レビュー記事。コーディングなど特定用途のユーザーには便利な一方、一般利用者には使いどころが分かりにくいハードウェアだと評されている。
- **[Prentis, new AI lab co-founded by Reid Hoffman, Mark Pincus in talks to raise $100M](https://techcrunch.com/2026/07/24/prentis-new-ai-lab-co-founded-by-reid-hoffman-mark-pincus-in-talks-to-raise-100m/)** - LinkedIn共同創業者Reid HoffmanらがPC操作の自動化に賭ける新興AIラボPrentisが、1億ドルの資金調達交渉に入ったと報じられた。コーディングよりも「日常的なPC作業の自動化」がAIの次の主戦場になるとの見立てが背景にある。
- **[US accuses American of allegedly wiping his phone using a 'duress' password during border search](https://techcrunch.com/2026/07/24/us-accuses-american-of-allegedly-wiping-his-phone-using-a-duress-password-during-border-search/)** - 米国境検査で当局にパスコードを開示した米国市民が、実はデータを消去する「デュレスパスワード（強制下パスワード）」を使ったと当局から告発された事件。デバイスのプライバシー保護機能と国境検査の権限がぶつかる事例として注目されている。
- **[Bluesky's AI assistant Attie expands into an open social research tool](https://techcrunch.com/2026/07/24/blueskys-ai-assistant-attie-expands-into-an-open-social-research-tool/)** - BlueskyのAIアシスタント「Attie」が、AT Protocol上の他アプリも含めたニュースやトレンドについて質問できるオープンなソーシャルリサーチツールへと機能を拡張した。
- **[India's move against Jack Dorsey's Bitchat sparks legal debate](https://techcrunch.com/2026/07/24/indias-move-against-jack-dorseys-bitchat-sparks-legal-debate/)** - Jack Dorsey氏が手がけるオフラインメッセージングアプリ「Bitchat」がニューデリーの抗議活動下で人気を集めたことを受け、インド当局が規制に動き、通信の自由を巡る法的論争を呼んでいる。

## Ars Technica

- **[Wildfire forces evacuation of NASA's Deep Space Network complex in Spain](https://arstechnica.com/space/2026/07/wildfire-forces-evacuation-of-nasas-deep-space-network-complex-in-spain/)** - スペインにあるNASAの深宇宙探査通信網（Deep Space Network）の施設が山火事により避難を余儀なくされたと報じられた。地球規模の通信インフラが気候由来の災害リスクに晒されている実例。
- **[Judge rebuffs Trump admin demand for phone records from NYT reporters](https://arstechnica.com/tech-policy/2026/07/judge-rebuffs-trump-admin-demand-for-phone-records-from-nyt-reporters/)** - トランプ政権がニューヨーク・タイムズ記者の携帯電話記録の開示を求めた件について、裁判所がその要求を退けたと報じられた。報道の自由とプライバシー保護を巡る政府と報道機関の緊張関係が続いている。
- **[This is the world's most advanced robotic servicing satellite—that we know about](https://arstechnica.com/space/2026/07/this-is-the-worlds-most-advanced-robotic-servicing-satellite-that-we-know-about/)** - 軌道上の衛星を修理・給油するロボティック・サービシング衛星の最新機体を紹介した記事。宇宙空間でのメンテナンス技術が民生・軍事双方で急速に高度化している様子を伝えている。
- **[Robot snakes searched for Venezuela earthquake survivors in collapsed buildings](https://arstechnica.com/gadgets/2026/07/robot-snakes-searched-for-venezuela-earthquake-survivors-in-collapsed-buildings/)** - ベネズエラの地震で倒壊した建物内の生存者捜索に、狭い隙間を這って進める「ロボット蛇」が投入された事例を紹介した記事。災害救助ロボティクスの実戦投入が進んでいる。
- **[Rocket Report: Lightning strikes in China; Starship launch on deck](https://arstechnica.com/space/2026/07/rocket-report-lightning-strikes-in-china-starship-launch-on-deck/)** - 中国のロケット施設への落雷トラブルや、SpaceXの次期Starship打ち上げ準備状況などをまとめた定例のロケット業界動向レポート。

## 注目トピック

今回目立ったのは、企業や政府によるルール・ガイドライン整備が複数の角度から話題になったことだ。はてなブックマークでは「生成AIガイドライン、誰か作って」と丸投げされた際の実務メモが144usersを集め、デジタル庁のアジャイル開発有識者検討会の資料も115usersと注目された。Qiitaでは、AIエージェントに長期記憶を持たせる効果を裏付けるベンチマーク数値が実は誰も再現できていないという批判的な指摘や、Copilot StudioでLLMのグレード選択が原因で料金が100倍に跳ね上がるという注意喚起があり、AIを業務に組み込む上での「測定できない効果」「見えにくいコスト」への警戒がにじんでいる。dev.toでも、コーディングエージェントの「ピクセルパーフェクト」という自己申告を鵜呑みにせず数値で検証させるべきだという主張があり、AIの成果物を人間がどう検証するかという課題が各ソースで反復して現れている。

もう一つの軸は、大手プラットフォームによる利用者の意思を無視した挙動への反発だ。Lobstersで最も読まれたのは、Chromeが利用者の許可なくMac上のCtrl+GショートカットをGemini起動用に奪い、しかも無効化するには設定の奥深くまで潜る必要があるという告発記事で、「UIの不法侵入」と厳しく評されている。TechCrunchでも、米国境検査で「デュレスパスワード」使用を告発された市民の事件や、インドでのBitchat規制を巡る法的論争が報じられており、プラットフォームや国家権力とユーザーの権利・プライバシーとの摩擦が、ブラウザの挙動からオフライン通信アプリの規制まで幅広い場面で表面化した一日だった。
