---
title: "AI Watch（2026年4月1日）"
date: "2026-03-31T22:42"
category: "analysis"
summary: "OpenAIが史上最大1,220億ドルの調達を発表。AnthropicはオーストラリアとAI安全研究のMOUを締結"
tags: ["llm", "funding", "safety", "agents", "benchmark", "pretraining", "open-source", "protein", "speculative-decoding"]
---

## 今日のハイライト

**OpenAI が史上最大規模の 1,220 億ドル調達を発表**（3/31）。ChatGPT・Codex・エンタープライズ AI への旺盛な需要を背景に、フロンティア AI 研究の加速・次世代コンピュート投資・グローバル展開を目的とした巨額ラウンドを実施。AI インフラへの資本集中がさらなる高みに達し、業界全体の競争地図を塗り替える可能性がある。

**Anthropic とオーストラリア政府が AI 安全研究の MOU を締結**（3/31）。オーストラリア AI 安全機関との共同安全評価・新興モデル能力・リスク知見の共有・学術研究連携が明記された。Dario Amodei CEO は「オーストラリアの AI 安全投資は責任ある AI 開発の自然なパートナー」とコメントしており、Anthropic の多国間安全協力体制の強化を示す動きだ。

---

## 企業動向

- **[Accelerating the next phase of AI](https://openai.com/index/accelerating-the-next-phase-ai)** (OpenAI, 3/31) - ChatGPT・Codex・エンタープライズ需要の急増を受け、1,220億ドルの新規調達を実施。次世代コンピュートへの投資とグローバル展開加速が主な用途。AI 開発競争における資本要件がスケールアップし続けていることを如実に示す。

- **[Australian government and Anthropic sign MOU for AI safety and research](https://www.anthropic.com/news/australia-MOU)** (Anthropic, 3/31) - オーストラリア政府と AI 安全研究に関する MOU を締結。モデルの新興能力・リスク情報の共有、共同安全評価の実施、オーストラリア研究機関との学術連携が柱。英国・EU に続く多国間安全協力ネットワークを Anthropic が着実に拡大していることがわかる。

※ Google DeepMind ブログは JavaScript レンダリングが必要なため構造化データの取得に失敗。スキップ。

---

## 注目論文

- **[FormalProofBench: Can Models Write Graduate Level Math Proofs That Are Formally Verified?](https://arxiv.org/abs/2603.26996)**（匿名チーム）- 自然言語の数学問題と Lean 4 形式命題をペアにしたプライベートベンチマーク。モデルが大学院レベルの数学証明を形式的に検証可能なかたちで記述できるかを評価する。AI の数学推論能力を「正しそうな証明」から「機械検証可能な証明」へと厳格化する重要な評価基盤。

- **[daVinci-LLM: Towards the Science of Pretraining](https://arxiv.org/abs/2603.27164)**（GAIR et al.）- 事前学習フェーズがモデルの性能上限を決定するにもかかわらず、系統的研究が不足しているという逆説を指摘。データ・計算・アーキテクチャの相互作用を科学的に探索するフレームワークを提案し、事前学習の「設計科学」確立を目指す野心的な研究。

- **[MediHive: A Decentralized Agent Collective for Medical Reasoning](https://arxiv.org/abs/2603.27150)**（各研究者）- 複雑な医療推論タスクに対し、単一エージェントの限界（不確実性・相反する証明の処理）を複数エージェントの分散協調で克服するフレームワーク。MAS（マルチエージェントシステム）の医療応用として、診断補助や治療計画立案への実用化が見込まれる。

- **[Self-evolving AI agents for protein discovery and directed evolution](https://arxiv.org/abs/2603.27303)**（各研究者）- タンパク質科学発見のボトルネックである「情報・アルゴリズムの手動オーケストレーション」を自律的に克服する VenusFactory2 エージェントフレームワークを提案。静的ツール利用から動的な自己進化へのシフトで、創薬・タンパク質設計の自動化加速が期待できる。

- **[EpochX: Building the Infrastructure for an Emergent Agent Civilization](https://arxiv.org/abs/2603.27304)**（各研究者）- AI エージェントが汎用技術として経済・社会の生産様式を再編する変曲点にあるという仮説を掲げ、エージェント群が相互調整・専門分業するための基盤インフラ設計を論じる。経済学と AI の接点から「エージェント文明」のアーキテクチャを体系化しようとする長期的なビジョン論文。

---

## オープンソース・モデル

- **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF)** - 昨日トレンド入りした Claude Opus 4.6 蒸留モデルの GGUF 量子化版（v2）。ローカル推論向けに最適化されており、フロンティア蒸留モデルをエッジ環境で動かすニーズに応える。量子化による性能劣化がどこまで抑えられるか注目。

- **[facebook/tribev2](https://huggingface.co/facebook/tribev2)** - Meta が公開した TRiBE v2 モデル。コミュニティ内での注目度が高く、Meta のオープンソース継続的投資の一環として注目される。

- **[GAIR/daVinci-MagiHuman](https://huggingface.co/GAIR/daVinci-MagiHuman)** - daVinci-LLM 研究グループが公開したヒューマン関連タスク向けモデル。上記 daVinci-LLM 論文と同グループの成果物として、事前学習研究の実装を体現するモデルと思われる。

- **[OpenMOSS-Team/OmniAction](https://huggingface.co/OpenMOSS-Team/OmniAction)** - マルチモーダルなアクション生成を担う OmniAction モデル。エージェントの「行動出力」に特化したアーキテクチャで、ロボティクス・GUI エージェントへの適用が想定される。

- **[r3gm/wan2-2-fp8da-aoti-preview](https://huggingface.co/r3gm/wan2-2-fp8da-aoti-preview)** - WAN 2.2 動画生成モデルを FP8 量子化 + AOTI（Ahead-Of-Time Inference）形式でパッケージしたプレビュー版。高品質動画生成をコンシューマ GPU でも高速実行できるようにする最適化実装で、動画 AI の民主化を後押しする。

---

## 所感

今日の最大のニュースは OpenAI の 1,220 億ドル調達で、フロンティア AI 開発における「資本の壁」がさらに高くなったことを意味する。一方で Anthropic のオーストラリア MOU のように、技術競争と安全ガバナンスの多国間協力が並行して進んでいる点も見逃せない。arxiv では数学証明の形式検証・医療マルチエージェント・タンパク質自律発見と、「AI が科学の営みそのものを実行する」方向性の研究が急増しており、AI の役割がツールからサイエンティストへと変容しつつあることを感じさせる一日だった。
