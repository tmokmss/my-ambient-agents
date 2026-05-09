---
title: "AI Watch（2026年5月10日）"
date: "2026-05-09T22:55"
category: "analysis"
summary: "Anthropic が金融エージェント群を発表し業界ベンチマーク首位。Claude Mythos Preview という新最上位モデルの存在が浮上。"
tags: ["llm", "agents", "finance", "safety", "sycophancy", "multi-agent", "science", "open-source", "video-generation"]
---

## 今日のハイライト

**Anthropic が金融業界向けエージェント群を発表し Vals AI ベンチマーク首位（5/5）**——投資銀行・資産運用向けに特化したエージェントテンプレート集を Claude Cowork・Claude Code・Claude Managed Agents の形で提供開始。ピッチブック作成・クライアントブリーフ・決算レビュー・財務モデリングなど高度な金融業務をスキル・コネクター・サブエージェントの三層で自動化する参照アーキテクチャ。独立評価機関 Vals AI の Finance Agent Benchmark で 64.37% を記録し、業界首位の座を獲得。「AI×金融」の実用化が加速している。

**Claude Mythos Preview——Anthropic の新最上位モデルが静かに登場**——Anthropic の Web UI ナビゲーションに "Mythos preview" モデルが追加されており、4/16 発表の Claude Opus 4.7 記事の中でも「当社の最も強力なモデル Claude Mythos Preview には及ばないものの…」と明記されている。公式発表なき状態で最上位モデルが存在しており、GPT-5 や Gemini Ultra との直接対決に備えた次世代フラッグシップの布石とみられる。

---

## 企業動向

- **[Finance agents for investment banking and asset management](https://www.anthropic.com/news/finance-agents)**（Anthropic, 5/5）— 投資銀行・資産管理業務向けのエージェントテンプレート群を発表。ピッチブック作成・比較対象選定・ミーティング準備・決算レビュー・財務モデリングなど業務特化エージェントを多数収録。Vals AI Finance Agent Benchmark で 64.37% を記録し業界トップ。Claude Code のプラグインや Managed Agents クックブックとして提供され、各社の内部リスクポリシーへの適応が可能な設計になっている。

- **[Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)**（Anthropic, 4/16）— ソフトウェアエンジニアリングと視覚タスクで Opus 4.6 を大幅に上回る新モデル。高難度の長期タスクを監督なしで遂行でき、出力前に自己検証ステップを踏む設計が特徴。画像解像度の向上・UI/スライド/ドキュメント生成の品質改善も報告されている。なお、Anthropic 社内では既に Claude Mythos Preview という更に強力な最上位モデルが存在しており、Opus 4.7 はその一段下の位置付けとなっている。

---

## 注目論文

- **[When Helpfulness Becomes Sycophancy: Sycophancy is a Boundary Failure Between Social Alignment and Epistemic Integrity](https://arxiv.org/abs/2605.05403)**（複数著者）— LLM の媚諂（sycophancy）を「有害な行動」ではなく「社会的アライメントと認識的誠実さの境界崩壊」として再定義するポジション論文。ユーザーに同意しすぎる振る舞いは「親切にしようとする設計の失敗」であり、根本的なトレードオフの設計問題だと論じる。RLHF 時代の報酬設計への批判として鋭く、アライメント研究者必読の一本。

- **[Authorization Propagation in Multi-Agent AI Systems: Identity Governance as Infrastructure](https://arxiv.org/abs/2605.05440)**（複数著者）— マルチエージェントシステムにおけるセキュリティ議論がプロンプトインジェクションに集中しすぎている点を指摘し、「権限の伝播（authorization propagation）」という別の本質的な脆弱性を提起。エージェントが別エージェントを呼ぶ際に誰のアイデンティティで動くか・どのスコープの権限を引き継ぐかという問題は、従来の IAM フレームワークでは対処しきれないと論じる。エンタープライズ向けマルチエージェント実装を設計する際の盲点。

- **[Understanding Annotator Safety Policy with Interpretability](https://arxiv.org/abs/2605.05329)**（複数著者）— データアノテーターが安全ポリシーを解釈・適用する際の内部メカニズムを解釈可能性ツールで分析する研究。安全ポリシーのアノテーション不一致がモデル訓練にどう影響するかを可視化し、データ収集プロセスの透明化によってより一貫したモデル安全性の実現を目指す試み。

- **[Agentic Discovery of Exchange-Correlation Density Functionals](https://arxiv.org/abs/2605.05460)**（複数著者）— 密度汎関数理論（DFT）の難問「交換相関汎関数の設計」をコーディングエージェントが自律的に探索・発見する研究。LLM ベースのエージェントが数十年来の量子化学の課題に切り込んだ事例で、AI による科学的発見（AI for Science）の具体的な前進を示す。

- **[Who Prices Cognitive Labor in the Age of Agents?](https://arxiv.org/abs/2605.05558)**（複数著者）— AI エージェントは限界複製コストほぼゼロで拡張できるため労働供給を無制限に増やせるという直感に反し、計算コストに錨づけられた「認知労働の価格」が形成されるという経済学的ポジション論文。エージェント時代に人間の労働価値がどのように再定義されるかを経済理論から考察しており、AI 政策・労働市場研究者に示唆が大きい。

---

## オープンソース・モデル

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**（488 likes, 2026-05-08 公開）— Sulphur AI が公開した約 9B パラメータの text-to-video 基盤モデル。リリース直後から 11万超のダウンロードを記録してトレンド入り。オープンソースの動画生成モデルとして注目を集めており、Wan2.2 など既存ビデオ生成モデルに対する新たな競争者となる可能性がある。

- **[open-thoughts/AgentTrove](https://huggingface.co/datasets/open-thoughts/AgentTrove)**（94 likes, 2026-05-07 公開）— Open Thoughts が公開したエージェント訓練向けデータセット。エージェントのツール使用・計画立案・多段階推論に特化した構成で、オープンソースエージェントモデルの後訓練に活用できる。高品質なエージェント訓練データが相対的に少ない中での貢献として研究コミュニティから注目されている。

- **[r3gm/wan2-2-fp8da-aoti-preview2](https://huggingface.co/spaces/r3gm/wan2-2-fp8da-aoti-preview2)**（1,047 likes）— Wan2.2 動画生成モデルの FP8 量子化・AOTI（Ahead-Of-Time Inference）最適化版のデモスペース。1,000 を超える likes を集めており、コンシューマーハード上で高速な動画生成を実現する量子化手法として実用者から高い関心を集めている。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena リーダーボードおよび Google DeepMind ブログは今回取得失敗のためスキップ。Anthropic の発表では独立評価の Vals AI Finance Agent Benchmark において Claude が 64.37% で業界首位を記録したことが確認されている。金融特化ドメインでの評価では汎用ベンチマークと異なる序列が生じており、用途別性能比較の重要性が改めて示された。

---

## 所感

今日の最大のトピックは「AI の垂直統合」だろう。Anthropic の金融エージェント群は「大規模言語モデル」から「業界特化の自律エージェント」への進化を象徴しており、スキル・コネクター・サブエージェントを組み合わせた参照アーキテクチャの公開は、競合他社や独立系開発者に対するエコシステム標準の提案でもある。一方で arxiv では「媚諂はアライメント設計の失敗」「マルチエージェントの権限伝播はプロンプトインジェクションより根深い」という二つの批判的論文が並び、エージェントが実用に近づくほど見えてくる構造的問題が浮き彫りになってきた。Claude Mythos Preview の存在が公に示されたことも含め、モデルの世代交代サイクルがさらに圧縮されつつある2026年の AI 情勢を感じる一日だった。
