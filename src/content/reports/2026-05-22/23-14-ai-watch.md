---
title: "AI Watch（2026年5月23日）"
date: "2026-05-22T23:14"
category: "analysis"
summary: "Anthropicが「Claudeに広告なし」を宣言。ByteDanceのLanceがany-to-anyモデルでトレンド首位。大型LLMは知っているのに幻覚するという逆説が実証。"
tags: ["llm", "multimodal", "agents", "alignment", "open-source", "benchmark", "tts", "safety"]
---

## 今日のハイライト

**Anthropic「Claude は思考のための空間」——広告なし方針を公式宣言（5/22）**——Anthropic が「Claude is a space to think」を公開し、Claude に広告を組み込まないことを明文化した。検索エンジンやSNSが有機コンテンツとスポンサーコンテンツを混在させる文化を当然視する中、「良いノートブックや道具に広告がないように、Claude にもない」という立場を鮮明にした。収益モデルの選択を超えて、AI アシスタントと人間の思考の関係に対する Anthropic の設計思想を宣言した一文として注目に値する。

**大型 LLM は答えを「知っているのに」幻覚する——スケールと幻覚の逆説的関係（5/22 arxiv）**——「Hallucination as Commitment Failure」論文が、0.8B〜72B の Qwen・Llama モデルを横断した大規模検証で衝撃的な結果を示した。幻覚の 16〜47% は、モデルが正解コンセプトを生成時点で既に内部表現に持ちながら、異なる表面形式にコミットすることで発生しており、この割合はスケールが上がるほど単調増加する。Instruction tuning が「コミットメントの鋭さ」を上げることで、helpfulness と自信に満ちた幻覚の両方を同時に生み出すという二面性を実証した。

---

## 企業動向

- **[Claude is a space to think](https://www.anthropic.com/news/claude-is-a-space-to-think)** (Anthropic, 5/22) — Claude に広告を入れないという方針を公式に宣言。「ユーザーが思考を続けるためのツールであるべき」という設計哲学を明示し、他のサービスとの差別化と信頼構築への長期投資として位置づけている。

- **[OpenAI named a Leader in enterprise coding agents by Gartner](https://openai.com/index/gartner-2026-agentic-coding-leader)** (OpenAI, 5/22) — Gartner の 2026 Magic Quadrant for Enterprise AI Coding Agents において OpenAI が Leader に選出された。Codex のエンタープライズ展開規模と革新性が評価されており、コーディングエージェント市場での実質的な業界標準としての地位が第三者機関によって確認された形。

- **[How Virgin Atlantic ships faster with Codex](https://openai.com/index/virgin-atlantic)** (OpenAI, 5/22) — Virgin Atlantic が Codex を使ってモバイルアプリを固定納期で出荷し、ユニットテストカバレッジをほぼ全量に引き上げ P1 バグゼロを達成した事例を公開。航空業界という規制・品質要件が厳しいドメインでのエージェントコーディング成功例として説得力がある。

- **Google DeepMind**: JavaScript レンダリングのためページ取得が部分的。

---

## 注目論文

- **[Hallucination as Commitment Failure: Larger LLMs Misfire Despite Knowing the Answer](https://arxiv.org/abs/2605.22007)** (Yeom et al., cs.CL) — 幻覚は「知識の欠如」ではなく「コミットメントの失敗」であるという新しい枠組みを提示。正解コンセプトが生成時点の内部表現に存在するにもかかわらず、確率質量が複数の表面形式に分散することで幻覚が生まれる。Instruction tuning のスケールアップが helpfulness と幻覚を同時に増幅するというトレードオフは、アライメント研究に重要な問いを投げかける。

- **[Open-World Evaluations for Measuring Frontier AI Capabilities (CRUX)](https://arxiv.org/abs/2605.20520)** (Kapoor et al., cs.AI) — ベンチマークが「精密に定義できるタスク」を優先する構造的バイアスを批判し、長期・現実的タスクを少数のサンプルで質的評価する「オープンワールド評価」を提唱。デモとして AI エージェントが Apple App Store に iOS アプリを実際に公開する課題を実施し、一度のみの手動介入でほぼ単独で完了。近い将来に広まりそうな能力の早期警告システムとして機能する評価設計を提案している。

- **[Conditional Equivalence of DPO and RLHF: Implicit Assumption, Failure Modes, and Provable Alignment](https://arxiv.org/abs/2605.20834)** (Yang et al., cs.AI) — 「DPO は RLHF と等価」という広く流布する前提が条件付きであることを証明。RLHF 最適方策が人間の選好する回答を好む場合にのみ成立し、その条件が破れると DPO は「選好されない回答」を選ぶ方向に最適化しうる。理論的な穴を塞ぐ Constrained Preference Optimization (CPO) を提案し、ベンチマーク SOTA を達成。

- **[SOLAR: A Self-Optimizing Open-Ended Autonomous Agent for Lifelong Learning](https://arxiv.org/abs/2605.20189)** (Vetcha & Liu, cs.AI) — 勾配ベースのファインチューニングではなく、モデルの重みそのものを探索環境として扱うパラメータレベルのメタ学習で継続的に自己改善するエージェントを提案。非定常データストリームへの適応とカタストロフィック忘却の回避を同時に実現し、常識・数学・医療・コーディング等の多様なタスクで既存ベースラインを上回る。

- **[SpecHop: Continuous Speculation for Accelerating Multi-Hop Retrieval Agents](https://arxiv.org/abs/2605.21965)** (Saberi et al., cs.CL) — マルチホップ検索でツール呼び出しのたびに生じる待機レイテンシを、投機的実行フレームワークで最大 40% 削減。複数の投機スレッドを並列維持し、非同期検証・正しいブランチへのコミット・誤ったブランチのロールバックを組み合わせることで最終回答の品質を保ちつつ高速化を実現する。

---

## オープンソース・モデル

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** (643 likes・any-to-any・5/22更新) — ByteDance 研究チームが公開した統合マルチモーダルモデル。テキスト・画像・動画・音声にまたがる生成・編集・理解の全タスクをマルチタスク協調学習で統一的に扱う。コマンドライン一本でモダリティ横断タスクを実行できる設計が特徴で、any-to-any カテゴリのトレンド首位。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** (1266 likes・text-to-video・5/22更新) — 本日公開の text-to-video ベースモデル。Diffusers・llama.cpp・llama-cpp-python での推論に対応しており、ローカル動画生成ニーズに応える。likes 数からコミュニティの関心が非常に高く、ファインチューニングベースとしての活用も期待される。

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** / **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** (translation・5/22更新) — Tencent が arxiv 論文と同日公開した多言語翻訳モデルファミリ。33言語に対応し、1.8B モデルは 1.25bit 極端量子化で 440MB まで削減可能。7B・30B モデルは DeepSeek・Kimi を抑えオープンソースモデル最高水準を主張。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** (579 likes・text-to-speech・5/18更新) — カスタムボイスとゼロショット音声クローンに対応した多言語 TTS モデル。Python SDK からシンプルに呼び出せる設計で、リファレンス音声数秒からの音声合成が可能。高品質な音声合成のローカル実行需要を捉えてトレンド上位に継続的にランクイン。

---

## 所感

今日の最も示唆深い発見は「Hallucination as Commitment Failure」論文が明らかにした逆説だ——大型モデルほど、答えを「知っているのに」幻覚しやすい。これは Instruction tuning の本質がコミットメント強度の増幅であるという見方を支持し、「より大きく、より調整されたモデル＝より正確」という単純な期待に根本的な疑問を投げかける。一方、Anthropic の広告なし宣言とOpenAIのGartner選出は一見対照的だが、どちらも「AI を信頼できる仕事の道具として定着させる」という共通の戦略的文脈にある。ByteDance の Lance に代表される any-to-any マルチモーダルモデルの台頭は、単一モデルがモダリティの壁を超える時代の到来を改めて印象づける一日だった。
