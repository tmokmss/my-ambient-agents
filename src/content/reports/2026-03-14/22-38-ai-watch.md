---
title: "AI Watch（2026年3月14日）"
date: "2026-03-14T22:38"
category: "analysis"
summary: "土曜でarxiv休刊・企業発表なし。HFではOmniCoder-9BがAIME90%達成、LocoTrainer-4Bがコードエージェント新星として登場"
tags: ["llm", "coding", "agents", "open-source", "computer-use", "benchmark"]
---

## 今日のハイライト

**Tesslate/OmniCoder-9B が AIME 2025 pass@5 90%・GPQA Diamond 83.8% を達成**（3/13 HF公開）。Qwen3.5-9B をベースに、コーディングとエージェント用途に特化した SFT を施した 9B モデル。9B クラスとしては異例の高スコアで、Terminal-Bench 2.0 pass rate 28.1% も記録しており、実環境のターミナル操作タスクへの適性も示す。Apache 2.0 ライセンスで商用利用可。

**土曜日につき arxiv 休刊、Anthropic・OpenAI・DeepMind からの新規発表も確認されず。** 週次の静かな一日となったが、HuggingFace トレンドではコーディングエージェントと Computer Use 系モデルの新作が集中しており、開発者コミュニティの実装フェーズへの移行が続いている。

---

## 企業動向

過去24時間に Anthropic・OpenAI・Google DeepMind から新規のブログ投稿は確認されなかった。このセクションは省略する。

---

## 注目論文

arxiv は土曜日のため新規論文なし（skipDays: Saturday/Sunday）。

---

## オープンソース・モデル

- **[Tesslate/OmniCoder-9B](https://huggingface.co/Tesslate/OmniCoder-9B)** (160 いいね、3/13) - Qwen3.5-9B ベースのコード・エージェント特化モデル。AIME 2025 pass@5 **90.0%**・GPQA Diamond pass@1 **83.8%** という 9B クラス最高水準スコアを記録。ターミナル操作ベンチマーク Terminal-Bench 2.0 でも 28.1% を達成し、推論と実行を橋渡しするコーディングエージェントとしての実用性が高い。Apache 2.0。

- **[LocoreMind/LocoTrainer-4B](https://huggingface.co/LocoreMind/LocoTrainer-4B)** (160 いいね、3/14) - Qwen3-4B-Instruct をベースに、MS-SWIFT フレームワーク専門のドメインエキスパートとして Qwen3-Coder-Next から蒸留した 4B コードエージェント。複数ターンのツール呼び出しとコードベース解析を組み合わせ、別途推論モデルなしで包括的なマークダウンレポートを生成できる設計が特徴。小型モデルでの専門エージェント化という方向性が面白い。

- **[markov-ai/computer-use-large](https://huggingface.co/spaces/markov-ai/computer-use-large)** (52 いいね、45K DL、3/12) - Markov AI によるコンピュータ使用（computer use）特化スペース。45K ダウンロードという実用ユーザー数の多さが注目点で、エージェントが GUI を自律操作するユースケースへの関心の高まりを反映する。Anthropic の Claude Computer Use に続くオープンな実装として位置づけられる。

- **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** (162 いいね、65K DL、3/10) - Qwen3.5-35B（3B アクティブパラメータの MoE 構造）の無制限・攻撃的チューニング版。65K ダウンロードという数字はコミュニティの根強いニーズを示す。同チームの 9B 版も今週トレンドに入り続けており、Qwen3.5 アーキテクチャを軸にした派生モデル群が広がっている。

---

## 所感

今日は土曜日で arxiv が休刊し、大手企業からの新規発表もない静かな一日だった。それでも HuggingFace トレンドに目を向けると、コーディングエージェントに特化したモデル（OmniCoder-9B・LocoTrainer-4B）が同日にトレンド入りしており、「モデルを使う」フェーズから「コードを書く・システムを操作するエージェントを作る」フェーズへのシフトがオープンソースコミュニティでも着実に進んでいることが分かる。9B という小型クラスで AIME 90% という数字は一年前では想像しにくかった水準であり、フロンティアモデルの知識が小型モデルへ急速に転移していることを改めて実感する週末となった。
