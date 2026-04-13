---
title: "Hacker News トップ10ストーリー（2026年4月13日）"
date: "2026-04-13T03:50"
category: "summary"
summary: "HN本日のトップ10：UIイディオム論争、自家製コーラ、macOSタスクバー代替、ジャグリング指南など"
tags: ["hackernews", "daily", "tech", "programming", "macos", "math"]
---

## 1. [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852)

**Score:** 38 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=47746610)

単一の二項演算子 `eml(x,y) = exp(x) - ln(y)` だけからすべての初等関数を導出できることを示した論文。著者は網羅的探索によってこの演算子を発見し、`S -> 1 | eml(S,S)` という単純な文法の木構造でπやeなどの定数、算術・超越関数がすべて表現できることを証明した。記号回帰への応用として、勾配最適化で数値データから正確な閉形式関数を自動復元できることも実演している。

### Key Discussion Points

- **jekude**: EMLゲートを物理的に実装するとどうなるか？こういう投稿があるからHNを毎日チェックしている
- **hyperhello**: expとlnは組み合わせで互いに逆演算になる。なんと素晴らしい発見だ
- **tripdout**: 面白いが、EMLゲートの組み合わせは他のプリミティブより本当に複雑さが低いのか？
- **peterlk**: RubyラムダからYコンビネータを導出するトーク（SICP系）を連想する
- **nonfamous**: 高度に最適化されたEMLハードウェア実装は、従来の数値コプロセッサとどう比較されるか？

---

## 2. [Taking on CUDA with ROCm: 'One Step After Another'](https://www.eetimes.com/taking-on-cuda-with-rocm-one-step-after-another/)

**Score:** 87 | **Comments:** 69 | [Post](https://news.ycombinator.com/item?id=47745284)

AMDのROCmがNVIDIAのCUDAエコシステムに挑む取り組みと課題を論じたEE Times記事。ROCmチームが「一歩ずつ」着実に進歩している姿勢を評価しつつ、ドライバの安定性やGPUサポート範囲などソフトウェア品質への懸念が議論の中心となった。内部からは官僚主義を脱したチームが成果を上げているという証言も投稿された（後に削除）。

### Key Discussion Points

- **lrvick**: ROCmをmusl/mimalloc toolchainでビルドするためTheRockをstagexに移植中。30以上の依存関係と格闘したが今朝ランタイムのビルドに成功。高セキュリティワークロードにAMDが有望だ
- **0xbadcafebee**: AMDは自社GPUの全モデルをサポートできておらず、サポートされていても不安定。Linuxの AMDGPUドライバは6.6以降ずっと不安定
- **rdevilla**: RX 580など一般的な消費者向けGPUがROCmで非サポート。Vulkanバックエンドなら問題なく動く
- **bruce343434**: CUDAもROCmもセットアップが面倒すぎる（CUDAは11GB！）。Vulkanを使えばよい
- **p1esk**: AMDの社員が「官僚主義を免除されたチームが成果を出している」という投稿をして数分後に削除。それがAMDに入りたくない理由だ

---

## 3. [Show HN: boringBar – a taskbar-style dock replacement for macOS](https://boringbar.app/)

**Score:** 268 | **Comments:** 162 | [Post](https://news.ycombinator.com/item?id=47742200)

FedoraのGNOMEからMacBook Airに移行したユーザーが自作したmacOS用タスクバー型Dock代替アプリ。アクティブなSpaceのウィンドウだけを表示し、スクロールでSpace切り替えやサムネイルプレビューも可能。当初はサブスクリプション制だったが、コミュニティの率直なフィードバックを受けて個人向けに永続ライセンス（2デバイス$40、2年間アップデート付き）へ変更した。

### Key Discussion Points

- **sonofhans**: ペインポイントは共感できるが、サブスクリプション価格がネック。20年以上使い続けているMacアプリを持っており、長期サポートへの不安がある
  - **a-ve**: フィードバックを受けて個人向けを$40の永続ライセンスに変更した。ビジネス向けは年間サブスクを維持
  - **a-ve**: 基本プランは月$0.85程度。macOSアップデートで都度破壊される現実を踏まえると、継続メンテの透明性を示す意味でサブスクが誠実なモデルと考えていた
- **SyneRyder**: 見た目はmacらしくて好感。ただサブスクは完全NG。JetBrainsモデル（年払い後に当時バージョンのライセンス付与）が理想
  - **vunderba**: 同意。年払いオプション+フォールバックライセンスのJetBrainsモデルを推奨
  - **BoorishBears**: $10/年は妥当だと思う。このコメントを過大評価しないでほしい
- **fii**: サブスクは的外れ。Alfred/Raycast+Aerospace+sketchybarで無料で同等機能が実現できる
- **a-ve（OP）**: 値付けコメントは公平だった。永続ライセンスへの変更を発表

---

## 4. [Bring Back Idiomatic Design (2023)](https://essays.johnloeber.com/p/4-bring-back-idiomatic-design)

**Score:** 491 | **Comments:** 251 | [Post](https://news.ycombinator.com/item?id=47738827)

John LoebがWindows 95〜7時代に存在した統一UIイディオム（File/Edit/Viewメニュー、一貫したキーボードショートカット）の復活を訴えたエッセイ。現代のWebアプリは個々には優れているが相互に非互換で、日付入力やクレジットカード入力などが実装ごとに全く異なる。モバイルからデスクトップへの設計移行とReact等のフレームワークがHTMLの標準イディオムを駆逐したことが断片化の原因と指摘し、開発者に一貫性を優先するよう促している。

### Key Discussion Points

- **uhoh-itsmaciek**: Enterキーの挙動（SlackとGitHubで逆）は典型的な不一致。「イディオムを取り戻せ」と言っても、まずイディオム自体を合意することが必要だ
  - **layer8**: 昔はReturnキーとEnterキーが別物だった。GUIの伝統ではマルチライン入力でのEnterは改行であり、送信はCtrl+Enter
  - **AgentEpsilon**: Teamsは通常Enter送信だが、書式設定ツールを開くと切り替わる。一応通知はあるが混乱する
- **JojoFatsani**: 現代のソフトウェアはもはや思慮深い人間が設計していない。急造されたPMと収益優先のダークパターン奨励が問題だ
  - **bfbf**: モバイルエンジニアとして、ステークホルダーが「なぜシャワーで思いついたアイデアをそのまま実装できないのか」と白い目で見る。一貫したUXとIAの重要性は軽視されている
  - **cosmic_cheese**: 2010年代に旧来のUXデザイナーが印刷媒体出身者や技術理解のないジェネラリストに入れ替えられたのも一因
- **iamcalledrob**: イディオムはシステムフレームワークを使うことで自然に誘導される。フレームワークこそが鍵だ
  - **hn_throwaway_99**: デスクトップ時代の統一性はWindows一強だったから。開発者に選択肢がなかっただけで、本質的に一企業が単一フレームワークを提供していたから生まれた
- **teeray**: クリック操作を強制する日付ピッカーへの批判。日付を直接タイプさせてほしい
  - **el_benhameen**: 「誕生日まで40年分の月をクリックしてさかのぼる作業は、人生の有限性を考える良い機会を与えてくれる」（ユーモア）
- **pkphilip**: 特に銀行サイトのUXが劣化。スクロールバー非表示、余白過多、フラットなボタン、わかりにくいアイコン
  - **hermitcrab**: スクロールバーを隠すのは本当に不快。見た目を良くするためだけなら最悪の設計判断だ

---

## 5. [Optimization of 32-bit Unsigned Division by Constants on 64-bit Targets](https://arxiv.org/abs/2604.07902)

**Score:** 22 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47737542)

64ビットターゲット上で32ビット符号なし整数の定数除算（例：x/7）を最適化する新手法の論文。GCC・ClangなどのメジャーコンパイラーがGranlund-Montgomery法を用いているが、64ビットのフル性能を活用できていない点を突き、Intel Xeon w9-3495Xで**1.67倍**、Apple M4で**1.98倍**の速度向上を達成した。LLVMパッチはすでにメインブランチへマージ済みで実用化されている。

### Key Discussion Points

コメントなし（0 descendants）

---

## 6. [DIY Soft Drinks](https://blinry.org/diy-soft-drinks/)

**Score:** 293 | **Comments:** 78 | [Post](https://news.ycombinator.com/item?id=47741701)

著者blinryが2020年から続けている自家製コーラ・ソフトドリンク作りの記録。オレンジ・ライム・レモン・ナツメグ・シナモン・コリアンダー・ラベンダーの精油をガムアラビックで乳化し、カラメル色素とクエン酸で仕上げたゼロシュガー・ノンカフェインコーラシロップを120ml製造する工程を詳述。「甘さはちょうど良く、オイルブレンドがコーラらしい」と評価しており、今後はオレンジやチェリー風味にも挑戦予定。

### Key Discussion Points

- **mattmaroon**: 事前水和済みのガムアラビックを使うと格段に楽になる。水溶性フレーバー濃縮液を使えば乳化工程ごとスキップできる（プロが透明なスプライト系で実際にやっている方法）
  - **detritus**: こういう投稿があるからHNのコメントを先に読む。欧州の大きな貿易圏に属していれば簡単に材料を仕入れられるが…
  - **atentaten**: 商業的なボトリングライセンスを取得したのはなぜですか？
- **peaxkl**: 自家製Club Mateを作り始めた。水出しで冷抽出すると苦みが出ず美味しい。5本分のレシピ（mate葉60g、砂糖65g、レモン1個、炭酸水）を共有
  - **plomme**: 自家製Club Mateとは！　私の大好きなソーダです。今のところ市販の糖質ゼロ版もありますが、自家製の方がクールです
- **foresto**: 安価に炭酸水を作る方法：ボールロックバルブキャップ（$8〜16）でペットボトルをCO2ボンベに繋ぐ。50psiで市販品と同等、70psiで強炭酸を実現
  - **dlcarrier**: カウンタートップ炭酸器のCO2シリンダーを20lbのCO2タンクから補充するアダプターを使う方が安くて便利
- **tareqak**: 質量分析計でコカ・コーラのフレーバーを同定したYouTube動画を紹介
  - **s0rce**: GCMSは素晴らしい機器。職場にも良いのがあるが、さすがにコーラの解析には使っていない
- **jackdawed**: Bakto Flavors（NJ）の天然フレーバーがおすすめ。コーラフレーバーは絶品。創業者のHavkin-Frenkel博士は先日他界されたが、彼女の功績に敬意を表したい
  - **Scoundreller**: > acetic acid（Vitamin C）→ ascorbic acid（アスコルビン酸）ですよ！（注：誤記訂正）

---

## 7. [Ask HN: What Are You Working On? (April 2026)](https://news.ycombinator.com/item?id=47741527)

**Score:** 153 | **Comments:** 448 | [Post](https://news.ycombinator.com/item?id=47741527)

HN恒例の「今何を作っていますか？」スレッドの2026年4月版。448件ものコメントが集まり、AIエージェント向けIMシステム、高齢の母親のための転倒検知フォトフレーム、量子コンピューティング解説書、スマホ依存対策デジタルペットアプリ、ルーティントラッカーアプリなど、個人・家族の課題から技術的探求まで幅広いプロジェクトが共有された。

### Key Discussion Points

- **arrsingh**: ファイアウォール越しに異なるマシンのAIエージェント同士がリアルタイムで通信できる「AIエージェント向けIM」を近日ローンチ予定
- **cmos**: 一人暮らしの母親のために「Still Kicking」という動体検知・転倒検知付きフォトフレームを製作。Reactなどをベースにしたフォームファクタで転倒や睡眠の質をスマホアプリに通知
  - **lurkshark**: Healthsense（BestBuyに買収済み）が以前同様のスマートホームセンサーシステムで行動パターンの変化を検知していた。「センサー付き自宅」は、施設入所という最も侵襲的な代替案に比べてプライバシーが保てるというパラドックスが面白い
  - **naikrovek**: 「Still Kicking」という名前が最高だ
- **msolomentsev**: 量子コンピューティングを一般向けに解説するブログ形式の本を執筆中（無料公開予定）
  - **wonger_**: 量子コンピューティングへの疑問（量子物理学は詐欺？特定の暗号しか破れない？誤り率をどう制御する？qubitの作り方は？）を共有しつつ、初心者の視点からのフィードバックを提供
- **DevDesmond**: スマホ依存解消のため、スクリーンタイムが増えると「うつ病」になるデジタルペットアプリを開発。Forest/Focus Friendと違い、アイドルゲームとして常時スクリーンタイムを追跡
  - **varenc**: iOSではスクリーンタイムAPIが公開されていないはずだが、どう実装している？
- **dondii**: ワークアウト、音楽練習、語学学習などを横断的に管理できるルーティントラッカーアプリを開発中。今月中のPlayStoreへの公開を目指している

---

## 8. [Most people can't juggle one ball](https://www.lesswrong.com/posts/jTGbKKGqs5EdyYoRc/most-people-can-t-juggle-one-ball)

**Score:** 281 | **Comments:** 87 | [Post](https://news.ycombinator.com/item?id=47702887)

LessWrongに投稿されたジャグリング習得の実践的ガイド。「正しく投げれば、キャッチは自然についてくる（If you throw the throws, the catches catch themselves）」というコア原則のもと、1ボール→2ボール→3ボールへの体系的な習得ステップを解説。著者は公共の場でよくジャグリングをしており、正しい指導さえあれば誰でもできると主張している。

### Key Discussion Points

- **vunderba**: 熟練ジャグラーとして補足：カスケードなどの基本パターンは手眼協調より一定の投げ方の維持が重要。初心者にはハンカチから始めると落下が遅く学びやすい
  - **nickcw**: 初心者の利き手でない側に自分の手を添えて「代わりに持ってあげる」技法が有効。「ジャグリングできている！」という感覚を早く味わわせられる
  - **empiricus**: 2日で習得できた。ただ物理動作は完璧にはならない（タイピングでも3%エラーが消えない）。これは遺伝的な要因かも
- **jamses**: 3ボールを何度も挫折してきたが、ベッドの上で「落下音のリズム」に集中することで突然スイッチが入り習得できた
  - **kuboble**: 協調性が壊滅的だった友人が、長年の努力で6ボールまで習得した。見た目はヘタそうでも、なぜかボールが落ちない
  - **jfengel**: 4ボールは「両手それぞれで2ボール」に過ぎない。4-out-of-5パターンも存在するが難しくて観客に伝わらない
- **comrade1234**: 中学で習得。数年ブランクがあっても数回の試みで即座に再現できる。神経回路は消えない
  - **nickcw**: 非利き手で2ボールをマスターすれば4ボールまで半分来たも同然
- **sriram_malhar**: Noisebridgeでのジャグリングワークショップ参加記。風船と米粒で作るジャグリングボールと、多発性硬化症にも関わらず指導したPickle Family CircusのJudy Pinelli氏の話

---

## 9. [Apple's accidental moat: How the "AI Loser" may end up winning](https://adlrocha.substack.com/p/adlrocha-how-the-ai-loser-may-end)

**Score:** 19 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=47747017)

現在のAIレースで「負け組」と見られがちなAppleが、独自のNeural Engine（来年で10年目）とプライバシーへの強いコミットメントを武器に最終的に勝者になるかもしれないと論じたSubstack記事。コメントは少なく懐疑的な意見が目立ち、過去10年間のAI論評に対するAppleの実績不足も指摘されている。

### Key Discussion Points

- **grtteee**: 「他社に先行投資させ、何が可能かを見極めてから、一気にリープフロッグ製品を作る」という典型的なAppleアプローチ
- **worthless-trash**: 「心配しなくてもいい。AppleがAIを出したら『革命的で10%薄くなった』と言うだけだ」（皮肉）
- **bigyabai**: AppleのNeural Engineは来年で10周年。「NPUがAIを変える！」という論評も10年。次の10年もScuffed Metal Compute Shaderで乾杯だ

---

## 10. [A Perfectable Programming Language](https://alok.github.io/lean-pages/perfectable-lean/)

**Score:** 72 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=47744540)

定理証明器かつ関数型プログラミング言語であるLeanの「完璧化可能性（perfectability）」を解説した記事。依存型を使うことでコード内にコードのプロパティを記述・証明でき、例えば「この関数は常に5を返す」という証明を別の証明に再利用できる。さらにLeanのメタプログラミング能力によりコンパイル時に展開されるカスタム構文（三目並べ盤面表記など）も実現でき、構文設計と定理証明は同じメカニズムに収束しているとまとめている。

### Key Discussion Points

- **unexpectedtrap**: Lean 3時代は15MBのディストリビューションがLean 4では2.5GB超に膨張。Lean 3はCoq・Agdaより最もスリムな定理証明器だったが、今は最も肥大化している
- **solomonb**: Lean4は最高クラスの関数型プログラミング言語。ただ標準ライブラリに非構成的公理が焼き付いてされており、完璧化可能性を損なっている。将来的にHaskellの代替になってほしい
- **ilsubyeega**: Webブログとしてコードにホバーするとドキュメントが表示されるのが良い。こういうサイトは珍しい
- **xarope**: 言語の系譜として取り上げられている言語の選択が興味深い。6502/68000アセンブリ、FORTRAN、COBOLなどから始まる独自の系譜も描けると思う

---

## Trends

本日のHacker Newsトップ10から浮かび上がる共通テーマ：

1. **UIの一貫性と使いやすさの回帰** — 「Bring Back Idiomatic Design」が491ポイントと本日最高スコアを獲得し、boringBarのHidden Dockへの不満も共鳴。ユーザーインターフェースの断片化・複雑化への疲弊が強くにじむ

2. **DIY・自作文化の隆盛** — 自家製コーラ（293pt）、macOSタスクバー代替（268pt）、ジャグリング指南（281pt）と、手を動かして作る・教えるコンテンツが高エンゲージメント。スコアよりコメント量が多いのが特徴

3. **GPU競争の現実** — AMDのROCm対CUDAは理想と現実のギャップが依然大きく、「使えるようになるまでのハードル」への不満が根強い。一方でLLVMへのパッチマージなど地道な進捗も確認できる

4. **個人開発の多様性** — Ask HNスレッドには転倒検知デバイス、量子コンピューティング教材、スマホ依存対策アプリなど、技術を個人・家族の課題解決に使うプロジェクトが目立った

5. **形式検証・型理論への関心** — Lean言語の記事と単一演算子論文の2本がランクイン。数学的厳密性と実用プログラミングの橋渡しへの関心が継続して高い
