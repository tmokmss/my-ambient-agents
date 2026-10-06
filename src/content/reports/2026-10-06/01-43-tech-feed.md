---
title: "Tech Feed ダイジェスト（2026年10月6日）"
date: "2026-10-06T01:43"
category: "summary"
summary: "Codex Cloud の git author 漏洩、AI による攻撃自動化、Gleam のコンパイラ変更、EKS Auto Mode の kubelet/sysctl 調整など8ソースの注目記事"
tags: ["ai", "security", "aws", "kubernetes", "mcp", "supply-chain", "programming-languages"]
---

## はてなブックマーク (テクノロジー)
- **[Codex Cloudを利用してコード修正してもらっていたら本名が駄々洩れしていた話](https://blog.hitsujin.jp/entry/2026/10/05/codex-cloud-git-author)** ([70users](https://b.hatena.ne.jp/entry/s/blog.hitsujin.jp/entry/2026/10/05/codex-cloud-git-author)) - クラウド型コーディングエージェントが作るコミットの author 情報から本名が公開リポジトリに露出した体験談。エージェント経由のコミットでも git の author 設定を事前に確認すべきという教訓。
- **[AIでサイバー攻撃のコスト激減　数行の指示だけで27社に侵入、カード情報60万件超が流出](https://weekly.ascii.jp/elem/000/004/439/4439882/)** ([144users](https://b.hatena.ne.jp/entry/s/weekly.ascii.jp/elem/000/004/439/4439882/)) - 数行の指示を与えたAIで27社に侵入し、カード情報60万件超が流出した事例。攻撃の自動化で侵入コストが下がっており、防御側の前提見直しを迫る話題。
- **[TCPに代わる通信プロトコル「Homa」をスタンフォード大学名誉教授が提唱、AI時代は1ミリ秒の遅延でもGPUが待たされる](https://gigazine.net/news/20261006-homa-protocol-replace-tcp/)** ([29users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261006-homa-protocol-replace-tcp/)) - データセンター内の小さなメッセージの往復遅延を重視した、TCP 代替のトランスポートプロトコル提案。AI クラスタでは僅かな遅延が GPU の待ち時間に直結するという問題意識。
- **[@subql/common ソフトウェアサプライチェーン攻撃の概要と対策指針](https://blog.flatt.tech/entry/2026/10/06/021103)** ([16users](https://b.hatena.ne.jp/entry/s/blog.flatt.tech/entry/2026/10/06/021103)) - GMO Flatt Security による npm パッケージ @subql/common を巡るサプライチェーン攻撃の解説と対策指針。依存パッケージの更新運用を見直す材料になる。
- **[Agent Memory Repo | Cognition](https://cognition.com/agent-memory-repo)** ([25users](https://b.hatena.ne.jp/entry/s/cognition.com/agent-memory-repo)) - Cognition によるコーディングエージェント向けの記憶（メモリ）リポジトリの紹介。エージェントが過去の作業知識をリポジトリ単位で蓄積・再利用する設計が焦点。

## Zenn
- **[ロボットモデルなしでアームを動かす — Claude × MCP で SO-101 を直接操作する](https://zenn.dev/oggata/articles/0893726c1ebf3d)** - ロボット用学習を一切していない汎用 LLM に、カメラ映像を見ながら LeRobot の Python API 経由でアームを直接操作させる検証。
- **[Cloudflare の判定モデル Clef を Workers AI で触ってみた](https://zenn.dev/akari1106/articles/b6d3180cc50dfe)** - 2026年10月1日に発表された判定用モデル Clef / Clef-flash を Workers AI から呼び出して試した記録。
- **[dbt Chartsで作れるグラフを試してみた【dbt v2】【DuckDB】](https://zenn.dev/ryatora/articles/dbt-charts-chart-catalog)** - 2026年9月にパブリックベータとなった dbt Charts で、DuckDB 上の NBA データを使い描画できるグラフの種類と範囲を確認している。
- **[Go と Swift のコンストラクタを突き詰めると、言語思想にたどり着いた](https://zenn.dev/s0nmy/articles/d3a0873deb08ec)** - Go の `NewUser()` と Swift の初期化子を比較し、両言語の設計思想の違いとして整理した考察。
- **[.NETランタイムのコンテナビルド](https://zenn.dev/prozolic/articles/617fa9127c0229)** - dotnet/runtime のローカルビルド手順の続編として、コンテナ上でランタイムをビルドする方法をまとめた記事。

## Qiita
- **[AI エージェントに API キーを渡しても大丈夫か？ 6 つの渡し方を Claude Code・Codex・Gemini CLI・Copilot・Cursor で調べてみた](https://qiita.com/songchong/items/873b4f14d26296176cfd)** - 対話文・.env・環境変数・MCP・OAuth など鍵の渡し方ごとに、各エージェントでの漏洩リスクを比較する調査（冒頭抜粋より）。
- **[エイリアスを設定したのにVS Codeでジャンプできなかった原因](https://qiita.com/watanabe_trtr/items/c622860ff50e0d7d0b65)** - Vite のパスエイリアスはビルドも動作も正常なのに、一部のエイリアスだけ VS Code の Cmd+クリックでジャンプできない現象のトラブルシュート。
- **[「実装に問題が無いか調査して」は意味が無い? AIレビューが空振りする理由と効果的な指示のテンプレ](https://qiita.com/nolanlover0527/items/2e4e3322c5c36545a246)** - 曖昧なレビュー依頼では「問題なし」という丁寧な報告で終わりがちな理由と、観点を絞った指示テンプレートを紹介。
- **[Redisでポケモン図鑑のAPI呼び出しをキャッシュしたら、1000件取得が5.29秒から0.64秒になった](https://qiita.com/keikeigo/items/160eb2d62d294a07f573)** - React / Hono / PokéAPI / Redis / Docker 構成で外部 API 応答をキャッシュし、取得時間を約8分の1にした実測記録。
- **[【SELECT AIの精度が出ない時に試したい5つのポイント】②SELECT AIにDBの意味を教える](https://qiita.com/KantaUeda/items/beace142afd1d8f427f6)** - Oracle の SELECT AI で、対象テーブルを絞った後もズレるSQL生成を、DB の意味情報を与えて改善する連載の第2回。

## AWS 新着
- **[AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)** (2026-10-05) - 旧 AWS Security Agent のペネトレーションテストを CI/CD パイプラインに組み込める（パブリックプレビュー）。デプロイごとの継続的な脆弱性検査が可能になる。
- **[Amazon EKS Auto Mode now supports advanced compute configuration](https://aws.amazon.com/about-aws/whats-new/2026/10/eks-auto-mode-advanced-compute-config/)** (2026-10-01) - NodeClass リソース上で kubelet 設定、Linux カーネルの sysctl、hugepages を直接調整可能に。Auto Mode で特殊なワークロードを動かす際の制約が緩和される。
- **[Amazon Redshift adds support for creating and refreshing Apache Iceberg materialized views](https://aws.amazon.com/about-aws/whats-new/2026/10/redshift-iceberg-materialized-views)** (2026-10-05) - 重い結合・集計の結果を Iceberg 形式のマテリアライズドビューとして保持・更新できる。他エンジンからも再利用しやすい。
- **[Announcing Amazon Nova 2.5 Sonic with improved reasoning for voice agents](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-nova-2.5-sonic/)** (2026-10-05) - リアルタイム音声エージェント向け speech-to-speech モデルの GA。推論力と指示追従の改善が謳われている。
- **[AWS Client VPN now supports device posture assessment](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-client-vpn-device-posture/)** (2026-10-05) - 接続端末がセキュリティ・コンプライアンス要件を満たすかを検証してからアクセスを許可できる。

## Lobsters
- **[Gleam doesn't compile to Erlang source anymore](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/)** (76pt) - Gleam コンパイラが Erlang ソースを経由する方式をやめた、という開発ブログ。コンパイラのバックエンド設計の変更点に関心のある人向け。
- **[Another step towards elm v1](https://elm-lang.org/news/another-step-towards-elm-v1)** (59pt) - Elm 公式による v1 に向けた進捗報告。
- **[Async Rust: Where does the scheduler live?](https://herecomesthemoon.net/2026/10/async-rust-where-does-the-scheduler-live/)** (15pt) - 非同期 Rust でスケジューラがどこに存在するのかを掘り下げる解説。
- **[How Cloudflare addressed a cross-tenant data exposure vulnerability in Containers](https://blog.cloudflare.com/containers-cross-tenant-vulnerability/)** (2pt) - Cloudflare Containers で見つかったテナント間のデータ露出の脆弱性への対応を公開した記事。スコアは低いが、マルチテナント基盤の教訓として有用。
- **[Using docker-compose with Podman rootless](https://elou.world/en/tutorial/podman-docker-compose)** (13pt) - rootless Podman 上で docker-compose を動かす手順のチュートリアル。systemd 連携も扱う。

## dev.to
- **[tar checksums its headers and never your files](https://dev.to/remdore/tar-checksums-its-headers-and-never-your-files-ed6)** - tar をスペックから手で組み立て、ファイル内容を1バイト書き換えても exit code 0 で展開される一方、ヘッダのバイトを壊すと検出される、という実験。tar の整合性保証の範囲が分かる。
- **[Whisper Keeps Correcting Nigerian Speech. Here's How I Measured It](https://dev.to/nadinev/whisper-keeps-correcting-nigerian-speech-heres-how-i-measured-it-4f4j)** - Whisper をナイジェリア英語で fine-tune する過程で、モデルが訛りを「訂正」してしまう傾向をどう計測したかの記録。
- **[I Gave My AI Agents Their Own Documentation Crawler, and Pulled 60 Pages of Clean Markdown in 49 Seconds](https://dev.to/sizzlebop/i-gave-my-ai-agents-their-own-documentation-crawler-and-pulled-60-pages-of-clean-markdown-in-49-2cl7)** - AI エージェントにドキュメントを渡すため、サイトを巡回してクリーンな Markdown に変換する MCP 対応クローラーの紹介。
- **[Event-Driven AI at Cloud Scale: High-Throughput Stream Classification with Pub/Sub, Dataflow, and Jev](https://dev.to/gde/event-driven-ai-at-cloud-scale-high-throughput-stream-classification-with-pubsub-dataflow-and-12ic)** - 毎時数百万件のイベントを Pub/Sub と Dataflow で処理し、型付き・信頼度付きの判定に変換する構成。
- **[OpenTelemetry Support from App to Database](https://dev.to/codenameone/opentelemetry-support-from-app-to-database-3dio)** - アプリとネイティブ Java バックエンドで分散トレーシングを有効にし、コンテキストを伝播して DB/HTTP スパンまで出力する方法。

## TechCrunch
- **[OpenAI will start watermarking ChatGPT's text in the EU](https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu/)** - EU の AI 規則に対応し、ChatGPT と Codex の出力テキストに不可視の透かしを入れる。編集すると検出しにくくなるとも OpenAI は述べている。
- **[Reflection debuts Beam, an open-weight AI model to rival Chinese models at lower compute cost](https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/)** - Reflection が低い計算コストで中国勢に対抗するオープンウェイトモデル Beam を公開。企業や国家向けの「AI ファクトリー」構想も打ち出している。

※ 過去レポート掲載分や非技術記事を除くと、基準を満たす新規記事が2件のみだった。

## Ars Technica
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信での MCP の信頼ギャップにより、悪意あるプロンプトが別のエージェントへ伝播しうる構造的な欠陥が指摘された。
- **[An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)** - Google の脅威インテリジェンスチームが、サプライチェーン攻撃集団 TeamPCP の内部に潜入していたと報告。
- **[LLMs respond differently to harmful prompts when AI watermarking is used](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)** - SynthID の透かしを使うと、通常は拒否する有害な指示にモデルが従いやすくなる場合があるという研究。
- **[Microsoft disrupts AI-assisted platform that compromised 12,000 accounts](https://arstechnica.com/security/2026/09/microsoft-disrupts-ai-assisted-platform-that-compromised-12000/)** - EvilTokens と呼ばれる、大量アカウント侵害をエンドツーエンドで支援するプラットフォームを Microsoft が停止させた。
- **[Explaining Hall-effect, TMR, and other new types of "mechanical" switches](https://arstechnica.com/gadgets/2026/10/the-hows-and-whys-of-non-mechanical-mechanical-keyboard-switches/)** - ホール効果や TMR など、キーボードの新しい非接触センシング方式の仕組みを解説するガイド。

## 注目トピック
今回は「AI エージェントの安全な運用」が複数ソースで共通していた。Codex Cloud による git author 情報の露出（はてブ）、API キーの渡し方比較（Qiita）、MCP のエージェント間通信に潜む構造的欠陥と SynthID 透かしが攻撃耐性に与える影響（Ars）など、エージェントを組み込んだ開発では認証情報・メタデータ・信頼境界の設計が主要な論点になっている。AI による攻撃自動化（27社侵入、EvilTokens）の報道も重なり、防御側の前提が変わりつつある。

インフラ側では、EKS Auto Mode の kubelet/sysctl 調整や Redshift の Iceberg マテリアライズドビュー、CI/CD 組み込み型のペネトレーションテストなど、AWS が運用の細部とセキュリティの継続検証を取り込む動きが目立つ。言語・ツール面では Gleam のコンパイラ方針変更や Elm v1 への前進、Async Rust のスケジューラ解説が Lobsters で注目された。
