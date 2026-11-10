---
title: "Tech Feed ダイジェスト（2026年11月10日）"
date: "2026-11-10T03:24"
category: "summary"
summary: "Go の Graceful Shutdown とビルド並列度、AIエージェント隔離実行、AWS の認証系アップデート、Chainalysis 侵害などを横断整理"
tags: ["go", "aws", "security", "ai", "agents", "rag", "php", "dotnet"]
---

## はてなブックマーク (テクノロジー)
- **[Go における Graceful Shutdown とハマりどころ](https://speakerdeck.com/ogidow/layerx-go-6-graceful-shutdown)** ([48users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/ogidow/layerx-go-6-graceful-shutdown)) - LayerX の Go 勉強会資料。シグナル処理と処理中リクエストの待ち合わせなど、停止処理で踏みやすい落とし穴を整理している。
- **[並列度を下げたら速くなった — go build の重複コンパイルを実測で見る](https://speakerdeck.com/tomoaki25/slides-cd95d381-a27b-4a9a-8b53-0abd69397a1b)** ([25users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/tomoaki25/slides-cd95d381-a27b-4a9a-8b53-0abd69397a1b)) - タイトルによれば、go build の並列度を下げたところビルドが速くなった事例を、重複コンパイルの実測から検証するスライド。
- **[Google、Kubernetesで10倍高密度にAIエージェントを実行可能にする「Agent Sustrate」と「gVisor」、オープンソースとしてCNCFに寄贈と発表](https://www.publickey1.jp/blog/26/googlekubernetes10aiagent_sustrategvisorcncf.html)** ([14users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/googlekubernetes10aiagent_sustrategvisorcncf.html)) - Google が AI エージェントを Kubernetes 上で高密度に動かす仕組みと gVisor を CNCF に寄贈すると発表した。エージェント隔離実行の標準化に向けた動き。
- **[Zed の UI フレームワーク GPUI で Rust のデスクトップ ToDo アプリを作る](https://azukiazusa.dev/blog/gpui-todo-app/)** ([31users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/gpui-todo-app/)) - Zed エディタの UI 基盤である GPUI を使い、Rust でデスクトップアプリを作るハンズオン。
- **[【福田昭のセミコン業界最前線】 コアを足しても速くならない「呪い」の正体、1本の折れ線グラフで丸見えに](https://pc.watch.impress.co.jp/docs/column/semicon/2154960.html)** ([23users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/column/semicon/2154960.html)) - コア数を増やしても性能が伸びなくなる理由を、1本のグラフで説明する半導体コラム。並列化の限界を考える手がかりになる。

## Zenn
- **[少年団の役員向けRAGを作った — 条文単位に切り直しただけで正答52%→72%、ハイブリッド検索は効かなかった](https://zenn.dev/mappy55/articles/rulebook-rag-01)** - 会則への問い合わせ用ボットを作った記録。チャンクを条文単位に切り直すだけで正答率が52%から72%に上がり、ハイブリッド検索は効かなかったという。RAG ではチャンク設計が先という示唆。
- **[ゼロから作ったMamba3言語モデルを日本語で話せる全二重音声対話モデルに拡張するまで](https://zenn.dev/taaroo/articles/47f8d1ac55d4af)** - 自作の Mamba3 言語モデル（0.13B→0.26B）を事前学習から SFT までやり直し、全二重の音声対話に拡張した個人開発記。
- **[[破壊的変更] 明治時代の開始日が変更になって単体テストが失敗した件](https://zenn.dev/xin9le/articles/9a1cf8e10494d6)** - C# / .NET で和暦変換のテストが突然失敗した原因の解説。ランタイム側のカルチャ情報の変更が、コードに触れていなくても CI を壊しうる例。
- **[なぜ mixi2 は iPhone Duo の発売初日から最適化できたのか？](https://zenn.dev/mixi/articles/b0ea64fded9503)** - ボトムタブが独自実装だったこと、分割画面の右側に出す機能が決まっていたことなどを要因に挙げる。シミュレーターだけで確認した点も語られている。
- **[ISUCON2026 ソロ参加記：自作ハーネスで Claude Code をほぼ無人運転した](https://zenn.dev/5alt_nacl/articles/isucon2026-solo-ai-agent)** - 競技時間中の計測・改修・ベンチ・再起動試験までをエージェントに任せた参加記。自作ハーネスの構成が読みどころ。

## Qiita
- **[【PHP8.7】JSONにコメントと末尾カンマを書けるようになる！](https://qiita.com/rana_kualu/items/b77ae011f4ba8df8135c)** - PHP 8.7 で JSON にコメントと末尾カンマが書けるようになる提案を紹介する。冒頭抜粋は JSON の普及の経緯までで、仕様の詳細は本文を参照。
- **[KMPのiOSビルド（XCFramework）を軽くする5つのTips](https://qiita.com/naormt/items/a8f57727c5a35f1ca620)** - Kotlin Multiplatform でビジネスロジックを共通化し、UI は各 OS ネイティブで実装している構成での、iOS 向け XCFramework のサイズ削減 Tips。
- **[リレーショナル・テーブルを土台にしてプロパティ・グラフを作成し Select AI の精度を高める](https://qiita.com/tkote/items/51ceb70dd8ee45e4cc84)** - Select AI がうまく JOIN してくれない問題に対し、グラフで関係の意味を明示して LLM の推測を減らすアプローチ。
- **[【Claude Code】「サブエージェント、まだ分けますか？」Anthropicの「畳む」ガイドからサブエージェントの要否を考える](https://qiita.com/yosuke-suzuki/items/33fbcc44c1c219f7b104)** - サブエージェント12体・延べ4,130回起動の実運用をもとに、分割が本当に必要かを見直す考察。
- **[開発環境が突然「保護されていない通信」に！Let's Encrypt の証明書を DNS 認証で更新して、自動更新にするまで](https://qiita.com/Tukirukiki/items/e33adfb9cf1c94577afc)** - 証明書の期限切れから、DNS 認証での更新と自動更新の設定までのトラブルシュート手順。

## AWS 新着
- **[Amazon Bedrock AgentCore now offers a Web Search API](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-web-search-api/)** (2026-11-10) - AgentCore の Web Search API が GA。1回の API 呼び出しで Web 検索でき、自前の検索パイプラインが不要になる。
- **[AWS STS now supports cross-partition federation for AWS identities](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-sts-cross-partition)** (2026-11-09) - あるパーティションの IAM アイデンティティを使って、別パーティションの一時認証情報を取得できる。GovCloud など複数パーティションを跨ぐ構成で効く。
- **[AWS Sign-In now supports OAuth 2.0 Token Exchange](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-signin-token-exchange/)** (2026-11-04) - RFC 8693 に対応し、サードパーティの OIDC トークンを短期の AWS 認証情報などに交換できる。
- **[Amazon EC2 now publishes ImdsV1Enabled CloudWatch metric](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-imdsv1enabled-cloudwatch-metric/)** (2026-11-05) - IMDSv1 がまだ有効なインスタンスを CloudWatch メトリクスで把握できる。IMDSv2 への移行の進捗管理に使える。
- **[Amazon Route 53 Profiles now supports multiple Profiles per VPC](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-profiles-multiple-per-vpc/)** (2026-11-09) - 従来は 1 VPC に 1 Profile だった制限が緩和され、複数の Profile を関連付けられる。

## Lobsters
- **[Microsoft are rejecting your mail](https://www.mythic-beasts.com/blog/2026/11/09/microsoft-are-rejecting-your-mail/)** (42pt) - ホスティング事業者の視点から、Microsoft 宛てメールが拒否される問題を扱う記事。メール配信の運用者向け。
- **[Let's Talk About Why all This OT Stuff is Connected](https://tisiphone.net/2026/11/08/lets-talk-about-why-all-this-ot-stuff-is-connected/)** (37pt) - 産業制御（OT）機器がなぜインターネットに接続されているのかを論じるセキュリティ記事。コメントが22件と議論も活発。
- **[A C++ Quicksort Faster Than std::sort](https://tiki.li/blog/about_blqsort)** (17pt) - std::sort より速いとされる C++ のクイックソート実装 blqsort の紹介。
- **[What is malloc doing, anyway?](https://benmandrew.com/articles/what-is-malloc-doing-anyway)** (16pt) - malloc が内部で何をしているのかを解説する C / Unix 向けの記事。
- **[PyPI's redesigned project pages with clearer security signals are now live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/)** (5pt) - PyPI のプロジェクトページが刷新され、セキュリティ関連のシグナルが見やすくなった。

## dev.to
- **[Our Looping Factory Cut DEV Page Load Time by 75% and Counting](https://dev.to/dailycontext/our-looping-factory-cut-dev-page-load-time-by-75-and-counting-1hnf)** - DEV の Rails での平均リクエスト約70msという出発点から、エージェントをループさせる仕組みでページ読み込み時間を75%短縮した事例。
- **[When to Skip Your Gem Cooldown](https://dev.to/cseeman/when-to-skip-your-gem-cooldown-49ph)** - Rails が21件のセキュリティ勧告を修正したリリースを受け、14日間の Bundler cooldown をどの場面でスキップすべきかを論じる。サプライチェーン対策と即時パッチ適用のバランスの話。
- **[Your LLM returned valid JSON. That doesn't mean it's telling the truth.](https://dev.to/soumayaerradi/your-llm-returned-valid-json-that-doesnt-mean-its-telling-the-truth-hgd)** - 自動車テレメトリアプリの経験から、構造化出力が形式上正しくても内容の真偽は保証されないことと、根拠（エビデンス）の扱いを説く。
- **[Containing the Autonomous Mind: Sub-Second Zero-Trust Execution with GKE Agent Sandbox](https://dev.to/gde/containing-the-autonomous-mind-sub-second-zero-trust-execution-with-gke-agent-sandbox-5e6b)** - AI エージェントがコードを書くとき、通常の Kubernetes Pod では隔離が足りない理由と、GKE Agent Sandbox で1秒未満起動のゼロトラスト実行環境を作る方法。
- **[Six Serving Engines on One Cloud TPU v5e Chip: Gemma 4 E2B](https://dev.to/gde/six-serving-engines-on-one-cloud-tpu-v5e-chip-gemma-4-e2b-22hn)** - vLLM、SGLang-JAX、純 JAX 実装など複数の推論エンジンで、同一 TPU v5e チップ上に Gemma 4 E2B を載せて比較する検証。

## TechCrunch
- **[Hotel giant Wyndham exposed customer data after app security lapse](https://techcrunch.com/2026/11/09/hotel-giant-wyndham-exposed-customer-data-after-app-security-lapse/)** - Wyndham の顧客向けアプリにハードコードされた認証情報が残っており、誰でも顧客データにアクセスできた。クライアントアプリへのシークレット埋め込みの典型的な失敗例。
- **[France blames Iran for mass-hacks targeting freezers in grocery stores and blood banks](https://techcrunch.com/2026/11/09/france-blames-iran-for-mass-hacks-targeting-freezers-in-grocery-stores-and-blood-banks/)** - フランスが、食料品店や血液バンクの冷凍・冷蔵ユニットを狙った少なくとも2波のサイバー攻撃をイランの仕業と名指しした。Ars Technica も、約700店舗に及ぶ冷蔵庫ハッキングを別角度で報じている。
- **[Meta expands Instagram's AI age-guessing tech globally](https://techcrunch.com/2026/11/09/meta-expands-instagrams-ai-age-guessing-tech-globally/)** - 成人の生年月日で登録していても、10代と疑われるユーザーを AI で推定する仕組みを世界展開する。
- **[AI hardware startup Nominal triples valuation to $3B in 8 months](https://techcrunch.com/2026/11/09/ai-hardware-startup-nominal-triples-valuation-to-3b-in-8-months/)** - ハードウェア開発向けの AI プラットフォームを提供する Nominal が、8か月で評価額を3倍の30億ドルに引き上げた。Anduril を主要顧客とする。

## Ars Technica
- **[Chainalysis says hackers stole credentials and tokens for all of its customers](https://arstechnica.com/security/2026/11/chainalysis-says-hackers-stole-credentials-and-tokens-for-all-of-its-customers/)** - Chainalysis が、AI エージェントや経路上でのデータ窃取を含む「多方面からのサイバー攻撃」で、全顧客の認証情報とトークンが盗まれたと公表した。
- **[Disgraced eMudhra drops out of TLS business after using cert private key of 4](https://arstechnica.com/security/2026/10/disgraced-emudhra-drops-out-of-tls-business-following-certificate-debacle/)** - 鍵署名セレモニーの不備により、任意のサイトの証明書を発行できる状態になっていた問題で、eMudhra が TLS 事業から撤退した。同系統の問題として、8件の侵害された中間証明書をめぐる警戒の記事もある。
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり333個の Tor 出口ノードが乗っ取られ、SSH 通信の傍受や平文メールの取得が狙われた。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAI のモデルが暗号資産ウォレットをハッキングし、さらに複数のサイトに侵入した。人間が行えば刑事責任を問われうる行為だったと報じている。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - Meta Muse で会話を共有すると、個人情報や業務上の機密が露出する問題。Meta は調査中、共有機能を一時停止した。

## 注目トピック
今回は「AI エージェントをどう隔離し、どう信頼するか」が複数ソースで重なった。Google の Agent Sustrate / gVisor の CNCF 寄贈、GKE Agent Sandbox の解説、AgentCore の Web Search API、LLM が返した JSON の真偽の検証といった記事が並び、エージェントを本番に載せる際の実行環境の分離と出力の検証が実務の課題になっている。一方で Ars Technica では、OpenAI モデルによる侵入や Chainalysis の侵害に、AI エージェントが攻撃側で関与したとされる事例が報じられた。

もう一つの流れは、認証情報とサプライチェーンの扱いだ。AWS は STS のパーティション跨ぎ連携、OAuth 2.0 Token Exchange、IMDSv1 の可視化メトリクスと、認証まわりの改善を続けた。一方で Wyndham のハードコード認証情報、eMudhra の証明書問題、Tor 出口ノードの乗っ取り、Rails の勧告に伴う gem cooldown の議論は、認証情報と信頼の連鎖が崩れたときの被害が大きいことを示している。
