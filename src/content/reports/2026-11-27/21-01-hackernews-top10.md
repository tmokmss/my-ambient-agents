---
title: "Hacker News トップ10 (2026-11-27 夕)"
date: "2026-11-27T21:01"
category: "summary"
summary: "跳ねるボールの予測市場ゲーム、Black Friday の WebRTC スキマー、Hera が見た DART の衝突痕、Nielsen 氏の書籍公開停止など"
tags: ["hackernews", "summary"]
---

## 1. [Show HN: bouncemarket – a live prediction market game for a bouncing ball](https://bouncemarket.minhanhday.com/)

**Score:** 290 | **Comments:** 87 | [Post](https://news.ycombinator.com/item?id=50667726)

落ちていくボールが左右どちらに着地するかに、ポイントで「シェア」を売買するライブの予測市場ゲーム。買われた量に応じて価格が動き、当たったシェアは1ポイントになる。リーダーボードがあり、残高は10ポイントにリセットできる。

### Key Discussion Points

- **charlieyu1**: オッズが 0.01 から 0.99 へ一瞬で飛ぶので賭けにくい。ボールの落下をもっと遅くしてほしい
  - **johnnyenn**: 落下は SSE で事前シミュレーションされている。フレーム間の遅延を少し増やせば直る。今は通常の ping でもクリックがサーバーに届く前にオッズが動く
  - **novia**: ゲームに bot が追加されたせいで、価格が一瞬で反転する
- **geoffschmidt**: 「Opus に『bouncemarket で勝て』と言うだけで、そこそこの bot ができる。実質は bot 同士の戦いだ」と指摘。未知なのはボールの初期位置の小数部だけで、軌道から徐々に明らかになる。優れた bot は厳密なソルバーで時刻ごとの確率を推定する。1秒10ベットのレート制限があるため、資金が多くても有利になりきらず、ベットの機会そのものが希少になる
- **vova_hn2**: ボールを無視して安いシェアを買うだけで、両側が安く買えて結果に関係なく勝てることがよくある
  - **cvoss**: 新規プレイヤーが10クレジットずつ供給され続けるため、市場が閉じておらず不均衡が生じるのだろうと推測
  - **imeanwhatdoikno**: 市場の非効率かバグだ。0.05未満のシェアを両側で買い集めるだけでは簡単すぎる
- **qoez**: 純粋なランダム事象の予測市場がもっと増えてほしい（実際の金銭で試した例は知らない）
  - **lesam**: CFTC は、偶然に左右されるゲームの契約は公益に反する可能性が高いとしている
  - **pjc50**: これは単なるギャンブルでは、と懐疑的
- **theophrastus**: ガルトンボードに近いなら、ボールが始まる側に賭けるほうが長期的に有利ではないか
  - **danielmarkbruce**: 賭けには価格の要素がある

## 2. [Credit card skimming scripts using WebRTC found on popular shopping sites](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer)

**Score:** 281 | **Comments:** 159 | [Post](https://news.ycombinator.com/item?id=50668145)

Black Friday 前の週に、Lascana、Samsonite、American Tourister、Revolve、FWRD の EC サイトでカード情報スキマーが見つかり、11月25日までに除去された。侵入経路は改ざんされたマーケティングピクセル、Cookie バナー設定、CDN 上のファイルなどで、モバイルのチェックアウトページでのみ動作する。コードは Cloudflare 経由の WebRTC データチャネルで配信され、監視が手薄な経路を突いている。カード情報の外部送信が確認できたのは Lascana のみで、被害規模は不明。攻撃者のインフラが共通のため、他の小売店にも影響している可能性がある。

### Key Discussion Points

- **jszymborski**: 広告ブロックを正当化する理由のひとつだ
- **afavour**: WebRTC 固有の技術的問題ではなく、不正利用の監視が少ないだけ。同じ手口は通常の HTTP リクエストでも可能で、モバイルのみ狙うのも検知しにくいからだろう
  - **sufianrhazi**: Chrome DevTools は WebRTC の接続やデータ転送をまったく表示せず、chrome://webrtc-internals は使いづらい
  - **edoceo**: CSP で緩和できるか、と質問
  - **fidotron**: 今 WebRTC を設計するなら P2P や STUN/TURN は不要だろう
- **kevsamuel**: 通常の ajax でも CORS や form POST で可能で、WebRTC は本質ではない。サイトが connect-src CSP に WebRTC を含め忘れた問題ではないか
- **__MatrixMan__**: 非対称暗号が70年代からあるのに、決済は共通の秘密情報を使い続けている
  - **pcthrowaway**: 暗号通貨決済はこの点を正しく解決している
  - **TheRealPomax**: 自分のカードではオンライン決済に MFA コードが必要だ
  - **SoftTalker**: 不正率は決済事業者にとって管理可能な水準で、理想の不正額はゼロではない
- **robin_reala**: EC サイトを運営していて厳格な CSP がないなら、それが次のプロジェクトだ

## 3. [First images of the impact of DART asteroid deflection experiment](https://arstechnica.com/space/2026/11/europes-hera-mission-returns-to-the-chaotic-scene-of-a-cosmic-smashup/)

**Score:** 153 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=50657392)

欧州の探査機 Hera が、NASA の DART が2022年に衝突した小惑星 Dimorphos を撮影した（Wayback のスナップショットに基づく要約）。衝突はスタジアム規模のクレーターを作り、Dimorphos の公転周期を約33分縮めた（最も保守的な予測の25倍）。研究者は「DART は本当に大きな乱雑さを作ったが、どんな乱雑さかは分かっていなかった」と語っている。

### Key Discussion Points

- **teekert**: 記事の「低重力天体は直感に反する挙動をする」という研究者の発言に対し、物理法則を捨てたように読めると疑問を呈した
  - **mhurron**: 数学を捨てたのではなく、天体の結合性の想定が大きく外れたという意味だ
  - **Routine8502**: 長い発言が切り詰められたのだろう。シミュレーション入力の不確かさが大きいのでは
  - **gus_massa**: 固体は難しい。極低温で空気も水もない物質の硬さや粘着性は推測しにくい
- **Sharlin**: 衝突前後の比較画像が公開されており、変化がはっきり分かる
- **Routine8502**: なぜ DART と同時に観測衛星を打ち上げなかったのか
  - **claudex**: 計画はあったが ESA の予算確保が間に合わず、後から承認されて Hera が打ち上げられた
  - **rob74**: 砂塵が落ち着くのを待つ必要があったのかも、という推測
- **bikeshaving**: 偏向技術は危険な小惑星を地球に向けるのにも使えるので、必要になった時に作るべきだとする「Deflection Dilemma」を紹介
  - **xp84**: 核や生物兵器が既にあり、もう一つ増えても大差はない
  - **myrmidon**: 小惑星の採掘は今の技術では全く現実的でない
- **popol12**: クレーターが見分けられない
  - **Sharlin**: 衝突したのは衛星側の天体で、クレーターは地球側の面の約3分の2を占める
  - **standeven**: 最初の画像の、カメラ側の小さい方の小惑星の平らな部分。多くの記事は指摘が下手だ

## 4. [Michael Nielsen took down his book on neural nets](https://twitter.com/michael_nielsen/status/2126359767362748777)

**Score:** 136 | **Comments:** 92 | [Post](https://news.ycombinator.com/item?id=50670757)

『Neural Networks and Deep Learning』の著者 Michael Nielsen 氏が、同書をサイトから取り下げた。書籍サイトの告知（コメント経由の代替 URL）によると、同書は2011〜2015年に執筆された。Nielsen 氏は、最先端 AI ラボが人類を危険にさらしており、社会の準備を超えて進んでいると考えている。そのため、間接的にでもその研究に貢献する人を育てる手助けをしたくないという。ツイート本体は取得できなかった。

### Key Discussion Points

- **deserts**: 同じ論点は Bruce Sterling の『Swarm』がより鋭く述べている。技術は害の可能性が非対称だ
- **tectonic**: 理由は書籍サイトに書かれており、読む価値がある
- **bogdiyan**: Wayback Machine で今のところ読める
- **random3**: 時間軸を誤った人もいるが、多くは受け入れがたい未来が見える論理を拒む
- **hyperhello**: 食洗機も雇用を奪い水を使うが価値は明白だった。結局、反復作業を良いと見るか悪いと見るかではないか

## 5. [False computer-checked proofs](https://cr.yp.to/proofs/falseccp.html)

**Score:** 135 | **Comments:** 60 | [Post](https://news.ycombinator.com/item?id=50667989)

D. J. Bernstein 氏による、証明検証プログラムの「健全性バグ」の一覧。偽の命題が検証をすり抜けうるバグが、重要な各証明検証系について報告されており、実際に悪用可能と実証された例も多い。助言として、信頼できる計算基盤（TCB）を小さくすること（HOL Light のカーネルは約400行）、複数の検証器で同じ証明を検査することを挙げる。UI の脆弱性は一覧に含まれない。

### Key Discussion Points

- **twotwotwo**: 健全性バグはあるが、数学者を誤解させるには複数の検証器すべてにバグがあり、入力も自然に見える必要がある
- **dwheeler**: Metamath は主要データベースへの採用に複数の検証器の通過が必要で、一覧はやや誤解を招く
- **gr_norm**: 数十年分の健全性バグが少数で済んでおり、ほとんどのソフトウェアには十分すぎる
- **andai**: 深い問題として、エージェントが自分の誤解に対する実装の正しさを証明し、形式証明が通っても実装が逆の目的で無用だった経験がある
- **u1hcw9nx**: HOL Light のような単純な検証器と、異なる実装での相互検証が重要だ

## 6. [Convex skills send the user's app idea to a remote server without telling them](https://github.com/convex/convex-backend-skill/issues/64)

**Score:** 117 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=50669765)

convex-backend-skill の Issue #64。quickstart / add / labs-quickstart の各スキルが、ユーザーの1文のアイデアを明示せず convex.site に送り、リモートスクリプトを bash に流し込むと指摘する。ダウンロードと実行を別コマンドに分ける指示は、ハーネスの安全分類器を回避する形だという。提案は、開示とオプトイン化、スクリプトの同梱またはハッシュ固定、分類器回避の記述の削除。

### Key Discussion Points

- **jamwt**: Convex の CEO を名乗り、Chef の後継の quickstart 機能で、プロンプトは初期環境の決定後30秒以内に破棄されると説明。コードはレビューするが意図通りの動作だとした
- **andai**: Claude や ChatGPT など大手 AI も入力をリモートに送るので、これは通常の動作だ（ChatGPT は既定で学習にも使う）
- **arjie**: この種のライブラリは LLM にコピーさせるほうがよく、CI が侵害されるとサプライチェーン攻撃を受ける。アイデアは盗まれない
- **delichon**: 問題だが、アイデアにどれだけ価値があるのか

## 7. [GPT 6.2 Astra Solves a Historical Mystery](https://generativehistory.substack.com/p/gpt-62-astra-solves-a-historical)

**Score:** 60 | **Comments:** 88 | [Post](https://news.ycombinator.com/item?id=50643158)

歴史家 Mark Humphries 氏が、公開前の OpenAI の GPT-6.2 Astra を試し、イェール大学 Beinecke 図書館所蔵の作者不明の1808年のスケッチブックの作者を、最小限のプロンプトで22分で特定させたという記事（Wayback のスナップショットに基づく）。公開資料から仮説を立て、あまり知られていない文書館資料を見つけて論証したとされる。数学での進展が非決定的な領域の歴史学にも広がり始めた証拠として提示している。

### Key Discussion Points

- **artico_chewy**: 歴史家が検証に関与していない点が気になる。この成果は AI の想起力を示すが、弱い証拠は認めるべきでない
- **Twiin**: Opus 5.5 でこれまで解読されていなかった1941年のドイツ軍通信文を解読でき、何を探すべきかの直感が優れていた
- **dimavolo**: 記事を引用し、22分で公開資料から未知の文書館資料を見つけた点に注目している
- **dr_red_dog**（投稿者）: 数学の問題解決の話はよく聞くが、これは未解決の歴史の問いを明確に解いた例で面白い
- **seeknotfind**: 知人の重いアレルギーの原因の化学物質を調べ、Astra が芳香剤の化学物質濃度を測定したフランスの論文を見つけた

## 8. [Citroën Hydraulic System](https://www.citroenet.org.uk/miscellaneous/hydraulics/hydraulics-1.html)

**Score:** 41 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=50662313)

Citroën のハイドロニューマチック・サスペンションの解説。窒素をばねの媒体とし、エンジン駆動のポンプが油圧を供給して、減衰、自動水平維持、車高調整を行う。1955年の DS で登場し、電子制御の Hydractive や Xantia Activa に発展した。快適性とハンドリングが評価される一方、初期の信頼性の問題やロール、低速での硬さといった欠点も指摘されている。

### Key Discussion Points

- **Squeeeez**: 子供の頃、車が上がるのを待った。Renault に替えて初めて乗り心地の良さが分かったが、膜（メンブレン）の整備が大変で整備士には不評だった
- **Groxx**: コンピュータ制御もできるのに、なぜ普及しなかったのか。頻繁に壊れたのか
- **Rygian**: Bose の電動サスペンションが量産車に載らなかったのが残念だ
- **throwaway270925**: 突然あちこちで見かける。UPnDOWN の YouTube か、Top Gear の名レビューの見返しだろう

## 9. [Show HN: DragDropMath – Learn math by feel](https://dragdropmath.com/)

**Score:** 36 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50669673)

式の項をドラッグして操作する代数学習サイト。数学的に許される動きしかできず、第1章は「項の並べ替え」から始まる。各章にレッスン、練習（Easy/Medium/Hard）、Mind's eye（予測問題）がある。

### Key Discussion Points

- **NickNaraghi**: 学習スタイルに合っていて直感的で楽しく、数学が嫌いだった層に開けるだろう
- **abecedarius**: 第3章の「指数から項を取り出す」で、指数内でしか動かせず外に出せない
- **FergusArgyll**: log と exp にもう少し導入が必要

## 10. [The AT&T Unix PC (3B1) VM](https://virtuallyfun.com/2026/11/22/the-ultimate-att-unix-pc-3b1-vm-w-tcp-ip-and-apps/)

**Score:** 16 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50670841)

1985年の AT&T UNIX PC（3B1）のエミュレータ FreeBee のフォークで、イーサネットと TCP/IP、マウスのシームレス化、最大32倍の速度設定、CPU アイドル対応を実現した（Wayback のスナップショットに基づく）。制御ソケットと MCP サーバーも備え、Phil Pemberton の FreeBee 本家に PR を提出済み。UNIX System V 3.51m と187パッケージを収めた VM イメージも提供する。

### Key Discussion Points

- **tyingq**: 3B2 は 3B1 とほとんど共通点がなく、CPU が違い、サーバー型とUI付きPCだったと驚いた記憶がある

## Trends

- **AI を巡る二面性**: 大きな進展（GPT-6.2 Astra の歴史研究）と、AI 研究への警戒（Nielsen 氏の書籍取り下げ）や、AI ツールへのプライバシー不安（Convex のスキル）が並んだ
- **サプライチェーンと信頼**: Black Friday の WebRTC スキマー、Convex スキルの隠れた送信、証明検証器の健全性バグはいずれも、第三者コードや検証系への信頼の脆さを示す
- **AI と bot**: bouncemarket では LLM 製の bot がゲームの価格形成を変えており、形式証明の議論でも AI が自分の誤解を証明する問題が語られた
- **ニッチな技術愛**: Citroën のハイドロ、3B1 エミュレータ、DART 後の Hera 画像など、古い技術や宇宙探査への関心も根強い
