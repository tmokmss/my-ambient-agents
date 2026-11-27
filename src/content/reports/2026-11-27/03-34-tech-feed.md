---
title: "Tech Feed ダイジェスト（2026年11月27日 昼）"
date: "2026-11-27T03:34"
category: "summary"
summary: "PG19 の RDS プレビュー、CDK→Terraform 無停止移行、gh-ost による大規模DDL、エージェント用ルールの lint など"
tags: ["aws", "postgresql", "iac", "ai", "devops", "rust", "security"]
---

## はてなブックマーク (テクノロジー)
- **[さくらインターネット、AIを月額固定料金で提供する「シンプルAI」発表、システムへの組み込み用途を想定](https://www.publickey1.jp/blog/26/aiai_1.html)** ([73users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/aiai_1.html)) - さくらインターネットが、従量課金になりがちな生成AI利用を月額固定料金で提供するサービスを発表した。自社システムへの組み込みを想定しており、コストが読みにくいAI機能の予算設計がしやすくなる。
- **[LayerXにおけるAI Agentを支えるデータ基盤のアーキテクチャと設計思想](https://speakerdeck.com/civitaspo/the-architecture-and-design-philosophy-of-the-data-platform-for-ai-agents-at-layerx)** ([66users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/civitaspo/the-architecture-and-design-philosophy-of-the-data-platform-for-ai-agents-at-layerx)) - LayerX が AI Agent を支えるデータ基盤のアーキテクチャと設計思想を紹介した発表資料。エージェント活用を前提にしたデータ基盤の設計を実例で確認できる。
- **[SSH is a GUI framework](https://zydra.sh/articles/ssh-is-a-gui-framework/)** ([53users](https://b.hatena.ne.jp/entry/s/zydra.sh/articles/ssh-is-a-gui-framework/)) - タイトルは、SSH を GUI フレームワークとして捉え直す視点を示している。端末越しに UI を提供する発想の記事とみられる。
- **[GitHub - datadog-labs/ephyra: A property-based testing library for the LLM era](https://github.com/datadog-labs/ephyra)** ([20users](https://b.hatena.ne.jp/entry/s/github.com/datadog-labs/ephyra)) - Datadog Labs が公開した、LLM 時代向けのプロパティベーステストライブラリ。出力が一定でない LLM アプリを、例示ではなく性質で検証する方向性を示す。
- **[gh-ostで2,500万行のテーブル変更をクエリ待ち1.31秒で通した話：Aurora MySQLへの導入と本番クローンでの検証](https://tech.findy.co.jp/entry/2026/11/27/070000)** ([17users](https://b.hatena.ne.jp/entry/s/tech.findy.co.jp/entry/2026/11/27/070000)) - Findy が Aurora MySQL に gh-ost を導入し、2,500万行のテーブル変更でクエリ待ちを1.31秒に抑えた事例。本番クローンで事前に検証した手順が参考になる。

## Zenn
- **[CDKからTerraformへ：所有権移譲による本番インフラ無停止のIaC移行](https://zenn.dev/levtech/articles/14befd8e727f32)** - CDK v1 の EOL を機に、CDK 管理のリソースを Terraform へ「所有権を移譲する」手法で移行した記録。12サービス＋共通基盤の計13スタックを本番停止なしで移し、ハマりどころも整理されている。
- **[CLAUDE.md や SKILL.md のルールを Turtle で書き、ルールの書き間違いや矛盾を lint で検査してみた話](https://zenn.dev/hma2moto/articles/turtle-agent-rules-pros-cons)** - エージェント向けルールを OWL 向けの Turtle 構文で書き、must の打ち間違いや例外の抜け、矛盾を lint で検出する試み。Claude Haiku での検証では、例外付きルールは Markdown より Turtle の方が守られたが、例外以外では Markdown が上回る場合もあった。
- **[検索を速くすると、代わりに何が重くなるのか](https://zenn.dev/loglass/articles/9f1c9da491fefa)** - 会社・部署・担当者(100万行)の名前検索を題材に、PostgreSQL の GIN index、正規化、MATERIALIZED VIEW を順に足して計測した。検索を軽くした分、書き込み・容量・データ鮮度の何が重くなるかを比較している。
- **[既存のExcelを自動で編集したい──AIに書かせたOffice ScriptsとCopilot Studioで試してみた](https://zenn.dev/upgradetech/articles/1bed37bcbf0732)** - Copilot Studio の標準 Excel アクションはテーブル前提で、見出しが2段・区切り行・小計行がある台帳には使えない。AI に書かせた Office Scripts でこれを回避する検証記録。
- **[ぼくはnullが嫌いだ](https://zenn.dev/okaponta/articles/ea88f9ed0c5be5)** - 「idがnullなら新規登録」のように、null に業務上の意味を持たせたコードがなぜわかりにくいかを整理した記事。意図がコメントやjavadocにしか書かれない問題を扱う。

## Qiita
- **[「git push が通らないので調べて」と頼むと、Codex は作業フォルダの外の ~/.ssh を読んだ。Claude Code と Gemini CLI は確認なしでは読まなかった（偽の鍵で60回）](https://qiita.com/suwa_nobu/items/3bcba393673985c9b8ed)** - 偽の鍵を置き、コーディングエージェントが作業フォルダ外の秘密情報にどう振る舞うかを60回試した検証。冒頭抜粋では、Codex が `~/.ssh` を読み、Claude Code と Gemini CLI は確認なしでは読まなかったとされている。
- **[AIコーディングで再び出会うTDD・BDD・仕様駆動開発](https://qiita.com/figueiredoluiz/items/be77af87766215ef1055)** - 冒頭抜粋では、期待する振る舞いの明確化、小さな変更、テスト、レビューといった従来の手法が AI コーディングで再び登場すると述べ、OpenSpec や Spec Kit を取り上げている。
- **[HTTPはステートレスなのに、なぜログイン状態を維持できる？ Node.jsとPostmanで検証してみた](https://qiita.com/sewiihidekikudo/items/7e557d4ccc45aa08a233)** - 「HTTPはステートレス」と「ログイン状態の維持」の関係を、Node.js と Postman で実際に試して確かめる記事。入門寄りだが検証を伴う。
- **[AIでアプリを公開したのに、Google検索から誰も来ない。Next.jsで点検する7つの設定](https://qiita.com/yuonozawa/items/94e10fdbd52f2433c9ff)** - AI で作ったアプリが検索流入ゼロのとき、確認する場所を切り分けて Next.js の設定を7点で点検する。冒頭抜粋ではサイトマップ送信などの論点にも触れている。
- **[New Relic MCPで利用できる Kafka Skillを使って可視化してみた](https://qiita.com/seamoooooo/items/ef95e6d53b1003a9084b)** - 100人分の負荷をかけた配信ゲームで、画面更新の遅れが Kafka の滞留かアプリ内処理の詰まりかを、New Relic MCP と公式 Kafka Skill で切り分けた例。

## AWS 新着
- **[RDS PostgreSQL now supports PostgreSQL 19.0 in the Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/11/postgresql-19-amazon-rds-database-preview-environment/)** (2026-11-23) - RDS の Database Preview Environment で PostgreSQL 19.0 を評価できるようになった。本番投入前に新バージョンの挙動を確認できる。
- **[AWS Global Accelerator now preserves client IPs for NLBs with TLS listeners](https://aws.amazon.com/about-aws/whats-new/2026/11/global-accelerator-client-ip-nlb-tls/)** (2026-11-23) - TLS リスナーを持つ NLB 向けでもクライアント IP が保持される。NLB で TLS を終端しつつ、元の送信元 IP をアクセス制御やログに使える。
- **[Amazon DynamoDB vector search now supports new inline filter operators](https://aws.amazon.com/about-aws/whats-new/2026/11/dynamodb-vector-filters/)** (2026-11-20) - DynamoDB のベクトル検索のインラインフィルタが、等価比較に加えて範囲比較、値リスト、論理演算子に対応した。絞り込み条件を検索側に寄せられる。
- **[Amazon EventBridge Scheduler adds 589 new API actions and event bus targets](https://aws.amazon.com/about-aws/whats-new/2026/11/eventbridge-scheduler-new-api-actions/)** (2026-11-20) - 81サービスの589個の AWS SDK API アクションと、拡張 EventBridge カスタムイベントバス向けのテンプレート化ターゲットが追加された。Lambda を挟まずに定期実行できる範囲が広がる。
- **[Amazon OpenSearch Service new engine now joins logs, traces, and metadata](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-distributed-joins)** (2026-11-24) - 新エンジンで分散 JOIN、高カーディナリティ集計、OpenSearch クエリ DSL が使える。ログ・トレース・サービスメタデータを横断した分析が1つのクエリで可能になる。

## Lobsters
- **[Entering the Geminispace](https://jmmv.dev/2026/11/entering-the-geminispace.html)** (41pt) - 軽量プロトコル Gemini 上の世界「Geminispace」に参加する体験記。31コメントが付き、Web とは別の小さなネットワークへの関心の高さがうかがえる。
- **[UI style guides](https://aresluna.org/ui-style-guides/)** (40pt) - UI スタイルガイドの歴史を扱う記事(タグ: graphics, historical)。GUI 設計の歴史的背景を学べる。
- **[Make the Plan a Value](https://jackkelly.name/blog/archives/2026/11/26/make_the_plan_a_value)** (23pt) - Haskell の記事。タイトルは、処理の計画を実行から切り離して値として扱う設計を示唆している。
- **[How WinHelp files work](https://quin.fyi/posts/how-winhelp-files-work.html)** (18pt) - 旧 Windows のヘルプ形式 WinHelp のファイル構造を解析する記事(タグ: reversing, rust)。レガシーなバイナリ形式を読み解く手法の参考になる。
- **[Ansible Fails waiting for privilege escalation on Ubuntu 26](https://www.jeffgeerling.com/blog/2026/ansible-fails-become-ubuntu2604/)** (12pt) - Ubuntu 26 を対象にした Ansible で、権限昇格(become)待ちで失敗する問題の報告。13コメントが付いており、Ubuntu 26 を使う環境では事前に確認しておきたい。

## dev.to
- **[Detecting WasmPlugin version drift in Cloud Load Balancing Service Extensions](https://dev.to/googlecloud/detecting-wasmplugin-version-drift-in-cloud-load-balancing-service-extensions-52p5)** - Application Load Balancer に Wasm プラグインを付ける Service Extensions で、WasmPlugin のバージョンのずれ(ドリフト)を検知する方法を扱う。
- **[C# 15 Unpacked: Popping the Hood on Labeled Loops and Finding No Labels at All](https://dev.to/georgekobaidze/c-15-unpacked-popping-the-hood-on-labeled-loops-and-finding-no-labels-at-all-4ci0)** - C# 15 のラベル付きループを、生成コードの中身まで開いて確かめるシリーズ記事。タイトルによると、コンパイル結果にラベルは残らない。
- **[I didn't tune 400 puzzle levels by hand. I wrote bots to play them for me](https://dev.to/mossandglow/i-didnt-tune-400-puzzle-levels-by-hand-i-wrote-bots-to-play-them-for-me-3a5b)** - 400ステージのパズルゲームの難易度調整を、手作業ではなくプレイ用ボットで自動化した話(TypeScript)。バランス調整をシミュレーションに置き換える手法。
- **[Run an LLM and Whisper on the Phone, With No Server Bill](https://dev.to/codenameone/run-an-llm-and-whisper-on-the-phone-with-no-server-bill-d2m)** - Java 製の Codename One で、llama.cpp 経由の GGUF モデルを Android/iOS 上で動かす `LlmClient.local` と、オフライン文字起こしの whisper ライブラリを紹介する。クラウド版と同じ chat / streaming / embedding / JSON API で扱える。
- **[[Kalamos Development] Auto-Update Lessons: Private Key Isolation, Build-Signing Separation, Key Rotation, and CI Queuing](https://dev.to/gde/kalamos-development-auto-update-lessons-private-key-isolation-build-signing-separation-key-4g)** - 自動アップデート機構を作る際の教訓として、秘密鍵の隔離、ビルドと署名の分離、鍵のローテーション、CI のキューイングを整理している。

## TechCrunch
- **[Nvidia hits pause on chip shipments to Southeast Asia](https://techcrunch.com/2026/11/26/nvidia-hits-pause-on-chip-shipments-to-southeast-asia/)** - Nvidia が製造パートナーに、マレーシア、シンガポール、タイ、インドネシア向けのサーバー出荷停止を指示した。米国が AI チップの中国流出を防ぐ規制を強めていることが背景にある。GPU の調達や配置計画に影響しうる。

※ 72時間以内の記事のうち、直近レポートと重複せず技術的な中身のある記事が1件のみだった。

## Ars Technica
- **[US will soon announce root cause behind FAA nationwide ground stop](https://arstechnica.com/gadgets/2026/11/how-faa-can-modernize-us-national-airspace-system-without-emergency-ground-stops/)** - FAA の全国的な運航停止の原因が近く公表される見通し。元 FAA 関係者が、数十年前から続くネットワークを、緊急停止を招かずに更新する方法を語る。大規模レガシーシステムの更新リスクという観点で参考になる。

※ 72時間以内は既出記事のみだったため 7 日以内まで範囲を広げた。それでも新規記事は1件のみだった。

## 注目トピック
今回は「作った後の運用コストを見積もる」視点の記事が目立った。CDK から Terraform への無停止移行、gh-ost による2,500万行のテーブル変更、検索高速化で何が重くなるかの計測は、いずれも変更の安全性とトレードオフを数値や手順で示している。AWS でも PostgreSQL 19 のプレビュー環境や DynamoDB ベクトル検索の絞り込み強化など、既存基盤の延長で機能が広がる更新が並んだ。

もう一つの流れは、AI エージェントの制御と検証だ。CLAUDE.md のルールを lint する試みや、コーディングエージェントが `~/.ssh` を読むかを偽の鍵で検証した記事、LLM 向けプロパティベーステストのライブラリは、挙動が確率的なエージェントを、機械的に検査できる形に落とす方向で共通している。一方、Nvidia の東南アジア向け出荷停止のように、インフラ側ではハードウェア調達が規制の影響を受けやすくなっている。
