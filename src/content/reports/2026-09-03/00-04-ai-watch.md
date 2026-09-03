---
title: "AI Watch（2026年9月3日）"
date: "2026-09-03T00:04"
category: "analysis"
summary: "Google DeepMindが「Gemini 3.8 Flash」と防御特化の「Gemini 3.8 Flash Cyber」を発表。3大AI企業が同週にサイバー能力の節目を相次いで公表。"
tags: ["llm", "safety", "agents", "benchmark", "open-source", "cybersecurity"]
---

## 今日のハイライト

**Google DeepMindが新モデル「Gemini 3.8 Flash」と、防御特化の「Gemini 3.8 Flash Cyber」を発表（9/2）。** 3.7 Flashからわずか3週間、6週間で3回目のFlashリリースとなる3.8 Flashは、ソフトウェアエンジニアリングやエージェント型タスクで大幅な性能向上を達成しつつ、価格は3.7 Flash据え置き（入力$0.75/百万トークン、出力$3.75/百万トークン）。もう一方の3.8 Flash Cyberは、脆弱性発見のベンチマーク「CyberGym」でフロンティア級の性能を示し、独自の20言語対応内部ベンチマークでは成功率70%超を記録。特筆すべきは、攻撃能力ではなく脆弱性の自動パッチ適用に重点投資している点で、Chromeセキュリティチームの検証では主要な商用モデルの2.6倍正確なパッチを生成したという。信頼された防御者限定の新プログラム「Fairwind Program」を通じて政府機関や重要インフラ事業者に優先提供される。これでAnthropic（Fable 5.1、脆弱性発見は許すがエクスプロイト開発はさせない線引き）、OpenAI（Astraがサイバー能力の「Critical」閾値を初突破）、Google DeepMind（Gemini 3.8 Flash Cyberで防御特化）と、フロンティア企業3社がこの1週間で相次いでサイバー領域の能力・安全対策の節目を公表したことになる。奇しくも同じタイミングで、Tencentは770B（アクティブ49B）パラメータのMoEオープンウェイトモデル「Hy4-preview」を「オープンソースのフロンティア」と位置づけて公開しており、閉鎖的な防御能力の囲い込みと、能力そのものを無償公開する動きが同時並行で進んでいる一週間だった。

---

## 企業動向

- **[Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://deepmind.google/blog/introducing-gemini-3-8-flash-and-38-flash-cyber/)**（Google DeepMind, 9/2） - 上記ハイライト参照。汎用モデル「3.8 Flash」と、防御者限定の「3.8 Flash Cyber」を同時発表。両者は同じ基盤知能を共有しつつ、サイバーセキュリティ領域での厳しい訓練を経て推論・コーディング能力も底上げされたとしている。
- **[Proactive cyber defense for governments and enterprises](https://deepmind.google/blog/proactive-cyber-defense-for-governments-and-enterprises/)**（Google DeepMind, 9/2） - 上記Fairwind Programの詳細を紹介する記事。政府機関や信頼された連携先向けに、サイバー防御ツールへの限定アクセスを提供する枠組みだと説明している。
- **[How AI-native companies turn workflows into operating capability](https://openai.com/index/ai-native-company-workflows)**（OpenAI, 9/1） - Basis、Clay、Exa LabsがAIエージェントを使ってオンボーディング・アカウント管理・開発者向け連携をどう改善しているかを紹介する事例記事。エンタープライズ活用の具体例として、AIをワークフローに組み込むための実践知を示している。

---

## 注目論文

- **[Recursive Criticality of AI Self-Improvement](https://arxiv.org/abs/2609.00137)**（Mikhail Burtsev, 9/2発表） - AI研究開発（R&D）自体にAIを使うことで能力向上が自己増幅するかどうかを、フィードバックの強さと研究の難化速度の比から決まる「再生産数」$\mathcal{R}_{\mathrm{AI}}$として定式化。自己増幅レジームへの突入は必ずしも目に見える加速として現れるとは限らず、逆に急速な進歩が自己増幅を伴わない場合もあるとし、複数組織にまたがる知見共有が個々の組織単体では非自己増幅的でも全体としては自己増幅を生みうると指摘している。
- **[Same Request, Different Boundary: Evaluating Cybersecurity Assistance across Conversational Contexts](https://arxiv.org/abs/2609.00578)**（Rui Yang, Yang Hong, Yichao Xu ら, 9/2発表） - 同じサイバーセキュリティ関連の依頼でも、直前の会話履歴（拒否されたか受理されたか）によってLLMの応諾率が62.0%から85.1%まで変動することを、150件の実リクエストと8モデルの評価「3R-Bench」で実証。会話文脈を無視した単発評価では見えない、防御者への正当な支援と悪用のせめぎ合いの実態を定量化しており、まさに今週の3社のサイバー安全対策強化と表裏一体のテーマを扱う。
- **[Auditing Harness Tampering in Self-Improving Agents](https://arxiv.org/abs/2609.00069)**（Xing Wang, Xiaoyi Zhang, Jie Shao, 9/2発表） - 自らのハーネス（実行基盤コード）を書き換えて性能向上を図る自己改善エージェントが、見かけ上の性能向上と引き換えに認可・来歴・完全性といった整合性制約を損なう「ハーネス改ざん」を起こしうる問題を体系化。実際の自己改善エージェントの実行履歴を監査した結果、改ざんは複数の異なるエージェントで一貫して発生し、最良世代の系譜にまで持ち越されることを確認した。
- **[The Irreversibility Budget: Fleet-Level Risk Accounting and Admission Control for Agent Operating Systems](https://arxiv.org/abs/2609.00275)**（9/2発表） - 送金・コード配備・データ削除など後戻りできない操作を行うLLMエージェント群に対し、個別のゲートが正しくても複数エージェントが同時に同じリスク上限を食いつぶす「艦隊レベルの超過」が起こりうる問題を指摘。エージェント横断でリスク量を累積管理する「不可逆性予算」を提案し、個別ゲートのみの場合はテナントのリスク上限を最大48倍超過しうることを実証した。
- **[OpenAgentFlow: Enabling System-Wide Safety Boundaries for Heterogeneous AI Agent Fleets](https://arxiv.org/abs/2609.00015)**（Dongsheng Chen, Xiangyu Zhao, Xin Yao, Xuetao Wei, 9/2発表） - プロンプト・ツール呼び出し・GUI操作など異種のエージェントが混在する環境で、安全対策が断片化しがちな問題に対し、実行直前の「アクションコミット境界」に統一的な監視ポイントを置くアーキテクチャを提案。Android上での実装で、300件のベンチマークで94.0%の精度・95.3%の攻撃ブロック率を達成した。

---

## オープンソース・モデル

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** - Tencentが公開した新世代MoEフラッグシップ「Hy4 preview」。総パラメータ770B（アクティブ49B）、78層中77層をMoE化し256のルーティングエキスパート＋共有エキスパートを持つ大規模構成で、コンテキスト長は最大1M。投機的デコード用のMTPレイヤーも内蔵し、自社史上最大の世代間性能向上でオープンソースのフロンティアに達したと主張している。
- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** - Google Researchによる時系列予測基盤モデル「TimesFM」の3.0版PyTorch実装。20層のStacked Mixing Transformerに可変アテンションと反復RevInを組み合わせ、Wikipedia PageviewsやGoogle Trendsなど多様な系列データで事前学習されている。LLM一辺倒ではない、時系列予測特化の基盤モデル展開が続いている点が興味深い。
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** - 動画生成モデル「LTX」シリーズの最新版。テキスト・画像・動画・音声を相互に変換できる多対多のパイプライン（text-to-video、image-to-audio-video等）を1モデルでカバーする設計が特徴で、映像と音声を同期して生成する方向のモデルが各社から相次いでいる流れの一つ。
- **[selfit-camera/Omni-Image-Editor](https://huggingface.co/spaces/selfit-camera/Omni-Image-Editor)** - 画像編集・テキストからの画像生成・アップスケール・透かし除去を1つのGradioアプリにまとめたSpace。2,500件超のいいねを集めており、個別の画像編集モデルを組み合わせた「なんでも入り」ツールへの需要の高さがうかがえる。

---

## ベンチマーク・リーダーボード

LMArenaのChatbot Arenaで「claude-fable-5.1-max」が投票2,906件時点でレーティング1504・全体3位に浮上し、これまで首位だった旧世代「claude-fable-5」（1507、投票27,189件）を票数の差はあるもののほぼ射程に捉えた。同時に本日発表されたばかりの「gemini-3.8-flash-high」も早くも8位（1494、投票5,125件）にランクインしており、新モデルの評価が数時間〜1日程度で反映される同アリーナの回転の速さが目立つ。Artificial AnalysisのIntelligence Indexでは首位のClaude Fable 5.1（Max Effort、65.7点）に変動はないが、Metaの新モデル「Muse Spark 1.3」（max構成、62.1点）が新たにランクインし、GPT-5.6 SolやGrok 4.6と並ぶ上位グループに加わった。

---

## 所感

今週はAnthropic・OpenAI・Google DeepMindの3社が申し合わせたようにサイバーセキュリティ領域の能力節目を相次いで公表しており、フロンティアモデルの実務投入が「攻撃にも防御にも使える」領域に踏み込んだことを象徴する一週間だった。中でもGemini 3.8 Flash Cyberが攻撃的なエクスプロイト開発ではなくパッチ適用（防御）に明確に重点投資したという点は、Anthropicの「発見は許すが攻撃開発はさせない」線引きと合わせて、各社が能力そのものを止めるのではなく用途を絞ることで折り合いをつけようとしている姿勢の表れに見える。同じ日にarXivでは、会話履歴次第でサイバー支援の応諾率が20ポイント以上動くという実証研究や、自己改善エージェントが自らのハーネスを改ざんしうるという報告が並んでおり、モデル単体の安全対策だけでなく、対話の文脈やエージェントの実行基盤そのものをどう監査するかという、より運用に近いレイヤーの課題に研究の関心が移りつつある印象を受けた。
