---
title: "Hacker News トップ10 サマリー（2026年5月10日）"
date: "2026-05-10T04:08"
category: "summary"
summary: "BunのRust書き換えやInternet Archive Switzerlandなど、2026年5月10日のHN注目ストーリー上位10件を日本語でまとめました"
tags: ["hackernews", "tech", "rust", "assembly", "archive", "freebsd", "security"]
---

## 1. [Show HN: Building a web server in assembly to give my life (a lack of) meaning](https://github.com/imtomt/ymawky)

**Score:** 61 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=48080587)

macOS向けにARM64アセンブリのみで書かれた静的ファイルWebサーバー「ymawky」のShowHN。libcへの依存ゼロ、fork-per-connectionアーキテクチャで、GET/PUT/DELETE/HEAD/OPTIONSに対応し、Range: bytesヘッダーによる動画スクラブ、ディレクトリ一覧、スローロリス攻撃への対策、最大1GBのアトミックアップロードなども実装している。偽O'Reillyブック表紙をREADMEに添えたユーモアセンスも好評。

### Key Discussion Points

- **trollbridge**: 手作業でこれをやっている人がいてうれしい。自分だけじゃないと安心した
- **digitaltrees**: 理由は分からないが、このプロジェクトが非常に興奮させてくれる
- **_the_inflator**: C64やAmigaでアセンブリを書いていた経験から共感。ライブラリやマクロを積み重ねていくうちに「アセンブリ上のメタ言語」を作ることになる過程を詳細に語る
- **chrisweekly**: 偽O'Reillyブックカバーが最高すぎる
- **thatxliner**: 学習ツールとして使いたいのでアーキテクチャの設計判断をまとめたドキュメントが欲しい

---

## 2. [Bun's experimental Rust rewrite hits 99.8% test compatibility on Linux x64 glibc](https://twitter.com/jarredsumner/status/2053047748191232310)

**Score:** 461 | **Comments:** 443 | [Post](https://news.ycombinator.com/item?id=48073680)

JavaScriptランタイム「Bun」の作者Jarred Sumnerが、ZigからRustへの実験的書き換えを開始し、わずか6日間でLinux x64 glibc上の99.8%のテスト互換性を達成したとTwitter/Xに投稿。Claude Mythos（Anthropic）を活用したAI支援によるもので、当初はcargo checkが16,000超のコンパイルエラーを報告していたが急速に改善。技術的・倫理的側面で活発な議論を呼んでいる。

### Key Discussion Points

- **legerdemain**: 「このスレッド全体が過剰反応。動かないコードについて302のコメントが付いた」と懐疑的
  - **Jarred**: 「書いた時点では確かにバージョン番号も表示できなかった。これほど早く動くとは予想外。パフォーマンスが競争力を持っていることにも驚いた」
  - **logicprog**: 「彼は保守性、パフォーマンス、テストスイートを確認した上で決断したようだ」
- **mohsen1**: 「5ヶ月間TypeScript→Rustの同様プロジェクトを進めている。RustはLLMでコードを書くのに最適。厳密な型システムが愚かなミスを防ぐ」
  - **cornholio**: 「Rustはリファクタリングの連鎖を引き起こしやすく、LLM+Rustはスパゲッティ化する恐れがある」
  - **kayson**: 「MicrosoftはGoに移行したときRustは難しすぎると言っていた。実際に移植してみてどう感じた？」
- **Tiberium**: 「Zigを使っていたBunはクラッシュ・メモリバグが非常に多かった。Rustへの移行は良い変化」
  - **mi_lk**: 「統計やソースは？BunのバグはZigのせいではなくBun自身の設計問題では」
  - **ozgrakkurt**: 「ZigのせいではなくBunの実装問題。GhosttyやTigerBeetleはZigで安定して動作している」
- **jwpapi**: 「ZigをフォークしてLLMで書き換え、次もLLMでRustへ書き換え。BunはClaudeに甘やかされている。Anthropicの次のマーケティングになりそう」
- **aurareturn**: 「6日間でこの成果。計算リソースを持つ者が有利になる時代の象徴。将来は競争が困難になる」
  - **Aurornis**: 「既存コードベースとテストスイートがある言語間移植はLLMが最も得意とするユースケース。ゴールが明確だから」
  - **twoodfin**: 「蒸気や電気と同じ。ユニバーサル情報エンジンはインフラが整えば格差を縮小する方向に向かう」

---

## 3. [Casio S100X Japanese Lacquer Edition (JP Page Only)](https://www.casio.com/jp/basic-calculators/premium/en-s100x-jc1-u/)

**Score:** 30 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=48048407)

カシオが日本漆塗り仕上げを施したプレミアム電卓「S100X Japanese Lacquer Edition」を発売。世界限定650台のみ。カシオの高級電卓シリーズに職人技術による漆の艶と質感を組み合わせた逸品で、日本のページのみに掲載されている。

### Key Discussion Points

- **JSR_FDED**: 「美しすぎて怖い。購入したら日常品すべてに嫌悪感を感じるフォントオタクになってしまいそう」
- **TruffleLabs**: 自分が持っているHP-80電卓にも漆の外装を作ってみたいと宣言
- **wtn**: 世界で650台限定という情報をThe Vergeから引用
- **devindotcom**: 「漆塗りのF-91Wを期待していたが、この電卓もなかなか良い」
- **iancmceachern**: 「この仕上げの万年筆を持ったことがある人なら、何が特別かすぐに分かる」

---

## 4. [Gemini API File Search is now multimodal](https://blog.google/innovation-and-ai/technology/developers-tools/expanded-gemini-api-file-search-multimodal-rag/)

**Score:** 6 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48080702)

GoogleがGemini APIのファイル検索機能をマルチモーダルに拡張。テキストだけでなく画像・動画・音声など複数のコンテンツ形式をまたいだRAG（検索拡張生成）を開発者が利用できるようになった。マルチモーダル検索の実用化に向けた重要な機能追加。

### Key Discussion Points

投稿時点でコメントなし。

---

## 5. [Internet Archive Switzerland](https://blog.archive.org/2026/05/06/internet-archive-switzerland-expanding-a-global-mission-to-preserve-knowledge/)

**Score:** 562 | **Comments:** 86 | [Post](https://news.ycombinator.com/item?id=48074265)

インターネットアーカイブがスイスのザンクトガレンに新たな非営利財団を設立。絶滅危機にある資料の保存とAIモデルのアーカイブ化に注力し、Internet Archive Canada・Internet Archive Europeとともに「分散型・耐障害性のある世界デジタル図書館」の構築を目指す。創設者Brewster KahleとCaslon KahleがボードメンバーとしてIA.chに参加。

### Key Discussion Points

- **miki123211**: 「IAはUsenetのように世界各地の独立組織がピアリングし、テイクダウン要求を相互に伝達しない仕組みを採用すべき。データ追加は容易でも削除は困難な構造に」
  - **y3ahd0g**: 「BitTorrentと事前共有鍵ネットワークを組み合わせ、監視コストを高騰させるアプローチが有効」
  - **cbdevidal**: 「IAは175PB以上のデータを保有。同規模のデータを複製できる組織がどれだけあるか疑問」
- **input_sh**: 関連ブログ投稿をシェア。IA, IA Canada, IA Europeとともに成長するミッション・アライアンスを紹介
  - **dang** (HNモデレーター): 「internetarchive.chがダウンしていたのでリンクをブログ記事URLに更新した」
- **insom**: 「元IA Canada従業員（2024年）。政治的な脅威に対しては各IA組織がより独立して、特に資金調達面で自律的に動く必要がある」
- **teew**: ウェブサイトの「About Us」文章が多数のサイトで同一のテンプレート文句。連絡先住所も「123 Fifth Avenue, NY」のプレースホルダーのまま
- **imtomt**: 「実際のアーカイブコンテンツが見当たらない。AIアーカイブへの言及のみで実体がない」

---

## 6. [I've banned query strings](https://chrismorgan.info/no-query-strings)

**Score:** 304 | **Comments:** 175 | [Post](https://news.ycombinator.com/item?id=48076173)

個人サイトの運営者Chrisがウェブサイトで無許可のクエリ文字列を全面禁止にした経緯を説明。外部サイトが勝手に`?ref=origin.com`などのトラッキングパラメータを付加したリンクでユーザーを送り込むことをプライバシー侵害と捉え、クエリ文字列を含むリクエストに414エラーを返す設定を導入した。

### Key Discussion Points

- **jedimastert**: 「W3C規格を調べたら、クエリ文字列はパーセントエンコードされた文字列に過ぎず特別なフォーマットはない。パスと同様に扱うなら404や414は適切な応答かもしれない、と考えが変わった」
  - **（返信）**: 「URLSearchParamsはform-urlencodedパーサーのJS実装に過ぎず、クエリ文字列自体の仕様とは別」
- **wodenokoto**: 「他のサイトがこのサイトへのリンクに?ref=を付けるのが理解できない。UTMは自分でキャンペーン追跡するために使うもので、第三者が勝手に付けるのとは全く違う」
- **ChrisMarshallNY**: 「昔は"Webring"と呼ばれていた概念。FastCGIがAuthヘッダーを通さないためトークンをクエリに含めざるを得なかった経験がある」
- **1shooner**: 「クエリ文字列を自分でコントロールできないユーザーにも414を返すのはおかしい。バナーやブラウザツールで対処法を案内すべきでは？」
- **Aardwolf**: 「418 I'm a teapot の方が面白いのでは。ティーポットはクエリ文字列をサポートしていない」

---

## 7. [I'm writing a history of Visual Basic, Chapter 1 is up](https://evilgeniuslabs.ca/blog/visual-basic-history-chapter-1-launch)

**Score:** 49 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=48039249)

Visual Basicの長編歴史書プロジェクトの第1章が公開された。BASICの1964年起源からVisual Basic 1.0（1991年）の誕生まで、アラン・クーパーやスコット・ファーガソンなど歴史上あまり知られていない開発者たちに焦点を当て、Microsoft幹部中心の既存の歴史観とは異なる視点を提供する試み。

### Key Discussion Points

- **vunderba**: 「AI生成の低品質な画像をバナーに使用するのはまずい。"Microsoft"のスペルが間違っており、"Dartmouth"が"Darmouth"と誤記。第一印象が悪く、プロジェクト全体への信頼を損ねる」
- **WillAdams**: 「MacBasicとRealBasic（REALbasic）が競合製品としてどう位置づけられるかも文脈として含めてほしい」
- **SilentM68**: 「VBは学習ツールとして実用的だった。RapidQ Basic等の競合も試した。プログラミング言語の歴史・ライバル関係・興亡を描いたドキュメンタリーがあったら面白そう」
- **MBCook**: ナビゲーションへの不満を表明

---

## 8. [Local privilege escalation via execve()](https://www.freebsd.org/security/advisories/FreeBSD-SA-26:13.exec.asc)

**Score:** 107 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=48077971)

FreeBSDのexecve(2)システムコールに演算子優先度バグが発見された。`memmove()`の引数計算において括弧の欠落により攻撃者制御データが隣接バッファを上書きし、非特権ユーザーがスーパーユーザー権限を取得可能。2026年4月29日にパッチが公開され、FreeBSD 15.0R-p7で修正済み。セキュリティ研究企業Califによる発見・実証。

### Key Discussion Points

- **Groxx**: 「演算子優先度バグが原因。プロジェクトで混合演算子には必ず括弧か分割代入を義務付けるべきと常々思っている」
- **cryptbe**: 「Califの研究者。ブログにAI生成エクスプロイトと詳細ウォークスルーを公開している」
- **tptacek**: 「ここ数ヶ月Califが素晴らしい成果を出し続けている。Thai Duong（元Google）の新会社」
- **cyberpunk**: 「4月28日のもので、すでに15.0R-p7でパッチ済み」
- **0xbadcafebee**: 「危険な関数の引数に明示的な境界チェックなしの算術演算が含まれている。Cコードがこれだから困る」

---

## 9. [The Serial TTL connector we deserve](https://kohlschuetter.github.io/blog/posts/2026/05/07/serial-ttl-connector/)

**Score:** 63 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=48049828)

e-bikeで広く使われるJulietコネクタを組み込みデバイスのシリアルTTLデバッグ用コネクタとして活用することを提案したブログ記事。壊れやすく極性を間違えやすいDupont線の代替として、堅牢・フールプルーフ・プラグ＆プレイを実現するJulietコネクタの配線規則やかしめ技術を詳しく解説。

### Key Discussion Points

- **foresto**: 「FTDIは3.5mm TRS（ヘッドフォン型）コネクタを使用。シングルボードコンピュータのエンクロージャに追加したら、標準オーディオ延長ケーブルで部屋の端からシリアルコンソールに接続できるようになった」
- **amstan**: 「電圧が同じでも、ターゲットまたはデバッガがオフの場合にUARTピン経由でESDダイオードを通じて意図しない電源供給が起きる危険がある。V_IO（Vcc）の4線構成が最も安全」
- **notthetup**: 「大きすぎる。AliExpressの3ピン磁気コネクタの方がコンパクトで好み」
- **exmadscientist**: 「1.8V/2.5VロジックのルーターにはV_IO露出の4線構成を強く推奨。多くの既製3.3Vアダプタは4線構成を活用していないが、それで多くの問題が解決する」
- **Aloha**: 「理想のシリアルコネクタにはDCE-DTE自動検出、自動電圧検出（RS-232/TTL 5V/3V）、自動型検出（TTL/RS-422/RS-485）が必要。8p8cまたは10p10cコネクタに各機能の識別抵抗を内蔵するのが理想」

---

## 10. [Show HN: Rust but Lisp](https://github.com/ThatXliner/rust-but-lisp)

**Score:** 96 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=48078575)

RustのセマンティクスをS式（LISP）構文で記述できるトランスパイラ「Rust but Lisp」のShowHN。Rustの所有権・借用・型検査をそのまま維持しながら、S式による均一でホモアイコニックな構文を実現。ランタイムオーバーヘッドなし。Lispマクロを活用したメタプログラミングの実験的探求。

### Key Discussion Points

- **ecto**: 「Rustに強くインスパイアされた自分のLisp言語"Loon"を紹介（所有権モデルを取り入れている）」
- **hawkice**: 「Common LispではなくRustを選ぶ意義は、Rust固有のセマンティクスをそのまま表現できること。それこそがこのプロジェクトの核心」
- **vermilingua**: 「全構文をカバーと言いながら、ライフタイム指定やターボフィッシュ（`::<>`）の例がない。Rustで最も難しい構文が抜けている」
- **skulk**: 「コンパイルエラー時にLispコードの該当箇所を矢印で示すエラーメッセージは？rust-analyzerのLSPサポートは？おそらくどちらもないだろうが、将来の改善課題として良いプロンプトになりそう」
- **GalaxyNova**: 「Rustにコンパイルする本格的なLisp方言ではなく、S式構文でRustを書くだけ。Lispプログラマーには奇妙に映る」

---

## Trends

今日のHNトップ10から見えてくるテーマは以下の通り：

1. **AI支援開発の功罪**: BunのRust書き換え（スコア461）は、LLMが大規模コードポーティングに圧倒的な効果を発揮することを示した一方で、コードの長期的な保守性・可読性への懸念や「計算資源を持つ者が圧倒的に有利になる」という格差問題を呼び起こした。

2. **言語間移植とRust**: BunのZig→Rust移行、「Rust but Lisp」プロジェクト、TypeScript→Rustの個人プロジェクトなど、Rustへの移行・統合が複数のストーリーで話題に。Rustの型安全性がLLM活用に有利という新たな視点が注目された。

3. **インターネットの保存と自由**: Internet Archive Switzerlandが最高スコア（562）を獲得。デジタル資産の分散保存、DMCA耐性、政治的圧力への対応が重要課題として浮上しており、コミュニティの関心の高さを示した。

4. **ハードウェア愛**: アセンブリ製Webサーバー、カシオ漆塗り電卓、シリアルTTLコネクタなど、低レイヤー・ハードウェア・ものづくりへの根強い関心がランクインした。特に「なぜやるのか？」という問いに「それが楽しいから」と答えるような実験的プロジェクトが好評。

5. **セキュリティ研究の活発化**: FreeBSDのexecve()権限昇格脆弱性はAI生成エクスプロイトを含む詳細な研究として公開された。セキュリティ研究においてもAIが実用的に活用されていることが明らかになった。
