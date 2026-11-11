---
title: "Tech Feed ダイジェスト（2026年11月12日）"
date: "2026-11-11T17:01"
category: "summary"
summary: "ISUCON優勝記、Linuxカーネルへの AI バグ修正、Fable 5.2 の AWS 提供、Signal の AI 形式検証など8ソースの注目記事"
tags: ["ai", "aws", "security", "linux", "database", "frontend", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[ISUCON2026 で優勝しました（準備編）](https://zenn.dev/luvtechno/articles/isucon2026-preparation)** ([393users](https://b.hatena.ne.jp/entry/s/zenn.dev/luvtechno/articles/isucon2026-preparation)) - AI 利用可のレギュレーションを受け、人間が手を出さずエージェントだけでどこまで戦えるかを試した3か月の準備を時系列で振り返る。HITL（人間の介在）をどこまで減らせるかが主題。
- **[Linuxカーネル開発でAIによるバグ修正が効果。トーバルズ氏「潮目が変わり始めている兆候」](https://www.techno-edge.net/article/2026/11/11/5697.html)** ([62users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/11/11/5697.html)) - Linus Torvalds 氏がカーネル開発での AI によるバグ修正の効果に言及した記事。大規模 OSS の現場での AI 活用の評価として注目される。
- **[HTML-in-Canvasでページトランジションするライブラリを作った](https://blog.amagi.dev/entry/vfx-js-transitions)** ([53users](https://b.hatena.ne.jp/entry/s/blog.amagi.dev/entry/vfx-js-transitions)) - HTML-in-Canvas を使い、ページ遷移にエフェクトをかけるライブラリの実装記。DOM 要素を Canvas に描画して視覚効果を加えるアプローチ。
- **[SREのためのFinOps入門](https://speakerdeck.com/muziyoshiz/introduction-to-finops-for-sres)** ([32users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/muziyoshiz/introduction-to-finops-for-sres)) - SRE の視点からクラウドコスト最適化（FinOps）を整理したスライド。信頼性とコストのバランスを取る考え方の入門資料。
- **[2カ月連続で脆弱性1,000件超え ～Microsoftが2026年11月「Windows Update」を実施](https://forest.watch.impress.co.jp/docs/news/2155377.html)** ([4users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2155377.html)) - 11月の月例更新は「緊急」が64件、悪用確認は Outlook の1件。企業・教育向け Windows 11 23H2 は今回が最後の更新。

## Zenn
- **[Snowflake Dashboards 2.0が最高な理由と、これからBIに求められること](https://zenn.dev/dataheroes/articles/snowflake-dashboards-2-and-future-of-bi)** - Snowflake 内で数字を見て質問したいというニーズに応える新 Dashboards（2.0）を実際に触った所感。従来の課題と新機能の違いを公式ドキュメントを交えて整理している。
- **[Rustで作られたExpoの新フレームワーク「Exact」で、モバイル・Web・デスクトップアプリを作ってみた](https://zenn.dev/tellernovel_inc/articles/expo-exact-first-impression)** - Expo が公開した新しいクロスプラットフォームのアプリランタイム Exact で天気アプリを作った初見レビュー。SwiftUI や React Native 版との見た目・アプリサイズ・起動などを比較している。
- **[職務経歴書の JSON から「技術ごとの経験年数」を出す ― 形を決めつけない集計を TypeScript で](https://zenn.dev/megrou/articles/e04a9edaaea79d)** - 37案件のデータから技術別の経験年数を計算し直すと、手書きの値とずれていたという実例。構造を決めつけない集計処理を TypeScript で実装する。
- **[個性を磨くUI観点](https://zenn.dev/silverbirder/books/ui-craft-techniques)** - 文字・余白・形・色・操作といった UI の細部を、架空の個人ブログの作例で磨く方法をまとめた本。AI 生成っぽい無個性なサイトから抜け出すための観点集。
- **[AIですぐに作れる時代に、何と向き合うか](https://zenn.dev/peoplex_blog/articles/2611-what-to-face-when-ai-builds-fast)** - コードを手で書かなくなった開発者が、レビューでは DB 設計やアーキテクチャなど後戻りしにくい決定に力を入れるようになったという実践的な視点。

## Qiita
- **[自社で運用するゼロトラストネットワーク「Lantern DSSE」を、1台のサーバーで建ててみる](https://qiita.com/shinkusanagi/items/effdd559b785ecb823c8)** - オープンソースで公開したゼロトラストネットワーク Lantern DSSE を、1台のサーバーで構築する手順の連載（冒頭抜粋より）。
- **[Promise.raceのタイムアウトで処理が止まらない理由：待機と中断をNode.jsで実測](https://qiita.com/ennagara128/items/844e15cb69bdb2605a63)** - Promise.race でタイムアウトを作っても、競わせた処理自体は自動では止まらないことを Node.js で実測。待機と中断（AbortController 等）を分けて考える必要がある。
- **[AHC074 （HACK TO THE FUTURE 2027 予選）With AI部門のAIの使い方(暫定10位)](https://qiita.com/thun-c/items/fa16332d2b18800d69b2)** - AtCoder Heuristic Contest の With AI 部門で暫定10位になった参加者による AI の使い方の振り返り。新しい長期 AHC の開催形式が初適用された回。
- **[モデル駆動型アプリ内で Dataverse の選択肢に SharePoint Lists みたいな選択肢ごとの背景色をつける](https://qiita.com/YurimyMiyu/items/43e1926e18d6c7d4fd40)** - Power Apps のモデル駆動型アプリで、Dataverse の選択肢をテーマカラーに沿って色分けする方法のカスタマイズ Tips。
- **[【AIDP第2回】国勢調査2020→2025を比較！機械学習（K-means）で街を分類し、生成AIで説明してみてみた](https://qiita.com/shirok/items/bb1797084e149519279e)** - Oracle AI Data Platform に取り込んだ国勢調査データを K-means で分類し、生成 AI で各クラスタを説明させる実践例。

## AWS 新着
- **[Claude Fable 5.2 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/claude-fable-5-2-aws/)** (2026-11-09) - Anthropic の「技術作業向けで最も高性能な一般提供モデル」Fable 5.2 が AWS で全顧客向けに利用可能に。GovCloud (US) でも別途提供が始まっている。
- **[Amazon OpenSearch Service announces managed cross-Region disaster recovery](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-managed-cross-region-disaster-recovery/)** (2026-11-10) - 検索・AI・分析ワークロード向けに、マネージドなクロスリージョン災害復旧機能が追加。厳格な可用性・事業継続要件に対応する。
- **[AWS Glue adds 100 new native connectors for popular SaaS applications](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-glue-adds-100-new-native-connectors/)** (2026-11-09) - SaaS や REST API ベースのアプリのデータ取り込みに、従来必要だった自前実装なしで使える100個のネイティブコネクタが追加された。
- **[Amazon S3 Tables now support S3 server access logging](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-server-access-logging/)** (2026-11-10) - テーブルバケットへのリクエストの詳細ログを取得でき、テーブル操作・名前空間管理・データアクセスを追跡できる。監査用途に有用。
- **[Amazon MWAA now supports DuckDB operators](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators/)** (2026-11-09) - マネージド Airflow で DuckDB オペレーターが利用可能に。組み込み分析 DB によるデータ品質チェックや集計・変換を DAG 内で行える。

## Lobsters
- **[I deleted all my SSH keys](https://blog.infected.systems/posts/2026-11-03-i-deleted-all-my-ssh-keys/)** (50pt) - タグは hardware / security。SSH 鍵を全削除した運用の体験談で、鍵管理のあり方を見直す議論の材料になる。
- **[How do you actually self-host securely?](https://lobste.rs/s/m43bas/how_do_you_actually_self_host_securely)** (56pt) - セルフホストを安全に運用する方法を問う Ask スレッド（29コメント）。各自の実践的な対策が集まっている。
- **[Memory Safety Bugs in Rust Standard Library](https://forge-blog.github.io/posts/rust-std-memory-safety/)** (25pt) - Rust 標準ライブラリに見つかったメモリ安全性のバグを扱う記事。メモリ安全言語でも unsafe 部分の検証が重要であることを示す。
- **[Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/)** (21pt) - 電圧グリッチ攻撃でマイニング用カードに搭載された A100 の制限を解除する、ハードウェアハッキングの事例。
- **[Go Turns 17](https://go.dev/blog/17years)** (37pt) - Go 公式ブログによる17周年の振り返り記事。

## dev.to
- **[DuckDB 2.0's quack server lets ten writers share one file for under 2ms a query](https://dev.to/alexgeorgiev17/duckdb-20s-quack-server-lets-ten-writers-share-one-file-for-under-2ms-a-query-1ged)** - DuckDB 2.0 の組み込みサーバーで複数プロセスが同一ファイルに書き込めるように。10クライアントで1,000件の挿入がエラーなく完了し、クエリあたり約1.7ms のオーバーヘッドがあるという検証。
- **[AI Agent Sessions Are a Data Store Nobody Designed](https://dev.to/playfulprogramming/ai-agent-sessions-are-a-data-store-nobody-designed-17be)** - Genkit や ADK はツール応答を含む会話の全ターンを設計外のストアに保存する。そこに何が残るのか、サニタイズでは解決しにくく、フレームワーク側で対処すべきだという指摘。
- **[From Attention to 3-Bit Caches: How LLMs Learned to Remember Less](https://dev.to/amananandrai/from-attention-to-3-bit-caches-how-llms-learned-to-remember-less-mha-gqa-mla-moe-quantisation-3obj)** - MHA・GQA・MLA・MoE・量子化といった、LLM のメモリ削減技術を俯瞰する解説。
- **[Detecting WasmPlugin version drift in Cloud Load Balancing Service Extensions](https://dev.to/googlecloud/detecting-wasmplugin-version-drift-in-cloud-load-balancing-service-extensions-52p5)** - Application Load Balancer の Service Extensions に Wasm プラグインを接続した際のバージョンずれを検出する方法。
- **[You're Spawning Goroutines Wrong: The Visual Architecture Guide That Fixes Go Concurrency Forever](https://dev.to/smtahosin/youre-spawning-goroutines-wrong-the-visual-architecture-guide-that-fixes-go-concurrency-forever-1he0)** - GMP スケジューラの work-stealing、2KB スタックの伸縮、チャネルのリングバッファ、goroutine リークなど Go ランタイムの仕組みを図解。

## TechCrunch
- **[Plurai wants to help AI agents work better using the same approach that helped get self-driving cars to roads](https://techcrunch.com/2026/11/11/plurai-wants-to-help-ai-agents-work-better-using-the-same-approach-that-helped-get-self-driving-cars-to-roads/)** - AI エージェントも自動運転と同様に不確実な環境で動く確率的システムとみなし、エンドツーエンドで改善する手法を打ち出すスタートアップの独占記事。
- **[Databricks' new AI agent tells CEO Ali Ghodsi the unvarnished truth](https://techcrunch.com/2026/11/11/databricks-new-ai-agent-tells-ceo-ali-ghodsi-the-unvarnished-truth/)** - 従業員12,000人の企業で、刷新された Genie エージェントを使い、社員が直接言いにくい問題を CEO が把握する事例。
- **[Siri co-founder backs Helix for its voice ID tech](https://techcrunch.com/2026/11/11/siri-co-founder-backs-helix-for-its-voice-id-tech/)** - Siri 共同創業者が支援する Helix の声紋認証技術は iPhone 13 上で動作するとされる、オンデバイスの音声 AI。

## Ars Technica
- **[Google DeepMind just mathematically verified key parts of Signal](https://arstechnica.com/ai/2026/11/signals-encryption-just-passed-an-ai-powered-mathematical-checkup/)** - DeepMind が4週間のプロジェクトで Signal の暗号の重要部分を数学的に検証。AI により形式検証が実用的になる可能性を示す。
- **[Hackers exploited iOS and Android flaws to infect phones](https://arstechnica.com/security/2026/11/hackers-exploited-ios-and-android-flaws-to-infect-phones/)** - iOS・Android の脆弱性を悪用してスマートフォンを感染させた攻撃で、研究者はクレムリン支援グループの可能性を指摘。外交関係者が標的とされた。
- **[PHP warns it plans to release 2 emergency patches imminently](https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/)** - PHP がまもなく緊急パッチ2件を出すと告知（10月21日の記事）。PHP2Shell によるリモートコード実行の未確認報告があった。
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - 標的型広告経由でゼロクリックエクスプロイトが配信され、傭兵型スパイウェアが導入された事例（10月15日の記事）。広告経由配信の初の確認例とされる。

## 注目トピック
AI とソフトウェア開発の関係が一段と実務に踏み込んでいる。ISUCON をエージェント任せで勝ち抜く挑戦、Linux カーネルでの AI バグ修正、DeepMind による Signal の形式検証など、AI が重い領域でも成果を出し始めた一方で、dev.to ではエージェントのセッションデータが設計されないまま蓄積する問題が指摘されている。AWS でも Fable 5.2 の提供が始まった。

セキュリティでは、iOS/Android の脆弱性悪用や PHP の緊急パッチ告知など、基盤ソフトウェアの脆弱性が続いて報じられた。Lobsters では SSH 鍵運用やセルフホストの安全性、Rust 標準ライブラリのメモリ安全性が話題となり、データ基盤側では DuckDB の複数ライター対応や AWS の Glue・MWAA・S3 Tables の機能追加が目立った。
