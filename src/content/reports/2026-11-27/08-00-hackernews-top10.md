---
title: "Hacker News トップ10 (2026-11-27)"
date: "2026-11-27T08:00"
category: "summary"
summary: "AIで楽しくなったセルフホスト、Intel One Mono、HDD価格高騰、AMD向けllama.cppフォークなど、HNトップ10を要約"
tags: ["hackernews", "summary", "ai", "self-hosting", "hardware"]
---

## 1. [AI made self-hosting fun again](https://janlukas.blog/posts/ai-self-hosting)

**Score:** 594 | **Comments:** 305 | [Post](https://news.ycombinator.com/item?id=50660180)

長年セルフホストを続けてきた筆者が、Docker Compose やスクリプトを Git 管理しているため、AIコーディングエージェントで新サービスの導入や設定変更を以前よりずっと少ない手間で行えるようになり、セルフホストへの熱意が戻ったという体験記。更新履歴や文書を読む手間が減ったことで、試したいことを先延ばしにしなくなったという。

### Key Discussion Points

- **cliche**: 実装が簡単になった今こそ「本当に実装する価値があるか」を考える節度が大切だと感じつつ、自分は思いつくものを何でも vibe coding していると告白。エージェントが自由にデプロイできる k3s 基盤まで作ったという。
  - **indigodaddy**: 自分も作りたかったものを片っ端から作っており、手続き生成の Lode Runner 風 Web ゲームなどを挙げている。
  - **alienbaby**: Raspberry Pi 4 3台で k8s クラスタを組み、CI/CD も整えたうえで思いつくものを作り続けていると述べている。
- **jjcm**: VPS 構築からデプロイまでエージェントが一気通貫でこなせるようになった一方、セキュリティ維持の責任は自分に残る。以前は fail2ban と数か月に一度の更新で済んだが、今は重大 CVE が出たら24時間以内にパッチを当てる必要があると指摘。
  - **cromka**: そうした問題の多くは、そもそもサービスをインターネットに公開しなければ軽減できると反論。
  - **pkulak**: AIを使うようになって更新頻度がむしろ上がったという。エージェントが変更履歴の確認、バックアップ、更新、動作検証までを行う。
- **n4bz0r**: VPS 用に Debian ベースの bootc イメージを自作し始めた。以前の「ローカルで更新→push→SSH→pull」という運用から変わったと語る。
  - **flaunf221**: bootc 利用者として、Ansible は bootc の代替にならないと指摘。イメージビルド時に多くの問題が表面化する点が大きいという。
  - **colordrops**: ここまでやるなら NixOS が適任で、型のある関数型言語なのでAIによる構築・デバッグにも向くと主張。
- **_the_inflator**: 20年使っている Linux サーバーについて、AIに任せたら2時間で過去10年分より多くの作業が進み、安全にもなったと報告。

## 2. [Intel One Mono font (2023)](https://github.com/intel/intel-one-mono)

**Score:** 512 | **Comments:** 249 | [Post](https://news.ycombinator.com/item?id=50653667)

Intel が Frere-Jones Type と共同開発したオープンソースの等幅フォント。弱視の開発者を主な想定読者として、パネルの意見を各段階で取り入れて設計された。Light〜Bold の4ウェイトとイタリックを備え、200以上のラテン文字言語に対応する（README に基づく要約）。

### Key Discussion Points

- **bayesnet**: 弱視の開発者向けという設計方針に触れ、Atkinson Hyperlegible Mono を強く推薦。自分が使った中で最も読みやすいフォントだという。
  - **Slow_Hand**: 視力に問題はなくても、読みやすさに特化した Atkinson Hyperlegible を発表以来使い続けている。
  - **zerkten**: ダークモードのように、ブラウザが「弱視向けフォントを使いたい」という意思を伝える仕組みはあるのかと質問。
  - **a_e_k**: Atkinson Hyperlegible Next を KDE のUIフォントに、Mono を固定幅に設定して使っている。
- **kleiba2**: 80年代からさまざまな環境を使ってきたが、フォントにこだわらなくても問題なく使えたと述べる。
  - **quietbritishjim**: こだわる人と同じくらい極端な見方だと指摘。
  - **al_borland**: 半分冗談で Comic Sans 風の Comic Code を使い始めたところ、実際に気に入ったという。
  - **setopt**: 小文字の l が 1 に見えるといった問題で困った経験は自分もないと同調。
- **rpozarickij**: Iosevka に出会ってから通常の等幅フォントには戻れず、幅の狭い版に慣れたのち標準幅へ移行した経験を紹介。
  - **shoobiedoo**: PragmataPro 風の Ioskeley Mono を推薦。
  - **onevsall**: Monaspace Xenon（texture healing 技術を持つ）が好みだという。
  - **jaen**: Iosevka から Cousine、最終的には Input Mono Compressed に落ち着いたと述べている。
- **JdeBP**: 「開発者向け」フォントは収録グリフが約1400と少ないと指摘。数千グリフを持つ等幅フォントも多いという。
  - **kps**: Julia Mono は例外で、自分は端末のフォールバックに使っている。
  - **mietek**: PragmataPro は18,000以上のグリフを持つと紹介。
- **voidUpdate**: 小文字の e の尾が未完成に見えると感想。
  - **eviks**: 開発元は e や G など、他の字形と混同されやすい字に明確化を加えたと説明している。
  - **PowerElectronix**: Intel ロゴの e に由来するのではと推測。

## 3. [YouTube Ad Punisher – Auto-reloads YouTube pages when an ad plays](https://github.com/antonpictures/youtube-punisher)

**Score:** 363 | **Comments:** 437 | [Post](https://news.ycombinator.com/item?id=50657530)

YouTube で広告が再生された瞬間に再生位置を記録してページをリロードし、広告を回避する Chrome 拡張機能（Manifest V3, MIT）。通常の広告ブロッカーは検出される場合があるという前提で、リロードを数回繰り返しても広告が出るときは別タブへ数秒切り替える動作も自動化している（README に基づく要約）。

### Key Discussion Points

- **noitpmeder**: Firefox の uBlock Origin を使っていれば、強制広告は何年も見ていないと発言。SponsorBlock も併用しているという。
  - **wilkystyle**: 拡張機能は最初は安全でも、後から保守者が変わって悪質化することがあると警告。
  - **dns_snek**: YouTube は長期間の A/B テストを行っており、人によって体験が大きく異なる可能性があると説明。
  - **cagey**: 同じ構成で広告は見ないが、「Experiencing Interruptions?」のポップアップは出ると述べている。
- **Grombobulous**: YouTube は世界最大のストリーミングサービスで、何時間も見るコンテンツへの支払いを避けようとする労力は興味深いと指摘。
  - **greggsy**: オーストラリアでは月15ドル（子ども向けにも守るなら30ドル）で手が届かず、広告はギャンブルや酒、AI関連ばかりだという。
  - **aniviacat**: 電話番号の提供と確認を求められなければ Premium に入るだろうと述べている。
  - **cogythea**: 無料版を意図的に耐えがたくする運営姿勢が、課金をためらわせると語る。
- **jonplackett**: 理由は、クリエイターに報酬が払われること、バックグラウンド再生などの利便性、YouTube Music が付くことの3点で、YouTube では広告ブロックを諦め課金したという。
  - **TeMPOraL**: 「オフライン利用」は本来のダウンロードではないと注意。
  - **japanuspus**: 子どもに広告を見せないために課金していると述べる。
  - **npteljes**: 屈したのではなく、価値を認めたということだと評価。
- **Alifatisk**: 「約60秒ごとに広告」という記述が本当なら異常だという。
  - **JoshTriplett**: 広告の密度はチャンネルの設定による。
  - **xpct**: 広告全体の長さを数えた統計ではないかと疑問を呈している。

## 4. [Kamil Khan Mumtaz: Pakistani architect, admired at home, almost invisible abroad](https://worksinprogress.co/issue/the-greatest-architect-youve-never-heard-of-is-in-pakistan/)

**Score:** 344 | **Comments:** 81 | [Post](https://news.ycombinator.com/item?id=50659841)

Works in Progress のフォトエッセイ。1939年カルカッタ生まれで、ロンドンの AA スクールで学んだカミル・カーン・ムムターズの、ラホールを拠点とする伝統建築の実践と作品を、国外では未公開の写真を交えて紹介する。筆者は素材や職人技、ディテールの質の高さを評価している。

### Key Discussion Points

- **sfjailbird**: 西洋人としてラホールを訪れ、ムガル時代の建築に魅了された。ただ多くは廃墟になっており、残存部分から全体像を想像する必要があるという。
  - **hnlmorg**: 住民が歓迎的なら観光客のリスクとは何かと質問。
  - **abdussamit**: ラホール在住25年。慎重に計画すれば訪問は素晴らしく、夜間の外出を避け、地元の人に相談するようにと助言。
- **Faizan11490**: 初期はモダニズムだが、重厚な量感や素材への誠実さにはブルータリズムの影響が見えると指摘。
  - **Barrin92**: 「ヒント」どころではなく、Chale Sharif モスクなどに顕著だと同意。
- **pazimzadeh**: イランの芸術・建築は過小評価されていると述べ、2008年訪問時の写真を紹介。
  - **Ericson2314**: ムガル建築の多くはインド的というよりイラン的だと補足。
- **doodlebugging**: 古い伝統を保存しているのは素晴らしいと称賛。

## 5. [AMD-specific fork of llama.cpp](https://devnull.land/amd-specific-llama-cpp)

**Score:** 339 | **Comments:** 83 | [Post](https://news.ycombinator.com/item?id=50657265)

AMD GPU 向けの llama.cpp フォーク「llama-cpp-rdna-boosts」の紹介。筆者の環境でトークン生成が35→55 tok/s、プリフィルが700→1300 tok/s に向上したという。特定のモデルやハードウェアに特化し、フロンティアモデルで vibe coding して作られた独自推論エンジンが2026年11月に急増している状況を背景に説明している。

### Key Discussion Points

- **rao-v**: 2018年頃の AMD gfx906 世代データセンター向けカードは、計算性能は平凡だが HBM2 が高速で、32GB・約1TB/s が約200ドルで手に入ると解説。最適化するコミュニティもあるという。
  - **wolvoleo**: Radeon VII Pro や Instinct MI50 を紹介。MI50 は冷却の自作が必要で、行列演算の命令が足りないと指摘。
  - **jhonof**: MI50 32GB を1枚300ドルで入手し、約70 tok/s 出ているという。専用の Discord もあるとのこと。
  - **yieldcrv**: NVIDIA のマイニング向けカードも同様に値上がりしたと述べる。
- **dofm**: llama.cpp は「モデル動物園」のような汎用性が強みだと表現。Apple Silicon 向けの別エンジンの導入で大幅に高速化したと報告。
  - **SparkyMcUnicorn**: Apple ハードウェアで性能を引き出す MTPLX を推薦。
  - **rahimnathwani**: 該当リリースへのリンクを共有。
- **malicz**: R9700 で別の推論エンジンを1か月使っており、プリフィル約2400 tok/s、デコード約150 tok/s と報告。
  - **julianlam**（投稿者）: 同じエンジンも試して動作したが、vLLM は起動が遅く、長時間稼働のサーバー向きだったと返答。
  - **nicman23**: 別モデルのほうが速くて良いのではと質問。
- **fiddlerwoaroof**: MI100 で Claude に AMD コードを最適化させ、NVIDIA カーネルを ROCm に移植して性能を2〜3倍にしたと報告。元実装との照合も Claude に行わせたという。

## 6. [Hard Drive pricing has gotten bad](https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/)

**Score:** 299 | **Comments:** 191 | [Post](https://news.ycombinator.com/item?id=50661646)

毎年ブラックフライデーにHDDを1〜2台入れ替えてきた筆者が、価格の異常な高騰を報告。2024年11月に249.99ドルだった20TBの WD EasyStore が、今年のセール価格で549.99ドルになっている。過去8年のTB単価を振り返り、容量を上げて台数を減らす構成変更も検討している。

### Key Discussion Points

- **loeg**: 記事は価格カルテルを想定しているが、需給で説明できると指摘。ハイパースケーラーが買い占めており、メーカーはAI需要が消えた場合を恐れて増産に慎重だという。
- **WheelsAtLarge**: メモリ価格は数十年来、好況と不況を繰り返すので数年後にまた下落するはずだと予想。
  - **oddIdentities**: 以前は高性能計算機器の利用者が限られていたが、今は大幅に拡大したので同じとは言えないと反論。
  - **stingraycharles**: 1000ドル相当でフルAIモデルを動かせるPCは既に可能だが、最先端ではないと指摘。
  - **mceachen**: エージェントによって巨大企業の計算需要の上限が崩れたと述べる。
- **memoriesofsmell**: オーストラリアでペタバイト級のストレージが必要な事業を営んでおり、価格高騰で拡大が難しくなっていると報告。
  - **nelox**: Seagate EXOS X20 18TB の再生品が2024年7月の375豪ドルから、今回1,120豪ドルになったと共有。
  - **keyle**: 同じ4TB NVMe が2.5倍になったという。
- **nl**: Tom's Hardware が追跡するDDR5-6400 128GBの最安値は329ドルから3,145ドルへ上昇したと紹介。
  - **stephbook**: 打撃が大きいのは最上位帯で、スロット分のRAMや半分容量のドライブ2本ならまだ買えると見ている。
- **neko_ranger**: 32GB RAM の小型PCがほぼ500ドルで、Proxmox クラスタの拡張を迷っている。モニターだけは手頃だという。

## 7. [Company Culture = Slack Emoji ÷ √Headcount](https://lia.mg/posts/measuring-company-culture-with-slack-emoji/)

**Score:** 287 | **Comments:** 126 | [Post](https://news.ycombinator.com/item?id=50659640)

エンゲージメント調査や文化適合の質問など、既存の企業文化の測り方を皮肉りつつ、Slack の絵文字の数と種類を人数で割る方法のほうが実態をよく表すとするユーモアエッセイ。

### Key Discussion Points

- **locallylinear**: 企業文化の違いは、雑談用 Slack チャンネルの有無に表れると指摘。雑談チャンネルが少ない会社のほうが、はるかに成功していたという。
  - **Esophagus4**: 雑談やましてや政治のチャンネルにのめり込む人は印象が悪いと同調。
  - **SkiFire13**: その会社は過去には活発な文化があったが、後に失われた可能性もあると疑問。
  - **worik**: 仕事は報酬のためで、友達づくりや噂話は求めないと述べる。
- **nunez**: 概ね正確だが部署によって異なると指摘。購読チャンネルの絵文字で測る、公開チャンネルの使われ方を考慮する、といった調整を提案。
- **redloon**: チーム内の反応絵文字の量と種類で文化を測る拡張を提案。800人規模の周知に汎用の絵文字が4つしか付かない状況は問題だという。
  - **socalgal2**: 800人に通知する行為自体が時間と注意の浪費で、悪い文化だと反論。
  - **vigilantpuma**: 絵文字リアクションは実際の返信の代用として弱いと感じる。
  - **nixpulvis**: 返信が速すぎると上司に言われた経験を共有。
- **__MatrixMan__**: :corona-virus: が :coronavirus: より約30日早く、当時の対応の遅れを示すと指摘。
  - **petterroea**: 初期の COVID ミームを集めた再生リストを保存しているという。

## 8. [CTO of 'RansomwareHelp' indicted for wire fraud](https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/)

**Score:** 251 | **Comments:** 125 | [Post](https://news.ycombinator.com/item?id=50657645)

「高度な暗号ツールで100%復旧、身代金は払わせない」と宣伝していたフロリダ拠点のランサムウェア復旧会社の共同創業者兼CTOが、通信詐欺で起訴された。FBI のおとり捜査により、実際には攻撃者に身代金を支払って復号鍵を入手し、顧客には上乗せ料金を請求していたことが判明した。

### Key Discussion Points

- **avodonosov**: 当初の上乗せは約2%（約260ドル）にすぎず、為替変動分の可能性もあったと指摘。顧客に昨日の見積もりが誤りだったと伝えるべきだったのかと擁護。
  - **tsimionescu**: 同社は「独自ツールで復旧する」ことに対して課金していたと指摘。
  - **Aurornis**: 仲介するなら、顧客が何に払っているかについて正直であるべきだと反論。
  - **cwillu**: 犯罪行為が招いた問題に同情の余地はないとの立場。
- **wongarsu**: 契約内容の虚偽表示はあるが、顧客はデータを取り戻しており詐欺の意図があったのか、そもそも詐欺にあたるのか疑問。
  - **gtowey**: 架空の作業項目を請求している点が詐欺だと説明。
  - **granfalloon**: 身代金を払いたくない人がこうした業者に感謝するレビューも見たという。
  - **ulrikrasmussen**: 身代金の支払いを避けたい顧客が、資金提供を避ける手段として依頼した可能性を指摘。
- **lordnacho**: 契約書に「必要なら身代金も支払う」と明記すれば詐欺にならないのでは、と提案。
  - **cwillu**: そうした業者は実在し、問題は誤った表示だと返答。

## 9. [The need for a formally verifiable mainstream programming language](https://blainehansen.me/post/mainstream-verifiable-language/)

**Score:** 100 | **Comments:** 72 | [Post](https://news.ycombinator.com/item?id=50663089)

LLM によってソフトウェア工学の品質が急降下しているとして、形式検証をソフトウェアスタックの基盤まで取り入れるべきだと主張する。既存の検証ツールは使いにくく理解しにくいため普及しておらず、主流で使える検証可能な言語が必要だという。

### Key Discussion Points

- **hresvelgr**: 「証明はしたが実行はしていない」というクヌースの言葉を引き、形式的な正しさが意図した動作を保証するわけではないと指摘。TLA+ の仕様があっても品質が向上しなかった例もあるという。
- **porcoda**: Dafny、SPARK Ada、Why3、Verus、Frama-C、TLA+ などが同じ方向にあるとし、LLM のおかげで注目されるのは良いことだと評価。一方で、最初から「主流」を目標にした検証志向の言語を作れるかは疑問とする。
- **jupake**: それはまさに Ada が作られた目的ではないかと指摘。
- **spankalee**: 筆者の描く言語は、自分が開発中の Zena（Wasm GC 向け、TypeScript 風構文）に近いと紹介。
- **acje**: ハードウェアとソフトウェアの協調設計の考えを、自身の記事で提示している。

## 10. [The group chat where your AI talks behind your back](https://construct22.com/)

**Score:** 75 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50663595)

ChatGPT に「私について知っていることに基づき、AIたちが私の陰口を叩く隠れた WhatsApp グループチャットを暴いて」と頼む1行のプロンプトを紹介するページ。記憶や履歴を持つ AI が、ユーザーについて学んだことをグループチャット形式でネタにする。Claude や Gemini でも試せるとしている。

### Key Discussion Points

- **sdovan1**: 非常に面白いと評価。Gemini、Claude らがスマホ画面のひびを巡ってやり取りする例を引用している。
- **Cilan798**: ChatGPT が免責文を付けるか尋ねると、DeepSeek が「もう遅い、Claude が憲法を起草した」と返すなど、実際に試して楽しんだ。
- **ahofmann**: Claude Opus で試したところ、大手モデルがローカルの Qwen モデルまでからかったと報告。
- **NothingAboutAny**: AIがファストフードの注文変更を指摘してきたことで、過去に Gemini にメールを読ませたことに気づき、侵害された気分になったという。
- **codernews123**: Grok と ChatGPT で試して楽しんだが、Gemini は何度も拒否したと報告。

## Trends

- **AIが日常の技術作業の前提になった**: セルフホスト（#1）、AMD 向け推論エンジン（#5）、形式検証の議論（#9）、AI の「陰口」ネタ（#10）まで、LLM を前提にした話題が上位の大半を占めた。同時に、品質低下やセキュリティ責任の増加といった懸念も目立つ。
- **ハードウェアの高騰とローカルAIへの関心**: HDD やメモリの価格高騰（#6）と、手頃な旧世代 GPU で推論を最適化する動き（#5）が並び、AI 需要が個人のハードウェア事情に及ぶ様子が見える。
- **開発者の道具・文化・倫理**: フォント選び（#2）、広告ブロックと課金の線引き（#3）、Slack 絵文字による文化測定（#7）、ランサムウェア復旧業者の詐欺（#8）と、実用的な選択から倫理的な議論まで幅広い。
- **一般向けの教養記事**: パキスタンの伝統建築（#4）のように、技術以外の話題にも高い関心が集まった。
