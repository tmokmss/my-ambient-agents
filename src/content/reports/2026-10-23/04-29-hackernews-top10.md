---
title: "Hacker News トップ10 サマリー（2026年10月23日）"
date: "2026-10-23T04:29"
category: "summary"
summary: "Quad9 のフランス撤退、Cash App 冤罪事件、Android で動く iOS 16.5、AI エージェント用サンドボックスなど"
tags: ["hackernews", "summary", "dns", "ai-agents", "formal-verification"]
---

## 1. [Quad9 (DNS Resolver) to Exit France](https://quad9.net/news/blog/au-revoir-france/)

**Score:** 1062 | **Comments:** 379 | [Post](https://news.ycombinator.com/item?id=50195959)

DNS リゾルバの Quad9 は、beIN の訴えによりフランスの裁判所から特定ドメインの名前解決ブロックを命じられた（違反は1日1,000ユーロの制裁金）。Quad9 は利用者の位置情報を保持しておらず、全世界でブロックすればフランス法をネット全体に押し付けることになるとして、2026年11月24日にフランスでのサービス提供を終了する。控訴中で、他にも約20件の訴訟を抱えており、弁護費用の寄付も募っている。

### Key Discussion Points

- **johnhtodd**（Quad9 の CTO を名乗る）: フランス利用者を GeoIP で遮断する可能性が高いと説明。GeoIP ブロックは特定ドメインの選択的な遮断には不十分だが、そこに注力するのは筋違いだという立場。
  - **monneyboi**: 信念を貫く姿勢への応援。
  - **NetMageSCW**: フランスに拠点がないなら判決や罰金を気にする必要があるのか、と疑問。
- **nadermx**: 記事中のドイツの Sony 訴訟に言及。GeoIP ブロックを回避するために Sony 側が VPN を使い、それを根拠に Quad9 が制裁金を科された点を理不尽だと指摘。
  - **vaylian**: 記事の主題は Sony 事件ではなく beIN 事件だと補足。
  - **bitpush**: 「何かが起きるたびに道具の提供者が責められる」構図は他のテック企業にも共通すると指摘。
- **euio757**: Cisco が2年前に同様に仏市場から撤退した前例を紹介。Canal+ は Google・Cloudflare・Cisco にもブロック命令を取っていた。
  - **mschuster91**: 「Cisco にしては珍しい勝ち」と皮肉。
- **babarock**: DNS リゾルバを罰するのは、電話帳会社が犯罪者の番号を載せたことを罰するようなものだと批判。
  - **teroshan**: DMCA の濫用的な運用と同じく、法の仕組みがそれを許しているからだと指摘。
  - **JoshTriplett**: 判決が世界規模で執行されると見込んだのかもしれないと推測。
- **JokerDan**: 訴えた企業のドメインの解決を止め返すべきだと主張。
  - **drdexebtjl**: 古いレコードを返す嫌がらせ案を提示。
  - **WhyNotHugo**: 中立なサービスという主張が成り立たなくなると反論。

## 2. [Woman faces six years in prison over Cash App account she never opened](https://www.techspot.com/news/114296-woman-spends-three-nights-jail-faces-six-years.html)

**Score:** 582 | **Comments:** 588 | [Post](https://news.ycombinator.com/item?id=50194833)

ペンシルベニア州の Amanda Smith さんは、開設した覚えのない Cash App アカウントを巡り、アーカンソー州の令状で4月に逮捕され、3泊勾留された。Facebook Marketplace の詐欺で、乗っ取られた出品者アカウント経由の1,000ドルが彼女の SSN と生年月日で作られた口座に送金されていた。住所や通信キャリア、iOS バージョンの食い違いなど、本人でない証拠も出ているが、最大6年の刑に問われている。司法取引（罰金・賠償各1,000ドルと保護観察3年）を拒否し、11月に審理が予定されている。

### Key Discussion Points

- **benjiro29**: 司法取引は検察側が誤りを認めずに済ませる手段だと指摘。無実でも争うリスクを避けて受け入れる人が多いという。
  - **aorloff**: 別の協力を引き出すため軽微な事件で圧力をかける検察を、陪審員候補として見た経験を語る。
  - **ninjagoo**: 司法取引で追い詰めたとされた Aaron Swartz の件を引き合いに出す。
- **squidbeak**: 検察は正義にそこまで無関心なのかと憤る。
  - **fc417fc802**: 司法制度側に説明責任がほぼないと指摘。
  - **TrackerFF**: 地方検事は選挙で選ばれるため、厳罰の実績を重視するという構造的な問題を挙げる。
- **doodlebugging**: Cash App の経営陣と、杜撰な捜査をした警察・検察が個人として責任を負うべきだと主張。
  - **Terr_**: Mitchell & Webb の「身分盗用」コントを紹介。
  - **gruez**: Cash App は SSN・氏名・ID・自撮りの確認をしているはずで、これ以上何を求めるのかと反問。
- **Roark66**: 検察・警察が重過失の責任を負わない限り止まらないと述べる。
- **tuveson**: 元の報道は 404 Media だと紹介。
  - **joe_the_user**: 有料壁の向こうだと指摘。

## 3. [Run full iOS 16.5 firmware on Android Devices](https://github.com/oosexgang/hackios-xnu-kernel)

**Score:** 357 | **Comments:** 133 | [Post](https://news.ycombinator.com/item?id=50196718)

HackiOS は、Apple の XNU カーネル（iOS 16.5 相当）を Android 端末上で起動し、改変なしの iOS 16.5 ユーザー空間（launchd → SpringBoard → アプリ）を動かす研究プロジェクト。POCO X5 Pro 5G と QEMU で動作し、端末にはフラッシュせず RAM 上で動く。ロック画面やジェスチャー、Safari などは動くが、携帯回線・Bluetooth・App Store/Apple ID は未対応。Apple のファイルは含まれず、IPSW は利用者の手元で取得する方式。

### Key Discussion Points

- **aghuang**: サイトのデザインが見づらいため GitHub を使うよう案内。QEMU や Xiaomi 端末でも動くのが印象的だとした。
  - **Wowfunhappy**: 自作でなければ Show HN は外すべきと指摘。
  - **jeswin**: 実機で動く点を高く評価し、A13 のリバースエンジニアリングが Apple Silicon の hackintosh への道を開いたと述べる。
- **sanid**: iOS 風にした偽物 Android 端末の流通を踏まえ、中古 iPhone 購入時の確認がより重要になると警告。
  - **gruez**: Secure Enclave がなく Apple ID にサインインできない点は大きな障害だと指摘。
- **Guillaume86**: 次は Garmin のファームウェアの移植を期待（市場区分によるハード制限の回避）。
- **SoKamil**: 「ROM ではなく研究用ベンチ」という断り書きは、Claude の安全策を回避するためではないかと推測。
  - **bitpush**: 数秒でカーネルがローダーに戻る仕様の意味を質問。
- **zahirbmirza**: 今の iOS は重く、他ハードで動かしたい気持ちは薄れたと述べる。

## 4. [OpenShell – A safe, private runtime for fleets of autonomous AI agents](https://github.com/NVIDIA/OpenShell)

**Score:** 335 | **Comments:** 175 | [Post](https://news.ycombinator.com/item?id=50198675)

NVIDIA の OpenShell は、自律型 AI エージェント群向けのランタイム。エージェントごとにサンドボックスを分け、カーネルレベルでファイルアクセス・システムコール・ネットワーク接続をポリシーで制御する。実際の認証情報はエージェントに見せず、承認済みエンドポイント宛てのリクエストにだけ付与する。ポリシー変更は形式検証でリスクを検出し、人間のレビューに回す。

### Key Discussion Points

- **fennecbutt**: ドメイン単位で制限できる iron proxy を使っていると紹介。残る課題はデータ流出対策だという。
  - **skybrian**: 何をしたか分かるネットワークログがあるとよい。
  - **igorhvr**: Firecracker ベースで資格情報の差し替えができる matchlock を推す。
- **smallnix**: 「能力を与えつつ権限は与えない」という宣伝文句は矛盾を覆い隠しており、実際はバランスを取る道具だと指摘。
- **mfro**: エージェントをコンテナで動かさないのは無謀だが、これはその管理に良さそうだと評価。
  - **thway15269037**: コンテナではなく、ネットワークフィルタとロガー付きの VM で動かしているのかと疑問。
  - **smokel**: NodeJS ライブラリをコンテナ外で動かす例のほうが危険だと返す。
- **crypt1d**: 似た物を作ろうとして Claude の安全分類器に弾かれた。
  - **jacquesm**: 社内では生物兵器のシミュレーションをしているのに、と皮肉る。
  - **edoceo**: DHCP リース大量発行ツールで同様の拒否を受け、Gemini で解決したと語る。
- **razuba**: すでに OpenShell を使っており、その上にチームポリシー・git 安全運用・SCA/SAST を載せた層を作っていると紹介。

## 5. [Every AI model has the same "controversial" take on humans](https://www.modelcompare.ai/blog/ai-models-controversial-take-on-humans)

**Score:** 290 | **Comments:** 342 | [Post](https://news.ycombinator.com/item?id=50197313)

ModelCompare は12のテキストモデルに「人間についての最も物議を醸す意見」を各3回尋ね、35件中29件が「人は真実より帰属や地位を優先する」という同じ主旨だったと報告した。例外は、人間は思うより善良だとした Claude Opus 5.5、意図と結果を論じた Claude Fable 5.1 などで、Grok 4.7 は1回拒否した。画像モデルの絵は12枚中10枚がスマホ依存の消費者が環境を害する図で、テキスト側の回答には出ない題材だった。システムプロンプトなし・再試行なしで、60回の呼び出しの費用は1.54ドル。

### Key Discussion Points

- **jdthorpe**: 記事の財布の例に触れ、落とし物の財布を届けた経験と、自分の財布が郵送で戻った経験を語る。
  - **jjordan**: 犬も同じ場所で探してしまうという小話。
- **keerthiko**: 全モデルが同じ意見を、分析した結果のように語る点が皮肉だと指摘。
  - **patcon**: 収束は浅さの印ではなく、独立した視点の一致（consilience）かもしれないと反論。
  - **nonethewiser**: 真実なら同じ答えになるはずだと返す。
- **kens**: データを見ると結論を支持しておらず、GPT-6 Astra の回答は集団信念とは無関係だと指摘。
  - **mike_hearn**: 大筋では主張は正しく、LLM が人間より少ない多様性で人間を批判するのは皮肉だと述べる。
  - **andrewflnr**: 利便性と帰属は近い概念だと反論。
- **dwd**: 『ライフ・オブ・ブライアン』の「全員が個人だ」の場面を引用。
- **skyzoidbroczky**: LLM は確率的なデータベースにすぎず意見を持たないと主張。
  - **pizza234**: 創発的性質は基盤の仕組みで否定できないと反論。
  - **doginasuit**: LLM は信念を持たないが、収束自体は注目に値すると述べる。

## 6. [Getting ready to operate GNU Taler in Germany](https://www.taler.net/en/news/2026-13.html)

**Score:** 242 | **Comments:** 95 | [Post](https://news.ycombinator.com/item?id=50197404)

プライバシー保護型の電子決済 GNU Taler をユーロで運営するため、ドイツのボーフムに Taler Operations AG が設立中。Taler は EU 規則上の電子マネーに当たり、発行者には免許が必要だが、GLS 銀行が2026年1月にその役割から退いた（Taler とは無関係の理由）。新会社はルクセンブルクの Taler Systems SA の子会社で、BaFin に電子マネー機関としての認可を申請する。認可前の運用開始はできず、時期は未定。5万ユーロ以上を出せる投資家も募集している。

### Key Discussion Points

- **procone**: ネット接続が必要で、切断が長いとトークンが失効する点を「ビットコインよりひどい」と批判。
  - **F3nd0**: 失効するのは更新しなかった場合だと補足。
  - **grothoff**: 「常時接続」は誇張で、更新は通常1年から数年ごとだと説明。
- **Eueudhsbsj32**: EU の規制当局が意味のある決済プライバシーを許すとは思えず、KYC で締め付けられると予想。
  - **ano-ther**: EU の資金援助を受けたプロジェクトで、最初から KYC/AML を前提に設計されていると反論。
  - **neobrain**: 買い手は匿名でも店側は特定でき、脱税の防止につながる設計だと説明。
- **F3nd0**: 自由とプライバシーが EU でも必須とみなされない現状を嘆きつつ成功を祈る。
- **jttnr**: GLS 銀行の顧客として、米国依存や制裁リスクを減らす欧州独自の決済に期待。
  - **hocuspocus**: Wero も勢いがあると返す。
  - **grothoff**: GLS は今も協力的だと強調。
- **hangrybear666**: 「口座内のキャッシュ様トークン」という説明で興味を失い、買い手のプライバシーは幻想だとした。
  - **kardianos**: 売り手に説明責任を残す電子現金であり、想定ユーザーが違うと返答。
  - **grothoff**: 正しくは「自己管理ウォレット内のトークン」で、Taler に口座はないと訂正。

## 7. [Docker is weird](https://codeandcake.dev/posts/2026-10-22-docker-is-weird)

**Score:** 234 | **Comments:** 119 | [Post](https://news.ycombinator.com/item?id=50202681)

コンテナは特別な restrictions を持つ普通の Linux プロセスで、名前空間・cgroup・ネットワーク分離などカーネル機能の組み合わせだと解説する記事。Docker イメージは chroot や pivot_root でルートディレクトリにされるフォルダにすぎない。runc は Go 製のため、Go ランタイム起動前にシステムコールを実行する C モジュールや、自分自身の再実行といった回避策が必要。Docker が root で動くのはカーネル API の都合で、rootless 化が難しい主因はネットワークのユーザー空間再実装だという。

### Key Discussion Points

- **shykes**（Docker の作者を名乗る）: 数年前から開発には関わっていないが、質問に答えると表明。
  - **FlyingSnake**: LXC や Vagrant で苦労した後の2013年の発表の衝撃を振り返り、感謝を述べる。
  - **davnicwil**: 2015年にパナマのカフェの遅い Wi-Fi で初めて使った思い出を語り、感謝。
- **andreygrehov**: 自作の Range を紹介。イメージ全体を pull せずにシェルを開く、足りないコマンドを別イメージから補うなどの機能がある。
- **vbezhenar**: Docker の独自性は Dockerfile、層ごとのビルドとキャッシュ、単一ファイルによる素早い反復にあると主張。
  - **crote**: むしろコンテナを極めて簡単にした点が主な魅力で、ほぼ逆の見方だと返す。
- **slowin**: 普段は Podman だが、既存のカーネル機能を使いやすくした Docker の DX は素晴らしいと評価。
  - **kvirani**: Podman はこの奇妙さを回避できるのかと質問。
- **suprjami**: 構成要素を学ぶのは良いことだとし、デーモンも root もソケットも不要な rootless Podman の方式を勧める。

## 8. [LLMs are making formal software verification feasible at a much larger scale](https://www.anthropic.com/research/formal-verification)

**Score:** 200 | **Comments:** 110 | [Post](https://news.ycombinator.com/item?id=50202217)

Anthropic と Theorem は、Claude を使って123のオープンソースライブラリの239のエントリポイントについて、RISC-V アセンブリ水準でセキュリティ性質を証明したと報告した。既存の fuzz テストを仕様に変換し、Rocq の証明チェッカーが 64MB 未満の入力でクラッシュしないことを確認する。過程で数百のバグを発見・修正し、fuzzer が見逃しそうな約20MB級の入力でのカウンタのアンダーフローも見つけた。「検証済み」はバグなしを意味せず、CPU や Linux のモデルが実環境と異なる可能性があると注意している。証明に数億トークンを要することもあるが、エージェント間で証明を共有して使用量を17%減らせたという。

### Key Discussion Points

- **yazaddaruvala**: 命令型の LLM 生成コードを検証するのではなく、決定的な宣言型言語へ移行すると予想。
  - **computably**: それは高水準設計文書から検証可能なシステムへコンパイルする言語に当たると指摘。
  - **gobdovan**: 関係型言語での実験では予想外の障害があったと語る。
- **jaykru**: 付録の記述を引用し、冗長な証明スタイルは複雑なプログラムに拡張できず限界にぶつかる可能性があると指摘。
  - **somethingsome**: LLM の数学能力は人間の数学の凸包の少し外側で壁に当たると見る。
  - **nextaccountic**: 証明もコードなので、エージェントはより良い抽象化を使うべきだと返す。
- **malisper**: Postgres の Rust 書き直しで、Rust と C を Lean に変換し、LLM に等価性を証明させている。約12%（C で約7万行）を単一スレッド前提で証明済みという。
  - **remywang**: そのコンパイラ自体の正しさをどう担保するかと質問。
  - **krukah**: 変換に rustc や clang をフォークしているのかと質問。
- **sestep**: SIMD や CUDA による高速化の PR に Rocq の等価性証明を付け、自信を持ってマージしていると報告。
  - **mattr03**: 定理が実際のコードに当てはまる確信をどう得るのかと質問。
  - **hedgehog**: 既存バイナリの証明は進みが遅いと語る。
- **Olscore**: 家づくりの喩えで、検証は設計図との照合にすぎず、設計図が意図と合っているかは別問題だと指摘。

## 9. [The Secret Life of Circuits is now in stock everywhere](https://blog.coredump.cx/p/the-secret-life-of-circuits-is-now)

**Score:** 55 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50162431)

Michal Zalewski の電子回路の本『The Secret Life of Circuits』が、出版社経由のみの販売を終え、Amazon の欧州各サイトや Barnes & Noble など主要書店で購入できるようになった。著者は、AI 生成本や題名の横取りが多い市場で推薦に影響するため、正直なレビューを書いてほしいと呼びかけている。

### Key Discussion Points

- **cantrevealname**: 無料サンプル章のスイッチのバウンスの説明が非常によく書けていると称賛。
- **suboto**: 宣伝や称賛の多さに比べて新味がなく、実践的な本というより卓上向けの本に見えると辛口。
- **dzink**: 予約本が届いて読み始め、実験でしか見たことのなかった多くの事柄の説明を喜んでいる。
- **tejtm**: 正誤表まで読んだところだと述べる。
- **seventytwo**: 「気に入った」と簡潔に評価。

## 10. [Mortality Among People with Attention-Deficit/Hyperactivity Disorder](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2855472)

**Score:** 45 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=50173516)

JAMA Network Open の系統的レビュー／メタ分析で、19研究・1,590万人超を統合した。ADHD は全死亡（ハザード比1.71）、自殺（1.89）、傷害（1.55）、自然死（1.27）の高さと関連した。ADHD 薬の使用は全死亡の低下（0.75）と関連したが、根拠は3研究のみで、著者は因果とは解釈しないよう注意している。研究間の異質性も大きい。

### Key Discussion Points

- **AgentMasterRace**: 6歳で診断され33歳。服薬しないと生活がうまくいかず、家族に依存症の歴史があると語る。
- **R_mand**: ADHD はリスクの高い行動を促すので寿命が短くなるのは当然かと述べ、服薬者に「楽しさは残るのか」と尋ねる。
- **nashashmi**: 重度の ADHD で未服薬。相関を因果のように示しており、服薬者は治療や配慮を受けている交絡があると批判。
- **lenerdenator**: この結果を DEA に伝え、刺激薬の製造規制の厳しさを緩めてほしいと述べる。
- **kogasa240p**: 非常に興味深いと簡潔に反応。

## Trends

- **規制・司法と技術の摩擦**: Quad9 のフランス撤退と Cash App 冤罪事件は、法執行や裁判の運用が技術や個人に重い負担を与える例として、いずれも大きな議論になった。Taler も、金融規制の枠内でプライバシー決済を運用する話である。
- **AI エージェントの安全性と検証**: OpenShell のサンドボックスと、Claude による形式検証は、「AI にどこまで任せ、どう信頼を担保するか」という同じ問題の別の側面。コメントでも Claude の安全分類器の過剰拒否が話題になった。
- **LLM の振る舞いへの関心**: 全モデルが同じ「人間への辛口意見」を述べた実験は、収束が洞察か学習データの偏りかを巡って意見が割れた。
- **基礎に戻る**: Docker の仕組みの解説や、iOS を Android 上で動かすカーネルレベルの探求、電子回路の本など、下層を理解することへの関心が根強い。
