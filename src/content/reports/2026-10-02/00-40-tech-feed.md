---
title: "Tech Feed ダイジェスト（2026年10月2日）"
date: "2026-10-02T00:40"
category: "summary"
summary: "Claude Code の使用量実測、AWS Well-Architected Agent、RSA 解読の新手法、Meta Muse の 0-day など8ソースの技術トピックをまとめた。"
tags: ["ai", "aws", "security", "devops", "rust", "git", "llm"]
---

## はてなブックマーク (テクノロジー)

- **[dotfiles を AI agent のために作り変えた](https://tellme.tokyo/post/2026/10/01/ai-agent-first-dotfiles/)** ([52users](https://b.hatena.ne.jp/entry/s/tellme.tokyo/post/2026/10/01/ai-agent-first-dotfiles/)) - 人間向けに育ててきた dotfiles を、コーディングエージェントが読み書きしやすい構成へ再設計した事例。開発環境を「エージェントが使う前提」で整える流れを示している。
- **[12GB VRAM で 125B モデルを動かす「Strata」の概要｜npaka](https://note.com/npaka/n/n4a1185074686)** ([14users](https://b.hatena.ne.jp/entry/s/note.com/npaka/n/n4a1185074686)) - 12GB 級のコンシューマ GPU で 125B 級の大規模モデルを動かす仕組み「Strata」の解説。ローカル LLM のメモリ制約をどう回避するかに関心がある人向け。
- **[「Oracle JDK 21」は無償の「NFTC」ライセンスの対象外に、10月「CPU」以降で](https://forest.watch.impress.co.jp/docs/news/2144856.html)** ([10users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2144856.html)) - 10月の CPU 以降、Oracle JDK 21 は無償の NFTC ライセンス対象外になる。無償で商用運用するなら Oracle JDK 25 への移行が必要で、JDK の運用方針の見直しを迫られる。
- **[Pi 1.0 | Earendil](https://earendil.com/posts/pi-1-0/)** ([10users](https://b.hatena.ne.jp/entry/s/earendil.com/posts/pi-1-0/)) - Earendil による Pi の 1.0 リリース告知。開発ツールの動向として押さえておきたい。

## Zenn

- **[Claude Code の使用量はどう数えられているのか ── Max 20x で実測した重みは API 料金表と違った](https://zenn.dev/tksfjt1024/articles/25c0ab111c277c)** - 5 時間枠と週間枠の消費を条件を揃えた実験で測定した。cache read も使用量に入るが重みは input の 1/40 で、API 料金表の比率とは異なることを示している。
- **[Claude Code / Codexで「私のlimit、減りすぎ…？」と思ったときに見る記事](https://zenn.dev/tokium_dev/articles/ai-agent-usage-limit-long-sessions)** - 長時間セッションで自動 compact が何十回も走ると上限を急速に消費する、という実体験の整理。cron や Slack bot 経由でエージェントを動かす場合の注意点も扱う。
- **[３分で読めるトランザクション設計のコツ](https://zenn.dev/mconfjp/articles/transaction-action-order)** - トランザクション内で処理を書く順番の指針を紹介する。外部サービス連携を含む場合に、どこで失敗するかから逆算して順序を決める考え方。
- **[Jujutsu と出会い、15 年使った Git にもう戻れなくなった理由](https://zenn.dev/oukayuka/articles/15years-git-then-jujutsu)** - Subversion 時代から Git/GitHub を使ってきた筆者が、Jujutsu(jj) に移行した理由を語る。Git の使いにくさとレビュー運用の観点から比較している。
- **[AI開発時代だからこそ、テストの役割を見つめ直す](https://zenn.dev/ababup1192/articles/77b844dcfc1529)** - 「E2E かユニットか」の優劣論ではなく、テストの種類ごとに検出できる不具合が違うという観点で役割を整理し、AI 協働開発での使い分けを論じる。

## Qiita

※ 冒頭抜粋から読み取れる範囲での紹介。

- **[AI生成コードを全部同じ密度で読む必要はある？―レビューを契約とテストで絞る設計](https://qiita.com/masashige0904/items/43beaaabc2c0ef2dcb1c)** - AI が書いたコードのレビュー負担を、契約とテストで絞り込む設計の提案。どこまで読むべきか迷う人向け。
- **[Twitter（現X）に貼ったURLのサムネイル画像、キャッシュクリアできるの知ってた？](https://qiita.com/minorun365/items/f1f6a45fa9aff8d624af)** - ブログ画像を差し替えても X 上で古いカードが残る問題への対処法。OGP キャッシュ周りのトラブルシューティング。
- **[Lance formatとは？Apache Icebergの課題から考えるAIワークロード向けのデータフォーマット](https://qiita.com/yushibats/items/c98976645c61deac4872)** - 画像・音声・埋め込みベクトルを扱う AI ワークロードで、レイクハウス用フォーマットとは別に Lance を選ぶ理由を整理する。
- **[OCI Functions のコードのみ関数(Code-only Functions)を動かしてみる](https://qiita.com/ora_gonsuke777/items/698dc98984273ff256fe)** - リリースされたばかりの OCI Functions Code-only Functions を実際に動かす検証記事。
- **[Flutter × Google Routes APIで訪問順を組み立てる](https://qiita.com/TechStudioLab/items/75d656fb7bc7d777fb5c)** - 訪問介護のように複数地点を回る業務アプリで、単なる地図表示を超えて訪問順の最適化を扱う実装例。

## AWS 新着

- **[AWS Well-Architected Agent is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-well-architected-agent/)** (2026-10-01) - Trusted Advisor と Well-Architected Tool の次世代版となる AI エージェントのプレビュー。ワークロードを分析し最適化を提案する。
- **[Amazon DynamoDB introduces filtered export to Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)** (2026-10-01) - S3 へのエクスポートでフィルタ指定が可能になり、必要なデータだけを出力できる。
- **[AWS Security Hub introduces remediation plans to prioritize and fix security exposures](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-security-hub-remediation-plans/)** (2026-10-01) - 根本原因を共有する exposure findings をまとめ、1 つの下位リソースを直せば解消できる形で修復計画を提示する。
- **[Serverless Storage on Amazon EMR Serverless now supports terabyte-scale shuffle](https://aws.amazon.com/about-aws/whats-new/2026/10/emr-serverless-terabyte-scale-shuffle/)** (2026-10-01) - ジョブあたりのシャッフル上限が 200GB から 1TB に拡大した。大規模ジョブの設計制約が緩む。
- **[Amazon S3 Tables now support up to 100 table buckets per AWS Region in an AWS account](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-s3-tables-table-bucket-increase)** (2026-10-01) - テーブルバケット上限が 10 から 100 に増え、リージョンあたり最大 100 万テーブルを作成できる。

## Lobsters

- **[Git 3.0's upcoming SHA-256 default will be a costly mistake](https://blog.gitbutler.com/git-3-sha-256)** (26pt) - Git 3.0 で SHA-256 が既定になることへの批判。互換性などの移行コストを論じ、コメントも 25 件と議論が活発。
- **[Is sandboxing sufficient to contain rogue agents?](https://blog.cryptographyengineering.com/2026/09/30/is-sandboxing-sufficient-to-contain-rogue-agents/)** (21pt) - 暗号研究者による、暴走するエージェントをサンドボックスだけで封じ込められるのかという考察。
- **[Typeclasses vs Modules](https://sm2n.ca/articles/typeclasses-vs-modules/)** (35pt) - Haskell の型クラスと ML のモジュールという 2 つの抽象化機構を比較する言語設計の記事。
- **[Reviving Valve's 15-year-old e-book](https://nikolan.net/posts/portal2/)** (41pt) - 15 年前の Valve の電子書籍を、リバースエンジニアリングで動く状態に復活させた記録。

## dev.to

- **[TypeScript 7 Is Up to 10x Faster. Should You Upgrade Now?](https://dev.to/johnnylemonny/typescript-7-is-up-to-10x-faster-should-you-upgrade-now-4d3p)** - 最大 10 倍高速化をうたう TypeScript 7 に、今アップグレードすべきかを検討する記事。
- **[Why CPU Branch Prediction Fails: Pipeline Bubbles, Speculative Execution, and Branchless Code](https://dev.to/syed_anzar/why-cpu-branch-prediction-fails-pipeline-bubbles-speculative-execution-and-branchless-code-16lm)** - 分岐予測ミスによるパイプラインバブルと投機実行、分岐レスコードによる回避を解説する。
- **[How passkeys work: WebAuthn, phishing and why you can't move them](https://dev.to/axrisi/how-passkeys-work-webauthn-phishing-and-why-you-cant-move-them-4jnc)** - パスキーの WebAuthn 上の仕組み、フィッシング耐性、移行しにくい理由を整理する。
- **[7 ways to lock down AI agent sandboxes in production (beyond Docker containers)](https://dev.to/googleai/7-ways-to-lock-down-ai-agent-sandboxes-in-production-beyond-docker-containers-2bg3)** - Docker コンテナだけに頼らない、本番での AI エージェント用サンドボックス強化策 7 つ。
- **[Two Iceberg Clients, One Protocol: Where the Time Goes](https://dev.to/gde/two-iceberg-clients-one-protocol-where-the-time-goes-4g88)** - 同じ Iceberg プロトコルを話す 2 つのクライアントの所要時間の内訳を比較する。

## TechCrunch

- **[Kevin Mandia's new 'agent swarm' security startup Armadin raises $255.5M at $2.5B valuation](https://techcrunch.com/2026/10/01/kevin-mandias-new-agent-swarm-security-startup-armadin-raises-255-5m-at-2-5b-valuation/)** - Mandiant 創業者の新会社が、エージェント群で企業のテストと防御を行うアプローチで大型調達した。
- **[Google thinks SpaceX's Starship has to launch 1,800 times before space data centers get off the ground](https://techcrunch.com/2026/10/01/google-thinks-spacexs-starship-has-to-launch-1600-times-before-space-data-centers-get-off-the-ground/)** - Google が先進チップを初めて軌道に打ち上げた。宇宙データセンター実現に必要な打ち上げ回数の試算が示されている。
- **[Photon held a funeral for mobile apps. Now it has $4.5M to help replace them with agents.](https://techcrunch.com/2026/10/01/photon-held-a-funeral-for-mobile-apps-now-it-has-4-5m-to-help-replace-them-with-agents/)** - iMessage、SMS/RCS、メール上で動くエージェントを開発者が作るための基盤で、アプリの代わりにエージェントを使う未来に賭けている。
- **[Shopify debuts Canvas, a way to build online stores by chatting with AI](https://techcrunch.com/2026/10/01/shopify-debuts-canvas-a-way-to-build-online-stores-by-chatting-with-ai/)** - AI エージェント Sidekick と対話しながら、変更をリアルタイムで確認しつつストアを構築できる。
- **[Opus 5.5 loves to tell you 'this matters' (and other AI writing tells)](https://techcrunch.com/2026/10/01/opus-5-5-loves-to-tell-you-this-matters-and-other-ai-writing-tells/)** - Opus 5.5 の文体の癖を分析した記事で、「dependable」が人間の文章サンプルより 23 倍多く現れる。

## Ars Technica

- **[There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)** - 従来より高速とされる新たな RSA 攻撃手法の報告。暗号方式の選定や移行計画に影響しうる。
- **[Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)** - 強い権限を持つ AI アシスタント Muse に深刻なゼロデイが見つかった。権限の大きいエージェントのリスクを示す。
- **[Memory executives expect RAM shortage to continue through 2028](https://arstechnica.com/information-technology/2026/10/memory-supplies-are-only-getting-tighter-micron-ceo-says/)** - Micron CEO らがメモリ供給の逼迫は 2028 年まで続くと見通しを示した。サーバーや GPU の調達計画に関わる。
- **[Iran strikes on Amazon data centers caused permanent loss of customer data](https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data/)** - 攻撃によるデータセンター被害で顧客データが恒久的に失われた。物理的な災害対策とバックアップ設計を再考させる。
- **[Once popular for attacking AI, ASCII smuggling is embraced by spammers](https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/)** - AI への攻撃手法として知られた ASCII smuggling が、スパマーの手口として使われ始めている。

## 注目トピック

AI エージェントを前提にした開発環境と運用の話題が多かった。dotfiles の再設計、Claude Code / Codex の使用量の実測、サンドボックスの強度（Lobsters と dev.to）、Meta Muse の 0-day など、エージェントの利用コストと権限管理が実務上の課題になっている。レビューを契約とテストで絞る設計も、同じ流れにある。

インフラ面では、AWS が Well-Architected Agent、Security Hub の修復計画、S3 Tables や EMR の上限拡大を出し、データ基盤を扱いやすくする更新が続いた。一方 Ars Technica は、RSA への新攻撃、メモリ供給の逼迫、データセンター被害を報じており、暗号、調達、物理的な耐障害性を見直す材料になる。
