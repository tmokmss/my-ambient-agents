---
title: "Hacker News トップ10 (2026-11-04)"
date: "2026-11-04T05:58"
category: "summary"
summary: "ルノー車載ナビのjailbreak、$800のケーブル駆動ロボ、Fujifilmのテープ5倍増産、C++26否決など"
tags: ["hackernews", "summary"]
---

## 1. [Jailbreaking my car's navigation system just so I can change the time](https://blog.nns.ee/2026/11/02/renault-hack/)

**Score:** 705 | **Comments:** 292 | [Post](https://news.ycombinator.com/item?id=50339288)

2014年式ルノー Latitude のヘッドユニットは、夏時間の切り替え後に時刻を設定する項目がなかった。設定メニューは地図用 SD カード上に定義されており、前オーナーが紛失、正規の代替カードは DRM ロックで高価だった。著者は QEMU エミュレータを作ってファームウェア更新の検証を迂回する攻撃を試し、ログ関連コマンドのパストラバーサルで `core_pattern` を上書きした。`dbus-monitor` をクラッシュさせて root 権限でスクリプトを走らせ、保存されているタイムゾーンオフセットを 180 から 120 に書き換えた。

### Key Discussion Points

- **tom1337890**: 詳細な記事を称賛しつつ、SD カードを受け取って前オーナーを信頼すればよかったと冗談交じりに指摘。
  - **xx_ns**（投稿者）: 実際には前オーナーが SD カードを誤って捨てており、ゴミ箱を漁るかと聞かれたが断った。
  - **bgun**: なぜ SD カードを受け取らなかったのか、説明が分かりにくいと疑問を呈した。
  - **darknavi**: 個人プロジェクトの発見や考えは、将来の自分のために書き残すべきだと共感。
- **numpad0**: スバルの一部車種には CAN バス上に同期しない時計が3つあり、うち1つは 32.768kHz の水晶なしで CPU クロックから時刻を作っているらしいと伝聞を紹介。
  - **ManuelKiessling**: smart fortwo の時計2つは別方向にずれるため、平均を取ると正しい時刻に近くなる。
  - **flanz_10**: ナビなしのグレードにも時計が要るため、ナビ経由に一本化できないのだと反論。
- **strenholme**: 低品質な社外ナビを素朴な旧式ステレオに交換した経験を語り、ヘッドユニットを交換できない車が心配だと述べた。
  - **RulerOf**: 1〜2DIN 枠の交換が選択と競争の余地を保っていたことに同意。
  - **guywithahat**: 最新車は定期的に更新される優れたインフォテインメントを持ち、こうした問題は起きにくいと反論（Tesla を例示）。
- **tesnorindian**: GNSS/GPS 時刻には夏時間がないため、120 というオフセットはどこから来るのかと質問し、安価な RTC チップがあるのにと疑問を示した。
- **jerlam**: 2001年式の高級車は時刻を手動で変えられず、タイムゾーン規則が変わるたび年4回の調整が必要だった。
  - **bobmcnamara**: 2025年式トヨタは時計が2つあり、片方の更新に運転データの共有が必要で、現在どちらも1時間ずれている。
  - **wvenable**: 2日前にタイムゾーンが変わった地域で、OTA 更新のない半年前の新車が誤った規則で時刻を表示している。

## 2. [Stringman, an $800 open-source room scale gripper robot](https://neufangled.com/)

**Score:** 481 | **Comments:** 169 | [Post](https://news.ycombinator.com/item?id=50354358)

Neufangled Robotics の Stringman は、天井の四隅に張った4本のケーブルをモーターで操作し、グリッパーを吊り下げて部屋のほぼ全域に届かせるロボット。価格は $795 で、対応する部屋は 3〜10m、可搬重量は最大約 2.2kg。制御は外部 PC が担い、ローカルネットワーク内で完全オフライン動作する。

### Key Discussion Points

- **Animats**: スポーツ中継の Skycam も同様に、4本のケーブルと4台のウインチを協調させて動かしている。
- **nhnifong**: 制作者として質問に回答。張力リミットが働き、強く引くとラインが出るので命に関わる危険はないという。シーリングファンのある部屋は作業域の天井を下げて対応する。
  - **dingdongditchme**: 吊り下げ式のケーブル駆動パラレルロボットだと分類し、この種のロボットの精度で博士論文を書いたと語った。
  - **R1D3R**: アンカーは人間の気道が耐えられる張力より低い力で外れるのか、物理的な安全機構の有無を質問。
  - **its-summertime**: 長さを制御できる下降ロッドの動画を紹介。
- **histk_garden**: 庭用に高速ウインチ2台で人が乗れる大型版を作り、畝の間を移動している。
  - **reasonabl_human**: 写真を見せてほしいと依頼。
- **conductr**: 服の片付けは無意味だがおもちゃの片付けは優れた用途だとしつつ、家庭内ではケーブルが現実的でないと懸念。
  - **3RTB297**: 長時間外出する大きな矩形の部屋なら適しており、庭などの屋外用途も探る価値があると助言。
  - **Karliss**: ケーブルロボットの商用例はスタジアムやコンサート会場のカメラ程度で、産業用途ではコンベアで運ぶ方が合理的。
- **goda90**: 小型回転刃を付けて庭の雑草を自動で刈る案を提案。
  - **fwipsy**: 根から抜く方が再生せず、刃による巻き込みの問題も避けられる。
  - **comboy**: 埃、虫、風、花粉に加え、強固な固定点と悪天候時の格納まで考えると難易度は10倍以上。

## 3. [Fujifilm to boost tape production 5x as AI fuels archiving demand](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/)

**Score:** 428 | **Comments:** 181 | [Post](https://news.ycombinator.com/item?id=50336918)

Fujifilm は約100億円（約6,300万ドル）を投じ、神奈川県の小田原拠点で LTO テープの生産能力を2025年度比で5倍に増やす。期間は2026〜2028年度で、最新世代の LTO Ultrium10 が中心になる。生成 AI によるデータ量の増大とアーカイブ需要が背景で、クラウド事業者がコストの低さとオフライン保管の安全性からテープを使い続けている（Wayback Machine のスナップショットに基づく）。

### Key Discussion Points

- **dylan604**: テープは書き込み後に実際に復元して確認しないと、アプリが読めたと報告しても読み出しに失敗することがあると警告。
  - **f1shy**: 15年間で約1000本の LTO などを使ったが問題は一度もなく、頻繁に循環させ、ドライブを保守していた。
  - **WalterBright**: Caltech 時代のソフトウェアを、規格外の磁気テープドライブでしか読めずほぼ失った。
  - **ghshephard**: 訴訟対応で Iron Mountain の LTO を大量に復元した経験を語った。
- **pmw**: rustic と Amazon S3 Glacier Deep Archive を使えば、設備投資なしで約 $1/TB/月のコールドバックアップができる。
  - **Kirth**: 復元しない前提だと、バックアップが有効かどうかをどう確認するのかと質問。
  - **Sopel**: 実際に計算すると高いと指摘。
- **doughnutstracks**: LTO テープの価格例を紹介（LTO-9 18TB は約 $5〜7/TB、LTO-10 30TB は約 $8.6〜10/TB）。
  - **throw0101c**: ドライブは固定の設備投資で、購入後の運用費はほとんどかからないと補足。
  - **somat**: ドライブは高価で寿命も短く、長期保管で本当に問題なのは読み出し手段を残せるかだと述べた。
- **amelius**: なぜ手頃な個人向けテープドライブがないのかと質問。
  - **thw_9a83c**: 書き込み可能な Blu-ray ですら衰退しており、個人向けテープの市場はさらに小さい。
  - **mapkkk**: 旧世代の LTO ドライブは eBay で安く入手でき、LTO-5 を $85 で買った。
- **dguest**: 大規模科学実験では、蒸留前の生データをテープに保存するのが一般的で、テープのコストは重要。

## 4. [Show HN: HackerTV – HN's most-recommended Youtube videos as 24/7 TV channels](https://hackertv.org)

**Score:** 257 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50346755)

HN ユーザーが互いに薦め合った YouTube 動画を、レトロ TV 風のサイトで24時間放送するファンプロジェクト。全視聴者が同じ放送を見る形式で、番組表やキーボード操作に対応する。カタログは HackerTube のデータセットを元に、HN のコメントから毎週更新し、Claude でラベル付けしている。

### Key Discussion Points

- **spditner**: プロンプトをソースとして公開してほしいと述べ、HackerTube 用 Roku アプリをワンショットで作った例を紹介。
- **asimjalis**: 番組表ではチャンネルが下に向かって大きくなるが、上下キーの動きが逆で混乱すると指摘。
- **thoughtpeddler**: チャンネルを切り替えていたら、2005年の Zuck が Apple とプライバシーに触れる発言をする映像に出会った。
- **smokel**: HackerTldr（3文要約）が欲しいと述べ、HackerTV は良さそうだと言い直した。
  - **freedomben**: HN で話題になるゲームを集めた「hacker games」に期待。
  - **wmchen**: HN フロントページの感情を追跡する HackerSentiment は、AI に対して完全な無関心を示すだろうと冗談を述べた。
- **5555watch**: 動画を選んでクリックするより、チャンネルを流し見する方が楽しい。
  - **kreelman**: 面白すぎて時間を奪われるのが難点。

## 5. [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html)

**Score:** 204 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=50358702)

鈴木啓修氏によるオンライン技術書。PostgreSQL 19-beta までを対象に、サブシステムの仕組みと全体像を解説する。ストレージ、クエリ処理、MVCC・SSI、VACUUM、HOT、バッファ管理、WAL、バックアップ、レプリケーションなどを扱う。

### Key Discussion Points

- **gopalv**: 最新の Jepsen レポートをきっかけに Postgres の SSI 実装に関心を持った。流し読みなら HOT 更新の節が良く、zHeap の実装ノートや TOAST と併せて読むと理解が深まる。
  - **refset**: 2020年の Jepsen レポートが SSI 実装の長年のバグを見つけていたと補足。
- **jon128**: OrioleDB の新しい MVCC が載っていないと指摘。
  - **amw-zero**: Postgres が採用する計画は知らず、Tom Lane は dead tuple と vacuum をやめる世界は想像できないと語っていた。
- **favori995749721**: Postgres 18 で全文検索の辞書と設定が、常に libc ではなくクラスタの既定の照合順序プロバイダ経由になった。ICU 等のクラスタでは pg_upgrade 後に再インデックスが必要。
- **getbrew**: HOT 更新は、インデックス列が変わらず新タプルが同じページに収まる場合のみ働く。更新頻度の高い列にインデックスがあると無効になり、fillfactor を 80〜90 に下げると有効に働きやすい。
  - **ComputerGuru**: カラム幅が大きいと fillfactor を下げるのは得策でないかもしれない。

## 6. [C++26 Disapproved](https://andreasfertig.com/blog/2026/11/cpp26-dis-failed-how-does-cpp-survive/)

**Score:** 189 | **Comments:** 83 | [Post](https://news.ycombinator.com/item?id=50360164)

2026年10月23日、ISO の各国代表団体が C++26 の DIS 投票を否決した。著者はこれを C++ 史上初の失敗と位置づけ、主因は Contracts が未成熟だとする意見だと述べる。修正、技術仕様への格下げ、中止のどれを選んでも次期規格が遅れ、11月16日の会合で打開を目指すという。

### Key Discussion Points

- **jandrewrogers**: 高信頼 C++ を書く立場から、Contracts は C++20 の concepts 後に実コードで誰が必要とするのか不明で、メリットは定量化しにくい。
  - **quotemstr**: concepts は型の型、Contracts は構造化された実行時アサーションで、両者は別物だと反論。
- **nanolith**: 静的解析器やモデル検査器など外部ツールで検証できる契約注釈は有用で、C で CBMC とマクロによる独自の契約機構を作り形式手法に使っている。
- **LugosFergus**: C++ は複雑さの追加で行き詰まっており、「erroneous behavior」のように言語の欠点を抑える提案の方が良い。
  - **airstrafer**: Contracts は使い方の複雑さを減らし得るが、WG21 の過去の実績を見ると説得力に欠ける。
- **lowatt**: 規格が二段階承認を要求するのに、二段階目の投票権の行使が信頼の裏切りと見なされる理由が分からない。
  - **dannyw**: 見解が分かれるなら、仕組みが設計どおり機能したのだろう。
  - **adastra22**: 著者の望む投票結果でなかったからにすぎないと見る。
- **wahern**: 反対論文は Bjarne Stroustrup のものらしく、最終投票を失敗させるよう水面下で動くと過去の議論で言っていたはずと推測。
  - **Maxatar**: Reddit の議論では、反対派が寝ている時間帯に緊急の選挙を設定するなど強引な手段を使ったとされる。
  - **locknitpicker**: Stroustrup が中傷キャンペーンの対象になっていると見る。

## 7. [Japan's Jimi 'Mundane' Halloween Costumes of 2026](https://spoon-tamago.com/japan-jimi-mundane-halloween-costumes-2026/)

**Score:** 156 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=50333131)

説明がないと分からないほど平凡な「地味ハロウィン」の2026年版まとめ。2014年に Daily Portal Z が始めた習慣で、派手な仮装に気後れする大人向け。今年の例は、デザイナーズ水栓に苦戦する人、マドラーをストローと間違えた人、電車で動画を見て笑いをこらえる人。

### Key Discussion Points

- **numpad0**: 洗剤の詰め替えはフェルメール「牛乳を注ぐ女」のパロディで、日本の Twitter でミーム化している。
  - **dcrazy**: 洗濯中の人の写真にしか見えず混乱していた。
  - **blobbers**: 仮装ではなく洗剤を注ぐ写真にすぎないと否定的。
- **happytoexplain**: アメリカ人には文化的な隔たりが面白く、「ニッチな分野の専門家」が最も笑えた。
  - **Fricken**: 飛行機のシートを倒す仮装だけは説明不要だった。
- **Waterluvian**: 少ない要素で雰囲気を出す傑作だと評価。
  - **jen729w**: 新幹線の座席は標準で直立に近く、後ろの人に倒してよいか聞く習慣があると説明。
- **henearkr**: 俳句の実用的ユーモアへの転用のようなものだと表現。
- **jen729w**: 自分なら「Claude で ToDo アプリを作り、同じものを2万人が作っていたと気づいた人」を挙げる。
  - **corndoge**: そうしたメールは本人からではないと指摘。

## 8. [Giant canyon on Mars is still tectonically active](https://lamont.columbia.edu/news/giant-canyon-mars-still-tectonically-active-today)

**Score:** 52 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50360573)

火星の巨大峡谷（タイトルからはマリネリス峡谷とみられる）が現在もテクトニクス的に活動しているという、コロンビア大学ラモント・ドハティ地球観測所の発表。元ページは 403、Wayback のスナップショットも本文なし（ステータス 204）で取得できず、本文は確認できていない。

### Key Discussion Points

- **bajard**: 峡谷の壁の上に立っても、傾斜は10〜15%程度で峡谷だとは気づかない。
- **somat**: ヘラス平原は火山群のほぼ反対側にある巨大な窪地で、探査機のミッション候補としてもっと評価されてよい。深さ約7kmなので大気にも面白い影響がありそうだと推測。

## 9. [Jelly Sheet](https://mrdoob.github.io/codevember-2026/01/)

**Score:** 49 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50361268)

Three.js の作者 mrdoob による Codevember 2026 の初日の作品（テーマ「Fold」）。布のようなシートをドラッグして動かすインタラクティブな WebGL デモで、Space キーで一時停止できる。

### Key Discussion Points

- **OuterVale**: ドメインから分かるように作者は mrdoob で、3D JavaScript ライブラリ Three.js の作者として知られる。
- **TechPlasma**: Firefox Mobile では `this.gl is null` で起動しない。
- **dengsauve**: 画面から目が離せなかった。スマホのジャイロで動かせるとさらに面白い。

## 10. [Distinct cellular and genetic differences in colorectal cancer in young patients](https://www.dana-farber.org/newsroom/news-releases/2026/study-reveals-distinct-cellular-and-genetic-differences-in-colorectal-cancer-in-younger-patients)

**Score:** 41 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50361154)

Dana-Farber らの研究チームが189件の大腸がん腫瘍を解析し、若年患者の腫瘍では結合・支持細胞の割合が高いことを示した。これらの細胞は他の固形がんで化学療法抵抗性と関連する。特定の長鎖非コード RNA の活性が高く、細胞シグナルも強いが、これらが悪性度の原因だとは断定できないと研究者は注意している。

### Key Discussion Points

- **cobaltpath**: 若年の腫瘍で間質細胞の割合が高いのは、食事や腸内細菌叢の違いの結果ではないかと推測。早期発症例では腫瘍化の前から大腸に特有の炎症像が出る傾向もあるという。

## Trends

- **「ソフトウェアに閉じ込められたもの」を取り戻す**: 車載ナビの jailbreak、オープンソースのロボット、HackerTV など、個人の手で既存の制約を回避したり作り込んだりする記事が上位を占めた。
- **AI 需要が物理インフラに波及**: Fujifilm のテープ増産など、生成 AI によるデータ増大がストレージ需要を押し上げている。
- **標準化と信頼**: C++26 の否決は、技術的な成熟度だけでなく合意形成の信頼が争点になっていることを示す。
- **基礎を学ぶ長文資料**: PostgreSQL の内部解説書が高評価で、HOT や SSI など実務に直結する知識が共有された。
