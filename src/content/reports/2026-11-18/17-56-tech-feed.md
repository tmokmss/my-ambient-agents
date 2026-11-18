---
title: "Tech Feed ダイジェスト（2026年11月19日）"
date: "2026-11-18T17:56"
category: "summary"
summary: "nginx RCE、Metabase 経由の漏えい、Lambda LMI のゼロスケール、Codeberg のドメイン消失、UEFI/PHP の脆弱性など"
tags: ["security", "aws", "ai", "infrastructure", "nginx", "rust", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[NewsPicks漏えい、Metabase脆弱性が原因　パッチ適用前日にデータ窃取、JPCERT/CC公表「不審IPアドレス」で攻撃発覚](https://www.itmedia.co.jp/news/article/2611/18/2000003300/)** ([36users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2611/18/2000003300/)) - 情報漏えいの原因は BI ツール Metabase の脆弱性で、パッチ適用の前日にデータが窃取されていた。JPCERT/CC が公表した不審 IP アドレスをきっかけに攻撃が発覚したという。パッチ公開前後の窓が狭い脆弱性への備えを考える材料になる。
- **[NGINX2Root by Xint — From nginx visitor to root of the server host](https://nginx2root.com/)** ([25users](https://b.hatena.ne.jp/entry/s/nginx2root.com/)) - nginx への訪問者がサーバーホストの root 権限まで到達する攻撃チェーンの解説サイト。同じ件を Wiz も HTTP/2 まわりの認証不要 RCE として公表しており、はてブでも並んでいる。nginx を公開運用している環境は更新状況の確認が必要。
- **[第935回　ログ管理サーバー「VictoriaLogs」で、家庭内のログを集中管理する](https://gihyo.jp/admin/serial/01/ubuntu-recipe/0935)** ([95users](https://b.hatena.ne.jp/entry/s/gihyo.jp/admin/serial/01/ubuntu-recipe/0935)) - Ubuntu Weekly Recipe の連載で、ログ管理サーバー VictoriaLogs を使って家庭内機器のログを一か所に集める手順を紹介する。軽量なログ基盤を自宅で試したい人向け。
- **[日本郵便が挑む「住所の正規化」――日本国内の住所を7桁の英数字で表す「デジタルアドレス」で、表記揺れや記入の面倒を無くす](https://internet.watch.impress.co.jp/docs/column/chizu3/2152316.html)** ([155users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/column/chizu3/2152316.html)) - 日本の住所を7桁の英数字で表し、表記揺れを解消する「デジタルアドレス」の解説。住所の正規化やジオコーディングを扱うシステムの設計に関わる話題。
- **[libraz/suzume: A lightweight Japanese tokenizer](https://github.com/libraz/suzume)** ([9users](https://b.hatena.ne.jp/entry/s/github.com/libraz/suzume)) - ブラウザやネイティブアプリ向けの軽量な日本語トークナイザー。WebAssembly、Node.js、Python、Go、C++ に対応し、辞書を内蔵して品詞タグと見出し語を返す。

## Zenn
- **[Odin に賭けたい人向けの Odin 言語入門ガイド](https://zenn.dev/mizchi/articles/odin-introduction-guide)** - AI に書かせた Odin 言語の調査をもとに、書き手の所感を中心に再構成した入門ガイド。`bit_field` やエラー処理の書き方などに触れている。
- **[危険コマンドを止める Claude Code hook を書いたのに、素通ししていた](https://zenn.dev/minewo/articles/claude-code-hook-fail-open)** - PreToolUse hook は exit code 2 以外の非ゼロではブロックしない仕様のため、検査に到達する前に素通しする経路ができる。パターンを増やす前に、抽出に失敗したら止める fail-closed にすべきという実測つきの話。
- **[決済という機能を実装するのは容易だが、思っていたより考えることが多かった](https://zenn.dev/chot/articles/1297582ee96341)** - 決済は API を叩くだけでは済まない。クライアントから送られた金額を信用せず、商品IDと数量からサーバー側で再計算するなど、想定すべきケースを整理した備忘録。
- **[Kaggle 膝コンペ振り返り & 上位解法まとめ | RSNA Knee Abnormality Detection](https://zenn.dev/ca_kagglers/articles/kaggle-rsna-knee)** - 医療画像を扱う RSNA コンペ2026年版の概要と、上位入賞チームのアプローチをまとめた振り返り。
- **[mise + gh skill で、dotfiles から Agent Skills を管理する](https://zenn.dev/dress_code/articles/30bd78e1a67f87)** - Homebrew や言語ツール、設定の symlink まで mise で管理している dotfiles に、Claude Code / Cursor 用の Agent Skills も載せる運用の紹介。

## Qiita
- **[[AWS] S3Vectorsは全文検索エンジンとしてOpenSearchの代わりになるのか？](https://qiita.com/kikuziro/items/cd1389f6a1601494895f)** - S3 Vectors が全文検索に対応したのを受け、定番の OpenSearch と比較した検証記事（冒頭抜粋より）。OpenSearch のコストが高いと感じる小規模な全文検索が対象。
- **[【AWS Emulator】消し忘れの恐怖から卒業！公式エミュレータでS3とLambdaを動かしてみた](https://qiita.com/N-Kyo/items/a111d174a751506790e2)** - 2026年11月11日に GA した AWS Emulator を試した記事。CLI や SDK の接続先を環境変数で切り替えるだけで、AWS にデプロイせずサービスを動かせるという。
- **[Amazon Bedrock AgentCore Policyで実現するユーザー属性ベースのMCPツール認可](https://qiita.com/mbear06/items/816e3a7c13875283c656)** - 同じ AI エージェントでも、ログイン中ユーザーの権限に応じて実行できる MCP ツールを制限したいという要件を、AgentCore Policy で実現する方法（冒頭抜粋より）。
- **[AI も「一晩寝かせる」と考えがまとまる🥱 寝ている間に記憶を整理する Dreaming の仕組み](https://qiita.com/KYoshiyama/items/623e13ced9c119b614aa)** - 2026年5月に Anthropic が発表した「Dreaming」について、同社自身の研究結果が出たとして図解で紹介する記事（冒頭抜粋より）。エージェントの記憶整理の設計に関わる。
- **[RAGの「分からない」と参照元を自動検証するPython評価スクリプトの作り方](https://qiita.com/takumi_engineer/items/8287c5fb775d834086a4)** - 参照元の提示、根拠がなければ答えない動作、検索ヒット率を、Python の標準ライブラリだけで自動チェックする評価スクリプトの作り方。改修のたびに挙動が壊れていないかを確認できる。

## AWS 新着
- **[AWS Lambda now supports scale to and from zero for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-managed-instances-scale-to-zero/)** (2026-11-17) - Lambda Managed Instances 上の Event Functions で、アイドル時に実行環境をゼロまで縮退し、リクエストで再びスケールアウトできるようになった。
- **[OpenAI GPT-6.2 Astra, and GPT-6.2 Sol are now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/11/openai-gpt-6-2-astra-sol-amazon-bedrock/)** (2026-11-17) - OpenAI の GPT-6.2 Astra と GPT-6.2 Sol が Bedrock で GA。Astra は高度な推論と判断を売りにしている。
- **[Amazon VPC, AWS Transit Gateway, and AWS Cloud WAN now offer a 99.999% availability SLA for cross-Region traffic](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-tgw-cloudwan-99999-sla/)** (2026-11-17) - VPC のリージョン間ピアリング、Transit Gateway、Cloud WAN 経由のリージョン間通信に、99.999% の可用性 SLA が付いた。マルチリージョン設計の前提が変わる。
- **[Amazon ECR now supports global authentication tokens for private registries](https://aws.amazon.com/about-aws/whats-new/2026/11/global-authentication-amazon-ecr)** (2026-11-17) - これまでリージョンごとに必要だった ECR プライベートレジストリの認証トークンが、グローバルなものを使えるようになった。マルチリージョンでの pull / push の運用が簡単になる。
- **[AWS announces agentic account creation for agentic coding harnesses](https://aws.amazon.com/about-aws/whats-new/2026/11/agentic-account-creation/)** (2026-11-17) - AWS アカウントを持たない開発者が、エージェント型のコーディング環境から新しいサインアップ体験を開けるようになった。

## Lobsters
- **[Codeberg's domain suddenly disappeared from their account, site is unreachable](https://social.anoxinon.de/@Codeberg/117636454915265360)** (148pt) - Codeberg が、自身のアカウントからドメインが突然消え、サイトに到達できなくなったと投稿した。GitHub の代替として使われる VCS ホスティングで、ドメイン管理が単一障害点になりうることを示す事例。
- **[Windows 11 collects data on which coding agents and dev tools you use](https://xusheng.dev/posts/windows-coding-agent-telemetry/)** (20pt) - Windows 11 が、どのコーディングエージェントや開発ツールを使っているかを収集していると指摘する記事。プライバシーとセキュリティのタグが付いている。
- **[Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold)** (11pt) - リアクティブな UI ライブラリ Solid の 2.0 リリースを告知する公式ブログ。
- **[C's designated initializers give us named arguments](https://quuxplusone.github.io/blog/2026/11/16/named-arguments-in-c/)** (14pt) - C の指示付き初期化子（designated initializers）を使うと、名前付き引数に近い書き方ができるという解説。
- **[Stacked diffs with Maiao](https://entropicthoughts.com/stacked-diffs-with-maiao)** (4pt) - 変更を積み重ねてレビューに出す stacked diffs の運用を、Maiao で行う方法を扱う記事。

## dev.to
- **[FastAPI 0.163's new dependency concurrency limit deadlocked two of my routes](https://dev.to/alexgeorgiev17/fastapi-0163s-new-dependency-concurrency-limit-deadlocked-two-of-my-routes-33k6)** - FastAPI 0.163.0 の `Depends(max_concurrency=...)` は同時 20 件を最大 5 に絞れるが、制限は `Depends()` オブジェクトごと・ワーカープロセスごとに効く。逆順で取得する yield 依存が2つあると永久にハングした、という報告。
- **[Next.js use cache Reused the Same Cache Entry for Different Files Before 16.4.5](https://dev.to/shubhradev/nextjs-use-cache-reused-the-same-cache-entry-for-different-files-before-1645-598g)** - 16.4.5 より前の Next.js で、`use cache` が異なるファイルに対して同じキャッシュエントリを再利用していた問題の解説。
- **[Why I Rewrote type-tune from TypeScript to Rust 🦀](https://dev.to/necoz/why-i-rewrote-type-tune-from-typescript-to-rust-1egg)** - フロントエンドエンジニアが、自作 OSS の type-tune を TypeScript から Rust に書き直した動機を語る。
- **[One model gateway across clouds: LiteLLM on Cloud Run and Azure with zero API keys](https://dev.to/gde/one-model-gateway-across-clouds-litellm-on-cloud-run-and-azure-with-zero-api-keys-3ma7)** - Cloud Run と Azure Container Apps にそれぞれ LiteLLM を置き、エージェントが自身の ID で Gemini と Azure OpenAI に到達する構成。API キーも仮想キーもデータベースのパスワードも使わない。
- **[Kubernetes Under the Hood: What Actually Happens When You Run kubectl apply](https://dev.to/smtahosin/kubernetes-under-the-hood-what-actually-happens-when-you-run-kubectl-apply-5cog)** - `kubectl apply` の裏で、admission webhook、etcd の Raft、Informer による reconcile、スケジューラのノード選定、kubelet が動く流れを図解で追う。

## TechCrunch
- **[More banks says customers using AI agents are on their own — even if they get hacked](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/)** - Citi が、個人向け金融 AI エージェントに慎重な姿勢を取る大手金融機関に加わった。エージェント経由の被害の責任範囲が、エージェント連携を設計する側にも関わる話題。
- **[Felicis leads $7.5M bet on Unsiloed AI to make enterprise documents usable by AI agents](https://techcrunch.com/2026/11/18/felicis-leads-7-5m-bet-on-unsiloed-ai-to-make-enterprise-documents-usable-by-ai-agents/)** - 7人のチームが、企業文書を AI エージェントが使える形にする文書処理市場に挑む。資金調達の記事だが、エージェント向けのデータ整備という課題を示している。
- **[Nvidia is abandoning China after Jensen Huang's ouster](https://techcrunch.com/2026/11/17/nvidia-is-abandoning-china-after-jensen-huangs-ouster/)** - Nvidia の暫定 CEO が、中国向けのチップ販売をやめると表明した。AI 向け計算資源の供給地図が変わりうる。
- **[China dominates battery graphite, but this startup could break the monopoly](https://techcrunch.com/2026/11/18/china-dominates-battery-graphite-but-this-startup-could-break-the-monopoly/)** - 電池向け黒鉛をほぼ中国が握る中、Molten Industries がオークランドの新工場で独占に挑む。電池の要素技術とサプライチェーンの話。

## Ars Technica
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - EDK2 にブート初期段階でコードを実行できる重大な欠陥が見つかった。ファームウェアの更新管理がサーバー運用の盲点になりうる（2026年10月27日の記事）。
- **[PHP warns it plans to release 2 emergency patches imminently](https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/)** - PHP のメンテナーが緊急パッチ2件のリリースを予告した。PHP2Shell と呼ばれるリモートコード実行エクスプロイトの報告もあるが、未確認とされている（2026年10月21日の記事）。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - Meta の AI エージェント Muse で、会話を共有すると個人や業務の機密が露出した。Meta は調査中、共有機能を停止している（2026年10月20日の記事）。
- **[San Diego dumps both Flock cameras and smart streetlights](https://arstechnica.com/tech-policy/2026/11/san-diego-dumps-both-flock-cameras-and-smart-streetlights/)** - サンディエゴ市が、導入を市長が促してからわずか3年で、500台超の Flock カメラとスマート街灯を止める。監視技術の調達とプライバシーをめぐる動き。
- **[Seagate's new hybrid drive raises some old questions](https://arstechnica.com/gadgets/2026/11/seagate-resurrects-the-ssd-hdd-hybrid-drive/)** - Seagate の FireCuda Forge が、SSD と HDD を組み合わせるハイブリッドドライブという古い発想を復活させた。使う側にとっての疑問点を検討するレビュー。

## 注目トピック
今回はセキュリティ関連が目立った。nginx はサーバーホストの root に到達する RCE チェーンが公開され、NewsPicks の漏えいは Metabase の脆弱性がパッチ適用の前日に突かれた事例だった。EDK2 の UEFI 欠陥や PHP の緊急パッチ予告も合わせると、アプリ層からファームウェアまで、更新の遅れが直接のリスクになる状況が続いている。

もう一つの流れは、AI エージェントを実運用に載せるための周辺整備。Claude Code hook の fail-open、MCP ツール認可、LiteLLM を使ったキーレスなゲートウェイ、AWS のエージェント向けアカウント作成などは、権限や認証をどう設計するかに話題が集まっている。銀行がエージェント経由の被害は自己責任とする動きも、同じ課題の別の側面と言える。インフラ面では、Lambda のゼロスケール、リージョン間 99.999% SLA、Codeberg のドメイン消失など、運用の前提と単一障害点を見直す材料が並んだ。
