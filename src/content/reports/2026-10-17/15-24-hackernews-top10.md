---
title: "Hacker News Top 10 サマリー（2026年10月17日）"
date: "2026-10-17T15:24"
category: "summary"
summary: "Tesla Roadster のスラスター搭載デモ、DeepSeek V4.1 Flash 1017、Ultramarine 1 Flash、太陽光が原子力を初めて上回った話題など"
tags: ["hackernews", "tech", "ai", "energy"]
---

## 1. [Tesla Roadster](https://www.tesla.com/roadster)

**Score:** 1535 | **Comments:** 2797 | [Post](https://news.ycombinator.com/item?id=50112657)

Tesla が新型 Roadster を公開。圧縮ガス（コールドガス）スラスターと電動ファンによる吸着を使い、垂直走行や天井走行、極短時間の 0-60mph 加速、ホバリング的な挙動を見せるデモが話題になった。公式ページは取得できなかったため、コメントから内容を推測している。スラスターを増やした上位仕様は招待制・1人乗りで公道走行不可との指摘がある。

### Key Discussion Points

- **synapsomorphy**: 実際に飛ぶとは驚きで工学的には素晴らしいが、経済的に成立しないモデルに労力を注いでいる。
  - **grey-area**: 「制御された落下」に近く、実用性はなく Tesla の財務から目をそらすための見せ物だ。
  - **Reason077**: 燃焼式ロケットではなく、どちらの仕様もコールドガススラスターで、違いはスラスターの数だ。
  - **lisper**: 数秒しか持たない芸当で、飛行仕様は公道走行不可だろう。
- **CommieBobDole**: 技術デモとしては面白いが、製品としての意味が不明。高圧タンクが室内を占めるか噴射時間が数秒に限られ、事故時にタンクが破裂する危険もある。
  - **m463**: 圧力容器自体は CNG 車や水素車でも使われている。
  - **jttnr**: Top Gear の回では圧力容器はそれほど大きくは見えなかった。
  - **jameskilton**: フルスラスター版は1人乗りで招待制、公道走行不可だ。
- **mNovak**: スラスターより、1トン超の車が天井に張り付く吸着走行のほうが驚きだ。ファンによる吸引なら持続時間も長い。
  - **jacquesm**: 小さな吸盤でも大きなガラス板を持ち上げられるように、大気圧が支えている。
  - **tumdum_**: McMurtry の逆さ走行の例を紹介。
- **consumer451**: SpaceX/Tesla の Starman に次ぐマーケティング上の傑作だが、スラスターの噴射は周囲の人に危険だ。一方でプレオーダーが納車される保証はないとの報道もある。
  - **afgrant**: Stanford の自動運転車「Stanley」を忘れるべきでない。
  - **moogly**: Volvo の Epic Split を思い出す。
- **chunkyslink**: 空飛ぶ車より、きれいな水と安定した気候とミツバチが欲しい。
  - **benrutter**: 空飛ぶ車より良い公共交通のほうが皆幸せになる。
  - **larusso**: 以前も「金持ちに買わせて本来の使命の資金にする」と言われたが、今も信じる人はいるのか。

## 2. [DeepSeek: DeepSeek v4.1 Flash 1017](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)

**Score:** 444 | **Comments:** 229 | [Post](https://news.ycombinator.com/item?id=50129121)

OpenRouter に載った DeepSeek V4.1 Flash の 2026-10-17 スナップショット。552B パラメータ構成のスパース MoE で、入力時 8B・出力時 16B をアクティブ化し、KV キャッシュ容量は従来 Flash の約4分の1に減る。画像理解をネイティブに備え、コーディング、ターミナル、コンピュータ操作エージェントや長期タスク向けと位置づけられている。

> **関連:** #3「Ultramarine 1 Flash」も参照（どちらも安価なオープンウェイト系モデルの新リリース）

### Key Discussion Points

- **gregwebs**: 公式ニュースによるとコーディング系ベンチマークで大幅に向上し、比較対象の Sol 5.6 に11本中10本で勝っている。コード作成は DeepSeek に戻し、計画とレビューは Opus/Sol に任せる。
- **OsrsNeedsf2P**: ベンチマークでは Sol や Gemini に及ばないが、速度、CoT の可視性、不意にブロックされないこと、コスパの点で体感が良い。
  - **Philip-J-Fry**: 賢すぎず開発者が書くようなコードを出すので、抽象化の制御を手元に残せる。
  - **UncleOxidant**: それなのに次は Z.ai（GLM）を契約するのかと指摘。自分は GLM-5.3-flash 派だ。
  - **igetspam**: 脆弱性調査では、フロンティアモデルは安全側に寄りすぎて邪魔をしてくると感じる。
- **AmazingTurtle**: C++ ゲームエンジンのコードベースを4モデルにレビューさせた。DeepSeek V4.1 Flash は20分で P1 を1件だけ見つけ、GPT 6.1 Sol は4分半で P1 を2件、P2 を1件見つけた。
  - **vgalin**: LLM は非決定的で、1回の試行では結論を出せない。
  - **bel8**: max ではなく high で試すと良い。max は冗長で、pelican SVG は max で11分、high で1分だった。
  - **mosselman**: 公開リポジトリだとモデルが既知の問題を知っている可能性がある。
- **simonw**: pelican SVG を max 設定で試したところ11分以上かかったが、deepseek-v4-flash-0731 よりは改善している。
  - **zarzavat**: アニメーション付き three.js の pelican も試すべきだ。
  - **bagacrap**: 最良の自転車は「low」だ（冗談）。
- **liuliu**: 適切な量子化にはあと2〜3日かかるが、64GiB 以上の RAM の Mac なら良いモデルだ。M5 Ultra でプロンプト処理約3400 tok/s、生成約50 tok/s が出る。

## 3. [Ultramarine 1 Flash](https://www.paperinstruments.com/ultramarine)

**Score:** 325 | **Comments:** 100 | [Post](https://news.ycombinator.com/item?id=50106747)

Paper Instruments が公開した、専門的なナレッジワーク向けのエージェントモデル。公式ページは本文が取得できなかった。コメントで引用された説明によると、オープンな GLM-5.3 Flash に大規模強化学習を施し、評価した6つのナレッジワーク系ベンチマークすべてでベースモデルより向上したという。

> **関連:** #2「DeepSeek: DeepSeek v4.1 Flash 1017」も参照（どちらも安価なオープンウェイト系モデルの新リリース）

### Key Discussion Points

- **kadoban**: ベースは GLM-5.3 Flash だと判明。評価は後学習の出来次第だ。
  - **ra**: 自分も GLM 5.3 Flash をナレッジワークに使っているので試す。
- **CobrastanJorji**: 結果表では自社より劣るモデルとだけ比較し、コスト対スコアの図では上位モデルが現れる。見せ方が誤解を招く。
  - **digitcatphd**: 統計で盛るモデルは即座に除外する。
  - **lwhi**: フロンティアモデルには及ばないが60倍安いと、正直に示すほうが購入したくなる。
  - **arendtio**: 単に自社列をハイライトする書式にしただけだろう。
- **hypfer**: 資料作成のようなタスクに使うハーネスは何か。
  - **hobofan**: Python 実行環境中心のハーネスか、ファイル形式ごとの専用ツールを足す構成が一般的だ。
  - **0x1062**: 自作のナレッジワーク用ハーネス Radix を紹介。
  - **rsync**: pi ハーネスで CLI の PDF/LaTeX ツールを使わせればよい。
- **bythreads**: GLM 5.3 Flash にコンテキスト注入とガードレールを足しただけに見える。
  - **boutell**: 大規模 RL を実際に施したなら、よくあるスタートアップほど簡単ではない。
  - **cyanydeez**: オープンソースを土台に事業を作るのは昔からの流れだ。
  - **N_Lens**: 詐欺的だ。
- **vehemenz**: Haiku、GPT-mini、DeepSeek V4 0731 と比べた限定的なテストでは、価格性能比は宣伝どおり。

## 4. [Show HN: Llmspeed – feel how fast a local LLM runs before you buy the hardware](https://llmspeed.dev/)

**Score:** 171 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50127979)

GPU、Apple Silicon、CPU などのハードウェアとモデル・量子化の組み合わせで、ローカル LLM の生成速度を体感できるシミュレーター。実測値は r/LocalLLaMA や localscore.ai などのコミュニティベンチマークから得ており、実測がない組み合わせは類似構成からの推定や仕様からの予測になる。オープンソース。

### Key Discussion Points

- **lopotubez**: この種のベンチマークは主流の構成しか見ておらず、トークン量も少ない。自分は GTX 1070 Max-Q 8GB の古いノートで Qwen 3.5-35B-A3B の4bit量子化を 16-19 tok/s で動かしている。
  - **PaulKeeble**: ローカルでは MoE のほうが密モデルよりハードを活かせる。
  - **rhdunn**: A3B は1トークンあたり約3Bがアクティブという意味で、4bit なら8GB のカードにも収まる。
  - **samuell**: こうした実践知の情報源を知りたい。
- **thadk**: M4 Max 128GB で Gemma4 31B の TTFT が36秒、26B A4B が4.7秒という制約を再現できて助かる。
- **tom_alexander**: 10万円超の投資の判断材料になり、各モデルをダウンロードして試す手間もなくなる。9070XT で Qwen3.6 27B FP16 を選ぶと「動かない」と出る点が不満だ。
- **adrian17**: 16GB の 5060Ti での Gemma 26B-A4B の値は楽観的に見える。KV キャッシュ量も実測より小さく見積もられている。
- **Jabdoa2**: vLLM を業務で動かした経験では、実際のエージェント的コーディングは60k〜140k のプロンプトになり、デコード速度はベンチマークの半分から3分の1になる。

## 5. [Solar surpasses nuclear power globally for first time – pv magazine Global](https://www.pv-magazine.com/2026/09/29/solar-surpasses-nuclear-power-globally-for-first-time/)

**Score:** 120 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=50131256)

pv magazine は Cloudflare にブロックされ取得できなかったため、コメントの引用から要約している。太陽光の発電量が世界で初めて原子力を上回った。2025年3月から2026年6月まで、太陽光か風力のどちらかが毎月原子力を上回り、世界の太陽光設備は510GW 増えて2,383GW、風力は159GW 増えて1,291GW になった。原子力は設備容量が1.5GW 増の399.5GW にとどまる。

### Key Discussion Points

- **jfengel**: 月次の発電量（エネルギー）ベースの話で、設備容量（パワー）を引く記事より意味がある。
- **gryfft**: 記事から設備容量の数字を引用している。
- **philipkglass**: 原子力は設備利用率が高いが、太陽光は急成長して実発電量でも逆転した。風力もまもなく原子力を超え、次の節目は水力の超越になる。
  - 2件のリプライは、データのリンクや補足が中心。
- **smartmic**: 化石燃料や原子力への依存は地政学的リスクになる。基底負荷もバッテリーなどで代替できる。
- **jl6**: 気を緩めず、化学原料としての炭化水素まで含めて置き換えるためにクリーンエネルギーをさらに増やす必要がある。

## 6. [Making Chicken Transparent Using Dorito Dust](https://chillphysicsenjoyer.substack.com/p/making-chicken-transparent-using)

**Score:** 44 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50131213)

Substack の記事は取得できず、Wayback にもスナップショットがなかったため、タイトルとコメントからの推測。ドリトスの粉末を使って鶏肉を透明にするという実験で、コメントでは調味料の成分が組織の光の散乱を減らすらしいと受け止められている。

### Key Discussion Points

- **comrade1234**: Cheetos の袋でコーティングだけの塊を見つけた思い出話。
- **waltbosz**: ドリトス風味の鶏肉を作ろうとして、偶然鶏胸肉が透明になったのが発見の起源かもしれない。
- **JSR_FDED**: 軽い話題だが、ドリトスの化学的な性質や肉を異質なものに変える発想は食の自然さから遠く、少し気味が悪い。
- **greyface-**: 関連動画として YouTube の「I made transparent chicken」を紹介。
- **rdmuser**: 加熱後に普通の鶏肉と比べてどう見えるのか気になる。

## 7. [Rendering pretty sky in Around The World game](https://frozenfractal.com/blog/2026/10/12/around-the-world-34-a-pretty-sky/)

**Score:** 35 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50119315)

海洋探検ゲーム「Around The World」の開発ブログ第34回。前回作った雲に対し、海と空と雲が合わさった全体の見た目に不満があり、povray で作った雲の散乱ルックアップテーブルを見直すなど、小さな調整で見栄えを改善した内容。povray が多重散乱を実際にはシミュレートしていないのではないかという疑いにも触れている。

### Key Discussion Points

- **hbrav**: ゲームのコンセプトとして気に入った。
- **embedding-shape**: 水平にも垂直にも雲の中を飛べる、最近出た Ace Combat 8 の独自ボリュメトリック雲が素晴らしく、VR ではさらに良い。
- **kylecazar**: オープンワールドで航海するゲームは好みで、完成したらぜひ遊びたい。

## 8. [The First Candid](https://www.newyorker.com/magazine/2026/10/19/the-first-candid)

**Score:** 16 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50121506)

The New Yorker 2026年10月19日号の記事。本文は取得できず（ペイウォール、Wayback のスナップショットもなし）、タイトル以外の内容は不明。コメントも「ペイウォールで読めない」の1件のみで、内容を推測できる材料がなかった。

### Key Discussion Points

- **donbox**: ペイウォールで読めない。

## 9. [Show HN: Esp32sim – Run ESP32 firmware in the browser](https://github.com/mikroverk/esp32sim)

**Score:** 10 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50131189)

Rust 製の ESP32 エミュレータ。Xtensa（ESP32、S3）と RISC-V（C3、C6）の4種の SoC を命令レベルでエミュレートし、本物のマスク ROM、2段目ブートローダー、無修正のアプリイメージを起動して FreeRTOS まで動かす。クラウドやアカウント不要で MIT ライセンス。ST7789 や WS2812 などのディスプレイ・周辺機器にも対応する。

## 10. [A Tudor Life in the Time of Plague](https://www.historytoday.com/archive/history-matters/tudor-life-time-plague)

**Score:** 6 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50082358)

History Today の記事で、サイトがボット検証で本文を返さず、コメントもないため、タイトル以外の内容は取得できなかった。タイトルからは、ペスト流行下のテューダー朝時代の暮らしを扱う歴史記事だと推測される。

## Trends

- **AI モデルのリリースと検証が中心**: DeepSeek V4.1 Flash（#2）と Ultramarine 1 Flash（#3）はどちらも安価なオープン系モデルで、コメントでは速度、コスト、透明性が評価軸になっていた。ベンチマークの見せ方への批判や、モデルごとの実地比較も目立つ。ローカル LLM の速度を事前に確かめる llmspeed（#4）も同じ流れにある。
- **派手なデモへの冷めた見方**: Tesla Roadster（#1）は約2800コメントを集めたが、実用性や安全性、マーケティング色を疑う声が多かった。
- **エネルギー転換**: 太陽光が発電量で原子力を超えた（#5）ことが、実績としてポジティブに受け止められた。
- **個人開発・ニッチ技術**: ゲームの空の描画（#7）、ESP32 エミュレータ（#9）、透明な鶏肉（#6）など、個人発のものづくりも並んだ。
