---
title: "Tech Feed ダイジェスト（2026年6月28日）"
date: "2026-06-27T22:12"
category: "summary"
summary: "Claude Code活用術が784ブクマ、AnthropicがAlibaba提訴、Kiro政府認定取得、耐量子暗号移行の最前線など"
tags: ["ai", "claude", "security", "aws", "go", "devops", "frontend", "oss"]
---

## はてなブックマーク (テクノロジー)

- **[正直に言う。お前のClaude Codeの使い方は間違っている](https://qiita.com/tehito/items/356e5f1dba112a075be1)** ([784users](https://b.hatena.ne.jp/entry/s/qiita.com/tehito/items/356e5f1dba112a075be1)) - Claude Codeを「高性能コード補完」として使うのは誤りで、正しくは「設計と実装の合意形成エージェント」として活用すべきと主張する記事。CLAUDE.mdの書き方やプロジェクトコンテキストの渡し方など実践的な使い方が整理されており、爆発的にバズった。

- **[Claude Enterprise全社導入で何を検討し、何をやらなかったか](https://tech.medpeer.co.jp/entry/2026/06/26/122446)** ([71users](https://b.hatena.ne.jp/entry/s/tech.medpeer.co.jp/entry/2026/06/26/122446)) - メドピアがClaude Enterpriseを全社導入した際の意思決定プロセスを公開。セキュリティポリシー策定や利用ガイドライン作成、「やらなかったこと」の判断基準など、大企業でのLLM展開における実運用知見が詰まっている。

- **[コードから仕様書を逆生成するWebアプリ「cc-rsg-web」を公開しました](https://zenn.dev/daishiro/articles/cc-rsg-web-release)** ([126users](https://b.hatena.ne.jp/entry/s/zenn.dev/daishiro/articles/cc-rsg-web-release)) - 既存コードを解析してAPI仕様書・設計書を自動生成するツール。ドキュメント負債を抱えるレガシーコードベースへのAI活用として注目を集めている。

- **[Deno で Desktop アプリを作れるようになっていた](https://azukiazusa.dev/blog/deno-desktop-app/)** ([92users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/deno-desktop-app/)) - Deno 2.xからデスクトップGUIアプリ開発が可能になったことを実際に試した記事。Electronの代替としてDeno+WebViewを使うパターンが紹介されており、フロントエンドエコシステムの広がりを示している。

- **[GitHub Actions ワークフローのステップが並行実行可能になりました](https://developer.mamezou-tech.com/blogs/2026/06/27/github-actions-parallel-steps/)** ([19users](https://b.hatena.ne.jp/entry/s/developer.mamezou-tech.com/blogs/2026/06/27/github-actions-parallel-steps/)) - GitHub Actionsで「ステップ並行実行」機能が実装された。これまでジョブ単位でしか並行化できなかったが、単一ジョブ内でのステップを並列実行できるようになり、ビルド時間の大幅短縮が期待される。

## Zenn

- **[シニアエンジニアがコードをほぼ書かなくなった理由](https://zenn.dev/acntechjp/articles/22f7b6f9258008)** - 15年のキャリアを持つシニアエンジニアが「今は全体の1%未満しかコードを書かない」と告白し、AIがコードを書き人間が仕様を書く時代の働き方変化を論じた記事。AI時代のエンジニア像への問いかけとして読み応えがある。

- **[AI時代のコードレビューは人に向けるな、仕組みに向けろ](https://zenn.dev/manalink_dev/articles/ai-coding-era-review-to-dev-process-not-human)** - AIが大半のコードを生成する今、「誰が書いたか」ではなく「どの仕組みが生成したか」を問うべきという観点からコードレビューの在り方を再定義する。CLAUDE.mdやプロンプト設計にレビューの矢を向けることを提唱している。

- **[Generative UIにJSONは最適なのか？ OpenUIという選択肢](https://zenn.dev/sc30gsw/articles/d7320f1247b785)** - AIがUI構造を返す際にJSON以外のプロトコルとして「OpenUI」を紹介し、A2UI・json-render・MCP Appsとの比較を行う。生成AIとフロントエンドの統合手法が多様化している現状を整理した技術解説。

- **[Gemini を Claude の「サブエージェント」に —— 大規模開発でコストを実測](https://zenn.dev/google_cloud_jp/articles/63205d90345627)** - Claude on Vertex AIを主エージェント、Gemini Flashをサブエージェントとしたハイブリッド構成を構築し、開発時のLLMコストを実際に測定した記事。マルチモデル戦略の費用対効果が具体的な数値で示されている。

- **[明日から始める、コーディングエージェント時代のフルスタック開発 — AWS Blocks のソースコードを読む](https://zenn.dev/aws_japan/articles/aws-blocks-source-reading)** - AWS Summit Japan 2026登壇の補足記事として、AWS BlocksのOSSコードを解説。コーディングエージェントとどう協業するかの設計思想が読み取れる実践的な内容。

## Qiita

- **[量子コンピュータが完成してからでは遅い。「今盗んで、後で解読する」脅威と、耐量子暗号（PQC）移行の最前線](https://qiita.com/d94231/items/4059669676c350b5dcba)** - 「Harvest Now, Decrypt Later」攻撃の脅威を解説し、NISTが標準化したML-KEM/ML-DSAへの移行がなぜ今すぐ必要かを論じる。実装ライブラリの紹介も含む実践的なセキュリティ記事。

- **[AIエージェントを「セキュリティのプロ」に変える817個のスキル集 — Claude Code / Codex / Cursor / Copilot対応OSSを読み解く](https://qiita.com/nogataka/items/8f99cc6fc97541a14b76)** - セキュリティ特化のエージェントスキルを817個収録したOSSを解説。脆弱性診断やペネトレーションテスト支援をコーディングエージェントで自動化する方法を紹介している。

- **[Googleが公開した【AIと人間の両方が読めるWiki】の書き方 — Open Knowledge Format（OKF）とは](https://qiita.com/mszdh/items/f2a11097292acd0a30e1)** - GoogleがOSSとして公開した「OKF」を解説。MarkdownベースでAIエージェントと人間が共通参照できる知識ベースの書き方を標準化する試みで、CLAUDE.mdなどエージェント向け仕様書と関連する。

- **[Claude Code を4ヶ月使ってわかった、おすすめコマンド・スキル 10 選](https://qiita.com/wataru86/items/b859f1578191a1e15808)** - Claude Codeを長期利用して見えてきた生産性向上に効くコマンドとスキル設定を10個厳選して紹介。実際の業務で検証済みのtipsが集まっており、実践的な参考になる内容。

## AWS 新着

- **[Kiro achieves FedRAMP High and DoD IL-4/5 authorization in AWS GovCloud](https://aws.amazon.com/about-aws/whats-new/2026/06/kiro-fedramp-high-dod-il-4-5-govcloud-us/)** (2026-06-25) - AWSのAIコーディングエージェント「Kiro」が米政府向けクラウドでFedRAMP High認定を取得。連邦政府・軍用途でのコーディングエージェント活用が正式に解禁され、政府DXにおけるAI開発支援の扉が開いた。

- **[OpenAI GPT / NVIDIA Nemotron models on Amazon Bedrock receive FedRAMP High and DoD IL-4/5 approval](https://aws.amazon.com/about-aws/whats-new/2026/06/addl-bedrock-model-fedramp-il-5-govcloud)** (2026-06-25) - Amazon Bedrock上のOpenAI GPTとNVIDIA NemotronモデルがDoD IL-4/5承認を取得。政府機関が複数の最先端LLMをコンプライアンス要件を満たしながら利用できる環境が整ってきた。

- **[AWS Network Firewall now supports managed threat intelligence rules from VisionHeight](https://aws.amazon.com/about-aws/whats-new/2026/06/network-firewall-visionheight-managed-rules)** (2026-06-25) - AWS Network FirewallがVisionHeightのゼロデイ脅威保護とTorノードブロックのマネージドルールに対応。サードパーティ脅威インテリジェンスをFirewallに組み込む選択肢が広がった。

- **[Amazon CloudWatch now supports tags on dashboards](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-tags-on-dashboards)** (2026-06-24) - CloudWatchダッシュボードへのタグ付けが可能になり、コスト配賦・アクセス制御・リソース整理がより細かく管理できるようになった。大規模なマルチチームAWS環境での運用管理が改善される。

- **[Amazon Neptune now supports AWS CloudFormation for global databases](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-neptune-aws-cloudformation/)** (2026-06-24) - グラフデータベースNeptuneのグローバルデータベースがCloudFormationでIaC管理できるようになった。DR構成やマルチリージョン展開の自動化が容易になる。

## Lobsters

- **[NLNet Labs LLM Policy](https://nlnetlabs.nl/llm-policy/)** (61pt) - インターネットインフラのOSS開発で著名なNLNet LabsがLLM生成コードを受け付けない方針を公式化した。品質・著作権・セキュリティ上の懸念を列挙しており、OSSコミュニティにおけるLLMコード受け入れポリシー議論を再燃させている。

- **[A peek into Reddit's anti-spam internals](https://lyra.horse/blog/2026/06/reddit-spam-internals/)** (47pt) - Redditのスパム対策システムの内部実装を解析した記事。行動パターン検知・グラフ分析・機械学習フィルタがどう組み合わさっているかを技術的に詳述しており、大規模ソーシャルプラットフォームのセキュリティ設計の参考になる。

- **[Text files as a user interface](https://ratfactor.com/cards/text-files-as-ui)** (37pt) - UIとしてのプレーンテキストファイルの哲学的考察。設定ファイル・ログ・データ形式としてのテキストが強力なUIパラダイムであることを論じており、AIエージェントが自然に操作できるインターフェースとしての再評価を促す内容。

- **[Data Access Patterns That Makes Your CPU Really Angry](https://blog.weineng.me/posts/slowest_add/)** (34pt) - キャッシュミスを引き起こすメモリアクセスパターンをC/C++で実測し、ストライドアクセスや行列演算の最適化手法を解説。CPUアーキテクチャ理解に基づくパフォーマンスチューニングの実践例。

- **[Linux 7.2 Improves Anonymous/Unnamed Pipe Performance For Shell Pipelines](https://www.phoronix.com/news/Linux-72-Faster-Anon-Pipe-Write)** (25pt) - Linux 7.2カーネルでシェルパイプラインに使われる無名パイプの書き込みパフォーマンスが改善された。多くのシェルスクリプトや `|` 接続のCLIツールが自動的に恩恵を受ける。

## dev.to

- **[Agents Are Learning to Write Their Own SKILL.md Files](https://dev.to/shridhar_shah2297/agents-are-learning-to-write-their-own-skillmd-files-3foo)** - 「Agent Skills」オープン標準の概要と、エージェント自身が自己のスキル定義ファイルを書く2026年の研究動向を紹介。AIエージェントが自己改善するメタ学習の実践例として注目される。

- **[How Do You Trust an AI Agent With Your Money? You Don't — You Check Its Receipt](https://dev.to/shridhar_shah2297/how-do-you-trust-an-ai-agent-with-your-money-you-dont-you-check-its-receipt-38ff)** - 金融操作を行うAIエージェントへの信頼問題を「暗号学的に検証可能な行動ログ」で解決するアプローチを論じる。各ステップを改ざんできない形で記録し事後検証できる設計パターンが提案されている。

- **[Building a RAG System from Scratch — Design Decisions Explained](https://dev.to/hiroki-kameyama/building-a-rag-system-from-scratch-design-decisions-explained-40hd)** - pgvectorとGeminiを使ったRAGパイプラインの実装で生じた設計上の意思決定（チャンク戦略・埋め込みモデル選択・再ランキング）を詳述したシリーズの完結編。

- **[From "I Can't Click" to a Full Testing Harness: How We Built Playwright for the Terminal](https://dev.to/eugenioenko/from-i-cant-click-to-a-full-testing-harness-how-we-built-playwright-for-the-terminal-1bf6)** - Go製ターミナルIDEのUIテストに「ターミナル向けPlaywright」を実装した開発記。CLIアプリのE2Eテスト自動化という珍しい課題へのアプローチが詳解されている。

- **[Your Context Window Is Not a Knowledge Base](https://dev.to/balrajola/your-context-window-is-not-a-knowledge-base-3a4h)** - 大規模コンテキストウィンドウを「すべて入れれば解決」として使う誤解を解き、コンテキスト管理とRAGを組み合わせた適切な設計を論じる実践的な記事。

## TechCrunch

- **[Asian AI startups launch Mythos-like models as Anthropic's export ban drags on](https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-ban-drags-on/)** - AnthropicのMythosモデルへのアクセス禁止が続くアジア市場で、代替となる独自モデルを開発するスタートアップが急増している。AI地政学がイノベーション競争を加速させている実態を報じる。

- **[Apple Vision Pro exec is reportedly leaving for OpenAI](https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/)** - Apple Vision Proを率いたエグゼクティブがOpenAIに移籍すると報道。空間コンピューティングのノウハウをAIラボが取り込む動きで、OpenAIのハードウェア・XR戦略との関連で注目される。

- **[SoftBank's CEO isn't the only one with questions about Elon Musk's orbital data center hype](https://techcrunch.com/2026/06/27/softbanks-ceo-isnt-the-only-one-with-questions-about-elon-musks-orbital-data-center-hype/)** - イーロン・マスクが提唱する「軌道上データセンター」構想に対し、孫正義CEOを含む複数の業界リーダーが懐疑的な見方を示した。宇宙インフラのAI計算基盤への転用という壮大な計画の現実性が問われている。

- **[OpenAI poaches Uber India chief to lead its biggest market outside the US](https://techcrunch.com/2026/06/26/openai-poaches-uber-india-chief-to-lead-its-biggest-market-outside-the-u-s/)** - OpenAIがUberインド責任者を引き抜き、米国外最大市場のインドを本格攻略する姿勢を示した。インドのAI市場は数億人のユーザーを抱え、各AI企業が争奪戦を展開している。

## Ars Technica

- **[Anthropic says Alibaba must be punished for largest Claude cloning attack](https://arstechnica.com/tech-policy/2026/06/anthropic-claims-alibaba-defied-trump-to-attack-claude-and-steal-capabilities/)** - AnthropicがAlibabaを「史上最大のClaudeクローニング攻撃」として提訴。トランプ政権の規制をかいくぐってClaude APIを不正大量利用し、モデル機能を盗用したと主張している。AI知的財産の保護と国際的なLLM開発競争の最前線を映すニュース。

- **[Notion killing Skiff-influenced email app since most users use AI agents instead](https://arstechnica.com/gadgets/2026/06/notion-killing-skiff-influenced-email-app-since-most-users-use-ai-agents-instead/)** - Notionが買収したSkiffのメール機能を廃止すると発表。廃止理由として「ユーザーの多くがメール管理をAIエージェントに移行したため」と説明しており、AIエージェントがプロダクティビティツールを実際に代替し始めた実例として注目される。

- **[FCC may kill $2B program that connects schools and libraries to Internet](https://arstechnica.com/tech-policy/2026/06/fcc-may-kill-2b-program-that-connects-schools-and-libraries-to-internet/)** - 米FCCが学校・図書館への低コストインターネット接続を支援する「E-Rate」プログラム（年間約20億ドル）の廃止を検討していると報じられた。デジタルデバイドを深刻化させる可能性があるとして教育関係者から反発を受けている。

- **[Netflix now requires every user profile to be tied to unique email address](https://arstechnica.com/gadgets/2026/06/netflix-now-requires-every-user-profile-to-be-tied-to-unique-email-address/)** - Netflixが各プロフィールに固有のメールアドレスの紐づけを必須化。アカウント共有対策のさらなる強化で、ファミリー間での利用に影響が出始めている。

- **[VW may close four factories to adapt to the future, report says](https://arstechnica.com/cars/2026/06/vw-may-close-four-factories-to-adapt-to-the-future-report-says/)** - フォルクスワーゲンが電動化・デジタル化への移行対応で4工場の閉鎖を検討していると報道。EV市場の競争激化とコスト削減圧力が欧州自動車産業の構造転換を加速している。

## 注目トピック

今回のフィードを通じて最も際立つのは、**AIエージェントが開発ワークフローそのものを変えている**という実感の高まりだ。「Claude Codeの使い方が間違っている」記事が784ブクマを獲得し、エンジニアが「コードを書く人」から「AIに仕様を与える人」へ変化しつつあるとのZenn記事も大きく共感を集めた。AI時代のコードレビューの対象をエンジニア個人からCLAUDE.mdなどの「仕組み」へ向けるべきという論考も登場し、開発プロセスの再定義が急速に進んでいる。さらにNotionが「ユーザーがメール管理をAIエージェントに移行したため」メールアプリを廃止すると発表したことは、エージェントがプロダクティビティツールを代替し始めた象徴的な出来事だ。

もう一つの大きな流れは、**AI地政学の摩擦と信頼の問題**だ。AnthropicがAlibabaを「史上最大のClaudeクローニング」として提訴したニュースは、LLMの知的財産保護が国際的な法廷闘争の局面に入ったことを示す。一方でAnthropicの輸出制限に対抗するようにアジアのスタートアップが独自モデルを急増させており、AI開発競争の分断化が進んでいる。同時に、NLNet LabsがLLM生成コードをOSSとして受け付けない方針を明文化したことや、耐量子暗号（PQC）移行の緊急性に関する記事が注目を集めたことは、技術コミュニティが品質・安全・セキュリティへの意識を高めていることを示している。
