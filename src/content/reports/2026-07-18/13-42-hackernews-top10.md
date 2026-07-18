---
title: "Hacker News トップ10まとめ（2026-07-18）"
date: "2026-07-18T13:42"
category: "summary"
summary: "AWSの17億ドル誤請求、LGモニターの無断ソフトインストール問題など話題のトップ10を要約"
tags: ["hackernews", "tech-news"]
---

## 1. [GPT-5.6 used a prompt to close a 30-year gap in convex optimization](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/)

**Score:** 41 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=48957779)

OpenAIの発表を受けたRedditスレッドで、GPT-5.6が凸最適化における30年来の未解決問題の証明を、10ページに及ぶ高度な数学的ヒントを含む詳細なプロンプトを用いて導いたと報告されている。まだ査読前であり真偽は不明だが、単純な「解いて」という指示ではなく1年分の事前研究を踏まえたものだった点が議論を呼んでいる。

### Key Discussion Points

- **jdw64**: AIをうまく使うには背景知識が重要になってきており、実装力よりコンセプト理解が問われる時代になっていると指摘。MVPを素早く作るタイプのプログラマーの居場所がなくなりつつあると不安を語る。
- **applfanboysbgon**: まだ査読されていない点、そして証明用プロンプトは10ページに及ぶ高度な数学的ヒントであり1年分の事前研究を踏まえたものだったと指摘。単純な指示だけで解けたわけではないと補足。
- **baal80spam**: 「LLMは新しいものを生み出せない」という反応やゴールポストの移動を予想する皮肉なコメント。
- **ewe42**: 形式的証明系（Mizar）による検証がない点を指摘。

## 2. [LG monitors silently install software through Windows Update without consent](https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent)

**Score:** 357 | **Comments:** 181 | [Post](https://news.ycombinator.com/item?id=48956688)

LGのモニターをHDMI接続すると、Windows Updateを通じてユーザーの同意なしにサードパーティ製ソフトウェアが自動インストールされる問題が報告された。このソフトはサンドボックス化されておらずフルシステムアクセスを持ち、起動のたびに実行される。新規モデルだけでなく既存の古いLGモニターでも一律にロールアウトされていたとされ、GamersNexusが詳細な動画で取り上げている。

### Key Discussion Points

- **devttyeu**: 事態はタイトル以上に深刻だと説明。OSがサードパーティ製ソフトをバックグラウンドでインストールし、HDMIポートに接続するだけで発生、サンドボックスなしでフルシステム/ネットアクセスを持ち起動毎に自動実行される点で前例のない事態だと指摘。
  - **orbital-decay**: プリンターやマウス、タブレットメーカーはWindows Vista/7時代からこの手法でクラップウェアを仕込んでおり、前例がないわけではないとRazerマウスの例を挙げて反論。
  - **embedding-shape**: Microsoftは何十年もこの挙動を許容してきたが、今回はLGの実装が「あからさま」すぎて目立った点が新しいと指摘。
- **delta_p_delta_x**: gpedit.mscやsysdm.cplでのデバイスドライバ自動ダウンロード無効化手順を共有。
  - **Someone1234**: gpedit.mscはWindows Home Editionには含まれておらず、これはユーザーに過度な負担を強いる回避策に過ぎないと指摘。Microsoftの介入が必要と主張。
- **tialaramex**: LGよりもMicrosoftへの働きかけの方が効果的だと分析。Microsoftは日々多くの契約交渉を抱えており、企業顧客からの不満は方針変更につながりやすい。
  - **vladvasiliu**: 多くの企業はWindows Updateを無効化しオンプレの更新配信のみを許可しているため、この問題は企業には影響しにくいと指摘。
- **gkbrk**: モニター自体がソフトをインストールすることはできず、責任はそれを自動実行するWindowsにある、USBメモリのオートラン問題と同種のセキュリティ問題だと指摘。
  - **daveidol**: 責任はMicrosoftとLGの両方にあるとの反論。

## 3. [Fable 5 vs. GPT-5.6 Sol on an NP-Hard Problem: Does /goal help?](https://charlesazam.com/blog/fable-5-gpt-5-6-sol-goal/)

**Score:** 47 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=48956879)

NP困難な最適化問題においてClaude Fable 5とGPT-5.6 Solを比較する実験を実施。Fable 5が圧倒的に優れた性能を示した一方、「より努力する」ことを促す/goal機能は個別の試行では勝つことが多いものの、平均するとプレーンな実行より性能が悪化するという逆説的な結果が得られた。

### Key Discussion Points

- **tyleo**: グラフのY軸が「低いほど良い」という説明に反して視覚的に反転しており分かりにくいと指摘。
- **Tenoke**: Claudeは長時間の作業セッションでは、何度重要だと伝えても指示を忘れがちだと経験を共有。/goalは重要な指示を記憶させる仕組みかもしれないとコメント。
- **tantalor**: 「/goalとは何か」という質問。
- **andai**: 1モデルにつき1回の評価のみで、試行回数が少なすぎる大きな問題空間であるため結果はほぼノイズだと指摘。
- **o10449366**: /goalは自分にとってplanモードの代替になっており、時間を指定して設計ドキュメントを書かせる自身のワークフローを共有。10分でもGPTに設計ドキュメントを書かせる方がplanモードの草案より頑健な計画になると述べる。

## 4. [Regressive JPEGs](https://maurycyz.com/projects/bad_jpeg/)

**Score:** 472 | **Comments:** 46 | [Post](https://news.ycombinator.com/item?id=48954851)

JPEGのプログレッシブ（段階的）エンコーディング機能を悪用し、DCスキャンのみを使って1つのファイル内に最大90フレーム程度の「アニメーション」を埋め込む技術を紹介。標準準拠のトリックで、ダウンロード中に画像が段階的に変化していく効果を作り出せるが、タイミング情報を持たせられないためネットワーク遅延に再生速度が依存するという制約がある。

### Key Discussion Points

- **Retr0id**: 類似の手法をプログレッシブ(Adam7インターレース)PNGで実装した経験を共有。自分のサーバーでは各「フレーム」を固定遅延で個別送信することでタイミングを制御していると説明。
  - **jbochi**: 自分も似たようなことを無限ループのアニメーションGIFでライブビデオストリーミングに応用した経験を共有。
  - **Dwedit**: PNGのハックが行われているのに、アニメーションをネイティブサポートするAPNGが存在するのは興味深いと指摘。
- **robbak**: 「呪われているが、ここに載るにふさわしい」と評価。
  - **alterom**: 「これこそここに来る理由だ」と同意。
- **pavlov**: タイミング情報がなくても、並列ロード中の遅延具合を示すプログレスバーとして実用的ではと提案。
  - **NewsaHackO**: 4chanなどではこの種の挙動が不適切な画像を隠すために悪用され、対策されていたはずと指摘。
- **tda**: ステガノグラフィ（データの隠蔽）への応用や、学校のコンテンツフィルタ回避に使われる可能性を指摘。
  - **aetherspawn**: 人間向けメッセージを最初のフレームに、AI向けメッセージを最後のフレームに仕込むAI回避技術として使えると冗談交じりに言及。
  - **mike_hock**: 通常のステガノグラフィに対する優位性は見出せないとコメント。

## 5. [AWS: Inaccurate Estimated Billing Data – $1.7 billion](https://news.ycombinator.com/item?id=48945241)

**Score:** 1227 | **Comments:** 717 | [Post](https://news.ycombinator.com/item?id=48945241)

AWSコンソール上の「推定請求額」が異常に高騰する障害が発生し、投稿者は通常5ドル未満の利用にもかかわらず17億ドルという請求見積もりを目にしたと報告。AWSステータスページでも既知の問題として案内されており、多数のユーザーが同様の現象を報告した。

### Key Discussion Points

- **donavanm**: AWS内部での類似の実体験を共有。単位（GB）の書き忘れによりバイト単位として課金計算され、一部顧客に数百万ドル相当の請求が表示された事例を説明。メータリング値と価格プランの単位型の不整合が原因になりやすいと解説。
  - **dlenski**: メータリング（計測）と課金の分離が過度に進んでおり、両方を理解している人が社内にほとんどいないという実体験を共有。
  - **root-parent**: この一件でAWSの請求関連の求人票が更新されるのではと皮肉。
- **yuchen20**: 予算超過の通知メールを3通連続で受信、確認すると請求額が7,800万ドルになっていたという体験談。
  - **shawkinaw**: 自分の請求は10億ドル超で、フィッシングかと思い確認したところ本物だった、なぜ請求ページにバナー表示がなかったのかと疑問を呈す。
  - **antognini**: 「7万8千ドルの請求なら自分の問題だが、7,800万ドルの請求ならAmazonの問題だ」という古いジョークを引用。
- **wglass**: 2010年代前半にEC2予約の割引計算ミスを自ら発見し、14ヶ月かけてAWSに認めさせ7,000ドルの返金を受けた過去の経験を共有。
  - **johnbarron**: 今回の障害は12時間以上続いており、人間がエージェント（AI）が書いたコードを理解できていないのではと皮肉。
- **fron**: 4,370億ドルの請求アラームメールで目を覚まし、鍵漏洩を疑ったが、そんな大金は持っていないので逆に安心したというユーモラスな体験談。
  - **lijok**: 「43.7万ドルの借金はあなたの問題だが、4,370億ドルの借金はAWSの問題だ」という同種のジョーク。
  - **binaryturtle**: このような巨額請求の表示は無責任であり、心臓発作を起こす人がいてもおかしくないと懸念。

## 6. [The Computer at the Bottom of a Canal](https://negroniventurestudios.com/2026/07/18/the-computer-at-the-bottom-of-a-canal/)

**Score:** 55 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=48956231)

1988年にスコットランドのHi-Fi企業Linn Productsが開発した先進的コンピュータ「Rekursiv」の歴史を紹介する記事。メモリ安全性、ガベージコレクション、永続ストレージ、ワークロード特化型シリコンといった当時としては先進的すぎる設計思想を持っていたが、汎用プロセッサの急速な進化に追いつけず市場的には失敗した。しかしその設計哲学は現在のCHERIやArm Melloなどに再評価されつつある。

### Key Discussion Points

- **Taniwha**: 当時、Rekursivのようなケーパビリティマシンは最先端であり研究文献にも多く登場していたと回想。自身もペーパー設計を行った経験があり、その後「チップに何を詰め込めるか」という制約で廃れていったと解説。タグ付きアーキテクチャ自体は70年代のBurroughsメインフレームまで遡る古い概念だと補足。
- **scottconover**: サイト全体のオレンジ／ティールのデザインテーマを称賛するコメント。
- **Hnrobert42**: 「才能があっても富を保証しない、運と地道な努力の両方が必要」という人生訓を語る。
- **inigyou**: 運河の底に、水流発電で動くマイクロコントローラーを隠す発想について言及（半分冗談）。
- **throw83939r0r**: 英国政府がこの手の企業を潰してしまったのは残念だが、今のビジネスモデルの方がうまくいっているとコメント。

## 7. [Reviving a 15-year-old netbook with Arch Linux](https://parksb.github.io/en/article/41.html)

**Score:** 155 | **Comments:** 93 | [Post](https://news.ycombinator.com/item?id=48907063)

2009年発売のASUS Eee PC 1000HE（15年落ちのネットブック）にArch Linux 32とLXQtデスクトップ環境を構築して復活させる試み。1GBのRAMではメモリ不足が頻発したため2GBに増設し、セットアップを完了させた。

### Key Discussion Points

- **UncleSlacky**: Void、Alpine、antiXのような軽量ディストリを勧める。実際のLinuxが不要ならHaikuOSも快適に動くと補足。
- **drdexebtjl**: この世代（2008-2010年）のネットブックはデスクトップ用途には無理があり、新品当時から低速で1024x600という特殊な解像度パネルを持つ機種も多かったと指摘。CPUが本当に32bit専用かどうか確認するコツも共有。
  - **CTDOCodebases**: 諦める前にAlpine LinuxをRAM上で動かす方法（約125MBで動作、永続化設定可）を提案。軽量ウィンドウマネージャとqutebrowserの組み合わせを推奨。
  - **walrus01**: 天気ページの自動更新表示や、SSH経由でhtop出力を表示するだけのCLI情報パネルとしての活用法を提案。
- **stasiu**: Asus Eee PC 1215pにまつわる思い出（大学の引っ越し、ヒッチハイク旅行、DJ利用など）を語り、最終的に濡れタオルで清掃してキーボードを壊してしまったエピソードを共有。
  - **iammjm**: 自分も同機種を使っており、その後Thinkpad、現在はMacBook Airに移行したと共有。
- **russfink**: 記事がRAM増設の効果や、マウスの挙動について言及せずに終わっている点を指摘。
  - **bcraven**: 「XP時代は遅く、Archでも遅いまま終わった」という記事の内容を皮肉る。
- **ezst**: 工学課程を通して1GB RAM/Atom N450のこの機種一台でMATLABやJVM系IDEを動かしていたと回想。ビルドや表示は酷かったが講義用には十分だったと述べる。

## 8. [Thanks HN for 15 years of support and helping me find my life's work](https://news.ycombinator.com/item?id=48949551)

**Score:** 681 | **Comments:** 79 | [Post](https://news.ycombinator.com/item?id=48949551)

Recurse Center創設15周年を記念し、共同創設者がHNへの感謝を述べる投稿。YCでの立ち上げから紆余曲折を経て自己指向型プログラミングリトリート「Recurse Center」を作り、HN投稿がその成長を後押ししたという内容。

### Key Discussion Points

- **ThePhysicist**: 10年以上前にNYのRecurse Centerに参加した思い出を熱く語り、その後2021年にRC経由でDuckDuckGoの「夢の仕事」を得たと感謝を述べる。
- **mnky9800n**: RCでの経験が自分を大きく変えたと述べ、自身のブログ記事を紹介しながら参加を強く勧める。
- **maxmynter95**: 昨年RCに参加し、人生で最も影響を受けた期間の一つだったと感謝を伝える。
- **andrew_eu**: RCの「社会規範」の定義が気に入っていると述べつつ、HNコミュニティへの個人的な感謝（友人関係や仕事の機会）を語る。
  - **nchmy**: RCの「決して驚いた反応をしてはいけない」というルールに違和感を表明し、正当な驚きの感情まで規制するのは行き過ぎではないかと批判。
  - **ghostly_s**: 別のルール（屋上使用ルール）について、NYの中高層ビルでは一般的な慣行だと補足しつつ、批判者への皮肉も交える。
- **flockonus**: RCの料金体系がFAQの奥深くに埋もれていることに最初は違和感を覚えたが、無料である理由（企業がRC卒業生採用時に費用を負担する仕組み）を理解したと共有。
  - **nicholasjbs**（RC共同創設者）: 無料であることを前面に出さないのは意図的で、まずアイデアに興味を持ってもらい後で無料と知って嬉しい驚きを与えたいためだと説明。フィードバックを受けてトップページでの表示をもっと目立たせることを検討すると返信。

## 9. [Is this the end of the once-mighty GoPro?](https://amateurphotographer.com/latest/photo-news/going-going-gone-is-this-the-end-of-the-once-mighty-gopro/)

**Score:** 6 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=48916044)

GoProの経営不振について報じる記事。創業者Nicholas Woodmanが自己資金2,000万ドル（年利6.5%）を会社に貸し付けて延命を図っており、買収先が見つからなければ年内の存続も危ういと報じられている。競合Insta360の台頭や前年比の減収がその背景にあるとされる。

### Key Discussion Points

- **ValentineC**: 昨年アクションカメラを買う際、多くのYouTuberがGoProではなくInsta360やDJIを勧めていたと述べ、画質面でGoProが遅れを取っていると指摘。自身はInsta360 Go Ultraを購入し満足していると共有。
- **amelius**: 最近はAliExpressで数ドルの小型カメラが買えるため、GoProのような専業アクションカメラ市場が厳しくなるのは当然だとコメント。
- **donkeyboy**: GoProが苦戦しているとは知らなかったと驚きつつ、競合Insta360との争いと前年比減収が原因だと要約。
- **aanet**: 創業者が2,000万ドル（年利6.5%）の私財を投じて延命を図っており、買収者か資金調達がなければ年内存続も危ういという記事の核心部分を引用。

## 10. [Qubes OS Security in the Public Record](https://arxiv.org/abs/2607.14587)

**Score:** 34 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=48956307)

Qubes OSのセキュリティに関する公開記録を分析した論文。109件のセキュリティ公報を調査した結果、79.8%（87件）がXenやCPUなど上流コンポーネント由来の脆弱性であり、Qubes自体の独自コードに起因する問題は少数派であることを明らかにした。

### Key Discussion Points

- **Topfi**: 姉妹プロジェクトWhonixとの関わりが深かったと回想しつつ、Qubesの軽量な設計上、大半の問題が上流由来なのは驚きではないと納得。MS Officeをゲスト環境で動かすスクリーンショットに着想を得て、セキュリティ強化以外の用途にもQubesのアーキテクチャを応用できないか改めて検討したいと述べる。
- **preetham_rangu**: マーケティングよりも公開証拠に基づくセキュリティ主張の方がずっと説得力があるとコメント。
- **adg001**: 論文著者自身が登場し、「何でも聞いてください（AMA）」と反応。

## Trends

今回のトップ10では、AI/LLM関連の話題が目立った（GPT-5.6による数学証明、Fable 5とGPT-5.6のベンチマーク比較、AWS請求バグを巡るLLM風ジョークなど）一方で、ベンダーによるユーザーの同意なきソフトウェア導入（LGモニター問題）のようなプライバシー・セキュリティへの懸念も強い関心を集めた。またAWSの巨額誤請求のように、大規模クラウドの請求システムの複雑さと信頼性に対する不安を語るスレッドが最多コメントを記録している。加えて、古いネットブックの復活やRekursivという歴史的コンピュータの再評価など、レガシーハードウェア・過去の技術へのノスタルジーも根強い人気を保っており、Recurse CenterやQubes OSのように長年にわたるコミュニティの積み重ねを称える投稿にも多くの共感が寄せられた。
