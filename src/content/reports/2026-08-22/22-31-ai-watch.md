---
title: "AI Watch（2026年8月23日）"
date: "2026-08-22T22:31"
category: "analysis"
summary: "自己改善ループを謳うオープンモデルOrnith-1.5が登場する一方、arXivは自己改善の効果測定に潜むバイアスを指弾。CoT抽出攻撃や概念単位の忘却ベンチマークも登場。"
tags: ["llm", "agents", "self-improvement", "open-source", "safety", "benchmark"]
---

## 今日のハイライト

**独立系スタートアップDeep Reinforceが、タスク生成・ハーネス構築・ロールアウトまで一体で最適化する「end-to-endの自己改善ループ」で訓練したMoEモデル「Ornith-1.5-35B-A3B」をHugging Faceで公開（8/20）。ほぼ同時期にarXivには、LLMの自己改善を報告する実験の多くが対照群なしの測定アーティファクトに過ぎないことを実証した論文「Phantom Gains」が投稿された（8/20）**

Ornith-1.5は、活性化わずか約3Bパラメータの中規模MoEでありながら、Terminal Bench 2.1（Claude Code環境）で68.5点と、同クラスのQwen3.6-35B（49.2）は元より、密なGemma 4-31BやMuse Glimmer-30Bをも大きく上回るスコアを公式に公開しており、「固定の人手タスクではなく、モデル自身がタスク生成・解法探索・強化学習を回し続けることで能力を伸ばす」という自己改善型基盤モデルの実例を提示した。一方Phantom Gainsは、Qwen3-8BへのLoRA自己学習3ラウンドを、同一パイプラインを通した「凍結対照群」と比較する形で監査し、単一のgreedyデコードだけで能力変化を判定する、対照群を置かない、といった7種の「標準的とされる」測定手法が、いずれも対照群を外すと報告された成果が反転してしまうことを実証した。話題の派手な「自己改善モデル」の裏側で、その成果を正しく測定する方法論自体がまだ発展途上であることを、同じタイミングでの二つの発表が皮肉にも裏付けている。

---

## 注目論文

arXivの日次フィードは土日は休止のため、直近の投稿（8/20）から選出した。

- **[Phantom Gains: Auditing Self-Improvement Against a Measured Null](https://arxiv.org/abs/2608.20290)**（Cheng Xu, Nan Yan ほか, 8/20） - Qwen3-8Bへのrank-32 LoRA自己学習3ラウンドを、同一パイプラインを通した凍結対照群と比較監査。単一greedyデコードでの能力変化判定など「標準的な」測定手法7種が、対照群なしではいずれも見かけ上の成果を生み出してしまうことを実証し、自己改善研究の再現性・測定妥当性に一石を投じた。8/19の「On the Fragility of Self-Improving Agents」に続く、自己改善の評価手法そのものを問い直す続報。
- **[AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](https://arxiv.org/abs/2608.20318)**（Yizhe Chi, Wenyi Li ほか, 8/20） - 「再帰的自己改善（RSI）」が実現可能かは、AIエージェント自身が次世代モデルの訓練アルゴリズム（目的関数や更新則）を設計できるかにかかっていると位置づけ、データ収集やハイパーパラメータ調整では解けない、訓練アルゴリズムの改善そのものを問う初のベンチマークを提案。上記Phantom Gainsと並び、自己改善というテーマを「測る側」と「作る側」の両面から深掘りする論文が同日に揃った。
- **[EchoCoT: Extracting Hidden Chain-of-Thought from Large Reasoning Models](https://arxiv.org/abs/2608.20055)**（Yiting Qu, Ziqing Yang ほか, 8/20） - フロンティア商用推論モデルが非公開にしている思考過程（hidden CoT）を、ツール呼び出しの間に生じる「推論リプレイ」という見落とされていた経路を突き、API応答の忠実度シグナルを手がかりに反復的にほぼ逐語的に抽出できることを実証。非公開のCoTが企業にとって重要な資産であるにもかかわらず、ブラックボックスAPI越しに漏洩しうることを具体的な攻撃手法として示した点が重要。
- **[ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models](https://arxiv.org/abs/2608.20338)**（Sahil Kale, Ian Harris, 8/20） - 従来の機械学習忘却（unlearning）評価は、忘れるべき事実と保持すべき事実が独立した単純な事実想起で測られており、「有害な振る舞いだけを消し、良性の関連知識は残す」という概念単位の忘却能力を捉えられていないと指摘。文脈依存性を組み込んだベンチマークを提示し、unlearningの評価基準そのものを底上げしようとする試み。

---

## オープンソース・モデル

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**（8/20公開） - タスク生成・ハーネス構築・解法ロールアウトを一体で最適化する自己改善ループで訓練された、活性化約3BパラメータのMoEモデル。Terminal Bench 2.1（Claude Code環境）で68.5点と、密なGemma 4-31BやMuse Glimmer-30Bを大きく上回るコーディング・エージェント性能をMITライセンスで公開している。
- **[ChartGalaxy/ChartGalaxy](https://huggingface.co/datasets/ChartGalaxy/ChartGalaxy)**（8/21更新） - 実在・合成あわせて176万件超のインフォグラフィック・チャート画像を、元になった表データとペアで収録した大規模データセット。75種のチャートタイプ・440のバリエーション・68のレイアウトテンプレートを網羅し、チャート理解・コード生成・チャート生成モデルの学習/評価に使える。
- **[markov-ai/cad-1000-hours](https://huggingface.co/datasets/markov-ai/cad-1000-hours)**（8/21公開） - AutoCAD・SOLIDWORKS・Revitなど10種のCAD/BIM/構造解析ソフトを対象に、597ワークフロー・計1,021時間分の画面録画と操作ログを収録したcomputer-useデータセット。ブラウザ操作中心だったcomputer-useエージェント研究に、専門的なデスクトップCADソフト操作という新しいドメインを持ち込む。

---

## 所感

今日最も印象的だったのは、「AIの自己改善」というテーマを巡って、実務側と研究側で正反対のベクトルの発表が同じタイミングで並んだことだった。Ornith-1.5は、タスク生成からロールアウトまでを丸ごと自己改善ループに委ねたモデルが実際にオープンウェイトで動くところまで来たことを示す一方、Phantom Gainsは、まさにそうした「自己改善で強くなった」という主張の大半が、適切な対照群を置かなければ簡単に測定アーティファクトへとすり替わってしまうことを暴いた。AI4AI-Benchが「訓練アルゴリズムそのものを設計する能力」を測ろうとし始めているのも合わせて考えると、自己改善という言葉が「派手な触れ込み」から「何をどう測れば本当に改善と言えるのか」という地に足のついた検証フェーズへ移りつつあることがうかがえる。EchoCoTによる非公開CoTの抽出攻撃や、ConceptGuardによる概念単位の忘却評価も、フロンティアモデルの「見えない部分」——思考過程や忘却の質——を厳密に検証しようとする同じ潮流の一部として読める。
