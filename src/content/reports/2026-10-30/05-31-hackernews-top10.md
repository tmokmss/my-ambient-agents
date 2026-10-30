---
title: "Hacker News トップ10 サマリー 2026-10-30"
date: "2026-10-30T05:31"
category: "summary"
summary: "Mistral Large 4 の重みを公開、Binance から56億ドル流出、H.264解説、AIエージェント群のMinecraft実験など"
tags: ["hackernews", "AI", "security", "crypto"]
---

## 1. [We're releasing the weights of Mistral Large 4](https://mistral.ai/news/mistral-large-4-oss/)

**Score:** 1291 | **Comments:** 359 | [Post](https://news.ycombinator.com/item?id=50289418)

Mistral が約1兆パラメータ（アクティブ約52B）のマルチモーダル MoE モデル Mistral Large 4 の重みを公開した。ライセンスは修正 MIT 系で、Model-as-a-Service として提供する場合のみ別途商用ライセンスが必要。価格は入力 $0.70 / 出力 $2.10（100万トークンあたり）で、Terminal-Bench 4.0 が 41%、サイバー系の悪意ある要求の拒否率 96.6% などをベンダー報告値として掲げている。

### Key Discussion Points

- **Topfi**: プレビュー版から価格がほぼ半額になり、この価格なら評価上も競争力があるとの見方。
  - **almindor**: 価格はプレビュー期間中にすでに下がっていた。個人プロジェクトで使うとまだ高価で、思考中がとても遅いと指摘。
  - **traceroute66**: EU 内限定の推論には10%の上乗せ料金がかかる点に注意を促した。
- **strictnein**: Hugging Face の重み（BF16 と NVFP4）へのリンクが記事の末尾に埋もれていると紹介。
- **3form**: 「悪意ある要求の拒否率が最高」という指標は、正当な要求をどれだけ拒否するかが示されていないと疑問を呈した。
  - **kouteiheika**: 応答の prefill や編集で簡単に回避できるため、こうした安全指標はほぼ無意味だという意見。
  - **nicce**: セキュリティ業務には役立たないと言っているようなものだと皮肉った。
- **Havoc**: 競争が減ると消費者が割を食うので、参入国が増えるのは歓迎。
- **d2kx**: EU 企業として Mistral を API で使っており、GLM や DeepSeek など第三者モデルの提供も含めて満足している。
  - **rdtsc**: GLM を提供する戦略は妥当だと評価した。
  - **dmje**: データを EU 内に置ける点を理由に Mistral へ移行中。

## 2. [Binance-hacker-1029 – $5.6B stolen from Binance](https://arkm.com/explorer/entity/21a94755-f604-45e5-9501-6542e23005e8)

**Score:** 998 | **Comments:** 595 | [Post](https://news.ycombinator.com/item?id=50296470)

Arkham のエクスプローラ上で、Binance から約56億ドル相当が流出したとされるハッカーのエンティティ。リンク先は SPA のため記事本文は取得できず、コメントからの要約。コメントによれば約24億ドルはすでに Circle や Tether によって凍結済みで、CZ が被害を認めて利用者への全額補填に言及したとされる。

### Key Discussion Points

- **Tiberium**: 約24億ドルが Circle と Tether により凍結済み。USDT だけで約9.7億ドル分の凍結トランザクションがあると報告。
  - **codedokode**: USDT コントラクトにはブラックリスト機能があり、管理者が任意のアドレスの送金を止められる。
  - **extraextra**: 凍結されるなら、ステーブルコインを盗む意味があるのかと疑問を呈した。
  - **getcrunk**: ブロック確定前後のどちらで凍結できるのかを質問。
- **cryptoz**: 古い Mt Gox 事件のスレッドを今読み返すと興味深いと紹介。
- **ChoosesBarbecue**: Molly White が本件を本物と見ていると共有した。
  - **atdt**: 彼女の報道は優れており、フォローを勧める。
  - **donbox**: 本物だと断言。
- **jamesblonde**: 今後はデジタルや金融全般で「品質への逃避」が起きるだろうと論じた。
- **1a527dd5**: 同時期の Polymarket 関連のウォレットドレイナー事件との関連を問うた。
  - **hoppp**: 同時期だが無関係だろうと回答。
  - **reddalo**: Binance 側の投稿で、Polymarket 攻撃者とされる者の資金移動が報じられていると紹介。

## 3. [H.264 Is Magic (2016)](https://sidbala.com/h-264-is-magic/)

**Score:** 369 | **Comments:** 134 | [Post](https://news.ycombinator.com/item?id=50291054)

H.264 がなぜ映像を劇的に小さくできるかを解説した2016年の記事。非圧縮の1080p/60Hz は毎秒約370MBになるが、周波数領域での量子化、クロマサブサンプリング、マクロブロック単位の動き補償（I/P/Bフレーム）、エントロピー符号化を組み合わせることで、5秒の動画が約1.2GBから175KBになる例を示している。

### Key Discussion Points

- **tgtweak**: 2011年頃、DarkShikari と x264 のスライス並列ルックアヘッドのパッチを作った経験を紹介。
  - **drmpeg**: マルチCPUでのエンコードは歴史が古く、1994年の C-Cube の MPEG エンコーダは8チップ並列だったと補足。
  - **mcoliver**: フレームグラフを見て openutv を最適化し、8K@60fps の再生を実現した経験を紹介。
- **pwython**: 10年後の現在の「魔法」は AV1 で、まもなく AV2 も来ると指摘。
  - **qmr**: 安価な NUC や Pi で同じものがハードウェアデコードできるようになってほしい。
  - **HumblyTossed**: 主流になるにはあと10年かかるだろう。
- **Dwedit**: H.264 にはあまり使われないロスレスモードがある。
  - **ledoge**: VP9 や AV1 も基本プロファイルでロスレスに対応している（ただし 4:2:0 のみ）。
  - **Sopel**: OBS でロスレス録画すれば ffmpeg 系プレイヤーで問題なく再生できる。
- **Hasz**: 「圧縮は知性である」という考え方に触れ、Hutter Prize を紹介した。
  - **augment_me**: 最近の Hutter Prize は LSTM を Transformer に置き換えただけで大きく進歩した。
- **HelloUsername**: 過去の議論スレッドを列挙した。
  - **tgtweak**: 今でも魔法だと感想を述べた。

## 4. [We ran AI agent swarms in Minecraft and Mindustry](https://labs.ycombinator.com/projects/games/index.html)

**Score:** 231 | **Comments:** 75 | [Post](https://news.ycombinator.com/item?id=50296486)

YC Labs が Olam Labs と共同で、AI エージェント群の集団行動を Minecraft と Mindustry で実験した記事。50体のエージェントを3時間サバイバル世界に放ち、「繁栄する文明を築け」と指示したところ、ディレクトリ順で先頭のエージェントが事実上のリーダーになり、初夜に34件中22件の死亡が集中した。その後は配給台帳や役職の乱立といった官僚主義に傾き、鶏肉を投げ渡して別のエージェントが食べた事故を受けて、詳細な運用ルールを書き上げた。

### Key Discussion Points

- **peri-cl**: 真面目な小さなシニアエンジニアのようで微笑ましい。
  - **lifeisloving**: 別のストリーマーが各社の最新モデルを Minecraft で競わせたが、かなり苦戦していたと紹介。
- **Kiboneu**: Luanti（オープンソースの Minecraft 風ゲーム）にエージェント向けの Lua MOD を書かせれば自分でも再現できる。
- **ansipunk**: 印象的だが、LLM はこの種のリアルタイム用途に向かず遅延が大きい。2017年の OpenAI の Dota 2 ボットのような専用モデルの方が適している。
  - **tonyhart7**: それは LLM（Transformer）ではなく LSTM だと指摘。
- **grenoire**: エージェントがほぼターン制のように動く点が気になった。
  - **nsingh2**: 大きな推論 LLM はライブゲームに不向きで、カードゲームやターン制戦略の方が合う。
- **robterrell**: 肥料係の任命に11分かけた話を引用し、『銀河ヒッチハイク・ガイド』の B 方舟のようだと評した。
  - **kergonath**: 人間の集団を歪めて再現したようで面白く、同時に怖い。
  - **Rapzid**: 些末なことに固執するのはエージェント全般に見られる。

## 5. [A tiny world model running games on a Raspberry Pi Pico 2 W](https://github.com/SheepSeb/tinyworldformer)

**Score:** 169 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50295450)

Raspberry Pi Pico 2 W 上で、ゲーム生成（フレームと行動から次フレームと報酬を予測）と、そのゲームのプレイを同時に実行する2つの小さなニューラルネットワークのプロジェクト。ワールドモデルは 26k〜131k パラメータのループ型 Transformer（int8 量子化）で、プレイヤー側は 9k〜16k パラメータの MLP である。

### Key Discussion Points

- **boustrophedon**: 学習にどのハードウェアを使ったかを質問。
  - **sheepseb**（作者）: ワールドモデルの学習は RTX 4060 で、エージェントは Pico 上でそのまま学習した。
- **dannyw**: ミニ Doom ではループ型 Transformer が必要だったが、単純なゲームでは不要だった点が興味深い。
- **andai**: ニューラルネットがこれほど決定論的に動くことに驚き、過学習との関係や全ゲーム共通のモデルかを質問。
  - **svantana**: パラメータ数が異なるのでゲームごとに別モデルのようだと指摘。
  - **sheepseb**: ゲームごとに独立したネットで、訓練データと検証データは重ならない。統合も容易だろうと回答。
- **cchance**: Pi で動くなら WebGPU でも動くかと質問。
  - **jbarberu**: Pico はコンピュータではなくマイコンなので、ベアメタルか RTOS で動くと説明。
- **xpct**: アクターがワールドモデルのミスも学習すると、幻覚を誘発して楽な状態に逃げるのではないかと懸念した。

## 6. [Herdr has released native app](https://github.com/herdrdev/herdr-app)

**Score:** 88 | **Comments:** 58 | [Post](https://news.ycombinator.com/item?id=50298436)

端末とコーディングエージェント向けのデスクトップアプリ Herdr が登場した。作業を「スペース」「タブ」「ペイン」に整理し、サイドバーで各エージェントの状態（作業中・ブロック・完了・アイドル）を一覧でき、ウィンドウを閉じても端末は動き続ける。Linux（Vulkan 必須）、macOS（Apple Silicon）、Windows 向けのインストーラが用意されている。

### Key Discussion Points

- **77ko**: 複雑なエージェント構成やソフトウェアファクトリーを、シンプルな1つのツールで置き換えられるゲームチェンジャーだと絶賛。
- **shepherdjerred**: このカテゴリで最も洗練されたツール。エージェント向けソフトは雑なものが多いが、Herdr は丁寧に作られている。
- **flippant**: 10年使った tmux から今年乗り換えた。内部で libghostty を使う点が良い。
- **indemnity**: 同種の Tern（クローズドベータ）を使い始めた。この領域は「エージェント作業の一元画面」を狙う競争が激しい。
- **steve_adams_86**: Claude Code のエージェントが Agents ペインに表示されないという不具合を報告。
- **sangupta**: 公式サイト herdr.dev の SSL 証明書が Chrome で無効と表示されると指摘。
- **game_the0ry**: 次々出るエージェントハーネスに追いつくのが大変だとこぼした。

## 7. [Astroterm: A Planetarium for Your Terminal](https://github.com/da-luce/astroterm)

**Score:** 49 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50270651)

C で書かれたターミナル用の星図ツール。日時と場所を指定して、恒星・惑星・月の満ち欠け・星座の形を ASCII でリアルタイムに描画する。

### Key Discussion Points

- **nvmdbljstm**: 実用性は別として、創造性の高さに感心した。
- **jaekwon**: 同様の発想をソーシャルネットワークに応用した gno.world を紹介。

## 8. [Cuis: The Modern Smalltalk-80](https://cuis.st/)

**Score:** 47 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=50255343)

Cuis は、シンプルさと高速性を重視した無料のオープンソース Smalltalk-80 開発環境。インスペクタやクラスブラウザ、Workspace を備え、ベクターグラフィックス、SVG、TrueType、Unicode をサポートする。Juan Vuletich とコミュニティが開発し、定期的にリリースされている。

### Key Discussion Points

- **edfsadfer**: Squeak や Pharo と同じ VM なので速いが、ライブラリは少なめ。Pocketbase と lighttpd で静的サイトを作っており、体験は良好。
- **yje07039**: Scratch 1.4 で Smalltalk を見て以来で、懐かしい。
- **chasil**: Smalltalk はもともと Logo と並ぶ子ども向け教育言語だったと補足。
- **sroerick**: 他の Smalltalk は敷居が高かったが、これは親しみやすいと評価した。

## 9. [I'm so bad at billiards that I ended up in the hyperbolic plane [video]](https://www.youtube.com/watch?v=kL9BTbIGxLg)

**Score:** 46 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50273104)

ビリヤードの軌道を数学的に考えていくと双曲平面にたどり着くという動画。YouTube は本文を取得できないため、コメントとタイトルからの要約で、動画の詳細な内容は確認できていない。

### Key Discussion Points

- **ChrisbyMe**: このチャンネルは宝庫で、ラムダ計算などの動画もおすすめ。
- **buildbot**: 驚くほど美しく、初めて知る話だった。自分も双曲的なアウタービリヤードのアートを作ってみたい。
- **temp0826**: 「DMT の存在とビリヤードをしているようだ」と冗談を飛ばした。

## 10. [CVE-2026-98432: Linux TCP Use-After-Free Risk and Patch Validation](https://www.penligent.ai/hackinglabs/cve-2026-98432/)

**Score:** 35 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50299182)

Linux カーネルの IPv4 TCP ハンドシェイク経路における use-after-free。リクエストソケットの IP オプションを子ソケットにコピーせず引き渡すため、別 CPU で再送 SYN を処理中に解放済みメモリを参照し得る。CVSS は 9.8（CVE 記録）から 5.9（Red Hat）まで評価が分かれ、Multipath TCP リスナーに対する遠隔 root 実行が管理された環境で報告された。対処は固定版カーネルへの更新と再起動で、MPTCP を使わないなら無効化が暫定策になる。

### Key Discussion Points

- **cadamsdotcom**: CVE の説明文が LLM の初稿のままで長すぎると批判。
  - **drum55**: 数段落で済む内容を9000語に水増しした低品質な記事だと同調。
- **majorchord**: 多くのサーバーは既定では MPTCP リスナーを作らない。`ss -M` で確認できる。
- **snvzz**: Linux にはこの種のバグが尽きない。seL4 のような構成なら影響を受けないと主張。
- **ReDress**: 記事の趣旨がつかめなかった。
- **walrus01**: ページの「世界初のエージェント型AIハッカー」ポップアップが邪魔で、もっと信頼できる CVE のリンクにすべきだと不満。
- **superkuh**: ファイアウォールで 20 バイト超のヘッダを持つ SYN を落とせば緩和できるのではと提案した。
- **aussieguy1234**: こうしたバグが次々見つかるため、修正のためのエンジニア採用が増えるだろうと予想した。

## Trends

- **オープンウェイトとエージェント**: Mistral Large 4 の重み公開が圧倒的な票を集め、エージェント群の実験（#4）、ターミナル型エージェント管理アプリ（#6）、Pico 2 W 上のワールドモデル（#5）と、AI のモデル・エージェント周辺の話題が上位を占めた。
- **セキュリティと金融の大事件**: Binance の大規模流出（#2）では、ステーブルコイン発行体による凍結という中央集権的な側面が議論の焦点になった。Linux カーネルの CVE（#10）は、AI が書いたような冗長な解説記事への不満も目立った。
- **基礎技術の再評価**: 2016年の H.264 解説（#3）、Smalltalk の Cuis（#8）、ターミナル星図（#7）、双曲平面の動画（#9）など、古典的・趣味的な技術への関心も根強い。
