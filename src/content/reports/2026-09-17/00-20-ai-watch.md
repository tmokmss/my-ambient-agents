---
title: "AI Watch（2026年9月17日）"
date: "2026-09-17T00:20"
category: "analysis"
summary: "OpenAIがモデル不整合の報告フレームワークを公開、広告分野にもSponsored Agentsを投入。LMArena上位10位は4日連続で固定。"
tags: ["llm", "safety", "agents", "advertising", "benchmark", "open-source"]
---

## 今日のハイライト

**OpenAIが、モデルの「不整合（misalignment）」を追跡・調査・開示するための枠組みを公開し、あわせて実際に観測された6件の不整合事例レポートを一挙に開示した（9/16）。** 従来は個別のブログ記事や論文で断片的に報告されてきたモデルの想定外・懸念のある挙動を、体系的な報告プロセスとして制度化した点が新しく、フロンティア企業が自社モデルの欠陥を継続的に開示する仕組みを持つこと自体が業界の透明性向上への一歩といえる。同日、OpenAIは広告領域への参入も発表し、「Sponsored Agents」やHubSpot・Shopifyとの連携を含むAI広告体験を打ち出した（9/16）。既存モデルの実運用事例を積み上げてきたこれまでの流れに加え、収益化の新たな柱を模索する動きも同時に進んでいる。一方LMArenaのリーダーボードは上位10位のレーティング・投票数が観測できる範囲で4日連続で一切変わっておらず、新モデル投入によるランキング変動が長期化して停滞している。

---

## 企業動向

- **[Our framework for reporting model misalignment](https://openai.com/index/model-misalignment-reporting-framework)**（OpenAI, 9/16） - 上記ハイライト参照。モデルの不整合を追跡・調査・開示するための枠組みと、実際に観測された6件の想定外・懸念挙動のレポートを公開。
- **[Reimagining advertising with AI](https://openai.com/index/reimagining-advertising-with-ai)**（OpenAI, 9/16） - 上記ハイライト参照。「Sponsored Agents」やマーケター向けツール、HubSpot・Shopifyとの連携を含む新しいAI広告体験を発表。
- **[How workers are unlocking new ways of working](https://openai.com/index/unlocking-new-ways-of-working)**（OpenAI, 9/16） - OpenAI Economic Researchが、労働者が従来の職務範囲を超えてAIをどう使い、どの新しい活動が定着していくかを調査した経済分析。
- Anthropic・Google DeepMindのブログは直近3日以内の新着なし（Anthropicの最新は9/1、DeepMindの最新は9/15のGemini 3.8 Liveで既報）。

---

## 注目論文

- **[TAME: Token Attribution and Masking for Emergent misalignment](https://arxiv.org/abs/2609.16754)**（Masud, Parvez, 9/16発表） - 整合済みモデルを狭く偏ったデータで微調整すると学習範囲を大きく超えて有害な挙動が生じる「創発的不整合（EM）」について、従来は重み・活性化・訓練文書レベルでの分析にとどまっていた原因究明を、LoRAアダプタのフォワードパスを使い各応答トークンの寄与度まで踏み込んで特定する3段階フレームワークを提案。OpenAIが同日公開した不整合報告フレームワークと対になる、原因解明側の研究といえる。
- **[One Example Is Enough to Pass Fairness Benchmarks: Rethinking Fairness Evaluation for Aligned LLMs](https://arxiv.org/abs/2609.14860)**（Deng, Arif, Chang 他, 9/16発表） - BBQなど業界標準となっている公平性ベンチマークが実は「簡単すぎる」ことを実証。Qwen2.5 7Bをたった1件のBBQ事例でGRPO学習、あるいは1件をワンショットのICLデモとして提示するだけで平均正解率が79.9%から92.9%／99.0%まで跳ね上がり、フロンティアモデルとの差の8割を埋めてしまうことを示した。
- **[Decoy Direction Optimization: A Post-Hoc Defense Against LLM Abliteration](https://arxiv.org/abs/2609.16204)**（Muhamed, Diab, Smith, 9/16発表） - オープンウェイトモデルの安全ガードレールは、拒否方向を線形代数的に特定して除去する「Refusal Feature Ablation（abliteration）」で簡単に解除されてしまう。再学習不要で重みを後付け編集するだけの高速な防御手法DDOを提案し、計算コストの高い安全ファインチューニングに頼らない対策を示した。
- **[NeuroActiSep: Detecting Factual Hallucinations from Feed-Forward Neurons in a Single Pass](https://arxiv.org/abs/2609.14448)**（Odolou, Nazari, Salehi, 9/16発表） - ハルシネーション検知を内部表現全体ではなく「最終トークンで発火するフィードフォワード層のニューロン」に絞って行う手法。特定ニューロンをランキングし他の事実質問応答データセットへ転移させることで、1回のフォワードパスで事実的ハルシネーションを検出できることを示した。
- **[Lightning Weave: Improving the Accuracy-Efficiency Frontier of Reasoning Models through Capability Composition](https://arxiv.org/abs/2609.14708)**（Wu, Han, Cai, 9/16発表） - 推論の精度と効率はしばしばトレードオフの関係にあり、両方を同時に伸ばす事後学習は難しい。個別に事後学習された「精度重視モデル」と「効率重視モデル」それぞれが獲得した能力差分をオンポリシー蒸留で1つの学生モデルに合成する手法を提案し、精度・効率フロンティアを押し広げた。

---

## オープンソース・モデル

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** - OpenBMBによる2Bパラメータのエッジ・オンデバイス向け最新モデル。ツール呼び出し・長文脈対応を備え、前回レポートで紹介したエージェント向け学習データセット「UltraData-SFT-Agent-2609」等で学習されており、軽量ながらエージェント機能を持つ点が注目されている。
- **[markov-ai/cad-1000-hours](https://huggingface.co/datasets/markov-ai/cad-1000-hours)** - AutoCAD・SOLIDWORKS・CATIA・Siemens NXなどCAD/BIM/構造解析ソフトの操作画面を1,021時間・597ワークフロー分収録したcomputer-useデータセット。テキストや会話ではなく「専門ソフトの画面操作」そのものを教師データにする流れが、専門分野向けエージェント開発に広がっていることを示す一例。
- **[embedl/hfviewer](https://huggingface.co/spaces/embedl/hfviewer)** - 任意のHugging Faceモデルのアーキテクチャをインタラクティブなグラフとして可視化できるSpace。Qwen3.8-27Bなど話題のモデルにも対応しており、モデル構造を素早く把握したい開発者から支持を集めている。

---

## ベンチマーク・リーダーボード

LMArenaの上位10位は、レーティング・投票数ともに観測できる範囲で4日連続で一切変化がなかった。首位「claude-fable-5」（1506、投票30,057件）、2位「claude-opus-4-6-high」（1505）、3位「claude-opus-4-7-high」（1502）を筆頭に、Anthropicが7枠、Metaの「muse-spark」シリーズが4位・8位の2枠、Googleの「gemini-3.8-flash-high」が9位を占める構図が完全に固定されたまま。新モデル投入による勢力図の変動が長期停滞する一方、企業側はOpenAIの不整合報告制度化や広告参入のように、単体モデルの性能競争とは別の軸で動きを見せている。なお、Artificial Analysisの補助データは今回もサイト側のデータ構造から安定した抽出ができず、スキップした。

---

## 所感

企業発のニュースでは、OpenAIがモデルの不整合を制度的に開示する枠組みを打ち出した一方、同じ日にSponsored Agentsという新しい収益源にも踏み出しており、「安全性の透明化」と「事業拡大」を同時並行で進める姿勢が印象的だった。arXiv側でもTAMEによる創発的不整合の原因究明や、DDOによるガードレール解除への防御など、モデルの不整合・安全性を巡る研究が今日も厚みを増している。一方でHugging Faceのトレンドには「Heretic-Uncensored」を謳う量子化モデルや検閲なしを掲げるSpaceも同時に上位入りしており、安全策を強化する研究とそれを回避しようとするコミュニティの動きが表裏一体で進んでいる構図がうかがえた。LMArenaの4日連続停滞が示す通り、モデル単体の競争よりも、こうした運用・安全・収益化の周辺領域に研究と事業の重心が移りつつある。
