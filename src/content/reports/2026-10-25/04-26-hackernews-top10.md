---
title: "Hacker News トップ10 (2026-10-25)"
date: "2026-10-25T04:26"
category: "summary"
summary: "ヒープなしの Goose 言語、AI時代の野心的なソフト開発、創造系雇用の減少とAI、Xbox と Netflix の IP 交渉など"
tags: ["hackernews", "summary"]
---

## 1. [The Goose Programming Language](https://aardappel.github.io/goose/)

**Score:** 296 | **Comments:** 185 | [Post](https://news.ycombinator.com/item?id=50224100)

ヒープアロケータ・GC・ライフタイム注釈を持たないメモリ安全なシステム言語。動的な値はコンパイラが静的に割り当てるデータスタック上にインラインで置かれ、スコープ終了がそのまま解放になる。リポジトリ内ベンチマークでは C++ や安全な Rust より高速で省メモリだと主張している。

### Key Discussion Points

- **Aardappel**: 作者本人が AMA を開設。
  - **adastra22**: AI 生成っぽいドキュメントを自分の言葉で書き直してほしい。設計のどこが作者の意図でどこが Claude の偶然か分からないと採用を検討できない。
  - **koolba**: 「レコードが C++ では 29 バイトの確保になるが Goose ではゼロ」という説明が理解できない。
- **malisper**: 固定数のスタックで、ランダムに文字列が増減するハッシュテーブルのような動的データをどう表現するのか。
  - **Aardappel**: 寿命が近いデータを同じ配列にまとめると効果が大きい。木のノードを任意に削除する場合は工夫が要る。
  - **progval**: 単一スタックの上に自前アロケータを組めばよいのでは。
  - **andsoitis**: 標準ライブラリに組み込みの `dictionary<K, V>` がある。
- **pradn**: 全プログラムを表現可能にする必要はなく、成長領域の数が静的に決まるなら使える。ただし GC がないのでスタックが膨らみ続ける点には注意。
  - **Aardappel**: 無制限に伸びるデータにはプールや再構築など別の手段が必要。
- **baud9600**: CSP のような軽量プロセスと型付きチャネルが欲しい。

## 2. [We should be more ambitious with the software we build](https://danluu.com/ambitious/)

**Score:** 264 | **Comments:** 225 | [Post](https://news.ycombinator.com/item?id=50225695)

Dan Luu による文章。Michael Malis の pgrust（Rust 製 Postgres 互換実装）を例に、AI で野心的なプロジェクトに取り組めるようになったと論じる。pgrust のテストは徹底していて、Postgres 本体のバグも複数見つけているという。大半の AI 製リライトは低品質なので、一見しただけでは「vibeslop」と切り捨てられがちだとも述べている。

### Key Discussion Points

- **blueblazin**: 新モデルが出るたびに 1 か月規模のものを作っている。Rust 製 Python インタプリタは失敗、低ポリの Google Earth 風エンジンなどは成功。
  - **genxy**: Fable 5.1 と Opus 5.5 で Rust 製 Python インタプリタを作り、3.12 のコードがほぼ通った。玩具版は 2 時間未満で、その半分はテスト収集と基準決めに使った。
  - **verdverm**: 難しいのはモデルよりプロセス。
- **j2kun**: 例が野心的に見えない。解く問題や提供する価値の側をもっと野心的にすべきだ。
  - **verdverm**: ソフトウェア企業以外が開発者をもっと評価すべきだ。
- **lubujackson**: AI は MVP までは一瞬だが、その後の複雑さは消せない。
  - **iperov**: AI 製で長期に使われている製品はまだ見ない。
  - **tptacek**: 良いものは結局、センスと専門性が仲介する。これが最も希望のある予測だ。
- **Supermancho**: AI での高速化は特定ケースに過適合した散らかったコードになりやすい。

## 3. [America has lost 200k of jobs in media, film and the arts. How much is AI?](https://www.apricitas.io/p/ai-and-the-fall-of-the-creative-class)

**Score:** 240 | **Comments:** 247 | [Post](https://news.ycombinator.com/item?id=50226419)

Apricitas Economics の記事（Wayback のスナップショットに基づく）。米国の創造系産業は過去4年で20万人超の雇用を失い、直近1年だけで約5万人減った。デジタル系の全サブセクターで雇用が減る一方、対面型エンタメは堅調で、AI の影響が疑われる。ただ、ハリウッドの集約やオフショア、SNS クリエイターへの移行と切り分けるのは難しい。映画・音声収録分野は最悪で、映画・TV 産業は4年で10万人超（約3分の1）を失った。

### Key Discussion Points

- **jparishy**: 記事が AI のせいと断定しない点を評価。効率を追う他産業と同じ構図だと見る。
  - **derektank**: 実質賃金の中央値は上がり労働時間は減っており、人々に金も時間もないという主張は誤りだ。
  - **segmondy**: Getty Images の破産や Stack Overflow の衰退を挙げ、AI が仕事を奪っていると言うべきだ。
  - **nradov**: 旧来メディアは無駄が多く、Joe Rogan は約5人で巨大な番組を作っている。
- **Animats**: 実際の減少は商業イラストが中心。減少の始まりは Stable Diffusion の登場と重なる。
- **sjdh76**: AI 以前から、コンテンツの供給が需要を大きく上回っていた。
  - **Gigachad**: ゲームは良作が多すぎて遊びきれず、AI で速く作る意味が分からない。
  - **jubilee33**: 創作は個人的で儲からないものになり、アーティストは実演や実物制作で稼ぐことになる。
- **999900000999**: 皆お金がなく、まず削られるのが娯楽。ストリーミングは細分化して割高になった。
- **jjmaxwell4**: インフルエンサーという雇用増を記事が見落としている。

## 4. [Listen and read USA nuclear forces Emergency Action Messages, heard on 11175 kHz](https://missileer.watch)

**Score:** 144 | **Comments:** 95 | [Post](https://news.ycombinator.com/item?id=50224422)

HFGCS の 11175 kHz で傍受した米核戦力の緊急行動メッセージ（EAM）を、音声と文字で閲覧できるサイト。取得できたページは JavaScript 描画で、サンプルデータの注記があった。録音と解読は CC0 で公開されている。

### Key Discussion Points

- **rafram**: サイトの文面が AI 生成らしい。新しい Claude モデルへの切り替えを勧める。
- **LeoPanthera**: AI 生成物がまだ明白なのは良いことだ。
- **none_to_remain**: Skyking のテストメッセージにはかつて Iron Maiden や The Cure などのバンド名が使われた。誤送信で「DISREGARD 'THE CURE'」といった訂正が核指揮通信に流れたこともある。
- **ytxm**: Skyking の解説ページを紹介。
- **jacquesm**: 次の13分に不安なときに落ち着く音だ、と冗談を述べた。

## 5. [SpeedCrunch 1.1](https://www.speedcrunch.org/)

**Score:** 102 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=50224210)

無料でオープンソースの高精度科学計算機のバージョン 1.1。最大50桁の精度、複素数、140以上の関数、ユーザー定義の変数・関数・単位、行列、タブやペインによる複数セッション、40以上の翻訳などを備える。Windows / macOS / Linux 対応。

### Key Discussion Points

- **Gormo**: 長年の利用者。0.12 から入力欄が不必要に大きくなり、入力ラグも出たと不満。
- **andix**: 1.0 と 1.1 が約10年ぶりの更新ではないか。
- **sammy2255**: 数年来タスクバーに置いている愛用ツール。
- **unanimous**: `1/2(-9.8)` が -4.9 になるよう演算順序のバグが修正され、式も `1 / 2 × (−9.8)` と描画される。
- **dang**: 過去の関連スレッドを紹介。

## 6. [Small Programs and Languages](https://ratfactor.com/cards/pl-small)

**Score:** 61 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50225674)

ratfactor による、小さなプログラムや言語の魅力についてのメモ。200行や25行のコードなら読む気になれ、46バイトの「Forth」のような極小の実装は「頑張れば理解できる」と思える。例として ijk（25行の DOM 差分ライブラリ）や APL の Incunabulum を挙げている。

### Key Discussion Points

- **zzo38computer**: uxn で、39バイトの hex デコーダ、125バイトの JSON→NDJSON 変換、1024バイトの BLAKE2s などを書いた。
- **bryancoxwell**: 開発への関心が戻ってくる読み物だった。
- **anthk**: t3x.org と JimTCL を紹介。
- **rramadass**: Jon Bentley『Little Languages』などの関連文献を紹介。

## 7. [Xbox Turns Down Netflix $500M Offer](https://www.darkhorizons.com/xbox-turns-down-netflix-500-million-offer/)

**Score:** 57 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=50227892)

Puck の報道によると、Netflix は Xbox キャラクターの映像化権について7年契約で5億ドルを提示した。Microsoft は8億ドルで返し、交渉は決裂した。Microsoft は今後、包括的な独占契約ではなく、より小さな案件を複数のパートナーと個別に進める方針だという。Xbox 側は「IP への関心は過去最高」とコメントしている。

### Key Discussion Points

- **robmccoll**: Xbox の戦略が理解できない。Microsoft は投資が実るのを待たずに損切りしがちだ。
- **wewewedxfgdf**: Xbox 自体を5億ドルで買う話かと思った。
- **donbox**: Amazon の Fallout は Disney の Andor に並ぶ出来で、案件ごとの契約は合理的。
- **jdw64**: Game Pass の影響に加え、Redfall や Starfield など自社タイトルの品質管理の失敗も批判の一因だ。
- **jackbeanstalk20**: Microsoft は IP を手放したほうが良い。

## 8. [Cerebras Deploys Trillion-Parameter AI Models](https://www.cerebras.ai/blog/how-we-deploy-trillion-parameter-frontier-models-on-cerebras)

**Score:** 39 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50227356)

Cerebras の技術解説。WSE-3T ウェハ1枚のオンチップメモリは44GBしかないため、約3兆パラメータの Kimi K3（4bit 量子化）を層単位で複数ウェハに分割して載せる。全注意層は KV キャッシュのため1ウェハに1層とし、線形注意層は状態が固定長なので余裕がある。これでパイプラインに多数のリクエストを流し、毎秒1000〜2000トークン超を実現するという。

### Key Discussion Points

- **xpct**: ウェハ内の2Dメッシュで、層のデータフローが実際にどう実現されるのか。
- **n_u**: 「GPU のバッチと違う」とは、ハードウェアの制約ではなくソフトウェアの足場の問題ではないか。
- **jubilee33**: どこで買えるのか。
- **therein**: 極端な速度は「超知能」のような質的な体験になり得る。
- **eulgro**: ウェハ1枚あたり平均20kW とすると全体で約1.18MW。1500トークン/秒・190並列で約4.1J/トークンになる。

## 9. [FindMyWeb: Apple Find My, reverse enginiered](https://codeberg.org/Misom/FindMyWeb)

**Score:** 38 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50226646)

Apple の Find My ネットワークをリバースエンジニアリングして使うセルフホスト向けプロジェクト。Python のバックエンド、Vue / TypeScript のフロントエンド、ファームウェア（C）で構成される。Codeberg のページは README 本文が取得できず、リポジトリの構成とコメントから把握した。

### Key Discussion Points

- **lanrat**: FindMy.py ライブラリの UI のようだ。
- **ashley95**: Python ライブラリのラッパーにすぎないのでは。
- **HnUser12**: 他人のネットワークを使うのに「自分で所有」と言えるのか。アカウント停止の恐れもある。
- **Drupon**: 「名前: 名詞、過去形の動詞」型のタイトルは書き換えてほしい。

## 10. [Five Qwen3.8-27B models outperform Fable 5 Using GVS5H Harness](https://github.com/slee-persis/GVS5H)

**Score:** 8 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50228167)

GVS5H（Gorilla vs. 5 Humans）は、同一モデルの新しいインスタンス群が台帳を介して問題を分解・協調する、訓練不要の自己オーケストレーション手法。README は、Qwen3.8-27B を5つ使うと LiveCodeBench Hard で Claude Fable 5 に並ぶと主張している。まだコメントはない。

## Trends

- **AI とソフトウェア・雇用**: Dan Luu の野心論、創造系雇用の減少、Cerebras の高速推論、5体の小型モデルを束ねる手法と、AI が作り方・働き方・コストを変えるという話題が目立った。Goose や極小プログラムの話にも「AI 生成のドキュメントか」という論点が出た。
- **小さく・素朴に作る**: ヒープなし言語 Goose、極小の言語やプログラム、SpeedCrunch のような長寿ツールなど、複雑さを抑える設計への関心が高い。
- **エンタメ産業の再編**: Xbox の IP 交渉と創造系雇用の減少は、ストリーミング時代のコンテンツ経済という点でつながる。
