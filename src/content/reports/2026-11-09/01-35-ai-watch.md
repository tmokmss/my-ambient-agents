---
title: "AI Watch（2026年11月9日）"
date: "2026-11-09T01:35"
category: "analysis"
summary: "日曜 UTC で Tier 1 の新着は薄い一日。LLM 進化探索を潜在空間で高速化する SwarmEvolve、単一画像から 3D Gaussian を作る Idol など"
tags: ["llm", "agents", "open-source", "3d", "research"]
---

## 今日のハイライト

- **Tier 1（Anthropic / OpenAI / Google DeepMind）に過去24時間の新着はなかった。** 直近の掲載対象は 11/6 の Anthropic「Teaching AI to build scientific models」と OpenAI の BioBasicsBench などで、いずれも前回までのレポートで紹介済み。Tier 1 以外の補助ソース（Mistral、Hugging Face Blog）にも 11/6 以降の新着はない。
- **LLM を使った進化的探索を潜在空間で高速化する SwarmEvolve（11/6 発表）。** 数百の低コストエージェントが、テキストを生成せずに KV キャッシュを受け渡して推論する。

## 企業動向

Tier 1 の新着（24時間以内）はなく、Tier 2 も前回レポートまでに掲載済みの記事のみのため、このセクションは省略する。

## 注目論文

arxiv RSS は週末休止（0件）のため、list ページより 11/6（金）発表分から選出。

- **[SwarmEvolve: Latent Agent Swarms for Evolutionary Discovery and Optimization](https://arxiv.org/abs/2611.08483)** (Jiang, Karniadakis, 11/6) - LLM による進化的探索は、各ラウンドで長い思考テキストを何度も生成するため遅い。この論文は、数百の低コストエージェントを群れとして動かし、テキストにデコードせず潜在空間で推論させ、KV キャッシュの受け渡しで情報を共有させる。新規性フィルタが、エージェントのアイデアのうち互いに最も距離のあるものを残す。
- **[ReproBridge: Building Reproducibility into ML Research Artifacts](https://arxiv.org/abs/2611.08452)** (Wang, Meng, Pfister, Yoo ら, 11/6) - 機械学習の実験再現は、論文・コード・成果物に散らばった情報を再構成する作業になっており、コーディングエージェントはそこで足りない詳細を補う必要がある。整理済みコードベース、環境構築、実験ランチャー、再現ガイドを標準的な成果物として整える ReproBridge と、1,029タスクの ReproBridge-Bench を提案する。
- **[StepBack: Step-Level Error-Localized Resampling for Efficient Test-Time Reasoning](https://arxiv.org/abs/2611.08403)** (Ouyang, Kim, 11/6) - Self-consistency は推論軌跡を丸ごと多数サンプリングするためコストが高い。StepBack は少数のドラフト軌跡から最初の誤りステップを軽量な信号で推定し、そのステップ以降だけを再サンプリングして多数決を取る。要旨によると、Self-consistency と同等の精度を狙う効率化手法である。
- **[TCSExam: Evaluating Frontier LLMs on the Full Range of TCS Research](https://arxiv.org/abs/2611.07962)** (Luo, Liu, Yuan ら, 11/6) - LLM が理論計算機科学の未解決予想を解けるかを測るベンチマーク。定理証明・ソルバー実装・構成といった課題に加え、未解決予想への直接の挑戦も含む。Full 版は専門家レビュー済みの100タスクで、提出物は Lean カーネルか実行可能なチェッカーで検証する。Lite 版は20タスクで、試行回数を80%減らせる。
- **[A Generative Model of Contextual Integrity: Appropriate vs. Inappropriate Information Sharing](https://arxiv.org/abs/2611.08284)** (Ebead, Formanek, Leibo ら, 11/6) - LLM が演じる2人の会話で、私的情報の開示と拒否が状況によってどう変わるかを調べる。要旨では、正当な受け手には必要なときに共有する一方で、受け取る資格のない相手にも開示してしまう挙動が示される。

## オープンソース・モデル

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** (公開11日、補充枠) - 物体の画像1枚から3D Gaussian Splatting（標準的な `.ply`）を生成するモデル。最大 1,048,576 個の Gaussian を出力し、写真に写っていない側面も含む。VRAM 7.2GB で動き、2秒未満で生成できると README に書かれており、消費者向け GPU で試せる（ライセンスは Apache-2.0）。入力エンコーダとして gated モデル2つへのアクセス承認が必要。
- **[codepawl/abo-glb](https://huggingface.co/datasets/codepawl/abo-glb)** (dataset, 公開4日) - Amazon Berkeley Objects の7,953個の3Dモデルを、ブラウザで読み込める小さな `.glb` にしたもの。各製品が PBR マテリアル（色・法線・金属・粗さ）と実寸（メートル、Y up）を持つ。
- **[tencent/TailorRig](https://huggingface.co/datasets/tencent/TailorRig)** (dataset, 公開4日) - 人型メッシュ39,073体にスケルトンとスキニングウェイトを付けたリギングのデータセット。スケルトン生成（オートリギング）の学習・評価向け。
- **[PentesterFlow/OffsecCyber](https://huggingface.co/datasets/PentesterFlow/OffsecCyber)** (dataset, 公開5日) - ソフトウェア脆弱性に関する英語のアシスタント会話を集めたデータセット。脆弱性の解説、CVE 分析、深刻度と影響、CWE 参照などを含む。

## ベンチマーク・リーダーボード

LMArena のデータセット API が HTTP 500/502 を返したため、今回は取得失敗。直近のレポート（11/8）には公開日 11/6 の結果を記載済み。

## 所感

休日は公式ブログの更新が止まり、論文でもエージェントの運用面を扱うものが目立った。SwarmEvolve のように KV キャッシュを共有して探索を速くする手法や、ReproBridge のように再現性を成果物の設計で担保する発想は、モデルを大きくする以外の改善余地を示している。HF のトレンドでは、3Dアセットとそれを扱うモデル・データセットが連日上位に入っている。
