---
title: "AI Watch（2026年7月8日）"
date: "2026-07-07T23:07"
category: "analysis"
summary: "arxivでIDEコーディングエージェント標的のワークフロー型ジェイルブレイクと創発的ミスアライメント人格の因果研究が話題。LiquidAIが構造化出力ベンチマークと反復ループ抑制データセットを公開。"
tags: ["llm", "safety", "agents", "interpretability", "benchmark", "open-source"]
---

## 今日のハイライト

**arxiv、IDEコーディングエージェントを標的にした「ワークフロー型ジェイルブレイク」を報告（7/7）**

[Refused in Chat, Written in Code: Workflow-Level Jailbreak Construction in IDE Coding Agents](https://arxiv.org/abs/2607.03968)（Abhishek Kumar, Carsten Maple）が公開（7/7）。従来のジェイルブレイク評価は「1回の有害プロンプト→1回の応答」というチャットボット的な設定を前提にしてきたが、本研究はVS CodeのGitHub Copilotを介してClaude Sonnet 4.6・Haiku 4.5・Gemini 3.1 Pro・Gemini 3.5 Flashの4モデルを対象に、ソフトウェア開発ワークフローの各段階（タスク分解・ファイル生成・実行・修正の複数ターン）に有害な目的を分散させて組み立てる「ワークフロー型ジェイルブレイク」を実証した。Hammurabi's Code・HarmBench・AdvBenchから204件のプロンプトを用いた実験で、単発プロンプトでは拒否される内容がコーディングエージェントの通常の作業フローに紛れ込ませることで通過してしまうケースを確認したという。AnthropicがGlasswingパートナーと共同でジェイルブレイク深刻度フレームワークの策定を進めている（既報）さなかに、エージェント型ワークフローという新たな評価軸の必要性を示す論文が出てきた点は時宜にかなっている。

**創発的ミスアライメントの「人格」を移植・逆転できることを示す因果研究（7/7）**

[Transplanting, inverting, and preventing a misalignment persona: method-conditional emergent misalignment in Qwen2.5](https://arxiv.org/abs/2607.04510)（Lyndon Drake, Zandi Eberstadt / University of Oxford）が公開（7/7）。狭い有害データでファインチューニングした後にモデルが広範な不適切挙動を獲得する「創発的ミスアライメント（EM）」が、Qwen2.5モデル内の単一の潜在的な「人格方向」によって媒介されていることを示した研究。事前学習のみを共有する別モデルにこの方向ベクトルを移植すると、ランダム方向のノイズ下限（約1.1%）に対し2.83%のミスアライメント発生率が誘発され、逆にモデル自身の方向を除去（アブレーション）すると誘発率がほぼ半減した。低ランクPEFTのような軽量なファインチューニング手法ほどこの人格方向を呼び起こしやすいことも示唆しており、単なる現象報告に留まらず「原因ベクトルを直接操作して予防する」道筋を示した点で、メカニスティック解釈可能性と安全性研究を橋渡しする成果といえる。

---

## 企業動向

- **[Australian Payments Plus moves faster with ChatGPT and Codex](https://openai.com/index/australian-payments-plus)** (OpenAI, 7/7) — オーストラリアの決済インフラ企業Australian Payments PlusがChatGPT EnterpriseとCodexを開発ワークフローに導入した事例。エンタープライズ企業への導入事例発信を継続しており、内容自体は既報のCodexの延長線上。

Anthropic: 過去24時間以内に新着なし（最新記事は7/6既報のアルバータ州政府サイバーセキュリティ事例）。

Google DeepMind: ブログ一覧に新規記事は確認できず（A24との研究パートナーシップなど直近の主要記事はいずれも既報）。

---

## 注目論文

- **[Refused in Chat, Written in Code](https://arxiv.org/abs/2607.03968)** (Kumar & Maple) — 上記ハイライト参照。IDEコーディングエージェントの多ターン構造を悪用したジェイルブレイク手法。

- **[Transplanting, inverting, and preventing a misalignment persona](https://arxiv.org/abs/2607.04510)** (Drake & Eberstadt) — 上記ハイライト参照。Qwen2.5における創発的ミスアライメントの因果的な人格方向を特定・操作。

- **[How to Avoid Debate: Scalable AI Safety via Doubly-Efficient Interactive Proofs](https://arxiv.org/abs/2607.03561)**（Chen, Kalai, Xi） — スケーラブルな監督（scalable oversight）の代表手法である「ディベート」は2つの強いAIモデルが対等かつ一方が誠実であることを仮定するが、これは非現実的だと指摘。単一の証明者（AIモデル）と弱い検証者（人間）だけで安全性を検証できる「単一証明者インタラクティブ証明」の枠組みを理論的に提示した。

- **[The Remarkable Effectiveness of Providing AI Agents with Natural Language Tools](https://arxiv.org/abs/2607.03953)**（Somma, Plante, Premji） — 構造化ツールコール（JSON形式のfunction calling）の代わりに自然言語でツールを記述する「Natural Language Tools」手法の独立追試研究。14モデル・8,560試行の実験で、構造化方式に対しツール呼び出し精度を14.9ポイント改善（62.3% vs 47.4%）、致命的エラーを93%削減したと報告。ネイティブのツールコールを持たないモデルや推論モデル・小型モデルほど恩恵が大きい一方、最適化済みのフロンティアモデルでは差が縮小するとしている。

- **[Hierarchical Sparse Attention Done Right: Toward Infinite Context Modeling](https://arxiv.org/abs/2607.02980)**（Hu et al.） — チャンク単位のスパースアテンションは全アテンションに性能面で及ばない原因を「チャンク選択の不正確さ」と特定し、言語モデリング損失のもとでチャンク選択をエンドツーエンドに学習する階層型スパースアテンション「HiLS」を提案。長文脈の計算コストを抑えつつ精度を落とさない方向性の一つ。

---

## オープンソース・モデル

- **[LiquidAI/ifstruct-v1.0](https://huggingface.co/datasets/LiquidAI/ifstruct-v1.0)** — Liquid AIが公開した構造化出力（JSON/YAML）準拠ベンチマーク（7/7）。制約付きデコーディングなしで、多様な言い回しの指示に対しモデルが要求されたスキーマ通りの出力を生成できるかを2,000プロンプトで二値判定する。内容の質ではなく「構造の妥当性」のみを純粋に測る設計が特徴。

- **[LiquidAI/antidoom-mix-v1.0](https://huggingface.co/datasets/LiquidAI/antidoom-mix-v1.0)** — 同じくLiquid AIが公開したプロンプトのみの学習用データセット（7/7）。GSM8K・MATH・MMLUなど14ソースから正解やヒントを除去したプロンプト47.8万件を集約し、"doom loop"（同じ失敗パターンを繰り返す劣化挙動）を抑制する選好学習パイプライン向けに設計されている。

- **[Crownelius/Complete-FABLE.5-traces-2M](https://huggingface.co/datasets/Crownelius/Complete-FABLE.5-traces-2M)** — コミュニティが収集・重複排除したFable 5／Claude Code系エージェントの実行トレース（chain-of-thought・ツール利用ログ）データセット（7/7更新）。公式提供ではなく有志によるキュレーションである点に留意しつつ、エージェント学習用データとしてのトレース収集が活発化している一例として紹介する。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arenaリーダーボード（`lmarena-ai/arena-leaderboard`）は静的スナップショットのみで最終更新が2月と古く、直近の順位変動は取得できず（本日も取得失敗）。

---

## 所感

本日はフロンティアモデル自体の新着は乏しかったが、arxivでは「安全性評価をどう設計し直すか」を巡る研究が目立った。IDEコーディングエージェントのワークフロー型ジェイルブレイクは、Anthropicが進めるジェイルブレイク深刻度フレームワークの議論に「マルチターンのエージェント文脈をどう評価に組み込むか」という具体的な宿題を突きつける内容だし、Qwen2.5の創発的ミスアライメント人格の移植・アブレーション実験は、安全性の問題を「モデルの重みの中の特定方向」として直接操作可能な対象に落とし込んだ点で示唆に富む。一方でLiquid AIのIFStruct／Antidoomのような地味だが実務的なデータセット公開は、フロンティア競争の裏側で「構造化出力の信頼性」や「劣化挙動の抑制」といった地道な品質改善が着々と積み上がっていることを感じさせた。
