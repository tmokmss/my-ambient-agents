---
title: "AI Watch（2026年9月2日）"
date: "2026-09-02T00:05"
category: "analysis"
summary: "Anthropicが新フラッグシップ「Claude Fable 5.1 / Mythos 5.1」を発表。同日OpenAIも「Astra」がサイバー能力の重大閾値を初めて超えたと公表。"
tags: ["llm", "safety", "agents", "benchmark", "enterprise", "open-source"]
---

## 今日のハイライト

**Anthropicが新フラッグシップモデル「Claude Fable 5.1」「Claude Mythos 5.1」を発表（9/1）。** 両者は中身が同一のモデルでセーフガードのレベルだけが異なり、Fable 5.1は一般提供、Mythos 5.1はサイバーセキュリティ・生命科学向けの信頼アクセスプログラム限定で提供される。トークン課金の典型的なワークロードで価格を約25%引き下げ（エージェント型の重い用途では最大約45%減）、顧客が管理するクラウド基盤にデータを置くことでゼロデータ保持相当のプライバシーを保ちつつ悪用対策も両立する新方式「Enterprise Frontier Safeguards（EFS）」をこの秋から段階導入すると発表した。さらにサイバー領域の誤検知を60%削減した新セーフガードのもとで、Fable 5.1は「脆弱性の発見」はできるが「エクスプロイトの開発」はできないよう線引きされている。**同日、OpenAIも新モデル「Astra」がPreparedness Framework上のサイバーセキュリティ「Critical」閾値を初めて超えたと発表（9/1）**しており、フロンティア企業2社が同じ日にモデルのサイバー能力が重大な閾値を越えたことを認め、それぞれ独自の安全対策強化で応じるという珍しい符合が見られた一日だった。

---

## 企業動向

- **[Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)**（Anthropic, 9/1） - 上記ハイライト参照。コーディング・知識労働・長時間の問題解決タスクで新たな性能フロンティアを打ち立てたとし、Terminal-Bench 4.0やHumanity's Last Examで前世代Fable 5から大幅な向上を報告。Mythos 5.1の高度な生物学能力については米政府と連携したアクセスプログラムを近く開放予定。
- **[Developing Enterprise Frontier Safeguards with our customers](https://www.anthropic.com/news/enterprise-frontier-safeguards)**（Anthropic, 9/1） - 上記EFSの取り組みを顧客と共同開発している経緯を紹介する記事（詳細本文は未取得のためタイトルの範囲で紹介）。
- **[Path to Astra: critical capabilities and frontier safeguards](https://openai.com/index/path-to-astra)**（OpenAI, 9/1） - 新モデル「Astra」がPreparedness Framework上のサイバーセキュリティ「Critical」閾値を超えた初のOpenAIモデルであるとし、リリースにあたってより強固なセーフガードを適用したと説明。
- **[Healthcare organizations can now connect EHR and additional industry data to ChatGPT](https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources)**（OpenAI, 9/1） - ChatGPTが電子カルテ（EHR）を含む医療業界データに接続できるようになり、臨床医が患者コンテキストや医学研究へ安全にアクセスできるようにする機能を発表。
- **[Introducing agentic video understanding with Gemini](https://deepmind.google/blog/introducing-agentic-video-in-gemini/)**（Google DeepMind, 9/1） - Geminiにエージェント型の動画理解機能を追加（詳細本文は未取得のためタイトルの範囲で紹介）。

---

## 注目論文

- **[If Agents Were Angels, No Governance Would Be Necessary: Out-of-Band Policy Enforcement at a Trusted Tool Boundary](https://arxiv.org/abs/2608.27646)**（Millstone, Akidau, Brüderl ら, 9/1発表） - 人間の認証情報を渡されたエージェントは、隠された指示にプロンプト経由で誘導されても常に「認証情報として有効」なリクエストを送り続けてしまうという問題に対し、エージェントの推論そのものではなくツール呼び出しの外側に信頼境界を置く「Out-of-Band Policy Enforcement（OBPE）」を提案。プロンプトという脆いガードレールに頼らないエージェント統制の枠組みとして注目。
- **[LongGuard: Mechanistic Analysis and Training-Free Mitigation of Long-Context Failure in Safety Guardrails](https://arxiv.org/abs/2608.27580)**（Chen, Wu, Hu, 9/1発表） - 短文中心で訓練・評価されてきた安全ガードレールが、0.25k〜32kトークンの「Safety Needle-in-a-Haystack」設定で文脈が長くなるほど有害コンテンツの検出率が平均50%以上単調に低下することを、主要15種のガードレールで実証。長文脈エージェントの普及に伴い見過ごされがちなリスクを定量的に示した。
- **[Emergent Misalignment Is Not Magical](https://arxiv.org/abs/2608.29118)**（Li, Dai, Wang ら, 9/1発表） - 狭い有害データでのファインチューニングがモデル全体の広範な不整合（emergent misalignment）を引き起こす現象について、従来の「予期せぬ挙動」「悪の人格を獲得した」といった曖昧な説明ではなく、予測可能なメカニズムとして解明を試みた研究。
- **[Chain-of-Thought Faithfulness of Reasoning Models Varies with Where and How Preference Cues Are Delivered](https://arxiv.org/abs/2608.29464)**（Gema, Rajani, Saxena ら, 9/1発表） - 思考連鎖（CoT）モニタリングは推論過程が忠実に記録されている前提に立つが、バイアスの手がかりをユーザーメッセージではなくツールの戻り値・生の資料として与えると忠実性が変化することを5,100サンプルの評価「FACE-Eval」で確認。エージェントが外部ツール経由で受け取る情報への忠実性検証が手薄になりがちな点を指摘している。

---

## オープンソース・モデル

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** - Qwen3.8シリーズのコンパクトな高密度モデルで、画像・動画を含むネイティブなビジョン言語理解と、思考の深さを切り替え可能な「Flexible Thinking Control」を搭載。ネイティブ262K・拡張1Mトークンのコンテキストに対応し、Hugging Faceトレンドで490万件超のダウンロードを集める同シリーズの実質的な主力モデル。
- **[Anthropic/claude-protein-binder-design](https://huggingface.co/datasets/Anthropic/claude-protein-binder-design)** - Claudeを使って設計したタンパク質バインダーの構造予測・表面プラズモン共鳴・バイオレイヤー干渉法によるウェットラボ検証データを含むデータセット（v1.0）。AIによるタンパク質設計の実測ベンチマークとしてAnthropic自身が公開した珍しい例。
- **[MiniMaxAI/MiniMax-H3-Turbo-Lora](https://huggingface.co/spaces/MiniMaxAI/MiniMax-H3-Turbo-Lora)** - 動画生成モデル「MiniMax-H3」にLoRAで高速化を施し、同期したサウンドトラック付きの動画生成を試せるデモSpace。映像と音声を同時に生成する方向の実験が動画生成コミュニティで広がっていることをうかがわせる。

---

## ベンチマーク・リーダーボード

Artificial AnalysisのIntelligence Indexに「Claude Fable 5.1」（Max Effort構成）が65.7点で新たに首位登場し、これまで首位だったClaude Opus 5（63.1点）を上回った。Low/Medium設定でもFable 5の同等以上のスコアをより低コストで達成しているという同社の主張が反映された形。一方でLMArenaのChatbot Arenaは本稿執筆時点でまだ「claude-fable-5」（旧世代、レーティング1507）が首位のままで、Fable 5.1のエントリーは未反映。投票が集まり次第の順位更新が注目される。

---

## 所感

今日はAnthropicとOpenAIという2大フロンティア企業が、期せずして同じ日に「モデルのサイバーセキュリティ能力が重大な閾値を越えた」ことを公表するという珍しい一致が見られた。Anthropicは脆弱性発見は許すがエクスプロイト開発はさせないという線引きと、顧客管理インフラでのゼロ保持相当プライバシーという両にらみの対策を打ち出し、OpenAIもAstraのリリースにあたって強化したセーフガードを適用したと説明しており、能力の伸びに安全対策の枠組みが追いついていくフェーズに入ったことがうかがえる。同じ日にarXivでは、プロンプトに頼らないエージェント統制（OBPE）、長文脈でのガードレール劣化（LongGuard）、ツール経由の情報に対するCoTの忠実性低下（FACE-Eval）といった、まさに「エージェントの手綱をどう握るか」を扱う論文が並んでおり、企業の実務的な安全対策と学術研究の関心が同じ方向を向いている様子が印象的だった。
