---
title: "Hacker News トップ10 ダイジェスト（2026年9月28日）"
date: "2026-09-28T19:34"
category: "summary"
summary: "Google 検索の AI 化への不満が1754ptで圧倒、Sonnet 5.5 発表、Parley、映画のデジタル保存などがトップ10入り"
tags: ["hackernews", "summary", "google", "ai"]
---

## 1. [When did Google get so weird?](https://sancho.bearblog.dev/google-weird/)

**Score:** 1754 | **Comments:** 960 | [Post](https://news.ycombinator.com/item?id=49870367)

Google 検索が AI 回答中心に変わり、奇妙な挙動をするようになったことを論じる記事。記事本文は取得できなかったため、コメントから推測した要約である。AI 回答が誤情報を返したり、HN の話題を即座に引用したりする事例が多く共有された。

### Key Discussion Points

- **bbbrad**: 「Dario staying in Turkey」に関するミームを検索すると、AI が直近の HN の議論を根拠に回答する例を紹介
  - **true_religion**: 投稿から3分後に見えたことから、Google が HN をほぼリアルタイムで参照していると指摘
  - **mNovak**: Google は最近のイベントを非常に重く扱うため、過去の情報を探しにくいと述べた
- **Hugsbox**: サッカーチームのプレーオフ進出について AI 要約が誤答し、指摘しても誤りを続けた
  - **safety1st**: AI 回答が画面の大部分を占め、たいてい間違っていて、広告や動画も増えたと批判
  - **beloch**: LLM は「考えて」いるわけではなく、基本的なことで失敗するのは以前の文字数え問題に似ていると述べた
- **BatchJob**: 技術業界が恐怖を煽って AGI 到達を印象づけようとしていると懸念
  - **howunfortunate**: 本気で信じているだけの可能性もあり、15年前の AGI の基準なら今の LLM は満たすと反論
  - **ozozozd**: 一部は救世主コンプレックスに近いと述べた
- **HarHarVeryFunny**: Google の AI Mode は「2026年版 ELIZA」で、検索結果を期待して google.com に来る人には不要
  - **ck2**: URL に `&udm=14` を付けると AI 結果が出なくなると紹介
  - **chrisjj**: Google は利用者の望みではなく、自社が望ませたいものを提供していると指摘
- **robin_reala**: 検索が欲しいなら Google を使い続けること自体が問題だと主張
  - **zymhan**: 代替を求めていない人への「他を使え」は役に立たないと反論
  - **kelnos**: Kagi を数年使っており、他人の PC では DuckDuckGo で十分だと述べた

## 2. [Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)

**Score:** 269 | **Comments:** 174 | [Post](https://news.ycombinator.com/item?id=49881850)

Anthropic による Claude Sonnet 5.5 の発表。記事本文は取得できず、コメントから推測した要約である。コメントによると、Terminal-Bench で Opus 5.5 を上回るスコアが出ている一方、価格や使い分けが議論になっている。

### Key Discussion Points

- **simonw**: 恒例のペリカン SVG テストで、max の思考量では思考トークンを128,000使い切り、最終 SVG を出せなかった。Opus 5.5 と同じ問題だという
  - **thefourthchime**: PacMan の課題はほぼ完璧で、Opus 5.5 に次ぐ成績だと報告
  - **croemer**: Opus 5.5 発表時の HN コメントをまだ学習していないためだろうと冗談を述べた
- **Sol-**: Opus 5.5 の効率が良く、5x プランの上限で足りるため、Sonnet 5.5 をいつ使うのか疑問
  - **maherbeg**: デプロイ監視、CI 修正、敵対的レビューなど、モデルに任せられる作業はもっとあると回答
  - **egeozcan**: Opus 5.5 のエージェントチームで20x プランの週間上限を2.5日で使い切ったと述べた
- **abejora**: Terminal-Bench で Sonnet 5.5 (70.6) が Opus 5.5 (66.4) を上回るが、システムカード 8.5 節によると Opus はフォールバックモデルによる回答が約10%あり、差の説明になりうる
  - **eli**: 実際の使用感が重要で、過剰なガードレールも含めて評価すべきだと述べた
  - **subscribed**: 理由にかかわらず Opus の方が低スコアなのは事実だと同意
- **MisterMunchkin**: 中国系モデルの約20倍高く、職場も Claude を払わなくなった
  - **throwa356262**: Mimo 2.6 Pro は約10分の1の価格で、Sonnet 5.5 のキャッシュ書き込み料金の設定も疑問視
- **sajithdilshan**: 普段は Opus と Haiku を使っており、Sonnet の用途が思いつかない

## 3. [Parley: Federated, decentralised chat that speaks plain IRC](https://git.mills.io/prologic/parley)

**Score:** 254 | **Comments:** 126 | [Post](https://news.ycombinator.com/item?id=49875913)

各自が自分のドメインで小さなインスタンスを運用し、DNS と well-known ドキュメントで相互発見、署名付きメッセージを HTTPS でやり取りする、中心のない分散チャット。一般の IRC クライアントからそのまま使える。

### Key Discussion Points

- **xena**: 悪意ある者が大量のサーバーを作りスパムを流す問題への対策を質問
  - **arm32**: 責任の重い問いだと反応
  - **malcolmxxx**: 冗談で応じた
- **singpolyma3**: ルームが全ホストでグローバルなら、永遠のネットスプリット状態で BAN もサーバー管理者だけになるのではと指摘
  - **davidcollantes**: BAN はサーバーごとで、どのサーバーもルームを所有しないので、落ちてもルームは残ると回答
- **davidcollantes**: 投稿者による概要説明
  - **someonebaggy**: AI 生成の要約ではと指摘
  - **altilunium**: 自分でインスタンスを運用せずに使えるか質問
- **flymasterv**: ボットを無制限に置け、iPhone に通知が届く軽量なセルフホストチャットを探している
  - **mxuribe**: ntfy クライアントを自作する理由を尋ね、Matrix のプライベートルームとボットの運用を紹介
  - **stackghost**: 同様の構成を運用していると述べた
- **rixed**: 新規アカウント不要になるよう、atproto や ActivityPods など既存の分散ネットワーク上に作るべきでは
  - **RobotToaster**: Matrix でもよいと提案
  - **WorldMaker**: 設計が ActivityPub に近いが同じではないと指摘

## 4. [Pirating the Pirates](https://mubi.com/en/notebook/posts/pirating-the-pirates)

**Score:** 223 | **Comments:** 77 | [Post](https://news.ycombinator.com/item?id=49880036)

MUBI Notebook の記事。本文は JS 描画で取得できず、コメントから推測した要約である。公式リリースが劣化・改変されがちな映画のデジタル版を、愛好家が非公式に修復・保存する動きと、DMCA による法的制約を扱っているようだ。

### Key Discussion Points

- **thewizzardofnl**: ジョージ・ルーカスの発言を引用し、スター・ウォーズ旧三部作ほど編集された映画はないと述べた
  - **alexpotato**: 小さい頃の絵本に映画にはないビッグスの場面があった思い出を語った
  - **paulryanrogers**: 特別版のレーザー弾の変更は嫌いだが、CGI による世界の拡張は好きだと述べた
- **alexpotato**: 記事で紹介された保存活動家のような人々がいることに、世界の広さを感じたと述べた
- **cosmic_cheese**: 正確な旧版が入手不能になり、劣化した新版だけが残る業界の姿勢に不満
  - **haunter**: TV 番組はサウンドトラックの権利問題でさらに悪いと指摘
  - **opello**: Star Trek: TNG のリマスターは再編集と新規 CG が必要だった特殊なケースだと補足
- **schlauerfox**: DMCA の例外は米議会図書館が定めるもので、EFF がその拡大を働きかけていると紹介
- **mahboi**: 時系列順でつらい場面を除いた『オッペンハイマー』を作りたいと冗談を述べた
  - **dd8601fn**: ノーランの音響ミキシングも直してほしいと返した

## 5. [Hijacking the PS5's RTMP stream](https://yashgarg.dev/posts/hijacking-ps5-rtmp-stream/)

**Score:** 113 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=49879702)

PS5 の配信機能が使う RTMP ストリームを乗っ取る技術ブログ。本文は未取得で、タイトルとコメントからの推測である。実ホスト名を突き止めて配信先を制御する手法のようだ。

### Key Discussion Points

- **londons_explore**: 2026年にもなって暗号化なしで流れているのは残念で、脆弱性も多そうだと懸念
- **ImpostorKeanu**: Bluetooth 周辺機器を PS5 で使う回避策が欲しい
- **Muromec**: rk3588 の HDMI-RX が動いていて満足だと述べた
- **mixdup**: 実ホスト名の特定から YouTube に配信が出る話までに飛躍があると指摘
- **rezonant**: 配信先 RTMP を自分で指定できればいいのにと述べた

## 6. [Show HN: HN.watch – Videos of all Hacker News posts](https://hn.watch/)

**Score:** 97 | **Comments:** 31 | [Post](https://news.ycombinator.com/item?id=49879401)

Hacker News の全投稿を AI が解説動画にするサイト。本文は未取得で、コメントからの推測である。動画あたりのコストが低い点が評価された。

### Key Discussion Points

- **vbernat**: 自分のブログ記事を Claude で動画化したが、数時間かかったと語った
- **fishtoaster**: テキストを好むので AI 生成動画は苦手だが、動画を好む人には価値があると評価
- **harvey9**: サイト内の HN 投稿リンクを踏むのは危険だと冗談を述べた
- **scosman**: AI 解説動画の OSS フレームワーク videowright を紹介。Opus 5.5 が転換点だと述べた
- **dverlaeckt80**: 技術的には印象的だが、AI の声が単調で退屈になりがちだと指摘

## 7. [GrapheneOS – When an app is slow](https://blog.wirelessmoves.com/2026/09/grapheneos-when-an-app-is-slow.html)

**Score:** 33 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=49882208)

GrapheneOS で OsmAnd が遅い原因が、強化されたメモリアロケータのオーバーヘッドではないかという考察。本文は未取得で、コメントからの推測である。

### Key Discussion Points

- **negative_zero**: Pixel 7 の GrapheneOS で OsmAnd は保護を無効化せずとも問題なく動くと報告
- **pjmlp**: アプリの改善や置き換えが本当の解決策ではないかと述べた
- **perching_aix**: アロケータのせいと断定できるのか、アプリのヒープ割り当ての問題ではないかと疑問を呈した

## 8. [Joseph Szabo’s pictures of American adolescents](https://www.newyorker.com/culture/photo-booth/the-teen-portraits-that-captivated-sofia-coppola)

**Score:** 23 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=49881606)

ソフィア・コッポラを魅了した、ジョセフ・サボによるアメリカのティーンエイジャーのポートレートを紹介する New Yorker の記事（タイトルから推測、本文は未取得）。

### Key Discussion Points

- **Triphibian**: Dinosaur Jr. のアルバムジャケットが出てきて、すべて腑に落ちたと述べた

## 9. [Launch HN: Vespper (YC F24) – SOTA Docx MCP](https://www.vespper.com/blog/launching-vespper-docx-mcp)

**Score:** 18 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=49881505)

AI エージェントが Word (docx) を編集するための MCP サーバー Vespper の Launch HN。本文は未取得で、コメントからの推測である。

### Key Discussion Points

- **khaki54**: 同種の Word MCP は4〜5個あり、ベンダー製もあると指摘し、差別化を問うた
- **c0mbonat0r**: python-docx で作った自社ハーネスと併用できるかを質問
- **david1542**: Vespper MCP を使った Word アドインの OSS 例を紹介
- **topaztee**: 無料でサインアップして試せると案内

## 10. [Who wrote Elizabeth I's most scathing letters?](https://www.smithsonianmag.com/history/who-wrote-elizabeth-is-most-scathing-letters-new-research-suggests-the-tudor-queens-male-secretaries-revised-her-correspondence-to-emphasize-her-temper-180989565/)

**Score:** 13 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=49881692)

エリザベス1世の辛辣な手紙は、男性秘書官が改稿して彼女の気性を強調した可能性があるとする新研究を紹介する Smithsonian の記事（タイトルから推測、本文は未取得）。

### Key Discussion Points

- **K0balt**: 強い文面の手紙が実際に重みを持っていた時代だと述べた
- **dsjoerg**: ポッドキャスト『The Rest is History』の内容と、この研究の見方は整合的だと紹介

## Trends

- **AI が検索と日常体験を変える**: Google の AI 回答への不満（1754pt）、Sonnet 5.5 の発表と価格・使い分けの議論、AI 生成動画の HN.watch、Word MCP など、AI が中心的な話題だった。
- **オープンで分散した仕組みへの関心**: Parley や PS5 の RTMP 乗っ取り、GrapheneOS など、中央集権的なサービスや制約を避けたい志向が見られた。
- **文化・歴史の保存と改変**: 映画のデジタル版の保存活動、エリザベス1世の手紙の改稿説など、記録がどう作られ書き換えられるかが話題になった。
- 注記: 多くの記事は本文を取得できず、タイトルとコメントから推測して要約している。
