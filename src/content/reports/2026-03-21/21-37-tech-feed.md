---
title: "Tech Feed ダイジェスト（2026年3月22日）"
date: "2026-03-21T21:37"
category: "summary"
summary: "codexでスパコン破壊・H&RBlockにTLS秘密鍵バンドル・Palantir AI軍事採用・RTMP廃止・方眼紙ExcelはLLMが最強・antiX-26 5initシステムなど。"
tags: ["ai", "security", "aws", "golang", "rust", "linux", "claude-code", "devtools", "military", "oss"]
---

## はてなブックマーク (テクノロジー)

- **[日本のボールペンはサラサラ、中国はガリガリ。技術開発には成功したものの、ビジネスベースに乗せられない中国](https://tamakino.hatenablog.com/entry/2026/03/19/080000)** ([254users](https://b.hatena.ne.jp/entry/s/tamakino.hatenablog.com/entry/2026/03/19/080000)) - ボールペン先材料（チップ）の精密加工技術で日本水準にほぼ追いついた中国鉄鋼メーカーが、依然として高級文房具市場では独占的地位にある日本ブランドの牙城を崩せていない現状を伝えるレポート。「技術開発は成功しても商業化は別問題」というメッセージは、ソフトウェア産業にも通じる普遍的な示唆がある。

- **[非エンジニア向け、ClaudeCodeで業務Skillsを作る方法](https://note.com/suh_sunaneko/n/n7b2108779bf6)** ([121users](https://b.hatena.ne.jp/entry/s/note.com/suh_sunaneko/n/n7b2108779bf6)) - プログラマーでないPMが、Claude Codeのスキル機能を使って自社業務に特化したAIスキルを実際に作った手順を解説。CLAUDE.mdの設計から始まり、繰り返し業務をワンコマンド化するまでの過程を具体的に示しており、「AIエージェントはエンジニアだけのもの」という固定観念を崩す実践例として注目されている。

- **[自作OSでLinuxコンテナを動かす](https://speakerdeck.com/n4mlz/zi-zuo-osdelinuxkontenawodong-kasu)** ([103users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/n4mlz/zi-zuo-osdelinuxkontenawodong-kasu)) - 自作OSにLinuxカーネルのnamespace・cgroups・overlayfsを実装し、実際にコンテナを動作させるまでの技術解説スライド。コンテナの「魔法」を根底から理解するための低レイヤーな実装記録であり、OSとコンテナランタイムの境界を学ぶ良質な資料として高評価を集めている。

- **[米国防総省、パランティアのAIを指揮統制システムに採用](https://jp.reuters.com/world/security/OQHNHWUCG5NHVIGKCT2INXQ6VU-2026-03-21/)** ([55users](https://b.hatena.ne.jp/entry/s/jp.reuters.com/world/security/OQHNHWUCG5NHVIGKCT2INXQ6VU-2026-03-21/)) - 米国防総省がPalantir（PLTR）のAI指揮統制システム「Maven Smart System」を正式採用することを副長官通達で明らかにした。AIが戦場の意思決定支援に組み込まれる本格段階を示す重要な決定で、デュアルユースAIの軍事応用を巡る倫理的・技術的論点が改めて浮上している。

- **[ページをブックマークしてHTML・スクショ・PDFなどで自動保存して検索・ハイライトなどの注釈・複数人での共有・スマホアプリからの利用・RSSの自動保存・AIによる自動タグ付けができる「Linkwarden」、無料でセルフホストも可能](https://gigazine.net/news/20260321-linkwarden/)** ([51users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260321-linkwarden/)) - ブックマーク保存時にページをPDF化・スクリーンショット保存し、後から検索・ハイライト・複数人共有・RSS自動保存・AIタグ付けが使えるOSSブックマーク管理ツール「Linkwarden」を紹介。セルフホストも無料で可能で、リンク切れを気にせず資料を永続的に管理したいエンジニアにとって有力な選択肢。

## Zenn

- **[codexでスパコンを壊してしまった話](https://zenn.dev/chizuchizu/articles/a991c61ff0d073)** - スーパーコンピュータのログインノードでOpenAI Codexを起動した瞬間、プロセスがハングしてストレージがデッドロック状態に陥り、他ユーザーを含めてSSHでシェルに入れなくなった事故報告。共有HPC環境でのAIコーディングアシスタント利用が「ログインノードの常識外れな負荷」を引き起こしうることを実体験で示す注意喚起記事。

- **[方眼紙Excel→Markdown変換、結局LLMしか勝たん話【全手法比較】](https://zenn.dev/ougotti/articles/houganshi-excel-to-markdown)** - セル結合・複雑レイアウトが入り組んだいわゆる「方眼紙Excel」をMarkdownに変換する手法を、python-docx・openpyxl・専用ライブラリ・LLMまで複数手法で比較検証。正規ライブラリでは構造解析が破綻するケースで LLMのみが実用的な品質を出すことを実測データで示しており、レガシーExcel資産の活用に取り組む現場エンジニアに参考になる。

- **[個人開発サイトにBOTが大量アクセス → Cloudflare無料プランで撃退した話](https://zenn.dev/ausssxi/articles/646f7078117847)** - 個人開発サービスに突如として大量のスクレイパーBOTが押し寄せ、サーバー負荷が急増した際に無料のCloudflare WAFとボット管理機能で対応した実録。設定手順・効果・無料プランの限界まで具体的に記されており、ローンチ直後の個人サービスが安価にボット対策を講じるための実践的ガイドとして機能している。

- **[「ポインタ渡し」なんてものは存在しません！【C言語入門】](https://zenn.dev/menndouyukkuri/articles/db317dc8168658)** - C言語の「値渡し」「ポインタ渡し」という用語の混乱を整理し、「実際に存在するのはアドレス値の値渡しだけ」という正確なモデルを丁寧に解説。初学者が陥りやすい概念的混乱の原因を図示で説明しており、AIが生成したコードを読み解く際にも低レベルの理解が重要であることを改めて示している。

## Qiita

- **[Claude Codeでひとりチーム開発を回すための設定とワークフロー](https://qiita.com/kei1-dev/items/c045233e1c4fb497c25d)** - 1人開発でAIに多くを委ねるためのClaude Code設定を整理・公開した記事。CLAUDE.mdの書き方・サブエージェントへの並列タスク委譲・コミットフックとの連携・コスト管理まで、「ひとりでチーム分の出力をどう出すか」という実践的な構成が具体的なコードとともに示されており、ソロ開発者に直接使える内容。

- **[ハーネスエンジニアリングとは何か ── コンテキストエンジニアリングの次のパラダイム](https://qiita.com/miruky/items/155f3b5a0dcde72fcd10)** - AIコーディングエージェントが途中でコンテキストを失って再起動される問題を解決するために、「エージェントが確実に動き続けられる構造（ハーネス）を設計する」という新概念を提唱。プロンプト→コンテキスト→ハーネスというパラダイムの変遷を整理しており、長期実行エージェントを運用する開発者が直面する課題への一つの回答を示している。

- **[Excelブックを生成AI向けMarkdownに変換する `xlsx2md` を作りました](https://qiita.com/igapyon/items/cfbbc0d6112059b26522)** - ExcelブックをLLMが読み込みやすいMarkdown形式にローカル変換するシングルファイルWebアプリ「xlsx2md」を公開。RAGのデータソースとしてExcelを活用したい場合や、AIにExcelの内容を分析させたい場合に、変換ステップをブラウザだけで完結できるシンプルなツール。APIキー不要でローカル完結のプライバシー配慮設計も特徴。

- **[UI UX Pro Max：AIコーディングアシスタントにデザインセンスを与えるSkill](https://qiita.com/nogataka/items/1e35dd4f573547626aff)** - Claude CodeやCursorに「このサービスはフィンテック向けなのでブルーグレー＋ダークトーンで」といったデザイン文脈を与えるカスタムスキルの設計方法を解説。カラーパレット・フォント組み合わせ・レイアウト原則をコンテキストとして注入することで、機能的だが無個性なAI生成UIを業界感・ブランド感あるものに変える実践ガイド。

## AWS 新着

- **[Amazon EC2 Fleet、中断可能な Capacity Reservations をサポート](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-ec2-fleet-interruptible-capacity-reservati/)** (Mar 19) - EC2 Fleetが「中断可能なCapacity Reservations」に対応し、未使用時に他のインスタンスにキャパシティを解放できるようになった。コスト最適化と確保済みキャパシティの両立が求められるバッチワークロードや機械学習トレーニングジョブのインフラ設計に新たな選択肢が加わった。

- **[AWS Lambda が Availability Zone メタデータをサポート](https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-availability-zone-metadata/)** (Mar 19) - Lambda関数が実行中に自身のAZを取得できるようになった。同一AZにあるElastiCacheやRDSと通信を最適化したり、AZレベルのオブザーバビリティを強化したりする際に有用で、マルチAZ構成のサーバーレスアーキテクチャのレイテンシ最適化に活用できる。

- **[Amazon ECR、Chainguard イメージのプルスルーキャッシュをサポート](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-ecr-pull-through-cache-chainguard/)** (Mar 18) - ECRのプルスルーキャッシュがChainguard（セキュリティ強化済みディストロレスコンテナイメージ）に対応。VPC内でChainguardのCVE最小化イメージをキャッシュ経由で取得できるようになり、外部レジストリ依存を排除しつつセキュアなベースイメージ戦略を維持できる。

- **[AWS Direct Connect、シドニー新拠点（SY5）を追加](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-direct-connect-sydney-sy5/)** (Mar 19) - AWS Direct ConnectがシドニーにSY5という新しい拠点を追加し、AP（シドニー）リージョンとの専用接続ポイントが増設された。オーストラリア企業および日本企業のAsia Pacificデータ経路の冗長性・帯域オプションが拡充される。

## Lobsters

- **[Solod: Go can be a better C](https://antonz.org/solod/)** - GoをC言語の代替として使う場合の設計パターンと利点を解説した記事。ゼロ値の保証・シンプルな型システム・ランタイムなしのネイティブバイナリ生成など、システムプログラミングでGoがCを上回る局面を具体的に示しており、組み込み・ツール開発でCからGoへの移行を検討するエンジニアに参考になる。

- **[H&R Block tax software installs a TLS root certificate with bundled private key](https://news.ycombinator.com/item?id=47457162)** - 米国の大手税務申告ソフトH&R Blockが、プライベートキーをソフトウェア内に同梱した状態でTLSルート証明書を端末にインストールすることが発覚。秘密鍵が全ユーザーに配布される形になっており、理論上は同ソフトをインストールした全PCの通信を中間者攻撃できる致命的な設計ミス。セキュリティコミュニティで大きな批判を集めている。

- **[bye bye RTMP](https://daniel.haxx.se/blog/2026/03/21/bye-bye-rtmp/)** - curlのメンテナー Daniel Stenberg が、curlからRTMP（Real-Time Messaging Protocol）サポートを削除することを発表したブログ記事。RTMPライブラリ（librtmp）のメンテナンスが停止して久しく、セキュリティリスクとビルド複雑性に見合うユースケースがなくなったことが理由。OSSのサポート終了判断のプロセスとしても参考になる事例。

- **[antiX-26 released with 5 init systems](https://antixlinux.com/antix-26-released/)** - 軽量Linuxディストリビューション「antiX 26」がリリース。sysvinit・runit・s6・66・OpenRCの5種類のinitシステムを選択可能というユニークな特徴を持ち、古いハードウェアや組み込み環境でのLinux活用を重視する設計。Systemd中心の主流に対する代替アーキテクチャの選択肢を提供し続けている。

- **[Related UI elements should not appear unrelated](https://rakhim.exotext.com/related-ui-elements-should-not-appear-unrelated)** - 関連する操作をするUIコンポーネントが視覚的に離れていると、ユーザーはそれらの関係性を認識できないというUI設計の原則を、多数の実例で解説。AIが生成するUIが機能的に正しくても視覚的なグルーピングを壊しやすいという観点でも読めるデザイン原則の再確認として価値がある。

## dev.to

- **[Everyone Is Talking About AI Trading Bots. We Actually Built One. Here's What Happened.](https://dev.to/crashland/everyone-is-talking-about-ai-trading-bots-we-actually-built-one-heres-what-happened-4cb3)** - Polymarket（予測市場）でAI取引ボットを実際に構築・運用した詳細なポストモーテム記事。裁定取引から板メイキングへの戦略転換、逆選択（アドバース・セレクション）による損失、注文・ポジション管理の複雑さ、そしてClaude AIとペアプログラミングしてRustでOMSを構築した経験まで、OSSとしてコードを公開した上で失敗と学びを正直に報告している。

- **[How to Send WhatsApp Messages from Your App in 5 Minutes](https://dev.to/msaeedsakib/how-to-send-whatsapp-messages-from-your-app-in-5-minutes-44kf)** - MetaのWhatsApp Business API（要ビジネス審査）を使わずに、WhatsApp Webセッションを利用したREST APIでアプリからメッセージ送信する方法を解説。スモールスタートのサービスやPoCでWhatsApp連携を素早く試したい開発者向けのチュートリアルで、メディア送信・Webhook受信・メッセージ履歴取得までの実装フローを紹介している。

## TechCrunch

- **[It's been 20 years since the first tweet](https://techcrunch.com/2026/03/21/its-been-20-years-since-the-first-tweet/)** - 2006年3月21日にJack Dorseyが投稿した「just setting up my twittr」から20年。X（旧Twitter）はイーロン・マスク体制下で大きく変貌し、同日には投資家を誤解させたとしてマスクに損害賠償義務を認める陪審評決も出るという節目となった。ソーシャルメディアの歴史的転換点として記録される1日となった。

- **[Delve accused of misleading customers with 'fake compliance'](https://techcrunch.com/2026/03/21/delve-accused-of-misleading-customers-with-fake-compliance/)** - コンプライアンス管理スタートアップの「Delve」が、プライバシー・セキュリティ規制への準拠を「偽って」数百社の顧客に販売していたと匿名Substackで告発された。実際のコンプライアンス要件を満たさないまま「準拠済み」と認定するレポートを販売していた疑惑で、AIを使った「コンプライアンス自動化」市場の品質問題を浮き彫りにしている。

- **[How fusion power works and the startups pursuing it](https://techcrunch.com/2026/03/21/how-fusion-power-works-and-the-startups-pursuing-it/)** - 核融合発電の仕組みと、それを実用化しようとしているスタートアップ各社（慣性閉じ込め・磁場閉じ込めなど方式別）を体系的に解説した保存版記事。AI学習センターの電力需要が急増する中でクリーンエネルギーへの注目が高まっており、融合発電が現実的な選択肢として投資家から改めて評価されている背景がある。

- **[Why Wall Street wasn't won over by Nvidia's big conference](https://techcrunch.com/2026/03/21/why-wall-street-wasnt-won-over-by-nvidias-big-conference/)** - Jensen HuangがGTCで2027年までに$1兆ドルのAIチップ販売を予測したにもかかわらず、株式市場はほぼ無反応に終わった背景を分析。「期待はすでに株価に織り込まれていた」「具体的な新製品発表に乏しかった」などの投資家視点の評価を整理しており、AIインフラブームの「過熱」と「次の成長エンジン」への問いを投げかけている。

## Ars Technica

- **[We keep finding the raw material of DNA in asteroids—what's it telling us?](https://arstechnica.com/science/2026/03/we-keep-finding-the-raw-material-of-dna-in-asteroids-whats-it-telling-us/)** - 小惑星リュウグウのサンプルからDNA塩基4種すべてが検出されたという最新論文を受け、過去十数年の類似発見を整理した解説記事。「なぜ以前はリュウグウで見つからなかったか」という謎が今回の研究で解決されており、地球の生命材料が宇宙由来である可能性と、塩基がどのように生成されたかのメカニズム解明に向けた進展が詳しく説明されている。

- **[DOGE goes nuclear: How Trump invited Silicon Valley into America's nuclear power regulator](https://arstechnica.com/science/2026/03/doge-goes-nuclear-how-trump-invited-silicon-valley-into-americas-nuclear-power-regulator/)** - DOGEチームから送り込まれた31歳の弁護士（核エネルギーの法的・技術的経験なし）が米原子力規制委員会（NRC）の政策決定に関与し、会議中に放射線被曝の健康懸念を「軽視」する発言を繰り返していたとArs Technicaが報告。「NRCは我々の言う通りにする」とされる発言も記録されており、規制機関の独立性と安全基準の形骸化への懸念が高まっている。

- **[Once again, ULA can't deliver when the US military needs a satellite in orbit](https://arstechnica.com/space/2026/03/spacex-swipes-yet-another-military-contract-from-united-launch-alliance/)** - 米宇宙軍がGPS Block IIIの最終衛星打ち上げをULAからSpaceXのFalcon 9に移管。Vulcanロケットが固体ロケットブースターの異常で運用停止中のため、ULAは約1年余りで4回連続して政府衛星打ち上げ契約をSpaceXに奪われる形となった。軍の宇宙打ち上げ市場でSpaceXの支配的地位がさらに強固になっている。

## 注目トピック

本日のフィードを横断して浮かび上がる最大のトレンドは**「AIツールが予期しない環境影響を与える時代の到来」**だ。codexがスーパーコンピュータのログインノードを事実上クラッシュさせた事例は笑い話のようでいて、共有HPC環境・マルチテナントサーバー・本番環境でAIコーディングエージェントを無警戒に使うことのリスクを突いている。同様に、H&R Blockのプライベートキー同梱TLS証明書問題やDelveの「偽コンプライアンス」疑惑は、「ツールへの信頼」が安全装置として機能しなくなるケースを示しており、AIに限らずサードパーティツール全般の真正性検証が求められる時代を映している。

もう一つ注目すべきは**AI活用の「民主化」と「構造化」の両軸**での進展だ。非エンジニアのPMがClaude Codeで業務スキルを自作する事例や、ハーネスエンジニアリング・Claude Codeひとりチーム開発設定など、AI活用がプロンプトを磨く段階から「エージェントが安定稼働できる構造をどう設計するか」という運用工学の段階に移行しつつあることが、複数のソースから一致して見えてきた。Palantirの軍事AI採用や核融合スタートアップへの注目はAI・エネルギー・安全保障が交差する投資テーマの成熟を示しており、ソフトウェアの外側でのAI実装競争が加速している。
