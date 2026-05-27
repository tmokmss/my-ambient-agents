---
title: "Tech Feed ダイジェスト（2026年5月28日）"
date: "2026-05-27T22:48"
category: "summary"
summary: "Cognition $25B・CrowdStrike/Google Glassworm撲滅・SSD経由スパイ攻撃・NVIDIA台湾$150B・JWT/Cookie設計論が熱い"
tags: ["ai", "security", "aws", "hardware", "devtools", "claude-code", "oss", "privacy", "web", "zig"]
---

## はてなブックマーク (テクノロジー)

- **[Anthropic、脆弱性を自動修正する「Claude Code」プラグイン](https://pc.watch.impress.co.jp/docs/news/2112189.html)** ([188users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2112189.html)) - AnthropicがClaude Codeに脆弱性の自動検出・修正機能を追加するプラグインを発表。コードベースをスキャンして既知の脆弱性パターンを見つけ、修正パッチをCI/CDパイプラインに組み込む設計で、開発フローとセキュリティ審査を一体化する方向性が注目される。

- **[「JWT を localStorage に置くな」はなぜ言われるのか、Cookie 回帰までの時系列整理](https://zenn.dev/khale/articles/web-session-jwt-cookie-history)** ([112users](https://b.hatena.ne.jp/entry/s/zenn.dev/khale/articles/web-session-jwt-cookie-history)) - XSS耐性・CSRF・Secure属性・SameSite属性の変遷を歴史的に整理し、「JWTをlocalStorageに保存する」実装がなぜセキュリティリスクになるかを丁寧に論じた記事。HttpOnly Cookieへの回帰がなぜ現在のベストプラクティスとされるかの根拠が明快に示されている。

- **[AMD製の広範なプロセッサーに脆弱性 ～Athlon 3000からRyzen 9000/AI 300までに影響](https://forest.watch.impress.co.jp/docs/news/2112012.html)** ([94users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2112012.html)) - AMDが2026年5月のセキュリティ情報を公開し、ほぼ全世代のコンシューマー向けCPUに影響する脆弱性を修正するBIOSアップデートを提供。AI向けNPU搭載の最新Ryzen AI 300シリーズまで対象に含まれており、エンタープライズ環境では早急なファームウェア更新が推奨される。

- **[NotebookLMの「ソースが古いまま」問題が起こらないようにGoogleドライブのファイル更新を自動で反映](https://www.itmedia.co.jp/news/articles/2605/27/news102.html)** ([34users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2605/27/news102.html)) - NotebookLMに接続したGoogleドライブのドキュメントが更新されても知識ベースが自動同期されない問題に対し、Googleが自動反映機能を追加。RAGベースのAIアシスタントで最も多い「古い情報を参照している」問題への実用的な対応として注目される。

- **[運用エージェントは "作る" から "育てる" へ - 記憶と自己進化の3層設計パターン](https://speakerdeck.com/gawa/self-evolving-agents-three-layer-agent-design)** ([17users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/gawa/self-evolving-agents-three-layer-agent-design)) - AIエージェントの設計を「短期記憶（コンテキスト）・中期記憶（セッションストア）・長期記憶（ベクターDB）」の3層で捉え、エージェント自身が経験から学習して挙動を改善する自己進化アーキテクチャを提唱したスライド。初期実装後の継続的改良に焦点を当てた実践的なパターン集。

## Zenn

- **[Claude CodeやCodexに機密情報入れて大丈夫？セキュリティを軽くまとめ](https://zenn.dev/acntechjp/articles/a1e95959858c1c)** - Claude CodeとCodexでプロンプトに送信されたコードや設定ファイルがどのように処理・保存されるかを整理した記事。データポリシー・ネットワーク経路・ログ保持期間の違いを比較し、機密リポジトリでの利用可否を判断するための実務的な判断軸を提供している。

- **[サプライチェーン攻撃対策の「実効」を継続検証するGitHub監査基盤を内製した話](https://zenn.dev/smartround_dev/articles/478c195bf914b6)** - GitHub Actions・依存関係のPinning・SBOM生成などサプライチェーン攻撃対策を実施した後、「本当に機能しているか」を自動で継続検証する監査基盤を内製した事例。「対策を入れただけ」で終わらせず、実効性を定量的に確認する仕組みの重要性を実証したエンジニアリングレポート。

- **[pinact v4](https://zenn.dev/shunsuke_suzuki/articles/pinact-v4-guide)** - GitHub Actionsのワークフローで使用するアクションとイメージのタグをコミットハッシュにpin固定するCLIツール「pinact」のv4リリース記事。タグ書き換え攻撃（tag mutation attack）への対策として広く使われるツールで、v4でサポートされるコンテナイメージのピン固定範囲が拡大した。

- **[AIが書いたコードはAIが見る ── レビューが詰まらず、品質はむしろ上がる（連載Part 3）](https://zenn.dev/aircloset/articles/91824e55b7fc9c)** - AI生成コードのレビューをAIに任せるパイプラインを本番導入した連載の第3回。「人間がレビューするより一貫性のある指摘が出る」「CIと統合して自動修正まで回せる」という実績を示し、コードレビューの役割分担が変わりつつある現状を報告している。

- **[Javaなしで安全に使えるPlantUMLビューア「pumlv」](https://zenn.dev/rinrin_yuuki/articles/9b69cca81875f6)** - PlantUMLの描画にはJava実行環境が必要という長年の制約を解消した、Go製のスタンドアロンPlantUMLビューア「pumlv」の紹介記事。バイナリ一本で動作しJavaのセキュリティリスクを排除できるため、CI環境や制限された環境での図表生成ツールとして実用性が高い。

## Qiita

- **[【完全版】AIセキュリティ地獄絵図2026 - CVE・攻撃手法・防御策を全部解説する](https://qiita.com/emi_ndk/items/a36051a97d3b0670bedd)** - 2026年上半期に報告されたAI/MLシステム固有の脆弱性（プロンプトインジェクション・モデル汚染・推論時攻撃）を網羅的に整理した解説記事。CVEベースで攻撃手法と対策をマッピングしており、AIシステムのセキュリティレビューの参照資料として実用性が高い。

- **[【Claude Code / Codex × GAS】コピペ脱出！Google Workspace自動化レシピ7選](https://qiita.com/TMiyamoto/items/47a13155032f716a43bd)** - Claude CodeとCodexをGoogle Apps Scriptの生成に使い、スプレッドシート・Gmailフィルタ・カレンダー集計などを自動化した実例集。GASの文法をAIに委ねて業務ロジックの記述に集中するアプローチで、コーディング経験が少ないビジネス職でも再現しやすい実用性がある。

- **[1割の"信頼される"エンジニアがやっている「何の話かを省略しない説明」](https://qiita.com/hitomin_poke/items/a8c2c14a72a417619c1d)** - 技術コミュニケーションで「聞き手が前提を持っているはずだ」と省略することで発生する認識ズレのパターンを整理。「背景→問題→解決策→依頼」という構造化を習慣化することで、レビューの手戻りやSlackでの長大なやりとりを削減できるという実践論。

## AWS 新着

- **[Amazon EMR now supports Apache Spark 4.0.2 in general availability](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-emr-apache-spark/)** (2026-05-27) - Amazon EMRでApache Spark 4.0.2が正式サポートされた。Spark 4.0系ではPython DataFrameの改善・データカタログ統合強化・クエリプランナーの最適化が含まれ、EMRのサーバーレス・EC2・EKS全デプロイモデルで利用可能になる。

- **[Amazon Connect Customer now uses generative AI to automatically evaluate self-service interactions](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-connect-customer-gen-AI-evaluations-self-service)** (2026-05-27) - Amazon Connectのセルフサービス（IVR・チャットボット）とのやりとりをGenerative AIが自動評価し、集計インサイトを提供する機能がGAになった。人手でのサンプリング評価に頼らずすべてのセルフサービスインタラクションの品質を継続的に把握できる。

- **[AWS Backup adds OTP verification for Multi-party approval on logically air-gapped vaults](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-backup-otp-multi-party-approval-lag/)** (2026-05-27) - ランサムウェア対策として設計されたAWS Backupのlogically air-gapped vaultに対するMulti-party approval承認時にOTP（ワンタイムパスワード）検証が必須化された。承認者の資格情報が侵害されてもバックアップ削除を防ぐ二重の防護層となる。

- **[Amazon RDS now supports ENA Express for Multi-AZ replication](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-ena-express-multiAZ/)** (2026-05-26) - Amazon RDSのMulti-AZレプリケーションにENA Express（SRDベースの低遅延ネットワーク）が適用され、AZをまたいだレプリケーション遅延が削減される。RPO（目標復旧時点）の実測値が改善し、高いデータ鮮度を必要とするワークロードの信頼性が向上する。

- **[Amazon GuardDuty Malware Protection for AWS Backup supports Amazon S3 continuous backups](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-guardduty-aws-backup-s3-continuous/)** (2026-05-26) - GuardDutyのマルウェアスキャンがAWS BackupのS3継続バックアップにも対応。バックアップデータへのマルウェア混入を自動検出できるようになり、クリーンなリカバリポイントの確保が強化される。

## Lobsters

- **[Stop advertising in your commits](https://akselmo.dev/posts/stop-advertising-in-your-commits/)** (80pt) - AIツールが自動生成するコミットメッセージ末尾の「🤖 Generated with Claude Code」「Co-authored-by: GitHub Copilot」などの記述をgit logに残すことへの批判記事。コミット履歴は技術的な変更の記録であり、ツールの広告媒体ではないという主張が開発者コミュニティで共感を呼んでいる。

- **[What is a harmonic? An interactive comic about additive synthesis](https://melatonin.dev/additive-synth-comic/what-is-a-harmonic/)** (73pt) - 倍音（harmonic）の概念をインタラクティブなビジュアルとアニメーションで説明する教育コンテンツ。WebAudioとCanvasを使い、加算合成がどのように複雑な波形を生み出すかをリアルタイムで体感できる。音声処理・DSP入門として優れた設計で、技術教育コンテンツのインタラクティブ化の好例。

- **[May I recommend thinking of Emacs as your Fortress of Solitude](https://martinsos.com/posts/may-recommend-emacs-home-base)** (48pt) - AIツールが統合されたIDEが増える中で、Emacsを「外部からの通知や誘導がなく自分の思考に集中できる基地」として位置づけ直す記事。機能の多さではなく「自分の思考環境を完全に制御できること」がEmacsの本質的な価値だという論考。

- **[Interview with Zig creator Andrew Kelley](https://www.youtube.com/watch?v=iqddnwKF8HQ)** (44pt) - Zig言語の作者Andrew KelleyへのインタビューYouTube動画。言語設計の哲学・コンパイラの現状・ビルドシステムの再設計（別記事でも取り上げられている）・Zigが目指す「シンプルさ」の定義について語っており、言語設計に関心がある開発者に向けた一次情報として注目される。

- **[A new register allocator for ZJIT](https://railsatscale.com/2026-05-27-a-new-register-allocator-for-zjit/)** (19pt) - ShopifyがRubyの新JITコンパイラZJIT向けに独自のレジスタアロケーターを実装したという記事。線形スキャン方式からグラフ彩色方式への移行によってコード品質が向上し、生成された機械語の最適化度合いが改善したと報告している。

## dev.to

- **[I Turned on Agent Tracing for 30 Days. 4 Hidden Bottlenecks Were Eating 47% of My Tokens.](https://dev.to/kenimo49/i-turned-on-agent-tracing-for-30-days-4-hidden-bottlenecks-were-eating-47-of-my-tokens-1pa6)** - 本番運用中のClaude AIエージェントにトレーシングを30日間有効化したところ、トークン消費の47%が「重複コンテキスト・不要な全文取得・ループ内の再要約」など4つのボトルネックに起因していたという実測レポート。エージェント設計のプロファイリング手法として参考度が高い。

- **[I built a CLI that scaffolds agentic workflows for Claude Code](https://dev.to/patrick_sardinha/i-built-a-cli-that-scaffolds-agentic-workflows-for-claude-code-328c)** - Claude Codeでの複数タスクを並行処理するエージェントワークフローのスキャフォールドを生成するCLIツールの紹介。長い一本鎖の会話依存から脱し、タスク分割と並列実行を明示的に設計できるようにすることで、大規模コードベース操作でのコンテキスト枯渇問題を回避する。

- **[ASF Project Spotlight: Apache Iceberg](https://dev.to/theasf/asf-project-spotlight-apache-iceberg-fl5)** - Apache Software Foundationによるレイクハウスアーキテクチャのオープンテーブルフォーマット「Apache Iceberg」の解説記事。タイムトラベルクエリ・スキーマ進化・パーティション最適化など、DeltaLakeやHudiと差別化するIcebergの設計思想が整理されており、データ基盤選定の参考になる。

- **[How I monitor CVEs daily with a 50-line Python script](https://dev.to/ayinedjimi-consultants/how-i-monitor-cves-daily-with-a-50-line-python-script-5779)** - NVD（国立脆弱性データベース）のAPIを叩き、監視対象ライブラリに関連するCVEをフィルタリングしてTelegramに通知する50行のPythonスクリプトの実装紹介。毎日150件以上公開されるCVEの中から関連するものだけを抽出する仕組みで、小規模チームのセキュリティ運用への最小コスト導入として実用的。

## TechCrunch

- **[Snowflake signs $6B deal with AWS for AI CPU chips](https://techcrunch.com/2026/05/27/in-more-good-news-for-amazon-snowflake-signs-6b-deal-with-aws-for-ai-cpu-chips/)** - SnowflakeがAWSとAI用CPUチップ調達に関する5年間・60億ドルの大型契約を締結。NVIDIAのGPUに代わりAWS独自のカスタムAIチップ（Trainium/Inferentia系）をSnowflakeのAI機能強化に使う方向で、クラウドプロバイダーとSaaSベンダーのチップ調達競争の構図が鮮明になった。

- **[CrowdStrike and Google take down botnet used by hackers to target open source software developers](https://techcrunch.com/2026/05/27/crowdstrike-and-google-take-down-botnet-used-by-hackers-to-target-software-developers-in-supply-chain-attacks/)** - CrowdStrikeとGoogleが共同で「Glassworm」ボットネットを摘発。OSS開発者のマシンに侵入してOSSプロジェクトにマルウェアを埋め込み、そのパッケージを利用する企業まで被害を拡げるサプライチェーン攻撃の連鎖を断ち切った。開発者個人のマシンへの標的型攻撃が増加している危険性を改めて示す事案。

- **[AI coding startup Cognition raises $1B at $25B pre-money valuation](https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/)** - Devinで知られるAIコーディングエージェント企業Cognitionが約10億ドルを調達し企業評価額2.5兆円超に到達。年間ARRが4.92億ドルペースで、わずか8ヶ月で評価額が2倍以上になった。AIコーディング市場への投資熱とClaude Code・Copilotとの競争激化が背景にある。

- **[Meta launches Instagram, Facebook, and WhatsApp subscriptions with AI plans](https://techcrunch.com/2026/05/27/meta-officially-launches-instagram-facebook-and-whatsapp-subscriptions-with-more-to-come-including-ai-plans/)** - MetaがInstagram・Facebook・WhatsAppの有料サブスクリプションを全世界に正式展開。追加AI機能・クリエイター向け機能・ビジネス向け機能が段階的にサブスク特典として追加される計画で、Meta AIの収益化の主軸として位置づけられている。

## Ars Technica

- **[Websites have a new way to spy on visitors: analyzing their SSD activity](https://arstechnica.com/security/2026/05/websites-have-a-new-way-to-spy-on-visitors-analyzing-their-ssd-activity/)** (2026-05-27) - ウェブサイトがJavaScriptのタイミング計測を通じて訪問者のSSDアクセスパターンを分析し、ブラウザのプライバシーモード使用有無やシステム識別情報を取得できることを示した研究報告。ブラウザサンドボックスを迂回した新たなサイドチャネル攻撃として、既存の指紋防止対策が無効化される可能性がある。

- **[Nvidia bets $150B on Taiwan as Trump's plan to make US an AI hub backfires](https://arstechnica.com/tech-policy/2026/05/nvidia-ceo-wants-taiwan-to-be-center-of-ai-revolution-not-us/)** (2026-05-27) - NVIDIAがTSMCとの連携深化のため台湾に1500億ドル規模の投資を表明し、ジェンスン・フアンCEOが「AIの中心はアメリカより台湾が相応しい」と発言。トランプ政権のAI産業国内回帰政策と真っ向から対立する姿勢で、半導体製造と地政学リスクの複雑な絡み合いが浮き彫りになった。

- **[YouTube to begin automatically labeling AI videos](https://arstechnica.com/google/2026/05/youtube-to-begin-automatically-labeling-ai-videos/)** (2026-05-27) - YouTubeがAI生成・AI加工コンテンツを自動検出してラベル表示する機能の展開を開始。クリエイターによる自主申告制から機械的な自動検出・ラベル付けへの移行で、ディープフェイク・AI音楽・AI映像の透明性確保を強制する方向に踏み込んだ。

- **[Nvidia kills Windows XP-era Control Panel "after 20 years of dedicated service"](https://arstechnica.com/gadgets/2026/05/nvidia-kills-windows-xp-era-control-panel-after-20-years-of-dedicated-service/)** (2026-05-27) - NVIDIAがWindows XP時代から20年以上提供してきた「NVIDIAコントロールパネル」を廃止し、「NVIDIA App」へ完全移行。旧来のUI/UXから刷新されており、レイテンシ設定・オーバーレイ・ドライバ管理が新UIに統合された。ゲーマー・クリエイターからは移行への戸惑いの声もあがっている。

## 注目トピック

**AIコーディングツールへの投資とその影の両面**：Cognitionが$25B評価額で$1Bを調達した同日に、dev.toではAIエージェントのトークン消費の47%が無駄だったという実測報告が、Lobstersではコミットメッセージへのツール広告を批判する記事が、Zennではサプライチェーン攻撃対策の継続検証の重要性を説く記事が並んだ。投資額の急膨張と現場の「使いこなしへの冷静な目」が同時進行しており、AIコーディングツールが「試す段階」から「運用最適化と弊害の整理」段階に入ったことが読み取れる。

**セキュリティ攻撃の新フロンティア**：SSD読み書きタイミングをサイドチャネルとして使うウェブ指紋攻撃（Ars Technica）、OSS開発者マシンを経由したサプライチェーン攻撃（TechCrunch・Zenn）、全世代AMDプロセッサの脆弱性（はてな）と、今日は防御側が対応しなければならない攻撃面の広がりが際立つ一日だった。特にGlasswormボットネット事案は「OSS開発者の個人マシンを標的とする→OSSプロジェクトへのマルウェア混入→ユーザー企業へ波及」という連鎖が確認されたもので、サプライチェーンセキュリティが開発者個人レベルのエンドポイント保護まで範囲を広げる必要性を示している。
