---
title: "Hacker News トップ10 (2026-10-07)"
date: "2026-10-07T05:40"
category: "summary"
summary: "Mistral Large 4 公開、OpenAI の数学ブレークスルー、小型の決定モデル（Decisions API / Strands Decider）が話題。"
tags: ["hackernews", "AI", "LLM", "math", "open-source"]
---

## 1. [Mistral Large 4](https://mistral.ai/news/mistral-large-4/)

**Score:** 1672 | **Comments:** 998 | [Post](https://news.ycombinator.com/item?id=49977979)

Mistral が総パラメータ約1兆（アクティブ490億）のネイティブマルチモーダル MoE モデル Mistral Large 4 を発表。欧州内のデータセンターで NVIDIA GB 3,800基を使い一から学習し、サイバーセキュリティ（脆弱性再現で82%）や視覚グラウンディングで強い結果を示す。API は入力 $1.36 / 出力 $4.18（100万トークンあたり）、オープンウェイトは10月末までに公開予定。

### Key Discussion Points

- **simonw**: 推論設定が none / high の2択で、high にしても出力トークンはむしろ減るなど差は小さかった。ペリカンSVGでは high の自転車フレームの方が良い出来。
  - **defjm**: 「完璧なペリカン、AGI は来た」と冗談交じりに評価。
  - **pilaf**: 最新の Astra のペリカン画像と共通要素が多いのが興味深いと指摘。
- **prodigycorp**: ビジョンとサイバー系ベンチマークが強く、中国系モデルより優れた防御向けモデル。Mistral への批判は不当だと擁護。
  - **oh_no**: 一部の限定的なベンチマークで、しかも社内数値で勝っているだけだと反論。
- **abixb**: 約4,000 GPU で学習した1Tモデルが上位級に迫るなら、米国の巨大データセンターは何のためかと質問。
  - **itkovian_**: 閉じたモデルは依然としてオープンウェイトより上で、計算資源は推論や多数の実験にも使われると回答。
  - **comex**: 蒸留の影響と収穫逓減もあり、モデル品質の向上には指数的な規模拡大が必要だと補足。
- **michaelkdev**: 最高性能でなくとも、EU 内で学習・推論できる「主権」の面で重要な一歩。
  - **coredev_**: EU 企業としてコーディングは米国製でも、自社プロダクトの機能には使わない方針で、Mistral もそれを理解している。
  - **pembrook**: スタックの最後の3%しか主権がなく、中国発の蒸留成果と米台の半導体に依存していると懐疑的。
- **jakozaur**: サイバー分野では GLM-5.3 の有力な代替。ただし総合のパレートフロンティアではやや劣り、コストも高い（Vals Index 48.05% vs 53.51%）。
  - **drob518**: 「GLM 5.3 よりやや下だが欧州製」で、フロンティアではないという同意見。

## 2. [Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics/)

**Score:** 678 | **Comments:** 620 | [Post](https://news.ycombinator.com/item?id=49984923)

OpenAI が社内のフロンティアモデルによる数学の未解決問題への新成果を公開し、Lean による証明の形式化と研究詳細を GitHub で共有した（OpenAI RSS の説明文に基づく。記事本体は未取得）。コメントによれば、Unique Games Conjecture の証明、Barnette 予想、3台マシンの単位ジョブスケジューリングの多項式時間アルゴリズムなどが含まれる。

### Key Discussion Points

- **jboggan**: 24年間 Barnette 予想に取り組んできた立場から、解決されたことに複雑な喪失感を表明。
  - **nilkn**: 同様の経験をした研究者は他にも多く、不思議な気分になると共感。
  - **ncr100**: それは一種の悲嘆（grief）だと思いやりのコメント。
- **winfieldchen**: Unique Games Conjecture が証明されたなら、近似アルゴリズムの限界を扱う教科書が書き換えになる大きな成果。
- **xanderlewis**: Kevin Buzzard の「一人の人間が現代純粋数学のすべてを理解したら」という問いに、いま答えが見え始めているという引用。
  - **anon-3988**: Lean で検証できることが決定的に重要で、そうでなければ誰も検証できない定理が大量に出る。
  - **outworlder**: 異分野間の深い相関を要するアイデアは、これまで日の目を見ていなかったはず。
- **NotOscarWilde**: 1979年の Garey & Johnson 以来の未解決問題だったスケジューリング問題も解決されたと紹介。
  - **keeganryan**: 指数が 10^12 に達する多項式時間アルゴリズムの例もあると補足。
- **prideout**: 自分は最新モデルで Barnette 予想を攻めて失敗したが、この証明は一見理解しやすそう。
  - **an0malous**: なぜ OpenAI は成功したのかと質問。
  - **TeeWEE**: 証明は誰が検証したのかと質問。

## 3. [EmbeddingGemma 2: An open, lightweight multimodal embedding model](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/)

**Score:** 278 | **Comments:** 31 | [Post](https://news.ycombinator.com/item?id=49980487)

Google が Gemma 4 アーキテクチャをベースにした7.4億パラメータの Apache 2.0 マルチモーダル埋め込みモデルを公開。テキスト・画像・音声・動画を同一空間に埋め込み、コンテキストは8K。Matryoshka 表現でベクトルを最大6分の1に圧縮でき、MTEB Code は 68.76 から 78.68 に向上、オンデバイス動作を想定している。

### Key Discussion Points

- **simonw**: 埋め込みモデルが Apache 2.0 なのは重要。独占モデルだとベンダーが提供を終えた際に、保存済みの数百万ベクトルを再計算するコストが発生する。
  - **0xdeafbeef**: CPU と GPU でも出力が変わりうるので、ゴールデンテストを用意すべき。
- **Nautman**: このモデルは Jev のような決定タスクにも、テキストと画像で使える。
  - **Zambyte**: ローカルで試したところ、公式例の「フライトをキャンセルして返金して」が金融関連と判定されず（p(true)=0.22）失敗した。
  - **rao-v**: 回答候補を埋め込んで質問との内積を取る手法は面白い。
- **minimaxir**: 待望の中型の埋め込みモデルで、テキスト270M、視覚込み440M という規模も妥当。
  - **alberto467**: 動画だけでなく音声にも対応しており、ローカルのマルチモーダル検索に期待。
  - **minimaxir**: M3 Pro で テキスト 78件/秒、画像 4件/秒、音声 6件/秒、動画 0.2件/秒という試算。
- **flockonus**: Android 端末に載せるレベルのモデルをオープンにした Google を称賛。
- **anyg**: 注目の decisions API が3番目の例と要約中の一言に埋もれており、マルチモーダルな意思決定を前面に出すべき。

## 4. [Decisions API is in public beta](https://developers.openai.com/api/docs/guides/decisions)

**Score:** 210 | **Comments:** 101 | [Post](https://news.ycombinator.com/item?id=49984025)

OpenAI が、テキストや画像を入力に型付きの回答を返す Decisions API を公開ベータで提供開始。Responses API の約10倍高速とされ、確率付きの predicate、選択肢から選ぶ choice、段階評価の score の3種類の質問に対応する。現状のモデルは gpt-6-luna のみで、入力は $0.10 / 100万トークン、出力は無料。

> **関連:** #6「Strands Decider 2B: a small, open-source, decision model」も参照（同じ「決定モデル」カテゴリの別実装）

### Key Discussion Points

- **simonw**: curl での利用例を紹介（predicate 型の質問でセンチメントを判定する）。
  - **chupchap**: ML 時代の分類モデルと何が違うのかと質問。
- **TSiege**: Jev の登場で AI ビジネスはコモディティ市場だと確定的になり、大手は速い yes/no/確信度という出力トークン需要を守るため値下げ競争に入っている。
  - **tripleee**: モデル切り替えはキー2回で済み、これほど粘着性のない製品はない。
  - **gobdovan**: むしろコモディティ化して置換しやすい方向へ進むことを望み、高額なエグレス課金の再来は避けたい。
- **Topfi**: 自前の決定評価（約600回）で Jev と Mercury Decide と比較。暫定的に、Jev より遅く Mercury Decide と同程度の遅延。
  - **Shank**: Jev は規制要件を満たさないため、コンプライアンスが必要な顧客は OpenAI を選ぶ。
  - **scosman**: 数週間後に改良版を出せばよく、旗を立てること自体に意味がある。
  - **oh_no**: 既存の OpenAI 契約があれば導入しやすく、未完成でも出す価値はある。
- **minraws**: 割高で、ローカルモデルや Luna、Jev より劣るという辛口評価。
- **isoprophlex**: 二値判定に「noul」という用語を使うのをやめて助かった、と皮肉。

## 5. [Penguin Mail – open-source Rust email client for Linux with AI](https://penguin-mail.com/)

**Score:** 135 | **Comments:** 57 | [Post](https://news.ycombinator.com/item?id=49984716)

Linux 向けの無料オープンソースのメール・カレンダーアプリ。Gmail、Microsoft、IMAP/POP3/SMTP に対応し、統合受信箱、OpenPGP / S/MIME、メッセージ予約送信などを備える。ローカルで動作するオプションの AI アシスタントがあり、バックエンドサーバーやトラッキングはない。

### Key Discussion Points

- **nsagent**: 紹介 YouTube 動画で詐欺的な広告に遭遇し、ドメインも AI 生成コンテンツだらけの詐欺サイトだった。
- **aboardRat4**: 既存クライアントはどれもひどいのに、助けずに作り直しばかりだと批判。
- **slipheen**: Mail.app 風の見た目が良く、ソフトのパーソナライズコストが下がるほど選択肢が多様化するという歓迎コメント。
- **mburns**: Fastmail を対応プロバイダに挙げながら JMAP に未対応なのが惜しい。
- **wewewedxfgdf**: 業界の作法として見出しの末尾に「written in Rust」を付けるべきだという皮肉。

## 6. [Strands Decider 2B: a small, open-source, decision model](https://strandsagents.com/blog/introducing-strands-decider/)

**Score:** 98 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=49987076)

Qwen3.5-2B をベースに、テキスト生成ヘッドを候補回答を採点するポインタヘッドに置き換えた2Bの決定モデル。RTX 3090 で約115msで動き、JevBench の2Bクラス33モデル中3位。モデル重みと学習データは GitHub と Hugging Face で公開されている。モデルルーティングやツール選択、ガードレールなどのエージェント用途を想定する。

> **関連:** #4「Decisions API is in public beta」も参照（同じ「決定モデル」カテゴリの別実装）

### Key Discussion Points

- **SubiculumCode**: マルチモーダル対応のものはあるか、較正された確率で「この形は一致するか」を答えさせたい。
- **adenta**: 人間が裏で答える「Jerry」という決定モデルを芸人が出してほしい、という冗談。
  - 他のコメントでは、技術的に多くの用途がありうるが、具体的なアイデアを募る声も出た。
- **keyle**: AI の専門家の話で理解できることは稀だが、人間が人間のために書いた良い文章。
- **soltanov**: ベンチマーク上の較正は、未知の本番入力での信頼性を保証しない。
- **teruakohatu**: CPU でどれくらい動くのかと質問。

## 7. [The cost of lies: A Mineserver story](https://www.jeremyreimer.com/rockets-item.lsp?f=true&p=272)

**Score:** 55 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=49950865)

Robert X. Cringely が2015年に Kickstarter で $35,000 超を集めた Minecraft サーバー機器 Mineserver が頓挫し、遅延の言い訳が山火事による全損まで積み重なった経緯を検証する記事。2020年には衛星打ち上げ会社を始めたと主張し加工画像まで出したが、実際は予備的な協議にとどまっていたという。小さな嘘が大きな嘘を呼び信用を失うという教訓を述べる。

### Key Discussion Points

- **WheelsAtLarge**: Cringely は大きなアイデアの人だが、事業のきつい部分が始まると興味を失い実行が続かない。
- **syntheticnature**: 2020年の記事で、Cringely の過去を知っていれば Kickstarter を支援しなかったはずで、主張には疑いを持つべきだった。
- **vova_hn2**: 「二度とやらない」という発言に対し、きっとまたやる、という皮肉。
- **Toynbeeidea**: 衣服は手で持てても大量の電子部品は持てず、保険の話になるはずだと記事に反論。
- **opan**: 「mineserver」は Minecraft サーバーソフトの書き直しを指すという用語解説。

## 8. [What Is Codemode](https://lucumr.pocoo.org/2026/10/6/codemode/)

**Score:** 43 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=49978333)

Armin Ronacher が Pi 1.0 の Codemode を解説。モデルがサンドボックス内の JavaScript を書き、ハーネス側で複数のツール呼び出しを組み合わせて並行実行や状態保持を行う。画像生成や GitHub Issue の分類などの例を示し、MCP 連携の非効率さや耐久性、小型モデル対応、言語選択を今後の課題とする。

### Key Discussion Points

- **ylxdzsw**: ほとんどの実装が JavaScript を選ぶのはなぜか。bash を言語にして試作したところ同等に動き、codemode を教えるプロンプトも不要だった。
- **soltanov**: 実行が中断した後の復旧と、完了済みの副作用と再実行して安全な呼び出しの区別が課題。

## 9. [ESP32-C3 Adblock](https://github.com/M-Abozaid/esp32-c3-adblock)

**Score:** 41 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=49986862)

約$2の ESP32-C3 で動く DNS 広告ブロッカー。ブロックリストのドメインを40ビットのハッシュとしてフラッシュに保存し、二分探索で照合することで、約5万バイトの RAM で53.7万超のドメインをブロックできる。Web ダッシュボード、OTA 更新、WiFi セットアップポータルを備え、USB ドングルとしても使える。

### Key Discussion Points

- **BLKNSLVR**: PiHole で1,400万超のドメインをブロックしているが、許可リスト方式への移行を考えており、これはそれに向いていそう。
- **1vuio0pswjnm7**: 許可リストの方が小さくて済み、14万件未満で足りる人も多い。
- **muti**: README のハッシュ衝突の扱いは、ブロック対象同士ではなく誤検知（正規ドメインの誤ブロック）が問題になるはず。
- **fwip**: 面白いが遅延が高いかもしれず、ドキュメントが AI 生成なのが残念。

## 10. [La Cueva BBS in Mexico in 1993 (session replay)](https://nanochess.org/la_cueva_bbs.html)

**Score:** 25 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=49987675)

著者が1993年に自作の Z280 コンピュータと2400ボーのモデムでメキシコの BBS「La Cueva」に接続した際の、64KB のキャプチャバッファを保存・再現した記事。ANSI エスケープ対応の自作端末ソフトの実装や、当時のメキシコの BBS 18件のリストも載せている。

### Key Discussion Points

- **notorandit**: Z280 は8ビットCPUで64KiB しかアクセスできず、1993年に使うには珍しい組み合わせ。
- **BubbleRings**: RBBS-PC で一回線の BBS を運営していた思い出と、訪問者とチャットして友人になった体験。
- **gforce_de**: 自分も昔の BBS セッションの記録を残しておけばよかった。

## Trends

- **AI モデルの競争が3方向に分かれた**: 欧州製フロンティア級（Mistral Large 4）、数学の未解決問題という成果（OpenAI）、そして小型で安価な専用モデルである。
- **「決定モデル」の台頭**: OpenAI の Decisions API（#4）と Strands Decider（#6）は、生成せず確率付きで選ぶ軽量モデルという同じ潮流にある。コメントでは Jev との価格競争やコモディティ化が語られ、EmbeddingGemma 2（#3）のようなオンデバイスのオープンモデルも同じ方向を支える。
- **主権とオープン性**: Mistral の欧州内学習と、Apache 2.0 の埋め込みモデルが好意的に受け止められた。
- **AI と人間の仕事の変化**: 数学の証明を見た研究者の複雑な心境や、エージェントのコード実行（Codemode）が話題になった。
- **ハード・レトロ系**: ESP32-C3 の広告ブロックや1993年の BBS といった、制約の中の工夫を楽しむ投稿も一定の関心を集めた。
