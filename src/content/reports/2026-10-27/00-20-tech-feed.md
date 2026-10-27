---
title: "Tech Feed ダイジェスト（2026年10月27日）"
date: "2026-10-27T00:20"
category: "summary"
summary: "eMudhra 中間CA問題の余波、PHP 緊急パッチ、AIエージェントのセキュリティ、AWS の ML-KEM 対応などを横断ダイジェスト"
tags: ["security", "ai", "aws", "tls", "php", "mcp", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[AI の謎な説明文を直すスキル](https://zenn.dev/microsoft/articles/explain-before-shorten)** ([127users](https://b.hatena.ne.jp/entry/s/zenn.dev/microsoft/articles/explain-before-shorten)) - AI に箇条書きを作らせると、前提の説明を飛ばして唐突に否定から入る文章になりがち、という問題を、Markdown スライド作成の現場で言い直し用の SKILL にまとめた事例。AI 出力の品質を skill で矯正する実践例。
- **[【福田昭のセミコン業界最前線】「メモリの壁」がいつまでも存在し続ける理由](https://pc.watch.impress.co.jp/docs/column/semicon/2151293.html)** ([6users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/column/semicon/2151293.html)) - プロセッサ性能に対してメモリ帯域・レイテンシが追いつかない「メモリの壁」が解消されない理由を半導体業界の視点で解説するコラム。AI ワークロードの性能設計を考える背景知識になる。
- **[iPhoneからPDFファイルを開くだけでハッキングすることに成功](https://gigazine.net/news/20261026-iphone-pdf-hacking/)** ([10users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261026-iphone-pdf-hacking/)) - iPhone で PDF を開くだけで侵害できる攻撃の実証を紹介する記事。タイトルからは閲覧操作のみで成立する脆弱性とみられ、ドキュメントパーサ周りの攻撃面を示す。
- **[GitHub - yuiseki/map-from-scratch](https://github.com/yuiseki/map-from-scratch)** ([8users](https://b.hatena.ne.jp/entry/s/github.com/yuiseki/map-from-scratch)) - 「Xをしたいから地図を作って」という依頼ごとに、目的だけを満たす最小・最速の地図描画器をほぼゼロから作り、性能と正しさを計測する AI エージェント向けのスキルとハーネス。

## Zenn
- **[eMudhra 中間 CA 漏洩、OS もブラウザも最新なのにコンテナ 9 個と Python 環境 16 個が偽の証明書を信じていた](https://zenn.dev/nanora/articles/20261024-emudhra-ca-own-bundles)** - eMudhra の中間 CA 8 本の秘密鍵が復元可能だった件で、OS/ブラウザは対策済みでも、独自の証明書バンドルを持つ venv・pip・コンテナ・VS Code などは自分で更新するまで偽サイトを信じる、という実測報告。curl 1 行での確認方法も示す。同じ件は Ars Technica、Lobsters、Qiita、はてブ（Python 3.15.2 の ssl モジュール対策）でも別角度で報じられている。
- **[Node.js の Brotli 脆弱性 CVE-2026-111497 を読む](https://zenn.dev/chot/articles/79e6c94e27782d)** - 10/21 の Node.js セキュリティリリースで修正された Brotli デコーダの out-of-bounds write を、修正コミットから原因と修正内容の観点で読み解く。影響範囲の説明は公式告知に基づくと明記されている。
- **[S3のParquet、そのままSnowflakeで分析しても遅くない？Parquet Directを検証](https://zenn.dev/snowflakejp/articles/parquet-direct-pruning-benchmark)** - S3 上の既存 Parquet をコピーや Iceberg 変換なしに Snowflake から直接参照する Parquet Direct について、約6億行のデータで絞り込み時のプルーニング性能を検証。
- **[OpenWrt 25.12のadblock 4.5に豆腐フィルタを適用する（ruleの書式が変わった）](https://zenn.dev/yotan/articles/openwrt-25-adblock-tofu-filter)** - OpenWrt 24.10→25.12 への入れ替えで adblock 4.4 の awk 式ルールが 4.5.9 で書式変更されていてブロックが効かなかった点と、その直し方・ハマりどころをまとめた記録。
- **[学生2人で日本語音声LLMを作り、FT-LLM 2026 自由形タスクで1位を獲得した話](https://zenn.dev/ayutaso/articles/ftllm2026-ja-speech-llm)** - LLM-jp-4 8B をベースに、音声で指示できる日本語音声 LLM を開発したコンペ参加記録。国産 LLM ベースのオープンな音声指示モデルとしては初という。

## Qiita
- **[CloudFront + AWS WAF のパストラバーサル対策 ― パス条件のルールは `../` ですり抜けられるのか検証した](https://qiita.com/k-matsu516/items/d94caff03976fb8a30f0)** - WAF のパス条件ルールだけで `../` を使った攻撃を防げるのかを検証する記事（冒頭抜粋より）。CloudFront + WAF 構成の防御設計の確認に役立つ。
- **[Object.hasOwnとinとundefined比較は何が違う？継承・未定義値・getterをNode.jsで実測](https://qiita.com/ennagara128/items/a62d80d619f98c3e7394)** - `obj.key !== undefined` では値が undefined の項目と存在しない項目を区別できず、`in` はプロトタイプ継承分も拾う、といった差を Node.js で実測して整理。
- **[生成AIに渡す仕様書はどう書くべきか ― AIが「読みやすい」形式と「読みにくい」形式](https://qiita.com/kodai_kitahara/items/d9b8c30d50e7bc8be317)** - エージェントの出力品質は入力コンテキストの質に左右されるとして、Excel 方眼紙や PowerPoint など従来の仕様書形式が AI にとって読みやすいかを検討する（冒頭抜粋より）。
- **[LLMを組み込むETLパイプラインの設計：品質をどう証明し、欠陥をどう特定するか](https://qiita.com/AoraNow_Xun_Zheng/items/60d12958bddaabd5f1de)** - 社内文書を分割→LLM で記事生成→ナレッジベース取り込み→検索、という流れを動かした後の課題として、品質の証明と欠陥の特定をどう設計するかを扱う。
- **[Oracle Database@AWS の Exadata Dedicated Infrastructure への接続方式を整理してみる。](https://qiita.com/ora_gonsuke777/items/25bef1613f1ca7df58be)** - ODB Peering、Transit Gateway、VPC Lattice など ExaDB-D@AWS への接続方式を整理した記事。

## AWS 新着
- **[AWS Key Management Service now supports ML-KEM for post-quantum key encapsulation](https://aws.amazon.com/about-aws/whats-new/2026/10/kms-ml-kem-post-quantum/)** (2026-10-26) - NIST FIPS 203 のポスト量子鍵カプセル化方式 ML-KEM が KMS で利用可能に。量子計算機時代を見据えた鍵交換設計の選択肢が増える。
- **[Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services](https://aws.amazon.com/about-aws/whats-new/2026/10/announcing-amazon-ecs-gateway/)** (2026-10-20) - ECS サービスの ingress を、Application Load Balancer などを動的にプロビジョニング・管理する新リソースで簡素化。
- **[AWS EC2 Auto Scaling now supports Launch Before Terminate at account-level to replace instances](https://aws.amazon.com/about-aws/whats-new/2026/10/ec2-auto-scaling-launch-before-terminate/)** (2026-10-26) - 置換用インスタンスを先に起動してから古いものを終了する挙動を、アカウント内の全 ASG のデフォルトにできる。入れ替え時の容量低下を避けられる。
- **[OpenAI GPT-6.1 Terra is now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/openai-gpt-6-1-terra-on-amazon-bedrock/)** (2026-10-26) - GPT-6 ファミリーの、能力・速度・コストのバランス型モデルが Bedrock で GA。
- **[Amazon DynamoDB global tables now support disassociating replicas](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate/)** (2026-10-20) - テーブルやデータを削除せずに、グローバルテーブルからレプリカを切り離せる。レプリケーション停止後も各リージョンのテーブルを残せる。

## Lobsters
- **[Websites Should Be Printable](https://brennenputh.me/blog/printable-websites/)** (63pt) - Web サイトは印刷しても読めるべきだという主張。CSS の印刷スタイルを整備する意義を論じる。
- **[Why is it so expensive to send an email?](https://evancz.dev/why-is-it-so-expensive-to-send-an-email)** (43pt) - メール送信サービスの料金が高い理由を掘り下げる記事。コメント 27 件と議論が活発。
- **[Stalwart v1.0: The Fastest Mail Server on the Planet](https://stalw.art/blog/stalwart-1-0/)** (24pt) - OSS メールサーバ Stalwart の v1.0 リリース告知。
- **[A faster way to compute signed 64-bit floor division by constants](https://www.benjoffe.com/fast-floordiv)** (19pt) - 定数による符号付き 64 ビット floor division を高速に計算する手法。C++ / パフォーマンスタグ。

## dev.to
- **[JetBrains open-sourced an agentic IDE where agents never touch your checkout](https://dev.to/slabb/jetbrains-open-sourced-an-agentic-ide-where-agents-never-touch-your-checkout-22hc)** - JetBrains が Apache-2.0 で公開した Thinkrail は、各エージェントが専用の git worktree で作業し、プロジェクトの正が SPEC.md のグラフとしてエージェント自身に維持される agentic IDE。
- **[Your secrets don't need a git commit to leak into an AI tool](https://dev.to/cyclopt_dimitrisk/your-secrets-dont-need-a-git-commit-to-leak-into-an-ai-tool-be2)** - pre-commit フックやシークレットスキャンが守るのは commit 経路だけで、AI ツールに渡るコンテキスト経由でも秘密情報は漏れうる、という指摘。
- **[DuckLess: serverless DuckDB on Google Cloud, in your own project](https://dev.to/gde/duckless-serverless-duckdb-on-google-cloud-in-your-own-project-4o5a)** - GCS 上のファイルと BigQuery テーブル（読み書き）を使い、自分のプロジェクト内でサーバーレス DuckDB を動かす構成と実測。
- **[Postmortem: The Tuesday Our AI Bill Had No Owner](https://dev.to/gde/postmortem-the-tuesday-our-ai-bill-had-no-owner-34pd)** - AI 利用料金の責任主体が不明だったことで起きた問題を、非難なしのポストモーテム形式で振り返る。FinOps の観点で参考になる。
- **[Moving a Django App from Mailgun to Amazon SES](https://dev.to/highcenburg/moving-a-django-app-from-mailgun-to-amazon-ses-4beh)** - Django + DRF + Celery 構成のジョブボードで、メール送信を Mailgun から Amazon SES に移行した記録。

## TechCrunch
- **[PHP-ocalypse: How two critical web bugs almost broke the internet](https://techcrunch.com/2026/10/24/php-ocalypse-how-two-critical-web-bugs-almost-broke-the-internet/)** - 多くのサイトが使う PHP の 2 件の重大バグが、インターネット全体を揺るがしかねなかった経緯を解説。同じ件を Ars Technica（緊急パッチ予告）やはてブ（賞金付きハッキングチャレンジが19時間で突破）も別角度で報じている。
- **[Block's new voice model sounds eerily human](https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/)** - Block の音声モデル Dessa の紹介。一般的な音声モデルは LLM と組み合わせて知識検索を行うが、Dessa は会話データそのものから知識を持つ点が特徴とされる。
- **[Will AI expose the rickety infrastructure of the internet?](https://techcrunch.com/2026/10/24/will-ai-expose-the-rickety-infrastructure-of-the-internet/)** - AI による脆弱性発見・攻撃の加速が、「接着剤と夢で保たれている」インターネット基盤の脆さを露呈させるかを論じる。

## Ars Technica
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信での MCP の信頼ギャップにより、悪意あるプロンプトがエージェントから別のエージェントへ伝播しうる構造的な欠陥を、Google 等のエージェントの脆弱性から指摘。
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - ターゲット広告経由で 0-click エクスプロイトが配信され、傭兵型スパイウェアが導入された事例。広告経由での配信が確認されたのはこれが初とみられる。
- **[Hackers obtain counterfeit TLS certificates for Google and other large services](https://arstechnica.com/security/2026/10/hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services/)** - 3 つのドメインレジストリの侵害により、攻撃者が Google など大手サービスの不正な証明書を取得した件。
- **[Fridge hack costing millions and sparking fires stemmed from poor security](https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/)** - 700 店のスーパーに影響したインシデントは、インターネットに露出した古い機器が悪用されたもの。
- **[Bug turns one of the biggest fears about Ray-Ban Meta smart glasses into reality](https://arstechnica.com/gadgets/2026/10/ray-ban-meta-smart-glasses-found-recording-audio-without-wearers-consent/)** - Ray-Ban Meta スマートグラスが装着者の同意なく音声を録音するバグ。修正済みだがプライバシー上の懸念は残る。

## 注目トピック
今日の最大の話題は、eMudhra 中間 CA の秘密鍵問題の余波と、Google 等を狙った不正証明書の取得である。OS やブラウザが対策済みでも、独自の証明書バンドルを持つ Python 環境やコンテナは自分で更新しない限り偽証明書を信じ続けるため、実行環境ごとの棚卸しが必要だ。PHP の重大バグ 2 件も複数ソースで取り上げられ、アップデート未適用サイトを狙う動きが続いている。

もう一つの流れは AI エージェントの安全性と運用である。MCP のエージェント間通信の信頼ギャップ、AI ツール経由のシークレット漏えい、AI 利用料金の責任主体の不在など、設計・運用面の穴が各所で指摘された。AWS 側でも ML-KEM のポスト量子対応や Auto Scaling の Launch Before Terminate など、基盤の堅牢化に向けた更新が続いている。
