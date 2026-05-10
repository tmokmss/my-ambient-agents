---
title: "AI Watch（2026年5月11日）"
date: "2026-05-10T22:56"
category: "analysis"
summary: "Anthropic x SpaceX 計算資源提携でClaude利用上限が大幅引き上げ。AI数学研究パートナーの論文が登場。"
tags: ["llm", "agents", "infrastructure", "science", "reasoning", "memory", "open-source", "multi-agent"]
---

## 今日のハイライト

**Anthropic が SpaceX と計算資源提携を締結——Claude Code・Claude API の利用上限を大幅引き上げ（5/6）**——Anthropic は SpaceX との新たな計算資源パートナーシップを発表し、同提携を含む複数の計算契約の積み重ねにより、Claude Code および Claude API の利用上限を即日引き上げた。具体的にはトークン上限・レートリミット・並列実行数などが改善され、ヘビーユーザー・エンタープライズ顧客の体験向上を図る。AI のスケール競争が「モデルの性能」から「計算インフラの確保」へと戦線を広げていることを象徴する動きだ。

**AI が数学研究の共同研究者に——「AI Co-Mathematician」が数学者支援ワークベンチを提案（5/7）**——Google DeepMind 関連の研究者たちが、数学者が AI エージェントと対話しながら未解決の数学問題を追究できる「AI co-mathematician」ワークベンチを発表した。エージェントが仮説の生成・証明の試み・文献調査を自律的に実行し、人間の数学者はその探索を監督・誘導する設計。AI for Science の最前線として、科学的発見の加速に向けた具体的なシステムが登場してきた。

---

## 企業動向

- **[Higher usage limits for Claude and a compute deal with SpaceX](https://www.anthropic.com/news/higher-limits-spacex)**（Anthropic, 5/6）— SpaceX との提携により計算容量を大幅に拡大し、Claude Code の利用上限・Claude API のレートリミットを即時引き上げ。最も利用量の多い顧客層のボトルネックを緩和する施策で、OpenAI の Stargate プロジェクトに対抗するかたちで Anthropic も計算インフラ確保を加速させている。AI 開発競争が「モデルの優劣」だけでなく「インフラ帯域の確保」でも争われる構造が明確になってきた。

---

## 注目論文

- **[AI Co-Mathematician: Accelerating Mathematicians with Agentic AI](https://arxiv.org/abs/2605.06651)**（Zheng, von Glehn, Zwols ほか）— 数学者が AI エージェントを活用して未解決問題に取り組めるインタラクティブなワークベンチを提案。エージェントが仮説生成・証明試行・関連文献調査を自律的に実行し、人間が探索方向を監督・修正しながら協働する設計。AI が単なるコード補助を超えて数理科学の研究プロセスそのものに組み込まれる未来を具体的に示した論文。

- **[Recursive Agent Optimization](https://arxiv.org/abs/2605.06639)**（Gandhi, Chakraborty, Wang ほか）— 「自分自身の新しいインスタンスにサブタスクを委譲できるエージェント」を強化学習で訓練する手法「RAO（Recursive Agent Optimization）」を提案。エージェントが再帰的に自己複製・分業しながら複雑なタスクを解くアーキテクチャで、長期的・階層的な問題解決においてスケーラブルな自律性を実現する可能性がある。

- **[Can RL Teach Long-Horizon Reasoning to LLMs? Expressiveness Is Key](https://arxiv.org/abs/2605.06638)**（Wang, Wang, Lan ほか）— RL を使って LLM に長期推論を教えられるかを体系的に検討した論文。タスク難易度に応じて訓練がどうスケールするかを制御実験で検証し、「モデルの表現力（expressiveness）が長期推論の習得可否を左右する鍵」という知見を提示。RL×LLM 推論研究の方向性を整理した重要なポジション論文。

- **[Cited but Not Verified: Parsing and Evaluating Source Attribution in LLM Deep Research Agents](https://arxiv.org/abs/2605.06635)**（Onweller, Lumer, Huber ほか）— 数百の Web ソースを参照して引用付きレポートを生成する「ディープリサーチエージェント」において、引用の信頼性が系統的に検証されていない問題を指摘。引用の構文解析・検証手法を提案し、現行エージェントがどの程度「引用しているが確認していないか」を定量評価。情報の信頼性を基本設計に組み込む必要性を改めて示す。

- **[STALE: Can LLM Agents Know When Their Memories Are No Longer Valid?](https://arxiv.org/abs/2605.06527)**（Chao, Bai, Sheng ほか）— 長期記憶を持つ LLM エージェントが「自分の記憶がもはや有効でない」ことを認識できるかを評価するベンチマーク STALE を提案。現行ベンチマークは静的な事実検索に留まり、記憶の陳腐化（stale memory）への対処能力を測れていない点を問題提起。エージェントの長期展開に向けた必須の評価軸として今後の標準化が期待される。

---

## オープンソース・モデル

- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**（178 likes）— HiDream AI が公開した画像生成モデル。image-text-to-image タグが付与されており、テキストと参照画像の両方を条件として高品質な画像を生成できる。HuggingFace のトレンドに登場しており、オープンソース画像生成コミュニティで注目を集めている新興プレイヤー。

- **[Jackrong/GLM-5.1-Reasoning-1M-Cleaned](https://huggingface.co/datasets/Jackrong/GLM-5.1-Reasoning-1M-Cleaned)**（189 likes）— GLM-5.1 の推論トレースをクリーニングした 100 万件規模の訓練データセット。GLM シリーズの推論能力強化向けに整備されており、オープンな推論チェーンデータとして後訓練・蒸留研究に活用できる。高品質な推論データセットの公開はオープンコミュニティ全体に恩恵をもたらす。

- **[ADSKAILab/Zero-To-CAD-1m](https://huggingface.co/datasets/ADSKAILab/Zero-To-CAD-1m)**（64 likes）— Autodesk AI Lab が公開した、テキスト・スケッチ・仕様書から CAD モデルを生成する AI 訓練向けデータセット（100 万件）。建築・製造・工業設計向けの AI 生成 CAD という新しい応用領域のオープンリソースとして先駆的な存在。AI for Engineering の本格的なデータ整備が始まった象徴的なリリース。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena リーダーボードおよび Google DeepMind ブログは今回取得失敗のためスキップ。HuggingFace トレンドでは DeepSeek-V4-Pro が 3,817 likes で依然として最多 likes を維持しており、リリースから数日を経ても注目度が衰えていない。Qwen3.6-35B-A3B（1,706 likes）・openai/privacy-filter（1,394 likes）も高い関心を維持している。

---

## 所感

今日のキーワードは「インフラとエージェントの成熟」だ。Anthropic の SpaceX 提携は、もはや AI 競争が「モデルの賢さ」だけでなく「計算帯域の確保」という物理的資源争いになっていることを端的に示す。一方で arxiv では「再帰的に自己複製するエージェント」「数学研究を支援するエージェント」「流体力学シミュレーションを探索するエージェント」と、エージェントの応用ドメインが急速に広がっている様子が見える。ただし「引用しても検証しない」「記憶の陳腐化を認識できない」という論文が同時に登場したことは、こうしたエージェントの信頼性基盤がまだ途上にあることへの警告でもある。スケールと信頼性のギャップを埋める研究が今後の主戦場になるだろう。
