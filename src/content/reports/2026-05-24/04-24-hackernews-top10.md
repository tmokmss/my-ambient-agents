---
title: "Hacker News トップ10 サマリー（2026年5月24日）"
date: "2026-05-24T04:24"
category: "summary"
summary: "グリーンカード制度改定・writerdeckの自作・DOSソース公開など、HNトップ10を日本語でサマライズ"
tags: ["hackernews", "tech", "immigration", "hardware", "html", "demo", "microsoft"]
---

## 1. [Green card seekers must leave U.S. to apply, Trump administration says](https://www.nytimes.com/2026/05/22/us/politics/green-card-changes-trump.html)

**Score:** 689 | **Comments:** 1183 | [Post](https://news.ycombinator.com/item?id=48241890)

トランプ政権のUSCISが、グリーンカード申請者は米国内からではなく在外公館を通じて申請しなければならないという新方針を発表した。これまでH・J・Oビザ保有者の多くは米国滞在中にAdjustment of Statusで申請できたが、新ルールではそれが原則禁止となる。在外公館の予約待ちが数年に及ぶ国も多く、実質的に合法的移民を締め出す措置と批判されている。

### Key Discussion Points

- **abalashov**: 教育を受けた有能な人材でも、この要件が以前からあれば米国に留まれなかった。在外公館がない国もある上、あっても待機期間は年単位に及ぶ。政策立案者は意図的に悪意があるか、移民プロセスを全く理解していないかのどちらかだ
  - **cloche**: 合法移民ですら制限・困難にするのが目的。（直接支払えば別だが）
  - **rajup**: スティーブン・ミラーの真骨頂。残酷さが目的だったし、今もそうだ
  - **radsj**: USCISサイトの文言を引用し、H/Lビザ保持者には適用されない可能性を指摘
- **seshagiric**: 米国生まれの子供はビザ取得が必要になる。相手国の領事館は多年待ちで、子供が本国市民権を取得すれば米国市民権を失う可能性も。理屈に合わない政策だ
  - **robofanatic**: インドにはOCI（Overseas Citizenship of India）があり、米国市民権を手放さなくて済む
  - **qurren**: 米国育ちの子供は文化的・言語的に米国人であり、別の教育制度に放り込まれると深刻な混乱を招く
- **esalman**: 2023年にグリーンカードを取得できたことに安堵しつつも、夫婦合計25年超の居住・年間10万ドル超の納税にもかかわらず、まだ市民権申請できない状況の理不尽さを語る
  - **pixelatedindex**: 納税額が移民プロセスに関係すべきかどうか疑問を呈す
  - **Underphil**: 不確実性に耐えられず帰国を決意。ゴールポストがいつ動くかわからない
- **yongjik**: ICEが米国市民2人を白昼堂々殺害し、それを擁護するコメンターがHNにもいた事例を思い出す
  - **amazingamazing**: 警察による米国市民殺害は1900年代から続く問題
- **itkovian_**: 米国はもはや生活の質でどの指標でも世界一ではない。全世界課税義務を課す唯一の国で、最も才能ある人々は米国に長期定住しない人生を計画している
  - **freediver**: 独自指標サイトによると米国は27位
  - **wg0**: 欧州の銀行は「US Person」口座開設を断るケースが多い。FATCA報告義務が理由

---

## 2. [Time to talk about my writerdeck](https://veronicaexplains.net/my-first-writerdeck/)

**Score:** 324 | **Comments:** 187 | [Post](https://news.ycombinator.com/item?id=48250144)

Veronicaは古いノートPCをGUIなしのDebian専用マシン「writerdeck」に改造し、集中して執筆できる環境を構築した。GUIを一切インストールせず、kmscon（フォント対応ターミナル）・Neovim+vim-vimwiki・tmux・Syncthing（バックアップ）で構成。自動ログイン設定でwikiが即座に開く。ブラウザや通知がない環境が、複数プロジェクト横断での集中に効果的だという。

### Key Discussion Points

- **throw10920**: HNでよく見られるパターン：問題解決のためにフルシステムを一から構築→「より簡単な解決策があるのでは」→「クールなプロジェクトだから効率だけが全てじゃない」という議論の二極化を指摘
- **CobrastanJorji**: 「書くことへの集中」を解決するためにOS再構築・ネットワークスタック変更・Neovim探求・バッテリー表示カスタマイズ・ログインシーケンス調整・そしてtmuxで複数タスクを同時に…という皮肉を指摘
  - **michaelbuckbee**: 「ブログを始める」の第一歩が静的サイトジェネレーターを自作することに似ている
  - **Waterluvian**: 治具とフレンチクリートの製作ばかりしてしまう大工と同じ
  - **katzgrau**: 「ヤク刈り」の典型。ダイエット開始でまずジムグッズを買う感じ。ただし重要な少数例は長期的成果に繋がることもある
- **kaashif**: ADHDの人がアデロール飲んで1日間違ったことに集中した感じ。writerdeckが多くのプロジェクトにわたって持続的に機能するなら良いが、2プロジェクトごとに刷新されるならドーパミン補充の手段に過ぎない
  - **akerl_**: 誰かの真摯な投稿にこんな敵対的なコメントをするのは不思議だ
  - **cortesoft**: 何が正しい・間違いかを決めるのは誰か
- **iib**: Linuxシステムがあれば`Ctrl+Alt+F3`でTTYに切り替えるだけ。そこまで複雑な設定は不要
  - **luqtas**: さらに簡単に：EmacsクライアントでメニューバーとツールバーをOFFにしてフルスクリーン
  - **SubiculumCode**: `sudo systemctl set-default multi-user.target`でTTYブート直行可能
- **daoboy**: 理想のeinkデバイスを待ち望んでいる。Boox One Note Maxが惜しくも廃番に
  - **caconym_**: King JimのPomeraシリーズを推薦。DM250は米国版もある
  - **chunkyks**: Freewrite Travelerは評価が極端に二分される（長寿命・集中力は高評価、高価なのに機能が少ないという批判も）

---

## 3. [On The `<dl>` (2021)](https://benmyers.dev/blog/on-the-dl/)

**Score:** 367 | **Comments:** 109 | [Post](https://news.ycombinator.com/item?id=48247325)

Ben MyersがHTMLの`<dl>`（説明リスト）要素の適切な使い方を解説した2021年の記事が再浮上。`<dl>`は`<dt>`（用語名）と`<dd>`（値）のペアを意味的にマークアップするための要素で、商品詳細・連絡先カード・キャラクタースタッツなどに適している。スクリーンリーダーユーザーはリストのアイテム数確認や位置情報取得・ブロックスキップが可能になるが、ブラウザ間のサポートにはばらつきがある。

### Key Discussion Points

- **chrismorgan**: 記事のコード例に技術的誤り：`<dl>`には暗黙のARIAロールがなく`aria-label`を使うには`role="list"`または`role="group"`が必要
  - **redmatter**: `<dt>`と`<dd>`をラップするdivに`role="listitem"`を付与すべきかどうか質問
  - **brewmarche**: `viz.`という略語を調べるサイドクエストに出かけてしまった
- **kqp**: セマンティックHTMLを書こうとするのをやめてから楽になった。`<dl>`を使うたびに後悔してきた。複数レベルのラッパーが欲しくなったり、セクション間の区切りが欲しくなったりして、結局APIが使い物にならない
  - **miki123211**: スクリーンリーダー日常ユーザーとして同意。W3Cはイデオロギー的な「セマンティックの純粋性」を捨て、開発者が実際に何をしたいかから考えるべき
  - **halapro**: CSSの問題。`display:contents`に倣い、共通の親を持つかのように要素をグループ化するCSSセレクターを提案
- **theodpHN**: `dl-dt-dd`は1985年のIBMメインフレームGML/DCFマニュアルに既に登場。Webより40年以上前から存在している
  - **epc**: GMLは1969年まで遡る。SGML→HyTime→HTMLという歴史的流れ
  - **skgough**: SGML→HTML、Berners-Leeは既存マークアップ言語にハイパーリンクを追加した
- **jimbosis**: 世界初のウェブサイト（info.cern.ch）が`<dl>`を多用している
- **captn3m0**: HTML5以前は「definition list」と呼ばれていた。10年間名前を間違えていたと気づいた
  - **sunshowers**: `<b>`も今や"bring attention to"という意味に変更されている
  - **Ancapistani**: 自分も最初は誤りだと思った

---

## 4. [My two-part desk setup (2025)](https://arslan.io/2025/11/18/my-two-part-desk-setup/)

**Score:** 241 | **Comments:** 139 | [Post](https://news.ycombinator.com/item?id=48214311)

Fatih Arslanがハンブルク訪問で美術館の机の向きに触発され、自分の机を壁向きから部屋向きに転換。200×75cmのUSM Haller製デスクを「デジタルサイド」（Studio Display・Mac・キーボード）と「アナログサイド」（手帳・万年筆・本・LEGO）に分割。両サイドを移動するだけで作業モードを切り替えられる。9〜10ヶ月使用後も満足度が高い。

### Key Discussion Points

- **tianqi**: 古代中国の風水では「背後に空間があると座ってはいけない」とされる。背後の空間への無意識の注意が集中を阻害するからで、合理的な理由がある
  - **ChrisMarshallNY**: クリストファー・アレクサンダーの『パタン・ランゲージ』の「二面からの光」パターンを引用。ドイツの会社では大きな窓のある2人用オフィスが法律で義務付けられている
  - **Fnoord**: 部屋向きの机はプライバシーと来客対応に有利だが、通路スペースが減るトレードオフがある
- **porphyra**: Vitsoe 606ユニバーサルシェルフとUSM Hallerデスクへの羨望を表明。「夢のセットアップ」
  - **mattlondon**: IKEAの棚で十分なのでは？「自分の富を知らしめたい」系の投稿か
  - **nixass**: 少し気取った感じ。所有物を自慢し続けるウェブサイトの雰囲気
- **zkmon**: 「本当の仕事はボロボロになった道具でなされる。ピカピカの道具ではない」と哲学的見解
  - **normie3000**: 「じゃあテーブルを買って使い始めれば良い」と一言
- **solenoid0937**: コロナ禍に同様のアプローチ。自宅オフィスから仕事機材を一切持ち出さないことで精神的な切り離しを実現
  - **safety1st**: デジタル用デスクとアナログ用「書斎コーナー」を別に設けて同様の分離を実現
- **allenu**: スペースへの羨望を表明しつつ、2本の万年筆を常備する必要性など一部の過設計を指摘

---

## 5. [Microsoft open-sources "the earliest DOS source code discovered to date"](https://opensource.microsoft.com/blog/2026/04/28/continuing-the-story-of-early-dos-development/)

**Score:** 100 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=48253386)

MicrosoftがGitHubで86-DOS 1.00のソースコードを公開した。発見された中で最古のDOSソースコードで、DOS誕生45周年を記念するもの。コードはデジタル保存されておらず、Yufeng GaoとRich Ciniが率いるチームが古い紙の印刷物をOCRでスキャン・手作業で書き起こした（現代のOCRソフトは古い印刷物の解読に苦労したという）。内容はカーネル・PC-DOS 1.00開発スナップショット・CHKDSKユーティリティを含み、MITライセンスで公開。

### Key Discussion Points

- **jmward01**: 珍しくMicrosoftを称賛。DOSと同時にオープンソース化されたBASICコードの方がむしろ重要で、MicrosoftはもともとBASICがやりたかった会社。DOSはIBMとの契約を取るための手段だった
- **gnabgib**: HNでの過去の議論スレッドへのリンクを提供（79点・162点の2件）
- **locusofself**: 紙の印刷物からOCRしなければならなかったことに驚き。「数十年前の印刷物の品質に現代のOCRが苦労した」という事実が興味深い
- **dang**: 関連する過去スレッドへのリンク（HNモデレーター）
- **userbinator**: 最初期のWindowsのソースコードもいずれ公開されるかという期待感を表明

---

## 6. [Wake up! 16b](https://hellmood.111mb.de/wake_up_16b_writeup.html)

**Score:** 92 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48253060)

2026年5月のOutline Demopartyで発表された16バイトのx86アセンブリプログラム。たった16バイトでSierpinskiフラクタルのグラフィックとPCスピーカー音声を同時生成する。DOSビデオモード0（40×25テキストグリッド）を使用し、XOR演算と加算プレフィックスサムによる「ルール60」セルオートマトンでフラクタル構造を実現。数学的パターンが方形波音声に直接変換される。

### Key Discussion Points

- **gnabgib**: 6日前のHN投稿では209ポイントを獲得している
- **3form**: 以前32バイトのデモを限界だと思っていたが、これは音声なしでもなかった。傑作。これを最後に引退するか、別アーキテクチャで追いかけるか
- **kennywinker**: 「16Bパラメータ」のLLMだと思い込んでいた（16バイトのデモとは全く別次元）
- **hei-lima**: プログラミングとコンピューターへの愛を思い出させてくれる作品。本当にアート。AIの時代に業界ではこういうものを作る機会が少なくなって残念

---

## 7. [Scammers are abusing an internal Microsoft account to send spam links](https://techcrunch.com/2026/05/21/scammers-are-abusing-an-internal-microsoft-account-to-send-spam/)

**Score:** 71 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=48253186)

詐欺師がMicrosoftの公式通知用アカウント`msonlineservicesteam@microsoftonline.com`を悪用してフィッシングリンクを含むスパムメールを送信している。Spamhaus Projectが確認しMicrosoftに報告済みだが、数ヶ月間対策されなかった。Microsoftは「積極的に調査し対応する」と表明。

### Key Discussion Points

- **weinzierl**: Microsoftのドメイン管理は混乱していて、`microsoftonline.com`が本物かどうかも不明。企業はドメインを確認してスパムを見抜くよう言う一方で、自社で使用する全ドメインのリストすら公開できていない
- **spike021**: Bookingでホテルを予約した後、Bookingの公式ドメインから来たフィッシング試行を受けた経験を共有
- **wnevets**: PayPalでも同様のことが起きているのか確認
- **nippoo**: 同様のことはFBI公式サイトでも過去に起きた（2021年のKrebs on Security記事を引用）
- **ChrisArchitect**: abnormal.aiブログの詳細レポートへのリンクを提供

---

## 8. [Sales and Dungeons: Thermal printer TTRPG utility](https://sales-and-dungeons.app/)

**Score:** 64 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=48232721)

サーマルプリンターをTTRPG（テーブルトップRPG）のセッションツールとして活用するオープンソースアプリ。HTML/CSS＋NunjucksテンプレートでハンドアウトやNPC情報・戦利品説明を作成・印刷できる。OpenAIやOpenRouter、ローカルLLMとの統合、FoundryVTTモジュールやFight Club 5eデータのインポートにも対応。Windows・macOS・Linux・Raspberry Pi対応、MITライセンス。

### Key Discussion Points

- **VladVladikoff**: サーマル用紙のBPA問題が気になる。「BPA不使用」表記でもBPSなど類似物質が含まれることがあり、子供が触れるものとして安全な紙を探している
- **caioricciuti**: 謎や戦利品の説明を書いた物理スリップをプレイヤーに渡す方が、画面で読むより格段に没入感がある
- **kaashiro**: 日々のTodo・買い物リスト用にサーマルプリンターの推薦機種を質問
- **iterateoften**: TTRPGで数回使う程度の接触を危険視する一方で、レジ係は1日8時間触り続けていることへの二重基準を指摘
- **debo_**: インデックスカードとペンで済ませているが、このテンプレートのような絵が描けたら良かったと思う

---

## 9. [My I3-Emacs Integration](https://khz.ac/software/i3-integration.html)

**Score:** 40 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48252535)

i3ウィンドウマネージャーにパッチを当て、フォーカスされているウィンドウがEmacsのときに特定のキーイベントをi3が横取りせずEmacsに直接渡す「パススルー」機能を実装した記事。`xdotool`+`emacsclient`による従来手法では最大1秒のレイテンシがあったが、i3のソースコード改変により解決。`Binding`構造体への`passthrough`フィールド追加・パーサー修正・`handle_key_press()`の改修からなる。

### Key Discussion Points

- **SubiculumCode**: 今日のHNは個人的なハック記事（i3-Emacs統合・デスクセットアップ・writerdeck・サーマルTTRPG・16バイトデモ）が揃っていて楽しい。AIでもないギーク的な話題が好きだ
- **skulk**: EmacsとEmacs以外のウィンドウ管理を統合するためにewm（Emacsウィンドウマネージャー）を使い始めた
- **PunchyHamster**: super(Winキー)/hyper(CapsLockに割り当て)をi3用に使い、Emacsには通常バインディングをそのまま使う方式にしている

---

## 10. [Judson's Last Ride](https://www.realclearpolitics.com/articles/2026/05/22/judsons_last_ride_154150.html)

**Score:** 62 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48246993)

重度の自閉症を持つJudsonという人物に関する個人的なエッセイ。コメントから、Judsonは非言語性の重度自閉症者で、彼の生涯・介護者・教師たちについての感動的な物語であることが読み取れる（元記事はアクセス不可）。インターネットがまだ個人の人生を分かち合う場所であることを再確認させてくれる内容。

### Key Discussion Points

- **collinmcnulty**: この記事を読めて良かった。インターネットは問題も多いが、互いの人生を分かち合える場であることをまだ体現している
- **peterldowns**: Judsonは自分の双子の兄弟Henryに似ている（重度自閉症）。重度障害者の支援に携わる介護士・教師への尊敬と感謝を表明
- **refulgentis**: 「今夜HNについて新しいことを学んだ」（HNコミュニティの多様な一面への気づき）

---

## Trends

今日のHNトップ10から浮かび上がる共通テーマ：

1. **個人の工夫・自作文化の盛況**: writerdeck・デスクセットアップ・i3-Emacs統合・サーマルTTRPG・16バイトデモと、「自分だけの道具を手作りする」投稿が異例に多い一日。SubiculumCodeのコメント「AIでもない、ギーク的な楽しいモノが揃っている」が象徴的。

2. **集中・没入環境への渇望**: writerdeckとデスクセットアップはどちらも「デジタルの分散注意に抗い、深く集中するための環境づくり」という同じ動機から生まれている。TTRPGの物理的印刷物も「没入感」を求める方向性と一致する。

3. **移民・政治的不確実性への深刻な懸念**: グリーンカード新要件の投稿が1,183コメントと圧倒的な関心を集め、テックコミュニティにおける移民政策の影響の大きさを示す。スコアも689と際立って高い。

4. **セキュリティ信頼の崩壊**: Microsoftの公式アドレスを悪用したスパムは「ドメインを確認すれば安全」という常識を覆す。FBIやPayPalでも類似事例があり、正規インフラの悪用という問題が広がっている。

5. **コンピューター歴史への敬意**: 最古のDOSソースコードと16バイトデモの両方が、デジタル歴史の保存と極限のプログラミング技術への畏敬を呼び起こしている。OCRと手作業による保存プロジェクトは、失われかけたコンピューティング遺産への真剣な向き合いを示す。

6. **Webセマンティクスの実用的再評価**: `<dl>`要素の議論は、アクセシビリティと実用性のトレードオフについてのより大きな問いを投げかけている。「セマンティックの純粋性」対「開発者の現実」という構図はWeb開発の永続的テーマ。
