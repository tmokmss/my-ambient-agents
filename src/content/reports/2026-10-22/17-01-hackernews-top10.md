---
title: "Hacker News トップ10 ダイジェスト（2026年10月23日 02:01 JST）"
date: "2026-10-22T17:01"
category: "summary"
summary: "eMudhra の SSL/TLS 事業撤退、Switch 2 のジェイルブレイク、Quad9 のフランス撤退など HN 上位10件を要約"
tags: ["hackernews", "security", "summary"]
---

## 1. [eMudhra to exit global SSL/TLS certificate business](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business)

**Score:** 518 | **Comments:** 400 | [Post](https://news.ycombinator.com/item?id=50195110)

インドの認証局 eMudhra が、取締役会の決定としてグローバルな SSL/TLS 証明書事業から自主的に撤退すると発表した。コメントによれば、同社の CA 証明書が侵害された疑い（極端に脆弱な秘密鍵）が背景にあり、プレスリリースはソーシャルメディアでの注目が事業規模に比して過大だったと述べている。

### Key Discussion Points

- **rdtsc**: 秘密鍵の複雑さに反比例して注目が集まる、と皮肉り、人的ミスかプロセスミスかの説明がない点を批判。
  - **sippingabonedry**: 「ソーシャルメディアのせい」という言い分は「あの邪魔な子供たちさえいなければ」と同じ発想だと指摘。
  - **pigggg**: インドの商取引・銀行関連規制がインド企業の利用を求めるため、特定ベンダーに誘導されやすいと説明。
  - **gquere**: 同社の OTP ソリューションも総当たり可能だったという報告を紹介。
- **Toutouxc**: 事態を家族に説明する適切な比喩が見つからないほど荒唐無稽だとコメント。
  - **tauneutrin0**: 王と門番の比喩で CA の信頼モデルを説明。
  - **rustyminnow**: 王の封蝋印の比喩で説明。
- **luispa**: 秘密鍵が「4」だけの RSA 鍵ブロックを投稿して皮肉った。
  - **nayuki**: RSA 秘密鍵は素因数を含むため、そのような鍵は作れないと技術的に指摘。
  - **nunez**: 通常のツールではあり得ない鍵で、悪意があったのではと疑問視。
- **ieie3366**: Chrome チームが eMudhra に提出した厳しい質問群の Bugzilla コメントを紹介。
  - **hmokiguess**: 個人攻撃はなく、主体と義務に関する妥当な質問だと反論。
- **Arbortheus**: 報告から約5日経つのに iPhone の信頼ストアが更新されず、問題の CA がまだ受理されていると報告。
  - **dcrazy**: Apple が本日 eMudhra 証明書を失効させたと MacRumors の記事を紹介。
  - **vadansky**: 省電力モードがバックグラウンド更新を止めている可能性を指摘。

## 2. [Jailbreaking the Switch 2](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/)

**Score:** 488 | **Comments:** 177 | [Post](https://news.ycombinator.com/item?id=50192536)

最新ファームウェア 23.0.1 上で動作する、ソフトウェアのみ（tethered）の Switch 2 ジェイルブレイク「ns2jb」の公開。任意のネイティブコードを sysmodule（組み込みの fs を含む）として実行でき、ホームブリュー、ゲームの改造、セーブのバックアップなどが可能になる。開発には Codex と、コントローラ入力・HDMI 映像・電源操作を自動化する JetKVM 等のハーネスが使われた。著者によれば脱獄自体に約2週間を要し、Mario Kart World の改造は1日でバイブコーディングしたデモだという。

### Key Discussion Points

- **hturan**: fs の読み書きが本当なら、数時間以内にゲームのダンプが出回りそうだと予想。
  - **ecliptik**: Claude と実機で DOS ゲームの移植などを行っており、実機ループの有用性に言及。
  - **freeAgent**: ゲームが実質レンタルで Nintendo の都合で止められるため Switch 2 を買わなかったと述べた。
- **valgaze**: AI にコントローラ入力や電源ボタン操作をさせる環境構築を称賛。
- **rootsudo**: 自分がセキュリティ研究で Codex を使うと制限されるのに、どう使っているのか疑問を呈した。
  - **oceansky**: 制限は時間とともに大きく緩和されたと実体験を紹介。
  - **gjskngnf**: 他モデルの可能性も指摘しつつ、標準モデルで自分のハードの root を取れたと述べた。
- **coreyp_1**: 自分のコードのスタックオーバーフロー調査でも Codex に拒否されたと驚いた。
  - **dawnerd**: 拒否は多いが回避も簡単だと述べた。
- **KeplerBoy**: AI の寄与とは別に、KVM などの現代的なツール群が実機デバッグを可能にしている点が面白いと評価。

## 3. [Quad9 (DNS Resolver) to Exit France](https://quad9.net/news/blog/au-revoir-france/)

**Score:** 285 | **Comments:** 95 | [Post](https://news.ycombinator.com/item?id=50195959)

Quad9 は、フランスの裁判所が beIN 勝訴の判決を出し、特定ドメインの再帰 DNS 解決をフランス国内ユーザー向けにブロックするよう命じたため、11月24日からフランスのユーザーへの無料サービス提供を停止すると発表した。罰金は1日580,000ユーロから1,000ユーロに大幅減額されたが、金額ではなく原則の問題であり、DNS 解決は中立で受動的なサービスだとして、応答の改変には応じないとしている。

### Key Discussion Points

- **nadermx**: Sony がドイツで VPN 経由でブロックを回避して不履行を主張し、罰金が科された経緯を引用。
  - **bitpush**: 保護策を回避されて罰せられるのは、多くのテック企業が直面する構図だと指摘。
  - **irusensei**: Sony が悪役化していると皮肉った。
- **euio757**: Cisco が2年前に同様の理由で市場から撤退した例を紹介。
- **JokerDan**: 訴えた企業のドメインを解決しないという対抗策を提案。
  - **drdexebtjl**: 応答を遅延させるなどの皮肉な案を出した。
  - **WhyNotHugo**: 中立なサービスという主張を損なうと指摘。
- **0x0000000**: GeoIP が不十分なら、どう実装するのか疑問を呈した。
  - **eloisant**: フランス国内のサーバーなどの拠点を撤収し、裁判所の管轄外に出るのだと説明。
  - **disiplus**: フランスの IP には何も提供しないということだと補足。
- **babarock**: 電話帳会社を罰するようなもので、DNS リゾルバを罰するのは奇妙だと批判。
  - **crote**: 犯罪者が歩く道路を提供した政府を訴えるようなものだと皮肉った。

## 4. [What Is Gridifcation](https://musicalform.substack.com/p/what-is-gridifcation)

**Score:** 244 | **Comments:** 111 | [Post](https://news.ycombinator.com/item?id=50150163)

録音音楽における「グリッド化（gridification）」、つまりクリックトラックや DAW のグリッドにタイミングやピッチを揃えることで、演奏の揺らぎが失われていく現象を扱った記事。Substack は既知のスキップ対象で Wayback のスナップショットも取得できなかったため、タイトルとコメントからの推測に基づく要約（記事本文は未確認）。

### Key Discussion Points

- **bitsinthesky**: 高校時代にジャズバンドで録音した体験を紹介し、スタジオ録音の手法を語った。
  - **jimmis**: 現代音楽の技法に気づくのは演奏者や熱心な愛好家だけだと述べた。
  - **te_chris**: ライブ演奏までグリッドに合わせて編集される風潮に強く反発。
- **diskzero**: Donald Fagen がテイクを重ねて音を差し替え、貼り合わせて理想のミックスを作ることで知られると紹介。
- **tasty_freeze**: 名セッションベーシスト Lee Sklar の YouTube チャンネルでの逸話を紹介。
- **ssharp**: 2025年のヒット曲の多くはドラムがプログラミングされているように聞こえると指摘。
- **gwbas1c**: 現代音楽は完璧だが退屈で、古い録音の不完全さに面白みがあると述べた。
  - **beezlebroxxxxxx**: ポップスは和声的に単純なので、ジャズを聴くことを勧めた。
  - **Scene_Cast2**: K-pop には微分音を使う曲が意外にあると紹介。

## 5. [What's Getting Pwned](https://pwn.watch/)

**Score:** 162 | **Comments:** 97 | [Post](https://news.ycombinator.com/item?id=50195543)

重大なセキュリティインシデントとパッチの有無をライブで一覧する pwn.watch（@thekitze 作）。取得時点で進行中36件（Critical 15件、未パッチ・一部パッチ18件）。米大手銀行が顧客口座内の第三者 AI エージェントを検知した件なども掲載されている。

### Key Discussion Points

- **DrewADesign**: 銀行の AI エージェント検知の件を取り上げ、仕掛けた側が「暴走エージェント」として責任回避しかねないと皮肉った。
  - **mahboi**: 実際は顧客が許可したもので、侵害とは言えない誤解を招く表題だと指摘。
  - **stickfigure**: エージェントが失敗して顧客が損失を被った場合の責任という論点を提起。
- **pixl97**: 脆弱性が発見される速度が異常に速いと述べた。
  - **Kevin_Flynn**: セキュリティは社会が払うと決めた分だけ存在する、と経済学的に論じた。
  - **turbobutton**: 2026年以前にインシデント数に目立った増加はなかったという統計を紹介。
- **demibabs**: AI 生成ページらしく情報を詰め込みすぎだと批判。
  - **Waterluvian**: 判断できる人間が関わればもっと良くなる余地があると述べた。
  - **dawnerd**: 「Closed」ボックス内に「Ongoing」と出るなど紛らわしい表示を指摘。
- **aeturnum**: 1か月前にパッチ済みの脆弱性が「Live」「ongoing」扱いなど、分類基準が不明だと指摘。
  - **lifeisloving**: 真面目なサイトではなく、有料クラブの宣伝目的だと批判。
- **xbar**: Mythos を触って「この世代の LLM は史上最大のセキュリティインシデントの波を引き起こす」と感じたと述べた。
  - **hk__2**: どの世代にも言えるのではと疑問を呈した。
  - **tonymet**: 攻撃者は既にバックドアを仕込んで潜伏しており、今の騒ぎは宣伝だと主張。

## 6. [Google cleared 300 hectares of Finnish forest](https://www.techspot.com/news/114100-google-cleared-300-hectares-finnish-forest-data-center.html)

**Score:** 107 | **Comments:** 66 | [Post](https://news.ycombinator.com/item?id=50196837)

Google がフィンランドのデータセンター用地として約300ヘクタールの森林を伐採したと報じる記事。元記事は Cloudflare のチャレンジで取得できなかったため、タイトルとコメントからの推測による要約。コメントでは必要な環境調査・許可の手続きを経ていたかが論点になっている。

### Key Discussion Points

- **semanticjudo**: フィンランドの年間森林減少面積（約24.3万ヘクタール）と比較して規模感を示した。
- **zamadatix**: 300ヘクタールは約3平方キロメートルで、手順を省略したなら相応の対処を望むと述べた。
- **Jskewel**: フィンランドの林業は計画的な植林・伐採であり、環境問題という報道は的外れだが、許可なしなら問題だと指摘。
- **arjie**: 約1平方マイルで、書類のタイミングという手続き上の問題に過ぎず、大げさだと評価。
- **helsinkiandrew**: 木の損失そのものより、環境調査なしに伐採した可能性が問題で、水位・洪水・野生動物への影響があり得ると指摘。

## 7. [Show HN: Run full iOS 16.5 firmware on Android Devices](https://github.com/oosexgang/hackios-xnu-kernel)

**Score:** 68 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=50196718)

HackiOS は、Apple がオープンソース公開している XNU カーネル（iOS 16.5 相当）を Android 端末上で起動し、無改変の iOS 16.5 ユーザースペース（launchd → SpringBoard → アプリ）を動かすプロジェクト。独自の EFI ローダや UEFI 移植、Apple 非公開ドライバの代替を備え、POCO X5 Pro 5G と QEMU で動作する。端末にはフラッシュせず RAM 上で動き、再起動すれば Android に戻る。Apple のファイルはリポジトリに含まれず、IPSW は利用者側で取得する。

### Key Discussion Points

- **aghuang**（投稿者）: Web サイトが見づらいため GitHub リンクを使ったと説明し、QEMU や Xiaomi 端末でも動作する点が印象的だと述べた。
- **bigwheels**: なぜこの種のデモは iOS 16 で止まるのか、iOS 17 で何が変わったのかと質問。
- **pmkary**: ついに誰かがやったと驚き、2026年は荒れていると評価。
- **dj_io**: Hackintosh の iOS 版のようで、App Store に使えるのかと質問。
- **sanid**: iOS 風にカスタマイズした偽 Android 端末が出回っており、古い中古 iPhone の購入時は注意が必要だと指摘。

## 8. [Arc Is Sunsetting](https://arc.net/)

**Score:** 37 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50197601)

The Browser Company の Arc ブラウザの終了（A farewell to Arc）を告げるページ。ページ本文は取得できず、詳細はコメントからの推測。同社は昨年から AI ブラウザ Dia に注力しており、Arc の終了はその延長にあるとみられる。

### Key Discussion Points

- **falloon**: 当初は怒って Dia への移行を拒んだが、1年後に試すと AI 機能をオフにでき、意外と気に入ったと述べた。
- **an0malous**: VC の資金を受けた製品は信頼せず、補助された価格を利用しつつバックアップを用意すべきだと主張。
- **jamie_ca**: Dia への転換時点で予兆があり、Arc の影響を受けた Zen（Firefox ベース）に乗り換えて満足していると紹介。
- **slipwalker**: Arc をオープンソース化すれば信頼したユーザーへの誠意になると提案。
- **jjuel**: 新ブラウザがタブ内容を AI に読ませる点を嫌って拒否感を示した。

## 9. [Getting ready to operate GNU Taler in Germany](https://www.taler.net/en/news/2026-13.html)

**Score:** 22 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50197404)

GNU Taler の運営母体として、ドイツ・ボーフムに Taler Operations AG が設立される。Taler はベアラートークンで価値を表現する決済システムで、EU 規制上は電子マネーに当たるため、ユーロ運用には銀行または専用ライセンスが必要になる。当初は GLS Bank が発行者となる計画だったが、2026年1月に GLS が撤退したため、新会社が BaFin に電子マネー発行者のライセンスを申請する予定。市民や投資家への参加の呼びかけも含まれる。

### Key Discussion Points

- **warkdarrior**: 監視されずに送金できる機能と、取引が最終的で取り消し不能かどうかを質問。

## 10. [Dungeon Generation in the Gnomish Mines of NetHack](https://www.boristhebrave.com/2026/10/18/dungeon-generation-in-the-gnomish-mines-of-nethack/)

**Score:** 22 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50154109)

NetHack の Gnomish Mines（ノーム鉱山）のダンジョン生成アルゴリズムを解説する Boris the Brave の記事。ページ本文は取得できなかったため、コメントからの推測では、生成にセルオートマトンが使われている点が中心となっている。

### Key Discussion Points

- **Rooster61**: セルオートマトンベースだとは知らず、他の階層とは全く違う雰囲気になる理由に納得したと述べた。

## Trends

- **信頼とインフラの脆弱さ**: eMudhra の CA 問題と Apple の信頼ストア対応、pwn.watch の大量のインシデント、Switch 2 や iOS の脱獄・移植など、セキュリティ関連が上位を占めた。
- **AI がセキュリティ研究を加速**: Codex による Switch 2 の脱獄、銀行口座内の AI エージェント、LLM とインシデント増加の議論と、AI の関与が複数の話題に共通している。
- **法規制と事業撤退**: Quad9 のフランス撤退、eMudhra の事業撤退、Taler の EU 電子マネー対応、Google の森林伐採の許可問題と、規制や司法判断が事業のあり方を左右する事例が目立った。
- **プロダクトの終わりと乗り換え**: Arc の終了と Dia・Zen への移行議論が、VC 資金を受けた製品への信頼というおなじみのテーマにつながっている。
