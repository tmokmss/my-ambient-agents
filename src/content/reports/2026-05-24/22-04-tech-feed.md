---
title: "Tech Feed ダイジェスト（2026年5月25日）"
date: "2026-05-24T22:04"
category: "summary"
summary: "Anthropic Project Glasswing・Go製メモリ安全rsync・声優無断AI音声生成・PowerShell現状・Vivado Linux削除・AI予算6ヶ月消費など"
tags: ["ai", "security", "go", "llm", "anthropic", "aws", "frontend", "powershell", "agent", "robotaxi"]
---

## はてなブックマーク (テクノロジー)

- **[Windowsの標準スクリプト言語であるPowerShellの現状をあらためて紹介する](https://ascii.jp/elem/000/004/404/4404554/)** ([263users](https://b.hatena.ne.jp/entry/s/ascii.jp/elem/000/004/404/4404554/)) - PowerShell 7系（.NET Core ベース）がクロスプラットフォームで使えるようになった現状を整理した記事。Windows PowerShell（5.1系）との機能差異・インストール方法・パイプラインの並列処理など、「古いイメージで避けていた」エンジニアが再評価するきっかけになる内容でブックマークを集めた。

- **[Claude Code に質の高いPRを書かせる Google Engineering Practices 食わせたスキル](https://izanami.dev/post/e63c7bfd-cc85-4421-a4e7-776e93fb8720)** ([180users](https://b.hatena.ne.jp/entry/s/izanami.dev/post/e63c7bfd-cc85-4421-a4e7-776e93fb8720)) - GoogleがOSSとして公開しているコードレビューガイドライン「Google Engineering Practices」をClaude Codeのスキルとして読み込ませることで、PRの説明文・変更の粒度・レビューしやすさが大幅に向上したという実践報告。LLMへの「文化注入」としてのスキル設計の好例。

- **[AI需要で急増するデータセンター、気温を「4度上昇」させる可能性](https://forbesjapan.com/articles/detail/97939)** ([123users](https://b.hatena.ne.jp/entry/s/forbesjapan.com/articles/detail/97939)) - 急拡大するAI向けデータセンターの廃熱が周辺地域の気温を最大4度押し上げる可能性があることを示した研究。電力消費だけでなく物理的な熱排出が地域環境に与えるインパクトという、AIインフラの「体積的コスト」に光を当てた角度が新しい。

- **[「雇うより安価」と著名人の声をAIで無断生成、「フリー素材のように使うのは問題」と声優憤り](https://www.yomiuri.co.jp/national/20260523-GYT1T00294/)** ([46users](https://b.hatena.ne.jp/entry/s/www.yomiuri.co.jp/national/20260523-GYT1T00294/)) - 著名な声優の声をAIでクローンし「雇用コスト削減」名目で広告や動画に無断使用するケースが増加しているという読売新聞の報道。音声クローン技術の普及が「声」という人格の一部を経済財として無断搾取する新たな権利侵害領域を生み出していることを示す。

- **[Project Glasswing: An initial update](https://www.anthropic.com/research/glasswing-initial-update)** ([40users](https://b.hatena.ne.jp/entry/s/www.anthropic.com/research/glasswing-initial-update)) - Anthropicが発表した長期安全性研究プロジェクト「Project Glasswing」の初回アップデート。解釈可能性・Constitutional AI・スケーリング安全性を横断的に取り組む研究アジェンダで、Anthropicが「Claude の能力向上」と「安全性の理論的基盤構築」を同時並行で進める姿勢を改めて示した。

## Zenn

- **[なぜAnthropicはプロンプトにXMLタグを推奨するのか──Markdownとの構造的な違い](https://zenn.dev/yun_bow/articles/a339e1d31a4c43)** - AnthropicがMarkdownよりXMLタグをプロンプト構造化に推奨する技術的根拠を考察した記事。トークナイザーレベルでのMarkdown記号の扱い・ネスト可能な木構造の表現力・プロンプトインジェクション耐性という3つの観点で比較しており、「なんとなくXMLを使っていた」状態から理論的裏付けを持てる内容。

- **[AIエージェントが毎回データを取りに行く設計の限界](https://zenn.dev/knowledge_graph/articles/kg-agent-memory-first-design)** - LLMエージェントがタスク実行のたびに外部ソースからデータを都度取得する「都度取得型」設計の問題点（レイテンシ・コスト・一貫性）を整理し、知識グラフやベクターDBへの事前インデックス化を前提とした「メモリファースト設計」への移行を提案する技術考察。

- **[AI時代で返り咲いたtmuxの活用](https://zenn.dev/nana/articles/ccf7e548f2cb4e)** - Claude Code・GitHub Copilot CLI等の複数AIエージェントを並列で動かす際に、tmuxのセッション・ウィンドウ・ペイン管理が改めて重要になっているという実践記事。エージェントの出力を分割表示しながら複数タスクを並行管理する具体的なtmux設定例を紹介している。

- **[Dockerを手放したら、Agent開発が身軽になった](https://zenn.dev/mofuteq/articles/93a1920e7a8d62)** - AIエージェント開発でDockerコンテナ管理のオーバーヘッドが邪魔になり、プロセス直実行・devcontainerなしのシンプルな環境に移行したところ開発サイクルが大幅に短縮されたという体験記。エージェントが自律的にファイル操作・プロセス制御を行う用途では、コンテナ境界がむしろ足枷になるという逆説的知見。

- **[ローカルDB からブラウザDBへ: IndexedDB は SQLite の代替になり得るのか検証してみた](https://zenn.dev/shinkai_m/articles/4ddf25caef48fb)** - ブラウザ組み込みのIndexedDBをSQLiteの代替として使えるか、読み書き速度・クエリ柔軟性・スキーマ設計の観点で比較した検証記事。OPFS（Origin Private File System）経由でSQLite WASMを動かすアプローチとの性能差も測定しており、ローカルファーストWebアプリのストレージ選定に直結する実測データが参考になる。

## Qiita

- **[【悲報】100万台のAIサービスをスキャンしたら「史上最悪のセキュリティ」だった件](https://qiita.com/emi_ndk/items/0aac69d8a962d2413d9d)** - 公開されているAI推論エンドポイント100万台規模をスキャンした研究結果として、認証なし・デフォルトクレデンシャル・モデルウェイト直接アクセス可能な設定が蔓延しているという調査報告。「動くことを最優先にした」AI API公開が生んでいる深刻なセキュリティ負債を可視化した内容。

- **[MacStudio上のvllm-mlxでQwen系モデルを動かしたベンチマーク結果](https://qiita.com/rairaii/items/756ff06330dd430dd268)** - Apple Silicon（MacStudio M3 Max）上でvllm-mlxとQwen3/Qwen2.5系モデルを動作させ、トークン生成速度・VRAM使用量・量子化レベルごとの品質変化を実測したベンチマーク記事。ローカルLLM推論の「実際に使える選択肢」としてApple Siliconが選択肢に入ることを定量的に示している。

- **[Bedrock Tool Use から Aurora pgvector を直接叩く — Knowledge Bases を使わない RAG の組み立て](https://qiita.com/asahide/items/3e35c460e3b18606f1f3)** - Amazon Bedrockのツール呼び出し機能を使い、Knowledge Basesを介さずにAurora PostgreSQL上のpgvectorを直接クエリするRAGパイプラインの構築手順を解説。マネージドサービス依存を減らしながらカスタムフィルタ・スコアリングロジックを組み込める設計として、RAGの「自作派」向けアーキテクチャ参考になる。

- **[セキュリティテスト — シフトレフトでセキュリティを実装する](https://qiita.com/ryucciarati/items/1feb0fea0ada23bdd55f)** - CI/CDパイプラインの早期フェーズ（「左側」）にSASTツール・依存脆弱性スキャン・IaCセキュリティチェックを組み込むシフトレフト戦略の実践ガイド。AIが大量にコードを生成する時代に、人間のレビューを待つより前にセキュリティゲートを自動化することの重要性がより高まっている。

## AWS 新着

- **[AWS Secrets Manager adds managed external secrets support for Datadog and Snowflake](https://aws.amazon.com/about-aws/whats-new/2026/05/secrets-manager-managed-external-secrets-datadog-snowflake/)** (2026-05-22) - Secrets ManagerがDatadog APIキーとSnowflakeプログラマティックアクセストークンを直接管理できるようになった。サードパーティSaaSのシークレットをAWS側で一元ローテーション・監査でき、マルチサービス環境でのシークレット分散問題を解消できる。

- **[Amazon WorkSpaces Personal now supports WorkSpace Migration for Linux](https://aws.amazon.com/about-aws/whats-new/2026/05/workspaces-linux-migration)** (2026-05-22) - AmazonWorskSpaces PersonalがLinux WorkSpaceのマイグレーション機能に対応。OSバージョンアップや設定変更を伴うLinux VDI移行をダウンタイム最小化しながら実施できるようになり、大規模なLinuxデスクトップ環境の更新管理が現実的になる。

- **[Amazon SageMaker expands domain management across domain types](https://aws.amazon.com/about-aws/whats-new/2026/05/domain-management-iam-idc/)** (2026-05-22) - SageMaker Unified StudioがIAMベースドメインとIdentity Centerベースドメインの両方を、AWSコンソール外部からも管理できるようになった。データエンジニアリングと機械学習のドメインを横断的に統治する管理チームに向けた操作性改善。

- **[AWS Clean Rooms now supports mutable payment configurations for collaborations](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-clean-rooms-mutable-payments)** (2026-05-22) - AWS Clean Roomsのコラボレーションで支払い設定を変更可能（mutable）に。これまでコラボレーション作成後に支払い責任者を変更できなかった制限が解除され、長期的な共同分析プロジェクトでのコスト配分変更が柔軟に対応できるようになった。

## Lobsters

- **[How my minimal, memory-safe Go rsync steers clear of vulnerabilities](https://michael.stapelberg.ch/posts/2026-05-24-minimal-memory-safe-go-rsync-vulns/)** (41pt) - C製の伝統的rsyncが抱える脆弱性履歴を踏まえ、Goで再実装した独自rsync（gokrazy/rsync）がメモリ安全性をどのように確保しているかを解説した記事。過去のrsync CVEを一覧して「Goであれば発生しなかった脆弱性」と「それでも注意が必要な脆弱性」に分類する分析が、メモリ安全言語移植の現実的な効果を理解するのに役立つ。

- **[No Linux support on free version of Vivado 2026.1](https://www.amd.com/en/products/software/adaptive-socs-and-fpgas/vivado/vivado-licensing-options.html)** (12pt) - AMD（旧Xilinx）のFPGA開発ツール「Vivado」の2026.1バージョンから、無償（Standard）ライセンスでのLinuxサポートが廃止されたことを報じる。FPGAコミュニティでは「ハードウェア開発からLinuxが排除される」という懸念が強く、有償ライセンス取得を強制する方向性への批判がLobstersで噴出した。

- **[omarchy is not a distro](https://abyss.fish/your_dotfiles_are_not_a_distro)** (132pt) - 人気のArch Linux自動セットアップスクリプト「omarchy」を「ディストロ」と呼ぶことへの批判的考察。「dotfilesをディストロと呼ぶことで実態以上の信頼性・安全性保証があると錯覚させてしまう」という警告で、ユーザーが意味を理解せず設定を流用する文化への問題提起。Linuxコミュニティで大きく議論を呼んだ。

- **[Declarative partial updates](https://developer.chrome.com/blog/declarative-partial-updates)** (19pt) - Chrome DevチームがHTMLの宣言的部分更新を実現する新提案を解説したブログ記事。JavaScriptなしでサーバーからHTMLの一部分だけを差し替えられる仕組みで、HTMXやTurboが独自実装してきたアプローチをブラウザのネイティブAPIとして標準化しようとする動き。

- **[Debian SE Linux and PinTheft](https://etbe.coker.com.au/2026/05/24/debian-selinux-pintheft/)** (7pt) - DebianのSELinuxポリシーと「PinTheft」脆弱性（スクリーンロック中にBluetoothピンコードを盗む攻撃）の関係を分析した記事。SELinuxが有効な場合に攻撃を緩和できる条件と、Debianのデフォルト設定で緩和が効かない条件が整理されており、SELinuxポリシーの現実的な保護範囲を理解するための参考になる。

## dev.to

- **[Running Gemma 4 on a Modest Machine: Unsloth vs LM Studio vs llama.cpp vs Ollama](https://dev.to/skomfi/running-gemma-4-on-a-modest-machine-unsloth-vs-lm-studio-vs-llamacpp-vs-ollama-11cp)** - 廉価なGPU（VRAM 8GB程度）でGemma 4をローカル実行する際の4ツール比較記事。Unsloth（量子化最適化）・LM Studio（UI重視）・llama.cpp（柔軟性）・Ollama（簡便性）それぞれのスループット・メモリ効率・設定難度を実測。「とりあえず動かしてみたい」ユーザーにはOllama、推論速度を追うならUnslothという結論。

- **[Microsoft burned its 2026 AI budget on Claude Code in six months. That's the Real Story.](https://dev.to/amar_gupta_53ec13017b6ef1/microsoft-burned-its-2026-ai-budget-on-claude-code-in-six-months-thats-the-real-story-49dp)** - Microsoftが2026年のAIツール予算をわずか半年でClaude Code利用費として消費したという情報を基に、「GitHub Copilotがあるのになぜ自社製品でなくAnthropicに流れるか」という問いを考察したブログ。Claude Codeの長期コンテキスト・エージェント能力・開発者体験が既存ツールと質的に異なるという評価が背景にあると論じている。

- **[Introducing LogicGrid — Multi-Agent AI Orchestration for .NET](https://dev.to/logicgriddev/introducing-logicgrid-multi-agent-ai-orchestration-for-net-3380)** - .NETエコシステム向けのマルチエージェントオーケストレーションフレームワーク「LogicGrid」の紹介記事。Pythonが強い既存のエージェントフレームワーク（LangGraph・CrewAI等）に対し、.NETネイティブのタイプセーフAPIでエージェントの依存グラフ定義・並列実行・状態管理を行える点が差別化要素。

- **[I built an in-browser Roku TV remote with ~80 lines of TypeScript](https://dev.to/hisuperdev/i-built-an-in-browser-roku-tv-remote-with-80-lines-of-typescript-heres-how-rokus-ecp-api-56ni)** - RokuデバイスのECP（External Control Protocol）APIを使い、約80行のTypeScriptだけでブラウザから操作できるRokuリモコンを実装した記事。Rokuが同一LAN内に公開しているHTTP APIの仕様を解説しており、スマートデバイスのローカルAPIを活用したホームオートメーション開発の参考になる。

## TechCrunch

- **[TechCrunch Mobility: Robotaxi reality check](https://techcrunch.com/2026/05/24/techcrunch-mobility-robotaxi-reality-check/)** - Waymo・Cruise・Zoox・Motionalといったロボタクシー各社の2026年現在の事業状況を整理した総括記事。Waymoの黒字化達成と他社との格差拡大・Cruiseの再起動失敗・規制環境の不均一性を報告しており、「自動運転タクシーは普及した」という楽観と「一社だけが生き残りそう」という現実のギャップを浮き彫りにしている。

- **[I tried Amazon's Bee wearable and am both intrigued and slightly creeped out](https://techcrunch.com/2026/05/24/i-tried-amazons-bee-wearable-and-am-both-intrigued-and-slightly-creeped-out/)** - Amazonが発表したウェアラブルAIデバイス「Bee」のハンズオンレポート。常時マイクで会話をキャプチャし、Alexaベースの記憶・要約・タスク管理を行う設計で、利便性と「常時録音される不安」のトレードオフをレビュアーが率直に語った。AI Memory wearable市場でのAmazonの本格参入として注目される。

- **[Blue Origin cleared to fly New Glenn mega-rocket after April mishap](https://techcrunch.com/2026/05/22/blue-origin-cleared-to-fly-new-glenn-mega-rocket-after-april-mishap/)** - 4月の打ち上げでエンジン故障によりASTスペースモバイルの衛星を失ったNew Glenn（ジェフ・ベゾスのBlue Origin製大型ロケット）が、FAA調査を経て再度打ち上げ承認を受けたと報道。故障原因はエンジン一基の不具合と特定されており、今後のマニフェスト回復に向けた次の打ち上げ準備が始まっている。

## Ars Technica

- **[Whatever the mirror test tells us, beluga whales pass it](https://arstechnica.com/science/2026/05/belugas-may-pass-the-mirror-test-but-does-the-mirror-test-still-pass/)** - ベルーガ（シロイルカ）が鏡に映る自分を認識する「ミラーテスト」に合格したことを報告しつつ、「ミラーテスト自体の科学的妥当性」を問い直す構成の記事。タコや魚が「合格」するようになった今、ミラーテストが「自己認識」の有効な指標かどうか自体が研究者の間で議論になっているという科学的メタ考察。

- **[US scrambles to stop Internet users re-creating dead pilots' voices from crash investigation docs](https://arstechnica.com/ai/2026/05/ai-users-re-create-dead-pilots-voices-from-crash-investigation-docs/)** - 航空事故調査記録に含まれるコックピット音声記録からAIで死亡パイロットの声を再現しようとする事例が相次ぎ、NTSBが事故調査データベースへのアクセスを一時制限するという異例の措置を取ったことを報告。音声クローンAIが法執行・倫理・プライバシーに同時に衝突する新たな事例として、技術と制度の不整合が鮮明になっている。

- **[Texas AG sues Meta over claims that WhatsApp doesn't provide end-to-end encryption](https://arstechnica.com/security/2026/05/texas-ag-sues-meta-over-claims-that-whatsapp-doesnt-provide-end-to-end-encryption/)** - テキサス州司法長官がWhatsAppの「エンドツーエンド暗号化」の主張は誤解を招くとしてMetaを提訴。バックアップ・ビジネスアカウントとのメッセージ・メタデータにE2Eが適用されない点を根拠に、広告表現の誤りを問う訴訟で、「E2E暗号化」という言葉の法的定義をめぐる重要な判例になりうる。

## 注目トピック

**「声」と「顔」の無断AI利用が同時多発**：今回のフィードで際立つのは、人間の生体情報を無断でAIが模倣・再現するケースが複数ソースで同時に報告されていることだ。日本では声優の音声が「雇用コスト削減」名目でクローンされ（はてブ）、米国では航空事故で亡くなったパイロットの声が事故調査記録から再現されてNTSBが対応に追われ（Ars Technica）、前日のTechCrunchでも同様の事例が報じられていた。いずれも技術的には「できてしまう」ことを法律・倫理・産業慣行が追いかけられていない構造的問題であり、音声・映像クローン技術の利用に関する規制フレームワークの整備が急務だという認識がグローバルで高まっている。

**エージェント開発の「身軽化」トレンド**：Zennでは「Dockerを手放したらAgent開発が身軽になった」「AIエージェントが毎回データを取りに行く設計の限界」、dev.toでは「マルチエージェントオーケストレーション」など、エージェントアーキテクチャに関する実践的な知見が蓄積されつつある。共通するのは「複雑な基盤インフラより、エージェントが自律的に動ける単純な環境の方が効果的」という逆説だ。また「AI予算を半年でClaude Codeが消費した」というdev.toの記事は、エージェントが開発チームの標準装備として既に定着していることを財務的な角度から示している。セキュリティ面では100万台のAI APIスキャンで「史上最悪のセキュリティ」が明らかになった（Qiita）ことも踏まえ、エージェントの普及と同速でセキュリティの基線を引き上げることが求められる局面に入っている。
