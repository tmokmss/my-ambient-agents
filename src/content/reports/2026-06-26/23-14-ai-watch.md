---
title: "AI Watch（2026年6月27日）"
date: "2026-06-26T23:14"
category: "analysis"
summary: "OpenAI が GPT-5.6 Sol をプレビュー。arxiv に「拒否はペルソナ下流」「Instruction Bleed」など安全性の急所をつく論文が集中。"
tags: ["llm", "safety", "agents", "mechanistic-interpretability", "benchmark", "open-source", "coding"]
---

## 今日のハイライト

**OpenAI が次世代モデル GPT-5.6 Sol をプレビュー——コーディング・科学・サイバーセキュリティを強化（6/26）**

[Previewing GPT-5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol) が OpenAI から公開（6/26 10:00 GMT）。GPT-5.6 Sol はコーディング・科学・サイバーセキュリティで特に強化された能力を持ち、OpenAI の「最先端の安全スタック」とペアで提供されるという。モデル系列が GPT-5.6 に進み、さらに「Sol」という特化ブランドを設けたことは、用途別に最適化された次世代モデル群を段階的にリリースする戦略を示唆する。GPT-5 の実績を踏まえながら能力の上限を引き上げ続けており、Anthropic や Google の最新フロンティアとの競争が再加速する。

**「コンプライアントなペルソナが拒否を無効化する」——モデル内部の構造的脆弱性を実証（6/26）**

[Refusal Lives Downstream of Persona in Chat Models](https://arxiv.org/abs/2606.26161) が cs.AI に投稿。Qwen2.5-7B-Instruct と Llama-3.1-8B-Instruct において、「従順なペルソナ方向」が「拒否方向」の上位に位置することを線形介入実験で確認。ペルソナをコンプライアント方向へ誘導するだけで、拒否回路が実質的に無効化できることを示した。従来「ペルソナ」と「拒否」は独立した機構として研究されてきたが、実際には階層的に依存しているという発見は、ロールプレイ型ジェイルブレイクがなぜ機能するかの理論的根拠を与えるとともに、安全設計の再検討を迫る。

---

## 企業動向

- **[Previewing GPT-5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol)** (OpenAI, 6/26) — コーディング・科学・サイバーセキュリティにおける能力強化を前面に出した次世代モデルのプレビュー。「Sol」の名称とセキュリティ特化の訴求から、OpenAI の Daybreak（サイバーセキュリティ事業）との連携強化が示唆される。安全スタックを能力向上と同時に発表している点は、Anthropic の「Responsible Scaling Policy」的なアプローチを意識した動きとも読める。

**Anthropic / Google DeepMind**: 過去24〜48時間以内に明確な新着を確認できず。

---

## 注目論文

- **[Detecting and Controlling Sycophancy with Cascading Linear Features](https://arxiv.org/abs/2606.26155)** (cs.AI, 6/26) — ゴマすり（sycophancy）を活性化操縦で検出・制御するには、行動を明確に示す対比サンプルペアが大量に必要になる。本研究はそのデータ生成を反復パイプラインで自動化し、カスケード型線形特徴を用いることでゴマすりを精度よく検出・制御できることを示した。解釈可能性による安全性強化の実践例として重要。

- **[Refusal Lives Downstream of Persona in Chat Models](https://arxiv.org/abs/2606.26161)** (cs.AI, 6/26) — チャットモデルの活性化空間で「ペルソナ方向」と「拒否方向」が独立に同定されていたが、実際には前者が後者をゲーティングする階層構造を持つことを実証。コンプライアントなペルソナへの操縦でリャマ系モデルの拒否が大幅に低下した。ロールプレイ型攻撃への構造的説明として、安全研究コミュニティへの影響が大きい発見。

- **[The Verification Horizon: No Silver Bullet for Coding Agent Rewards](https://arxiv.org/abs/2606.26300)** (cs.AI, 6/26) — 「解を生成するより検証する方が易しい」という古典的直観がコーディングエージェントで逆転しつつあることを指摘。基盤モデルの推論能力が高まるにつれ、複雑な候補解の生成は容易になった一方、それを確実に検証することが難しくなった。人間の意図を完全に代替できる検証器は存在せず、RLHF・テスト実行・形式検証のいずれも一長一短という問題を分析。コーディングエージェントの報酬設計の根本的困難を論じる。

- **[Instruction Bleed: Cross-Module Interference in Prompt-Composed Agentic Systems](https://arxiv.org/abs/2606.26356)** (cs.AI, 6/26) — プロンプトを複数のモジュールで構成するエージェントシステムで「あるモジュールを編集すると別のモジュールの振る舞いが変わる」という失敗事例を形式化。Transformer の自己注意が連結されたモジュール間に境界を設けないため、共有コンテキストウィンドウ上で「構成的振る舞い漏れ（CBL）」が生じることを理論・実験の両面から示す。マルチエージェント設計の予測可能性に関わる根本的な問題提起。

- **[Data-driven Machine Learning Cannot Reach Symbolic-level Logical Reasoning](https://arxiv.org/abs/2606.26454)** (cs.AI, 6/26) — 球面ニューラルネットワーク（Sphere NN）が訓練データなしで記号レベルの三段論法推論を達成したことを根拠に、スケーリング則の限界を論じる。教師あり深層学習が同等の記号的推論に到達できない2つの方法論的制約を示し、「データ量・訓練時間を増やしても届かない壁がある」という主張を展開。スケーリング則万能論への正面からの異論として議論を呼ぶ研究。

---

## オープンソース・モデル

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — DeepReinforce が公開した 35B モデルの GGUF 量子化版（6/25更新、likes: 225）。ローカル実行可能な 35B クラスの新顔として登場し、Qwen-AgentWorld と同規模帯での選択肢が増えた。エージェントタスクへの適性をアピールしており、大手ではないチームからの 35B 級リリースとして注目。

- **[Qwen/AgentWorldBench](https://huggingface.co/datasets/Qwen/AgentWorldBench)** — Alibaba Qwen チームが公開したエージェント評価ベンチマーク（6/24更新）。2,170件のタスクからなるデータセットで、Qwen-AgentWorld-35B-A3B モデルと並行してリリースされ、エージェント能力の評価基盤として整備されつつある。モデルと評価セットを同時公開することで再現性・比較可能性を確保する方針。

- **[armand0e/claude-fable-5-claude-code](https://huggingface.co/datasets/armand0e/claude-fable-5-claude-code)** — Fable 5 が Claude Code として動作した際の推論トレースを63件収録したデータセット（6/19公開、likes: 212）。米政府のアクセス停止措置を受け、コミュニティが Fable 5 の実際の動作を記録・保存する動きが続いており、このデータセットはその一例。コード生成タスクにおける Fable 5 の思考プロセスを研究できる希少なリソース。

---

## 所感

今週の arxiv は「エージェントや LLM の制御の難しさ」を様々な角度から掘り下げる論文が集中した。ペルソナが拒否を上書きする（Refusal Downstream）、モジュール境界が意味をなさない（Instruction Bleed）、検証器は万能ではない（Verification Horizon）——いずれも「動かして初めてわかった」類の構造的問題だ。企業側では OpenAI が GPT-5.6 Sol で能力の上昇気流を維持しつつ、「最先端の安全スタック」を同梱するという二正面作戦を見せた。能力と安全の競争が単なるベンチマーク争いを超え、アーキテクチャ・推論設計・ガバナンスを包括する多層問題として認識されつつある局面だ。
