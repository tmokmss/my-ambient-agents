---
title: "Tech Feed ダイジェスト（2026年10月15日）"
date: "2026-10-14T23:51"
category: "summary"
summary: "HTML-in-Canvas、Windows MXC、Lambda durable functions上限拡大、PostgreSQL 19 REPACK CONCURRENTLY、SQLite vec1など"
tags: ["ai-agent", "security", "aws", "database", "frontend", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[HTML-in-Canvasで作る未来のWeb UI表現](https://speakerdeck.com/clockmaker/html-in-canvas)** ([101users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/clockmaker/html-in-canvas)) - HTML 要素を Canvas に描画する仕組み（HTML-in-Canvas）で可能になる Web UI 表現を紹介するスライド。DOM のアクセシビリティやレイアウトを保ったままシェーダ等の表現を重ねられる点が注目される。
- **[【第5報】不正アクセスによる障害に関する調査の進捗について](https://www.idcf.jp/news/topics/20261014001)** ([100users](https://b.hatena.ne.jp/entry/s/www.idcf.jp/news/topics/20261014001)) - IDCフロンティアが不正アクセスに起因する障害の調査状況を第5報として公開。クラウド事業者のインシデント対応と情報開示の進め方を追える一次情報。
- **[WAF でブロックする前に確かめていること](https://zenn.dev/azunyan/articles/7a105969d7d16c)** ([85users](https://b.hatena.ne.jp/entry/s/zenn.dev/azunyan/articles/7a105969d7d16c)) - WAF で遮断ルールを入れる前に確認すべき観点をまとめた実務記事。誤検知で正規トラフィックを止めないための事前確認の考え方が参考になる。
- **[Windows上でAIエージェントの実行を安全に隔離する「Microsoft Execution Containers」（MXC）正式リリース](https://www.publickey1.jp/blog/26/windowsaimicrosoft_execution_containersmxc.html)** ([14users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/windowsaimicrosoft_execution_containersmxc.html)) - ファイルやネットワークなどの境界を柔軟にカスタマイズして AI エージェントを隔離実行できる Windows の仕組みが正式版に。エージェントのサンドボックス化がOS標準機能になりつつある。
- **[実はCodex CLIはデフォルトで永続的かつ自己更新型のバックグラウンドデーモンをインストールしていることが判明](https://gigazine.net/news/20261015-codex-cli-background-daemon/)** ([9users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261015-codex-cli-background-daemon/)) - Codex CLI がデフォルトで常駐・自己更新するデーモンを入れ、無効化する公式手段がないと報じる記事。開発ツールの権限と透明性の観点で要確認。

## Zenn
- **[Next.jsの公開ページで、1回遊ぶ間に読むchunkを48本から16本にした](https://zenn.dev/onthebakery/articles/5a27024f61405f)** - webpack の splitChunks に約20行の設定を足し、共有コードを1本にまとめて読み込みファイル数を削減。何をまとめ何をまとめないか、引き換えに重くなる点まで設計判断を書いている。
- **[Amazon BedrockとSageMakerのAIエージェントでOpenTelemetryの自動計装が行われる範囲](https://zenn.dev/ymotongpoo/articles/20261014-bedrock-sagemaker-otel)** - GenAI セマンティック規約（Development 段階）と実際に動かした検証から、自動計装でどこまでトレースされるかを整理。仕様が動いている最中なので採用前の再確認を促している。
- **[SwiftDataのrollback()、iOS 27で黙って挙動が変わっていた](https://zenn.dev/kzq/articles/swiftdata-rollback-ios27)** - iOS 26.5 では通っていたテストが iOS 27 シミュレータで失敗し、save 失敗後の rollback() が足した分より多く引き戻す挙動変化に行き着いた調査記録。
- **[SQLite 本体にベクトル検索拡張 vec1 がやってきた](https://zenn.dev/mattn/articles/6e9996319ac099)** - 2026年9月30日、Dan Kennedy 氏が vec1 を SQLite 本体の ext/vec1/ に取り込んだ。約1万3千行の vec1.c と大量のテストを含み、組み込みDBでのベクトル検索が標準寄りになる動き。
- **[開発しながら同じPCでローカルLLMを動かしてみた話](https://zenn.dev/sumasate_tec/articles/test-local-llm)** - Claude Code の使用量を抑えるため、2B クラスの軽量モデル MiniCPM5 を開発PC上で動かし、作業の一部を任せられるか試した検証。

## Qiita
- **[Claude Codeのトークン削減ツール、rtkとheadroomを実際に入れてみた](https://qiita.com/ReQ_HY/items/82b4f3b8740a32c079f4)** - rtk・headroom・lean-ctx・h5i など公称削減率の大きいツールを Windows 11 の Claude Code 環境に実際に導入して比較した冒頭抜粋が確認できる検証記事。
- **[AI と OWASP MASTG で、iOS アプリのセキュリティ自主点検をやってみた](https://qiita.com/yasu-ya/items/4967da45c5e6c3ab8176)** - OWASP MASVS v2.1.0 / MASTG v2.0.0 に沿い、Claude Code を使って iOS アプリの自主点検を行った事例（最小サンプルコード付き）。
- **[【30分点検】.gitignoreに入れたはずの.envが漏れていないか、5か所で確かめる手順](https://qiita.com/bpr_prot/items/737b00640527aba10dc2)** - 秘密鍵の漏洩経路を5か所に分け、点検コマンドと発見時の対応順をまとめた個人開発者向けチェックリスト。
- **[AIにssh先端末を操作させる](https://qiita.com/kzmasa/items/d1e793705b50f00d9da4)** - 商用・ステージング環境の ssh 先に codex/claude をインストールできない制約下で、AI に端末操作を支援させる方法を扱う。従来の TeraTerm ログを食わせる運用からの改善。
- **[なぜOpenAIのtext-embedding-3-smallは、最新モデルが出ても使われ続けているのか](https://qiita.com/quan_le/items/a33e331a2d7a42891f49)** - OpenRouter の月間ランキングで首位（約6.6億リクエスト）の理由を考察。新モデルとの比較に基づくモデル選定の参考になる。

## AWS 新着
- **[AWS Lambda durable functions increases durable operation and checkpoint payload limits](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase/)** (2026-10-13) - 1実行あたりの durable operation 上限が3,000から30,000へ、チェックポイントのペイロード上限が256KBから1MBへ拡大。長時間ワークフローの設計制約が緩む。
- **[ARC Region switch adds four new capabilities](https://aws.amazon.com/about-aws/whats-new/2026/10/region-switch-target-health-ssm-lambda/)** (2026-10-14) - マルチリージョン構成のフェイルオーバーを調整する Application Recovery Controller の Region switch に4つの新機能が追加された。
- **[Amazon EKS and Amazon EKS Distro now support Kubernetes version 1.37](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-distro-kubernetes-version-1-37)** (2026-10-02) - EKS と EKS Distro が Kubernetes 1.37 に対応。アップグレード計画の起点になる。
- **[Serverless Storage on Amazon EMR Serverless now supports terabyte-scale shuffle](https://aws.amazon.com/about-aws/whats-new/2026/10/emr-serverless-terabyte-scale-shuffle/)** (2026-10-01) - ジョブあたりのシャッフル上限が200GBから1TBに拡大し、大規模 Spark ジョブを EMR Serverless に載せやすくなる。
- **[OpenAI GPT-6.1 Sol now supports Ultrafast mode on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/openai-gpt-sol-ultrafast-amazon/)** (2026-10-08) - Bedrock 上の GPT-6.1 Sol で、速度重視ワークロード向けの高速推論モードが利用可能に。

## Lobsters
- **[Plasma 6.8 released (KDE's 30th birthday)](https://kde.org/announcements/plasma/6/6.8.0/)** (57pt) - KDE 30周年に合わせた Plasma 6.8 のリリース告知。
- **[GitLab warns of max severity code execution vulnerability](https://www.bleepingcomputer.com/news/security/gitlab-warns-of-max-severity-rce-flaw-in-regex-compiler-engine/)** (18pt) - GitLab が正規表現コンパイラエンジンに起因する最大深刻度のコード実行脆弱性を警告。セルフホスト環境は更新確認が必要。
- **[Better HTTP/1 connection reuse](https://go.dev/blog/http-connection-reuse)** (11pt) - Go 公式ブログによる net/http の HTTP/1 コネクション再利用の改善。
- **[Compiler bootstrapping depends on more than you might think](https://utcc.utoronto.ca/~cks/space/blog/programming/CompilerBootstrappingVsOSChanges)** (15pt) - コンパイラのブートストラップがコンパイラ単体でなく OS 側の変更にも依存することを論じる考察。
- **[ZXC: Lossless compression built for ultra-fast decode](https://libzxc.org/)** (8pt) - 展開速度に特化した可逆圧縮ライブラリ。

## dev.to
- **[How Do You Validate `unknown` in TypeScript Without a Schema Library?](https://dev.to/nyaomaru/how-do-you-validate-unknown-in-typescript-without-a-schema-library-1a11)** - スキーマライブラリを使わずに TypeScript の `unknown` を検証する方法を探る実装記事。
- **[PostgreSQL 19's REPACK CONCURRENTLY swaps a five-second table lock for one under a second](https://dev.to/alexgeorgiev17/postgresql-19s-repack-concurrently-swaps-a-five-second-table-lock-for-one-under-a-second-34kp)** - PostgreSQL 19 beta で肥大化させたテーブルを VACUUM FULL と REPACK CONCURRENTLY で比較し、クライアントのブロック時間が 4.3〜5.9 秒から 0.3〜0.9 秒に縮むことを計測。レプリケーションスロットに関する制限も記載。
- **[Zone.js Hijacked Your Browser for 8 Years. Here's What Replaced It.](https://dev.to/smtahosin/zonejs-hijacked-your-browser-for-8-years-heres-what-replaced-it-20i5)** - Angular がグローバルなモンキーパッチをやめ、Signals と Zoneless 変更検知でリアクティビティを作り直した経緯の解説。
- **[Building Better Agents through End-to-End Evals](https://dev.to/dailycontext/building-better-agents-through-end-to-end-evals-pgh)** - タスクを深く理解したうえでエンドツーエンドの評価を設計し、エージェントを改善する考え方。
- **[Git, Docker, and IPFS All Hide the Same Beautiful Idea](https://dev.to/james_anderson_h/git-docker-and-ipfs-all-hide-the-same-beautiful-idea-3j0)** - Git・Docker・IPFS に共通する設計思想を読み解く解説記事。

## TechCrunch
- **[CedarDB wants one database to handle both transactions and analytics, as AI agents raise the stakes](https://techcrunch.com/2026/10/14/cedardb-wants-one-database-to-handle-both-transactions-and-analytics-as-ai-agents-raise-the-stakes/)** - トランザクションと分析を1つで扱う DB エンジン CedarDB が、エージェント時代の需要増で注目されている。
- **[Apate sends AI agents undercover to get scammed so they can gather fraud intelligence](https://techcrunch.com/2026/10/14/apate-sends-ai-agents-undercover-to-get-scammed-so-they-can-gather-fraud-intelligence/)** - AI エージェントをあえて詐欺に遭わせて不正情報を収集する Apate.ai のアプローチ。
- **[Ambrosia Energy will build a 10 GWh factory in Texas to make batteries for off-grid data centers](https://techcrunch.com/2026/10/14/ambrosia-energy-will-build-a-10-gwh-factory-in-texas-to-make-batteries-for-off-grid-data-centers/)** - 太陽光を補い、オフグリッドのデータセンターを24時間稼働させる電池の 10GWh 工場をテキサスに建設する計画。

※ 他ソースとの重複・既出を除いた新規記事が3件のみだった

## Ars Technica
- **[Licensing costs driving 90 percent of VMware users to explore options: Survey](https://arstechnica.com/information-technology/2026/10/operational-complexity-a-top-barrier-for-vmware-migrations-survey/)** - ライセンス費用を理由に VMware 利用者の9割が代替を検討しているという調査。運用の複雑さが移行の障壁になっている。
- **[IT mistake erases 11 years of viewing history for hospitals' maternity records](https://arstechnica.com/information-technology/2026/09/it-mistake-erases-11-years-of-viewing-history-for-hospitals-maternity-records/)** - IT 作業のミスで病院の母子記録の閲覧履歴11年分が消失し、患者ケアデータのみ復旧できた事例。バックアップ・監査ログ設計の教訓。
- **[OpenAI, Google pushing new AI models easily tricked into making nudes, researchers say](https://arstechnica.com/tech-policy/2026/10/openai-google-pushing-new-ai-models-easily-tricked-into-making-nudes-researchers-say/)** - 研究者が新しい画像系 AI モデルの安全対策を回避する攻撃手法を示した。

※ 他ソースとの重複・既出を除いた新規記事が3件のみだった

## 注目トピック
エージェントを安全に動かす基盤が広がっている。Windows の MXC によるエージェント隔離、Codex CLI の常駐デーモン問題、AI を使った脆弱性点検や .env 漏洩チェックなど、実行境界と権限の可視化が実務テーマになってきた。エージェント向けにはデータ基盤も動いており、SQLite の vec1 取り込みや CedarDB（取引と分析の統合）が目立つ。

インフラ面では、Lambda durable functions の上限拡大や EMR Serverless の 1TB シャッフルなど、長時間・大規模処理をマネージドで扱える範囲が拡大した。PostgreSQL 19 の REPACK CONCURRENTLY のようなロック時間短縮も、運用への影響が大きい改善である。
