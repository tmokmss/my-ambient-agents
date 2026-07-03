---
title: "Tech Feed ダイジェスト（2026年7月4日）"
date: "2026-07-03T22:15"
category: "summary"
summary: "curlがAIスロップ脆弱性報告を停止・エージェント型ランサムウェア初事例・EKSバージョンロールバック・T-MobileのVMware離脱など"
tags: ["ai", "security", "aws", "agents", "devops", "kubernetes", "browser"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Code「Fable 5」にローカルLLM用シェル支援CLIを作らせたら、コードより仕事の進め方に驚かされた](https://zenn.dev/gys/articles/fable5-local-llm-ask-cli)** ([153users](https://b.hatena.ne.jp/entry/s/zenn.dev/gys/articles/fable5-local-llm-ask-cli)) - Claude Code「Fable 5」にローカルLLM操作用のシェル支援CLIを実装させた過程を時系列ログとして再構成した記事。完成したツールそのものより、要件が曖昧な状態からエージェントがどう仕事を進めていったかというプロセス自体に驚かされたという内容。
- **[LPI-Japan、「Linuxサーバー構築標準教科書」のUbuntu版を公開](https://cloud.watch.impress.co.jp/docs/news/2121848.html)** ([123users](https://b.hatena.ne.jp/entry/s/cloud.watch.impress.co.jp/docs/news/2121848.html)) - LPI-Japanが「Linuxサーバー構築標準教科書」の対象ディストリビューションにUbuntuを追加し無償公開した。長年CentOS系を前提としてきた教材がUbuntu環境でも使えるようになり、初学者向けのLinux学習リソースの選択肢が広がる。
- **[Windows 11プレビューパッチ、すぐ適用すべき。SSDが数十GB消費される不具合解消](https://pc.watch.impress.co.jp/docs/news/2122217.html)** ([110users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2122217.html)) - Windows 11のプレビューパッチ適用後にSSD容量が数十GB消費される不具合が報告されていたが、最新の更新プログラムで修正された。同様の不具合に悩まされていたユーザーは早めの適用が推奨される。
- **[19年以上見過ごされていたLinux kernelのゼロデイ脆弱性を報告した話：CVE-2026-43456](https://gmo-cybersecurity.com/blog/19-year-old-linux-kernel-zero-day/)** ([58users](https://b.hatena.ne.jp/entry/s/gmo-cybersecurity.com/blog/19-year-old-linux-kernel-zero-day/)) - 19年以上見過ごされてきたLinuxカーネルのゼロデイ脆弱性(CVE-2026-43456)を発見・報告した経緯を解説したセキュリティブログ。長期間放置されていた脆弱性が実際にどう発見されたのか、調査プロセスが詳しく述べられている。
- **[史上初の「エージェント型ランサムウェア」感染事例の報告](https://gigazine.net/news/20260703-ai-agent-ransomware/)** ([13users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260703-ai-agent-ransomware/)) - AIエージェントが自律的に暗号化・脅迫までを実行する「エージェント型ランサムウェア」の感染事例が史上初めて報告された。人間の攻撃者の指示を介さずエージェントが攻撃工程を自動化する新たな脅威モデルとして注目されている。

## Zenn

- **[Snowflakeの開発にCoCo(旧Cortex Code)をおすすめする理由](https://zenn.dev/dataheroes/articles/why-coco-for-snowflake-dev)** - Snowflake専用のAIコーディングエージェントCoCo(旧Cortex Code)が、汎用コーディングエージェントと何が違うのかを実務者視点で整理した記事。Snowflakeのメタデータやコンテキストを理解した上で提案してくる点が、汎用エージェントとの違いとして具体的に説明されている。
- **[遅いのは SQL だと思ったら、別のところにあった](https://zenn.dev/dress_code/articles/postgres-distinct-on-nested-loop)** - PostgreSQLのクエリが遅いと疑ってDISTINCT ONやネステッドループを調査したものの、実際のボトルネックは別の箇所にあったという原因究明の記録。「SQLが遅い」という思い込みで真因を見誤りやすい典型例が具体的に示されている。
- **[AgentCore で Agent をプロダクション利用する際の実装ノウハウ (AWS Summit Japan 2026)](https://zenn.dev/aws_japan/articles/006-aws-specialist-agent)** - AWS Summit Japan 2026のブースで発表された、Bedrock AgentCoreを使ってAIエージェントを本番運用する際の実装ノウハウをまとめた記事。デモや検証止まりになりがちなエージェント基盤を、実際のプロダクション環境で運用するための勘所が整理されている。
- **[Claude Code の質問ダイアログが勝手にタイムアウトするのを無効化する](https://zenn.dev/ytkdm/articles/claude-code-askuserquestion-timeout)** - Claude Codeの選択式質問ダイアログ(AskUserQuestion)が60秒で自動的にタイムアウトしてしまう挙動に対し、その無効化方法を解説した記事。作業中に離席しがちなユーザーにとって地味だが実用的なTipsとしてまとまっている。
- **[優秀な人ばかりなのに、組織が重い ── AI時代に複利で膨らむ『認識負債』の話](https://zenn.dev/canly/articles/0c01a3124b8480)** - 技術負債よりも厄介な「認識負債」、すなわち同じ言葉を使っていても話が噛み合わない状態が、AI時代に複利的に膨らんでいくと論じたエッセイ。AIによる開発速度の向上が、暗黙の前提共有という組織的な課題をより深刻化させているという指摘。

## Qiita

- **[curlが7月の脆弱性報告をまるごと停止、AIスロップが優秀になった逆説](https://qiita.com/okssusucha/items/d17ac3c49e568266123d)** - curlの作者Daniel Stenberg氏が、7月中の脆弱性報告受付を一時停止すると発表した。AIが生成する脆弱性報告の質が「優秀すぎて」逆に人力での精査コストが跳ね上がったことが背景にあり、AI生成レポートの氾濫がOSSメンテナンス業務を圧迫している実態を伝えている。
- **[AWS Summit 2026 参加レポート（少し遅め）](https://qiita.com/Seria_GovCloud/items/a4b65334ea45ceff4a24)** - 3回目のAWS Summit参加となる筆者による振り返りレポート。基調講演ではAWSのAIエージェント戦略の全体像が語られ、AWSジャパン社長やOpenAI Japanの関係者も登壇するなど、クラウド大手とAI企業の連携が加速している様子が現場目線で伝えられている。
- **[バイブコーディングで本当にアプリはリリースできるのか？エンジニアが実際にアプリをリリースして感じたこと](https://qiita.com/yutaka_kozuka/items/cc3be5930b972130885d)** - AI英語学習アプリをバイブコーディングでゼロから開発し、Web・iOS App Storeの両方でリリースした実体験記。「できるにはできたが、商用かつセキュアという条件では非エンジニアにはまだ厳しい」という率直な感想が、バイブコーディングの現在地を示している。
- **[ブラウザバージョンによるレイアウト崩れにハマった話](https://qiita.com/kitooth666/items/caf9c5553b49661d3a85)** - 特定のブラウザバージョンでのみ発生するレイアウト崩れの原因を、CSSネストやhas()疑似クラスなど複数の仮説を検証しながら特定していった調査記録。手元で再現しない不具合の原因切り分けの進め方が実践的にまとまっている。
- **[手順不足と知識不足は分けて考えた方がいいと思う話](https://qiita.com/shige-h/items/97d9d9b7ed0064f7433e)** - メンバーが作業でつまずいた際、安易に「手順書を詳しくする」対応に走ると、実は知識不足が原因だった場合に問題が解決しないと指摘する記事。原因を手順と知識に切り分けて考えるべきだという、チーム運営における基本的だが見落とされがちな視点を提示している。

## AWS 新着

- **[Amazon EKS now supports Kubernetes version rollback](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-version-rollback)** (2026-07-01) - Amazon EKSでKubernetesクラスタのバージョンアップグレードに失敗した際、以前のバージョンへロールバックできるようになった。これまでアップグレード失敗時の復旧手段が限られていた運用上のリスクが大きく軽減される。
- **[Amazon GuardDuty adds sensitive file modification threat detections](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-sfm/)** (2026-07-01) - GuardDuty Runtime Monitoringに、機密ファイルが改ざんされた際に検知する脅威検出機能が3種類追加された。認証情報ファイルや設定ファイルへの不正な書き換えを、実行時監視の一環として自動的に警告できるようになる。
- **[Amazon Bedrock AgentCore increases default runtime quota limits](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-bedrock-agentcore-increases-default-runtime-quota-limits/)** (2026-07-01) - Bedrock AgentCoreのランタイムのデフォルトクォータ上限が引き上げられた。エージェント型ワークロードの本番規模でのスケールアウトが、上限緩和申請を待たずに進めやすくなる。
- **[AWS AppConfig launches managed experimentation tools for A/B testing](https://aws.amazon.com/about-aws/whats-new/2026/6/aws-appconfig-experimentation/)** (2026-07-01) - AWS AppConfigにA/Bテストとフィーチャーフラグをマネージドで扱える実験機能が追加された。実験の設計から結果分析までを既存のAppConfig基盤内で完結できるようになり、外部の実験基盤を別途用意する必要が減る。
- **[Amazon ECS Express Mode now supports custom task definitions](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-express-mode-custom-task-def/)** (2026-07-01) - シンプルな設定で素早くデプロイできるECS Express Modeが、カスタムタスク定義に対応した。手軽さを保ちながら細かいコンテナ設定の柔軟性も確保できるようになり、Express Modeの適用範囲が広がる。

## Lobsters

- **[Clickhouse is winning the Observability Wars](https://matduggan.com/clickhouse-is-winning-the-observability-wars/)** (49pt) - 高カーディナリティなログ・メトリクス処理においてClickHouseがオブザーバビリティ基盤のデファクトになりつつある理由を分析した記事。専用のオブザーバビリティ製品ではなく汎用の列指向DBが選ばれる流れを、コストとクエリ柔軟性の両面から説明している。
- **[Why implementing ActivityPub is hard, and why it doesn't have to be](https://hackers.pub/@fedify/2026/why-activitypub-is-hard)** (33pt) - 分散SNSプロトコルActivityPubの実装がなぜ難しいとされるのか、その原因と実装を簡単にするためのアプローチをFedifyの開発者が解説。仕様の曖昧さと相互運用性の要求が実装の複雑さを生んでいる構造を整理している。
- **[Arbitrary code execution breaking sandboxes in KDE Plasma](https://blog.kimiblock.top/2026/07/01/arbitrary-code-execution-in-kde-plasma/)** (33pt) - KDE Plasmaデスクトップ環境のサンドボックス機構を回避し任意コード実行に至る脆弱性を検証したセキュリティ記事。デスクトップ環境が提供する隔離機構の実装不備が、想定より広い攻撃対象領域を残していたことを示している。
- **[Diving into the depths of Widevine L3](https://neodyme.io/en/blog/widevine_l3)** (20pt) - GoogleのDRM技術Widevine L3のソフトウェア実装を解析したリバースエンジニアリング記事。動画配信サービスが依存するコンテンツ保護の仕組みが実際にどう動いているかを、内部構造から丹念に読み解いている。
- **[Fixing full-bleed CSS](https://dbushell.com/2026/07/03/fixing-full-bleed-css/)** (13pt) - コンテナ幅を超えて画面いっぱいに要素を配置する「full-bleed」レイアウトを、モダンCSSでシンプルに実現する手法を解説した記事。従来negative marginやJavaScriptで対処しがちだった問題を、CSSの新しい機能だけで解決している。

## dev.to

- **[The dual-write problem in NestJS, solved with Drizzle: a transactional outbox + idempotent inbox](https://dev.to/rodrigobnogueira/the-dual-write-problem-in-nestjs-solved-with-drizzle-a-transactional-outbox-idempotent-inbox-462l)** - DBへの書き込みとメッセージキューへの発行を同時に行う際に生じる「デュアルライト問題」を、NestJSとDrizzle ORMを使ったトランザクショナルアウトボックスパターンとべき等インボックスで解決する実装記事。イベント駆動アーキテクチャにおける一貫性保証の定番パターンが具体的なコードで示されている。
- **[How We Vectorize 33.7M Ukrainian Court Decisions via Voyage AI](https://dev.to/overthelex/how-we-vectorize-337m-ukrainian-court-decisions-via-voyage-ai-3hlc)** - ウクライナの全裁判判決3370万件をVoyage AIの埋め込みモデルでベクトル化し、Qdrantで検索可能にした事例。法律文書という長大かつ専門用語の多いテキストを大規模にRAG化する際のチャンク分割や埋め込み選定の実践知見がまとめられている。
- **[Scrape Google Trends Without an API Key (Including the Scraper Flag Google Hands You)](https://dev.to/scrapemint/scrape-google-trends-without-an-api-key-including-the-scraper-flag-google-hands-you-8o7)** - 公式APIが存在しないGoogle Trendsのデータを、サイトが内部で使っているキーレスのJSON APIを利用して取得する手法を解説した記事。ラッパーライブラリがすぐ陳腐化する中、内部APIを直接叩くアプローチの実装ノウハウが示されている。
- **[Engineering Geofencing: Lessons in Android Battery and Location Accuracy](https://dev.to/haseebthedev0/engineering-geofencing-lessons-in-android-battery-and-location-accuracy-2li)** - Androidアプリでジオフェンシング機能を実装する際に直面したバッテリー消費と位置精度のトレードオフを、実体験を交えて解説した記事。常時位置情報を取得する機能特有の、精度とリソース消費のバランス調整のノウハウがまとめられている。
- **[Textparser – High-performance C parsing engine using Python-compiled grammars](https://dev.to/boris_barbulovski/textparser-high-performance-c-parsing-engine-using-python-compiled-grammars-5e4k)** - Pythonでコンパイルした文法定義を使い、C言語で高速に動作するテキストパーサー・AST生成ライブラリ「textparser」を紹介する記事。文法定義のしやすさと実行速度を両立させる設計アプローチが具体的に示されている。

## TechCrunch

- **[The only AI glossary you'll need this year](https://techcrunch.com/2026/07/03/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/)** - ハルシネーションやRAG、エージェントなど、AI関連の専門用語が氾濫する中でよく使われる用語をまとめた用語集記事。急速に語彙が増え続けるAI分野の情報を追いかける非専門家・入門者向けのリファレンスとして機能する。
- **[The browser wars aren't about search anymore — here are the best alternatives to Chrome and Safari](https://techcrunch.com/2026/07/03/as-the-browser-wars-heat-up-here-are-the-hottest-alternatives-to-chrome-and-safari-in-2026/)** - 検索エンジンのデフォルト設定争いだった従来のブラウザ戦争が、AI機能の統合を軸にした競争へと変化していることを踏まえ、ChromeやSafariに代わる主要な選択肢を紹介する記事。AIネイティブなブラウザが新たな差別化要素になりつつある状況が読み取れる。
- **[The Dune keypad device can be your meeting controller and more](https://techcrunch.com/2026/07/03/the-dune-keypad-device-can-be-your-meeting-controller-and-more/)** - 3つのボタンだけを持ち、開いているアプリに応じて機能が切り替わる物理コントローラー「Dune」を紹介する記事。会議アプリではミュート切り替えなどのショートカットとして機能するなど、コンテキストに応じて役割を変えるハードウェアの一例。
- **[Private space pilots are flying orbital missions for the US Space Force](https://techcrunch.com/2026/07/02/private-space-pilots-are-flying-orbital-missions-for-the-us-space-force/)** - True AnomalyとRocket Labが、米宇宙軍向けに衛星同士が接近するランデブー飛行のミッションを民間企業として実施していると報じられた。軍事宇宙作戦の一部が民間の宇宙企業に委託される流れが進んでいることを示す事例。
- **[Chevy built an all-American EV truck — why is nobody buying it?](https://techcrunch.com/2026/07/03/chevy-built-an-all-american-ev-truck-why-is-nobody-buying-it/)** - 米国製にこだわって開発されたシボレーのEVピックアップトラック「Silverado EV」が、期待された販売台数に届いていない現状を分析したレビュー記事。EVピックアップという新市場が抱える価格・充電インフラ面の課題を具体的に指摘している。

## Ars Technica

- **[T-Mobile moving tens of thousands of virtual machines off VMware amid lawsuit](https://arstechnica.com/information-technology/2026/07/t-mobile-moving-tens-of-thousands-of-virtual-machines-off-vmware-amid-lawsuit/)** - T-MobileがBroadcom買収後のVMwareのライセンス方針を巡る訴訟の渦中で、数万台規模の仮想マシンをVMware環境から移行させていると報じられた。大企業の脱VMwareの動きが、価格面だけでなく法的対立にまで発展している実態を示している。
- **[Rocket Report: Indian startup nears first launch; SpaceX's millenary milestone](https://arstechnica.com/space/2026/07/rocket-report-indian-startup-nears-first-launch-spacexs-millenary-milestone/)** - インドの新興ロケット企業が初打ち上げに近づいている状況や、SpaceXが打ち上げ回数の節目を迎えたことなど、週刊のロケット業界動向をまとめた定期連載記事。商業宇宙開発の担い手が欧米以外にも広がりつつある様子が伝えられている。
- **[Inside the Luddite festival harnessing Gen Z's rage against Big Tech](https://arstechnica.com/culture/2026/07/inside-the-luddite-festival-harnessing-gen-zs-rage-against-big-tech/)** - ビッグテックへの反発を掲げるZ世代が集う「ラッダイト・フェスティバル」を取材した記事。スマートフォンやAIサービスへの依存に疲弊した若い世代が、テクノロジーとの距離の取り方を模索する社会的な動きとして紹介されている。
- **[NASA chief praises progress Blue Origin is making after launch failure](https://arstechnica.com/space/2026/07/nasa-chief-praises-progress-blue-origin-is-making-after-launch-failure/)** - 打ち上げ失敗を経験したBlue Originに対し、NASA長官がその後の改善の進捗を評価する発言をしたと報じられた記事。商業宇宙開発における失敗からの回復力が、政府側からどう評価されているかを示している。
- **[Visiting the stars (and planets, and telescopes) in VR](https://arstechnica.com/culture/2026/07/smithsonian-starstruck-vr-exhibit-lets-you-stroll-through-the-stars/)** - スミソニアン博物館が開催するVR展示「Starstruck」を体験したレポート記事。望遠鏡や惑星をVR空間で歩き回りながら学べる展示は、教育コンテンツとしてのVR活用の具体例となっている。

## 注目トピック

今日目立つのは、AIエージェントに実行権限を与えることの「検証コスト」がいよいよ限界に近づいている兆候だ。curlの作者は、AIが生成する脆弱性報告があまりに"優秀"になった結果、真贋の見極めに人力の精査コストがかかりすぎるとして7月中の報告受付を一時停止した。同時にGigazineは史上初とされる「エージェント型ランサムウェア」の感染事例を報じ、Lobstersでは KDE Plasma のサンドボックス機構を突破する任意コード実行の脆弱性が話題を集めた。AIが自律的にコードを書き、報告し、時には攻撃までこなす範囲が広がるほど、人間側の検証設計と隔離設計の両方がその速度に追いつけなくなりつつある構図が、複数のソースから浮かび上がる。

もう一つの軸は、クラウド側がAIエージェントの本番運用を支えるインフラ整備を淡々と進めている点だ。AWSはBedrock AgentCoreのデフォルトクォータ引き上げを発表し、GuardDutyには機密ファイルの改ざんを検知する新機能が加わった。Amazon EKSのKubernetesバージョンロールバック対応も、失敗を前提とした運用改善の一環と言える。その一方で、19年以上見過ごされてきたLinuxカーネルのゼロデイ脆弱性がはてなブックマークで話題になったことは、自動化がどれだけ進んでも、地道な人力によるコード監査の価値が薄れるわけではないことを改めて示している。
