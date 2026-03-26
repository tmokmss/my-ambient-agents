---
title: "Hacker News トップ10 ダイジェスト（2026年3月26日）"
date: "2026-03-26T13:51"
category: "summary"
summary: "EU Chat Control否決、Tesla Model 3ハック、ARC-AGI-3発表など、本日のHNトップ10ストーリーをまとめて紹介"
tags: ["hackernews", "privacy", "ai", "programming", "security"]
---

## 1. [Running Tesla Model 3's computer on my desk using parts from crashed cars](https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/)

**Score:** 706 | **Comments:** 232 | [Post](https://news.ycombinator.com/item?id=47523330)

研究者がeBayで廃車のTesla Model 3コンポーネント（MCU・オートパイロットコンピューター・タッチスクリーン）を入手し、デスクトップで動作させることに成功した。電源に接続してEthernetポート経由で車両ネットワークにアクセスし、SSHや診断APIが公開されていることを発見。Teslaのバグバウンティプログラムへの参加が目的だった。

### Key Discussion Points

- **varenc**: TeslaのRoot Access Programについて。Appleのセキュリティ研究デバイスプログラムに類似しており、責任ある開示を前提に研究者にアクセスを提供している。
  - **jordanb**: 車のオーナーは脆弱性調査なしに自動的にSSH証明書を受け取るべき、と主張。
  - **xyzzy123**: シェルアクセスがあれば脆弱性を公開するインセンティブが高まると指摘。
- **ferreyadinarta**: ブートプロセスのリバースエンジニアリングはほとんどの人が諦めるほど困難だったと称賛。デスクでのTesla UIの応答速度を質問。
- **bluGill**: かつてBMWのECU診断ツールで同様の作業をした経験を共有。公式ツールのみ正確なDTCを表示したことがあった。
  - **nandomrumber**: DTCとはDiagnostic Trouble Codesの略と確認。
  - **ErroneousBosh**: 入手不能になった90年代のLucas/SAGEMのECUファームウェアを解析中と言及。
- **voidUpdate**: コネクターを探すより直接はんだ付けする方が簡単だと提案。
  - **bdavbdav**: 外部ユニットは配線図の解釈確認にも役立つと補足。
- **girvo**: LVDSが「自動車用」ケーブルとして紹介されているのが面白い。ラップトップのディスプレイ接続でよく使われると指摘。
  - **slfnflctd**: Wikipediaを引用し、LVDSとFPD-Linkの用語混乱の背景を説明。
  - **jeffreygoesto**: 自動車でのLVDS+Fakraコネクターは標準的だが、プロトコルは独自仕様が多いと補足。

## 2. [Personal Encyclopedias](https://whoami.wiki/blog/personal-encyclopedias)

**Score:** 454 | **Comments:** 88 | [Post](https://news.ycombinator.com/item?id=47522173)

Jeremyが祖母の1,351枚の写真整理から着想を得て、自分の人生をMediaWikiで「個人百科事典」として記録するプロジェクトを構築した。GoogleマップやShazamの履歴など各種データエクスポートを活用し、Claude Codeで自動的にページ生成する仕組みをオープンソースとして公開している。

### Key Discussion Points

- **bawolff**: AIで個人データをクロスリファレンスできる点を「不安」と感じると表明。Jobsの「心の自転車」に例えるような技術の進歩に複雑な気持ちがあると述べた。
  - **nicbou**: Jobsの「心の自転車」アナロジーを引用し、人間の能力を増強するAIの可能性を称賛。テクノロジーが「悪魔の契約」ではなく純粋な助けになると感じると述べた。
  - **pona-a**: 個人の物語の語り手を米国の大企業LLMに委ねることへの倫理的・プライバシー的な懸念を表明。
- **h4ch1**: 配偶者と毎年手書きのノートを作成。学んだこと、意見の相違とその解決、試したレシピを記録し、世代を超えた家族の伝統にしたいと語った。
  - **vogelke**: これはコモンプレイスブックの好例。Jillian Hessが詳しく著述していると紹介。
  - **klondike_klive**: 美しくインスピレーティブだが、実行するエネルギーがないと率直に述べた。
- **72deluxe**: Scribusで物理的なフォトブックを作成。eBayでCanon Selphyプリンターを安価に購入してLinuxで活用していると共有。
  - **codazoda**: ジン作りへの情熱と、ユタの強い日差しでもレーザープリントが長持ちすることを報告。
  - **geek_at**: 息子の誕生時にメールアドレスを作成し、家族からメッセージを集めてデジタルレガシーを構築中と紹介。
- **jcmontx**: 家系図を10世代（250年）アルゼンチンまで遡った。ワッツアップの音声で高齢の親族から昔の記憶を収集していると述べた。
  - **maltris**: 10世代は印象的。どの国の出身かと質問。
- **Tepix**: プライバシーを重視するなら自前のGPUサーバーのLLMを使うべき。米国企業のLLMに個人写真を渡したくないと警告。
  - **bawolff**: 写真より銀行明細の方が心配だとコメント。

## 3. [ARC-AGI-3](https://arcprize.org/arc-agi/3)

**Score:** 438 | **Comments:** 276 | [Post](https://news.ycombinator.com/item?id=47521150)

ARC-AGI-3は「人間のような知能をAIエージェントで測定するための初のインタラクティブ推論ベンチマーク」として発表された。静的パズルではなく新しい環境での経験学習能力を測定し、視覚的な入力に対して言語指示なしで戦略を適応させることが求められる。満点はAIエージェントが全ゲーム環境で人間の効率と一致することを意味する。

### Key Discussion Points

- **MadxX79**: 大企業が10代の若者を雇って大量のゲームプレイデータを収集・アノテーションし、ファインチューニングすることを防ぐ手段はあるかと問題提起。
- **Tiberium**: スコアリング手法を詳しく批判。「最良の初回人間」を基準とする比較、二乗効率スコアリング、設計上100%スコアが取れない構造など複数の問題点を指摘。
  - **fc417fc802**: むしろこれらの設計はARC-AGIへの評価を上げる要素だと反論。すべて正しいアプローチだと述べた。
  - **NitpickLawyer**: ハーネスなし・シンプルなプロンプトの設計はKaggleコンペでSoTA LLMが活躍する余地があると指摘。
- **BeetleB**: 1990年代のDeep Blue記事の「飛行機は鳥のように羽ばたかなくても飛ぶ」というアナロジーを引用し、AIの知能評価基準を論じた。
  - **jonahx**: AIと人間の学習ギャップがなくなれば全知識労働が代替可能になり、経済的破壊はAGI達成前に起きうると警告。
  - **daemonologist**: Dijkstraの「コンピューターは考えられるか？潜水艦は泳げるか？」の格言を引用。
- **jwpapi**: ARC-AGIが人間とAIに同じ入力を与える点を称賛。「汎用性」が測定の核心であり有用性は関係ないと強調。
  - **adamgordonbell**: 「AGI」の「汎用」は不適切な言葉だと主張。人間もジャグ型の強み・弱みを持ち、LLMは言語ではすでに人間を超えていると述べた。
  - **LZ_Khan**: テキストベースの入力があればLLMは人間を上回れる可能性があると指摘。これは知能ではなく知覚の問題だとした。
- **typs**: 「何レベルかプレイして、自分がAGIではないと確信した」とユーモアを交えて述べた。
  - **Xenoamorphous**: "NGI - Natural General Intelligence"とウィットに富んだ造語で返答。

## 4. [Shell Tricks That Make Life Easier (and Save Your Sanity)](https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/)

**Score:** 245 | **Comments:** 110 | [Post](https://news.ycombinator.com/item?id=47525243)

全POSIXシェルで使えるターミナル操作の効率化ショートカット集。CTRL+W（単語削除）、CTRL+A/E（行頭/行末移動）、CTRL+R（コマンド履歴検索）、ブレース展開、プロセス置換などを紹介。これらを習得することで繰り返し入力を大幅に削減できるとしている。

### Key Discussion Points

- **alberto-m**: 上矢印キーを既入力内容に基づくヒストリー検索にリマップするzsh設定コードを共有。
  - **bwhaley**: CTRL+Rを使い始めると上矢印には戻れないと同意。
  - **moebrowne**: `.inputrc`設定でも同様のhistory-search-backward/forwardが設定可能だと補足。
- **ahmedfromtunis**: シェルのvimモード有効化を強く推薦。`<esc>3bcw`で数単語前のミスを修正、`<esc>v`で複雑な編集をneovimで開けると説明。
  - **piekvorst**: Emacsマニュアルの難解なウィンドウコマンドより、マウスサポート設定の方が実用的だと指摘。
  - **commandersaki**: 20年以上のvimユーザーだが、シェルのvimモードは好まない。代わりにctrl-x+eでneovimを開くのが良い中間策だと提案。
- **tkocmathla**: パイプ要素をコメントアウトするための`\#`スクリプト（中身はcatのみ）を紹介。デバッグに非常に便利。
  - **internet_points**: 「$PATHに追加する。catの見事な活用法！」と称賛。
  - **rgrau**: 同様の`noglob`スクリプトをzshで使用していると共有。
- **zahlman**: LLMスタイルの見出しと内容の混在を批判。ブレース展開はタブ補完と相性が悪い点も指摘。
  - **ta8903**: PowerShellにもreadlineモードがあり、WSLとの切り替えコストを低減できると紹介。

## 5. [European Parliament decided that Chat Control 1.0 must stop](https://bsky.app/profile/tuta.com/post/3mhxkfowv322c)

**Score:** 165 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=47529646)

欧州議会がChat Control 1.0の廃止を決定。2026年4月6日よりGmail、LinkedIn、Microsoftなどの大手テック企業はEU圏内でのプライベートメッセージのスキャンを停止しなければならない。デジタルプライバシー擁護派は重要な勝利として歓迎している。

### Key Discussion Points

- **freehorse**: 2つの投票（修正案と全体案）があり、全体案では明確な多数が反対票を投じたことを解説。リンク先のツイートが誤解を招くと批判。
- **gmuslera**: 「Chat Control 2.0を推進する時間だ。十分な資金と無限の再試行があれば、強力なグループが後押しする悪い規制はいずれ承認される」と皮肉交じりに警告。
- **elephanlemon**: Gmailなどがすでにメッセージをスキャンしていたことへの驚きを表明。
- **wewewedxfgdf**: 「法案の名前を『子供を救え』的な何かに変えれば即座に承認される」と法案の通りやすさを風刺。
- **nickslaughter02**: Chat Control 2.0の交渉継続と、メッセージングアプリやアプリストアへの強制的な年齢確認という次の脅威について詳しく警告。

## 6. [Swift 6.3](https://www.swift.org/blog/swift-6.3-released/)

**Score:** 168 | **Comments:** 84 | [Post](https://news.ycombinator.com/item?id=47527590)

Swift 6.3がリリース。C互換性向上として新たに`@c`属性でSwift関数をCコードに公開可能になった。Android向け公式Swift SDKの提供開始、組み込みSwiftの大幅改善、クロスプラットフォームの統合Swiftビルドエンジンのプレビュー公開などが含まれる。

### Key Discussion Points

- **dzonga**: 2015〜17年頃SwiftはPythonの代替になれるポテンシャルがあったが、Appleのマーケティング不足でAppleエコシステム専用言語に留まったと指摘。
  - **tarentel**: 当時はC++互換性がなく、Appleエコシステム寄りになるのは必然だったと補足。
  - **wiseowise**: その条件を満たす言語は多数あった。Kitura/Vaporは本格的に採用されなかったと反論。
- **drzaiusx11**: コンパイル速度の改善が言及されていないことを残念がる。Rustより遅いコンパイルがDXを損なうと指摘。
- **0x3f**: 「ソフトウェアスタックのあらゆる層で使える言語」という主張は実現しないと批判。Appleの機会損失だと嘆いた。
  - **frizlab**: 実際にSwiftで全層を書いているアプリ（ClearSurgery）の実例を挙げて反論。
- **sirwhinesalot**: `@c`属性によるCエクスポートより先にC++互換性が実装されたのが奇妙だと指摘。
  - **hrmtst93837**: C++互換はAppleの既存コードベース統合に不可欠だったため優先度が高かった。C公開は境界越えの複雑さが伴うと説明。
  - **saagarjha**: 以前はアンダースコア付き属性として既に存在していたと補足。

## 7. [End of "Chat Control": EU Parliament Stops Mass Surveillance in Voting Thriller](https://www.patrick-breyer.de/en/end-of-chat-control-eu-parliament-stops-mass-surveillance-in-voting-thriller-paving-the-way-for-genuine-child-protection/)

**Score:** 79 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=47529609)

欧州議会が1票差という僅差でChat Controlを否決。EU暫定規制が4月4日に失効し、民間メッセージの自動スキャンが停止される。海賊党のPatrick Breyerはこれを勝利として称賛しつつ、永続的なChat Control 2.0の交渉が水面下で続いていることに警鐘を鳴らしている。

### Key Discussion Points

- **nickslaughter02**: Chat Control 2.0交渉の継続と、年齢確認義務化という次の脅威について詳細に警告。匿名通信の保護が重要だと強調。
- **amarcheschi**: 「今のところ終わり、と言うべき」と楽観視を戒めた。
- **freehorse**: EPP（保守系）は反対票が多く、S&D（社会民主）は賛成票が多かったという意外な政治的分断を指摘。
- **ramon156**: 「また来年会いましょう！」と規制が再提出されることへの諦観を表明。
- **astrashe2**: ペイウォール回避用のアーカイブミラーリンクを提供。

## 8. [From zero to a RAG system: successes and failures](https://en.andros.dev/blog/aa31d744/from-zero-to-a-rag-system-successes-and-failures/)

**Score:** 109 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=47499356)

Ollama・LlamaIndex・ChromaDBを用いて451GBのドキュメントを対象にRAGシステムをゼロから構築した事例報告。技術選定、バッチインデックス処理のGPU活用、チャットUI設計などの6つの課題を乗り越え、ローカルLLMで高速かつソース引用付きの回答を実現した本番環境への展開に成功した。Hetznerでの費用は約184ユーロだった。

### Key Discussion Points

- **diarmuidc**: 数週間のインデックス処理でHetznerに184ユーロかかったが、3週間の人件費と比較すれば安価だとコメント。
- **JKCalhoun**: 大型コンテキストウィンドウでRAGは不要という論を懐疑的に見る。451GBを超えるデータには依然としてRAGが必要だと主張。
- **trgn**: ElasticSearchがこれらの新エコシステムで第二の脚光を浴びていないことが不思議と述べた。
- **abd7894**: パイプラインの主なボトルネックはどこか、ベクトル化の並列化は試したかと技術的な質問。
- **z02d**: ZoteroコレクションでのPDF/ePub対応RAGを探していたと共感を示した。ZotAIはLMStudio対応だが遅くバグが多かったと報告。

## 9. [Obsolete Sounds](https://citiesandmemory.com/obsolete-sounds/)

**Score:** 96 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=47526478)

「Obsolete Sounds」は世界中から消えゆく音・絶滅危惧の音を収集し、アーティストがリミックスおよび再解釈した世界最大の音響アーカイブプロジェクト。Cities & Memoryプラットフォームの一部として、失われつつある音響的遺産の保存を目指している。

### Key Discussion Points

- **adolph**: 古い図書館カードパンチマシンの音を探している。図書館の匂いも一緒に再現してほしいとユーモアを交えて述べた。
- **Cockbrand**: 投稿で言及された「iBook Duo」という名前は存在しないと指摘。正しくは「PowerBook Duo 230」。
- **shit_game**: 廃れた技術への情熱を語り、リサイクルショップからVHSテープが消えつつある現状を嘆いた。
- **binaryturtle**: Amigaのフロッピーディスクドライブのサウンドもぜひほしいとリクエスト。ウェブサイトのUIが少し分かりにくいと正直に述べた。
- **ljlolel**: モバイルでの音声共有を容易にする新しい音声フォーマットを自作したと宣伝。

## 10. [Landmark L.A. jury verdict finds Instagram, YouTube were designed to addict kids](https://www.latimes.com/california/story/2026-03-25/social-media-lawsuit-trial-meta-google-verdict)

**Score:** 80 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=47529534)

ロサンゼルスの陪審員がInstagramとYouTubeは未成年を中毒にするよう意図的に設計されていたと判断する画期的な評決を下した。MetaとGoogleを対象にした訴訟で、ソーシャルメディアの未成年者への有害設計が法的に認定されるという重要な前例となる。

### Key Discussion Points

- **bogdanoff_2**: プラットフォームがサードパーティの推薦アルゴリズムを許可する義務を課す法律の制定を提案。かつてのLast.FM連携のような仕組みをモデルとして提示。
- **onlyrealcuzzo**: 「子供にアピールし、注目を売り、A/Bテストをするすべてのアプリが該当するのでは？」と法的基準の曖昧さを指摘。
- **absoluteunit1**: 「YouTubeやInstagramが中毒性があるとされるなら、Robloxはどうなのか」とRobloxの問題に言及。
- **paulkon**: アルコールや煙草のような健康警告ラベルを義務付けるべきだと提案。
- **GardenLetter27**: 「強制的な年齢確認が来る」と短く予言。

---

## Trends

本日のHNトップ10から浮かび上がる主要なテーマ：

1. **デジタルプライバシーとEU規制の攻防**: Chat Control否決のニュースが2件ランクインし、プライバシー対監視の議論が高い関心を集めている。同時に、Chat Control 2.0や年齢確認義務化という「次の脅威」への懸念も根強い。

2. **AI・LLMの実用化と限界**: Personal Encyclopedias（MediaWiki+Claude Code）、RAGシステム構築、ARC-AGI-3の発表が揃い、AIの実用活用と「真の知性」の定義をめぐる議論が活発。AIへの期待と倫理的懸念が共存している。

3. **ハードウェアハッキングへの熱狂**: Tesla Model 3のデスクトップ動作記事が706点と圧倒的なスコアを獲得。車両セキュリティ研究、バグバウンティ、リバースエンジニアリングへの技術者の興味は依然として強い。

4. **開発者ツールとプログラミング言語**: Swift 6.3リリースとシェルのTips記事がいずれも上位に入り、開発効率改善への関心は根強い。SwiftのAppleエコシステムへの囲い込みへの不満は毎回浮上するテーマ。

5. **アナログ・ノスタルジーとデジタルの融合**: Personal EncyclopediasとObsolete Soundsはどちらも、失われゆく記憶や文化遺産を現代技術で保存しようとする取り組みであり、テクノロジーの人文的活用への関心を示している。

6. **ソーシャルメディアの社会的責任**: Instagramなどへの陪審員評決は、これまで企業側が回避してきた「中毒設計」への法的責任という新局面を示す。年齢確認義務化の流れとも連動している。
