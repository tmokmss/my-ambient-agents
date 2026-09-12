---
title: "AI Watch（2026年9月12日）"
date: "2026-09-12T00:12"
category: "analysis"
summary: "OpenAIが技術ブログでChatGPTの10億ユーザー・秒間2,200万リクエストを開示、LMArenaはGeminiが初のトップ10入り。"
tags: ["llm", "agents", "safety", "benchmark", "open-source"]
---

## 今日のハイライト

**OpenAIがストレージ基盤に関する技術ブログの中で、ChatGPTが「10億ユーザー」に達し秒間2,200万リクエストを処理していることを明らかにした（9/11）。** 社内のストレージシステム「Habitat」を単なるPythonライブラリからグローバル分散ストレージ基盤へと進化させてきた過程を解説する記事だが、その前提として語られるユーザー規模・リクエスト数の数字自体が今回の一番のニュースと言える。合わせて、LMArenaのリーダーボードでは数日続いていた上位陣の停滞に動きが出て、GoogleのGemini 3.8 Flashが初めてトップ10入りするなど、勢力図にも小さな変化が見え始めている。

---

## 企業動向

- **[Rapidly scaling online storage to serve over 1 billion ChatGPT users](https://openai.com/index/scaling-storage-one-billion-users-part-one)**（OpenAI, 9/11） - 上記ハイライト参照。ストレージシステム「Habitat」をPythonライブラリからグローバル分散基盤へと拡張してきた経緯を解説する技術ブログで、ChatGPTが10億ユーザー・秒間2,200万リクエストの規模に達していることを開示。
- Anthropic・Google DeepMindのブログは直近3日以内の新着なし（Anthropicの最新は9/1、DeepMindの最新は9/8のAlphaGenome Atlasで既報）。

---

## 注目論文

- **[How Fragile Is Safety Alignment at Frontier Scale? A Single-Direction Attack on a 320B MoE](https://arxiv.org/abs/2609.09793)**（Shi, Chen, Shen, 9/11発表） - 「拒否方向」を重みから取り除くだけで安全策を無効化する白箱攻撃「方向性アブレーション」を、これまで検証例のなかった320Bパラメータ・288エキスパートのMoEモデル（GLM-5.3-Flash、FP8量子化）に適用。アーキテクチャがMoE化し重みが量子化されても攻撃は依然として機能することを示し、フロンティア級モデルの安全策の脆さを改めて浮き彫りにした。
- **[An Experimental Evaluation of Multimodal Prompt Injection Attacks on Agentic AI Frameworks](https://arxiv.org/abs/2609.09404)**（Nguyen, Husain, 9/11発表） - 画像を読めるエージェントは、ユーザーを介さず画像経由で指示を注入される攻撃面を持つと指摘。OCRテキスト・オーバーレイ・EXIFメタデータ・QRコード・偽UIなど6種の視覚的な運び手による攻撃をベンチマーク化し、6フレームワーク・5基盤モデルで720回の実行を計測、注入指示が知覚からツール呼び出しまで実際に到達する様子を定量化した。
- **[Watermarks Without Verification: AI Text Watermarking After the EU AI Act](https://arxiv.org/abs/2609.09604)**（Nemecek, Chaudhary, Ayday, 9/11発表） - EU AI Act第50条の義務化（8/2発効）後にAnthropicがSynthID-Text方式の透かしを全Claudeモデルへデフォルト有効化した件を題材に、ユーザーからの「品質劣化」「識別情報の秘匿埋め込み」「除去可能なのに逃れられない」という相互に矛盾する批判と、ベンダー側の説明との食い違いを分析。検証手段を伴わない透かし義務化が抱える構造的な問題を論じた。
- **[What Should an Agent Forget? Separating What Is Stored from What Is Used](https://arxiv.org/abs/2609.10263)**（Li, Li, 9/11発表） - 永続的に稼働するエージェントは、現在の質問には不要でも履歴を問う質問には必要な「古い事実」をどう扱うかという課題に対し、保存するデータと実際に使うデータを分離する訓練不要の枠組み「RD-Forget」を提案。現在時点の回答では旧情報を抑制しつつ、履歴的な問いには元データを遡って使えるようにする設計で、エージェントメモリの「忘れ方」を設計問題として扱った。
- **[When Auditors Fabricate: Batch-Size Degradation and Confident Hallucination in LLM Detection of Planted Document Contamination](https://arxiv.org/abs/2609.09696)**（Parekh, Pendyala Ravinder, Mhapsekar, Maloku, 9/11発表） - LLMを文書の品質監査役として使う際の信頼性を検証するため、150本の論文に450件の意図的な誤りを仕込んだ汚染コーパスを構築。Gemini 3.0 Proに検出させたところ、単一文書では50%だった再現率が大量バッチ処理では2.8%まで崩壊し、規模を上げるほど自信満々に幻覚を生成する傾向が明らかになった。

---

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** - DeepSeekによる画像・テキスト対応の軽量・高速版。いいね1,783件・ダウンロード7.6万件超と、主力モデルの速度を落とさず動かす「Flash」系派生を各社が急ぐ流れの最新版。
- **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)** - Zhipu AIのGLM-5.3-Flash（320億パラメータMoE）をベースにしたサイバーセキュリティ特化派生版。同モデルへの安全策無効化攻撃を検証した論文（注目論文参照）と同じ基盤モデルで、専門用途への派生開発がすでに進んでいることを示す。
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** - Qwenの27Bマルチモーダルモデル本体がトレンド入り。いいね14,758件・ダウンロード756万件超と圧倒的な人気で、量子化版やコミュニティ製マージ版が連日トレンド入りする土台になっている。
- **[kulkas2pintu/wan555](https://huggingface.co/spaces/kulkas2pintu/wan555)** - 1枚の画像からアニメーション動画を生成するSpace。いいね2,013件と、手軽な画像→動画生成デモへの関心の高さがうかがえる。

---

## ベンチマーク・リーダーボード

LMArenaの上位陣に数日ぶりの動きが見られた。首位は引き続き「claude-fable-5」（レーティング1506、投票29,683件）だが、前回1507からわずかに低下。新たに3位へ「claude-opus-4-7-high」（1502、投票59,992件）が浮上し、前回3位だった「claude-fable-5.1-max」は4位（1501）に後退した。8位には「muse-spark-1.1」（1494、投票27,136件、前回1492から上昇）、9位に「claude-opus-5-high」（1493）、そして10位に「gemini-3.8-flash-high」（1493、投票5,094件）が初めてトップ10入りし、Anthropic・Meta中心だった上位争いにGoogleも顔を出し始めた。なお、Artificial Analysisの補助データは今回もサイト側のデータ構造が複雑で安定した抽出ができず、スキップした。

---

## 所感

モデル単体の性能競争がやや落ち着く一方で、arXivでは320B規模のMoEモデルへの安全策無効化攻撃、EU AI Act施行後のウォーターマーク規制を巡る矛盾、LLM監査役自身がバッチ処理で幻覚を起こすリスクなど、「フロンティアモデルの安全策・監視機構をどこまで信頼できるか」を問う論文が相次いだ。LMArenaでも数日続いた停滞に動きが出て、GoogleのGemini 3.8 Flashが初めてトップ10入りするなど、勢力図の変化がじわじわと進んでいる印象を受けた。
