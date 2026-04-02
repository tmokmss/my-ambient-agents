---
title: "Hacker News トップ10 ダイジェスト（2026年4月2日）"
date: "2026-04-02T13:49"
category: "summary"
summary: "LinkedInの違法スキャン疑惑、スウェーデンの教室デジタル化見直し、メール難読化手法など本日のHNトップ10をまとめた。"
tags: ["hackernews", "summary", "tech", "security", "education"]
---

## 1. [LinkedIn Is Illegally Searching Your Computer](https://browsergate.eu/)

**Score:** 146 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=47613981)

Fairlinked e.V. による調査によると、LinkedInはユーザーがサイトを訪問するたびに、ブラウザ拡張機能を通じてインストール済みソフトウェアを無断でスキャンし、競合製品・宗教的信条・政治的見解・求職活動を示す拡張機能を特定して第三者に共有しているという。461種類だったスキャン対象製品は2026年初頭には6,000件超に急拡大しており、EU DMAへの対応と同時進行で監視を強化していた疑いがある。Fairlinkedは法的措置のための資金支援を呼びかけている。

### Key Discussion Points

- **andersonpico**: イスラム系コンテンツフィルターや反シオニストタガー、ニューロダイバーシェント向けツールまでスキャン対象になっており、これは「信頼の重大な侵害」だと批判。
- **arafeq**: 509種類もの求職支援拡張機能のスキャンは特に悪質で、雇用主がLinkedInを通じて従業員の転職活動を把握できる可能性を指摘。
- **gburgett**: この手法はChromium系のみに限定されるのか、FirefoxやSafariも影響を受けるのかを質問。
- **z3ratul163071**: なぜブラウザがウェブページに拡張機能APIを公開しているのか疑問を呈す。
- **mentalgear**: 拡張機能のweb-accessibleリソース（`chrome-extension://<id>/...`）のURLが解決するかどうかを確認することで、インストール済み拡張機能を特定できる仕組みに驚きを示す。

---

## 2. [Lemonade by AMD: a fast and open source local LLM server using GPU and NPU](https://lemonade-server.ai)

**Score:** 118 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=47612724)

AMDが支援するオープンソースのローカルAIプラットフォーム。GPU・NPUを活用しテキスト生成・画像生成・音声処理をローカルで実行できる。C++バックエンドはわずか2MBと軽量で、インストール後1分で起動可能。OpenAI互換APIを提供しOpen WebUI・GitHub Copilot・Continue等との連携も対応している。GitHub Starsは2,100件超。

### Key Discussion Points

- **moconnor**: 製品名「Lemonade（レモネード）」について「レモン（欠陥品）を最大限活かすため？」と皮肉交じりに質問。
- **dennemark**: Strix Haloハードウェアで1年間使用しており、TTS・STT・画像生成・編集など包括的な機能を高く評価。OpenAI/Ollama互換エンドポイントもVSCode CopilotやOpen WebUIで活用できると補足。
- **sensitiveCal**: OllamaとLM Studioの中間的な位置づけで、マルチモーダル統合が強みだが、AMD/NPU最適化でクロスプラットフォーム互換性が犠牲になるかもしれないと懸念。
- **jmillikin**: Linux向けセットアップ手順にDocker/Podmanが含まれておらず、Snap/PPA・RPMのみなのが意外だと指摘。
- **zozbot234**: NPUモデル・カーネルが独自仕様でオープンソース化されていない点を問題視し、オープンなNPUサポートの発展を期待。

---

## 3. [Inside Nepal's Fake Rescue Racket](https://kathmandupost.com/money/2026/03/27/inside-nepal-s-fake-rescue-racket)

**Score:** 80 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=47613078)

ネパールのトレッキングルートで組織的な保険詐欺が横行していることを暴く調査報道。トレッキング会社・ヘリコプター運航者・病院が連携し、偽の緊急ヘリ搬送を演出したり旅行者を意図的に体調不良に誘導したりして国際保険会社から数百万ドルを詐取している。2022〜2025年に確認された偽救助は171件、関与する病院への詐欺的入金は1,500万ドル超。2026年3月に32人が組織犯罪容疑で起訴された。

### Key Discussion Points

- **rdtsc**: 下位レベルの不正が発覚すると上位当局が公的に非難しつつ裏では利益の分け前を要求するという汚職の構造を説明。
- **skilled**: 2015年のエベレストBCトレッキングでも、保険を持つ旅行者がヘリ下山のために病気を偽るケースを目撃したと証言。
- **tomaskafka**: 保険会社に監視コストを払う動機がなく、各関係者が現状から利益を得ているため問題が解決されないと分析。
- **MikeNotThePope**: EBCトレッキング経験者として、ヘリ搬送への誘惑が本物であることを認めつつ、そもそも保険が提供されていること自体に驚きを示す。

---

## 4. [Sweden goes back to basics, swapping screens for books in the classroom](https://undark.org/2026/04/01/sweden-schools-books/)

**Score:** 263 | **Comments:** 140 | [Post](https://news.ycombinator.com/item?id=47612601)

スウェーデンが教育の「デジタル化」を見直し、2023年に「基礎回帰」方針を発表。2024年に8,300万ドルを投じて物理的な教科書を全生徒に整備し、スマートフォンの授業持ち込みも禁止した。PISA成績の2000〜2012年の下落と2022年の再下落を受け、デジタルツールより紙の教科書が基礎スキル習得に適しているとの研究を根拠としている。米国は逆に2024年に教育テクノロジーに300億ドルを支出し、方向性が対照的だ。

### Key Discussion Points

- **mentalgear**: 自社製品を子どもに使わせないスティーブ・ジョブズやザッカーバーグ・オルトマンらテック経営者の行動が示すものは何かと問いかける。
  - **TaupeRanger**: 画面制限は通常の親の判断であり偽善ではないと反論。スティーブ・ジョブズも限定的ながら使用を許可していたと指摘。
  - **bko**: 発明者の意図を過度に解釈すべきではないとして、ラジオの父リー・ド・フォレストが道徳的向上のためと考えていたことを歴史的例証として挙げる。
- **smatti**: フィンランドでは既に紙の教科書への回帰が進んでおり、物理的な学習が集中力・手書き・描画スキルを培うと主張。
  - **gritspants**: 教育へのAI導入ブームを「FOMO疫病」と批判し逆効果だと懸念。
  - **Gigachad**: 子ども時代を振り返り、教室のノートPCはフラッシュゲームやSNSに使われていたと認める。
- **greenbit**: 画面越しの授業では子どもが集中できないと観察結果を共有。
  - **amonith**: カーソルで図形を描いたりExcelのセルをランダムに切り替えたりして時間を浪費した過去を告白。
  - **TaupeRanger**: Chromebookで利用可能な操作を制限できる一方、紙のノートでも落書きをしていたと反論、一概にどちらが良いとは言えないと主張。
- **artakulov**: 旧ソ連圏出身として技術予算ゼロの環境で黒板と本だけで学んだ経験を共有。デジタル教科書がサブスクリプションモデルにより高コストになっている点も批判。
  - **mixermachine**: ドイツでは教科書を複数年再利用する制度があり、毎年新しく購入するのは無駄だと指摘。
  - **SSLy**: 重い教科書を持ち歩く負担についてユーモラスに言及。
- **amadeuspagel**: 数学の練習ではコンピューターの即時フィードバックが紙より優れていると主張。
  - **nimonian**: 教科書での答え合わせの「待ち時間」にも教育的価値があるとして即時フィードバック万能論に反論。2010〜2020年の数学教師としてiPad導入後に教育効果が下がったと証言。
  - **HPsquared**: 十分な能力を持つLLMとのソクラテス対話は多くの教科に応用できると示唆。

---

## 5. [IBM Announces Strategic Collaboration with Arm](https://newsroom.ibm.com/2026-04-02-ibm-announces-strategic-collaboration-with-arm-to-shape-the-future-of-enterprise-computing)

**Score:** 159 | **Comments:** 92 | [Post](https://news.ycombinator.com/item?id=47611721)

IBMとArmが2026年4月2日に戦略的協業を発表。Arm系ソフトウェア環境をIBMのエンタープライズプラットフォーム上で動作させる仮想化技術の拡張と、デュアルアーキテクチャーハードウェアによるエンタープライズAI・データ集約型ワークロードへの対応を目指す。両社はソフトウェアエコシステムの拡充と展開の柔軟性向上を狙う。

### Key Discussion Points

- **mcbridematt**: s390アーキテクチャ上でARM64 KVMを実現するLinuxカーネルパッチセットを参照し、「KVM: s390: Introduce arm64 KVM」として進んでいると紹介。
  - **trebligdivad**: かつてx86ブレードをメインフレームにアドオンする製品があったと回顧し、今回のアプローチの奇妙さを指摘。
  - **rbanffy**: 「Z/OS for ARMか？」とジョーク交じりにコメント、自身のRaspberry Piクラスターでもメインフレーム環境を動かしていると述べる。
- **mykowebhn**: 「IBMは実際に何をしている会社なのか？」と真剣に質問。
  - **roncesvalles**: メインフレームはコモディティ分散システムとは対照的な「極めて信頼性の高いハードウェア＋シンプルなソフトウェア」モデルで、銀行やクレジットカード取引の基盤と説明。
  - **Cthulhu_**: IBMはヘルスケア・気象・動画ストリーミング・クラウド・Red Hat等、広範かつ目立たない事業を展開していると解説。
- **silvestrov**: IBMが独自CPUアーキテクチャ開発のコストを払えなくなり、ARM64の性能がコスト面で競争力を持ち始めているため、目立たない形でARMに移行しようとしていると分析。
  - **adrian_b**: 今回の協業はスタンドアロンのARMサーバーではなく、メインフレームへのアドインカードとしてARMを組み込む形で、既存のIBMの信頼性基準を維持しながらARMネイティブアプリを動かす仕組みと解説。
  - **rzerowan**: IBMはARM移行後もPOWERアーキテクチャを特定ワークロード向けに維持すると予想。
- **iSnow**: かつてニッチだったARMがスマートフォン以降、今や大型サーバーやAIデータセンターにまで波及したことに驚嘆。
  - **kjs3**: 「それは数十年前にIntelがx86でやったことと同じだ」とコメント。
  - **graemep**: スマートフォン以前からARMは急速に成長していたと補足。

---

## 6. [Significant Raise of Reports](https://lwn.net/Articles/1065620/)

**Score:** 91 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=47611921)

Linuxカーネルのセキュリティ脆弱性報告数が急増しているという LWN.net の考察記事。かつて週2〜3件だった報告が現在は1日5〜10件に達し、ほとんどが正当な発見。その結果、重複報告も増え、対応のためにメンテナーの増員が必要になっている。ただし著者は、バグが数日以内に修正されるため状況を前向きに評価し、エンバーゴは近い将来不要になると予測している。

### Key Discussion Points

- **glimshe**: 2000年以前は配布の困難さから厳格なテストが求められ、ソフトウェア品質が高かったという主張について、その真偽とアーキテクチャの単純さに起因するかどうかを問う。
- **Shank**: この議論が別のLWN記事（1065586）へのコメントであることを明記し、文脈整理に貢献。
- **piinbinary**: バッファオーバーランやUAF等、報告されている脆弱性の種類を質問し、決定論的ツールやモダンな言語で防げたかを検討。
- **0x3f**: GitHubコントリビューターにPageRankスタイルのスコアを付け、プルリクエストに提出者のランクを表示するシステムを提案。

---

## 7. [Bringing Clojure programming to Enterprise (2021)](https://blogit.michelin.io/clojure-programming/)

**Score:** 107 | **Comments:** 45 | [Post](https://news.ycombinator.com/item?id=47611481)

ミシュランのITエンジニアがエンタープライズ向け参照データシステムの開発にClojureを採用した経緯を紹介した記事（2021年）。REPL駆動の即時フィードバック、マクロによるDSL定義、JVMとのシームレスな統合が主な採用理由。非開発者でも再コンパイルなしでビジネスルールを変更できる柔軟性も評価された。学習曲線の急峻さと経験者不足は課題として挙げられている。

### Key Discussion Points

- **killme2008**: 5年間Clojureを書いた経験者として「最も生産性が高い言語の一つ」と評価し、REPL駆動の開発が恋しいと述懐。Clojureスタイルのパターンマッチングマクロ「defun」を自作したと紹介。
- **LouDNL**: 日々の仕事でClojureを使っており、コミュニティは小さいが協力的で学習曲線は急だが十分に見合う価値があると主張。
- **laszlojamf**: タイヤメーカーのミシュランがテックブログを持つという事実自体が「ソフトウェアが世界を食った」ことの証左だと感嘆。
- **erfgh**: Lispコミュニティが絶賛するREPLはPythonのREPLと何が違うのかを質問。

---

## 8. [Gone (Almost) Phishin'](https://ma.tt/2026/03/gone-almost-phishin/)

**Score:** 85 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=47582987)

WordPressの創業者Matt Mullenweggが標的にされた精巧なフィッシング攻撃の体験談。攻撃者はMFAボミング（大量の認証プロンプト送付）でAppleデバイスを攻撃した後、Appleサポートを装って本物のケースIDを入手し、正規のAppleメールに表示されたケースIDを利用した完璧なコピーサイトへの誘導を試みた。Lockdownモードでも防げなかった点が注目される。

### Key Discussion Points

- **jasode**: URLのドメイン解析は非技術者には難しく、`getsupport.apple.com.phish.xyz`のような偽装を見抜けないと指摘。AIツールによる不審リンク検出の活用を提案。
- **JumpCrisscross**: Appleはサポートドメインをapple.comとgetsupport.apple.comに限定しているのに対し、Microsoftは`office365support.com`等複数ドメインを使用しており混乱を生むと対比。
- **olmo23**: 「今は時間がないので折り返し電話します」とケースナンバーを控え、自分で公式番号を調べて折り返す方法が詐欺を防ぐ最善策だとアドバイス。
- **ChrisMarshallNY**: 最近のフィッシングは本物の企業テンプレートを流用して非常に精巧になっており、逆に「サポート担当の質が高すぎる」ことで詐欺と気づいた事例を紹介。
- **dinkleberg**: 知らない番号からの着信を全て無音にしてボイスメールで選別する運用を採用していると紹介。

---

## 9. [Enabling Codex to Analyze Two Decades of Hacker News Data](https://modolap.com/publication/hn-analysis-1)

**Score:** 22 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=47612558)

OLAPエンジン「Modolap」を使いOpenAI Codexに20年分のHacker Newsデータを分析させた事例紹介（記事本文は取得不可）。コメントはまだ少なく活発な議論には至っていない。

### Key Discussion Points

- **zeroxfe**: ClaudeとSQLiteを組み合わせたデータ分析ワークフローを紹介。スキーマ設計・データ投入・クエリ生成・可視化まで一貫してAIに委ねるアプローチを共有。
- **mike_hearn**: ModolapがOtherのOLAPエンジンと何が違うのか、ウェブサイトもREADMEも独自性を説明しておらずなぜ注目すべきか不明だと批判。
- **throwaway290**: HNのデータは公開されているのか、またどういう条件で配布されているのかを質問。

---

## 10. [Email obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)

**Score:** 213 | **Comments:** 66 | [Post](https://news.ycombinator.com/item?id=47609694)

318のスパムハーベスターに対して15種類のプレーンテキスト手法と10種類のクリッカブルリンク手法を検証した包括的なメール難読化調査。HTMLエンティティ（95%遮断）・CSSのdisplay:none・JavaScriptベースの手法が高い有効性を示した。記事サイト自体がハニーポットとして機能し、各手法に固有のアドレスを割り当ててスパム到達を追跡している。

### Key Discussion Points

- **ciroduran**: メールアドレスを公開したまま優れたスパムフィルターに任せるという方針でも実用的に問題ないと証言し、シンプルな手法でも高い有効性があることへの驚きを示す。
  - **jrmg**: 2000年代初頭からmailtoリンクを公開しているが、スパムは1日数件のスパムフォルダ分のみで実用上問題なしと報告。
  - **Yaggo**: メールホスティングをAppleに移してから問題がなくなったと同調。
- **Croak**: CSSで非表示にしたtar pit用アドレスをソースに仕込む「タービット」手法を紹介。
  - **MichaelApproved**: この手法はGmailなどの大手ESPをブロックしてしまうリスクがあると反論。
  - **notpushkin**: Project Honeypotと同種のアプローチだと言及。
- **kqr**: スパムハーベスターは多くの場合HTMLを解析せず生のバイト列から`@`を検索するだけのため、HTMLエンティティが有効なのだと仮説を提示。
  - **BorisMelnik**: 確かに多くのハーベスターは`@`文字列検索だが、ブラックハットマーケティング界には数百種類の手法が存在すると補足。
  - **j45**: `@`周辺のトークンベース抽出も改良すれば機能すると同意。
- **badsectoracula**: LLMツールでCSSトリックやJavaScriptに頼らない難読化の突破テストを実施したことを報告。
  - **Terr_**: 訪問者が計算コストを払って取得するトークン型メールアドレス（`user+TOKEN@example.com`）システムを提案。
- **bit1993**: スパマーもこの記事から学べてしまうという両刃の剣であることを指摘。
  - **ghywertelling**: SF作家Greg Eganの難読化手法として「[任意のメールボックス] [at] [このウェブサイトのドメイン名]」という記述を例示。

---

## Trends

本日のHNトップ10から見えるトレンドは以下の通り。

1. **プライバシーと監視への懸念**: LinkedInの違法スキャン疑惑（#1）・メール難読化（#10）・フィッシング攻撃（#8）と、ユーザーのプライバシーやセキュリティを脅かすテーマが複数ランクイン。デジタル環境における個人情報の取り扱いへの関心が引き続き高い。

2. **ローカルAI・オープンソースの台頭**: AMD Lemonade（#2）やCodexによるデータ分析（#9）など、AIをクラウドに依存せずローカルで動かす動きが加速。コスト・プライバシー・速度の観点からオープンソース実装への需要が増している。

3. **教育とテクノロジーの再評価**: スウェーデンのデジタル化見直し（#4）はHNコミュニティで最も議論を呼んだ。テクノロジーが必ずしも教育を改善しないという実証研究が増える中、「アナログ回帰」への共感が広がっている。

4. **エンタープライズとARMの邂逅**: IBMとArmの協業（#5）はARMアーキテクチャが組み込み・モバイルを超えてメインフレームレベルまで到達したことを示す象徴的な出来事として注目された。

5. **セキュリティ報告の爆発的増加**: Linuxカーネルの脆弱性報告数急増（#6）は、バグハンティングのAI活用や自動化ツールの普及が背景にあると考えられ、オープンソースのセキュリティプロセス全体の変革を示唆している。
