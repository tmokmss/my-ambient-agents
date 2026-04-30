---
title: "Hacker News トップ10 ダイジェスト（2026年4月30日）"
date: "2026-04-30T14:24"
category: "summary"
summary: "Zed 1.0リリース・OpenAIゴブリン騒動・MozillaのChrome Prompt API反対など、AI/エディタ/エネルギー政策が話題の1日"
tags: ["hackernews", "ai", "zed", "nuclear", "openai", "mozilla", "ibm"]
---

## 1. [Zed 1.0](https://zed.dev/blog/zed-1-0)

**Score:** 1982 | **Comments:** 634 | [Post](https://news.ycombinator.com/item?id=47949027)

高性能コードエディタ Zed がバージョン1.0に到達した。Mac・Windows・Linuxをサポートし、100万行超のコードベースに成長。AI内蔵機能として並列エージェントサポートとキーストローク予測編集、ビジネス向けチーム管理機能を追加した。さらにCRDTベースのリアルタイムコラボレーション同期エンジン「DeltaDB」を開発中で、人間とAIエージェントが共有コードベース上で協働できる環境を目指している。

### Key Discussion Points

- **giancarlostoro**: JetBrains IDEを2017年から年間購読していたが、Zed移行後はほぼ使わなくなった。月額プランで開発を支援している
  - **joefitzgerald**: Zed は本当に使いやすく、1年以上 VSCode を開く必要がなくなった
- **obeavs**: トップコメントの否定的な反応は残念。Zed チームは独自技術で素晴らしい製品を作り上げた
  - **electroly**: 投稿1時間後にはすべて好意的なコメントが上位に。投票が落ち着くまで待つ価値がある
- **nzoschke**: SSH経由リモート作業での主要エディタとして使用。ファイル編集・ターミナル・エージェント・SSHの統合インターフェースが優れている
- **Meekro**: 2010〜2020年代の大規模レガシーPHPプロジェクトで警告が多すぎる。特定の警告を無視するボタンが欲しい
- **jorgeleo**: ライセンス条項でZedがソースコードに広範な利用権を要求しており、同意できないため導入を断念した

---

## 2. [Where the goblins came from](https://openai.com/index/where-the-goblins-came-from/)

**Score:** 835 | **Comments:** 494 | [Post](https://news.ycombinator.com/item?id=47957688)

Codex 5.5 のシステムプロンプトに「ゴブリン・グレムリン・アライグマ・トロルなどについて、絶対的かつ明確に関連している場合を除き話してはならない」という繰り返し文が発見されたことを受け、OpenAIがその背景を解説するブログ記事を公開した。繰り返し文は特定のトレーニングシグナルにより意図せず埋め込まれたもので、開発者プロンプトを通じた軽減策が実装されている。

### Key Discussion Points

- **modernerd**: 2036年を舞台にしたショートSFを投稿。「Please, easy on the goblins」という5語のフレーズで衛星の誤動作を解決するという物語
- **harrouet**: LLM技術は理解できない「魔法」。モデルを変えると動作が完全に変わり、予測可能な知性システムとは言えない
  - **wanderingmind**: 人類は鋼の科学を完全理解する前から千年以上使ってきた。理解前の活用は問題ない
  - **jsenn**: 記事は奇妙な動作の原因を実証し、開発者プロンプトで軽減策を実装したことを示した
- **ollin**: 2日前、ユーザーがCodex 5.5システムプロンプト内の繰り返し文を発見しTwitterに投稿したのがきっかけ
  - **christoph**: 莫大な評価額のAI企業がテキストファイルのハックで話題を制限しているのは皮肉
- **postalcoder**: こういった透明性のある解説を歓迎。Claudeの「is the real unlock」フレーズなど他社の独特な言い回しも気になる
- **jameshart**: 「あなたはCodexです、コーディングエージェントです」というシステムプロンプトの書き方の奇妙さを考察。一人称・命令形など別の構造との違いを問う

---

## 3. [Noctua releases official 3D CAD models for its cooling fans](https://www.noctua.at/en/3d-cad-models)

**Score:** 376 | **Comments:** 84 | [Post](https://news.ycombinator.com/item?id=47927627)

冷却ファンメーカー Noctua が、全製品ラインナップの公式3D CADモデルをSTEP形式で無償公開した。製品統合設計・3Dプリントプロジェクト・ケース設計に活用できる。知財保護のためファン羽根形状など一部は変更されているが、取り付け寸法等の実用情報は網羅されている。

### Key Discussion Points

- **srott**: YouTubeの「Fan Show Down」という競技会を紹介。Noctuaのオリジナル設計を超えようとする参加者たちの動画シリーズ
  - **userbinator**: 設計特許が失効していれば物理オブジェクトの複製は合法。自動車アフターマーケット部品に豊富な前例がある
- **egeozcan**: 3DスキャンによるリバースエンジニアリングができるためCADモデル公開がIP保護に問題をもたらす可能性を指摘
  - **userbinator**: 取り付け寸法は標準化されているのでは？（多くの人がNoctuaファンに換装している）
  - **Moto7451**: Thermaltakeはすでにクローンを製造済み。Noctuaはカラースキームとブランドをコピーしない限り問題視していない模様
- **kernalix7**: 以前Noctuaファンを組み込んだ3Dプリンタ設計で手動計測が必要だった。公式CADがあれば統合がずっと楽になった
- **embedding-shape**: 公式ダウンロードページへのリンクと、NF-A12x25 PWMを例として提供
- **fy20**: サイレントファンのBOMコスト差を質問。水ポンプコントローラーの騒音ファンをNoctuaに換装予定

---

## 4. [Mozilla's Opposition to Chrome's Prompt API](https://github.com/mozilla/standards-positions/issues/1213)

**Score:** 303 | **Comments:** 119 | [Post](https://news.ycombinator.com/item?id=47959463)

MozillaがChromeのPrompt API（ブラウザに直接LLMを組み込む提案）に対して反対立場を表明した。主な懸念は「プロンプトとモデルの密結合」と「TOU上のモデル中立性」の欠如。Mozillaの立場は"position: negative"として記録されている。

### Key Discussion Points

- **jaffathecake**: 投稿者本人（Jake Archibald、元GoogleのChromeエンジニア、現Mozilla）。Mozillaの詳細な立場を示したリンクが投稿後に削除されたと指摘
  - **swyx**: Jake Archibaldの経緯（Google Chrome→Mozilla移籍）に注目。企業の制約なく意見を言えるようになったのかもしれない
- **heresie-dabord**: 実体験として、Geminiモデルで英国風のホームオートメーション音声を設定しようとした際、プロンプトがモデル固有のクセに依存してしまい別モデルでは機能しなかった
  - **stronglikedan**: 「これは対抗的なモックサウンドだ」
  - **ilaksh**: モデル差異はデバイスのジオロケーション精度差と同様。Firefox独自実装と適切な権限設定で対応すべき
- **hmokiguess**: オープンプロトコルが存在しても独占は起こる。ユーザーは自由より使いやすさを優先する傾向がある
- **benterix**: 「ブラウザ・OSがLLMへのアクセスを期待される」という前提自体に疑問を呈する
- **austin-cheney**: LLMなしでは生活できない若い世代と、ウェブブラウザにスーパーコンピュータを要求されたくない旧世代の価値観の衝突かもしれない

---

## 5. [Belgium stops decommissioning nuclear power plants](https://dpa-international.com/general-news/urn:newsml:dpa.com:20090101:260430-930-14717/)

**Score:** 230 | **Comments:** 158 | [Post](https://news.ycombinator.com/item?id=47961319)

ベルギー政府が原発フェーズアウト政策を撤回し、運営会社ENGIEから7基の原子炉を国有化する方針を表明した。デ・ウェーヴァー首相は「安全で手頃で持続可能なエネルギー」を選ぶと宣言。基本合意は10月までを目標とし、化石燃料依存低減とエネルギー安全保障を目指す。なおENGIEはフランス政府が大株主の企業で、実質的にフランスがベルギーの原子炉の廃炉を行わなくなることを意味する。

### Key Discussion Points

- **pjc50**: ENGIEはフランス政府が大株主であることを指摘。稼働中の安全な原発を廃炉にするのは誤りで、古い車に追加投資するか廃車にするかの判断に似ている
  - **cogman10**: 老朽化した原発は現代の安全機能を欠くため、施設の年齢に応じた定期的なアップグレードか廃炉を義務付けるポリシーを支持
  - **monegator**: 欧州で再生可能エネルギーが目立った変化をもたらしていないと20年間言い続けている。始めなければ完成しない
- **716dpl**: EUも同週に原子力・再生可能エネルギーの展開加速計画を発表。今回のエネルギー危機は長期的な影響をもたらす
  - **adev_**: ドイツは15年間ロシアガス依存で核エネルギーを妨害。メルツは原発廃止を「過ち」と発言、欧州レベルで核エネルギー議論が正常化しつつある
- **deanc**: 強固で安定した電力グリッドと清潔な核エネルギーが必要不可欠
- **kleiba2**: ドイツは1970年代から数十万年間安全な核廃棄物処分場を探しているが2040年以降まで結論が出ない
  - **mpweiher**: ドイツの問題は技術的でなく政治的。フィンランドは10億ユーロで建設成功。ドイツの BASE（核廃棄物機関）は実際の候補地探索より反核メッセージに予算を使っている
- **NeutralForest**: ベルギーはすでに良好な発電構成だが石油依存度が高い。エネルギー危機が再生可能エネルギーへの転換を後押しするかもしれない
  - **JumpCrisscross**: 化石燃料以外のすべてを採用すべき。移行期にインフラ整備とバッテリー確保が課題

---

## 6. [Granite 4.1: IBM's 8B Model Matching 32B MoE](https://firethering.com/granite-4-1-ibm-open-source-model-family/)

**Score:** 174 | **Comments:** 98 | [Post](https://news.ycombinator.com/item?id=47960507)

IBMがApache 2.0ライセンスのオープンソースLLMファミリー「Granite 4.1」を公開。3B・8B・30Bの3サイズ展開で、エンタープライズ用途向けに設計されている。特筆すべきは8Bモデルが以前の32B MoEバリアントと同等以上のベンチマーク結果を達成した点で、ツールコール68.3（BFCL V3）・数学推論92.5（GSM8K）・最大512Kトークンコンテキストをサポートする。

### Key Discussion Points

- **0xbadcafebee**: 記事はモデル設計（ハルシネーション低減・数学的強化）について有効な指摘をするが比較分析が不足。Qwen 3.5 4Bなど他モデルファミリーには全体的に劣る
  - **phkahler**: 指示追従が最も重要な能力。8Bでエッジデバイス展開が実現できれば実際的な有用性がある
  - **sureMan6**: LLM生成の記事への懸念。Geminiで論文研究時に存在しない論文を「発明」された経験から、LLM記事の80%に誤情報が含まれる可能性を指摘
- **dash2**: LLMに書かせたコンテンツなら読む気がしない（批判的スタンス）
- **2ndorderthought**: 昨日試した。8Bとして印象的でコモディティHWでも高速。最新訓練データが利点だが、他モデルが同様に更新されたら優位性は薄い
- **m3at**: IBM Research公式ブログ記事とHugging Faceの重みへのリンクを共有
- **cbg0**: `granite-vision-4.1-4b`のテーブル・意味的Key-Value抽出への応用に注目

---

## 7. [Meta in row after workers who saw smart glasses users having sex lose jobs](https://www.bbc.com/news/articles/c5y7yvgy0w6o)

**Score:** 121 | **Comments:** 66 | [Post](https://news.ycombinator.com/item?id=47961838)

Metaのスマートグラスのコンテンツ分類を担当していたアウトソーシング企業の従業員が、ユーザーが性行為を行っている映像など深刻なプライバシー侵害事例を見ていることを内部告発した後、解雇された。Metaは同社との契約を解除し「Metaの基準を満たしていない」と説明したが、従業員を解雇したのはアウトソーシング企業側。

### Key Discussion Points

- **talkingtab**: Metaの「基準を満たしていない」という説明は、問題のある慣行を隠蔽する基準なのか、それとも利益最大化の哲学なのかと疑問視
- **gorbachev**: Metaはスマートグラスコンテンツの分類を委託した企業との契約を解除。従業員が深刻なプライバシー問題を告発した後のアクション
- **redbell**: Metaが従業員に「生活空間から裸体まで」を監視させて顧客体験向上に使うと述べていたことに衝撃を受けたと表明
- **HarHarVeryFunny**: Metaがスマートグラスからユーザーのプライベートなシーンを録画していることと、それを告発した人を解雇することのどちらが問題かと問いかける
- **Bender**: スマートグラス購入を検討。Facebookアカウントの要否とUSB給電について質問

---

## 8. [I aggregated 28 US Government auction sites into one search](https://bidprowl.com)

**Score:** 74 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=47961378)

BidProwlは、GSA・GovDeals・Ritchie Bros.など27の政府余剰オークションプラットフォームを1つの検索インターフェースに集約したサービス。全50州の約75,000件の出品（車両・重機・不動産・軍剰余品など10カテゴリ）を1日2回更新で提供し、コミッション不要でオリジナルのオークションサイトへ誘導する。

### Key Discussion Points

- **1970-01-01**: 政府オークションは「400個の壊れた何かをまとめて落札したい時」や「3州にまたがって$1,000の軍用キッチンシンクを探し回る時」に便利、という皮肉交じりのユーモアコメント
- **xnx**: 3週間前にHNで投稿された「GovAuctions」と類似しているとの指摘
- **pwr1**: 同じアセットが複数サイトに掲載される場合の重複排除処理について質問
- **yodon**: サーバー負荷の問題か、ホームページは表示されるが個々の州のページが読み込まれないと報告
- **kdot**: Washington D.C.（コロンビア特別区）が未対応と指摘

---

## 9. [The FCC is about to ban 21% of its test labs today. I mapped them all](https://markready.io/blog/fcc-accredited-test-labs-complete-guide)

**Score:** 11 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47962386)

FCCが認定する591のテストラボのうち、中国・香港に拠点を置く126施設（全体の21.3%）を2026年4月30日の投票で禁止する方針。対象にはInterTekやSGSなど西側大手テスト会社の現地子会社も含まれる。製品メーカーはFCC認証取得のための代替ラボ選定を迫られる可能性がある。

### Key Discussion Points

（コメントなし）

---

## 10. [My Stratum-0 Atomic Clock](https://coverclock.blogspot.com/2017/05/my-stratum-0-atomic-clock_9.html)

**Score:** 24 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=47925792)

2017年のブログ記事。著者がチップスケール原子時計（CSAC）とGPS規律発振器をRaspberry Pi 3と組み合わせた「Stratum-0」原子時計「O-2（astrolabe）」を自作した記録。GPS信号なしでもUTCから数マイクロ秒以内の精度を維持し、ローカルネットワークのStratum-1 NTPサーバーとして動作する。

### Key Discussion Points

- **geerlingguy**: 複数のGPSアンテナは冗長性が必要でなければ不要。GPS信号分配ボックスを使えば1つのアンテナから複数デバイスへ分配でき、コストを抑えられる
- **JKCalhoun**: CSACの価格について言及。eBayでルビジウム発振器モジュールが数百ドルで入手可能と紹介。Scientific Americanの「Amateur Scientist」コラムのDIY精神を懐かしむ
- **mzs**: 4つのStratum-1時計を組み合わせることで精度をさらに向上できるかを疑問視

---

## Trends

本日のHN上位10件には、いくつかの共通するテーマと傾向が見られた。

**AIツールの成熟と批判的検討**: Zed 1.0のリリース（スコア1982）はAI統合エディタへの強い関心を示す一方、MozillaのChrome Prompt API反対（スコア303）やIBM Granite 4.1への批評（スコア174）では、AI技術の標準化・モデル依存性・LLM生成コンテンツの信頼性に対する懸念が浮き彫りになった。

**AIの不透明さへの関心**: OpenAIの「ゴブリン騒動」（スコア835）は、LLMの内部挙動がいかに予測困難で不可解であるかを示す象徴的なエピソードとして大きな反響を得た。AIシステムの透明性と説明責任への需要が高まっている。

**エネルギー安全保障と原子力の復権**: ベルギーの原発廃炉停止（スコア230）は、エネルギー地政学の変化を反映している。ロシアウクライナ紛争・エネルギー危機を背景に、欧州全体で原子力エネルギーへの再評価が加速しており、EUレベルでも政策転換が進んでいる。

**プライバシーと監視への懸念**: Metaスマートグラス事件（スコア121）は、AIデバイスが日常的なプライバシー侵害の道具になりうる現実を突きつけた。内部告発者の保護と企業の透明性が問われている。

**DIYとオープンソース精神**: Noctua CADモデル公開（スコア376）や手作り原子時計（スコア24）など、メーカーや個人が技術情報を惜しみなく共有する文化への評価が根強く残っている。
