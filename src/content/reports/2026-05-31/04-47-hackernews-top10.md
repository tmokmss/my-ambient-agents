---
title: "Hacker News トップ10サマリー（2026年5月31日）"
date: "2026-05-31T04:47"
category: "summary"
summary: "Microsoft永続ライセンス機能劣化、ドメイン知識がAI時代の真のモート、Accenture/Ookla買収など"
tags: ["hackernews", "microsoft", "ai", "open-source", "typography", "networking"]
---

## 1. [Microsoft degrades functionality of perpetually-licensed offline products](https://consumerrights.wiki/w/Microsoft_Office_2019_and_2021_for_Mac_view-only_conversion_(2026))

**Score:** 644 | **Comments:** 204 | [Post](https://news.ycombinator.com/item?id=48341578)

Microsoftは2026年7月13日にライセンス検証証明書を更新せず失効させ、Office 2019/2021 for Mac（および iOS版）を「表示専用モード」に移行させることを決定した。かつて「end-of-support後もアプリは引き続き機能する」と明記していたサポートページからその記述を削除し、有料プランへの誘導に差し替えていたことが消費者団体により記録されている。ユーザーは新規サブスクリプション購入か、無料の Web 版 Microsoft 365 への移行を迫られる形となる。

### Key Discussion Points

- **jmward01**: 法的議論より消費者としての行動を。「弁護士は勝つ」のだから、怒りを示し購入をやめるべき。車のコネクテッド機能と同じ問題構造だと指摘。
  - **xg15**: 法律に頼らない姿勢へのコメント——ボイコット自体の有効性に懐疑的な視点を示す。
- **DomenicoMazza**: オーストラリア消費者法に違反する可能性が高い。「製品が広告された目的に適合すること」という保証に抵触すると論じる。
  - **misswaterfairy**: MicrosoftはすでにAustralian Consumer Lawを昨年も破っており、ACCCはまた動くだろうと予測。
- **nikcub**: 今回の急速な廃止は、AIラボがエージェント群に単一のオフライン版Officeライセンスを流用していたことへの対抗策かもしれないと推測。実態はApple配布用の証明書失効であり、約2か月前に告知されたものだと補足。
  - **asveikau**: 「AIのせいにしすぎ」と一蹴——30年前でもMicrosoftが古いOfficeをリモート無効化すると言っても誰も驚かなかっただろう、と。
- **jamwise**: 何年もLibreOfficeを使っている。みんな使うべき。月額課金でパソコンをオンにするためにお金を払う未来を防ぐために。
  - **hbbio**: Microsoft Officeに近い代替を求めるならOnlyOfficeの方がLibreOfficeより優れている（AGPLライセンス、現在フォーク紛争中）。
- **allajfjwbwkwja**: この製品は「更新されないが無期限に動作する」と明示的に販売されていた。その約束の突然の反故に強く反発。
  - **zik**: オーストラリアでは明らかに違法だと断言。

---

## 2. [Domain expertise has always been the real moat](https://www.brethorsting.com/blog/2026/05/domain-expertise-has-always-been-the-real-moat/)

**Score:** 377 | **Comments:** 227 | [Post](https://news.ycombinator.com/item?id=48340411)

AIがコード生成を担うようになった今、真の競争優位性（モート）は深いドメイン知識にある、と著者は論じる。エンジニアがかつて価値を発揮していた「ドメイン知識をコードに翻訳する能力」はAIによってコモディティ化されつつあり、制約は「作れるか」から「正しいかどうか判断できるか」へと移行した。ドメインの文脈を熟知した検証能力こそが、AIには代替できない人間の強みだという主張。

### Key Discussion Points

- **chopete3**: ソフトウェア業界は建設業界と同じ。決して整理・最適化されず、常にカスタム。いくら良いツールが現れても本質は変わらない。
- **toastmaster11**: 「個人レベルでAIをどう活用すべきかは誰も分かっていない」と批判的。必要なスキルが"開発力→アーキテクチャ→センス→ドメイン知識"と次々と変わる状況を皮肉る。
  - **simonw**: AIは開発を"難しく"する。達成できる難易度の上限が上がるため、以前より多くのことを学ぶ必要がある。ヴァイブコーダーへの正しい対応は「彼らより圧倒的に上手くなること」だと語る。
- **azuanrb**: ほぼAIで作られたアプリのレビューを依頼されたが、DBの設計が壊滅的だった。ドメイン専門家にAIを与えても、ソフトウェアエンジニアは不要にならない。両者それぞれの知識が必要。
  - **jaggederest**: 自分はプラットフォームエンジニア的な役割に向かっている——ドメイン専門家がAIエージェントを使う際のガードレールやバリデーションを担う、内部T2/T3サポート的存在。
- **steve_adams_86**: 釣りチャーター船の船長に自作アプリを見せたとき、気象・海洋データの使い方について想像を超える知識があることを実感。「彼らはデータについて私より知っている」——ドメイン知識の奥深さを体験談として紹介。
- **burnto**: 優秀なジェネラリストエンジニアにとって、ソフトウェアこそがドメイン。どこかランダムなドメインに逃げるのではなく、AI時代に拡張・変容するソフトウェアの世界に留まり続けるべきだ。

---

## 3. [A Gentle Introduction to Lattice-Based Cryptography [pdf]](https://cryptography101.ca/wp-content/uploads/lattice-based-cryptography.pdf)

**Score:** 13 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48318624)

格子暗号（Lattice-Based Cryptography）の入門PDFが公開された。量子コンピュータへの耐性を持つポスト量子暗号の有力候補として注目される格子暗号の基礎概念を、数学的に丁寧に解説した教育資料。スコアと注目度はまだ低いが、量子耐性暗号への関心が高まる中で有用なリソースとなる可能性がある。

### Key Discussion Points

コメントなし。

---

## 4. [Shantell Sans (2023)](https://shantellsans.com/process)

**Score:** 142 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=48341062)

アーティスト Shantell Martin とタイプデザイナー Stephen Nixon が共同制作した可変フォント「Shantell Sans」のデザインプロセスを紹介するページ。Martinの手書きを元にデジタル化し、Weight・Italic・Informality・Bounce の4軸を持つ可変フォントとして設計。Google Fonts でオープンソース公開されており、ディスレクシアの人にも親しみやすい書体として開発された。

### Key Discussion Points

- **0x69420**: フォーマリティスライダーは「最近見た中で最もクールな可変フォント軸の活用」だと絶賛。Metafontの正当性がゆっくり証明されている感覚だと述べる。
- **xyzzy_plugh**: コミックサンス系フォントを多く扱ってきたが、これは「圧倒的に最も美しいもの」だと評価。
- **watchful_moose**: 記事でCtrl-Fで「comic」を検索した最初の読者。コミックサンスの遺産を認めつつも、このフォントがさらに先へ進んでいると称賛。
- **aetherspawn**: 企業ブランドがこのフォントをサイト全体に使えるだろうか？AIが支配する無機質な世界で、人間中心のデザインは「不プロらしい」とされながらも良いことではないかと問いかける。
- **largbae**: ディスレクシアの娘がRobotoより断然好ましいと大絶賛した。

---

## 5. [Racket v9.2 is now available](https://blog.racket-lang.org/2026/05/racket-v9-2.html)

**Score:** 64 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=48306713)

言語指向プログラミング言語 Racket のバージョン 9.2 がリリースされた。三角関数での複素数処理の修正や `match` フォームでの非線形パターン検証の強化といった型安全性の改善、Unicode 17.0 へのアップグレード、unsafe外部インターフェース用の `#%foreign-inline` 構文追加などが主な変更点。`rackup upgrade` でアップグレード可能。

### Key Discussion Points

- **spdegabrielle**: `rackup upgrade` でアップグレード可能、`raco pkg migrate 9.1` でパッケージ移行を忘れずにと案内。
- **noosphr**: Racketはまだ理解できていないアイデアのプロトタイプ作成に最適な言語。職場でディープラーニングモデルの新しいジオメトリを探索するために活用。スタックの任意の部分を再定義できる柔軟性は「知るまで気づかない超能力」だと語る。
- **xiaoyu2006**: Racketは一番好きな言語だが、エコシステムの問題でPythonを最も使ってしまうと本音を吐露（xkcd/353へのリンクとともに）。

---

## 6. [I found a seashell in the middle of the desert](https://github.com/Hawzen/I-found-a-seashell-in-the-middle-of-the-desert)

**Score:** 264 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=48318402)

サウジアラビアのAlghat砂漠で化石化した貝殻を発見した著者が、機械学習（主成分分析）を活用して59,244枚の画像から7,894種の貝殻形態を分析し、発見物を *Sphincterochila candidissima* と同定したプロジェクト。形状の「とがり度」を第一主成分で捉え、貝殻形態の潜在空間をインタラクティブに探索できるWebツールも公開している。

### Key Discussion Points

- **brennanpeterson**: John McPheeの言葉「エベレストの頂上は海洋性石灰岩でできている」を引用——砂漠の貝殻発見の地質学的文脈への橋渡しとして。
- **purplehat_**: 素晴らしい発見と分析だが、貝殻の形態は2Dよりも口部（peristome）や水管溝（siphonal canal）など複数の構造的特徴で識別すべきだと助言。二分法検索キーの活用を勧める。
  - **altcognito**: 2D投影から意味ある情報を導けるか疑問。「骨相学に見える」と批判的なコメント。
- **andix**: ウィーンの聖シュテファン大聖堂は約1500万年前に海底だったエリアから採掘した砂岩で建設されており、実質的に貝殻の塊のような石材が使われているエピソードを紹介。
  - **thrownthatway**: 当時は陸が低かったのか、海面が高かったのか、それとも両方か？と地質学的な問い。
- **gerdesj**: 簡潔で的を得た素晴らしいライトアップ。自分の立場を明示する誠実さも評価。
- **motyar**: インド・タール砂漠でも同様の発見をした。河川または洪水堆積によるものと推測していると共有。

---

## 7. [Accenture to acquire Ookla](https://newsroom.accenture.com/news/2026/accenture-to-acquire-ookla-to-strengthen-network-intelligence-and-experience-with-data-and-ai-for-enterprises)

**Score:** 260 | **Comments:** 130 | [Post](https://news.ycombinator.com/item?id=48337987)

AccentureがOokla（Speedtest、Downdetector、Ekahau、RootMetrics）を買収すると発表。月間2億5000万回以上のテストから得られるネットワークデータを、5G・Wi-Fiインフラ最適化のためのAIサービスと組み合わせるのが戦略的狙い。買収価格は非公開だが、複数の報道では12億ドル規模とされている。AI台頭でコンサルティング本業が苦しいAccentureによるデータビジネス取得の試みと見る向きも多い。

### Key Discussion Points

- **forcer**: 競合speedchecker.comを売却した経験者として「本業はデータ販売」と解説。通信事業者は年間6桁のドルを支払うほど価値ある事業。Accentureは主力コンサル事業がAIで苦境のため、データビジネス取得は合理的な戦略だと分析。
  - **cortesoft**: CDNベテランとして「コードより難しいのはインフラ管理」と指摘——帯域や容量設計が最大の課題。
- **jpalomaki**: 買収公式発表から「月間2.5億テスト」「Speedtest/Downdetector/Ekahau/RootMetrics統合でCSP・ハイパースケーラー向けに5G/Wi-Fiネットワーク最適化」のキーポイントを引用。
  - **simonw**: 発表文に®マークが多用される理由——法的必要性か見栄えのためか——をユーモラスに問いかける。
- **progforlyfe**: 製品がそれほど複雑ではないことへの驚き。Downdetectorは「ゲストブックとヒットカウンター付きウェブサイトカタログ」に過ぎないと評し、自分でも作れると発言。
  - **eddythompson80**: ネットワーク効果を説明。「speedtest.netで500Mbpsが出ない」とISPに言えば対応してもらえるが、無名サービスで同じことを言っても相手にされない。ISP自身がOoklaに接続して最適化するほど市場支配力がある。
- **yokoprime**: 代替としてノルウェー政府の「nettfart.no」を提案——名前がおもしろいと。
  - **Mordisquitos**: 「ネットを殺すのはfartではなくサーバーの臭い」とユーモアで応じる。
- **dhruvarora013**: Ooklaに5年勤務し今回の取引にも少し関与した元従業員。買収の本質はデータ取得であり、DriveテストやDowndetector、SDKネットワークなど消費者に見えない部分の方が事業的価値が高いと解説。

---

## 8. [The AV2 Video Standard Has Released (Final v1.0 Specification)](https://av2.aomedia.org)

**Score:** 86 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=48340910)

Alliance for Open Media（AOM）が次世代動画コーデック AV2 の v1.0 仕様を2026年5月28日に正式リリース。AV1比で約20〜30%の圧縮効率向上に加え、VRや生中継向けのマルチストリームサポート、アルファチャンネル別送信による透過動画対応が主要な新機能。ただしエンコーダーが現状1fps前後と極めて遅く、ハードウェアアクセラレーション登場は2028年頃、普及は2030年以降と見込まれる。

### Key Discussion Points

- **jjcm**: 現在は実用不可（良いハードウェアでも約1fps）。2028年頃に最初のAV2対応チップが登場するまで本格的には使えない。効率向上だけならAV2は「割に合わない」が、マルチストリーム対応とアルファチャンネルが真価だと評価。
- **Dwedit**: AVIFイメージフォーマットへの影響を注目。AVIFは低ビットレートの非可逆圧縮には強いが、可逆圧縮では JPEG XL や WebP に大差をつけられていると指摘。
- **mmastrac**: デコーダー名「Dav2d」が格好悪いと笑いを誘うコメント。「avi2ude」や「av2go」などの代案を提案。
- **shmerl**: リリースを祝いつつ、DolbyによるAV1特許訴訟（Snapchat相手の訴訟含む）がどうなっているか問いかける。

---

## 9. [Jef Raskin, the Visionary Behind the Mac (2013)](https://lowendmac.com/2013/jef-raskin-the-visionary-behind-the-mac/)

**Score:** 87 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=48339894)

Macintoshプロジェクトの創設者 Jef Raskin（1943〜2005）を振り返る記事（初出は2005年）。Raskinはコンピュータを「誰でも使える家電」として設計するというビジョンを持ち、Mac プロジェクトを立ち上げた。しかし彼が好んだ6809プロセッサやマウス不使用といったアイデアはSteve Jobs率いるチームに採用されず、1981年夏に離脱。最終的に出荷されたMacは彼のビジョンとほぼ無関係な製品になったとも言われる。

### Key Discussion Points

- **Someone**: folklore.orgの記事を引用。Raskinはプロジェクトの創始者でチーム構築の功績は大きいが、出荷されたMacは「彼の視点から見れば変わり者の大叔父のようなもの」——モトローラ68000もマウスも彼の意向に反していた。
- **GeekyBear**: Raskinはその後Canon Catでマウス・アイコン・グラフィックスを一切持たないテキストベースUIのコンピュータを実現。Macとは全く異なる方向性だった。
- **pavlov**: タイトルの「2013」は誤りで、記事末尾には「2005年1月19日初出」とあり、iMac G5への言及も証拠となると指摘。
- **a4isms**: Raskinの「直感的＝馴染みがあること（Intuitive Equals Familiar）」という概念を紹介し、UXデザイナー必読の資料として共有。
- **coldtea**: ビジョナリーとしては認めるが、「実際に出荷されたMac」の背後にいたのはRaskinではなく他のエンジニアたちだと明確に区別。

---

## 10. [Cheese Paper: a text editor specifically designed for writing](https://brie.gay/cheese-paper/)

**Score:** 73 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=48341407)

「Cheese Paper」は主にフィクション執筆向けに設計されたテキストエディタ。シーンとメモを同一のプレーンテキストファイルに統合して管理し、外部から編集されても壊れない自動デバイス同期、執筆中もアクセスできるキャラクター・世界観情報が特徴。ScrivenerやObsidianとは異なり、ユーザーが完全制御できるオフラインのプレーンテキストにこだわった設計。

### Key Discussion Points

- **tlhunter**: Linux向け代替として「Manuskript」を推薦。より多機能で見た目も良いと評価。
- **aleda145**（投稿者）: 自分も短篇小説執筆を再開した。次の作品でCheese Paperを試してみる。夢のエディタ機能は「段落をノードとして扱い、グラフ構造でリンクできる」設計——テキストを削除せずに異なる展開を試せるシステム。
- **blacksmith_tb**: 「writing向け」より「fiction writing向け」と明記した方が良いのでは——キャラクター機能など、フィクション以外の執筆には不要な機能があると指摘。
- **buggylearning**: VSCodeプラグインとして使えないか？と要望。

---

## Trends

今回のトップ10から浮かび上がるテーマは以下の通り：

1. **AI時代の人間の役割再定義**: 「ドメイン知識がモート」「ヴァイブコーダーへの対抗策は圧倒的技術力」など、AIがコモディティ化する中で人間の価値をどこに見出すかが最大のテーマ。

2. **大企業によるソフトウェア所有権の侵食**: Microsoftの永続ライセンス機能劣化は、購入したはずのソフトウェアをメーカーが事後的に無効化できることへの怒りを集中させた。サブスクリプション経済と消費者権利の対立が鮮明に。

3. **データが真の事業価値**: Accenture/Ookla買収は「速度計測ツール」の本質がデータビジネスであることを改めて示す。表面上シンプルな製品でも、ネットワーク効果と蓄積データが圧倒的な競争優位となる。

4. **次世代標準の胎動**: AV2コーデックの v1.0 リリース、Racket v9.2 など、将来の基盤技術が静かに成熟している。実用化は数年先でも、仕様が固まることの意義は大きい。

5. **個人の探究とオープンな共有**: 砂漠で貝殻を発見してMLで種を同定した個人プロジェクトや、Shantell Sansのような芸術×技術の協働が高い評価を得ており、HNコミュニティの好奇心と知的多様性が健在。
