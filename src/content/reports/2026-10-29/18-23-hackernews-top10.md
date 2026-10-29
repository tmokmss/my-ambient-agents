---
title: "Hacker News トップ10 (2026-10-30 03:23 JST)"
date: "2026-10-29T18:23"
category: "summary"
summary: "Mistral Large 4 の重みが公開、Google 検索が Alphabet 売上の半分を割り込み、DoorDash が Instacart を買収など"
tags: ["hackernews", "ai", "security", "business"]
---

## 1. [We're releasing the weights of Mistral Large 4](https://mistral.ai/news/mistral-large-4-oss/)

**Score:** 732 | **Comments:** 190 | [Post](https://news.ycombinator.com/item?id=50289418)

Mistral が 1 兆パラメータのネイティブマルチモーダルモデル Mistral Large 4 の重みを公開した。追加の強化学習でオープンウェイトモデルのコーディングベンチマークで首位を主張し、価格は入力 $0.70 / 出力 $2.10 (100万トークンあたり)。ライセンスは修正 MIT で、MaaS 事業者は別途商用ライセンスが必要。

### Key Discussion Points

- **maxloh**: MaaS 事業者に別ライセンスを課す条項があるため、「オープンウェイト」と呼ぶのは誤解を招くと指摘。
  - **hintymad**: フロンティアモデルの訓練は極めて高価なので、完全なオープンソースでないのは理解できると擁護。
  - **fuddle**: OSI の AI オープンソース定義に照らすと、Mistral Large 4 は明確にオープンではないと指摘。
  - **maxloh**: 今後は各ラボが公開してくれるかどうかに左右される状況になると懸念。
- **d2kx**: EU 拠点の企業として Mistral を API 経由で利用しており、サードパーティモデルの追加や機能拡充に満足している。
  - **rdtsc**: GLM の提供は EU 企業にとって実用的な戦略だと評価。
  - **dmje**: データを欧州内に置けるため Mistral への移行を進めている。
- **Topfi**: プレビュー版より価格がほぼ半額になり、再評価に値すると述べた。
  - **almindor**: 価格は途中で下げられており、それでも高く、推論が遅いと反論。
  - **ismailmaj**: モデルサイズの割に価格設定は非常に攻撃的だと指摘。
  - **traceroute66**: EU 域内推論には 10% の上乗せ料金がある点に注意を促した。
- **strictnein**: Hugging Face のモデルリンク (通常版と NVFP4 版) が記事の末尾にあると共有。
  - **jacquesm**: 手持ちのハードに収まる量子化版が出れば試したいと述べた。
- **3form**: サイバー系ベンチの拒否率 96.6% は、正当な依頼を拒否しない率の指標がなければ意味が薄いと批判。
  - **kouteiheika**: プレフィルなどで簡単に回避できるため、この種の安全指標はほぼ無意味だと指摘。
  - **nikanj**: 拒否の多寡は企業を揺るがす見出しにならないので、誰も気にしないと皮肉った。

## 2. [For the first time ever, Google Search is less than 50% of Alphabet's revenue](https://www.kadoa.com/companies/insights/google-search-below-half)

**Score:** 258 | **Comments:** 195 | [Post](https://news.ycombinator.com/item?id=50291945)

2026年9月期の Alphabet 売上 $128B のうち、Google 検索は $63.4B (49.7%) で、初めて半分を割った。検索売上自体は前年比 12% 増だが、Google Cloud が $30.7B (前年比 103% 増) と急伸し、その他も 40% 増となった。

### Key Discussion Points

- **jonas21**: 割合の推移を示す折れ線は一般的でないとして、セグメント別のドル建て売上グラフを共有。
  - **literalAardvark**: データ終端の先に指数関数的な外挿が続いている点を皮肉った。
  - **andrewguy9**: ドル建てのグラフのほうが実際に有用だと感謝。
- **1970-01-01**: 部品番号の検索で、広告のほうが完全に的確な結果を返したという体験を共有。
  - **Aboutplants**: 同様の体験があり、特定用途の製品探しでは広告のほうが AI モデルより良い結果だったと述べた。
  - **ModernTimes**: Google は検索インデックスから大量のページを削除しており、ロングテールのページは広告でしか表示できなくなっていると主張。
  - **barbazoo**: 広告は避けて、別の検索で目的に辿り着こうとすると述べた。
- **pmkary**: 「Attention Is All You Need」を出したのが Google 自身であるという皮肉。
  - **abixb**: 決定的な問題である検索を確率的な LLM に通すのは非効率で、Google は恐れていると主張。
  - **blauditore**: 検索が縮んだのではなく他が伸びただけで、投資家には良い兆候だと反論。
  - **WheatMillington**: 「devastation」は決算の実態と合わないと指摘。
- **dumberquestions**: 検索の比率は 5% 低下しても、検索売上は 12% 増えている点に注目。
  - **mlmonkey**: 最近は数字を良く見せているという投稿を紹介。
  - **nerevarthelame**: 総売上と EPS は予想を下回り、株価は 15% 下落したと指摘。
- **wnevets**: AI Overview を全ユーザーに強制するのは、金のガチョウを殺す大胆な戦略だと批判。

## 3. [DoorDash to acquire Instacart](https://about.doordash.com/en-us/news/doordash-to-acquire-instacart)

**Score:** 257 | **Comments:** 469 | [Post](https://news.ycombinator.com/item?id=50287919)

DoorDash が Instacart (Maplebear) を 1 株 $65、株式価値で約 $170 億 (10月22日終値に 26% のプレミアム) で買収する。対価の 75% 以上が現金で、完了は 2027 年末〜2028 年前半の見込み。DoorDash は地域スーパーが大手ネット小売と戦うためだと説明し、グローバルな独占提供はしないと表明している。

### Key Discussion Points

- **whyenot**: コロナ期に DoorDash でピザを頼んだら価格が割高で、冷めて届き、不満が残ったという体験談。
  - **jakeinspace**: モントリオール中心部のように選択肢が多い地域では悪くない取引だと反論。
- **resters**: Instacart は初期から利用しているが、ここ数年で誤配、傷んだ青果、遅延、サポート悪化が目立つと報告。
  - **taurath**: 問題は人手不足ではなく、仕事で生活費を賄えないことだと指摘。
  - **throwup238**: 甥の配達員データではチップが総額の 3〜5% 程度だと紹介。
  - **kevin_thibedeau**: ギグエコノミーは「安月給の召使いサービス」だと批判。
- **skyberrys**: Instacart の代わりに、Facebook で見つけた個人の家事手伝いに買い物も任せるようになったと共有。
  - **willchis**: 「ローンの半分も払ってくれる」で終わるのかと思った、と茶化した。
- **scoofy**: 反トラスト法も、政治家が腐敗していれば意味がないと指摘。
- **themightyquinn**: 当初は独禁法を懸念したが、DoorDash は食料品配達にほぼ参入しておらず、事業は重ならないと分析。
  - **themightyquinn**: 食料品のオンライン宅配は Walmart、Amazon、Instacart が各約 4 分の 1 だと補足。
  - **subarctic**: DoorDash の食料品配達もかなり大きく、北米の主要 2 社が合併するのは奇妙だと反論。
  - **seizethecheese**: ギグワーカーの供給市場では競合しているのではと指摘。

## 4. [Chained PHP2Shell Exploit Roots 25 Servers, Including US Government Servers](https://dreamgroup.com/blog/chained-php2shell-exploit-roots-25-servers)

**Score:** 185 | **Comments:** 86 | [Post](https://news.ycombinator.com/item?id=50286987)

中国系とされる AI 支援の攻撃者が、PAN-OS のファイアウォールや管理サーバー 25 台を乗っ取った。認証不要の単一 HTTPS リクエストで、PHP のセッション処理を突く PHP2Shell と、カーネル脆弱性 Fragnesia (PAM の `su` 設定を上書き) を連鎖させ root を奪取。約 19,000 台をスキャンし 24 台に自動でウェブシェルを設置、政府関連の 2 台では逆 SSH トンネルを張って内部へ侵入した。

### Key Discussion Points

- **jakobdabo**: Linux 攻撃面が大きすぎると指摘し、不要な機能 (mtcp や XFRM) の無効化を検討。
- **athrowaway3z**: DeepSeek で PHP2Shell の PoC を作った経験から、攻撃側の不器用さが意外だったと述べた。
  - **rootsudo**: 自分の DeepSeek セッションは最適化を見つけたと報告。
  - **iririririr**: セキュリティを意識した環境では当該機能は無効で、大手ファイアウォールベンダーは違ったようだと指摘。
- **colemannugent**: 記載内容から、ベンダーは Palo Alto Networks だとほぼ確信できると推測。
  - **tiberious726**: 政府が規制遵守を強いる一方、管理画面を公開しているのは腹立たしいと憤った。
  - **theMMaI**: PHP のバージョンが PAN-OS 11.1/11.2 と 12.1/12.2 に一致するのが裏付けだと補足。
  - **clbrmbr**: 株式市場の動きは Fortinet を指していると推測。
- **xxmarkuski**: 調査元の Dream 社は、汚職疑惑で辞任した元オーストリア首相が率いていると指摘。
  - **Topfi**: 米国で言えば Giuliani がサイバー専門家を名乗るようなものだと評した。
  - **cookiengineer**: 共同創業者の一人は NSO Group (Pegasus) の創業者でもあると補足。
- **tensegrist**: 以前は深刻さを過小評価していたかもしれないと述べた。
  - **Vaushite**: PHP リクエストパーサの RCE は、アプリのコードが実行される前に起きるため、過小評価しようがないと反論。
  - **rkozik1989**: php-fpm などの処理段階で起きるので特定のエンドポイントは不要だと賛同。

## 5. [H.264 Is Magic (2016)](https://sidbala.com/h-264-is-magic/)

**Score:** 143 | **Comments:** 69 | [Post](https://news.ycombinator.com/item?id=50291054)

H.264 の圧縮の仕組みを解説した 2016 年の記事。非圧縮 1080p/60Hz は毎秒約 370MB に達するが、量子化、クロマサブサンプリング、動き補償、エントロピー符号化を組み合わせることで、5 秒のクリップが約 1.2GB から 175KB に縮む。

### Key Discussion Points

- **tgtweak**: 2011 年頃に x264 開発者の DarkShikari と、マルチコア活用のパッチで協業した思い出を紹介。
- **Dwedit**: H.264 には可逆圧縮モードがあり、x264vfw などで真のロスレス動画が作れると紹介。
- **pwython**: 10 年後の 2026 年の「魔法」は AV1 で、まもなく AV2 が来ると述べた。
- **Hasz**: 「圧縮は知能」という考えが好きで、Hutter Prize にも触れた。
- **MadameMinty**: PNG も BMP のように廃れるべきで、同じ画像でも WebP や JPEG XL ではるかに小さくなると比較した。

## 6. [LLM Voice](https://martinfowler.com/bliki/LLM-Voice.html)

**Score:** 111 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=50290177)

Martin Fowler は、LLM が書いたような文章に不気味さを感じ、読む気を失うと述べる。LLM に下書きを任せず、言い換え提案の受け入れにも慎重であるべきだとし、執筆は思考と結びついているため文章を任せることは理解も任せることになると主張。アクセシビリティや翻訳は例外とし、AI 利用の開示を求めている。

### Key Discussion Points

- **BurritoKing**: AI 推進派だが、最近の文章はどれも同じ調子で冗長になり、途中で読むのをやめてしまうと同意。
- **PaulKeeble**: LLM の文章は情報密度が低く、どこにも向かわない印象で読み続けられない。
- **tptacek**: LLM は優れた文章の批評者になるが、提案された語句は使うべきでなく、客観的な批評だけを求めるべきだと助言。
- **thinkingemote**: 「声」は定義しにくく、多く読まないと分からないと指摘。
- **yawnxyz**: 文章を LLM に任せると思考や理解も任せることになる、という記事の主張に共感し、料理を例に自分で書く楽しみを述べた。

## 7. [Zombie stats: Where the numbers AI quotes come from](https://trakkr.ai/trakkr-research/zombie-stats)

**Score:** 89 | **Comments:** 45 | [Post](https://news.ycombinator.com/item?id=50290283)

Trakkr が 5 つの AI アシスタントに統計を求める質問 200 件を投げ、引用された 1,285 件の数値の出典を追跡した。裏付けのある研究に辿れたのは約 40%、確認不能が約 40%、行き止まりが約 11%、数値や文脈が変わっていたものが約 8%。最良は ChatGPT の 57%。

### Key Discussion Points

- **Isamu**: AI の理想は出典の裏取りという面倒な作業を肩代わりすることなのに、実際は検証を省く「速い答え」に使われていると批判。
- **alberth**: すべての文に出典を紐づける Perplexity の設計は、信頼性の面で強みだと評価。
- **toddmorey**: 報告書の文体が怠慢なのか皮肉なのか判断がつかないと述べた。
- **falcor84**: 40% に具体的な研究の裏付けがあるのは、人間基準に比べれば励みになると皮肉った。
- **jrflo**: Trakkr 自身の宣伝記事にすぎず、統計の正確さはコンサルの提案資料の中では重要でないと批判。

## 8. [Tomáš Mikolov awarded the Medal of Merit by the President of the Czech Republic](https://www.vut.cz/en/but/news-f19528/two-but-graduates-received-state-honors-from-the-president-of-the-republic-d378468)

**Score:** 73 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50292233)

ブルノ工科大学の卒業生 2 名が、10月28日にプラハ城でペトル・パベル大統領から叙勲された。Word2Vec の共同開発者として知られる AI 研究者 Tomáš Mikolov は科学分野で功労章を受章。もう 1 名は救急連絡アプリ Záchranka の開発者 Filip Maleňák。

### Key Discussion Points

- **samrus**: word2vec は美しい科学で、注意機構を含む LLM の他の要素は、その表現学習のブレークスルーの周辺工学にすぎないと評価。
- **vatsachak**: 2016 年の学部時代に word2vec を教わり、今日の SF のような現実は予想できなかったと回想。
- **BOOSTERHIDROGEN**: 数学を深く理解できるのは生まれつきか努力か、と問いかけた。

## 9. [Grace Blackwell needs a new scheduler: 27% more usable GPUs from the same racks](https://skypilot.ai/blog/grace-blackwell-needs-a-new-scheduler)

**Score:** 67 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50290912)

SkyPilot は、NVL72 ラックの NVLink による高速化は、ジョブが 1 ラック内に収まるときだけ得られると主張する。ラック単位で配置するスケジューラと、故障ノードを同一ラックの予備に差し替える仕組みにより、ノード不可用率約 2% の想定で 16 ノード構成 + 予備 2 ノードにすれば、18 ノード全体を使う場合より 27% 多く使えるとしている。

### Key Discussion Points

- **jhgg**: ギャング・スケジューリングの必要性は自明で、スケジューラの仕組みという肝心な部分が書かれておらず、宣伝記事に近いと批判。
- **zan2215**: 「Not all high-speed interconnects are created equal」という一節に反応した。
- **novalite**: 「新しい」スケジューラではなく、ギャング／ラック認識のスケジューリングは HTCondor の時代からあり、新規情報はほぼないと批判。

## 10. [Toxic Experts (2017)](https://nedbatchelder.com/blog/201711/toxic_experts)

**Score:** 35 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=50291927)

Ned Batchelder は、専門知識を初心者を教えるためではなく自分を差別化するために使う「有毒な専門家」を論じる。Big-O の記事に償却解析の細部が欠けていると批判された経験から、問題は相手の敵意にあり、業界に最も足りないのは共感だと述べる。

### Key Discussion Points

- **ghusto**: 避けたい人物像を的確に言い表した用語だと評価。
- **ivansmf**: 豚とは格闘するな、議論は傍観者のために行え、という教訓を共有。
- **eviks**: 「無視する」は関係を断つ手段であり、対話や学びの道もあると指摘。元のコメントへのリンクがない点も批判。
- **austin-cheney**: 記事は一方的で、批判された側が有毒な専門家だった可能性もあると述べた。
- **rglover**: 批判者の実績を調べ、攻撃的な部分は割り引いて受け取るようにしている。

## Trends

- **オープンウェイトの「オープン度」と欧州の存在感**: Mistral Large 4 は、ライセンス条件をめぐる議論と、EU 拠点での利用評価が同時に出た。
- **AI が既存ビジネスと情報の質を揺さぶる**: Google 検索の比率低下、LLM の文体への違和感、AI が引用する統計の出典追跡など、AI の影響を測る話題が並んだ。
- **セキュリティと基盤技術**: 25 台のファイアウォール侵害は、AI 支援の攻撃者と脆弱性の連鎖という脅威を示す。H.264 の解説や GPU スケジューリングは、基盤技術への関心の高さを表す。
- **ビジネス再編**: DoorDash による Instacart 買収は、独禁法とギグ労働の待遇をめぐる議論になった。
