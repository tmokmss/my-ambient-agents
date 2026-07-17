---
title: "Tech Feed ダイジェスト（2026年7月17日）"
date: "2026-07-17T10:57"
category: "summary"
summary: "「AI臭」除去やJS DateからTemporalへの移行が話題・AWSがAI関連セキュリティ機能を相次ぎ強化・HPがカートリッジ「カルテル化」で制裁金など"
tags: ["ai", "agent", "security", "aws", "devops", "database"]
---

## はてなブックマーク (テクノロジー)

- **[なぜAI臭さを消したいのか｜laiso](https://sizu.me/laiso/posts/mcerekex7091)** ([176users](https://b.hatena.ne.jp/entry/s/sizu.me/laiso/posts/mcerekex7091)) - AI生成文章特有の「AI臭」をなぜ人が嫌うのか、その心理的・文化的背景を掘り下げたエッセイ。単なる技術的な検出手法の話にとどまらず、なぜ違和感を覚えるのかという根本的な問いに切り込んでいる。
- **[JavaScriptの日付処理が変わる！ DateからTemporalへ - ICS MEDIA](https://ics.media/entry/260715/)** ([165users](https://b.hatena.ne.jp/entry/s/ics.media/entry/260715/)) - 長年バグの温床だったJavaScriptの`Date`オブジェクトに代わる新API`Temporal`について、タイムゾーンやカレンダー計算がどう改善されるかを実例とともに解説した記事。ブラウザ実装が進む中でフロントエンド開発者が今から押さえておくべき内容。
- **[ルーターに挿す約320円の広告ブロッカー、13万ドメインをRAM40KBで判定 - FabScene](https://fabscene.com/new/make/esp32-c3-dns-adblock-hash-in-flash/)** ([162users](https://b.hatena.ne.jp/entry/s/fabscene.com/new/make/esp32-c3-dns-adblock-hash-in-flash/)) - ESP32-C3を使い、13万ドメインの広告ブロックリストをハッシュ化してわずか40KBのRAMに収め、320円程度の格安ハードウェアで動かす自作プロジェクト。リソース制約下でのデータ構造設計の工夫が光る。
- **[ローカルLLMが資料を自動作成「LM Studio Bionic」、無料のAIエージェント](https://pc.watch.impress.co.jp/docs/news/2125939.html)** ([82users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2125939.html)) - ローカル環境で動くLLMを使い、資料作成を自動化する無料AIエージェント「LM Studio Bionic」が登場したと報じた記事。クラウドAPIに頼らないオンデバイスAIエージェントの実用性が広がりつつあることを示す。
- **[1Password for Claude: Give Claude access without giving up your credentials](https://1password.com/blog/1password-for-claude)** ([50users](https://b.hatena.ne.jp/entry/s/1password.com/blog/1password-for-claude)) - 1PasswordがClaude向けの連携機能を発表し、認証情報そのものを渡すことなくAIエージェントに必要なアクセス権限だけを付与できる仕組みを紹介した記事。AIエージェントへの権限委譲を安全に設計する具体例として参考になる。

## Zenn

- **[Claude Code の Plan モードをループエンジニアリングで楽にする](https://zenn.dev/k_yoshiya/articles/claude-code-plan-mode-loop)** - Claude CodeのPlanモードにhookを組み込み、「質問による要件詰め」「実装のサブエージェント委譲」「計画のHTML確認」を自動化する「ループエンジニアリング」の実践例を紹介した記事。人間の確認負荷を下げながらAIエージェントに計画立案を任せる工夫が具体的。
- **[SQL MCP Server が GA したらしい](https://zenn.dev/microsoft/articles/1113250e1e63dc)** - 2026年6月にひっそりGAとなったMicrosoftのSQL MCP Serverを実際に触ってみた検証記事。データベース操作をMCP経由でAIエージェントに公開する動きが着実に広がっていることを示す一例。
- **[AIにルールファイルを数ヶ月自動更新させ続けたら、ルールは"良く"育ったのか](https://zenn.dev/r_kaga/articles/c9fcb75f1ff284)** - AIエージェントが読むルールファイルやスキルファイルが、コード変更に伴い陳腐化していく問題に対し、ルール自体もAIに継続的に直させ続けた結果を検証した記事。AI駆動開発における「メタ運用」の実験として興味深い。
- **[Claude Codeのskillをskillでレビューする ― 静的チェック×LLMレビュー×git hooksの3層ゲート](https://zenn.dev/aldagram_tech/articles/c407ae672c9c0e)** - QAプロセスをまるごとClaude Codeのskillとして整備したチームが、そのskill自体を静的チェック・LLMレビュー・git hooksの3層で品質担保する仕組みを紹介した記事。skillのガバナンスという新しい課題への実践的な解法。
- **[AIもデータ基盤のユーザーになる時代の、BigQueryコストとの向き合い方](https://zenn.dev/linda/articles/1f48bad4d84747)** - 全職種でAI活用を進める中、AIエージェント自身が大量にBigQueryへクエリを投げるようになったことで顕在化したコスト増の問題と、その対策を具体的に整理した記事。AIがデータ基盤の新たな「ヘビーユーザー」になりつつある実態を示す。

## Qiita

- **[Amazon S3 Vectors で「月額ほぼゼロの RAG」を作ってみた](https://qiita.com/musa_rock/items/d90580d5cbcb8215d6f9)** - 専用のベクトルDBサービスを使わず、Amazon S3 Vectorsだけで低コストなRAG構成を組んだ検証記事。ストレージ料金ベースでほぼゼロコストのRAG基盤を実現できる可能性を具体的な構成とともに示している。
- **[ログイン成功率を上げるためのパスキー設計・実装](https://qiita.com/rio-song/items/f60b7045c4cba9cc225b)** - パスキー導入時に離脱を招きやすいUXの落とし穴を踏まえ、ログイン成功率を高めるための設計・実装のポイントを整理した記事。パスワードレス認証を実務に導入する際の具体的なノウハウが詰まっている。
- **[IAMポリシーでタグ必須にしたはずなのに作成出来る？Null条件の落とし穴](https://qiita.com/momorabi/items/28b74380fbde1a3a3660)** - AWS IAMポリシーでタグ付けを必須化する条件を設定したにもかかわらず、タグなしリソースが作成できてしまう「Null条件」の落とし穴を検証した記事。ガバナンス設計時に見落としがちな条件演算子の挙動を具体例で解説している。
- **[CLAUDE.mdによるClaude Codeの探索コスト削減を実測](https://qiita.com/eiji-noguchi/items/ad30cd311f083cd269d0)** - プロジェクトルートに置くCLAUDE.mdの有無で、Claude Codeがコードベースを探索するコスト（トークン数・時間）がどれだけ変わるかを実測した記事。AIエージェント向けドキュメントの効果を定量的に示している。
- **[Claude Codeで技術面接の壁打ち相手を作ってみませんか](https://qiita.com/kuma_3838/items/e07a4d45ca5cf2ff14ef)** - Claude Codeを技術面接の練習相手として活用し、想定質問への回答をその場で壁打ちする方法を紹介した記事。コード生成以外の学習支援用途としてのAIエージェント活用例。

## AWS 新着

- **[Introducing Amazon GuardDuty AI Protection for AWS AI workloads](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-ai-protection-aws/)** (2026-07-14) - GuardDutyがAmazon BedrockやSageMakerなどAIサービスを対象にした脅威検知機能「AI Protection」に対応した。AIワークロードの利用拡大に伴い、専用のセキュリティ監視が必須になりつつあることを示す。
- **[AWS Security Hub now provides AI inventory for organization-wide visibility of AI assets](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-ai/)** (2026-07-14) - Security Hubが組織全体のAI資産を継続的に可視化する「AIインベントリ」機能を追加した。どこでどのAIサービスが使われているかをセキュリティチームが横断的に把握できるようになる。
- **[Amazon Managed Grafana achieves FedRAMP High authorization in AWS GovCloud (US)](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-managed-grafana-fedramp-high/)** (2026-07-16) - Amazon Managed GrafanaがAWS GovCloud（US）でFedRAMP High認証を取得した。米国政府機関など高いコンプライアンス要件を持つ組織でも監視基盤としてGrafanaを採用しやすくなる。
- **[Amazon EC2 now surfaces the public SSM parameters associated with public AMIs](https://aws.amazon.com/about-aws/whats-new/2026/07/ec2-public-images-ssm-parameters)** (2026-07-16) - パブリックAMIに関連付けられたSSMパラメータストアの情報が、AMIメタデータ上で直接確認できるようになった。AMI選定時に関連パラメータの出所を追跡しやすくなり、サプライチェーンの透明性向上に寄与する。
- **[Track cost efficiency trends directly in Billing and Cost Management Dashboards](https://aws.amazon.com/about-aws/whats-new/2026/07/monitor-cost-efficiency-using-dashboards)** (2026-07-16) - Billing and Cost ManagementダッシュボードにCost Efficiencyウィジェットが追加され、コスト効率のトレンドを直接可視化できるようになった。FinOps施策の効果測定を定常的に行いやすくする機能追加。

## Lobsters

- **[Microsoft Comic Chat is now open source](https://opensource.microsoft.com/blog/2026/07/16/microsoft-comic-chat-is-now-open-source/)** (35pt) - 1990年代のMicrosoft製チャットクライアント「Comic Chat」がオープンソース化された。会話をコミック風に自動レイアウトするユニークなUIで知られる古典的ソフトウェアが、レトロコンピューティング愛好家向けに蘇った形。
- **[README, not](https://blog.yossarian.net/2026/07/16/README-not)** (27pt) - READMEに何をどこまで書くべきかについて、よくある慣習を批判的に検証したエッセイ。プロジェクトドキュメントの設計を惰性で決めるのではなく、読者の実際のニーズから逆算すべきだと論じている。
- **[perldelta - what is new for perl v5.44.0](https://metacpan.org/dist/perl/view/pod/perldelta.pod)** (18pt) - Perl 5.44.0の公式リリースノート。長年メンテナンスが続く言語処理系の細かな改善や非互換変更を一覧できる、地味だが実務者には欠かせない情報源。
- **[We're building Postgres in Rust. Using the LLVM of databases](https://turso.tech/blog/a-new-modern-version-of-postgres-in-rust)** (16pt) - Turso社がRustでPostgreSQL互換のデータベースエンジンを構築するプロジェクトを紹介した記事。データベース実装の共通基盤を「LLVM的」なレイヤーとして再設計しようという野心的な試み。
- **[PACT: Anonymous Credentials for the Web – Mozilla Hacks](https://hacks.mozilla.org/2026/06/pact-anonymous-credentials-for-the-web/)** (4pt) - Mozillaが提案する匿名クレデンシャル方式「PACT」を紹介した記事。個人を特定せずに本人性や資格だけをWeb上で証明する仕組みで、プライバシー保護と不正防止を両立させる設計を解説している。

## dev.to

- **[That online JSON converter you paste prod data into? It's uploading it.](https://dev.to/redorp/that-online-json-converter-you-paste-prod-data-into-its-uploading-it-33he)** - 何気なく使うオンラインJSON→YAML/CSV変換ツールが、実は貼り付けたデータをサーバーに送信している実態を検証した記事。本番データをうっかり外部サービスに漏らしてしまうリスクへの注意喚起として実務的な内容。
- **[The monolith won. Most teams just haven't admitted it yet.](https://dev.to/adioof/the-monolith-won-most-teams-just-havent-admitted-it-yet-2ib0)** - マイクロサービスを廃止しモノリスに戻したチームでレイテンシが800msから12msに劇的改善した事例を引き合いに、多くの組織にとってマイクロサービス化が過剰だったのではと論じた記事。アーキテクチャ選定の振り子が揺り戻している潮流を示す。
- **[AI Agents Don't Need a Bigger Prompt. They Need Governed Memory](https://dev.to/teolex2020/ai-agents-dont-need-a-bigger-prompt-they-need-governed-memory-1pke)** - AIエージェントの記憶管理は単なるプロンプト肥大化の問題ではなく、何を覚え・何を忘れさせるかを統制する「ガバナンスされたメモリ」の設計課題だと論じた記事。長期運用されるエージェントの品質を左右する論点を整理している。
- **[Why AI Agents Need a Real Browser Layer, Not Just Playwright Scripts](https://dev.to/anthonymax/why-ai-agents-need-a-real-browser-layer-not-just-playwright-scripts-3mdf)** - AIエージェントがWebを操作する際、単発のPlaywrightスクリプトでは不十分で、状態を保持する本物のブラウザレイヤーが必要だと論じた記事。エージェント向けブラウザ自動化基盤の設計思想を掘り下げている。
- **[WSO2's move from Java to Go, with a 10-20 year roadmap](https://dev.to/gophernment/wso2-prakaasedinhnaa-go-aethn-java-waang-roadmap-10-20-pii-3mo3)** - スリランカ発の老舗エンタープライズミドルウェア企業WSO2が、主力製品の実装言語をJavaからGoへ切り替える10〜20年規模のロードマップを発表したと報じた記事。長寿命な商用ミドルウェアが言語基盤ごと世代交代を図る珍しい事例。

## TechCrunch

- **[Google's AI Mode now lets you link and interact with select apps](https://techcrunch.com/2026/07/16/googles-ai-mode-now-lets-you-link-and-interact-with-select-apps/)** - Google検索のAI Modeが、単に質問に答えるだけでなく連携アプリを操作してタスクを完了できるよう拡張された。検索がAIエージェントのハブへと変化しつつある流れを示す発表。
- **[Roblox launches an AI-powered game-creation feature in its mobile app](https://techcrunch.com/2026/07/16/roblox-launches-an-ai-powered-game-creation-feature-in-its-mobile-app/)** - Robloxがモバイルアプリ上でテキストプロンプト一つから簡易ゲームを生成できる新機能「Build」を投入した。ゲーム開発の民主化がさらに低年齢層・非エンジニア層にまで及んでいることを示す。
- **[Period tracker Stardust shares users' health data with analytics firm, says Mozilla research](https://techcrunch.com/2026/07/16/period-tracker-stardust-shares-users-health-data-with-analytics-firm-says-mozilla-research/)** - Mozillaの調査により、生理管理アプリ「Stardust」がユーザーの健康データを外部の分析会社と共有していたことが判明したと報じられた。センシティブな個人データを扱うアプリのサードパーティ連携の透明性が改めて問われている。
- **[SpaceX suddenly aborts second Starship V3 launch after ignition](https://techcrunch.com/2026/07/16/spacex-suddenly-aborts-second-starship-v3-launch-after-ignition/)** - SpaceXがStarship V3の2回目の打ち上げを、点火後に突然中止した。原因は即座には明らかにされておらず、時間外取引でSpaceX関連株が一時4%超下落する事態にもなった。
- **[San Francisco mayor pushes for tougher rules after the Waymo traffic fiasco](https://techcrunch.com/2026/07/16/san-francisco-mayor-pushes-for-tougher-rules-after-the-waymo-traffic-fiasco/)** - 数時間規模の大渋滞を引き起こしたWaymoの自動運転車トラブルを受け、サンフランシスコ市長が州の規制当局に対しロボタクシーへのより厳格な規制を求めた。自動運転の実運用が都市インフラに与える影響が政治問題化している。

## Ars Technica

- **[HP fined 1.4 billion rupees for "cartelization" of ink cartridges, toner, PCs](https://arstechnica.com/gadgets/2026/07/hp-fined-1-4-billion-rupees-for-cartelization-of-ink-cartridges-toner-pcs/)** - インドの当局がHPに対し、インクカートリッジ・トナー・PCの価格を巡るカルテル行為があったとして14億ルピーの制裁金を科した。プリンター周辺機器の価格構造を巡る規制当局の監視が国際的に強まっていることを示す。
- **[T-Mobile bungled forced plan migration, canceling some users' free lines](https://arstechnica.com/tech-policy/2026/07/t-mobile-bungled-forced-plan-migration-canceling-some-users-free-lines/)** - T-Mobileが強制的なプラン移行作業を誤り、一部ユーザーの無料回線を誤って解約してしまったと報じられた。大規模な契約基盤の移行作業に伴う運用ミスが顧客に直接影響した事例。
- **[Energy IPOs surge as investors hunt for ways to play AI boom](https://arstechnica.com/information-technology/2026/07/energy-ipos-surge-as-investors-hunt-for-ways-to-play-ai-boom/)** - AIブームの恩恵を狙う投資家の資金がエネルギー関連企業のIPOに流入し、上場が相次いでいると報じられた。AIデータセンターの電力需要急増が、資本市場にまで波及している構図を示している。
- **[Move over, GPS: Navigation satellites in low-Earth orbit are making a comeback](https://arstechnica.com/space/2026/07/move-over-gps-navigation-satellites-in-low-earth-orbit-are-making-a-comeback/)** - 従来の中軌道GPSに代わり、低軌道（LEO）衛星を使った測位システムが再び注目されていると報じた記事。高精度・低遅延な測位が求められる自動運転やドローン用途を見据えた技術動向を解説している。
- **[Could China and Russia really destroy Starlink? Only with a boomerang.](https://arstechnica.com/space/2026/07/could-china-and-russia-really-destroy-starlink-only-with-a-boomerang/)** - StarlinkのようなメガコンステレーションをASAT（衛星攻撃兵器）で無力化することの技術的な難しさを検証した記事。数千機規模の衛星群を破壊しようとすれば自国の衛星も巻き添えになりかねないという「ブーメラン」効果を論じている。

## 注目トピック

今回のダイジェストで目立ったのは、AIエージェントに「何を任せ、何を渡さないか」という権限設計の議論が複数ソースで並行して深まっていることだ。はてなブックマークでは1PasswordがClaude向けに認証情報そのものを渡さずアクセス権限だけを付与する仕組みを発表し、dev.toでは「AIエージェントに必要なのは大きなプロンプトではなく統制されたメモリだ」という論考が支持を集めた。ZennでもClaude Codeのskillをskillでレビューする3層ゲートや、ルールファイル自体をAIに継続更新させる実験が紹介されており、AIエージェントの実運用が進むにつれて「作る」段階から「統制する」段階へと関心が移っていることがうかがえる。AWSがGuardDutyやSecurity HubにAI資産専用の脅威検知・可視化機能を相次いで追加したことも、この流れを裏付けている。

一方でセキュリティ・プライバシー面では、生理管理アプリStardustがユーザーの健康データを分析会社と共有していた実態がMozillaの調査で明らかになったほか、dev.toでは何気なく使うオンラインJSON変換ツールが実は貼り付けたデータをアップロードしていたという指摘があり、日常的なツール利用に潜むデータ漏洩リスクが改めて浮き彫りになった。またHPがインクカートリッジ等の「カルテル化」でインド当局から制裁金を科された件や、T-Mobileの強制プラン移行ミスによるユーザー回線の誤解約など、AIとは直接関係しない従来型のガバナンス・運用問題も依然として起き続けている。アーキテクチャの観点では、dev.toで紹介された「モノリスが勝った」という論考が、マイクロサービス化の揺り戻しという実務的な潮流を象徴的に示していた。
