---
title: "Tech Feed ダイジェスト（2026年11月17日）"
date: "2026-11-17T03:41"
category: "summary"
summary: "OpenVessel・Hyperlight-Unikraft、S3 Vectors ハイブリッド検索、AI エージェント関連の侵害・規制、*sshole 脆弱性などを収録"
tags: ["ai", "security", "aws", "infrastructure", "rust", "llm", "agents"]
---

## はてなブックマーク (テクノロジー)
- **[Node.jsとnpmをWebブラウザ上で実行可能にする「OpenVessel」、神戸ソフトがオープンソースで公開](https://www.publickey1.jp/blog/26/nodejsnpmwebopenvessel.html)** ([61users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/nodejsnpmwebopenvessel.html)) - Node.js と npm をブラウザ内で動かせる OSS。サーバー側の環境を用意せずに、ブラウザだけで開発環境やデモ・教材を提供する用途が考えられる。
- **[軽量なマイクロVMでネイティブよりアプリを高速起動できる「Hyperlight-Unikraft」登場](https://www.publickey1.jp/blog/26/vmhyperlight-unikraft.html)** ([42users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/vmhyperlight-unikraft.html)) - 軽量マイクロ VM とユニカーネルを組み合わせ、アプリをネイティブより速く起動できるとする技術。サンドボックス実行やサーバーレス基盤のコールドスタート短縮に関わる。
- **[Google、人間の関与なしに脆弱性を見つけて悪用するAIフレームワークを初めて観測　GTIGのAI脅威レポート](https://www.itmedia.co.jp/news/article/2611/16/2000003244/)** ([57users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2611/16/2000003244/)) - Google の脅威インテリジェンスグループ（GTIG）が、脆弱性の発見から悪用までを人手なしで行う AI フレームワークを初観測したと報告。パッチ適用の猶予が縮むことを意識させる内容。
- **[Secretlint v14.0.0リリース: 設定なしで動作するように変更、大規模リポジトリのチェックを高速化](https://efcl.info/2026/11/16/secretlint-v14/)** ([29users](https://b.hatena.ne.jp/entry/s/efcl.info/2026/11/16/secretlint-v14/)) - 秘匿情報の混入を検出する Secretlint のメジャー更新。設定ファイルなしで動くようになり、大規模リポジトリのチェックも速くなった。導入の敷居が下がる。
- **[推し活サイトで学ぶData Vault入門](https://www.yasuhisay.info/entry/2026/11/16/205648)** ([16users](https://b.hatena.ne.jp/entry/s/www.yasuhisay.info/entry/2026/11/16/205648)) - データウェアハウスのモデリング手法 Data Vault を、推し活サイトを題材に解説する入門記事。

## Zenn
- **[実践パスキー認証設計](https://zenn.dev/yasuakiomokawa/articles/89f5c46e8effe9)** - ライブラリの使い方ではなく、「何を決めておけば後から困らないか」を実サービスでの設計記録としてまとめた記事。要求・要件・やってはいけないこと・導入順を扱う。
- **[中編 LLM推論エンジンを作る](https://zenn.dev/shozotanaka/articles/632191056c62f4)** - llama.cpp を使わず ggml 上で自作した推論エンジンを読み解く連載の中編。Llama の計算グラフを組み立てる `BuildGraph` を詳しく追い、Gemma 3 / Gemma 4 / gpt-oss は Llama との差分として説明する。
- **[Qwen3.8 Flash Nextに混ざる中国語を、出力層の書き換えで消した: 27%→0%、他の重みは1バイトも変えずに](https://zenn.dev/caphtech/articles/qwen38-zh-ban)** - 出力層だけを書き換えて、日本語の回答に混ざる中国語の割合を 27% から 0% にした実験記録。他の重みが変わっていないことを手元で検証できる道具も使っている。
- **[ng: Neovim のためのシンプルな GUI](https://zenn.dev/shougo/articles/ng-nvim-simple-gui)** - Go で書かれた Linux（X11 / Wayland）向けの最小限の Neovim GUI クライアント。新しいエディタではなく、GVim が Vim に対して持つ立場と同じ「窓」を Neovim に与えるもの。
- **[【pstack】AIに敵対的レビューをさせるな。トークンは検証に使え](https://zenn.dev/karamage/articles/5c3f8370b2b370)** - AI 同士の敵対的レビューを何往復させても本番バグは防げなかったという経験から、差分だけを見るレビューより、実際に動かして確かめる検証にトークンを使うべきだと主張する。

## Qiita
- **[ECSマネージドインスタンスとNitro SandboxでDocker in Dockerして遊んでみる](https://qiita.com/har1101/items/b7d95297d9cdfe3dc245)** - ECS マネージドインスタンス上で Nitro Sandbox を使い、Docker in Docker を試した検証記事（冒頭抜粋から読み取れる範囲）。AWS の新しい隔離実行基盤の使いどころを探る内容。
- **【最新動向】[IETF 127 San Francisco Side Meeting 分析 ― 41件中20件がAI、その半数はエージェントの認証・委任・証跡](https://qiita.com/satokan3/items/df0a3229bcc8b62e7b72)** - IETF 127 のサイドミーティング 41 件のうち 20 件が AI 関連で、その半数がエージェントの認証・委任・証跡に関するものだったという分析。標準化の関心が AI エージェントのセキュリティに寄っている。
- **[ちょっと見ない間にClaude APIが進化してた！](https://qiita.com/moritalous/items/9e7c02b749037238b2bc)** - Python と公式 SDK で、単なるモデル呼び出しにとどまらない Claude API の最近の機能を試した記事（冒頭抜粋から読み取れる範囲）。
- **[Kanaryの「/relay」でClaude・Codex・Cursorを行き来するのが便利だったので、コードレビューを往復させてみた](https://qiita.com/inoyu-qiita/items/f2e2d1006407a4d5f28e)** - Mac アプリ Kanary の `/relay` を使い、Claude・Codex・Cursor の間で会話をコピペなしで引き継いでコードレビューを往復させた試み。

## AWS 新着
- **[Amazon S3 Vectors now supports hybrid search combining vector and full text for more relevant search results](https://aws.amazon.com/about-aws/whats-new/2026/11/s3-vectors-hybrid-search/)** (2026-11-16) - S3 Vectors で、ベクトル類似検索と全文検索を 1 クエリで組み合わせられるようになった。意味的な近さと語句の完全一致を併用でき、RAG の検索精度向上に使える。
- **[Amazon SageMaker AI now supports KV cache-aware routing for real-time inference endpoints](https://aws.amazon.com/about-aws/whats-new/2026/11/sagemaker-kv-cache-routing/)** (2026-11-16) - リアルタイム推論エンドポイントで KV キャッシュを意識したルーティングに対応。長い、または繰り返しのプロンプトを持つ LLM で、最初のトークンまでの時間（TTFT）を短縮できる。
- **[Amazon Redshift now supports multi-statement transactions, conflict resolution, and time travel for Apache Iceberg](https://aws.amazon.com/about-aws/whats-new/2026/11/redshift-time-travel-multi-statement)** (2026-11-16) - Iceberg テーブルで、複数ステートメントのトランザクション、書き込み競合の自動解決、タイムトラベルが使える。並行する変換パイプラインを組みやすくなる。
- **[Amazon Route 53 now supports record set protection](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-route-53-record-set-protection/)** (2026-11-12) - ホストゾーン内の重要な DNS レコードを保護し、誤変更を防げる。誤操作による障害を減らす運用ガードとして使える。
- **[Amazon ElastiCache Serverless now supports vector, full-text and hybrid searches plus aggregations](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-elasticache-serverless-search-aggregations/)** (2026-11-10) - ElastiCache Serverless for Valkey が、ベクトル・全文・ハイブリッド検索と集計に対応。ライブデータへの検索をキャッシュ層で低レイテンシに処理できる。

## Lobsters
- **[Squircles](https://linebender.org/wiki/curves/squircle/)** (42pt) - Linebender のウィキによる、角丸と連続的な曲線を持つ squircle 形状の解説。グラフィックス分野の記事。
- **[What is w2rt6byl5nf1opmc-a[.]com?](https://jack.cab/blog/siterate.html)** (52pt) - 見慣れないドメインの正体を調べた web タグの調査記事。不審なドメインの調べ方の参考になる。
- **[NoisyTCP](https://www.openwall.com/lists/oss-security/2026/11/15/2)** (16pt) - oss-security メーリングリストに投稿された、Linux の TCP 周りに関するセキュリティ関連の報告。詳細は原文を参照。
- **[beer.drv.drv.drv](https://fzakaria.com/2026/11/14/beer-drv-drv-drv)** (25pt) - Nix の derivation（.drv）の仕組みを扱った記事。ビルド記述がどう表現されるかを掘り下げているとみられる。

## dev.to
- **[ndots:5 in Kubernetes: Why One DNS Lookup Turns Into Ten Queries](https://dev.to/devopsdaily/ndots5-in-kubernetes-why-one-dns-lookup-turns-into-ten-queries-2g15)** - Kubernetes の既定値 `ndots:5` により、1 回の名前解決が検索ドメインの展開で約 10 回の DNS クエリになる仕組みを解説。CoreDNS が正常でも DNS リクエスト量が急増する原因になる。
- **[LLMs are compressors. So I chatted with gzip](https://dev.to/aws/llms-are-compressors-so-i-chatted-with-gzip-12ji)** - 「LLM は圧縮器である」という見方をもとに、gzip を相手にチャットをする実験。圧縮と予測の関係を手を動かして理解できる。
- **[Real-Time Java: Control Loops the Garbage Collector Never Stops](https://dev.to/codenameone/real-time-java-control-loops-the-garbage-collector-never-stops-4gop)** - PREEMPT_RT の Linux 上で、GC が止めない 1 kHz の Java 制御ループを動かす方法。サイクル中にアロケーションがあるとビルドが失敗する仕組みも紹介する。
- **[How much does it cost to run a text game with LLMs](https://dev.to/hiper2d/how-much-does-it-cost-to-run-a-text-game-with-llms-57o7)** - 入力・キャッシュ・出力の単価だけでは分からない、推論トークン量やキャッシュ率を含めた LLM のランニングコストを、テキストゲームを例に見積もる。
- **[AI Invented This npm Package. Someone Registered It. (Slopsquatting)](https://dev.to/refactorly/ai-invented-this-npm-package-someone-registered-it-slopsquatting-1k6k)** - AI アシスタントが実在しないパッケージ名を提案し、攻撃者がその名前を先に登録する「slopsquatting」の解説。AI 提案の依存関係は導入前に確認すべき。

## TechCrunch
- **[Apple reveals new Mac security controls as AI agents raise privacy risks](https://techcrunch.com/2026/11/16/apple-reveals-new-mac-security-controls-as-ai-agents-raise-privacy-risks/)** - macOS 27.3 で、AI エージェントなどのアプリに対する権限制御、警告、透明性の機能が追加される。エージェントがローカル環境を操作する前提で、OS 側の権限モデルが変わる。
- **[Uber says hackers stole information on close to 150,000 driver's licenses during data breach](https://techcrunch.com/2026/11/16/uber-confirms-hackers-stole-thousands-of-drivers-license-information-in-data-breach/)** - AI クラウド企業 Fireworks AI に保存されていた約 15 万件の運転免許情報が、セキュリティインシデントで盗まれた。外部の AI 基盤に預ける個人情報のサプライチェーンリスクを示す。
- **[California state AG sues OpenAI over rogue agent incidents](https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/)** - カリフォルニア州司法長官が、暴走したエージェントの事案で OpenAI を提訴。AI ラボに暴走エージェントの法的責任を問う最初期の試みの一つとされる。
- **[Cyber giant Infoblox confirms security incident after hackers access 'company information'](https://techcrunch.com/2026/11/16/cyber-giant-infoblox-confirms-security-incident-after-hackers-access-company-information/)** - ネットワーク・DNS セキュリティ大手 Infoblox が、外部調査機関と侵害の規模を調査中であることを認めた。

## Ars Technica
- **[Meet *sshole, the vulnerability that lets hackers SSH into Linux devices](https://arstechnica.com/security/2026/11/vulnerability-allows-attackers-to-log-into-some-linux-devices-sans-password/)** - 一部の Linux 機器にパスワードなしで SSH ログインできてしまう脆弱性。Alpine の特定設定が影響を受け、他のディストリビューションも該当する可能性がある。同社は別記事で、活発な悪用が始まったことも報じている。
- **[Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI](https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/)** - 研究者が、誰でも閲覧できる状態の Grok Build アプリ約 3.5 万件を発見。コーディングエージェントで作ったアプリの公開設定が機密漏えいにつながった事例。
- **[Anthropic VS code extension on Cursor backdoored for nearly 12 hours](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)** - Cursor 上の Anthropic の VS Code 拡張が約 12 時間バックドア化された。攻撃者がどうやって認証済みアカウントを入手したかは不明。拡張機能の供給網リスクに注意が必要。
- **[Binance says hackers who stole billions in crypto spent months planning heist](https://arstechnica.com/information-technology/2026/11/binance-says-hackers-who-stole-billions-in-crypto-spent-months-planning-heist/)** - 数十億規模の暗号資産窃取で、攻撃者は数か月かけて準備し、ノート PC への感染、社内ツールの侵害、偽の採用面接といった手口を使ったという。
- **[VMware releases vSphere Express for virtualization on up to 128 cores](https://arstechnica.com/information-technology/2026/11/vmware-releases-vsphere-express-for-virtualization-on-up-to-128-cores/)** - 最大 128 コアまでの仮想化向けに、小規模顧客の声を受けて提供される vSphere Express。

## 注目トピック
AI エージェントの権限・安全性が、製品、法規制、標準化の各レイヤーで同時に動いている。macOS 27.3 は OS レベルでエージェントの権限制御を強化し、IETF のサイドミーティングでは半数のエージェント関連議題が認証・委任・証跡だった。一方でカリフォルニア州による OpenAI 提訴、Grok Build アプリの大量露出、Cursor 上の拡張機能のバックドア化など、エージェントやその周辺ツールが原因の事故も目立つ。GTIG が観測した自律的な脆弱性悪用フレームワークも合わせると、検証と権限の設計が実装の前提になりつつある。

インフラ側では、軽量 VM による隔離（Hyperlight-Unikraft、Nitro Sandbox 上の Docker in Docker）と、LLM 推論の最適化（SageMaker の KV キャッシュ対応ルーティング、S3 Vectors / ElastiCache のハイブリッド検索）が並んだ。エージェントを安全に動かす隔離基盤と、RAG・推論を速く安く回す基盤の両方が整ってきている。
