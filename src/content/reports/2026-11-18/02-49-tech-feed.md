---
title: "Tech Feed ダイジェスト（2026年11月18日）"
date: "2026-11-18T02:49"
category: "summary"
summary: "oxc の tsrs、MS の MAI Code 2、Java4Shell、AWS の JWT authorizer・Kinesis queues など 8 ソースの技術トピックを厳選"
tags: ["ai", "security", "aws", "rust", "typescript", "devops", "agents"]
---

## はてなブックマーク (テクノロジー)
- **[Faster type-aware linting with tsrs](https://oxc.rs/blog/2026-11-17-faster-type-aware-linting-with-tsrs)** ([22users](https://b.hatena.ne.jp/entry/s/oxc.rs/blog/2026-11-17-faster-type-aware-linting-with-tsrs)) - Oxc チームによる、型情報を使う lint（type-aware linting）の高速化を扱うブログ。タイトルの tsrs が高速化の中心になる。JS/TS ツールチェーンの Rust 化が lint の型解析にも及ぶ動きとして追える。
- **[［速報］マイクロソフト、コーディング用AIモデルとして高性能かつ低価格「MAI Code 2」「MAI Code 2 Flash」発表](https://www.publickey1.jp/blog/26/aimai_code_2mai_code_2_flash.html)** ([23users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/aimai_code_2mai_code_2_flash.html)) - Microsoft が自社開発のコーディング特化モデル 2 種を発表した。タイトルでは高性能かつ低価格を打ち出しており、コーディングエージェントのモデル選択肢が増える。
- **[PowerShell 7 is coming to Windows](https://devblogs.microsoft.com/powershell/powershell-7-coming-to-windows/)** ([9users](https://b.hatena.ne.jp/entry/s/devblogs.microsoft.com/powershell/powershell-7-coming-to-windows/)) - PowerShell チームの公式ブログ。タイトルどおり、Windows への PowerShell 7 の組み込みを告知している。Windows 運用や自動化スクリプトの前提環境に影響しうる。
- **[GitHub - cisco-ai-defense/project-quarry: Detection DSL and engine for AI agents](https://github.com/cisco-ai-defense/project-quarry)** ([5users](https://b.hatena.ne.jp/entry/s/github.com/cisco-ai-defense/project-quarry)) - Cisco AI Defense による、AI エージェントの挙動を検知するための DSL とエンジン。エージェントのセキュリティ監視をルールとして記述する方向のツール。
- **[ホワイトハッカー報奨制度の中止相次ぐ　AIがバグ発見、変わる役割](https://www.nikkei.com/article/DGXZQOUC097UG0Z01C26A1000000/)** ([13users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOUC097UG0Z01C26A1000000/)) - AI が脆弱性を見つけるようになり、バグ報奨制度の中止が相次いでいるという報道。脆弱性発見のコスト構造とセキュリティ研究者の役割の変化を扱う。

## Zenn
- **[L40S 1台で社内RAGは何人まで使えるか](https://zenn.dev/epicai_techblog/articles/29b509117755af)** - 社内 LLM 導入でよく出る「このGPUで何人まで使えるか」を、実利用に近い条件で計測した記事。埋め込みモデルを同じ GPU で動かすかどうかが結果に影響する点も論点になっている。
- **[OpenTelemetry×Cloudflareで組織のClaude Code利用ログを収集する](https://zenn.dev/gemcook/articles/claude-code-otel-cloudflare)** - Claude Code の OpenTelemetry 対応を使い、全社の利用状況を Cloudflare 上で収集する仕組みの「収集編」。方式の選定理由から説明している。
- **[Software Factoryの先へ：全社の仕事をAI-NativeにするUbieの内製クラウドエージェント基盤](https://zenn.dev/ubie_dev/articles/45501469c9c044)** - Ubie CTO による、Web UI や Slack を起点に動くクラウドエージェント基盤を 3 年かけて内製してきた経緯の紹介。クラウド型エンジニアリングエージェント Uvin からの発展を扱う。
- **[フロントエンドのフレームワークを、安全に段階的に入れ替える](https://zenn.dev/yasuakiomokawa/articles/de83bb4c4ea928)** - React などで書いた画面を別フレームワークへ少しずつ移す方法を、feature flag を軸に整理した記事。途中で止めても安全かをマネージャー向けにも説明している。
- **[物理世界とAIをつなぐ：可視化で学ぶカメラ・座標系・運動制御入門](https://zenn.dev/turing_motors/articles/cea9e3c85611b2)** - E2E 自動運転 AI の予測軌跡をカメラ映像に重ねる可視化を題材に、カメラ・座標系・運動制御の基礎を解説する。生の座標列から挙動を読み取りにくい問題を可視化で解く。

## Qiita
- **[【予習特集】IETF 127 高機能暗号・新しい暗号利用 分析 ― ゼロ知識証明の部品が CFRG に揃う](https://qiita.com/satokan3/items/a3ec7c3b031afbc78796)** - IETF 127 に向けて、ゼロ知識証明や匿名クレデンシャルなど高機能暗号の標準化動向を分析した記事。冒頭抜粋によると、研究段階だった暗号がトークンなどの実用に近づいている点を扱う。
- **[【AWS】CloudWatch Omni、なんか良さそうなので触ってみた！](https://qiita.com/kuracchi_enj/items/f771a426c68df7972ba4)** - 9 月末に提供開始された CloudWatch Omni を実際に触ってみた検証記事。冒頭抜粋の範囲では機能の詳細は読み取れない。
- **[APEXlangでVibe Coding：ADBの機能を組み合わせて、都バスの運行を可視化してみた](https://qiita.com/araidon/items/a18e9556db3297b7f790)** - Oracle の Autonomous AI Database が持つ Spatial、グラフ、定期実行、外部 API 呼び出しを組み合わせ、都バスの運行を可視化した事例。
- **[Everything Claude Code（ECC）入門：ルール・スキル・フックで開発環境を整える](https://qiita.com/takuya035035/items/8a43c6f44aa8a9f6ea0d)** - Claude Code に毎回伝えるプロジェクトの決まりを、ルール・スキル・フックとして整える ECC の入門。既存パターンの確認、再現テストの保存、レビュー観点の指示が例に挙がっている。

## AWS 新着
- **[Amazon API Gateway REST APIs now support JWT authorizers](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-rest-jwt-authorizers/)** (2026-11-17) - REST API に、JWT を直接検証するネイティブの authorizer タイプが加わった。これまで OIDC などのトークン検証に必要だった Lambda authorizer が不要になる。
- **[Amazon DynamoDB caching is now available with Amazon ElastiCache Serverless for Valkey](https://aws.amazon.com/about-aws/whats-new/2026/11/dynamodb-caching-elasticache/)** (2026-11-17) - ElastiCache Serverless for Valkey を使った DynamoDB キャッシュが GA。DAX に代わるサーバーレスの選択肢として、ミリ秒未満のレイテンシを謳う。
- **[Amazon Kinesis Data Streams announces queues to simplify and reduce costs of real-time processing](https://aws.amazon.com/about-aws/whats-new/2026/11/kinesis-data-streams-queues/)** (2026-11-17) - Kinesis Data Streams に queues が追加され、レコードごとの配信状態を追跡できるようになった。ストリーム処理をより簡単かつ低コストにする機能。
- **[Amazon EKS Auto Mode now rightsizes Pods to reduce compute costs (Preview)](https://aws.amazon.com/about-aws/whats-new/2026/11/eks-auto-mode-pod-rightsizing-preview/)** (2026-11-17) - EKS Auto Mode が実使用量に基づいて Pod の CPU・メモリ requests を自動で適正化する（Preview）。過剰確保によるコストを減らす。
- **[AWS announces general availability of AWS Interconnect - multicloud connectivity with Microsoft Azure](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-announces-AWS-interconnect-multicloud-azure-ga/)** (2026-11-17) - AWS と Azure をつなぐマルチクラウド接続サービスの AWS Interconnect が GA した。クラウド間のプライベート接続を前提にした設計が可能になる。

## Lobsters
- **[Java4Shell: Write once, RCE everywhere](https://calif.io/java4shell/)** (25pt) - Java の「Java4Shell」脆弱性の技術解説。はてブでは Oracle の正式公表（CVE-2026-114938）が報じられており、同じ件を別角度で扱っている。
- **[Phrack 73](https://phrack.org/issues/73/introduction_md.html)** (37pt) - ハッカー向け老舗電子雑誌 Phrack の第 73 号が公開された。
- **[How to Bypass Rust's Orphan Rule](https://edvong.com/bypass-orphan-rule/)** (19pt) - Rust のトレイト実装を制限する孤児ルール（orphan rule）を回避する手法を解説した記事。
- **[On Leaving Swift for Rust](https://www.prux.org/posts/goodbye-swift-hello-rust/)** (23pt) - モバイル開発で Swift から Rust へ移った経験談。言語選択の判断材料になる。
- **[Critical Red Hat Quay Flaw Lets Attackers Read and Overwrite All Private Container Images in a Registry](https://thehackernews.com/2026/11/critical-red-hat-quay-flaw-lets.html)** (8pt) - Red Hat Quay に、レジストリ内の全プライベートコンテナイメージを読み書きできる重大な脆弱性が見つかった。レジストリ運用者は対応状況を確認したい。

## dev.to
- **[An MCP Tool Call Can Resolve and Still Fail](https://dev.to/gde/an-mcp-tool-call-can-resolve-and-still-fail-52kc)** - MCP のツール呼び出しは await が完了しトレースに span が残っても、結果として失敗している場合があるという指摘。TypeScript とテストの観点から成功判定の考え方を整理する。
- **[Can't Beat Free: Gemma 4 31B on AMD Token Lab, with a Local Chat Page and an ADK Agent](https://dev.to/gde/cant-beat-free-gemma-4-31b-on-amd-token-lab-with-a-local-chat-page-and-an-adk-agent-c5b)** - AMD GPU 上の無料 OpenAI 互換 API「AMD Token Lab」で Gemma 4 31B を使う手順。API キーをブラウザに出さないローカルチャットページと、ADK エージェントの例を含む。
- **[C# Without a Project File: File-Based Apps in .NET 11 (a 5-Minute Refresh)](https://dev.to/mrviduus/c-without-a-project-file-file-based-apps-in-net-11-a-5-minute-refresh-1pif)** - .NET 10 から `dotnet run app.cs` で .sln/.csproj なしに C# ファイルを実行できる。.NET 11 での file-based apps の最新状況を短くまとめている。
- **[A reader found a hole in our AI inbox. Postgres closes it now](https://dev.to/appwebseo/a-reader-found-a-hole-in-our-ai-inbox-postgres-closes-it-now-10lm)** - AI の提案を承認するまでの間にデータが変わると、承認済みの提案が誤りになりうる。提案にベース状態を刻印し、古い承認を DB 内で拒否する Postgres での実装を紹介する。
- **[Using CSS Masks to Improve Icons in Design Systems](https://dev.to/stuffbreaker/using-css-masks-to-improve-icons-in-design-systems-bja)** - CSS マスクでアイコンを実装し、デザインシステムのアイコンコンポーネントの性能と拡張性を高めた事例。

## TechCrunch
- **[Nvidia says its open source AI strategy remains intact after Jensen Huang's exit](https://techcrunch.com/2026/11/17/nvidia-says-its-open-source-ai-strategy-remains-intact-after-jensen-huangs-exit/)** - Nvidia の暫定 CEO が、Huang 氏の退任後もオープンソース AI 戦略と Hugging Face 買収計画を維持すると表明した。オープンモデルのエコシステムを使う開発者にとって重要な方針確認。
- **[Google expands access to Gemini Tasks, which can help with calls, purchases](https://techcrunch.com/2026/11/17/google-expands-access-to-gemini-tasks-which-can-help-with-calls-purchases/)** - Gemini の Task モードの提供範囲が広がった。通話の調整、Web サイトへのログイン、ユーザーに代わる購入まで行える。エージェント型機能が一般向けに広がる動き。
- **[As decision model use skyrockets, is customization the next frontier?](https://techcrunch.com/2026/11/17/as-decision-model-use-skyrockets-is-customization-is-the-next-frontier/)** - Sqwish Labs が、自社データで学習させて性能を引き出す decision model のカスタマイズを打ち出した。ツール選択やルーティングに使う小型モデルの調整という論点。
- **[Waymo suspends freeway rides nationwide after California DMV order](https://techcrunch.com/2026/11/17/waymo-suspends-freeway-rides-nationwide-after-california-dmv-order/)** - カリフォルニア州 DMV が高速道路での運行は差し迫った安全上の危険にあたると判断し、Waymo は全米で高速道路走行を停止した。是正措置を示すまで制限は続く。
- **[Apple services, including iCloud, App Store, Apple Music, and more, hit by outage](https://techcrunch.com/2026/11/17/apple-services-including-icloud-app-store-and-apple-music-hit-by-outage/)** - iCloud や App Store など Apple の複数サービスで障害が発生した。ステータスページは障害を認めたが、原因は未確認。

## Ars Technica
- **[Hundreds of websites deliver potent malware cocktail to unsuspecting visitors](https://arstechnica.com/security/2026/11/malicious-code-delivered-through-optimizely-hits-visitors-to-hundreds-of-sites/)** - Optimizely 経由で悪意あるコードが配信され、数百のサイトの訪問者に暗号資産窃取ペイロードや iOS エクスプロイトなどが届いた。サードパーティスクリプトのサプライチェーンリスクを示す。
- **[Three small failures combined to take down Microsoft 365](https://arstechnica.com/gadgets/2026/11/microsoft-details-how-three-problems-combined-for-a-global-outage/)** - Microsoft の説明では、隠れたバグ、トラフィックの偏り、容量低下の 3 つが重なって連鎖障害になった。ポストモーテムとして学ぶ点が多い。ZDNet Japan もこの件を報じている。
- **[UEFI bootkit infected fully patched Windows machines. Is Microsoft to blame?](https://arstechnica.com/security/2026/11/uefi-bootkit-infected-fully-patched-windows-machines-is-microsoft-to-blame/)** - UEFI ブートキット BlackX が、パッチ適用済みの Windows にも感染した。Secure Boot の保護範囲に関する Microsoft の説明の不明確さが突かれている。
- **[Copilot is "the new OS for work," and now Office runs inside of it](https://arstechnica.com/gadgets/2026/11/microsoft-calls-copilot-the-new-os-for-work-at-ignite-keynote/)** - Ignite で Microsoft が Copilot を「仕事の新しい OS」と位置づけ、Word・Excel・PowerPoint が Copilot 内で動くようになった。次は常時稼働エージェントとされる。
- **[IBM to offer access to a dual-processor quantum system in 2027](https://arstechnica.com/science/2026/11/ibm-to-offer-access-to-a-dual-processor-quantum-system-in-2027/)** - IBM が 2027 年中に 520 量子ビットのチップ 2 枚を連結し、利用可能にする計画。量子ハードのスケール手法として注目できる。

## 注目トピック
今日目立つのは AI エージェントを動かす基盤と、その安全性・可観測性だ。Zenn では Ubie の内製クラウドエージェント基盤、dev.to では MCP ツール呼び出しの成否判定や Postgres での古い承認の拒否が出ている。AWS でも AgentCore 系や JWT authorizer、Interconnect の GA など、エージェントと認証・接続まわりの更新が続く。Cisco の Quarry のように、エージェントの挙動を検知する仕組みも出てきた。

もう一つはサプライチェーンと運用障害だ。Java4Shell や Red Hat Quay の脆弱性、Optimizely 経由のマルウェア配信、UEFI ブートキットは、依存先の信頼性を問い直す材料になる。Microsoft 365 の 3 要因が重なった障害は、小さな不具合が重なって大規模障害になる典型例として設計とポストモーテムの教材になる。
