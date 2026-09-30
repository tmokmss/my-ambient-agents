---
title: "Tech Feed ダイジェスト（2026年9月30日）"
date: "2026-09-30T00:18"
category: "summary"
summary: "Git 2.56/3.0 計画、WSL containers GA、Next.js の CSP nonce 落とし穴、EventBridge 刷新、BGP ハイジャックなど"
tags: ["git", "wsl", "aws", "security", "nextjs", "rust", "codex", "cloudflare"]
---

## はてなブックマーク (テクノロジー)
- **[「証明」によりAIの誤りを阻止しGPU上で動作する高速プログラミング言語「Bend」](https://gigazine.net/news/20260930-bend-lang/)** ([16users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260930-bend-lang/)) - C 並みの処理速度と CUDA による並列実行、Lean による形式的証明、Python 風構文を組み合わせた言語の紹介。AI 生成コードの正しさを証明で担保するアプローチとして注目される。
- **[Git 2.56.0の新機能とGit 3.0リリース計画の概要](https://about.gitlab.com/ja-jp/blog/whats-new-in-git-2-56-0/)** ([21users](https://b.hatena.ne.jp/entry/s/about.gitlab.com/ja-jp/blog/whats-new-in-git-2-56-0/)) - GitLab による Git 2.56.0 の新機能解説で、Git 3.0 に向けたリリース計画も扱う。互換性に影響しうる変更の予告として押さえておきたい。
- **[WSL containers is now generally available](https://blogs.windows.com/windowsdeveloper/2026/09/29/wsl-containers-now-generally-available/)** ([6users](https://b.hatena.ne.jp/entry/s/blogs.windows.com/windowsdeveloper/2026/09/29/wsl-containers-now-generally-available/)) - Windows の WSL 上でコンテナを扱う機能 WSL containers が GA。Windows での開発環境構成に影響する。
- **[「Microsoft Learn」の公開ドキュメントリポジトリ、多くが年内に終了へ](https://forest.watch.impress.co.jp/docs/news/2143945.html)** ([24users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2143945.html)) - 廃止対象では GitHub 経由の修正提案ができなくなる。ドキュメントへの PR 運用に頼っていた人は影響を確認したい。

## Zenn
- **[すこし踏み込む CancellationToken](https://zenn.dev/poipoionigiri/articles/3826f7675d39fd)** - C# Kaigi 2026 の登壇資料の紹介。.NET の協調的キャンセルの内部実装を、Python・Go・Rust と比較しながら解説する。
- **[Cloudflare Birthday Week 2026 Day1](https://zenn.dev/remotive/articles/cloudflare-birthday-week-2026-day1)** - Cloudflare の 16 周年の発表週について、初日の内容（Wrangler 関連など）をまとめた記事。
- **[別会社の開発チームに AWS 環境を共有するのって大変だ](https://zenn.dev/dress_code/articles/f89590d105ba5f)** - 社外パートナーに DB 確認やバッチ実行などの動作検証をさせたい場面で、アカウント管理・退職時の削除・監査ログをどう扱うか、という実務上の悩みを整理する。
- **[Cloudflare 上で Jev で作るほぼ0円運用可能な高品質なページ内検索](https://zenn.dev/mazrean/articles/bd9b563ace18db)** - Go Proposal Weekly Digest を Cloudflare 上で金銭負担なく運用する構成の一部として、サイト内検索を作る話。
- **[クロスプラットフォームアプリのためのiPhone Duoレビュー](https://zenn.dev/rdlabo/articles/iphone-duo-cross-platform-introduction)** - 折りたたみ端末 iPhone Duo への対応を、SwiftUI の検証アプリで確認した記録。ツールバー、タブ配置、メニュー、背景アニメーションの挙動を観察している。

## Qiita
- **[本番でボタンが全部無反応だった——CSP の nonce と force-static は両立しない（Next.js App Router）](https://qiita.com/sz_tak/items/bc1a124d90f1eac0c80a)** - リクエストごとに nonce を発行する CSP と、一部ページの静的化（force-static）が両立しないことが原因。冒頭抜粋によると、結論はその 2 つの併用が不可という点。
- **[個人開発のMinecraft監視アプリに負荷試験をしてみた](https://qiita.com/jqit-yukiono/items/a8d8177d02cc4f7f2553)** - 読み取り専用のはずの API が、実は毎回 DB へ書き込んでいたという発見を、負荷試験を通じて報告している。
- **[正確に取れない数字は出さない — 4,000社の財務データで選んだ「諦めて注記する」設計](https://qiita.com/edinetty/items/6b1f2ba5ed8c75fd0141)** - EDINET の有価証券報告書を扱う個人運営サイトで、正確に取得できない数値は表示せず注記にとどめる設計判断を紹介する。
- **[画像生成を使わずにアーキ図をAIに描かせる](https://qiita.com/sc-nakamura/items/8fdef470b4bfcb95eb53)** - .drawio.png が画像でありながら draw.io で編集できる仕組みに着目し、AI に draw.io の XML を生成させる方法を探る。
- **[荒れたテストケースをコード管理で立て直してみた](https://qiita.com/hamham999/items/ebee7540a82db6933854)** - モバイルアプリのリリース前手動テストのケースをスプレッドシートで管理して破綻しかけたため、ケースをコードで管理し、実施だけをスプレッドシートで行う形に改めた話。

## AWS 新着
- **[Amazon EventBridge relaunches event buses for enterprise scale](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)** (2026-09-24) - 拡張された Custom event bus が登場し、チーム間を疎結合にしたままエンタープライズ規模のイベント駆動アプリを構築できる。
- **[Amazon Kinesis Data Streams announces Service-Managed Partition Keys](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys)** (2026-09-23) - On-Demand Standard / Advantage ストリームで、パーティションキーを自前で設計しなくてもレコードがシャードへ自動分散される。
- **[Amazon SNS now supports message payloads up to 1 MiB](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sns-1mib-support)** (2026-09-18) - メッセージサイズ上限が 256 KiB から 4 倍の 1 MiB に拡大。大きなペイロードを S3 に逃がす設計を見直せる場合がある。
- **[Amazon ElastiCache Serverless for Valkey now supports public endpoints](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-elasticache-serverless-public-endpoints/)** (2026-09-29) - ノート PC や AWS 外のアプリからキャッシュへ直接接続できるようになった。公開時の認証・暗号化設定には注意が必要。
- **[Amazon Corretto 27 is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-corretto-27-generally-available/)** (2026-09-17) - OpenJDK ディストリビューションの Feature Release 版 Corretto 27 が GA。

## Lobsters
- **[Pining for Arc Downcasting in Rust](https://wolfgirl.dev/blog/2026-09-29-pining-for-arc-downcasting-in-rust/)** (27pt) - Rust で Arc に包んだトレイトオブジェクトをダウンキャストする際の制約と欲しい機能について論じる。
- **[My experience writing automated tests for a SPA](https://reecoute.fr/tech_blog/2026-09-28_my-experience-writing-automated-tests-for-a-spa)** (31pt) - SPA の自動テストを書いた経験談。testing / web タグの記事。
- **[Getting root on OnePlus 15 from an untrusted app](https://blog.nns.ee/2026/09/24/oneplus-root/)** (9pt) - 信頼されていないアプリから OnePlus 15 の root 権限を取得する脆弱性の報告。
- **[Deser: Rethinking Rust Serialization](https://lucumr.pocoo.org/2026/9/29/deser/)** (4pt) - Armin Ronacher による Rust のシリアライズ設計の再考。

## dev.to
- **[Code Review Is Not an Authority Boundary](https://dev.to/kenwalger/code-review-is-not-an-authority-boundary)** - コードレビューは権限境界の代わりにならない、という主張。security / WebAssembly / AI エージェントの文脈で語られる。
- **[Retrieval is a routing problem. Your RAG stack just hides it.](https://dev.to/tokenlat/retrieval-is-a-routing-problem-your-rag-stack-just-hides-it)** - RAG の検索は本質的にルーティング問題であり、スタックがそれを隠しているだけだという設計論。
- **[React 19 useFormStatus Returning False? I Built a SubmitButton That Fixes It](https://dev.to/shubhradev/react-19-useformstatus-returning-false-i-built-a-submitbutton-that-fixes-it)** - React 19 の useFormStatus が期待通りに動かない問題への対処として、SubmitButton コンポーネントを作った話。
- **[Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs)** - Dart の enhanced enum をファクトリとして扱い、コンストラクタ tear-off を活用する技法。
- **[Stop Waiting for GitHub Actions: Make Your CI Faster Today](https://dev.to/johnnylemonny/stop-waiting-for-github-actions-make-your-ci-faster-today)** - GitHub Actions の待ち時間を短縮する実践的なチューニング集。

## TechCrunch
- **[OpenAI gives Codex reusable cloud environments that work across devices](https://techcrunch.com/2026/09/29/openai-gives-codex-reusable-cloud-environments-that-work-across-devices/)** - Codex に再利用可能なクラウド開発環境が加わり、音声操作対応の CLI 刷新、コードレビュー機能、リポジトリスキャン用のセキュリティ製品も発表された。同じ発表群には GPT-6.1 Sol やエージェント「Dots」も含まれる。
- **[Your car and its mobile app are probably handing over all kinds of data to tech companies](https://techcrunch.com/2026/09/29/your-car-and-its-mobile-app-are-probably-handing-over-all-kinds-of-data-to-tech-companies/)** - Northeastern University の研究で、車両と付属アプリが大手テック企業に詳細なデータを共有している実態が示された。Ars Technica も同じ調査を別角度で報じている。
- **[Can a chatbot fix the government maze? The White House is about to find out](https://techcrunch.com/2026/09/29/can-a-chatbot-fix-the-government-maze-the-white-house-is-about-to-find-out/)** - 政府サイト America.gov に LLM チャットボットが導入される。ハルシネーションが行政手続きに新たな問題を生むリスクを指摘している。

## Ars Technica
- **[BGP hijack infecting networks caused by a comedy of errors that's not funny at all](https://arstechnica.com/security/2026/09/well-executed-bgp-attack-uses-hijacked-ips-to-infect-real-networks/)** - ハイジャックした IP を使って実ネットワークに感染させた BGP 攻撃。本番ソフトウェアが汚染された事例から学べる点を解説する。
- **[Four groups caught using the same Chrome and Windows exploit kit](https://arstechnica.com/information-technology/2026/09/4-groups-caught-using-the-same-chrome-and-windows-exploit-kit/)** - 4 つの攻撃グループが同じ Chrome / Windows 向けエクスプロイトキットを使用。パッチ適用の遅れと、AI による脆弱性発見の加速が背景にあるとされる。
- **[Why this month's Microsoft patch release is a doozy](https://arstechnica.com/security/2026/09/microsoft-patches-a-record-972-vulnerabilities-112-of-them-critical/)** - Microsoft が過去最多の 972 件の脆弱性（うち 112 件が Critical）を修正。AI 支援攻撃の増加を見越した動きとされる。
- **[F-Droid gets its biggest update in a decade with new UI and smoother app installs](https://arstechnica.com/gadgets/2026/09/f-droid-gets-its-biggest-update-in-a-decade-with-new-ui-and-smoother-app-installs/)** - F-Droid の Android アプリが土台から作り直され、UI とインストール体験が刷新された。

## 注目トピック
AI エージェントの周辺で、開発基盤の話題が目立った。Codex のクラウド環境、Bend のような「証明で AI の誤りを防ぐ」言語、dev.to のコードレビューと RAG に関する設計論がある。共通するのは、エージェントに任せる範囲を、環境・権限・検証でどう区切るかという問いである。

一方でインフラ面では、Microsoft の過去最多パッチや、同一エクスプロイトキットの複数グループによる使い回し、BGP ハイジャックが並んだ。パッチ適用の遅れが攻撃側に有利に働く構図が改めて示されている。AWS では EventBridge の刷新、Kinesis のパーティションキー自動化、SNS の 1 MiB 対応など、設計上の制約を緩める更新が続いた。なお、過去レポートと重複する記事は除外しており、Lobsters や TechCrunch など一部ソースは新規記事が少なかった。
