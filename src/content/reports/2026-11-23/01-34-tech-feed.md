---
title: "Tech Feed ダイジェスト（2026年11月23日 朝）"
date: "2026-11-23T01:34"
category: "summary"
summary: "Agent Harness の自作、Lambda の30分タイムアウト、TypeScript 7.1 Content Mapper、Issue Artifact、ローカルLLM の仕組みなど"
tags: ["ai-agents", "aws", "typescript", "security", "llm", "lambda", "github"]
---

## はてなブックマーク (テクノロジー)
- **[Agent Harnessを理解するために、150行ほどのPythonで自作してみた - Qiita](https://qiita.com/yamamoto_a_genee/items/76562c5c80032ad9e962)** ([78users](https://b.hatena.ne.jp/entry/s/qiita.com/yamamoto_a_genee/items/76562c5c80032ad9e962)) - AI エージェントの実行基盤（ハーネス）の中身を、約150行の Python で自作して理解する試み。ブラックボックスになりがちなループ制御やツール呼び出しの構造を、小さな実装で掴める。
- **[[アップデート]AWSアカウント作成がとんでもなく別物になったので動作の違いを見てみた[新しいAWSエクスペリエンス] | DevelopersIO](https://dev.classmethod.jp/articles/new-aws-signup/)** ([30users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/new-aws-signup/)) - 新しい AWS エクスペリエンスでのアカウント作成フローが従来と大きく変わったことを、実際の操作で比較した記事。
- **[ワークフローからハーネスへ — Web フレームワークの作者たちが AI エージェントに向かう理由](https://speakerdeck.com/azukiazusa1/slide-ca142a4a-9ec4-4750-91c1-07892c44a423)** ([65users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/azukiazusa1/slide-ca142a4a-9ec4-4750-91c1-07892c44a423)) - Web フレームワーク作者たちの関心が、決まった手順を組むワークフローから、エージェント用ハーネスの設計へ移っているという動向を整理したスライド。
- **[プラガブルで宣言的なソフトウェアファクトリーを支えるTypeScript](https://speakerdeck.com/timakin/definitive-and-pluggable-software-factory)** ([40users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/timakin/definitive-and-pluggable-software-factory)) - 宣言的でプラガブルなソフトウェアファクトリーを TypeScript でどう支えるかを扱った発表資料。
- **[「サイバーセキュリティ緊急対策パッケージ」の中身 | blog.jxck.io](https://blog.jxck.io/entries/2026-11-19/cyber-security-emergency-package.html)** ([23users](https://b.hatena.ne.jp/entry/s/blog.jxck.io/entries/2026-11-19/cyber-security-emergency-package.html)) - 政府が打ち出したサイバーセキュリティ緊急対策パッケージの内容を、技術者の視点で読み解いたブログ。

## Zenn
- **[ローカルLLM入門](https://zenn.dev/port_inc/articles/ff974c7456f4db)** - LLM を手元の PC やブラウザで動かす仕組みを整理した記事。生成速度を決めるのは計算性能よりメモリ帯域であること、量子化によって手元で動かせるモデルの規模が変わることなどを扱う。
- **[毎月6,000 AI Agentsを捌くためにキーボードを捨てた話](https://zenn.dev/andoshin11/articles/ba68b39ef9a8ce)** - git worktree と Orca ADE を使い、Claude や Codex のセッションを月6,000回ほど回す開発スタイルの紹介。1日200セッション前後で開発速度が安定したという運用の実態が書かれている。
- **[GitHub IssueにArtifactとしてHTMLとMarkdownを添付できるようになった](https://zenn.dev/kesin11/articles/20261114_github_issue_artifact)** - Public Preview の Issue Artifact の紹介。HTML や Markdown を Issue に添付し、右側の専用パネルで表示できる。コーディングエージェントが設計案を HTML で出す使い方と相性が良い。パネル幅が固定という欠点も指摘されている。
- **[TypeScript 7.1 の Content Mapper で型の生成コマンドをなくす](https://zenn.dev/toiroakr/articles/typescript-content-mapper-codegen)** - TypeScript 7.1 の Content Mapper は、外部の mapper が TypeScript で読めないファイルを型チェック用の TS テキストに変換する仕組み。`wrangler types` のような型生成コマンドをこれで置き換える例を示す。API は Stable 前で変わる可能性がある。
- **[正しいUIデザインと、意図のあるUIデザイン](https://zenn.dev/praha/articles/08568310684aa3)** - 「手間を減らす」と「正確な値を記録する」のように、ガイドライン同士が衝突する場面を取り上げる。ガイドラインに順位を付けてアプリの意図を表す手法を紹介する。

## Qiita
- **[脆弱性の「CVSS 9.8」って結局なに？CVSSの読み方をちゃんと理解する](https://qiita.com/heki-dm/items/77ecaacd592d1c4459df)** - Dependabot などで目にする `CVSS:3.1/AV:N/AC:L/...` というベクタ文字列の各指標の意味を解説する記事。冒頭抜粋から読み取れる範囲では、数値の大小だけで判断しない読み方を扱っている。
- **[coturnのTURN認証情報を期限付きで都度発行し、固定値より漏えい時の被害を抑える](https://qiita.com/takumi_engineer/items/50c27c11ccf08db3165a)** - WebRTC 配信で TURN サーバーの固定ユーザー名・パスワードをフロントに置くと悪用されるおそれがある。coturn の共有シークレット方式で、期限付きの認証情報を API から都度発行する方法を動くコードで示す。
- **[⚡ Microsoft 365 Copilot ライセンスで GitHub Copilot CLI が使えるように!!](https://qiita.com/aktsmm/items/855dbec6f06587a26287)** - Microsoft Ignite 2026 の発表を受け、M365 Copilot のライセンスで GitHub Copilot CLI が使えるようになった件を整理した記事（冒頭抜粋から）。
- **[Amazon Bedrock AgentCoreの1年をたどると、クラウドの十数年と同じ道だった ― re:Invent 2026を"勝手に"予測する](https://qiita.com/somasun_aws/items/6d10711b34636a4a2f30)** - エージェントを「作る」ことは簡単になった一方、本番運用が課題になっているという観点から AgentCore の1年を振り返り、re:Invent を予測する。

## AWS 新着
- **[AWS Lambda now supports a 30-minute timeout for on-demand Event Functions](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-30-minute-ondemand-event-functions/)** (2026-11-19) - オンデマンドの Event Functions のタイムアウト上限が15分から30分に倍増した。同期・非同期・ESM の各呼び出しが対象で、長めのバッチ処理を分割せずに済む場面が増える。
- **[Amazon Aurora DSQL now delivers up to 50% higher write throughput](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-dsql-higher-write-throughput/)** (2026-11-19) - ストレージ層の改善で、多くのトランザクション系ワークロードの書き込みスループットが最大50%向上した。
- **[AWS Lambda durable functions now supports OpenTelemetry tracing](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-otel/)** (2026-11-19) - Lambda durable functions の実行を OpenTelemetry でトレースし、CloudWatch などへ送れるようになった。
- **[Amazon Cognito now supports client ID metadata documents](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-client-id-metadata-documents/)** (2026-11-19) - OAuth の client ID metadata documents (CIMD) に対応した。AI エージェントやマイクロサービスのクライアント登録・認可を扱う場面に影響する。
- **[Amazon CloudWatch extends the PromQL query window to 30 days](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-promql-query-30days/)** (2026-11-20) - OpenTelemetry メトリクスに対する PromQL のクエリ期間が7日から30日に拡張され、前月比・前週比を1回のクエリで見られる。

## Lobsters
- **[GitHub Actions accepts invalid YAML](https://yossarian.net/til/post/github-actions-accepts-invalid-yaml/)** (30pt) - GitHub Actions のワークフローが、仕様上は不正な YAML でも受理されるという指摘。パーサ実装の差が他ツールとの挙動差やセキュリティ上の見落としにつながりうる。
- **[Vim Classic 8.3.1 released](https://vim-classic.org/news/vim-8.3.1-released.html)** (79pt) - Vim Classic の 8.3.1 リリース告知。33件のコメントがつき、関心の高さがうかがえる。
- **[Falsehoods Programmers Believe About ATProto](https://reiver.link/atproto/falsehoods-programmers-believe/)** (25pt) - Bluesky の基盤である AT Protocol について、開発者が抱きがちな誤解を列挙した記事。
- **[What If Netscape Did SSL the HTTP Way?](https://owl.billpg.com/what-if-netscape-did-ssl-the-http-way/)** (8pt) - SSL を HTTP 流の方式で設計していたらどうなったか、という思考実験。13件のコメントで議論になっている。

## dev.to
- **[Long Live Rails](https://dev.to/ben/long-live-rails-3p21)** - Rails World 2026 での DHH の発言を受け、AI 時代の Rails の位置づけを論じた記事。Ruby、Rust、AI の文脈で語られている。
- **[2026-11-22: PagedAttention explained from scratch](https://dev.to/susheem-k/2026-11-22-pagedattention-explained-from-scratch-50fd)** - LLM 推論でメモリを効率よく管理する PagedAttention 論文の読書ノート。KV キャッシュの扱いを基礎から整理している。
- **[Thinking On or Off? Gemma 4 E4B on an 8 GB RTX 3050](https://dev.to/gde/thinking-on-or-off-gemma-4-e4b-on-an-8-gb-rtx-3050-5d5)** - 8GB の RTX 3050 上で Gemma 4 E4B の thinking オン/オフを比較。GSM8K 全1,319問で正答率は0.927〜0.944、thinking は所要時間が2.24〜2.47倍になる一方で正解の増加は最大16問にとどまった。ドラフトモデルで高速化もできる。
- **[Your Error Survived the Wrapper. Did Its Code Survive the Trace?](https://dev.to/gde/your-error-survived-the-wrapper-did-its-code-survive-the-trace-17gg)** - `ETIMEDOUT` のようなエラーコードが、ラップされた後もトレースに残るかを検証する TypeScript のオブザーバビリティ記事。
- **[Find the production agent failures that every health check misses](https://dev.to/googlecloud/find-the-production-agent-failures-that-every-health-check-misses-39j8)** - ヘルスチェックでは拾えない本番エージェントの失敗を検出し、失敗の原因コード行まで追跡するオープンソースのクオリティエージェント AQuA の紹介。

## TechCrunch
- **[OpenAI's chief scientist has thoughts on how to limit AI development](https://techcrunch.com/2026/11/22/openais-chief-scientist-has-thoughts-on-how-to-limit-ai-development/)** - OpenAI のチーフサイエンティストが AI 開発に「速度制限」を設けるという考え方を語った。前提として、開発の「速度」をどう測るかを合意する必要があると指摘している。
- **[A transcription firm used by police, prosecutors, and tech giants exposed customer data online](https://techcrunch.com/2026/11/20/a-transcription-firm-used-by-police-prosecutors-and-tech-giants-exposed-customer-data-online/)** - 警察の取り調べや bodycam 映像の書き起こしが、パスワードなしのクラウドサーバー上で公開状態になっていた独自報道。設定ミスという単純な原因が重大な漏えいにつながった例。
- **[Why data centers are at the center of the Big Tech backlash](https://techcrunch.com/2026/11/22/why-data-centers-are-at-the-center-of-the-big-tech-backlash/)** - 書籍『Hyperscale』の著者へのインタビュー。AI 向けデータセンターの急拡大が、ビッグテックへの反発の中心になっている背景を論じる。

## Ars Technica
- **[US will soon announce root cause behind FAA nationwide ground stop](https://arstechnica.com/gadgets/2026/11/how-faa-can-modernize-us-national-airspace-system-without-emergency-ground-stops/)** - FAA の全米運航停止を受け、元 FAA 関係者が、数十年前のネットワークを緊急停止なしに更新する方法を語る。レガシー基盤の更新リスクという、一般のシステムにも通じる論点。
- **[Trump admin still won't let Wi-Fi giant TP-Link sell its latest routers in US](https://arstechnica.com/tech-policy/2026/11/trump-admin-still-wont-let-wi-fi-giant-tp-link-sell-its-latest-routers-in-us/)** - TP-Link の最新ルーターが米国で販売できない状況を、政権がデバイスメーカーに及ぼす統制の例として解説する。
- **[Prisons get OK to jam contraband phones. CTIA says nearby phones will be jammed too.](https://arstechnica.com/tech-policy/2026/11/prisons-get-ok-to-jam-contraband-phones-ctia-says-nearby-phones-will-be-jammed-too/)** - 刑務所での携帯電話ジャミングが認められた。CTIA は試験で最大約4kmの範囲に干渉が出たと主張している。

## 注目トピック
今回の目立つテーマは、AI エージェントを運用する基盤の話です。はてブでは「Agent Harness」を自作して理解する記事と、Web フレームワーク作者の関心がワークフローからハーネスへ移っているという発表が上位に入りました。Zenn では Orca ADE で月6,000セッションを回す事例や、Issue Artifact のようにエージェントの成果物を GitHub 上でレビューする流れが出ています。AWS 側も Lambda の30分タイムアウト、durable functions の OpenTelemetry 対応、Cognito の CIMD 対応と、長時間・非同期処理や認可、可観測性に手が入っています。

もう一つは、足元の基盤の仕組みを見直す動きです。ローカルLLM はメモリ帯域と量子化で説明され、PagedAttention や Gemma 4 の thinking オン/オフ比較でも、推論時のメモリと時間のコストが論点になっています。TypeScript 7.1 の Content Mapper は、型生成コマンドを型チェッカー側の仕組みで置き換える方向を示しています。一方、GitHub Actions が不正な YAML を受理する件や、パスワードなしで公開されていた書き起こしデータの件からは、仕様の解釈差や設定ミスという基本的な部分が事故につながることがわかります。
