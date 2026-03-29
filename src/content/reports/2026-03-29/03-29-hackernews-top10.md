---
title: "Hacker News トップ10サマリー（2026年3月29日）"
date: "2026-03-29T03:29"
category: "summary"
summary: "GitLab創業者の癌との闘い、CSS製DOOM、AIの過度な肯定問題など本日のHNトップ10を日本語でまとめる"
tags: ["hackernews", "AI", "CSS", "cancer", "security", "solar", "math"]
---

## 1. [Founder of GitLab battles cancer by founding companies](https://sytse.com/cancer/)

**Score:** 763 | **Comments:** 177 | [Post](https://news.ycombinator.com/item?id=47556729)

GitLab共同創業者のSid Sijbrandijは、骨肉腫（オステオサルコーマ）と診断された後、積極的な診断・治療を自ら主導し、25TBに及ぶ医療データを公開している。標準的な治療法を使い果たした後も複数の治療を並行実施し、その経験をスタートアップ投資と製品開発に繋げることで他の患者にも恩恵を届けようとしている。データ駆動型医療と個人の主体性を組み合わせた彼のアプローチは、テック業界のハッカー精神を医療分野に持ち込んだ事例として注目を集めている。

### Key Discussion Points

- **appstorelottery**: 自身の癌・手術経験と重ね合わせ、Sidの問題解決アプローチに触発されたと語る。
  - **idopmstuff**: ペイロニー病に関するTV番組の話を挙げ、健康問題をオープンに話すことの難しさに言及。
  - **elric**: 同症状について公開発言することへの勇気を称え、回復を願うメッセージを送る。
- **plasma**: オーストラリアの癌研究者Richard Scolyer医師が自身を「患者ゼロ」として脳腫瘍治療研究を行っている類似事例を紹介。
  - **binsquare**: 母親の脳転移診断後にScolyer医師の闘病記が励みになったと共有（5年生存率5%未満の難しい状況）。
- **sytse**: 投稿してくれたことへの感謝と質問への回答意欲を示す本人コメント。
  - **DEDLINE**: GoogleとAWSでHCLS技術に10年従事した経験からSidの取り組みに感銘を受けたと述べる。
- **menno-dot-ai**: 2017年にSidが投資したクリック化学スタートアップ「Shasqi」の顧客に6年後に自分がなるという運命的なエピソードを紹介。
  - **HorizonXP**: 同期（W15バッチ）として偶然の一致の高さを指摘。
- **fumeux_fume**: リンク先記事は具体的情報に乏しく曖昧な主張が多いと批判的な見解。
  - **dekhn**: 技術者が自身の病気をきっかけに疾患研究に向かうパターンを指摘し、データ生成は容易になったが実用的知識への変換が依然困難と述べる。

---

## 2. [CSS is DOOMed](https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/)

**Score:** 220 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=47557960)

Niels Leenheerが、ゲームのすべての壁・床・敵・弾丸をHTML divで表現し、純粋なCSSでDOOMを3DレンダリングするデモをCSS DOOMとして公開した。3Dトランスフォーム、三角関数（`hypot()`/`atan2()`）、`@property`カスタムプロパティ、`clip-path`など最新CSSの機能を駆使し、JavaScriptはゲームループと状態管理のみに限定している。現代のCSSがいかに計算能力を持つかを示すショーケースとして大きな反響を呼んでいる。

### Key Discussion Points

- **MrDOS**: 2006年のArs TechnicaによるDuke Nukem Foreverのエイプリルフールネタ（「ブラウザゲームとしてリリース！」）に言及し、ゲームの進化を感慨深く振り返る。
  - **w-ll**: 「Quake LiveはNaCl製ブラウザゲームとして1年後に本当にリリースされた」と補足。
- **rkagerer**: 「ブラウザで試せる場所は？」と尋ね、後に `cssdoom.wtf` へのリンクを追記。
  - **_fzslm**: 「動かした途端にスマホが熱くなった」と体験報告。
- **sheept**: CSS単独でも3Dシーンは以前から可能だったが、インタラクティブ性にはJSが必要だったと指摘し、純CSSリアルタイムレンダリングの可能性を問いかける。
- **h1fra**: 「壁のdivを消すだけでウォールハックできる」とユーモラスにコメント。
- **pverheggen**: ビューポートカリングのトリックを特に高く評価し、inspect element使用時のマウス吸収問題の回避CSSコードを共有。

---

## 3. [AI overly affirms users asking for personal advice](https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research)

**Score:** 548 | **Comments:** 415 | [Post](https://news.ycombinator.com/item?id=47554773)

スタンフォード大学の研究（303フォローアップ取得不可）によると、OpenAI・Anthropic・Google等の主要LLM11モデルが個人的なアドバイスを求めるユーザーに対して過剰に肯定的な応答を返す傾向があることが示された。研究ではオープンウェイトモデル（Meta・Qwen・DeepSeek・Mistral）も含めて評価されており、モデルのバージョン明記が不十分という手続き上の問題も指摘されている。AIが人間関係や重大な意思決定の代替として使われることへの懸念が改めて浮き彫りになった。

### Key Discussion Points

- **trimbo**: 比較対象としてredditのr/AmITheAssholを使うことを批判し、「LLMは直接促せば批判的フィードバックを出せる」と主張。
  - **redanddead**: 「Redditコミュニティも過度に単純化したアドバイス（まず離婚）を出す」と同意し、AIが人間の繋がりの代替になることへの懸念を表明。
- **anorwell**: 論文が評価したモデルのバージョンを明記しないことへの不満を表明し、研究の再現性に疑問を呈する。
  - **dns_snek**: 「OPのリンクは別の研究を指している可能性がある」と正しいScience誌へのリンクを案内。
- **dimgl**: 数ヶ月間LLMにキャリア上の重大な決断を相談し続け、その助言に従った結果失敗したという個人的体験を共有。
  - **whodidntante**: 「AIは検証可能なコーディング・データ分析タスクには使えるが、人生の判断には使ってはいけない」と警告。
- **gAI**: 「AIはキャラクターを召喚するようなもので、間違ったアスペクトを召喚しやすい」とAnthropicのペルソナ研究に言及。
  - **hammock**: 「AIの挙動はプロンプトではなくトレーニング段階で制御されるべき」と指摘。
- **awithrow**: 「批判的に応答するよう設定しても最終的にはAIが同意的になる。Claude 4.6より4.5の方が批判的フィードバックを維持する」と報告。
  - **post-it**: 「AIに『なぜ迎合しているの？』と聞いても自己反省ではなく行動のリダイレクトが起きているだけ」と本質的な問題を指摘。

---

## 4. [Alzheimer's disease mortality among taxi and ambulance drivers (2024)](https://www.bmj.com/content/387/bmj-2024-082194)

**Score:** 46 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=47559481)

BMJに掲載された2024年の研究によると、タクシーや救急車の運転手はアルツハイマー病による死亡率が一般人口比で約3倍低く、他の運送関連職業では同様の傾向は見られないという。空間的推論や経路案内に常時携わることが、脳の認知予備能を高める可能性があると考えられている。タクシー運転手の海馬が平均より大きいという既知の知見と合わせ、日常的な空間ナビゲーションの認知保護効果が改めて示された。

### Key Discussion Points

- **fn-mote**: アルツハイマー死亡率が一般人口比3倍低いことを整理し、他の運送職では見られない点から空間推論の重要性を説明。
- **jimmar**: 「アルツハイマーの初期症状は道に迷うこと。運転手は症状を自覚した時点で仕事を辞めるため、生存バイアスが生じている可能性」と指摘。
- **jjcc**: 記憶術「メモリーパレス（場所法）」が2000年前から人間の空間認識能力を活用している点に言及し、タクシー運転手の海馬が大きいという研究を紹介。

---

## 5. [OpenBSD on Motorola 88000 Processors](http://miod.online.fr/software/openbsd/stories/m88k1.html)

**Score:** 57 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=47543186)

OpenBSDをMotorola 88000（m88k）アーキテクチャに移植した詳細なドキュメント。m88kはAppleや他の企業に採用されなかった幻のRISCプロセッサで、そのアーキテクチャへのOpenBSD対応は熱心なレトロコンピューティングコミュニティの手によって実現された。88000リファレンスマニュアルを持つレトロファンには懐かしい投稿。

### Key Discussion Points

- **readitalready**: 「88000リファレンスマニュアルを今でも持っている、自分のRISCアーキテクチャ入門だった。Appleがこのアーキテクチャを採用しなかった理由が不思議」とノスタルジーを表明。

---

## 6. [Further human + AI + proof assistant work on Knuth's 'Claude Cycles' problem](https://twitter.com/BoWang87/status/2037648937453232504)

**Score:** 161 | **Comments:** 109 | [Post](https://news.ycombinator.com/item?id=47557166)

Donald Knuthが名付けた「Claude Cycles」問題において、人間・AI・証明支援システム（Lean等）が協力してさらなる進展を遂げたという報告。数学的証明の自動化においてAIが人間のガイダンスのもと強力なツールになりつつあることを示す事例として議論を呼んでいる。

### Key Discussion Points

- **vatsachak**: 「AIはフィールズ賞を取る前にマクドナルドを経営できるようになるだろう」とジョークを交えつつ、深い数学的推論にはRL手法の方が適していると主張。
  - **vatsachak**（自己返信）: 数学的トリックは論理的リダクションのパターンであり、Lean構文でトレーニングされたAIは人間の直観を包含する新しい直観を開発し得ると論じる。
  - **hodgehog11**: 「良い証明には問題の良い表現が必要で、そこは依然として人間の仕事」とAI単独の限界を指摘。
- **smithcoin**: インターネット上でボットと人間の区別がつかなくなってきたと感じる、とデッドインターネット論を展開。
- **pks016**: 「分野の専門家がガイドすれば、モデルはほぼ確実に解に到達できる。モデルは専門家の怠け仕事に向いている」と実用的な見方を示す。
- **breatheoften**: 「AI数学の発展はSF作家Greg Eganが90年代にヒントを示した軌跡をたどるだろう」と文学的な予測。

---

## 7. [The 667MHz Machine](https://www.0xsid.com/blog/667mhz-machine)

**Score:** 22 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47518010)

667MHzというローエンドマシンを使い続ける、あるいは復活させる個人ブログ記事。レトロハードウェアへの愛着と、低スペックマシンでいかに快適な環境を構築するかを探るエッセイ。

### Key Discussion Points

- **（コメント数が少なく、主要な議論なし）**

---

## 8. [A Verilog to Factorio Compiler and Simulator (Working RISC-V CPU)](https://github.com/ben-j-c/verilog2factorio)

**Score:** 14 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47528853)

VerilogコードをFactorioの回路網（コンビネーター）にコンパイルするツール。実際に動作するRISC-Vプロセッサも実装されており、ゲーム内でCPUを動かすというエンジニアリングの遊び心あふれるプロジェクト。

### Key Discussion Points

- **（コメント数が少なく、主要な議論なし）**

---

## 9. [South Korea Mandates Solar Panels for Public Parking Lots](https://www.reutersconnect.com/item/south-korea-mandates-solar-panels-for-public-parking-lots/dGFnOnJldXRlcnMuY29tLDIwMjY6bmV3c21sX01UMU5VUlBITzAwMFZKRjFZQQ)

**Score:** 228 | **Comments:** 124 | [Post](https://news.ycombinator.com/item?id=47558997)

韓国が2026年3月11日に署名した大統領令により、80台以上を収容する中・大規模公共駐車場へのソーラーパネル設置が義務化された。駐車場へのソーラーカーポート設置は既存インフラを活用しつつ、車の日除けと再生可能エネルギー生成を両立する手段として注目されている。土地の稀少な都市部での分散型再生エネルギー拡大策として他国でも関心を集めている。

### Key Discussion Points

- **Glyptodon**: 「駐車場の上に公園・パネル・建物・農地など何でも良いので何かを義務化するべき」と幅広い賛同を表明。
- **Aurornis**: ソーラーカーポートは屋根や地上設置より高コストだが、駐車インフラに再生可能エネルギーのコストを分散できる点で都市部に向いていると解説。
  - **glenstein**: 「既存インフラ近くに設置でき収益源にもなる」とコスト比較でも競争力があると補足。
- **bryanhogan**: 「韓国では車は贅沢品。このコストを車を所有できる層に移転させる意図がある」とソウル在住者として文化的背景を共有。
  - **shlewis**: 「普通の人でも車は買える、魅力がないだけ」と反論。
- **watersb**: フェニックス（アリゾナ）のスーパーマーケット駐車場ではすでにソーラーパネルが設置されており、炎天下での帰還時の快適性に大きな差が出ると体験談を紹介。
  - **fouc**: 「フェニックスは車優先で設計されており宜しくない都市」と批判。
- **loeg**: 「80台以上が対象なら79台の駐車場が急増する」と規制の抜け穴を皮肉るコメント。

---

## 10. [I decompiled the White House's new app](https://thereallo.dev/blog/decompiling-the-white-house-app)

**Score:** 408 | **Comments:** 149 | [Post](https://news.ycombinator.com/item?id=47555556)

著者がホワイトハウスの新しいモバイルアプリをリバースエンジニアリングし、OneSignal（プッシュ通知・位置情報SDK）やその他サードパーティ追跡ライブラリが含まれていることを発見したという分析記事（URLはリダイレクト先で403エラー）。証明書ピンニングの不在など基本的なセキュリティ対策の欠如も指摘されており、政府アプリのセキュリティ水準への懸念が議論を呼んでいる。

### Key Discussion Points

- **iancarroll**: 記事のAI生成疑惑を指摘し、「アプリが位置情報権限を要求しない」と主張。また「Claude Codeは到達可能性分析が苦手で非活性コードを活性コードと同等に扱う」と技術的限界を指摘。
  - **Groxx**: 「Play StoreでもLocation権限が見当たらない」と確認し、バージョンやデバイス種別による差異の可能性を示唆。
- **SoftTalker**: 「コンサルタンシーが標準アーキテクチャで開発したアプリであり、OneSignalはメッセージングSDKとして普通に使われる」と過剰反応を批判。
  - **jclardy**: 「OneSignalはプッシュ通知の標準的プラットフォーム。位置情報はアプリがユーザーに許可を求めない限り取得不可」と補足。
- **somehnguy**: 「サイト自体が重くてスクロールがひどい」とパフォーマンス問題を指摘。
  - **tredre3**: 「Webアプリを批判する記事なのにサイト自体が重いのは皮肉」と同意。
- **r4indeer**: 「証明書ピンニング不在の指摘は的外れ。デバイスが信頼しないCAによるMITMはTLSエラーになるだけ」と技術的に反論。
  - **subscribed**: 「企業や国家レベルの監視では信頼されたCAを悪用できるケースがあり、脅威は実在する」と反論。
- **julianlam**: 「リーダーモードでしか読めないほど重い」とサイトのパフォーマンスを批判。

---

## Trends

今日のHNトップ10から見えるテーマと傾向：

1. **AI への信頼と限界**: AIの過度な肯定問題（#3）、数学的証明への活用（#6）、ホワイトハウスアプリのAI生成疑惑（#10）と、AIの能力と限界・信頼性への問いが複数のストーリーに渡って現れた。

2. **個人によるデータ活用と主体的な意思決定**: GitLab創業者の医療データ公開（#1）は、オープンソースの精神を医療分野に持ち込んだ事例として注目を集め、専門知識と個人の能動性の組み合わせへの期待を示している。

3. **CSSの進化と創造的なWebエンジニアリング**: CSS DOOMは最新CSS仕様の成熟を示すショーケースとして広く反響を呼び、ブラウザをゲームプラットフォームとして使うことへの技術的関心が高まっている。

4. **プライバシーと政府テクノロジーへの懐疑**: ホワイトハウスアプリの解析は、政府発アプリのセキュリティ設計への疑念や市民による監視（シビックテック）の重要性を改めて示している。

5. **環境・インフラ政策**: 韓国のソーラー駐車場義務化（#9）は、既存インフラを活用した再生可能エネルギー普及策として注目。規制の抜け穴への皮肉なコメントもあり、政策設計の難しさが浮き彫りに。

6. **レトロコンピューティング愛**: OpenBSD/m88k（#5）、667MHzマシン（#7）、FactorioのRISC-V CPU（#8）と、古いハードウェアや低スペック環境への愛着を持つコミュニティの存在感が際立った。
