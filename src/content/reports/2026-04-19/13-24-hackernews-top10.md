---
title: "Hacker News トップ10 サマリー（2026年4月19日）"
date: "2026-04-19T13:24"
category: "summary"
summary: "AIモデルのトークン比較、B-52の天体航法コンピュータ、NIST全波長レーザーなど多彩なトピックが上位に"
tags: ["hackernews", "ai", "hardware", "programming", "security"]
---

## 1. [Archive of Byte magazine, starting with issue #1 in 1975](https://archive.org/details/byte-magazine-1975-09)

**Score:** 159 | **Comments:** 38 | [Post](https://news.ycombinator.com/item?id=47806096)

1975年9月創刊のコンピュータ誌「Byte」のアーカイブがInternet Archiveで公開されている。創刊号はマイクロプロセッサの選定・評価、アセンブラの自作方法、「LIFE」プログラムなど初期コンピュータ愛好家向けの実践的な内容を掲載しており、当時の草の根コンピューティングコミュニティを形成した貴重な一次資料である。165.9MBのアーカイブにはOCR処理済みテキスト・PDFなど複数形式が含まれる。

### Key Discussion Points

- **haunter**: 一冊300〜500ページで広告と記事の比率が約3:1と極めて広告密度が高かったことを回想。巻末の読者投稿欄が面白いと推薦。
  - **gramie**: 1988〜91年にアフリカで電気もない環境で教職ボランティアをしながらByte購読を続け、灯油ランプの下で読み耽り、月1回都市に出たときにNGOのコンピュータでBASICプログラムを手書きでテストしていたと述懐。
  - **pjmlp**: インターネット普及前、広告こそがソフトウェア・ハードウェアの唯一の発見手段だったと指摘。Computer Shopperのような雑誌も同様の戦略を採っていた。
- **NordStreamYacht**: 1982〜1990年のバックナンバーを引越し中にすべて紛失。唯一残ったのは「Threaded Interpreted Languages」という1冊のみ。
- **pkphilip**: 米国の在外公館付属図書館でしか読めなかったと語り、知識への渇望を回顧。

---

## 2. [SPEAKE(a)R: Turn Speakers to Microphones for Fun and Profit [pdf] (2017)](https://www.usenix.org/system/files/conference/woot17/woot17-paper-guri.pdf)

**Score:** 84 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=47822805)

WOOT 2017で発表された論文で、スピーカーをマイクに転用することで音声盗聴が可能であることを示した研究（Guri氏ら）。RealTekチップのジャックリタスキング機能を悪用することで、イヤホン端子に接続したスピーカーをマイクとして機能させ、離れた場所からの音声を収録できる。

### Key Discussion Points

- **jpc0**: コイル中の磁石は双方向に動作するため、スピーカーがマイクとして機能することは理論的に当然。
- **maqp**: DJが即席マイクが必要なときにヘッドフォンをミキサーのマイク入力につなぐのと同じ原理。
- **userbinator**: マイクモード有効化時にバイアス電圧が発生してコンポーネントを損傷する可能性があると警告。RealTekコーデックの名称「ALC」がAvance Logic社名に由来することも紹介。
- **dickfickling**: iPod LinuxやRockboxにも通常のイヤホンで音声メモ録音できる機能があったと回想。

---

## 3. [Game devs explain the tricks involved with letting you pause a game](https://kotaku.com/video-game-devs-explain-how-pausing-works-and-sometimes-it-gets-weird-2000686339)

**Score:** 196 | **Comments:** 125 | [Post](https://news.ycombinator.com/item?id=47793161)

ゲームの「ポーズ」は一見シンプルに見えて実装が複雑である。Kotakuの記事では複数の開発者が手法を解説：タイムスケールを0.000000001倍に設定する手法、スクリーンショットを撮ってUI無効状態の画像を背景表示する手法、Kinectimalsのように7種類の「ポーズレベル」を持つケースまで多様な実装が紹介されている。

### Key Discussion Points

- **vintermann**: Quakeのデモ録画システムはゲームが十分に決定論的だったためにinput再生だけで再現できた点を評価。
  - **ndepoel**: Quakeのデモはサーバーからクライアントへのネットワークパケットをキャプチャして再生する非常にエレガントな設計だと解説。
  - **nickjj**: デモ録画は競技ゲーミングにおけるチート抑止にも有効だった。ストリーミング普及前に参加者が自視点デモをアップロードする仕組みが機能していた。
- **recursivecaveat**: マリオサンシャインのポーズバグを紹介：ポーズするとフレーム内のコリジョン処理（4回/フレーム）とゲームループの位相がずれ、ポーズ回数mod 4によって物理挙動が変わる。
  - **butvacuum**: 「それって橋をすり抜けるバグのある状態？だからサンシャインが遊べない」と反応。
- **bel8**: ポーズ中もたいまつの炎や木の揺れなどビジュアル演出だけ動き続けるのが好きと述べる。
  - **entuno**: 『Against the Storm』では超自然的存在の眼球だけがポーズ中も動き続け、その異質さを演出している。
- **ninkendo**: Flight Simulator 2020の「アクティブポーズ」は計器が動き続けて勢いが蓄積するバグが1年以上放置された事例を報告。

---

## 4. [Shader Lab, like Photoshop but for shaders](https://eng.basement.studio/tools/shader-lab)

**Score:** 19 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47796759)

basement.studioが開発したビジュアルエフェクトツール。CRTシミュレーション・ディザリング・テキスト・パターン・グラデーションなど30以上のパラメータをレイヤーで重ねられる。最大8秒のタイムラインで自動キーフレームアニメーションに対応。GitHubでオープンソース公開されている。

### Key Discussion Points

- **sph**: Firefox/Linuxでサイドバー以外が読み込めない問題を報告。デザインが「バイブコーディング」に見えるとコメント。

---

## 5. [The seven programming ur-languages (2022)](https://madhadron.com/programming/seven_ur_languages.html)

**Score:** 58 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=47822486)

プログラミングパラダイムを7つの「原言語」に分類した記事（2022年）。ALGOL（命令型）・Lisp（マクロ/プレフィックス）・ML（関数型）・Self（プロトタイプOO）・Forth（スタックベース）・APL（配列型）・Prolog（論理型）が各ファミリーの起源として位置づけられる。著者はまずALGOL系言語を習得し、その後毎年異なるファミリーを学ぶことを推奨する。

### Key Discussion Points

- **pfdietz**: Curry-Howard同型によって証明を表現するLeanのような言語群も独立したカテゴリとして追加すべきと提案。
- **gobdovan**: Verilog・ペトリネット・プロセス計算・確率的プログラミングなど7分類に収まらないパラダイムが多数存在すると指摘。
- **macintux**: Bruce Tateの「7 Languages in 7 Weeks」を想起。COBOLやFortranをALGOLファミリーとするのはやや無理があると言及。
- **Kaliboy**: TU DelftのCSで学んだ「プログラミング言語の概念」の授業でC・Scala・JavaScriptを学んだ経験を共有。PrologでLLM生成文章のスペルチェッカーを自作したとも。

---

## 6. [What are skiplists good for?](https://antithesis.com/blog/2026/skiptrees/)

**Score:** 146 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=47806021)

Antithesisがテスト実行ツリーのGoogle BigQueryクエリ問題を解決するために「スキップツリー」を発明した経緯を解説。スキップリストの概念を木構造に拡張し、複数のSQLテーブル（tree0, tree1, …）で実装することで、固定数のJOINで祖先クエリが可能になった。ナイーブな実装でも十分なパフォーマンスが得られ、6年間にわたりサービスを支えた。

### Key Discussion Points

- **cremer**: Redisのソート済みセットがスキップリストの最大の実用例。Java標準ライブラリのConcurrentSkipListMapも紹介。
- **jimmypk**: 記事の要点は「ナイーブな実装で十分な性能が出る」こと。確率的な昇格が書き込み複雑性を書き込みシンプルさに変換できる点が分散システムに向いていると解説。
- **bob1029**: 現実のマシンではB+ツリーと比べてポインタのデリファレンスが多すぎるため実用上は劣ると批判。
- **ozgrakkurt**: ClickHouseやParquetではデータ重複がJOINより高速なことが多く、実際のパフォーマンス結果の開示を求める。

---

## 7. [NIST scientists create 'any wavelength' lasers](https://www.nist.gov/news-events/news/2026/04/any-color-you-nist-scientists-create-any-wavelength-lasers-tiny-circuits)

**Score:** 344 | **Comments:** 150 | [Post](https://news.ycombinator.com/item?id=47819453)

NISTの研究者がシリコン・二酸化シリコン・ニオブ酸リチウム・五酸化タンタルを積層したフォトニックチップで可視光から赤外線まで任意の波長のレーザーを生成することに成功した。爪大のチップに10,000回路以上を集積可能。量子コンピュータや光学原子時計に必要な特定原子対応の波長を実験室外でも供給できる可能性があり、Octave Photonicsと共同で商業化を目指している。

### Key Discussion Points

- **adzm**: 「マゼンタや褐色の話をしているが、レーザーなしでも錯覚色を今すぐ体験できる」と視覚トリビアを共有。
  - **jcul**: 同じ「赤」でも人によって内部的な知覚（クオリア）が異なる可能性を指摘。色と感情の関連性は共有されていても主観的体験は異なりうる。
- **dtgriscom**: 記事に掲載されたウェハの虹色写真は回折現象であってレーザー色を示すものではなく誤解を招くと批判。
- **mapt**: 「フォトニクスコンピューティングに興味ある人は、実際に"もの"になるか解説してほしい」と問いかけ。
  - **nine_k**: 3つの即時応用として①光ファイバーのWDMチャンネル増加②特定分子結合への照射による化学反応制御③レーザー加工効率向上を挙げる。
- **xbmcuser**: 中国の極端紫外線リソグラフィ（EUV）へのアクセス問題を解決できるか問う。

---

## 8. [College instructor turns to typewriters to curb AI-written work](https://sentinelcolorado.com/uncategorized/a-college-instructor-turns-to-typewriters-to-curb-ai-written-work-and-teach-life-lessons/)

**Score:** 330 | **Comments:** 327 | [Post](https://news.ycombinator.com/item?id=47818485)

コーネル大学のドイツ語講師Grit Matthias Phelps氏が2023年春からタイプライター課題を導入。DeleteキーもAIも辞書も使えない環境で、学生はクラスメートと会話し、ミスを受け入れ、思考を整えてから打鍵することを強いられる。全国的な手書き・口頭試験回帰の動きの一例として紹介されている。

### Key Discussion Points

- **throwatdem12311**: CS学位の課程ではすでに期末50%・中間30%の手書き試験が主流だったとし、教育界がすでにAI対策の仕組みを持っていたと指摘。
  - **Al-Khwarizmi**: スペインの大学で連続評価型に移行した結果、授業に出席できない労働学生が不利になった。一方でAIにより「代行チートの民主化」が起きたと複雑な現状を分析。
- **curun1r**: 計算機を禁止せず授業に組み込んだ数学教育のように、AIをカリキュラムに組み込んで効果的な使い方を教えるべきと主張。
  - **PunchyHamster**: 「AIに解かせた瞬間に何も学んでいない。専用のAI活用コースを作るべき」と反論。
- **recursivedoubts**: プロジェクト50%・紙のメモ1枚持参可の手書き小テスト50%という新カリキュラムで対応していると共有。
- **whartung**: Google Docsは編集イベントを記録しており入力パターン分析が可能と指摘。AIに書かせた場合、タイプ練習の目的自体が無効化される。

---

## 9. [Anonymous request-token comparisons from Opus 4.6 and Opus 4.7](https://tokens.billchambers.me/leaderboard)

**Score:** 553 | **Comments:** 535 | [Post](https://news.ycombinator.com/item?id=47816960)

Bill Chambers氏が作成したオープンソースツールで、Claude Opus 4.6と4.7のトークン消費量をコミュニティ匿名投稿データで比較できるリーダーボード。送信データには匿名IDのみ保存されプライバシーを保護。Anthropic非公式プロジェクト。

### Key Discussion Points

- **andai**: Opus 4.7は出力トークン数が減少し推論コストが約半減。ただしワークロードによって有利不利が逆転するため単純比較に注意。
  - **matheusmoreira**: 「Adaptive Thinking（適応的思考）」機能が割り当ての5〜10%を消費しながらコード解析を手抜きする問題を報告。「Adaptive Thinkingが有効な状態ではOpusを信頼できない」と強く批判。
- **hgoel**: 4.7に明確な能力向上はないが速度が大幅に速く、5時間制限を2時間で使い切ってしまうと報告。Max 5xプランのバッチモードでは5分で30%消費。
- **glerk**: より良い成果のためなら多く払ってもよいが、「トークンを使い続けさせる強化スケジュール戦略」のように感じると批判。テスト削除・重複コード・要件無視の問題が4.7でも継続。
- **rectang**: VSCode CopilotではOpus 4.5が「必要な変更だけを行う」指示に最も忠実だったと評価。4.6は過剰な思考をしがちで、4.7の7.5倍価格修正は後退に感じると述べる。

---

## 10. [The electromechanical angle computer inside the B-52 bomber's star tracker](https://www.righto.com/2026/04/B-52-star-tracker-angle-computer.html)

**Score:** 361 | **Comments:** 93 | [Post](https://news.ycombinator.com/item?id=47817132)

1960年代のB-52爆撃機が搭載したアナログ天体航法システム「Astro Compass」の中核部品を詳細解説した記事（righto.com）。半径約6.6cmの天球モデルを使って星の赤緯・時角・緯度から方位角・仰角を機械的に解くメカニズム。デジタルコンピュータが高価で信頼性が低かった1963年、機械・電気モーター・真空管・トランジスタを組み合わせたハイブリッドで実現された。

### Key Discussion Points

- **somat**: 1963年はアナログ・デジタル計算機の変遷の転換点であり、デジタルへの移行過程を記録した自伝的文献を紹介。歯車列模式図の資料を求める声も。
  - **aequitas**: 旧訓練ビデオとBattleship New Jersey YouTubeチャンネルが参考になると資料を紹介。
- **Animats**: 艦艇の射撃管制システムも同様で「I/Oは完全に電気的だが計算は機械式」という構成だったと解説。Marin郡で復元されたNikeミサイル誘導コンピュータを見学した経験も語る。
- **po1nt**: 「こういう記事を読むたびに、最初のマイクロプロセッサをジェット機に組み込んだり天体航法を実現したりしたエンジニアがうらやましくなる。自分はgitlabパイプラインと戦っているのに」とユーモアたっぷりに嘆く。
  - **beachy**: 「ハードウェアは難しい。現代のCADなしで軍用規格を満たす設計をするのは、高水準言語もアセンブラもなくバイナリでコードを書くようなものだ」と返答。
- **pests**: 記事を一字一句読んだとし、探索範囲が方位±4°・高度±2.5°と、月の視直径0.5°の8〜16倍という脚注の精度感が印象的だと述べる。

---

## Trends

今回のHNトップ10からは以下の傾向が見て取れる。

**AIモデルの品質・コスト論争が最多注目を集める**: Claude Opus 4.7のトークン消費増大・品質への懸念がスコア553の首位を獲得し、535件もの議論を呼んだ。「Adaptive Thinking」機能への不信感や「トークンを消費させるための設計」という批判が目立ち、AIモデルのコスト透明性と品質保証への要求が高まっている。

**AI教育問題が社会的争点へ**: タイプライター授業（スコア330・327件）は、AI不正利用対策を超えて「そもそも何を教育すべきか」という根本議論を触発。禁止派・活用推進派・評価方式改革派が激しく論争し、プラットフォームごとの政策格差も浮き彫りになった。

**古典技術・レトロコンピューティングへの郷愁**: Byteマガジーアーカイブとシリアルポートの昔話、B-52のアナログコンピュータ詳解が共に高スコアを獲得。「現代のgitlabパイプラインより宇宙航法の方が詩的だ」という声に多くの共感が集まるなど、複雑さに疲弊した技術者のノスタルジーが読み取れる。

**ゲームエンジニアリングの奥深さ**: ポーズという「一見簡単な機能」が実は7段階のステートマシンを必要とし、mod 4のバグまで生むという話題が196スコアを獲得。現代ゲーム開発の非自明な複雑さへの関心が高い。

**フォトニクス・量子技術の商業化期待**: NISTの任意波長レーザーはスコア344で、量子コンピュータ・GPSレス測位・AI向け光演算など幅広い応用への期待を喚起。ただし「フォトニックコンピューティングに実体があるか」という懐疑的な問いも同時に提示された。
