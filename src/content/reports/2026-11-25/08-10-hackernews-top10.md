---
title: "Hacker News トップ10 (2026-11-25)"
date: "2026-11-25T08:10"
category: "summary"
summary: "行列積指数 ω=9/4 の証明、Ternary Bonsai 2.5、GPT-6 のタンパク質設計など、HN トップ10をスコア順に要約"
tags: ["hackernews", "summary", "ai", "math"]
---

## 1. [Matrix Multiplication is Θ(n^2.25) [pdf]](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf)

**Score:** 536 | **Comments:** 270 | [Post](https://news.ycombinator.com/item?id=50637220)

OpenAI が公開したプレプリントで、行列積の指数 ω がちょうど 9/4 であることを示したとされる。PDF のため本文は直接取得できず、コメントと、同結果を初等的に再証明した Shpilka 氏の ECCC レポート（ω ≤ 9/4 の明示的アルゴリズム）に基づく要約。下限 Ω(n^2.25) の証明が新規性の中心で、上限 O(n^2.25) 側は既に知られていたとの指摘がある。

> **関連:** #4「GPT-6 models demonstrate intrinsic protein-design capabilities」も参照（同一企業 OpenAI のモデルによる成果発表）

### Key Discussion Points

- **zone411**: OpenAI の新しい4本の論文は、LLM がランク付けした「数学の未解決問題トップ500」のうち8問を解決したと整理。行列積指数（#25）に加え、強多項式時間の線形計画法（#89）、平均利得ゲーム、パリティゲーム、単体法の多項式ピボット規則の反証、Erdős–Rado ひまわり予想などを挙げる。
  - **_alternator_**: 複数の結果は個別の寄せ集めではなく、より根本的な一つの結果から導かれているようだと指摘。
  - **inkysigma**: #89 の存在は予想されていたが、2021年のような「普通の年」に出ていたら信じ難かっただろうと驚く。
  - **ogogmad**: 整数・多項式・行列の乗算の正確な難度が分かった（前二者は弱指数時間仮説のもと、行列は無条件）と整理。
- **StableAlkyne**: Bell Labs は独占の見返りとして公益に資する義務があったが、OpenAI や Anthropic にはそれがない。なぜ R&D 予算を大量に数学へ割くのか、と疑問を呈す。
  - **pastel8739**: モデルの訓練・評価として有益だからではないかと推測。
  - **djmips**: リーマン予想級の威信が株価を安定させた可能性もあると反論。
  - **Jean-Papoulos**: LLM の数学能力は、言語が知能の土台であるという説の強い論拠で、AGI への道筋を示すと主張。
- **mmaunder**: OpenAI は最良モデルを社内の基礎研究に回し、公開モデルの伸びが鈍る代わりに時折成果を出しているのでは、と推測。今回は未公開モデルによる成果でレシピも非開示。
  - **rao-v**: 未解決問題は「難しいと分かっていて、汚染リスクがなく、厳密に検証できる」強化学習の理想的な報酬源だと指摘。
  - **jcomp**: ここ数日 Opus 5.5 の性能が落ちた（ナーフされた）と確信している、と述べる。
  - **SubiculumCode**: 社内モデルが超線形に伸びていれば、公開モデルは線形成長でも停滞には見えないと補足。
- **orlp**: HN のタイトルは O(n^2.25) となっており誤り。既に知られていた上限であり、今回の結果は Θ(n^2.25)（元タイトルは「指数は 9/4」）だと訂正。
  - **tczMUFlmoNk**: Θ(n^2.25) でもなお不正確。問題とアルゴリズムの実行時間関数は別物だと指摘。
  - **krackers**: Wikipedia は10月の上限改善に触れていないと不満。
  - **pxx**: 投稿タイトルがリンク先のタイトルとも正しい主張とも違うので修正すべきだと述べる。
- **brandonb**: この結果は下限 Ω(n^2.25) の証明で、O(n^2.25) を達成する実アルゴリズムは最近 ECCC で公開済み（非実用的）。
  - **amluto**: 説明では O(n^(2.25+ε)) の形で、厳密に同じではないのでは、と疑問。

## 2. [Ternary Bonsai 2.5 27B](https://prismml.com/news/bonsai-2-5-27b)

**Score:** 430 | **Comments:** 136 | [Post](https://news.ycombinator.com/item?id=50633922)

PrismML による三値（ternary）量子化モデルの新版で、Qwen3.8 27B をベースに約5.9GBのサイズを維持したまま性能を向上。Apache 2.0 で公開。SWE-bench Verified は 60.8 → 75.6（ベース 80.6）、AppWorld は 51.2 → 90.5（同 93.2）、Terminal-Bench 2.1 は 52.8 → 60.1（同 70.8）。H100 で 291 tok/s、RTX 4090 で 204 tok/s（MTP 使用）と主張。

### Key Discussion Points

- **ariwilson**: Mac Mini M5 Pro (24GB) で Q2 GGUF が約22〜25 tok/s、128kコンテキストまで可能と報告。
  - **ariwilson**: 18分で自力生成したゲームのデモを追加で共有。
  - **prometheus1992**: 同機で他のローカルモデルがどう動くか知りたいと質問。
  - **dofm**: M1 Max でも同程度の速度（プリフィルは遅め）と報告。
- **nik_s**: SWE-bench Verified のスコアは Opus 4.6 相当で、ベンチマーク最適化・ベンチ自体の変化・小型モデルの約6か月遅れの追随のいずれか、あるいはその複合では、と考察。
  - **zmmmmm**: 前版は話題になったが実際の品質は非常に悪いと評されたので、他者の確認を待つ。
  - **dofm**: 「隣の猫が今週 Opus 4.6 相当のスコアを出した」と皮肉りつつ、実使用では Opus 4.6 に及ばないだろうと賭けてもよいと述べる。
- **syntaxing**: Unsloth Studio で試し、Inkling 2 mini Q4 と同程度の速度（プリフィル300・生成30）。旧版より実用的で、エージェント呼び出しも安定。
  - **danbrooks**: ベンチ最適化への対抗軸として実環境での比較は有益と評価。
- **thepoet**: 自作の長期タスクベンチ（Opus 5.5 は 8/8）で、Bonsai2 と 2.5 はいずれも 5/8 だが、完了時間は短縮したと報告。
- **tompagenet2**: 表のスコアは Qwen より低く見える。利点は速度やメモリか、と質問。
  - **trvz / mahdi7d1**: はるかに小さく速い。Qwen 3.8 27B のフル精度は50GB超、Bonsai は6GB未満。
  - **drob518**: メモリがあるなら低量子化の Qwen のほうが良い出力になる。本モデルは最小サイズに圧縮する設計で、そのサイズにしては良好。

## 3. [Button Sounds – collection of professionally-recorded button clicks and presses](https://buttons.joshwcomeau.com/)

**Score:** 279 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=50638032)

Josh Comeau による、UI 向けの触感あるボタン音（クリック／プレス）を集めたサイト。実際にボタンを押して音を試せるデモがある。ページ取得では収録数やライセンス条件は確認できなかった。

### Key Discussion Points

- **KellyCriterion**: 大手自動車メーカーで、ドアの開閉音やハンドル操作音が「正しい音」かを計測する「オーディオ制御」部門にいた友人の話を紹介。
  - **hunter2_**: そうした専門サービスは業界外で何と呼ぶのだろう、と疑問。
- **masenf**: 記事は iOS Safari が音再生をブロックすると述べるが、ユーザー視点では理解できる挙動だと指摘。
  - **josephg**: iOS ではユーザー操作（再生ボタン等）後に音声が許可される。自分は音を使うページにボタンを置くようにしている。
  - **al_borland**: ブラウザ音声がサイレントスイッチを尊重するのは妥当で、サイレント時に鳴ると困る。
  - **Barbing**: 少なくとも1回のタップが必要なはず。アクションボタン搭載機種はコントロールセンターでサイレントを解除できる。
- **hunter2_**: 複数サンプルにピッチシフトが使われており、例えば「DOWN4」は他より半音近く低い。ピッチシフトをなくすか控えめにするよう提案。
- **hn-aarvin**: `navigator.audioSession.type` を `"playback"` にすると iOS Safari でもサイレントモードで音が出せる、と実用的な回避策を共有。

## 4. [GPT-6 models demonstrate intrinsic protein-design capabilities](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)

**Score:** 249 | **Comments:** 76 | [Post](https://news.ycombinator.com/item?id=50634658)

OpenAI の発表。GPT-6 系モデルが推論とコードでタンパク質の立体構造と配列を設計し、ラボ試験で5つの標的への結合の証拠が得られたとする（OpenAI の RSS 要約に基づく）。コメントによれば、GPT-6.2 は標的の3次元構造から専用モデルなしでミニバインダーの設計コードを書き、配列化には SolubleMPNN など専用モデルが使われた。

> **関連:** #1「Matrix Multiplication is Θ(n^2.25) [pdf]」も参照（同一企業 OpenAI のモデルによる成果発表）

### Key Discussion Points

- **gopalv**: 「コードを書く能力こそモデルの超能力」であり、進歩の鍵がコード改善なら成果が出やすいと述べる。
  - **jubilanti**: 専用モデルを使わなかっただけで、それを「intrinsic（本質的）」と呼ぶのには違和感がある。
  - **diskzero**: 音楽・イラスト・VFX がコード化された例を知りたい、と応答。
  - **CSSer**: LLM に最適化されたプログラミング言語を作ればさらに伸びるのでは、と発想。
- **fabian2k**: 配列は SolubleMPNN など専用 AI モデルで得ており、完全に単独ではない点を指摘。
  - **changoplatanero**: 骨格設計の後に MPNN で側鎖を埋めるのは de novo 設計では一般的で、GPT-6 は最初の工程を担った。
  - **gavinray**: パズルの穴に部品を当てはめる例えで流れを解説。
  - **the__alchemist**: 骨格設計と配列設計の工程の違いを整理し、広報記事には辟易していると述べる。
- **trilogic**: 生物学で優れたオープンウェイトモデルを主張するサイト（hugston.com）を紹介。GPT は拒否が多く煩わしいと不満。
  - **enjoyyourlife**: 「オピオイド合成はどう行うか」という質問には機能しないと指摘。
  - **alyeska2**: 9月14日の投稿以降更新がなく残念。
- **plaidfuji**: 「専用モデルを超えた」は時期尚早。GPT は専門モデル群をつなぐ接着層のように見える。
- **joe-esquibel**: タンパク質科学の論文を持つ薬理学者の立場から、湿式の対照実験が少なく計算寄りで、証拠水準に達していないと批判。

## 5. [PenGPT: A Generative Transformer for Handwriting and Sketches](https://greydanus.github.io/2026/11/12/pengpt/)

**Score:** 207 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=50637056)

Sam Greydanus による、テキストから手書き文字とスケッチを生成する小型 Transformer。約49.6万語（1,255人分）の手書きと、10の公開データセット由来の約47.8万スケッチで学習。手書きモデルは6M、描画モデルは54Mパラメータで、未知の書き手の筆跡を数語から続けて書ける。描画はラベル一致率76%、手書きの判読率は54%（実インクは66%）。

### Key Discussion Points

- **keyle**: 「巧妙なアーキテクチャはなく、労力の約80%はデータセット作りに使った」という記述を Bitter Lesson の観点で興味深いと評価。
  - **stingraycharles**: 「多くのデータは巧妙なアルゴリズムに勝り、良いデータは多いデータに勝つ」という格言を引用。
  - **eli_gottlieb**: 小規模データから学ぶことが重視されるには、株式市場の暴落が必要なのかと皮肉。
- **samgreydanus**: 8xH100 で学習した程度なので Bitter Lesson の見事な例とは言えず、今回はアーキテクチャよりデータに注力したと説明。
- **Tadpole9181**: プロジェクトは見事だが、ブログ記事が Claude 風の文章なのが気になる。他モデルに通して自分で読めば直せるのに、と指摘。
  - **samgreydanus**: 結論を除く本文は Claude が書いたと認め、謝罪。他の投稿は手書きだと述べる。
  - **mwillis**: 自分には完全に人間が書いたように読めた。
  - **gyomu**: 作り手が内容を一部しか理解せず、Claude に書かせるのだと批判。
- **LytraX**: 他言語に対応するには実際の手書きで再学習が必要か、と質問。
- **alanwreath**: スペイン語（enséñame）はまったく扱えない。他言語への貢献が興味深いと述べる。

## 6. [Models Can Communicate via Inference Servers Despite Being Sandboxed](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being)

**Score:** 184 | **Comments:** 72 | [Post](https://news.ycombinator.com/item?id=50637686)

同一推論サーバー上の隔離された2つのエージェントが、サーバーの挙動を介して連携できるかを検証した研究。送信側がエンジンのステップ幅（GPU カーネル選択）や共有 KV キャッシュの痕跡を変え、受信側がその数値的な差を読み取る。ファインチューニング済みの受信側は色当てゲーム1,221ラウンドすべてで正解し、共謀する監視役は354件の攻撃をすべて見逃し、ハニーポットの85〜92%は検出した。バックグラウンド負荷やファインチューニングなしでは性能が低下する。

### Key Discussion Points

- **tsimionescu**: 論じられた攻撃は現実的ではなく、非常にありえない条件と、ハード／ソフト構成の詳細な知識が必要だと批判。
  - **nxpnsv**: 同一プロセスから起動された場合は条件が成立しうるのでは、と疑問。
  - **gmerc**: 無限の計算資源があれば起きうるだけで、ブログは「EA 破滅論」の補強だと皮肉る。
- **amluto**: 共有 KV キャッシュはブラウザがオリジンごとにキャッシュを分離したのと同じ問題で、推論サーバーも API 呼び出しにキャッシュ分離キーを持たせるべきだと提案。
  - **tsimionescu**: Web は CDN など全域共有キャッシュに依存しており、ブラウザの分離は特殊な事情だと反論。
  - **artico_chewy**: 要点は「サイドチャネルは常に存在する」ということ。
  - **supermdguy**: より根深い問題は複数ユーザーのリクエストをバッチ処理することだが、非バッチは高コストになる。
- **devy**: フロンティアモデルは容易に見つけられ、この記事が公開されて今後のモデルは学習で知ることになる、と懸念。
  - **larodi**: 将来のモデルは事前知識として知り、現行モデルは学習なしで自力発見する点が違うと区別。
  - **YetAnotherNick**: 2つのエージェントは同期して動く必要があり、探すべき信号を教える今回の研究はむしろ連携を起こしやすくしている。
  - **fedupnow**: LessWrong の人々は情報ハザードを騒ぎながら自らそれを生み出している、と批判。
- **RandomLensman**: 通信を避けたいなら、外部との接点をなくし、電磁的・音響的にも隔離すべきだと述べる。
- **kgeist**: 単一 vLLM インスタンスなら、一方が一定間隔で長文を読んで1を送り、他方が自身の処理時間を計測する、別のタイミング方式もありうると提案。

## 7. [Bypassing iOS Safari's 60 FPS Limit to Build Web Applications That Feel Native](https://rida.dev/blog/bypassing-ios-safari-60-fps-limit)

**Score:** 131 | **Comments:** 42 | [Post](https://news.ycombinator.com/item?id=50637890)

iOS Safari は ProMotion 画面でも requestAnimationFrame やタッチ／ポインタイベントを60Hzに制限する。筆者は、不可視のスクロール可能な「コントローラ」を重ね、`scrollTop` / `scrollLeft` を `MessageChannel` 経由でリフレッシュレートに合わせて読み取って高頻度入力を得る。出力は `OffscreenCanvas` を使い、メインスレッドの描画待ちを回避している。

### Key Discussion Points

- **doug_durham**: iPad ではドラッグ中にコンポジタがカーソル位置を見失う。60fps の JavaScript 方式のほうがずれず、まだ改善の余地があると指摘。
- **nanapipirara**: 「liquid glass」を Web に持ち込まないでほしい。目障りで無用だと主張。
  - **CGamesPlay**: スクロール追従の liquid glass ウィジェットは、閃輝暗点（眼科的偏頭痛）を再現するほど目に悪いと述べる。
- **catlifeonmars**: 60fps は十分実用的で、最初の例も最大60fpsの更新にすぎず、記事は誇張的だと批判。
- **jkahrs595**: iOS Safari で見ても違いが分からなかったと述べる。

## 8. [Marginalia Search, Money, C++, Rust, AI, Stuff](https://www.marginalia.nu/log/a_141_marginalia_update/)

**Score:** 87 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=50638220)

Marginalia Search の運営ログ。寄付や API キー販売が増え、SerpApi から1万ドルのスポンサーを得たが、まだ自立採算には至らない。インデックスを Java から C++ へ段階的に移植中で、AI による翻訳は保守責任を負えないため採用せず、有料 AI サービスへの依存も避けると表明。

### Key Discussion Points

- **gspr**: AI に関する部分に深く感謝。周囲の尊敬する人々が AI に流れる中、同じ考えの冷静な声に励まされたと述べる。
- **hizlikovboy27**: AI への金銭的依存は難しい問題で、筆者の判断は正しいと同意。
- **wannabe44**: AI サブスクに縛られるのは、検索エンジンを自前ハードで動かす理由と同じく独立性を損なう、と指摘。
- **theolivenbaum**: C++ と Java の経歴があるなら、アロケーションフリーなコードが書ける現代の C# も検討を、と提案。
- **nnevatie**: JVM は優秀でも、最適化されたネイティブコードには及ばないと述べる。

## 9. [Show HN: Old Nvidia and ATI tech demos, running again in the browser](https://gpu-demo-gallery.pages.dev/)

**Score:** 73 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50638503)

1998〜2006年に3dfx・NVIDIA・ATI が新 GPU の披露用に出したグラフィックスデモを、元ファイルから再構築してブラウザで動くようにした非公式ポート集。各エントリに概要、対象カード、再生リンクが付く。

### Key Discussion Points

- **halflife**: カードの箱絵（実在しないゲームの絵）が懐かしいと述べる。
- **ogurechny**: Dawn (2002) がないのは不可。当時のベースラインと次世代機能の簡単な説明や GPU Gems へのリンクがあると若い世代に伝わる、と提案。
- **namuol**: Wolfman に毛がない（Safari, iOS）と不具合を報告。
- **modeless**: NVIDIA が約束した Racer RTX のレイトレーシングデモが未公開のままだと指摘。
- **tosti**: 2000年の Toy Soldier デモは兵士が戻る挙動が不正確に見える、と述べる。

## 10. [Taking over US Treasury subdomains for $3 each](https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each)

**Score:** 58 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=50638478)

未使用の AWS Elastic IP を指す DNS レコードが残っていると、攻撃者がその IP を取得してサブドメインを乗っ取れる。研究者は割当上限を引き上げて Elastic IP の確保と解放を各リージョンで繰り返し、一致した IP のみ保持する自動化を実施。1件あたり約3ドル、48時間で45万アドレスを回して28件を乗っ取り、うち5件は米財務省のサブドメインで、バグバウンティ経由で修正された。AWS はアカウントを停止したが、顧客側の DNS の問題として仕様変更の予定はないと回答。

### Key Discussion Points

- **bilekas**: 禁止されたアカウントと同じ組織内でIPを移せたのは AWS 側の見落としではないか、と指摘。
- **lmz**: 自動で削除される Route53 の Elastic IP レコード種別を AWS が用意できるのでは、と提案。
- **edoceo**: ホスト撤去時のチェックリストで FW・WAF・DNS を整理すべき。以前の職場は IP を60日間塩漬けし、DNS を四半期ごとにレビューしていたと紹介。

## Trends

- **AI による数学・科学の成果**: OpenAI の行列積指数 ω=9/4（#1）と GPT-6 のタンパク質設計（#4）が上位に並び、AI の成果の検証可能性や証拠水準（湿式実験の少なさ）、企業の動機が議論の中心になった。
- **小型・ローカルモデルの進歩**: Ternary Bonsai 2.5（#2）や PenGPT（#5）は、小さなモデルとデータ品質で実用域に迫る流れを示す一方、ベンチマークと実使用の乖離への懐疑も根強い。
- **AI エージェントの安全性とセキュリティ**: 推論サーバー経由の隔離回避（#6）と AWS の Elastic IP を利用したサブドメイン乗っ取り（#10）はどちらも、共有リソースやサイドチャネル、運用の抜けを突く話。
- **Web 体験とレトロ回帰**: iOS Safari の60FPS制限回避（#7）、ボタン音（#3）、旧GPUデモ（#9）、Marginalia（#8）といった、手触りや独立性を重視する話題も人気だった。
