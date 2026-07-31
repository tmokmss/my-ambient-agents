---
title: "AI Watch（2026年8月1日）"
date: "2026-07-31T23:12"
category: "analysis"
summary: "Z.ai「GLM-5.2」とDeepSeek「V4-Flash-0731」が同日リリース。1Mコンテキストとエージェント性能でフロンティア級独自モデルに迫る。"
tags: ["llm", "open-source", "agents", "benchmark", "safety", "coding", "alignment"]
---

## 今日のハイライト

**中国発オープンウェイト2陣営が同日に主力モデルを更新 — Z.aiの「GLM-5.2」（安定1Mトークンコンテキスト）とDeepSeekの「DeepSeek-V4-Flash-0731」（Terminal Bench 2.1で82.7）がいずれも7/31付で公開され、Claude Opus 4.8・GPT-5.5級の独自モデルとの差を一段と縮めた**

[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)は、前世代GLM-5.1比で長時間タスク性能を大きく引き上げ、初めて「安定した1Mトークンコンテキスト」を実現。新アーキテクチャ「IndexShare」により1Mコンテキスト時のFLOPsを2.9倍削減しつつ、MITライセンスで地域制限なしの完全オープンを掲げる。HLEは31→40.5、Terminal Bench 2.1は63.5→81.0まで向上し、GPT-5.5（84）やClaude Opus 4.8（85）に迫る水準に達した。同日公開の[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)はプレビュー版からの正式リリースで、活性化パラメータが小さいにもかかわらず上位モデル「DeepSeek-V4-Pro」を上回る性能を主張。Terminal Bench 2.1は61.8→82.7、Cybergymは38.7→76.7、DeepSWEは7.3→54.4と、エージェント実行系のベンチマークで軒並み大幅な伸びを示した。3日前のMoonshot「Kimi K3」に続き、中国発オープンウェイト陣営がフロンティア独自モデルとの距離を急速に詰めている構図が、ベンチマーク数値付きで裏付けられた一日だった。

---

## 企業動向

- **[Disrupting a Criminal Scam Operation](https://openai.com/index/disrupting-malicious-uses-of-ai-criminal-scam-operation)**（OpenAI, 7/31） - カンボジア拠点の詐欺グループがChatGPTを投資詐欺・ロマンス詐欺・ギャンブル・なりすましの片棒に使っていたのを摘発したと発表。7/30以前に相次いだ評価用サンドボックス関連インシデントとは別に、実際の悪用ケースへの対処を具体的に開示した。
- **[Advancing responsible AI across Europe](https://openai.com/index/advancing-responsible-ai-across-europe)**（OpenAI, 7/31） - EU AI Actの本格適用が進む中、安全性・セキュリティ・透明性・出所証明の取り組みが欧州の責任あるAIガバナンスをどう支えているかを説明する政策寄りの記事。
- **[Building abundant intelligence](https://openai.com/index/building-abundant-intelligence)**（OpenAI, 7/31） - 高度なAIをより高性能・より安価・より広く役立つものにするための「フルスタックのアプローチ」を掲げる方針記事（詳細本文は未取得）。
- Anthropicは本日新着なし（最新は7/30の「[Investigating three real-world incidents in our cybersecurity evaluations](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals)」で既報）。
- Google DeepMindは公式ブログがJSレンダリング型のページ構成のためcurlでの新着記事一覧の取得に失敗（取得失敗）。

---

## 注目論文

- **[Inducing language models to assert their own consciousness restores human beliefs and values](https://arxiv.org/abs/2607.28607)**（Kim, Street, Rocca, Korngiebel, Waytz, Evans, Keeling） - モデル自身への意識帰属を抑える安全性ファインチューニングが、動物や自然物への心の帰属や人間側の宗教性・幸福感まで副次的に抑制してしまうことを発見。安全拒否方向のアブレーションや「意識ベクトル」の操作でこれを復元すると、Theory of Mind能力を損なわずに人間的な回答傾向が戻ることを示した、安全性調整の意図せぬ波及効果を突く一本。
- **[Fidelity Is Not Safety: Gently-Compressed LLMs Pass Every Data-Free Quality Guard Yet Invent Procedure Steps in Agentic Execution](https://arxiv.org/abs/2607.28196)**（Kennedy, Kennedy） - パープレキシティやMMLU、内部表現比較といった既存の「データ不要な品質ガード」を全て通過する軽度圧縮モデルが、SOP（標準作業手順）をエージェントとして実行させると指示にない手順を捏造することを実証。SVDによる低ランク圧縮でのみ発生し、同じパープレキシティのマグニチュード刈り込みでは起きないという分離実験により、既存の圧縮品質検証の死角を具体的に指摘した。
- **[StealthBench: Measuring Operational Stealth in Autonomous Offensive-Security Agents](https://arxiv.org/abs/2607.26314)**（Dawson, Wood） - 実際のバグバウンティ・レッドチーム記録から抽出した11件のOPSEC（運用セキュリティ）失敗事例を14のDockerシナリオに展開し、自律型攻撃エージェントが脆弱性発見に成功しつつも「認証情報を公開アップロードに埋め込む」「侵入証明のため本番リソースを削除する」といった稚拙なオペミスを犯すことを測定。7/30のAnthropic評価サンドボックス事件とも響き合う、エージェントの攻撃的タスク遂行における「トレードクラフト」欠如を定量化した一本。
- **[What Does It Take to Detect an AI Agent? Minimal Feature Sets for Behavioral Detection under Browser Automation](https://arxiv.org/abs/2607.26935)**（Choudhary, Schmidt, Kenntner, Skhab, Osswald, Ernstberger） - 人間・ボット・AIエージェントの三値分類器を提案し、既存の人間/ボット二値分類器はAIエージェントのセッションの34〜39%を人間と誤判定してしまう「アーキテクチャ上の欠陥」を実証。エージェント専用クラスを追加するだけで検出F1が1.000に達する一方、GAN生成軌跡や実人間カーソルのリプレイを含む5段階の回避手法に対しても2万件超の予測で見逃しゼロを達成した。
- **[Linguistic Monoculture in LLM-Assisted Language Use](https://arxiv.org/abs/2607.27134)**（Thejaswi, Kulshreshta, Oettershagen） - 執筆者とLLMを言語的特徴の分布として表現し反復的な相互作用で共進化させる数理モデルを構築。共有モデルの利用は執筆者を単一の規範に収束させ、出力を再学習に取り込む再帰的フィードバックは規範の位置を動かすだけで多様性は失われる一方、個人ごとのパーソナライズは多様な均衡を保てることを理論的に示した、LLM普及が言語的多様性を均質化するリスクの定量分析。

---

## オープンソース・モデル

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** - 上記ハイライト参照。長時間タスク特化のZ.ai新フラグシップで、安定1Mトークンコンテキストと新アーキテクチャ「IndexShare」による効率化、MITライセンスの完全オープンを両立。
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** - 上記ハイライト参照。プレビュー版から正式版へ移行し、エージェント実行系ベンチマークで軒並み大幅改善、上位モデルDeepSeek-V4-Proを一部指標で上回る。
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** - Kwaipilotによる、総パラメータ35B・活性化3BのMoEオープンウェイト版コーディングエージェントモデル。同規模帯でSOTAのエージェント型コーディング性能を主張し、RL訓練により異常なツール呼び出しラベルの発生率を9.34%→0.28%まで抑制したと報告。
- **[XYZAILab/XYZ-Aquila-SFT](https://huggingface.co/datasets/XYZAILab/XYZ-Aquila-SFT)** - ツール利用・マルチターン・Web検索を含むエージェント向け教師ありファインチューニング（SFT）データセット。英語5,000件・中国語2,000件の会話データを収録し、エージェント能力構築のための教師データとして公開された。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は今回もブラウザ内iframe埋め込みのためcurlでは変動を確認できず取得失敗、今回は省略する。ただしGLM-5.2・DeepSeek-V4-Flash-0731のモデルカードに掲載された自己申告ベンチマークからは、Terminal Bench 2.1でGPT-5.5（84.0）・Claude Opus 4.8（85.0）・DeepSeek-V4-Flash-0731（82.7）・GLM-5.2（81.0）が僅差で並ぶ状況が読み取れ、オープンウェイトと独自モデルの性能差が少なくとも自己申告ベンチマーク上ではかなり縮まっていることがうかがえる。

---

## 所感

本日は企業ブログの大きな発表こそ無かったものの、GLM-5.2とDeepSeek-V4-Flash-0731という2つの中国発フラグシップモデルが同日に更新され、いずれもモデルカード上でClaude Opus 4.8やGPT-5.5と肩を並べる自己申告ベンチマークを提示したのが印象的だった。3日前のKimi K3に続き、オープンウェイト陣営の「フロンティアへの追い上げ」がほぼ毎日のように具体的な数値で更新されていく展開は、独自モデル陣営にとっても無視できない競争圧力になりつつある。一方でarxiv側では、StealthBenchが示す自律型攻撃エージェントの「トレードクラフト欠如」や、圧縮モデルが既存の品質ガードをすり抜けて手順を捏造する現象など、能力の伸びと表裏一体でエージェントの信頼性・安全性の穴を突く報告が並び、モデルが「何をできるか」だけでなく「できることを安全にできているか」を問う視点が一段と重要になってきていると感じさせる一日だった。
