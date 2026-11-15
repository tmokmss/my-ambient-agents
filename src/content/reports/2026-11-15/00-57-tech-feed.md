---
title: "Tech Feed ダイジェスト（2026年11月15日）"
date: "2026-11-15T00:57"
category: "summary"
summary: "AWS Emulator 一般公開、常時稼働エージェント、Node.js/UEFI の脆弱性、Nitro Sandboxes など"
tags: ["aws", "ai", "agents", "security", "nodejs", "uefi", "rust", "llm"]
---

## はてなブックマーク (テクノロジー)
- **[Building always-on agents](https://claude.com/resources/articles/building-always-on-agents)** ([99users](https://b.hatena.ne.jp/entry/s/claude.com/resources/articles/building-always-on-agents)) - Claude 公式ブログによる、常時稼働（ambient）型エージェントの作り方の解説。スケジュールやイベントで動き続けるエージェントの設計指針を扱う。同じ内容を資料化したスライド（139users）も話題になっている。
- **[GitHub - libracoder/kiri: A small, fast container runtime for macOS, Windows and Linux](https://github.com/libracoder/kiri)** ([16users](https://b.hatena.ne.jp/entry/s/github.com/libracoder/kiri)) - macOS / Windows / Linux で動く小型・高速をうたうコンテナランタイム。OSS の開発ツールとして注目されている。
- **[デスクトップアプリを自動操作できるAUVが良さげかも | kawarimidoll.com](https://kawarimidoll.com/posts/202610182/)** ([5users](https://b.hatena.ne.jp/entry/s/kawarimidoll.com/posts/202610182/)) - デスクトップアプリを自動操作できる AUV というツールの紹介記事。GUI 操作の自動化に使えるか試した所感がまとまっている。
- **[AWS セキュリティサービスでアクセスキーの漏えいリスクを最小限に抑える実践的な手順 | Amazon Web Services](https://aws.amazon.com/jp/blogs/news/practical-steps-to-minimize-key-exposure-using-aws-security-services/)** ([5users](https://b.hatena.ne.jp/entry/s/aws.amazon.com/jp/blogs/news/practical-steps-to-minimize-key-exposure-using-aws-security-services/)) - AWS 公式ブログ。AWS のセキュリティサービスを組み合わせ、アクセスキー漏えいのリスクを抑える実践手順を解説する。
- **[幻覚がひどいAIでも言葉遣いが洗練されていれば人を簡単に騙せることが判明](https://gigazine.net/news/20261114-llm-fluency-credible/)** ([73users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261114-llm-fluency-credible/)) - LLM の出力は、内容が誤っていても文体が洗練されていると人が信じやすくなるという研究の紹介。LLM を組み込むプロダクトで出力検証や UI 上の注意喚起を設計する際の示唆になる。

## Zenn
- **[AIエージェントが決定を勝手に変えてしまった5つのパターンと工夫](https://zenn.dev/dress_code/articles/568fd547315abe)** - Claude Code や Codex に任せる開発で、決定とその理由を ADR に、動作を OpenSpec の仕様書に残していても、決めたはずのことが変わる事例を整理している。仕様への質問が変更指示として記録された、未承諾の提案が決定済み扱いになった、といった具体例が挙がる。
- **[Node.js 22 / 24 / 26 の脆弱性、自分のアプリが影響を受けるか確認する方法【2026年11月】](https://zenn.dev/rakko_inc/articles/nodejs-security-nov-2026-proxy)** - 2026年11月11日公表のセキュリティリリースについて、深刻度 High の 7 件は Node.js 自身が TLS や HTTP/2 を処理する構成で問題になると説明している。ロードバランサーや nginx が手前にある構成には届かないため、構成別の影響確認に使える。
- **[Software Factoryの先へ：全社の仕事をAI-NativeにするUbieの内製クラウドエージェント基盤](https://zenn.dev/ubie_dev/articles/45501469c9c044)** - Ubie CTO による内製クラウドエージェント基盤の変遷紹介。2023年の Web UI / Slack 起点の基盤から、クラウド型エンジニアリングエージェント Uvin を経て、全社業務への展開までを語る。
- **[SlackでMarkdown記法が使えるようになっていた](https://zenn.dev/lnest_knowledge/articles/ed5977bd7b6c1f)** - Markdown 文字列を貼り付けて投稿すると表などが表示されることを、macOS 版とブラウザ版で検証した記事。パイプ区切りの表も描画できるが、導入日やすべての環境で同じ挙動かは未確認と明記されている。
- **[AWSから4.3億円の課金が...バグと思われる高額請求された際にまずすること](https://zenn.dev/tsumita7/articles/aoss-intelligent-ingestion-billing-202610)** - OpenSearch Serverless の Intelligent ingestion を実行した翌朝、当月コストが約277万ドル（約4.3億円）になっていた体験談。高額請求に気づいたときに最初に取るべき対応をまとめている。

## Qiita
- **[CLAUDE.md に「このコードはあなたのもの」と書くと、重複したコードをまとめてくれるのか。Claude Code・Codex・Gemini CLI で132回試したら、まとめたのは Claude だけだった](https://qiita.com/suwa_nobu/items/1dd9df248ee6f4c9dfd4)** - AI が機能追加のたびに似た関数を増やす問題に対し、指示文の一文で挙動が変わるかを 3 つの CLI エージェントで計 132 回試した検証（冒頭抜粋より）。タイトルによれば、重複をまとめたのは Claude だけだったという。
- **[AI駆動開発で実装が速くなったら、CI待ちが一番長くなった——品質を落とさずCIを軽くする](https://qiita.com/ktdatascience/items/b129d5eee1bc9077f085)** - AI で実装サイクルが短縮された結果、CI の待ち時間がボトルネックになったという問題提起。品質を落とさず CI を軽くする方法を扱う。
- **[agentgatewayで始めるMCP管理](https://qiita.com/licux/items/cd639f2ae807b35b6697)** - 接続する MCP サーバーやエージェントが増えると通信の監視・制御が煩雑になる課題に対し、agentgateway で一元管理する入門記事。
- **[AWSでAssumeRoleって2回連続でできるの？試してみたら普通にできた話（ロールチェイニング）](https://qiita.com/nkrk/items/90ca7ee3a3df66d12b2a)** - IAM ロール①を Assume した状態からロール②を Assume する「ロールチェイニング」を実際に試して確認した記事。構築中の仕組みのテストに使える点から調べ始めた経緯が書かれている。
- **[「Error: Expected key descriptor but found "" in ""」 RTLでinput type="number"のデフォルト値0を消す](https://qiita.com/J-T_ky2g/items/757b73893b5fde454b83)** - React Testing Library で input type="number" の値が 0 になり未入力状態を作れない問題のトラブルシュート。`userEvent.clear` を使う解決策が紹介されている。

## AWS 新着
- **[AWS Emulator is now available for building and testing AWS applications locally](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-emulator-now-available/)** (2026-11-11) - AWS API をローカルや CI 上で動かせる AWS Emulator が一般公開された。エンドポイントを切り替えるだけで S3 や DynamoDB などを手元でテストできる。Zenn・Qiita でも CloudFront / API Gateway / Cognito 構成や CDK / Terraform、PR ごとの CI など、検証記事が多数出ている。
- **[Introducing AWS Nitro Sandboxes on Amazon EKS, ECS and EC2 for hardware isolated pods, tasks and VMs](https://aws.amazon.com/about-aws/whats-new/2026/11/nitro-sandboxes-eks-ecs-ec2/)** (2026-11-09) - Nitro Hypervisor が管理する軽量 VM として、EKS の Pod、ECS のタスク、軽量 VM をハードウェアレベルで分離して動かせる。信頼できないコードやエージェント実行の隔離に使える。
- **[Amazon DynamoDB now supports bulk put items](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-dynamodb-now-supports-bulk-put-items/)** (2026-11-05) - S3 上のデータを既存の DynamoDB テーブルへ書き込むフルマネージド機能が GA。自前の取り込みコードを書かずに大量データを投入できる。
- **[AWS Lambda MicroVMs now supports the x86 CPU architecture](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture/)** (2026-11-11) - Lambda MicroVMs が x86 アーキテクチャに対応し、既存の x86 アプリやツール、依存ソフトを再コンパイルや移植なしで動かせるようになった。
- **[Amazon EKS Auto Mode and Karpenter now support Dynamic Resource Allocation](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-karpenter-dra/)** (2026-11-09) - EKS Auto Mode と Karpenter が NVIDIA GPU や EFA ネットワークデバイス向けの Dynamic Resource Allocation (DRA) に対応した。GPU ワークロードのスケジューリングを Kubernetes 標準の仕組みで扱える。

## Lobsters
- **[Writing a DSL for high performance parallel programming in OxCaml](https://blog.janestreet.com/writing-a-dsl-for-high-performance-parallel-programming-in-oxcaml/)** (14pt) - Jane Street による、OxCaml で高性能な並列プログラミング向け DSL を書く記事。タグは performance / plt。
- **[Kildall's algorithm](https://bike.github.io/posts/kildall.html)** (17pt) - 静的解析のデータフロー解析で知られる Kildall のアルゴリズムを、Lisp を題材に解説する記事（タグ: compilers, lisp）。
- **[Creating a self booting ZIP archive](https://goliath32.com/blog/ziphead.html)** (16pt) - ZIP アーカイブ自体をブート可能にするアセンブリ実装の記事。ファイル形式の先頭と末尾の構造を巧みに利用する低レイヤの遊びとして読める。
- **[Don't bother patching: multiple remote code execution vulnerabilities in Danfoss AK-SM800A](https://www.midnightblue.nl/blog/multiple-rce-danfoss-aksm800a)** (9pt) - Midnight Blue による Danfoss AK-SM800A の複数のリモートコード実行脆弱性の調査。タイトルは「パッチを当てても無駄」と示唆している（タグ: linux, security）。
- **[Link Previews and You](https://sable.moe/en/blog/link-previews-and-you/)** (14pt) - チャットなどのリンクプレビュー機能とプライバシーの関係を扱う記事（タグ: privacy, web）。

## dev.to
- **[Six Serving Engines on Four Accelerators: Gemma 4 E2B on an RTX 3050, a T4, an L4 and a TPU v5e](https://dev.to/gde/six-serving-engines-on-four-accelerators-gemma-4-e2b-on-an-rtx-3050-a-t4-an-l4-and-a-tpu-v5e-1a0e)** - 同じ Gemma 4 E2B を 6 つの推論エンジンと 4 種のアクセラレータで比較した検証。3 つの GPU では vLLM（drafter 付き）が首位で、TPU では SGLang-JAX が首位だった。
- **[Bye, live regions. Hello, ariaNotify()](https://dev.to/micaavigliano/bye-live-regions-hello-arianotify-29p8)** - 2026年9月に導入された Web API の `ariaNotify()` が、アクセシビリティ通知に使う ARIA live regions を置き換える流れを解説する。
- **[Why Our Java Memory Crept Up on Flat Traffic: A Modern Stack Post-Mortem](https://dev.to/satyaki_saha_367d015583da/why-our-java-memory-crept-up-on-flat-traffic-a-modern-stack-post-mortem-4lpa)** - スタックのアップグレード後、トラフィックが横ばいなのに Java サービスのメモリ使用量が増え続けた原因を追ったポストモーテム。
- **[Idempotency Is a Product Feature](https://dev.to/shubham399/idempotency-is-a-product-feature-3ofk)** - 冪等性を分散システムの作法にとどめず、リトライを安全にしてユーザーの信頼を保つプロダクト機能として捉える設計論（決済などが題材）。
- **[Swizzle Runtime v0.1.0: How We Reached 209 tok/s and 43ms TTFT on a 4GB Laptop GPU in Pure Rust](https://dev.to/paramveer_singh_53163a04c/swizzle-runtime-v010-how-we-reached-209-toks-and-43ms-ttft-on-a-4gb-laptop-gpu-in-pure-rust-4l7l)** - 純 Rust 実装の推論ランタイムで、4GB のノート PC GPU 上で 209 tok/s・TTFT 43ms を達成した報告。ローカル開発ツールやエッジ向けの用途を想定している。

## TechCrunch
- **[United Airlines blocks AI agents from booking flights, citing cybersecurity risks](https://techcrunch.com/2026/11/12/united-airlines-blocks-ai-agents-from-booking-flights-citing-cybersecurity-risks/)** - ユナイテッド航空が、サイバーセキュリティ上のリスクを理由に、AI エージェントによる航空券の予約・変更を認めないと発表した。エージェント経由の購買を事業者側が制限する動きとして、API やボット対策の設計に影響しうる。

※ 他ソースとの重複・過去レポートとの重複・72時間超の記事を除くと、技術的に掲載できる新規記事は1件のみだった（Nvidia CEO 関連の続報は企業人事・スキャンダル主体のため除外）。

## Ars Technica
- **[UEFI bootkit infected fully patched Windows machines. Is Microsoft to blame?](https://arstechnica.com/security/2026/11/uefi-bootkit-infected-fully-patched-windows-machines-is-microsoft-to-blame/)** - UEFI ブートキット BlackX が、パッチ適用済みの Windows 機にも感染した件。Secure Boot の保護範囲に関する Microsoft の説明不足が悪用されたと指摘している。
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - UEFI 実装の EDK2 に、ブート初期段階でコードを実行できる重大な欠陥が見つかった。多くのサーバーに影響しうる。
- **[IBM to offer access to a dual-processor quantum system in 2027](https://arstechnica.com/science/2026/11/ibm-to-offer-access-to-a-dual-processor-quantum-system-in-2027/)** - IBM が 2027 年に、520 キュービットのチップ 2 枚を連結した量子システムの提供を計画しているという記事。
- **[Seagate's new hybrid drive raises some old questions](https://arstechnica.com/gadgets/2026/11/seagate-resurrects-the-ssd-hdd-hybrid-drive/)** - Seagate が SSD と HDD のハイブリッドドライブ FireCuda Forge を投入した。古くからある発想の再来が、従来と同じ疑問を呼ぶという内容。

## 注目トピック
今日目立ったのは **AWS Emulator の一般公開** で、AWS 公式発表に加え、Zenn と Qiita で CloudFront / API Gateway / Cognito 構成や CDK / Terraform、PR ごとの CI といった検証記事が複数出た。ローカルや CI でクラウド API を再現する選択肢が公式になったことで、結合テストの組み方が変わりそうだ。また Nitro Sandboxes や Lambda MicroVMs のように、ワークロードの隔離と実行基盤の選択肢も広がっている。

もう一つの流れは **エージェントを運用する段階の課題** だ。Claude 公式の常時稼働エージェント解説、Ubie の内製基盤、決定が勝手に変わる問題への ADR / 仕様書での対策、MCP の一元管理、CI がボトルネックになるといった話題が、ソースを横断して並んだ。セキュリティでは Node.js のセキュリティリリース、UEFI の脆弱性、航空会社による AI エージェントの予約ブロックなど、「どの構成なら影響を受けるか」「エージェントをどこまで信頼するか」という判断が問われる話が多い。
