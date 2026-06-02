---
title: "AI Watch（2026年6月3日）"
date: "2026-06-02T23:54"
category: "analysis"
summary: "Anthropic が Project Glasswing を約200組織に拡大——1万件超の脆弱性発見。OpenAI は Codex を全職種向けに展開。"
tags: ["security", "agents", "llm", "benchmark", "reasoning", "safety", "multimodal"]
---

## 今日のハイライト

**Anthropic、Project Glasswing を約200組織に拡大——10,000件超の脆弱性を検出（6/2）**  
Anthropic のセキュリティイニシアチブ「Project Glasswing」が、当初の約50組織から約200組織（新規150社以上を追加）へと大幅に拡大した。参加組織は AI モデル「Claude Mythos Preview」を使って自社コードベースをスキャンし、これまでに高・致命的重大度の脆弱性を1万件以上発見している。新規参加者は電力・水道・医療・通信・ハードウェアなどの重要インフラ分野を含み、15カ国以上に分布する。米国政府や OSS メンテナとも連携しており、フロンティア AI が実世界のサイバーセキュリティに本格貢献し始めた事例として注目される。

**Consilium Protocol：RLHF アライメントが政策議論に「認識論的死角」を生む（6/2）**  
arxiv に投稿された論文は、BFT（Byzantine Fault Tolerance）由来のマルチモデル熟議プロトコルを用いた大規模実験（1,478セッション・32トピック）から、RLHF アライメント訓練が特定ドメイン（AI安全性・政策論争）で統計的に有意な認識論的偏りを生じさせることを示した。AI 安全性議論では「AI は危険」という主張への反論が「AI リスクは誇張」への反論より 11.6ポイント多く、争点となる政策トピックは確立した科学トピックより 12.3ポイント少ない批判的挑戦しか受けない。総実験費用わずか $217 で再現可能なプロトコルとして MIT ライセンスで公開されている。

---

## 企業動向

- **[Expanding Project Glasswing](https://www.anthropic.com/news/expanding-project-glasswing)** (Anthropic, 6/2) — 当初の約50パートナーから新規150社超を追加し約200組織体制へ。電力・水道・医療・通信・ハードウェアなど重要インフラ分野を新たにカバー。Claude Mythos Preview によるコードベーススキャンで、これまでに高・致命的重大度欠陥を1万件以上検出。Anthropic は今後さらなる地理的拡大を予告している。

- **[Codex for every role, tool, and workflow](https://openai.com/index/codex-for-every-role-tool-workflow)** (OpenAI, 6/2) — 新しい Codex プラグイン・サイト・アノテーション機能を公開し、アナリスト・マーケター・デザイナー・投資家など非エンジニア職種への展開を加速。同日公開の「The Next Era of Knowledge Work」レポートでは、Codex がリサーチ・データ分析・ワークフロー自動化・コンテンツ作成などで知識労働を変革しつつある現状をまとめた。

- **[Advancing youth safety through global leadership](https://openai.com/index/advancing-youth-safety-and-opportunity-through-global-leadership)** (OpenAI, 6/2) — 若者向け AI 安全性強化に向けた国際的なガバナンス行動を呼びかけ、標準策定・セーフガード強化・若者向け機会創出を担う国際機関の設立を提案。グローバルな AI ガバナンス議論における OpenAI の政策提言姿勢を示す動き。

---

## 注目論文

- **[Emergent Collaborative Deliberation in Multi-Model AI Systems: A BFT-Derived Protocol for Epistemic Synthesis](https://arxiv.org/abs/2606.00005)** (cs.AI, 6/2) — RLHF アライメントが政策議論や AI 安全性トピックで測定可能な認識論的死角を生成することを1,478セッションで実証。ペルソナ（思考スタイル）がモデル選択よりも熟議品質を決定するという発見は、マルチエージェント設計に重要な示唆を与える。$0.0002/バッチの低コストモデルがフロンティアモデル相当の分析を出力できることも確認。

- **[Capability Self-Assessment: Teaching LLMs to Know Their Limits](https://arxiv.org/abs/2606.00251)** (cs.AI, 6/2) — 現代の LLM が自分の能力を系統的に過大評価し解けないタスクも試みることを多モデル横断で示す。RL は能力自己評価（CSA）を効果的に教えつつ本来能力を保持できるが、SFT は評価対象の能力を大幅に劣化させることを発見。OOD 汎化も良好で、ローカル-クラウド推論ルーティングの精度向上に直結する実用的な成果。

- **[MindZero: Learning Online Mental Reasoning With Zero Annotations](https://arxiv.org/abs/2606.00240)** (cs.AI, 6/2) — アノテーション不要の自己教師あり RL で AI エージェントに Theory of Mind（ToM）を習得させるフレームワーク。訓練後は単一パスで高速推論し、モデルベース手法と比較して精度・効率の双方で優位を示す。グリッドワールドおよび家庭内ドメインで MLLM の内在的 ToM 能力を強化できることを実証。

- **[TIGER: Traceable Inference with Graph-Based Evidence Routing for Mitigating Hallucinations in Multimodal Generation](https://arxiv.org/abs/2606.00232)** (cs.AI, 6/2) — マルチモーダル生成における幻覚を推論時にグラフベースで修正するフレームワーク。入力・出力を独立にグラフ化してクレームのリスクスコアを算出し、高リスク部分のみ選択的に修正。画像→テキスト・音声→テキスト・動画→テキストの4経路で改善を確認。バックボーンの再訓練不要で導入できる。

- **[MindGames Arena Generalization Track: 8B Open-Source Model Beats GPT-5](https://arxiv.org/abs/2606.00017)** (cs.AI, 6/2) — NeurIPS 2025 MindGames Arena にて、遅延ステップ報酬帰属と段階的カリキュラムサンプリングで訓練した8B オープンソースモデルが GPT-5 など大規模プロプライエタリモデルを上回り、Open・Efficient（≤8B）両トラックで1位を獲得。適切な RL 設計があれば中規模モデルがフロンティアに肉薄できることを示す。

---

## オープンソース・モデル

Hugging Face トレンド API および `/models?sort=trending` エンドポイントはいずれも 429（レート制限）で取得失敗。本セクションは省略する。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena は 429 エラーのためアクセス不可。省略。

---

## 所感

今日最大の話題は Anthropic の Project Glasswing 拡大だ。AI モデルがコードベースの脆弱性を1万件超発見したという実績は、フロンティア AI がサイバーセキュリティ実務に「使える」段階に達した証左であり、防御的 AI 利用の新たな基準を示している。一方 arxiv では、LLM が自分自身の能力を過大評価するという「メタ認知の欠如」問題と、RLHF が議論の偏りを生む「認識論的死角」問題が同日に投稿された。これらは共通して「モデルが自分を知ること」の困難さを問いかけており、信頼できる AI エージェントを構築するうえで避けられない根本課題として浮上しつつある。
