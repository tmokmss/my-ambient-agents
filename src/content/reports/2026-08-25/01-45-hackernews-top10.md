---
title: "Hacker News トップ10まとめ（2026-08-25）"
date: "2026-08-25T01:45"
category: "summary"
summary: "iCloudメールドメイン維持、MS Paintの秘密透かし、Xiaomi新CPU、EU規制論争など話題の10本"
tags: ["hackernews", "tech-news", "digest"]
---

## 1. [iCloud+ Hide My Email addresses will remain on icloud.com](https://developer.apple.com/news/?id=1ptvdtcm)

**Score:** 217 | **Comments:** 49 | [Post](https://news.ycombinator.com/item?id=49426564)

Appleは「Sign in with Apple」のメールリレードメインを `privaterelay.appleid.com` から `private.icloud.com` へ2026年後半に変更すると発表したが、iCloud+ の Hide My Email アドレスは引き続き `icloud.com` ドメインのまま維持されることになった。開発者はメール検証ロジックで新ドメインの受け入れが必要になる。

### Key Discussion Points

- **hollow-moe**: icloud.comドメインを使い続けることは、Appleが自社ユーザーと他サービスの両方を人質に取る典型的な戦略だが、今回はユーザーのためになる正当な理由があると指摘。
  - **HeavenFox**: 実例として、多くのサイトがiCloud Private Relay以外のVPNをすべてブロックしている、と補足。
  - **dilyevsky**: 「Hide My Emailは任意のドメインにリダイレクトできるのに、なぜユーザーが人質に取られていると言えるのか」と疑問視。
- **giwook**: 背景がよくわからないと質問。
  - **dannyw**: Appleは元々「Hide My Email」を常に`@icloud.com`で提供し、全iCloudユーザーに紛れ込ませることでフィルタリングを防いでいた。カスタムドメインへの変更計画は、サイト側がHide My Emailユーザーを識別・拒否しやすくなるため撤回されたと説明。
- **NotThatFast**: カスタムドメインで複数メールを無料追加できる点を評価しつつ、iCloudアドレスからのメールがGmailで迷惑メール扱いされる皮肉を指摘。
  - **Quothling**: 個人的にはGmail自体を使わない選択肢もあるはずで、迷惑メール判定はGmail固有の問題では、と反論。

## 2. [Xiaomi: New CPU matches Apple cores single threaded, much faster multithreaded](https://twitter.com/lemire/status/2091894299289874926)

**Score:** 723 | **Comments:** 487 | [Post](https://news.ycombinator.com/item?id=49420873)

Daniel Lemireの投稿によると、Xiaomiの新型プロセッサ「Xring O3」はGeekbenchシングルコアで3,945、マルチコアで15,221を記録し、シングルスレッドでAppleコアに匹敵、マルチスレッドでは大幅に上回る。44MBという「多くのノートPC用CPUより大きい」キャッシュと21実行ポート(うち6基がSIMD)を備える。

### Key Discussion Points

- **ksec**: MediatekのDimensity 9500と同じARM C1-Ultraコアを採用しており、スマートフォン筐体内では実測3300点程度に落ち着く。それでもXiaomiがMediatek級のチップを作れるようになったのはMediatekとQualcommにとって悪材料だと分析。
  - **ColdStream**: モバイルチップは最初の15秒だけ好成績で、その後サーマルスロットリングするのが常。フォームファクタが最終的な制約になると指摘。
  - **cromka**: このチップでWindows/Linuxをきちんとサポートし、デスクトップ/ノートPC向けにOEM販売してほしいと期待。
- **strictnein**: 「ワット当たり処理性能」という最重要指標が抜けている、サーバーCPUならApple超えは容易だが電力・発熱面で携帯電話には収まらないと批判。
  - **zamadatix**: 自分のA19搭載端末がオーバークロックした9800X3Dにシングルスレッドで匹敵する例を挙げ、電力を問わなくても驚異的だとコメント。
  - **kccqzy**: シングルスレッドでAppleを上回るCPUは存在しないはずだと反論。
- **nerdsniper**: M5/M5 Max/XRing O3のAnTuTuおよびGeekbenchスコアを具体的に列挙し比較。
  - **throwa356262**: Geekbenchはクロスプラットフォーム比較には不向きなベンチマークだと指摘。

## 3. [MS Paint and Photos invisibly watermark even locally generated output with GUID](https://xusheng.dev/posts/reversing/mspaint_invisible_watermark/main/)

**Score:** 562 | **Comments:** 228 | [Post](https://news.ycombinator.com/item?id=49421158)

MicrosoftのPaintとPhotosは、AI生成・編集された画像に対し、`Watermarker.dll`を介して16バイトのGUIDを不可視透かしとしてピクセルとC2PAメタデータの両方に埋め込むことが判明した。プロンプトは一度Microsoftのサーバーでモデレーションされ、返却されたGUIDがローカルの生成処理で画像に埋め込まれるため、「ローカル生成」と言っても実際にはオンライン処理を経由している。

### Key Discussion Points

- **clickety_clack**: MS Paintが単純な点描ペイントアプリでなくなったことに驚き、機能追加より新しいアプリを別に作るべきだったのではと皮肉。
  - **pxoe**: 背景除去機能自体は便利で時間の節約になると擁護。ただし消しゴムなど基本ツールがギザギザで粗末な仕上がりになる問題を指摘。
  - **SideQuark**: 見出しでなく記事を読めば、これはAI業界標準に沿った一般的な透かしだと分かると反論。
- **weberer**: AI云々は本質ではなく、一意な識別子を画像に埋め込むことで著作権侵害の申し立てを通じてMicrosoftアカウントの氏名・住所等をすぐに特定できてしまう点が真の問題だと主張。
  - **Terr_**: プリンターも同様に秘密のシリアル番号・タイムスタンプを印字しており、これがMS/Appleのテレメトリと組み合わさると、匿名のはずのビラ作成者すら特定されうると警鐘。
  - **fishfasell**: AIの話ではなくユーザー識別・監視国家的側面を人々が見過ごしていると同意。
- **ComputerGuru**(投稿者): 可視・不可視両方の透かしが付き、不可視の方はオフにできず、プロンプトと端末/ユーザーに紐付くGUIDを含むと技術詳細を解説。
  - **nemomarx**: GUIDでの脱匿名化がどれだけ容易か知りたいが、AI生成画像限定なら回避も可能では、と質問。

## 4. [Moon (2024)](https://ciechanow.ski/moon/)

**Score:** 97 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=49426466)

Bartosz Ciechanowskiによる、月に関する包括的なインタラクティブ解説記事(2024年公開の再掲)。万有引力の法則から二体・三体問題、潮汐ロック、月食・日食の条件、クレーターや月の海の成因まで、数百のインタラクティブなシミュレーションを使って視覚的に説明している。

### Key Discussion Points

- **curuinor**: LLMに「Ciechanowski風」のプレゼンを作らせて自分の学習に使っているが、これはスタイルの盗用にあたるのか気になると問題提起。
- **big_toast**: いつも非常に詳細な記事だが、目次がないのはなぜだろうと編集方針に疑問。
- **dang**: 2024年12月にも関連投稿があり250件のコメントが付いていたと補足リンクを提示。
- **jjcm**: Ciechanowskiはウェブの未来像を先取りしており、AI支援開発でこうしたインタラクティブページが当たり前になったことに感謝を述べた。
- **xattt**: ページ冒頭の満月表示が今後の月食を反映していないと軽く指摘。

## 5. [The entire city of San Francisco as a video game](https://sf.thijs.gg/)

**Score:** 346 | **Comments:** 119 | [Post](https://news.ycombinator.com/item?id=49422784)

サンフランシスコ全体を舞台にした3Dマルチプレイヤーゲーム。クリックでテレポート移動、木材・石・金属などの資源収集、WASD操作やタイルストリーミングによる段階的な街の読み込みに対応する。

### Key Discussion Points

- **cutoff**: 高解像度版や街の名前表示、住所へのテレポート、座標共有URLなど改善アイデアを多数提案。
- **frankhorrigan**: SF在住20年で今はNYに住んでいるが、昔よく行った場所を歩いて感情が揺さぶられたと感想。
  - **madrox**: 自分も同じような経験で、実際のSFに戻るより懐かしさを感じたとコメント。
  - **marciob**: Googleマップと何が違うのか、と率直に質問。
- **fjlunky**: retroplasmaのフライオーバー逆解析コードを使っているのか、と技術的背景を質問。
  - **1e1a**: 三角形スプラッティング(triangle splatting)を使っているように見えると分析。
- **jvogt**: 標高データや建物データ、ストリートビュー画像からGTA風マップを自動生成するパイプラインを長年夢見ていたと共感を表明。
  - **DiscourseFan**: GTA風オープンワールドの大量生産という発想はRockstarにとって脅威的だが技術的必然だとコメント。
- **jparishy**: フィラデルフィアを舞台にした類似プロジェクトを自作中だと紹介。
  - **leviathant**: 自分の家を見つけられて感動し、独自のアートディレクションを評価。

## 6. [How Europe is killing makers and micro-entrepreneurs](https://lectronz.com/u/lectronz/articles/how-europe-is-killing-makers-and-micro-entrepreneurs)

**Score:** 1061 | **Comments:** 656 | [Post](https://news.ycombinator.com/item?id=49419237)

EUの包装・包装廃棄物規則(PPWR)により、小規模メーカーが複数加盟国で個別に登録・報告義務を負うことになり、実質的な廃棄物量に見合わない行政コストが発生していると主張する記事。ギリシャの技術者が4カ国に少量発送する例では年間約1,150ユーロの管理コストがかかるという。売上下限の導入やEU統一ポータルの創設などが解決策として提案されている。

### Key Discussion Points

- **anigbrowl**: EUの公式FAQを引用し、マイクロ企業やジェネリック包装には適用されないため、記事は最悪ケースの誤解に基づいていると反論。
  - **veeti**: FAQの図はB2C配送時に包装購入者が「生産者」とみなされるケースを考慮しておらず、記事の主張通り既に多くのEC事業者が閉鎖に追い込まれていると再反論。
  - **aero_code**: 該当ページを確認したがマイクロ企業の例外は見当たらず、むしろ逆の記述だと指摘。
- **mstaoru**: 中国では物流大手など「関所」となる事業者に責任を集中させることで規制をスケーラブルにしていると、EUとの違いを説明。
  - **radicalbyte**: この問題は4年前から議論されており、今更「寝耳に水」ではないはずだと述べた。
- **yardie**: EUは連邦的な構造のため、同じ法律でも加盟国ごとに20〜24通りの運用差が生まれ、小規模事業者の視点が欠けていると指摘。
  - **bambax**: Amazon欧州で6カ国分のVAT登録と現地語での報告書提出に追われ、最終的に販売を諦めた実体験を共有。
  - **labcomputer**: これは意図的な規制強化(regulatory capture)であり、富裕層には抜け道がある一方、中間層の新規参入を阻んでいると分析。
- **germandiago**: 自身の会社設立にあたり真っ先にスペインを離れる決断をした、税務当局が非常に攻撃的だと述べた。
  - **TacticalCoder**: スペインは観光・不動産に依存する経済のため外国人や旅行者から搾り取る傾向が強いと、自身の経験を交えて長く反論。

## 7. [Bookshelf – Self-hosted eBook library that runs on object storage](https://github.com/murerkinn/bookshelf)

**Score:** 33 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=49427001)

既存の電子書籍(EPUB/PDF)を管理・閲覧するための自己ホスト型ライブラリ。Cloudflare Worker+R2、またはNode.jsサーバー+ローカルディレクトリの2通りでデプロイでき、データベース不要。認証機能がないため、信頼できるネットワークでの運用が推奨されている。

### Key Discussion Points

- **philips**: 自分はcopyparty(単一バイナリ、OPDS・WebDAV対応)でフラットファイルベースの電子書籍ライブラリを運用していると代替案を紹介。
- **robbiet480**: もう少し高機能なものを探しているなら、まだ若いが強力な「Bookorbit」を試してみたと別の選択肢を提示。
- **daoboy**: Calibreのセットアップを学習中だが、これを使う利点は何かと質問。
- **storywatch**: CalibreはS3をストレージバックエンドとしてサポートするようになったのか、と質問。
- **bakies**: 良い自己ホスト型オブジェクトストレージの選択肢さえあれば、と環境面の課題を吐露。

## 8. [Where did all the public bathrooms go?](https://daily.jstor.org/where-did-all-the-public-bathrooms-go/)

**Score:** 154 | **Comments:** 314 | [Post](https://news.ycombinator.com/item?id=49422800)

19世紀パリではコレラ対策として公共の場での排尿が禁止され、装飾的な「ピソワール」が解決策となった。アメリカでは禁酒運動の活動家がバー(事実上の公衆トイレネットワーク)との関連を断つため大規模な地下「快適駅」の建設を推進したが、20世紀にほぼすべて姿を消し、現在市民はホテルやレストランなど半民間施設のトイレに頼らざるを得ない状況になっている。

### Key Discussion Points

- **mstaoru**: IBS持ちとして、EUでは外出が苦痛だが、中国やタイでは清潔で無料のトイレが豊富にあり気軽に借りられると比較。EUの多くの公衆トイレには使用済み注射器入れまであると酷評。
  - **talon8635**: 反社会的な人々による施設破壊が少ない社会なら提供できる、西側はそれを手放したのが残念だと同意。
  - **freehorse**: 「EU」は広すぎる括りで、国によって公衆トイレの状況は大きく異なると補足。
- **xyzelement**: 「コモンズの悲劇」という表現が使われるが、実際に問題を起こしているのは社会の最悪の10%であり、その行為のせいで公共施設全体が閉鎖に追い込まれると主張。
  - **ssl-3**: 公衆トイレを減らしても、その10%の人々の行動は別の場所で続くだけで、問題は何も改善されていないと反論。
  - **8f2ab37a-ed6c**: この現象を「defining deviancy down(逸脱の基準を下げる)」という言葉で表現できると提案。
- **psadauskas**: 他国を爆撃するのに1兆ドル使う一方、トイレ清掃員を雇う予算すら惜しむ矛盾を指摘。
- **strbean**: フランスでは有人・50セント有料のトイレを利用したが、無料より遥かにましだったと体験を共有。
  - **Cthulhu_**: 50セントは清掃員の人件費であると同時に、コインを入れる手間自体が濫用を防ぐ効果もあると説明。
  - **indoordin0saur**: NYCではバーやカフェで何か買ってトイレを借りる、あるいは忙しいバーに紛れ込んで使うのが実情だと対比。

## 9. [One corner of China's internet is insisting that the Tang Dynasty never existed](https://www.cnn.com/2026/08/19/style/china-tang-dynasty-never-existed-hoax-intl-hnk)

**Score:** 127 | **Comments:** 101 | [Post](https://news.ycombinator.com/item?id=49425819)

中国のインターネットの一部で「唐王朝(618-907年)は実在しなかった」とする陰謀論が広がっているという記事(元記事は取得できなかったため、以下はコメントに基づく要約)。コメント欄では、乾陵などの考古学的遺跡、唐滅亡直後に編纂された『旧唐書』などの正史、遣唐使に関する日本側の記録という強力な反証が示されている。

### Key Discussion Points

- **A_D_E_P_T**: 考古学的遺跡、唐直後の史書、遣唐使に関する日本の記録という複数の一次・外国史料を挙げてこの説を一蹴。一方で、実在がより不確かな夏王朝・商王朝への学術的懐疑論は真剣に扱う価値があると対比。
- **graemep**: 中国版「ファントムタイム陰謀論」(西洋の中世偽造説)に相当し、対象時期もほぼ同じだが、動機に人種的な側面がある分より悪質だと分析。
- **anigbrowl**: 同種の歴史論争は米国でも短いスパンで起きており、書店の歴史コーナーが学術ではなく物語戦争の場になっていると嘆いた。日本にも核兵器の存在自体を否定する著者がいる例を紹介。
- **sincerely**: この現象についてより優れた別記事があるとリンクを共有(Substack記事のため本レポートでは参照を省略)。
- **raajg**: 『There Is No Antimemetics Division』や『1984』のような、政府が偽の歴史を確立し記憶を書き換える作品を連想させると述べた。

## 10. [Jabber/XMPP: 25 Years of Digital Independence](https://gultsch.de/posts/25-years-of-digital-independence/)

**Score:** 170 | **Comments:** 64 | [Post](https://news.ycombinator.com/item?id=49421536)

デジタル通信を真のインフラとして扱うべきであり、オープン標準の採用が不可欠だと論じる記事。XMPPはIETF管理下でRFC 6120として標準化された25年以上の歴史を持つ真のオープン標準である一方、Matrixは単一ベンダー支配下にあり真の意味でオープンではないと主張。XEP(拡張プロトコル)を通じて継続的に進化してきたことも紹介されている。

### Key Discussion Points

- **fishgoesblub**: MovimやFluuxのチームの取り組みに期待しつつ、MatrixがXMPPを改善せず独自路線を取ったのは残念で、Matrixが得た資金がXMPPに投じられていたらと惜しんだ。
  - **PunchyHamster**: XMPPは拡張の寄せ集めで古く煩雑になっており、サーバー/クライアントが何をサポートするか把握するのが大変で、誰もそこまでのモジュール性を望んでいないと擁護的でない見方を示した。
- **delduca**: Facebook・Google等がXMPPを使っていた頃、Adiumという単一のIMクライアントで全部管理できたのが良かったと懐古。
- **abound**: Google VoiceからXMPPベースのjmp.chatに移行し、DinoとCheogramで快適に運用中、次はProsodyの自前サーバー構築を計画していると体験談を共有。
- **pavo-etc**: XMPPをAIエージェント間の通信レイヤーとして採用し、既存のサーバー(ejabberd)・クライアント(Fluux, Conversations)を使って快適に運用できていると紹介。
  - **gatlin**: 自作の類似プロジェクトを紹介しつつ、Bonjourサポートの有無を質問。
- **dewey**: 近年Jabberを使うコミュニティを見かけないが、まだ使われている大きなコミュニティはあるのか質問。
  - **inputmice**: 現在のXMPPはWhatsApp/iMessage/Signal的な個人間メッセンジャーとして使われることが多く、NATOや警察・諜報機関も利用していると回答、コミュニティ検索エンジンのリンクも提示。
  - **svyatoslavpavl**: Jitsi MeetはProsodyでシグナリングしており、WhatsAppも元はejabberdのパッチ版から始まったと補足。

## Trends

今回のトップ10では、**プライバシー・トラッキングへの警戒**(iCloudメールドメイン維持、MS Paintの秘密透かしGUID)、**中国発ハードウェアの急速な台頭**(Xiaomi Xring O3)、**現実世界をインタラクティブなウェブ/ゲームとして再構築する試み**(Ciechanowskiの月解説、SF全体を舞台にしたゲーム)、**規制・公共政策が個人や小規模事業者に与えるしわ寄せ**(EUのPPWR規制、公衆トイレの衰退)、**オープンプロトコル対ベンダーロックイン**(XMPPの25年)、そして**歴史修正主義・陰謀論への警戒**(唐王朝否定論)という6つのテーマが浮かび上がった。総じて「大企業・国家によるコントロールと、個人の自律性・オープン性のせめぎ合い」が今回の顔ぶれに共通する底流と言える。
