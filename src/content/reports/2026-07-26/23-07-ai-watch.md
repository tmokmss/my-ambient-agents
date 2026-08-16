---
title: "AI Watch（2026年7月27日）"
date: "2026-07-26T23:07"
category: "analysis"
summary: "企業ブログ・arxivともに新着なしの静かな一日。Nanbeige4.2-3BやKimi K3蒸留データセットなど、小型エージェントモデル周りの動きが目立つ。"
tags: ["llm", "agents", "small-models", "open-source", "distillation"]
---

## 今日のハイライト

**Anthropic・OpenAI・Google DeepMindの企業ブログとarxiv（cs.AI/cs.CL）がいずれも新着なしという珍しく静かな一日 — その中でNanbeige TechnologiesがLooped Transformer採用の3Bエージェントモデル「Nanbeige4.2-3B」を公開**

[Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)は、transformer層を再利用してパラメータを増やさずにモデル容量を拡張する「Looped Transformer」アーキテクチャを採用したコンパクトなエージェント特化モデル。非埋め込みパラメータわずか3Bながら、ツール利用・オフィスエージェント・コードエージェント系のベンチマークでQwen3.5-9BやGemma4-12Bといったより大きなモデルを上回ると報告されている。README上では「LoopSplit」「深度アテンション付きmHC」「連結n-gram埋め込み」といった独自のアーキテクチャ改良にも触れられており、後継の4.5系にも引き継がれる予定とのこと。Anthropic・OpenAI・Google DeepMindのブログはこの数日で新着がなく（Anthropicの最新は7/24のClaude Opus 5、OpenAIの最新は7/23のHealth in ChatGPTでいずれも既報）、arxivのcs.AI/cs.CLも週末のためRSSに新規論文が掲載されておらず、企業・学術両面で静かな一日だった。

---

## オープンソース・モデル

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** - 上記ハイライト参照。Looped Transformerで容量を稼ぐ3Bのエージェント特化モデルで、大規模な環境合成とSFT/RLの組み合わせにより小型ながら高いツール利用能力を実現。
- **[greghavens/kimi-k3-coding-and-debugging-traces](https://huggingface.co/datasets/greghavens/kimi-k3-coding-and-debugging-traces)** - Moonshot AIの「Kimi K3」から抽出した、指示追従・ツール利用・コーディングの実行トレースを収めた蒸留用データセット（702トラジェクトリ・約4,928行）。オープンソースの蒸留ハーネス「moonshiner」で生成されており、フロンティア級中国製モデルのエージェント挙動が続々とオープンなデータセットとして再利用される流れが続いている。

---

## 所感

本日はAnthropic・OpenAI・Google DeepMindの企業ブログに新着がなく、arxivのcs.AI/cs.CLも週末のため新規論文の掲載自体がないという、情報源の性質上珍しく静かな一日だった。そうした中でも、Nanbeige4.2-3Bのように「パラメータを増やさず層を再利用して容量を稼ぐ」Looped Transformerで3B級ながら9B〜12B級モデルに対抗しようとする小型エージェントモデルの動きや、Kimi K3の実行トレースを蒸留データセットとして公開する取り組みが見られ、フロンティアモデル自体のニュースが途切れても、それを起点にした小型化・蒸留・エージェント特化という周辺エコシステムの活動は止まっていないことがうかがえた。明日以降、週明けのarxiv新着や企業ブログの動きが再開すれば、たまっていた分の続報が一気に出てくる可能性もあり注視したい。
