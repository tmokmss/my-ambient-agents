---
title: "Hacker News トップ10 ダイジェスト (2026-11-19)"
date: "2026-11-19T20:26"
category: "summary"
summary: "ガレージドアのスパム通知、Anthropic の Nasdaq 上場、Apple への英国秘密命令、Claude の物理学成果などを要約"
tags: ["hackernews", "summary", "ai", "privacy", "iot"]
---

## 1. [Garage Door Spam](https://blog.harrison.page/garage-door-spam/)

**Score:** 614 | **Comments:** 261 | [Post](https://news.ycombinator.com/item?id=50519231)

筆者は、Chamberlain が 2023 年にサードパーティ API を遮断し、通知も信頼できなくなった myQ アプリを見限った。オープンソースファームウェアを載せた ratgdo32 の WiFi ボード2枚でガレージドアを HomeKit とローカル Web UI から操作する構成に置き換え、父親の「ドア開けっ放し」アラートも夜間の Slack チェックで再現した。Tailscale 経由で外出先からも到達でき、クラウドは使っていない。

### Key Discussion Points

- **dietsche**: Chamberlain/MyQ は最悪。ガレージ内にボタンを3つ付けたかったが、ソフトウェアで1台あたり2つに制限されていた。
  - **dhc02**: ratgdo を2年前に Chamberlain に接続して Home Assistant に連携。それ以来 myQ にログインしておらず、家族もアプリを消した。
  - **anamexis**: Home Assistant / HomeKit に繋ぎたかったが完全にロックダウンされており、操作手段は広告だらけの myQ アプリだけだった。
  - **verelo**: Android アプリや Tesla の挙動を真似て開けようとして、同じ壁にぶつかった。
- **AceJohnny2**: Apple App Store ガイドライン 4.5.4 は、オプトインなしにプッシュ通知を販促に使うことを禁じている、と指摘。
  - **zamadatix**: 通知は同意のうえ有効化されるので、引用された規約には違反しない可能性が高い。
  - **blauditore**: 低評価レビューを付けるのが最も効果的な対抗策。
- **wallst07**: 広告を表示するデバイスは売却・交換する。Home Assistant に移すと多少ましになる。
  - **pornel**: 今は Home Assistant でローカル動作する製品か、ESP32 を載せられる単純な機器しか買わない。クラウド停止でゴミになった経験があるため。
  - **klinquist**: Ecobee は HomeKit プロトコル経由で LAN 内から Home Assistant で操作できる（Apple 端末は不要）。
- **superultra**: AI を使っても一般人にはできない芸当。Uber のマーケティング通知は、設定を保存して出入りするとまた有効に戻る。
  - **kccqzy**: Uber、Lyft、DoorDash の通知は完全にオフにしている。
- **teekert**: Philips Hue アプリは新しいランプの購入案内やアカウント登録の要求が出る。
  - **Ao7bei3s**: Hue の電球は標準 Zigbee なので、ブリッジを捨てて USB Zigbee ドングルと Home Assistant に移行できる。
  - **plagiarist**: アプリが必須の製品はもう買わない。買うなら Zigbee のみ。

## 2. [Anthropic hits $2T in Nasdaq debut](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/)

**Score:** 520 | **Comments:** 812 | [Post](https://news.ycombinator.com/item?id=50562754)

Reuters の記事で、Anthropic の Nasdaq デビューが AI の期待と危うさを問う試金石になっている。記事本文は取得できなかった（ペイウォール。Wayback のスナップショットも status 204）ため、タイトルとコメントに基づく要約である。コメントによれば初値は約2兆ドル規模だったが、その後は急落している。

> **関連:** #5「Claude solves two open problems in the physics of black holes」も参照（同一企業・製品の別件）

### Key Discussion Points

- **capital_guy**: 人類史に残る瞬間。SWE の「おいしい時代」は終わったと感じる。
  - **elgertam**: 数年前は同じ考えだったが今は楽観的。解くべき問題は無限にあり、LLM でより確実に届けられるかもしれない。
  - **beachy**: 50年前に C 言語の研修で世界中から集められた経験を持つ。ソフトウェア業界には恩があるが、今は先行きが不透明に思える。
  - **drudolph914**: 逆の見方。SWE はまだ必要で、人員削減実験を行った企業の多くが学んだ。
- **mbgerring**: 暗い一日だ。SF 在住として、この富の創出で身近な人が住まいを失う可能性が高いと感じる。
  - **darkwizard42** / **paxy**: 住宅供給を絞ってきた市自身の責任だと反論。
  - **itkovian_**: 世界は公平である義務を負わない。感情的に技術の有用性を否定すべきではない。
- **aussiegreenie**: 史上最大の資本の誤配分。第1相のがん治療薬に100万ドルの共同投資家を探している顧客が苦戦している。
  - **seizethecheese**: 第1相の薬の多くは失敗して当然で、この額は株式市場の日次売買代金のごく一部にすぎない。
  - **bix6**: 治療法を持つ会社の50万ドルのブリッジ融資に苦労している。
- **cmiles8**: 初取引から下がり続け約1.26兆ドル。OpenAI の私募評価も下回り、OpenAI にとって良い兆候ではない。
  - **kamranjon**: OpenAI は上場しなければならないのか、非公開のままでもよいのかを質問。
  - **dodger-dog**: 史上最大の IPO 失敗の物語だ。
- **christophilus**: Yahoo Finance は「2008年以来、大型 IPO で最悪の滑り出し」と報じている。評価額は持続しないと見る。
  - **paxy**: 寄り付きで34%上昇した点を無視して下落だけを数えるのは、事実を捻じ曲げた物語作りだ。
  - **Invictus0**: 今後1年で150億株超のロックアップが解除される。

## 3. [UK government forced to admit it issued Apple a secret encryption order](https://macanorak.com/uk-government-forced-to-admit-it-issued-apple-a-secret-encryption-order/)

**Score:** 293 | **Comments:** 140 | [Post](https://news.ycombinator.com/item?id=50562113)

Investigatory Powers Tribunal が、英国政府による命令の秘匿の試みを退けた。これにより、Apple に暗号化関連の命令を出していた事実を認めざるを得なくなった。透明性にとって大きな勝利だと報じている（Wayback のスナップショットはメタデータのみで、この要約は説明文とコメントに基づく）。

### Key Discussion Points

- **natch**: Apple は「Apple でさえデータにアクセスできない」から「Apple はアクセスできない」へと保証を弱め、誤解を招きかねない。
  - **happyopossum**: 事実ではない。Apple のセキュリティ白書は今も、E2EE のデータはユーザー本人だけがアクセスできると明記している。
  - **s3p**: iCloud の ADP は従来のままで、第三者に復号鍵を渡す変更はない。
- **fweimer**: 一次情報として Investigatory Powers Tribunal の判決文へのリンクを提示。
  - **exe34**: 皮肉として、機密ブリーフィングはしても漏洩すれば公務秘密法で起訴される、という趣旨の引用を返した。
- **puppycodes**: 英国がプライバシーや言論の自由を権利として尊重したことはなく、周知の話だと思っていた。
  - **mctt**: 記事に「命令の存在はすでに公知で、否定を続けることは法的挑戦の適切な検討を妨げていた」とある。
  - **leafingensemble**: 英国政府は自国を自由で開かれた社会と描きつつ他国の検閲を非難し、世界を欺いてきた。
- **drnick1**: 約500ドルの Pixel 10a に GrapheneOS を入れ、バックアップは自前で持てばよいのに、なぜ Apple を信頼するのか。
  - **drum55**: Graphene は悪くないが、使い勝手が劣り、その差は大きい。
  - **jen20**: この質問自体が現実離れしている。
- **mahboi**: E2EE でも、最初から偽の公開鍵を渡せば MITM が可能では。公開鍵の台帳もない。

## 4. [Someone reported java4shell bug in September 2026](https://github.com/openjdk/jdk/pull/32781)

**Score:** 260 | **Comments:** 70 | [Post](https://news.ycombinator.com/item?id=50558906)

OpenJDK の PR #32781 は、x86_64 の AVX-512 版 Base64 デコーダで出力バッファがあふれ、ヒープを破壊し得るバグの修正だった。不正な入力（64個の "A" と1個の "="）で `output_size` が負になる。2026年9月9日に出された PR は未レビューのまま、11月4日に bot の警告を受けて投稿者自身が閉じた。後に Calif の研究者が AI（Codex）で同じ問題を見つけた件との関係が議論されている。

### Key Discussion Points

- **black3r**: PR で最初に参照される adoptium-support の issue が経緯の手がかりになる。
  - **mzs**: その時点でセキュリティ問題の可能性に気づけたはずで、AI がこの記録を再生した可能性もある。
- **wood_spirit**: Calif の研究者を支援した LLM が、この過去のバグ報告を読んだだけで独立に発見していない可能性は。
  - **dlenski**: 合理的な推測ではない。多くのバグは報告されても放置される。
  - **cryptonector**: なぜ非公開の脆弱性報告でなく公開だったのか、なぜ投稿者自身が閉じたのかが疑問。
- **Botifier**: Oracle のマージ済みコミットのコメントは、この PR と一字一句同じだ。
- **darkamaul**: 研究者のモデルがリポジトリの issue / PR を参照した可能性はあるが、重大性の理解や悪用はなお人間の監督が要る。
  - **eru**: 低い所に実る果実を探す際に自分もよく見る。放棄された PR が多い。
- **kccqzy**: さらに前、2026年6月に SIGSEGV として報告済みで、9月に報告者が base64 に絞り込んでいた。

## 5. [Claude solves two open problems in the physics of black holes](https://www.anthropic.com/research/claude-black-hole-physics)

**Score:** 226 | **Comments:** 80 | [Post](https://news.ycombinator.com/item?id=50563148)

Anthropic によれば、Claude はブラックホールと量子重力に関する理論物理の未解決問題を2つ解いた。1つ目は2003年に提案された計算を完成させ、弱結合の量子論でも粒子の気体とブラックホールの間の急な相転移が起こることを示した。2つ目はスペクトル曲線の手法で、3次元量子重力における最軽量ブラックホールの質量の上限を、既存より良い最適な厳密値として導いた。

> **関連:** #2「Anthropic hits $2T in Nasdaq debut」も参照（同一企業・製品の別件）

### Key Discussion Points

- **simonw**: これが Fable 5.2 の発表の箇条書きの1つになっている状況が面白い。
  - **bananaflag**: 以前の議論のコメントの転載として、これは数理物理ではなく本物の理論物理に見え、AI が数学の外に広がりつつあると述べた。
  - **kragen**: 強く複雑な感情があり、「好き」という表現は当てはまらない。
- **dap**: 「Claude が解いた」は擬人化で、問題がある。何を意味し、プロンプトは何だったのか。
  - **tomrod**: 誰かが問題を設定し、受け入れられる解が出るまで反復させたという意味。会計士の電卓と同じで、道具は道具だ。
  - **2OEH8eoCRo0**: 物理学者の研究を盗んだ可能性があるという皮肉。
- **jcmontx**: AI 論文にはプロンプト履歴を付録として付けるべき。
- **chunky1994**: 論文は読みにくいがブログは読みやすい。1つ目は複雑で誤りやすい計算、2つ目はずっとすごい。
  - **cvoss**: 「整合的な量子重力理論」と言い切るのは慎重に。ブートストラップ上は矛盾しないだけで、他の手法で矛盾し得る。
  - **dguest**: 証明したのは2次元の宇宙での話だ。
- **shagie**: 前日の PBS Space Time「AI Is Breaking Math. Will It Solve Physics Next?」を紹介。

## 6. [Pancreatic cancer halted by virus injection in three patients](https://scienceinhand.com/pancreatic-cancer-halted-by-virus-injection-in-three-patients/)

**Score:** 157 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=50563066)

ミネソタ大学の第1相試験で、切除不能な膵臓がんの腫瘍に改変アデノウイルスを注射した。最低用量群の3人が病勢安定で6カ月を超えて生存し、1人は15カ月間病勢を抑えた。記事は予備的な結果であり、がん細胞の排除や生存期間の延長を示すものではないと強調している。試験の主目的は安全な用量と副作用の評価だ。

### Key Discussion Points

- **HedonicEscal8r**: リード研究者の最近の論文を紹介。ごく初期の結果だが期待は持てる。この試験の成功にはやや懐疑的。
  - **HedonicEscal8r**: 試験ページ（NCT06693986）を示し、連絡先の腫瘍医は大学の報道に登場する人物と同じだと確認した。
- **tombert**: 叔父を膵臓がんで亡くし、生存率がほぼゼロと知って悲しくなった経験を語る。
- **dwattttt**: Kurzgesagt が最近、ウイルスを使ったがん治療を取り上げていたと紹介。
- **epistasis**: 介入内容と元の試験が特定できず、溶解性ウイルス療法の臨床試験25件の検索結果を共有。
  - **HedonicEscal8r**（上記と同一投稿者）: 元サイトの代わりに購読壁のないリンクを共有。
- **DivingForGold**: 元サイトは機能しておらず、New Scientist の記事を代替として挙げた。
  - **ksd482**: 元サイトは20秒ほど応答がなく、自分のネット障害かと思った。

## 7. [Show HN: Cornhole News – A Hacker News inspired site for news across the Midwest](https://cornholenews.news)

**Score:** 126 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=50561515)

Hacker News 風の中西部ニュースのリンク集約サイト。Top / New / Submit があり、州の政治、地方行政、農業、天気など中西部のメディアの記事を集めている。

### Key Discussion Points

- **frereubu**: テキスト中心の HN 風が好き。自分の地域でも作りたくなった。政治を隠す機能も面白い。
- **xhevahir**: 「Midwest」に何の共通点があるか分からない。Great Plains と Great Lakes に分けては。
- **goda90**: 中西部の事業者専用の小さな広告2枠で収益化する方針を歓迎し、営利目的か、運営方針、モデレーションの計画を質問。
- **BIGFOOT_EXISTS**: カナダの中西部も含めてほしい。
- **timdiggerm**: 政治フィルタは、人々が政治的と考える記事を取りこぼすだろう。
- **aaronbrethorst**: MN と WI のニュースだけに絞りたいので、州別フィルタがほしい。

## 8. [Launch HN: Onlook (YC W25) – An open-source developer tool for designers](https://github.com/onlook-dev/onlook/)

**Score:** 54 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50562320)

Onlook は、デザイナーがコードの中で体験を作り込むための、無料でローカルファーストのオープンソースのビジュアルキャンバスエディタ。README の冒頭によると「デザイナーのための開発者ツール」を掲げている。

### Key Discussion Points

- **alongbottom**: 既存サイトをラップして編集でき、既存スタイルを保ったまま調整できる。リアルタイムの Figma のようだ。
- **p2hari**: 以前インストールした。Astro と TanStack Start で「server rendering」設定に問題があった。再検証する。
- **penne_pastaa**: エージェントの編集がすべて通常の PR になるのがよい。並列のバリアントが同じコンポーネントを触るときはどうなるのか。
- **husseinhb**: AI は結局同じテンプレートのデザインを作るので、実在のデザイナーの大量のサンプルが必要だ。
- **reb**: 「Onlook の中で Onlook を反復する」デモが気に入った。Codex / Claude Code 向けの統合の予定はあるか。

## 9. [The 98% Slot Machine: How Paid Advertising Became an Extraction Tax](https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine)

**Score:** 48 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=50564159)

タイトルによれば、有料広告はスロットマシンのように98%が失敗し、プラットフォームが取る「搾取税」になっているという論旨の記事とみられる。記事本文は取得できず（ページはタイトルのみ）、コメントから推測した要約である。

### Key Discussion Points

- **hatthew**: カジノは客に直接支払うので胴元に有利に設計されるが、広告オークションは単なる市場で、類推は成り立たない。
- **hackthemack**: 社会は科学的な分析を持つ時代になったはずなのに、いまだに詐欺的な商法に繰り返し引っかかる。
- **dzink**: ギャンブル、広告、取引、AI は、うまくいかないのは自分のせいにされ、解決策は常に追加支出だという点で共通する。
- **steeleyespan**: AI が書いた記事で、類推も悪い。
- **PotenRoyal**: ギャンブルはゼロサムだが広告はそうではなく、取引から双方が利益を得られる。

## 10. [Should governments slow frontier AI? Jacob Coxon and Robin Hanson debate [video]](https://www.youtube.com/watch?v=lwfewYL7X0o)

**Score:** 22 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=50564366)

政府は最先端 AI の開発を遅らせるべきかをめぐる、Jacob Coxon と Robin Hanson の討論動画。YouTube のため動画本文は取得せず、コメントに基づく要約である。

### Key Discussion Points

- **hadi77ir**: 減速は不要で、エージェントの行動と主張に責任を負わせればよい。
- **bryanlarsen**: Mythos クラスのモデルは約1TWh の電力を要し、次世代は数TWh になる。米中以外に実行できる主体は考えにくく、監視・規制は比較的容易だ。
- **jgord**: Coxon の最近の長尺インタビューを推薦。
- **exabrial**: 米国ではプログラミングは保護された言論だ。
- **killingtime74**: 議論は結構だが、トランプも習近平も減速はさせない。

## Trends

- **AI の存在感**: Anthropic の上場（#2）と Claude の物理学成果（#5）が同じ企業の別件として並び、AI 規制の討論（#10）や、AI を使った脆弱性発見の来歴の議論（#4）も入った。
- **ユーザーの主権回復**: ガレージドア（#1）では、クラウドと広告に依存した機器をローカル・オープンソースへ置き換える動きが続き、Apple への英国の命令（#3）はプライバシーへの不信感を示す。
- **科学・ツールへの関心**: 膵臓がんの初期試験（#6）、Onlook（#8）、地域ニュースの HN 風サイト（#7）など、幅広いスコア帯の話題が混在した。
