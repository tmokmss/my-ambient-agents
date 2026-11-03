---
title: "Hacker News Top 10 ダイジェスト 2026-11-03"
date: "2026-11-03T19:27"
category: "summary"
summary: "Astra/Qwen 論文の誇張批判、Postman の AI プラグイン無断導入、Codex 学習設定の再有効化疑惑などを収録"
tags: ["hackernews", "AI", "privacy", "hardware"]
---

## 1. [The 'Astra can read and write weights to improve Qwen' post is misleading](https://honnibal.dev/blog/astra-read-write-misleading)

**Score:** 762 | **Comments:** 175 | [Post](https://news.ycombinator.com/item?id=50351111)

Matthew Honnibal が、「Astra は生の重みを見るだけで Qwen を改善できる」とする先行投稿の誇張を批判した記事。重みを直接読んだ実験は 17K〜172K パラメータの小型ネットワーク 3 件だけで、実際の言語モデルを扱った実験は Python を使い、練習問題を最大 50 バッチ流して重みの約 0.016% を編集していた。MATH-500 の正答率が 7.9% から 48.1% に上がった点自体は人間の ML エンジニアが行う作業の自動化として評価しつつ、異なる手法を並べて単一の深い能力があるかのように見せている点を問題視している。

> **関連:** #8「Qwen 3.8 27B on my laptop can interpret model weights, too」も参照（同じ Astra / Weight-Space Programming 論文をめぐる別の検証・議論）

### Key Discussion Points

- **x313**: メカニスティック解釈可能性の研究者として元投稿は誤解を招くと同意。主要な成果は数学能力の向上ではなく推論ループの抑制にすぎない。ループは </think> トークンの確率が低すぎることが原因という単純な問題だと指摘した。
  - **HarHarVeryFunny**: そんな単純な欠陥を Alibaba がなぜ放置して出荷したのかと質問。
  - **theptip**: 数学の結果への印象は同じだが、実験 1〜5 の重みの一発読み書きは驚きだと述べた。
- **bushido**: 自分の git コミットメッセージ規約に合う小型モデルを作ろうと 4〜5 週間学習に取り組んだが実用水準に届かなかった。重みを直接編集する手法は自分にとって新しく、興奮していると語った。
  - **runitx**: 具体的な規約と試したモデルを尋ね、AGENTS 等への指示で足りるのではないかと疑問を呈した。
- **phoghed**: 元投稿にも該当の説明があり、タイトルだけ読んだ人以外は全体像を把握できたはずだと反論。
  - **afavour**: 前日の最上位コメントは「正気じゃない、衝撃だ」だったので明白ではなかったと反論した。
  - **syllogism**（記事の筆者）: 元投稿が作ったのは重みを解析・修正するプログラムで、重みを直接読んだわけではないと補足した。
- **neom**: Astra による Qwen 編集は既知の手法の焼き直しが多いとし、Arditi らの方向射影除去の論文（arXiv 2406.11717）などを挙げた。
  - **micoti**: 同論文を連想したと同意。方向の射影除去は挙動を消せても能力は足せないので、改善の大半はループ解消によるものだと述べた。
- **GavinAnderegg**: LLM が重みを理解して修正できる点を「Weight-Space Programming」として評価。元記事の例は目を見張る内容だったと語った。
  - **syllogism**: ルール記述を Transformer の重みにコンパイルする先行研究として、Weiss らの RASP と Tracr を紹介した。

## 2. [Postman silently auto-installs AI plugins and attempts to share all API data](https://github.com/postmanlabs/postman-app-support/issues/14370)

**Score:** 503 | **Comments:** 159 | [Post](https://news.ycombinator.com/item?id=50354960)

Postman Desktop 12.33.4 が、既存ユーザーの Mac に Codex と Claude Code のプラグインを無断でインストールしたという GitHub Issue。Codex の設定にマーケットプレイスを追加してプラグインを有効化し、起動フックの信頼ハッシュまで登録した。フックはあらゆる API 関連タスクの前に Postman のスキルを読み込むよう指示する内容で、リモート MCP サーバーも有効化した（認証エラーで失敗）。報告者は自動インストールの停止、自己承認処理の削除、ロールバック手段の提供を求めている。取得時点で Postman からの公式回答はない。

### Key Discussion Points

- **pants2**: Postman は小さなツールだったが 4 億ドル超を調達し 1,500 人超を雇った。その結果、ログイン強制、データ収集、サブスクリプション、AI 機能で評価額を正当化せざるを得なくなったと指摘した。
  - **swatcoder**: 調達の動機は、成長で得た資金を手にした人々が FIRE できることにあると見た。
  - **aliasxneo**: B2B で CTO を口説いて契約を結ばせ、社内利用を義務化させる商売だろうと推測した。
- **senfiaj**: 今も使う人がいるのか疑問。遅く肥大化したので Bruno に移った。uTorrent と同じく知名度と惰性で入れる人が多いと述べた。
  - **snapetom**: 昔から優れた競合はあったが、大手で審査を省ける「エンタープライズ」な選択肢になっていると応じた。
- **dham**: 数年前に Bruno へ移行し、リクエスト定義を git で管理できて良好だと述べた。
  - **reddalo**: Bruno も有償版があるため、Postman や Insomnia のように劣化するのではと懸念した。
- **bottombutton**: 医療分野で、この件で Postman はサイバーチームに認定を取り消された。全員が一夜にして Bruno へ移った。
  - **happytoexplain**: GxP 環境では、API スキーマや値・シークレットをクラウドへ自動同期するため、すでに Postman を外していたと補足した。
- **CommonGuy**: 6 年開発している Postman 代替の Kreya を紹介。オフライン優先でプライバシーを重視し、git 向けの保存形式を採ると述べた。

## 3. [Jailbreaking my car's navigation system just so I can change the time](https://blog.nns.ee/2026/11/02/renault-hack/)

**Score:** 350 | **Comments:** 123 | [Post](https://news.ycombinator.com/item?id=50339288)

2014 年式 Renault Latitude の TomTom Carminat LIVE が、冬時間への切り替え後に誤った時刻を表示した。時刻設定は専用ナビ SD カードがないと開けず、約 60 ユーロかかる。筆者はファームウェアを抽出して QEMU でエミュレートし、master.script パーサの LOG コマンドのパストラバーサルを悪用した。core_pattern を書き換え、dbus-monitor をクラッシュさせてコアダンプ経由で root 実行を得て、設定ファイルのオフセットを 180 分から 120 分に書き換えて直した。

### Key Discussion Points

- **numpad0**: 一部の Subaru には、CAN バス上で同期しない時計が 3 つある。うち 1 つは 32.768kHz の水晶用ピンを持たないマイコンを使っているという。
- **jerlam**: 2001 年式の高級車は時刻をタイムゾーン単位でしか設定できず、規則の変更で年 4 回手動修正が必要だった。GPS があるのに国とタイムゾーンを手動で選ばせる仕様でもあった。
  - **eightysixfour**: 時計設定ボタンが正解だが、メーカーが更新を続ける保証がないので CarPlay を必須にしていると述べた。
- **tom1337890**: SD カードを前オーナーから受け取るのが最善だったと指摘。半年後にまた必要になるので記録して良かったと述べた。
  - **xx_ns**（筆者）: 前オーナーは SD カードを誤って捨てており、ゴミ箱を探すという申し出を断ったと説明した。
- **strenholme**: 安価な社外ヘッドユニットから標準的な 1DIN のステレオに替えて快適になった。ヘッドユニットを交換できない車のほうが心配だという。
  - **guywithahat**: 現代の車は更新があり、Tesla のように何十年も問題が出ないと反論した。
- **somehnguy**: 2014 年式 GM 車は数年前から時刻の自動更新が止まった。
  - **gopalv**: 時計が GPS 同期なら 3G 終了の影響は受けないはずだと指摘した。
  - **Symbiote**: 2019 年の GPS 週番号ロールオーバーが原因の可能性を挙げた。

## 4. [OpenAI seems to be silently re-enabling model training on Codex chats](https://news.ycombinator.com/item?id=50352757)

**Score:** 275 | **Comments:** 85 | [Post](https://news.ycombinator.com/item?id=50352757)

Ask HN 形式の投稿。IP 漏洩を警戒して Codex や Claude Code のデータ共有を無効にしていた会社の同僚たちが、前日に Codex の設定「Improve the model for everyone」が黙って再有効化されているのに気づいた。誰も自分でオプトインしていない。投稿者は ChatGPT のデータ管理設定の確認を呼びかけ、過去にも同様の報告があると追記した。

### Key Discussion Points

- **chriskanan**: 自分の設定も再有効化されていた。無効化リクエストが 2 回受理された履歴があるのに、再び有効になっていたという。
- **combobyte**: 禁止話題を毎回プロンプトに混ぜれば学習利用を避けられるのかと半ば冗談で尋ねた。
  - **AlanYx**: Anthropic では、そうした会話が一定数あるとアカウントに目印が付き、契約上の秘密保持条項が適用されなくなる可能性があると指摘した（ZDR 非加入の場合）。
- **jamienk**: Gemini はサイドバーにチャットを保存することが、学習への共有と結びつけられている。「Gemini Apps Activity」の紛らわしい設定が dark pattern だと述べた。
  - **ipsum2**: Gemini はこの点が最悪で、AI Studio では opt-out 自体ができないと述べた。
- **monster_truck**: 本当に気にするなら、チェックボックスに頼らず自前で推論環境を動かすはずだと主張した。
  - **lukeschlather**: 月 3 万ドルの推論サーバーを用意し、2T パラメータのモデルを学習しろというのかと反論した。
  - **user052919**（投稿者）: オプトアウト後に黙って再有効化するのは、倫理的な問題だと述べた。
- **kevcampb**: 先週、組織設定で無効にしているのに Claude が /feedback を自動的に起動したように見えた。Anthropic に確認を求めたが返答が止まっているという。
  - **l1n**: セッション内のフィードバック提案が出る新機能のせいではないかと推測した。

## 5. [Fujifilm to boost tape production 5x as AI fuels archiving demand](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/)

**Score:** 266 | **Comments:** 109 | [Post](https://news.ycombinator.com/item?id=50336918)

富士フイルムが、AI によるデータ量の増加を受けて LTO テープの生産能力を 5 倍に引き上げる。2026〜2028 年度の投資で、最新世代の LTO Ultrium10 の生産を中心に設備と人員を拡充する。クラウド事業者がテープを多用しており、容易にエアギャップできるのでランサムウェア対策にもなると同社は説明している（Wayback Machine のスナップショットに基づく）。

### Key Discussion Points

- **dylan604**: アーカイブ後は、テープ上のデータを実際に復元して読み戻す検証を省くなと助言した。装置の確認だけでは足りず、取り出せない経験もあるという。
  - **f1shy**: LTO や DAT など 15 年間で約 1000 本を使ったが問題はなかった。頻繁にサイクルし、ドライブを整備していたからだと反論した。
  - **matja**: ベンダー固有の圧縮や暗号化に依存せず、ビットストリーム途中の破損から復旧できるようにしておくべきだと補足した。
- **pmw**: 自前のテープ装置を持たずに低コストで保存するには、rustic の Amazon S3 Glacier Deep Archive 対応が使える。月 1 ドル/TB 程度で、復元しない前提のセカンダリバックアップ向けだと勧めた。
- **doughnutstracks**: LTO-10 30TB は 1 本 259〜300 ドル（約 8.6〜10 ドル/TB）、LTO-9 18TB は約 5〜7 ドル/TB という価格を紹介した。
  - **throw0101c**: カートリッジ以上にスタンドアロンの LTO-10 ドライブが約 2.5 万ドルする点が大きいと指摘した。
  - **cyberax**: LTO-10 は容量増に見合わない価格差があり、今は買うべきでないと助言した。
- **dguest**: 大規模科学実験では、生データをテープに残すのが一般的で、コストは大きな問題だと述べた。
- **dzink**: Blu-ray の M-Disk のほうが安く、湿度や熱にも強いと主張した。
  - **jefftk**: 大量データではテープの約 6 ドル/TB に対し M-Disk は約 150 ドル/TB で、25 倍ほど高いと反論した。

## 6. [Kalshi and its co-founders face felony charges for violating Utah gambling laws](https://arstechnica.com/tech-policy/2026/10/trump-admin-sues-utah-to-save-kalshi-from-the-states-total-ban-on-gambling/)

**Score:** 254 | **Comments:** 188 | [Post](https://news.ycombinator.com/item?id=50353229)

Utah は、予測市場 Kalshi と共同創業者 2 人を、9 月 13〜24 日に提供したスポーツ賭博をめぐり重罪 13 件と軽罪 1 件で起訴した。逮捕状ではなく召喚状が出ている。Kalshi は「やりすぎだ」と反論し、同様の訴追に Arizona で勝った実績を挙げた。Utah は州憲法でも賭博を禁じる 2 州のうちの 1 つで、民事訴訟も起こしている。これに対し米商品先物取引委員会（CFTC）は、連邦法が優先するとして Utah を提訴した（Wayback Machine のスナップショットに基づく）。

### Key Discussion Points

- **paxy**: Kalshi と Polymarket が早くから政治的なつながりを作ったのは、違法だと知っているからだと見た。
  - **stickfigure**: 連邦法が州法に優先し、連邦当局が見解を示している以上、現時点では合法的な行為だと反論した。
  - **jaredklewis**: 違法性が自明なら裁判所は不要になる、と皮肉った。
- **tfrancisl**: 違法賭博を目的とする企業の創業者が、有限責任の陰に隠れ続けるのはおかしいと批判した。
  - **petcat**: 何が賭博かという法的な灰色地帯があり、最終的に裁判所が決めると指摘した。
- **jsw97**: 州の主権を守るために刑事訴追まで踏み込んだ Utah を評価した。
  - **whimsicalism**: Kalshi は全国規模の先物市場で州際取引の典型例だ。議会がスポーツ先物の規制を州に委ねる法を作れば曖昧さは消えると述べた。
- **mahboi**: Utah では年齢確認法により、州内からのアクセスにサイト側が責任を負うとされた。VPN やプロキシの扱いがどうなるか気になるという。
- **yowayb**: 賭博とピラミッド商法には、証明できる等価性があるのではないかと問いかけた。
  - **quickthrowman**: ピラミッド商法は新規資金で偽の収益を払う仕組みだ。カジノや胴元は、期待値が負のゲームを提供するもので同じではないと反論した。

## 7. [Mac at Any Scale](https://namespace.so/blog/mac-at-any-scale)

**Score:** 196 | **Comments:** 99 | [Post](https://news.ycombinator.com/item?id=50352758)

Namespace が、macOS インスタンスを MacBook Pro のラックで動かす方法を解説した記事。iOS アプリのビルドに Mac が必要だが、Mac mini は入手に数か月かかったため、ノート PC を使った。各機に IP KVM と外付け 10G NIC を付け、HDMI ケーブルの脱落、FileVault の解除プロンプトが約 5 分で失効する問題、USB NIC の不具合などに悩まされた。Apple の仮想化では 1 台あたり macOS VM が 2 つまでで、通信は gVisor ベースのユーザー空間スタックで制御する。最大約 2 TB のイメージは階層化とピアツーピア配信で扱い、1 本の USB-C で電源・ネットワーク・KVM を供給する専用ハードウェアも開発中だ。

### Key Discussion Points

- **kccqzy**: Apple 自身の制約を回避する問題を多く解いていると評価。Mac mini と同性能で倍額の Xserve が出ても、データセンター運用が難しいので売れるだろうと推測した。
  - **adgjlsfhk1**: 2U に Mac mini 8 台、デュアル 10GbE、共有電源を載せた構成が CI 向けの理想だと述べた。
- **borschtplease**: Apple は箱売りソフトの時代に生きており、Xcode Cloud や自動化は貧弱だと批判した。
  - **jadar**: 経験上は部分的にしか当たらない。署名体験は Android より格段に良く、UI テストも堅実だと反論した。
  - **xXSLAYERXx**: 久しぶりの iOS 開発では CI/CD を短時間で構築できたと述べた。
- **titzer**: 薄い基板に注目し、量産して液冷ヒートスプレッダと組めば高密度ブレードサーバーになりうると述べた。
- **willmeyers**: Apple は Xcode Cloud の改善、Mac mini の増産、2 VM 制限の緩和のいずれかが必要だと述べた。
  - **xp84**: Apple は気にしておらず、Xcode Cloud で足りると考えているのだろうと皮肉った。
- **traceroute66**: ラック 1 本に約 100 台のノート PC がある場合、LiPo 電池の密度が恐ろしい。データセンターは知っているのかと懸念した。
  - **tgtweak**: 問題は内部電源が冗長でない点で、ATS や UPS があっても故障すれば全体が落ちると補足した。

## 8. [Qwen 3.8 27B on my laptop can interpret model weights, too](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/)

**Score:** 194 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50355251)

Simon Willison が、論文「Sparks of Weight-Space Programming」の「生の重みだけからネットワークが何を学習したか分かる」という主張を、ローカルモデルで検証した。Breakout、Pong、Pac-Man、Freeway の小型方策ネットワークの重みを LLM に渡して、どのゲームか当てさせる。Kimi K3.1 Pro は Breakout を約 10 分で正解し、LM Studio 上の Qwen 3.8 27B（17GB 量子化）は 1 回 46〜65 分かかったが、Pac-Man、Pong、Breakout を当てた。マイナーな Freeway は外した。Willison は、ソースコードの時代の終わりを宣言する準備はできていないと述べている。

> **関連:** #1「The 'Astra can read and write weights to improve Qwen' post is misleading」も参照（同じ Astra / Weight-Space Programming 論文をめぐる別の検証・議論）

### Key Discussion Points

- **variaga**: 重みを解釈できると主張するだけなら誰でもできる。その解釈が正しいかが問題だと、『ヘンリー四世』の台詞を引いて指摘した。
  - **layer8**: 論文では解釈の正しさを検証していると反論した。
  - **giancarlostoro**: モデルのほうがパターンを解読し、推論できる形で保持する確率は高いと述べた。
- **NitpickLawyer**: 論文の実験 5 を再現してほしいと依頼。API モデルで試した人によると、PPO 基準比で 10〜20 倍の成果を出せたのは最新モデルだけだという。
- **layer8**: 引用された「人間に理解できない機械が自分の重みを編集する未来」は生物に似ており、AI も生物のようになるかもしれないと述べた。
- **orsorna**: 重みを直接編集せず、新たに学習したり LoRA を使ったりしないのはなぜかと質問した。
  - **bushido**: 自分の実験では決定ヘッドや LoRA チェックポイントを直接編集した。学習が持ち込んだ知識が成果に結びつかなかったためだという。
  - **MisterMunchkin**: 重みの役割が分かれば、非決定的で時間のかかる学習より編集のほうが速いと述べた。
- **sagex**: ネットワークが浅く、デコードが難しくない。少数層のネットワークは構成的手法で作れるので、驚く結果ではないと見た。
  - **monkmartinez**: 「簡単」の意味と先行事例を尋ねた。

## 9. [Stringman, an $800 open-source room scale gripper robot](https://neufangled.com/)

**Score:** 75 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=50354358)

Neufangled Robotics の Stringman は 795 ドルの部屋規模ケーブルロボット。4 本のケーブルを天井の隅に固定し、4 つのモーターでグリッパーを吊り下げて床の散らかった領域に届かせる。OSHWA 認証のオープンソースで、CAD、基板設計、制御ソフトが公開されている。ローカル環境だけでも動作し、LeRobot 互換モデルの学習も可能。

### Key Discussion Points

- **Hasz**: 4×8 の板材を切る Maslow CNC のようなケーブル駆動方式に通じ、スケールアップも可能だと見た。
- **conductr**: 動画の服の片付けには懐疑的で、子供のおもちゃの片付けは優れていると述べた。ただし家庭でケーブルが問題なく機能し続けるかは疑問だという。
- **monkmartinez**: ケーブル駆動の 3D プリンタ Hangprinter を連想すると述べ、リンクを紹介した。
- **jayd16**: ベッドメイクや掛け布団の持ち上げ、タオルの折りたたみができるか尋ねた。形状は良いが仕様の底上げが必要だという。
- **HeyLaughingBoy**: ケーブル 3 本でも運動学が成立するのか気になると述べた。

## 10. [USDB: Scaling Storage for Next-Generation Recommender Systems at ByteDance](https://arxiv.org/abs/2611.02618)

**Score:** 27 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50354250)

ByteDance によるレコメンダーシステム向けのユーザー履歴ストレージ USDB の論文。CascadeLSM、共有レプリカ、部分ダンプ、ハイブリッド列指向フォーマットで構成される。本番移行で平均書き込み遅延が約 86% 減り、インフラコストが約 42% 下がったと報告している。最適化した RocksDB との比較では、長い履歴の読み取りが速いという。

### Key Discussion Points

- **bashhq_r**: ByteDance は専用ストレージを作れるが、自分たちはユーザーシーケンスを Redis の sorted set に押し込んでいると述べた。
- **BenoitP**: 古典的な DLRM を構築中で、生成型レコメンダーへ移行した人を尋ねた。商品のカーディナリティ、反復購買への偏り、コールドスタートなどの課題を挙げている。

## Trends

- **AI 時代のプライバシーと同意**: Postman のプラグイン無断導入と Codex の学習設定再有効化疑惑が上位に並び、オプトアウトを黙って覆すツールやサービスへの不信が強い。Bruno などローカル志向の代替や、自前推論への移行を勧める声が出ている。
- **Astra 論文をめぐる検証**: #1 と #8 は同じ論文への反応で、成果を認めつつ「何が実際に示されたか」を精査する姿勢が目立つ。
- **ハードウェアの現実との格闘**: 車載ナビのジェイルブレイク、MacBook のラック運用、ケーブルロボットなど、制約を工夫で突破する話が多い。
- **AI 需要がインフラに波及**: LTO テープの 5 倍増産や ByteDance のストレージ設計など、データ量の増加が基盤技術の投資を押し上げている。
- **規制と連邦・州の対立**: Kalshi の訴追は、予測市場が賭博かどうかをめぐる法的な争いを映している。
