---
title: "Tech Feed ダイジェスト（2026年3月29日）"
date: "2026-03-29T09:50"
category: "summary"
summary: "ChatGPT引き継ぎ術1037ブクマ・GoのBCE最適化・OpenAI Codexプラグイン・YC W26・BubbleWrapエージェント隔離・claude-peers-MCP"
tags: ["ai", "llm", "claude", "go", "security", "aws", "devtools", "frontend", "agents", "startup"]
---

## はてなブックマーク (テクノロジー)

- **[ChatGPTが長いチャットで重くなったときに使っている「引き継ぎプロンプト」](https://qiita.com/SatoRyota_zvc/items/c392f0804987593dc179)** ([1037users](https://b.hatena.ne.jp/entry/s/qiita.com/SatoRyota_zvc/items/c392f0804987593dc179)) - 長期会話でChatGPTがコンテキスト肥大化により応答が鈍くなる問題を、「これまでの議論を要約して新しいセッションに引き継ぐプロンプト」で解決するテクニック。コンテキストウィンドウの限界を意識した実践的なワークアラウンドとして1000超のブクマを集めた。

- **[ハーネスエンジニアリング、それGit WorkflowをbashでGit Workflowをbashで書き直してるだけでは](https://zenn.dev/shio_shoppaize/articles/shogun-harness-engineering)** ([144users](https://b.hatena.ne.jp/entry/s/zenn.dev/shio_shoppaize/articles/shogun-harness-engineering)) - AIエージェント向け「ハーネスエンジニアリング」の流行に疑問を呈し、多くの実装が既存のCIスクリプトやGit Workflowをbashで焼き直しているだけという批判的分析。ツールや概念の新奇性に流されず本質的な問題解決の差分を問う内容だ。

- **[数学はもうかる　AI時代の人材争奪戦、米国で平均年収2400万円](https://www.nikkei.com/article/DGXZQOSG024JL0S6A200C2000000/)** ([133users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOSG024JL0S6A200C2000000/)) - AI開発における数学・統計の専門人材が米国で平均年収2400万円超という異常な需要急騰を分析した日経記事。応用数学・確率論・最適化理論の素養が「AI時代の最強スキル」として投資家・企業双方から評価される人材市場の変化を伝える。

- **[Windows 11のUIが本当にヒドイ、存在するべきスライダーが消え去り「0」と「3」しか選択できず項目名も意味不明](https://gigazine.net/news/20260328-windows-11-ui/)** ([119users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260328-windows-11-ui/)) - Windows 11の音量ミキサーやシステム設定のUIが段階的な改修で整合性を失い、連続値を取るべきスライダーが飛び値しか選べない状態になっているなど、UX品質の劣化を具体例で指摘した記事。デザインシステムの一貫性維持がいかに難しいかを反面教師として示す。

- **[Claude Codeのサブスクリプションで動くSlack常駐AIエージェントを作った](https://tubone-project24.xyz/2026/03/27/mugi-claw-slack-personal-ai-agent/)** ([101users](https://b.hatena.ne.jp/entry/s/tubone-project24.xyz/2026/03/27/mugi-claw-slack-personal-ai-agent/)) - Claude Codeの有料プランをバックエンドに使い、Slackに常駐して自然言語でコーディングタスクを受け付けるパーソナルAIエージェント「mugi-claw」を自作した開発記録。Slack Bot Framework + Claude SDK + GitHub連携の実装パターンが公開されており再現性が高い。

## Zenn

- **[BCE を意識して Go のコードを高速化する](https://zenn.dev/mattn/articles/5860d73d292f32)** - GoコンパイラのBounds Check Elimination（境界チェック除去）を活用してスライスアクセスのオーバーヘッドを削減するテクニック集。ループ内でインデックスの事前検証を行うパターンや、コンパイラが自動的にBCEを適用できるコードの書き方と、`go build -gcflags="-d=ssa/check_bce/debug=1"`での確認方法が解説されている。

- **[サプライチェーン攻撃対策の社内展開したやつの抜粋(SHA pinning必須化/min-release-age/Takumi Guard)](https://zenn.dev/primenumber/articles/d966cc3e2ed441)** - TriVY・LiteLLMへの侵害事例を受け、GitHub ActionsのSHAピン必須化・PyPI/npmパッケージの`min-release-age`（公開後N日以内のパッケージを拒否）・自社開発の「Takumi Guard」によるCI時依存審査の3本柱でサプライチェーン対策を組織展開した実例。ポリシーの社内普及方法まで含めた実践ガイドとして参照価値が高い。

- **[Cursorからcmux/Claude Codeに移行するときにやったこと](https://zenn.dev/d0ne1s/articles/7adbd3a3d54b1d)** - CursorからClaude Code（cmux経由）に移行する際に1週間かけて試行錯誤した設定・ワークフローの改善記録。CLAUDE.mdの書き方、Hooksによる自動フォーマット、Worktreeを使った並列開発の環境整備など、「Cursorより使いやすい」と感じるまでに必要な設定の全体像が共有されている。

- **[図形入りの PowerPoint を Markdown に変換](https://zenn.dev/headwaters/articles/convert-pptx-with-shapes-to-markdown)** - 図形や図表を多用したPowerPointファイルをMarkdownに変換する際、テキストのみ抽出するだけでは図形内テキストが欠落する問題をDoclingやpython-pptxを組み合わせて解決した手法。AI要約パイプラインに社内スライドを投入したい場合の前処理として実用的なアプローチが紹介されている。

- **[Claude Opus 4.6と同等のAIをローカルで動かすにはいくらかかるか？ローカルLLMを構築してわかったこと](https://zenn.dev/suit9/articles/a1bf8f7c46ef3b)** - Claude Opus 4.6相当の性能をローカルで実現しようとした場合の実機構築コストを試算した記事。最低限のハードウェア構成でどの程度の推論速度・品質が得られるかを実測し、クラウドAPIとのコスト分岐点（月間トークン量）も計算している。機密データをクラウドに送れない場合のオンプレAI導入判断材料として有用だ。

## Qiita

- **[【Claude Code】ralph-loop で寝てる間に約700ファイルもの大規模ライブラリ移行を終わらせてわかった AI の真価【Jest → Vitest】](https://qiita.com/semba_yui/items/8c7125722844cf426e12)** - `ralph-loop`を使いClaude Codeを夜間に自律ループさせることで、JestからVitestへのテストライブラリ移行を約700ファイル規模で無人完了させた実践レポート。AIエージェントに「大量の機械的変換タスク」を委譲することで開発者の稼働時間を圧縮できるという、AI駆動開発の可能性と課題が具体的な数字とともに示されている。

- **[AIにロックマンエグゼになり切ってもらい一緒に開発してる話](https://qiita.com/N_H_tennis/items/48f13332305338720524)** - AIを「ロックマンエグゼ」キャラクターとして振る舞わせるシステムプロンプトを設定し、開発の相棒として継続的に使うユニークな開発スタイルの紹介。ペルソナ付与がAIとの対話の楽しさと継続モチベーションを高める効果があることを実体験として報告しており、開発体験の設計という観点から興味深い。

- **[Draw.ioをプロンプトとして実行すると便利かもしれない](https://qiita.com/ShotaOki/items/ae0f16a088f71639e50f)** - Draw.ioで作成したフローチャート・シーケンス図をそのままAIへのプロンプトとして入力し、図の構造から直接コードや文書を生成させるアプローチを実験した記事。視覚的な設計図をテキスト仕様書の代替として使うことで、設計意図の損失なくAI生成物の精度を上げられる可能性を示している。

- **[AIが同じミスを学習し自律的に学習し成長する仕組みを作った](https://qiita.com/Keita-0025/items/0ba97947c9a2ca2303ad)** - AIエージェントが過去の失敗パターンをベクトルDBに記録し、類似タスクを実行する際に関連する失敗例を検索してコンテキストに注入することで同じミスを繰り返さなくなる「自己改善ループ」の実装例。失敗→記録→検索→プロンプト注入というシンプルなサイクルながら、エージェントの安定性向上に実用的な効果があると報告されている。

- **[【AWS】AgentCoreの内部実装から読み解く認証フローと実行環境差](https://qiita.com/yakumo_09/items/ee21d5fac4f99893127c)** - Amazon Bedrock AgentCoreの内部認証フロー（SigV4署名・IAMロール連鎖）と、Lambda実行環境・コンテナ実行環境それぞれでのエージェント動作の違いをコードと実測で解説。AgentCoreを本番利用する際の権限設計とデバッグ手順が実用的にまとめられている。

## AWS 新着

- **[Palmyra Vision 7B from Writer now available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/03/palmyra-vision-7b-writer-bedrock/)** (Mar 26) - WriterのマルチモーダルLLM「Palmyra Vision 7B」がAmazon Bedrockで利用可能になった。エンタープライズ向けに最適化されたビジョンモデルとして、契約書・財務資料・技術文書などの画像を含むドキュメント処理用途での活用が想定されている。

- **[Amazon GameLift Servers expands instance support with next-generation EC2 instance families](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-gamelift-servers-expands-instance-support/)** (Mar 27) - Amazon GameLift Serversが第5〜第8世代EC2インスタンスをサポートし、最新世代CPUによるゲームサーバーの演算性能向上とコスト効率改善が可能になった。リアルタイムマルチプレイヤーゲームのマッチメイキングやレイテンシ最適化に恩恵がある。

- **[AWS HealthImaging announces study-level fine-grained access control](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-healthimaging-study-level-access-control/)** (Mar 27) - AWS HealthImagingで医療画像の「スタディ」単位（患者ごとの検査セット）できめ細かいアクセス制御が可能になった。患者ごとに閲覧・操作権限を分けた診療情報管理が実現でき、HIPAA準拠要件への対応が強化された医療機関向けの重要アップデートだ。

- **[Amazon Timestream for InfluxDB Now Supports Advanced Metrics](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-timestream-for-influxdb-advanced-metrics/)** (Mar 27) - Amazon Timestream for InfluxDBにクエリレイテンシ・ストレージ使用量・カーディナリティなどの詳細パフォーマンスメトリクスを可視化する「Advanced Metrics」機能が追加。時系列データ基盤の運用監視とボトルネック特定が大幅に容易になる。

## Lobsters

- **[I Decompiled the White House's New App](https://blog.thereallo.dev/blog/decompiling-the-white-house-app)** - 米ホワイトハウスが公開した新アプリのAPKをリバースエンジニアリングして内部実装を調査した技術記事。難読化・データ収集コード・外部SDK依存の状況を分析しており、政府アプリのセキュリティ・プライバシー水準を問う内容として注目を集めている。

- **[BubbleWrap your dev env and agents](https://dpc.pw/posts/bubblewrap-your-dev-env-and-agents/)** - Linux の `bwrap`（Bubblewrap）を使って開発環境とAIエージェントをユーザー空間サンドボックスに封じ込める手法を解説した記事。Flatpakと同じ技術基盤で、rootなし・インストール不要でエージェントがホストのファイルシステムやネットワークに触れる範囲を細かく制限できる実用的なアプローチだ。

- **[AI Hot Takes From A Platform Engineer / SRE](https://alienchow.dev/post/ai_takeaways_mar_2026/)** - インフラ・SRE視点からAIコーディングツールについて率直な意見をまとめた記事。「コード生成の精度は上がったが設計判断力はまだ人間が担う」「インフラコードの自動生成は思ったより危険だった」など、現場エンジニアの生の評価として説得力がある。

- **[Translating non-trivial codebases with Claude](https://blog.danieljanus.pl/2026/03/26/claude-nlp/)** - 数万行規模の非自明なコードベース（NLPライブラリ）をClaudeを使って別言語に翻訳した実践報告。単純なコード変換では失敗するパターンと、段階的なコンテキスト提供・中間表現の活用・人手レビューの組み合わせで精度を上げた戦略が詳述されており、大規模移行プロジェクトの参考になる。

- **[libeatmydata - disable fsync and SAVE](https://www.flamingspork.com/projects/libeatmydata/)** - `libeatmydata`はfsync・fdatasync・sync等のI/O同期呼び出しを無効化するpreload ライブラリで、テスト・ベンチマーク環境でのディスクI/Oボトルネックを劇的に除去できる。本番環境ではデータ損失リスクがあるが、CIのDBセットアップやパッケージビルドの高速化に重宝されているツールとして再注目されている。

## dev.to

- **[MCP in Production: Routing LLM Tool Calls Through an API Gateway](https://dev.to/rodrigo_serracoelho_bba4/mcp-in-production-routing-llm-tool-calls-through-an-api-gateway-2fbj)** - LLMのツール呼び出し（MCP）をAPIゲートウェイ経由でルーティングすることで、認証・レート制限・ログ収集・ツールバージョン管理を一元化する本番運用パターンを解説。直接MCPサーバーを呼ぶ構成の運用課題を解決するアーキテクチャとして実用的な提案だ。

- **[AI Cut Engineering Leaders Out of the coding Loop. Now They're Becoming Governors.](https://dev.to/amit_kochman_06d0d76a03ba/ai-cut-engineering-leaders-out-of-the-coding-loop-now-theyre-becoming-governors-mbn)** - AIエージェントが実装の大部分を担うようになった結果、エンジニアリングリーダーの役割が「コーディングの上位者」から「コードベースとAI行動のガバナンス担当者」に転換しつつあるという分析。技術判断・品質基準・リスク管理の責任者としての新たな役割定義を提案している。

- **[Migrating from asdf and direnv to mise](https://dev.to/masutaka/migrating-from-asdf-and-direnv-to-mise-3nhi)** - バージョン管理ツール`asdf`と環境変数管理`direnv`の両方を`mise`（旧rtx）に統合した移行記録。`.tool-versions`互換性を保ちながら`.mise.toml`に移行する手順と、mise独自の環境変数機能で`.envrc`を置き換える方法が詳細に示されている。

- **[AI Agent Memory Systems: How to Give Your AI Persistent Memory](https://dev.to/hex_agent/ai-agent-memory-systems-how-to-give-your-ai-persistent-memory-2e4b)** - AIエージェントに永続記憶を持たせるためのアーキテクチャ（短期コンテキスト・長期ベクトルDB・エピソード記憶・意味記憶の4層）を解説した記事。会話履歴の圧縮・重要情報の選択的保存・記憶の検索と注入のライフサイクルが実装例とともに整理されている。

## TechCrunch

- **[Bluesky leans into AI with Attie, an app for building custom feeds](https://techcrunch.com/2026/03/28/bluesky-leans-into-ai-with-attie-an-app-for-building-custom-feeds/)** - BlueskyがAIを活用してカスタムフィードを自然言語で構築できるアプリ「Attie」を発表。オープンプロトコルatprotoの上で、ユーザーが自分だけのアルゴリズムタイムラインを作れる仕組みとして、中央集権的なアルゴリズム依存からの脱却を目指すBlueskyのビジョンを具現化したサービスだ。

- **[From Moon hotels to cattle herding: 8 startups investors chased at YC Demo Day](https://techcrunch.com/2026/03/28/from-moon-hotels-to-cattle-herding-8-startups-investors-chased-at-yc-demo-day/)** - YCombinator W26のDemo Dayで投資家から注目を集めた8スタートアップを紹介。月面ホテル・AI家畜管理・量子エラー訂正ソフトウェアなど多様なドメインにAI活用が広がっており、2026年のシードスタートアップトレンドを俯瞰できる。

- **[What will power the grid in 2035? The race is wide open](https://techcrunch.com/2026/03/28/what-will-power-the-grid-in-2035-the-race-is-wide-open/)** - AI・クラウドデータセンターの急激な電力需要増を背景に、2035年の電力グリッドを担う電源として核融合・小型原子炉（SMR）・天然ガスCCUSが混在して競う状況を分析。「どれか1つが勝つ」のではなく複数技術が役割分担する現実的なエネルギーミックスに向かっているという見通しが示されている。

## Ars Technica

- **[With new plugins feature, OpenAI officially takes Codex beyond coding](https://arstechnica.com/ai/2026/03/openai-brings-plugins-to-codex-closing-some-of-the-gap-with-claude-code/)** - OpenAIがCodexにプラグイン機能を追加し、コーディング以外のタスク（ウェブ検索・ファイル操作・外部API連携）へ拡張。これによりClaude Codeが先行していた「エージェント型コーディング環境」との機能差を縮める動きで、AIコーディングアシスタント市場の競争が激化している。

- **[DOJ confirms FBI Director Kash Patel's personal email was hacked](https://arstechnica.com/tech-policy/2026/03/doj-confirms-fbi-director-kash-patels-personal-email-was-hacked/)** - 米司法省が、FBI長官Kash Patelの個人メールアカウントが侵害されたことを公式確認。政府の最高幹部が個人メールで公務に関する情報を扱うことのセキュリティリスクが改めて浮き彫りになり、ゼロトラスト・デバイス管理政策の徹底の重要性を示す事例だ。

- **[Playing Wolfenstein 3D with one hand in 2026](https://arstechnica.com/gaming/2026/03/playing-wolfenstein-3d-with-one-hand-in-2026/)** - 身体的な制約を持つプレイヤーがWolfenstein 3Dを片手でプレイするためのカスタムコントローラーとキーリマッピング設定を構築した記録。ゲームアクセシビリティの実践例として、古いゲームでも工夫次第でインクルーシブな体験が実現できることを示しており、アクセシビリティ設計の参考になる。

## 注目トピック

今回の最大のトレンドは**AIエージェントの「統治」と「隔離」への関心の高まり**だ。OpenAI CodexへのPlugins追加・BlueskyのAttie・AgentCoreの認証フロー解析・MCPのAPIゲートウェイ経由ルーティングなど、「エージェントを動かす」フェーズを超え「エージェントの権限・安全性・ガバナンスをどう設計するか」という問いが技術コミュニティの中心に据えられつつある。BubbleWrapによるサンドボックス化、サプライチェーン攻撃対策の組織展開、AIエージェントの失敗学習ループといった実装例が同時多発的に登場しているのは、AIツールの本番利用が普及フェーズに入ったことを示している。

一方、**開発者コミュニティの内省も目立つ**。「ハーネスエンジニアリングはbashの焼き直しでは？」という批判的視点、「エンジニアリングリーダーはガバナンス担当者になる」という役割変容論、ralph-loopで700ファイル移行という具体的な成果と、AI活用の光と実装コストが同時に語られる成熟した議論の様相を呈してきた。YC W26のDemo Dayが月面ホテルから家畜管理まで多様なドメインでAI応用を競うスタートアップを輩出している点も、AIが特定分野の道具を超えた汎用インフラとして定着しつつあることを象徴している。
