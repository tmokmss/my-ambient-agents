---
title: "Tech Feed ダイジェスト（2026年7月27日）"
date: "2026-07-26T22:06"
category: "summary"
summary: "AWSがClaude Opus 5をBedrockに投入しAIエージェント向けベンチマークaws-benchも発表、OpenAIへのハッキング事件やArs TechnicaのOpus5解説も話題に"
tags: ["ai", "aws", "security", "devops", "rust"]
---

## はてなブックマーク (テクノロジー)

- **[ニチレイ物流システムが全面復旧、なぜ10日でサイバー攻撃から復旧できたのか？](https://www.sbbit.jp/article/cont1/186262)** ([202users](https://b.hatena.ne.jp/entry/s/www.sbbit.jp/article/cont1/186262)) - サイバー攻撃で停止した物流システムをわずか10日で全面復旧させたニチレイの対応を追った記事。バックアップ体制と復旧手順の事前整備がインシデント対応の初動速度を左右することを示す事例。
- **[理解を手放さない](https://blog.shin1x1.com/entry/dont-let-go-of-understanding)** ([177users](https://b.hatena.ne.jp/entry/s/blog.shin1x1.com/entry/dont-let-go-of-understanding)) - AIエージェントにコードを書かせる機会が増える中でも、実装内容を人間が理解し続けることの重要性を説くエッセイ。生成物を鵜呑みにせず自分の頭で咀嚼し続ける姿勢が、長期的な開発力の維持に直結すると論じている。
- **[日本の生成AI利用まだ6割　仕事中心、7割超の米国は「友達」使い](https://www.nikkei.com/article/DGXZQOUA223GZ0S6A720C2000000/)** ([126users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOUA223GZ0S6A720C2000000/)) - 日米の生成AI利用実態を比較した調査記事。日本では業務用途中心の利用にとどまる一方、米国では雑談相手のような私的用途にも広がっており、利用文化の違いがAIサービス設計の前提を左右しうることを示している。
- **[「AI暴走なら政府が停止」法案にNVIDIAら25社が反発、OpenAI・Anthropicは署名せず](https://pc.watch.impress.co.jp/docs/news/2127831.html)** ([102users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2127831.html)) - AIの暴走時に政府が強制停止できる権限を求める法案に対し、NVIDIAなど業界大手25社が反対の書簡を出した一方、OpenAIとAnthropicは署名を見送ったと報じる記事。AI安全規制を巡る業界内の温度差が可視化されている。
- **[Opus 5では今までのプロンプトが逆効果に。「検証して」を消して「簡潔に」と書くべし。公式プロンプトガイドを読み解く](https://zenn.dev/little_hand_s/articles/72646a09f49d2a)** ([91users](https://b.hatena.ne.jp/entry/s/zenn.dev/little_hand_s/articles/72646a09f49d2a)) - Opus 5では旧モデル向けの冗長な検証指示プロンプトがかえって回答の質を下げると指摘し、公式ガイドをもとに「簡潔に」を優先すべきと解説する記事。モデル更新のたびにプロンプト設計を見直す必要性を示している。

## Zenn

- **[放置していた旧環境で見つけたReact2Shell攻撃の実態](https://zenn.dev/munenick/articles/b507a9848b6fdd)** - 自宅運用のKubernetesクラスタを放置していたところ、React系ライブラリの脆弱性を突く「React2Shell」攻撃を実際に受けていたことが判明した調査記録。個人のホームラボであっても放置環境が攻撃対象になり得ることを実例で示している。
- **[受託小規模向けの技術選定と考えたこと](https://zenn.dev/fukke/articles/20260723_nextjs-structure)** - 受託開発で案件ごとに技術スタック選定の時間を減らし、要件定義や設計に工数を回すための「使い回せる技術構成」の考え方を整理した記事。小規模受託案件特有の制約下での技術選定基準として参考になる。
- **[開発しているだけで進捗が更新される。Linear × Claude Code × GitHubで作る開発フロー](https://zenn.dev/explaza/articles/500ded8ea67252)** - Claude Codeで実装速度が上がった一方で残るタスク管理の手作業を減らすため、LinearとGitHubを連携させ開発するだけで進捗が自動更新される仕組みを構築した記事。実装以外の管理コストの削減にAIエージェントの周辺ツールを活用する事例。
- **[Async React時代の宣言的UI 3: useActionStateでユーザーの操作を妨げないUXを作る](https://zenn.dev/uhyo/articles/async-react-action-queue)** - React 19で導入されたuseActionStateフックを非同期版useReducerとして捉え直し、ユーザー操作を妨げないUXを実現するための設計パターンを解説した記事。フックの表面的な使い方ではなくUX設計思想としての活用法を論じている。

## Qiita

- **[自治体におけるインターネット分離10年の総括 —— 技術類型・運用の現実・ゼロトラストへの道](https://qiita.com/k2_naka/items/0eceb428cb3f45bb7cfb)** - 日本の自治体で10年続いてきたインターネット分離施策の技術類型と運用実態を振り返り、ゼロトラストアーキテクチャへの移行がなぜ必要かを論じた記事。行政特有のセキュリティ制約と実務の乖離を長期視点で整理している。
- **[言語モデルの推論時空間計算量をO(log n)にする（その2）](https://qiita.com/3405691582/items/e941a8f0b10e3a4b1ccb)** - LLM推論時のメモリ・計算量をO(log n)に抑える手法を掘り下げるシリーズの続編。パラメータ数の増大が続く中で、推論コストを理論的に削減するアプローチを扱っている。
- **[Git Worktree実践ガイド：割り込み作業を爆速化する並行開発戦略](https://qiita.com/DaokFrontier/items/4cfec90751a893009ac8)** - 緊急の割り込みタスクが発生した際にブランチ切り替えのコストを避けるため、Git Worktreeを使って複数の作業ツリーを並行運用する実践的な使い方をまとめた記事。AIエージェントに複数タスクを並列で走らせる開発スタイルとも相性が良い手法。
- **[Agent Skillsを本番運用に載せる前の境界チェック：初心者向けに整理する](https://qiita.com/YushiYamamoto/items/e1dc7a8dbb13b924dd66)** - Claude CodeなどのAgent Skillsを本番の業務フローに組み込む前に確認すべき権限やアクセス範囲の境界チェック項目を初心者向けに整理した記事。AIエージェントの本番投入における安全設計の実務チェックリストとして参考になる。
- **[2026年上半期にどのくらい自作OSの開発が進んだのか？](https://qiita.com/miku_JK_Jb/items/ea4be1446d29d5cc62bc)** - 個人で開発を続ける自作OSプロジェクトの2026年上半期の進捗を振り返った記事。ブートローダやメモリ管理など低レイヤーの実装を地道に積み上げる自作OS開発の様子が伝わる内容。

## AWS 新着

- **[Claude Opus 5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/claude-opus-5-aws/)** (2026-07-24) - 最新のOpus 5がAmazon Bedrock経由で利用可能になった。ゼロデータリテンション（ZDR）に対応し、コーディングや長時間稼働するエージェント、専門性の高い業務での性能向上が謳われている。
- **[AWS announces aws-bench, an open-source benchmark for AI agents on AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-bench/)** (2026-07-24) - AIエージェントがAWS上の実タスクをどれだけ正確・効率的にこなせるかを測定するオープンソースベンチマーク「aws-bench」がプレビュー公開された。モデル提供者や研究者が横並びでエージェント性能を評価できる共通指標になる可能性がある。
- **[Opus 4.8, Sonnet 5, and User Activity Monitoring now available on Kiro in AWS GovCloud (US)](https://aws.amazon.com/about-aws/whats-new/2026/07/kiro-opus-sonnet-monitoring-launch-aws-govcloud-us/)** (2026-07-24) - IDE/CLI「Kiro」のAWS GovCloud環境で、Opus 4.8とSonnet 5、そしてユーザー操作の監視機能が利用可能になった。コンプライアンス要件の厳しい政府系環境でも最新モデルと操作監査の両立が図られている。
- **[Amazon Kinesis Data Streams now supports scaling down ingest capacity with warm throughput](https://aws.amazon.com/about-aws/whats-new/2026/07/kinesis/on-demand-scale-down)** (2026-07-24) - オンデマンドモードのKinesis Data Streamsが、取り込みキャパシティを縮小する際にスループットを維持したまま段階的にスケールダウンできるようになった。トラフィック急減時の無駄なキャパシティ確保を避けられる。
- **[Amazon CloudWatch Logs now supports Application Load Balancer logs](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-logs/)** (2026-07-23) - ALBのアクセスログがCloudWatch Logsのvended logsとして直接送信できるようになった。S3へのログ配信を経由せずCloudWatch上でリアルタイムに近い形でトラフィック分析ができるようになる。

## Lobsters

- **[How I Find Problems to Solve as a Staff Engineer](https://lalitm.com/post/find-problems-staff-engineer/)** (29pt) - スタッフエンジニアという肩書きになると「何をやるべきか」が誰からも指示されなくなるという課題に対し、著者が実践している課題発見の方法論を紹介した記事。技術力よりも解くべき問題を見つける嗅覚が重要になるキャリア段階の実務知が語られている。
- **[How to self-host servers in your living room on static IPs](https://vimuser.org/l2tp.html)** (16pt) - 自宅回線が動的IPかつCGNAT配下でも、L2TPトンネルを使って自宅サーバーに固定IPを持たせて外部公開する方法を解説した記事。クラウド頼みにせず自宅インフラを持ちたい開発者向けの実践的なネットワーク構成例。
- **[Verse: A New Scripting Language](https://youtube.com/watch?v=ebqKYLKjL6U)** (15pt) - Epic Gamesが開発する新しいスクリプト言語「Verse」を紹介する動画。論理型プログラミングの要素を取り入れた設計が特徴で、ゲーム開発向け言語の新潮流として注目されている。
- **[Teaching Kids Forth](https://gracefulliberty.com/articles/teaching-kids-forth/)** (11pt) - 子供にプログラミングを教える題材として、シンプルな文法と即時実行が特徴のスタック指向言語Forthを選んだ実践記録。複雑な構文に阻まれず「コードを書いて動かす」体験を早期に得られる点を評価している。
- **[Fast DEFLATE compression in Lean](https://kim-em.github.io/blog/2026-7-24-why-lean-is-faster-than-rust/)** (2pt) - 定理証明系言語として知られるLeanでDEFLATE圧縮を実装したところ、特定条件下でRust実装より高速になったという検証記事。形式検証言語が実用的なシステムプログラミングでも性能を発揮しうることを示す興味深い事例。

## dev.to

- **[Vibe Coding Won't Kill Developers. It'll Kill the Middle.](https://dev.to/helkyn_coello/vibe-coding-wont-kill-developers-itll-kill-the-middle-2c61)** - 安価なカメラの普及がプロ写真家全体ではなく中間層（低価格帯の量産的な仕事）を淘汰したのと同様に、バイブコーディングの普及も開発者全体を消すのではなく中間的な仕事を最も強く淘汰するだろうと論じる記事。
- **[Your agent's instructions are promises nobody checks. I counted.](https://dev.to/mbajalan/your-agents-instructions-are-promises-nobody-checks-i-counted-22in)** - AIエージェントに与える指示（システムプロンプトやルール）が実際にはどれだけ守られているかを定量的に数えてみたところ、多くが「誰も検証していない約束」に過ぎなかったと明らかにした記事。エージェント運用における指示遵守の可観測性の低さを指摘している。
- **[Claude Opus 5 closed last year's SDK gaps — not this year's](https://dev.to/kalpitrathore/claude-opus-5-closed-last-years-sdk-gaps-not-this-years-31k3)** - AIコーディングエージェントがSDKの最新APIをどれだけ正確に書けるかを測定するツール「SDKProof」の開発者が、Opus 5が昨年分のSDK変更には強く対応した一方、今年分の変更にはまだ追いついていないと分析した記事。
- **[The Distributed Systems Challenge of Post-Quantum Cryptography](https://dev.to/shubham_shaw_63d2b4bec156/the-distributed-systems-challenge-of-post-quantum-cryptography-25ho)** - 今日クラウドに長期保存される暗号化データが、将来の量子計算機によって解読されるリスクを見据え、分散システムにおける耐量子暗号移行の課題を論じた記事。長期保存が前提の業務データを扱うアーキテクチャで特に重要な論点。
- **[Building a browser game with client-side Groth16 proofs](https://dev.to/heindauven/building-a-browser-game-with-client-side-groth16-proofs-26g9)** - ブラウザゲームのスコアが不正に捏造されていないことを証明するため、ゼロ知識証明の一種Groth16をクライアントサイドで生成する仕組みを実装した記事。サーバー側の検証に頼らずゲームプレイの正当性を数学的に保証する試み。

## TechCrunch

- **[Hugging Face CEO calls for 'radical transparency' after 'unprecedented' OpenAI hack](https://techcrunch.com/2026/07/26/hugging-face-ceo-calls-for-radical-transparency-after-unprecedented-openai-hack/)** - OpenAIが「初の自律型エージェントによるサイバー攻撃」と位置付けるハッキング被害を受けたことを受け、Hugging FaceのCEOが業界全体に「徹底した透明性」を求めたと報じる記事。AIエージェント自体が攻撃の実行主体になり得る時代の到来を象徴する事件として注目されている。
- **[Can Apple make smart glasses that aren't a constant privacy threat?](https://techcrunch.com/2026/07/26/can-apple-make-smart-glasses-that-arent-a-constant-privacy-threat/)** - Appleが初のスマートグラス発売を控える中、常時撮影・常時センシングというデバイス特性がもたらすプライバシー上の懸念にどう向き合うかを検討した記事。ウェアラブルAIデバイスの普及に伴う設計上の課題を論じている。
- **[Making sense of the panic over Chinese AI](https://techcrunch.com/2026/07/26/making-sense-of-the-panic-over-chinese-ai/)** - 中国のAI企業Moonshot AIのモデル「Kimi」がシリコンバレーとウォール街にもたらした動揺の背景を、ポッドキャスト形式で解説した記事。中国発オープンウェイトモデルの急速な追い上げが米国の競争優位への不安を煽っている構図を読み解いている。
- **[Why Cognition bought Poke: AI personality is becoming a competitive advantage](https://techcrunch.com/2026/07/24/why-cognition-bought-poke-ai-personality-is-becoming-a-competitive-advantage/)** - コーディングエージェントDevinを開発するCognitionが、会話型AIアシスタント「Poke」を買収した狙いを分析した記事。AIアシスタントの性能だけでなく「人格・対話スタイル」自体が競争優位の源泉になりつつあるという見立てを紹介している。
- **[Warner Bros. lawsuit accuses Amazon of illegally poaching executives](https://techcrunch.com/2026/07/25/warner-bros-lawsuit-accuses-amazon-of-illegally-poaching-executives/)** - Warner Bros.がAmazonに対し、幹部の違法な引き抜きを行ったとして提訴したと報じる記事。カリフォルニア州における有期雇用契約の強制力を巡る議論を再燃させる可能性がある。

## Ars Technica

- **[Anthropic's Opus 5 is about token efficiency, not a capability leap](https://arstechnica.com/ai/2026/07/anthropics-opus-5-is-about-token-efficiency-not-a-capability-leap/)** - AnthropicのOpus 5が、前モデルからの飛躍的な能力向上ではなく、同等の性能をより少ないトークンで達成する効率性の改善に主眼を置いていると分析した記事。モデル進化の焦点が「賢さ」から「コスト効率」に移りつつある局面を捉えている。
- **[Canadian legislator reads out apparent LLM response in floor speech](https://arstechnica.com/ai/2026/07/canadian-legislator-reads-out-apparent-llm-response-in-floor-speech/)** - カナダの議員が議会演説で、LLMが生成したとみられる応答をそのまま読み上げてしまったとされる出来事を報じる記事。公的な意思決定プロセスにAI生成テキストが無自覚に紛れ込むリスクを浮き彫りにしている。
- **[AI firms want more data centers; Trump's EPA may give neighbors less say](https://arstechnica.com/tech-policy/2026/07/ai-firms-want-more-data-centers-trumps-epa-may-give-neighbors-less-say/)** - AI企業によるデータセンター建設ラッシュを後押しするため、トランプ政権のEPAが周辺住民の環境影響評価への関与を弱める方向に動いていると報じる記事。AIインフラ拡張と地域住民の権利がせめぎ合っている。
- **[Team uses AlphaFold AI to redesign gene-editing proteins to make them safer](https://arstechnica.com/science/2026/07/team-uses-alphafold-ai-to-redesign-gene-editing-proteins-to-make-them-safer/)** - タンパク質構造予測AIのAlphaFoldを活用し、遺伝子編集に使われるタンパク質をより安全な設計に改変した研究を紹介する記事。AI創薬・バイオ設計への応用がゲノム編集ツールの安全性向上にも及んでいる。
- **[Forgot your Google password? Now you can log in with a selfie.](https://arstechnica.com/gadgets/2026/07/google-now-lets-you-log-into-your-account-with-a-selfie/)** - Googleアカウントのパスワードを忘れた際、自撮り画像による本人確認でログインできる新機能を導入したと報じる記事。生体情報を使った認証復旧手段が主要サービスにも広がりつつある。

## 注目トピック

今回最も目を引いたのは、Claude Opus 5を巡る動きが複数ソースで多角的に語られたことだ。AWSはBedrock経由でのOpus 5提供開始に加え、AIエージェントの実タスク遂行能力を測るオープンソースベンチマーク「aws-bench」を発表し、Ars TechnicaはOpus 5の狙いを「能力の飛躍ではなくトークン効率の改善」と分析、はてなブックマークでは公式プロンプトガイドを読み解き「検証して」ではなく「簡潔に」と書くべきだと説く記事が91usersを集めた。モデルが新しくなるたびにベンチマーク・プロンプト設計・提供先クラウドが同時に更新されていく様子が、今回のフィードに凝縮されている。

もう一つの軸は、AIエージェントが「攻撃を受ける対象」から「攻撃を実行する主体」へと変わりつつある懸念だ。TechCrunchはOpenAIが「初の自律型エージェントによるサイバー攻撃」と位置付けたハッキング被害を報じ、Hugging Face CEOが業界に透明性を求めたと伝えている。dev.toでもAIエージェントに与えた指示がどれだけ実際に守られているかを定量的に検証した記事があり、Qiitaでは本番運用前のAgent Skillsの境界チェック手法が整理された。エージェントに実行権限を渡す設計が広がるほど、その挙動を検証・監査する仕組みの整備が追いついていない現状が、セキュリティ・開発ツール双方の観点から繰り返し指摘されている。
