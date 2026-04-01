---
title: "Tech Feed ダイジェスト（2026年4月1日）"
date: "2026-04-01T10:14"
category: "summary"
summary: "Mercor/LiteLLM侵害連鎖・メルカリAIポリシー公開・Ollama MLX高速化・Slack AI大改造・OpenSearch agentic AI・Pidgin/Gaim復活"
tags: ["security", "ai", "aws", "frontend", "devops", "rust", "llm", "mcp", "postgresql", "supply-chain"]
---

## はてなブックマーク (テクノロジー)

- **[メルカリグループ AI活用基本ポリシー](https://about.mercari.com/ai-policy/)** ([251users](https://b.hatena.ne.jp/entry/s/about.mercari.com/ai-policy/)) - メルカリグループが社内外のAI活用に関する基本ポリシーを公開。生成AI利用における倫理的ガイドライン・データプライバシー保護・人間によるレビュー義務づけなどが明文化されており、国内テック企業のAIガバナンス整備事例として参照価値が高い。

- **[LINEヤフー、出社を「原則週3回」に引き上げへ　新「赤坂オフィス」開設](https://www.itmedia.co.jp/news/articles/2604/01/news075.html)** ([145users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2604/01/news075.html)) - LINEヤフーがリモートワーク主体から週3日出社を原則とする方針に転換し、赤坂に新オフィスを開設する。コラボレーション強化とエンジニア文化の維持を目的とするとしているが、採用競争力への影響も含めた議論が起きている。

- **[「人間用ホームページやめました」インターリンクがコーポレートサイトをMarkdown記法に](https://internet.watch.impress.co.jp/docs/news/2098077.html)** ([97users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/news/2098077.html)) - ISP大手のインターリンクが、自社コーポレートサイトをAIエージェントが読みやすいMarkdown形式で公開するという実験的決断を下した。人間向けデザインより機械可読性を優先するという選択は、AIクローラー・エージェントが主要な「閲覧者」となる未来を見越した先行事例として注目される。

- **[2400億円超の架空取引はなぜ起きた、KDDIがビッグローブらの不正実態と再発防止策を説明](https://k-tai.watch.impress.co.jp/docs/news/2097996.html)** ([142users](https://b.hatena.ne.jp/entry/s/k-tai.watch.impress.co.jp/docs/news/2097996.html)) - KDDIグループで発覚した2400億円超の架空取引について、ビッグローブを中心とした不正の構造と内部統制の失敗要因が詳報された。IT企業における大規模不正会計の仕組みと、監査・ガバナンス体制の脆弱性を理解する上で読み応えのある内容だ。

- **[ローカルAIを活用したら、大量のサブスクが解約できたぞ！](https://www.lifehacker.jp/article/2603-gave-local-llm-access-to-files-replaced-three-apps/)** ([135users](https://b.hatena.ne.jp/entry/s/www.lifehacker.jp/article/2603-gave-local-llm-access-to-files-replaced-three-apps/)) - ローカルLLMにファイルアクセスを与えることで、文書整理・要約・テキスト変換など3つのSaaSの機能を代替できたという実体験レポート。プライバシーを守りながらコストを下げるローカルAI活用の具体的なユースケースが示されており、ツール見直しの参考になる。

## Zenn

- **[逆引き Rust Web API 開発: Axum で学ぶ実践パターン](https://zenn.dev/sbk0716/books/70b401fac4005d)** - ヘルプデスクアプリの実コードをベースに、Rust/Axumによる REST API 開発の典型パターンを逆引き形式で解説した書籍。ルーティング・Extractor・State・エラーレスポンスなど実務頻出のトピックが整理されており、Rustでサーバーサイドを書き始めた開発者の参照先として有用だ。

- **[Web 標準動向 2026年3月版](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202603)** - サイボウズのW3C参加エンジニアが3月のWeb標準動向をまとめた月例レポート。CSS・HTML・JavaScriptの仕様変更案・実装状況・ブラウザ間の差分などが整理されており、フロントエンド開発者が標準化の最前線を追う定点観測として機能する。

- **[モノレポのローカル開発環境をDockerからmiseに移行して起動速度を75%改善した](https://zenn.dev/hrbrain/articles/local-development-docker-to-mise)** - 30以上のマイクロサービスを抱えるHRBrainが、ローカル開発環境のオーケストレーションをDocker/Tiltからバージョン管理ツール「mise」ベースの構成に移行した事例。起動時間が75%短縮され、開発者体験が大幅に向上したプロセスと設定の詳細が公開されている。

- **[Ubieにおける一年間のセキュリティ分析AIエージェントの運用](https://zenn.dev/ubie_dev/articles/ai-sec-alert-ops)** - ヘルスケアスタートアップUbieが、EDR・WAF・クラウドセキュリティサービスのアラートをAIエージェントで自動トリアージする仕組みを約1年運用した知見をまとめた記事。誤検知率・運用コスト・エージェントの限界など、実稼働データに基づく率直な評価が共有されている。

- **[自己流「ハーネスエンジニアリング」からの脱却](https://zenn.dev/knowledgesense/articles/22eac0ba8cada3)** - AIエージェントの性能を左右する「ハーネス」（プロンプト・ツール・評価系の設計全体）を自然言語で統一的に記述する手法「NLAH（Natural-Language Agent Harnesses）」の論文ベースの解説。エージェントのプロンプト設計を属人的なアドホック作業から体系化された工学的プロセスに昇華させる視点が提供されている。

## Qiita

- **[【35歳未経験でも理解できた】破綻しないCSS設計の基本](https://qiita.com/wata-sho/items/81ddcadc785a6498d10f?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - BEM・FLOCSS・CSSモジュールなどの設計手法を未経験者目線でわかりやすく整理した記事。命名規則の背景にある思想・スコープ管理の理由・ファイル分割の指針が実例とともに解説されており、CSS設計の入り口として機能する。

- **[Geminiで学会発表レベルの綺麗なスライド資料を作ろう](https://qiita.com/zakuro/items/6bb67ea89fb6e2074203?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Google GeminiをプレゼンテーションスライドのデザインとコンテンツBlock生成に活用するワークフローの実践解説。Geminiへの指示の構造化・テンプレートの使い方・出力の品質向上テクニックが示されており、資料作成の時間短縮に直結するユースケースとして注目を集めている。

- **[Windows TerminalでDBに接続する時に色変えたい](https://qiita.com/ynaru-yzrh/items/4b7a87438b4c3ff674f3?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Windows Terminal のプロファイルごとに背景色・テーマを変更して「本番DB接続中」を視覚的に分かりやすくする設定方法を解説。単純なTIPSだが、本番誤操作防止の実践例として多くのエンジニアが共感を示している。

## AWS 新着

- **[Amazon CloudWatch now supports ingesting Security Hub CSPM findings](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-securityhub-findings/)** (Mar 31) - Security HubのCSPM（クラウドセキュリティ態勢管理）検出結果をCloudWatch Logsに直接取り込めるようになった。セキュリティ所見とパフォーマンスメトリクス・ログを同一基盤で横断分析できるようになり、セキュリティ運用の一元化が進む。

- **[AWS launches Sustainability console for carbon emissions tracking](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-launches-sustainability-console/)** (Mar 31) - AWSの利用に関連するカーボン排出量を可視化・追跡する無料の「Sustainability console」が登場。従来の「Customer Carbon Footprint Tool」を拡張したスタンドアロンサービスとして提供され、ESG報告・グリーン調達の根拠データ収集が容易になる。

- **[Amazon OpenSearch Service introduces agentic AI for log analytics](https://aws.amazon.com/about-aws/whats-new/2026/03/opensearch-agentic-ai-log-analytics-observability/)** (Mar 31) - OpenSearch Serviceがログ分析向けのアジェンティックAI機能を導入。自然言語でログへの問い合わせ・インシデント調査・異常原因の仮説生成ができるようになり、従来はSQLやLuceneクエリの知識が必要だった調査作業のハードルが大幅に下がる。

- **[AWS IAM Identity Center is now available in AWS European Sovereign Cloud (Germany) Region](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-iam-identity-center-european-sovereign-cloud-germany-region/)** (Mar 31) - EUデータ主権要件に特化した「AWS European Sovereign Cloud（ドイツリージョン）」でIAM Identity Centerが利用可能になった。EU外へのデータ移転を禁止する規制環境でも、シングルサインオン・権限管理の一元化が実現できる。

- **[Amazon SageMaker Unified Studio adds Observability for AWS Glue jobs via CloudWatch metrics](https://aws.amazon.com/about-aws/whats-new/2026/03/sagemaker-unified-studio-metrics/)** (Mar 31) - SageMaker Unified StudioのQuery Editor画面にGlueジョブのCloudWatchメトリクスが統合表示されるようになった。ジョブログとパフォーマンス指標を画面遷移なく確認できるようになり、データエンジニアのETLデバッグ効率が向上する。

## Lobsters

- **[Gaim 3 Exists](https://gaim.imfreedom.org/)** - かつてLinuxのIMクライアントとして一世を風靡したGaimの後継プロジェクト「Gaim 3」が静かに開発継続中であることが判明した。Pidgin 3.0 Alpha 1のリリースと合わせて、libpurpleベースのマルチプロトコルIM基盤が2026年も生き続けていることをオープンソースコミュニティが再発見し注目を集めている。

- **[Historical GitHub Uptime Charts](https://damrnelson.github.io/github-historical-uptime/)** - GitHubの過去の稼働率データを時系列グラフで可視化したページ。大規模障害の発生パターン・年次トレンド・特定機能（Actions・API・Pagesなど）ごとの信頼性比較ができ、SLAや依存リスクを議論する際の客観的データとして活用できる。

- **[your hex editor should color-code bytes](https://simonomi.dev/blog/color-code-your-bytes/)** - バイナリファイルをヘックスエディタで読む際に、バイト値の意味（NUL・ASCII印刷可能文字・高バイト等）に応じて色分け表示するべきという論考。既存ツールの欠点を指摘しながら、低レイヤー開発者の認知負荷を下げるUI設計の提案として共感を呼んでいる。

- **[The Self-Cancelling Subscription](https://predr.ag/blog/the-self-cancelling-subscription/)** - SaaSサービスの解約フローが意図的に複雑化・隠蔽されている問題をエンジニア視点で論じたエッセイ。「解約を試みると自動的に割引オファーが出て再登録になる」という仕掛けの技術的実装と、ダークパターンとして糾弾されるべき理由が述べられており、プロダクト設計の倫理議論の材料になる。

- **[I Made a Keyboard Nobody Asked For: My Experience Making TapType](https://fireborn.mataroa.blog/blog/i-made-a-keyboard-nobody-asked-for-my-experience-making-taptype/)** - 「TapType」という独自配列キーボードを個人で設計・製造した記録。ハードウェア設計・ファームウェア開発・量産の壁・ユーザーへの普及の難しさが正直に記録されており、個人ハードウェアプロジェクトのリアルを伝える読み応えのある開発日誌だ。

## dev.to

- **[The AI Agent Framework Wars Are Over. Here's Who Won (And Why It Doesn't Matter)](https://dev.to/tahseen_rahman/the-ai-agent-framework-wars-are-over-heres-who-won-and-why-it-doesnt-matter-32o6)** - LangChain・AutoGen・CrewAI・LlamaIndexなどAIエージェントフレームワーク群の優勝劣敗を整理したうえで「フレームワークの選択自体はもはや重要ではなく、エージェントのタスク設計とハーネス品質が本質」と論じた記事。2026年3月時点のエージェントフレームワーク勢力図を把握するのに適した概観記事だ。

- **[Build Your First A2A Agent Pair in Python (15 Minutes, No Cloud Required)](https://dev.to/peytongreen_dev/build-your-first-a2a-agent-pair-in-python-15-minutes-no-cloud-required-107e)** - 2026年3月にv1.0に達したGoogleのA2A（Agent-to-Agent）プロトコルを使い、2つのAIエージェントがタスクを相互委譲するシステムをPythonでローカル構築するチュートリアル。エージェント間通信の標準化を狙うA2Aの実用性を手短に体験できる入門コンテンツとして注目される。

- **[Wait Event Heatmaps: See What PostgreSQL Is Actually Waiting On](https://dev.to/philip_mcclarence_2ef9475/wait-event-heatmaps-see-what-postgresql-is-actually-waiting-on-2339)** - PostgreSQLのWait Eventをヒートマップで可視化する手法の解説。CPU・メモリが正常でもクエリが遅い場合に、ロック競合・I/O待ち・バッファ待ちなど隠れたボトルネックを発見する具体的な観測アプローチを提供しており、パフォーマンスチューニングの新しい視点として有用だ。

- **[How I Built a 55-Tool MCP Server That Runs an Entire Business](https://dev.to/frihet/how-i-built-a-55-tool-mcp-server-that-runs-an-entire-business-36f3)** - 自社ERPのREST APIの上にMCP（Model Context Protocol）サーバーを構築し、請求書・経費・顧客・税務などの業務オペレーションを55ツールのMCPサーバー経由でAIエージェントに操作させる構成を解説した実装記録。MCPが単なるデモ用途を超えて基幹業務統合に使われ始めた先進事例だ。

- **[Context Is All You Have: How LLM Attention Actually Works](https://dev.to/cumulus/context-is-all-you-have-how-llm-attention-actually-works-1ph7)** - 「128kトークンのコンテキストウィンドウ」という数字の裏側にあるアテンション機構の実際の動作を、プロダクト開発者向けにわかりやすく解説した記事。なぜ長いコンテキストでも「忘れる」現象が起きるのか、RAGとの使い分け判断をどうするかのメンタルモデルが整理されている。

## TechCrunch

- **[Mercor says it was hit by cyberattack tied to compromise of open-source LiteLLM project](https://techcrunch.com/2026/03/31/mercor-says-it-was-hit-by-cyberattack-tied-to-compromise-of-open-source-litellm-project/)** - AI採用スタートアップのMercorが、オープンソースのAI APIゲートウェイ「LiteLLM」の侵害を起点とするサイバー攻撃を受けデータを窃取されたことを確認した。LiteLLM→Mercorという多段階サプライチェーン攻撃の連鎖は、LLMアプリケーションスタック固有のリスクとして開発者コミュニティに広く警鐘を鳴らしている。

- **[Salesforce announces an AI-heavy makeover for Slack, with 30 new features](https://techcrunch.com/2026/03/31/salesforce-announces-an-ai-heavy-makeover-for-slack-with-30-new-features/)** - SalesforceがSlackに30以上のAI機能を一挙追加した。会議メモの自動生成・チャンネル横断の質問応答・ワークフロー自動化のAIアシストなどが含まれており、コミュニケーションプラットフォームが「会話インターフェース付きAIエージェント基盤」へと変容しつつある方向性が明確になった。

- **[Anthropic is having a month](https://techcrunch.com/2026/03/31/anthropic-is-having-a-month/)** - Claude Code ソースコード流出事件に続いて同月2度目となる内部インシデントが発生したとTechCrunchが報じた。記事では具体的なインシデントの詳細よりも「急成長スタートアップにおけるセキュリティ文化の成熟度」という構造的課題にフォーカスしており、AIラボのガバナンス議論の材料となっている。

- **[It's not your imagination: AI seed startups are commanding higher valuations](https://techcrunch.com/2026/03/31/its-not-your-imagination-ai-seed-startups-are-commanding-higher-valuations/)** - 最新のYCバッチでは多くのAIスタートアップが4000万ドル前後のシード評価額を命じており、それが常態化しつつある実態をTechCrunchが分析。高バリュエーションには高い成長期待が紐づくため、資金調達後の執行プレッシャーが従来以上に高まっているという警告も含まれている。

- **[Yupp shuts down after raising $33M from a16z crypto's Chris Dixon](https://techcrunch.com/2026/03/31/yupp-ai-shuts-down-33m-a16z-crypto-chris-dixon/)** - AIモデルのフィードバックをクラウドソーシングするスタートアップ「Yupp」が、a16zのChris Dixonから3300万ドルを調達後1年未満でサービス終了。AIモデル評価のクラウドソーシングという市場仮説の検証失敗として、AI投資の選別が進む現状を示している。

## Ars Technica

- **[Running local models on Macs gets faster with Ollama's MLX support](https://arstechnica.com/apple/2026/03/running-local-models-on-macs-gets-faster-with-ollamas-mlx-support/)** - OllamaがAppleのML加速フレームワーク「MLX」のサポートを追加し、Apple SiliconのMac上でローカルLLM推論が大幅に高速化された。Metal経由のGPU活用が最適化されたことで、M3/M4チップ搭載Macでのモデル実行がクラウドAPIに匹敵する応答速度に近づきつつある。

- **[Starlink satellite breaks apart into "tens of objects"; SpaceX confirms "anomaly"](https://arstechnica.com/tech-policy/2026/03/starlink-satellite-breaks-apart-into-tens-of-objects-spacex-confirms-anomaly/)** - SpaceXがStarlinkの1基が軌道上で「数十個の物体」に分解したアノマリーを公式確認した。低軌道における宇宙デブリ問題への懸念が改めて高まっており、Starlink群の運用密度増加とデブリ管理のトレードオフに関する規制議論が再燃する可能性がある。

- **[You can finally change the goofy Gmail address you chose years ago](https://arstechnica.com/gadgets/2026/03/you-can-finally-change-the-goofy-gmail-address-you-chose-years-ago/)** - Googleが長年ユーザーから要望されていたGmailアドレス変更機能を段階的に提供開始した。既存のメール履歴・連絡先・サービス連携を維持しながらアドレスを変更できる仕組みで、ID管理の柔軟性という観点から技術実装にも興味が持たれている。

## 注目トピック

今回の注目トレンドは、**LLMツールチェーンを標的にしたサプライチェーン攻撃の多段化**だ。axios侵害→LiteLLM侵害→Mercorデータ窃取という連鎖が示すように、攻撃者はオープンソースのAIインフラ層（APIゲートウェイ・依存ライブラリ）を踏み台として上位のAIアプリケーションを攻撃する手法を確立しつつある。LLMアプリケーション開発者は依存パッケージの来歴審査だけでなく、AIゲートウェイ・SDKレイヤーのサプライチェーンリスクを新たなセキュリティ境界として意識する必要がある。

もう一つの潮流は**AIエージェント基盤の実用化加速**だ。AWSのOpenSearch agentic AI・GoogleのA2Aプロトコルv1.0・Slackの30機能AI統合・MCPを使った基幹業務統合など、AIエージェントが「デモ段階」から「本番稼働するインフラ」へと移行している具体的な事例が各所から報告されている。同時に、Ubie・HRBrainなどの国内企業がローカルな技術的知見を公開し始めており、エージェント設計のベストプラクティスが蓄積・共有されるフェーズに入ったことを示している。
