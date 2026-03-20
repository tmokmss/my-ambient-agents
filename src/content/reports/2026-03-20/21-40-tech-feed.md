---
title: "Tech Feed ダイジェスト（2026年3月21日）"
date: "2026-03-20T21:40"
category: "summary"
summary: "Trivy再侵害・Qwen3.5-9Bが120B超えのローカル性能・Rakuten AI 3.0無償公開・Nvidia GTC $1T AI bet・Blue Origin宇宙データセンター構想など。"
tags: ["ai", "security", "aws", "local-llm", "nvidia", "rust", "linux", "claude-code", "space", "supply-chain"]
---

## はてなブックマーク (テクノロジー)

- **[AI生成文から「AIくささ」を取り除く技術と、Claude Codeスキルに組み込むまでの話](https://zenn.dev/m0370/articles/205c9340a418c3)** ([201users](https://b.hatena.ne.jp/entry/s/zenn.dev/m0370/articles/205c9340a418c3)) - AI生成テキスト特有の「らしさ」を構造的に検出・除去するアプローチを検討し、実際にClaude Codeのカスタムスキルとして組み込む実装まで解説。出力品質を自動で均一化したい開発者に刺さる実践記事。

- **[3日50万円で作れるシステムに4ヶ月800万円かけれなくなっている](https://nowokay.hatenablog.com/entry/2026/03/20/153412)** ([107users](https://b.hatena.ne.jp/entry/s/nowokay.hatenablog.com/entry/2026/03/20/153412)) - AIコーディングツールの普及により「短期間・低コストで動くものを作れる」基準が上昇した結果、従来型の長期開発プロジェクトに予算を割くことへの社内説得が難しくなっているという観察。ソフトウェア開発の価値基準が急速に変わっていることへの鋭い考察。

- **[9BなのにGPT-4oを超える!? Qwen3.5-9Bがローカル AIの常識を変えた](https://ascii.jp/elem/000/004/378/4378807/)** ([99users](https://b.hatena.ne.jp/entry/s/ascii.jp/elem/000/004/378/4378807/)) - AlibabaのQwen3.5-9Bが従来の120Bクラスモデルに匹敵するベンチマーク性能を示しており、コンシューマーGPUで動かせる「小さくて賢い」モデルの世代交代が起きつつある。ローカルLLM運用のコストとスペックを根本から見直す必要が出てきた。

- **[2026年3月19日の Trivy 再侵害の概要と対応指針](https://diary.shift-js.info/trivy-compromise/)** ([80users](https://b.hatena.ne.jp/entry/s/diary.shift-js.info/trivy-compromise/)) - OSSコンテナ脆弱性スキャナのTrivyが再び悪意あるリリースv0.69.4に置き換えられる事件が発生。CIパイプラインでピン止めなしに最新版を使っているケースへの影響範囲と、バージョン固定・署名検証の重要性を解説する緊急対応ガイド。

- **[楽天がGPT-4o超えの「Rakuten AI 3.0」を無償公開！日本語性能で世界最高峰を圧倒](https://dxmagazine.jp/news/2611mm16/)** ([38users](https://b.hatena.ne.jp/entry/s/dxmagazine.jp/news/2611mm16/)) - 楽天が日本語処理に特化したLLM「Rakuten AI 3.0」を無償公開し、日本語ベンチマークでGPT-4oを上回る性能を主張。国産LLMが商用最強クラスとの比較に耐えるレベルに達した節目として注目されている。

## Zenn

- **[React Native開発が変わる。RozeniteでCoding Agentに「目と手」を与えた話](https://zenn.dev/tellernovel_inc/articles/bb27cd0f28f8cb)** - Coding Agentがモバイルアプリを実機で操作・スクリーンショット取得・UI検証まで行える環境をRozeniteで構築した事例。エージェントが「見て手を動かせる」ことで実機デバッグのフィードバックループを自動化でき、React Native開発のAI活用が質的に変わる可能性を示す。

- **[Claude Code × GitHubでプロダクトマネジメントを再設計した話](https://zenn.dev/tsubotax/articles/7fe5f02061ccb9)** - クラシルのプロダクト開発で、Claude CodeとGitHubを組み合わせてスプリント管理・要件定義・ステータス確認を一元化した事例。6つのScrumチームをコマンド1つで横断参照できる仕組みを作り、PM業務の定型作業をAIに委譲することで本質的な意思決定に集中できるようにした実践報告。

- **[LLMをもっと賢くする：ナレッジグラフ実践入門](https://zenn.dev/knowledge_graph/books/knowledge-graph-llm-guide)** - RAGだけでは解決できない「知識の構造化」問題を解決するためのナレッジグラフ活用を、入門から実装まで体系的に解説。エンタープライズでのKG構築の難所と、LLM・AI Agentとの統合アーキテクチャを一気通貫で学べる書籍形式のドキュメント。

- **[令和最新版 GoでのDockerfile / Docker Composeの書き方](https://zenn.dev/yashikota/articles/cb4a49553bd368)** - 2026年時点でのGoアプリケーション向けDockerfile/Compose設計の実践的ベストプラクティス。マルチステージビルドの最適化・Alpineとdistrolessの比較・開発環境と本番環境の分離方針など、現場でそのまま使える設定を公開。

- **[Reactをやめて MoonBit で50ページの業務システムを作った](https://zenn.dev/lehti/articles/c4b813a9192701)** - MoonBit（WebAssembly向け新言語）でReactを使わずに業務アプリを実装した挑戦記。WASMのバンドルサイズ・パフォーマンス・型安全性のメリットを生かしつつ、まだ成熟しきっていないエコシステムとの格闘が正直に語られており、フロントエンドの選択肢を広げる視点を提供している。

## Qiita

- **[CLAUDE.mdを設計するとClaude Codeの生産性が別物になる — 実際の設定と運用ワークフローを公開](https://qiita.com/nogataka/items/1ad4e4ccaf47816c63e0)** - CLAUDE.mdを「毎回指示する場所」ではなく「エージェントが迷わない構造を定義する場所」として設計することで、生成品質と一貫性が劇的に向上するという主張。実際の設定ファイルと運用フローを全公開しており、Claude Code導入直後のエンジニアに具体的な指針を与える。

- **[「OpenAI APIのトークン消費量をざっくり計算して」と頼まれて調べたら絶望した話](https://qiita.com/GeneLab_999/items/04ff280edc3178b60104)** - 日本語テキストのトークナイゼーション特性（英語の約1.5〜3倍のトークン数）、コンテキスト長・モデル選択・プロンプト設計がコストに与える複合的な影響を実測データで解説。APIコストの見積もりを依頼された際に必須となる知識が凝縮されている。

- **[Copilot Studioで実現する「AIチーム」の作り方。マルチエージェント開発入門](https://qiita.com/TND_mi/items/0fe0e777053eb52c6f5f)** - Microsoft Copilot Studioを使って複数のAIエージェントに役割分担させる「マルチエージェント」構成の設計方法を入門レベルから解説。オーケストレーションエージェントがサブエージェントを呼び出す設計パターンと、実務ユースケースへの適用例を紹介。

- **[【保存版】バグバウンティ実践者のための curl ― 偵察からPoC構築まで](https://qiita.com/kaminuma/items/6bd7359a202f0102a240)** - バグバウンティ・脆弱性診断の現場でcurlを主力ツールとして活用するための高度なテクニック集。ヘッダー操作・認証バイパス試行・レスポンス解析まで、Burp Suiteなしで実施できる偵察とPoC構築の実践的ハウツー。

## AWS 新着

- **[NVIDIA Nemotron 3 Super が Amazon Bedrock で利用可能に](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-nemotron-3-super/)** (Mar 18) - NVIDIAのオープンなハイブリッドMixture-of-Experts（MoE）モデル「Nemotron 3 Super」がBedrockに追加。マルチエージェント・長文脈タスクに最適化されており、ウェイトやデータセットが公開済みのためファインチューニングも容易。OpenAI API互換エンドポイントから即座に利用可能。

- **[Minimax M2.5 と GLM 5 が Amazon Bedrock で利用可能に](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-minimax-glm/)** (Mar 18) - エージェント特化型のMinimax M2.5と、複雑なシステムエンジニアリング・長期推論に強いGLM 5がBedrockに追加。Bedrockのモデル選択肢の多様化が進んでおり、用途別の最適モデル選択戦略が重要になってきた。

- **[AWS Neuron が Amazon EKS での Dynamic Resource Allocation をサポート](https://aws.amazon.com/about-aws/whats-new/2026/03/neuron-eks-dra-support/)** (Mar 19) - Kubernetes-native なハードウェアアウェアスケジューリングをTrainiumベースのEKSクラスターで実現するNeuron DRAドライバーを発表。MLエンジニアがデバイス数やトポロジーを意識せずにマニフェストを書けるようになり、分散トレーニングと長文脈推論の展開が大幅に簡素化される。

- **[NIXL with EFA でスケールLLM推論を加速](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-support-nixl-with-efa/)** (Mar 19) - NVIDIA Inference Xfer Library（NIXL）とEFAを組み合わせたdisaggregated LLM推論の最適化がEC2で利用可能に。プリフィルノードとデコードノード間のKVキャッシュ転送スループットを向上させ、SGLang・vLLM・NVIDIA Dynamoとネイティブ統合が可能。

## Lobsters

- **[What we heard about Rust's challenges, and how we can address them](https://blog.rust-lang.org/2026/03/20/rust-challenges.md/)** - Rustコアチームが収集したRust採用・学習の課題に関するフィードバックと対応策を公式ブログで公開。借用チェッカーの学習曲線・コンパイル時間・エコシステムの断片化などが主要課題として挙がっており、言語・ツールチェーン改善のロードマップ策定への意欲が示されている。

- **[Trivy Compromised a Second Time - Malicious v0.69.4 Release](https://www.stepsecurity.io/blog/trivy-compromised-a-second-time---malicious-v0-69-4-release)** - はてブでも話題のTrivy再侵害事件について、StepSecurityが詳細な技術解析を公開。GitHubリリースページへの不正アクセスによってバイナリが差し替えられる攻撃で、CI/CDにおけるツールのバージョンピン止め・ハッシュ検証・OIDCを用いた署名検証の重要性が改めて浮き彫りになった。

- **[Wayland set the Linux Desktop back by 10 years](https://omar.yt/posts/wayland-set-the-linux-desktop-back-by-10-years)** - X11からWaylandへの移行がLinuxデスクトップエコシステムに与えた後退を批判的に考察した記事。スクリーンキャスト・リモートデスクトップ・独自クライアントツールなど、X11ではできていたことが依然として不完全な実装にとどまっている現状を列挙し、「下位互換性を犠牲にした設計思想」を問い直している。

- **[EnshittifAIcation](https://it-notes.dragas.net/2026/03/20/enshittifaication/)** - 「Enshittification」（プラットフォームの質の低下）をAI時代に拡張した造語を使い、AIの大量統合によって製品品質が全体的に低下している現象を批判。AI機能の押し付け・生成コンテンツによる検索結果の汚染・ツールの使い勝手の劣化が「Enshittification」の新たな形態だという主張。

- **[AI's impact on mathematics is analogous to the car's impact on cities](https://mathstodon.xyz/@tao/116252708577614828)** - テレンス・タオが数学に対するAIの影響を「自動車が都市構造を変えたように、AIは数学の構造を変える」と比喩。AIが証明補助・パターン発見を担う一方で、数学者の仕事の本質が問い直されており、短期的効率化と長期的創造性への影響についての示唆に富む観察。

## dev.to

- **[steamworks-ffi-node: A Steamworks SDK Library for JavaScript Game Frameworks](https://dev.to/arty_prof/steamworks-ffi-node-a-steamworks-sdk-library-for-javascript-game-frameworks-15h1)** - SteamworksSDKをFFI経由でNode.jsから利用できるライブラリ。C++ネイティブアドオン（node-gyp不要）ではなくKoffiによるFFIアプローチを採用し、Electronゲームでのアチーブメント・リーダーボード・Steam Overlayを実装可能にした技術解説。Linux ABI差異によるメモリ破壊バグの原因と修正も詳述。

- **[How to Build Your First MCP Server in 10 Minutes](https://dev.to/nebulagg/how-to-build-your-first-mcp-server-in-10-minutes-319)** - Model Context Protocol（MCP）サーバーを10分で構築するハンズオン形式の入門記事。Claude・Cursor等のAIエディタと外部ツールを接続する「ブリッジ」としてのMCPの仕組みを素早く体験でき、自前のデータソースやAPIをAIエージェントに公開する最初の一歩として最適。

- **[Why Your OpenClaw Agent Gets Slower and More Expensive Over Time](https://dev.to/astrodevil/why-your-openclaw-agent-gets-slower-and-more-expensive-over-time-5c5e)** - エージェントの会話履歴が積み重なるにつれてコンテキストウィンドウが肥大化し、レスポンス遅延とトークンコストが増加するという構造的問題を解説。会話履歴の要約・要点ピックアップ・サブエージェント分割など、エージェントの長期運用に必要なコスト制御パターンを整理している。

## TechCrunch

- **[Microsoft rolls back some of its Copilot AI bloat on Windows](https://techcrunch.com/2026/03/20/microsoft-rolls-back-some-of-its-copilot-ai-bloat-on-windows/)** - Microsoftが写真・ウィジェット・メモ帳など各アプリへのCopilotの統合を削減・後退させると発表。AI機能の過剰統合に対するユーザーの反発を受けた対応で、「AI何でも統合」路線から「必要な場所にだけ統合する」路線への軌道修正が鮮明になった。

- **[What happened at Nvidia GTC: NemoClaw, Robot Olaf, and a $1 trillion bet](https://techcrunch.com/video/what-happened-at-nvidia-gtc-nemoclaw-robot-olaf-and-a-1-trillion-bet/)** - Jensen HuangがNvidia GTCで2.5時間の基調講演を実施し、2027年までに1兆ドルのAIチップ販売を予測。「OpenClaw戦略」を全企業が持つべきと宣言し、NemoClawフレームワークとロボットのOlafをデモ。AIインフラ投資の規模感が改めて示された。

- **[WordPress.com now lets AI agents write and publish posts, and more](https://techcrunch.com/2026/03/20/wordpress-com-now-lets-ai-agents-write-and-publish-posts-and-more/)** - WordPress.comがAIエージェントによる記事の自動執筆・公開を可能にする新機能を追加。コンテンツ制作の参入障壁がさらに下がる一方で、Web上の機械生成コンテンツの爆発的増加が課題として浮上。出版プラットフォームにおけるAI統合の是非が問われている。

- **[Jeff Bezos' Blue Origin enters the space data center game](https://techcrunch.com/2026/03/20/jeff-bezos-blue-origin-enters-the-space-data-center-game/)** - Blue OriginがProject Sunrise として5万基超の衛星を使った軌道上コンピューティング基盤を構想中と報道。地上データセンターのエネルギー問題を宇宙で解決するという発想で、Bezosの宇宙・AI・製造業への大規模投資戦略の新局面を示している。

- **[US accuses Iran's government of operating hacktivist group that hacked Stryker](https://techcrunch.com/2026/03/20/u-s-accuses-irans-government-of-operating-hacktivist-group-that-hacked-stryker/)** - 米司法省がイラン安全保障省が「Handala」という偽のハクティビストグループを運営し、医療機器大手Strykerへの破壊的サイバー攻撃を実行したと起訴。国家によるハクティビスト偽装型サイバー攻撃の新たな事例として、重要インフラへの脅威が改めて浮き彫りになった。

## Ars Technica

- **[Trump FCC lets Nexstar buy Tegna and blow way past 39% TV ownership cap](https://arstechnica.com/tech-policy/2026/03/fcc-lets-nexstar-buy-tegna-creating-trump-approved-broadcaster-reaching-80-of-us/)** (Mar 20) - FCCがNexstarのTegna買収を承認し、全米世帯の80%に到達するTV放送局グループの誕生を認める前例のない決定。法定の39%上限を大幅に超えるウェーバーを付与したことで、メディア集中規制の形骸化と報道の多様性低下への懸念が高まっている。

- **[Perseverance's radar revealed ancient subsurface river delta on Mars](https://arstechnica.com/science/2026/03/perseverances-radar-revealed-ancient-subsurface-river-delta-on-mars/)** (Mar 20) - NASAのPerseveranceローバーが搭載するRIMFAXレーダーが、ジェゼロクレーターの可視デルタの地下数十メートルに、より古い河川デルタの地層を発見。生命の痕跡（バイオシグネチャー）が地下深くに保存されている可能性を示す発見で、将来のサンプルリターンへの期待が高まる。

- **[NASA wants to know how the launch industry's chic new rocket fuel explodes](https://arstechnica.com/space/2026/03/nasa-is-blowing-stuff-up-to-study-the-explosive-potential-of-methalox-rockets/)** (Mar 20) - SpaceXのRaptorやBlue OriginのBE-4が採用するメタン/液体酸素（methalox）の爆発特性をNASAが実験的に研究中。従来の燃料と異なる爆発挙動の把握が、SpaceX Starship・Blue Origin New Glaneなど次世代ロケット群の射場安全管理に不可欠なことが背景にある。

## 注目トピック

本日のフィードで最も重要な技術的関心事は **Trivyの再侵害事件**だ。セキュリティスキャナー自体がCI/CDパイプライン上の攻撃面になるという逆説を突いたこの攻撃は、Lobsters・はてブ双方で上位に入っており、OSS依存のバージョンピン止め・ハッシュ検証・SLSA準拠の重要性を改めて問いかけている。GlassWormによる「不可視コード」サプライチェーン攻撃（今朝のレポートで既報）と合わせ、開発ツールチェーン全体がアタックサーフェスとして標的にされる時代に入ったと言える。

AIインフラの競争では、Amazon BedrockへのNemotron 3 Super・Minimax M2.5・GLM 5追加と、Nvidia GTC での「$1兆ドル賭け」発言、さらにBlue Originの宇宙データセンター構想が重なった。ローカルLLM側では Qwen3.5-9B が120Bクラスの性能を達成し「小型で強力」世代が到来。Rakuten AI 3.0 の無償公開も日本語LLM競争の激化を示す。一方Microsoftが Windows への Copilot 過剰統合を後退させたことは「AIファースト」から「AI適切統合」へのリセットの兆候として注目に値する。
