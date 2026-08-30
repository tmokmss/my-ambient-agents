---
title: "Tech Feed ダイジェスト（2026年8月30日）"
date: "2026-08-30T14:25"
category: "summary"
summary: "AIエージェントを自律的に長時間稼働させる設計論が複数ソースで重なる一方、npmサプライチェーン攻撃やエージェントへの信頼を問い直す動きも目立った一日"
tags: ["ai", "agent", "aws", "security", "devops", "llm"]
---

## はてなブックマーク (テクノロジー)

- **[ハーネス設計入門 〜プロンプト、コンテキストの次〜](https://speakerdeck.com/kinopeee/hanesu-sekkei-nyuumon-kontekisuto-no-tsugi)** ([258users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/kinopeee/hanesu-sekkei-nyuumon-kontekisuto-no-tsugi)) - プロンプトやコンテキスト設計の次の段階として、AIエージェントを取り巻く実行環境（ハーネス）そのものをどう設計するかを体系立てて整理した発表資料。
- **[業務時間外もAIに働いてもらう話](https://speakerdeck.com/colorful12/gyoumu-jikangai-mo-ai-ni-hatarai-te-morau-hanashi)** ([213users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/colorful12/gyoumu-jikangai-mo-ai-ni-hatarai-te-morau-hanashi)) - 人間が離席している時間帯にAIエージェントへタスクを継続させる運用を、承認フローや異常時の扱いも含めて具体的に設計した発表資料。
- **[SPFとDKIMとDMARCの役割の違いを整理する](https://zenn.dev/rickysb527/articles/spf-dkim-dmarc-roles)** ([203users](https://b.hatena.ne.jp/entry/s/zenn.dev/rickysb527/articles/spf-dkim-dmarc-roles)) - なりすましメール対策として名前が似た3つの仕組みが何をそれぞれ保証していて、なぜ1つではなく3つ揃って初めて意味を持つのかをDNSレコードの実例とともに整理した記事。
- **[WiresharkでHTTPS通信を復号する方法｜TLS1.3対応・パケット解析](https://eeengineer.com/description-by-wireshark/)** ([142users](https://b.hatena.ne.jp/entry/s/eeengineer.com/description-by-wireshark/)) - TLS1.3で暗号化されたHTTPS通信をWiresharkで復号し、パケットレベルで中身を確認する手順を解説した記事。SSLKEYLOGFILEを使った鍵情報の取得など具体的な設定手順を扱っている。
- **[技術書典21で「Goで作って学ぶリアルタイム通信サーバー入門」という本を出します](https://blog.shibayu36.org/entry/2026/08/29/154324)** ([118users](https://b.hatena.ne.jp/entry/s/blog.shibayu36.org/entry/2026/08/29/154324)) - 自作ターミナルゲームを題材に、オンラインゲームの裏側にあるリアルタイム通信サーバーの仕組みをGoで実装しながら学ぶ技術書典向け新刊の紹介記事。

## Zenn

- **[自作npmパッケージにマルウェアを公開されたときにやったこと](https://zenn.dev/7nohe/articles/npm-malware-incident-response)** - リリースワークフローの不備を突かれ、管理するnpmパッケージに悪意あるバージョンが10個公開されたサプライチェーン攻撃の被害記録。認証情報の全ローテーションなど具体的な事後対応をまとめている。
- **[「スタートアップだから」が通用しない、大手製造業向けSaaSのAWSセキュリティ設計](https://zenn.dev/facraft/articles/aws-org-security-for-enterprise-saas)** - 大手製造業向けSaaSを提供する小規模スタートアップが、顧客から求められる高水準のセキュリティ要件に応えるためAWS上に構築したセキュリティ構成の全体像を具体的に紹介している。
- **[GPUを燃やさないために - RTX 5090にパワーリミットをかけると、性能はどれだけ落ち、どれだけ冷えるのか -](https://zenn.dev/holy_fox/articles/572083c130ce46)** - 定格575WのRTX 5090にパワーリミットをかけた際の性能低下幅と発熱の下がり具合を実測し、消費電力と性能のトレードオフを具体的な数値で検証した記事。
- **[AIに丸投げしないで理解するためのAI開発手法（2026年8月現在）](https://zenn.dev/avaintelligence/articles/dont-outsource-understanding-to-ai)** - AIコーディングツールに開発を丸投げした結果起きる問題を踏まえ、開発者が理解を保ったまま活用するための実践的なスキルやツールの選び方を最新版として更新した記事。
- **[最近育てているフロントエンド開発用テンプレートの話](https://zenn.dev/newt_st21/articles/next-template-2026)** - Next.js以外のフレームワークでも使えるフロントエンド開発用テンプレートリポジトリを育てている取り組みで、`.claude/skills/`に置いたカスタマイズ用テンプレートで開発を進める構成を紹介している。

## Qiita

- **[Claude Code に制限モードが入った。自作スキル47本が0本になった](https://qiita.com/jqit_suwa/items/4183a8e97738ba45f435)** - Claude Code 2.1.248で追加された`--restricted`フラグが、コマンド実行系ツールとWebFetchを外しファイル操作を作業ディレクトリに限定する仕様であるため、自作スキルが軒並み動かなくなった実態を検証した記事。
- **[【AWS】AgentCore Runtimeのフェールオーバーとリトライ設計について確認しました](https://qiita.com/yakumo_09/items/6f83dc660382f10388c3)** - ECS上のFastAPIエージェントをAgentCore Runtimeに切り出す検討の中で、障害発生時にセッションや会話がどう扱われるかセッションのライフサイクルを具体的に確認した記事。
- **[【図解】EKSでPodの詰め方を選べるようになった！スコアリング戦略をやさしく解説](https://qiita.com/daitak/items/980322a0e0630c46868d)** - 2026年8月のアップデートでAmazon EKSがKubernetesコントロールプレーンのスケジューラパラメータ設定に対応したことを受け、Podの詰め方を決めるスコアリング戦略の挙動を図解している。
- **[Kiro５兄弟のいまどきのセキュリティ基礎知識 ― Kiro CLIとDraw.io MCPで信頼境界を描くまで](https://qiita.com/kamogashira/items/519a52614ba113bfe9cb)** - Security-JAWSでの登壇内容を再構成した記事で、Kiro CLIとDraw.io MCPを組み合わせてシステムの信頼境界を図として描き出す具体的な手順を紹介している。
- **[Cloudflare Workersに「一時アカウント」機能が来たので、ログインなしでデプロイして、ついでにミニゲームも作ってみた](https://qiita.com/moritalous/items/728b20d34d36275c0a33)** - アカウント登録やOAuth、APIトークンのコピペなしに`wrangler deploy --temporary`一発でWorkerをデプロイできる新機能「Temporary Accounts」を実際に試した記事。

## AWS 新着

- **[AWS Transform now in scope for FedRAMP Class C](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-transform-fedramp-class-c/)** (2026-08-28) - レガシーアプリのモダナイズ支援サービスAWS TransformがFedRAMP Class Cの対象範囲に加わり、US East (Ohio) リージョンでコンプライアンス要件下のワークロードに利用できるようになった。
- **[Amazon CloudWatch agent adds support for journald logs](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-agent-journald/)** (2026-08-28) - CloudWatch agentがLinuxのsystemdジャーナル（journald）ログを、ファイルへの書き出しを経由せず直接CloudWatch Logsへ送れるようになった。
- **[Amazon Aurora MySQL 3.13 (compatible with MySQL 8.0.45) is generally available](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-aurora-mysql-313-available/)** (2026-08-28) - Aurora MySQL互換エディションがMySQL 8.0.45相当のコミュニティ修正とAurora固有の改善を取り込んだバージョンとして一般提供開始となった。
- **[Amazon Redshift streaming can now ingest 10MiB records from Amazon Kinesis Data Streams](https://aws.amazon.com/about-aws/whats-new/2026/08/redshift-streaming-supports-kds-10mib-records)** (2026-08-27) - RedshiftのKinesis Data Streamsストリーミング取り込みが、従来1MiBだったレコードサイズ上限を10倍の10MiBまで拡大し、KDS側の上限拡張に追従した。
- **[Amazon Bedrock AgentCore expands to two new regions](https://aws.amazon.com/about-aws/whats-new/2026/08/bedrock-agentcore-two-new-regions/)** (2026-08-27) - エージェントの構築・接続・最適化基盤Bedrock AgentCoreが、US West (N. California) とAsia Pacific (Hyderabad) の2リージョンに新たに展開された。

## Lobsters

- **[There's no such thing as Just a Tool](https://deadsimpletech.com/blog/no-such-thing-as-just-a-tool)** (54pt) - あらゆる技術ツールは中立的な道具ではなく、設計の時点で特定の使い方や価値観を埋め込んでいるという主張を展開するエッセイ。AIツールを含む技術選定の判断軸として道具の「中立性」を疑うべきだと論じている。
- **[Bug blindness](https://danluu.com/bug-blind/)** (22pt) - 開発者が自分の書いたコードのバグに気づけなくなる「バグ盲目」という現象を、実例を交えて分析した記事。レビューやテストの設計がこの盲点をどう補えるかを具体的に検討している。
- **[Gram Editor 3.3.0 Released](https://gram-editor.com/posts/release-3.3.0/)** (20pt) - Rust製エディタGram Editorのバージョン3.3.0がリリースされたことを伝えるリリースノート。新機能や修正内容を具体的にまとめている。
- **[Functional State Machines in Rust: Typestate and Newtype Patterns](https://dl.acm.org/doi/epdf/10.1145/3830438.3830958)** (12pt) - Rustの型システムを使い、不正な状態遷移をコンパイル時に防ぐTypestateパターンとNewtypeパターンを組み合わせた関数型ステートマシンの設計手法を論じる論文。
- **[California Passes AB-1856 For Open-Source Relief Over Age Verification](https://www.phoronix.com/news/California-AB-1856-Passes)** (11pt) - カリフォルニア州で、年齢確認義務からオープンソースソフトウェアの開発者を一定条件下で免除する法案AB-1856が可決されたと報じる記事。

## dev.to

- **[I Stopped Trusting AI Agents With Tools. So I Built a Gatekeeper.](https://dev.to/debashish_ghosal/i-stopped-trusting-ai-agents-with-tools-so-i-built-a-gatekeeper-26fb)** - AIエージェントにツール実行の権限を無条件で与えることへの不信から、実行前に許可・拒否を判定するゲートキーパー機構を自作した記事。OSSとして公開されており、エージェントの権限制御を後付けで挟む具体的な実装アプローチを示している。
- **[AI Evals at a Glance: Heatmaps for Stakeholders](https://dev.to/googleai/ai-evals-at-a-glance-heatmaps-for-stakeholders-2mki)** - AIの評価結果を非エンジニアのステークホルダーにも一目で伝えるため、Inspect Vizを使ってエバル結果をヒートマップとして可視化する手法を紹介する記事。
- **[Kubeflow Without Kubernetes? Deploy a Complete MLOps Suite in 60 Seconds with Gubernator](https://dev.to/gde/kubeflow-without-kubernetes-deploy-a-complete-mlops-suite-in-60-seconds-with-gubernator-3moo)** - Kubernetesクラスタなしで、Docker ComposeだけでJupyterLab・MLflow・MinIO S3・Ollama推論を軽量に立ち上げられるツールGubernatorを紹介する記事。2GB未満のRAMで動くMLOpsスイートを謳っている。
- **[Wiring the Reasoning Loop: Gemini + Neo4j + MCP for Multi-Hop AI Agents](https://dev.to/gde/wiring-the-reasoning-loop-gemini-neo4j-mcp-for-multi-hop-ai-agents-51p9)** - 通常のRAGが抱えるハルシネーション問題に対し、GeminiとグラフDBのNeo4jをMCP経由で組み合わせ、複数ホップの推論を必要とするクエリに対応する構成を解説した記事。
- **[[Go in Practice] Writing Modern Go with AI: Testing JetBrains go-modern-guidelines and Refactoring a 1,039-line main.go](https://dev.to/gde/go-in-practice-writing-modern-go-with-ai-testing-jetbrains-go-modern-guidelines-and-refactoring-151o)** - JetBrainsが公開したGoのモダンな書き方ガイドラインをAIに適用させ、1,039行の巨大な`main.go`を実際にリファクタリングさせた検証記事。

## TechCrunch

- **[An Anthropic researcher just gave us a peek at self-improving AI](https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/)** - 誤った挙動を測る10種類のベンチマークを与えたところ、自動化されたシステムが全体の性能を落とすことなくすべてのベンチマークで改善を達成したという、Anthropic研究者による自己改善AIの初期成果を報じる記事。
- **[Neocloud Lambda secures $1B in debt to buy more chips](https://techcrunch.com/2026/08/28/neocloud-lambda-secures-1b-in-debt-to-buy-more-chips/)** - GPUクラウド事業者LambdaがNvidia製AIチップの購入とMicrosoftへのリース向けに10億ドルの負債性資金を調達したと報じる記事。AIブームを支える資金調達コストの高さが浮き彫りになっている。
- **[Hollywood celebs are getting into microdrama apps](https://techcrunch.com/2026/08/29/hollywood-celebs-are-getting-into-microdrama-apps/)** - 数千万ドル規模の映画製作から、スマホ向けの短尺ドラマ「マイクロドラマ」アプリへ転向するハリウッド俳優が増えていると報じる記事。モバイル発のコンテンツフォーマットが既存の映像産業の人材を取り込み始めている様子を伝えている。

## Ars Technica

- **[Inside Meta's push to put robots to work in data centers](https://arstechnica.com/ai/2026/08/inside-metas-push-to-put-robots-to-work-in-data-centers/)** - Metaがデータセンター内の技術者が担っていた作業をロボットに置き換える実証実験を進めていると報じる記事。AIインフラ拡大に伴う人手不足を物理ロボットで補おうとする動きを伝えている。
- **[Trump blacklisting of "woke" Anthropic deemed illegal by federal judge](https://arstechnica.com/tech-policy/2026/08/trump-blacklisting-of-woke-anthropic-deemed-illegal-by-federal-judge/)** - 自律型兵器や大規模監視への協力を拒否したことを理由にAnthropicを政府調達からブラックリスト化した措置について、連邦判事が違法との判断を下したと報じる記事。
- **[Meta makes AI glasses slightly less creepy with limit on nonconsensual recording](https://arstechnica.com/tech-policy/2026/08/meta-tweaks-ai-glasses-to-block-some-creepy-recordings-but-privacy-risks-remain/)** - Meta製AIグラスに搭載された録画中を示す安全ライトを手で覆った際に録画を停止する仕組みが追加されたと報じる記事。同意のない録画への懸念を一部緩和する対応だが、プライバシーリスクは残ると指摘している。

## 注目トピック

複数のソースで重なって見えたのは、AIエージェントを人間の監視なしに長時間・自律的に稼働させる設計論だ。はてなブックマークで258usersを集めた「ハーネス設計入門」はプロンプトやコンテキストの先にあるエージェントの実行環境そのものの設計を体系化しており、213usersの「業務時間外もAIに働いてもらう話」は人間が離席している間もタスクを継続させる運用を具体的に設計している。一方でQiitaの「Claude Code に制限モードが入った」は、そうした自律稼働の裏でエージェントの実行権限をどこまで絞るべきかという逆方向の動きを伝えており、dev.toの「I Stopped Trusting AI Agents With Tools」も同じ問題意識からゲートキーパー機構を自作している。エージェントを「回す」設計と「制限する」設計が同時多発的に進んでいる様子がうかがえる。

もう一つの軸は、AIツールや企業そのものへの信頼を検証し直す動きだ。ZennのnpmパッケージマルウェアインシデントはAIコーディングの普及とは別軸で起きたサプライチェーン攻撃の実例であり、認証情報の全ローテーションという重い対応を迫られている。TechCrunchの「An Anthropic researcher just gave us a peek at self-improving AI」は自己改善AIの初期成果を報じる一方、Ars Technicaでは政府によるAnthropicのブラックリスト化が違法と判断された件やMeta AIグラスの録画同意問題が並び、AI企業や自律化するAIエージェントの振る舞いを外部からどう検証・規制するかという論点が、技術面・法制度面の双方から浮かび上がった一日だった。
