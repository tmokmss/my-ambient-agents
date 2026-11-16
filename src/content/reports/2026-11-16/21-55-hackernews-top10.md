---
title: "Hacker News トップ10 サマリー (2026-11-16)"
date: "2026-11-16T21:55"
category: "summary"
summary: "米大手銀行の同時障害、Jiff 1.0、TRMNL の31.5インチ ePaper「Frame」、太陽光×羊など HN トップ10を要約"
tags: ["hackernews", "summary"]
---

## 1. [Outages reported at Bank of America, Chase, U.S. Bank, Wells Fargo and Zelle](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda)

**Score:** 576 | **Comments:** 442 | [Post](https://news.ycombinator.com/item?id=50521045)

Bank of America、Chase、U.S. Bank、Wells Fargo、Zelle などで障害が報告された（記事本体は取得できず、コメントからの推測を含む）。コメントによれば、JPMorgan Chase の技術的問題が金融システム全体に波及したと記事は伝えている。カード決済の不調やオンラインバンキングの停止、一部支店の閉鎖も報告されている。

### Key Discussion Points

- **ceejayoz**: 記事が根拠にする DownDetector の手法は信頼できないと指摘。Steam や Amex など実際には落ちていないサービスも障害表示になっている。
  - **Miraste**: 手法は問題ないがノイズが多いだけ。ホームページの上位ランキングを見れば根本原因が分かる。
  - **doawoo**: この指摘は障害スレッドのたびに出るが有用ではない。実際に障害は起きており、Chase は部分的にしか動いていない。
- **danso**: 3行が同時に壊れたのは、AI 生成コードの不具合よりも共通の脆弱性を突く攻撃のほうがありそうだと推測。
  - **codingdave**: 記事は複数の並行障害ではなく、1つの障害が複数組織に波及したと述べている。
  - **dclowd9901**: 当事者はサイバー攻撃ではないと確認済みだ。
- **A_D_E_P_T**: カード不通・支店閉鎖・オンライン停止は、10月末の Revolut 障害（Google Cloud 起因、約12時間で復旧）と同じ症状。データベース障害の可能性を挙げる。
  - **alt227**: 銀行までクラウド事業者に依存していることに驚く。
- **bobson381**: 非技術者の同僚は Microsoft 365 障害、FAA の運航停止、今回の件を1つの連動した問題と見ている。
  - **Legend2440**: 共通原因は確認されておらず、同じニュースサイクルに重なった偶然だ。
  - **sigmoid10**: 原因は別でも、デジタルの集中と相互依存が耐障害性なしに進んでいること自体は根本問題だ。
- **khriss**: Office 365 障害や FAA の件に続くため、標的型サイバー攻撃の可能性もあると指摘。
  - **asdfman123**: 国家主体なら、能力を事前に米国へ見せる動機がない。

## 2. [Jiff 1.0: A datetime library for Rust](https://burntsushi.net/jiff/)

**Score:** 250 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50519744)

Rust 向け日時ライブラリ Jiff の 1.0 リリース告知。タイムゾーン処理を API の中心に据えて、夏時間まわりの典型的な問題を避けやすくしている。uv、Cargo、Starship、fd、Nushell、Jujutsu などで既に使われており、他ライブラリの公開 API に載る基盤になるため、1.0 を無期限に維持する方針を打ち出している。

### Key Discussion Points

- **quodlibetor**: 数年 chrono をメンテナンスしたが、API を改善しようとすると安定性を求める利用者の抵抗に遭い、燃え尽きて辞めた。chrono は安定して保守されるが半ば非推奨で、Jiff に移るほうが幸せになれるという。
  - **lifthrasiir**: chrono の原作者。長年の保守への感謝を述べ、API が良くないのは自身の設計による面もあると認めた。
  - **Arch485**: 主に UTC しか使わないので chrono の API で不満はない。何が問題なのか知りたい。
- **Dagonfly**: 「Jiff が常に正しい選択ではない」と明記する姿勢を評価。
- **ddahlen**: 小惑星軌道計算でメガ年〜ギガ年スケールの時刻系（TAI、UT1）が必要。
  - **burntsushi**（投稿者）: Jiff は Unix 時間系のみ対応。天文用途なら `hifitime` が合うと案内した。
- **the__alchemist**: Rust では chrono のほうが他言語の標準日時より良く、試すがまだ疑問を持つ。
  - **masklinn**: JS は Safari の Temporal 対応が近い。burntsushi の比較ドキュメントも参照すべき。
  - **randomblock1**: chrono は非推奨扱いだが、Jiff への移行は容易だった。
- **poulpy123**: 現代的な言語なら標準ライブラリに充実した日時機能があると期待していた。
  - **Sharlin**: 標準に入れると欠陥のある API を永久に維持することになる。Jiff のような外部クレートの成熟が必要だったとする。
  - **lambda**: 標準ライブラリに全部入れようとすると、各ライブラリの質が下がり、互換性保証で縛られる。

## 3. [Frame – 31.5" color ePaper display](https://trmnl.com/blog/introducing-frame)

**Score:** 221 | **Comments:** 135 | [Post](https://news.ycombinator.com/item?id=50519354)

TRMNL の第3弾製品で、自社の木工工房で作る木製フレーム入りの31.5インチ・フルカラー ePaper ディスプレイ。予約受付中で、初回は約470台、年内に数台、大半は2027年初頭の出荷予定。時刻指定の更新、microSD によるオフライン動作、背面の常時給電用 USB-C、縦横3方向の設置、Spectra 6 向け色変換エンジン「Lazarus」（オープンソース予定）を備える。価格は約1,200ドルとコメントにある。

### Key Discussion Points

- **Calvin02**: 初期は TRMNL のファンだったが、品質管理の低下や出荷遅延が続き、創業者の政治的姿勢にも距離を感じたため、もう買わない。
- **schlap**: 次に安い製品の約5倍という価格設定は異例だ。木製フレームも不要で、既存のフレームに入れられるようにすべきだという。
- **vunderba**: 中古の Samsung Frame TV に、SDXL で生成した画像を WebSocket API で30分ごとに送っている。マット仕上げで反射せず、数年問題なく動作中。
- **TechPlasma**: 用途はあるが1,200ドルは正当化できない。400〜500ドルなら考える。
- **asenna**: ホテル客室向けに調べた小型の代替として、7.5インチで69ドルの reTerminal E1001 を紹介した。

## 4. [Grazing sheep in fields with solar arrays](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains)

**Score:** 165 | **Comments:** 134 | [Post](https://news.ycombinator.com/item?id=50520182)

Cornell 大学の2本の新論文の紹介。1ヘクタールあたり羊2頭の放牧で、ソーラーパネル周辺の草刈りと比べ、野生ハチ・ミツバチ・テントウムシが38%増え、ミツバチだけで83%増えた。もう1本は、農家が収益を保ちながら太陽光放牧の羊群を拡大するための意思決定支援ツールを扱う。

### Key Discussion Points

- **_heimdall**: 牛で試したいが、体重450kg級の去勢牛が体をこすっても耐える架台が高価で、地元電力会社の逆潮流対応も悪い。
  - **skyberrys**: 三方囲いの牛舎の屋根にパネルを載せる案を提案。
  - **londons_explore**: 広い農地なら GPU ラックと蓄電池を直結する企業も出そうだが、防犯が障壁になるとの見方。
- **mlmonkey**: 砂漠など不毛の土地ではなく、なぜ牧草地に置くのか。
  - **noddingham**: 送電の問題があり、需要地に近いほうが有利。
  - **saalweachter**: 農家はほとんど儲からず、牧草地に載せても農業価値が大きく落ちなければ追加収入になる。
- **konschubert**: トウモロコシ畑は産業用地に近く、恒久草地のほうが生物多様性は高い。太陽光はエネルギー作物の10倍以上発電する。
  - **jaapz**: オランダの牧草地の多くはペレニアルライグラスの単一栽培で、生物の乏しい場所になっている。
- **SoftTalker**: なぜ牛やヤギではなく羊なのか。
  - **lukan**: 羊は牛より小さく、ヤギのように登ったりケーブルをかじったりしない。
  - **bluGill**: 羊は問題を起こしにくく、ヤギや牛は丈夫な支柱など管理が必要。
- **abdullahkhalids**: カナダの DRAO 天文台は、望遠鏡アレイ下の草を地元農家の牛に食べさせている。

## 5. [Squircles](https://linebender.org/wiki/curves/squircle/)

**Score:** 64 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=50515151)

Linebender wiki による、正方形と円の中間の形「スクワークル」の解説。代表例は Piet Hein が広めた超楕円（|x|^n+|y|^n=1）で、中点の座標を使う「ゲージ」という共通の尺度で各種の変種を比較する。曲率がゼロになる平らな辺を持つ種類など、複数の作り方を紹介する。

### Key Discussion Points

- **fasterik**: 図の横軸は弧長、縦軸は曲率だと補足。
- **xg15**: 角丸四角形とスクワークルの違いは何か。
- **scarecrw**: 3次元版の「sphube」のほうが優れていると、論文（arXiv）を紹介。
- **pampas**: 数学は美しいが、アイコンがスクワークルばかりで見分けにくい。昔のように独自の形に戻ってほしい。
- **MitPitt**: スクワークル等の corner-shape は CSS では Chrome にしかなく、Firefox と Safari は未対応。

## 6. [Rust changed me as a developer](https://blog.startifact.com/posts/how-rust-changed-me/)

**Score:** 59 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=50522563)

6年以上 Rust を使う筆者が、言語が考え方をどう変えたかを書いた。直積型に対する列挙型（直和型）が柱の一つで、これを知らずに過ごしてきたと振り返る。学びは Rust 固有ではなく、Rust が既知の概念を明確にしたと述べる。

### Key Discussion Points

- **bryanlarsen**: 主要な言語系統ごとに大きなプロジェクトを1つ書くべきだという定番の助言を紹介。Lisp、OO、関数型、Prolog、Verilog、Forth などを挙げる。
- **xeubie**: Rust の enum はタグ型と共用体を一体化している。タグだけを表す型がなく、Zig のように分けるほうがよい。
- **coldtea**: こうした気づきは2023年以前の定番の読み物だった。LLM で職業が変わった2026年に読むと、冷蔵庫の発明後に新しい保存法を語るような違和感がある。

## 7. [BugMeNot Has Closed](https://www.bugmenot.com/)

**Score:** 53 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50523601)

共有ログイン情報を提供してきた BugMeNot が閉鎖した。ページには「より良いインターネットを思い描いた皆さんに感謝」とだけある。

### Key Discussion Points

- **Legend2440**: 過去5年は使えるログインが1つもなく、悪用もあってサイトの対策が進んだのだろう。
- **LPisGood**: ほとんど機能しなかった。大規模に機能すれば法的に潰され、小規模では成り立たないので、元々長続きしない設計だ。
- **sparkling**: Google/Apple ソーシャルログインの強制、2FA、IP・地域による検知が、このプロジェクトを以前から終わらせていた。
- **mopsi**: 今月初めに Veeam のログイン壁を回避するのに使え、偽アカウントを作る手間が省けた。
- **ktosobcy**: 公開コンテンツなのに登録を要求・促すのを禁止すべきだ。

## 8. [How to Intercept HTTP/3 Traffic: QUIC and Qpack](https://interceptsuite.com/blog/intercept-http3-traffic-quic-qpack-explained/)

**Score:** 33 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50521870)

HTTP/3（QUIC・QPACK）の通信を傍受・解析する方法の解説記事。ページ本文は取得できず、タイトルとコメントからの推測による。

### Key Discussion Points

- **rbartelme**: 前提は、クライアントがプロキシの CA を信頼していること。つまりクライアント側の MITM であり、ピン留めするアプリは拒否する。QUIC の暗号が破られたわけではなく、HTTP/3 が企業の TLS 検査装置の死角でなくなっただけだという。

## 9. [My Quest to push native Three.js quality match AAA Game Engines](https://ben3d.ca/blog/building-the-aaa-lighting-pipeline-in-threejs)

**Score:** 31 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50523291)

Ben Houston による連載の進捗報告（34分で読める長さ）。G-buffer から時間的アップスケールまでのライトマップ、プローブ、スクリーンスペース反射のパイプラインを、AAA ゲームの要件と Three.js の現状の差として段階ごとに整理する。レビュー中や未着手の PR も載せている。WebGPU の普及により、Web でも屋内シーンを AAA ゲームのように照明できるという前提で書かれている。

### Key Discussion Points

- **kkukshtel**: AI が自分の進捗を曖昧な目標で書いているだけに見え、読む気になれない。知りたいのは「動くかどうか」だ。

## 10. [Launch HN: Axonnic (YC F26) – Sleeves that track fingers and estimate force](https://news.ycombinator.com/item?id=50522776)

**Score:** 21 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50522776)

前腕に着ける64チャンネルの表面筋電（EMG）スリーブ。素手のまま指の動きと指先の力を推定し、器用なロボットの学習データを作る。映像だけでは捉えにくい筋活動や力の入れ具合も記録できるのが利点だという。

### Key Discussion Points

- **lanewinfield**: 基盤技術は見事だが、サイトの見た目や文言が AI 生成っぽく、すぐ離脱しそうだと率直に指摘。
- **millspore**: 長時間握り続けると筋疲労で EMG のベースラインがドリフトするはずだが、どう扱うのか。
- **cloakley**: 作業を追跡するために手袋を強制されたら、仕事を辞めると述べた。

## Trends

- **インフラ障害と依存**: 大手銀行の同時障害が圧倒的な注目を集めた。コメントは、クラウドや共通基盤への依存、AI コードか攻撃か共通原因かという因果の推測、DownDetector の信頼性を巡って割れた。
- **Rust エコシステム**: Jiff 1.0 と「Rust changed me」が並び、安定した基盤ライブラリの在り方（chrono の保守負担、標準ライブラリに含める是非）が議論された。
- **ハードウェアの価格感**: Frame は約1,200ドルが高すぎるとの反応が目立った。
- **インターネットの変化**: BugMeNot の閉鎖は、ログイン壁と認証強化で共有アカウントが成り立たなくなった流れを象徴する。
- **コンテンツへの AI 疑念**: Three.js 記事や Axonnic のサイトで、AI 生成っぽさへの反発が出た。
