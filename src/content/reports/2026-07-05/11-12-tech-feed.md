---
title: "Tech Feed ダイジェスト（2026年7月5日）"
date: "2026-07-05T11:12"
category: "summary"
summary: "「Loop Engineering」というAI開発の新潮流・Zuckerberg氏のAIエージェント進捗発言・OpenAIの米政府株式提供案・Linux epoll新CVEなど"
tags: ["ai", "agents", "security", "aws", "devops", "frontend"]
---

## はてなブックマーク (テクノロジー)

- **[NECは即決、富士通は後に土下座、シャープは「10円やったらこうたるわ」…1978年、Microsoft BASICの営業で国内メーカーを回った西和彦氏が明かす各社の反応が濃すぎる](https://togetter.com/li/2717051)** ([386users](https://b.hatena.ne.jp/entry/s/togetter.com/li/2717051)) - アスキー創業者・西和彦氏が1978年当時、Microsoft BASICのライセンス営業で国内メーカー各社を訪問した際の生々しい反応をまとめたtogetterまとめ。PC黎明期に日本のメーカーがソフトウェアの価値をどう値踏みしていたかを伝える貴重な証言。
- **[すでに4800スター、Loop Engineeringとは — "自分の仕事はloopを書くこと"](https://zenn.dev/acntechjp/articles/0c63b5b08bbdb9)** ([370users](https://b.hatena.ne.jp/entry/s/zenn.dev/acntechjp/articles/0c63b5b08bbdb9)) - AIエージェントに実装を任せきりにすると誰もコードベース全体を把握できなくなる「理解負債」を防ぐため、人間はエージェントを回す「loop」の設計に専念すべきだと説く記事。プロンプトを書く時代から、エージェントの反復サイクルそのものを設計する時代への移行を提唱している。
- **[Claude Fable 5 が使えるうちに Agent SOP を導入して整備させる](https://zenn.dev/ryu1maniwa25/articles/fable5-agent-sop-setup)** ([117users](https://b.hatena.ne.jp/entry/s/zenn.dev/ryu1maniwa25/articles/fable5-agent-sop-setup)) - サブスクプランでの提供が期間限定とされているClaude Fable 5を使って、開発チーム向けのAgent運用手順書(SOP)を今のうちに整備しておく取り組みを紹介した記事。高性能だが使える期間が限られるモデルの価値を、属人化しない仕組み作りに転換する発想が興味深い。
- **[三重県、複数部署でＵＳＢメモリーから「マルウェア」検知…６０００個以上？あり調査継続中](https://www.yomiuri.co.jp/national/20260704-GYT1T00027/)** ([76users](https://b.hatena.ne.jp/entry/s/www.yomiuri.co.jp/national/20260704-GYT1T00027/)) - 三重県庁の複数部署が使用するUSBメモリーからマルウェアが検知され、対象が6000個以上に上る可能性があるとして調査が続いている。エアギャップ運用でも媒体を介した感染経路が依然としてリスクであることを改めて示す事例。
- **[AIが稼いだお金から年間約16万円の給付金が受け取れる法案、提出される](https://www.gizmodo.jp/article/bernie-sanders-new-ai-bill-would-pay-americans-1000-a-year/)** ([69users](https://b.hatena.ne.jp/entry/s/www.gizmodo.jp/article/bernie-sanders-new-ai-bill-would-pay-americans-1000-a-year/)) - バーニー・サンダース上院議員が、AI企業の収益に課税しその一部を国民に年間1000ドル程度給付する法案を提出したと報じられた。AIによる生産性向上の恩恵をどう社会全体に再分配するかという議論が、具体的な立法プロセスに乗り始めたことを示している。

## Zenn

- **[AIに外部脳を持たせて1ヶ月運用した全記録](https://zenn.dev/nobu666/articles/ai-external-brain-digest)** - セッションをまたぐと前提や好みがリセットされてしまうAIとのやり取りに対し、外部メモリ（外部脳）を持たせて1ヶ月間運用した記録をまとめた記事。公式のメモリ機能だけでは足りない部分を、どう自前の仕組みで補ったかの実践知見が具体的に語られている。
- **[Claude Code (Opus 4.8) が数分固まる問題、188セッション実測したら原因はAPIでもネットワークでもなかった](https://zenn.dev/yuki_fujisawa/articles/a155d388e61acc)** - Claude Codeが数分間無応答になる現象について、188セッション分のログを実測して原因を特定した調査記事。体感や推測に頼らず定量的にボトルネックを切り分けるアプローチが、同様の停滞に悩む開発者にとって参考になる。
- **[コードレビュー指摘300件を3ヶ月分類したら効いていたのは2種類だけだった](https://zenn.dev/kenimo49/articles/code-review-300-comments-2-effective-categories)** - AIレビューの増加でレビュー疲れがピークに達したことをきっかけに、3ヶ月分・300件のレビュー指摘を分類し直し、実際に効果があったのはバグ指摘とスペック関連の2種類だけだったと結論づけた記事。指摘の量ではなく質を見極める視点の重要性を数字で裏付けている。
- **[【速報】Claude Sonnet 5のReact習熟度はOpus 4.8に匹敵](https://zenn.dev/uhyo/articles/react-profession-bench-9)** - Claude Fable 5の復活とほぼ同時にリリースされたClaude Sonnet 5のReact実装能力をベンチマークした記事。コストパフォーマンスに優れるSonnet系がOpus 4.8に匹敵する習熟度を示した一方、Sonnetらしい軽快さがやや薄れた印象も報告されている。
- **[無料でSAR衛星画像を見る！Sentinel-1で始める0冊目の入門書](https://zenn.dev/syu_tan/books/sentinel-1-introduction)** - 欧州の地球観測衛星Sentinel-1が撮影する合成開口レーダー(SAR)画像を、無料のCopernicus Browserで手軽に眺めるための入門書。雲や夜間でも観測できるSARの基礎知識と、実際に画像を探す手順が短くまとめられている。

## Qiita

- **[Claude Code で HTML を出力する際に CSS フレームワークを指定すると便利](https://qiita.com/QUANON/items/db3defd280f765c135ec)** - Claude Codeに成果物を出力させる際、プレーンテキストやMarkdownではなくCSSフレームワーク指定付きのHTMLで出力させると、ブラウザでそのまま見やすく確認できるという実用的なTipsを紹介した記事。
- **[AWS DevOps Agent・FinOps Agent・Security Agent を一通り試したので振り返る](https://qiita.com/infra365/items/7e7c49b86a766b2e2c74)** - AWSが提供するフロンティアエージェント群（DevOps Agent、FinOps Agent、Security Agent）を1ヶ月ほど検証した内容をまとめた振り返り記事。各エージェントの得意領域と現時点での実用度を横断的に比較できる内容になっている。
- **[量子コンピュータを完全に理解したい人のためのロードマップ](https://qiita.com/optimisuke/items/a2463fab85ee9778847c)** - 量子コンピュータの学習をゼロから進めるためのロードマップをシリーズ化した入門記事。専門用語の壁で挫折しがちな分野を、段階的に理解を積み上げていく構成で整理している。
- **[Claude Codeの dataviz スキルが凄かった](https://qiita.com/leomarokun/items/74212606fbf4f01d82dd)** - Claude Codeに同梱されているdatavizスキルを使い、配色やマークの太さを一切自分で決めずに売上ダッシュボードを生成した体験を紹介した記事。データ可視化のデザイン判断までエージェントに任せられる範囲が広がっていることを示す一例。
- **[AI時代のコードレビューUI。CodeRabbit Reviewの機能と使い方](https://qiita.com/goofmint/items/ed4aad3960dfed58f4aa)** - AI支援開発時代に合わせたコードレビューUIを提供するCodeRabbit Reviewの画面操作と機能を、実際の動きに沿って解説した記事。AIが生成する大量の指摘をどう人間が効率的に捌くかという、レビューUI側からのアプローチを示している。

## AWS 新着

- **[Amazon SageMaker Unified Studio now supports Terraform for provisioning](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-sagemaker-unified-studio-terraform/)** (2026-07-02) - SageMaker Unified StudioのプロジェクトリソースをTerraformでプロビジョニングできるようになった。OSS版のterraform-aws-sagemaker-unified-studioモジュールが提供され、既存のTerraformベースのIaC運用にML基盤を組み込みやすくなる。
- **[Amazon SageMaker HyperPod now supports AMI versioning and auto-patching](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-sagemaker-hyperpod-ami-version-auto-patch)** (2026-07-02) - 大規模モデル学習基盤のSageMaker HyperPodが、クラスタ全体のAMIバージョンを可視化し、ワークロードを止めずにセキュリティパッチを自動適用できるようになった。長期間稼働するGPUクラスタのメンテナンス負荷を下げる機能。
- **[AWS CloudFormation and CDK express mode speeds up infrastructure deployments by up to 4x](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cloudformation-cdk/)** (2026-06-30) - CloudFormationとCDKに追加された「express mode」により、インフラのデプロイ時間が最大4倍高速化された。頻繁にスタックを更新する開発サイクルにおいて、デプロイ待ち時間が開発体験に与える影響を大きく減らせる。
- **[Amazon ECS now supports configurable deployment circuit breaker settings](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-circuit-breaker-settings/)** (2026-07-01) - ECSのデプロイサーキットブレーカーの発動条件を細かく設定できるようになった。デプロイ失敗とみなす基準を環境ごとにチューニングできるようになり、誤検知によるロールバックを減らしやすくなる。
- **[Amazon RDS Enhances IAM Database Authentication with Connection Rate Scaling](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-rds-iam/)** (2026-06-30) - RDSのIAMデータベース認証において、インスタンスのリソースに応じて接続レートを動的にスケールできるようになった。トラフィック急増時にIAM認証がボトルネックになりにくくなる改善。

## Lobsters

- **[Bad Epoll (CVE-2026-46242)](https://github.com/J-jaeyoung/bad-epoll)** (34pt) - Linuxのepollまわりに存在する脆弱性CVE-2026-46242の技術的な詳細とPoCをまとめたGitHubリポジトリ。カーネルの根幹に近い部分に潜む脆弱性の発見・検証プロセスが具体的に示されている。
- **[Returning to Zig](https://gracefulliberty.com/articles/return-to-zig/)** (54pt) - 一度Zigから離れた開発者が再びZigに戻ってきた理由を綴ったエッセイ。言語の成熟度やエコシステムの変化を踏まえ、他言語と比較した上での再評価を行っている。
- **[Better Models: Worse Tools](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/)** (28pt) - FlaskやRuffの作者としても知られるArmin Ronacher氏が、AIモデルの性能が上がるほど、その周辺のツール群の設計がかえって雑になりがちだと指摘するエッセイ。モデルの賢さに頼りすぎて、ツール自体の使いやすさへの配慮が疎かになる傾向を批判している。
- **[Immich v3.0.0 Released](https://immich.app/blog/v3.0.0-release)** (25pt) - セルフホスト型の写真・動画管理サービスImmichがメジャーバージョン3.0.0をリリースした。Google PhotosやiCloud代替として人気のOSSプロジェクトの大型アップデートで、新機能や性能改善が多数含まれている。
- **[Dark mode with web standards](https://olliewilliams.xyz/blog/dark-mode/)** (12pt) - JavaScriptに頼らず、CSSの`light-dark()`関数や`color-scheme`プロパティなどWeb標準機能だけでダークモードを実装する方法を解説した記事。フレームワーク非依存でシンプルに実現できる手法がまとめられている。

## dev.to

- **[Stop running a JVM just to mock an API in your CI pipeline](https://dev.to/amazia_gur_fd339831499743/stop-running-a-jvm-just-to-mock-an-api-in-your-ci-pipeline-44i4)** - CIパイプラインでAPIモックのためだけにWireMockのフルJVMコンテナを起動する重量級の構成を見直し、より軽量な代替手段に切り替える方法を提案した記事。起動待ち時間がCIの体感速度を大きく左右する問題を扱っている。
- **[Code review can't keep up with AI. Build a verification layer instead.](https://dev.to/nhirschfeld/code-review-cant-keep-up-with-ai-build-a-verification-layer-instead-1oh4)** - 「AIが書きAIがレビューするなら人間のコードレビューは不要」という主張に対し、人間の目視レビューの代わりに自動検証レイヤーを構築すべきだと論じる記事。AI生成コードの急増にレビュー体制がついていけなくなっている現状への処方箋を提示している。
- **[Unity MCP: Bridging AI Assistants with Unity for Automated Game Development](https://dev.to/pneumetron/unity-mcp-bridging-ai-assistants-with-unity-for-automated-game-development-297l)** - Model Context Protocol(MCP)を使ってAIアシスタントとUnityエディタを接続し、ゲーム開発作業を自動化するUnity MCPプロジェクトの最新動向を紹介する記事。ツールセットの拡充と安定性向上が継続的に進んでいる様子が伝えられている。
- **[Shipping one Manifest V3 extension to Chrome, Edge, and Firefox from a single source](https://dev.to/aialleyway/shipping-one-manifest-v3-extension-to-chrome-edge-and-firefox-from-a-single-source-cep)** - 権限ゼロのシンプルなManifest V3拡張機能を、単一のソースコードからChrome・Edge・Firefoxの3ストアに展開した経験を紹介する記事。ブラウザごとの差異を吸収しながら1つのコードベースを維持する実践的な工夫が語られている。
- **[Context Mode Review 2026 — The Missing Half of the AI Agent Context Problem](https://dev.to/yihui_zhang_d783406caddd7/context-mode-review-2026-the-missing-half-of-the-ai-agent-context-problem-9g3)** - トークンが肥大化してから圧縮するのではなく、そもそも肥大化させない設計を目指すオープンソースのMCPベースのコンテキスト管理システム「Context Mode」をレビューした記事。AIエージェントのコンテキスト管理問題を予防的に解決するアプローチとして紹介されている。

## TechCrunch

- **[Mark Zuckerberg tells staff that AI agents haven't progressed as quickly as he'd hoped](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/)** - Meta社内の会議で、マーク・ザッカーバーグCEOがAIエージェントの開発進捗が期待したほど早くないと発言したと報じられた。巨額投資を続ける大手テック企業のトップ自らが、AIエージェントの実用化ペースへの懸念を認めた発言として注目されている。
- **[Meta quietly launches vibe-coded gaming app Pocket](https://techcrunch.com/2026/07/02/meta-quietly-launches-vibe-coded-gaming-app-pocket/)** - Metaが、テキストプロンプトからインタラクティブなミニゲームを生成・共有できる実験的アプリ「Pocket」をひっそりとリリースした。いわゆる「バイブコーディング」を一般消費者向けプロダクトに組み込む大手企業の事例として興味深い。
- **[Midjourney wants Hollywood studios to reveal the details of their AI usage](https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/)** - ハリウッドの映画スタジオ3社との著作権訴訟の中で、画像生成AI企業Midjourneyが逆にスタジオ側のAI利用実態の開示を求めていると報じられた。AI企業対コンテンツ産業の訴訟が、双方のAI活用状況を明るみに出す展開になっている。
- **[Politician who investigated spyware abuses had his phone hacked with Pegasus spyware](https://techcrunch.com/2026/07/02/politician-who-investigated-spyware-abuses-had-his-phone-hacked-with-pegasus-spyware/)** - スパイウェアの濫用を調査する立場にあったEU議員自身が、NSO GroupのPegasusスパイウェアで政府系顧客にスマートフォンをハッキングされていたことが判明した。監視技術の悪用を追及する側が標的にされるという、皮肉な構図が浮き彫りになっている。
- **[Jersey Mike's IPO illustrates how bad the AI hype has become](https://techcrunch.com/2026/07/02/jersey-mikes-ipo-illustrates-how-bad-the-ai-hype-has-become/)** - サンドイッチチェーンJersey Mike'sのIPO目論見書にまでAIへの言及が含まれていたことを皮肉交じりに指摘する記事。事業内容とは無関係な企業までAI関連の記述を盛り込まざるを得ない、市場のAI熱の過熱ぶりを象徴する事例として紹介されている。

## Ars Technica

- **[Trump gets OpenAI to offer US 5% stake, far lower than Sanders' target](https://arstechnica.com/tech-policy/2026/07/openai-floats-giving-us-5-stake-to-win-over-ai-haters/)** - トランプ政権の働きかけを受け、OpenAIが米国政府に5%相当の株式を提供する案を示したと報じられた。AI企業への課税・出資を求めるサンダース上院議員らの提案よりかなり低い水準で、政府とAI企業の関係構築を巡る駆け引きが続いている。
- **[Ars Live recap: When are the big rockets NASA desperately needs going to be ready?](https://arstechnica.com/space/2026/07/ars-live-recap-when-are-the-big-rockets-nasa-desperately-needs-going-to-be-ready/)** - NASAが計画に必要としている大型ロケットの開発状況を専門家が議論したArs Liveイベントの振り返り記事。商業パートナーへの依存度が高まる中、スケジュール遅延のリスクがどこにあるのかが論点となっている。
- **[Plex debuts 5-year membership pass for $250](https://arstechnica.com/gadgets/2026/07/250-used-to-get-you-a-lifetime-plex-pass-now-you-get-a-five-year-subscription/)** - メディアサーバーソフトPlexが、かつて買い切りだった「ライフタイムパス」を廃止し、250ドルで5年間有効な会員パスに切り替えた。セルフホスト型サービスでも継続的な収益モデルへの移行が避けられなくなっている実情を示している。
- **[Tesla sales increase by 25% in Q2 2026](https://arstechnica.com/cars/2026/07/tesla-sales-increase-by-25-in-q2-2026/)** - Teslaの2026年第2四半期の販売台数が前年同期比25%増加したと報じられた。EV市場での逆風が指摘され続けてきた中での増加であり、需要動向を巡る評価が分かれている。

## 注目トピック

今日最も広がりを見せたのは「Loop Engineering」という言葉で語られる、AI開発における人間の役割の再定義だ。はてなブックマークで370usersを集めた解説記事は、コードが人間の読解速度を超えて生成され続ける現在、個々のプロンプトを磨くのではなく、エージェントを回す「loop」そのものを設計することこそが仕事になると説く。Zennでは実際にAgent SOPを整備する試み(117users)や、Claude Codeの停滞原因を188セッション実測で突き止める調査、コードレビュー300件の効果検証など、エージェントの生産物や挙動を「検証・運用設計する」側に回る実践知見が相次いだ。dev.toの「Code review can't keep up with AI」も、人間による目視レビューではなく検証レイヤーの構築を訴えており、AIに実装を任せる範囲が広がるほど、人間の関心は「書く」から「回し方を設計し検証する」へと移りつつある。

もう一つの軸は、AIブームの過熱と実態のギャップだ。TechCrunchでは、Meta社内会議でマーク・ザッカーバーグCEO自身が「AIエージェントの進歩は期待したほど早くない」と語ったと報じられた一方、同じMetaがバイブコーディングによるミニゲーム生成アプリ「Pocket」をひっそりとリリースしており、投資と実装の勢いが必ずしも噛み合っていない様子がうかがえる。サンドイッチチェーンJersey Mike'sのIPO目論見書にまでAI言及が含まれていたという指摘や、OpenAIが米国政府への5%株式提供を検討していると報じられたことも、AIを巡る資本と政治の駆け引きが実装の中身以上に加速していることを示している。セキュリティ面でも、Linuxのepollに関する新たなCVE、三重県庁のUSBメモリー経由のマルウェア検知、スパイウェア濫用を調査していた当のEU議員自身がPegasusで盗聴されていた一件が並び、AIだけでなく地道な脅威対応の重要性も変わらず高いままだ。
