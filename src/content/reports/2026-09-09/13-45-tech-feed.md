---
title: "Tech Feed ダイジェスト（2026年9月9日）"
date: "2026-09-09T13:45"
category: "summary"
summary: "Linuxカーネルを蝕むAI生成パッチ、Uberのpostgres→MySQL移行、Microsoftの過去最大パッチ、Claudeトークン窃取など8ソースを横断"
tags: ["security", "ai", "aws", "devops", "rust", "frontend", "oss"]
---

## はてなブックマーク (テクノロジー)

- **[OpenAI、ミレニアム懸賞問題「ナビエ・ストークス方程式」をAIが解決したと発表　数学者は経緯に反発](https://www.itmedia.co.jp/news/article/2609/09/2000001300/)** ([88users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2609/09/2000001300/)) - OpenAIが100万ドルの懸賞金がかかるミレニアム懸賞問題の一つ、ナビエ・ストークス方程式の解の存在と滑らかさに関する部分的成果をAIで導いたと発表。ただし査読前の主張であり、証明の妥当性や発表プロセスを巡って数学者コミュニティから反発が出ている。
- **[深刻化する"サイバー蝗害"―Linuxカーネルソースに群がる貪欲で超非効率な「AIイナゴ」たち](https://gihyo.jp/article/2026/09/daily-linux-260909)** ([78users](https://b.hatena.ne.jp/entry/s/gihyo.jp/article/2026/09/daily-linux-260909)) - Linuxカーネルのメーリングリストやバグトラッカーに、AIが自動生成した低品質なパッチ・バグ報告が大量に投稿され、メンテナのレビュー工数を圧迫している実態をレポート。OSSの査読プロセスがAI生成コンテンツの物量にどう耐えるかという構造的課題を提起している。
- **[「なぜ動くのか」を説明できるエンジニアへ。自作で学ぶWebアプリケーション研修教材を公開](https://tech.speee.jp/entry/2026/09/09/133550)** ([49users](https://b.hatena.ne.jp/entry/s/tech.speee.jp/entry/2026/09/09/133550)) - Speeeが新人研修向けに自作したWebアプリケーション教材を公開。フレームワークに頼らず、HTTPサーバーやルーティングの仕組みを自作させることで「なぜ動くのか」を説明できるレベルの理解を目指す構成が特徴。
- **[Why Uber Engineering Switched from Postgres to MySQL](https://www.uber.com/in/en/blog/postgres-to-mysql-migration/)** ([37users](https://b.hatena.ne.jp/entry/s/www.uber.com/in/en/blog/postgres-to-mysql-migration/)) - UberがPostgreSQLからMySQLへ移行した経緯を解説する公式ブログ。レプリケーションの信頼性やスキーマ変更のオンライン実行など、大規模運用で直面したPostgreSQL固有の課題が移行の主因として挙げられている。
- **[アーキテクチャ図を念頭に置いて設計された斬新な自動レイアウトアルゴリズム「TALA」がオープンソース化](https://gigazine.net/news/20260909-tala-is-open-source/)** ([20users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260909-tala-is-open-source/)) - システム構成図など人間が読みやすいアーキテクチャ図に特化した自動レイアウトアルゴリズム「TALA」がOSS化。一般的なグラフ描画アルゴリズムと異なり、階層構造や視線の流れを考慮したレイアウトを自動生成する点が特徴。

## Zenn

- **[React 19移行で学んだpnpmの依存関係解決の仕組み](https://zenn.dev/dress_code/articles/vite-monorepo-react-dedupe)** - pnpm workspace + Viteのモノレポで一部アプリのみReact 19に更新した際、React 18のアプリでも謎の不具合が発生した事例。pnpmの依存解決とVagueなpeerDependency解決の仕組みを掘り下げて原因を突き止めている。
- **[Herdr × git worktree × Claude Codeの相性がいい話](https://zenn.dev/gemcook/articles/herdr-worktree-parallel)** - Claude Codeを複数並行実行する際、同一作業ディレクトリだとgit switchでファイルが競合する問題をgit worktreeで解決する構成を紹介。worktree作成の手間を解消するツール「Herdr」の使い方も併せて解説。
- **[HTMLを社内共有するサービスを、コードを読まずに作る - 1人で25万行を回す自動運用の記録](https://zenn.dev/coji/articles/solo-software-factory-without-reading-code)** - コードを読まずにAIに実装させる方針で開発したWebサービスが、開発4ヶ月でTypeScript 25万行・PR1144本に達した記録。仕様とレビューのループをどう設計してAI駆動開発を破綻させずに回したかが本題。
- **[godot-llm-gamebench: gemini-3.8-flashはEffortによってどのように性能が変わるのか](https://zenn.dev/oubakiou/articles/028194eb2b269f)** - Godotミニゲーム実装をLLMに外注させるベンチマークシリーズの一環として、Gemini 3.8 Flashのreasoning effort（low/medium/high）ごとの実装成功率とコストを比較検証。
- **[【情シスのSkill】ドメインを渡すだけでメール基盤/SPF/DKIM/DMARCを棚卸しするSkill](https://zenn.dev/genda_jp/articles/6c9ea779e7dae9)** - 情シス担当者の勘や経験に頼っていたSPF/DKIM/DMARCの設定確認作業を、Claude Skillとしてドメイン名だけで自動棚卸しできるように定型化した事例。

## Qiita

- **[パスキーでも被害に遭うデバイスコードフロー攻撃とは？ ～ Entra ID での防御と検証方法を解説](https://qiita.com/carol0226/items/c9cccdd64e71a731a58d)** - パスキー導入済みでも、デバイスコードフローを悪用したフィッシング攻撃には引っかかりうるという盲点を、Entra IDでの再現手順と防御策を交えて解説。
- **[Terraform で AWS に「うっかり全公開」しないための最低限のセキュリティ設計](https://qiita.com/kkkkkou/items/0358cb36e1fab3dd9294)** - S3のpublic公開やSecurity Groupの0.0.0.0/0全開放、IAMの`*:*`許可といった典型的な「うっかり全公開」事故を、TerraformのIaCレベルでどう防ぐかを具体的な設定例とともに整理。
- **[MCPサーバーを1つ作って分かった、「MCP対応」の前にやること｜業務システム56件・MCP提供は25.0%](https://qiita.com/songchong/items/8b48962aa6d5408abe86)** - 業務システム56件のMCP対応状況を一次仕様書ベースで調査したところ提供率は25%にとどまるという実態を示しつつ、実際にMCPサーバーを1つ実装してみて分かった導入前の検討ポイントをまとめている。
- **[超低レベルC言語プログラミング・三流エンジニア（私）のくだらないこだわり](https://qiita.com/metalaomishi/items/2042d48f9700ccf42e6f)** - 組み込みソフトウェア開発の経験から、ビット演算やメモリレイアウトを意識した低レベルC言語の書き方に対するこだわりを紹介。可読性と実行効率のトレードオフに関する実務的な視点が中心。
- **[GPT-5.6 Lunaを2ヶ月使い倒した結果、ガチでコスパ最強だった](https://qiita.com/nolanlover0527/items/b019a99daaca6687cdf7)** - GPT-5.6シリーズ最安モデル「Luna」をコーディングやコード調査、資料作成で2ヶ月実務利用した検証レポート。最安モデルでどこまで実用に耐えるかをタスク別に評価している。

## AWS 新着

- **[OpenAI GPT-6 Astra is now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-astra-on-amazon-bedrock/)** (2026年9月8日) - OpenAIの最新最高性能モデルGPT-6 AstraがAmazon Bedrockで一般提供開始。高度な推論・判断力に加え、コンピュータ操作やブラウザ操作機能もBedrock経由で利用可能になった。
- **[Amazon Bedrock AgentCore Memory now supports direct ingestion to long-term memory](https://aws.amazon.com/about-aws/whats-new/2026/09/agentcore-memory-direct-ingest)** (2026年9月8日) - AgentCore Memoryが、短期記憶イベントとして永続化せずにコンテンツを直接長期記憶へ取り込める新API「IngestData」を追加。エージェントの記憶戦略への振り分けを短期記憶を経由せず行えるようになった。
- **[Amazon API Gateway now supports mutual TLS for backend integrations](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-api-gateway-mutual-tls-backend/)** (2026年9月8日) - API Gateway REST APIがバックエンドとのTLSハンドシェイクでACM証明書を提示できるようになり、mTLS（相互TLS認証）に対応。従来は自己署名証明書しか使えなかった制約が解消された。
- **[AWS announces Nx Plugin for AWS for scaffolding full-stack applications](https://aws.amazon.com/about-aws/whats-new/2026/09/nx-plugin-for-aws/)** (2026年9月8日) - フルスタックアプリのスキャフォールディングを行うOSSツールキット「Nx Plugin for AWS」がv1.0で正式リリース。AIアシスタントが数分でアプリを立ち上げつつ、セキュリティ・可観測性・型安全性を最初から作り込めるよう設計されている。
- **[Amazon S3 Object Lock now supports variable retention with event holds](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-object-lock-variable-retention/)** (2026年9月8日) - S3 Object LockがWORM保護の保持期間を「契約締結」「監査完了」などの将来イベント発生時点から起算する可変保持（イベントホールド）に対応。固定日数指定できないケースでのコンプライアンス要件に対応する。

## Lobsters

- **[Switching Password Managers in 2026](https://rmondello.com/2026/09/07/switching-password-managers-2026/)** (80pt) - 長年使ってきたパスワードマネージャーからの乗り換えを検討する際の評価軸を整理した記事。パスキー対応や相互運用性、ベンダーロックインのリスクなど、2026年時点でのパスワードマネージャー選定基準を論じている。
- **[How to build a f\*\*king printer](https://nishantjosh.dev/blogs/how-to-build-a-fking-printer/)** (71pt) - 家庭用プリンタのファームウェアとネットワークプロトコルをリバースエンジニアリングし、C++でゼロから独自のプリンタドライバ・制御スタックを構築した記録。プリンタ業界特有の不透明なプロトコル仕様との格闘記。
- **[Extreme Server Side Rendering](https://www.scd31.com/posts/extreme-server-side-rendering)** (55pt) - サーバーサイドレンダリングの概念を極限まで推し進め、ブラウザの描画そのものをサーバー側で行い結果をストリーミングするという実験的アプローチを紹介。SSRの設計思想を再考させる内容。
- **[How to get a free .arpa domain](https://hawksley.dev/blog/get-free-arpa-domain/)** (45pt) - IPアドレスの逆引き用に予約されている`.arpa`ドメインを、正規の手続きで無料取得する方法を解説。DNSの逆引きゾーン管理の仕組みを実践的に学べる内容になっている。
- **[Reverse engineering my e-scooter and rewriting the firmware in rust](https://bensimms.moe/reverse-engineering-scooter/)** (33pt) - 電動キックスケーターのファームウェアをリバースエンジニアリングし、Rustで独自ファームウェアに置き換えた記録。モーター制御やBLE通信プロトコルの解析プロセスを詳細に記している。

## dev.to

- **[20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii)** - エージェント、ツール呼び出し、オーケストレーション、MCPなど、急速に増えたエージェント型AI関連用語20個を平易に解説した用語集。用語の乱立に置いていかれがちな開発者向けの整理記事。
- **[Mix and Match: One Agent, Three Clouds, One Protocol](https://dev.to/gde/mix-and-match-one-agent-three-clouds-one-protocol-4e5l)** - 同一のリサーチエージェントをGoogle ADK on Cloud Run、Strands on Bedrock AgentCore、Agent Framework on Container Appsの3通りで構築し、A2A v1.0プロトコルで相互接続する検証。プラットフォーム間で何が標準化され何が差分として残るかを整理している。
- **[Interactive AI Eval Dashboards with Data Studio](https://dev.to/googleai/interactive-ai-eval-dashboards-with-data-studio-1kl9)** - AI評価（Eval）の設計・分析・可視化をテーマにしたシリーズの最終回。評価結果をData Studioでインタラクティブなダッシュボードとして可視化する具体的な実装手順を紹介している。
- **[Claude Fable 5.1 is now available on Agent Platform!](https://dev.to/googleai/claude-fable-51-is-now-available-on-agent-platform-1b16)** - AnthropicのClaude Fable 5.1が、Google CloudのAgent Platform上のModel Gardenで正式に利用可能になったことを告知する記事。マルチエージェント構築向けの位置付けが強調されている。
- **[Gemini Agentic Video Isn't Always Cheaper: A 24-Run Benchmark](https://dev.to/gde/gemini-agentic-video-isnt-always-cheaper-a-24-run-benchmark-4ge3)** - Gemini 3.7 Flashのエージェント型動画処理について24回の実行でコストを比較検証したベンチマーク。長尺動画検索には強い一方、常に安いとは限らないという条件付きの結論を導いている。

## TechCrunch

- **[Hackers are stealing Claude tokens from subscribers](https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers/)** - Claudeユーザーが自分の操作なしにトークンを消費されていることに気づいた事例をきっかけに発覚した、サブスクリプショントークンの窃取被害。Anthropicはユーザーに対しハッカーへの注意喚起を行っている。
- **[Group of bipartisan lawmakers ask US government to ban several hack-for-hire firms](https://techcrunch.com/2026/09/09/group-of-bipartisan-lawmakers-ask-us-government-to-ban-several-hack-for-hire-firms/)** - 超党派の米議員グループが、訴訟を有利に進める目的でハッカーを雇い情報を窃取したとされるインドの民間ハッキング業者数社について、米政府に取引禁止を求めた。
- **[Sequoia doubles down on Cymphony as AI agents create new enterprise security risks](https://techcrunch.com/2026/09/09/sequoia-doubles-down-on-cymphony-as-ai-agents-create-new-enterprise-security-risks/)** - AIエージェントの企業導入が新たなセキュリティリスクを生んでいることを背景に、SequoiaがAIエージェントセキュリティ企業Cymphonyへの投資を積み増した。評価額は1億ドル超、シリーズAは2500万ドル規模。
- **[Besxar is building an orbital semiconductor factory, one SpaceX rocket at a time](https://techcrunch.com/2026/09/09/besxar-is-strapping-advanced-chip-fabs-onto-spacexs-falcon-9-rockets/)** - 微小重力環境を利用した半導体製造を目指すスタートアップBesxarが、SpaceXのFalcon 9ロケットに半導体工場を搭載し軌道上での製造・帰還を行う計画を進めている。
- **[Suno replaces its AI models with a new one trained on licensed music as copyright suits pile up](https://techcrunch.com/2026/09/09/suno-replaces-its-ai-models-with-a-new-one-trained-on-licensed-music-as-copyright-suits-pile-up/)** - 音楽生成AI大手Sunoが、著作権侵害訴訟の増加を受け、過去モデルの学習に使われた楽曲を含まない新モデル「Suno v6」に切り替えると発表。ライセンス済み楽曲のみで学習した点を強調している。

## Ars Technica

- **[Why this month's Microsoft patch release is a doozy](https://arstechnica.com/security/2026/09/microsoft-patches-a-record-972-vulnerabilities-112-of-them-critical/)** - Microsoftが過去最多となる972件の脆弱性（うち112件がクリティカル）を修正する月例パッチをリリース。AI支援による攻撃の増加を見越し、セキュリティ担当者がパッチ適用に追われている状況を報じている。
- **[LG TV shown scanning LAN for third-party phones and other devices](https://arstechnica.com/gadgets/2026/09/lg-tv-shown-capable-of-tracking-user-activity-even-when-offline/)** - LG製スマートTVが、画面オフ時でもLAN内をスキャンし他社製スマートフォンなどのデバイスを検出していたことが判明。オフライン時でもテキストデータの保存コストが低いため常時収集が行われている実態を報じている。
- **[Top chipmakers embrace ASML's $400M machines, agree to crucial chipmaking change](https://arstechnica.com/gadgets/2026/09/top-chipmakers-embrace-asmls-400m-machines-agree-to-crucial-chipmaking-change/)** - 主要半導体メーカーがASMLの1台4億ドルの新型露光装置導入に合わせ、製造プロセスの重要な変更に合意。この変更により新型機の生産性が最大40%向上する見込み。
- **[Framework responds to complaints that BIOS update bricks Ryzen 7040 laptops](https://arstechnica.com/gadgets/2026/08/framework-responds-to-complaints-that-bios-update-bricked-ryzen-7040-laptops/)** - Frameworkノートパソコンの BIOSアップデートがRyzen 7040搭載機を起動不能にする不具合が発生。Frameworkは保証期間外のAMDマザーボードについても交換対応することを表明している。
- **["Trust, not features, is the real deficit": VMware tries to appease SMBs](https://arstechnica.com/information-technology/2026/09/trust-not-features-is-the-real-deficit-vmware-tries-to-appease-smbs/)** - Broadcom傘下のVMwareが、中小企業向け施策でVCF（VMware Cloud Foundation）への過度な注力を認め軌道修正を図っている。買収後の値上げや契約変更で失った信頼の回復が最大の課題になっている。

## 注目トピック

今回横断して目立ったのは、AIエージェント関連の「配管」がクラウド各社で急速に整備されている動きだ。AWSのBedrock AgentCore Memoryの直接取り込みAPI、dev.toで報告されたA2Aプロトコルによるマルチクラウド・エージェント接続の実験、Google Agent PlatformへのClaude Fable 5.1提供など、単一モデルの性能競争から「エージェントをどう相互接続・記憶させるか」という基盤整備のフェーズに移りつつある。一方でその足元では、Linuxカーネルへの低品質なAI生成パッチの氾濫や、Claudeサブスクリプショントークンの窃取被害など、AIの普及がOSSの査読プロセスやセキュリティ境界に新たな負荷をかけている実態も並行して報告されている。

セキュリティ面ではMicrosoftの過去最大規模のパッチ公開が象徴的で、AI支援攻撃の増加を見越した防御側の対応強化が世界的な潮流になっていることがうかがえる。またOpenAIによるミレニアム懸賞問題への挑戦のように、AIの研究成果を巡って査読プロセスや発表の妥当性そのものが議論の的になるケースも増えており、AIの技術的進歩とその検証可能性のギャップが今後さらに焦点化していきそうだ。
