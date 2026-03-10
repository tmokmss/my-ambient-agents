---
title: "Hacker News トップ10ストーリー（2026年3月10日）"
date: "2026-03-10T13:22"
category: "summary"
summary: "Redox OSのLLM禁止ポリシー、LeCunのAIスタートアップ10億ドル調達、Emacs 2年間ソロ体験記など"
tags: ["hackernews", "daily", "tech"]
---

## 1. [Two Years of Emacs Solo](https://www.rahuljuliato.com/posts/emacs-solo-two-years)

**Score:** 291 | **Comments:** 95 | [Post](https://news.ycombinator.com/item?id=47317616)

2年間にわたるEmacs単独使用の体験記。著者はIDEなどのツールに依存せず、Emacsのみで開発環境を構築してきた過程を振り返っている。設定の試行錯誤や習得の苦労、そして最終的に得られた深いカスタマイズ性について詳述している。

### Key Discussion Points

- **obezyian**: Ctrl+Zを誤って押し続け、vimをクラッシュしていると思い込んでいたシニアsysadminの逸話を紹介。ジョブ管理（`bg`/`fg`）を15年のキャリアで一度も学んでいなかったという、エディタ学習曲線の深さを示す話題。
- **k_bx**: Emacsのデフォルトのバックアップファイル（`foo~`）がnginxに読み込まれてトラブルになった体験を共有。コミュニティがデフォルト変更に批判的だったことへの不満も吐露し、Emacsの学習コストについて議論が盛り上がった。

---

## 2. [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md)

**Score:** 230 | **Comments:** 213 | [Post](https://news.ycombinator.com/item?id=47320661)

RustベースのOS「Redox OS」がコントリビューションガイドラインを更新し、Developer Certificate of Origin（DCO）の義務化とLLM生成コードの完全禁止を明記した。AI生成コードのレビュー負担増大への対応として注目を集めている。

### Key Discussion Points

- **ptnpzwqd**: LLMコード禁止ポリシーはOSSメンテナーのレビュー負担を減らす実用的なフィルタとして機能すると支持。「コード自体がかつては努力の証明だった」と述べ、表面上は正しく見えるAI生成PRが急増している現状を指摘した。
- **eatonphil**: 100以上の主要OSSプロジェクトを調査した結果、AI支援コミットを禁止しているのはNetBSD、GIMP、Zig、qemuの4プロジェクトのみで、Linux・curl・DuckDB・Elasticsearchなど70プロジェクトはすでにAI支援コミットを受け入れていると報告。業界の実態を数字で示す形で議論を深めた。

---

## 3. [I put my whole life into a single database](https://howisfelix.today/)

**Score:** 165 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=47321233)

著者が自分の人生のあらゆるデータ（気分、食事、睡眠、活動など）を単一のデータベースに記録し続けてきた「定量化された自己（Quantified Self）」プロジェクトの報告。数百時間を費やした結果と得られた洞察をまとめている。

### Key Discussion Points

- **brodo**: 独自ソリューションの構築に費やした膨大な時間に対してリターンが見合わないと指摘。「Quantified Selfムーブメントはインサイトよりも強迫観念や完璧主義から来ているのではないか」と鋭い批評を加えた。
- **ismailmaj**: 栄養・睡眠などの客観的指標は有益だが、気分などの主観的指標は快楽適応により有用性が低いと分析。Obsidian + QuickAddスクリプトを使った自身のトラッキング手法を紹介し、「意味のある指標だけ追う」という実用的なアプローチを共有した。

---

## 4. [Yann LeCun's AI startup raises $1B in Europe's largest ever seed round](https://www.ft.com/content/e5245ec3-1a58-4eff-ab58-480b6259aaf1)

**Score:** 142 | **Comments:** 94 | [Post](https://news.ycombinator.com/item?id=47321533)

Meta社のチーフAIサイエンティストであるYann LeCunが新しいAIスタートアップを設立し、欧州史上最大のシードラウンドとなる10億ドルの資金調達を実施。LeCunはLLMの限界を長年主張しており、新会社では異なるアーキテクチャを追求するとみられる。

### Key Discussion Points

- **ZeroCool2u**: 米中に依存しない欧州独自のAI研究機関としての意義を強調。MistralがフロンティアモデルでRaceから遅れをとっている現状を踏まえ、欧州のAI競争力維持のためにLeCunの取り組みを歓迎する論調を展開。
- **A_D_E_P_T**: LLMは静的テキストからのみ学習するため根本的に上限があると主張。「世界そのものから学習する」時空間ワールドモデルへのアプローチが真のブレークスルーをもたらす可能性があると述べ、LeCunの方向性を支持した。

---

## 5. [The Gervais Principle, or the Office According to "The Office" (2009)](https://www.ribbonfarm.com/2009/10/07/the-gervais-principle-or-the-office-according-to-the-office/)

**Score:** 113 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=47286657)

2009年に公開されたVenkatesh Raoの名著的エッセイが再び注目を集めた。ドラマ「ザ・オフィス」の登場人物を通じて企業組織の権力構造（Sociopath・Clueless・Loser）を分析したもので、今日も多くの読者に影響を与えている。

### Key Discussion Points

- **alecco**: 過去のHN議論へのリンクを提示し、このエッセイが長年にわたり繰り返し取り上げられてきた古典的コンテンツであることを示した。
- **ma2kx**: マクロードのライフサイクルと「Illuminatus!」に登場する5つの季節（混沌・不和・混乱・官僚制・余波）との類似点を指摘。組織論の枠を超えた哲学的な議論に発展した。

---

## 6. [Lotus 1-2-3 on the PC with DOS](https://stonetools.ghost.io/lotus123-dos/)

**Score:** 130 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=47279633)

DOSとLotus 1-2-3の歴史的な組み合わせを懐かしく振り返る記事。初期のパーソナルコンピューティング時代のスプレッドシートの革命的な影響と、当時のユーザー体験を詳細に描写している。

### Key Discussion Points

- **sedatk**: 懐かしさを感じながらも、DOSBoxのTrueTypeフォントが「シンセウェーブを聴くような感覚—時代の要素があるが、やはり異質」と的確に表現。トルコのTV番組でLotus 1-2-3を学んだ個人的体験を共有し、スプレッドシートを「コンピューティング史上最大の発明の一つ」と称えた。
- **robertandrewp**: スプレッドシートが金融数学を民主化したと指摘。1983年から変わらない償却計算やIRRの実装を例に挙げ、「ExcelからPythonライブラリ、REST APIへの進化はすべて同じ計算の異なる表現層に過ぎない」と述べた。

---

## 7. [LoGeR – 3D reconstruction from extremely long videos (DeepMind, UC Berkeley)](https://loger-project.github.io)

**Score:** 84 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=47319620)

DeepMindとUC Berkeleyが共同開発した「LoGeR」は、数時間に及ぶ超長尺動画から3D環境を再構築する技術。従来手法では困難だった長時間コンテンツへの対応を実現し、ロボット工学やAR/VRへの応用が期待される。

### Key Discussion Points

- **Dead_Lemon**: LiDARシステムを再現しようとする努力に疑問を呈し、「近似的な推測による精度への懸念とハルシネーションのリスク」を指摘。実用性よりも技術デモとしての側面を強調した。
- **_fw**: 「Cyberpunk 2077のブレインダンス調査シーンそのもの」とSF的な印象を表現。研究の先進性を端的に示すコメントとして多くの共感を集めた。

---

## 8. [FreeBSD 14.4-Release Announcement](https://www.freebsd.org/releases/14.4R/announce/)

**Score:** 46 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=47321499)

FreeBSD 14.4がリリースされ、Bhyve仮想マシンのホストとのファイルシステム共有（p9fs）など複数の改善が含まれている。安定性を重視したメンテナンスリリースとして、長期運用環境での採用が続く。

### Key Discussion Points

- **sidkshatriya**: 新規インストールには15.0を推奨しつつ、FreeBSDの強みを詳述。「よく整備されたOSと優れたドキュメント」「Linuxよりも少ない機能で習得しやすい」「Netflix等の大手が重要インフラに採用」など、Linuxモノカルチャーへの代替としての価値を主張した。
- **basemi**: Bhyve VMがp9fsでホストとファイルシステムを共有できるようになった新機能を歓迎し、仮想化ワークフローの改善を評価した。

---

## 9. [Ask HN: Remember Fidonet?](https://news.ycombinator.com/item?id=47321760)

**Score:** 51 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=47321760)

かつて世界規模で普及していたBBSネットワーク「FidoNet」を懐かしむスレッド。現在もダイハードなユーザーたちによって細々と運営されていることを確認しつつ、インターネット普及前のデジタルコミュニティ文化が回顧されている。

### Key Discussion Points

- **rozzie**: Lotus Notesの開発者としての視点からFidoNetを評価。Tom Jennningsの発明を「素晴らしいイノベーション」と称え、分散型アーキテクチャへの共鳴を語った。「60年代のイデアリズムが色濃く反映された、分散化の黎明期」と時代を総括した。
- **flyinghamster**: シャンペーン・アーバナ（Net 232）やシカゴ（Net 115）でのFidoNet参加経験を共有。インターネット普及とともに急速にシーンが消えていった地域の記憶を語り、懐かしさと喪失感を表現した。

---

## 10. [Practical Guide to Bare Metal C++](https://arobenko.github.io/bare_metal_cpp/#_abstract_classes)

**Score:** 33 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=47284461)

ベアメタル環境（OSなし組み込みシステム）向けC++の実践的ガイド。抽象クラス・テンプレート・constexprなど、組み込み開発で活用できるC++機能とそのベストプラクティスを体系的に解説している。

### Key Discussion Points

- **myrmidon**: C++の優位性に反論し、「低レベル組み込みではCの方が言語の複雑さが少ない」と主張。C APIへのC++ラッパー作成やツールチェーンの複雑さが実益を上回るとして、ベアメタルでのC++採用に懐疑的な立場を示した。
- **pjmlp**: タグディスパッチの旧来的なイディオムに対し、`constexpr`やコンセプト（Concepts）という現代的な代替手段があると指摘。モダンC++の進化を踏まえた議論を促した。

---

## Trends

**1. AIコード・LLMポリシーの分断**
Redox OSのLLM禁止ポリシーが213コメントと今日最大の議論を巻き起こした。OSSコミュニティでは「レビュー負担軽減」派と「現実には広く受け入れられている」派が対立しており、AI生成コードの扱いをめぐる業界全体の摩擦が顕在化している。

**2. LLMの限界とNext-Gen AIへの期待**
Yann LeCunの10億ドル調達は「LLMを超えたAI」への強い投資意欲を示す。静的テキスト学習の限界を指摘する声とともに、LoGeRのような世界モデルアプローチが次世代AIの文脈で注目されている。

**3. ノスタルジアとレトロテックへの関心**
Lotus 1-2-3、FidoNet、FreeBSDと、過去の技術を振り返る話題が複数ランクイン。コンピューティングの原点や分散化の理念への回帰願望が、現在のビッグテック支配への反省と重なって浮き上がっている。

**4. 個人の深い体験の共鳴**
Emacs 2年間体験記や「人生をデータベースに入れた」という個人プロジェクトが高スコアを獲得。HNユーザーは大企業のニュースより、一個人の深い探究の記録に強く反応する傾向が再確認された。

**5. ツール・言語論争の継続**
C vs C++（ベアメタル）、Emacs vs 他エディタといった定番の議論が今日も活発。こうした技術選択の議論はHNの永続的なテーマとして根強い。
