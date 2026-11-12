---
title: "Hacker News トップ10 サマリー 2026-11-12"
date: "2026-11-12T06:56"
category: "summary"
summary: "Tim Peters 氏の訃報、Nvidia の CEO 解任報道、AWS 公式エミュレータ、United の AI エージェント禁止など"
tags: ["hackernews", "summary"]
---

## 1. [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028)

**Score:** 1075 | **Comments:** 121 | [Post](https://news.ycombinator.com/item?id=50450488)

Guido van Rossum が、Tim Peters 氏が7月15日に亡くなったと Python コミュニティに伝えた追悼スレッド。Zen of Python、Timsort、CPython の主要部分への貢献が称えられ、ユーモアを交えて丁寧に教える人柄が偲ばれている。

### Key Discussion Points

- **leoc**: Tim Peters は Gary Robinson とともに、pg の「A Plan for Spam」を SpamBayes に仕立てた人物でもあると紹介。
  - **curiousObject**: データから確率を推定するという発想は現在の LLM の粗い先駆けで、それを20年前に実践していたと指摘。
  - **garyrob**: 本人として追悼し、SpamBayes で Tim が書いたコードを紹介。
  - **jeremyjh**: SpamBayes の効果に感嘆し、Python も Tim のおかげだと感謝。
- **lumpa**: かつて python-dev を読み漬けており、Tim は憧れの存在だった。Python Cookbook 第2版での仕事も身近に感じた理由だと回想。
  - **pdonis**: doctest の議論での comp.lang.python への投稿がお気に入りだと紹介。
- **ofek**: 議論を促す姿勢のおかげで、会話のたびに理解が深まり、Python への愛着が育ったと語る。
- **neya**: 7月の死去が11月まで公表されなかった理由を尋ねている。
  - **meitham**: PSF から追放された経緯があると述べ、本人が書いたページを紹介（コメントの主張であり未検証）。
- **dalke**: 1990年代の comp.lang.python で Tim の投稿から多くを学んだ経験を語る。

## 2. [Nvidia is preparing to oust Jensen Huang](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad)

**Score:** 852 | **Comments:** 1196 | [Post](https://news.ycombinator.com/item?id=50459703)

WSJ（Wayback のスナップショットのリード部分）によると、Nvidia の取締役会は、2件の不倫（1件は中国のスパイと疑われる女性、もう1件は従業員）を受けて Jensen Huang CEO の解任を準備しており、早ければ水曜日に協議する。本文は有料のためリードに基づく要約。

### Key Discussion Points

- **nunez**: 米政府は機密レベルを問わず Nvidia のチップを使っており、Huang は政府と深い関係を持つため、疑惑は重大だと指摘。
  - **atmosx**: 「疑惑」ばかりで事実が乏しく、報道は煙幕に見えると懐疑的。
- **Topfi**: GPU 密輸を調べた Gamers Nexus への Nvidia の過剰な反応を思い出したと述べ、今回の件と結びつけて考察。
  - **ksec**: Apple に中国市場を無視しろと言うようなもので、スパイ説は完全には信じないと述べる。
  - **JoshTko**: 被害者だったとしても、時価総額1000億ドル超の CEO や取締役会の重大な過失だと主張。
  - **BLKNSLVR**: Gamers Nexus の調査報道を称賛。
- **bartread**: 数日前に辞任を考えるべきだと書いたと述べ、株価への影響のため実現しないと思っていたと振り返る。
  - **zaptheimpaler**: 2件目の不倫は取締役会が以前から把握しており、解任したいときのために温存していたのだろうと推測。
  - **jhallenworld**: 次の決算説明会は11月17日で、それまでに退くべきだと述べる。
  - **01100011**: 一分野で賢い人が他分野で無防備になるのはよくある誤解だと指摘。
- **flowerlad**: Huang のビジョンなしには GPU によるディープラーニング革命は起きなかったと、Nvidia にとっての重要性を主張。
  - **Hadriel**: それは「今も重要」の説明ではなく、過去に重要だったことの説明にすぎないと反論。
  - **BugsJustFindMe**: 判断力の欠如は役員を解任する最大の理由だと述べる。
  - **timcobb**: 個人を神格化する見方は不健全で、運の要素も大きいと指摘。
- **blueblisters**: Elon Musk はより問題のある行為でも地位を固めているのに、なぜ Huang だけがと疑問を呈す。
  - **kridsdale1**: 大統領に阻まれていた連邦政府内の関係者が、弱体化したのを機に動いたのではと推測。
  - **roca**: 引用された見方に異論を述べる。
  - **sooheon**: 皮肉混じりに、Huang の公的イメージが騒動に耐えられるほど奔放ではなかったのだと述べる。

## 3. [AWS emulator](https://github.com/aws/aws-emulator)

**Score:** 788 | **Comments:** 231 | [Post](https://news.ycombinator.com/item?id=50456631)

AWS 自身が公開した、AWS API をローカルや CI で模倣する Rust 製エミュレータ。スタンドアロンサーバーとしても Rust テスト用のインプロセスライブラリとしても動き、サービスごとに crate が分かれる。本番用途は非推奨で、テレメトリはデフォルト有効（無効化可）、PR は受け付けず Issue のみ。

### Key Discussion Points

- **CharlieDigital**: 本当に保守される製品か分からないと警戒し、Floci と Testcontainers を使っていると紹介。
  - **ke4qqq**: 実際の製品で、保守する予定だと回答。
  - **switchbak**: Floci は変更が多く、リリース間で壊れやすかったので離れたと述べる。
  - **olalonde**: 公式ドキュメントに載っているので、個人の副業プロジェクトではないはずだと指摘。
- **scriptsmith**: セキュリティページに、IAM ポリシーや KMS キーポリシーなどはエミュレータでテストするなと書かれていると紹介。
  - **Lucasoato**: すべてのセキュリティ機構を再現するのは複雑すぎ、統合テスト用の代替に絞ったのだろうと推測。
  - **donavanm**: 現行の IAM エンジンは独自の実装で、ライブラリとして出すには難所が多いと述べる。
  - **davidjkerber**: 自作の IAM エンジンを紹介し、エッジケースの網羅性を強調。
- **wg0**: AI とエージェントがなければ、この規模のものを作ろうとは誰も考えなかったはずで、LocalStack などの堀は消えたと述べる。
  - **iknowstuff**: Rust の標準ライブラリの設計は美しいと感想。
  - **neobrain**: 静的型付けの強い言語は、LLM に素早くフィードバックを返せるので相性が良いと反論。
- **morelandjs**: Amazon 社員として、エージェント開発では系統を閉じて入力を模擬するのが肝だと述べ、この価値を評価。
- **Waterluvian**: CDK プロジェクトをそのまま向けて `cdk deploy` をテストできるのか、内部挙動の再現度はどうかと質問。
  - **billyp-rva**: サービス間で状態を直接参照するなどの近道が取られていると説明。
  - **0xbadcafebee**: AWS には文書化されていない業務ロジックが多く、信頼性は期待できないと述べる。

## 4. [United Airlines bans AI agents from booking flights on behalf of travelers](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/)

**Score:** 508 | **Comments:** 494 | [Post](https://news.ycombinator.com/item?id=50458900)

United は、認証情報の共有による情報漏えいや連邦規則違反の可能性を理由に、第三者の AI エージェントによる予約を禁止し、自社サイトや旅行代理店・アグリゲーター経由でも制限する。アナリストは、予約プロセスの主導権維持と、AI ボットによる大量検索のコスト回避が狙いと見ており、Southwest は逆に ChatGPT に在庫を公開している。

### Key Discussion Points

- **doctoboggan**: Claude Code と Chrome 拡張のようなエージェントをどう止めるのか疑問で、多くの販売者との関係が敵対的になっていると嘆く。
  - **jeremyjh**: 合意した条件を無視するエージェント利用者による返金要求やエスカレーションが増えるのを、航空会社が嫌うのは理解できると述べる。
  - **mooreds**: 航空会社が API や MCP サーバーを公開し、レート制限できる正規の窓口を作るべきだと主張。
  - **victorevector**: 利用者のエージェントの誤動作に責任を負いたくないという、対外的な立場表明だろうと見る。
- **cmpolis**: 航空券やホテルの予約がエージェントの代表例なのは奇妙で、すでに数分で済み、完全に自分で制御したい作業だと述べる。
  - **Glyptodon**: 実際は価格が不透明で、複数サイトの比較が必要なので、決して簡単ではないと反論。
  - **matsemann**: 普段それらの判断を他人に任せている層に向けた宣伝だからだと推測。
  - **Terr_**: 推進する側は、平均的な消費者が負うリスクを軽く見ていると指摘。
- **andix**: 航空券の予約ページ自体が高度な CAPTCHA だと言われ、API/MCP を提供する再販業者の利用が最善だと述べる。
  - **mimischi**: そのような業者は実在するのかと質問。
  - **jaredklewis**: 予約ページはそこまで複雑ではなく、航空会社のサイトで予約することが多いと述べる。
  - **fantasizr**: 独立した JavaScript のタイマーで、特価の期限を表示するページがあったと報告。
- **ProblemExplorer**: 航空会社は全員の価格を下げつつ、特定の人にだけ有利にならないようにしており、特価を狙う人が増えればそれらは消えると説明。
  - **bagacrap**: 多くの特別オファーは赤字商品で、人間の行動を前提にしていると補足。
  - **ptero**: 航空会社側の論理が理解できないと反論。
  - **Gareth321**: 補助された座席の費用を他の客が負担しているなら、ブロックされても構わないと述べる。
- **cakeface**: Amazon にエージェントをブロックされたため、他の店を探させたと述べ、自由市場の精神に沿うと評価。
  - **BeetleB**: 個人の bot でも多数のサイトにブラックリスト入りしたが、Amazon は人間として通したと報告。
  - **Buttons840**: AI は最終的に、最も安く商売したい競合へ流れると指摘。

## 5. [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/)

**Score:** 461 | **Comments:** 234 | [Post](https://news.ycombinator.com/item?id=50455394)

> **関連:** #10「Jane Street: Socratic Tutor」も参照（同一企業の別件）

隣接する工事業者が材料を切断して誤検知の煙感知器が作動し、Jane Street の NYC 唯一のデータセンターの冷却が止まった。加圧式スプリンクラーが作動すれば水浸しになるため、筆者はサーバーを抜いて対処し、室温は約143.6°Fでピークとなった。その後スプリンクラーは維持され、各サーバーの温度を毎分平均する OCaml 製モニターが導入された。

### Key Discussion Points

- **reticulates**: ハリケーン Sandy で浸水した NYC のデータセンターでは、ディーゼルを階段で運び上げていたことを思い出したと述べる。
  - **mbac32768**（投稿者）: 同僚にも Jane Street での Sandy の体験談があると紹介。
  - **absurddoctor**: Sandy の際は金融街のデータセンターにいて、電力復旧が遅かったと回想。
  - **gecko**: 当時 Fog Creek にいた立場から、避けられた事態の再発寸前に驚いたと述べる。
- **hackermailman**: 職場の近くに住んでいると周囲に話したせいで緊急対応役にされたと、筆者と同じ経験を語る。
  - **NooneAtAll5**: 昇給は頼んだのかと皮肉。
  - **mystifyingpoi**: 遠隔勤務の可能性を潰す行為だと皮肉る。
- **rdl**: 物理的な EPO ボタンや煙感知器との連動がないのは不自然だと指摘。
  - **throw0101c**: 2020年の米 NEC には EPO の規定があるようだと資料を示す。
- **rainbowzootsuit**: 自分の現場の運転手順では、この理由で煙感知器作動時に CRAC を止めず、IMC もそれを認めていると説明。
  - **bergeyboy**: CRAC が風でスプリンクラーの作動を遅らせる可能性があると補足。
- **jddj**: Jane Street のポッドキャストの、データセンター設備を扱う回を勧める。
  - **mbac32768**（投稿者）: その回に登場した Daniel は信頼できる人物で、苦労して作ったディーゼル発電機を Sandy が壊したと語る。

## 6. [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/)

**Score:** 375 | **Comments:** 120 | [Post](https://news.ycombinator.com/item?id=50456791)

Google が新モデル Gemini Decision 1 を使う Gemini Decisions API を公開した。1つのマルチモーダル入力に対し、最大1,000件の Yes/No・多肢選択・ルーブリック質問を1回で採点し、確率と信頼度を返す。遅延は約150〜250ms、入力トークンのみ課金で100万トークンあたり$0.10。

### Key Discussion Points

- **eminence32**: 有用性が明白なのに、Jev が出るまで各社が提供しなかったのは意外だと述べる。
  - **janalsncm**: AI は RLHF 後に UX が改善して一般に広がった例のように、そうなりがちだと述べる。
  - **redmalang**: 以前から Qwen のファインチューンを判断専用に使っており、ブランド化の力は大きいと述べる。
  - **nlpnerd**: 開発者が維持できないものを作れてしまう、LLM の泥沼的な使い方の一例だと批判。
- **v18a**: LLM に信頼度を尋ねる問題を扱った記事を紹介。
  - **jimauthors**: その記事の筆者として、Jev に関する続編があると補足。
- **kodoman**: 判断モデルの実際の使い方を尋ねる。
  - **LaurensBER**: 人間のレビューが必要かの関門やフィルタ、まれに判定役として有効だと回答。
  - **lprd**: pi-warden をワークフローに使っていると回答。
  - **richardw**: 約1万リポジトリの分類に使い、ほぼ決定的な挙動を評価。
- **waximabbax**: 他の判断モデルより高価だが、音声・動画入力に対応するので有用だと述べる。
  - **jermaustin1**: 画像入力が理由で、自作版の Jev から移れていないと述べる。
- **2001zhaozhao**: 10万トークンの文脈に数百の質問をしても、検索 API 1回分程度の費用で済むほど安くなったと述べる。
  - **LaurensBER**: 社内ワークフローを見直すと、判断 API が合う場面が多かったと述べる。

## 7. [93% of paint splatters are valid Perl programs (2019)](https://www.mcmillen.dev/sigbovik/)

**Score:** 349 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=50459745)

Colin McMillen による2019年の SIGBOVIK 論文。絵の具の飛沫100枚の画像を OCR にかけたところ、約93%が有効な Perl プログラムとして解釈できた。無効な7例のほか、0 や "c" などに評価される意外な例も紹介される。

### Key Discussion Points

- **layer8**: 関連して、Java の properties ファイルは Unicode エスケープが不正な場合以外、どんな文字列でも有効だと指摘。
  - **hyperman1**: R のコードが何でも有効な CSV として読み込む例を挙げる。
- **zenincognito**（投稿者）: 論文本体も非常に面白いと PDF を紹介。
  - **Amorymeltzer**: 「Figure − 3. − 3 .」がイースターエッグだと紹介。
  - **0xbadcafebee**: 多くが有効なのは、Perl の引用符なし文字列機能のためだと論文の説明を引用。
  - **heresie-dabord**: 論文から、図 −3 は Python でも −3 と評価されると引用。
- **charcircuit**: 紙の飛沫というより OCR の品質の話で、設定を変えて成功させたもので、精度の高い OCR なら結果は変わると指摘。
- **jacquesm**: 逆に、絵画を Perl として実行できるようにし、そのプログラムが何をするか調べてほしいと提案。
  - **kmoser**: Obfuscated Perl Contest に出すとよい。
- **SoraTakai**: 使う OCR に依存して意味が薄く、ランダム入力での基準値もないと批判。
  - **ashton314**: 論点を外していると返す。

## 8. [Lock Your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/)

**Score:** 205 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=50459485)

GitHub Actions のワークフローロックファイルの解説。可変タグの危険を、各アクションを特定コミットに固定しつつ読みやすいバージョンタグを使えるようにして抑える。`gh-actions-lock` 拡張で `actions.lock` を生成し、別の CI ジョブで検証する手順と、v1.32.0 以降の zizmor でのロックファイル対応も紹介している。

### Key Discussion Points

- **woodruffw**: zizmor のメンテナとして、現状のロックは通常のアクション呼び出しのみが対象で、再利用可能ワークフローは手動のハッシュ固定が必要など、注意点を補足。
- **Already__Taken**: リポジトリ所有者がタグを動かさない信頼を、コミットハッシュをマージする人が正しいリリースか確認する信頼に置き換えるだけで、フォーク上の任意のコミットも固定できると指摘。
  - **woodruffw**: ロックファイルは偽装コミットのロックを許さないので、これを防げると回答。
  - **OptionOfT**: アクションが `docker pull abc:latest` を実行する場合、利用側では発見しづらいと指摘。
  - **Bnjoroge**: それこそロックファイルが防ぐものだと回答。
- **klodolph**: 歴史的に問題が多いので、避けられるなら GitHub Actions 自体を避けるべきだと述べる。
  - **jaggederest**: ビルドオーケストレーターで代替するのは簡単で安価だと述べる。
  - **dirtbag__dad**: 代替案を尋ねる。
- **gbraad**: ロックファイルを検証しなければ、手動実行や act でのローカル実行で改ざんされたアクションを動かすリスクが残り、本来はランナーが扱うべきだと述べる。
  - **Bnjoroge**: ランナーに何を求めるのか、許可リストかと質問。
- **SchemaLoad**: アクションを取り込むより、設定にコピーして自分の管理下に置くほうがよいと述べる。
  - **comradesmith**: GitHub Actions は決して単純ではないと反論。
  - **Pxtl**: bash 1行で済むはずのことが数十行の回避策になる場面でアクションが助けになると述べる。

## 9. [Critical RCE Vulnerability in Apache HTTP Server](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability)

**Score:** 114 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=50462177)

Wiz が、Apache HTTP Server の mod_http2 にある競合状態の脆弱性 CVE-2026-119618 を解説。認証なしのリモート攻撃者がヒープ破壊を起こし、任意コード実行に至る恐れがある。影響は 2.4.55〜2.4.70 で、クラウド環境の64%に脆弱なリソースがあるという。公開時点で悪用は未確認。2.4.71 以降へ更新するか、HTTP/2 を無効化する。

### Key Discussion Points

- **z3ratul163071**: 更新済みの Apache コンテナやパッケージがまだ提供されていないことに驚いている。
- **jamesy0ung**: 修正コミットへのリンクを共有。
- **thehamkercat**: 記事内で CVE 番号が2種類出てくると指摘。
- **jerrythegerbil**: 脆弱なバージョンに対し h2 の競合を探させると7分・約2セントで再現でき、パッチ版では失敗した。緩和策は h2 の無効化だと報告。
- **kgeist**: ヒープ破壊を RCE と呼ぶのは疑問で、PHP でも30分でメモリ破壊を再現した例を挙げて、この扱いに疑問を呈す。

## 10. [Jane Street: Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md)

**Score:** 13 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50438261)

> **関連:** #5「A false smoke alarm almost drowned Jane Street's only NYC datacenter」も参照（同一企業の別件）

Jane Street が公開した、ソクラテス式の個別指導を行うエージェントスキル。診断で学習者を0〜5のスキルマップに位置付け、質問で教え、間隔反復と最終評価まで進める。ユーザーが教える・出題するよう明示したときのみ起動し、単発の質問には直接答える。

### Key Discussion Points

- **orbis-tertius**: アイデアは好きだが、Jane Street が socrates-skill を模倣、または独立に再発見した可能性があると指摘。

## Trends

- **AI エージェントと既存の仕組みの摩擦**: United のエージェント禁止、AWS の（エージェント開発で作られたと目される）エミュレータ、Gemini の判断 API など、エージェントが前提になりつつある一方で、運営側は制限を強めている。
- **サプライチェーンと脆弱性の防御**: GitHub Actions のロックファイルや Apache の mod_http2 の脆弱性で、固定・更新・無効化といった運用対策が議論された。
- **人物と組織の節目**: Tim Peters 氏の訃報と Nvidia の CEO 解任報道が、スコア上位と最多コメントを占めた。
- **インフラの現場話**: Jane Street の事例は、設備設計と運用手順の議論を呼んだ。同社は #10 にも登場する。
