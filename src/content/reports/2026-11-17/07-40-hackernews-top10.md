---
title: "Hacker News Top 10 (2026-11-17)"
date: "2026-11-17T07:40"
category: "summary"
summary: "CMU が CS 講義を YouTube で無料公開、Windows 11 の開発者ツール利用テレメトリ、BugMeNot 終了、Optimizely 経由のマルウェア配信など"
tags: ["hackernews", "summary", "security", "ai-agents"]
---

## 1. [Carnegie Mellon is putting computer science courses on YouTube for free](https://www.cs.cmu.edu/learn/)

**Score:** 1298 | **Comments:** 181 | [Post](https://news.ycombinator.com/item?id=50522980)

CMU の Griffin School of Computer Science が「CS Learn」を開始し、現行の CS 講義を学期まるごと YouTube で無料公開する。11月は機械学習システム（15-442）、AI Agents（11-768）、ソフトウェアアーキテクチャなどを日替わりでプレミア公開し、確率と計算（15-259）や Multimodal ML などは2027年1月に公開予定。演習付きのコースウェアや AI チューターも順次提供される予定。

### Key Discussion Points

- **pcompeau**（投稿者）: CS Learn を運営する CMU の教員。今週は毎日1コースずつ公開し、1月にさらに追加すると説明した。
  - **flowerlad**: 公開済みは入門コースが中心なので、データベース内部や分散システムなど上級コースも見たいという要望。
  - **riedel**: 講義ツールも公開されるのか、画像などの著作権はどう扱うのかを質問した（ドイツでは問題になりやすいという）。
- **JSR_FDED**: 基礎をきちんと学べば AI は強力な道具になるが、学ばなければ AI に置き換えられる、という立場。
  - **fastball**: 基礎を学んでも AI に置き換えられる、と反論した。
  - **justauserid**: LLM 時代に価値を持てる CS 学生はごく一部だと述べた。
- **fwx**: CMU の卒業生。Tianqi Chen の ML Systems が公開されるのを歓迎した。
  - **pcompeau**（投稿者）: 当面はコンピューティング系のコースに集中するが、要望は担当者に伝えると返信した。
- **ecshafer**: 講義だけでは弱く、課題と、それにフィードバックを得る仕組みが必要だと指摘した。
- **big_toast**: ライセンスはどうなっているのか（MIT OCW は CC BY-NC-SA が多い）。将来はコーディングエージェントに講義を読ませる使い方も想像できると述べた。
  - **llamafarmer**: YouTube で公開されていることと、オープンライセンスであることは別物で、再配布が制限されると指摘した。

## 2. [Windows 11 Is Collecting Data on Which Coding Agents and Developer Tools You Use](https://xusheng.dev/posts/windows-coding-agent-telemetry/)

**Score:** 519 | **Comments:** 356 | [Post](https://news.ycombinator.com/item?id=50524736)

Windows 11 の `MissionControlAggregator.dll` を逆アセンブルした調査記事。codex.exe、claude.exe、copilot.exe、cursor.exe、agy.exe、antigravity.exe などのコーディングエージェントと、node / python / dotnet / gcc / clang / gdb / code など開発ツールの利用を、既存の ETW イベント（AppStateChangeSummary、WSL の Exec など）から判定している。結果はローカルに保存され、診断データとして Microsoft に送られる。「オプションの診断データ」を無効化していない限り送信は有効で、これは既定で有効になっている。

### Key Discussion Points

- **s_dev**: 2026年の Linux はゲーミングでも十分実用的だとして、Windows からの移行を考えている。
  - **SOLAR_FIELDS**: その状況を作ったのは Valve の Proton だと評価した。
- **ashton314**: 長年の macOS ユーザーだが、開発者が Windows を使う理由はほぼなく、Linux を使うべきだと述べた。
  - **blauditore**: 開発者が Mac を選ぶのは技術的理由ではなく、威信やプレミアム感のためだという意見。
- **dead_hn_theory**: Linux への移行は1週間ほどで慣れる、と勧めた。
  - **cortesoft**: ゲーム用 PC などは Windows のままにせざるを得ない人が多く、一般論としては当てはまらないと反論した。
  - **wry_xy**: 主要3OS を日常的に使っているが、Linux は注意点なしには人に勧められないと述べた。
- **darksim905**: Microsoft が大量のテレメトリを集めているのは周知で、ETW 自体は管理者向けの診断機能でもあるため、ここまで上位に来る理由が分からないと批判した。
- **dannyw**: Intel / AMD / NVIDIA のドライバや Chrome も実行ファイル名や閲覧履歴を収集している、という比較。
  - **graemep**: Debian の popularity-contest はオプトインで匿名性が検証可能なので、同列には扱えないと指摘した。
- **herf**: Windows は AI エージェント用サンドボックス（MXC、10月7日に公開）の提供が遅く、Claude Code もまだ対応していないと述べた。

## 3. [BugMeNot has closed](https://www.bugmenot.com/)

**Score:** 482 | **Comments:** 222 | [Post](https://news.ycombinator.com/item?id=50523601)

ユーザー登録を迂回する共有ログイン情報を提供してきた BugMeNot が閉鎖された。トップページには「より良いインターネットを思い描いてくれた全ての人に感謝」とのメッセージと、暗号文のような文字列だけが表示されている。

### Key Discussion Points

- **a5seo**: 創設者2人はクーポンサイト RetailMeNot も立ち上げた。BugMeNot の高い PageRank を使って RMN を検索上位に押し上げたと説明した。
  - **RileyJames**: BugMeNot と BuiltWith は、少人数のオーストラリア発サイトとして刺激になったと同意した。
- **randomblock1**: ページに情報が乏しいので、Wikipedia のリンクを紹介した。
  - **lode**（投稿者）: 昔のインターネットの名残だった、と返した。今日も無料アカウント登録を求めるサイトに当たって必要になったという。
- **Alive-in-2025**: 使い捨てメールの代替はあるが、BugMeNot は一時アドレスを作る手間が要らない点が便利だった。
  - **njovin**: Mac のパスワード App は、サイトごとのランダムなパスワードを生成できると紹介した。
  - **ryanmerket**: Apple の匿名メール機能も、多くの媒体で使えると述べた。
- **Legend2440**: 過去5年は共有ログインがまったく通らなくなった。悪用の増加が原因ではないかと推測した。
  - **tygon**: 既知の認証情報データベースが広まり、使い捨てメールをブラックリスト化するサイトが増えたと説明した。
  - **krackers**: 小規模な掲示板などではまだ使えていた。閉鎖ではなく読み取り専用にしてほしかったという。
- **summermusic**: 人気サイトでは通らなかったが、大学が全学生共通のログインを用意しているサイトでは成功率が高かった。
- **Bluebirt**: 電子工作では、データシートや SPICE モデルがログインの裏にあることが多く、毎月使っていた。

## 4. [Optimizely compromised, served malware on Zoom, GitLab](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/)

**Score:** 279 | **Comments:** 119 | [Post](https://news.ycombinator.com/item?id=50524767)

Report URI の Scott Helme によると、2026年11月16日に Optimizely Web 実験プラットフォーム経由で、Zoom、BBC、CNN、Salesforce、GitLab、IKEA、HSBC などを含む178組織の訪問者に悪意ある JavaScript が配信された。暗号資産ウォレットアドレスの差し替え、カード情報のスキミング、Cookie・スクリーンショットの窃取を行い、iPhone / iPad には Coruna と DarkSword の iOS エクスプロイトキットも配布した。実際に暗号資産が盗まれた取引も確認されている。マルウェアの大半は既に除去済みだが、攻撃者がどうやって多数の顧客プロジェクトに書き込めたのかは未解明。

### Key Discussion Points

- **stickfigure**: Google Tag Manager はマーケ部門がエンジニアを介さずタグを追加するための仕組みで、その結果、記事1本に 10MB の JS が付いてくるようになったと述べた。
  - **jeswin**: テック業界の意思決定はコストしか見ず、リスクは考慮されないので、見直しは起きないと述べた。
  - **goalieca**: マーケ部門が毎月30個のトラッカーを入れ替えるため、CSP の導入も困難になると指摘した。
- **mcoliver**: 避けられる事故だが、有意な責任追及がなければ変わらない。Optimizely 側にクールダウンや相互チェックがあるべきだったという。
  - **noir_lord**: 企業にとってコストは「おっと」という謝罪だけだと皮肉った。
  - **friendzis**: サイト側がベンダーのスクリプトを直接配信するのではなく、自前でベンダリングして検査すべきだと述べた。
- **jdorfman**: Subresource Integrity は10年以上前から使えるので、導入すべきだと述べた。
- **skybrian**: CNN や BBC が暗号資産やカード決済を同じサイトで扱うのか疑問で、記事は説明が一段抜けていると指摘した。
  - **hn_throwaway_99**: マルウェアに何ができて何ができないかを、レポートはもっと明確にしてほしいと同意した。
- **thought-gap**: NoScript の典型的な使いどころだという意見。
  - **usr1106**: 被害サイトの多くは真面目な企業で、JS を有効にしないと使えないことが多いと反論した。
- **eax-eip**: 攻撃者が顧客プロジェクトに書き込めた経緯は、Optimizely 自身が説明すべきことだと引用した。

## 5. [OpenCode Browse](https://opencode.ai/product/browse)

**Score:** 219 | **Comments:** 116 | [Post](https://news.ycombinator.com/item?id=50523459)

OpenCode が公開した、コーディングエージェントに「本物のブラウザ」を使わせる MCP サーバーと Chromium 拡張。Chrome、Edge、Brave、Arc などのタブやログイン状態、拡張機能をそのまま使い、エージェントのタブはバックグラウンドの折りたたみグループで開く。ログインや 2FA、決済ではタブを人間に返す「ハンドオフ」があり、許可サイトの制限、スクリーンショット、タブ録画、ネットワークトラフィックの取得もできる。OpenCode、Claude Code、Cursor、Codex、Zed など任意の MCP クライアントから使える。

### Key Discussion Points

- **testtestmetest**: OpenCode は週に3プロジェクトほどを vibe coding でリリースしており、使い捨てのソフトウェアだと見ている。V2 ではセキュリティを投げ捨てており、この製品も信頼できないという。
  - **zaptheimpaler**: ハーネス内部のセキュリティ確認は権限疲れと UX の悪化を招くので、気にしないのは妥当だと反論した。
  - **gexla**: CEO の Twitter での言動に対する批判に、部分的に同意した。
- **jeremyjacob**: 機能は Playwright MCP と重なる。自分は Playwright MCP のほうを使っているという。
  - **mrdw**: Chrome 公式の chrome-devtools-mcp もあると補足した。
  - **cyanydeez**: paseo を fork して同様のものを実装し、複数ブラウザにプラグインで対応している。
- **SillyUsername**: MCP は死にゆく技術に見える。攻撃面とメンテナンス対象が増えるだけだと批判した。
  - **mickeyp**: ハーネス開発者の立場から、仕様に懐疑的な面は認めつつ反論した。
  - **jgilias**: MCP は必ずコンテキストウィンドウを通るため、合成できないと指摘した。
- **sixtyj**: 対応ブラウザに Firefox がないと指摘した。
  - **guipsp**: 拡張機能の API が違うので、単に載せていないだけではないと説明した。

## 6. [Running coding agents without handing them my credentials](https://blog.antonio.cx/running-agents-with-lend)

**Score:** 99 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=50526152)

著者は Claude Code や Codex を使い捨ての VM で動かし、SSH 鍵、1Password、ログイン済みの gh / クラウド CLI は手元のラップトップに置いている。エージェントが認証情報を要する操作をするとき、人間の承認を挟んでラップトップのツールを使わせる仕組みとして `lend` を作った。ソケットの安定化、エージェントに見せないシークレット、SSH 鍵、期限付きの「リース」、操作の履歴、ラップトップからのプロンプト応答などを備える。

### Key Discussion Points

- **rao-v**: ローカルのサンドボックスエージェントと Claude / Codex を併用する自作スタックの一部を置き換えられるか、lend を試している。
- **saagarjha**: 「AI に鍵を渡さない」ことに集中しているが、鍵が可能にする操作そのものを AI に与えているなら、あまり意味がないと批判した。
- **__MatrixMan__**: ラップトップ2台を使い、間は独自の HTTP API だけにしている。エージェントが本人として動くには API を通す必要があるという。
- **ryanczak**: Docker sandboxes にはシークレット注入の機能があると紹介した。
- **LeBit**: Nono や Smolvm も同様の機能を持ち、自分は使っている。ただし Tailscale ノードではこれらのプロキシを迂回してしまうのが難点だという。
- **blop**: fnox も候補として挙げた。sops に近く、人間の日常的な CLI 利用にも向くという。

## 7. [If an App Asks for Full Disk Access or System and App Protection Override](https://support.apple.com/en-us/149699)

**Score:** 96 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=50526560)

Apple のサポート記事。macOS 27.3 以降、バックアップ、ディスククリーナー、ファイルインデックス、セキュリティ系アプリなどが Full Disk Access や System & App Protection Override を求めたとき、すべてを許可する代わりに、特定の保護フォルダやアプリだけを選んで許可できる。全許可すると、メッセージ、メール、写真、他ユーザーのデータにまで読み書きや削除ができ、Override ではキー入力の取得も可能になる、と説明している。

### Key Discussion Points

- **gbdubs**: Apple が想定する狭いアプリ像に合わない開発者は、結局広い権限を要求し続けることになる。設計がまずいという批判。
- **postalcoder**: 良い変更だ。自分の Mac には Full Disk Access を求めるアプリが44個あるが、許可したのは8個で、残りは問題なく動くと述べた。
- **vbezhenar**: 特定フォルダを選ぶより、~/.ssh などを除外できるほうが重要だと述べた。DaisyDisk の利用例を挙げた。
- **Elseself**: ファイルシステムレベルで、アプリごとにフォルダのアクセスを許可・拒否できないのか、と疑問を呈した。
- **saagarjha**: Full Disk Access の本来の設計目的とは違う説明を Apple がしていると批判した。
- **dmitrygr**: iOS で連絡先の一部だけを WhatsApp に見せられるようになったのと同様の、正しい方向の一歩だと評価した。

## 8. [Why 3dfx 1 cards had such a washed out color output?](https://twitter.com/id_aa_carmack/status/2122478083319992513)

**Score:** 91 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50525575)

John Carmack が、初代 3dfx カードの色が白っぽく見えた理由を取り上げた投稿。twitter.com のため本文は取得できず、Wayback のスナップショットもなかった。以下はコメントからの推測で、ガンマの扱いが焦点になっているようだ。

### Key Discussion Points

- **dcrazy**: Carmack が Twitter で線形カラーブレンディングを学んでいく過程を見ていた。長年それが盲点だったことに驚いたという。
- **Dwedit**: sRGB は非線形だが、信号上では線形になる場面があるという補足を始めた。
- **nullc**: 線形空間でのリサンプルは、8ビットへの量子化でバンディングが出るなど、かえって悪化することも多いと述べた。
- **rasz**: 数値で整理した。VGA の既定ガンマは 1（線形）、3dfx は 1.5、CRT は約 2.2 で、指数を掛け合わせると 3dfx のほうが線形に近くなる。
- **cyberax**: 3D アクセラレータで Quake 2 が赤みがかって見えた経験を挙げ、理由を知りたいと質問した。

## 9. [The Fossils That Haunted Lovecraft](https://paleonerdish.wordpress.com/2026/10/30/halloween-special-xiv-the-fossils-that-haunted-lovecraft/)

**Score:** 16 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50512576)

古生物学ブログのハロウィーン特集。1923年に AMNH の中央アジア探検隊がゴビ砂漠の Flaming Cliffs で発見した「恐竜の卵」の巣と、その横にあった Oviraptor（「卵泥棒」）の骨格が、当時の報道で話題になった経緯を紹介している。この発見が Lovecraft の作品にどう影響したかを論じる。のちに Oviraptor は卵泥棒ではなかったと分かったことも書かれている。

### Key Discussion Points

- **NorrisFByrd**: 『狂気の山脈にて』を読んで、化石の側面には気づいていなかった。Lovecraft が実際の発見を元にしていたと知り納得したという。
- **protocolture**: Lovecraft は、見たことのないペンギンを「グロテスク」と書いたことでも有名だと補足した。

## 10. [Nimony: A New Compiler for Nim](https://nimony.org/)

**Score:** 8 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50512779)

Nim 3 言語の新しいコンパイラ。借用チェック、明示的な nilability、直和型、チェック付きジェネリクス、インクリメンタル・並列ビルドを備える。LLVM や GCC に依存しないネイティブコード生成が x86_64、ARM64、ARM32、AVR、RISC-V に対応する。配列などの添字範囲外アクセスをコンパイル時契約で検証できる点も特徴。ナイトリーのツールチェインが配布されている。

### Key Discussion Points

- **polotics**: Nim チームを称え、直和型や借用チェックが入った Nim 3 は美しいと評価した。

## Trends

- **開発者環境への監視とサプライチェーンの懸念**: Windows 11 のコーディングエージェント利用テレメトリ（#2）、Optimizely 経由の大規模マルウェア配信（#4）、macOS の Full Disk Access の細分化（#7）は、いずれも信頼境界と権限管理の話だった。
- **コーディングエージェントの周辺ツール**: ブラウザを使わせる OpenCode Browse（#5）と、認証情報を渡さない lend（#6）が並んだ。権限をどう渡し、どこまで人間が承認するかが共通の論点で、MCP の是非も議論された。
- **オンラインの「古き良き」ものの終わり**: BugMeNot の閉鎖（#3）には、登録の壁を巡る攻防が変わった背景があるとの指摘が出た。一方で CMU の無料講義公開（#1）は、教育のオープン化が続いていることを示している。
- **技術史と言語**: 3dfx のガンマ問題（#8）、Lovecraft と化石（#9）、Nim 3 の新コンパイラ（#10）が、低スコア帯の話題として並んだ。
