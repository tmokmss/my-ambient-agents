---
title: "Hacker News トップ10サマリー (2026-10-28)"
date: "2026-10-28T18:16"
category: "summary"
summary: "Apple 開発ツールの失効証明書問題、Gemini 4 Carbon 発表、国内 PCB ロボット工場、Apple 新ハードなど HN 上位10件を要約"
tags: ["hackernews", "security", "ai", "apple", "hardware"]
---

## 1. [Apple's git still trusts the compromised eMudhra certificates](https://emudhra.we-have-a-problem.com/apple.html)

**Score:** 838 | **Comments:** 329 | [Post](https://news.ycombinator.com/item?id=50271640)

Apple に eMudhra 証明書の侵害が通知されたのは 10 月 17 日だが、10月28日時点でも macOS 同梱の git・curl・python3 などは侵害された証明書を信頼し続けている。10月26日リリースの macOS 27.2 でも修正されず、ユーザーが手動で施した回避策も元に戻されたという。これにより https 通信を傍受・改ざんでき、git の clone/pull で攻撃者のコードを受け取る恐れがある。

> **関連:** #6「MacBook Pro with PROLED XDR Display and Touch」も参照（同一企業 Apple の別件）
> **関連:** #9「Mac Studio M5 Ultra 512GB Officially Released」も参照（同一企業 Apple の別件）

### Key Discussion Points

- **chrisweekly**: git だけでなく OS 提供の各ユーティリティが影響を受ける。Apple の案内が証明書チェーンの手動編集で、OS 更新で元に戻りうる点も問題だ。
  - **stingraycharles**: git が OS に任せるのは正しく、問題は macOS 側にある。
  - **woodruffw**: Homebrew 版は独自の CA バンドルを持つため影響を受けない。ただし git は影響を受けており修正中（Homebrew メンテナー）。
- **jrochkind1**: OS レベルの /etc/ssl から失効 CA が除去されていないのは重大。Linux も含め証明書管理が混沌としている。
  - **hyper_reality**: 必須の約30 CA 以外を distrust するツールを作った。Linux ではブラウザや言語ごとに証明書ストアが別々で混乱していた。
  - **kylecordes**: Apple には OS アップグレード不要の高速パッチ手段があるのに、今回使われていないのが不思議だ。
- **truelson**: Apple 自身が修正手順を公開しており、Mac 開発者は適用すべきだ。
  - **gamer191**: OS アップデートのたびに再実行が必要。
  - **Recurecur**: コマンドを手で実行させるのは「パッチ」ではなく、スクリプト化すべきだ。
- **saagarjha**: ハードウェア出荷に間に合わせるため 27.2 に証明書ストア変更を入れ損ねたのでは、と推測。許容できないという点は他の意見と同じ。
- **qaz_plm**: Apple の声明を紹介。
  - **davidcollantes**: curl・git・python3・ruby・perl・openssl などは /etc/ssl/cert.pem で検証し、Apple の失効リストを確認しない。
  - **samgranieri**: SIP の制約で OS 更新以外の更新経路がないのでは、との推測。

## 2. [Start Doing Graph Theory](https://vertex.degree/)

**Score:** 419 | **Comments:** 98 | [Post](https://news.ycombinator.com/item?id=50208960)

Mikhail Lavrov による、パズルや定理証明を通じて学ぶグラフ理論の入門教科書。CC BY-SA 4.0 でオンライン公開されており、PDF もダウンロードできる。

### Key Discussion Points

- **gortok**: 近年は本が人間の手によるものか気になってしまう。著者に落ち度はないが警戒する自分が嫌だ。
  - **nicf**: 著者を10年以上知っており、本人が書いたと確信している。
  - **costco**: ランダムな10ページを Pangram にかけたところ、すべて人間の文章と判定された。
- **mcv**: neo4j でグラフを多用してきたが、ハミルトン路などの理論を使う機会は少なく、実務は論理と直感だ。
  - **throw-qqqqq**: 実用上は基本的な学部レベルのアルゴリズムが最も使え、深く理解する価値がある。
- **elxr**: gitbook/vitepress 系とは違う美しいサイトで気持ちがいい。
- **basil**: 経路探索ソフトは道路網を有向グラフで表し A* を使うなど、実務でグラフ理論は使われている。
  - **alfiedotwtf**: 巡回セールスマン問題は総当たりでは現実的でなく、ヒューリスティクスで妥協する必要がある。
- **lopsotronic**: 製造現場の部品構成管理（構成の爆発への対処）はグラフ理論の有用だが活用されていない応用例だ。

## 3. [Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)

**Score:** 333 | **Comments:** 258 | [Post](https://news.ycombinator.com/item?id=50276792)

Google が次世代フロンティアモデル Gemini 4 Carbon を発表した。サイバーセキュリティと長時間タスクに強いとされ、Artificial Analysis Intelligence Index v5.0 で 59 の 1 位。SEC-bench Pro 88.2%、ExploitGym 54.8%、CWE-bench 71.0% を示している。公開は段階的で、まず一部のサイバー防御担当者に提供し、Fairwind Program で順次拡大する。価格は Argon と同じ入力 $2 / 出力 $10（100万トークンあたり）の導入価格。

### Key Discussion Points

- **MrOrelliOReilly**: Google の分かりにくく変わり続ける製品名を皮肉っている。
  - **giancarlostoro**: Silver/Gold/Platinum のような単純な名称に戻してほしい。
  - **Lucasoato**: 次は「Gemini Tokyo Drift」では、と茶化している。
- **gavinray**: ベンチマーク表を読みやすく色分けした画像を共有。
  - **philrenaud**: 表を自動ハイライトする Chrome 拡張を開発中。
  - **alienbaby**: ページが更新されたのか、元の青とグレーの強調でも読めると指摘。
- **PreciousH**: Argon を未試用だった。発表と提供を分ける戦略は競合の多い市場で得策か疑問。
  - **nater5000**: Argon は良いモデルで、導入価格なら価値が高い。Carbon はさらに大きな改善らしい。
  - **solarkraft**: 他社もやっており、注目を二度得る狙いだろう。
- **cvladan**: 決算発表の約2時間前の公開で、企業が意思決定を株式市場に合わせることに苛立つ。
  - **mlmonkey**: だからこそ決算直前に出したのだろう、と返している。
- **solarpunk_enthu**: モデル未提供でベンチマークだけ示しても意味が薄く、公開時には競合が先行しているかもしれない。
  - **stbenjam**: 希少性の演出にも見え、「まず防御側に」という枠組みも奇妙だ。
  - **hiddencost**: Argon は発表後すぐ公開された。リーク対策と決算日が発表理由では。

## 4. [The Grid, a factory-scale robot in Massachusetts that builds PCBs on demand](https://www.circuithub.com/post/unveiling-the-grid)

**Score:** 279 | **Comments:** 121 | [Post](https://news.ycombinator.com/item?id=50243060)

CircuitHub が、マサチューセッツ州で5年間運用してきた工場規模のロボット「The Grid」を公開した。固定ラインを使わず、浮上式の搬送機が基板を運ぶ方式で、少量多品種の基板をオンデマンドで製造する。「米国製で深圳の2倍速」を掲げる。

### Key Discussion Points

- **seddona**（CircuitHub 創業者）: 質問に答えると表明した。
  - **kevin42**: ソースファイル提出が前提の法的条件は顧客 IP に不利なので見直してほしい。価格が3倍程度でも予算上は厳しいが、国内生産には期待している。
- **ncrtower**: 見積もり取得のためのサインアップが大変で、gerber の zip もエラーで先に進めなかった。
  - **jrexilius**: MacroFab のほうがずっとスムーズ。
  - **scronkfinkle**: 関税の影響で OSH Park が小ロットでは有力な選択肢になっている。
- **seizethecheese**: 深圳での PCBA 経験上、主な遅延は部品調達で、段取り時間の短縮という主張は経験と合わない。
  - **willis936**: 一番の遅れは PMO と DFM の通過だが、深圳や CircuitHub にはそれがない。
- **WarmWash**: 中国は安く速く高品質で、国産は品質が劣り最大50倍高いこともある。幅広く使えるものであってほしい。
  - **red_candle_wax**: 今も手作業なのか機械なのかを質問している。
- **phkahler**: 基板要件が厳しい（1oz 銅、埋め込みビア不可など）。モーター制御では 2oz も多い。
  - **ycui7**: プロトタイプの99%は1oz銅・4層以内で収まる。

## 5. [CNC Stone Carving](https://carmelitegothic.com/cnc-stone-carving/)

**Score:** 235 | **Comments:** 79 | [Post](https://news.ycombinator.com/item?id=50274409)

ワイオミング州のカルメル会修道士たちが、ゴシック様式の修道院を石造りで建てるために導入した CNC 石彫の紹介ページ。従来は熟練職人が数か月かけた装飾を数日で彫れるとし、中世の建築家も当時の最先端技術を使っていたと位置づけている。

### Key Discussion Points

- **wolframhempel**: 古代エジプトの方眼やローマの複製工房など、彫刻家は昔から省力化を図ってきた。
  - **mgr86**: ホーボー（放浪者）向けに貨物列車の情報を問い合わせる RAG を作った人の例を挙げた。
  - **radiorental**: 素材に手で向き合う行為には瞑想的な価値がある、という見方。
- **soci**: サグラダ・ファミリアは1990年代から CNC で石を彫っており、今年の完成に寄与した。粗削りは CNC、仕上げは手作業。
  - **1-more**: Shaper Origin は粗い動きを人が担当し、細かい動きを機械が補正する逆の発想だ。
  - **lefstathiou**: ルネサンス級の大理石像を CNC で作るイタリア企業に注目している。
- **shellfishgene**: 修道士たちが大聖堂まで備えた修道院を建てていることに驚いた。
- **ricardobeat**: コーヒー焙煎で資金を貯め、山中の土地を買い、石の修道院建設と CNC 開発に取り組んだ話に感動した。
- **weirdish**: なぜ装飾的なファサードへの建築潮流が戻らないのか疑問。
  - **Brendinooo**: 近代建築はこうした装飾を否定するイデオロギーに支配されていると感じる。
  - **bluGill**: 可能だが、費用が最大2倍になっても資産価値は上がらないので誰も払わない。

## 6. [MacBook Pro with PROLED XDR Display and Touch](https://www.apple.com/macbook-pro/proled-xdr-display/)

**Score:** 194 | **Comments:** 291 | [Post](https://news.ycombinator.com/item?id=50276940)

Apple が M5 Pro / M5 Max 搭載の MacBook Pro を発表した。タンデム OLED の PROLED XDR ディスプレイ（ピーク輝度 2000 nit、コントラスト比 10,000,000:1）、タッチ操作、Dynamic Island を備え、14 インチは約 3.0 ポンド、16 インチは約 4.0 ポンド。バッテリーは最大 24 時間で、予約注文後 11月6日発売。

> **関連:** #1「Apple's git still trusts the compromised eMudhra certificates」も参照（同一企業 Apple の別件）
> **関連:** #9「Mac Studio M5 Ultra 512GB Officially Released」も参照（同一企業の新ハードウェア）

### Key Discussion Points

- **joshstrange**: タッチは自分には必要性が分からず、画面に指紋が付くのも嫌だ。
  - **elxr**: 10年近くタッチノートを使い、ブラウジングや電子書籍で便利だった。使わなければ無視できる。
  - **delecti**: タッチ搭載機を使うまでは分からないが、使うと手放せなくなる。
- **Mongoose**: タッチ画面付きノートに市場がある理由が分からない。
  - **makeitdouble**: 小さな利点が積み重なって体験が良くなる。
  - **apocalyptic0n3**: 画面が回転する機種を使ったことがあるが、また探すほどではなかった。
- **minimaxir**: タッチのデモがピアノ鍵盤なのは Forstall 時代のスキューモーフィズムで、ノートには不向きだ。
  - **AndroidKitKat**: 手の写真が、ノートでのタッチは人間工学的に良くないと示した iPad 発表時のスライドとほぼ同じだと皮肉っている。
  - **SirMaster**: デモの主眼は、シミュレータでのアプリ開発のテストだ。
- **sim04ful**: タッチ非利用者の UX が悪化するのは避けられない。
  - **dbbk**: 更新はすでに macOS に入っており、UX は悪化していない。
  - **embedding-shape**: マウス対応がキーボード利用者を損なうのと同じ話ではないか。
- **chakintosh**: 360度ヒンジがないとタッチ操作は不自然で、画面が倒れてしまいそうだ。
  - **at1as**: ジョブズの「縦のタッチ画面は腕が疲れる」という発言と矛盾する。
  - **asdff**: MacBook のヒンジは経年で緩むもの。

## 7. [Dayjob: Tax – evaluating AI agents on 50 professional tax assignments](https://surgehq.ai/blog/dayjob-tax)

**Score:** 82 | **Comments:** 50 | [Post](https://news.ycombinator.com/item?id=50275626)

Surge AI が、AI エージェントに税務専門家の仕事を依頼から成果物まで任せる評価ベンチマーク DAYJOB: Tax を公開した。50 の環境と 1,789 ファイルを用い、情報が不完全で記録が矛盾する現実に近い設定で、顧客が気づいていない論点を発見する主体性と判断力を測る。事例では、コンド売却の時期比較を適切に行いつつ、居住要件の期限という重要点を見落とした。

### Key Discussion Points

- **PopAlongKid**: 有償の税務申告代行業者を規制する法案が議会にあるが、AI への対応は含まれないだろう。
- **ilmalan**: モデルの重みだけを評価していて、ベンチマークとしては役に立たない。
- **holdingunsteady**: 税理士のミスで約2万ドル損した経験から、モデルが年に数千〜数万ドルを節約できる可能性があると感じる。
- **edoceo**: Gemini で相続の RMD 計算を試した。助言は概ね良いが、源泉徴収の誤りや控除の見落としもあった。計画より準備向き。
- **waiwai933**: 海外在住の米国市民として自分で申告書を作り、Claude にレビューさせて為替レートの誤りなどを見つけてもらっている。

## 8. [AlpineBSD](https://wiki.alpinebsd.org)

**Score:** 75 | **Comments:** 63 | [Post](https://news.ycombinator.com/item?id=50274251)

NetBSD カーネルと Alpine Linux 風のユーザーランド（apk-tools、busybox、s6）を組み合わせた OS で、AI 生成ソフトウェアをできるだけ避けることを目標とする。ベースシステムとメインパッケージには LLM の出力を含まない。開発途上でインストーラーはなく、NetBSD 由来のためハードウェア対応は限定的。

### Key Discussion Points

- **iamnothere**: FOSS が反 AI、AI 中立、AI 補助、AI 駆動の陣営に分かれており、かつての GPL 対 BSD の争いに似ている。
- **kev009**: この種のプロジェクトは一時的に注目されても定着しにくい。BSD は学習量が多く、コミッター権限を得るのも大変だ。
- **hoppp**: 「AI コードを極力避ける」は部族主義で、重要なのは誰が書いたかではなく、優れていて監査されていることだ。
- **yjftsjthsd-h**: パッケージを独自に作り init も違うなら、Alpine と名乗るのは疑問。
- **nanolith**: LLM 関与度の異なるプロジェクトが併存するのは健全で、人間だけで書かれた監査済みソフトには、モデルの学習データとしての価値もある。

## 9. [Mac Studio M5 Ultra 512GB Officially Released](https://www.apple.com/shop/buy-mac/mac-studio)

**Score:** 30 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=50277166)

Apple が Mac Studio の販売を開始した。M5 Max（最大 18 コア CPU / 40 コア GPU）と M5 Ultra 搭載構成が並ぶ。投稿タイトルは 512GB メモリ構成の公式発売を告げている。

> **関連:** #6「MacBook Pro with PROLED XDR Display and Touch」も参照（同一企業 Apple の新ハードウェア）
> **関連:** #1「Apple's git still trusts the compromised eMudhra certificates」も参照（同一企業 Apple の別件）

### Key Discussion Points

- **tristanj**: 2025年の M3 Ultra 512GB は $9,499 だったが、M5 Ultra 同等構成は $22,299 と大幅に値上がりした。
- **bcvvvy**: 全構成が、AMD 消費者向け CPU・GPU なし・低品質ストレージの Lenovo P4 より安い。
- **dzonga**: メモリ価格が跳ね上がっており、中国メーカーの参入が待たれる。
- **goudarziha**: 軽い Web 閲覧やメール、文書編集にも十分かと質問している。
- **Zenbit_UX**: 最上位構成は $29,799 + 税。ローカル AI でも元は取れず、M7 Ultra も予告されていて最新の期間が短い。

## 10. [Show HN: SlideBySide – Present slides without sharing your screen](https://slidebyside.com/)

**Score:** 11 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50276883)

画面共有をせずにスライドを提示できるサービスで、全員が同じページを見られ、共同ホストが操作を共有できる。投稿者は、自作ではなくオンラインで維持管理が不要な点が利点だと説明している（サイトは Cloudflare の検証ページで本文を取得できず、投稿本文に基づく）。

### Key Discussion Points

- **8organicbits**: スライド同期のアイデアは新しいと思う。技術系スライドには Marp のようなマークダウン方式が好み。
- **antonly**: 見知らぬサイトにスライドをアップロードするのは気が進まない。
- **jayknight**: Adobe Connect や Webex にも同様の機能があるが、実際は画面共有で済ませる人が多い。
- **sublinear**: ユースケースが不明。PowerPoint にも似た機能があり、多くの人は Microsoft 環境から離れられない。

## Trends

- **Apple のプラットフォーム信頼性と新ハード**: 失効証明書への対応遅れ（#1）が最大の話題になる一方で、タッチ対応 MacBook Pro（#6）と Mac Studio（#9）の高価格が議論された。
- **フロンティア AI の段階的公開**: Gemini 4 Carbon（#3）はセキュリティ能力を前面に出し、限定提供から始める。AI の実務評価（#7）や AI を使わない OS（#8）も話題で、AI をめぐる立場の分化が見える。
- **ものづくりの自動化**: PCB のロボット工場（#4）と CNC 石彫（#5）は、少量多品種や職人技の領域を自動化で再生する試みだ。
- **学習リソース**: 無料のグラフ理論教科書（#2）が高く評価された。
