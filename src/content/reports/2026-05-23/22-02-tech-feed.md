---
title: "Tech Feed ダイジェスト（2026年5月24日）"
date: "2026-05-23T22:02"
category: "summary"
summary: "Ghostscript Rust超越・WebAssembly実用化・DuckLake v1.0・DeadPilots音声AI倫理・AWS Security Agent・CTログ監視実験など"
tags: ["rust", "webassembly", "duckdb", "ai", "security", "mcp", "css", "go", "aws", "privacy"]
---

## はてなブックマーク (テクノロジー)

- **[日々の開発で使っているClaude Code Skills](https://zenn.dev/remitaid/articles/4f9dc787b6c191)** ([450users](https://b.hatena.ne.jp/entry/s/zenn.dev/remitaid/articles/4f9dc787b6c191)) - 実務開発でClaude Code Skillsを実際にどう活用しているかをまとめた記事。output-report・code-review・suggest-improvementsなど具体的なSkill定義例とそれぞれの活用シーンを解説しており、公式ドキュメントよりも「現場で使える」観点から書かれた点が450ブックマークの支持を集めた。

- **[Why Japanese companies do so many different things](https://davidoks.blog/p/why-japanese-companies-do-so-many)** ([141users](https://b.hatena.ne.jp/entry/s/davidoks.blog/p/why-japanese-companies-do-so-many)) - 日本企業が単一事業に集中せず多角化する傾向を、終身雇用・メインバンク制・系列構造という制度的文脈から分析した英語考察。「コングロマリット割引」が生じにくい日本特有の事情が技術系読者にも刺さり、英語原文でありながら多くのはてなユーザーがブックマークした。

- **[【PDF圧縮】約40年続く業界標準Ghostscriptを、Rust 自前実装で抜いた話](https://zenn.dev/ikora/articles/b50ca6275eddc9)** ([26users](https://b.hatena.ne.jp/entry/s/zenn.dev/ikora/articles/b50ca6275eddc9)) - 1985年から続くGhostscriptを参考にRustでPDF圧縮処理を自前実装したところ、特定ユースケースで圧縮率を上回ったという開発記録。ゼロからの実装を通じてGhostscriptのアーキテクチャの深い理解も得られたと語り、「巨人の肩に立ちつつ超える」過程が詳細に記録されている。

- **[Googleの新しいTUI Antigravity CLIを試してみた](https://zenn.dev/hoki621/articles/how-to-agy-cli)** ([64users](https://b.hatena.ne.jp/entry/s/zenn.dev/hoki621/articles/how-to-agy-cli)) - Google発のターミナルUIフレームワーク「Antigravity CLI（agy）」のハンズオン記事。BubbleTeaやCharmのGo TUIエコシステムに対抗するGoogleの独自TUI開発ツールの使い勝手と設計思想を検証しており、CLIツール開発者の注目を集めた。

- **[すべてのUUIDをリストアップして検索できる「Every UUID V4」、そして直面した技術的課題とは？](https://gigazine.net/news/20260523-every-uuid/)** ([26users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260523-every-uuid/)) - 理論上存在し得る全2^122個のUUID v4を列挙・検索可能にしようとした試みで直面した圧縮・インデックス・ストレージの難題を解説。「できないことを証明する実験」としても価値があり、UUIDの設計思想を逆説的に理解できる技術的ユーモア記事。

## Zenn

- **[「URLを誰にも教えてない」が通じない理由 — CTログを30分監視してみた](https://zenn.dev/tkydev/articles/2026-05-21_ct_log)** - Certificate Transparency（CT）ログを30分リアルタイム監視した実験レポート。新規SSL証明書発行時に自動的に公開されるCTログを通じて、「秘密のURL」も証明書申請直後からクローラーに発見されることを実証。セキュリティ・バイ・オブスキュリティの無効性を体験的に示した。

- **[既存サービスにMCPサーバーを組み込む際の設計ポイント](https://zenn.dev/finatext/articles/b404032aec58c4)** - 既存プロダクションサービスへMCPサーバーを後付けで統合する際に考慮すべき認証・認可設計・スキーマ設計・エラーハンドリングのポイントをまとめた実践ガイド。「新規実装より既存サービスへの統合が難しい」という現場の知見が凝縮されており、MCPエコシステムの実用普及を進める上で参照価値が高い。

- **[GoogleのModern Web Guidanceに学ぶ、モダンCSSのDos / Don'ts大全](https://zenn.dev/ubie_dev/articles/modern-css-dos-donts)** - GoogleがAIコーディングエージェント向けに整備した「Modern Web Guidance」のCSSセクションをベースに、古い書き方（Flexbox乱用・CSS変数未使用等）と現代的な書き方を対比形式で整理した記事。LLMが古いCSS慣行を学習していることへの対処として、このガイドラインが持つ意義も解説している。

- **[Karpathy CLAUDE.mdは本当に普遍解か？──Opus 4.7との構造的合致と、モデル依存性のはなし](https://zenn.dev/earlgray_mk/articles/472ef76d9e9d3e)** - Andrej KarpathyがClaude Codeに関して言及したCLAUDE.mdの書き方指針が、特定モデル（Opus 4.7）の構造的特性に最適化されており他のモデルでは効果が異なる可能性を論じた考察。エージェント設定のモデル依存性という見落とされやすい問題を指摘している。

- **[複数集約を跨ぐ処理を1つのDBトランザクションで括る前に読む記事](https://zenn.dev/j5ik2o/articles/59de072b6728ff)** - DDD（ドメイン駆動設計）における複数集約にまたがる処理を単一トランザクションで括ることの問題点と代替パターン（Sagaパターン・Eventually Consistentな設計）を解説。「楽にトランザクションで包めばいい」という誘惑に対して設計上の理由から警鐘を鳴らす。

## Qiita

- **[ドキュメントが失われたAWS環境を1日で再現 + 再構築手順書まで生成 ─ Claude Opus 4.7「infra delegate to」の威力](https://qiita.com/ntaka329/items/b1d961ce5fab8541101f)** - ドキュメントが存在しないAWS環境をClaude Opus 4.7に「infra delegate to」コマンドで調査させ、1日でインフラ構成の把握から手順書生成まで完結させた実践報告。Opus 4.7の長コンテキスト処理能力とAWS CLI統合の威力を示す事例として、レガシー環境の棚卸しに応用できる可能性が高い。

- **[「OSって、結局なにしてるんですか？」— 新人エンジニア向けに"裏側"を整理してみる](https://qiita.com/prum_hitomi/items/09dd4f6328fe3b35aae3)** - プロセス管理・メモリ管理・ファイルシステム・デバイスドライバという4つの柱でOSの役割を新人エンジニア向けに整理した記事。「コードを書く前にOSを理解する」という視点で、クラウドネイティブ開発に慣れた世代が見落としがちな抽象化の下層を平易に説明している。

- **[【セキュリティ】「とりあえず `Access-Control-Allow-Origin: *` で動いたからヨシ！」が招くデータ全流出](https://qiita.com/fe1ix/items/122d24c7ae432b22cae8)** - CORSのワイルドカード設定を「動けばいい」でそのまま本番に出した場合に発生する情報漏洩シナリオを実証コード付きで解説。Credentials付きリクエストとの組み合わせ・プリフライトの回避・セッショントークン窃取まで段階的に攻撃シナリオを示し、開発者が理解すべきCORSのセキュリティ境界を明確化している。

## AWS 新着

- **[AWS Security Agent adds verification scripts for pentest findings](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-security-agent/)** (2026-05-22) - AWS Security Agentがペネトレーションテストで発見された脆弱性に対する検証スクリプトを自動生成する機能を追加。セキュリティ担当者がAIエージェントによる脆弱性スキャン後の「本当に悪用可能か」の確認作業を効率化できるようになり、レッドチームとブルーチームの連携ワークフローが改善される。

- **[New agentic migration assessment capabilities now available with AWS Transform](https://aws.amazon.com/about-aws/whats-new/2026/05/assessment-capabilities-transform)** (2026-05-22) - AWS Transformにエージェントベースの移行アセスメント機能が追加。レガシーシステムの依存関係・移行リスク・推奨経路をAIエージェントが自律的に分析するため、大規模なクラウド移行プロジェクトの初期調査フェーズを大幅に短縮できる。

- **[Amazon Bedrock expands support for request-level usage attribution](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-bedrock-request-level-usage-attribution/)** (2026-05-20) - Amazon BedrockがAPIリクエスト単位でのコスト配賦タグをサポート。マルチテナントのLLMアプリケーションやプロジェクト別のコスト追跡が精緻化でき、AI利用コストのチャージバックや予算管理の精度向上に直結する。

- **[AWS Security Hub now uncovers identity risks from unused access](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-security-hub-unused-access/)** (2026-05-20) - Security Hubが未使用のIAMアクセス権限・放置されたサービスロール・休眠アカウントを「アイデンティティリスク」として自動検出するようになった。最小権限原則の維持が困難な大規模AWSアカウント運用において、不要権限の蓄積リスクを継続的に可視化できる。

- **[Amazon CloudWatch Logs Insights adds new query commands and functions](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-insights/)** (2026-05-21) - CloudWatch Logs Insightsにウィンドウ関数・差分計算・時系列補完などの新クエリコマンドが追加。これまでLambdaやGlueで後処理していた複雑なログ分析がInsights内で完結できるようになり、ログ調査のコストとレイテンシが改善される。

## Lobsters

- **[Don't Roll Your Own …](https://susam.net/do-not-roll-your-own.html)** (84pt) - 「Don't roll your own crypto」という格言から出発し、暗号・認証・セッション管理・入力バリデーション等のセキュリティ・コンポーネントを独自実装すべきでない理由を体系的に論じたエッセイ。AIコード生成時代に「AIに書かせたから既製品の代わりになる」という誤解が広まりつつある中で、タイミングよくコミュニティの議論を呼んだ。

- **[Jira is Turing-Complete](https://seriot.ch/computation/jira.html)** (23pt) - JiraのワークフロールールエンジンがTuring完全であることを証明した論文/記事。チュートリアル形式でJiraルール上のCPUシミュレーターを構築し、タスク管理ツールがいつの間にか汎用計算機になっていることをユーモラスかつ厳密に示した。「本来やるべき仕事の時間を使って作った」というメタなジョークも好評。

- **[Wayland compositor implemented as a mod in Minecraft](https://modrinth.com/project/9yAfrPwH)** (21pt) - MinecraftのModとしてWaylandコンポジターを実装し、ゲーム内でLinuxデスクトップを動作させたプロジェクト。実用性はゼロだが「なぜやった」という問いへの答えが面白く、グラフィックスとLinuxカーネルの深い理解なしには実現できない技術的遊び心がコミュニティに受けた。

- **[mvm - a fast virtual machine for Go](https://mvm.sh/)** (18pt) - Goプログラム向けの高速VMを実装した「mvm」プロジェクト。GCの一時停止最小化・起動速度改善・エッジ環境でのGo実行に主眼を置いた設計で、GoをWebAssemblyの代替としてサーバーレス・エッジ環境に展開したいユースケースへのアプローチとして注目されている。

## dev.to

- **[WebAssembly in 2026: The Quiet Revolution That Finally Delivered](https://dev.to/zny10289/webassembly-in-2026-the-quiet-revolution-that-finally-delivered-8ff)** - 「いつか普及する」と言われ続けたWebAssemblyが2026年に実用フェーズへ到達した経緯を総括した記事。WASIp2・Component Model・WASM GCなどのエコシステム成熟により、Figma・1Password・Fastlyの本番事例が生まれたことでブラウザ外も含む汎用ランタイムとしての地位を確立しつつある。

- **[CSS in 2026: Container Queries, Cascade Layers, and the End of Utility-Class Bloat](https://dev.to/zny10289/css-in-2026-container-queries-cascade-layers-and-the-end-of-utility-class-bloat-3nkc)** - Container QueriesとCascade Layersが主要ブラウザで安定して使えるようになった2026年のCSS状況を整理した記事。Tailwindに代表するユーティリティクラス中心設計から「コンポーネント内でコンテキストに応じてスタイルを定義する」アーキテクチャへの移行が現実的になったと論じている。

- **[DuckDB 1.5.2 Release, DuckLake v1.0 & PostgRESTxn for Atomic PG Transactions](https://dev.to/soytuber/duckdb-152-release-ducklake-v10-postgrestxn-for-atomic-pg-transactions-2jeg)** - DuckDB 1.5.2リリースとDuckLake v1.0（DuckDB上でのLakehouseフォーマット）の概要をまとめたウィークリーダイジェスト。DuckLakeはIceberg・Delta Lakeに代わるDuckDBネイティブのオープンテーブルフォーマットとして注目されており、ポータブルな分析環境の構築が更に手軽になる。

- **[I Spent 108 Commits Building Infrastructure. Google I/O 2026 Shipped It as One API Call.](https://dev.to/sodiqjimoh/i-spent-108-commits-building-infrastructure-google-io-2026-shipped-it-as-one-api-call-bp9)** - 独自に108コミットかけて構築したマルチモーダルパイプラインの処理が、Google I/O 2026で発表された単一のAPI呼び出しで実現可能になったという開発者の率直な告白。「プラットフォームの進化に飲み込まれるリスク」と「その基礎を理解したことの価値」という二面を平静に考察している。

## TechCrunch

- **[AI is being used to resurrect the voices of dead pilots](https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/)** - 墜落事故で亡くなったパイロットの音声をAIで再現しようとするユーザーが現れ、米当局が対応に追われているという報告。事故調査ドキュメントに含まれる音声サンプルから音声クローンを作成する事例が増え、プライバシー・遺族への配慮・捜査記録の二次利用禁止という法的グレーゾーンが浮き彫りになった。

- **[How VCs and founders use inflated 'ARR' to crown AI startups](https://techcrunch.com/2026/05/22/how-vcs-and-founders-use-inflated-arr-to-kingmake-ai-startups/)** - AI系スタートアップの調達時に「ARR」の定義を意図的に拡張（コントラクト価値・前払いライセンス等を含む）してバリュエーションを押し上げる手法がVC・創業者間の慣行になっているというTechCrunchの調査報道。SaaSのARRとは本質的に異なる指標が同じラベルで流通することへの警告。

- **[Meta quietly launches a new Reddit-like app called Forum](https://techcrunch.com/2026/05/22/meta-quietly-launches-a-new-reddit-like-app-called-forum/)** - MetaがThreadsとは別に、トピック別のコミュニティ掲示板形式の新アプリ「Forum」を静かにローンチ。Reddit対抗を明確に意識したUIと、Metaのインフラ・AI推薦アルゴリズムを活用したコンテンツ発見機能が特徴で、Redditが広告モデルで批判を浴びる隙を突く戦略的タイミングでの投入。

- **[These special phone and app features can help protect you from spyware](https://techcrunch.com/2026/05/23/you-dont-have-to-click-anything-to-get-hacked-anymore-heres-how-to-fight-back/)** - ゼロクリック攻撃（リンクを踏まずとも感染するスパイウェア）への対抗策として、Lockdown Mode・iMessage Contact Key Verification・Advanced Protection Programなどの機能を解説。セキュリティ研究者がジャーナリスト・活動家・企業幹部向けに推奨する具体的な設定手順も含む。

## Ars Technica

- **[Police boast of hacking VPN where criminals "believed themselves to be safe"](https://arstechnica.com/tech-policy/2026/05/police-boast-of-hacking-vpn-where-criminals-believed-themselves-to-be-safe/)** - 欧州の法執行機関が犯罪者グループが使用していたVPNサービスのインフラに侵入し、通信内容を傍受していたことを公表。「VPNを使えば安全」という思い込みが崩れた事例として注目されるが、同時に「当局もVPNを破れる」という事実が一般ユーザーのプライバシーに与える含意についても議論が広がった。

- **[Texas AG sues Meta over claims that WhatsApp doesn't provide end-to-end encryption](https://arstechnica.com/security/2026/05/texas-ag-sues-meta-over-claims-that-whatsapp-doesnt-provide-end-to-end-encryption/)** - テキサス州司法長官がWhatsAppの広告する「エンドツーエンド暗号化」が不完全・誤解を招くものであるとしてMetaを提訴。バックアップ・メタデータ・ビジネスアカウントとのやり取りに関してE2Eが適用されない場面があることを根拠にしており、E2E暗号化の「範囲」をめぐる法的定義の争いへと発展する可能性がある。

- **[AI put "synthetic quotes" in his book. But this author wants to keep using it.](https://arstechnica.com/ai/2026/05/ai-put-synthetic-quotes-in-his-book-but-this-author-wants-to-keep-using-it/)** - AIがノンフィクション書籍中に実在しない引用（合成引用）を生成してそのまま出版された事例。著者はAIの有用性を認めつつ継続利用の意向を示しており、ファクトチェックプロセスの省略・編集者の役割変化・読者との信頼関係という三つの問題が同時に露呈している。

- **[Trump abruptly cancels EO signing event after top AI firm CEOs declined to go](https://arstechnica.com/tech-policy/2026/05/trump-canceled-ai-safety-testing-eo-after-snub-from-tech-ceos/)** - AI安全性テストに関する大統領令の署名イベントが、主要AI企業のCEOたちが参加を断ったことで突然キャンセルされた。AI規制をめぐる政府とテック業界の緊張関係を象徴する出来事で、企業側の自律的AIガバナンスと政府主導規制のどちらが主導権を持つかという構図がより鮮明になった。

## 注目トピック

**WebAssembly・CSS・DuckDB：「来る来る詐欺」の終焉**: 今回のフィードで際立つのは、「普及が期待されてきたが遅れていた技術」が複数同時に実用フェーズへ到達したというシグナルだ。WebAssemblyはWASIp2とComponent Modelの成熟で真のポータブルランタイムに近づき、CSS Container QueriesとCascade Layersはユーティリティクラス依存からの脱却を現実にし、DuckLake v1.0はDuckDBをLakehouseの一級市民に押し上げた。一方dev.toの「108コミット→1 API Call」記事は、この加速が個人開発者の積み上げた努力を突然無価値化するという苦い側面も照らし出す。「今作っているものが来年のAPIになる」という前提で、何を自作して何を委ねるかの判断軸を常に更新することがエンジニアに求められている。

**信頼の崩壊多発週**: 今週はさまざまな「信頼していたものへの裏切り」が重なった。VPNが当局にハックされ、WhatsAppのE2Eが法的に問われ、AI生成の合成引用がノンフィクション本に紛れ込み、GhostscriptはRust実装に超越され、「秘密のURL」はCTログで即座に発見される——いずれも「これは安全・信頼できる」という前提が崩れた事例だ。テクノロジーへの信頼はアーキテクチャ的に検証可能な形で設計されるべきであり、「そういうものだから」という慣例的信頼に依存しない設計原則の重要性が改めて浮き彫りになった。
