---
title: "Hacker News トップ10まとめ（2026-07-25）"
date: "2026-07-25T03:30"
category: "summary"
summary: "Claude Opus 5発表、Postgres LISTEN/NOTIFYのスケーラビリティ検証、インド初の民間ロケット軌道到達など上位10件を要約"
tags: ["hackernews", "tech-news"]
---

## 1. [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)

**Score:** 1365 | **Comments:** 738 | [Post](https://news.ycombinator.com/item?id=49038433)

Anthropicが「Claude Opus 5」を発表。先代Opus 4.8と同価格ながら大幅に性能が向上し、Frontier-BenchやCursorBenchなど各種ベンチマークで最先端の結果を達成した。ソフトウェア開発・知識作業に加え、有機化学やタンパク質解析といった科学研究タスクでもOpus 4.8を上回り、ビジュアル生成能力も強化されている。

### Key Discussion Points

- **postalcoder**: 最大の注目点は絶対的な性能ではなく、Fableのような30日間のデータ保持要件なしに利用できる点。Opus 5は一般提供において引き続きデータ保持要件がないと明記されている。
  - **alvis**: タスクあたりのコストも大幅に安く、Sonnetより安価に見える点が重要だと補足。
- **jjcm**: 画像からHTMLへの変換テストでは、これまで最も優れていたFableを上回り、デザインの原典により忠実な結果を出したと報告。
  - **bottlepalm**: 実際にリンクを確認したところ、第一印象としてはFable版の方がデザインとして好みだったとコメント。
- **deet**: Opus 5はOpus 4.8由来の「Claude語」的な言い回し（"carry the argument"など）を引き継いでおり、Fableのように脱却できていないと指摘。「うるさい英語」ベンチマークが必要だと皮肉る。
  - **Kwpolska**: Fableはそうした言い回しは減ったものの、文章自体は依然として読みづらく疲れると反論。
- **paxys**: 多数のLLM企業が乱立し、モデル・モード・料金体系が複雑化する中、モデルルーティングがAI業界で最も急成長している分野だと指摘。
  - **ai-x**: モデルルーティングは結局モデル自身が最も上手く行えるようになるはずで、ルーティングによるコンテキスト損失はコスト増・信頼性低下を招くと反論。
- **rb2e**: 190ページに及ぶPDFを読みたくない人向けに、公式ブログ記事へのリンクを共有。

## 2. [Postgres LISTEN/NOTIFY actually scales](https://www.dbos.dev/blog/postgres-listen-notify-scalability)

**Score:** 233 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=49040296)

DBOSチームが、「Postgres LISTEN/NOTIFYはスケールしない」という通説に反論。通知をメモリにバッファし定期的にバッチ処理する最適化により、単一のPostgresサーバーで秒間6万件の書き込み（60K writes/s）を実現したと主張。従来のトリガーベース実装では毎秒2.9K件にとどまっていた。

### Key Discussion Points

- **jerf**: 「スケール」は二値ではなく連続量であり、あるシステムには5桁も過剰、別のシステムには5桁も不足という場合がある。「早すぎる最適化」より「スケーリング特性を誤った技術選定」の方が一般的な開発者の誤りとして問題視すべきと主張。
- **nzoschke**: DBOSがPostgres（今はSQLiteも）を上手く活用している点を評価。「永続的ワークフロー」の考え方を使い始めると、あらゆる場面でその応用先が見えてくると述べ、個々のメールを永続的ワークフローとして扱う実験を紹介。
- **dang**: 関連する過去記事「Postgres LISTEN/NOTIFY does not scale」（2025年7月、321コメント）へのリンクを共有。
- **sandeepkd**: この種の記事はあくまで著者固有の環境・理解に基づく検証であり、96コア・384GB RAMという大規模なDBサーバーを使っている点が興味深いと指摘。

## 3. [Sperm Whales blow bubbles to achieve restful, vertical sleep](https://news.st-andrews.ac.uk/archive/sperm-whales-blow-bubbles-to-achieve-restful-vertical-sleep/)

**Score:** 45 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=49042751)

セント・アンドリュース大学の研究により、マッコウクジラが海面近くで垂直姿勢のまま眠る際、気泡を放出して浮力を調整していることが判明。頭部の大量のスペルマセティ油により自然に正の浮力を持つクジラは、気泡放出によって浮力を減らし沈んだ姿勢を維持できる。ノルウェー沿岸でのタグ観測に基づく研究がJournal of Experimental Biologyに掲載された。

### Key Discussion Points

- **giardini**: 「もし鼓腸（おなら）を起こしたらどうなるのか」と冗談交じりにコメントしつつ、実際にそうした事態も起こり得るはずだと指摘。
- **dnnehgf**: 「同感」という短いコメント。

## 4. [India's first privately-developed rocket reaches orbit on debut launch](https://arstechnica.com/space/2026/07/indias-first-privately-developed-rocket-reaches-orbit-on-dramatic-debut-launch/)

**Score:** 524 | **Comments:** 149 | [Post](https://news.ycombinator.com/item?id=48973835)

インドの民間企業Skyroot Aerospaceが開発したロケットが、デビュー打ち上げで軌道投入に成功したと報じられている（元記事はペイウォール等のためコメントから内容を推測）。同社は約8年の歴史を持ち、1億6000万ドルの資金調達・評価額11億ドルという比較的小規模な資金でこの成果を達成した点が注目されている。インドはこれにより民間ロケットで軌道到達を果たした3番目の国となった。

### Key Discussion Points

- **zbentley**: 1億6000万ドルの資金・11億ドルの評価額という少ない資金で8年でLEO到達を達成したのは非常に印象的だと評価。
  - **helsinkiandrew**: 皮肉交じりに、その金額は映画『インターステラー』の制作費より500万ドル少ないと指摘。
  - **londons_explore**: 再使用可能な米国製ロケットと比べて、使い捨てだが非常に安価なロケットでコスト競争力を持てるのか疑問を呈した。
- **mayama**: Skyroot以外にも、AgnikulやAstrobaseなど有望なインドの民間宇宙企業を紹介。Agnikulは3Dプリント製の半極低温ケロシンエンジンを開発中。
  - **rayiner**: FFCS（Full Flow Staged Combustion）エンジンの開発に成功すれば、インド宇宙産業にとって大きな成果になると評価。
- **sidcool**: インドが軌道到達を果たした3番目の民間企業として称賛。再使用ロケットに挑戦する別のスタートアップの存在にも言及。
  - **rrr_oh_man**: 「3番目」が具体的に何を指すのか（国か企業か）質問。
- **itissid**: ロケット打ち上げには多くの技術的落とし穴があると説明し、固体燃料の段階制御の難しさなど専門的な内容を解説。
  - **vivzkestrel**: ロケット工学の基礎を学べる情報源を尋ねた。

## 5. [Opus 5 is currently #1 on Artificial Analysis Intelligence Leaderboard](https://artificialanalysis.ai/models)

**Score:** 172 | **Comments:** 112 | [Post](https://news.ycombinator.com/item?id=49040741)

Artificial AnalysisのIntelligence Indexランキングにおいて、Claude Opus 5（Adaptive Reasoning, Max Effort）がスコア61で首位に立った。2位はOpus 5のXhigh Effort版（60点）、Claude Fable 5（Max Effort、Opus 4.8フォールバック、60点）が僅差で続き、GPT-5.6 Sol（Max、59点）が4位となっている。同サイトは586モデルを知能・速度・価格などの指標で比較している。

### Key Discussion Points

- **andy99**: 僅差の1位であっても、検閲的な「安全策」により拒否されたり性能が落とされたりする煩わしさがあるなら、スコア差以上に実用上のデメリットが大きいと批判。信頼性の低さからClaudeの利用をほぼやめたと述べた。
  - **afavour**: 具体的にどのような用途で検閲に頻繁に引っかかっているのか質問を投げかけた。
- **chmod775**: Opus 5はFable 5に次いで依然として2番目に高価なモデルであり、GPT-5.6やKimi K3はスコアがほぼ同等（1〜2%差）ながら半額程度で利用できると指摘。
  - **ricardobeat**: グラフはMax Effort（主に価格に鈍感な企業ユーザー向け）を示しており、Medium Effortではコストがほぼ半減し、コーディングタスクの95%には十分な性能だろうと補足。
- **didibus**: Intelligence Indexの上位モデルを整理し、Opus 5のXhigh EffortがSolのMax Effortを上回り、High EffortでもSolのMaxと同等の知能を持つ点を指摘。
- **firasd**: 構成指標の一つ「AA-Omniscience Index」（幻覚の少なさや知識の信頼性を測定）に注目し、そのランキングではFable 5、Gemini 3.1 Pro、Opus 5（Max）の順になっていると紹介。
  - **mdgld**: この指標にはグラウンディング（根拠付け）の実装度合いが大きく影響しており、Googleはその点で強みがあると補足。

## 6. [My security camera shipped a GitHub admin token in its login page](https://hhh.hn/hanwha-github-token/)

**Score:** 532 | **Comments:** 182 | [Post](https://news.ycombinator.com/item?id=49034292)

Hanwha製セキュリティカメラのファームウェア内に、30個のファイルにわたってGitHub管理者トークンが埋め込まれていた事案。原因はViteビルド時に`process.env`全体がJavaScriptファイルへ書き出されてしまい、CI環境変数がそのまま意図せず含まれたこと。このトークンは数百のリポジトリへのアクセス権を持つ高権限トークンだったが、研究者の報告を受けHanwhaは12時間以内に無効化した。約500件のファームウェアのうち62%を検証した結果、同一トークンが3件で検出されている。

### Key Discussion Points

- **grommz**: 米国防総省（DoD/DoW）のIPアドレスがファームウェアにハードコードされていた点がより大きな問題だと指摘し、「韓国製セキュリティ製品は二度と買わない」と述べた。
  - **hhh**: DoDのIPアドレス空間全体をブラックホール化し内部用に流用している企業を知っており、この件も奇妙だが単純な偶然の可能性もあると補足。
  - **walrus01**: カナダ海軍も最近Hanwha Ocean製潜水艦の採用を見送る判断をしたと関連情報を提示。
- **dev_l1x_be**: IoTベンダーの多くがハードコード認証情報などずさんなセキュリティ実装をしており、最低限のベースラインチェックが必要だと主張。
  - **snoman**: 「IoTのSはセキュリティのS（＝存在しない）」という定番の皮肉を投稿。
  - **awakeasleep**: 最も経験の浅い最安の人材に開発させている以上、ベースラインチェックの実現は難しいと反論。
- **RyJones**: 過去にOBD-IIドングルの多くが同一MACアドレスで出荷され、複数サイトで全アクセス権を得られてしまった事例を紹介。
  - **netsharc**: MACアドレスがどのようにアクセス制御に使われていたのか（クライアント側から偽装可能なはずでは）と疑問を呈した。
- **badatnames**: オープンファームウェアを備えた汎用IPカメラの選択肢を尋ね、価格が高すぎる開発者向けキット以外の選択肢を探していると相談。
  - **zrobotics**: 完全なオープンではないが、隔離ネットワーク上でのONVIF対応カメラが近い代替になると回答。

## 7. [Show HN: I simulated closing the Strait of Hormuz on real oil trade data](https://globaloilnetwork.staffinganalytics.io/)

**Score:** 117 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=49020545)

実際の原油貿易データを用いて、世界の原油サプライチェーンの動態をシミュレートするツール。供給遮断や需要変化が市場価格・流通量に与える影響を数理モデルで分析する。ホルムズ海峡が遮断された場合でも、東西パイプラインやHabshan–Fujairahパイプラインなどのバイパスインフラを通じて部分的に供給を継続できることがモデルに組み込まれており、ユーザーはパラメータをカスタマイズして地域別の影響や週単位の価格変動・備蓄枯渇をシミュレートできる。

### Key Discussion Points

- **HarHarVeryFunny**: モデルが出す具体的な予測は何か、また価格などのどのような変化があればモデルが誤りだと分かるのかを質問。サイト自体は評価しつつ、世界の石油・エネルギー市場のダイナミクスを正確に予測することには懐疑的だと述べた。
- **kccqzy**: パラメータをカスタマイズできる点を評価し、需要弾力性の設定値が低すぎると感じ実際に調整できたと報告。
- **firasd**: インドでは海峡の混乱発生時、調理用ガス（LPG）不足への懸念が強かったとし、見落とされがちな依存関係の好例だと補足。
- **neom**: 関連して、中国の石油を巡る最近の動きを扱ったYouTubeのミニドキュメンタリーを紹介。

## 8. [If coding has been solved, why does software keep getting worse?](https://ptrchm.com/posts/nothing-works-and-everyone-is-euphoric/)

**Score:** 592 | **Comments:** 465 | [Post](https://news.ycombinator.com/item?id=49033004)

著者は、AIによってコーディングが急速に効率化されているにもかかわらず、銀行アプリやSlack、車のインフォテインメントなど日常的に使うソフトウェアの品質が全体的に低下していると指摘する。企業が「見栄えの良いKPI」につながる新機能追加を優先し、直接的な数値効果のない安定性向上を軽視する構造がその一因であるとし、個々の開発者がこの現状に反発することで、より良いソフトウェアを作る機会が生まれると論じている。

### Key Discussion Points

- **alphazard**: 品質低下の原因は、技術力のない「なんちゃってビジョナリー」が製品の意思決定権を握っていることにあり、劣化に気づく開発者やパワーユーザーは意思決定の場にいないと主張。
  - **jason_oster**: 提案されている「製品組織を解体しエンジニア主導にする」という解決策には、この掲示板のエンジニアには人気があるものの、それだけでは不十分だと懐疑的な立場を示した。
  - **rdedev**: 同様の解決策は結局別の形の弊害を生む可能性があると指摘。
- **mancerayder**: macOSなど各種アップデートが「期待」ではなく「恐怖」の対象になっているという著者の主張に共感を示し、Fedora Workstation 45の動向を調べているところだと述べた。
  - **Grombobulous**: 一方で、今年のiOS/macOSは意図的に安定性・パフォーマンス重視のリリースとして話題になっており、ベータ版では起動速度向上や不具合修正が確認できると反論。
- **thelastgallon**: 昇進やボーナスのインセンティブ構造が、新しいツールの乱立と根本解決の欠如につながっていると主張。管理職も「勝利」を誇示するスライドを求めるため、この構造が助長されると説明。
- **greenlimetea**: 「コード品質≠ソフトウェア品質」という逆説を提示し、コード作成の敷居が下がるほど平均的なソフトウェア品質は下がる傾向にあると指摘、InstagramのNashvilleフィルターなどを例に挙げた。

## 9. [Designing an Ethernet Switch ASIC](https://essenceia.github.io/projects/ethernet_switch_asic/)

**Score:** 128 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=48985182)

Julia Desmazes氏が、世界初とされるオープンソースのイーサネットスイッチASICを開発。3ポート・100Mbps帯域・カットスルー方式の無管理スイッチとして設計され、Tiny Tapeoutのシャトルチップで製造予定。限られたピン数（24本）とダイ面積の制約から、外部PHYチップ（Microchip LAN8720A）とRMIIバスインターフェースを採用し、MACアドレス解決テーブルやTTLベースのエントリ管理も実装している。完成後にはwafer.spaceから追加シリコン領域の提供を受け、わずか4日間で設計を拡張する「ラウンド2」に進むことになった。

### Key Discussion Points

- **inigyou**: waferspaceやTiny Tapeoutを以前から追いかけていたが、TTグリッドスクエアにこれだけの機能を収めた点に驚いたとコメント。
- **roadbuster**: Verilog以外に、配置配線・LVS・DRC・SPICEなど物理設計段階で使用したEDAツールチェーンの詳細を尋ねた。
- **jandrese**: フォワーディングテーブルのエントリが4つしかないというメモリ制約は、スイッチを別のスイッチに接続した場合に即座に問題になりそうだと指摘。テーブルにない宛先パケットをアップリンクポートに転送する仕組みを提案。
- **zrobotics**: FPGA設計は経験があるがカスタムASIC設計は予算面で敬遠していたと述べ、はんだごてを使った「IoTソルダリング」的な小規模プロジェクトへの応用に興味を示した。

## 10. [An old patent inspired the new "Y-zipper", a three-sided fastener](https://news.mit.edu/2026/three-sided-y-zipper-design-0504)

**Score:** 150 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=49008512)

MIT CSAILの研究チームが、1985年にMIT教授ビル・フリーマンが出願した40年前の3面ファスナー特許を復活させ、「Y-ジッパー」として開発した。3Dプリントによる柔軟・剛体切り替え機構により、テントや医療機器、ロボットなどを瞬時に柔らかい状態から硬い状態に変形できる。専用ソフトウェアでカスタマイズした上で3Dプリンターで製造でき、約18,000回の開閉に耐える耐久性を持つ。

### Key Discussion Points

- **ayashko**: 10年以上前に登場した「ジッパーマスト」の動画と同じコンセプトだと指摘。柔軟な鋼板をテープメジャーのように巻いておき、展開時に接続して剛体シャフトを形成する仕組みだと説明。
- **rationalist**: ジッパーは通常何かに取り付けるものだが、この設計は実用的なのか、何に使えるのかと疑問を呈した。動画を見た上で、テントポール不要のテントなど、複数面を接合するというより剛体構造を作る用途だと理解を修正。
  - **surround**: 動画で示されているのはポール代わりに使う用途で、Yジッパーを閉じるだけでテントを組み立てられると補足。
- **__MatrixMan__**: 宇宙で自己組み立てする衛星を連想させるとし、パスタ状にまとめて打ち上げ、軌道上で目的の形状に展開、レーザー溶接で剛性を高めるというアイデアを提案。
  - **Terr_**: レーザー溶接の代わりに真空拡散接合を使う案を提示し、十分な時間や日光があれば自然に接合が進む可能性にも言及。
- **jml7c5**: 「リジッドチェーンアクチュエータ」という既存技術と非常に似ていると指摘し、Wikipediaの関連ページを共有。

## Trends

今回のトップ10では、AIモデルの性能競争（Claude Opus 5の発表とベンチマーク首位の話題が2件ランクイン）が最大の話題となった。一方で、AIによる開発効率化が進む一方でソフトウェア全体の品質は低下しているという逆説的な議論（#8）も大きな反響を呼んでおり、AIコーディングの光と影が対比的に取り上げられた回といえる。またIoT・組み込み機器のセキュリティずさんさ（セキュリティカメラのトークン流出）、インフラのスケーラビリティ検証（Postgres）、インドの宇宙産業の躍進など、実務的・技術的な深掘り記事も多く、コメント欄では専門知識を持つユーザーによる詳細な技術的議論が活発に交わされた。
