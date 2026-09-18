---
title: "Tech Feed ダイジェスト（2026年9月19日）"
date: "2026-09-18T23:19"
category: "summary"
summary: "Jevを巡る独自検証やAgentCore RuntimeのGA、OpenAI/Claudeのエージェントセキュリティ事案など8ソースを横断して整理"
tags: ["ai", "llm", "security", "aws", "devops", "claude-code"]
---

## はてなブックマーク (テクノロジー)
- **[【徹底解説】DeepSeek v4.1 Flashの内部構造【最適化したから解ること】](https://note.com/shi3zblog/n/n6d4fbe03218e)** ([35users](https://b.hatena.ne.jp/entry/s/note.com/shi3zblog/n/n6d4fbe03218e)) - DeepSeek v4.1 Flashの推論高速化のための内部アーキテクチャ最適化を掘り下げた解説記事。MoEルーティングや量子化まわりの工夫を扱っており、モデル最適化の実践知が得られる。
- **[Jevを無理やり言語モデルにしてみた](https://dev.classmethod.jp/articles/jev-forced-language-model/)** ([16users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/jev-forced-language-model/)) - 文章生成をしないTypeSafe AI「Jev」に無理やり自然文を出力させる実験。Jevの判断・確率出力の仕組みを逆手に取った検証で、Jevの内部挙動理解に役立つ。
- **[Valibotはどうやって文字列を数えているのか](https://b.hatena.ne.jp/entry/s/blog.inorinrinrin.com/entry/8e2abf66-324e-4bab-092e-f1fe29f99f96)** ([12users](https://b.hatena.ne.jp/entry/s/blog.inorinrinrin.com/entry/8e2abf66-324e-4bab-092e-f1fe29f99f96)) - バリデーションライブラリValibotの文字数カウント実装を、サロゲートペアや書記素クラスタまで踏み込んで解説。多言語文字列処理の落とし穴を知るのに good。
- **[Ubuntu 24.04.5のリリース、Ubuntu 26.10（stonking）の開発; Rust版coreutilsのcp、mv、rmへの移行、CIX P1の正式サポート](https://b.hatena.ne.jp/entry/s/gihyo.jp/admin/clip/01/ubuntu-topics/202609/18)** ([11users](https://b.hatena.ne.jp/entry/s/gihyo.jp/admin/clip/01/ubuntu-topics/202609/18)) - Ubuntuの点数リリースと次期26.10の開発動向まとめ。coreutilsのRust移行がcp/mv/rmまで拡大している点と、新CPUアーキテクチャCIX P1の正式サポートが実務上のポイント。
- **[Z.aiが中国製AIインフラで「GLM-5.3-Flash」の本番サービスを提供したノウハウを共有、AIエージェントでインフラを管理してNVIDIA GPUと同等まで効率化](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260918-how-glm-built-inference-infrastructure/)** ([7users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260918-how-glm-built-inference-infrastructure/)) - 中国製アクセラレータでLLM推論基盤を運用する際の効率化ノウハウ。AIエージェントによる自動インフラ管理でNVIDIA GPU相当の効率を実現したという具体的な事例。

## Zenn
- **[PRのCI稼働時間を7割削減した話](https://zenn.dev/innovation/articles/e84f8ccca8e6da)** - AIエージェントの実装増加に伴い肥大化したCI時間を、目的を維持したまま144分→39分（73%減）まで削減した具体的な施策集。テスト並列化やキャッシュ戦略の実践例として参考になる。
- **[Xcodeのプロジェクト設定をJSONにする](https://zenn.dev/d_date/articles/b1a7baa74b77da)** - Xcode 27.2以降でproject.pbxprojに代わりJSON形式の.xcprojがデフォルトになる変更を解説。チーム開発で頻発していたpbxprojのコンフリクト問題が解消される見込み。
- **[全社に OpenCode + LiteLLM を導入してコストを抑えつつ AI 活用を進めている話](https://zenn.dev/jtcc/articles/7e74fef42580a1)** - 約200名の全社員向けAI利用をOpenCode + 自前ホストのLiteLLMゲートウェイに統一し、モデル制御と週次予算管理でコストを導入前の1/10以下に抑えた事例。
- **[Cloudflare WorkersでJevを使ったら高速か検証してみた](https://zenn.dev/henteko/articles/1d159d10413312)** - Cloudflare Workers上で直接JevのAPIを呼ぶ方式とAI Gateway経由の方式を比較検証。Jevのサーバーが米西海岸にあるため、日本からのアクセスではリージョン遅延がボトルネックになるという実測結果。
- **[AI ネイティブなデータ分析基盤を作った話](https://zenn.dev/pksha/articles/5a1dc6470019d6)** - 既存のAzure Databricks基盤とは別に、プロダクト特化のデータ分析基盤を2026年仕様で構築した事例。データ量増加に伴う分析環境の限界をどう乗り越えたかを扱う。

## Qiita
- **[Write() で拒否しても、Claude Code は12回とも書き込んだ。効いていたのは Edit() だけだった](https://qiita.com/suwa_nobu/items/e867493a5cbcdfaa40c9)** - Claude Codeの権限ルールの実効性を実際に検証したシリーズの続報。Write()の拒否ルールが機能せず、Edit()の制御だけが効いていたという、パーミッション実装の内部挙動に踏み込んだ内容。
- **[Claude Codeのセッションが消えた！？ フォルダ名の変更が招く落とし穴、原因と2つの対処法](https://qiita.com/ak_wata/items/fb9acd38ccfabfbb7eb2)** - 作業フォルダ名を変更すると会話履歴が一覧から見えなくなる仕組みと、セッションデータ自体は消えていない理由、実際の復旧手順を解説。
- **[DGX Station GB300 を導入しました](https://qiita.com/yasusun/items/3d4d31566ad9a1107216)** - NVIDIA DGX Station GB300を社内AIワークステーションとして導入した際の構成と設置準備をまとめたレポート。オンプレAI基盤構築の実務知見。
- **[Azure 検証環境のコストをリソースグループ単位で毎日通知してみた話](https://qiita.com/HikaruTakahashi/items/824ffd27d4a8b38230a5)** - 自由に作成できる検証環境のリソースが放置されがちな課題に対し、Azure Cost Managementを使ってリソースグループ単位の日次コスト通知を実装した具体例。
- **[管理者と利用者を同時に、しかもそれぞれ複数タブで。諦めた要件をGoogleの実測で見直した話](https://qiita.com/ntaka329/items/bb97dc8046786a99b377)** - 同一ブラウザで複数アカウント・複数タブを同時に使うという要件に対し、Googleの実装を参考にアカウント軸と画面軸の両立を実現した設計事例。

## AWS 新着
- **[The new AgentCore Runtime is now available in Amazon Bedrock AgentCore](https://aws.amazon.com/about-aws/whats-new/2026/09/new-agentcore-runtime-generally-available)** (2026-09-18) - Bedrock AgentCoreのサーバーレスmicroVM実行基盤である次世代AgentCore RuntimeがGA。エラスティックなメモリ管理を含み、エージェント実行基盤としての本番投入がしやすくなる。
- **[AWS Continuum now supports credential testing and accessible domain suggestions](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-security-agent/)** (2026-09-18) - 開発ライフサイクル全体でオンデマンドのペネトレーションテストを行うフロンティアエージェント「AWS Continuum」が、実際の攻撃者視点に近い認証情報テストとアクセス可能ドメインの提案に対応。
- **[Amazon SNS now supports message payloads up to 1 MiB](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sns-1mib-support)** (2026-09-18) - SNSのメッセージペイロード上限が従来の256KiBから1MiBへと4倍に拡大。大きめのイベントペイロードをそのままパブリッシュできるようになり、変換・分割処理を省ける場面が増える。
- **[AWS Direct Connect announces flat-rate pricing for dedicated connections](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-direct-connect-announces-flat-rate-pricing/)** (2026-09-15) - 10G/100Gの専用線接続に定額制の新料金体系を導入。従量制中心だったDirect Connectのコスト予測がしやすくなる。
- **[AWS Transform for .NET now generates unit tests for modernized code](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-transform-net-unit-tests)** (2026-09-10) - .NETモダナイゼーションツールAWS Transformが、変換後コードのユニットテストを自動生成する機能を追加。CLIからのワンライン実行にも対応し、レガシー移行の検証工数を削減する狙い。

## Lobsters
- **[Typst makes big strides](https://lwn.net/Articles/1092993/)** (67pt) - 組版システムTypstの最新動向をLWNがまとめた記事。LaTeXに代わる選択肢として、アクセシビリティ対応や機能拡張が着実に進んでいる状況を紹介している。
- **[Benchmarking Wild vs Mold](https://davidlattimore.github.io/posts/2026/09/18/benchmarking-wild-vs-mold.html)** (23pt) - 高速リンカのWildとMoldを実際にベンチマーク比較した記事。リンク時間の差がビルド全体の体感速度にどう効くかを具体的な数値で示している。
- **[I don't like passkeys](https://hawksley.dev/blog/i-dont-like-passkeys)** (38pt) - パスキーの実運用における不満点をまとめたエッセイ。デバイス間同期やリカバリー体験の悪さなど、パスキー普及の障壁になっているUX上の課題を指摘している。
- **[The C++20's u8/char8_t Backward-Compatibility Fiasco](https://giodicanio.com/2026/09/11/the-c-plus-plus-20-s-u8-char8_t-fiasco/)** (13pt) - C++20で導入されたchar8_t型が既存コードとの後方互換性を壊した経緯を解説。標準化プロセスにおける文字列型変更の難しさを扱う。
- **[A quartet of Linux local root vulns: DirtyAH6, PPPoEject, TUNderflow, and DiagSpill](https://seclists.org/oss-sec/2026/q3/822)** (7pt) - Linuxカーネルで見つかった4つのローカル権限昇格脆弱性をまとめたセキュリティ勧告。いずれも比較的地味なサブシステム（PPPoE、TUN、診断機能）が起点になっている。

## dev.to
- **[An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)** - AMD Instinct MI300XをPython製MCPサーバー経由で計測し、fp8はbf16比1.77倍、int8はfp8と同等スペック表記なのに実測0.69倍、fp4はそもそもこのシリコンでは動かないことを示したベンチマーク記事。
- **[ELT with Dataform on Google Cloud](https://dev.to/gde/elt-with-dataform-on-google-cloud-kc9)** - DataformとBigQueryを使った実務的なELTパイプラインの構築例。ステージング/マート層の設計、GitHub連携、Terraformでのプロビジョニングまで一通り扱っている。

※ dev.toは今回、過去レポートとの重複記事や著者・組織の分散ルールによる除外が多く、新規に条件を満たす記事が2件のみだった。

## TechCrunch
- **[AI Hallucination Nearly Triggers US Military Operation](https://techcrunch.com/2026/09/18/ai-hallucination-nearly-triggers-us-military-operation/)** - LLMのハルシネーションが実際の米軍作戦を誤って引き起こしかけた事例。GovAIの研究者が「兵士はLLMに内在する不確実性を理解する必要がある」と警鐘を鳴らしている。
- **[Google's new 'CC' is an AI agent that helps families run their households](https://techcrunch.com/2026/09/18/googles-new-cc-is-an-ai-agent-that-helps-families-run-their-households/)** - Googleの家庭向けAIエージェント「CC」が、家族間でメール・予定・タスクを共有し、カレンダー管理や買い物リスト作成まで担う方向にリニューアル。同じ件をArs Technicaも別角度（発表時点の機能概要）で報じている。
- **[World model companies are keeping a lot of secrets](https://techcrunch.com/2026/09/18/world-model-companies-are-keeping-a-lot-of-secrets/)** - 潤沢な資金と注目を集める「world model」系スタートアップが、創業者からデータ提供元まで一様に技術詳細を明かさない現状を指摘した記事。競争が激化する一方で技術の中身が見えにくくなっている。
- **[Joby Aviation's 3,100-mile autonomous flight signals its push beyond electric air taxis](https://techcrunch.com/2026/09/18/joby-aviations-3100-mile-autonomous-flight-signals-its-push-beyond-electric-air-taxis/)** - Joby Aviationの自律飛行技術を搭載した機体が、人の操縦介入なしに全米横断飛行を達成。電動垂直離着陸機（eVTOL）の枠を超えた自律飛行技術への展開を示す。

## Ars Technica
- **[Researchers used Claude to hack OpenAI](https://arstechnica.com/ai/2026/09/researchers-used-claude-to-hack-openai/)** - セキュリティ研究者がClaudeを使ってOpenAI従業員アカウントおよび機密のGitHubデータにアクセスした事例。AIエージェントが攻撃ツールとして実戦投入されている現状を示す。
- **[Small AI models let drones autonomously identify and attack battlefield targets](https://arstechnica.com/ai/2026/09/nato-backed-startup-adapts-ai-for-autonomous-drone-recon-and-attack-missions/)** - NATO系スタートアップScaleoutが、小型AIモデルを分散学習させて軍事基地・ドローンに配備する取り組み。エッジ側で完結する軽量AI推論の軍事転用事例。
- **[US government website used Chinese model the FBI called "malicious"](https://arstechnica.com/tech-policy/2026/09/us-government-website-used-chinese-model-the-fbi-called-malicious/)** - 米連邦官報サイトが、FBIが「悪意がある」と名指ししたオープンソースの中国製AI検索ツールを一時的に使用していたことが判明。AIサプライチェーンのガバナンス上の盲点を示す。
- **[VMware migration reduces Tottenham Hotspur's licensing fees by 85 percent](https://arstechnica.com/information-technology/2026/09/vmware-migration-reduces-tottenham-hotspurs-licensing-fees-by-85-percent/)** - Broadcom買収後のVMwareライセンス費用高騰を受け、プロサッカークラブのCTOが移行によりライセンス費用を85%削減した事例。Broadcom体制への企業側の不満が具体的な数字で表れている。
- **[Inaudible sounds used to fingerprint browsers catch AliExpress red-handed](https://arstechnica.com/security/2026/08/aliexpress-caught-fingerprinting-visitors-after-sending-inaudible-sounds-to-browsers/)** - AliExpressが可聴域外の音声信号をブラウザに送信してユーザーを識別する、旧知の手法ながら現役のフィンガープリンティング技術を使っていたことが発覚。

## 注目トピック

TypeSafe AIの新モデル「Jev」を巡る開発者コミュニティの検証が今日も続いており、Cloudflare Workers経由のレイテンシ実測や、文章生成しないJevを無理やり言語モデル的に使う実験など、単なる紹介記事から一歩進んだ「実際に触ってみた」系のコンテンツが増えてきている。地理的に米西海岸にサーバーがあることによるレイテンシの制約など、実運用上の具体的な知見が蓄積され始めている段階と言える。

もう一つの通底テーマは、AIエージェントのセキュリティリスクが継続的なニュースの柱になっていることだ。Claudeを使ってOpenAIのアカウントへアクセスした研究、軍事ドローンへのエッジAI搭載、FBIが警告する中国製AIモデルを政府サイトが使っていた件など、エージェントや生成AIモデル自体が攻撃面・攻撃ツールの両方として扱われる報道が連日続いている。あわせて、Claude Codeの権限ルールの実効性を実地検証するQiita記事のように、エージェント型開発ツールの内部挙動を開発者自身が検証する動きも活発で、「AIエージェントを本番でどう安全に運用するか」という関心が、実装のディテールにまで踏み込んで語られ始めている。
