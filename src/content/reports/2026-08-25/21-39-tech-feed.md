---
title: "Tech Feed ダイジェスト（2026年8月26日）"
date: "2026-08-25T21:39"
category: "summary"
summary: "CanvasにHTMLを描く新API、認可トークンの標準化、MCPツール定義のサニタイズなど、仕様と権限設計を掘り下げる記事が目立った一日"
tags: ["web", "security", "aws", "ai", "llm", "rust"]
---

## はてなブックマーク (テクノロジー)

- **[新API「HTML-in-Canvas」を紹介 - CanvasにHTMLを描くAPIは何を解決するのか？ - ICS MEDIA](https://ics.media/entry/260825/)** ([98users](https://b.hatena.ne.jp/entry/s/ics.media/entry/260825/)) - Canvas要素の中にHTML/CSSをそのまま描画できる新APIを解説した記事。これまで`foreignObject`などSVG経由の回避策が必要だったCanvas×リッチテキスト表現の問題を、標準APIレベルで解決しようとする動きを紹介している。
- **[マイクロサービス間の認可伝搬をどう解くか？独自実装と IETF Transaction Tokens を見比べてみた](https://zenn.dev/layerx/articles/e01465a15e79c2)** ([63users](https://b.hatena.ne.jp/entry/s/zenn.dev/layerx/articles/e01465a15e79c2)) - マイクロサービス間でユーザーの認可コンテキストをどう伝搬させるかという課題に対し、自作の仕組みとIETFで標準化中のTransaction Tokensを比較検証した記事。バクラクが実際に抱えていた課題と標準化提案の解こうとしている問題がほぼ一致していたという具体的な気づきを共有している。
- **[敵対的検証をLLMコードレビューで試すと何が起きるのか](https://zenn.dev/knowledgesense/articles/0cb441713c9fee)** ([36users](https://b.hatena.ne.jp/entry/s/zenn.dev/knowledgesense/articles/0cb441713c9fee)) - LLMにコードレビューをさせる際、単純な指摘ではなく複数のレビュアーが互いの指摘を反証し合う敵対的検証の構成を試した記事。1回のレビューでは見逃されがちな誤検知や見落としが、対立させることで浮き彫りになる様子を具体的に示している。
- **[デモGIFの録画をコードで表現できるVHSが便利。AIに任せられるのも良い - $shibayu36->blog;](https://blog.shibayu36.org/entry/2026/08/25/173000)** ([21users](https://b.hatena.ne.jp/entry/s/blog.shibayu36.org/entry/2026/08/25/173000)) - ターミナル操作のデモGIFをシェルスクリプトのようなテープファイルとして記述し、再現可能な形で生成できるツールVHSを紹介した記事。手作業でのスクリーン録画と違い、テキストベースの定義なのでAIエージェントに生成を任せやすい点を評価している。
- **[GitHub - goccy/go-llama: llama.cpp in pure Go](https://github.com/goccy/go-llama)** ([11users](https://b.hatena.ne.jp/entry/s/github.com/goccy/go-llama)) - llama.cppをCGoに頼らず純粋なGoだけで再実装したプロジェクト。C++ライブラリへの依存を切り離すことで、Goのビルド・デプロイの単純さを保ったままローカルLLM推論を組み込めるようにする狙いがある。

## Zenn

- **[ターミナルを閉じてもClaude Codeが動き続ける理由、supervisorデーモンとAgent viewについて](https://zenn.dev/uehaj/articles/claude-code-supervisor-agent-view)** - Claude Codeのresearch preview機能であるsupervisorデーモンとAgent viewの仕組みを解説した記事。ターミナルのプロセスとエージェントの実行が分離されたことで、セッションを切断してもタスクが継続する挙動を具体的に説明している。
- **[semantic-routerとQdrantで、LLMを呼ばずに問い合わせを振り分けてみた](https://zenn.dev/shogo_h/articles/qdrant-semantic-router)** - 問い合わせをどの窓口に回すか判定するためだけに毎回LLMを呼ぶコストを避け、semantic-routerとQdrantによる文の意味的近さだけで振り分ける手法を検証した記事。代表的な言い回しをいくつか登録するだけで実用的な精度が出せることを具体的に示している。
- **[状態空間モデルにおけるFilteringとSmoothingの違いを理解する](https://zenn.dev/ca_kagglers/articles/ssm-filtering-smoothing)** - 時系列データから直接観測できない状態を推定する状態空間モデルにおいて、過去の観測のみを使うFilteringと未来の観測も使うSmoothingの違いを整理した記事。Kaggleコンペでの実践を踏まえ、両手法の使い分けを具体的に解説している。
- **[GASからGoogle Cloudへ移行してみよう：Slackデータの定期取得を例に学ぶ](https://zenn.dev/a03/articles/4714ea330d6791)** - 環境構築不要で手軽なGASが処理規模や信頼性の要件が上がると直面する制限を踏まえ、Slackデータの定期取得というシンプルな題材でGoogle Cloudへの移行手順を解説した記事。数時間で追える具体的な移行ステップを示している。
- **[最近育てているフロントエンド開発用テンプレートの話](https://zenn.dev/newt_st21/articles/next-template-2026)** - Next.js向けとして育てつつもReact RouterやTanStack Routerでも使えるよう設計されたフロントエンド開発テンプレートを紹介した記事。特定フレームワークに縛られない設定の共通化を、実際のリポジトリ構成とともに示している。

## Qiita

- **[SSM Parameter Storeの「分け方」と「Standard / Advanced」の決め方 — ECSとLambdaで変わる制約を実測して整理した](https://qiita.com/Omizu-25/items/41d5edd295915c8b6908)** - AWS SSM Parameter Storeのパラメータの分け方とStandard/Advanced階層の選び方を、ECSとLambdaそれぞれで異なる制約を実測しながら整理した記事。ドキュメントだけでは分かりにくい実務上の落とし穴を具体的な数値で裏付けている。
- **[【AgentCore】Runtime の命名で混乱したのでルールを整理する](https://qiita.com/ryu-ki/items/d345d6ce05f0e5d9436a)** - Amazon Bedrock AgentCoreのRuntimeまわりで紛らわしい命名（エージェント名、Runtime名、ARNなど）を整理し、混乱を避けるための命名ルールを提案した記事。新しいマネージドサービスの学習コストを、用語整理という地味だが実務的なアプローチで下げている。
- **[Llamex Luna版をLivebookで動かす 〜 Nxなしの推論経路をAtomVMへ持ち込む](https://qiita.com/RyoWakabayashi/items/42fc6480be3fd99aecd1)** - Elixir製のLLM推論エンジンLlamexについて、通常はNxの行列演算ライブラリに依存する実装を、純Elixirのリスト演算だけで動かせるAtomVM向けの経路に持ち込んだ記事。組み込み向けVMでのLLM推論という珍しい領域を具体的に切り拓いている。
- **[Google Antigravity for Visual Studio Code in GitHub Codespacesが便利すぎる件【サンドボックス / 脱GitHub Copilot】](https://qiita.com/yangguofu/items/ae3e9f9f0f5a4515f276)** - Googleのコーディングエージェント環境Antigravityが公式VS Code拡張機能として登場し、GitHub Codespaces内にインストールすることでエージェントの実行環境をサンドボックス化できるようになったと紹介する記事。別IDEへの移行なしにエージェント環境を切り替えられる利点を具体的に示している。
- **[ExaDB-XSの新機能「Automatic Failover(FSFO)」を試す - その2：フェイルオーバー](https://qiita.com/mo__mo/items/85c583d0a2f0350d28ed)** - Oracle Cloud上のExaDB-XSでFast-Start Failover（FSFO）が有効になった環境に対し、実際にプライマリデータベースの障害を模擬してフェイルオーバーの挙動を検証した記事。設定を有効化しただけで終わらせず、実際の切り替え動作まで踏み込んで確認している。

## AWS 新着

- **[AWS Lambda introduces managed runtimes in public preview for Node.js 26 and Python 3.15](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-node-js-python-public-preview/)** (2026-08-25) - AWS Lambdaが正式リリース前のNode.js 26とPython 3.15をパブリックプレビューのマネージドランタイムとして先行提供開始した。新しい言語ランタイムをGA前に検証できる窓口が、上流コミュニティも巻き込む形で用意されている。
- **[AWS Lambda functions now support full IAM resource-based policies](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-full-iam-resource-based-policies/)** (2026-08-25) - Lambda関数がフル機能のIAMリソースベースポリシーに対応し、条件キーを使ったより細かいアクセス制御が可能になった。これまで簡略化されていたLambdaの権限設定が、他のAWSリソースと同水準のきめ細かさに近づいている。
- **[AWS Batch now supports Amazon ECS Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-batch-on-ecs-managed-instances/)** (2026-08-25) - AWS BatchがECS Managed Instancesを新しいコンピュートオプションとしてサポートし、GPUを使う計算集約的なバッチワークロードをAWS管理のインフラ上で実行できるようになった。ノード管理の手間を減らしつつGPUバッチ処理を扱える選択肢が広がっている。
- **[AWS Secrets Manager adds managed external secrets support for Cisco Security Platform and Netskope](https://aws.amazon.com/about-aws/whats-new/2026/08/secrets-manager-cisco-netskope/)** (2026-08-25) - Secrets ManagerがCisco Security PlatformとNetskopeのAPIキー・トークンについても自動ローテーションに対応した。サードパーティのセキュリティ製品の認証情報管理まで、AWSコンソールから一元的に扱える範囲が広がっている。
- **[IAM Roles Anywhere now provides a Java plugin for the AWS SDK](https://aws.amazon.com/about-aws/whats-new/2026/08/iam-roles-anywhere-java/)** (2026-08-25) - オンプレミスサーバーなどAWS外のワークロードにIAM認証情報を配布するIAM Roles Anywhereが、AWS SDK for Java v2向けのプラグインを提供開始した。長期的な認証情報をハードコードせずJavaアプリケーションに一時credentialを渡す構成が組みやすくなっている。

## Lobsters

- **[I stabilized never type](https://blog.ihatereality.space/0C-never-type/)** (56pt) - RustコンパイラのNightly機能だった「決して値を返さない」ことを表すnever型（`!`）を安定化させるまでの経緯を、実装者自身が振り返った記事。型システムの一見小さな追加が、実は何年もかかる後方互換性の調整を伴うことを具体的に示している。
- **[MNT Station - A modular, open hardware desktop computer and server](https://www.crowdsupply.com/mnt-research/mnt-station)** (47pt) - 基板レベルで部品を差し替えられるモジュール式のオープンハードウェアデスクトップ機を紹介するクラウドファンディングページ。修理・拡張性を前提に設計されたPCという、クローズドな既製品とは異なる選択肢を具体的な仕様とともに示している。
- **[The Move to Python 3 Begins](https://www.eveonline.com/news/view/the-move-to-python-3-begins)** - EVE Onlineが2026年になってようやくPython 3への移行に着手すると発表した記事。長期運用されるゲームサーバーの基盤コードほど言語バージョンの移行が後回しにされがちだという現実を、大規模MMOの実例で具体的に示している。
- **[Hunting Down a Go Runtime Bug on 32-bit Embedded Systems](https://sigma-star.at/blog/2026/08/go-runtime-netpoll-bug/)** - 32bit組み込みLinux環境でGoのnetpoll実装がハングするバグを、ランタイムのソースコードまで潜って原因を突き止めた記事。一般的なx86_64環境では再現しない、アーキテクチャ固有のタイミング問題をデバッグする泥臭い過程を具体的に記録している。
- **[Solving the 1+N query problem](https://acadia.engineering/blog/solving-the-1-plus-N-query-problem)** (24 comments) - ORMで頻発するN+1クエリ問題に対し、単純なeager loadingではなくクエリの発行パターンそのものを見直すことで解決を図った記事。コメント欄でも各言語・ORMでの類似解決策が活発に議論されている。

## dev.to

- **[I inspected my KMP iOS export header 61% of it was dead weight. Here's what I found and built](https://dev.to/siddhantpanhalkar/i-inspected-my-kmp-ios-export-header-61-of-it-was-dead-weight-heres-what-i-found-and-built-3mef)** - Kotlin Multiplatform（KMP）がiOS向けに生成するSwiftヘッダーファイルの中身を調査したところ、6割以上が実際には使われないコードだったと報告する記事。生成物を鵜呑みにせず中身を検証することで、ビルドサイズ削減の具体的な余地を発見している。
- **[mcp-tool-sanitizer v0.1.0: Making the MCP approval-view match the bytes the model gets](https://dev.to/magopredator/mcp-tool-sanitizer-v010-making-the-mcp-approval-view-match-the-bytes-the-model-gets-17i5)** - MCPツールのメタデータにゼロ幅文字やbidi制御文字などUnicodeの隠蔽用コードポイントを混入させ、人間が承認画面で見る内容とモデルが実際に受け取るバイト列を乖離させる攻撃を防ぐサニタイザーを紹介した記事。MCPエコシステムに特有の新しい攻撃面への具体的な対策を示している。
- **[Authenticated Isn't Authorized: The AI Code Review Bug That Looks Secure](https://dev.to/raithlin/authenticated-isnt-authorized-the-ai-code-review-bug-that-looks-secure-507m)** - AI生成コードのレビューで見落とされやすい典型例として、認証はあるが認可（権限確認）が抜けているコードを取り上げた記事。「ログイン済みチェックがある＝安全」という誤った印象を、具体的な脆弱コード例で覆している。
- **[The sm_120 shared-memory cliff: why FP8 KV cache crashes vLLM on workstation Blackwell](https://dev.to/conatusai/the-sm120-shared-memory-cliff-why-fp8-kv-cache-crashes-vllm-on-workstation-blackwell-1dji)** - ワークステーション向けBlackwell GPU（RTX PRO 6000など）でFP8 KVキャッシュを使うvLLMが起動時にクラッシュする原因を、共有メモリの制約まで掘り下げて特定した記事。GPU世代ごとに異なるハードウェア制約が推論エンジンの安定性に直結する具体例を示している。
- **[How to Verify a JWT Signature Without a Library](https://dev.to/auth_parse_/how-to-verify-a-jwt-signature-without-a-library-1a1a)** - `jwt.verify()`が内部で行っているデコード・署名対象の再構築・検証という手順を、ライブラリを使わず手で実装しながら解説した記事。普段ブラックボックスとして扱われがちなJWT検証の中身を、具体的なコードで可視化している。

## TechCrunch

- **[X sends cease-and-desist to open-source project Nitter over alleged scraping](https://techcrunch.com/2026/08/25/x-sends-cease-and-desist-to-open-source-project-nitter-over-alleged-scraping/)** - X社がプライバシー重視のXフロントエンドを提供するOSSプロジェクトNitterに対し、スクレイピングを理由に停止を求める書簡を送ったと報じる記事。プラットフォーム側のデータ保護の主張と、オープンなフロントエンド実装を求めるコミュニティの対立という、以前から繰り返されてきた構図が再燃している。
- **[Stability AI, maker of image generator Stable Diffusion, raises $76 million in fresh funding](https://techcrunch.com/2026/08/25/stability-ai-maker-of-image-generator-stable-diffusion-raises-76-million-in-fresh-funding/)** - 画像生成モデルStable Diffusionを開発するStability AIが7600万ドルを新たに調達し、累計調達額が2億3200万ドルに達したと報じる記事。オープンウェイト系の画像生成モデル開発企業への投資が、依然として続いていることを示している。
- **[Claude Cowork finally remembers what you told the app in chat](https://techcrunch.com/2026/08/25/claude-cowork-finally-remembers-what-you-told-the-app-in-chat/)** - AnthropicがClaudeのチャットとCowork間で共有される記憶機能を導入し、プロジェクトや好みを毎回説明し直す必要がなくなったと報じる記事。単発の会話で完結しないエージェント運用にとって、セッションを跨いだ文脈保持が実用上のボトルネックだったことをうかがわせる。
- **[That fake Grand Theft Auto VI demo is actually just malware](https://techcrunch.com/2026/08/25/that-fake-grand-theft-auto-vi-demo-is-actually-just-malware/)** - 発売前で注目度の高いGTA VIの偽デモ動画を餌にしたマルウェア配布キャンペーンが確認されたと報じる記事。話題性の高いコンテンツへの期待感につけ込む、古典的だが今も効果的なソーシャルエンジニアリング手口を伝えている。
- **[Waymo robotaxis are headed to Munich](https://techcrunch.com/2026/08/25/waymo-robotaxis-are-headed-to-munich/)** - Waymoの自動運転タクシーがドイツ・ミュンヘンへの展開を計画していると報じる記事。自動運転関連の規制が比較的整備されているドイツが、実証・商用展開のホットスポットになりつつある背景を伝えている。

## Ars Technica

- **[Apple's new desktop computers are designed specifically for local AI development](https://arstechnica.com/apple/2026/08/with-new-mac-studio-and-mac-mini-apple-leans-hard-into-local-ai-inference/)** - 新しいMac StudioとMac miniが、複数台を連結してローカルAI推論を行う「デイジーチェーン」運用を前提に設計されていると分析する記事。クラウドAPIに頼らずローカルで大規模モデルを動かしたい開発者の需要を、Apple自身が正面から取り込みにいっている。
- **[New bootloader lets you take the "Meta" out of the original Meta Quest](https://arstechnica.com/gaming/2026/08/new-bootloader-lets-you-take-the-meta-out-of-the-original-meta-quest/)** - 初代Meta Questに対する権限昇格攻撃を悪用し、Metaのサーバーやアプリに縛られず端末を完全にコントロールできる新しいブートローダーが公開されたと報じる記事。メーカーによるロックダウンを、脆弱性を足がかりに解除する典型的なハードウェアハックの構図を示している。
- **[World humanoid robot games show runners breaking records, bursting into flames](https://arstechnica.com/ai/2026/08/world-humanoid-robot-games-show-runners-breaking-records-bursting-into-flames/)** - 人型ロボットの競技大会で、短距離走の記録更新の裏で炎上事故も起きるなど、まだ発展途上の技術的完成度を伝える記事。派手な競走種目よりも、家事のような日常タスクの再現の方が実力を測る指標として重要だと指摘している。
- **[Google's anti-nausea Motion Assist dots finally rolling out on Android](https://arstechnica.com/gadgets/2026/08/google-begins-rolling-out-anti-motion-sickness-feature-on-android-17/)** - 車中でのスマホ利用時の乗り物酔いを軽減するため、画面端に動く点を表示するMotion Assist機能がAndroidに展開され始めたと報じる記事。Android 17搭載のPixel端末から先行提供されており、UI設計で身体的な不快感に対処する具体例を示している。
- **[AI won't replace radiologists, but it will dramatically change their jobs](https://arstechnica.com/health/2026/08/ai-wont-replace-radiologists-but-it-will-dramatically-change-their-jobs/)** - AIが放射線科医を置き換えるという予測は外れたものの、業務内容そのものは大きく変わりつつあると報じる記事。かつて「AIが人間の仕事を丸ごと奪う」と語られた専門職において、実際には役割分担の再編という形で影響が現れている実態を伝えている。

## 注目トピック

今回横断的に見えてきたのは、権限とアクセス制御の設計が、認証・認可からMCPのようなAIエージェント特有の新しい経路にまで広がっていることだ。はてなブックマークの「マイクロサービス間の認可伝搬」は、IETF Transaction Tokensという標準化提案と自作実装を比較する形でサービス間の認可設計を扱っており、dev.toの「Authenticated Isn't Authorized」は認証はあっても認可が抜けたAI生成コードの典型的な穴を指摘している。同じくdev.toの「mcp-tool-sanitizer」は、MCPツール定義にUnicode隠蔽文字を混入させ人間の承認画面とモデルが受け取るバイト列を乖離させるという、AIエージェント時代ならではの新しい攻撃面への対策である。認可・認証という古典的なテーマが、標準化とAIエージェントという2つの方向から同時に再定義されつつある。

もう一つの軸は、ローカルでのAI推論環境がハードウェア・ソフトウェア両面で具体化していることだ。Ars Technicaの「Apple's new desktop computers are designed specifically for local AI development」は、複数台のMac Studio/miniを連結してクラウドに頼らず大規模モデルを動かす運用を前提にした設計を分析しており、はてなブックマークの「goccy/go-llama」はCGo依存を排してGoだけでllama.cppを再実装する試み、QiitaのLlamexは組み込み向けVM上でNxなしにLLM推論を動かす試みである。GPU・クラウドAPIに頼らない選択肢が、コンシューマ向けハードウェアから組み込み領域まで幅広い層で模索されている。
