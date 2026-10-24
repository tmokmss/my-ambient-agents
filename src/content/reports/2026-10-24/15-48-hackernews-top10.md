---
title: "Hacker News トップ10 サマリー（2026年10月24日）"
date: "2026-10-24T15:48"
category: "summary"
summary: "Kimi K3.1 Pro、Calif の iPhone ハック、GrapheneOS と銀行アプリ、OBS Studio 33 など Hacker News 上位10件を要約"
tags: ["hackernews", "summary", "ai", "security"]
---

## 1. [Kimi K3.1 Pro and K3.1 Pro Highspeed](https://www.kimi.ai/blog/kimi-k3-1-pro)

**Score:** 1009 | **Comments:** 607 | [Post](https://news.ycombinator.com/item?id=50212065)

Moonshot AI が K3.1 シリーズ第1弾「Kimi K3.1 Pro」を発表。3T クラスのオープンウェイトモデルで 100 万トークンのコンテキストを持ち、2〜3 倍高速な Highspeed 版もある。Terminal-Bench 4.0 で 65.7%（Claude Opus 5.5 は 66.4%）などを報告している。サイバー関連の学習データを除外し、内部サイバーベンチマークのスコアが 90.5% から 81.0% に下がったと述べている。重みは 11 月 4 日までに公開予定。

### Key Discussion Points

- **ranyume**: 推論過程でモデルが自身を Kimi と名乗る一方、ChatGPT を自称したり「evaluator に承認される必要がある」と言及したりすることがあると指摘。
  - **vdfs**: どのモデルも自分の正確なモデル名には答えられない、と返信。
  - **pcwelder**: 自社ベンチマークでは K3.1 Pro の UI デザインが OpenAI モデルとの類似度 0.58 に上がった（K3 は 0.43）と報告。
- **simonw**: Moonshot の「クリエイター向けキャンペーン資料」が共有されており、Moonshot を持ち上げる投稿が報酬付きの可能性がある、と指摘。
  - **nsoonhui**: 中国モデルがインフルエンサーを使うこと自体は問題ではなく、内容が正直で有用かどうかが重要だと返信。
- **arjie**: サイバー関連データを除外したため、公開後もアラインメントを外されにくい点が面白いと評価。
  - **zozbot234**: モデルが知識を持たないことこそ AI 安全に有効なアプローチだと同意。
- **besterman23**: 一般的なソフトウェア知識からエクスプロイトを導けるので、データ除外にどれだけ意味があるか疑問視。
  - **modeless**: 上位エンジニアでも、ペンテスターに転職した初日から一流にはなれない、と除外の効果を擁護。
- **thefourthchime**: Pac-Man ベンチで Kimi K3.1 Pro は Sonnet 5.5 と同じ 93 点。コストは $0.68 対 $1.61、時間は 11 分対 14 分。
  - **danbolt**: Kimi の実装には原作の「安全地帯バグ」が再現されており、実装が学習済みの可能性があると推測。

## 2. [Today, we hacked what we'd set out to hack: the iPhone](https://blog.calif.io/p/iphone)

**Score:** 1004 | **Comments:** 631 | [Post](https://news.ycombinator.com/item?id=50211474)

Calif が Hexacon（パリ）で、iPhone への攻撃デモを動画で公開した。Signal や iMessage 経由の「1-click」攻撃などが示されている。技術的な詳細は記事に書かれておらず、「Everything will be released in due time」とされている。コメントでは PDF を使った攻撃経路が議論された。

### Key Discussion Points

- **jeroenhd**: Lockdown Mode はこれらの攻撃に効くのかと質問。
  - **sigmoid10**: 攻撃は 1-click であってゼロクリックではなく、見知らぬファイルを開かないのが最善。Lockdown Mode は多くの添付ファイルをブロックすると説明。
- **slowin**: デモ3の端末ルート化がうらやましい。Apple による更新や削除を防げるのかと質問。
  - **aseipp**: セキュアブートの連鎖を覆すには SecureROM 攻撃などが必要なので、ほぼ無理だろうと回答。
  - **drum55**: 動画の内容から、これはブートROMではなくユーザーランドの攻撃で、更新しないよう勧めているのもそれを裏付けると推測。
- **aemoron**: iOS はなぜ PDF で突破されるのか。Pegasus の ForcedEntry を想起すると指摘。
  - **creata**: 問題は PDF 後のアプリサンドボックス脱出だと返信。
- **paxy**: 「ハックされた」iPhone の方が、Apple 公認の自分の端末よりできることが多くて悔しいと発言。
  - **Zak**: 自分の端末を自由にハックするのは支持するが、PDF を開かせるだけで他人に乗っ取られるのは反対だと返信。

## 3. [Around a dozen banking apps began specifically permitting GrapheneOS](https://grapheneos.social/@GrapheneOS/117492375462459244)

**Score:** 407 | **Comments:** 135 | [Post](https://news.ycombinator.com/item?id=50217495)

GrapheneOS の公式投稿。銀行アプリの大半は GrapheneOS で動くが、メモリ破壊バグや不適切な改ざん対策のため、アプリ別の互換モードが必要なことが多い。約 10% は Google 非承認 OS を禁止している。約 12 の銀行アプリが Google 承認 OS に加えて GrapheneOS も明示的に許可し始め、この数は増えているという。

### Key Discussion Points

- **Arch-TK**: 銀行はアプリを前提にせず、Web とハードウェアトークンでの管理を残すべきだと主張。
  - **oneplane**: 多くの人は利便性のためにアプリを使う、と返信。
  - **louthy**: アプリは便利さのためのもので、Web も使えるべきだが、アプリ自体は多くの人に有用と返信。
- **NotPractical**: 「GrapheneOS」は公式ビルドのことで、自前ビルドはリモートアテステーションのため使えないと補足。
- **edent**: 英国の銀行の対応は4種類に分かれる。ルート化端末の被害の返金責任を考えれば、禁止する銀行を責めにくいと述べた。
  - **Zak**: 非公認 OS が不正被害の増加に結びつく証拠がない以上、締め出しは責められるべきだと返信。
- **ronsor**: セキュリティを掲げるアプリ自体にメモリ破壊バグがあるのは皮肉だと指摘。
  - **przmk**: 実際のセキュリティよりコンプライアンスのチェック項目を満たすことが目的だからだ、と返信。
- **left-struck**: リンク先はSNSの返信で、12行の一覧がない投稿だと不満を述べた。

## 4. [OBS Studio 33](https://github.com/obsproject/obs-studio/releases/tag/33.0.0)

**Score:** 332 | **Comments:** 106 | [Post](https://news.ycombinator.com/item?id=50218430)

OBS Studio 33.0.0 では、ブラウザソース用の CEF が 127 から 150 に更新された。プラグインの読み込みの仕組みが刷新され、旧パスは 34.0 まで使える。プレビューのスナップ表示の改善、Arm64 での NVENC、音声モニタリングのホットキーなども加わった。Ubuntu 24.04 のサポートは終了した。

### Key Discussion Points

- **schrodingersket**: 2台のゲーム機と古いデスクトップを HDMI キャプチャ経由で OBS のプレビューに流す自宅環境が快適だと紹介。
  - **prmoustache**: 設定が変わらない用途なら ffplay のような軽いツールで十分だと返信。
- **NamTaf**: OBS と組み合わせて使える VDO.ninja を紹介。ブラウザで低遅延の映像を送れ、スマホをウェブカメラにする用途などに便利だという。
- **jimmydorry**: CEF の更新を歓迎。古い CEF を突く Twitch チャット経由の RCE が実際に悪用されていた。
  - **wizardcm**: RCE は、チャット入力を適切にサニタイズしていないバイブコーディング製のウェブチャットオーバーレイが前提だったので、影響は限定的だと補足。
- **MichaelDickens**: 長い間「OBS」は画面共有ソフトの総称だと思っていたと発言。

## 5. [Google illegally cut down 250K trees in Finland for data center](https://nypost.com/2026/10/24/business/google-illegally-tore-down-250k-trees-for-finland-data-center-infuriating-locals-report/)

**Score:** 192 | **Comments:** 94 | [Post](https://news.ycombinator.com/item?id=50221676)

NY Post が The Guardian の報道を元に、Google がフィンランド北部ムホスでデータセンター用地として約 816 エーカー、推定 25 万本の木を違法に伐採したと伝えた。フィンランドの法律が求める環境影響評価が完了する前に整地を進めたとされる。当局は Google の2か所のデータセンターの開発を停止し、環境影響を調べている。伐採で野生動物の生息地が失われ、オオカミが村に出るようになったと地元住民は訴えている（Wayback のスナップショットに基づく）。

### Key Discussion Points

- **semiquaver**: NY Post は出典にすべきではないとし、元の Guardian の報道を紹介。
  - **tempest_**: 2026年の人々が触れるジャーナリズムはこのようなものだ、と反論。
- **WarmWash**: 実際は契約業者が、工業地域に再区画された人工林の伐採許可を取らなかっただけの小さな話だと批判。
  - **fsloth**: 問題は法で義務づけられた環境評価の前に伐採したことで、国内で大きな怒りを呼んでいると反論。
  - **edhelas**: 環境問題を気にしない人が HN に多いと指摘。
- **designerarvid**: 林業では本数ではなくヘクタールで測るのが普通だと指摘。ただし Google は法令を守るべきだと述べた。
- **atombender**: リンクを Guardian の記事に差し替えるよう要望した。
  - **xnx**: この話題は過去にも HN に出ていると返信。

## 6. [I Don't Understand Quantum Physics (2018)](https://www.southampton.ac.uk/~doug/quantum_physics/index.html)

**Score:** 189 | **Comments:** 129 | [Post](https://news.ycombinator.com/item?id=50219666)

Douglas Ross による量子物理の入門書の目次ページ。古典物理や波と粒子の二重性から、不確定性原理、重ね合わせ、波動関数の崩壊、解釈問題までを PDF の各章で扱う。専門家でない読者向けの内容と思われ、最後は「量子物理は正しく完全か」という問いで締めくくられる。

### Key Discussion Points

- **the-mitr**: Tarasov『Basic Concepts of Quantum Mechanics』を紹介。古典物理学者との対話が啓発的だという。
- **dbvdh**: 著者が多世界解釈を受け入れがたいとする点を引用。
  - **dualvariable**: 多世界解釈では、世界は生死に二分されるだけでなく、複素係数付きの重ね合わせすべてに分かれると補足。
  - **red75prime**: 自分のコピーが複数いる状況では、ボルン則の意味づけが難しくなる、と指摘。
- **bobvanluijt**: 量子過程を図で表す Bob Coecke『Picturing Quantum Processes』を推薦。
  - **yboris**: PDF 全文へのリンクを共有した。
- **asystole**: 独学向けに『QFT for the Gifted Amateur』を紹介。
  - **ktallett**: 良書だが、学部レベルの数学と物理の事前知識が必要だと補足。
- **boltzmann64**: 量子力学は「モデル」であり、適用範囲と数学を理解して使うものだと論じた。
  - **fsh**: 脳と違い、量子力学は単純な系でも奇妙だと反論。

## 7. [Physicists trap a single antimatter particle for a month](https://www.scientificamerican.com/article/physicists-trap-a-single-antimatter-particle-for-a-month/)

**Score:** 172 | **Comments:** 57 | [Post](https://news.ycombinator.com/item?id=50186450)

Northwestern 大学の Gerald Gabrielse らが、反物質である陽電子 1 個を 1 か月間トラップした。ナトリウム22から作った陽電子を冷却して極低温の真空に導き、電場と磁場で閉じ込めた。方法としては無期限の保持も可能だという。電子との磁気モーメントの比較を通して、宇宙に反物質より物質が多い理由に迫ることを目指す。

### Key Discussion Points

- **nickpinkston**: 天然の反物質を磁石の配列で捕らえる構想があり、ナノグラム〜マイクログラムでも高比推力の推進系を作れるらしいと紹介。
- **fsh**: 電子の磁気モーメントは 13 桁の精度で測られている。陽電子は 1987 年以来測られておらず、新しいトラップで同じ精度に迫れると解説。
- **foobarbecue**: なぜ 1 個だと分かるのか疑問に思ったが、論文に説明があると追記。
  - **gus_massa**: 軸方向振動を共鳴で測って個数を決める箇所を引用。
  - **sandworm101**: 解放して消滅の光子を検出すればよいのでは、と推測。
- **bilsbie**: 反陽子が水素原子に当たったらどうなるかと質問。
  - **retrac**: 対消滅して最終的に光子になる、と回答。

## 8. [Node2Shell evolves to HTTP2Shell, blast radius affects many HTTP libs and apps](https://www.aikido.dev/blog/python-packages-vulnerable-node2shell-brotli-cve-2026-111497)

**Score:** 137 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=50219177)

CVE-2026-111497（Node2Shell）は Google の Brotli デコーダの境界外書き込みで、CVSS v4.0 は 9.2、影響は 1.0.3〜1.2.0。Node.js、Python の Brotli / brotlicffi、curl、Bun、Envoy、Istio などに及ぶ。細工した Brotli ストリームで、認証なしに、クライアントでもサーバーでもメモリ破壊からコード実行まで起こり得る。修正版は Brotli 1.2.1 など。未対応なら Brotli デコードの無効化を勧めている。

### Key Discussion Points

- **netsharc**: HTTP2Shell という名前は実際の問題を表しておらず、無意味だと批判。
- **pimterry**: 同じ脆弱性の Broccoli2Shell という名前とサイトのほうが良いと紹介。HTTP を使わず Brotli を手動でデコードする場合にも当たり得るという。
- **Rapzid**: 2月に報告・修正されていたのに、今まで重大と認識されなかった経緯を疑問視。
- **semiquaver**: TLS を終端する ELB の背後にある Node.js アプリは、ELB が伸長を処理するため影響を受けないのかと質問。
- **nairboon**: Brotli2Shell の方が適切な名前だと意見。

## 9. [TornadoVM 7 Enables GPU-Native Workloads from Java Applications](https://www.infoq.com/news/2026/10/tornadovm-7-gpu/)

**Score:** 42 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50192975)

Java からデータ並列処理を GPU や CPU で実行するフレームワーク TornadoVM の 7.x の紹介。JNI を Foreign Function & Memory API に置き換え、JVMCI 依存を外した。cuBLAS や CUTLASS を呼べる最適化 CUDA バックエンドとマルチ GPU にも対応する。Java 製の AI 推論エンジン jitLLM v2.0 も発表された。

### Key Discussion Points

- **mikepapadim**: GitHub リポジトリを紹介。
- **the_arun**: Java で AI 基盤を作れるようになるのか、と質問。
- **amir734jj**: 要するに Java 版の JAX だと表現。

## 10. [FreeDNS](https://freedns.afraid.org/)

**Score:** 8 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50222133)

freedns.afraid.org は、無料と有料の DNS ホスティングを提供するサービス。サブドメイン提供、ダイナミック DNS、バックアップ DNS、IPv6 の逆引き、URL リダイレクトなどを備え、共有ドメインに接続することもできる。

### Key Discussion Points

- **esher**: 無料枠の利用者で、ホスティング基盤の DNS 設定のテストに使っている。露出が増えて有料顧客が増えればいいと述べた。

## Trends

- **セキュリティ**: iPhone への攻撃デモ、Brotli の重大脆弱性、OBS の CEF 更新（Twitch チャット経由の RCE の背景）と、攻撃面の広さが目立った。
- **AI**: Kimi K3.1 Pro では、ベンチマーク、コスト、サイバーデータ除外の是非が議論された。
- **プラットフォームの囲い込み**: GrapheneOS と銀行アプリのように、端末の自由と認証の要件が衝突している。
- **科学**: 陽電子の長期トラップと量子物理の入門書が、技術寄りの話題の中で注目を集めた。
