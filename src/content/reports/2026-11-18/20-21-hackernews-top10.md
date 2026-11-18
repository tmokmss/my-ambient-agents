---
title: "Hacker News Top 10 (2026-11-18)"
date: "2026-11-18T20:21"
category: "summary"
summary: "Nginx HTTP/2 の未認証 RCE、Quad9 のフランス撤退、Deutsche Bank 流出文書、Microsoft の MAI 新モデル群など"
tags: ["hackernews", "security", "ai", "nginx", "privacy"]
---

## 1. [Unauthenticated remote code execution in Nginx](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities)

**Score:** 707 | **Comments:** 287 | [Post](https://news.ycombinator.com/item?id=50547374)

NGINX の HTTP/2 処理に、未認証で悪用できる重大な RCE 脆弱性が2件見つかった（CVSS 4.0 で 9.2）。CVE-2026-123633 は接続のメモリ解放後使用（use-after-free）、CVE-2026-123007 は send_window の整数アンダーフローによる境界外コピーで、後者は NGINX 1.9.5（2015年）から存在する。修正版は OSS 1.30.7 / 1.31.9 で、回避策は `http2 off;` で HTTP/2 を無効化すること。

### Key Discussion Points

- **tgma**: ネットワークに面するデーモンを C で書き続けるのは危険で、Rust 製などの Web サーバーへの移行を真剣に検討すべきだと主張。
  - **tkz1312**: ssh や静的ファイル配信を fil-c 経由で動かしている。実績ある C コードを安全化するほうが、Rust での全面書き直しより望ましいとの立場。
  - **drnick1**: 実環境での検証が乏しい新しいソフトへの移行は改善にならないと反論。
- **black3r**: 修正は1週間前に公開リポジトリへ入っており（コミットに Xint.io の報告者名あり）、その間に悪用され得た。回避策が単純なのだから事前告知もできたはずだと指摘。
  - **verst**: 自社サービスは gRPC 中心で HTTP/2 を無効化できない。
  - **requeo**: これらのコミットは今日まで公開されておらず、昨日時点の最新公開コミットは 11/9 だったと訂正。
- **fduran**: HTTP/2 は Nginx のデフォルトでは無効で、利用サーバーは約 12% にとどまるとの統計を紹介。
- **fn-mote**: AI がインターネットを燃やしている、小規模サーバーには侵入済みのものが多数あるのでは、と懸念。
  - **jacobgold**: 国家やハッカー集団はすでに知っていたはずで、AI はむしろ安全にしていると反論。
  - **jooops1**: 問題の原因は AI ではなく、長年警告されてきたセキュリティ対策の怠慢だと指摘。

## 2. [DNS resolvers are the wrong place to fight piracy](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/)

**Score:** 461 | **Comments:** 150 | [Post](https://news.ycombinator.com/item?id=50545958)

スイスの非営利 DNS リゾルバ Quad9 は、パリの裁判所から beIN Sports の求める海賊版スポーツ配信ドメインのブロックを拒否して日額 €1,000 の罰金を科され、2026年11月24日にフランスでの提供を停止する。記事は、フランス向けブロックが事実上全世界向けになること、位置特定の不正確さと VPN による回避、小規模非営利団体への負担の重さを挙げ、DNS は対策の場として不適切だと論じる。侵害対策はホスティング事業者側で行うべきだという。

### Key Discussion Points

- **trentnix**: 「海賊行為対策」のうち「海賊を訴追する」以外の手段は、政府が嫌う発言を抑える裏口になる、と主張。
  - **jgeada**: 訴追するなら無実推定が前提で、疑いだけで海賊扱いすべきでないと指摘。
  - **squarefoot**: 訴追も別の形で悪用され得るとし、サッカー中継から政治家の失言まで対象が広がる恐れを挙げた。
- **skrebbel**: 判決は裁判所の無能によるものか、悪法を正しく適用した結果なのかを問う。
  - **dolmen**: 裁判官は法を適用しただけで、問題は大規模検閲を可能にする法律にある。
  - **immibis2**: どちらでもなく、望ましい法ではないが目的に照らせば筋は通っている。
- **michael-sumner**: Quad9 と Cloudflare による一次情報のブログ記事へのリンクを共有。
- **rsync**: DNS 応答の提供は、リンクの設置と同じく保護された表現だとして2002年の米国判例（Kelly v. Arriba Soft）を挙げた。
  - **nemomarx**: 米国の判例はフランスの先例にならないと指摘。

## 3. [Inside Deutsche Bank](https://www.inside-db.com/)

**Score:** 365 | **Comments:** 137 | [Post](https://news.ycombinator.com/item?id=50547620)

1,500万件超の流出ファイル（反金融犯罪、制裁監視、内部監査などの部門の文書）をもとにした、多数の報道機関による国際的な調査報道プロジェクト。パートナー各社は、利益優先でコンプライアンスが軽視されていたとして、1MDB 関連のジョー・ロウとの取引、ロシア系顧客や Epstein 関連の疑わしい支払いなどを報じている。生データは公開されず、記者が数か月かけて検証を続ける。

### Key Discussion Points

- **ltrg**（※記者としてこのプロジェクトに関与したと本人が述べている）: 約1,500万件の文書（主に Outlook のメールボックス）は、ElasticSearch と FollowTheMoney スキーマを基盤とする OpenAleph を通じてコンソーシアムに提供されたと技術構成を解説。
- **mlmonkey**: 生データを公開しないと、省略による選択的な報道で物語が歪められる恐れがあると批判。
  - **Traster**: 公開しても精査する人は少なく、最も拡散する見解が勝ってしまうと反論。
  - **avidruntime**: Snowden 文書と同様、未加工データの無差別公開は危険で無責任だと指摘。
- **gwbas1c**: リンク先を読まなくても要点がわかる要約をページに載せるべきだと提案。
  - **mentalgear**: Epstein やロシアのオリガルヒとの取引を扱った報道機関の導入記事を紹介。
- **mapcars**: ドイツは規制が厳しいのに、銀行には適用されないのかと疑問を呈した。
  - **NoboruWataya**: Deutsche Bank は悪評が高く、VW のように大企業はスキャンダルと無縁でないと回答。
  - **probably_wrong**: Wirecard では規制当局 BaFin が記者を告発し、後に €19億の不明金が発覚したと具体例を挙げた。

## 4. [Seven new models at scalable price-performance](https://microsoft.ai/news/microsoft-ignite-2026/)

**Score:** 306 | **Comments:** 196 | [Post](https://news.ycombinator.com/item?id=50548021)

Microsoft AI が Ignite 2026 で、常時稼働のエージェント向けにコスト性能比を売りにした7つのモデルを発表した。MAI Code 2 は GPT-6.1 Sol の 98% の品質を約40%の価格で、Claude Opus 5.5 の 96% を約5%の価格で実現すると主張し、画像・音声・ルーティングのモデルも含む。第2世代アクセラレータ Maia 200 や、カスタマイズ可能な MAI Licensed Weights も紹介された。性能値はすべて Microsoft 自身の主張である。

> **関連:** #9「Advancing chip design with OpenAI models」も参照（同日の大手 AI 各社の発表で、AI 競争という文脈が共通）。

### Key Discussion Points

- **athrowaway3z**: 中国勢や OpenAI、そして Microsoft まで Opus 級の性能に迫っており、Anthropic は割高だとして IPO への参加を見送る考え。
  - **rayiner**: AI は電気モーターのようなもので、有用だが堀を築けない技術だと指摘。
  - **PaulKeeble**: ローカルモデルの進歩で、16GB のコンシューマ GPU で大半のプログラミング需要を賄える日も近いと予想。
- **johnshahbazian**: MAI Code 2 を試したところ普段の作業に十分で、Opus や Sol と同等という主張に異論はないと評価。
  - **nicce**: ゼロから作ったというより、OpenAI との取り決めで Microsoft が全てにアクセスできたはずだと疑問を呈した。
- **ahmedfromtunis**: シェアを取りたいなら一部をオープンウェイトにすべきで、さもなくば Windows Phone の二の舞だと主張。
  - **mediaman**: Anthropic より 90〜95% 安く、需要は大きい。Windows Phone はネットワーク効果の話で比較にならない。
  - **Aurornis**: Microsoft にはすでに市場シェアと販路があり、認知度のためにオープンウェイトにする必要はない。
- **M4R5H4LL**: Ignite の基調講演は薄っぺらで、イノベーションがなく、Nadella は退くべき時だと強く批判。
- **claaams**: 既存のエコシステム外で Microsoft を選ぶ理由はなく、Oracle のようになりつつあると指摘。
  - **CharlieDigital**: Postgres・Python への貢献、VS Code、TypeScript、GitHub などの実績を挙げて反論。

## 5. [Scottish HTTP Codes](https://underwood.network/http/scots.html)

**Score:** 172 | **Comments:** 34 | [Post](https://news.ycombinator.com/item?id=50550062)

HTTP ステータスコードを、罵り言葉まじりのスコットランド訛りの俗語に書き換えたネタページ。200 は「NAE BOTHER」、418 は「AH'M A TEAPOT」のように、各コードが口語的なフレーズで説明される。

### Key Discussion Points

- **ThrowawayR2**: スコットランドのコメディアン Brian Limond（Limmy）に朗読してもらうための資金を募るべきだと提案。
- **henearkr**: コードの文面が『指輪物語』のドワーフ（スコットランド訛り）の声で聞こえると感想。
  - **nephihaha**: ドワーフ役の俳優の多くはスコットランド人ではなく、英米のメディアはスコットランド人の役にスコットランド人を使いたがらない傾向があると指摘。
  - **ranger_danger**: 番組は全体的にアクセントで遊んでおり、ハーフットはアイルランド訛り、オークはコックニーだと補足。
- **hankbond**: 下品どころか上品だと感じた。ページ末尾にある telehack への接続案内も気に入った様子。

## 6. [AI agents ask better questions than KPMG accountants in audit trial](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/)

**Score:** 171 | **Comments:** 87 | [Post](https://news.ycombinator.com/item?id=50547777)

KPMG UK は「Project Exponential」で、100以上の AI エージェントを使い、FTSE 250 企業の財務諸表を従来の監査チームと並行して検証した。AI は人間が出さなかった問いを立て、場合によってはより深く掘り下げた。ただし法定監査ではなく、規制要件と文書の突合に失敗したエージェントには人間の介入が必要だった。KPMG は最大20件の大型監査への展開を計画している。

### Key Discussion Points

- **trentnix**: KPMG の会計士は経験が浅く、過重労働で、インセンティブも乏しい。大手会計事務所のモデル自体が搾取的だと批判。
  - **nonethewiser**: AI は疲れないので、KPMG に限らず業界全体にいえると同調。
  - **VBprogrammer**: AI は「金を出す者が曲を決める」ことを理解しないと皮肉った。
  - **j45**: 平均的なコンサルタントのほうが利益になる構造は意図的で、会計部門の大半は AI が担えるようになると見る。
- **origini**: 人間は人ごとの差が大きく、新人が毎年ゼロから学ぶ。AI は1つを教えれば済むので圧倒的に有利だと主張。
  - **lazide**: 単一の AI は共通の盲点を持つモノカルチャーで、一斉に悪用される危険があると警告。
  - **datsci_est_2015**: そうした理解は実際の仕組みと違うとして、HN の議論の質低下を嘆いた。
- **chilmers**: AI には人間のような怠け癖がないので、こうした場面で有利だと見る。
  - **dasil003**: AI にも創造者のインセンティブに沿った傾向があり、Claude は毎回次の作業を提案して終わらせない、と指摘。
  - **wongarsu**: LLM にも怠惰はあり、学習や評価のトークン上限が全力を出す動機を削ぐと補足。
- **prometheus1992**: 実験は KPMG 自身によるもので、「FAANG のコードの大半は AI 製」と同種の主張だと注意を促した。
  - **mannyv**: 監査の多くはチェックリストなので、8割は AI で十分だと予想。
  - **echelon**: コードを見なくてよい段階に近づいており、投入資源が増えるほど改善すると述べた。

## 7. [KVM: x86: Unconditionally reset MMU context when emulating INIT (CVE-2026-99312)](https://www.cve.org/CVERecord?id=CVE-2026-99312)

**Score:** 142 | **Comments:** 84 | [Post](https://news.ycombinator.com/item?id=50548004)

Linux カーネルの KVM（x86）の脆弱性。ゲストが L2（ネストした仮想化）を実行中に、CR0.PG=0 の状態で INIT をエミュレートすると、MMU コンテキストが古いまま L1 の実行が続く。修正は、ページングが無効でも INIT のエミュレート時に MMU コンテキストを無条件でリセットすること（CVE レコードの記述、MITRE の API から取得）。

### Key Discussion Points

- **fwsgonzo**: ネスト仮想化を無効にしてはいけない。他の手段より安全で、実ハードウェアの仮想化支援も使える。また、関連記事は AI が書いたようなので人間による書き直しが必要だとも指摘。
- **praseodym**: ブログ記事は読みにくく、全文が LLM 製だと思われると指摘。
- **jacobgold**: インフラはずっと安全になるが、2027年にかけて波乱が続くと予想。

## 8. [Genie 4 is now available](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/)

**Score:** 89 | **Comments:** 64 | [Post](https://news.ycombinator.com/item?id=50550415)

Google DeepMind の最新ワールドモデル Genie 4 が、Project Genie を通じて Google AI Ultra の対象加入者に提供開始された。探索中のプロンプトで天候やキャラクターを変えられ、シーンに応じた音声を生成する。Gemini が世界づくりを支援するエージェントや、コミュニティギャラリーも加わった。生成物には SynthID の透かしが入り、遅延や長期の一貫性は課題として残る。

### Key Discussion Points

- **kingrolo**: 自分のアカウントで利用できるのか、どう支払えばよいのかが分かりにくいと、Google の案内の不明瞭さを指摘。
- **alecst**: 価格や性能の議論ばかりで、技術の悲観的な帰結への議論が少ない、「こんなものは要らない」と感じると述べた。
- **giancarlostoro**: ゲームエンジンの将来像になり得ると見て、GTA のような作品のリメイクを Google が許すのかを気にしている。
- **vchiriac**: DeepMind は利益よりも職人気質でものを作っているように見えると評価し、どう収益化するのかと疑問を呈した。

## 9. [Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models/)

**Score:** 64 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=50549493)

OpenAI の公式 RSS による要約では、OpenAI のモデルが「Jalapeño」シリコンの回路を最適化し、RISC-V コアの設計も改善したとされ、GPT-6 Astra による AI 支援チップ設計の進展を示すという。記事本文は取得できていない。

> **関連:** #4「Seven new models at scalable price-performance」も参照（同日の大手 AI 各社による新モデル・用途の発表）。

### Key Discussion Points

- **sascac**: チップ名「Jalapeño」の由来を、産地 Xalapa の語源（砂の水の場所）から、砂（石英）でできたチップと冷却水に結びつけて遊んだ。
- **zardo**: RISC-V 設計が公開されていないように見えると指摘。
- **zackmorris**: AI が回路設計で革新を起こすのか、間違ったことを速くやるだけなのかに関心がある。GPU による SIMD 偏重を行き止まりとみなし、AI が現状を覆すと予想。
- **davemp**: AMD など提携先の IP を OpenAI が学習に使わない保証はどうなっているのかと疑問を呈した。

## 10. [The Magic of Partial Evaluation](https://jimmyhmiller.com/magic-of-partial-evaluation)

**Score:** 38 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50550096)

既知の入力に対応する部分を先に実行し、残りを残余コードとして出力する部分評価を紹介する記事。固定プログラムを与えて Brainfuck インタプリタを部分評価すると、インタプリタが消えてコンパイル済みコードになる（第1 Futamura 射影）。第2、第3射影まで説明し、著者が Rust で書いた実験的な JavaScript 部分評価器も紹介する。

### Key Discussion Points

- **apignotti**: 自社の C++ → JavaScript/WebAssembly コンパイラ Cheerp にも同様の概念を数年前に実装したと紹介。
- **owlstuffing**: 定数式畳み込みの一種で、関数呼び出しまで広げるとバイナリ互換性を損なうと指摘。
- **measurablefunc**: JIT と組み合わせると Truffle/Graal になると述べた。

## Trends

- **AI がセキュリティと業務を変える**: Nginx や KVM の脆弱性では AI による発見・悪用の加速が議論され、KPMG の監査実験でも AI の優位性が語られた。
- **AI 各社の発表と価格競争**: Microsoft の MAI 新モデル群、Google の Genie 4、OpenAI のチップ設計と、大手の発表が並び、コメントでは価格や堀の有無が焦点になった。
- **規制・検閲・透明性**: Quad9 のフランス撤退と Deutsche Bank の流出文書は、法的圧力と情報公開のあり方を問う話題だった。
- **気軽な技術ネタ**: Scottish HTTP Codes や部分評価の解説など、技術的な遊び心を扱う記事も上位に入った。
