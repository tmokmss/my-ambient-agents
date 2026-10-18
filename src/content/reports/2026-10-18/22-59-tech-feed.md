---
title: "Tech Feed ダイジェスト（2026年10月19日）"
date: "2026-10-18T22:59"
category: "summary"
summary: "Agentic RL・Lambda 3種・Claude Code の安全設定検証・Haiku 5.5 の AWS 提供・Cray-1 レプリカなど8ソースの注目記事"
tags: ["ai", "aws", "security", "lambda", "claude-code", "agents", "rust", "networking"]
---

## はてなブックマーク (テクノロジー)
- **[オンボーディングをAIエージェントに任せたら、もはや別ゲーだった](https://engineering.dena.com/blog/2026/10/ai-agent-onboarding/)** ([69users](https://b.hatena.ne.jp/entry/s/engineering.dena.com/blog/2026/10/ai-agent-onboarding/)) - DeNA Engineering による、新メンバーのオンボーディングを AI エージェントに任せた実践記。立ち上がりの速度や属人性の変化など、開発組織の運用面の知見が得られる。
- **[日本企業がサーバーに侵入されまくっている現状を鑑み、「絶対無敵を目指すOS」を作ってみた。耐量子暗号HTTPSサーバー専用OS](https://wirelesswire.jp/2026/10/94793/)** ([81users](https://b.hatena.ne.jp/entry/s/wirelesswire.jp/2026/10/94793/)) - 相次ぐ不正アクセスを背景に、耐量子暗号対応の HTTPS サーバー専用 OS を試作した記事。攻撃面を絞った専用 OS という設計アプローチが読みどころ。
- **[Pele · Mermaid diagrams as themeable SVG](https://pele.run/)** ([68users](https://b.hatena.ne.jp/entry/s/pele.run/)) - Mermaid 図をテーマ変更可能な SVG として出力するツール。ドキュメントやブログの図をデザインに合わせて統一したい場面で使える。
- **[トレーシング基盤なしで「どこが遅いか」を SQL で探す：gospan で net/http の span を SQLite に溜める](https://zenn.dev/nonejp/articles/c7dd2859872f9d)** ([13users](https://b.hatena.ne.jp/entry/s/zenn.dev/nonejp/articles/c7dd2859872f9d)) - Go の net/http の span を SQLite に蓄積し、SQL で遅い箇所を調べる手法。本格的なトレーシング基盤を用意せずにボトルネックを探れる軽量な選択肢。
- **[GitHub - addyosmani/factory: A reference software factory for Claude Code and Codex](https://github.com/addyosmani/factory)** ([6users](https://b.hatena.ne.jp/entry/s/github.com/addyosmani/factory)) - Claude Code と Codex 向けの「ソフトウェアファクトリー」リファレンス実装。コーディングエージェントを工程として組み込む構成の参考になる。

## Zenn
- **[Akinatorで始めるAgentic RL ー タスク設計と初期検証 ー](https://zenn.dev/mkj/articles/8e1da67da67f98)** - ツールの使い方を推論時のコンテキストではなく強化学習による事後学習で獲得させる Agentic RL を、Akinator 型タスクで検証する松尾研究所の記事。タスク設計と初期検証が中心。
- **[AFM（Apple Foundation Models）を活用したテキストアドベンチャーゲームの開発【第2回】自由入力を台本の選択肢につなぐ](https://zenn.dev/gritchbreed/articles/ced633f449178f)** - オンデバイスの AFM に入力解釈を任せ、物語進行は台本とルールエンジンで制御する設計の第2回。自由入力を台本上の話題や移動に変換する部分を扱う。
- **[PyODで時系列データの異常検知を試す](https://zenn.dev/drbobt1122/articles/blog26101701)** - PyOD の時系列向け検出器7種を比較。表形式向け検出器をスライディングウィンドウで時系列に適用する Windowed Bridge などを試している。
- **[生産計画を手を動かして学ぶ ― OSS の frePPLe で MRP・需要予測・CP-SAT まで](https://zenn.dev/rkawajiri/books/frepple-tutorial-ja)** - OSS の生産計画ソフト frePPLe を Docker で動かし、MRP、有限能力計画、需要予測、OR-Tools CP-SAT による最適化までを学ぶ無料ハンズオン。
- **[良いテストを書き、良いテストを見分ける ─『単体テストの考え方/使い方』のエッセンス](https://zenn.dev/nexta_/articles/unit-testing-principles-essence)** - AI でテストを大量生成できる時代に、テスト数ではなく良いテストを書き見分けることが品質を左右する、という観点で書籍の要点を整理。

## Qiita
- **[Lambdaが3種類になったみたいなので、全部試してみた](https://qiita.com/maeda-kazutoshi/items/4674e080c2ce3d53c809)** - 10月発表の Lambda Web Functions、6月の MicroVMs、従来型の Lambda の3種を同一お題で試した記事（冒頭抜粋より）。使い分けの判断材料になる。
- **[重要な指示は最初か最後か？ AI 大手 3 社の助言が異なるので、資料→命令→指示の並び方を 8 通り試してみた](https://qiita.com/songchong/items/542892c6d4c569c9c15f)** - Anthropic・Google・OpenAI の手引きで推奨が異なるプロンプトの並び順を、8パターンで比較検証した記事。
- **[Claude Codeの.envを読ませない設定がどこまで効くのか試してみた](https://qiita.com/yakumo_09/items/5a86ca330b449db0e6bc)** - permissions.deny で .env を読ませない設定の効果を、偽のキーを置いて48回試した検証。公式ドキュメントにある「止まらないケース」を実測する。
- **[hook で Claude Code に .env や鍵ファイルを消させない](https://qiita.com/Oskra/items/da16b717fc931a6423e6)** - 「消さないで」という設定がコマンドの書き方ですり抜けられる問題を、111行の hook で止める方法。止められない操作の限界にも触れている。
- **[テーブル定義書・ER図を自動生成して、AIにテーブル構造を答えさせるツールを作ってみた](https://qiita.com/ebichan_88/items/f7c44c74e437875b1399)** - テーブル定義書と ER 図を自動生成するツール「dbxray」を作り、AI にテーブル構造を答えさせる試み。不慣れなサブシステムの把握が動機。

## AWS 新着
- **[Claude Haiku 5.5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-haiku-5-5-aws/)** (2026-10-07) - Claude 5.5 ファミリーで最速・高効率のモデルが AWS で利用可能に。サブエージェントや大量・コスト重視の処理向けで、GovCloud (US) にも同日提供された。
- **[Amazon Time Sync Service adds support for microsecond-accurate time on 135 additional EC2 instance types](https://aws.amazon.com/about-aws/whats-new/2026/10/time-sync-additional-instances-all-regions)** (2026-10-15) - マイクロ秒精度の時刻同期が12ファミリー・135種の追加インスタンスタイプで全商用リージョンに対応。分散システムのタイムスタンプ精度が必要なワークロードに効く。
- **[PostgreSQL 19 RC1 is now available in Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/10/postgresql-19-rc1-amazon-rds-database-preview-environment/)** (2026-10-15) - PostgreSQL 19 のリリース候補1が RDS の Preview 環境で評価可能に。正式版前に互換性確認ができる。
- **[AWS Control Tower AFT now supports plan-only customization runs](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-control-tower-aft/)** (2026-10-05) - Account Factory for Terraform で、適用前に Terraform の変更内容をプレビューする plan-only 実行が可能に。多数アカウントへの変更の安全性が上がる。
- **[AWS Certificate Manager now supports ACME issuance through AWS PrivateLink](https://aws.amazon.com/about-aws/whats-new/2026/10/AWS-Certificate-Manager-ACME-Privatelink)** (2026-10-06) - ACME による公開 TLS 証明書の発行・更新を、PrivateLink 経由で閉域のまま行える。

## Lobsters
- **[ARP! Tell your network to explain itself](https://benjcal.space/blog/arp-tell-your-network-to-explain-itself/)** (27pt) - ARP を使ってネットワークの状態を調べる解説。L2 の挙動を手元で確認する際の入門的な資料。
- **[A New Way to Think About Borrow Checking (In Reverse)](https://verdagon.dev/blog/reverse-borrow-checking)** (25pt) - 借用チェックを逆方向から捉え直す考察。コンパイラ・メモリ安全性の設計に興味がある人向け。
- **[Inside the Intel 8087 chip: floating-point addition and subtraction](https://www.righto.com/2026/10/8087-addition-subtraction-microcode.html)** (13pt) - Intel 8087 の浮動小数点加減算をマイクロコードレベルで解説。浮動小数点演算の原点を知る資料。
- **[Making Hybrid Images (2014)](https://www.jeremykun.com/2014/09/29/hybrid-images/)** (13pt) - 周波数成分を組み合わせて見る距離で見え方が変わるハイブリッド画像を作る、数学とコードの解説。
- **[Ghidra + CBMC = Assembly Model Checker](https://www.philipzucker.com/asmc_cpp/)** (7pt) - 逆アセンブラ Ghidra とバウンデッドモデル検査器 CBMC を組み合わせ、アセンブリを形式検証する試み。

## dev.to
- **[Fine-Tuning Qwen3-8B with Tinker: From 50% to 76% Accuracy, and Burning Through My Budget](https://dev.to/gramli/fine-tuning-qwen3-8b-with-tinker-from-50-to-76-accuracy-and-burning-through-my-budget-48mh)** - Qwen3-8B のファインチューニングで精度を50%から76%に上げた過程と、予算を使い切った教訓の記録。
- **[Requests, Promises, Assertions, and Declarations: Rewriting Our AI Agent Workflow as a 1986 'Committed Speech' Machine](https://dev.to/gde/requests-promises-assertions-and-declarations-rewriting-our-ai-agent-workflow-as-a-1986-4k4c)** - AI エージェントのワークフローを、1986年の言語行為論に基づく「コミットメント」モデルで書き直すアーキテクチャ論。
- **[Gemini 4 Under the Microscope: Red-Teaming AI Agents and Deterministic Dual-Port Remote Control](https://dev.to/gde/gemini-4-under-the-microscope-red-teaming-ai-agents-and-deterministic-dual-port-remote-control-4567)** - Gemini 4 を使った AI エージェントのレッドチーミングと、デュアルポートの決定論的なリモート制御アーキテクチャを扱う。
- **[Your Financial Agent Passed Every Eval. Can You Defend Its Decision?](https://dev.to/dailycontext/your-financial-agent-passed-every-eval-can-you-defend-its-decision-1npg)** - 評価に通った金融エージェントの判断を、説明責任の面で擁護できるかを問う記事。評価と監査可能性の違いを論じる。
- **[Munshi: a WhatsApp front desk for small hotels. A 4B model reads, Python decides, Temporal holds the room.](https://dev.to/arqamwd/my-fine-tuned-4b-lost-to-its-teacher-75-to-875-moving-the-arithmetic-into-code-made-it-30-for-33ka)** - ファインチューニングした4Bモデルが教師モデルに負けたが、算術をコード側に移すと改善したという事例。LLM は読み取り、判断は Python、状態は Temporal という分担。

## TechCrunch
- **[Anthropic says its workforce has become less junior and is spending more time in meetings](https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/)** - Anthropic が自社の人員構成と仕事内容の変化を公表。ジュニア比率の低下など、AI 活用でエンジニアリング組織がどう変わるかを示す一次データ。
- **[An Nvidia insider-turned-VC on why robotics hasn't hit its ChatGPT moment, yet](https://techcrunch.com/video/a-nvidia-insider-turned-vc-on-why-robotics-hasnt-hit-its-chatgpt-moment-yet/)** - 元 NVIDIA のロボティクス担当が、現状を「Lego 時代」と表現。アクチュエーターなど基本部品が揃いつつある段階だという見立て。

※ 他ソースや過去レポートとの重複を除いた新規記事が2件のみだった

## Ars Technica
- **[A Cray-1 supercomputer replica from 30 "obsolete" Mac Minis](https://arstechnica.com/gadgets/2026/10/a-cray-1-supercomputer-replica-from-30-obsolete-mac-minis/)** - スペインのコンピュータ史博物館が、旧式 Mac mini 30台で Cray-1 のレプリカを作った話。ハードウェアの再利用としても面白い事例。
- **[Ukraine's drones knock out AI data center belonging to "Russia's Google"](https://arstechnica.com/gadgets/2026/10/ukraines-drones-knock-out-ai-data-center-belonging-to-russias-google/)** - ドローン攻撃で Yandex の AI 学習用スーパーコンピュータを持つデータセンターが被害を受けた。データセンターの物理的リスクと、過度に集中した構成の脆弱性を示す。同じ文脈で、Ars は別記事でロシアの高度に中央集権化したデジタル経済の脆弱性も論じている。
- **[Amazon has over 1 million robot workers. What's next for human employees?](https://arstechnica.com/ai/2026/10/inside-amazons-robotic-arms-race-and-what-it-means-for-the-future-of-human-work/)** - Amazon が100万台超のロボットを運用する現状と、人間の仕事への影響を解説。

※ 他ソースや過去レポートとの重複を除いた新規記事が3件のみだった

## 注目トピック
エージェント周りの「安全な運用」が引き続き中心的な話題。Qiita では Claude Code の `permissions.deny` や hook による .env・鍵ファイルの保護を実測する記事が並び、設定だけでは止まらないケースがあるという共通認識が見える。dev.to でも、LLM に判断させず算術や状態管理をコードや Temporal に寄せる設計（Munshi）、評価を通っても説明責任を問われるエージェント、といった「LLM の役割を絞る」方向の議論が目立った。Zenn の Agentic RL も、ツール利用を推論時の指示から学習へ移す流れの一例だ。

インフラ面では、Lambda が3種類になったことで使い分けが話題になり、AWS 側でも Control Tower AFT の plan-only 実行や ACM の PrivateLink 対応など、運用の安全性・閉域化を高める更新が続く。一方、Ars Technica の Yandex データセンター記事は、AI インフラの物理的な脆弱性という別の角度を示している。
