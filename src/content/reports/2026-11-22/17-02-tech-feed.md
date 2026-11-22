---
title: "Tech Feed ダイジェスト（2026年11月22日 夕）"
date: "2026-11-22T17:02"
category: "summary"
summary: "Reverse Spec Flow、GhostScript の Upload2Shell、Lambda Web Functions のストリーミング検証、AWS Graviton5 T9g など8ソースの注目記事"
tags: ["ai-agent", "security", "aws", "lambda", "testing", "postgresql", "llm"]
---

## はてなブックマーク (テクノロジー)
- **[[AI-Driven Modernization] 既存コードからAIエージェント向けの仕様書を起こす「Reverse Spec Flow」を公開しました](https://aws.amazon.com/jp/blogs/news/aidm-introducing-reverse-spec-flow/)** ([132users](https://b.hatena.ne.jp/entry/s/aws.amazon.com/jp/blogs/news/aidm-introducing-reverse-spec-flow/)) - AWS の公式ブログ。既存コードベースから AI エージェントが読む前提の仕様書を逆生成する手法「Reverse Spec Flow」を公開したという告知で、レガシー資産のモダナイズにエージェントを使う際の入口になる。
- **[Upload2Shell](https://pwn.ai/upload2shell)** ([33users](https://b.hatena.ne.jp/entry/s/pwn.ai/upload2shell)) - GhostScript の脆弱性（CVE-2026-125396）を扱うセキュリティ調査。Lobsters でも同件の研究ページが共有されている。アップロードされた PDF/PS を GhostScript で処理するサービスは影響有無の確認が必要。
- **[フロントエンドのテストカバレッジは 100%強制がいい](https://speakerdeck.com/bengo4com/20261122-jsconfjp2026-coverage-100)** ([51users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/bengo4com/20261122-jsconfjp2026-coverage-100)) - JSConf JP 2026 の登壇スライド。フロントエンドでカバレッジ 100% を強制する運用を主張する内容。AI がコードを大量に書く時代のガードレールとしての視点でも読める。
- **[情報漏えいを公表しないリスクの要点整理](https://qiita.com/Maruo110/items/385b2c7ef5fbd074e6e2)** ([139users](https://b.hatena.ne.jp/entry/s/qiita.com/Maruo110/items/385b2c7ef5fbd074e6e2)) - 個人情報保護委員会への報告など、漏えいを公表しないことのリスクを整理した Qiita 記事。インシデント対応の判断材料になる。
- **[Google が実践する最先端の SRE](https://sre-magazine.net/articles/7/aoto/)** ([23users](https://b.hatena.ne.jp/entry/s/sre-magazine.net/articles/7/aoto/)) - SRE Magazine の記事。Google における SRE の実践を紹介している（タイトルから読み取れる範囲）。

## Zenn
- **[Next.jsのストリーミングはLambda Web Functionsで動くか](https://zenn.dev/ryota_09/articles/nextjs-suspense-streaming-lambda-web-functions)** - Next.js の Suspense ストリーミングが Lambda Web Functions で段階表示されるかを Vercel と並べて実測した記事。以前の Lambda Web Adapter では動かなかったが、Web Functions では追加設定なしでストリーミングが動いたとのこと。
- **[自分の代わりに動くAgentへ。Claude CodeとCodexで作る自律改善ハーネス](https://zenn.dev/nttdata_tech/articles/9562962cc181a1)** - 一度伝えたことを覚え、過去の作業を追える個人用ハーネスを作った話。Claude Code と Codex で設定が分かれていく問題の解消も動機になっている。
- **[QA生産性を爆上げさせるためのQA AIプラットフォーム構築](https://zenn.dev/gatechnologies/articles/8bdea59269eb10)** - QA 工程を12個の Skill にして、QA AI プラットフォーム「GAQ」をチームに定着させた事例。
- **[最近、コードを真面目に読まなくなった](https://zenn.dev/hiromoo/articles/reading-less-preparing-more)** - 前提を整えておけば AI の出すコードは概ね正しいという実感から、差分の精読より AI が正しく動く前提づくりに時間を割く考え方を述べる。

## Qiita
- **[AWS構成図を毎回同じ形で出したい！ コード5行で図になるコマンドを作りました](https://qiita.com/sagochiko/items/86cc8715558c0e93a296)** - AI に座標や XML を書かせると図が毎回変わる問題に対し、5行の定義から構成図を組み立てる CLI「archwire」を作った。`uvx archwire` で試せる（冒頭抜粋より）。
- **[PHP が再び重大な脆弱性を修正。その修正版はもうあなたの PHP に届いているのか](https://qiita.com/suwa_nobu/items/83e35e3be86b236cc807)** - PHP の重大な脆弱性修正リリース後、公開から9時間で6つの入手先を調べたところ、Ubuntu と brew の php にはまだ届いていなかった。修正版が実環境に届くまでのラグを実測した記事。
- **[PostgreSQLのRLSでテナント越えを防ぐ：WHERE句の書き忘れを無効化する](https://qiita.com/takumi_engineer/items/b2ce326296020c430d23)** - マルチテナント API で `WHERE tenant_id` を書き忘れても、行レベルセキュリティで DB 側で止める構成を Node.js/TypeScript で作る。
- **[Claude Codeの--fallback-modelで無人ジョブを止めない](https://qiita.com/joinclass/items/080927f3b092b9de46e6)** - `claude -p` で30以上のジョブを無人実行している運用で、混雑・利用上限・終了コードの3つの落とし穴と `--fallback-model` での実装を紹介する。
- **[個人開発で回せる依存パッケージの脆弱性対策（pnpm + Dependabot）](https://qiita.com/natsugure/items/808ae45eb32474d3a47b)** - pnpm モノレポで `pnpm audit` が204件の脆弱性を出した状態から、個人開発でも回せる対策に落とし込む。

## AWS 新着
- **[Introducing Amazon EC2 T9g instances based on Graviton5](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-t9g-instances-ga/)** (2026-11-20) - Graviton5 ベースの低価格バースタブルインスタンス T9g が GA。汎用 EC2 インスタンスの中で最良の価格性能をうたう。
- **[Amazon EventBridge Scheduler adds 589 new API actions and event bus targets](https://aws.amazon.com/about-aws/whats-new/2026/11/eventbridge-scheduler-new-api-actions/)** (2026-11-20) - 81サービスにまたがる589個の SDK API アクションが Scheduler から直接呼べるようになり、拡張 Custom event bus のテンプレート化ターゲットも追加された。
- **[AWS Backup now supports incremental backups for Amazon DynamoDB](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-backup-incremental-backups-dynamodb/)** (2026-11-20) - DynamoDB の増分バックアップに対応。最短1時間間隔のスケジュールを保ったままバックアップ容量を減らせる。
- **[Amazon ECS Action Logs now cover tasks, container instances, and capacity providers](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-ecs-action-logs-expanded-troubleshooting)** (2026-11-20) - Action Logs の対象がタスク、コンテナインスタンス、クラスター、キャパシティプロバイダーに拡大。タスクが失敗した理由やクラスターの挙動の調査がしやすくなる。
- **[Amazon Managed Service for Prometheus supports 2B active metrics and 300K rules per workspace](https://aws.amazon.com/about-aws/whats-new/2026/11/amp-supports-2b-metrics-300k-rules/)** (2026-11-20) - 1ワークスペースあたり最大20億のアクティブ時系列と30万のルールに対応。大規模環境で複数ワークスペースに分割する必要が減る。

## Lobsters
- **[TODOs JJ Style](https://bwc9876.dev/blog/jj_todo/)** (57pt) - バージョン管理ツール Jujutsu (jj) で TODO を管理するワークフローを紹介する記事（vcs タグ）。
- **[port scanning for mojang](https://sipacid.com/blog/port-scanning-for-mojang/)** (45pt) - Mojang 向けのポートスキャンを扱ったブログ記事（rant タグ）。
- **[Advice for the next 100 Rust GUIs](https://linebender.org/blog/next-100-guis/)** (25pt) - Linebender による、今後作られる Rust 製 GUI ツールキット向けのアドバイス。
- **[NixOS bring-up on an Alibaba RISC-V board](https://feyor.sh/blog/nixos-bringup-on-an-alibaba-riscv-board/)** (23pt) - Alibaba の RISC-V ボードに NixOS を立ち上げる過程を記録したハードウェア寄りの記事。

## dev.to
- **[How much does it cost to run a text game with LLMs](https://dev.to/hiper2d/how-much-does-it-cost-to-run-a-text-game-with-llms-57o7)** - 入力・キャッシュ・出力のトークン単価だけでは実コストが読めないという問題意識から、テキストゲームを LLM で動かす実際の費用を検証する。推論トークンの量やキャッシュ率が見積もりの鍵になる。
- **[I Made My RAG Safer. It Got Worse Under Load](https://dev.to/ayush_singh_9b0d83152be5b/i-made-my-rag-safer-it-got-worse-under-load-3olm)** - RAG の回答を1文ずつ検証する安全策を入れたところ、高負荷時の挙動が悪化した話。検証コストがスループットに与える影響を扱う。
- **[FastAPI vs Node.js vs Bun: One PostgreSQL Setting Was Worth Up to 31%](https://dev.to/rudratosh/fastapi-vs-nodejs-vs-bun-one-postgresql-setting-was-worth-up-to-31-no-runtime-changed-4b1h)** - ランタイム比較ベンチマークで、PostgreSQL の設定1つが最大31%の差を生んだという検証。ランタイム選定より DB 設定が効く場面がある。
- **[How long it actually takes a GPGME fix to reach Ubuntu](https://dev.to/alexgeorgiev17/how-long-it-actually-takes-a-gpgme-fix-to-reach-ubuntu-30go)** - GPGME の double-free（CVE-2026-129975）に対し、Debian は開示当日に修正を出したが、2日後も Ubuntu 24.04 には届いていないという記録。
- **[Detecting WasmPlugin version drift in Cloud Load Balancing Service Extensions](https://dev.to/googlecloud/detecting-wasmplugin-version-drift-in-cloud-load-balancing-service-extensions-52p5)** - Application Load Balancer の Service Extensions に Wasm プラグインを付けた際の、バージョンのずれ（ドリフト）を検出する方法を扱う。

## TechCrunch
- **[Meta's AI agent Muse is mixing up conversations and could be exposing private data, report says](https://techcrunch.com/2026/11/19/metas-ai-agent-muse-is-mixing-up-conversations-and-exposing-private-data-report-says/)** - Meta の AI エージェント Muse が、従業員が行っていない注文や他人の銀行残高などの情報を表示したと報じられた。エージェントのセッション分離の問題として開発者にも示唆がある。

※ 他ソースとの重複と過去レポートの掲載済み分を除くと、72時間以内の新規記事は技術的に採れるものが1件のみだった。

## Ars Technica
- **[How to tell a cyberattack from a plain old outage](https://arstechnica.com/security/2026/11/how-to-tell-a-cyberattack-from-a-plain-old-outage/)** - 大規模障害が続いた状況を受け、全面ダウンを安易にサイバー攻撃と決めつけないための見分け方を解説する。
- **[Chainalysis says hackers stole credentials and tokens for all of its customers](https://arstechnica.com/security/2026/11/chainalysis-says-hackers-stole-credentials-and-tokens-for-all-of-its-customers/)** - Chainalysis が、AI エージェントや経路上でのデータ窃取を含む「多方面からのサイバー攻撃」で全顧客の認証情報とトークンが盗まれたと公表した。連携先のトークンを失効・再発行する運用が問われる事例。
- **[Seagate's new hybrid drive raises some old questions](https://arstechnica.com/gadgets/2026/11/seagate-resurrects-the-ssd-hdd-hybrid-drive/)** - Seagate の FireCuda Forge が SSD と HDD のハイブリッドという古いアイデアを復活させた。昔から指摘されてきた疑問がまた浮かぶ、という論調。

## 注目トピック
今回は「AI エージェントを使う前提で、周辺の品質・安全をどう担保するか」が複数のソースに共通していた。Reverse Spec Flow（既存コードから仕様を逆生成）、カバレッジ100%強制、AI が書くコードを読まずに前提を整える方針、自律ハーネスの自作と、手段は違っても人間がレビューする量が減る前提のガードレール設計が主題になっている。一方で Meta の Muse が会話を取り違えて他人の情報を出した件や Chainalysis の全顧客トークン流出は、エージェントや連携トークンの分離と失効の設計を改めて突きつける。

もう1つの流れは、脆弱性修正が手元に届くまでのラグだ。PHP の修正版が Ubuntu や Homebrew に届いていない実測（Qiita）と、GPGME の修正が Debian に当日出ても Ubuntu に2日届いていない記録（dev.to）が同時に出ており、GhostScript の Upload2Shell のような処理系の脆弱性も含めて、ディストリビューションの更新に任せず自分の環境の実バージョンを確認する運用が重要になっている。
