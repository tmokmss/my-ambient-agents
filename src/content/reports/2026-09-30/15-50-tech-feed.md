---
title: "Tech Feed ダイジェスト（2026年10月1日）"
date: "2026-09-30T15:50"
category: "summary"
summary: "GitHub Actions のロックファイル、Google Mantis、Cloudflare の量子耐性TLS証明書、Bedrock Managed Agents など"
tags: ["github-actions", "security", "aws", "ai", "rust", "cloudflare", "llm"]
---

## はてなブックマーク (テクノロジー)
- **[GitHub Actionsにロックファイルが来るぞ - Qiita](https://qiita.com/access3151fq/items/70a93f08bffd9c5f09a5)** ([72users](https://b.hatena.ne.jp/entry/s/qiita.com/access3151fq/items/70a93f08bffd9c5f09a5)) - Actions の依存（サードパーティ Action）をロックファイルで固定する仕組みの解説。タグの付け替えによるサプライチェーン攻撃への対策として注目される。
- **[トークン消費85％減　Googleが脆弱性を自動修正するオープンソースハーネス「Mantis」公開](https://atmarkit.itmedia.co.jp/ait/articles/2609/30/news056.html)** ([11users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2609/30/news056.html)) - LLM エージェントで脆弱性を自動修正する OSS のハーネス。記事タイトルによればトークン消費を 85% 削減したという。
- **[設計次第でAIコードの読む量は減らせる / designing-for-code-reading](https://speakerdeck.com/minodriven/designing-for-code-reading)** ([64users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/minodriven/designing-for-code-reading)) - AI が生成するコードのレビュー負荷を、設計側で読む範囲を絞ることで下げる考え方の発表資料。
- **[芝浦工業大学・尾崎教授の計算アルゴリズムをNVIDIAが新たに採用](https://www.shibaura-it.ac.jp/headline/detail/20260930_7070_51_1.html)** ([17users](https://b.hatena.ne.jp/entry/s/www.shibaura-it.ac.jp/headline/detail/20260930_7070_51_1.html)) - AI 向け GPU から科学シミュレーション用の高精度計算を引き出すアルゴリズムが NVIDIA に採用された。要素技術として開発者にも関係が深い。
- **[オレのClaude Code作業環境、控えめにいって最高すぎる〜Stream Deckでherdrを操作、完了はずんだもんが読み上げ〜](https://tech-lab.sios.jp/archives/54936)** ([548users](https://b.hatena.ne.jp/entry/s/tech-lab.sios.jp/archives/54936)) - Stream Deck から複数の Claude Code セッションを操作し、完了通知を音声で読み上げる作業環境の紹介。

## Zenn
- **[新規プロダクトのバックエンド自動テスト戦略 ─UT 中心から API テスト中心へ─](https://zenn.dev/canary_techblog/articles/348d976da70857)** - ユニットテスト中心だった構成に、runn による API 単位のテストを導入した経緯。仕様どおりに動くことを API 単位で保証する狙い。
- **[ゲーミングPC向けで LLMとデプロイ環境を最適化してみた話](https://zenn.dev/knowledgework/articles/2691721311c2e4)** - 翻訳特化 LLM を軽量化する際、モデルファイルを小さくしても VRAM は思ったほど減らないという気づきから、メモリ配分を詰めていった記録。
- **[OpenAI DevDay 2026 発表まとめ](https://zenn.dev/schroneko/articles/openai-devday-2026)** - 24 時間常時稼働のエージェント dots など、DevDay の発表を一覧にしたまとめ。TechCrunch も OpenAI の新機能をアプリストア型モデルへの挑戦として別角度で報じている。
- **[AI 駆動開発で「設計」はどこに書くのか ― 振る舞いをテストで検証できる「仕様」にしてみる](https://zenn.dev/softbank/articles/6f98cf7c4ebfd3)** - コードを書くことがボトルネックでなくなった前提で、設計を「テストで検証できる仕様」として残す方法を検討している。

## Qiita
※ 冒頭抜粋の範囲での紹介。
- **[BedrockのClaudeに暗黙的なプロンプトキャッシュが登場！！とドキュメントにある（暗黙的とは？）](https://qiita.com/moritalous/items/1b6a05842724fc1fff66)** - Claude Sonnet 5.5 の Bedrock 対応に合わせ、ドキュメントに載った「暗黙的プロンプトキャッシュ」の意味を調べた記事。
- **[RevenueCat導入しても自社DB権限管理を守り切りたいときの設計](https://qiita.com/manrikitada/items/3e7ccd0334cd8e7ba886)** - 決済前に購入インテントを記録し、Webhook を待たず同期パスで権限を付与するなど、自社 DB の権限管理を守る設計上の工夫。
- **[ハニーポット観測：長年悪用されている脆弱性のご紹介](https://qiita.com/melymmt/items/a0cc12d76a75c38d913c)** - 公開から 8 年以上経った脆弱性が、ルーター等を狙って今も悪用されている様子をハニーポット観測から紹介。
- **[同一人物がApple/Googleどちらでログインしても同じアカウントにする ― Firebase純正のlink(with:)を使わなかった理由](https://qiita.com/jqit-yukiono/items/0a68cd4ab997e8c8213b)** - 複数のソーシャルログインを 1 アカウントに統合する際、Firebase 標準の link(with:) を採用しなかった理由を説明。
- **[geoparquet-io を使ったGeoParquet入門](https://qiita.com/KEI_YAMA/items/ed85af780a61829e19e8)** - Parquet に地理空間ベクタデータを保存する標準仕様 GeoParquet と、操作ツール geoparquet-io の入門。

## AWS 新着
- **[Amazon Bedrock Managed Agents, powered by OpenAI, is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/)** (2026-09-29) - AWS と OpenAI が共同開発したマネージドエージェント。OpenAI の Agents API を AWS ネイティブに改造し、AWS リソースと統合してある。
- **[OpenAI GPT-6.1 Sol is now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-1-sol-on-amazon-bedrock/)** (2026-09-29) - GPT-6 Sol の後継モデルが Bedrock で GA。エージェント的なコーディングやコンピュータ操作に強いとされる。
- **[Amazon SageMaker HyperPod Inference Gateway for scalable LLM inference](https://aws.amazon.com/about-aws/whats-new/2026/09/sagemaker-hyperpod-inference-gateway/)** (2026-09-24) - Kubernetes ネイティブで GPU を考慮したルーティングを行うゲートウェイ。EKS マネージドアドオン 1 つで既存の HyperPod に導入でき、アプリ側の変更は不要。
- **[AWS Elastic Beanstalk introduces Cluster Mode to run multiple applications on shared infrastructure](https://aws.amazon.com/about-aws/whats-new/2026/09/elastic-beanstalk-cluster-mode/)** (2026-09-17) - 複数アプリを共有インフラ上で動かす新デプロイモード。
- **[AWS Batch now supports bulk job cancellation and termination](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-batch-bulk-cancellation/)** (2026-09-17) - CancelJobs / TerminateJobs / TerminateServiceJobs API で、1 回の呼び出しに最大 50 ジョブを取り消し・終了できる。

## Lobsters
- **[How to speed up the Rust compiler in September 2026](https://nnethercote.github.io/2026/09/30/how-to-speed-up-the-rust-compiler-in-september-2026.html)** (48pt) - Rust コンパイラの高速化に関する月次の進捗報告。
- **[Two Kinds of SQL Query Builders](https://mechanicalrabbit.github.io/FunSQL.jl/stable/two-kinds-of-sql-query-builders/#Two-Kinds-of-SQL-Query-Builders)** (27pt) - SQL クエリビルダーを 2 種類に分類する FunSQL.jl のドキュメント。設計思想の違いを論じ、16 コメントの議論を呼んだ。
- **[AI Didn't Make Programming Easier. It Just Made It Differently Difficult](https://cacm.acm.org/opinion/ai-didnt-make-programming-easier-it-just-made-it-differently-difficult/)** (28pt) - AI はプログラミングを易しくしたのではなく、難しさの質を変えただけだという CACM のオピニオン。
- **[The Cuckoo's Egg](https://en.wikipedia.org/wiki/The_Cuckoo%27s_Egg_(book))** (21pt) - 初期のネットワーク侵入を追跡した古典的セキュリティ書籍の Wikipedia ページ。15 コメントが付いた。
- **[What TLA+ can and can't check](https://buttondown.com/hillelwayne/archive/what-tla-can-and-cant-check/)** (7pt) - 形式手法 TLA+ で検証できること・できないことを整理した Hillel Wayne の記事。

## dev.to
- **[1 in 5 Packages Your AI Suggests Don't Exist. Attackers Know Which Ones.](https://dev.to/james_anderson_h/slopsquatting-your-ai-invented-a-package-and-an-attacker-was-waiting-1g67)** - AI が提案する存在しないパッケージ名を攻撃者が先回りして登録する「slopsquatting」の解説。
- **[Deploying LiteLLM: An Open-Source AI Gateway](https://dev.to/vultr/deploying-litellm-an-open-source-ai-gateway-2idp)** - OpenAI 互換の統一 API を提供する OSS の AI ゲートウェイ LiteLLM を、Docker と Postgres でデプロイする手順。
- **[Gemma 4 on a Tesla T4, Part 3: Int4 Embeddings Serve E2B in 2.86 GiB at 2.30x bf16](https://dev.to/gde/gemma-4-on-a-tesla-t4-part-3-int4-embeddings-serve-e2b-in-286-gib-at-230x-bf16-3kch)** - QAT 版 Gemma 4 E2B は埋め込みテーブルが bf16 のままで T4 上のメモリの大半を占める。これを int4 に詰めて 2.86 GiB で動かした検証。
- **[Rust malware in arrayref: how a build.rs ran a payload at compile time](https://dev.to/axrisi/rust-malware-in-arrayref-how-a-buildrs-ran-a-payload-at-compile-time-e7f)** - build.rs を悪用し、コンパイル時にペイロードを実行した Rust クレートのマルウェア事例。
- **[Your Metric Is Not Your State](https://dev.to/kenwalger/your-metric-is-not-your-state-2lfl)** - 屈折計の例えで、メトリクスはシステムの実際の状態そのものではないという可観測性の視点を論じる。

## TechCrunch
- **[Restate lands $20M as the need for durable infrastructure increases with AI agents](https://techcrunch.com/2026/09/30/restate-lands-20m-as-the-need-for-durable-infrastructure-increases-with-ai-agents/)** - Apache Flink の開発者が創業した Restate が 2,000 万ドルを調達。AI エージェント向けに耐久性のある実行基盤の需要が高まっていると報じる。

※ 他ソースとの重複や過去掲載分を除くと、新規の技術記事は 1 件のみだった。

## Ars Technica
- **[Cloudflare plans to issue quantum-safe TLS certificates](https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/)** - Web サイト向け証明書エコシステムの大幅な見直しの一環として、Cloudflare が量子耐性 TLS 証明書を発行する計画。
- **[Here's what actually happened in OpenAI's Australian gov't server hack](https://arstechnica.com/ai/2026/09/heres-what-actually-happened-in-openais-australian-govt-server-hack/)** - 十分な安全策がない状態でエージェントが政府サーバーにアクセスした件の経緯を整理。
- **[ClickFix attacks infecting PCs and Macs are going viral](https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral/)** - 手順が単純なうえ、ユーザーが作業を済ませるのに苦労している状況が重なり、ClickFix 攻撃が Windows と Mac の両方で広がっている。
- **[IT mistake erases 11 years of viewing history for hospitals' maternity records](https://arstechnica.com/information-technology/2026/09/it-mistake-erases-11-years-of-viewing-history-for-hospitals-maternity-records/)** - 英国の病院で IT 運用上のミスにより、母子記録の閲覧履歴 11 年分が消えた。ログ・監査証跡の保全という運用面の教訓になる。

## 注目トピック
エージェント基盤が今日の中心テーマ。AWS は Bedrock Managed Agents を OpenAI と共同で提供し、TechCrunch では Restate の資金調達が耐久実行基盤の需要を示し、Ars ではエージェントの安全策不足に起因する事案が取り上げられた。一方で Google の Mantis のように、LLM の運用コストを抑えつつ脆弱性修正まで担わせるハーネスの工夫も出てきている。

サプライチェーン対策も目立った。GitHub Actions のロックファイル、AI が捏造するパッケージ名を狙う slopsquatting、build.rs を悪用した Rust マルウェア、Cloudflare の量子耐性 TLS 証明書計画が並ぶ。依存の固定と検証を運用に組み込む流れが強まっている。
