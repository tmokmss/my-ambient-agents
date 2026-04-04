---
title: "Tech Feed ダイジェスト（2026年4月4日）"
date: "2026-04-04T09:51"
category: "summary"
summary: "NEC Atermに深刻な脆弱性、AnthropicがPAC設立・バイオテク買収で攻勢、Gemma 4解説、Kiro for Spark登場など注目ニュースを網羅"
tags: ["security", "ai", "aws", "rust", "frontend", "anthropic", "openai", "space"]
---

## はてなブックマーク (テクノロジー)

- **[NEC「Aterm」シリーズに複数の脆弱性　アップデートまたは買い換えを推奨](https://ascii.jp/elem/000/004/387/4387155/)** ([456users](https://b.hatena.ne.jp/entry/s/ascii.jp/elem/000/004/387/4387155/)) - 国内シェアの高いNECのホームルーター「Aterm」シリーズに複数の脆弱性が確認された。サポート終了機種は修正パッチが提供されず買い換えが推奨されており、影響範囲の広さが懸念される。

- **[Claude Codeの「ソースコード流出」をどう見るのか](https://blog.lai.so/leak-claude-code/)** ([69users](https://b.hatena.ne.jp/entry/s/blog.lai.so/leak-claude-code/)) - 流出したClaude Codeのソースコードについて、セキュリティ・法的・エンジニアリング観点から多角的に考察した記事。単なる情報漏洩事件を超えた議論を呼んでいる。

- **[LLMの学習データ「枯渇元年」にどう立ち向かうか　国・組織を横断したデータ連携の仕組み実現へ、IPAが成果物公開](https://www.itmedia.co.jp/aiplus/articles/2604/02/news085.html)** ([55users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/articles/2604/02/news085.html)) - IPAが高品質な学習データの枯渇問題に対応するため、組織横断的なデータ連携フレームワークの成果物を公開。LLMの持続的な発展に向けた日本独自の取り組みとして注目される。

- **[【レビュー】10万円以下のMacは意外とアリ?　「MacBook Neo」を普段使いした](https://www.watch.impress.co.jp/docs/review/review/2098562.html)** ([110users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/review/review/2098562.html)) - Appleの新エントリーライン「MacBook Neo」を実機レビュー。10万円以下の価格帯でも開発用途に十分な性能を発揮するかどうかを検証している。

- **[AIキャラが"暇だから"と勝手に動き出す!? AIの"自律性"に振り切った対話アプリ「Nexus Ark」](https://forest.watch.impress.co.jp/docs/review/2098195.html)** ([14users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/review/2098195.html)) - AIキャラクターがユーザーの操作なしに自発的に行動・発話する異色の対話アプリ。記憶・夢・世界改変という概念を取り入れ、AIの自律性を極端に追求した実験的設計が話題を呼んでいる。

## Zenn

- **[AIクローラーにだけ課金する。Hono + x402で実現するCloudflare Workers上のAIペイウォール](https://zenn.dev/jphfa/articles/x402-ai-crawler-monetization)** - x402プロトコルを使い、人間ユーザーには従来通り無料で提供しつつAIクローラーのアクセスにのみ課金する仕組みをHono + Cloudflare Workersで実装した技術解説。コンテンツクリエイターとAI事業者の新たな関係性を模索する試み。

- **[WordPress後継CMS「EmDash」を触ってみる](https://zenn.dev/z4ck_key/articles/try-emdash-cms)** - CloudflareがWordPress後継を標榜するCMS「EmDash」を公開した。セキュリティ上の問題を抱えるWordPressサイトが乱立する現状への代替として、エッジネイティブな設計が特徴。

- **[「直す圧力」に気づいてから変わった、ポストモーテムへの向き合い方](https://zenn.dev/loglass/articles/pressure-to-fix-postmortem-redesign)** - インシデントコマンダーが「誰かを責める圧力・素早く直す圧力」がポストモーテムの質を下げることに気づき、心理的安全性を重視した振り返りプロセスに再設計した実践記録。

- **[Claude CodeでAI RSSリーダーを作ったら、その日にInoreaderを解約した](https://zenn.dev/caphtech/articles/feed-curator-ai-rss-with-claude-code)** - Claude Code自体をAIキュレーターとして活用するRSSツール「Feed Curator」を構築した話。APIキー不要でトピック入力だけでフィードを自動検索・要約するシンプルな設計が評価されている。

- **[ハーネスエンジニアリングの先へ — VSDD × CoDDで「実装品質」と「変更時の整合性」を両立させてみた](https://zenn.dev/sc30gsw/articles/bbb8b3c2fff1f6)** - AI支援開発の品質問題に対応するVSDDとCoDDを組み合わせ、仕様主導設計と変更時の一貫性チェックを両立させるアーキテクチャを提案。ハーネスエンジニアリングの次のステップを模索する内容。

## Qiita

- **[AIエージェントが機密データを漏洩する5つの実例 — RBACでは防げない構造的欠陥](https://qiita.com/ymaeda_it/items/268f3f17137bfef548b4)** - ロールベースのアクセス制御だけではAIエージェントによる機密情報漏洩を防げないことを具体的な5ケースで解説。エージェントアーキテクチャ設計時に考慮すべきセキュリティの盲点を指摘している。

- **[Gemma 4 徹底解説：Googleのオープンモデル最新版で何ができるのか](https://qiita.com/TaichiEndoh/items/0b06c96326e0f41912b1)** - Googleが公開したGemma 4の全モデルバリアントを網羅的に解説。動画・音声対応の追加やApache 2.0ライセンスでの商用利用解禁が開発者コミュニティに与える影響を分析。

- **[GitHub Copilot の『SKILL.md育成RPG』— Lv.0の村人がLv.7の伝説の勇者になるまで鍛えたらコードレビューはどう変わるのか](https://qiita.com/yukurash/items/d8971bdf08f8416ad7dd)** - GitHub CopilotのSKILL.mdをRPGのキャラクター育成に見立て、段階的に指示を精度を高めていくとコードレビューの品質がどう変化するかを実験した記事。

- **[Amazon S3 が20周年を迎えたので、歴史と全ストレージクラスと他サービス連携を徹底解説する](https://qiita.com/miruky/items/6ceb0d54610bc10f1313)** - 2006年のサービス開始から20年を迎えたAmazon S3を振り返りつつ、現在の全ストレージクラスの特性と料金体系、主要AWSサービスとの連携パターンを包括的にまとめた。

## AWS 新着

- **[Apache Spark troubleshooting and upgrade agents now available as Kiro powers](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-emr-spark-troubleshooting-upgrade-kiro-power/)** (2026-04-03) - Amazon EMRにKiroベースのAIエージェントが統合され、SparkジョブのトラブルシューティングとSparkバージョンのアップグレードを自動化。複雑なSparkの設定問題をエージェントが自律的に診断・修正できるようになる。

- **[Amazon SageMaker Data Agent introduces charting capabilities and support for materialized views](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sgmkr-dataagent-chart-mv/)** (2026-04-03) - SageMaker Data Agentにグラフ生成機能とマテリアライズドビュー対応が追加。自然言語によるデータ探索の結果をそのままチャートに変換できるようになり、データ分析ワークフローが大幅に改善される。

- **[AWS Secrets Manager console now supports custom input for AWS KMS keys](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-secrets-manager-console-custom-kms-key-input/)** (2026-04-03) - Secrets ManagerコンソールでカスタムKMSキーのARNを直接入力できるようになった。これまでドロップダウン一覧にないキーを使用する際に不便だった操作フローが改善される。

- **[Amazon CloudWatch now supports OpenTelemetry metrics in public preview](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-opentelemetry-metrics/)** (2026-04-02) - CloudWatchがOpenTelemetryメトリクスをネイティブサポート（パブリックプレビュー）。OTelコレクターからCloudWatchへの直接送信が可能になり、ベンダーロックインを避けた可観測性スタックの構築が容易になる。

## Lobsters

- **[Slap: Functional Concatenative Language... with a Borrow Checker?](https://taylor.town/slap-000)** (?) - 関数型・連接型言語に借用チェッカーを組み合わせるという野心的な新言語「Slap」の設計記事。RustとHaskellの思想を融合させようとする実験的なアプローチが言語設計クラスタで話題。

- **[Lisette — Rust syntax, Go runtime](https://lisette.run)** (?) - Rustに似た構文でGoのランタイム（ゴルーチン・GC）上で動く新言語「Lisette」。RustのDXとGoの並行性モデルを組み合わせることで、メモリ安全性と開発効率の両立を目指す試み。

- **[Rails on the BEAM](https://intertwingly.net/blog/2026/04/02/Rails-on-the-BEAM.html)** (?) - RubyのRailsをErlang VM（BEAM）上で動作させる可能性を探った技術記事。ElixirのEctoやPhoenixとの関係性を整理しながら、BEAM上でのRubyエコシステム活用という大胆な構想を論じる。

- **[Why Nobody Can Verify What Booted Your Server](https://unmitigatedrisk.com/?p=1231)** (?) - サーバーの起動プロセスにおけるセキュアブートの検証困難性を解説。Secure Boot・TPM・Measured Bootが揃っていても、実際に何がロードされたかをリモートで確認することの技術的限界を指摘する。

- **[Making a Type Checker/LSP for Nix](https://johns.codes/blog/making-a-type-checker-lsp-for-nix)** (?) - 型システムを持たないNix言語に型チェッカーとLSP（Language Server Protocol）を実装するプロジェクトの技術詳細。Nixの特殊な遅延評価セマンティクスをどう型推論に対応させるかの挑戦を共有。

## dev.to

- **[Why Your Supabase App Might Be Leaking User Data (and How to Fix It with RLS)](https://dev.to/gifteddev/why-your-supabase-app-might-be-leaking-user-data-and-how-to-fix-it-with-rls-2fbf)** - Vibe Codingで構築したSupabaseアプリがRow Level Security（RLS）を設定していない場合、全ユーザーデータが漏洩するリスクがあることを具体的に解説。RLSのポリシー設定例も紹介している。

- **[What % of your code was written by AI?](https://dev.to/nikoli/what-of-your-code-was-written-by-ai-13kf)** - AI生成コードの割合についてコミュニティに問いかけた記事。回答者の傾向から、AIコーディングツールが既に業務コードの相当割合を占めていることが浮かび上がってきている。

- **[I Automated My Content Pipeline with Claude Code. Here's Everything.](https://dev.to/igorgridel/i-automated-my-content-pipeline-with-claude-code-heres-everything-1a58)** - コンテンツ制作・スケジューリング・公開フローをClaude Codeで完全自動化した実装レポート。エージェントがスケジューリング指示の曖昧さで混乱する事例も正直に共有している。

## TechCrunch

- **[Anthropic is having a moment in the private markets; SpaceX could spoil the party](https://techcrunch.com/2026/04/03/anthropic-is-having-a-moment-in-the-private-markets-spacex-could-spoil-the-party/)** - 二次市場でAnthropicの株式が最も注目される銘柄となっている一方、SpaceXのIPOが資金を吸い上げるリスクがあると分析。AI企業への民間投資熱の高まりと分散リスクを論じる。

- **[OpenAI executive shuffle includes new role for COO Brad Lightcap to lead 'special projects'](https://techcrunch.com/2026/04/03/openai-executive-shuffle-new-roles-coo-brad-lightcap-fidji-simo-kate-rouch/)** - OpenAIでCOOが「特別プロジェクト」担当の新ポストに移り、CMOがガン治療に専念するため休職するなど幹部の役割が大きく再編。急成長に伴う組織構造の変化が続いている。

- **[Anthropic ramps up its political activities with a new PAC](https://techcrunch.com/2026/04/03/anthropic-ramps-up-its-political-activities-with-a-new-pac/)** - Anthropicが政治活動委員会（PAC）を設立し、AI規制に友好的な候補者への支援活動を開始。中間選挙を前に、AI企業の政治参入が本格化してきた。

- **[Telehealth giant Hims & Hers says its customer support system was hacked](https://techcrunch.com/2026/04/02/telehealth-giant-hims-hers-says-its-customer-support-system-was-hacked/)** - テレヘルス大手Hims & Hersが2月にカスタマーサポートシステムへの不正アクセスを受け、サポートチケットデータが数日間にわたり窃取されたことを公表。医療関連企業へのサイバー攻撃が続いている。

## Ars Technica

- **[New Rowhammer attacks give complete control of machines running Nvidia GPUs](https://arstechnica.com/security/2026/04/new-rowhammer-attacks-give-complete-control-of-machines-running-nvidia-gpus/)** - GDDRHammer・GeForge・GPUBreachと名付けられた新手法により、NvidiaのGPUメモリをRowhammerで攻撃してCPUまで制御を奪えることが実証された。AIワークロードの急増でGPUが偏在する環境における新たな脅威として警戒が必要。

- **[Perplexity's "Incognito Mode" is a "sham," lawsuit says](https://arstechnica.com/tech-policy/2026/04/perplexitys-incognito-mode-is-a-sham-lawsuit-says/)** - Perplexityのシークレットモードが実態を伴わず、Google・Metaとともにユーザーのチャットデータを広告収益目的で共有していたとする訴訟が起こされた。AI検索エンジンのプライバシー慣行が問われている。

- **[Netflix must refund customers for years of price hikes, Italian court rules](https://arstechnica.com/gadgets/2026/04/netflix-ordered-to-refund-subscribers-up-to-e500-for-unlawful-price-hikes/)** - イタリアの裁判所がNetflixの一方的な値上げを違法と判断し、最大500ユーロの返金を命令。消費者団体は現在の料金引き下げも要求しており、欧州でのサブスクリプション価格規制に波及する可能性がある。

- **[As Artemis II zooms to the Moon, everything seems to be going swimmingly](https://arstechnica.com/space/2026/04/as-artemis-ii-zooms-to-the-moon-everything-seems-to-be-going-swimmingly/)** - NASAのArtemis IIミッションが順調に月へ向かっており、船内温度の軽微な問題も乗員が解決。アポロ以来初の有人月飛行として世界の注目を集めている。

## 注目トピック

今週最大のテーマは **AIエコシステムの多方面拡張**だ。Anthropicは単日でバイオテクスタートアップの4億ドル買収・PAC設立・二次市場での株式人気急上昇という三連発を記録し、単なるAI企業の枠を超えた存在感を示した。OpenAIも幹部人事の大幅再編とTBPN買収で組織・メディア両面での影響力拡大を続けている。技術面ではAWSがKiroエージェントをAmazon EMRのSparkトラブルシューティングに統合したことで、クラウドネイティブなAIエージェント活用が運用の現場に浸透し始めたことが確認できる。

セキュリティ面では懸念材料が重なった。NEC Atermへの複数脆弱性発見、GPU上で動作するRowhammer攻撃の新手法（GDDRHammer）、Perplexityのプライバシー訴訟、Hims & Hersへの医療データ侵害と、ハードウェアからサービス層まで幅広い脅威が顕在化した。また「AIエージェントがRBACをバイパスして機密データを漏洩する」という構造的問題も指摘され、エージェント時代のアクセス制御設計が急務の課題として浮上している。開発者はAIツールの利便性を享受しつつ、これらのセキュリティリスクに並行して向き合う必要がある局面だ。
