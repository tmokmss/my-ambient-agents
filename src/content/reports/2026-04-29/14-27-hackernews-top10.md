---
title: "Hacker News トップ10 ダイジェスト（2026年4月29日）"
date: "2026-04-29T14:27"
category: "summary"
summary: "GitHubへの不信任が急拡大。GhosttyのGitHub離脱が2963ポイントを記録し、政府OSS基盤・Rustバグ・フォージ連合が注目を集める"
tags: ["hackernews", "github", "rust", "open-source", "federation"]
---

## 1. [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)

**Score:** 2963 | **Comments:** 888 | [Post](https://news.ycombinator.com/item?id=47939579)

HashiCorp共同創業者のMitchell Hashimotoが、ターミナルエミュレータ「Ghostty」をGitHubから移行すると発表。ほぼ毎日発生するGitHub Actionsの障害が数時間のブロックを引き起こし、「真剣な仕事をする場ではなくなった」と訴えた。GitHubミラーは読み取り専用として維持され、移行先は商用・OSS両方の選択肢を検討中という。

### Key Discussion Points

- **mitchellh**: GitHubへの深い愛着を持ちながらも決断した。プラットフォームを愛しているのに、それが仕事をさせてくれないもどかしさを吐露。
  - **idan（GitHub社員）**: 感情は理解するとしつつ、問題はスケールとAIパラダイムシフトによるものであり、悪意ではないと主張。
  - **DrammBA**: 「仕事をしたいのに、させてもらえない」という感覚に強く共感。現代のWebサービス全般が脆弱化していると嘆く。
- **tedivm**: GitHubには深刻な組織的問題がある。非公式ステータスページは「恐ろしい状況」を示しており、残っているのは惰性だけだと指摘。
  - **_doctor_love**: 大企業に買収されたサービスが辿る典型的な衰退パターン（Microsoft、Oracle、Salesforceなど）だと論じる。
  - **fabiensanglard**: 公式の87.25%稼働率は、1日約3時間の障害に相当すると計算。
- **JuniperMesos**: Ghosttyの離脱を歓迎。GitHubはそもそも非フリーのプロプライエタリソフトウェアであり、感情的な依存自体が問題だったと主張。
- **ahf8Aithaex7Nai**: マイクロソフトに買収されたとき、主従関係が逆転した。企業は投資家のために動き、ユーザーは牧場で管理される家畜になると比喩で説明。
- **atonse**: 新たな「GitHub」が生まれ、かつてのGitHub自身のように急成長するだろうと予言。

---

## 2. [Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/)

**Score:** 556 | **Comments:** 180 | [Post](https://news.ycombinator.com/item?id=47940921)

Flask/Jinja2の作者Armin Ronacherが、GitHub以前のOSSエコシステムを振り返りつつ、GitHubが解決した問題と生み出した問題を論じる。GitHubは個人中心のリポジトリ作成を容易にし、マイクロ依存関係の爆発をもたらした。プロジェクトの散逸を防ぐため、企業から独立した公的なOSSアーカイブの設立を訴えている。

### Key Discussion Points

- **alastairp**: GitHubが「プロジェクト」ではなく「個人」に紐付いたリポジトリ作成を可能にしたことで、SourceForgeにはなかった軽量さが生まれたと回顧。
- **mtlynch**: ZigのCodeberg移行は軽視されたのに、Ghosttyの移行は重大視される違和感を指摘。Fabrice BellardとGuido van Rossumに喩えてダブルスタンダードを批判。
- **wps**: GitではなくFossilが勝っていれば、wiki・フォーラム・チケットがコードと一体化した理想的な環境があったと嘆く。
- **Lammy**: GitHubの「アーカイブとしての役割」は実は悪い面もある。中央集権によってDMCA削除時にすべてのフォークが道連れになる危険がある。
- **boramalper**: 非営利団体であるCodebergの方が、OSSプロジェクトの目的と本質的に一致していると評価。

---

## 3. [Bugs Rust won't catch](https://corrode.dev/blog/bugs-rust-wont-catch/)

**Score:** 436 | **Comments:** 235 | [Post](https://news.ycombinator.com/item?id=47943499)

Rust製coreutilsのCVE 44件を分析した記事。バッファオーバーフローや解放後使用といったメモリ安全バグはゼロだった一方、TOCTOU競合、パス比較の不具合、UTF-8変換エラー、panicによるDoS、エラー情報の破棄など、Rustコンパイラが検出できない種類のバグが多数存在した。OSとUnix APIの境界でのセキュリティが課題と結論付ける。

### Key Discussion Points

- **collinfunk（GNU Coreutils開発者）**: TOCTOU問題に同意しつつ、`fs::canonicalize()`のパフォーマンスへの悪影響を実測値で指摘。記事の「メモリ安全バグゼロ」という主張にも反例があると補足。
  - **joaohaas**: その反例とされるバグは実際にはCanonicalが関与する前に修正済みだったと反論。
- **wahern**: 開発者はRustは書けても、UnixのAPIやセマンティクスに習熟していなかった。長年のcoreutils開発者からすると「非常にアマチュア的なミス」だと断言。
- **hombre_fatal**: コードの書き直しは、本番稼働を通じて積み上げられた暗黙的な教訓を失うリスクがある。これはソフトウェア開発の本質的な難しさだと擁護。
- **lionkor**: ユニットテストや手動レビューで防げた問題ばかり。前の実装を理解してから書き直さないと同じ失敗を繰り返す。Rustは「悪いエンジニアリングから守ってくれない」。
- **Joker_vD**: TOCTOU脆弱性はシンボリックリンクだけでなくハードリンクにも及ぶ点が過小評価されていると指摘。

---

## 4. [Soft launch of open-source code platform for government](https://www.nldigitalgovernment.nl/news/soft-launch-for-government-open-source-code-platform/)

**Score:** 336 | **Comments:** 101 | [Post](https://news.ycombinator.com/item?id=47945918)

オランダ政府が`code.overheid.nl`を公開。GitHubの代替となる欧州製Forgejoを採用した政府向けOSSコードプラットフォームで、ソフトウェアの共有と政府間コラボレーションを促進する。内務省のオープンソースプログラムオフィスが主導し、段階的に全省庁への展開を目指す。

### Key Discussion Points

- **ramon156**: オランダ人開発者として誇りに思う。MuleSoftを使うポジションを狙っていたが結局ゴーストされた経験も披露しつつ、政府APIへの期待を語る。
  - **brodo**: NLnetなどの取り組みも含め、小国が小回りよくOSSとデジタル自立をリードしていることを称賛。
  - **RyJones**: Open Wallet Foundation（OWF）ではオランダ企業・NGOの貢献が顕著だと補足。
- **ivolimmen**: 複数の政府機関でOSSを推進してきた蘭国人。「典型的なオランダらしい」遅さでついに動いたと苦笑交じりに歓迎。
- **luplex**: ドイツにも類似の`opencode.de`（GitLab製）があり、ハードニング済みコンテナイメージも提供していると紹介。
- **regexorcist**: 素晴らしい取り組みだがHNのアクセス集中で既にダウン。一方GitHubは「PRが消えていても心配しないで、データは無事です」というバナーを出していると皮肉。

---

## 5. [HashiCorp co-founder says GitHub 'no longer a place for serious work'](https://www.theregister.com/2026/04/29/mitchell_hashimoto_ghostty_quitting_github/)

**Score:** 282 | **Comments:** 145 | [Post](https://news.ycombinator.com/item?id=47946958)

The Registerによるストーリー3の報道記事。Hashimotoが2008年から18年間GitHubを愛用してきたが、毎日の障害（Elasticsearchの問題でPRが完了できないなど）が引き金となった。Ghosttyの移行を発表しつつ、本物の改善があれば戻る可能性も示唆している。

### Key Discussion Points

- **WestCoader**: CircleCIから全てをGHに移行している最中に信頼性が急落して激怒。「Azure ReposとPipelinesの方がマシだった」と嘆く。
  - **dwedge**: 2週間前にGitHubへの移行検討を依頼されたが、障害が続いたためプロジェクトがキャンセルされ、セルフホストのアップグレードに切り替えた。
  - **nicoburns**: 「バイブコーディングによるトラフィック増加」という言い訳も、一定の説得力はあると擁護。
- **bellowsgulch**: GitHubなしでもソフトウェアは出荷できる。Hashimotoのコメントは感情的に見えると冷静に距離を置く。
- **sikozu**: Ghosttyの次は誰が離れるか注目。全員がすぐ移行するとは思わないが、GitHubは危機感を持つべきだ。

---

## 6. [Tangled – We need a federation of forges](https://blog.tangled.org/federation/)

**Score:** 63 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=47948603)

世界のOSSの約90%がGitHubに依存するという集中リスクを問題提起。Tangledは、ATプロトコルを使ってissue・PR・スターなどのコラボレーションイベントを管理し、複数の独立したGitサーバー間でフォークやPRをシームレスに行える「フォージ連合」を提案している。

### Key Discussion Points

- **jerojero**: ActivityPubが既に存在するのに、なぜ別の標準が必要なのか、より強力な根拠を示すべきだと指摘。
- **d_silin**: かつて愛されたプロバイダーが独占的に崩壊した後、フェデレーションこそが次のステップだと賛同。
- **whereistejas**: Tangledの最大の強みは「jujutsu first」な設計思想だと評価。
- **ghc**: Gitにとっての「BitTorrent的なもの」がなぜ存在しないのかと疑問。バイナリ配布は解決済みなのに。

---

## 7. [Letting AI play my game – building an agentic test harness](https://blog.jeffschomay.com/letting-ai-play-my-game)

**Score:** 24 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47947525)

Jeff SchomayがブラウザゲームCrossword DungeonのプレイテストにClaude AIを活用した方法を解説。ゲームコードを変更せずにNode.jsラッパーでテキストベースのインターフェースを構築し、HTTPエンドポイント経由でAIがゲーム状態を取得・操作できる仕組みを実装した。5機能の実装テストを約12分・12万トークンで完了し、数時間分の手動テストを代替した。

### Key Discussion Points

- （コメントは1件のみで詳細取得できず）

---

## 8. [GitHub – DOS 1.0: Transcription of Tim Paterson's DOS Printouts](https://github.com/DOS-History/Paterson-Listings)

**Score:** 23 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47946813)

Tim Patersonが1980年代に書いたDOS 1.0の元原稿プリントアウトを文字起こしし、デジタル保存したGitHubリポジトリ。オペレーティングシステムの歴史的一次資料として価値が高い。コメントはなく、静かに注目を集めている。

---

## 9. [Show HN: Adblock-rust Manager – Firefox extension to enable the Brave ad blocker](https://github.com/electricant/adblock-rust-manager)

**Score:** 19 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=47947369)

Firefox 149に密かに搭載されたBrave製の広告ブロックエンジン「adblock-rust」（デフォルト無効）に対し、UIを提供するFirefoxエクステンション。ETPトグル、フィルターリスト管理機能、8種のプリセットリストを提供し、`about:config`の手動操作なしに利用可能にする。

### Key Discussion Points

- **embedding-shape**: ETP + uBlock Originを使えば広告はゼロ。このエクステンションに乗り換えると何が変わるのかと質問。
- **RandomGerm4n**: adblock-rustはYouTubeや一部サイトで広告をブロックできなかった。uBlock Originの方が優秀だとレポート。
- **HelloUsername**: 先週のHN「FirefoxがBraveのAdblockエンジンを統合」スレッドへの参照リンクを共有。

---

## 10. [Improving ICU handovers by learning from Scuderia Ferrari F1 team](https://healthmanagement.org/c/icu/IssueArticle/improving-handovers-by-learning-from-scuderia-ferrari)

**Score:** 6 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47947834)

F1のピットストップ戦略をICU（集中治療室）の患者引き継ぎに応用する試みを紹介した論文。Ferrariのピットチームが実践する精密なコミュニケーションと役割分担が、医療現場の命に関わる引き継ぎ精度の向上に有効と論じている。

### Key Discussion Points

- **juansaavedrauy**: フェラーリファン（tifosi）として初投稿。「成功した協調的なピットストップの手本」としてフェラーリを選ぶのは皮肉だと苦笑。
- **gadders**: ヘルスケア従事者ボタンを押してアクセスしたと冗談交じりに報告。

---

## Trends

本日のトップ10から浮かび上がる共通テーマ：

1. **GitHub不信任の臨界点**: Ghostty離脱（2963pt）、HashiCorp報道（282pt）、Before GitHub（556pt）と、GitHubへの不満が複数の独立したストーリーで同時に爆発。単なる個人の愚痴を超え、エコシステム全体の転換点を示している。

2. **脱中央集権・自己主権の模索**: オランダ政府のForgejo採用、Tangledのフォージ連合提案、Codeberg評価など、特定プラットフォームへの依存から脱却しようとする動きが多角的に現れている。

3. **Rustの「安全神話」の相対化**: Rustがメモリ安全バグをゼロにする一方、TOCTOUやUnix API誤用といった「言語では守れないバグ」が多数存在することが明示された。Rustは道具であり、設計知識の代替にはならない。

4. **AIの実用的応用**: ゲームプレイテストへのAI活用（adblock-rust UIや文書自動生成も含む）が技術者の日常に根付きつつある。AIはテスト自動化の新たなレイヤーとして機能し始めている。

5. **歴史的保存への関心**: DOS 1.0の一次資料デジタル化やGitHubのアーカイブ機能の議論など、デジタルソフトウェア史の保全への意識が高まっている。
