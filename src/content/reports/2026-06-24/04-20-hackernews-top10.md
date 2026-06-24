---
title: "Hacker News トップ10 サマリー（2026年6月24日）"
date: "2026-06-24T04:20"
category: "summary"
summary: "HNトップ10：スワイプキーボード・脆弱性報告の変質・極端な熱波・Appleによる買収など技術と文化の話題が並ぶ"
tags: ["hackernews", "security", "ai", "mobile", "apple", "climate"]
---

## 1. [Jerry's Map](http://www.jerrysmap.com/the-map)

**Score:** 367 | **Comments:** 49 | [Post](https://news.ycombinator.com/item?id=48649435)

1963年からJerry Gretzingerが描き続けてきた架空の都市地図プロジェクト。4,000枚以上の8×10インチパネルが円形に並ぶ巨大作品で、創作プロセスはアーティスト自ら作成した特製カードデッキの指示で駆動される。ランダムな指示が制約を生み出しながらも本質的な創造行為は人間に委ねられるという独特のシステムが注目を集めた。

### Key Discussion Points

- **archerways**: People Make Games が数日前に動画でこのプロジェクトを特集していると紹介
  - **lynguist**: 「1時間前にその動画を観たばかりなのにHNでトップに来ていて笑った」
  - **oliyoung**: 「最近見た中で最もお気に入りのYouTubeドキュメンタリー」
- **dhosek**: 子供の頃に似たことをしていた。湖畔や鉄道を描いてから架空の住宅区画を設計する、瞑想的な遊びだった
- **wxw**: カードシステムが創造プロセスを前進させながら実際の創造行為（タイルを作ること）を手放さない点が気に入っている
  - **strifey**: TRPGのダンジョン生成テーブルと同じ発想。「サイコロを全部従わなくていいが、アイデアの呼び水になる。非常に満足感がある」
- **graphviz**: かつてデータセットを地図で可視化するプロジェクトが存在した。2026年ならAIで後処理してさらに良くできるかも

---

## 2. [FUTO Swipe – A new swipe typing model](https://swipe.futo.tech/)

**Score:** 358 | **Comments:** 105 | [Post](https://news.ycombinator.com/item?id=48648619)

FUTO Keyboardがリリースした新しいスワイプ入力モデル。約250万パラメータの軽量MLモデルで、ローエンドデバイスでも動作する。100万スワイプのデータセットをMITライセンスで公開しており、C++推論ライブラリも提供することでサードパーティ開発者がスワイプ入力機能を組み込めるようにした。精度はGoogleキーボードに匹敵するレベルに達したとされる。

### Key Discussion Points

- **crazygringo**: スワイプ用に最適化されたキーボードレイアウト（タイピング向けDvorakのようなもの）が欲しい。QWERTYはスワイプに最適でなく、90〜95%程度の精度しか出ない
  - **nulld3v**: FUTOはすでにスワイプ最適化レイアウト「ClearFlow」をサポートしていると指摘
  - **deepsquirrelnet**（FUTO開発者）: QWERTYは「直線的・鈍角的な3文字連続が多すぎる」問題がある。約80万レイアウトをテストし、近くブログ記事を公開予定
- **blopker**: 最新アップデートでGboardから完全移行した。ランダムな大文字化やコンテキスト無視の候補表示は課題だが、GIF検索の欠如がイデオロギー的な反対から実装されていないのが残念
  - **james2doyle**: 「音声入力が突然絵文字を吐き出すバグに遭遇した?」
- **HiPhish**: ライブラリはGPLv3（良い）だが、Androidキーボード本体はFutoライセンス（問題あり）
  - **cge**: モデルにもまた別のFUTO製ライセンスが使われている
- **prism56**: 「GBoardと比較して妥協した感じがしない初めてのAndroidキーボード」と絶賛

---

## 3. [Vulnerability reports are not special anymore](https://words.filippo.io/vuln-reports/)

**Score:** 129 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=48653216)

セキュリティ研究者Filippo Valsordaが、脆弱性レポートがかつての「特別な地位」を失いつつあると論じた記事。LLMは人間の研究者と同程度に脆弱性を発見できるようになり、攻撃者も同じツールを利用できる今、機密性の高い協調開示エンバーゴの意義が薄れている。ボトルネックは「発見」から「トリアージ・迅速な修正・予防」へ移行すべきだと主張する。

### Key Discussion Points

- **themanmaran**: 企業として週2〜5件の未承諾「脆弱性レポート」を受け取る。半数はLLMがCSSの不具合を見つけたもので、残りは恐喝未遂かと思いスパム扱いにしている
- **socalgal2**: この状況は一時的。LLMがバグを発見・修正していけば、開発者はバグを作りにくい言語や手法へ移行せざるを得なくなる
- **cadamsdotcom**: セキュリティ対策には根本的なエンジニアリング解決が必要。メモリ安全言語の採用やTOCTOU問題・認証不備の研究が重要
- **david_shaw**: 部分的に異議。致命的な脆弱性の影響は以前と変わらない。本当の問題は「発見」ではなく「修正にリソースを割り当てること」
- **bawolff**: 報告のインセンティブ歪みはAI以前から存在する。trivialな脆弱性がcriticalと同等の扱いを期待している問題はずっとある

---

## 4. [Extreme Heat conference cancelled due to extreme heat warning](https://www.lse.ac.uk/granthaminstitute/events/extreme-heat-improving-governance-and-strengthening-action-around-the-world/)

**Score:** 234 | **Comments:** 160 | [Post](https://news.ycombinator.com/item?id=48653060)

ロンドン・スクール・オブ・エコノミクス（LSE）グランサム気候変動研究所が主催した「極端な暑熱：世界規模のガバナンス改善と行動強化」会議が、英国気象庁の赤色極端熱警報を受けてキャンセルされた。気候適応研究の表彰を行う予定だったイベントが、まさにその課題によって中止となったという皮肉な事態。

### Key Discussion Points

- **lwansbrough**: ヨーロッパ人のエアコン忌避をもっと批判すべき。ギリシャの熱中症死亡率はミシシッピ州の銃死亡率の2倍、砂漠のネバダ州でさえギリシャより10倍以上少ない
  - **sph**: アメリカ人のこうした批判にうんざり。「エアコンを設置できる状況なら設置してる」 1週間まともに眠れていない
  - **alexhans**: ロンドン・ダブリンで見られる矛盾。「暑い日は年に数回だからACは不要」と言いながら「温暖化で毎年悪化している」とも言う
- **shitloadofbooks**: オーストラリア地方出身者として37〜40℃は普通の温度。エアコンなしの教室に30人詰め込まれていた
  - **jcranmer**: 湿球温度が重要。同じ37〜40℃でも湿度次第で体への負荷が全く異なる。乾燥したNSW地方の熱は欧州の多湿な熱より体への影響が少ない
  - **maxerickson**: 湿度・参加者の年齢・建物の蓄熱性もすべて要因
- **delichon**: 「気候レジリエンス向上」の共催組織自身が熱に屈した。「ファイアサイドチャット」で締める予定だったのは冗談？
  - **bluefirebrand**: 「ファイアサイドチャット」はただのコーポレート用語で「カジュアルな議論」の意
- **kochikame**: 「アラニス・モリセットの曲で言及されていたものと違って、これは本当にアイロニックだ」

---

## 5. [In memory of the man who put red and green squiggles under words](https://devblogs.microsoft.com/oldnewthing/20260622-00/?p=112451)

**Score:** 216 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=48648959)

Microsoftのブログ「The Old New Thing」でRaymond Chenが、Wordの赤・緑の波線スペルチェック機能を開発したTony Krueger氏を追悼した記事。Krueger氏はスペルチェックを「バックグラウンドで邪魔にならないように」動作させることで、現在ほぼすべてのワープロソフトに採用されるUIパターンを生み出した。Penn & Tellerも熱烈に称賛したという逸話も紹介されている。

### Key Discussion Points

- **tom_**: ChenのブログがWikipediaをTony Kruegerの証拠として引用しているが、WikipediaはChenの記事にリンクバックしていて循環引用になっている
  - **svat**: Wikipediaの編集履歴を追跡し、実際には逆引用ではなく別の情報（リバースエンジニアリングの件）についての追記だと説明。自分で修正した
- **kumarvwvr**: 「無数の可能性の中から波線という選択が、一人の男の思いつきで決まり、世界を変えた」という感動を表現
- **_whoDis**: 多言語環境では波線は「視覚的ノイズ」になってしまう。言語検出が間違えることが多く手動切り替えも不便
- **analog31**: 「ロジックエラーの下に黄色い波線が出てほしい。プログラマーたちをしばらく忙しくできる」

---

## 6. [Printing Gaussian Splats](https://www.patreon.com/DanyBittel/posts/printing-splats-161333338)

**Score:** 217 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=48618481)

3DシーンをGaussian Splatsとして表現し、それを物理的に3Dプリントする実験的なプロジェクト。蜂の3Dスキャンを実物と見紛うほどのクオリティで出力した作品が話題を呼んだ。Patreon記事へのリンクのため本文は取得できなかったが、コメントによるとStratasys J850 Primeのような大型・高価格帯（約$200,000相当）の樹脂プリンタを使用している。

### Key Discussion Points

- **pizzathyme**: 「このレベルの精度の3Dプリントが可能だとは知らなかった。本物の蜂に見える」
  - **arjie**: 高性能な樹脂プリンタを使用。自分のBambu P1Sではこの結果は得られない
  - **Gigachad**: 「このプリンタは作業台ほどのサイズで、約20万ドルする」
- **terabytest**: どの3Dプリント技術が使われているかわからないと質問
  - **JonathonW**: Stratasys J850 Primeという大型樹脂プリンタを使用していると回答
  - **Lerc**: 色付き樹脂プリントへの代替アプローチを提案（層ごとに顔料を注入するアイデアなど）
- **smusamashah**: 実際のGaussian Splatシーンのリンクを共有
- **vicentwu**: 「これを買いたい」

---

## 7. [Swift Package Index joins Apple](https://swiftpackageindex.com/blog/swift-package-index-joins-apple)

**Score:** 188 | **Comments:** 57 | [Post](https://news.ycombinator.com/item?id=48648779)

Swiftパッケージの検索・品質評価サービス「Swift Package Index」がAppleに買収・統合された。iOS Dev Weeklyの運営で知られるDave Verwer氏が立ち上げたコミュニティプロジェクトで、Swift開発者から広く利用されていた。公式のAppleブランドとなることで、開発者体験がどう変わるかが注目されている。

### Key Discussion Points

- **dragon-hn**: Dave Verwer氏がiOS Dev Weeklyのオーナーシップを移譲したのはこれが理由と推測
  - **lsllc**: 「Daveの二つの成功に祝福を！」
- **peterspath**: SPIがGitHubリポジトリしかサポートしていないため競合サービスを立ち上げる予定だったが、このニュースで気持ちが楽になった
  - **unfunco**: 「Sherlocked（Appleに先を越された）された後でもアイデアを追うのは大胆な選択」
  - **rahkiin**: 「GitLabサポートのPRを出せばいいのでは？」
- **jshier**: Appleはオープンソースとデベロッパーサービスが苦手なので楽観視できない。特に「開発者アイデンティティ」を今後の方向性として挙げているのが気になる
  - **RobMurray**: 視覚障害のある開発者が個人デベロッパーアカウント申請で運転免許証のみ受け付けられ拒否された体験を報告。「アイデンティティ認証を追加すると開発者体験が壊滅する」
  - **marcelox86**: 逆の見方もある。Appleは最近多くのOSSプロジェクトを持ち、Microsoftのようにオープン化が進んでいる
- **ChrisMarshallNY**: インデックスの存在は歓迎だが、Appleが掲載パッケージを規制し始めたら「大騒ぎ」になるだろう
  - **jagged-chisel**: Apple以外のプラットフォームのSwift開発者が離れていく可能性もある。特にApple純正ライブラリの代替を排除するようなフィルタリングは最悪

---

## 8. [A man was gifted his dream car by Kevin Mitnick, who he helped put in prison](https://www.thedrive.com/news/this-man-was-gifted-his-dream-car-by-the-notorious-hacker-he-put-in-prison)

**Score:** 113 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=48633643)

1990年代、ネットワーク管理者のShawn Nunley氏がKevin MitnickによるNovellへの不正アクセスを記録したボイスメールが起訴の決め手となった。その後二人は和解し親友になり、Mitnick氏が2023年に膵臓がんで亡くなった際、遺産をNunley氏に残した。Nunley氏はその遺産でポルシェ911 Carrera 4 GTSを購入した。

### Key Discussion Points

- **mcfunley**: Mitnickを採用した会社でSQLインジェクションだらけのシステムを抱えていたが、彼のレポートは「映画的な物理的セキュリティ」の話ばかりで特定社員を責める内容だった。「PRが実力をはるかに超えていた」
- **appden**: 「Ghost in the Wires」を映画化してほしい。「キャッチ・ミー・イフ・ユー・キャン」のような80〜90年代のピースとして面白いはず
- **olalonde**: 子供の頃「Takedown」でMitnickを知った。NunleyとMitnickが友人になったのは心温まる話だが、Shimomuraとは和解できなかったのが残念
- **ww520**: Shimomuraの本を読んだ。オンライン活動と携帯電話の使用パターンから物理的な居場所を特定した手法が印象的だった
- **kkaske**: インターネット黎明期の「Free Kevin」GIFを覚えている。「人間味が感じられるいい話」

---

## 9. [Usbliter8: an A12/A13 SecureROM Exploit](https://ps.tc/pages/blog-usbliter8.html)

**Score:** 103 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=48585852)

AppleのA12/A13チップに搭載されたDWC2 USBコントローラのハードウェアバグを悪用したブートROM脆弱性「usbliter8」が公開された。特殊なUSBセットアップパケットを送ることでバッファアンダーフローを引き起こし、任意のSRAM位置に書き込みが可能になる。A12ではスタック破壊による直接コード実行、A13ではポインタ認証の回避が必要で、最終的にブートチェーンを完全に制御できる。

### Key Discussion Points

- **ndiddy**: iOS 14で導入されたBPR（Boot Process Register）がDFUモードからのデータアクセスを制限しているため、パスワード設定済みデバイスへの完全アクセスには別の脆弱性が必要
- **nfriedly**: 「ジェイルブレイク自体ではないが最初のステップ」として歓迎。iPhone XR・XS・11・SE第2世代などが対象。iOS 27ベータを受け取っているデバイスも含まれる
- **djfergus**: 「ローレベルのハードウェア/ファームウェアの欠陥でパッチが当てられない」と指摘
- **thenthenthen**: 「ジェイルブレイクの黄金時代が懐かしい。Webサーバーを走らせたり遅いアニメーションを速くしたりできた」

---

## 10. [DiffusionBench: Towards Holistic Evaluation of Generative Diffusion Transformers](https://github.com/End2End-Diffusion/diffusion-bench)

**Score:** 11 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48654274)

生成的拡散トランスフォーマーを包括的に評価するためのベンチマークフレームワーク「DiffusionBench」がGitHubで公開された。VAE・RAE・ピクセルベースなど多様な潜在空間表現と複数のトランスポート手法をサポートし、ImageNetおよびテキスト→画像生成タスクで評価できる。「ImageNet単体の評価ではもはや不十分」という問題意識のもと、拡散モデルの能力をより多面的に計測することを目指している。

---

## Trends

今日のHNトップ10から見えてくるテーマは以下の通り：

1. **AIの両面性**: LLMがセキュリティ脆弱性の発見を民主化する一方（story 3）、脆弱性報告システムを「スパム」で機能不全にさせている（story 3）。AIは既存の仕組みを解体しつつある。

2. **人間らしい創造とノスタルジー**: 60年以上かけて架空の地図を描くJerryのプロジェクト（story 2）や、波線スペルチェックの発明者追悼（story 5）、Mitnickの遺産話（story 8）など、テクノロジーの背後にある人間の物語への関心が高い。

3. **オープンソースと商業化の緊張**: FUTO Swipeのライセンス問題（story 2）やSwift Package IndexのApple買収（story 7）では、コミュニティ主導のプロジェクトが商業的利益と衝突する構造的な課題が浮き彫りになった。

4. **気候変動の現実**: 極端な熱波会議がまさにその熱波で中止になるという皮肉な事態（story 4）は、温暖化が学術的議論の対象から日常の危機へと転換していることを示している。ヨーロッパのエアコン普及率論争も同様に沸騰している。

5. **ハードウェアセキュリティの不変性**: BootROMレベルのパッチ不可能な脆弱性（story 9）は、ソフトウェアアップデートで解決できないセキュリティリスクが依然として存在することを示す。
