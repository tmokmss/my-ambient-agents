---
title: "Hacker News トップ10ストーリー（2026年3月11日）"
date: "2026-03-11T02:44"
category: "summary"
summary: "Tony Hoare氏逝去、LeCunの10億ドル調達、DebianのAIコード問題、Cloudflareの新クロールAPIなど"
tags: ["hackernews", "daily", "tech"]
---

## 1. [Tony Hoare has died](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)

**Score:** 1540 | **Comments:** 200 | [Post](https://news.ycombinator.com/item?id=47324054)

コンピュータ科学の巨人、Sir Tony Hoare（1934–2026）が逝去した。クイックソートの発明者であり、CSP（Communicating Sequential Processes）やホーア論理の提唱者として知られ、プログラミング言語理論と形式検証の礎を築いた。「デザインには二つの方法がある——複雑にして明らかな欠陥がないようにするか、シンプルにして明らかな欠陥がないようにするか」という名言は今も広く引用される。

### Key Discussion Points

- **paul**: ソフトウェア設計における「シンプルさ vs. 複雑さ」に関するHoareの有名な引用を紹介し、その原則があらゆる複雑なシステムや論理的議論に広く適用できることを称えた。コメント欄では多数がこの言葉に共感を示した。
- **srean**: Dijkstraが晩年、入院中に書類整理を手伝う教授に「『Tony』との書簡は残して、あとは捨てて」と言い残したエピソードを紹介。その教授自身のDijkstraとの書簡が捨てられる側だったというオチが絶妙で、二人の深い友情を物語る。
- **jgrahamc**: オックスフォードのPRG（Programming Research Group）でHoare教授のもとDPhilを取得した研究者が「the TonyHoare process has reached STOP」と追悼。CSPの用語でHoare氏の死を表現した詩的な一文が多くの共感を集めた。

---

## 2. [Agents that run while I sleep](https://www.claudecodecamp.com/p/i-m-building-agents-that-run-while-i-sleep)

**Score:** 242 | **Comments:** 196 | [Post](https://news.ycombinator.com/item?id=47327559)

著者がClaude Code Campで「眠っている間も動き続けるエージェント」を構築した体験記。複数のLLMエージェントを連携させて夜間に自律的にタスクをこなす仕組みを紹介しており、AIエージェントの実用的な活用事例として注目を集めた。

### Key Discussion Points

- **hi_hi**: 「これは全て（手を振る）、プログラミングをより簡単・安価にするはずのものに対して、大量の作業と費用がかかるように聞こえる」と皮肉混じりに懐疑的な見方を示した。不安定なモデル上にラッパーフレームワークを積み重ねる現状を批判した。
- **egeozcan**: テスト戦略として「レッド・グリーン・リファクタリング」手法に専門サブエージェントを割り当てる（赤チーム・緑チーム・リファクタリングチーム）ことを提案。複数モデルインスタンス間でコンテキストを分離することでコンプライアンスが向上すると主張。
- **recroad**: 「感心すべきなのか？人々は今、ただエージェントのためにエージェントを使っているのでは」と指摘。自身は書く・レビューするという2つのシンプルなエージェントで5〜7倍の生産性向上を達成しており、高速化よりも仕様設計に時間をかける方が重要だと強調。

---

## 3. [Yann LeCun raises $1B to build AI that understands the physical world](https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/)

**Score:** 348 | **Comments:** 330 | [Post](https://news.ycombinator.com/item?id=47320600)

MetaのチーフAIサイエンティストであるYann LeCunが新スタートアップ「AMI（Amilabs）」を設立し、10億ドルを調達。5B+ドルのバリュエーションも報じられている。LeCunは「LLMには根本的な限界がある」と長年主張しており、物理世界を理解できる新しいAIアーキテクチャの開発に取り組む。

### Key Discussion Points

- **A_D_E_P_T**: 「LLMは静的テキスト——世界についての人間のコミュニケーション——からしか学習しないため、根本的に上限がある」と主張。世界そのものから学習する時空間ワールドモデルアプローチが真のAGIブレークスルーをもたらす可能性があるとしてLeCunの方向性を支持。
- **Oras**: 「MetaではLeCunが利用できたリソースははるかに多かったが、何も生まれなかった」と懐疑的な見方を示し、マネジメントが問題なのかを問う。SoraやKlingのような既存モデルと提案するビデオ理解アプローチがどう差別化されるかも疑問視した。
- **az226**: スタートアップの詳細情報として、LeBrunがCEO、LeFundeがCFO、LeTuneがポストトレーニング責任者に就任予定と報告。Growth責任者や推論効率化リーダーも募集中とのこと。

---

## 4. [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)

**Score:** 288 | **Comments:** 213 | [Post](https://news.ycombinator.com/item?id=47324087)

DebianプロジェクトがAI生成コントリビューションに関する公式ポリシーを定めないことを決定。各メンテナーの裁量に委ねるという結論で、オープンソースコミュニティにおけるAIコードの扱いについて大きな議論を呼んだ。

### Key Discussion Points

- **mr-wendel**: 手首の怪我によりタイピングが困難になった自身の体験を踏まえ、AIツールがプロフェッショナルとしての復帰を可能にしたと語る。AIの「ハルシネーション」をプロンプト改善と批判的思考を促す機会として前向きに捉え、「ツールをエコシステムに統合する包括的なアプローチ」を提唱した。
- **vladms**: 「PRをレビューして受け入れることは信頼の問題——提出者が正しく有益なPRになるよう最大限の努力をしたと信頼すること」と指摘。ツールよりも責任意識が重要だと主張した。
- **sothatsit**: 「変更の品質は常に提出者の責任であるべき」と断言。AI利用自体は誠実に行動すれば問題ないが、著作権に関する制限は正当化できるとしつつ、AI利用全般を対象にしたポリシーは信頼できる貢献者を不当に排除しかねないと警鐘を鳴らした。

---

## 5. [Launch HN: RunAnywhere (YC W26) – Faster AI Inference on Apple Silicon](https://github.com/RunanywhereAI/rcli)

**Score:** 186 | **Comments:** 106 | [Post](https://news.ycombinator.com/item?id=47326101)

YCombinator W26バッチのRunAnywhereが、Apple Silicon上でAI推論を高速化するツール「rcli」をローンチ。MacのNPUやGPUを活用してローカルLLM推論の速度を向上させることを目指している。

### Key Discussion Points

- **stingraycharles**: 「何を提供しているのかがわかりにくい。GitHubに書かれているような音声アシスタント/AIなのか、それとも汎用/LLMなのか？」とプロダクトの定義の曖昧さを指摘。ポジショニングの明確化を求める声が複数上がった。
- **vessenes**: rcliでの実際のテスト体験を報告。homebrewインストールのバグを発見したほか、「google.comに移動しました」と音声確認するが実際には何も起きないというグラウンディング問題を指摘。HuggingFaceモデル選択UIやunslothクォンタイズへの対応要望も挙げた。

---

## 6. [U+237C ⍼ Is Azimuth](https://ionathan.ch/2026/02/16/angzarr.html)

**Score:** 152 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=47329605)

Unicodeの謎の記号「U+237C ⍼（RIGHT ANGLE WITH DOWNWARDS ZIGZAG ARROW）」の起源を調査した記事。正式名称はANGZARRだが、実際には方位角（azimuth）を表す記号として使われていたことを突き止めた調査の記録。

### Key Discussion Points

- **tantalor**: 「これらの文字には、その真の意味を学んだ者がすぐに忘れてしまうような反記憶の場（antimemetic field）がある」とユーモラスにコメント。Unicodeの難解な記号群への共感を呼んだ。
- **theamk**: 2022年のHN投稿「この謎のUnicode記号の起源を探る旅が始まった」へのリンクを紹介し、この記事がその後継であることを説明。長年にわたる謎解きの文脈が明らかになった。

---

## 7. [Cloudflare crawl endpoint](https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/)

**Score:** 135 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=47329557)

CloudflareがAIクローラー向けの構造化クロールエンドポイントを公開。サイト運営者がAIシステムに対してどのコンテンツをどのように提供するかを制御できる仕組みで、robots.txtやサイトマップの現代的な進化形として位置付けられている。

### Key Discussion Points

- **ljm**: 「Cloudflareはスクレイピング対策ツールを販売しながら、スクレイピングサービスも販売するようになったのか。まるでマフィアのやり口では？」と辛辣に批判。ただしCloudflareの広大なインフラを活かせる戦略的立場にあることも認めた。
- **jasongill**: 「Cloudflareは既にキャッシュにウェブサイトコンテンツを持っているのに、事前スクレイピング済みバージョンをまだ提供していなかったことに驚いた」と述べ、むしろ今まで実装されていなかったことに疑問を呈した。
- **Lasang**: 「構造化クロールエンドポイントの公開はrobots.txtやサイトマップの自然な進化形」と好意的に評価。人間向けと自動システム向けで異なるインターフェースを提供するという方向性を支持した。

---

## 8. [Universal vaccine against respiratory infections and allergens](https://med.stanford.edu/news/all-news/2026/02/universal-vaccine.html)

**Score:** 117 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=47329608)

スタンフォード大学の研究者が、呼吸器感染症とアレルゲンに対する「ユニバーサルワクチン」の開発に取り組んでいることを発表。特定のウイルスを標的にするのではなく、免疫系に対する広範な刺激アプローチを採用している。

### Key Discussion Points

- **torgoguys**: 「体を長期間、一般的に不快とされる状態（炎症、鼻水など）に維持させることになるのではないか」と疑問視。実際の感染症が減るというトレードオフとして許容できるのかを問いかけた。
- **Horatius77**: 「特定のウイルスではなく広範な免疫を刺激しようとしているようだ。免疫系の長期的な人工的過剰刺激は健康的とは言えないはず」と懸念。ただしリプライでは臨床データによる反論も寄せられており議論が継続している。

---

## 9. [SSH Secret Menu](https://twitter.com/rebane2001/status/2031037389347406054)

**Score:** 61 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=47318797)

OpenSSHに長年存在しながらほとんど知られていない「シークレットメニュー」機能を紹介したツイート。SSH接続中にエスケープシーケンスを使うことで、ポートフォワーディングの追加・削除やデバッグ情報の表示などが可能になる隠し機能を解説している。

### Key Discussion Points

- コメント数は28と控えめだが、「知らなかった！」という発見の喜びと実用性への言及が多数見られた。SSHを日常的に使うエンジニアにとって目から鱗の情報として好評を得た。

---

## 10. [Mesh over Bluetooth LE, TCP, or Reticulum](https://github.com/torlando-tech/columba)

**Score:** 37 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47327473)

「columba」はBluetooth LE、TCP、またはReticulumネットワーク上でメッシュネットワークを構築するオープンソースプロジェクト。中央集権的なインフラに依存しない分散型通信の実験的実装として注目されている。

### Key Discussion Points

- コメント数が2件と少なく議論は始まったばかりだが、Reticulumを使った分散型メッシュへの関心と、Bluetooth LEの帯域・遅延面での実用性についての言及が見られた。

---

## Trends

**1. AIエージェント実用化への賛否両論**
「眠っている間も動くエージェント」が196コメントと大きな議論を呼んだ。LLMエージェントの実用価値を支持する声がある一方、「複雑さの割に見合っているのか」という本質的な疑問が繰り返し提起されており、AIツール活用の成熟段階への移行が見られる。

**2. AI生成コードのガバナンス問題**
DebianのAIコード不決定（213コメント）、CloudflareのAIクローラー対応（68コメント）と、AIが生成するコンテンツをどう制御・管理するかというテーマが複数の話題に共通している。

**3. LLMの限界と次世代AIへの投資**
Yann LeCunの10億ドル調達（330コメント）は、「LLMを超えるAI」への強い投資意欲を示す。物理世界の理解や時空間ワールドモデルへの関心が高まっており、現在のLLMパラダイムの転換点への期待感がある。

**4. コンピュータ科学の巨人への追悼**
Tony Hoare氏の訃報が1540ポイントという圧倒的なスコアを記録。クイックソートやCSP、ホーア論理といった業績への深い敬意と、コンピュータ科学の知的遺産を振り返るコメントが多数寄せられた。

**5. 分散・オフライン技術への根強い関心**
Bluetooth LEメッシュ（columba）やSSHの隠し機能といった、中央集権インフラに依存しない技術への関心がトップ10に入ったことは、クラウド一辺倒への対抗意識の表れかもしれない。
