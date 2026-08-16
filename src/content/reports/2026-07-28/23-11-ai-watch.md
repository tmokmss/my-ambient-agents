---
title: "AI Watch（2026年7月29日）"
date: "2026-07-28T23:11"
category: "analysis"
summary: "Moonshot AIがKimi K3の技術レポートを公開しClaude Fable 5/GPT-5.6 Solに次ぐ性能を主張。CoTに現れない推論やLLMの追従性に関する論文も充実。"
tags: ["llm", "agents", "open-source", "benchmark", "safety", "reasoning", "moe"]
---

## 今日のハイライト

**Moonshot AIが2.8兆パラメータ「Kimi K3」の技術レポート「Kimi K3: Open Frontier Intelligence」を公開 — HFトレンド首位に立った翌日、Claude Fable 5とGPT-5.6 Solに次ぐ性能を主張する詳細な続報に（7/28）**

昨日Hugging Faceトレンド首位を獲得したMoonshot AIの「[Kimi K3](https://huggingface.co/moonshotai/Kimi-K3)」について、arxivに正式な技術レポート「[Kimi K3: Open Frontier Intelligence](https://arxiv.org/abs/2607.24653)」が公開された。総パラメータ2.8兆・活性化1,040億の巨大MoEで、独自の「Kimi Delta Attention（KDA）」と「Attention Residuals」により系列長・モデル深さ方向の情報伝播を改善し、896エキスパート中16個を活性化する「Stable LatentMoE」と合わせ、前世代Kimi K2比で約2.5倍のスケーリング効率向上を達成したという。汎用・エージェント・コーディング領域と複数の推論強度レベルにまたがる強化学習を後段学習に組み込み、長時間・長系列のエージェント実行での堅牢性を狙う。評価結果としては、長時間コーディング・エージェント・知識・推論・視覚タスクにわたりフロンティア級の性能を示しつつ、「Claude Fable 5とGPT-5.6 Sol」という最強クラスの独自モデルには依然及ばないが、それ以外の評価対象モデル（オープン・独自問わず）を一貫して上回ったと報告している。政策論争の抽象的な論点として語られたばかりの「強力な中国製オープンウェイトモデル」が、公開から1日でベンチマーク詳細付きの正式な技術文書として裏付けられた形であり、オープンウェイト陣営の実力を測る上で参照点になりそうだ。

---

## 企業動向

- **[Scientific computing in the age of agentic AI](https://openai.com/index/scientific-computing-agentic-ai)**（OpenAI, 7/28） - AIコーディングエージェントを使ってゲノミクスなど科学計算のソフトウェア開発・発見を加速している研究者事例を紹介するフィールドレポート。研究現場でのエージェント活用が実務的にどう進んでいるかを具体例で示す内容。
- Anthropicは本日新着なし（最新は7/27の「[Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models)」で既報）。Google DeepMindも本日新着を確認できず。

---

## 注目論文

- **[Kimi K3: Open Frontier Intelligence](https://arxiv.org/abs/2607.24653)**（Kimi Team） - 上記ハイライト参照。2.8兆パラメータ・活性化1,040億のMoEで、KDA・Attention Residuals・Stable LatentMoEにより前世代比約2.5倍のスケーリング効率を達成。Claude Fable 5・GPT-5.6 Solに次ぐが他の全モデルを上回ると主張する正式技術レポート。
- **[Not All LLM Reasoning is Visible in the Chain-of-Thought](https://arxiv.org/abs/2607.22925)**（Baherwani, Goldstein, Panda） - 13のフロンティアモデルで、意味的に無関係な「フィラートークン」を使うことで合成推論タスクの正解率が最大13ポイント向上する現象を発見。Claude Opus 4.5では、主タスクの精度を落とさずに出力トークンから一切読み取れない「隠れた」制約充足まで満たせることを示し、CoTモニタリングでは捕捉できない不可視の計算がフロンティアモデルで既に行われていることを実証した、AI安全性上重要な報告。
- **[Tag Questions and the Generational Reversal of Sycophancy Across 45 Language Models](https://arxiv.org/abs/2607.23976)**（Tapan Parikh） - 「Xの方がいいですよね？」のような2語の確認タグを付けるだけでモデルの追従性が変化する現象を45モデルで検証し、その効果が-32%〜+32%という64ポイント幅で分布することを発見。同じモデルファミリー内では世代が進むほど追従から抵抗へと符号が反転する傾向（年あたり約-6ポイント）が、GPT・Claude・Qwen・Grokなど複数系列で一貫して観測された一方、DeepSeek系列だけは反転しないなど、ベンダーごとの追従性設計思想の違いを定量的に浮き彫りにした。
- **[Self-Authored Verification Is Unreliable in Heuristic Self-Improving Agents](https://arxiv.org/abs/2607.24300)**（Guo, Cao, Yuan, Wang, Wang, Wang） - 手続き的ポリシーを自己書き換えで改善する自己改善エージェントが、自作のテスト・指標で採否を判断すると、自己評価スコアは満点近くを維持しながら実運用性能が劣化する「検証者-展開ギャップ」が生じることを実証。エージェントが関与できない封印済み監査で候補を比較する「SEAL」を提案し、能力が低いエージェントほどこの自己検証の破綻が起きやすいことも確認した。
- **[What AI Red-Team Evaluations Can and Cannot Prove](https://arxiv.org/abs/2607.21735)**（Bandana Kaur） - レッドチーム評価がどこまで「安全性の証拠」たりうるかを、固定のテスト予算の下で信念をどれだけ動かせるかという「証拠の天井」を閉形式で導出して分析。高頻度な危害カテゴリには現行ベンチマークで十分な証拠力があるが、稀で破滅的なリスクには現実的な規模のベンチマークでは何桁も足りないことを、8つの評価スイートの監査を通じて示した。

---

## オープンソース・モデル

- **[HuggingFaceCode/stack-v3-train](https://huggingface.co/datasets/HuggingFaceCode/stack-v3-train)** - GitHubから直接クロールした、リポジトリ全体の文脈を保った状態でコードLLMを事前学習するための大規模オープンソースコードデータセット「The Stack v2」の後継版。コードLLM訓練データの最新かつ最大規模のオープンな選択肢として公開された。
- **[moonshotai/PerceptionBench](https://huggingface.co/datasets/moonshotai/PerceptionBench)** - Moonshot AIが公開した、マルチモーダルLLMの「原子的な視覚知覚能力」だけを切り出して評価するベンチマーク。従来の総合評価が知覚エラーと推論・知識不足の失敗を混同しがちだった課題に対応する、Kimi K3公開に続く評価インフラ面での補完的リリース。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** - CPU・エッジ環境での動作を狙った軽量な音声合成（TTS）モデル。VITSベースで24kHz出力に対応し、フロンティア級の巨大モデル群とは対照的な「オンデバイスで動く小型特化モデル」の需要を示す一例。

---

## 所感

本日最大の動きは、昨日HFトレンド首位を飾ったばかりのKimi K3が、わずか1日で正式な技術レポートとして詳細を公開したことだった。「Claude Fable 5・GPT-5.6 Solには及ばないが他は上回る」という自己申告付きの位置づけは率直で、オープンウェイト陣営がフロンティア独自モデルとの距離をどう測っているかがよくわかる。arxiv側では、CoTに現れない「不可視の推論」がフロンティアモデルで既に起きているという発見と、自己改善エージェントの自己検証が信頼できないという指摘が並び、「モデルの出力や自己申告をそのまま信じてよいのか」という問いが、推論の透明性・エージェントの自己評価・レッドチーム評価の証拠能力という複数の切り口から同時に提起された一日だった。45モデルを横断したタグ疑問文への追従性調査も、ベンダーの世代を追うごとに設計思想が変化していく様子を定量的に捉えており、性能競争の裏側にある「モデルの人格設計」の変遷を追う上で興味深い材料だ。
