---
title: "Hacker News トップ10 ダイジェスト（2026年10月8日）"
date: "2026-10-08T05:48"
category: "summary"
summary: "マーガレット・ハミルトン氏の訃報、Claude Haiku 5.5 発表、URLがアプリになる bigwords.page など HN 上位10件を要約"
tags: ["hackernews", "summary", "tech"]
---

## 1. [Margaret Hamilton has died](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007)

**Score:** 1138 | **Comments:** 126 | [Post](https://news.ycombinator.com/item?id=49998895)

アポロ計画の搭載ソフトウェアを率いたコンピューティングの先駆者、マーガレット・ハミルトン氏が9月30日に90歳で死去した（MIT News が10月7日に報道）。MIT で1959年から70年代半ばまで働き、1968年には400人超のチームを率いた。「防御的」プログラミングと優先度駆動の設計がアポロ11号の着陸時の1202アラームを乗り切る助けになった。のちに Higher Order Software などを創業し、2016年に大統領自由勲章を受章した。

### Key Discussion Points

- **diskzero**: 30年前、所属していたスタートアップの出資元 VC を介して彼女に会った。形式化された制御システムの話を聞いたが、自分には場違いなほどの相手だったと振り返っている。
- **WarOnPrivacy**: 分野全体が傑出した人物ぞろいの中でも際立っていた人。多くの人が最初に知るのは、自分の書いたコードの束の横に立つあの写真だという。
  - **el_benhameen**: 記事中の「開拓者になるしか選択肢はなかった」という一節が印象的だと述べた。
  - **underlipton**: 彼女の隣に積まれたコードは、一般向けソフトが及ばない厳密さで開発されたはずだと指摘した。
  - **autoexec**: 写真ではなく記事へのリンクだったうえ、JS を無効にすると画像が表示されなかったと不満を述べた。
- **muunbo**: 「ソフトウェアエンジニア」という言葉は彼女が作ったと記憶している。
  - **catskull**: 出典は教科書向けのインタビューで、自身のブログに再掲していると紹介した。
  - **penskymaterial**: 今ではボタンの色を変える人がその肩書を名乗っている、と皮肉った。
  - **worldsavior**: 造語自体に特別な才能は要らず、有名になるかはタイミング次第だと冷めた見方を示した。
- **EvanAnderson**: Computer History Museum の口述史を紹介した。レヴィの『ハッカーズ』にある TX-0 の逸話にも触れている。
  - **bitwize**: 古いハッカー文化には最初から有害な男性性があった、と論じる講演を紹介した。
- **dadrian**: 彼女はソフトウェアのエラー処理という考え方を生み出し、そのおかげでオルドリンは1201/1202エラーに対処できた、と述べた。

## 2. [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)

**Score:** 787 | **Comments:** 389 | [Post](https://news.ycombinator.com/item?id=49996437)

Anthropic が「最も安く、速く、高性能な小型モデル」として Claude Haiku 5.5 を発表した。要約、コンパクション、分類など大量処理向けで、Haiku 級で初めて effort 設定を備える。価格は100kトークン以下で入力$0.10・出力$0.50（/MTok）と、Haiku 4.5 の約10分の1。GPT-6 Luna との比較では多くのベンチマークで上回るとされる。あわせて Max / Team 契約者向けに毎月の API クレジットも発表された。

### Key Discussion Points

- **simonw**: effort 別に「自転車に乗るペリカン」を試した。low は自転車のフレームが崩れたが、medium 以上は正しく描け、max は5分9秒・約3.4セントかかった。
  - **rotis**: このテストはすでにモデルに織り込まれているのでは、と疑問を呈した。
  - **Jcampuzano2**: xhigh と max の時間・トークン差が極端で、ベンチマークは xhigh を既定にしてほしいと述べた。
- **minimaxir**: 100kトークンで価格が切り替わる体系は奇妙で、切り替わりの基準も低すぎると指摘した。
  - **dannyw**: 要約や RAG 補助などの短命な処理は100k未満に収まりやすく、Anthropic の狙いは理解できると擁護した。
  - **Tiberium**: Claude の100kは GPT のトークンで約60〜65k相当で、実際の比較はもっと差が小さいと補足した。
  - **Eridrus**: 生成コストはトークン数に線形でないので、長さで価格が変わる方が実態に近いと述べた。
- **charlesabarnes**: Max / Team 向けの月額 API クレジットを大きな利点と評価し、AI 機能付きの自作アプリを出荷できると喜んだ。
  - **thepasch**: Agent SDK を定額プランから外す動きを、リリースに紛れて通そうとしているのではと疑った。
  - **geek_at**: API に依存させる囲い込みで、クレジットが終われば有料に流れるのを狙っていると見た。
  - **Topfi**: 通常枠に加えて自由に使える200ドルは開発者に優しい大きな施策だと評価した。
- **chriddyp**: 自社の DataAnalyticsBench で、Haiku 4.5 より9倍安く評価は2段階上、最速のモデルだったと報告した。
- **simonw**: 以前の不満は Haiku 4.5 が GPT-6 Luna の10倍の価格だったこと。今回、100kまでは同価格になったと述べた。
  - **mrbungie**: 低価格帯では Luna を使っていたが、Haiku が再び選択肢になったと歓迎した。
  - **janalsncm**: 性能対価格のグラフではタスクによって優劣が割れていると冷静に見ている。
  - **lightbendover**: トークン単価だけではタスク当たりのコストを測れないと指摘した。

## 3. [Show HN: Bigwords.page – Turn any screen into a sign. The URL is the app](https://bigwords.page/)

**Score:** 432 | **Comments:** 127 | [Post](https://news.ycombinator.com/item?id=49994443)

URL を開くだけで全画面のサインやタイマーになる Web ツール。文字は画面いっぱいに拡大され、Markdown 風の装飾、`||` 区切りのスライド、カウントダウン、QR コード生成に対応する。内容は URL のフラグメントに入るためサーバーには保存されず、アカウントも不要で、MIT ライセンスの OSS。

### Key Discussion Points

- **saaaaaam**: パネル討論の司会でタイマー表示がない会場が多く、これがあれば進行の質が上がると歓迎した。
- **SpeakingOfBrad（作者）**: リモート管理のタブレットに物理アクセスなしでメッセージを出したかったのが発端。URL をメッセージにすれば、フラグメントはサーバーに送られない。
  - **jluxenberg**: data URL でも同じことができると指摘し、コピー機能を提案した。
  - **zie**: ろう者で筆談に大きな文字が必要なため重宝すると述べ、サーバー負荷を避けるためセルフホストするという。
  - **okaleniuk**: 授業のスライドに同じ発想を使っていると紹介した。
- **pvillano**: Firefox では scrollWidth が余白にはみ出した空白を含み、文字が収まっていても溢れ判定になるバグがあると報告した。
  - **SpeakingOfBrad**: 自分のブラウザでしか試しておらず、ほかにも見つかったと認めた。
- **arshxyz**: この用途には Wake Lock API が適していると提案した。
- **paulsmith**: bigassmessage.com を覚えているか、と先行例を挙げた。
  - **yunruse**: 「MAGIC」スタイルにはてんかんの警告が必要だと指摘した。

## 4. [How did Rosalind Franklin miss the helix in her iconic DNA image? She didn't](https://www.science.org/content/article/how-did-rosalind-franklin-miss-helix-her-iconic-dna-image-she-didn-t)

**Score:** 128 | **Comments:** 49 | [Post](https://news.ycombinator.com/item?id=49969073)

記事本文は取得できなかったため、投稿者の掲示したコメントと議論から要約する。科学史家らの論文は、ロザリンド・フランクリンは写真51の前から DNA がらせん構造だと理解しており、だからこそより精緻な写真を撮ったと主張する。ワトソンが自分の「ひらめき」だとした点に異を唱える内容で、二重らせんの発見者はワトソンとクリックだという従来の整理との境界が論点になっている。

### Key Discussion Points

- **dekhn**: フランクリンのノートから、中心部で二重らせんと塩基相補性を考えていたことがわかる。知る限りその最初の実証的な証拠だと述べた。
- **skew-aberration**: 見出しは論争の捉え方を誤らせると批判した。1951年時点でらせんは最有力候補で、以前の粗い X 線像も示唆していたという。
- **lacker**: Nature の別記事のほうが良いと紹介した。発見は、らせん構造、二重らせん、ACGT の複製機構の3段階に分かれ、貢献者も異なるという整理を示した。
- **bondarchuk**: 記事は結局、彼女が二重らせんに先に気づいたのかを明言しないと不満を述べた。
- **dnautics**: 繊維回折は本質的にらせんを前提にするので、争点は構造パラメータの意義に気づいたかどうかだと指摘した。

## 5. [‘Jonathan’ is the oldest land animal on Earth](https://www.404media.co/oldest-living-land-animal-jonathan-the-tortoise/)

**Score:** 113 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=49998066)

セントヘレナ島に暮らす約194歳のアルダブラゾウガメ「ジョナサン」のゲノムが解読された。Science Advances に載った研究で、DNA 修復、インスリン調節、ミトコンドリア機能などの老化経路に特有の変異が見つかった。ミトコンドリア部分のメチル化が5歳のカメに似た「低エントロピー」だった点が最も意外だという。研究者は、人間の健康寿命の研究への手がかりになることを期待している。

### Key Discussion Points

- **scun**: 老化経路に特有の変異があるという結果を、長寿と速度・魅力の振り分けに例えて茶化した。
- **Ancalagon**: 「90歳を超えているようには見えない」と冗談を言った。
- **usernametaken29**: カメになって浜辺で昆布を食べて過ごしたい、と冗談を述べた。
- **totetsu / repeekad**: サンプルがセントヘレナからフロリダまで米宇宙軍によって運ばれたことについて、なぜ宇宙軍なのかと疑問を呈した。
- **dyauspitr**: 陸の動物の最長寿が200年に届かない一方、海の生物は500〜600年以上生きるものもいる、と指摘した。

## 6. [Living off-grid: Hundred Rabbits](https://100r.ca/site/home.html)

**Score:** 112 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=49970767)

RekとDevineが運営するスタジオ Hundred Rabbits の公式ページ。約10年間、帆船 Pino で暮らしながら活動している。軽量仮想マシン Uxn、カードゲーム Donsol、Playdate 向けゲーム、アナログな航海術や暗号を教えるコミック、航海日誌の書籍、料理レシピなどを公開している。2026年1〜9月の月次ログも載る。

### Key Discussion Points

- **newtypecola**: 古い帽子を分解して新しく作るログが好きだと述べた。服をオープンソースにたとえ、頼るものを理解し、直し、作り直すという彼らの思想に通じると見ている。
- **soltanov**: 船上の暮らしを見ると、ブラウザのタブを閉じてネットを切り、ゆっくり作りたくなると述べた。
- **cavoirom**: 夢を実現し、すばらしい仕事をしているとして最近のインタビューを紹介した。
- **raptorraver**: 数年前から追っており、今の「スロップ」とエネルギー消費の時代にどうしているかを気にしていたと語った。自作の表計算ソフトで家計を管理していると紹介している。
- **IgnaciusMonk**: 水の消毒に関する記述で、漂白剤の扱いは表現を改善できるはずだと指摘した。

## 7. [Cleo (Mathematician)](https://en.wikipedia.org/wiki/Cleo_(mathematician))

**Score:** 103 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=49982445)

Cleo は2013年11月から2015年12月まで活動した Mathematics Stack Exchange の匿名アカウントで、難しい積分問題を中心に39件の回答を投稿した。回答は常に正しかったが証明や手順は書かれず、質問から数時間以内に出ることが多かった。2025年1月、YouTube の調査とメール復旧の発見によりウズベキスタン出身のソフトウェア開発者 Vladimir Reshetnikov だと判明した。本人は、見過ごされた問題に注目を集め、他の人が自力で解く力を伸ばすよう促すために作ったと認めている。

### Key Discussion Points

- **DavidSJ**: Wikipedia の記述は2023年末の Reddit 分析を発端とするが、自分たちは同年4月ごろから追っていたと主張した。
- **epcoa**: 39件の回答のうち、別名義のアカウントが質問したものはどれだけあったのかを問い、これは重要な情報だと指摘した。
- **snailmailman**: Cleo の振る舞いは、大手 AI 企業が未解決定理の証明を出す動きと似ており、価値は解答だけでなく理解の道筋にもあると論じた。
- **kylepomykala**: 正体が特定されたことに驚いている。

## 8. [In Vienna and Beijing, the first (thorium) nuclear clocks begin to tick](https://www.nytimes.com/2026/10/07/science/first-nuclear-clocks-thorium-229.html)

**Score:** 65 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=49996406)

記事本文は取得できなかったため、コメントとタイトルから要約する。ウィーンと北京で、トリウム229の原子核遷移を利用した最初の原子核時計が動き始めたという内容。コメントによれば原論文は Nature に掲載されている。数百万年に数秒レベルの精度が話題に出ている。

### Key Discussion Points

- **dgacmu**: NYT がリンクしなかった原論文として Nature の論文を紹介した。
- **austin-cheney**: トリウムは中性子星や超新星で作られる稀な元素だが、地球の地殻ではウランの約3倍も豊富で、自然放射線の主な源の一つだと述べた。
- **pclowes**: 「6500万年に2秒」の精度は、完全な基準時計なしにどう測るのかという疑問を示し、何か巧妙な方法があるはずだと書いた。

## 9. [Terence Tao Responds to the OpenAI Math Drop](https://mathstodon.xyz/@tao/117395269325940185)

**Score:** 45 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=50002008)

テレンス・タオ氏が、OpenAI が10月6日に公開した数学の文書群に反応した Mastodon 投稿。問題を解く先着順を重視する「Math 1.0」は持続不可能なまでに最適化されたとし、今後の「Math 2.0」では生の問題解決の比重を下げて、解説、コミュニティ作り、新しい研究方向の開拓をより評価すべきだと述べる。AI はそれらにも貢献できるが、AI エージェントに未解決問題を投げて解かせるだけの発想ではなく、より多くの想像力と野心が要るという。教育、出版、昇進の基準も明示的に見直すべきだとしている。

### Key Discussion Points

- **shubhamjain**: バランスの取れた見解で、証明を投げて検証を他人に任せるのは非生産的だという懸念はもっともだと評価した。
- **yedhukrishnan**: 数学を他の分野に置き換えても成り立つ、この1年のテック業界への指摘の凝縮だと述べた。
- **underdeserver**: 問題が解けた後にも、より単純な証明や系を出す価値は常にあると理解したが、モデルがそれも人間より得意になるのではと見ている。
- **cs_throwaway**: 採用の評価が変わるまでは様子見で、PI は博士課程の学生2人ではなく1人を雇い、残りを AI に使うだろうと予想した。
- **vasco**: 知能が伸び続ければ、プロンプトを書く人が理解する必要はなくなると見ている。
- **teekert**: 初期の懐疑論者の意見は聞かず待つべきだと述べた。
- **patternMachine**: 一言「Taste（審美眼）」とだけ書いた。

## 10. [A 100x faster* alternative to homebrew](https://github.com/zerobrewhq/zerobrew)

**Score:** 26 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50001580)

zerobrew は Homebrew の formula と bottle を使う実験的な高速クライアント。「最大100倍」は warm インストールの数字で、M3 Pro での100パッケージの計測では cold が約117秒対776秒（6.6倍）、warm が約9.3秒対638秒（68倍）。ダウンロード後の再配置をプロセス内で行い、コンテンツアドレス方式のストアからリンクすることで速くしている。Homebrew と併用する前提で、Apache-2.0 / MIT のデュアルライセンス。

### Key Discussion Points

- **potamic**: 新規インストールではキャッシュが空なので、warm より cold の数字のほうが重要ではないかと質問した。
- **BugsJustFindMe**: 同じ手法を brew への PR にせず、なぜ新しいアプリにしたのかと疑問を呈した。
- **sevg**: README が LLM 製だと警告している。
- **wg0**: Homebrew は Intel Mac にインストールできず、非対応と表示されると報告した。
- **jackwsmth**: Homebrew 自体も今 Rust 化が進んでいるのでは、と述べた。
- **AbuAssar**: インストール手順が `brew install` なのを皮肉った。
- **MiroslavPokorny**: Homebrew と同じインストールファイルを使う点をタイトルに入れるべきだと述べた。

## Trends

- **AI と専門領域の関係の再定義**: Haiku 5.5 の低価格化と、タオ氏による数学コミュニティへの提言が、AI を前提に評価基準を見直す流れを示している。Cleo の話も、解答と理解の価値という同じ論点に重なる。
- **計算機史の偉人への追悼**: ハミルトン氏の訃報が最多スコアで、ソフトウェア工学の起源とエラー処理の遺産が語られた。
- **科学ニュース**: 長寿ゾウガメのゲノム、DNA 発見をめぐる歴史の再検討、トリウム原子核時計が並んだ。
- **小さく自己完結した道具と暮らし**: サーバーを持たない bigwords.page、オフグリッドの Hundred Rabbits、Homebrew 互換の zerobrew に共通する、シンプルさへの志向が見られる。
