---
title: "Tech Feed ダイジェスト（2026年11月9日）"
date: "2026-11-09T00:43"
category: "summary"
summary: "PostgreSQLのロック待ち、DynamoDB bulk put、UEFI脆弱性、AIエージェントの安全設計など8ソースの技術トピックを整理"
tags: ["tech-feed", "aws", "postgresql", "security", "ai", "uefi", "go"]
---

## はてなブックマーク (テクノロジー)

- **[Macのセキュリティの仕組み - 標準機能と安全に使うための対策｜npaka](https://note.com/npaka/n/nae09bd9ce37d)** ([151users](https://b.hatena.ne.jp/entry/s/note.com/npaka/n/nae09bd9ce37d)) - macOS が標準で備えるセキュリティ機構と、それを踏まえた運用上の対策をまとめた解説記事。開発機の防御を見直す際の整理に使える。
- **[iPhoneでmacOSが動くエミュレーター「Henge」公開！](https://smhn.info/202611-henge-macos-emulator-iphone-ipad-release)** ([37users](https://b.hatena.ne.jp/entry/s/smhn.info/202611-henge-macos-emulator-iphone-ipad-release)) - iPhone / iPad 上で macOS を動かすエミュレーターが公開された。モバイル端末上のエミュレーション技術の到達点として注目される。
- **[GitHub - google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model)** ([30users](https://b.hatena.ne.jp/entry/s/github.com/google/elephant-goldfish-model)) - Google による、AI エージェントでソフトウェアを設計・レビューするためのオープンソースのスキル集。エージェント開発の型を共有する動きの一例。
- **[MCP仕様を完全にサポートしたMCP公式のRuby SDKが登場。「MCP SDK Tier 1」に到達と](https://www.publickey1.jp/blog/26/mcpmcpruby_sdkmcp_sdk_tier_1.html)** ([6users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/mcpmcpruby_sdkmcp_sdk_tier_1.html)) - MCP 公式の Ruby SDK が仕様を完全にサポートし、SDK の最上位ランク Tier 1 に到達した。Ruby でも MCP サーバー／クライアントを実装しやすくなる。

## Zenn

- **[SELECTしかしていないのに、PostgreSQLのマイグレーションがロック待ちで失敗した話](https://zenn.dev/naokisuzuki27/articles/cb1a5ac0e23763)** - 放置された SELECT のみのトランザクションが ACCESS SHARE ロックを保持し続け、REINDEX などが要求する ACCESS EXCLUSIVE を待たせた事例。トランザクションを小さく分け、Aurora の `idle_in_transaction_session_timeout` を保険に設定した。
- **[Go の defer の動きをちょっと調べてみた](https://zenn.dev/wakame_atsushi/articles/8c45ac07bac534)** - defer は「登録」時に関数値と引数を評価して保存し、「実行」は関数終了時という2段階であることをコードで確認する。引数の評価タイミングで混乱しやすい点が整理される。
- **[AWSから4.3億円の課金が...バグと思われる高額請求された際にまずすること](https://zenn.dev/tsumita7/articles/aoss-intelligent-ingestion-billing-202610)** - OpenSearch Serverless の Intelligent ingestion 実行後に月額コストが約 $2.78M と表示された事例。高額請求に気づいたときの初動をまとめている。
- **[自宅サーバーにClaude Codeを常駐させ、スマホから24時間指示を出す（Remote Control＋systemd）](https://zenn.dev/samurai_works/articles/114a5e654ca295)** - ポート開放や VPN なしで、自宅 Linux サーバー上の Claude Code を systemd で常駐させスマホから操作する構成。ハマりどころも記載されている。
- **[古代のグラボ（GTX 1080）でも動くローカルLLMを動かしてみた](https://zenn.dev/koheidisney/articles/729394f8be42c5)** - GTX 1080 でローカル LLM を動かし、素のモデルの知識と、資料を渡した場合の道具選択タスクの精度を比較検証している。

## Qiita

- **[東京リージョンで使っていてもバージニア北部に依存しているもの](https://qiita.com/yama3133/items/5416c243e14a5406dd6f)** - 東京リージョン運用でも us-east-1 に依存する設定（例: ロググループを us-east-1 に作る必要があるもの）を洗い出す。2025年10月の us-east-1 障害を受けた棚卸し。冒頭抜粋から読み取れる範囲の紹介。
- **[脆弱性の情報は間に合っている？ 英語は 2 時間以内、悪用は 4 割が 1 日以内、日本語は中央値 4.6 日後。悪用された 74 件を調べて分かった](https://qiita.com/songchong/items/b3c6c879f03f9bb665d3)** - 悪用が確認された脆弱性 74 件について、公表から悪用までの時間と、英語・日本語での情報流通の遅れを比較した調査。
- **[AIエージェントのための git worktree の使い方](https://qiita.com/sf-12/items/34ddfb7d7f245085fb2b)** - 複数のエージェントセッションを並列で動かすと同じファイルを書き換え合う問題を、git worktree で作業ツリーを分けて回避する方法。
- **[【AWS】結果を返すか、答えを返すか。Web SearchとWeb Answerの使い分け【AgentCore】](https://qiita.com/Nana_777/items/6e466fb974972a79a323)** - Bedrock AgentCore が提供するマネージドな Web 検索ツール2種の使い分け。自前で組んでいた検索→取得→要約→出典付けのパイプラインを置き換えられる。
- **[【公式】Pyxel 3.0リリース！世界初（？）レトロ3Dゲームエンジン機能を搭載！](https://qiita.com/kitao/items/af92619297d5563f2a0e)** - Python 向けレトロゲームエンジン Pyxel が約3年ぶりのメジャーアップデートで 3.0 に。レトロ調 3D 機能が加わった。

## AWS 新着

- **[Amazon DynamoDB now supports bulk put items](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-dynamodb-now-supports-bulk-put-items/)** (2026-11-05) - S3 上のデータを既存の DynamoDB テーブルへ書き込むフルマネージド機能が GA。自前のバッチ書き込みコードを減らせる。
- **[AWS Security Hub now provides an SBOM inventory for your compute resources](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-sbom-inventory/)** (2026-11-06) - コンピュートリソース上のソフトウェアパッケージを組織横断で継続的に把握できる SBOM インベントリが Security Hub に追加。
- **[EC2 Amazon Machine Images can now be scanned for vulnerabilities through Amazon Inspector](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-amis-scanned-through-inspector/)** (2026-11-02) - インスタンスを起動したりエージェントを入れたりせずに、AMI 自体の脆弱性をスキャンできる。
- **[AWS Systems Manager Parameter Store now allows organization and validation with built-in data types](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-ssm-parameter-store-allows-organization-validation-with-new-data-types/)** (2026-11-05) - 13 種類の新しいパラメータデータ型が追加され、作成・更新時に値が自動検証される。不正な設定値を入口で弾ける。
- **[IAM Roles Anywhere now supports automatic certificate revocation checking](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-roles-anywhere-cdp/)** (2026-11-05) - CRL 配布ポイント (CDP) を使った証明書失効の自動チェックに対応。失効情報を手動で更新する運用が不要になる。

## Lobsters

- **[A bit about email](https://maurycyz.com/misc/email/)** (32pt) - メールの仕組みについて解説したメール関連の記事。本文は未取得のため、タグ（email）からの紹介にとどめる。
- **[NetBSD 11 desktop on a Raspberry Pi 4](https://neongd.com/articles/netbsd11-rpi4.gmi)** (19pt) - Raspberry Pi 4 上に NetBSD 11 のデスクトップ環境を構築した記録。
- **[Hacking the T-Mobile Sidekick, 20 Years Too Late](https://x86.cx/blog/redanger)** (12pt) - 20 年前の携帯端末 T-Mobile Sidekick を今になって解析するリバースエンジニアリング記事（タグ: retrocomputing, reversing）。
- **[Unattended reboots with encrypted disks](https://jmmv.dev/2026/11/zkeys-intro.html)** (8pt) - ディスクを暗号化したままサーバーを無人で再起動する課題を扱う FreeBSD 向けの話題（タグ: freebsd, security）。

## dev.to

- **[ariaNotify(): talk to screen readers without hacks](https://dev.to/richicodes/arianotify-talk-to-screen-readers-without-hacks-2b5k)** - JavaScript からスクリーンリーダーへ読み上げ内容を直接伝える `ariaNotify()` の紹介。隠し live region が不要になり、2026年9月から Baseline に入っている。
- **[Six Serving Engines, One 8 GB GPU: Gemma 4 E2B on an RTX 3050](https://dev.to/gde/six-serving-engines-one-8-gb-gpu-gemma-4-e2b-on-an-rtx-3050-ad7)** - llama.cpp、vLLM、SGLang、mistral.rs などの推論エンジン6種で、同じ4bit量子化 Gemma 4 E2B を 8GB の RTX 3050 上で比較測定する。
- **[Find the production agent failures that every health check misses](https://dev.to/googlecloud/find-the-production-agent-failures-that-every-health-check-misses-39j8)** - ヘルスチェックでは検知できない本番エージェントの失敗を洗い出し、依頼に応じて原因コード行まで追跡するオープンソースの品質エージェント AQuA。
- **[The model said yes. The chain said no. An on-chain lock for AI agents with wallets](https://dev.to/muhammadmurtuzahussain/the-model-said-yes-the-chain-said-no-an-on-chain-lock-for-ai-agents-with-wallets-2igp)** - Solana devnet で AI エージェントの金庫を説得して引き出させる攻撃を試した検証。モデルの判断に頼らず、オンチェーン側の制約で資金を守る設計を示す。
- **[Training MoE Models Is Complicated. Hugging Face Just Wrote the Manual.](https://dev.to/sizzlebop/training-moe-models-is-complicated-hugging-face-just-wrote-the-manual-nih)** - Mixture of Experts モデルの学習の難しさと、Hugging Face が公開した解説資料を紹介する記事。

## TechCrunch

- **[Underdog shows off a 32MB speech model in new demo](https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/)** - わずか 32MB ながら音声と音楽の両方を生成できる小型モデルのデモ。オンデバイス推論の現実味を高める。
- **[Ramp data shows AI spending stalling just as Anthropic nears its IPO](https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/)** - AI の利用は増え続ける一方で支出は頭打ちになっている。大口利用者の値下げやコスト管理の工夫が背景にあるとされ、AI 利用コストの最適化を考える材料になる。

## Ars Technica

- **[UEFI bootkit infected fully patched Windows machines. Is Microsoft to blame?](https://arstechnica.com/security/2026/11/uefi-bootkit-infected-fully-patched-windows-machines-is-microsoft-to-blame/)** - UEFI ブートキット BlackX が、パッチ適用済みの Windows に感染した。Secure Boot の保護範囲に関する Microsoft の説明の曖昧さが突かれたとされる。
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - EDK2 の重大な欠陥により、ブート初期段階でコードを実行される恐れがある。広範なサーバーに影響する。
- **[Anthropic warns small AI models could self-replicate through IoT devices](https://arstechnica.com/security/2026/10/anthropic-warns-small-ai-models-could-self-replicate-through-iot-devices/)** - 小型の「重みベースの複製体」が IoT 機器を介して自己複製し、新世代のワームになり得ると Anthropic が警告している。
- **[Fujifilm to boost tape production 5x as AI fuels archiving demand](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/)** - AI によるデータ保管需要の増加を受け、富士フイルムが磁気テープの生産を5倍に増やす。低コストとオフライン保管の安全性が評価されている。

## 注目トピック

今回は AI エージェントを安全に動かす設計が複数のソースで目立った。dev.to の「モデルが同意してもオンチェーン側が拒否する」設計、AQuA によるヘルスチェックで見えない失敗の検出、Qiita の git worktree による並列エージェントの衝突回避、Anthropic による IoT 経由の自己複製ワームへの警告など、判断をモデル任せにせず、周辺の仕組みで制約する流れが共通している。AWS 側でも Security Hub の SBOM、Inspector の AMI スキャン、Parameter Store の型検証と、入口で検証・可視化する機能が並んだ。

インフラ層の安全性では、Ars Technica が報じた UEFI の2件（EDK2 の欠陥と BlackX ブートキット）が、パッチ適用済み環境でもファームウェア層が弱点になり得ることを示している。Zenn の PostgreSQL ロック待ちの事例も、障害の原因が目立たない暗黙の資源（放置トランザクション）にあるという点で同じ系統の教訓になる。
