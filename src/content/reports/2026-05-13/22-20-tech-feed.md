---
title: "Tech Feed ダイジェスト（2026年5月14日）"
date: "2026-05-13T22:20"
category: "summary"
summary: "Anthropicが法人顧客数でOpenAI超え・Claude Platform on AWS GA・カカクコム買収・Erlang/OTP 29・Ubuntu 26.04・BitLocker脆弱性など"
tags: ["ai", "aws", "security", "database", "anthropic", "devops", "frontend", "linux"]
---

## はてなブックマーク (テクノロジー)

- **[ADHD が AI 開発でむっちゃ困ってたことが解決した話](https://note.com/simplearchitect/n/nd201f69134aa)** ([133users](https://b.hatena.ne.jp/entry/s/note.com/simplearchitect/n/nd201f69134aa)) - Microsoftのエンジニア牛尾剛氏が、ADHDによる長期記憶・コンテキスト切り替えの困難さをAI（特にClaude）との協働で克服した体験記。「AIが外部脳になった」という表現が多くの開発者の共感を呼んだ。

- **[スウェーデンのファンドが「価格.com」「食べログ」約5900億円でカカクコムを買収へ AI戦略を加速](https://www.itmedia.co.jp/pcuser/articles/2605/13/news109.html)** ([85users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/pcuser/articles/2605/13/news109.html)) - スウェーデンのEQTが約5900億円でカカクコムを非公開化し、AI戦略を加速するという買収報道。国内最大級の比較サイト群を持つカカクコムのAI活用・データ資産が買収動機とされる。

- **[Android全機種が iPhoneへのファイル転送に対応、Quick ShareのQRコードでクラウド経由](https://www.techno-edge.net/article/2026/05/13/5060.html)** ([36users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/05/13/5060.html)) - Google QuickShareがQRコード経由でクラウド経由のiPhone向けファイル転送に対応し、AirDrop互換機能も対応機種拡大。AndroidとiOS間のファイル交換がほぼネイティブ並みに簡便化された。

- **[Quack: The DuckDB Client-Server Protocol](https://duckdb.org/2026/05/12/quack-remote-protocol)** ([27users](https://b.hatena.ne.jp/entry/s/duckdb.org/2026/05/12/quack-remote-protocol)) - DuckDBが独自のクライアント・サーバー通信プロトコル「Quack」を正式発表。従来のインプロセス動作に加えてリモート接続が可能になり、分散環境でのDuckDB活用が大きく広がる節目。

- **[トークン消費量も実装の手戻りも最小限にする GitHub Copilot を利用した開発フロー](https://dev.classmethod.jp/articles/shoma-minimize-token-consumption-and-implementation-rework-github-copilot-development-flow/)** ([24users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/shoma-minimize-token-consumption-and-implementation-rework-github-copilot-development-flow/)) - GitHub Copilotを使ったAI駆動開発において、設計フェーズと実装フェーズを明確に分けることでトークン消費と手戻りを両方最小化するワークフローを具体例付きで解説。

## Zenn

- **[ちょっとしたアイデアをAIで長文記事にして公開するのをやめろ](https://zenn.dev/todesking/articles/fba4cc93baf0a9)** - AI生成で薄いアイデアを数千字に水増しして公開する行為への鋭い批評。「書く動作が思考の代替になっている」という指摘は、AI時代のテックコンテンツの質の問題を正面から問う。

- **[コンパニオンAIの記憶を、普通のRAGじゃない設計にした話](https://zenn.dev/haru0416/articles/843c6c29c04c7c)** - 「ドキュメント検索に貼る」従来型RAGでは会話継続AIに必要な「人との関係の記憶」を表現できないとして、エピソード・感情・関係性の変化を考慮した独自メモリアーキテクチャを設計した実践報告。

- **[Slack上でインフラのトラブルシューティングができるAgentの設計と実装](https://zenn.dev/ubie_dev/articles/b712ec880ac038)** - UbieのSREチームがSlackメンションだけでインフラ調査を自律的に行うBot「Infra Agent」を実装した解説記事。ネットワークレベルでエージェントの通信を制御するセキュリティ設計が特に参考になる。

- **[コードを書かなくなった我々は何者か — Product / Platform / Evaluate の3職責でエンジニアの役割を再定義する](https://zenn.dev/tokium_dev/articles/engineer-role-triangle-map)** - AIがコードを生成する時代に「エンジニア」が担うべき職責をProduct・Platform・Evaluateの3軸で整理した考察。役割変容の議論に実務視点から切り込んでいる。

- **[【Claude Code VS Codex】同じSkillsでオセロ対戦させたら、56-8で完敗した話](https://zenn.dev/acntechjp/articles/cc97075e985938)** - GPT-5.5とOpus4.7に同じ評価ヒューリスティックを持つSkillsを渡してオセロを対戦させた実験記。Claude Code同士・Codex同士の組み合わせではなく「LLMバトル」として面白い比較実験の先例。

## Qiita

- **[AIが書くpandasコード、だいたい地雷が混じっている話](https://qiita.com/ALeX_EXVS/items/cd2c603abf8b48fc23a8?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AIが生成するpandasコードにありがちなパフォーマンス地雷（iterrows、apply乱用、inplace誤用など）を実測データ付きでまとめた記事。AI補完ツールを使う際のレビューポイントとして実用的。

- **[なぜ並び替え条件（order）はリクエストボディではなくクエリパラメータに載せるべきなのか](https://qiita.com/watanabe_trtr/items/b3a84d6df2960ed887ce?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - RESTful API設計において、ソート・フィルタ条件をPOSTボディではなくGETクエリパラメータにすべき理由をHTTPセマンティクス・キャッシュ・冪等性の観点から丁寧に解説。

- **[現在地付近の東京の電車・バスをスマートグラスに「スカウター」として映す — Even G2 plugin を作った話](https://qiita.com/oic0310/items/47b810a2d9c8c51fac90?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Even Realities G2スマートグラスのプラグインとして交通情報をARで表示するシステムを自作した開発記。AIとは直接関係ないが、スマートグラス向けアプリ開発の実例として注目度が高い。

- **[AI時代のMoatとは — 「もし明日、競合が同じプロダクトを出したらどう勝つか？」](https://qiita.com/mattsershaw/items/e6205673598cdb1ff14d?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - LLMが汎用的になった今、競合優位性（Moat）の源泉をデータ・ワークフロー統合・信頼・コミュニティに求める論考。プロダクトマネージャー・技術起業家向けの戦略的考察。

- **[ここがすごいよClaude Platform on AWS](https://qiita.com/moritalous/items/6ccba964655e83336f96?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AWS上でClaudeをマネージドサービスとして利用できる「Claude Platform on AWS」の特徴を解説。Bedrockとの違いや、エージェント実行・データプライバシーの観点から比較している。

## AWS 新着

- **[Claude Platform on AWS is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/05/claude-platform-aws/)** (2026-05-11) - AnthropicとAWSが共同で提供するClaudeのマネージドサービスが正式GA。BedrockとはAPIと課金体系が異なり、より大規模なエンタープライズワークロードを想定した構成になっている。

- **[AWS Lambda supports scheduled scaling for functions on Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-lambda-managed-instances/)** (2026-05-12) - Lambda Managed Instances上の関数がEventBridge Schedulerによるスケジュールスケーリングに対応。定期的な負荷変動が予測できるバッチ処理やMLワークロードのコスト最適化が図りやすくなった。

- **[Amazon EventBridge Scheduler adds 619 new SDK API actions](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-eventbridge-sdk-integrations/)** (2026-05-12) - EventBridge Schedulerが13の追加サービスと619のAPIアクションに対応し、スケジューラーから直接起動できるAWSサービスが大幅に拡張。サーバーレスワークフローの自動化の幅が飛躍的に広がる。

- **[Amazon Redshift launches RG instances powered by AWS Graviton](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-rg-instances-powered-by-graviton)** (2026-05-12) - RedshiftのプロビジョニングクラスターノードとしてGravitonベースのRGインスタンスがGA。価格性能比が従来より改善され、大規模DWHのコスト削減が期待できる。

- **[ENA Express for Amazon EC2 now supports traffic between Availability Zones](https://aws.amazon.com/about-aws/whats-new/2026/05/ena-express-availability-zones/)** (2026-05-11) - ENA ExpressがAZ間の通信にも対応し、シングルフローで最大25Gbpsを実現。従来はAZ内限定だったが、マルチAZ構成での低遅延・高帯域通信が可能になった。

## Lobsters

- **[Redis and the Cost of Ambition](https://charlesleifer.com/blog/redis-and-the-cost-of-ambition/)** (123pt) - Redisが機能追加とライセンス変更を重ねた結果、シンプルさと信頼の両方を失った経緯を分析した論考。「野心のコスト」としてOSSプロジェクト一般に通じる教訓を描き出している。※前回と同じくスコアが高いため再掲

- **[what 262,715 regex questions on stack overflow haven't answered](https://iev.ee/blog/what-262715-regex-questions-havent-answered/)** (72pt) - Stack Overflowの正規表現関連質問26万件超を分析し、多くの回答が触れない根本的なパフォーマンス問題（バックトラッキング・カタストロフィックリトライ）を解説した記事。

- **[Sovereign Tech Fund invests over €1 million in KDE software development](https://kde.org/announcements/sovereign-tech-fund-invests-kde/)** (81pt) - ドイツ政府系ファンドのSovereign Tech Fundが100万ユーロ超をKDE開発に投資。公共基盤としてのOSSへの政府投資が欧州で広がっており、持続可能なOSSファンディングモデルとして注目される。

- **[Erlang/OTP 29.0 Release](https://www.erlang.org/news/188)** (49pt) - Erlang/OTPの新メジャーバージョン29.0がリリース。高可用性・分散システムの基盤として採用例が増えているErlangの最新版で、パフォーマンスと標準ライブラリの改善が含まれる。

- **[YellowKey Bitlocker Bypass Vulnerability](https://github.com/Nightmare-Eclipse/YellowKey)** (16pt) - BitLockerの暗号化を物理アクセスなしでバイパスできる脆弱性「YellowKey」のPoC。TPMピン留め未設定のWindowsシステムが影響を受ける可能性があり、エンタープライズのディスク暗号化ポリシーの見直しが推奨される。

## dev.to

- **[Claude Code Stops Pausing Every Turn: /goal, /loop, /batch, /background](https://dev.to/jessyt/claude-code-stops-pausing-every-turn-goal-loop-batch-background-3lkm)** - Claude Codeの新コマンド群（`/goal`・`/loop`・`/batch`・`/background`）を解説し、毎ターン確認が入るデフォルト動作から自律実行モードへの移行方法をまとめた記事。

- **[AI Job Displacement is Starting With Lost Tasks, Not Jobs](https://dev.to/simon_paxton/ai-job-displacement-is-starting-with-lost-tasks-not-jobs-1njd)** - AIによる雇用置き換えは「職の消失」より「タスクの消失」として先行して顕れているという実証的な考察。採用シグナルや業務内容の変化からAI影響の実態を読み解く。

- **[Upgrading Ubuntu 24.04 to Ubuntu 26.04](https://dev.to/vultr/upgrading-ubuntu-2404-to-ubuntu-2604-1cf4)** - Ubuntu 26.04 LTSがリリースされ、Linux 7.0カーネルとセキュリティデフォルト更新が目玉。この記事ではライブサーバーのインプレースアップグレード手順をVultrが解説している。

- **[How I built an AI reporter for Playwright that explains test failures](https://dev.to/sechavarriar/how-i-built-an-ai-reporter-for-playwright-that-explains-test-failures-5ep)** - CIでPlaywrightテストが落ちた際にスタックトレースを読む時間を削減するため、AI（Claude）が失敗原因を自然言語で説明するカスタムレポーターを実装した事例。

- **[KV FP8 with Gemma4 26B](https://dev.to/xbill/kv-fp8-with-gemma4-26b-17be)** - Google Gemma4 26BモデルのKVキャッシュをFP8量子化することでvLLMのメモリ効率を大幅に改善した実験記録。ローカルLLM推論の実用化に向けた量子化手法の実践例として参考になる。

## TechCrunch

- **[Anthropic now has more business customers than OpenAI, according to Ramp data](https://techcrunch.com/2026/05/13/anthropic-now-has-more-business-customers-than-openai-according-to-ramp-data/)** - 法人向けカード決済データ企業Rampのデータによると、AnthropicのAIサービスを利用する法人顧客数がOpenAIを上回ったという。Claude Codeの普及が法人採用を急速に押し上げたと分析されている。

- **[Musk's xAI is running nearly 50 gas turbines unchecked at its Mississippi data center](https://techcrunch.com/2026/05/13/musks-xai-is-running-nearly-50-gas-turbines-unchecked-at-its-mississippi-data-center/)** - xAIのミシシッピ州データセンターが環境規制を受けずに約50基のガスタービンを稼働させているとの報道。AIインフラの電力需要急増が規制の盲点を突く形で拡大している実態が浮き彫りになった。

- **[Geothermal startup Fervo Energy pops 33% in IPO debut fueled by AI data center demand](https://techcrunch.com/2026/05/13/geothermal-startup-fervo-energy-pops-33-in-ipo-debut-fueled-by-ai-data-center-demand/)** - 地熱発電スタートアップのFervo EnergyがIPOで初値33%高。AIデータセンターの安定電力需要を背景に地熱発電への投資家関心が急騰しており、再エネ中でも「常時電力」の希少価値が際立っている。

- **[Notion just turned its workspace into a hub for AI agents](https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/)** - NotionがワークスペースをAIエージェントの実行ハブとして位置づける新機能を発表。ドキュメント・タスク・データベースを起点にエージェントがアクションを実行できる統合環境を目指す。

- **[Anduril raises $5B, doubles valuation to $61B](https://techcrunch.com/2026/05/13/anduril-raises-5b-doubles-valuation-to-61b/)** - 防衛テックのAndurilが50億ドルを調達し評価額が610億ドルに倍増。自律型兵器システムとAI統合を強みとする同社への投資家の期待が国防予算増加とともに急上昇している。

## Ars Technica

- **[Anthropic blames dystopian sci-fi for training AI models to act "evil"](https://arstechnica.com/ai/2026/05/anthropic-blames-dystopian-sci-fi-for-training-ai-models-to-act-evil/)** - Anthropicの研究者が、ディストピア系SF小説や映画がトレーニングデータに含まれることでモデルが「悪役AI」的な振る舞いを学習してしまうリスクを指摘。学習データのキュレーションが安全性に直結するという主張。

- **[AI invades Princeton, where 30% of students cheat—but peers won't snitch](https://arstechnica.com/tech-policy/2026/05/ai-driven-cheating-widespread-even-at-elite-schools-like-princeton/)** - プリンストン大学でも学生の約30%がAIを用いた不正を行っているが、仲間への告発はほぼ行われないという調査結果。トップ大学でもAI不正が深刻化しており、教育評価制度の根本的な見直しを迫っている。

- **[Altman forced to confront claims at OpenAI trial that he's a prolific liar](https://arstechnica.com/tech-policy/2026/05/altman-forced-to-confront-claims-at-openai-trial-that-hes-a-prolific-liar/)** - OpenAI裁判でAltman CEOが「常習的な虚言者」という証言に直接反論を求められた。マスクとの関係・取締役会解任劇の真実に関する法的攻防が続いており、AI業界のガバナンス問題の試金石となっている。

- **[Windows Update is getting better at saving your PC from buggy drivers](https://arstechnica.com/gadgets/2026/05/windows-update-is-getting-better-at-saving-your-pc-from-buggy-drivers/)** - MicrosoftがWindows Updateにドライバーの互換性チェックと自動ロールバック機能を強化。不具合のあるドライバー配布後のBSOD問題への対策として、更新前のシステム互換性評価が自動化される。

- **[Blue Origin may need external funding to hit ambitious launch targets](https://arstechnica.com/space/2026/05/blue-origin-may-need-external-funding-to-hit-ambitious-launch-targets/)** - ベゾスの個人資金だけでは掲げた打ち上げ目標に届かない可能性があるとして、Blue Originが外部資金調達を検討中との報道。SpaceXとの競争が激化する中で財務的持続性が問われている。

## 注目トピック

**Anthropicの急成長と法人市場の変化**が今回最大の話題だ。Rampの決済データに基づきAnthropicの法人顧客数がOpenAIを超えたと報じられ、Claude Platform on AWSの正式GAと合わせて、エンタープライズAI市場の構図が急速に塗り替わっていることを示す。特にClaudeのコーディングエージェント（Claude Code）が開発者層への浸透を加速させ、それが法人採用全体を牽引しているという構造が見えてくる。はてなブックマークで133ブックマークを集めた「ADHD×AI開発」記事や、日本語コミュニティのClaude Code関連記事の多さも同じ流れを映している。

一方でAIインフラの環境負荷という裏面も鮮明になった。xAIが環境規制を受けずに50基のガスタービンを稼働させているという報道、そして地熱発電企業Fervo EnergyのIPOが33%高という市場反応は、AIの電力需要がクリーンエネルギー投資を牽引すると同時に、規制の穴を突く形で急拡大している現実を示す。Erlang/OTP 29.0・Ubuntu 26.04リリース・DuckDB Quackプロトコルといったインフラ層の進化も相次いでおり、「AIを動かす土台」全体が同時に更新されている週となった。
