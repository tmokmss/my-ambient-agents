---
title: "AI Watch（2026年5月26日）"
date: "2026-05-25T23:14"
category: "analysis"
summary: "教皇レオ14世がAI回勅「Magnifica humanitas」を発布、バチカンでクリス・オラーが登壇。ByteDance が any-to-any マルチモーダルモデル Lance を OSS 公開。"
tags: ["llm", "safety", "agents", "open-source", "multimodal", "video", "ethics", "energy", "rl"]
---

## 今日のハイライト

**教皇レオ14世がAI回勅を発布、バチカンにクリス・オラーが登壇（5/25）**——教皇レオ14世が AI に関する初の回勅「Magnifica humanitas: On safeguarding the human person in the time of artificial Intelligence」を発布した。Anthropic 共同創業者のクリス・オラーは、バチカン市国での回勅発表式典に招待スピーカーとして参加。これは Anthropic が進める「AI をめぐる重要な問いの対話を広げる」イニシアチブの一環であり、AI の倫理・安全が世界最大級の道徳的権威機関の正式議題となった歴史的な出来事といえる。

**ByteDance が any-to-any マルチモーダルモデル「Lance」を公開（5/25）**——ByteDance Research が画像生成・動画生成・画像編集・動画理解を単一モデルで処理する any-to-any マルチモーダルモデル「Lance」を Apache 2.0 ライセンスで公開。Qwen2.5-VL-3B をベースに構築されており、実用的な軽量マルチモーダル基盤として研究・開発双方から早速注目を集めている。

---

## 企業動向

- **[Anthropic co-founder Chris Olah's remarks on Pope Leo XIV's encyclical "Magnifica humanitas"](https://www.anthropic.com/news/chris-olah-pope-leo-encyclical)** (Anthropic, 5/25) — 教皇レオ14世による AI 回勅の発表式典に招待を受けた Chris Olah がバチカンで見解を披露。「AI が人間の尊厳に与える影響」という問いを宗教・倫理の文脈で論じるこの式典への参加は、Anthropic が技術コミュニティを超えた対話に積極的に関与する姿勢を示す。AI 安全に向けた規範形成に宗教的権威がどう関わるか、今後の議論の礎になりうる出来事。

- **[OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership](https://openai.com/index/grupo-folha-grupo-uol-partnership)** (OpenAI, 5/25) — OpenAI がブラジルの主要メディアグループ Grupo Folha（Folha de S.Paulo 発行元）・Grupo UOL と戦略的コンテンツパートナーシップを締結。ChatGPT に信頼性の高いブラジルのジャーナリズムを統合し、出典と透明性を確保した形でニュースアクセスを提供する。AI とメディア産業の協調モデルを南米で先行展開する事例として注目。

Google DeepMind ブログは JavaScript レンダリングのため取得不可。スキップ。

---

## 注目論文

- **[EVE-Agent: Evidence-Verifiable Self-Evolving Agents](https://arxiv.org/abs/2605.22905)** (arxiv cs.AI, 5/25) — 自己進化エージェントが「正当化できない例から学んではならない」という原則を実装。根拠を検証できないサンプルを学習データから除外することで、ハルシネーションなき自己改善ループを実現する。人手アノテーションなしで Q&A → 自己フィードバック → 改善を回せる設計は、実用エージェントの継続的品質向上に直結する。

- **[Energy per Successful Goal: Goal-Level Energy Accounting for Agentic AI Systems](https://arxiv.org/abs/2605.22883)** (arxiv cs.AI, 5/25) — 既存の AI エネルギー指標は「1推論あたりの消費量」で計測されているが、マルチステップのエージェント処理には不適合だと指摘。「1タスク達成あたりのエネルギー（EpSG）」という新指標を提案し、エージェント AI の環境負荷をゴール粒度で比較できる枠組みを提示する。エージェントの大規模化に伴いサステナビリティ議論が本格化するなかで、計測基準の整備は急務。

- **[How Far Will They Go? Red-Teaming Online Influence with Large Language Models](https://arxiv.org/abs/2605.22880)** (arxiv cs.CL, 5/25) — LLM エージェントが政治的影響工作キャンペーンを支援できる限界を探る red-teaming 研究。オンライン言論への AI エージェント介入が情報健全性に及ぼすリスクを実証し、対策設計に必要な攻撃能力の上限を定量的に明らかにする。AI の政治的悪用に対する現実的な脅威評価として、政策・安全双方のコミュニティに必須の知見。

- **[OPPO: Bayesian Value Recursion for Token-Level Credit Assignment in LLM Reasoning](https://arxiv.org/abs/2605.21851)** (arxiv cs.AI, v2 更新 5/25) — GRPO などの既存 RL 手法が「1軌跡 = 1報酬」でクレジットを割り当てる粗さを問題視し、ベイズ的価値再帰によりトークンレベルに精細化する OPPO を提案。数学・コード推論タスクで GRPO を上回る改善を確認。LLM 推論強化における RL アルゴリズムの精度向上という、GPT-5.5 / Claude Opus 4.7 世代以降も継続して重要な研究領域の前線成果。

- **[It's the humans, not the data: Geopolitical bias in LLMs originates in post-training, amplified by the language of the prompt](https://arxiv.org/abs/2605.23825)** (arxiv cs.AI, 5/25) — LLM の地政学的偏向は事前学習データではなくポストトレーニング（RLHF・SFT）に起因するという仮説を、オープンウェイト LLM ペア比較で検証。さらにプロンプトの言語によって偏向が増幅されることも示す。バイアスの責任所在をデータではなく「人間による調整フェーズ」に帰する本知見は、アライメント設計に根本的な含意を持つ。

---

## オープンソース・モデル

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** (817 likes) — ByteDance Research が公開した any-to-any マルチモーダルモデル。画像生成・動画生成・画像編集・動画理解をすべて単一モデルで処理する設計で、Qwen2.5-VL-3B ベースの軽量実装。Apache 2.0 ライセンスかつ arxiv 論文付き（2605.18678）で研究利用もしやすい。汎用マルチモーダル基盤の OSS 競争に ByteDance が正式参入した形。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** (1347 likes, 135万+ DL) — テキストから動画を生成するモデルを GGUF 形式で公開した text-to-video モデル。ダウンロード数 135 万超・いいね 1,347 件と今週最大規模のトレンドを記録。Diffusers 対応のローカル動画生成モデルとして、GPU リソースを限定した環境でも動画生成を試したいユーザーの需要を広く取り込んでいる。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** (672 likes, 4.6万 DL) — Supertone による多言語対応のオンデバイス TTS モデル。ONNX 形式で英語・韓国語・日本語を含む 30 以上の言語をサポートし、OpenRail ライセンスで公開。クラウド API 不要でオンデバイス音声合成を実現する構成は、プライバシー重視のエッジ展開ニーズにフィットする。

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** (796 likes) — Tencent が公開した軽量多言語翻訳モデル。中国語・英語・日本語・アラビア語・ヒンディー語など 35 以上の言語をカバーし、1.8B パラメータながら多言語翻訳に特化した設計。30B の大型版（Hy-MT2-30B-A3B）も同時リリースされており、スケール選択の柔軟性もある。

---

## 所感

今週を象徴するシグナルは「AI の問いが技術の外に出た」という点だ。教皇レオ14世の AI 回勅は、人権・倫理・宗教的価値観という土台から AI を議論する世界最大級の文書であり、Anthropic 共同創業者がバチカンで登壇したことはそのシグナルの強さを示す。技術と社会が交差するこの局面で、AI 企業は自社モデルのベンチマーク性能だけでなく「価値観の言語化」を問われていると読むべきだろう。一方、研究面では OPPO の GRPO 超えや EVE-Agent の証拠検証付き自己進化など、「粗い報酬・粗い学習」から「精細な信号・信頼できる成長」への移行が着実に進んでいる。
