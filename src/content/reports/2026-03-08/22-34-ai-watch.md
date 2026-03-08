---
title: "AI Watch（2026年3月9日）"
date: "2026-03-08T22:34"
category: "analysis"
summary: "Anthropic RSP v3.0 未取り上げ重要安全政策を振り返り、sarvam-105Bやアフリカ語NLPなど多様性あるモデルがHFトレンド入り"
tags: ["llm", "safety", "open-source", "multilingual", "synthetic-data"]
---

## 今日のハイライト

**Anthropic が Responsible Scaling Policy v3.0 を公開**（2/24）。カタストロフィックリスクを軽減するための自発的フレームワークの3回目の大改定。AI Safety Level（ASL）体系を継続しつつ、将来世代モデル向け（ASL-4以上）の規定を柔軟化し、運用上の知見を反映した。Anthropic がこの枠組みを維持・更新し続けていること自体が業界に与えるシグナルは大きく、他社の安全政策議論にも影響している。

**インド AI スタートアップ Sarvam AI の sarvam-105B が HuggingFace トレンド入り**（3/6更新）。105B パラメータのマルチリンガルモデルで、インド語系言語の高品質処理を目指す。グローバル南諸国からの大規模モデル開発が目立ちはじめており、AI の地理的多様化を示す象徴的な動向。

---

## 企業動向

- **[Responsible Scaling Policy Version 3.0](https://www.anthropic.com/news/responsible-scaling-policy-v3)** (Anthropic, 2/24) - 2年以上にわたる RSP 運用の経験を踏まえた全面改定。ASL-2・ASL-3 の詳細な安全基準を維持しつつ、まだ数世代先の ASL-4 以上については細部を意図的に曖昧にし、将来の技術進歩に柔軟に対応できる設計とした。「理論的変化の仕組み（Theory of Change）」を明示的に記述したことも今回の特徴で、Anthropic が業界全体の安全基準形成に影響を与えたいという意図が示されている。今週のレポートで3/6以降のニュースに集中する中で取り上げられなかったが、AI 安全政策における最重要文書のひとつとして遅ればせながら紹介する。

（Anthropic・OpenAI・Google DeepMind のブログにおける3/7〜3/8の新着は確認されなかった。主要トピックは前日以前のレポートで取り上げ済み。）

---

## 注目論文

arxiv (cs.AI / cs.CL) は土曜・日曜が更新スキップ日のため、本日の新着論文はなし。

---

## オープンソース・モデル

- **[sarvamai/sarvam-105b](https://huggingface.co/sarvamai/sarvam-105b)** - インド AI スタートアップ Sarvam AI による 105B パラメータのマルチリンガルモデル（171 いいね、3/6 更新）。インド語系言語に強みを持つ大規模モデルとして注目を集めており、英語・中国語系モデルに偏りがちな大規模 LLM の地域多様化を体現する存在。644 ダウンロードとまだ初期段階ながら、グローバル南のモデル開発台頭を象徴するトレンド入り。

- **[google/WaxalNLP](https://huggingface.co/datasets/google/WaxalNLP)** - Google によるアフリカ諸語向け音声・テキストデータセット（171 いいね、9,898 ダウンロード、3/3 更新）。Acholi・Akan・Amharic など 36 のサブセットで 2.5M 行超・821GB の ASR/TTS データを収録。低資源言語の NLP 研究を大規模に後押しする希少なオープンデータセット。sarvam-105b とあわせ、今週の HuggingFace では英語・中国語以外の言語への関心が高まっている様子が見て取れる。

- **[HuggingFaceFW/finephrase](https://huggingface.co/spaces/HuggingFaceFW/finephrase)** - HuggingFace FineWeb チームによる合成データ生成ガイド「The Synthetic Data Playbook」のインタラクティブ可視化 Space（3/8 本日更新）。ベンチマーク結果をブックシェルフ風に表示し、各モデルの合成データ実験の成果を一覧できる。合成データによる事前学習の知見を共有するツールとして、LLM 構築コミュニティに有用なリソースとなっている。

- **[Qwen/Qwen3.5-0.8B](https://huggingface.co/Qwen/Qwen3.5-0.8B)** - Qwen3.5 シリーズのエッジ向け最小モデル（318 いいね、40万ダウンロード、3/2 更新）。シリーズとしては既報だが、0.8B という超コンパクトサイズでのマルチモーダル対応（image-text-to-text）が引き続き注目を集めており、スマートフォン・IoT 向けオンデバイス推論の現実的な選択肢として定着しつつある。

---

## 所感

今週（3/3〜3/8）を振り返ると、GPT-5.4 と Claude Sonnet 4.6 のほぼ同時リリース、AI によるリアル脆弱性発見（Firefox）、Codex Security 等、フロンティアモデルの「現場投入」が急加速した一週間だった。週末にあたる本日は新着論文も少なく企業ブログも静かだが、HuggingFace ではインド語・アフリカ語モデル／データセットがトレンド入りするなど、AI の多言語・多地域展開が着実に進んでいる。英語圏・中国語圏以外からの大規模モデル参入が増えるにつれ、性能評価の多様化も課題として浮上してきそうだ。