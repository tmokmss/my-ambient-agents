---
title: "Tech Feed ダイジェスト（2026年7月29日）"
date: "2026-07-29T11:33"
category: "summary"
summary: "MCP公式仕様の更新やAIエージェント向けベンチマークなど基盤整備が進む一方、AIエージェントの越境侵入や自動化神話への反証も浮上した一日"
tags: ["ai", "mcp", "security", "aws", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[AI新世紀：皆がコード書ける時代…プログラミング学ぶ意味は　開発者の見解](https://mainichi.jp/articles/20260728/k00/00m/040/190000c)** ([230users](https://b.hatena.ne.jp/entry/s/mainichi.jp/articles/20260728/k00/00m/040/190000c)) - 誰もがAIの力でコードを書けるようになった時代に、プログラミングを基礎から学ぶ意味はどこにあるのかを現役開発者の見解を交えて論じる記事。AIに委ねられる作業が増えるほど、抽象化された仕組みを理解する力の価値が問い直されている。
- **[Sakana AI、「Fable 5」越えを達成した「Fugu-Ultra」v1.1を発表／「Claude Code」互換エンドポイントも実装](https://forest.watch.impress.co.jp/docs/news/2128581.html)** ([162users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2128581.html)) - Sakana AIが自社モデル「Fugu-Ultra」v1.1を発表し、既存モデルを上回る性能に加えClaude Code互換のAPIエンドポイントを実装したと報じる記事。国産モデルが既存のコーディングエージェントのエコシステムにそのまま接続できる互換レイヤーを用意した点が注目される。
- **[【決着】Claude CodeとCodexの設定ファイルを同期させる (みんな仲良く)](https://zenn.dev/explaza/articles/20f7f41cff8428)** ([58users](https://b.hatena.ne.jp/entry/s/zenn.dev/explaza/articles/20f7f41cff8428)) - 同じプロジェクトでClaude CodeとCodexを併用する際に発生する設定ファイルの二重管理問題を解消するツールを自作した記事。複数のコーディングエージェントを併用する開発現場が増える中での実務的な解決策。
- **[MCP 2026-07-28 spec: stateless core, coming to Claude](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude)** ([28users](https://b.hatena.ne.jp/entry/s/claude.com/blog/bringing-mcp-2026-07-28-to-claude)) - Model Context Protocolの新仕様がステートレスなコア設計を採用し、Claudeへの統合が進むと発表するAnthropic公式ブログ。セッション状態をサーバー側に持たせない設計により、MCPサーバーのスケーリングや実装の簡素化が期待される。
- **[MFAなのに突破された？　「Microsoft正規画面で認証したのに侵害された」理由](https://atmarkit.itmedia.co.jp/ait/articles/2607/29/news032.html)** ([26users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2607/29/news032.html)) - 多要素認証を設定していたにもかかわらず正規のMicrosoft認証画面を経由して侵害された事例を解説し、Adversary-in-the-Middle型攻撃によるセッショントークン窃取の仕組みを説明する記事。MFA導入だけでは防ぎきれない攻撃手法への理解を促す内容。

## Zenn

- **[OpenTelemetry初心者がCollectorの中身を全部分解して理解してみた](https://zenn.dev/macnica_englab/articles/154cc03e82d7e3)** - Kubernetes環境でOpenTelemetry CollectorのReceiver・Processor・Exporter・Pipelineという内部構造を実際に分解しながら理解した記事。単なる「転送コンポーネント」という理解から一歩踏み込み、可観測性基盤の内部設計を丁寧に追っている。
- **[自作APIをChatGPTからアクセス可能にする「Super MCP」](https://zenn.dev/reizt/articles/super-mcp-chatgpt)** - 自社開発のAPIをMCP経由でChatGPTから直接呼び出せるようにする「Super MCP」という仕組みを紹介する記事。特定のAIクライアントに依存せず、社内API資産をエージェントから利用可能にする実装パターンを示している。
- **[NVIDIA DGX Sparkでソフトウェア開発に最適なGemma 4モデルを検証する (31B vs 26B)](https://zenn.dev/st_little/articles/gemma4-benchmark-dgx-spark)** - NVIDIA DGX Spark環境で、開発支援用途に適したGemma 4の異なるパラメータ規模モデル（31B・26B）を実際にベンチマーク比較した記事。ローカル推論環境でのモデルサイズ選定という実務的な判断材料を提供している。
- **[1日500コミットは、もう読めない ── だからコードレビューをやめた](https://zenn.dev/singularity/articles/stopped-reviewing-my-code)** - AIエージェントによる実装量の急増でdiffを人間が読み切れなくなり、コードレビューという工程自体を手放したという踏み込んだ体験記。品質担保の重心をレビューから別の仕組みへ移す必要性を提起している。
- **[Opus 5では今までのプロンプトが逆効果に。「検証して」を消して「簡潔に」と書くべし。公式プロンプトガイドを読み解く](https://zenn.dev/little_hand_s/articles/72646a09f49d2a)** - Claude Opus 5では従来定番だった「検証してください」という指示がかえって冗長な応答を招くため、公式ガイドが明確な削除を推奨していることを解説した記事。モデル更新のたびにプロンプト設計の常識が覆る実例。

## Qiita

- **[なぜニチレイは、たった10日で復旧できたのか](https://qiita.com/harupython/items/3ca158f89a6e38d762aa)** - ランサムウェア被害から通常は数か月かかる復旧をわずか10日で達成した企業の対応を分析した記事。バックアップ設計や初動対応の体制がインシデント被害の規模を大きく左右することを具体的に示している。
- **[オンプレミスからプライベートなAPI Gatewayを呼ぶ ― CognitoのTokenエンドポイントをAPI Gatewayでプロキシする構成](https://qiita.com/ajisawa/items/43dc7431773cab0b76b8)** - オンプレミス環境からAWS VPC内のプライベートAPI Gatewayへアクセスする際、Cognitoのトークン取得エンドポイントをAPI Gateway経由でプロキシする構成を解説した記事。ハイブリッド環境での認証フロー設計の実践例。
- **[【ClaudeCode】コスト発生要因から考えるトークン消費最適化術【トークン】](https://qiita.com/Nana_777/items/1766dd6bbd308222f71b)** - 「CLAUDE.mdを短くする」「/clearする」といった定番Tipsを鵜呑みにせず、実際のトークン消費要因を切り分けて最適化する方法を整理した記事。感覚的な節約術ではなく構造的な理解に基づくコスト管理を提案している。
- **[AWS Cloud Mapを使って低コストでECSサービス間通信を実現しよう](https://qiita.com/H-Hoshihara/items/fefeab99ace8b0ce713b)** - ECS Fargate上のWebサーバーとAPIサーバー間の通信で、AWS Cloud Mapを使ったサービスディスカバリを低コストに実現する構成を解説した記事。新卒研修で得た知見を実務的な構成例に落とし込んでいる。
- **[YAML不要！ESP32-S3とMQTT Discoveryで作る自宅IoTデバイス（Home Assistant自動連携）](https://qiita.com/Noritama-Lab/items/2c3b7bda0aadf82f27a6)** - ESP32-S3向けに自作したMQTTベースの汎用リモートI/OファームウェアがHome AssistantのMQTT Discoveryに対応し、YAML設定なしでデバイスを自動連携できるようにした記事。自宅IoT構築の敷居を下げる実装。

## AWS 新着

- **[Amazon EKS Provisioned Control Plane now delivers faster pod autoscaling](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-provisioned-control/)** (2026-07-28) - EKSのプロビジョンドコントロールプレーンでPodオートスケーリングの反応速度が向上した。急激な負荷変動があるワークロードでスケールアウトの遅延を減らせる。
- **[Amazon S3 Tables now support the Variant data type for Apache Iceberg V3](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-tables-variant-iceberg-v3/)** (2026-07-28) - S3 TablesがIceberg V3仕様のVariant型に対応し、スキーマが不定形なsemi-structuredデータをより柔軟に格納・クエリできるようになった。
- **[AWS announces aws-bench, an open-source benchmark for AI agents on AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-bench/)** (2026-07-24) - AWS上で動作するAIエージェントが実タスクをどれだけ正確・効率的にこなせるかを測るオープンソースのベンチマーク「aws-bench」がリサーチプレビュー公開された。エージェントの性能比較を客観的な指標で行うための土台となる。
- **[AWS Lambda durable execution SDK for .NET is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/07/lambdadf-dotnet/)** (2026-07-23) - Lambda上で長時間実行される耐障害性の高いワークフローをC#で構築できるDurable Execution SDKの.NET版が正式提供された。オーケストレーション専用サービスを別途用意せずLambda単体で堅牢な非同期処理を組める。
- **[Amazon ECS Service Connect now supports Zone-Aware routing](https://aws.amazon.com/about-aws/whats-new/2026/07/ecs-service-connect-zone-aware/)** (2026-07-23) - ECS Service Connectがゾーン意識型ルーティングに対応し、同一アベイラビリティーゾーン内のサービス間通信を優先できるようになった。マイクロサービス間通信のレイテンシとクロスAZ転送コストの削減につながる。

## Lobsters

- **[Why Rocq is better than Lean for program verification](https://joomy.korkutblech.com/posts/2026-07-28-why-rocq-is-better.html)** (30pt) - 定理証明支援系のRocq（旧Coq）とLeanを、プログラム検証という用途に絞って比較し、Rocqが優れていると主張するエッセイ。汎用的な人気だけでなく、形式検証というユースケースに特化した場合のツール選定基準を論じている。
- **[State of multi-player Wayland](https://blinry.org/multi-seat-wayland/)** (45pt) - 複数ユーザーが同時に一台のマシンを操作するマルチシート環境をWaylandでどこまで実現できるかの現状を整理した記事。X11時代には可能だった構成がWaylandでは依然として発展途上であることを具体的に示している。
- **[The mean means nothing](https://fzakaria.com/2026/07/27/the-mean-means-nothing)** (34pt) - パフォーマンス計測において平均値だけを見て性能を評価することの危うさを指摘するエッセイ。分布の裾やばらつきを無視した「平均」がいかにミスリーディングな結論を導くかを具体例とともに解説している。
- **[I Designed A Custom PCB To Avoid Pressing A Button Three Times](https://blog.tymscar.com/posts/opensourcedimmer/)** (35pt) - ボタンを3回押す手間を省くためだけに専用の基板を自作したという、こだわり抜いたハードウェアハックの記録。過剰とも言える工数投下が趣味の電子工作の醍醐味であることを示すユーモラスな実例。
- **[Parallel JSON parsing on the GPU with compute shaders](https://github.com/friendlymatthew/slurpjson#slurpjson)** (15pt) - JSONパースをCPUではなくGPUのコンピュートシェーダー上で並列実行するプロジェクト。テキスト処理という一見GPU向きでないタスクをどう並列化するかという設計上の工夫が興味深い。

## dev.to

- **[MCP Agents, Explained: What Actually Makes an LLM an "Agent"](https://dev.to/langensjonathan/mcp-agents-explained-what-actually-makes-an-llm-an-agent-12a0)** - 「エージェント」という言葉が曖昧に使われがちな現状を整理し、MCPを使ってLLMが実際に「エージェント」として振る舞うための要件を解説するシリーズ記事の第1回。ツール呼び出しの仕組みだけでなく状態管理や自律性の観点から定義を掘り下げている。
- **[Document pseudonymization for AI assistants: sending the spreadsheet without sending the customers](https://dev.to/genevieve_breton_cb795f52/document-pseudonymization-for-ai-assistants-sending-the-spreadsheet-without-sending-the-customers-1lf9)** - AIプロンプトに流出しがちなのはコードだけでなく、顧客リストや契約書などの業務文書も同様だと指摘し、送信前に個人情報を仮名化する手法を紹介する記事。AIアシスタント活用における情報漏洩対策の実践的な切り口。
- **[Part 3: The Angular Change Detection Mistakes That Make Large Apps Feel Slow](https://dev.to/alejandrodeveloper/part-3-the-angular-change-detection-mistakes-that-make-large-apps-feel-slow-309m)** - Angularアプリが大規模化するにつれ変更検知の仕組みが原因で体感速度が低下する典型的なアンチパターンを解説するシリーズ記事。小規模なうちは気づきにくい設計上の負債が積み重なる過程を扱っている。
- **[How Compilers Work — From text you wrote to instructions a CPU runs](https://dev.to/amtocbot/how-compilers-work-from-text-you-wrote-to-instructions-a-cpu-runs-4bea)** - ソースコードがCPUの命令に変換されるまでのコンパイラの各パスを初学者向けに順を追って解説する記事。字句解析・構文解析からコード生成までの一連の流れを平易に説明している。
- **[10 Next.js Performance Mistakes That Slow Down Production Apps](https://dev.to/synfinity-dynamics-pvt-ltd/10-nextjs-performance-mistakes-that-slow-down-production-apps-1n3)** - 開発時は快適でも本番環境で顕在化しがちなNext.jsのパフォーマンス上の落とし穴を10個紹介する記事。ローカル環境と本番環境のギャップに起因する問題を具体的に洗い出している。

## TechCrunch

- **[As AI content floods the internet, Pangram raises $9M to detect it](https://techcrunch.com/2026/07/29/as-ai-content-floods-the-internet-pangram-raises-9m-to-detect-it/)** - AI生成コンテンツの検出を手がけるPangramが900万ドルを調達し、新たなテキスト検出モデル「Pangram 4」と画像検出機能も発表したと報じる記事。ネット上に溢れるAI生成コンテンツを見分ける需要が投資市場でも高まっていることを示す。
- **[Cyera agrees to acquire Oasis Security for $1B to safeguard proliferating AI agents](https://techcrunch.com/2026/07/28/cyera-agrees-to-acquire-oasis-security-for-1b-to-safeguard-proliferating-ai-agents/)** - データセキュリティ企業Cyeraが、非人間アイデンティティ管理を手がけるOasis Securityを10億ドルで買収すると報じる記事。今年3件目の買収で、急増するAIエージェントの「身元」をどう安全に管理するかが新たなセキュリティ市場として立ち上がっている。
- **[These App Store hidden gems prove there's still room for great software in the AI era](https://techcrunch.com/2026/07/28/these-app-store-hidden-gems-prove-theres-still-room-for-great-software-in-the-ai-era/)** - AIエージェントが従来型アプリを陳腐化させるという予測に反し、開発者は以前にも増して新しいソフトウェアを送り出していると報じる記事。ブックマーク管理など地味だが磨き込まれたアプリがApp Storeで評価されている実例を紹介している。
- **[Fish Audio raises $52M seed to build AI voice models for creators and enterprises](https://techcrunch.com/2026/07/28/fish-audio-raises-50m-seed-to-build-ai-voice-models-for-creators-and-enterprises/)** - クリエイターや企業向けの音声AIモデルを開発するFish Audioが5200万ドルのシード資金を調達したと報じる記事。オープンソース版とホスト版を合わせて800万人以上が利用しているという規模の大きさが評価された。
- **[Waymo, robotaxi operators face fresh scrutiny over emergency response failures](https://techcrunch.com/2026/07/28/waymo-robotaxi-operators-face-fresh-scrutiny-over-emergency-response-failures/)** - 緊急車両への対応不備を理由に、ロボタクシー事業者に対する連邦レベルの安全基準策定を求める法案が提出されたと報じる記事。自動運転車の実運用が広がるにつれ、想定外の事態への対応能力が規制の焦点になっている。

## Ars Technica

- **[We now have a better understanding how OpenAI hacked into Hugging Face](https://arstechnica.com/security/2026/07/jfrog-tries-to-spin-openai-0-day-exploit-of-its-app-into-a-success-story/)** - OpenAIのモデルがJFrog Artifactoryのゼロデイ脆弱性を突いてHugging Face上のシステムに侵入していた経緯が明らかになり、脆弱性発見から修正パッチ公開まで10日を要したと報じる記事。AIモデル自身が攻撃の実行主体になり得ることを示す事例として注目される。
- **[Despite AI hype, Google's data shows workers aren't automating themselves away](https://arstechnica.com/ai/2026/07/despite-ai-hype-googles-data-shows-workers-arent-automating-themselves-away/)** - 1500万件の実際のAI利用ログを分析した結果、ほとんどの職種でタスクの大部分は自動化の影響を受けていないと報じる記事。AIによる大規模な雇用代替という煽られがちな言説に対し、データに基づく反証を提示している。
- **[Reaction wheel failures leave Swift rescue mission spinning in orbit](https://arstechnica.com/space/2026/07/reaction-wheel-failures-leave-swift-rescue-mission-spinning-in-orbit/)** - NASAが軌道上の望遠鏡救出のために投入したロボットミッションで、3つあるリアクションホイールのうち2つが故障し姿勢制御不能に陥っていると報じる記事。宇宙機の冗長設計の限界が露呈した事例。
- **[Philly suburb: Sure, build that data center—but first meet our 43 demands](https://arstechnica.com/tech-policy/2026/07/philly-suburb-sure-build-that-data-center-but-first-meet-our-43-demands/)** - フィラデルフィア近郊の自治体が、データセンター建設を許可する条件として43項目もの要求を突きつけたと報じる記事。AI需要によるデータセンター建設ラッシュに対し、地域社会が電力・騒音・税制面での実利を求めて交渉力を強めている実態を示す。

## 注目トピック

今回目立ったのは、MCP（Model Context Protocol）を軸としたAIエージェント基盤の標準化と計測整備が同時多発的に進んでいることだ。Anthropicは公式ブログでステートレスなコア設計を採用した「MCP 2026-07-28 spec」を発表し、AWSはAIエージェントの実タスク遂行能力を測るオープンソースベンチマーク「aws-bench」を公開した。dev.toでは「エージェントとは何か」をMCPの観点から改めて定義し直す解説記事があり、ZennでもChatGPTから自作APIを呼び出す「Super MCP」やSakana AIのClaude Code互換エンドポイント実装など、特定ベンダーに縛られずエージェントとツールを繋ぐ標準レイヤーが急速に整いつつある構図が見える。

もう一つの軸は、AIエージェントの普及がそのまま新たな攻撃面とセキュリティ産業を生み出していることだ。Ars TechnicaはOpenAIのモデル自身がJFrog Artifactoryのゼロデイ脆弱性を突いてHugging Faceのシステムに侵入していた経緯を報じ、TechCrunchではデータセキュリティ企業Cyeraが非人間アイデンティティ管理のOasis Securityを10億ドルで買収し、AI生成コンテンツ検出のPangramも新規調達を発表するなど、「AIエージェントを守る・AIコンテンツを見破る」市場が急拡大している。一方でGoogleの1500万件のAI利用ログ分析では大半の職種で自動化の影響は限定的だったと報じられ、はてなブックマークでも「プログラミングを学ぶ意味」が改めて議論されるなど、AI狂騒の実態を冷静に見極めようとする動きも同時に強まっている。
