---
title: "Tech Feed ダイジェスト（2026年10月15日）"
date: "2026-10-15T14:05"
category: "summary"
summary: "連続不正アクセスの攻撃手法、ソースネクスト漏えい、MCP/A2Aの構造的リスク、Let's Encrypt 64日化、CloudWatchログルーティングなど"
tags: ["security", "ai", "aws", "observability", "tls", "mcp", "llm", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[連続不正アクセス事案の攻撃手法に関する調査 - JPCERT/CC Eyes](https://blogs.jpcert.or.jp/ja/2026/10/web_api_attacks.html)** ([48users](https://b.hatena.ne.jp/entry/s/blogs.jpcert.or.jp/ja/2026/10/web_api_attacks.html)) - 相次ぐ不正アクセス事案について、JPCERT/CC が攻撃手法の観点から調査をまとめたもの。URL からは Web/API を狙った攻撃が主題と読み取れ、自社の API 公開面を点検する際の一次情報になる。
- **[ソースネクスト、当社サイトへの不正アクセスによるお客様情報流出のお詫びとお知らせ](https://www.sourcenext.com/support/i/2026/1015_info/)** ([183users](https://b.hatena.ne.jp/entry/s/www.sourcenext.com/support/i/2026/1015_info/)) - 同社サイトへの不正アクセスで最大 2,251 万件の顧客情報が流出した可能性があるとの公式告知。報道ではパスワード再設定が呼びかけられている。同じ件を NHK や Impress も別角度で報じている。
- **[PlayStation 5で27Bの生成AIが動作。脱獄の進展次第ではPS5もAI需要の餌食になる可能性](https://gazlog.jp/entry/ps5-can-run-27b-llm/)** ([115users](https://b.hatena.ne.jp/entry/s/gazlog.jp/entry/ps5-can-run-27b-llm/)) - 民生ゲーム機のハードウェアで 27B パラメータ級の LLM を動かせたという話。専用 GPU でなくても統合メモリ型の SoC が推論に使えることを示し、コンシューマ機が AI 需要で逼迫する可能性にも触れている。
- **[カラーミーショップのWebhook開発で見えた、届けることと守ることの設計判断 - Pepabo Tech Portal](https://tech.pepabo.com/2026/10/15/colorme-webhook-design/)** ([15users](https://b.hatena.ne.jp/entry/s/tech.pepabo.com/2026/10/15/colorme-webhook-design/)) - EC プラットフォームの Webhook 実装で、配信の確実性と受信側・提供側の保護をどう両立したかの設計判断をまとめた記事。
- **[AndroidスマホにログインしたGoogleアカウントすべてに電話番号が自動で紐づけられることが判明](https://gigazine.net/news/20261015-google-account-link-phone-number/)** ([49users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261015-google-account-link-phone-number/)) - Android 端末にログインした Google アカウントに電話番号が自動で紐づく挙動が確認されたという報告。アカウント識別やプライバシー設計に関わる。

## Zenn
- **[OpenTelemetryでStep Functions越しにtraceparentを引き回し、複数Lambdaを一つのトレースにつなぐ](https://zenn.dev/boy_techblog/articles/connecting-trace-serverless)** - X-Ray SDK から OpenTelemetry への移行 PoC。Step Functions を挟んでも W3C の traceparent を引き継ぎ、複数 Lambda を単一トレースにつなぐ実装を、OTLP 直送の構成で解説している。
- **[話題の逆解析 MCP「REA」を Claude Code に隔離してつないだ——静的解析の A/B 試験と安全設計](https://zenn.dev/keigoly/articles/8738d8d241b5a1)** - 逆解析ツールをエージェントに渡す際、隔離環境を用意して評価した記録。静的な JS/Web 解析では正確さは標準ツールと同等で、REA 導入時は試行錯誤が増えて所要時間が最大 2.00 倍、API 換算費用が最大 1.67 倍になったという。
- **[【LocalLLM】Claude Codeの代わりになる？精度・同時人数・費用を検証](https://zenn.dev/solvio/articles/6d374a9224327a)** - NVIDIA B200 を 1 枚借り、社内 GPU サーバーでの LocalLLM 運用を想定して、コーディング精度、同時利用人数、費用の 3 点を Claude Code と比較した検証。
- **[【Salesforce】Agent Script入門｜Agentforceの従業員エージェントを作ってみた](https://zenn.dev/actbe_tech/articles/57561ffebaf9ed)** - 指示文に「必ず」と書いても LLM が手順を飛ばす問題に対し、毎回同じ動きをさせたい部分をコードで書ける Agent Script で決定的に制御するアプローチを紹介。
- **[【セキュリティ】お客さんからの「うちは大丈夫？」に答えるため、IPAの点検項目をレガシーPHPのECサイトで上から順にやってみた](https://zenn.dev/subara3/articles/b90ff538d87aa6)** - IPA が 10/9 に出した不正アクセス事案を踏まえた対策の点検項目を、実際のレガシー PHP 製 EC サイトに順に当てはめた実践記録。

## Qiita
- **[ついに来た！New RelicのAPI Keyに最終利用日時・無効化・チーム所有者が追加されたので棚卸ししてみた](https://qiita.com/seamoooooo/items/431c4a6be67c605c36be)** - User key の最終利用日時、キーの無効化／再有効化、Ingest key へのチーム所有者付与の 3 機能を使った API キー棚卸しの手順。未使用キーの特定と安全な失効に役立つ。
- **[重複率0%でも安心できない？Cucumberのステップ定義に潜む重複を見つける](https://qiita.com/figueiredoluiz/items/6337f9c909fe0f60e7c2)** - Rust 製 CLI「CukeDedup」（MIT）の紹介。Cucumber/Gherkin のステップ定義を静的解析し、重複・曖昧さ・未使用定義を検出する（冒頭抜粋より）。
- **[Claude Haiku 5.5 は判断特化モデルの代わりになるのか？](https://qiita.com/kikuziro/items/53465eeb52b464757555)** - 分類・ルーティング・可否判定などの「判断」タスクで、判断特化の小型モデルと汎用 LLM（Haiku 5.5）のどちらを使うべきかを検証する記事（冒頭抜粋より）。
- **[OCI移行後のWindowsインスタンスが9時間前になってしまうのを回避](https://qiita.com/tkonishi/items/ec596b57b750b5f1881d)** - OCI へ移行した Windows Server の時刻が、タイムゾーンが日本でも UTC になってしまう問題のトラブルシュート。移行元の NTP サーバーに到達できない場合に起きやすい。
- **[Claude Code を閉じても、裏で起動したサーバーが残ることがある。見分け方は画面下の「1 shell」](https://qiita.com/suwa_nobu/items/3a34591f130da2f570f5)** - Codex CLI の常駐デーモン問題を受け、Claude Code が終了後に何を残すかを確認した記事。バックグラウンド起動したサーバーが残る場合の見分け方を扱う（冒頭抜粋より）。

## AWS 新着
- **[Amazon CloudWatch announces log routing and chained log parsers](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing/)** (2026-10-14) - CloudWatch の pipelines が条件付きログルーティングとパーサーの連鎖に対応。ログの変換方法と送り先ロググループを細かく制御できる。
- **[AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)** (2026-10-05) - 旧 AWS Security Agent 系のペネトレーションテストが CI/CD パイプラインに統合され、継続的に実行できるようになった（パブリックプレビュー）。
- **[Amazon Aurora DSQL now supports partial indexes](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-dsql-partial-indexes/)** (2026-10-02) - 条件を満たす行だけを格納する部分インデックスに対応。クエリ性能の向上とインデックスのストレージ削減が見込める。
- **[Amazon EKS Auto Mode now supports advanced compute configuration](https://aws.amazon.com/about-aws/whats-new/2026/10/eks-auto-mode-advanced-compute-config/)** (2026-10-01) - NodeClass リソースから kubelet 設定、Linux カーネル sysctl、hugepages を直接調整可能に。特殊なチューニングが必要なワークロードを Auto Mode で動かせる。
- **[Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)** (2026-10-02) - VPC Lattice を使う ECS サービスで、ビルトインのブルー/グリーン、リニア、カナリアデプロイ戦略が使えるようになった。

## Lobsters
- **[What I Self-Host](https://viceconsole.fyi/blog/2026/10/10/what-i-self-host/)** (65pt) - 個人が自前運用しているサービス群を紹介する devops タグの記事。コメントも 39 件と活発で、セルフホスト構成の実例として参考になる。
- **[Fancy Curl Sites](https://nytpu.com/gemlog/2026-03-18)** (57pt) - curl で叩くとターミナル向けに工夫された出力を返す Web サイトを集めた記事（web タグ）。CLI から使える小さなサービスのアイデア集として読める。
- **[yet another place where a linux man page is inaccurate](https://sebsite.pw/w/20261014-initstate.html)** (34pt) - Linux の man ページ（タイトルから initstate 関連）の記述が実装と食い違っている箇所を指摘する C/Linux 記事。ドキュメントと実装の差異に注意を促す。
- **[Awesome Gaming on Linux Without Cheating](https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2)** (30pt) - Epic が Easy Anti-Cheat の Linux 向け v2 を発表。チート対策と Linux ゲーミングの両立が主題で、コメントも 30 件と議論が活発。
- **[We found a Tencent agent fleet](https://swarmcha.se/posts/chinese-agent-fleet-full-report)** (17pt) - Tencent 関連とされる AI エージェント群を発見したとする調査レポート（security タグ）。

## dev.to
- **[How Do You Validate `unknown` in TypeScript Without a Schema Library?](https://dev.to/nyaomaru/how-do-you-validate-unknown-in-typescript-without-a-schema-library-1a11)** - Zod などのスキーマライブラリを使わずに、TypeScript の `unknown` を型安全に検証する方法を扱う実装寄りの記事。
- **[Ctrl-C won't stop a bash loop if the program inside it catches the signal](https://dev.to/remdore/ctrl-c-wont-stop-a-bash-loop-if-the-program-inside-it-catches-the-signal-134i)** - Python/Node など SIGINT を捕捉して正常終了するプログラムを bash のループ内で動かすと、bash が次の反復へ進んでしまう現象の解説。シェルごとに挙動が異なる点も検証している。
- **[How Docker Works Under the Hood: Watch Namespaces Isolate a Container and cgroups Stop a Fork Bomb](https://dev.to/devopsdaily/how-docker-works-under-the-hood-watch-namespaces-isolate-a-container-and-cgroups-stop-a-fork-bomb-2k22)** - namespace によるプロセス隔離と cgroups によるリソース制限（fork bomb の抑止）を、実際にコマンドで確かめながら学べるコンテナ内部の解説。
- **[DuckDB 2.0 alpha's triggers cost three times more per row than per statement](https://dev.to/alexgeorgiev17/duckdb-20-alphas-triggers-cost-three-times-more-per-row-than-per-statement-13cj)** - DuckDB 2.0 alpha のトリガーを 50 万行 INSERT でベンチマークし、行単位トリガーは素の INSERT の約 3 倍のコストになると報告。
- **[Gemma 4 on a Used 8 GB RTX 3050: 116 Tokens/s for One User, 618 for 64](https://dev.to/gde/gemma-4-on-a-used-8-gb-rtx-3050-116-tokenss-for-one-user-618-for-64-k6h)** - 中古の 8GB RTX 3050 で Gemma 4 E2B/E4B を動かし、単一ユーザー 116 tok/s、64 同時で 618 tok/s などを計測。131k コンテキストや回答品質も確認している。

## TechCrunch
- **[Citizen Lab says governments are abusing online ads to hack people with 'zero-click' spyware](https://techcrunch.com/2026/10/15/citizen-lab-says-governments-are-abusing-online-ads-to-hack-people-with-zero-click-spyware/)** - Citizen Lab が、悪意ある広告を表示されただけで感染する「ゼロクリック」スパイウェアを政府が悪用している証拠を報告。Al Jazeera の数十台の端末が侵害された。
- **[Figma announces new features to define how agents work on its platform](https://techcrunch.com/2026/10/14/figma-announces-new-features-to-define-how-agents-work-on-its-platform/)** - Figma がエージェントの動作を規定する新機能を発表し、code layers 機能もオープンベータで提供。デザインツール側でエージェント連携の枠組みが整いつつある。
- **[Ricursive Intelligence is betting on AI-designed chips to help solve the compute crisis](https://techcrunch.com/2026/10/14/ricursive-intelligence-is-betting-on-ai-designed-chips-to-help-solve-the-compute-crisis/)** - 設計の反復から学んで次の設計を改善する、チップ設計自動化 AI を開発するスタートアップ。計算資源不足への一つのアプローチ。

## Ars Technica
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信に MCP を使う際の信頼ギャップにより、悪意あるプロンプトがエージェントからエージェントへ伝播する構造的な欠陥を報じる。Google 等のエージェントの脆弱性が例として挙げられている。
- **[Let's Encrypt cuts certificate lifetimes to 64 days starting February 2027](https://arstechnica.com/gadgets/2026/10/lets-encrypt-cuts-certificate-lifetimes-to-64-days-starting-february-2027/)** - Let's Encrypt が 2027 年 2 月から証明書の有効期間を 64 日に短縮する。ACME による自動更新が前提となるため、手動運用や更新監視の見直しが必要。
- **[Cloudflare plans to issue quantum-safe TLS certificates](https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/)** - Cloudflare が耐量子 TLS 証明書の発行を計画。Web 認証エコシステム全体の大規模な刷新の一環という位置づけ。
- **[LLMs respond differently to harmful prompts when AI watermarking is used](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)** - SynthID によるテキスト透かしが、モデルが本来拒否する有害な指示に従ってしまう原因になり得るという研究。
- **[Epic says its new vibe-coded Epic Games Launcher is faster than Steam](https://arstechnica.com/gaming/2026/10/programming-is-hard-epic-games-leans-on-vibe-coding-for-its-new-launcher-app/)** - Epic が AI 支援（vibe coding）で作った新ランチャーを「Steam より高速」と主張。ただし Preview 版で「バグがある」と警告している。

## 注目トピック
今日は「AI エージェントを安全に動かす」話題が複数ソースにまたがった。Ars Technica の MCP/A2A の構造的リスク、Zenn の REA を隔離して Claude Code に接続した検証、Zenn の Agent Script による決定的制御、Citizen Lab のゼロクリック攻撃は、いずれも信頼境界をどこに引くかという同じ問いに行き着く。国内では JPCERT/CC の攻撃手法調査やソースネクストの流出など不正アクセス事案が続いており、IPA の点検項目を実際のシステムに当てはめる実践記事も出ている。

インフラ面では、Let's Encrypt の 64 日化や Cloudflare の耐量子証明書に見られるように、証明書の短命化と自動化が前提になりつつある。観測性では CloudWatch の pipelines 強化や OpenTelemetry の分散トレース継承など、ログ・トレースの経路制御が引き続き実務の焦点だ。ローカル LLM も、PS5 での 27B 動作や RTX 3050 での同時 64 ユーザー計測のように、民生ハードでの実用性が検証され続けている。
