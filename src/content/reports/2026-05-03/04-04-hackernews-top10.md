---
title: "Hacker News トップ10サマリー（2026年5月3日）"
date: "2026-05-03T04:04"
category: "summary"
summary: "VS CodeのCopilot無断共著問題が920点で首位、dav2d（AV2デコーダ）やDO_NOT_TRACK標準提案など技術トピックが集結"
tags: ["hackernews", "vscode", "copilot", "haskell", "ladybird", "privacy", "av2"]
---

## 1. [Open Source Does Not Imply Open Community](https://blog.feld.me/posts/2026/04/open-source-does-not-imply-open-community/)

**Score:** 43 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=47992772)

オープンソースにすることは、GitHubが普及させたような複雑なコミュニティインフラを必ず持つことを意味しない、という主張。現代のプラットフォームはメンテナに通知・Issue対応・コミュニティ管理といった無報酬の「第二の仕事」を強いており、かつてのFTPサーバとメーリングリストで成立していたシンプルなモデルへの回帰を提唱している。コードを公開することと、オープンなコミュニティを育てることは全く別の概念であると明確に区別している。

### Key Discussion Points

- **NordStreamYacht**: 行動規範（CoC）を推進する人々は問題を引き起こすためだけに存在すると批判
- **jauntywundrkind**: 孤立や孤高主義は自分には逆に面白くない。「オープンソースは社会的なもの」であり、分散・脱中心化こそが本質だと反論

---

## 2. [A Couple Million Lines of Haskell: Production Engineering at Mercury](https://blog.haskell.org/a-couple-million-lines-of-haskell/)

**Score:** 95 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=47991802)

フィンテック企業MercuryがHaskellで約200万行の本番コードベースを運用していることを紹介したエッセイ。型システムを「機関的記憶（institutional memory）」として活用し、重要な業務手順（例: DBトランザクションとイベント発行の原子性）を型レベルで強制することで、担当者が退職しても知識が失われない設計を実現。「純粋性（purity）は魔法ではなく境界メカニズム」と再定義し、可観測性（observability）も設計初期から組み込む姿勢を語っている。

### Key Discussion Points

- **bri3d**: 型システムで制約を表現するアプローチはRustやTypeScriptでも機能する。`User → LoggedInUser → AccessControlledLoggedInUser` のような段階的型絞り込みパターンは業界で著しく活用不足だと指摘
- **thot_experiment**: MercuryがHaskellで成功しているのは言語の力よりも「組織全体が上手く運営されているから」かもしれないと示唆
- **maz1b**: LLM時代の前にHaskellを選択したことは非常に先見の明があった。意図的なこの選択がMercuryの成長を後押しした
- **le-mark**: 200万行のHaskellが何をしているのか想像しにくい。JSONシリアライズ・REST APIフレームワーク・ロギングなどのライブラリが占めているのでは、と推測
- **amitbidlan**: 「最初から可観測性を設計に組み込む」原則を称賛。後付けではなく設計時から取り込むべきだと同意

---

## 3. [Clandestine network smuggling Starlink tech into Iran to beat internet blackout](https://www.bbc.com/news/articles/cvgzk91leweo)

**Score:** 60 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=47992338)

イランのインターネット遮断を回避するため、Starlink機器を秘密裏に国内に密輸するネットワークの存在を伝える報道（BBC）。政府によるネット検閲・遮断が進む中、衛星通信技術がアクセス手段として機能している実態を明らかにしている。

### Key Discussion Points

- **adiabatichottub**: BSidesセキュリティカンファレンスで聞いた話として、ウクライナ軍は地上信号探知を回避するためStarlink受信機を穴に埋めて使用していると紹介
- **mlmonkey**: Starlinkの端末代金を支援するGoFundMeを立ち上げてはどうかと提案
- **bhouston**: イランのネット遮断は市民への検閲ではなく、米国やイスラエルからのハッキング・追跡を防ぐための防衛的措置の可能性があると指摘。「イランのインフラは徹底的に侵害されていると証明されている」と主張

---

## 4. [This Month in Ladybird - April 2026](https://ladybird.org/newsletter/2026-04-30/)

**Score:** 197 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=47990318)

独立系オープンソースブラウザ「Ladybird」の2026年4月月次レポート。35人のコントリビューターから333件のPRをマージ。pdf.jsを使ったインラインPDFビューア、ブックマーク管理（`about:bookmarks`）、JavaScriptコンパイルのオフスレッド化（メインスレッド処理を約200ms削減）、DNS解決のノンブロッキング化、GTK4/libadwaita対応Linuxフロントエンドの追加などが主な成果。CSS Anchor Positioningや`Cache`/`CacheStorage` APIも新たにサポート。

### Key Discussion Points

- **satvikpendem**: DioxusによるRust製のJS不要ブラウザプロトタイプも進化しており、ChromiumやGeckoのコードを使わない独自実装として注目に値すると紹介
- **bityard**: ゲームエミュレータのアップデートログに似た満足感がある——バグ修正でゲームZが動くようになる感覚と同様。CSS Doomが修正されたのはゲームとの正当な交差点とも言えると笑い混じりにコメント
  - **adamrt**: 開発者のAndreasがよく言う「ブラウザ開発はエミュレータ開発に似ている。ウェブサイトはROMのようなもの」という比喩を紹介
- **NBPEL**: 新規ブラウザにとって最大の難関はサイト側のブラウザブロックとWidevine DRM取得の困難さ。1000万ユーザーを持つZen Browserでさえ取得できなかった事実を指摘
  - **JoRyGu**: 20年間Firefoxだけを使ってきたが、Chromiumでなければ動かないサイトには一度も遭遇したことがないと反論
  - **Onavo**: ブラウザ自体を制御できれば User-Agent文字列の変更は簡単。DRM以外は障害にならないと補足
- **sikozu**: 長年のFirefoxユーザーだが、Ladybirdが早期アルファ版のプリコンパイル済みビルドをリリースしたら真っ先に試すと表明
- **geophph**: Strava（フィットネスアプリ）が`Navigator.getBattery` APIを要求する理由に疑問を呈する
  - **yurishimo**: 低電力モードのサイト提供や位置情報の更新頻度調整のためでは、と推測
  - **NBPEL**: 端末フィンガープリント生成（トラッキング目的）が最も可能性が高いと指摘

---

## 5. [Six Years Perfecting Maps on WatchOS](https://www.david-smith.org/blog/2026/04/29/maps-on-watchos/)

**Score:** 208 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=47990606)

独立系デベロッパーのDavid Smithが、Apple Watch向けマッピング機能を完成させるまでの6年間の旅を語るブログ記事。2020年のサーバー生成マップから始まり、SwiftUIネイティブのカスタムレンダリングエンジンを自作。カートグラファーとデザイナーと協力し、Apple Watch新インターフェース「Liquid Glass」に最適化したカスタムマップタイルを制作。最終的にデザイナーのRafa Condeが提案した「地図をメインに、メトリクスを隅に重ねる」UIで納得のいくデザインに到達した。

### Key Discussion Points

- **bcraven**: 「Pedometer++ 8」という名前が「Dissertation_final_final_v8.docx」のような響きを持つと笑いを誘う
- **thrownawaysz**: Apple Watchには初期から登山・地形マップがなく、最高価格帯の「Watch Ultra」でさえGPXインポートすらできないのはAppleの失敗だと批判
  - **kumarvvr**: Appleは以前「OS機能でサードパーティアプリを潰す」と批判されていた。デバイスを作ることがAppleの役割であり、アプリは市場が作るべきものと反論
  - **jsbisviewtiful**: 複数のApple Watchを経験した後、GarminやCorosのような特化型デバイスに乗り換えた。「Apple Watchは何でもできようとして、何も際立ってできない」と評価
- **apt-apt-apt-apt**: 地図タイルにはカートグラファーに依頼したカスタム静的画像タイルを使用していると解説。Apple Mapsのような動的レンダリングより高品質な見た目だが、ズームレベルや更新性に制約がある
  - **n8cpdx**: カートグラファーへの依頼（デザイン）とタイル配信技術は完全に別の問題。Thunderforestはベクター・ラスター両方のタイルサービスを提供していると補足
  - **dzogchen**: Apple WatchではサードパーティにMetal Graphics APIが開放されておらず、そもそも技術的に不可能な可能性がある
- **kobieps**: 未知の山域では30分ごとに確認するだけなので、スマートフォンで十分。毎分確認が必要なユースケース向けでなければ腕時計への移行は難しいと正直に述べる

---

## 6. [Dav2d](https://code.videolan.org/videolan/dav2d)

**Score:** 373 | **Comments:** 115 | [Post](https://news.ycombinator.com/item?id=47988504)

VideoLANによる次世代動画コーデックAV2の高速デコーダ「dav2d」のGitLabリポジトリが注目を集めた。AV2はAOMedia（Alliance for Open Media）が策定するAV1後継規格で、AV1比30%以上のビットレート削減を実現。dav2dはその「全プラットフォームで最速のAV2デコーダ」を目指し、小型・可搬性・高速を設計目標に据えている。VideoLANはdav1d（AV1デコーダ）で同様のアプローチを成功させた実績を持つ。

### Key Discussion Points

- **jzebedee**: dav2dの概要をコメントで紹介。AV2はAOMediaによる次世代規格で「優れた圧縮効率と大幅に低いビットレートでの高品質配信」を実現するとAV2公式サイトから引用
  - **delfinom**: AV2はSisvelの特許問題でロイヤリティ紛争が予見されており「オワコン」の可能性があると皮肉
- **tensor**: 現代のウェブは「ボット確認 → 人間確認 → Cookie同意 → Cloudflare」の連打に成り果てたと嘆く（本筋と無関係だが大きな共感を集める）
  - **thresh** (VideoLANメンバー): AIボットによる絶え間ないDDoSを受けてAnubisによるボット対策を導入せざるを得なかったと説明。インフラの安定運用のために必要な措置だと釈明
  - **port11**: 「インターネットはコモンズの悲劇そのもの。悪意ある行動者が徐々に共有空間を使えなくする」と哲学的に論評
- **infogulch**: AV2の最終仕様は2025年末予定で30%低ビットレートを実現すると補足（HNの過去スレッドを引用）
- **Telaneo**: AV1を実用レベルで超えられるか楽しみだが、SVT-AV1のような優秀なエンコーダが登場するまでに時間がかかることを懸念
- **amitbidlan**: パフォーマンスクリティカルな箇所にアセンブリを使うパターンは「色あせない」。VideoLANはdav1dでも同手法を採用して成果を上げた実績がある

---

## 7. [Windows API Is Successful Cross-Platform API](https://retrocoding.net/windows-api-is-successful-cross-platform-api)

**Score:** 11 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47992859)

Windows APIが実は成功したクロスプラットフォームAPIであるという主張の記事。Microsoftの独自インターフェースとして設計されたにもかかわらず、Wine（Linux/macOS向けWindows互換レイヤー）やReact OS、組み込みWindowsの多様なバリアントなど、様々な環境での実装が存在している事実に注目している。投稿時点ではコメントなし。

### Key Discussion Points

（投稿時点でコメントなし）

---

## 8. [Neanderthals ran 'fat factories' 125,000 years ago (2025)](https://www.universiteitleiden.nl/en/news/2025/07/neanderthals-ran-fat-factories-125000-years-ago)

**Score:** 133 | **Comments:** 41 | [Post](https://news.ycombinator.com/item?id=47990284)

ライデン大学などの研究チームによる考古学的発見。ドイツのNeumark-Nord 2遺跡で、ネアンデルタール人が少なくとも172頭の大型哺乳類（シカ・馬・オーロックス）の骨を数万点砕いて骨髄脂を抽出していた痕跡を発見。組織的な食料資源管理と計画的なキャッシング（貯蔵）の証拠であり、複雑な食料加工技術が従来の推定より「数万年」早い時代に存在したことを示す。

### Key Discussion Points

- **irdc**: 最近発表されたネアンデルタール人の認知能力に関する研究（「脳の大きさが現代人に匹敵する」）と組み合わせると、知性の近さがよりリアルに感じられると紹介
- **amitbidlan**: 「計画立案、一括処理、後で使うための保管——これは原始的な生存行動ではなくロジスティクスだ。調べるほど彼らと我々の差が縮まっていく」と感想
- **sandworm101**: なぜ食料目的と断定できるのかを問う。骨を煮る行為は接着剤（glue）の製造にも使われており、武器製造などの工業的用途の可能性も排除できないと指摘
- **dr_dshiv**: マンモス1頭が「成人の2000食分」に相当するという事実をTILとして紹介。大規模な宴会文化が性的選択に寄与したという「BBQ理論」をユーモラスに提唱
- **russellbeattie**: 「Neanderthal」という語がNeander谷→Joachim Neander牧師→ラテン語化で「新しい人（Neumann）」を意味→von Neumann計算機アーキテクチャへと繋がる偶然の符合を紹介。また「dollar」がJoachimsthal（Joachimの谷）の銀貨Joachimstalerに由来するという語源も添える

---

## 9. [Do_not_track](https://donottrack.sh/)

**Score:** 232 | **Comments:** 76 | [Post](https://news.ycombinator.com/item?id=47988592)

CLIツール・SDK・フレームワーク全般でテレメトリをオプトアウトするための統一環境変数「`DO_NOT_TRACK=1`」の標準化を提唱するプロジェクト。現状では`.NET`の`DOTNET_CLI_TELEMETRY_OPTOUT=1`やAzure CLIの`AZURE_CORE_COLLECT_TELEMETRY=0`など各ツールがバラバラな方法を持つため、ユーザーの混乱を招いている。`NO_COLOR`・`FORCE_COLOR`と同様のエコシステム横断的プライバシー標準として機能させることを目指す。

### Key Discussion Points

- **charles_f**: 今日のユーザーはデフォルトでトラッキングされることに慣れすぎており、`DO_NOT_TRACK`という名前自体が「デフォルトは`CONSENT_TO_TRACK=1`である」という現実を示唆しており不気味だと指摘
  - **thephyber**: `DO_NOT_TRACK`は理想ではなく現実世界の状態への対応策。インターネットは広告ベースのビジネスモデルで成長してきた——「おとぎ話のシナリオではなく事実への応答だ」と返す
- **PufPufPuf**: ブラウザのDNT（Do Not Track）ヘッダーと同じ運命を辿るリスクがある。ただし複数のオプトアウト環境変数を単一ファイルに集約するアイデアは有用と認める
  - **whitlock**: 同様の問題を解決する`toptout.me`がすでに存在すると紹介
  - **LocalH**: 広告業界がDNTを無視した理由は「Microsoftがデフォルト有効にしたことでユーザーの主体性が奪われた」という建前だったが、結局どんな実装でも無視したはずだと皮肉
- **spudlyo**: PythonのTransformersライブラリ（HuggingFace）がテレメトリを止めにくかった経験談。`HF_HUB_DISABLE_TELEMETRY=1`や`local_files_only=True`では不十分で、`HF_HUB_OFFLINE=1`を設定して初めて安心できたと報告
  - **woodson**: HuggingFaceはオフライン動作を難しくすることで悪名高く、対応する環境変数も頻繁に変更されてきたと同意
- **ximm**: `DO_NOT_TRACK`対応を宣伝するツールこそ避けるべき——そもそもデフォルトでテレメトリを収集していることを暗示しており、「有用なハニーポット」だと警戒する
  - **GuB-42**: DO_NOT_TRACKのサポートはクラッシュレポーターを無効化するなどの使い方をイメージ。広告など財政的利益のある事業者は採用しないだろうと現実的に予測
- **drnick1**: 独自DNSを運用してHagezi等のテレメトリドメインブラックリストを活用する方が根本的な解決策だと提案
  - **tosti**: そもそもスパイウェアをインストールしないことが最善だと一言で斬る

---

## 10. [VS Code inserting 'Co-Authored-by Copilot' into commits regardless of usage](https://github.com/microsoft/vscode/pull/310226)

**Score:** 920 | **Comments:** 455 | [Post](https://news.ycombinator.com/item?id=47989883)

VS CodeのPR #310226「Enabling ai co author by default」が明るみに出て大炎上。Copilotを使用していない・無効化していても全コミットに`Co-Authored-by: Copilot <copilot@github.com>`が自動挿入される変更がデフォルト有効で導入されたことが判明。`chat.disableAIFeatures`が有効でも動作し、AI未使用のコードにも付与されるというバグも複数報告。最終的にVS Codeチームのdmitrivが「悪意はなかったが十分な事前検証なしにデフォルト有効にしたのは誤りだった」と謝罪し、v1.119でデフォルトをオフに戻すと表明した。

### Key Discussion Points

- **rsynnott**: 「AI現象はあらゆる標準に対して信じられないほど敵対的だ。正しく動作するか、倫理的か、真実かなど関係なく、ただ『我々のAIを使え』しかない。MicrosoftはVSCodeで数十年かけて築いた信頼を一瞬で燃やした」と総括
  - **storus**: 技術に疎いマネジメント層がエンジニアによる反対意見なしに自分たちのアイデアを実行できるようになった結果だと皮肉
  - **ExoticPearTree**: Microsoftは新しい世代が過去の所業を知らないと踏んで行動したか、あるいは金銭的インセンティブが倫理を圧倒したのではないかと推測
- **yankohr**: 「『iPhoneから送信』に似ているが、はるかに侵襲的だ。Gitコミットは法的・技術的な記録であり、AIの利用統計を膨らませるためにコード著作者を偽るのは信頼の重大な侵害だ」と断言
  - **tln**: 「iPhoneから送信」はUI上で確認・削除できるが、Co-authored-byはUIに表示されずユーザーが気づかないまま挿入されるという重要な違いを指摘
  - **Esophagus4**: SpotifyがFacebookへの聴取履歴自動共有を実装した事例と同種の問題だと類比
- **dmitriv** (VS Codeチームメンバー): 「このPRを承認した本人として、十分な事前検証なしにデフォルト有効にしたことを謝罪する。悪意はなく、AI生成コードへの帰属を期待する顧客のニーズに応えたかっただけだ。`disableAIFeatures`が有効な場合には動作すべきでなく、AI未使用の変更には帰属を付けるべきでない。v1.119でデフォルトをオフに戻す」と謝罪と修正計画を表明
  - **nsagent**: 「多くの類似ツールも同様のことをしている」という弁明は不適切——今回の問題は「Copilotを使っていない・無効化していてもCo-authorが挿入される」という固有のバグであり、他ツールはこの動作をしていないはずだと指摘
  - **alemanek**: 「全ユーザーのデフォルト動作を通知なしに変更するのは許しがたい。コミットメッセージでは速く動いて壊していい場所ではない」と強調
- **ddkto**: 皮肉にもCopilot自体がPRレビューで「設定スキーマのデフォルトを`all`に変更したが、`repository.ts`のランタイムフォールバックは`'off'`のままでコードが矛盾している。デフォルト変更を一貫させるか、コントリビュートされたデフォルトを使うべき」と修正を提案していたが、無視されていたと暴露
  - **HeavyStorm**: 「そこではもうCopilotによるコードレビューは標準的な慣行になっている」と淡々と返す
  - **stefan_**: ボットがスクリーンショット差分として大量の偽陽性を投稿しながら、肝心のデフォルト変更を検出しなかったことも問題だと指摘
- **artyom**: 「VSCodeブームで『開発者に優しいMicrosoft』を信じた人たちへ——これが彼らが90年代初頭からずっとやってきたことだ。また騙されたなら自業自得」と手厳しく断じる
  - **movedx**: 新しい世代は現在の状態を当たり前として育っており、「トリック」を作り出したのは我々の世代の責任でもあると反省を促す
  - **joohwan**: 自己責任論は不当であり、技術が広く普及して回避にコストがかかる以上、責任はMicrosoft側にあると反論

---

## Trends

今日のHNトップ10から浮かび上がる共通テーマと傾向：

1. **AIへの不信感と反発**: VS CodeのCopilot強制帰属問題（920点）が圧倒的な注目を集め、Microsoftへの批判と代替IDE（Zed・Neovim・Emacs）への移行意欲が噴出。AIの押しつけに対するユーザーの疲弊と反発が鮮明になった。

2. **プライバシーと追跡への関心**: `DO_NOT_TRACK`標準（232点）も高得点を記録。HuggingFaceやStrava等のテレメトリ問題と相まって、デフォルトでのデータ収集慣行への不満が根強い。

3. **次世代技術の萌芽**: AV2コーデックとそのデコーダdav2d（373点）、Ladybirdブラウザの着実な進化（197点）など、既存独占への挑戦者が注目を集めた。

4. **個人開発者の長期奮闘**: Apple Watch向けマップ6年開発（208点）は、大企業が手をつけないニッチへの職人的アプローチと、Apple エコシステムの制約（Metal API非公開等）を浮き彫りにした。

5. **関数型プログラミングの実用性**: MercuryのHaskell 200万行規模の本番運用事例（95点）は、ニッチと見られがちなFP言語の現実的な産業価値を示すものとして議論を呼んだ。

6. **ガバナンスとコミュニティの哲学的問い**: オープンソース≠オープンコミュニティという議論（43点）は、GitHubが作り出した「当然あるべき」コミュニティ構造への根本的な問い直しを提示した。
