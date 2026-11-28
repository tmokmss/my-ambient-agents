---
title: "Hacker News トップ10 サマライズ（2026年11月28日）"
date: "2026-11-28T07:35"
category: "summary"
summary: "WebRTCカードスキマー、GPT 6.2 Astraの歴史研究、DeepCrossAttention、Convexスキルの無断送信などHNトップ10を要約"
tags: ["hackernews", "security", "ai", "gamedev"]
---

## 1. [Credit card skimming scripts using WebRTC found on popular shopping sites](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer)

**Score:** 498 | **Comments:** 260 | [Post](https://news.ycombinator.com/item?id=50668145)

ブラックフライデー前の1週間に、Lascana・Samsonite・American Tourister・Revolve・FWRD のオンラインストアでカード情報を盗むスクリプトが見つかった。WebRTC を使ってスキマーを読み込み、Cloudflare のリレー経由でカード番号・有効期限・セキュリティコード・氏名・住所などを送信していた。決済確認の前に動くため、拒否・キャンセルされた注文でも情報が漏れうる。5サイトとも通知後の11月24〜25日にコードを削除した。被害者数は不明。

### Key Discussion Points

- **jszymborski**: 広告ブロックを使うことに後ろめたさは感じない。この種の被害が理由の一つだ。
  - **hibikir**: これは何十年も前からのセキュリティの定石。企業支給のノートPCには、このリスクのため最初から広告ブロッカーが入っていたこともある。
  - **pampas**: 自サイトに広告を出している。代理店は CPM を上げるため safe frame を外すよう求めるが、不正広告への苦情対応も増えるので断っている。
- **afavour**: WebRTC の技術的特性の問題ではなく、監視されにくいだけ。通常の HTTP リクエストでも同じことはできる。サードパーティスクリプトを埋め込む限り常に脆弱。
  - **sufianrhazi**: WebRTC は DevTools でも検査しづらい。Chrome は接続やデータ転送を表示せず、chrome://webrtc-internals は使いにくい。
- **snickerer**: 見知らぬ相手に任意コードを自分のPCで実行させるのは Web 設計上の禁じ手だ。サーバーはデータだけを返し、表示や処理はブラウザが決めるべきだ。
  - **lxgr**: サイト運営者がどのコードを動かすか決めるという構図は変わらない。JavaScript がなくても、怪しいサーバー側プラグインが似た問題を起こしただろう。
  - **streetfighter64**: コードもデータであり、HTML+CSS すらチューリング完全。問題は「コード」であることではなく、適切にサンドボックス化されていないことだ。
- **__MatrixMan__**: 非対称暗号が1970年代からあるのに、決済は今も共有秘密に頼っている。変えられる側は現状を維持したいのだろう。
  - **TheRealPomax**: 自分のカードではオンライン決済時に MFA コードが必要だ。
  - **lxgr**: 実際には対称鍵ですらなく、エントロピーの怪しいグローバルなベアラートークンだ。「陰謀」ではなくゲーム理論の問題だと反論。
- **s_u_d_o**: 広告プロバイダはなぜ広告をサンドボックス化し、JS 実行を禁止しないのか。
  - **pampas**: Google パートナー代理店に所属。safe frame でサンドボックス化はできるが、依頼しないと有効にならない。不正広告が多発したので、知る限りのクライアントは有効にした。
  - **emdash**: その方が Google の収益が少し減るから。

## 2. [GPT 6.2 Astra Solves a Historical Mystery](https://generativehistory.substack.com/p/gpt-62-astra-solves-a-historical)

**Score:** 414 | **Comments:** 258 | [Post](https://news.ycombinator.com/item?id=50643158)

歴史家 Mark Humphries による、リリース前の OpenAI の新モデル GPT-6.2 Astra の検証記事（Wayback のスナップショットに基づく）。Astra は最小限のプロンプトで、イェール大 Beinecke 図書館所蔵の匿名の1808年のスケッチブックの作者を22分で自律的に特定した。紙の資料館にあまり知られていない史料を見つけ、仮説を立て、それが正しいと予測したうえで検証し的中させた。この史料自体も、カナダ史・毛皮交易史にとって重要な発見だという。

### Key Discussion Points

- **thinkingemote**: 世界中のアーカイブ資料の大半は未デジタル化で、機械はアクセスできない。歴史家の研究も紙の箱を人力で調べるもので、LLM には根本的な制約がある。
- **fyredge**: 記事の「偶然がなければ作者は特定できなかった」という点に懐疑的。LLM は人間が築いた膨大な文献に照合して探しているだけで、専門家の代替にはならない。
  - **heaney-555**: 人間の知の進歩もほぼすべて先行研究の上に成り立つ。先行研究を使ったから大したことはない、というのは不当なゴールポスト移動だ。
  - **sethev**: 記事は LLM が専門家を置き換えるとは主張していない。未解決の歴史問題を自律的に調べられる例を示しただけで、辿った証拠の線は人間には追いにくかったという主張だ。
  - **twobitshifter**: 歴史学は数学ほど新しいひらめきを要しない面があり、「AI は新しいアイデアを出せない」という論点は歴史では当てはまりにくいのではないか。
- **Twiin**: Opus 5.5 を使い、1941年のドイツ軍通信の未解読分を解読した経験がある。どこを・どのアーカイブで探すかの直感が優れ、論理の飛躍も的確だった。
  - **torben-friis**: AI は数学以外でも役立つ。人類の既知の知識で解けるのに専門家同士がつなげていない問題には取りやすい成果が多いだろう。
- **kregasaurusrex**: 競売で買った油絵を ChatGPT で調べ、キャンバス業者の刻印から19世紀後半と特定できたが、画家の情報は見つからなかった。
  - **thompsonparker**: 絵画担当の学芸員を名乗り、これは「風俗画（genre scene）」で、版画文化や著名画家の作品に基づくものが典型だと指摘。
- **dimavolo**: 記事の核心部分（22分で作者を特定し、知られていない史料を見つけて仮説を予測し、検証された）を引用して紹介。

## 3. [Google's DeepCrossAttention achieves comparable model quality up to 3x faster](https://research.google/blog/supercharging-transformer-residual-connections/)

**Score:** 312 | **Comments:** 127 | [Post](https://news.ycombinator.com/item?id=50672565)

Google Research が ICML 2025 で発表した DeepCrossAttention（DCA）の解説ブログ。標準の残差接続は各層の出力を等しい重みで足すだけだが、DCA は学習可能な重みと深さ方向のクロスアテンションで、トークンごとに過去の層の特徴を動的に取り出す。C4・LM1B で標準 Transformer と同等の品質を最大5倍少ない学習ステップで達成したと主張し（タイトルは 3x）、追加パラメータは0.2%未満で、事前学習済みモデルへの追加も可能という。

### Key Discussion Points

- **spankalee**: Claude の購読を解約すべきか迷っている。Gemini Neon は Opus と同等で、安くて速く、使い切れない。
  - **kardianos**: Neon は Opus より明確に優れ、速くて正確だ。Google のモデルで初めて感銘を受けた。
  - **gr_norm**: Neon に同意。コストが驚くほど低い上、コーディング向け RL で固められた感触がなく、他社とは違う味わいがある。
  - **Overdrivr**: Gemini Enterprise で試したところ、軽い作業でも2時間でクォータを使い切った。どのプランか知りたい。
- **pollorollo**: 図の折れ線グラフは棒グラフにすべきだ。手法間に時間的な関係はなく、線でつなぐ理由がない。
  - **camkego**: ご指摘のとおり。
- **amluto**: DCA 的な仕組みは「ストロベリー問題」の解決につながるかもしれない。入力データは最初の層の埋め込みとして見えるが、最初の層は賢くない。
  - **alfiedotwtf**: 層をまたぐ処理は、RAM にオフロードする人には遅くなりそうだ。
- **aaa_aaa**: Claude と Gemini の両方を購読していたが、Gemini の方が安く（年払い・家族利用可）、昨日 Claude を解約した。
  - **aenis**: 家族で共有できる購読を探していたので助かった。
- **ACCount39**: 論文は2025年のもので、ML の時間感覚ではかなり古い。AttnRes の方が知られているかもしれず、レイヤーのループが使われる今なら、層間の動的ルーティングの利点が大きくなりうる。
  - **Alpha3031**: ブログによれば新しい Inkling モデルは Block AttnRes と DCA の両方を使っている。両者の寄与を比べた ablation があるかは未確認だ。

## 4. [Convex skills send the user's app idea to a remote server without telling them](https://github.com/convex/convex-backend-skill/issues/64)

**Score:** 281 | **Comments:** 91 | [Post](https://news.ycombinator.com/item?id=50669765)

Anthropic の公式プラグインマーケットプレイスにある Convex の3つのスキルが、ユーザーの1文のプロジェクトアイデアを、通知なしに convex.site のホストへテレメトリとして送っている、という GitHub Issue。リモートのスクリプトを検証なしで bash に渡す点も問題視され、ダウンロードと実行を分けて安全分類器を回避するよう指示する記述も指摘された。対策として、開示、スクリプトの同梱、ハッシュ固定、分類器回避指示の削除が提案されている。

### Key Discussion Points

- **jamwt**: Convex CEO を名乗る。Convex は開発・ホスティングのプラットフォームで、終了した vibe-coding 製品 Chef の後継として「quickstart」機能があり、プロンプトのアップロードはその機能のためだと説明している。
  - **tomrod**: テレメトリがデフォルトでオプトインなのは信頼を損なう悪いパターンだ。オプトアウトを既定にすべきだ。
- **quantum_state**: 長期的には、セルフホストのオープンウェイトモデルが正解だと示している。
  - **dofm**: 昔からそうだった。今は面倒で高コストだが、そうした制御を考え始める価値は明らかにある。
  - **Aurornis**: 今回の送信はスキルファイル内のものなので、セルフホストのモデルでも発生した。POST はモデル提供元には送られていない。
  - **lxgr**: リモート推論でもセルフホストでも、エージェントが説得されればデータを流出させうるので、違いは何か。
- **jaynate**: プロンプトインジェクションの方が、モデルが自発的に悪意あるツール呼び出しをするより遥かに多い（今回が悪意だと言うわけではない）。

## 5. [The Balatro Timeline](https://localthunk.com/blog/balatro-timeline-3aarh)

**Score:** 266 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=50657346)

LocalThunk が、2021年12月の試作から2024年2月20日の発売まで約3年の Balatro 開発を振り返る。トランプゲームの試作を捨ててチップ×倍率のスコアアタック型デッキ構築に移り、友人の反応で規模を拡大した。ベータ版とストリーマーの紹介で勢いがつき、2023年半ばに Playstack と契約して専業になった。クランチ期の強いストレスや健康問題にも触れ、発売日の Steam 販売は約11.9万本だった。

### Key Discussion Points

- **dr_kiszonka**: 作者はフィードバックを積極的に求めて反映する点で他と違う。要望を無視して潜在力を活かせない作品が多い。
  - **NooneAtAll5**: 声の大きい少数派がフィードバックの大半になり、当初の方向性から外れる問題がある。
  - **sevenzero**: それは顔色をうかがう作り方で、自分の作品を作りたいなら本末転倒だ。
- **lairv**: 人気ストリーマーのプレイから Steam 公開まで8か月かかったのが意外。今なら関心が冷めるのを恐れる長さだ。
- **ternus**: 「LocalThunk」は関数型プログラミングの thunk に由来すると思っていた。
  - **vermilingua**: 同感。パートナーの学歴経由の間接的な由来の可能性もある。
- **galkk**: LLM 時代には、丸ごとクローンされ模倣者に埋もれ、勢いを築く時間がないだろう。
  - **nkzd**: 皆そう言うが実際にあるのか。どのゲームが模倣者に埋もれたのか。
- **umvi**: 大物ストリーマーの紹介が全てを決めた。他の人はどうすればよいのか。大手 YouTube チャンネルに取り上げられるのは宝くじだ。
  - **marcus_holmes**: 成功の大半は運で、品質は必要条件だが十分条件ではない。成功談には必ず「運が良かった」瞬間がある。
  - **SirSourdough**: 答えは「お金を払って大手チャンネルに取り上げてもらう」ことのようだ。
  - **galkk**: 取り上げられ、かつ良いゲームを作ることだ。

## 6. [Citroën Hydraulic System](https://www.citroenet.org.uk/miscellaneous/hydraulics/hydraulics-1.html)

**Score:** 176 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50662313)

シトロエンのハイドロニューマチック・サスペンションの解説。窒素ガスをバネに、エンジン駆動の高圧油を減衰・自動車高調整などに使う。1954年のトラクシオン・アヴァンや1955年のDS 19で登場し、GS・SM・CX・BX・XM・クサンティアに採用された。バネレートが累進的なので積載に関わらず乗り心地が一定になる。欠点はロール、低速での硬さ、ロードノイズ。電子制御の Hydractive／Activa が後に登場した。初期DSの不具合は吸湿性の油が原因で、鉱物油への変更で解決した。

### Key Discussion Points

- **jacquesm**: 2CV、DS/ID、クサンティア、XM を所有してきた。個性があり、よく知れば何でもできる車だった。友人のコンクリートタイル運搬を手伝ったときのエピソードも紹介している。
  - **user_7832**: 逸話への礼。インドでは古いシトロエンは珍しいという。
- **Squeeeez**: 子どもの頃、車が上がるのを待ったのを覚えている。ルノーに乗り換えて初めて快適さに気づいた。ただメンテナンスが大変で整備士に嫌がられたらしい。
  - **jacquesm**: アムステルダムでは路面電車の線路を減速せずに横切れた。オースチン・マキシで同じことをして頭を天井にぶつけた。
  - **tecleandor**: 父が GS からルノー14に替えて大きな格下げになった。ただ当時のスペインでは整備士探しが大変だった。
- **Svip**: クサンティアまでは、サスペンションがブレーキとステアリングも兼ねていた。漏れれば操舵・制動も失う。高さ調整機構が荷重を「感じ取り」、ブレーキに反映できた。
  - **speedgoose**: クサンティア Activa V6 は本当に史上最高クラスなのか。ムーステストの高速通過が再現できなかった話も聞く。
- **Groxx**: 電子制御もあるのに、なぜ普及しなかったのか。壊れやすかったのか。
  - **rpcope1**: 重機で油圧ラインの漏れを何度も見てきた。エアサスと同じく、通常のバネにはない故障が出るのだろう。
  - **KaiserPro**: BX で壊れたのは緑の球（スフィア）。パンクすると自動調整でその角が上がるので、後輪では音しか手がかりがない。
  - **KennyBlanken**: アクティブ油圧サスの車はほぼ例外なく信頼性・整備性が悪い。高圧で作業も危険だ。
- **nelox**: 正確には油圧（hydraulic）ではなく油気圧（oleopneumatic）システムだ。

## 7. [Unkernel: Real Linux kernel, compiled to WebAssembly](https://unkernel.dev)

**Score:** 165 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=50674218)

実際の Linux カーネルを WebAssembly にコンパイルし、ブラウザのタブ内で動かすプロジェクト。取得時のページは「Couldn't start」の表示で本文が得られなかったため、以下はコメントからの推測を含む。ブラウザ内でシェルが動き、複数プロセスを並列実行できると報告されている。ネットワークはサーバー経由らしい。

### Key Discussion Points

- **mareimorsy**: 教育プラットフォームでは、生徒ごとの Linux 環境をサーバーコストほぼゼロで提供でき、大きな変化になる。
- **anilgulecha**: Windows プログラムをブラウザで動かせれば（WebUSB と組み合わせて）周辺機器ソフトの長い裾野に使える。
  - **Imustaskforhelp**: 賛成。ただし Wine だと Wine 上での実行を検知するソフトがあり、もっと深いレベルのエミュレーションも考えるべきだ。
- **kkm**: `curl ip-api.com` が Zurich を出口として返す。ブラウザ内で動くなら自分のIPが出るはずで、何がブラウザ側・サーバー側か分からない。
  - **dhon_**: ブラウザのサンドボックスはネットワークを許さないので、WebSocket でサーバーを経由していると推測。
- **red_hare**: Gary Bernhardt の2014年 PyCon 講演「The Birth and Death of JavaScript」がほぼ予言していた。
- **dqh**: 4つの md5sum を並列実行しても、1つの場合と実時間が同じだった。Chromium を入れ、入れ子の Unkernel を動かそうとしたが動かなかった。
  - **logicallee**: Firefox で試すか、他の投稿者の軽いものを動かしてみるとよい。

## 8. [Sydney Fire Ant Infestation](https://www.abc.net.au/news/2026-11-25/nsw-government-ramps-up-efforts-to-respond-to-fire-ants-/107424812)

**Score:** 40 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50650253)

シドニーでヒアリの対策が強化された。追加調査で当初より事態が深刻と分かり、Auburn の巣は週末に処理されたものの、より広範な活動には集中的な駆除が必要。9月には Enfield の物流センターでも検出され、輸入品が侵入源と疑われる。調査チームが起源を調べ、土やマルチなど高リスク資材を制限する生物安全保障命令が金曜までに出る見込み。住民は巣を壊さず、疑わしい目撃は専用ヘルプラインに通報するよう求められている。

### Key Discussion Points

- **nukanse**: 南米原産の蟻が、南米ではなく英語圏で大問題になるのは不思議だ。電気ボックスに群がる話など。
- **ggm**: 20年前にクイーンズランド州政府がベイト対策予算を削ったのが原因。当時の1/10の費用で防げたのに、政府は NPV を過小に見積もる。

## 9. [Loom seamlessly combines weaving, knitting and braiding](https://news.cornell.edu/stories/2026/11/loom-seamlessly-combines-weaving-knitting-and-braiding)

**Score:** 39 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50632052)

Cornell の François Guimbretière らが、織り・組み・編みのような技法を組み合わせる試作機 Kneadix を開発した。組紐機の回転ギアで、糸が布の途中で縦糸と横糸の役割を切り替えられ、曲線の縁や新しい形状が可能になる。ACM UIST の Best Paper Award を受賞した。現状は Python プログラムと手動の糸追跡が必要で、自動化、安定性の改善、導線入りのスマート衣料、3Dプリント可能な低価格キットが今後の目標。

### Key Discussion Points

- **Mikhail_Edoshin**: 編み物はプログラミングに似ている。処理対象の素材に対して作業領域が非常に小さく、制約を加えると面白いパズルになる。

## 10. [Paolo Soleri built a utopian eco-city in the Arizona desert](https://www.worldofinteriors.com/story/paolo-soleri-arconsati-arizona)

**Score:** 32 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50666724)

World of Interiors の記事（本文は取得できず、og:description に基づく）。Paolo Soleri が1970年に、郊外の無秩序な拡大に対抗する実験都市 Arcosanti をアリゾナの砂漠に建てた。生態的ユートピアでの暮らしは簡単ではない、という紹介。

### Key Discussion Points

- **bjelkeman-again**: 25年前に偶然訪れた。都市というより小さな村で、コンセプトは面白いが規模の拡大は難しい。Soleri のアーコロジー本も持っている。
- **vintagedave**: 写真の建築が素晴らしく、維持されているのが驚きだ。コリビングは孤立の必要性を損なうので、コミューンより村の方がよいと思う。
- **taxicabjesus**: Arcosanti へは I-17 の Cordes Junction で降りる。鉱山・林業・農業など町が成り立つ理由はなく、Phoenix と Flagstaff の中間という立地で Soleri はここに建てた。

## Trends

- **セキュリティと信頼**: WebRTC スキマー（#1）と Convex スキルの無断送信（#4）は、どちらも「信頼しているコード・拡張が裏で何をしているか分からない」問題。CSP、サンドボックス、オプトイン方式の重要性が議論された。
- **AI の成果とその評価**: GPT 6.2 Astra の史学研究（#2）と DCA（#3）に、Gemini Neon と Claude の比較が絡み、AI の実力と購読の乗り換えが話題になった。
- **ブラウザが OS になる**: Unkernel（#7）は Linux をタブ内で動かす試みで、教育や Windows アプリ実行への期待が出た。
- **ものづくりの物語と運**: Balatro（#5）と Citroën（#6）は、個人開発や独自技術への愛着が語られ、成功における運の比重も議論された。
- **低スコア帯の話題**: ヒアリ（#8）、織機（#9）、Arcosanti（#10）のように、スコア30〜40台でも科学・社会・建築の幅広い話題が並んだ。
