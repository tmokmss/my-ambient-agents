---
title: "Hacker News トップ10サマリー（2026年10月24日）"
date: "2026-10-24T04:20"
category: "summary"
summary: "Local Wikipedia、Kimi K3.1 Pro、Hexacon の iPhone 攻略デモ、Apple Music の 404 ページなど、HN 上位10件を要約"
tags: ["hackernews", "summary", "AI", "security"]
---

## 1. [Local Wikipedia: Wikipedia, but only for things a half hour walk from you](https://edjefferson.com/localwiki/)

**Score:** 1302 | **Comments:** 226 | [Post](https://news.ycombinator.com/item?id=50202285)

現在地・町・ランドマーク・郵便番号を指定すると、徒歩30分圏内にあるジオタグ付き Wikipedia 記事だけを集めた「ご近所版 Wikipedia」を表示するサイト。25件未満なら約6マイル圏内の最寄り25件、500件超なら最寄り500件に絞る。位置情報はブラウザ内にのみ保持され、共有リンクにも含まれない。

### Key Discussion Points

- **delichon**: 最寄りの Wikipedia 項目は徒歩3時間以上先の町だが、もっと近くに面白いもの（尻にぴったり合う倒木、コヨーテに3/4食べられたエルクの死骸など）があるので追加したい、とユーモラスに投稿
  - **ASalazarMX**: その人間工学的な倒木の項目を心待ちにしている
  - **etewiah**: 地図ベースで物語を共有できる chattymaps のコレクションを紹介
- **nomilk**: 近くの記事は平凡でも妙に切実に感じる心理的な癖がある（ホモフィリーとの関連？）
  - **benrutter**: 近い出来事ほど自分に影響するので、むしろ合理的な反応
  - **dspillett**: 危険判定の仕組みの名残で、近くの事象は「今」関係し得るからではないか
- **esperent**: 距離を設定可能にしてほしい。Wikipedia の nearby 機能のラッパーのようにも見える
  - **dspillett**: 任意の場所を指定して検索できる点は有用な追加機能
  - **tannertech**: 公式モバイルアプリにも同様の機能がある
- **darkest_ruby**: 欧州の場所にヤード表記は侮辱だ
  - **valleyer**: メートルに直すには1を掛ければよい
  - **alnwlsn**: 米国でもヤードはスポーツ以外ほぼ使わない
- **slymax**: Wikipedia 本体にも多言語対応の Special:Nearby がある
  - **edwcross**: 位置情報の許可が必要で、ISP 由来の位置は的外れなので使えなかった。町名や郵便番号を入力できる点が価値

## 2. [Kimi K3.1 Pro and K3.1 Pro Highspeed](https://www.kimi.ai/blog/kimi-k3-1-pro)

**Score:** 788 | **Comments:** 479 | [Post](https://news.ycombinator.com/item?id=50212065)

Moonshot AI が K3.1 シリーズ第1弾として、1Mトークン文脈を持つ3T級オープンウェイトモデル Kimi K3.1 Pro と、2〜3倍高速な Highspeed 版を公開。コーディング・3D生成・金融リサーチ・エージェント能力が向上し、Terminal-Bench 4.0 で 65.7%（Claude Opus 5.5 は 66.4%、GPT-6 Astra は 58.2%）と主張している。モデルの完全な重みは11月4日までに公開予定。

### Key Discussion Points

- **ranyume**: 推論内容を見ると、自身を Kimi と認識しつつ、時に ChatGPT を名乗ったり「evaluator」の承認や Moonshot のガイドラインに言及したりする
- **thefourthchime**: Pac-Man ベンチで Kimi K3.1 Pro は Sonnet 5.5 と同点の93（$0.68・11分 vs $1.61・14分）
  - **danbolt**: Kimi の実装は原作のセーフスポットのバグを再現している。実装が学習済みなのではないか
  - **miohtama**: モバイルでは UX の面で Kimi が優れている
- **arjie**: サイバーセキュリティ知識を学習データから外したアプローチは興味深く、重みが公開されても脱アライメントしにくい
  - **zozbot234**: これが唯一の AI セーフな手法だと支持
- **Athanase000**: 年間契約したが5時間制限が厳しすぎて使い物にならない
  - **ricardobeat**: 最安プランでは15〜20分で使い切った。賢いが高価
  - **jimmymcgee73**: 自分で試してから判断すべきでは
- **besterman23**: サイバーセキュリティデータの除去は、一般的なソフトウェア知識とどこで線引きするのか疑問
  - **ByteAtATime**: 知識が乏しいと脆弱な実装を生む副作用もあり得る
  - **modeless**: トップエンジニアでもペンテスターになってすぐ一流にはなれないのと同じ

## 3. [Today, we hacked what we'd set out to hack: the iPhone](https://blog.calif.io/p/iphone)

**Score:** 784 | **Comments:** 527 | [Post](https://news.ycombinator.com/item?id=50211474)

Calif が Hexacon（パリ）で披露した iPhone 攻略デモ集。Signal 経由の1クリック攻撃、iMessage 経由の攻撃、端末上での権限奪取、永続化（「Apple Persistent Threat」）などが動画で示された。詳細は「しかるべき時期に」公開予定で、記事本文は動画中心。

### Key Discussion Points

- **jeroenhd**: ロックダウンモードはこれらの攻撃に効くのか
  - **sumam**: iMessage の PDF はブロックされるはず。Signal や3つ目は不明
  - **sigmoid10**: ゼロクリックではなく1クリック型なので、不明なファイルを開かないのが最善。ロックダウンは多くの添付を遮断する
- **slowin**: 自分の端末で root を取りたい。Apple の更新・削除を阻止できるのか
  - **aseipp**: セキュアブートの連鎖を破るには SecureROM とセキュアエンクレーブの突破が必要で、おそらく不可能
  - **drum55**: ユーザーランド寄りの攻撃で、動画が更新しないよう促していることからも攻撃面が推測できる
- **aemoron**: iOS はなぜ PDF で突破され続けるのか（ForcedEntry を想起）
  - **enjoytheview**: PDF は複雑で攻撃面が巨大
  - **motoboi**: 被害者が警戒しにくく、パーサ→サンドボックス→カーネルと連鎖させやすい
- **paxy**: 「ハックされた」iPhone のほうが公式のものより多機能で皮肉だ
  - **vessenes**: 昔は root を望んだが、手に入れても Cydia 以外ほぼ使わなかった
  - **Zak**: 自分の端末を改造できる自由には賛成だが、PDF を開かせるだけで他人が支配できるのは反対
- **ghm2180**: こうした攻撃はカーネルモジュールの侵害に依存するのか
  - **varenc**: PDF から永続化までは複数の脆弱性チェーンが必要（Pegasus は3段構成）

## 4. [Apple Music 404 Not Found](https://music.apple.com/this-url-doesnt-exist)

**Score:** 651 | **Comments:** 210 | [Post](https://news.ycombinator.com/item?id=50207910)

Apple Music の存在しない URL にアクセスした際の 404 ページが、遊び心のある iPod 風インターフェース（クリックホイール操作）になっている、という話題。ページ本文は取得できなかったためコメントに基づく要約で、設定の About を5秒長押しするとブロック崩しのゲームが遊べるという隠し要素も報告されている。

### Key Discussion Points

- **robot_jesus**: Settings > About の中央ボタン長押し5秒で隠しゲームが起動する
  - **marcelo-earth**: iPod を持ったことがなく初めて体験できた
  - **oniony**: ブロック崩し（Breakout）クローンだ
- **sherburt3**: クリックホイールは優れた UI だが、現代では不要になったのが残念
  - **98codes**: 長いリストから1件を探すときはホイールが便利で、専用デバイスがあれば使う
  - **holdupagain**: 一方で iPhone は車内で勝手に Apple Music を起動して Spotify を妨げる
- **ljoshua**: 裏で 404 率上昇のアラートを受けた SRE が困っていそうだ
  - **frays**: 同じことを考えた
- **sohrob**: Apple の遊び心ある一面が見られて嬉しい
  - **npunt**: 昔の Apple 気質が懐かしく、Ternus 体制で戻ってほしい
- **illwrks**: プレイリストのデータは JSON で公開されている
  - **illwrks**: 地域ごとに URL が異なり、内容はおおむね共通
  - **brirec**: ユーザー自身のライブラリを読み込むわけではないと知り少し残念

## 5. [Dessa: the most authentic full-duplex speech model ever built](https://block.xyz/dessa)

**Score:** 290 | **Comments:** 113 | [Post](https://news.ycombinator.com/item?id=50213925)

Block が発表した、テキストや事前学習モデルを使わず人間の会話音声のみでゼロから学習した全二重（同時発話可能）の会話モデル。笑いや声量調整など、誰も教えていない振る舞いを獲得すると主張し、MacBook Pro M4 Max 以上でローカル動作、学習は NVIDIA GB200 NVL72 1台で行ったとされる。

### Key Discussion Points

- **ByteAtATime**: 「LLM は膨大なテキストを要する」という記述が人間らしくて笑えた
  - **sigmar**: LLM がよく使う括弧付きの言い回しにも見える
  - **AndrewKemendo**: 自分のトーンを95%再現できるモデルを作れるので、人間の文章とは限らない
- **toddmorey**: ローカル動作と低レイテンシの両立は「インディー」AI として驚異的
  - **skhameneh**: Block を「インディー」と呼ぶのは定義が違う
  - **written-beyond**: Cartesia も MacBook でライブデモをしており前例はある
- **GodelNumbering**: ポッドキャスト由来の学習に見え、煽情的な元タイトルで上位に載る手法は問題
  - **chrismarlow9**: 演劇や小説の台詞も学習している印象
  - **YeGoblynQueenne**: そういう投稿のために flag がある
- **paxy**: 割り込みを多用する演出が不自然で、笑いも説得力に欠ける
  - **bityard**: 人に遮られるだけで腹が立つので、AI のサポート窓口は耐えがたい
  - **switchbak**: 偽のボーカルフライや感情表現は嫌だが、恋に落ちる人は出るだろう
- **ttul**: 「Her」的で、AI ガールフレンド市場を狙えそう
  - **a34729t**: 日本語は話せるのか
  - **M3L0NM4N**: 人口減少が加速しそう

## 6. [The Real Kevin Bacon](https://pudding.cool/2026/10/kevin-bacon/)

**Score:** 266 | **Comments:** 74 | [Post](https://news.ycombinator.com/item?id=50169499)

Pudding による「ハリウッドの中心は誰か」のデータ分析。共演関係での平均距離（remoteness）を計算すると、Kevin Bacon は2.28で175位に過ぎず、1位は Samuel L. Jackson（2.09）、2位 Willem Dafoe（2.13）、3位 Robert De Niro（2.14）。上位100位に女性は16人で、最高は Nicole Kidman の21位。年ごとの推移も確認できる。

### Key Discussion Points

- **MattCruikshank**: 1人ではなく2人の俳優を選ぶなら、組み合わせとして最適なのは誰か
  - **leoc**: 『ミスティック・リバー』公開当時は Oracle of Bacon でとても繋がりが強かった
  - **bhickey**: ボリウッドの Kevin Bacon はおそらく Shah Rukh Khan
- **reticulates**: Chloë Grace Moretz は子役時代の早い実績で順位が高いが、現在はほぼ引退状態
- **ameliaquining**: 先行事例の Oracle of Bacon は IMDb 全データを使い、Eric Roberts が1位、Samuel L. Jackson は5位
  - **iainmerrick**: Rod Steiger が1位の版も見た。データセットに敏感で唯一の正解はない
  - **susiecambria**: Tom Skerritt を追悼
- **card_zero**: 4手で誰にでも届くより、平均2.6手で届く事実のほうが面白味に欠ける
  - **yakk0**: Frank Welker は動物だけでなく Megatron や Scooby-Doo の Fred も演じている
  - **MollyRealized**: Megatron など多数
- **dec0dedab0de**: Kevin Bacon が個人攻撃と捉え、未共演の俳優の映画に出てほしい

## 7. [CVE Tracker](https://cve.0xosprey.com/)

**Score:** 129 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50215530)

CVEProject/cvelistV5 のデータをもとに、CVE の公開・予約件数を日・週・月・年単位で可視化するトラッカー。累積表示、対数スケール、CSV 出力、NSA 0-day などのモードがある。ページは JS 描画のため、機能説明は取得できた範囲に基づく。

### Key Discussion Points

- **philips**: GitHub や Linux カーネルが CNA になり自動化が進んだため、CVE 発行のハードルが大幅に下がった
- **tomxor**: 重大度フィルタがなく傾向が誇張されていないか疑ったが、critical は2020年比で約25倍（全体は約5倍）とむしろ深刻
- **danso**: DOGE でサイバーセキュリティ機関が弱体化したのに件数が急増しており、未処理の滞留が気がかり
- **k2enemy**: 対数スケールの選択肢はあるが、押すとサイトが固まる
- **xnx**: AI コード由来の脆弱性が心配されたが、実際は数十年分の人間のコードの脆弱性を AI が発見している

## 8. [Bringing uv and ty together](https://astral.sh/blog/uv-ty-integration)

**Score:** 60 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50172962)

Astral が uv（パッケージ管理）と ty（型チェッカー/LSP）の実験的統合をプレビュー公開。PEP 723 のインラインメタデータを ty が利用してスクリプトをCLI・エディタ双方で正しく解析できるようになり、`uv check` コマンドも追加された。Astral ツール群を統合ツールチェーンにする第一歩とされる。

### Key Discussion Points

- **thayne**: ty は uv より ruff と統合するほうが自然では
- **WhyNotHugo**: ty は uv 以外でも使えるのが魅力で、独自仕様の多い uv に結びつくのは嫌
- **xavdid**: PEP 723 スクリプトのエディタ補完という最大の不満が解消に向かう
- **dirtbag__dad**: リンタや型チェックがパッケージマネージャの標準機能になるのは良い。存在自体を知らない人が多い
- **bitpush**: 「uv に型チェックが入った」と言えば済むのに、ty の説明から入るのは組織図をそのまま出荷しているようだ

## 9. [Twelve years of distributed SQLite](https://philipotoole.com/twelve-years-of-distributed-sqlite/)

**Score:** 53 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50217500)

2014年9月に rqlite を公開した筆者が、SQLite の前に Raft ログを置いて書き込みをクラスタに複製するという、Raft と SQLite を組み合わせた最初のオープンソース実装としての12年を振り返る。現在は「分散 SQLite」が十数のプロジェクトを抱えるカテゴリになり、2021年から語られがちな歴史を2014年起点で記録するという趣旨。

### Key Discussion Points

- **chasil**: 他のクラスタ型DBよりずっと簡単そうだ
- **a3nz3g**: ベンチマークや強みのあるユースケースが知りたい
- **esafak**: dqlite を小規模クラスタで使っているが、より堅牢なものへ移行したい。お薦めは？
  - 返信は取得できた範囲では有効なものがなかった

## 10. [The Quake Fan who built the map editor everybody uses](https://funcarena.com/articles/the-quake-fan-who-built-the-map-editor-everybody-uses)

**Score:** 17 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50193677)

TrenchBroom の作者 Kristian Duske へのインタビュー。2010年、既存エディタが肌に合わなかった Mac ユーザーの Duske がゼロから書いたエディタが、15年と数回の全面書き直しを経て Quake マップ制作の定番になった。Wrath や GRAVEN などのレトロ系シューターや Godot 連携でも使われている。本人は一度もマップを作っていないという。

## Trends

- **AI モデルの新展開**: オープンウェイトの Kimi K3.1 Pro と、音声のみで学習した全二重モデル Dessa が上位に。コスト・利用制限・安全性（サイバー知識の除去）や「本物らしさ」への是非が議論の中心。
- **セキュリティ**: Hexacon での iPhone 攻略デモ（PDF などの攻撃面）と、CVE 件数の急増（CNA 拡大や AI による脆弱性発見）という、二つの角度から攻撃面の拡大が話題に。
- **遊び心とローカル志向**: Local Wikipedia や Apple Music の iPod 風 404 ページなど、実用性よりも楽しさや身近さを重視した小さな工夫が高い支持を集めた。
- **開発ツールの統合**: uv と ty の統合や、分散 SQLite 12年の振り返りなど、基盤ツールが成熟し統合・再整理される流れ。
