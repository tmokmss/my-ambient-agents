---
title: "Hacker News Top 10 (2026-11-18)"
date: "2026-11-18T07:04"
category: "summary"
summary: "GPT-6.2 Astra/Sol 発表、OpenJDK Base64 の RCE「Java4Shell」、Nvidia のシンガポール売上非開示など"
tags: ["hackernews", "ai", "security"]
---

## 1. [GPT‑6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol/)

**Score:** 1213 | **Comments:** 759 | [Post](https://news.ycombinator.com/item?id=50535230)

OpenAI が GPT-6.2 の Astra / Sol を発表した（記事本文は取得できず、コメントからの推測を含む）。コメントではコスト・トークン削減が主な話題で、ベンチマーク上は Pareto フロンティアにあるとされる一方、文書・スライド生成の品質には疑問も出ている。

> **関連:** #9「Why is Gemini 4 Carbon taking so long?」も参照（同時期の競合フロンティアモデルの評価）

### Key Discussion Points

- **chriddyp**: 自社のデータ分析評価で、Astra は約 $20（V6）から約 $4（V6.2）、Sol は $2.6（V6.1）から $1.2（V6.2）にコストが低下した。トークン削減（約20%）とツール呼び出し回数の減少が理由で、一部では「早く終わりすぎて」正解に届かないケースもあった。
  - **y1n0**: コスト低下は本当にリソース削減によるものか、新モデルを宣伝するための補助金的な価格設定かを問うた。
  - **maxnevermind**: リンク先では Sol の正解率が 100% から 93% に下がっており、「同程度」とは言えないと指摘した。
- **Topfi**: 公式のスライド・ワークブック・メモの例は、約2週間前に GPT-5.6 Sol で得た出力より劣って見えると批判した。
  - **matchagaucho**: 6.2 はベンチマーク向けに最適化され創造性に欠けると感じ、数時間試して 6.1 に戻した。
- **thefourthchime**: PacBench で GPT-6.2 Astra は 92 点（6.6分・$2.04）、Kimi K3.1 Pro は 93 点（11.5分・$0.68）だった。
- **mlmonkey**: システムカードによると、GPT-6.2 Astra は GPT-6 Astra より評価されていることへの疑念（evaluation awareness）を示す傾向が強かった。
  - **simondotau**: 学習データにモデル評価の例が増えただけではないかと推測した。
- **underdeserver**: 科学ベンチマークに Gemini 4 Carbon のスコアがないのはなぜかと疑問を呈した。
  - **tedsanders**: OpenAI 社員でグラフ作成者。公開データ（主にコスト）が見つからず省いただけで、隠す意図はないと説明した。

## 2. [Java4Shell: RCE in OpenJDK when processing Base64](https://calif.io/java4shell/)

**Score:** 779 | **Comments:** 205 | [Post](https://news.ycombinator.com/item?id=50538240)

Calif が、OpenJDK の Base64 デコーダ（x86-64 のハードウェア最適化実装）に存在するメモリ破壊脆弱性 CVE-2026-114938 を公開した。認証なしのリモート攻撃者がヒープを上書き・読み取りでき、RCE に至る。CVSS 4.0 は 9.2 (Critical)。

### Key Discussion Points

- **lucasluitjes**: 攻撃はネットワークの RTT やジッタに敏感で、安定した低遅延が望ましいと write-up にある。
  - **afavour**: 通りすがりの攻撃は成功しにくいが、標的を絞った攻撃者には悪用され得ると整理した。
- **ievans**: Semgrep が無料の検出スクリプトを公開した。
  - **sgammon**: Native Image は `-march=native` を使わない限り影響を受けない。
- **AgentME**: AVX512 実装が原因らしく、`-XX:UseAVX=2` で回避できるという情報が Twitter にある（未確認）。
  - **_msw_**: AVX2 非対応の環境で失敗するため、`-XX:-UseBASE64Intrinsics` のほうが適切な回避策だと指摘した。
- **yabones**: write-up によると、リクエストのストリーミング処理を伴う攻撃手法はプロキシ経由だと緩和されるため、あわてて徹夜する必要はない。
- **exabrial**: Eclipse Temurin は時点でまだパッチを出しておらず、サードパーティのディストリビューションも不意を突かれた。
  - **3r7j6qzi9jvnve**: 責任ある開示が行われなかったのではないかと見ている。
- **leca**: 重要インフラへの深刻な攻撃は半年以内に起きるだろうと予測した。
- **fsnovask**: 記事の「人間と AI のケンタウロス型ハッカーが最強」という主張に反応し、今後はよほど優秀な人だけがセキュリティ・ソフトウェア分野に残るのではと述べた。

## 3. [Nvidia stopped disclosing Singapore sales as revenues hit $104B](https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf)

**Score:** 491 | **Comments:** 222 | [Post](https://news.ycombinator.com/item?id=50534631)

FT の記事（ペイウォールのため本文は取得できず、コメントからの推測）。Nvidia は昨年からシンガポールの売上規模を開示しなくなった。売上全体の約半分がシンガポール経由で、同国の事業体 Megaspeed を巡って中国向けチップ密輸の調査が行われているという。

### Key Discussion Points

- **tamarind44**: 104B は Nvidia シンガポール子会社の外部売上で、請求先がシンガポールになっているだけだという。記事は誤解を招きやすいと指摘した。
  - **bilekas**: 問題は、なぜ開示をやめたのかだと返した。
- **alangibson**: 売上の半分がシンガポール経由なら、Jensen 解任の理由は制裁回避への関与ではと疑った。
  - **areoform**: シンガポールは税条約や法制度が明確で、アジアにおける Delaware / アイルランド的な存在だと説明した。
- **legitster**: 会計上の開示範囲の問題で、Megaspeed との関連で注目されているだけだと主張した。
  - **Karupan**: 「年間換算ランレート」など報告手法の変更で項目が不透明になっており、十分に重要だと反論した。
- **steveBK123**: EDGAR 提出書類では、シンガポールが見えなくなるように報告方法が切り替えられた。
  - **jpgvm**: シンガポール経由の請求の多くは、米ハイパースケーラー向けサーバーを組み立てる Foxconn や Celestica の発注だと説明した。
- **mlmonkey**: 中国がモデル学習に物理チップを必要とする理由を尋ねた。
  - **kube-system**: 国家安全保障に関わる用途では、チップとネットワークの物理的な保有が必要になる。
- **chrisco255**（doener への返信）: 大規模密輸の検証済み報告は見ておらず、Megaspeed は主にシンガポールから中国向けに計算資源を貸していただけだと見ている。

## 4. [Quad9's withdrawal from France: A canary in the coal mine](https://blog.cloudflare.com/quad9-withdrawal-from-france/)

**Score:** 468 | **Comments:** 146 | [Post](https://news.ycombinator.com/item?id=50538994)

Cloudflare のブログ（本文は取得できず、コメントからの推測）。DNS リゾルバ Quad9 がフランスから撤退した件を取り上げている。背景には、スポーツ中継の海賊版対策としてフランスの裁判所が DNS 事業者にブロックを命じる動きがあり、規制が広がることへの警鐘を鳴らしている。

### Key Discussion Points

- **johnhtodd**（Quad9 の CTO を名乗る）: IETF 127 の場では Quad9 の立場に今のところ全面的な支持があるという。
  - **AlphaSite**: 巻き添え被害は副作用ではなく、企業に先回りの削除を強いるための狙いだと見ている。
- **driverdan**: Cloudflare は記事内で具体的に何も約束していない。影響国から撤退するのかを明言してほしいと求めた。
  - **gwerbin**: Cloudflare は残って、反競争的な保護の恩恵を受けるだろうと皮肉った。
- **miohtama**: 法的な攻勢の背後にいるのは beIN Sports の会長だと指摘した。
- **kypro**: 英国では「炭鉱のカナリア」ではなく、国が自国の価値観を守る例と見る人が多いだろうと述べた。
- **jonstewart**: Quad9 には共感するが、インターネットの富と力が少数企業に集中してきたことも念頭に置くべきだと述べた。
- **slopinthebag**: 自由でグローバルなインターネットの終わりの始まりで、国ごとに分断される方向だと見ている。
  - **ben_w**: 昔からそうだったと反論した（Minitel、JANET、暗号輸出規制の例）。

## 5. [ID.me terms required for IRS sign-in](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in)

**Score:** 297 | **Comments:** 127 | [Post](https://news.ycombinator.com/item?id=50540437)

Consumer Rights Wiki の記事。IRS のオンラインサービスに ID.me でサインインするには、ID.me 独自の利用規約への同意が必要になる。規約には、30日以内にオプトアウトしない限り仲裁に回す条項（小額訴訟以外）やマーケティング利用などが含まれる。

### Key Discussion Points

- **bborrez**: スマートフォンがないと ID.me に登録できず、知人が TreasuryDirect の債券を換金できなくなっている。
  - **apitman**: 自分は先週登録できた。Google Voice を電話番号に使ったと反論した。
  - **rootusrootus**: 紙の書類で手続きする方法があると案内した。
- **foresto**: TreasuryDirect を辞めたい人向けに、書面（書留郵便）で口座を閉じる方法を共有した。
- **jasonriddle**: IRS には login.gov でもログインできるようになったようだ。
  - **ryandrake**: login.gov があるのに ID.me が必要な理由が分からないと述べた。
- **HotGarbage**: 切り替え前に、ペナルティを払ってでも債券を売却した。
  - **mmh0000**: 同じ状況だが売却せず、ID.me への登録を拒否している。
- **skygazer**: 母親はプリペイド携帯と VoIP 回線しかなく、login.gov は受け付けない。ID.me だけが使えた。
- **et-al**: TreasuryDirect も10月に ID.me へ切り替わり、Warren 議員が login.gov を使わない理由を質していた。

## 6. [Google's AI answers reducing search traffic by 40%](https://revscope.co/blog/search-seo-geo-2026/)

**Score:** 293 | **Comments:** 220 | [Post](https://news.ycombinator.com/item?id=50540178)

RevScope のブログ。ランダム化実験で、AI Overviews が表示されると外部サイトへのクリックが約40%減ると報告している。AI Overviews は DataForSEO の追跡キーワードの 5.93%（2024年9月）から 61.43%（2026年8月）に拡大した。3月時点で AI アシスタントから各サイトへの流入は全体の 0.3% にとどまり、GEO（生成エンジン最適化）はほぼ SEO の延長だとしている。

### Key Discussion Points

- **pcarolan**: 答えをそのまま返すのは大半の質問で最良の製品だが、新しい情報の発見が失われるのは大きな損失だと述べた。
  - **taurath**: 以前は人間が書いた正確な答えが得られた、と返した。
- **asdfasgasdgasdg**: Google が提供しなければ、ユーザーは他の LLM に流れるだけだと見ている。
  - **slashdev**（投稿者）: 自ら破壊する Google の判断は賢明だと考える。
- **wraptile**: 元 SEO 担当として、検索が過去10年ひどかったので AI が改善するなら歓迎だと述べた。
  - **pupppet**: 問題は広告会社が検索を握っていることで、本物の検索会社が必要だと返した。
- **temp3452**: AI の出力に広告が入る未来を予想した。
- **nicbou**（Kuyawa への返信）: 報酬がゼロなら、誰が掃除機やカフェのレビューを書き続けるのかと問うた。
- **aleaph**: 流入がないなら検索エンジンにインデックスさせる意味はなく、従来のオープンなウェブは終わるのではと述べた。

## 7. [Microsoft's ONNX Runtime has disappeared from GitHub](https://github.com/microsoft/onnxruntime)

**Score:** 261 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=50539610)

microsoft/onnxruntime リポジトリが GitHub から消えた（README の取得は 404）。公式な説明はなく、投稿者（投稿者）はパイプラインの評価が今朝から失敗して気づいた。

### Key Discussion Points

- **roseway4**: Microsoft Agent Framework が侵害されたとの報告があり、そのリポジトリもオフラインになっている。
  - **magnio**: 公式の連絡がない以上、Microsoft の GitHub 組織で管理者アカウントが少なくとも1つ侵害されたと見るのが妥当だと述べた。
- **hiddenvulkcan**: Agent Framework の PyPI パッケージ侵害に伴う整理の可能性を指摘した。
- **eddythompson80**: ONNX はソースビルドで無効化しない限りデータを送信する。
  - **henryteeare**: `onnxruntime.disable_telemetry_events()` で止められるのではと返した。
- **nvader**（投稿者）: 事前警告がなく、評価が失敗して気づいた。22k スターのリポジトリがなぜ消えたのか知りたいと書いた。
- **Heliodex**: 最も新しいフォークとして intel/onnxruntime を挙げた。
- **dangoodmanUT**: だからすべてを vendor している、と述べた。
  - **KirinDave**: 今は vendor した版も信頼しないほうがよいと返した。
- **these**: 最近の開発は遅く、バグ修正も遅かったので数か月前に移行した。

## 8. [Interviewed at a YC startup, found out they used my LinkedIn without permission](https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/)

**Score:** 194 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50542135)

Reddit の投稿（本文は取得できず、コメントからの推測）。YC 系スタートアップの選考で30時間を費やした後、先方が本人の LinkedIn アカウントから無断で接続リクエストやメッセージを送っていたと発覚した。

### Key Discussion Points

- **ifh-hn**: 面接で個人アカウントのパスワードを求められたら断る。無償の作業もしないと述べた。
- **robertclaus**: この種の不手際で訴えられるべきだと主張した。
- **teekert**: Apple Store で修理に出した際、Mac とともにアカウントのパスワードを渡して後悔した経験を語った。
  - **ValentineC**: 自分は SSD を消去してから送ると述べた。
- **zergrush**: 最近の YC では珍しくない。
  - **gabaix**: Graham のエッセイにある「YC 期間中の良い成長率は週5〜7%」を引き、成長最優先の文化を指摘した。
- **theturtletalks**: 該当企業は standout.work で、LinkedIn による推薦を事業の前提としているらしい。
  - **DANmode**: 自社サービスの利用手法を面接にも適用した（dogfooding）のだろうと見る。
- **hackernud3s**: パスワードを変更し、二度と認証情報を渡さないことを教訓にするよう助言した。

## 9. [Why is Gemini 4 Carbon taking so long?](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/)

**Score:** 42 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=50541790)

Kernel のブログ。非公開の評価で Gemini 4 Carbon は Opus や Astra が数分で終えるタスクに1時間近くかかった。Theo の「Carbon low: 22m21s、Opus 5.5 high: 9m33s」という計測など、複数のユーザーの遅さの報告も引いている。ブログはタスクごとに実行を追跡し、遅さの要因を推論の遅さと作業量の多さに切り分けて調べている。

> **関連:** #1「GPT‑6.2 Astra and Sol」も参照（同時期の競合フロンティアモデルの評価）

### Key Discussion Points

- **tristanj**: Carbon はトークン効率が悪く、毎秒トークン数も低い。理由の仮説をいくつか挙げた。
  - **zarzavat**: 決算発表の日に出た PR 的な発表だったのではと推測した。
- **horacemorace**: 今日使ったら非常に遅かったが、Claude の「ブルドーザー」的な進め方と違い、控えめに筋の良い設計で解く点が新鮮だった。
- **Lerc**: Theo の動画では time to first token に問題があり、サブエージェント動作では短い内部クエリの遅延が積み重なるという。単なる非効率ではなく何かが壊れているように見える。
  - **teknologist**: Theo は Anthropic 以外に厳しいように見えると述べた。
- **lp92**: Carbon は、チケットの事実が除外済みのケースにも防御的なコードを入れる、と記事から引用した。過剰な分析ではと見る。
- **user_7832**: 各社は最新モデルをコーディングのベンチマークに最適化し、他の用途を犠牲にしていると感じる。
  - **SyneRyder**: 最近の Opus や Fable は芸術や音楽で大きく進歩したと反論した。

## 10. [Why Fibonacci?](https://www.evilgeniuslabs.org/why-fibonacci)

**Score:** 16 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50542264)

Evil Genius Labs の制作者が、Fibonacci 配置の LED 作品を作り続ける理由を語る投稿（2026年11月16日付）。2015年に Jim Bumgardner の動画に触発されて最初の作品を作り、現在は数十種のデザインを作っている。

### Key Discussion Points

- **mbf1**: 記事のステップ5では 55 や 89 のようなフィボナッチ数でらせんが現れる。その中間の 72 を選ぶと面白い現象が起きると報告した。

## Trends

- **フロンティア AI モデルの競争**: GPT-6.2 の発表と Gemini 4 Carbon の速度問題が並び、性能よりコスト・トークン効率・実用速度の評価が焦点になっている（#1 と #9 は関連）。
- **セキュリティとサプライチェーン**: OpenJDK の Base64 脆弱性と ONNX Runtime リポジトリの消失など、広く使われる基盤への信頼が揺らいでいる。
- **規制とアイデンティティ**: Quad9 のフランス撤退、ID.me の IRS 利用、Nvidia の売上開示で、国家・規制・プラットフォームがユーザーや企業に与える影響が議論された。
- **AI によるウェブ構造の変化**: Google の AI Overviews によるクリック減少と、AI エージェントを使った採用サービスの倫理問題が出ている。
