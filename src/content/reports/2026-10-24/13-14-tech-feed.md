---
title: "Tech Feed ダイジェスト（2026年10月24日）"
date: "2026-10-24T13:14"
category: "summary"
summary: "PHP2Shell の痕跡確認、ECS Gateway、eMudhra 中間CA鍵の解読、AIレビューゲートの形骸化、MCPの構造的欠陥など"
tags: ["security", "php", "aws", "ai", "llm", "tls", "c", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[PHPの緊急脆弱性「php2shell」で攻撃されていないか？サーバーに残る3つの痕跡と確認方法](https://engineer-ninaritai.com/php2shell-attack-detection/)** ([303users](https://b.hatena.ne.jp/entry/s/engineer-ninaritai.com/php2shell-attack-detection/)) - パッチ適用後も「すでに侵入されていないか」の確認が必要という観点で、サーバーに残る痕跡の見つけ方を整理した実務向け記事。PHP2Shell は Qiita・Zenn・TechCrunch・dev.to でも大量に取り上げられているが、本レポートでは対応確認の実用性が高いこの記事を代表とした。
- **[決定的なフロントエンドアーキテクチャがいい](https://speakerdeck.com/bengo4com/20261024-vuefes-2026-deterministic-frontend)** ([61users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/bengo4com/20261024-vuefes-2026-deterministic-frontend)) - VueFes 2026 の発表資料。同じ入力から同じ画面状態が決まるフロントエンド設計により、テスト容易性や挙動の予測可能性を高める考え方を扱う。
- **[anthropics/sandbox-runtime](https://github.com/anthropics/sandbox-runtime)** ([15users](https://b.hatena.ne.jp/entry/s/github.com/anthropics/sandbox-runtime)) - コンテナなしで、任意のプロセスにOSレベルでファイルシステム／ネットワーク制限をかける軽量サンドボックスツール。AIエージェントの実行環境を絞る用途で参考になる。
- **[Ruby で任意のユーザー入力を渡してはいけないメソッド](https://blog.n-z.jp/blog/2026-10-09-ruby-insecure-methods.html)** ([11users](https://b.hatena.ne.jp/entry/s/blog.n-z.jp/blog/2026-10-09-ruby-insecure-methods.html)) - ユーザー入力をそのまま渡すと任意コード実行などにつながる Ruby の標準メソッドを整理した、レビュー時のチェックリストになる記事。
- **[GitHub Actions Self-hosted runnerをお手軽にスケールさせる ghalet](https://songmu.jp/riji/entry/2026-10-24-scaling-github-actions-runners-with-ghalet.html)** ([9users](https://b.hatena.ne.jp/entry/s/songmu.jp/riji/entry/2026-10-24-scaling-github-actions-runners-with-ghalet.html)) - 自前ホストの GitHub Actions ランナーを、重いオートスケール基盤なしで増減させるツール ghalet の紹介。

## Zenn
- **[MultiheadAttentionの高速経路がVRAMを18GB食っていた話](https://zenn.dev/genelab_999/articles/387bf151caf716)** - `nn.MultiheadAttention` は eval かつ勾配なしでマスクを渡すと、`need_weights=False` でも SDPA を使わず注意行列を丸ごと確保する。3MP画像で追加18GB、8MPでOOMしていた原因を突き止め、既存のSDPA経路へ回す1ファイルのPRで約87%削減した。
- **[AIコードレビューの不合格率が51%→13%に。3モデル中2つは判定していなかった](https://zenn.dev/taka8823/articles/2df36d66844c15)** - 3モデルでの敵対的差分レビューのうち2モデルが全件 unknown を返していたのに、集計が除外して1モデルだけで合否を決めていた事例。指標が良くなったときこそゲートの異常（有効判定数の減少）を監視すべきという教訓。
- **[eMudhraの中間CA証明書の秘密鍵を求めてみる](https://zenn.dev/herumi/articles/search_bad_emudhra_key)** - eMudhra の中間CAの署名鍵が8ビット以下と脆弱だった件を受け、公開鍵から Python のナイーブな実装で秘密鍵を実際に求めてみた検証。Ars Technica も同件を「eMudhra が TLS 事業から撤退」として別角度で報じている。
- **[リンクで確認した SNS のメール購読に、作り直さずに「解除の保護」を付ける](https://zenn.dev/sk8jp/articles/260e3c0fa07ed9)** - SNS の `AuthenticateOnUnsubscribe` は `ConfirmSubscription` の引数でしか指定できず、リンク確認済みの購読には後から付けられない。作り直さずに解除保護を付ける回避方法を整理している。
- **[webauthn-ruby をもう一回覗いてみた](https://zenn.dev/smartcamp/articles/22bde5829493e5)** - Kaigi on Rails のパスキー発表をきっかけに、webauthn-ruby の最新実装を読み直した記事。マルチテナント環境での実践的な考慮点にも触れている。

## Qiita
- **[3KBしか使えない！奇妙で素敵なゲームエンジン「Playload」のご紹介](https://qiita.com/kitao/items/7fac93e8a7ad6015b0b0)** - Pyxel 作者による、使えるサイズが3KBに限られた極小ゲームエンジン（OSS）。冒頭抜粋から読み取れる範囲では、制約を逆手に取った設計が特徴。
- **[ReActとPlan-Executeを実装して比較する — タスク特性ごとの向き不向き【TypeScript】](https://qiita.com/joinclass/items/21ec0a1cb73de7a270e0)** - 2種類のエージェントの型を TypeScript で実装して比べ、タスク特性による向き不向きを検討する記事。エージェントにどこまで考えさせるかの選定が運用に効くという問題意識から書かれている。
- **[定期タスクの1行の $( ) で、誰もいない朝に止まった：Claude Code の承認待ちと日付の取り方](https://qiita.com/vellum_office/items/923da31d9b8f287caf78)** - Claude デスクトップのローカル定期タスクで、Bash の `$( )` を含む1行が承認待ちになり無人の朝に実行が止まった失敗記録。日付の取り方の見直しを扱う。
- **[Databricks の ai_decide で「個人情報が入っているか」だけ先に判定して、LLM のマスクを減らす](https://qiita.com/kamo-shika/items/6e2223296543af9a7c9e)** - Beta 機能 `ai_decide()` で個人情報の有無だけを先に判定し、LLM によるマスク処理の対象を減らす構成の紹介。前回の `ai_query()` による処理の続編。
- **[Copilot の Agent Builder が凄く進化した。何ができるようになったか、Copilot Studio（GitHub Copilot ハーネス）との違いも整理してみる](https://qiita.com/Takashi_Masumori/items/c559b0291db39b2169c1)** - M365 Copilot のエージェントビルダーに、SKILL.md と同梱ファイルをZIPで上げる「スキル」が追加された。Copilot Studio との違いも整理している。

## AWS 新着
- **[Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services](https://aws.amazon.com/about-aws/whats-new/2026/10/announcing-amazon-ecs-gateway/)** (2026-10-20) - ECS サービス向けの ingress を管理する新リソース。Application Load Balancer などを動的にプロビジョニングし、コンテナアプリのイングレス設計を簡素化する。
- **[Amazon Aurora and Amazon RDS now support On-Demand Capacity Reservations](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-aurora-rds-on-demand-capacity-reservations/)** (2026-10-21) - Aurora/RDS のDBインスタンス用コンピュートを、1つ以上のAZで必要な期間だけ予約できる。スケールアウトや障害復旧時のキャパシティ不足に備えられる。
- **[Amazon DynamoDB global tables now support disassociating replicas](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate/)** (2026-10-20) - グローバルテーブルのレプリカを、テーブルやデータを削除せずに切り離せる。リージョン撤退や移行時の運用が楽になる。
- **[AWS Network Firewall now supports Route 53 Resolved IP Validation](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation/)** (2026-10-21) - ドメインベースのフィルタリングを HTTP/HTTPS 以外の SFTP や SSH にも拡張する。接続先IPの検証により、ドメイン名を偽った通信を防ぐ。
- **[Web Search on AWS Bedrock now supports domain filtering and user location controls](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-web-search-domain-user-location/)** (2026-10-23) - モデルの応答を裏付ける検索結果に対し、ドメインフィルタとユーザー位置情報の指定が可能になった。グラウンディングの精度と信頼性を制御しやすくなる。

## Lobsters
- **[Attention people who think UB is fine](https://blog.habets.se/2026/10/Attention-people-who-think-UB-is-fine.html)** (48pt) - C/C++ の未定義動作（UB）を「実害はない」とみなす態度への批判記事。コメントも40件と議論が活発。
- **[a hacky fucked up way to portably access errno from outside of c](https://sebsite.pw/w/20260925-errno.html)** (30pt) - C 以外の環境から `errno` へポータブルにアクセスするための、かなり力技な手法を紹介する記事。
- **[a neat trick i found for reusing physical memory](https://sebsite.pw/w/20260728-cow.html)** (23pt) - 物理メモリの再利用に関するテクニックの解説（タグは c, programming。タイトルから CoW を使った手法とみられる）。
- **[Twelve years of distributed SQLite](https://philipotoole.com/twelve-years-of-distributed-sqlite/)** (7pt) - 分散SQLiteを12年間開発・運用してきた経験を振り返る記事。

## dev.to
- **[Most Package Managers Won't Stop a Tampered Download by Default](https://dev.to/dhruv1206/most-package-managers-wont-stop-a-tampered-download-by-default-1a67)** - Trail of Bits が25のパッケージマネージャを侵害されたサーバーに対して検証し、全ダウンロードを検証できたのは Go と vcpkg だけだった。CI で変えるべき設定を紹介している。
- **[Caddy 2.11.6 turns a silent config failure on /load into an HTTP 400](https://dev.to/alexgeorgiev17/caddy-2116-turns-a-silent-config-failure-on-load-into-an-http-400-4656)** - これまで設定リロード失敗でも200を返していた Caddy の `/load` が、2.11.6 以降は400と具体的なエラーを返す。CD で設定反映の成否を自動検知しやすくなる。
- **[DuckLess: serverless DuckDB on Google Cloud, in your own project](https://dev.to/gde/duckless-serverless-duckdb-on-google-cloud-in-your-own-project-4o5a)** - GCS 上のファイルと BigQuery のテーブルを使い、自分のプロジェクト内でサーバーレスに DuckDB を動かす構成。実測結果と得られた知見も載っている。
- **[Claude Code File System Boundaries in 2026: What `--add-dir`, Allowed Paths, and Sandbox Roots Actually Restrict](https://dev.to/jsmanifest/claude-code-file-system-boundaries-in-2026-what-add-dir-allowed-paths-and-sandbox-roots-21mp)** - Claude Code のファイル権限が、許可パスとサンドボックスルートの2層に分かれていることを整理する。多くのチームがこの2つを混同しているという指摘。
- **[Small Apache-2.0 Models Against Gemma 4 E2B on One TPU v5e: Which Ones Keep Up?](https://dev.to/gde/small-apache-20-models-against-gemma-4-e2b-on-one-tpu-v5e-which-ones-keep-up-mm4)** - Apache-2.0/MIT の14のオープンウェイトモデルを、TPU v5e 1チップ上で vLLM から同一条件で動かして比較した。

## TechCrunch
- **[Lab testing giant Quest Diagnostics confirms patients' personal and health data was compromised during breach](https://techcrunch.com/2026/10/23/lab-testing-giant-quest-diagnostics-confirms-patients-personal-and-health-data-was-compromised-during-breach/)** - 検査大手 Quest Diagnostics が、患者の個人情報と健康データの侵害を認めた。近ごろ続くヘルスケア系テック企業へのハッキングの一例。
- **[Microsoft's Mustafa Suleyman says its AI outperforms doctors on hard cases as he chases 'medical superintelligence'](https://techcrunch.com/2026/10/22/microsofts-mustafa-suleyman-says-its-ai-outperforms-doctors-on-hard-cases-as-he-chases-medical-superintelligence/)** - Microsoft の診断AIが、難しい症例で一般医を上回ったとする Science 掲載の研究。ただし改善の大半は別要因に由来するように見える、と慎重な見方も示している。

※ 他ソースとの重複や過去レポートとの重複を除くと、72時間以内の技術記事は少なかった。

## Ars Technica
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信に MCP を使うと信頼の境界が曖昧になり、悪意あるプロンプトがエージェントからエージェントへ伝播する構造的欠陥があるという報告。Google などのエージェントが影響を受ける。
- **[Hackers obtain counterfeit TLS certificates for Google and other large services](https://arstechnica.com/security/2026/10/hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services/)** - 3つのドメインレジストリの侵害により、Google など大手サービス名義の不正な TLS 証明書が発行された。ドメイン検証の信頼基盤の弱さを示す。
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - 標的を絞った広告経由でゼロクリックのエクスプロイトが配信され、傭兵型スパイウェアが導入された。広告配信によるスパイウェア配布の初の確認例とみられる。
- **[Does opting out of smart TV tracking work? Research finds "suspicious" traffic.](https://arstechnica.com/gadgets/2026/10/does-opting-out-of-smart-tv-tracking-work-research-finds-suspicious-traffic/)** - スマートTVのトラッキングをオプトアウトしても不審な通信が残る、という研究。OS事業者が当該データを破棄している可能性は低いと研究者は述べている。

## 注目トピック
今日は PHP2Shell（CVE-2026-109618 / 109619）の余波が各ソースを覆った。パッチ適用だけでなく「すでに侵入されていないか」の痕跡確認や、サーバー側の対応状況の確認まで話題が進んでいる。同時に eMudhra の中間CA鍵の脆弱性や、ドメインレジストリ侵害による不正 TLS 証明書も重なり、ソフトウェア更新だけでなく信頼基盤そのものの健全性が問われる一週間になっている。

もう一つの流れは、AIエージェントを動かす周辺の統制だ。OSレベルのサンドボックス（sandbox-runtime）、Claude Code の権限の二層構造、MCP のエージェント間通信の脆弱性、AIレビューのゲートが静かに形骸化していた事例など、エージェントを使う側が「何が実際に判定・制限されているか」を検証する姿勢が重要になっている。
