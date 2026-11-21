---
title: "Tech Feed ダイジェスト（2026年11月21日）"
date: "2026-11-21T02:05"
category: "summary"
summary: "PHPの20年来のhttpS脆弱性、KARTE調査結果、S3読み取り2倍・CloudFormation上限30万など、8ソースの技術トピックを厳選"
tags: ["security", "aws", "ai", "php", "typescript", "devops", "rust"]
---

## はてなブックマーク (テクノロジー)
- **[「httpS://」だと暗号化されず平文で送信……「PHP」に約20年潜んでいた脆弱性が解決](https://forest.watch.impress.co.jp/docs/serial/yajiuma/2158241.html)** ([218users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/serial/yajiuma/2158241.html)) - スキーム名の大文字小文字の扱いが原因で、`httpS://` と書くと暗号化されず平文送信になる問題が約20年ぶりに修正された。問題は単純だが、大文字小文字の正規化漏れが長期間見逃される典型例として参考になる。
- **[「KARTE」への不正アクセスに関する当社調査結果と、サービス再開の見通し等のお知らせ](https://plaid.co.jp/news/20261120/)** ([57users](https://b.hatena.ne.jp/entry/s/plaid.co.jp/news/20261120/)) - プレイドがKARTEへの不正アクセスの調査結果とサービス再開の見通しを公表。SaaS事業者が顧客データを預かる際のインシデント対応と情報開示の実例として読める。
- **[メモリ圧縮を使えばCPUの処理能力を少し犠牲にするだけでメモリ使用量を大幅に削減できる](https://gigazine.net/news/20261120-memory-compress/)** ([33users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261120-memory-compress/)) - CPU負荷を少し払ってメモリ消費を大きく減らすメモリ圧縮の効果を紹介。メモリ価格や容量が制約になる環境での設計判断に関わる。
- **[Codex App の Computer Use はどういう仕組みで動いているのか - Qiita](https://qiita.com/TaigoKuriyama/items/850a26760fc3c8d111ad)** ([23users](https://b.hatena.ne.jp/entry/s/qiita.com/TaigoKuriyama/items/850a26760fc3c8d111ad)) - Codex AppのComputer Use機能の内部の仕組みを調べた記事。GUI操作型エージェントの動作原理を理解する手がかりになる。

## Zenn
- **[tsrs を導入したら oxlint の type-aware linting と typecheck が爆速になった話](https://zenn.dev/dress_code/articles/6c179ae5129131)** - oxlintのtype-aware lintingでtsrsを使えるようになったのを受け、CIで4分以上かかっていたバックエンドのtypecheckを高速化した事例。
- **[RTKの走行データ収集でAndroidの記録アプリを外から監視する](https://zenn.dev/nauh_blog/articles/b60cd6973c8a3f)** - 車両での走行データ収集中にAndroidの記録アプリ(DrGPS)が止まっても気づけない問題に対し、監視用Androidアプリを作って外から状態を確認する話。走行のやり直しを防ぐ運用上の工夫。
- **[MetaのMuseを使ってみた: 内部構造とセキュリティの調査](https://zenn.dev/shoyataguchi/articles/b1bc6a96d4b963)** - 2週間使った感想と公式発表をもとに、Museの内部構造と安全面の設計を整理。同じ件はTechCrunchも会話の混線・個人データ露出の報告として別角度で報じている。
- **[AIが爆速で開発する時代の、自動テストとの向き合い方](https://zenn.dev/daiaoki/articles/webterm-ai-era-testing)** - 授業で使われる学習サービスを個人開発する立場から、AIで開発速度が上がる中でバグを出さないための自動テスト戦略を述べる。

## Qiita
- **[Docker SandboxesでAIエージェントを隔離する](https://qiita.com/aratakaji/items/795a248f6398b03eb9cf)** - Docker公式セミナーの内容をもとに、AIエージェント用サンドボックスの仕組みと導入手順を初心者向けに整理(冒頭抜粋より)。
- **[Playwrightでtime.sleepを使ったら、ログインの完了に気づけなかった話(Hevyの記録を自動で取り込む)](https://qiita.com/annkonabe/items/c2f328456568cfd38b59)** - 同期版Playwrightで `time.sleep()` を使うと `page.url` が古いままになる落とし穴と、`launch_persistent_context` でパスワードを保存せず自動ログインする方法。
- **[[AWS] 徹底比較! OpenSearch Memory vs AgentCore Memory](https://qiita.com/kikuziro/items/939887bcd8fbb3a78ba0)** - 11月18日にGAとなったAmazon OpenSearch Memoryを、Bedrock AgentCore Memoryと比較する検証記事。エージェント向けメモリ基盤の選定材料になる。
- **[JSON.parseのreviverで項目が消える理由:return忘れと配列の穴をNode.jsで実測](https://qiita.com/ennagara128/items/65bb10ddfcd03293bc23)** - reviverが `undefined` を返すとそのプロパティが削除される仕様を、Node.jsで実測して確認する。

## AWS 新着
- **[Amazon S3 increases the read request rate for general purpose buckets by up to 2x](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-increases-read-request-rate/)** (2026-11-20) - 汎用バケットのGET/HEADが毎秒5,500から11,000以上に倍増。読み取り中心のワークロードでプレフィックス分散の設計を見直せる。
- **[AWS CloudFormation increases the default stacks per account quota to 300,000](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-stacks-per-account-quota/)** (2026-11-20) - アカウント・リージョンあたりのスタック数の既定上限が2,000から300,000へ。スタックを細かく分割する設計でも引き上げ申請が不要になる。
- **[AWS Lambda now supports a batch size of up to 10,000 messages for Amazon SQS FIFO queues](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-10K-batch-size-SQSFIFO/)** (2026-11-20) - provisioned modeのSQS FIFOイベントソースマッピングで、バッチサイズ上限が10件から10,000件に拡大。
- **[AWS Lambda adds support for Node.js 26](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-nodejs-26/)** (2026-11-20) - Lambda Web FunctionsとEvent Functionsの両方で、マネージドランタイム・ベースイメージとしてNode.js 26が使える。
- **[Amazon EventBridge Custom event bus now supports Webhook Events](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-webhook-events)** (2026-11-20) - 拡張版Custom event busにHTTPSでイベントを直接送れる。SaaSやAIエージェントからの連携で中継用の実装が不要になる。

## Lobsters
- **[Levent Alpoge Claims Proof of Riemann Hypothesis](https://alpo.ge/remark.pdf)** (71pt) - リーマン予想の証明を主張するPDFが公開された。日本のCNETもAnthropicの数学者による発表とLean検証の通過を報じ、TechCrunchは人間側にも競合する証明があると伝えており、数学界の精査待ちの状況。
- **[Ruby2Shell (GHSA-34m4-m9fh-gqp5)](https://verialabs.com/ruby2shell/)** (29pt) - Rubyに関する脆弱性の解説で、PHP2Shellなどに続く「〜2Shell」系の一件。
- **[Announcing jj-musubi: live sync for Jujutsu](https://www.serpentine.com/posts/2026/announcing-jj-musubi/)** (37pt) - Jujutsu(jj)向けのライブ同期ツールjj-musubiの公開告知。コメントも24件と関心が高い。
- **[Persistent incrementality in Rust](https://rust-glancer.github.io/blog/persistent-incrementality-in-rust/)** (8pt) - Rustで増分計算を永続化する手法を扱う記事。rust-glancerのブログ投稿。

## dev.to
- **[Your IR Runbook Is a PDF Nobody Reads at 3 AM. I Turned Mine Into a State Machine.](https://dev.to/le_beltagy/your-ir-runbook-is-a-pdf-nobody-reads-at-3-am-i-turned-mine-into-a-state-machine-32o8)** - AWSのインシデント対応runbookをStep Functions、Lambda、Terraform、クロスアカウントKMSで状態機械化した事例。4つの失敗から得た、障害時に耐える自動化の条件をまとめている。
- **[Where Agents Fail: Part 1](https://dev.to/googleai/where-agents-fail-part-1-54hg)** - 実際のコーディングセッションを分析し、エージェントが繰り返す失敗パターンと、それが修正可能かを検証するシリーズの第1回。
- **[Tool Names Are Identifiers. Don't Autocorrect Them.](https://dev.to/gde/tool-names-are-identifiers-dont-autocorrect-them-33g9)** - エージェントの契約が `retrieve_policy` を要求するとき、評価側がツール名を自動補正するとトレースの検証が壊れる、という問題を扱う。ツール名を曖昧一致させず識別子として厳密に扱うべきという主張。
- **[llama.cpp on a Cloud TPU: An Unofficial ggml Backend Through XLA](https://dev.to/gde/llamacpp-on-a-cloud-tpu-an-unofficial-ggml-backend-through-xla-5j8)** - llama.cppの計算グラフをStableHLOに変換しXLAでコンパイルして、Cloud TPU上でGemma 4 E2Bを動かす非公式バックエンド。
- **[When AGENTS.md, CLAUDE.md, and a Skill Disagree, Which One Wins?](https://dev.to/debashish_ghosal/when-agentsmd-claudemd-and-a-skill-disagree-which-one-wins-cp2)** - AGENTS.md、CLAUDE.md、Skillの指示が衝突したときの優先関係を整理する議論。

## TechCrunch
- **[More banks say customers using AI agents are on their own — even if they get hacked](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/)** - Citiが個人金融向けAIエージェントの利用に制限をかけ、エージェント経由で被害に遭っても利用者責任とする銀行が増えている。エージェント連携の責任分界が課題になっている。
- **[Super-hot rock geothermal could end data center energy woes](https://techcrunch.com/2026/11/20/super-hot-rock-geothermal-could-end-data-center-energy-woes/)** - 超高温の岩盤を使う次世代地熱スタートアップが、データセンターの電力問題を解決しうるかを分析。
- **[Elon Musk says SpaceX has a plan to eliminate cell phone dead zones](https://techcrunch.com/2026/11/19/elon-musk-says-spacex-has-a-plan-to-eliminate-cell-phone-dead-zones/)** - SpaceXが、携帯電話の圏外を解消するための小型の屋上基地局の設計を完了したとマスク氏が述べた。

## Ars Technica
- **[Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced.](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/)** - 追跡可能な秘密情報を含むプロンプトを約200万件仕込む実験で、AIサプライチェーン上でデータが非公開に保たれないことが示された。
- **[Three small failures combined to take down Microsoft 365](https://arstechnica.com/gadgets/2026/11/microsoft-details-how-three-problems-combined-for-a-global-outage/)** - 隠れたバグ、トラフィックの偏り、容量低下の3つが重なって連鎖障害になったというMicrosoftのポストモーテム。
- **[Hundreds of websites deliver potent malware cocktail to unsuspecting visitors](https://arstechnica.com/security/2026/11/malicious-code-delivered-through-optimizely-hits-visitors-to-hundreds-of-sites/)** - Optimizely経由で配信された悪意あるコードにより、数百のサイトの訪問者に暗号資産窃取ペイロードやiOSエクスプロイトなどが配られた。サードパーティスクリプトの供給網リスクを示す。

## 注目トピック
今日目立ったのはセキュリティとAIエージェントの安全性だ。PHPの20年来の `httpS://` 平文送信、Ruby2Shell、KARTEの不正アクセス調査結果が並んだ。Arsのカナリア実験はAIサプライチェーンの情報漏えいを、TechCrunchの銀行記事はエージェント経由の被害の責任分界を扱っている。Zenn・Qiita・dev.toでも、エージェントの隔離（Docker Sandboxes）、指示の優先関係、ツール名の厳密扱いが話題になっており、実運用の安全設計に関心が移っている。

AWSは機能の上限や性能の引き上げが多かった。S3の読み取りレート2倍、CloudFormationのスタック数上限30万、SQS FIFOのLambdaバッチ1万件など、設計時の制約が緩む変更が続いた。Microsoft 365のポストモーテムは、小さな不具合の連鎖が大規模障害になる様子を示しており、こうした上限緩和や自動化を使う際の障害設計の参考になる。
