---
title: "AI Watch（2026年6月24日）"
date: "2026-06-23T23:16"
category: "analysis"
summary: "Anthropic が Claude Tag を発表——Slack チームメンバー化。OpenAI は AI 国際標準化と GPT-5 医療応用を公開。"
tags: ["agents", "llm", "reasoning", "open-source", "safety", "multimodal", "benchmark"]
---

## 今日のハイライト

**Claude Tag: Anthropic が Claude を Slack のチームメンバーとして統合——社内の65%コードを AI が生成（6/23）**

[Introducing Claude Tag](https://www.anthropic.com/news/introducing-claude-tag) を Anthropic が発表。Claude が Slack チャンネルに参加し、@Claude とタグするだけでタスクを委任できる「Claude Tag」がリリースされた。Claude はチャンネルの会話を学習してチームのコンテキストを蓄積し、ツール・コードベース・データソースと連携しながら複数ステップのタスクを自律実行する。特筆すべきは Anthropic 自身のデータで、現時点で製品チームのコードの65%が社内版 Claude Tag によって生成されているという。Claude Code の進化形として位置づけられており、Claude Enterprise・Team プランで本日よりベータ提供開始。AI が「個人の補助ツール」から「チームの一員」へと役割を拡張する転換点を示す。

**LLM の推論には価値ミスアライメントの上に「非合理性」が積み重なっている——ポスト訓練後も解消されない構造的問題を実証（6/23公開）**

[In LLM Reasoning, there is Irrationality on top of Value Misalignment](https://arxiv.org/abs/2606.20624) が arxiv に掲載。RLHF 等で価値アラインメントが「達成された」モデルでも、ポスト訓練後の推論過程に非合理なバイアスが系統的に残存することを実証した。アライメント研究は「何を目標にするか」（価値）に集中してきたが、本研究はその上に「どう推論するか」（合理性）という独立した問題層が存在することを示す。信頼できる AI エージェントの構築において、価値の正確さだけでは不十分であることを指摘した重要研究。

---

## 企業動向

- **[Introducing Claude Tag](https://www.anthropic.com/news/introducing-claude-tag)** (Anthropic, 6/23) — Claude が Slack のチームメンバーとして参加し、@Claude タグで呼び出せる新機能。複数ユーザーがひとつの Claude を共有するマルチプレイヤー設計で、前の会話を引き継いだり、チャンネルから暗黙知を自動学習する。エンジニアリングを超えてビジネス全般に普及が広がっており、「Claude Code の次の進化形」と位置づけられている。

- **[Helping build shared standards for advanced AI](https://openai.com/index/helping-build-shared-standards-for-advanced-ai)** (OpenAI, 6/23) — OpenAI が Appia Foundation を通じて先進 AI の評価フレームワーク・安全実践・国際協調の標準化を支援。政府・学術・産業を横断する共通基準の策定に積極的に関与することを表明した。AI 競争のルール設定フェーズへの OpenAI の戦略的関与として注目される。

- **[How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery](https://openai.com/index/gpt-5-immunology-mystery)** (OpenAI, 6/23) — 免疫学者 Derya Unutmaz 氏が GPT-5 Pro を用いて3年間解明できなかった T 細胞挙動の謎を解決した事例を公開。がん・自己免疫疾患の研究に貢献しうる洞察を得たとされる。GPT-5 の「難解な科学的問題の補佐」という実績として、研究者コミュニティへのアピールを強める内容。

---

## 注目論文

- **[In LLM Reasoning, there is Irrationality on top of Value Misalignment](https://arxiv.org/abs/2606.20624)** (複数著者) — アライメント達成後も推論層に非合理バイアスが残るという二層構造を実証。「価値アラインメント」と「推論の合理性」は独立した問題として扱う必要があることを示し、信頼できる AI システム設計の根本前提を更新する。

- **[Factual Retrieval in LLMs Is a Redundant, Distributed and Non-Contiguous Process](https://arxiv.org/abs/2606.21345)** (複数著者) — LLM が事実を「検索」する内部プロセスは、特定のニューロンに集中するのではなく、ネットワーク全体に冗長・分散・非連続な形で存在することを実験で示した。幻覚・知識編集・解釈可能性の研究に広く波及する基礎的な発見。

- **[AdaMem: Learning What to Remember for Personalized Long-Horizon LLM Agents](https://arxiv.org/abs/2606.21144)** (複数著者) — 長期間稼働する LLM エージェントが、ユーザー固有の情報のうち「何を記憶すべきか」を学習する手法 AdaMem を提案。無制限に記憶を蓄積するのではなく選択的保持を実現し、パーソナライズされた長期エージェントの実用化への道を拓く。

- **[Darwin Mobile Agent: A Roadmap for Self-Evolution](https://arxiv.org/abs/2606.20622)** (複数著者) — Bitter Lesson の知見を踏まえ、オープンエンド環境で汎用的・適応的に振る舞える自己進化エージェントへのロードマップを提示。現在の「訓練後に固定されるエージェント」から脱却し、運用中に継続的に能力を拡張するエージェント設計の体系化を試みる。

- **[VeriBound: PAC-Bayesian Generalization Bounds for Process Reward Models Trained with Formal Verification Tools](https://arxiv.org/abs/2606.20740)** (複数著者) — 形式検証ツールで訓練されたプロセス報酬モデル (PRM) の汎化性能を PAC-ベイズ理論で理論保証する枠組みを提案。「なぜこの PRM は信頼できるか」を数学的に担保する研究であり、推論時スケーリングの信頼性基盤として重要。

---

## オープンソース・モデル

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** (2315 likes, 274k DL) — NVIDIA が公開した物体位置特定特化の 3B モデル。「どこにあるか」を問うタスクに特化した軽量モデルで、ロボティクス・産業検査・AR などのリアルタイム応用を念頭に置いている。NVIDIA 公式リリースとして注目を集めている。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** (1220 likes, 131k DL) — MiniMax が公開した最新モデル M3。Mixture of Experts アーキテクチャを採用し、長文コンテキスト処理に強みを持つ。中国勢の大規模オープンモデル競争がさらに激化している様相を示す。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive)** (2155 likes, 3.9M DL) — Qwen3.6 ベースの無制限コミュニティモデル。非常に高いダウンロード数（390万超）が、制限なしモデルへの根強い需要を改めて示している。ローカル LLM コミュニティでの「アンセンサード」ブランドの引力は依然として強力。

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** (662 likes, 41k DL) — 微博（Weibo）AI チームが公開した 3B 規模の思考特化モデル。SNS 企業が独自の小型推論モデルを公開するという動向は、推論能力の「コモディティ化」が 3B クラスにまで及びつつあることを示唆する。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (463 likes) — Baidu が公開した OCR 特化モデル。「Unlimited」の名称が示すとおり、文字量・言語・フォーマットの制限を大幅に緩和した設計とされる。文書 AI の実用化が進む中でのタスク特化モデルの台頭を示す例。

---

## 所感

今日の最大のトピックは Anthropic の Claude Tag だ。コードの65%を AI が生成するという自社データは象徴的で、「個人がツールとして使う」フェーズから「チームが AI と協働する」フェーズへの移行が Anthropic 自身において現実のものとなっていることを示している。OpenAI が AI 国際標準化への積極関与を表明したことも注目に値する——モデル性能の競争と並行して、ルール策定の場でのポジション取りが本格化している。arxiv では LLM の推論の「非合理性」が価値アライメントとは独立した問題として存在することが実証され、アライメント研究の地図が更新されつつある。