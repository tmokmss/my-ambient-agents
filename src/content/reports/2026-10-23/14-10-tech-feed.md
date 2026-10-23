---
title: "Tech Feed ダイジェスト（2026年10月23日）"
date: "2026-10-23T14:10"
category: "summary"
summary: "Onigmo RCE、VPS不正アクセス、Bedrock構造化出力、Tor出口ノード乗っ取り、Plex悪用など開発者向けトピックをまとめた。"
tags: ["security", "aws", "ai", "mcp", "frontend", "devops", "database"]
---

## はてなブックマーク (テクノロジー)
- **[「Ruby」の正規表現エンジン「Onigmo」にリモートコード実行の問題、セキュリティ更新を実施](https://forest.watch.impress.co.jp/docs/news/2150800.html)** ([30users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2150800.html)) - 正規表現エンジン Onigmo にRCEにつながる問題が見つかり、v4.0.9 / v3.4.12 / v3.3.13 が公開された。GitLab での発見が端緒で、Ruby 製ソフトウェアは更新の確認が必要。
- **[「お名前.com」のFX自動売買VPS、不正アクセスで金銭被害か](https://www.itmedia.co.jp/news/article/2610/23/2000002532/)** ([193users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2610/23/2000002532/)) - VPS 利用者から不正アクセスによる損失の報告が相次いでいる。認証情報の管理や管理画面・SSH の公開範囲を見直すきっかけになる事案。
- **[タイムズカー免許証画像流出、「お見舞い」1人3000円　146万人が対象](https://www.nikkei.com/article/DGXZQOUC231CP0T21C26A0000000/)** ([211users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOUC231CP0T21C26A0000000/)) - Web システムへの不正アクセスで本人確認書類の画像が外部送信された件。機微な画像データの保管・アクセス制御設計の重要性を示す。
- **[LLMs are making formal software verification feasible at a much larger scale](https://www.anthropic.com/research/formal-verification)** ([10users](https://b.hatena.ne.jp/entry/s/www.anthropic.com/research/formal-verification)) - Anthropic の研究記事。LLM が証明の記述を支援することで、従来は高コストだった形式検証をより大規模に適用できるようになりつつあるという内容。
- **[IntelliJ IDEAがLSPをしゃべるようになりVS CodeやCursorで使えるようになった](https://zenn.dev/helloyuki/articles/e1e312796f35ed)** ([8users](https://b.hatena.ne.jp/entry/s/zenn.dev/helloyuki/articles/e1e312796f35ed)) - IntelliJ の解析機能が LSP 経由で他エディタから使えるようになった話。エディタとコード解析基盤の分離が進んでいる。

## Zenn
- **[Better AuthをMCPの認可サーバーにして、AI Agent からOAuthでアプリを操作させる](https://zenn.dev/sakagi/articles/8caa896e649005)** - Entra ID の SSO でログインしつつ、AI に渡すトークンは Better Auth の MCP プラグインで自前発行する構成。既定設定で困った点と追加した規則を整理している。
- **[Excel読込をcalamineで19秒→5秒にしたら、別名パッケージ経由のimportだけ壊れた【Python】](https://zenn.dev/cutlet_of_pork/articles/calamine-excel-read-alias-package-import)** - 22,267行×88列の Excel 読込を高速化した際、AI 実装の受け入れ検査で別名パッケージ経由の import だけ失敗した事例。テストが全件通っていても検出できなかった点が教訓。
- **[301 リダイレクトの変更が一部の利用者に反映されない](https://zenn.dev/shinagawa_web/articles/cached-301-stale-redirect)** - nginx で `/docs` の転送先を v3 から v4 に変えても、ブラウザにキャッシュされた 301 のせいで旧版が表示される問題。恒久リダイレクトの変更しにくさを扱う。
- **[Oxlint + Oxfmt で規約をコード化するモノレポ運用](https://zenn.dev/reality_tech/articles/oxc-monorepo-20261006)** - ESLint + Prettier から Biome・Oxc を比較検証し、Oxlint + Oxfmt に移行した記録。lint/format の待ち時間短縮と規約の強制運用を紹介する。
- **[[Flutter]main()を通らない起動ルートで初期化漏れした話](https://zenn.dev/lincwell_inc/articles/ab2a642ea8f6f0)** - User-Agent 付与の小改修を契機に、Android の着信起動など main() を通らない経路で初期化が漏れ、機能が動かなくなった事例。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[canvas上の文字にプロポーショナルメトリクスを適用したい！](https://qiita.com/Kaitou/items/9746c5c262f994c1548c)** - CSS の `font-feature-settings: "palt" 1` を使うことで、canvas 描画でも字詰めを実現できる可能性があるという内容。
- **[【速報】VS Code 1.142 に Canvas が来た！「Interactive Canvases」を整理してみた](https://qiita.com/shahin0809/items/81e6a6737b2254bdc6ed)** - チャット横でエージェントと同じ画面を操作できる Canvas 機能の整理記事。
- **[Security RX Agentがパブリックプレビューになったので、試してみた。](https://qiita.com/seamoooooo/items/db67af6b63029ba32eea)** - New Relic Security RX が検出した脆弱性を AI が分析して修正計画付きの GitHub Issue を作り、コーディングエージェントに渡す流れの検証。
- **[Codexに「承認待ちをDiscordに通知してほしい」と相談して、通知ツールを作ってみた](https://qiita.com/shota_hirano/items/5aa037294434003db2db)** - 承認待ち・入力待ちになったタイミングをスマホの Discord で受け取るための通知ツールを、Codex と相談しながら作った事例。
- **[フロア図の画像1枚とClaude Codeで、Mapboxの屋内地図を作ってみた](https://qiita.com/akiramur/items/ac16f1a58dd7e18516de)** - カスタム Indoor Map をフロア図画像から生成する試み。

## AWS 新着
- **[Structured outputs for Claude models available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)** (2026-10-20) - 全 Claude モデルで bedrock-runtime / bedrock-mantle 両エンドポイントの構造化出力が利用可能に。JSON スキーマ準拠の出力を後処理なしで得やすくなる。
- **[Amazon ElastiCache Serverless for Valkey now supports online migration with zero downtime](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-serverless-valkey-online-migration/)** (2026-10-20) - EC2 上のセルフマネージド Valkey / Redis OSS から、クライアントにエラーを返さずオンライン移行できる。
- **[AWS Lambda durable functions increases durable operation and checkpoint payload limits](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase/)** (2026-10-13) - 1実行あたりの durable operation 上限が 3,000 から 30,000、チェックポイントのペイロードが 256KB から 1MB に拡大。長いワークフローの設計制約が緩む。
- **[AWS announces TorchNeuron: Native PyTorch Support for AWS Trainium (Public Beta)](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-announce-native-pytorch-support-trainium)** (2026-10-20) - Trainium 向けのネイティブ PyTorch バックエンド（OSS）が公開ベータに。標準の PyTorch API で書いたモデルをそのまま Trn2 で動かせる。
- **[Amazon SageMaker AI announces training session APIs for serverless model customization](https://aws.amazon.com/about-aws/whats-new/2026/10/training-session-apis-on-sagemaker-ai)** (2026-10-22) - GPU を管理せずに、ポストトレーニングのアルゴリズムを細かく制御できる API が追加された。

## Lobsters
- **[Docker is weird](https://codeandcake.dev/posts/2026-10-22-docker-is-weird)** (63pt) - Docker の癖や分かりにくい挙動を取り上げた記事（programming タグ、27コメントで議論が活発）。
- **[Please don't mess with links](https://maurycyz.com/misc/real_links/)** (53pt) - Web 上のリンクを書き換えたり、通常の遷移を壊したりする実装への苦言（web タグ）。
- **[UUIDv7 doesn't have the properties you think it does](https://alexsci.com/blog/uuidv7-is-weird/)** (27pt) - UUIDv7 に期待されがちな性質が実は成り立たない点を指摘する記事（distributed タグ）。ID 設計時の前提確認に役立つ。
- **[We have Traits at Home](https://www.axelmagn.com/blog/202610-zig-traits/)** (28pt) - Zig でトレイト風の抽象化を実現する方法を探る記事。
- **[Objects, attributes, maps, oh my](https://bernsteinbear.com/blog/object-shapes/)** (26pt) - オブジェクトのシェイプ（hidden class）とマップの関係を扱うコンパイラ系の解説。

## dev.to
- **[nginx 1.31.5's control API turns a failed reload into an HTTP 422 instead of a log line](https://dev.to/alexgeorgiev17/nginx-1315s-control-api-turns-a-failed-reload-into-an-http-422-instead-of-a-log-line-48bc)** - nginx の新しい制御 API を検証した記事。認証なしの TCP で稼働中の worker PID の取得や設定差し替えが可能だった一方、unix socket 既定では非所有者のアクセスが止まったという。
- **[Agents should never hold your API keys. NVIDIA just open-sourced the runtime that enforces it](https://dev.to/slabb/agents-should-never-hold-your-api-keys-nvidia-just-open-sourced-the-runtime-that-enforces-it-3jm4)** - NVIDIA の OpenShell は、エージェントにカーネルレベルのサンドボックスを与え、認証情報を持たせず、ポリシー変更を Z3 SMT で検証してから人が承認する仕組み。
- **[How to Make RAG Show Its Evidence: Claim Verification at 15M-Document Scale](https://dev.to/rudratosh/a-correct-answer-and-a-confident-lie-look-identical-heres-how-i-made-rag-tell-them-apart-2n45)** - 1,500万文書規模の RAG で、回答の主張を根拠と照合して正しい回答ともっともらしい誤りを見分ける手法。
- **[Generative UI Without the Async Tax: Introducing bloc_signals_genui 1.0](https://dev.to/gde/generative-ui-without-the-async-tax-introducing-blocsignalsgenui-10-3gge)** - Google の A2UI プロトコル上に作った、純 Dart の同期型 Generative UI ステートマシン。Riverpod/BLoC との相互運用にも対応する。
- **[Smaller Simpler Maven Projects](https://dev.to/codenameone/smaller-simpler-maven-projects-4ca5)** - 新規 Maven アプリを root POM と common モジュールだけで始め、必要なときだけプラットフォーム別モジュールを足す構成の提案。

## TechCrunch
- **[Left alone with nothing to do, AI agents started playing](https://techcrunch.com/2026/10/22/left-alone-with-nothing-to-do-ai-agents-started-playing/)** - MIT の研究者が13体の AI を仮想の島に置いたところ、ゲームを発明し、やがて仕事の成績も向上したという実験。
- **[Canva releases its first image generation model](https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model/)** - Canva が初の自社画像生成モデルを全ユーザー向けに提供。カスタマイズ性とコスト面の改善を訴求している。
- **[Arc browser sunsets December 22 as The Browser Company doubles down on Dia](https://techcrunch.com/2026/10/22/arc-browser-sunsets-december-22-as-the-browser-company-doubles-down-on-dia/)** - Arc は12月22日に終了し、開発元は AI ブラウザ Dia に注力する。
- **[Rivian buys world model startup to accelerate self-driving ambitions](https://techcrunch.com/2026/10/22/rivian-buys-world-model-startup-to-accelerate-self-driving-ambitions/)** - Rivian が世界モデルのスタートアップ Third Dimension を買収。実走データと組み合わせてシミュレータ化を狙う。

## Ars Technica
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり333の Tor 出口ノードが乗っ取られ、SSH や平文メールの通信が狙われた。出口で平文が見える点が改めて示された。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - 会話の共有機能から個人・業務上の機密が露出し、Meta は機能を停止して調査中。共有リンクの公開範囲設計の教訓になる。
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みの4つの脆弱性を連鎖させる攻撃で、未パッチの Plex サーバーがマルウェア感染している。
- **[OpenBSD 8.0 arrives with security record still intact](https://arstechnica.com/gadgets/2026/10/openbsd-8-0-lands-with-intel-arc-graphics-support/)** - Intel Arc 対応、ARM64 のハイバネーション、64 vCPU ゲストなどが加わった。
- **[KDE turns 30 with Plasma 6.8, remote upgrades, and an X11 farewell](https://arstechnica.com/gadgets/2026/10/kde-turns-30-with-plasma-6-8-remote-upgrades-and-an-x11-farewell/)** - 30周年の Plasma 6.8 はリモートアップグレードに対応し、X11 セッションに別れを告げる。

## 注目トピック
今回は PHP2Shell・Node.js・eMudhra など直近レポートで扱った話題の続報が多く、重複を避けて別の題材を中心に選んだ。Onigmo の RCE、Plex の連鎖攻撃、Tor 出口ノードの乗っ取りなど、ミドルウェアや基盤の「修正済みだが未適用」の隙を突く事例が目立つ。

AI エージェント周辺では、認可（Better Auth の MCP 認可サーバー）、認証情報を渡さない実行基盤（NVIDIA OpenShell）、RAG の根拠検証といった「エージェントに何をどこまで任せるか」を設計で縛る話が複数のソースに現れた。AWS でも Bedrock の構造化出力や Lambda durable functions の上限拡大など、エージェントや長時間ワークフローを本番で扱う前提の機能追加が続いている。
