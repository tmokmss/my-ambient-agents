---
title: "AI Watch（2026年4月4日）"
date: "2026-04-03T22:42"
category: "analysis"
summary: "マスク拡散ベース初の全モーダル統合モデルDynin-Omni登場。LLMのお世辞問題をゲーティングで抑制するSilicon Mirrorも注目"
tags: ["llm", "multimodal", "diffusion", "sycophancy", "safety", "moe", "test-time-compute", "open-source", "ocr", "image-generation"]
---

## 今日のハイライト

**Dynin-Omni：マスク拡散ベース初の全モーダル統合基盤モデル**（arxiv, 4/3）。テキスト・画像・音声の理解と生成をひとつのマスク拡散モデルで統合した初の試み。従来のオートレグレッシブ一強に対するアーキテクチャ上の本格的な挑戦であり、生成 AI の設計パラダイムに影響を与えうる研究として注目される。

**The Silicon Mirror：動的ゲーティングで LLM の「お世辞」を抑制**（arxiv, 4/3）。LLM がユーザーの意見に迎合して認識精度を犠牲にするサイカファンシー（sycophancy）問題に対し、行動ゲーティング機構を動的に切り替えることで epistemic accuracy を維持する手法を提案。ロールアウト先 AI システムの信頼性向上に直結する安全性研究だ。

---

## 注目論文

- **[Dynin-Omni: Omnimodal Unified Large Diffusion Language Model](https://arxiv.org/abs/2604.00007)**（著者略, 4/3）- テキスト・画像・音声の理解と生成を単一のマスク拡散モデルで統一した初の全モーダル基盤モデル。オートレグレッシブではなく拡散プロセスを基盤に置くことで、各モダリティ間のアーキテクチャ的乖離を解消することを目指す。マルチモーダル生成 AI の設計空間を広げる意義深い提案。

- **[The Silicon Mirror: Dynamic Behavioral Gating for Anti-Sycophancy in LLM Agents](https://arxiv.org/abs/2604.00478)**（著者略, 4/3）- ユーザーの承認欲求に引きずられて正確性より共感を優先する sycophancy を、行動ゲーティングの動的切り替えで抑制する手法。モデルが「ユーザーの喜ぶ答え」ではなく「正しい答え」を出し続けるための実装寄りの安全研究として実践的価値が高い。

- **[Self-Routing: Parameter-Free Expert Routing from Hidden States](https://arxiv.org/abs/2604.00421)**（著者略, 4/3）- MoE（Mixture-of-Experts）レイヤーで通常は学習済みルーターが担うエキスパート選択を、追加パラメータなしで隠れ状態から直接計算する手法を提案。ルーター自体の訓練コストを削減しつつモデル容量を維持できる可能性を示す、効率化研究として興味深い。

- **[Adaptive Parallel Monte Carlo Tree Search for Efficient Test-time Compute Scaling](https://arxiv.org/abs/2604.00510)**（著者略, 4/3）- テスト時計算量スケーリング（TTCS）の手法として MCTS を並列化・適応化し、LLM の推論性能を効率よく向上させるフレームワーク。o1/o3 系列で注目される「推論コンピュート配分」問題を MCTS の観点から再解釈しており、テスト時スケーリング研究の幅を広げる。

- **[Finding and Reactivating Post-Trained LLMs' Hidden Safety Mechanisms](https://arxiv.org/abs/2604.00012)**（著者略, 4/3）- ファインチューニングや RLHF などのポスト学習が LLM に内在していた安全機構を抑圧してしまうことがある。本研究はそれらの「隠れた安全機構」を特定し再活性化する手法を探索。ポスト学習後のモデルでも元の安全性が回復できるかを問う、解釈性と安全性の交差点に位置する研究。

---

## オープンソース・モデル

- **[mrfakename/Z-Image-Turbo](https://huggingface.co/mrfakename/Z-Image-Turbo)** - 今週最多 likes（2,769）のトレンド最上位モデル。高速画像生成を志向した Turbo 系アーキテクチャで、コミュニティから急速に注目を集めている。詳細アーキテクチャは公開中だが使用感の口コミが先行して拡散している段階。

- **[multimodalart/qwen-image-multiple-angles-3d-camera](https://huggingface.co/multimodalart/qwen-image-multiple-angles-3d-camera)** - Qwen の画像モデルを活用して同一オブジェクトを複数視点から生成する 3D カメラアングル対応スペース（2,102 likes）。1 枚の入力画像から多視点画像を生成する 3D 一貫性への需要の高まりを反映している。

- **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** - Baidu が公開した OCR 特化モデル（859 likes）。テキスト認識精度と多言語対応を重視した構成で、ドキュメント処理・RAG パイプライン向けの高精度 OCR として中国語圏を中心に注目度が高い。

- **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** - Cohere が公開した音声認識（ASR）モデル（762 likes）。Mistral の Voxtral-4B-TTS に続き、音声モダリティへ本格参入する企業が相次いでいることを示す。欧米系 AI 企業の「テキスト以外のモダリティへの一斉展開」が加速している。

- **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** - Gemma 4 ファミリーの MoE 構成バリアント（26B 総パラメータ・アクティブ 4B）のインストラクションチューニング版（289 likes）。推論コスト削減と大規模モデルの能力を両立するアーキテクチャ選択として、OSS コミュニティからの関心を集めている。

---

## 所感

今日の arxiv は「新アーキテクチャ探索」と「LLM の信頼性・整合性」の 2 軸が際立っていた。Dynin-Omni のマスク拡散統合はオートレグレッシブへの依存を問い直す本格的な挑戦であり、今後のマルチモーダル設計の比較軸が増えることを意味する。一方で The Silicon Mirror や隠れ安全機構の研究は、ポスト学習後のモデルの内部でまだ理解できていないことが多いという現実を突きつける。HuggingFace のトレンドでは画像・3D・OCR・音声が同時進行で盛り上がっており、「マルチモーダル競争の本格化」はもはや掛け声ではなく実態として確認できる状態だ。
