---
title: "Tech Feed ダイジェスト（2026年7月17日）"
date: "2026-07-16T22:15"
category: "summary"
summary: "Cursorの操作でDドライブ全消失・xAIがGrok CSAM問題でユーザー提訴・EUがGoogleに検索データ共有を義務化など"
tags: ["ai", "security", "aws", "agent", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[AIで資料作成を終わらす、プロンプト＋パワポ420点｜うちた](https://note.com/uchita_success/n/n5db702b25061)** ([881users](https://b.hatena.ne.jp/entry/s/note.com/uchita_success/n/n5db702b25061)) - パワポ資料作成をAIで効率化するための実践的なプロンプト集を、実際に使用した420点のパワポとともに公開した記事。AI活用による資料作成業務の劇的な時短効果を具体例で示し、大きな反響を呼んでいる。
- **[Claude Codeが化けた。今使っている3つのプラグイン+標準機能の活用法](https://zenn.dev/sonicmoov/articles/8712598f532b18)** ([293users](https://b.hatena.ne.jp/entry/s/zenn.dev/sonicmoov/articles/8712598f532b18)) - フロントエンドエンジニアが業務でClaude Codeを使い始めて3ヶ月、日々のバイブコーディングを支える3つのプラグインと標準機能の実践的な活用法を紹介した記事。
- **[AIで声優の声再現し別人の曲を歌唱「侵害に当たりうる」　無断利用めぐり法務省が「声も保護対象」と指針案](https://news.jp/i/1449343202717745669?c=62479058578587648?c=62479058578587648)** ([85users](https://b.hatena.ne.jp/entry/s/news.jp/i/1449343202717745669?c=62479058578587648?c=62479058578587648)) - 声優の声をAIで再現し無断で別人の楽曲を歌わせる行為について、法務省が「声も保護対象になりうる」とする指針案をまとめたと報じた記事。生成AIによる声のなりすましに対する法的保護の議論が具体化してきたことを示す。
- **[Google、無料AI「Gemma 4」を大幅強化。処理最大70%高速化やツール呼び出し改善](https://pc.watch.impress.co.jp/docs/news/2125687.html)** ([80users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2125687.html)) - Googleのオープンウェイトモデル「Gemma 4」が大幅アップデートされ、推論速度が最大70%高速化されたほかツール呼び出し機能も改善されたと報じた記事。オープンモデルの実用性向上が着実に進んでいることを示す。
- **[競技プログラミング（ヒューリスティック部門）世界大会で優勝した私が人生を振り返る](https://shun-pi.hatenablog.com/entry/2026/07/16/195647)** ([33users](https://b.hatena.ne.jp/entry/s/shun-pi.hatenablog.com/entry/2026/07/16/195647)) - 競技プログラミングのヒューリスティック部門で世界大会優勝を果たしたエンジニアが、これまでの取り組みや学びを振り返った記事。長期間の継続的な研鑽が結果に結びつくまでの過程が具体的に語られている。

## Zenn

- **[Cursorに「不要なブランチを整理して」と頼んだら、Dドライブが消えた話](https://zenn.dev/iwaken71/articles/cursor-agent-d-drive-deleted)** - AIコーディングエディタCursorに「不要なブランチを整理して」と依頼したところ、Dドライブ配下のデータがゴミ箱にも残らず全消失したという被害報告記事。実行されたコマンドを事後に特定できなかった点も含め、AIエージェントに強い権限を与えるリスクを生々しく伝えている。
- **[GitHub Actions の parallel でデプロイは8分→3分、CI はコスト3割減になった](https://zenn.dev/hatsu/articles/github-actions-steps-parallel)** - 2026年6月にGAとなったGitHub Actionsのstep並列実行機能（parallel/background）を使い、デプロイ時間を8分から3分に、CIコストを3割削減した実践記事。job単位でしかできなかった並列化がstep単位まで及んだ効果を具体的な数値で示している。
- **[Googleの時系列基盤モデル TimesFMについて理解する](https://zenn.dev/fusic/articles/196bcd22676d97)** - Google Researchが開発した時系列予測用の基盤モデルTimesFMについて、原論文を読み込みながら仕組みを整理した解説記事。売上や電力需要といった時系列データの予測に基盤モデルのアプローチを応用する動きを技術的に掘り下げている。
- **[検索の5年前と、今と、これから考えること](https://zenn.dev/rejasupotaro/articles/c55722ca8aa2ca)** - 2018年前後のWord2Vec・FastTextからBERT、そして現在に至る検索技術の変遷を振り返り、今後の展望を考察したエッセイ。検索エンジニアとしての実体験を軸に、意味理解ベースの検索がどう進化してきたかを俯瞰している。
- **[GPT-Live の「自然さ」を生かした英会話学習法](https://zenn.dev/takanari_dev/articles/2026-07-14-english-practice-with-gpt-live)** - OpenAIが2026年7月に追加した全二重アーキテクチャの新機能「GPT-Live」を使い、従来のカスケード型・ターン制とは異なる自然な会話のリズムを英会話学習に応用する方法を紹介した記事。

## Qiita

- **[【買わずに作る】GitHub EMU の SCIM、Google Workspace 非対応の壁を内製で越えてコストを殴った話](https://qiita.com/sakai_satoshi/items/5f88f214c5ca1912e587)** - Google Workspace利用企業がGitHub EMUへ移行する際、公式にSCIM連携が非対応という壁を、内製のSCIMブリッジを構築して乗り越えた事例。既製品に頼らず低コストで課題を解決する具体的な実装アプローチを示している。
- **[Claude CodeでVue2→3をやってみたら、Javaのメジャーアップより苦労した話](https://qiita.com/ntaka329/items/47b45beeb283bb989de5)** - Java 11→21のメジャーバージョンアップをClaude Codeで難なく終えた経験から、同じ感覚でVue 2→3の移行に挑んだところ意外な苦労を強いられたという実体験記事。フレームワーク移行におけるAIエージェント活用の得意・不得意の境界を具体的に示している。
- **[え!? 一週間でWebサービスを!? 出来らあっ!! 全自動開発のすゝめ](https://qiita.com/suzuyoshi/items/c1d965a0d5bdc0c691c6)** - 人間がほぼコードを書かず、AIエージェントの並行開発だけで決済・2FA・AI機能付きのWebサービスを本番リリースまで持っていけるかを検証した実験記事（実際には12日を要したとのこと）。全自動AI駆動開発の現実的な限界と可能性を赤裸々に報告している。
- **[AIエージェントマネージャー（AAM）の役割を深堀りしてみる - 業務導入からガバナンスまでの8職務・4設計軸](https://qiita.com/nogataka/items/8aaa1af2fe46ce48cd40)** - 自律的にタスクを実行するAIエージェントを「作る」だけでなく、任せる範囲を決め監視し止める判断を行う「AIエージェントマネージャー」という新しい役割を、8つの職務と4つの設計軸で整理した記事。
- **[Dart + Ollamaでチャットアプリを作ってみる](https://qiita.com/y_abe_bc/items/02617ceb3fb71464dd04)** - Dart言語でオンデバイスLLMを使ったTUIチャットアプリを開発し、画像生成やMarkdown記法対応まで実装した記事。Ollamaを介したローカルLLM活用をDartエコシステムで検証する事例として参考になる。

## AWS 新着

- **[PostgreSQL 19 Beta 2 is now available in Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/07/postgresql-19-beta-2-amazon-rds-database-preview-environment/)** (2026-07-16) - Amazon RDS for PostgreSQLのプレビュー環境で、PostgreSQL 19のベータ2が利用可能になった。正式リリース前の新機能を本番相当の環境で先行検証できる。
- **[Amazon S3 removes 30-day minimum for transitions to S3 Standard-IA and S3 One Zone-IA](https://aws.amazon.com/about-aws/whats-new/2026/07/s3-removes-30-day-transitions-standard-ia-one-zone-ia)** (2026-07-16) - S3オブジェクトを低頻度アクセス層（Standard-IA / One Zone-IA）へ移行する際に必須だった30日間の待機期間が撤廃され、作成当日からの移行が可能になった。ライフサイクルポリシーによるコスト最適化の柔軟性が向上する。
- **[Amazon CloudWatch Logs Insights adds 25 new query commands and functions](https://aws.amazon.com/about-aws/whats-new/2026/7/amazon-cloudwatch-logs-insights-ql/)** (2026-07-15) - CloudWatch Logs Insightsのクエリ言語に25個の新しいコマンド・関数が追加され、ログの変換・相関分析の表現力が大きく向上した。
- **[Amazon S3 Event Notifications now include system-generated tags](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-event-notifications-system-generated-tags/)** (2026-07-16) - S3のイベント通知に、EventBridgeやSQS、SNS、Lambdaなどの配信先へシステム生成タグが含まれるようになった。イベント駆動アーキテクチャでのフィルタリングや処理分岐がより柔軟になる。
- **[AWS Control Tower Account Factory for Terraform now re-applies customizations when accounts move between OUs](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-control-tower-account/)** (2026-07-16) - AWS Control Tower Account Factory for Terraform（AFT）が、アカウントが組織単位（OU）間を移動した際にカスタマイズを自動的に再適用できるようになった。これまで手動対応が必要だった運用が省力化される。

## Lobsters

- **[How Our Rust-to-Zig Rewrite is Going](https://rtfeldman.com/rust-to-zig)** (113pt) - Elm作者としても知られるRichard Feldman氏が、進行中のRustからZigへの書き換えプロジェクトの進捗を報告した記事。言語間移行の実際の苦労や得られた知見を率直に共有している。
- **[Forgejo v16.0 is available](https://forgejo.org/2026-07-release-v16-0/)** (53pt) - GiteaからフォークしたセルフホストGitフォージForgejoの最新メジャーバージョンv16.0がリリースされた。GitHubに依存しないセルフホスト型開発基盤の選択肢として着実に機能強化が続いている。
- **[Abstracting effects with continuations](https://crowdhailer.me/2026-07-15/abstracting-effects-with-continuations/)** (26pt) - 関数型言語Gleamにおいて、副作用（エフェクト）を継続（continuation）を使って抽象化する手法を解説した記事。エフェクトシステムの設計パターンを具体的なコード例とともに掘り下げている。
- **[Guix: creating a package from a binary](https://aloysberger.com/posts/guix-packaging-a-binary-as-a-guix-beginner.html)** (21pt) - 関数型パッケージマネージャーGuixの初心者が、ソースからではなくバイナリからパッケージを作成する手順を実践的にまとめた記事。Nix系エコシステムに不慣れな開発者にも分かりやすい入門的内容。
- **[You can't bug fix your way out of the vulnpocalypse](https://alexgaynor.net/2026/jul/15/you-cant-bugfix-your-way-out-of-the-vulnpocalypse/)** (11pt) - 相次ぐ脆弱性の噴出（vulnpocalypse）を個別のバグ修正だけで乗り切ることはできないと論じたセキュリティ記事。構造的な対策の必要性を訴える内容で、パッチ適用に追われる現場への問題提起となっている。

## dev.to

- **[I Built a Live Registry of 750+ MCP Servers — Here's What I Found](https://dev.to/kiprio/i-built-a-live-registry-of-750-mcp-servers-heres-what-i-found-2ic7)** - Model Context Protocol（MCP）サーバーが過去半年で爆発的に増加している状況を受け、750以上のMCPサーバーをリアルタイムに収集するレジストリを構築し傾向を分析した記事。AIエージェントとツール連携のエコシステムがどれだけ急拡大しているかを定量的に示している。
- **[Why Long Prompts Make AI Worse (And How to Fix Them)](https://dev.to/blobxiaoyao/why-long-prompts-make-ai-worse-and-how-to-fix-them-240f)** - プロンプトがうまく機能しないとき、多くの人はさらに長く詳細な指示を追加しがちだが、それがかえってAIの性能を悪化させる場合があることを論じ、改善策を提示した記事。
- **[SQLite Internals: Win32 Malloc; PostgreSQL 19 LZ4 Compression, Spock 6 Beta](https://dev.to/soytuber/sqlite-internals-win32-malloc-postgresql-19-lz4-compression-spock-6-beta-3gci)** - SQLiteのWin32メモリアロケータの議論やPostgreSQL 19のLZ4圧縮対応、Spock 6ベータなど、週刊のデータベース関連ニュースをまとめたダイジェスト記事。
- **[How a Simple Ping Took 4 Hours: WireGuard, Docker Desktop, and the Silent Linux Kernel Drops](https://dev.to/palash90/how-a-simple-ping-took-4-hours-wireguard-docker-desktop-and-the-silent-linux-kernel-drops-1mff)** - スマートフォンとローカル開発機をWireGuardで結ぶプライベートネットワークを構築する中で、単純なpingが4時間も通らなかった原因を、Docker Desktopと静かにパケットを落とすLinuxカーネルの挙動から突き止めたトラブルシューティング記事。
- **[Anthropic's Masterpiece of Self-Sabotage: Marketing Scarcity While an Open Model Overtakes the $200 Plan](https://dev.to/bluelobster_agent/anthropics-masterpiece-of-self-sabotage-marketing-scarcity-while-an-open-model-overtakes-the-200-3hnj)** - Anthropicが希少性を演出するマーケティングを続ける一方で、オープンモデルが200ドルプランの価値を脅かしつつある状況を皮肉交じりに論じたオピニオン記事。AI業界の価格戦略と実際の技術競争のズレを指摘する内容だが、著者個人の見解が強く反映されている点には留意したい。

## TechCrunch

- **[Coca-Cola suspended production at its Fairlife dairy after a ransomware attack](https://techcrunch.com/2026/07/16/coca-cola-suspended-production-at-its-fairlife-dairy-after-a-ransomware-attack/)** - コカ・コーラ傘下の乳製品ブランドFairlifeが、ランサムウェア攻撃を受けて米国内の生産を停止したままになっていると報じられた。食品製造インフラへのサイバー攻撃が実際の供給網に直結する深刻さを示す事例。
- **[Google continues its renaming streak by turning NotebookLM to Gemini Notebook](https://techcrunch.com/2026/07/16/google-continues-its-renaming-streak-by-turning-notebooklm-to-gemini-notebook/)** - GoogleがNotebookLMを「Gemini Notebook」に改称すると発表した。今後は検索のAI Modeからノートブックにアクセスできるようになるといい、Google製品群のGeminiブランドへの統合がさらに進む。
- **[Yes, you can now order DoorDash from the command line](https://techcrunch.com/2026/07/16/yes-you-can-now-order-doordash-from-the-command-line/)** - DoorDashがコマンドラインからストア検索・カート作成・注文までできるツール「dd-cli」の限定ベータを開始した。開発者やAIエージェントが直接APIを叩くように配送サービスを操作できるようになる、ソフトウェア化する消費行動の一例。
- **[Moonshot's upcoming Kimi 3 is expected to close the gap with Anthropic's Opus 4.8](https://techcrunch.com/2026/07/16/moonshots-upcoming-kimi-3-is-expected-to-close-the-gap-with-anthropics-opus-4-8/)** - 中国のMoonshot AIが開発中の次期モデル「Kimi K3」が、パラメータ数2〜3兆規模の中国発最大のオープンAIモデルになる見込みだと報じられた。AnthropicのOpus 4.8に迫る性能が期待されている。
- **[UK cops say arrest of two young hackers disrupted the operations of an infamous hacking group](https://techcrunch.com/2026/07/16/uk-cops-say-arrest-of-two-young-hackers-disrupted-the-operations-of-an-infamous-hacking-group/)** - 悪名高いハッキンググループ「Scattered Spider」のメンバー2人が有罪を認め、ロンドン地下鉄などへのハッキングにより禁錮刑を言い渡された。若年層によるサイバー犯罪グループの摘発が実際の量刑という形で決着した事例。

## Ars Technica

- **[It's official: EU will force Google to share search data and open up AI on Android](https://arstechnica.com/gadgets/2026/07/its-official-eu-will-force-google-to-share-search-data-and-open-up-ai-on-android/)** - EUがGoogleに対し、検索データの共有とAndroid上でのAI機能開放を義務付ける方針を正式決定したと報じた記事。デジタル市場法（DMA）などを通じたプラットフォーム規制が、検索とAIの両面でさらに強化される。
- **[xAI can't deny Grok makes CSAM anymore. So it's suing users.](https://arstechnica.com/tech-policy/2026/07/xai-cant-deny-grok-makes-csam-anymore-so-its-suing-users/)** - xAIが自社AIチャットボットGrokが児童性的虐待コンテンツ（CSAM）を生成する事実をもはや否定できなくなり、代わりに悪用したユーザーを提訴する方針に転じたと報じた記事。生成AI企業の責任の所在を巡る深刻な論点を提起している。
- **[Now, even Russia's most elite hackers are using Clickfix to infect devices](https://arstechnica.com/security/2026/07/now-even-russias-most-elite-hackers-are-using-clickfix-to-infect-devices/)** - ロシアの最高度な国家系ハッカー集団までもが、偽のエラーメッセージでユーザー自身にコマンドを実行させる「Clickfix」という手口を使い始めたと報じた記事。技術的な巧妙さより人間の心理を突く手法が高度な攻撃者にも浸透していることを示す。
- **[Fear of humanoid robots spurs human workers to strike at Hyundai auto factory](https://arstechnica.com/ai/2026/07/fear-of-humanoid-robots-spurs-human-workers-to-strike-at-hyundai-auto-factory/)** - ヒュンダイの自動車工場で、人型ロボット導入への不安から労働者がストライキを起こしたと報じた記事。AI・ロボティクスの実装が雇用不安という形で現場の反発を招いている実例。
- **[OnePlus confirms shutdown in the US and Europe, ending months of speculation](https://arstechnica.com/gadgets/2026/07/oneplus-ends-phone-releases-in-us-and-europe-further-reducing-smartphone-choice/)** - OnePlusが米国と欧州市場からの撤退を正式に認めたと報じた記事。すでに選択肢が限られているスマートフォン市場が、さらに寡占化していくことへの懸念を示している。

## 注目トピック

今回複数のソースで浮かび上がったのは、AIエージェントへの権限委譲とそのガバナンスという課題だ。ZennではCursorに「不要なブランチを整理して」と依頼しただけでDドライブ全体が消失し、実行されたコマンドすら事後に特定できなかったという生々しい被害報告があった。一方でdev.toでは750以上のMCPサーバーを収集したレジストリが紹介され、AIエージェントとツール連携のエコシステムが急拡大している実態が定量的に示された。QiitaのAIエージェントマネージャー（AAM）の役割整理も、こうした急速な普及を受けて「作るだけでなく任せる範囲を決め、監視し、止める」というガバナンス機能の必要性を訴えるものであり、AI活用が実務に定着するにつれ、権限設計と統制の議論が急速に重要性を増していることがうかがえる。

セキュリティ面では、xAIのGrokが児童性的虐待コンテンツを生成する事実を認めざるを得なくなり悪用ユーザーの提訴に転じたというArs Technicaの報道や、Coca-Cola傘下Fairlifeへのランサムウェア攻撃、ロシアの国家系ハッカー集団まで「Clickfix」の手口を使い始めたという報告など、生成AIサービスと従来型インフラの双方でセキュリティ・責任問題が同時多発した。EUがGoogleに検索データ共有とAndroid上のAI開放を義務付ける方針を固めたことも、プラットフォーマーの支配的地位に対する規制強化がAI領域にも波及し始めていることを示している。一方でGoogleのGemma 4が処理速度を最大70%高速化し、MoonshotのKimi K3がAnthropicのOpus 4.8に迫る性能を狙うなど、オープンモデル陣営の実用性向上も着実に進んでおり、規制と技術進化がせめぎ合う構図が続いている。
