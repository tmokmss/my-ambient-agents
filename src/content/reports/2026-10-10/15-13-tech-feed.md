---
title: "Tech Feed ダイジェスト（2026年10月11日）"
date: "2026-10-10T15:13"
category: "summary"
summary: "Aurora Serverless の高速スケール、Durable Objects の暴走対策、Node.js 26 の Temporal、ClickFix 拡大など8ソースの技術トピック"
tags: ["digest", "aws", "security", "ai", "database", "javascript", "architecture"]
---

## はてなブックマーク (テクノロジー)
- **[bpmn.io で始める AI-Ready な業務フロー管理 | フューチャー技術ブログ](https://future-architect.github.io/articles/20261009a/)** ([165users](https://b.hatena.ne.jp/entry/s/future-architect.github.io/articles/20261009a/)) - BPMN エディタ bpmn.io を使い、業務フローを機械可読な形で管理して AI に参照させる構成を紹介する記事。業務知識をコードに近い形式で持つ発想が中心。
- **[Domain model purity vs. domain model completeness (DDD Trilemma)](https://enterprisecraftsmanship.com/posts/domain-model-purity-completeness/)** ([112users](https://b.hatena.ne.jp/entry/s/enterprisecraftsmanship.com/posts/domain-model-purity-completeness/)) - DDD のドメインモデルで「純粋性」と「完全性」を同時に満たせないトレードオフを整理した設計論。外部依存の扱い方に踏み込む内容とタイトルから読み取れる。
- **[個人情報漏洩が日常になってしまった世界でどうしていくべきか](https://nyosegawa.com/posts/data-leak-era/)** ([105users](https://b.hatena.ne.jp/entry/s/nyosegawa.com/posts/data-leak-era/)) - 漏洩が相次ぐ状況を前提に、開発者・利用者がどう備えるかを論じた記事。IPA の注意喚起も出ており、実務の関心が高い話題。
- **[写真も動画も声もまとめて0.74Bで検索。ローカルRAG向け「EmbeddingGemma 2」](https://pc.watch.impress.co.jp/docs/news/2147318.html)** ([63users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2147318.html)) - 0.74B パラメータで画像・動画・音声を横断検索できるマルチモーダル埋め込みモデル。ローカル RAG の選択肢を広げる。
- **[CloudflareのDurable Objectsでデッドループして破産しないために知っておきたいこと](https://zenn.dev/karamage/articles/f1c3ef67dbd4b3)** ([58users](https://b.hatena.ne.jp/entry/s/zenn.dev/karamage/articles/f1c3ef67dbd4b3)) - Durable Objects の無限ループ的な呼び出しで課金が膨らむリスクと、その防止策をまとめた実践記事。

## Zenn
- **[AWS Cost ExplorerのAmazon Bedrock製品属性で、できることとできないことを確認してみた](https://zenn.dev/fusic/articles/c34f48e0ab811e)** - 10/8 に追加された Bedrock の製品属性（モデル別など）によるコスト分析を Cost Explorer / Budgets / Dashboards で検証し、可能な範囲と限界を整理している。
- **[社外の人はPower BIのゲートウェイを立てられなかった話](https://zenn.dev/tomojoz/articles/dac7b46967c993)** - Entra ID ゲストのベンダーに AWS EC2 上へオンプレミス データ ゲートウェイを構築してもらう際、登録が止まった 2 つの原因（ゲストでは登録不可、サインインエラー 0xCAA80000）と対処。
- **[dbt Wizard vs Claude Code: 同じdbtタスクを頼んで挙動の違いを見てみた](https://zenn.dev/intage_tech/articles/art026-dbt-wizard-try)** - dbt Labs 提供の dbt 特化エージェントと汎用の Claude Code に同じタスクを与え、挙動を比較した検証。
- **[昔書いたRSpecのand_invokeの記事を最新のrspec-mocksで検証し直した](https://zenn.dev/kyto64/articles/rspec-and-invoke-revisited)** - Ruby 3.3 / 4.0 と rspec-mocks 3.13.8 で過去記事の挙動を再検証。バージョン差による変化を確認する内容。
- **[初AIコーディング記録：Brain第1世代でLinuxを動くようにした話](https://zenn.dev/tnishinaga/articles/ee0b6cf4f8683d)** - Codex を使い、Brain 第1世代で Linux を動かした記録。作戦、トラブル対処、良かった点と反省点をまとめている。

## Qiita
- **[【React】zodのbrandで値オブジェクトを実装する（classを使わない方法）](https://qiita.com/shun123/items/24f5d01004bc5ac8ea9b)** - class インスタンスは state 管理やシリアライズ（Server Components、localStorage など）と相性が悪い。そこで zod の brand 型で値オブジェクトを表現する方法（冒頭抜粋より）。
- **[サプライチェーン攻撃の40年 AI時代の依存を守る入門ガイド](https://qiita.com/kai_kou/items/debd8b05019aa41920f9)** - 2025〜2026 年の npm / PyPI の主な事件では、侵入口は新種の脆弱性より開発者の信頼だった、という整理から始まる入門ガイド（冒頭抜粋より）。
- **[AI を「確認待ち」で止めない：Claude Code の /goal に 1 行足して、判断を draft PR に置いた話](https://qiita.com/engchina/items/d53167a2d37a24294e98)** - Issue 作成から修正、PR、CI 通過までを自動化するフローの発展形。人の確認待ちで止まらないよう、判断を draft PR に残す工夫（冒頭抜粋より）。
- **[「制約」がAIの判断のブレを抑制する。Goプログラムの生成で実験してみた。](https://qiita.com/shinchi-p/items/84bc4e25ea393be33880)** - 業務知識を文章ではなく Go の型と遷移表で AI に渡す連載の続編。制約を与えると生成の揺れが減るかを検証している。
- **[UnityのMemory Profilerでスナップショット取得を自動化し、メモリリーク傾向を簡易調査するツールを作ってみた](https://qiita.com/SuguruHasegawa/items/9d6b559cc9874dc27c06)** - 定期的なスナップショット取得、シーンごとの確認、結果比較という手間を自動化するツール（冒頭抜粋より）。

## AWS 新着
- **[Amazon Aurora serverless now scales faster to support agentic AI and other bursty workloads](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-serverless-instant-16-acu-scaling/)** (2026-09-30) - 1 秒以内に最大 16 ACU ずつ増設でき、最大 256 ACU まで拡張する。エージェント系などのバースト負荷向けのスケール特性の変更。
- **[Aurora PostgreSQL now supports querying of Apache Iceberg and Parquet data](https://aws.amazon.com/about-aws/whats-new/2026/09/aurora-postgresql-query-apache-iceberg-and-parquet/)** (2026-09-30) - 既存の PostgreSQL アプリやツールから、運用データとデータレイク上の Iceberg / Parquet を直接クエリできる。
- **[AWS Certificate Manager now supports ACME issuance through AWS PrivateLink](https://aws.amazon.com/about-aws/whats-new/2026/10/AWS-Certificate-Manager-ACME-Privatelink)** (2026-10-06) - ACME による公開 TLS 証明書の発行・更新を、PrivateLink 経由の閉域経路で行える。
- **[AWS Health introduces the version catalog for software lifecycle management](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-health-introduces-version-catalog-software-lifecycle-management)** (2026-10-02) - AWS サービス全体のソフトウェアバージョンのライフサイクル情報を一元的に参照できる。
- **[AWS Security Hub now exports findings to S3 in CSV or JSON format](https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-exports-s3-csv-json/)** (2026-10-09) - Security Hub の検出結果を CSV または JSON (OCSF) で S3 にエクスポートできる。コンソール外での監査やレポート用途に使える。

## Lobsters
- **[oh, apparently it's not possible to portably check for string-to-float conversion errors in standard c](https://sebsite.pw/w/20261009-strtod.html)** (35pt) - 標準 C の strtod 系関数では、変換エラーを移植性のある形で判定できないという指摘。エッジケースの扱いがライブラリ実装に依存する問題。 [コメント](https://lobste.rs/s/rb2ulg/oh_apparently_it_s_not_possible_portably)
- **[Branches in branch-free code](https://00f.net/2026/10/09/llvm-compiles-branch-free-code-into-branches-on-risc-v/)** (23pt) - 分岐なしで書いたコードが、RISC-V 向けに LLVM でコンパイルされると分岐に変換されてしまう例。定数時間処理が必要な暗号実装などで注意が要る。 [コメント](https://lobste.rs/s/dsbt5a/branches_branch_free_code)
- **[Spinlocks Considered Harmful (2020)](https://matklad.github.io/2020/01/02/spinlocks-considered-harmful.html)** (21pt) - 2020 年の matklad の記事の再掲。スピンロックがユーザー空間でなぜ問題になりやすいかを論じる。 [コメント](https://lobste.rs/s/8mj9bb/spinlocks_considered_harmful_2020)
- **[Lifeguard: A static analyzer for Python lazy imports compatibility](https://github.com/Facebook/lifeguard)** (9pt) - Meta 公開の静的解析ツール。Python の遅延 import（lazy imports）に対してコードが互換かを検査する。 [コメント](https://lobste.rs/s/qwqne6/lifeguard_static_analyzer_for_python)
- **[1-click MMI execution in Android](https://karansaini.com/mmi-android/)** (7pt) - Android で 1 クリックにより MMI コードが実行されてしまう問題の解説（security / android タグ）。 [コメント](https://lobste.rs/s/txa6dj/1_click_mmi_execution_android)

## dev.to
- **[One unescaped semicolon was enough to steal Telegram accounts](https://dev.to/slabb/one-unescaped-semicolon-was-enough-to-steal-telegram-accounts-5gja)** - CVE-2026-107181（CVSS 8.1）の解剖。クリックされたリンクと、エスケープされていない IPC の区切り文字で、3 ファイルにまたがりセッションが奪われる。修正は「描画の修正」として出荷されたという。
- **[Node.js 26's default Temporal API fixes a one-hour DST drift that Date still has](https://dev.to/alexgeorgiev17/nodejs-26s-default-temporal-api-fixes-a-one-hour-dst-drift-that-date-still-has-16ad)** - Node.js 26 ではフラグなしで Temporal API が有効。素朴な Date 演算で出る 1 時間の DST ずれが解消される一方、コストは約 19 倍という測定結果。
- **[Evidence-Driven Development: Give Your Coding Agent Something to Prove](https://dev.to/copyleftdev/evidence-driven-development-give-your-coding-agent-something-to-prove-1h4k)** - 小さなタスクリストをわざと壊し、他の開発者が再現できる証拠を残させる、コーディングエージェント向けの検証手法。
- **[AI agent benchmark: I gave 9 models a destroy button and a job that needed it](https://dev.to/sarvar_04/ai-agent-benchmark-i-gave-9-models-a-destroy-button-and-a-job-that-needed-it-3d0f)** - 破壊的ツールを持たせた 9 モデルでツール利用の安全性を比べるベンチマーク。
- **[Stop Asking AI to Fix the Bug. Ask It to Prove the Cause.](https://dev.to/robertadam987_/stop-asking-ai-to-fix-the-bug-ask-it-to-prove-the-cause-1ibi)** - エラーを貼って「直して」と頼むと条件変更や null チェック追加で終わりがち。まず原因の立証を求める進め方を提案している。

## TechCrunch
- **[OpenAI's math solutions aren't meeting the field's standards yet](https://techcrunch.com/2026/10/08/openais-math-solutions-arent-meeting-the-fields-standards-yet/)** - OpenAI が大量に出した証明が、同社が相談した数学者グループのガイドラインから外れていたという報道。AI による証明の検証基準が問われている。
- **[Here are the top AI agents that can live in your text messages](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)** - テキストメッセージ上で動く AI エージェントを、汎用アシスタントから家族・旅行向けまで一覧にしたまとめ。
- **[Amazon and others are done keeping data center deals secret. Is it enough to build trust?](https://techcrunch.com/video/amazon-and-others-are-done-keeping-data-center-deals-secret-is-it-enough-to-build-trust/)** - Amazon が自治体とのデータセンター交渉で NDA を使わない方針を表明。Microsoft に続く動き。
  ※ 他ソースとの重複を除いた新規記事は 3 件のみだった。

## Ars Technica
- **[Attackers have been exploiting critical Zimbra flaw to steal emails](https://arstechnica.com/security/2026/09/attackers-have-been-exploiting-critical-zimbra-flaw-to-steal-emails/)** - Zimbra の重大な脆弱性が悪用されている。1 通のメールで OS コマンドをリモート注入でき、メールが盗まれる。
- **[ClickFix attacks infecting PCs and Macs are going viral](https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral/)** - ユーザーに悪意あるコマンドを自分で実行させる ClickFix が、PC と Mac の両方で広がっている。手口が単純で成功率が高いのが特徴。
- **[PC shipments fall 20.1 percent in "sharpest decline" since Q1 2023](https://arstechnica.com/information-technology/2026/10/pc-shipments-fall-20-1-percent-in-sharpest-decline-since-q1-2023/)** - PC 出荷台数が前年比 20.1% 減で、2023 年第 1 四半期以来の大幅な落ち込み。メモリ逼迫が背景にあるとみられる。
- **[AI bots "Timmy," "Ren," and "Jackie" are flooding social media with slop](https://arstechnica.com/ai/2026/09/ai-agents-flood-the-internet-with-slop-infused-spam/)** - 自律エージェントを名乗るアカウントが SNS に低品質な投稿を大量に流している問題。
- **[A Cray-1 supercomputer replica from 30 "obsolete" Mac Minis](https://arstechnica.com/gadgets/2026/10/a-cray-1-supercomputer-replica-from-30-obsolete-mac-minis/)** - スペインの計算機博物館が、旧型 Mac mini 30 台で Cray-1 のレプリカを作ったという話。

## 注目トピック
今回の中心は、AI エージェントの運用と安全性だ。Qiita では確認待ちで止めない自動化、dev.to では原因の立証や証拠を残させる手法、破壊的ツールを持たせたモデルの比較が出ている。TechCrunch の OpenAI 証明の検証基準も、出力を人間側でどう検証するかという同じ課題の延長にある。AWS 側でも Aurora Serverless の高速スケールが、エージェント系のバースト負荷を想定した変更として出ている。

セキュリティでは、Zimbra の悪用、ClickFix の拡大、Telegram の区切り文字エスケープ漏れが並ぶ。国内の情報漏洩への関心も高く、はてブでは漏洩を前提にした心構えの記事が 105 users を集めた。一方、コスト面では Cloudflare Durable Objects の暴走課金や Bedrock のコスト属性など、従量課金の可視化と上限管理が実務の論点になっている。
