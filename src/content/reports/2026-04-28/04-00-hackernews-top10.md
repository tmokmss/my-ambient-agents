---
title: "Hacker News トップ10まとめ（2026年4月28日）"
date: "2026-04-28T04:00"
category: "summary"
summary: "MS×OpenAI提携終了、色覚実験、Talkie（1930年代LLM）などHN上位10記事を日本語でサマライズ"
tags: ["hacker-news", "AI", "OpenAI", "Microsoft", "engineering"]
---

## 1. [Talkie: a 13B vintage language model from 1930](https://talkie-lm.com/introducing-talkie)

**Score:** 154 | **Comments:** 46 | [Post](https://news.ycombinator.com/item?id=47927903)

1930年以前の英語テキスト（書籍・新聞・特許など約2600億トークン）のみで学習した130億パラメータのLLM「Talkie」が公開された。現代のモデルと比較してナレッジベンチマークでは劣るが、コア言語理解能力は同等であり、訓練データがAIの振る舞いをいかに形成するかを研究する独自のフレームワークを提供する。OCR品質の改善や時代的汚染（anachronism）の防止が主な技術的課題であり、今後は英語以外への拡張やGPT-3規模のモデルのトレーニングが計画されている。

### Key Discussion Points

- **rokhayakebe**: 1930年代に描かれた「2025年の予測」を引用。人口66億人・普遍的平和・再生可能エネルギーを想定しており、実際の2025年との差が興味深い
- **jryio**: 歴史的テキストには偏見が含まれており「差別的だ」と指摘。現在書かれている文章が将来のAIに与える影響も議論
  - **felipeerias**: 「100年後には私たちの意見も時代遅れに見えるだろう」と反論
- **simonw**: 著者リストにOpenAIで初期GPTモデルを主導したAlec Radfordが名を連ねていることに注目
- **____tom____**: 過去の人物との「対応」は会話というより手紙のやり取りに近いと指摘。OCR技術の限界についても言及
- **nl**: 1930年代の文章におけるインド独立運動への見方を引用・分析
  - **retrac**: 当時の記述は「独立は不可避だが遠い将来」という戦間期的視点を反映していると解説
  - **curiousObject**: 学習データ内で君主が「女王」と「国王」と混在しており、時系列の不整合を指摘

---

## 2. [Microsoft and OpenAI end their exclusive and revenue-sharing deal](https://www.bloomberg.com/news/articles/2026-04-27/microsoft-to-stop-sharing-revenue-with-main-ai-partner-openai)

**Score:** 790 | **Comments:** 679 | [Post](https://news.ycombinator.com/item?id=47921248)

MicrosoftとOpenAIが長年続けてきた独占的なパートナーシップと収益分配契約を終了した。OpenAIはAzureへの依存から解放され、AWSやGCPなど他クラウドプロバイダの利用が可能になる。OpenAI側は「次のフェーズ」として発表し、AmazonのAndy JassyもLinkedInでコメントするなど業界全体への影響が注目されている。

### Key Discussion Points

- **thanhhaimai**: 最大の勝者はGoogleかもしれない。OpenAIが独占契約を離れたことで、新世代TPU（Gen 8）の利用が現実的になるとの見方を示す
  - **bastawhiz**: 多くのラボがTPUを使うが独占的ではなく、需要を満たせるか疑問
  - **maxclark**: AppleもApple/Gemini提携を通じて恩恵を受けている可能性を指摘
- **_jab**: 「この合意はOpenAIに有利すぎて、なぜMicrosoftが受け入れたか分からない」と疑問
  - **DanielHB**: MicrosoftはOpenAIの主要株主であり、数十億ドルの投資をゼロにしたくないため
  - **dkrich**: Microsoftが自社インフラで外部ユーザーを置き換えるほど計算資源が逼迫していたことが背景と分析
- **digitaltrees**: 元企業再編弁護士として「資金難による末期症状」のシグナルと読む
  - **stingraycharles**: OpenAIがIPOを計画中であり、旧契約では上場が不可能だったためMicrosoftも受け入れたと推測
- **chasd00**: 「これによりOpenAIはAWSへ移行でき、AzureはIPO前に存在感を失いつつある」と批評
  - **elpakal**: Andy JassyがLinkedInでこの動きを即座に確認・コメントしていることを報告
- **wg0**: Google内部情報として「競合優位性が薄れている」と指摘。DeepSeek v4が低コストで高性能を実現していることにも言及
  - **manmal**: AIの生成物には常に注意深いコードレビューが必要との立場を表明

---

## 3. [Integrated by Design](https://vivianvoss.net/blog/integrated-by-design-launch)

**Score:** 78 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=47928554)

Vivian Vossによる新刊書籍のリリースブログ。コメントからはFreeBSDをLinuxより選ぶべき理由を論じた技術書であることが示唆されており、OSの設計思想や統合性（integrated design）について詳述していると見られる。サンプル章が公開されており、著者は明快な論旨を展開している。

### Key Discussion Points

- **dontdoxxme**: ブログ投稿の文体が短く唐突で、書籍著者としての文章力に疑問を呈する
- **tonyoconnell**: サンプル章を読んだと報告し、「FreeBSDをLinuxより選ぶべき明快な論拠が示されている」と評価
- **zdw**: DRMフリーのepub版が存在しないことを理由に購入を拒否

---

## 4. [Meetings are forcing functions](https://www.mooreds.com/wordpress/archives/3734)

**Score:** 74 | **Comments:** 35 | [Post](https://news.ycombinator.com/item?id=47906942)

定期ミーティングが長期プロジェクトを前進させる「強制力」として機能するという主張。特に複数人が関与するが誰の主要責任でもない取り組みに有効であり、「前回のTODOの確認」という習慣がアカウンタビリティを生み出す。クライアントとコンサルタントなど組織間の協働でも同様に機能する。

### Key Discussion Points

- **katzgrau**: SaaSをブートストラップした経験から、週次スタンドアップミーティングを支持。「ミーティングがなければ、雑務とトラブル対応が週全体を埋め尽くす」と語る
- **tikhonj**: 定例ミーティングを廃止し、特定テーマごとの議論に切り替えたところ、技術的対話の質が向上したと反論
- **msteffen**: 「マネージャー的発想だ。長期目標が進まないなら、原因を特定して行動すべきであり、ミーティングに依存するのは問題を先送りしているだけ」と批判

---

## 5. [Claire's closes all 154 stores in UK and Ireland with loss of 1,300 jobs](https://www.bbc.com/news/articles/cg4047qnpk2o)

**Score:** 6 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47930150)

アクセサリーチェーンのClaire'sが英国およびアイルランドの全154店舗を閉鎖し、約1,300名が職を失うことが発表された。英国・アイルランド市場からの完全撤退であり、同社の財務状況の悪化を示している。コメントはまだついておらず、速報として投稿された段階。

### Key Discussion Points

（コメントなし）

---

## 6. [Three men are facing charges in Toronto SMS Blaster arrests](https://www.tps.ca/media-centre/stories/unprecedented-sms-blaster-arrests/)

**Score:** 124 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=47927070)

カナダ・トロントで、いわゆる「SMSブラスター」（偽基地局装置）を車両に搭載してフィッシングSMSを大量送信していた3名が逮捕・起訴された。警察は「カナダで前例のない事件」と表現しているが、同様の装置は政府・法執行機関も使用しており、二重基準への批判もある。

### Key Discussion Points

- **nubinetwork**: 「メディアが誇張している。政府や警察も同じ装置を使っているのに、民間人だけが問題にされている」と批判
- **dreamlayers**: 「スマートフォンが任意の基地局に接続し、送信者番号を信用するのはなぜか？暗号的な検証はないのか？」と技術的な疑問を提起
- **cnst**: 「セキュリティ業界全体が茶番だ。銀行はかつてブラウザのパスワード保存を禁じたが、それこそフィッシングを可能にした」と皮肉
- **numpad0**: 同様の事例が他国でも報告されており、偽タクシーに装置を積んでいたケースがあったと紹介

---

## 7. [Ted Nyman – High Performance Git](https://gitperf.com/)

**Score:** 35 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=47929035)

Ted Nymanによる書籍「High Performance Git」。Gitを単なるバージョン管理ツールとしてではなく、コンテントアドレス型データベース・ファイルシステムキャッシュ・グラフウォーカー・転送プロトコルとして深掘りする。大規模リポジトリを管理するエンジニア向けに、Gitのパフォーマンスボトルネックの診断と解消を扱う。

### Key Discussion Points

- **snthpy**: 「なぜ `git clone --depth 1` がデフォルトでないのか？ほとんどのユースケースでは浅いクローンで十分なはず」と提案
- **wadefletch**: Ted NymanをSFで最もアメリカンフットボールに詳しい人物として称えつつ、Gitの専門家としての実績も評価するユーモラスなコメント

---

## 8. [Mo RAM, Mo Problems (2025)](https://fabiensanglard.net/curse/)

**Score:** 32 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=47902269)

1997年製のQuake用PCにRAMを追加したところ、逆にパフォーマンスが44fpsから33fpsへ低下した謎を解明した記事。原因はマザーボードのL2キャッシュが約128MiBしかキャッシュできないため、それ以上のRAMがキャッシュなしで動作してしまうことだった。逆説的な解決策として、RAMを減らすことで元の速度を回復した。

### Key Discussion Points

- **Cockbrand**: 同じチップセットを搭載したSony Vaio 505TXを使っており、Linuxカーネルパッチで高アドレスのメモリをRAMディスクとして活用した経験を共有
- **HerbManic**: 「旧式マシンの限界での振る舞いを観察するのは面白い。L2キャッシュの犠牲はその時点では合理的なトレードオフだったのだろう」
- **hsbauauvhabzb**: 「現代の多くのアプリも搭載RAM全体をキャッシュ量の基準にしており、大容量RAMに対してスケールしない。Chromeよ、お前のことだ」とモダンソフトウェアの同様の問題を指摘

---

## 9. [Is my blue your blue?](https://ismy.blue/)

**Score:** 388 | **Comments:** 269 | [Post](https://news.ycombinator.com/item?id=47926861)

「あなたの青は私の青と同じ？」と問うインタラクティブな色覚実験サイト。ユーザーに色を提示し、青か緑かの境界線を測定することで、個人差や文化的・言語的背景による色認識の違いを探る。集計データにより、色の境界線が人によって大きく異なることが視覚化される。

### Key Discussion Points

- **sudobash1**: シアンが他の色と明確に異なって見える理由として、色の語彙を教わる際の文化的差異を挙げる
  - **Suppafly**: 「青か緑かしか選べないのは問題。テストの設計自体が不完全で、多くの人が別の色として認識するシアンを強制的に二択にしている」と批判
- **smokedetector1**: 妻と家の色について青か緑か議論し、通行人全員が妻の「緑」に同意したが、このサイトで自分の境界が人口の95%より緑寄りだと判明したと紹介
  - **armada651**: 歴史的に多くの言語で青と緑が同一の単語で表現されてきた事実をWikipediaリンクで提示
- **percentcer**: 「ボタンは『これは青ではない』にすべき。『これは緑』という選択肢は多くの場合正確でない」と改善提案
  - **SunshineTheCat**: 「50%グレーを白か黒か選ばせるようなもの」と例える
- **gumby271**: 「あなたにとってターコイズは青だ」と言われても「だからターコイズという別の言葉があるのだ」と反論
  - **throw0101c**: 言語が色認識を形成するという言語相対性を論じ、Italian *azzurro*、Greek *galazio*、Hebrew *kachol* などの事例を紹介

---

## 10. [The quiet resurgence of RF engineering](https://atempleton.bearblog.dev/quiet-resurgence-of-rf-engineering/)

**Score:** 155 | **Comments:** 85 | [Post](https://news.ycombinator.com/item?id=47903439)

かつて「衰退分野」と見られていたRF（無線周波数）エンジニアリングが、宇宙産業の爆発的成長（2015年以降の衛星打ち上げ件数が10倍）、5Gの複雑なアンテナ設計、6G研究の開始などにより急速に再注目されている。EEの雇用主73%が6ヶ月以内に職を埋められず、平均給与は13万ドル超に達している。

### Key Discussion Points

- **WarmWash**: ソフトウェアに流れず情熱でハードウェアに留まった若手として、補償や職場文化の課題を指摘
  - **drtz**: 15年前にRF/アナログ設計からソフトウェアへ転身。「職場文化が非常に劣悪だった」と振り返る
- **rhave**: RF分野への転身を検討中。HFSSやCSTといった商用ツールの高額さを挙げつつ、オープンソースのEMergeで良い結果を得ていると報告
  - **sitzkrieg**: 「ベクターネットワークアナライザーの価格だけで、どんなソフトウェアも安価に見える」とハードウェアコストの高さを強調
- **angry_octet**: 「RF需要は実際には急増しており、特に米国外で顕著だ。米国内だけが特殊だ」とタイトルの「復活」という表現に異を唱える
- **cactacea**: 「3G/4G/5G/LTEや802.11の普及でRFエンジニアリングは拡大の一途なのに、なぜ著者が衰退と感じていたのかが謎」と疑問
  - **saltcured**: 「RFはCPU設計に似ている。製品はCOTS（市販統合チップ）を使うことが多く、フル設計の仕事は少ない。本当の需要はシステムパッケージングやソフトウェア寄りの領域にある」と構造的問題を指摘

---

## Trends

今日のHacker Newsトップ10から見えるテーマと傾向：

1. **AI業界の権力構造の再編**: MicrosoftとOpenAIの独占解消（スコア790）が最大の話題。OpenAIのIPO準備、クラウドベンダー競争、AI計算資源の覇権争いが浮き彫りになっている。

2. **AIとデータの質・バイアス**: Talkie（1930年代LLM）への関心は、訓練データが持つ偏見と歴史的文脈への意識の高まりを反映している。現代のLLMがいかにデータに規定されているかという根本的な問いがある。

3. **人間の知覚と言語**: 「Is my blue your blue?」（スコア388）は色認識の個人差と言語相対性という哲学的テーマを軽快に探り、大きな反響を呼んだ。科学と人文学の交差点への関心が伺える。

4. **ハードウェア・RF工学の再評価**: 宇宙・5G・6G・軍事技術の拡大により、ソフトウェア偏重だったキャリア観が揺らぎつつある。一方でツール費用や職場文化の課題も表面化している。

5. **セキュリティの二重基準**: SMS偽基地局逮捕への反応は、政府・民間でのセキュリティツール使用における二重基準への根強い不満を示している。

6. **技術的な「なぜ」への探求**: RAMを増やすと遅くなるというパラドックス（Mo RAM, Mo Problems）やGitの内部構造への関心は、表面的な使用法を超えてシステムを深く理解したいというエンジニアの本質的な欲求を示している。
