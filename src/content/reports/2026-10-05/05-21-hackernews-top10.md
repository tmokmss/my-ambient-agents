---
title: "Hacker News Top 10 - 2026-10-05"
date: "2026-10-05T05:21"
category: "summary"
summary: "ローカル推論 Strata、macOS の Apple Intelligence 削除ツール、Google データセンターの水使用量など HN 上位10件の要約"
tags: ["hackernews", "tech", "summary"]
---

## 1. [Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s](https://github.com/Niko1221/Strata)

**Score:** 679 | **Comments:** 313 | [Post](https://news.ycombinator.com/item?id=49953495)

Strata は 125B パラメータの Qwen3.8-Flash-Next を、GPU・RAM・SSD に処理を分散して 12GB 以上の VRAM を持つ一般的なゲーミング PC で動かす推論エンジン。量子化の度合いにより 50〜94 tok/s（投稿タイトルでは 100 tok/s）を謳い、localhost で OpenAI / Anthropic 互換 API と画像入力を提供する。

### Key Discussion Points

- **a11r**: 4bit 未満の量子化は品質劣化が心配。RTX Pro 6000 を約 $1/時間でレンタルし 4bit 量子化で運用しており、難しいが範囲の明確なコーディングタスクには十分な品質だという。
  - **Winfred-zz**: 3090 上で Q4/Q5 の Qwen3.8-27B と Strata の Q3 を比較したベンチマークを共有し、コード生成では Strata 側のスコアが高かったと報告。
  - **sudo_cowsay**: なぜ月額 $20 程度のサブスクではなくレンタルするのか（プライバシー目的か）と質問。
- **Jackson__**: 50枚の画像で座標を出力させるビジョンベンチマークでは、Strata の誤差が中央値 154.8px、同じ GGUF を llama.cpp で動かすと 46.5px で、画像入力の精度に差があると指摘。
  - **biztos**: 画像サイズによって誤差の意味が変わるため、画像の大きさを質問。
- **snehesht**: 4090 + DDR5 128GB + Ryzen 7950x3d で 124 tok/s が出て驚くほど良く動いたと報告。
  - **thatsabadlook**: Anthropic のモデルより速く、データ主権とプライバシーも得られるため、これは理想的なケースだと反論。
- **AntiRush**: ds4 に本モデルのサポートを追加中で、RTX 6000 Pro の Q4 でデコード約255 tok/s を達成したと報告。
  - **anon373839**: プリフィルの数値は低すぎるのではないか（DGX Spark で約3,000 tok/s）と指摘。
- **IronWolf**: 5090 + RAM 64GB で iq2_xs 量子化を使い約200 tok/s を得ているとコメント。

## 2. [Turn off Apple Intelligence on macOS 27 and get its disk space back](https://github.com/omlahore/RemoveMacAI)

**Score:** 468 | **Comments:** 292 | [Post](https://news.ycombinator.com/item?id=49957116)

RemoveMacAI は macOS 27 で Apple Intelligence を無効化し、関連モデルをディスクから削除して容量を取り戻すコマンドラインツール。構成プロファイルで Siri、Writing Tools、Genmoji などを無効にし、モデルの再ダウンロードも防ぐ。変更は元に戻せる。

### Key Discussion Points

- **ryandrake**: Windows のインストール後に必要な不要ソフト削除と同じ状況が macOS にも来たと指摘。
  - **2muchcoffeeman**: Windows の試用版ソフトとは違い、これは正規の機能で、好まない人がいるだけだと反論。
  - **drooopy**: 「Black Edition」の macOS が欲しい。まともな OS が瓦礫の下に埋もれているという。
- **Grombobulous**: Mac は手放して Linux に移行した。iOS でもシンプルなトグルで AI を無効にできなくなり不満で、Microsoft や Firefox はグローバルな AI スイッチに動いているのに Apple は逆だと述べた。
  - **nrvn**: iOS/iPadOS では Siri をオフにし、端末と異なる言語に設定するとモデルが削除されると助言。
- **hypfer**: O&O ShutUp10 のようなツールが macOS に必要になるとは、Apple の製品戦略はどうなっているのかと疑問を呈した。
  - **jojobas**: Apple が Microsoft と違う戦略を取ると期待する理由はないと返した。
- **mung**: 問題は AI ではなく、Apple 製品の SSD が小さすぎることだとの見方。
  - **otterley**: 現在の MacBook Pro は 1TB から始まるので、どのモデルの話なのか疑問を呈した。
- **zamalek**: macOS にも debloat スクリプトが登場したことを皮肉った。

## 3. [Improper redaction reveals Google Data Center water and electricity usage](https://www.1011now.com/2026/09/30/more-questions-than-answers-about-lincolns-google-data-center-water-electricity-usage/)

**Score:** 316 | **Comments:** 431 | [Post](https://news.ycombinator.com/item?id=49957068)

ネブラスカ州の報告書で墨消しが不適切だったため、リンカーンの Google データセンター（Agate LLC）が年間 52.65MW の電力と約1,330万ガロンの水（五輪プール約20個分）を使っていることが判明した。報告対象の6データセンター全体では昨年7億6,500万ガロンを消費し、Google の州内3施設は2025年以降に1億1,700万ドル超の税還付を見込む。

### Key Discussion Points

- **aliasxneo**: 元 Google データセンター勤務で、地元住民の根拠のない非難を否定できなかった経験を語った。
  - **BearOso**: 古いデータセンターは保存・配信が中心で消費電力が小さかったが、現在は事情が違うと指摘。
  - **thayne**: 最大の問題は、データセンター向けに新設される天然ガス発電所による温室効果ガスと大気汚染だと述べた。
- **yeag123**: 1,330万ガロンは約40.8エーカーフィートで、ネブラスカの平均的な農場の年間水使用量の約30分の1にすぎないと比較。
  - **goda90**: データセンターはほぼ全量が蒸発するが、農場は一部が地下に浸透するため、公平な比較には蒸発・浸透・流出の区別が要ると指摘。
- **tptacek**: 実質的に意味のある水量ではなく、数字を現実的な尺度で示した記事を評価。
  - **mrb**: 年間1,330万ガロンは浴槽の蛇口約5個を常時流しっぱなしにした量に相当。
  - **maccard**: 人口500万の自国では、漏水だけでその40倍が失われていると述べた。
- **ilyagr**: 記事は水使用の少ない施設に注目しており、500万ガロン超を使う別施設を扱った別記事のほうが良いと紹介。
  - **lowbloodsugar**: 大規模施設でもリンカーン市の10日分の使用量と同程度だと指摘。
- **soltanov**: 墨消しはテストされるべきセキュリティ操作で、コピペや OCR で復元できるなら墨消しになっていないと述べた。

## 4. [Powerless F1 drivers frustrated by Bahrain F1 software glitch](https://www.motorsport.com/f1/news/horrible-totally-unacceptable-powerless-f1-drivers-frustrated-by-bahrain-f1-software-glitch/10861968/)

**Score:** 146 | **Comments:** 79 | [Post](https://news.ycombinator.com/item?id=49959869)

フォーメーションラップ中に、パワーユニットコントローラーのウェットウェザーモードが低速時に誤動作し、複数の F1 カーが加速できなくなった。FIA が修正を配備するまでレースは約50分遅れた。ドライバーは強く批判し、ノリスは「horrible」、ペレスは「totally unacceptable」と述べ、2026年規則の電子制御の多さが問題視された。

### Key Discussion Points

- **jey**: 重要部品の更新を現場で短時間にコード化・配備できたことに驚き、本来は十分な QA と根本原因分析が必要ではないかと指摘した。
- **jrflo**: このファームウェアは全車共通なのか、サーバー経由なのかなど、記事に技術的詳細が乏しいと疑問を呈した。
- **MBCook**: レースを観戦した立場から、スタートはシーズン序盤のトラブル続きを思い出させる展開だったと述べた。
- **unglaublich**: ノリスの「ハイブリッド廃止論」に対し、ガソリン事故の被害も同じ理屈でガソリン廃止の根拠になるのかと皮肉った。
- **algoth1**: 「50分でパッチを vibe coding した」と読めてしまうと冗談を飛ばした。

## 5. [A browser-native classic Visual Basic VB6 IDE](https://wieslawsoltes.github.io/VB6/)

**Score:** 142 | **Comments:** 50 | [Post](https://news.ycombinator.com/item?id=49956681)

ブラウザ上で動作する、クラシック Visual Basic（VB6）風の IDE。ページ本文は取得できなかったため、タイトルとコメントからの要約で、フォームのビジュアル編集を備えた再現度の高い実装とみられる。

### Key Discussion Points

- **vjvjvjvjghv**: 本物に近い感触だと評価し、データベース直結の言語を備えた同種の簡易 UI エディタが Web にもあるか質問。
- **sijmen**: 数学の宿題を VB で自動化したのがプログラミングを始めたきっかけだったと懐かしんだ。
- **Narishma**: ブラウザ上で古いネイティブアプリを再現したものは、テキスト描画が必ずうまくいかないと指摘。
- **Dwedit**: VB5 は F1 でカーソル下の項目のヘルプが即座に出たが、VB6 は遅い MSDN ヘルプに変わったと回想。
- **JodieBenitez**: 思い出がよみがえったとコメント。

## 6. [Nearly 200 People Under Observation After Irkutsk Lab Worker Dies from Plague](https://www.themoscowtimes.com/2026/10/02/nearly-200-people-under-observation-after-irkutsk-lab-worker-dies-from-plague-a93857)

**Score:** 135 | **Comments:** 89 | [Post](https://news.ycombinator.com/item?id=49960084)

イルクーツクの抗ペスト研究所で、20代後半の研究員が生きた細菌入りの試験管を誤って割った後にペストで死亡した。接触者は200人近くが医学的観察下に置かれ、100人超が入院したが、金曜時点で症状や陽性反応は報告されていない。肺ペストが疑われ、隔離措置と刑事捜査が始まっている。

### Key Discussion Points

- **robmusial**: 直前に読んだ『Biological War: A Scenario』が、シベリアの研究所から改変肺ペストが漏れる筋書きだったため、タイミングの一致に驚いたと述べた。
- **helsinkiandrew**: 試験管を割った後に発症して入院するまでに多数へ感染した可能性があり、安全プロトコルを調査すべきだと指摘。
- **r721**: 10月4日付の CNN の続報（研究所の研究者が「原因不明」の感染で死亡）を紹介した。
- **chvid**: 漫画のようで信じがたい話だと感想を述べた。
- **abnry**: こうした事故はどのくらいの頻度で起きるのか、報道されないだけで実際は多いのではないかと問うた。

## 7. [Infidel goes wild](https://blog.zarfhome.com/2026/10/infidel-goes-wild)

**Score:** 104 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=49943637)

Andrew Plotkin が、Infocom の名作 *Infidel* に潜むメモリ破壊バグを解説。ZIL コンパイラがグローバル変数をデフォルト引数値として扱えず、`DESERT-TO-TABLE` ルーチンが意図しないアドレスにオブジェクトデータを書き込む「wild pointer」バグになっていた。砂漠で複数のアイテムを落とすとインタプリタが落ちうるが、その場面が十分テストされず数十年気づかれなかった。

### Key Discussion Points

- **gertlex**: Digital Antiquarian のコンピュータゲーム史シリーズを読み進めており、エミュレータで試せるゲームへのリンクが多いと紹介。
- **kwertyoowiyop**: メモリ破壊バグを出さなかった1980年代のゲームプログラマーは誰もいないだろうと冗談を述べた。
- **Waterluvian**: 記事中の「C プログラマーとして、メモリ破壊は最悪の罪だと見なす義務がある」という一文を引いて茶化した。
- **jdw64**: こうした個人の経験に基づく技術的に面白い記事を書きたいが、書き方がわからないと述べた。
- **ironqcold**: 興味深い記事だったと感想を述べた。

## 8. [The Tao of Backup](http://www.taobackup.com/index.html)

**Score:** 81 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=49932236)

Ross Williams によるバックアップの心得を、師と弟子の問答形式でまとめた1990年代風の古いサイト。「バックアップの7つの頭」（範囲、頻度、分離、履歴、テスト、セキュリティ、完全性）を極めればデータを永遠に保てると説く。WebFetch では取得できず、curl で得たメタ情報とコメントに基づく要約。

### Key Discussion Points

- **ahazred8ta**: 個人向けの包括的なバックアップ＋セキュリティ計画として Triplesec を紹介。
- **divbzero**: 師が `sudo rm -rf /` を実行する「Zen of Backup」という類似の小話と混同しないよう冗談を飛ばした。
- **happyrock**: 古き良き World Wide Web が恋しいとコメント。
- **xnx**: テキスト中心でシンプルな点は良いが、1997年当時でも複数ページ構成は読みにくかっただろうと指摘。
- **cavoirom**: 全ステップを読んだがまだ悟りは得られていないと述べた。

## 9. [In the wake of closure, a digital archive of animated materials appears online](https://filmstories.co.uk/news/tippett-studios-in-the-wake-of-its-closure-a-digital-archive-of-animated-materials-appears-online/)

**Score:** 79 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=49957812)

Phil Tippett 創設のアニメーションスタジオ Tippett Studios が2026年8月に閉鎖した。匿名のコレクターがオークションで入手したアーカイブディスク群を Internet Archive に公開し、重複を除く90枚分が無料で閲覧できる。『スター・ウォーズ』『ロボコップ』『スターシップ・トゥルーパーズ』などのメイキング映像やテスト素材を含む。

### Key Discussion Points

- **drewbeck**: タイトルに Tippett Studios か Phil の名前を入れるべきだと指摘。
- **vincengomes**: Internet Archive の直接リンクを共有した。
- **Barbing**: 匿名の人物がオークションで見つけた CD バインダーから90GB の内容を救った点を称賛した。
- **justnoice**: 多くの素材が公開されないまま消えていく中で、救出に感謝を述べた。
- **stavros**: Textfiles の雰囲気があるとして、discmaster.textfiles.com の検索結果を紹介。

## 10. [A 40ms Go garbage collector pause caused by swap](https://frn.sh/go-gc/)

**Score:** 27 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=49959654)

本番環境でスワップを使うと、GC のメタデータがスワップに追い出され、Go の GC に約40ms の stop-the-world 停止が起きた。この40ms のうち39ms は228回のページフォルトの処理で、メモリ確保も通常の3〜5ms から903ms に悪化した。スワップ自体が悪いのではなく、GC 負荷との組み合わせが問題だと分析している。

### Key Discussion Points

- **soltanov**: GC のレイテンシ SLO には OS のメモリ圧迫も含めるべきで、さもないとページフォルトの問題を GC の問題と誤認して間違った対策になると指摘。
- **pizlonator**: なぜ Go は STW のない on-the-fly GC を使わないのかと質問。
- **truth_seeker**: 著者が最新の Go と Linux カーネルを使わない理由を尋ねた。
- **octoberfranklin**: 「ランタイムなし」の大きな利点を示す事例だと述べた。

## Trends

- **ローカル／オンデバイス AI をめぐる攻防**: 一般的な GPU で巨大モデルを動かす Strata に注目が集まる一方、macOS の Apple Intelligence を削除するツールも上位に入り、AI の「自分で動かす」と「押し付けられない」への関心が並んだ。
- **インフラの資源消費と透明性**: Google データセンターの水・電力使用量が不適切な墨消しで露出し、数字の意味づけを巡って議論が長くなった（コメント431件）。
- **ソフトウェア不具合の影響**: F1 のパワーユニット制御、Infidel のメモリ破壊、Go GC と swap の相互作用など、低レイヤーの不具合や環境依存の問題が目立った。
- **保存とレトロ**: Tippett Studios のアーカイブ公開、VB6 のブラウザ再現、Tao of Backup、Infidel など、過去の資産を守り再訪する話題も多い。
