---
title: "Hacker News トップ10まとめ（2026-08-25 22:03 JST）"
date: "2026-08-25T13:03"
category: "summary"
summary: "EUの梱包規制がマイクロ起業家を圧迫する記事や、MS Paintの不可視透かし、Xiaomi新CPUなどHN上位10件を要約"
tags: ["Hacker News", "テクノロジー", "サマリー"]
---

## 1. [Don't Wordle](https://dontwordle.com/)

**Score:** 67 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=49432319)

通常のWordleとは逆に、6回の試行のうちに隠された単語を**当てないようにする**逆転の発想ゲーム。緑・黄色・灰色のヒントを使って可能な単語をできるだけ多く排除していくのが目的で、やり直し機能や統計・スコア共有機能も備える。

### Key Discussion Points

- **Angostura**: cookie同意ボックスで何百もの「正当な利益」チェックボックスを外す作業に例えて皮肉る
- **netsharc**: 初心者向けに、緑・黄色ヒントの意味を示すビジュアルガイドをゲーム画面の近くに表示してほしいと提案
- **huhtenberg**: 黄色のEAと緑のHが揃った後の推奨プレイ例を紹介しつつ、辞書の単語選定があまり面白くないと指摘
- **hollylawly**: 皮肉にも今回に限って2回で正解を引いてしまったとぼやく
- **rylando**: このゲームのおかげで通常のWordleがずっと簡単に感じるようになったとコメント

## 2. [France's tax agency got hacked (in French)](https://www.cybernetica.fr/piratage-des-impots-comment-en-est-on-arrive-la/)

**Score:** 16 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=49433064)

2026年8月、フランス税務総局(DGFiP)が大規模なサイバー攻撃を受け、67万8千件の個人・事業者データ（氏名、家族割当商数、課税所得、源泉徴収率など）が流出した。侵入自体は6月末に検出・遮断されていたが、データ流出が実際にダークネットで販売されるまで発覚しなかった。原因として「境界内は信頼する」レガシー設計、省庁間のセキュリティ基準の不統一、クラウド移行・NIS2指令対応の遅れが挙げられている。

### Key Discussion Points

- **penr0se**: タイトルの誤字（"hacked" → "hacqued"）をジョークで指摘
- **zakxxi**（投稿者）: 検出の遅れ、法的側面、システム的な問題点まで踏み込んだポストモーテムだとして、フランス語記事の要点を英語で補足コメント

## 3. [HelloAssembly: The smallest possible complete Windows application](https://github.com/PlummersSoftwareLLC/HelloAssembly)

**Score:** 17 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=49432227)

x86アセンブリで書かれた、完全に機能するWindowsアプリケーションを可能な限り小さくする試み。ウィンドウメッセージループ、タイトルバー、最小化/最大化/閉じるボタン、システムメニュー、背景・テキスト描画を備えつつ、最小構成（Theron/Yasm版）では**383バイト**まで縮小されている。Dave's Garageのエピソードがベース。

### Key Discussion Points

- **delta_p_delta_x**: CRTをバイパスしてWindows APIを直接叩く点に注目しつつも、USER32.DLL/KERNEL32.DLLには依存していると指摘
- **WillAdams**: ソース非公開だが同種の実用的な小型ユーティリティ集としてgrc.comのfreewareを紹介
- **eggy**: FASMでさらに小さくできるか試したいとコメント、16bit DOS時代のCOMファイルの話に言及
- **drdexebtjl**: 開発者Dave Plummerが90年代にマルウェアや詐欺的ソフトを配布していたと過去の議論を引用して批判
- **taf2**: AIの普及でネイティブアセンブリコードを書く機会が増えると考え、自作のtic-tac-toeアセンブリプロジェクトを紹介

## 4. [iCloud+ Hide My Email addresses will remain on icloud.com](https://developer.apple.com/news/?id=1ptvdtcm)

**Score:** 517 | **Comments:** 157 | [Post](https://news.ycombinator.com/item?id=49426564)

Appleは2026年後半から「Sign in with Apple」の新規メールアドレスを `private.icloud.com` ドメインに移行するが、既存の `privaterelay.appleid.com` は引き続き機能する。一方でコミュニティからのフィードバックを受け、**iCloud+ Hide My Emailは従来通り `icloud.com` ドメインのまま維持**することを決定した。開発者はアカウントシステムやメール検証ロジック、ホワイトリストで両ドメインに対応する必要がある。

### Key Discussion Points

- **kqp**: プライベートメールリレーが多くの正規メールアドレスと同じドメイン・形式であることが大きな利点で、ブロックされにくいと指摘
  - **glenngillen**: 完全なプライバシーではないと同意しつつも、便利さから使い続けている理由を説明
- **hollow-moe**: 自社ドメインを使わせるのはApple自身のユーザーと他サービス双方を人質にする典型的な戦略だが、今回は理にかなっていると評価
  - **HeavenFox**: iCloud Private RelayだけがVPNブロックを回避できるサイトが多いと具体例を挙げる
- **philip1209**: 自分のブログにSign in with Appleを設定したいが、年間$99の開発者ライセンスが必要で残念だとコメント
  - **chanux**: 「あなたの読者はApple寄りが多いのか」と質問で切り返す
- **joshuat**: この機能を頻繁に利用しており継続を歓迎
- **SXX**: Appleがこの問題を理解してくれたことを喜びつつ、エイリアス名がもう少し推測されにくいものであってほしいと要望
  - **merlindru**: エイリアス名は変更可能だと確認しつつ、命名パターンが固定だとそれ自体で推測されやすくなる懸念を共有

## 5. [MS Paint and Photos invisibly watermark even locally generated output with GUID](https://xusheng.dev/posts/reversing/mspaint_invisible_watermark/main/)

**Score:** 762 | **Comments:** 374 | [Post](https://news.ycombinator.com/item?id=49421158)

MicrosoftのPaintとPhotosアプリは、ローカルで生成したAI画像にも**サーバーが発行するGUID（watermarkId）を不可視の透かしとして埋め込む**ことが判明した。プロンプト検証はMicrosoftのサーバーに送信され、NPUでのローカル画像生成後に`Watermarker.dll`がGUIDをピクセルに埋め込み、C2PAメタデータにも同じ値が「soft-binding」として記録される。透かし失敗時、Paintは生成失敗として扱うがPhotosはログを残して続行するなど、挙動に差がある。

### Key Discussion Points

- **ozereray1**: ユーザーの明示的な同意なしにGUIDを埋め込むのは重大なプライバシー侵害だと指摘
  - **stingraycharles**: プリンターも数十年前から同様のこと（追跡用ドット）をしてきたと引き合いに出す
- **mg794613**: AIとは無関係の問題であり、顧客を嫌うOSベンダーからなぜ購入し続けるのか疑問視
  - **alex_duf**: 有害コンテンツ生成を許せばMicrosoftは批判を免れないため板挟みだと擁護しつつ、Windowsの現状には同意しないとも
- **ComputerGuru**（投稿者）: 可視透かし（オフ可）と不可視透かし（無効化不可・ユーザー通知なし）の両方が存在すると説明
  - **nemomarx**: GUIDによる匿名化解除の容易さが気になる一方、AI生成画像限定なら回避可能ではと指摘
- **weberer**: 本質はAIではなく、生成したすべての画像に一意な識別子が付与される点で、著作権侵害の申し立てを口実に個人情報（氏名・住所等）を特定されうると警鐘
  - **Terr_**: プリンターも印刷物にシリアル番号とタイムスタンプを密かに追加していることが多いと補足
- **VCFundedGenYer**: 過去にMicrosoftがAzure DevOpsのコミットにCopilot透かしを誤って付与し、批判を受けて撤回した前例があると注意を促す

## 6. [Xiaomi: New CPU matches Apple cores single threaded, much faster multithreaded](https://twitter.com/lemire/status/2091894299289874926)

**Score:** 917 | **Comments:** 656 | [Post](https://news.ycombinator.com/item?id=49420873)

Daniel Lemireのツイートによると、Xiaomiの新プロセッサ「Xring O3」はシングルスレッド性能でApple並み、マルチスレッド性能では大きく上回るという。Geekbenchでシングルコア3,945、マルチコア15,221を記録し、44MBのキャッシュ（ノートPC用CPUより多い）、21実行ポートを持つC1-Ultraコア、AI加速用SME2やSVE2への対応など、キャッシュと実行ユニットに多くのトランジスタを投資している点が特徴的。ただし実消費電力や持続性能の検証はまだこれから。

### Key Discussion Points

- **ksec**: MediatekのDimensity 9500と同じARM C1-Ultraコアで、GB6ラボでは4000点超えだが実機のスマホでは冷却・電力制約により約3300点に低下すると指摘
  - **ColdStream**: モバイルチップ共通の古い問題として、性能は約15秒で頭打ちになりサーマルスロットリングが起きると補足
- **strictnein**: 最重要指標はワットあたり性能で、サーバーCPUでもApple超えは可能だが、コンパクトな密閉筐体（スマホ）に収めればほぼ確実に発火すると皮肉る
  - **kccqzy**: シングルスレッド性能でAppleを上回るCPUは存在しないだろうと反論
- **trvz**: 「匹敵する」は「今年の製品が競合の昨年モデルに及ばない」とも読み替えられ、Appleはまだ王座を追われていないと冷静な見方
- **nomendos**: Xiaomiのチップは100% ARM設計そのものであり、Appleのフルカスタム設計とは対等な比較ではないと主張
  - **ksec**: それでもARM C1-Ultraコアが誰でもアクセス可能になったこと自体が大きな意味を持ち、Appleの優位性は薄れつつあると再反論
- **nerdsniper**: M5 iPad・M5 MaxとXRing O3のAnTuTu/Geekbenchスコアを具体的に列挙して比較

## 7. [How Universities Should Prepare Founders](https://paulgraham.com/prepare.html)

**Score:** 170 | **Comments:** 200 | [Post](https://news.ycombinator.com/item?id=49428121)

Paul Grahamは、大学が起業家を育成するために特別な起業プログラムを新設する必要はなく、既存の実践的な学問分野（コンピュータサイエンス、機械工学、分子生物学など）を教えることこそが起業成功の基礎になると主張する。必要なのは、学生に「起業は自分にもできる」と感じさせることと、自分自身のプロジェクトに取り組む時間を与えることの2点のみ。ビジネスプランコンペのような模擬演習は「資金調達こそが本質」という誤った認識を植え付けるため有害だとしている。

### Key Discussion Points

- **neomantra**: 「大学が起業家をどう準備すべきか」より、「YCがこの20年でスタンフォードをどう変えたか」の方が興味深い問いだと逆の視点を提示
- **dofm**: PGにしても驚くほど空虚で優柔不断な内容だと批判
  - **zigman1**: 最近のPGのエッセイは彼自身が所有するアクセラレータの宣伝と化していると指摘
- **cushychicken**: 現状の何が問題なのか、YCは「少数のユニコーンを生む」という機能を十分に果たしていると擁護
- **bix6**: 起業家育成を大学の使命にすることが他の学生の犠牲の上に成り立つのではと懸念、VC寄りの視点だと指摘
  - **watwut**: それこそがVC起業家哲学の本質であり、少数の集団のみを重視する価値観だと皮肉る
- **jspann**: CS博士課程在籍者として、PhDは多くの人に過小評価されていると反論
  - **yieldcrv**: この分野ではPhDの機会費用が大きすぎるとして反論

## 8. [SiFive's First Server Platform](https://chipsandcheese.com/p/sifives-first-server-platform)

**Score:** 81 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=49428638)

SiFiveが発表した初のサーバープラットフォーム「BigSky SF-2U870」は、32基のP870-Dコア（2.2GHz）、256GB DDR5メモリ、PCIe 5.0、最大450WのGPU対応を備える。著者は「退屈なプラットフォームであることが良いこと」だとし、RVA23標準への対応によりUbuntu 26.04をそのまま動かせる点が、対応シリコン不足というRISC-Vエコシステム最大の弱点を補うと評価。IntelやAMDのハイエンド機と直接競合するのではなく、開発者がファームウェア問題に煩わされず開発に専念できる開発プラットフォームとしての役割を狙う。

### Key Discussion Points

- **ozereray1**: RISC-Vが本格的なサーバープラットフォームに進出するのは大きな節目で、クラウドデータセンターのベンダーロックインを崩す可能性があると評価
- **yjftsjthsd-h**: 最大450WのGPUサポートについて、Jeff Geerlingのラズパイでの大型GPU利用経験を引き合いに、マイナーなプラットフォームは動作しても細かい不具合が多いのではと懸念
- **hn97o8vvbt**: 「コードがクリーンで追いやすい」と簡潔に評価
- **camel-cdr**: 自身のベンチマーク結果ページへのリンクを共有
- **br0ceph**: このプラットフォームのブート環境がオープンソースか、それとも大量のバイナリブロブなのか質問

## 9. [How Europe is killing makers and micro-entrepreneurs](https://lectronz.com/u/lectronz/articles/how-europe-is-killing-makers-and-micro-entrepreneurs)

**Score:** 1470 | **Comments:** 923 | [Post](https://news.ycombinator.com/item?id=49419237)

2026年8月施行のEU梱包・梱包廃棄物規則（PPWR）が、小規模メーカーやマイクロ起業家に不釣り合いな行政負担を強いていると告発する記事。ギリシャの小規模エンジニアの例では、わずか10個のセンサーボードを4か国に販売しただけで年間約1,150ユーロの行政費用が発生するという。著者は「小さな廃棄物の環境負荷はセント単位だが、それを管理する官僚制度は数千ユーロ規模」と指摘し、売上高に基づく免除閾値やEU統一登録ポータル、マーケットプレイスによる集団代理制度などの解決策を提案している。

### Key Discussion Points

- **m000**: PPWRの報道を追ってきたが、多くのマイクロ企業が事業を圧迫されていると嘆く声に共感しつつも規制の必要性も理解できると両論を提示
  - **jorvi**: この法案はAmazonのロビー活動によって推進された可能性があると指摘
- **mstaoru**: 中国では大手プラットフォームや物流会社という「関所」を規制することで、はるかに大きな荷物量に対応していると事例を紹介
  - **riffraff**: EUの出入国管理システムも2024年→2025年→2026年と度々延期されている例を挙げ、EU規制の実施が遅延しがちなパターンを指摘
- **anigbrowl**: EU公式のFAQへのリンクを共有し議論の材料を提供
  - **veeti** / **l-one-lone**: マイクロ企業向け例外規定の解釈（ブランド梱包が加盟国内で最初に供給された場合限定か否か）を巡って詳細な応酬
- **yardie**: EUは事実上連邦制であり、加盟国ごとに法解釈や執行の厳格さが異なる点が最大の問題だと指摘
  - **bambax**: Amazon欧州での実体験として、単一国からの販売以外は「輸出」扱いとなり高額な手数料が発生すると具体例を共有
- **mpweiher**: EU委員会は当初単一の中央登録制度を望んだが、加盟国側（閣僚理事会）がそれを阻止した経緯を説明し、EUは是正に向けて動いていると補足
  - **conradfr**: （皮肉交じりに）「Claude Codeにトラウマがある」と話題をそらすジョークコメント

## 10. [The entire city of San Francisco as a video game](https://sf.thijs.gg/)

**Score:** 521 | **Comments:** 151 | [Post](https://news.ycombinator.com/item?id=49422784)

実在のサンフランシスコをOpenStreetMapのオープンデータを使ってビデオゲーム化したインタラクティブプロジェクト。WASDでの移動、マウス視点操作、ジャンプなど基本的なFPS風操作に対応し、プレイヤーは三人称視点で街を探索・テレポートできる。マルチプレイヤー機能も実装されているが現在は無効化されている。マップタイルはリアルタイムで読み込まれる。

### Key Discussion Points

- **gcanyon**: FPS未経験者からの質問として、プレイヤーの移動方向にカメラを追従させる仕組みについて尋ねる
- **cutoff**: 素晴らしい出来だとしつつ、Google Street Viewデータを使ったローカル高解像度版や、ライブMMO化への期待を語る
  - **nuwandavek**: 地図データの活用可能性は大きいとし、リアルタイム画像モデルでシーンを整える類似の個人プロジェクト（sf.isopolis.city）を紹介
- **frankhorrigan**: 元SF住民として、20年近く過ごした街を歩き回れることに感情的になったと吐露、昔よく通ったディスクゴルフコースやテニスコートを再訪
  - **aguynamedben**: 同じくSFに15年住み、子供が幼児だった頃のマリーナ地区を思い出したとし、正確な縮尺の再現度に驚嘆
- **jvogt**: 標高データ・建物データ・地図・ストリートビュー画像を統合し、GTAエンジン向けの都市を自動生成するパイプラインを長年夢見ていると語る
  - **lifebeyondfife**: 自身も15年同じ夢を抱いており、vibe codingで似たようなものを作り始めたと共有
- **JKCalhoun**: 90年代のレースゲーム『Vette!』（フロッピー3枚組）がSFを舞台にしていたと懐かしむ
  - **beej71**: 自分も全く同じコメントを投稿しようとしていたところで、『Vette!』がSFオープンワールドゲームへの憧れの原点だったと共感

## Trends

今回のトップ10では、**プライバシーと透かし技術への警戒**（MS Paint/Photosの不可視GUID透かし、Appleのメールリレードメイン維持）と、**EU規制がテック事業者に与える負荷**（PPWRによるマイクロ起業家圧迫）が特に強い議論を呼んだ。半導体分野では**中国勢の追い上げ**（Xiaomi Xring O3 vs Apple）と**RISC-Vのサーバー市場進出**（SiFive）が並び、次世代シリコンの競争構図が話題に。一方で、**ノスタルジーとレトロ／極小技術への関心**（383バイトのWindowsアプリ、90年代レースゲームを彷彿とさせるSFの街ゲーム化）も根強い。フランス税務当局への大規模ハッキングは、企業・政府の境界防御モデルの限界を改めて示した事例として注目された。
