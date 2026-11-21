---
title: "Hacker News Top 10 - 2026-11-21"
date: "2026-11-21T19:02"
category: "summary"
summary: "リーマン予想（GRH）証明と Lean 検証が席巻、ブラジル税務当局の OSS 化、アジ化鉛の処理問題など"
tags: ["hackernews", "riemann-hypothesis", "lean", "open-source", "usb"]
---

## 1. [Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]](https://alpo.ge/remark.pdf)

**Score:** 2825 | **Comments:** 1995 | [Post](https://news.ycombinator.com/item?id=50574968)

Levent Alpöge が一般化リーマン予想（GRH）の証明を主張する文書を公開した。証明は Lean ライブラリとして公開され、コメントによれば約 1.3GB・約 1500 万行規模。記事 PDF は本文を取得できなかったため、コメントと関連記事から要約している。

> **関連:** #2「Hurried Announcement: Alessandro Masullo GRH」も参照（同じ GRH 証明をめぐる別著者の主張）
> **関連:** #4「Lean verification of the Riemann Hypothesis」も参照（この証明の Lean コミュニティによる検証声明）
> **関連:** #10「Verification files for the Lean proof of the Riemann Hypothesis」も参照（同証明の検証ファイル）

### Key Discussion Points

- **synapsomorphy**: 想定より早い到来で、常温超伝導や核融合も来年には、と期待しつつ AI の進展への不安も表明。
  - **RAWGOD**: 実科学には実験が必要で、行列演算を回すほど速くは進まない。
  - **cbg0**: 核融合の残課題は炉壁の耐中性子損傷などの工学問題だ。
  - **inkysigma**: Lean のような即時フィードバックが物理科学には無く、同じようには転用しにくい。
- **dooglius**: ヒルベルトの「千年後に目覚めたらまずリーマン予想が証明されたか尋ねる」という言葉を引用。
  - **ironborn123**: 人間が全体を理解できない超人的な証明になるかもしれないと返した。
- **spprashant**: 理論的成果が次々出ており、次は現実世界への影響が課題だと指摘。
  - **loglog**: 食料や水は既にあり、貧困は技術ではなく政治の問題だ。
  - **schleck8**: 将来、1日8時間の机仕事は産業革命期の搾取のように見られるだろう。
- **vbezhenar**: AI の画期的成果が数学に偏っている点が意外。ソフトウェア分野ではまだ見当たらない。
  - **jcelerier**: 点群圧縮で、既存標準（MPEG G-PCC）より 200〜300 倍高速なものを Claude と作った。
  - **zesterer**: 定理証明器があるから LLM の試行錯誤が成り立つ。
  - **rcpt**: 数学は物理世界に律速されない純粋な論理で、チェスや囲碁に似ている。
- **djoldman**: 証明は 1.3GB・約1500万行で、取得手順を共有。
  - **hafeoz**: 480 コアの Xeon で 2.4 時間かけてコンパイルし、出力は 89GB だった。
  - **causal**: Lean にバグがあれば、大量のエージェントがそれに依存する証明を見つけうる。
  - **kccqzy**: 一時ファイルなしで、ストリームのまま展開するシェルのコツを紹介。

## 2. [Hurried Announcement: Alessandro Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/)

**Score:** 2325 | **Comments:** 1118 | [Post](https://news.ycombinator.com/item?id=50579568)

Alessandro Masullo による約 940 ページの GRH 証明原稿が急遽発表された。Alpöge の主張と同時期で、別アプローチと見られる。記事本文は取得せず、コメントに基づいて要約している。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis」も参照（同じ GRH 証明をめぐる別著者の主張）

### Key Discussion Points

- **pbkompasz**: 900 ページ対 25 万ページと対比し、圧縮は知性だと評した。
  - **djeastm**: ジョン・ヘンリーと蒸気ドリルの話を連想する。
  - **Hmorgan12**: 25 万ページの証明は理解・検証に数十年かかる。
  - **killerstorm**: Alpöge の証明の要約は 2 ページに収まる。
- **Kotlopou**: 940 ページで最初の節が空なのは奇妙。Conrad ほどの人が1年も公開しなかったのも意外だ。
  - **woopwoop**: Masullo は Conrad の学生で 12 年取り組んでいる。ただし Conrad らが証明を保証したわけではない。
  - **rcxdude**: Wiles の FLT も秘匿して進めた例があり、非公開には動機がある。
  - **pastel8739**: 1.1.1.1 が空なのは序論を最後に書くなら自然だ。
- **prometheus1992**: Anthropic 側に情報が流れた可能性を疑う。
  - **benmusch**: 両者の証明は全く別のアプローチだ。
  - **nostromo**: Anthropic・OpenAI とも学習へのデータ利用をオフにできる。
- **Aurornis**: 12 年取り組んだ著者の心情を推察し、急ぎの発表は先取権を主張する唯一の手段だとした。
  - **mofeien**: 過去 100 年に数百の人間による試みが失敗しており、情報漏洩では別手法の証明は説明できない。
- **rlt**: 数学者は進行中の仕事のハッシュをタイムスタンプ付きで公開すべきだ。
  - **cyberclimb**: OpenTimestamps で実現できる。
  - **incognito124**: 歴史的にはアナグラムで先取権を示した。

## 3. [Brazil's tax authority open-sources its tax calculator on GitHub under MIT](https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/receita-federal-publica-primeiro-codigo-fonte-aberto-no-github-e-amplia-transparencia-da-reforma-tributaria)

**Score:** 516 | **Comments:** 166 | [Post](https://news.ycombinator.com/item?id=50532613)

ブラジル連邦税務当局（Receita Federal）が、税制改革に関する税額計算ツールのソースコードを MIT ライセンスで GitHub に公開した。同局初のオープンソース公開で、透明性の向上が狙い。本文は取得せず、タイトルとコメントから要約した。

### Key Discussion Points

- **matheusmoreira**: 素晴らしいと歓迎し、リポジトリを調べるのを楽しみにしている。
- **usr1106**: 民主的な国は同様のソフトを OSS にすべきだ。
  - **trescenzi**: 米国も進めていたが、DOGE が最初に潰した。
  - **ivan_gammel**: 利用を強制される独占ソフトは隠れた税金だ。
  - **rib3ye**: ブラジルの決済システム PIX が米国決済事業者を置き換えつつある。
- **dlisboa**: 他国の人の話では、ブラジルは電子政府がかなり進んでいる。
  - **ifwinterco**: 電子政府は優秀だが治安は悪いという対照的な国に見える。
  - **hagbard_c**: 輸入品への課税が重く、国外価格の2倍以上になる。
- **madduci**: 市民の税金で作ったソフトはすべて公開すべきだ。
  - **loeg**: 軍事や国家安全保障は例外かもしれない。
  - **alansaber**: 税法の形式化に取り組んでいる。

## 4. [Lean verification of the Riemann Hypothesis](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/)

**Score:** 498 | **Comments:** 394 | [Post](https://news.ycombinator.com/item?id=50589618)

Lean と Mathlib コミュニティの共同声明。2026年11月20日に Alpöge が公開した 1700 万行の Lean ライブラリによる証明について、命題と証明の両方が正しいと認証し、完全な確信を表明した。コードは直接には Mathlib にのみ依存する。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis」も参照（検証対象の証明そのもの）
> **関連:** #10「Verification files for the Lean proof of the Riemann Hypothesis」も参照（同じ検証の関連ファイル）

### Key Discussion Points

- **gxd**: 証明済みと見なすのに何が残っているか、専門家の意見を求めた。
  - **jlev1**: 代数幾何の数学者として、残るものはないと考える。
  - **math_dandy**: RH は証明されたと考える。なぜ真かを学ぶのが楽しみだ。
  - **zug_zug**: この声明自体が専門家による結論だ。
- **meisel**: このような成果でさらに大きな問いが開かれるか。
  - **vessenes**: 新しい技法や分野間の連結が生まれる。
  - **SamuelAdams**: ヒルベルトの問題が出発点になる。
  - **xg15**: P ?= NP。
- **schleck8**: 物理側の Lean 版である Physlib を紹介。
  - **__rito__**: 理論計算機科学向けの CSLib もある。
  - **magimas**: 物理は形式化できないと反論した。
- **runtime_terror**: RH は真と想定されていたが、影響は何か。
  - **Arch485**: 意義は証明で使われた新手法にある。
  - **rramadass**: モデルの能力検証や自己学習に意義がある。
  - **dopa42365**: 主流メディアに出ておらず、AI 熱狂層が中心だ。
- **thejokeisonme**: 偽の反証が過去に検証器を通った例があり、検証器の独立性にも疑問。
  - **TwoFx**: その後 Lean は検証済みカーネルを搭載するなど改善された。

## 5. [Detonating a pile of lead azide](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really)

**Score:** 371 | **Comments:** 234 | [Post](https://news.ycombinator.com/item?id=50588982)

Derek Lowe のブログ。アイオワ陸軍弾薬工場に残る大量のアジ化鉛（コメントでは約 4.85 トンの計画と言及）の処理問題を扱う。science.org は取得できず、コメントからの要約。動かすと爆発しかねず、現地での起爆処理が検討されているようだ。

### Key Discussion Points

- **ChrisMarshallNY**: Derek Lowe の解説でようやく理解できた。
  - **slawton3**: 読後に疑問が増えた。
- **gpm**: 埋めてから起爆処理できないのか。
  - **goda90**: 低圧のテントで覆う案を想像するが、工学的に難しそうだ。
  - **maxerickson**: 既に実質埋まっており、重機の振動が引き金になりかねない。
  - **wongarsu**: TNT 換算で約 1.3〜1.8 トン相当の高性能爆薬だ。
- **cogman10**: 第二次大戦時に政府が建設し、1998 年から請負業者が運営。米軍の契約の問題点を示す。
  - **Merrill**: 運営会社 American Ordnance は Day & Zimmermann 傘下だ。
  - **MSFT_Edging**: 責任の連鎖にある全員が負うべきだ。
  - **panzagl**: 請負業者は人員不足で責任逃れが多い。
- **GolfPopper**: 問題は 2026 年 3 月に発覚とされるが、2025 年に中和処理の資料もある。
  - **wombatpm**: 2004 年にも備蓄の報告がある。
  - **Traubenfuchs**: 化学的破壊は小規模にしか使えない。
- **samuelselleck**: ロボットで樽を移せないか。
  - **Plasmoid**: 揮発性が高く、ロボットでも爆発リスクは残る。
  - **analog31**: 動かすこと自体が爆発の原因になる。

## 6. [My monitor was cutting my download speed by 75%](https://blog.tymscar.com/posts/studiodisplayethernet/)

**Score:** 316 | **Comments:** 161 | [Post](https://news.ycombinator.com/item?id=50587875)

モニター経由で接続した USB イーサネットアダプタのダウンロード速度が約 75% 低下した問題の調査記事。本文は取得せず、コメントから要約。モニターを経由する遅延で ACK が遅れ、アダプタのバッファが満杯になりパケットが落ちたとされる。

### Key Discussion Points

- **senko**: ghostty の io_uring が I/O 負荷判定を誤認させ、BG3 のシェーダコンパイルが抑制された別の奇妙な事例。
  - **pm215**: 同じ io_uring の問題が qemu-devel にも出ている。
  - **ajasmin**: io_uring_set_iowait で挙動を変えられる。
- **fancyfredbot**: 原因は ACK の遅延でバッファが埋まったこと。別のアダプタで解消した。
  - **jayd16**: 1 ACK あたりのパケット数を増やすのが修正の本質だ。
- **gh123man**: MacBook と Thunderbolt ドックで1年以上悩み、フロー制御有効化で緩和した。
  - **dcrazy**: ケーブルが能動か受動かの違いがある。
  - **xp84**: Apple 製以外の構成では Apple は保証しない。
- **throw0101d**: 2.5Gbps 回線は何に使うのか。
  - **Zyst**: Steam のゲーム DL や torrent で快適だ。
  - **Aurornis**: LLM モデルの DL に便利。
- **manarth**: 問題の本質は USB ネットワークスイッチで、モニターは無関係だ。
  - **xp84**: モニターを外せば正常で、相互作用の問題だ。
  - **intrasight**: 最初に直結で切り分ける。

## 7. [Jensen Huang's fall is bad news for Silicon Valley's accelerationists](https://www.economist.com/business/2026/11/19/jensen-huangs-fall-is-bad-news-for-silicon-valleys-accelerationists)

**Score:** 85 | **Comments:** 90 | [Post](https://news.ycombinator.com/item?id=50591835)

Economist の記事。Nvidia のジェンスン・フアン氏の辞任が加速主義者にとって悪い知らせだと論じる。本文は取得できず、コメントとタイトルからの推測による要約。

### Key Discussion Points

- **tymekpavel**: 主流メディアの報道と X 上のテック界隈の反応に大きな温度差がある。
- **ungovernableCat**: 政権関係者のリークによる政治的な失脚ではないかと推測。
- **neverrroot**: 中間選挙後の減速サイクルの一環だと見る。
- **CrimsonRain**: 失墜したのは Nvidia で、取締役会こそ責任を負うべきだ。
- **MiguelVieira**: 取締役会の声明で中身があるのは、行動規範に反する個人的行為の開示だけだった。

## 8. [Inkling-2-Mini in 5.4 GB Memory](https://github.com/ShinMegamiBoson/lookatmyquant)

**Score:** 56 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50591853)

量子化コンパイラのリポジトリで、同じファイルサイズで Q4_K_M より KL ダイバージェンスが 12 倍低いと謳う。Inkling-2-Mini を 5.4GB のメモリで動かす話。ページのタイトルと説明のみ取得できた。

### Key Discussion Points

- **Dwedit**: importance matrix を使う方式との比較は。
- **IronWolve**: MX 版のみなのか。

## 9. [PostgreSQL Extensions in Go](https://jespino.github.io/gopgext/)

**Score:** 53 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50591260)

gopgext は、TinyGo を使って素の Go コードから PostgreSQL 拡張を作るフレームワーク。`//gopgext:function` を付けた関数が SQL 関数になり、C のグルーコードやインストールスクリプトを自動生成する。実験的で本番利用は非推奨。

### Key Discussion Points

- **3eb7988a1663**: Go のマスコット文化に触れ、Ferris（Rust）はあまり見ないと指摘。

## 10. [Verification files for the Lean proof of the Riemann Hypothesis](https://math.mit.edu/~drew/grh/)

**Score:** 31 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50590441)

MIT の数学者のページで、Alpöge の RH の Lean 証明に関する検証ファイルを集めている。検証の状況を表で示す構成。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis」も参照（検証対象の証明）
> **関連:** #4「Lean verification of the Riemann Hypothesis」も参照（Lean コミュニティの検証声明）

### Key Discussion Points

- **1283agf**: Lean カーネル、証明、検証サイトまで Claude が関与しており、モノカルチャーだと皮肉った。

## Trends

- **AI による数学の証明と検証**: トップ10のうち #1・#2・#4・#10 が GRH/リーマン予想関連。AI 支援とみられる証明、人間の長年の研究との先取権争い、Lean による形式検証が焦点だった。「検証器の信頼性」や「物理科学など他分野への波及」が議論された。
- **公共ソフトの透明性**: ブラジル税務当局の OSS 化と、アジ化鉛処理に見る請負契約の問題で、公共インフラの説明責任が論点に。
- **低レイヤーの落とし穴**: USB・イーサネットのバッファ問題や量子化、Go 製 Postgres 拡張など、実装の細部に潜む性能問題が注目された。
- **テック業界の動向**: Nvidia のフアン氏辞任をめぐり、政治と業界の関係が議論された。
