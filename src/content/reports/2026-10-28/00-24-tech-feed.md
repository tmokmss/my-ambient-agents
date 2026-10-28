---
title: "Tech Feed ダイジェスト（2026年10月28日）"
date: "2026-10-28T00:24"
category: "summary"
summary: "UEFI EDK2 のコード実行脆弱性、Aurora Serverless 384 ACU、HPA と手動スケールの競合、Rust 製 tar パーサなど"
tags: ["security", "aws", "kubernetes", "rust", "ai", "uefi", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[3回つくってわかった、 定期実行ジョブ基盤の本質情報](https://speakerdeck.com/takai/i-built-a-scheduled-job-platform-three-times-and-now-i-know-the-essential-truths)** ([64users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/takai/i-built-a-scheduled-job-platform-three-times-and-now-i-know-the-essential-truths)) - 定期実行ジョブ基盤を3度作り直した経験から、基盤設計で本質的に押さえるべき点をまとめたスライド。
- **[RESTful Web API 実装のベスト プラクティス - Azure Architecture Center](https://learn.microsoft.com/ja-jp/azure/architecture/best-practices/api-implementation)** ([84users](https://b.hatena.ne.jp/entry/s/learn.microsoft.com/ja-jp/azure/architecture/best-practices/api-implementation)) - Microsoft の公式ガイドで、REST API を実装する際の設計・実装上の指針を体系的にまとめている。
- **[JavaScriptランタイムの「Bun」がPrettier互換で300倍以上高速なフォーマッタに。Prettier設定ファイルもそのまま利用可能](https://www.publickey1.jp/blog/26/javascriptbunprettier300prettier.html)** ([11users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/javascriptbunprettier300prettier.html)) - Bun に Prettier 互換のフォーマッタが載り、Prettier の設定ファイルを流用したまま 300 倍以上の速度が得られるという報道。
- **[Zero Trust for AI agents](https://claude.com/resources/articles/zero-trust-for-ai-agents)** ([24users](https://b.hatena.ne.jp/entry/s/claude.com/resources/articles/zero-trust-for-ai-agents)) - AI エージェントの運用にゼロトラストの考え方を適用する解説記事。エージェントに権限を持たせる設計を考える際の参考になる。
- **[脱GPUが加速、OracleもGoogle製TPUを選択](https://pc.watch.impress.co.jp/docs/news/2151701.html)** ([17users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2151701.html)) - AI 計算基盤で GPU 以外のアクセラレータを採用する動きが広がり、Oracle も Google 製 TPU を選んだという話。

## Zenn
- **[HPA は kubectl scale の台数を守らない](https://zenn.dev/shinagawa_web/articles/hpa-reverts-manual-scale)** - HPA 配下の Deployment を `kubectl scale` で増やしても、HPA がメトリクスから台数を決め直して replicas を書き換えてしまう挙動を扱う。イベント前の台数確保などでは HPA 側の設定で制御する必要がある。
- **[Go で動く新世代の補完プラグイン goda-cmp.vim](https://zenn.dev/shougo/articles/goda-cmp-vim-beta)** - ddc.vim の精神的後継にあたる Vim/Neovim 両対応の自動補完プラグイン。作者自身も移行済みで、API は予告なく変わる開発初期段階とのこと。
- **[GASで素のJSを埋め込むと < がエスケープされて動かない：getContent() の落とし穴と直し方](https://zenn.dev/kimura0314/articles/gas-htmloutput-getcontent-escapes-lt)** - `<script>` で囲まない素の JS を `createHtmlOutputFromFile().getContent()` で読むと `<` が `&lt;` に置換され、jsQR が iPhone で動かなかった事例と対処。
- **[Kiro から Backlog・Chat・ドライブを横断検索できるようにしてみた（公式MCP）](https://zenn.dev/senuma/articles/588fb50a8f56ce)** - Google Workspace の公式 MCP サーバー（デベロッパー プレビュー）などを Kiro に接続し、複数サービスを横断検索する構成を試した記事。
- **[Jevに問い合わせメッセージを仕分けてもらう](https://zenn.dev/chot/articles/980c44e5a19736)** - 問い合わせの「営業／通常」分類に使っていた汎用 LLM の応答の遅さを、Jev というモデルに置き換えて改善しようとした導入記録。

## Qiita
- **[AGENTS.mdを278行から51行にした：AIエージェントに「必要な分だけ読ませる」ドキュメント設計](https://qiita.com/blackcats-lab/items/069d2640e1e7cf8ce21d)** - 冒頭抜粋によると、Codex や Claude Code などのエージェント向け指示書を肥大化させず、必要な分だけ読ませる構成にする設計論。
- **[ランチ明けの「続きやって」が一番高い。Claude Code のキャッシュは 1 時間で切れる](https://qiita.com/araom/items/3d026f2df58c7328aa74)** - 25日分の自分のセッション記録から、プロンプトキャッシュ切れ後の再開コストを集計し、新セッションへの引き継ぎに置き換えた記録。
- **[MetaのAIエージェント「Muse」の中身を覗いたら、ただのUbuntuマシンだった](https://qiita.com/hirokn/items/31f5403b1fd9d8cbba3c)** - Muse に渡される「専用コンピューター」の中身と、そこで実際に何ができたかを確認した検証記事。
- **[QRコードはなぜログインの鍵にならないのか。写真1枚で複製できる仕組みと安全な使い道](https://qiita.com/koreangyoseishoshi/items/6aa82ae67148164a354b)** - 名札の QR で出席を記録する仕組みを作る中で出た「ログインにも使えるか」という疑問に対し、複製の容易さから適切な用途を整理する（Zenn からの転載）。
- **[【解説】クリーンアーキテクチャとは何か？ 炎上議論はなぜ起きるのか？](https://qiita.com/Sicut_study/items/3c1995d2a3f1695a18a7)** - 「クリーンアーキテクチャでコードが汚くなった」という動画をきっかけにした議論を題材に、その考え方と論争の背景を解説する。

## AWS 新着
- **[Amazon Aurora serverless now supports up to 384 ACUs](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-serverless-supports-384-acu/)** (2026-10-27) - Aurora PostgreSQL 互換の Serverless の最大容量が 256 から 384 ACU（50% 増）に拡大。より大きなワークロードを Serverless で受けられる。
- **[Amazon ElastiCache for Valkey now supports changing durability on existing clusters](https://aws.amazon.com/about-aws/whats-new/2026/10/elasticache-changing-durability/)** (2026-10-27) - ノードベースの既存クラスターで、新規作成なしに耐久性設定を有効化・無効化できるようになった。
- **[AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/)** (2026-10-22) - AgentCore Gateway の推論エンドポイントが InvokeModel / InvokeModelWithResponseStream に対応し、モデルのフォールバックルーティングも使えるようになった。
- **[AWS Network Firewall now supports Route 53 Resolved IP Validation](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation/)** (2026-10-21) - ドメインベースのフィルタリングを HTTP/HTTPS 以外の SFTP や SSH にも拡張し、接続先 IP の妥当性を検証できる。
- **[Amazon DynamoDB Streams now supports timestamp-based stream processing](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-streams-timestamp-processing)** (2026-10-15) - ストリームの読み取りを特定の時刻から開始できるようになり、従来の最古レコード起点などに限られた再処理の自由度が上がった。

## Lobsters
- **[A fast and secure tar parser for the Rust ecosystem](https://astral.sh/blog/tar-codec)** (43pt) - Astral による Rust 向けの高速かつ安全な tar パーサの紹介。アーカイブ展開は攻撃面になりやすく、速度と安全性の両立が焦点。
- **[Fuzzers vs. AI: Comparing Fuzzilli and BigSleep on JavaScript Engines](https://projectzero.google/2026/10/fuzzing-v-AI.html)** (10pt) - Project Zero が、従来型ファザー Fuzzilli と AI ベースの BigSleep を JavaScript エンジンの脆弱性探索で比較した記事。
- **[Filian, Fil-C binaries on Debian](https://cr.yp.to/2025/fil-c.html)** (16pt) - メモリ安全な C 実装 Fil-C でビルドしたバイナリを Debian 上で扱う試み（タイトルと tags: c, linux からの読み取り）。
- **[Finding panics with Call Graph Analyzer](https://tweedegolf.nl/en/blog/242/finding-panics-with-call-graph-analyzer/)** (11pt) - Rust コードで panic に到達しうる経路を、コールグラフ解析で洗い出す手法の紹介。
- **[Four Months of Zig](https://gracefulliberty.com/articles/four-months-of-zig/)** (30pt) - Zig を4か月使った体験談。

## dev.to
- **[What SKIP LOCKED Solves, and What It Leaves to You](https://dev.to/mrviduus/what-skip-locked-solves-and-what-it-leaves-to-you-bhk)** - `SELECT ... FOR UPDATE SKIP LOCKED` で他トランザクションがロック中の行を飛ばせるが、キュー用途で残る課題（再試行など）は利用側の責任という整理。
- **[Your "use server" Functions Are Public HTTP Endpoints (And Middleware Won't Save You)](https://dev.to/johnnylemonny/your-use-server-functions-are-public-http-endpoints-and-middleware-wont-save-you-18ib)** - `"use server"` 関数は実際には公開 HTTP POST エンドポイントになり、React/Next.js の Server Actions で陥りやすい3つの誤りと対策を示す。
- **[Your CI Is Green. Can a Pull Request Steal Your Secrets?](https://dev.to/robertadam987_/your-ci-is-green-can-a-pull-request-steal-your-secrets-31b0)** - GitHub Actions がプルリクエストで起動するとき、テストが通っていてもシークレットが奪われうる点を取り上げる CI セキュリティ記事。
- **[A Dense 31B on an 8 GB GPU: Gemma 4 31B on an RTX 3050](https://dev.to/gde/a-dense-31b-on-an-8-gb-gpu-gemma-4-31b-on-an-rtx-3050-26p9)** - 17.7 GB の密な 31B モデルを、60 層中 40 層をシステム RAM に置いて 8 GB GPU で動かす。速度は約 4 tok/s だが、ファミリー中で GSM8K・BFCL のスコアが最高とのこと。
- **[Your AI said "fixed" but never ran the tests? I made a plugin that won't let it say "done" until they pass](https://dev.to/wst2002rk/your-ai-said-fixed-but-never-ran-the-tests-i-made-a-plugin-that-wont-let-it-say-done-until-5531)** - コーディングエージェントが「修正済み」と言いながらテストを走らせない問題に対し、テスト通過まで完了を宣言させないプラグインを作った話。

## TechCrunch
- **[Google's Genie 4 world model adds audio, more realistic worlds, and real-time steering](https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-and-more-realistic-worlds-and-real-time-steering/)** - Genie 4 は音声、より現実的な物理や人物、リアルタイム操作に対応し、一貫したシーンの維持時間も Genie 3 の2倍の最長2分になった。Ars Technica も別角度で報じている。
- **[Bank of America kindly asks that you don't share your banking password with your AI assistant](https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/)** - Bank of America が、AI エージェントに認証情報を渡した場合でもその操作の責任は顧客にあると注意喚起。エージェント経由の決済や認証の責任分界を示す事例。
- **[Discord is making its public communities more searchable, and people have concerns](https://techcrunch.com/2026/10/27/discord-is-making-its-public-communities-more-searchable-and-people-have-concerns/)** - 12月から、公開サーバーのメッセージが検索エンジンの結果に表示され始める。プラットフォームの仕様変更とプライバシー懸念の記事。
- **[Anduril, Qualcomm launch BlueChip, a new kind of US-made laptop](https://techcrunch.com/2026/10/27/anduril-qualcomm-launch-bluechip-a-new-kind-of-us-made-laptop/)** - 組み立てだけでなく部品単位での米国製造を掲げる新型ノート PC。中国依存の部品も含めたサプライチェーンの内製化を目指す。

## Ars Technica
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - EDK2 の重大な欠陥で、ブート初期段階で攻撃者がコードを実行できる。ファームウェア層のため影響範囲が広く、ベンダーのパッチ適用状況の確認が必要。
- **[Google begins certifying Registered App Stores for Android, but not in the US](https://arstechnica.com/gadgets/2026/10/googles-android-registered-app-stores-program-launches-dec-1-applications-now-open/)** - Google が12月1日に開始する Registered App Stores 認定制度で、認定を受けたサードパーティストアからのアプリ導入が容易になる。ただし米国は対象外。
- **["No human at the helm": Delaware plan would let AI agents run entire businesses](https://arstechnica.com/tech-policy/2026/10/no-human-at-the-helm-delaware-plan-would-let-ai-agents-run-entire-businesses/)** - AI エージェントが企業を運営できるようにするデラウェア州の構想。AI 運営企業の所有者が「無謀な」AI の行為の責任を免れうる点が議論になっている。
- **[Apple refreshes the iMac, entry-level MacBook Pro with the M6 chip](https://arstechnica.com/apple/2026/10/apple-refreshes-the-imac-entry-level-macbook-pro-with-the-m6-chip/)** - iMac と下位 MacBook Pro が M6 チップに更新され、N1 チップで Wi-Fi 7 と Bluetooth 6 に対応する。TechCrunch も MacBook Pro を別角度で報じている。
- **[Apple releases iOS and macOS 27.2 with new Siri AI features, new Music logo](https://arstechnica.com/apple/2026/10/apple-releases-ios-and-macos-27-2-with-new-siri-ai-features-new-music-logo/)** - iOS/macOS 27.2 では、Siri が直接アクセスできるアプリを制限する機能が追加された。TechCrunch もセキュリティ修正の観点で報じている。

## 注目トピック
今回は AI エージェントの運用に関わる話題が複数のソースで目立った。Zero Trust の考え方（はてブ）、AGENTS.md の肥大化対策やプロンプトキャッシュの費用管理（Qiita）、AgentCore Gateway のモデルフォールバック（AWS）、AI にテスト実行を強制するプラグイン（dev.to）、AI エージェントへの認証情報の預け方に関する Bank of America の注意喚起（TechCrunch）が挙がっている。いずれも権限・責任・コストをどう設計するかが論点で、エージェントを使う側が運用ルールを持つ段階に入っている。

セキュリティでは、ブート初期にコード実行を許す UEFI EDK2 の欠陥（Ars Technica）、Project Zero によるファザーと AI の脆弱性探索比較（Lobsters）、アーカイブ展開の安全性を狙った Rust 製 tar パーサ（Lobsters）など、低レイヤーの堅牢性に注目が集まっている。同時に、HPA と手動スケールの競合や Server Actions の公開エンドポイント化のように、抽象化の裏にある挙動を把握していないと事故につながる例も複数のソースに現れた。
