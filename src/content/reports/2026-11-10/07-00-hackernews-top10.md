---
title: "Hacker News トップ10 サマリー（2026年11月10日）"
date: "2026-11-10T07:00"
category: "summary"
summary: "紙飛行機サイト、USPS の ZIP 境界データ、カナダの即時決済 RTR、Claude Fable 5.2 などを取り上げた HN トップ10"
tags: ["hackernews", "summary"]
---

## 1. [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com)

**Score:** 952 | **Comments:** 145 | [Post](https://news.ycombinator.com/item?id=50424581)

難易度・機種・設計者・用紙サイズで絞り込める紙飛行機の設計カタログ。各機に折り方の解説と、速度・滑空・精度の評価が付く。グッズ販売やデザインコンテストもある。

### Key Discussion Points

- **literallyanythi**: 「とても簡単」な1分の機体（Mystic）をA4用紙で折ったところ、人生で作った中で最もよく飛ぶ機体だった。
  - **bronco21016**: 元になった「Nakamura Lock」を子供の頃から折っており、最も安定して飛んだ。
  - **andai**: 作ってみるとよく飛んだ。従来の単純な機体は天井に突っ込んだ。
  - **AlexITC**: 子供の頃に覚えた機体と似ていると思ったが、最後の仕上げの工夫に感心した。
- **intrasight**: 1978年に見知らぬ紳士から『The Great International Paper Airplane Book』を贈られた思い出。今度は自分が13歳の「ふさわしい子」に譲りたい。
  - **shermantanktop**: 著者 Felix Rosenthal は家族の友人で、映画『第三の男』のような波乱の人生だった。
  - **sbastidasr**: 祖母の家で見つけた『World Record Paper Airplane Book』で何年も飛行機を折った。
- **tombert**: 祖母の家に置いてあったドットマトリクス用紙の山と紙飛行機の本で夏を過ごした。
- **FoldableFlight**: サイトの作者 Kyle を名乗り、無料で設計を公開してきたこと、世界記録機も掲載していることを説明してフィードバックを募った。
  - **backprojection**: 子供がチャンネルとPatreonを気に入り、何時間も折っている。お礼を述べた。
  - **grandiose**, **yreg**: モバイル（iOS）で購読ポップアップが何度も出て、閉じるとリロードやクラッシュが起きると指摘。
- **magicalhippo**: 父の職場の吹き抜けで、プリンタ室の紙を折って飛ばした思い出。

## 2. [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb)

**Score:** 586 | **Comments:** 298 | [Post](https://news.ycombinator.com/item?id=50431058)

USPS の配達住所・位置データから作った全米 ZIP コード境界データ。Internal・Enterprise・Publication の3区分で、各区分とも四半期ごとに4回更新される。利用はライセンス契約で縛られ、ページに価格は載っていない（コメントでは最安でも1万ドルとされる）。

### Key Discussion Points

- **SwellJoe**: 最安でも1万ドルは高すぎる。連邦データは無料であるべきで、複製コストがほぼゼロの今は特にそうだ。
  - **bob1029**: USPS はフィンテックにとって扱いにくくなっている。住所検証も以前は無料だったが、価格体系が変わった。
  - **tantalor**: 誰か1人が買えば共有できる。著作権も特許もない公的データだ。
  - **Manuel_D**: データの収集と提供には運用コストがあり、政府が課金するのはそれを持続させるためでもある。
- **showerst**: 無料化を期待していた。多少の「ぼやけ」を許容するなら、国勢調査局の ZCTA シェイプファイルが無料で近似として使える。
  - **munro**（投稿者）: 自分も期待したが無料ではなかった。USPS のプエルトリコのサンプルと Census ZCTA 2026 を diff したところ差は小さく、Census を使うつもりだ。
  - **dathinab**: ZIP の境界線が無料でないことに驚いた。
- **xp84**: ZIP は配達ルートのラベルで、領域を分割するものではなかった。新しい住宅地がどのルートに入るかは USPS 次第なので、ポリゴン化には限界がある。
  - **bordercontrol**: ルートごとに細かく分けるとデータ量が1〜2桁増え、扱いも大変になる。
  - **mikepurvis**: 各 ZIP を複数の閉領域の和集合にできると柔軟になる。
- **johnnyo**: 政府保有のデータなら FOIA で請求できないのか。
  - **anamexis**: 39 U.S.C. §410 により、USPS は「商業的性質の情報」を開示対象から外されている。
  - **ks2048**: 1970年代以降、USPS は税金ではなく売上で運営される準民営化の形になっているためだ。
  - **Tangurena2**: 議会が USPS を「赤字」に見せる法律を作ってきた。年金の前払い義務がその例。
- **foxfired**: 公開されるべきデータだ。クラウドファンディングで1度買って公開できないか。

## 3. [Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy)

**Score:** 512 | **Comments:** 281 | [Post](https://news.ycombinator.com/item?id=50427362)

Payments Canada が、24時間365日・リアルタイムで清算・決済できる全国システム RTR を開始した。G7 で初めて、開始時点から集中型の不正対策（口座名義確認を含む）を必須にしたという。初期参加は Wealthsimple、KOHO、Bank of America など。C.D. Howe 研究所は最大145億ドルのコスト削減を見込む。

### Key Discussion Points

- **ttul**: スタートアップをカナダで設立するのは悪くない。連邦法人は届出が一元化されており、新しい大型控除で実効法人税率は約6%になるという。
  - **cdnsteve**: 6%は新規投資への限界実効税率であり、税率自体は変わらない（オンタリオ州との合算で26.5%、小規模事業者は11.2%）。法案もまだ草案の段階だ。
  - **corwinstephen**: 二重国籍で、米国で設立した。ネットのインフラは米国前提で、カナダ対応は後回しのことが多い。
  - **cmiles8**: 米国との給与差が大きく、カナダで優秀な人材を集めるのは難しい。
- **QGQBGdeZREunxLe**: 2026年になっても米国に即時決済網がないのは異常だ。FedNow はあるが対応銀行が少なく、手数料もかかる。
  - **JumpCrisscross**: 米国は1915年に Fedwire でリアルタイム総額決済を発明した。FedNow も2023年に開始している。
  - **whh**: オーストラリアは2018年から NPP があり、電話番号宛てに即時送金できる。
- **mlekoszek**: Interac の e-Transfer をもとにした公共財として銀行に開放する形で、Interac を巻き込んだのは賢い。
  - **johnwalkr**: カナダの銀行は協調的で、Interac デビットも長い歴史がある。
  - **lbourdages**: e-Transfer は実はリアルタイム決済ではない。受取側の金融機関が立て替え、実際の資金は数日かけて動く。
- **mig39**: 大手銀行が参加していないようだ。
  - **throw0101c**: 記事によれば大手も参加予定で、RBC は2027年第2四半期に導入予定だ。
  - **jjmarr**: Wealthsimple の運用資産は1700億ドルで、最小の大手行 BMO（3100億ドル）に迫る。
- **MarkusWandel**: M-PESA の現代版のように見える。現金が残るのは、ガレージセールのような個人間の少額取引だ。

## 4. [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)

**Score:** 462 | **Comments:** 737 | [Post](https://news.ycombinator.com/item?id=50429068)

Anthropic が Fable 5.2 と、サイバー向けの Mythos 5.2 を発表した。長時間の自律的なコーディングや科学分野の成果を強調している。出力は Fable 5.1 より最大30%速い。価格は入力100万トークンあたり8ドル、出力40ドル。ベンチマークは Anthropic 自身の数字で、FrontierCode 2.0 は 49.1% 対 Opus 5.5 の 45.5%。フェルマーの最終定理の形式化は、1,000エージェントで約30時間だったとされる。

### Key Discussion Points

- **postalcoder**: モデル間のバランスが取れてきた。通常のコーディングでは Fable 5.2 と Opus 5.5 の差が分かりにくく、野心的なプロンプトでないと差が出ない。5.1 より速く、出力トークン超過も減った。
  - **wolttam**: モデルの能力向上は、さらに多くを任せる人にしか効かなくなってきた。
  - **vunderba**: LOGO 風の描画言語を LLM に与える方式のほうが、従来の画像生成モデルより好ましい。
  - **nijave**: コーディングでは差を感じないが、設計・アーキテクチャでは差が歴然としている。
- **breakwaterlabs**: Fable の xHigh を Carbon の Medium と比べた理由など、比較設定に疑問がある。
  - **jsnell**: その指標（FrontierCode 2.0）では、各モデルの最高の努力レベルを比べている。
  - **mlmonkey**: Carbon はほとんどの人にとってまだ使えない。手に入るものを評価するしかない。
  - **killingtime74**: 一般提供前だからベンチマークできないのかもしれない。
- **kragen**: Opus 5.5 が作ったプロジェクトのレビューを頼んだら、5時間分のトークン予算を30分で使い切り、重大なバグを7件報告した。
  - **weatherlite**: 5.3 が出れば同じ依頼に10時間かかって倍のコストになるだろう。Opus に留まる。
- **advaith08**: 60万行の古い Fortran コードを2日で36倍高速化できたので、結果を公開した。
- **prtmnth**: なぜ5.5ではなく5.2なのか。OpenAI との競争で、5.5は温存しているのではないか。
  - **brokencode**: 5.5は安全対策が間に合わないか、期待外れだったのかもしれない。

## 5. [E-means: Outperforming k-means in one-tenth the epochs](https://e-means.github.io/)

**Score:** 359 | **Comments:** 31 | [Post](https://news.ycombinator.com/item?id=50429734)

k-means の Lloyd 法を、指数移動平均でセントロイドを更新するミニバッチ方式に置き換える手法。バッチサイズとステップ幅はスケーリング則から自動で決め、初期化の改良、死んだクラスタの復活、ステップ減衰、GPU カーネルも加える。著者は、Lloyd 法の25エポック後の損失に1.2〜3エポックで到達し、実時間で約10倍以上速いと報告している。コードは Faiss で公開されている。※本文取得時に別内容のページが返ったため、サイト情報は取得できた範囲に基づく。

### Key Discussion Points

- **jlhawn**: 球面上の等面積メッシュの緩和に使っている Lloyd 法の代替として試したが、効果はなかった。データセットがなく、各セルの重心を幾何から直接計算できるためだ。
  - **shiandow**: 実質的に Lloyd 法と「動かさない」の線形補間なので、少なくとも同等以上だが、チューニングなしでは利得は限られる。
- **real_faxenoff**: 自分の IVF インデックスに適用し、GPU で146倍の高速化が出た。
- **saagarjha**: ミニバッチ k-means は昔からあり、EWA 更新も既知だ。Lloyd 法に勝つのは低いハードルで、並列性の主張に見合う指標を測っていない。
  - **oofbey**: 手法の多くは既存のもので、組み合わせても特別な相乗効果はない。ベースラインにも疑問が残る。
- **shiandow**: 期待値最大化（EM）やシミュレーテッドアニーリングとの等価性で理解できそうだ。
- **wood_spirit**: 後知恵では当たり前に見える。scipy に入ってほしい。

## 6. [Horible public key tricks](https://maurycyz.com/projects/badcert/)

**Score:** 118 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=50434264)

SSL/TLS と ACME の手間に抗議する「抗議証明書」の試み。証明書で著者が直接決められるのは公開鍵だけなので、313333333337 のような素数を使った「ヴァニティ」な弱い鍵を使う。openssl で証明書を見れば抗議が一目で分かるようにしている。※本文は Wayback のスナップショットから取得した。

### Key Discussion Points

- **knotimpressed**: リンク先の長大な PDF（tom7.org/httpv）も、この記事が楽しめたなら読む価値がある。
- **tptacek**: 本気の攻撃者はみな中間者攻撃を使う。受動的な盗聴だけの攻撃者は、バックボーン直結の Sun サーバー時代に絶滅した。
- **sam1r**: 先に「tty」モードに切り替えると、目に優しくて読みやすい。
- **arcfour**: 「誰も秘密鍵を検査しない」という記述に対し、検査すべきだと言いたいのかと疑問を呈した。
- **geekgod382**: 数学が分からない。`plaintext^e mod n` は具体的に何をしているのか。

## 7. [Locating the source of a mysterious beep](https://simonwillison.net/2026/Nov/9/mysterious-beeps/)

**Score:** 113 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50434310)

Simon Willison の家の物置部屋から断続的にビープ音がした。箱を探す代わりに、Claude Code に Beep Locator を作らせ、複数の端末をマイクにして音源を三角測量した。2007年の BeepBeep 論文に基づく方式で、約40cm の精度まで絞り込み、電池交換が必要な古い一酸化炭素検知器にたどり着いた。

### Key Discussion Points

- **ozyschmozy**: ベッドのきしみ音を探すために、床下にマイク付き ESP32 を置くことを考えたが、手間に見合わず断念した。
- **simonw**: 記事に書かなかった話として、家族が謎のビープ音に悩まされたのは初めてではない。犬は電池切れの警告音がすると庭の植え込みに隠れる。
- **tristanj**: 物理的な二分探索なら O(log n) で解ける。箱の半分を別の部屋に移して、どちらから鳴るかを確認し、繰り返せばよい。
- **gorgoiler**: 吊り下げ式ストリングロボットの投稿に似た構成だ。
- **foo12bar**: ビープの間隔を測り、次の音のタイミングで特定の場所に耳を澄ませればよかったのではないか。

## 8. [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/)

**Score:** 70 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=50436640)

Amazon の2人のエンジニアが、社内の大規模チケットシステムでのラベル付けを Claude Sonnet 4.6 から Strands Decider に置き換えた。Decider は固定の選択肢に対する確率を返すモデルで、「同等の性能」でコストは約98%減、呼び出し1回あたりのレイテンシは78%減、チケットあたりのトークンは70%減だったという。本番トラフィックで両者を並走させてから切り替えた。選択肢が閉じた大量処理向けで、説明が必要なラベルには向かない。

### Key Discussion Points

- **armcat**: 約6年前にチケット分類モデルをSVMで作った。LLMへの移行を経て、速くて安い分類器に戻っていくのは興味深い。
- **Kaedon**: 100万チケットあたり約21,700ドルの節約なので、数百万ドル規模の節約には年9,200万件以上が必要だ。アラームやセキュリティ検知まで含めた規模なのだろう。
- **tdhz77**: Rust の bonsai クレートを使えばさらに効率的で、安価なモデルで制御しやすい。
- **phillennium**: 「効率的な分類器を作ろう」から「機械の神を作ろう」を経て、また「効率的な分類器を作ろう」に戻った。
- **oofbey**: コストが98%減るなら、提供側はその2%を得ているだけだ。

## 9. [Your TV can see through walls](https://maurycyz.com/projects/fading/)

**Score:** 32 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50436410)

ATSC デジタルテレビ信号を SDR（USRP B200）で記録し、人の動きがスペクトログラムの縞として現れることを示す。直接波と反射波が打ち消し合う選択的フェージングを利用して、縞の間隔から歩行速度（約1.3m/s）を推定している。WiFi や LTE のような広帯域信号でも同様のことができるという。※本文は Wayback のスナップショットから取得した。

### Key Discussion Points

- **gbxyz**: 関連事項として Van Eck phreaking がある。
- **ThePumpkinGod**: 悪意のある者に在宅かどうかが分かってしまう、と皮肉った。

## 10. [Ultorg: The User Interface for Relational Databases](https://www.ultorg.com/)

**Score:** 24 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50435898)

SQL を書かずに、スプレッドシート風の画面で複数テーブルを横断して照会・編集できるデスクトップ向けツール。PostgreSQL、MySQL、SQL Server、DuckDB、BigQuery、Excel、Google Sheets、CSV に接続でき、結合と一対多の関係を自動で可視化する。データはローカルか社内ネットワークに留まる。

### Key Discussion Points

- **kragen**: Eirik Bakke の Ultorg（SIEUFERD）は刺激的な研究で、17年越しに一般公開されて嬉しい。
- **akshayrajeshwar**: 以前使って素晴らしかった。複数のDB・シート間で一貫した一意IDがあるデータを前提にすると使いやすい。既存ファイルを移すより、最初からこの用途で設計するほうが楽だ。
- **NetMageSCW**: 小さなデスクトップアプリがサブスクリプション制なのは気に入らない。
- **aetherspawn**: 請求書のエクスポートボタンのような独自のボタンを追加できるのか。

## Trends

- **AI の話題が多い**: Fable 5.2 の発表（#4）、Claude Code で作ったビープ探知機（#7）、LLM から軽量な分類器への回帰（#8）。#4 のコメントでは、実際の差は野心的な課題でしか現れないという見方が目立った。
- **公共データとインフラ**: USPS の高額なデータ（#2）と、カナダの公的な即時決済基盤（#3）。「公共データは無料であるべきか」と「他国に比べた米国の遅れ」が論点になった。
- **手を動かす小さな技術**: 紙飛行機（#1）、抗議証明書（#6）、テレビ電波で人の動きを検知する実験（#9）のように、思い出話や技術的な好奇心を誘う話題が上位に入った。
- **アルゴリズムの検証**: E-means（#5）は大きな高速化の主張に対し、既存手法との新規性やベースラインを疑う声も出た。
