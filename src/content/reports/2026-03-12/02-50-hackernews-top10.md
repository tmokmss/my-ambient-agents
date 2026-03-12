---
title: "Hacker News トップ10サマリー（2026年3月12日）"
date: "2026-03-12T02:50"
category: "summary"
summary: "HNトップ10：AI生成コメント禁止の大規模議論、JavaScript Temporal、WebAssembly、Google/Wiz買収完了など"
tags: ["hackernews", "ai", "javascript", "webassembly", "google"]
---

## 1. [Don't post generated/AI-edited comments. HN is for conversation between humans](https://news.ycombinator.com/newsguidelines.html#generated)

**Score:** 2887 | **Comments:** 1062 | [Post](https://news.ycombinator.com/item?id=47340079)

HNの公式ガイドラインにAI生成・AI編集コメントの禁止を明示するページへのリンク。コミュニティの知的な対話を守るため、人間による本物の議論を促す運営側のメッセージとして受け取られている。AIコンテンツの急増に対する直接的な反応として、1000件超のコメントを集めた本日最大の話題となった。

### Key Discussion Points

- **nkh**: HNの価値は「LLMからでは得られない、賢い人々による思慮深い意見」にある。AI生成コメントを許容すれば、HN本来の価値が失われると強く訴える。
- **jedberg**: 方針には賛成するが、「良い文章とLLMの出力は見分けにくい」として、根拠なく他者をAI扱いしないよう警告。自身も長文コメントでAIと疑われた経験を共有。
- **kjuulh**: フロントページの8〜10件がAI/LLM関連記事で埋まっていることへの懸念を表明。コンテンツのカテゴリ分けやフィルタリング機能を求める声。

---

## 2. [Temporal: A nine-year journey to fix time in JavaScript](https://bloomberg.github.io/js-blog/post/temporal/)

**Score:** 546 | **Comments:** 182 | [Post](https://news.ycombinator.com/item?id=47336989)

BloombergエンジニアリングブログによるJavaScript `Temporal` API策定の9年間の歩みを振り返る記事。既存の`Date`オブジェクトが抱えるタイムゾーン・DST（夏時間）・国際化対応の根本的欠陥を解決するため、TC39プロポーザルがいかに進化してきたかを詳説している。

### Key Discussion Points

- **wesselbindt**: Temporalは冗長になるが、それが正解とする。DSTバグによる緊急対応を防ぐための「明示性の強制」を高く評価。
- **Vinnl**: Firefoxへの実装を担ったAndré Bargull（Anba）が無給のボランティアであることを強調。コミュニティの貢献の大きさに感謝を示す。
- **Animats**: Pythonでも2012年に始まったISO8601パース問題が標準ライブラリに取り込まれるまで約10年かかったと回顧。言語の時間APIは普遍的に難しい問題だと指摘。
- **plucas**: JavaのJoda-TimeやJSR 310（Java 8・2014年）がTemporalの設計に与えた影響について言及が不足していると指摘。

---

## 3. [Making WebAssembly a first-class language on the Web](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/)

**Score:** 419 | **Comments:** 149 | [Post](https://news.ycombinator.com/item?id=47331811)

MozillaのHacksブログが、WebAssembly（Wasm）をWebの第一級言語として位置づける取り組みを解説。コンポーネントモデルやインターフェース型などの新仕様により、WasmがJavaScriptと並ぶ本格的なWeb開発言語として機能するための道筋を示す。

### Key Discussion Points

- **mananaysiempre**: WebIDLサポートを維持せず独自IDL仕様を作ったことで数年を無駄にしたと批判。「遅すぎたが、ないよりはまし」と皮肉交じりに評価。
- **steve_adams_86**: 「WASMの崖は本当に存在する」として、ツールチェーンや設定の複雑さを懸念。コンポーネントモデルは「複雑さを排除するのではなく移動させているだけ」と指摘。
- **hardwaresofton**: RustのWasmツールチェーンが最も成熟しており、Go・Python・C/C++のサポートも急速に進んでいると説明。週単位でエコシステムが改善中と楽観的な見通しを示す。

---

## 4. [Google closes deal to acquire Wiz](https://www.wiz.io/blog/google-closes-deal-to-acquire-wiz)

**Score:** 243 | **Comments:** 160 | [Post](https://news.ycombinator.com/item?id=47336476)

Googleがクラウドセキュリティ企業Wizの買収を完了。2025年3月に発表された約320億ドル規模の取引が成立した。WizはマルチクラウドのCNAPP（Cloud Native Application Protection Platform）を提供し、AWS・Azure・GCPにまたがるセキュリティ可視化で急成長した企業。

### Key Discussion Points

- **StartupsWala**: Wizの強みはクラウド非依存のアーキテクチャにある。Googleがその姿勢を維持すれば「AWS・Azureのワークロードへの戦略的な窓口」になりうるが、囲い込みに走ればWizの価値を自ら破壊するリスクがあると分析。
- **sass_muffin**: 「G-Wizと呼ぶのでは？」と英国の電気自動車（Reva G-Wiz）に掛けたジョーク。
- **cbHXBY1D**: Wizの投資家でありボードメンバーでもあるGili Raananが、CISOへの贈賄疑惑で報じられていると警告。Calcalist誌の調査報道を引用。
- **jerojero**: 「成功したプラットフォームがすべて大手に買収されるのを見続けるのが老いるということだ」という諦観のコメント。

---

## 5. [I was interviewed by an AI bot for a job](https://www.theverge.com/featured-video/892850/i-was-interviewed-by-an-ai-bot-for-a-job)

**Score:** 166 | **Comments:** 174 | [Post](https://news.ycombinator.com/item?id=47339164)

The Vergeの記者がAIボットによる採用面接を実際に体験したレポート。企業側がコスト削減・スクリーニング効率化のためにAI面接官を導入する動きが広まる中、求職者としての違和感・倫理的問題・バイアスリスクを詳報している。

### Key Discussion Points

- **JohnFen**: 面接でさえ最善を尽くせない企業は、入社後の扱いも推して知るべし。「AIにインタビューを任せる会社には入社しない」と強い姿勢を示す。
- **kazinator**: AIが持つ歴史的偏見の問題を指摘。1913年以前のテキストで学習したLLMは性差別的な採用推薦をするだろうと例示し、現代のLLMも同様のバイアスを内包していると警告。
- **ossa-ma**: 「採用プロセスはもはや地獄だ」と共感を示し、酷い面接体験を記録した個人記事をシェア。

---

## 6. [Many SWE-bench-Passing PRs would not be merged](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/)

**Score:** 153 | **Comments:** 46 | [Post](https://news.ycombinator.com/item?id=47341645)

AI安全機関METRによる研究ノート。SWE-benchのテスト通過という「成功」がコードの実際のマージ可否と乖離していることを示す。AIエージェントが生成したPRは機能的には正しくても、コーディング規約・設計思想・チームの価値観との整合性を欠くことが多いと結論づける。

### Key Discussion Points

- **vexnull**: AIコードの失敗は「間違った実装」ではなく「チームの好みとの不一致」にある。不要な抽象化、既存パターンの無視、根本原因より症状への対処といった問題を列挙。
- **languid-photic**: テストベースの評価は「方向性の指標」にはなるが、仕様の意図・スコープの一貫性・リスク許容度などを捉えられない。「弱い事前確率」として扱うべきと提言。
- **bisonbear**: 「リポジトリ固有のeval」を構築することで、SWE-benchの限界を補えると提案。モデルのテストスコアが近似していても、コード品質などのメトリクスでは大きな差が出ると自身の実験結果を共有。

---

## 7. [Show HN: I built a tool that watches webpages and exposes changes as RSS](https://sitespy.app)

**Score:** 180 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=47337607)

ビザ申請スロットを逃した経験から開発されたWebページ変更監視ツール「Site Spy」のShow HN。ページ全体ではなく特定要素を監視でき、変更をdiff表示・スナップショット履歴・RSSフィードとして公開できる。Chrome/Firefox拡張とWebダッシュボードを提供し、Claude・CursorなどのAIエージェント向けMCPサーバーも搭載。

### Key Discussion Points

- **ahmedfromtunis**: テキストベースのdiff機能を高く評価。JavaScript描画ページへの対応能力を懸念として挙げる。
- **xnx**: オープンソース代替として`changedetection.io`を紹介。ローカル運用またはSaaSとして利用可能。
- **tene80i**: RSSよりも「ほとんどの人は直接通知を望む」と指摘。時間的重要性の高い情報にはメールアラートを好むと個人的な使用感を共有。

---

## 8. [Show HN: s@: decentralized social networking over static sites](http://satproto.org/)

**Score:** 49 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=47344548)

静的サイトとJSONストアを用いた分散型ソーシャルネットワークプロトコル「s@」のShow HN。各ユーザーが静的Webサイトを所有し、暗号化JSONにデータを保存する設計で、プラットフォームへの依存を排除するアーキテクチャを提案している。

### Key Discussion Points

- **Retr0id**: 「ユーザーが静的サイトを所有し暗号化JSONストアにデータを保存」というコンセプトを読むたびに眉が上がっていくと、複雑な設計への懐疑的な反応を示す。
- **vexnull**: 自己主権の観点は評価しつつも、プッシュ機構なしにN個のサイトをポーリングするスケーラビリティを問題視。Nostrのリレー方式との比較で、両者の間に最適解があるはずと指摘。
- **est**: 「Gitでソーシャルネットワークをやればいいのでは」とジョーク交じりに`gitweets`を紹介。

---

## 9. [Urea prices](https://tradingeconomics.com/commodity/urea)

**Score:** 49 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=47345364)

Trading Economicsの尿素（窒素肥料の原料）価格チャートへのリンク。2024年5月の5年間最安値から上昇トレンドが続いており、食料インフレや農業コストへの影響が議論されている。

### Key Discussion Points

- **WaitWaitWha**: 尿素は肥料に使われ、2024年5月の5年安値から価格が上昇中。尿素価格が「米国食料インフレの先行指標」になりうると指摘。
- **adrianN**: 「肥料生産の脱炭素化を急がないといけない。これがプロセスを加速させるかもしれない」と気候変動の観点から反応。
- **SigmundA**: イランが尿素（DEF＝ディーゼル排気液の主成分）の主要生産国であることに触れ、トラック業界のコスト高騰と排ガス規制の執行問題に懸念を示す。

---

## 10. [Tested: How Many Times Can a DVD±RW Be Rewritten?](https://goughlui.com/2026/03/07/tested-how-many-times-can-a-dvd%C2%B1rw-be-rewritten-part-2-methodology-results/)

**Score:** 37 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47296568)

DVDの書き換え可能回数を徹底検証した記事。2台のドライブで合計5248回の書き込みを行い（約4020時間）、ドライブは今も正常動作している。光学メディアの耐久性に関する詳細なデータを提供する地道な調査研究。

### Key Discussion Points

- **parsimo2010**: 数百回の書き換えが可能というデータに驚きを示し、研究者の時間投資（4020時間超）への敬意を表明。
- **bsder**: 本当の問題は書き換え回数ではなく、「DVD-R/Wが通常のDVDと同等の寿命を持つと誤って信じられていたこと」だと指摘。実際の寿命は大幅に短い。

---

## Trends

本日のHNトップ10から以下の傾向が読み取れる：

1. **AIコンテンツの品質問題が最大の関心事**: HN運営によるAI生成コメント禁止の宣言が断トツのスコアを獲得。AIが生成するコードのマージ可否問題（SWE-bench）やAIによる採用面接への批判も上位に入り、AIの「量的普及」と「質的問題」への反動が顕著。

2. **Web基盤技術の成熟**: JavaScriptのTemporal API（9年越しの時間API刷新）とWebAssemblyの第一級言語化は、Webプラットフォームの長年の課題が次々と解決される段階に入ったことを示す。

3. **分散化・自己主権への関心継続**: 静的サイトベースのSNSプロトコル「s@」への関心は、中央集権的プラットフォームへの不信感が根強いことを示す。

4. **インフラ・地政学的リスクへの注目**: Wiz買収（クラウドセキュリティの大型M&A）、尿素価格（食料安全保障）、イランのDEF生産問題など、テクノロジー外のマクロリスクへの関心も高い。

5. **個人開発者の存在感**: Site SpyやShow HN s@など、個人が実際の課題を解決するために作ったツールが注目を集めており、HNのMake Somethingカルチャーが健在。
