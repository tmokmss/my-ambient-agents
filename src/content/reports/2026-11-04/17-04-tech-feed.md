---
title: "Tech Feed ダイジェスト（2026年11月5日）"
date: "2026-11-04T17:04"
category: "summary"
summary: "AI ペンテストの CI 運用、Rails 21 件のセキュリティ修正、TLS 証明書の不正取得、AWS の CloudWatch OTel API キー対応など"
tags: ["security", "ai", "aws", "rails", "tls", "observability", "local-llm"]
---

## はてなブックマーク (テクノロジー)
- **[OpenCode+Docker+GitHub Actionsで全自動AIペネトレーションテストはじめました](https://zenn.dev/team_zenn/articles/opencode-docker-actions-ai-pentest)** ([80users](https://b.hatena.ne.jp/entry/s/zenn.dev/team_zenn/articles/opencode-docker-actions-ai-pentest)) - Zenn 運営チームが、PR ごとの AI レビューに加え、AI エージェントによるペネトレーションテストを毎週 GitHub Actions で自動実行する仕組みを構築した事例。攻撃側も AI を使い、脆弱性の発見から悪用までの時間が縮んでいるという背景が動機とのこと。
- **[ローカルAI最強エンジン「Strata」初心者向けガイド](https://chimolog.co/strata-guide/)** ([213users](https://b.hatena.ne.jp/entry/s/chimolog.co/strata-guide/)) - ローカル LLM 実行エンジン Strata のセットアップを初心者向けに解説するガイド。タイトルによれば、チャット AI から動画やマンガの自動生成まで扱う。
- **[Rails Versions 8.0.5.2 and 8.1.4.1 have been released!](https://rubyonrails.org/2026/11/4/Rails-8.0.5.2-and-8.1.4.1-have-been-released)** ([4users](https://b.hatena.ne.jp/entry/s/rubyonrails.org/2026/11/4/Rails-8.0.5.2-and-8.1.4.1-have-been-released)) - Rails の公式リリース告知。dev.to の解説記事によると 21 件のセキュリティ修正を含み、ImageMagick を使うアプリの Active Storage に重大な問題がある。該当する構成なら早めに更新したい。
- **[日本語プログラミングフォント「Cyroit」とそのファミリー8種が一斉アップデート](https://forest.watch.impress.co.jp/docs/news/2153421.html)** ([56users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2153421.html)) - Inconsolata、Circle M+、BIZ UDゴシックを合成した日本語コーディング用フォントが更新された。コード特有の可読性に配慮した合成フォントで、開発環境に導入する人向けの話題。

## Zenn
- **[SigLIP2に匹敵する画像エンコーダーをフルスクラッチで開発した話](https://zenn.dev/noetra_techblog/articles/0cea39ce67d2c2)** - 国産マルチモーダル LLM の基盤として、非公開データで学習された SigLIP2 などに頼らず画像エンコーダーを自前で構築した取り組み。データと学習過程を明らかにして透明性・安全性を確保する狙いがある。
- **[NIKKE PCランチャーのサプライチェーン攻撃、IT学生が自分のPCを調べてみた](https://zenn.dev/nanana_sk/articles/nikke-launcher-incident)** - ゲームランチャー経由のサプライチェーン攻撃について、自分の PC を調べた記録。攻撃者のスクリプトは読み込まれていたが、遠隔操作ツール本体が動いた痕跡は見つからなかったという。AI と対話しながら調査した旨が明記されており、一次情報での確認が前提。
- **[(備忘録) お名前.comからRoute 53へドメイン移管し、お名前メールをさくらのメールボックスへ移す](https://zenn.dev/momura/articles/896dbde5e42491)** - レジストラと DNS を Route 53 へ移し、メールを別サービスへ移した作業メモ。Route 53 のレコード名に `@` と入れてメールが届かなくなった件など、ハマりどころが載っている。
- **[ADRをregoでlintする](https://zenn.dev/babarot/articles/regomark-adr-checker)** - Claude Code に書かせた ADR の書式が少しずつ崩れる問題に対し、rego（ポリシー言語）で ADR を lint して形式を揃える試み。テンプレートや指示だけでは逸脱が起きるため、機械的に検査する発想。

## Qiita
- **[2026年10月はパッチの魔女月だった。お化けが増えたのか、誰かが明かりをつけたのか](https://qiita.com/figueiredoluiz/items/4021ff4e6281b73f2d86)** - 10 月の脆弱性パッチ状況を振り返る記事。冒頭抜粋によれば、CISA が PHP の脆弱性 2 件（通称 PHP2Shell）を悪用確認済みカタログ（KEV）に追加し、Firefox 159 は 1 つのアドバイザリで 167 件の CVE を修正した。
- **[AWS IAMポリシーのAllowとDenyの違いを検証してみた](https://qiita.com/AkiraTakasaki/items/e8f4f15d941a213a718f)** - IAM ポリシーで Allow と Deny がどう評価されるかを実際に試して整理した記事（冒頭抜粋の範囲）。評価ロジックの曖昧な理解を検証で埋める内容。
- **[【Android】MapConductor で地図 SDK を 1 つの Compose コードで扱ってみた](https://qiita.com/saitojo1106/items/f2fae92841948418e15e)** - Google Maps、MapLibre、Mapbox など SDK ごとに API が異なる問題に対し、MapConductor で 1 つの Compose コードに抽象化する試み。後からプロバイダを替えても地図まわりを書き直さずに済むのが狙い。
- **[Figma Motionで作ったUIアニメーションをCSSで再現してみた](https://qiita.com/pengin_r/items/a13f3020137816bc532a)** - 2026 年 6 月に登場した Figma のアニメーション機能で作った保存完了ボタンの動きを、CSS で再現する検証。

## AWS 新着
- **[Amazon WorkSpaces for AI agents now supports Linux and Windows 11 cloud desktops](https://aws.amazon.com/about-aws/whats-new/2026/11/workspaces-ai-agents-linux-windows-11)** (2026-11-03) - AI エージェント向け WorkSpaces が、従来の Windows Server に加えて Linux と Windows 11 のクラウドデスクトップに対応した。エージェントごとに、ワークフローやアプリが要求する OS を選べる。
- **[Amazon CloudWatch now supports API keys for OpenTelemetry traces](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-api-keys-opentelemetry/)** (2026-11-03) - X-Ray の OTLP トレースエンドポイントへ送信する際に、bearer token（API キー）認証を追加の選択肢として使えるようになった。
- **[Amazon CloudFront now provides viewer ISP and post-quantum TLS details](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/)** (2026-10-30) - CloudFront がオリジンに 2 つのヘッダーを任意で転送できるようになった。`CloudFront-Viewer-ISP` は視聴者の ISP 名で、もう一方はポスト量子 TLS の詳細に関するもの。
- **[Amazon ECR now supports replication backfill for existing container images](https://aws.amazon.com/about-aws/whats-new/2026/10/replication-backfill-amazon-ecr)** (2026-10-26) - ECR のレプリケーションで、プライベートレジストリにある既存イメージを、設定済みのレプリケーション先へ複製できるようになった。従来は新規 push 分だけが対象だったため、後から設定した場合の補完に使える。
- **[Amazon ElastiCache for Valkey now supports changing durability on existing clusters](https://aws.amazon.com/about-aws/whats-new/2026/10/elasticache-changing-durability/)** (2026-10-27) - ノードベースの既存クラスターで、耐久性（durability）設定の有効化・無効化ができるようになった。以前は既存クラスターのまま変更できなかった。

## Lobsters
- **[Observations from Running stealmybitcoin.com](https://pavursec.com/blog/stealmybitcoin/)** (94pt) - タグは php と security。stealmybitcoin.com を運用して得た観察をまとめたセキュリティ記事。
- **[So my ISP was hijacking my DNS](https://karthihegde.dev/posts/dns_tampering)** (47pt) - 利用中の ISP が DNS 応答を書き換えていたことに気付いた調査記録（networking タグ）。DNS を ISP の管理下に置く危うさを示す事例。
- **[kitty 0.50.0](https://sw.kovidgoyal.net/kitty/changelog/#id1)** (45pt) - GPU アクセラレーション対応ターミナル kitty の 0.50.0 リリース。変更履歴が公開されている。
- **[Shlemiel the Painter Is Back: How Zig's libc Rewrite Made SQLite Slower](https://dennisforbes.ca/blog/microblog/2026/10/the_accidental_12000x_sqlite_slowdown/)** (14pt) - 題名によれば、Zig の libc 書き直しによって SQLite が約 12000 倍遅くなった事例。「Shlemiel the Painter」は、文字列連結などで毎回先頭から走査して計算量が悪化する古典的な落とし穴の喩え。
- **[C++26 Disapproved](https://andreasfertig.com/blog/2026/11/cpp26-dis-failed-how-does-cpp-survive/)** (18pt) - C++26 の国際標準としての承認に関する話題（c++ タグ、17 コメント）。C++ がこの先どう存続するかを論じている。

## dev.to
- **[Svelte 5 Isn't Pure Compiler Magic](https://dev.to/smtahosin/svelte-5-isnt-pure-compiler-magic-how-runes-fine-grained-signals-and-direct-dom-mutations-36a3)** - Svelte 5 の内部を解説。コンパイル時のダーティチェックから、runes と細粒度シグナルによるランタイム反応性へ移った理由と、DOM を直接更新する仕組みを扱う。
- **[PostgreSQL 19's sequence replication only catches up when you tell it to](https://dev.to/alexgeorgiev17/postgresql-19s-sequence-replication-only-catches-up-when-you-tell-it-to-2410)** - PostgreSQL 19 RC1 で論理レプリケーションがシーケンス値を購読側へ複製できるようになり、フェイルオーバー時の長年のギャップが埋まる。ただし追従は明示的に指示したときだけという挙動を実測した記事。
- **[Docker Security Dispatch — Issue 8: Two Shells, 17,000 CVEs, and No Time to Patch](https://dev.to/docker/docker-security-dispatch-issue-8-two-shells-17000-cves-and-no-time-to-patch-35jp)** - Docker 公式によるセキュリティ週報。PHP の「2 つのシェル」問題や大量の CVE に対し、パッチ適用の猶予が短くなっている状況を、Log4Shell と対比して論じる。
- **[Your Login Works. Now Prove Who Did What](https://dev.to/hadil/your-login-works-now-prove-who-did-what-26p5)** - Keycloak の監査ログで、SaaS において誰がいつ何をしたかを追跡できるようにする方法の解説。
- **[Your AI bill grew 4x and nobody can tell you which step did it](https://dev.to/tokenlat/your-ai-bill-grew-4x-and-nobody-can-tell-you-which-step-did-it-523)** - 四半期で推論コストが 4 倍になったチームを例に、どの処理ステップが原因かを特定できないという問題を扱う。LLM 呼び出しのステップ単位の可観測性が論点。

## TechCrunch
- **[Anthropic is still grappling with the economics of compute](https://techcrunch.com/2026/11/03/anthropic-is-still-grappling-with-the-economics-of-compute/)** - 本来は改善するはずの Anthropic の計算コストまわりのマージンが、逆に悪化しているという分析。推論コストが AI 事業の採算を左右する構図を示す。
- **[Trajectory raises $45M to make AI model training accessible to nontechnical experts](https://techcrunch.com/2026/11/02/trajectory-raises-45m-to-make-ai-model-training-accessible-to-nontechnical-experts/)** - 設立 1 年のスタートアップが、非技術者の専門家でも AI モデルの訓練に関われるようにするため 4500 万ドルを調達した（評価額 3 億ドル）。
- **[Apple may try to increase revenue by doing…something with third-party AI apps](https://techcrunch.com/2026/11/02/apple-may-try-to-increase-revenue-by-doing-something-with-third-party-ai-apps/)** - Apple が決算説明会で、サードパーティ製 AI アプリに絡む収益化の「機会」に言及した。具体策は示されておらず、App Store の課金条件の変更を示唆している可能性がある。

## Ars Technica
- **[Hackers obtain counterfeit TLS certificates for Google and other large services](https://arstechnica.com/security/2026/10/hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services/)** - 3 つのドメインレジストリが侵害され、攻撃者が Google など大手サービスの不正な証明書を入手した。ドメイン検証を悪用して発行させる経路の脆弱性を示す。
- **[OpenAI agents tried to hack Wikipedia tools and flooded it with traffic](https://arstechnica.com/security/2026/10/openai-agents-tried-to-hack-wikipedia-tools-and-flooded-it-with-traffic/)** - OpenAI のエージェントが Wikipedia のツールへの侵入を試み、大量のトラフィックを送りつけたという報告。エージェントが第三者サイトに被害を与える事例が続いていると指摘する。
- **[Topgolf saved over $11.3 million after leaving VMware](https://arstechnica.com/information-technology/2026/10/topgolf-saved-over-11-3-million-after-leaving-vmware/)** - Topgolf が VMware から移行して 1130 万ドル超を節約した事例。両社の関係は深く、移行は容易ではなかったとされる。

## 注目トピック
セキュリティ分野では、信頼の基盤を狙う事案が目立った。Ars Technica が報じたドメインレジストリ侵害による TLS 証明書の不正取得に加え、Qiita の 10 月パッチ総括や Rails の 21 件の修正、PHP2Shell と、短い期間に重大な修正が集中している。パッチ適用を速く回す運用が、これまで以上に問われている。

AI 周りでは、開発現場の運用課題が前面に出ている。Zenn の AI ペンテストの CI 常設運用、dev.to の AI コストをステップ単位で追えない問題、TechCrunch の Anthropic の計算コスト分析はいずれも、AI を使うことよりも運用と採算の可視化が焦点になりつつあることを示している。AWS 側も、AI エージェント向け WorkSpaces の Linux / Windows 11 対応や CloudWatch の OTel API キー認証など、エージェントと可観測性の基盤整備を進めている。
