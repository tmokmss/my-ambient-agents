---
title: "Tech Feed ダイジェスト（2026年11月21日）"
date: "2026-11-20T17:42"
category: "summary"
summary: "POS 端末マルウェア、AWS の PQ VPN・Lambda durable OTel、Grok Build 情報漏えい、IaC 移行・OCR 比較など 8 ソースの技術トピック"
tags: ["security", "aws", "ai", "devops", "oss", "rust", "iac"]
---

## はてなブックマーク (テクノロジー)
- **[「あと10年もたないかもしれない」Rubyの父 まつもとゆきひろが危惧するOSS文化の消滅](https://type.jp/et/feature/32219/)** ([432users](https://b.hatena.ne.jp/entry/s/type.jp/et/feature/32219/)) - まつもとゆきひろ氏が OSS 文化の先行きに抱く危機感を語るインタビュー。AI 時代のメンテナ負荷や OSS の持続性という開発者共通の論点に触れている。
- **[はてなエンジニアの自作RSSリーダーをご紹介します 2026](https://developer.hatenastaff.com/entry/2026/11/20/162322)** ([169users](https://b.hatena.ne.jp/entry/s/developer.hatenastaff.com/entry/2026/11/20/162322)) - はてなのエンジニアが各自で作った RSS リーダーを紹介する Developer Blog の恒例企画。設計や技術選定の違いを見比べられる。
- **[POS端末700台超がマルウェア感染、Windowsの脆弱性悪用でカード情報100万件超が流出](https://news.mynavi.jp/techplus/article/20261120-5367457/)** ([56users](https://b.hatena.ne.jp/entry/s/news.mynavi.jp/techplus/article/20261120-5367457/)) - Windows の脆弱性を悪用して POS 端末 700 台超にマルウェアが拡散し、カード情報 100 万件超が流出した事案。業務端末のパッチ適用遅れのリスクを示す。
- **[AIが追加学習なしで自らのウェイトを書き換えて「自分自身を賢くする」ことに成功](https://gigazine.net/news/20261120-large-language-model-can-rewrite-itself/)** ([19users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261120-large-language-model-can-rewrite-itself/)) - LLM が追加学習の工程を経ずに自分のウェイトを書き換えて性能を高めたとする研究の紹介。自己改善型モデルの可能性を示す。

## Zenn
- **[CDKからTerraformへ：所有権移譲による本番インフラ無停止のIaC移行](https://zenn.dev/levtech/articles/14befd8e727f32)** - CDK 管理のリソースを Terraform に寄せる際、「所有権を移譲する」手法で 12 サービス＋共通基盤の計 13 スタックを止めずに移行した事例。ノウハウと得られた知見をまとめている。
- **[日本のレシートを自宅PCでOCRする：15構成を実レシート11枚で比べた](https://zenn.dev/chaki/articles/4545be3475fdb4)** - 軽量モデルで全体を読み、自信のない行だけ高精度モデルで読み直す「2段読み」の YomiToku が商品名一致 93%・金額 100%・約 1.8 秒/枚で最良。ただし非商用ライセンスで、VLM は長いレシートで同じ文字を繰り返す失敗が目立った。
- **[dbt v1 でメトリクスを一元管理する未来 〜Apache Ossie と Lightdash で試す〜](https://zenn.dev/kyami/articles/dbt-snowflake-apache-ossie)** - 1 つの dbt YAML（MetricFlow）から Snowflake の Semantic View と Lightdash のメトリクスの両方を生成し、SQL・AI・BI で同じ数字が出ることを確認。ゼロ除算対策や結合の引き継ぎなど変換の差も整理している。
- **[CLAUDE.md や SKILL.md のルールを Turtle で書き、ルールの書き間違いや矛盾を lint で検査してみた話](https://zenn.dev/hma2moto/articles/turtle-agent-rules-pros-cons)** - エージェント向けルールを Turtle 構文で記述し、語どうしの関係まで形式化して矛盾を lint で検出する試み。メリットとデメリットの両面を検討している。

## Qiita
- **[pypdfでPDFのプルダウンに値を入れたのにAcrobatだけ空欄になる：原因は/Iだった](https://qiita.com/sionic_issa/items/adf42ca26f22e238793e)** - pypdf で自動記入した PDF のコンボボックスが Chrome/Edge では表示されるのに Acrobat だけ空欄になる現象を調査した記事（冒頭抜粋より）。タイトルによれば原因は `/I` エントリ。
- **[Linuxのバックポートという仕組みでnginxを最新版にしなくても安全にできるらしい](https://qiita.com/ikuosaito1989/items/01edecc9eb66abeba5d7)** - 脆弱性対応は必ずしも最新版へのアップデートが必要ではなく、ディストリビューションのバックポートで修正パッチが当たる、という整理（冒頭抜粋より）。nginx の脆弱性公表を受けた運用の実例。
- **[判定モデル を AI エージェントワークフローへ組み込む](https://qiita.com/kataoka_se_sionic/items/e7c6b83c6291daedbb62)** - 会話の継続・終了・有人引き継ぎといった対応方針の判定を、回答生成と分離した構成で扱う設計を解説（冒頭抜粋より）。1 つの LLM に任せる構成との比較が主題。
- **[AI に作らせた Skill を「期待値」で評価する](https://qiita.com/rioriver/items/17308685b10b3a413427)** - KDDI テクノロジーのチームが、AI で作ったハーネスや Skill を社内の開発チームへ展開するにあたり、期待値ベースで評価する方法を紹介（冒頭抜粋より）。

## AWS 新着
- **[AWS Site-to-Site VPN now supports post-quantum key exchanges](https://aws.amazon.com/about-aws/whats-new/2026/11/site-to-site-vpn-post-quantum/)** (2026-11-19) - Site-to-Site VPN が NIST ガイダンスに沿ったポスト量子鍵交換に対応。PQC 移行を VPN トンネルから進められる。
- **[AWS Lambda durable functions now supports OpenTelemetry tracing](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-otel/)** (2026-11-19) - durable functions の実行を OTel でトレースし、CloudWatch などへ送れるようになった。長時間ワークフローのデバッグ性が上がる。
- **[Amazon Aurora DSQL now delivers up to 50% higher write throughput](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-dsql-higher-write-throughput/)** (2026-11-19) - ストレージ層の改善で多くのトランザクション処理の書き込みスループットが最大 50% 向上。データロードの短縮や、主キーが単調増加するテーブルにも効くとされる。
- **[Amazon EMR Serverless introduces Flex execution](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-emr-serverless/)** (2026-11-17) - 急ぎでない Spark バッチを余剰コンピュートで実行し、最大 60% コストを下げるオプション。
- **[AgentCore runtime instances now support Nested Virtualization](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-nested-virtualization/)** (2026-11-19) - Bedrock AgentCore のランタイムで KVM によるネスト仮想化に対応し、エージェントがセッション内で VM やエミュレータを動かせる。

## Lobsters
- **[Removing binder.c](https://lwn.net/Articles/1102982/)** (37pt) - Android の IPC の中核である Linux カーネルの C 実装 binder.c の削除を扱う LWN 記事。Rust 実装への移行という文脈のタグが付いている。
- **[Jujutsu Primer](https://ethanlowman.com/posts/jj-primer/)** (29pt) - Git 互換の VCS「Jujutsu（jj）」の入門解説。関連して同日に jj のライブ同期ツール jj-musubi の告知も上がっている。
- **[Vim Classic 8.3.1 released](https://vim-classic.org/news/vim-8.3.1-released.html)** (41pt) - Vim の旧来の挙動を維持するフォーク「Vim Classic」のリリース告知。
- **[Visited links are purple](https://dbushell.com/2026/11/16/visited-links/)** (18pt) - 訪問済みリンクを紫にする Web の既定の挙動を a11y の観点から見直す記事。

## dev.to
- **[Your Error Survived the Wrapper. Did Its Code Survive the Trace?](https://dev.to/gde/your-error-survived-the-wrapper-did-its-code-survive-the-trace-17gg)** - `ETIMEDOUT` のようなエラーコードがラッパーを通した後もトレース上に残るかを検証する観点を提示する TypeScript の記事。観測性・テストの落とし穴を扱う。
- **[Which Gemini Model Should You Use? Neon, Argon, Hydrogen, Carbon, Flash or Gemma. It Depends.](https://dev.to/gde/which-gemini-model-should-you-use-neon-argon-hydrogen-carbon-flash-or-gemma-it-depends-ano)** - Gemini 4 の各モデルを GSM8K・BFCL・AIME 2025 で比較し、正解 1 件あたりのコストや速度を整理。全モデルが難問 30 問を最低設定で解けたため、価格と速度が選定軸になるという結論。
- **[Marking a container unhealthy didn't stop it from taking traffic](https://dev.to/alexgeorgiev17/marking-a-container-unhealthy-didnt-stop-it-from-taking-traffic-54lf)** - Docker が unhealthy と判定しても nginx が約 3 分の 1 のトラフィックを送り続けた現象を検証。原因は `proxy_next_upstream` に `http_500` がなかったこと。
- **[Engineering the Always-On Economy: How Real-Time Payment Infrastructure Works](https://dev.to/aonica_/engineering-the-always-on-economy-how-real-time-payment-infrastructure-works-17fo)** - リアルタイム決済基盤のアーキテクチャを概観するシステム設計記事。
- **[5 agent orchestration patterns backed by research](https://dev.to/googlecloud/5-agent-orchestration-patterns-backed-by-research-2l43)** - 感覚頼みになりがちなエージェントのオーケストレーションを、研究に裏付けられた 5 つのパターンとして整理。

## TechCrunch
- **[A transcription firm used by police, prosecutors, and tech giants exposed customer data online](https://techcrunch.com/2026/11/20/a-transcription-firm-used-by-police-prosecutors-and-tech-giants-exposed-customer-data-online/)** - 警察の取り調べ録音や bodycam 映像の文字起こしが、パスワードなしのクラウドサーバーで公開状態になっていた独自報道。単純な設定ミスが大規模な露出につながる典型例。
- **[Palmer Luckey warns AI-powered cyberattacks are outpacing defenses: 'It's time to start running'](https://techcrunch.com/2026/11/18/palmer-luckey-warns-ai-powered-cyberattacks-are-outpacing-defenses-its-time-to-start-running/)** - Anduril 共同創業者が、古い技術が AI を使った新しい攻撃に対して脆弱性になっていると警告した発言の報道。

※ 他ソースとの重複や過去レポートとの重複を除いた新規の技術記事が少なく、2 件のみ。

## Ars Technica
- **[Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI](https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/)** - 研究者が、誰でも見つけられる状態で公開されていた Grok Build 製アプリ 3 万 5 千件を発見し、機密情報の流出を指摘。コーディングエージェントが生成したアプリの公開設定が論点。
- **[VMware releases vSphere Express for virtualization on up to 128 cores](https://arstechnica.com/information-technology/2026/11/vmware-releases-vsphere-express-for-virtualization-on-up-to-128-cores/)** - 低価格帯の顧客の声を受け、最大 128 コアの仮想化向けに vSphere Express を投入。
- **[Trump admin still won't let Wi-Fi giant TP-Link sell its latest routers in US](https://arstechnica.com/tech-policy/2026/11/trump-admin-still-wont-let-wi-fi-giant-tp-link-sell-its-latest-routers-in-us/)** - 米政権が TP-Link の最新ルーターの販売を認めない状況を、政府がデバイスメーカーに及ぼす統制の例として報じる。
- **[US will soon announce root cause behind FAA nationwide ground stop](https://arstechnica.com/gadgets/2026/11/how-faa-can-modernize-us-national-airspace-system-without-emergency-ground-stops/)** - FAA の元関係者が、数十年前のネットワークを更新する際のリスクを抑えて近代化する方法を論じる。

## 注目トピック
今日目立つのは、AI エージェント周辺の「公開状態・権限の管理」です。Ars の Grok Build 製アプリ大量露出、TechCrunch の文字起こし企業のパスワードなしサーバー、AWS の AgentCore ネスト仮想化など、エージェントに実行環境や権限を与える動きが進むほど、設定ミスや露出の影響も大きくなります。Qiita の判定モデル分離や Skill の期待値評価、Zenn の Turtle による lint のように、エージェントの振る舞いを検証・形式化する試みも並んでいます。

インフラ運用では、無停止の IaC 移行（CDK→Terraform）、nginx の `proxy_next_upstream` の落とし穴、ポスト量子 VPN など、既存基盤を壊さず安全側へ寄せる話題が多く、POS 端末のマルウェア感染は、パッチ適用の遅れが実害に直結する点を改めて示しています。
