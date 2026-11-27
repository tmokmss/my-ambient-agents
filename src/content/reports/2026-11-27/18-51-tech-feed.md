---
title: "Tech Feed ダイジェスト（2026年11月27日 夕）"
date: "2026-11-27T18:51"
category: "summary"
summary: "ロリポップ漏えい、Linux TCPanic、GitHub Actions の鍵管理、AWS WAF の AI エンドポイント保護、AI エージェントによる 0-day 悪用など"
tags: ["security", "aws", "ai", "github-actions", "linux", "architecture", "database"]
---

## はてなブックマーク (テクノロジー)
- **[AI使って開発するなら、モデリングするんだよ - 4つの図で始めるモデリングと、AIにモデルを実装させるアーキテクチャ](https://speakerdeck.com/littlehands/umtp-suraido-20261125)** ([181users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/littlehands/umtp-suraido-20261125)) - AI にコードを書かせる時代こそ、4つの図によるモデリングで構造を先に決め、モデルを AI に実装させるアーキテクチャを提案するスライド。
- **[「ロリポップ！レンタルサーバー」および関連サービスに対する不正アクセスによるお客様情報の漏えいについて](https://lolipop.jp/info/news/8279/)** ([153users](https://b.hatena.ne.jp/entry/s/lolipop.jp/info/news/8279/)) - GMO ペパボの公式告知。報道では内部システムへの不正アクセスで顧客情報約51万件が漏えいした可能性があり、一部が平文パスワードで保存されていたと伝えられている。パスワードの保存方式が改めて問われる事案。同じ件を Togetter・窓の杜系の報道も別角度で取り上げている。
- **[はじめての Lean](https://unaoya.github.io/lean-intro/)** ([94users](https://b.hatena.ne.jp/entry/s/unaoya.github.io/lean-intro/)) - 定理証明支援系言語 Lean の入門資料。形式検証や AI による証明が話題になる中で、手を動かして学び始めるための導線になる。
- **[Linuxカーネルのバグ「TCPanic」を発見、TCP通信のみでホストが停止する脆弱性](https://ikotaslabs.com/news/2026-11-27)** ([56users](https://b.hatena.ne.jp/entry/s/ikotaslabs.com/news/2026-11-27)) - TCP 通信だけでホストが停止するとされる Linux カーネルの脆弱性の報告。サーバー運用者はディストリビューションの修正状況の確認が必要。
- **[マイナアプリに複数の脆弱性、マイナンバーカードの情報窃取の恐れ　最新版に更新を](https://ascii.jp/elem/000/004/455/4455531/)** ([49users](https://b.hatena.ne.jp/entry/s/ascii.jp/elem/000/004/455/4455531/)) - マイナアプリに複数の脆弱性が見つかり、カード情報が窃取される恐れがあるとして最新版への更新が呼びかけられている。

## Zenn
- **[GitHub ActionsからPATもGitHub App Private Keyも駆逐する](https://zenn.dev/tmknom/articles/github-app-token-exchange-system)** - GITHUB_TOKEN で権限が足りないときの PAT や GitHub App の Private Key 管理の課題を、GATES というツールで解決する提案。Private Key をワークフローに渡さずトークンを得る構成を紹介する。
- **[止められないDBをAWS DMSで移行してハマったこと（RDS for Oracle）](https://zenn.dev/kiri0728/articles/c8d5f349b047dd)** - 約150GB の RDS for Oracle を DMS のフルロード＋CDC で移行し、停止時間を約10分に抑えた記録。CDC が同期されない原因はサプリメンタルロギングとアーカイブログ保持の未設定だった。
- **[AIエージェントにWebのファイルを取得させるリスクについて考える](https://zenn.dev/layerx/articles/65b4828efcaee2)** - 任意の URL からファイルを取得させるエージェント機能を足す際のセキュリティ上の論点を整理した記事。実装前の脅威モデリングの参考になる。
- **[Leanで安全制約を書くと、ハザード候補がビルドエラーとして見つかる](https://zenn.dev/kokeshim0chi/articles/lean-safety-constraint-build-error)** - Google の SRE 本第2版に加わった STPA/CAST の章を受け、安全制約を Lean で記述してハザード候補をビルドエラーとして検出するアプローチを試した記事。
- **[日本語のFull-duplex音声対話モデルを実際に動かしてみた話](https://zenn.dev/knowledgework/articles/12a80d8cd4b21f)** - 日本語 Full-duplex 音声対話モデル「J-Moshi-ext」の MLX 変換版を Apple Silicon Mac でローカル実行。13回の対話で相槌や割り込みを観察し、約4分付近で発話が崩れる現象とコンテキスト長の関係を考察している。

## Qiita
- **[MarkItDown で Excel の設計書を Claude に渡したら、取り消し線で消した機能を「できます」と答えた話（2026年版）](https://qiita.com/ntaka329/items/2cfccd4bb5476e61ebe4)** - 冒頭抜粋によると、取り消し線を区別しない読み取りで xlsx を変換したため、消した項目を有効な仕様として回答された事例。LLM への入力変換で情報が欠落する落とし穴を扱う。
- **[ExastroをDocker Composeでインストールし、初期設定まで進める手順](https://qiita.com/Exastro-community/items/e96452d6ab248958a987)** - IT 自動化基盤 Exastro を Docker Compose で導入し、初期設定まで進める手順書。Linux と Docker の基本知識を持つインフラエンジニア向け。
- **[OCI ComputeにSwingbenchをCLIでセットアップしてOracle AI Database 26aiへOLTP負荷をかけてみる](https://qiita.com/mo__mo/items/83e0a491e681c3369f8d)** - OCI Compute に負荷試験ツール Swingbench を CLI で導入し、Oracle AI Database 26ai に OLTP 負荷をかける手順の備忘録。

## AWS 新着
- **[AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails](https://aws.amazon.com/about-aws/whats-new/2026/11/waf-ai-endpoint-discovery-protection/)** (2026-11-23) - API Gateway などの背後にある LLM / MCP / A2A エンドポイントを自動検出し、Bedrock Guardrails で保護する機能が GA。AI エンドポイントの野良公開を可視化できる。
- **[AWS Device Farm now supports Android emulators and iOS simulators](https://aws.amazon.com/about-aws/whats-new/2026/11/device-farm-virtual-devices/)** (2026-11-25) - 実機に加えてエミュレーター／シミュレーターでも自動・手動テストを実行でき、大規模テストを速く回せるようになった。
- **[Amazon CloudWatch EKS Container Insights now offers built-in monitoring for open source Kubernetes tools](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-eks-kubernetes-tools/)** (2026-11-20) - EKS 上の Karpenter、KEDA、vLLM、KServe、SGLang、Ray、Knative Serving 向けの監視ダッシュボードが組み込みで提供される。
- **[Amazon CloudWatch extends the PromQL query window to 30 days](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-promql-query-30days/)** (2026-11-20) - OpenTelemetry メトリクスに対する PromQL のクエリ範囲が7日から30日に拡大。月次・週次の比較を1クエリで出せる。
- **[AWS Network Firewall introduces automated Internet firewall (Preview)](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-automated-internet/)** (2026-11-20) - NAT を含む Network Firewall の構成を一元的に設定できる集中コントロールがパブリックプレビューで登場。

## Lobsters
- **[Taking Email Back](http://www.linux-magazine.com/Online/Features/Taking-Email-Back)** (76pt) - 大手プロバイダーに依存しないメール運用を取り戻すという Linux Magazine の特集。コメントは27件で、セルフホストの現実性が議論されている（タグは email）。
- **[Understanding "You are not expected to understand this."](https://www.taniwha.com/~paul/not.html)** (24pt) - Unix 初期カーネルのソースにある有名なコメントを、アセンブリと C の観点から読み解く記事。コンテキストスイッチの実装背景を扱う。
- **[The need for a formally verifiable mainstream programming language](https://blainehansen.me/post/mainstream-verifiable-language/)** (21pt) - AI がコードを書く時代には、形式検証可能な主流言語が必要だとする主張。コメントは19件で、タグは formalmethods と plt。
- **[Pimalaya goes stable](https://blog.pimalaya.org/pimalaya-goes-stable/)** (10pt) - Rust 製のメール関連ツール群 Pimalaya の安定版リリース告知。

## dev.to
- **[Orchestrating Agents: When the Boundary Moves, So Do the Guarantees](https://dev.to/pinxiongcn/orchestrating-agents-when-the-boundary-moves-so-do-the-guarantees-o63)** - ローカルの Graph からリモートの A2A エキスパートを呼ぶと「書き込み」の意味が変わることを、Bedrock での7つの実験で検証。タイムアウト後も書き込みが成功する例や、盲目的リトライによるクォータ二重消費を示し、冪等キーと読み戻しによる対策を提案している。
- **[When Redis Is Actually Better Than PostgreSQL](https://dev.to/polliog/when-redis-is-actually-better-than-postgresql-hi8)** - 「Redis を PostgreSQL に置き換えた」前作の続編。Redis のほうが適する場面を整理している。
- **[Next.js 16 use cache: remote vs use cache: private](https://dev.to/parsajiravand/nextjs-16-use-cache-remote-vs-use-cache-private-5amm)** - `use cache: remote` はインスタンス間で共有し、`use cache: private` は1リクエスト内に閉じる。使い分けとコピペ用チートシートをまとめた記事。
- **[Why millions of agents don't need millions of VMs on Agent Substrate](https://dev.to/googlecloud/why-millions-of-agents-dont-need-millions-of-vms-on-agent-substrate-2ech)** - ステートフルなエージェントハーネスを1秒未満で実行・休止・復帰させる Agent Substrate 1.0 の仕組みを、1台の VM から数百万アクターまでのスケールで解説する。
- **[Istio Service Mesh on Amazon EKS: A Hands-On Guide with Terraform](https://dev.to/aws-builders/istio-service-mesh-on-amazon-eks-a-hands-on-guide-with-terraform-1l40)** - Terraform で EKS クラスターを作り、Istio サービスメッシュを構築するハンズオン。

## TechCrunch
- ※ 72時間以内の記事は、過去レポートで掲載済みの話題か、資金調達・企業ガバナンス・事業ニュース中心のものだけだった。そのため新規の掲載記事はなし。

## Ars Technica
※ 72時間以内の新規記事が3件に満たなかったため、7日以内まで範囲を広げた。
- **[Amazon says hackers' AI agents found and exploited 0-day with little human input](https://arstechnica.com/security/2026/11/amazon-says-hackers-ai-agents-found-and-exploited-0-day-with-little-human-input/)** - Amazon が、Cairn AI フレームワークを使った攻撃者の AI エージェントが、ほぼ人手を介さずに 0-day を発見し悪用したと報告。同じフレームワークは防御側にも有用だという。
- **[Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced.](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/)** - 追跡可能な秘密を埋め込んだプロンプトを大量に流して検証したところ、データが非公開のままでは済まないことが示された。AI サプライチェーンにおけるデータ漏えい経路の実測例。
- **[Intel faced a choice: Give Trump 10% or face the consequences](https://arstechnica.com/tech-policy/2026/11/intel-faced-a-choice-give-trump-10-or-face-the-consequences/)** - 約束された助成金を得るために、Intel が10%の株式を政府に差し出す圧力を受けた経緯。半導体産業と政府の関係を示す。

## 注目トピック
今回は「AI エージェントの安全な運用」が複数ソースに現れた。AWS WAF による LLM / MCP / A2A エンドポイントの自動検出、Zenn の任意 URL 取得リスクの整理、dev.to のエージェント間呼び出しでの冪等性の検証、Ars の AI エージェントによる 0-day 悪用の報告はいずれも、エージェントが外部とつながる境界をどう守り、どう検証するかを論点にしている。攻撃側も防御側も AI エージェントを使う前提で、境界の可視化と設計が重要になっている。

認証情報とパスワードの扱いも目立った。ロリポップの漏えいでは平文パスワード保存が報じられた。一方、GitHub Actions の PAT や Private Key を排除する GATES の提案は、長期の秘密鍵をそもそも持たせない方向を示している。AI 時代の開発では、仕様やモデルを先に整える設計（はてブ上位のモデリング資料）や、Lean などの形式検証への関心も同時に高まっている。
