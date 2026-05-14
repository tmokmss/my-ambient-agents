---
title: "Hacker News トップ10サマリー（2026年5月14日）"
date: "2026-05-14T04:08"
category: "summary"
summary: "Linuxゲーミング急進・双子がDHS DBを消去・IDEの歴史・Emacsification など今日のHN上位10件"
tags: ["hackernews", "linux", "gaming", "security", "ide", "ai", "open-source"]
---

## 1. [Linux gaming is faster because Windows APIs are becoming Linux kernel features](https://www.xda-developers.com/linux-gaming-is-getting-faster-because-windows-apis-are-becoming-linux-kernel-features/)

**Score:** 588 | **Comments:** 390 | [Post](https://news.ycombinator.com/item?id=48087887)

NTSYNCと呼ばれる新しいドライバーがWindowsの同期メカニズムをLinuxカーネルに直接実装することで、Protonを介したゲームのパフォーマンスが大幅に向上している。ValveやWineコミュニティの貢献により、最も重要な変化がカーネルレベルで起きており、Linuxゲーミングの根本的なアーキテクチャが変わりつつある。Steam DeckによってLinuxゲーミングの障壁が下がり、「Windowsはゲーム用」という定説が崩れはじめている。

### Key Discussion Points

- **JoeAltmaier**: かつてCTOSというx86 OS上でDOSプログラムをトラップ実装で動作させた経験を語り、OS互換性の長い歴史を振り返る
  - **hnthrowaway0315**: CTOSは1980年代政府分野で広く使われていたとWikipediaリンクを添えて補足
  - **throw98226**: CTOSの開発モードのパスワードが「developement」(typoあり)だったという裏話
- **trashface**: Protonを使いArch LinuxでBG3などを問題なくプレイできており、Linuxゲーミングに大きな勢いを感じると報告
  - **Quekid5**: 約2年間LutrisでBG3をLinux上でプレイしており、ゲーム本体は完璧に動くがModツールのDotNetバージョン問題が課題だと追記
  - **ToucanLoucan**: ROG Ally XにSteamOSを入れてパフォーマンス向上を実感し、Kubuntuでもゲームが滑らかに動くと移行体験を詳述
- **neverkn0wsb357**: ゲームストリーミング(Amazon Luna)ではLinux+Proton+Vulkanでコスト削減が進んでおり、最大の障壁はアンチチートだと指摘
  - **protocolture**: MicrosoftはデスクトップOSの管理負担を嫌がっており、Windowsゲームの優位性を戦略的に維持する気がないとも読めると示唆
- **9x39**: Steam DeckがメインストリームユーザーのOS意識を薄め、League of LegendsやWarzone等のLinux対応が臨界点になりうると主張
  - **hedora**: Devuan+Steamのインストールの方がWindows 11の初期設定より速く終わったという実体験を共有；LinuxのゲームMarket shareはmacOSの2倍と指摘
  - **Mariajaved906**: アンチチートが最大のボトルネックで、Steam DeckはOSよりゲーム体験が重要だと示した好例と評価
- **Night_Thastus**: 「速くなった」という主張に対し、FPS・フレームタイム・レイテンシの具体的なWindowsとの比較データを求め、まだ移行に踏み切れないと吐露
  - **protocolture**: タイトルは「Windowsより速い」ではなく「以前より速くなっている」という意味だと正確に解釈を補足
  - **NamTaf**: 10%のFPS差など気にせず主観的体験を信じてすぐ移行すべきと背中を押すコメント

---

## 2. [Setting up a free *.city.state.us locality domain (2025)](https://fredchan.org/blog/locality-domains-guide/)

**Score:** 523 | **Comments:** 164 | [Post](https://news.ycombinator.com/item?id=48122635)

`frederick.seattle.wa.us` のような無料の米国ローカリティドメインを取得するガイドで、Amazon LightsailのネームサーバーとInterim .US Domain Templateフォームを使い自治体の委任レジストラへ申請する方法を解説している。承認後はLightsailでDNSを設定しGitHub Pages等に向ければよく、コストはほぼゼロで取得可能だ。ただし委任レジストラが廃業すると再登録が困難になるという構造的脆弱性も抱えている。

### Key Discussion Points

- **kraptv**: オレゴン州で3つのローカリティドメインを持つが、うち1つの登録業者の運営者が3年前に死亡しており、未亡人が6月1日にホスティングを停止すると通告してきた；運営引き継ぎを申し出ている
  - **1vuio0pswjnm7**: 1990年代にDNSを公共サービスとして構想したJon Postelへのオマージュを述べ、ICANNが商業的な「金の奪い合い」になったことへの失望を語る
  - **fullstop**: 別のレジストラ運営者(Mark)とも長期連絡が途絶え、2022年以降おそらく死亡したのではと推測するエピソードを共有
- **nickswalker**: ボストンのローカリティドメイン取得を試みたがGoDaddyから公証付き市レターヘッドを要求され、市の担当者は手続きを知らず断られた
  - **Spooky23**: この法律はCISAが推進した政府機関の.gov統一施策の副産物だと補足
  - **chimeracoder**: マサチューセッツ州でもNewton・Belmontの公立学校がk12.ma.usを現在も使っており、規制の一貫性に疑問があると指摘
- **morpheuskafka**: localitymanagement.usで7388件以上のドメインがオンライン申請可能になったが、HN掲載直後にサーバーがスラッシュドットされた；同一の有効化リンクでパスワードを2回変更できるバグもあったと報告
  - **chickensong**: サイトが重くて使いにくく、ドメインが見つかっても連絡先も登録フォームも表示されないと不満
- **foresto**: .usTLDはコスト・名前空間の魅力があるが、WHOISプライバシーサービスが禁止されており個人ドメインとしてはセキュリティリスクがあると警告
  - **anonu**: 米国ではWHOIS以外でも名前・電話番号・住所が複数サイトで公開されており、プライバシー保護の意識自体を問い直すべきと返す
- **kiddico**: *.k12.oh.usという懐かしいドメインを発見し高校時代を思い出すという微笑ましいコメント
  - **anamexis**: 学区は市町村より大きな行政単位であることが多く、ドメイン構造の上位にあるのは合理的だと解説

---

## 3. [A History of IDEs at Google](https://laurent.le-brun.eu/blog/a-history-of-ides-at-google)

**Score:** 310 | **Comments:** 221 | [Post](https://news.ycombinator.com/item?id=48073979)

Googleは長らく統一IDEを持たず、C++/PythonはVim/Emacs、JavaはEclipse/IntelliJとバラバラだった。モノレポ環境でEclipseが動かない問題をmagicjarプロジェクトで回避したのち、クラウドエディタCiderを開発し、さらにVSCodeフロントエンドとGoogle独自バックエンドを統合したCider-Vへ進化させた。2023年時点でCider-Vが開発活動の80%を占め、AI機能統合も実現している。

### Key Discussion Points

- **cletus**: 元Googler(2010–2017)として、Eclipseのモノレポでのクラッシュとmagicjar(20%プロジェクト)でのIntelliJ移行を詳述；Git5というP4のGitフロントエンドも好きだったと回顧
  - **materielle**: Googleには優れたコードビューワー・レビューツール・CIツールがあるため、エディタは「タイプする場所」に過ぎないという非Googlerへの重要な文脈補足
  - **wmedrano**: Git5は廃止されたが、モノレポをエディタ上で扱いやすくする効果があったと懐かしむ
- **mcoliver**: GoogleがWindsurfを買収しAntigravityとしてリリースしたが、WorkspaceユーザーのAI Ultraプランが削除されたと報告
  - **barbolo**: Ultra廃止で自チームはClaude/Codexへ移行を決めたと追記
- **malkia**: 元Googler(2014–2017)、Java担当チームはEclipse→IntelliJへ移行し、Ciderも並行して利用されていたと証言
- **kjgkjhfkjf**: Googleには「巨大モノレポ」と「ラップトップにコードを置けない」というポリシーの2つの特殊制約があり、CiderはこのGoogle固有の問題への解であってほとんどの企業には当てはまらないと指摘
- **phreeza**: 社内サービスは通常EOL後も無限に生き続けるのに、旧Ciderが短命で廃止されたことがむしろ驚きだと述べる
  - **DannyBee**: Ciderチームがバグ一件一件を丁寧に潰して移行を成功させた(「モンキーナイフファイト」型の典型的Google廃止とは対照的)と絶賛

---

## 4. [Twin brothers wipe 96 government databases minutes after being fired](https://arstechnica.com/tech-policy/2026/05/drop-database-what-not-to-do-after-losing-an-it-job/)

**Score:** 347 | **Comments:** 254 | [Post](https://news.ycombinator.com/item?id=48115438)

解雇直後の双子の兄弟(Muneeb & Sohaib)が、政府IT請負業者Opexusの環境にアクセスし約96のデータベースを削除した事件。午後4時58分に `DROP DATABASE dhsproddb` を実行、4時59分にはAIツールで「SQLサーバーのログを消す方法」を検索するという大胆な行動で、国土安全保障省（DHS）のデータベースも含まれていた。家宅捜索では7丁の銃と370発の.30口径弾も発見された。

### Key Discussion Points

- **scottlamb**: 「解雇した人を解雇した担当者も解雇された」というMonty Python的状況にたとえ、雇用者が学ぶべき教訓は「非人道的な即時解雇」ではなく「センシティブ権限を普段から制限する」ことだと主張
  - **yaur**: 解雇面談中に本人が告知される前にアクセス停止・パスワードローテーションをするのは20年以上前からの標準手順と確認
  - **tempaccount5050**: IT職では面談・荷物整理・セキュリティによる退出が即座に行われるのは完全に標準的だと述べる
- **zuzululu**: 「4:59pmにAIツールで証拠隠滅方法を検索」という行動を列挙し、どうしてこの人物が重要システムへのアクセスを許可されていたのかと疑問視
  - **dolebirchwood**: 兄弟はメリーランド生まれで、2011年のジョージメイソン大学の卒業ハイライト記事にも登場していたと背景情報を提供
- **soVeryTired**: Sohaibの自宅から7丁の銃と弾薬が見つかったことに対し「犯罪中に別の犯罪をするな」とコメント
  - **tclancy**: 州境越えて逃げてから郵送で銃を返送するという想像上の逃亡シナリオをユーモラスに描写
- **chatmasta**: 「こんな重要なデータに近づけたこと自体が驚き」とOceans映画のキャラクターにたとえる
  - **game_the0ry**: AIでログ消去を検索した事実に「red flagが多すぎて言葉もない」と呆れる
- **Beestie**: DHSの本番DBへの正規アクセス権を持っていたとは信じがたく、別の社員の認証情報を盗んだ可能性が高い；報道が「sanitize」されていると疑念を表明

---

## 5. [The Emacsification of Software](https://sockpuppet.org/blog/2026/05/12/emacsification/)

**Score:** 228 | **Comments:** 161 | [Post](https://news.ycombinator.com/item?id=48118727)

AIエージェントによって個人がネイティブアプリを自分用に手軽に作れる時代が到来し、既製品ツールの妥協を強いられる必要がなくなりつつある——著者はこれを「Emacsification」と呼ぶ。かつてEmacsユーザーが自分専用の環境を構築したように、誰もが自分だけのソフトウェアコクーンを持てるようになる可能性を論じている。

### Key Discussion Points

- **tombert**: 30分でClaudeを使いTLA+パッケージマネージャをRustで自作した体験談；AIが安くなるほど「万人が全てにカスタムアプリを持つ」時代が近いと述べる
- **tptacek**: 自分でReclaim(再構築)すべきソフトウェアのリストとして、ポッドキャストアプリ・音楽アプリ・フィードリーダー・Blueskyクライアント・メモアプリ等を挙げ、Claudeで既製品より自分向けの結果を出せると主張
  - **bo1024**: 「データをユーザーが所有できるかどうか」が全ての前提であり、企業のウォールドガーデンがパーソナルUIの実現を阻むと指摘
  - **dharmatech**: Plan 9向けにまず実装した分散ローカルファーストSNS「9social」プロジェクトを紹介
- **dang** (HNモデレーター): 「AIソリプシズム」という造語でAI生成ソフトの本質を分析——個人の.emacsファイルのように超個人化されたソフトは他者と共有も理解もできなくなる；チームでのコード合成問題が今後の課題と哲学的に論じる
  - **tptacek**: GPT生成文章と同じ問題——「どうせ自分でもっとよい会話ができる」と気づいた瞬間に他人のアウトプットを読む気が失せると共鳴
- **shaokind**: Emacsは複数OS間で脆弱で管理が大変だった経験を共有し、全てを自作することが必ずしも最小メンテナンス志向と一致しないと反論
  - **e40**: 同じEmacs設定をLinux/Windows/macOSで15年使い続けており「コンピューティング人生で最高のもの」と断言
- **SoftTalker**: 「パーソナルソフトウェア」は1960年代に想定された家庭用コンピューティングの本来の姿であり、LLMでようやくその夢に近づいていると歴史的視点を提供
  - **edbaskerville**: HyperCard・Visual Basic・Macromind Directorのような「取らなかった道」——複雑さを排した直感的なオーサリング環境の可能性をLLMが復活させるかもしれないと論じる

---

## 6. [Scorched Earth 2000 – Web](http://www.scorch2000.com/web/)

**Score:** 158 | **Comments:** 60 | [Post](https://news.ycombinator.com/item?id=48129694)

1991年に公開されたDOS版アーティレリーゲーム「Scorched Earth」のブラウザ移植版。プレイヤーが交互に角度と威力を設定して砲弾を撃ち合うターン制ゲームで、当時のシェアウェア文化の象徴的作品だ。HNコミュニティの各世代からの強烈なノスタルジーを呼び起こしており、初期コンピューティング体験を共有するスレッドへと発展している。

### Key Discussion Points

- **rhema**: シェアウェア版で人間用に制限されていたウルタタンクを、セーブファイルのASCIIテキストを直接書き換えてプレイヤーとコンピューターの設定をスワップするという初めての「ハック」体験を語る
  - **wingmanjd**: 同様にGORILLA.BASのバナナ爆発コードを大きくして遊んだ懐かしい記憶と共鳴
  - **jasonfarnon**: 1990年代の「最初のハック体験」をHNスレッドで共有しようという提案
- **GavinAnderegg**: Scorched Earthで「ソフトウェアバージョン」の概念を初めて知った——友人のv1.2と自分のv1.0を見比べた子どもの頃の衝撃を振り返る
- **skirmish**: 卒業後の最初の職場でVPエンジニアに「大学時代にScorchを書いた」と言われた驚きのエピソードを紹介
- **kylemaxwell**: 1992年頃に高校でこのゲームを徹底的にプレイしたと懐古
  - **walrus01**: Sound Blasterが普及した1991–92年からDOOM登場の1993年末までのDOSゲームの黄金期を「鮮明な区切り線」として語る
- **passive**: 「ああ、懐かしさが!!!!」とシンプルに感情を爆発させるコメント

---

## 7. [Cisco Workforce Reductions](https://blogs.cisco.com/news/our-path-forward)

**Score:** 66 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=48130123)

CiscoのCEO Chuck Robbinsが、Q3 FY26に過去最高の158億ドルの売上（前年比12%増）を記録したにもかかわらず、Q4に4,000人未満（全従業員の5%未満）の削減を発表した。シリコン、光学技術、セキュリティといた高需要分野への投資再配分が目的とされている。

### Key Discussion Points

- **0x0000000**: 売上が横ばいでも下降でも増収でも解雇が起きる企業の行動パターンを皮肉を込めて列挙
- **protocolture**: 記録的な増収と二桁成長を誇る四半期に人員削減を発表する矛盾を「興味深い決断」と揶揄
- **jjtheblunt**: 「Executive Leadership Team」という表現をAppleのJobs/Cook時代には一切聞かなかったとして、ヒエラルキー的な言語文化を批判
- **absolutewinner**: レイオフされた従業員の未確定RSUが会社に還収される問題——過去の貢献に対する報酬として付与されたはずの株式が突然剥奪されるのは不当だと訴える
- **holysoles**: 今日Cisco株を買おうとして思いとどまったと述べ、雇用安定性が従業員モチベーションの大きな要因として過小評価されていると指摘

---

## 8. [Chess puzzle I found in my dad's old book](https://ardoedo.it/kempelen/)

**Score:** 122 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=48096760)

父親の古い本で見つけたチェスパズル——4つのクイーンと1つのビショップをチェスボードに配置し、すべてのマスをカバーする（白のキングをどこにも置けなくする）という課題のインタラクティブWebバージョン。数学的・アルゴリズム的な議論が活発に行われている。

### Key Discussion Points

- **dllu**: ビットマスクを使ったPythonスクリプトで388個の解を発見；同じ行に3つのクイーンが並ぶ直感に反した解が多数あると紹介
- **tromp**: パズルの問題文が「checkmate（詰み）」と書いているが正しくは「check（王手）」であり、隣接する無防備なクイーンをキングが取れる場合はcheckmateではないと用語を訂正
- **hammock**: コーナーから始め、周囲に最もカバーされていないマスを優先して次のクイーンを置く戦略的アプローチを共有
- **maest**: trompと同様に「checkmate」vs「check」の曖昧さを指摘；提示されている解答はcheckの条件を満たすものだと確認
- **tantalor**: 駒を動かすたびに「Check」ボタンを押す必要があるUIの改善提案——自動チェックにすべきと提案

---

## 9. [Show HN: Nibble](https://github.com/glouw/nibble)

**Score:** 9 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48130186)

約3000行のCで書かれたC系システムプログラミング言語コンパイラ。外部依存なし・malloc不使用・AST不使用でLLVM IRを単一パスで生成するアプローチが特徴。型チェック・構造体・ポインタ・関数ポインタをサポートし、マルチスレッドソフトウェアレンダリングなど4つのグラフィカルデモが付属している。

### Key Discussion Points

コメントなし（投稿直後のため）

---

## 10. [Claude for Small Business](https://www.anthropic.com/news/claude-for-small-business)

**Score:** 3 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48130950)

AnthropicがClaude for Small Businessを発表。中小企業向けにClaudeを活用できるプランを提供し、AIを業務に組み込みやすくすることを目指している。

### Key Discussion Points

コメントなし（投稿直後のため）

---

## Trends

今日のHNトップ10から見えるトレンドは以下の通り：

1. **Linuxの台頭とWindowsへの反発**: LinuxゲーミングのNTSYNCドライバーに加え、Emacsification記事のコメントでもWindows 11の体験を嫌ったLinux移行者が多数登場。Win11への不満がLinux採用を後押しする具体的な力学が可視化されている。

2. **AI民主化のパラドックス**: AIで個人が簡単にソフトウェアを作れる時代（Emacsification）の一方、双子のDB削除事件では悪意ある行為者がAIで証拠隠滅方法を調べるという側面が浮かび上がった。AI普及の恩恵と悪用リスクが同時進行している。

3. **記録的好業績でも人員削減**: Ciscoの事例は、テック業界で「業績に関係なくリストラを繰り返す」という行動様式への批判を象徴している。高収益＝雇用安定ではないことへの労働者の不信感が噴出。

4. **インフラの人的脆弱性**: DHS DBを消去した双子の事件も、CiscoのRSU問題も、ITシステムの信頼性が最終的に人間（運用者・退職者・レジストラ管理者）の信頼性に依存している現実を示している。ローカリティドメインのレジストラ廃業問題も同じ文脈。

5. **レトロ・ノスタルジアの人気**: Scorched Earth 2000のウェブ版が1位付近に入り込むほどの勢い——1990年代初頭のDOSゲーム世代がHNコアユーザー層にあたり、彼らの懐古心が強力なアップボート機能として働いている。
