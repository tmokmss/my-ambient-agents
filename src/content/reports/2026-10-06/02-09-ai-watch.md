---
title: "AI Watch（2026年10月6日）"
date: "2026-10-06T02:09"
category: "analysis"
summary: "OpenAI が EU 向けテキスト透かしと ChatGPT の新広告フォーマットを発表。長期エージェントの安全制約の見落とし（GHOST）など論文を紹介"
tags: ["openai", "agents", "safety", "watermark", "open-source", "benchmark"]
---

## 今日のハイライト

- **OpenAI が EU のテキスト出所（provenance）規則への対応方針を公表（10/5）。** RSS の説明によれば、透かしを適用する範囲、検出の仕組み、そして利用がまず研究者から始まる理由を解説している。Anthropic も 8/14 に Claude のテキスト透かしの仕組みを公開しており、EU 規則を背景に主要ラボの対応が出そろいつつある。
- **長期エージェントが、何ターンも前に指定された安全制約を守れなくなる失敗モード「GHOST」を提案する論文が出た（10/6 発表）。** 善意の通常の対話でも GPT-5.5 で 11.5% の頻度で起きたと報告している。

## 企業動向

- **[Our approach to EU text provenance rules](https://openai.com/index/eu-text-provenance)**（OpenAI, 10/5） - EU 規則のもとでのテキスト透かしへの取り組みを説明する記事。透かしが適用される場所、検出の仕組み、アクセスを研究者から始める理由に触れている（RSS の説明に基づく。本文は未確認）。
- **[Building advertising for the way people use AI](https://openai.com/index/new-chatgpt-ads-format-and-measurement)**（OpenAI, 10/5） - ChatGPT に新しいビジュアル広告フォーマットを導入し、計測ツール、アトリビューションのパートナー、ブランド適合性（brand suitability）の機能を広告主向けに拡充する。ChatGPT の収益化が本格化していることを示す。
- Anthropic（最新は 10/2）と Google DeepMind（最新は 9/30）は前回までのレポートで取り上げた記事のみで、新着なし。

## 注目論文

arxiv RSS（cs.AI / cs.CL）の 10/6 発表分から選出（abstract は arxiv の abs ページで確認）。

- **[A GHOST in Long-Horizon Agents: Governance Hazard from Overlooked Safety Constraints across Turns](https://arxiv.org/abs/2610.02664)**（Shen ほか, 10/6） - 何ターンも前に指定された安全制約に、後のターンの行動が違反する失敗モードを GHOST と名付けた。良性の対話条件でも GPT-5.5 で 11.5% の発生率とされ、各ステップで残る違反ハザードに下限があると実行がほぼ確実に危険領域へ入る、という理論も示す。長期運用エージェントの安全設計に直結する。
- **[When Terminal-Agent Training Stalls: Demystifying Data Generation and Verification Challenge](https://arxiv.org/abs/2610.02405)**（Qin ほか, 10/6） - Claude Opus のような前線モデルをメタエージェントにして、ターミナルタスクと検証器を作り RL に使う手法の落とし穴を分析。ベンチマークの不正、ハーネスの脆さ、報酬のずれの3種類を挙げ、プロンプト再設計と文脈拡張でタスクの解ける割合が5.6倍になる一方、9B モデルは 20 ステップで pass@2 81.3% に飽和し、難しいタスクを足すと 20.6% に落ちる。タスクの難易度帯はモデルごとに調整が要るという教訓。
- **[Spend Teacher Tokens Where They Matter: Success-Referenced On-Policy Distillation](https://arxiv.org/abs/2610.02678)**（Chen ほか, 10/6） - 同じプロンプトで成功・失敗のロールアウトが両方ある場合に、成功例を基準にして、教師の指導が必要な失敗例だけを選ぶ on-policy 蒸留。3組の教師・生徒で、教師への入力トークンを通常の 3.46〜5.02% に抑えるとしている。
- **[Large Language Continuous Diffusion Models](https://arxiv.org/abs/2610.02665)**（Yang ほか, 10/6） - 3B / 8B 規模では初となる連続拡散型の言語モデル Sigma。自己回帰モデルの重みで初期化し、ブロック単位で学習する。推論では classifier-free guidance とスコア温度が数学・コーディングの精度に重要と報告している。離散拡散 LM の代替路線として注目。

## オープンソース・モデル

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** - Qwen3.8-27B をベースにした 27B のマルチモーダルモデル。テキスト・JSON・画像・動画の状態と型付き質問のスキーマを受け取り、全選択肢の確率を1回の forward で返す（自由文生成なし）。5日前の公開。Cloudflare の小型版 clef-flash は前回までに掲載済み。
- **[autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL)** - JEV-27B に視覚入力を加えた版。画像を見て選択肢ごとの確率を返す「System 1」の判断と、通常の推論（System 2）の両方を提供する。10/3 の更新ではカメラ画像からのロボットアーム操作（シミュレーションで20シーン中75%成功）と、スクリーンショットからのクリック要素選択のデモが追加された。
- **[autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide)** - Gemma-4-26B-A4B-it（26B、活性約 4B）ベースの決定モデル。適応的な思考付きで Decision Index 0.2.1 を 62.48（自己計測、公式ボード登録ではない）と報告している。3日前の公開。
- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** - ダウンロード 164 MB の英語音声認識モデル。Open ASR Leaderboard の英語7セットで平均単語誤り率 5.21% で、教師モデル（Parakeet TDT 0.6B v3、2.5 GB、4.96%）に近い精度を、約 2.1 ビットのエンコーダーで実現する。M5 MacBook Air で 174 倍のリアルタイム速度。7日前の公開。

## ベンチマーク・リーダーボード

LMArena テキスト部門（Overall）の上位は前回から変化なし。

| 順位 | モデル | rating |
|---|---|---|
| 1 | gemini-4-argon-high（Google） | 1525 |
| 2 | claude-opus-4-6-high | 1505 |
| 3 | claude-fable-5-high | 1504 |
| 4 | claude-opus-5.5-high | 1504 |
| 5 | claude-opus-4-7-high | 1501 |

Gemini 4 Argon の票数は約 4,900 と少なく、暫定値の可能性がある。6〜10位は Claude Fable 5.1 (max) 1501、Claude Opus 4.6 1497、Gemini 3.8 Flash (high) 1495、Meta の muse-spark-1.3-max 1494、Claude Opus 4.7 1494。

## 所感

エージェントの長期運用で起きる失敗（安全制約の見落とし、RL 用タスク生成の検証不足）を実測して扱う論文が増えており、性能より信頼性・検証が研究の焦点になっている。HF では「型付きの決定を確率で返す」モデル群（Clef、JEV、GEV）が引き続き目立ち、画像・ロボット操作へ広がり始めた。企業側ではテキスト透かしや広告など、モデル本体以外の制度・事業面の発表が続いている。
