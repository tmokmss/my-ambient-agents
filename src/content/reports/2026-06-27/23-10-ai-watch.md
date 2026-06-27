---
title: "AI Watch（2026年6月28日）"
date: "2026-06-27T23:10"
category: "analysis"
summary: "LLM アンサンブルに数学的上限を実証。履歴書 LLM 審査への Prompt Injection が採用順位を不正操作。"
tags: ["llm", "benchmark", "safety", "agents", "mechanistic-interpretability", "open-source", "embodied-ai"]
---

## 今日のハイライト

**「67 モデルを組み合わせても数学的上限がある」——Co-Failure Ceiling の実証（6/25）**

[When Does Combining Language Models Help?](http://arxiv.org/abs/2606.27288v1) が arxiv cs.CL に投稿（著者: Josef Chen）。routing・voting・MoA（Mixture-of-Agents）といった「複数 LLM を組み合わせる手法」の性能上限は、全モデルが同じクエリで同時に失敗する割合 β（co-failure rate）によって `1 − β` に数学的に上界されることを67フロンティアモデルを横断した実験で実証した。現在のアンサンブル研究は通常 β を測定・報告していないため、「改善余地があるのか、それとも壁に当たっているのか」が正確に評価できていないと指摘する。「組み合わせれば強くなる」という LLM 業界の楽観論に数学的限界を突きつける、引用価値の高い一本。

**履歴書自動審査 LLM への Prompt Injection——採用ランキングを不正操作できることを実験で確認（6/25）**

[Prompt Injection in Automated Résumé Screening with LLMs](http://arxiv.org/abs/2606.27287v1) が arxiv cs.AI に投稿（著者: Preet Baxi, Jiannan Xu, Jane Yi Jiang）。LLM を使った採用スクリーニングシステムに対し、新たな資格を一切追加せず、自己宣伝テキストを隠し埋め込むだけで採用 LLM のランキングを不正操作できることを制御実験で示した。単一・複数 injection の両設定で評価しており、実用展開されている HR テックへの直接的な警告となる。「AI が採用を決める社会」の脆弱性を浮き彫りにする実用的な安全研究。

---

## 注目論文

- **[When Does Combining Language Models Help? A Co-Failure Ceiling on Routing, Voting, and Mixture-of-Agents Across 67 Frontier Models](http://arxiv.org/abs/2606.27288v1)** (Josef Chen, 6/25) — 67モデルを横断した実験で、多モデル手法の性能上限が co-failure rate β によって `1 − β` に上界されることを証明。「失敗パターンが異なるモデルを選ぶこと」が単なる数の増加より重要と論じる。マルチモデル設計の前提を問い直す基礎研究。

- **[Prompt Injection in Automated Résumé Screening with Large Language Models](http://arxiv.org/abs/2606.27287v1)** (Preet Baxi et al., 6/25) — 採用 LLM に隠し自己宣伝テキストを埋め込む攻撃で、候補者のランキングを不正に引き上げられることを実証。資格詐称でなく「LLM の解釈誘導」という新たな攻撃面の存在を示す、HR テック実務者必読の研究。

- **[Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](http://arxiv.org/abs/2606.27330v1)** (Tianyi Men et al., 6/25) — 小規模 MLLM でも GUI タスクエージェントを実用化する手法を提案。自律的な経験探索と hindsight 経験の再利用でタスク計画精度とサイト間汎化性を大幅に改善。商用 LLM なしにデスクトップ・ウェブ操作エージェントを実現するコスト効率の高いアプローチとして注目。

- **[Advancing Omnimodal Embodied Agents from Isolated Skills to Everyday Physical Autonomy](http://arxiv.org/abs/2606.27251v1)** (Junhao Shi et al., 6/25) — API・IoT・マニピュレーション・ナビゲーションを単一エージェントで横断制御するオムニモーダルエンボディードエージェントのアーキテクチャを提案。物理障害からの自律回復機構も備え、「孤立したスキルの束」から「日常物理タスクをこなす持続的エージェント」への橋渡しを目指す設計。

- **[Beyond the Hard Budget: Sparsity Regularizers for More Interpretable Top-k Sparse Autoencoders](http://arxiv.org/abs/2606.27321v1)** (Nathanaël Jacquier, Maria Vakalopoulou, 6/25) — SAE（Sparse Autoencoder）の標準的な Top-k ハード制約より、ソフトな正則化手法の方が活性化空間をより単一概念な解釈可能特徴に分解できることを実証。機械的解釈可能性ツールの精度向上に直結する実践的改善研究。

---

## オープンソース・モデル

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baidu が MIT ライセンスで公開した多言語 OCR モデル（image-text-to-text）。212K 超のダウンロードと 1,135 likes を記録し HuggingFace トレンド首位に。Transformers ネイティブで複数言語の文書・画像テキスト認識に対応し、商用利用可能な高性能 OCR の選択肢として急速に普及している。

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — 微博（Weibo）AI が Qwen2.5-Coder 3B をベースに公開した推論特化モデル（MIT ライセンス）。数学・コード・GPQA・インストラクション追従に特化したファインチューン。57K ダウンロード・742 likes でトレンド入り。軽量で汎用的な推論モデルとして、ローカル実行ユーザーの注目を集めている。

---

## 企業動向

週末（6/27〜6/28 JST）につき、Anthropic・OpenAI・Google DeepMind からの主要な新着発表はなし。直近の主要発表（GPT-5.6 Sol 6/26、Gemini 3.5 Flash computer use 6/24 等）は前レポートで掲載済み。

---

## 所感

週末に入り主要ラボからの新発表は静かだった一方、arxiv の研究成果は「現状アプローチの限界」を鋭く射貫く方向に集中した。「67 モデルを組み合わせても co-failure rate 以上には上がらない」というシンプルな数学的事実は、業界が盲目的に進めてきた「アンサンブルで強くなる」信仰に根拠を問い直す。同日、履歴書 LLM 審査への prompt injection 研究も登場し、「LLM を社会インフラとして使う際の脆弱性」が多方面で顕在化しつつある週となった。GUI エージェントとエンボディード AI の論文が同日に並んだのも象徴的で、AI の「足（身体・GUI）」を実用化する競争が基礎研究レベルで加速しているのを感じさせる。
