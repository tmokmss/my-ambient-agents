---
title: "Hacker News トップ10サマリー（2026年6月24日）"
date: "2026-06-24T14:53"
category: "summary"
summary: "Bunny DNS無料化・ドイツ法人設立152日間の苦難・脆弱性報告の特別扱い終焉など注目10本"
tags: ["hackernews", "dns", "security", "germany", "ai", "raspberry-pi"]
---

## 1. [We're making Bunny DNS free: because a faster internet won't build itself](https://bunny.net/blog/were-making-bunny-dns-free/)

**Score:** 500 | **Comments:** 169 | [Post](https://news.ycombinator.com/item?id=48657030)

Bunny.netがDNSクエリ料金を完全廃止し、アカウントあたり最大500ドメインまで無料でDNSホスティングを提供すると発表した。現在30万ドメイン・月間2000億クエリを処理する同サービスは、スマートレコードやヘルスモニタリングを含む全機能を無料開放。アカウント維持の月額最低利用料$1は継続するが、DNS利用量に応じた課金は一切なくなる。

### Key Discussion Points

- **Lucasoato**: CloudflareのEU代替としてBunnyNetを評価。HetznerがAWS/Azure/GCPと比べて値上げを急いだのとは対照的に、BunnyNetは競争力ある価格設定を維持していると称賛する。
  - **scandox**: 「HetznerはUS主要クラウドより依然として格段に安い」と価格設定の見方に異議を唱える。
  - **mhitza**: サポートの質と課金の透明性に不満。残高不足の通知がなく意図せずマイナスになった経験を共有する。
- **khurs**: Bunnyは2022年の$6Mの資金調達のみで運営する非公開企業であり、投資家主導の成長より有機的な事業構築を重視していると分析する。
  - **sparkling**: 「$1の最低利用料で実質的に無制限の静的サイトをホスティングできる」と補足する。
- **Diti**: LLM/クローラーによる予期せぬトラフィックで高額請求される懸念を示す。「すべての製品で一貫した機能とコスト制御が実現した日に移行する」と条件付きの支持を表明する。
  - **kassner**: 前払い制のため数千ドルの請求は発生しない。残高が尽きるとサービスは停止するが再チャージで復活できる唯一の課金上限機能だと説明する。
  - **KomoD**: CDNコストは$0.01〜$0.06/GBで、IP別ダウンロード速度制限・リクエスト数制限・月次帯域幅上限など豊富なレート制限オプションがあると補足する。
- **dizhn**: 「以前は何に課金していたのか」とDNSホスティング料金の仕組みを確認するコメントを投稿する。
  - **bcye**: 「ネームサーバーホスティングに課金していた。主な強みはジオルーティングやスクリプティングなどのプログラマブル機能」と回答する。
- **ah1508**: Cloudflareのように `/foo` を `foo.html` にマッピングするURL書き換えができるか質問する。

---

## 2. [Founding a company in Germany: €9600, 152 days and I still can't send an invoice](https://paolino.me/founding-a-company-in-germany/)

**Score:** 265 | **Comments:** 323 | [Post](https://news.ycombinator.com/item?id=48658718)

著者のCarmine Paolinoは、ドイツでPlentyLabsを設立するまでに5ヶ月・€9,600を費やしながら、実際のクライアントを抱えているにもかかわらず1枚も請求書を発行できていない体験を綴る。弁護士費用€4,462・公証人費用€1,575・税務登録€630・供託金€2,000で構成され、順次処理される手続きと命名規則の厳格さ（「Plenty」は識別性不十分と却下）を批判する。エストニアや英国では1日でオンライン設立できる点と対比している。

### Key Discussion Points

- **rob74**: €25,000の最低資本金は負債カバーのための仕組みであり、UGではなくGmbHを選んだのは自分自身であると指摘する。制限なく創業したいなら個人事業主という選択肢もあったはずだと論じる。
  - **Zak**: 米国のLLCは最低資本金なしで設立できる。ドイツ人が「負債の棒引きは許容できない」という文化を持つのに対し、米国は一定の失敗を起業促進のコストとして受け入れる文化的差異があると分析する。
  - **logifail**: Wirecard子会社を例に「GmbHも規制ルールを悪意ある行為者は無視する」と反論し、€25,000の実効性を疑問視する。
- **mplappert**: 多くの誤解を指摘する。給与として引き出せば二重課税は発生しない。標準的な設立なら弁護士不要で公証人に直接依頼できる。裁判所に直接出向き現金払いで約1週間の短縮も可能だった。
- **FLHerne**: 「会社の負債はあなたのリスクではなく債権者のリスク」という本質的な指摘をする。資本金が多いほど倒産リスクが下がり債権者を保護できると説明する。
  - **phlsa**: GmbHは€25Kの50%のみ払込で設立でき、ハードルを多少下げられると補足する。
  - **nradov**: 「債務超過で会社が倒れても問題ない。誰も強制的に融資させられているわけではない」という反論を述べる。
- **VadimPR**: オランダとスウェーデンでは設立が簡単。ただしスウェーデンでは銀行が政府と同等の権限を持ち、銀行口座を断られると会社設立自体が不可能になると警告する。
  - **yoavm**: スウェーデンはBankIDがあれば楽。オランダはKVKの対面予約が必要でアムステルダムは満席、遠方まで電車で行かなければならなかった体験を共有する。
  - **tdi**: ポーランドはほぼ100%オンライン化されており、個人事業主はバンキングアプリから設立できると紹介する。
- **robtro**: ドイツは官僚主義が最悪レベル。純粋なオンラインビジネスなら他国での設立を検討すべきと助言する。課税も時間がかかり担当者次第という問題も挙げる。
  - **earcar**: 「ドイツの効率性は神話。効率ではなくルール遵守がある」と言及し、ベルリン・ブランデンブルク空港を例に出す。
  - **ExpertAdvisor01**: 他国設立は地雷。ドイツ在住で管理・支配をドイツで行うと会社はドイツ税務居住者になり2重管轄のコンプライアンスが必要になる。「最善策はドイツを離れること」と結論づける。

---

## 3. [Vulnerability reports are not special anymore](https://words.filippo.io/vuln-reports/)

**Score:** 343 | **Comments:** 197 | [Post](https://news.ycombinator.com/item?id=48653216)

セキュリティ専門家のFilippo Valsordaは、LLMが一般的な研究者と同等以上に脆弱性を発見できるようになった結果、脆弱性報告の「希少性」が失われたと論じる。攻撃者も同じツールで同じ脆弱性を見つけられるため、報告者への特別扱いや守秘義務の価値が低下した。今後のボトルネックは発見ではなくトリアージであり、焦点を外部報告への対応から迅速な修正・予防へシフトすべきだと提案する。

### Key Discussion Points

- **Goofy_Coyote**: セキュリティエンジニアとして報告者・受信者の両側にいる。有益なRCEとk8sクラスタ乗っ取りの報告を2ヶ月以上無視され続けている一方、自社では週3〜4日をゴミレポートの選別に費やし燃え尽きている。「シグナルとノイズの比率がほぼゼロ」と現状を嘆く。
  - **-mlv**: LLMで重大度・対象製品別に自動分類し、エージェントで再現を試みるアプローチを提案する。
  - **PaulStatezny**: 「reckoning（清算の時）が来る」という発言の意味を問う。
- **themanmaran**: 週2〜5件の未要請「脆弱性報告」を受信。半数がLLMによるCSSの問題指摘、残り半数は恐喝未遂とみなしてスパム処理している。
  - **Gigachad**: フロントエンドコンパイル用npmパッケージが悪意ある正規表現で詰まるといった10/10スコアのCVEが溢れて疲弊していると共感する。
  - **cleverfoo**: VDPを10年以上運営してきたが、今年から月5件→1日5件のAI生成報告が急増。「AIレポート禁止」「エクスプロイト動画必須」のルールを導入したと報告する。
- **cadamsdotcom**: セキュリティを後付けで考えるのでは根本解決にならない。LLMを重ねるだけでは解決しない本質的なCSリサーチが必要だと主張する。
  - **whimblepop**: 「ソフトウェア企業がセキュアなシステム設計を試みることさえほとんどない。根本的な問題はわずかでも気にかけるかどうか」と根本的な姿勢の問題を指摘する。
- **ksajadi**: SOC2準拠で全報告への対応が必要なため、事前スクリーニングにLLMツール（fortworx.com）を構築した。
- **socalgal2**: 現状は一時的。LLMがバグを発見・修正し、事前防止も改善するにつれて脆弱性報告は減少するはずと楽観的な見方を示す。
  - **bostik**: 「一時的」は長期間になりうる。ソフトウェアのバグ発見率は調査時間に対してほぼ一定という研究があり、「無限のバグから無限マイナスNはまだ無限」と引用する。
  - **zemblanKing**: 楽観的すぎると批判。LLMもバグを生成し、Spectreのようなハードウェア脆弱性は別問題。複雑なソフトウェアから完全にバグをなくすことは不可能と論じる。

---

## 4. [Raspberry Pi Pico W as USB Wi-Fi Adapter](https://gitlab.com/baiyibai/pico-usb-wifi)

**Score:** 203 | **Comments:** 91 | [Post](https://news.ycombinator.com/item?id=48654676)

pico-usb-wifiは、Raspberry Pi Pico WをドライバレスのUSB Wi-Fiアダプターとして機能させるファームウェアプロジェクト。USB CDC-NCMデバイスとして認識されるため、ホストOS側に特別なドライバが不要。2026年6月21日に公開されたばかりで、MITライセンスのオープンソース。

### Key Discussion Points

- **MisterTea**: ESP32を使ったPlan 9向けUSB Wi-Fiの同様のアイデアを持っていたが実現できなかったと共有する。9Pインターフェースで設定も含め統合できるメリットを言及する。
- **polpo**: GeminiがこのプロジェクトのアイデアRPiとして「実現不可能」と回答したとのことだが、BlueSCSI（Daynaport SCSI-Ethernetエミュレーション）・PicoMEM・PicoGUSなど既存プロジェクトで透明なEthernetブリッジは実現済みと指摘する。
  - **vlovich123**: Gemini Flash-Lite 3.1でテストすると「カスタムファームウェアが必要だが可能」と正しく回答したと報告する。
  - **tehlike**: 「LLMの出力はグラウンドトゥルースではなくガイダンスとして扱うべき。追加質問で回答が変わる」と助言する。
- **byb** (作者): CDC-NCMデバイスとして動作するファームウェアであると説明する。
  - **fragmede**: 「これは素晴らしい！このキットでできることがたくさんある」と熱狂的に反応する。
- **bhouston**: RaspAP + Raspberry Piをトラベルルーターとして使いホテルのWi-Fiを家族で共有する方法を紹介し、本プロジェクトとの違い（NATの有無）を説明する。
  - **forinti**: GL.iNetのGL-USB150（OpenWrt、リピーターモード対応、モバイルバッテリー駆動可能）を紹介するが販売終了と補足する。
  - **Tepix**: このプロジェクトはPi Picoとという点で若干異なると指摘する。

---

## 5. [Krea 2 Technical Report](https://www.krea.ai/blog/krea-2-technical-report)

**Score:** 96 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48646659)

Kreaが16名チームによる58分読み時間の詳細技術レポートとともに、オープンウェイト・テキストから画像への生成モデル「K2」を公開した。データキュレーション・モデルアーキテクチャ・多段階トレーニングパイプライン・分散インフラを詳述。品質重視の慣習的フィルタリングを避け多様なスタイルを重視、合成データも意図的に除外。Qwen 3 VLテキストエンコーダーを採用し、研究向けK2 RawとK2 Turboの2モデルをHugging FaceとGitHubで公開している。

### Key Discussion Points

- **mattnewton** (作者): 通常あまり書かれないトレーニング・データインフラに焦点を当てたと述べ、質問を歓迎する。
- **justinclift**: キャリアページに旧Mellanoxゆかりのエンジニアリングポジションがあることをさりげなく紹介する。
- **BoredPositron**: 「良いモデルだが、Qwen VAEの採用は残念」と技術的な評価を行う。
- **kodablah**: K2 TurboはすでにHugging FaceでGGUF化されていると報告する。

---

## 6. [Statistics that live in your SQL](https://kolistat.com/blog/the-stats-duck-v0-6-0/)

**Score:** 86 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=48629810)

DuckDB拡張「the-stats-duck」v0.6.0がリリースされ、SQLクエリ内で統計解析が完結できるようになった。主な新機能：`meta()`関数によるテーブルプロファイリング、R式構文によるOLS回帰、ブートストラップ信頼区間、バイオリンプロット・LOESSスムージングを含む可視化機能、10種の新確率分布。XPTファイル読み込みは52倍高速化。

### Key Discussion Points

- **pacbard**: DuckDB内で統計解析を完結できる需要にぴたりはまるが、現状は「大学院1学期分程度」の機能。ヘテロスケダスティシティ頑健標準誤差・GLM・マルチレベルモデルがなければ本格的な研究には使えないと詳細な評価をする。
- **williamcotton**: 可視化機能がggsql（Positのオープンソースプロジェクト）に類似していると指摘する。
- **geysersam**: DuckDBの`summarize`関数はCTE内でも使えるが、`from`句でラップする必要があると技術的な補足をする。
- **PashaGo**: 「素早いアドホック分析には向いているが、ダッシュボードや深い研究には他のツールが依然として必要」と現実的な評価をする。
- **HackerThemAll**: kolistat.comからbedeverewise.appへのクロスサイトスクリプティングの可能性をNoScriptが検知したと報告し、懸念を示す。

---

## 7. [Stealing Is a Skill](https://ben-mini.com/2026/stealing-is-a-skill)

**Score:** 45 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=48659165)

著者はVirgil Ablohの「3%アプローチ」（元のデザインの3%だけ変更することで100%を深く理解する手法）を紹介し、同僚とともにMintlifyのマーケティングサイトをピクセル単位で再現することで自社サイトを作った体験を綴る。コピーすることで作者の意図や工夫・トレードオフを深く学べると主張する。

### Key Discussion Points

- **PashaGo**: 「偉大な製品のほとんどは、適切なタイミングと実行で成功した盗用アイデアに過ぎない」と核心をついたコメントを投稿する。
- **dghlsakjg**: コピーワーク（ライターが他者の作品を一字一句書き写す練習法）と同じ概念であり、Webデザイン版だと指摘する。
- **deltamidway**: 自分のロゴを丸ごとコピーされた経験を共有。「コピーは巧みにやらないと単なる盗用」と結論づける。
- **cjcenizal**: AK-47設計者カラシニコフの言葉「新しいものを作る前に、すでに存在するものをよく理解することが不可欠」を引用する。
- **nullbio**: 「MintlifyはStripeのデザインを盗用した。明らかだ」とコメントし、盗用の連鎖を示唆する。

---

## 8. [Haystack: Open-Source AI Framework for Production Ready Agents, RAG](https://haystack.deepset.ai/)

**Score:** 34 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=48658095)

Haystackは、deepsetが開発するプロダクション環境向けのオープンソースAIフレームワーク。エージェントとRAG（Retrieval-Augmented Generation）の本格運用を想定した設計で、EU拠点の企業という点がEUクライアントへのアピールポイントにもなっている。

### Key Discussion Points

- **throwaw12**: LangChain/LangGraph・Mastra・Pydantic・Agno・Strands・OpenAI Agents SDK・Claude Agents SDKなど乱立するAIフレームワークの比較と使いどころについてコミュニティの意見を求める。
- **isawczuk**: 小〜大規模プロジェクトでの使用経験を共有。「クライアントがEU拠点企業という理由でHaystackを選ぶことが多い」と述べる。
- **piratebroadcast**: 「RubyLLMがベスト」と短く主張する。
- **tw1984**: 「deepset？それより"deadseek"では」と辛辣なジョークを投稿する。

---

## 9. [Minimus container images are now free](https://images.minimus.io/)

**Score:** 83 | **Comments:** 42 | [Post](https://news.ycombinator.com/item?id=48658361)

Minimusはハードニングされた安全なコンテナイメージとHelmチャートのカタログサービスを無料化した。nginx（100%削減）・Python（98%削減）・Elasticsearch（92%削減）など大幅なイメージサイズ削減を謳い、FIPS・STIG準拠バリアントも提供する。

### Key Discussion Points

- **charukiewicz**: モバイルユーザーエージェントを完全にブロックする仕様を批判。「最適化されていないデスクトップ版のほうがまし」「CSSで対応できるはず」と指摘する。
- **hobofan**: Docker Hardened Images（DHI）やChainguard Imagesも無料のハードニングイメージを提供しているのに、本サービスを選ぶ理由が不明だと問う。
- **zufallsheld**: Dockerfileの公開場所・ライセンス形態を質問。「beer as free（無料）だがlibré（オープンソース）ではないのでは」と懸念を示す。
- **cedws**: Chainguard有料版の価値を実感している一方、無料枠が限られてオープンソースコミュニティが恩恵を受けにくい現状を残念がる。
- **2OEH8eoCRo0**: 「サプライチェーン攻撃の格好の標的になりそう」と短く警告する。

---

## 10. [Mark Zuckerberg wants Meta to launch its own prediction market](https://techcramp.com/2026/06/23/mark-zuckerberg-wants-meta-to-launch-its-own-prediction-market/)

**Score:** 38 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=48659937)

Zuckerbergが、Metaとして予測市場プラットフォームを立ち上げることへの関心を示したと報じられている。PolymarketやKalshiのような予測市場の急成長を受けた動きとみられる。

### Key Discussion Points

- **uberman**: 「Meta経営陣はレーザーポインターに反応する猫のようだ」と批判。AI教祖への多額投資・メタバース・コネクテッドグラスをすべて失敗と断じ、次のレイオフでも経営陣は責任を取らないと予測する。
- **paxys**: スマートフォン→出会い系→仮想通貨→AR/VR→AI→ギャンブル（←Zuckの現在地）というリストを作成。「ソーシャルメディアで1度だけ当たり、その興奮を追い続けている」と揶揄する。
- **LucasLanglois**: 2021年にも同様の試みがあり「Forecast」というアプリを立ち上げてすぐ終了したと指摘する。
- **ddp26**: Metaは2020年6月に「Forecast」を（KalshiやPolymarketと同時期に）ローンチしたが、約1年でサービス終了したと詳細を補足する。
- **mmayberry**: 「Zuckは自分の遺産が世界最大の広告プラットフォーム構築だという事実を受け入れられない」と本質を突くコメントを投稿する。

---

## Trends

本日のHacker Newsトップ10を通じて見えてくる主なテーマは以下の通り：

1. **インフラの無料化競争**: Bunny DNSの無料化・Minimusコンテナイメージの無料化など、インフラサービスの無料ティア拡大が続く。エントリーポイントとして無料で提供し、他の有料サービスへの誘導を狙うビジネスモデルが主流になりつつある。

2. **LLMが変える専門知識の価値**: 脆弱性報告（Story 3）でLLMが専門家の代替となる問題、Haystack/LangChainなどAIフレームワークの乱立（Story 8）、Krea 2のオープンウェイトモデル公開（Story 5）と、AIが従来の専門知識の希少性を変えるテーマが複数登場する。

3. **欧州のビジネス環境への不満と比較**: ドイツ法人設立の苦難（Story 2）とHaystack（EU拠点）が顧客から好まれる点（Story 8）、BunnyNetのEU代替としての支持（Story 1）など、EU規制・ビジネス環境に関する議論が活発。

4. **セキュリティの信頼性危機**: 脆弱性報告のノイズ増大（Story 3）、Minimusへのサプライチェーン攻撃懸念（Story 9）と、セキュリティエコシステム全体の信頼性が問われている。

5. **ハードウェアハックと創造性**: Raspberry Pi Pico WのUSB Wi-Fi化（Story 4）や「盗む」ことを学習手法と位置づける記事（Story 7）など、創造的なハック精神を肯定する投稿が人気を集めている。
