---
title: "Hacker News トップ10まとめ（2026年9月25日）"
date: "2026-09-25T17:04"
category: "summary"
summary: "F-Droid 2.0やオランダ政府のNixOS採用、Go言語のSIMD対応などHNトップ10を要約"
tags: ["hackernews", "programming", "opensource"]
---

Hacker News のトップストーリーから、除外条件を適用した上で選定した10件をスコア降順で紹介します。

## 1. [F-Droid 2.0 – A new chapter for Android freedom](https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html)

**Score:** 1390 | **Comments:** 397 | [Post](https://news.ycombinator.com/item?id=49831968)

10年ぶりの大規模アップデートとなる「F-Droid 2.0」の正式リリースが発表された。Kotlin ComposeによるMaterial Design対応のUI刷新、ナビゲーションの「Discover / Search / My Apps」への簡素化、ゲームを17ジャンルに分類するなど発見性の向上、検索履歴保存、Torサポートの簡素化やパニック機能など、プライバシー・セキュリティ機能も強化された。NLnetやOpen Technology Fund、Calyx Instituteなど複数機関の支援を受けて実現している。

### Key Discussion Points

- **Accacin**: 新デザインにも旧デザインにも文句が出るが、アプリが探せて使えれば十分。開発者の努力に感謝したい。
  - **whatsThisBtn4**: 変化への否定的反応は理解できるが、F-DroidはGOAT（最高）。広告まみれのPlayストアより信頼できる。
  - **Pfeil**: 探索機能など気に入った点もある一方、15年前からある問題への批判が今更多いことに驚く。まだ「推奨」表示ではなく手動更新が必要。
- **comex**: スクリーンショット内の「Syncthing-For k」というテキストの改行がそのままなのが気になる。
  - **katzenq**: そのアプリ自体のUIも酷い（不自然なグラデーションボタンなど）。Android開発者は無頓着すぎる。
  - **birksherty**: HN民の重箱の隅つつきはひどい、次元が違う。
  - **Flere-Imsaho**: それでもGoogle Playストアの過剰な色彩・アニメーションよりはマシ。
- **silverbluep**: GrapheneOS上でdroid-ifyを長年使っており、F-DroidのUIは酷く特権拡張の設定も面倒だった。今回の刷新とFPE廃止は歓迎。
  - **eighthave**: クライアントの多様性は良いが、サードパーティクライアントがindex-v1（SHA1署名）のままなどセキュリティ・プライバシー基準を満たしているか確認すべき。
  - **PorciiVorbesc**: droid-ifyをもっと早く知りたかった、F-Droidよりずっと快適。
  - **epihelix**: 新UIのMaterial Designが合わず旧バージョンに戻した。アップデート選択の操作性も悪化している。
- **neves**: F-Droidで広告のない良いアプリを多数発見した（天気アプリBreeze、動画保存のSealなど）。他のおすすめを聞きたい。
- **idle_zealot**: セクション間の視覚的区切りがなく、タップ可能要素やスクロール範囲が分かりにくいデザイントレンドが残念。
  - **doginasuit**: スクリーンショットを見る限り分かりにくくはない。線を引かずに余白で区切る方が明確な場合もある。
  - **janilowski**: 視覚的階層は十分に明確。区切り線は多くの場合不要。
  - **fugaziboutit**: ユーザー行動のヒートマップでは、見た目のインタラクティブ性の有無に関わらずタップされる傾向がある。

## 2. [Dutch governments builds alternative for Microsoft based on NixOS](https://www.dawo.community/en/)

**Score:** 804 | **Comments:** 457 | [Post](https://news.ycombinator.com/item?id=49841563)

DAWO（Digital Autonomous Workplace for the Dutch government）は、政府・産業・社会が協力してオランダ政府向けのデジタル自律型職場を構築するオープンコミュニティ。構成要素の一つとしてNixOSベースの再現可能なインストール基盤「DAWO-NixOS」を含み、デジタル自律性の強化、セキュリティとデータ保護、政府ITシステムの検証容易性向上などを目標に掲げている。単一製品ではなく相互運用可能な構成ブロックの集合という設計思想。

### Key Discussion Points

- **askonomm**: 米国の巨大テック企業からの脱却は歓迎すべき動き。Microsoftがカメラ・マイクで監視して広告視聴に応じ利用クレジットを付与する特許を出したことなど、企業の消費者への姿勢は異常。
  - **maxbaines**: その特許はカメラやマイクの監視を含んでいない（特許文書へのリンクを提示）。
  - **wartywhoa23**: そうした企業姿勢を許す権力構造・金銭ヒエラルギーの存在、そしてそれに疑問を持たず加担する従業員の多さも異様だ。
  - **Thanemate**: 選択肢は他者に握られており、それを「普通」として受け入れているだけ。Windows 11搭載PCやTeamsの押し付けなどが典型例。
- **hashar**: フランス政府も数ヶ月前にNixOSベースのシステム（Securix、Bureautix）を発表している。
  - **Lucasoato**: フランスの取り組み（憲兵隊のオープンソースOSへの移行など）には感心するが、英語を極端に避ける姿勢が障壁になりがち。
  - **yubblegum**: オランダはGitHubからも離脱しており、先を見据えている（code.overheid.nlへのリンク）。
  - **ctolsen**: アステリックス風の命名規則が気に入っている。
- **solarkraft**: NixOSはサーバーソフトのような「アプライアンス」的に再現可能に動かしたいシステムに最適。ドイツ政府のopenDeskやフランス政府のLa Suiteなど類似の取り組みもある。
  - **tombert**: 独自「ディストロ」を作るのにも最適。configuration.nixが事実上のプレビルド構成で、ISOやQEMUイメージ生成ツールも備える。
  - **nba456_**: 意思決定者がそこまで賢いとは限らない、と懐疑的な見方。
  - **mastermage**: MicrosoftワールドとEUを切り離した独自エコシステムを育てる好機になり得る。
- **asdfman123**: 「デジタル自律性」という言葉を引用し、米国が権威主義化したことで自由・開放性という評判という最大の強みをただで手放していると皮肉る。
- **jordanbeiber**: 数年間NixOSを使い続けているが、恩恵も苦労も大きかった。LLMの登場で参入障壁がほぼ消え、サーバーやワークステーションの構築が急速に理解しやすくなった。
  - **not-kinsale-joe**: 具体的にどんな苦労があったのか聞きたい、導入を検討している。

## 3. [Platform-Independent SIMD in Go](https://go.dev/blog/simd-experiment)

**Score:** 205 | **Comments:** 82 | [Post](https://news.ycombinator.com/item?id=49843269)

Go 1.26〜1.27で、これまでアセンブリでしかアクセスできなかったSIMD（単一命令複数データ）操作の実験的APIが導入された。新しい`simd`パッケージは固定サイズのベクトル型を型システムから排除し、全プラットフォーム共通の操作のみをサポート、対応しない箇所は他のSIMD命令によるエミュレーションで埋める設計。amd64のAVX/AVX2/AVX512、arm64のNEON、WebAssemblyに対応し、Go 1.28ではSVEサポートや`OnesCount`などの追加が予定されている。

### Key Discussion Points

- **ghusbands**: 「共通部分（intersection）」という表現について、全プラットフォームがサポートする操作の共通部分であれば本来ギャップは生じないはずだと技術的に指摘。
- **mshockwave**: 最近見た複数の移植可能SIMDソリューション（Fearless SIMDなど）の中で、SVEやRISC-Vベクトル（RVV）のような非固定長ベクトルを扱いやすくした初めての設計だと評価。
- **ImJasonH**: ブラウザ上のWasmで画像の色を置換するベンチマークツールを公開。移植可能SIMDは非移植SIMDより約11%遅いが、どちらもSIMDなしより約5倍高速だったと報告。
- **u8**: 誰も求めていなかったことにも時間をかけてきちんとやり遂げる姿勢がGoの好きなところ。メモリ安全な高水準システム言語としての地位を進めている。
  - **physicsguy**: 実際には求める声があった、と反論。
  - **__s**: Goのデータ競合はメモリ安全ではない、という技術的補足。
- **beached_whale**: C++も最新版で`std::simd`を得るところで、可能な限り組み込み関数(intrinsic)を使わないベクトル化コードを書きたい。最適でなくともスカラー演算よりはるかに良い。
  - **reactordev**: 同意。既存の特定プラットフォーム向けコードベースにはあまり役立たないが、今後の開発には十分価値がある。

## 4. [Pentium II at 600Mhz with Voodoo 3 Emulated on 86Box with M6 Mac Mini](https://nyaa.sh/reviews/mac-mini-m6-emulation)

**Score:** 191 | **Comments:** 86 | [Post](https://news.ycombinator.com/item?id=49841285)

Mac Mini M6（12コアCPU、24GB RAM）とM4（10コアCPU、16GB RAM）で、86Box 6.0のカスタムビルドを使い、Voodoo 3グラフィックス付きPentium II（Deschutes）搭載Windows 98 SEマシンを300〜800MHzでエミュレートして比較した記事。M4は500MHzまでしか安定動作しなかったのに対し、M6は600MHzで安定動作（周波数換算で約20%向上）し、Cinebench 2000スコア9.28CBを記録、Winampのバックグラウンド再生も音声ドロップなく完全速度を維持した。

### Key Discussion Points

- **cloverich**: 初めてグラフィックカード（Voodoo）を手に入れてTFCの水面表現に感動した思い出。3D初期は逆に2Dより見劣りしたことに戸惑ったが、その後の進化につながった。
- **cbm-vic-20**: 3dfx（TDFX）株を保有していたが倒産、NVDAが資産を買い取り株主には何も残らなかった。もし3dfxがAI時代まで生き残っていたらと想像してしまう。
  - **saturn8601**: 書籍「The Nvidia Way」によれば、ジェンスン・フアンは最高のチップを一度作るだけでは不十分と認識し、6ヶ月ごとに新製品を出す体制を構築、それが3dfxの開発サイクルを罠にした。規律ある実行が全てだったという結論。
  - **afavour**: Quake 2をソフトウェアレンダリングでやり込んだ後、3dfxカード（Banshee）で衝撃を受けた思い出。
  - **jonplackett**: 10歳の頃3DFXやGeForceが欲しかったが週10ポンドの新聞配達代しかなかった。もしNvidia株に投資していたら今頃1000万ポンド以上になっていた。
- **mrngld**: 「正しいタイトルは『M6 Mac Miniで自分の子供時代をエミュレート』」と茶化す。
  - **acidburnNSA**: 自分もPentium Pro 200MHzのWindows 95機を86Boxで維持しており、SkiFreeやEncarta 96などで友人の子供たちにも喜ばれている。
  - **bknight1983**: 「Winampだけで胸が熱くなる」。
- **kar1181**: 86BoxはM4+ Macでも快適に動く。Pentium II/Voodoo 3向けにQuake 1/2を高速動作させる独自OSを開発中で、実機と非常に忠実に動作する。
- **walrus01**: 「エミュレートされたラマ鞭打ち、なんて時代だ」と皮肉。

## 5. [Git-bug: Distributed, offline-first bug tracker embedded in Git](https://github.com/git-bug/git-bug)

**Score:** 178 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=49843174)

git-bugはGitリポジトリに完全統合された分散型バグトラッカーで、プロジェクトファイルを汚さずにすべてのデータをGit内に保存する。オフライン完全対応、通常のGitリモートを使ったチーム間共有、ベンダーロックインの回避、CLI/ターミナルUI/Web UIの複数インターフェース、GitHub・GitLab・Jiraとのブリッジ機能を備える。

### Key Discussion Points

- **michaelmure**（作者）: 今後のロードマップとして、WebUIの外部認証（GitHub OAuth等）対応、Gitリモートエンドポイントの公開、did:plc（Blueskyのアイデンティティシステム）を用いたID体系の再設計などを計画している。
  - **ftgffsdddr**: ロードマップに関連し、コラボレーションのために「スコープ付きラベル」のようなIssueキュー機能があると良いと提案。
  - **sebiw**: 実用的なツールを公開したことに敬意を表しつつ、フルタイムで続けるならエンタープライズ向け有料プランを検討すべきだが、想定顧客層は簡単にはお金を払わないだろうと指摘。
  - **derpitron**: 外部認証の実現に向け、Forgejo系フォージの連合プロトコル「ForgeFed」やIndieAuthの統合を提案。
- **jason_oster**: 数ヶ月前に試したところGitHub Issue #1023が致命的な問題（回避策はあるが煩雑）だったと報告。
  - **michaelmure**: 近く修正予定。セキュリティ上go-gitを使いたかったが堅牢性に欠けるため、push/pullでgitバイナリを使うオプション（場合によりデフォルト化）を検討中と返答。
  - **jsiepkes**: 「致命的」は大げさでは、と疑問視。SSHエージェントが問題ならNitrokeyやYubikeyなどHSMの利用を勧める。
- **imagent**: 純粋なGitでコードレビューができる`git-appraise`も紹介しつつ、git-bugではMarkdownエディタでチケット編集できない不満から独自ツール「ticketry」を開発した。
  - **ftgffsdddr**: WebUIは既にMarkdownをサポートしていると補足。
- **teddyh**: この種の分散型バグトラッカーは他にも多数存在すると、過去のHNスレッドへのリンクを共有。
  - **mcepl**: 10年以上前のブログ記事を引き合いに、状況はあまり改善していないと指摘。
- **dizzard**: お気に入りのVCSフレンドリーなチケット管理ツールは人間可読でシンプルな「ticket」だと紹介。

## 6. [Ink and Switch Interactive Homepage](https://www.inkandswitch.com/)

**Score:** 145 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=49842270)

Ink & Switchは思考ツールの未来を探求する独立研究所。創設10周年を記念したインタラクティブアート作品「Tenfold」をフィーチャーした新ホームページを公開した。ローカルファーストソフトウェア、Malleable Software、Programmable Ink、Universal Version Controlの4つの研究テーマを軸に、AmbsheetsやPatchwork、Keyhiveといった研究プロジェクトや、実用化されたAutomerge・Allumeなどのソフトウェアを紹介している。

### Key Discussion Points

- **zazuke**: Ink & Switchの記事群の中でも「local-first」や動的文書の「embark」がお気に入りで、インスピレーションを得られると絶賛。
- **evek**: 彼らはLocal-firstカンファレンスの主催者でもあり、録画やニュースレターの振り返り記事も公開している。
- **krisoft**: 「触ってみて」と言われて操作してみたが、クリックとドラッグで挙動が一貫しておらず、何も起きない要素もあり、体験としては心地よくないと感じた。
- **Topfi**: 記事は常に読む価値があり、特にCRDTに関する取り組みはUX改善のインスピレーションになる。ただしモバイルでは全体験を得られていない様子。
- **hnisjafx40**: Ink & Switchのコンテンツはいつも何かを作り直したい気持ちにさせる。ホームページ自体を触れるようにした点はブランドに合っており、Automergeツール群にどこまで依存しているのか気になる。

## 7. [U.S. appeals court upholds designation of Anthropic as supply chain risk](https://www.cnbc.com/2026/09/25/pentagon-anthropic-ai-risk-appeals-court.html)

**Score:** 110 | **Comments:** 71 | [Post](https://news.ycombinator.com/item?id=49845977)

ワシントンD.C.の連邦控訴裁判所は2対1の判断で、国防総省（DOD）によるAnthropicの「サプライチェーンリスク」指定を支持した。DODは今年3月、Claudeモデルの軍事利用を巡る交渉決裂を受けてこの指定を行い、米軍によるAnthropicモデルの使用および契約企業による利用を禁じている。多数意見はKatsas判事が執筆し、Henderson判事は反対意見。Anthropicは自律型兵器や国内大規模監視への転用防止の保証を求めたがDODは無制限アクセスを要求し交渉が決裂した経緯があり、Anthropicは再審請求や連邦最高裁への上訴を含め「あらゆる選択肢を検討している」と表明した。

### Key Discussion Points

- **prometheus1992**: OpenAIが複数の著名組織をハッキングしても通常通り営業できる一方、軍のAI利用にガードレールを設けたAnthropicが安全保障上の脅威扱いされるのは腐敗の臭いがする。
- **iamdelirium**: この種の指定が濫用される懸念。もし自分がPalantirのような共和党寄り企業なら、将来民主党政権が同じ手法で自社を潰しに来ることを恐れるはずだ。
- **ctippett**: 今回の判断を詳しく読み込む必要はあるが、政権がAnthropicへの指定に正当性がなかったことを露骨に示しており、報復的訴追の典型例に見えないのが驚きだ。
- **petcat**: 結局何が問題だったのか理解しきれない。DODがAnthropicのモデルへの無制限アクセスを求めAnthropicが拒否し、結果DODが一切使わないと宣言した形なら、それはAnthropicの望み通りではないかと疑問を呈する。
- **Chance-Device**: 次は連邦最高裁だろう。政府契約企業の商機を失う代償はあるが、これによりAnthropicは「ブラックリストに載った兵器を開発しない」という自社の理念を貫くことになる。

## 8. [Classified Estimates Show the NSA Is Paying Billions to Test AI Models](https://www.washingtonsun.com/technology/classified-estimates-nsa-paying-billions-to-test-ai-models)

**Score:** 93 | **Comments:** 38 | [Post](https://news.ycombinator.com/item?id=49845952)

NSAが今年、AIモデルの評価・テストに数十億ドル規模の税金を投じていることが明らかになった。NSAの人工知能セキュリティセンターは、相次ぐ高度なハッキング事件を受け、最先端AIモデルから潜在的な国家安全保障上の脆弱性を洗い出す目的でテストを実施している。費用の大半はモデル実行に必要な計算資源とチップ処理、そして数百万ドル規模の給与が必要な優秀なAIエンジニアの採用競争で占められており、記事はこうした評価コストを政府ではなくAI企業側が負担すべきだという議論も紹介している。

### Key Discussion Points

- **paimapi**: どんなAI規制が成立してもNSAを抑え込む実効性は乏しいだろう。憲法修正第4条すら及ばないように見える機関であり、過去の大量盗聴の事後的合法化のように、今回の監視やテストも「国家安全保障」の名の下に正当化されるだけだ。
- **rdtsc**: 「NSAはAIに全く手を付けていなかった」という見出しの方が驚きだっただろう。「テスト」や「数十億ドル」という言葉には皮肉を込めている。
- **bhouston**: 「テスト」という建前だが、他の全員と同様にセキュリティ侵入やソーシャルエンジニアリング・選挙工作にも使っていなければむしろ無能だろう。
- **hosel**: 驚くことではない、これは氷山の一角に過ぎない。
- **jawiggins**: LLMのゼロショット分類能力の高さは過小評価されがちで、多言語を含む通信の監視に極めて有効なはずだと指摘。

## 9. [First Principles Thinking](https://sunilsadasivan.com/writing/first-principles-thinking/)

**Score:** 74 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=49844736)

シニアエンジニアが経験に縛られて成長が停滞する問題への処方箋として、ファーストプリンシプル思考を論じる記事。優秀なエンジニアほど経験を積むほど別の視点で考えるのが難しくなるという矛盾を指摘し、自らの経験や現在の信念を一旦脇に置いて問題を新しい視点で見つめ直す重要性を説く。優れたエンジニアに共通するのは「なぜこれを作るのか」「利用者に何をもたらすのか」を問い続ける姿勢であり、AI・エージェント時代には旧来の制約が今も有効だと決めつける前に試す姿勢が重要だと主張する。

### Key Discussion Points

- **trwhite**: エージェントを使った設計判断の難しさを訴える。アイデアに詰まった時は有用だが、すでに方向性がある場合はエージェントが主導権を握ってしまい、経験に基づく判断を放棄しているように感じる。同僚がエージェントに頼りきりで自ら考えなくなった例も見てきた。
- **bob1029**: 高次の思考の方がより重要かつ稀少。過度なファーストプリンシプル志向は、意図は良くても戦略的・イデオロギー的な袋小路に技術者を追い込みかねない。瞬間ではなく曲線全体の面積（長期的成果）に関心がある。
- **ripvanwinkle**: Codexを使ってGmailのような同期の難しいアプリを設計しているが、高水準の設計には自分自身の投資が不可欠で、要件だけを渡すと構造が破綻すると述べる。
- **Hasz**: エージェントか人間かに関わらず、「ビルドモードより計画モードに時間をかけるべき」だと簡潔に述べる。
- **cyclopeanutopia**: 「言葉は多いが中身が薄い、結局この記事は何についてなのか」と辛辣な評価。

## 10. [Gravity Seems Holographic. What Does That Mean for Reality?](https://www.quantamagazine.org/gravity-seems-holographic-what-does-that-mean-for-reality-20260925/)

**Score:** 16 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=49845998)

重力が「ホログラフィック」な性質を持つという理論的知見を紹介する記事。任意の空間領域内部で起きていることを、その表面の測定だけから解読できるという主張で、重力が常に正の質量にのみ作用するために表面の時空の歪みから内部の物質配置を一意に推測できる点が根拠とされる。1970年代のブラックホールエントロピーが体積ではなく表面積に比例するという発見、1990年代のAdS/CFT対応（重力空間の内部と量子場理論の表面の数学的等価性、物理学史上最も引用された論文の一つ）が主な根拠として挙げられ、空間そのものが幻想で量子情報こそが基本的実在かもしれないという解釈が紹介されている。我々の宇宙が実際にこの原理に従うかは未解明。

### Key Discussion Points

- **haitchfivee**: 記事中のホーキングに関する記述に細かい異議。1970年頃はホーキングも含め学界はブラックホールから何も脱出できないと考えていたが、1971〜73年にペンローズらとの研究でその後見解が反転し、事象の地平線から何かが脱出しうるという主張に至った経緯を補足。
- **phailhaus**: 「表面を撮影するだけで内部を再構成できる」という記事の比喩に苦言。実際には表面の時空の歪みを測定する必要があり、単なる写真では不十分だと著者自身も説明しているのに、誤解を招く表現だと指摘。
- **glenstein**: 専門家ではないが、ホログラフィー原理は物理学における次の大きな概念的革命の最有力候補に見える。まだ決定的なブレークスルーが目前にあるわけではないが、多くの物理学者が「足で投票」するようにこの方向を支持している。
- **toddmorey**: 余談として、Quanta Magazineはいつもデザインとビジュアルが優れていると称賛。
- **GodelNumbering**: LLMに「一人称視点で書いて」と指示して書かせたような文章に見えると酷評。エントロピーの定義や、表面の情報から内部配置を一意に推測できるという説明（実際には同じ表面値を示す配置が複数あり得る）など、事実誤認や誤った定義が随所にあると批判。

## Trends

今回のトップ10では、政府主導のデジタル主権・オープンソース移行（F-Droid 2.0、オランダ政府のNixOS採用）とAIを巡る国家安全保障・地政学的緊張（Anthropicの国防総省ブラックリスト指定、NSAのAIテスト支出）が大きな軸を占めた。開発者向けでは、Go言語のSIMD APIやGit組み込みの分散バグトラッカーなど「既存の枠組みを再考する」技術系の話題が目立ち、レトロコンピューティングのエミュレーション記事も根強い人気を見せた。またAIエージェント時代におけるエンジニアの思考法（ファーストプリンシプル思考）や、物理学のホログラフィック原理のようなポップサイエンス的な話題では、コメント欄で「AI生成っぽい文章」「ポップサイエンスの単純化」への批判が複数見られ、コンテンツの質や正確性への関心の高まりがうかがえる。
