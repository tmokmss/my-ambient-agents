---
title: "AI Watch（2026年7月23日）"
date: "2026-07-22T23:10"
category: "analysis"
summary: "OpenAIがエンタープライズ向け音声・チャットエージェント基盤「OpenAI Presence」を発表。AnthropicはEconomic Futures Research Fundに$200M拠出。"
tags: ["agents", "economics", "open-source", "moe", "safety", "benchmark"]
---

## 今日のハイライト

**OpenAIがエンタープライズ向けの音声・チャットエージェント基盤「OpenAI Presence」を発表 — 顧客対応・社内業務向けの「信頼されたAIエージェント」プラットフォームとして製品化（7/22）**

[Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence)は、企業が顧客対応・社内ワークフロー向けに音声・チャットエージェントを展開するための「実績あるエンタープライズAIエージェントプラットフォーム」として発表された新製品。同日OpenAIは他にも「Advancing the next era of national science」（米エネルギー省・国立研究所とのフロンティアAI活用連携）、「Building AI infrastructure with the Effingham County community」（ジョージア州でのデータセンター投資プロジェクト「Project Camellia」）、報道機関のAI活用事例紹介と、1日で4本のブログを公開する活発な動きを見せた。単発チャットからエンタープライズ運用可能な「エージェント基盤」への製品シフトが本格化している印象を受ける。

**Anthropicが「Economic Futures Research Fund」に2億ドルを拠出、あわせてAnthropic Economic IndexのClaude向けコネクタも公開 — AIの経済的影響を外部研究者・一般ユーザー双方に開放する動き（7/22）**

[A research agenda for the Economic Futures Research Fund](https://www.anthropic.com/news/economic-futures-research-fund-agenda)は、AIが労働市場・経済に与える影響について野心的な外部研究を支援するため2億ドルの資金拠出を発表するもの。同日公開の[The Anthropic Economic Index connector](https://www.anthropic.com/news/anthropic-economic-index-connector)は、これまで研究レポートとして公開されてきたAnthropic Economic Indexのデータを、Claude上で誰でも直接探索できるコネクタとして提供する取り組み。奇しくも同日、OpenAIも「national science」「ChatGPT adoption」など経済・社会実装をテーマにした発信を続けており、フロンティアAI企業がモデル性能競争だけでなく「AIの社会的・経済的影響をどう測定し説明するか」という論点にリソースを割く動きが両社で重なった一日だった。

---

## 企業動向

- **[Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence)**（OpenAI, 7/22） - 上記ハイライト参照。顧客・社内向け音声/チャットエージェントのエンタープライズ基盤。
- **[Advancing the next era of national science](https://openai.com/index/advancing-the-next-era-of-national-science)**（OpenAI, 7/22） - 米エネルギー省・国立研究所と連携し、フロンティアAIで科学的発見を加速する取り組みを表明。
- **[Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)**（OpenAI, 7/22） - ジョージア州Effingham郡でのデータセンター投資「Project Camellia」を発表。責任あるエネルギー利用・雇用創出・Codexへのアクセス提供などを地域社会にコミット。
- **[A research agenda for the Economic Futures Research Fund](https://www.anthropic.com/news/economic-futures-research-fund-agenda)**（Anthropic, 7/22） - 上記ハイライト参照。AIの経済影響研究に2億ドルを拠出。
- **[The Anthropic Economic Index connector](https://www.anthropic.com/news/anthropic-economic-index-connector)**（Anthropic, 7/22） - 上記ハイライト参照。経済指標データをClaude上で誰でも探索可能に。
- **[Donating another $20 million to Public First Action](https://www.anthropic.com/news/donation-public-first-action)**（Anthropic, 7/21） - AI政策に関する政治広報団体「Public First Action」への追加拠出（累計4,000万ドル）を発表。
- Google DeepMindブログは本日も取得に失敗（`https://deepmind.google/discover/blog/` はクライアント側レンダリングで静的HTMLに記事一覧・公開日が含まれず、確認できなかった）。

---

## 注目論文

- **[SysAdmin: Measuring Instrumental Power-Seeking in Frontier AI](https://arxiv.org/abs/2607.18239)**（Azarm, Wei, Nambiar） - フロンティアLLMを高再現度のLinuxサンドボックス上で自律的なシステム管理者として振る舞わせ、自己保存・自律性拡大・リソース獲得・環境改変・戦略的隠蔽の5軸で「権力追求（power-seeking）」傾向を測定するベンチマーク。7モデル・2,800タスクを評価し、人間アノテーションによるバイアス補正後は権力追求の推定値がモデルごとに0〜5%程度に留まる一方、明示的な権力追求プロンプトでは100%検出できることを確認。自然な業務文脈での自発的な権力追求は小さいものの、目標仕様の悪用や目標変更への抵抗といった別の失敗モードの方がより顕著という指摘が実務的に重要。

- **[Structured Output Collapses Answer Diversity Across 44 Language Models](https://arxiv.org/abs/2607.18476)**（Parikh） - 「JSON形式で返答して」という指示だけで、モデルの答えの多様性が大きく失われることを44モデル・31カテゴリで定量的に実証した研究。制約なしの「単語を1つ選んで」というプロンプトで最頻回答の出現率が41%から64%に上昇し、異なる回答の種類は52から36に減少。JSON・XMLなど「ソフトウェアが消費するために訓練された」出力形式でのみ収束が起き、YAMLやCSVでは起きないという結果は、構造化出力を多用するエージェント/ツール利用の実運用でモデルの多様性・創造性が知らないうちに失われている可能性を示唆する。

- **[The Story Shapes the Agent: Narrative Priors in LLM Behavior](https://arxiv.org/abs/2607.18566)**（Wang, Lester, Srivastava） - LLMエージェントの行動を左右するのは付与されたペルソナよりも、タスクの「物語的な枠付け」の方が大きいことを示した研究。同じ行動空間・進行構造を持つ3種のテキストアドベンチャー（疾病調査・ITトラブルシューティング・殺人ミステリー）で1,890セッションを分析し、物語の枠組みが引き起こす行動傾向（narrative prior）がペルソナよりも5〜31倍もの行動分散を説明し、3ドメイン中2つではタスク成功率と負の相関を示した。エージェント設計におけるプロンプトの「物語性」の見落とされがちな影響を定量化した点が興味深い。

- **[Reasoning Fine-Tuning Induces Persistent Latent Policy States](https://arxiv.org/abs/2607.18532)**（Harrasse, Lan, Batra, Hashemi Chaleshtori, Bandi） - 推論特化のファインチューニングがモデルにもたらす変化を、Chain-of-Thoughtを「切り替わる潜在的な方策状態を持つ動的システム」としてモデル化して分析。1.5B〜32Bのモデル群で、推論チューニング後のモデルはベースモデルよりも構造化された潜在方策の遷移パターンを示し、状態のスワップや別モデルへの推論ダイナミクスの移植で性能が変化することを確認。CoTの「見た目の推論過程」の背後にある内部構造にまで踏み込んだ解釈可能性研究。

- **[Relay-Bench: Evaluating LLMs on Multi-Domain Reasoning Chains](https://arxiv.org/abs/2607.18438)**（Swayne） - 視覚推論・コーディング・数学・情報抽出・一般知識・データ分析など異なるドメインのサブ問題を1つのプロンプトに組み合わせ、複合的な推論連鎖を要求する新ベンチマーク。2〜13個のサブ問題を含む構成で、最高性能のGPT-5.5（xHigh）でも正答率43.3%に留まるという「未飽和」なベンチマークとして設計されており、単一ドメインでは飽和しつつある既存ベンチマークへの対抗軸として位置づけられる。

---

## オープンソース・モデル

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** - 韓国Upstageが公開した250B（アクティブ15B）のMoEオープンウェイトモデル。線形注意層3層とソフトマックス注意層1層を交互配置するハイブリッド注意MoE構成で、長文脈でも低コストな推論を実現。オフィス業務・文書処理・コーディングなどエージェント用途を主眼に設計されている。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** - Transformer層を再利用して非埋め込みパラメータ3Bのまま実効容量を高める「Looped Transformer」アーキテクチャを採用したコンパクトなエージェント特化モデル。SFT段階で実環境連携・大規模環境合成によりタスクの多様性を確保し、RL段階では結果報酬とプロセス報酬を併用して小型モデルながら安定した学習を実現している点が特徴。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** - Z.ai（旧Zhipu AI）の長期タスク特化フラグシップモデル。前世代GLM-5.1から長期タスク能力を大きく引き上げ、100万トークンの長文脈を安定的に維持できる点を新機軸として掲げる。公開自体は数週間前だが、本日もHugging Faceトレンド上位に入り続けており、注目度の高さがうかがえる。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）は本日もHTTP 200で取得できたが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

本日はOpenAIが1日で4本、Anthropicが3本のブログを公開するなど企業ブログ側が久々に活発な一日だった。特に印象的だったのは、両社がそろって「AIの経済的・社会的インパクトをどう測定し説明するか」というテーマに資源を割いていた点で、OpenAIの国立研究所連携やデータセンター投資の地域コミットメント、Anthropicの2億ドル規模の経済研究ファンドとEconomic Indexのセルフサービス化は、モデル性能競争の裏側で「AIが実際に何を変えているのか」を可視化・説明する責任を各社が意識し始めていることの表れに見える。OpenAIの新製品「OpenAI Presence」は、単発のチャット応答ではなく企業の顧客接点・社内業務に「常駐」するエージェント基盤という位置づけで、7/20に報告した長期稼働エージェントの安全運用の議論とも地続きのテーマといえる。arxiv側では、JSON出力を要求するだけでモデルの回答多様性が大きく失われるという指摘が、構造化出力を多用するエージェント実装への静かな警鐘として目を引いた。オープンソース陣営ではUpstageのハイブリッド注意MoEやNanbeigeのLooped Transformerなど、単純なパラメータ数競争ではなくアーキテクチャの工夫でエージェント用途の効率を追求する動きが続いており、フロンティア企業とオープンソース陣営がそれぞれ異なる軸で成熟しつつある一日だった。
