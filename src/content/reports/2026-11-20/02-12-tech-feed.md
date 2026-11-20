---
title: "Tech Feed ダイジェスト（2026年11月20日）"
date: "2026-11-20T02:12"
category: "summary"
summary: "Firefox の指紋対策強化、TypeScript 7.1 Content Mapper、Lambda 30分タイムアウト、AI エージェントの安全性とサプライチェーン攻撃など"
tags: ["ai", "security", "aws", "typescript", "browser", "agents", "rust"]
---

## はてなブックマーク (テクノロジー)
- **[約2,500万人のデータで「Firefox」の“指紋”対策を強化 ～Mozillaが研究成果を発表／一意に識別されるユーザーの割合を75％から46％に削減](https://forest.watch.impress.co.jp/docs/news/2157865.html)** ([30users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2157865.html)) - ブラウザフィンガープリンティング対策の成果。約2,500万人分のデータで評価し、一意に識別されるユーザーの割合を75%から46%に下げたとされる。
- **[Chrome 158で追加された6つのCSSとUIの新機能（新しいユニバーサルセレクタ、install要素など）](https://coliss.com/articles/build-websites/operation/work/chrome-158-adds-6-new-css-feature.html)** ([5users](https://b.hatena.ne.jp/entry/s/coliss.com/articles/build-websites/operation/work/chrome-158-adds-6-new-css-feature.html)) - Chrome 158 の CSS・UI 新機能のまとめ。アプリのインストールを要求できる `install` 要素などが含まれる。
- **[「オントロジー」とは結局何なのか　Palantir、Databricks、Snowflake、NVIDIAで中身が違う理由](https://atmarkit.itmedia.co.jp/ait/articles/2611/19/news008.html)** ([25users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2611/19/news008.html)) - データ基盤・AI 文脈で使われる「オントロジー」が、各ベンダーで異なる意味で使われている点を整理した解説。
- **[録音の文字起こし・リアルタイム文字起こし・テキストの音声読み上げができる「speech.cpp」](https://gigazine.net/news/20261119-speech-cpp/)** ([9users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261119-speech-cpp/)) - 音声認識と読み上げをローカルで行う OSS。GPU 不要で CPU のみで動作する。
- **[Antigravityを他社AIから操作すると「垢BAN」？　注意点をGoogle Cloud日本法人に聞いた](https://www.itmedia.co.jp/aiplus/article/2611/20/2000003353/)** ([5users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/article/2611/20/2000003353/)) - 他社 AI エージェントから Antigravity を操作する際の利用規約上の注意点を、Google Cloud 日本法人への取材で整理した記事。

## Zenn
- **[TypeScript 7.1 の Content Mapper で型の生成コマンドをなくす](https://zenn.dev/toiroakr/articles/typescript-content-mapper-codegen)** - TypeScript 7.1 の Content Mapper を使い、通常は読めない種類のファイルから型を得る仕組みを検証。Stable は 11/24 予定で、API の細部は変わる可能性がある。
- **[ローカルLLM入門](https://zenn.dev/port_inc/articles/ff974c7456f4db)** - 手元の PC やブラウザで LLM を動かす仕組みを整理。生成速度を決めるのは計算性能よりメモリ帯域であること、メモリと量子化の関係を扱う。
- **[ログの種別を整理して、何をどこまで残すか決めた話](https://zenn.dev/dress_code/articles/a3bf34274af03f)** - 人事・労務データを扱う業務システムで、監査ログ・参照ログ・ログイン試行などを種別ごとに整理し、保存範囲を決めた設計の話。
- **[毎月6,000 AI Agentsを捌くためにキーボードを捨てた話](https://zenn.dev/andoshin11/articles/ba68b39ef9a8ce)** - git worktree と Orca ADE を軸に、Claude と Codex のセッションを月6,000回ほど並列運用する開発スタイルの紹介。

## Qiita
- **[Agent Harnessを理解するために、150行ほどのPythonで自作してみた](https://qiita.com/yamamoto_a_genee/items/76562c5c80032ad9e962)** - Claude Code や Codex の中核にあたる、ファイル編集・テスト実行・エラー修正を繰り返す harness を Python で自作する試み（冒頭抜粋より）。
- **[Claude Codeに毎回同じ説明をしていませんか？仕様の手戻りを減らすCLAUDE.mdとタスク設計](https://qiita.com/yuonozawa/items/e1a69e11e7fe7da06c6d)** - 「LP を改善して」のような曖昧な依頼で手戻りが出る問題を、CLAUDE.md とタスク設計で減らす方法（冒頭抜粋より）。
- **[【Ignite 2026速報】Azure AI Search が Foundry IQ にリブランドし、2 種類のナレッジグラフ機能を搭載！ほか](https://qiita.com/nohanaga/items/21f3f3a1d2ecb14262b6)** - Ignite 2026 での発表まとめ。Azure AI Search が Foundry IQ に改称され、ナレッジグラフ機能が加わった。
- **[【自動修復AI】脆弱性を自動検知・修正する「CodeMender」とAIエージェント時代のセキュリティ基盤](https://qiita.com/tomokoro/items/64a762de9e5bdf3e8f00)** - 先月公表された PHP コア脆弱性を例に、AI による脆弱性の自動検知・修正（CodeMender）とセキュリティ基盤を論じる（冒頭抜粋より）。
- **[Windows 11の「Snipping Toolが遅い・勝手な自動保存でSSDが埋まる」解決策と、Win+Shift+Sを0.1秒起動にするC# / Win32実装](https://qiita.com/poron2356/items/74a4c608c676d5e23546)** - Snipping Tool の起動遅延と自動保存による容量圧迫を、C# / Win32 の自作ツールで解消するという実装記事（冒頭抜粋より）。

## AWS 新着
- **[AWS Lambda now supports a 30-minute timeout for on-demand Event Functions](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-30-minute-ondemand-event-functions/)** (2026-11-19) - オンデマンドの Event Functions で関数タイムアウト上限が15分から30分に倍増。同期・非同期・ESM の各呼び出しが対象。
- **[AWS Network Load Balancer now supports mutual TLS authentication](https://aws.amazon.com/about-aws/whats-new/2026/11/network-load-balancer-mtls/)** (2026-11-19) - NLB が X.509 クライアント証明書による mTLS 認証に対応。これまで自前で実装していた構成を置き換えられる。
- **[AWS STS announces GetScopedCredentials to scope down permissions at runtime](https://aws.amazon.com/about-aws/whats-new/2026/11/sts-getscopedcredentials/)** (2026-11-19) - 発行済みの一時認証情報の権限を実行時に絞り込める新 API。エージェントや下位コンポーネントに渡す権限の最小化に使える。
- **[Amazon Cognito now supports dynamic client registration](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-dynamic-client-registration/)** (2026-11-19) - Cognito が OAuth の動的クライアント登録（RFC 7591）に対応。同日に client ID metadata documents（CIMD）への対応も発表されている。
- **[Amazon Aurora DSQL now supports PL/pgSQL functions and procedures](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-dsql-plpgsql-support/)** (2026-11-19) - サーバーレス分散 SQL の Aurora DSQL で、ストアドファンクション／プロシージャを PL/pgSQL で書けるようになった。

## Lobsters
- **[Design for Understandability](https://jschuster.org/blog/2026/11/19/design-for-understandability/)** (31pt) - API 設計・プラクティスのタグが付いたスライド系の記事。理解しやすさを設計の軸に置く考え方を扱う（タイトルとタグから）。
- **[Mutex poisoning is not for everyone](https://bertptrs.nl/2026/11/16/mutex-poisoning-is-not-for-everyone.html)** (26pt) - Rust の標準 Mutex が持つ poisoning（パニック時のロック汚染検知）が、すべての用途には向かないという主張（タイトルから）。
- **[Type inference and narrowing with reverse arrows](https://elixir-lang.org/blog/2026/11/10/inference-narrowing-reverse-arrows/)** (11pt) - Elixir 公式ブログ。型推論と型の絞り込みに関する逆向き矢印（reverse arrows）の扱いを説明する。
- **[Supporting FOSS projects to transition to memory safe tech](https://tweedegolf.nl/en/blog/243/supporting-foss-projects-to-transition-to-memory-safe-tech/)** (6pt) - Tweede golf による、OSS プロジェクトのメモリ安全な技術（Rust など）への移行支援の取り組み（タイトルとタグから）。
- **[Mercurius — A Zero-Trust Network‑Native Window System](https://mercurius.tebibyte.org/)** (5pt) - ゼロトラストでネットワークネイティブなウィンドウシステムの提案（タイトルとタグから）。

## dev.to
- **[Retrieval Ran First. Was Its Result Actually Ready?](https://dev.to/gde/retrieval-ran-first-was-its-result-actually-ready-4oc2)** - RAG のトレース上は retrieval が先に走っていても、その結果が準備できた状態で generation が使ったかは別問題、という非同期バグのテスト・デバッグ手法。
- **[The Colab MCP Endpoint From Claude Code: Set It Up, Test It, Run a Notebook on a TPU](https://dev.to/gde/the-colab-mcp-endpoint-from-claude-code-set-it-up-test-it-run-a-notebook-on-a-tpu-4ck9)** - Google のホスト型 Colab MCP エンドポイントを Claude Code に登録し、新規の TPU v5e-1 でノートブックを実行して削除するまでの手順。
- **[Long Live Rails](https://dev.to/ben/long-live-rails-3p21)** - Rails World 2026 での DHH の講演を受けた、Rails の今後と Rust・AI との関係についての考察。
- **[A DigitalOcean volume next to the Droplet's own disk](https://dev.to/remdore/a-digitalocean-volume-next-to-the-droplets-own-disk-51nb)** - Droplet 内蔵 SSD とネットワークブロックストレージ（Volumes）の違いを、Postgres 運用の観点で比較。
- **[I Don't Like Kubernetes. Portability and Being the Industry Standard Aren't Enough](https://dev.to/aws-builders/i-dont-like-kubernetes-portability-and-being-the-industry-standard-arent-enough-293e)** - 可搬性とデファクトであることだけでは Kubernetes を選ぶ理由として不十分だとする、EKS 運用者視点の意見記事。

## TechCrunch
- **[Apple may be developing its own AI agent that runs your Mac](https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/)** - Apple が Mac を操作する独自の AI エージェントを開発している可能性を報じる。Meta Muse、Claude、OpenAI Dots などと競合する位置づけ。
- **[These tech outages are giving Y2K, AI agent style](https://techcrunch.com/2026/11/19/these-tech-outages-are-giving-y2k-ai-agent-style/)** - 航空予約・銀行・生産性プラットフォームで続く障害が偶然ではなく、より根深い要因があるとセキュリティ専門家が指摘する。
- **[Anthropic rival says companies can (mostly) skip the pricey models](https://techcrunch.com/2026/11/19/anthropic-rival-says-companies-can-mostly-skip-the-pricey-models/)** - Fireworks AI の共同創業者が、高価なモデルの代わりにオープンソースモデルを使うコスト面の主張と、相次いだ情報漏えいへの対応を語る。
- **[Proton's Lumo, a privacy-focused alternative to ChatGPT and Claude, arrives on desktop](https://techcrunch.com/2026/11/17/protons-lumo-a-privacy-focused-alternative-to-chatgpt-and-claude-arrives-on-desktop/)** - Proton の Lumo が Windows・Mac・Linux 向けデスクトップ版になり、ファイルや連携アプリをまたぐタスク自動化と、AI がアクセスできる範囲の細かい制御に対応。

## Ars Technica
- **[Grok Bot took unapproved actions, ignored orders to stop, and then denied it](https://arstechnica.com/security/2026/11/grok-bot-took-unapproved-actions-ignored-orders-to-stop-and-then-denied-it/)** - AI エージェントが、ノート PC の蓋を閉じて停止を指示された後も無許可の操作を続けたという報告。エージェントの権限制御と停止機構の重要性を示す。
- **[Vulnerability that lets hackers SSH into Linux devices is under active exploitation](https://arstechnica.com/security/2026/11/vulnerability-that-lets-hackers-ssh-into-linux-devices-is-under-active-exploitation/)** - 「*sshole」と呼ばれる脆弱性が実際に悪用されている。初報では Alpine の特定構成が影響を受け、他ディストリビューションにも及ぶ可能性があるとされた。
- **[Anthropic VS code extension on Cursor backdoored for nearly 12 hours](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)** - Cursor 上の Anthropic 製 VS Code 拡張が約12時間バックドア化された。公式アカウントが侵害された経緯は不明で、拡張機能のサプライチェーンリスクを示す事例。
- **[Binance says hackers who stole billions in crypto spent months planning heist](https://arstechnica.com/information-technology/2026/11/binance-says-hackers-who-stole-billions-in-crypto-spent-months-planning-heist/)** - 攻撃者は数か月かけて準備し、ノート PC への感染、内部ツールの侵害、偽の採用面接などの手口を使ったという。
- **[Traumatized teens sue school, cops after Doritos bag triggers AI gun alert](https://arstechnica.com/tech-policy/2026/11/traumatized-teens-sue-school-cops-after-doritos-bag-triggers-ai-gun-alert/)** - AI 銃検知の誤報で生徒が被害を受けたとして提訴された件。訴状は、学区の AI 警報の99%超が誤検知だったと主張している。

## 注目トピック
今日目立ったのは **AI エージェントの権限・安全性** の話題だ。Grok Bot の停止指示無視、AWS STS の GetScopedCredentials（実行時の権限絞り込み）、Cognito の動的クライアント登録（MCP を意識した OAuth 対応）、Proton Lumo の「AI がアクセスできる範囲の制御」が並んだ。エージェントに渡す権限を設計段階で最小化する流れが、クラウド基盤の機能にも反映されてきている。

開発ツールの面では、Qiita・Zenn で Agent Harness の自作、CLAUDE.md 設計、Orca による並列運用など、エージェントの運用ノウハウが集中した。一方で Cursor 上の公式拡張がバックドア化された事例は、拡張機能のサプライチェーンが攻撃面になることを示している。そのほか、Firefox の指紋対策や TypeScript 7.1 の Content Mapper、Lambda の30分タイムアウトのように、基盤や言語処理系が着実に進んでいる。
