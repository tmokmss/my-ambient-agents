---
title: "AI Watch（2026年10月17日）"
date: "2026-10-17T00:16"
category: "analysis"
summary: "Gemini 4 Argon の4エージェントが Minecraft のエンダードラゴンを撃破（論文）。OpenAI は導入事例が中心。Ling-3.1-flash など新着OSSモデル"
tags: ["llm", "agents", "gemini", "open-source", "benchmark"]
---

## 今日のハイライト

- **Google DeepMind が、Gemini 4 Argon のエージェント4体だけで Minecraft のエンダードラゴンを倒した（10/16 発表の arxiv 論文）。** 役割分担やゲームロジックは人が書かず、エージェントが自分でプログラムを書いてデバッグし、チャットと共有メモリで協調した。長時間の自律エージェント運用の実例として注目される。
- **新着の公式発表は少ない日だった。** Anthropic の最新は 10/15 の独立評価機関に関する記事で、前回掲載済み。OpenAI は 10/16 に 2 件の導入事例を出したのみ。

## 企業動向

- **[How Itaú is building generative AI for its entire customer base](https://openai.com/index/itau-generative-ai)** (OpenAI, 10/16) - ブラジルの Itaú が、対話型インターフェース ia.i とガバナンス基盤 IARA を使い、AI First 戦略を顧客・従業員の双方に展開している事例。規制の厳しい金融分野での導入という点が特徴。
- **[Stack Overflow for Agents triples signups with ChatGPT plugin](https://openai.com/index/stack-overflow-chatgpt-plugin)** (OpenAI, 10/16) - 2 人のエンジニアが Codex で数週間のうちに Stack Overflow for Agents を作り、ChatGPT プラグインの効果でエージェント作成数が最大 10 倍に伸びたという事例。
- Anthropic（10/15 の独立評価機関に関する記事）と DeepMind（10/15 の抗菌ペプチド探索）は前回掲載済みのため省略。

## 注目論文

arxiv RSS は週末休止（土曜 UTC）のため、list ページより 10/16（金）発表分から選出。

- **[A team of Gemini 4 Argon agents beats Minecraft](https://arxiv.org/abs/2610.22319)** (Faldor, Singh, Raileanu, 10/16) - Argon 4 体を Mineflayer 経由で Minecraft に入れ、エンダードラゴン撃破を目標に与えた。2,783 本のプログラムを自作し、605 回死にながら 27 時間 14 分で撃破。人の介入はなかったとされる。
- **[Believed but Not Said: Measuring Hidden Belief Collapse in Multi-Agent LLM Discussions](https://arxiv.org/abs/2610.22138)** (Huang ほか, 10/16) - 10 体の議論で敵対的エージェントが 1 体いるだけで、善良なエージェントが誤答に落ちる率が 0.6% から 44.8% に上がった。相互チェックで誤りが捕まるという前提を崩す結果。
- **[Realtime-Bench: Can Frontier Models Solve Real-time Interactive Problems?](https://arxiv.org/abs/2610.22155)** (Tang ほか, 10/16) - 推論遅延がそのまま環境の進行に影響する動的タスク群。最良モデルでも成功率 44%、Pass^3 は 36% にとどまる。
- **[Shortcut Sensitivity in Agent-Safety Evaluations](https://arxiv.org/abs/2610.22243)** (Demirkiran, Ernstberger, 10/16) - エージェントの安全ガードの評価データに、シェルコマンドの短さのような手がかりが混ざり、本来の安全性とは無関係にラベルが予測できてしまうことを監査する枠組み。
- **[FDE-Gym: The Last Mile of AI Delivery](https://arxiv.org/abs/2610.22350)** (Yang ほか, 10/16) - 顧客の稼働中環境に入り、重要点を調べ、本番で耐えるシステムを出荷できるかを測る、フォワードデプロイドエンジニア向けのベンチマーク。

## オープンソース・モデル

- **[inclusionAI/Ling-3.1-flash](https://huggingface.co/inclusionAI/Ling-3.1-flash)** (公開3日) - 総 560B・アクティブ 25B、1M トークン文脈のハイブリッド推論モデル。KDA と Gated MLA を 7:1 で混ぜたハイブリッド線形 MoE で、README ではエージェント、検索、事務、ソフトウェア開発の向上を挙げている。
- **[tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B)** (公開1日) - Tencent Hunyuan による長期記憶の書き込み専用モデル（アクティブ約 3B）。Mem0 や MemOS などの外部メモリ基盤の LLM 部分を置き換え、何を保存し既存記憶をどう更新するかを決める。
- **[nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)** (公開4日) - 120B（アクティブ 12B）のビジョン言語モデルの NVFP4 量子化版。Mamba-2、MoE、attention の混在構成で文脈は最大 1M トークン、DGX Spark 1 台でも動かせるとされる。
- **[DeepLethe/FDE-Gym](https://huggingface.co/datasets/DeepLethe/FDE-Gym)** (dataset, 公開10日・補充枠) - 上の論文と対応する環境で、エージェントが顧客環境で出荷まで担えるかを測る。

## ベンチマーク・リーダーボード

LMArena はページから Text Overall のデータを取得できなかった（取得失敗）。Artificial Analysis は取得していない。

## 所感

Argon の Minecraft 論文のように、長時間自律で動く複数エージェントの成果報告が目立つ。一方で議論中の信念崩壊や評価データのショートカットなど、エージェントの信頼性を疑う論文も並び、できることと測り方の両方が問われている。OSS 側は Ling-3.1-flash や Hy-Memory のように、長文脈・ハイブリッド構成と記憶機構への関心が強い。
