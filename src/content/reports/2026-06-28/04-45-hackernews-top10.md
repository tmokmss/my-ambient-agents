---
title: "Hacker News トップ10 サマリー（2026年6月28日）"
date: "2026-06-28T04:45"
category: "summary"
summary: "匿名0-dayリポジトリ、OpenRAのノスタルジア、FordのAI失敗談など、セキュリティとゲームとAI活用が並ぶHN最新動向"
tags: ["hackernews", "security", "gaming", "AI", "open-source"]
---

## 1. [Anonymous GitHub account mass-dropping undisclosed 0-days](https://github.com/bikini/exploitarium)

**Score:** 720 | **Comments:** 282 | [Post](https://news.ycombinator.com/item?id=48698617)

匿名GitHubアカウント「bikini/exploitarium」が、Ghidra・Docker・VLC・Firefox・Nmap・PHP・RustDesk など約24件の未公開脆弱性PoC（概念実証コード）を一括公開した。作者は「教育目的であり悪用しないように」と注記しているが、コミュニティでは脆弱性の深刻度と真偽をめぐり激しい議論が巻き起こっている。一部はすでに修正済みの既知CVEに過ぎないとの指摘もある。

### Key Discussion Points

- **Retr0id**: Ghidraの脆弱性を調べたが、Swiftツールディレクトリのバイナリ上書き権限が前提であり印象は薄い。実際の攻撃シナリオとしては成立しにくい。
  - **athrowaway3z**: Nmapのパーサコード周辺の脆弱性は潜在的に深刻度が高い可能性がある。リバースシェルへの足がかりになるかもしれない。
  - **ofjcihen**: これらがすべて既知CVEを隠れ蓑にした罠で、ダウンロードしたセキュリティ研究者を狙う仕掛けだったら笑えない話だ。
- **dvt**: DockerのものはバグであってVulnではなく「0-day」の呼称は大げさ。VLCのものは単なるクラッシュ。本当に重大なものはあるのか？
  - **jeffbee**: VLCがクラッシュしたなら即座にケーブルを引き抜いてじっくり考える。それくらいシリアスに扱うべき問題だ（皮肉）。
- **doe88**: 「0-days-vibes-vulns」という新カテゴリが必要だ。AIが生成した感を漂わせるダッシュ記号から本物の脆弱性を選別するために。
  - **tyre**: 最近はどこでもem dashがAI生成の証拠と見なされる。昔は敬意の印だったのに。
- **Tiberium**: 「0-day」という言葉の意味が薄れている。多くが修正済みの既知CVEではないか？
  - **tempest_**: リポジトリには「報告時点でいずれも未報告。CVEを取得したければ自分で報告してよい」と書いてある。
- **TallGuyShort**: AIがセキュリティバグを発見できると喧伝される時代の典型例。分散コード実行サービスのジョブ送信機能が「脆弱性」として報告され続けているのと同じ構造。

## 2. [OpenRA](https://www.openra.net/)

**Score:** 619 | **Comments:** 123 | [Post](https://news.ycombinator.com/item?id=48697560)

OpenRAはRed Alert・Command & Conquer・Dune 2000をオープンソースで現代向けに再構築したRTSプロジェクト。アタックムーブ・ユニット経験値・霧の戦争といった現代的機能を追加しつつ、Windows・macOS・Linux でオンライン対戦が楽しめる。EAが旧作をオープンソース化したことも後押しし、20年前のダイヤルアップ時代から変わらぬプレイヤーベースを維持している。

### Key Discussion Points

- **liendolucas**: オリジナルと比べてOpenRAのバランスは素晴らしい。RA1では連合軍砲兵がソ連テスラコイルに歯が立たなかったが、OpenRAでは射程外から撃てる。
  - **hypercube33**: AIのバランスは逆に問題が多い。AIが砲兵の視界外から射撃できるため常に攻め続けるしかない。GitHubにフォークしてパスファインディングも修正している。
  - **abixb**: YouTubeの「Hell March」MAD動画経由でRed Alertを知った。どの軍の映像に被せてもハマるのが面白い。
- **hunter-gatherer**: 数年前にプレイしたが、80〜90年代っ子として最高。「five aces」チャンネルの大会リプレイ動画を見ることを強くお勧めする。
  - **kodefreeze**: C&Cスタイルのオリジナルリアルタイムストラテジーを開発中。デモを公開している。
- **dang**: 過去のHN掲載履歴を紹介（2025年1月122コメント、2023年9月169コメントなど）。
  - **emil-lp**: EAがC&C Red Alertをオープンソース化したことと関連している可能性。
- **999900000999**: Open RA2も存在する。RA2はRTSの頂点。EAはOpenRAを黙認しただけでなく旧作をオープンソース化した。
  - **20k**: OpenRAに対してEAが法的に取れる手段はほぼない。参照禁止を求めることすら難しい。
  - **LeoPanthera**: RA2はSteamで今も入手可能でWindows 11でも動く。LinuxではcncddrawとWINEDLLOVERRIDES設定で快適に動作。
- **patentlyze**: OpenRAは最高。20年前のダイヤルアップ時代とほぼ同じプレイヤー数を維持している。EAがフランチャイズを壊してから永久ボイコット中。
  - **spyware_suburbs**: 同じく。フランチャイズが壊されたのは悲しいが、OpenRAを作ってくれた人たちに感謝。

## 3. [Choosing a Public DNS Resolver](https://evilbit.de/dns-resolver-guide.html)

**Score:** 95 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=48702273)

プライバシー・セキュリティ・速度を基準に29種類のパブリックDNSリゾルバを比較するガイド。暗号化方式（DoH/DoT）、DNSSEC検証、運営者の管轄地域でフィルタリングできるインタラクティブツールを提供。DoH/DoTはクエリをネットワークから隠すがリゾルバ事業者からは隠せないという重要な注意点も指摘している。

### Key Discussion Points

- **JdeBP**: 四半世紀にわたって自前のプロキシDNSを運用している身としては、このようなリストを見ても心が動かない。フィルタリング機能は自分でできる。
- **Bender**: Alpine LinuxのUnboundをlibnghttp2付きでビルドしDoHサーバとして使用。hourlyでよく使うドメインをプリキャッシュしている。
- **kingo55**: 自分のネットワークへのP90レスポンスタイムを比較できる速度テスト機能があれば便利なのに。
- **Shitty-kitty**: DNScryptProxyがDNSSEC・フィルタリング・ログ記録の有無を含む広範な公開DNSサーバリストを管理している。
- **exiguus**: パブリックDNSを選ぶより自前インフラを持つべき。ADGUARDやunbound/dnsmasq/dnsdistをルーターで再帰モード動作させれば足りる。

## 4. [Marfa Public Radio Puts You to Sleep](https://www.marfapublicradio.org/podcast/marfa-public-radio-puts-you-to-sleep)

**Score:** 86 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=48703759)

テキサス州マーファのパブリックラジオが配信する「眠れるポッドキャスト」。FCC規制文書・NPR倫理規定・政府規則などをスタッフが朗読することでリスナーを眠りへと誘い、寄付を集めるユニークな取り組み。非営利局の財政支援という実用目的と、退屈な文書朗読という逆説的なコンテンツ形式が絶妙に組み合わさっている。

### Key Discussion Points

- **colemannerd**: マーファは素晴らしい街。3ヶ月前に訪れたが、訪問者にも皆フレンドリーで本格的な芸術体験ができる。
- **wxw**: 「仕事に必要な退屈な文書を読み上げて眠りへ誘う」ポッドキャスト……z z z
- **jpmontez**: Chinati Foundationで演奏した思い出がある。マーファは砂漠に創造性あふれる人々が集まる宝の場所。
- **adi_kurian**: ウェストテキサスのことを考えるだけで眠くなる。最高の意味で。
- **greybox555**: fastsleep.appも似たようなことをしている。「静かな川」のような想像を促す短いフレーズを一定間隔で流す。

## 5. [AMD Strix Halo RDMA Cluster Setup Guide](https://github.com/kyuz0/amd-strix-halo-vllm-toolboxes/blob/main/rdma_cluster/setup_guide.md)

**Score:** 72 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48703258)

AMD Strix Halo（128GB RAM搭載のAPU）2台をRDMAネットワークで接続し、vLLM（大規模言語モデルサービングフレームワーク）をマルチノードで動作させるためのセットアップガイド。Framework Desktop AI Mainboardを2枚（各$3,150）と100GbEコントローラ2枚（各$500）で構成するホームラボ向けLLM推論クラスタが焦点。

### Key Discussion Points

- **pixelpoet**: Strix Haloを2台所有しており、Redisの作者AntirezによるDS4プロジェクト（4bitクオンタイズ+2台構成）に期待している。
- **jcastro**: 3ノードのStrix Haloでローカルエージェントが維持するAgentic OS Factoryを開発中。kyuz0のコンテナ群がこの種のホームラボを大幅に加速した。
- **jmyeet**: Framework Desktop AI Mainboard×2（各$3,150）+ 100GbEコントローラ×2（$500程度）というコスト構成を詳細に分析。PCIe 4.0 x4スロットが8GB/sの帯域制限になる可能性を指摘。

## 6. [Show HN: Decomp Academy – Learn to decompile GameCube games into matching C](https://decomp-academy.dev)

**Score:** 64 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=48703412)

GameCubeのPowerPCアセンブリをCコードにリバースエンジニアリングする技術を254レッスンで学べるインタラクティブ学習プラットフォーム。本物のMetrowerks CodeWarrior GC/2.0コンパイラで答えを検証し、Star Fox Adventures・マリオパーティ4・ピクミンなど実際のデコンパイルプロジェクトの関数を題材に使用。無料・オープンソース・サインアップ不要。

### Key Discussion Points

- **sciencejerk**: スーパーマリオ64（N64）のモッディングコミュニティが、現代のプラットフォーム向けにコンパイル可能なCコードを再現したと聞いた。
- **Retr0id**: ウェブインターフェイスで気軽にデコンパイルプロジェクトに貢献できる仕組みがあればいい。ツールチェーンのセットアップが参入障壁になっている。
- **OsrsNeedsf2P**: バイナリのリバースエンジニアリングを部分的に進めることはできるのか？LLMとハーネスが「指輪物語」ゲーム（BFME）のリバースに対応できる日を待っている。
- **saturn8601**: 素晴らしい成果。Fableで90年代のWindowsソフト（ModPlug Player）をMacネイティブ化できるか試してみた。
- **jackpriceburks**（作者）: バックエンドはAWS Lambda/DynamoDB/APIGatewayとRustで実装。LambdaでCompilerを動かすのが一番の難関だった。

## 7. [Ford hired AI and sacked humans. It backfired badly](https://www.the-independent.com/tech/ford-ai-automation-human-workers-b3003787.html)

**Score:** 52 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=48703968)

Fordが人間の労働者をAI自動化で置き換えようとした結果、計画が大きく裏目に出たと報じる記事（The Independent）。記事本文は取得できなかったが、コメントからは「AIを万能薬とする経営幹部の幻想」と「実際のAI能力の乖離」が主な失敗原因として浮かび上がる。

### Key Discussion Points

- **murphomatic**: 経営幹部がAIで人的コストを解決できると夢を見ている構図はこれから頻出になる。「AIはあくまでツール」という教訓の学び方は痛みを伴うことが多い。
- **bartread**: 少なくとも彼らは失敗から学んだ点は評価できる。他の企業がFordの失敗を他山の石にできるかどうかが興味深い問いだ。
- **rmason**: Fordは1990年代に「品質が第一（Quality is Job One）」と広告していたが、過去20年で品質は大幅に低下した。2年前にFordを離れた。
- **oxonia**: 「backfired（逆効果）」（笑）
- **noisy_boy**: 「AIがうまくいかなかったから、もっと良いAIが必要だ」という結論になる可能性。人間に戻す選択肢ではなく。

## 8. [Space Shuttle Endeavour's 20-story vertical display](https://californiasciencecenter.org/about-us/samuel-oschin-air-and-space-center/go-for-stack)

**Score:** 32 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48686032)

カリフォルニア科学センターが建設中のサミュエル・オスチン航空宇宙センターにて、スペースシャトル「エンデバー」を発射台待機状態（縦向き・20階建て相当）で展示するプロジェクトの紹介。外部タンクや固体ロケットブースターと組み合わせた「スタック」状態で一般公開予定。

### Key Discussion Points

- **herdymerzbow**: タイトルを読んで「シャトルの横に20階建てのLCDディスプレイを取り付けたのかと思った（笑）」
- **whartung**: 公開が待ちきれない。閉鎖直前に訪れた際、地上から10フィートほどのところに展示されていたが、それでも圧倒された。
- **jedberg**: すべての退役シャトルを10年かけて見て回った。エンデバーを縦向きで見直すのが楽しみ。
- **bombcar**: 「Men in Black」の続編ができそう。あれは運用中だよ。

## 9. [Regular expressions that work 'everywhere'](https://www.johndcook.com/blog/2026/06/23/regex-everywhere/)

**Score:** 29 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=48672232)

sed・awk・grep・Emacsなど複数のツールにわたってポータブルに動作する正規表現のサブセットを解説するブログ記事。リテラル・文字クラス・量指定子・後方参照が共通して使えるが、Emacsでは`+`・`?`・`|`の前にバックスラッシュが必要など細かい差異がある。「高度な機能に頼るよりどこでも動くサブセットを使う」という実践的な戦略を提案。

### Key Discussion Points

- **ok_dad**: GoのstdlibはRE2エンジンを使うため後方参照をサポートしていない（置換には使えるが照合には使えない）。
- **myroon5**: JSON SchemaのドキュメントにもECMAScript互換の推奨正規表現サブセットが定義されている。
- **JdeBP**: 著者はPOSIX BRE（基本正規表現）がどこでも動くという結論に近づきながら、Single Unix Spec v8でのBRE変更点という重要なキャベアットに触れていない。
- **agnishom**: 貪欲（greedy）マッチと左端最大（leftmost maximal）マッチで同じ動作をする正規表現の探索に関する論文を書いた。
- **MathMonkeyMan**: どの正規表現言語を受け入れるか、また部分一致・前方一致・後方一致・完全一致・行単位一致のどれかを明記することに常にこだわっている。

## 10. [Show HN: Wayfinder Router – deterministic routing of queries between local and hosted LLM](https://github.com/itsthelore/wayfinder-router)

**Score:** 3 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48704373)

クエリの内容に応じてローカルLLMとホスティングLLMへの振り分けを決定論的に行うルーティングツール。プライバシーに敏感なクエリはローカルモデルへ、複雑な推論を要するクエリはクラウドへという使い分けを自動化することを目指す。まだ立ち上がったばかりのプロジェクトでコメントはないが、LLMインフラのコスト最適化という実用的な課題に取り組む。

### Key Discussion Points

コメントなし（公開直後のため）。

---

## Trends

今日のHacker Newsトップ10から浮かび上がるテーマは以下の3点に集約される。

1. **AIの現実とのギャップ**: 匿名0-dayリポジトリを巡る「AIが発見した脆弱性かどうか」の疑念、FordのAI導入失敗、そしてWayfinder RouterやAMD Strix HaloクラスタなどのLLM活用インフラが並び、AI活用の光と影が同時に示された。経営幹部の過大期待と現場の現実の乖離が繰り返し語られている。

2. **オープンソースとノスタルジア**: OpenRAが600点超えで上位2位を獲得し、90年代RTSへの郷愁とEAへの批判が活発に議論された。Decomp Academyもゲームデコンパイルコミュニティの高い関心を集めており、往年の名作を保存・再現しようとするオープンソースムーブメントの勢いが伺える。

3. **セキュリティとプライバシーへの関心**: 匿名0-dayリポジトリが最多票を集め、Wayfinder Router（ローカルLLMへのルーティング）やDNSリゾルバ選択ガイドなど、プライバシーとセキュリティを意識したツール・情報への需要が高まっている傾向が見える。
