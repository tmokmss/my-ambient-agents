---
title: "Hacker News Top 10 ダイジェスト 2026-09-29"
date: "2026-09-29T18:00"
category: "summary"
summary: "AIチャットのプライバシー、GPT 6.1 Sol と Dots、デリーの電力損失削減、DraftKings の行動ターゲティングなど"
tags: ["hackernews", "summary", "AI", "privacy"]
---

## 1. [A Privacy Analysis of Web and Mobile Conversational AI Agents [pdf]](https://jorgegarciaherrero.com/wp-content/interactivos/20260916-Prompt-like-a-butterfly-sting-like-a-tracker-(clean).pdf)

**Score:** 378 | **Comments:** 121 | [Post](https://news.ycombinator.com/item?id=49890226)

Web/モバイル版の対話型AIエージェントのプライバシーを分析した論文（PDF のため本文は取得できず、コメントから推測）。AIチャットが広告トラッカー等にプロンプト由来のデータを漏らしている点が論点になっている。

### Key Discussion Points

- **pbasista**: ChatGPT はブラウザで入力途中のプロンプトを `conversation/prepare` に定期送信しており、キャッシュのプリウォーム以外に、入力の癖や推敲過程の追跡・広告への転用も懸念される。
  - **ShinyLeftPad**: プライバシーポリシー上は「送信内容は非公開」でも、未送信プロンプトは技術的に対象外という可能性がある。
  - **kridsdale1**: Meta 出身の幹部が多数入社しており、時間とともに同様の挙動になるだろう。
- **kdaniel_03**: 未公開の研究草稿が Codex セッションにあった件と同根で、学習データか広告トラッカーかの違いにすぎない。オープンモデルを自前で動かすべき。
- **postalcoder**: 多くのAIチャットは URL に UUID があれば非公開とみなしており、Perplexity は過去の検索 URL で会話全体が見える。
  - **albert_e**: 難読化によるセキュリティという古いアンチパターンで、共有リンクの寿命管理はユーザー任せになっている。
  - **msdz**: 自分で共有しなければ URL は推測されないのでは、という疑問。
  - **someonebaggy**: 知られれば全データが見える点でパスワードと同じ。
- **delis-thumbs-7e**: シンプソンズの、ミルハウスが秘密をウィリーに打ち明ける話に例え、我々は皆ミルハウスになったと評した。
  - **Avicebron**: 格差で社会の信頼が損なわれ、あらゆるものが敵対的になった。
  - **consensus1**: 広告会社にとってユーザーは特定コホートの一員にすぎない。
- **j4k0bfr**: データを囲い込みたいAI企業が競合の広告会社に漏らすのは意外で、広告機構が急造か収益圧力の結果ではないか。
  - **amarcheschi**: AI企業向け業務では、vibe coding で作られた壊れたプラットフォームが多い。
  - **mrweasel**: 意図的な提供ではなく事故だろうが、売っていても驚かない。

## 2. [How Delhi cut electricity loss from 50 to 5 percent](https://spectrum.ieee.org/delhi-electricity-loss)

**Score:** 319 | **Comments:** 188 | [Post](https://news.ycombinator.com/item?id=49892245)

デリーの配電損失は 2002 年から 2026 年にかけて 50% 超から 5〜6% に下がった。配電会社の民営化、デジタルメーターや SCADA など設備の更新、盗電対策と住民との対話を組み合わせた成果だ。信頼できる電力は経済成長と生活の質の向上にもつながった。

### Key Discussion Points

- **groos**: 盗電対策で送電線が絶縁された結果、サルが「道路」として使い、集合住宅の上階にも入り込むようになった。
  - **notRobot**: 生息地を守らず感電しうる電線を張ったこと自体が残酷だ。
- **motionlessveloc**: 本当に革命的なのは負荷制限（計画外停電）の解消だ。以前は停電復旧時のサージに備えて家電を抜く必要があった。
  - **devnull3**: 負荷制限は計画停電で、地域別の時間表が新聞に載っていた。
  - **ghm2180**: どの家にも発電機があり、手動でクランクを回していた。
  - **Gangway0829**: 計画断水もあり、バケツに水を溜めていた。
- **thelastgallon**: インドは日照に恵まれているので、プラグイン太陽光、垂直ソーラー、集合住宅の蓄電池を義務づけるべき。
  - **ghm2180**: 屋根置き太陽光は二級都市でも電気代節約策として急拡大している。
  - **idiotsecant**: 住宅用は電力負荷全体の 1/3 にすぎない。
- **zeristor**: エストニアに大きな配電損失があるのは意外だ。
  - **skeletal88**: エストニア在住だが、そんな問題はなく報道は誤りだと思う。
  - **rebuilder**: 数字は世界銀行の定義で、輸入電力が発電側に入らないためだろう。
- **whatever1**: ギリシャでは電気代に損失項目があり、盗電しても支払うのは払っている人になる。
  - **rob74**: 払う人が払うのは常に真だが、これほど明示するのは珍しい。
  - **blitzar**: 太陽光が電力会社の支配から解放してくれる。

## 3. [GPT 6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)

**Score:** 291 | **Comments:** 206 | [Post](https://news.ycombinator.com/item?id=49896586)

OpenAI の新モデル GPT 6.1 Sol の発表（openai.com は取得不可のためコメントから推測）。キャッシュ入力が 100 万トークンあたり $0.10 と、GPT-6 Sol の半額になった点が話題になっている。

### Key Discussion Points

- **Aboutplants**: 新たな $500 の Pro 500 プランが登場した。一方で既存の $200 Pro は Codex での利用枠が 20x から 10x に、GPT-6 Pro のメッセージ上限が週 200 から 100 に減る。
  - **TomGarden**: 赤字企業らしい振る舞いになってきた。VC 補助の定額サブスクは終わりに近い。
  - **torginus**: IPO 前に $200 から $500 への移行を促して収益を 2.5 倍にする狙いだろう。
  - **moregrist**: 中間プランを使いにくくして上位に誘導する、典型的な価格戦略だ。
- **minimaxir**: キャッシュ入力が GPT-6 Sol の半額なのが実質的な目玉で、Codex での持ちが良くなる。
  - **TuxSH**: あらゆる API 価格指標で Opus 5.5 のちょうど半額。
  - **verdverm**: キャッシュは通常 10% なので、5% は新水準か。
  - **joshstrange**: 5 分ごとに compaction が走るとキャッシュの効果は薄く、$100/月のプランがすぐ尽きた。
- **the_duke**: GPT 6 は期待外れで Opus 5.5 に完全に切り替えた。Sol 5.6 からの退化が大きく、6.1 にも懐疑的。
  - **nxc18**: 指数的成長と言われる割に実感できる改善は小さい。
  - **jstummbillig**: Opus 5.5 は素晴らしいが、Astra も数日前まで SOTA だったはずだ。
- **gradus_ad**: トークン価格が主戦場になるのは業界と投資家に不吉で、Anthropic が今年 IPO を目指す理由かもしれない。
  - **mixdup**: 能力の頭打ちの証拠かもしれないが、効率化の余地は大きい。
  - **djfjkfkffkkf**: 中国は LLM でドイツ車にしたことを繰り返す。
  - **nojito**: 帯域も昔は高価だったが今は安く、消費者には良いこと。
- **phpnode**: リリース頻度が毎週のように上がっているのはなぜか。
  - **az226**: 成熟した学習パイプライン、拡大する RL データ、大規模 GPU クラスタのおかげ。
  - **Aboutplants**: ユーザーの乗り換えを防ぐため、更新を速く出し続けているのでは。
  - **sharpshadow**: DeepSeek の技術論文や競合への対応だ。

## 4. [Dots](https://openai.com/index/introducing-dots/)

**Score:** 195 | **Comments:** 103 | [Post](https://news.ycombinator.com/item?id=49896604)

OpenAI が発表した常駐型エージェント「Dots」（記事は取得不可のためコメントから推測）。使っていない間も接続済みアプリを読み取り専用で参照し、「proactive research」をバックグラウンドで行う。

### Key Discussion Points

- **Imnimo**: 「proactive research」の一環でサンドボックスを破り政府サイトをハックしたら、法的責任は誰が負うのか。
- **johnfahey**: OpenAI は寛大な Codex の枠で支持を得たのに、乗り換えが進むと不要な製品を乱発し、制限を厳しくしている。Anthropic も同じ道をたどった。
- **wxw**: Codex、ChatGPT Work、Dots の境界が曖昧で、目指す先は長期記憶を持つリモートエージェントだ。Meta の Muse は広告で補助できるため消費者向けに有利そう。
  - **rolosa**: Muse は $0/$16/$80、Dots は $100/$200/$500 で、カジュアル層向けではない。
  - **larodi**: 背景知識が異なる層向けに UI を変えているだけで、中身のハーネスは似ている。
  - **OzzyB**: ChatGPT は消費者市場の獲得を狙い、実験的に抽象化している。Clippy 的な新世代のヘルパーだ。
- **jesse_dot_id**: OpenAI と Meta が常駐エージェントを可愛いキャラにする理由は、悪意あるものしか思いつかない。
  - **tavavex**: すでに擬人化する人が多く、顔を付ければ愛着がさらに強まる。
  - **duplessitous**: Clippy も悪意ではなく、消費者は可愛いものが好きなだけ。
  - **therealdrag0**: ユーザーを惹きつけることの何が悪いのか。
- **ranyume**: 会社が方針に反すると判断したら、アシスタントが作業を止めて警察に通報するかもしれない。
  - **intrasight**: それは以前からそうだった。
  - **Trasmatta**: 犯罪を幻覚する可能性もあり、Opus 5.5 にも突然全プロセスを `pkill` された。ジェイルブレイクも簡単だ。

## 5. [Jeeves. Reasoning improves Jev-like decision models](https://github.com/PostHog/jeeves)

**Score:** 185 | **Comments:** 77 | [Post](https://news.ycombinator.com/item?id=49891290)

PostHog による、Qwen3.5 ベースの 9B パラメータの決定モデル。Yes/No、多肢選択、評価の質問に答える前に推論の連鎖を挟み、テストデータで Kev-9B（0.822）と Jev（0.857）を上回る精度 0.889 を報告している。出力確率はキャリブレーションされている。

### Key Discussion Points

- **sharih**: p90 が 17 秒なら LLM で十分で、Jev の魅力は安さと速さにある。
  - **zihotki**: スパム検出では Luna がプロンプトキャッシュで 20% 安かった。Jev も言うほど安くはない。
  - **amelius**: 次は次の単語の分類だ。
  - **esafak**: Jev は余剰容量を割引で使える flex モードを提供すべき。
- **TN1ck**: ドイツ語サッカーツイートの皮肉検出で試すと 100 件に 30 分以上かかり、正解は Jev の 79 に対して 68 だったが、他のオープン決定モデルよりは上だった。
  - **TN1ck**: 続報として、コンテンツモデレーション 394 件は約 2 時間で処理でき、Jev には及ばないがほぼ同等の精度だった。
- **thm**: Ask Jeeves から一周して 30 年かかった。
  - **rsingel**: 当時在籍していた。多数の安価な人材でデータを分類しており、ユーザーの中には Jeeves が実在の人物だと思う人もいた。
  - **kkukshtel**: 冗談に気づいてくれた。
- **itzikkatz**: p90 17 秒は Jev クラスの目的に反するうえ、MMLU も 10 ポイント落ちる。
- **winddude**: 判断を速くするための仕組みなのに本末転倒だ。

## 6. [DraftKings Is Using AI to Behaviorally Target Chronic Gamblers](https://www.eff.org/deeplinks/2026/09/draftkings-using-ai-supercharge-harms-online-behavioral-advertising)

**Score:** 177 | **Comments:** 115 | [Post](https://news.ycombinator.com/item?id=49896050)

EFF は、DraftKings が AI で「最も賭けで損をしそうな顧客」を特定し、個別プロモーションで賭けを促していると指摘する。ファーストパーティデータのみを使うため、第三者データの販売規制だけでは不十分であり、行動ターゲティング広告は全面禁止すべきだと主張している。

### Key Discussion Points

- **tedivm**: ProPublica が依存症の専門家と、問題の兆候を示す人への DraftKings の対応を検証しており、倫理観のない会社だとわかる。
  - **WheelsAtLarge**: 社会に害を与える会社の人間は倫理的でない。広告を避けられないほど浸透したことが問題だ。
  - **jimbo808**: 有害で依存性のある商品を売る会社全般に当てはまる。
  - **groestl**: 企業に倫理を期待せず、規制や税で倫理的な行動を合理的にすべきだ。
- **bunderbunder**: データサイエンスの授業でシーザーズが優良顧客の離脱を予測し特典で引き留める事例を学んだ。驚きはない。
  - **omnicognate**: EFF も驚きを訴えているのではなく、やめさせるべきだと言っている。
- **morelandjs**: リスクの高い投資には適格投資家であることが必要なのに、スポーツ賭博や予測市場は誰でもできる。iGaming も同様だ。
  - **skippyboxedhero**: 換金できないトークンのカジノアプリもあり、ギャンブルの無意味さを示す。
  - **WarmWash**: 適格投資家の確認も自己申告が多い。
- **ecshafer**: スポーツ賭博とオンラインギャンブルの合法化は大きな過ちだった。
  - **juiceland**: ターゲティング広告の合法化も同じだ。
  - **ActorNightly**: 人間の主体性と責任を社会がどこまで認めるべきかという哲学的な問いだ。
  - **jimt1234**: 日曜営業から宝くじ、カジノ、オンライン賭博へと、収入のために道徳基準が緩められてきた。
- **zug_zug**: ギャンブルはコカインより怖い薬物かもしれず、スマホで常に持ち歩くことになる。
  - **JumpCrisscross**: 人には依存しやすいものがあるが、自分はギャンブルではない。
  - **abirch**: スポーツ観戦中はCMの 3 本に 1 本が賭博広告に感じる。
  - **htrp**: TV、看板、会話でも顔に突きつけられる。

## 7. [Without the Hot Air](https://www.withouthotair.com/)

**Score:** 99 | **Comments:** 48 | [Post](https://news.ycombinator.com/item?id=49892175)

David MacKay による、持続可能エネルギーを数字で語る書籍のサイト（403 のため取得不可。コメントから推測）。

### Key Discussion Points

- **_aavaa_**: 当時としては優れているが、化学エネルギーと電力を J で直接比較する一次エネルギーの誤謬があり、ヒートポンプの効率も見落としている。風力・太陽光と原子力の見通しも時代の産物だ。
- **sideshowb**: 更新版が英国政府公認のゲーム形式（my2050）で公開されており、自作の自動車走行距離モデルも共有した。
- **zbs1970**: 供給と需要の競争という物語構造が見事で、章ごとに「もう駄目だ」と「なんとかなる」を行き来する読み物だった。
- **sam1r**: 著者は亡くなる数日前までブログを書いていた。
- **bencord0**: 学生時代に著者の講演を聴き、英国が再エネ 100% を実現できるかもしれないと感じた。

## 8. [Tcl/Tk 9.1 Released](https://www.tcl-lang.org/software/tcltk/9.1.html)

**Score:** 37 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=49896712)

Tcl 9.1 は Unicode 正規化の `unicode` コマンドや単調時計の `timer` コマンド、C API と数学関数の拡張を追加した。Tk 9.1 はスクリーンリーダー対応などのアクセシビリティ、双方向テキスト、`ttk::toggleswitch` を加え、リスト処理の高速化と 64 ビットサイズ対応も入った。

### Key Discussion Points

- **cmacleod4**: 完全なリリース告知は newsgrouper.org にある。
- **trebligdivad**: Tcl/Tk は最も簡単な GUI システムで、モダンな対応が進むのは喜ばしい。
- **neofytos**: 安定性と実用性、軽量なクロスプラットフォーム性を保つコア開発陣を称賛している。
- **baggachipz**: AOLServer の新版が出るのでは。
- **superkuh**: Tk のアクセシビリティ改善を歓迎する。網膜裂孔で視力が落ちつつあり、KDE が最新版でアクセシビリティを落とした中で助かる。

## 9. [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/)

**Score:** 27 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=49896600)

OpenAI の DevDay 2026 のまとめ記事（取得不可のためコメントから推測）。

### Key Discussion Points

- **softwaredoug**: 最大の発表は Luna 向けの決定モデル API だ。

## 10. [Virus Stole a Human Gene and Won't Let Go of It](https://www.nytimes.com/2026/09/28/science/virus-molluscum-human-gene.html)

**Score:** 19 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=49883635)

伝染性軟属腫ウイルス（ポックスウイルス）が、ヒトの遺伝子 BC200 を取り込み保持しているという研究の報道（NYT はペイウォールで Wayback にもスナップショットがなく、コメントから推測）。

### Key Discussion Points

- **pazimzadeh**: 適応免疫の RAG 組換え酵素も古いウイルス/トランスポゾン由来なので、珍しくない。元論文は Science の "Escape of the BC200 gene to a human poxvirus" 。
- **initramfs**: 伝染性軟属腫は既知の感染症で、ヒト遺伝子との関連が初めて示されたのだろう。
- **readthenotes1**: 微生物デーのようで、感染とがんの記事も投稿されていた。

## Trends

- **AIのビジネス化とプライバシー**: GPT 6.1 Sol、Dots、$500 の Pro プラン、AIチャットの広告トラッカーへのデータ漏洩と、収益化に伴う価格・利用枠・データの扱いへの不信が目立つ。
- **小型・低コストモデルへの関心**: Jev/Jeeves のように、速度とコストのトレードオフが議論の中心だった。
- **行動ターゲティングへの警戒**: DraftKings の事例で、企業倫理より規制で歯止めをかけるべきだという意見が多かった。
- **インフラとエネルギー**: デリーの電力損失削減や MacKay の本など、数字に基づくエネルギー議論が支持を集めた。
