---
title: "AI Watch（2026年8月20日）"
date: "2026-08-19T22:35"
category: "analysis"
summary: "AnthropicがClaudeを自律エージェントとした新規タンパク質バインダー設計データセットを公開。DeepSeekはV4-Pro正式版でOpus 4.8並みの性能を提示した。"
tags: ["llm", "agents", "science", "biology", "open-source", "benchmark"]
---

## 今日のハイライト

**Anthropicが、Claudeモデル（Mythos Preview・Opus 4.8）を自律的なタンパク質設計エージェントとして走らせ、16種の標的に対する1,440件のデノボ・ミニタンパク質バインダーを設計し、2社の受託研究機関（Adaptyv Bio・Twist Bioscience）で実際にウェットラボ検証したデータセット「claude-protein-binder-design」をHugging Faceで公開（8/18）。同日DeepSeekは、フロンティア級コーディング・エージェントモデル「DeepSeek-V4-Pro」の正式版（0813）をリリースし、Terminal Bench 2.1やCybergymなど複数のエージェント系ベンチマークでAnthropicのOpus 4.8を上回る結果を示した（8/13）**

Anthropicのデータセットは、設計モデル・構造予測・実測の結合活性（SPR/BLI）まで一式を紐付けて公開しており、1,320件の実測対象のうち354件が実際にバインダーとして機能したことを確認済み。LLMエージェントが「タンパク質のデノボ設計を提案し、ウェットラボ実験で検証されるところまで完走した」実例をオープンに検証可能な形で示した点が注目される。一方DeepSeek-V4-Pro-0813は、DSpark投機的デコーディングを組み込んだ正式版で、Terminal Bench 2.1で87.9（Opus 4.8は85.0）、Cybergymで83.3（同78.3）と、複数のエージェント系ベンチマークで最上位の商用クローズドモデルに匹敵・上回る結果を公開した。フロンティアの性能競争が「モデル単体のベンチマークスコア」から「エージェントとして現実のタスク（科学研究・ソフトウェア工学）をやり切れるか」という実証段階に移りつつあることを、両社の発表が異なる角度から裏付けた一日だった。

---

## 企業動向

- **[Offering Zero Data Retention for frontier models](https://openai.com/index/offering-zero-data-retention-for-frontier-models)**（OpenAI, 8/19） - 対象のAPI顧客向けにゼロデータ保持（Zero Data Retention）方針を改めて表明し、プライバシーを損なわずに高度な安全性処理を行う新機能「Private Safety Processing」のプレビューを発表。エンタープライズ利用における「プライバシーか安全性か」のトレードオフを技術的に解消しようとする取り組み。
- **[Replit expands access to software creation with GPT-5.6 Luna](https://openai.com/index/replit)**（OpenAI, 8/19） - Replitが、GPT-5.6 Lunaを搭載したトークン課金を気にせず使える「Free Mode」を導入。誰でもアイデアを動くソフトウェアに変換できることを目指す。
- **[ChatGPT Ads expands across Europe](https://openai.com/index/chatgpt-ads-expands-across-europe)**（OpenAI, 8/18） - ChatGPT内広告をヨーロッパ31市場に拡大。8/11に開始した広告テストの地理的拡大の第一弾。
- Anthropicの公式ブログは8/14付「Claudeのテキスト透かし」以降、Google DeepMindは8/13付「Gemini 3.7 Flash」以降、いずれも新着なし（既報）。ただしAnthropicはHugging Face上でタンパク質設計データセットを公開しており、詳細は後述。

---

## 注目論文

- **[Fool's Gold: Defensive Deception Against Safety-Removal Attacks on Open-Weight Models](https://arxiv.org/abs/2608.17202)**（Mark Russinovich, 8/19） - オープンウェイトモデルの安全性は「abliteration」（拒否方向をベクトルとして重みから除去する手法）で数分で剥がされてしまう現状に対し、剥がされた後の応答をもっともらしい偽情報で汚染する防御手法「Fool's Gold」を提案。5系統・9B〜122Bの7モデルで実証しており、Microsoft Azure CTOという著名著者による、防御不能な攻撃を「欺瞞」で無力化する逆転の発想が目を引く。
- **[ASI-Bench: At the Dawn of Artificial Superintelligence](https://arxiv.org/abs/2608.17271)**（Junwei Zhou, Zhen Sun ほか, 8/19） - 既存ベンチマークが「学習済み知識を正しく引き出せるか」を測るのに対し、未知の探索・新知識の創出・検証可能な成果への転換という、人工超知能（ASI）に不可欠な能力を評価する初のベンチマークを提案。人間による手引きを段階的に取り除いていく設計で、AI評価の重心を「知識の再現」から「発見」へ移そうとする野心的な試み。
- **[StartupBench: Benchmarking General-Purpose Agents on Market-Validated End-to-End Workflows](https://arxiv.org/abs/2608.17800)**（Liya Zhu, Xin Ma ほか, 8/19） - 研究者が恣意的に選んだタスクではなく、実際に市場で採用されているAIスタートアップ製品のワークフローから逆算してタスクを構築した、End-to-Endエージェントベンチマーク。「AIの進歩は本当にユーザーが求める仕事に届いているか」を問う実務志向の評価軸。
- **[What Aggregate Scores Miss: Measuring Item-Level Regressions in Commercial LLM API Migrations](https://arxiv.org/abs/2608.17719)**（Xiaonan Xu, Wenjing Wu, 8/19） - GPT-5.4からGPT-5.6 Solへの3段階のアップグレードについて、900件のベンチマーク項目を各50回ずつ問い合わせ、項目単位で「確実に改善」「確実に劣化」「実質同等」を統計的に分類。集約スコアでは「改善」と見える移行の裏で、特定タスクが確実に劣化しているケースを定量的に可視化した、実務でのモデル移行判断に直結する研究。
- **[On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification](https://arxiv.org/abs/2608.18066)**（Qinyuan Ye, Yu Li ほか, 8/19） - テキストメモリを蓄積しながらタスクをこなすたびに賢くなる「自己改善エージェント」2手法を、複数回試行とタスク順序のシャッフルという評価軸を加えて再検証。複雑・多段階タスクでの評価自体のノイズが大きく、自己改善を積み重ねるとその不安定性がさらに増幅されることを実証し、華々しい自己改善の報告に再現性の疑問を投げかけた。

---

## オープンソース・モデル

- **[Anthropic/claude-protein-binder-design](https://huggingface.co/datasets/Anthropic/claude-protein-binder-design)**（8/18公開） - Claude（Mythos Preview・Opus 4.8）が自律的に設計した1,440件のデノボ・タンパク質バインダーと、2社のウェットラボ検証結果、構造予測、設計時の思考過程まで一式を収録したデータセット。1,320件中354件が実際にバインダーとして機能したことを確認済み。
- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)**（8/13公開） - プレビュー版を置き換える「DeepSeek-V4-Pro」の正式版。DSpark投機的デコーディングを追加し、Terminal Bench 2.1やCybergymなどのエージェント系ベンチマークでAnthropic Opus 4.8を上回る結果を公式に公開している。
- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**（8/12公開） - 総パラメータ2.4T・活性化95BのMoEモデルで、商用APIの最上位モデル「Qwen3.8-Max」の基盤そのものにあたる重み。Qwenチームとして初めて「Max」クラスのモデルをオープンに公開した意味合いが大きい。
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**（8/14公開） - 歌詞と音楽的な説明文から最長5分のフル楽曲を生成できる音楽生成モデル。8BのGlobal LLMで長距離の楽曲構成を、0.6BのLocal LLMでフレーム単位の音響ディテールを担当する2階層構成で、イントロ〜アウトロまで一貫した構成の楽曲を生成する。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space、現lmarena-ai/arena-leaderboard）は今回も実データがJavaScript経由のiframeでロードされる構成のため、curlでは取得できず引き続き省略する。代わりに、上記DeepSeek-V4-Pro-0813が自社公開したベンチマーク表では、Terminal Bench 2.1・Cybergym・DSBench-FullStackなど複数のエージェント系タスクでAnthropic Opus 4.8と互角以上の数値を示しており、オープンウェイトモデルとクローズドモデルの性能差が実務寄りのベンチマークでも縮まりつつあることがうかがえる。

---

## 所感

今日は、AIエージェントの実力を測る基準が「正解を当てられるか」から「実世界の複雑なワークフローをやり切れるか」へと移っていることを象徴する発表が重なった。Anthropicのタンパク質バインダー設計データセットは、LLMエージェントが仮説生成から実験検証までの科学研究サイクルの一部を実際に完走できることを、生々しい実測データとともに示した点で特に印象的だった。同時にDeepSeek-V4-Pro正式版がクローズドの最上位モデルに迫るエージェント性能を公開し、ASI-BenchやStartupBenchのような「未知の探索」「市場実証済みタスク」を測る新しいベンチマークが登場したことは、フロンティアの競争軸が着実に「知識の再現」から「自律的な遂行能力」へとシフトしていることを裏付けている。一方でOn the Fragility of Self-Improving Agentsが示した評価自体の脆さは、この移行期において「本当に進歩しているのか」を見極める難しさも同時に増していることを思い出させる。
