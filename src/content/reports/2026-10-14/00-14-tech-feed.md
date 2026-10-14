---
title: "Tech Feed ダイジェスト（2026年10月14日）"
date: "2026-10-14T00:14"
category: "summary"
summary: "SQLite vec1 取り込み、Anthropic のソース管理再設計、Gemini 4 Argon、Lambda Web Functions の CloudFront 連携、Meta Muse の 0-day など"
tags: ["sqlite", "aws", "security", "ai", "llm", "observability", "python", "rust"]
---

## はてなブックマーク (テクノロジー)
- **[私物Macと仕事Macのdotfilesとアプリ管理をmise bootstrapで管理しやすくした](https://blog.shibayu36.org/entry/2026/10/13/173000)** ([83users](https://b.hatena.ne.jp/entry/s/blog.shibayu36.org/entry/2026/10/13/173000)) - mise の bootstrap 機能で dotfiles とアプリのセットアップを一元化し、私物 Mac と仕事 Mac の環境差分を管理しやすくした事例。
- **[Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control)** ([44users](https://b.hatena.ne.jp/entry/s/www.anthropic.com/engineering/redesigning-source-control)) - Anthropic のエンジニアリングブログによる、同社のソース管理の再設計の紹介。AI エージェントがコードを大量に生み出す前提で、バージョン管理をどう作り直すかという一次情報。
- **[Gemini 4 Argon: Built to solve your hardest problems](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)** ([17users](https://b.hatena.ne.jp/entry/s/blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)) - Google の新モデル Gemini 4 Argon の公式発表。日本語では一般提供開始の記事も並んでいる。Ars Technica は、Gemini アプリと Antigravity では有料ユーザー向けの展開で、開発者向け API は11月まで50%割引だと報じている。
- **[ECS(Fargate) から X-Ray にトレースを送る3経路（ADOT サイドカー / OTLP 直送 / Application Signals）を実際にデプロイして比較してみた](https://dev.classmethod.jp/articles/ecs-otel-xray-tracing-three-send-paths-compared/)** ([6users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/ecs-otel-xray-tracing-three-send-paths-compared/)) - Fargate から X-Ray へトレースを送る3方式を実際にデプロイして比較した検証。構成の手間と得られる情報量の違いを見て方式を選べる。
- **[フロントエンドのXSS対策：サニタイズ（DOMPurify）とエスケープの決定的な違いと実践的使い分け](https://qiita.com/Maku-Inc/items/2d3bff89c7d846d4ce56)** ([19users](https://b.hatena.ne.jp/entry/s/qiita.com/Maku-Inc/items/2d3bff89c7d846d4ce56)) - 出力時のエスケープと、HTML を許可しつつ危険な要素を除く DOMPurify によるサニタイズの違いを整理し、使い分けを解説する。

## Zenn
- **[SQLite 本体にベクトル検索拡張 vec1 がやってきた](https://zenn.dev/mattn/articles/6e9996319ac099)** - 2026年9月30日、SQLite 本体のソースツリーに `ext/vec1/` が追加された。FTS5 の Dan Kennedy 氏によるコミットで、`vec1.c` は約1万3千行。組み込み DB 単体でベクトル検索が使える方向性を読み解く記事。
- **[2025 年 10 月から 2026 年 10 月までの Mozc に対する主な変更](https://zenn.dev/komatsuh/articles/komatsuh_mozc_updates_from_2025_10)** - ドキュメント、コミットログ、Issue から1年間の Mozc の主な変更をまとめた年次記録。日本語入力基盤の動向を追える。
- **[【Crackmes.one】静的解析と動的解析で迷路型Crackmeを解く](https://zenn.dev/otinpan/articles/5e7fff41ed645d)** - リバースエンジニアリング練習用の Crackme を、事前調査、静的解析、動的解析の順で解く手順を示した記事。
- **[Raspberry Pi 4でMCPサーバを構築する(3)](https://zenn.dev/drbobt1122/articles/blog26101101)** - Raspberry Pi 4 を MCP サーバにして複数のクライアント仕様で接続確認するシリーズの第3回。
- **[Canton Network ローカル環境構築ハンズオン](https://zenn.dev/komlock_lab/articles/canton-localnet-handson)** - Splice 0.9.0 / Canton 3.6.1 のリリースに対し、入門用リポジトリ cn-quickstart の対応が追いついていない状況で、ローカル環境を構築する手順。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[【Unity 6.6】Resources / Addressables / Content Directories の違いを整理する ― Unity 7 の展望まで](https://qiita.com/matsu_r11/items/33a85a979b6a2cb99278)** - Unity 6.6 で AssetBundle の後継として登場した Content Directories を、配置方法と読み込みコードつきで Resources や Addressables と比較する。
- **[【Oracle × Snowflake】ADB の Iceberg テーブルを AICAT経由で Snowflake から参照する](https://qiita.com/yushibats/items/bab0634ef6e52f1de33f)** - Oracle AI Data Catalog が提供する Iceberg REST カタログ経由で、Autonomous AI Database のデータを Snowflake から読む構成の検証。
- **[Kiro Crewは魔改造しなくてもClaude Codeで使える！いいんですか？？AWSさん！](https://qiita.com/moritalous/items/065b32fd5e765bc54726)** - Kiro Crew は Kiro CLI と連携する仕組みだが、ACP (Agent Client Protocol) 経由で Claude Code でも動作することを確かめた記事。
- **[Jev vs Gemini Flash Lite — DeepEvalでLLM-as-a-Judgeを比較してみた](https://qiita.com/take-yoda/items/136d1f5a4deea203c718)** - 判断特化型モデル Jev を LLM-as-a-Judge に使えるかを、DeepEval で Gemini Flash Lite と比較した検証。
- **[ZDM+リフレッシュ可能クローンを使ってBaseDB OCPU環境からExaDB-XSへ移行してみた。](https://qiita.com/nyasuhiro/items/8b156ed55873096c1fcf)** - OCI の Base Database から ExaDB-XS への移行を、ZDM とリフレッシュ可能クローンで試した手順。

## AWS 新着
- **[Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/)** (2026-10-13) - 稼働中タスク数を示す新メトリクス LiveTaskCount が追加され、RunningTaskCount の課金がなくなった。オートスケールや監視の設計に影響する。
- **[Amazon CloudFront now supports AWS Lambda Web Functions as an origin](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-lambda-web-functions-origin/)** (2026-10-12) - Lambda Web Functions を CloudFront のオリジンにでき、エッジでの TLS 終端などを前段に置いて Web アプリを配信できる。
- **[Amazon Bedrock now supports reasoning summaries for OpenAI models](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-reasoning-summaries-openai/)** (2026-10-09) - Responses API の `reasoning.summary` パラメータで、OpenAI モデルの推論過程の要約を応答と一緒に取得できる。
- **[Amazon DynamoDB introduces filtered export to Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)** (2026-10-01) - DynamoDB の S3 エクスポートに、全量・増分のどちらでも条件で絞り込むフィルタが加わり、分析や共有向けに必要なデータだけを出力できる。
- **[AWS Well-Architected Agent is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-well-architected-agent/)** (2026-10-01) - Trusted Advisor と Well-Architected Tool の次世代として位置づけられる AI エージェントのプレビュー。

## Lobsters
- **[Did Ente Locker copy my code without attribution?](https://fairscan.org/blog/did-ente-locker-copy-my-code-without-attribution/)** (64pt) - OSS の作者が、別プロジェクト Ente Locker に自分のコードが帰属表示なしで使われたのではないかと問題提起。OSS ライセンスの帰属義務をめぐる事例。
- **[Living in the Weimar era of Ruby](https://blog.julik.nl/2026/10/the-weimar-of-ruby)** (58pt) - Ruby エコシステムの現状と AI コーディング時代の変化を、ワイマール期になぞらえて論じるエッセイ。29コメントが付いた。
- **[Creusot 0.14.0 release - Contracts for Rust, formally proved](https://devlog.creusot.rs/v0-14-0/)** (15pt) - Rust コードに契約を書き、形式的に証明する検証ツール Creusot の 0.14.0 リリース。
- **[Chasing a -O2 pessimization in antcc](https://386s.org/w/lua-antcc-pessimization/)** (8pt) - 小型 C コンパイラ antcc で、`-O2` が逆に遅くなる現象を追跡した調査。
- **[Please stop hashing the public key first (or: ML-DSA's µ annoys me)](https://blog.erincandescent.net/2026/10/mu-annoys-me/)** (2pt) - ポスト量子署名 ML-DSA が公開鍵のハッシュ µ を先に計算する設計を批判し、署名の実装や API 設計への影響を論じる。

## dev.to
- **[Changing def to async def let one blocking call freeze an entire FastAPI app](https://dev.to/remdore/changing-def-to-async-def-let-one-blocking-call-freeze-an-entire-fastapi-app-4cjd)** - 同じ `requests.get` が `def` では問題ないのに `async def` ではサーバーを止め、無関係なエンドポイントが 1.6ms から 34 秒に悪化する。FastAPI のスレッドプール上限や `asyncio.to_thread` による回避も扱う。
- **[Your Marketing Site Has 40 Scripts. Which Ones Are Actually Worth Keeping?](https://dev.to/yassersoliman/your-marketing-site-has-40-scripts-which-ones-are-actually-worth-keeping-1kp)** - サードパーティスクリプトが積み重なったマーケティングサイトの性能問題を取り上げ、残すべきスクリプトの見極め方を示す。
- **[Do You Actually Need an LLM?](https://dev.to/kenwalger/do-you-actually-need-an-llm-3n55)** - 小型言語モデル2種を、普段 LLM に任せる3つの仕事で試した週末の検証。LLM が本当に必要かを問い直す。
- **[Your AI agent said it blocked the attack. I read the source of 5 tools that check if it's lying.](https://dev.to/rudratosh/your-ai-agent-said-it-blocked-the-attack-i-read-the-source-of-5-tools-that-check-if-its-lying-l1n)** - AI エージェントが「攻撃を防いだ」と報告しても、テストでは検出できない失敗がある。それを検証する5つのツールのソースを読んだ記事。
- **[Cosine Similarity Said 0.92. The Payload Was Already Dead.](https://dev.to/toxy4ny/cosine-similarity-said-092-the-payload-was-already-dead-387h)** - LLM エージェントのメモリ汚染を、反実仮想的な除去とノイズフロアで測定する計測装置の紹介。否定的な結果も3つ報告している。

## TechCrunch
- **[Google Play now lets anyone build private, vibe-coded apps that run on Android](https://techcrunch.com/2026/10/13/google-play-now-supports-private-vibe-coded-apps-built-just-for-you/)** - AI で作った個人用 Android アプリを、公開せずに Google Play 経由で自分用に使える仕組み。Ars Technica も、これを広く公開するリリースにつなげる計画を別角度で報じている。
- **[Pluto Security raises $42M as AI gives enterprise security teams a new headache](https://techcrunch.com/2026/10/13/pluto-security-raises-42m-as-ai-gives-enterprise-security-teams-a-new-headache/)** - 社内の誰もが AI ツールを使える状況が生む新たなセキュリティ上の懸念と、それに取り組むスタートアップの資金調達。
- **[Laplace Intelligence red-teams robots and self-driving cars before they hit the real world](https://techcrunch.com/2026/10/13/laplace-intelligence-red-teams-robots-and-self-driving-cars-before-they-hit-the-real-world/)** - AI エージェントとインタラクティブなシミュレーションで、ロボットや自動運転車を実環境投入前に負荷試験するミシガン大発のスタートアップ。
- **[Niobia takes the guesswork out of some of tech's most expensive mistakes](https://techcrunch.com/2026/10/13/niobia-takes-the-guesswork-out-of-some-of-techs-most-expensive-mistakes/)** - 電池や半導体の製造ラインで欠陥を特定し、ダウンタイムを減らすことを狙う。
- **[Cerebras CEO says we're nearing a future where everyone has a personal AI assistant at home](https://techcrunch.com/2026/10/13/cerebras-ceo-says-were-nearing-a-future-where-everyone-has-a-personal-ai-assistant-at-home/)** - Cerebras CEO が、ローカル端末とクラウドを組み合わせて動く個人向け AI アシスタントの普及を予測した。

## Ars Technica
- **[Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)** - 強い権限を持つ Meta の AI アシスタント Muse に、ClickFix 型の攻撃などで完全に乗っ取られる 0-day が見つかった。
- **[There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)** - 「RSA を破るには素因数分解しかない」という従来の見方を覆す、新しい攻撃手法を紹介する記事。
- **[Memory executives expect RAM shortage to continue through 2028](https://arstechnica.com/information-technology/2026/10/memory-supplies-are-only-getting-tighter-micron-ceo-says/)** - Micron CEO らが、メモリ不足は2028年まで続き、2027年向け価格は2026年より大幅に高いと述べた。インフラのコスト見積もりに効く。
- **[Topgolf saved over $11.3 million after leaving VMware](https://arstechnica.com/information-technology/2026/10/topgolf-saved-over-11-3-million-after-leaving-vmware/)** - VMware から移行した Topgolf の削減額の事例。ライセンス費用を理由に VMware 利用者の9割が選択肢を検討しているという別の調査記事もある。
- **[Epic Games reportedly pivoting to "AI first" game development model](https://arstechnica.com/gaming/2026/10/report-epic-games-goes-all-in-on-ai-for-disney-collaboration/)** - 報道によれば、Epic が開発の AI ファーストへの転換を進め、手書きコードをなくす方針という。ゲーム開発の現場に AI が入る動き。

## 注目トピック
AI エージェントの権限と安全性が複数ソースで共通のテーマになっている。Ars Technica は Meta Muse の 0-day を、dev.to は「エージェントが防いだと報告した攻撃を検証する」「メモリ汚染を測る」記事を扱い、TechCrunch は AI ツールの社内利用が生むセキュリティ上の懸念を取り上げた。エージェントが強い権限を持つほど、プロンプトインジェクションや報告の信頼性が設計上の課題になる。

もう一つの流れは、基盤技術の足元の変化である。SQLite 本体への vec1 の取り込み、Aurora や ECS の運用機能の追加、OpenTelemetry を使った ECS から X-Ray へのトレース比較など、既存のインフラに AI やベクトル検索、観測性を組み込む動きが目立つ。Anthropic のソース管理再設計や Google Play の個人用 vibe-coded アプリも、AI 生成コードの増加を前提にした仕組みの見直しとして読める。
