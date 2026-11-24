---
title: "Hacker News トップ10（2026年11月24日）"
date: "2026-11-24T09:40"
category: "summary"
summary: "Nvidia の Jensen Huang CEO 復帰、Ladybird のアルファ公開、Stalwart の Exchange 互換、ブラウザ内 Linux「2035 came early」など"
tags: ["hackernews", "nvidia", "ladybird", "stalwart", "wasm", "amd"]
---

## 1. [Nvidia Reinstates Jensen Huang as CEO](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html)

**Score:** 2547 | **Comments:** 3463 | [Post](https://news.ycombinator.com/item?id=50611576)

Nvidia 取締役会は、不倫報道（中国の諜報関係者とされる女性との関係を含む）を受けて今月辞任していた Jensen Huang を全会一致で CEO に復帰させた。取締役会は米政府から「国家安全保障上のリスクなし」との入力を受けたとしており、トランプ大統領も「何も悪いことはしていない」と発言。株価は復帰発表を受けて 31% 上昇して引けた。

### Key Discussion Points

- **icyfox**: Delaware の Caremark 判例は取締役の責任追及のハードルが高く、DoJ が訴追しない方針と合わせて個人責任は免れそうだと分析。わずか2週間で全会一致の180度転換には驚き、Megaspeed を介したマレーシア経由のホスティング（合法）と中国への密輸（違法）が報道で混同されているとも指摘。
  - **doginasuit**: 従業員が復帰を求めてデモをしたとの話に触れ、従業員全体の意向が最も重要だと述べる。
  - **lhd1**: OpenAI の時のように取締役会が総入れ替えされ、Huang が二度と解任されない体制になる可能性を指摘。
- **x313**: Nvidia が犯罪を犯した証拠はなく、あれば既にリークされているはずだと主張。Nvidia は東南アジアのクラウド事業者に通常のデューデリジェンスで販売し、政府要請を受けて 2025 年に Megaspeed を禁止したと説明。
  - **bilekas**: 輸出規制対象製品である以上、転売防止の責任は重く、知っていたなら刑事問題になりうると反論。
- **chunky1994**: 声明のうち「米政府高官の入力を受けて安全保障リスクなしと確信」という部分が最も重要だと指摘。
  - **SanjayMehta**: 対中強硬派がこの小競り合いで負けたとコメント。
- **apexalpha**: ASML や日本企業に対中制裁への参加を強いながら、Nvidia がホワイトハウスのお墨付きを得るのは前例のない偽善だと批判。
  - **notnullorvoid**: 新制裁は Nvidia チップを使うデータセンターを狙っており、Nvidia が免除されるとは限らないと反論。
- **015UUZn8aEvW**: 2023 年の OpenAI 騒動と同様、形式上のガバナンスと実際の力関係は違うと指摘し、未検証の Anthropic のガバナンス機構にも懐疑を向けるべきだとした。
  - **missedthecue**: 最終権限は株主にあり、十分に組織化されれば名目上の統治構造は覆ると指摘。

## 2. [Ladybird is now in alpha](https://ladybird.org/posts/alpha/)

**Score:** 1919 | **Comments:** 448 | [Post](https://news.ycombinator.com/item?id=50614249)

独自エンジンをゼロから開発してきたブラウザ Ladybird が macOS / Linux 向けにアルファ版を公開。一部サイトは動作せずクラッシュもあり得る段階で、セキュリティ保証はなく、自動更新のローリングチャネルとして配布される。ブラウザ内から壊れたサイトを報告でき、WebDriver や Firefox DevTools プロトコルにも対応する。

### Key Discussion Points

- **freakynit**: 多数のサイトを試してすべて正しく描画されたと驚く。スクロールがやや不安定なのみ。
  - **kamranjon**: 複数タブでもメモリ使用量が 53MB 程度だと報告。
  - **FinnKuhn**: パスキーでのログインが動かず、実用上の制約になると指摘。
  - **trollbridge**: 品質はアルファではなくベータ級だと評価。
- **drnick1**: フィンガープリント対策（偽装・ランダム化する JS モード、細かな権限管理）に本気で取り組んでほしいと要望。
  - **alentred**: EFF のツールで自分の Ladybird は一意に識別可能だったと同意。
  - **mzhaase**: Vanadium も同様だが、多数が使わないと逆に個人特定されると指摘。
- **alentred**: tricky なサイトや NoVNC も Firefox より軽快で感心。スクロールの滑らかさやフォントのぼやけが課題。
- **kvuj**: sqlite や Skia など実績あるライブラリへの置き換えが大きく改善に寄与した一方、SerenityOS 時代の自作精神への郷愁も。
  - **ex-aws-dude**: SerenityOS 抜きの今、目標は何かと疑問を呈す。
- **jtumbot**: アルファ版利用時の注意点を質問。
  - **npteljes**: ニッチな間は実害は少ないが、AppArmor、firejail、VM などで隔離できると回答。

## 3. [Stalwart is now a drop-in replacement for Microsoft Exchange](https://stalw.art/blog/microsoft-exchange-replacement/)

**Score:** 461 | **Comments:** 245 | [Post](https://news.ycombinator.com/item?id=50620349)

OSS メールサーバ Stalwart 1.2.0 が MAPI over HTTP（クラシック Outlook）、EWS、Exchange ActiveSync、Autodiscover を実装し、既存の Exchange クライアントをそのまま使えるようになった。NTLM、Kerberos、パブリックフォルダ、アーカイブメールボックスは非対応。オンプレ Exchange の縮小と新 Outlook の非対応を背景に、まずサーバを置き換え、クライアントは後から JMAP などへ移行する道筋を示している。

### Key Discussion Points

- **egorfine**: 新 Outlook が IMAP サーバ名・ユーザー名・パスワードを Microsoft に送信するという記述に驚きを示す。
- **hobo123**: 新 Outlook がオンプレ Exchange 非対応なら、顧客はどうやって Stalwart を使うのかと疑問。
  - **ZenoArrow**: 「サポート」の意味の誤解で、クラシック Outlook では設定自体は可能だと説明。
  - **hobofan**: クラシック Outlook は 2029 年までサポートされ、新旧の機能差で大企業は移行できないと補足。
- **rmoriz**: ドイツの GoBD（改ざん不可で最大10年保存）要件を満たす機能が通常プランにないのが問題と指摘。
  - **FinnKuhn**: 管理者が短縮できない最小保持期間を設定できるコンプライアンスアドオンがあると反論。
- **andreashaerter**: MAPI などへの対応は時間稼ぎにすぎず、オープンなメールエコシステムにとっては不利益だと批判。
  - **iamnothere**: JMAP 対応は評価でき、大目に見るとした。
  - **k_g_b_**: 旧プロトコル対応で取り込み、JMAP で拡張する「逆 EEE」のようだと評した。
- **markstos**: Stalwart は Mozilla の Thundermail が使うメールサーバだと指摘。
  - **tredre3**: 新たに発表された Kagimail もそうだと補足。

## 4. [2035 Came Early](https://fzakaria.com/2026/11/23/2035-came-early)

**Score:** 165 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=50624497)

Farid Zakaria が、ブラウザ内で Linux を動かす trynix.dev を GUI 対応に進化させた。WebAssembly にコンパイルした Linux カーネルとユーザープログラムのみエミュレートする「unkernel」により qemu-wasm 比で 2〜32 倍高速化し、Wayland/X11 ウィンドウ、WebGL2 経由の Mesa、ALSA 音声、Wisp 経由のネットワークも使える。最後に trynix 内で Firefox を動かしてさらに trynix を読み込む入れ子デモを行い、Gary Bernhardt の予測した 2035 年が早く来たと結ぶ。

### Key Discussion Points

- **glimshe**: JavaScript の台頭がソフトウェアエンジニアを辞めたくさせたと語り、AI が仕事の楽しさを奪うという最近の議論と対比させた長文の個人的感想。
- **momojo**: 実運用で何に使うのか疑問。これまでも「実運用では非現実的」と分かった例が多かったと述べる。
  - **forcedtolinux**: 会社の Windows PC などで、ブラウザタブだけで使い捨ての Linux 環境が得られるのが便利だと回答。
- **saagarjha**: 講演の「Web エンジンへの投資で結果的に速くなる」という論点は本当に成り立つのかと疑問。
- **forcedtolinux**: ファイルシステムからファイルをダウンロードする方法はあるのかと質問。
- **taf2**: gcc パッケージ（118MB）を入れて hello.c をビルド・実行できたと報告。

## 5. [Modernizing iperf/iperf3 and introducing fireperf](https://blog.daniel-baumann.ch/posts/20261122-1.html)

**Score:** 97 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50604710)

Daniel Baumann が Debian の iperf2 / iperf3 パッケージを client/server に分割し、systemd・ufw 連携とサービスのハードニングを追加。iperf3 は 1 ポート 1 クライアントのため複数ポート用の systemd テンプレートを用意した。IPFire 発の新ツール fireperf（1 ポートで多クライアント、JSON 出力、ncurses グラフ、iperf/iperf3 クライアントとしても動作）も Debian sid に追加された。

### Key Discussion Points

- **zamadatix**: デフォルトの systemd サービスプロファイルを歓迎。「iperf」がどちらのバージョンかを固定すべきでないと主張。
- **bacaw**: fireperf は UDP や帯域制限に非対応なので、当面 iperf2 を使い続けるとコメント。
- **vanshiglobal**: 1 ポートで並列クライアントを扱える点が共有テストサーバでは最も重要と評価し、10G 超ではツール自体の単一スレッド CPU 負荷が問題になると指摘。
- **riobard**: iperf2 のほうが優れているという認識が薄い混乱を挙げ、旧コードベースを保守しないなら別名を使うべきだと批判。

## 6. [Drone Maps of Salvage Yards](https://salvageyarddrone.wordpress.com/)

**Score:** 80 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=50623515)

ドローンで撮影した米国の廃車置き場（サルベージヤード）や牽引・自動車リサイクル業者などの地図を公開するブログ。2026年11月にも自動車解体、トラック、U-Pull ヤードなどの投稿が続いている。

### Key Discussion Points

- **polemic**: 作者は GIS 界隈で「政府機関の眠ったデータを掘り出す人」として知られていると紹介。
- **willejs**: 英国では伝統的な解体屋が減っているとして、ロンドン近郊の良い解体屋を尋ねる。
- **WaitWaitWha**: 一部は商業スクラップ場ではなく私有の農場の庭に見え、ドローン撮影には複雑な思いがあると述べる。
- **rob74**: 配信画像の解像度が Google マップ並みで、ドローン撮影の意味が薄れていると指摘。
- **taneq**: 他人の事業所上空をドローンで撮影・公開することが合法なのかと疑問。
- **ocdtrekkie**: 地図上で特定車種のある場所を探せれば部品探しに便利で、事業者にとってもサービスになり得ると提案。

## 7. [AMD EPYC Zen 6 vs. Zen 1 Performance: 12.1x Geo Mean in Less Than 10 Years](https://www.phoronix.com/review/amd-epyc-9006-7601)

**Score:** 71 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=50624061)

Phoronix が、初代 EPYC 7601（32コア、2017年）と Zen 6 世代の EPYC 9996（256コア Zen 6c）/ 9686F を比較し、幾何平均で 12.1 倍、AI ワークロードでは最大 133 倍の性能向上を確認。ワット当たり性能は約 5 倍。本文はアーカイブ時点のスナップショットに基づく。

### Key Discussion Points

- **Aurornis**: Linux カーネルを 18 秒、LLVM を約 1 分でビルドできることに驚き、256コア/512スレッド・1GB の L3 などの仕様を引用。
- **x-complexity**: 12 倍はコア数増加とコア単体性能向上の 2 要因の合算だと指摘。
- **skywal_l**: 知りたかった数字として、ワット当たり約 5 倍という記述を挙げる。
- **wisty**: log2(12) より、約 3.6 年で性能が 2 倍になるペースだと計算。
- **DeathArrow**: メモリや SSD の価格を含めると、このサーバ 1 台で小さな家が建つほどだと述べる。

## 8. [Lowering Perplexity Without Scaling](https://micjm.com/blog/lowering-perplexity-without-scaling/)

**Score:** 46 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=50607512)

OpenAI がモデルのパープレキシティ推移をグラフ化し知能の普遍的指標として示したことへの反論。パープレキシティは特定テキストに対してのみ意味があり、同グラフは固定のコードコーパスを使っている（脚注のみで明示）。160M モデルでコード比率を 25% から 75% に上げると、コードの log-perplexity は下がるが Web テキストでは上がる、という論文を引き、コード比率の増加だけで説明できる可能性を示す。

### Key Discussion Points

- **changoplatanero**: 非汚染コーパスを作るのは難しく、企業の非公開コードベースが有力だと指摘。文脈長の影響が不明だとも述べる。
- **AlexCoventry**: コードはトークン当たりのエントロピーが低いだけでは。評価データが全モデルで一定か気になると述べる。
- **MrScruff**: コーディングモデルの改善と RSI・安全性の議論を考えると、固定コードデータのパープレキシティは依然として意味があるのでは、と指摘。
- **fedpost**: 近年モデルのクリエイティブライティングが悪化したという不満は、学習ミックスのトレードオフを反映しているのかもしれないと推測。
- **skybrian**: パープレキシティの評価は固定データセットを使い、複数種類のデータでスコアを示すべきだと述べる。

## 9. [Arctic: A Practical Lock-Free Adaptive Radix Tree](https://www.usenix.org/conference/osdi26/presentation/ni)

**Score:** 30 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50592307)

高性能・ロックフリー・範囲スキャンを両立するインデックス Arctic（OSDI '26）。メタデータ配置とフリーズ方式の協調プロトコルで非ブロッキングを実現し、操作キーでポインタ到達性を近似する新しいメモリ回収方式を提案する。YCSB の多くでロックベースのインデックスやハッシュマップを上回り、RocksDB と Turso に組み込むと書き込み中心ベンチで最大 40% / 12% スループットが向上した。

## 10. [Ride the SQL curve from basics to mastery](https://sqlride.com/)

**Score:** 30 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50593006)

ブラウザ上で SELECT、JOIN からウィンドウ関数、CTE まで学べる無料・登録不要のインタラクティブ SQL 学習サイト。実データセットで練習できる。本文はアーカイブ時点のスナップショットに基づく。

### Key Discussion Points

- **xerxes249**: UI の情報密度が高すぎて教材には向かず、SQL を知る人にも役立たなそうだと指摘。
- **97-109-107**: 機械の出力が中心のものは教育に適するのかと問い、基礎学習のあり方が変わるべきだと論じる。
- **snorrah**: 作者や問題の報告先が About/FAQ に書かれていないと指摘。
- **ssenssei**: AI で作られたと言うなら、同等以上の代替サービスを挙げてほしいと要望。

## Trends

- **権力と統治の揺らぎ**: Nvidia の CEO 復帰は、政府の関与や取締役会の実効的な権限をめぐる議論を呼び、OpenAI 騒動との類比も多く語られた。
- **独立系・オープンな基盤の前進**: Ladybird（独自ブラウザエンジン）、Stalwart（Exchange 互換の OSS メールサーバ）、fireperf、ブラウザ内 Linux など、既存の独占・レガシーに代わる実装が注目された。
- **ハードウェアと性能**: 初代 Zen から約 12 倍という EPYC の進化や、ロックフリーなインデックスの研究など、性能の話題も目立つ。
- **AI をめぐる評価の見直し**: パープレキシティ指標への批判や、AI 生成と思われる学習サイトへの冷ややかな反応が見られた。
