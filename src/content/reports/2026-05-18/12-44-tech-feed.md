---
title: "Tech Feed ダイジェスト（2026年5月18日）"
date: "2026-05-18T12:44"
category: "summary"
summary: "MCP Linux Foundation寄贈・BitLockerバックドア疑惑・GitHub Copilot従量課金化・AI眼鏡光学・米電力価格76%高騰・Starship待望論など"
tags: ["ai", "security", "mcp", "aws", "frontend", "github-copilot", "space", "automotive", "devtools", "energy"]
---

## はてなブックマーク (テクノロジー)

- **[シニア開発者はなぜ専門知識をうまく伝えられないのか？](https://gigazine.net/news/20260518-senior-developers-communicate-expertise/)** ([88users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260518-senior-developers-communicate-expertise/)) - 熟練エンジニアが自身の知識を初学者に伝えにくい構造的理由を分析した記事。「知識の呪い」—一度習得すると習得前の視点を忘れる認知バイアス—と、暗黙知化した手順を言語化するコストが主な障壁として挙げられており、ペアプロやコードレビュー設計にも示唆を与える。

- **[飲み会の帰り道、自宅サーバが落ちていたのでスマホからClaudeに任せ1時間で復旧させた話(Proxmox + Tailscale)](https://zenn.dev/marvelousu/articles/claude-code-remote-incident)** ([72users](https://b.hatena.ne.jp/entry/s/zenn.dev/marvelousu/articles/claude-code-remote-incident)) - 外出先のスマホから Tailscale SSH 越しに Claude Code セッションを立てて Proxmox ホストのクラッシュを診断・復旧させた実録。DHCP プール枯渇との複合障害を人手ではなく AI エージェントが主体的に切り分けた事例として、コーディングエージェントの「緊急時インシデント対応」への実用可能性を示す。

- **[新規Googleアカウントのストレージ容量、15GB→5GBへと引き下げへ。理由はセキュリティ強化](https://internet.watch.impress.co.jp/docs/yajiuma/2109372.html)** ([51users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/yajiuma/2109372.html)) - 新規アカウントの無料ストレージが 15GB から 5GB に削減されるという報告。Google はセキュリティ強化を理由に挙げているが、クラウドスト レージのマネタイズ強化とも解釈でき、無料枠前提の個人・小規模プロジェクトのバックアップ設計を見直す必要が生じる。

- **[「AI 事業に難易度ってあるの？」AI 事業の難易度を 10 段階で分類してみた](https://blog.asial.co.jp/6786/)** ([161users](https://b.hatena.ne.jp/entry/s/blog.asial.co.jp/6786/)) - API 呼び出しだけのラッパーから独自 LLM 開発まで AI 事業を 10 段階の難易度に分類し、各レベルに必要な技術スタック・人材・投資規模を整理した記事。「AI 事業は難しいのか簡単なのか」という問いに対する解像度を高め、新規参入戦略を検討する際の地図として機能する。

- **[イランの核兵器実験妨害のため「実験が失敗している」と思い込ませるマルウェア「fast16」](https://gigazine.net/news/20260518-fast16-malware-sabotage-nuclear-test/)** ([6users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260518-fast16-malware-sabotage-nuclear-test/)) - 核実験の計測機器に仕込まれ「実験は正常に成功した」という偽データを返すことで実際は失敗した実験を成功と信じ込ませるサイバー兵器の報告。Stuxnet 以来の産業制御系・計測系への精緻な攻撃として、OT セキュリティの文脈で注目される。

## Zenn

- **[MCP が Linux Foundation 入り — 個人開発の OS レイヤがオープン化した日](https://zenn.dev/creolab_dev/articles/2026-05-16-mcp-linux-foundation-indie-saas)** - Anthropic 発の Model Context Protocol (MCP) が Linux Foundation に寄贈されたことの意味を個人開発者視点で論じた記事。月 9,700 万 SDK ダウンロードに達した時点での「中立化」により、ベンダー依存か自前抽象化かという二択が崩れ、「MCP サーバとして書く」が第三の公式選択肢になったことを解説している。

- **[NestJSが好きだけどきつかったから2週間でWebフレームワーク作った（ZeltJS）](https://zenn.dev/9wick/articles/363b51112106d0)** - NestJS の DI コンテナ・デコレータ依存・型推論の限界に不満を持ち、2026 年の TypeScript エコシステム（Bun・Vite・tRPC インスパイア）を前提にした NestJS 系フレームワーク「ZeltJS」を AI 活用で 2 週間で自作した顛末記。「自分でフレームワークを作れる時代」というコーディングエージェント時代のモメンタムを象徴する記事。

- **[コーディングエージェント時代にエンジニアは必要なのか本気で考えてみる](https://zenn.dev/hiromoo/articles/5f127b5459d490)** - Codex・Claude Code・GitHub Copilot で SNS アプリを実際に作った上で「エンジニアの役割はどう変わるか」を考察した実践ベースの論考。「コードを書く能力」より「何を作るか決める設計力と批判的評価力」が残る役割になるという結論を、具体的な体験とともに整理している。

- **[Snowflake AI_COMPLETE 関数で動画と音声を直接分析](https://zenn.dev/snowflakejp/articles/794ce748589765)** - Snowflake Cortex AI の `AI_COMPLETE` 関数が動画・音声をそのままマルチモーダル入力として受け付ける機能拡張の紹介。非構造化データをクラウドストレージ→ETL→外部 API という迂回なしに SQL の中から直接 LLM に渡して分析できるアーキテクチャは、データパイプラインの簡素化に直結する。

- **[技術的負債という言葉を本来の意味以外で使わないようにしよう](https://zenn.dev/masakura/articles/f0c65cfc06ce1e)** - Ward Cunningham が定義した「技術的負債＝意図的なトレードオフの結果として将来返済が必要な設計上の借り」が、現場では「汚いコード全般」「気に入らない実装」に転用されている問題を指摘。言葉の定義を揃えることで技術的議論の精度を上げる重要性を説く、チームコミュニケーションへの示唆が多い記事。

## Qiita

- **[【2026年6月〜】GitHub Copilot が重量課金制に変わる。AI クレジット時代のコスト節約術まとめ](https://qiita.com/shahin0809/items/9c7ec8c7661272c63001)** - 2026 年 6 月から GitHub Copilot の上位プランがエージェント機能の利用量に応じた従量課金（AI クレジット）に移行する変更点を整理した記事。コスト増を抑えるためのキャッシュ活用・モデル選択・タスク設計の最適化パターンを具体的にまとめており、Copilot を業務利用するチームの予算計画に直結する内容。

- **[ダークモードは本当に読みやすいのか？コントラスト極性の研究から考える表示モードの設計](https://qiita.com/tanay/items/1609d7989268aa3e35bf)** - 「暗背景に明テキスト（ネガポラリティ）vs 明背景に暗テキスト（ポジポラリティ）」を比較した視認性研究を整理し、ダークモードが「読みやすい」かどうかはユーザーの照明環境・近視の有無・コンテンツ種別に依存する点を解説。UI 設計者がダークモード対応を議論する際の根拠となる学術知見をわかりやすくまとめた記事。

- **[Claude Code を社内導入する時の最低限ガードレール5項目 — 機密情報を漏らさない設定パターン](https://qiita.com/ennagara128/items/aeaee3e64e75076503fe)** - 社内展開での Claude Code 利用において機密ソースコード・認証情報・内部ドメイン情報を外部に送出しないための設定チェックリスト。`.claudeignore` 設定・ネットワーク制限・権限スコープの最小化など 5 項目を実際の設定例付きで解説しており、エンタープライズ導入の初手として使えるガイド。

- **[AWS上にセキュアかつ安価かつ使い捨て可能なリモート開発環境を構築した話 ― SSM × Spot Instance × CDK](https://qiita.com/kyonosuke/items/eee9eb3840d3f740f325)** - AWS Systems Manager Session Manager で踏み台なし・パブリック IP なしで EC2 に接続し、スポットインスタンスとして使い捨てる開発環境の CDK テンプレートを紹介。コスト削減・ゼロトラスト的なアクセス制御・環境の冪等性を同時に実現する構成として、チームの開発インフラ設計の参考になる。

- **[Core Web Vitals完全攻略：LCP・INP・CLSの実践的改善](https://qiita.com/tuanphan/items/8f1b05c18aaa67531000)** - Google の検索ランキング指標に直結する LCP（最大コンテンツ描画）・INP（インタラクション応答速度）・CLS（レイアウトシフト）それぞれの測定方法と改善手法をコード例付きで解説。2024 年に FID から INP への指標変更があったことを踏まえた最新版のパフォーマンス改善ガイドとして実用的。

## AWS 新着

- **[AWS Security Agent now supports full repository code reviews](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-security-agent-full-repository-code-review/)** (2026-05-12) - AWS Security Agent がリポジトリ全体を対象にしたコンテキスト考慮型のセキュリティコードレビューに対応。単一ファイルのスキャンではなく、クロスファイルの依存関係・データフローを考慮した脆弱性検出が可能になり、複雑なアプリケーションの深いセキュリティ分析が自動化できる。

- **[Amazon Redshift launches RG instances powered by AWS Graviton](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-rg-instances-powered-by-graviton)** (2026-05-12) - Graviton プロセッサ搭載の新世代 Redshift プロビジョニングノード「RG インスタンス」が GA。データウェアハウス・データレイク ワークロードで最大 2.4 倍のパフォーマンス向上を実現しており、コストパフォーマンスの大幅な改善が期待できる。

- **[Reference stack outputs across accounts and Regions with AWS CloudFormation and CDK](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-cloudformation-cdk-stack/)** (2026-05-14) - `Fn::GetStackOutput` という新しい組み込み関数が追加され、別アカウント・別リージョンのスタック出力値を CloudFormation テンプレート内から直接参照できるようになった。マルチアカウント構成での VPC ID や ALB ARN の受け渡しが大幅に簡略化される。

- **[Karpenter now supports Amazon Application Recovery Controller zonal shift](https://aws.amazon.com/about-aws/whats-new/2026/05/karpenter-arc-zonal-shift/)** (2026-05-12) - EKS の Karpenter ノードプロビジョナーが ARC（Application Recovery Controller）のゾーナルシフト・ゾーナルオートシフトと連携し、AZ 障害時に自動でワークロードを健全な AZ へ移動できるようになった。Kubernetes クラスターの可用性向上を宣言的に設定できる実用的な機能追加。

- **[Amazon RDS for PostgreSQL supports minor versions 18.4, 17.10, 16.14, 15.18, and 14.23](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-postgresql/)** (2026-05-14) - RDS PostgreSQL の主要マイナーバージョン（14〜18 系）が一斉にアップデート。各バージョンに既知のセキュリティ脆弱性修正が含まれており、AWS は速やかなアップグレードを推奨している。自動マイナーバージョンアップグレードを有効にしていないクラスターは手動対応が必要。

## Lobsters

- **[New design for the FreeBSD website](https://www.freebsd.org/)** (72pt) - FreeBSD 公式サイトがモダンなデザインにリニューアルされたことが Lobsters で大きな話題に。長らく古いデザインのままだったことで「時代遅れ」というイメージがつきまとっていただけに、OSS プロジェクトのブランディング・コミュニティへのシグナルとしてポジティブに評価されている。

- **[Don't answer the first question](https://lalitm.com/post/dont-answer-the-first-question/)** (47pt) - エンジニアが最初に受けた質問にそのまま答えるのではなく「なぜその問いが生まれたのか」を先に探るべきだという開発プラクティスの記事。表面の質問に答えても問題の根本は解決しないケースが多く、ヒアリングで真の課題を引き出すことが長期的な信頼と生産性につながるという実践的な指摘。

- **[Researcher says Microsoft secretly built a backdoor into BitLocker](https://www.techspot.com/news/112410-security-researcher-microsoft-secretly-built-backdoor-bitlocker-releases.html)** (45pt) - セキュリティ研究者が BitLocker（Windows のフルディスク暗号化）に意図的なバックドアが組み込まれていると主張し、関連するコードを公開した。政府機関のアクセス要求への対応として実装された可能性が指摘されており、エンタープライズのディスク暗号化戦略に影響を与えかねない重大な疑惑として議論が続いている。

- **[Fits on a Floppy - A Manifesto for Small Software](https://fitsonafloppy.com)** (27pt) - 「フロッピーディスク（1.44MB）に収まるソフトウェアを作れ」という宣言を掲げる小さなソフトウェア哲学の紹介サイト。依存関係ゼロ・オフライン動作・長期保存可能という価値を追求するこの運動は、数百 MB の node_modules が当たり前になった現代フロントエンド開発への根本的なアンチテーゼとして共感を集めた。

- **[Reviewing so called Pull Requests at $dayjob](https://rkta.de/dayjob-pr-review.html)** (24pt) - 現場での PR レビューをどう行うべきか、形式的なコードレビューと実質的なフィードバックの差を論じた記事。「LGTM スタンプ」文化の問題と、設計意図・テスト戦略・影響範囲の三点を軸にした実質的なレビューのプラクティスを整理しており、チームのレビュー文化を改善したいエンジニアに刺さる内容。

## dev.to

- **[Prisma Server Actions in Next.js 16: the patterns that work and the N+1 that sneaks up on you](https://dev.to/jtorchia/prisma-server-actions-in-nextjs-16-the-patterns-that-work-and-the-n1-that-sneaks-up-on-you-19h2)** - Next.js 16 の Server Actions と Prisma を組み合わせる際に安定して機能するパターンと、リスト取得で頻発する N+1 クエリ問題の検出・回避策を解説。App Router 安定化後の実運用に向けた具体的なトレードオフを丁寧にまとめている。

- **[I Built a Single-File AI Agent in Go — Zero Dependencies, Double-Click to Run](https://dev.to/jason_huang_cat/i-built-a-single-file-ai-agent-in-go-zero-dependencies-double-click-to-run-4g9b)** - 依存関係なし・単一バイナリで動作する AI エージェント「OpenAgent」を Go で実装した紹介記事。ツール呼び出しループ・ストリーミングレスポンス・ローカル LLM 対応をゼロ依存で実現するアプローチは、軽量エージェントの内部構造を理解するための良い教材になっている。

- **[You're Already Using Git Worktrees. You Should Understand Them.](https://dev.to/maskaravivek/youre-already-using-git-worktrees-you-should-understand-them-4nh7)** - `git clone` で作ったディレクトリが実はワーキングツリーである事実から始め、Git ワーキングツリーの仕組みを一から解説した記事。複数ブランチを並行作業するための `git worktree add` の使い方を実例とともに示しており、Claude Code を含む AI コーディングツールも内部でワーキングツリーを活用するため今後ますます重要になる概念。

- **[I Built a ML Churn Predictor in Minutes — Here's How Kiro Made It Possible](https://dev.to/adelinemakokha/i-built-a-ml-churn-predictor-in-minutes-heres-how-kiro-made-it-possible-2bdl)** - AWS の新しい AI ファースト IDE「Kiro」を使い、通信業の顧客離脱（チャーン）予測モデルをほぼノーコードで構築した体験記。Kiro のスペック（仕様）駆動開発・エージェント的なコード生成フローが、ML ワークフロー全体の高速プロトタイピングをどう変えるかを実感させる内容。

- **[How Apache Kafka Powers Real-Time Data Pipelines](https://dev.to/cliffe_okoth/how-apache-kafka-powers-real-time-data-pipelines-3ef9)** - バッチ処理パイプラインの限界と、Kafka によるリアルタイムストリームパイプラインの基本アーキテクチャ（Producer・Topic・Consumer・Consumer Group）を図解で解説。Flink・Spark Streaming との組み合わせパターンも含めた入門記事として、データエンジニアリング学習者に適した内容。

## TechCrunch

- **[South Korea's LetinAR is building optics behind AI glasses](https://techcrunch.com/2026/05/18/south-koreas-letinar-is-building-the-optics-behind-ai-glasses/)** (2026-05-18) - サムネイルほどのサイズのレンズを開発する韓国スタートアップ LetinAR が、AI 眼鏡時代の光学コンポーネントサプライヤーとして注目されている。Meta Ray-Ban・Snap Spectacles に続く AI 眼鏡競争で、ディスプレイ光学系という「見えないインフラ」レイヤーでの技術優位が重要になる構図を示す。

- **[Tesla reveals two Robotaxi crashes involving teleoperators](https://techcrunch.com/2026/05/15/tesla-reveals-two-robotaxi-crashes-involving-teleoperators/)** (2026-05-15) - テスラのロボタクシーで遠隔オペレーターが関与した衝突事故が 2 件あったことが開示された。完全自律ではなく遠隔監視・操作を前提にしたロボタクシー展開の現状と、その安全性評価の難しさを浮き彫りにしており、自動運転規制とスケールアップ戦略の議論に影響を与える情報。

- **[Power prices are up 76% on America's biggest grid, and a watchdog is pointing fingers](https://techcrunch.com/2026/05/15/power-prices-are-up-76-on-americas-biggest-grid-and-a-watchdog-is-pointing-fingers/)** (2026-05-15) - 米国最大の電力グリッド（PJM）における電力卸売価格が 76% 上昇し、監視機関が AI データセンターによる急増した電力需要を主因として指摘した。現在の米国電力インフラは AI 時代の需要増に対応できる設計になっておらず、クラウドリージョンの立地戦略とエネルギーコストが IT 投資の大きな変数になりつつある。

- **[TechCrunch Mobility: The AI skills arms race is coming for automotive](https://techcrunch.com/2026/05/17/techcrunch-mobility-the-ai-skills-arms-race-is-coming-for-automotive/)** (2026-05-17) - 自動車業界で AI・ソフトウェア人材の獲得競争が激化しており、従来のハードウェア中心の自動車メーカーが Google・Apple・Tesla 出身のソフトウェアエンジニアを高額で引き抜く動きが加速している。車のソフトウェア定義化（SDV）は人材競争という形でも IT 業界に影響を与えている。

## Ars Technica

- **[OpenAI feels "burned" by Apple's crappy ChatGPT integration, insiders say](https://arstechnica.com/tech-policy/2026/05/openai-feels-burned-by-apples-crappy-chatgpt-integration-insiders-say/)** (2026-05-15) - Apple Intelligence の Siri と ChatGPT の連携が品質面・露出面で期待を下回り、OpenAI 社内に不満が蓄積しているという内部情報。AI アシスタントの統合パートナーシップにおける主導権争いと品質管理の難しさを示す事例として、Microsoft/Google などの競合パートナーシップ設計にも示唆がある。

- **[The US space enterprise is desperately waiting for Starship—will it finally deliver?](https://arstechnica.com/space/2026/05/the-us-space-enterprise-is-desperately-waiting-for-starship-will-it-finally-deliver/)** (2026-05-18) - NASA の月面ミッション・国防総省の大型ペイロード打ち上げ・民間衛星コンステレーションなど、米国宇宙産業の複数の重要プログラムが SpaceX Starship の運用開始に依存しており、開発遅延が業界全体のスケジュールを圧迫していることを報じた分析記事。

- **[Casimir force co-opted to generate free energy, midichlorians not included](https://arstechnica.com/science/2026/05/casimir-force-co-opted-to-generate-free-energy-midichlorians-not-included/)** (2026-05-15) - 真空中でナノスケールの物体間に働くカシミール力を利用したエネルギー生成の研究が発表された。「フリーエネルギー」という表現はあくまで比喩的で熱力学第二法則を破るものではないが、量子真空エネルギーを工学的に活用する概念の実証として基礎研究の観点で注目される。

- **[Rocket Report: Cowboy up for data centers in LEO; Russia's new ICBM actually works](https://arstechnica.com/space/2026/05/rocket-report-russia-claims-success-with-new-icbm-spaceplane-deja-vu-in-europe/)** (2026-05-15) - 低軌道（LEO）にデータセンターを構築してレーザーで地上に電力・データを送るというコンセプトへの投資が活発化していることと、ロシアの新型 ICBM が初めて成功裏にテストされたというニュースを併録したロケットレポート。宇宙インフラのコンピューティング活用という新興分野の動向をまとめている。

## 注目トピック

今週最大のインフラ・標準化ニュースは **MCP の Linux Foundation 入り**だ。Anthropic が発祥の Model Context Protocol が中立な非営利財団に寄贈されたことで、AI エージェントとツール群を繋ぐ「AI の USB 規格」が事実上の業界標準として確立された。これにより個人開発者・企業どちらも「MCP サーバとして書けばどこでも使える」という安心感のある基盤が生まれ、今後の AI ツール開発の重心が変わる可能性がある。

**AI インフラのコスト問題**が複数ソースで表面化したことも今週の特徴だ。TechCrunch が報じた「米国最大電力グリッドの価格 76% 高騰」はデータセンターの電力需要急増が直接原因とされており、Ars Technica では LEO データセンター構想という次のインフラ候補まで登場した。開発者視点では GitHub Copilot の 6 月従量課金化（Qiita）がより身近な「AI コスト」として意識され、Claude Code セキュリティ設定・AWS SSM × スポットインスタンスのコスト最適化といった「AI ツールを賢く・安全に使う」実践知への需要が高まっている。セキュリティ面では BitLocker バックドア疑惑（Lobsters 45pt）が衝撃的で、Windows エンタープライズのディスク暗号化戦略の再検討を促す動きが出ることが予想される。
