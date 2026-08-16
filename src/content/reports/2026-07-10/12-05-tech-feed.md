---
title: "Tech Feed ダイジェスト（2026年7月10日）"
date: "2026-07-10T12:05"
category: "summary"
summary: "OpenAIがCodexを刷新・ZOZOがJITアクセス全社導入・GoogleがAlphaEvolve一般公開・Rust書き換えブーム続くなど"
tags: ["ai", "agent", "security", "aws", "rust"]
---

## はてなブックマーク (テクノロジー)

- **[メタ｢インスタ｣画像、他人がAIで合成可能　拒否しないと勝手に素材化](https://www.nikkei.com/article/DGXZQOGN09CE20Z00C26A7000000/)** ([135users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOGN09CE20Z00C26A7000000/)) - Metaが「インスタ」の画像を他人がAI生成の素材として利用できる仕組みを導入し、拒否設定をしない限り自分の投稿画像がAI合成素材として使われてしまう問題を報じた記事。オプトアウトが前提のデフォルト設計への懸念が広がっている。
- **[AWSの強い権限は使い捨てに ── ZOZOがJITアクセスを全社導入した設計と運用 - ZOZO TECH BLOG](https://techblog.zozo.com/entry/just-in-time-access-company-wide-rollout-at-zozo)** ([103users](https://b.hatena.ne.jp/entry/s/techblog.zozo.com/entry/just-in-time-access-company-wide-rollout-at-zozo)) - ZOZOがAWSの強い権限を常時付与せず必要なときだけ一時的に付与するJust-In-Timeアクセスを全社導入した設計と運用を解説したテックブログ記事。権限の乗っ取りや誤操作による被害範囲を最小化する実践知見が具体的に語られている。
- **[ax — the AI-era curl](https://ax.yusuke.run/)** ([103users](https://b.hatena.ne.jp/entry/s/ax.yusuke.run/)) - AI時代のcurlを標榜する新ツール「ax」が登場し話題になっている。LLMエージェントが扱いやすい形でHTTPリクエストの発行とレスポンスの構造化を行える点を売りにしているとみられる。
- **[Claude Opus 4.7に匹敵するコーディングAI「Ornith-1.0」、NVIDIAが「Qwen3.6」を軽量化4ビットモデルを商用利用可能で公開など生成AI技術5つを解説（生成AIウィークリー）](https://www.techno-edge.net/article/2026/07/10/5280.html)** ([77users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/07/10/5280.html)) - Claude Opus 4.7に匹敵する性能を持つ新興コーディングAI「Ornith-1.0」や、NVIDIAによるQwen3.6の4ビット軽量化商用モデル公開など、直近1週間の生成AI技術動向5つをまとめた解説記事。
- **[Googleがコード最適化・アルゴリズム発見エージェントの「AlphaEvolve」を一般公開](https://gigazine.net/news/20260710-google-alphaevolve-generally-available/)** ([11users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260710-google-alphaevolve-generally-available/)) - Googleがコードの最適化やアルゴリズムの自動発見を行うAIエージェント「AlphaEvolve」を一般公開した。数学的最適化やアルゴリズム探索の自動化という研究成果が、誰でも使えるプロダクトとして提供された。

## Zenn

- **[同じ React アプリで TypeScript 5.9 / 6.0 / 7.0 の型チェックを比べた](https://zenn.dev/m2lab/articles/typescript-version-benchmark)** - Go製コンパイラを採用したTypeScript 7で型チェックが公式ベンチで約10倍高速・メモリ使用量約50%減とされる中、実際の中規模Reactアプリで5.9/6.0/7.0を比較検証した記事。公式ベンチの数字が自分のリポジトリ規模でも再現するかを具体的に確かめている。
- **[ミューテーションテストのススメ](https://zenn.dev/xtm_blog/articles/9b7fa5f94eae28)** - テスト駆動開発の書籍で紹介される「欠陥挿入」の概念をきっかけに、テストコード自体の品質をコードへの意図的なバグ混入によって検証するミューテーションテストの考え方を紹介した記事。
- **[Claude Codeの/checkup(旧/doctor)コマンドで環境を診断・自動修正する](https://zenn.dev/shirochan/articles/a24092cfebefa0)** - Claude Codeの`/doctor`が`/checkup`に改称され、インストール直後やアップデート後の環境診断・自動修正を行えるコマンドとして解説した記事。挙動がおかしいときに手探りで直す代わりに使える公式の診断手段を紹介している。
- **[APIもDBも東京なのに、全クエリが太平洋横断していた話](https://zenn.dev/avaintelligence/articles/b7d4743a448485)** - 東京リージョンのAPIとDBを使っているにもかかわらず全クエリが遅延する不具合の原因が、実は太平洋を横断する通信経路にあったというトラブルシュート記事。クラウド構成が正しく見えても、実際のネットワーク経路まで確認しないと見落とすリスクを具体的に示している。
- **[VS Code DevContainer を使わなくなった私の、LLM エージェント向け開発環境](https://zenn.dev/kenfdev/articles/1febc0052b0d71)** - LLMエージェント向けの開発環境としてVS Code DevContainerをやめた理由と、代わりに採用したdocker composeベースの構成の考え方を紹介した記事。

## Qiita

- **[最近のDynamoDB設計事情：single-table偏重の見直しとGSIマルチ属性キー](https://qiita.com/Suemura/items/ce4cb4290e4e711fdc98)** - DynamoDBの設計手法として長らく主流だったsingle-table設計への偏重を見直し、GSIのマルチ属性キーを活用した設計事情を整理した記事。
- **[クラウドの仮想ネットワークは、どのように「成立」しているのか ── VPC・セキュリティグループ・PrivateLink・VPCピアリングの内部機構を、AWS・GCP・Azure の一次資料でたどる](https://qiita.com/etale_cohomology/items/a5db27c311650b6b9c6b)** - AWS・GCP・Azureの一次資料をたどりながら、VPC・セキュリティグループ・PrivateLink・VPCピアリングといったクラウドの仮想ネットワークがどのような内部機構で成立しているかを解説した記事。
- **[GPT-5.6 は何が変わった？ Luna / Terra / Sol の違いと実務での選び方](https://qiita.com/aktsmm/items/7b92f95325893cb4e5a3)** - OpenAIの新モデルファミリーGPT-5.6に含まれるLuna・Terra・Solという3つのバリエーションの違いと、実務でどれを選ぶべきかを整理した記事。
- **[回帰テストの設計 — デグレを技法で防ぐ](https://qiita.com/ryucciarati/items/47e139760c60dbf2beb7)** - 回帰（デグレ）を人力レビューだけに頼らず、テスト技法によって体系的に防ぐための回帰テスト設計の考え方をまとめた記事。
- **[Claude Code の記事24本を集めて数えた「とりあえずこれやっとけ」](https://qiita.com/sgrs38/items/5dc277ed4ecc00a5498b)** - Claude Code関連の記事24本を集めて傾向を集計し、「とりあえずこれをやっておけば良い」という定番プラクティスを抽出した記事。

## AWS 新着

- **[OAuth support for the AWS MCP Server](https://aws.amazon.com/about-aws/whats-new/2026/07/oauth-aws-mcp-server/)** (2026-07-09) - AWS MCP ServerへAWS Sign-Inを使ったOAuthで接続できるようになり、追加の認証ソフトウェアなしに標準的なOAuthフローでAIエージェントを接続できるようになった。MCP経由でAWSリソースを操作するAIエージェントの認証まわりが簡素化される。
- **[AWS Config now supports 191 additional managed rules](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-config-additional-managed-rules)** (2026-07-09) - AWS Configが191個の新しいマネージドルールに対応し、Bedrock・SageMaker・ECS・EKS・RDS・Redshift・S3・CloudTrailなど主要サービス群の設定コンプライアンスをより広くカバーできるようになった。
- **[Amazon SageMaker HyperPod now supports deep health checks for Slurm clusters with continuous provisioning](https://aws.amazon.com/about-aws/whats-new/2026/07/deep-health-check-continuous-slurm/)** (2026-07-09) - SageMaker HyperPodのSlurmクラスターで、継続的プロビジョニング環境でも稼働中インスタンスのGPUヘルスを能動的に検証するディープヘルスチェックに対応した。
- **[Amazon SageMaker Feature Store now supports batch feature writes and record listing](https://aws.amazon.com/about-aws/whats-new/2026/07/amzn-sgm-feature-store-batch-write-list/)** (2026-07-09) - SageMaker Feature Storeがバッチでの特徴量書き込みとレコード一覧取得に対応し、モデルの学習・推論用データ管理を効率化できるようになった。
- **[Amazon SageMaker Unified Studio adds custom asset types to the catalog in IAM-based domains](https://aws.amazon.com/about-aws/whats-new/2026/07/smus-custom-asset-types-iam/)** (2026-07-09) - SageMaker Unified StudioのIAMベースドメインで、カタログに任意フォーマットのアセットをカスタムアセットタイプとして登録できるようになった。

## Lobsters

- **[two case studies of NaN](https://sebsite.pw/w/20260709-nan.html)** (24pt) - 浮動小数点のNaN（非数）が実際のシステムでどのようにバグを引き起こすかを、2つの具体的な事例を通じて掘り下げた記事。NaNの伝播特性が想定外の挙動を招く様子を実例で示している。
- **[Page weight matters](https://nh3.dev/blog/05-bloat)** (14pt) - Webページの重さ（バイト数）が読み込み速度やユーザー体験にどれだけ影響するかを論じたパフォーマンス記事。過度なJS・アセットの肥大化に警鐘を鳴らしている。
- **[Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust)** (13pt) - C++コードを安全なRustへ自動変換するOSSツール「Cpp2Rust」を紹介したプロジェクト。メモリ安全性のない既存C++資産をRustへ段階的に移行する際の自動化アプローチとして注目されている。
- **[A road to Lisp: Why Lisp](https://scotto.me/blog/2026-07-09-why-lisp/)** (10pt) - なぜ今Lispを学ぶ価値があるのかを論じたエッセイ記事。S式によるコードとデータの同一視というLispの設計思想が持つ普遍的な価値を再考している。

## dev.to

- **[Why AI Coding Agents Fail on Large Repos: The Stateless Context Problem](https://dev.to/manan_822e7/why-ai-coding-agents-fail-on-large-repos-the-stateless-context-problem-p0g)** - AIコーディングエージェントが大規模リポジトリで失敗しやすい理由を、コンテキストがステートレスで「鍵穴から覗くように」リポジトリの一部しか見えない構造的な制約として論じた記事。
- **[RLS fails silently. Here's how to actually test your Supabase policies.](https://dev.to/munaf-khatri/rls-fails-silently-heres-how-to-actually-test-your-supabase-policies-p6m)** - Supabaseの行レベルセキュリティ（RLS）ポリシーが間違っていてもエラーを出さず、単に想定と違う行を返すだけで気づきにくいという問題を指摘し、テストとシードデータを自動生成してRLSポリシーを検証する方法を紹介した記事。
- **[Rewriting PostgreSQL in Rust: Technical Challenges and Lessons Learned](https://dev.to/tamizuddin/rewriting-postgresql-in-rust-technical-challenges-and-lessons-learned-1f26)** - PostgreSQLをRustで書き直す試みにおける技術的な壁と得られた知見を紹介した記事。メモリ安全性を活かしつつCで書かれた既存DBエンジンの機能を移植する難しさが語られている。
- **[Run a shared team inbox owned by an AI agent](https://dev.to/mqasimca/run-a-shared-team-inbox-owned-by-an-ai-agent-3md4)** - AIエージェントが下書きを作成し人間がOutlookから承認するという形の「共有チームインボックス」の構築事例を紹介した記事。AIメール活用のデモが避けがちな、人間の承認フローを組み込む部分に焦点を当てている。
- **[O que aprendi sobre segurança implementando hardening em um projeto que não lida com dinheiro](https://dev.to/ewbenigno/o-que-aprendi-sobre-seguranca-implementando-hardening-em-um-projeto-que-nao-lida-com-dinheiro-433b)** - 金銭を扱わない小規模プロジェクトであってもセキュリティのハードニングを実施した経験から得た教訓を紹介したブラジルの開発者による記事。過剰と思われがちなセキュリティ対策が実際にどう役立ったかを具体的に語っている。

## TechCrunch

- **[Fidji Simo steps down from OpenAI's no. 2 role](https://techcrunch.com/2026/07/09/fidji-simo-steps-down-from-openais-no-2-role/)** - OpenAIのナンバー2幹部フィジー・シモ氏が、療養休暇が想定より長引いた末にフルタイムの役職から退任すると発表された。経営体制の空白が、同社にとって難しい時期に生じている。
- **[Elon Musk praises Mythos/Fable, promises not to 'cut off' Anthropic](https://techcrunch.com/2026/07/09/elon-musk-praises-mythos-fable-promises-not-to-cut-off-anthropic/)** - イーロン・マスク氏がAnthropicの新モデル「Mythos/Fable」を称賛し、約400億ドル規模の収益がかかる自社インフラでのAnthropicモデルのホスティングを「打ち切らない」と約束したと報じられた。AI企業間のインフラ依存関係と緊張関係が透けて見える。
- **[Google will now disclose which ads are made with AI](https://techcrunch.com/2026/07/09/google-will-now-disclose-which-ads-are-made-with-ai/)** - Googleが、AIによって生成・加工された広告であることを開示する仕組みを導入すると発表した。これまで選挙広告に限られていたAI生成コンテンツの開示義務を、広告全般に広げる動き。
- **[Meta's new AI chips will begin production in September](https://techcrunch.com/2026/07/09/metas-new-ai-chips-will-begin-production-in-september/)** - Metaが自社開発のAIチップの量産を9月に開始する見通しだと報じられた。AIの進化速度に合わせて仕様を柔軟に変更できるよう、モジュール式の設計アプローチを採用しているという。
- **[Paris-based AI voice startup Gradium raises $100M seed, backed by Nvidia](https://techcrunch.com/2026/07/09/paris-based-ai-voice-startup-gradium-raises-100m-seed-backed-by-nvidia/)** - パリ拠点のAI音声スタートアップGradiumがNVIDIAの出資を受けて1億ドルのシード資金を調達した。調達資金でベイエリアに拠点を開設し、AIエコシステムの中心地での人材獲得競争に挑む狙いがある。

## Ars Technica

- **[OpenAI wants its new tool to do your work for you and with you](https://arstechnica.com/ai/2026/07/openai-wants-its-new-tool-to-do-your-work-for-you-and-with-you/)** - OpenAIがCodexを刷新し、数時間にわたり自律的に稼働できるワークフローを打ち出した新ツールを発表した。人間の代わりに作業する「for you」と、人間と一緒に作業する「with you」という2つのモードを掲げ、AIコーディングエージェント市場での差別化を図っている。
- **[Free Waymo rides in California? You can thank a regulatory quirk.](https://arstechnica.com/cars/2026/07/free-waymo-rides-in-california-you-can-thank-a-regulatory-quirk/)** - カリフォルニア州の規制手続きの遅れという偶然の巡り合わせにより、Waymoの新型ロボタクシー車両が数か月間無料で乗車できる状態になっているという記事。規制のタイムラグが思わぬ形でユーザー体験に影響した事例。
- **[Judge rejects Kalshi attempt to override New York state gambling laws](https://arstechnica.com/tech-policy/2026/07/new-york-can-restrict-sports-gambling-on-prediction-markets-us-judge-rules/)** - 予測市場プラットフォームのKalshiが、ニューヨーク州のギャンブル規制を回避しようとした試みを裁判所が退けたと報じられた。予測市場であってもスポーツ賭博規制の対象になりうるとの判断は、金融テック領域における規制と技術の摩擦を示す事例。

## 注目トピック

今回のダイジェストで際立つのは、AIコーディングエージェントが「一度きりの指示」から「長時間自律的に働くワークフロー」へと役割を広げつつ、それを安全に運用するための実務知見が同時に成熟している点だ。Ars TechnicaはOpenAIがCodexを刷新し数時間単位で自律稼働する新ツールを打ち出したと報じ、はてなブックマークでもClaude Opus 4.7級の新興コーディングAI「Ornith-1.0」やGoogleのアルゴリズム自動発見エージェント「AlphaEvolve」の一般公開が話題になった。一方でAWSがMCP ServerをAWS Sign-InベースのOAuthに対応させ、ZOZOがAWSの強い権限をJust-In-Timeでしか付与しない仕組みを全社導入したように、AIエージェントやシステムに権限を渡す際の認証・認可設計そのものが実務の焦点になっている。dev.toのSupabase RLSテストの記事も、権限設計が「サイレントに壊れる」リスクへの警戒感を裏付けている。

もう一つの軸は、既存インフラをより安全な言語・設計へ書き換える動きの継続だ。LobstersではC++を安全なRustへ自動変換するOSSツール「Cpp2Rust」や、PostgreSQLをRustで書き直す試みの技術的な壁を紹介する記事が並び、直近話題のBunのRust書き換えと合わせて、メモリ安全性を求める潮流がシステムのコア部分にまで及んでいることがうかがえる。TechCrunchが報じたMetaの自社AIチップ量産開始やGoogleの広告AI開示ルールなども含め、AIの実装が「動くかどうか」から「どう安全・透明に運用するか」というフェーズへ移りつつある一日だった。
