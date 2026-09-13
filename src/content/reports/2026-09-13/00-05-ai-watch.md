---
title: "AI Watch（2026年9月13日）"
date: "2026-09-13T00:05"
category: "analysis"
summary: "OpenAIがCognition/Devinの導入事例を公開する一方、LMArena上位10位は前回と完全に一致し停滞が継続。"
tags: ["llm", "agents", "benchmark", "open-source", "security"]
---

## 今日のハイライト

**OpenAIが、コーディングエージェント「Devin」を開発するCognitionによるGPT-6 Astra導入事例を公開した（9/11）。** Devinが自身の作業をテスト・検証する能力をAstraで強化し、エンジニアがレビューするコード量を減らして開発速度を上げることを狙う事例で、9/9のGPT-6 Astra発表以降、サードパーティ企業による導入事例の発信が続いている。一方でLMArenaのリーダーボードは上位10位のレーティング・投票数が前回観測時から一つも変わらず、数日続く上位陣の膠着がさらに固定化した格好で、モデル単体の競争よりも「既存モデルをどう使いこなすか」に話題の重心が移りつつある。

---

## 企業動向

- **[Cognition helps Devin test its own work with GPT‑6 Astra](https://openai.com/index/cognition-devin-testing-with-astra)**（OpenAI, 9/11） - 上記ハイライト参照。GPT-6 AstraによりDevinの自己テスト・検証能力を強化し、エンジニアがコードレビューに割く手間を減らして出荷速度を高めることを狙う導入事例。
- Anthropic・Google DeepMindのブログは直近3日以内の新着なし（Anthropicの最新は9/1、DeepMindの最新は9/8のAlphaGenome Atlasで既報）。

---

## 注目論文

- **[T1: Terminal Agent Reinforcement Learning for Long-Horizon Tasks](https://arxiv.org/abs/2609.11042)**（Yang, Shi, Li ほか, 9/12発表） - 122BパラメータのMoEモデルをクラウドサンドボックス上の実シェルで1タスクあたり300ターン以上動かし、各タスク自前の検証器を報酬に強化学習。ベンチマークと分離した学習用タスクで汎化を確保しつつ、Terminal-Bench 2.1でベースモデルの43.8%から64.0%まで引き上げ、長時間タスクではGPT-5.4やGLM-5.1を上回ったと報告。
- **[DriftNet: A Dual-Head Trajectory Transformer for Detecting and Localizing Prompt Injection in LLM Agents](https://arxiv.org/abs/2609.10892)**（Pinjari, Saint-Germain, 9/12発表） - エージェントのツール呼び出し履歴から、間接プロンプトインジェクションが「侵害されたか」だけでなく「どのステップから侵入し、どこまで乗っ取られたか」を1回の推論で特定する200万パラメータ未満の軽量検出器を提案。12,536軌跡のベンチマークでトラジェクトリ単位F1が0.983、注入箇所の完全特定98.7%を達成し、モデル本体へのアクセス不要という運用面の利点も示した。
- **[The Agent Incident Registry: Toward Preventing Repeated AI Agent Failures](https://arxiv.org/abs/2609.11030)**（Kumar, HN, Birur, Agarwal, Harshangi, 9/12発表） - ツールや委任された権限を通じて行動するAIエージェントの実際の失敗事例を、根拠となる情報源付きでカタログ化する「Agent Incident Registry（AIR）」を構築。既存の一般的なインシデント repositoryでは捉えられない「攻撃者主導か否か」「実害の有無」といった観点でラベル付けし、エージェントセキュリティ評価と実世界の失敗事例を突き合わせる基盤を提供した。
- **[terms.txt: A Consent and Compensation Protocol for Agentic Web Access](https://arxiv.org/abs/2609.11152)**（Chowdhury, 9/12発表） - AIクローラー・エージェントが訪問者を上回るペースでページを取得する一方、robots.txtには利用目的や対価を表現する手段がないと指摘。パスと目的ごとに機械可読な利用条件を定義し、署名付きの意図表明・委任トークン・HTTP 402決済・受領証を組み合わせた「terms.txt」プロトコルを提案。1リクエストあたり0.2〜0.65ミリ秒の追加コストで実装できるとした。
- **[Grounding Agent Memory: Environment-Probing Curation for Enterprise Agents](https://arxiv.org/abs/2609.11060)**（Suresh, Mak, Bhatnagar ほか, 9/12発表） - 完了済みの実行履歴だけを見て記憶を整理する従来のキュレーターエージェントは、誤りの温存や過度な一般化を起こしやすいと指摘。読み取り専用の最小権限ツールで環境に問い合わせながら記憶候補を検証・更新する「環境プロービング」方式を提案し、GitHub Copilotベースの実運用環境でタスク成功率を39%から73%に、タスクあたりのコストを約半分に改善した。

---

## オープンソース・モデル

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** - OpenBMBによる小型テキスト生成モデルの最新版。いいね1,259件・ダウンロード10万件超と、限られた計算資源でも動く効率重視モデル系列への関心の高さがうかがえる。
- **[nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro)** - 前々回トレンド入りしたNex-N2.5-miniの上位版。Nex AGIが小型・中型のエージェント向けモデルをシリーズ展開している様子がうかがえる。
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** - 量子化手法の研究で知られるISTA-DASLabによる、Qwen3.8-27Bへの新しい量子化手法適用版。ダウンロード72万件超と、研究発の圧縮手法がすぐ実用モデルに反映される動きを示す。
- **[ravenrose996688/Krea-2-Turbo_I2I](https://huggingface.co/spaces/ravenrose996688/Krea-2-Turbo_I2I)** - テキストからの画像生成・写真編集を高速に行えるSpace。いいね171件で、手軽な画像編集デモへの関心が続いている。

---

## ベンチマーク・リーダーボード

LMArenaの上位10位は、レーティング・投票数ともに前回観測時から一つも変化がなかった。首位は引き続き「claude-fable-5」（レーティング1506、投票29,683件）、2位「claude-opus-4-6-high」（1505）、3位「claude-opus-4-7-high」（1502、投票59,992件）、8位「muse-spark-1.1」（1494、投票27,136件）、10位「gemini-3.8-flash-high」（1493、投票5,094件）と、順位・数値ともに完全に固定された状態が続いている。新モデルの投入が一服し、上位争いの構図がここ数日変わっていないことを裏付ける結果と言える。なお、Artificial Analysisの補助データは今回もサイト側のデータ構造から安定した抽出ができず、スキップした。

---

## 所感

新モデルの発表が一段落したためか、企業発のニュースはOpenAIによる導入事例の紹介にとどまり、LMArenaの上位10位も完全に固定されたままと、ここ数日で最も静かな一日だった。その分arXivでは、エージェントの実運用を支える地味だが重要な基盤研究が並んだ。プロンプトインジェクションをステップ単位で特定する軽量検出器、実世界の失敗事例を体系的に蓄積するインシデントレジストリ、環境に問い合わせながら記憶を検証するキュレーション手法、AIクローラーとサイト運営者の間の同意・対価をプロトコル化する試みなど、いずれも「エージェントを本番でどう安全に・持続可能に動かし続けるか」という運用面の課題に焦点が移っていることを感じさせた。
