---
title: "Tech Feed ダイジェスト（2026年10月22日）"
date: "2026-10-21T23:58"
category: "summary"
summary: "eMudhra 中間CA鍵の脆弱性、GitHub CLI の期限付きトークン、Lambda/AWS の新機能、AIエージェント周辺の動向まとめ"
tags: ["security", "ai", "aws", "tls", "devops", "kubernetes", "llm"]
---

## はてなブックマーク (テクノロジー)
- **[GitHub CLI: Opt in to expiring, auto-refreshing OAuth tokens - GitHub Changelog](https://github.blog/changelog/2026-10-21-github-cli-opt-in-to-expiring-auto-refreshing-oauth-tokens/)** ([11users](https://b.hatena.ne.jp/entry/s/github.blog/changelog/2026-10-21-github-cli-opt-in-to-expiring-auto-refreshing-oauth-tokens/)) - GitHub CLI が、有効期限付きで自動更新される OAuth トークンをオプトインで使えるようになった。長寿命トークンの漏洩リスクを下げる方向の変更で、CI や開発端末の認証設計を見直すきっかけになる。
- **[メンテナンス中に503を返すだけでは足りない Google公式ドキュメントで読む必須・推奨・禁止事項](https://www.sem-r.com/entry/20261022/1792605105)** ([13users](https://b.hatena.ne.jp/entry/s/www.sem-r.com/entry/20261022/1792605105)) - 計画メンテナンス時に 503 を返すことに加え、Google 公式ドキュメントが挙げる必須・推奨・禁止事項を整理した記事。メンテナンス運用のある Web サービスで検索への影響を避けるための確認項目になる。
- **[デジタル庁、「神Excel」対策ツールを公開　AIと組み合わせたデータ整備方法も紹介](https://www.itmedia.co.jp/aiplus/article/2610/21/2000002475/)** ([17users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/article/2610/21/2000002475/)) - デジタル庁が、セル結合などで機械可読性が低い「神Excel」への対策ツールを公開し、AI と組み合わせたデータ整備の方法も紹介した。行政に限らず、レガシーなスプレッドシートをデータ基盤に載せる際の参考になる。

## Zenn
- **[EKS に Graviton を導入して、arm64 と amd64 を混ぜて運用を始めました](https://zenn.dev/socialplus/articles/eks-graviton-arm64-migration)** - Rails アプリを動かす EKS で、ノードに Graviton (arm64) を導入し、Spot では arm64 と amd64 を混在させる構成にした事例。マルチアーキテクチャ運用の判断や進め方の参考になる。
- **[Devinに問い合わせ調査を任せて見えてきた「原因未特定」の正体。過去の約700件を分類してみた](https://zenn.dev/canly/articles/9c19bb123e208c)** - CS/CR からの問い合わせの一次調査を AI エージェント Devin に任せている現場で、約700件を分類し、AI が原因を特定しきれない問い合わせの傾向と、何を見られるようにすれば特定できるかを分析している。
- **[dbt と Cloud DLP で面接の文字起こしから氏名を消す実装ガイド](https://zenn.dev/zenkigen_tech/articles/1714ede7f27e10)** - 面接の文字起こし本文に現れる氏名を、dbt と Cloud DLP でマスクするデータパイプラインの実装解説。個人情報を伏せたまま本文を分析対象にする要件への具体的な構成例。
- **[安くて速い Jev を6回チューニングしたら、最後に Claude の grep に2倍差で負けた話](https://zenn.dev/koudai0711/articles/f7a5cc10496820)** - Obsidian のノート選びを Jev に任せようと6回チューニングしたが、Opus に grep させる従来方式の方が当たりが多かった（52件対24件）という検証記事。「新しいモデルを試す前に今のやり方を測る」という教訓が主題。

## Qiita
※ いずれも `<content>` の冒頭抜粋から読み取れる範囲での紹介。
- **[APIキー・パスワードをGitHubに漏らさない7つの設定(.gitignore・gitleaks・コピペOK)](https://qiita.com/jiis-sasaki/items/fc4e677334d67ee1d472)** - `.env` や API キーのうっかりコミットを、手元・GitHub・CI の各段階で防ぐ設定を .gitignore や gitleaks を軸にまとめた実践記事。
- **[Claude Codeの新コマンド「/advisor fable」で、難所だけFableへ自動で相談するAI活用](https://qiita.com/inoyu-qiita/items/2bf7c23b9586ccafb9fd)** - 計画は Opus、難所は Fable に相談、実装は Sonnet というモデルの使い分けを Claude Code で自動化する検証。成果物とトークン消費の変化を比較している。
- **[AI の「直しました」に証拠を付けさせろ！ pstack を Claude Code に入れてみた](https://qiita.com/kobayashi-fuuki/items/a7fbba06bb158dae0e11)** - Cursor の公式プラグインである pstack を Claude Code 環境に導入し、AI の修正報告に証拠を伴わせる運用を試した記事。
- **[Oracle AI Data Platform(AIDP)：Private EndpointのAI LakehouseでKnowledge Base・RAG検索してみてみた](https://qiita.com/shirok/items/8dd19291f959da310c99)** - AIDP で Knowledge Base や Agent を使うために AI Lakehouse を関連付け、Private Endpoint 構成で RAG 検索を試した検証記事。
- **[ARC-AGI-3 の 99.9% を中心に GPT-6 Astra のベンチマークを理解したい](https://qiita.com/masa-asa/items/9d62bfeb91140c7a88a7)** - GPT-6 Astra が ARC-AGI-3 で 99.9% を記録したとされる発表を軸に、ベンチマークの意味と前世代との差を読み解こうとする解説。

## AWS 新着
- **[Amazon Aurora and Amazon RDS now support On-Demand Capacity Reservations](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-aurora-rds-on-demand-capacity-reservations/)** (2026-10-21) - Aurora / RDS の DB インスタンス用コンピュートを、1つ以上の AZ で必要な期間だけ予約できるようになった。スケールアウトやフェイルオーバー時のキャパシティ不足への備えになる。
- **[AWS Network Firewall now supports Route 53 Resolved IP Validation](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation/)** (2026-10-21) - ドメインベースのフィルタリングを HTTP/HTTPS 以外の SFTP や SSH などにも拡張し、接続先 IP の妥当性を検証する機能。
- **[Amazon WorkSpaces simplifies secure AI agent access to enterprise cloud desktops](https://aws.amazon.com/about-aws/whats-new/2026/10/workspaces-ai-agents-oauth-connection-management)** (2026-10-20) - WorkSpaces for AI agents が、マネージド MCP サービスの一部として認証とデスクトップ接続を扱うようになり、エージェントを管理されたクラウドデスクトップへ接続する際の運用負担が減る。
- **[Amazon OpenSearch Service now supports index-level encryption](https://aws.amazon.com/about-aws/whats-new/2026/10/opensearch-index-level-encryption)** (2026-10-12) - インデックスごとに別々の KMS カスタマー管理キーで保管時暗号化できる。テナントやデータ区分ごとに鍵を分けたい設計で選択肢が増える。
- **[AWS Secrets Manager adds managed external secrets support for Databricks and Twilio](https://aws.amazon.com/about-aws/whats-new/2026/10/secrets-manager-managed-external-secrets-databricks-twilio/)** (2026-10-12) - Databricks と Twilio の認証情報を、Secrets Manager のマネージド外部シークレットとして自動ローテーションできる。

## Lobsters
- **[Eight Bits of Trust; eMudhra's CA keys cracked in milliseconds](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/)** (39pt) - eMudhra の中間CA証明書の鍵が極端に短く、ミリ秒で解読できたという技術解説。任意のサーバー用証明書を発行できてしまう信頼チェーンの問題で、Mozilla による Firefox 保護策の告知（167pt）や Ars Technica、はてブでも報じられている。
- **[Firefox Local Mode](https://firefox-source-docs.mozilla.org/devtools-user/local_mode/index.html)** (64pt) - Firefox DevTools のドキュメントに追加された Local Mode の解説ページ。
- **[CVE-2026-107891: musl libc: multiple integer overflow in regcomp](https://www.openwall.com/lists/oss-security/2026/10/21/18)** (22pt) - musl libc の `regcomp` に複数の整数オーバーフローがあり、割り当てサイズの誤りから境界外ヒープ書き込みにつながる可能性がある。musl を使う Alpine 系コンテナなどは修正版の確認が必要。
- **[Passkeys Attestation Trap](https://mjtsai.com/blog/2026/10/15/passkeys-attestation-trap/)** (13pt) - パスキーのアテステーション（認証器の証明）を巡る落とし穴を扱った記事。認証器の種類を縛る設計が利用者の選択肢に与える影響を議論している。
- **[Firefox security patch tests are now private for at least a week](https://groups.google.com/a/mozilla.org/g/firefox-dev/c/4I1HSPtVyrI/m/giGra4ZzAQAJ)** (20pt) - Firefox のセキュリティパッチに付随するテストが、少なくとも1週間は非公開になる。修正差分からの攻撃コード作成を遅らせる狙いと読める。

## dev.to
- **[Idempotency keys for AI agents: why hashing the arguments doesn't work](https://dev.to/anis_meziani_52aab42304a8/idempotency-keys-for-ai-agents-why-hashing-the-arguments-doesnt-work-cap)** - エージェントがリプレイするとメール文面が書き換わり、引数のハッシュが変わってしまうため、冪等性キーは生成内容ではなく安定した「意図」から作るべきだと論じる。
- **[Requests that fail after a Kubernetes rollout has finished](https://dev.to/remdore/requests-that-fail-after-a-kubernetes-rollout-has-finished-1db2)** - DigitalOcean のマネージド Kubernetes でローリングアップデートを計測し、ロールアウト完了後にも失敗するリクエストがある原因を調べた記事。
- **[Autonomous agent loops with Gemini 4 Argon and GKE Agent Sandbox](https://dev.to/googlecloud/autonomous-agent-loops-with-gemini-4-argon-and-gke-agent-sandbox-running-untrusted-code-safely-at-2k60)** - LLM が生成した Python / Bash を gVisor 分離の GKE Agent Sandbox で安全に大規模実行する構成の解説。
- **[Comparing Qwen and Gemma on the Low End](https://dev.to/gde/comparing-qwen-and-gemma-on-the-low-end-qwen-is-faster-without-drafting-gemma-has-better-quality-30bo)** - 8GB の RTX 3050 などで Qwen3.5-2B と Gemma 4 E2B を llama.cpp で比較し、Qwen は投機的デコードなしなら速く、Gemma は品質が高いと報告している。

## TechCrunch
- **[Recursive launches Flint, a laptop coding model it says was largely built by AI](https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/)** - Recursive が、自社の AI 研究システムが大部分を構築したとする、ノートPCで動く無料のコーディングモデル Flint を公開した。AI による自己改善の初期的な試みと位置づけられている。
- **[While Amazon blocks AI agents, Walmart rolls out the welcome mat](https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/)** - Amazon が AI エージェントの買い物を遮断する一方、Walmart は支出上限などの制御つきでエージェントによる購入を可能にする技術を導入した。エージェント向けのコマース API 設計の方向性の違いが見える。
- **[Blacksmith hits unicorn valuation after Sequoia leads Series C](https://techcrunch.com/2026/10/21/blacksmith-hits-unicorn-valuation-after-sequoia-leads-series-c/)** - AI が書いたコードのビルドとテストを効率化する基盤を提供する Blacksmith が、Sequoia 主導の Series C で6,600万ドルを調達した。AI コード増加で CI 需要が伸びていることを示す動き。

## Ars Technica
- **[Attackers have been exploiting critical Zimbra flaw to steal emails](https://arstechnica.com/security/2026/09/attackers-have-been-exploiting-critical-zimbra-flaw-to-steal-emails/)** - 1通のメールで OS コマンドをリモートから注入できる Zimbra の重大な脆弱性が、メール窃取に悪用されている。
- **[Does opting out of smart TV tracking work? Research finds "suspicious" traffic.](https://arstechnica.com/gadgets/2026/10/does-opting-out-of-smart-tv-tracking-work-research-finds-suspicious-traffic/)** - スマートTVのトラッキングをオプトアウトしても不審な通信が残るという調査。OS 事業者がデータを破棄している可能性は低いと研究者は述べている。
- **[OpenAI's latest AI models are coming to Google Cloud and Antigravity](https://arstechnica.com/ai/2026/10/openais-latest-ai-models-are-coming-to-google-cloud-and-antigravity/)** - GPT 6.1 の Astra、Sol、Luna が数週間以内に Google Cloud で提供される予定。クラウド事業者をまたぐモデル提供の広がりを示す。

## 注目トピック
今回の最大の話題は、eMudhra の中間CA鍵が極端に弱かったことで、任意のサイト向け証明書を偽造できてしまう信頼チェーンの問題だ（Lobsters・はてブ・Ars で報じられた）。Mozilla が Firefox 側の保護策を出した一方、ランタイムの CA バンドルやトラストストアは別管理で、更新状況を確認する必要がある。また PHP の重大脆弱性（php2shell）、Node.js や LiteLLM のセキュリティ更新は、直近のレポートで既出のため本号では扱わなかった。

もう一つの流れは、AI エージェントの運用設計だ。エージェント向けの冪等性キー、サンドボックス実行、WorkSpaces の MCP 接続、Walmart の支出制御つき購入など、エージェントに権限を渡す際の認証・分離・上限設定が共通の論点になっている。
