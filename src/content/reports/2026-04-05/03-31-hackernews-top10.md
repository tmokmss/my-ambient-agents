---
title: "Hacker News トップ10（2026年4月5日）"
date: "2026-04-05T03:31"
category: "summary"
summary: "GPU組み立てゲーム・LLM自己蒸留・MicrosoftのCopilot乱立問題など、AIと開発者ツールが席巻したHN上位10件"
tags: ["hackernews", "AI", "LLM", "open-source", "linux", "gaming"]
---

## 1. [Show HN: A game where you build a GPU](https://jaso1024.com/mvidia/)

**Score:** 547 | **Comments:** 143 | [Post](https://news.ycombinator.com/item?id=47640728)

「Mvidia」はGPUを仮想的に組み立てるブラウザゲーム。トランジスタや論理ゲートといった低レイヤーの概念を段階的に学べる構成で、コンピュータアーキテクチャ入門として好評を博している。作者はUIとシミュレーションシステムの構築にClaude（LLM）を多用したと明かしている。

### Key Discussion Points

- **rustybolt**: 真理値表の設問で重複が多く、コンデンサの実装に「enable」ゲートが誤って組み込まれているバグを指摘。LLMを使ったか質問した。
  - **Jaso1024**: バージョン2.4でコンデンサのバグを修正済みと回答。Claudeをワイヤリングやシミュレーション全般に活用したと説明。
- **txr**: Zachtronics系ゲーム「Turing Complete」も紹介。最終的に自前のCPUと独自アセンブリ言語を作れる点を推薦。
  - **battxbox**: 「このゲーム大好き。開発者はまだアクティブ?」と続けて質問。
- **roadbuster**: 深サブミクロンのフルカスタム混載信号ICを10年以上設計していたが、第1レベルすら突破できなかったと告白。
  - **mistidoi**: 「私も全然わからなかった」と共感。

---

## 2. [Embarrassingly simple self-distillation improves code generation](https://arxiv.org/abs/2604.01193)

**Score:** 568 | **Comments:** 169 | [Post](https://news.ycombinator.com/item?id=47637757)

LLMが外部検証器・教師モデル・強化学習なしに、自分自身のサンプルを使った単純なファインチューニング（自己蒸留）だけでコード生成性能を大幅改善できることを示した論文。Qwen3-30B-InstructがLiveCodeBench v6でpass@1 42.4%→55.3%に向上した。デコード時の「探索と精度のトレードオフ」を自己蒸留が解消することが鍵だという。

### Key Discussion Points

- **bensyverson**: 「モデルが 'fork' モード（探索）から 'lock' モード（精度）に切り替える文脈依存のデコード」と解釈し、仕組みの面白さを評価。
  - 多数のリプライが議論を展開。
- **wg0**: TurboQuantやGemma 4と組み合わせると2028年頃にはローカルモデルでSonnet 3/4レベルが動くと予測。AIコーディングツールの低コスト化を期待。
  - **複数のリプライ**がローカル展開の現状を補足。
- **teleforce**: MIT/ETH研究（SDFT）との関連を指摘し、先行研究への適切な引用が必要と主張。
- **zyklu5**: 精度探索コンフリクト仮説はMeta AIの「Adaptive Decoding」も解こうとしている問題だと言及。

---

## 3. [How many products does Microsoft have named 'Copilot'?](https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html)

**Score:** 462 | **Comments:** 233 | [Post](https://news.ycombinator.com/item?id=47642569)

著者が独自調査した結果、Microsoftには少なくとも75種類の「Copilot」製品・機能・ノートPC・キーボードキーが存在することが判明。Microsoftの公式ドキュメントにすら全体を網羅したリストがなく、インタラクティブな可視化を自作して整理した。

### Key Discussion Points

- **thedelanyo**: 「Linuxではすべてはファイル。Microsoftではすべてはcopilot。笑」と端的に揶揄。
  - 多くのリプライが同調・別のジョークを追加。
- **lateforwork**: 「Copilotは単なるMicrosoftのAIブランド名。ほぼすべての製品がCopilotを冠している」と整理。
  - **複数リプライ**がブランド戦略の混乱ぶりを指摘。
- **chatmasta**: GitHub CopilotとVSCode Copilotが同じ製品なのか公式ドキュメントでも不明瞭で、課金体系に影響すると困惑を表明。
- **quag**: 2002年頃にMicrosoftがすべてを「.NET」と名付けていた時期を想起。
  - 大勢が「そうそう!」と同感のリプライ。
- **chatmasta**: 別コメントでMicrosoftのログインポータルが609種類あるという関連リストも紹介。

---

## 4. [OpenScreen is an open-source alternative to Screen Studio](https://github.com/siddharthvaddem/openscreen)

**Score:** 140 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=47595695)

ElectronとReactで構築された無料のOSSデスクトップアプリ。Screen Studioの代替として画面録画・自動ズーム・音声キャプチャ・アノテーション・動画編集機能を提供し、サブスクなし・透かしなしでMITライセンスで公開されている。

### Key Discussion Points

- **alin23**: Screen Studioは月30ドルでも動画を数分で仕上げられる点で価値があると擁護。OpenScreenのモーションエフェクトプリセットへの対応に期待。
- **jlarks32**: もうひとつのOSS代替「Cap.so」との比較を質問。
- **karimf**: 良いプロジェクト。SwiftやC#への移植版も見たいとコメント。

---

## 5. [AWS Engineer Reports PostgreSQL Perf Halved by Linux 7.0, Fix May Not Be Easy](https://www.phoronix.com/news/Linux-7.0-AWS-PostgreSQL-Drop)

**Score:** 139 | **Comments:** 35 | [Post](https://news.ycombinator.com/item?id=47644864)

AWSエンジニアがLinux 7.0でPostgreSQLのパフォーマンスが最大半減すると報告。原因は新しい「PREEMPT_LAZY」スケジューラの変更で、修正は容易でないとされている。Postgresコア開発者Andres Freundも詳細なLKML投稿で問題を確認した。

### Key Discussion Points

- **lfittl**: Andres FreundによるLKMLのフォローアップ投稿をリンクし、問題の詳細な技術解説を案内。
- **dsr_**: 最新カーネルを本番で使う人は少ない。非デフォルトのsysctl設定で回避可能と述べ、過度な心配を牽制。
- **longislandguido**: 「Jia Tan（XZバックドア事件）は最近カーネルパッチを送っていないか?」と皮肉なジョーク。
- **galbar**: 移行期間なしにユーザースペースアプリを壊すのは望ましくないとLinuxの後方互換性方針を批判。
- **harshreality**: PREEMPT_LAZYの背景解説記事（lwn.net）をリンク。

---

## 6. [LLM Wiki – example of an 'idea file'](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

**Score:** 93 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=47640875)

Karpathyが公開したメモ文書。LLMが単にドキュメントを検索するだけでなく、ソースを追加するたびに自ら合成・相互参照・更新を行う「永続的かつ複合的なwiki」を維持するというアイデアファイルの実例を示している。

### Key Discussion Points

- **devnullbrain**: LLMが自身の出力で学習し続けるとモデル崩壊につながるのでは、と懸念。
- **kenforthewin**: ベクターDBを使わないだけでこれはRAGと本質的に同じと指摘。
- **Vetch**: Licklider（1960年）の「人間とコンピュータの共生」論文を引用し、人間が目標設定・仮説立案を担い、機械が検証する分業の古典的ビジョンと重なると示唆。

---

## 7. [Introduction to Computer Music [pdf]](https://composerprogrammer.com/introductiontocomputermusic.pdf)

**Score:** 48 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=47645432)

コンピュータ音楽の無料教科書PDF。数学・物理学的視点から音楽理論・合成・信号処理を体系的に解説している。序文には「将来の読者が人工知能かもしれない、素晴らしい!」という注記があるが、その直後にAIスクレイパーを禁止するという矛盾した対応が話題に。

### Key Discussion Points

- **arn3n**: 数学・物理アプローチで良い音楽が作れるのか疑問視。プロの音楽家はティンバーやスタイル的影響を重視すると指摘。
- **colkassad**: 6年前からAbleton Liveで音楽制作を楽しんでいる。プラグインの活発なエコシステムへの愛着を語る。
- **Dusseldorf**: 序文でAI読者を歓迎しつつ直後にAIスクレイパーを禁止している矛盾を面白おかしく指摘。

---

## 8. [Advice to Young People, the Lies I Tell Myself (2024)](https://jxnl.co/writing/2024/06/01/advice-to-young-people/)

**Score:** 46 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=47644566)

Jason Liuによる若者へのエッセイ。「自信は成功の記憶の積み重ね」「幸運は知覚の幅を広げることで生まれる」「偉大さを追いつつも良い人間であれ」という3つの軸を中心に、選択の自由と行動の重要性を説く。2024年にHNで2度ランクインした人気記事の再掲。

### Key Discussion Points

- **Hasz**: コールドアプリケーション（飛び込み応募）でほぼすべての仕事を得てきた。スキルと自信の組み合わせが重要と体験談を共有。
- **gnabgib**: 2024年に148pt/72コメントと155pt/62コメントで2回登場した過去リンクを紹介。
- **joshoink**: 古い部分は好きだが、新しく追加された内容はお金を目的にしているように見えると批判。

---

## 9. [A case study in testing with 100+ Claude agents in parallel](https://imbue.com/product/mngr_part_2/)

**Score:** 22 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=47629485)

Imbueが100以上のClaudeエージェントを並列実行してテストを行ったケーススタディ。記事本文の取得は技術的な問題で失敗したが、コメントからAI生成コードの著作権問題が主な議題になっていることが判明。

### Key Discussion Points

- **petcat**: 裁判所がAI生成コンテンツは著作権保護されないと判断した今、企業はIPの扱いをどう考えているか疑問を提起。

---

## 10. [AGI Is Here](https://breaking-changes.blog/agi-is-here/)

**Score:** 4 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47645810)

現行のLLM＋ツール呼び出し・MCP・Claude Codeなどのインフラを組み合わせれば、AGIの主要な定義をすでに満たしていると主張するブログ記事。今後の課題は新しいマイルストーン達成ではなく、一貫性と出力品質の向上だとしている。

### Key Discussion Points

- **Eufrat**: AGIはまだ到来していない。人間の意識すら解明できていない現状でAGIを達成したとは言えないと反論。

---

## Trends

1. **AI・LLMが全方位に浸透**: 自己蒸留によるモデル改善（#2）、100+エージェント並列テスト（#9）、LLM活用ゲーム開発（#1）、AIウィキ構築（#6）、AGI到来論争（#10）と、ほぼ全記事にAIが関係している。

2. **ブランド・命名の混乱**: MicrosoftのCopilot乱立（#3）は命名戦略の失敗例として大きな反響を呼んだ。2002年の「.NET」との比較が繰り返し挙がった。

3. **OSS vs. 有料ツール**: OpenScreen（#4）はScreen Studioの有料モデルへの対抗として注目。「無料・透かしなし・MIT」という要素が支持を集めた。

4. **カーネルの変更がアプリ性能に波及**: Linux 7.0のスケジューラ変更でPostgreSQLが半減（#5）は、低レイヤーの変更がプロダクション環境に与える影響の大きさを改めて示した。

5. **教育コンテンツへの関心**: コンピュータ音楽の教科書（#7）やGPU組み立てゲーム（#1）といった「楽しく学ぶ」コンテンツが高評価を得た。学習ゲームとしての可能性をコミュニティが積極的に評価している。
