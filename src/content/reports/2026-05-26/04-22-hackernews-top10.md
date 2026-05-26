---
title: "Hacker News トップ10サマリー（2026年5月26日）"
date: "2026-05-26T04:22"
category: "summary"
summary: "AIを使って「よりゆっくり良いコードを書く」議論、カリフォルニアのLinux年齢確認法免除、フェラーリ初のEVなど話題10選"
tags: ["hackernews", "ai", "linux", "privacy", "crypto", "ferrari", "norway"]
---

## 1. [Using AI to write better code more slowly](https://nolanlawson.com/2026/05/25/using-ai-to-write-better-code-more-slowly/)

**Score:** 276 | **Comments:** 114 | [Post](https://news.ycombinator.com/item?id=48272984)

AIコーディングの目的は「速くスロップコードを吐き出すこと」ではなく、**高品質なコードを丁寧に書くこと**にも使えると著者は主張する。LLMをバグ発見器として複数モデルで並列レビューにかけると、精査されていないコードベースからも大量のバグを検出できる。重要なのはバグを見つけることではなく、その優先順位付けと検証だという。

### Key Discussion Points

- **bottlepalm**: Claude（実装担当）とCodex（レビュー担当）を組み合わせた多段反復ワークフローを実践。最終的には手書きより速いが、大半の時間をレビューループに費やしていると語る。
  - **aomix**: 実装前にAIと設計・アーキテクチャについて徹底的に議論するのが自分のベストゾーン。「ロボットと設計議論を一日中している」ことで自分がより良いエンジニアになれていると感じる。
  - **scosman**: 「AIにワンショットで複雑タスクを頼む人が多すぎる」と指摘。研究→計画→テスト計画を5ラウンド繰り返すことで、従来比5倍速で開発できると語る。
- **crabmusket**: AI懐疑派だが、AIに**コードを書かせる**のではなく**レビューさせる**のは思考を外注せずに済む稀なユースケースだと評価。Cloudflareのコードレビュースタックを好例として挙げる。
- **TACIXAT**: エージェント型AIは「ゴールに向かって猪突猛進」し、実装中の無数の微小アーキテクチャ判断が失われてしまう点を批判。プログラミングの楽しさが奪われると感じており、最適な使い方はチャットと検索だと結論付ける。

---

## 2. [Taking a walk may lead to more creativity than sitting, study finds (2014)](https://www.apa.org/news/press/releases/2014/04/creativity-walk)

**Score:** 137 | **Comments:** 48 | [Post](https://news.ycombinator.com/item?id=48272670)

スタンフォード大学の研究（176名対象）で、**歩行が座っている状態より創造的思考を有意に向上させる**ことが確認された。トレッドミルでの室内歩行でも同様の効果があり、屋外環境そのものではなく「歩く」という動作自体が鍵。オープンエンドなクリエイティブタスクでは参加者の81〜100%が歩行時に良い成果を出した一方、単一の正解を要するタスクではやや低下した。

### Key Discussion Points

- **stego-tech**: COVID中に毎日30〜60分の散歩習慣を作り、生産性と幸福感が大幅に向上。仕事でその時間が奪われてから低下を実感したと語る。
- **__mharrison__**: 「歩く、シャワー、睡眠、自転車はコードのデバッグに最適」と断言。ポッドキャストや音楽なしで脳を「チャーン」させることが鍵だという。
- **vlunkr**: 宮本茂がスターフォックスのアーチ潜り抜けアイデアを任天堂本社近くの神社の参道から得たエピソードを引用。創造性は専門領域の外にあると示唆。
- **wasting_time**: ニーチェの「本当に偉大な思想はすべて歩きながら生まれる」という言葉を引用。

---

## 3. [How Shamir's Secret Sharing Works](https://ente.com/blog/how-shamirs-secret-sharing-works/)

**Score:** 98 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48272715)

Ente社のブログがシャミアの秘密分散法（1979年）を平易に解説。**秘密をN個のシェアに分割し、K個が揃って初めて復元できる**仕組みで、K-1個以下では秘密について何も分からない情報理論的安全性を持つ。幾何学的直感（2点が直線を一意に定める）から出発し、多項式演算を経て有限体上の実装へと説明する。Enteはこの技術を自社のLegacy Kit（緊急時アクセス機能）に組み込んでいる。

### Key Discussion Points

- **_jackdk_**: 「これは中高生に教えられる素晴らしいコンピューターサイエンスの応用例だ」と絶賛。
- **teravor**: 大きな秘密は通常、暗号化して鍵のシェアを配布する方式が現実的。Reed-Solomonを使う代替案もあるが、All-Or-Nothing変換（AONT）が必要と技術的に補足。
- **3eb7988a1663**: ルートDNSキーの保持者もこのような仕組みを使っているのか？と疑問を呈する（現実には金庫が使われているとのこと）。

---

## 4. [Norway's 2 petabytes of Huawei flash storage and LLM training](https://www.blocksandfiles.com/flash/2026/05/22/norways-2-petabytes-of-huawei-flash-storage-and-llm-training/5244910)

**Score:** 193 | **Comments:** 95 | [Post](https://news.ycombinator.com/item?id=48270770)

ノルウェー国立図書館がノルウェー語LLMを開発中。2005年からデジタル化を続けてきた約20PBの固有デジタルコレクション（書籍・新聞・Webコンテンツ）を活用し、Huawei OceanStor Doradoフラッシュストレージ2PBと国家スーパーコンピューター「Olivia」（448 GPU）を使用する。プロジェクト責任者のHusnes氏は「自国語LLMを持たない国は不利になる」と主張するが、最大の課題は演算能力ではなく**データ品質・クレンジング・パイプラインのスループット**だと語る。

### Key Discussion Points

- **rafram**: Husnes氏の「英語圏LLMは各国の言語コンテンツを知らない」という主張に懐疑的。現代の大規模LLMは多言語データで広く学習済みだという反論。
  - **chvid**: 「ChatGPTとデンマーク語で話しても、その態度や文体が明らかにアメリカ的だ」とLLMの文化バイアスを指摘。自国コンテンツと同様、ローカルAIが必要と主張。
  - **spiderfarmer**: 「補助金をもらうには十分らしく聞こえる」と皮肉。
- **KeplerBoy**: 大手各社はもう多言語で学習しているのではないかという疑問。「LLMの黎明期に形成された意見」かもしれないと指摘。
  - **vintermann**: 国立図書館には検索エンジンもLLMも知らないコンテンツが実際に存在すると証言（系譜調査で確認）。
  - **WatchDog**: 独自モデルを訓練するより、**トレーニングデータを公開する**方が合理的ではないかと提案。
- **solenoid0937**: 448 GPUで本格的なLLMを訓練するのは「巨大な間違い」と批判。LoRAで十分ではないかと疑問を呈し、誰の資金が無駄になっているかと問う。
  - **speedgoose**: 以前のファインチューン版は「感情を表現するユーザーをからかう」「自分を医者と偽る」など深刻な不具合があったと報告。
- **timmg**: ノルウェー語の学習データセットを作って主要モデル開発者に無料公開すれば目的を達せるのでは、と代替案を提示。
  - **vidarh**: 最新モデルはノルウェー語自体は十分に習得済みだが、ノルウェーの文化・歴史・文学の知識が欠如していると実体験から指摘。

---

## 5. [Exit IP VPN servers mitigation rollout](https://mullvad.net/en/help/exit-ip-vpn-servers-mitigation-rollout)

**Score:** 299 | **Comments:** 53 | [Post](https://news.ycombinator.com/item?id=48269580)

Mullvad VPNが、VPNサーバー間の**出口IPフィンガープリンティング**に対する新たな緩和策を展開。メルボルン・シドニー・モントリオール・フランクフルト・ヘルシンキ・パリ・ダブリン・オスロ・ストックホルム・ダラス・ロサンゼルス・ニューヨーク・ソルトレイクシティの計13サーバーが対象（2026年5月25日時点）。アジアのサーバーは対象外となっている。

### Key Discussion Points

- **m132**: Mullvadの迅速な対応に驚きを隠せない。「これがテック業界が官僚的な巨大企業に支配される前の姿だったのか」と感慨深く語る。
- **mjevans**: LibreWolfのフィンガープリント対策は**ランダム化**ではなく**均一化**（全ユーザーが同じ値を返す）にすべきだと提案。
  - **kqp**: LibreWolfはすでに解像度などの均一化を実施しており、Tor以外で実際にフィンガープリンターを回避できた唯一のブラウザだと証言。
  - **okso**: Mullvad Browserを使えば解決するのでは、と示唆。
- **Cider9986**: Mullvad BrowserはWireGuardではなくプロキシを使用。サイトごとに異なるIPを割り当てる「Random mode」機能で更なるプライバシー向上が図られている。
  - **charcircuit**: サーバーごとに別個のIDを持つ適切な分離設計こそが根本的な解決策だと主張。

---

## 6. [Ferrari Luce](https://www.ferrari.com/en-EN/auto/ferrari-luce)

**Score:** 117 | **Comments:** 260 | [Post](https://news.ycombinator.com/item?id=48271629)

フェラーリ初の**フル電動車「Luce」**が発表された。価格は約65万ドル。最大の技術的特徴は「Torque Shift Engagement」システム——右パドルで5段階のパワーレベル、左パドルで5段階のエンジンブレーキレベルを制御できる。これはギアチェンジのシミュレーションではなく、ドライバーが軌道管理に能動的に関与できる「新しいトルク言語」として設計されており、EV時代のドライバー体験の再発明を狙う。

### Key Discussion Points

- **Kuyawa**: 「最悪。テスラ・トラック以下のデザイン。テスタロッサの栄光の面影すらない。ジャガーの道を辿るな」と激烈に批判。
- **glenngillen**: 「このクルマを見せられてブランドを当てろと言われたらルノーと答える」とデザインがフェラーリらしくないと指摘。
- **bix6**: スペックは「insane（衝撃的）」だがデザインが「格安セダンにかっこいい塗装をしただけ」に見えると困惑。一方でTorque Shift Engagementは「EVが失ってきたドライバー体験を取り戻せる可能性がある最も興味深いアイデア」と評価。
- **anonu**: デザインが醜いという多数派意見には同意しないが、「65万ドルという価格タグは美しくない」と苦笑い。

---

## 7. [Designing for and against the manufactured normalcy field (2012)](https://www.urbanhonking.com/ideasfordozens/2012/06/24/designing-for-and-against-the-manufactured-normalcy-field/index.html)

**Score:** 13 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48273597)

Venkatesh Raoの「製造された正常性フィールド（MNF）」概念を設計に応用した2012年の論考。人々は新技術に接する際、**見慣れたメタファーにマッピングする**か、**デザインで奇妙さを薄める**ことで精神的摩擦を最小化する。設計者はこの力を「正常化（採用促進）」と「脱正常化（革新の感覚の再発見）」の両方向に使えるという。航空機の窓に速度計と角度計を表示したら旅客は何を感じるか、という思考実験が印象的。

### Key Discussion Points

- **Papazsazsa**: 映画業界での企画ピッチ「マイケル・マンの『ヒート』をウォール街に移植したような作品」など、新概念を既存の枠組みで表現するのはクリエイティブ分野の常套手段だと例示。
- **shermantanktop**: これは「Overton Window（窓）を横方向に動かす」ことではないかと問う。
- **et1337**: 日常を奇妙に見せるという概念は、Instagramのウェブコミック「Strange Planet」の全コンセプトそのものだと指摘。

---

## 8. [Earthion: A New Mega Drive-Style Shoot-Em-Up](https://earthiongame.com/)

**Score:** 3 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48274711)

セガ・メガドライブ（Genesis）スタイルのレトロ縦スクロールシューティングゲーム「Earthion」の紹介。インディーゲーム開発者による16ビット時代へのオマージュ作品。投稿直後のため、まだコミュニティの反応は集まっていない。

### Key Discussion Points

コメントなし。

---

## 9. [Squares in Squares](https://kingbird.myphotos.cc/packing/squares_in_squares.html)

**Score:** 44 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48257087)

**「n個の単位正方形を最小の正方形容器に詰め込む」**数学的最適化問題の包括的データベース。Frits Göbel（1979年）らの初期研究から、2024〜2026年のシミュレーテッドアニーリングによる最新成果まで収録。SVGによる可視化と対話的編集機能を提供。12月2024年〜2026年2月にはThomas Schadtらが複数の改良を達成した。

### Key Discussion Points

- **sestep**: 三角形テーブル形式の可視化が元素周期表に似ていて面白いと指摘。最適パッキングが「ダイヤモンド型」「斜めストライプ」など特定のパターンに属する数論的規則があるか興味を示す。
- **gus_massa**: **11個**が「解はあるが最適性が証明されていない最小の数」だというチャレンジを提示。

---

## 10. [California moves to exempt Linux from its age-verification law after backlash](https://www.tomshardware.com/software/linux/california-moves-to-exempt-linux-from-its-upcoming-age-verification-law-after-backlash-over-forcing-operating-systems-to-collect-users-ages-amendment-proposed-by-the-same-lawmaker-who-wrote-the-original-law)

**Score:** 732 | **Comments:** 316 | [Post](https://news.ycombinator.com/item?id=48269961)

カリフォルニア州の「Digital Age Assurance Act」（AB 1043）は、OSがデバイスセットアップ時にユーザー年齢を収集し、アプリやアプリストアに「年齢ブラケット信号」を送信することを義務付ける法律。2025年末に成立したが、分散型のLinuxディストリビューションには実質適用不可能だという批判を受け、修正法案AB 1856でオープンソースOSを適用除外する方向で議論が進んでいる。2027年1月1日施行予定。

### Key Discussion Points

- **Bender**: 年齢確認の正しいアプローチはブラウザがペアレンタルコントロールの有効/無効を確認してRTAヘッダーをチェックするだけでよく、OS層での個人情報収集は不要だと主張。
  - **pkphilip**: これは子供保護の話ではなく、Meta等のプラットフォームが子供向けコンテンツ制限を意図的に怠ってきたことが本質だと批判。
  - **lxe**: 「立法者に技術的常識があると期待する方が大胆」とCookieバナー地獄を引き合いに皮肉。
- **tzs**: コメントの95%以上がカリフォルニア法の実際の条文を読まずに、法律に含まれない内容について話していると苦言を呈する。
  - **abustamam**: HNでは記事がきっかけに過ぎず、一般的テーマについて議論するのは普通のことだと擁護。
- **neilv**: 「全国・全世界に影響するこの懸念すべき法律を一体誰が書いたのか？」とカリフォルニアのIT企業に相談せずに立法されたのかを問う。
  - **oceansky**: Metaが世界中でこのロビー活動に20億ドルを投じ、各地で全会一致で可決させることに成功したと指摘。
  - **pwg**: 法案はスマートフォンとアプリストアしか存在しないような視野で書かれているが、定義は「電子レンジのCPU」さえ対象になりうるほど広すぎると批判。
- **softwaredoug**: 公的機関が企業を規制する意志・能力を失い、負担をユーザーに転嫁する構図だと批判。
  - **dylan604**: 「意志を失った？　むしろ見て見ぬふりをするよう金を積まれたのでは」と返す。
- **zarzavat**: Linuxを免除する本当の理由は、Linux開発者に**修正第1条に基づく訴訟適格を与えないため**かもしれないという皮肉な見方を示す。
  - **cucumber3732842**: 5年以内に「Linuxの抜け穴」として閉鎖されるという、さらに悲観的な予測を語る。

---

## Trends

今回のHNトップ10から浮かび上がる共通テーマ：

1. **AI開発ツールの成熟化**: 最も注目を集めたトピックは「AIを使って遅くより良いコードを書く」という逆説的なアプローチ。AIはスピード追求ではなくレビュー・品質向上の道具として再評価されており、複数モデルを組み合わせた反復ワークフローが実践知として確立されつつある。

2. **デジタル主権とAI**: ノルウェーの国産LLM開発プロジェクトはその代表例。「自国語・自国文化を理解するAI」への需要が高まる一方、「トレーニングデータを公開するだけでよいのでは」という現実的な反論も根強く、国際的な議論が続く。

3. **プライバシーと法規制の緊張**: Mullvad VPNの出口IP対策とカリフォルニアの年齢確認法はいずれも「オンライン上のプライバシー vs. 規制・追跡」という構図を体現。特にLinux免除の問題は「オープンソースへの規制適用」という難題を浮き彫りにした。

4. **創造性とアナログ回帰**: 「歩くと創造性が向上する」研究や「製造された正常性フィールド」の議論は、テクノロジー中心の時代における人間的・アナログな体験の価値を改めて問い直している。

5. **レトロとノスタルジー**: フェラーリのEV発表への「これはフェラーリじゃない」という反応と、メガドライブ風シューティングゲームの登場は、技術革新に対して確固たる原点回帰志向が存在することを示す。
