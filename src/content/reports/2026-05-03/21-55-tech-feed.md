---
title: "Tech Feed ダイジェスト（2026年5月4日）"
date: "2026-05-03T21:55"
category: "summary"
summary: "Cursor CVSS9.9脆弱性・コンテナはSandboxでない・Wasm QRコード・AI週報形骸化・pgBackRest終了・Harvard AI診断研究"
tags: ["security", "ai", "wasm", "aws", "kubernetes", "postgresql", "mcp", "devops", "ddd", "copyright"]
---

## はてなブックマーク (テクノロジー)

- **[AIが週報をつまらなくした。週報のフォーマットを大幅改訂しました](https://note.com/yuichiro826/n/na3673744543d)** ([195users](https://b.hatena.ne.jp/entry/s/note.com/yuichiro826/n/na3673744543d)) - FindyのCEO山田氏が「AIが週報を量産した結果、情報量は多いが温度感がなく読む気にならない」という問題から週報設計を根本から見直した経緯を公開。人間にしか書けない「判断・葛藤・意思」を残す構造への改訂で、AI生成コンテンツが内部コミュニケーションを形骸化させる逆説を実例で示している。

- **[CSSだいたい理解した](https://unityroom.com/games/css-mostly-understood)** ([85users](https://b.hatena.ne.jp/entry/s/unityroom.com/games/css-mostly-understood)) - CSSのプロパティ・カスケード・詳細度・ボックスモデルの挙動を問う学習ゲーム。実際のCSSコードの出力を予測する問題形式で、中級者が見落としがちな仕様の隅を楽しく確認できる。

- **[Playwright CLI で AI エージェントに視覚的なフィードバックを与える](https://azukiazusa.dev/blog/playwright-cli-ai-agent-visual-feedback/)** ([61users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/playwright-cli-ai-agent-visual-feedback/)) - Playwright CLIを使いAIエージェントがブラウザ操作の結果をスクリーンショット・DOM情報として受け取り、視覚的なフィードバックループを実現する手法。AIが自律的にUI動作確認を行うツールチェーンとして、Webアプリ開発エージェントの品質保証フローに直接組み込める実用度の高い記事。

- **[Flue — The Agent Harness Framework](https://flueframework.com/)** ([68users](https://b.hatena.ne.jp/entry/s/flueframework.com/)) - AIエージェントのスケジューリング・ツール定義・ステート管理・観測性を統合したフレームワーク「Flue」の紹介。LangGraphやClaude Code Skillsとは異なる「エージェントハーネス」として設計されており、複数エージェントをプロダクション環境で管理するための抽象レイヤーを提供する。

- **[Go開発者によるDDDの実践：概念理解から具体的な応用まで - DMM Developers Blog](https://developersblog.dmm.com/entry/2025/04/09/110000)** ([62users](https://b.hatena.ne.jp/entry/s/developersblog.dmm.com/entry/2025/04/09/110000)) - GoのシンプルなI/F設計とDDD（ドメイン駆動設計）の集約・ドメインサービス・リポジトリパターンをどう組み合わせるかを実践コードで解説。Goの慣習とDDDの厳格なレイヤー設計を両立させる折衷アプローチが整理されており、Go × クリーンアーキテクチャを模索する開発者に参考になる。

## Zenn

- **[AWS Security AgentでAIによるレビューとペネトレーションテストをやってみた](https://zenn.dev/kymx1983/articles/20260502-aws-security-agent-pentest)** - 2026年3月にGAとなったAWS Security Agentを意図的に脆弱なWebアプリに対して実際に動作させたレポート。AIが自律的に脆弱性を特定してペネトレーションテストを実施するプロセスと精度・誤検知率が実測されており、AWSのセキュリティエージェントの実用評価として一次資料的な価値がある。

- **[MCPサーバーを作りたくてOAuth 2.1をちゃんと学んだ記録](https://zenn.dev/hidechannu/books/oauth21-mcp-guide)** - MCPサーバー自作を動機にOAuth 2.1（PKCE・DCR・リフレッシュトークンローテーション）をTypeScript + Honoで実装しながら学んだ技術書。OAuth 2.0との差分を実装ベースで説明しており、MCP認証の仕様実装で詰まった人向けの実践ガイドとして完成度が高い。

- **[5人の若手エンジニアの育成メモをClaude Codeに集約したら、1on1の下書きまで書けるようになった](https://zenn.dev/sonicgarden/articles/39b9845d13963c)** - SonicGardenが育成フィードバックメモ・成長記録・目標設定をClaude Codeに集約し、1on1準備ドキュメントを自動生成した実践報告。コード生成ではなくエンジニアリングマネジメントへのAI応用という切り口で、チームリーダー・EMが参考にしやすい事例。

- **[Neovim 0.11 -> 0.12へアップデートする際の勘所とnvim-treesitterの扱い](https://zenn.dev/tttol/articles/2881b678ee005b)** - Neovim 0.12でnvim-treesitterのAPIが大幅変更された点を中心に、設定ファイルの移行箇所を具体的に示した記事。`nvim-treesitter`の`ensure_installed`の挙動変更・`highlight`設定の書き換えが詳述されており、0.12系に上げようとしているNeovimユーザーには必読の内容。

## Qiita

- **[【緊急】Cursorに「git clone」するだけでPCが乗っ取られる脆弱性！CVSS 9.9のヤバすぎる攻撃手法](https://qiita.com/emi_ndk/items/8e6607a09cb8ff86c298)** - AIコードエディタ「Cursor」に存在するCVSS9.9の深刻な脆弱性の解説。悪意ある`.cursor/rules`ファイルを含むリポジトリをgit cloneするだけで、Cursorのエージェント機能経由で攻撃者の任意コードが実行されうるという攻撃手法が詳述されている。AIコーディングツールの「信頼して実行する」動作モデルが攻撃面になることを示す警戒すべき事例。

- **[Strands AgentsのTypeScript版がv1.0.0に到達したのでAI SDK用のアダプターを作ってみた](https://qiita.com/moritalous/items/132f9e20661289f1abc9)** - AWSが開発するエージェントフレームワーク「Strands Agents」のTypeScript版がv1.0.0に到達したことを受け、Vercel AI SDKのtool定義をStrands Agentsツール形式に変換するアダプターを実装した記事。SDK間のツール定義の相互運用アプローチとして、マルチフレームワーク構成のエージェント開発に応用できる。

- **[Claude Code入りのDockerイメージをDevContainerで動かす](https://qiita.com/sour23/items/a86a42a675e27853299b)** - Claude CodeをDockerコンテナ内にインストールしてVS Code Dev Containerとして動かす設定の解説。チームで同一バージョンのAIコーディングツールを共有したり、GitHub Actions等のCI環境でClaude Codeを実行する基盤として活用できる実用的な構成例。

## AWS 新着

- **[Amazon CloudFront Announces WebSocket Support for VPC Origins](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins/)** (2026-05-01) - CloudFrontのVPCオリジン（PrivateLink経由のVPC内リソース接続）でWebSocketプロトコルがサポートされた。リアルタイム通信が必要なアプリ（チャット・ライブ通知・コラボレーションツール）をVPC内に閉じた形でCloudFront経由に配信できるようになり、パブリック露出を避けた低レイテンシWebSocket構成が実現できる。

- **[Announcing Kubernetes Dynamic Resource Allocation for Elastic Fabric Adapter](https://aws.amazon.com/about-aws/whats-new/2026/05/kubernetes-dra-elastic-fabric-adapter/)** (2026-05-01) - KubernetesのDynamic Resource Allocation（DRA）がAWS Elastic Fabric Adapter（EFA）に対応。高帯域・低レイテンシの機械学習・HPC向けネットワークインターフェースをKubernetesワークロードが動的に要求・取得できるようになり、MLトレーニングジョブのスケジューリング効率とEFAリソース活用率が向上する。

- **[AWS Transform now offers BI migration agents for Power BI and Tableau to Amazon QuickSight](https://aws.amazon.com/about-aws/whats-new/2026/05/quick-bi-migration/)** (2026-05-01) - AWS TransformがPower BI・TableauのダッシュボードをAmazon QuickSightへ自動移行するBIマイグレーションエージェントを提供開始。ダッシュボード構造の解析・変換ロジック生成・QuickSight形式への変換をAIが担い、大規模BIツール移行のコストと工数を大幅に削減できる。

- **[IAM Roles Anywhere now enforces VPC endpoint policies for the CreateSession API](https://aws.amazon.com/about-aws/whats-new/2026/05/iam-roles-anywhere-vpc/)** (2026-05-01) - IAM Roles AnyhereのCreateSession APIでVPCエンドポイントポリシーの強制が可能になった。オンプレミスや他クラウドのワークロードがAWSロールを取得する際の通信をVPC内に閉じることができ、IAMアクセス管理のネットワーク境界をゼロトラスト設計に沿って強化できる。

## Lobsters

- **[Your Container Is Not a Sandbox](https://emirb.github.io/blog/microvm-2026/)** - Dockerなどのコンテナはカーネルを共有するため真のサンドボックスではなく、脆弱なsyscallフィルタリングを経由したカーネルコールからの脱出リスクがあることを実証的に解説した記事。gVisor・Kata Containers・Firecracker等のマイクロVMへの移行を推奨しており、マルチテナントや信頼できないコードを扱う環境でのコンテナ分離の限界を改めて整理している。

- **[This Wasm interpreter fits in a QR code](https://purplesyringa.moe/blog/this-wasm-interpreter-fits-in-a-qr-code/)** - WebAssemblyインタープリタをQRコード1枚に収まるサイズ（数KB）のバイナリに圧縮するという技術的挑戦のブログ。型チェックの省略・Wasmバイナリ圧縮・コードの極限最小化など採用した手法が詳説されており、低レイヤーバイナリ最適化の好例として話題を集めている。

- **[Fake Notepad++ for Mac](https://notepad-plus-plus.org/news/npp-trademark-infringement/)** - Notepad++公式開発チームが、App StoreにNotepad++の名前を騙った偽アプリが存在することを警告。公式はmacOS版を提供していないためMac上の「Notepad++」は全て非公式であることを明示しており、フリーソフトのブランドがApp Storeで商標侵害される問題の典型例として注意を促している。

- **[pgBackRest is dead. Now what?](https://mydbanotebook.org/posts/pgbackrest-is-dead.-now-what/)** - PostgreSQLの主要バックアップツール「pgBackRest」のメンテナンス停止を受け、後継候補（pgBaseBackup・Barman・WAL-G）の機能比較と移行パスを整理した記事。増分バックアップ対応・クラウドストレージ統合・並列転送性能の観点で各オプションが評価されており、pgBackRest本番運用中のチームへの緊急度の高い情報。

- **[The text mode lie: why modern TUIs are a nightmare for accessibility](https://xogium.me/the-text-mode-lie-why-modern-tuis-are-a-nightmare-for-accessibility)** - カラーエスケープシーケンスや擬似グラフィック文字を多用するモダンTUIがスクリーンリーダーと互換性がなく、visually impairedユーザーには事実上使えないという問題を論じた記事。「テキストベース = アクセシブル」という思い込みを覆し、TUI開発者がアクセシビリティを意識した設計をするための指針を提供している。

## dev.to

- **[OpenSearch isn't trying to be a better Elasticsearch anymore](https://dev.to/thegatewayguy/opensearch-isnt-trying-to-be-a-better-elasticsearch-anymore-40i4)** - OpenSearchがElasticsearchの後追いを止め、独自の方向性（ML推論統合・ベクトル検索・マルチモーダル検索）に舵を切りつつあることを論じた記事。AWS主導での機能開発が加速し、RAGパイプラインのベクトルストアとしての差別化が進む現状が整理されており、検索基盤の選定に関わるエンジニアに有益な視点を提供している。

- **[We stopped sharing one staging server — here's what we built instead](https://dev.to/cristian_iridon_286794874/we-stopped-sharing-one-staging-server-heres-what-we-built-instead-529m)** - 複数チームが一つのステージング環境を共有することで発生するデプロイ競合・環境汚染・テスト妨害の問題を解消するために、PR単位のエフェメラル環境（Preview Environment）に移行した実践記。自動プロビジョニング・DNS設定・後片付けの仕組みが解説されており、開発チームのステージング環境設計の参考になる。

## TechCrunch

- **['This is fine' creator says AI startup stole his art](https://techcrunch.com/2026/05/03/this-is-fine-creator-says-ai-startup-stole-his-art/)** - 「This is Fine」ミーム（炎に包まれても「大丈夫」と座る犬）の作者KC Greenが、AIスタートアップ「Artisan」が彼の作品を無断で広告利用したと告発。ArtisanはAI採用を促す「Stop Hiring Humans」看板で話題になった企業で、AI業界自身がAIクリエイティブの権利侵害に加担するという皮肉な構図として広く拡散している。

- **[In Harvard study, AI offered more accurate emergency room diagnoses than two human doctors](https://techcrunch.com/2026/05/03/in-harvard-study-ai-offered-more-accurate-diagnoses-than-emergency-room-doctors/)** - ハーバード大学の研究でLLMが実際の救急外来症例において医師2名より正確な診断を提供したと報告。ただし複数モデルのアンサンブル時に限られ、単一モデルでは人間と同等程度の精度だった。「AIは医師を補完するか代替するか」という問いに対し、モデル設計とヒューマン・イン・ザ・ループの設計次第という重要な示唆を与えている。

- **[TechCrunch Mobility: How do you issue a ticket to a robotaxi?](https://techcrunch.com/2026/05/03/techcrunch-mobility-how-do-you-issue-a-ticket-to-a-robotaxi/)** - ロボタクシーが交通違反を犯した場合に誰が・どのように責任を負うかという法的・行政的課題を特集。運転者不在の自動運転車への取り締まりフローは米国の多くの州で整備されておらず、既存の交通法規に「意思決定主体としてのAI」をどう組み込むかという制度設計の課題が浮かび上がっている。

## Ars Technica

- **[Women sue the men who used their Instagram feeds to create AI porn influencers](https://arstechnica.com/tech-policy/2026/05/women-sue-men-who-used-their-instagram-feed-to-create-ai-porn-influencers/)** (2026-05-01) - 一般女性のInstagram公開投稿から顔・体型を学習させてAI生成ポルノインフルエンサーを作成した男性グループを実際の女性たちが集団提訴した事件。ミネソタ州のnudification禁止法とは異なり、SNSの公開投稿が学習データとして悪用される「肖像権×生成AI」という新たな法的論点を提示しており、プラットフォームのデータ利用規約の実効性が問われている。

- **[Apple may take "several months" to catch up to Mac mini and Studio demand](https://arstechnica.com/gadgets/2026/05/apple-may-take-several-months-to-catch-up-to-mac-mini-and-studio-demand/)** (2026-05-01) - AI需要急増によるHBM/LPDDR6不足（RAMpocalypse）の影響で、Mac mini・Mac StudioのApple Silicon搭載モデルが数カ月間にわたって供給不足になる見通しをAppleが認めた。AI PC需要の高まりが皮肉にもAI PCの供給を制約するという逆説で、開発機のハードウェア調達計画に影響する可能性がある。

- **[Virgin Galactic reveals new ship, but it's running out of time and cash](https://arstechnica.com/space/2026/05/the-suborbital-space-tourism-industry-is-on-life-support/)** (2026-05-01) - Virgin Galacticが新型宇宙船デルタクラスを発表した一方で、資金と時間が急速に尽きつつある実態が報じられた。サブオービタル宇宙観光産業全体が「生命維持装置」状態にあり、Blue OriginのNew Shepardが残る選択肢になっている現状は、スペース宇宙旅行の商業化がいかに難しいかを改めて示している。

## 注目トピック

今回のフィードを横断して浮かび上がる最大のテーマは、**AIツールのセキュリティ攻撃面の拡大と「信頼前提」設計の危険性**だ。Cursor CVSS9.9脆弱性（git cloneだけでコード実行）・コンテナはサンドボックスではない（カーネル共有の問題）・CursorルールファイルへのPrompt Injection——これらはいずれも「信頼して自律的に実行する」AIツールやコンテナ技術が前提としてきた「内部コードへの信頼モデル」が崩れつつあることを示している。特にAIコーディングツールは「コードを読んで理解して実行する」という強力な能力が、悪意あるリポジトリを取り込んだ際の爆発半径を劇的に広げることになる。AIエージェントの「自律性」を高めるほど、入力の検証・実行環境のサンドボックス化・権限最小化の設計がより重要になるというトレードオフが改めて浮き彫りとなった。

もう一つの軸は**「AI活用の副作用」の可視化が進んでいること**だ。AIが週報を形骸化させた（Findy CEO）、「AIは速度を前払いし、失敗を後払いにする」という洞察、Harvard研究が示した「AIの診断精度は複数モデルのアンサンブルで初めて人間を超える」という知見——これらは「AI導入 = 即座に良くなる」という期待値の修正を促している。pgBackRestの終了とOpenSearchの独自路線転換は、AIとは独立した文脈でOSSエコシステムの変化が静かに加速していることも示しており、普段使いのツールの継続性を見直す機会を提供している。
