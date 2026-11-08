---
title: "Tech Feed ダイジェスト（2026年11月8日）"
date: "2026-11-08T00:23"
category: "summary"
summary: "OSSのAIハーネス設計比較、Aurora PQ-TLS、Cursor拡張機能のバックドア、*sshole脆弱性など8ソースの技術トピックを整理"
tags: ["ai-agents", "security", "aws", "supply-chain", "formal-verification", "web", "linux"]
---

## はてなブックマーク (テクノロジー)
- **[ハーネスエンジニアリングを有名OSSはどう組んでいるのか？AIへの信頼で比べる5事例](https://gibberishlab.com/blog/oss-ai-agent-harness-philosophy)** ([107users](https://b.hatena.ne.jp/entry/s/gibberishlab.com/blog/oss-ai-agent-harness-philosophy)) - 著名OSSがAIエージェントの権限・検証・レビューの仕組み（ハーネス）をどう設計しているかを、「AIをどこまで信頼するか」という軸で5事例比較した記事。自分のチームの運用ルールを決める際の参照になる。
- **[AI時代の要求管理ハンドブック](https://www.ipa.go.jp/digital/kaihatsu/youkyu-kanri.html)** ([117users](https://b.hatena.ne.jp/entry/s/www.ipa.go.jp/digital/kaihatsu/youkyu-kanri.html)) - IPAが公開した、経営・現場・開発が一緒に要求を描くためのハンドブック。実装がAIで速くなるほど、上流の要求の質がボトルネックになるという問題意識に沿った公的資料。
- **[パブリックサブネットを持たない Web配信基盤の現在地](https://www.docswell.com/s/suzryo/KDMX88-2026-11-07-160134)** ([21users](https://b.hatena.ne.jp/entry/s/www.docswell.com/s/suzryo/KDMX88-2026-11-07-160134)) - パブリックサブネットなしでWebを配信する構成の現状をまとめたスライド。タイトルからはオリジン保護と運用負荷の両立が主題と読める。
- **[なぜかWindowsの「ペイント」にリモートコード実行の脆弱性](https://gigazine.net/news/20261106-ms-paint-remote-code-execution-vulnerability/)** ([10users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261106-ms-paint-remote-code-execution-vulnerability/)) - 画像編集ソフトのペイントにRCEが見つかったという報道。ファイルを開く系の標準アプリも攻撃面になる点に注意。
- **[LDRライクなRSSリーダのIrodrをReact 19 + Vite+で書き直して、iPhone Duoにも対応した](https://efcl.info/2026/11/07/irodr-2/)** ([23users](https://b.hatena.ne.jp/entry/s/efcl.info/2026/11/07/irodr-2/)) - 個人開発のRSSリーダをReact 19とVite+で作り直した記録。新しいフロントエンドツールチェーンの実践例として参考になる。

## Zenn
- **[Cloudflare Zero Wire × GitHub Actions × Claude で公開サーバーの脆弱性チェックを自動化](https://zenn.dev/tomipetit/articles/zero-wire-github-actions)** - Cloudflare Radarの脆弱性インテリジェンスフィード「Zero Wire」のRSSを使い、自分の公開サーバーが影響を受けるかを毎朝GitHub Actionsで自動判定する仕組みの紹介。
- **[Weight-Space Programming やってみた(やらせてみた)](https://zenn.dev/nwn/articles/cf9fe78aa33861)** - 「AIエージェントが小型モデルQwen3.5-0.8Bの重みを編集できた」という論文への反応を検証した記事。エージェントがやったのは、コードで重みや活性を調べ、仮説を立て、変更して確かめることであり、「重みの意味を人間以上に理解した」わけではないと整理している。
- **[集約をどこまで機械的に導けるか――形式手法をベースとしたドメインモデリング](https://zenn.dev/nrs/articles/33ba79c8b2542e)** - DDDの集約境界を形式手法でどこまで機械的に導出できるかを探る記事。AIに任せる範囲を「判断の不可逆性」で分ける、という考え方が軸にある。
- **[バイブコーディングで機能を継ぎ足していて見えてきたClaudeCodeの実装のクセ](https://zenn.dev/uguisu_blog/articles/45d1f446ece415)** - 要件が固まらないままClaude Codeで機能を足し続けた際の傾向をまとめた記事。概要では、テストは通るのに仕様とずれる、といった落とし穴が示唆されている。
- **[goda-pm.vim: goda.vim のためのプラグインマネージャー](https://zenn.dev/shougo/articles/goda-pm-vim-beta)** - Shougo氏によるgoda.vim向けのプラグインマネージャー。dpp.vimの単純なGo移植ではない設計とのこと。

## Qiita
- **[Figmaのリアルタイム同期の仕組みを、Node.js + WebSocketの最小構成で実装してみた](https://qiita.com/keishin_nishiura/items/b13d72afb085891e4fc9)** - Figmaの同時編集がなめらかな理由を、公式ブログのCRDT着想の同期設計から読み解き、最小構成のWebSocketで再現した記事（冒頭抜粋より）。
- **[【公式】Pyxel 3.0リリース！世界初（？）レトロ3Dゲームエンジン機能を搭載！](https://qiita.com/kitao/items/af92619297d5563f2a0e)** - Python向けレトロゲームエンジンPyxelが約3年ぶりのメジャーアップデート。レトロ調の3D機能が目玉。
- **[SSA ベースの .NET IL 最適化コンパイラーを作ってみた](https://qiita.com/hez2010/items/70fe879c1a37379f020c)** - RoslynとJITの間に入り、SSAベースでIL自体を最適化するコンパイラを作った記事。RoslynはILをほぼソース構造のまま出すため、IL段階での最適化余地があるという着眼点（冒頭抜粋より）。
- **[Claude Codeに「サブエージェントを使って」と書くのはやめよう。288回測ったら見つかる量は同じでコストだけ最大221%増えた](https://qiita.com/yunany90/items/631be4b879ec5e1b6b33)** - 新設定CLAUDE_CODE_SUBAGENT_EFFORTを使い、Exploreサブエージェントへの委譲を288回計測した実験。探索量は変わらずコストだけ増えたという結論が題名で示されている。
- **[EC2 がダウンしていてもメンテナンス画面を出せるようにした（ALB の固定レスポンス）](https://qiita.com/Tukirukiki/items/c8ee91004e6d47c5f0a4)** - ALBのリスナールールの固定レスポンスで、サーバーなしにメンテナンス画面を返す構成。静的ホスティングを別途用意せずに済む。

## AWS 新着
- **[Amazon S3 Tables now provide a simple, cost-effective path for data lake modernization](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-managed-migration-hive-to-iceberg/)** (2026-11-04) - HiveテーブルをApache Icebergへマネージドで移行できるようになった。ACIDトランザクション、スキーマ進化、タイムトラベルを得られ、移行作業の負担が下がる。
- **[AWS Step Functions workflows now available as AI agent tools](https://aws.amazon.com/about-aws/whats-new/2026/10/step-functions-workflows-ai-agent-tools/)** (2026-10-29) - Step FunctionsのワークフローをBedrock AgentCore Gateway経由でAIエージェントのツールとして使える。エージェントが実行の要否と入力を決め、実行自体は決定的なワークフローが担うため、長い処理を安全に任せやすい。
- **[Amazon EKS Auto Mode now supports Kubernetes Gateway API](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/)** (2026-10-28) - EKS Auto ModeがGateway APIに対応し、ロードバランサ設定を標準的でポータブルな方法で書ける。Ingressからの移行先として選択肢が増えた。
- **[Amazon Aurora now supports post-quantum TLS key exchange](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-postgresql-post-quantum-tls-key-exchange/)** (2026-10-29) - Aurora PostgreSQLがポスト量子TLS鍵交換に対応。「今盗んで後で解読」型の脅威への対策としてDB接続の暗号化を強化できる。
- **[AWS WAF AI traffic monetization now supports fiat payouts through Stripe](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-stripe-fiat-payouts/)** (2026-11-05) - AIボットやエージェントから受け取ったステーブルコイン課金を、Stripe経由で現地通貨で受け取れる。コンテンツやAPIの提供者向けの課金体系の拡張。

## Lobsters
- **[Meridian — an experimental web browser built on Servo and GPUI](https://op.tngl.io/meridian/)** (43pt) - ServoエンジンとGPUIを組み合わせた実験的ブラウザ。Rust製のレンダリングエンジンとUIフレームワークでブラウザを組む試み。
- **[*sshole, or when are we finally going to get rid of C?](https://sunshowers.io/posts/sshole/)** (17pt) - Alpine LinuxのOpenSSHサーバーでパスワード認証が回避される問題（*sshole）を題材に、C言語のメモリ安全性を論じる記事。Ars Technicaも同じ件を別角度で報じており、一部構成のAlpineが影響を受けるという。
- **[Two Dimensional Version Control](https://www.redblobgames.com/blog/2026-09-27-jujutsu-experience/)** (28pt) - バージョン管理ツールJujutsuの使用体験をまとめた記事。Gitとは違う変更の捉え方を紹介している。
- **[Hacking the meta ray-ban smartglasses](https://p0pcycle.com/2026/11/06/hacking-the-meta-ray-ban-smartglasses/)** (29pt) - Meta Ray-Banスマートグラスを解析した調査記事。ウェアラブル端末のセキュリティ検証の実例。
- **[OpenBSD top(1) adds flag to show chroot, pledge and unveil status](https://undeadly.org/cgi?action=article;sid=20261106104957)** (16pt) - OpenBSDのtop(1)に、プロセスのchroot・pledge・unveil状態を表示するフラグが追加された。サンドボックス化の適用状況を一覧で確認できる。

## dev.to
- **[Setting up a server that has no IPv4](https://dev.to/remdore/setting-up-a-server-that-has-no-ipv4-3e4f)** - IPv4なし（IPv6のみ）のサーバーを構築する際の実践的な手順と落とし穴をまとめた記事。IPv4アドレスのコスト高を背景にした実用的な話題。
- **[Your "Private" Search Engine Might Run on Bing. This One Builds Its Own Index](https://dev.to/startupcafe/your-private-search-engine-might-run-on-bing-this-one-builds-its-own-index-4all)** - 独自インデックスを持つ、Rust製のオープンソース検索エンジンLYNXの検証記事。説明可能なランキングを特徴とし、運営者や未検証の点にも触れている。
- **[Lighthouse 13.6.0 May Change PageSpeed Insights Lab Scores Without Site Changes](https://dev.to/alifar/lighthouse-1360-may-change-pagespeed-insights-lab-scores-without-site-changes-46d8)** - Lighthouse 13.6.0でラボ計測のシミュレーション技術が変わり、サイトを変更していなくてもスコアが変動し得るという注意喚起。性能指標の推移を見ている人は比較に注意。
- **[From main.js Leaks to Hidden Tailwind CSS v4 Bloat — How I Built angular-bundle-guard](https://dev.to/gde/from-mainjs-leaks-to-hidden-tailwind-css-v4-bloat-how-i-built-angular-bundle-guard-with-geg)** - Angularのバンドルに混入する不要コードやTailwind CSS v4による肥大化を検出するツールを作った記録。バンドルサイズの回帰を防ぐ仕組みの参考になる。
- **[The Correct Timestamp Was in My Agent's Prompt. It Still Said We Were Talking.](https://dev.to/kenielzep97/the-correct-timestamp-was-in-my-agents-prompt-it-still-said-we-were-talking-eh7)** - 定期実行のセルフ監査で、プロンプトに正しい時刻を渡してもエージェントが誤った時間認識で答えた事例。プロンプトに入れた情報を使うとは限らない、という教訓。

## TechCrunch
- **[Axiom Math wants to keep AI slop out of mathematics](https://techcrunch.com/2026/11/05/axiom-math-wants-to-keep-ai-slop-out-of-mathematics/)** - AIが生成した未検証の証明があふれる中、検証を軸にするスタートアップ。同社のAIエージェントが数学の大規模資料Stacks Projectを形式検証したという。AI生成物を機械検証で担保する流れを示す。
- **[Crusoe sells troubled Wyoming data center project to Google](https://techcrunch.com/2026/11/06/crusoe-sells-troubled-wyoming-data-center-project-to-google/)** - CrusoeがつまずいていたWyomingの大規模データセンター計画をGoogleに売却した。巨大AIデータセンターの開発の難しさを示す事例。
- **[Pentagon offers battery startup 6K $250M loan to build US factory](https://techcrunch.com/2026/11/06/pentagon-offers-battery-startup-6k-250m-loan-to-build-u-s-factory/)** - 米国防総省が、マイクロ波プラズマ方式の電池材料製造を手がける6Kに、2億5000万ドルの融資を条件付きで承認した。電池の要素技術の量産化に関わる話題。

※ 他ソースとの重複・過去掲載との重複を除いた新規記事が3件のみだった

## Ars Technica
- **[Anthropic VS code extension on Cursor backdoored for nearly 12 hours](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)** - CursorのマーケットプレイスにあるAnthropic公式のVS Code拡張が約12時間バックドア化された。攻撃者がどうやって認証済みアカウントを侵害したかは未解明で、エディタ拡張のサプライチェーンリスクを示す。
- **[Binance says hackers who stole billions in crypto spent months planning heist](https://arstechnica.com/information-technology/2026/11/binance-says-hackers-who-stole-billions-in-crypto-spent-months-planning-heist/)** - Binanceの大規模盗難は、ノートPCへの感染、侵害された社内ツール、偽の採用面接といった手口を数か月かけて組み合わせたものだった。開発者を狙う社会工学の実例。
- **[Hackers exploited iOS and Android flaws to infect phones](https://arstechnica.com/security/2026/11/hackers-exploited-ios-and-android-flaws-to-infect-phones/)** - iOSとAndroidの脆弱性を悪用して端末を感染させた攻撃。研究者は外交関係者を狙うロシア政府系のグループの可能性があるとみている。
- **[PHP warns it plans to release 2 emergency patches imminently](https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/)** - PHPが緊急パッチ2件を近く出すと予告した。未確認情報ながら、PHP2ShellというリモートコードのExploitが報じられていた。PHPを使う人はパッチ適用の準備が必要。
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - ターゲティング広告を経路に、ゼロクリックのExploitで傭兵型スパイウェアが導入されたとされる。広告経由での配信が確認された初の事例の可能性がある。

## 注目トピック
今日目立つのは「AIエージェントをどう信頼し、どう縛るか」と「開発ツールのサプライチェーン」の二つ。前者ははてブのOSSハーネス比較、Step Functionsをエージェントのツールにする機能、Axiom Mathの形式検証、Zennの形式手法によるドメインモデリングに表れている。エージェントの自由度を上げるより、決定的な部分と機械検証で囲む設計に関心が移っているように見える。

後者では、CursorのAnthropic拡張のバックドア、Binanceの偽面接を使った侵入、PHP2Shellの緊急パッチ予告が並んだ。エディタ拡張・採用フロー・言語ランタイムと、攻撃面が開発者の日常に近づいている。AWS側でもポスト量子TLSやSBOM関連の機能追加が続いており、暗号の将来対応と資産の可視化を前倒しで進める流れが続いている。
