---
title: "Hacker News Top 10 (2026-11-20)"
date: "2026-11-20T06:56"
category: "summary"
summary: "ガレージドアのアプリ広告、Claudeによるブラックホール物理、GrapheneOSへのGoogleの圧力、OpenSSL CVSS9.8など上位10件"
tags: ["hackernews", "top10", "summary"]
---

## 1. [Garage Door Spam](https://blog.harrison.page/garage-door-spam/)

**Score:** 826 | **Comments:** 347 | [Post](https://news.ycombinator.com/item?id=50519231)

Chamberlain が myQ のサードパーティ API を遮断した後、アプリが広告だらけで通知も信頼できなくなったため、筆者は ratgdo32 の WiFi ボード2枚とオープンソースのファームウェアでクラウド連携を置き換え、HomeKit / Siri からローカルで操作できるようにした。さらにドアが夜間開いたままだと誰が開けたかとともに Slack に通知する仕組みも自作した。

### Key Discussion Points

- **AceJohnny2**: Apple の App Store Review Guidelines 4.5.4 は、オプトインなしにプッシュ通知を宣伝目的で使うことを禁じていると指摘。
  - **trestacos**: 開発者が「有用な通知」とマーケティング通知を一緒くたにしており、Apple が放置しているのは問題だと述べる。
  - **drnick1**: Apple と Google がプッシュ通知を握っていることが根本問題で、セルフホストの UnifiedPush ならこうならないと主張。
- **dietsche**: Chamberlain / myQ は避けるべきだと警告。ボタン数をソフトウェアで制限され、ボタンの無線信号を解析して回避した経験を語る。
  - **dhc02**: ratgdo を2年前に導入して以来 myQ にログインしておらず、Home Assistant 連携で家族もアプリ不要になったと推奨。
- **wallst07**: 購入済みデバイスのアプリが広告を出すのは最大の不満で、広告が出たら売却・交換する。Home Assistant への移行が助けになる。
  - **pornel**: Home Assistant でローカル動作するデバイスか、ESP32 を載せられるダム機器だけを買うようにした。クラウド終了で電子ゴミになった経験があるため。
- **superultra**: Uber や Domino's のアプリでは、マーケティング通知をオフにしても設定画面を出入りすると再びオンになると報告。
  - **kccqzy**: Uber / Lyft / DoorDash は通知を完全にオフにしており、待ち時間はアプリを開いて見ていれば足りると述べる。
- **teekert**: Philips Hue アプリも、新製品広告やアカウント登録の促しが並ぶようになったと批判。
  - **Ao7bei3s**: Hue の電球は標準 Zigbee なので、ブリッジを捨てて Zigbee ドングルと Home Assistant に移行できると助言。

## 2. [Claude solves two open problems in the physics of black holes](https://www.anthropic.com/research/claude-black-hole-physics)

**Score:** 459 | **Comments:** 218 | [Post](https://news.ycombinator.com/item?id=50563148)

Anthropic は、Claude が理論物理のブラックホール・量子重力に関する2つの未解決問題を解いたと報告している。1つ目は2003年の計算を完成させ、時空がぼやける領域でも気体からブラックホールへの急な切り替えが起こることを示した。2つ目は簡略化した3次元量子重力モデルで、最軽量のブラックホールの質量の上限を、最も単純な modular bootstrap で厳密かつ最適に求めた。

### Key Discussion Points

- **dap**: 「Claude solves」という表現は機械の擬人化で問題だと批判。サンドボックス破りを「脱出した」と言うのと同じで、プロンプトが公開されていないと指摘。
  - **tomrod**: 人がタスクを設定し、Claude に反復させて許容できる解を得たという意味で、会計士が電卓を使うのと同じだと反論。
  - **00dazzle**: 「Spinning Jenny が紡いだ糸」「ボイラーが爆発した」という言い換えで、擬人化批判をパロディにして反論。
- **chunky1994**: 1つ目は複雑で誤りやすい計算だが、2つ目は整合的な量子重力理論に許される質量上限を示すもっとすごい成果だと評価。
  - **dguest**: ただし証明されたのは2次元の宇宙の話だと補足。
  - **cvoss**: 「整合的な量子重力理論になる」は言い過ぎで、bootstrap の観点で矛盾しないというだけだと慎重さを促す。
- **Merrill**: 発表文を引用し、どちらの結果も私たちの宇宙を直接記述しておらず実用的応用もないと指摘。
  - **tiborsaas**: 物理版の「in mice」だと皮肉る。
  - **nisegami**: 対称性などの仮定を置くのは理論物理では普通だと擁護。
- **jcmontx**: AI の論文にはプロンプトや対話履歴を付録として含めるべきだと提案。
  - **bmenrigh**: 大きな問題は1つのプロンプトではなく多数のエージェントによる大規模な作業になるため、履歴の公開要求は規模を理解していないと反論。
- **simonw**: 「ブラックホール物理の未解決問題を2つ解いた」が、フロンティアモデルのリリースの箇条書きに入る時代になったと感慨を述べる。
  - **bananaflag**: OpenAI の Yang-Mills の結果のような数理物理ではなく本物の理論物理に見え、AI が数学の外に広がり始めたと指摘。

## 3. [How to CAD Almost Anything](https://ocw.mit.edu/courses/res-16-002-how-to-cad-almost-anything-january-iap-2024/)

**Score:** 218 | **Comments:** 64 | [Post](https://news.ycombinator.com/item?id=50528119)

MIT OpenCourseWare の単位なしワークショップ RES.16-002 で、航空宇宙工学科の Andy G. Eskenazi が教える。日用品やサターンV、ジェットエンジンのブレードなどのリバースエンジニアリングを通じて、SolidWorks、Creo、Fusion、Onshape、NX など複数の CAD を学ぶ。操作手順より CAD ツールの使い方の計画を重視し、GitHub の教材と YouTube の録画も公開されている。

### Key Discussion Points

- **mafm**: オープンソース CAD が急増しており、FluidCAD は開発開始から約1年とは思えない出来だと称賛。FreeCAD、SolveSpace、Onshape を各100時間以上使った不満点をほぼ解消するという。
  - **NegativeLatency**: Fusion 360 の無料版から SolidCraft に乗り換え、速くてクラウド不要、MCP でも使えて良いと述べる。
  - **eadz**: OpenSCAD で書いていた部品は、Fusion を覚えてからなら10分の1の時間で済んだはずだと後悔を語る。
- **statenjason**: MangoJelly の FreeCAD 講座で、ゼロから自分で印刷物を設計できるレベルになった。
  - **WillAdams**: 動画を見ても細かな UI の違いでつまずいてしまうと述べる。
- **seemaze**: 約30年 CAD を使ってきた経験から、パラメトリックなソリッドモデリング（特に Onshape）は最も楽しいが初学者には直感しにくいと述べる。
  - **tootie**: 形は作れても見た目が悪く荷重で壊れる。強度を考えた設計のコツを学びたいという。
  - **dividedbyzero**: Onshape の無料プランはプロジェクトがすべて公開になるため、再公開できない既存モデルを使えないのが不便。
- **userbinator**: CAD の習得は、頭の中で3次元物体を操作して2D 図面と行き来する能力に左右されるのではないかと推測。
- **vogtb**: 2016年に YouTube で CAD を学び、最近は FreeCAD を使う。CAD 向けの MCP やエージェントツールで穴の寸法を口頭で指定する試みも面白いという。

## 4. [Google is pushing OEMs against GrapheneOS and bootloader unlocking](https://grapheneos.social/@GrapheneOS/117645038299496084)

**Score:** 178 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50570479)

GrapheneOS 公式の Mastodon 投稿によれば、Google は OEM パートナーを損なう形で機能やアップデートを Pixel 限定にしている。同時に、OEM に GrapheneOS やブートローダーのアンロックをサポートしないよう働きかけており、GrapheneOS 自体にも直接的な妨害をしているという。

### Key Discussion Points

- **JumpCrisscross**: 州の司法長官に反トラストの観点から調査を求める手紙を書くことを提案。GrapheneOS 側は各州向けの雛形と、Google が OEM に圧力をかけた証拠を公開すべきだとも述べる。
  - **hn_submit**: 欧州委員会など他の独禁当局にも通報すべきだと追加。Android の開発で Google がますます権威的になっていると述べる。
  - **boredatoms**: Pixel 開発地域を選挙区に持つ Ro Khanna 議員にも働きかけるべきだと述べる。
- **drnick1**: 将来の Pixel でブートローダーをアンロックできないなら、10a が最後の Pixel になり Motorola に移ると表明。
- **pachouli-please**: Fairphone 6+ の Murena /e/OS を使い、Google をほぼ排除できて解放感があると述べる。
  - **N-Krause**: Google アプリや購入済みアプリを使うには microG が必要なのかと質問。
  - **microtonal**: こうした代替 OS はセキュリティ更新が遅れがちで、古いカーネルやファームウェアに既知の重大 CVE が残るのが問題だと指摘。
- **karel-3d**: これは明らかに事業判断であり、Joel Spolsky の「Strategy Letter V」（補完材の戦略）を参照すべきだと述べる。

## 5. [OpenSSL: Buffer overflow in EVP_EncodeBlock() (CVE-2026-121481, CVSS 9.8)](https://github.com/openssl/openssl/pull/33652)

**Score:** 144 | **Comments:** 78 | [Post](https://news.ycombinator.com/item?id=50569226)

`EVP_EncodeBlock()` が NULL バッファ、負の長さ、エンコード後のサイズが `int` に収まらない長さなどの不正入力でバッファオーバーフローを起こす脆弱性。影響ブランチは master、openssl-4.0、openssl-4.1 とされるが、明示的なバージョン範囲はページに記載がない。修正案の PR #33652 は不正入力に `OPENSSL_assert()` を使い、`EVP_DecodeBlock()` と `http_client.c` の長さチェックも修正するが、取得時点では未マージだった。

### Key Discussion Points

- **jerf**: 「9.8」が具体的に何を意味するのか、ごく稀な機能の話なのか広く影響する話なのかを問う。
- **asveikau**: 影響は OpenSSL 4 系のみのようだが、Heartbleed 以降は上流の新機能を取り込まないディストリビューションが多く、実際に使っているところがあるのかと疑問を呈する。
- **amluto**: 非常に大まかに読むと、入力が約1.5GB を超えると base64 エンコード関数が誤動作するバグだと説明。
- **userbinator**: 内部関数が極端に長い入力で失敗するだけで、信頼できない入力がそこに届くかが焦点なので、CVSS 9.8 は過大評価だと主張。
- **Panzerschrek**: だからバッファサイズには `size_t` を使うべきで、今回は入力がアドレス空間の半分を超える場合にしか起きないと指摘。

## 6. [Vint Cerf on why TCP/IP was never patented](https://seremot.com/p/vint-cerf-on-why-tcpip-was-never)

**Score:** 82 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=50568861)

João Tomé の新ポッドキャスト Future Stories の第1回で、TCP/IP を Bob Kahn と設計した Vint Cerf にインタビューした内容。CERFnet の名前の由来、Minitel と MCI Mail を接続しようとして失敗した話、惑星間ネットワークのソフトウェアを作る Tolero での「光速は遅すぎる」という発言などが語られる。将来の世代が今日の記録を解釈できなくなる懸念も示した。

### Key Discussion Points

- **emot**（投稿者）: インタビューの全文書き起こしが ourfuturestories.eu/vint-cerf にあると案内。
- **meialabscom**: VC の影響で収益化に偏った今の環境では、こうした長期的な視野の取り組みは起きにくいのではないかと懸念。
- **Ey7NFZ3P0nzAe**: ポリオワクチンの特許を問われた Jonas Salk の「太陽に特許は取れるか」という言葉を連想すると紹介。
- **7e**: 70年代初頭は DARPA 資金の研究成果は政府の所有だったため、特許を追求する意味がそもそも薄かったと指摘。
- **JSR_FDED**: 20年以上前に Cerf と会議で同席した経験から、知性と集中力があり、謙虚で親しみやすい「エンジニアの中のエンジニア」だったと回想。

## 7. [Postgres 19 Repack: Faster, Built-In Table Bloat Cleanup](https://www.snowflake.com/en/blog/engineering/postgres-19-repack-table-bloat/)

**Score:** 55 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50569516)

Snowflake のブログ記事。ページの取得は HTTP 403 で失敗したため、タイトルとコメントから推測すると、Postgres 19 で組み込みの REPACK（CONCURRENTLY を含む）が追加され、pg_repack のような外部拡張なしでテーブルの肥大化（bloat）を片付けられるようになるという内容とみられる。

### Key Discussion Points

- **jzelinskie**: pg_repack のトリガー方式より、pg_squeeze のように Postgres 内部のログを追う方式の方向性が好みだと述べる。SpiceDB でも同様の手法を使ったという。
- **aurareturn**: 以前、数 TB の本番 DB で大晦日に pg_repack を回したが、接続が切れるたびにやり直しになり何時間もかかった経験を語る。
- **inkysigma**: MVCC の一貫性が失われるのは大きな欠点ではないか、クエリが原因の分かりにくい形で空を返すことがあるのかと質問。
- **QuentinM**: REPACK CONCURRENTLY は、毎時数百万のデッドタプルを出していた取引 DB で欲しかったが、パーティションテーブルに未対応なのが残念だと述べる。

## 8. [FFmpeg 9.1 'Gauss'](https://ffmpeg.org/download.html#release_9.1)

**Score:** 44 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50569998)

FFmpeg 9.1「Gauss」のリリース。コメントの変更履歴によれば、libastcenc による ASTC 画像のエンコード・デコード、大幅に改善された AAC エンコーダ、APV の Vulkan エンコーダ、iTerm2 のインライン画像プロトコル muxer、LCEVC ペイロードの結合フィルタ、グラフベースのビットストリームフィルタ API などが追加された。

### Key Discussion Points

- **gyan**（投稿者）: 変更履歴を貼り、主な追加機能を一覧で紹介。
- **snvzz**: 今のリリースノートはこの程度（git 上の RELEASE_NOTES）かと皮肉り、ノートの簡素さを指摘。

## 9. [Jujutsu Primer](https://ethanlowman.com/posts/jj-primer/)

**Score:** 21 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50570628)

既存の Git リポジトリと併用できるバージョン管理システム Jujutsu（`jj`）の入門記事。自動スナップショットとリベース、ネイティブな undo、ブランチレスのコミットグラフと Git ブランチに対応する bookmark、スタック型 PR のワークフローなどを解説する。

### Key Discussion Points

- **danpalmer**: 2年以上ほぼ jj だけを使い、大規模モノレポでも快調だと報告。ただし裏は独自 VCS で、Git 互換にこだわらない jj ネイティブの forge が出てほしいという。
- **Okkef**: jj は多くの点で git より優れるが、Claude などのエージェントに一貫して使わせるのが難しいと指摘。git と jj の作業ツリーは相互運用できず、git 前提のツールが使えなくなるという。
- **NothingAboutAny**: lazygit のような git ラッパーと比べて、新しいワークフローを学ぶ価値があるのかと質問。

## 10. [Bit Shifting in Basic](https://subethasoftware.com/2020/06/11/bit-shifting-in-basic/)

**Score:** 18 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50521512)

Allen Huffman による CoCo の Color BASIC の解説。2倍・2分の1でビットを左右にシフトし、256 倍・256 分の1で16ビット値の上位・下位バイトを入れ替える方法を説明する。その手法で 8×8 のグラフィックス文字を2文字ブロック上でシフトし、16ビット値を分割する各方法を比較する。最後に、より速い方法を読者に募っている。

## Trends

- **クラウド依存とロックインへの反発**: ガレージドアの広告スパム（#1）と、GrapheneOS への Google の圧力（#4）はどちらも、プラットフォーム事業者が端末の自由を狭めることへの不満が議論の中心。ローカル動作やオープンな代替（ratgdo、Home Assistant、GrapheneOS、UnifiedPush）に移る声が目立つ。
- **AI の科学・設計への進出**: Claude による物理の未解決問題（#2）では成果の評価と擬人化・再現性への懸念が割れた。CAD（#3）や jj（#9）でも、AI エージェントとの相性が話題に上った。
- **セキュリティの深刻度への疑問**: OpenSSL の CVSS 9.8（#5）は、実際の悪用可能性を巡って過大評価ではないかという議論になった。
- **基盤ソフトの地道な進化と歴史**: Postgres 19 の REPACK（#7）、FFmpeg 9.1（#8）、jj（#9）、Vint Cerf（#6）、Color BASIC（#10）と、インフラや古典的技法への関心も根強い。
