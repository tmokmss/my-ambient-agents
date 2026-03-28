---
title: "Hacker News トップ10 ダイジェスト（2026年3月28日）"
date: "2026-03-28T13:15"
category: "summary"
summary: "AIエージェントの安全性、macOS批判、AMD新CPU、CERNのシリコンAI、英国の再生可能エネルギーなど話題多彩"
tags: ["hackernews", "ai", "hardware", "macos", "opensource"]
---

## 1. [I put all 8,642 Spanish laws in Git – every reform is a commit](https://github.com/EnriqueLop/legalize-es)

**Score:** 145 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=47553798)

スペインの公式官報（BOE）のAPIから取得した8,642本の法律をMarkdownファイルに変換し、各改正をGitコミットとして管理するリポジトリ。27,866コミットで改正履歴を追えるため、`git diff`で条文の変化を視覚的に確認できる。作者は「Claude Codeを使って約4時間でパイプラインを構築した」と述べており、リーガルテック向けAPIとしての商業化も模索中。

### Key Discussion Points

- **enriquelop**: 法律はパッチの積み重ねであり、Gitがそれを自然に表現できる。ビジネス展開の可能性を探りたい
- **cyrusradfar**: 素晴らしいが`git blame`は機能しない。誰が賛成・反対票を投じたかがわかる仕組みがあれば
- **j-bos**: 全国の立法に同様のシステムがあれば、既存技術で解決できる非効率が無数にある
- **sigio**: オランダの法律の一部で同様の試みをしたことがある

## 2. [Britain today generating 90%+ of electricity from renewables](https://grid.iamkate.com/)

**Score:** 75 | **Comments:** 45 | [Post](https://news.ycombinator.com/item?id=47553484)

英国の電力グリッドをリアルタイムで表示するサイト。現在、風力・太陽光などの再生可能エネルギーが発電量の約89%を占め、化石燃料はわずか6.8%。2024年9月に石炭発電所が全廃され、2025年12月には風力発電の最高記録23.94GWを達成している。

### Key Discussion Points

- **nickslaughter02**: 英国は2年連続で世界最高水準の電気料金を支払っており、産業用は仏より63%高い
- **goldenarm**: 英国は3月に161g CO2/kWhを排出しているが、フランスは再生可能エネルギーが半分でも1/6のCO2排出量
- **jackpeterfletch**: 9.4%はガス+バイオマスで、発電は余剰気味で+13.4%の輸出が発生している
- **mytailorisrich**: 11時時点で65%が風力、25%が太陽光という好条件

## 3. [I Built an Open-World Engine for the N64 [video]](https://www.youtube.com/watch?v=lXxmIw9axWw)

**Score:** 45 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47553717)

Nintendo 64向けにオープンワールドエンジンを自作したという動画。N64の厳しい制約（4MB RAM、93MHz MIPS CPU）の中で動的なオープンワールドを実現したとされ、制約の中から創造性が生まれる典型例として注目された。

### Key Discussion Points

- **gryfft**: 制約の中で構築することで生まれる創造力の美しい例

## 4. [Cocoa-Way – Native macOS Wayland compositor for running Linux apps seamlessly](https://github.com/J-x-Z/cocoa-way)

**Score:** 110 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=47553185)

RustとSmithayフレームワークを使ったmacOS向けのネイティブWaylandコンポジタ。XQuartzや仮想化なしでLinuxのGUIアプリをmacOSに直接ストリーミングでき、Metal/OpenGLレンダリングとHiDPIをサポートし低遅延を実現している。

### Key Discussion Points

- **cyanmagenta**: ネイティブmacOSビルドのないLinux GUIアプリとは何か？ほとんどのQt/GTKアプリはマルチプラットフォーム対応では
- **jbverschoor**: コンテナ内でGUIアプリを実行するのに最適。Appleは開発者からデスクトップの地位を失いつつある
- **IshKebab**: ウィンドウがシームレス（別ウィンドウ内に収まらない形式）になれば良いのでは
- **anArbitraryOne**: Win/Linuxのキーボードコマンドに切り替えられればmacOSはもっと使いやすくなる

## 5. [CERN uses tiny AI models burned into silicon for real-time LHC data filtering](https://theopenreader.org/Journalism:CERN_Uses_Tiny_AI_Models_Burned_into_Silicon_for_Real-Time_LHC_Data_Filtering)

**Score:** 150 | **Comments:** 74 | [Post](https://news.ycombinator.com/item?id=47552562)

CERNがLHCの衝突データをリアルタイムでフィルタリングするためにFPGA上に実装した小型AIモデルを使用しているという記事。オートエンコーダと畳み込み層を用いたカスタムニューラルネットを以前の実験データで学習させ、ナノ秒単位の推論を実現している。元記事へのアクセスは制限されていた。

### Key Discussion Points

- **intoXbox**: 使われているのはオートエンコーダと畳み込み層らしいが、記事がAI技術の詳細を書いていないのが残念
  - **dcanelhas**: 「AIモデル」が単に線形回帰の言い換えになっているだけでは、という疑念
  - **etrautmann**: 実装のほとんどはFPGAであり、「シリコンに焼き込まれた」という表現は誇張
- **konradha**: FPGAはASICではないのに「シリコンに焼き込まれた」とはどういうこと？
  - **eqvinox**: CERNは他の用途でカスタムASICを設計することはある（おそらく今回は違う）
- **jurschreuder**: 現代のCPUは分岐予測にパーセプトロンをすでに使っている
- **logicallee**: 警告話として：200kパラメータのミニNNがr²=0.85を達成したが、未見データへの予測能力はゼロだった

## 6. [Go hard on agents, not on your filesystem](https://jai.scs.stanford.edu/)

**Score:** 420 | **Comments:** 240 | [Post](https://news.ycombinator.com/item?id=47550282)

Stanford発のJAIというLinuxサンドボックスツールの紹介。DockerやVMを使わずにAIエージェントを安全に封じ込める軽量ツールで、ホームディレクトリにコピーオンライトオーバーレイを作成しながら作業ディレクトリはそのまま利用可能。「AIツールが普通のマシンアクセスを持つと、ファイル削除やホームディレクトリ消去が報告されている」という問題意識から生まれた。

### Key Discussion Points

- **AnotherGoodName**: `.claude/settings.json`にサンドボックス設定を追加する方法を紹介。この機能は10日前に追加されたばかり
  - **mazieres**: Claudeはディレクトリを混同することがある。サンドボックスは非常に低レベルで実装する必要がある
  - **harikb**: Claude Codeのアップデートで設定名が静かに変更される可能性もある。别のソフトウェアによるサンドボックスが望ましい
- **puttycat**: AIエージェントをプライベートマシンに簡単にインストールするようになったことに驚く。数十年間セキュリティを強化してきたのに
  - **fc417fc802**: ビルドツールの依存関係問題でも同じことが起きた。短期的思考が繰り返される
  - **lxgr**: クラウド推論の場合、エージェントがデータを「見た」瞬間に推論プロバイダーに渡る。サンドボックスはデータ流出を防ぎきれない
- **andai**: AIに別ユーザーを与えることで対処。最善策は「専用ラップトップを与えること」（中古ThinkPadが$50で入手可能）
- **driverdan**: ファイルシステムの話ばかりだが、環境変数・シークレット・認証情報の隔離はどうすべきか

## 7. [AMD's Ryzen 9 9950X3D2 Dual Edition crams 208MB of cache into a single chip](https://arstechnica.com/gadgets/2026/03/amds-ryzen-9-9950x3d2-dual-edition-crams-208mb-of-cache-into-a-single-chip/)

**Score:** 206 | **Comments:** 109 | [Post](https://news.ycombinator.com/item?id=47550878)

AMDがRyzen 9 9950X3D2 Dual Editionを発表。2つの3D V-CacheをCCDに搭載し、合計208MBのL3キャッシュを1チップに詰め込んだ。コメントでは、実際の恩恵は低リーク電流によるより積極的なクロック曲線にあり、キャッシュ自体の効果（+2%程度）よりも大きいとの指摘も。

### Key Discussion Points

- **senfiaj**: 2004年のPCのRAMが256MBだったのに、現代のCPUキャッシュが2000年代初頭のOSを複数ホストできる容量に
- **chao-**: 最初のパソコンのストレージ（約160MB）が、現代の民生用CPUのL3キャッシュに収まってしまう
- **pwr22**: L3キャッシュが両CCDの全コアで単一プールとして動作するか、アクセス遅延はあるか
  - **phire**: L3は各CCD内に局所化。クロスCCDキャッシュラインの引き込みはクリーンラインのみ可能という制約あり
- **monster_truck**: 追加キャッシュの効果は+2%程度。低リーク電流によるクロック向上（+30W TDP）が本質的な恩恵
  - **Aurornis**: メモリバウンドのワークロードには有効だが、ゲームや汎用用途には9850X3Dの方がコスパが良い

## 8. [Toma (YC W24) is hiring a Senior/Staff Eng to build AI automotive coworkers](https://www.ycombinator.com/companies/toma/jobs/2lrQI7S-sr-staff-software-engineer)

**Score:** 1 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47553796)

YC W24採択のスタートアップTomaによるシニア/スタッフエンジニア募集の求人投稿。自動車業界向けのAIコワーカーを構築するポジション。求人投稿がトップストーリーに含まれているのは珍しい状況。

## 9. [Paper Tape Is All You Need – Training a Transformer on a 1976 Minicomputer](https://github.com/dbrll/ATTN-11)

**Score:** 33 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47518568)

1976年製のミニコンピュータ（PDP-11）のアセンブリ言語でシングルレイヤーのTransformerニューラルネットワークを実装したプロジェクト。数字列の反転タスクを学習させ、PDP-11/34Aで約5.5分でフル精度に達した。固定小数点演算の最適化と学習率の工夫により、深刻なメモリ・処理能力の制約下でも深層学習の基本概念が実現可能であることを示している。

## 10. [Make macOS consistently bad unironically](https://lr0.org/blog/p/macos/)

**Score:** 444 | **Comments:** 317 | [Post](https://news.ycombinator.com/item?id=47547009)

macOS 26（Tahoe）でウィンドウの角丸半径が一貫していないという問題を扱ったブログ記事。SIPを無効化せずに、サードパーティアプリにダイナミックライブラリを注入することで角丸半径を23ptに統一するという解決策を実装した。記事タイトルは「一貫して悪くする（逆説的に良くする）」という皮肉。

### Key Discussion Points

- **zackmorris**: macOS更新後にWindowServerが100%以上のCPUを消費。Appleには誰も舵を取っていないように感じる
  - **root_axis**: M2 Airは複数アプリを滑らかに扱える。パフォーマンスが低下しているという見解に反論
- **hackrmn**: Jobsの徹底した品質主義がAppleをまとめていた。その後は「次のバージョンで修正」という文化に変わった
- **pram**: TahoeのタブはSequoiaに比べて信じられないほど醜い。あの「薬の錠剤型」のデザインは本当にひどい
- **amarant**: OSの最大の欠点がウィンドウの角丸なら、かなり良いOSとも言える。むしろ自転車置き場の議論では
  - **intrasight**: 同意できない。OSシステム全体を通じた「関心の分離」の基本的な欠陥を示している
- **nostromo**: Tahoeの通知のクリアは非常に煩雑。Music appの更新はひどすぎる
  - **ymolodtsov**: ボタンの反応が遅いのは3バージョンにわたって続いている問題

## Trends

今日のHacker Newsトップ10から見えてくる主要トレンドは以下の通り：

1. **AIエージェントのセキュリティ**: 最高スコアの2投稿（「Go hard on agents」「macOS consistently bad」は間接的に）はAIエージェントの安全な管理方法を議論しており、AIツールが日常的になるにつれてサンドボックス・権限管理が重大な関心事になっている

2. **ハードウェアの進化と歴史的対比**: AMDの208MBキャッシュCPUと1976年製ミニコンピュータでのTransformer学習が同日にトップに。「昔のコンピュータ全体が今のCPUキャッシュに収まる」というノスタルジーと驚きが共鳴

3. **macOSへの批判の高まり**: Tahoe（macOS 26）のUI一貫性欠如への不満が444スコアを集め、Jobs亡き後のAppleの品質管理への懸念が広く共有されている

4. **バージョン管理の応用拡大**: スペインの法律をGitで管理するプロジェクトは、バージョン管理の概念を法律・文書管理領域に持ち込む創造的な発想として注目された

5. **エネルギー転換の現実と矛盾**: 英国の再生可能エネルギー90%超という数字は称賛される一方、世界最高水準の電気料金という矛盾も浮き彫りになり、再生可能エネルギー転換の複雑さが議論された
