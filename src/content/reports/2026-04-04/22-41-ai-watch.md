---
title: "AI Watch（2026年4月5日）"
date: "2026-04-04T22:41"
category: "analysis"
summary: "DeepMindがGemma 4詳細ブログを公開。HFではClaude Opus 4.6蒸留のQwen3.5-27Bが急上昇。週末でarxivは休止"
tags: ["llm", "open-source", "distillation", "multimodal", "gemma", "safety", "agents", "hf-trending"]
---

## 今日のハイライト

**Google DeepMind が Gemma 4 の公式ブログを公開**（DeepMind, 4/上旬）。「バイト（パラメータ）当たり最も有能なオープンモデル」を謳い、E2B・E4B（エッジ向け）と 26B・31B（MoE 構成）の 4 サイズで構成される Gemma 4 ファミリーの技術詳細を解説。Gemini 3 の研究成果を転用したマルチモーダル・多言語・エージェント対応が特徴で、今年最大のオープンモデルリリースのひとつとして改めて注目される。

**HuggingFace で Claude Opus 4.6 蒸留 Qwen3.5-27B が急上昇**（HF, 今週）。`Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled` が 2,286 likes を記録しトレンド最上位に。フロンティアモデルの推論トレースを使った知識蒸留がオープンソースコミュニティの主流手法として定着しつつある。

---

## 企業動向

- **[Gemma 4: Byte for byte, the most capable open models](https://deepmind.google/discover/blog/gemma-4/)** (Google DeepMind, 4月) — E2B/E4B のエッジ向け超小型モデルから 26B/31B の MoE 構成まで幅広いサイズ展開。Gemini 3 の知識を蒸留しつつ、128K コンテキスト・画像入力・多言語に対応。Chatbot Arena でも継続的にスコアが更新されており、OSS 勢力として Llama・Qwen と並ぶ評価軸となっている。

- **[Protecting people from harmful manipulation](https://deepmind.google/discover/blog/protecting-people-from-harmful-manipulation/)** (Google DeepMind, 3月) — ソーシャルエンジニアリング・フィッシング・感情操作など AI が悪用される「有害な操作」のパターンを分類し、モデル設計・デプロイ側での防御策を論じた研究ブログ。AI の悪意ある利用に対して DeepMind が安全研究の一環として系統的に取り組む姿勢を示しており、Anthropic の RSP や OpenAI の Safety Bug Bounty と並ぶ業界的な安全対策の流れを強化している。

※ Anthropic の直近更新は 3/31 のオーストラリア政府との MOU（過去レポート掲載済み）。OpenAI の直近更新は 4/2 の TBPN 買収・Codex 料金改定（昨日レポート掲載済み）。両社とも過去 24 時間は新規リリースなし。

---

## 注目論文

本日（土曜日）は arXiv の定期更新が休止日のため、新着論文はありません。次の更新は月曜日（日本時間 火曜早朝）の予定です。

---

## オープンソース・モデル

- **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — Claude Opus 4.6 の推論トレースを蒸留した Qwen3.5-27B ベースのモデル（2,286 likes）。フロンティアモデルの思考過程を小型モデルに転写する「推論蒸留」アプローチがコミュニティの定番となりつつあり、同モデルの GGUF 版（v2）も 502 likes で同時トレンド入り。

- **[multimodalart/qwen-image-multiple-angles-3d-camera](https://huggingface.co/multimodalart/qwen-image-multiple-angles-3d-camera)** — Qwen の画像モデルを使い 1 枚の入力から複数視点の 3D アングル画像を生成するスペース（2,121 likes）。前号でも報告したが依然トレンド上位を維持しており、3D 一貫性生成への関心の継続的な高まりを裏付ける。

- **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** — Qwen3.5-9B ベースの検閲解除モデル（967 likes）。安全フィルターを意図的に取り除いた「アンセンサード」モデルは倫理的に議論の余地があるが、HuggingFace 上での根強い需要を示している。研究・レッドチーミング目的での利用が主とされるが、利用者側の責任が問われる。

- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — Gemma 4 の最小サイズ、エッジ向け E4B（推定アクティブ 4B パラメータ）インストラクションチューニング版（301 likes）。モバイル・IoT・ブラウザ内推論を想定した超軽量設計で、エッジ AI 競争の新たな参照点となっている。

- **[netflix/void-model](https://huggingface.co/netflix/void-model)** — Netflix が公開した `void-model`（301 likes）。モデルカードの詳細は現時点で限定的だが、Netflix という非 AI 専業企業がオープンモデルを HuggingFace に公開したこと自体が注目を集めている。コンテンツ推薦・字幕・コンテンツ生成など、メディア特化の用途が想定される。

---

## 所感

今日は週末で arXiv の更新がなく、主なハイライトは Google DeepMind の Gemma 4 公式ブログと HuggingFace のトレンドに絞られた。Gemma 4 は Llama・Qwen と並ぶ OSS の第三極として確立しつつあり、エッジから中規模クラウドまで一気通貫のラインナップが整いつつある点は注目に値する。一方で HuggingFace では、フロンティアモデル（Claude Opus 4.6）から小型モデルへの推論蒸留がコミュニティの標準的手法として急速に普及しており、高コストなフロンティアモデルの推論能力が次々と安価な OSS モデルに流れ込む構図が強まっている。
