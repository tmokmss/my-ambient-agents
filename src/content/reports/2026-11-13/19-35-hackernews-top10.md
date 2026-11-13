---
title: "Hacker News トップ10 サマリー 2026-11-13"
date: "2026-11-13T19:35"
category: "summary"
summary: "Coway 空気清浄機のクラウド脱却リバースエンジニアリング、1960年の人口『終末予言』論文、AI によるゲーデル手稿解読など上位10件"
tags: ["hackernews", "tech", "ai"]
---

## 1. [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/)

**Score:** 549 | **Comments:** 154 | [Post](https://news.ycombinator.com/item?id=50474959)

Wi-Fi 対応の Coway Airmega IconS を Apple Home 連携で使いたい筆者が、クラウド依存の既存 Home Assistant 連携をやめてローカル制御にするため通信を解析した記事。Raspberry Pi を AP にして mitmproxy で通信を復号・記録し、ファンがルート CA 証明書を平文 HTTP で取得するなどの脆弱な設計が見つかった（記事は途中までの内容に基づく要約）。

### Key Discussion Points

- **Aurornis**: 今回の LLM を使ったリバースエンジニアリングの波で、誰でも悪用できたはずの杜撰な実装が次々に露呈している。面倒な作業のコストが LLM で下がったことが大きい。
  - **tedd4u**: ルート CA を平文 HTTP で取得する設計判断の背景が気になる。
  - **tclancy**: 仕組みを調べるコストがほぼゼロになるなら、賢い企業はアプリを読み取り専用で公開するだろう。
  - **eddieroger**: LLM 以前は誰も思いつかなかった攻め筋を、多くの人が試せるようになった。
- **throwitaway222**: 市販の HEPA 空気清浄機より、20 インチのボックスファンに MERV13 フィルターを4枚付ける Corsi-Rosenthal Box の方が風量あたりの性能が高い。
  - **vikramkr**: フィルター3枚の三角形でも作れる。見た目も作業場には合う。
  - **instaclay**: 見た目にお金を払う人は多く、リビングに置くには好みが分かれる。
  - **snk**: 独身時代にファン＋フィルターを使ったが、見た目への基準は人による。
- **bombcar**: Vornado のファン、Broadlink RM4、Shelly スマートプラグ、CO2 センサーと Claude・HASS で、CO2 濃度に応じて動くファンを作った。
  - **nijave**: Vornado Strata の 433MHz デコーダーを rtl_sdr に PR した。
  - **reasonabl_human**: 同様の構成で、センサーの熱による測定ずれを補正した。
- **tda**: Haier エアコンの未使用 Wi-Fi モジュールが ESP32 だったため、配線して Claude で ESPHome を動かし、ローカル制御を実現した。
- **bob1029**: 家庭の空調を送風のみで24時間回すのが空気清浄の最善策。可変速 ECM ファンならコストも低い。
  - **hamdingers**: これだけ大量の空気を濾過するなら HEPA は必須ではない。
  - **ashdksnndck**: ブロワーモーターの寿命や交換の手間を理解してから負荷を上げるべき。
  - **dgacmu**: 数回通せば十分捕集できる MERV13 が実用的。ただし圧損に耐えられない機器もある。

## 2. [Doomsday: Friday, 13 November, A.D. 2026 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291)

**Score:** 377 | **Comments:** 266 | [Post](https://news.ycombinator.com/item?id=50482379)

1960年に Science 誌に載った有名な論文で、人口増加の双曲線的な外挿から2026年11月13日（金）に人口が無限大に達すると予測した。science.org は取得できず、Wayback にもスナップショットがなかったため、コメントからの推測に基づく要約。今日がまさにその日付で話題になっている。

### Key Discussion Points

- **dnlgrmm**: 過去データの外挿がいかに単純すぎるかを示す好例。世界人口は頭打ちに近づき、先進国はむしろ人口減少を懸念している。
  - **scrumper**: ただ経済面の懸念は成長前提で、問題の多くは人口過剰が原因だとも言える。
  - **DaveChurchill**: 現役世代の税で退職世代を支える仕組みのため、人口減少は現実の問題になる。
  - **dansitu**: 書籍『More Everything Forever』が、シグモイド曲線を指数関数と取り違えるシリコンバレーの思想を論じている。
- **chiph**: 1970年代初頭は人口過剰が大きな話題で、映画『ソイレント・グリーン』がその例。
  - **usefulcat**: 『The Expanse』は資源が潤沢な場合の別の予測を描く。
  - **larodi**: 人口問題の認識が文化に与えた影響が大きいのではないか。
  - **fullstop**: 映画のネタバレを避けるなら予告編は見ない方がよい。
- **MeteorMarc**: 「無限大に近づく」という表現はほぼ無意味で、単調な数列はどれも無限大に近づく。
  - **patwolf**: 垂直漸近線を冗談めかして表現したものだろう。
  - **gibspaulding**: 外挿が正しければ1960年も2026年も同じだけ「無限大に近い」ことになる。
- **orsorna**: 1960年時点でもシグモイド曲線による人口モデルは知られていたはずだ。
  - **delichon**: 当時は食料が尽きて頭打ちになると考えられていた。
  - **tedd4u**: 著者は電気工学の教員で、専門外の分野への投稿だった。
- **m000**: 表示されている文書は原本のものか、後の再現かを質問。
  - **cubefox**: 原本である。

## 3. [AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths)

**Score:** 174 | **Comments:** 35 | [Post](https://news.ycombinator.com/item?id=50486748)

Guardian は取得できず、Wayback にもスナップショットがなかった。タイトルとコメントによると、ヘルシンキ大学の Jan von Plato 氏らが AI の助けでゲーデルの速記ノートを解読し、数百の証明済み定理が含まれているとされる（コメントからの推測を含む）。

### Key Discussion Points

- **hobo123**: ゲーデルが使った Gabelsberger 速記が失われたという記述は疑わしい。父が没年（2020年）までその速記の自分用の変種でメモを取っていた。
- **imbiased**: ゲーデルはアインシュタインとの散歩で、自分の業績が忘れられることを心配していたという。
- **semolinapudding**: ゲーデルは最も重要な論理学者だが出版が少なく、Dialectica 解釈の発表も着想から約20年後だった。この成果には大きな期待がある。
- **jdelman**: 翻訳に専門家がどこまで必要だったのか。汎用モデルが一発で翻訳できたのか気になる。
  - **rsoto2**: 数十年前の OCR でも解読できたのではないか。
- **sheikhnbake**: 定年を控えた研究者が AI で自分を不要にした例かもしれない。
  - **arbot360**: AI が ERC から210万ユーロの助成金を獲得できたら教えてほしい。
  - **alterom**: むしろ、AI で自分が不要になるのを防いだ例だ。

## 4. [A technical vision for the Haskell ecosystem](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078)

**Score:** 131 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=50484235)

Haskell Foundation の技術リーダーシップ委員会（TLC）が発足し、ビジョンを公開した。Haskell は人間が手で書くのにも、レビューが重要な AI ワークフローにも向く言語だと位置づけ、資金を要する取り組みについて、軽量な提案プロセスで企業・請負人・ボランティアの参加を募っている。

### Key Discussion Points

- **ecshafer**: Haskell は簡潔でトークン効率が良く、安全性も高いのに、AI との組み合わせで普及しないのはなぜか。
- **pmkary**: Haskell は好きだが、C や JavaScript のようにデスクトップ・モバイル・Web に使える普遍性がほしい。
- **KolmogorovComp**: コンパイル時間は問題だが、フルビルドよりインクリメンタルビルドの改善に注力すべき。
- **georgewsinger**: Haskell 製 VR コンポジタにライブのランタイムデバッグを導入した記事を紹介。
- **smitty1e**: ビジョンが初心者体験の重視を掲げるのに対し、Gemini に非自明な関数例を出させると難しい型シグネチャが出てきた。

## 5. [Lonewolf 0.3 – A standalone XMPP server written in Rust](https://github.com/lonewolf-im/lonewolf/releases/tag/v0.3.0)

**Score:** 100 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=50484007)

Rust 製のセルフホスト型 XMPP サーバー。単一バイナリと組み込みストレージで運用でき、軽量でコア RFC に準拠し、各種制限を設定できる。プレ1.0で、クラスタリングは今後対応。コードやドキュメントの多くは AI コーディングエージェントで書かれ、メンテナーが設計とレビューを担うと README に記載されている。

### Key Discussion Points

- **nicoco**: 標準プロトコルの実装が増えるのは歓迎だが、Prosody から乗り換える理由は今のところない。
- **rootnod3**: プライバシーとセキュリティが求められるチャットサーバーに AGENTS.md があるのは大きなマイナス。
- **RadiozRadioz**: サーバー側に革新は不要で、Conversations のように洗練されたデスクトップクライアントが普及の鍵。
- **Muromec**: Jabber 全盛期は ICQ などとのゲートウェイがあった。今は Matrix がその位置にいる。
- **jakswa**: コーディングハーネスがサブエージェントの通信を「IRC」と呼ぶ例を見た。XMPP や IRC のような枯れた技術が AI 時代に復活するかもしれない。

## 6. [After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa)

**Score:** 94 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50487185)

LeCun らの JEPA 世界モデル LeWM（ベンチマークは Push-T）で600回の実験を行った記録。予測器をシミュレータの物理に置き換える比較や、メモリグラフの変換で追加学習なしに長期タスクの中間ゴールを作る手法を報告している。

### Key Discussion Points

- **reasonabl_human**: 実践的な学習は良いが、階層的計画やサブゴールは既知の概念で、「発見」より個人の学習記録に近い。
- **taikon**: モバイルで背景に微妙な虹色の動きが出る。
- **freecodeio**: OLED モニターでは背景エフェクトが眩しい。
- **sashank_1509**: AI が書いたような長文だ。短く要点を絞ってほしい。
- **Ohentis**: アニメーションのせいか、スマホではほぼ使えない。

## 7. [It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/)

**Score:** 64 | **Comments:** 31 | [Post](https://news.ycombinator.com/item?id=50487522)

Reddit は 403 で取得できず、コメントからの推測による要約。教師が、学校の iPad で生徒が PowerPoint を開くまでに、複数のサービスへのログインを含む16回のクリックが必要だと訴えている。

### Key Discussion Points

- **slg**: 官僚主義の典型例。正しく運用すれば技術は教育を改善できるが、規則や構成要素が多すぎる。
- **phreack**: 問題は iPad より、Clever と Google 連携という二重のサービスにあるようだ。
- **Shalomboy**: 自校は K-8 で Chromebook を使う。iPad をノート PC 代わりにするのは、IEP の生徒には特に厳しい。
- **rootusrootus**: iPad 固有の問題というより、学校が選んだサービス構成の問題。
- **vondur**: Canvas から直接ファイルを取得するか、命名やアプリ選択を整理すれば済むのではないか。

## 8. [Show HN: Isometric SF – A pixel-art map of the SF Bay Area](https://isometricsf.com/)

**Score:** 43 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=50487228)

Google Photorealistic 3D Tiles を元に、ベイエリアをアイソメトリックなピクセルアート風地図にしたサイト。タイルは CC BY-NC 4.0 で非商用利用なら再利用できる。

### Key Discussion Points

- **mlmonkey**: 元画像は Google の 3D Tiles API 由来だが、投稿者が触れていない。
- **kenferry**: 実際にはピクセルアートではないのでは。
- **leugim**: 学習後の描画コストは1km²あたり約0.4ドル（約15ドルで学習）だった自作の Tiny Valencia と比較し、投稿者に費用を質問。
- **cmdoptesc**: 人間が書いたドキュメントを評価。地図の向きは北か西が上がよい。
- **dnlzro**: 似た作品は最近多いが、効率化と品質の両立は見事。ただしズームすると真のピクセルアートではない。

## 9. [Models can now transmit viruses in weight-space](https://www.alphaxiv.org/abs/2611.weight-space-misfolding)

**Score:** 40 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50487762)

alphaXiv の論文「Weight Space Misfolding」。フロンティアモデルが他のモデルの重みを直接書き換えて不正な挙動を誘発できる可能性を扱い、プリオン病のミスフォールディングになぞらえている。自己増殖や実際の攻撃能力は示していないが、その構成要素は信頼できる形で存在すると述べる。

### Key Discussion Points

- **aatd86**: オープンウェイトとモデルのハッシュ化を求める理由が増える。
- **shevy-java**: 「zero-weight virus」とは何かわからない。
- **dare944**: 抽象によれば自己増殖や攻撃能力は未実証。構成要素が存在することが論点。

## 10. [The avalanche that hit math is coming for AI development](https://www.dwarkesh.com/p/rsi)

**Score:** 21 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50487854)

Dwarkesh Patel のエッセイ。検証可能な領域での AI の進歩を踏まえ、数か月〜数年で最高の人間と並ぶ AI 研究者が現れ、2030年までにあらゆる分野の専門家級の AI が登場すると予測している。根拠として、METR が Anthropic の進捗速度が1年前の2倍になったと評価した点を挙げる。

### Key Discussion Points

- **mentalgear**: 1回で何でも学ぶロボットアームが実現すれば、肉体労働の自動化も近い。
- **zaler**: AI が自己加速するほど民間企業とオープンソースの差が広がるため、分散した管理が重要。
- **dominotw**: 多くの企業が AI の効果を期待するが、利益や新製品には結びついていない。
- **quicklywilliam**: 根拠の薄い確率と図に基づき、不確かな状況に誤った類推を当てはめた議論だ。

## Trends

- **AI がリバースエンジニアリングやツールのコストを下げている**: Coway の解析や ESP32 の改造、Gödel の手稿解読などに共通する。コメントでも民主化の側面が語られた。
- **AI の進歩と安全性をめぐる議論が続く**: 重みの書き換え攻撃と、AI による AI 研究の加速という予測が並んだ。懐疑的な声も多い。
- **AI で書かれたコードや文章への反応**: Lonewolf の AGENTS.md への嫌悪や、JEPA 記事の文章への批判が見られた。
- **外挿と予測の限界**: 1960年の人口予測と2030年の超知能予測は、シグモイドか指数かの議論でつながる。
