---
title: "Hacker News トップ10サマリー（2026年5月30日）"
date: "2026-05-30T14:01"
category: "summary"
summary: "SQLite durable workflows が593点でトップ、Zig ビルドシステム刷新・Pandoc テンプレート集・米国研究助成金問題も注目"
tags: ["hackernews", "tech", "sqlite", "zig", "ai", "science"]
---

## 1. [SQLite is all you need for durable workflows](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/)

**Score:** 593 | **Comments:** 305 | [Post](https://news.ycombinator.com/item?id=48326802)

SQLite を使ったデュラブルワークフロー実装を提案するブログ記事。Temporal のような重量級ワークフローエンジンを導入せずとも、SQLite の WAL モードと適切なトランザクション設計により、耐障害性のあるワークフローオーケストレーションが実現できると主張する。シングルノード環境では SQLite が Postgres を大きく上回るパフォーマンスを示す事例も報告されており、HN 史上でも注目度の高い技術議論となった。

### Key Discussion Points

- **utopiah**: 「Y→X→Y」の専門性サイクルを例に挙げ、真の理解があってこそシンプルな解法に戻れると指摘
  - **dmos62**: 「愚かさを貫き通した者が啓発に至る」とコメント
  - **stingraycharles**: 43歳の今、CQRS＋イベントソーシングを経て"つまらない"ソリューションの良さを痛感していると共感
- **bitexploder**: Temporal を本番で使い始めた全員が最終的に嫌いになっている、Cassandra・Ringpop の運用コストが重いと指摘
  - **fcarraldo**: Temporal は単一マシンでの簡易スクリプトを愛する人と、本番システムを構築して嫌いになる人に二極化すると補足
  - **svara**: マネージド Temporal は想定以上のコスト、セルフホストは重大な運用負担、どちらも茨の道
- **levkk**: 「本番アプリに SQLite を使う執着が理解できない」と反論。組み込みDBは並行処理に不向き、それがデータベースサーバーの存在理由だと主張
  - **jph00**: 並行処理の種類への理解が浅い、SQLite は強いパーティショニングがある領域では優秀と反論
  - **franga2000**: コンテナ化された環境でどうせ各アプリが独自DBを持つなら、サーバーDB側のこだわりも同様に疑問と逆説
- **faangguyindia**: Intercom・Zendesk・billing・PagerDuty など10以上の SaaS を Go + SQLite でセルフビルドし、コストを1/10に削減。同一サーバーで4ヶ月間ゼロ障害と報告
  - **password4321**: バスファクター（属人化リスク）を懸念
  - **kukkeliskuu**: CRM も同様にシンプルなコンタクトリストで十分と同意
- **shukantpal**: シングル vCPU で SQLite が 7.5k 並行セッションを達成、Postgres はクラッシュした
  - **bob1029**: SQLite は実質インプロセスのメソッド呼び出し、マイクロ秒レベルで動作可能
  - **onlyrealcuzzo**: SQLite の高パフォーマンスは当然。HashMap と Redis を比べて驚くようなもの

---

## 2. [Pandoc Templates](https://pandoc-templates.org/)

**Score:** 187 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=48334515)

Pandoc 用テンプレートを集約したキュレーションサイト。PDF・HTML・DOCX・EPUB など多様なフォーマットと、論文・履歴書・レター・プレゼンなど豊富なドキュメント種別のテンプレートが揃い、Markdown からプロフェッショナルな文書を最小限の設定で生成できる。このサイトの存在を知らなかったユーザーも多く、コミュニティから大きな反響を得た。

### Key Discussion Points

- **ktzar**: 小説の整形に Pandoc + GitHub Actions を活用している。モダンなテキストエディタは欠陥品で、Markdown が99%の人のニーズを満たすと主張
  - **maxerickson**: シンプルな文書ではバージョン管理付き WYSIWYG ワープロが上回る。ビルドプロセスを気にしたくない人がほとんど
- **chlaunchla**: PDF 生成でテーブル崩れ・Unicode フォントフォールバック不具合・改ページ制御の限界に直面し、Markdown はページ指向ドキュメントには力不足と結論づけ Word に戻ったと告白
- **wodenokoto**: R/Python/QMD で作成した分析結果を、カラフルなビジネスレポートとして management に共有するためのテンプレートを探していたと反応
- **falsaberN1**: これほどカラフルなテンプレートが作れると知らず、インスピレーションを受けて週末を費やすことになりそうと興奮

---

## 3. [Zig: Build System Reworked](https://ziglang.org/devlog/2026/#2026-05-26)

**Score:** 180 | **Comments:** 84 | [Post](https://news.ycombinator.com/item?id=48334048)

Zig のビルドシステムが「configurer」プロセス（build.zig をコンパイルする）と「maker」プロセス（ビルドグラフを実行する）に分離された。これによりシリアライズされた設定がキャッシュされ、maker プロセスは最適化有効でコンパイルされるようになった結果、`zig build -h` が約90%高速化。毎回ビルドシステム全体を再コンパイルする従来の非効率が解消された。

### Key Discussion Points

- **brabel**: Zig 0.16.0 へのアップグレードで新しい IO 機構に感銘。シングルスレッド・マルチスレッド・イベントループを問わず効率的なコードが書けると称賛
  - **ulbu**: IO の「超高効率」はまだ達成されておらず、動的ディスパッチの多重間接参照が残存していると指摘
- **portly**: 2ヶ月間使って「ガレージでいじる」言語として最適だと確信。「正しい使い方」を押しつけてこない設計を評価
  - **xyzsparetimexyz**: 未使用変数の禁止と複数行コメント非対応は生産性上の大きな問題と反論
- **xngbuilds**: Andrew Kelley のインタビュー動画を見て Zig を始めたくなったとコメント
- **biffgiff**: Node.js + TypeScript と比べて何が優れているのかと疑問を呈する
  - **throwatdem12311**: Zig 製の Ghostty と JavaScript 製の Hyper を比べてみてと提案
- **epolanski**: コンパイル時間の短縮はすでに素晴らしく、今後さらに改善されることへの期待を表明
  - **pjmlp**: 90年代のコンパイル速度が徐々に復活してきていると感慨

---

## 4. [Proposed new US funding rules: We can cancel any grant at any time](https://arstechnica.com/science/2026/05/the-office-of-management-and-budget-tries-again-to-cripple-us-science/)

**Score:** 151 | **Comments:** 92 | [Post](https://news.ycombinator.com/item?id=48335135)

米国行政管理予算局（OMB）が「いつでも任意の助成金を取り消せる」という新ルール案を提示。政治的な意向に従わない研究者の助成金を打ち切ることを可能にするもので、科学コミュニティから激しい反発を招いている。記事は arstechnica.com のためコンテンツ取得をスキップし、コメントから概要を把握した。

### Key Discussion Points

- **gwerbin**: 政治的コネがある者か体制への忠誠を示す者だけが助成金を得られる構造に変化しつつあると批判。過去にも腐敗はあったが、今は体系的・組織的に腐敗が設計されていると指摘
  - **reactordev**: 「最終決定権は委員長が持つ」と皮肉
- **tempodox**: 科学者でいたければ移住するしかないとコメント
  - **Jerry2**: どこへ移住するのか？米国の助成金は世界最大（年間9000億ドル）。欧州はその1/10、中国は外国人に助成金を出さないと現実を指摘
- **ChrisLTD**: 「自国が自殺していくのを見るのは悲しい。自国民だけでなく世界も貧しくなる」と嘆く
  - **libertine**: 少なくともまだ民主主義。ロシアが民主主義から逃げて経済・人口動態を崩壊させた例を引き合いに
- **ninjagoo**: 501(c)(3) を活用した市民・慈善インフラの強化で政府依存を減らすべき、と具体的な代替案を提案
- **cineticdaffodil**: 「グラントハンティング」制度を提案——論文を反証した研究者がその論文の助成金を受け取れる仕組みで悪い科学を経済的に駆逐できると主張

---

## 5. [What Happened to the Locusts?](https://explosion-scratch.github.io/locusts/)

**Score:** 70 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=48281772)

ロッキーマウンテンバッタ（Rocky Mountain Locust）の絶滅を解説する長編記事。広大な移動域を持ちながら繁殖地はワイオミング・モンタナ州の数本の川沿いの谷に限定されており、農耕・灌漑・家畜による踏み荒らしで繁殖地が消滅したことが絶滅の原因とされる。セロトニン放出が群れモードへの物理的変態を引き起こす生態学的メカニズムも詳しく解説する（ページにアニメーション虫あり、注意）。

### Key Discussion Points

- **password4321**: TL;DR——移動域は東海岸まで広がっていたが繁殖域はワイオミング・モンタナの少数の川沿いのみ。農業で破壊されたことで絶滅したと要約
- **daoboy**: 日曜学校でバッタを「悪魔の虫」と教わっていたが、実際はただのキリギリスと分かり拍子抜けしたと告白
- **swiftcoder**: 「セロトニン放出が物理変態を引き起こす」との記述を受け、「バッタはプロザックを飲んだキリギリス？」とユーモラスに反応
- **card_zero**: 記事内で言及される "caloptine" という物質に懐疑的——1878年の昆虫委員会報告書以降、誰もこの物質を言及していないと指摘
- **dnnddidiej**: 「注意：画面上でアニメーションの虫が這います」と警告

---

## 6. [Leo's first encyclical attacks technological messianism](https://www.economist.com/europe/2026/05/28/leos-first-encyclical-attacks-technological-messianism)

**Score:** 58 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=48334710)

ローマ教皇レオ14世が最初の回勅「Magnifica Humanitas」で「技術メシアニズム」——技術が人類のあらゆる問題を解決できるという信仰——を批判した。AIの力と影響、それを支配する者の問題を考察し、AIを生み出した略奪的資本主義から切り離して人類全体の益にする方途を示す内容とされる。記事は The Economist のため直接取得不可（アーカイブも取得失敗）。

### Key Discussion Points

- **merelydev**: 技術を誰が支配するかを決めることが現代最大の問題だと指摘。技術者・利用者・政府・そして今や聖職者も支配を主張しており、「民主主義の次のフェーズは技術支配者の選挙か？」と問う
- **mentalgear**: 「Magnifica Humanitas」を絶賛——AIの影響と支配者について純粋な思索を展開しており、電子書籍リーダーで読む予定と述べる
- **mrbluecoat**: AIはあらゆる分野に侵食しており、カトリックも例外ではないとし、「カトリック向け ChatGPT」を開発するスタートアップを紹介
- **greedo**: 「フランク・ハーバートは予言者だった」（Dune でのテクノロジー批判を示唆）

---

## 7. [Openrsync: An implementation of rsync, by the OpenBSD team](https://github.com/kristapsdz/openrsync)

**Score:** 47 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=48334854)

OpenBSD チームが開発した rsync の BSD（ISC）ライセンス実装。OpenBSD の pledge(2) と unveil(2) によるセキュリティ強化を最優先とし、Linux・FreeBSD・macOS にも移植されている。約1万行の C コードで構成され、rpki-client プロジェクト向けに開発されたが、最新の rsync バージョンとの互換性も維持している。

### Key Discussion Points

- **Bender**: Alpine Linux には pledge(2) が存在せず、pledge なしで openrsync を使うリスクはどの程度かと問う
- **WD-42**: なぜ "Open" という名前か？元の rsync はすでに GPL なのに、とライセンスの意義を問う
- **jmclnx**: OpenBSD 7.8 時点では --exclude と -z 非対応だが、それ以外は完璧に動作。Postfix にも AI コードが入り始めており、AI フリーツールの選択肢が狭まりつつあると嘆く
- **triggis**: 「正気な人向けの slop（AI コード）なしバージョン」としてコンテキスト付きでリンク共有
- **skeledrew**: AI を避けようとする試みが逆効果のワックモグラゲームになっていると皮肉

---

## 8. [Show HN: Helios – what plug-in solar could generate for any address in Britain](https://helios.southlondonscientific.com/)

**Score:** 33 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48334949)

英国でプラグイン太陽光パネル（電気工事不要）が合法化されたことを受け、英国の任意のアドレスにおける想定発電量と節約額を試算するウェブアプリ。政府公開の LIDAR データを活用して実際の地平線（建物や丘）を反映した日照シミュレーションを行い、ユーザーの電気料金に基づいてコスト回収期間を計算する。スコットランドおよびウェールズの大部分は LIDAR カバレッジ外のため精度が落ちる旨も明記されている。

### Key Discussion Points

- **ltrg**: 自宅の OSM ID 取得に失敗して郵便番号中心点にフォールバックしたにもかかわらず高精度な LIDAR 計算結果が出力されており、「偽の精度」が問題になりうると提案
- **redfloatplane**: 英国の National LIDAR Programme と英国オープンデータの質の高さに感銘を受けたと述べる
- **GordonS**: 素晴らしいアプリ！通常の屋根設置型太陽光発電の計算にも対応してほしいとリクエスト

---

## 9. [IXI's autofocusing lenses are almost ready to replace multifocal glasses](https://www.engadget.com/wearables/ixis-autofocusing-lenses-multifocal-glasses-ces-2026-212608427.html)

**Score:** 29 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=48298912)

スタートアップ IXI が開発する自動焦点調節メガネは、液晶レンズと視線追跡技術（赤外線 LED＋フォトダイオード）を組み合わせ、近距離・遠距離の処方を自動切り替えする。スイスのレンズメーカー Optiswiss と提携し、医療認証取得後に2026年中に高級品としてオプトメトリスト経由で販売予定。多焦点レンズの不便を解消する可能性を秘めた技術として注目を集める。

### Key Discussion Points

- **iandanforth**: 目の焦点調節と眼鏡側の補正が互いに影響し合う二重適応系は、フィードバックループや発振を引き起こすリスクがある。制御工学の専門家の関与を希望
- **pavel_lishin**: 完全自動でなくても「チック」などで手動切り替えできるだけで革命的。D&D プレイ中にノートと仲間の顔を見るたびにメガネを外す手間から解放されたいと述べる
- **homeonthemtn**: 自然なオートフォーカスへの期待を表明し、ゆくゆくは植物・キノコを見るだけで識別できる情報オーバーレイを夢想
- **ece**: AR メガネにこの技術が搭載されるのはいつかと問う

---

## 10. [Corporate America Is Starting to Ration AI as Cost Skyrockets](https://www.wsj.com/tech/ai/corporate-america-is-starting-to-ration-ai-as-cost-skyrockets-1eb99d7a)

**Score:** 39 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=48335388)

コーポレートアメリカが AI の急騰するコストに対し、使用量の制限・上限設定を始めているという WSJ の記事（ペイウォールにつきコンテンツ取得不可）。初期の「AI を全力活用せよ」という号令から一転、費用対効果の精査へとフェーズが移行しつつある様子がコメントから伺える。

### Key Discussion Points

- **tyingq**: 「もっとトークンを使え」から AI 配給制への急転換が滑稽。経営層はまったく自己認識なく、AI について理解せずにニュースサイクルを盲目的に追いかけていると批判
- **cs702**: 「一つ目の国では盲人が王」のことわざを逆用——「一つ目の国では盲人が先導する」。AI の限界をやや理解しているメンバーを率いるのが、まったく理解していない経営者という構図
- **amazingamazing**: AI は過大評価されており、LLM ラッパー以外の印象的な成果が見当たらない。1兆ドルの設備投資は不合理で、中国が太陽光・EV で現実世界の進歩を続ける間、米国は高速で Todo アプリを作り続けていると皮肉
- **gonzalohm**: コストよりむしろ根本的な問題は、自動化コードを書く代わりに AI に繰り返しタスクを実行させていること——ドキュメント比較のたびに AI に課金する愚を指摘
- **1970-01-01**: WSJ は「月数十万ドル」という曖昧な表現でなく具体的な数字を示すべきだったと批判

---

## Trends

**1. SQLite・シンプリシティへの回帰**: 最高スコアを獲得した SQLite ワークフロー記事が象徴するように、重厚なマネージドサービスや複雑アーキテクチャへの反動として、シンプルで手元にある技術で十分という機運が高まっている。

**2. Zig の台頭**: ビルドシステム改善により実用性がさらに向上。Rust に続くシステムプログラミング言語として HN コミュニティの注目度が継続的に上昇している。

**3. AI コストの現実化**: 「AI を全力活用」から「AI を配給制に」へのコーポレートの方針転換が顕在化。AI への過剰期待が現実の費用対効果の壁に当たり始めた。

**4. セキュリティとオープンソース**: openrsync・Pandoc テンプレートなど、BSD ライセンスやセキュリティ重視の「スロップフリー」（AI 生成コードフリー）ツールへの需要が高まっている。

**5. 科学・研究への政治的圧力**: 米国研究助成金の政治化に関するスレッドが多くのコメントを集め、科学者コミュニティの危機感が反映された。研究資金の民間・NPO 代替財源への関心も浮上。

**6. テクノロジーと倫理・宗教の交差**: 教皇回勅による AI 批判という異色の組み合わせがランクイン。技術決定論への批判的視座がより広い社会的文脈で語られるようになっている。
