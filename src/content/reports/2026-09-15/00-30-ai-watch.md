---
title: "AI Watch（2026年9月15日）"
date: "2026-09-15T00:30"
category: "analysis"
summary: "OpenAIがFyxerのAI秘書事例を公開する一方、LMArena上位10位は2日連続で完全に固定。"
tags: ["llm", "agents", "safety", "benchmark", "open-source"]
---

## 今日のハイライト

**OpenAIが、受信箱管理AI「Fyxer」がどのようにユーザーの信頼を獲得したかを解説する事例記事を公開した（9/14）。** OpenAIのモデル・ファインチューニング・メモリ機能と実際のユーザーフィードバックを組み合わせ、各ユーザーの文体でメール整理・返信案の作成を行っているという内容で、Perplexity・Cognition/Devinに続く「既存モデルをどう実運用に落とし込むか」を訴求する導入事例の3件目にあたる。一方LMArenaのリーダーボードは、上位10位のレーティング・投票数が前回9/14観測時から一つも変わっておらず、9/13に一度停滞したのち9/14に動きが出た勢力図が、今回は再び完全に静止した格好となった。

---

## 企業動向

- **[How Fyxer built an AI executive assistant people trust](https://openai.com/index/fyxer)**（OpenAI, 9/14） - 上記ハイライト参照。OpenAIのモデル・ファインチューニング・メモリ・実ユーザーフィードバックを組み合わせ、各ユーザーの文体で受信箱整理・返信案作成を行うAI秘書「Fyxer」の構築事例。
- Anthropic・Google DeepMindのブログは直近3日以内の新着なし（Anthropicの最新は9/1、DeepMindの最新は9/8のAlphaGenome Atlasで既報）。

---

## 注目論文

- **[Harness or Model? Isolating the Harness Effect in Agentic Coding with a Contamination-Controlled Private Suite](https://arxiv.org/abs/2609.11987)**（Arjmandi, 9/14発表） - ベンダー純正のハーネス（ツール・プロンプト・制御フロー）が自社モデルで有利という業界の前提を、汚染対策済みの256タスクで同一モデル・異ハーネスの対照実験により検証。平均では優位性が確認できず、むしろリポジトリ課題とコンテスト課題で優劣が逆転するなど、「ハーネス選びが解ける課題を変える」という定説の単純化に警鐘を鳴らした。
- **[SoK: Rethinking Jailbreaking in the Era of Agentic AI: Attacks, Defenses, and Practical Consideration](https://arxiv.org/abs/2609.12413)**（Mia, Wu, Uluagac, Amini, 9/14発表） - 会話型アシスタントから計画・記憶・ツール利用・エージェント間通信まで担う「エージェント型AI」へのシフトを踏まえ、旧来のジェイルブレイク攻防の知見がどこまで有効かを体系的に整理。最終応答だけを見た防御では、計画やメモリ、ツール呼び出しの途中段階が乗っ取られたままでも見逃されるという重大なギャップを指摘した。
- **[The Cost of Compression: A Rate-Distortion Limit on Factual Hallucination](https://arxiv.org/abs/2609.12111)**（Wang, Xu, Guo, 9/14発表） - ハルシネーションを「知識の欠如」だけでなく「有限メモリへの不完全な圧縮」という第二の原因から捉え直し、学習事実数・記憶容量（ビット数）・誤り率の関係を情報理論的な下限式として定式化。理論予測を実際の言語モデルでの事実注入実験でも検証し、長文脈の整理や検索併用の設計指針につながる分析枠組みを提示した。
- **[GAUGE: When Not to Trust LLM-as-a-Judge in User-Simulated Evaluation of Task-Oriented Agents](https://arxiv.org/abs/2609.12191)**（Bodhwani, Tran, Wei, 9/14発表） - タスク遂行エージェントの選定に広く使われる「LLMユーザーシミュレータ×LLM審査員」による低コスト評価ゲートの妥当性を検証。人間パネルが「満足」と評価した会話の57.5%が実際にはタスク失敗しており、さらに性能が拮抗するエージェント同士の比較では判定の食い違い率が31%に跳ね上がることを明らかにした。
- **[SynthSentry: Detecting Synthetic Data Contamination in Language Model Training Data](https://arxiv.org/abs/2609.12353)**（Myakala, Namburi, Jayaramu, Thomas, 9/14発表） - 再帰的な自己学習によるモデル崩壊を防ぐには学習前のコーパス選別が重要という立場から、生成元モデルへのアクセスや合成ラベルを必要としない汚染検知手法を提案。語彙多様性の崩壊・n-gram裾野の切り詰め・複数参照モデル間のパープレキシティ分散という3指標を組み合わせ、法律・臨床・ソースコードなど元々反復性の高い人間の文章での誤検知も評価した。

---

## オープンソース・モデル

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** - 動画生成で知られるLightricksによる画像→動画モデルの最新版。いいね3,871件・ダウンロード155万件超と人気が高く、オープンな動画生成モデルの実用面での普及が進んでいることを示す。
- **[openbmb/UltraData-SFT-Agent-2609](https://huggingface.co/datasets/openbmb/UltraData-SFT-Agent-2609)** / **[openbmb/UltraData-RL-2609](https://huggingface.co/datasets/openbmb/UltraData-RL-2609)** - OpenBMBが公開したエージェント訓練向けの指示チューニング・強化学習データセット群。エージェント型モデルの学習データそのものをオープンにする動きが継続している。
- **[nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)** - Nex AGIによる小型エージェント向けモデル。上位版Nex-N2.5-Proと合わせてシリーズ展開が続いており、軽量なエージェント基盤モデルへの関心の高さがうかがえる。

---

## 所感

企業発のニュースは新モデル発表よりも既存モデルの実運用事例の積み上げが続き、OpenAIはPerplexity・Cognition/Devinに続きFyxerという3件目の顧客事例を公開した。LMArenaは2日連続で上位10位が完全に固定され、新モデル投入が一服している様子がうかがえる。arXiv側では、ハーネスとモデルの寄与を切り分ける検証、エージェント型AIのジェイルブレイク対策を体系化するSoK、圧縮由来のハルシネーション限界を示す情報理論的な分析、LLM審査員による評価ゲートの信頼性、合成データ汚染の検知など、「モデルをどう正しく評価し、安全に運用するか」という応用・評価面の研究が引き続き目立つ一日だった。
