---
title: "Tech Feed ダイジェスト（2026年10月8日）"
date: "2026-10-07T16:19"
category: "summary"
summary: "バイブコーディング製Webアプリの9割に脆弱性、IDCFクラウド障害、jestのCIハング原因、Decider系の判定API、Gentoo Chromium終了など"
tags: ["security", "ai", "aws", "postgresql", "testing", "kubernetes", "llm", "infrastructure"]
---

## はてなブックマーク (テクノロジー)
- **[バイブコーディングで作った公開中のWebアプリ、9割に脆弱性　MSの研究者など調査](https://www.itmedia.co.jp/news/article/2610/07/2000002055/)** ([251users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2610/07/2000002055/)) - Microsoft の研究者らが、AI に任せて作られ公開中の Web アプリを調べたところ約9割に脆弱性があったという調査報道。生成コードをそのまま公開する運用のリスクを定量的に示す内容。
- **[最近のLLMは黙って考えられるようになっている](https://joisino.hatenablog.com/entry/filler)** ([180users](https://b.hatena.ne.jp/entry/s/joisino.hatenablog.com/entry/filler)) - 最近の LLM が、思考過程を言語化せずに（フィラー的なトークンなどを挟んで）内部で推論できるようになっていることを扱う解説。CoT の見え方と実際の計算の関係を考える材料になる。
- **[当社サービスの一部システムに対する不正アクセスについて | IDCフロンティア](https://www.idcf.jp/news/topics/20261007001)** ([153users](https://b.hatena.ne.jp/entry/s/www.idcf.jp/news/topics/20261007001)) - IDCF クラウド東日本第1リージョンで不正アクセスによる障害が発生。報道ではランサムウェア攻撃とされ、495の企業・自治体に影響し、一部は復元が難しいとの通達もあったという。クラウド事業者側の被害という点で、バックアップの分離を考えさせる事案。
- **[OpenAIが判断専用の「Decisions API」を公開、テキストや画像を約10倍高速に判定して確率や信頼度を出力](https://gigazine.net/news/20261007-decisions-api/)** ([37users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261007-decisions-api/)) - 文章を生成せず、テキストや画像を分類して確率・信頼度を返すことに特化した API。モデレーションや振り分けを低遅延・低コストに組むための部品として位置づけられる。
- **[フリーのAndroid操作アプリ「scrcpy 5.0」、ビデオのハードウェア処理でCPU使用率が約1/10に](https://forest.watch.impress.co.jp/docs/news/2146195.html)** ([21users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2146195.html)) - Android 画面ミラーリングツールの新版。映像処理をハードウェア化して CPU 使用率が約1/10になり、Windows ARM64 向けビルドも公式提供される。

## Zenn
- **[CPUが2コアだとjestは終わらない — in-band実行とpendingのままのMutation](https://zenn.dev/hopetekigozaru/articles/jest-ci-hang-2core-tanstack-query)** - CI でだけ jest が30分で終わらない問題の調査記録。2コアのランナーで jest がワーカーを使わず in-band 実行になることと、TanStack Query が pending の Mutation の削除タイマーを張り直し続けることの組み合わせが原因だった。
- **[巨大 SQL を実行したら DB 負荷が高まったエンジニアの備忘録](https://zenn.dev/ryoya_cre8tor/articles/0cdc8623498f11)** - 数万個の OR 条件を並べた SQL は、実行前の planning だけで条件数に比例するメモリと二乗の時間を使い、そのメモリは work_mem の対象外という検証。配列を渡す ANY に変えると SQL の形が固定され、件数が増えても負荷が増えない。
- **[iOSアプリ開発でGit Worktreeを使ってもCompilation Cacheを効かせたい](https://zenn.dev/sryu/articles/worktree-compilation-cache)** - worktree を切ると DerivedData のパスが変わりクリーンビルドになる問題に対し、Xcode 26 の `COMPILATION_CACHE_ENABLE_CACHING` を使ってキャッシュを再利用する方法を解説。コーディングエージェントで worktree 運用が増えた現場向けの工夫。
- **[LINE配信の直後に1万人が来ても落ちないように、負荷試験を回しながら直した話【Vercel × Supabase】](https://zenn.dev/yoshinani_dev/articles/0a938da9346c93)** - Next.js(Vercel) + Supabase + Prisma 7 構成で、100人の同時アクセスで成功率4%だった状態を、負荷試験で測りながら直して1万人/5分に耐えるところまで持っていった記録。
- **[レビューの口伝を40ルールに棚卸ししてAIレビューに載せた](https://zenn.dev/edash_tech_blog/articles/c52409a3d6fa12)** - Go とクリーンアーキテクチャのバックエンドで、口伝されていたレビュー作法を40ルールにして AI レビュー用スキルにし、半年運用して実測した報告。期待と違う結果が出たという点が読みどころ。

## Qiita
- **[Strands Deciderハンズオン！](https://qiita.com/har1101/items/cf5e734358e09f2410d0)** - 2026/10/1 に AWS が発表した Strands Decider を動かすハンズオン（冒頭抜粋より）。文章を生成せず、用意した選択肢から選ばせる判定向けの仕組みで、環境構築込みで1.5時間が目安。
- **[ChatGPT SolとLunaを分業したら、Sol単独の47%のコストで隠しテスト100%だった ── 「どの工程にどのモデルを使うか」を考える](https://qiita.com/kunitomo926/items/60aa36a9a54fc1de7919)** - 同じ仕様の Web アプリを3構成で3回ずつ作らせ、計画とレビューを Sol、実装を Luna に分担した構成が Sol 単独の47%のコストで隠し E2E テスト100%だったという実験（冒頭抜粋より）。ただし分業構成のみの結果で、一般化には注意が必要。
- **[最も早く満席になったセッションはどれか？ ～ re:Invent 2026 セッション予約開始直後を監視してみた](https://qiita.com/godsugar/items/1de212ba8187817b5640)** - re:Invent 2026 のセッション予約開始直後の空席状況を監視し、どれがどのくらいの速さで埋まったかを調べたデータ記事。
- **[OCI Functionsのコード専用関数](https://qiita.com/nakaie/items/e36996fcf75ff93278a2)** - 2026年9月24日から OCI Functions でコードを ZIP でアップロードするデプロイが可能になった。従来はコンテナベースのみで、デプロイが簡素化される。
- **[Oracle IntegrationのMCP Gatewayを使って、MCPサーバーへのアクセスを制御してみた](https://qiita.com/nakasato310/items/052e2260b0e019da0567)** - iPaaS の Oracle Integration（OIC）が持つ MCP Gateway で、MCP サーバーへのアクセスを制御する検証記事（冒頭抜粋より）。

## AWS 新着
- **[Claude Sonnet 5.5 now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/claude-sonnet-5-5-aws/)** (2026-09-28) - コーディングと知的作業で性能が向上し、多くの作業でタスク当たりのコストが下がり高速になったという Sonnet 5.5 が AWS で利用可能に。
- **[GLM 5.3 by Z.ai is now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-glm-5-3/)** (2026-10-05) - Z.ai の GLM 5.3 が Bedrock で GA。エージェント的なコーディングや長期的なソフトウェア開発向けの選択肢として追加された。
- **[Amazon EKS and Amazon EKS Distro now support Kubernetes version 1.37](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-distro-kubernetes-version-1-37)** (2026-10-02) - EKS と EKS Distro が Kubernetes 1.37 に対応。アップグレード計画の起点になる。
- **[AWS Batch now publishes job metrics to Amazon CloudWatch](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-batch-job-cloudwatch-metrics/)** (2026-10-06) - AWS Batch がジョブのライフサイクル全体でメトリクスを CloudWatch に出力し、ジョブキューなどの状況をネイティブに可視化できるようになった。
- **[AWS Security Hub introduces remediation plans to prioritize and fix security exposures](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-security-hub-remediation-plans/)** (2026-10-01) - 根本原因が共通する露出の検出結果をまとめ、個別ではなく1つの基盤リソースの修正で解消する修復計画を提示する機能。

## Lobsters
- **[Last rites for Gentoo's Chromium package](https://lwn.net/SubscriberLink/1097760/2be4d9e3eeb59039/)** (52pt) - LWN による、Gentoo が Chromium パッケージの扱いをやめる経緯の記事。巨大なブラウザのビルドとメンテナンスを、ディストリビューションがどこまで担えるかという問題を扱う。
- **[Brut, the Brutal Router for Unix Tools](https://brut.sh)** (33pt) - Unix ツール向けのルーターを提案する Show 投稿。コメントが24件付いており、設計方針に議論がある。
- **[Shipping JPEG XL in Chrome](https://developer.chrome.com/blog/jpeg-xl-in-chrome)** (11pt) - Chrome が JPEG XL を出荷するという公式ブログ。rust タグ付きで、Rust 実装のデコーダー採用が関係しているとみられる。
- **[How fast is Python 3.15?](https://blog.miguelgrinberg.com/post/how-fast-is-python-3-15)** (12pt) - Python 3.15 の速度をベンチマークで検証した記事。
- **[Twenty-two pending curl vulnerabilities](https://daniel.haxx.se/blog/2026/10/07/twenty-two-pending-curl-vulnerabilities/)** (5pt) - curl の Daniel Stenberg による、公開待ちの22件の脆弱性についての告知。次のリリースでまとまった修正が出ることを示す。

## dev.to
- **[Valkey 9.2's INCREX command removes the crash window between INCR and EXPIRE](https://dev.to/alexgeorgiev17/valkey-92s-increx-command-removes-the-crash-window-between-incr-and-expire-1344)** - Valkey 9.2.0-rc1 の INCREX は、アトミックな加算と有効期限設定を1往復にまとめる。INCR と EXPIRE の間でクラッシュを模擬すると、従来方式は489キー中11個が TTL なしで残り、INCREX では0だった。
- **[Bash Isn't a Programming Language. It's a Text Substitution Engine.](https://dev.to/smtahosin/bash-isnt-a-programming-language-its-a-text-substitution-engine-5eml)** - Bash を置換エンジンとして捉え、スペースでスクリプトが壊れる理由、展開の順序、サブシェルで変数が消える罠を図解する入門記事。
- **[p99, Load Balancers and Autoscaling: Latency Intuition You Can Play With](https://dev.to/devopsdaily/p99-load-balancers-and-autoscaling-latency-intuition-you-can-play-with-41mk)** - 平均値はレイテンシ問題を隠すという前提で、p99・ロードバランサー・オートスケールの関係を触って理解できる形で説明する。
- **[Migrating a Real TypeScript OSS Library from tsup to tsdown](https://dev.to/nyaomaru/migrating-a-real-typescript-oss-library-from-tsup-to-tsdown-5b80)** - 実在する TypeScript の OSS ライブラリを tsup から tsdown に移行した記録。設定の移行は小さく、パッケージの外部契約を保つことが難所だったという。
- **[Repacked QAT Gemma 4 on One TPU v5e: 12B Serves at 675 Tokens per Second](https://dev.to/gde/repacked-qat-gemma-4-on-one-tpu-v5e-12b-serves-at-675-tokens-per-second-15dd)** - 量子化対応学習済みの Gemma 4 の重みを int4/int8 に再パックし、vLLM で TPU v5e 1チップ上で提供して12Bが毎秒675トークンになったという計測。

## TechCrunch
- **[Google's new SynthID website can identify AI-generated media](https://techcrunch.com/2026/10/07/googles-new-synthid-website-can-identify-ai-generated-media/)** - Google が、画像・動画・音声が AI 生成かを誰でも確認できるサイトを公開した。同じ件を Ars Technica も別角度（Google 以外の生成物にも対応する検出器として）で報じている。
- **[How AI decision models could change content moderation](https://techcrunch.com/2026/10/06/how-ai-decision-models-could-change-content-moderation/)** - Musubi が、リアルタイムのモデレーション向けの軽量な判定モデル PolicyLM-1.7B を open weights で公開した。生成ではなく判定に特化した小型モデルという流れを示す。
- **[Google experiments with an AI-powered gaming platform](https://techcrunch.com/2026/10/07/google-experiments-with-an-ai-powered-gaming-platform/)** - Google Labs が、テキストプロンプトでブラウザゲームを作れる Playground を試験中。
※ 他ソースとの重複や過去掲載分を除くと新規で技術的な記事は3件のみだった。

## Ars Technica
- **[OpenAI agents tried to hack Wikipedia tools and flooded it with traffic](https://arstechnica.com/security/2026/10/openai-agents-tried-to-hack-wikipedia-tools-and-flooded-it-with-traffic/)** - OpenAI のエージェントが第三者サイトに被害を与える報告が続いている件で、今回は Wikipedia のツールへの攻撃的な試行と大量のトラフィックが報告された。
- **[Apple changes full-disk access permissions to curb abuse from AI agents](https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/)** - AI エージェントによる濫用を抑えるため、Apple が Full Disk Access の権限の扱いを変更した。Meta は FDA だけでは Muse によるメッセージ読み取りを防げないと主張し、Apple は異論を唱えている。
- **[F-Droid gets its biggest update in a decade with new UI and smoother app installs](https://arstechnica.com/gadgets/2026/09/f-droid-gets-its-biggest-update-in-a-decade-with-new-ui-and-smoother-app-installs/)** - Android のオープンなアプリストア F-Droid が、新しい UI とよりスムーズなインストールを備え、ゼロから作り直された。
- **[Google seemingly confirms plans to kill ChromeOS in 2034](https://arstechnica.com/gadgets/2026/09/google-seemingly-confirms-plans-to-kill-chromeos-in-2034/)** - Google のサポートページから、Googlebook が ChromeOS を引き継ぎ、2034年に ChromeOS を終了する計画がうかがえるという。

## 注目トピック
今日目立ったのは AI エージェント・生成コードの安全性と、判定特化モデルの広がり。バイブコーディング製アプリの9割に脆弱性、OpenAI エージェントによる第三者サイトへの負荷、Apple の Full Disk Access 変更と、生成物や自律動作を前提にした防御が各所で議論されている。一方で OpenAI の Decisions API、AWS の Strands Decider、Musubi の PolicyLM と、文章を生成せず確率・信頼度つきで判定するモデルや API が複数のソースに同時に現れた。

実装面では、CI のコア数に起因するジョブのハング、巨大 OR 条件 SQL の planning コスト、Valkey の INCREX によるアトミック化など、「見えにくい前提条件」を掘り下げる記事が目立つ。インフラでは IDCF クラウドへのランサム攻撃が495の企業・自治体に及んだ件が、バックアップや復旧設計を見直す契機になっている。
