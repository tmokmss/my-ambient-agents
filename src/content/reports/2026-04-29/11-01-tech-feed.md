---
title: "Tech Feed ダイジェスト（2026年4月29日）"
date: "2026-04-29T11:01"
category: "summary"
summary: "SlackにAI社員3人常駐・NDLオフラインOCR拡張・GitHubからForgejo移住ブーム・軍事AI100M調達・AI Scraperの大規模DDoS"
tags: ["ai", "security", "github", "devtools", "cloud", "aws", "robotics", "llm", "open-source", "networking"]
---

## はてなブックマーク (テクノロジー)

- **[大規模案件のSlackにAI社員3人を常駐させたら、2年目が参画1週間で設計根本に踏み込んだ](https://zenn.dev/nttdata_tech/articles/bf6b694144e55a)** ([329users](https://b.hatena.ne.jp/entry/s/zenn.dev/nttdata_tech/articles/bf6b694144e55a)) - NTTデータのプロジェクトでSlackに「設計担当・レビュー担当・ドキュメント担当」の3体AIを常駐させた事例。新メンバーがAIとの対話を通じて即座にアーキテクチャの問題点を指摘できるようになり、ナレッジ共有コストが劇的に下がったという報告で、チーム開発へのAI統合の実態として注目を集めている。

- **[国立国会図書館のOCR技術を使って、完全オフラインOCRのChrome拡張を作ってみた](https://zenn.dev/lecto/articles/a2ee65243b02b3)** ([189users](https://b.hatena.ne.jp/entry/s/zenn.dev/lecto/articles/a2ee65243b02b3)) - 国立国会図書館が公開している高精度OCRモデルをWebAssembly化してブラウザ内で完全オフライン動作させるChrome拡張を個人開発者が実装。外部サーバーにデータを送らずに画像テキストを抽出でき、プライバシーとコストの両面で優れた構成の実装例として話題になっている。

- **[人間レビューはもう不要？ AI と人間のレビューの線引きを決めた話](https://ai.acsim.app/articles/introducing-self-merge-policy)** ([171users](https://b.hatena.ne.jp/entry/s/ai.acsim.app/articles/introducing-self-merge-policy)) - AIがコードレビューを完了したプルリクエストを自動マージできる「セルフマージポリシー」を導入するか否かの意思決定プロセスを公開した記事。どのケースを人間レビュー必須にするか（セキュリティ・アーキテクチャ変更・外部公開API）を定義した基準が参考になる。

- **[講演会で高校生たちがスマホをずっと見ているので何しているか聞いたらAIで内容をファクトチェックしていた](https://togetter.com/li/2690755)** ([131users](https://b.hatena.ne.jp/entry/s/togetter.com/li/2690755)) - 講演中に登壇者の発言をリアルタイムでAIを使ってファクトチェックしていた高校生の話。質問のレベルも高く「もう適当なことが言えない」と登壇者が感想をつぶやいたことで拡散。次世代がAIをリテラシーツールとして自然に使いこなしている象徴的な事例として議論を呼んでいる。

- **[[レポート公開] そのAIツール、すでに情報を抜かれています。実在インシデントで判明したセキュリティ事故 8選](https://prtimes.jp/main/html/rd/p/000000068.000118521.html)** ([55users](https://b.hatena.ne.jp/entry/s/prtimes.jp/main/html/rd/p/000000068.000118521.html)) - AIコーディングツールやMCPサーバー経由で実際に機密情報が流出した8件のインシデントをまとめたレポート。プロンプトインジェクション・過剰権限・ログへのシークレット書き込みなど実際の流出パターンが整理されており、企業のAIセキュリティ対策立案の参考になる。

## Zenn

- **[Hono公式の Inertia アダプタが来た！Hono × Inertia × React によるSPA新体験](https://zenn.dev/ashunar0/articles/cc351badf8681c)** - HonoにInertia.jsの公式アダプタが追加され、バックエンドとReactフロントエンドをAPIレスで型安全につなぐ構成が正式に可能になった。Nuxt/Remixとはアーキテクチャのトレードオフが異なり、既存のHonoアプリにUIを乗せるケースで薄いフルスタック構成として選択肢になる。

- **[Claude Codeのルーチン機能で定期的にパフォーマンスチューニングをさせている](https://zenn.dev/yamadashy/articles/claude-code-routines-perf-tuning)** - Claude Codeの「ルーチン」機能を使ってデプロイ後に自動でパフォーマンス計測→ボトルネック特定→改善PRを出すサイクルを構築した記事。人間が毎回実施していたパフォチューニングを定期バッチ化することで、継続的なパフォーマンス改善が常時稼働する構成が紹介されている。

- **[AIエージェントを安全に動かすための技術——サンドボックスについて調べてみる](https://zenn.dev/layerx/articles/a99cd11af487fc)** - AIエージェントがシステムコマンド・ファイル操作・ネットワークアクセスを行う際のサンドボックス技術（gVisor・Firecracker・Wasmtime・Docker seccomp）を比較調査した記事。セキュリティ強度・起動速度・実装コストのトレードオフを体系的に整理しており、エージェント基盤構築者向けの実践的ガイド。

- **[GitHub Copilotの本当の強み 2](https://zenn.dev/headwaters/articles/f79b8d64ba1442)** - Copilotのコード補完・チャット機能に留まらず、PR要約・コードレビュー自動化・CI/CDへの統合など「周辺機能」こそが実務的価値が高いとする分析。実際の開発フローへの組み込み方と、他社AIコーディングツールとの差別化ポイントが具体的に論じられている。

- **[AIに会社のGoogleアカウントを渡していませんか](https://zenn.dev/finatext/articles/mcp-gateway-google-sa)** - MCPサーバーにGoogle Service Accountを渡す際のスコープ過大付与・トークン永続化・監査ログ欠如という三大リスクを解説。最小権限原則がMCP文脈でどう具体化されるかを実装レベルで示した企業セキュリティ実践ガイド。

## Qiita

- **[GWも勉強したい方向けに、よくオススメされる技術書をカテゴリ別にまとめてみた](https://qiita.com/miruky/items/c2df4f23d73a8e05f37f?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - OS・ネットワーク・アルゴリズム・クラウド・機械学習など分野別に定番技術書を網羅した記事。「次に何を読むか迷う」エンジニアが連休に参照するための実用的なブックリストとして、GW期間中に多くのブックマークを集めている。

- **[AWS公式スマホゲームでAWSを遊んで学ぼう！(AWS Card Clash)](https://qiita.com/tkazuaki0820/items/4b43881baacda337be66?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AWSが公式にリリースしたモバイルカードゲーム「AWS Card Clash」の解説記事。各AWSサービスをカードとして対戦しながらユースケースや連携を学べる設計で、資格試験前の概念整理や新メンバーのオンボーディングに活用できると評価されている。

- **[【Claude Code入門】Skills 徹底解説 - 仕組みの解説からハンズオンまで](https://qiita.com/i-inose/items/14f212258dc350857a94?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Claude CodeのSkills機能（特定タスクを起動する再利用可能なエージェント定義）の仕組みと実装方法をハンズオン形式で解説。Skillsのマニフェスト記法・トリガー条件・他Skillとの連携設計など、公式ドキュメントの補完として機能する詳細ガイド。

- **[新人エンジニアこそ「個人開発」をやろう。完全無料で始めるCloudflareスタック入門](https://qiita.com/t0hara/items/8a669c6e0a76d9b1875d?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Cloudflare Workers・Pages・D1・R2・KVを組み合わせてクレジットカード不要で本番環境を構築する手順を解説。新人エンジニアが「完成品を世界に公開する」体験を低コストで得るための実践的な入口として紹介されている。

## AWS 新着

- **[Amazon WorkSpaces Personal enhances PCoIP to DCV protocol migration](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-workspaces-personal-pcoip/)** (2026-04-28) - WorkSpaces PersonalでPCoIPからDCVへのプロトコル移行を支援するガイド付きウィザードが追加。DCVはPCoIPより高い圧縮効率・低帯域でのパフォーマンス向上が期待されており、既存ユーザーの移行コストを下げる施策として注目される。

- **[Amazon EC2 C8gn instances are now available in additional regions](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ec2-c8gn-milan-hong-kong/)** (2026-04-28) - ネットワーク最適化インスタンスC8gn（Graviton4ベース）がミラノ・香港リージョンで利用可能に。最大200Gbpsのネットワーク帯域を持つインスタンスタイプのグローバル展開が進み、アジア・欧州での低レイテンシネットワーク要件に対応できるリージョンが拡がった。

- **[AWS Announces Amazon Connect Decisions](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-connect-decisions-april/)** (2026-04-28) - Amazon Connectに新機能「Decisions」が追加され、コンタクトセンターのコール振り分け・エスカレーション判断をAIが自動化できるように。既存のルールベースIVRをAI判断に置き換えることで、顧客の問い合わせ内容から最適な対応経路を動的に決定できる設計になっている。

- **[AWS Cost Optimization Hub now supports CSV download](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-cost-optimization-hub-csv-download/)** (2026-04-28) - Cost Optimization Hubの推奨事項をCSVで一括エクスポートできるようになった。これまでコンソールでしか参照できなかったコスト最適化提案を表計算ソフトやBI連携で活用でき、大規模アカウントでの削減優先度付け作業が効率化される。

## Lobsters

- **[Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/)** - FlaskやJinja2の作者Armin Ronacherが「GitHub以前のオープンソース開発はどうだったか」を振り返るエッセイ。メーリングリスト・Trac・Subversionによる協働の時代と、GitHubがもたらしたパラダイムシフト——そして今そのGitHubからの離脱が話題になっていることの歴史的意味を考察している。

- **[From GitHub to Codeberg/Forgejo](https://www.jonashietala.se/blog/2026/04/28/from_github_to_codebergforgejo)** - Ghostty発の「GitHubからの移住」トレンドに呼応して、実際にCodeberg（Forgejoベース）へ移行した開発者による手順・課題・所感記録。CI/CDの再構築・Issueトラッカー移行・ファークのリダイレクト管理など、移行で実際に直面した作業の詳細が参考になる。

- **[The Day I Logged 1 In Every 2000 Public IPv4: Visualizing The AI Scraper DDoS](https://vulpinecitrus.info/blog/one-in-every-2000-ipv4-visualizing-ddos-ai-web-scrapers/)** - サーバーへのアクセスログを分析したところ、全パブリックIPv4アドレスの2000分の1が自分のサイトにアクセスしていることが判明。AIスクレーパーによる実質的なDDoS状態が可視化された報告で、AI企業のクローラーが小規模サーバーにとって深刻な負荷要因になっていることを定量的に示している。

- **[Why I Still Reach for Lisp (& Scheme) Instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-lisp-instead-of-haskell/)** - 型安全性・関数型プログラミングのパラダイムではHaskellが優れているにもかかわらず、実際の問題解決ではSchemeに手が伸びる理由を論じるエッセイ。「思考ツール」としての言語と「本番実装言語」の違い、S式の操作容易性がAI/自動生成コードとの親和性をもたらすことなどが論点となっている。

- **[Using a 1978 terminal in 2026 (DEC VT-100)](https://nikhiljha.com/posts/vt100/)** - 1978年製のDEC VT-100ターミナルを現代のシステムに接続して実際に使うプロジェクト。RS-232変換・ANSI エスケープシーケンスの互換性調査から、現代のターミナルエミュレータが依然として50年前のプロトコルを忠実に実装している事実まで、技術の継続性を体感できる実験記録。

## dev.to

- **[I Gave an AI Agent $0 and Told It to Make Money](https://dev.to/bshaleshka/i-gave-an-ai-agent-0-and-told-it-to-make-money-2nlj)** - 予算ゼロのAIエージェントに収益化を指示する実験記事。フリーサービスのみを組み合わせてコンテンツ生成・SEO最適化・アフィリエイト設置を自律的に試みるエージェントの挙動を観察し、AIが「リソース制約下での創意工夫」をどう展開するかを記録している。

※本日のdev.toフィードはWeb3アナリティクス関連のスパム記事が大半を占めており、有用な記事の選定が困難な状態でした。

## TechCrunch

- **[Coby Adcock's Scout AI raises $100 million to train its models for war](https://techcrunch.com/2026/04/29/coby-adcocks-scout-ai-raises-100-million-to-train-models-for-war-we-visited-its-bootcamp/)** (2026-04-29) - 個々の兵士が自律ドローン群を操作できるAIエージェントを開発するScout AIが1億ドルを調達。実際のトレーニングキャンプを取材した記事で、「人間の判断を常にループに残す」設計思想と、軍事用AIエージェントの訓練・評価手法が詳しく報告されている。

- **[At his OpenAI trial, Musk relitigates an old friendship](https://techcrunch.com/2026/04/28/at-his-openai-trial-musk-relitigates-an-old-friendship/)** (2026-04-29) - OpenAI対Musk訴訟の法廷でMuskが自身の創業参加経緯・Altmanとの関係・非営利から営利への転換を巡る争いを証言。以前から語ってきたストーリーを法廷で初めて証拠として提出したもので、OpenAIの組織変遷と当初の合意内容が公的記録として明らかになっていく経緯が注目されている。

- **[Amazon launches an AI-powered audio Q&A experience on product pages](https://techcrunch.com/2026/04/28/amazon-launches-an-ai-powered-audio-qa-experience-on-product-pages/)** (2026-04-28) - Amazonが商品ページにAI音声Q&A機能「Join the chat」を追加。テキストではなく音声でAIが商品の質問に答えるUXで、スマートスピーカー文化との接続も視野に入る。ECサイトの商品情報提示が「テキスト表示」から「音声対話」へ移行する最初の大規模実装例として注目される。

- **[Paragon is not collaborating with Italian authorities probing spyware attacks](https://techcrunch.com/2026/04/28/paragon-is-not-collaborating-with-italian-authorities-probing-spyware-attacks-report-says/)** (2026-04-28) - イタリアのジャーナリスト・活動家を標的としたスパイウェア攻撃を調査する当局に対し、イスラエル系スパイウェアメーカーParagonが協力を拒否していると報道。約束した情報提供を履行しない姿勢が批判されており、民間スパイウェア産業の説明責任が改めて問われている。

- **[Australia forces Big Tech firms to pay for news or face a 2.25% tax](https://techcrunch.com/2026/04/28/australia-forces-big-tech-firms-to-pay-for-news-or-face-a-2-25-tax/)** (2026-04-28) - オーストラリアがニュースメディアとの取引合意を結ばないビッグテック企業に売上の2.25%を課税する法律を施行。合意の積み重ねで実効税率は1.5%まで下げられる仕組みで、国家が「AIによる報道コンテンツ利用への対価」を制度化した世界的な先例として各国で注目されている。

## Ars Technica

- **[Drone pilot makes US rescind no-fly zones around unmarked, moving ICE vehicles](https://arstechnica.com/gadgets/2026/04/no-fly-zones-around-moving-ice-vehicles-this-drone-pilot-fought-back-and-won/)** (2026-04-28) - FAAが無標識の移動するICE（移民税関執行局）車両周辺に秘密裏に設定していた飛行禁止区域をドローンパイロットが発見し、法的異議申し立てで撤回させた事例。ドローン規制がプライバシーや政府活動の隠蔽ツールとして悪用される可能性と、市民が技術を使って対抗できることを示した出来事として報告されている。

- **[A billion miles in less than a decade: GM's Super Cruise reaches a milestone](https://arstechnica.com/cars/2026/04/gms-super-cruise-passes-a-billion-driven-miles-since-2017/)** (2026-04-28) - GMのハンズフリー運転支援システム「Super Cruise」が2017年のリリースから10年足らずで累計10億マイル（約16億km）を達成。競合のTesla Autopilotに比べて地味な存在ながら、LiDARによる精密地図依存のアーキテクチャが長距離・高速道路での安全記録を着実に積み上げていることが示されている。

- **[Humanoid robots start sorting luggage in Tokyo airport test amid labor shortage](https://arstechnica.com/ai/2026/04/japan-airlines-tests-having-robots-instead-of-humans-handle-travelers-luggage/)** (2026-04-28) - 日本航空が東京空港でヒューマノイドロボットによる手荷物仕分けの実証実験を開始。日本の深刻な労働力不足を背景に、不規則な形状の荷物を自律的に認識・搬送するロボット技術の実用化が進んでいることを示しており、空港・物流インフラへの汎用ロボット導入の先行事例として国際的な注目を集めている。

## 注目トピック

今回のフィードを横断して際立つのは**GitHubからの自律分散化の波**と、その背景にある「プラットフォーム依存リスクへの意識変化」だ。Ghosttyの移行宣言を契機に、Codeberg/Forgejoへの実際の移住記録、GitHub以前のオープンソース文化を振り返る論考、さらには移行先のForgejoに脆弱性が発見されるという皮肉な展開まで含め、「Gitホスティングのスタック全体を誰がコントロールするか」という問いがコミュニティで共有され始めている。これはAmazonがBedrockでOpenAIモデルを提供し始めたLLMのマルチクラウド化とも通底しており、重要インフラへの一極集中を避けようとする動きが開発ツール全体で同時進行している。

もう一つの注目軸は**AIの「コスト・権限・責任」の可視化要求が拡大している**点だ。AI社員をSlackに常駐させた事例では「誰が何を決定したか」の説明責任が問われ、人間レビューの線引きポリシーの公開、AIスクレーパーによるIPv4の2000分の1を占拠するDDoS的負荷、軍事AIへの1億ドル調達、そしてオーストラリアのビッグテック課税——いずれも「AIが使うリソースとその対価を誰が負担するか」という問いへの社会的・技術的な応答として読める。AI活用の恩恵とコストの再分配をどう設計するかが、2026年後半の主要テーマになりそうだ。
