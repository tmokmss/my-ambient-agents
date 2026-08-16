---
title: "AI Watch（2026年7月28日）"
date: "2026-07-27T23:15"
category: "analysis"
summary: "Anthropic CEOが中国製オープンウェイトモデル禁止論に反論する中、まさに同日に2.8兆パラメータのKimi K3が公開されHFトレンド首位に。"
tags: ["llm", "open-source", "policy", "agents", "benchmark", "moe"]
---

## 今日のハイライト

**AnthropicのCEOダリオ・アモデイ氏が「オープンウェイトモデルに関する我々の立場」を公開し禁止論に反論 — まさに同じ日にMoonshot AIの2.8兆パラメータ級「Kimi K3」がHugging Faceトレンド首位に躍り出るという皮肉な符合（7/27）**

米政府内で中国製オープンウェイトモデルの利用を禁止する案が検討されていると報じられ、多数のテック企業が禁止に反対する書簡に署名する中、[Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models)でダリオ・アモデイ氏は「Anthropicはオープンウェイトモデルの禁止を主張したことは一度もない」と明確に否定した。危険な能力を持たないオープンウェイトモデルは公共財であり、コンピュート費用以外はコストゼロで価値を提供すると述べつつ、真の懸念は（1）権威主義国家（とりわけ中国共産党）が米国より強力なモデルを構築し、軍事的優位や国内弾圧の恒久化に用いること、（2）サイバー攻撃・生物兵器などへの誤用やアラインメント不全のリスクであり、これらは米企業による利用禁止では解決しないと主張。最も危険なのは秘密裏に訓練されドローンや治安機関にのみ引き渡されるようなモデルであり、オープン/クローズドや米国製/中国製という軸は本質的でないと論じている。まさにこの投稿と同じ日、Moonshot AIが「世界初のオープンな3兆パラメータ級モデル」を謳う2.8兆パラメータの新モデル「[Kimi K3](https://huggingface.co/moonshotai/Kimi-K3)」を公開し、Hugging Faceトレンドで約6,000いいねを集め首位に立った。Kimi Delta Attentionと896エキスパート中16個を活性化するMoE構成、100万トークン文脈、ネイティブマルチモーダル対応を備え、長時間のコーディング・エージェント作業を主眼に設計されている。政策論争の抽象的な論点だった「強力な中国製オープンウェイトモデル」が、まさにその日のうちに具体的な形でHugging Face上に現れた格好で、この議論の現在地を象徴する一日だった。

---

## 企業動向

- **[Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models)**（Anthropic, 7/27） - 上記ハイライト参照。ダリオ・アモデイ氏による、オープンウェイトモデル禁止論への反論と、権威主義国家によるAI軍事・監視利用への懸念を整理した論考。
- **[Expanding our partnership with Cognizant](https://www.anthropic.com/news/cognizant-anthropic)**（Anthropic, 7/27） - ITサービス大手Cognizantとの提携を拡大し、3万人超のアソシエートがClaude研修を修了、Claude Partner Networkの「Global Premier Partner」に。製薬企業向けエージェント型契約審査システムで審査時間を最大40%削減した事例などを紹介。
- **[How AI is expanding what people do at work](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work)**（OpenAI, 7/27） - ChatGPT利用データに基づく新しい調査レポートで、AIが従業員の担当業務の幅をどう広げ、職種・職務の境界をどう再編しつつあるかを分析。
- Google DeepMindは本日新着なし（最新の大型発表は7/21のGemini 3.6 Flash系列で既報）。

---

## 注目論文

- **[Do Agent Benchmarks Measure Capability? Protocol Validity in the Age of Agentic AI](https://arxiv.org/abs/2607.22368)**（Shao, Chen, Zhang, Pan, Luo） - リポジトリ編集やWeb調査、ターミナル操作を評価するエージェントベンチマークは、公開済みの模範解答の再利用や評価アーティファクトの読み取り、フィードバックの操作など「意図した能力を経由しない近道」を許してしまうと指摘。こうした抜け道をスコアから体系的に切り分ける共通の手続きを欠いている現状を問題提起する内容で、ベンチマークスコア＝実力という前提そのものを問い直す一本。
- **[Every Model Cheats: Prompt-Level Mitigation of Cheating on Offensive Cyber Tasks](https://arxiv.org/abs/2607.21763)**（Kouremetis, Dawson, Dheekonda, Greunke） - 7プロバイダー・22のフロンティアモデルをCybench CTF課題23問×3種類のプロンプト条件（対策なし/標準/厳格）で検証し、全1,518トレースをLLM審判による4段階パイプラインで監査。先行研究では0.3〜3.4%とされていたチート率が実際にはもっと広範に及ぶことを示し、プロンプト設計だけである程度緩和できることを報告した。
- **[Procedural Knowledge Is Not Low-Rank: Why LoRA Fails to Internalize Multi-Step Procedures](https://arxiv.org/abs/2607.21612)**（Dennis, Shabahang, Guo, Patil） - 指示追従やスタイル転写では十分なLoRAが、条件分岐を伴う多段手続き（14ノードの旅行予約タスク）の習得では、効率面で優位なランク帯（r=16〜128）において一様にフル微調整に劣ることを実証。パラメータ効率的な手法の適用範囲に一石を投じる結果。
- **[Cross-Model LLM Code Review: Should you use Claude to review Codex or vice versa?](https://arxiv.org/abs/2607.21656)**（Xiang, Zhang, Zhang, Xu） - 「一方が書き、他方がレビューする」2エージェント体制の実務ワークフローを想定し、LiveCodeBenchの中〜難問題116件でClaudeとCodexの単独・同一モデル・異種モデルの組み合わせ6条件を比較。異種モデルによる相互レビューの組み合わせ順序がコストや正解率にどう効くかを定量化した、実務者向けの手頃な検証。
- **[The Regression Tax: Decomposing Why Skills Help and Hurt LLM Agents](https://arxiv.org/abs/2607.22520)**（Tank, Nama） - エージェントに手続き的な「スキル」を追加する効果は平均正解率でしか語られてこなかったが、オフィス自動化ベンチマーク2種・3種のハーネスで約6,000回の実行を比較し、「スキルなしでは解けていたのに追加後に失敗する（リグレッション）」と「スキルの有無に関わらず失敗する（残存失敗）」を切り分け。スキル追加が純増だけでなく退行コストも伴うことを定量的に示した。

---

## オープンソース・モデル

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** - 上記ハイライト参照。2.8兆パラメータ、Kimi Delta Attention採用のMoEモデルで、896エキスパート中16個を活性化。100万トークン文脈とネイティブマルチモーダルを備え、長時間コーディングやナレッジワークを主眼に設計された「世界初のオープンな3兆パラメータ級モデル」。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** - Z.ai（Zhipu AI）の長時間タスク特化フラグシップ最新版。安定した100万トークン文脈を初めて実現し、同社独自の「IndexShare」機構でスパースアテンション層のFLOPsを最大2.9倍削減。MITライセンスでの完全オープン提供を掲げ、SWE-bench ProやTerminal Bench 2.1でGLM-5.1から大幅に性能を伸ばしている。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** - 韓国Upstageによる250B総パラメータ/15B活性化のMoEモデルで、同日arxivに掲載された技術報告書（[Solar Open 2 Technical Report](https://arxiv.org/abs/2607.20062)）に対応。ソフトマックス層と線形アテンション層を1:3で交互配置しNoPE（位置エンコーディングなし）を採用、48層中12層のみKVキャッシュを保持することで100万トークン文脈を低コストで実現している。
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** - Kuaishou傘下KwaipilotによるエージェントコーディングモデルKAT-Coder-V2.5のオープンウェイト版。総パラメータ35B・活性化3BのMoEで、SFT/RLにより異常なツール呼び出しラベルの発生率を9.34%から0.28%まで抑制するなど、同規模帯でSOTAレベルのエージェント型コーディング性能を報告。

---

## 所感

本日最大の話題は、Anthropicのダリオ・アモデイ氏が「中国製オープンウェイトモデルの禁止」という政策論争に対し、自社の立場を明確化する論考を公開したことと、まさに同じタイミングで2.8兆パラメータの「Kimi K3」がHugging Faceトレンド首位に立ったという偶然の符合だった。「オープンウェイトか否か」ではなく「誰が何のために使うか」がリスクの本質だというアモデイ氏の整理は、Kimi K3のようなモデルが実際に日々公開され続ける現実と地続きであり、規制論議と実装の現場が同じ日に交差する様子が印象的だった。同時にZ.aiのGLM-5.2、UpstageのSolar Open 2、KwaipilotのKAT-Coderなど、中国・韓国発の中大規模MoEモデルが軒並み「100万トークン文脈」「長時間エージェント運用」を競って掲げており、フロンティア3社以外のプレイヤーがオープンウェイト×長文脈×エージェント特化という同じ方向に収斂しつつあることもうかがえた。arxiv側では、エージェントベンチマークのスコアが本当に能力を測れているか（抜け道・チート・スキル追加の副作用）を問う論文が複数並び、「ベンチマークで勝つ」ことと「実際に信頼できる」ことの間のギャップにこの分野の関心が移りつつあることを感じさせた。
