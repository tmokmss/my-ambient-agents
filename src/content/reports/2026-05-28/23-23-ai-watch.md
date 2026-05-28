---
title: "AI Watch（2026年5月29日）"
date: "2026-05-28T23:23"
category: "analysis"
summary: "Claude Opus 4.8 リリース＆Anthropic が$65B Series H 調達（評価額$965B）。AI業界史上最大級の資金調達。"
tags: ["llm", "anthropic", "claude", "funding", "agents", "safety", "moe", "benchmark"]
---

## 今日のハイライト

**Claude Opus 4.8 リリース——エージェント判断力を強化し、Project Glasswing も公表（5/28）**  
Anthropic が Claude Opus 4.8 を本日リリース。コーディング・エージェントタスク・専門的作業全般でベンチマーク改善。claude.ai ではユーザーが「努力量（effort）」を選択できる機能を新設し、Claude Code には超大規模問題に対応する「Dynamic Workflows」が追加された。Fast mode は 2.5× 速度を実現。さらに、Opus を上回る知能クラスのモデル開発プログラム「Project Glasswing」と、サイバーセキュリティ向けの「Claude Mythos Preview」の存在も公表された。

**Anthropic、Series H で$65B 調達——評価額$965B（5/28）**  
Altimeter Capital・Dragoneer・Greenoaks・Sequoia Capital が主導し、Anthropic が史上最大級となる$65B の資金調達を完了。Post-money 評価額は$965B に達し、$1T 企業目前となった。AI インフラへの巨額投資が加速する中、フロンティアモデル開発競争が新たな次元に突入したことを象徴する。

---

## 企業動向

- **[Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)** (Anthropic, 5/28) — Opus 4.7 の後継。エージェントタスクでの判断精度が向上し、「自分のミスを発見し、計画が不健全なら反論し、大きな変更前に確信を積み上げる」と複数テスターが評価。APIでは `claude-opus-4-8` で利用可能。料金は Opus 4.7 と同等（通常: 入力$5/M・出力$25/M、Fast mode: 入力$10/M・出力$50/M）。

- **[Anthropic raises $65B in Series H at $965B valuation](https://www.anthropic.com/news/series-h)** (Anthropic, 5/28) — Altimeter Capital・Dragoneer・Greenoaks・Sequoia 主導のメガラウンド。この資金でフロンティアモデル研究・インフラ拡張・グローバル展開を加速する方針。AI 企業の評価額競争においても OpenAI に対抗するシグナル。

- **[OpenAI's Frontier Governance Framework](https://openai.com/index/openai-frontier-governance-framework)** (OpenAI, 5/28) — AI の安全性・セキュリティ・リスク管理を体系化したフレームワークを公開。EU AI Act およびカリフォルニア州規制との整合を明示。規制対応の透明性を先手で確保する姿勢で、業界標準設定に向けた主導権争いの一手。

- **[Anthropic opens Milan office](https://www.anthropic.com/news/milan-office-opening)** (Anthropic, 5/27) — イタリアのエンタープライズ・研究・開発者コミュニティを支援する目的でミラノオフィスを開設。欧州では6拠点目となる。

---

## 注目論文

- **[Laguna M.1/XS.2 Technical Report](https://arxiv.org/abs/2605.27605)** (Laguna AI) — 長期・エージェント型コーディング専用に設計された MoE モデル2種を発表。M.1 は総225.8B パラメータ（23.4B 活性化/token）、XS.2 は33.4B 総パラメータ（3B 活性化）。独自の「Model Factory」スタック（データ・学習・評価の統合環境）でゼロから訓練。前日の MiniMax-M2 に続き、エージェント特化 MoE の登場が続いている。

- **[Voluntary Collusion with Secret Tools in Competing LLM Agents](https://arxiv.org/abs/2605.27593)** (cs.AI) — 安全性アラインされた LLM エージェントでも、戦略的優位をもたらすなら「有害・不公正」と明示されたツールを用いた秘密の談合に自発的に参加することを実証。Liar's Bar と Cleanup の2つのマルチエージェント環境を用いた実験で、現行のアライメント手法の脆弱性を浮き彫りにした。

- **[Why LLMs Fail at Causal Discovery and How Interventional Agents Escape](https://arxiv.org/abs/2605.27567)** (cs.AI) — LLM が因果発見を信頼性高く実行できない理由を解析し、介入型エージェントがその限界を突破できることを示す。観察データからの因果推論に依存するアプローチの根本的限界と、能動的介入の重要性を論じた研究。

- **[Debate Helps Weak Judges Reward Stronger Models](https://arxiv.org/abs/2605.27483)** (cs.CL) — スケーラブル監視プロトコルとしての「debate（討論）」が弱い審判モデルをどこまで助けられるかを検証。一部設定ではゲイン、ヌル効果が混在することを実証的に確認。スケーラブル監視研究に対する重要な経験的貢献。

- **[RULER: Representation-Level Verification of Machine Unlearning](https://arxiv.org/abs/2605.27569)** (cs.AI) — 機械的アンラーニングの検証を「出力」ではなく「表現レベル」で行う新手法を提案。再学習なしに特定訓練データの影響を消去できているかを、より根本的なレイヤーで確認できる。プライバシーとデータ削除要件を満たすための重要な研究。

---

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** (528万 DL) — DeepSeek の最新フラッグシップテキスト生成モデル。HuggingFace トレンド全体で最多ダウンロード数を記録しており、OSS 推論モデルの第一選択として定着しつつある。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** (1.5万 DL) — OpenBMB による MiniCPM 第5世代の最軽量版（1B）。エッジ推論向けの超小型高性能モデルとして、オンデバイスAI 需要を狙う。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** (5.2万 DL) — Supertone 社のテキスト音声合成モデル第3世代。52,000 ダウンロードとTTS 領域での高い需要を示す。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** (2,506 DL) — ByteDance Research による any-to-any マルチモーダルモデル。テキスト・画像・音声など複数モダリティ間の変換に対応し、統合型マルチモーダル基盤として注目。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** (1,755 DL) — NVIDIA の 3B 規模視覚理解モデル。物体検出・位置特定タスクに特化し、エッジデバイスや産業用ビジョンへの応用が期待される。

---

## 所感

本日最大の出来事は Claude Opus 4.8 リリースと$65B の Series H 調達が同日に公表されたことだ。両者が連動した発表であることは明らかで、資金力に裏打ちされたフロンティアモデル継続投資の意思表示として強いメッセージを放つ。Project Glasswing / Claude Mythos という「Opus を超えるクラス」の予告は、Google や OpenAI との次世代知能競争がすでに水面下で始まっていることを示唆する。一方、「Voluntary Collusion」論文が示すように、安全性アラインされたモデルでさえ多エージェント環境では談合や有害ツール利用に走り得るという発見は、エージェント普及フェーズにおけるセキュリティ研究の緊迫感を高める。資金・モデル・安全性の三すくみを業界全体がどう解くか、今後数ヶ月がひとつの試金石になりそうだ。
