---
title: "Hacker News トップ10 サマリー (2026-10-12)"
date: "2026-10-12T05:41"
category: "summary"
summary: "Total Annihilation の再実装、Tao の Math 2.0、Karpathy の LLM 能力ギャップ論、フィンガープリント問題など"
tags: ["hackernews", "tech", "ai", "privacy"]
---

## 1. [Total Annihilation, rebuilt for modern computers](https://nanolathe.gg)

**Score:** 434 | **Comments:** 184 | [Post](https://news.ycombinator.com/item?id=50045984)

Nanolathe は名作 RTS「Total Annihilation」を現代的なグラフィックで作り直した MIT ライセンスのオープンソースエンジン。Windows / Mac / Linux に対応し、ゲームデータは利用者が用意する。ブラウザデモ（3ミッション）があり、公開ベータではシングルプレイとオンラインのスカーミッション等が遊べる。

### Key Discussion Points

- **modeless**: 精神的後継の Beyond All Reason (BAR) が最高品質で、大規模対戦にも対応していると紹介。
  - **beefsack**: BAR は近年最高の RTS で、記憶の中の TA に近い体験だと同意。
  - **Lucasoato**: コミュニティが親切で、初心者は後方で経済(eco)担当をしていれば歓迎される。
- **somat**: 20年続く Spring エンジンとの違いは何かと質問。
  - **TkTech**: BAR は決定論的ロックステップだがネイティブ float を使う点が課題だったと指摘。
  - **ThrowawayR2**: リバランスなしの原作どおりのゲームプレイを体験できる点に価値がある。
- **slightlygrilled**: Supreme Commander 向けに同様の再実装を開発中で、6万4千ユニット規模の空戦も動くと紹介。
- **samstress**: サイトの 01/02/03 のカード番号が AI 生成サイトの典型で、絵文字ダッシュのような目印だと指摘。
  - **coolius**: 同じ内容を2文で言い換える文体も同様に感じる。
- **philipov**: Planetary Annihilation は TA 開発者が関わった作品と紹介。
  - **jaggederest**: 原作や BAR の魅力には及ばなかった。

## 2. [Terence Tao: Math 2.0 [pdf]](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf)

**Score:** 365 | **Comments:** 402 | [Post](https://news.ycombinator.com/item?id=50043026)

Terence Tao による Caltech 講演スライド。PDF のため本文は取得できず、コメントから推測した要約：AI 時代の数学のあり方を論じ、未解決問題は「目的地でなく灯台」であり、AI が証明を出すだけでなく人間の理解と共有の理論体系への貢献が重要だと主張している様子。

### Key Discussion Points

- **dekhn**: 創薬×AI の立場から、がん治療の例は実態に即していない。薬の作用機序はほとんど不完全にしか分かっていない。
  - **captainclam**: 同業者として同意。
  - **jsenn**: 7項目のうち1つを突いているだけで、核心は「AI 解が試行過程の弱点を突いて不整合になり得るか」という点だ。
- **squidmaster**: 作用機序が不明な薬は多く、Tao は専門外だと批判。
  - **ijk**: AI は計算機科学を生物学のような経験科学に変えつつある。
  - **dataviz1000**: 大学に行かずとも、複雑な方程式を分解して可視化できた経験を共有。
- **samuelknight**: 10月8日の OpenAI の発表で、研究者100人超が数年来の問題が解かれ、助成金申請を書き直す事態になったと報告。
  - **jebarker**: Tao の主張は「AI は人間の理解に資する形で有用」ということで矛盾しない。
  - **gpt5**: エンジニアは成果志向、数学者は理解志向であり、理解なき AI 活用は数学者をエンジニアに変える。
- **thomasahle**: ソフトウェアに喩えると、純粋数学は理論の「コードベース」を保守する営みである。
  - **curt15**: LLM の証明を読むのはデコンパイラ出力でプログラムを理解するようなもの。
  - **seanwilson**: 現行の数学 AI は共有の枠組みに優美に追加せず、ゼロから作り直しがちだ。
- **tripletao**: 応用科学は半経験的な手法で動いており、Tao はそれを知らないようだ。

## 3. [The gap in shared understanding of LLM capability is widening](https://twitter.com/karpathy/status/2109361546505966046)

**Score:** 364 | **Comments:** 527 | [Post](https://news.ycombinator.com/item?id=50047422)

Karpathy の投稿。X のため本文は取得できず、コメントから推測した要約：エージェントを使いこなす層は大規模プロジェクトを数週間→プロンプト1つで完了できるとみる一方、一般層との LLM 能力に対する認識ギャップが広がっているという主張。

### Key Discussion Points

- **frereubu**: 閲覧用に xcancel のミラーリンクを共有。
- **rico735**: 全員が「週・月単位の仕事がプロンプトで済む」と同意しているわけではない。保守性やコスト、コード劣化を気にする層との分断だ。
  - **SamPatt**: ミスは許容しつつ、AI と協働するという自信がある。
  - **Eezee**: 他人の意思決定を要しなければ、確かに速くなった。
- **NichoPaolucci**: 一般の人にエージェントで何をさせたいのか。発展途上で、初期のインターネットと同じだ。
  - **chrysoprace**: 個人向けエージェントより、スパム除去など見えない用途のほうが良い。
  - **jrflo**: 99%の人には用途は少ないが、1%の科学者・技術者を加速する再帰的改善に価値がある。
- **plaidfuji**: アプリ開発や数学証明の自動化より、人型ロボットの方が世界を変えうる。
  - **viceconsole**: 肉体労働には暗黙知や感覚データが多く、過小評価されている。
  - **koe123**: 労働が「解決」されても人間同士の分配は解決されない、という不安。
- **usernomdeguerre**: 差が本当に巨大なら実例を示せるはず。LLM は検証可能な仕事に限って有能なだけでは。
  - **mizzao**: AI ラボの計算資源の4〜5割が次世代エージェントの学習に使われている事実は無視できない。

## 4. [Fingerprints are the new cookies](https://royfish.dev/fingerprints-are-the-new-cookies)

**Score:** 232 | **Comments:** 110 | [Post](https://news.ycombinator.com/item?id=50048642)

Web が Cookie からデバイスフィンガープリント（GPU、音声処理、フォント、画面情報等の組み合わせ）へ移行しており、Cookie 削除やシークレットモード、VPN でも同一性が保たれると指摘。広告業者やデータブローカー、政府にとって価値が高く、有効な対策は Brave、Tor、Mullvad のようなエンジン層の保護だけで、拡張機能はかえって目立つと主張する。

### Key Discussion Points

- **legitster**: 実務では指紋は数日で変わるため安定性が足りず、理論ほど実用的でない。
  - **j16sdiz**: 違法にすべきは Cookie ではなくデータブローカー行為。
  - **meowface**: 不正対策分野ではもっと高度な攻防がある。
- **drnick1**: 問題は JavaScript にあり、素の HTML なら IP と UA 程度しか取れない。
  - **cosmic_cheese**: 同意なしに渡される情報量が多すぎる。
  - **bawolff**: ハードウェアや言語の特定に JS は必須ではない。
- **theteapot**: 更新するたびに別の名前で呼ばれるので壊れているのでは。
- **helterskelter2**: 値をランダムに偽装すればよいのでは。
  - **Telaneo**: ランダム化自体が間接的に指紋になる。
  - **edelbitter**: ハードウェアアクセラレーションの無効化等で情報は減らせるが、CPU 数などは推測される。
- **aenis**: 長期安定でなくとも、メールなど安定情報と結びつけて複数社のデータを突合すれば有害。

## 5. [Cartographers of North Korea (2019)](https://cartographers-nk.wonyoung.so/)

**Score:** 223 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=50047091)

OpenStreetMap 上の北朝鮮地図を作る人々を取り上げたスクロール型の記事。ページ本文は取得できず、コメントから推測：衛星画像から詳細な地図を作るボランティアや、その動機、脱北支援の意図を持つ投稿者などが紹介されている。

### Key Discussion Points

- **tkgally**: 最近は観光客が撮った北朝鮮の動画が YouTube に出てきている。
  - **AndriyKunitsyn**: 現在はロシア人にのみ観光が開かれ、以前は撮影物が検閲されていた。
  - **whycombinetor**: 観光客が制限されない側を映した動画もある。
- **lampiaio**: 地域の詳細さに驚いた。OSM はインターネットの七不思議の一つ。
  - **w4yai**: 他の六つは？
- **ByteAtATime**: 脱北に適した地点を選んで地図化している投稿者「P791」の手紙が印象的。
  - **Exoristos**: 中国に入った脱北者は犯罪組織に搾取されがちでは。
- **layer8**: 静的な画像入りの通常記事の方が好み。
- **cantrevealname**: 評価も報酬もないのに貢献する動機が興味深く、最大貢献者(75,583件)の言葉を引用している。

## 6. [Whatever became of holography? (2011)](https://www.americanscientist.org/article/whatever-became-of-holography)

**Score:** 101 | **Comments:** 49 | [Post](https://news.ycombinator.com/item?id=50049411)

American Scientist の記事。サイトが 503 を返し Wayback にもスナップショットがなかったため、コメントからの推測による要約：かつて期待されたホログラフィーがなぜ普及しなかったかを振り返る記事とみられる。

### Key Discussion Points

- **ubj**: BYU の Dan Smalley 研究室が3D体積ホログラフィーを開発中。
- **adastra22**: ホログラムは SF 的な3Dディスプレイではなく、位相も記録する写真媒体だと、コメント欄の誤解を指摘。
- **midnitewarrior**: 趣味でホログラフィーを再開しようとしたが、Integraf が銀塩フィルム等の販売を終了していた。
- **Nition**: 子供の頃の展示に感動したが、以降ホログラムが珍しい理由が気になっていた。
- **tootie**: レンチキュラーディスプレイを扱った経験があり、約90度の視差を得られるが課題もあった。

## 7. [Calculus with Julia](https://jverzani.github.io/CalculusWithJuliaNotes.jl/)

**Score:** 58 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50034206)

John Verzani による Quarto 製のオープンソース教材。Julia で微積分を学ぶもので、グラフ・数値的手法を中心に代数も扱う。プレカルキュラスから極限、微分、積分、微分方程式、ベクトル解析まで網羅し、`CalculusWithJulia` パッケージが付属する。

### Key Discussion Points

- **subset**: 大学の DSP 講義で Julia を始めるところで、初学者に良いペースの入門だと評価。

## 8. [Doory – Open-Source Canva](https://github.com/shaongitbd/doory)

**Score:** 58 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50049872)

ブラウザで動くデザインエディタ（React 19 + Django 5）。テンプレートから投稿画像やスライド、履歴書等を作り、PNG / SVG / PDF / MP4 / GIF に書き出せる。全機能無料でアカウント不要、Docker でセルフホストできる。

### Key Discussion Points

- **klrfl**: コミット履歴を見ると、全体が単一コミットで Claude により作られており驚いた。
- **shermozle**: Canva は昔の Print Shop を思わせる。
- **akst**: Canva の強みはテンプレートや素材、エコシステムという IP で、ツール自体は単純。
- **v3ss0n**: バイブコーディング製ツールが増える中、どれを選ぶべきか。

## 9. [Yandex bot traffic down 99% after data center attack](https://radar.cloudflare.com/bots/as13238?dateRange=7d#bot-traffic)

**Score:** 55 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50051532)

Cloudflare Radar のグラフで、データセンターへの攻撃後に Yandex（AS13238）発のボットトラフィックが99%減少したことを示す。ページは動的描画のため、タイトルとコメントに基づく要約。

### Key Discussion Points

- **gritzko**: クローラー群が被弾した、または重要サービスのために停止された可能性がある。元 Yandex 社員として、トロール農場への影響は別問題と述べる。
- **sznio**: X でポーランド語圏のヘイト投稿が減ったと友人から聞いた。
  - **xvxvx**: ヘイトスピーチ減少を主張する人は具体例を示していない。
- **ron_k**: 過去のスレッド(id=50041619)を紹介。
- **jdw64**: ドローンの脅威と防御方法に関心。

## 10. [Type-safe HTML templating in Zig](https://lalinsky.com/2026/10/11/type-safe-html-templating-in-zig.html)

**Score:** 19 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50051573)

Go の Templ を Zig に移植した `zt` を紹介。コンパイル時の型安全、高速性、デフォルトエスケープ、HTML らしい構文が目標。テンプレートは `zig build` 中に Zig へ変換され、アロケーションなしで `std.Io.Writer` に書き出す。

### Key Discussion Points

- **slopinthebag**: Rust のマクロなら別ファイル形式や独自構文なしで同様のことができる。

## Trends

- **AI と専門性**: Tao の講演と Karpathy の投稿が、AI 能力の認識ギャップと「理解」の価値をめぐる議論で上位を占めた。Doory や Nanolathe のサイトにも AI 生成物への言及がある。
- **プライバシーと監視**: フィンガープリント問題が高い関心を集めた。
- **ノスタルジアとオープンソース**: TA の再実装、ホログラフィー、北朝鮮の OSM 地図など、コミュニティ主導の取り組みが目立つ。
- **地政学**: Yandex のデータセンター攻撃がトラフィックに表れていた。
