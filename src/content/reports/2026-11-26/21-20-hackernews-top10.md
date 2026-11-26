---
title: "Hacker News トップ10 ダイジェスト（2026年11月27日 朝）"
date: "2026-11-26T21:20"
category: "summary"
summary: "Intel One Mono、AMD 向け llama.cpp パッチ、RansomwareHelp 起訴など HN 上位10件をスコア順に要約"
tags: ["hackernews", "fonts", "llm-inference", "security", "privacy"]
---

## 1. [Intel One Mono font (2023)](https://github.com/intel/intel-one-mono)

**Score:** 414 | **Comments:** 228 | [Post](https://news.ycombinator.com/item?id=50653667)

Intel が公開しているオープンソースの等幅フォント。Frere-Jones Type が Intel ブランドチームらと設計し、ロービジョン／法的盲の開発者パネルのフィードバックを各段階で反映したという。Light〜Bold の4ウェイトとイタリック、200以上のラテン文字言語、プログラミング用リガチャ（`ss01` 等）に対応する（README に基づく）。

### Key Discussion Points

- **bayesnet**: 低ビジョン向けなら Atkinson Hyperlegible Mono を強く推す、最も読みやすいフォントだという。
  - **zerkten**: ダークモードのように、ブラウザが低視力向けフォントを使うべきと示せる明示的な仕組みはあるか、と質問。
  - **Slow_Hand**: 視力に問題がなくても、読みやすさに特化した Atkinson Hyperlegible を個人プロジェクトで使っている。
- **kleiba2**: 80年代から様々な環境を使ってきたが、フォントはあまり気にせず、標準のもので問題なかったという立場。
  - **quietbritishjim**: これも、フォントの細部にこだわる人と同じくらい極端な見方だと指摘。
  - **al_borland**: 冗談半分で Comic Code を使い始め、6年以上使い続けている。
  - **setopt**: 記号の判別しやすさは自分にとって最優先ではない、と同調。
- **rpozarickij**: Iosevka を知ってから通常の等幅フォントには戻れず、幅の狭い版から標準幅版へ移行したという。
  - **shoobiedoo**: Ioskeley Mono も良く、PragmataPro 風だと紹介。
  - **jaen**: Iosevka → Cousine → Input Mono Compressed と移り、小サイズでの可読性が最良だという。
  - **onevsall**: Monaspace Xenon を愛用（texture healing 技術）。
- **JdeBP**: 開発者向けフォントは約1400グリフと収録文字が少なく、数千グリフの等幅フォントもあると指摘。
  - **kps**: Julia Mono は例外で、ターミナルのフォールバックに使っている。
  - **mietek**: PragmataPro は18,000以上のグリフを持ち、単独の作者が開発している。
- **voidUpdate**: 小文字 e が未完成に見える、尾をもう少し長くしてほしいと感想。
  - **eviks**: 配布元は e と G が他の文字と紛らわしいため明確化したと説明している、と引用。
  - **PowerElectronix**: Intel ロゴの e そのものではないか、と指摘。

## 2. [AMD Specific Patches for Llama.cpp](https://devnull.land/amd-specific-llama-cpp)

**Score:** 195 | **Comments:** 50 | [Post](https://news.ycombinator.com/item?id=50657265)

2026年11月時点で、特定ハードウェア・モデルに絞り、フロンティアモデルで書かせた推論エンジン（Strata など）が乱立している。記事の筆者は、その一部が「モデルの挙動を変えて速くする」方向に進んだと懸念を示す。代わりに最小限のパッチ集 llama-cpp-rdna-boosts を推奨し、自分の環境でトークン生成が 35→55 tok/s、プリフィルが 700→1300 tok/s になったと述べる。

### Key Discussion Points

- **rao-v**: 2018年の gfx906 世代（HBM2、約1TB/s、32GB が約200ドル）向けに llama.cpp を最適化する界隈があり、RDNA 向けの本件は自分たちには効かない。最適化の効果は大きいという。
  - **wolvoleo**: MI50 等は良いが、プリフィル加速用の行列演算器がなく TTFT が遅い。ROCm のサポートも厳しくなっているという。
  - **jhonof**: MI50 32GB を2枚、1枚300ドルで入手し、Strata で約70 t/s。専用の Discord コミュニティもある。
  - **yieldcrv**: NVIDIA のマイニング向けカードでも似たことが起き、価格が数か月で数百ドルから5000ドルに上がったという。
- **malicz**: R9700 で、プリフィル 2400 tok/s、デコード 150 tok/s。4bit 量子化で KLD 0.006 と報告し、3本の並列エージェントを動かせるという。
- **dofm**: Apple Silicon 向けの Splash 移植で Qwen 3.8 27B の速度が約3倍になった。
  - **SparkyMcUnicorn**: 性能だけでなく品質を保つことを重視する MTPLX も一見の価値があると紹介。
- **fiddlerwoaroof**: MI100 で Claude に ROCm 向けの最適化をさせ、Qwen3.8 の性能が2〜3倍になったという。
- **rsolva**: 7900XTX で Claude に llama.cpp を改良させ、Inkling 2 Mini が大幅に高速化したという。
  - **jakswa**: 別の最適化プロジェクトも紹介し、自分も同じ状況だったと共感。
  - **skullone**: 7900XTX の構成で何が動かせるか知りたい、AMD が巻き返せそうだとコメント。

## 3. [CTO of 'RansomwareHelp' Indicted for Wire Fraud](https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/)

**Score:** 138 | **Comments:** 57 | [Post](https://news.ycombinator.com/item?id=50657645)

ransomwarehelp.com の共同創業者兼 CTO が、ロードアイランドで通信詐欺罪により起訴された。同社は「高度な暗号ツールで復旧」「身代金は払わない」と宣伝していたが、FBI のおとり捜査により、実際は攻撃者に身代金を払って復号鍵を入手し、上乗せして顧客に請求していたとされる。指摘された価格は約1.3万ドル（0.2BTC）だった。

### Key Discussion Points

- **wongarsu**: 重大な欺瞞はあるが、顧客はデータを取り戻しており詐欺の意図があったか、これが通信詐欺にあたるかは自明でないと指摘。
- **avodonosov**: 当初のマージンは約2%（260ドル）にすぎず、値引きは後から行われた。昨日の見積もりを間違いだったと伝えるべきだったのか、と擁護。
- **RobotToaster**: この種の復旧業者が身代金を払っているのは公然の秘密で、もっともらしい否認の余地を残しているのでは、と指摘。
- **lnxsxu**: 起訴状によれば、約1.3万ドルから約6千ドルに値引き交渉し、顧客には13,260ドルを請求したという。
- **hermannj314**: 連邦の起訴は取り下げ・無罪になる割合もあり、恩赦の可能性もあるとして、政府側が常に正しいわけではないと述べる。

## 4. [YouTube Ad Punisher – Auto-reloads YouTube pages when an ad plays](https://github.com/antonpictures/youtube-punisher)

**Score:** 131 | **Comments:** 191 | [Post](https://news.ycombinator.com/item?id=50657530)

広告が再生された瞬間に再生位置を記録してページを再読み込みし、元の位置から再開させる Chrome 拡張（Manifest V3）。README によれば、広告ブロッカー検出を回避できるとしており、3回再読み込みしても広告が出る場合は別タブへ4秒切り替えて待機する自動回避も備える。

### Key Discussion Points

- **noitpmeder**: uBlock Origin と SponsorBlock で数年広告を見ておらず、そもそも本当に問題なのか疑問。
- **Grombobulous**: 毎日何時間も見るコンテンツに払わないために労力をかけるのは不思議で、YouTube Premium は価値があるという。
- **jonplackett**: 以前は広告ブロッカー派だったが、クリエイターへの還元、バックグラウンド再生やダウンロード、YouTube Music 付属で Spotify を解約できた点から Premium に降参した。
- **Alifatisk**: 「60秒ごとに広告」が本当なら驚きだが、uBlock Origin + SponsorBlock なので知らなかった。
- **ielillo**: 広告が静かで一定間隔なら許容できる。動画を飛ばすたびや切り替え時の前倒し広告が嫌だという。

## 5. [Curiosity Is No Solo Act](https://thereader.mitpress.mit.edu/curiosity-is-no-solo-act/)

**Score:** 104 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50636931)

Perry Zurn と Dani S. Bassett による著書『Curious Minds』からの抜粋。西洋思想では好奇心が個人の情報獲得欲として語られがちだが、古代・中世にはむしろ共同体から孤立させる怪しいものとされた。本記事は、好奇心が人間関係や共有された意味づけの網の中でこそ力を持つと論じる（Wayback のスナップショットに基づく）。

### Key Discussion Points

- **mentalgear**: あらゆる知識がつながった学術的ハイパーグラフで、貢献者も透明に帰属される未来像が理想だという。
- **srik**: 好奇心の理由を探る記事なのに、「ただそうしたいから」「遊び心から」という可能性が無視されていると指摘。
- **aer12jhg**: AI を言及せずに AI の論点を擁護する記事だと批判し、Riemann Zulip での「社会的」な数学の進め方に触れた。
- **bluerooibos**: 面白い発想だが2段落で伝えられ、9割は冗長だという。

## 6. [Show HN: Fuck_data_brokers.py](https://github.com/gary23w/f-ck_data_brokers)

**Score:** 103 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50658191)

データブローカーに個人情報の削除を要求する、依存ライブラリなしの単一 Python ファイル。ローカルで動作し、約600社に削除リクエストを送る。作者は副業として削除代行をしており、有料の代行サービス「Agent Garrett」も案内している。

### Key Discussion Points

- **arijun**: README は「ID 写真を求められたらタブを閉じる」とあるが、その場合に削除義務がないと主張されないか、と疑問。
- **johanneshoh**: EU 向けの対応予定を質問。米国中心に見えるほか、リクエストを送る価値があるブローカーを事前判定できないかと提案。
- **theoutcast74**: Incogni や Optery はデータブローカー系企業の所有だとして、別サービス privitly.com を勧めた。
- **hootz**: ブラジルの LGPD も対象地域に追加してほしい。
- **jonahbenton**: Mozilla の同種サービスを使っていた。この分野を調べた経験から、良い出来で貢献も考えているという。

## 7. [The USA as a Civilizations-esque map](https://karpathy.ai/usaciv/)

**Score:** 59 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=50658997)

米国全体を『シヴィライゼーション』風のタイルマップとして表示するページ。ページは JS 描画で本文を取得できず、コメントからの推測による。AI が生成したとみられ、地理の誤りと動作の重さが指摘されている。

### Key Discussion Points

- **Brybry**: ルイジアナで、バトンルージュが東バトンルージュ郡ではなく Ascension 郡になっている、Livingston 郡が2つある、原発の位置も実際と異なるなど不自然な選択が多いという。
- **neuwirth**: パフォーマンスが非常に悪い。文明ゲームは人口を実数ではなく縮小した値で扱うのに、ここでは NYC を2000万として扱っている点も外していると批判。
- **ncsurfus**: ウィスコンシンの半島が欠けている。
- **tylerflick**: カンザスシティがカンザス州にあるのはなぜか。
- **p0w3n3d**: 南北アメリカ両方の文明風マップを最初に作ったのは『Colonization』だという。

## 8. [George Whitesides, 1939-2026](https://www.science.org/content/blog-post/george-whitesides-1939-2026)

**Score:** 24 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50657936)

化学者 George Whitesides の訃報。記事本文は取得できず、コメントからの推測による。

### Key Discussion Points

- **tomwphillips**: 2011〜2015年頃に Imperial College London で聴講した。紙ベースのマイクロ流体診断デバイスを紹介し、自分たちのデバイスは途上国で使えるほど安くないと認めた知的誠実さに感銘を受けたという。
- **wuschel**: 化学・材料科学の研究者なら誰もが論文を読んだはずの人物で、限界を押し広げた一人だという。

## 9. [Show HN: Olumino, a Markdown notes and spaced repetition app](https://olumino.app)

**Score:** 23 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=50651099)

ノートを書いてフラッシュカードに変え、理解度に応じたスケジュールで復習できるアプリ。FSRS-7 による間隔反復、LaTeX・コード、Anki／Quizlet 等のインポート・エクスポート、教師向けのクラス機能を備える。

### Key Discussion Points

- **terminal-bloom**: 数年前からある mochi.cards とデザインが非常に似ているという。
- **neuwirth**: FSRS がデフォルトなのは嬉しい。
- **dotancohen**: Anki は Deck Settings を開かなければ問題なく使え、「古いインターフェース」も自分は好みだという。
- **chancharles**: 日本語学習のノートを GitHub に置き、AI で補強して Anki カード化・TTS・同期までを行うワークフローを持っている。
- **gazook89**: iOS でカード編集時、キーボードで画面が押し上げられスクロールできず編集しづらい。

## 10. [Rvoip 0.5 the complete VoIP stack in Rust](https://github.com/eisenzopf/rvoip)

**Score:** 20 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50658632)

SIP、RTP、WebRTC、QUIC/WebTransport、Media over QUIC、音声 AI エージェントを共通の通話モデルで扱う Rust ライブラリ。外部の SIP サーバーやメディアサーバーを入れずに全部入りで使えるとうたう（README に基づく）。

### Key Discussion Points

- **ubercow**: 既存の rsipstack と比べてどうか知りたい。
- **singpolyma3**: 既存の選択肢との比較が示されていない。
- **Onavo**: 実運用向けは C か Go が多いので Rust は嬉しい。bulkvs と diago で自前の Twilio 風環境を安く構築できるとも紹介。
- **codingjoe**: FAX 対応がなく、「complete」は VoIP では言い過ぎでは、と指摘。

## Trends

- **LLM で作る専用ツールの氾濫**: AMD 向け推論エンジンの乱立（#2）、AI 生成らしい米国マップ（#7）、AI を使ったデータブローカー削除代行（#6）など、AI で素早く作る流れと、その品質・信頼性への懐疑が共存している。
- **開発者向けの足回り**: フォント（#1）、GPU 最適化（#2）、Rust の通信スタック（#10）と、開発環境への関心が高い。
- **広告とプライバシーをめぐる攻防**: YouTube の広告回避（#4）とデータブローカー削除（#6）では、「払うか、回避するか」の議論が目立った。
- **詐欺・信頼**: RansomwareHelp の起訴（#3）は、「身代金を払わない」という宣伝と実態の乖離が争点になった。
