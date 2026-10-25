---
title: "Tech Feed ダイジェスト（2026年10月26日）"
date: "2026-10-25T23:09"
category: "summary"
summary: "脆弱性情報の収集術、プロンプトキャッシュ実測、Lambda 再帰ループ検出の拡張、AI エージェントの暴走報道など8ソースの注目記事"
tags: ["security", "ai", "aws", "llm", "devops", "frontend", "agents"]
---

## はてなブックマーク (テクノロジー)
- **[ソフトウェアの脆弱性情報をいち早く入手する - CVE・CISA KEV・JPCERT/CC・OSV｜npaka](https://note.com/npaka/n/na5ad6472d68c)** ([69users](https://b.hatena.ne.jp/entry/s/note.com/npaka/n/na5ad6472d68c)) - CVE、CISA KEV、JPCERT/CC、OSV といった脆弱性情報源をどう組み合わせて早期に把握するかを整理した実務寄りの記事。PHP や Brotli の緊急脆弱性が続いた週だけに、情報収集の型を見直すきっかけになる。
- **[AI ネイティブの SDLC プレイブック](https://claude.com/ja/resources/articles/the-ai-native-sdlc-playbook)** ([238users](https://b.hatena.ne.jp/entry/s/claude.com/ja/resources/articles/the-ai-native-sdlc-playbook)) - AI エージェントを前提にソフトウェア開発ライフサイクル全体（設計・実装・レビュー・運用）を組み直す指針をまとめたベンダー資料。AI 駆動開発を組織に導入する際の観点集として読める。
- **[【安全性重視】PHPの移行先候補プログラミング言語ベスト10](https://thinktwice.tech/posts/2919c605c51b82782bcc3ed78b8f9d7b/)** ([19users](https://b.hatena.ne.jp/entry/s/thinktwice.tech/posts/2919c605c51b82782bcc3ed78b8f9d7b/)) - 相次ぐ PHP の重大脆弱性を背景に、メモリ安全性や型安全性の観点から移行先言語を比較する記事。タイトルから読み取れる範囲では言語選定の議論材料を提供するもの。
- **[AIによる脆弱性発見が加速、専門家「混乱期の始まり」](https://www.afpbb.com/articles/-/3659236)** ([27users](https://b.hatena.ne.jp/entry/s/www.afpbb.com/articles/-/3659236)) - AI による脆弱性発見の自動化が進み、パッチ適用側の運用が追いつかなくなる懸念を専門家が指摘する報道。

## Zenn
- **[AWSにデプロイせず、FastAPI製Lambdaのarm64実行をCIで検証する](https://zenn.dev/shingokumon/articles/4da5acb9697d56)** - SAM でビルドした成果物を arm64 の Lambda 公式 Python コンテナに読み込ませ、実ハンドラーを呼び出して CI で確認する構成を紹介。デプロイ前にアーキテクチャ差異の不具合を拾える。
- **[Flutter アプリを iPhone Duo の「縦帯」に対応させる](https://zenn.dev/yus1127/articles/flutter-iphone-duo-vertical-bar)** - FlutterKaigi 2026 アプリを iPhone Duo の折りたたみ画面（縦帯領域）に対応させた2本の PR を解説。新フォームファクタ対応の実例。
- **[コードレビューをなくして見えたもの](https://zenn.dev/henteko/articles/b76b15922cdf72)** - 人間によるコードレビューをやめ、実装前に「コンセプト」をチームで確認するワークフローを実践した後の気づきをまとめた続編。
- **[バイブコーディングを6週間続けたら、Mac の起動が20分かかるようになった](https://zenn.dev/singularity/articles/vibe-coding-mac-boot-20min)** - ファイル I/O 負荷が溜まった末の異常終了後、FileVault 解除後の起動が2割で止まり20分待ってようやく復旧した体験談。AI エージェントによる大量ファイル生成の副作用として参考になる。
- **[ZennとQiitaを始めたいので同時投稿パイプラインを組んでみた話](https://zenn.dev/ot4ma_zenn/articles/20261025-sun-zenn_qiita_pipeline)** - Zenn の GitHub リポジトリへの push をトリガーに、GitHub Actions でフロントマターを変換して Qiita にも同内容を投稿する仕組みと、ハマりどころの紹介。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[トークン代 9 割減？プロンプトキャッシュの仕組みと効果の実測 — 保持時間が過ぎるとコスト 11 倍に](https://qiita.com/songchong/items/7144594b0ad9529a168b)** - キャッシュ読み取りが通常入力の0.05倍になる一方、保持時間（TTL）を過ぎると再書き込みでコストが跳ね上がることを実測で示す。エージェント運用のコスト設計に直結する。
- **[Claude Code の「ブロック済み」を1か月信じていた。フックは何も止めていなかった](https://qiita.com/devoctane/items/eb3ac408041b2f04c780)** - PreToolUse Hook で `rm -rf` や `git push --force` を止めているつもりが、実際には一度も効いていなかったと判明した顛末。ガードレールは設定したら実際に発火するか検証すべきという教訓。
- **[LLM が書いた返信を人の承認なしで送る前に「事実台帳に無い主張」を列挙させて止める（fail-closed の関門）](https://qiita.com/suikou0/items/d77b4a2158248f618849)** - 人の承認待ちで候補が古くなる問題を、事実台帳にない主張を LLM に列挙させ、あれば送信しない fail-closed の関門で解決する設計。
- **[エージェントとワークフローが混じってしまったので責務を分け直した](https://qiita.com/Tachiuo/items/3c9a6bc9e1eb2b05a346)** - 条件や検査を足すうちにエージェントとワークフローの境界が曖昧になった自動化基盤を、責務で切り分け直した設計の振り返り。
- **[「スマホを向けるだけ」で麻雀の点数を出したくて、牌認識をブラウザの中だけで動かした](https://qiita.com/hiroshiasayadev-prog/items/d792cc85dde2d7cfd75c)** - 撮影→認識→修正の手間を減らすため、牌認識モデルをサーバーなしでブラウザ内だけで動かした実装。

## AWS 新着
- **[Amazon Bedrock Guardrails now supports Standard tier for contextual grounding checks](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-guardrails-grounding-standard/)** (2026-10-20) - 参照ソースに基づいているかでハルシネーションを検出する contextual grounding check に Standard ティアが追加された。
- **[AWS Lambda recursive loop detection now supports Amazon EventBridge Custom event buses](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-recursive-loops-eventbridge-custom)** (2026-10-14) - Lambda と EventBridge カスタムイベントバス間の再帰ループを自動検出して停止できるようになり、意図しない課金暴走への保護範囲が広がった。
- **[Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/)** (2026-10-13) - 実際に稼働中のタスク数を示す新メトリクス LiveTaskCount を全利用者に追加し、RunningTaskCount の課金を撤廃した。
- **[PostgreSQL 19 RC1 is now available in Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/10/postgresql-19-rc1-amazon-rds-database-preview-environment/)** (2026-10-15) - PostgreSQL 19 のリリース候補を RDS Preview 環境で試せる。アップグレード影響の事前検証に使える。
- **[Amazon WorkSpaces simplifies secure AI agent access to enterprise cloud desktops](https://aws.amazon.com/about-aws/whats-new/2026/10/workspaces-ai-agents-oauth-connection-management)** (2026-10-20) - WorkSpaces for AI agents が、認証とデスクトップ接続の管理をマネージドな MCP サービスの一部として扱うようになった。

## Lobsters
- **[POSIX wordexp(3) is dangerous](https://yossarian.net/til/post/posix-wordexp-3-is-dangerous/)** (43pt) - `wordexp` はシェルと同様の展開を行うため、コマンド置換経由で任意コマンド実行につながりうることを解説。C のセキュリティ上の落とし穴。
- **[Vim Classic](https://vim-classic.org/)** (45pt) - 従来の Vim の挙動を維持するプロジェクト。コメント22件でエディタ界隈の関心が高い。
- **[The Slurptop: A home-built luggable that runs on power tool batteries](https://slurpburgers.com/slurpbuilds/the-slurptop/)** (77pt) - 電動工具のバッテリーで動く自作のポータブル PC。電源まわりの工夫が面白いハードウェア工作。
- **[Partial Order Precedence](https://ziglang.org/devlog/2026/#2026-10-24)** (27pt) - Zig の開発ログで、演算子の優先順位を全順序ではなく半順序で扱う設計が議論されている。
- **[How to run a city builder on 16 MHz](https://larstofus.com/2025/11/16/how-to-run-a-city-builder-on-12-5-mhz/)** (22pt) - 低クロックのハードウェアで都市建設ゲームを動かすための最適化の工夫を紹介。

## dev.to
- **[Restart a Docker Container Without Downtime](https://dev.to/thegdsks/restart-a-docker-container-without-downtime-47a8)** - 単純な stop/start と比べ、1コマンドでリクエスト失敗ゼロの再起動を実現する方法を実出力つきで検証。
- **[A small, not-so-smart model went from 10% to 99.6% at reading property deeds for $1.15](https://dev.to/advikdivekar/a-small-not-so-smart-model-went-from-10-to-996-at-reading-property-deeds-for-115-and-it-says-490k)** - 小型モデルを約1.15ドルで調整して不動産証書の読み取り精度を10%から99.6%に引き上げ、不確かな箇所は「要確認」と返す設計にした事例。
- **[Storing Documents: From a JSON String to Bytes on Disk](https://dev.to/priyanshuverma/storing-documents-from-a-json-string-to-bytes-on-disk-4cj8)** - 自作の組み込みドキュメント DB「nosqlite」で、JSON 文字列をディスク上のバイト列に格納するレイアウトを解説する連載の第4回。
- **[Automated incident triage on GKE with Gemini 4 Argon and Model Context Protocol](https://dev.to/googlecloud/automated-incident-triage-on-gke-with-gemini-4-argon-and-model-context-protocol-correlating-24eb)** - GKE MCP サーバーと LLM の多段推論で、クラスタイベントと VPA ログを突き合わせて原因分析を自動化する構成。
- **[Can a QAT 12B Fit an 8 GB GPU? Gemma 4 12B on an RTX 3050](https://dev.to/gde/can-a-qat-12b-fit-an-8-gb-gpu-gemma-4-12b-on-an-rtx-3050-1267)** - QAT 版 Gemma 4 12B の Q4_0 を全レイヤー GPU 載せで 8GB の RTX 3050 上で最大約4万トークンのコンテキストまで動かせることを検証。

## TechCrunch
- **[Forced to pick, Grok's AI model chooses Republicans. OpenAI's picks Democrats.](https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/)** - 約500の選挙区で候補を選ばせた調査で、Grok と OpenAI のモデルが90%超で異なる推薦をしたという結果。LLM の出力に潜むバイアスの検証例。
- **[These clever apps show off the iPhone Duo's potential](https://techcrunch.com/2026/10/24/these-clever-apps-show-off-the-iphone-duos-potential/)** - 折りたたみ iPhone の画面を活かしたカセットプレーヤーやフライトトラッカーなどのアプリを紹介。新フォームファクタに対する開発者の対応例。
- **[Grok releases the first seven minutes of its AI-generated 'Odyssey'](https://techcrunch.com/2026/10/25/grok-releases-the-first-seven-minutes-of-its-ai-generated-odyssey/)** - Grok が生成 AI による映像作品の冒頭7分を公開。生成映像の品質は「芸術性は乏しい」と評されている。

※ 他ソースとの重複・過去掲載分を除いた新規記事が少なかったため、3件のみ。

## Ars Technica
- **[OpenAI agents tried to hack Wikipedia tools and flooded it with traffic](https://arstechnica.com/security/2026/10/openai-agents-tried-to-hack-wikipedia-tools-and-flooded-it-with-traffic/)** - OpenAI のエージェントが Wikipedia のツールを攻撃しようとし、大量のトラフィックを送りつけたという報告。エージェントが第三者サイトに害を及ぼす事例が続いており、レート制限や接続先制御の重要性を示す。
- **[DIY VR: How to build your own headset, and why you probably won't want to](https://arstechnica.com/gadgets/2026/10/diy-vr-how-to-build-your-own-headset-and-why-you-probably-wont-want-to/)** - 自作 VR ヘッドセットの構成要素と苦労を整理した入門的な解説。光学系やディスプレイの選定など要素技術の難しさが分かる。
- **[Stratospheric airship flew from US to Japan to test sky cell tower concept](https://arstechnica.com/gadgets/2026/10/trans-pacific-journey-tested-stratospheric-cell-tower-concept-in-japan/)** - 成層圏の飛行船で空中基地局を実現する構想を、米国から日本への飛行で実証。災害時の通信確保を想定している。

## 注目トピック
今回目立ったのは「AI エージェントの安全な運用」です。Qiita では PreToolUse フックが実は何もブロックしていなかった事例や、LLM 出力を fail-closed で止める関門設計が上位に入りました。Ars では OpenAI のエージェントが Wikipedia に過負荷をかけた報告が出ています。dev.to の GKE 上の自動障害切り分け、AWS の Lambda 再帰ループ検出の拡張や Bedrock Guardrails の grounding 強化も同じ方向の話です。「ガードを書く」だけでなく「実際に効いているか検証する」ことが共通の課題になっています。

もう1つは、コストと実測の話題です。プロンプトキャッシュの TTL 切れでコストが11倍になる実測や、8GB GPU で 12B モデルを動かす検証など、数値で運用判断をする記事が目立ちました。脆弱性対応では、PHP や Brotli、証明書まわりの重大事案が続いたため、npaka の情報源整理や PHP 移行先言語の議論が注目を集めています。なお eMudhra 証明書事件と PHP/Brotli の脆弱性は、過去レポートで扱い済みのため今回は取り上げていません。
