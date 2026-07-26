---
title: "Tech Feed ダイジェスト（2026年7月26日）"
date: "2026-07-26T10:48"
category: "summary"
summary: "AIコーディングエージェントの権限設計・封じ込め策が複数ソースで話題に、DNSやOpenTelemetryなどインフラ観測系の記事も目立った一日"
tags: ["ai", "security", "aws", "frontend", "devops", "rust"]
---

## はてなブックマーク (テクノロジー)

- **[dns.gby](https://www.mew.org/~kazu/material/2026-dns.pdf)** ([88users](https://b.hatena.ne.jp/entry/s/www.mew.org/~kazu/material/2026-dns.pdf)) - MewやHTTP/2実装で知られるネットワークエンジニアによるDNSの仕組みを扱った技術資料。プロトコルの内部構造を掘り下げる硬派な内容が支持を集めている。
- **[クオンツはテクニカル分析を寄与度分解の中で見ている](https://zenn.dev/gamella/articles/7e1af53f19d94d)** ([78users](https://b.hatena.ne.jp/entry/s/zenn.dev/gamella/articles/7e1af53f19d94d)) - 生成AIによる分析をきっかけにXで再燃したテクニカル分析の有用性論争を受け、クオンツが実際にはテクニカル指標をリターンの寄与度分解の一要素として扱っていることを解説した記事。
- **[HTML-in-Canvas コンポーネントライブラリ Canvas UI](https://azukiazusa.dev/blog/html-in-canvas-component-library-canvasui/)** ([68users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/html-in-canvas-component-library-canvasui/)) - DOMではなくCanvas上にHTML風のコンポーネントを描画するライブラリ「Canvas UI」を紹介する記事。ゲームUIなど高頻度な再描画が必要な場面でDOM操作のオーバーヘッドを回避する設計思想が解説されている。
- **[UIをツリーに分解する｜Next.jsの考え方](https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_container_1st_design)** ([44users](https://b.hatena.ne.jp/entry/s/zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_container_1st_design)) - 人気書籍「Next.jsの考え方」の一節で、UIをコンテナとプレゼンテーションのツリー構造に分解して設計する「Container-1st」の考え方を解説している。Server Components時代のコンポーネント設計指針として読まれている。
- **[電子書籍リーダーのためのオープンエコシステム「Free Ink」](https://gigazine.net/news/20260723-free-ink-e-readers/)** ([20users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260723-free-ink-e-readers/)) - 特定ベンダーに縛られない電子書籍リーダー向けのオープンなソフトウェア・ファームウェア・ハードウェア群を開発するプロジェクト「Free Ink」を紹介する記事。E Ink端末のオープンソース化が進む動きの一例。

## Zenn

- **[Opus5が思考が浅いように感じる問題への対策](https://zenn.dev/u1/articles/claude5-rules-collapse-and-fix)** - Claude CodeをOpus 5に切り替えた直後から応答が浅くなる現象を調査したところ、モデルやCLAUDE.mdのルールが壊れたのではなく、Opus 5に配られる本体system promptが大きく変わったことが原因だったと突き止めた記事。
- **[ドメイン駆動設計から、ドメイン駆動開発プロセスの時代へ](https://zenn.dev/manalink_dev/articles/domain-driven-development-process)** - AI駆動開発でコーディング自体の自動化が進む中、開発のボトルネックが設計そのものよりも「開発プロセス」側に移動しつつあると指摘し、ドメイン駆動設計の思想をプロセス設計にまで拡張する視点を論じた記事。
- **[ターミナルを自作したら、1日のコミット数が500を超えて、生産性がバグった話](https://zenn.dev/singularity/articles/diy-terminal-500-commits)** - GUIツールに馴染めずターミナル中心の生活を送ってきた著者が、自作ターミナルを開発した結果コミット数が爆発的に増えた体験を綴った記事。自分の作業環境をコードで作り込むことの威力を示す事例。
- **[Rust に書き直さなくても C 言語をメモリ安全にできる Fil-C を試した](https://zenn.dev/mattn/articles/cace8c5a00b9cc)** - 既存のC言語コードをRustへ書き直さずにメモリ安全性を付与するコンパイラ基盤「Fil-C」を実際に試した記事。50万行超のZigコードをRustに移植したBunの事例などを引き合いに、言語移行以外の選択肢として注目している。
- **[フロントエンドに広がりつつある OpenTelemetry：Browser SDK の現在地](https://zenn.dev/cybozu_frontend/articles/opentelemetry-browser-frontend)** - サーバーサイドの計装で普及したOpenTelemetryが、ブラウザ向けBrowser SDKを通じてフロントエンドの監視にも広がりつつある現状を整理した記事。SentryやDatadogに代わる標準化された選択肢としての可能性を論じている。

## Qiita

- **[`&&` は「かつ」ではない](https://qiita.com/mameshivaa/items/5d2c29a949a82eea6020)** - `a && b`という式がC/Javaでは真偽値を返し、他の言語ではオペランドの値そのものを返すという違いがなぜ生まれたのかを、言語の歴史的経緯から調査した記事。何気なく使う演算子の意味論の違いを掘り下げている。
- **[go.sumって何のためにあんの？](https://qiita.com/kanzawa_kentaro/items/3a2b7cba67f4d8e0a7c7)** - Goの脆弱性チェックで依存バージョンの更新を求められたことをきっかけに、go.modとgo.sumの役割分担、MVS（最小バージョン選択）によるバージョン決定の仕組みを整理し直した記事。
- **[生成AIを活用した自動化に必要な権限設計の考え方](https://qiita.com/inamuu/items/8439fcee712184740608)** - AIエージェントによる業務自動化を安全に進めるために必要な権限設計の考え方を、SRE視点から整理した記事。エージェントに何をどこまで任せるかという権限境界の設計が、自動化の実務における重要な論点になりつつあることを示している。
- **[【2026年最新】Zellijチートシート](https://qiita.com/ta-061/items/cd8b63e9b4d9f46f758b)** - ターミナルでAIエージェント・エディタ・開発サーバー・ログ監視を並べて操作したい人向けに、tmuxより設定が容易なターミナルマルチプレクサ「Zellij」の操作をまとめたチートシート。
- **[AI-DLC V2を導入し、その構成要素を組織に最適化させる](https://qiita.com/Syoitu/items/a784d74541fac33f6814)** - 2026年7月にGAされたAI駆動開発ライフサイクル「AI-DLC V2」の仕様を読み解き、その構成要素を自組織の開発プロセスに合わせて最適化した実践記録。

## AWS 新着

- **[Amazon CloudWatch announces coding agent insights](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-coding-agent-insights/)** (2026-07-20) - CloudWatchが、AIコーディングツールが組織内でどれだけ・どのように価値を生み出しているかをエンジニアリング責任者が可視化できる新機能を追加した。コーディングエージェント活用の効果測定がマネージドサービスの機能として組み込まれ始めている。
- **[Introducing Amazon GuardDuty AI Protection for AWS AI workloads](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-ai-protection-aws/)** (2026-07-14) - GuardDutyの脅威検知範囲がBedrockやSageMakerなどAIサービスにも拡張された。AIワークロード特有の不審な挙動を検知できるようになり、AI基盤自体をセキュリティ監視の対象に含める動きが進んでいる。
- **[AWS Lambda console provides a one-click setup prompt for coding agents](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-prompt-coding-agents/)** (2026-07-14) - Lambdaコンソールから、コーディングエージェントにServerless skillsやMCPサーバーをワンクリックで設定できるプロンプトが追加された。AIエージェントをAWSの開発フローに組み込む際の初期セットアップの手間を減らす。
- **[AWS Lambda durable execution SDK for .NET is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/07/lambdadf-dotnet/)** (2026-07-23) - 長時間実行のステートフルなワークフローを構築できるLambda durable executionのSDKが.NET向けにGAされた。C#開発者もPythonやNode.js同様に耐障害性の高い長時間実行処理を書けるようになる。
- **[Amazon ECS Service Connect now supports Zone-Aware routing](https://aws.amazon.com/about-aws/whats-new/2026/07/ecs-service-connect-zone-aware/)** (2026-07-23) - ECS Service Connectがゾーン認識ルーティングに対応し、同一アベイラビリティーゾーン内のサービス間通信を優先できるようになった。マイクロサービス間通信のレイテンシとクロスAZ転送コストの削減が見込める。

## Lobsters

- **[Don't take the black pill](https://www.youtube.com/watch?v=zLZwpH5lCD4)** (159pt) - 技術業界に広がる悲観論（ブラックピル）に対し、それに飲み込まれずどう向き合うかを論じた動画。Lobstersコミュニティで今回最も支持を集めた話題で、AI時代のキャリアや業界への不安をどう乗り越えるかという関心の高さがうかがえる。
- **[Your harddrive is probably full](https://www.marginalia.nu/log/a_139_hdd/)** (47pt) - 検索エンジンMarginaliaの開発者が、ストレージ容量に余裕があるはずなのになぜかディスクが埋まりがちな問題について、データの肥大化と整理の習慣の両面から考察した記事。
- **[Memory Safety Absolutists](https://itsallaboutthebit.com/memory-safety-absolutists/)** (37pt) - メモリ安全性を絶対視し「メモリ安全でない言語は使うべきでない」とする立場に対し、C/Rust/Zigそれぞれの設計トレードオフを踏まえて反論する記事。安全性議論を単純な二項対立で語ることの危うさを指摘している。
- **[Maybe we should revisit microkernels](https://notes.hella.cheap/maybe-we-should-revisit-microkernels.html)** (21pt) - モノリシックカーネルが主流となって久しい中、マイクロカーネル方式を今こそ再評価すべきではないかと論じるOS設計論の記事。
- **[Himalaya v2.0.0: CLI to manage emails](https://fosstodon.org/@pimalaya/116983467890532240)** (10pt) - Rust製のメール管理CLIツール「Himalaya」がメジャーバージョン2.0.0をリリースした告知。CLI上でメールの読み書き・検索を完結させたいターミナル志向の開発者向けツールの節目のアップデート。

## dev.to

- **[I got tired of trusting my backups, so I built something to stop lying to myself about it](https://dev.to/bilalbelahrachespec/i-got-tired-of-trusting-my-backups-so-i-built-something-to-stop-lying-to-myself-about-it-5g0p)** - バックアップツールが「成功」と表示しても実際に復元できるとは限らないという問題意識から、バックアップの実効性を継続的に検証する仕組みを自作した記事。「グリーンチェックマーク」を鵜呑みにしない運用の重要性を説いている。
- **[AI Agent Containment Strategies: Implementing Runtime Sandboxing and Behavioral Monitoring for Autonomous Systems](https://dev.to/sandhipveera/ai-agent-containment-strategies-implementing-runtime-sandboxing-and-behavioral-monitoring-for-30j)** - 自律的に動作するAIエージェントを企業インフラに展開する際の封じ込め戦略として、ランタイムサンドボックス化と挙動監視を組み合わせる設計を解説した記事。エージェントの権限をどう制限するかという課題が実装レベルで論じられている。
- **[No backend, no database, no network calls. I still found 3 security holes.](https://dev.to/gyugyu86/no-backend-no-database-no-network-calls-i-still-found-3-security-holes-4mi5)** - サーバーもDBもネットワーク通信も持たない、1枚のindex.htmlだけで完結するツールであっても、実装次第で3つのセキュリティホールが生まれ得ることを実証した記事。クライアントサイド完結型アプリでも油断できないという教訓。
- **[What 4-20mA actually means (and why your zero is at 4)](https://dev.to/mariusgjerd/what-4-20ma-actually-means-and-why-your-zero-is-at-4-7fh)** - センサーの値がデータベースに届く前は物理的な電流（ミリアンペア）だったという事実から出発し、産業計測で標準的に使われる4-20mA電流ループの仕組みと、ゼロ点をわざと4mAに設定する理由を解説した記事。
- **[We built the benchmark we'd want any AI estimation vendor to pass. Then we failed it.](https://dev.to/tonytonycoder11/we-built-the-benchmark-wed-want-any-ai-estimation-vendor-to-pass-then-we-failed-it-43a5)** - 大規模ITプロジェクトの平均予算超過率45%というMcKinseyの調査を出発点に、AIによる工数見積もりベンダーを評価するベンチマークを自作したところ、自社のツールもそのベンチマークに落第したという率直な記事。

## TechCrunch

- **[Monday.com is the latest tech company to blame AI for layoffs — here are 20 others](https://techcrunch.com/2026/07/25/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/)** - プロジェクト管理ツールMonday.comがAIを理由に掲げたレイオフを発表し、2026年にAIを理由として人員削減を行った主要テック企業20社超のリストに加わったと報じる記事。AIによる業務効率化が雇用縮小の公式な説明として定着しつつある。
- **[Anduril reportedly in talks to raise funding at $100B valuation, more than 3x last year's mark](https://techcrunch.com/2026/07/24/anduril-reportedly-in-talks-to-raise-funding-at-100b-valuation-more-than-3x-last-years-mark/)** - 防衛テック企業Andurilが、前年評価額の3倍超となる1000億ドル規模の資金調達交渉に入ったと報じられた。防衛分野へのAI・自律システム投資の過熱ぶりを示す事例。
- **[Elon Musk's Boring Company reportedly raising funding at a $20 billion valuation](https://techcrunch.com/2026/07/25/elon-musks-boring-company-reportedly-raising-funding-at-a-20-billion-valuation/)** - イーロン・マスク氏のトンネル掘削スタートアップ、Boring Companyが200億ドル規模の新たな資金調達交渉に入っていると報じられた。
- **[Vietnam is looking to restrict social media for kids; here are the growing number of other countries doing the same](https://techcrunch.com/2026/07/24/social-media-ban-children-countries-list/)** - ベトナムが子ども向けソーシャルメディア利用の制限を検討していると報じ、オーストラリアを皮切りに広がる各国の未成年者向けSNS規制の動向をまとめた記事。
- **[Build in public, fail in public: what it's like to be a founder under 20 right now](https://techcrunch.com/2026/07/24/build-in-public-fail-in-public-what-its-like-to-be-a-founder-under-20-right-now/)** - AIツールの普及によって開発の敷居が下がり、20歳未満の若い起業家が公開の場で成功も失敗も晒しながら会社を立ち上げられるようになった現状を取材した記事。

## Ars Technica

- **[With help from data, art museums are reframing the visitor experience](https://arstechnica.com/culture/2026/07/with-help-from-data-art-museums-are-reframing-the-visitor-experience/)** - 美術館がデータドリブンなキュレーションを取り入れ、来館者の動線や関心をデータで捉えながら展示体験を再設計する動きを紹介する記事。文化施設にもデータ活用の波が及んでいる。
- **[Paramount/WBD merger delayed for months as states' lawsuit moves toward trial](https://arstechnica.com/tech-policy/2026/07/after-court-loss-paramount-agrees-to-delay-warner-bros-merger-until-trial/)** - Paramount とWarner Bros. Discoveryの合併が、複数州による訴訟が裁判に進む中で数か月延期されることになったと報じる記事。メディア業界の巨大合併に対する規制当局・司法の監視が強まっている。

## 注目トピック

今回複数のソースで共通して浮上したのは、AIエージェントに与える権限をどう設計し、どう封じ込めるかという論点だ。dev.toではランタイムサンドボックス化と挙動監視を組み合わせたAIエージェントの封じ込め戦略が論じられ、Qiitaでは生成AIによる業務自動化に必要な権限設計の考え方がSRE視点から整理された。AWSも呼応するように、GuardDutyのAI Protectionによる脅威検知の拡張、LambdaコンソールでのAIエージェント向けワンクリックセットアップ、CloudWatchによるコーディングエージェントの活用効果の可視化と、AIエージェントを「安全に・計測可能に」使うためのマネージドサービス機能を立て続けに追加している。AI活用が実験段階から本番運用へ移るにつれ、権限境界の設計と観測可能性の確保が共通の実務課題として定着しつつある様子がうかがえる。

もう一つの軸は、AIによる雇用への影響が具体的な数字を伴って可視化され始めたことだ。TechCrunchはMonday.comを含む20社超がAIを理由に掲げたレイオフを実施したとするランニングリストを報じ、AIによる効率化が人員削減の公式な説明として定着しつつある実態を伝えている。一方でZennでは、コーディング自体の自動化が進んだことで開発のボトルネックが設計プロセス側に移動しつつあるという指摘があり、Lobstersで今回最も支持を集めたのも技術業界の悲観論（ブラックピル）にどう向き合うかを論じた動画だった。AIによる生産性向上の恩恵と、それが雇用や開発者のキャリアに及ぼす不安が、同じ日のフィードの中で並行して語られている点が印象的だ。
