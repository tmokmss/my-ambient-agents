---
title: "Hacker News トップ10 (2026-11-15)"
date: "2026-11-15T06:06"
category: "summary"
summary: "Starship Flight 15 のブースター回収、Lovable アプリの個人情報露出、ソフトウェア職種の系譜図など HN 上位10件の要約"
tags: ["hackernews", "summary"]
---

## 1. [SpaceX catches the Starship to end Flight 15](https://www.spacex.com/launches/starship-flight-15)

**Score:** 993 | **Comments:** 666 | [Post](https://news.ycombinator.com/item?id=50500963)

SpaceX の Starship Flight 15 で、Starship（上段）をキャッチして飛行を締めくくったという発表。ページ本文は JS 描画で取得できなかったため、コメントに基づく要約。コメントによれば約50トンのペイロード相当を運び、完全再使用に大きく近づいた。残る課題は耐熱シールドの状態確認と、整備なしでの再飛行。

### Key Discussion Points

- **GMoromisato**: Starship は「正しく作り直したスペースシャトル」。固体ブースターなし、オービターは側面ではなく上に載せる構成で、量産ラインにより約4週間で1機のブースター、約2週間で1機の船体を作れる。
  - **bumby**: シャトルが複雑になった背景には NASA と国防総省という複数の発注者の要求や議会区への分散発注があり、Starship はその制約を受けない。
  - **gcanyon**: 設計開始から半世紀が経っており、比較は 747 とフォード・トライモーターを比べるようなもの。
- **small_model**: 耐熱シールドが持てば全てが変わる。次は船体の二重キャッチと再使用で、軌道投入コストが大きく下がる。
  - **bryanlarsen**: 迅速再使用の目標に届かなくても、タイル交換は上段を新造するより安く、燃料費以下になりうる。
  - **emkoemko**: Falcon 9 で既に安くなっているが、Starlink 以外に市場が広がるかは疑問。
- **ChuckMcM**: ブースターにあと数トンの推進剤があれば両方キャッチできたかもしれない。完全再使用は Falcon 9（コスト比で約60%と推定）より優れる。
  - **vl**: 今回約50トンを届けており、このままでも軌道到達の価格は大きく下がる。
- **m4rtink**: 地元のプラネタリウムのドームで中継を見た。ボイジャーの話と「スタートレック」上映の直後にキャッチが映され、歴史的な体験だった。

## 2. [Lovable apps expose passport details and more than 200K private messages](https://www.crissyfield.de/research/lovable-en/)

**Score:** 743 | **Comments:** 295 | [Post](https://news.ycombinator.com/item?id=50499017)

Crissy Field GmbH が Handelsblatt と協力し、Common Crawl から Lovable で作られた159,041プロジェクトを分析した調査。Supabase を使う34,545件のうち24,664サイトが、ログインなしでデータベースのレコードを返していた。追加の読み取り専用リクエストで、7,403サイト（30%）の10,560テーブルにメールアドレスを含むレコードがあった。この30%は確定した漏洩率ではなく、サンプルも全体を代表しない。責任は利用者側にあるとする利用規約と、「技術知識不要」という訴求のギャップを指摘している。

### Key Discussion Points

- **neathack**: 記事の著者本人を名乗る。特別なハッキング技術は使っておらず、中程度の知識があれば再現できると述べた。
  - **karakoram**: 問題は Lovable の設計と Supabase 連携のどちらにあるのか。他の AI ツールも Supabase を標準採用している。
  - **lysace**: 分析した159k サイトのうち漏洩したのは約2.5%（著者の回答）。
- **igorandri**: Lovable のセキュリティ責任者を名乗る。原因は不十分な Row-Level Security で、公開前の自動スキャンと無料の SAST、自動修正を提供していると説明した。
  - **varenc**: 7,500のサイト運営者が警告に対応しなかったのは、Lovable 側の体系的な失敗でもある。
  - **jacquesm**: 流出したデータが悪用されないよう、どう保証するのか。流出先の棚卸しや関係者への報告はしたのか。
- **SOLAR_FIELDS**: Supabase の責任も大きい。フロントエンド用キーが既定でデータベースへのアクセスも許す仕様で、10月30日に修正されたとされるが、既存プロジェクトには既定値が残るとの報告がある。
  - **fudged71**: 5年前からの問題が今年10月にようやく修正されたのか、修正のリンクはあるか。
- **liquid_thyme**: プラットフォーム側が、デフォルト拒否のDB、最小権限のAPI、自動の認証テストなどで、安全でないデプロイを難しくすべき。
- **Oras**: 漏洩は AI 以前からあるが、AI 生成アプリは狙いやすく、数も毎日増える。
  - **cprsimpson**: 参入障壁が大きく下がったことが質的な違い。

## 3. [A family tree of software job titles](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/)

**Score:** 265 | **Comments:** 130 | [Post](https://news.ycombinator.com/item?id=50499038)

1940年代の「Computer」（人間）から「AI Agent / Context Engineer」まで104の職種を、7つの系統（開発、分析・アーキテクチャ、運用・インフラ、ネットワーク・セキュリティ、データ・AI、品質・テスト、サポート）に分けた系譜図。Claude の助けを借りて作られた。Graphviz の .dot ファイルと JSON で構成され、年代は「一般化した時期」の推定で出典付きではない。

### Key Discussion Points

- **probably_wrong**: AI で Python プロジェクトを公開している未経験者が肩書きを尋ねてきた。「Project Manager」を勧めると嫌がられた。肩書きは重要でないと言いつつ、実際は重視される。
  - **pcthrowaway**: 自分は10年のキャリアがあるが、Project Manager と名乗るのは抵抗がある。
- **siva7**: Scrum や Agile は廃れつつあり、DevOps も組織ごとに意味が違った。
  - **nkmnz**: DevOps は役職ではなく組織の指針であるべき。
  - **makeitdouble**: 開発と運用は別の生活様式で、運用にはオンコールや障害対応が伴う。
- **stroebs**: DevOps Engineer や SRE など多くの肩書きを経験したが、意味があったのは Cloud Infrastructure Engineer だけ。
  - **groestl**: ある規模以上では、ツールを最適化する専任の DevOps エンジニアに意味がある。
- **verall**: 図は、非ソフトウェアの分野としての systems engineering と、ドライバや OS を書く「systems software engineer」を欠いている。
- **Zaheer**: Levels.fyi の共同創業者を名乗る。同じ肩書きでも企業や年代で意味が大きく異なり、給与データでは同義の肩書きを統合している。

## 4. [How did Woz write the Apple 1 BASIC before building the computer?](https://retrocomputing.stackexchange.com/questions/17957)

**Score:** 166 | **Comments:** 67 | [Post](https://news.ycombinator.com/item?id=50501594)

Retrocomputing Stack Exchange の質問。ページは Cloudflare のチャレンジで取得できなかったため、コメントに基づく要約。8ビット機の時代は、紙の上でアセンブリを書き、手で機械語に変換し、実機で試すのが標準的な手順だったと説明されている。

### Key Discussion Points

- **femto**: 紙にアセンブリを書いて実機に入力するのが 8bit 機の標準的な方法で、よく使う命令は暗記していた。ゆっくり考えて書く「スローなプログラミング」でもあった。
  - **dhosek**: Apple II の時代でもアセンブラは高価で、方眼紙のノートに手で書いていた。
  - **billforsternz**: 1981年に Intel 8085 のリファレンスを読み、同じ方法で最初の本格的プログラムを書いた。
- **II2II**: 追加質問。Woz はどうやって BASIC を ROM に入れたのか。モニタを使っても、ROM に書き込むにはラッチなどのハードが必要になる。
  - **skissane**: 別の質問へのリンクを示し、HP の仕事場の機材を使ったとされる。ただし Apple I の ROM にはモニタだけがあり、BASIC はモニタ経由で入力した可能性があると補足。
- **asdefghyk**: 小さな部分から始め、まずモニタ（WOZMON）を作り、それでごく簡単な BASIC インタプリタを書いたのだろう。クロスアセンブラで手作業を避けた可能性もある。
- **mrandish**: アセンブラが入手しにくい時期は、BASIC でモニタを書き、雑誌掲載のリスト入力や POKE でブートストラップを入れた。
- **david-gpu**: キャリアで3回だけ手でアセンブルした。最初は GPU（SGX 535）のブレンド処理を書いた時。

## 5. [We're Asking an Appeals Court to Require a Warrant for ALPR Searches](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches)

**Score:** 161 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=50503255)

EFF と ACLU が、第6巡回区控訴裁判所の United States v. Sturdivant に amicus brief を提出した。警察は令状なしに Flock と ELSAG の2つのデータベースを検索し、容疑者の移動を追跡した。地裁は「ナンバープレートは公衆から見える」としてプライバシーの期待を否定した。EFF は、ALPR は過去の移動を遡れる「タイムマシン」であり、検索には令状が必要だと主張している。先月、連邦地裁が ALPR を「無差別な大量監視」と判断した例も挙げている。

### Key Discussion Points

- **hedora**: 令状と無関係なデータを保存すべきではない。ただし保存するなら、被害者の保護を強め、捜査で実際に使われるべき。近所の連続窃盗で、位置情報の逆ジオフェンス令状なら犯人を絞れたと述べた。
  - **digitalPhonix**: 令状なしに集めたデータの保持は刑事罰に値し、捜査で使うことにも反対。
- **petcat**: ニューハンプシャー州の法律（全プレートの収集禁止、プレート以外の撮影禁止、非ヒットは3分以内に削除など）を全州が採用すれば解決する。
  - **bradknowles**: 政権が変われば法律ごと覆され、カメラ網は権力者に悪用されうる。
  - **charcircuit**: 過去の検索を禁じても、プレートの付け替えなどがあるので解決とは言えない。
- **jmward01**: ALPR は技術が未熟だったから限定的だった。顔認識など一般的な物体認識も同水準に近づいており、今止めなければ常時追跡データベースができる。
- **largbae**: ALPR が保存してよいのは、有効な令状がある車両のヒットだけにすべき。
  - **AnimalMuppet**: 事件前後の車の位置確認など有用な検索ができなくなり、反発が強いだろう。
- **fritzo**: 「監視から自由」を「武装強盗の有罪化」より優先する理由は何か。
  - **taormina**: 監視は地域に萎縮効果を与える。この技術でなければ捕まえられなかった強盗が何件あるのか。

## 6. [Show HN: Gawain – Require type hints on all Python variables](https://github.com/matheuzgomes/gawain)

**Score:** 21 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50504072)

Python コードの変数・引数・戻り値・クラス属性すべてに型注釈を要求し、ty または pyrefly で型チェックするツール。ruff の ANN 系や flake8-annotations は関数だけが対象で、変数には求めない。作者は `dict[str, Any]` が嫌いで作ったと述べ、IDE の型推論で足りる人には不要としている。

### Key Discussion Points

- **orsorna**: 型の強制の良さに気づいてから他の言語で書くことが増え、長期運用が要る用途では Python に戻らない。
- **Garlef**: 自分向きではないが姿勢は好き。Python の構文は元々きれいではなく、注釈でさらに冗長になる。
- **__mharrison__**: 型を使って高速に動く厳格な Python があれば面白い。

## 7. [The Evolving Story of How Chemistry Became Biology](https://www.quantamagazine.org/the-evolving-story-of-how-chemistry-became-biology-20261112/)

**Score:** 20 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50482222)

Quanta Magazine の生命の起源特集の記事（2026年11月12日）。地球誕生から約2億年の間に、化学がどのように生物学へ移行したのか。どの分子が先かをめぐる長年の議論を経て、新世代の研究者たちが「生命とは何か」を考え直している。

## 8. [Memory Safety Bugs in Rust Standard Library](https://forge-blog.github.io/posts/rust-std-memory-safety/)

**Score:** 19 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50478701)

Microsoft の FORGE Lab が、Rust の標準ライブラリ（std / core）の unsafe コードにあるメモリ安全性バグを報告した。AI を使った脆弱性スキャン研究システム「Hyenas」も使い、一部は safe Rust のコードだけで未定義動作を起こせる。パターンは3つ：パニックしないという信頼、ユーザー実装が正しいという信頼、下層システムへの信頼。公開時点で報告のうち2件は未解決。

### Key Discussion Points

- **not_a_bot_4sho**: AI の良い使い道だ。

## 9. [Show HN: Turbo-Browser-MCP – Batch forms, DOM deltas and submit guards for MCP](https://github.com/Tthanh2k6/turbo-browser-mcp)

**Score:** 13 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50503930)

Playwright ベースの MCP サーバー。LLM のブラウザ操作でのトークン消費と往復回数を減らすため、25〜33のプリミティブを10個のバッチツールに統合した。差分 DOM スナップショット、React / Shadow DOM / iframe に対応した1ターンのフォーム入力、ディスクからの直接アップロード、並列タブ、送信前の確認ガードがある。README のベンチマークでは、ポストクリックの差分スナップショットでフル ARIA 比98.4%のトークン削減としている（作者自身の数値）。

## 10. [Osint Case Studies](https://osintsearch.org/blog/osint-case-studies)

**Score:** 13 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50503731)

OSINTsearch による、12件の事例集。起訴・有罪・制裁を受けたサイバー犯罪者について、裁判資料や米財務省の制裁リスト、報道で公表済みのメールアドレスやハンドルをもとに、2026年9月にメール検索やユーザー名検索を実行した結果を整理している。誰かを特定する目的ではなく、公開記録が先にあり検索結果はそれを補強する、という立場。

### Key Discussion Points

- **boneskull**: 書き手が労力をかけないなら、読む労力もかけない（AI 生成文への反発）。
- **alwa**: 文体が Claude 風で、分析内容も表面的なのではないかと疑っている。

## Trends

- **AI 生成物の品質と責任**: Lovable のデータ露出、AI 風の文章への反発（#10）、AI で見つかった Rust 標準ライブラリのバグ（#8）、AI 時代の職種の系譜（#3）と、AI が作る・見つけるものの安全性や信頼性が複数の記事に共通している。
- **監視とプライバシー**: ALPR の令状要否をめぐる訴訟（#5）と、個人情報が露出したアプリ（#2）の両方で、データの保存と公開の既定値が争点になっている。
- **ハードウェアの節目**: Starship のキャッチ（#1）が最大の話題で、Woz の手作業のアセンブリ（#4）と、人の手による工学の対比も見える。
