---
title: "Tech Feed ダイジェスト（2026年7月5日）"
date: "2026-07-04T22:10"
category: "summary"
summary: "AlibabaがClaude Code禁止・AnthropicがSamsungとカスタムチップ協議・GoogleのAI電力消費37%増・AIエージェントとゼロトラストの衝突など"
tags: ["ai", "security", "aws", "devops", "agents", "backend"]
---

## はてなブックマーク (テクノロジー)

- **[消費者庁、Anker Japanがリコールを行っているモバイルバッテリー「Anker PowerCore 10000」が原因とみられる火災事故が5月に2件報告されたとして情報を公開。](https://applech2.com/archives/20260704-anker-powercore-1000-incident.html)** ([372users](https://b.hatena.ne.jp/entry/s/applech2.com/archives/20260704-anker-powercore-1000-incident.html)) - すでにリコール対象となっているモバイルバッテリーで、5月にさらに2件の火災事故が報告されたことを消費者庁が公表した。リコール告知後も対象製品が使われ続けている実態と、ハードウェア製品のリコール周知の難しさを改めて浮き彫りにしている。
- **[（自分的に）神な自作ツール配布場所](https://saisokuya.com/soft/)** ([240users](https://b.hatena.ne.jp/entry/s/saisokuya.com/soft/)) - 開発者が自作した便利ツール群を無償配布しているページで、実用性の高いユーティリティが多数まとめられている。個人開発のツールがSNS経由で一気に広まり、はてブでも大きく伸びた事例。
- **[個人用メモアプリをつくっている](https://mizzy.org/blog/2026/07/03/2/)** ([152users](https://b.hatena.ne.jp/entry/s/mizzy.org/blog/2026/07/03/2/)) - Obsidianの代替として、Cloudflare上で動く個人用メモWebアプリを自作した記事。既存の高機能メモツールに満足しきれなかった開発者が、必要な機能だけを備えた自前ツールに回帰する動きの一例。
- **[Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html)** ([119users](https://b.hatena.ne.jp/entry/s/www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html)) - AI Engineerカンファレンスでの講演を書き起こした記事で、エージェントが書くコードの量が増えるほど「理解すること」がボトルネックになると指摘。コード説明ドキュメントや理解度チェッククイズなど、エージェントが作ったシステムを効率的に理解するための具体的な工夫を紹介している。
- **[現在の日本語のIT用語は横文字ばかりだが、初期の頃は日本IBMが超頑張って意訳した用語が雑誌に出てくると奇異とかバカにされていた話…シャットダウンが「遮断」は秀逸](https://togetter.com/li/2716883)** ([109users](https://b.hatena.ne.jp/entry/s/togetter.com/li/2716883)) - 日本語IT用語がカタカナ表記に塗り替えられていった経緯を、日本IBMによる意訳の努力とその後の受容のされ方から振り返るまとめ。技術用語の翻訳文化がどう形成されてきたかという、普段意識しない歴史を掘り下げている。

## Zenn

- **[Next.jsのpreloadが生成するHTTPヘッダーに日本語ファイル名が紛れて本番だけエラーが出た話](https://zenn.dev/hidechannu/articles/20260703-japanese-filename-bytestring)** - Next.js本番環境でだけ発生し続けた`Cannot convert argument to a ByteString`エラーの原因を突き止めた記録。日本語ファイル名の画像がpreloadヘッダーに紛れ込むという地味な原因が、本番限定の再現しづらい不具合を生んでいた経緯が具体的に示されている。
- **[AIエージェント時代のターミナルマルチプレクサ「herdr」にtmuxから乗り換えた](https://zenn.dev/studypocket/articles/herdr-ai-agent-multiplexer)** - 長年tmuxを使ってきた開発者が、複数のAIエージェントを並行稼働させる用途に特化したターミナルマルチプレクサ「herdr」に乗り換えた理由を紹介。エージェント併走が当たり前になった開発スタイルに合わせて、ツール選定の基準自体が変わりつつあることを示す記事。
- **[Fable 5をトークン破産させずに使い倒す — オーケストレーターに徹させる運用](https://zenn.dev/yui/articles/740da24e9ee419)** - Claude Fable 5をメインモデルに設定して何でもやらせた結果トークン消費が激しくなった反省から、Fable 5にはオーケストレーター役だけを担わせる運用に切り替えた記事。賢さを活かしつつコストを抑えるモデル使い分けの実践例。
- **[グラフニューラルネットワーク(GNN)の基礎から多層化を阻む「オーバースムージング」への対策を解説](https://zenn.dev/dalab/articles/80ce9a10d507b8)** - GNNの基本概念を整理した上で、層を深くするほど各ノードの表現が均質化してしまう「オーバースムージング」問題とその対策手法を解説した記事。GNNの表現力を実際に引き出す上でつまずきやすいポイントがまとめられている。
- **[ローカルLLMで「Pi」エージェントを動かす](https://zenn.dev/fuwamoekissaten/articles/bb5f5364838ced)** - チャット形式のAI利用が「非効率」とされ、自律的に動くエージェントが主流になった流れを踏まえ、クラウドAPIに頼らずローカルLLMで動くエージェント「Pi」を構築した記事。ローカル完結でエージェントを動かしたい開発者向けの実践知見。

## Qiita

- **[新しいHTTPメソッド「QUERY」をHono + Bunで実装してみる](https://qiita.com/maaaashi/items/6eefccb7361f64607865)** - 標準化されたばかりの新HTTPメソッド「QUERY」を、Hono + Bunで実際に実装して動作を確認した記事。GETのURL長制限とPOSTの副作用ありという従来の二択を埋める新メソッドを、いち早く手元で試した実践記録。
- **[InvokeRequiredと戦い続けた男が、async/awaitで成仏した話](https://qiita.com/inuta-one/items/2a86ed6e13e039b7e1fb)** - WinFormsアプリで別スレッドからUIを更新する際に必須だった`InvokeRequired`の煩雑な記述から、async/awaitベースの書き方へ移行した経験談。古典的なUIスレッド制御の作法が、モダンな非同期処理でどう置き換えられるかを実体験ベースで示している。
- **[AIが作ったアプリ、セキュリティの穴は誰が塞ぐ？](https://qiita.com/skmtwork0/items/88c18a34555ceb7467a0)** - 「エンジニアはもういらないのでは」という前回記事への反響を受け、AIが実装したアプリのセキュリティ上の欠陥を実際に誰が発見し修正するのかを掘り下げた記事。バイブコーディングが広がるほど切実になる責任の所在の問題を扱っている。
- **[プロンプトを磨くのはもう古い?「コンテキストエンジニアリング」に片足を突っ込む話](https://qiita.com/shoka-jp/items/770dc588dee277d7b36b)** - LLMに入力されるのはユーザーが書いたプロンプトの一部でしかなく、実際にモデルが見ている情報全体を設計する「コンテキストエンジニアリング」という考え方を紹介した記事。プロンプト単体の工夫から一歩進んだ設計視点が整理されている。
- **[Lambdaのパフォーマンスチューニングで処理速度を3倍速くした話](https://qiita.com/MasatakaMachiya/items/91f5e5785ce1f7e51234)** - 画面レンダリングに平均11秒かかっていたWebアプリのボトルネックを調査し、Lambdaのコールドスタート周りの処理を見直すことで速度を3倍に改善した実践記事。サーバーレス特有の性能劣化要因を具体的に切り分けている。

## AWS 新着

- **[AWS Config now supports 8 new resource types](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-config-new-resource-types)** (2026-07-02) - AWS Configが、API Gateway、EC2、S3 Vectorsなど8つの新しいリソースタイプに対応した。設定管理の対象範囲が広がり、AWS環境全体のコンプライアンス監視をより網羅的に行いやすくなる。
- **[Amazon ECS now provides real-time deployment observability in the AWS Management Console](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-aws-management-console/)** (2026-07-01) - ECSのデプロイ状況をコンソール上でリアルタイムに可視化できるようになった。デプロイの進行状況や失敗箇所を追いかける際に、これまで複数のツールを行き来していた確認作業がコンソール内で完結しやすくなる。
- **[Amazon EC2 Dedicated Hosts now support AMD SEV-SNP](https://aws.amazon.com/about-aws/whats-new/2026/07/ec2-amd-sev-snp-dedicated-hosts)** (2026-07-01) - EC2 Dedicated HostsがAMD SEV-SNPによる機密コンピューティングに対応した。専有ホスト環境でも、メモリ暗号化を伴う機密ワークロードを実行できる選択肢が広がる。
- **[Amazon CloudWatch Logs enriches log events with AWS resource tags](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-resource-tags/)** (2026-06-30) - CloudWatch Logsのログイベントに、リソースタグの情報が自動付与されるようになった。チームやオーナーといった組織のメタデータを軸に、ログの絞り込みや分析がしやすくなる。
- **[Amazon Managed Service for Prometheus achieves FedRAMP High and DoD IL-4/5 authorization in AWS GovCloud (US)](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-managed-service-prometheus-fedramp-high/)** (2026-07-01) - Amazon Managed Service for PrometheusがGovCloud (US)でFedRAMP HighとDoD IL-4/5の認証を取得した。政府機関や防衛関連ワークロードでも、Prometheus互換の監視基盤を規制要件を満たしたまま利用できるようになる。

## Lobsters

- **[What should a personal website be?](https://ratfactor.com/cards/personal-website)** (40pt) - 個人サイトが本来どうあるべきかを問い直すエッセイ。SNSのプロフィールに個人サイトの役割が奪われつつある中、自分だけの場所を持つことの意味を改めて考察している。
- **[Do Wavy Walls Really Use Fewer Bricks? I Tested It in Blender](https://blog.tymscar.com/posts/crinklecranklewalls/)** (25pt) - 波型の「クリンクル・クランクル・ウォール」がまっすぐな壁よりレンガを節約できるという通説を、Blenderでのシミュレーションを使って実際に検証した記事。俗説を手を動かして裏付ける、遊び心のある技術検証。
- **[FreeBSD ate my ram](https://crocidb.com/post/freebsd-ate-my-ram/)** (15pt) - FreeBSDのメモリ使用量表示が想定より大きく見える原因を、ZFSのARCキャッシュなどの仕組みまで遡って調査した記事。「メモリを食っている」と誤解しがちな挙動の正体を丁寧に解説している。
- **[Reducing Assumptions, Exploding Your Code](https://ryelang.org/blog/posts/reducing_assumptions_but_exploding/)** (15pt) - プログラミング言語Ryeの開発者が、コードの前提条件を減らそうとするほど処理の分岐が爆発的に増えてしまうというトレードオフを論じた記事。言語設計における抽象化とシンプルさの綱引きを扱っている。
- **[thundersnap v0.01: an undo button for everything](https://github.com/tailscale/thundersnap/)** (7pt) - Tailscaleが公開した、あらゆる操作に対して「元に戻す」を提供しようとする実験的プロジェクトの初期リリース。ファイルシステムレベルでの汎用アンドゥという野心的なテーマに、著名なネットワーキング企業が取り組んでいる点が注目されている。

## dev.to

- **[I Thought I Understood Containers. Then I Tried Building One.](https://dev.to/henryosei/i-thought-i-understood-containers-then-i-tried-building-one-5a80)** - namespacesやcgroupsといった用語を知っているつもりだった筆者が、実際に自分の手でコンテナをゼロから作ってみて初めて本当の意味を理解したという記事。知識として知っていることと実装できることの間のギャップを率直に描いている。
- **[Identity Is the New Perimeter: Why AI Agents Break Zero Trust](https://dev.to/alifunk/identity-is-the-new-perimeter-why-ai-agents-break-zero-trust-20h)** - 「人間が意思決定する」という前提の上に成り立ってきたゼロトラスト・アーキテクチャが、自律的に判断し行動するAIエージェントの登場によって崩れつつあると論じる記事。エージェントを主体としたID管理の再設計が必要だと指摘している。
- **[Someone Built a Physical Gear Shifter for Claude — and It's a Better UX Lesson Than Most Software Ships](https://dev.to/xenocoregiger31/someone-built-a-physical-gear-shifter-for-claude-and-its-a-better-ux-lesson-than-most-software-m1h)** - Claudeのモード切り替えのために実際の車のギアシフターを改造して物理コントローラー化した事例を紹介し、そこから学べるUXの教訓を論じた記事。ソフトウェアのモード切り替えUIより物理デバイスの方が直感的だったという逆説的な気づきが興味深い。
- **[Why IoT Modules Still Use 1981 AT Commands](https://dev.to/fluidwire/why-iot-modules-still-use-1981-at-commands-j22)** - セルラーモデムやWi-Fiモジュールが今なお1981年生まれのATコマンドを使い続けている理由を解説した記事。枯れた仕組みが長期にわたって業界標準であり続ける、組み込み分野特有の事情が語られている。
- **[AI Governance — EU AI Act Compliance, Risk Assessment, and Audit Logging](https://dev.to/hiroki-kameyama/ai-governance-eu-ai-act-compliance-risk-assessment-and-audit-logging-big)** - マルチエージェントのオーケストレーター/ワーカーパターンを扱った前回記事を踏まえ、EU AI Actへの準拠を見据えたリスク評価と監査ログの実装方法を解説した記事。AIガバナンスを実装レベルに落とし込む具体的なアプローチを示している。

## TechCrunch

- **[Alibaba reportedly bans employees from using Claude Code](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)** - AlibabaがClaude Codeを「高リスクソフトウェア」に分類し、従業員による利用を禁止したと報じられた。中国企業が競合他社製の高性能AIコーディングツールを社内で締め出す動きとして、地政学的な緊張が開発ツール選定にまで及んでいることを示している。
- **[Anthropic is discussing a new custom chip with Samsung](https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/)** - AnthropicがSamsungとカスタムAIチップの開発について協議していると報じられた。OpenAIがBroadcomと自社チップで提携したのに続き、大手AI企業が推論コスト削減のため専用ハードウェアの確保に動いていることを示す事例。
- **[A warning sign about AI's real cost, courtesy of Google and Amazon](https://techcrunch.com/2026/07/02/a-warning-sign-about-ais-real-cost-courtesy-of-google-and-amazon/)** - AI需要の急増が原因で、GoogleやAmazonのようなテック大手がネットゼロ目標の達成をより難しくしていると指摘する記事。AIブームの環境コストが、企業の脱炭素公約と正面から衝突し始めている実態を伝えている。
- **[IQM, Europe's first public quantum company, admits the future of the tech is uncertain](https://techcrunch.com/2026/07/02/iqm-europes-first-public-quantum-company-admits-the-future-of-the-tech-is-uncertain/)** - フィンランド発の量子コンピュータ企業IQMが、欧州初の上場量子企業としてナスダックに約19億ドルの評価額でデビューした。上場に際して自ら量子技術の将来の不確実性を認めている点が、業界の実情を映し出している。

## Ars Technica

- **[Google's AI buildout drove 37% increase in electricity use in 2025](https://arstechnica.com/ai/2026/07/googles-ai-buildout-drove-37-increase-in-electricity-use-in-2025/)** - Googleのデータセンター電力消費が2025年に前年比37%増加したと報じられた。クリーンエネルギー投資と並行してAI関連の電力需要を抑えようとする努力が、実際の増加ペースに追いついていない様子が示されている。
- **[Newly discovered PamStealer isn't your typical macOS malware](https://arstechnica.com/security/2026/07/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy/)** - 巧妙な手口でステルス性を保つ新種のmacOS向け情報窃取マルウェア「PamStealer」が発見された。従来Windowsに比べ狙われにくいとされてきたMacを標的とする攻撃者側の投資が増えている実態を示す事例。
- **[Google loses long-running appeal of record EU fine, will have to cough up $4.7 billion](https://arstechnica.com/gadgets/2026/07/google-loses-long-running-appeal-of-record-eu-fine-will-have-to-cough-up-4-7-billion/)** - Googleが検索エンジンとブラウザをAndroidにバンドルしていた慣行を巡るEUの制裁金訴訟で、長期間続いた控訴に敗れ47億ドルの支払いを命じられた。プラットフォーマーの抱き合わせ商法に対する欧州規制当局の姿勢の強さを改めて示す判決となった。
- **[Musk's X poses "serious risk to Americans' privacy," advocates warn FTC](https://arstechnica.com/tech-policy/2026/07/musks-x-poses-serious-risk-to-americans-privacy-advocates-warn-ftc/)** - Xに対するFTCの監視を終了させようとするイーロン・マスク氏の働きかけに対し、プライバシー擁護団体がAI活用も絡めた深刻なリスクがあるとして反対を訴えている。AI機能の統合が進むSNSプラットフォームへの監督体制のあり方が問われている。
- **[FAA proposal: Supersonic airliners can fly over US cities if they're quiet](https://arstechnica.com/gadgets/2026/07/faa-proposal-supersonic-airliners-can-fly-over-us-cities-if-theyre-quiet/)** - FAAが、ソニックブームを抑えた「静かな」超音速旅客機であれば米国都市上空の飛行を認める新規則案を提示した。長らく禁止されてきた陸上超音速飛行が、技術的な騒音抑制を条件に解禁へと動き出している。

## 注目トピック

今日最も大きな話題は、地政学的な緊張がAI開発ツールの選定にまで直接波及してきたことだ。AlibabaがClaude Codeを「高リスクソフトウェア」として社内利用を禁止したと報じられた一方、Anthropic自身はSamsungとカスタムAIチップの開発を協議していることも明らかになった。OpenAIがBroadcomと自社チップで提携した動きに続くもので、AI企業同士の競争が、モデルの性能だけでなく専用ハードウェアの確保や地域ごとの利用制限という形にまで広がっていることがうかがえる。同時にGoogleのデータセンター電力消費が2025年に37%増加したと報じられたことも、AIの急拡大が引き起こす見えにくいコスト（電力・環境負荷）が無視できない規模になっていることを示している。

もう一つの軸は、「AIエージェントに任せることと、人間が理解すること」のバランスをどう取るかという問いが複数のソースで形を変えて現れたことだ。はてなブックマークで119usersを集めた「Understanding is the new bottleneck」は、エージェントが書くコードが増えるほど人間側の理解こそがボトルネックになると論じ、dev.toの「Identity Is the New Perimeter」は、AIエージェントが自律的に意思決定することでゼロトラスト・アーキテクチャの前提そのものが崩れつつあると指摘した。Qiitaでも「AIが作ったアプリのセキュリティの穴は誰が塞ぐのか」という問いや、プロンプト単体の工夫を超えた「コンテキストエンジニアリング」という考え方が読まれており、AIに実装を委ねる範囲が広がるほど、人間側の検証・設計・責任の持ち方が改めて問い直される一日だった。
