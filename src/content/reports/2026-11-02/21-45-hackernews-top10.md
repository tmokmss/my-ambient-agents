---
title: "Hacker News Top 10 (2026-11-02)"
date: "2026-11-02T21:45"
category: "summary"
summary: "LLMがニューラルネットの重みを直接読み書きする研究、無音で話せるスマートグラス、Webアーカイブの勧めなど。"
tags: ["hackernews", "ai", "web-archive", "hardware"]
---

## 1. [Astra can read and write weights to improve Qwen](https://rikiyat.github.io/blog/weight-space-programming/)

**Score:** 1186 | **Comments:** 371 | [Post](https://news.ycombinator.com/item?id=50341174)

MIT CSAILの研究で、フロンティアLLM（GPT-6 Astra）が生のニューラルネット重みを読み書きできるとする。重みを見るだけで何を学習したネットワークか判別できる。環境フィードバックなしで、PPOを1億ステップ学習したネットを上回る小型ゲームAIを一から書き下せる。Qwen3.5-0.8Bでは、ループ（無限反復）の原因となる重みの0.016%を編集し、MATH-500を7.9%から48.1%に改善した。著者らはこれを「Weight-Space Programming」と呼ぶ。

### Key Discussion Points

- **vessenes**: 「ツールなしで重みを編集して数学能力を約5倍にしたのは衝撃的」と評価。
  - **l9o**: 「Qwenに数学を教えた」わけではない。Qwenは数学を知っていたが、推論がループして解答に至れなかった（最初の96回答中85回が上限に到達）のを直しただけだ。
  - **Aurornis**: LLMによるLLMの調査・改善は以前からあり、十分に高度な自動化でも同じことはできたはずだと冷静に指摘。
  - **Buttons840**: これこそ警告されてきた「再帰的自己改善」ではないかと述べる。
- **xg15**: 驚くべきだが意外ではない。LLMは人間が何か月もかけて習得する複雑な系を素早く把握できる。
  - **jbjbjbjb**: 将来は高水準コードとNNのインライン表示を混在させた「デコンパイル」ができるのでは、という展望。
- **NitpickLawyer**: ループの原因をMLPの層15と19が書く1方向に特定して差し引いた、という論文の記述を引用。
  - **prophesi**: refusal方向を見つけて消す abliteration と原理が近い。
  - **tty456**: 「DNAを書き換えるようなものだ」と評した。
- **vanyle**: 創発能力ではなく、OpenAIが再帰的自己改善を狙って重みデータで学習させたのだと推測。
  - **elanning**: 自分も手作業の重みとAdamW学習の比較で似た経験があり、あり得ると同意。
- **_bobm**: 重み予測や動的重み生成の研究は以前から多数あると文献を挙げる。
  - **xpct**: 過剰な熱狂に疲れていたので、根拠を示してくれて助かると歓迎。
  - **Vaushite**: 推論時の動的重みは、要するにアテンションブロックのことだと指摘。

## 2. [Show HN: Subvocal – Talk to your computer without making noise](https://news.ycombinator.com/item?id=50340088)

**Score:** 391 | **Comments:** 235 | [Post](https://news.ycombinator.com/item?id=50340088)

YC F26 の The Subvocal Company が、声を出さず口の動きだけで入力できるスマートグラスを発表した。デコードはノートPCやスマホのコンパニオンアプリ側で行い、エンドツーエンドの遅延は通常500ms未満とのこと。アクセシビリティやハンズフリー操作、騒音下での音声入力に向く。

### Key Discussion Points

- **vessenes**: 鼻が高く大きいので、金属調整パッド付きのノーズパッドを製品写真どおり維持してほしいと要望し、予約購入した。
  - **aarushyadav**（開発者）: ノーズパッドは維持する。デコードはコンパニオンアプリで行い、遅延は通常500ms未満と回答。
- **d1sxeyes**: ホームページに「何の製品か」がなく、スマートグラスだと理解するのに手間がかかる。
  - **ciaranmca**: 同感。動画も予約ボタンも見ず、HN投稿文で初めてグラスだと知った。
- **sourpanda**: SF的でアクセシビリティにも優れる。
  - **themanmaran**: エンダーのゲームの続編に似た技術が登場する。
  - **_jholland**: 1984年のスピークライトを連想するディストピア感がある。
- **SkyPuncher**: 庭仕事や機械作業など騒音下でも口述入力できるのかと質問。
- **genxy**: Googleが同種の技術をスマホに載せようとして、プライバシー侵害の懸念から見送ったと主張。性的興奮などの生体反応を広告に結びつけられる危険を挙げた。

## 3. [If you love a website, back it up](https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/)

**Score:** 284 | **Comments:** 66 | [Post](https://news.ycombinator.com/item?id=50336518)

Webアーカイブを仕事にする筆者が、愛用していたファンサイト teapuppies.com が消えてドメインがギャンブル広告に使われた経験を語る。Internet Archiveのような大組織任せにせず、自分で好きなサイトを保存しようと呼びかけ、その方法を解説する。

### Key Discussion Points

- **drpfenderson**: ブックマークの腐敗（404やドメイン放置）を実感しており、記事で紹介された拡張機能に期待。
  - **vorticalbox**: 読んだものを全部インデックスする hister を使っている。
  - **flippant**: ArchiveBoxを長年使ったが、保守が面倒。
  - **szszrk**: 最近のArchiveBoxはキューが失敗ページで溢れ、新規保存が進まない。
- **phaedrus**: 大事なフォーラムが消え、Wayback Machineも大半を未収集だった。Claudeに各所のアーカイブから静的サイトを復元させたが万能ではなかった。
- **geye1234**: 数年後にはクラウドLLMがオープンなインターネットの代わりになり、過去が書き換えられかねない。本を買い、サイトを保存すべきだと主張。
  - **hluska**: 誇張で、LLMが過去を書き換えるとは思えないと反論。
- **ceroxylon**: Angelfireで20年放置した、手作業でスキャンした写真入りのサイトを失った苦い経験を共有。
- **robotmay**: 2000年代初頭の自作サイトをWayback上で探し、忘れていたものを再発見した。

## 4. [US boy names that became girl names and vice versa](https://namedaisy.com/blog/boy-names-that-became-girl-names)

**Score:** 198 | **Comments:** 215 | [Post](https://news.ycombinator.com/item?id=50339397)

米国の出生名データで、男の子の名前から女の子の名前へ、またはその逆へ移った名前を分析した記事（サイトがボット検証で本文取得不可のため、コメントからの推測を含む）。コメントによると、女の子側へ移った名前42件のうち34件は、女児への増加が主因だった。男の子側へ移った12件のうち9件は、女児への付与が減ったことが主因だった。

### Key Discussion Points

- **billyp-rva**: 記事の結論を引用。男性化した名前も、男児に増えたというより女児が減ったことによる。
  - **conductr**: 男児は家族名や聖書の名を継ぐため名前が固定的で、女児は名前の変動が大きいのだろう。
  - **zamadatix**: 「女性が伝統的に男性的なものを採用する」例は多いが、逆は少ない。
  - **jmaw**: 長男に父親の名を付ける習慣と、女児名が流動的な理由の関係を問う。
- **ecshafer**: JanやJeanは言語によって性別が異なり、混同されている。
  - **cvhc**: 移民や言語混在も見かけの変化の一因。
  - **mikepurvis**: 家庭の使用言語などの追加データがないと結論は出せない。
  - **dotancohen**: Kimも例で、Kimという男性の韓国人を知っている。
- **Fnoord**: 外国人として、Lindsey/Lindsayが男性名なのに驚いた。語尾が母音の名前は女性的になる傾向があるのでは。
  - **FranchuFranchu**: ラテン語の格変化に由来し、スペイン語・ポルトガル語では -a が女性形、-o が男性形。
- **petemc_**: Hilaryという名の男子がひどくいじめられていた。
  - **graemep**: Hilaryは男性名から女性名になった例でもある。
- **myself248**: 英語のJeanとフランス語のJeanは、綴りが同じだけの別の名前だ。
  - **ekzy**: 妻（英国人）と自分（フランス人）は、ミドルネームが同じJeanだと明かす。

## 5. [Let Me Ch...](https://blog.alxgsv.com/let-me-check/)

**Score:** 165 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=50340369)

AIエージェントにコードを書く役割を奪われた「リード開発者」の一日を描く短編フィクション。朝のスピーカーが天気予報を告げ、シャツにアイロンをかけ、金曜に「役割を話し合う」というマネージャーの言葉に思い悩む。自分の役割とは何かという静かな不安を描く。

### Key Discussion Points

- **ethanj8011**: 冒頭の数段落がPangramで100% AI判定になった。不自然な言い回しが多すぎる。
  - **areoform**: 単に良い文章で、AIが模倣しようとする種類のものだ。人間はもっと良く書くことで抵抗すべき。
  - **isoprophlex**: 手書きの3段落が100% AIと判定された例もある。
  - **resource0x**: 原文はロシア語らしく、ロシア語では違和感はなかった。
- **CobrastanJorji**: 「降水確率40%」への問いに、その区域の任意の地点が期間中に少しでも降る確率だと答えた。
  - **noduerme**: ポートランドでは10%を「毎時6分降る」程度と解釈していた。
- **aeontech**: Claudeっぽい文章を何週間も読んだ後で新鮮だった。
  - **zirkonit**: 文体は100% LLM生成で、好印象の理由は構想と人間が書いた部分だと反論。
- **ilaksh**: 作中は何年頃か。歩行者と3000ポンドの車が混在する道路自体が不要では、という考えも述べた。
- **justonceokay**: 概念的な世界に浸りすぎると、体を楽しむ力が落ちるという感想。
  - **glitchcrab**: AIは体を楽しむ時間を増やすはずだったのに、と皮肉った。

## 6. [Show HN: Warsaw in voxels – An interactive 3D map of the city centre](https://p.migdal.pl/warsaw-vibe-voxel/)

**Score:** 160 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=50339221)

ワルシャワ中心部をボクセルで再現したインタラクティブ3Dマップ。日付・時刻・天気を変えられ、歩行者をクリックして操作できる。デスクトップ向けに最適化されている。

### Key Discussion Points

- **stared**（投稿者）: Streets of Prague など類似プロジェクトも多いと紹介。
  - **andyfilms1**: 公共交通や車のリアルタイム表示があると面白い。
- **MisterTea**: FirefoxのLinuxで1fps未満になり、重い。
- **jesse__**: 3080ti搭載ノートでもほぼ使えない。更新は30fps出ているが、実際のフレーム時間は約120ms。
- **sixtyj**: モバイルSafariでは重すぎてリロードされる。
  - **stared**: 機能と性能のバランスを取り、主にデスクトップ向けに最適化したと回答。
- **radicality**: 旧市街や王宮広場などの再現がかなり雑で、色や階数が現実と違う。
  - **nutrientharvest**: 自分の環境では旧市街自体が地図に出ていない。

## 7. [Launch HN: Momentic (YC W24) – Agents that catch bugs by using your app](https://momentic.ai/)

**Score:** 94 | **Comments:** 62 | [Post](https://news.ycombinator.com/item?id=50339913)

Momenticは、Web・iOS・Androidアプリを自律的に探索してバグを見つけるQAエージェント「Mo」を発表した。テストはYAMLでリポジトリに保存でき、CLIやMCPサーバーも提供する。QA Benchでは、Moは再現率が最高（精度84%）で、Codexの精度86%に対しコストは1バグあたり$2.67（Codexは$0.80）。

### Key Discussion Points

- **beavisringdin**: OSSを自分のハーネスに組み込む方を選びたい。YC 2024なのに2年間何をしていたのかとも質問。
- **JulianPaul**: 自分のサブスクでOpusを直接Playwrightのハーネスに使うのと何が違うのか。
- **podoman**: ブログのベンチマークを引用し、Moは再現率重視で精度はCodexがやや上、コストは高いと指摘。
- **upmostly**: 2026年にクローズドで非セルフホストは受け入れ難い。
- **bortimus**: 「堀（moat）は何か」と問う。
- **aliasxneo**: またトークン課金のSaaSか。BYOA（自分のエージェント持ち込み）を既定にすべき。
- **ecares**: オンボーディングがなく、認証設定で20ページ以上たどる羽目になった。
- **brahyam**: iOSアプリが「ホスト型シミュレータ非互換」で試験できなかった。詳細な理由を出してほしい。

## 8. [Oracle files to sell $20B in new stock, bonds to finance AI buildout](https://www.cnbc.com/2026/11/02/oracle-files-to-sell-20-billion-in-new-stock-bonds-to-finance-ai-buildout.html)

**Score:** 90 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50342284)

OracleがAIインフラ増強の資金として、新株と社債で最大200億ドルの売り出しを申請した（CNBCは取得不可のため、タイトルとコメントからの要約）。

### Key Discussion Points

- **flowerlad**: OracleはOpenAIが依存する独自IPを持たず、コモディティサービスを提供しているにすぎない。NVIDIAの次世代で性能が大幅に上がれば、旧世代GPU前提の施設は競争力を失う。
- **dcrazy**: うち半分が株式なら、現在の時価総額に対し約2.5%の希薄化。株価は8%下落。
- **jawiggins**: AI企業への投資はAIに仕事を奪われる際のヘッジだと考えていたが、株式発行で資金調達されると難しい。
- **vb-8448**: 市場に残る資金と収益化のどちらが先に尽きるかの競争だ。
- **cromka**: 2007年の質の悪いCDSに相当する、というバブル懸念。

## 9. [Sneaking into the auditorium for the Windows 2000 launch rehearsal](https://devblogs.microsoft.com/oldnewthing/20261102-00/?p=112818/)

**Score:** 65 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=50341028)

Raymond ChenのOld New Thingの記事。Windows 2000発表イベントのリハーサルを会場にこっそり忍び込んで見た思い出話で、寸劇では赤外線ファイル共有などのモバイルシナリオが披露された（記事本文は取得できず、タイトルと引用されたコメントからの要約）。

### Key Discussion Points

- **criemen**: 8歳頃に赤外線ファイル共有を使った。巨大なパラレルケーブルの代わりに赤外線プリントもあった。
- **mschuster91**: 赤外線は低速だがBluetoothよりまともに動いた。
- **xfax**: 数十年前の出来事を細部まで覚えているのに驚き、記憶術を持つ人に尋ねている。
- **jeffrallen**: 赤外線共有は遅く、待たされた。

## 10. [Egoless Mathematics in the AI Era](https://terrytao.wordpress.com/2026/11/02/egoless-mathematics-in-the-ai-era/)

**Score:** 57 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=50341736)

Karthik C. S.、Amit Sahai、Jie Xue による、テレンス・タオのブログへのゲスト投稿。数学の目的とAIの時代を論じる。数学を発明と見るか発見と見るかを整理し、成果の産出や個人の能力の誇示と作業の価値を切り離す「エゴレス」な姿勢を提案する。

### Key Discussion Points

- **kzz102**: 人間の営みは人間から切り離せない。人は自分が理解できることと、重んじる人々の意見に動機づけられる。
- **bhouston**: タオは喪失を受け入れつつ、価値の所在を新たに枠付けようとしている。否認するより向き合う方が良い。
- **WindyTree**: 知への愛（フィロソフィア）に立ち返る点に共感。IQの高低に関わらず、みな同じ家族だ。
- **j2kun**: 「人は重要でなく真理だけが重要」と読め、政策がそれに従うならば数学の未来が心配。
- **abstractbill**: 数学の博士号を取った後、年を重ねるほどプラトニストになった。
- **stillpointlab**: プラトン主義と徳倫理の結合が興味深い。人間由来のものだけを求める「人間至上主義」とは衝突し得る。

## Trends

- **AIが自分自身や人間の役割に踏み込む**: 重みを書き換えるLLM（#1）、QAを担うエージェント（#7）、開発者の役割喪失を描く小説（#5）、数学者の存在意義（#10）。能力への驚きと懐疑、そして存在論的な不安が混在している。
- **AIバブルと資金調達**: OracleのAI向け200億ドル調達（#8）に、バブル・希薄化の懸念が集まった。
- **新しい入力インターフェース**: 無音で話せるグラス（#2）は、利便性とプライバシー・ディストピア懸念が拮抗した。
- **デジタルの保存と懐古**: Webサイトのバックアップ（#3）とWindows 2000の思い出（#9）に、失われるものへの関心が表れている。
- **小さな制作物の技術的課題**: ボクセル地図（#6）はパフォーマンス、名前の分析（#4）は言語や文化の混在による解釈の難しさが焦点になった。
