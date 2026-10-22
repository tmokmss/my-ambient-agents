---
title: "Tech Feed ダイジェスト（2026年10月23日）"
date: "2026-10-22T23:56"
category: "summary"
summary: "Java SE 重大脆弱性、AI エージェントによる ConnectWise 侵害、AWS Continuum GA、CloudFormation ロールバック改善など"
tags: ["security", "ai", "aws", "agents", "devops", "linux", "nix"]
---

## はてなブックマーク (テクノロジー)
- **[「Oracle Java SE」にも致命的な脆弱性 ～リモートでデータの窃取・作成・削除・変更が可能](https://forest.watch.impress.co.jp/docs/news/2150531.html)** ([71users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2150531.html)) - Oracle Java SE の重大脆弱性の報道。リモートからデータの窃取・作成・削除・変更が可能とされ、Java を本番で使うチームは該当バージョンの確認とパッチ適用が必要。
- **[Claude Opus 5.5でいい感じのアクションゲームを作るための一工夫七つ - ABAの日誌](https://aba.hatenablog.com/entry/2026/10/22/194027)** ([200users](https://b.hatena.ne.jp/entry/s/aba.hatenablog.com/entry/2026/10/22/194027)) - LLM にゲームを作らせる際のプロンプト・進め方の工夫を7点にまとめた実践記事。AI にコードを書かせる開発での再現性の上げ方として参考になる。
- **[厳選・セキュリティが心配ならClaude Codeにこの問いかけをコピペするべし20](https://zenn.dev/yuiseki/articles/54b01670841898)** ([154users](https://b.hatena.ne.jp/entry/s/zenn.dev/yuiseki/articles/54b01670841898)) - コードベースのセキュリティ点検を Claude Code に依頼するための質問文を20個集めた記事。脆弱性報道が続く週に、手元のリポジトリを AI で一次チェックする入口として使える。
- **[ログ検索体験から逆算するログ基盤設計](https://speakerdeck.com/hirosi1900day/rogu-kensaku-taiken-kara-gyakusan-suru-rogu-kiban-sekkei)** ([32users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/hirosi1900day/rogu-kensaku-taiken-kara-gyakusan-suru-rogu-kiban-sekkei)) - 収集側の都合ではなく、調査時の検索体験から逆算してログ基盤を設計するという視点のスライド。

## Zenn
- **[Rootless Dockerと学ぶSELinux【初心者向け】](https://zenn.dev/nexryai/articles/afb828d7dda6b7)** - Rocky Linux 10.2 で、compose ユーザーの Rootless Docker を動かしつつ、root 常駐プロセスに対する SELinux のアクセス制限を調べて基礎を学んだ記録。
- **[Claude CodeやCodexで並列開発していたら、Macのストレージが残り8GBになったので掃除した](https://zenn.dev/yoshinani_dev/articles/0c17dec1c082a1)** - 並列エージェント運用で Git worktree が溜まるなど、開発まわりが原因でディスクが逼迫した事例。df/du で実測しながら消した順に紹介し、空きは約380GBまで回復したという。
- **[脆弱性管理の仕組みを整えた](https://zenn.dev/dress_code/articles/be5550254695cd)** - SOC2 Type2 の継続審査を見据えた、プロダクトの脆弱性管理の運用づくりの紹介。これから仕組みを用意する人向け。
- **[自宅サーバーの定期バックアップの失敗に気付かなかった話](https://zenn.dev/komorebi_note/articles/d9df64e7e1da82)** - Immich の写真を rclone で Google ドライブへ暗号化バックアップしていたのに、実は機能していなかったという振り返り。バックアップは成功の監視まで含めて設計すべきという教訓。

## Qiita
- **[MCPサーバーを5分で作る — TypeScript + @modelcontextprotocol/sdk の最小実装](https://qiita.com/joinclass/items/60abfc1f42358424b26f)** (joinclass) - 冒頭抜粋によると、Claude Code と launchd で動かす自動化ジョブ33個の状況確認を目的に、公式 SDK で MCP サーバーを最小実装する内容。
- **[コーディングエージェントの「指示書・Skill・Hooks」役割分担](https://qiita.com/acshu_moriyama/items/0d35781c10fe8d436b5c)** (acshu_moriyama) - Claude Code や Codex の振る舞いを調整する3つの仕組みについて、それぞれの役割と使い分けを整理した記事。
- **[is-* クラスや data-state を活用しよう！ HTML・CSS・JS の責務分離](https://qiita.com/Yudai-HARA/items/73d20fd44b626dc74840)** (Yudai-HARA) - 状態を表すクラスや data 属性で、HTML・CSS・JavaScript の責務を整理する設計手法の紹介。
- **[楽観ロックと悲観ロックの違いと役割](https://qiita.com/kaitoszk/items/33dcf0ee91832956124d)** (kaitoszk) - Go で在庫・受注管理 API を作る過程で、排他制御（楽観ロック）を深掘りした学習記録。冒頭抜粋から読み取れる範囲では、考え方の整理が中心。

## AWS 新着
- **[AWS Continuum for code vulnerabilities is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-for-code-vulnerabilities-is-now-generally-available)** (2026-10-22) - コードの脆弱性を発見・検証・優先順位付け・修正まで大規模に扱うサービスが GA。脆弱性報道が相次ぐ時期で、対応の自動化を検討する材料になる。
- **[AWS CloudFormation now simplifies stack update rollback operations](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-cloudformation-cdk/)** (2026-10-22) - 更新ロールバックで一部リソースが戻せない場合でも、ロールバックを完了させてデプロイを再開しやすくなった。
- **[Amazon OpenSearch Serverless now supports a 5-second default refresh interval](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-opensearch-serverless-supports-5-second-refresh-interval/)** (2026-10-22) - 検索・ベクトル両コレクションの既定 refresh 間隔が5秒になり、取り込んだドキュメントが検索可能になるまでの遅延が短縮される。挙動が変わるため既存ワークロードへの影響確認が必要。
- **[AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/)** (2026-10-22) - Gateway の推論エンドポイントが InvokeModel / InvokeModelWithResponseStream に対応し、モデルのフォールバックルーティングも可能に。
- **[AWS Service Reference Information now supports global condition keys, service names, and data plane classification](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-service-reference-information-global-condition-keys-service-names-data-plane/)** (2026-10-21) - IAM ポリシー管理の自動化向けに、サービスリファレンスへグローバル条件キー等の情報が追加された。

## Lobsters
- **[jailbreaking the switch 2](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/)** (39pt) - Nintendo Switch 2 の脱獄を扱うリバースエンジニアリング記事（タグは hardware / reversing / security / ai-tooling）。
- **[Understanding Nix flakes](https://lwn.net/SubscriberLink/1094226/7bb13383b169d475/)** (31pt) - LWN による Nix flakes の解説。再現可能なビルド環境に関心がある人向け。
- **[Using a lookup-table to correct an approximation](https://www.corsix.org/content/using-a-lookup-table-to-correct-an-approximation)** (31pt) - 近似計算の誤差を小さなルックアップテーブルで補正するパフォーマンス系の記事。
- **[Quad9 DNS Resolver to exit France](https://quad9.net/news/blog/au-revoir-france/)** (23pt) - Quad9 がフランスでのリゾルバ提供から撤退するという告知（タグは law / networking）。法規制が DNS 運用に与える影響を示す事例。
- **[Expose only share links of a private service with caddy](https://dataswamp.org/~solene/2026-10-21-caddy-forward-auth-public-share-links.html)** (19pt) - Caddy の forward auth で、非公開サービスのうち共有リンクだけを公開する構成の紹介。

## dev.to
- **["I'm 93% confident" is a string, not a probability](https://dev.to/cyclopt_dimitrisk/im-93-confident-is-a-string-not-a-probability-2ndc)** - LLM に返させた確信度は確率ではなく単なる文字列で、デモからパイプラインに載せる段階でギャップが生じるという指摘。
- **[Log Aggregation Pipeline Explained: Follow One Log Line and Run the Incident in Your Browser](https://dev.to/devopsdaily/log-aggregation-pipeline-explained-follow-one-log-line-and-run-the-incident-in-your-browser-3h91)** - ログ1行がパイプラインを流れる過程を追い、障害調査をブラウザ上で体験できる解説。
- **[Multi-tier model routing on GKE: balancing Gemini 4 Argon reasoning depth with latency and cost](https://dev.to/googlecloud/multi-tier-model-routing-on-gke-balancing-gemini-4-argon-reasoning-depth-with-latency-and-cost-21fo)** - GKE 上のゲートウェイで、Gemini 4 Argon・Gemini 3.8 Flash・ローカルの Gemma 4 にリクエストを動的に振り分ける構成の紹介。
- **[Nothing Reported It](https://dev.to/kenwalger/nothing-reported-it-9ke)** - 自作のテストハーネスが嘘をついていた5つのパターンを振り返る記事。テスト結果そのものの信頼性を疑う視点が得られる。

## TechCrunch
- **[Chinese hackers spied on thousands of companies after breaching IT giant ConnectWise](https://techcrunch.com/2026/10/22/chinese-hackers-spied-on-thousands-of-companies-after-breaching-it-giant-connectwise/)** - Microsoft は、中国系の攻撃者が AI エージェントを使って ConnectWise の顧客数千社へ急速に侵入したと説明している。IT 管理ベンダー経由のサプライチェーン型侵害が AI で加速する例。なお日本の報道でも同じ件が取り上げられている。
- **[1Password launches a way for AI agents to log in on your behalf without seeing your password](https://techcrunch.com/2026/10/22/1password-launches-a-way-for-ai-agents-to-log-in-on-your-behalf-without-seeing-your-password/)** - AI エージェントが資格情報そのものを見ずに、ユーザーのアカウントへログインできる機能。エージェントへの認証情報の渡し方という実装課題への一つの答え。
- **[OpenAI makes its Jev competitor widely available as decision model competition heats up](https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/)** - OpenAI が意思決定モデルを一般提供し、Jev との競争が本格化している。

## Ars Technica
- **[Meta shocked by $25B fine after N.M. refused to join multistate settlement](https://arstechnica.com/tech-policy/2026/10/meta-whines-new-mexico-is-impossible-to-please-after-historic-25-billion-fine/)** - ニューメキシコ州が複数州の和解に加わらず、Meta に過去最大級の250億ドルの罰金が課された。Meta は控訴する方針で、プラットフォーム規制の行方を見るうえで重要。
- **[PC shipments fall 20.1 percent in "sharpest decline" since Q1 2023](https://arstechnica.com/information-technology/2026/10/pc-shipments-fall-20-1-percent-in-sharpest-decline-since-q1-2023/)** - PC 出荷台数が20.1%減と、2023年Q1以来で最大の落ち込みになった。「現在の減少は新たな下降局面の始まりに過ぎないかもしれない」と指摘されている。
- **[Enterprises keep buying software upgrades that IT thinks will make things worse](https://arstechnica.com/information-technology/2026/10/survey-enterprises-waste-28-percent-of-software-budgets-on-unwanted-upgrades/)** - 大企業の IT 責任者2,018人への調査で、ソフトウェア予算の28%が望まれないアップグレードに使われているとされる。背景には交渉力の不足がある。

## 注目トピック
この日は AI が攻撃と防御の両面で主役になった。ConnectWise 侵害では攻撃者が AI エージェントで顧客への侵入を高速化したと報じられた。一方、AWS Continuum の GA や、Claude Code に脆弱性点検をさせるプロンプト集のように、防御側でも AI による発見・修正の自動化が進んでいる。1Password のエージェント向けログイン機能も、エージェントに資格情報を直接渡さない設計が求められていることを示している。

開発の現場では、AI エージェントの運用コストと信頼性が話題になった。並列エージェントが生む worktree によるディスク逼迫、LLM の確信度の扱い、テストハーネスの信頼性、指示書・Skill・Hooks の役割分担などで、道具の使いこなし方がより具体的になってきている。インフラ側では、AWS が OpenSearch Serverless の refresh 間隔や CloudFormation のロールバックなど運用の摩擦を減らす更新を出している。
