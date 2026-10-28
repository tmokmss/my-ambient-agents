---
title: "Hacker News トップ10 (2026-10-28)"
date: "2026-10-28T05:20"
category: "summary"
summary: "Ghostty 1.4、DeepMind Genie 4、オフライン版Survival LLM、Tailscale SSH脆弱性対応など HN 上位10件の要約"
tags: ["hackernews", "ghostty", "genie-4", "tailscale", "llm"]
---

## 1. [Ghostty 1.4](https://ghostty.org/docs/install/release-notes/1-4-0)

**Score:** 872 | **Comments:** 275 | [Post](https://news.ycombinator.com/item?id=50261998)

ターミナルエミュレータ Ghostty の 1.4 リリース。Kitty グラフィックスのアニメーション・相対配置対応、スクロールバック圧縮によるメモリ使用量70〜90%削減、macOS での pty I/O スループット25〜55%向上、GTK の新レンダラー、Kitty クリップボードプロトコル (OSC 5522)、`ghostty +ssh` などを追加。`copy-on-select` の仕様変更（macOS の既定が `none`）や GTK 4.18 / libadwaita 1.7 要件といった破壊的変更もある。

### Key Discussion Points

- **mitchellh**（作者）: GUI のリリースノートだが、組み込み可能なターミナルエミュレーションコア libghostty の進展を強調。GUI 単体よりも再利用可能なコアのほうが開発者世界に資すると考えている。
  - **why-el**: 作者がブログで「LLM ではなく自分で書いた」と繰り返し断っているが、全文を読んだと伝えた。
  - **sho_hn**: KDE プロジェクトの一員として、保守負担を減らすため libghostty-vt ベースの新フロントエンドを開発中で、体験は良好と報告。
- **jaywcarman**: Kitty の hints mode がなくて Kitty から移行できない。関連 Discussion を追っている。
  - **Graziano_M**: 設計の合意が取れず議論が止まっていると見ており、自前フォークで quick select を維持している。
  - **nullwarp**: hints mode を知らなかったと驚き、使ってみるとコメント。
- **cassianoleal**: Konsole のほうが速く、Ghostty/Kitty/WezTerm の意義が分からない。欲しいのは tmux -CC 統合。
  - **sho_hn**: Konsole は成熟しているが、Qt Quick 時代の機能面などで年季による限界があると説明。
  - **reissbaker**: Konsole は既定で OSC8 リンクが無効なため、CLI 側でフォールバックが必要になると指摘。
- **eclipticplane**: 検索ボックスが `⌘+F, ⌘+V` のショートカットを受け付けない不具合が未修正。
  - **zhvihti**: 自分のフォークに修正があると共有。
  - **dclinephx**: 今回のリリースに入ることを期待していたと同調。
- **jwr**: Ghostty を高く評価。libghostty を使う Emacs の ghostel も素晴らしい。

## 2. [Genie 4](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/)

**Score:** 805 | **Comments:** 489 | [Post](https://news.ycombinator.com/item?id=50261319)

Google DeepMind の新世代ワールドモデル。映像・環境音・音楽・対話をネイティブマルチモーダルでリアルタイム生成し、自然言語で天候やカメラ、オブジェクトを操作できる。物理挙動も扱うが、長時間セッションでの視覚的ドリフトやオブジェクト永続性には限界があると明記されている。信頼できるテスターへの研究プレビューで、Google AI Ultra や Gemini API への展開を予定している。

### Key Discussion Points

- **inkcapmushroom**: 画面外に出て戻ると、城が増える、人物が変わる、バイクの運転者がヘルメットを被るなど細部が変わる。一貫性は画面内にあるものに限られ、強い世界シミュレーションとは言えないのでは。
  - **cvoss**: 描画範囲に閉じたシミュレーションのようで、計算量を増やせば視点中心の球面で描く一般化も可能だろうと推測。
  - **rao-v**: 更新可能な世界状態を裏に持たせ、拡散モデルでゼロから作らない設計にすべきではないか。
- **recursive**: 「サックス」を指示したのにクラリネットの音だった。
  - **ghurtado**: 消音で見ても指がほとんど動かず違和感があった。
- **ajjenkins**: 魔法の杖→孔雀→猫の例は、写実的にと念押ししたプロンプトでもゲーム風の映像になっている。
  - **avinoth**: 学習データの魔法の杖がゲーム由来だからでは。
- **SXX**: Tencent の HY-World 2.0（オープンウェイト）があまり注目されないのが意外。
  - **danpalmer**: デモを見る限り水準が違うと反論。
- **daniel31x13**: Sam Altman の「映画はゲームになる」という2024年の発言を想起。
  - **captainclam**: 映画がゲームになるという言い方に反発。
  - **sottol**: 行き着く先は広告が増えることだと皮肉。

## 3. [Survival LLM: AI assistant and emergency library that runs on your own computer](https://www.brangus.io/survival-llm)

**Score:** 259 | **Comments:** 120 | [Post](https://news.ycombinator.com/item?id=50264853)

Mac / Windows 上で完全オフライン動作する無料のオープンソース緊急用アシスタント。初回セットアップ後はネット不要で、メモリに応じたモデルを自動選択する。約93万件の Wikipedia 記事、医療資料、FEMA/CDC ガイダンス、サバイバルマニュアルなどを収録し、自分のファイルも検索できる。回答時に参照記事を示すが、小型モデルは誤りが多く、出典確認を推奨している。

### Key Discussion Points

- **x3haloed**: ハルシネーション懸念は過剰。LLM を信頼する対象ではなく、文字列一致→意味検索→検索知能という検索技術として使えば安全。
  - **macNchz**: GitHub の README にもハルシネーションした出典が出ると書かれている。
  - **ASalazarMX**: プロンプトが拙くても有益な返答が得られ、改善点も学べる点が LLM の強み。
- **jvanderbot**: 同種の Project Nomad を紹介。設定済みで任意のローカル LLM を使える。
  - **KiwiJohnno**: Linux 上の Nomad から Mac 上の qwen を使えるか質問。
- **wanderingbit**: 弓ぎり式の火起こしを質問したところ、弓を使う点を落とした誤答だった。
  - **jmuguy**: 出典は提示されたのか、と質問。
- **rnd0**: ハルシネーションとハード要件を考えれば、LLM なしで検索できる Kiwix のようなローカルアーカイブで十分では。
  - **nico**: LLM+チャットは知識への優れたインターフェースになる。
  - **ASalazarMX**: 両方あればよい。
- **vektormemory**: ガードレールと小型の埋め込みモデルを用意すれば大きなモデルは不要。

## 4. [Tailscale SSH: Investigation and remediation update](https://tailscale.com/ssh-investigation-update)

**Score:** 245 | **Comments:** 124 | [Post](https://news.ycombinator.com/item?id=50264857)

Tailscale が Tailscale SSH の脆弱性を外部専門家と調査中と報告。多くは権限昇格で、接続を許可された利用者が設定済みローカルユーザーの権限を超えて動ける可能性がある。大半の修正は実装済みで、パッチ版クライアントを10月27日中の公開を目標にテスト中。暫定策は SSH アクセスポリシーの見直しと、不要なら `TS_SSH_DISABLE_FORWARDING=1` での SSH フォワーディング無効化。全員が Tailscale SSH を無効にすることは推奨していない。

### Key Discussion Points

- **minimaltom**（元 Tailscale 社員）: ACL で SSH を許可しつつ root/sudo への経路を与えない構成にのみ影響し、SSH 権限のない者は影響を受けないと分析。
  - **whywhywhywhy**: 「tailworm」という呼称は注目を集めるための煽りでは。
  - **dennysora-main**: SSH だけに Tailscale を使う人も多く、サーバー制御に直結するため影響は大きい。
- **rietta**: 標準の OpenSSH を使い続けてよかった。
  - **speedstyle**: 許可済みユーザーが想定以上のアクセスを得る問題だと整理。
  - **minimaltom**: OpenSSH の攻撃面と保守者への信頼のほうが好ましい。
- **andix**: Tailscale にサービス認証まで任せるのは単一障害点になり得る。
- **aborsy**: 機能とコードが多すぎて OpenVPN を超える規模では。接続性だけの「ロックダウンモード」が欲しい。
  - **ctippett**: Taildrop は自分のデバイス間でしか動かないと補足。
  - **drdexebtjl**: 機能を絞った代替製品を知りたい。
- **redmalang**: LLM が derp などを展開・管理できる tailgate を紹介。

## 5. [Early progress on accelerating drug development with Claude](https://www.anthropic.com/research/early-progress-drug-development)

**Score:** 185 | **Comments:** 166 | [Post](https://news.ycombinator.com/item?id=50265609)

Anthropic のライフサイエンスチームが、パートナー6社と自社プログラムでの Claude 活用の初期成果を報告。Generate Biomedicines では約70%短い CAR-T 設計を提案し、BigHat では約1,010変異体の試験で結合が10倍以上強い候補を得た。Enveda では1,061ページの製造文書レビュー時間を89%削減した。成果は主に前臨床段階とされる。

### Key Discussion Points

- **helsinkiandrew**: 分子設計は創薬全体の10〜20%の労力で、ボトルネックは他にある。
  - **foobiekr**: 3Dプリント住宅のように最適化する価値がない領域になりかねない。
- **orthogonal_cube**: 新薬の研究加速は期待する用途。
  - **jrowen**: 数学やソフトと違い机上で完結せず、エージェントに任せれば解決とはならない。
  - **lukan**: 自社に都合のよい内容。AI による医学進歩には楽観的だが Anthropic には懐疑的。
- **gumby**（元創薬研究者）: 候補化合物の提案は最も易しい工程で、AI の適用は1960年代からの目標。
  - **avilay**: 難しいのはヒト試験と承認取得か、と質問。
  - **bahmboo**: 記事は多様な工程全体を挙げていると指摘。
- **adamredwoods**: 希少疾患の当事者。マウス試験や治験は時間がかかり、進展には慎重。
  - **10111001**: 機能しないなら問題は別の所にある。
- **yewenjie**: 数学のような飛躍的進歩が生物学で起きていないのは現実世界の制約のため。
  - **ungovernableCat**: 数学は抽象的で形式化されているが、生物学はその逆。
  - **dennysora-main**: 倫理や責任など人間側の制約も大きい。

## 6. [Ink droplets in motion snag top prize in Nikon Small World contest](https://arstechnica.com/science/2026/10/meet-the-2026-winner-of-nikons-small-world-photomicrography-contest/)

**Score:** 143 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50234796)

Nikon Small World 顕微鏡写真コンテスト2026の最優秀賞は、動くインク滴を捉えた作品。（Ars Technica は取得できなかったため、コメントに基づく要約。）

### Key Discussion Points

- **yhjc2692**: 3位の「拡大した（expanded）マウス脳のニューロン」も見事で、脳の内部がこうなっているとは知らなかった。
- **landonxjames**: 受賞者 Ole Bielfeldt の撮影装置の動画を紹介。
- **doctorzook**: 2位のハエトリグモの花粉付き写真が一番好き。
- **King-Aaron**: 最初は本物と信じられなかったほど異世界的。
- **erickhill**: 最近あちこちでこの写真を見かける。

## 7. [Git for US Legislation](https://lexifina.com/blog/git-for-the-us-code)

**Score:** 135 | **Comments:** 67 | [Post](https://news.ycombinator.com/item?id=50268380)

米国法典のセクションごとに、指定日の有効条文、どの公法が変更したか、発効日を示す Git 風のバージョン履歴システムの紹介。2017年以降の公法の修正指示を再適用して公式の次回リリースと照合したところ、9つのタイトルの365変更のうち361件が完全一致した。遡及適用の扱いなど既知の制限があり、重要な用途では原文を参照するよう促している。

### Key Discussion Points

- **kfogel**: 2007年の NYT が、バージョン管理で誰がどの修正を入れたか透明化できると論じていたと紹介。
- **demibabs**: アイデアは良いが、AI 生成風の文章は読みにくい。
- **pcblues**: オーストラリアで議員ごとの投票を追う方法を探した経験を語り、AI で容易になるかもしれないとした。
- **TomAbel**: フランス法を git で扱う La Fabrique de la Loi を紹介。
- **Ericson2314**: 法改正顧問室に米国法典全履歴のリポジトリ維持を義務づけるよう働きかけるべき。

## 8. [Raspberry Pi Zero 3W and Pi 4 Model A spotted in device trees](https://bret.dk/raspberry-pi-zero-3-w-pi-4-model-a/)

**Score:** 128 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=50265594)

Raspberry Pi の Linux カーネルツリーに未発表の2ボードのデバイスツリーが登場。Zero 3 W は Zero 2 W の Cortex-A53 から Pi 4 と同じ BCM2711（Cortex-A72）になるとみられる。Pi 4 Model A は Ethernet なし・HDMI 1系統・microSD のみの従来のパターンで、外部アンテナ切替の記述もある。RAM、価格、発売日は不明で、最終製品が異なる可能性がある。

### Key Discussion Points

- **bArray**: 子どもでも気軽に試せる低価格を維持してほしい。
- **edg5000**: Pi 4 系の Wi-Fi チップ CYW43455 は負荷時にクラッシュし、カーネルで直せない不安定な設計だと主張。
- **jacquesm**: Zero 2 W のアンテナ性能に不満。基板の改造で外部コネクタを付けられる。
- **dofm**: USB-C ガジェットモード対応と1GB RAM なら非常によく売れるはず。
- **wolvoleo**: Zero にようやく USB-C が来てほしい。

## 9. [Assembly Nights](https://ratfactor.com/assembly-nights)

**Score:** 35 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=50230896)

Dave Gauer が、子どもを寝かせた後に14年前の Asus eeePC 701（Alpine Linux）で x86 アセンブリを学ぶ習慣を紹介。JonesForth（GAS）を NASM に移植中で、AT&T 構文とマクロの翻訳に数週間かかっている。締切で焦ったため、ここまで訳した命令を全て検証し直す方針に切り替え、完成よりも学びを重視している。

### Key Discussion Points

- **WalterGR**: リンク切れだった AT&T 構文批判記事の archive.org ミラーを共有。
- **hn_submit**: NASM と FASM のどちらを選ぶ理由があるのか。
- **cellsstudio**: Claude/Codex の利用で技能が衰えたと感じ、基本に戻る良い方法だと評価。
- **userbinator**: GDB でアセンブリをデバッグするのはなかなかの選択だ。

## 10. [A Love Letter to the Super Dimension Fortress](https://brennan.day/a-love-letter-to-the-super-dimension-fortress/)

**Score:** 31 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50219275)

1987年にアニメファン向け BBS として始まり、『超時空要塞マクロス』に因んで名付けられた非営利の公共 UNIX システム SDF への賛辞。NetBSD 上で会員の寄付で運営され、シェル、Gopher/Gemini 領域、IRC、Mastodon、TOPS-20 などを提供する。Perl CGI ゲストブックの作り方や、Dillo で動く軽量デザインにも触れ、不要な装飾を排した設計を称揚している。

### Key Discussion Points

- **dreadsword**: マクロスの話が思ったより少なかった。
- **kenferry**: 1987年にアニメ好きの BBS 運営者がいたことに驚く。
- **Razengan**: アニメの話ではなく名前の由来だと知った。新しいメカ作品が恋しい。

## Trends

- **AI の応用領域の広がりと懐疑**: Genie 4（世界モデル）、創薬での Claude、ローカル LLM のサバイバル支援と、AI の実用化が並ぶ。コメントでは物体永続性、創薬の真のボトルネック、ハルシネーションなど、限界を指摘する声が強い。
- **セキュリティと依存の問題**: Tailscale SSH の権限昇格問題を受け、多機能なネットワーク製品の攻撃面や OpenSSH との比較が議論された。
- **開発者ツールとハードウェアの進化**: Ghostty 1.4 と libghostty の再利用性、Raspberry Pi 新ボードの噂は、ツールとハードの基盤技術への関心を示す。
- **小さく手作りの計算機文化**: Assembly Nights と SDF は、シンプルさや自分で作る学びを重んじる姿勢で共通する。
