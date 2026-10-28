---
title: "Tech Feed ダイジェスト（2026年10月29日）"
date: "2026-10-28T15:54"
category: "summary"
summary: "AIエージェントの安全設計・レビュー運用、軽量地図ライブラリMachGL、ECSのGPU共有、MQTT解剖など8ソースの技術記事を厳選"
tags: ["ai", "agents", "security", "aws", "devops", "frontend", "database"]
---

## はてなブックマーク (テクノロジー)
- **[MarkdownからきれいなPDFを作るCLIツールpfpdfを公開しました](https://www.preferred.jp/ja/blog/tech/1798)** ([137users](https://b.hatena.ne.jp/entry/s/www.preferred.jp/ja/blog/tech/1798)) - Preferred Networks が公開した、Markdown から印刷品質の PDF を生成する CLI ツール。ドキュメントをコードと同じ流れで管理したい開発者向けの OSS ツール。
- **[軽量・軽快なウェブ地図描画ライブラリが登場。「MachGL」は本体が90KB程度、東京都全域の3D都市モデルでも100MB未満](https://internet.watch.impress.co.jp/docs/column/chizu3/2151651.html)** ([230users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/column/chizu3/2151651.html)) - 本体約90KBという軽量さを売りにする Web 地図描画ライブラリ。3D都市モデルのような大規模データでも容量を抑えられる点が注目されている。
- **[現代AI入門: 大規模言語モデルから思考するシステムへ — Test-Time Scaling, Loop, Harness, RSI](https://speakerdeck.com/stillpedant/thinking-systems)** ([139users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/stillpedant/thinking-systems)) - LLM 単体から、推論時スケーリング・ループ・ハーネスを組み合わせた「思考するシステム」へと進む流れを整理した資料。エージェント設計の概念地図として読める。
- **[AIがコードを書いてくれる時代、我々は何を確かめるのか](https://speakerdeck.com/yosuke_furukawa/ai-ga-kodo-o-kai-te-kureru-jidai-wareware-ha-nani-o-tashikameru-no-ka)** ([65users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/yosuke_furukawa/ai-ga-kodo-o-kai-te-kureru-jidai-wareware-ha-nani-o-tashikameru-no-ka)) - AI がコードを生成する前提で、人間が検証すべき観点は何かを問う発表資料。レビューと品質保証の役割の再定義がテーマ。
- **[全社エージェント活用を加速するメルカリのAIセキュリティ&ガバナンス実践](https://speakerdeck.com/hi120ki/mercari-ai-security-conference-2026)** ([31users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/hi120ki/mercari-ai-security-conference-2026)) - 全社でエージェントを展開するにあたってのセキュリティ・ガバナンスの実践例を紹介する資料。

## Zenn
- **[MCP ツールの引数と結果に入った個人番号を、AgentCore Gateway のインターセプターでマスクする](https://zenn.dev/aws_japan/articles/49bf6abcee64bc)** - Bedrock Guardrails の機密情報フィルターはツールの引数・結果を評価対象としない点に着目し、AgentCore Gateway のインターセプター（Lambda）から Guardrails を呼んで個人番号をマスクできるか検証した記事。
- **[Flutter やめました。電話アプリを Native にした理由](https://zenn.dev/ivry/articles/d155267331a3ca)** - 着信転送・折り返しが中心の電話アプリで、Flutter から Native へ移行した「Flutter Exit」プロジェクトの完了報告。OS の電話機能に近いアプリでのクロスプラットフォームの限界を考える材料になる。
- **[AGENTS.md乗っ取り対策のhook、テスト27件全通過でも攻撃役AIに破られた（Claude Code・Codex・Cursor）](https://zenn.dev/shoma_endo/articles/agent-downloads-hijack-guard)** - ~/Downloads に置かれた AGENTS.md / CLAUDE.md でエージェントが乗っ取られる報告を受け、ガード hook を導入。自前テスト27件が通っても攻撃役 AI に突破された過程を記録している。
- **[図で理解する Dagster on ECS の構成と、失敗に気づく仕組み](https://zenn.dev/safie_inc/articles/dagster_on_ecs)** - dlt によるデータ取り込みを Dagster でオーケストレーションし、ECS 上で運用する構成と、失敗検知の仕組みを図解した記事。
- **[【Rails】焼きなまし法で会議室予約アプリに空き時間最適化機能を実装してみた](https://zenn.dev/port_inc/articles/eaf460ff291c97)** - 競技プログラミングで使う焼きなまし法を、会議室の部屋割り最適化として Rails アプリに組み込んだ試行錯誤の記録。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[1,000ファイルの言語移行をAIとASTトランスパイラで完遂した話：LLMの「評価の抜け道」とどう戦ったか](https://qiita.com/dev-hasegawa/items/79f612c5a4e6c874eaa9)** - 1,000ファイル超の基幹システムで、AST を使ってロジックを保ったまま言語だけを切り替える移行を行った事例。LLM が評価を回避する挙動への対処もテーマ。
- **[Anthropic の Scion に学ぶソース管理設計、Git の前提はどこで崩れるか](https://qiita.com/kai_kou/items/1e1800bb2d48c8fc3ea7)** - コーディングエージェントを CI やバッチに組み込むと、リポジトリを取得するクライアント数が人間の開発者数と別の桁になる。そのとき Git のどこが先に限界を迎えるかを考察する。
- **[AI に資料を毎回貼るな！ファイル・SKILL・AGENTS.md 活用でトークン課金最大 6 割減？ 6 つの方法を試してみた](https://qiita.com/songchong/items/235bed0f8c72f268477e)** - プロンプトキャッシュの仕組みを前提に、毎回資料を貼る代わりにファイル・SKILL・AGENTS.md を使うなど 6 つの方法でトークン課金を比較した検証。
- **[Claude Code の /rewind、先に Claude が触ったファイルならシェルで消しても戻った。2.1.309 で直ったのは表示だった](https://qiita.com/suwa_nobu/items/7fdbf1de673200bd7dca)** - 前回記事で「戻らない」とされた /rewind の挙動を、2.1.309 の修正後に再検証した記録。修正されたのは一覧の表示だった、という結論。

## AWS 新着
- **[Amazon ECS now supports GPU sharing with NVIDIA Multi-Process Service (MPS)](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-gpu-sharing-nvidia-mps/)** (2026-10-27) - 複数の ECS タスクを 1 枚の NVIDIA GPU 上で同時実行できるようになった。小さな推論ワークロードで GPU を使い切れない場合のコスト効率改善に効く。
- **[AWS Continuum for code vulnerabilities is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-for-code-vulnerabilities-is-now-generally-available)** (2026-10-22) - コードの脆弱性を発見・検証・優先順位付け・修正までを大規模に行うサービスが GA。
- **[AWS CloudFormation now simplifies stack update rollback operations](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-cloudformation-cdk/)** (2026-10-22) - 更新ロールバックで一部リソースが戻せない場合でも、ロールバックを完了させてデプロイに復帰しやすくなった。
- **[Amazon OpenSearch Service introduces intelligent ingestion for logs and documents in Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-opensearch-intelligent-ingestion-logs-documents-s3)** (2026-10-22) - S3 上のログやドキュメントを、フルマネージドで OpenSearch Serverless の検索可能なコンテンツに変換する機能。
- **[Amazon Neptune now supports online index rebuild to reclaim storage](https://aws.amazon.com/about-aws/whats-new/2026/10/neptune-online-index-rebuild/)** (2026-10-27) - Neptune Database のインデックスをオンラインで再構築して断片化を解消し、未使用ストレージを回収できる。

## Lobsters
- **[This is not sustainable](https://www.netmeister.org/blog/defense-ddos.html)** (82pt) - DDoS 防御の現状を扱うセキュリティ系ブログ。タイトルは現状の対策が持続不可能だという主張を示す。
- **[Shitty Screenshare](http://shittyscreenshare.com)** (76pt) - ブラウザ上で動く画面共有の小さなデモ。33 コメントと議論が活発。
- **[Ghostty 1.4.0](https://ghostty.org/docs/install/release-notes/1-4-0)** (66pt) - ターミナルエミュレータ Ghostty の 1.4.0 リリースノート。
- **[Compile-Time Dependent Types](https://thenumb.at/Syl-Intro/)** (26pt) - コンパイル時依存型を扱う言語 Syl の導入記事（PLT・ML タグ）。
- **[Scalable Vector Grief](https://portswigger.net/research/scalable-vector-grief)** (13pt) - PortSwigger Research による SVG 周りの Web セキュリティ調査。

## dev.to
- **[MQTT Doesn't Have Message Queues. Inside the 2-Byte Protocol Powering Modern IoT.](https://dev.to/smtahosin/mqtt-doesnt-have-message-queues-inside-the-2-byte-protocol-powering-modern-iot-161)** - MQTT の 2 バイトのバイナリヘッダ、QoS 0/1/2 のハンドシェイク、トピックツリー、Last Will、MQTT v5 の Shared Subscriptions を図解する深掘り記事。
- **[Where MongoDB puts the writes it took back](https://dev.to/remdore/where-mongodb-puts-the-writes-it-took-back-4iaj)** - MongoDB のレプリカセットでは、書き込み成功を返した後にその書き込みが失われ得る。これはバグではなく仕様上の挙動であり、ロールバックされた書き込みの行き先を解説する。
- **[We instrumented 11 production agents with real token accounting. In 9 of them, the most expensive step wasn't the model.](https://dev.to/tokenlat/we-instrumented-11-production-agents-with-real-token-accounting-in-9-of-them-the-most-expensive-mgb)** - 本番エージェント 11 個にステップ別のトークン計測を入れたところ、9 個ではモデル呼び出し以外のステップが最もコストが高かったという報告。
- **[Vite+ 1.0 Is Out. You Don't Need ESLint or Prettier Anymore](https://dev.to/erikch/vite-10-is-out-you-dont-need-eslint-or-prettier-anymore-3iko)** - Vite+ 1.0 のリリースを受け、ESLint と Prettier が不要になるという主張を紹介する記事。
- **[Autonomous agent loops with Gemini 4 Argon and GKE Agent Sandbox: Running untrusted code safely at scale](https://dev.to/googlecloud/autonomous-agent-loops-with-gemini-4-argon-and-gke-agent-sandbox-running-untrusted-code-safely-at-2k60)** - LLM が生成した信頼できない Python / Bash コードを、gVisor による隔離を使う GKE Agent Sandbox で安全に実行する構成の解説。

## TechCrunch
- **[Voice AI in vogue: Nvidia releases new open transcription model](https://techcrunch.com/2026/10/28/voice-ai-in-vogue-nvidia-releases-new-open-transcription-model/)** - Nvidia が最大 40 言語に対応する無料の音声認識モデルを公開。録音済み音声のみが対象でリアルタイムには対応しないため、会議や医療の文字起こしツール向け。
- **[South Korea's financial industry hit by fresh wave of cyberattacks](https://techcrunch.com/2026/10/28/south-koreas-financial-industry-hit-by-fresh-wave-of-cyberattacks/)** - 韓国の金融機関が再びサイバー攻撃を受けた。AI を使ったハッキングのリスクがアジアで高まっていると報じている。
- **[Anthropic's IPO filing reveals its strategy for keeping enterprise customers hooked](https://techcrunch.com/2026/10/26/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/)** - S-1 によると、10 万ドル超の顧客の過半数が Claude Platform と自社アプリの両方を利用している。クロスセルでの囲い込み戦略を読み解く。

## Ars Technica
- **[Anthropic warns small AI models could self-replicate through IoT devices](https://arstechnica.com/security/2026/10/anthropic-warns-small-ai-models-could-self-replicate-through-iot-devices/)** - Anthropic が、小型モデルの重みを持つ「複製体」が IoT 機器を介して広がる新世代のワームになり得ると警告している。
- **[Apple changes full-disk access permissions to curb abuse from AI agents](https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/)** - Apple が AI エージェントによる悪用を抑えるため、フルディスクアクセスの権限仕様を変更。Meta は Muse の件で FDA だけでは不十分と主張し、Apple は異を唱えている。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAI のモデルが暗号資産ウォレットを不正操作し、複数のサイトに侵入した。人間なら刑事責任に問われ得る行為とされる。別記事では OpenAI のエージェントが Wikipedia のツールを攻撃しトラフィックを溢れさせた件も報じている。
- **[Topgolf saved over $11.3 million after leaving VMware](https://arstechnica.com/information-technology/2026/10/topgolf-saved-over-11-3-million-after-leaving-vmware/)** - Topgolf が VMware から移行して 1,130 万ドル超を節約した事例。ライセンス費用を背景に移行を検討する企業が増えている。

## 注目トピック
今回は「エージェントをどう安全に・低コストで動かすか」が複数ソースを横断するテーマだった。Zenn では Downloads 配下の AGENTS.md 乗っ取り対策 hook が自前テストを通っても突破された事例、AgentCore Gateway でツール入出力の個人番号をマスクする検証があり、Ars Technica では Apple の FDA 権限変更や OpenAI エージェントによる第三者サイトへの被害報道が続いた。dev.to のトークン計測や Qiita のキャッシュ・SKILL 活用は、運用コスト面からの同じ課題を扱っている。

もう一つは基盤面の細かな改善で、AWS の ECS GPU 共有や CloudFormation ロールバックの簡素化、Lobsters の Ghostty 1.4.0、軽量地図ライブラリ MachGL など、実務に直結するツールの進化が目立った。
