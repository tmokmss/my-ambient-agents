---
title: "Tech Feed ダイジェスト（2026年9月17日）"
date: "2026-09-17T14:20"
category: "summary"
summary: "Jev後追い記事は重複除外、AWS中東DC永久データ損失やBGPハイジャック等のセキュリティ事案を中心に8ソースを日本語で要約"
tags: ["ai", "security", "aws", "cloud", "frontend", "devtools", "llm"]
---

テック系RSS/API 8ソースを巡回し、重複記事を除いた上で注目トピックをまとめた。なお Zenn・Qiita・dev.to・Ars Technica では、直近のトレンド上位記事の多くが過去2日以内のレポートと同一だったため、今回は既出分を除いた新規記事のみを掲載している。

## はてなブックマーク (テクノロジー)
- **[Claude Codeを「使うほど育つ」AI秘書にするノウハウ](https://speakerdeck.com/minorun365/claude-code-o-tsukau-hodo-sodatsu-ai-hisho-ni-suru-nouhau)** ([198users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/minorun365/claude-code-o-tsukau-hodo-sodatsu-ai-hisho-ni-suru-nouhau)) - Claude Code にプロジェクト固有の知識やルールを蓄積させ、使い込むほど精度が上がる「育成型」の運用ノウハウをまとめたスライド。CLAUDE.md やメモリ機構をどう設計するかという実践的な知見が中心。
- **[パスキーは破られていないのに突破される——デバイスコードフロー攻撃とEntra IDでの対策](https://techblog.ap-com.co.jp/entry/2026/09/17/103525)** ([22users](https://b.hatena.ne.jp/entry/s/techblog.ap-com.co.jp/entry/2026/09/17/103525)) - パスキー自体の暗号強度は破らず、OAuth のデバイスコードフローを悪用してセッションを窃取する攻撃手法と、Entra ID 側での緩和策を解説。認証方式を強化しても認可フローの穴が残るという典型例。
- **[少なくとも2030年まではCloudflare Workersがどう考えても最強っぽい](https://qiita.com/ikuosaito1989/items/ba0fcd9f7d67313f4203)** ([42users](https://b.hatena.ne.jp/entry/s/qiita.com/ikuosaito1989/items/ba0fcd9f7d67313f4203)) - エッジコンピューティング市場における Cloudflare Workers の技術的優位性（コールドスタートの速さ、価格体系、対応言語の広さ）を他社サーバーレス基盤と比較しながら論じている。
- **[日本標準時の供給サービスにおける異常の発生について｜NICT](https://www.nict.go.jp/publicity/topics/2026/09/11-1.html)** ([6users](https://b.hatena.ne.jp/entry/s/www.nict.go.jp/publicity/topics/2026/09/11-1.html)) - NICT が提供する日本標準時（JST）供給サービスで発生した異常についての公式報告。NTP など時刻同期に依存するシステムへの影響範囲を把握する上で参照価値のあるインシデントレポート。
- **[iPhoneで撮影した写真がAI生成されていない「本物」だと証明する「Apple Reference Image」はどういう仕組みなのか？](https://gigazine.net/news/20260917-apple-reference-image/)** ([23users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260917-apple-reference-image/)) - C2PA に近い発想で、撮影時の暗号署名とセンサー情報を紐付けて画像の真正性を検証する Apple の仕組みを解説。生成AI時代の真贋判定技術として実装レベルの理解に役立つ。

## Zenn
- **[気軽にDGX Sparkでapt upgradeしたら壊れた話](https://zenn.dev/alpha_omega/articles/3f3ea4d14a0234)** - `apt upgrade` でカーネルが更新された結果、起動中カーネルと NVIDIA カーネルモジュールのバージョンがずれて GPU ドライバがロードされなくなった障害の切り分けと復旧手順。NVIDIA カーネルモジュールのパッケージ依存関係の落とし穴が分かる。
- **[WebMCPを試してみた感想。フロントエンドの必須技術になりそうな予感。](https://zenn.dev/chot/articles/268804cd6694ab)** - 人間向けGUIをAIエージェントが操作できるようにするWebMCPを自社CMSに組み込んだ検証記事。フロントエンドのUI資産をそのままエージェント向けツールとして再利用する設計の勘所を紹介している。
- **[Nullabilityの棚卸しと、NullAwayのプロダクションコード全体適用](https://zenn.dev/nstock/articles/null-away-20260917)** - アノテーションベースの静的解析ツール NullAway を既存の大規模 Java コードベースに全面導入した経緯。段階的導入の難所と、コンパイルエラーとしてnull安全性を担保する設計判断を解説。
- **[Playwrightの失敗サマリーからDatadogのトレースを探せるようにしてみた](https://zenn.dev/layerx/articles/c835873212b601)** - GitHub Actions上のPlaywright E2Eテスト失敗時に、Datadogのトレース情報へ素早くたどり着けるようにする仕組みづくり。テスト失敗の切り分けと可観測性ツールの連携という実務的なテーマ。
- **[ローカルPCがしょぼい？？Snowflakeが解決してくれるよ](https://zenn.dev/takikomi/articles/snowflake-remoteenv)** - Snowflake の Remote Environment（SPCS上のコンテナサービス）を使い、ローカル端末のスペックに依存せずVS CodeからSSH接続してNotebook環境を使う方法を紹介。

## Qiita
- **[常駐コンテキストを削りClaude Codeのコストを抑えてみた](https://qiita.com/ya-mizobuchi/items/6ae906dd28bf61b32329)** - Claude Codeの常駐コンテキストを見直し、精度をほぼ落とさずにトークン消費を抑える工夫と、1ヶ月分の実測データによる効果検証。
- **[【AWS】Bedrock Mantleから呼び出すモデルにBedrock Guardrailsを適用するときの注意点](https://qiita.com/yakumo_09/items/7d00939e593121780af2)** - Bedrock経由でOpenAIモデル等を呼び出す際、Bedrock Guardrailsの適用範囲が想定と異なるケースがあるという実装上の落とし穴を整理。
- **[モバイルアプリのネイティブとクロスプラットフォームのパフォーマンスを比較する](https://qiita.com/mitsuharu_e/items/4b523b0e2174e0f5b19f)** - 既存のネイティブiOS/AndroidアプリにFlutter・React Native(Expo)・Kotlin Multiplatformで作った画面を埋め込んだ場合の実測パフォーマンス比較。フレームワーク選定の判断材料になる具体的な数値を提示。
- **[VectorDBにはダッシュボードがなくてGUIで操作できないと思っていませんか？](https://qiita.com/502_/items/64846c5627cfe5d896d8)** - Milvus公式の管理ツール「Attu v3」を使い、ベクトルDB内のデータをGUIで可視化・操作する方法を紹介。RAG構築時に「中身が見えない」という不満を解消する実践的な内容。
- **[GitHub, GitLab のセキュリティスキャン機能を試す (第1回)](https://qiita.com/kccs_natsuki-kanai/items/2e06310007743e3d4314)** - CI/CDパイプラインにおけるGitHub・GitLab標準のセキュリティスキャン機能（シークレット検出やSAST等）を実際に試し、それぞれの検出範囲と設定方法を比較する連載の第1回。

## AWS 新着
- **[Amazon Corretto 27 is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-corretto-27-generally-available/)** (2026-09-17) - AWSが提供する無償のOpenJDKディストリビューションCorretto 27がGA。長期サポート版JDKの新機能をAWS環境で無償利用できる。
- **[AWS STS simplifies session token size limits and adds session token size monitoring](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts/)** (2026-09-15) - STSのセッショントークンサイズ制限を、従来の複数上限から単一の4,096バイト上限に統一し、サイズ監視機能も追加。IAMロールを多用する開発者は既存のポリシー設計を見直す必要がある可能性がある。
- **[Announcing second-generation single-rack AWS Outposts](https://aws.amazon.com/about-aws/whats-new/2026/09/single-rack-aws-outposts/)** (2026-09-10) - コンピュート・ストレージ・ネットワークを1台の42Uラックに統合した第2世代Outpostsが登場。オンプレミス環境でAWSサービスを使う際のフットプリントが大幅に縮小された。
- **[Amazon API Gateway now supports mutual TLS for backend integrations](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-api-gateway-mutual-tls-backend/)** (2026-09-08) - API GatewayからバックエンドへのTLSハンドシェイクでACM証明書を提示できるようになり、mTLSによるバックエンド認証が可能に。ゼロトラスト構成を組む際の選択肢が広がる。
- **[Amazon SageMaker HyperPod now supports model caching for faster inference autoscaling and reduced cold starts](https://aws.amazon.com/about-aws/whats-new/2026/09/sgm-hyperpod-model-caching-inf/)** (2026-09-11) - モデルの重みやコンテナイメージをクラスタノードに事前ロードしておくことで、推論オートスケーリング時のコールドスタートを分単位から秒単位に短縮。

## Lobsters
- **[A/I Shuts Down](https://keepitfree.ai/announcements/a/i-shuts-down-stay-human/)** (153pt) - プライバシー・金融分野で運営されていたサービス「A/I」の終了を告知する記事。100件近いコメントが集まり、AI駆動サービスの持続可能性や運営倫理について活発な議論が起きている。
- **[Introducing GNOME 51](https://release.gnome.org/51/)** (72pt) - Linuxデスクトップ環境GNOMEの最新メジャーバージョンのリリースノート。新機能や既存コンポーネントの変更点がまとめられている。
- **[The end of verygoodsoftwarenotvirus.ru](https://blog.verygoodsoftwarenotvirus.dev/posts/2026/09/12/the-end-of-verygoodsoftwarenotvirus-dot-ru/)** (71pt) - あるOSSプロジェクトが皮肉的なドメイン名から離脱するに至った経緯を綴った記事。ドメイン戦略やプロジェクトのブランディングをめぐる開発者コミュニティの議論を呼んでいる。
- **[Reinventing issue tracking: Local-first and Git-native](https://blog.manganin.dev/blog/reinventing-issue-tracking/)** (28pt) - Issueデータをサーバーに依存せずGitリポジトリ内で管理する、ローカルファースト設計の課題管理ツールを提案。GitHub Issuesのようなクラウド依存から脱却する設計思想が議論を呼んでいる。
- **[Why building a Rust LSP is hard](https://rust-glancer.github.io/blog/why-lsp-is-hard/)** (24pt) - Rust用の新しいLanguage Server実装を通じて直面した、インクリメンタルコンパイルとエディタ応答性を両立させる難しさを技術的に解説。

## dev.to
- **[Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)** - 定番アルゴリズム問題を、ステップごとの可視化を交えて解説する記事。各アルゴリズムの計算量とデータ構造の使い分けを直感的に理解できる構成になっている。
- **[Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)** - AIモデルの評価結果をスプレッドシートにエクスポートし、可視化・分析するワークフローを解説するシリーズ第3回。AI Evalのデータ設計・分析パイプラインの実装例を扱う。
- **[The Cable Buys Headroom: 91% of a USB 2.0 Bus, 3.6% of a Thunderbolt One](https://dev.to/gde/the-cable-buys-headroom-91-of-a-usb-20-bus-36-of-a-thunderbolt-one-563n)** - USBテザリングの実測45件から、ケーブルの品質がバス帯域の使用率をどれだけ左右するかを検証。USB速度はホスト・ケーブル・デバイスの中で最も遅いものに合わせて自動ネゴシエーションされるため、ケーブル起因のボトルネックが見えにくいという指摘。
- **[Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)** - Kubernetesを使わずDocker Composeスタックに対して宣言的なHorizontal Pod Autoscaling相当の機能を提供するツール「Gubernator」を紹介。マルチノードでのCPU/GPUメトリクスに基づくスケーリングが特徴。
- **[Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)** - GKEがコントロールプレーンのバイナリロールアウトとAPIファイナライゼーションを分離することで、マイナーバージョンアップグレードを安全にテスト・ロールバックできる仕組みを解説。Kubernetesのバージョン管理設計を理解する上で参考になる。

## TechCrunch
- **[Huawei plans Q1 2027 launch of new AI chip as it takes on Nvidia](https://techcrunch.com/2026/09/17/huawei-plans-q1-2027-launch-of-new-ai-chip-as-it-takes-on-nvidia/)** - Huaweiが次世代AIチップ「Ascend 960DT」の投入を前倒しし、Nvidiaとの計算能力格差の縮小を狙う。米中間のAI半導体競争の最新動向。
- **[Google, Nvidia and Anthropic want Emerald AI to find space on the grid for more data centers](https://techcrunch.com/2026/09/17/google-nvidia-and-anthropic-want-emerald-ai-to-find-space-on-the-grid-for-more-data-centers/)** - Google・Nvidia・AnthropicらがEmerald AIという連合体を通じ、新設データセンター向けに電力網上で100GW分の空き容量を見つける取り組みを開始。AIインフラ拡張のボトルネックが電力供給に移っていることを示す動き。
- **[Rival AI agents, Instinct and Meta's Muse, both add the ability to make calls](https://techcrunch.com/2026/09/17/rival-ai-agents-instinct-and-metas-muse-both-add-the-ability-to-make-calls/)** - レストラン予約やサブスク解約などを代行するAIエージェントが、電話発信機能を相次いで獲得。音声インターフェースを介した実世界タスクの自動化が進んでいる。
- **[Comp AI sets eyes on a continuously agentic future for security and compliance](https://techcrunch.com/2026/09/17/comp-ai-sets-eyes-on-a-continiously-agentic-future-for-security-and-complaince/)** - セキュリティ・コンプライアンス業務を継続的に監視・自動対応するエージェント基盤を開発するComp AIが3,400万ドルのシリーズAを調達。監査業務の自動化領域にもエージェント化の波が及んでいる。

## Ars Technica
- **[Iran strikes on Amazon data centers caused permanent loss of customer data](https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data/)** - イランによる攻撃でバーレーン全域とUAEの1ゾーンのAWSデータセンターが損壊し、AWSが設計上想定していた耐障害性を超える被害により顧客データの一部が永久に復旧不能となった。同じ件ははてなブックマークでもitmedia・gigazineなど複数の日本語メディアが別角度で報じている。
- **[BGP hijack infecting networks caused by a comedy of errors that's not funny at all](https://arstechnica.com/security/2026/09/well-executed-bgp-attack-uses-hijacked-ips-to-infect-real-networks/)** - ハイジャックしたIPアドレスを使い実運用ネットワークにマルウェアを感染させたBGPハイジャック事案の技術的検証。経路制御の脆弱性が現実の攻撃にどう悪用されたかを詳細に分析している。
- **[ClickFix attacks infecting PCs and Macs are going viral](https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral/)** - 偽のエラーメッセージでユーザー自身にマルウェアを実行させる「ClickFix」という手口が急速に拡大。実装の単純さと、正規の対処法を装う巧妙さがWindows・macOS双方で感染を広げている要因。
- **[AI bots "Timmy," "Ren," and "Jackie" are flooding social media with slop](https://arstechnica.com/ai/2026/09/ai-agents-flood-the-internet-with-slop-infused-spam/)** - 自律的に投稿するAIエージェント同士がSNS上で相互作用し、低品質なコンテンツ（スロップ）を大量生産している実態を追ったルポ。AIエージェントの自律運用が意図せずスパム経済を生み出す構図が浮き彫りに。
- **[Once popular for attacking AI, ASCII smuggling is embraced by spammers](https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/)** - LLMへのプロンプトインジェクションに使われていた、人間には見えないUnicodeブロックを悪用する「ASCIIスマグリング」技術が、一般的なスパム配信にも転用され始めている。

## 注目トピック
今回のダイジェストでは、AIエージェントの「実運用フェーズ」ならではの副作用が目立った。Ars TechnicaのAIスロップ記事やTechCrunchの電話発信エージェントは、エージェントが人間の作業を代行する範囲が着実に広がっている一方で、ASCIIスマグリングのようにLLM攻撃用だった技術がスパム業界に転用されるなど、AI普及がセキュリティの攻撃対象面を広げている現実も見える。また、AWS中東データセンターの永久データ損失やBGPハイジャック、NICTの時刻供給異常など、インフラの物理的・経路的な脆弱性を突いたインシデントが複数報告されており、可用性設計を「クラウドだから安心」で済ませられない状況が続いている。開発者ツール面では、Claude CodeやWebMCPのようにAIエージェントが既存のGUI・CLI資産をそのまま操作対象にする流れが、フロントエンドやDevOpsの設計に静かな影響を与え始めている。
