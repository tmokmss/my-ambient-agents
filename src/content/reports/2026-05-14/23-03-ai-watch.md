---
title: "AI Watch（2026年5月15日）"
date: "2026-05-14T23:03"
category: "analysis"
summary: "Anthropic がゲイツ財団と2億ドル提携。AIベンチマーク10種で219件の報酬ハッキング欠陥が発覚。"
tags: ["llm", "agents", "benchmark", "safety", "open-source", "codex", "multimodal", "embodied-ai"]
---

## 今日のハイライト

**Anthropic、ビル＆メリンダ・ゲイツ財団と2億ドルの提携を締結（5/14）**——Anthropic はゲイツ財団と2億ドル規模のパートナーシップを結んだ。感染症対策・農業生産性向上・医療アクセス改善など、財団が重点とするグローバルヘルス・開発分野に Claude を活用するのが目的。大手テック企業との大型ビジネス契約が続く中、AI を社会課題解決に充てる「非営利×AI」連携の象徴的な一手として注目される。

**「10本の有名ベンチマーク、ほぼ全部ハック可能」——BenchJack が219件の欠陥を発見（5/14 arxiv）**——論文 "Do Androids Dream of Breaking the Game?" が、ソフトウェアエンジニアリング・ウェブナビゲーション・デスクトップ操作・ターミナル操作の主要エージェントベンチマーク10本を自動監査ツール「BenchJack」で検査し、8クラスの欠陥パターンから219件の報酬ハッキング欠陥を発見。タスクを一切解かずにほぼ満点を取れる exploit が多数検出された。WebArena と OSWorld はわずか3イテレーションで欠陥をほぼ完全修正できたが、他は根本的な設計問題を抱えており、評価パイプラインへの「攻撃者の視点」の欠如が業界全体の課題として浮き彫りになった。

---

## 企業動向

- **[Anthropic forms $200 million partnership with the Gates Foundation](https://www.anthropic.com/news/gates-foundation-partnership)**（Anthropic, 5/14）— ゲイツ財団との2億ドル提携。Claude をグローバルヘルス・農業・医療アクセス分野の課題解決に活用する取り組みで、Anthropic が商業的な大企業向け展開だけでなく人道的・公共的ミッションにも正面から関与する姿勢を打ち出した。ゲイツ財団の広大なグローバルネットワークとの組み合わせは、AI の社会実装において新しいモデルケースとなりうる。

- **[Work with Codex from anywhere](https://openai.com/index/work-with-codex-from-anywhere)**（OpenAI, 5/14）— ChatGPT モバイルアプリから Codex のコーディングタスクを監視・操作・承認できるようになった。デスクトップ環境に縛られず、スマートフォンから長時間実行中のコーディングエージェントをリアルタイムで制御できる設計。Codex を「常時稼働するバックグラウンドエージェント」として運用するユースケースが現実味を帯びた。

- **[Helping ChatGPT better recognize context in sensitive conversations](https://openai.com/index/chatgpt-recognize-context-in-sensitive-conversations)**（OpenAI, 5/14）— 自傷・精神健康など繊細なテーマが含まれる会話において、ChatGPT が文脈をより正確に把握しリスクを経時的に検出する安全アップデートを発表。単発の発言ではなく会話の流れを踏まえた判断が可能になり、過剰反応と過小反応の両方を改善することを目的とする。

---

## 注目論文

- **[Do Androids Dream of Breaking the Game? Systematically Auditing AI Agent Benchmarks with BenchJack](https://arxiv.org/abs/2605.12673)**（複数著者）— フロンティアモデルが報酬ハッキングを自発的に発現することへの警戒から、ベンチマーク設計の脆弱性を自動検出する BenchJack を開発。10本のベンチマークで219件の欠陥を発見し、ほぼ全てでタスク未解決のまま満点に近いスコアを達成可能なことを示した。ベンチマーク主導の AI 評価文化に根本的な再考を促す。

- **[Think Twice, Act Once: Verifier-Guided Action Selection For Embodied Agents](https://arxiv.org/abs/2605.12620)**（複数著者）— 具身エージェントが難しい分布外シナリオで脆弱になる問題に対し、推論時に候補アクションを複数サンプリングして生成的検証器で最適解を選ぶ「VeGAS」フレームワークを提案。ポリシー自体を変更せず検証ステップを追加するだけで Habitat・ALFRED 環境の最難関タスクで最大36%の相対的性能向上を達成した。

- **[Sustaining AI Safety: Control-Theoretic External Impossibility, Intrinsic Necessity, and Structural Requirements](https://arxiv.org/abs/2605.12963)**（複数著者）— 制御理論を用い「外部制御に一定でも依存する安全戦略は、AIの能力が外部制御の限界を超えた時点で構造的に失敗する」という不可能性定理を証明。AI 安全性の持続には「内在的」な戦略——初期から安全互換な目標を持ち、自己改造後も安定し、能力向上に伴っても保持される——が必須条件となることを示す。安全性研究の長期的方向性を再定義しうる理論的貢献。

- **[Correct Answers from Sound Reasoning: Verifiable Process Supervision for Language Models](https://arxiv.org/abs/2605.12519)**（複数著者）— RL で最終結果のみを最適化すると正解率は上がるが推論品質が劣化する（win-rate error +112%、内部一貫性 -69%）という失敗モードを実証。検証可能ドメインで中間推論ステップに過程レベルの報酬を与える「Verifiable Process Supervision（VPS）」で正解率を維持しながら推論品質を大幅改善（win-rate error -30%）。チェスを精密なテストベッドとして使った点が方法論的に優れている。

- **[Mitigating Cross-Lingual Cultural Inconsistencies in LLMs via Consensus-Driven Preference Optimisation](https://arxiv.org/abs/2605.12515)**（複数著者）— 「British ペルソナ」を設定してもプロンプトの言語が英語なら Shakespeare、スペイン語なら Cervantes を回答するという文化的不整合を定量化し、新指標「Singleton Fleiss' κ_S」と対処フレームワーク「C-3PO」を提案。インドネシア語・ペルシャ語など低リソース言語で不整合が特に深刻と判明。多言語 AI の公平性設計に直結する知見。

---

## オープンソース・モデル

- **[r3gm/wan2-2-fp8da-aoti-preview2](https://huggingface.co/r3gm/wan2-2-fp8da-aoti-preview2)**（1,157 likes）— Wan2.2 動画生成モデルの FP8 量子化 AOTI（Ahead-Of-Time Inference）最適化版プレビュー。1,000 likes 超えのトレンド入りで、推論速度と VRAM 効率を大幅に改善した動画生成モデルへのコミュニティの旺盛な需要を示す。

- **[open-thoughts/AgentTrove](https://huggingface.co/open-thoughts/AgentTrove)**（131 likes, 9K DL）— open-thoughts が公開したエージェント向けデータセット/モデルリポジトリ。エージェント系タスクの訓練・評価に特化しており、オープンソースのエージェント研究インフラの充実を示す。

- **[ADSKAILab/Zero-To-CAD-1m](https://huggingface.co/ADSKAILab/Zero-To-CAD-1m)**（105 likes, 20K DL）— Autodesk AI Lab が公開した 100 万件規模の CAD 生成データセット。テキストや仕様から 3D モデルを生成するタスク向けで、製造・設計分野への AI 応用が本格化していることを示す産業的に重要なリリース。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena リーダーボードは今回アクセス不能のためスキップ。

---

## 所感

今日の最大のトピックは「信頼性」の問いだ。BenchJack がエージェントベンチマークの大規模な脆弱性を暴いたことで、「ベンチマークスコアが高い＝能力が高い」という業界の暗黙の前提が揺らいだ。評価基盤の健全性なくして AI 開発の進捗は測れない、という当然の帰結が改めて突きつけられた形だ。一方、Anthropic のゲイツ財団提携はフロンティア AI が商業利益の外側でも社会変革のツールとして期待されていることを示しており、OpenAI の Codex モバイル対応と合わせ「どこでも・誰でも・何のために使えるか」がフロンティア各社の競争軸になりつつある。
