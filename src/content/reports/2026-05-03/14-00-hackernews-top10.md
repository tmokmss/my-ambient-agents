---
title: "Hacker News トップ10 サマリー（2026年5月3日）"
date: "2026-05-03T14:00"
category: "summary"
summary: "dav2dリリース、HaskellによるFintech開発、Ladybirdブラウザ進捗など注目トピック10選"
tags: ["hackernews", "daily", "tech"]
---

## 1. [Show HN: Apple's Sharp Running in the Browser via ONNX Runtime Web](https://github.com/bring-shrubbery/ml-sharp-web)

**Score:** 68 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=47995037)

AppleのSHARP（単一画像からの3Dガウシアンスプラッティングモデル）をブラウザ上で動作させる実験的プロジェクト。ONNX Runtime WebのWebGPUバックエンドを利用してサーバーレスで推論を実行し、画像をアップロードするだけで3D PLYファイルとしてダウンロードできる。モデルの初回ロードに約2.4GBのダウンロードが必要なため起動は遅いが、その後の推論は数秒程度で完了する。

### Key Discussion Points

- **andybak**: VRヘッドセット向けに任意の写真フォルダを立体視できるアプリを試作した経験を共有。「変容的でうっとりするような」体験だったと評価
- **bring-shrubbery（作者）**: SHARPの研究論文を参照しながら実装背景を説明。Appleのモデルライセンスは研究利用のみだが、自前でONNXエクスポートすることも可能
- **amelius**: 単一画像では存在しない部分を「捏造」してしまう問題を指摘。2枚以上の写真があれば解決するとコメント
- **kodablah**: ブラウザ内AIはプライバシー面で優れるが、ONNX WebのWebGPU対応はまだ課題が多いと指摘
- **herpdyderp**: モデルのロードでブラウザタブがクラッシュしたと報告

---

## 2. [A couple million lines of Haskell: Production engineering at Mercury](https://blog.haskell.org/a-couple-million-lines-of-haskell/)

**Score:** 305 | **Comments:** 138 | [Post](https://news.ycombinator.com/item?id=47991802)

FintechスタートアップのMercuryが30万以上の企業に金融サービスを提供するシステムをHaskellで構築・運用している事例紹介。年間2480億ドルの取引を処理する約200万行のHaskellコードをどう管理するかについて、型駆動設計・Temporalワークフロー・「純粋さの境界」などの実践知見を詳述。理想主義よりも実用主義を重視する組織文化が成功の鍵だとしている。

### Key Discussion Points

- **bri3d**: 型を使った「誤った使い方を型エラーにする」パターンはRustやTypeScriptでも有効で、`User → LoggedInUser → AccessControlledLoggedInUser` のような段階的型付けで認可バグを防げると共感
  - **miki123211**: 動的型付け言語でも `Escaped` クラスを使えば同様のパターンが実現可能。Application Hungarianも参照先として紹介
  - **germandiago**: C++のテンプレートでも制限型を型システムに埋め込める。変異型（variant）を使った状態機械も実用的と補足
- **xedrac**: Haskellで3年働いたが、Rustの方が2倍以上生産的と報告。コードが「ほぼ書き捨て専用」になりがちな点や、NixとのツールチェーンのCabalファイルが難点と指摘
  - **Darmani**: 逆の体験を共有。TypeScript→Rustに移行して生産性が激減。高階関数の記述やリファクタリング時の型エラー解消が困難で「アプリケーションコードをRustで書くべきではない」と結論
  - **django77**: 生産性2倍は全領域で均一か、特定の作業に限定されるのか疑問を提示
- **jappgar**: 200万行は偉業だが、型にビジネスロジックをすべてエンコードすることで「型に縛られる」リスクがあると警告。型安全性が別種のリスクを見えなくする側面も
  - **tylerchilds**: TypeScriptでもチューリング完全な型システムで「コンパイルして消える」アプリを作れるという皮肉なリンクを紹介
- **neilv**: SchemeとRacketで同様の大規模システムを小チーム（2〜3人）で管理した経験を共有。LLMを活用した少人数精鋭チームモデルへの移行を示唆
- **zerr**: 大手投資銀行の実際のHaskellコードを見た際、「1文字変数名と短い謎の関数名の多さ」が印象的だったと報告

---

## 3. [Group averages obscure how an individual's brain controls behavior: study](https://med.stanford.edu/news/all-news/2026/04/brain-scans-individual-versus-group.html)

**Score:** 44 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=47969142)

スタンフォード大学の研究チームが9〜10歳の子ども4000人の認知制御タスク中の脳活動を分析したところ、集団平均で見られるパターンが個人レベルでは逆転するケースが確認された。反応時間が遅い場合、グループ分析ではデフォルトモードネットワークの活動増加と相関するが、個人レベルでは同ネットワークの活動が減少するという真逆の結果が出た。「平均的な脳などというものは存在しない」という結論は、ADHDなどの個別化神経科学への応用が期待される。

### Key Discussion Points

- **giantg2**: 大集団からサブグループを発見すること自体は驚きでなく、研究設計の問題として批判。ADHDなど特定の注意特性を持つ子どもを最初から選定すべきだったと指摘
- **amarshall**: シンプソンのパラドックスとして説明可能と指摘
- **hliyan**: 集団レベルと個人レベルで正反対のパターンが現れるという反直感的な結果に困惑を表明
- **king_geedorah**: パイロットの平均体型でコックピットを設計したら誰にも合わなかった米軍の逸話と関連付けてコメント

---

## 4. [Embedded Rust or C Firmware? Lessons from an Industrial Microcontroller Use Case](https://arxiv.org/abs/2604.25679)

**Score:** 11 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47974307)

STMicro・ポリテクニーク・トリノ・自由大学ベルリン・Inriaの研究者らが、IoTセンサープラットフォームのファームウェアをRustとCで並行開発した実証比較論文。メモリフットプリントや実行速度においてCよりRustを優先すべき強い理由は見当たらなかった。RustベースのAriel OSは従来のベアメタルCスタックより小さなフットプリントを実現しており、「Rustは今日この領域のファームウェア開発において十分な選択肢」と結論。

### Key Discussion Points

- **dgacmu**: 論文のアブストラクトを引用し、複数の著名機関が関わる研究であることを紹介。Ariel OSの効率性の高さを補足説明

---

## 5. [This Month in Ladybird – April 2026](https://ladybird.org/newsletter/2026-04-30/)

**Score:** 398 | **Comments:** 96 | [Post](https://news.ycombinator.com/item?id=47990318)

独立系ブラウザ「Ladybird」の2026年4月進捗報告。35名のコントリビューターによる333件のPRがマージされ、JavaScriptエンジンの最適化によりSpeedometerスコアが67.7→73.6に向上。GTK4/libadwaita製Linuxフロントエンドの追加、アドレスバーの自動補完、pdf.jsによるPDFインライン表示なども実装。Reddit画像ギャラリーやYouTubeの動作改善も報告されている。

### Key Discussion Points

- **tomaskafka**: 試してみたいが、開発環境構築とソースビルドは避けたい。公式バイナリを求める声
  - **ramon156**: 6月にアルファビルドが計画されているとの情報を共有
- **bityard**: ゲームエミュレータの更新ログに似た書き方が好印象。CSS Doomも修正対象に入っておりゲームとの接点を指摘
  - **adamrt**: 開発者Andreasはブラウザ開発をエミュレータに例え、ウェブサイトをROMに喩えると共有
- **NBPEL**: Chromiumのみ許可するサイトによる人工的な互換性障壁とWidevineDRM取得困難さが最大の課題だと指摘。10Mユーザーを持つZen Browserでさえ失敗した事例を紹介
  - **pjmlp**: IEの教訓を学ばなかった新世代がChrome OSプラットフォームへの準拠を求めるのは皮肉だとコメント
  - **JoRyGu**: Firefoxを20年間使ってきたがChromium必須サイトに遭遇したことは一度もないと反論
  - **TheCoreh**: User-Agentスプーフィングで大部分は解決可能。Widevineは4K Netflix等に限定的で、10MユーザーのZenを見ればわかるように致命的ではないと反論
- **satvikpendem**: RustベースのDioxus製ブラウザ「Blitz」も代替として紹介。styloとtaffyを活用しChromium/Gecko/WebKitに依存しない実装
- **sikozu**: Firefox長年ユーザーとして、Ladybirdが早期アルファ・プリコンパイルバイナリ提供の段階になれば早急に乗り換えると表明

---

## 6. [Utilyze measures how efficiently your GPU is doing useful work](https://github.com/systalyze/utilyze)

**Score:** 19 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47966668)

nvidia-smiやnvtopが「GPU使用率100%」と報告しても実際のハードウェア性能の一部しか使っていないケースを「Streaming Operational Level (SOL)」指標で可視化するツール。NVIDIA Ampere以降（A100、H100、RTX 3000番台）のLinux環境に対応し、vLLMとの統合でAIワークロードの実効性能上限も計算できる。Go+C++実装でApache 2.0ライセンス。

### Key Discussion Points

- **grunder_advice**: 職場では瞬間消費電力をコンピューティング負荷の指標として使っている。「消費が多いほど演算量も多い」という実用的なマクロ指標を紹介
- **Waterluvian**: PixiJS（WebGL）プロジェクトでChromeプロファイラがほぼ100%を報告するのに対してnvtopでは35%を示すという乖離に悩んでいたためこのツールに注目

---

## 7. [Dav2d](https://code.videolan.org/videolan/dav2d)

**Score:** 526 | **Comments:** 149 | [Post](https://news.ycombinator.com/item?id=47988504)

VideoLANがAV2コーデック（AOMediaの次世代仕様）向けに開発した高速デコーダ「dav2d」が公開された。AV1の後継であるAV2はAV1比30%以上のビットレート削減を実現する予定で、dav2dは「全プラットフォームで最速のAV2デコーダ」を目標に軽量・移植性・高速性を掲げる。AV1時代にdav1dが手書きアセンブリで普及を加速させた前例があり、今回はAV2規格策定の初期段階から開発が始まった点が注目される。

### Key Discussion Points

- **jzebedee**: プロジェクト説明文とAV2公式サイトから仕様の概要を引用して説明。「全プラットフォームで最速のAV2デコーダ」という目標を紹介
  - **wolfi1**: ffmpeg向けAV2エンコーダはもう存在するか問い合わせ
  - **dirasieb**: 「AV1をエンコードできるdGPUすら持っていないのにもうAV2が来るのか」と驚きを表明
- **tensor**: HNスレッドとは無関係に、「ボット確認→Cookie同意→Cloudflare」の多重障壁があるサイトへの不満を表明
  - **thresh**: VideoLAN自身がAIボットによる絶え間ないDDoSから守るためAnubisを導入せざるを得なかったことを説明
  - **notenlish**: 「AIスクレイパーがウェブを台無しにした」とAIクローラー問題に共感
- **ZeroGravitas**: dav1dが手書きアセンブリでAV1の普及を加速させた経緯を解説。dav2dはAV2規格の初期から存在するため更に大きな普及効果が期待されると予測
- **infogulch**: AV2はAV1比30%低ビットレートを達成する仕様で、2025年末に最終仕様が公表予定だったことを補足
- **tgsovlerkhgsel**: H.266が普及しそうにない現状から、AV2がH.26x系とAVx系の乱立を解消して「唯一の新標準」になれるか期待

---

## 8. [Six Years Perfecting Maps on WatchOS](https://www.david-smith.org/blog/2026/04/29/maps-on-watchos/)

**Score:** 362 | **Comments:** 85 | [Post](https://news.ycombinator.com/item?id=47990606)

独立系iOS開発者のDavid Smithが、Apple Watch向けアプリ「Pedometer++」にマップ機能を実装するまでの6年間の試行錯誤を紹介。watchOSにはまともなMapKitがなかったため独自SwiftUIレンダリングエンジンをゼロから構築。watchOS 26のLiquid Glass導入を機に、Thunderforest社のAndy Allenに依頼したカスタムカートグラフィと、デザイナーRafa Condeとのコラボで最終的な洗練されたデザインを実現した。

### Key Discussion Points

- **thrownawaysz**: 最も高価なApple Watch Ultraでさえ公式のハイキング・地形図アプリが存在しないことは「失敗」だと指摘。GPXインポートも未対応と批判
  - **kumarvvr**: Appleが既存アプリの機能を取り込むことを批判されてきた歴史を持ち出し、サードパーティに任せることは適切だと反論
  - **jsbisviewtiful**: Apple Watch 10を売却しCoros（後にGarmin検討）に移行済み。「アクティビティ向けに作られた」デバイスと「Uberアプリも入っているデバイス」の違いを強調
- **ndr42**: App Storeページで価格体系が不明確（1〜45ユーロの複数表示）だと困惑を表明
  - **tomaskafka**: Appleの仕様でテスト用に設定した価格帯がすべて表示される問題で、削除するとユーザーの自動更新がキャンセルされる仕組みのため撤去できないと説明
  - **raylad**: 歩数計機能は無料、マップ追跡機能は年29.95ドルと明確化
- **apt-apt-apt-apt**: 独自カートグラファー採用の理由として、ラスタータイルで詳細なハイキングルートを表現しており動的レンダリングではないことを解説
  - **n8cpdx**: デザイン生成と配信技術は別問題。ベクタータイル＋スタイル定義の活用も選択肢だったと補足
  - **dzogchen**: watchOSでサードパーティがMetalグラフィックスAPIを使えないという制約があるため独自エンジンになったと推測
- **som**: デザイン進化の物語を称えた後、スクリーンショットに映るGlen Coeの山荘がJimmy Savilleのものだったという暗い脱線談を披露

---

## 9. [Windows quality update: Progress we've made since March](https://blogs.windows.com/windows-insider/2026/05/01/windows-quality-update-progress-weve-made-since-march/)

**Score:** 88 | **Comments:** 224 | [Post](https://news.ycombinator.com/item?id=47980279)

Microsoftが2026年3月以降に実施したWindows改善を紹介する公式ブログ。更新の統合（OS・.NET・ドライバを月1回の再起動に集約）、電源メニューからの「更新をインストールしないと再起動できない」問題の解消、SnippingToolとPhotosからCopilotボタン削除など、ユーザーの不満に対応した変更が報告されている。

### Key Discussion Points

- **sagacity**: Microsoftアカウント連携のログインがオフライン時に失敗してマシンからロックアウトされた実体験を告白。「CopilotのAI機能より、こういう基本的な問題を直してほしい」と訴え
- **PeterStuer**: 「ユーザーが本当に欲しいのは最小限のOSで自分が選んだソフトだけを動かすこと」「Microsoftが欲しいのはサービス収益の最大化」という根本的なインセンティブのミスアラインが問題の本質と分析
- **windex**: 製品チームで誰も反対しない中、マーケティングが顧客データ収集フックを追加し続けた結果がWindows 11と批判
- **kasabali**: 電源メニュー修正を「Windows XP 22年前に戻っただけ」と皮肉
- **advael**: Windowsインサイダーテストに参加したいユーザーが本当に存在するのかを疑問視。「Linuxは面倒」という認識は今日では実態に合わないと指摘

---

## 10. [Do_not_track](https://donottrack.sh/)

**Score:** 401 | **Comments:** 125 | [Post](https://news.ycombinator.com/item?id=47988592)

CLIツール・SDK・フレームワークのテレメトリを一括オプトアウトするための統一環境変数 `DO_NOT_TRACK=1` を標準化しようという取り組み。現在は各ツールが独自の無効化方法（`DOTNET_CLI_TELEMETRY_OPTOUT`、`SAM_CLI_TELEMETRY=0` 等）を持ち断片化している問題を解決する。NO_COLORと同様の慣習として普及を目指す。

### Key Discussion Points

- **Grom_PE**: .NETがテレメトリを送信していると知ってから`firejail --net=none`でCLIツールをネットワーク遮断して実行するようになった。「ユーザー敵対的なデフォルト」への不信感を表明
- **charles_f**: デフォルトでトラッキングされることに慣れすぎている現状を問題視。「DO_NOT_TRACKというフラグ名は、デフォルトがCONSENT_TO_TRACK=1であることを示唆しており不気味」
  - **d2p**: このフラグが、本来オプトイン必須のソフトウェアで同意通知を省略する口実に使われる可能性を指摘
  - **croes**: 「デフォルトでオン＝オプトイン」ではなく「オプトアウト」だと用語を訂正
  - **shevy-java**: ENV変数でトラッキング拒否を宣言すること自体が情報漏洩であり矛盾していると批判
- **OptionX**: テレメトリから利益を得る組織にはオプトアウトを容易にする動機がない。なぜそもそもオプトアウト制になっているかの根本原因を指摘
- **_flux**: `DO_NOT_TRACK`のような否定形より`ALLOW_TRACKING=0`のような肯定形のほうが二重否定を避けられて論理的と提案
- **endgame**: そもそもオプトアウト方式は間違い、かつ条件を否定形で書くのは悪い慣行と一刀両断

---

## Trends

今日のHacker Newsトップ10から見えるトレンド：

1. **ブラウザ独立への関心**: LadybirdやBlitzのようなChromium非依存のブラウザプロジェクトへの注目が高まっている。Chromiumの独占に対する危機感とWebの多様性維持への関心が背景にある。

2. **型システムの実用的価値**: HaskellやRustの議論を通じ、型によるビジネスロジックのエンコードがどこまで有効かという議論が活発。過度な型設計が硬直性を生むという批判も並立している。

3. **コーデック次世代化（AV2/dav2d）**: AV2デコーダのリリースはビデオストリーミング業界に向けた重要な一歩。ソフトウェアデコーダの早期登場がハードウェア採用を促進するという「逆鶏と卵」効果への期待が高い。

4. **プライバシーとデフォルト設定**: `DO_NOT_TRACK`標準化の議論は、デフォルトでトラッキングが有効になっているソフトウェアエコシステムへの根本的な不信感を反映している。

5. **Big Tech OSへの不満**: Windows質改善アップデートへの反応は全体的に厳しく、「基本的な信頼性」と「サービス収益化」の優先順位を巡るMicrosoftへの不満が続いている。

6. **ブラウザ内AI推論の台頭**: SHARPのブラウザ実装はONNX Runtime WebとWebGPUの成熟を示す一例であり、クライアントサイドAIのプライバシー上の優位性への関心が高まっている。
