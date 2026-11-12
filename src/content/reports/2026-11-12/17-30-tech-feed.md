---
title: "Tech Feed ダイジェスト（2026年11月13日）"
date: "2026-11-12T17:30"
category: "summary"
summary: "GitHub Actions 広域サプライチェーン攻撃、Node.js 脆弱性、AWS Nitro Sandboxes、UEFI ブートキット、Nvidia CEO 交代などを収録"
tags: ["security", "supply-chain", "aws", "ai-agent", "nodejs", "uefi", "nvidia"]
---

## はてなブックマーク (テクノロジー)
- **[Software Factoryの先へ：全社の仕事をAI-NativeにするUbieの内製クラウドエージェント基盤](https://zenn.dev/ubie_dev/articles/45501469c9c044)** ([147users](https://b.hatena.ne.jp/entry/s/zenn.dev/ubie_dev/articles/45501469c9c044)) - Ubie CTO による、2023年から内製してきたクラウドエージェント基盤の変遷。Web UI や Slack を起点に、エンジニアリング以外の全社業務までエージェント化していく設計思想を紹介している。
- **[そのヤバいDockerイメージをいつまで使うのか](https://scrapbox.io/keroxp/%E3%81%9D%E3%81%AE%E3%83%A4%E3%83%90%E3%81%84Docker%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%82%92%E3%81%84%E3%81%A4%E3%81%BE%E3%81%A7%E4%BD%BF%E3%81%86%E3%81%AE%E3%81%8B)** ([104users](https://b.hatena.ne.jp/entry/s/scrapbox.io/keroxp/%E3%81%9D%E3%81%AE%E3%83%A4%E3%83%90%E3%81%84Docker%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%82%92%E3%81%84%E3%81%A4%E3%81%BE%E3%81%A7%E4%BD%BF%E3%81%86%E3%81%AE%E3%81%8B)) - 脆弱性や古さを抱えたまま使い続けられがちなコンテナイメージの扱いを問う記事。ベースイメージ選定とサプライチェーンの観点でタイトルから読み取れる。
- **[WebサイトをAgent Readyにしよう](https://unvalley.me/ja/blog/1793627906)** ([73users](https://b.hatena.ne.jp/entry/s/unvalley.me/ja/blog/1793627906)) - AI エージェントが読み取り・操作しやすいサイトにするための整備を解説する記事。人間向け UI だけでなくエージェント向けの入り口も設計対象になる流れを示す。
- **[GitHub Actions を狙った広域サプライチェーン攻撃（11/10~11/12）に関する注意喚起](https://blog.flatt.tech/entry/github_actions_widespread_supply_chain_attack)** ([20users](https://b.hatena.ne.jp/entry/s/blog.flatt.tech/entry/github_actions_widespread_supply_chain_attack)) - GMO Flatt Security による、11/10〜11/12 に確認された GitHub Actions を狙う広域攻撃の注意喚起。ワークフローの権限・参照固定の点検が必要になる。
- **[数十億人のユーザー数をわずか数KBのメモリで推定できるアルゴリズム「HyperLogLog」とは？](https://gigazine.net/news/20261112-hyperloglog-with-coin-toss/)** ([39users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261112-hyperloglog-with-coin-toss/)) - コイン投げの連続表の長さからユニーク数を確率的に推定する HyperLogLog の仕組みを平易に解説。Redis や各種 DB の近似カウントの背景知識になる。

## Zenn
- **[Node.js 22 / 24 / 26 の脆弱性、自分のアプリが影響を受けるか確認する方法【2026年11月】](https://zenn.dev/rakko_inc/articles/nodejs-security-nov-2026-proxy)** - 11/11 公開の Node.js セキュリティリリースのうち High の 7 件は、Node.js 自身が TLS や HTTP/2 を処理する構成で問題になるため、LB や nginx の背後にある構成には届きにくいと整理している。
- **[AIエージェントが決定を勝手に変えてしまった5つのパターンと工夫](https://zenn.dev/dress_code/articles/568fd547315abe)** - ADR と OpenSpec の仕様書を読ませていても、質問が「仕様変更の指示」として記録されたり、未承認の提案が決定済み扱いになる現象を分類し、対策を紹介する。
- **[libsignal のグループ暗号化を追って、署名改ざんのテストを追加した](https://zenn.dev/under_michi/articles/7791295efdb23e)** - Signal の libsignal でグループ署名まわりの未テストケースをデバッグで見つけ、テストを追加して PR がマージされた実験レポート。
- **[AI ファーストな管理画面を、WebMCP もどきで実現したい](https://zenn.dev/tokium_dev/articles/llm-admin-interface)** - 肥大化しがちな社内管理画面を、LLM が操作できる形で作り直す試み。画面の機能を WebMCP 風にエージェントへ公開する設計を探っている。
- **[上書きされたドラレコの映像は、ファイルの“余り”にまだ残っていた](https://zenn.dev/haruto_miyakawa/articles/dashcam-overwritten-video-in-file-slack)** - 録画ファイルが固定サイズで、新しい録画の後ろに古い録画が残る「スラック領域」から映像を取り出して再生可能にするまでの調査記録。

## Qiita
- **[CVE-2026-98432（Linuxカーネル IPv4 TCPのuse-after-free）各ディストリビューションの対応状況【2026年11月10日時点】](https://qiita.com/k2_naka/items/692fc8b09d9a412c4383)** - Linux カーネルの TCP における use-after-free について、ディストリビューションごとの修正状況を整理した記事。運用中のサーバーのパッチ判断に使える（冒頭抜粋による）。
- **[CLAUDE.md に「このコードはあなたのもの」と書くと、重複したコードをまとめてくれるのか。Claude Code・Codex・Gemini CLI で132回試したら、まとめたのは Claude だけだった](https://qiita.com/suwa_nobu/items/1dd9df248ee6f4c9dfd4)** - AI がコードをコピーして似た関数を増やす問題に対し、指示文の効果を3ツール・132回の試行で比較した検証。
- **[シングル AZ 構成の本番環境 EC2 を夜間土日に停止する運用のリスクについて考える](https://qiita.com/takeda_h/items/38d3f358b4e7f09efcd3)** - 自治体のガバメントクラウドでのコスト削減策として出る、シングル AZ 化や夜間土日停止の運用リスクを検討する記事。
- **[PRの脆弱性をAIが直す「CodeMender」を見て、新卒が基礎を学ぶ理由を考えた](https://qiita.com/N-Kyo/items/23697fc1e92c288b426b)** - Google Cloud が紹介した、CodeMender を GitHub の PR に組み込む構成を題材に、AI が脆弱性を直す時代の基礎学習の意味を考察する。
- **[RTLのモックを差し替えて再度renderしても要素が変わらない](https://qiita.com/J-T_ky2g/items/ed88ecaccb135410ed2c)** - Vitest と React Testing Library で、テストケースごとのモック差し替えがうまくいかない問題のトラブルシュート。

## AWS 新着
- **[Introducing AWS Nitro Sandboxes on Amazon EKS, ECS and EC2 for hardware isolated pods, tasks and VMs](https://aws.amazon.com/about-aws/whats-new/2026/11/nitro-sandboxes-eks-ecs-ec2/)** (2026-11-09) - Nitro Hypervisor が管理する軽量 VM を EKS の Pod、ECS のタスク、単体 VM として使え、ハードウェアレベルで分離できる。信頼できないコードを実行するエージェント基盤などで効く。
- **[Amazon DynamoDB now supports bulk put items](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-dynamodb-now-supports-bulk-put-items/)** (2026-11-05) - S3 のデータを既存の DynamoDB テーブルへ書き込むフルマネージド機能が GA。一括投入のために自前でバッチ処理を書く必要が減る。
- **[Amazon EKS Auto Mode and Karpenter now support Dynamic Resource Allocation](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-karpenter-dra/)** (2026-11-09) - NVIDIA GPU と EFA ネットワークデバイスについて、Kubernetes の DRA を EKS Auto Mode と Karpenter で扱えるようになった。
- **[Amazon Athena introduces system tables for observability, auditing, and usage analytics](https://aws.amazon.com/about-aws/whats-new/2026/11/athena-system-tables/)** (2026-11-09) - 有効化すると利用データが自動で記録され、SQL で観測・監査・利用分析ができる。
- **[AWS Systems Manager Parameter Store now allows organization and validation with built-in data types](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-ssm-parameter-store-allows-organization-validation-with-new-data-types/)** (2026-11-05) - 13 種類の新しいパラメータ型が追加され、作成・更新時に値が自動検証される。設定値の不正をデプロイ前に弾ける。

## Lobsters
- **[In Memoriam: Tim Peters 1952–2026](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028)** (106pt) - Python コミュニティの長年の貢献者 Tim Peters の訃報。Timsort や Zen of Python で知られる。
- **[For the first time, a C++ standard failed to pass the national bodies](https://herecomesthemoon.net/2026/11/cpp26-failed-the-national-bodies/)** (33pt) - C++26 が初めて各国標準化団体の承認を通らなかったという話題。標準化プロセスと言語の今後に関わる。
- **[Let Over Lambda の全文が無料でオンライン公開](https://letoverlambda.com/)** (31pt) - Common Lisp のマクロを深く扱う書籍『Let Over Lambda』が全編オンラインで読めるようになった。
- **[Hijacking Samsung TV Smart Hub Ads](https://dvratil.cz/2026/11/hijacking-samsung-tv-smart-hub-ads/)** (29pt) - Samsung TV の Smart Hub 広告の通信を解析して乗っ取る、ネットワーク／リバースエンジニアリングの記事。
- **[Andrew Kensler's permute()](https://andrew-helmer.github.io/permute/)** (19pt) - 状態を持たず定数時間で、疑似ランダムな順序の配列走査を実現する関数 permute() の解説。

## dev.to
- **[ClickHouse 26.10's string filter during scan cuts a selective LIKE query's memory 25-fold](https://dev.to/alexgeorgiev17/clickhouse-2610s-string-filter-during-scan-cuts-a-selective-like-querys-memory-25-fold-228j)** - 新設定 apply_string_filters_during_scan で選択的 LIKE クエリのピークメモリが 37.6MB から 1.5MB に下がる一方、単純な WHERE 等価条件は PREWHERE に書き換えないと効かなかったという実測。
- **[Apache httpd shipped a critical HTTP/2 RCE yesterday, and one of the finders was a machine: CVE-2026-119618 and the three-gate audit](https://dev.to/slabb/apache-httpd-shipped-a-critical-http2-rce-yesterday-and-one-of-the-finders-was-a-machine-5jj)** - mod_http2 の競合状態によるヒープ破壊で RCE に至る問題（2.4.55〜2.4.70、2.4.71 で修正）。発見者に Anthropic の OSS Scanner が含まれ、著者が手元環境の影響有無を監査する。
- **["Don't reveal it" is not an access control. RAG permissions belong in retrieval.](https://dev.to/cyclopt_dimitrisk/dont-reveal-it-is-not-an-access-control-rag-permissions-belong-in-retrieval-3475)** - RAG で「見せるな」とプロンプトで指示しても権限管理にならず、検索段階でアクセス制御を適用すべきだと論じる。
- **[Six Serving Engines on One Tesla T4: Gemma 4 E2B on a Turing GPU](https://dev.to/gde/six-serving-engines-on-one-tesla-t4-gemma-4-e2b-on-a-turing-gpu-3a6i)** - llama.cpp、vLLM、SGLang など6つの推論エンジンで同一モデルを比較。精度は同等で、ドラフトモデル付き vLLM が全負荷で先行した。
- **[Enterprise SSO for B2B SaaS: How to Prepare Before Your First Big Customer Asks](https://dev.to/hadil/enterprise-sso-for-b2b-saas-how-to-prepare-before-your-first-big-customer-asks-50p6)** - 大口顧客から求められるエンタープライズ SSO に、Keycloak などを使って事前に備える方法。

## TechCrunch
- **[United Airlines blocks AI agents from booking flights, citing cybersecurity risks](https://techcrunch.com/2026/11/12/united-airlines-blocks-ai-agents-from-booking-flights-citing-cybersecurity-risks/)** - ユナイテッド航空が、サイバーセキュリティ上のリスクを理由に、AI エージェントによる予約・変更を認めない方針を示した。エージェントによる自動操作を事業者側が拒否する動きの一例。
- **[SoftBank's billion-dollar loss may have put a cap on AI's natural gas ambitions](https://techcrunch.com/2026/11/12/softbanks-billion-dollar-loss-may-have-put-a-cap-on-ais-natural-gas-ambitions/)** - SoftBank が AI データセンター向けに天然ガスタービンを事前発注して 30 億ドル超の損失を出した件が、電力市場に与える意味を分析する。
- **[CoreWeave turns to customer prepayments, shorter contracts to fund AI growth](https://techcrunch.com/2026/11/11/coreweave-turns-to-customer-prepayments-shorter-contracts-to-fund-ai-growth/)** - CoreWeave が顧客の前払いや契約単位の借り入れ、短期契約で資金を賄う方向に動いている。短期契約は価格上昇につながる可能性がある。
- **[Five ways Jensen Huang's ouster from Nvidia could damage the AI industry](https://techcrunch.com/2026/11/12/five-ways-jensen-huangs-ouster-from-nvidia-could-damage-the-ai-industry/)** - Nvidia の CEO 交代（CFO の Colette Kress が暫定就任）が AI 業界に及ぼす影響を論じる。Ars Technica も同じ件を別角度で報じている。

## Ars Technica
- **[UEFI bootkit infected fully patched Windows machines. Is Microsoft to blame?](https://arstechnica.com/security/2026/11/uefi-bootkit-infected-fully-patched-windows-machines-is-microsoft-to-blame/)** - UEFI ブートキット「BlackX」が、Secure Boot 保護に関する Microsoft の説明の不明瞭さを突き、完全にパッチ済みの Windows にも感染した。
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - EDK2 の重大な欠陥により、ブート初期段階でコード実行が可能になる。ほとんどのサーバーが影響を受けうる。
- **[A Sam Altman parody offers an amusing lesson in memory management](https://arstechnica.com/gadgets/2026/11/a-sam-altman-parody-offers-an-amusing-lesson-in-memory-management/)** - パロディを題材に RAM 容量の数字が実際に妥当かを検証した記事。メモリ管理の基本を再確認できる。
- **[Ukraine's fiber-optic drones get squeezed by AI data center demand](https://arstechnica.com/gadgets/2026/11/ukraines-fiber-optic-drones-get-squeezed-by-ai-data-center-demand/)** - 中国製光ファイバーの供給をめぐり、AI データセンター需要が他用途を圧迫している。AI インフラ需要が部材市場に波及する例。

## 注目トピック
今日は「エージェントを取り巻くセキュリティと分離」が横断的なテーマだった。AWS の Nitro Sandboxes はハードウェア分離された軽量 VM を Pod やタスク単位で提供し、dev.to では RAG の権限管理を検索層に置くべきだという議論、Zenn ではエージェントが決定を勝手に変える問題が扱われた。一方 TechCrunch ではユナイテッド航空が AI エージェントによる予約を拒否しており、エージェントを受け入れる側も防御を固め始めている。

セキュリティ面では、GitHub Actions を狙った広域サプライチェーン攻撃（11/10〜12）、Node.js の HTTP/2 / TLS 関連脆弱性、Apache httpd の HTTP/2 RCE、UEFI ブートキットとファームウェア欠陥と、インフラ下層からアプリ層まで修正対応が重なっている。また Nvidia の CEO 交代は AI ハードウェアのロードマップや調達に不確実性をもたらしうるため、GPU 依存の計画を持つチームは動向を注視したい。
