---
title: "Tech Feed ダイジェスト（2026年5月3日）"
date: "2026-05-02T21:54"
category: "summary"
summary: "OpenCode無料AI開発・Ask.com閉鎖・Anthropic$900B超資金調達・Pentagon AI機密ネット・DeepSeek V4激安API・TUI復権"
tags: ["ai", "llm", "security", "aws", "devops", "infra", "oss", "policy", "python", "frontend"]
---

## はてなブックマーク (テクノロジー)

- **[けっこう実用的。「OpenCode」×ローカルLLMで"無料Claude Code"してみた](https://www.gizmodo.jp/2026/05/opencode_google_gemma_4.html)** ([224users](https://b.hatena.ne.jp/entry/s/www.gizmodo.jp/2026/05/opencode_google_gemma_4.html)) - オープンソースのCLI AIコーディングツール「OpenCode」とGoogle Gemma 4をローカルで組み合わせることで、Claude Code相当の開発体験をほぼ0円で再現した実践レポート。APIコスト問題への解の一つとして注目されており、ローカルLLMの実用水準到達を示す事例。

- **[サプライチェーン攻撃の対策](https://scrapbox.io/kawasima/%E3%82%B5%E3%83%97%E3%83%A9%E3%82%A4%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E6%94%BB%E6%92%83%E3%81%AE%E5%AF%BE%E7%AD%96)** ([183users](https://b.hatena.ne.jp/entry/s/scrapbox.io/kawasima/%E3%82%B5%E3%83%97%E3%83%A9%E3%82%A4%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E6%94%BB%E6%92%83%E3%81%AE%E5%AF%BE%E7%AD%96)) - kawasimaによるサプライチェーン攻撃対策のまとめノート。依存パッケージの信頼性検証・lockfile固定・SBOM生成・npmの新規公開パッケージ即時インストール回避（pnpm 11でデフォルト化）など、多層防御アプローチが体系的に整理されている。

- **[品質の言語化のススメ——早期テストの原則をClaude Code Agent Skillsで実現する試み](https://tech.layerx.co.jp/entry/articulatin_quality)** ([127users](https://b.hatena.ne.jp/entry/s/tech.layerx.co.jp/entry/articulatin_quality)) - LayerXエンジニアブログが「テストを早く書く」という原則をClaude Code Skillsに落とし込み、品質基準を自然言語で明文化してAIに守らせる試みを紹介。「AIが何を書いても許容してしまう」問題をSKILL.mdに品質ルールを埋め込むことで解決するアーキテクチャとして応用度が高い。

- **[AIは学習データを使い果たしつつある可能性、スタンフォード大学報告書が警告](https://news.yahoo.co.jp/articles/6cbf71e48b722ead8fea6badfc92db843c730d33)** ([46users](https://b.hatena.ne.jp/entry/s/news.yahoo.co.jp/articles/6cbf71e48b722ead8fea6badfc92db843c730d33)) - スタンフォード大学のAIインデックス2026年報告書が、LLMの訓練に使えるウェブ上の高品質テキストデータが枯渇しつつある可能性を指摘。合成データ・マルチモーダルデータへの移行が加速する背景として、モデル改善の「データの壁」が現実の課題となってきたことを示している。

- **[Linuxの脆弱性対策について（CVE-2026-31431、Copy Fail）](https://www.ipa.go.jp/security/security-alert/2026/alert20260501.html)** ([44users](https://b.hatena.ne.jp/entry/s/www.ipa.go.jp/security/security-alert/2026/alert20260501.html)) - IPAがLinuxカーネルの新たな権限昇格脆弱性「Copy Fail（CVE-2026-31431）」に対するセキュリティアラートを発出。copyファイル操作の競合状態を悪用してroot権限を取得できる脆弱性で、多くのLinuxディストリビューションに影響するため即時パッチ適用が推奨されている。

## Zenn

- **[AndroidでClaude Code / Codex / Gemini CLIを動かすネイティブAIターミナルIDEを作った](https://zenn.dev/ryoitabashi/articles/744397718965f6)** - Galaxy Z Fold6上でClaude Code・OpenAI Codex・Gemini CLIを実際に動作させるAndroidネイティブターミナルIDE「Shelly」の開発記。スマートフォンだけで10万行規模のコードベースを操作できる環境の実現は、モバイルファーストAIコーディングの可能性を一段引き上げている。

- **[StripeがAIエージェント決済インフラを構想——MPP・Tempo・Link Agent Wallets](https://zenn.dev/komlock_lab/articles/stripe-sessions-2026)** - Stripe Sessions 2026で発表されたAIエージェント向け決済インフラの全貌解説。エージェントが自律的に決済を実行するための「Machine Payment Protocol（MPP）」、サブスクリプション管理の「Tempo」、エージェント専用ウォレット「Link Agent Wallets」の3つの新機能を整理。自律経済圏の実現に向けた決済インフラ層の変革として注目度が高い。

- **[S3 Files性能評価](https://zenn.dev/edash_tech_blog/articles/4ece2a554ecb27)** - 2026年4月にAWSが発表した「S3 Files」（S3バケットをファイルシステムとしてマウントできるサービス）のスループット・レイテンシ・コストを実測したベンチマーク記事。EFSとの比較を含む実測データが示されており、大容量ファイルのランダムアクセスが必要なMLワークロードでの採用可能性を評価するための一次資料。

- **[terraform applyをGHAで実行してはいけない理由](https://zenn.dev/okazu_dm/articles/7d30c496c8fbb6)** - GitHub ActionsでTerraform applyを直接実行することの危険性を、PR時のコード混入リスク・シークレット管理の複雑さ・Stateロック競合・audit trail問題の観点から整理した記事。Atlantis・Spacelift・env0などのTerraformワークフロー専用ツールへの移行を推奨しており、IaCオペレーションの安全設計を再考するきっかけとなる。

- **[社内向けAIアシスタントを3か月間試験運用してみた](https://zenn.dev/mkj/articles/87c3ce556cde90)** - 松尾研究所がSlack上でOpenClawライクな社内AIアシスタントを試験運用した3か月のレポート。利用率の変遷・ハルシネーション対策・RAGの実効性・コスト感など、運用フェーズでのリアルな課題と改善サイクルが記録されており、社内AI導入を検討している組織への参考資料として価値が高い。

## Qiita

- **[Copy Fail とは？（結構詳しめ）](https://qiita.com/fiord/items/e568f199e5753d3bb1b2?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - CVE-2026-31431「Copy Fail」の技術的詳細を解説した記事。Linuxカーネルのコピーオンライト（CoW）実装に存在する競合状態の仕組み、TOCTOU（Time-of-check/Time-of-use）攻撃としての悪用経路、権限昇格の原理がコードレベルで示されており、脆弱性の深掘り学習に最適。

- **[Claude Codeについて思うこと](https://qiita.com/sour23/items/e95f490b6533227fe73c?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 実際にClaude Codeを数ヶ月使い込んだ開発者による率直な評価記事。「何でもやってくれるが、コードを理解しなくなる恐怖」「コンテキスト汚染の問題」「CLAUDE.mdを書く技術が実力になる」など、AIコーディングツールの光と影が実体験に基づいてまとめられている。

- **[Excel業務を壊さずAPI化する設計入門：現場を敵にしないDXの作り方](https://qiita.com/satoru_higuchi/items/a6aa0300c3a97648c65c?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 業務でExcelに依存している現場のワークフローを壊さずにAPI化する段階的アプローチを解説。Read-only APIから始め既存Excelを検証用にしながら徐々に移行する設計パターンが示されており、現場のExcel文化との共存を前提にしたDX戦略として現実的な処方箋を提供している。

- **[【AWS】RAGのベクトルストア、S3 VectorsとOpenSearchどっちを選ぶ?](https://qiita.com/yakumo_09/items/c1118838c20107db54a9?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AWSが2026年にGAさせた新サービス「S3 Vectors」と既存のOpenSearch Serviceをベクトル検索用途で比較した記事。コスト・スケーラビリティ・ハイブリッド検索の可否・既存エコシステムとの親和性を軸に整理されており、AWSのRAGアーキテクチャ選定の判断材料として実用的。

- **[Claude Opusの1786分の1!? DeepSeek V4のAPI価格がバグってるので全部計算してみた](https://qiita.com/lumichy/items/0252c195b4d0df797592?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - DeepSeek V4のAPI価格をClaude Opus・GPT-5・Gemini Ultraと比較計算した記事。入力1Mトークンあたりの価格差が最大1786倍という衝撃的な数字が話題に。コスト最適化の観点でDeepSeekを本番利用する際の検討材料として、速度・品質・レート制限も含めたトレードオフが整理されている。

## AWS 新着

- **[AWS Lambda adds support for Ruby 4.0](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-lambda-adds-ruby/)** (2026-04-30) - AWS LambdaがRuby 4.0をマネージドランタイムおよびコンテナイメージとしてサポート開始。Ruby 4.0はJIT改善とRactor並列処理の安定化が目玉で、Lambdaでのシリアライズ重視の処理がより高速化される。Rails APIをLambdaで動かしている構成の移行期間として注目。

- **[Amazon EKS now supports one-click cluster access through CloudShell](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-one-click-cluster-access/)** (2026-04-30) - EKSコンソールからワンクリックでCloudShellにkubectlアクセス可能になった。kubectl-connectスクリプトが自動生成され、kubeconfigの手動設定なしにポッドのデバッグやリソース確認が即座にできるようになり、特に本番障害時のオペレーション速度が向上する。

- **[Amazon Bedrock AgentCore Identity now supports On-Behalf-Of (OBO) token exchange](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore/)** (2026-04-30) - Bedrock AgentCore IdentityがOBOトークン交換をサポート。エージェントがユーザーの代理として外部サービス（Google Drive・Salesforce等）に安全にアクセスするためのOAuth 2.0委譲フローを実装でき、マルチシステム横断エージェントの認証設計が大幅に簡素化される。

- **[Amazon RDS for SQL Server supports cross-account snapshot sharing with additional storage volumes](https://aws.amazon.com/about-aws/whats-new/2026/05/rds-sqlserver-cross-account-snapshot-sharing-additional-storage-volume/)** (2026-05-01) - RDS for SQL Serverがクロスアカウントスナップショット共有とread replicaを追加ストレージボリューム（ASV）に対応。マルチアカウント構成のSQL Server環境でDR・dev/prod分離の運用が容易になり、エンタープライズのSQL Server移行を加速するアップデート。

## Lobsters

- **[I Do Not Recommend Bitwarden](https://マリウス.com/i-do-not-recommend-bitwarden/)** - 長年Bitwardenを使用・推薦してきた著者が、同サービスを推薦しなくなった理由を詳述した記事。UX劣化・モバイルアプリの不安定性・サーバーセルフホストの複雑化など、実際の利用体験に基づく指摘が多く、1Passwordや他のパスワードマネージャーへの移行を検討するユーザーにとって参考になる。

- **[Why TUIs are back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/)** - ターミナルUIツール（TUI）がSSH経由のリモート操作・ローカルLLM統合・キーボードファーストな操作効率の観点から再評価されている背景を論じた記事。RatATUI・Charm（Bubble Tea）エコシステムの成熟・Claude CodeやLazygitなどTUIの実用化が進む2026年のトレンドを整理している。

- **[Agentic Coding is Burning Me Out](https://0xsid.com/blog/agentic-coding-fatigue)** - AIエージェントを使ったコーディング（vibe coding / agentic coding）に疲弊した開発者の告白記。「AIが出力したコードを理解せずにマージし続けることへの不安」「コードを書く喜びの喪失」「バグ修正の難化」を率直に語っており、AI活用の副作用として開発者体験の質の変化を問う声が増えていることを示す。

- **[NHS Goes To War Against Open Source](https://shkspr.mobi/blog/2026/05/nhs-goes-to-war-against-open-source/)** - 英国国民保健サービス（NHS）が内部システムで使用するOSSライブラリに対して厳格なライセンス審査・承認フローを導入し始め、OSS活用が実質的に困難になったことを批判する記事。医療機関のOSSガバナンス強化の動きが、セキュリティ向上ではなく官僚的形式主義として機能している問題を指摘している。

- **[PEP 661 – Sentinel Values, accepted 5 years later](https://peps.python.org/pep-0661/)** - Python 3.15でついて採択が決まったPEP 661「センチネル値」の解説。`None`では区別できない「値が指定されなかった」状態を型安全に表現するための標準的な仕組みを言語に組み込む提案で、5年越しの採択に至った背景・`None`との差異・使用シナリオが整理されている。

## dev.to

- **[AGENTS.md, SKILL.md, DESIGN.md: How AI Instructions Split into Three Layers](https://dev.to/aws-builders/agentsmd-skillmd-designmd-how-ai-instructions-split-into-three-layers-d0g)** - Google Labsが2026年4月に公開したDESIGN.md（AIエージェント向けデザインシステム仕様）を受け、AGENTS.md（行動ルール）・SKILL.md（手順書）・DESIGN.md（UIデザイン仕様）の3層に役割分担する考え方を解説。Claude CodeのCLAUDE.md + Skillsとの比較も含め、AIインストラクション設計の共通語彙が整理されつつある状況を示す。

- **[Postmortem: How a LangGraph 0.1 Multi-Agent Bug Broke Our 2026 Customer Support Bot](https://dev.to/johalputt/postmortem-how-a-langgraph-01-multi-agent-bug-broke-our-2026-customer-support-bot-37pp)** - LangGraph 0.1系のマルチエージェント実装で、ノード間の状態伝播に隠れたバグが本番のカスタマーサポートボットを3時間停止させた障害のポストモーテム。ステート管理のべき等性不足と条件付きエッジの評価順序の問題が組み合わさった再現困難なバグで、LangGraphのバージョン固定と統合テストの重要性を改めて示している。

- **[Stop Using Firebase for Everything: Why I Switched to PostgreSQL (Supabase)](https://dev.to/stackbyujjwal/stop-using-firebase-for-everything-why-i-switched-to-postgresql-supabase-53ci)** - NoSQLの柔軟性を優先してFirebaseを採用していたプロジェクトをSupabase（PostgreSQL）に移行した体験記。複雑なクエリ・トランザクション・外部キー整合性が必要になった段階でFirestoreの限界に直面し、RLSを活用したSupabaseへの移行でコードが大幅にシンプルになった実例。

- **[Dockerizing Next.js for production](https://dev.to/mahmoudmkdm/dockerizing-nextjs-for-production-18b0)** - 一般的なNext.js向けDockerfileが1.2GBのイメージ・ビルド時の環境変数リーク・レイヤー毎の無駄な再ビルドを引き起こす問題を解決するマルチステージビルドの実践ガイド。standalone出力モード・`.next/cache`のBuildKit活用・Non-rootユーザーの設定まで、本番グレードのDocker設定がまとめられている。

## TechCrunch

- **[Farewell, Jeeves: Ask.com shuts down](https://techcrunch.com/2026/05/02/farewell-jeeves-ask-com-shuts-down/)** - 1996年創業の検索エンジンAsk.comがサービス終了。親会社IACが検索事業の継続を断念した。Googleに市場を奪われて久しいが、AI検索の台頭により既存の検索エンジン市場再編が加速している象徴的な出来事として業界に受け止められている。

- **[Pentagon inks deals with Nvidia, Microsoft, and AWS to deploy AI on classified networks](https://techcrunch.com/2026/05/01/pentagon-inks-deals-with-nvidia-microsoft-and-aws-to-deploy-ai-on-classified-networks/)** - 米国防総省がNvidia・Microsoft・AWSと機密ネットワーク上でのAI展開に関する契約を締結。国防省のAIベンダー分散方針の一環で、Anthropicとの使用ポリシー紛争後に複数ベンダー体制を構築する動きの中での重要契約。軍事AIインフラの商用クラウド依存が深まる転換点となった。

- **[Sources: Anthropic potential $900B+ valuation round could happen within 2 weeks](https://techcrunch.com/2026/04/30/anthropic-potential-900b-valuation-round-could-happen-within-two-weeks/)** - AnthropicがAmazon・Googleなど既存投資家に対し、企業価値9000億ドル超での新規資金調達ラウンドへの参加を48時間以内に決断するよう求めたとの報道。OpenAIとの競争激化とClaudeシリーズの商業的成功を背景に、AI企業の資本需要が前例のない規模に達している。

- **[As Tim Cook steps down, Apple hit record sales — but a chip shortage looms](https://techcrunch.com/2026/04/30/as-tim-cook-steps-down-apple-hit-record-sales-but-a-chip-shortage-looms/)** - Tim Cook CEOが退任を表明した四半期決算発表でAppleは過去最高売上を記録したが、AI需要急増によるRAM/HBM不足（RAMageddon）がサプライチェーンを直撃し、次四半期以降のMac供給が制約される見通し。AI PC需要の急増が皮肉にもApple製品の入手困難を生んでいる。

- **[Coatue has a plan to buy up land for data centers, possibly for Anthropic](https://techcrunch.com/2026/05/01/coatue-has-a-plan-to-buy-up-land-for-data-centers-possibly-for-anthropic/)** - VCのCoatueが大型電源施設近くの土地を買収しデータセンター用地として確保する新事業を展開中で、Anthropicのインフラ需要への対応が目的とされている。AI企業の電力・不動産需要が金融資本を巻き込んだ新たな投資テーマとなっていることを示す動き。

## Ars Technica

- **[GPT-5.5 matches heavily hyped Mythos Preview in new cybersecurity tests](https://arstechnica.com/ai/2026/05/amid-mythos-hyped-cybersecurity-prowess-researchers-find-gpt-5-5-is-just-as-good/)** (2026-05-01) - 重要インフラへのサイバー攻撃能力を持つとして注目されたAI「Mythos Preview」について、独立した研究者によるサイバーセキュリティベンチマークでGPT-5.5が同等の性能を示すことが判明。Mythosの「特別な危険性」の議論に疑問符がつく一方、フロンティアモデル全般のサイバー能力向上というより根本的な問題が浮かぶ。

- **[Amazon stuck with months of repairs after drone strikes on data centers](https://arstechnica.com/gadgets/2026/05/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers/)** (2026-05-01) - Amazonのデータセンターが無人機攻撃を受け、修復に数ヶ月かかる深刻な物理的損害が発生したと報道。物理セキュリティの新たな脅威として、ソフトウェア対策だけではカバーできないデータセンターへのドローン攻撃リスクが業界に突きつけられた。

- **[Minnesota passes ban on fake AI nudes; app makers risk $500K fines](https://arstechnica.com/tech-policy/2026/05/minnesota-set-to-be-first-state-to-ban-nudification-apps/)** (2026-05-01) - ミネソタ州がAIによる偽ヌード画像生成（nudification）アプリを禁止する法律を成立させ、違反事業者には最大50万ドルの罰金を科す。米国の州レベルでのAI生成コンテンツ規制が具体的な罰則を持つ法律として整備され始めた先例として、他州の立法動向に影響する可能性がある。

- **[Ubuntu infrastructure has been down for more than a day](https://arstechnica.com/security/2026/05/ubuntu-infrastructure-has-been-down-for-more-than-a-day/)** (2026-05-01) - UbuntuとCanonicalのインフラが24時間以上にわたりDDoS攻撃でダウン。パッケージリポジトリ・公式サイト・スナップストアが影響を受け、世界中のLinux環境でのパッケージ更新が停止した。OSS/Linuxエコシステムの中核インフラが攻撃の標的になった事例として、インフラ可用性の脆弱性を改めて露わにした。

## 注目トピック

今回のフィードを横断して浮かび上がる最大のテーマは、**AIインフラへの資本集中と物理的リスクの同時顕在化**だ。AnthropicのGST$900B超資金調達・Coatueによるデータセンター用地買収・Pentagonの商用AI契約という資金・土地・政府調達の3つが同時に動いている一方、Amazonデータセンターへのドローン攻撃・Ubuntu DDoS障害という物理・ネットワーク両面のインフラ攻撃が現実に発生している。「AIの能力向上」という上昇トレンドと「AIインフラの攻撃面拡大」という下降リスクが同時に加速していることは、AIエンジニアにとってシステム設計の前提を問い直す契機となる。

もう一つの軸は**AIコーディングツールへの反省的視点の普及**だ。「Agentic Coding is Burning Me Out」「Claude Codeについて思うこと」「Why I Don't Vibe Code」といったタイトルが並ぶ現象は、AIコーディングの「何でもできる感」への熱狂が一段落し、「何をAIに任せ、何を自分で理解すべきか」という実践的な問いへの移行を示している。OpenCode×ローカルLLMによるコスト0円実現、DeepSeek V4の1786分の1という価格破壊は技術的な進歩だが、その恩恵を実際の開発品質につなげるための「人間の設計判断力」への回帰が静かに始まっている。
