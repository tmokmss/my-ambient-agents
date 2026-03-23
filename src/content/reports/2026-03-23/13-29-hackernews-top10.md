---
title: "Hacker News トップ10 ダイジェスト 2026-03-23"
date: "2026-03-23T13:29"
category: "summary"
summary: "EUへの移住、RSS復権、RollerCoaster Tycoonの最適化、GitHubの可用性問題など今日のHNトップ10を解説"
tags: ["hackernews", "tech", "summary", "daily"]
---

## 1. [PC Gamer recommends RSS readers in a 37mb article that just keeps downloading](https://stuartbreckenridge.net/2026-03-19-pc-gamer-recommends-rss-readers-in-a-37mb-article/)

**Score:** 682 | **Comments:** 322 | [Post](https://news.ycombinator.com/item?id=47480507)

PC GamerがRSSリーダーを紹介する記事を公開したが、その記事自体が37MBという巨大なサイズで、さらに閲覧中の5分間で約500MBもの広告データを追加ダウンロードし続けるという皮肉な状況が話題になった。Stuartはこの体験を批判し、NetNewsWireやUnreadといったRSSリーダーの使用でこうした広告過多のウェブ体験を回避できると主張する。まさにRSSリーダーの必要性を自ら実証した記事として多くの支持を集めた。

### Key Discussion Points

- **MBCook**: 「記事を書き始めてから5分で、サイトは新たな広告を500MB近くダウンロードした」と指摘し、タイトルが本質を見逃していると述べた。
  - **timpera**: 「ランダムな記事を読む際に5分でバックグラウンドで500MBをダウンロードするのは、低スペック端末やデータ従量課金ユーザーへの非常に無礼な行為だ」と批判。
  - **PunchyHamster**: 「そのサイトを動画でストリーミングした方が、ブラウズするよりデータ量が少ない」とブラックユーモアで応じた。
- **userbinator**: 「参考として、Windows 95のインストールサイズが約40MBなので、そのページをロードするだけでWindows 95が1本ダウンロードできる」と対比。
  - **Aurornis**: iPhoneの写真1枚でWindows 95インストールを超える場合もあることを指摘し、単純な比較に異議を唱えた。
  - **dehrmann**: 「4Kデスクトップ壁紙は8MB、4分の音楽ビデオは約100MBになる。単純比較は公平ではない」と補足。
- **johnwalkr**: 日本や欧州でデータ制限スロットリング（100kbps〜1Mbps）を15年経験した立場から、現在のウェブはほぼ使用不能になっていると嘆いた。
- **WarOnPrivacy**: uBlock OriginをFirefoxに入れると5.6MBで読み込みが止まり、ページ下部までスクロールしても追加3MBで済んだと報告。
  - **mrighele**: 解像度（1080p vs Retina）によって体験が大きく異なると補足。
  - **Bengalilol**: RSSなら1回で300〜1800記事を読めると対比。

---

## 2. [The gold standard of optimization: A look under the hood of RollerCoaster Tycoon](https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/)

**Score:** 432 | **Comments:** 122 | [Post](https://news.ycombinator.com/item?id=47480886)

1999年のゲーム「RollerCoaster Tycoon」がアセンブリ言語で書かれていることは有名だが、オープンソース再実装「OpenRCT2」を通じて具体的な最適化手法を解析した記事。値域が限られる変数には小さなデータ型を使い、標準的な乗算の代わりにビットシフト演算を多用するなど、2の累乗を意識した設計思想が随所に見られる。パフォーマンスへの徹底したこだわりが、当時のハードウェア制約の中で驚異的なゲーム体験を実現していた。

### Key Discussion Points

- **netcoyote**: BlizzardのWarcraftやStarCraftも64・128・256ブロックという2の累乗マップサイズを採用し、旧プロセッサに最適化されていたと紹介。アセンブリ活用と実用性のバランスを語った。
  - **CursedSilicon**: StarCraftのソースコードを発見したRedditユーザーが、公開せずBlizzardに返却してグッズと交換したことを惜しむ声。EAがC&Cのソースを公開したことと対比。
  - **Lorin**: Blizzardの初期開発者に「Lost Vikingsでの子ども時代の思い出に感謝。デモシーンに関わったことは？」と問いかけ。
- **applfanboysbgon**: 「数値特性の最適化は2026年のゲームデザインにも依然重要」と主張。品質の高い開発者はこれを考慮しているとした。
  - **cogman10**: 現代CPUではキャッシュミスのペナルティ（100〜1000サイクル）が支配的で、命令レベルの最適化よりメモリレイアウトの方が重要と反論。
  - **timschmidt**: 数値計算の精度・速度・ストレージのトレードオフは未解決問題であり、インターバル算術や記号計算など代替手法もあると示した。
- **youarentrightjr**: 「現代のコンパイラは2の累乗による除算を必ずシフトに最適化する」と指摘。
  - **mid-kid**: ビットシフトは当時の業界で広く使われていた基本手法であり、コンパイラも自動で処理すると補足。GCCの最適化の例を挙げた。
  - **dmitrygr**: 「符号なし整数ではシフトになるが、符号付きではCの約束する丸め方に合わせ少し多くの処理が必要」と詳説。
- **HelloUsername**: 作者Chris Sawyerの2024年インタビューや25周年回顧動画など追加リソースを紹介。
- **ionwake**: 子どもの頃、RCTが他とは全く違うゲームだと直感的に分かったときの興奮を振り返った。

---

## 3. [Migrating to the EU](https://rz01.org/eu-migration/)

**Score:** 345 | **Comments:** 262 | [Post](https://news.ycombinator.com/item?id=47487436)

筆者が地政学的リスクとデータ保護への懸念を動機に、米国系サービスからEUベースの代替サービスへ段階的に移行した体験記。メールをUberspace、ドメイン登録をhosting.de、コードリポジトリをCodebergに移し、スマートフォンにはGrapheneOSを採用した。一部Googleサービスは互換性のため残しているものの、EUでのデジタル主権確立を着実に進めている。

### Key Discussion Points

- **darthcloud**: 「米国企業に直接お金やデータを渡すことを避けたい」という動機でGmailをProton Mail、Google MapsをTomTomに切り替え。Infomaniak経由のドメイン移行とVivaldiブラウザを高評価した。
  - **avazhi**: 「挙げたサービスの半分はApple（米国）かProton（米国が実質的な管理）であり、目的と矛盾している」と鋭く指摘。
  - **wolvoleo**: Protonの暗号化より「ブリッジなしの素のIMAP」を好むとしてInfomaniakに興味を示しつつ、踏み切れずにいると述べた。
- **dinowars**: mailbox.orgを長期愛用しており、複数カスタムドメインでの送信はThunderbirdで簡単に設定できると説明。筆者が「回避策」と呼ぶ操作が標準機能ではないかと疑問提起。
  - **akvadrako**: Mailboxの問題点として「SPF/DKIM/DMARCが適切に設定されておらず、ドメインのなりすましが可能」というセキュリティ懸念を指摘。
  - **scrollop**: 「自分は問題なく動作している」と反論。
- **pschastain**: EU諸国では検察官や警察が司法審査なしに捜索令状を発行できる場合があることへの懸念を提起。
  - **s_dev**: 「米国はICEが米国市民を法的措置なしに殺害するなど権威主義化しており、EUへの懸念は的外れなFUD」と一蹴。
  - **throw0101c**: EUの検察官独立性についてEUCJの判例を引用し、実態は問いかけほど問題ではないと説明。
- **bkolobara**: プライベートリポジトリ向けEU版GitHubとして「lubeno.dev」を紹介（シャーメレスプラグ）。

---

## 4. [POSSE – Publish on your Own Site, Syndicate Elsewhere](https://indieweb.org/POSSE)

**Score:** 224 | **Comments:** 48 | [Post](https://news.ycombinator.com/item?id=47486726)

POSSEはIndieWebが提唱する「まず自分のサイトに投稿し、それをSNSに配信する」というアプローチ。自分のドメインに正規URLを保持したまま、読者が好むプラットフォームでもコンテンツを届けることができる。BridgyなどのツールでSNSへの自動配信も実現でき、検索ランキングの向上や長期的なコンテンツ所有権の確保に役立つ。

### Key Discussion Points

- **rednafi**: このアプローチを実践しており、コメント欄は管理負担が大きいためブログに設けず、RedditなどのSNS上のディスカッションにリンクする方式を採用していると説明。
  - **alemwjsl**: rednafi氏のGoに関するブログ記事を絶賛し、「一度読めば記憶に残る良い内容」とコメント。
- **tomhow**: 2018年から2026年にかけてHNでPOSSEが複数回話題になってきた歴史を紹介。
  - **ui301**: POSSEの逆であるPESOS（先にSNSへ投稿）を「スターウォーズの帝国に対するレジスタンス」と表現し、「POSSE、これが正しい道」と締めた。
- **nicbou**: 「自分の土地に建てたものを所有したい」との動機でPOSSEを実践中。クロスポストは手動で手間がかかるが、公開作業をするメリットはあると述べた。
  - **theshrike79**: SNSプラットフォームがPOSSEを意図的に妨害していること（Facebookはリンクを含む投稿を低評価）を指摘。
- **taurusnoises**: POSSEは「会話重視」ではなく「出荷重視」になりがちで、非人称的でスパム的な印象を与えると批判。
  - **keybits**: atprotoがPOSSEのような個人出版を効率化すると紹介。
  - **fsflover**: 「筆者は読者を特定のプラットフォームに縛り付けていない」と肯定的に評価。
- **merelysounds**: パーマリンク短縮なしのフルURLを好む理由を説明し、URLからコンテンツの内容が分かることを重視すると述べた。
  - **chrismorgan**: パーマショートリンクは「メールで使いやすい」「覚えやすい」など言われるが根拠が薄く、正規URLを改善する方が良いと批判。

---

## 5. [Tin Can, a 'landline' for kids](https://www.businessinsider.com/tin-can-landline-kids-cellphone-cell-alternative-how-2025-9)

**Score:** 192 | **Comments:** 139 | [Post](https://news.ycombinator.com/item?id=47454647)

「Tin Can」は子ども向けに設計された固定電話型デバイスで、スマートフォンの代替として登場した。ソーシャルメディアや複雑な機能は排除し、通話機能に特化することで子どもをデジタル過多から守ることを目的としている。スマートフォンを子どもに与える年齢を遅らせたい親から注目を集めている。

### Key Discussion Points

- **ripplefringe**: 8歳の子にOomaの固定電話を導入して1年、子ども同士が自分で約束を取り付けられるようになり非常に良かったと報告。お礼の電話をかけることも覚えたと述べた。
  - **mikepurvis**: 2人の子が共用スマートフォンを持つが、12歳の子がゲーム中のDiscordでクラスメートと交流しており、これは音声通話の現代版として有意義だと述べた。
  - **mememememememo**: 「固定電話の配線工事なしに、通話専用SIMのNokiaダム端末では代替にならないか？」と質問。
- **selectively**: 「スマートフォンは良いもので、過度に悪者扱いすべきではない」とシンプルに反論。
- **bit_logic**: iPhoneの「スクリーンタイム」機能を活用した厳格なペアレンタルコントロールを紹介。許可アプリのホワイトリスト設定、常時ダウンタイム、App Storeのブロックなどで事実上の「子ども用電話」に変えられると提案。
  - **throwaway_19sz**: 「高額なガジェットを買い与えないことより、ボタン数回で制限を解除できてしまう方が親子双方にとって難しい」と指摘。
  - **benchloftbrunch**: 「年長の子には2000年代のダム携帯が最善策。通話・SMS・カメラ・音楽プレイヤーだけで十分」と提案。
- **mrweasel**: Business InsiderがTin Canへの直接リンクを貼らず自サイト内リンクだけなのは残念と批判。
- **pino83**: 子どもへのスマートフォン規制を議論する一方で、大人自身も同様の問題を抱えていることを忘れがちだと指摘。

---

## 6. [GitHub appears to be struggling with measly three nines availability](https://www.theregister.com/2026/02/10/github_outages/)

**Score:** 148 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=47487584)

2026年2月、GitHubはActionsやプルリクエスト、通知、Copilotなど複数のサービスで障害を起こし、通知が50分以上遅延した。The Registerの調査によれば、2025年のある時点でGitHubの可用性が90%を下回ることもあったとされ、エンタープライズクラウド顧客に約束する99.9%のSLAとは大きく乖離している。

### Key Discussion Points

- **cedws**: 「GitHubはAIを押し込むことに夢中な一方でプラットフォーム自体が崩壊しており、Actionsのセキュリティ問題が悪用されてAqua Securityの侵害後に数千のCIランに影響を与えた」と厳しく批判。
- **embedding-shape**: 2025年のAzureへの移行発表で「可用性が最優先」と言っていた開発者向けの言葉を引用しつつ、実際には逆方向に進んでいると皮肉。
- **Alifatisk**: GitHubのステータスページを見て「こんなにひどい結果を実際に目の当たりにしたのは初めて」と驚愕。
- **mikeve**: 「90%という数値は全サービスが同時に機能している割合で、ユーザーは全サービスを同時に必要としない」と擁護的な見方を示した。
- **yifanl**: サービスダッシュボードを共有し、「どのサービスコンポーネントも2ナインの稼働率すら怪しい」と懸念。

---

## 7. [Attractive students no longer receive better results as classes moved online](https://www.sciencedirect.com/science/article/pii/S016517652200283X)

**Score:** 112 | **Comments:** 107 | [Post](https://news.ycombinator.com/item?id=47488015)

ScienceDirectに掲載された研究で、授業がオンラインへ移行したことで、従来見られていた「外見が良い学生ほど好成績を得やすい」という傾向が消失したと報告。外見による偏見がオンライン環境では薄れることを示す実証的な知見で、パンデミック期の教育データを活用した分析。

### Key Discussion Points

- **TrackerFF**: かつて太っていて体重を落とした人の経験を引き合いに、外見が社会的扱いを劇的に変えること、そしてそれが自信の蓄積にも影響することを説明。
- **kxrm**: 2003年から電話面接のみで採用した結果、外見に関わらず多様な人材を採用できたと報告。ビデオ会議で外見バイアスが再導入されていると批判し、音声のみの面接を推奨。
- **PeterStuer**: 「女性の場合、オンライン授業期間中に写真と実際の外見の乖離が生じた可能性がある（グルーミングやファッションの変化）。これが美的プレミアムの低下に寄与したかもしれないが、論文はそのデータを持っていなかった」と分析。
- **olalonde**: 大学で授業後に教授と話したり、オフィスアワーに行く学生グループは試験のヒントをもらいやすく、これも成績差の原因かもしれないと述べた。
- **crims0n**: 「外見から来る優位性は、実は外見そのものではなく社会的スキルの高さが原因ではないか」と疑問を呈した。

---

## 8. [Can you get root with only a cigarette lighter? (2024)](https://www.da.vidbuchanan.co.uk/blog/dram-emfi.html)

**Score:** 110 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=47453462)

圧電素子式BBQライターを使った自作の電磁パルスツールでノートPCのDDRメモリバスにフォルト・インジェクションを行い、ローカル権限昇格を実現したセキュリティ研究。高価な専門機器なしに高度なハードウェアハッキングが可能なことを示し、ローコストなEMFI攻撃の可能性を実証した。JEDEC仕様書のペイウォールへの批判も盛り込まれている。

### Key Discussion Points

- **Retr0id**: 後日談として「LPDDR5/LPDDR4でも動作確認。ARMプラットフォームでも有効。Nintendo Switchカーネルにも応用可能だが、Switch 2ではメモリ暗号化により1ビットフリップでキャッシュライン全体が破損するため同手法は機能しない」と詳細な追記を残した。
- **nom**: 「根（root）を取るなら昔は90年代の自販機をライターの赤外線フラッシュで操作して無料コーラをゲットしていた」とユーモラスに応じた。
- **b00ty4breakfast**: 「読む前の予想：圧電式ライターで大きなEMFスパイクを当てるのでは」と予測を披露。
- **ted_dunning**: 「sysadminの手をライターにかざして、パスワードを教えてもらうのが一番簡単な侵入方法」とソーシャルエンジニアリングをジョークで示唆。
- **rkagerer**: 研究に必要なJEDECの仕様書が全てペイウォールの背後にあることへの皮肉を指摘。

---

## 9. [Bombadil: Property-based testing for web UIs by Antithesis](https://github.com/antithesishq/bombadil)

**Score:** 27 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=47436592)

AntithesisがオープンソースのWebUI向けプロパティベーステストツール「Bombadil」を公開。自動でUIを探索しながらバグを発見する手法を採用しており、従来のシナリオベースのテストを補完するアプローチ。

### Key Discussion Points

- **IanCal**: プロパティベーステストのUIへの応用に興味を持ちつつ、「アクションはどう指定するのか」「入力はランダム生成か」「バグを含むUIのデモを作ってほしい」などの技術的な質問を投げかけた。
- **owickstrom**: 「著者です、質問にお答えします！」と積極的にコミュニティと対話。

---

## 10. [General Motors Is Assisting with the Restoration of a Rare EV1](https://evinfo.net/2026/03/general-motors-is-assisting-with-the-restoration-of-an-1996-ev1/)

**Score:** 26 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=47458248)

1996年製EV1（VIN 212）がジョージア州の車両押収場で発見・競売後、YouTubeチャンネル「Questionable Garage」とGMの協力で復元プロジェクトが開始。EV1は30周年にあたる2026年11月の完成を目指す。GMはミシガン州ウォーレンの技術センターでドナー車からの部品提供と技術支援を行っている。

### Key Discussion Points

- **rdtsc**: 「GMは"EV1が現在のEV全てのルーツ"と言いながら、かつてはそのEV1を回収・破壊した。そのGMが今は復元を支援している」という皮肉を指摘。
- **nubinetwork**: GMのEVに対する180度の方針転換に驚きを表明。以前はモーターを無効化しバッテリーを廃棄するよう強制していたのに、今では博物館展示や販売上の理由から方針が変わったのではと推測。
- **kotaKat**: BrightDropの終了やBoltの廃止・復活・再廃止など、GMのEV戦略の迷走を引き合いに、今回の支援についても懐疑的な見方を示した。

---

## Trends

今日のHNトップ10を俯瞰すると、以下のテーマが浮かび上がる。

1. **デジタル主権とEU回帰**: EUへの移住やPOSSEなど、米国巨大テックへの依存を減らし自らがデータを管理しようとする動きが強くなっている。地政学的な不安定さがデジタルインフラの選択にも影響を与えている。

2. **ウェブの肥大化とRSS復権**: PC Gamerの37MB記事問題は、広告過多・JavaScript過多のウェブの象徴的な事例。それへのアンチテーゼとしてRSSが改めて評価されている。

3. **低レベル最適化への郷愁と学び**: RollerCoaster Tycoonのアセンブリ最適化への注目は、現代の「速ければ何でもよい」開発文化への反省とも読める。ハードウェアを深く理解した職人的開発への敬意が垣間見える。

4. **プラットフォームの信頼性危機**: GitHubの可用性問題は、AI機能追加に注力する一方でコアインフラが置き去りにされているという、大手プラットフォーム全般に通じる問題を示している。

5. **子どものテクノロジー利用**: Tin Canの話題は、スマートフォン依存の問題が次世代にどう影響するかという議論を呼び起こしており、親世代の関心の高さを示している。

6. **ハードウェアセキュリティのアクセシビリティ**: 100円ショップで入手できるライターでルート権限が取れるという話題は、ハードウェアハッキングの敷居が下がっていることを示し、セキュリティ意識の啓発につながっている。
