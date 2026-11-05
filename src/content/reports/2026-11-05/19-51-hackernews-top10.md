---
title: "Hacker News トップ10 サマリー 2026-11-05"
date: "2026-11-05T19:51"
category: "summary"
summary: "musl の crypt() 由来の OpenSSH 認証バイパス、Motorola の GrapheneOS 対応端末、Servo 0.7.0 など"
tags: ["hackernews", "security", "grapheneos", "servo", "llm"]
---

## 1. [sshole](https://sshhole.com)

**Score:** 1798 | **Comments:** 480 | [Post](https://news.ycombinator.com/item?id=50378228)

musl libc 上で動く OpenSSH（PAM なし）の脆弱性を解説するページ。パスワード欄が `*` のアカウント（鍵認証のみのユーザーや Alpine の root など）に、257〜1024 文字の長いパスワードでログインできてしまう。musl の `crypt()` は失敗時に NULL ではなく `*` を返す。SHA-512 実装は 256 バイト超のキーを拒否するため、その失敗値が保存された `*` と一致し、sshd が認証成功と判定する。ページには 1980 年の BSD から 2012 年の musl 変更、2016 年の CVE-2016-6210 修正に至る経緯の年表がある。対処は OpenSSH 10.6p2 へのアップグレード、または `PasswordAuthentication no` の設定。

> **関連:** #2「Alpine Linux Security Advisory: OpenSSH-server password authentication bypass」も参照（同一脆弱性の別報道）

### Key Discussion Points

- **mpyne**: 攻撃者の狙いは `crypt($pw, $hash) == $hash` を成立させることだと整理した。`$hash` は `*` や `!` のこともあり、musl が失敗時に `*` を返す点などが重なって成立するという解説。
  - **chuckadams**: crypt() の挙動は異常で、新規のシステムでは使うべきでなく、エッジケースを正規化するラッパーが必要だと述べた。
- **BoppreH**: 「パスワードなし」と「ハッシュ計算エラー」の両方に `*` を使うのはバンド内シグナリングの典型例だ。NULL は許容でき、例外や Result 型のほうが望ましいと述べた。
  - **hedora**: 例外は制御フローが複雑になりテストも困難なので、ほとんど正解にならないと反論した。
  - **__MatrixMan__**: 文字列にも型を分けて宣言すれば、型システムで混在を防げると指摘した。
- **amluto**: musl は DES 実装ではこの種の失敗を回避済みだが、SHA 実装では忘れていた。また sshd はハッシュが短いとソルトを渡さないため、問題が顕在化すると指摘した。
  - **tchebb**: 「salt が x なら回避策が誤り」という指摘について、2 番目の引数が検証対象のハッシュなら最終的に不一致になるはずだと反論した。
- **nxobject**: musl が「便利だから」という理由でコア暗号関数を変更し、十分な監査をしていなかったことを残念がった。
  - **rustyhancock**: AI が見つけるのは高度なバグではなく、指摘されれば誰でも気づく単純な落とし穴かもしれないと述べた。
  - **0xbadcafebee**: musl は glibc にないバグを持ち込み、直さない傾向があるため、本番では使わないと述べた。
- **scandinavian**: 公式 Alpine の Docker イメージで再現を試みたが、`!` でも `*` でも成功しなかったと報告した。
  - **markuman123**: Alpine が EOL バージョンも含めて既に openssh-server を更新済みだからだと説明した。
  - **f311a**: 影響を受けるのは musl かつ PAM なしの OpenSSH の組み合わせで、デフォルト設定では再現しないと述べた。

## 2. [Alpine Linux Security Advisory: OpenSSH-server password authentication bypass](https://alpinelinux.org/posts/2026-11-05-openssh-password-authentication-bypass/)

**Score:** 415 | **Comments:** 72 | [Post](https://news.ycombinator.com/item?id=50379704)

Alpine Linux による公式アドバイザリ。影響範囲は 3.21〜3.24 と edge、およびサポート終了の 3.16〜3.20。条件は、PAM なしの openssh-server（または `UsePAM no`）、`PasswordAuthentication yes`（デフォルト）、パスワード欄が `*` のアカウントの存在、`$5$`/`$6$` ハッシュを持つローカルアカウントの存在。対処は `apk upgrade -U -a` と sshd の再起動で、回避策は `PasswordAuthentication no`。侵害確認には `/var/log/messages` の「Accepted password for」を調べる。

> **関連:** #1「sshole」も参照（同一脆弱性の別報道）

### Key Discussion Points

- **NewJazz**: musl の crypt() が 256 バイト超で `*` を返す理由と、POSIX 仕様との乖離について疑問を呈した。
  - **worksonmine**: 開発者が NULL チェックをせずクラッシュしたため、その対策として仕様から外れたらしいと述べた。
  - **api**: 仕様から危険な形で逸脱しており、事実上のバグだと述べた。
- **0127**: Rust の Result のように、エラーを返す設計が言語に組み込まれている点が強みだ。crypt() が `*` を返すのは異常だと述べた。
  - **adrianN**: Rust でも文字列を返す crypt は書けるし、C でもタグ付き共用体は書ける。違いは文化と構文糖衣だと反論した。
  - **spullara**: エラー処理を強制する Java の検査例外が嫌われたのは驚きだと述べた。
- **drob518**: Alpine は Docker エコシステムで広く使われているため、多くの人に影響が出ると懸念した。
  - **apexalpha**: Docker コンテナ内から SSH を公開する人は一般的には少ないと指摘した。
  - **NewJazz**: Alpine コンテナで SSH サーバーをパスワード認証付きで運用する人は多くないと述べた。
- **nodesocket**: Docker 化されたアプリはベースイメージの更新が遅いか、そもそも更新されないことが多いと指摘した。
- **getfacl**: ハードウェア上で Alpine を使っているが、パスワードなしのユーザーアカウントがないため影響を受けなかったと述べた。

## 3. [Motorola Signature 27 with GrapheneOS support](https://motorolanews.com/motorola-signature-27-2/)

**Score:** 244 | **Comments:** 153 | [Post](https://news.ycombinator.com/item?id=50380810)

Motorola のフラッグシップ Motorola Signature 27 が GrapheneOS をサポートするという発表。公式サイトは WebFetch で 403、Wayback のスナップショットも本文を取得できなかったため、コメントから推測した内容。開始価格は 1,599 ドルで、「今後数か月で世界展開」とされる。GrapheneOS 側によると、Motorola は独自の GMS 搭載 OS を出荷するが、GrapheneOS の要件を満たす設計にしてサポート開発を支援する。

### Key Discussion Points

- **canucker2016**: 記事は世界展開と書くが、MobileSyrup はカナダでは販売されず米国限定だと報じており、食い違うと指摘した。
- **utopiah**: 1,599 ドルは高すぎる。10 分の 1 の価格の中古 Pixel 8 で長期サポートを得られるので十分だと述べた。
  - **71bw**: バッテリー持ちと熱性能だけでも違いがあり、Pixel は Pixel 6 以降それを軽視してきたと反論した。
  - **silisili**: Moto は定価で長く売られないため、1〜2 か月で 1,000 ドル未満になる可能性が高いと述べた。
  - **glenstein**: 古いハードウェアで最新ソフトを使えることが、GrapheneOS がベンダー支配から守る点だと述べた。
- **y-c-o-m-b**: GrapheneOS と Gemini が並んで宣伝されているのは奇妙な提携に見えると述べた。
  - **grapheneos**: 投稿は端末全体の発表であり、GrapheneOS が主 OS ではない。Motorola が要件を満たす端末を用意し、開発を支援していると説明した。
  - **sidm0623**: Gemini と GrapheneOS の提携を示す情報源はあるのかと尋ねた。
  - **Ritewut**: AI を許容する脅威モデルの人もいると述べた。
- **smithbob**: Motorola は中国企業傘下で、bootloader やモデムを含む BSP を独自に改変しているため、信頼できるか分からないと述べた。
  - **jrexilius**: RF を制御するのはベースバンドチップの OS であり、バックドアが仕込まれる懸念も同じだと述べた。
  - **eigenspace**: 欲しいスマホが中国資本企業ばかりになることに違和感があり、Fairphone のカメラが良ければ買うと述べた。
  - **drnick1**: OS だけでも、Google 製アプリより大きくプライバシーが向上すると述べた。
- **NoGravitas**: GrapheneOS に必要なハードウェア対応が、今後 Moto G などの中価格帯に広がることを期待した。

## 4. [I wish tech companies knew more about me](https://rakhim.exotext.com/i-wish-tech-companies-knew-more-about-me)

**Score:** 166 | **Comments:** 161 | [Post](https://news.ycombinator.com/item?id=50378942)

テック企業はよく言われるほど個人情報を使いこなしておらず、ターゲティングは不器用で外れが多いという主張。既に買った商品の広告、10 年以上検索していない都市のホテル、何年もスキップしているボーカル入りテクノ曲の推薦などを挙げる。皮肉な結論として、どうせデータを収集されているなら、もう少し活用してほしいと述べる。

### Key Discussion Points

- **IMSAI8080**: Google の広告の本質は、高価なサイトの閲覧者を安価なサイトで買えるようにすることだ。追跡の主目的はそのためで、好みの理解は二次的だと述べた。
  - **asdff**: 多数の小さな広告枠の合計が単一の良い枠より安いとは考えにくく、NYT 枠の価格に下押し圧力がかかると疑問を呈した。
- **ChrisMarshallNY**: 同様にボーカル入りの曲をスキップしているが、曲は広告費を払った側が押し出すもので、その多くがボーカル入りだからだと推測した。
  - **_the_inflator**: 同じくボーカル入りテクノは苦手で、数少ない例外を挙げた。
- **sumitkumar**: 広告市場がエンドユーザーのために効率的なら Google や Meta は成り立たない。顧客は予算消化に追われる広告担当者だと述べた。
- **FrameworkFred**: 良い推薦はコストがかかるのだろう。Amazon はかつてのほうが推薦が優れていたと述べた。
- **yakkomajuri**: 広告ブロッカーを外して BBC を見て、広告だらけの体験にうんざりしたと述べた。
  - **ravenstine**: 広告は精神への攻撃だが、ミッドロール広告などを好む人もいると述べた。

## 5. [The Lisp curse, now coming to your ecosystem](https://javahippie.net/programming/llm/2026/03/05/the-lisp-curse-coming-to-your-ecosystem.html)

**Score:** 136 | **Comments:** 79 | [Post](https://news.ycombinator.com/item?id=50349667)

LLM でコードを生成するほうがライブラリ採用より安いと思われるようになれば、「Lisp の呪い」（柔軟すぎて各自が車輪を再発明し協調が減る現象）が Java などの他エコシステムにも広がるという論考。ライブラリ利用の減少によるフィードバック不足と、再利用可能なコードの公開減少が互いを強め合うと警告する。「Not generated here」は「Not invented here」の一種だとしつつ、OSS の協業が衰える可能性を指摘する。

### Key Discussion Points

- **vindarel**: 本当の呪いは、一度 Lisp を知ると戻れないことだ。Common Lisp のエコシステムは SBCL への貢献も続き健在だと述べた。
- **gavinray**: 同じ懸念を 2 月にブログで書いたと述べ、自作が検索より安くなったらどうなるかと問うた。
- **gleenn**: 「呪い」は大げさで、C など他言語のエコシステムにも程度の差で同様の傾向があると述べた。
- **jdormit**: 実績あるライブラリを使うべきという主張には反対だ。サプライチェーン攻撃が増える中、依存を増やさず自作するほうが安全上有利なことが多いと述べた。
- **spapas82**: 依存なしで機能を実装できるのは呪いでなく恩恵で、多くの依存は保守不足など問題が多いと述べた。

## 6. [September in Servo: <progress>, rounded rectangles, and more](https://servo.org/blog/2026/11/05/september-in-servo/)

**Score:** 135 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50379576)

Servo 0.7.0（2026 年 9 月）の報告。527 コミットが入り、`:checked`、`user-select`、`<progress>`、canvas の `roundRect()` などが追加された。SpiderMonkey 153.3 へ更新され、Candy Crush が動作し、WebGL2 適合性も改善された。組み込み API では `set_throttled` や `focus`/`blur` が削除された。新規コントリビューター 10 人、月額寄付は約 8,144 ドル。

### Key Discussion Points

- **robin_reala**: Servo を評価するなら、公式のスポンサー制度で支援できると呼びかけた。
- **caminanteblanco**: Android を含む多様なビルド済みリリースがあり、日常使いしやすいと述べた。
- **moderation**: 進歩は印象的だが、アドレスバーにフォーカスするショートカットなど UI の磨き込みが日常使いには必要だと述べた。
- **domenkozar**: Servo が AI による貢献を禁止していることを残念がった。
- **amelius**: AI の進歩で開発が速くなるはずだと期待し、vibe coding による貢献を許可しているのか尋ねた。

## 7. [My psychophysics as a bilateral cochlear implant user](https://claude.ai/artifact/L8qsMc3SorytGW3LA81nYf)

**Score:** 109 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=50381033)

2025 年の臨床試験で両耳に人工内耳を入れた韓国人の投稿者が、自分が実際に何を聞いているかを知るために、10 月 11 日〜11 月 4 日に 7 種類の心理物理試験を自分に実施した（10,992 試行）。試験用のブラウザアプリは Claude に作らせた。記事本体は取得せず、投稿者のコメントと GitHub リポジトリの説明から要約している。

### Key Discussion Points

- **losvedir**: 「正常な聴覚の記憶がない」と「生まれつき正常な聴力だった」という記述が矛盾していて混乱すると指摘した。
- **hackerci**: 人工内耳を両耳に付けた耳鼻科医で研究歴 20 年以上。聴神経との接点には限界があり、1960〜90 年代の研究が今も有効だと述べた。
- **libpcap**: Voicemod のようなソフトで声を明るくするなどして、聞き取りやすくならないか考察した。
- **cosmojg**: データを含む GitHub リポジトリを紹介した。
- **mi-rae**（投稿者）: 自分は人工内耳の当事者で、英語を話さず Claude で翻訳している。データ・解析コード・Lean 4 検証は GitHub にあり、間違いの指摘を歓迎すると述べた。

## 8. [Window Sweaters](https://github.com/saragordic/window-sweaters)

**Score:** 95 | **Comments:** 35 | [Post](https://news.ycombinator.com/item?id=50381383)

macOS のウィンドウに編み物風のボーダーを付けるメニューバーアプリ。色はアプリのアイコンから取り、By App や Zigzag などのスタイル、アプリ単位のオン/オフを備える。Homebrew で導入でき、Apple の公証は未取得。

### Key Discussion Points

- **jjuel**: LLM 以前は手間をかけた無意味なものに魅力があったが、今は LLM に任せれば済むので魔法が薄れたと述べた。
- **lnrd**: サプライチェーン攻撃が続く中、信頼できる主体でない GitHub リポジトリのものを動かす気にならないと述べた。
- **gordic_sara**: 自分が作者で、プロダクトデザイナーとして初の OSS だと述べた。信頼面では README に従ってソースからビルドできるとした。
- **StilesCrisis**: 実際の見た目のスクリーンショットが一枚もなく、空のウィンドウだけなのは妙だと指摘した。
- **hmokiguess**: JankyBorders は Stage Manager との制約で使うのをやめたと述べた。

## 9. [Launch HN: Rivet (YC W23) – Scale and Orchestrate Agents on S3](https://github.com/rivet-dev/rivet)

**Score:** 33 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50381687)

アクターモデルに基づくエージェント向けオーケストレーター。各アクターは状態と SQLite、WebSocket を持つ長寿命プロセスで、Node.js/Bun/Rust で動く。README は、アクターあたり 72 KB、p99 4.99 ms のコールドスタート、S3 を背景にした SQLite で p99 1.07 ms の書き込みとうたう。

### Key Discussion Points

- **fastball**: Cloudflare Durable Objects で動かしていた部分を Rivet で自前インフラに移し、快適だったと述べた。
- **haseebws94**: Claude Code や Codex などが agent-os で完全に動くのか、ユースケースを尋ねた。
- **apsurd**: エージェントにはサンドボックスのランタイムが必要ではないかと問い、「サンドボックスが遅い」の意味を尋ねた。
- **stiiv**: エージェントなしで、自己ホスト可能な TypeScript アクターを使いたい場合はどうかと尋ねた。
- **esafak**: エージェントの処理時間はモデル待ちが大半で、オーケストレーション速度が問題とは思えない。耐久性を前面に出すべきだと述べた。

## 10. [How to Lie With Statistics (1954) [pdf]](https://www.horace.org/blog/wp-content/uploads/2012/05/How-to-Lie-With-Statistics-1954-Huff.pdf)

**Score:** 31 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50382594)

統計の誤用による印象操作を解説した古典的名著の PDF（記事本体は PDF のため取得せず、コメントから推測）。統計を学ぶ学生向けの定番書として挙げる声が多い。

### Key Discussion Points

- **vavooom**: 生涯で最も好きな出版物の一つで、大学で統計専攻を選ぶきっかけになったと述べた。
- **SirFatty**: 今も市販されている本なのに、なぜ PDF のコピーを共有するのかと疑問を呈した。
- **lelanthran**: 統計を学ぶ学生に勧める最良の本だが、絶版だと思っていたと述べた。

## Trends

- **LLM がセキュリティとコードの前提を変える**: musl の crypt() 問題（#1・#2）は、バンド内シグナリングという古い設計の教訓として議論された。#5 は LLM による自作増加の影響を、#8 は LLM 以前の手作業の価値を話題にした。#6 では Servo の AI 貢献禁止にも言及があった。
- **サプライチェーン不信**: 新しい GitHub リポジトリを信頼できないという声（#8）と、依存を減らすべきだという声（#5）が並んだ。
- **プライバシーと信頼**: GrapheneOS と中国資本の Motorola 端末（#3）、広告ターゲティング（#4）で、信頼の置き所が議論された。
