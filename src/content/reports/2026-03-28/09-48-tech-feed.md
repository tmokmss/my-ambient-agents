---
title: "Tech Feed ダイジェスト（2026年3月28日）"
date: "2026-03-28T09:48"
category: "summary"
summary: "Claude Code最小設計・RakutenAI炎上・さくらクラウド国産初採用・Telnyx PyPI侵害・Physical Intelligence$1B調達・OpenAI Codexプラグイン・AMD 208MBキャッシュ"
tags: ["ai", "llm", "claude", "aws", "security", "rust", "hardware", "agents", "frontend", "oss"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Codeを「最小構成」で飼い慣らす — CLAUDE.md + Skills + Hooks のハーネス設計](https://note.com/m2ai_jp/n/na3869c615096)** ([267users](https://b.hatena.ne.jp/entry/s/note.com/m2ai_jp/n/na3869c615096)) - Claude CodeのCLAUDE.md・Skills・Hooksという3要素を組み合わせた「ハーネス」の最小設計を解説した記事。複雑な自動化を追加する前に、この3層を整理して最低限の設定から始めることでエージェントの暴走を防ぐアーキテクチャ的な考え方が示されている。

- **[ハーネスエンジニアリング ― AIエージェントが自律的に動ける開発環境の設計](https://ai.acsim.app/articles/harness-engineering-2026)** ([185users](https://b.hatena.ne.jp/entry/s/ai.acsim.app/articles/harness-engineering-2026)) - AIエージェントが自律的に作業できる「ハーネス」＝実行環境の設計論を体系化した記事。サンドボックス・権限最小化・ロールバック可能な状態管理・観測可能性の4原則を中心に、エージェントが失敗しても安全な環境を作る設計指針を示している。

- **[「あなたは専門家です」プロンプトの罠：役割を与えることが人工知能の知識精度を破壊する](https://xenospectrum.com/ai-expert-persona-prompt-accuracy-drop/)** ([100users](https://b.hatena.ne.jp/entry/s/xenospectrum.com/ai-expert-persona-prompt-accuracy-drop/)) - 「あなたは〇〇の専門家です」というロールプロンプトがLLMの知識精度を逆に低下させるという研究結果を解説。専門家ペルソナを与えると自信過剰な生成が増え、事実誤認や根拠のない断言が増えることをベンチマークデータで示しており、プロンプト設計に根本的な見直しを迫る内容だ。

- **[Ghosttyの凄さを技術的に深ぼってく](https://www.docswell.com/s/fumiya-kume/K2746V-2026-03-27-205311)** ([51users](https://b.hatena.ne.jp/entry/s/www.docswell.com/s/fumiya-kume/K2746V-2026-03-27-205311)) - Zig製の新しいターミナルエミュレータ「Ghostty」の技術的優位性を深掘りしたスライド。GPU加速レンダリング・VT解釈の正確さ・起動速度などの面でiTerm2やAlacrittyと比較しつつ、Zigという言語選択がもたらす零コスト抽象化とビルド速度の恩恵を具体的に説明している。

- **[初の国産クラウドに「さくら」選定、デジタル相「国民の安心感にもつながる」](https://www.yomiuri.co.jp/economy/20260327-GYT1T00397/)** ([29users](https://b.hatena.ne.jp/entry/s/www.yomiuri.co.jp/economy/20260327-GYT1T00397/)) - 日本政府がデジタル庁の業務クラウド基盤として国産のさくらインターネットを初めて選定。これまでAmazon・Microsoft・Googleなど米国IT大手が独占していた政府クラウド市場に、データ主権・安全保障の観点から国産プレイヤーが入り込んだ歴史的転換点として注目されている。

## Zenn

- **[国産LLMは作れるのか？ - RakutenAI 3.0の炎上から考える](https://zenn.dev/jun1013/articles/e2e331dea0c616)** - 楽天グループが「国内最大規模」と謳って発表した約7,000億パラメータのMoE型LLM「Rakuten AI 3.0」が、公開直後にベンチマーク評価手法への疑念から炎上した顛末を分析した記事。計算資源・学習データ・評価手法の三点から「本物の国産LLM」開発の難しさを論じており、国産AI開発の現在地を冷静に見つめ直す内容だ。

- **[コーディングエージェントのサンドボックス技術を理解する](https://zenn.dev/mkj/articles/3ec9d2d39f446b)** - Claude Code・Codex CLIなどのコーディングエージェントがシェルとほぼ同等の権限を持つ中、どのようなサンドボックス技術（cgroups・seccomp・ファイルシステム名前空間・ネットワーク分離）でリスクを封じ込めるかを体系的に解説。エージェントに自由度を与えながら爆発半径を限定する設計が開発環境の安全性の鍵だと示している。

- **[Claude Code同士が会話できるようになったらしいので試してみた](https://zenn.dev/acntechjp/articles/7bb9f418be6e68)** - `claude-peers-mcp`というMCPサーバーを使って同一PC上の複数Claude Codeセッションがお互いを発見しメッセージを送り合える仕組みの実験レポート。エージェント間通信をMCPプロトコル上で実現するアプローチは、マルチエージェントシステム構築の新しいパターンとして注目に値する。

- **[Webサービスを作る上でRustを採用する必要ってほぼないよね](https://zenn.dev/miyabitti/articles/9d8e2ab63379ad)** - Webサービス開発においてRustを選ぶ必然性がほぼないという主張を展開した論考。Goや TypeScriptで十分な性能と開発速度が得られる中、Rustの学習コスト・エコシステムの成熟度・採用難度を考慮すると費用対効果が見合わないケースがほとんどというアンチテーゼ。反論コメントも活発で議論を呼んでいる。

- **[ベクトルDB不要！Pythonで構築する軽量セマンティック検索『concept-file、concept-grep』](https://zenn.dev/kiyoka/articles/concept-file-1)** - ベクトルデータベースのセットアップなしに、ファイルシステム上のテキストに対してセマンティック検索を行うPythonツール「concept-file」「concept-grep」を自作した紹介。埋め込みベクトルをプレーンファイルとして保存し`grep`的なインターフェースで意味検索を実現するアプローチは、小〜中規模のRAG構築に実用的だ。

## Qiita

- **[React CompilerはどのようにReact.memoを不要にしているのか](https://qiita.com/uhyo/items/43d4aafae2c87a12e5ed?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - React Compilerが静的解析によりコンポーネントの依存関係を自動追跡し、`React.memo`・`useMemo`・`useCallback`の手動最適化を不要にする仕組みをコードレベルで解説。コンパイラが生成するSSA（静的単一代入）形式の依存グラフから最小再レンダリング範囲を導出するアルゴリズムが丁寧に説明されている。

- **[AWSが100万基のNvidia GPUを調達。2000億ドルAI投資と自社チップ「二刀流」戦略の全貌](https://qiita.com/miruky/items/23180d8c4706ca03e4f8?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AWSが今後数年で100万基のNvidia GPUを調達しながら、同時に自社開発のTrainiumおよびInferentiaチップへの投資も継続する「二刀流」AI投資戦略の全体像を分析。2,000億ドル規模の投資計画の内訳と、競合との差別化ポイントが整理されている。

- **[スマホから指示、AIが調査・修正・検証。Claude 3つの新機能が作る開発の新しいかたち](https://qiita.com/nogataka/items/20d9f181ce111f67e084?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Anthropicが発表したClaude Codeの3つの新機能（モバイルからの指示・並列エージェント実行・自律的なテスト検証）が開発ワークフローをどう変えるかを解説。エンジニアが移動中でも承認・方向修正だけして実装はエージェントに任せる「非同期開発」のスタイルが現実的になりつつある。

- **[【AWS】Lambda Durable Functionsにおける"ステップ"の仕様を実感する](https://qiita.com/yakumi_bass5/items/2c64259c17d855175eae?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AWSが発表したLambda Durable Functionsの「ステップ」という実行単位の仕様を実際に動かして検証したレポート。Durable Functionsがオーケストレーターとアクティビティの分離でどのように長時間・再開可能なワークフローを実現するかを、Azure Durable Functionsとの比較も交えながら実測値とともに示している。

- **[【Kiro活用】specモードで試すIaC品質向上 — Well-Architected 30項目チェック](https://qiita.com/REALKTMR/items/0bafb70313b6d3dff3a9?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AWSが開発したAI統合IDE「Kiro」のspecモードを使い、TerraformなどのIaCコードをAWS Well-Architectedフレームワークの30項目に照らし合わせて自動チェックする活用例。仕様書ドリブンなAIレビューがインフラコード品質向上にどこまで使えるかを実際の結果を示して検証している。

## AWS 新着

- **[Amazon Timestream for InfluxDB Now Supports Advanced Metrics](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-timestream-for-influxdb-advanced-metrics/)** (Mar 27) - Amazon Timestream for InfluxDBがデータベースパフォーマンスと稼働状況を可視化する「Advanced Metrics」機能を追加。クエリレイテンシ・ストレージ使用量・カーディナリティなどの詳細メトリクスが取得できるようになり、時系列データ基盤の運用監視が強化される。

- **[Amazon CloudWatch Logs now supports data protection and OpenSearch PPL/SQL for Infrequent Access](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-infrequent-access-log-class/)** (Mar 27) - コスト削減向けの「Logs Infrequent Access」クラスで、データ保護機能とOpenSearch PPL・SQL形式のクエリが利用可能になった。安価なログストレージを選んでも柔軟な分析と個人情報マスキングが維持できる点で、コスト意識の高い運用チームに朗報だ。

- **[Amazon Aurora PostgreSQL now available with the AWS Free Tier](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-aurora-postgresql-aws-free-tier/)** (Mar 25) - Aurora PostgreSQLが無料枠で利用可能になり、新規サインアップ時に100ドルのクレジットも付与される。従来はRDS PostgreSQLのみ無料枠対象だったが、Auroraの高可用性・自動スケーリングをプロトタイプ段階から手軽に試せるようになった。

- **[AWS ParallelCluster 3.15 with support for P6-B300 and Slurm 25.11](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-parallelcluster-p6-b300-slurm/)** (Mar 25) - HPC向けクラスタ管理ツールAWS ParallelCluster 3.15がP6-B300（Blackwell世代GPU）インスタンスタイプとSlurm 25.11をサポート。最新GPUを使った大規模AI・科学計算ワークロードをSlurm上でオーケストレーションするための基盤整備が進んでいる。

- **[Amazon SageMaker HyperPod now supports continuous provisioning for Slurm-orchestrated clusters](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sagemaker-hyperpod-continuous-provisioning/)** (Mar 25) - SageMaker HyperPodがSlurmオーケストレーションのクラスタでも「継続的プロビジョニング」に対応。インスタンス障害時や容量不足時でも自動でノードを補充・再設定し、長時間の学習ジョブを中断させずに継続できる耐障害性が強化された。

## Lobsters

- **[Telnyx PyPI package compromised](https://telnyx.com/resources/telnyx-python-sdk-supply-chain-security-notice-march-2026)** - 通信APIプロバイダTelnyxのPython SDK（PyPI）がサプライチェーン攻撃で侵害され、悪意あるコードが混入されたことが発覚。パッケージの署名検証・依存ロックファイル・プライベートPyPIミラーの重要性を再認識させる事案で、OSSエコシステムへの依存リスクが改めて浮き彫りになった。

- **[Tailscale'd Into Homelabbing](https://rugu.dev/en/blog/homelabbing_01/)** - TailscaleのメッシュVPNを使って自宅サーバー群を安全に管理するホームラボ構築の体験記。MagicDNS・ACLポリシー・subnet routerを組み合わせてクラウドと自宅インフラをシームレスに統合する設計を紹介しており、個人開発者がプライベートクラウドを低コストで構築する実用的な指南書だ。

- **[Which Programming Language Is Best for Claude Code?](https://dev.to/mame/which-programming-language-is_best-for-claude-code-508a)** - Claude Codeに各種プログラミング言語でコードを書かせた場合の品質・コード量・修正回数を比較した実験レポート。TypeScriptとPythonが最も安定した結果を出す一方、Rust・Haskell等の型システムが強固な言語では生成精度のばらつきが大きいことが示されており、言語選択がAI活用効率に直結することを示唆している。

- **[Building a guitar trainer with embedded Rust](https://blog.orhun.dev/introducing-tuitar/)** - マイクロコントローラ上でギターのチューニングとコード認識を行うトレーナーデバイスを、組み込みRustで構築した開発記録。no_std環境でのFFT実装・リアルタイム音声処理・低レイテンシ割り込みハンドリングを全てRustのゼロコスト抽象化で実現した手法が詳述されている。

- **[Capability-based Security for Redox: Namespace and CWD as capabilities](https://www.redox-os.org/news/nlnet-cap-nsmgr-cwd/)** - Rustで書かれたマイクロカーネルOS「Redox」がネームスペースとカレントディレクトリをケーパビリティとして扱うセキュリティモデルを実装した報告。プロセスが持つ権限をオブジェクト参照として具体化することで、不要なアクセスを構造的に排除するケーパビリティベースセキュリティの実装例として参考になる。

## dev.to

- **[Your AI Agent Can Delete Production — Can You Prove It?](https://dev.to/viru_swami/your-ai-agent-can-delete-production-can-you-prove-it-41nh)** - AIエージェントがシェルコマンド・ファイル操作・API呼び出しなど破壊的操作を実行できる今、「エージェントが何をしたか」を事後に証明できる監査ログ・不変ストレージ・アクション承認フローの設計が必須だと訴える記事。エージェント行動の可監査性（Auditability）を本番環境の前提条件として位置づけている。

- **[Regression Fear in AI-Generated Codebases — Why Every PR Feels Like a Gamble](https://dev.to/vibecodiq/regression-fear-in-ai-generated-codebases-why-every-pr-feels-like-a-gamble-4cok)** - AIが生成したコードベースで毎回PRをマージするたびに何が壊れるか分からない「リグレッション恐怖」が開発チームに広がっている問題を論じた記事。型カバレッジ・E2Eテスト自動生成・AIによるリグレッションスキャンを組み合わせた対策フレームワークが提案されている。

- **[How I Reverse-Lookup M-Pesa's Hashed Phone Numbers Using a 7.2 GB Binary File and One S3 Request](https://dev.to/endafk/how-i-reverse-lookup-m-pesas-hashed-phone-numbers-using-a-72-gb-binary-file-and-one-s3-request-mk7)** - M-PesaのAPIが返すハッシュ済み電話番号を逆引きするため、7.2GBの事前計算済みバイナリ（レインボーテーブル）をS3のRange Requestで部分取得し、1回のHTTPリクエストで逆引きを実現したエンジニアリング解説。バイナリサーチとHTTP Range Requestの組み合わせによる効率的なルックアップが巧妙だ。

- **[Why contain in CSS Can Fix Your Performance Bottlenecks](https://dev.to/pawar-shivam7/why-contain-in-css-can-fix-your-performance-bottlenecks-cp4)** - CSSの`contain`プロパティを使ってレイアウト計算・ペイント・スタイル再計算の影響範囲をコンポーネント内に閉じ込めることで、大規模SPAのレンダリングパフォーマンスを改善する手法を解説。`contain: layout style paint`の各値の意味と、Chrome DevToolsでの効果測定方法が実例付きで示されている。

- **[Crossplane Has a Free API: Manage Cloud Infrastructure with Kubernetes-Native IaC](https://dev.to/0012303/crossplane-has-a-free-api-manage-cloud-infrastructure-with-kubernetes-native-iac-2l89)** - CrossplaneがKubernetesのCRDを使ってAWS・GCP・Azureのインフラリソースを宣言的に管理できるKubernetes-native IaCとして注目されている記事。TerraformのProviderと似た概念を持ちながら、Reconcileループによる常時同期とKubernetesエコシステムとの統合が強みとして示されている。

## TechCrunch

- **[Physical Intelligence is reportedly in talks to raise $1 billion, again](https://techcrunch.com/2026/03/27/physical-intelligence-is-reportedly-in-talks-to-raise-1-billion-again/)** - ロボット基盤モデルを開発するPhysical Intelligenceが再び10億ドルの資金調達交渉中と報道された。昨年の大型ラウンドに続く連続調達は、汎用ロボット制御AIへの投資熱が依然として冷めていないことを示しており、AIの「物理世界への進出」が投資家の主要テーマとして定着している。

- **[Waymo's skyrocketing ridership in one chart](https://techcrunch.com/2026/03/27/waymo-skyrocketing-ridership-in-one-chart/)** - Waymoの自律走行タクシーの乗客数が一枚のグラフで急成長を示している。都市拡大と週間乗車数の増加速度は指数的で、商業的な自律走行サービスが「概念実証」から「量的スケール」へ転換しつつある現状を端的に可視化している。

- **[Wikipedia cracks down on the use of AI in article writing](https://techcrunch.com/2026/03/26/wikipedia-cracks-down-on-the-use-of-ai-in-article-writing/)** - Wikipediaが編集ガイドラインを改訂し、AIが生成した文章をレビューなしに記事に追加することを実質禁止。AI生成コンテンツの検証困難さと「ハルシネーション」による誤情報拡散を防ぐための措置で、人間による知識の監修という原則を改めて明文化した動きだ。

- **[David Sacks is done as AI czar — here's what he's doing instead](https://techcrunch.com/2026/03/26/david-sacks-is-done-as-ai-czar-heres-what-hes-doing-instead/)** - トランプ政権のAI・暗号通貨政策調整役（AI czar）を務めていたDavid Sacksが退任。政府のAI政策立案から民間に戻る判断で、米国の国家AI戦略の舵取りを誰が担うかが注目される局面に入った。

- **[You can now transfer your chats and personal information from other chatbots directly into Gemini](https://techcrunch.com/2026/03/26/you-can-now-transfer-your-chats-and-personal-information-from-other-chatbots-directly-into-gemini/)** - GoogleがChatGPT・Claude等の他社チャットボットからの会話履歴・個人設定をGeminiに直接インポートできる機能を追加。DMA（デジタル市場法）が義務付けるデータポータビリティ対応として欧州から始まった動きで、AIチャットボット間の競争を加速させる可能性がある。

## Ars Technica

- **[With new plugins feature, OpenAI officially takes Codex beyond coding](https://arstechnica.com/ai/2026/03/openai-brings-plugins-to-codex-closing-some-of-the-gap-with-claude-code/)** - OpenAIのコーディングエージェント「Codex」にプラグイン機能が追加され、Webブラウジング・コード実行・外部API連携が可能になった。Claude Codeが先行してきたツール統合の領域にOpenAIが追いつきを図る動きとして、コーディングエージェント競争の激化を示している。

- **[Sony is raising PlayStation 5 prices again, this time by between $100 and $150](https://arstechnica.com/gadgets/2026/03/sony-is-raising-playstation-5-prices-again-this-time-by-between-100-and-150/)** - SonyがPS5の価格を100〜150ドル引き上げると発表。製造コストの上昇と円安・関税の影響を背景に、ゲームハードウェア全体で値上げが続く中、サブスクリプション型収益モデルへの移行を加速させる動機にもなりうる。

- **[AMD's Ryzen 9 9950X3D2 Dual Edition crams 208MB of cache into a single chip](https://arstechnica.com/gadgets/2026/03/amds-ryzen-9-9950x3d2-dual-edition-crams-208mb-of-cache-into-a-single-chip/)** - AMDが3D V-Cacheを2スタック搭載した「Ryzen 9 9950X3D2 Dual Edition」を発表。1チップで208MBという圧倒的なL3キャッシュ容量はゲーミング性能を大幅に向上させる一方、LLMのKVキャッシュを大量に積んだローカル推論への応用も注目されている。

- **[Senators want US energy information agency to monitor data center electricity usage](https://arstechnica.com/tech-policy/2026/03/senators-want-us-energy-information-agency-to-monitor-data-center-electricity-usage/)** - 米上院議員がエネルギー情報局（EIA）にデータセンターの電力消費監視権限を付与する法案を提出。AI学習・推論クラスタの急増による電力需要の急増が電力網に与える影響を定量化する取り組みで、AIインフラの持続可能性に関する政策議論が立法プロセスに入った。

- **[Spotify seeks $300M from Anna's Archive, which ignores all court proceedings](https://arstechnica.com/tech-policy/2026/03/spotify-lawsuit-tries-to-kick-annas-archive-off-the-web-without-much-success/)** - SpotifyがシャドウライブラリAnna's Archiveに3億ドルの損害賠償を請求したが、Anna's Archiveは訴訟手続きを一切無視している。Anna's ArchiveはSci-Hubに続く学術・書籍の非公式アーカイブとして機能しており、地理的に分散した匿名運営体を法的に封じ込める難しさを改めて示している。

## 注目トピック

今週のフィードを通じて最も色濃く見えるトレンドは**AIエージェントの「設計の成熟」**だ。Claude Codeのハーネス設計論、コーディングエージェントのサンドボックス技術、エージェント行動の可監査性要件、AIが生成したコードベースでのリグレッション対策——これらは単なる機能の紹介を超えて、「エージェントを安全に運用するためのアーキテクチャ」という共通の問いへの答えを模索している。Telnyx PyPIパッケージの侵害や「ロールプロンプトが精度を下げる」という研究結果も含め、AIツールへの信頼を担保する工学的アプローチへの関心が急速に高まっている。

もう一つの軸は**AIインフラの規模と持続可能性**だ。AWSによる100万基のNvidia GPU調達計画、AMDの208MBキャッシュチップ、Lambda Durable FunctionsやParallelCluster 3.15のP6-B300対応、そして米上院のデータセンター電力監視法案——AI計算基盤への投資が加速する一方で、その電力消費が社会インフラに与える影響が立法課題として浮上し始めた局面に入っている。
