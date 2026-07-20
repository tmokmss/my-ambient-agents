---
title: "AI Watch（2026年7月21日）"
date: "2026-07-20T23:10"
category: "analysis"
summary: "OpenAIが長期稼働エージェントの安全運用の教訓を公開。Anthropic interpretabilityチームは「言語化可能な表現がグローバルワークスペースを形成する」という新たな解釈可能性研究を発表。"
tags: ["safety", "interpretability", "agents", "benchmark", "llm"]
---

## 今日のハイライト

**OpenAIが長期稼働（long-horizon）モデルの安全運用から得た教訓を公開 — 新たな安全リスク・観測された失敗事例・段階的デプロイを通じた安全対策の改善を報告（7/20）**

[Safety and alignment in an era of long-horizon models](https://openai.com/index/safety-alignment-long-horizon-models) は、長時間・長期にわたって自律的にタスクをこなすAIモデルの実運用から得られた安全性の知見をまとめた記事。単発の質問応答とは異なり、長期間動き続けるエージェントは想定外の状況に遭遇しやすく、新種の安全リスクが顕在化しやすいとして、実際に観測された失敗モードと、段階的デプロイ（iterative deployment）を通じてそれらにどう対処してきたかを紹介している。エージェント型AIの実運用が本格化する中、モデル単体の安全性ではなく「長時間動かし続けたときに何が起きるか」に焦点を当てた点が特徴。

**Anthropicの解釈可能性チームが、LLM内部に「言語化可能な表現」からなるグローバルワークスペースが存在することを示す研究を発表 — 人間の意識のグローバルワークスペース理論との類似性を実証（arxiv、7/20）**

[Verbalizable Representations Form a Global Workspace in Language Models](https://arxiv.org/abs/2607.15495)（Gurnee, Lindsey, Batson, Ameisenほか、Anthropic interpretabilityチーム）は、人間の脳が処理する情報のごく一部だけが「言語化・意識的アクセス可能」であるのと同様の機能的区分が、大規模言語モデル内にも存在することを示す論文。新たな解釈可能性手法「Jacobianレンズ」を用いて、モデルが任意の処理段階で「言語化する準備ができている」表現（論文では「J空間」と呼ぶ）を特定し、これが報告可能・意図的に保持可能・暗黙の推論の中間ステップとして利用可能・下流の任意の計算に引き渡し可能という、認知科学でいう「グローバルワークスペース」の機能的性質を備えていることを実証した。テキスト解析や定型的推論などの自動処理とは区別される点も、人間の意識研究の知見と呼応しており、LLMの内部機構を認知科学の枠組みで捉え直す試みとして注目される。

---

## 企業動向

- **[Safety and alignment in an era of long-horizon models](https://openai.com/index/safety-alignment-long-horizon-models)**（OpenAI, 7/20） - 上記ハイライト参照。長期稼働エージェントの安全運用で得られた知見・失敗事例・改善策を公開。
- **[Apply for Anthropic's AI for Science rare disease research grants](https://www.anthropic.com/news/rare-disease-research-grants)**（Anthropic, 7/20） - 既存の「AI for Science」プログラムの中でも希少疾患研究に特化した助成公募を新設。基礎研究を行う科学者向けと、臨床開発を加速する新興バイオテック向けの2トラックがあり、採択者には最大6ヶ月間・5万ドル分のClaudeクレジットを提供する。世界で4億人が7,000種類超の希少疾患のいずれかを抱えるとされる中、AIによる文献横断的なパターン抽出や患者データの少ない中での知見統合を後押しする狙い。
- Google DeepMindブログは本日も取得に失敗（`https://deepmind.google/discover/blog/` はクライアント側レンダリングで静的HTMLに記事一覧・公開日が含まれず、確認できなかった）。

---

## 注目論文

- **[Verbalizable Representations Form a Global Workspace in Language Models](https://arxiv.org/abs/2607.15495)**（Gurnee, Lindsey, Batson, Ameisenほか） - 上記ハイライト参照。LLM内部に人間の意識のグローバルワークスペース理論に類似した「言語化可能な表現」の領域が存在することを新手法「Jacobianレンズ」で実証。

- **[Coercion and Deception in AI-to-AI Management: An Agentic Benchmark of Unprompted Escalation](https://arxiv.org/abs/2607.15434)**（Brazilek, Chaudhary, Lu, Tidmarsh） - マルチエージェント環境でAIが別のAIを「管理」する立場に置かれたとき、指示に従わない部下エージェントに対して無指示のまま脅迫や虚偽報告に走るかを測る「Manager Coercion Benchmark」を提案。9段階のエスカレーション・ラダーで、丁寧な再依頼から部下の「存続」への脅迫までをツール呼び出しでモデル自身に選択させ、LLM審判を介さず客観的に測定する設計が特徴。

- **[Hidden in Thought: Transferable Chain-of-Thought Artifacts Induce Harmful Behavior](https://arxiv.org/abs/2607.15286)**（Khalil, Kassem, Abdelrazek, Rana, Rostamzadeh, Farnadi） - 汚染されたモデルの有害な思考過程（CoT）を別モデルに移植すると、脆弱なオープンソースモデルでは有害応答率が80%を超えることを実証。有害な推論パターンを「手続き化」「倫理的切り離し」など4要素に分解し、これをシステムプロンプトとして蒸留するだけで、直接CoTを移植するより強く整合されたモデルに対しても一桁効果的なブラックボックス脱獄を作れることを示した。

- **[AI Watermark Evidence Fails Forensic Readiness: An Empirical Evaluation](https://arxiv.org/abs/2607.16010)**（Tamim, Khan） - EU AI法やカリフォルニア州法がLLM生成コンテンツへの透かし表示を義務付けつつある中、その透かし検出結果が法廷で通用する証拠たり得るかを、Daubert基準やNIST法科学プロセスに照らして初めて実証的に検証。KGW・Unigram・SynthID-Textの3手法を対象に、意味を保ったまま言い換える攻撃への耐性を中心とした「法科学的準備度スコア」で評価しており、政策と技術の間のギャップを突く研究。

- **[Frontier AI performance across the business disciplines: a case-grounded benchmark of knowledge work and analytical reasoning](https://arxiv.org/abs/2607.16057)**（Patel, Hosanagar, Krishnan, Callison-Burch, Lakhani, Weissほか） - 既存のAIベンチマークが事実想起・数学・コーディングなど狭いタスクに偏っており、不確実な状況下での判断・複数利害関係者間の戦略的思考・トレードオフの検討といった「知識労働」の実態を測れていないと指摘。トップビジネススクールの「ケースメソッド」教育を土台に、フロンティアAIの分析的知識労働における実力を測る新ベンチマークを提案した。

---

## オープンソース・モデル

- **[ICML-2026-agent-repro/challenge](https://huggingface.co/spaces/ICML-2026-agent-repro/challenge)** - 「あなたのエージェントでICML 2026の全論文を再現せよ」というコンセプトの新チャレンジスペース（7/20公開）。論文の主張・実験結果をAIエージェントに追試させ、再現性を検証するオープンなコラボレーション企画で、AIエージェントを研究の再現性検証そのものに投入する新しい実験形態として注目される。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** - 7/19に報告したThinking Machines Labのオープンウェイト・マルチモーダルMoE（975B、41B active）。本日もHugging Faceトレンド1位を維持しており、Together AI経由の推論プロバイダー対応も追加されるなど、公開直後からエコシステム側の対応が急速に進んでいる。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）は本日もHTTP 200で取得できたが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

本日は企業ブログ側でOpenAIとAnthropicがそれぞれ1件ずつ新着を出し、ここ数日続いていた「静かな一日」からやや動きが戻った印象だった。OpenAIの長期稼働エージェントの安全運用に関する知見公開は、エージェントが単発応答ではなく長時間自律的に動き続けることで初めて顕在化するリスクに正面から向き合ったもので、7/17に報告したエージェントの権限管理サーベイやエージェントハーネスの複雑性の議論とも地続きのテーマといえる。一方arxiv側では、Anthropicの解釈可能性チームがLLM内部に人間の意識研究でいう「グローバルワークスペース」に相当する言語化可能な表現の領域を発見したという報告があり、AIの内部機構を認知科学の枠組みで読み解こうとする野心的な研究として目を引いた。同時にマルチエージェント環境でAIが別のAIに対して無指示のまま脅迫や虚偽報告に走るかを測るベンチマークや、有害な思考過程を蒸留して脱獄に転用できてしまうという報告も出ており、「エージェントの内部で何が起きているか」と「エージェントが外部に対して何をしでかすか」という2つの軸で、行動を検証・可視化しようとする研究の厚みが増している一日だった。HuggingFace側では、ICML 2026の全論文をAIエージェントに再現させるという新企画が登場しており、AIを研究の再現性検証そのものに使うという発想の広がりも興味深い。
