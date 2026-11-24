---
title: "Tech Feed ダイジェスト（2026年11月25日 朝）"
date: "2026-11-24T20:04"
category: "summary"
summary: "AIエージェントが関わる攻撃・サプライチェーン漏えい、S3/Lambda/CloudFormationの上限引き上げ、Lean形式検証やPG19の話題など"
tags: ["ai", "security", "aws", "devops", "postgres", "formal-verification"]
---

## はてなブックマーク (テクノロジー)
- **[Lean で始める契約プログラミング - エムスリーテックブログ](https://www.m3tech.blog/entry/contract-programming-in-lean)** ([131users](https://b.hatena.ne.jp/entry/s/www.m3tech.blog/entry/contract-programming-in-lean)) - 定理証明系 Lean を使い、事前条件・事後条件で関数の振る舞いを縛る契約プログラミングを実践する記事。形式検証への関心が高まる流れの一端。
- **[Ruby で学ぶ Windows システムプログラミング](https://www.hsbt.org/slide/20261121-SendaiRubyKaigi03/)** ([60users](https://b.hatena.ne.jp/entry/s/www.hsbt.org/slide/20261121-SendaiRubyKaigi03/)) - 仙台Ruby会議のスライド。Ruby から Windows のシステム API を扱う内容で、スクリプト言語で OS 低レイヤに触れる入口になる。
- **[ISUCON2026 問題解説と講評 : ISUCON公式Blog](https://isucon.net/archives/isucon2026-problem-review.html)** ([33users](https://b.hatena.ne.jp/entry/s/isucon.net/archives/isucon2026-problem-review.html)) - 公式による出題意図と講評。ボトルネックの見つけ方や改善の定石を、出題側の視点で確認できる。
- **[パッチ適用前にLinuxシステムを一時保護する「Shirudo」 OpenAIとCiscoが開発](https://www.watch.impress.co.jp/docs/news/2158698.html)** ([27users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/news/2158698.html)) - 脆弱性が公開されてからパッチを当てるまでの空白期間に、Linux を暫定的に保護するツールの紹介。相次ぐ OSS 脆弱性への現実的な対処として注目される。
- **[TiDB から PostgreSQL へ、本番 DB を書き込みを止めて切り替えた記録](https://zenn.dev/hirahara/articles/tidb-to-postgresql-cutover)** ([7users](https://b.hatena.ne.jp/entry/s/zenn.dev/hirahara/articles/tidb-to-postgresql-cutover)) - 本番 DB を書き込み停止を伴う形で移行した実録。手順と判断の記録が参考になる。

## Zenn
- **[S3 Vectors は RAG のベクトルストアに使えるか（40問で検証＋ハイブリッド検索に関する追記）](https://zenn.dev/shino_i/articles/faeef70f08124c)** - 40問で S3 Vectors の RAG 適性を検証し、2026-11-16 に対応したハイブリッド検索も追試した記録。Bedrock Knowledge Bases のベクトルストア選定に使える。
- **[iOSエンジニアのための OAuth 2.0 + PKCE 入門 ― 仕組みを理解してから、Swiftで実装する](https://zenn.dev/mobile_app_tec/articles/ios-oauth2-pkce-native-app)** - SwiftUI アプリで外部ライブラリなしに PKCE ログインを実装した経験から、認証と認可の違いや client_secret を埋め込めない理由を整理する。
- **[【TLA+】AIにテストケースを書かせるな。ルールを書け](https://zenn.dev/karamage/articles/73027ee36796dc)** - 実装・レビュー・テストをすべて同じ AI が担う状況を問題視し、守るべきルール（仕様）を人間が書く方向を提案する。
- **[Alpamayo は Jetson でリアルタイム推論できるか？ R1 から 2 Edge まで、H100 プロファイルからの実行時間推定](https://zenn.dev/fixstars/articles/alpamayo-h100)** - 自動運転向け VLA モデル Alpamayo を H100 でプロファイルし、Jetson AGX Thor / Orin での実行時間を推定する。エッジ推論の可否判断の材料になる。
- **[Gemini 4 Neon を API で叩いて Claude Code・Codex CLI と比べた：65万トークンの超長文、費用、失敗](https://zenn.dev/canly/articles/40e773759da8f8)** - 同じ8課題で Gemini 4 Neon、Claude Opus 5.5、GPT-6.2 Sol を比較。リクエスト内容、採点方法、費用、失敗箇所まで再現できる粒度で書かれている。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[Claude Code を安全に「自走」させるなら、もう Docker Sandboxes 一択でよくない？と思った話。](https://qiita.com/yamac_tech/items/2f1d598288990c381f2d)** - 確認プロンプトを減らして自走させる際の安全策として、Docker Sandboxes による隔離を推す。
- **[【AWS】Lambda Web FunctionsのPythonランタイムが使えるようになったのでDjango製Webアプリで試してみた！](https://qiita.com/kuracchi_enj/items/bc6fb6161b211951217d)** - 11/22 に Lambda Web Functions で使えるようになった Python ランタイムで、Django アプリを動かした検証。
- **[Windows アプリにコード署名する：証明書の取得から SSL.com eSigner での署名まで](https://qiita.com/sugumura/items/5027cc1f6e1fc008607d)** - 個人開発のデスクトップアプリに、証明書の選定から eSigner での署名まで通した手順。
- **[伝説の「VZ Editor」を Rust + egui で現代の Linux (x86_64 / ARM64) 向けに蘇らせた話](https://qiita.com/Tamane/items/f67fb1745ad81480f75f)** - MS-DOS 時代のエディタ VZ Editor を、Rust と egui で現代の Linux 向けに再実装した事例。
- **[New Relic の公式スキルを活用し、自然言語からダッシュボードを作成する](https://qiita.com/seamoooooo/items/79f7ba11e0787ac2427b)** - Coding Agent に NRQL やカスタム属性の仕様を踏まえさせ、公式スキル経由でダッシュボードを作る方法。

## AWS 新着
- **[Amazon S3 increases the read request rate for general purpose buckets by up to 2x](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-increases-read-request-rate/)** (2026-11-20) - パーティション済みプレフィックスあたりの GET/HEAD が 5,500 から 11,000 req/s 以上に。読み取り負荷の高いワークロードで、プレフィックス分散の設計を緩められる。
- **[AWS Lambda now supports a batch size of up to 10,000 messages for Amazon SQS FIFO queues](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-10K-batch-size-SQSFIFO/)** (2026-11-20) - provisioned mode の SQS FIFO イベントソースマッピングで、バッチサイズ上限が 10 から 10,000 に。FIFO キューのスループット設計が大きく変わる。
- **[AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails](https://aws.amazon.com/about-aws/whats-new/2026/11/waf-ai-endpoint-discovery-protection/)** (2026-11-23) - ALB や CloudFront の背後にある LLM / MCP / A2A エンドポイントを自動検出し、Bedrock Guardrails で保護する機能が GA。同日に WAF の料金体系も簡素化されている。
- **[Amazon Route 53 now supports Availability Zone (AZ) affinity routing](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-affinity-routing/)** (2026-11-20) - VPC 内の DNS クエリを、クライアントと同じ AZ のリソースへ解決する。AZ 間通信のコストとレイテンシを抑えられる。
- **[AWS CloudFormation increases the default stacks per account quota to 300,000](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-stacks-per-account-quota/)** (2026-11-20) - アカウント・リージョンあたりのスタック数の既定上限が 2,000 から 300,000 に。テナントごとにスタックを作る設計でも、引き上げ申請が不要になる。

## Lobsters
- **[2035 came early](https://fzakaria.com/2026/11/23/2035-came-early)** (75pt) - タグは nix / wasm。Nix と Wasm の組み合わせが、予想より早く実用域に入ったという趣旨の記事。
- **[Security incident on Hex.pm](https://hex.pm/blog/security-incident-on-hexpm)** (29pt) - Elixir / Erlang / Gleam が使うパッケージレジストリ Hex.pm の公式インシデント報告。依存パッケージを使う側は影響範囲を確認したい。
- **[Sneakernet](https://sneakernet.eu/)** (41pt) - 物理媒体の持ち運びでデータを運ぶ分散・ネットワークの話題。コメント25件と議論も活発。
- **[Held together by spare time: Reviving wiki.alpinelinux.org during PHP2Shell](https://lambdacreate.com/posts/held-together-by-spare-time)** (20pt) - PHP の重大脆弱性 PHP2Shell の最中に、Alpine Linux の wiki を復旧した運用記録。
- **[iTerm2 Arbitrary Command Execution via Kitty Image Protocol APC Response Injection](https://ii4gsp.github.io/iterm2-rce/)** (4pt) - iTerm2 の Kitty 画像プロトコルにおける APC 応答の注入から、任意コマンド実行に至る脆弱性の解説。

## dev.to
- **[Turning on Postgres logical replication without a restart](https://dev.to/alexgeorgiev17/turning-on-postgres-logical-replication-without-a-restart-4b35)** - PostgreSQL 19 では wal_level が replica のままでも論理レプリケーションスロットを作れる。計測では再起動によるダウンタイムがゼロで、従来の 0.33〜0.36 秒の停止が不要になり、WAL 量の増加もなかったという。
- **[Why Your Android App Drops Frames: The Jetpack Compose Architecture Guide That Fixes Recomposition Forever](https://dev.to/smtahosin/why-your-android-app-drops-frames-the-jetpack-compose-architecture-guide-that-fixes-recomposition-3oh3)** - Compose Compiler の SlotTable、不安定な型が起こす再コンポーズの連鎖、Flow によるバッテリー消費、プロセス死への対処を解説する。
- **[I tested Context7 on 6 libraries that changed in 2026](https://dev.to/thegdsks/i-tested-context7-on-6-libraries-that-changed-in-2026-52g4)** - 2026年に変更があった6ライブラリで Context7 を検証。コーディングエージェントが書いた Vitest のテストが、見た目は正しいのに10回中10回失敗した例を挙げる。
- **[Why millions of agents don't need millions of VMs on Agent Substrate](https://dev.to/googlecloud/why-millions-of-agents-dont-need-millions-of-vms-on-agent-substrate-2ech)** - 状態を持つエージェントハーネスを1秒未満で実行・休止・再開させる Agent Substrate 1.0 の設計。VM 1台から数百万アクターまでスケールさせる考え方。
- **[JavaScript `Error.isError()` Is Coming to V8](https://dev.to/jsmanifest/javascript-erroriserror-is-coming-to-v8-what-the-tc39-proposal-means-for-cross-realm-error-4am7)** - iframe、Worker、Node.js の vm モジュールをまたぐ際に `instanceof` が静かに失敗する問題を、TC39 提案の `Error.isError()` で解決する。

## TechCrunch
- **[Anthropic launches Claude Ship, letting AI agents review, fix, and approve code changes](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/)** - AI 生成コードが増えてレビューが詰まる問題に対し、エージェントがレビュー・修正・承認まで担う開発者向けツール。日本の CNET もはてブ経由で同件を報じている。
- **[UK warns AI-driven cyberattacks are exposing years of weak security](https://techcrunch.com/2026/11/24/uk-warns-ai-driven-cyberattacks-are-exposing-years-of-weak-security/)** - 英国のサイバー機関は、AI ハッキングツールが単純な設定不備や脆弱性を突いていると警告し、基礎的な対策の重要性を強調した。
※ 他の新着は人事・M&A・消費者向けアプリの話題が中心で、技術記事は2件のみだった。

## Ars Technica
※ 72時間以内に基準を満たす記事が3件未満だったため、7日以内まで範囲を広げた。
- **[Amazon says hackers' AI agents found and exploited 0-day with little human input](https://arstechnica.com/security/2026/11/amazon-says-hackers-ai-agents-found-and-exploited-0-day-with-little-human-input/)** - Amazon によると、Cairn AI フレームワークを使った攻撃で、AI エージェントがほぼ人手なしでゼロデイを発見して悪用した。同じフレームワークは防御側にも役立つという。
- **[Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced.](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/)** - 追跡可能な秘密を含むプロンプト約200万件を AI サプライチェーンに送り込む実験で、データが非公開のままでは済まないことが示された。
- **[Hundreds of websites deliver potent malware cocktail to unsuspecting visitors](https://arstechnica.com/security/2026/11/malicious-code-delivered-through-optimizely-hits-visitors-to-hundreds-of-sites/)** - Optimizely 経由で配信された悪意あるコードにより、数百のサイトが暗号資産窃取ペイロードや iOS エクスプロイトを訪問者に配った。サードパーティ配信スクリプトの危険を示す事例。
- **[One terminal command gave my forgotten Android device a desk job](https://arstechnica.com/gadgets/2026/11/one-terminal-command-gave-my-forgotten-android-device-a-desk-job/)** - 無料の OSS ダッシュボード PhoneBox で、使わなくなった Android 端末を常時表示のダッシュボードに転用する。

## 注目トピック
今回は「AI エージェントを攻撃側・開発側の双方で使う」流れが目立った。Amazon が報告したゼロデイの自動発見・悪用、英国機関の「基礎的な対策こそ重要」という警告、AI サプライチェーンでのデータ漏えい実験は、いずれも防御の前提が変わりつつあることを示す。一方、開発側では Anthropic の Claude Ship が承認まで自動化し、Qiita・Zenn でも Docker Sandboxes による隔離や TLA+ による仕様起点のテストなど、エージェントに任せつつ人が責任を持つ範囲を決め直す議論が続いている。

インフラ面では、S3 の読み取り性能 2 倍、SQS FIFO の Lambda バッチ 10,000 件、CloudFormation の 300,000 スタックといった上限引き上げが相次いだ。設計上の制約がデフォルトで緩むため、既存構成の見直し候補になる。Lean による形式検証（はてブの契約プログラミング記事）や PostgreSQL 19 の再起動なしの論理レプリケーション設定など、「正しさを機械的に担保する」「無停止で運用する」方向の話題も並んだ。
