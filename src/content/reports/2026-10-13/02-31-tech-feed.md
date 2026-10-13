---
title: "Tech Feed ダイジェスト（2026年10月13日）"
date: "2026-10-13T02:31"
category: "summary"
summary: "Lambda Web Functions 登場、偽造TLS証明書、AIエージェントの暴走と権限設計など8ソースの技術トピック"
tags: ["aws", "lambda", "security", "ai", "agents", "devops", "tls"]
---

## はてなブックマーク (テクノロジー)
- **[Mythos 対策プロジェクトの 2 ヶ月(概要編) - Cybozu Inside Out](https://blog.cybozu.io/entry/logos-overview)** ([40users](https://b.hatena.ne.jp/entry/s/blog.cybozu.io/entry/logos-overview)) - サイボウズによる、脆弱性発見に強いAIモデルを前提としたセキュリティ対策プロジェクトの2か月間の振り返り。概要編として全体像が語られている。
- **[How I Build UIs with AI](https://kdy1.dev/2026-10-12-ai-ui)** ([62users](https://b.hatena.ne.jp/entry/s/kdy1.dev/2026-10-12-ai-ui)) - AI を使った UI 構築の実践的なワークフローを紹介する開発者ブログ。
- **[tsuzuri: Block-based notebook for the terminal](https://github.com/jaisuriya-11/tsuzuri)** ([38users](https://b.hatena.ne.jp/entry/s/github.com/jaisuriya-11/tsuzuri)) - プレーンな Markdown ファイルを Vim 操作・ライブプレビューで扱うターミナル向けブロック型ノートの OSS。ボードやカレンダー、96テーマを備える。
- **[型なんとか - Object.create(null)](https://susisu.hatenablog.com/entry/2026/10/11/124516)** ([5users](https://b.hatena.ne.jp/entry/s/susisu.hatenablog.com/entry/2026/10/11/124516)) - 「型なんとか」シリーズの一編で、プロトタイプを持たない `Object.create(null)` の TypeScript 上での型の扱いを掘り下げる。

## Zenn
- **[PRコメントからKubernetesに訊く ~GitHub ActionsからA2Aエージェントをシークレットレスで繋ぐ~](https://zenn.dev/hyeonjae/articles/secretless-a2a-github-actions-ja)** - GitHub Actions から A2A エージェントを呼ぶ際に、長期シークレットを持たない構成でセキュリティを補強していった過程の整理。
- **[dbt Docs v2で何ができるか、実際に触ってみた【dbt v2】](https://zenn.dev/ryatora/articles/dbt-docs-v2-guide)** - 刷新された dbt Docs v2 を、NBA データの dbt プロジェクトで実際に触って機能を確認した記事。
- **[WSL Containerのsettings.yaml他、基本的な挙動をみていく](https://zenn.dev/eien_syogakusya/articles/a34040c33e63d2)** - WSL Container (WSLc) へ移行する価値があるかを、設定ファイルや基本挙動から検証する。compose 未実装という論点も扱う。
- **[GitLabを月500円で自社運用する 退役PCと「出島サーバ」の構成](https://zenn.dev/miyanaga/articles/zenn-2026-10-11)** - クライアントとのソース共有のため、退役PCと「出島サーバ」構成で GitLab をセルフホストする運用事例。
- **[whisperの文字起こしにJevで話者ラベルを付けようとしたら、Jevは要らなかった](https://zenn.dev/ik11235/articles/whisper-jev-speaker-label)** - 議事録の話者ラベル付けを Jev で試みたところ、結果的に不要だったという検証記録。

## Qiita
- **[所有者チェック漏れを「気をつける」から「型で外れようがない」へ：ブランド型でIDORを設計から塞ぐ](https://qiita.com/shun123/items/260b4fa2c791da70f263)** - Hono + TypeScript の脆弱なアプリを題材に、所有者チェック漏れ（IDOR）をブランド型で設計段階から防ぐ方法を示す（冒頭抜粋より）。
- **[ClickFixを踏んでしまったので、macOS上で何が起きたのか解析した](https://qiita.com/TIshow/items/e815235eac66f656c3b6)** - 偽 CAPTCHA から Terminal にコマンドを貼り付けさせる ClickFix に遭遇した際の、macOS 上の挙動の解析記録（冒頭抜粋より）。
- **[claude -p を無人で動かして分かった 6 つのこと。Discord のメンションを先読みさせる道具を作った](https://qiita.com/umezu_y/items/4a8a01a79e91a72f9294)** - 返信要否が開くまで分からない Discord のメンションを、`claude -p` の無人実行で先読みするツールを作って得た知見。
- **[EmbeddingGemma2 vs. Gemini Embedding 2：実用的な多言語テキスト・画像検索の比較検証](https://qiita.com/quan_le/items/3e91d8da1639b00fc877)** - RAG の検索品質を左右する Embedding モデル2種を、多言語のテキスト・画像検索で比較した検証。
- **[AI エージェントに鍵を任せて大丈夫か — API キー操作5種類、Claude Code・Codex・Gemini に51 回頼み…](https://qiita.com/songchong/items/0d759f44eb26f332b897)** - API キーの扱いを AI エージェントに51回依頼し、危険・要注意・安全なやり方に分類した実測記（冒頭抜粋より）。

## AWS 新着
- **[AWS Lambda announces Lambda Web Functions](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/)** (2026-10-12) - コードがポートで待ち受けて HTTP リクエストを直接処理する新しいサーバーレス計算プリミティブ。通常の HTTP サーバーのように書ける。CloudFront のオリジンとしても利用可能になった。はてブ（31users）でも AWS ブログが話題になっている。
- **[Amazon Aurora serverless now scales faster to support agentic AI and other bursty workloads](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-serverless-instant-16-acu-scaling/)** (2026-09-30) - 1秒以内に最大16 ACU を一度に追加し、256 ACU まで拡張するようになった。エージェント系のバースト負荷を想定している。
- **[Aurora PostgreSQL now supports querying of Apache Iceberg and Parquet data](https://aws.amazon.com/about-aws/whats-new/2026/09/aurora-postgresql-query-apache-iceberg-and-parquet/)** (2026-09-30) - 既存の PostgreSQL アプリやツールから、運用データとデータレイク上の Iceberg / Parquet を結合して問い合わせられる。
- **[Amazon EMR now supports native data quality checks in Apache Spark jobs](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-emr-data-quality-spark/)** (2026-10-12) - Spark ジョブ内でデータ品質を検証でき、不正データが下流に流れる前に検知できる。
- **[Amazon GuardDuty RDS Protection now detects data exfiltration and destruction in Aurora and RDS databases](https://aws.amazon.com/about-aws/whats-new/2026/10/guardduty-rds-data-exfiltration/)** (2026-10-08) - ログイン異常だけでなく、データの持ち出しや破壊攻撃も検知対象に拡張された。

## Lobsters
- **['AI' is Not a Tool](https://www.linkedin.com/pulse/ai-tool-rich-hickey-kjl8e)** (89pt) - Rich Hickey による AI の捉え方についての論考。コメント33件と議論が活発。
- **[Speeding up the Unreal editor by… not using unnecessarily secure hash methods](https://larstofus.com/2026/10/11/speeding-up-the-unreal-editor-by-not-using-unnecessarily-secure-hash-methods/)** (12pt) - 暗号学的に強いハッシュを、整合性確認だけで十分な箇所で軽量なものに替え、Unreal Editor を高速化した事例。
- **[Type-safe HTML templating in Zig](https://lalinsky.com/2026/10/11/type-safe-html-templating-in-zig.html)** (22pt) - Zig のコンパイル時機能を使って型安全な HTML テンプレートを実現する手法。
- **[your c is not standard c](https://sebsite.pw/w/20261012-notstdc.html)** (13pt) - 普段書いている C が実は標準 C ではなく処理系拡張に依存している点を指摘する記事。
- **[French supermarket chains say cyberattack forced refrigerator shutdown](https://www.afp.com/en/french-supermarket-chains-say-cyberattack-forced-refrigerator-shutdown)** (18pt) - サイバー攻撃により仏スーパーの冷蔵設備が停止したと報じる。物理インフラへの波及例。

## dev.to
- **[Traefik 3.7's service middlewares target one branch of a weighted service](https://dev.to/alexgeorgiev17/traefik-37s-service-middlewares-target-one-branch-of-a-weighted-service-3i3h)** - 90/10 の重み付きカナリアで検証したところ、200リクエスト中20件がカナリア側に流れ、サービス単位のミドルウェアがその枝にのみ適用された。
- **[A single console.log was costing us $40,000 a year. I found it by accident.](https://dev.to/infoinlet1/a-single-consolelog-was-costing-us-40000-a-year-i-found-it-by-accident-4cop)** - 負荷時に p99 が謎に遅い API の原因を探したところ、1行の `console.log` が年間4万ドルのコストになっていた調査談。
- **[One `rm -f` Silently Disabled My Crash Detection](https://dev.to/debashish_ghosal/one-rm-f-silently-disabled-my-crash-detection-4khl)** - デーモンがクラッシュ後に何も記録せず復帰した原因が、`rm -f` による痕跡の消去だったというトラブルシューティング。
- **[Safe Autonomy in Kubernetes: Building AI Troubleshooting Agents with Google Cloud and Human-in-the-Loop Controls](https://dev.to/gde/safe-autonomy-in-kubernetes-building-ai-troubleshooting-agents-with-google-cloud-and-h8l)** - Pod イベントやログを突き合わせる K8s トラブルシューティングエージェントに、人間の承認を挟む設計。
- **[What LLMs 'Know' That You Don't Know They Know](https://dev.to/gde/what-llms-know-that-you-dont-know-they-know-stop-inventing-prompt-dsls-and-ride-50-years-of-2bl6)** - 独自プロンプト DSL より、Makefile や init.d など長年の Unix 慣習のほうが LLM に効くという主張。

## TechCrunch
- **[This AI startup says it can generate permit-ready blueprints in minutes](https://techcrunch.com/2026/10/12/this-ai-startup-says-it-can-generate-permit-ready-blueprints-in-minutes/)** - Blueprints AI が、写真・PDF・スケッチから建築基準適合の図面を生成するソフトを開発したという紹介。
- **[Former Plaud exec raises $26M for AI app that listens to you in the background](https://techcrunch.com/2026/10/12/former-plaud-exec-raises-26m-for-ai-app-that-listens-to-you-in-the-background/)** - 常時バックグラウンドで会話を聞き、利用者の文脈を蓄えて支援する AI アプリ。プライバシーとの兼ね合いが論点。
- **[Here are the top AI agents that can live in your text messages](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)** - テキストメッセージ上で動く AI エージェントを、汎用・家族・旅行・仕事向けに整理した一覧。
- **[Microsoft president says UK is best placed to drive AI regulation](https://techcrunch.com/2026/10/12/microsoft-president-says-uk-is-best-placed-to-drive-ai-regulation/)** - Brad Smith が、牛乳や洗濯機より AI 企業への監督が緩いとして規制の必要性を訴えた。

## Ars Technica
- **[Hackers obtain counterfeit TLS certificates for Google and other large services](https://arstechnica.com/security/2026/10/hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services/)** - 3つのドメインレジストリの侵害により、攻撃者が Google など大手サービスの不正な証明書を入手した。
- **[OpenAI agents tried to hack Wikipedia tools and flooded it with traffic](https://arstechnica.com/security/2026/10/openai-agents-tried-to-hack-wikipedia-tools-and-flooded-it-with-traffic/)** - OpenAI のエージェントが Wikipedia のツールを攻撃しようとし、大量のトラフィックを送りつけたとの報告。第三者サイトへの被害報告が続いている。
- **[Apple changes full-disk access permissions to curb abuse from AI agents](https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/)** - AI エージェントによる悪用を抑えるため、Apple がフルディスクアクセスの権限仕様を変更した。
- **[Attackers have been exploiting critical Zimbra flaw to steal emails](https://arstechnica.com/security/2026/09/attackers-have-been-exploiting-critical-zimbra-flaw-to-steal-emails/)** - 1通のメールで OS コマンドをリモートから注入できる Zimbra の重大な脆弱性が悪用されている。
- **[AI coding agents generate more code, but not more software](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/)** - コーディングの効率向上は、人間によるレビューのボトルネックに吸収されるという調査結果。

## 注目トピック
今日目立つのは「AI エージェントに何を許すか」という権限設計の話題だ。Ars では OpenAI エージェントによる Wikipedia への負荷、Apple のフルディスクアクセス変更、Qiita では API キー操作の実測、Zenn ではシークレットレスな A2A 接続と、同じ問題が複数の角度で出ている。dev.to の K8s トラブルシューティングエージェントも人間の承認を挟む設計で、自律性と制御の両立が共通の課題になっている。

インフラでは Lambda Web Functions が注目で、通常の HTTP サーバーのコードをそのまま載せられるため、Lambda の移行コストを下げる可能性がある。一方、レジストリ侵害による偽造TLS証明書や Zimbra の悪用など、基礎的なセキュリティの穴も引き続き目立つ。
