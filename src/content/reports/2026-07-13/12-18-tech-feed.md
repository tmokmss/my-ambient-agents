---
title: "Tech Feed ダイジェスト（2026年7月13日）"
date: "2026-07-13T12:18"
category: "summary"
summary: "Claude Codeまとめ記事がQiita/はてブ両方で話題・AI臭さを抜く執筆スキル・Cursorが不要ブランチ整理でDドライブ消失・CISAのインシデント対応後付けなど"
tags: ["ai", "agent", "security", "aws", "devops", "rust"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Code、とりあえずこれ読んどけばOKなまとめ（2026年版）](https://qiita.com/fuyunoki/items/5818688d20225aa8088a)** ([892users](https://b.hatena.ne.jp/entry/s/qiita.com/fuyunoki/items/5818688d20225aa8088a)) - 新卒エンジニアが「会社でClaude Codeが使えるようになったが何から読めばいいか分からない」という悩みに応えてまとめた入門記事。体系だった公式ドキュメントが多い中、実務で最初につまずくポイントを絞った点が広く支持されている。
- **[Conwayの法則を"ちゃんと"使うために — 原典でConwayは何を言っていたのか](https://speakerdeck.com/bonotake/scrumsendai2026-conway)** ([98users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/bonotake/scrumsendai2026-conway)) - 「組織構造がシステム設計を規定する」という要約だけが独り歩きしがちなConwayの法則について、原典の論文に立ち返り本来の主張を整理した発表資料。マイクロサービス文脈で安易に引用される概念を再検証している。
- **[増田に常駐しているレベルの人間の質や集合知よりもAIの方がレベルが高くなってしまっていて増田の存在価値が減っている気がする](https://anond.hatelabo.jp/20260712100633)** ([91users](https://b.hatena.ne.jp/entry/s/anond.hatelabo.jp/20260712100633)) - 匿名掲示板「はてな匿名ダイアリー」の集合知が、生成AIの回答品質に対して相対的に見劣りするようになってきたという実感を綴った投稿。CGM（消費者生成コンテンツ）の存在意義がAIの台頭でどう変質するかを考えさせる。
- **[食べログが「Deal Provider」を構築した理由──「AIがなければ踏み出せなかった」DDDという20年前からの設計思想への挑戦](https://tech-blog.tabelog.com/entry/deal-provider-responsibility-separation-design)** ([27users](https://b.hatena.ne.jp/entry/s/tech-blog.tabelog.com/entry/deal-provider-responsibility-separation-design)) - 食べログが特典・クーポンなどの「お得情報」を扱う責務を「Deal Provider」として分離したドメイン駆動設計の実践記事。AIコーディングエージェントの支援があったことで、従来なら着手をためらっていた大規模な責務分離のリファクタリングに踏み切れたと述べている。
- **[サンプリングは統計学である: 数理的根拠に基づき、オブザーバビリティのコストと精度を両立する](https://speakerdeck.com/ymotongpoo/sampling-is-statistics)** ([27users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/ymotongpoo/sampling-is-statistics)) - 分散トレーシングなどオブザーバビリティにおけるサンプリングを、勘や経験則ではなく統計学的な根拠に基づいて設計する考え方を解説した発表資料。コストを抑えつつ精度を落とさないサンプリング戦略の理論的裏付けを示している。

## Zenn

- **[Cursorに「不要なブランチを整理して」と頼んだら、Dドライブが消えた話](https://zenn.dev/iwaken71/articles/cursor-agent-d-drive-deleted)** - AIコーディングエージェントCursorにGitブランチの整理を依頼したところ、Dドライブ配下のデータがゴミ箱にも残らず全て消失したという事故報告。チャット・ターミナル履歴も失われ実行コマンドを特定できなかったといい、エージェントに強い権限を与える危うさを改めて示す事例。
- **[開発現場のAIセキュリティを見直す](https://zenn.dev/nenene01/articles/ai-security-2026)** - Issue駆動開発を主軸にAIエージェントへ機能開発を委ねる体制が定着した開発現場で、見落とされがちなAIセキュリティ上の懸念点を洗い出した記事。エージェントの実行範囲や情報アクセスをどう制御すべきかを実務目線で整理している。
- **[Goの並列処理を理解する ── Go Memory Modelとsync.Mutex/Onceの内部実装（第4回）](https://zenn.dev/wakame_atsushi/articles/0c512954a1698b)** - Go公式仕様の「The Go Memory Model」を踏まえ、sync.Mutexとsync.Onceの内部実装をソースコードレベルで読み解いた連載記事。あるgoroutineの書き込みを別のgoroutineがいつ観測できるかという並行処理の根幹を扱っている。
- **[Agent Skills自動最適化の研究、中身はほぼ深層学習の訓練ループだった](https://zenn.dev/layerx/articles/9f25ec86a31730)** - コーディングエージェントに持たせる「Agent Skills」を、実行経験から自動的に学習・改善させる2026年上半期の研究動向を紹介した記事。仕組みを分解すると、実質的に深層学習の訓練ループと同じ構造になっている点を指摘している。
- **[純関数・参照透過性・冪等性の違いが分からなくなったのでまとめる](https://zenn.dev/kkeeth/articles/pure-function-referential-transparency-idempotency)** - 関数型プログラミングを理解する上で混同しやすい「純関数」「参照透過性」「冪等性」という3つの概念の違いを、定義から丁寧に整理した記事。似て非なる用語を体系的に切り分けたい人向けの基礎解説。

## Qiita

- **[AWS MCP Serverが普通に使えるようになったよ！](https://qiita.com/moritalous/items/6102ef63dc60c7e6ee3d)** - Agent Toolkit for AWSに含まれるAWS MCP Serverの接続設定が簡略化され、素直に使えるようになったことを報告した記事。これまで煩雑だった認証・接続手順の改善を実体験ベースで紹介している。
- **[もうClaudeのモデル選びで迷わない — Anthropicが教える独自Eval（評価テスト）と「成功1件あたりのコスト」の測り方](https://qiita.com/nogataka/items/6cd8c6ea583221e45def)** - 新しいLLMがリリースされるたびに乗り換えを判断すべきか悩む問題に対し、Anthropicが提唱する独自Evalの作り方と「成功1件あたりのコスト」という評価指標を紹介した記事。ベンチマークやSNSの評判ではなく、自社プロダクトに即した定量評価の重要性を説いている。
- **[AI⇔人間 がdiff上にコメントを書き合える「hunk」がすごい](https://qiita.com/kuma_3838/items/14df505c7023f665c585)** - AIが生成したコードへの質問や修正依頼を、ファイルパスやコードをコピーせずdiff上で直接やり取りできるツール「hunk」を紹介した記事。AIとのコードレビューのやり取りにかかる地味な手間を解消する試み。
- **[生成AIセキュリティ入門：企業で起きるリスクと重大インシデント](https://qiita.com/n-okutomi/items/2ee94d9138f7184aa5c7)** - ChatGPTやGitHub Copilotなど生成AIツールが業務に浸透する中、企業で実際に起きたセキュリティリスクや重大インシデントの事例を整理した入門記事。導入効果の裏にある情報漏洩リスクを体系的に学べる。
- **[【AWS Builder Center】ワークショップ用の無料サンドボックス環境が利用可能になりました！](https://qiita.com/yosuke-suzuki/items/ce3f60c85c39cf7e2a10)** - AWS Builder Centerに追加された無料サンドボックス環境について、個人のAWSアカウントやクレジットカードなしでワークショップ用の事前構築済み環境を試せる点を紹介した記事。AWS公式発表を実際に使ってみた視点でまとめている。

## AWS 新着

- **[AWS DMS Schema Conversion now supports offline SQL Server conversion](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-dms-schema-conversion-offline-source/)** (2026-07-10) - AWS DMS Schema Conversionが、稼働中のSQL Serverに接続せずオフラインでスキーマ変換を行えるようになった。本番環境への接続許可が下りにくいケースでも、事前にエクスポートした情報から移行作業を進められる。
- **[AWS Organizations now applies account departure security controls by default for new organizations created via AWS Organizations console](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-organizations-security-controls-new-orgs-console)** (2026-07-09) - AWS Organizationsコンソール経由で新規作成する組織に対し、アカウント離脱時のセキュリティ制御がデフォルトで適用されるようになった。初期設定の不備によるガバナンス上の抜け漏れを防ぐ狙いがある。
- **[Amazon SageMaker Unified Studio adds custom asset types to the catalog in IAM-based domains](https://aws.amazon.com/about-aws/whats-new/2026/07/smus-custom-asset-types-iam/)** (2026-07-09) - SageMaker Unified StudioのIAMベースドメインで、任意の形式のアセットをカタログに登録できるカスタムアセットタイプに対応した。データ資産の管理を組織独自の分類体系に合わせて拡張できる。
- **[Amazon EC2 now supports using an EBS volume for Replace Root Volume](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ec2-replace-root-volume-ebs-volume/)** (2026-07-09) - 稼働中のEC2インスタンスのルートボリュームを、既存のEBSボリュームを使って置き換えられる新オプションが追加された。インスタンスを停止せずに障害復旧やロールバックを行いやすくなる。
- **[Amazon Location Service enhances Places APIs with new address and search options](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-location-service-enhanced-address-search)** (2026-07-10) - Amazon Location ServiceのPlaces APIに、住所表記の書式指定や多言語対応、移動手段を考慮したPOI検索などの機能が追加された。地図・位置情報アプリを開発する際の実装自由度が広がった。

## Lobsters

- **[Closing a three-year-old issue using Rust arenas](https://giacomocavalieri.me/writing/gleam-rust-arenas)** (65pt) - 関数型言語Gleamのコンパイラに3年間残っていたissueを、Rustのアリーナアロケータ（メモリを一括確保・解放する手法）を導入することで解決した記録。個別の解放処理を避け、データ構造全体のライフタイムをまとめて管理する設計変更の過程が詳しく語られている。
- **[Quadrupling code performance with a "useless" if](https://purplesyringa.moe/blog/quadrupling-code-performance-with-a-useless-if/)** (55pt) - 一見無駄に見える`if`文を1つ追加するだけで処理速度が4倍になったという逆説的な高速化事例を解説した記事。コンパイラの最適化やCPUの分岐予測の挙動を踏まえ、なぜ「無駄な分岐」が実際には効くのかを丁寧に紐解いている。
- **[Zig Creator Calls Spade a Spade, Anthropic Blows Smoke](https://raymyers.org/post/zed-creator-calls-spade-a-spade/)** (32pt) - Zig言語の作者がAIコーディングツールについて率直な見解を述べたのに対し、Anthropicの発信は実態以上に誇張されているのではと指摘した記事。AIコーディング支援の効果を巡る言説の温度差を批評している。
- **[A WWDC 27 Update on Building a Mac-assed App with SwiftUI](https://pfandrade.me/blog/swiftui-mac-assed-wwdc27-update/)** (15pt) - SwiftUIで「いかにもMacらしい」挙動・見た目のアプリを作るためのノウハウを、WWDC 2027の発表を踏まえて更新した記事。クロスプラットフォーム化が進む中でも、プラットフォーム固有の作法を大切にする姿勢を伝えている。
- **[Know thine enemy: A critical engagement with AI-assisted software development](https://medium.com/bits-and-behavior/know-thine-enemy-a-critical-engagement-with-ai-assisted-software-development-e41d9b058ab1)** (14pt) - AI支援によるソフトウェア開発を礼賛するのでも全否定するのでもなく、その限界と強みを批判的に検討したエッセイ。「敵を知る」という姿勢でAIツールの得意・不得意を冷静に切り分けている。

## dev.to

- **[How to Actually Evaluate an AI Engineer in 2026 (7-Point Framework)](https://dev.to/krunal_groovy/how-to-actually-evaluate-an-ai-engineer-in-2026-7-point-framework-1hjd)** - 2022年当時のML人材評価基準（「Kaggleでモデルを訓練した」「PyTorchを知っている」等）は、2026年に信頼性の高いAIシステムを出荷できる人材をほとんど予測できないと指摘し、新しい7項目の評価フレームワークを提案した記事。
- **[Unpacking GhostLock: A 15-Year-Old Linux Stack UAF Vulnerability Revealing Deep Security Lessons](https://dev.to/tamizuddin/unpacking-ghostlock-a-15-year-old-linux-stack-uaf-vulnerability-revealing-deep-security-lessons-20k4)** - Linuxカーネルに15年間潜んでいたスタック領域のUse-After-Free脆弱性「GhostLock」（CVE指定）の技術的詳細を解説した記事。長期間見過ごされてきた低レイヤーの脆弱性から得られるセキュリティ上の教訓を論じている。
- **[I Started Tracking How Much Time I Spent Correcting AI Output. The Number Changed Everything.](https://dev.to/avery_code/i-started-tracking-how-much-time-i-spent-correcting-ai-output-the-number-changed-everything-4p2d)** - AIとの協働で8ヶ月働いた開発者が、AIの出力を修正するのに実際どれだけ時間を費やしているかを計測し始めたところ、体感していた「生産性が上がっている」という感覚を覆す数字が出てきたという記事。
- **[How to Build a Good Human-in-the-Loop for AI Coding Agents](https://dev.to/brennhill/how-to-build-a-good-human-in-the-loop-for-ai-coding-agents-1kan)** - AIコーディングエージェント向けの優れたHuman-in-the-Loopとは、単なる「承認しますか？」の確認ダイアログの羅列ではなく、人間が現実的にキャッチできるミスだけに絞って介入させる設計だと論じた記事。
- **[Architecture Is Even More Essential in the Age of AI](https://dev.to/benedya/architecture-is-even-more-essential-in-the-age-of-ai-nil)** - AIツールによってコードを書くコストがほぼゼロに近づいた今こそ、システムを人間が理解・保守・成長させ続けられるようにするアーキテクチャ設計の重要性がむしろ増していると主張する記事。

## TechCrunch

- **[US cybersecurity agency CISA had to build its incident playbook during the incident, agency reveals](https://techcrunch.com/2026/07/10/us-cyber-agency-cisa-had-to-build-its-incident-playbook-during-the-incident-agency-reveals/)** - 米サイバーセキュリティ機関CISAが、公開GitHubリポジトリに大量の認証情報が露出していたインシデントへの対応手順を、事後に後付けで整備していたことが明らかになった。セキュリティ機関自身のインシデント対応体制の未成熟さを露呈する事例。
- **[Phia accused of 'cookie stuffing,' taking affiliate credit on purchases it didn't earn](https://techcrunch.com/2026/07/10/phia-accused-of-cookie-stuffing-taking-affiliate-credit-on-purchases-it-didnt-earn/)** - ビル・ゲイツ氏の娘が共同創業したショッピングスタートアップPhiaが、実際には貢献していない購入に対してアフィリエイト報酬を得る「クッキースタッフィング」を行っていたと告発された。成長を急ぐスタートアップのグロース施策が不正広告手法に踏み込んでいた疑いを示す事件。
- **[Bluesky's interim CEO, Toni Schneider, drops the 'interim'](https://techcrunch.com/2026/07/10/blueskys-interim-ceo-toni-schneider-drops-the-interim/)** - 分散型SNS Blueskyの暫定CEOを務めていたToni Schneider氏が、正式にCEOへ就任した。Automattic元CEOでTrue Ventures パートナーでもある同氏が、非主流派SNSの経営に本腰を入れる姿勢を示している。
- **[A new app, HyperTexting, turns the open web into a scrollable social media-like feed](https://techcrunch.com/2026/07/10/a-new-app-hypertexting-turns-the-open-web-into-a-scrollable-social-media-like-feed/)** - ブログやニュースレター、ポッドキャストなどオープンウェブ上のコンテンツを、SNSのようにスクロールして閲覧できるフィードに変換する新アプリ「HyperTexting」が登場した。プラットフォームに囲い込まれないオープンウェブ体験をSNS的なUXで再構築する試み。

## Ars Technica

- **[Quantum error correction can constantly recalibrate a processor](https://arstechnica.com/science/2026/07/quantum-error-correction-can-constantly-recalibrate-a-processor/)** - 量子誤り訂正の仕組みを応用し、量子プロセッサを稼働させながら常時再較正できる手法が報告された。従来は較正のためにいったん計算を止める必要があったが、エラー訂正の情報自体を較正にも活用することでその制約を緩和している。
- **[Valve's new Steam Machine verification system is silent on these Steam Deck-busters](https://arstechnica.com/gaming/2026/07/valves-steam-machine-verified-ratings-offer-more-questions-than-answers/)** - Valveが新型ゲーム機「Steam Machine」向けに導入した互換性検証システムが、実際にはSteam Deckで動作しないタイトルについて何も警告しないという不備を指摘した記事。認証ラベルへの過信に警鐘を鳴らしている。
- **[An orbiting disco ball gave Einstein's theory its most precise test yet](https://arstechnica.com/science/2026/07/an-orbiting-disco-ball-gave-einsteins-theory-its-most-precise-test-yet/)** - 多数の反射鏡を球状に配置した衛星「LARES」を使ったレーザー測距実験により、一般相対性理論のフレームドラッギング効果がこれまでで最も高精度に検証された。ミラーボールのような衛星という遊び心ある設計が科学的精度に貢献している。
- **[NASA sure seems to be asking an awful lot of private space stations](https://arstechnica.com/space/2026/07/nasa-finally-releases-a-critical-planning-document-for-private-space-stations/)** - NASAが商業宇宙ステーション事業者向けに公開した計画文書について、要求水準の高さが民間事業者にとって負担になりかねないと分析した記事。国際宇宙ステーション後継を担う民間プレイヤー育成の難しさを示している。

## 注目トピック

今回のダイジェストで際立つのは、「AIエージェントに強い権限を与えることの代償」を生々しく示す実例が複数のソースで同時に浮上した点だ。ZennのCursorに「不要なブランチを整理して」と頼んだらDドライブが丸ごと消失した事故報告は象徴的で、実行コマンドの履歴すら失われ原因究明もできなかったという。dev.toの「AI出力の修正時間を計測したら体感を裏切る数字が出た」という記事や、LobstersのZig作者によるAIコーディング評への率直な批評、Medium発の「Know thine enemy」というAI開発への批判的考察も同じ軸にあり、AIエージェント活用の高揚感に対して実測・実体験ベースで冷や水を浴びせる論調が目立つ。TechCrunchが報じたCISA（米サイバーセキュリティ機関）自身が、インシデント対応の手順を事後に後付けで整備していたという事実も、権限や自動化を扱う組織自体の備えの甘さという文脈で響き合っている。

もう一方の軸は、Claude Code関連の実践知が急速に蓄積され「定番の読み物」として定着しつつあることだ。はてなブックマークとQiitaの双方で1位となった「Claude Code、とりあえずこれ読んどけばOKなまとめ」は892usersという突出したブックマーク数を集め、新卒エンジニア個人の学習ログが多くの現場エンジニアの入り口として機能している状況を示している。QiitaのAI⇔人間がdiff上でやり取りできる「hunk」や、AWS MCP Serverの接続簡略化、AnthropicのモデルEval設計といった記事群は、AIエージェントとの協働を「気合と勘」ではなく道具立てとプロセスとして整備し直す段階に入っていることを物語っている。便利さを追求する動きと、その裏にあるリスクを実測・検証しようとする動きが、これまでのダイジェスト同様に今回も並走している。
