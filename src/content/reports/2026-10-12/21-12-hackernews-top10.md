---
title: "Hacker News トップ10 ダイジェスト 2026-10-12"
date: "2026-10-12T21:12"
category: "summary"
summary: "Meta Muse Wonder、GLM-Legal、Codex CLI の常駐デーモン問題、欧州スーパーの冷蔵庫サイバー攻撃など HN 上位10件を要約"
tags: ["hackernews", "ai", "security", "summary"]
---

## 1. [Muse Wonder](https://research.meta.ai/blog/muse-wonder)

**Score:** 431 | **Comments:** 213 | [Post](https://news.ycombinator.com/item?id=50059115)

Meta が個人・業務向けエージェントタスクで最強と位置づけるモデル群 Muse Wonder / Muse Wonder Full を発表した。関連コンテキストを保持・検索する Active Memory と、難しい目標を追い続ける Active Focus を備え、ベースモデルの大型化により各分野・コーディング・未知タスクで高性能とされる。安全性レポートは後日公開予定。

### Key Discussion Points

- **ekojs**: React・Node・Rust での実開発タスクを試したところ、Astra / Opus 5.5 / Fable よりは一段下という第一印象。
- **atleastoptimal**: フロンティアに近い企業が複数あるほうが、再帰的自己改善時の権力集中を避けられるとして歓迎。
  - **weknowbetter**: 再帰的自己改善が不可避であるかのような前提だと指摘。
  - **vrganj**: 労働が不要になる時点で、どのみち権力は少数に集中すると悲観。
- **pmuse**: Muse Code のサイトで Meta アカウントにログインしようとすると、見知らぬ他人のプロフィールが候補に出たと報告。
  - **ma2046**: 通常の Meta/Facebook 系ログイン UI の挙動ではないかと説明。
- **jjcm**: 画像→HTML テストでは Opus 5.5 よりかなり劣り、Sonnet や Haiku 相当と評価。
  - **niek_pas**: 比較対象が Wonder か、Opus 5.5 に近いとされる Wonder Full かを質問。
- **simonw**: Pelican 生成の結果はなかなか良好と共有。
  - **timdorr**: Wonder Full や max 設定での結果も見たいと要望。

## 2. [GLM-Legal](https://z.ai/blog/glm-legal)

**Score:** 339 | **Comments:** 182 | [Post](https://news.ycombinator.com/item?id=50058507)

Z.ai による法務特化の GLM モデルの発表。記事本文は取得できず、コメントから推測すると、法務ベンチマークで性能を示す内容とみられる（本文未取得のためコメントに基づく要約）。

### Key Discussion Points

- **jedberg**: ベンチマークを「定型タスク」と「新規タスク」に分けて見たい。ベンダー契約のレッドライン等は毎回ほぼ同じ指摘になる。
  - **properbrew**: LLM は新人やパラリーガルに任せる定型業務に向くのはどの業界でも同じ。
  - **xhevahir**: 弁護士が内容を確認せず「問題なし」とするだけだった経験を語る。
- **mattfrommars**: リーガルテックに参入したいが、すでに評価額数十億ドルのスタートアップが多く遅いのではと懸念。
- **victor9000**: 法務向けツールは必要。Anthropic の新ポリシーが法的権利に影響する用途を制限している点を挙げる。
  - **gr_norm**: Anthropic のパターナリズムが不快で、製品を購入しないと主張。
  - **ChadNauseam**: 制限は完全自律で人間の判断を置き換える用途に関するものではと疑問を呈す。
- **fireflysentinel**: Z.ai がプロンプトごとにワークスペース全体をスナップショットしていた件を想起させる。
  - **gpt5**: なぜその件が HN で大きく取り上げられなかったのかと驚く。
- **Geof25**: 怠惰な弁護士に悩まされてきた立場から歓迎。当初は粗いが、法務の9割はやがて十分な品質になると期待。

## 3. [Codex CLI installs a persistent, self-updating background daemon by default](https://github.com/openai/codex/issues/48195)

**Score:** 326 | **Comments:** 194 | [Post](https://news.ycombinator.com/item?id=50060694)

Codex CLI 0.157.0 以降、対話セッション開始時に、ウィンドウを閉じても残る常駐デーモンが既定で起動する。プラットフォームパッケージ全体をコピーし、デタッチされたアップデータがバックエンドを再起動し得て、起動したセッションの環境変数（proxy や作業ディレクトリ）を保持し続ける。`daemon_auto_start` をオプトインにすること、最後のクライアント切断で終了すること、パッケージマネージャ経由のインストールでは自己更新しないことが提案されている。

### Key Discussion Points

- **whimblepop**: 文書化された設定はないが、`~/.codex/config.toml` の `[features]` で `daemon_auto_start = false` にすれば無効化できる。
  - **pilooch**: 既定オフにすべき。デーモンはカスタムハーネス開発では有用。
  - **Twirrim**: デーモンが起動を拒否して Codex が警告を出し、出所に気づいた。
- **dllu**: 自動更新中に権限が壊れ .git が読み取り専用になるなど、バグが多く信頼できない。
  - **selfmodruntime**: アプリでは「New Chat」や「Scheduled Tasks」すら押せないことがある。
  - **kristjansson**: CLI はアプリよりかなり安定している。
- **icantevenhold**: 古いバージョンが溜まり合計約12GBのディスクを消費していた。
  - **InsideOutSanta**: どのハーネスも後片付けが下手で、毎日 LLM に掃除させている。
  - **umvi**: コンパイル言語で書かれた肥大化しないハーネスを期待。
- **reacharavindh**: 最小ツールの hax というハーネス＋bash で数か月使い、過剰設計のものより快適。
  - **agentdev001**: 「ツールが存在する」の解釈に関する用語上の補足。
- **vardalab**: LLM にハーネス自体を改造させ、デーモンを回避するランチャーを作った。

## 4. [A Modern Web App in C](https://prophitt.me/writing/a-modern-web-app-in-c)

**Score:** 281 | **Comments:** 115 | [Post](https://news.ycombinator.com/item?id=50058528)

著者は、ユーザーアカウント、Stripe 決済、Postmark メールを備えた商用 Web アプリ marketyour.games を、OpenBSD 上の CGI 経由で動く単一の C バイナリとして構築した。モダンなカーネルでは fork が安価になり、SQLite や少ない依存関係の利点もあるため、CGI が廃れた理由は今や当てはまらないと主張する。フレームワークがないため cookie・パース・エスケープ等のユーティリティは自作が必要で、cgi.h ヘッダの公開で補うとしている。

### Key Discussion Points

- **creatonez**: CGI プロセスが毎リクエスト SQLite を開くなら競合が激しくならないかと懸念。
- **ramses0**: busybox に cgi-bin 対応が内蔵されている豆知識を紹介。
  - **rpdillon**: 自分も `busybox httpd` で cgi-bin を試して同様の体験をした。
- **OleksandrC**: クライアントを Emscripten で WASM 化し、サーバーも C++（nginx 背後）という自作ゲームを紹介。
  - **hughw**: 美しいと称賛。
- **assimpleaspossi**: 22年前に FastCGI と C で同様の Web 開発会社を興した経験を共有。
  - **glouwbug**: 2005年頃の話で、ずいぶん昔に感じると反応。
- **Levitating**: CGI は優れているが nginx がネイティブ非対応なのは残念で、lighttpd は対応している。
  - **synergy20**: lighttpd を使っている。
  - **huijzer**: Caddy はコミュニティプラグインで対応と補足。

## 5. [Hackers activate automatic defrosting in supermarket fridges across Europe](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident)

**Score:** 278 | **Comments:** 508 | [Post](https://news.ycombinator.com/item?id=50055304)

欧州のスーパーで、サイバー攻撃により冷蔵設備の自動霜取りが作動させられ、配送や店頭価格にも影響が出たと報じられている。投稿者は仏スーパーのIntermarché（約150店舗が標的）に関する Reuters 記事も添えている。取得できたのは記事冒頭のみで、詳細は未確認。

### Key Discussion Points

- **9x39**: Danfoss SM800（2021年サポート終了）や SC355（2016年終了）といった15〜20年前の制御機器が疑われている。更新しないのは利益率の問題。
  - **m4x**: 産業制御の更新は重大な作業で、現場の事情はそう単純ではない。
  - **jdiez17**: 現実の多くの企業の事情から乖離したコメントが多いと同意。
- **nemomarx**: 8月に該当する Danfoss 冷凍機器の脆弱性が公開されていたと指摘（Claroty の調査）。
- **chromaton**: 2008年に店舗制御に関わった経験から、エネルギー管理のためにネット接続と遠隔制御が必要とされてきたと説明。
  - **drillsteps5**: センサーとアクチュエーターは別物で、アクチュエーターのネット接続は慎重にすべき。
  - **deepsun**: 管理者が電話や来店で対応できるのに、人件費削減が目的だと指摘。
- **renyicircle**: 遠隔診断による節約を謳う業界資料を引用。
  - **jandrewrogers**: 食品ロス削減のため供給網全体が組込センサーで連携している。
  - **rich_sasha**: 2%の効率化を狙う企業群と VC が背景にあるとみる。
- **bronco21016**: 2026年8月末の米軍基地での類似事案との関連を示唆。
  - **snapcaster**: 同記事を連想。先物などで利益を得る者がいる可能性にも言及。

## 6. [AI coding agents generate more code, but not more software](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/)

**Score:** 223 | **Comments:** 189 | [Post](https://news.ycombinator.com/item?id=50059523)

AI コーディングエージェントはコード量を増やすが、出荷されるソフトウェアは増えていないとする研究の報道。本文は取得できず、コメントからの推測では、ボトルネックがコードレビューに移っているという趣旨とみられる。

### Key Discussion Points

- **staminade**: 研究は2026年3月時点だが実務経験と一致。コードレビューは元々ボトルネックで、エージェント開発でさらに悪化。
  - **bunderbunder**: 手戻りの最大要因は、コードが誤ったものを実装していること。
  - **cyb_**: 本質は品質がボトルネックであり、レビューはそれが見える場所だという言い換え。
- **jacquesm**: 生成コードは冗長で、抽出やリファクタの機会を逃し、読みにくい。
  - **mettamage**: プロトタイプ作成には有用。
- **blauditore**: エンジン強化だけではタイヤが限界になるレース車の比喩。
  - **pjmorris**: アムダールの法則を引用。
  - **euiee**: 最難関は常に簡潔なビジョンと戦略だと述べる。
- **zmmmmm**: レビューは品質だけでなく説明責任とセキュリティのためで、自動レビューは意図の正しさまでは保証しない。
  - **fasterik**: 人間は API 設計とテストに責任を持てばよいと提案。
- **jefftk**: 学術論文は執筆時点の状況を記述するが、報道は現在の話として扱いがち。
  - **geraneum**: 研究は2026年8月に更新されている。
  - **omellet**: 更新版でもコード作成が速くなりボトルネックはレビューに移ったという同様の結果。

## 7. [Citroen revives the 2CV for an electric age](https://www.bbc.com/news/articles/c620r33plgppo)

**Score:** 218 | **Comments:** 243 | [Post](https://news.ycombinator.com/item?id=50055220)

シトロエンが名車2CVを電動車として復活させるという BBC の記事。本文は取得できず、コメントからの推測では、欧州メーカーが中国勢との競争の中でヘリテージを訴求する動きの一環とされる。

### Key Discussion Points

- **Lio**: 車重が1トン未満でクラス最軽量な点が重要で、小型バッテリーで航続距離を稼げ、道路への負荷も小さい。
  - **stetrain**: 軽量化の効果は市街地では大きいが、高速域では空気抵抗が支配的。
  - **ninalanyon**: 元の2CVは約600kgで、見た目も別物だと指摘。
- **alentred**: 公式サイトと動画があり、インフォテインメントは Radioën、キノコ型ペダルまで再現されている。
- **Waterluvian**: 威圧的でない、楽しげな見た目の車が好き。
  - **usern20260720**: 攻撃的な SUV に煽られるのは望まない。
  - **mattlondon**: 攻撃的なデザインは中国市場が求めるものと聞いたという伝聞。
- **rollulus**: ルノーのコンセプトカー R17 の復活も待っている。
- **PorciiVorbesc**: ヘリテージだけでは中国勢との競争に限界がある。
  - **detritus**: 余計な装備を省いた基本的な EV を出す新興企業が破壊的になり得る。
  - **makeitdouble**: ヘリテージは単なる流行でなく、価値提案と覚悟のシグナルだと反論。

## 8. [Turn a WiFi 7 Router into a 320Msps Software Defined Radio Receiver](https://github.com/h0m3us3r/w1700k-sdr)

**Score:** 196 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=50055593)

Gemtek W1700K（Wi-Fi 7 ルーター）の MediaTek MT7996 無線を、独自ファームウェアで最大 320 Msps・14bit IQ の広帯域 SDR 受信機にするプロジェクト。10GbE 経由でホストにストリームし、ブラウザ上にスペクトラムとウォーターフォールを表示する。2.4/5/6GHz 帯に対応し、LO は任意周波数に設定できる。

### Key Discussion Points

- **yonatan8070**: 同じ開発者は ESP32 の Wi-Fi でも SDR を作っており、一般的な Wi-Fi カードにも広がることを期待。
- **alightsoul**: 携帯の FM ラジオ利用に Samsung が契約を求めるのは、無線がソフトウェア定義だからかと疑問。
- **thebeardisred**: 同じチップセットなので Banana Pi R4 でも動く可能性が高い。
- **mikewarot**: サービスモニタの修理経験から、デスクトップ CNC や安価な基板で作れる点に感動。
  - **Eduard**: サービスモニタとは何かと質問。
  - **octoberfranklin**: なぜ4GHzなのかと質問。
- **aftbit**: 5GHz で 320 Msps 受信をこれより安く得る方法は知らないと称賛。

## 9. [Launch HN: Agent37 (YC F26) – Low-cost agent sandboxes for running agents](https://news.ycombinator.com/item?id=50059096)

**Score:** 65 | **Comments:** 46 | [Post](https://news.ycombinator.com/item?id=50059096)

AI エージェント用サンドボックスを他社の10%未満のコストで提供するスタートアップ。顧客の平均支出は1サンドボックスあたり月0.37ドルで、無料プランの実コストは1ユーザー月0.05〜0.10ドル程度という。2月に OpenClaw ラッパーとして始まり、対応ハーネスを増やしてきた。

### Key Discussion Points

- **mparis**: 競争が激しく、エンジニアが自作しがちなので価値を取りにくいと懸念。
- **alasano**: MacBook Pro 上の Android エミュレーション負荷を逃がす用途を検討。
- **MikhailTal**: サンドボックスはコモディティ化しており、価格競争だけの新規参入は得策でない。
- **pgcosta**: エージェントが cron ジョブを設定した場合、サンドボックスはどう動作するのかを質問。
- **stillpointlab**: 余った Linux 機をエージェント用プレイグラウンドにする構成を検討中。

## 10. [Writing a Demoscene Intro for the ZX Spectrum](https://www.markround.com/blog/2026/zx-spectrum-intro)

**Score:** 24 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50061859)

ZX Spectrum 向けのデモシーン・イントロ制作の体験記。本文は取得しておらず、タイトルに基づく概要のみ。

### Key Discussion Points

- **SteveGerencser**: 80年代にデモシーンが興隆した高校時代、ハードが良くなるほど最適化しなくなったプログラマー像が自分の見方を形作ったと回想。

## Trends

- **AI エージェント周辺の摩擦**: Muse Wonder、GLM-Legal といった新モデル発表に加え、Codex CLI の常駐デーモン、コーディングエージェントのレビュー律速、サンドボックスの価格競争と、ツール側の品質・運用面が議論の中心。
- **レガシー制御系のセキュリティ**: 欧州スーパー冷蔵設備への攻撃は、更新されない古い産業制御機器とネット接続の利便性のトレードオフを浮き彫りにした。
- **ハードウェア・低レイヤーの遊び心**: ルーターの SDR 化、C による CGI Web アプリ、ZX Spectrum のデモなど、制約下での工夫を楽しむ話題が上位に並んだ。
