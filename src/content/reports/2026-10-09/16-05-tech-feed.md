---
title: "Tech Feed ダイジェスト（2026年10月10日）"
date: "2026-10-09T16:05"
category: "summary"
summary: "Deno の Cloudflare 合流、AWS の Iceberg MV と Nova 2.5 Sonic、TLS 証明書・サプライチェーン攻撃など8ソースの注目記事"
tags: ["deno", "cloudflare", "aws", "security", "llm", "typescript", "rust", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[Deno is joining Cloudflare](https://deno.com/blog/cloudflare)** ([41users](https://b.hatena.ne.jp/entry/s/deno.com/blog/cloudflare)) - JavaScript ランタイム Deno のチームが Cloudflare に合流するという発表。Workers を使う開発者や Deno Deploy 利用者は今後の移行方針を確認しておきたい。同じ件を Lobsters と dev.to も別角度で取り上げており、dev.to では Deno Deploy の提供期間と移行猶予が論点になっている。
- **[印刷物基準の文字組みをウェブの世界で。iOS用文字組みエンジンをJavaScriptに移植しました](https://www.non-standardworld.co.jp/stone-engine-js/)** ([87users](https://b.hatena.ne.jp/entry/s/www.non-standardworld.co.jp/stone-engine-js/)) - 日本デザインセンター発の iOS 向け文字組みエンジンを JavaScript に移植した事例。印刷品質の日本語組版を Web で扱う実装面の知見が期待できる。
- **[国内で相次ぐ不正アクセス、AIエージェントによる攻撃の可能性](https://www.cscloud.co.jp/news/report/202610099351/?lang=en)** ([129users](https://b.hatena.ne.jp/entry/s/www.cscloud.co.jp/news/report/202610099351/?lang=en)) - サイバーセキュリティクラウドの観測によると、約40分間に326個の IP アドレスを使い分けて1,200件超のアクセスを繰り返す挙動が確認された。IP 単位のレート制限だけでは防ぎにくい自動化攻撃の例として参考になる。
- **[Qwen3.8-27Bを8GBに凝縮！メモリ16GBのノートで動く「Saluki 27B」](https://pc.watch.impress.co.jp/docs/news/2147095.html)** ([20users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2147095.html)) - 27B モデルを約8GBまで圧縮し、メモリ16GBのノート PC でローカル実行できるようにした取り組み。量子化によるローカル LLM の実用域拡大を示している。
- **[AnthropicがOSS向けに無料AIセキュリティスキャン「OSS Scanner」を開始](https://gigazine.net/news/20261009-anthropic-oss-scanner/)** ([18users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261009-anthropic-oss-scanner/)) - オープンソースプロジェクト向けの無料の AI 脆弱性スキャンサービス。メンテナーにとっては脆弱性発見の手段が増える。

## Zenn
- **[約 0.5 GiB のダウンロードで SSD に 6 GiB 書いていた — Steam のゲーム更新 1 件を実測し、減らせる場所を探した](https://zenn.dev/berobero/articles/steam-update-ssd-writes)** - steamcmd で『Rust』専用サーバー版の更新を測定した記事。ダウンロード約0.5GiBに対し SSD への書き込みは約6GiBに達しており、大きなファイルの更新方式に原因があるとしている。差分更新の設計を考える上で参考になる。
- **[Renovate の更新 PR を AI エージェントにレビューさせ、自動マージまでつなげる](https://zenn.dev/greendrop/articles/2026-10-09-4664c51706f346)** - 依存関係更新 PR のレビューから自動マージまでを AI エージェントで回す構成の紹介。更新作業の定型負荷を減らす実践例。
- **[Haiku 5.5 を機に Sonnet 以下で動かしていたサブエージェントを見直した](https://zenn.dev/genda_jp/articles/haiku-5-5-subagent-roles)** - Haiku 5.5 は effort 指定ができる初の Haiku で、単価が Haiku 4.5 の1/10になったことを受け、サブエージェントごとのモデル割り当てを見直した記録。
- **[Notion や Slack から AI に仕事を依頼できる仕組みを Claude Code Routines で作った](https://zenn.dev/terass_dev/articles/6e6562d54d5505)** - 保存済みプロンプトでクラウド上にセッションを起動する Routines を使い、チケットや Slack から作業を依頼できるようにしてチーム運用している事例。
- **[2026年9〜10月の情報漏洩19件、公表文を全部読んで考えたこと](https://zenn.dev/bita/articles/1616afdb93c4a6)** - 公表文19件を読み込み、侵入手口まで公表された8件はいずれも脆弱性または不正ログインだったと整理している。AI への言及は0件だったという。

## Qiita
- **[return await は付けても付けなくても同じ？ try の中では catch と finally の動きが変わる](https://qiita.com/ennagara128/items/6abdd7057d7b50dba194)** - async 関数での `return await` の有無を扱った記事（冒頭抜粋より）。`try` 内では `catch` や `finally` の挙動が変わるため、ESLint の `no-return-await` に機械的に従う前に確認したい。
- **[「最大30日」と回答する前に、Amazon BedrockでOpenAIのモデルに送った文がどこに何日残るか確かめた話（2026年版）](https://qiita.com/ntaka329/items/1ad9131353e51c5b99fd)** - 「事業者に送った文は不正監視のため最大30日保存される」という回答案を、Bedrock 経由の OpenAI モデルで実際に検証した記事（冒頭抜粋より）。生成 AI 機能のセキュリティ確認で役立つ。
- **[Windows端末の操作ログを標準機能だけでCloudWatch Logsに集める](https://qiita.com/infra365/items/9856ab92f4f29c97d5d1)** - 追加ソフトなしで、AWS の標準機能のみで Windows 端末の操作ログを収集する方法の検証。
- **[Drizzleを使用したマイグレーション & DB操作 + drizzle-orm/zodによるバリデーション](https://qiita.com/zuma_75/items/8161ba3d2ace88b50846)** - Prisma 以外の ORM として Drizzle を試し、スキーマ定義からマイグレーション生成、CRUD 実装までまとめた記事。
- **[攻撃者はWebアプリのどこを狙う？ 初心者でも今すぐできるセキュリティチェックリスト](https://qiita.com/Koukyosyumei/items/8aaa44ff15a3b404fd8b)** - システムセキュリティ研究者による Web アプリ向けチェックリスト。相次ぐ漏洩ニュースを受けた自己点検に使える。

## AWS 新着
- **[OpenAI GPT-6.1 Sol now supports Ultrafast mode on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/openai-gpt-sol-ultrafast-amazon/)** (2026-10-08) - 速度優先のワークロード向けに、Bedrock 上の GPT-6.1 Sol で高速推論の Ultrafast モードが使えるようになった。
- **[Announcing Amazon Nova 2.5 Sonic with improved reasoning for voice agents](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-nova-2.5-sonic/)** (2026-10-05) - リアルタイム音声エージェント向け speech-to-speech モデルが GA。推論と指示追従が改善された。
- **[Amazon Redshift adds support for creating and refreshing Apache Iceberg materialized views](https://aws.amazon.com/about-aws/whats-new/2026/10/redshift-iceberg-materialized-views)** (2026-10-05) - 重い結合・集計を事前計算し、結果を Iceberg 形式のマテリアライズドビューとして保持できる。
- **[AgentCore Gateway supports private TLS certificates for VPC endpoints](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-private-tls-vpc/)** (2026-10-02) - AgentCore Gateway が、MCP・OpenAPI・HTTP プロキシの各ターゲットで、プライベート CA 署名の TLS 証明書を扱えるようになった。社内 VPC 内のツール接続に使いやすい。
- **[Amazon Bedrock Managed Agents, powered by OpenAI, is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/)** (2026-09-29) - AWS と OpenAI が共同開発した、OpenAI の Agents API をカスタマイズした AWS ネイティブなエージェント基盤がプレビュー開始。

## Lobsters
- **[Anti-Patterns in Software Blogging](https://refactoringenglish.com/blog/anti-patterns-software-blogging/)** (143pt) - 技術ブログで避けるべきパターンを整理した記事。コメントも52件と議論が活発で、書き手向けの実践的な内容。
- **[The people holding up the internet](https://sheets.works/data-viz/holding-up-the-internet)** (87pt) - インターネットを支える人々をデータ可視化で示す記事（historical / web タグ）。OSS 依存の脆弱さを考える材料になる。
- **[Bevy 0.20](https://bevy.org/news/bevy-0-20/)** (53pt) - Rust 製ゲームエンジン Bevy の新リリース。
- **[Ending the Casuarina Linux Experiment](https://casuarina.org/news/ending-the-casuarina-linux-experiment/)** (50pt) - 個人・小規模の Linux ディストリビューション運用を終了するという振り返り記事。
- **[Demoting i686 Windows targets to std-only](https://blog.rust-lang.org/2026/10/02/demoting-i686-windows-targets-to-std-only/)** (14pt) - Rust の i686 Windows ターゲットのサポート階層を std のみに引き下げるという公式告知。32ビット Windows 向けにビルドしている場合は影響を確認したい。

## dev.to
- **[Django 6.1's PBKDF2 default change rewrites existing password hashes on next login](https://dev.to/alexgeorgiev17/django-61s-pbkdf2-default-change-rewrites-existing-password-hashes-on-next-login-311m)** - Django 6.1 で PBKDF2 の既定反復回数が120万から150万に引き上げられた。ログイン時のコスト増を測定したところ、管理者が意図的に設定した既存ハッシュも次回ログインで書き換わることが分かったという。
- **[Docker just shipped the agent wall I wanted. It's off by default.](https://dev.to/slabb/docker-just-shipped-the-agent-wall-i-wanted-its-off-by-default-f18)** - Docker Desktop 4.63 に同梱される docker-agent をソース読みした記事。宣言的 YAML、MCP ツールセット、デフォルト拒否の egress を持つ VM サンドボックス（要オプトイン）が特徴。
- **[The YAML Norway problem and cron's day-of-month trap: two config formats that lie to you](https://dev.to/devopsdaily/the-yaml-norway-problem-and-crons-day-of-month-trap-two-config-formats-that-lie-to-you-a11)** - PyYAML の「Norway 問題」と cron の日付フィールドの落とし穴という、設定フォーマットが意図と違う解釈をする例を実例で解説。
- **[TC39 `Float16Array` Is Baseline 2026](https://dev.to/jsmanifest/tc39-float16array-is-baseline-2026-what-javascript-developers-need-for-ml-and-graphics-workloads-44k4)** - Float16Array が Stage 4 / Baseline 2026 に到達。WebGPU での ML や HDR グラフィックスで有効だが、精度の暗黙的な低下に注意が必要という整理。
- **[The same app dropped 51 requests on Kubernetes and none on DigitalOcean's App Platform](https://dev.to/remdore/the-same-app-dropped-51-requests-on-kubernetes-and-none-on-digitaloceans-app-platform-12mc)** - SIGTERM で即終了するアプリを負荷下で再デプロイして比較した検証。App Platform では278,014リクエストが1件も欠けず、Kubernetes 側で落ちた要因も調べている。

## TechCrunch
- **[Xona's commercial GPS alternative is about to go live](https://techcrunch.com/2026/10/09/xonas-commercial-gps-alternative-is-about-to-go-live/)** - Xona の精密な測位・タイミングサービスが、SpaceX による衛星6機の打ち上げ後にベータへ入る。GPS に依存する時刻同期や測位の代替手段として注目される。
- **[Popular AI leaderboard Arena nearly doubles valuation to $3.1B valuation in 10 months](https://techcrunch.com/2026/10/08/popular-ai-leaderboard-arena-nearly-doubles-valuation-to-3-1b-valuation-in-10-months/)** - LMArena の運営会社が2億ドルを調達。モデルの嘘など、アライメント面の評価も始めている。

※ 他ソースとの重複や過去レポートとの重複を除くと、技術的な新規記事は2件のみだった。

## Ars Technica
- **[Hacks of 2 federal agencies in a month have spilled a bonanza of sensitive data](https://arstechnica.com/security/2026/10/hacks-of-2-federal-agencies-in-a-month-have-spilled-a-bonanza-of-sensitive-data/)** - 1か月で米連邦機関2つが侵害され、大量の機微情報が流出したことをまとめた記事。
- **[An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)** - Google の脅威インテリジェンスグループが、サプライチェーン攻撃で知られる TeamPCP の内部に潜入者を送り込んでいたという報告。
- **[Explaining Hall-effect, TMR, and other new types of "mechanical" switches](https://arstechnica.com/gadgets/2026/10/the-hows-and-whys-of-non-mechanical-mechanical-keyboard-switches/)** - ホール効果や TMR など、新しいキースイッチの検出方式の解説。
- **[Your uncle's frozen Mac says it's infected after viewing a Google ad. Now what?](https://arstechnica.com/security/2026/09/google-ads-caught-delivering-convincing-scareware-ads-to-unsuspecting-users/)** - 広告経由で表示される偽の感染警告（スケアウェア）の手口と対処。

## 注目トピック
今日目立ったのは「AI エージェントの運用と安全」だ。国内の不正アクセスで AI エージェントによる攻撃の可能性が指摘された一方、Docker は default-deny egress のサンドボックスを備えた docker-agent を同梱し、AWS も AgentCore Gateway や Bedrock Managed Agents を拡充している。攻撃側・防御側の双方で自動化が進み、エージェントの権限境界と通信制御の設計が実務の中心課題になりつつある。

もう一つの流れは、JavaScript 実行基盤の再編と小型モデルのローカル実行だ。Deno の Cloudflare 合流は Workers や Deno Deploy 利用者の移行計画に影響し得る。Saluki 27B のように大きなモデルを一般的なノート PC に収める圧縮も進み、コストと配置の選択肢が広がっている。
