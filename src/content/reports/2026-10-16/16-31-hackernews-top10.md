---
title: "Hacker News Top 10 (2026-10-16)"
date: "2026-10-16T16:31"
category: "summary"
summary: "ソフトウェアレンダリング愛、Mac Studio で巨大モデル、OpenBSD の37年前のカーネルバグなど HN 上位10件の要約"
tags: ["hackernews", "tech"]
---

## 1. [I Love Software Rendering](https://www.jamesfmackenzie.com/2026/10/13/i-love-software-rendering/)

**Score:** 187 | **Comments:** 130 | [Post](https://news.ycombinator.com/item?id=50117746)

3D カードを使わず CPU が全ピクセルを描画していた時代（DOS 版 Quake、Doom、Duke Nukem 3D など）のソフトウェアレンダリングへの愛を語る記事。シャープなテクスチャと256色ライティングによる粗い質感は、ハードウェアのフィルタリングでは失われると主張し、著者は原作の DOS 版を高速なレトロ PC で動かしている。

### Key Discussion Points

- **delta_p_delta_x**: これはソフトウェアレンダリングではなく空間アンチエイリアスを切っているだけで、現代のゲームでも可能。ルックアップテーブルも GPU のシェーダに渡せる。
  - **seritools**: 「I Love GL_NEAREST_MIPMAP_NEAREST」に改題すべきだと皮肉った。
  - **eska**: 著者の定義（CPU が全ピクセルを描画しビデオメモリへ書く）が標準的な定義だと擁護した。
  - **squidmaster**: ハードウェアレンダラなしで出荷されたゲームがソフトウェアレンダリングでないはずがないと反論した。
- **BugsJustFindMe**: 題名は「ピクセル化したテクスチャが好き」が適切で、バイリニアフィルタは単に使わなければよい。
  - **bartread**: GPU 上でフィルタを切るほうが省電力で、低性能 CPU でも高解像度にできると指摘した。
  - **sorenjan**: ピクセル化した 2D グラフィックが今「8bit」と呼ばれるのと同じ現象だと述べた。
  - **the__alchemist**: CPU か GPU かで見た目は直接変わらず、記事には概念の混同があると同意した。
- **mvx64**: ソフトウェアレンダリングを使う自作の新作ゲームを紹介した。
- **proc0**: 現代の CPU には統合 GPU があり、画面出力に CPU だけを使う環境はほぼない。
- **Waterluvian**: サウンドカードを足して 10fps 稼いだ思い出を語った。
  - **fwsgonzo**: その詳細を聞きたがった。

## 2. [Apple ML Research: Muse Spark Open with MLX on Mac Studio](https://machinelearning.apple.com/research/mlx-distributed-inference)

**Score:** 85 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=50118320)

Apple が、MLX で Mac Studio 上に大規模オープンウェイトモデルを動かす方法を紹介。約8160億パラメータの Muse Spark Open を Mac Studio 4台のクラスタで毎秒36トークン超で生成できるとする。Thunderbolt 5 の RDMA と `jaccl` バックエンドでテンソル並列が台数に応じて高速化し、512GB の単体構成ではより小さなモデルを動かせる。

### Key Discussion Points

- **ks2048**: Meta が巨額を投じて作ったオープンモデルを、人々が Apple に2万ドル払って動かす構図は Apple に好都合だと皮肉った。
- **peri-cl**: Meta のモデルを4bit、Qwen はネイティブ BF16 のみで比較しており Qwen を不当に不利にしている。Muse Spark は自分なら上位10にも入れない。
- **tony_cannistra**: 「机の上で」と言うが一般的な机ではないと突っ込みつつ、成果自体は面白いとした。
- **janderson215**: Meta の技術のプレスリリースなのに、コード参照以外で Meta に一切触れていないのが可笑しい。
- **comandillos**: 800B のモデルが300B級のモデルより性能が悪いと批判した。

## 3. [Big Fish: Exploiting a 37-Year-Old Kernel Bug in OpenBSD](https://calif.io/research/big-fish)

**Score:** 67 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=50118977)

Calif の研究者が、約37年前から存在する OpenBSD カーネルのバグを悪用した。共有メモリの符号付き16bitカウンタが fork の繰り返しで巻き戻り、範囲外書き込みと組み合わせて KARL・SMAP・SMEP 有効下でもローカル root を取得。OpenBSD は errata で修正済み。カーネルアロケータが決定的でアドレスが予測しやすかった点が指摘され、対策も提案されている。

### Key Discussion Points

- **bch**: OpenBSD リリース風のグラフィックを称賛し、テーマソングを期待した。
- **phendrenad2**: NetBSD では1999年8月のコード書き直しで偶然修正されていたようだ。
- **ozereray1**: 最も監査されたコードベースで37年生き延びた点に驚き、ファジングや静的解析で見つけられたのかを問うた。

## 4. [What on Earth Is Dekton?](https://www.worksinprogress.news/p/porcelain)

**Score:** 45 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50118828)

磁器は3000年以上前の中国北部で、カオリンを約1200℃で焼いて生まれた。ヨーロッパでは1708年頃に Tschirnhaus と Böttger らが再現に成功し、Meissen が中心となった。現代では Dekton のような工業磁器や3D プリントのバイオセラミック骨足場に発展し、脆さの克服が進んでいる。

### Key Discussion Points

- **ifh-hn**: 新しいキッチンを検討中で、妻がこの話ばかりしている。
- **jandrese**: 通常のガラスの価格は出すのに、肝心の磁器製コンロ天板の価格が書かれておらず残念。
- **modinfo**: 1分の解説動画へのリンクを紹介した。
- **TheRealPomax**: 冒頭の「キッチン機器オタク」という前置きと、誘導加熱天板が強化ガラスだと思っていたという話が記事全体の印象を損ねていると批判した。

## 5. [Is Liquid Metal Killing Our PCs? Scientific Analysis and a 2-Year Test [video]](https://www.youtube.com/watch?v=eF6bMSjPepM)

**Score:** 43 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=50111752)

液体金属サーマルコンパウンドが PC を傷めるのかを科学的分析と2年間のテストで検証する動画。動画本文は取得できなかったため、コメントに基づく。コメントによると、動画は未処理の銅上の液体金属が主題とされる。

### Key Discussion Points

- **SloopJon**: 動画は Thermal Grizzly のオーナーによるもの。自身は 9800X3D に KryoSheet を使い、今のところ問題なし。
- **Scene_Cast2**: 動画は未処理の銅への使用が対象のようだ。自身は CPU リッドの付け替えと直接ダイ冷却で液体金属を使い、アルミや未処理銅には触れていない。
- **buildbot**: 余談として、サーマルペーストの代わりになる再利用可能なインジウムパッドを紹介した。
- **thomasjudge**: 追っているノート PC 修理動画の修理者は、漏れによる故障が多く液体金属を嫌っている。
- **vanschelven**: 液体金属がサーマルペーストの代替だと知って理解した。

## 6. [How to Formalize All of Mathematics](https://xenaproject.wordpress.com/2026/10/16/how-to-formalize-all-of-mathematics/)

**Score:** 40 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50118512)

Jeremy Avigad や Kevin Buzzard らが、AI を使った形式化を支持しつつ、質の低い大規模な試みは資源の浪費や長期的な害を招きうると警告。形式化ライブラリは数学者が理解と新しい数学のために使って初めて価値があるとし、品質、共通基準、人間によるキュレーションを重視、3年計画を提案している。

### Key Discussion Points

- **ndriscoll**: 数学は一般性が高く実装詳細が重要でないため、C/C++ のヘッダと実装のように、定義・インスタンス・定理の記述と証明を分離すべき。
- **osculum**: すでに試されたのでは、と疑問を呈した。
- **N_Lens**: ゲーデルの不完全性定理を持ち出して皮肉った。
- **transitorykris**: AI を数学者のパートナーとして使う現実的な姿勢に好意的。一方で LLM が自分たち専用の不可解な数学の分野を作る可能性も指摘した。
- **rramadass**: 1979年の Ernst Snapper の論文を挙げた。

## 7. [RFC8950: Announce IPv4 with an IPv6 next-hop](https://anuragbhatia.com/post/2026/06/rfc8950-announce-ipv4-with-ipv6-next-hop/)

**Score:** 37 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=50118267)

RFC 8950 により、IPv6 の BGP セッションで IPv6 ネクストホップ付きの IPv4 経路を広告できる。制御プレーンだけが IPv6 で、IPv4 パケットはトンネルなしで同じ Ethernet 上をネイティブに流れる。FRR のラボで、IPv6 のみのプロバイダルータ越しに IPv4 のみの顧客同士が通信できることを示した。

### Key Discussion Points

- **petecooper**: RFC 本体へのリンクを共有した。
- **Alifatisk**: IPv6 の利用を促すためのものだろう。
- **ozereray1**: IPv6 のみのファブリックで IPv4 経路を運べて有用だが、FRR や BIRD などでの実際の対応状況はどうかと問うた。
- **asdfsa32**: IPv6 は移行用の IP over IP の応急処置が増え続ける「コンピュータサイエンスの汚点」だと批判した。

## 8. [Stolen Renoir paintings found hidden, and damaged, behind cinder block wall](https://www.cbsnews.com/news/stolen-renoir-paintings-found-behind-wall-france/)

**Score:** 24 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=50074322)

9月に南仏カーニュ＝シュル＝メールの美術館からルノワール2点が盗まれ、後に Clermont-l'Hérault の家の壁内から軽度の損傷を受けた状態で見つかった。29歳の容疑者が DNA 証拠で起訴された。ルーヴル美術館を含むフランスでの一連の美術館盗難の一つ。

### Key Discussion Points

- **john_strinlai**: 有名絵画の窃盗は、闇市場の買い手が極めて少なくリスクが高く、割に合わない犯罪に思える。

## 9. [America's Wumao: Inside Polymarket's Paid Quote-Retweet Esports Program](https://www.readergrev.com/p/polymarket-paid-quote-retweet-esports-investigation)

**Score:** 14 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50120010)

Polymarket が内部 Discord で800人超のユーザーに、公式 eスポーツアカウントの投稿を引用リツイートさせ、1投稿あたり約10ドルから数百ドルを暗号資産で支払っていると報じる記事。8月以降に倍増し、ガイドラインは開示を求め特定の取引推奨を禁じるが、自然に見えるかどうかの批判もある。

### Key Discussion Points

- **lwansbrough**: Polymarket の X アカウントは、キャンセルされた eスポーツ関係者などの個人アカウントを買い取って改名したものだという。
- **mock-possum**: このタイトルが2000年の人にも意味が通じるのかと笑った。

## 10. [Show HN: OneDeploy – Managed open-source apps with nightly backups and TLS](https://onedeploy.co)

**Score:** 9 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50119752)

WordPress や Nextcloud などのオープンソースアプリを、専有サーバー上にセットアップし、証明書、夜間バックアップ、更新を管理するサービス。時間課金で月額上限があり、ユーザー数課金はない。

### Key Discussion Points

- **turtlebits**: アプリごとにサーバー1台で、Immich に月85ドルは高すぎる。
- **js4ever**: elest.io の劣化版で非常に高価だと批判した。
- **WrtCdEvrydy**: セルフホスティングへの取り組みと自動 SSL は評価しつつ、アプリごとのサーバーは好まない。コントロールプレーンの所在を質問した。

## Trends

- **「昔ながらの技術・仕組み」への関心**: ソフトウェアレンダリング、OpenBSD の37年前のバグ、BGP/IPv6 の移行技術など、基礎的な仕組みの再訪が目立つ。用語の定義を巡る議論も盛り上がった。
- **AI・大規模モデルのローカル実行**: Mac Studio クラスタでの巨大モデル推論や、AI による数学形式化の質の議論が上位に並んだ。ベンチマークの公平性への疑問も出ている。
- **価格や透明性への懐疑**: OneDeploy の価格や Polymarket の有償宣伝プログラムに対し、コメントは厳しめだった。
