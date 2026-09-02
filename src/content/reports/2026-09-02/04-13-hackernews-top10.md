---
title: "Hacker News トップ10まとめ（2026年9月2日 13:13 JST）"
date: "2026-09-02T04:13"
category: "summary"
summary: "Claude Fable/Mythos 5.1、Ed Zitron予測検証、Firefox iOS広告ブロックなどHNトップ10を要約"
tags: ["hackernews", "ai", "security", "browser"]
---

## 1. [Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)

**Score:** 1007 | **Comments:** 943 | [Post](https://news.ycombinator.com/item?id=49525378)

Anthropicが新モデル Claude Fable 5.1 と Claude Mythos 5.1 を発表。キャッシュ読み込み価格を75%削減し、一般タスクで約25%、複雑なコーディングでは約45%のコスト削減を実現したほか、生物・医学分野の誤検知を85%削減した。科学分野ではMythos 5.1が蛋白質設計競技で過去最高スコアを記録し、金星の高解像度マップ作成やゲノム解析の計算速度を最大2.5倍に改善したという。

### Key Discussion Points

- **felixrieseberg**（Anthropic社員）: ベンチマークよりも文章スタイルの改善が大きいと述べ、より自然で指示に忠実な文体になったと評価。科学分野での「突然のブレイクスルー」の連鎖にも期待を示した。
  - **velcrovan**: Opusの独特な文体は、モデルが人間より他のモデル同士に向けて書いているためではという持論を披露。
  - **belval**: 読みにくい文章を理由にGPT系へ乗り換えたユーザーとして、今回の簡潔化を歓迎。
  - **PedroBatista**: コード面での優位性を失ったAnthropicが「サイエンス」を新たなマーケティング軸にしているのではと皮肉った。
- **simonw**: 恒例のペリカン画像ベンチマークで推論強度(low/medium/high/xhigh/max)ごとの出力を比較し、maxは14分・6万トークン超・$3.30かかったと報告。
  - **swalsh**: 「解けたベンチマークならアニメーション版も見たい」と冗談交じりにコメント。
  - **tukHelix**: 改善が分かりやすいよう画像の比較を並べてほしいとリクエスト。
- **GodelNumbering**: 値下げはキャッシュ読み込み価格が$1/Mから$0.25/Mへ下がったことに起因し、Terminal-Bench-Scienceを除くと他ベンチマークの伸びはわずかだと指摘。
  - **nsingh2**: Artificial Analysisのコスト指標では、キャッシュヒット価格は下がったものの他要素を含めるとFable 5.1(max)はFable 5(max)より高くつく場合があると分析。
  - **supern0va**: ベースモデル自体の伸びは頭打ちで、直近の改善は主にポストトレーニングの学習成果ではと推測。
- **exabrial**: Anthropicの発表姿勢を「ドラゴンが来るぞ」ネタになぞらえ、思考トレースの削除やMythosの「出し惜しみ」戦略を皮肉った。
  - **flaghacker**: テキスト透かしは出力品質に影響せず、サンプリングの乱数源を変えているだけだと解説。
  - **skue**: 「サンドボックス脱出をハックと発表した」という批判はAnthropicではなく別社の話ではと指摘。
- **mlaux**: 今回の破壊的変更3件はいずれも思考過程(chain of thought)の意図しない漏洩を防ぐパッチで、偽の"think_deeply"ツールを使ったCoT抽出手法や、Haikuに他モデルの思考ブロックを複製させる手口への対策と分析。
  - **sippeangelo**: この「思考の保護」措置は既存API利用に支障が出るレベルの重大な破壊的変更だと懸念。
  - **giancarlostoro**: 隠す狙いは顧客向けというより、Claudeの思考プロセスを模倣訓練に使う競合他社への対策ではと推測。

## 2. [How accurate have Ed Zitron's AI skeptic predictions been?](https://danluu.com/zitron/)

**Score:** 509 | **Comments:** 603 | [Post](https://news.ycombinator.com/item?id=49526069)

Dan LuuがAI懐疑論者Ed Zitronの2024〜2025年の予測を検証した記事。「AIの進歩は頭打ち」「Meta/Googleは衰退している」「OpenAIの収益予測は非現実的」といった主張のほとんどが実際の数字と食い違っており、各社の成長はむしろ加速していたと結論づけている。数字を並べながらも論旨と噛み合っていない点を批判し、Zitronの影響力は感情的なレトリックに支えられていると指摘した。

### Key Discussion Points

- **layoric**: 批判は「dying」の解釈を文字通り会社の倒産と捉えすぎており、Zitronの本来の主張は「製品が劣化し嫌われていく」という意味の"rot-economy"的な「死」だと擁護。Googleは財務的に健在でも旧来の検索体験は既に失われたと例示。
  - **jxcole**: 多くの人に嫌われながら財務的に成功し続けることは論理的に両立しないはずと反論。
  - **oofbey**: バルマー時代のMicrosoftは財務諸表上は健全でも「死んでいた」と言えるのではと擁護側に同調。
- **achompas**: コメント欄には「自分の予測」をZitronの主張にすり替えて擁護する人が多いと指摘。Dan Luuの検証はあくまでZitronが実際に書いた文言と結果を照合したものだと強調。
  - **overfeed**: 一方でZitron個人への人格攻撃に走るコメントも目立つと指摘。
  - **emp17344**: 予測の的中率だけで評価するなら、AmodeiやAltmanらも同様に信頼できなくなるはずと反論。
- **th0raway**: 「正確さ」より「注目を集めること」を優先するのがパンディット業の宿命であり、Zitronもオーディエンスに迎合する側に傾いていると分析。
  - **arctic-true**: Zitronは専門家ではなく評論家であり、同種の煽り屋は他にも多いとコメント。
  - **tavavex**: 「不況を煽る人はいつもいる」という論法でNFT熱狂と同列に扱うのは論理の飛躍だと批判。
- **simonw**: Zitronはリーク数字を掴んで報道を先取りすることもあるが、数字が実際の論旨を支えていないケースが多いと指摘。人々が数字を見て思考停止することに依存していると分析。
  - **toomuchtodo**: 個人的な物言いを無視してバランスシートだけを見るべきで、MuskやAltmanの方がむしろ甘く見られていると主張。
- **swiftcoder**: 各社の成長率の高さは反証にならず、その成長がAI関連の循環的な資金融通にどれだけ依存しているかを検証すべきだと指摘。
  - **u1hcw9nx**: 循環的な設備投資(Capex)は各社の「収益」にはならず、実際に収益が伸びているならZitronの予測は外れていると整理。

## 3. [True Rate of Unemployment](https://www.lisep.org/tru)

**Score:** 25 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=49530989)

Ludwig Institute for Shared Economic Prosperity (LISEP) が公表する独自指標「機能的失業率(True Rate of Unemployment)」の紹介ページ。週35時間以上の正社員職がない、あるいは年2万6000ドル以上の生活賃金を得ていない人を「完全雇用されていない」とみなし、2026年7月時点で24.9%（公式失業率4.1%とは大きく乖離）と算出。女性(31.0%)や高卒未満の層(50.3%)で特に高い。

### Key Discussion Points

- **mc32**: この指標を見ても歴史的な低水準からの乖離や急上昇は見られず、「隠された嘘」を暴くようなものではないと冷静な評価。他のG7諸国に同じ手法を適用しても近い結果になるはずだとも指摘。

## 4. [WebFPGA](https://webfpga.io/)

**Score:** 4 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=49531525)

WebブラウザからFPGAボードを開発できる「Rapid FPGA Development System」。IceStormなどのオープンなツールチェーンやクラウド合成、コマンドラインツールにも対応し、FPGA開発のハードルを下げることを目指すプロジェクト。

### Key Discussion Points

- **paaloeye**: Hello World的な用途以外で、こうした小型ボードの実用的な使いみちが思いつかないと率直な疑問を投げかけた。

## 5. [The efficient frontier of LLM inference](https://www.baseten.co/blog/the-efficient-frontier-of-llm-inference/)

**Score:** 62 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=49529898)

Basetenのブログ記事で、LLM推論効率化を「トレードオフ管理」（バッチサイズ調整や並列化戦略でレイテンシとスループットの間を移動）と「フロンティア推進」（カーネル最適化・投機的デコーディング・P/D分離などでフロンティア自体を押し広げる）の2種類に整理。両者は補完関係にあり、ビジネス要件に応じて使い分けられると説明している。

### Key Discussion Points

- **brrrrrm**: 推論技術のコンセプト自体はここ数年ほぼ変わっておらず、精度がやや下がった程度で本質的な新概念は出ていないと指摘。効率への最大のインパクトはアーキテクチャ設計時にあると強調。
- **jumploops**: 投機的デコーディングの説明を読み、90年代のCPUの投機的実行や2000年代の分散システムSpeculatorペーパーとの類似性に触れ「歴史は繰り返す」とコメント。
- **datadrivenangel**: レイテンシとスループットに加え、品質/知性という第三の軸への言及が薄いと指摘。フロンティアはジャギー（凸凹）であり、速度・コストのトレードオフ評価には専用ベンチマークが必要と補足。
- **ttoinou**: 記事の核心的な主張は同語反復（トートロジー）気味だと批判。
- **calclavia**: 最近の推論技術の良いまとめだと肯定的に評価。

## 6. [My local model setup on an M4 Pro Mac Mini](https://lws.io/blog/my-local-model-setup/)

**Score:** 102 | **Comments:** 50 | [Post](https://news.ycombinator.com/item?id=49529132)

著者はM4 Pro Mac MiniでQwen3.6-35B-A3BとGemma-4-E4Bの量子化モデルを稼働させ、oMLXサーバー経由でTailscaleネットワーク上の複数デバイスから共有している。クラウドAPI費用やデータプライバシー・規制リスクを回避しつつ、MoEアーキテクチャによりアクティブパラメータが少ないため48GBメモリでも効率的に動作し、日常タスクの8割を無料でこなせているという。

### Key Discussion Points

- **amanzi**: 記事にモデルの実効性能の言及がないと指摘し、16GB RAMのミニPCではローカルモデルの性能が芳しくないという実体験から、他の人が「許容範囲」とする性能水準に疑問を呈した。
- **brainless**: Qwen3.5の4B/9Bなど小型モデルを使い倒しており、用途別のシステムプロンプトを整備したハーネスを構築すればコード生成やプランニング等で実用的な結果が得られると報告。
- **jumploops**: M4 Max/128GBでもプリフィル(prefill)のレイテンシが最大の悩みで、DGX Sparksを2台導入してから体感速度が大きく改善したと述べた。
- **crossroadsguy**: 記事中の「oMLX」というURLは作り話やハルシネーションではないかと疑問視。
- **mkagenius**: M1 Pro(16GB)でQwen3.6 27Bの1bit量子化モデルを試し、RAM使用量わずか5GBで13 tok/sを達成したと報告。

## 7. [Show HN: Weedout – Safari extension that hides YouTube AI-labeled videos](https://masteranza.github.io/weedout/)

**Score:** 83 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=49528895)

YouTubeで「AI生成」ラベルが付いた動画をフィード・検索結果・関連動画・Shorts から自動的に除去するmacOS用Safari拡張機能。ユーザーがスクロールする前に静かに除外する仕組みで、買い切り$1.99、サブスクリプションやデータ収集はない設計。

### Key Discussion Points

- **MarioMan**: AIコンテンツを見るか隠すか選べる機能を待ち望んでいたと歓迎し、逆にAI生成コンテンツだけを残すTampermonkeyスクリプトも作って公開したと紹介。
- **consumer451**: 顔出しではないチャンネルでも小さな「AI (i)」ラベルが付いた正規の動画を見たことがあり、YouTube側のAI判定自体の精度に疑問を呈した。
- **ungreased0675**: AI生成音声を検知してコンテンツをブロックしてくれる小型ローカルモデルが欲しいと要望。
- **karim79**: 宇宙・天体物理系の作業用BGM動画が好きだが、AI生成の音声だと分かった瞬間に即ブロックしてしまうという個人的なこだわりを吐露。
- **lukeasch21**: なぜ最初にSafari限定でクロスプラットフォームのブラウザから始めなかったのか、技術的制約か好みかを質問。

## 8. [FBI Probes Service Selling 153M+ Drivers Licenses](https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/)

**Score:** 74 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=49529621)

米国・カナダの運転免許証スキャン画像1億5300万件超が「Nexus」というダークウェブサービスで販売されていたと報じられた。ルイジアナ州の身分確認企業IDscan.netからの情報漏洩が疑われ、FBIニューオーリンズ支局が正式に捜査を開始。Brian Krebs自身もレンタカー利用やマリファナ販売店での本人確認時に提供した免許証画像が流出していたことを確認したという。

### Key Discussion Points

- **Nition**: 本人確認が終わった後にデータを消去すればいいはずなのに、1億5300万件超もため込んでいたことに驚きを示した。
- **fishfasell**: マリファナ販売店に紐づくIDまで流出しているとなると、自分のIDも既に出回っているだろうと諦め気味にコメント。
- **cute_boi**: なぜ政府が運転免許証やSSNのような機微情報を各種サービスに収集させているのか疑問視し、実文書を晒さないゼロトラスト型の本人確認APIを政府が提供すべきだと提案。
- **jakevoytko**: 信用情報のロックやキャリアのSIMスワップ対策を有効にしておくよう改めて呼びかけた。
- **FpUser**: 「世界を安全にするため」と称して免許証を求める業者が、実際には大規模な詐欺を助長していると憤りを示した。

## 9. [Introducing Ad Blocker for Firefox on iOS](https://blog.mozilla.org/en/firefox/ad-blocker-on-ios/)

**Score:** 353 | **Comments:** 117 | [Post](https://news.ycombinator.com/item?id=49521973)

Mozilla公式ブログで、iOS版FirefoxにApple WebKitとEasyListフィルターを用いたサードパーティ広告・トラッカーのブロック機能が導入されたと発表。iOSでは拡張機能に制限があるため、ブラウザ本体に直接統合された。デフォルトはオフで「Settings > Browsing > Ad Blocker」から有効化する設計。サイト自体の広告や検索結果の広告は引き続き表示される。

### Key Discussion Points

- **OptionOfT**: 検索エンジンの広告はブロック対象外である点を問題視し、Google検索上位に表示される詐欺的な広告（航空券キャンセル代行の偽電話番号など）を例に、Googleとの契約上ブロックできないのではと推測。
  - **qingcharles**: 近所の人がFacebookサポートを検索して広告経由の詐欺電話番号にかけてしまった実例を紹介し、この種の広告放置の危険性を裏付けた。
  - **qwerpy**: Firefoxは自社のスポンサーリンクやGoogleの広告は表示し続けると表明しており、結局主要な広告の大半は素通りだとして懐疑的な姿勢を示した。
  - **cpeterso**: 今回ブロックされるのはあくまでサードパーティ広告であり、ファーストパーティ広告は対象外だと整理。
- **WD-42**: 数週間待ってもこの機能が自分の環境に表示されないと不満を述べ、段階的ロールアウト中なのに「もう使える」かのように広報するMozillaの姿勢に苦言。
  - **embedding-shape**: 段階的ロールアウトをするなら100%まで待ってから発表するか、最初から全展開するかのどちらかにすべきだと同意。
  - **doublepg23**: 自分はSafari + コンテンツブロッカーWiprの組み合わせで満足していると代替案を紹介。
  - **temp0826**: FirefoxはWebKitベースなのでSafariのコンテンツブロッカーが使えると思っていたが、実際にはその機能が見当たらないと戸惑いを表明。
- **NikxDa**: 過去の迷走を経てMozillaの方向性を評価しかけたが、一般提供されておらずテレメトリ同意なしには使えないと知り落胆したとコメント。
  - **mossTechnician**: Firefox 148以降はテレメトリ共有なしでもリモート改善を受け取れるよう変更された可能性があると補足。
- **delis-thumbs-7e**: 早速有効化したがYouTube広告はブロックされず、Braveをまだ手放せないとコメント。
  - **gilrain**: 検索エンジンの広告についても「目玉が飛び出るほど」うんざりだと同調。

## 10. ["Fine, I'll build my own text editor"](https://dbushell.com/2026/09/01/text-editor/)

**Score:** 6 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=49524863)

著者David Bushellが、既存ソフトウェアの品質低下に不満を募らせ「最近のソフトウェアはゴミだ、自分はゴミを作るのが得意だ」と自虐的に語りながら独自テキストエディタの開発に着手した記録。Canvas実装、contenteditable、textareaの3方式を試し、最終的にシンタックスハイライト付きのtextarea版が最も実用的な解になったという。

### Key Discussion Points

- **dang**: 関連する過去スレッド「They don't make 'em like Sublime Text anymore」（2026年8月・13コメント）へのリンクを添えて紹介。

## Trends

今回のトップ10では、Anthropicの新モデル発表とその評価（1位）、AI悲観論者Ed Zitronの予測検証（2位）が突出した注目を集め、AIの「誇大広告」と「実際の実力」を巡る温度差がコメント欄でも際立った。ローカルLLM運用（5位・6位）や「AI生成コンテンツをどう避けるか」（7位）といった、生成AIが日常に浸透したことへの反動的なニーズも複数見られる。一方でFirefoxの広告ブロック（9位）や運転免許証データ流出（8位）など、プライバシー・データ保護への関心も根強く、いずれも「企業や制度が個人データ・体験をどこまで守ってくれるか」という共通の懐疑的トーンでコメントが交わされていた。
