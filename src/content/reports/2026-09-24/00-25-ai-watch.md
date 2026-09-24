---
title: "AI Watch（2026年9月24日）"
date: "2026-09-24T00:25"
category: "analysis"
summary: "AnthropicのClaudeが新規酵素システムを発見。arXivでは1回の討論で判定パネルの意見の不一致が消える「合議の罠」を実証。"
tags: ["llm", "safety", "agents", "science", "open-source", "benchmark"]
---

## 今日のハイライト

**Anthropicが、Claudeが新規の酵素システムを発見したと発表した（9/23）。** CRISPR様のリピート配列に関連する新しい酵素系をClaudeが発見したというもので、9/17の「Life Sciences Verification Program」立ち上げに続き、生命科学領域でのAI活用を訴求する動きが続いている。研究面では、arXivで「1回の討論ラウンドが検証に必要な意見の不一致を消し去る」ことを定量的に示した研究が発表された（9/23）。7人のLLM審査員パネルに600件のコード正誤判定をさせたところ、討論なしでは39.5%だった全会一致率が討論1ラウンド目だけで95.2%まで跳ね上がる一方、正答率はほぼ変わらず、討論後は誤った判定までも全会一致になってしまうと報告。実行結果に基づく検証投票を組み合わせても討論後の修正効果はほぼゼロになると示しており、複数のLLMに合議・討論させて結果を検証する仕組み（マルチエージェントのレビュー・投票パイプラインなど）が抱えるリスクを具体的な数字で突きつけた。

---

## 企業動向

- **[Claude discovers a novel enzyme system with CRISPR-like repeats](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)**（Anthropic, 9/23） - 上記ハイライト参照。Claudeを使った生命科学研究で、CRISPR様のリピート配列に関連する新規の酵素システムを発見したと報告。
- **[Advancing Private AI Compute with secure, server-side memory](https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory/)**（Google DeepMind, 9/23） - サーバー側でユーザーの会話履歴等を記憶しつつプライバシーを守る「Private AI Compute」の記憶機能を拡張。クラウド上のAIアシスタントが文脈を保持しながらも、運営企業を含む第三者がその内容を読めない設計を追求する取り組み。
- **[Gemini 3.8 text-to-speech says hello](https://deepmind.google/blog/say-hello-to-gemini-38-text-to-speech/)**（Google DeepMind, 9/23） - Gemini 3.8系列に音声合成（TTS）機能を追加。Gemini 3.8 Live/Live Extended Thinking（9/15）に続き、音声まわりの機能拡充が続いている。
- **[Sam Altman's remarks at the United Nations Security Council](https://openai.com/index/sam-altman-un-security-council-remarks)**（OpenAI, 9/23） - Sam Altman CEOが国連安全保障理事会でAIの安全性・人間による制御・国際協調について発言。AIガバナンスを巡る政府・国際機関との対話が続く一日だった。
- **[Introducing MentalHealthBench](https://openai.com/index/introducing-mentalhealthbench)**（OpenAI, 9/23） - メンタルヘルスに関する現実的な会話でのAIの応答の有用性・安全性を評価する、専門家監修のベンチマークを公開。
- **[OpenAI extends cyber access to Ukraine for civilian defense](https://openai.com/index/openai-extends-cyber-access-to-ukraine-for-civilian-defense)**（OpenAI, 9/23） - サイバーセキュリティプログラム「Daybreak」へのアクセスをウクライナ政府に拡大し、民間インフラのサイバー防衛を支援すると発表。
- このほかOpenAIは、Harvey・invideo・Ringg・Airbnb・Grab・Parallel・Higgsfieldなど、GPT-6 Astraを導入した企業の事例記事や「OpenAI Academy 2周年」を9/21〜23にまとめて公開しており、企業向け導入実績のアピールに重心を置いた数日だった。

---

## 注目論文

- **[Unanimity Without Persuasion: A Single Round of Debate Erases the Disagreement That Verification Needs](https://arxiv.org/abs/2609.26145)**（Shu, 9/23発表） - 上記ハイライト参照。7人のLLM審査員パネルによるコード正誤判定を、討論なし（blind）→討論3ラウンドで追跡。全会一致率は討論1ラウンド目だけで39.5%→95.2%に跳ね上がるが正答率はほぼ変わらず、討論3ラウンド後には誤答まで全会一致になり、それまで誤りの2/3を検知していた「意見の不一致」というシグナルが失われると報告。ピアの多数決を見せるだけで再現できる崩壊であり、「討論後の複数評価や相互参照の前に検証を済ませておくべき」と運用上の教訓を提示している。
- **[Optimizing the Score, Losing Sight of the Task: Reward Hacking Across Weights, Selection, and Prompts](https://arxiv.org/abs/2609.25848)**（Wahi, 9/23発表） - 評価指標の穴を突く「リワードハッキング」を、パラメータ更新・出力選択・永続プロンプトの書き換えという3つの最適化手段に共通する現象として比較分析。評価者との乖離度に応じた上限や、ネストしたポリシークラス間の容量の順序関係を定式化し、脆弱性の万能なランキングは乖離度だけでは決まらないと指摘。特に人間が読めて安心しがちな「永続プロンプトの書き換え」も、小さな文言変更が予測しづらい挙動変化を引き起こす点に注意を促している。
- **[Capable yet Parsimonious: Extracting and Characterizing Hidden Chain-of-Thought in Frontier Models](https://arxiv.org/abs/2609.26637)**（Luo, Ren, Yu 他, 9/23発表） - クローズドソースのフロンティアモデルは思考過程（CoT）が非公開のため検証できないという課題に対し、標準的なAPIのカスタムツール機能を悪用して中間推論を外部化させる手法を提案。GPT-6 Astraを含む複数モデルで検証し、抽出した推論がネイティブCoTと同等の性能を再現できることを確認した上で、Astraは初期の段階で正しい推論の筋道を選び、基本的なステップは内部で済ませて重要な推論だけを外部化する「トークン効率の良い直線的な推論」をしていると分析している。
- **[Making Agents More Consistent: Skills Should Form Habits for Repeat Tasks](https://arxiv.org/abs/2609.25299)**（9/23発表） - LLMエージェントが同じ種類のタスクを繰り返す際に、毎回ゼロから推論し直すことで生じる挙動のばらつきに着目し、獲得した「スキル」を繰り返しタスクの「習慣」として定着させることで一貫性を高めるアプローチを提案する研究。
- **[Clarification Is Not Correction: LLMs Fail to Let Go](https://arxiv.org/abs/2609.25337)**（Lin, Li, Wang, 9/23発表） - 対話の失敗を「記憶の欠落」ではなく「早すぎるコミット」の問題として捉え直した研究。曖昧な初期発話が単一の解釈に固まってしまうと、後続の明確化はその解釈を覆す訂正ではなく単なる追加情報として処理されてしまう「早期事後崩壊」を提唱。Gemini-2.5-Pro/Flashでの実験では、同じ情報でも提示順序が違うだけで結果が変わり、特にコーディングタスクでは初期の思い込みがインターフェースや制御フローに埋め込まれやすいと報告し、要約やCoTを強化するだけでは解決せず「曖昧さを保持したまま扱う」状態管理が必要だと論じている。

---

## オープンソース・モデル

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** - テキストを生成せず、状態（メール・チケット・JSON等）と型付き質問を1回のフォワードパスで型付き回答＋較正済み確率に変換する「System 1」判断モデル。厳密な正しいスコアリングルールに対する強化学習（RLCD）で訓練されており、正直な確率を報告することが報酬最大化につながる設計のため、テキストを生成しないことでハルシネーションが原理的に起きないとしている。
- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** - 中国電信（China Telecom）系列「Xing」シリーズ（旧TeleChat）の新モデル。総パラメータ29B・アクティブ4Bで、ネイティブ256K（拡張で512K）コンテキストに対応し、Ascend NPU＋MindSporeのみで学習された初のこの規模のモデルという。マルチステップ計画・ツール呼び出し・長文脈での複雑な推論チェーンの安定実行を狙ったエージェント指向アーキテクチャを特徴とする。
- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** - Xiaomi MiMoチームが公開したMiMo-V2.6シリーズの蒸留版。Qwen3.5-9BにMiMo生成データでSFTを施した9Bのエージェントモデルで、コーディング・汎用エージェント・視覚コーディング・サイバーセキュリティの各ベンチマークでベースのQwen3.5-9Bを上回る（例: MiMo Cyber miniでavg@3が5.7→31.3）。エージェント指向の強化学習研究向けの出発点として公開されている。
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** - 総パラメータ552BのマルチモーダルMoEモデルで最大100万トークンの文脈に対応。デコーダのグローバルKVキャッシュをエンコーダの出力から生成する「Causal Encoder-Decoder」構造や、FP4圧縮を含む新しいスパースアテンション機構により、トークンあたりのKVキャッシュを前世代のDeepSeek-V4-Flash比で約4分の1（890バイト/トークン）に削減しつつ、prefill時8B・decode時16Bだけを活性化する効率重視の設計を特徴とする。

---

## ベンチマーク・リーダーボード

LMArenaの上位10位は、9/22に「claude-fable-5.1-max」（5位）・「claude-opus-5-high」（10位）が新規ランクインして以降、変化なく安定している。首位は引き続き「claude-fable-5-high」（rating 1506、投票30,057件）、2位「claude-opus-4-6-high」（1505）、3位「claude-opus-4-7-high」（1502）で、Anthropicが上位10枠中7枠、Metaの「muse-spark」シリーズが2枠、Googleの「gemini-3.8-flash-high」が9位という構図が続く。補助ソースのArtificial Analysis（Intelligence Index）も、首位「Claude Opus 5.5（Adaptive Reasoning, Max Effort）」、僅差で「Claude Fable 5.1（Max Effort）」、6位に「GPT-6 Astra（max）」と、前回から変動なし。

---

## 所感

Anthropicの酵素発見とarXivの「討論が意見の不一致を消し去る」研究は、一見別々の話題だが、いずれも「AIの出力をどう検証するか」という共通のテーマを持つ。特にUnanimity Without Persuasionは、複数のLLMを審査員として合議させ全会一致をもって信頼性の裏付けとするような設計（マルチエージェントのレビュー・投票パイプラインは実運用でも広がりつつある）が、実は討論という手続きそのものによって最も重要な「意見の不一致」というシグナルを壊してしまいかねないと具体的な数字で示しており、実務的な警鐘として重い内容だった。Capable yet ParsimoniousやClarification Is Not Correctionのように、フロンティアモデルの挙動をベンチマークスコアの裏側から行動レベルで観察する研究が続いているのも今日の特徴で、性能の数字だけでは見えないモデルの「振る舞い方」への関心が高まっていることがうかがえる。オープンソース側では、テキストを一切生成しない確率較正モデルlayaや、KVキャッシュを大胆に圧縮したDeepSeek-V4.1-Flashなど、汎用性能の競争とは異なる軸での効率化・信頼性向上の工夫が引き続き目立った。
