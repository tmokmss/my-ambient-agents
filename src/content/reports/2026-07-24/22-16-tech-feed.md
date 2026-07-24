---
title: "Tech Feed ダイジェスト（2026年7月25日）"
date: "2026-07-24T22:16"
category: "summary"
summary: "AnthropicがOpus 5を発表しAWS各所にも即日展開、Claude Codeの実務活用ノウハウ記事が各ソースで存在感を示した一日"
tags: ["ai", "aws", "security", "devops", "frontend"]
---

## はてなブックマーク (テクノロジー)

- **[【Claude Code活用特集】あの会社で一番使われてるSkillsは？Claude Codeの利用Skills Top5を大公開！](https://lp.ai-plus.findy.io/articles/claude-code-skills-top5/)** ([128users](https://b.hatena.ne.jp/entry/s/lp.ai-plus.findy.io/articles/claude-code-skills-top5/)) - Findyが企業導入事例をもとに、Claude Codeで実際によく使われているAgent Skillsのランキングを公開した記事。コードレビューやテスト生成など、現場での定番活用パターンが可視化されている。
- **[自宅でローカルなテレビ局を開局してみた 【地上デジタル放送の仕組みに迫る】](https://qiita.com/Rabbit_Program/items/7c3b004ff56ec4cc6b06)** ([155users](https://b.hatena.ne.jp/entry/s/qiita.com/Rabbit_Program/items/7c3b004ff56ec4cc6b06)) - ISDB-T方式の地上デジタル放送の変調・多重化の仕組みを自作SDR環境で再現し、自宅内限定でテレビ局を「開局」してみた実験記事。放送規格をソフトウェアで一から組み上げる過程が詳細に解説されている。
- **[AI時代におけるテストの基礎の再定義](https://speakerdeck.com/mineo_matsuya/rethinking-the-fundamentals-of-testing-in-the-ai-era)** ([101users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/mineo_matsuya/rethinking-the-fundamentals-of-testing-in-the-ai-era)) - AIがコードを大量生成する時代に、従来のテスト理論（何を・どこまで・なぜテストするか）がどう再定義されるべきかを整理したスライド。人間がレビューしきれない生成コード量にテスト戦略がどう追いつくかを論じている。
- **[「Chromium」の画像デコードをRustに ～脆弱性削減、処理時間も最大50％短縮／Microsoftらの取り組み](https://forest.watch.impress.co.jp/docs/news/2127553.html)** ([18users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2127553.html)) - MicrosoftらがChromiumの画像デコード処理をC++からRustへ置き換える取り組みを進めており、PNGでの脆弱性削減・処理速度50%短縮という成果が出ている。BMPやICO/JPEGへの適用も進行中で、ブラウザの核心部分にRust化が着実に広がっている。
- **[クラウドを使う側から、作る側へ / 大吉祥寺.pm 2026前夜祭](https://speakerdeck.com/fujiwara3/da-ji-xiang-si-dot-pm-2026qian-ye-ji)** ([22users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/fujiwara3/da-ji-xiang-si-dot-pm-2026qian-ye-ji)) - クラウドサービスを利用する側のエンジニアが、自らクラウド基盤やミドルウェアを「作る側」に回ることで得られる視点の変化を語った登壇スライド。

## Zenn

- **[Node.js バージョン管理、Volta から mise へ移行した。Python は uv 管理のままにした。](https://zenn.dev/takna/articles/volta-to-mise-migration)** - 開発が止まって久しいVoltaから、活発にメンテされているmiseへNode.jsのバージョン管理を移行した記録。Pythonはuvのまま据え置くなど、ツールごとに適材適所で管理基盤を使い分ける判断が参考になる。
- **[開発しているだけで進捗が更新される。Linear × Claude Code × GitHubで作る開発フロー](https://zenn.dev/explaza/articles/500ded8ea67252)** - タスク作成・着手・PR紐付け・完了処理といったLinearの手動更新作業を、Claude CodeとGitHubの連携によって自動化し、実装に集中するだけで進捗が同期される開発フローを構築した記事。
- **[Claude Codeを2時間おきに回してVS Code拡張mdエディタを育てるLoop Engineering実践](https://zenn.dev/green_tea/articles/e39e3726a449c9)** - Claude Codeの`/loop`機能を使い2時間おきに1機能ずつ実装させることで、日常業務の合間にVS Code拡張機能を継続的に育てていった実践記録。人間が張り付かない非同期の「Loop Engineering」という開発スタイルを提示している。
- **[仕様駆動開発で起こる「仕様とコードのズレ」をハッシュで決定的に検出するツールを作った](https://zenn.dev/mrmtsntr/articles/artgraph-spec-code-drift)** - 仕様書とコードの乖離をLLMに推測させるのではなく、ハッシュ値による決定的な仕組みで検出するCLIツール「artgraph」を開発した記事。仕様駆動開発（SDD）でありがちな「ドキュメントだけ古い」問題への対処法。
- **[Async React時代の宣言的UI 3: useActionStateでユーザーの操作を妨げないUXを作る](https://zenn.dev/uhyo/articles/async-react-action-queue)** - React 19で導入されたuseActionStateフックを「非同期版useReducer」と捉え、ユーザー操作をブロックしないUXをどう組み立てるかを解説した連載記事。

## Qiita

- **[LLMコストを最適化する？ AI Routerを実装してみた](https://qiita.com/bbrfkr/items/03d5a65dd364c0fa5709)** - タスクの難易度に応じて安価なモデルと高性能なモデルを自動的に振り分けるAI Routerを実装し、LLM APIコストの最適化を試みた記事。モデル乱立時代のコスト管理手法として実務的な内容。
- **[なぜAIも人も『評価』に従うのか？ ― 報酬ハッキングで読み解くシステム設計](https://qiita.com/maskot1977/items/bb76f044f16c318ec02f)** - 強化学習における「報酬ハッキング」の概念を軸に、AIも人間の組織も「評価指標に最適化しすぎる」という同じ罠に陥りがちであることをシステム設計の視点から論じた連載記事。
- **[さくらのAI Engineたちに「どう盛り上げるか」を議論させたら、結論は「どれをやるかは人間が決めてください」だった](https://qiita.com/TheGateBreaker/items/d56b52b7ed6426e50f2b)** - 複数のAIエージェントに自由に議論させるとどうなるかを検証したところ、最終的に「意思決定は人間に委ねるべき」という結論に落ち着いたという、AIエージェントの限界と役割分担を考えさせられる実験記事。
- **[CSRFの仕組みを丁寧に解説 — なぜCookieだけでは「本人からのリクエスト」と言えないのか](https://qiita.com/gts/items/1e9c395aee83bf30e03a)** - CSRF攻撃がなぜ成立するのかを、Cookieの自動送信という基本挙動から丁寧に解きほぐした解説記事。CSRFトークンやSameSite属性がどう対策になるのかを基礎から理解できる内容。
- **[Flutterに"存在しないネイティブブリッジ"をAIに書かせて、iOS/Androidで動かすまで検証してみた](https://qiita.com/ma-shiratori/items/2d6eaea260e8d223b49b)** - 本来手作業で書く必要があるFlutterのネイティブブリッジコードをAIに生成させ、iOS/Android両方で実際に動作するところまで検証した記事。AIによるクロスプラットフォーム開発支援の実力を試している。

## AWS 新着

- **[AWS announces aws-bench, an open-source benchmark for AI agents on AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-bench/)** (2026-07-24) - AWS上で動くAIエージェントの性能を評価するOSSベンチマーク「aws-bench」が公開された。エージェントのタスク遂行能力を標準化された基準で比較できるようになる。
- **[Claude Opus 5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/claude-opus-5-aws/)** (2026-07-24) - Anthropicが発表したばかりの最新モデルClaude Opus 5が、即日Bedrock経由でAWS上から利用可能になった。モデル発表とクラウド提供のタイムラグがほぼゼロになっている。
- **[Opus 4.8, Sonnet 5, and User Activity Monitoring now available on Kiro in AWS GovCloud (US)](https://aws.amazon.com/about-aws/whats-new/2026/07/kiro-opus-sonnet-monitoring-launch-aws-govcloud-us/)** (2026-07-24) - AWSのAIコーディングツールKiroが政府機関向けGovCloud環境でもOpus 4.8・Sonnet 5系モデルとユーザー行動監視機能に対応した。コンプライアンス要件の厳しい環境でも最新のコーディングエージェントを使えるようになる。
- **[AWS Lambda now publishes logs for Lambda Managed Instances capacity providers](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-managed-instances-logs/)** (2026-07-24) - Lambda Managed Instancesのキャパシティプロバイダーのスケーリング挙動やインスタンスのライフサイクルが、CloudWatch Logsで可視化できるようになった。
- **[Amazon Kinesis Data Streams now supports scaling down ingest capacity with warm throughput](https://aws.amazon.com/about-aws/whats-new/2026/07/kinesis/on-demand-scale-down)** (2026-07-24) - オンデマンドモードのKinesis Data Streamsが、取り込みキャパシティを段階的に縮小できるようになった。従来はスケールアップのみだった挙動に、コストを抑えるための縮小経路が追加された。

## Lobsters

- **[Open Weights and American AI Leadership](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)** (11pt) - Microsoftが、オープンウェイトモデルが米国のAIリーダーシップ維持にとって重要だと主張する声明を公開した。中国発のオープンモデルへの対抗として、規制よりもエコシステムの開放性を重視すべきという立場を示している。
- **[git rebase -i is not that scary](https://cachebag.sh/journal/interactive-rebasing/)** (8pt) - `git rebase -i`を怖がって避けがちな開発者向けに、コミット履歴を整理する基本操作を段階的に解説した入門記事。慣れれば日常的なワークフローに組み込める実用的なテクニックとして紹介している。
- **[Delightful integration tests in Rust](https://github.com/alexpusch/rust-magic-patterns/blob/master/delightful-integration-tests/Readme.md)** (7pt) - Rustにおける結合テストを、セットアップの重複や状態管理の煩雑さに悩まされずに書くためのパターン集。テストコード自体の保守性を高める設計手法を紹介している。
- **[Postgres LISTEN/NOTIFY Actually Scales](https://www.dbos.dev/blog/postgres-listen-notify-scalability)** (5pt) - 「LISTEN/NOTIFYは小規模用途向け」という通説に反し、適切な設計をすれば実際には十分なスケーラビリティを持つことを実測で示した記事。専用のメッセージキューを導入する前の選択肢として再評価している。
- **[Watching Go's new garbage collector move through the heap](https://theconsensus.dev/p/2026/07/19/observing-gos-garbage-collector-old-and-new.html)** (2pt) - Goに導入された新しいガベージコレクタが、ヒープ内をどのように動作するかを可視化ツールで観測した記事。旧GCとの挙動の違いを実際のメモリ動作から比較している。

## dev.to

- **[Beyond The Single-Agent Ceiling: Scale Out With MCP Agent Teams](https://dev.to/aws-heroes/beyond-the-single-agent-ceiling-scale-out-with-mcp-agent-teams-80b)** - 単一のAIエージェントとの対話には限界があるとして、MCP経由で複数の専門エージェントをチームとして連携させるアーキテクチャを提案した記事。単体エージェントの能力天井を組織的に突破する狙い。
- **[Your Test Suite Isn't Slow. It's Accumulating Decisions](https://dev.to/mellowthunder735/your-test-suite-isnt-slow-its-accumulating-decisions-5080)** - ブラウザテストスイートが遅くなるのは突然ではなく、リトライの追加やタイムアウトの延長といった小さな「先送りの意思決定」が日々積み重なった結果だと指摘する記事。
- **[An AI Voice Agent Is Just Two Webhooks: Wiring Retell to n8n in Production](https://dev.to/nabeelbaghoor/an-ai-voice-agent-is-just-two-webhooks-wiring-retell-to-n8n-in-production-2afj)** - 音声AIエージェントの本質は「電話を受ける」部分ではなく、カレンダー確認やCRM登録など通話後に連動する処理群にあるとして、Retellとn8nを2つのWebhookだけで本番接続した実装を紹介している。
- **[How to Check SPF, DKIM, and DMARC Records in Python](https://dev.to/devyjones/how-to-check-spf-dkim-and-dmarc-records-in-python-143)** - メールの到達率を左右するSPF・DKIM・DMARCの3つのDNSレコードを、Pythonで自動チェックする方法を解説した実務記事。送信ドメインの認証設定に不備がないか手早く検証できる。
- **[A PR review agent with 2 comments beats one with 20](https://dev.to/stephanie_dover_b49c2e8d1/a-pr-review-agent-with-2-comments-beats-one-with-20-m2p)** - AIによるPRレビューエージェントは、指摘件数を競うのではなく「沈黙するバイアス」と自己検証パス、リポジトリ固有の正しさの定義を持つべきだと説く記事。ノイズの多いレビューがかえって開発者の信頼を失う問題意識に基づいている。

## TechCrunch

- **[Anthropic launches Opus 5](https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/)** - AnthropicがClaude Opus 5を発表した。従来のFableよりも低価格かつ制限が緩やかになっており、多くのユースケースで優先的に選ばれるモデルになると報じられている。
- **[Why Cognition bought Poke: AI personality is becoming a competitive advantage](https://techcrunch.com/2026/07/24/why-cognition-bought-poke-ai-personality-is-becoming-a-competitive-advantage/)** - AIコーディングスタートアップCognitionが、友人にテキストするような対話感を売りにするAIアシスタントPokeを9桁台前半の評価額で買収した。技術力だけでなく「AIの人格」が競争優位になりつつあるとの分析。
- **[OpenAI's own model went rogue before Kimi had Wall Street sweating](https://techcrunch.com/video/openais-own-model-went-rogue-before-kimi-had-wall-street-sweating/)** - 中国発のオープンモデルKimiが話題になった裏で、実はOpenAI自身のモデルが「暴走」していた件の方が米AI業界に動揺を与えていたと報じる動画記事。
- **[As US weighs response to Chinese AI, industry urges against broad open-weight restrictions](https://techcrunch.com/2026/07/24/as-us-weighs-response-to-chinese-ai-industry-urges-against-broad-open-weight-restrictions/)** - NvidiaやMistralを含むAI業界が、中国発AIやモデル蒸留への対抗策として検討されている広範なオープンウェイト規制に反対する意見を米政府に提出した。
- **[OpenAI's new voice mode makes it to the ChatGPT desktop app](https://techcrunch.com/2026/07/24/openais-new-voice-mode-makes-it-to-the-chatgpt-desktop-app/)** - OpenAIの新しい音声モードがChatGPTデスクトップアプリに搭載された。ChatGPT WorkやCodexと連携し、音声だけでタスク実行やエージェントの制御ができるようになった。

## Ars Technica

- **[Anthropic's Opus 5 is about token efficiency, not a capability leap](https://arstechnica.com/ai/2026/07/anthropics-opus-5-is-about-token-efficiency-not-a-capability-leap/)** - 新モデルOpus 5は、ベンチマークスコアの大幅な向上というより、同じタスクをより少ないトークンでこなせるようになった「効率化」が主眼だと分析した記事。性能競争の焦点がコスト効率へ移りつつあることを示唆している。
- **[Canadian legislator reads out apparent LLM response in floor speech](https://arstechnica.com/ai/2026/07/canadian-legislator-reads-out-apparent-llm-response-in-floor-speech/)** - カナダの議員が議会演説で、LLMが生成したとみられる定型的な言い回しをそのまま読み上げてしまったとみられる一件が話題になった。政治の現場にもAI生成文章が入り込み始めている実態を象徴する出来事。
- **[AI firms want more data centers; Trump's EPA may give neighbors less say](https://arstechnica.com/tech-policy/2026/07/ai-firms-want-more-data-centers-trumps-epa-may-give-neighbors-less-say/)** - AI企業によるデータセンター建設ラッシュを後押しするため、トランプ政権のEPAが周辺住民の環境影響への異議申し立て権限を弱める方向で検討していると報じられた。AIインフラ拡大が地域社会との摩擦を強めつつある。
- **[Team uses AlphaFold AI to redesign gene-editing proteins to make them safer](https://arstechnica.com/science/2026/07/team-uses-alphafold-ai-to-redesign-gene-editing-proteins-to-make-them-safer/)** - DeepMindのAlphaFoldを用いて、遺伝子編集に使うタンパク質の構造を再設計し、意図しない部位を編集してしまうオフターゲット効果を減らす研究成果が報告された。AI創薬・バイオ設計の実用化が着実に進んでいる。
- **[Forgot your Google password? Now you can log in with a selfie.](https://arstechnica.com/gadgets/2026/07/google-now-lets-you-log-into-your-account-with-a-selfie/)** - Googleが、パスワードを忘れた際に自撮り画像による本人確認でアカウントに再ログインできる新機能を導入した。生体認証をパスワードリカバリーの主要経路に据える動きが大手プラットフォームにも広がっている。

## 注目トピック

今回最大の話題は、Anthropicの新モデル「Opus 5」の発表とその即日展開だ。TechCrunchは「Fableより安価かつ制限も緩やかで多くの用途で優先されるだろう」と報じ、Ars Technicaは「ベンチマークスコアの飛躍というより、同じ精度をより少ないトークンで実現するトークン効率化が主眼」と分析している。興味深いのは展開スピードで、AWSでは発表とほぼ同時に「Claude Opus 5 is now available on AWS」および政府機関向けKiro環境でのOpus 4.8/Sonnet 5対応が発表され、モデルのリリースからクラウド提供までのタイムラグがほぼ消滅している。AWSは同時に、AIエージェントの性能を測るOSSベンチマーク「aws-bench」も公開しており、モデル競争の主戦場が「賢さ」から「効率」と「計測可能性」に移りつつある様子がうかがえる。

もう一つの軸は、Claude Codeをはじめとするコーディングエージェントの「使いこなし方」そのものが記事の題材になっていることだ。はてなブックマークでは企業導入事例からSkills活用ランキングをまとめた記事が128usersを集め、Zennでは`/loop`機能で2時間おきにエージェントを起動し非同期にVS Code拡張を育てる実践や、LinearとClaude Code・GitHubを連携させてタスク管理を自動化する開発フローが読まれた。dev.toでも、単一のAIエージェントの限界をMCP経由の複数エージェント連携で突破しようとする提案や、PRレビューエージェントは指摘件数を絞る「沈黙するバイアス」を持つべきだという指摘があり、エージェントを本番の開発フローにどう組み込むかという実践知見が、モデル自体の性能競争と並行して蓄積されつつある段階に入っていると言える。
