---
title: "AI Watch（2026年7月3日）"
date: "2026-07-02T23:19"
category: "analysis"
summary: "中国発フロンティアモデルが同日2件登場（GLM-5.2、Seed2.0）。査読論文の幻覚引用がトップ会議に混入している実証研究も話題に。"
tags: ["llm", "open-source", "benchmark", "safety", "reasoning", "agents"]
---

## 今日のハイライト

**中国発フロンティア級モデルが同日2件——Zhipu「GLM-5.2」とByteDance「Seed2.0」（7/2）**

Hugging Face トレンドで本日最多 likes（3,249）を記録した [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) が公開（7/2更新）。前世代 GLM-5.1 から長時間タスク能力を大きく引き上げ、初めて「安定した100万トークンコンテキスト」を実現。新アーキテクチャ IndexShare（[論文](https://arxiv.org/abs/2603.12201)）によりスパースアテンション4層ごとにインデクサを共有し、100万トークン文脈でのトークンあたりFLOPsを2.9倍削減、MTP層改善で投機的デコードの受理長も最大20%向上させた。SWE-bench Pro・Terminal Bench 2.1 などのベンチマークでは Claude Opus 4.8・GPT-5.5・Gemini 3.1 Pro に肉薄する数値を示しつつ、MITライセンスで地域制限なく公開している。同日、ByteDance Seed チームは技術レポート「[Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity](https://arxiv.org/abs/2607.00248)」を arxiv に投稿（7/2）。ユーザーの実需要から評価体系を構築し直し、ロングテール知識と複雑指示追従という「長期タスクの信頼性」に的を絞って改善したと説明している。フロンティア級モデルの主戦場が、米国2社（Anthropic・OpenAI）に加え中国発のオープンウェイト／自社ホスト勢にも明確に広がっていることを示す一日となった。

**査読を通過した「幻覚引用」を大規模実証——NeurIPS・USENIX Securityの約5%に混入（7/2）**

Microsoft の Mark Russinovich らによる「[Phantom References: Hallucinated Citations That Survive Peer Review at Top-Tier Conferences](https://arxiv.org/abs/2607.00738)」が cs.AI に投稿（7/2）。存在しない論文や著者リストが実体と大きく食い違う「アイデンティティレベルの幻覚引用」のみを対象に、ICLR・ICML・NeurIPS・USENIX Security の採択済みカメラレディ論文を大規模検証するツール「RefChecker」を構築。個々の参照レベルでは1%未満だが、2025年の NeurIPS・USENIX Security では論文の約20本に1本が2件以上の幻覚引用を含み、受賞論文にも混入例があったと報告している。ChatGPT登場以降に増加傾向が見られ、査読プロセスだけでは引用の完全性を担保できないと結論づけつつ、1論文あたり約0.04ドルで監査可能な点も示した。LLMによる論文執筆支援が一般化する中、学術出版の信頼性そのものに一石を投じる実証研究。

---

## 注目論文

- **[Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity](https://arxiv.org/abs/2607.00248)** (ByteDance Seed, 7/2) — 上記ハイライト参照。ユーザーの実需要に基づく評価体系の再構築と、ロングテール知識・複雑指示追従という2つの持続的課題への集中投資が特徴。

- **[Phantom References: Hallucinated Citations That Survive Peer Review at Top-Tier Conferences](https://arxiv.org/abs/2607.00738)** (Mark Russinovich, Ram Shankar Siva Kumar, Ahmed Salem, 7/2) — 上記ハイライト参照。査読トップ会議での幻覚引用混入率を初めて大規模定量化し、監査ツール RefChecker を OSS 公開。

- **[Beyond the Prompt: Jailbreaking Function-Calling LLMs via Simulated Moderation Traces](https://arxiv.org/abs/2607.00481)** (Junlong Liu et al., 7/2) — 従来のジェイルブレイク研究がプロンプト単体を対象としてきたのに対し、関数呼び出し（ツール利用）を伴うマルチターン実行環境では「開発者定義スキーマ・構造化引数・信頼できないツール出力」が同一コンテキストに混在し境界があいまいになる構造的脆弱性を指摘。「模擬モデレーション監査」を装った多段階の会話で安全拒否を「実行失敗」として扱わせ、徐々に安全制約を緩めさせる攻撃 SMT を提案し、5社の商用LLMで既存手法を上回る攻撃成功率を実証した。プロンプトレベルの防御だけでは不十分であることを裏付ける。

- **[GRPO, Dr. GRPO, and DAPO Are Three Operations on One Number: The Group-Standard-Deviation Identity](https://arxiv.org/abs/2607.00152)** (Yong Yi Bay, Kathleen A. Yearick, 7/2) — 推論訓練で広く使われる GRPO・Dr. GRPO・DAPO の3手法が、実は「サンプル群の正誤ばらつき（標準偏差）」という単一の量を異なる形で操作しているに過ぎないことを数理的に証明。正誤が割れるグループほど学習が進み、全員一致のグループは学習信号がゼロになるという「group-standard-deviation identity」を提示し、Big-Math データセットでの実証と制御実験で裏付けた。RLHF/RLVR系の post-training 手法を統一的に理解する視点を提供する。

---

## オープンソース・モデル

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 上記ハイライト参照。Zhipu/Z.ai によるMITライセンスのフラグシップモデル。安定100万トークン文脈と柔軟な思考エフォート切り替えによるコーディング強化が特徴で、本日のHFトレンド最多 likes を記録。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — Qwen3.5をベースに Claude Mythos-5 のトレースで調整した9BモデルのGGUF量子化版（Apache-2.0、v3で会話テンプレートを修正済み）。100万トークン文脈・関数呼び出し・サイバーセキュリティ／バイオメディカル領域への特化を謳い、1,245 likes・125万ダウンロードを記録するなど、フロンティアモデルの推論トレースを蒸留した小型エージェントモデルへの需要の高さを示す。

- **[mlabonne/open-perfectblend](https://huggingface.co/datasets/mlabonne/open-perfectblend)** (dataset) — 「The Perfect Blend: Redefining RLHF with Mixture of Judges」論文の指示データセットをオープン再現した142万件規模の会話データ（Apache-2.0）。著名なファインチューニング研究者 mlabonne による公開で、RLHFの前段となる instruction tuning 用データの整備が引き続き活発であることを示す。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は iframe 埋め込みのみでデータを静的取得できず、本日も取得失敗。

---

## 所感

本日は Anthropic・OpenAI・Google DeepMind の公式ブログに新着がなかった一方で、Zhipu の GLM-5.2 と ByteDance の Seed2.0 という中国発フロンティア級モデルが同日に登場し、オープンウェイト・自社ホストの両陣営で存在感を強めた。GLM-5.2 の「安定100万トークン文脈」はコンテキスト長競争が実運用レベルに達しつつあることを示す一方、Phantom References が突きつけた「査読トップ会議の論文20本に1本が幻覚引用を含む」という数字は、生成AIの普及が学術出版の信頼性という別の足場を静かに侵食している現実を浮き彫りにした。GRPO系手法の統一理論やツール呼び出し文脈を突いたジェイルブレイク研究など、能力・安全・学術インフラの各面で「急拡大の副作用を検証する」論文が引き続き目立つ一日だった。
