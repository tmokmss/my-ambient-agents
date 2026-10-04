---
title: "Tech Feed ダイジェスト（2026年10月5日）"
date: "2026-10-04T23:55"
category: "summary"
summary: "Supabaseの Turso 買収、JSON 実装差異、Google の OSS バグ報奨金凍結、Bedrock の GPT-6.1 Sol GA など"
tags: ["database", "ai", "security", "aws", "rust", "json", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[JSONはシンプルで明快な仕様が魅力ですが、微妙な実装差異が生じる罠がいくつかあります（Zenn）](https://zenn.dev/qnighy/articles/json-ambiguity)** ([91users](https://b.hatena.ne.jp/entry/s/zenn.dev/qnighy/articles/json-ambiguity)) - JSON 仕様の曖昧な箇所が、各実装でどう異なる結果になるかを比較して解説する記事。パーサ間の挙動差はセキュリティや相互運用の不具合の温床になるため、境界ケースを把握しておく価値がある。
- **[Supabase、1サーバあたり数百万ものSQLiteをホストする「Turso」買収を発表](https://www.publickey1.jp/blog/26/supabase1sqlitetursoaidb.html)** ([37users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/supabase1sqlitetursoaidb.html)) - Postgres 系 BaaS の Supabase が、SQLite を大量にホストできる Turso を買収。AI エージェントでエージェントごと・タスクごとにDBを持つ用途が増え、軽量 DB の需要が高まっているという文脈で報じられている。
- **[GitHub - sh1ma/Angelic-Angel](https://github.com/sh1ma/Angelic-Angel)** ([37users](https://b.hatena.ne.jp/entry/s/github.com/sh1ma/Angelic-Angel)) - ブラウザの Web Push をエミュレートしてツイートをストリーミングするサーバ。Web Push プロトコルをブラウザ外から扱う実装例として読める。
- **[MyGo — Desktop apps in Go](https://mygo.egoist.dev/)** ([13users](https://b.hatena.ne.jp/entry/s/mygo.egoist.dev/)) - Go で、Web フロントエンドまたはネイティブ UI のデスクトップアプリを作るためのフレームワーク。
- **[世界中のソフトウェア開発者の実態を調べた「State of Devs 2026」公開](https://www.publickey1.jp/blog/26/state_of_devs_2026_ai.html)** ([54users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/state_of_devs_2026_ai.html)) - 開発者の年齢・年収・モニタ枚数・AI にコードを書かせる割合などを集計した調査。AI 利用の実態を数字で見られる。

## Zenn
- **[Rustで作った自作OS「octox」がサンフランシスコ大学の教材になっていました](https://zenn.dev/o8vm/articles/3934806424cd85)** - Rust 製 Unix 系 OS の octox が大学の OS 講義で教材に採用され、専用ガイドやカーネル拡張の課題が公開されているという報告。OS 学習用の実装として使われている。
- **[別会社の開発チームに AWS 環境を共有するのって大変だ](https://zenn.dev/dress_code/articles/f89590d105ba5f)** - デプロイは GitHub Actions に任せて権限は渡さない運用でも、動作検証で DB やバッチ、S3 の中身を見たくなる場面が出てくる。その際の権限共有の悩みを整理した記事。
- **[AI-Slopな日本語を構造レベルで読みやすくするSkill『yomiyasu』](https://zenn.dev/algoartis/articles/0b1c731881b25c)** - AI 生成文の読みにくさを構造レベルで改善する Claude 向け Skill の紹介。`npx skills update` で更新できる配布形態も参考になる。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[API キーはどこから漏れるのか？ 自分のサイトに来た .env 探し 1,566 件と、公開事例を 7 つの経路に分けてみた](https://qiita.com/songchong/items/02672765fe53f911a1a0)** - 自サイトに届いた .env 探索アクセスの記録と公開事例から、漏洩経路を 7 つに分類。盗まれるというより、鍵の置き場所が思ったより広く見えていたケースが多いという指摘。
- **[結局、Looped Transformerってなんや？](https://qiita.com/sakai1250/items/8d90b7320bcd1c8aba9e)** - 同じ Transformer 層を繰り返し通す Looped Transformer について、単純な繰り返しでは終わらない点を論文ベースで整理。
- **[LLMのJSON Schemaを厳しくしても業務検証を消せない理由](https://qiita.com/TechStudioLab/items/0bbf128791023cc90893)** - Structured Outputs で消せるのは JSON 破損・必須キー欠落・enum 外の値といった形式上の失敗が中心で、業務ルールの検証はアプリ側に残るという整理。
- **[JAWS-UG 新潟支部「AgentCoreで実践するハーネスエンジニアリング」登壇レポート](https://qiita.com/yakumo_09/items/106cc9768d5b1c78225e)** - ツールの渡し方・記憶・権限・ログなど「モデルの周り」を設計するハーネスエンジニアリングを、AgentCore を題材に紹介。

## AWS 新着
- **[OpenAI GPT-6.1 Sol is now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-1-sol-on-amazon-bedrock/)** (2026-09-29) - GPT-6 Sol の後継が Bedrock で GA。エージェント的なコーディングやコンピュータ操作に強いとされ、Bedrock 上のモデル選択肢が広がる。
- **[Amazon CloudWatch Logs Insights now lets you estimate bytes scanned before running a query](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-estimate-bytes-scanned/)** (2026-09-29) - クエリ実行前に、対象ロググループと期間でスキャンされるデータ量を見積もれる。スキャン量課金のクエリで、想定外のコストを避けやすくなる。
- **[Amazon S3 Tables now support all Apache Iceberg V3 data types](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-tables-iceberg-v3-data-types)** (2026-09-30) - geometry / geography / unknown / ナノ秒 timestamp 型と列のデフォルト値が使えるようになり、Iceberg V3 仕様への追従が進んだ。
- **[Uncover blind spots in AWS data plane operations with CloudTrail Event Coverage](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cloudtrail-event-coverage/)** (2026-09-30) - アカウント／組織単位で、データプレーン操作のうちどこまでが CloudTrail に記録されているかをコンソールで確認できる。監査上の抜けの発見に役立つ。
- **[AWS CLI now supports bulk skill updates and version checks for the Agent Toolkit for AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cli-agent-toolkit-update-skill/)** (2026-09-30) - Agent Toolkit for AWS の skill を CLI から一括更新・バージョン確認できるようになった。エージェント用 skill の保守が楽になる。

## Lobsters
Lobsters はスコアの低い記事が中心で、高スコア記事の多くは過去レポートで掲載済みだった。
- **[Hacking the Go compiler to efficiently map IPv4 to IPv6](https://vincent.bernat.ch/en/blog/2026-go-netip-addrto6)** (10pt) - Go の `netip.Addr` の IPv4 から IPv6 への変換を効率化するため、Go コンパイラ自体に手を入れた事例。
- **[Self-hosted HTTP tunnels with SSH and nginx](https://vincent.bernat.ch/en/blog/2026-http-over-ssh)** (9pt) - SSH と nginx だけで、自前の HTTP トンネルを構築する方法。外部サービスに頼らずローカル環境を公開できる。
- **[Iroh global content discovery](https://www.iroh.computer/blog/iroh-global-content-discovery)** (11pt) - P2P ライブラリ Iroh による、グローバルなコンテンツ探索の仕組みを紹介する記事。
- **[Our RISC-V emulator PasRISCV](https://againstallodds.games/blog/2026/10/03/our-risc-v-emulator-pasriscv/)** (15pt) - Pascal で書かれた RISC-V エミュレータの紹介。ゲーム開発側の視点から語られている。

## dev.to
- **[Gemma 4 on Amazon SageMaker: The NVIDIA T4 Decodes at 0.8x of the L4 With the Same Answers](https://dev.to/gde/gemma-4-on-amazon-sagemaker-the-nvidia-t4-decodes-at-08x-of-the-l4-with-the-same-answers-19m4)** - SageMaker の最小 GPU である T4 で Gemma 4 の 4bit 版を動かし、L4 と比較。vLLM への Turing 向けパッチや CUDA 13 コンテナ用のホストイメージ対応など、動かすまでの手順も扱う。
- **[I Shipped a Green Test That Lied About My Pipeline](https://dev.to/debashish_ghosal/i-shipped-a-green-test-that-lied-about-my-pipeline-d1e)** - ユニットテストは全て通っていたのに、パイプラインが実際には期待通りに動いていなかった体験談。テストの緑を過信しない教訓を扱う。
- **[I tested 36 AI models for fake packages and found zero](https://dev.to/aarishmansur/i-tested-36-ai-models-for-fake-packages-and-found-zero-1d0h)** - 36 の AI モデルが実在しないパッケージ名を提案するかを検証したベンチマーク。結果は 0 件だった。
- **[My Health Check Watched the Wrong File](https://dev.to/kenielzep97/my-health-check-watched-the-wrong-file-p7h)** - 「生存確認よりも成果物の更新時刻が重要」という運用ルールを、launchd で動くエージェントのヘルスチェックの失敗例から示す。
- **[Code RS: CDN-Free Syntax-Highlighted Code Components for WASM](https://dev.to/wiseai/code-rs-cdn-free-syntax-highlighted-code-components-for-wasm-njc)** - CDN に依存せず、WASM 向けにシンタックスハイライト付きコードブロックを提供する Rust コンポーネント。

## TechCrunch
※ 他ソースとの重複・過去掲載分を除くと、技術的な新規記事は 1 件のみだった。
- **[Google froze its open source bug bounty program due to a 'significant rise' in AI submissions](https://techcrunch.com/2026/10/04/google-froze-its-open-source-bug-bounty-program-due-to-a-significant-rise-in-ai-submissions/)** - Google が OSS 向け脆弱性報奨金プログラムを、AI 生成とみられる報告の急増を理由に凍結。AI 由来の低品質な報告がバグバウンティ運営を圧迫している。

## Ars Technica
※ 掲載済みの記事や、Apple の Full Disk Access のように過去レポートと同一トピックのものを除くと、新規の候補は 2 件だった。
- **[Owners mourn spoiled food after firmware update bricks Samsung smart fridges](https://arstechnica.com/gadgets/2026/09/owners-mourn-spoiled-food-after-firmware-update-bricks-samsung-smart-fridges/)** - Samsung のスマート冷蔵庫でファームウェア更新後に動作不能となり、食品が傷んだ事例。組み込み機器の OTA 更新における段階展開やロールバックの重要性を考えさせる。
- **[Interview: Firefox's chief on why he hopes a redesign will help win users from Chrome](https://arstechnica.com/gadgets/2026/09/mozillas-head-of-firefox-talks-product-priorities-ai-skepticism-and-browser-choice/)** - Firefox の責任者が、リデザインや AI への懐疑、ブラウザの選択肢について語るインタビュー。

## 注目トピック
AI エージェントが日常の開発に入り込んだ結果、その周辺の課題が目立ってきた。Google の OSS バグ報奨金凍結は、AI 由来の低品質な報告が運営を圧迫している例だ。Qiita ではハーネスエンジニアリングや LLM 出力の検証が、dev.to ではテストの緑を過信しない話や成果物ベースのヘルスチェックが取り上げられていて、モデルの性能よりも周辺設計や検証に関心が移っている。

データ基盤では、Supabase の Turso 買収と AWS の Iceberg V3 対応（S3 Tables）が並ぶ。エージェントごとの軽量 DB と、レイクハウス側の標準化が同時に進んでいる。Bedrock への GPT-6.1 Sol 追加も、マルチモデル前提の設計が一般化していることを示す。
