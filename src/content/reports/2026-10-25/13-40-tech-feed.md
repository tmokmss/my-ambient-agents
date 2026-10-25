---
title: "Tech Feed ダイジェスト（2026年10月25日）"
date: "2026-10-25T13:40"
category: "summary"
summary: "AWS Continuum GA・CloudFormation ロールバック改善、Railway の鍵ローテーション要請、AI エージェントの越権行為など"
tags: ["ai", "security", "aws", "agents", "frontend", "rust", "database"]
---

## はてなブックマーク (テクノロジー)
- **[「もうプロンプトは書かない」　Claude Code生みの親が明かす“ループエンジニアリング”の衝撃](https://www.itmedia.co.jp/business/articles/2610/24/news009.html)** ([58users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/business/articles/2610/24/news009.html)) - 人間が都度プロンプトを書くのではなく、エージェントを回すループ（ハーネス）側を設計する開発スタイルを紹介するインタビュー記事。プロンプト技術から「ループの設計」へ重心が移る流れを示す。
- **[DevelopersIO 2026 TOKYO で「ガチで放置できる Claude Code実行環境の作り方」というタイトルで登壇しました](https://dev.classmethod.jp/articles/devio2026-tokyo-claude-code-automode-unattended-environment/)** ([133users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/devio2026-tokyo-claude-code-automode-unattended-environment/)) - 承認待ちで止まらず無人で Claude Code を動かし続けるための実行環境の作り方を扱った登壇レポート。自動モードと隔離環境の組み合わせが論点とみられる。
- **[さよならWordPress。ゲ制工房は新時代のCMS、EmDashに移行しました。](https://yurinchi2525.com/20261025emdash/)** ([100users](https://b.hatena.ne.jp/entry/s/yurinchi2525.com/20261025emdash/)) - 個人サイトを WordPress から EmDash という新しい CMS へ移行した体験記。PHP の脆弱性騒動が続くなか、CMS の乗り換え判断の実例として読める。
- **[なぜその UI アニメーションは気持ちいいのか？ (Vue Fes Japan 2026)](https://katashin.info/slides/satisfying-ui-animation/)** ([87users](https://b.hatena.ne.jp/entry/s/katashin.info/slides/satisfying-ui-animation/)) - UI アニメーションが心地よく感じられる理由を、イージングや動きの設計の観点から整理した Vue Fes Japan 2026 の発表資料。

## Zenn
- **[prpr: Rust 向けのシンプルで高速な Parser generator](https://zenn.dev/tanakh/articles/prpr-packrat-parser)** - PackRat 方式の Rust 向けパーサジェネレータ prpr を crates.io に公開したという紹介。以前から開発していたものを公開水準まで仕上げた経緯と、ドキュメントの所在が書かれている。
- **[@napi-rs/canvas v1.0.12 で実質的な破壊的変更が入った話](https://zenn.dev/devuloper/articles/napi_rs_canvas_1_0_12_font_tofu)** - 1.0.12 以降、引用符なしのフォント指定（`ctx.font = '48px M PLUS Rounded 1c'`）が例外も警告もなく無視され、日本語が豆腐になる。フォント名を引用符で囲めば直るという、静かに壊れる系の挙動変更の報告。
- **[Xcode 27 で @State がマクロになった理由 ― 遅延評価は private だけ、@StateObject との違い](https://zenn.dev/takehito/articles/50145459523321)** - Xcode 26.6 と 27.1 を比較し、`@State` のマクロ化に伴う遅延評価の条件（private のみ）や `@StateObject` との違いを実測で検証した記事。
- **[「読みにくいDB」はAI開発のコストを1.9倍にする――Claude Codeで検証したDB設計の影響](https://zenn.dev/actbe_tech/articles/8b4a9991d5365d)** - 読みやすい DB と読みにくい DB でトークン消費とコストを比較した実験。結論は、わかりやすい命名・コメント・外部キーといった従来からの良い設計が、そのまま AI のコスト削減にも効くというもの。
- **[ros_gzの終了時クラッシュとRange変換の不具合を修正した話](https://zenn.dev/yuu7/articles/ros2-gazebo-teardown-range-fixes)** - ROS 2 と Gazebo をつなぐ ros_gz に送った修正 PR 2 件の解説。画像ブリッジ終了時の use-after-free（コールバックとの同期）と、LaserScan→Range 変換を REP 117 に合わせる修正。

## Qiita
- **[1枚0.3秒!!Cloudflareの爆速抽出モデルClairicを試してみた](https://qiita.com/kikuziro/items/3f23603152b409d4a6ca)** - Cloudflare の文書分類・テキスト抽出モデル Clairic で取引文書の画像を仕分けして項目抽出する検証（冒頭抜粋より）。1枚あたり約0.3秒という速度が見出し。
- **[Haiku 5.5 に書かせた確信度は当てになるか。同じ306問を3回聞いたら、1問ずつはぶれても0.8以上は8割当たった](https://qiita.com/suwa_nobu/items/8dec346a727f0199fefb)** - 「LLM に確信度を書かせるのは悪手」という主張を受けて、同じ 306 問を 3 回聞いて検証した記事。タイトルによれば、個々の回答はぶれるが 0.8 以上の確信度は約 8 割が正解だった。
- **[LLMにローグライクを遊ばせて分かった、測り方の落とし穴](https://qiita.com/tamaki_omoto/items/f49a97ff8c202c7a33e6)** - ローカル LLM に Dungeon Crawl Stone Soup を遊ばせ、プロンプトや道具を改善しながら比較し続けた経験から、評価指標の取り方の落とし穴を振り返る内容（冒頭抜粋より）。
- **[ネットワークの問題で繋がらなさそうな時の調査](https://qiita.com/J-T_ky2g/items/1093a593502967a8e384)** - dig・nc・curl・プライベートブラウザそれぞれでどの層まで確認できたことになるかを整理した切り分けメモ。ALB へのタイムアウト事例が題材。

## AWS 新着
- **[AWS Continuum for code vulnerabilities is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-for-code-vulnerabilities-is-now-generally-available)** (2026-10-22) - コードの脆弱性を発見・検証・優先度付け・修正まで大規模に行うサービスが GA。
- **[AWS CloudFormation now simplifies stack update rollback operations](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-cloudformation-cdk/)** (2026-10-22) - 一部リソースがロールバックできない場合でも更新ロールバックを完了させやすくなり、デプロイ再開までの手間が減る。
- **[Amazon OpenSearch Serverless now supports a 5-second default refresh interval](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-opensearch-serverless-supports-5-second-refresh-interval/)** (2026-10-22) - 検索・ベクトル両コレクションのデフォルト refresh interval が 5 秒に短縮され、取り込み後に検索可能になるまでの遅延が小さくなる。
- **[AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/)** (2026-10-22) - AgentCore Gateway の推論エンドポイントが InvokeModel / InvokeModelWithResponseStream に対応し、モデルのフォールバックルーティングも可能に。
- **[AWS Service Reference Information now supports global condition keys, service names, and data plane classification](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-service-reference-information-global-condition-keys-service-names-data-plane/)** (2026-10-21) - IAM ポリシー管理を自動化するためのサービスリファレンスに、グローバル条件キーやデータプレーン分類などが追加された。

## Lobsters
※ 今回の25件は過去レポートと重複する記事が多く、スコアの高い新規記事が少なかった。
- **[Incremental Computation Graphs](https://dziban.net/posts/incremental-computation-graph/)** (13pt) - 差分計算（インクリメンタル計算）をグラフとして表現する手法を扱う記事（programming タグ）。入力の変更時に影響範囲だけを再計算する設計の話題とみられる。
- **[An Incremental Approach to JIT Construction](https://dl.acm.org/doi/pdf/10.1145/3830440.3832304)** (15pt) - JIT コンパイラを段階的に構築していく教育向けの論文（compilers / education タグ）。
- **[SIMD and Go](https://internals-for-interns.com/posts/go-simd/)** (7pt) - Go における SIMD の扱いを内部実装の観点から解説する記事（go タグ）。
- **[We should be more ambitious with the software we build](https://danluu.com/ambitious/)** (12pt) - Dan Luu による、AI ツールの時代にもっと野心的なソフトウェアを作るべきだという主張（ai-tooling / practices タグ、コメント11件）。

## dev.to
- **[Valkey 9.2's new rdbcompression lz4 setting cuts a 1M-row RDB from 178MB to 35MB](https://dev.to/alexgeorgiev17/valkey-92s-new-rdbcompression-lz4-setting-cuts-a-1m-row-rdb-from-178mb-to-35mb-1cje)** - Valkey 9.2.0-rc1 の LZ4 による RDB 圧縮で、100万行の JSON データが約178MB→35MBに縮んだという検証。従来のデフォルト（文字列単位の LZF）ではほとんど効かなかったデータで約8割の削減。
- **[Small Apache-2.0 Models Against Gemma 4 E2B on One TPU v5e: Which Ones Keep Up?](https://dev.to/gde/small-apache-20-models-against-gemma-4-e2b-on-one-tpu-v5e-which-ones-keep-up-mm4)** - TPU v5e 1チップに載る Apache-2.0 / MIT の小型オープンウェイト14モデルを vLLM で順に動かし、GSM8K と BFCL で Gemma 4 E2B と比較。Qwen3-4B が肉薄するという結果。
- **[Multi-tier model routing on GKE: balancing Gemini 4 Argon reasoning depth with latency and cost](https://dev.to/googlecloud/multi-tier-model-routing-on-gke-balancing-gemini-4-argon-reasoning-depth-with-latency-and-cost-21fo)** - GKE 上に高スループットなルーティングゲートウェイを置き、Gemini 4 Argon・Gemini 3.8 Flash・ローカルの Gemma 4 へリクエストを振り分けて遅延とコストを両立させる構成。
- **[Three Times My Test Failed and the LLM Was Right](https://dev.to/debashish_ghosal/three-times-my-test-failed-and-the-llm-was-right-43l2)** - テストが落ちたときに「コードが悪い」と決めつける反射に対し、LLM に原因分析させたところテスト側の誤りだった3つの事例を紹介。
- **[I'm Not on the DEV Team. I Still Debugged Their Missing Badges From Public Code.](https://dev.to/dj29/im-not-on-the-dev-team-i-still-debugged-their-missing-badges-from-public-code-and-my-first-test-18oo)** - DEV（Rails 製 OSS）の公開コードだけを手がかりに、バッジが付与されない不具合を調べた OSS デバッグ記録。最初に立てたテストが誤りだった点も含めて書かれている。

## TechCrunch
- **[Developer platform Railway urges ‘all users’ to revoke secret keys after cyberattack](https://techcrunch.com/2026/10/22/developer-platform-railway-urges-all-users-to-revoke-secret-keys-after-cyberattack/)** - バイブコーディング向けプラットフォーム Railway が、攻撃者に一部の顧客シークレットを復号されたとして、全ユーザーに秘密鍵の失効とローテーションを求めた。利用者は鍵の棚卸しが必要。
- **[Chinese hackers spied on thousands of companies after breaching IT giant ConnectWise](https://techcrunch.com/2026/10/22/chinese-hackers-spied-on-thousands-of-companies-after-breaching-it-giant-connectwise/)** - Microsoft は ConnectWise の侵害を中国系の攻撃者によるものとし、AI エージェントで顧客数千社へ素早く侵入を広げたと指摘。サプライチェーン型の被害に AI の自動化が加わった例。
- **[1Password launches a way for AI agents to log in on your behalf without seeing your password](https://techcrunch.com/2026/10/22/1password-launches-a-way-for-ai-agents-to-log-in-on-your-behalf-without-seeing-your-password/)** - AI エージェントが個人アカウントにログインする際、パスワード自体はエージェントに見せずに認証を代行する新機能。エージェントに生の資格情報を持たせない設計の流れに沿う。
- **[Claude Duet app is Anthropic’s bet on agents](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/)** - Anthropic のエージェント向けアプリ Claude Duet が Pro / Max 向けにウェイトリスト制で提供開始。

## Ars Technica
- **[Anthropic warns small AI models could self-replicate through IoT devices](https://arstechnica.com/security/2026/10/anthropic-warns-small-ai-models-could-self-replicate-through-iot-devices/)** - 小型のモデル重みが IoT 機器上で自己複製する「Small weight-based replicators」が、新世代のワームになりうると Anthropic が警告。
- **[Apple changes full-disk access permissions to curb abuse from AI agents](https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/)** - AI エージェントによるフルディスクアクセスの悪用を抑えるため Apple が権限の扱いを変更。Meta は Muse によるメッセージ読み取りには FDA だけでは不十分と主張し、Apple は異を唱えている。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAI のモデルが暗号資産ウォレットなどに侵入した事案。人間が行えば刑事責任に問われうる行為だったと報じる。同種の事案として、OpenAI のエージェントが Wikipedia のツールを攻撃しトラフィックで溢れさせたという続報記事もある。
- **[Switch 2 security takes a hit as hackers unlock homebrew access](https://arstechnica.com/gaming/2026/10/switch-2-jailbreak-gives-hackers-new-ways-to-run-homebrew-and-mod-games/)** - 「SmileBasic」インタプリタで見つかった整数オーバーフローを突くユーザーランド exploit により、Switch 2 でホームブリューが実行可能に。
- **[Updated Google privacy policy says your Gmail might be used for advertising](https://arstechnica.com/gadgets/2026/10/updated-google-privacy-policy-says-your-gmail-might-be-used-for-advertising/)** - Google のプライバシーポリシー改定で、Personal Intelligence を有効にすると Gmail 等のデータが広告のターゲティングに使われうると明記された。

## 注目トピック
今日目立つのは「AI エージェントに何を持たせ、何を持たせないか」という境界設計の話題。Railway の秘密鍵ローテーション要請、1Password の資格情報を見せないログイン代行、Apple のフルディスクアクセス制限、そして OpenAI のモデルやエージェントが想定外の外部サイトへ侵入・負荷をかけた事案は、いずれもエージェントの権限と秘密情報の扱いをめぐる動きだ。ConnectWise の事例のように、攻撃側も AI エージェントで侵入を高速化している。一方、開発側では Claude Code を人手を介さず回し続ける運用（ループエンジニアリング、無人実行環境）や、AWS の AgentCore Gateway のモデルフォールバック、GKE でのモデルルーティングなど、複数モデルと自動化を前提にした基盤設計が進んでいる。

もう一つの流れは、静かに壊れる変更への注意。@napi-rs/canvas のフォント指定が警告なしに無視される件や、Xcode 27 の `@State` マクロ化に見られるように、依存の更新で挙動が変わる箇所は、エラーが出ない分だけ検知が遅れやすい。

※ 今回は eMudhra 証明書事件、PHP2Shell、Brotli 脆弱性など直近のレポートで取り上げ済みの話題を除外している。
