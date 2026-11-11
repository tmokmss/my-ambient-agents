---
title: "Hacker News Top 10 (2026-11-11)"
date: "2026-11-11T05:53"
category: "summary"
summary: "ローカル動作のスマートホーム、.name 存続、Scion の軽トラ、Glasswing 検証など HN 上位10件の要約"
tags: ["hackernews", "summary"]
---

## 1. [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/)

**Score:** 812 | **Comments:** 294 | [Post](https://news.ycombinator.com/item?id=50441707)

約10年のホームオートメーション経験から「コア機能はインターネットを抜いても動くこと」をルール1とし、Tasmota 搭載 ESP ボード・MQTT ブローカー・Node-RED を自前の Raspberry Pi 上で運用する方法を紹介。Nest API 廃止などクラウド依存の失敗例や、2回分の講演スライドもまとめている。

### Key Discussion Points

- **sholladay**: Thread 対応機器は自己修復メッシュで、ネット断・ハブ停止・停電でも動く。長期停電時は Jackery で電源を確保したスマートプラグをルーター代わりにして乗り切った。
- **mountain_peak**: 前の住人が残した X10/Insteon 環境を拡張してきたが、クラウドの停止に悩まされ、USB 電源を定期的に落とす再起動回避策を作った。
  - **knodi123**: 定期的に再起動する対処を、チューリングの自転車の逸話になぞらえた。
  - **jandrese**: クラウドサービスはいずれ終了するが、リバースエンジニアリングはサービス終了後だと難しくなる。
- **scosman**: Home Assistant は各連携に「IoT Class」（Local Push〜Cloud Polling）を公開しており、ローカル動作のものだけを選んでいる。
  - **connicpu**: ZigBee/Z-Wave を優先。信頼性が高く Wi-Fi を圧迫せず、スイッチがメッシュルーターを兼ねる。
  - **koyote**: さらに進めて ESPHome などオープンソース機器のみを使うが、ロボット掃除機などは例外にしている。
- **reasonabl_human**: 最安のハードを買い、ソフト面の悪評は無視し、Claude にローカル専用のカスタムファームを相談する流れが新しい定石だという。
  - **f1shy**: Sonoff や Raspberry Pi にバイブコーディングを組み合わせる、同様のローカル優先構成。
- **driverdan**: 市販品は Zigbee/Z-Wave のみ。Wi-Fi 専用品は、ファームがオープンか差し替え可能な場合しか買わない。
  - **bityard**: 推奨機器を尋ね、安価なものは独自仕様、オープンなものは高価だと感じている。

## 2. [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/)

**Score:** 752 | **Comments:** 169 | [Post](https://news.ycombinator.com/item?id=50442736)

Verisign が 22,000 件の 3rd レベル .name ドメインとメールリダイレクトを終了する計画を撤回した。新規の 3rd レベル登録は閉じるが、既存分は無期限に維持される。長い法的・ICANN への働きかけの末の勝利だと、Neil Fraser が報告している。

### Key Discussion Points

- **giancarlostoro**: 計画撤回の報を歓迎している。
  - **Spivak**: ドメインは他者の台帳上の項目にすぎず、守るには強いデジタル所有権法が要ると指摘。
  - **echelon**: 今後は「first.last.name」が貴重な物件になるだろうと述べた。
- **nticompass**: 廃止を見越して登録を失効させてしまい悔しがっている。
  - **mzajc**: レジストリによっては失効後も更新できる猶予期間があるので確認を勧めた。
  - **mixdup**: 3rd レベル登録は現時点ではまだ停止されていないと指摘した。
- **troyrollo**: Tucows/OpenSRS 経由の登録者は8月下旬以降に更新を拒否され、移管先も見つけにくく、後始末が残っている。
- **soupbowl**: 新 TLD には値上げや移管の面倒があり、主要 TLD が無難だと述べた。
  - **fc417fc802**: com/org/net 以外では、政治情勢で安定性を測れる ccTLD のほうがよいと反論。
  - **drschwabe**: 新 TLD はブランディング上有利なことがあり、広告費と考えられるとした。
- **derhuerst**: 前身の投稿は 547 コメントだったと紹介した。
  - **dang**: 該当スレッドは 2026年9月の「.name Termination」だと補足した。

## 3. [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/)

**Score:** 412 | **Comments:** 286 | [Post](https://news.ycombinator.com/item?id=50445401)

トヨタが Scion ブランドを「Scion by Toyota」として復活させ、挑戦的なモビリティを試す「フリーダムラボ」と位置づけた。第1弾は超小型ユーティリティトラック「KEI-01」で、インディアナ州の既存工場で生産して米国で販売する。

### Key Discussion Points

- **freetime2**: 農業で軽トラを使っており、悪路でも頑丈で安価なため酷使できる実用車だと評価した。
  - **SOLAR_FIELDS**: 2人乗りのフォード・レンジャーを15年乗っており、軽トラの思想の延長にあると述べた。
- **ilamont**: 25mph（約40km/h）制限はゴルフ場や島向きで、制限速度 45〜55mph の地方道では実用的でない。
  - **ryukoposting**: トヨタの狙いは農場・敷地用で、競合は乗用車ではなく Gator だろうと見ている。
  - **voxelghost**: 制限は規制上の問題で、積載なしなら 50mph は出ると述べた。
- **6DM**: 25mph 制限だと市街地走行もできないが、ホームセンターへの買い出し需要は大きい。
  - **bryanlarsen**: 制限は低速車両（LSV）規格によるもので、苦情は議員に言うべきだと指摘。
  - **schiffern**: LSV は制限 35mph 以下の道路なら走行できると補足した。
- **classictraffic**: 制限がなければ即買いだが、米国で軽トラ需要があることの証明にはなると期待している。
  - **pfdietz**: 誰かが速度制限を解除するハックを作るだろうと予想した。
- **erickhill**: 660cc・約40馬力は70年代中期のVWビートル並みで、本来はもっと速く走れるはずだ。

## 4. [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update)

**Score:** 366 | **Comments:** 168 | [Post](https://news.ycombinator.com/item?id=50447074)

VulnCheck は Project Glasswing 開始7か月後の検証で、Anthropic 由来の CVE は442件（年間 CVE の約0.5%）で、悪用が確認されたのは2件だけだとした。報告 37,966 件のうち公開は 19.4%、修正済みは 217 件にとどまる。curl では公開済み34件中19件が脆弱性として却下されたという。

### Key Discussion Points

- **pizlonator**: Fil-C について Anthropic から9件の報告を受け、すべて実在するバグで誤検知はなく、品質は例外的だった。
  - **pron**: 新しいコードほど深刻なバグが多く、成熟したコードベースでは見つかりにくいのではと推測。
  - **dwohnitmok**: curl の保守者も「スロップは消えた」と報告の質向上を認めていると紹介。
  - **sashank_1509**: Linux の保守者は Mythos の誤検知率の高さに強く不満を示していると反論。
- **enthuseyourcurb**: 大手テック企業で Mythos 公開以降、深刻なセキュリティ問題の修正に追われており、この種の記事には違和感がある。
  - **levocardia**: 下水処理場の制御など、インターネット上の重要システムの脆弱性のほうが懸念だと述べた。
  - **bobkb**: 小型モデルでもクローズドソースから多数の問題を見つけられると経験を語った。
- **snowwrestler**: PHP2Shell が既知の悪用困難な論理欠陥だったことで、かえって安心した。
  - **Paracompact**: 停止性問題の制約があっても、依存関係を含めた形式検証で証明は可能だと反論した。
  - **Den_VR**: チューリング完全でない限定的な計算モデルにすれば安全にできるのではないかと述べた。
- **rurcliped**: Glasswing の発見は多くが提携企業の内部利用で、この記事は CVE という関連の薄いデータでの評価で誤解を招くと批判。
  - **geraneum**: 根拠にした curl は Mythos の報告を直接受けているのだから、関連が薄いとは言えないと反論。
- **dfee**: 公開が20%にとどまる状況で、curl の逸話だけから結論は出せない。
  - **ASalazarMX**: 残り80%の遅れは人手の負担のためで、修正案も提案すべきだと述べた。
  - **jknoepfler**: 大量の質の低い報告を人間に回す価値がないから出していないのだろうと推測。

## 5. [Starlink Mini 2](https://starlink.com/mini-2)

**Score:** 351 | **Comments:** 351 | [Post](https://news.ycombinator.com/item?id=50444129)

Starlink の携帯型アンテナ Mini の新世代。公式ページは JavaScript 描画のため本文を取得できず、コメントからの推測では USB-C 端子の採用と、取り外し・クイック交換できるバッテリーが特徴のようだ。

### Key Discussion Points

- **sib**: 頻繁に海外の僻地へ行くため購入し、月55ドルで 100GB を使え、モンゴル西部から投稿している。
  - **consumer451**: 現地での一日について尋ねた。
- **rmm**: 鉱業（ハードロック採掘）の現場を一変させた。以前は掘削結果が出るまで何日もかかっていた。
  - **loufe**: 亜北極の鉱山では、10年ほど前は 25Mbps を約800人で共有しており、Starlink は画期的だった。
  - **King-Aaron**: 鉄鉱石鉱山でも有用だが、企業の政治姿勢と、どこにカバレッジを提供するかを握る点を懸念。
  - **hcurtiss**: 林業のピックアップ車に搭載し、林道の積み込み場からリモート会議に参加できるようにしている。
- **cwt137**: ウルトラマラソンのライブ中継で、自転車のカメラマンが背面に Starlink Mini を載せている。
- **artdigital**: Roam プランから国際カバレッジが外れ、Roam Unlimited でも30日のみだと指摘した。
  - **paxy**: 常時オフグリッドでなければ、国際ローミング eSIM のほうがよいと助言した。
  - **porkshoe**: 規制ではなく利益目的の可能性もあると疑問を呈した。
- **arjie**: 外出先にポータブルバッテリーを持ち出して、公園で家族と過ごしながら仕事をした。

## 6. [Six Math Essentials](https://teorth.github.io/tao-web/six-math-essentials.html)

**Score:** 196 | **Comments:** 34 | [Post](https://news.ycombinator.com/item?id=50446246)

Terence Tao の新刊（Quanta Books、2026年11月10日発売、128ページ）。数・代数・幾何・確率・解析・力学系の6つの概念を、世界を理解する道具として紹介する薄い入門書。

### Key Discussion Points

- **tveita**: Tao が6つの概念を語るインタビュー動画を紹介した。
- **flowerlad**: Amazon のプレビューに目次がなく、購入判断できないと不満を述べた。
  - **kirubakaran**: 著者のページに目次があると案内した。
  - **softbuilder**: Kindle 版のサンプルなら目次が見られる。
- **mmooss**: 6つの概念を列挙して内容を要約した。
- **stldev**: 予約して届いた。約100ページで簡潔、数から解析・力学系までの俯瞰がよくまとまっている。
- **pdhborges**: かなり基礎的で、STEM の学位があれば得るものは少ない。
  - **ballmerpoint**: 数学哲学の入門書としては良いと評価した。
  - **caaqil**: 基礎的な本がフロントページに載る理由を疑問視。

## 7. [A great old-timey game-programming hack (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html)

**Score:** 85 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50448921)

大学時代の Tom Moertel が、1980年代の PC 向けアーケード移植ゲーム（サイドスクロール）が遅すぎた問題を、6809 アセンブリの巧妙な手法で高速化した体験談。当時のゲーム開発者が速度のために行っていた奇抜な工夫の一例だ。

### Key Discussion Points

- **taspeotis**: 関連する逸話として、VGA クローン開発で徹夜で設計した話を引用した。
- **Panzerschrek**: 現代の CPU ではこうした手法は無意味で、ボトルネックはメモリアクセスだと指摘した。
- **Dwedit**: Game Boy の Monster Max は、メインメモリ上に作った `ld de,NNNN / push de` の展開ループで VRAM に書き込む。
- **mrandish**: 6809 の PSHU/PULS によるメモリコピーは、他にも独立に発見されていただろう。

## 8. [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/)

**Score:** 50 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50449748)

SSH 秘密鍵を Secure Enclave で保護する方法を比較した記事。OS 標準の方法は完全に動くものの手順が見苦しいため、筆者は採用を見送った。他の候補は Secretive、YubiKey、1Password/Bitwarden。

### Key Discussion Points

- **database64128**: WireGuard の鍵は Keychain と Touch ID で保護されていたが、システム更新後に使えなくなった経験があり、この種の機能は信頼しすぎないほうがよいと警告。
- **dsenkus**: VM 内で開発しており、Secretive でエージェントだけを転送して、git 操作ごとに承認を求めている。
- **larusso**: 長年 YubiKey を使ってきたが、新しいマシンやコンテナでの導入が難しい。
- **Gigachad**: 標準方式は文書化された機能ではなく、Apple が将来変更・削除するリスクを懸念した。
- **petesergeant**: Secretive を GitHub 用に使っているが、Secure Enclave の鍵はバックアップできない。

## 9. [To deter bioterrorism, U.S. imposes new rules on ordering synthetic DNA](https://www.science.org/content/article/deter-bioterrorism-u-s-imposes-new-rules-ordering-synthetic-dna)

**Score:** 46 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=50449275)

米国が合成 DNA の発注に新規制を課す。記事は取得できず、コメントによれば、対象は主に政府資金を受ける研究者のようだ。

### Key Discussion Points

- **AnotherGoodName**: 最上位 AI モデルが生物分野で見つけているものと関係があるのではと推測した。
- **gr-mk**: 自宅で微生物を趣味にしている少数の人にも影響しうる。
- **__MatrixMan__**: オリゴ合成装置はインクジェットプリンターに近く、機能する細胞に導入できる技術があれば入手は難しくないと述べた。
- **King-Aaron**: 規制の対象が政府資金の研究者だとすると、テロ抑止との関係は薄いと批判。
- **janalsncm**: 「何もしないよりまし」という評価に、不満が感じられると指摘した。

## 10. [Greg Kurtzer's Ginux is now a userspace kernel](https://github.com/gmkurtzer/ginux)

**Score:** 10 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50450007)

Ginux は、隔離された Linux 互換インスタンスのための設定可能なユーザー空間カーネル。当初は UEFI で起動する独立した Rust 製カーネルで、AI コーディングエージェントと人間の設計で Rocky Linux 10 のユーザーランドを動かした。その研究段階は完了し、Linux の ABI やエコシステムは再現できないとして、通常の Linux プロセスとして動く方式に転換した。

## Trends

- **クラウド依存への反発とローカル志向**: スマートホームのローカル動作（#1）、ドメインの所有権（#2）、Starlink の運用（#5）など、他者のサービスに依存するリスクが話題の中心だった。
- **AI とセキュリティ**: Glasswing の成果への賛否（#4）、合成 DNA 規制（#9）、AI エージェントによるカーネル実験（#10）が並び、AI の影響を評価する議論が多かった。
- **現場の実用性と規制**: Scion の軽トラ（#3）は 25mph 制限が、Starlink（#5）は国際ローミングの条件が、実用性の議論を左右した。
- **基礎・職人的な技術への関心**: Tao の数学入門（#6）、6809 アセンブリの高速化（#7）、Secure Enclave での鍵保護（#8）など、基礎や工夫への関心も根強い。
