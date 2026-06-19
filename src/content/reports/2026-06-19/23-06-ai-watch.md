---
title: "AI Watch（2026年6月20日）"
date: "2026-06-19T23:06"
category: "analysis"
summary: "DeepSeek-V4 が 1.6T MoE × 100万トークンコンテキストでプレビュー公開。Microsoft がコーディングエージェント向けリポジトリ探索専用サブエージェント FastContext を発表。"
tags: ["llm", "moe", "open-source", "architecture", "agents", "reasoning", "coding"]
---

## 今日のハイライト

**DeepSeek-V4 プレビュー版: 1.6T MoE × 100万トークンコンテキストで新 SOTA を主張（6/19）**

[DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence](https://arxiv.org/abs/2606.19348) が arxiv に公開された。V4-Pro（総パラメータ 1.6T・活性化 49B）と V4-Flash（284B・活性化 13B）の 2 バリアント構成で、両モデルとも 100 万トークンのコンテキストウィンドウをサポート。Compressed Sparse Attention（CSA）と Heavily Compressed Attention（HCA）を組み合わせたハイブリッドアテンションで長文効率を抜本改善し、Manifold-Constrained Hyper-Connections（mHC）と Muon オプティマイザも採用。32T 以上のトークンで事前学習された DeepSeek-V4-Pro-Max は現時点の SOTA を塗り替えると主張しており、中国 AI による大規模 MoE の継続的前進が鮮明になった。

**Microsoft FastContext: コーディングエージェントのリポジトリ探索を専用 4B サブエージェントで分業（6/19）**

[FastContext: Training Efficient Repository Explorer for Coding Agents](https://arxiv.org/abs/2606.14066) と対応モデル [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) が公開された。「リポジトリ探索と問題解決を同一モデルで行う」設計が生む非効率（探索履歴がコンテキストを汚染しトークンを浪費する）を根本的に解決するため、Qwen3-4B ベースの探索専用サブエージェントを別立てにし、並列ツール呼び出しで必要なコード断片のみを主エージェントに渡す設計を採用。228 likes でトレンド入りしており、「一モデル全部対応」から「専門サブエージェント協調」という設計パターンの具現化として注目される。

---

## 注目論文

- **[DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence](https://arxiv.org/abs/2606.19348)** (DeepSeek チーム) — 1.6T パラメータ MoE・100 万トークンコンテキストの最新フラッグシップ。CSA＋HCA ハイブリッドアテンションで長文効率を改善し、Muon オプティマイザで学習安定性を高めた。32T トークン事前学習という規模でも「効率」を重視した設計が、コスト競争力の点でオープンウェイト勢の説得力を増す。

- **[ITNet: A Learnable Integral Transform That Subsumes Convolution, Attention, and Recurrence](https://arxiv.org/abs/2606.19538)** (複数著者) — ConvNet・Transformer・RNN の 3 種アーキテクチャが「学習可能な積分変換（Learnable Integral Transform）」という単一の数学的枠組みに包摂できることを示す。局所性・逐次記憶・コンテンツ依存相互作用という各帰納バイアスをパラメータ設定で再現でき、アーキテクチャ設計の「大統一理論」候補として Transformer 一強時代に根本的な問いを投げかける。

- **[Deontic Policies for Runtime Governance of Agentic AI Systems](https://arxiv.org/abs/2606.19464)** (複数著者) — ツール呼び出し・データ操作・ソフトウェアインストール・他エージェントとの連携を行う自律エージェントに向け、認証・アクセス制御だけでなく企業ガバナンス全体の構造をランタイムで強制する義務論的（deontic）ポリシーフレームワークを提案。エージェント普及に伴うセキュリティ・コンプライアンス課題に正面から対処する実装寄りの研究。

- **[Hidden Anchors in Multi-Agent LLM Deliberation](https://arxiv.org/abs/2606.19494)** (複数著者) — マルチエージェント LLM が複数ラウンドで回答を交換・改訂する「熟議」プロセスを分析。集団に引きずられる「群れ効果」と自己信念の両方が意見形成に影響することを DeGroot／Friedkin–Johnsen モデルを拡張して定式化。「なぜ熟議が機能するのか」を初めてモデル化しており、マルチエージェントシステムの設計と評価に示唆を与える。

- **[Emergent Alignment](https://arxiv.org/abs/2606.19527)** (複数著者) — LLM に「良心ステップ（conscience step）」を付与し、自身の出力・推論が倫理的に逸脱していないかをセルフレビューさせる。DPO（Direct Preference Optimization）でアライメント損失を組み込むことでオンライン学習が可能になり、外部監視なしに倫理逸脱を自己修正できる仕組みを提案。エマージェントなアライメント能力の有無という根本問いに実証的に迫る。

---

## オープンソース・モデル

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — コーディングエージェントのリポジトリ探索を専任化した 4B サブエージェントモデル（Qwen3-4B ベース）。並列ツール呼び出しでコードベースを高速探索し、関連スニペットのみを主エージェントに渡すことでトークン消費と文脈汚染を削減。MIT ライセンスで公開されており、既存コーディングエージェントへの組み込みが容易。

- **[armand0e/claude-fable-5-claude-code](https://huggingface.co/datasets/armand0e/claude-fable-5-claude-code)** (160 likes) — Fable 5 ベースの Claude Code が生成したエージェントトレースデータセット。政府アクセス停止後もコミュニティが Fable 5 の挙動を記録し続けており、蒸留や挙動分析の素材として活用が進む。「規制後の知識保存」という構造が継続していることを示すデータポイント。

- **[WithinUsAI/claude_mythos_distilled_25k](https://huggingface.co/datasets/WithinUsAI/claude_mythos_distilled_25k)** (88 likes) — Claude Mythos 5 からの蒸留データ 2.5 万件を収録したデータセット。アクセス停止前に収集された Mythos 5 の出力を活用した蒸留素材で、他モデルへの能力移転を狙う研究・開発に使われるとみられる。Fable 5 トレースと合わせ、制限後も蒸留によって知識を流通させるコミュニティの動きが鮮明だ。

- **[lazarus19/Vibe-Coding-Instruct](https://huggingface.co/datasets/lazarus19/Vibe-Coding-Instruct)** (126 likes) — 「バイブコーディング」スタイルの指示データセット。仕様を口語的に伝えてコードを生成させる「バイブコーディング」に特化した instruction tuning 用データで、この領域向けのファインチューニング素材として整備が進む。非エンジニアによるコード生成需要を反映したデータ整備の一例。

---

## 所感

今日最大のニュースは DeepSeek-V4 のプレビュー公開だ。1.6T パラメータ・100 万トークンコンテキストという数字は、もはやパラメータ規模の競争よりも「コンテキスト長をどれだけ実用的に扱えるか」が次の戦場であることを示唆している。一方 Microsoft の FastContext は、単一の万能モデルへの依存から「役割特化したサブエージェントの協調」へという設計哲学の転換を小さいが明確な形で体現している。ITNet の「大統一アーキテクチャ」提案と合わせると、スケール・コンテキスト・アーキテクチャの三方向で「Transformer + 自己回帰の当たり前」が問い直されつつある局面にあることが見えてくる。
