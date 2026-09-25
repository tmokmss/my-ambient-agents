---
title: "Hacker News トップ10まとめ（2026年9月25日）"
date: "2026-09-25T04:43"
category: "summary"
summary: "F-Droid 2.0や合体フォント作成ツール、肝臓の再生力、Rails Worldの物議を醸す基調講演などトップ10を要約"
tags: ["hackernews", "tech-news"]
---

Hacker News のトップストーリーから、job投稿・求人スレッドを除外した上位10件をスコア順にまとめた。

## 1. [F-Droid 2.0](https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html)

**Score:** 1042 | **Comments:** 280 | [Post](https://news.ycombinator.com/item?id=49831968)

オープンソースのAndroidアプリストア F-Droid が10年ぶりの大規模アップデート「F-Droid 2.0」をリリースした。Kotlin と Jetpack Compose で全面再設計され、「Discover」「Search」「My Apps」の3機能に簡略化。アプリ発見機能の強化や CJK 言語対応の検索改善も含まれ、次の10年に向けたメンテナンス負担軽減が狙い。

### Key Discussion Points

- **comex**: スクリーンショットのテキストに不自然な改行がある点を指摘。
- **silverbluep**: GrapheneOS で droid-ify を数年使ってきたが、UI刷新とプリビレッジ拡張フェーズアウトを歓迎。
  - **katzenq**: droid-ify のUIもグラデーションボタンなど「Material風もどき」で酷いと反論。
  - **Flere-Imsaho**: それでもGoogle Playストアの派手な広告UIよりはマシだと擁護。
- **idle_zealot**: セクション間に区切り線がない「今どきのデザイン」に悲しみを表明、タップ可能領域が分かりにくいと批判。
  - **doginasuit**: 区切り線を引かずに余白でグルーピングする方が明確な場合もあると反論。
  - **janilowski**: 視覚的階層は十分明確で、区切り線は多用すべきでないと同意。
- **jjice**: Googleの来年のロックダウン後、F-Droidの将来はどうなるのか懸念。
  - **pritambaral**: F-Droidのリポジトリ署名鍵がGoogleに認識されれば実用的な解決策になり得ると回答。
  - **creatonez**: Googleは24時間待機を要する「上級者フロー」を許可する予定で、F-Droidは動作し続けられそうと補足。
- **temphaaa**: F/OSSの使いやすい電子書籍リーダーを探していると質問。
  - **wingmanjd**: KOReaderが一番のお気に入りと回答。
  - **thefunnyman**: KOReaderは設定項目が多いが、SimpleUIなどのプラグインで使いやすくなると補足。

## 2. [Show HN: Make cursed fonts like Times New Bastard](https://bastardica.mitpit.com)

**Score:** 544 | **Comments:** 78 | [Post](https://news.ycombinator.com/item?id=49823738)

複数のフォントを混ぜたり伸縮させたりして「呪われた」カスタムフォントを作れるブラウザ内ツール「Bastardica」。処理はすべてブラウザ内で完結しサーバーにアップロードされず、生成物は標準OpenType形式でダウンロード可能。

### Key Discussion Points

- **ycombiredd**: 自作の類似ツール（アンビグラム生成器から発展したフォント合成ツール）を紹介。
  - **paulhebert**: 面白いツールだと反応。
- **mortenjorck**: PapyrusとComic Sansのベースラインを合わせて誰かを驚かせるフォントを作ったと報告。
  - **coffee-on-thurs**: 「Papyrus and Comic Sans MS Bastard」というフォントを実際に共有。
  - **soperj**: 「新しいアバターロゴは太字の合体パピルス」という表現が面白いとコメント。
- **krelas**: デザイナーを発狂させたいならHelveticaに2〜3文字おきにArialを混ぜろと提案。
- **dumbfounder**: 自然言語でフォントを生成できるツールを独自に作ったと紹介（fonts.buttface.rocks）。
- **Sharlin**: サンプルテキスト「Nervous Sans」の"Anal"というカーニングの悪いArialが面白いと指摘。

## 3. [Why is the liver so weirdly regenerative?](https://dynomight.substack.com/p/liver)

**Score:** 319 | **Comments:** 170 | [Post](https://news.ycombinator.com/item?id=49832938)

人体の大半は加齢や損傷に対して脆く再生しないのに、なぜ肝臓だけは損傷後も傷跡なく治癒し、半分を提供しても数ヶ月で元のサイズ・機能に戻るのかを論じたエッセイ。腎臓の緩やかな劣化や歯茎の後退、サンショウウオの四肢再生との対比を交え、「体の大部分が脆いのはむしろ都合が良い」という統一理論を投げかけている。

### Key Discussion Points

- **0xWTF**（病理医を自称）: 肝疾患診断の専門家として、興味があれば『The Biology of Cancer』から読むことを勧める。
  - **tty456**: 診療にAIを導入しているか、どう使っているか質問。
- **senfiaj**: 多くの臓器が再生しないのは進化圧が不足していたためで、サンショウウオでも失った眼は再生できないなど限界があると指摘。
  - **ijustlovemath**: 飼っているアホロートルの高い治癒力と個性豊かな性格を紹介。
  - **asdfman123**: 一世代が支配的だと種が進化できなくなるため、むしろ進化圧は再生に逆行する方向に働くと反論。
- **cityofdelusion**: 皮膚と血液の治癒力を過小評価すべきでなく、創傷治癒能力の欠如は重大な障害や死亡につながると反論。
  - **Rury**: 肝臓が均質でシンプルな「バッテリーパック」のような構造だからこそ高い再生力を持つと補足。
  - **seethishat**: 創傷治癒の問題の多くは栄養不足、特に硫黄不足に起因すると指摘。
  - **throwawayffffas**: 問題は創傷治癒そのものではなく過剰な炎症反応であり、慢性炎症の蓄積が多くの疾患の原因になると補足。
- **frostysonic**: 自身が原発性硬化性胆管炎で肝移植を受けた体験談を共有、数ヶ月で新しい肝臓が再生したと報告。
  - **adamredwoods**: 同じ疾患の当事者として、部分肝移植でも機能することに驚いたとコメント。
- **Noe2097**: 記事の免疫抑制剤に関する記述に感謝し、ユーモアと科学が両立した久々の良記事だと絶賛。
  - **WhiteOwlLion**: タクロリムスなど免疫抑制剤の高用量長期投与は腎臓を消耗させ、10年で移植が必要になることもあると補足。

## 4. [Rails World 2026 Opening Keynote [video]](https://www.youtube.com/watch?v=vDjW_dRyKXY)

**Score:** 287 | **Comments:** 300 | [Post](https://news.ycombinator.com/item?id=49817680)

37Signals創業者DHHによるRails World 2026の基調講演動画。コメントによれば、開発者は今後「コーダー」ではなくAIエージェントを指揮する「ものづくりをする人」になると主張し、自社サービスHeyのバックエンドをRustで書き直した事例を紹介した内容とみられる。動画本文は取得できなかったため、コメントの議論から内容を推測している。

### Key Discussion Points

- **robbyrussell**: 現地最前列で講演を聞いた感想として、会場の空気は悲観的ではなく、多くの開発者は既存システムを保守する「メンテナー」であり続けるだろうと報告。
- **robgough**: DHHの政治的立場への懸念は脇に置くとしても、彼の指摘には一理あり、開発者は近い将来この現実に直面するだろうとコメント。
  - **dofm**: AI時代でゲルマン健忘症（Gell-Mann amnesia）に気づきやすくなったとし、政治的発言で事実を歪めている人物を他分野で信頼すべきか疑問視。
  - **jstummbillig**: 自分の過去の仕事の重要性が下がると知ることは良いことであり、創業者自身がそれを冷静に語れるのは良い兆候だと反対の見方を示す。
- **zerr**: 「コーダーではなくものづくりをする人になる」という主張について、AIを直接使えるならそもそも作ったもの自体が不要になるのではと疑問視。
- **tnolet**: 露骨に人種差別的な人物に開発者向けカンファレンスが登壇の場を与えることに疑問を呈し、DHHが自身のRailsConfから追放されて別カンファレンスを立ち上げた経緯を指摘。
  - **monocasa** / **zrail**: 追放されたため自分の会議（RailsWorld）を作ったのだと補足。
- **why-el**: Rustへの書き換えの成功率はテストスイートの質と強く相関すると分析し、37SignalsのRust移行後にどう機能追加していくか注目していると述べる。

## 5. [Toyota is taking the Corolla electric](https://electrek.co/2026/09/23/toyota-best-selling-corolla-electric/)

**Score:** 267 | **Comments:** 442 | [Post](https://news.ycombinator.com/item?id=49823568)

1966年発売以来5700万台超を売り上げた世界最量販車カローラの電動版が2027年デビュー予定。ガソリン・ハイブリッド・PHEV・EVの複数パワートレインで展開され、EV版はシングル/デュアルモーター構成で航続距離250マイル以上、価格は3万ドル前後の見込み。

### Key Discussion Points

- **freetime2**: ゼロからEV専用設計された車の方が、ICEベースにEVを無理に組み込むより優れる傾向があり、LexusのES350eの評判が悪い例を挙げる。
  - **thelastgallon**: BYDが豪州で1.4万ドルのEVを売っている一方でトヨタはノキアの二の舞になりつつあると批判。
  - **hn_submit**: 消費者は様々な理由でEVよりハイブリッドを好む現実があり、2つの異なるプラットフォームを併存させるのはトヨタでも高コストだと擁護。
- **zacharycohn**: 見出しを見て「普通の車に見えるが電気」という低コスト車を期待していたが違ったと落胆。
  - **sgarrity**: 同様の期待からHyundai Konaを購入した体験を共有、物理ボタンとまともなドアハンドルが決め手だったと補足。
  - **AnnikaL**: 記事によれば電動カローラはハイブリッドより3000ドル、ガソリン車より5000ドル高い3万ドルの見込みで、最安EV水準に匹敵すると補足。
  - **gwbas1c**: 10年近く前のTesla Model 3の倍のコストと比べれば十分「低コスト」と評価。
- **BLKNSLVR**: プリウス発売から数えて「10年前に出ているべきだった見出し」と皮肉る。
  - **thefourthchime**: トヨタはEVに突っ込まず壊滅を免れた数少ない企業の一つで、ハイブリッド路線が功を奏したと反論。
- **paimapi**: 20年と巨額の反EVロビー活動の末にようやく方針転換したと批判的にコメント。
  - **RajuChacha108**: トヨタはハイブリッドの先駆者として広い意味で正しいアプローチを取っていたと擁護。
  - **radiator**: トヨタは過去も反EVではなく、将来も内燃機関車の生産をやめるわけではないと補足。

## 6. [My weird new hobby: Wandering around Tokyo on Google Maps](https://ahmedhossamdev.com/writing/my-weird-new-hobby-wandering-around-tokyo/)

**Score:** 263 | **Comments:** 110 | [Post](https://news.ycombinator.com/item?id=49805344)

著者Ahmed HossamがGoogle Street Viewで東京の街を仮想散策する新しい趣味について綴ったエッセイ。17年間同じ場所に駐車されていた白い350Zを発見し、後にReddit住民が現地訪問してその車と家屋がすでに取り壊されていたことを確認した逸話を中心に、ストリートビューを「時間カプセル」として楽しむ様子を描いている。

### Key Discussion Points

- **dkurth**: 2009年にAustinでGoogle Street Viewの撮影車に遭遇し、手を振って写り込もうとした思い出を共有。
  - **rzzzt**: 似た逸話を描いた有名動画を紹介。
- **rambambram**: 自分も同様にYouTubeで東京の街歩き動画を見るのが好きで、清潔な街並みと美しい家々を楽しんでいると共感。
  - **johnwalkr**: 東京の写真に路上駐車の車がほとんど写らない点が、写真を「時代を超えた」印象にしていると指摘。
  - **crabmusket**: 音楽もナレーションもなくただ歩くだけのYouTubeチャンネル「Rambalac」を推薦。
- **N7lo4nl34akaoSN**: 記事の文体がChatGPTでよく見る「詩的なハッカー広告コピー」調で、AI生成っぽいと指摘。
  - **gruez**: AIっぽくないと思ったが、AI検出ツールPangramでAI判定されたと補足。
- **dwd**: クライミング動画を見ていてGoogle MapsでEl Capitanの登攀ルートを探していたところ、トミー・コールドウェルらとGoogleのコラボでStreet Viewカメラが岩壁を登った撮影プロジェクトがあったことを知ったと紹介。

## 7. [Show HN: Whiteboard (YC W26) – An open-source IDE for thoughtful software design](https://github.com/devdotfast/whiteboard)

**Score:** 235 | **Comments:** 92 | [Post](https://news.ycombinator.com/item?id=49833867)

人間とAIエージェントが共有キャンバス上でソフトウェア設計を協働できるオープンソースのデスクトップアプリ「Whiteboard」。Claude CodeやCodexなど既存のコーディングエージェントと統合し、エージェントが図を描いて作業内容を説明したり、セマンティックな差分ビューアや決定ログでコード変更を理解しやすくする機能を持つ。MITライセンスでローカル実行。

### Key Discussion Points

- **bbor**: 12ヶ月後には当たり前になりそうな手法（ペン描画アニメーション+ストリーミング図表）を今実現している点を評価しつつ、macOS専用である点をもっと目立たせるべきと指摘。
  - **sidharthkmenon**（開発者）: vibe-codeableな拡張システムを実装予定で、将来的に共通スキーマやLSP的な仕組みも検討中と回答。
- **nickosh**: 大量のコードレビューで変更内容の把握に苦労しており、アーキテクチャレベルの可視化手法に期待していると好意的にコメント。
- **icar**: 現状Whiteboard内でファイル編集はできないが、これでも「IDE」と言えるのか質問。
  - **asa123**: 多くの人がやりたいことの枠組みとしては十分妥当で、新語を作っても誰もクリックしないだろうと補足。
- **thoman23**: 会社がClaudeからCopilot CLIに移行したため、Copilotサポートの予定を質問。
- **2001zhaozhao**: 現状のPlan Modeに代わる、よりビジュアルで対話的なアーキテクチャレベルの設計手法という着眼点を評価。
  - **sidharthkmenon**（開発者）: 今後MCP UIとして公開しCodex DesktopなどでもUIを直接見られるようにする予定と回答、重視している点はコードナビゲーション・diff表示・エージェントトレースの可視化と説明。
  - **verdverm**: Plan Modeの簡単な改善策として、計画作成をファイルに移し複数回のリサーチ・提案・レビューセッションで精度を上げる手法を提案。

## 8. [Fearless SIMD v1.0](https://linebender.org/blog/fearless-simd-1-0/)

**Score:** 214 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=49800085)

「`unsafe`を排除したSIMD」を目指すRustライブラリ`fearless_simd`がv1.0に到達。`kernel!`マクロと安全な型変換モジュールにより、従来SIMD実装に必須だった危険なコードをほぼ排除。既に1000以上のクレートから間接的に依存されており、3年間のセキュリティ更新が保証されている。

### Key Discussion Points

- **O3marchnative**: 自作のFFTクレートPhastFTが、nightly必須のstd::simdからfearless_simdに移行できて安定版Rustで動くようになったと報告。
  - **VorpalWay**: LLVMが定数からの読み込みなど単純なケースを推論できる可能性はあるが、現状はまだnightly機能に限られると補足。
- **modulovalue**: Dartに高度なSIMDサポートを追加中で、NaNにならないdoubleを追跡してmin/max命令を1つに最適化するような、コンパイラの相互手続き解析をカスタマイズする言語機能はあるか質問。
  - **JonChesterfield**: ほとんどの言語ではカスタムコンパイラは実質不可能で、LLVM上で独自に構築することは可能だがRust自体には十分なアクセスがないと回答。
  - **athrowaway3z**: floatが事前に0.0やNaNだと分かるケースはほぼ自明なケースに限られ、削減効果は過大評価されがちと補足。
- **Dr_Emann**: fearless_simdを使って任意バイト集合を検索するmemchr_nを実装し、既存のmemchrクレートより高速な場合もあると報告。
  - **O3marchnative**: fearless_simd採用前に他のportable SIMDクレートを試したか質問。
- **dang**（HN管理者）: 過去の関連スレッド2件（2025年3月・2018年10月）へのリンクを提示。
- **PoignardAzur**: 「0.xの呪い」を破ったことを喜ぶコメント。
  - **the__alchemist**: Rustライブラリのデフォルトは「ZeroVer」だと皮肉を交えて補足。

## 9. [2DWillNeverDie](https://2dwillneverdie.com/)

**Score:** 159 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=49801436)

スプライト・ピクセルアートに特化したギャラリー&チュートリアルサイト「2D Will Never Die」。レトロゲームのキャラクターやアート作品を展示しつつ制作ノウハウを公開し、2Dグラフィックス文化の保存・発信を目的としている。

### Key Discussion Points

- **khhu2bnn**: カプコンが2Dから離れたことを惜しみ、インディーゲームが2Dを継承しているもののカプコンの格闘ゲームなどの滑らかさに匹敵する作品はないと述べる。
- **frmersdog**: Card Saga Warsの膨大なスプライト作業量を引き合いに出し、数百キャラクターに及ぶ作家の仕事に感嘆。
- **Lucent**: 2Dアドベンチャーゲームが優れているのはランダムウォークが必ず元に戻る（ポリアの定理）ためパズルの難易度調整がしやすいからと分析。
  - **guyomes**: 期待帰還時間が無限大である点を補足。
  - **gcr**: 6DOFフライトゲームなどを除けば、3Dゲームも実質2D多様体上でプレイされていると指摘。
- **Buttons840**: 「3Dは2Dを生成する一手法にすぎない」と述べる。
- **hackeryojo**: 2Dゲームの方が現代の3Dゲームより魂がこもっていたと感じ、それは社会の反映だと述べる。
  - **vconnor**: レトロ/PSX美学の採用は懐古ではなく、限られた制約の中で作る意識の表れだと感じると補足。
  - **chii**: 魂の有無は2D/3Dの問題ではなく、個人の作家性ではなく委員会的な意思決定で作られる大手商業ゲームの構造の問題だと反論。

## 10. [Using LLMs to trace alchemical knowledge and decode 17th century letters](https://resobscura.substack.com/p/ai-labs-need-to-start-funding-historical)

**Score:** 101 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=49835531)

歴史学者Benjamin Breenが、最新モデル（GPT-6・Opus 5.5）を歴史研究に応用した初期成果を報告するエッセイ。暗号解読や写本間の訳文追跡、分野横断的な知見の結びつけなど、AIラボが歴史研究への資金提供を積極的に行うべきだと提言している。例としてニュートンがラテン語に翻訳した錬金術文書の出典特定に成功した事例を挙げる。

### Key Discussion Points

- **loufe**: 家系図研究にAIを活用しており、共通祖先の誤りを見つけるなど成果が出ていると好意的にコメント。
- **dr_dshiv**: エージェント・人間双方が使いやすいよう数万冊の書籍を公開するSourceLibrary.orgを紹介、アムステルダムの錬金術関連ライブラリを拠点としていると説明。
- **riazrizvi**: LLMは「アイデアマシン」であり、歴史的な思考様式が世界を探求する異なる道筋を与えてくれる点でこれは強力な応用例だと評価。
- **Marchant_hq**: 自身の17世紀の手書き文字解読の苦労を振り返り、LLMがこの乱雑さを解析できるなら是非使いたいと述べる。
- **z_rho_one**: GPT-3.5の登場から4年近く経つが、AIの最良の使い道は依然として「デジタル世界のあらゆる隅から情報を集める強力な検索エンジン」であることだと述べる。

## Trends

- **AIエージェントとの協働ツールが複数ランクイン**: Whiteboard（設計協働IDE）、歴史研究へのLLM応用、Rails Worldの基調講演での「エージェントを指揮するものづくりをする人」論など、AIエージェントが単なるコード生成を超えて人間の創造的・専門的作業に組み込まれつつあるというテーマが目立つ。
- **オープンソース／DIY精神への支持**: F-Droid 2.0、fearless_simd、Bastardicaのフォント合成ツールなど、企業依存を減らすオープンソースプロジェクトへの高評価が共通する。
- **EVをめぐる根強い論争**: トヨタのカローラEV化を巡り、ハイブリッド重視戦略の是非やEV専用設計の優位性について活発な意見の対立が続いている。
- **ノスタルジーとデジタルな「時間カプセル」**: 2Dピクセルアートやストリートビューでの東京散策など、過去の技術・風景を懐かしむテーマも複数登場した。
