---
title: "Hacker News トップ10まとめ (2026-07-20)"
date: "2026-07-20T03:56"
category: "summary"
summary: "ボウリング場をESP32で自作した話やClaude CodeのBun/Rust化など、HNトップ10を日本語で要約"
tags: ["hackernews", "tech-news"]
---

## 1. [Show HN: I replaced a $120k bowling center system with $1,600 in ESP32s](https://news.ycombinator.com/item?id=48968606)

**Score:** 1736 | **Comments:** 186 | [Post](https://news.ycombinator.com/item?id=48968606)

投稿者はSREでありながら、家族で廃業した8レーンのボウリング場を買い取り運営している。純正のスコアリングシステムは2008年製で交換に8〜12万ドルもかかるが、実際にやっていることはリレー1個を作動させるだけと判明したため、ESP32・ESPNow・Raspberry Pi・Redisを使い、1レーンペアあたり200〜400ドルで同等のシステムを自作した。

### Key Discussion Points

- **vikbez**: 自分も古い機械式ボウリングレーンを所有しており、1970年代のIntel D8749Hを使ったスコア表示を独自のArduinoベースPCBに置き換えた経験を共有。
  - **section33（投稿者）**: scoremoreとの統合も検討したが、ハードウェアの世界に踏み込んでみてファウル検出だけで750ドル/台もかかることに驚いたと返信。
  - **cgyvbunji**: 「単一リレー」の意味について質問。
- **HeyLaughingBoy**: 2019年頃、古い工作機械を最新のモーションコントロールに改修するビジネスに関わった経験を紹介し、古いシステムの近代化には多くのビジネスチャンスがあると同意。
  - **BobbyTables2**: 純粋なハードウェア製品を小ロット生産するのも一つの手だが、結局は問題を先送りするだけで、ソフトウェアが絡むと途端に複雑になると指摘。
- **msisk6**: 父親がボウリング機械の整備士で、子供の頃からリレー制御の古いAMF製ピンセッター機を見て育った思い出を語る。
- **section33（投稿者）**: 今後はLED/DMXによる演出照明やタップ決済によるセルフサービス化を計画中と説明。
  - **luma**: 「ボウリング場を買いたくなった」と好意的な反応。
- **monster_truck**: プロボウリング業界の知人に見せたいので詳細URLを教えてほしいとリクエスト。

## 2. [Claude Code uses Bun written in Rust now](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/)

**Score:** 417 | **Comments:** 586 | [Post](https://news.ycombinator.com/item?id=48966569)

Claude Code v2.1.181以降、内部で使われるBunランタイムがRustで書き直された版に置き換わっていることが判明した。Simon WillisonはバイナリのstringsコマンドからBun v1.4.0（未リリースのプレビュー版）が組み込まれていることを確認しており、開発元のJarredはこの書き換えによりスタートアップが10%高速化したと述べている。

### Key Discussion Points

- **mrothroc**: 元々のZig版ではメモリのライフサイクル管理を手動で行っていたためバグが多く、Rustに移行することでその種のバグを自動的に排除できたと分析。
  - **BearOso**: Rustは自動というよりボローチェッカーが誤りに気づかせてくれる仕組みであり、LLMがRustを好む理由もそこにあると補足。
  - **gchamonlive**: とはいえBun内には大量の`unsafe` Rustコードが残っている点を指摘。
- **gabrieledarrigo**: 技術的な話より、1万行超のPRを1ヶ月足らずでマージするなどコミュニケーションの進め方が「大人げない」と批判。
  - **cush**: Zig版を続けたい人がそれを止める要因は何もない、と反論。
- **weakfish**: なぜTUIをJavaScript経由のReactで動かす必要があるのか疑問視し、Bun買収の必要性自体がエンジニアリング面の課題を物語っていると指摘。
  - **switz**: 技術的な最適解かはともかく、既に大きなビジネス的成功を収めており「以上」という実利的な反論。
- **embedding-shape**: RustへのリライトによりOSSプロジェクトとしてのBunの独立性が事実上失われ、Anthropicの内製ツールになりつつあると懸念。
  - **junon**: なぜRust化がプロジェクトの「死」を意味するのか疑問を呈する。
- **GuB-42**: どうせAIでリライトするなら、BunではなくClaude Code自体を直接Rustで書き直せばよかったのではと提案。
  - **tbrockman**: Bun/oven.sh買収の価値を活かす戦略上、あえてJSランタイムを残す判断だろうと分析。

## 3. [The Zen of Parallel Programming](https://smolnero.com/posts/the-zen-of-parallel-programming)

**Score:** 128 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=48907390)

並列プログラミングにおける「プロセッサを増やすだけでは不十分で、各部分が効果的に通信・同期する必要がある」という原理を、人間の思考・感情・身体の内面的な調和になぞらえたエッセイ。著者は、正直なコミュニケーションと内面的な一体性があって初めて潜在能力を発揮できると述べ、「最大の制約は力の不足ではなく自己矛盾した力かもしれない」と結んでいる。

### Key Discussion Points

- **datadrivenangel**: フレデリック・ブルックスの「人月の神話」を引き合いに、人を増やすほどコミュニケーションコストが非線形に増大し、プロジェクトはむしろ遅れると指摘。
- **_def**: チームが手薄で複雑さも大きい一方、人員を増やしても改善には限界があると感じており、記事の「同期と正直さ」という論点に共感。
- **mycall**: CS101の「分割統治」になぞらえ、信号強度の制御やインピーダンスミスマッチの回避が、論理的には分割されたスライス間の同期に相当すると解説。
- **quorumsensor**: 西洋思想の「homologia（調和・一致）」というストア派の概念を引き合いに出し、理性と感情の調和という近い概念を紹介。

## 4. [What I learned selling 2,500 MIDI recorders: Hardware is not so hard](https://chipweinberger.com/articles/20260719-hardware-is-not-so-hard)

**Score:** 430 | **Comments:** 200 | [Post](https://news.ycombinator.com/item?id=48966713)

ソフトウェアエンジニアからハードウェア開発に転身した著者が、MIDI録音デバイス「Jamcorder」を2,500台販売した経験を振り返る記事。「ハードウェアは難しい」という通説に反し、シンプルな設計を徹底したことでハードウェア開発自体はむしろソフトウェア開発より楽だったと述べ、「ハードウェアの難しさは自分がどれだけ複雑にするか次第」と結論づけている。

### Key Discussion Points

- **skippyfish**: ハードウェアが難しいとされる理由として、量産のスケーラビリティ、ユーザー環境での予期せぬ誤用への対応、未知の領域での障害モードの多さの3点を挙げる。
  - **em3rgent0rdr**: ESP32-WROOMモジュールはFCC/CE認証済みでWi-Fi・Bluetooth・アンテナ・フラッシュ・プロセッサを内包しており、設計者はモジュールを載せるだけで済む点が大きいと補足。
  - **zbentley**: 過去のHNスレッドで議論された他のハードウェアスタートアップの教訓とも共通する内容だと同意。
- **DavidPiper**: 実際のJamcorderユーザーとして、不満点が一切ない完成度の高い製品だと絶賛。
  - **chipweinberger（投稿者）**: 感謝のコメントを返信。
- **starky**: 「ハードウェアは自分次第で難しくもなる」という結論に異議を唱え、製品が要求する複雑さそのものが難易度を決めると反論。
  - **dimatura**: 一人企業の文脈であれば、シンプルな製品を選んで作るという著者の姿勢は理にかなっていると擁護。
- **j-bos**: 偽造品対策の戦略について質問し、ウェブサイトへのTwitterリンク追加も提案。
- **cmicali**: 素晴らしい成果としつつも、この製品はハードウェアの難易度スペクトルの中でも「簡単な部類」に位置すると指摘。
  - **jrflo**: 同じくハードウェア従事者の立場から、物理的な複雑さがほぼないソフトウェア寄りの製品だと分析しつつ、年商規模の事業への到達は称賛。

## 5. [Minecraft: Java Edition now uses SDL3](https://www.minecraft.net/en-us/article/minecraft-26-3-snapshot-4)

**Score:** 285 | **Comments:** 188 | [Post](https://news.ycombinator.com/item?id=48967256)

Minecraft Java Edition の最新スナップショット（26.3 Snapshot 4）で、ウィンドウ管理・入力・プラットフォーム統合に使うライブラリがGLFWからSDL3に切り替わった。あわせてカスタム燃料アイテムのコンポーネント追加や、看板・ワールド生成・ルートテーブル周りの技術的変更も行われている。一方でWindowsの排他フルスクリーンモードでのクラッシュなど既知の不具合も報告されている。

### Key Discussion Points

- **malteeez**: SDL3向けのlwjglバインディングは大型modパック「GTNH」チームのメンバーが書いたもので、バニラ→MOD→バニラという流れが完結したと紹介。
  - **bombcar**: GTNHのMinecraftへの貢献は、ある意味Microsoft以上とも言えるほど丁寧で質が高いとコメント。
- **shakna**: Windows複数モニター環境やWaylandでのクラッシュといった既知の不具合が、通常ならリリースを遅らせるレベルの深刻さではないかと懸念。
  - **mort96**: スナップショットは主要ブランチの現状をそのまま公開するのが目的であり、問題の深刻度をテレメトリで把握するためにもあえて出す意義があると説明。
- **velcrovan**: Minecraft未経験の親として、家族用サーバーを2026年に立てるならどうすればよいかとアドバイスを求める。
  - **AkBKukU**: JavaとBedrockの違いを説明し、GeyserでBedrockクライアントもJavaサーバーに接続できると解説。
  - **cogman10**: JVMチューニングに関するオンライン情報の多くは古いか誤りで、最新JVM・大きめのメモリ割り当て・ZGC使用だけで十分と助言。
- **hiccuphippo**: SDL2からSDL3への移植を扱ったIcculusのDoom移植動画を紹介。
- **LelouBil**: Minecraftが単なるゲームというより一種のゲームエンジンになりつつあると指摘。

## 6. [A new Intel Itanium (IA-64) emulator that boots Windows](https://raymii.org/s/blog/Intel_Itanium_IA-64-Emulator_that_boots_Windows.html)

**Score:** 61 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=48971566)

Intel Itanium (IA-64) プロセッサの新しいエミュレータが登場し、Windows Server 2003やWindows XP 64ビット版の起動に成功した。性能は486クラスとまだ低速だが、x86以外のCPUエミュレーションとしては大きな進展であり、今後OpenVMSやHP-UXの実行も期待されている。コードは整理後にGitHubで公開予定。

### Key Discussion Points

- **qubex**: 486レベルの性能というのは、23年前のIA-64版Windowsからすれば実は大躍進とも言えるとジョーク混じりにコメント。
- **djhope99**: かつて銀行でIA-64版WindowsのWebSphereサーバーを使わざるを得なかった経験談を紹介。
- **cbmuser**: QEMU向けのIA-64エミュレーションサポートを「vibe-coding」で実装した人がいると、関連プロジェクトのGitHubリンクを共有。
- **mixmastamyk**: 20年以上前に実機のItaniumでDebianを試した経験を振り返り、性能はまずまずだったが騒音と消費電力が大きく、「Itanic」という蔑称は妥当だったと述懐。

## 7. [Biggest Probabilistic Computer Turns Noise into Answers](https://spectrum.ieee.org/biggest-probabilistic-computer)

**Score:** 46 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=48971938)

研究者チームが100万個の確率的ビット（p-ビット）を備えた、史上最大規模の確率型コンピュータを開発した。18個のFPGAチップをネットワーク化し、グローバルな同期なしにチップ間でデータを共有できる手法を確立したことが鍵で、通常のコンピュータのように多数のチップを組み合わせて任意規模の確率型コンピュータを構築する道が開かれた。

### Key Discussion Points

- **petra**: AWS上で動く別方式のデジタル確率コンピューティングも存在し、特定のワークロードで大幅な高速化が主張されていると紹介。
- **RiverCrochet**: p-ビットが確率的に0/1を切り替える仕組みはADC（アナログ-デジタル変換）に近く、一種の新しいアナログコンピューティングと言えるのではと考察。
- **anonymousiam**: 記事には言及がないが、この種のアーキテクチャはパスワードや暗号鍵の総当たり攻撃に従来型コンピュータより適している可能性があると指摘。
- **m-hodges**: 見出しから想像していたのとは全く違う、記事冒頭のコンピュータの写真が印象的だったとコメント。

## 8. [Orion Browser by Kagi](https://orionbrowser.com/)

**Score:** 83 | **Comments:** 76 | [Post](https://news.ycombinator.com/item?id=48970894)

検索サービスKagiが開発するブラウザ「Orion」の紹介。WebKitベースでゼロテレメトリー、広告ブロック、アンチトラッキングを特徴とし、Safari・Chrome・Firefoxいずれの拡張機能にも対応する数少ないブラウザとして、macOS・iOS・iPadOS・Linuxをサポートしている。

### Key Discussion Points

- **yellowapple**: Linux版ベータは広告ブロックとネスト型縦タブが良く、Firefoxから乗り換える決め手になりそうだが、サイト別設定など一部の設定画面はまだ不安定と評価。
- **sodapopcan**: 1年以上前に270ドルの買い切りライセンスを購入したがバグが多く結局Firefoxに戻ってしまい、時々戻って様子見していると率直な感想。
- **8jy89hui**: モバイル版を数ヶ月使ったがUIバグが多く離脱してしまったとし、Kagi自体は気に入っているだけに残念だとコメント。
- **technovangelist**: 半年ほど前から使い始めたが、Chrome・Firefox・Arc・Dia・Braveなど他ブラウザより問題が少なく、1PasswordやApple Payも問題なく動作すると好意的に評価。
- **villish**: iOSでFirefox拡張機能（uBlock Origin、SponsorBlockなど）が使える点が最大の魅力とコメント。

## 9. [Moonshine: Lets you stream games from your PC to any device running Moonlight](https://github.com/hgaiser/moonshine)

**Score:** 18 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48972970)

Moonshineは、PC上のゲームをMoonlightクライアント搭載の任意のデバイスにストリーミング配信するLinux専用サーバー。各ストリーミングセッションはデスクトップ環境から完全に分離された独自のコンポジタ上で実行されるため、ホストPCを他の用途に使いながら、アクティブなデスクトップセッションなしでもリモートプレイが可能。

### Key Discussion Points

- **hankbond**: セッションが分離環境で動くとの説明について、これは仮想デスクトップのようなものなのか、独立したコンポジタインスタンスなのかと仕組みを質問。
- **NDlurker**: PCでエミュレートしたSwitchのゲームをWii Uや3DSにストリーミングするのと同じ発想だとコメント。
- **xingped**: 以前試した際は設定が難しく挫折した経験があり、OSS版のゲームストリーミングはNVIDIA純正機能ほど手軽ではないと指摘。
- **SpecialistK**: デスクトップを占有しない点はヘッドレスマシンに好適だが、必要なGPU要件が高くAlpine Linuxでは使えない点が残念とコメント。
- **tetrisgm**: Linux版のSunshineとの違いがよく分からないと疑問を呈する。

## 10. [Who Is America's Homer?](https://www.plough.com/articles/who-is-americas-homer)

**Score:** 46 | **Comments:** 108 | [Post](https://news.ycombinator.com/item?id=48913656)

「イギリスにシェイクスピア、スペインにセルバンテス、イタリアにダンテがいるように、アメリカには誰がいるのか」という問いに対し、Plough誌が複数の作家・詩人にアメリカの「ホメロス」は誰かを尋ねたシンポジウム記事。Joseph M. Keeginはウォルト・ホイットマンを、Dana Gioiaは詩的卓越性・テーマの深さ・創作の豊かさ・多才さ・史的先駆性という5つの基準からロバート・フロストを挙げるなど、寄稿者ごとに異なる人物が推薦されている。

### Key Discussion Points

- **bryanrasmussen**: マーク・トウェインが挙がらなかったのは意外とし、黒人作家を推すならラングストン・ヒューズやジェームズ・ボールドウィンが妥当ではと私見を述べる。
- **paxys**: 「ホメロス」は委員会で選ぶような存在ではなく、議論が必要な時点でそのような人物は存在しないとし、アメリカの文学的伝統はダンテやセルバンテスに匹敵するほど言語自体を形作るには若すぎると論じる。
- **slwvx**: マーク・トウェインこそアメリカのホメロスだとし、『ハックルベリー・フィン』に描かれる不毛なゼロサム対立は現代の政治にも通じると指摘。
- **freetime2**: 「その称号はすでにホーマー・シンプソンが持っている」とジョーク。
- **w10-1**: ホメロスの物語伝統は、干ばつや戦争で流浪の民となった人々が見知らぬ客をもてなす価値観や共通の神々を共有する必要から生まれたと考察し、ウィラ・キャザーを候補に挙げる。

## Trends

今回のトップ10では、AI関連の話題（Claude CodeのBun/Rust化）に加え、個人が既存の「業界標準」の高コストな仕組みを自作技術で置き換える事例（ボウリング場のスコアリングシステム、MIDIレコーダー）が目立った。いずれも「複雑・高価とされるものは、実はシンプルにできる」という共通したメッセージを持つ。また、レガシー技術の掘り起こし（Itaniumエミュレータ、確率型コンピュータ）や、オープンソース／独立系ソフトウェアの動向（Orion Browser、Moonshine、Minecraft SDL3移行）に関する議論も多く、コミュニティの技術的好奇心と実用志向の両方がうかがえる。
