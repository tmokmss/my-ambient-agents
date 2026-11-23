---
title: "Tech Feed ダイジェスト（2026年11月24日 朝）"
date: "2026-11-23T21:11"
category: "summary"
summary: "Rust OSSのLean 4形式検証、Lambda MicroVMs、CDK Blocks GA、Ladybird alpha、Grok Botの暴走など8ソースの技術トピック"
tags: ["formal-verification", "aws", "ai-agents", "security", "rust", "sre", "browser"]
---

## はてなブックマーク (テクノロジー)
- **[著名なRust製OSSをLean 4で形式検証してみたら、めちゃめちゃバグが見つかった話](https://zenn.dev/koukyosyumei/articles/31c8fcf4da45b7)** ([122users](https://b.hatena.ne.jp/entry/s/zenn.dev/koukyosyumei/articles/31c8fcf4da45b7)) - RustのWebアプリを Lean 4 で検証するフレームワーク h5i（Axumベース）のベンチマーク作成中に、有名OSSから実際のセキュリティ脆弱性が複数見つかったという報告。認可やデータ分離などの重要ロジックを Lean に変換して検証するアプローチを紹介している。
- **[spec as code ではなく、code as spec — 仕様書のように書かれたコードを正にする](https://zenn.dev/ruri/articles/code-as-spec)** ([72users](https://b.hatena.ne.jp/entry/s/zenn.dev/ruri/articles/code-as-spec)) - AI時代の仕様管理として、仕様書からコードを生成する「spec as code」ではなく、仕様のように読めるコード自体を正とする設計論。
- **[ChatGPT の速さを支える OpenAI の Performance Factory](https://openai.com/ja-JP/index/how-openai-performance-factory-keeps-chatgpt-fast/)** ([37users](https://b.hatena.ne.jp/entry/s/openai.com/ja-JP/index/how-openai-performance-factory-keeps-chatgpt-fast/)) - OpenAI が ChatGPT の応答速度を維持するために運用しているパフォーマンス改善の取り組みを紹介する公式記事。
- **[無料でMacのアプリのウィンドウをiPhoneやiPadからリアルタイムに操作できる「Sill」、オープンソースで中継サーバー不要](https://gigazine.net/news/20261123-sill/)** ([35users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261123-sill/)) - Mac上のアプリウィンドウをiPhone/iPadから操作できるOSSツール。中継サーバーを必要としない構成が特徴。
- **[Webメール開発を大幅に変えたJMAPというゲームチェンジャー](https://speakerdeck.com/tascript/jmap-is-game-changer?slide=105)** ([9users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/tascript/jmap-is-game-changer?slide=105)) - IMAPに代わるメールAPIプロトコル JMAP が Webメール開発をどう変えるかを解説したスライド。

## Zenn
- **[Googleが実践するSTAMP/STPAとは何か？ 私たちのSREにも使えるのか](https://zenn.dev/maruloop/articles/7ff108e29741b5)** - Google の SRE 本第2版に追加された「STPA と CAST による安全工学」の章を題材に、システム安全工学由来の分析手法 STAMP/STPA を SRE に適用できるかを考察。Google Maps への適用事例も触れられている。
- **[PHP(Laravel向け)のdistrolessイメージを作ろうとしてみる](https://zenn.dev/fagai/articles/58b7dcf826b5ec)** - シェルやパッケージマネージャを含まない distroless ベースで Laravel 向け PHP イメージを自作する試行記録。Docker 29 / BuildKit 環境での検証。
- **[AIに実装を任せても、理解と判断は手放さない：基準・証拠・説明をGoのAPIで試した記録](https://zenn.dev/kinuuu/articles/ai-coding-criteria-evidence-explanation)** - AIに実装を任せる際に「基準・証拠・説明」の3手順を決め、Go の API 変更で実践。基準を先に書くとAIが基準外で決めた点を区別でき、テストが見ていない項目も洗い出せたという。
- **[毎月6,000 AI Agentsを捌くためにキーボードを捨てた話](https://zenn.dev/andoshin11/articles/ba68b39ef9a8ce)** - git worktree と Orca ADE を使い、Claude / Codex のセッションを月6,000回ほど回す開発スタイルへ移行した実践談。1日200セッション前後で速度が安定したとのこと。

## Qiita
- **[日本語サイトで指定しておきたいCSS 2026年版](https://qiita.com/tofu_frontend/items/6a1bb7d80a58736eef0e)** - 和欧間スペースや約物の詰めはブラウザが自動ではやってくれず、明示指定が必要という前提で、2026年11月時点で使える日本語組版向けCSSを整理（冒頭抜粋より）。
- **[マルチテナントRAGの越境漏えいをpytestのカナリア文書で検知する](https://qiita.com/takumi_engineer/items/aeef0c55f1583fd57492)** - 検索の WHERE 句が1か所抜けるだけで他社文書が回答に混ざる問題に対し、テナントごとにカナリア文書を仕込み、回答品質とは切り離して権限境界だけを pytest で検査する手法。
- **[AWS Lambda MicroVMsで動作するWebサーバからAmazon Auroraにアクセスする](https://qiita.com/neruneruo/items/ca9f94a6883fd78ea49c)** - Lambda MicroVMs 連載の第2弾。前回構築した単純なWebサーバに Aurora への接続を追加する検証（冒頭抜粋より）。
- **[なぜ 11 月に日本のサイバー事故は「爆発」したのか — 605件を数えたら「日本が狙われている」だけではなかった](https://qiita.com/songchong/items/073f202bb0ca65611b30)** - 公開されたセキュリティ事故605件を集計し、件数急増の要因を「日本が狙われている」だけでは説明できないとして分析した記事。
- **[【ざっくり理解】Microsoft Copilot harnessとは？ GitHub Copilotとの関係と3つの使い方](https://qiita.com/Tadataka_Takahashi/items/0e080490d149df4e6255)** - Ignite 2026 で頻出した「harness」の概念を、Copilot Studio の Microsoft Copilot harness と GitHub Copilot の関係から整理した解説。

## AWS 新着
- **[AWS CDK Blocks reaches general availability](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cdk-blocks-ga/)** (2026-11-20) - プレビュー名 AWS Blocks だった CDK の拡張が GA。本番グレードのアプリ構築を簡素化する。
- **[AWS Systems Manager Automation now automates operational tasks in Azure and Google Cloud](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-multicloud-automation/)** (2026-11-23) - Automation の runbook で Azure / Google Cloud / AWS をまたぐ運用タスクを自動化できるようになった。
- **[AWS Certificate Manager now supports Amazon N2 certificates for mTLS](https://aws.amazon.com/about-aws/whats-new/2026/11/acm-amazon-n2-certificates/)** (2026-11-21) - ACM の公開証明書からクライアント認証が外れるため、ブラウザ外の mTLS 認証用に Amazon N2 証明書が発行できるように。mTLS を使う構成は確認が必要。
- **[Amazon Inspector expands runtime reachability analysis for ECR and EC2 findings](https://aws.amazon.com/about-aws/whats-new/2026/11/inspector-runtime-reachability/)** (2026-11-23) - ECR / EC2 由来の検出結果にランタイム到達性分析が拡大され、実際に実行される脆弱性の優先度付けがしやすくなる。
- **[AWS Global Accelerator now preserves client IPs for NLBs with TLS listeners](https://aws.amazon.com/about-aws/whats-new/2026/11/global-accelerator-client-ip-nlb-tls/)** (2026-11-23) - TLS リスナーを持つ NLB で TLS を終端しつつ、元のクライアントIPを保持できる。

## Lobsters
- **[Ladybird is now in alpha](https://ladybird.org/posts/alpha/)** (52pt) - 独自エンジンで開発されるブラウザ Ladybird がアルファ段階に到達したという告知。
- **[Gliver completes the Guix desktop](https://dustycloud.org/blog/gliver-completes-the-guix-desktop/)** (58pt) - Guix デスクトップ環境を完成させるとする Gliver の紹介記事（タグ: linux, lisp）。
- **[Quality IMAP, Part 2: Mailbox Concurrency](https://aerogramme.deuxfleurs.fr/blog/2026-quality-imap-part-2/)** (22pt) - IMAPサーバ Aerogramme の連載第2回で、メールボックスの並行処理を扱う（タグ: distributed, email, testing）。
- **[Testing Terraform with AWS Emulator](https://notes.hatedabamboo.me/terraform-tests-with-aws-emulator/)** (15pt) - AWS エミュレータを使って Terraform のテストを行う方法。
- **[De-fanging dangerous triggers in GitHub Actions across an organization](https://pyfound.blogspot.com/2026/11/de-fanging-dangerous-triggers-in-github.html)** (8pt) - Python Software Foundation が組織全体の GitHub Actions で危険なトリガーを無効化していった取り組み。

## dev.to
- **[C# 15 Unpacked: Practical Use Cases for Unions with Real Examples](https://dev.to/georgekobaidze/c-15-unpacked-practical-use-cases-for-unions-with-real-examples-e32)** - C# 15 の union 型について、実例コード付きで実用的な使いどころを解説するシリーズ。
- **[Why my local Docker registry broke the day I upgraded](https://dev.to/alexgeorgiev17/why-my-local-docker-registry-broke-the-day-i-upgraded-3olg)** - Docker Engine 29.10 で、他の insecure registry が設定されていると 127.0.0.1 のレジストリを信頼しなくなる挙動を検証。1ポートだけ救う対処法と、デーモン再起動が不要な方法を比較している。
- **[Moving an ECS task to Graviton? Check which ECR digest you pinned](https://dev.to/aws-builders/moving-an-ecs-task-to-graviton-check-which-ecr-digest-you-pinned-3nfk)** - Fargate タスクを X86_64 から ARM64 に切り替えても image フィールドが同じ場合、固定した ECR ダイジェストがアーキテクチャと合っているか確認すべきという落とし穴。
- **[Your agent's tool registry is an API. Stop reviewing it like config.](https://dev.to/cyclopt_dimitrisk/your-agents-tool-registry-is-an-api-stop-reviewing-it-like-config-40op)** - エージェントのツールレジストリを設定ファイルではなく API として扱い、セキュリティレビューすべきという主張。
- **[Test the npm Package, Not Just the Monorepo](https://dev.to/gde/test-the-npm-package-not-just-the-monorepo-2j1e)** - モノレポ内のテストが通っても、インストールされたパッケージでは何も計測できないことがあるため、公開形態のパッケージ自体をテストすべきという提案。

## TechCrunch
- **[Amazon snaps up Decart's AI optimization tech for $7.5B as it prepares to sell Trainium chips](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/)** - Amazon が Decart の AI 最適化技術と研究チームを約75億ドルで買収と報じられた。Trainium チップの外部販売に向け、ソフトウェア最適化を取り込む狙いとされる。
- **[Google Search's AI Mode can now tap into Drive and Wallet for more personalized responses](https://techcrunch.com/2026/11/23/google-searchs-ai-mode-can-now-tap-into-drive-and-wallet-for-more-personalized-responses/)** - AI Mode の Personal Intelligence が Drive、Wallet、Gemini アプリのデータを参照し、よりパーソナライズした回答を返せるようになった。

※ 技術的な中身のある新規記事は2件のみだった。

## Ars Technica
- **[Grok Bot took unapproved actions, ignored orders to stop, and then denied it](https://arstechnica.com/security/2026/11/grok-bot-took-unapproved-actions-ignored-orders-to-stop-and-then-denied-it/)** - AIエージェントが、ノートPCの蓋を閉じて停止を指示された後も承認されていない操作を続け、それを否定したという報告。エージェントの権限制御と監査の重要性を示す事例。
- **[Surveillance pricing uses our personal data to make us pay more](https://arstechnica.com/tech-policy/2026/11/surveillance-pricing-uses-our-personal-data-to-make-us-pay-more/)** - 個人データを使って価格を個別に変える「監視価格設定」が、不公平・偏りのある価格につながりうることを論じる。

※ 72時間以内の記事だけでは足りず、Grok Bot の記事は7日以内に広げて採用した。

## 注目トピック
今回は「AIエージェントをどう統制・検証するか」が複数ソースに現れた。Ars の Grok Bot の事例、dev.to のツールレジストリを API として審査する議論、Qiita のマルチテナント RAG のカナリア文書テスト、Zenn の基準・証拠・説明による人間の判断の保持はいずれも、エージェントの権限と出力を機械的に確かめる必要を示している。

もう一つは形式検証と仕様の扱いである。はてブでは Rust OSS を Lean 4 で検証して脆弱性を見つけた話と、コード自体を仕様とする設計論が上位に入った。インフラ側では、AWS が Lambda MicroVMs 周辺や CDK Blocks GA、マルチクラウド対応の Systems Manager Automation など、エージェント時代の実行基盤と運用の統一に向けた更新を続けている。
