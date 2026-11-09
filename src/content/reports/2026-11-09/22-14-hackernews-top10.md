---
title: "Hacker News トップ10 ダイジェスト（2026年11月10日）"
date: "2026-11-09T22:14"
category: "summary"
summary: "Claude Fable 5.2 発表、折り紙飛行機、カナダの即時決済 RTR 開始、USPS の ZIP 境界データ有償公開など"
tags: ["hackernews", "AI", "payments", "privacy"]
---

## 1. [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)

**Score:** 765 | **Comments:** 437 | [Post](https://news.ycombinator.com/item?id=50429906)

Anthropic が Fable 5.2 と Mythos 5.2 を発表。両者は同一モデルで、Fable は全ユーザー向け、Mythos はサイバーセキュリティ／生命科学の審査済み組織向け。Fable 5.1 比で出力が最大30%高速になり、最大2.5倍速の fast mode もある。価格は入力 $8 / 出力 $40（百万トークンあたり）。1,000 エージェントで Fermat の最終定理を約30時間で形式化した事例も紹介された。

> **関連:** #8「Claude Fable 5.2 Scores 65 on Artificial Analysis, Highest So Far」も参照（同一モデルの第三者ベンチマーク）

### Key Discussion Points

- **skeledrew**: 11月3日の「Opus 5.5 劣化」報告は新バージョン公開前の調整だったのではないかと指摘。
  - **ianberdin**: 9月のベンチマーク（SVG 描画）を同条件で再実行したが劣化は確認できなかったと反論。
  - **ariwilson**: 11月3日以前のベースライン評価（30件のバグ修正・機能追加）を再実行したが、劣化は見られなかった。
- **yewenjie**: 1,000 エージェントによる Fermat の最終定理の形式化（30時間）の記述を引用。
  - **legulere**: 指数関数的成長は見えず、むしろ緑の革命のような一度きりの飛躍に近いと主張。
  - **Fordec**: AI の最新情報は歴史を学ぶ感覚に近く、頭に入る頃には更新されていると述べた。
- **postalcoder**: Opus 5.5 が優秀なため Fable への羨望は薄れた。Fable の差はプロンプトの野心度を上げて初めて出ると評価。
  - **wolttam**: モデル性能の向上は、高度な課題を扱える人にしか効用がなくなりつつあると同意。
  - **vunderba**: Fable の JavaScript による描画力が専用画像モデルの価値を疑わせると述べた。
- **breakwaterlabs**: ベンチマーク比較の設計（Fable xHigh 対 Carbon Med、サイバー系の比較から Carbon が外れている等）に疑問を呈した。
  - **jsnell**: 該当ベンチマークでは、各モデルの最良の effort がその設定だからだと説明。

## 2. [Fold Epic Paper Airplanes](https://www.foldableflight.com)

**Score:** 757 | **Comments:** 128 | [Post](https://news.ycombinator.com/item?id=50424581)

紙飛行機の折り図カタログサイト。難易度、機体タイプ、デザイナー、紙サイズで絞り込め、各機体に速度・滑空・精度の評価が付く。初心者向けのダートや、滞空時間の世界記録機なども掲載されている。

### Key Discussion Points

- **literallyanythi**: 「Very Easy」の1分で折れる機体を動画どおりに折り、ポケットを作る工程が気づきだったと報告。
  - **bronco21016**: 子どもの頃から、この機体の原型の Nakamura Lock を折っていた。最も安定して飛んだという。
  - **andai**: 折ってみたら非常に滑らかに飛び、従来の素朴な機体は急降下したと報告。
- **HelloUsername**: 過去のスレッドとあわせて foldnfly.com を関連サイトとして紹介。
  - **chrisweekly**: foldnfly.com のほうが本記事のサイトよりずっと良いと評価。
  - **clarkmoody**: 広告ブロック検知のメッセージでコンテンツ全体が隠れたと不満。
- **intrasight**: 1978年、ピアノ教室の待合室で見知らぬ老紳士から紙飛行機の本をもらった思い出を披露。
  - **sumtechguy**: 『The Ultimate Paper Airplane』を勧めたが、多くの機体でテープが要る。
- **diogoadrados**: 中学の紙飛行機大会で、定番機を投げ込んで練習してきた相手に負けた経験から学んだことを語った。

## 3. [Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy)

**Score:** 421 | **Comments:** 228 | [Post](https://news.ycombinator.com/item?id=50427362)

Payments Canada が、24時間365日で即時に清算・決済できる全国決済システム Real-Time Rail を開始。ISO 20022 を採用し、受取人確認や取引安全スコアなど集中型の不正対策をG7で初めて立ち上げ時から必須とした。当初の参加者は Wealthsimple や KOHO などで、大手銀行は今後数か月で順次参加の見込み。C.D. Howe 研究所は最大145億ドルのコスト削減を見込む。

### Key Discussion Points

- **ttul**: 起業するならカナダでの法人化も悪くないと指摘。連邦法人制度や R&D 税額控除に言及した。
  - **btbuildem**: 米国企業の利益のためにカナダの税金が使われる点に不満を述べた。
  - **cdnsteve**: 税率が6%という主張は誤りで、6.4%は新規投資の限界実効税率にすぎないと訂正。法案もまだ草案段階だという。
- **QGQBGdeZREunxLe**: 米国に即時決済網がないのは異常で、FedNow は対応銀行が少なく手数料も高いと指摘。
  - **JumpCrisscross**: 米国は1915年の Fedwire で即時グロス決済を発明しており、FedNow は2023年開始と反論。
  - **whh**: オーストラリアは2018年から NPP があり、電話番号宛ての送金が即時に反映されると紹介。
- **mlekoszek**: Interac の e-Transfer を公共財として全銀行に開放するような構想で、Interac を巻き込んだのは賢明だと評価。
  - **johnwalkr**: カナダは以前から Interac デビットや e-Transfer が普及し、銀行間連携も良好だと補足。
- **mig39**: 参加者に大手銀行が見当たらないと指摘。
  - **throw0101c**: RBC は2027年第2四半期に導入予定という報道を紹介。
  - **jjmarr**: Wealthsimple の預かり資産は最小の大手行 BMO の約半分にあたり、すでに大手に近いとした。
- **MarkusWandel**: M-PESA の近代版のようなものかと問い、ガレージセールが最後の現金の砦だと述べた。
  - **freeone3000**: 消費者向けの仕組みは今回の合意に含まれず、Interac と大差ないとの見方。

## 4. [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb)

**Score:** 261 | **Comments:** 123 | [Post](https://news.ycombinator.com/item?id=50431058)

USPS が配達先データから作る全米の ZIP コード境界データ（ZIP Code Boundaries）を提供開始。Internal / Enterprise / Publication の3版があり四半期ごとに更新される。GeoJSON のサンプルがあるが、価格は明記されておらず、コメントでは有償（最低層で約1万ドル）と受け止められた。

### Key Discussion Points

- **SwellJoe**: 最低層で1万ドルは高く、連邦データは無料であるべきだと主張。
  - **tantalor**: 1人が購入すれば共有できるはずだ、公的データで著作権等の保護もないと主張。
  - **Y_Y**: USPS は営利を求める政府機関ではないかと指摘。
- **xp84**: ZIP コードは配達ルートのラベルで、本来ポリゴンでは表せないはずだと疑問を呈した。
  - **bordercontrol**: 地理データの経験から、データ量が1〜2桁増えて処理が重くなるとして否定的。
  - **mikepurvis**: 複数の閉領域の和集合を許せば柔軟になると補足。
- **showerst**: 無料と期待したが違った。多少の誤差を許容できるなら、国勢調査局の ZCTA シェープファイルが無料で近似に使えると紹介。
  - **munro**（投稿者）: 同じく無料だと思ったが違った。Puerto Rico のサンプルを ZCTA と比較して差は小さく、国勢調査のデータで足りそうだと述べた。
  - **dathinab**: ZIP の境界線が有償だとどうやって番号を調べるのかと驚いた。
- **johnnyo**: 政府保有データなら FOIA で請求できないのかと質問。
  - **Tangurena2**: 議会が USPS を赤字に見せる法律を作り続けていると主張。
  - **anamexis**: 39 U.S.C. 410(c) が「商業的性質の情報」を開示対象外としていると説明。
- **legitster**: ZIP は市場の地理区分ではなく郵便トラックの配達ルートの集合で、ZIP+4 はそれを1ブロックまで絞る試みだと文脈を説明。

## 5. [Our Smallest, Most Efficient Model: Muse Ember](https://research.meta.ai/blog/muse-ember)

**Score:** 194 | **Comments:** 82 | [Post](https://news.ycombinator.com/item?id=50429024)

Meta が最小・最効率モデル Muse Ember を発表。ツール呼び出しやルーティングなど高頻度のエージェント作業向けで、100万トークンのコンテキスト、テキスト・画像・音声・動画の入力に対応する。価格は入力 $0.10 / 出力 $0.50（百万トークン、20万トークンまでのプロンプト）。Meta 自身のベンチマークでは Haiku 5.5 や GPT-6 Luna を上回る項目が多いが、FrontierCode 2.0 では Haiku が上回る。

### Key Discussion Points

- **simonw**: 6段階の effort で pelican の SVG を生成して比較した（high は完全な SVG が返らなかった）。
  - **dvaplima**（投稿者）: 肉眼では effort の違いがスタイルの差にしか見えないのが面白いと述べた。
  - **meric_**: 推論トークンがわずか10の minimal が最良に見えるのは意外だと指摘。
- **Retro_Dev**: 「最小モデル」なのでオープンウェイトを期待したが見当たらず残念。
  - **loeg**: Spark Open が10月に公開されたので、いずれ出るかもしれないと返した。
- **kbrannigan**: 初期のPCのように、LLM も最終的には用途別の専門モデルに落ち着くだろうと予想。
  - **drillsteps5**: コーディング用途に海賊版を含む全書籍の学習が必要かと疑問を呈し賛同。
  - **grim_io**: 実世界では分野横断的なスキルのほうが価値が高いと反論。
- **open-paren**: これは OpenRouter のステルスモデル「crouton alpha」だと思うと推測。
- **minimaxir**: キャッシュ入力が通常入力の4%と、Luna/Haiku の10%より安い点に注目。

## 6. [E-means: 10x faster k-means at equal loss](https://e-means.github.io/)

**Score:** 176 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50429734)

Meta FAIR による Lloyd 法 k-means のミニバッチ置換アルゴリズムで、Faiss に実装されている。クラスタごとの和とカウントを指数移動平均で更新し、バッチサイズとステップ幅はスケーリング則で自動設定される。著者らの測定では Lloyd の25エポックと同等の損失に1.2〜3エポック程度で到達し、GPU 上で Flash-KMeans の10〜45倍速、CPU 上で Faiss の8〜15倍速。ベンチマークは著者自身によるもの。

### Key Discussion Points

- **jlhawn**: 球面上の正二十面体等面積メッシュを Lloyd 法で緩和する趣味プロジェクトに応用してみるつもりだと述べた。
- **Luke2642**: NP 困難な問題でも近似解で十分なことがあり、P=NP かどうかだけが問いではない例だと評価。
  - **hinkley**: ブルームフィルタや一貫性ハッシュのように、片方の答えが確実に除外できる種類のアルゴリズムが好きだと述べた。
  - **LPisGood**: オペレーションズ・リサーチは NP 困難を出発点とする分野だと指摘。
- **real_faxenoff**: 自分の IVF インデックスにこの手法を応用し、GPU で146倍の高速化を得たと報告。
- **wood_spirit**: 可視化が分かりやすく、scipy に入ってほしいと期待。
  - **porridgeraisin**（投稿者）: 自動ハイパーパラメータ則の直感がまだつかめていないと返した。

## 7. [Google Gemini routes personal Drive files and emails to human annotators](https://github.com/thisisme6598/gemini_files/)

**Score:** 168 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=50429426)

2023年に Google が「個人の Gmail・Docs・Drive の内容は人間のレビュアーに見られない」と約束していたが、10月16日の更新でこれを覆し、Connected Apps 経由で取り込まれたメールやファイルが人間のレビューに回りうると認めた、という指摘。取り込みは明示的な @Drive 等なしにバックグラウンドで確率的に起きると主張されている（投稿内の主張であり、独立検証ではない）。

### Key Discussion Points

- **bri3d**: これはコンシューマー版 Gemini の Connected Apps に限った話で、Workspace 版は人間のレビュー対象外とされていると指摘。
- **rustyhancock**: プライバシーがここまで侵食されたのは不満だが、Gemini が妙に的確な話をする理由に合点がいったという。
  - **brador**: すべてが国家安全保障と利益のための二社寡占の構造で、逃げ場がないと述べた。
- **hek2sch**: 人間のレビュアーやアノテーターを置くツールはどれも同じで、データが読まれたり学習に流用されたりしうると警告。
- **asxndu**: 怒りを覚えるが代替手段がひどいと嘆いた。
  - **nicce**: 今はメールも Drive 互換もセルフホストが容易で、ハードウェアに少し投資すればよいと反論。
  - **xnickb**: セルフホストも、手間をかければ低コストで十分な結果が得られると同意。
- **easytiger**: Meet の Gemini 文字起こしが24時間以上かかったことがあり、手動介入を疑った。
  - **bri3d**: Workspace には明示的なデータ保持契約があり、学習や人間のレビューには使われないとされるので根拠が薄いと反論。

## 8. [Claude Fable 5.2 Scores 65 on Artificial Analysis, Highest So Far](https://artificialanalysis.ai/models/claude-fable-5-2)

**Score:** 142 | **Comments:** 73 | [Post](https://news.ycombinator.com/item?id=50431144)

Artificial Analysis の Intelligence Index で Claude Fable 5.2（Max）が65点となり、比較対象の中央値40を大きく上回る最高値を記録。一方で価格は入力 $8 / 出力 $40 と高く、全タスク実行のコストは約 $26.54、最初の回答トークンまで約232秒、1タスク約44分と時間もかかる。

> **関連:** #1「Claude Fable 5.2 and Mythos 5.2」も参照（同一モデルの発表元記事）

### Key Discussion Points

- **rgbrenner**: スコアよりタスク単価に注目すべきだと指摘。Fable 5.1 の約11.8万トークンから5.2では約27.4万トークンに増え、コストはほぼ倍になった。
- **oliwary**: 5.2（特に low と medium）は、タスク時間と知能のパレートフロンティア上にあると評価。
- **gizmodo59**: 開発者にとって重要なのは知能と効率のパレート図で、OpenAI が全象限にまたがり、Muse が下端にいるという見方。
- **vbroot**: この価格では採算が合わないように見えると述べた。

## 9. [CUI – Native UI components for C](https://yappologistic.github.io/CUI/)

**Score:** 90 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=50430621)

C 向けの UI コンポーネントライブラリ。取得できたページにはナビゲーション（Overview、Guide、Components、Showcase、Apps、Changelog）しかなく、詳細は GitHub の yappologistic/CUI を指していた。説明は主にコメントに基づく。

### Key Discussion Points

- **nepthar**: 面白いが、最初のコミットは4日前でほぼ Claude が書いたものに見え、UI も AI が出しがちなスタイルだと指摘。
- **zerr**: 「ネイティブ」ではなくカスタム UI コンポーネントだと批判。ネイティブなら macOS の NSButton や WinUI の Button をラップするはず。
- **turtlebits**: 投稿後の経過日数に最低条件を設ける HN の機能が欲しいと皮肉った。
- **piker**: メモリ安全性を Fable で別途検査できるなら、コンパイル時間の面で C が合理的になりつつあると述べた。
- **apitman**: 仕事のコードの大半が AI 生成になり、手で書く練習として C で個人プロジェクトを始めたという。

## 10. [Infineon marks innovation milestone with 300mm power silicon carbide wafer](https://www.infineon.com/press-release/2026/infpr202611-028)

**Score:** 69 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=50429430)

Infineon が、300mm のシリコンカーバイド（SiC）パワーウェハ上で加工した機能するデバイスを業界で初めて示したと発表。プレスリリース本文は取得できず、コメント内の引用に基づく。

### Key Discussion Points

- **bradknowles**: ページ冒頭の要約を引用し、世界初の300mm パワー SiC ウェハだと確認。
- **johntb86**: 既存のシリコン用300mm 装置を流用できるのに、なぜ移行に時間がかかったのかと疑問を呈した。
- **mercurywells**: Wolfspeed は今年初めに300mm へ移行済みだと思っていたと指摘。
- **LoganDark**: GaN との比較で優劣はどうかと質問した。

## Trends

- **AI モデルのリリースと検証が中心**: Fable 5.2（#1, #8）と Muse Ember（#5）が並び、性能だけでなくタスク単価・所要時間・effort 設定が議論の軸になった。#1 のコメントでは Opus 5.5 劣化説に対し再計測による反論が出た。
- **AI 生成コードへの視線**: #9 のように、短期間でほぼ AI 生成のプロジェクトに対するコミュニティの疲労感が見える。
- **データと公共性**: #4 の ZIP 境界データの有償化、#7 の個人データの人間レビューなど、公的・私的データの扱いが問われた。
- **インフラの更新**: #3 のカナダ RTR、#10 の300mm SiC など、決済と半導体のインフラ進展も目立った。
- **息抜きの人気記事**: #2 の紙飛行機が757点で、技術以外の素朴な題材も強い。
