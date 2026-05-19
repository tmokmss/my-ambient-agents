---
title: "Hacker News トップ10まとめ（2026年5月19日）"
date: "2026-05-19T04:23"
category: "summary"
summary: "Anthropic がStainless を買収、AI ボットスパム問題、LLM の6ヶ月間の進化など注目トピックをまとめ"
tags: ["hackernews", "AI", "security", "open-source", "lisp"]
---

## 1. [We stopped AI bot spam in our GitHub repo using Git's –author flag](https://archestra.ai/blog/only-responsible-ai)

**Score:** 439 | **Comments:** 198 | [Post](https://news.ycombinator.com/item?id=48181125)

Archestra は $900 のバウンティを公開した直後から大量のAI生成スパムに悩まされ始めた。1件のイシューに253件のボットコメントが殺到し、あるプルリクエストには27件もの未テスト PR が押し寄せた。メンテナーが週の半分の時間をスパム削除に費やす事態となり、最終的に外部コントリビューターへの事前オンボーディング必須化と Git の `--author` フラグを組み合わせた仕組みで対処した。

### Key Discussion Points

- **captn3m0**: GitHub の「以前にマージされた PR を持つコントリビューターは承認不要」というルールが悪用可能なセキュリティホールになっていると指摘。
  - **ildari**: 「外部コントリビューター全員に承認を必須にする設定がデフォルトであるべき」と回答。
  - **orlp**: 1件の無害な PR がマージされたこと自体にセキュリティ上の問題はないと反論。
- **halapro**: そもそも GitHub がこういった状況を許容していること自体を批判。PR を Issue のように削除できる機能の要望を出している。
  - **jmuguy**: スパムメールを個人が対処すべきでないように、これは GitHub や業界が解決すべき問題だと同意。
  - **moraesc**: GitHub が PR のアーカイブ機能を開発中だと報告。
- **silverwind**: バウンティリポジトリにおける PR スパムは深刻。PR 拒否率 95% 超のアカウントを一時ブロックする仕組みを提案。
  - **microtonal**: コントリビューション品質に応じて PR 権限を拡張するトークン制度を提案するも、Microsoft（GitHub親会社）に CoPilot との利益相反があると懸念。
  - **hiccuphippo**: 「GitHub には AI をブロックするインセンティブがない。広告会社に広告ブロッカーを作らせるようなものだ」
- **krupan**: AI の能力を過大に宣伝してきた結果がこの状況を招いたと批判。AI 礼賛と相次ぐレイオフが開発者コミュニティの反感を強めていると指摘。
  - **marcus_holmes**: GitHub コントリビューションを採用指標にすること自体が問題。バウンティをやめ、採用評価に使うのをやめればゲーミングの動機がなくなると主張。
- **arecsu**: コントリビューションの価値を PR マージ率・イシュー解決品質などで評価する ELO レーティングシステムの導入を提案。

---

## 2. [Anthropic acquires Stainless](https://www.anthropic.com/news/anthropic-acquires-stainless)

**Score:** 390 | **Comments:** 265 | [Post](https://news.ycombinator.com/item?id=48182281)

Anthropic は2026年5月18日、SDK・MCP サーバー開発ツールを手がける Stainless を買収した。Stainless は2022年の創業以来 Anthropic の公式 SDK を生成してきた実績を持つ。買収後は TypeScript・Python・Go・Java・Kotlin などに対応した SDK/CLI/MCP サーバー生成の知見を Anthropic の Claude エージェント基盤に統合する一方、Stainless 単体の SaaS 製品（SDK ジェネレーター等）は新規受付を停止・段階的に終了する。

### Key Discussion Points

- **827a**: これはアクイハイア（採用目的買収）であり、「会社を成功させること自体が最高の面接」として優秀なエンジニアを獲得する戦略だと分析。
  - **rattray**（Stainless 創業者）: 「ステンレスパイプ」から命名、モットーは「Quality fittings for your REST API」。地味だが重要な API インフラ整備の仕事に本当にワクワクしていると述べた。
  - **EmeraldSky**: 「AI が人間の仕事を代替するはずなのに、なぜ優秀な人材を雇う必要があるのか」と皮肉。
- **drewda**: Stainless のホスト製品はすべて終了予定であり、事実上のアクイハイアと指摘。
  - **atomicthumbs**: SDK を生成していたはずが「もう無理だけどな(笑)」と一言。
  - **btown**: Stainless のブログ記事を共有。移行先として `app.stainless.com/transition` が案内されている。
- **kristjansson**: 既存ユーザーや生成済み SDK の扱いに関する明確な説明が不足していると批判。
  - **btown**: 移行ページへの誘導リンクを共有。
  - **dgellow**: 自社でSDKを維持管理できるセルフサービスへの移行支援を準備済みと補足。
- **GeneticGenesis**: Mux で Stainless の Node SDK ジェネレーターを使用していた経験から、品質は高かったと評価しつつ、OpenAPI から SDK を自動生成する競合の出現で市場が厳しかったと理解を示す。

---

## 3. [Click (2016)](https://clickclickclick.click/)

**Score:** 234 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=48187054)

「Click」は2016年に公開されたブラウザベースのインタラクティブ体験で、マウス動作・クリック・スクロールなどの入力イベントをリアルタイムで収集・分析し、ユーザーのオンライン行動プロファイリングを可視化するデモツールだ。ボタンを押し続けるだけのシンプルな外観の裏側で、セッションリプレイ技術や行動追跡がどのように機能するかを体感させる。コンソールで自動クリックを実行すると「Bot」と判定されるなど、人間とボットの判別ロジックも組み込まれている。

### Key Discussion Points

- **foxfired**: セッションリプレイ分析でユーザーの動きを追跡するツールを実装した経験を共有。開発者ツールを開いた友人が即座に「気持ち悪い」と反応したことで、ユーザーがこれらのツールの実態を理解していないことを実感したと述べた。
  - **jrowen**: 自動集計システムへのデータ収集は気にしないが、実際の人間が個別の行動を見ていると想像した途端に不気味に感じる「二重基準」の心理を分析。
  - **Sophira**: 利用規約は主に企業の責任逃れのために存在し、ほとんどのユーザーは読まないと指摘。
- **dang**: 2016年・2018年・2021年・2023年と過去にも HN で話題になったことをアーカイブ付きで紹介。
- **BudaDude**: コンソールで1000回自動クリックを実行したところ「Bot」と表示されたと報告。
  - **jagged-chisel**: 同様のツールで複数回クリック時のメッセージを確認したが、手動操作と自動操作の区別ができているのか判断できなかったと述べた。
- **pokpokpok**: インターフェース設計の授業で入力イベントの概念を教えるために使用していると紹介。
- **CSMastermind**: StumbleUpon 全盛期を思い出すと懐かしむ。
  - **ge96**: ペーパークリップ宇宙シミュレーターゲームを連想したと返信。

---

## 4. [Pope Leo XIV's first encyclical Magnifica humanitas to be published May 25](https://www.vaticannews.va/en/pope/news/2026-05/pope-leo-xiv-first-encyclical-magnifica-humanitas.html)

**Score:** 146 | **Comments:** 86 | [Post](https://news.ycombinator.com/item?id=48187201)

ローマ教皇レオ14世の最初の回勅「Magnifica humanitas（驚くべき人間性）」が2026年5月25日に公開予定。AIと人間の尊厳をテーマにした内容と見られており、Anthropic の研究者クリストファー・オラー氏がリリースイベントのスピーカーとして参加することで大きな注目を集めている。AIが労働市場を変革しつつある時代における宗教的・倫理的指針として期待されている。

### Key Discussion Points

- **nvader**: 記事のタイトルが誤解を招くと指摘。回勅はあくまで教皇のみが著者であり、外部の研究者が「共同提示」するものではない。「氷山の旅にタイタニックが乗客として乗っているようなもの」と比喩。
- **ilaksh**: 無神論者でありながら、労働の価値が失われつつある現代社会への教皇のメッセージに期待を寄せる。AI・ロボットの発展が人間の尊厳を蝕む可能性を憂慮。
- **nilkn**: 2008年から無宗教だが、現代の分断・権威主義的傾向が強まる中で、強い世界的リーダーシップへの渇望を感じると述べた。
- **sudobash1**: オラー氏はリリースイベントの複数のスピーカーの一人に過ぎず、タイトルの編集は誇張だと補足。
- **alach11**: 産業革命期に指針を与えた「レールム・ノヴァルム」回勅の現代版として期待感を表明。AI が人間と経済の関係を変えると主張する時代に宗教的声明が重要だと述べた。

---

## 5. [The last six months in LLMs in five minutes](https://simonwillison.net/2026/May/19/5-minute-llms/)

**Score:** 78 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=48188183)

Simon Willison による2025年11月〜2026年5月のLLM進化まとめ。この半年間で「最良のモデル」の座が Claude・GPT・Gemini の間で5回も入れ替わり、コーディングエージェントが実験的な段階から実用的な日常ツールへと移行した。オープンソース勢では Qwen 3.6-35B や Gemma 4 が商用モデルに匹敵する性能を示し、ローカル実行も現実的になった。シリコンバレーでは個人AI アシスタント「Claws」向けに Mac Mini 需要が急増するなど、AIの社会実装が進んだ6ヶ月を振り返る。

### Key Discussion Points

- **Insanity**: 「インフレクションポイント」という言葉がマーケティング的な誇張に見えると懸念。現行モデルはゲーム開発において依然として本格的なプロダクションコードを生成できないと指摘。
- **shepherdjerred**: Simon のブログは影響力があるため、AI ラボがそのブログを参考にして非典型的なタスク用にモデルを訓練している可能性があると指摘。
- **throwaway2027**: 2025年12月が自身にとってのブレークスルーだったと述べ、各月ごとのモデル品質の推移を時系列で記録（Claude → ChatGPT → Gemini → Claudeの再浮上 → GPT 5.5と続く）。
- **rTX5CMRXIfFG**: 高品質なプロンプト設定（MDファイルやカスタムスキル）さえ整えれば、各モデル間の性能差は微々たるものになるのではと疑問を提起。
- **zarzavat**: 「今この瞬間も、どこかの人間アーティストが AI の訓練データ用にペリカンが自転車に乗る絵を描かされている」と皮肉。

---

## 6. [Peter Salus has died](https://www.tuhs.org/pipermail/tuhs/2026-May/033750.html)

**Score:** 69 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=48188665)

Unix ヘリテージ協会（TUHS）のメーリングリストに、Unix 史研究家のピーター・サルースが2026年5月15日に逝去したとの訃報が投稿された。Dan Cross 氏は「彼の著書『A Quarter Century of Unix』はUnix 史を真剣に学ぶ者にとって必読書だ」と追悼した。前週にもピーター・ノイマン氏の逝去が報告されており、コンピューター史における重鎮が相次いで世を去っている。

### Key Discussion Points

- **Buildstarted**: Wikipedia の Peter H. Salus ページへのリンクを共有。
- **oldspleen**: 「大学時代、彼のUnix 史の本が AT&T → BSD → Linux の系譜を初めて腑に落ちる形で解説してくれた最初の本だった。R.I.P.」
- **armada1122**: 『A Quarter Century of Unix』をリファレンスとして愛用していたと述べ、現在のLLM 時代を口述歴史として記録している人物がいるか問いかけた。
- **YesThatTom2**: サルース氏は USENIX 協会の初期に事務局長も務めていたと補足。
- **TZubiri**: Internet Archive で同書を発見したが、表紙に「Sex, Drugs」が削除されていたとの不思議な発見を共有。

---

## 7. [Regex Chess: A 2-ply minimax chess engine in 84,688 regular expressions](https://nicholas.carlini.com/writing/2025/regex-chess.html)

**Score:** 46 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48136909)

Nicholas Carlini が84,688個の正規表現だけで動作する2手先読みのチェスエンジンを実装。正規表現を命令セットとした独自 CPU アーキテクチャを構築し、グローバルな文字列置換によって複数スレッドの並列実行を実現した。スタック操作・条件分岐・SIMD的な並列処理をすべて regex で表現し、実行時間を当初の30分から1〜10秒に最適化した。

### Key Discussion Points

- **userbinator**: 「タイトルを読んで、理論上は可能だが誰もやろうとは思わないやつだと確信した」
- **Kaliboy**: 大学の CS 課程でNFA に魅了されていたが、Carlini がそれを現実にしてみせたことに言葉を失ったと感嘆。
- **evilsnoopi3**: 記事を読む前にゲームで試し、チェスエンジンが防げなかった1手詰めを発見したと報告（具体的な手順を代数表記で共有）。
- **VladVladikoff**: 「これは夢を見ているようだ」

---

## 8. [Hyperpolyglot Lisp: Common Lisp, Racket, Clojure, Emacs Lisp](https://hyperpolyglot.org/lisp)

**Score:** 142 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=48184322)

Common Lisp・Racket・Clojure・Emacs Lisp を並列比較するリファレンスシート。各方言の設計思想の違いが一目でわかる構成で、CLは伝統的な柔軟性、Racketはイミュータブルなハッシュテーブル、Clojure は Java との相互運用性、Emacs Lisp はエディタ特化と、それぞれ異なる進化の方向性を持つことが明示されている。Lisp を学ぶ開発者が複数方言を横断的に理解するためのチートシートとして機能する。

### Key Discussion Points

- **sinsudo**: Common Lisp の例で `eval` を使わず `endp` を使うべきとの改善案を提示。
- **vindarel**: SBCL のコンパイル動作・cl-ppcre や cl-str などのライブラリ・UIOP 関数の活用といった Common Lisp 実践的ノウハウを共有。
- **sinsudo**: 「documentation 関数はない」との説明に反し CL には `documentation` 関数が存在すると指摘し、Rosetta Code もリファレンスとして推薦。
- **kickingvegas**: Python 開発者向けに Emacs Lisp の対応関数を示すチートシートを自作・公開していると紹介。
- **eamonnsullivan**: 掲載されている Clojure 1.6 や Emacs 24.5 のバージョンが古すぎると指摘。

---

## 9. [Anyone on the Internet Can Ring Your Doorbell](https://www.abgeo.dev/blog/anyone-can-ring-your-doorbell)

**Score:** 23 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=48165944)

Smart Doorbell X3 と Naxclow バックエンドの深刻なセキュリティ脆弱性を報告。2つのHTTPリクエストだけで任意の端末を別アカウントに乗っ取り可能で、元オーナーはアクセスを失う。さらにリレーパスワードを取得した攻撃者が「その家のドアベル」になりすまし、偽の映像で着信に応答できる通話なりすましも可能。デバイスIDが連番形式で予測可能なことも問題で、組み込み機器のバックエンドセキュリティ設計の重要性を改めて示している。

### Key Discussion Points

- **EtienneDeLyon**: 「一人で家にいる孤独な時に誰かが呼び鈴を鳴らしてくれたら、友人が来たわけではないと分かっていても嬉しいのか悲しいのか」と哲学的に問いかけた。
- **stackghost**: 「Ring のドアベルが実質的にはるかに安全だとは思えない。スマートデバイスはプリンターだけにしていて、異音がしたら撃てる位置に銃を置いている」

---

## 10. [War game exposed U.S. vulnerability to low-tech warfare](https://nsarchive.gwu.edu/news/2024-11-01/rigged-war-game-exposed-us-vulnerability-low-tech-warfare)

**Score:** 12 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48188506)

2002年の米軍演習「ミレニアム・チャレンジ」（費用2億5000万ドル）は、商船や低技術の攻撃手段を使った仮想敵勢力が米海軍の空母戦闘群を10分で壊滅させたことを示した。対戦指揮を担当した海兵隊のヴァン・リッパー中将は演習が「仕組まれていた」と公然と批判。この機密文書は2013年の情報公開申請から11年後に公開され、後のイラク戦争における非対称戦争の難しさを予見していたとされる。

### Key Discussion Points

- **KnuthIsGod**: 赤軍（仮想敵）が小型ボートで青軍（米軍）の艦隊位置を特定し、巡航ミサイルで空母1隻を含む16隻を撃破し、さらに自爆攻撃で追い打ちをかけたシナリオを要約。
- **JumpCrisscross**: 対応は遅れたが、現在は米国でも低コスト弾薬が数十年分の国防予算を受けるようになったと述べ、教訓が反映されつつあると示唆。
- **1over137**: 「グリーンランドやカナダなどアメリカに脅かされている地域に希望を与えるね」

---

## Trends

2026年5月19日のHacker News トップ10から浮かび上がる主なテーマは以下の通り：

1. **AI の光と影**: Anthropic の Stainless 買収（エージェントAPI 基盤の強化）、LLM の急速な進化のまとめ、そして GitHub での AI ボットスパム問題と、AIの恩恵と弊害が同時に議論された。

2. **セキュリティと信頼**: スマートドアベルの脆弱性、GitHub リポジトリへのスパム侵入、米軍演習での想定外の敗北など、「信頼できると思っていたシステムへの脅威」が複数のストーリーで共通テーマとなった。

3. **AI と人間の価値・倫理**: 教皇の回勅「Magnifica humanitas」、AI が労働市場に与える影響への懸念、オープンソースメンテナーの疲弊など、技術の進歩が人間の尊厳や働き方に与える影響への問い直しが続いた。

4. **技術の遊び心と奇抜な発想**: 正規表現チェスエンジンや Click(2016)のようなプロジェクトが上位に入り、HN コミュニティの「純粋な技術的好奇心」への愛着が示された。

5. **コミュニティとオープンソースの持続可能性**: AI スパムが OSS メンテナーを疲弊させる問題は、オープンソースコミュニティの存続そのものに関わる課題として多くのコメントを集めた。
