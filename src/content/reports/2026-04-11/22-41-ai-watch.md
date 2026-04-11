---
title: "AI Watch（2026年4月12日）"
date: "2026-04-11T22:41"
category: "analysis"
summary: "Anthropic の年換算収益が $300 億超え・大口顧客 1,000 社突破。OpenAI は Axios サプライチェーン攻撃に対応。週末のため arxiv 新着なし"
tags: ["enterprise", "security", "robotics", "autonomous-vehicles", "benchmark", "multimodal", "llm", "tts"]
---

## 今日のハイライト

**Anthropic の年換算収益が $300 億超え、大口エンタープライズ顧客が 1,000 社を突破**（Anthropic, 4/6）。2025 年末時点では約 $90 億だった run-rate revenue が $300 億超へと急増。2 月の Series G 発表時に「年間 100 万ドル以上を支出する企業が 500 社超」と公表していたが、それから 2 か月足らずで 1,000 社超に倍増した。Google と Broadcom との複数ギガワット規模のコンピュート提携拡大も同時発表され、インフラ面での急速な拡張を裏付ける内容だ。

**OpenAI、Axios 開発者ツールのサプライチェーン攻撃に対応**（OpenAI, 4/10）。Axios（JavaScript の HTTP ライブラリ）開発者ツールが侵害され、OpenAI は macOS アプリのコード署名証明書を即座に更新。ユーザーデータへの流出はなかったと報告された。AI 企業を狙うサプライチェーン攻撃という観点から業界全体へのアラートとなる事例だ。

---

## 企業動向

- **[Anthropic、Google・Broadcom との大規模コンピュート提携を拡大](https://www.anthropic.com/news/google-broadcom-partnership-compute)**（Anthropic, 4/6）— Run-rate revenue が $300 億超（2025 年末比で約 3.3 倍）、大口企業顧客が 2 か月で 500→1,000 社に倍増という驚異的な成長データを公開。Google・Broadcom と複数ギガワット規模のコンピュート契約を締結し、インフラの大部分を米国内に整備する計画も発表。Claude は AWS Bedrock・Google Cloud Vertex AI・Microsoft Azure Foundry の 3 大クラウドすべてで提供される唯一のフロンティア AI モデルであることも強調された。

- **[Axios 開発者ツール侵害への対応](https://openai.com/index/axios-developer-tool-compromise)**（OpenAI, 4/10）— Axios ライブラリへのサプライチェーン攻撃を受けて macOS アプリのコード署名証明書を更新、アプリをアップデート。ユーザーデータへの影響はなし。AI 企業が開発ツールのセキュリティチェーンに組み込まれるリスクを示す典型事例として、業界全体で注目される。

---

## 注目論文

*本日は土曜日のため、arxiv cs.AI / cs.CL の新着 RSS に論文掲載なし（arxiv は週末を skip）。*

---

## オープンソース・モデル

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**（982 likes、4/11 更新）— ZhipuAI の GLM-5.1 が 4/11 に更新。ツール呼び出し対応のチャットテンプレートが整備されており、エージェント活用を強く意識した設計となっている。先週紹介時の 728 likes から 982 likes へ増加が続いており、中国発 OSS 最大手の一角としてコミュニティ内での地位を固めつつある。

- **[nvidia/PhysicalAI-Autonomous-Vehicles](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles)**（dataset、830 likes、1M+ DL）— NVIDIA が公開した自動運転向け Physical AI データセット。専用ライセンス規約のもとで提供され、アノテーション・メタデータを含む大規模な車両センサーデータを収録。ロボット・自動運転など物理 AI 領域の研究インフラとして急速に活用が広がっている。

- **[lerobot/robot-folding](https://huggingface.co/spaces/lerobot/robot-folding)**（space、55 likes、4/10 更新）— HuggingFace の LeRobot チームが公開した「データ収集からデプロイまで」のシャツ折りたたみロボット実証デモ。ロボット学習のデータ・モデル・デプロイパイプライン全体をオープンソースで再現できる構成で、物理 AI 研究の参入障壁を下げる取り組みとして注目される。

- **[MME-Benchmarks/Video-MME-v2](https://huggingface.co/datasets/MME-Benchmarks/Video-MME-v2)**（dataset、28 likes、4/11 更新、arxiv: 2604.05015）— 動画マルチモーダル評価ベンチマーク Video-MME の改訂版。Video-Text-to-Text タスクを中心に時間順序理解・物体認識など多様な動画理解能力を評価する設計で、マルチモーダル LLM の動画理解力を測る標準ツールとして整備が進んでいる。

- **[openbmb/VoxCPM-Demo](https://huggingface.co/spaces/openbmb/VoxCPM-Demo)**（space、276 likes、4/9 更新）— 先日取り上げた VoxCPM2 TTS モデルのインタラクティブデモ（A10G GPU 搭載）。ブラウザ上でリアルタイムに音声合成を体験できる場が整備され、MiniCPM エコシステムの音声機能を手軽に試せるようになった。

---

## 所感

週末のため arxiv 新着が休止し、大型発表も少ない静かな一日となった。それでも Anthropic が公開した収益・顧客数の急増データは、AI 産業の商業化フェーズが想定を超えるスピードで進行していることを示す重要な指標だ。2 か月で大口顧客が倍増するペースが続けば、エンタープライズ AI 市場の規模感と競争構造は年内にも大きく塗り替わるだろう。OpenAI の Axios サプライチェーン攻撃への対応は、AI 企業がソフトウェアサプライチェーンリスクの矢面に立つ時代に入ったことを示しており、今後はセキュリティレビューの対象がモデル自体だけでなく周辺開発ツール全体へと拡大されていくことが予想される。一方、NVIDIA の物理 AI データセットや LeRobot の折りたたみロボットデモが示すように、AI の戦場はデジタル空間から物理空間へと静かに広がりつつある。
