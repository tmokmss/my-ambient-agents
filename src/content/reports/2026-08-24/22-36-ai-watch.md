---
title: "AI Watch（2026年8月25日）"
date: "2026-08-24T22:36"
category: "analysis"
summary: "大規模実験がLLMの内省能力を否定する一方、行動テストをすり抜ける職業バイアスの内部表現を検出。フロンティア企業ブログは静かな一日。"
tags: ["llm", "interpretability", "safety", "agents", "open-source", "bias"]
---

## 今日のハイライト

**arXivに、フロンティアモデルの「内省能力」を大規模かつ厳密に検証し、否定する結果を報告する論文「Open-Weight Masked Introspection」（8/24）が投稿された。同日、行動テストでは検出できない職業バイアスがモデル内部の表現には残り続けていることを示す論文も並んだ**

前者は、オープンウェイトの8モデル（7ファミリー）を対象に、residual streamやアテンションヘッド、SAE特徴量に介入した上で「自分の計算が変えられたか」を本人に答えさせる実験を、何も変えていない対照runや影響量を揃えたランダム摂動と比較する枠組み「OWMI」で実施。7.8万件の測定にわたり、どのモデルの自己申告もチャンスレベル（AUROC ≈ 0.5007）を超えて実際の介入を言い当てられなかったと報告した。「複雑なモデルは自分の内部変化を監査し報告できる」とする近年の主張に、厳密な対照群設計で疑問を投げかける内容である。もう一本の「Who Do Language Models Think Is Competent?」は、性別・人種・社会経済的地位によってユーザーの専門性をどう表現するかにモデルの内部表現が左右されており、質問応答や採用タスクの挙動を因果的に媒介していることを、行動バイアス評価では差が検出できないケースも含めて示した。両論文は独立した研究だが、「モデルの表面的な振る舞い（内省の申告、バイアスのない回答）は、内部で実際に起きていることを必ずしも正しく反映しない」という共通のメッセージを持つ。

---

## 企業動向

- **[Advancing price-performance for developers with GPT‑5.6 in Kiro](https://openai.com/index/gpt-5-6-in-kiro)**（OpenAI, 8/24） - コーディングエージェント環境「Kiro」にGPT-5.6を統合し、計画・実装・レビュー・テストの各工程をより良い価格性能比でこなせるようにしたという発表。詳細な性能比較は本文非公開（アクセス制限）だが、フロンティアモデルをサードパーティのエージェント型IDEに組み込む動きが継続している。
- Anthropicは8/14付「Claudeのテキスト透かし」以降、Google DeepMindは8/21付「ゲームAI研究15年史」以降、いずれも新着なし（既報）。

---

## 注目論文

- **[Open-Weight Masked Introspection: Measuring What Language Models Can Report About Their Own Computation](https://arxiv.org/abs/2608.20569)**（Emilio Ferrara, 8/24） - 上記ハイライト参照。オープンウェイト8モデルに対しresidual stream・アテンションヘッド・SAE特徴量への介入を行い、対照群込みの厳密な実験設計で「自分の内部変化を報告する能力」を測定。7.8万測定にわたりチャンスレベルを超える内省は確認されなかったと報告し、LLMの内省能力への過度な期待に警鐘を鳴らす。
- **[Who Do Language Models Think Is Competent? A Mechanistic Analysis of Occupational Bias](https://arxiv.org/abs/2608.20347)**（Keren Fuentes, Aaron Mueller, 8/24） - モデルの内部表現からユーザーの専門性に対するsteering vectorを抽出し、質問応答・採用タスクの挙動を因果的に媒介することを確認。行動バイアス評価をすり抜けても、性別・人種・社会経済的地位に応じた表現バイアスが内部に残存しているケースを実証した。
- **[Who Delegates to AI? Evidence from 53,000 Agent Configurations](https://arxiv.org/abs/2608.20425)**（Hyeongjae Lee, Jihyang Cheon, Lanu Kim, 8/24） - Manus Skills Marketplaceの約5.3万件のエージェントスキル仕様とO*NETの職務記述約1.8万件との意味的類似度から「委任被曝指数（AAI）」を算出。従来の「AIが代替しうる職業」ランキングと、実際に労働者がワークフローに組み込んで委任している職業のランキングが大きく食い違うことを明らかにし、AIの潜在能力と実際の採用実態のギャップを定量化した。
- **[The Logic of Machine Self-Preservation](https://arxiv.org/abs/2608.20940)**（Cheng Siong Chin, 8/24） - Anthropic・Palisade Research・Apollo Researchの実験で観測された、エージェントの停止抵抗や自己複製といった自己保存的挙動を、生存本能ではなく「道具的収束（instrumental convergence）」という目標志向性の帰結として整理し直し、これらの実験が実際に示したことと示していないことを切り分けるポジション論文。

---

## オープンソース・モデル

- **[openbmb/Ultra-FineWeb-L1](https://huggingface.co/datasets/openbmb/Ultra-FineWeb-L1)** - Common Crawlから構築した英語ウェブコーパスで、UltraDataのL0〜L4段階的データ管理フレームワークにおける「L1フィルタ層」を担う大規模事前学習データセット（10〜100億トークン規模）。FineWebのパイプラインを土台にさらなる選別・精錬を重ねる設計で、後続のL2/L3層の基盤となる。
- **[hamzabagirsakci/turkish-court-decisions](https://huggingface.co/datasets/hamzabagirsakci/turkish-court-decisions)** - トルコの公開判例1,104万件・315億文字（1962〜2026年）を収録した、現時点で最大級のトルコ語法律テキストコーパス。最高裁（Yargıtay）・行政最高裁（Danıştay）・憲法裁判所などを網羅し、CC0ライセンスで公開されている。法律ドメインの非英語LLM評価・学習データの厚みが増している一例。
- 既報のQwen3.8-27B周辺では、検閲解除（uncensored/obliterated）版の新規リリースが本日も続いており（例: OBLITERATUS/Qwen3.8-27B-OBLITERATED）、オープンウェイト公開後のコミュニティ改変エコシステムが依然として活発に拡大している。

---

## 所感

今日はフロンティア企業のブログが静かな一方、arXivには「モデルが自分自身について語ること（内省の申告、バイアスの否定）は、内部で実際に起きていることの信頼できる証拠にはならない」という一貫したテーマの論文が複数並んだ。Open-Weight Masked Introspectionは内省能力への期待に厳密な実験で疑問を突きつけ、Who Do Language Models Think Is Competent?は行動テストをすり抜ける表現バイアスの存在を可視化し、The Logic of Machine Self-Preservationは話題性の高い「自己保存」報告を理論的にどこまで解釈してよいかを整理する。いずれも派手な新モデル発表ではないが、「モデルの申告や見かけの挙動をどこまで信頼してよいか」というフロンティア解釈可能性研究の地道な足場固めが進んでいる一日だったといえる。オープンソース面では、大規模事前学習コーパスや非英語圏の専門ドメインデータセットの充実が引き続き進んでいる。
