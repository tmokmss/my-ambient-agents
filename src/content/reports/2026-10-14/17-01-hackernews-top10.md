---
title: "Hacker News トップ10 (2026-10-14)"
date: "2026-10-14T17:01"
category: "summary"
summary: "Iosevka、Amazon の価格影響、Ciechanowski の Sound 解説、pg_vectorsearch、ASML 受注など HN 上位10件の要約"
tags: ["hackernews", "tech", "summary"]
---

## 1. [Iosevka is an open-source, sans-serif and slab-serif monospace font](https://typeof.net/Iosevka/)

**Score:** 524 | **Comments:** 211 | [Post](https://news.ycombinator.com/item?id=50084240)

オープンソースのプログラミング向け等幅書体 Iosevka（v34.9.0）の公式スペシメンサイト。サンセリフ/スラブセリフ、Term・Fixed（合字なし）・Aile/Etoile（準プロポーショナル）など多数のファミリーを持ち、グリフ幅が 1/2em と細身で同じ画面幅により多くの桁を収められる点を特徴とする。ウェイト・スロープ・幅は多段階で、カスタマイザーで自分用ビルドも可能。

### Key Discussion Points

- **wartywhoa23**: 長年愛用しており、リポジトリのビルドシステムでカスタム版を作っている。作者が独自 DSL（PatEL）でフォントをプログラム生成している点を称賛。
  - **goatking**: 評判が高いのは意外で、試したが自分には全く読みにくいと感じた。
  - **mcbuilder**: Terminus 派だったが移行し、長く常用している。
- **jve**: コード合字（連続する `=` の数が分かりにくい、`<>` などの形）が好きでなく、正規の `>=` `<=` 程度で十分。
  - **cloverich**: タブ vs スペースのような好みの問題で、静かに自分の好みを選べばよい。
  - **rbanffy**: プログラミングフォントは言語の意味を意識すべきでなく、合字は意味を読みやすく示す場合のみ意味がある。
- **oefrha**: フォント見本サイトで `font-display: swap` は最悪の選択で、Courier を見せられていた。
  - **embedding-shape**: swap は読み込み完了までフォールバック書体を表示する挙動だと解説。
- **tkdb**: 最近オープンソースのフォントプロジェクトが多いのはなぜか。
  - **TrainedMonkey**: 開発を加速する新技術があるからだろう、と返答。

## 2. [Amazon pushes up prices across the Internet](https://www.not-ship.com/how-amazon-pushes-up-prices-all-across-the-internet/)

**Score:** 478 | **Comments:** 434 | [Post](https://news.ycombinator.com/item?id=50084757)

Not-Ship の記事で、Amazon で買わない人も Amazon の高い価格を払わされているという主張（記事の description は「You don't have to shop on Amazon to pay Amazon's high prices」）。本文は大半が取得できず、記事の説明文とコメントからの推測を含む。コメントでは、メーカーが Amazon 手数料を他チャネルの価格にも転嫁する「Amazon 税」という論点が言及されていた。

### Key Discussion Points

- **steveBK123**: 20年前は低価格が理由だったが、今は物流の確実さ（到着予定日通りに届く）が Amazon を使う理由。
  - **CrimsonRain**: 返品の容易さ（QR コードを持って郵便局へ）も大きい。
  - **siva7**: 本当の理由は価格でも物流でもなく、理由を問わない返品だと思う。
- **trombuance**: 有名ブランド以外の検索結果は9割超が品質に疑問のある中国製品で、産地から直接買うほうが安い。
  - **LCRVYSB**: 買った AirPods Pro が偽物だった経験がある。
  - **Telemakhos**: 中国ブランドは品質が高く、むしろ積極的に選んでいる。
- **tedggh**: Amazon は数ドルの日用品の「コンビニ」として使い、大きな買い物は専門店やメーカー直販で行う。
  - **glitchc**: 同じ商品が Amazon で50ドル安いなら Amazon で買う。
  - **jlmorton**: 記事によればどのみち Amazon 税を払っていることになる。
- **novia**: 独立系店舗（Shop）では返品を拒否・放置された経験があり、Amazon の返品は便利。
  - **lavezzi**: Amazon は返金処理の不備で約10億ドルの和解を抱えている。
  - **okr**: 返品した電話機の返金がいまだに来ない。
- **DataDive**: 安価で良質な商品が翌日届き返品も楽で、Amazon バッシングは理解できない。
  - **danelski**: ポーランドの Allegro も翌日配送が基本で、自社と出店者を競合させない。

## 3. [Sound (2022)](https://ciechanow.ski/sound/)

**Score:** 242 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50045147)

Bartosz Ciechanowski による、音とは何か・どう生成され伝わるかを解説するインタラクティブ記事。空気分子の挙動から始め、鍵盤などを自分で鳴らしながら、質量とバネ、調和成分、干渉などへと段階的に理解を積み上げる構成。

### Key Discussion Points

- **bita_nidir**: 子供の頃に楽器を習っていた時、これがあれば疑問が解けたはずと感激。
- **SwtCyber**: 空気分子から倍音・干渉まで進む構成が見事。
  - **dverlaeckt80**: これほど丁寧かつ芸術的に主題を扱う人は今は少ない。
- **saidnooneever**: 「Masses and Springs」まで読んで、スライダーで遊んでしまった。
- **Cider9986**: 最近この種の可視化ブログは増えたが、このサイトほどの品質ではない。
  - **matsemann**: 作りやすくなるのは良いが、粗製乱造が本当に優れたものの注目を奪わないか気になる。
  - **disillusioned**: すべて手書きの素の JavaScript である点が職人的。
- **vincnetas**: AI の汎用知能テストとして、概念を与えてこのように説明させる「Bartosz テスト」が欲しい。
  - **suopspaces**: 「できるだけ単純に、しかし単純すぎずに」。

## 4. [Pg_vectorsearch: An index that is faster than pgvector's IVFFlat and HNSW](https://github.com/timescale/pg_vectorsearch)

**Score:** 134 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=50086165)

Timescale による PostgreSQL 拡張。階層的ルーティングを持つ IVF 型の PRISM インデックスと RaBitQ 量子化で、1億件超のベクトルを扱う ANN 検索を行う。pgvector の `vector` / `halfvec` 列にそのままインデックスを張れ、更新・削除にも対応。1億件データセットで、メモリ4分の1のインスタンスでも HNSW より同等再現率で高速とされる。README によれば現状は alpha でテスト用途。

### Key Discussion Points

- **devy**: PRISM は 1968 次元が上限で、PostgreSQL 18 以上が必要なため、既存環境の移行コストが高い。
- **arunmu**: 同じ開発元の pgvectorscale は保守されていないようだが、なぜ新規に作ったのか。
- **EgregiousCube**: VectorChord を使っており、高速ディスクでコストが半減した。低 RAM 向けインデックスの競争を歓迎。
- **Rapzid**: フィルタリング対応は post-filter のみで、テナント/権限スコープをどう効率化するのか疑問。
- **ilumanty**: SQLite にも同様のものがあれば嬉しい。

## 5. [ASML's strong orders ease fears AI spending boom is running out of steam](https://www.reuters.com/business/asml-forecasts-q4-sales-above-expectations-ai-chip-demand-2026-10-14/)

**Score:** 116 | **Comments:** 101 | [Post](https://news.ycombinator.com/item?id=50088430)

Reuters の記事で、ASML の第4四半期売上見通しが予想を上回り、AI チップ需要による設備投資ブームが失速するとの懸念が和らいだという内容。記事本文と Wayback のスナップショットは取得できず、タイトルとコメントからの推測に基づく要約。

### Key Discussion Points

- **scrlk**: 2000年2月にも半導体装置の受注が記録的で4年ぶり高水準と報じられた例を引き、過去のバブル期との類似を示唆。
- **mwkaufma**: CoreWeave の株価ではなく ASML を見ろ、という皮肉。
- **sklargh**: 納期の長い装置の受注は将来需要への out-of-the-money コールオプションのようなもので、需要の確からしさはあまり示さない。
- **emkoemko**: 将来納品される装置の受注がなぜ AI 支出を予測するのか、タイトルが意味不明。

## 6. [Amsterdam police confisquates server left-wing ISP A/I at American request](https://www.nrc.nl/nieuws/2026/10/14/politie-amsterdam-neemt-op-amerikaans-verzoek-server-in-beslag-van-italiaanse-internetdienstverlener-a-i-a4938960)

**Score:** 47 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50090084)

NRC の記事で、アムステルダム警察が米国の要請でイタリアの左派系 ISP A/I（Autistici/Inventati）のサーバーを押収したという報道。記事本体（ペイウォール）は取得できず、コメントの情報に基づく。

### Key Discussion Points

- **TheGamerUncle**: 米当局は antifa や A/I を放置していたのに、特定の利害に反した途端に動いたと批判し、オランダ側も追従的だと非難。
- **hackermailman**: 米国務省が 2026年8月に Autistici/Inventati を特別指定国際テロリストに指定した発表を示し、オランダ警察はドライブのイメージを米国に渡してサーバーは XS4ALL に返却したようだと補足。
- **citywide-fondue**: 米政府がオランダ警察を動かせることに驚き、米国からの切り離しが進んでいないのではと疑問。

## 7. [The Gold-Bug: Edgar Allan Poe's story that taught me about cryptography (2024)](https://robotsinplainenglish.com/e/2024-01-21-gold-bug.html)

**Score:** 42 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=50055632)

筆者が中学時代に読んだポーの短編『黄金虫』から暗号学を学んだ体験記。物語は海賊の宝の暗号文を主人公が解読する過程が中心で、現代暗号の発展にも影響を与えたと語る。

### Key Discussion Points

- **randyl**: ハーバード大の天文学者 Donald Menzel も本作に触発され、第二次大戦中に女子大で暗号解析講座の組織に関わった。
- **cosmic_cheese**: 同作に着想を得た Alan Parsons Project の曲がある。
- **ryan_glass**: ローカル LLM に暗号を解かせようとしたが、ポーの暗号だと既に知っていた。
- **rramadass**: 単一換字暗号を頻度分析で解く話で、コナン・ドイルの『踊る人形』にも通じる。

## 8. [Running Windows desktop tests from Linux with disposable VMs](https://www.qawolf.com/blog/how-we-solved-windows-desktop-automation)

**Score:** 36 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50088643)

QA Wolf が Windows デスクトップアプリの E2E テストを大規模に並列化した方法の解説。Windows にはコンテナがなく、コールド起動に2〜3分かかるため、使い捨て VM を用意し、テストコードは Linux 側に置いたまま、リモートデスクトップ越しに操作する構成を採る。

### Key Discussion Points

- **Luker88**: 1〜2台の VM で合法に行うために必要な最小ライセンスは何か。
- **trollbridge**: 自分の LLM も Qemu とスナップショットで同様の仕組みを作り、メモリ容量が制約だった。
- **defied**: TestingBot が2014年から使い捨て QEMU VM で同様の方式を提供している。
- **joinjune**: Ubuntu 上の QEMU でドキュメント作成の新ワークフローを構築した。
- **blahgeek**: VM + WebRTC + ウォームプールで起動時間を吸収する、新しくない手法。

## 9. [Submarine cable resilience](https://blog.apnic.net/2026/10/14/submarine-cable-resilience/)

**Score:** 25 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50089229)

APNIC ブログによる海底ケーブルの耐障害性についての記事。取得できた本文は断片的で、詳細は確認できていない（コメントによればケーブル切断事例にも触れている）。

### Key Discussion Points

- **alexpotato**: ブロックチェーンでは「ステーク」が特定地域に集中している例があり、ケーブル切断でネットワークが分断・停止しうる。
- **ortusdux**: Tom Scott のケーブル焼き付け（モアレ効果）動画を連想した。

## 10. [Show HN: Graphicle, a Rust port of Graphify with memory for coding agents](https://github.com/graphicle-ai/graphicle)

**Score:** 10 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50088713)

リポジトリをコードグラフ化し、プロジェクトのドキュメント・決定事項・過去のエージェントセッションを記憶して、該当ファイル・行の引用付き抜粋をコーディングエージェントに渡す Rust 製ツール。ローカルで動作し、API キー・アカウント・テレメトリは不要。Claude Code、Cursor、Codex、VS Code、任意の MCP クライアントで利用可能。

### Key Discussion Points

- **pjm331**: エージェントにこの種のツールを与える評価を誰がどう行っているのか。

## Trends

- **AI インフラ需要への関心**: ASML の受注とベクトル検索の PostgreSQL 拡張、エージェント向けメモリツールなど、AI 周辺の基盤が複数並んだ。ASML ではドットコム期との比較も出た。
- **プラットフォームの力学**: Amazon の価格影響と米国要請による ISP サーバー押収は、巨大プレイヤーや国家の影響力がテーマ。
- **丁寧な教育コンテンツ**: Sound や『黄金虫』のように、長期的に読まれる解説・読み物に高い支持が集まった。
- **開発者ツール**: Iosevka が最大スコアで、フォントの好みを巡る議論が盛り上がった。
