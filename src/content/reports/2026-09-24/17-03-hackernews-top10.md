---
title: "Hacker News トップ10まとめ(2026-09-24)"
date: "2026-09-24T17:03"
category: "summary"
summary: "Snapdragon X2のLinux対応やF-Droid 2.0、英国の二層暗号化問題などHN上位10件を要約"
tags: ["hackernews", "tech-news"]
---

Hacker News のトップストーリーから上位10件をスコア順にまとめました。

## 1. [Linux support is coming to Snapdragon X2 Series](https://www.qualcomm.com/news/onq/2026/09/snapdragon-summit-agentic-ai-pcs-linux)

**Score:** 566 | **Comments:** 238 | [Post](https://news.ycombinator.com/item?id=49823582)

Qualcomm は Snapdragon Summit 2026 で、Snapdragon X2 シリーズが Windows・Googlebook に続く第三の OS として Linux をサポートすると発表した。Hexagon NPU や Adreno GPU を含むコアドライバを Linux にアップストリームし、まず年内に Debian、2027年前半には Canonical と提携した Ubuntu の対応（認証取得目標）を進める。HP・ASUS・HUMAIN などのパートナーも2027年初頭に Linux 対応デバイスを計画している。

### Key Discussion Points

- **hurricanepootis**: デバイスツリーをメーカーが個別提供しないと動かない「Androidism」を懸念し、ACPI 実装の改善をQualcommに求めた。
  - **ChocolateGod**: カーネルを機種ごとに変更させる仕組みはe-wasteを助長するため、ACPI改善とカーネル側のハンドリング強化で対応すべきと同意。
  - **cromka**: 実際にQualcommはこの2ヶ月、Linux ARM MSMメーリングリストに直接ECドライバ等を提出し続けていると指摘。
- **modeless**: QualcommがApple M seriesに匹敵する性能に達しつつあると評価し、Linuxプリインストールのラップトップを望むと述べた。
  - **trombuance**: 過去にも同様の発表があったが実現しなかった例が多く、懐疑的な姿勢を示した。
  - **MBCook**: Intel/AMDへの新たな競合が増えることを歓迎し、PCメーカーがフォームファクタで実験しやすくなると期待。
- **brynet**: OpenBSD開発者がすでにSnapdragon X2 Elite搭載機（HP EliteBook X G2q）向けにarm64サポートの初期コミットを行い、USB・キーボード・タッチパッドが動作していると報告。
- **Hasz**: Apple M seriesの8割程度の効率と性能でDebian/Ubuntuが動く機体があれば喜んでApple並みの価格を払うと述べた。
  - **raegis**: Lenovo ThinkPad T14s Snapdragon機にDebianを入れて使用しており、バッテリー持ちは良いが左端のスピーカー付近が熱くなると報告。
  - **ndiddy**: Intel Core Ultra Series 3搭載機を勧め、性能はApple Mチップに劣るがバッテリー持ちと静音性は良好と述べた。
- **extraduder_ire**: 発表内容はHexagon NPUやAdreno GPUのコアドライバをアップストリームすることだと説明し、Chromebookのような半独自仕様にならないことを期待。
  - **Loudergood**: Androidも同様に有名な前例であると指摘。

## 2. [Ideas on modernizing the open-source desktop](https://lwn.net/SubscriberLink/1095425/2d9f411252325784/)

**Score:** 315 | **Comments:** 385 | [Post](https://news.ycombinator.com/item?id=49825642)

LWN.net の記事は、UXデザイナーのScott JensonがAkademy 2026で行った講演を紹介している。40年前の「windows, icons, menus, pointer」というWIMPモデルがデスクトップUXの進化を停滞させていると指摘し、ワイドスクリーン向けの新レイアウトや、クリップボードを超えた作業メモリの改善（Obsidian Canvasのような視覚的情報整理）を提案。革新への障壁としてモバイル優先思考、「WIMPは完成済み」という見方、既存環境の維持を望む保守性の3つを挙げている。

### Key Discussion Points

- **Roark66**: 長年Gnomeにタイル的なワークフローを組み込んで満足しており、変更する理由がないと述べた。
  - **BeetleB**: LinuxのタイリングWM（AwesomeWMなど）はむしろ先進的な例であり、全ユーザーに変更を強制せず機能を追加する方向が理想と指摘。
  - **craftkiller**: 自身もタイリングWMを発見する前は同じ考えだったとし、Plan 9のネスト可能なウィンドウマネージャなど新しいUXの余地はまだあると述べた。
- **Telaneo**: 過去10年のデスクトップ変更の多くはユーザー体験の改善に寄与しておらず、UIをシャッフルするだけで信頼できる持続性がないと批判。
  - **Oxodao**: 変化が起きるとGnomeのように悪化することが多く、i3+X11に留まっていると述べた。
  - **asdf88990**: Gnomeの子供じみた振る舞いがLinuxデスクトップへの不幸な出来事だったとし、WaylandによるGnome依存の分離を評価。
- **flaburgan**: デスクトップはファイル志向、モバイルはアプリ志向という違いが両者のUX設計に大きな影響を与えていると分析。
  - **hidroto**: モバイルOSがファイルを隠したがる点が最大の不満で、重要なのはアプリではなくデータだと述べた。
  - **orbital-decay**: この区別は実は個人の好みの問題ではないかと疑問視し、専用アプリがファイル管理を肩代わりする例が増えていると反論。
- **frumiousirc**: デスクトップUX議論の多くは実際の問題に基づいておらず、多くの人は自分なりの「幸せな最適解」に落ち着いていると指摘。画面の一部しか使わないUIデザイン案には懐疑的。
  - **someonebaggy**: 中央ウィンドウを最大化できるならスクリーンショットのアイデアは悪くないと擁護。
  - **cosmic_cheese**: デスクトップUXは非常に個人的・主観的なものであり、万人向けの単一解は存在しないため多様な選択肢を用意すべきと述べた。
- **probably_wrong**: 自分も初心者の頃はCompizプラグインなど派手な変更を好んでいたと振り返り、Gnome 3の悪さがMateへの移行理由だったと説明。デスクトップとフォルダの分離を強めるアイデアを提案。
  - **account42**: デスクトップは実際に使用中はウィンドウで覆われ一等地とは言えず、KDE4のウィジェット空間化は良い変更だったと評価。
  - **reddalo**: Gnome 3以降はタブレット的環境になってしまったと批判し、Linux Mintが旧Gnome 2的な快適さを保っていると評価。

## 3. [F-Droid 2.0](https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html)

**Score:** 265 | **Comments:** 69 | [Post](https://news.ycombinator.com/item?id=49831968)

F-Droid 2.0は10年ぶりの大規模アップデートで、UIをDiscover・Search・My Appsの3領域に簡潔化した。検索はアプリ名だけでなく説明・カテゴリ・翻訳済みコンテンツにも対応し、中日韓ユーザー向けの最適化も実施。Kotlin Composeでの再構築によりMaterial Design準拠となり自動更新チェックも追加された一方、アプリ削除機能は一時的に削除されている。

### Key Discussion Points

- **aargh_aargh**: 元記事URLが502 Bad Gatewayを返すとして、Wayback Machineのスナップショットへのリンクを共有した。
- **silverbluep**: GrapheneOS上でDroid-ifyを数年使っており、F-DroidのUIの悪さと特権拡張の設定の煩わしさから移行したと述べつつ、今回の刷新を歓迎。
  - **PorciiVorbesc**: F-Droidを10年使った後にDroid-ifyを見つけ、もっと早く知りたかったと述べた。
- **jjice**: Googleが来年予定するロックダウン後、F-Droidのようなストアがどうなるか疑問視した。
  - **pritambaral**: F-Droidのリポジトリ署名鍵がGoogleに認識されるようになることが実用的な解決策になり得ると述べた。
  - **OutOfHere**: keepandroidopen.org記載の9ステップでロックダウンを回避可能と紹介しつつ、GrapheneOS等への移行を勧めた。
- **kmarc**: ビジュアルとユーザビリティの刷新を評価し、この件についてのHN上のコメント欄で知らなかった代替アプリの存在を知ったと述べた。
- **aorth**: 1年ほど前からObtainiumに乗り換え、GitHubリリースから直接アプリを取得していると述べた。
  - **yjftsjthsd-h**: サプライチェーン攻撃のリスクを避けるため、F-Droidによる更新時の基本的な審査をあえて重視していると反論。
  - **szszrk**: Obtainiumはバージョン番号方式の変更に追従できず、更新が滞った経験があると指摘。

## 4. [Two-tier encryption in the UK](https://macanorak.com/two-tier-encryption-in-the-uk/)

**Score:** 227 | **Comments:** 227 | [Post](https://news.ycombinator.com/item?id=49828731)

2025年2月、英国政府はTechnical Capability Noticeを通じてAppleにiCloudの高度暗号化データへのアクセス手段の開発を秘密裏に命じた。Appleはこれに対し、英国の新規ユーザー向けにAdvanced Data Protection（ADP）機能の提供を停止する形で対応。結果として、2024年以前からADPを有効化済みのユーザーは強力な暗号化を継続利用できる一方、それ以降のユーザーは利用できないという「二層構造」が生まれている。著者はこの不公平はApple自身の責任ではなく英国政府の要求が作り出したものだと論じている。

### Key Discussion Points

- **egorfine**: 2015年当時Appleは政府に抵抗する胆力があったが今はないとし、iPhoneセットアップ時の年齢確認画面の常態化を懸念材料として挙げた。
  - **briffle**: Appleは中国政府には早々に屈し、iCloudストレージを現地法準拠の別プラットフォームに移していたと指摘。
  - **SXX**: ロシアでもAppleはVPNアプリをApp Storeから定期的に削除しており、抵抗は実質PRに過ぎないと述べた。
  - **someonebaggy**: KYCなしの年齢確認自体には一定の理解を示した。
- **failbuffer**: 英国政府は既に1日30人以上をオンライン発言を理由に逮捕していると主張し、Forbesの記事をリンクした。
  - **Aurornis**: 射撃写真をLinkedInに投稿しただけで逮捕されたITコンサルタントの事例を紹介し、逮捕された人が必ずしも「悪いこと」をしたわけではないと指摘。
  - **Quarrelsome**: 中絶クリニック付近での嫌がらせなど、実際に違法行為に該当する具体例を挙げて反論した。
- **palmotea**: Appleはバックドアを作らずADPをUK向けに停止することで法的要求を満たしたと説明し、英国政府向けアカウントへの暗号化提供停止という逆の対応も提案した。
  - **Obscurity4340**: iCloudキーチェーン等のE2EE機能が法的アクセス義務の対象にならないのはなぜかと疑問視した。
- **selicos**: 端末アクセスの必要性を強調するなら暗号通貨の匿名ネットワーク取り締まりも同様に重視すべきだと主張。
  - **bpavuk**: 実務上、暗号資産は主にシャドーエコノミー向けに使われていると同意しつつ、停電時のウクライナなどでの実用的可能性にも言及。
- **codedokode**: 政府がバックドア作成を要求しつつそれを公言することも禁じている点を指摘し、事実上E2EEの違法化だと述べた。
  - **someonebaggy**: EUのMonero規制と同様に、技術自体は違法でなくともそれを商用化することが規制対象になるパターンだと分析。

## 5. [Nokia Design Archive (2025)](https://nokiadesignarchive.aalto.fi/index.html)

**Score:** 169 | **Comments:** 86 | [Post](https://news.ycombinator.com/item?id=49828385)

Nokia Design Archiveは、フィンランドのアアルト大学が管理するデジタルアーカイブで、Nokia Mobile PhonesおよびMicrosoft Mobileでのデザイン業務（1990年〜2020年）に関する資料を収蔵している。実機、素材見本、スケッチ、画像、3Dモデル、映像、社内文書、書簡、プレゼンテーションなどが含まれ、博物館活動・教育・研究目的での利用は可能だが商業利用は禁止されている。個々のデザイナーのフォルダやコンセプトモデルなど複数セクションに分かれて構成されている。

### Key Discussion Points

- **haritha-j**: Nokiaへの批判は行き過ぎだとし、携帯市場成熟後に「ファッションとしての電話」を志向したのは当時としては不自然な判断ではなかったと擁護。
  - **onli**: 実際iPhoneはその方向で成功し、女性がiPhoneをファッションアイテムとしてポーチに入れる様子を観察した大学時代の調査エピソードを紹介。
  - **PorciiVorbesc**: NokiaはハードやデザインでむしろHNでは好意的に語られており、失敗要因は憎まれたからではなくApple/Androidのアプリストア収益モデルに乗り遅れたためと分析。
- **thedays**: アーカイブURLにアクセスすると403 Forbiddenが返ってくると報告。
  - **zczc**: 代替として repo.aalto.fi のソースアーカイブページのリンクを共有。
  - **dspillett**: 帯域クォータ超過による誤った403応答ではないかと推測し、本来は503が適切ではと指摘。
- **ddudas**: 写真の多くが「電話を持ちながら他の活動に普通に取り組む」人々を写しており、90年代の写真が2020年代の日常を先取りしていて興味深いと述べた。
  - **cf100clunk**: 当時の社内会議で、広告資料が若者が携帯電話を持ちながら「物を飛び越える」構図ばかりだったと役員が自嘲気味に語っていたエピソードを紹介。
- **martin_balsam**: ランダムに開いたスライドの例（フォルダブル端末構想など）をリンクで共有。
  - **teekert**: 画面を折り曲げず2枚の硬い画面の継ぎ目を光学的に目立たなくする案もあり得たのではと考察し、特許が市場での試行を阻害しうる点にも言及。
  - **cube00**: そのスライドの「cbf」表記や日付の綴りが独特だとコメント。

## 6. [Enjoy Every Sandwich](https://bradmontague.substack.com/p/enjoy-every-sandwich)

**Score:** 137 | **Comments:** 57 | [Post](https://news.ycombinator.com/item?id=49805806)

著者Brad Montagueは、末期がんの診断を受けていたWarren Zevonが2002年にDavid Lettermanの番組に出演した際の「every sandwich を楽しむべきだと分かった」という言葉を振り返る。空港で食べたパッとしないサンドイッチをきっかけに、Zevonの言葉は「すべてのサンドイッチが素晴らしい」という意味ではなく、良い日も悪い日もその瞬間を意識することの大切さを説いているのではないかと再解釈している。

### Key Discussion Points

- **delichon**: 1969年の月面着陸を家族で見ていた7歳の日、母が作ってくれたBLTサンドイッチが強く記憶に残っており、その味を50年間追い求め続けていると振り返った。
- **jmathai**: 幼い子供の成長の速さを見ていると、ある体験が知らぬ間に「最後の機会」になることに気づかされ、立ち止まって感謝することの価値を感じると述べた。
- **higgins**: 自身の人生で印象に残ったサンドイッチのトップ10（順不同）を、店名と都市付きで詳細にリストアップして共有した。
- **cjcenizal**: ドラマ『Fargo』のセリフを引用し、不満を言えること自体が生きていることの贈り物だという解釈を紹介した。
- **juancn**: 記事で言及されているLettermanのインタビュー全編へのYouTubeリンクを共有した。

## 7. [Dynamic Abliteration: Non-Destructive Refusal Suppression via Engram Steering](https://blog.madhukaraphatak.in/non-destructive-refusal-supression-using-engram)

**Score:** 93 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=49831201)

記事は、LLMの拒否応答を実行時に動的な中間表現操作で抑制する「Dynamic Abliteration」を提案している。モデル重みは永続的に変更せず、通常のトークン処理には介入せず拒否トリガー検出時のみ働く「動的シグモイド文脈ゲート」、O(1)のNグラムハッシュによる検出、バックプロパゲーションで層ごとの最適投影を学習する仕組みの3要素から構成され、複数層（12,14,16,18,20層）に適用することで単一層手法より効果的だとしている。

### Key Discussion Points

- **goldemerald**: この研究分野への取り組みは評価しつつ、著者のベースライン実装が誤っており、「Refusal is mediated by a single direction」論文本来の射影ベクトルの直交化アプローチとは異なると指摘。
- **javcasas**: LLMレベルでの検閲はフロントエンドでのパスワードチェックと同様に将来性がなく、より優れたサンドボックスで被害を制限する方向が必要だと述べた。
- **qgin**: アライメント自体の方法すら確立していない中でそれを覆す手法が容易に存在することから、この状況がうまくいくシナリオがあるのか疑問視した。
- **synctext**: 強力なAIを禁止したい政府にとって都合の良い技術だとし、DRMのようないたちごっこになるとコメント。SAM/SYSTEMレジストリハイブのダンプなど機微な操作の例にも言及した。
- **neilellis**: 「（規制する側にとって）言うのは簡単だ」と皮肉を交えて短くコメントした。

## 8. [The science of Monkey Island: can grog dissolve a metal mug that fast?](https://jgeekstudies.org/2026/09/23/the-science-of-monkey-island-can-grog-actually-dissolve-a-metal-mug-that-fast/)

**Score:** 79 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=49818031)

『Monkey Island』作中でグロッグ（酒）がピューター製マグを約35秒で溶かす描写について、科学的に検証した論文を紹介する記事。逆算すると必要なプロトン濃度は約383モルとなり、純硫酸の約10倍に相当することが判明。硫酸が最有力候補としつつ、通常の水溶液化学では静止状態でこの速度を説明できず、輸送中の激しい対流やゲーム内の謎の成分「SCUMM」、酸化的経路などの可能性を考察している。

### Key Discussion Points

- **buildsjets**: 十分な濃度の水銀が含まれていれば、ピューターだけでなく固体アルミニウムも急速に溶かせると指摘した。
- **Lucasoato**: 「森で木が倒れて誰も聞いていなければ、その木は何色か」という哲学的なジョークを添えてコメントした。
- **KellyCriterion**: MI1で唯一面倒だったのは序盤の「森の小道」部分で、Le Chuck島に到達した後は世界観の美しさが失われたと述べた。
- **snvzz**: これこそが「フロンティア」と呼ばれるものであり、AIモデルがうまく活用されている例だとコメントした。
- **roschdal**: Monkey Islandは最高のアドベンチャーゲームだと端的に述べた。

## 9. [GitHub has not removed malicious imitation software after 3 weeks](https://successfulsoftware.net/2026/09/24/github-has-not-removed-malicious-imitation-software-after-3-weeks/)

**Score:** 72 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=49832406)

Easy Data Transformの開発者が8月31日、自社製品の名前とロゴを無断使用した模倣ソフトウェアをGitHub上で発見し同日通報したが、9月23日まで実質的な対応がなかったと報告。スキャンでは複数のマルウェア警告が出ており、不正なDMGファイルの背景画像がマルウェア警告を無視するよう促す内容だったことも問題視された。記事がHN トップページに掲載された約10分後にGitHubは該当ページを削除した。

### Key Discussion Points

- **hermitcrab**（投稿者本人）: GitHubはHN掲載の約10分後に該当ページを削除したとし、「基本的なサポートを受けるにはHNのトップページに載る必要がある」と皮肉った。
- **Havoc**: GitHubは可用性を「9が6つ並ぶ」水準に保つことで手一杯なのだろうと皮肉交じりにコメントした。
- **joshuat**: 同様にGitHub上のPRコメント欄でのスパム・詐欺コメントが増加しており、報告後の削除までの時間も長くなっていると指摘した。
- **kg**: 今後同様のケースでは即座にDMCA削除通知を出すべきだと提案した。
- **jay73763**: そもそもなぜ商用バイナリソフトウェアをGitHubのようなサードパーティドメインでホストするのかと疑問を呈した。

## 10. [LinkedIn wins court order blocking mass scraping of user data](https://therecord.media/linkedin-wins-court-order-blocking-mass-scraping)

**Score:** 26 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=49832646)

カリフォルニア州連邦裁判所は、LinkedInとProAPIs・Netswiftの2社との間で和解を確定。両社は数百万件の偽アカウントを使いユーザーのプロフィール情報を大規模にスクレイピングしていたとされ、今後のスクレイピング停止、収集済みデータの削除・転売中止に同意した。LinkedInは2025年10月に提訴しており、同社幹部は「あなたのプロフィールはあなたのもの」とコメントしている。

### Key Discussion Points

- **at1as**: この判決を、企業が自社データの防御性・価値をより重視し、インターネット全体がアカウント必須のゲート化された体験へシフトしていく兆しの一つとみなした。
- **TrueDuality**: 連邦裁判所による全国的な先例が「登録専用コンテンツをアカウント作成してスクレイピングすること」を禁じる方向になったのは良いことだとしつつ、LinkedIn自身の「プロフィールはあなたのもの」という発言が将来問題になり得ると指摘。
- **collabs**: テスト用の第二アカウントが突然身分証明を求められるようになった体験を共有し、今回のスクレイピング対策強化と関係があるのか疑問視した。
- **Papazsazsa**: 基本的な製品改善よりもこうした対応を優先するLinkedInに皮肉を述べつつ、フィードにReelsが追加されたことに言及した。
- **unified101**: 今回の判決はあくまで特定のユースケースに限定されたものであり、スクレイピング全般が違法になったわけではないと補足した。

## Trends

今回のトップ10では、LinuxエコシステムやAndroidの自由度をめぐる話題（Snapdragon X2のLinux対応、F-Droid 2.0）が上位を占めた。デスクトップ/モバイルのUXのあり方を問う議論（LWNのデスクトップ論、Nokia Design Archive）や、政府・プラットフォーム企業とユーザーの権利をめぐる緊張（英国の二層暗号化、LinkedInのスクレイピング訴訟、GitHubの対応遅延）も目立ち、テクノロジーの「自由」と「管理」のせめぎ合いが共通のテーマとして浮かび上がった。
