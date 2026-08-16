---
title: "Tech Feed ダイジェスト（2026年7月22日）"
date: "2026-07-22T11:17"
category: "summary"
summary: "uvがPythonパッケージ管理の主流に、ニチレイへのランサムウェア攻撃をRansomHouseが犯行声明"
tags: ["python", "security", "ai", "aws", "ransomware"]
---

## はてなブックマーク (テクノロジー)

- **[最近、なぜみんなuvを使っているんですか？ Pythonパッケージ管理の変遷と現在地](https://findy-code.io/media/articles/chotto-wakaru-python)** ([320users](https://b.hatena.ne.jp/entry/s/findy-code.io/media/articles/chotto-wakaru-python)) - pip・venv・Poetryと乱立してきたPythonのパッケージ管理ツールの歴史を振り返りつつ、Rust製の高速ツールuvがなぜ急速にデファクトスタンダード化しているのかを整理した記事。依存解決やインストールの速度だけでなく、ツールチェーンの一本化という観点が支持を集めている。
- **[エンジニアの成果、結局どう測ればいいのか](https://zenn.dev/awesome_kou/articles/engineer-performance-metrics)** ([270users](https://b.hatena.ne.jp/entry/s/zenn.dev/awesome_kou/articles/engineer-performance-metrics)) - 「PRを何個マージしたか」のような表面的な指標では測れないエンジニアの成果を、評価面談という具体的な文脈でどう言語化すべきかを考察した記事。定量指標偏重への違和感が広く共感を呼んでいる。
- **[【速報】ニチレイ障害、ハッカー集団が犯行声明](https://www.47news.jp/14661811.html)** ([158users](https://b.hatena.ne.jp/entry/s/www.47news.jp/14661811.html)) - 食品大手ニチレイのシステム障害について、ランサムウェアグループRansomHouseが自らの犯行だと声明を出したと報じられた。過去にはアスクルへの攻撃も主張しており、食品・物流サプライチェーンを狙う攻撃が続いている。
- **[Rust に書き直さなくても C 言語をメモリ安全にできる Fil-C を試した](https://zenn.dev/mattn/articles/cace8c5a00b9cc)** ([90users](https://b.hatena.ne.jp/entry/s/zenn.dev/mattn/articles/cace8c5a00b9cc)) - 既存のC言語コードを書き直すことなく、ポインタにケイパビリティを埋め込む仕組みでメモリ安全性を後付けするコンパイラ基盤Fil-Cを実際に試した記事。「Rustへの全面移植」以外の選択肢として注目されている。
- **[Claudeが目で仕事を覚える「スキルを記録」機能　PC作業を録画して分析、Claude Coworkが再現できるスキル化](https://www.techno-edge.net/article/2026/07/22/5317.html)** ([54users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/07/22/5317.html)) - Claude Coworkに、人間のPC操作を録画して分析し、同じ作業を再現できる「スキル」として記録する機能が搭載されたと報じられた。手順を言語化せずとも操作の実演からエージェントに仕事を教え込める点が新しい。

## Zenn

- **[Claude Code + Notion でターミナルから一歩も出ずにタスク消化・ドキュメント生成を全自動化する](https://zenn.dev/epicai_techblog/articles/1bc0f3769bfddc)** - Notionで管理しているタスクをClaude Codeから直接読み書きし、タスク消化からドキュメント生成までターミナルを離れずに完結させる自動化構成を紹介した記事。
- **[Unity CLI でAIエージェントにゲームを作らせてみた](https://zenn.dev/tkada/articles/1ba97707dee14a)** - Unity公式のCLIを使い、AIエージェントにゲーム制作の一部を任せてみた検証記事。GUI操作前提だったゲームエンジンがCLI経由でエージェント駆動開発の対象になりつつある一例。
- **[フロントエンドに広がりつつある OpenTelemetry：Browser SDK の現在地](https://zenn.dev/cybozu_frontend/articles/opentelemetry-browser-frontend)** - サーバーサイドの計装が中心だったOpenTelemetryが、Browser SDKによってフロントエンドの分散トレーシングにも広がりつつある現状を整理した記事。
- **[自社のレビュー履歴からAIコードレビュアーをつくる方法](https://zenn.dev/estie/articles/f0f114389662ba)** - 汎用のAIコードレビューツールではなく、自社の過去のレビュー履歴を学習データとして活用し、チーム固有の指摘基準を反映したAIコードレビュアーを構築する方法を紹介した記事。
- **[Async React時代の宣言的UI 3: useActionStateでユーザーの操作を妨げないUXを作る](https://zenn.dev/uhyo/articles/async-react-action-queue)** - React 19で導入されたuseActionStateを非同期版useReducerとして捉え直し、連続操作でもユーザーを待たせない宣言的UIの組み方を解説した記事。

## Qiita

- **[shadcn/ui が Base UI をデフォルトに — 公式発表から読み解く移行の背景と実務対応](https://qiita.com/t-kurasawa/items/df29e251165c3ad91487)** - 人気UIライブラリshadcn/uiが基盤をRadix UIからBase UIへ切り替えるという公式発表の背景を読み解き、既存プロジェクトが取るべき移行対応を整理した記事。
- **[LLMコストを最適化する？ AI Routerを実装してみた](https://qiita.com/bbrfkr/items/03d5a65dd364c0fa5709)** - リクエストの難易度に応じて複数のLLMモデルへ動的にルーティングし、精度を保ちながらコストを抑える「AI Router」を実装した記事。全リクエストを高性能モデルに投げる運用の非効率さに一石を投じている。
- **[assistant-ui と AG-UI でAIエージェントのフロントエンドを作ってみる](https://qiita.com/Takenoko4594/items/3c3e9d635a15be1d5105)** - AIエージェント向けのUIコンポーネント群assistant-uiと、エージェント-フロントエンド間のプロトコルAG-UIを組み合わせて、チャットUIを構築した実践記事。
- **[小さなLLM（Llama-3.2-1B）をQLoRAでファインチューニングしてFunction Callingを覚えさせてみた](https://qiita.com/Thanush/items/44724e8672f06332ff2e)** - 10億パラメータ級の小型LLMに対し、QLoRAで省メモリにファインチューニングを行い、Function Calling（関数呼び出し）能力を後付けで習得させた検証記事。
- **[【Mac / 無料 / ローカル完結】whisper.cppで高精度な文字起こし環境を構築する](https://qiita.com/hatsukaze/items/abbd505c140409e5289d)** - クラウドAPIを使わずMac上でwhisper.cppをビルドし、無料かつローカル完結で高精度な音声文字起こし環境を構築する手順をまとめた記事。

## AWS 新着

- **[Amazon SES introduces pricing plans](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ses-pricing-plans/)** (2026-07-21) - Amazon SESに、利用量を評価せずとも導入しやすい定額制の料金プランが追加された。従量課金一辺倒だったメール送信基盤の価格設計に選択肢が増えた形。
- **[Amazon ECS advanced deployment strategies now available in AWS European Sovereign Cloud](https://aws.amazon.com/about-aws/whats-new/2026/07/ecs-adv-deployments-eu-sovereign-cloud/)** (2026-07-21) - Amazon ECSの高度なデプロイ戦略（Blue/Greenなど）が、EUデータ主権要件に対応したAWS European Sovereign Cloudでも利用可能になった。
- **[Amazon SageMaker HyperPod now supports partition-level topology for Slurm orchestrated clusters](https://aws.amazon.com/about-aws/whats-new/2026/07/hyperpod-partition-topology-slurm/)** (2026-07-17) - SageMaker HyperPodのSlurmクラスタで、パーティション単位でネットワークトポロジーを設定できるようになった。1つの大規模クラスタ内で異なるハードウェア構成のジョブを効率よく配置できる。
- **[Amazon OpenSearch UI now supports one-click dashboard migration](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-opensearch-ui-one-click-dashboard-migration)** (2026-07-17) - 旧OpenSearch DashboardsからOpenSearch UIへ、ワンクリックでダッシュボードを移行できるようになった。UI刷新に伴う移行作業の手間を大幅に削減する。
- **[Amazon CloudWatch Synthetics now supports customer managed encryption keys](https://aws.amazon.com/about-aws/whats-new/2026/07/synthetics-customer-managed-keys/)** (2026-07-16) - CloudWatch Syntheticsのカナリア環境変数の暗号化に、顧客管理のKMSキーが使えるようになった。監視基盤側の秘匿情報管理をより厳格に統制したいセキュリティ要件に対応する。

## Lobsters

- **[GitHub suddenly rejected my SSH key (the fix was a .pub file?!)](https://thorsell.io/2026/07/21/github-ssh-keys.html)** (54pt) - GitHubに突然SSHキーを拒否されるようになったトラブルの原因が、秘密鍵ではなく`.pub`拡張子付きの公開鍵ファイルの扱いにあったという顛末記。地味だが誰もがハマりうる設定の落とし穴として支持を集めた。
- **[Free Ink · An open ecosystem for e-readers](https://freeink.org/)** (34pt) - 特定ベンダーに縛られない、オープンな電子書籍リーダー向けエコシステムを構築するプロジェクト「Free Ink」の紹介。囲い込みが強いE-Inkデバイス市場に対するオープンソース側からの提案。
- **[LG to Ban Residential Proxies from Smart TV Apps](https://krebsonsecurity.com/2026/07/lg-to-ban-residential-proxies-from-smart-tv-apps/)** (24pt) - LGがスマートTVアプリからの住宅用プロキシ（レジデンシャルプロキシ）経由アクセスを禁止する方針を発表した。広告不正やボット対策として、IoTデバイスの通信経路自体を制限する動きが進んでいる。
- **["No AI" Statements Are Much More Than Mere Statements](https://journal.james-zhan.com/no-ai-statements/)** (23pt) - 作品やコードに添える「No AI」表明が単なる意思表示ではなく、法的・倫理的な意味を持つ行為だと論じるエッセイ。AI生成物の氾濫に対する個人の意思表示の重みを考察している。
- **[COSMIC DE's First Seven Months](https://system76.com/blog/post/cosmic-de-first-seven-months)** (18pt) - System76が開発するRust製デスクトップ環境COSMIC DEの、正式リリースから7ヶ月間の進捗と反響を振り返った記事。OSSデスクトップ環境の新規参入がLinuxエコシステムに与えた影響が語られている。

## dev.to

- **[Turning an existing database into a documented Laravel API](https://dev.to/nameless0l/turning-an-existing-database-into-a-documented-laravel-api-2eia)** - ドキュメントが存在せず、データベースだけが仕様書代わりという状態のレガシーシステムから、Laravelで自動ドキュメント付きのAPIを構築していく手順を解説した記事。
- **[The AI Supply Chain Attack Surface Nobody's Actually Checking](https://dev.to/coridev/the-ai-supply-chain-attack-surface-nobodys-actually-checking-3ogh)** - モデルの重みやデータセット、AIエージェントが利用する外部ツールなど、AI開発特有のサプライチェーンに潜む攻撃対象領域が、プロンプトインジェクション対策の陰で見落とされがちだと警鐘を鳴らす記事。
- **[SEO for Developers: Stop Focusing on Keywords and Start Fixing the DOM](https://dev.to/ntty/seo-for-developers-stop-focusing-on-keywords-and-start-fixing-the-dom-f4d)** - マーケター視点のキーワード対策ではなく、レンダリング順序やDOM構造そのものを是正することが開発者にできる本質的なSEO対策だと主張する記事。
- **[Hardening a PHP Video Admin Panel With CSRF Double-Submit Cookies](https://dev.to/ahmet_gedik778845/hardening-a-php-video-admin-panel-with-csrf-double-submit-cookies-44a3)** - 未認証のボットが管理画面の削除エンドポイントを叩いてしまった実インシデントを踏まえ、CSRFダブルサブミットCookieパターンでPHP製管理画面を堅牢化した実践記事。
- **[Snap 8 Windows into a Grid on an Ultrawide in One Command](https://dev.to/bokuwalily/snap-8-windows-into-a-grid-on-an-ultrawide-in-one-command-a-swift-applescript-convergence-loop-4oha)** - ウルトラワイドモニタ上で8つのウィンドウを1コマンドでグリッド整列させるツールを、Swift+AppleScriptの組み合わせと5つの落とし穴とともに作り込んだ「Claude Code環境構築」シリーズの一篇。

## TechCrunch

- **[Glow emerges from stealth at $1.2B valuation to challenge endpoint security in the AI era](https://techcrunch.com/2026/07/22/glow-emerges-from-stealth-at-1-2b-valuation-to-challenge-endpoint-security-in-the-ai-era/)** - エンドポイントセキュリティ企業Glowが、評価額12億ドルでステルスモードから登場した。AIエージェントや開発者ツールが企業内に大量導入されたことで生まれた新種のエンドポイントリスクを狙う。
- **[The Anthropic-Physical Intelligence rumor roiling AI Twitter](https://techcrunch.com/2026/07/21/the-anthropic-physical-intelligence-rumor-roiling-ai-twitter/)** - AnthropicとOpenAIが2026年に相次いで積極的な買収攻勢をかけてきたことを背景に、週末にAI業界のTwitter（X）を騒がせたAnthropicとロボティクス企業Physical Intelligenceを巡る買収の噂を報じた記事。
- **[Dimension Capital's $800M third fund shows the intersection of science and compute is booming](https://techcrunch.com/2026/07/21/dimension-capitals-800m-third-fund-shows-the-intersection-of-science-and-compute-is-booming/)** - 創業4年のVC Dimension Capitalが、前回ファンドより60%大きい8億ドル規模の第3号ファンドを組成した。科学研究とコンピュート（計算資源）の交差領域への投資が急拡大している実態を示している。
- **[Tesla spins up robotaxi pilots in Orlando and Tampa ahead of Q2 earnings](https://techcrunch.com/2026/07/21/tesla-spins-up-robotaxi-pilots-in-orlando-and-tampa-ahead-of-q2-earnings/)** - Teslaがロボタクシーの試験運用地域をオーランドとタンパに拡大したと発表した。CEOが約束していた急拡大ペースに比べ、実際の展開は依然として慎重なものにとどまっている。
- **[Apple teams up with Klarna to launch a lease-to-own program for iPhones, iPads, and Macs](https://techcrunch.com/2026/07/21/apple-teams-up-with-klarna-to-launch-a-lease-to-own-program-for-iphones-ipads-and-macs/)** - AppleがBNPL（後払い）大手Klarnaと提携し、iPhoneやiPad、Macを月払いで使いながら最終的に所有権を得られるリース購入プログラムを開始した。製品値上げが見込まれる中でのハードウェア販売戦略の転換点。

## Ars Technica

- **[The Space Force is now seeking to buy up to $30 billion in rocket launches](https://arstechnica.com/science/2026/07/the-space-force-is-now-seeking-to-buy-up-to-30-billion-in-rocket-launches/)** - 米宇宙軍が最大300億ドル規模のロケット打ち上げ契約を新たに発注しようとしていると報じられた。SpaceX一強だった軍需ロケット調達に複数事業者を巻き込む狙いがある。
- **[Nintendo says users voluntarily paid higher prices, have no right to tariff refunds](https://arstechnica.com/tech-policy/2026/07/nintendo-customers-have-no-legal-right-to-tariff-refunds-company-tells-judge/)** - 関税分の値上げを製品価格に転嫁したNintendoに対し、消費者側が返金を求めた訴訟で、Nintendo側は「利用者は値上げを承知の上で自発的に購入した」と主張し法廷で争っている。
- **[AT&T loses key ruling in bid to stop offering basic phone service in California](https://arstechnica.com/tech-policy/2026/07/att-loses-key-ruling-in-bid-to-stop-offering-basic-phone-service-in-california/)** - AT&Tがカリフォルニア州での基礎的な固定電話サービス提供義務からの撤退を求めていた申し立てが、規制当局によって退けられた。ユニバーサルサービス義務と通信事業者の合理化圧力がせめぎ合う事例。

## 注目トピック

今回最も象徴的だったのは、Pythonのツールチェーンを巡る地殻変動だ。はてなブックマークでは「なぜみんなuvを使っているのか」という記事が320usersを集め、pip・venv・Poetryと乱立してきたPythonパッケージ管理がRust製の高速ツールuvへ急速に収斂しつつある様子を伝えた。同様の「既存言語資産を書き直さずに強化する」流れは、90usersを集めたFil-Cの記事にも表れている。C言語をRustに全面移植するのではなく、ケイパビリティベースの仕組みでメモリ安全性を後付けするアプローチが評価されており、言語移行という重い意思決定を避けつつ安全性を高めたいというニーズの高まりがうかがえる。

セキュリティ面では、食品大手ニチレイへのランサムウェア攻撃をRansomHouseが自ら犯行声明を出した一件が158usersを集めた。同グループは過去にアスクルへの攻撃も主張しており、食品・物流サプライチェーンが繰り返し標的にされている。dev.toではAI開発特有のサプライチェーン攻撃対象領域が見落とされがちだと警鐘を鳴らす記事も読まれており、プロンプトインジェクションのような直接的な攻撃だけでなく、モデルやツール連携の裏側に潜むリスクへの関心も高まっている。ビジネス面ではエンドポイントセキュリティ企業Glowが評価額12億ドルでステルスを脱するなど、AIエージェント時代特有のセキュリティ需要に投資マネーが集まり続けている。
