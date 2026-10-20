---
title: "Tech Feed ダイジェスト（2026年10月20日）"
date: "2026-10-20T00:12"
category: "summary"
summary: "Lambda durable functionsの上限10倍、OpenCode APIキー窃取、Claude Codeのアイドル圧縮観測、Plex脆弱性悪用など"
tags: ["aws", "security", "ai", "claude-code", "serverless", "linux", "infrastructure"]
---

## はてなブックマーク (テクノロジー)
- **[GitHub - carnot-tech/jinba-consulting-pptx-skill: AIにまじなPPTXを作らせる Claude Code / Codex スキル](https://github.com/carnot-tech/jinba-consulting-pptx-skill)** ([29users](https://b.hatena.ne.jp/entry/s/github.com/carnot-tech/jinba-consulting-pptx-skill)) - Claude Code / Codex 向けに、実務で使えるレベルの PPTX を生成させるためのスキル。エージェントのスキル機構を使った成果物品質の底上げ事例として参考になる。
- **[OSS Scanner](https://red.anthropic.com/oss-scanner/)** ([8users](https://b.hatena.ne.jp/entry/s/red.anthropic.com/oss-scanner/)) - Anthropic のセキュリティ研究チーム（red.anthropic.com）が公開した OSS 向けスキャナのページ。OSS のセキュリティ検査にAIを使う動きとして押さえておきたい。
- **[AIの思考を潜在空間で実行して高性能化＆高速化＆低コスト化を実現する「Hybrid Reasoning Agents」](https://gigazine.net/news/20261019-hybrid-reasoning-agents/)** ([15users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261019-hybrid-reasoning-agents/)) - 推論をトークン列ではなく潜在空間で実行することで、性能・速度・コストの改善を狙う手法の紹介。
- **[JP Incident Monitor](https://elkentaro.github.io/jp_incidents/)** ([46users](https://b.hatena.ne.jp/entry/s/elkentaro.github.io/jp_incidents/)) - 国内で相次ぐ不正アクセス・情報漏えいなどのインシデントを一覧できるモニタリングページ。立て続けに報じられるインシデントの把握に使える。

## Zenn
- **[Claude Codeの会話を55分放っておいたら、272,422トークンが13,522に圧縮されていました ― アイドル圧縮の観測](https://zenn.dev/ojisan_ai_lab/articles/claude-code-idle-compaction-20261019)** - Claude Code v2.1.299 のリリースノートにあるアイドル圧縮を実測。27万トークンの会話を放置したところ、55.6分後に約1.3万トークンまで圧縮されていたという。キャッシュ失効とコンテキスト管理を考える材料になる。
- **[普段使いのWindows PCでNodeのサーバーを常駐させて踏んだ罠](https://zenn.dev/matasuke_t/articles/bf784b79b29e86)** - 通常のPCで Node.js バックエンド・Vite・Puppeteer を24時間動かした際の運用の罠。タスクスケジューラの「起動時」トリガーしか設定しておらず、35時間停止していた事例など。
- **[AI時代、配布するPythonコードをどう守るか: 難読化の実験と判断軸](https://zenn.dev/pksha/articles/0f9c11d1daea2e)** - PyCon JP 2026 の発表を元に、配布する Python コードの難読化を実験して判断軸を整理した記事。
- **[ポートフォリオをVoidで作り直したので、Voidの来歴と中身を整理する](https://zenn.dev/nkzn/articles/my-first-void)** - 2026年10月15日の Cloudflare ブログ「Deploy with Void」を受け、VoidZero 製の Void でサイトを作り直した記録。Next.js → Expo Router → Astro と遍歴した構成との比較も含む。
- **[Claude Codeでプロンプトインジェクションに備える](https://zenn.dev/luxiar/articles/a341a2df29dcfe)** - 開発者個人が Claude Code 利用時にできるプロンプトインジェクション対策を整理した記事。

## Qiita
- **[M5Stamp P4（ESP32-P4）でMMUなしのLinux 7.2を動かし、Wi-FiとSSHまで通した話【AIと250コミット】](https://qiita.com/tsuyoshi-otake/items/91ef586f1a1a689b0842)** - MMU のない RISC-V 上で Linux 7.2.11 を動かし、Wi-Fi・SSH・vi・MicroPython まで使えるようにしたディストリビューション開発記（冒頭抜粋より）。
- **[【Lambda Web Functions × CloudFront OAC】Lambda Web Functionsを使えばx-amz-content-sha256なしのPOSTが403になる問題が解決します！](https://qiita.com/yosuke-suzuki/items/68c533536352475c4b4e)** - Lambda Web Adapter + Function URL + CloudFront 構成で OAC を付けると POST だけ 403 になる問題を、Lambda Web Functions で解決するトラブルシューティング。
- **[New RelicのEvents to Metricsで、8日で消えるイベントからSLIを13ヶ月残す](https://qiita.com/zucky-quest/items/3e6efda07e067ffb4ac4)** - プラン上イベントが8日で消えるため、Events to Metrics で月次SLI（可用性・p95応答時間）を長期保存する方法。
- **[every() が true でも「データが全件合格」とは限らない — 空配列・穴・asyncの確認](https://qiita.com/ennagara128/items/c732b0baf8f7f1770ff9)** - 空配列では `every` が true を返すため、データ未到着でも判定を通ってしまう落とし穴を Node.js v24 で検証。
- **[NextAuthを使わずにGoogle連携をスクラッチ実装して、OAuth 2.0の仕組みを理解した](https://qiita.com/keikeigo/items/7d2eb02a9588e4deeb22)** - ライブラリに頼らず Google ログインを自前実装し、OAuth 2.0 のフローを理解する実装記録。

## AWS 新着
- **[AWS Lambda durable functions increases durable operation and checkpoint payload limits](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase/)** (2026-10-13) - 1実行あたりの durable operation 上限が 3,000 → 30,000、チェックポイントのペイロード上限が 256KB → 1MB に引き上げ。長い・大きなワークフローの設計制約が緩む。
- **[AWS IAM Identity Center now supports optimistic locking for users and groups in its identity store](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-store-optimistic-locking/)** (2026-10-19) - Identity store のユーザー／グループ更新で楽観ロックに対応し、同時更新による上書きを防げる。
- **[EC2 Image Builder now integrates with ASG for faster image builds](https://aws.amazon.com/about-aws/whats-new/2026/10/ec2-image-builder-asg-faster-builds/)** (2026-10-19) - 既存の Auto Scaling Group のインスタンスをイメージ作成に使え、新規起動とブートストラップの時間を省ける。
- **[Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/)** (2026-10-13) - 実際に稼働中のタスク数を示す新メトリクス LiveTaskCount を追加（追加料金なし）。あわせて RunningTaskCount の課金が廃止された。
- **[Amazon GuardDuty RDS Protection now detects data exfiltration and destruction in Aurora and RDS databases](https://aws.amazon.com/about-aws/whats-new/2026/10/guardduty-rds-data-exfiltration/)** (2026-10-08) - RDS Protection がログイン異常に加え、Aurora PostgreSQL などへのデータ持ち出し・破壊攻撃も検知対象に。

## Lobsters
- **[Wine ported to OpenBSD](https://marc.info/?l=openbsd-ports&m=179236125692175)** (80pt) - OpenBSD ports メーリングリストで Wine の移植が報告された。OpenBSD で Windows アプリを動かす道が開く話題。
- **[Outside the Scope of Our Support](https://fireborn.mataroa.blog/blog/outside-the-scope-of-our-support/)** (59pt) - アクセシビリティ（a11y）と Android に関するタグの記事。サポート範囲外とされる問題を扱っている。
- **[One Hash Bloom Filters](https://www.calabro.io/ohbf)** (39pt) - 1つのハッシュだけで構成する Bloom Filter 手法についての記事（compsci / databases タグ）。
- **[What the heck is /pkg?](https://anderegg.ca/2026/10/18/what-the-heck-is-pkg)** (30pt) - macOS の `/pkg` ディレクトリの正体を探る Unix 系の掘り下げ記事。
- **[Beginning of the Ende (a community Deno fork)](https://blog.webb.page/WM-105)** (29pt) - Deno のコミュニティフォーク「Ende」の始動を伝える記事。JavaScript ランタイムの勢力図の変化に注目。

## dev.to
- **[Small Apache-2.0 Models Against Gemma 4 E2B on One TPU v5e: Which Ones Keep Up?](https://dev.to/gde/small-apache-20-models-against-gemma-4-e2b-on-one-tpu-v5e-which-ones-keep-up-mm4)** - TPU v5e 1チップに載る Apache-2.0 / MIT のオープンウェイトモデル14種を vLLM で配信し、GSM8K と BFCL で Gemma 4 E2B と比較した検証。
- **[Writing C for the Web in 2026 Isn't Insane. It Might Be the Future](https://dev.to/james_anderson_h/writing-c-for-the-web-in-2026-isnt-insane-it-might-be-the-future-529c)** - ユーザーアカウントや決済を備えた商用Webプロダクトが C で書かれた事例を起点に、Web での C 採用を論じる。
- **["Rails Magic" Isn't Magic. How a Request Actually Travels Through Rails.](https://dev.to/smtahosin/rails-magic-isnt-magic-how-a-request-actually-travels-through-rails-5gc5)** - Rack ミドルウェアや Zeitwerk のオートロード、ActiveRecord のスキーマ反映まで、リクエストが Rails を通る流れを図解。
- **[I built an AWS agent that scores any GitHub repo before you clone it](https://dev.to/aws-builders/i-built-an-aws-agent-that-scores-any-github-repo-before-you-clone-it-4omp)** - AI スキルや MCP サーバーを装う偽リポジトリが増える中、Lambda と Bedrock で clone 前にリポジトリを0〜100点で採点するエージェント。
- **[I put a logging proxy in front of an LLM client: here's what it emitted](https://dev.to/slabb/i-put-a-logging-proxy-in-front-of-an-llm-client-heres-what-it-emitted-5dii)** - LLM クライアントの前にロギングプロキシを置き、クライアントが送出するマシン情報やリトライの挙動を実際のキャプチャで確認する。

## TechCrunch
- **[Hackers hit AI coding tool OpenCode, running up charges on users' AI accounts](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/)** - OSS の AI コーディングエージェント OpenCode のオンラインプラットフォームの一部が侵害され、ユーザーの API キーが盗まれて AI アカウントに不正課金が発生した。キーの保管・ローテーションを見直す契機になる。
- **[Amazon is taking its biggest shot at Nvidia yet with new TorchNeuron dev tool](https://techcrunch.com/2026/10/19/amazon-is-taking-its-biggest-shot-at-nvidia-yet-with-new-torchneuron-dev-tool/)** - PyTorch アプリを Nvidia 以外の自社チップなどで動かしやすくする Amazon の開発者ツール。
- **[Microsoft says AI agents are like insider threats as 'frontier models can't be trusted'](https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/)** - Microsoft は、従業員が使う AI エージェントを内部脅威に近い存在として監視すべきだと主張している。
- **[Tenstorrent hits $6.2B valuation to scale open-weight AI chips](https://techcrunch.com/2026/10/19/tenstorrent-hits-6-2b-valuation-to-scale-open-weight-ai-chips/)** - Nvidia の対抗馬 Tenstorrent が15億ドルを調達し、買収を避けて独立を維持。AI チップの選択肢が広がる動き。

## Ars Technica
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みの Plex の4つの脆弱性を連鎖させ、未パッチのサーバーにマルウェアを仕込む攻撃が確認された。
- **[Fridge hack costing millions and sparking fires stemmed from poor security](https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/)** - 700店舗のスーパーに被害が出た冷蔵庫のハッキングは、インターネットに露出した旧式機器が原因だった。IoT の露出管理の教訓。
- **[KDE turns 30 with Plasma 6.8, remote upgrades, and an X11 farewell](https://arstechnica.com/gadgets/2026/10/kde-turns-30-with-plasma-6-8-remote-upgrades-and-an-x11-farewell/)** - KDE 30周年の Plasma 6.8 は、リモートアップグレードと X11 サポートの終了が目玉。
- **[Memory executives expect RAM shortage to continue through 2028](https://arstechnica.com/information-technology/2026/10/memory-supplies-are-only-getting-tighter-micron-ceo-says/)** - Micron の CEO は、2027年向けのメモリ価格が2026年より大幅に高いとし、供給逼迫が2028年まで続くと見る。インフラのコスト計画に影響しうる。
- **[Florida DMV hacked after police dept insecurely stored login info](https://arstechnica.com/tech-policy/2026/10/huge-dmv-data-breach-impacted-current-and-former-florida-residents/)** - 警察署が認証情報を不適切に保管していたことが原因で、フロリダ州の DMV で ShinyHunters 関連の大規模情報漏えいが発生した。

## 注目トピック
AI エージェントを取り巻く「認証情報・権限の管理」が今日の共通テーマ。OpenCode では API キーが盗まれ、Microsoft はエージェントを内部脅威として扱うよう促し、Zenn / Qiita でも Claude Code の権限設定やプロンプトインジェクション対策が話題になっている。エージェントに渡す鍵と権限を最小化する設計が実務上の課題になっている。

インフラ面では、Lambda durable functions の上限10倍拡大や Lambda Web Functions の実運用知見（CloudFront OAC の 403 問題）が出ており、サーバーレスで長時間・大規模ワークフローを扱う選択肢が広がっている。一方で Micron の見通しではメモリ逼迫が2028年まで続く可能性があり、AI チップ競争（TorchNeuron、Tenstorrent）と合わせてコスト設計に影響しそうだ。
