---
title: "Hacker News トップ10まとめ（2026年9月23日）"
date: "2026-09-23T04:34"
category: "summary"
summary: "AIモデル新発表3件が上位独占、FBIハッキングやFoxPro復活なども話題に"
tags: ["hackernews", "AI", "セキュリティ"]
---

## 1. [Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)

**Score:** 1330 | **Comments:** 864 | [Post](https://news.ycombinator.com/item?id=49803892)

Anthropicが2026年9月22日、新モデル「Claude Opus 5.5」を発表した。Claude Fable 5.1と同等の性能をOpus 5より40%安いコストで実現し、入出力トークン価格を20%、キャッシュ読み込み価格を60%削減。プロンプトインジェクション耐性の向上など安全性面の改善も含まれる。

### Key Discussion Points

- **sailingparrot**: 発表文の冒頭で「フロンティアのペース配分」を掲げながら、直後に大幅な性能向上を具体的数字で誇示している点の矛盾を指摘。
  - **gricardo99**: 今回のリリースが本当にAnthropicの最善のモデルなのか、意図的に抑えたものなのか外部からは分からないと反論。
  - **mukmuk**: 「ペース配分」という言葉自体がClaudeが生成したような胡散臭い表現だと皮肉。
  - **dmazin**: 性能はFableに近く、既存能力をよりアクセスしやすくすることに注力しているだけではと分析。
- **GodelNumbering**: 価格表を提示し大幅値下げを指摘。Opus 5はOpenRouterで最も使われている（支出額ベース）モデルであり、性能向上と同時に値下げするのは市場やAnthropicの収益性について何かを物語っていると分析。
  - **kphorn**: Fableは計算コストが高いため、Opus 5.5でコストを削減できたなら値下げしてそちらへ利用を誘導する動機が強いはずと反論。
  - **AJ007**: 「値下げ」と言えるのは単価×トークン消費量が減った場合のみと注意喚起。
- **mcintyre1994**: 発表文にある「Opus 5.5はより自然にコミュニケーションする」という主張に注目。Opus 5/Fableの文体が合わずAstraに移行していたため、この主張が本当か試したいとコメント。
  - **ascendantlogic**: 1時間使った限りではOpus 5と同様に冗長で、「load bearing」という表現を4回も使ったと不満。
  - **sdthjbvuiiijbb**: 逆に自分の利用では明らかに文章が改善されており、Opus 5ほどイライラしなくなったと肯定的評価。
- **wg0**: 自分はDeepSeek v4.1(high)で満足しており、複雑なUIレイアウト変更タスクをサブエージェント生成・スクリーンショット検証込みで25分・0.07ドルで完了させた例を紹介。
- **consumer451**: ペリカンのSVGアニメーション生成テストで、Opus 5.5(high)はOpus 5と比べて明確な改善が見られたと報告（claude.ai経由で、生のAPIコールではない点に留意）。

## 2. [GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)

**Score:** 1321 | **Comments:** 647 | [Post](https://news.ycombinator.com/item?id=49805509)

OpenAIが2026年9月22日、新モデル「GPT-6 Sol」と「GPT-6 Luna」を発表した。日常業務向けに性能とコストのバランスが異なる2つのフロンティアモデルを提供し、旧世代のGPT-5.6版に比べ約50%の値下げが行われた。

### Key Discussion Points

- **simonw**: 恒例のペリカンSVG生成ベンチマークでGPT-6 Luna/Solの結果を公開。GPT-5.6系はGPT-6系よりも明るい色をデフォルトで使う傾向があるなど、比較グリッドから興味深い違いが見えると指摘。
  - **gizmodo59**: GPT-6 Lunaはタスクの多くでパレート最適に近く、クローズドソースモデルとしては破格のコスパだとし、OpenRouterで今月最も使われているモデルであることを紹介。
  - **matznerd**: モデル名よりconversation IDが目立つブログのUIについて改善を提案。
  - **Cu3PO42**: 両モデルとも思考レベルが上がるにつれ画像品質が「ほぼ使えない」から「かなり良い」まで明確に向上する点が他モデルより顕著だと指摘。
- **m_fayer**: GPT-5.6 Solは自分にとって「スイートスポット」で、意思疎通のスタイルやエンジニアリング感覚が肌に合い初めて愛着を持てたモデルだったとし、後継モデルが技術的に優れていても同じ感覚を得られるか不安だと吐露。
  - **capital_guy**: 同意しつつ、AstraやFableを含め自分が使った中で最高のコーディングモデルだとし、GPT-6 Solが半額の5.6であれば理想的と期待。
  - **NorthSouthNorth**: Astraが使える環境でも9割のタスクでは依然5.6 Solを好んで使っていると同調。
- **jeffnash**: Claude CodeとCodex Proの使い分け基準として、利用上限・コンテキストウィンドウ・公式ハーネス外での利用可否の3点を比較し、現状はCodexが優位と分析（後に20xプランの新規受付停止に気づき比較が無意味になったと追記）。
  - **glub**: 7月以降は状況が逆転しており、$200プランではAnthropicの方が実質的な提供量が多いと反論。OpenAIは$200プランの新規契約を停止しサブスク乗り換えを防ぐ戦略に出ていると指摘。
  - **noname120**: CodexのGUIからChatGPT ChatモデルをMCP的に自動呼び出しできる点や、1Mコンテキストのワークアラウンドが復活している点を補足。
- **leokennis**: 「平均的なユーザー」から見ればChatGPTは既に十分すぎる製品を提供しており、月23ドルの価値は非常に高いと評価。
  - **maxnevermind**: 現在はまだ「ハネムーン期」で、LLM運用コストの高さを考えるとエンシッティフィケーション（改悪）がいずれ来ると予想し、収益試算を提示。
- **pookieinc**: Opus 5.5とGPT-6の価格表を比較し、OpenAIのモデル品質と値下げペースには驚異的だとコメント。

## 3. [OpenAI GPT–6 Astra breaks Enigma message that has resisted solution since 2005](https://www.cryptocellar.org/bgac/the-mvueh-break.html)

**Score:** 601 | **Comments:** 373 | [Post](https://news.ycombinator.com/item?id=49801324)

GPT-6 Astraが、2005年から未解読だったドイツ軍Enigma暗号メッセージ「MVUEH」の解読に成功した。関連メッセージのヒントから地名「ROSENOW」を手掛かりとしてPythonとC++でEnigmaシミュレーターとBombe（解読機械）を独自開発し、鍵と平文を発見。専門家は人間の研究者なら数週間〜数ヶ月を要する作業だと驚嘆している。

### Key Discussion Points

- **mmsc**: 実際の暗号文と、解読された平文（「至急、行軍経路を報告されたし。我はローゼノフ、ローゼノフにあり」の意）を紹介。
- **podgorniy**: 別のLLM（Gemini 3.8 Flash）でも同じ暗号文を45分のワンショットで解読できたと報告し、詳細な解読過程を共有。
- **tantalor**: 「完全に自力で（entirely on its own）」という表現と「PythonとC++でEnigmaシミュレーターを独自開発した」という説明が矛盾していると指摘し、生成されたコードにどれだけ新規性があるのか疑問視。
  - **adrianmonk**: 「on its own」は追加のプロンプトや誘導なしにという意味であり、独自性の有無は論点ではないと解釈。
  - **voiper1**: シミュレーター自体を一から構築させる方が「まず解けと言われて実験室ごと作る」という意味でむしろ印象的だと擁護。
  - **WithinReason**: 元記事の該当箇所を引用し、「GPT-6 Astraが完全に自力でやったことが最も驚くべき点」という主張を確認。
- **jtrn**: 正しいタイトルは「研究者がAstraの助けを借りて解読した」であるべきとし、このメッセージがその日の鍵と異なる独自の鍵を使っていたなど技術的難しさの背景を説明。2日間の人間とAstraの協働であり、記事が人間の役割を軽視しすぎていると批判。
  - **serbuvlad**: カスパロフのセンタウルチェスの例を引き合いに、「人間参加型」は現状の限界による過渡的なものに過ぎないかもしれないと補足。
- **peesem**: YouTubeチャンネルVeritasiumが同時期にEnigma解読の動画を公開しており、動画末尾で別の未解読メッセージも紹介されていたとタイミングの偶然を指摘。

## 4. ['We hacked the FBI:' Hackers say they have data on all FBI employees](https://www.404media.co/we-hacked-the-fbi-hackers-say-they-have-data-on-all-fbi-employees/)

**Score:** 489 | **Comments:** 346 | [Post](https://news.ycombinator.com/item?id=49805278)

ハッキング集団「ShinyHunters」がFBI関連サービスに侵入し、全FBI職員・応募者の氏名・住所・電話番号・配偶者情報などを盗んだと主張している。5,000人分のサンプルデータを404 Mediaが確認しており、職員やその家族への身体的脅威や外国諜報機関による悪用など、重大な国家安全保障上の懸念が生じている。

### Key Discussion Points

- **jacobgold**: 大規模データベースを安全に保てている組織はもはや存在しないとし、2015年のOPMハック（中国による2210万人分の米政府職員記録流出）を引き合いに出す。
- **reactordev**: バトルスターギャラクティカ（2004）でガラクティカがネットワーク化されたコンピュータを持たない理由（サイロンにハッキングされないため）という描写を連想。
  - **ishouldstayaway**: それが作品の根幹設定であり、旧式艦だから生き残れたという話に発展。
  - **dylan604**: 作中でもコンピュータをネットワーク化した途端すぐにハッキングされる描写があると補足。
  - **jshier**: その設定自体、個別システムへの侵入は防げないため実はあまり筋が通っていないと分析。
- **rdtsc**: FBIへの恐喝を目論むShinyHunters代表の発言（「金銭目的ではない」）を引用し、皮肉交じりに対抗策を提案。
- **Cider9986**: ShinyHuntersがサイト改ざんで残した「PSA - READ THIS NOW」文書のリンクとスクリーンショットを共有。
- **tencentshill**: 専門人材を解雇し無能な人材を採用したことの結果ではないかと皮肉。
  - **baggachipz**: DOGEとKash Patelが「難攻不落の要塞」を作ると思っていたのにと皮肉を重ねる。
  - **rayiner**: 目新しい話ではなく2015年のOPMハックと同様の構図だと補足（自分のデータも流出したと言及）。

## 5. [Microsoft killed FoxPro in 2007. Anyway, here's FoxPro revived](https://foxscript.org/)

**Score:** 233 | **Comments:** 149 | [Post](https://news.ycombinator.com/item?id=49808023)

「FoxDev Studio」は、Visual FoxPro 9で書かれたレガシーアプリケーションをコード変換や移行なしで現代のコンピュータ上で動作させるプロジェクト。RustベースのWebAssembly仮想マシンにより32ビットの制限を超えた64ビット環境での実行を実現し、「FoxScript」拡張でラムダ式やHTTPサーバー機能を追加できる。

### Key Discussion Points

- **mikestew**: FoxProのDBC（データベースコンテナ）設計には重大なセキュリティホールがあり、全ユーザーに読み書き権限が必要な上、ストアドプロシージャがプレーンテキストで保存されているためテキストエディタで任意コード実行が可能だと指摘。20年前に自らFoxチームでこの不具合を報告したが修正されなかったと証言。
  - **EvanAnderson**: オハイオ州のある郡選挙管理委員会の有権者登録データベースが今もVFP製で、ファイル共有フォルダに直接DBFファイルが置かれ全ユーザーが読み書き権限を持つ状態だと暴露。
  - **merb**: FoxProはMSSQL＋OLEと組み合わせて行レベルセキュリティを追加することも可能だと補足。
  - **chasil**: 同様の懸念はSQLiteにも当てはまるのではとし、dBASE言語をSQLiteファイル上で動かす方が望ましいと提案。
- **progmetaldev**: 2006年、医師が独自に組んだVisual FoxProの患者管理システムがネットワークドライブ上でファイルロックの問題を頻発させていたため、.NET WinForms＋ASP.NETのクライアント/サーバー構成に移行させた経験を共有。
- **EvanAnderson**: 低い参入障壁と高い開発生産性は魅力的だが、現代の「なんちゃってネットワークドライブ」越しにDBFファイルへアクセスする構成は破綻しやすいと指摘。
  - **nradov**: 医療系の「カンブリア爆発」的な自作システムはかつて商用製品の台頭で廃れたが、AIコーディングツール＋ヘッドレスEHRプラットフォームの登場で同じサイクルが再来すると予測。
  - **ASalazarMX**: FoxProはローカルネットワークが一般的でなかった時代のシングルユーザー向けIDEであり、マルチユーザー化はさほど難しくないはずと分析。

## 6. [What California is learning from solar panels built over irrigation canals](https://www.kqed.org/science/2002033/heres-what-california-is-learning-from-solar-panels-built-over-irrigation-canals)

**Score:** 159 | **Comments:** 247 | [Post](https://news.ycombinator.com/item?id=49796379)

カリフォルニア州の試験プロジェクト「Project Nexus」は灌漑用水路の上にソーラーパネルを設置し、水の蒸発を抑えつつ再生可能エネルギーを発電する。狭い水路100マイル分の設置で年間2,700世帯分の水を節約でき、広い水路では11,000世帯分に達する。日よけ効果で藻の発生や保守費用も減らせる一方、未開発地での太陽光開発を避けられる利点もある。

### Key Discussion Points

- **nbf_1995**: 水路全体を覆うだけなら普通の畑にパネルを設置し安価な屋根をかける方が銅使用量や送電線コストの面で効率的ではと疑問視。ただしカリフォルニアの厳格な許可制度により、既開発地の方が未開発地より許可取得が6倍速いことが最大の理由だと認める。
  - **burnte**: 畑を使うと別用途に使える土地を消費してしまうため、既に価値を生んでいない水路上に設置する方が土地利用として合理的だと反論。
  - **throwup238**: 水路の面積計算が実際の形状ではなく地役権面積ベースで行われている可能性を指摘し、主要な水路はシエラネバダ山脈を通っており（州最大の電力消費源である揚水のため）、末端部だけに設置しても焼け石に水だと分析。
- **prometheus1992**: カリフォルニアは電力消費量がスペイン一国分に匹敵する規模ながら再生可能・ゼロカーボン電源比率が62%に達している点に驚き。
  - **cco**: 執筆時点でカリフォルニアの電力網の約25%がバッテリーで賄われていることに驚いたと補足。
  - **40four**: その代償としてカリフォルニアはハワイに次いで全米2位の高電気料金（約$0.34/kWh）だと指摘。
- **seltzered_**: 「カリフォルニアの水路網は州の生命線」という記述に対し、そもそもなぜこのような水路システムに至ったのか、土地に水が浸透し保水される代替案との比較や水利権の所在を問うべきだと問題提起。
- **happyopossum**: 水路を完全にパイプ化できるなら、なぜ屋根をかけて覆う発想に至らないのかと行政の消極性を皮肉。

## 7. [ReBarUEFI: Resizable BAR for almost any UEFI system](https://github.com/xCuri0/ReBarUEFI)

**Score:** 97 | **Comments:** 31 | [Post](https://news.ycombinator.com/item?id=49781862)

公式には対応していないシステムでResizable BAR（GPUのVRAM全体へのCPUアクセスを可能にしパフォーマンスを向上させるPCIe機能）を有効化するUEFI DXEドライバ。UEFIファームウェアを改変してモジュールを追加し、PCI列挙時のGPUメモリ割り当てを拡張することでフレームレート向上などの効果をもたらす。

### Key Discussion Points

- **abrookewood**: Resizable BARの基本説明として、従来256MBだったVRAMアクセス制限を撤廃し、ゲーミング性能を5〜15%向上させる機能だと解説。
- **zir_blazer**: こうしたBIOS改造への関心からCoreboot（プロプライエタリなツール不要でファームウェア機能を拡張できる）に興味を持つようになったとし、古いファームウェアへのNVMeブート対応追加なども似た事例として紹介。
- **bigwheels**: READMEを読んでもReBARの用途がよく分からないとし、簡単な説明を求める。
- **marcus9999**: 古いワークステーションマザーボードで「above 4G decoding」オプションがBIOSメニューにすら存在しない問題を実際に解決してくれる有用なツールだとし、X79ボードで手動パッチが必要だった事例を紹介。
- **gregoryl**: 会社のDellノートPCで試したいが、ハードウェア的には対応していてもDellがReBARを有効化していない（ドライバ/ファームウェアの問題）ため難しいだろうとぼやく。

## 8. [US criticises Australia's proposed algorithm opt-out laws as 'censorship'](https://www.bbc.com/news/articles/cqj3dgy8x3vro)

**Score:** 82 | **Comments:** 60 | [Post](https://news.ycombinator.com/item?id=49810829)

米国が、オーストラリアの「アルゴリズムオプトアウト」法案を「検閲」だと批判した。同法案はテック企業に対し、有害コンテンツからユーザーを守るためアルゴリズムを無効化する選択肢の提供を義務付け、違反には高額な罰金を科す。米大使館はキャンベラへの異例の意見書で「harm」や「risks」の定義の曖昧さへの懸念を表明し、アルバニージー首相は「政府に権限を集中させるのでなく個人に権限を戻すものだ」と反論している。

### Key Discussion Points

- **nomilk**: 法案名「アルゴリズムオプトアウト」は婉曲的なラベルで、実際には通信大臣のような官僚が個別コンテンツを「有害」と指定しネットから排除できる仕組みだと批判。昨年のU16 SNS禁止の際、緊急時に若者へ情報が届かなかった例を挙げる。
  - **tensor**: むしろ逆で、アルゴリズムは「自由だが公正ではない」発言力の格差を生むため、公正な発言のためにはアルゴリズムなしで全員が対等な一票を持つべきだと反論。
- **nonethewiser**: 記事は「デジタル・デューティ・オブ・ケア法」への米国の批判と「アルゴリズムオプトアウト条項」への批判という別々の話を混同していると指摘。
  - **thwarted**: 米国の意見はオーストラリアにとって重要ではないとし、アルゴリズムなしの時系列表示を選べるようにすることへの「影響評価」要求を痛烈に皮肉る。
- **chrismsimpson**: 米政権の介入はかえって平均的なオーストラリア人有権者の改革支持を強めるだけだろうとコメント。

## 9. [Transit rewards (Waymo pays you to take the train)](https://waymo.com/blog/2026/09/transit-rewards/)

**Score:** 26 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=49811065)

Waymoが2026年9月、サンフランシスコ・ベイエリアで新プログラム「Transit Rewards」を発表した。WaymoアプリにVisaカードを紐付け、2時間以内にWaymo乗車と対象公共交通（27事業者）のタップ決済利用を組み合わせると、次回Waymo利用に使える$2.85のクレジットを獲得できる。まずは従業員向けに開始し、数週間以内に一般公開予定。Caltrain駅に専用駐車スペース40台分もリースしている。

### Key Discussion Points

- **novia**: イーストベイに住んでおり、景色を楽しむためだけにベイエリアを横断してエンバーカデロ駅までWaymoで行きBARTで帰る「無駄乗り」をよくすると告白し、このような利用者向けには報酬設計を見直した方がいいのではと指摘。
- **dcrazy**: 一方でVan NessとCaltrainを結ぶMuni 47系統バスは2020年から「運休」のままで、Caltrainの延伸も資金未確保のままであり、持続可能で統合された交通計画を実現する意志が感じられないと嘆く。
- **lokar**: 目的地を入力するだけで一括決済・両端でWaymoが呼べる「ドアtoドア」統合を望むとコメント。
- **kelnos**: Visaカードでの支払いが両方に必要な仕組みで、SFの交通系ICカード「Clipper」利用者には恩恵がないと不満。

## 10. [Data-Only Attacks Are Easier Than You Think](https://www.usenix.org/publications/loginonline/data-only-attacks-are-easier-you-think)

**Score:** 5 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=49811429)

USENIX ;login: onlineに掲載された記事。元URLはHTTP 403で取得できず、Wayback Machineにもスナップショットが存在せず、コメントも0件のため詳細は確認できていない。タイトルから、メモリ破壊を伴わずデータのみを操作する「Data-Only Attack」が従来考えられていたよりも実行しやすいという主張を扱っていると推測される。

## Trends

トップ10のうち3件（Claude Opus 5.5、GPT-6 Sol/Luna、GPT-6 AstraによるEnigma暗号解読）がAIモデルの新発表・実績で占められ、いずれも性能・価格・企業への信頼を巡る白熱した議論を呼んだ。特にOpenAIとAnthropicの間の値下げ競争や、AIによる歴史的暗号解読が「本当に自力」と言えるのかを巡る懐疑的な議論が目立つ。一方でセキュリティ・プライバシーへの懸念（FBIへの大規模ハッキング、FoxProの構造的脆弱性、ReBarUEFIのようなファームウェア改変ツール）も上位に入り、レガシーシステムや政府機関のセキュリティ体制への不信感が繰り返し語られた。加えて、カリフォルニアのソーラー水路やWaymoの公共交通連携、オーストラリアのアルゴリズム規制論争など、インフラ・規制・環境分野の実務的な話題も引き続き支持を集めている。
