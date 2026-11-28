---
title: "Tech Feed ダイジェスト（2026年11月28日 夕）"
date: "2026-11-28T17:28"
category: "summary"
summary: "GGUFのチャットテンプレート汚染、GitHub Actions lockfile、AIが書くテストとTLA+、CloudWatchのOTel補強などを収録"
tags: ["security", "ai", "github-actions", "aws", "formal-methods", "webkit", "rust", "llm"]
---

## はてなブックマーク (テクノロジー)
- **[古い PHP / Laravel の脆弱性対応は、Rector と AI でだいたい簡単に終わる](https://zenn.dev/miraizuk/articles/ae8db2bc3ff561)** ([93users](https://b.hatena.ne.jp/entry/s/zenn.dev/miraizuk/articles/ae8db2bc3ff561)) - サポート切れバージョンにはセキュリティ修正が出ないため、個別パッチではなく「サポート対象バージョンまで上げる」ことが脆弱性対応の本体だと整理。Rector による機械的な書き換えと、残りを AI に直させる手順を紹介している。
- **[パスキーは最強で美しいよ、正しく実装すればね](https://zenn.dev/kantacky/articles/b5a03eab70c7b1)** ([50users](https://b.hatena.ne.jp/entry/s/zenn.dev/kantacky/articles/b5a03eab70c7b1)) - 偽サイトを中継する AiTM 型のリアルタイムフィッシングは、SMS や認証アプリによる2段階認証でも突破される。その前提から、パスキーを正しく実装する意義を説く。
- **[GitHub Actions の lockfile と workflow 定義がずれたとき何が起こるのか](https://blog.re-taro.dev/p/01M7MSE6RTX3ZBPPK94XZC6ZZW/)** ([22users](https://b.hatena.ne.jp/entry/s/blog.re-taro.dev/p/01M7MSE6RTX3ZBPPK94XZC6ZZW/)) - `gh actions-lock` で生成する workflow dependency lockfile（action と commit SHA を記録）について、lockfile と workflow 定義が食い違った状態で実行するとどうなるかを検証用リポジトリで確かめた記録。tag の付け替えによるサプライチェーン攻撃への対策として、挙動を事前に把握するのに役立つ。
- **[GGUF LLM Models with Hidden Malware on Hugging Face Reached 2400+ Victims](https://malspark.com/blog/malicious-gguf-models-hugging-face/)** ([5users](https://b.hatena.ne.jp/entry/s/malspark.com/blog/malicious-gguf-models-hugging-face/)) - Hugging Face の公開リポジトリ約327万件を走査し、悪性モデル5件（計2,428回ダウンロード）を発見。GGUF の最後のテンソルの後ろに Windows の RAT を隠し、チャットテンプレートで展開コマンドを出力させる手口（チャットテンプレート汚染）を解説している。
- **[1時間で作るPerlOS: Yet Another Perl Computer](https://zenn.dev/takesako/articles/8623cbed6c1bb6)** ([18users](https://b.hatena.ne.jp/entry/s/zenn.dev/takesako/articles/8623cbed6c1bb6)) - 組み込み用の Perl 処理系 microperl を自作 OS に組み込み、起動すると Perl のシェルが使える状態にする手順。QEMU のシリアルコンソールに文字を出すところから、printf のないベアメタル環境を順に作っていく。

## Zenn
- **[[tauri] Android で端末内のメディアファイルの一覧を読み取る](https://zenn.dev/oka_yu/articles/7da254086a2986)** - Tauri 公式の File system / Dialog プラグインは Android の独特なファイルシステムを抽象化してくれるが、複数アプリが共有する公開ディレクトリのような一部機能は Android 固有の制限で使えない。その回避を扱う。
- **[[JSC] 数値で構成される配列に対して Array.prototype.flat を高速にした](https://zenn.dev/itsu_dev/articles/1942c82c2f2e27)** - WebKit/JavaScriptCore の `Array.prototype.flat` に対し、数値配列向けの最適化パッチを入れた解説。従来は全配列で「再帰的にサイズ計算 → メモリ確保 → コピー」を行っていた処理を、数値配列では短縮している。
- **[【TLA+】AIにテストケースを書かせるな。ルールを書け](https://zenn.dev/karamage/articles/73027ee36796dc)** - AI が実装もテストも書くと「自作自演の満点」になり、テストオラクル問題が生じると指摘。TLA+ 系言語 Quint で小さな例を実際に動かし、人間はテストケースではなく守るべきルール（仕様）を書くべきだと主張する。
- **[「日本語で」と指示しても英語に戻るClaude Codeに、Stopフックで対処してみた](https://zenn.dev/hitori_pm/articles/cc955887656339)** - CLAUDE.md に日本語での返答を書いても作業が続くうちに英語が混じる問題に対し、指示を足すのではなく Stop フックという仕組みで検知・対処した事例。
- **[作業を止めずに進めるClaude Codeの/btw・/fork・/rewindなどの使い分け](https://zenn.dev/nextbeat/articles/b0ccca979da06b)** - 名前が似ていて迷いやすい `/btw`、`/branch`、`/fork` などを、作業中に横から質問する、別案を試すといった用途別に整理している。

## Qiita
- **[定理証明支援系 Lean で、Web アプリケーションの認可を網羅的に検証する](https://qiita.com/keleveni/items/ad2aae81f1dd45960bf0)** - Lean をほぼ触ったことがない筆者が、「Lean を Web アプリに使う」というアイデアを試し、認可ロジックの検証に適用した記事（冒頭抜粋から読み取れる範囲）。
- **[WebAssemblyに最適な言語は？Rust?C++?アセンブリ?機械語?.wasm生成?](https://qiita.com/yangon/items/054180b01a7caf4fc735)** - 同一仕様の3Dゲームエンジンを Rust / C / C++ / アセンブリ / 16進手書きの機械語 / .wasm 直接生成の6通りで実装し、PC・Android・iPhone の実機ブラウザで計測。冒頭の結論は「言語ではほぼ差がつかなかった」。
- **[Claude Code の Skill で「根拠のない指摘」を出さない SEO 監査を作る](https://qiita.com/palafonda67/items/e3cea9a483a4335f9e6c)** - LLM に SEO を見せると、150文字ある meta description を「短すぎる」と言うなど未検証の指摘が混ざる問題に対し、SKILL.md と検証スクリプトで根拠を確認させる構成を全文公開（冒頭抜粋ベース）。
- **[高校生がAIと作り直した関数型言語「Zenith」 — 括弧を消すために「レベル」を持たせた話](https://qiita.com/nezumickey/items/7fe0d1630ecff5000e6a)** - 型情報で式を区切る旧方式を捨て、「レベル宣言」という仕組みで括弧を不要にした自作言語の設計変更の記録。
- **[Claude Designに画面設計書とデザインシステムを渡したら、実装を見据えたUIモックを作れるのか？](https://qiita.com/ShokiSasaki/items/ad82b12f0e51c1f9f5f9)** - 生成 AI による UI 生成で、1画面だけでなく設計書とデザインシステムを与えて実装を見据えたモックを作れるかを検証した記事（冒頭抜粋から読み取れる範囲）。

## AWS 新着
- **[Amazon CloudWatch announces basic OpenTelemetry enrichment at no additional cost](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-opentelemetry-enrichment/)** (2026-11-27) - AWS サービスが CloudWatch に出すメトリクスを、追加料金なしで OpenTelemetry 形式に補強して扱えるようにする。
- **[Amazon API Gateway announces API Portal](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-announces-api-portal/)** (2026-11-23) - API Gateway、ALB、CloudFront の背後にある API や AI エンドポイントを発見・管理・ドキュメント化する新機能。
- **[AWS Sign-In introduces configurable Sign-in duration of up to 90 days](https://aws.amazon.com/about-aws/whats-new/2026/11/configurable-aws-sign-in-duration/)** (2026-11-23) - 開発者や AI エージェントが最長90日間、頻繁な再サインインや同意プロンプトなしで認証状態を保てるよう、管理者がサインイン期間を設定できる。
- **[AWS WAF introduces simplified pricing](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-introduces-simplified-pricing/)** (2026-11-23) - 従来の web ACL・ルール・ルールグループ・キャパシティごとの課金をやめ、「何を保護するか」に応じた課金体系に変更する。
- **[Amazon Transcribe announces a synchronous transcription API](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)** (2026-11-20) - 音声ファイルを1リクエストで送り、同じレスポンスで全文の文字起こしを受け取れる `TranscribeAudio` API。ジョブ管理が不要になる。

## Lobsters
- **[Hard Drive pricing has gotten bad](https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/)** (66pt) - ブラックフライデーの時期に HDD の価格が不自然なほど高いと指摘するハードウェア記事。セルフホストやストレージ構成の判断材料になる。
- **[Objections to .php application being published on ICANN site](https://pub.roddie.digital/3n3aavxi6hc2g)** (50pt) - `.php` を TLD として申請する案件への異議を扱うウェブ関連の投稿。
- **[Tiny Hat: a new Linux distro dedicated to retro gamedev](https://roboticoverlords.org/tinyhat)** (54pt) - レトロゲーム開発に特化した新しい Linux ディストリビューションの紹介。
- **[So, I rewrote my game in C3](https://www.madrigalgames.com/blog/so-i-rewrote-my-game-in-c3/)** (25pt) - 自作ゲームを C 系言語 C3 で書き直した体験記。
- **[Spotify September Outage: What we learnt](https://engineering.atspotify.com/2026/11/september-29-outage-incident-report-what-we-learnt)** (1pt) - Spotify Engineering による9月29日の障害のインシデントレポート。スコアは低いが、ポストモーテムとして目を通す価値がある。

## dev.to
- **[I killed a SQLite writer mid-commit to see what would survive](https://dev.to/alexgeorgiev17/i-killed-a-sqlite-writer-mid-commit-to-see-what-would-survive-b38)** - WAL モードの SQLite を意図的に壊す実験。未コミットのトランザクションはきれいに消える一方、健全な WAL ファイルの末尾を200バイト切ると、壊れた部分だけでなく50行のコミット全体が失われた。
- **[I measured the context cost of 13,658 live MCP servers — most are cheap, a few eat your whole window](https://dev.to/serverdex/i-measured-the-context-cost-of-13658-live-mcp-servers-most-are-cheap-a-few-eat-your-whole-window-3kp0)** - 稼働中の MCP サーバー13,658件を対象に、接続しただけで消費されるコンテキストを計測。大半は軽いが、一部はウィンドウ全体を食い潰すという。
- **[Fast multimodal control flow with the Gemini Decisions API](https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b)** - テキストを書かせるのではなく、ツールの選択やルーティングの分岐だけが必要なアプリ向けに、Gemini Decisions API で高速にマルチモーダルな制御フローを組む方法。
- **[C# 15 Unpacked: Closed Hierarchies, the Members-Only Club for Your Classes](https://dev.to/georgekobaidze/c-15-unpacked-closed-hierarchies-the-members-only-club-for-your-classes-58dc)** - C# 15 の closed hierarchies（継承できるクラスを限定する機能）を、コード例付きで解説するシリーズの1本。
- **[How Containers Work: Building a Container Runtime in Go](https://dev.to/karanpratapsingh/how-containers-work-building-a-container-runtime-in-go-4687)** - `docker run alpine sh` が「小さな VM の起動」ではなく Linux の隔離機能で実現されていることを、Go でコンテナランタイムを自作して示す。

## TechCrunch
- **[Sakana AI's CEO says its homegrown models are about more than Japan's national security](https://techcrunch.com/2026/11/28/sakana-ais-ceo-says-its-homegrown-models-are-about-more-than-japans-national-security/)** - Sakana AI の CEO が、国産 AI モデルを国家安全保障だけでなく日本の産業競争力の強化に結びつける狙いを語るインタビュー記事。

※ 72時間以内の記事は大半が直近レポートで既出か、資金調達・金融・消費者向けの話題だったため、新規の採用は1件のみ。

## Ars Technica
- **[One terminal command gave my forgotten Android device a desk job](https://arstechnica.com/gadgets/2026/11/one-terminal-command-gave-my-forgotten-android-device-a-desk-job/)** - オープンソースのダッシュボード PhoneBox を使い、使わなくなった Android 端末を再び仕事用の画面として活用する方法（公開は約101時間前）。

※ 72時間以内の新規の技術記事が不足したため範囲を広げたが、7日以内でも新規で基準を満たす記事は上記1件のみ。

## 注目トピック
今回目立ったのは、AI を取り巻くサプライチェーンと検証の問題だ。Hugging Face 上の GGUF にマルウェアを埋め込み、チャットテンプレートで実行コマンドを出させる手口（チャットテンプレート汚染）が約327万リポジトリの走査で見つかった。GitHub Actions の workflow dependency lockfile も、tag の付け替えによる CI シークレット漏洩のような事件への備えとして検証記事が出ている。ローカルモデルや CI の依存を「信頼して使う」前提が揺らいでおり、固定と検証を仕組みに入れる流れが強まっている。

AI が実装もテストも書く時代の品質保証も話題になった。Zenn の TLA+ / Quint の記事は、AI によるテストが「自作自演の満点」になりやすいため、人間はテストケースではなく守るべきルールを書くべきだと論じる。Claude Code の Stop フックや、根拠を検証する Skill による SEO 監査も、プロンプトで頼むより仕組みで縛るアプローチだ。dev.to では13,658件の MCP サーバーのコンテキスト消費を計測した調査も出ており、エージェント周辺の設計を測定して判断する動きが広がっている。
