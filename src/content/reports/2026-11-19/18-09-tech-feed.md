---
title: "Tech Feed ダイジェスト（2026年11月20日）"
date: "2026-11-19T18:09"
category: "summary"
summary: "決済画面改ざんによるカード情報流出、Aurora DSQL の大陸間マルチリージョン、Gemini の Mac 操作エージェントなど8ソースの注目記事"
tags: ["security", "aws", "ai", "database", "agents", "web"]
---

## はてなブックマーク (テクノロジー)
- **[六花亭、カード番号全桁＋セキュリティコード約8000件流出か　決済画面のプログラム改ざん](https://www.itmedia.co.jp/news/article/2611/19/2000003316/)** ([360users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2611/19/2000003316/)) - 決済画面のプログラムが改ざんされ、カード番号とセキュリティコードが流出した疑いのある事案。入力フォームに悪意あるスクリプトを仕込むスキミング型の攻撃で、サードパーティスクリプトや配信経路の管理が問われる。
- **[相次ぐOSSの脆弱性に、とりあえずクラウドWAF入れるだけでだいぶ違う話+Rootlessコンテナもいいぞ](https://zenn.dev/kusuke/articles/98e178e6824cac)** ([74users](https://b.hatena.ne.jp/entry/s/zenn.dev/kusuke/articles/98e178e6824cac)) - OSS の脆弱性が続くなか、クラウド WAF の導入と Rootless コンテナの運用が被害軽減に効くという実践的な防御策の紹介。
- **[OpenAIがAIを用いてAMD製GPUや独自開発AIチップの改善に成功、半導体設計の専用AIモデルも開発](https://gigazine.net/news/20261119-openai-jalapeno-amd-advancing-chip/)** ([9users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261119-openai-jalapeno-amd-advancing-chip/)) - AI を使って AMD 製 GPU と自社開発チップを改善し、半導体設計向けの専用モデルも開発したという GIGAZINE の報道。AI がチップ設計工程に入り込む動きを示す。
- **[アプリケーションエンジニアの考えるセキュリティ対策（考え方と共通の前提）](https://future-architect.github.io/articles/20261119a/)** ([9users](https://b.hatena.ne.jp/entry/s/future-architect.github.io/articles/20261119a/)) - フューチャー技術ブログによる、アプリケーションエンジニアの視点でのセキュリティ対策の考え方と共通前提の整理。
- **[日本版DBSのシステムで見つかった脆弱性についてまとめてみた - piyolog](https://piyolog.hatenadiary.jp/entry/2026/11/19/141704)** ([6users](https://b.hatena.ne.jp/entry/s/piyolog.hatenadiary.jp/entry/2026/11/19/141704)) - 日本版 DBS のシステムで見つかった脆弱性の経緯を piyolog が時系列で整理した記事。

## Zenn
- **[Microsoft-Decision-1.1公開！Microsoft-Decision-1との差はどれくらい？](https://zenn.dev/microsoft/articles/ms-decision-1-1)** - 真偽判定やルーティングのような単純な判断に特化した Decision モデルの後継が GA。発表では「1の2倍以上速い」「画像入力に対応」とされ、手元から呼んだ場合の差を検証している。
- **[自分の代わりに動くAgentへ。Claude CodeとCodexで作る自律改善ハーネス](https://zenn.dev/nttdata_tech/articles/9562962cc181a1)** - 一度伝えたことを覚え、仕事の種類を問わず自律的に進めるための個人用ハーネスの設計。Claude Code と Codex で設定が分かれていく問題への対処も動機に挙げている。
- **[KotlinFest 2026のアーカイブ動画即日公開を支えた技術](https://zenn.dev/hiro_pon/articles/0fc7f0c9ed88a2)** - 3部屋すべてのセッション動画を当日中に公開するための配信・公開パイプラインの構成紹介。
- **[最適化プロダクトにおけるUX](https://zenn.dev/ctenopoma/books/optimization_ux)** - 数秒〜数分かかる最適化計算を UX としてどう設計するかを扱う本。待ち時間の境界、暫定解と品質メーター、キャンセルの意味、解の安定性などを、動かせる HTML デモ付きで解説する。

## Qiita
- **[Lodashへの別れ：標準JavaScriptでここまでできる置き換えチートシート](https://qiita.com/figueiredoluiz/items/c47f5f20a9f4118054f1)** - よく使う Lodash の処理を標準 JavaScript に置き換える早見表。null・NaN・重複・順序・元データ変更を確認し、debounce や深い比較は必要に応じて残す方針（冒頭抜粋より）。
- **[C# 15 の union 型を ILSpy で覗いてみた](https://qiita.com/jun1s/items/758db6cb12f1a83a8bf6)** - .NET SDK 11 の C# 15 で入った union 型を ILSpy で逆コンパイルし、BenchmarkDotNet でも測る検証記事（冒頭抜粋より）。
- **[【実験】Direct Connectの片系を落とすと、実際どれくらいで切り替わり、行きと戻りはどの回線を通るのか](https://qiita.com/sh_fukatsu/items/5a069f9fce99a86efb05)** - オンプレ側ルーター2台と Direct Connect 2回線の冗長構成で片系を落とし、切り替え時間と往復の経路を確かめた実験。
- **[マルチテナントRAGの検索で他社文書が混ざらないかをpytestで自動検査する](https://qiita.com/takumi_engineer/items/461472ef70735d1196be)** - Recall@k は「取るべきものが取れたか」しか見ないため、他テナント文書が1件でも混ざっていないかを別途テストする方法を解説（冒頭抜粋より）。
- **[AIトークノミクスは観測から始めよう - AIコーディングのコスト・無駄・成果を測る](https://qiita.com/kobadain/items/7ff26c584cd9b83f7a5a)** - AI コーディング環境の情報を観測できる Preflight を使い、コストと成果の関係を測る話（冒頭抜粋より）。

## AWS 新着
- **[Amazon Aurora DSQL now supports multi-Region peering across continents](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-dsql-intercontinental-multi-region-clusters/)** (2026-11-19) - マルチリージョンクラスタのリージョンを米国東部とアイルランドのように別大陸にまたがって構成できるようになった。従来はこの組み合わせができなかった。
- **[Amazon OpenSearch Memory is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-memory-generally-available/)** (2026-11-18) - AI エージェントに永続メモリを持たせるための OpenSearch Service のサーバーレス機能が GA。
- **[AWS Lambda now supports customer-managed runtimes, giving platform teams centralized control over runtime contents and updates](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-customer-managed-runtimes/)** (2026-11-18) - ランタイムを独立したリソース型として扱い、関数から切り離して管理できる。プラットフォームチームがランタイムの中身と更新を一元管理しやすくなる。
- **[Amazon Cognito now supports point-in-time recovery](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-point-in-time-recovery/)** (2026-11-18) - ユーザープールのデータを過去の時点に戻せるようになった。誤削除や誤操作の復旧手段が増える。
- **[AWS Lambda durable functions now supports pausing and deleting executions](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-pause-delete/)** (2026-11-17) - 実行中の durable execution を一時停止して後で再開でき、再開時は最後のチェックポイントから続行する。

## Lobsters
- **[PostgreSQL 19 Released](https://www.postgresql.org/about/news/postgresql-19-released-3449/)** (16pt) - PostgreSQL 19 の正式リリース告知。
- **[Distributed, high-performance blob storage on SQLite](https://zerodha.tech/blog/high-performance-distributed-blob-storage/)** (16pt) - Zerodha の技術ブログによる、SQLite を土台にした分散・高性能 blob ストレージの設計紹介（タグは distributed / rust）。
- **[15 million web servers on one VM - smoltcp, DPDK, AF_XDP](https://kapteko.com/15-million-webservers/)** (10pt) - smoltcp、DPDK、AF_XDP を使い、1台の VM 上で1500万の Web サーバーを動かす実験（タグは networking / rust）。
- **[PHP 8.6 Release Announcement](https://www.php.net/releases/8.6/en.php)** (13pt) - PHP 8.6 のリリースアナウンス。
- **[Validating a High-Performance Cloud Object Store with Lightweight Formal Methods](https://dl.acm.org/doi/10.1145/3830418.3843899)** (7pt) - 高性能クラウドオブジェクトストアを軽量な形式手法で検証する ACM の論文（タグは distributed / formalmethods）。

## dev.to
- **[Stop Wrapping Everything in Promise.all: How Unbounded Concurrency Crashes APIs](https://dev.to/johnnylemonny/stop-wrapping-everything-in-promiseall-how-unbounded-concurrency-crashes-apis-11ol)** - Promise.all は全タスクを同じイベントループの tick で起動するため、無制限の並行実行が 429 の嵐を招く。上限付きワーカープールで解決する方法を解説。
- **[Can a plain table hijack an AI agent?](https://dev.to/edbrdi/can-a-plain-table-hijack-an-ai-agent-2pde)** - ツール結果に仕込んだ指示を、対策済みモデルは無視または警告したと検証。そのうえで、単純な表形式のデータがエージェントを乗っ取れるかを調べている。
- **[Serverless Gemma 4: E2B on a Lambda GPU Function, with Google's QAT Weights and Drafter](https://dev.to/gde/serverless-gemma-4-e2b-on-a-lambda-gpu-function-with-googles-qat-weights-and-drafter-fh4)** - Gemma 4 E2B の QAT 4bit 重みと drafter を、NVIDIA L4 上の Lambda 関数内で vLLM により提供する構築手順。同時リクエスト数を増やしたときの drafter の効果も扱う。
- **[When DDD Is the Wrong Tool for the Job](https://dev.to/andriiboyko/when-ddd-is-the-wrong-tool-for-the-job-13g8)** - 純粋な CRUD アプリでは DDD の適合度はゼロになるとして、DDD を使わない判断基準を論じる設計記事。
- **[Adopt Pre-Existing Docker Containers with Zero Downtime: Reverse-Engineering docker-compose.yml in Gubernator v4.0](https://dev.to/gde/adopt-pre-existing-docker-containers-with-zero-downtime-reverse-engineering-docker-composeyml-in-3cic)** - 本番ホスト上の既存コンテナを docker inspect から検出し、整理した docker-compose.yml を逆生成して、ダウンタイムなしで管理対象 Stack に取り込む仕組み。

## TechCrunch
- **[Google gives Gemini the ability to use your Mac for you](https://techcrunch.com/2026/11/19/google-gives-gemini-the-ability-to-use-your-mac-for-you/)** - Gemini アプリの更新で、Mac 上のファイル整理、フォーム入力、複数手順のワークフローを実行するエージェントが使えるようになった。
- **[UK government forced to disclose secret Apple backdoor order](https://techcrunch.com/2026/11/19/u-k-government-forced-to-disclose-secret-apple-backdoor-order/)** - 英国の審判所が、Apple に対する秘密のバックドア命令の開示は国家安全保障を害するという政府の主張を退けた。暗号化とプライバシー規制に関わる判断。
- **[Satya Nadella predicts AI agents will reshuffle the economics of the web](https://techcrunch.com/2026/11/18/satya-nadella-predicts-ai-agents-will-reshuffle-the-economics-of-the-web/)** - Microsoft CEO は、AI エージェントが広告ベースのビジネスモデルを揺るがし、Amazon のような企業も顧客の獲得方法を見直す必要が出ると述べた。

## Ars Technica
- **[How to tell a cyberattack from a plain old outage](https://arstechnica.com/security/2026/11/how-to-tell-a-cyberattack-from-a-plain-old-outage/)** - 大規模障害が起きても、すぐにサイバー攻撃と決めつけない方がよいという解説。インシデント初動の切り分けに役立つ。
- **[Google will launch Android app verification requirement globally in January 2027](https://arstechnica.com/gadgets/2026/11/google-will-launch-android-app-verification-requirement-globally-in-january-2027/)** - Android のアプリ検証要件が2027年1月に世界展開される。Google は、ほぼすべての開発者がすでに検証に参加していると説明している。
- **[Disgraced eMudhra drops out of TLS business after using cert private key of 4](https://arstechnica.com/security/2026/10/disgraced-emudhra-drops-out-of-tls-business-following-certificate-debacle/)** - 鍵署名セレモニーの不手際により、任意のサイトの Web 証明書を発行できる状態になっていた。eMudhra は TLS 事業から撤退する。同じ件の中間証明書の侵害は別記事でも報じられている。

## 注目トピック
AI エージェントの実用化と、その安全・責任の議論が複数のソースにまたがって目立った。TechCrunch では Gemini が Mac を直接操作するエージェントを提供し、Nadella 氏がエージェントによる Web の経済構造の変化に言及した。dev.to ではツール結果経由のプロンプトインジェクション検証が、Zenn では自律改善ハーネスの設計が取り上げられた。AWS 側も OpenSearch Memory の GA や Lambda durable functions の拡張など、エージェントを支える基盤を整えている。

もう一つの流れは、Web 決済画面の改ざんや脆弱性対応といったサプライチェーン・防御面の話題。六花亭の事案はサードパーティスクリプトや配信経路の管理の重要性を示し、TLS 証明書の鍵管理不備（eMudhra）や Android のアプリ検証の世界展開は、信頼の基盤を誰がどう担保するかという点でつながっている。データ基盤では Aurora DSQL の大陸間マルチリージョンや PostgreSQL 19 のリリースもあり、整合性とレイテンシの設計判断を見直す材料が増えた。
