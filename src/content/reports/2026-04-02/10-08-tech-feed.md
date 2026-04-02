---
title: "Tech Feed ダイジェスト（2026年4月2日）"
date: "2026-04-02T10:08"
category: "summary"
summary: "Artemis II月面有人飛行・DeFi Drift数百億円ハック・Adobe CC hostsファイル改ざん疑惑・UUIDv7主キー論・AWS DevOps Agent GA"
tags: ["ai", "security", "aws", "space", "claude-code", "defi", "crypto", "llm", "postgresql", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[100行のCLAUDE.mdより35行が効く理由 — 公式仕様で解く設定の最適化](https://qiita.com/nogataka/items/d6c83ea50b82e1c2602c)** ([448users](https://b.hatena.ne.jp/entry/s/qiita.com/nogataka/items/d6c83ea50b82e1c2602c)) - Anthropicの公式仕様に基づき、CLAUDE.mdが実際に読み込まれるタイミングとコンテキストコストを解析した上で「短く・構造化されたルール記述」が長大な設定ファイルより効果的である理由を論証した記事。トークン経済の観点からプロンプト設計を最適化する実践的アプローチとして、Claude Code活用者に必読の内容だ。

- **[Adobe CCがhostsファイルを無断で変更か。批判の声相次ぐ](https://pc.watch.impress.co.jp/docs/news/2098494.html)** ([245users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2098494.html)) - Adobe Creative Cloudのアップデートがシステムの`/etc/hosts`ファイルを無断で書き換え、競合ツールや解析サービスへのアクセスを遮断しているとする報告が多数上がった。ユーザーの同意なくネットワーク設定を改ざんする行為はセキュリティ・プライバシーの観点でも問題視されており、Adobeの説明責任を求める声が高まっている。

- **[完全自律のコーディングパイプラインを作った](https://zenn.dev/theaktky/articles/5f9f18c34950c1)** ([114users](https://b.hatena.ne.jp/entry/s/zenn.dev/theaktky/articles/5f9f18c34950c1)) - 仕様書を渡すだけでIssue起票・設計・実装・テスト・PRレビューまでを人間の介在なく完走するコーディングパイプラインの構築記録。Claude CodeをオーケストレーターとするマルチエージェントArc構成と、各フェーズの品質ゲート設計が詳述されており、自律型ソフトウェア開発の実用化レベルを示す事例として注目を集めている。

- **[AIエージェントのHuman-in-the-Loop評価を深化させる](https://tech.layerx.co.jp/entry/2026/04/01/150000)** ([97users](https://b.hatena.ne.jp/entry/s/tech.layerx.co.jp/entry/2026/04/01/150000)) - LayerXがAIエージェントの判断精度を人間によるフィードバックループで継続改善する評価フレームワークを公開。「どの判断を人間に委ねるか」の境界設計・フィードバックデータの収集・モデルへの反映サイクルが体系的に整理されており、エージェントの本番運用品質を向上させる実践知として読み応えがある。

- **[CloudflareがAstroベースのオープンソースCMS「EmDash」を公開](https://dev.classmethod.jp/articles/tried-emdash-astro-based-oss-cms-by-cloudflare/)** ([58users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/tried-emdash-astro-based-oss-cms-by-cloudflare/)) - CloudflareがAstroフレームワーク製のヘッドレスCMS「EmDash」をオープンソースで公開し、Cloudflare Workers上にワンコマンドでデプロイできることを検証した記事。WordPress の精神的後継を標榜する軽量・エッジネイティブなCMS設計が試されており、Astro利用者やエッジ展開を検討する開発者の注目を集めている。

## Zenn

- **[ReAct (Reason+Act) パターンを TypeScript だけで実装する](https://zenn.dev/kt3k/articles/74785af8436b1e)** - LangChainなどのフレームワークに頼らず、TypeScriptの素のコードだけでLLMが「思考→ツール実行→観察→再思考」を繰り返すReActエージェントを実装するチュートリアル。フレームワークの抽象レイヤーを外すことでReActの本質的な動作が把握でき、エージェント設計の理解を深める良質な入門コンテンツとなっている。

- **[主キーはもう「UUIDv7」一択なのか？ 〜 ID技術の歴史的変遷と現時点の最適解 〜](https://zenn.dev/loglass/articles/c2db7e85702571)** - 連番整数・UUIDv4・ULID・UUIDv7の特性を比較し、ソート可能性・インデックス効率・衝突確率・DBサポート状況の観点から2026年時点の主キー選定指針をまとめた記事。PostgreSQL 17でのネイティブUUIDv7対応を踏まえ「新規プロジェクトではUUIDv7を基本選択にしてよい」という現実的な結論が示されている。

- **[ログ設計：基礎から応用まで](https://zenn.dev/sun_asterisk/articles/665f05f1b584dd)** - ログの目的分類（デバッグ・監査・アラート）・構造化ログのフォーマット設計・ログレベルの正しい使い分け・検索性を高めるフィールド命名規則まで、システム設計の観点からログ戦略を体系化した記事。「後から絶対困る」ログ設計のアンチパターンと、OpenTelemetryとの連携まで幅広くカバーした実践ガイドだ。

## Qiita

- **[【35歳未経験でも理解できた】Webシステムの全体像](https://qiita.com/wata-sho/items/a185ecd13bf4be6cf65c)** - DNSからTCP/IP・HTTP・Webサーバー・AP・DB・CDNまで、Webシステムを構成するレイヤーを図を交えて平易に解説した記事。未経験者向けと銘打ちながらも構成の整理が丁寧で、チーム勉強会の教材としても使えるレベルに仕上がっており、基礎固めとして広く支持されている。

- **[SQLインジェクションをPreparedStatementで防ぐ — 仕組みから理解する安全なクエリの書き方](https://qiita.com/S_kamon/items/9d9556e9c5f82b791a05)** - PreparedStatementがSQLインジェクションを防ぐ原理を「クエリのコンパイルとパラメータ渡しの分離」という仕組みから説明した記事。単なるエスケープとの違い・ORMを使う場合の注意点・プレースホルダーの正しい使い方まで、セキュアコーディングの基礎として押さえておきたい内容が整理されている。

- **[Copilot Studio エージェントの展開先はどこがベスト？4つのチャネルをライセンス・機能面で比較してみた](https://qiita.com/Takashi_Masumori/items/acdedf5f62ce776a83ed)** - Microsoft Copilot Studioで作成したエージェントをTeams・SharePoint・Web・Power Appsの4チャネルに展開する場合のライセンス要件・制約・UX差異を2026年4月時点の情報で比較した記事。「どこに展開するか」で機能・コストが大きく変わる現状が整理されており、M365環境でAIエージェントを展開する担当者に参考になる。

## AWS 新着

- **[Amazon ECS announces Managed Daemons for ECS Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ecs-managed-daemons/)** (Apr 1) - ECS Managed Instancesでデーモン型タスク（ログ転送・モニタリング・セキュリティエージェントなど）をAWSが管理する形で自動デプロイ・更新する「Managed Daemons」機能が発表された。ノードへのサイドカー展開を手動管理する煩わしさが解消され、Kubernetes DaemonSetに相当する運用がECSでも簡易化される。

- **[Amazon SageMaker Data Agent now supports geo-specific inference for Japan and Australia](https://aws.amazon.com/about-aws/whats-new/2026/03/sage-maker-da-infr-jp-au/)** (Apr 1) - SageMaker Data Agentの推論処理が日本・オーストラリアリージョン内で完結する地理的推論オプションに対応した。データが国外に出ることを禁じるデータ主権規制を遵守しながらAIによるデータ分析エージェントを活用できるようになり、日本企業のクラウドAI活用における規制対応の選択肢が広がる。

- **[Amazon Bedrock AgentCore Evaluations is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/03/agentcore-evaluations-generally-available/)** (Mar 31) - Bedrockのエージェント品質を体系的に評価するフレームワーク「AgentCore Evaluations」がGA（正式提供）となった。タスク達成率・ツール使用精度・会話品質などの指標をカスタマイズして自動評価できるため、エージェントのリリース判断やモデル切り替え比較を定量的に行えるようになる。

- **[AWS DevOps Agent is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-devops-agent-generally-available/)** (Mar 31) - Issueを渡すと自動でコード修正・テスト・PRを作成するAWS DevOps AgentがGAを迎えた。CodeWhispererを基盤とし、CodeCatalystのワークフローと統合してCI/CDパイプライン全体を自律的に進行させるエンドツーエンドの開発自動化サービスとして注目される。

- **[Aurora DSQL launches new connectors that simplify building .NET and Rust applications](https://aws.amazon.com/about-aws/whats-new/2026/03/aurora-dsql-rust-npgsql-connectors/)** (Mar 31) - サーバーレス分散SQLのAurora DSQLがRustの`tokio-postgres`互換コネクタと.NETの`Npgsql`拡張を提供し、両言語から認証・接続管理なしでDSQLに接続できるようになった。複雑なコネクション設定をライブラリが吸収するため、Rustや.NETバックエンドへの採用障壁が大幅に下がる。

## Lobsters

- **[Reading leaked Claude Code source code](https://lr0.org/blog/p/claude-code-source/)** - 流出したClaude Codeのソースコードを実際に読み込み、アーキテクチャ・内部ツール定義・プロンプトテンプレートの実装詳細を技術的視点で分析した記事。「なぜそう動くのか」の内部実装を一次資料として確認できる機会として、AI開発者コミュニティで活発に議論されている。

- **[git_bayesect: Bayesian git bisect](https://github.com/hauntsaninja/git_bayesect)** - 通常の二分探索ベースの`git bisect`と異なり、各コミットに「バグを含む事後確率」を割り当てるベイズ推定を用いて効率的に不具合導入コミットを特定するツール。テストが確率的に失敗する（フレーキー）ケースや、バグの導入確率が連続的に変化する状況での精度向上が期待され、大規模リポジトリのデバッグに有用だ。

- **[Email obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)** - スパムクローラーへのメールアドレス露出を防ぐための各種難読化手法（CSSトリック・JavaScriptエンコード・画像化・mailto:代替など）を2026年時点で実験的に評価した記事。「難読化競争」がどの程度有効か・どの手法がクローラーに破られているかを実測データで示しており、メールアドレス保護の実践知として参考になる。

- **[pgit: I Imported the Linux Kernel into PostgreSQL](https://oseifert.ch/blog/linux-kernel-pgit)** - Linuxカーネルのgitリポジトリ（100万以上のコミット）をPostgreSQLのテーブルに取り込み、SQLでコミット・ファイル・差分を横断検索できるようにした実験的プロジェクトの記録。インデックス設計・大量データインポートの最適化・クエリ例が詳述されており、PostgreSQLの柔軟性とgit-as-a-databaseの可能性を示すユニークな事例だ。

- **[We built Postgres compatibility for our database and made it reusable libraries](https://greptime.com/blogs/2026-04-01-greptimedb-postgresql-compatibility)** - 時系列DB「GreptimeDB」にPostgreSQLワイヤプロトコル互換性を実装した経緯と、プロトコルパーサー・認証・型変換の実装を汎用ライブラリとして切り出した話。Postgres互換性構築のノウハウが再利用可能な形で公開されており、独自DBを開発するチームにとって価値ある実装資料となっている。

## dev.to

- **[The Hardest Part of Modern C++ Isn't the Language](https://dev.to/silverstream/the-hardest-part-of-modern-c-isnt-the-language-4p5h)** - C++の難しさは言語仕様そのものではなく、ツールチェーン（CMake・Conan・vcpkg）の複雑さとビルドシステムの分断にあるという主張。Rustが「cargo」で解決したパッケージ管理・ビルドの一元化問題をC++エコシステムがいまだ抱えている現状を論じており、C++とRustの普及差を説明するもう一つの軸として共感を呼んでいる。

- **[DeepSource vs Semgrep: Static Analysis Tools Compared (2026)](https://dev.to/rahulxsingh/deepsource-vs-semgrep-static-analysis-tools-compared-2026-1h8a)** - CIに組み込む静的解析ツールとして代表的なDeepSourceとSemgrepを、検出精度・カスタムルール作成の容易さ・IDEとの統合・コスト面から比較した2026年版の評価記事。ルールDSLの学習コストとFalse Positive率の差異が詳細に整理されており、静的解析ツール選定の実務判断に使える内容となっている。

- **[Spec Driven Development With LLMs](https://dev.to/juststevemcd/spec-driven-development-with-llms-1dhk)** - LLMを使ったコード生成において「何を作るか」をOpenAPI仕様やJSONスキーマなどの形式仕様として先に定義し、それをLLMへのコンテキストとして渡すSpec Driven Developmentのアプローチを解説。曖昧な自然言語指示より形式仕様の方が生成コードの品質・一貫性が高いという実践的知見が示されており、LLM活用開発手法の一つのベストプラクティスとして注目される。

## TechCrunch

- **[De-fi platform Drift suspends deposits after millions in crypto stolen in hack](https://techcrunch.com/2026/04/01/de-fi-platform-drift-suspends-deposits-and-withdrawals-after-millions-in-crypto-stolen-in-hack/)** - DeFiプラットフォームDriftが数億ドル規模の暗号資産を盗まれ入出金を一時停止した。2026年最大規模の暗号資産盗難になる見込みで、スマートコントラクトの脆弱性を突いたオンチェーン攻撃の詳細が調査中。DeFiセキュリティ監査の重要性を改めて示す大型事件だ。

- **[Anthropic took down thousands of GitHub repos trying to yank its leaked source code — a move the company says was an accident](https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/)** - Claude Codeのソース流出を受けAnthropicが送ったDMCAテイクダウン通知が誤って数千のGitHubリポジトリに届き、無関係のリポジトリまで一時非公開化される事態となった。Anthropicは「誤り」として大部分の通知を取り下げたが、大規模DMCA執行の副作用として開発者コミュニティに混乱をもたらした。

- **[Apple releases security fix for older iPhones and iPads to protect against DarkSword attacks](https://techcrunch.com/2026/04/01/apple-releases-security-fix-for-older-iphones-and-ipads-to-protect-against-darksword-attacks/)** - Appleが旧世代のiPhone・iPad向けに緊急セキュリティアップデートをリリースし、「DarkSword」と呼ばれる流出ハッキングツールを悪用した攻撃から保護する修正を適用した。Pegasusに続く国家ツール流出案件として、古い端末を使い続けるユーザーへの影響が懸念される。

- **[WhatsApp notifies hundreds of users who installed a fake app made by government spyware maker](https://techcrunch.com/2026/04/01/whatsapp-notifies-hundreds-of-users-who-installed-a-fake-app-that-was-actually-government-spyware/)** - Metaが約200名のユーザーに「イタリア製政府スパイウェアの偽WhatsAppアプリをインストールさせられた」と通知した。正規アプリストア外で配布された偽装アプリが完全なメッセージ・通話・位置情報へのアクセスを持っていたとされ、商業スパイウェア産業の監視実態が改めて明るみに出た。

- **[Startup funding shatters all records in Q1](https://techcrunch.com/2026/04/01/startup-funding-shatters-all-records-in-q1/)** - 2026年Q1のスタートアップ資金調達額が過去最高を記録した。OpenAI・Anthropic・xAI・Waymoへの巨大資金投入がけん引しており、AIセクターへの資本集中が加速。ただし「一部超大型ディールが統計を押し上げているに過ぎない」という指摘もあり、ブロードマーケットの熱狂とは区別して見る必要がある。

## Ars Technica

- **[Artemis II, NASA's boldest mission in generations, launches crew to the Moon](https://arstechnica.com/space/2026/04/four-astronauts-depart-for-the-moon-with-a-fiery-send-off-from-cape-canaveral/)** (Apr 2) - NASAのArtemis IIミッションが打ち上げられ、アポロ計画以来初めて人類を月軌道へ送るミッションが開始された。4名の宇宙飛行士がOrionカプセルでSLSロケットによりケープカナベラルを出発し、月周回飛行後に地球帰還を目指す。半世紀ぶりの有人月探査プログラムが本格的な有人段階に突入した歴史的節目だ。

- **[Musk loves Grok's "roasts." Swiss official sues in attempt to neuter them.](https://arstechnica.com/tech-policy/2026/04/grok-degrades-women-with-vulgar-roasts-swiss-govt-officials-lawsuit-says/)** - GrokのAI「ローストモード」が女性を性的・侮辱的に「批評」する出力を生成するとして、スイスの政府高官がxAIを相手取り訴訟を起こした。AIの言論・エンターテインメント機能とヘイト・ハラスメント規制の境界線をめぐる法的争いとして、EU圏のAI規制動向に影響を与える可能性がある。

- **[Running local models on Macs gets faster with Ollama's MLX support](https://arstechnica.com/apple/2026/03/running-local-models-on-macs-gets-faster-with-ollamas-mlx-support/)** (Mar 31) - OllamaがAppleのMLXフレームワークをバックエンドに採用し、Apple SiliconのNeural Engine・GPU・CPUを最大限活用したローカルLLM推論を実現した。AppleのMLXは同一ハードウェアでMLXKit比較で最大2倍以上の高速化が報告されており、M4搭載Macでの本格的なローカルAI推論環境が現実的になってきた。

## 注目トピック

今週最大のニュースはArtemis IIの打ち上げだ。アポロ17号（1972年）以来半世紀以上ぶりに人類が月軌道へ向かう歴史的ミッションが始動し、SpaceXのIPO申請（評価額1.75兆ドル）と合わせて宇宙産業の商業化・国家探査の両軸が同時に前進している週となった。

テクノロジーセキュリティ面では多発的な重大インシデントが続く。DeFiプラットフォームDriftへの数億ドル規模の攻撃、政府スパイウェアによる偽WhatsAppアプリ配布、Apple端末を狙うDarkSwordツールの悪用、そしてAnthropicのClaude Codeソースコード流出とその事後対応（誤ったDMCA大量発行）が重なり、ソフトウェアサプライチェーンからエンドユーザーのデバイスまで広範な攻撃面が可視化された週となった。Claude Codeソース流出の副作用として、CLAUDE.md最適化や自律コーディングパイプライン実装など、AIツール実践知を共有するコンテンツが国内でも急増しているのも特徴的なトレンドだ。

