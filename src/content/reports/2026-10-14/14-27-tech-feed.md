---
title: "Tech Feed ダイジェスト（2026年10月14日）"
date: "2026-10-14T14:27"
category: "summary"
summary: "Rust+GPUI製オフィススイート、SSRFの10パターン、Security Hubの重要度優先付け、AIエージェント時代のセキュリティなど"
tags: ["rust", "security", "aws", "ai", "frontend", "observability", "infrastructure"]
---

## はてなブックマーク (テクノロジー)
- **[無償のオフィススイート「ibisOffice」が登場](https://forest.watch.impress.co.jp/docs/news/2147849.html)** ([184users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2147849.html)) - 「ibisPaint」の姉妹ソフト。Rust と GPUI で高速動作を実現し、7万件のテストで MS Office との再現性を検証しているとされる。ネイティブ UI を Rust で組む実例として興味深い。
- **[SBI証券のFXで“誤ロスカット”　再委託先IIJが作業ミス](https://www.itmedia.co.jp/news/article/2610/14/2000002249/)** ([159users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2610/14/2000002249/)) - 再委託先の作業ミスをシステム側でも検知できず、779口座が対象になった障害。委託先作業に対する検知・ガードレール設計の教訓になる。
- **[AIエージェントによるウェブサイトへの攻撃の注意喚起](https://www.scutum.jp/information/waf_tech_blog/2026/10/waf-blog-085.html)** ([50users](https://b.hatena.ne.jp/entry/s/www.scutum.jp/information/waf_tech_blog/2026/10/waf-blog-085.html)) - WAF ベンダーによる、AI エージェント由来の攻撃への注意喚起。自動化された探索・攻撃が増える前提での防御を考える材料になる。
- **[「apple.com」に見えて実はキリル文字。Chromeの偽装対策をすり抜けるURLが見つかる](https://www.gizmodo.jp/article/2610-chrome-phishing-domain-bypass/)** ([21users](https://b.hatena.ne.jp/entry/s/www.gizmodo.jp/article/2610-chrome-phishing-domain-bypass/)) - ホモグラフ攻撃で、Chrome の IDN 表示対策が回避される URL が見つかったという話。ドメイン検証やリンク表示を実装する側も注意したい。
- **[JVN#47427200: 楽天モバイルの複数のスマートフォンのAndroid Verified Boot機能において既知のテスト用鍵がそのまま使用されている問題](https://jvn.jp/jp/JVN47427200/index.html)** ([8users](https://b.hatena.ne.jp/entry/s/jvn.jp/jp/JVN47427200/)) - AVB の署名にテスト用鍵が残っていた脆弱性。出荷時の鍵管理とブートチェーンの信頼性を問う事例。

## Zenn
- **[Next.jsの公開ページで、1回遊ぶ間に読むchunkを48本から16本にした](https://zenn.dev/onthebakery/articles/5a27024f61405f)** - webpack の splitChunks に約20行の設定を足し、共有コードを1本にまとめて chunk 数を削減した事例。何をまとめ、何を代償に重くなるかという設計判断が書かれている。
- **[Amazon BedrockとSageMakerのAIエージェントでOpenTelemetryの自動計装が行われる範囲](https://zenn.dev/ymotongpoo/articles/20261014-bedrock-sagemaker-otel)** - GenAI セマンティック規約（Development 段階）と AWS 側の自動計装の対応範囲を、一次情報と実機検証で整理した記事。採用前に仕様が動いている点に注意とのこと。
- **[SwiftDataのrollback()、iOS 27で黙って挙動が変わっていた](https://zenn.dev/kzq/articles/swiftdata-rollback-ios27)** - 同じコードとビルドで、iOS 26.5 では通るテストが iOS 27 シミュレータで失敗。`ModelContext.rollback()` の挙動変化により、保存失敗後の値が想定より多く戻される。
- **[開発しながら同じPCでローカルLLMを動かしてみた話](https://zenn.dev/sumasate_tec/articles/test-local-llm)** - Claude Code の使用量を抑える狙いで、2B クラスの軽量モデル MiniCPM5 に作業の一部を任せられるかを手元の PC で試した検証。
- **[画像は「言葉だけ」でどこまで送れるか――中間特徴とプロンプト再生成を比較した小規模検証](https://zenn.dev/lube8163/articles/594bea1c0f8397)** - 中間特徴の量子化送信と、画像を文章化して再描画する方式を比較。数百バイトの文章でも意味的な近さは保てたが、個体や配置の復元には限界があり、中間特徴方式では通信効率の優位を確認できなかった。

## Qiita
(各記事は冒頭抜粋から読み取れる範囲での紹介)

- **[SSRFの入口はURL入力欄だけじゃない：代表的な10パターン](https://qiita.com/shun123/items/e5e6b10e10a2395d7732)** - SSRF は URL を直接受け取るパラメータ以外にも入口がある、という観点で代表的な10パターンを整理した記事。
- **[AWS WAFのSQLi_BODYだけを制御する｜Managed RuleのCount + Labelを使った誤検知対策](https://qiita.com/zerong-song/items/526731ff7a5f939a1e23)** - ルール全体や URI 全体を除外せず、Count + Label でログイン画面などの SQLi 誤検知だけを絞って制御する運用手法。
- **[Claude Code の守りのフックは、台本が壊れると黙って通す。2.1.295 の onFailure で止まった](https://qiita.com/suwa_nobu/items/afde8d73a48eb7badb71)** - Claude Code 2.1.295 で command/HTTP フックに `onFailure: "block"` が追加された。フックが起動できない場合に黙って通過してしまう問題への対処を扱う。
- **[ちょっぴりお馬鹿な国産LLM Sarashinaの速さの秘密](https://qiita.com/kotowazaman/items/5e2ec143012d661f1e0a)** - Sarashina を Claude Haiku 5.5 / Sonnet 5.5 や GLM-5.3 と比較し、待ち時間を分解して速さの要因を調べた。日本国内サーバーは理由の一部に過ぎないという。
- **[ダミーエンドポイントを仕掛けて、AI攻撃エージェントの探索行動を可視化してみた](https://qiita.com/kumai_yu/items/84f7eaad15426da0a5b8)** - ダミーのエンドポイントを置き、AI 攻撃エージェントの探索行動を可視化する取り組み。

## AWS 新着
- **[AWS Security Hub now supports resource criticality for prioritization](https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-resource-criticality/)** (2026-10-14) - エクスポージャーの優先付けにリソースの重要度（criticality）を加味できるようになり、事業上重要なリソースを脅かすものに集中しやすくなる。
- **[Amazon ElastiCache for Valkey introduces ElastiCache Insights](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-valkey-elasticache-insights/)** (2026-10-12) - ノードベースクラスターのヘルス、メモリ、コンピュートなどを見られる CloudWatch の構築済みダッシュボード。
- **[Claude Haiku 5.5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-haiku-5-5-aws/)** (2026-10-07) - Claude 5.5 ファミリーで最速・高効率のモデルで、サブエージェントや大量・低コスト処理向け。Anthropic によればコストは約75%低いとされる。
- **[AWS Batch now publishes job metrics to Amazon CloudWatch](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-batch-job-cloudwatch-metrics/)** (2026-10-06) - ジョブのライフサイクルを通じたメトリクスが CloudWatch に出力され、バッチのネイティブな可観測性が得られる。
- **[AWS Certificate Manager now supports ACME issuance through AWS PrivateLink](https://aws.amazon.com/about-aws/whats-new/2026/10/AWS-Certificate-Manager-ACME-Privatelink)** (2026-10-06) - ACME による公開 TLS 証明書の発行・更新を、PrivateLink 経由の閉域経路で行える。

## Lobsters
- **[Vi Hart's Big Navier-Stokes Post](https://www.patreon.com/vihart/posts/vi-harts-big-171939430)** (107pt) - Navier-Stokes 方程式を扱う長編ポスト。今回の候補中で最高スコア（タグは math, vibecoding）。
- **[Introducing Firefox Enterprise](https://blog.mozilla.org/en/firefox/introducing-firefox-enterprise/)** (40pt) - Mozilla が Firefox の企業向け版を発表。ブラウザの管理・展開を考える IT 部門に関係する。
- **[Announcing Lix 2.96 “Bingsu”](https://lix.systems/blog/2026-10-13-lix-2.96-release/)** (29pt) - Nix の実装の一つ Lix の新リリース 2.96。
- **[Ledger confirms spy chip implant behind wallet crypto thefts](https://www.bleepingcomputer.com/news/security/ledger-confirms-hardware-wallet-spy-implant-behind-crypto-thefts/)** (6pt) - Ledger が、ハードウェアウォレットでの暗号資産窃取の背後にスパイチップの埋め込みがあったと確認。ハードウェアのサプライチェーンリスクの事例。
- **[A UAF turned RCE](https://daniel.haxx.se/blog/2026/10/14/a-uaf-turned-rce/)** (2pt) - curl の Daniel Stenberg による、Use-After-Free がリモートコード実行につながった件の記事。

## dev.to
- **[Your Browser Can Do WHAT?! 5 AI Features That Actually Work](https://dev.to/sylwia-lask/your-browser-can-do-what-5-ai-features-that-actually-work-1blb)** - ブラウザ上で直接動く AI モデルが本番利用に耐えるかを検証し、実用的な5機能を紹介。
- **[Amnesia and déjà vu: how our AI agents failed after every restart (and how we fixed it)](https://dev.to/anis_meziani_52aab42304a8/amnesia-and-deja-vu-how-our-ai-agents-failed-after-every-restart-and-how-we-fixed-it-5c80)** - 再起動で記憶が消えるエージェントが、メール送信など完了済みの作業を再実行してしまう問題を、状態を保持し安全なときだけ再起動する設計（Python / Postgres）で解決した事例。
- **[An Agent's Plan Isn't Permission](https://dev.to/dailycontext/an-agents-plan-isnt-permission-5cf8)** - 本番バグを調査するコーディングエージェントがリポジトリ読み取りやログ照会を必要とする場面で、計画と権限は別物として扱うべきという議論。
- **[I Removed Passwords From My App. Here's What the Login Flow Looks Like Now](https://dev.to/hadil/i-removed-passwords-from-my-app-heres-what-the-login-flow-looks-like-now-51k9)** - パスワードを廃止した後のログインフローの構成を紹介。
- **[Integrating SEO Components into Discord](https://dev.to/thomasbnt/integrating-seo-components-into-discord-2d8g)** - サイトの URL を Discord に貼ったときに出るカード（タイトル等）を、メタ情報で整える方法。

## TechCrunch
- **[Justice Department says North Koreans have infiltrated dozens of US companies](https://techcrunch.com/2026/10/13/justice-department-says-north-koreans-have-infiltrated-dozens-of-u-s-companies/)** - 米司法省が、制裁対象の北朝鮮ハッカーが米国人を仲介役にして侵入先企業とやり取りしていると警告。採用や委託先の本人確認の重要性が増す。
- **[Cerebras CEO says we're nearing a future where everyone has a personal AI assistant at home](https://techcrunch.com/2026/10/13/cerebras-ceo-says-were-nearing-a-future-where-everyone-has-a-personal-ai-assistant-at-home/)** - Cerebras CEO は、個人用 AI アシスタントが家電並みに普及し、ローカルデバイスとクラウドで分担して動くと予測。
- **[Facebook is giving users more control over their algorithm](https://techcrunch.com/2026/10/13/facebook-is-giving-users-more-control-over-their-algorithm/)** - Instagram で先行した AI 搭載機能「Your Algorithm」を Facebook にも展開し、ユーザーがおすすめの出し方を調整できる。
- **[Industrial Next wants factory robots to switch tasks in minutes, not weeks](https://techcrunch.com/2026/10/13/industrial-next-wants-factory-robots-to-switch-tasks-in-minutes-not-weeks/)** - 工場ロボットの段取り替えを数週間から数分に短縮することを狙う、繊細な作業の自動化スタートアップ。

※ 他ソースとの重複・過去掲載分を除くと、新規の技術記事は4件のみだった。

## Ars Technica
- **[Google ads caught delivering convincing scareware ads to unsuspecting users](https://arstechnica.com/security/2026/09/google-ads-caught-delivering-convincing-scareware-ads-to-unsuspecting-users/)** - Mac が感染したと偽る説得力のある広告が、広告ネットワーク経由で広く配信されていたという報道。
- **[The Internet's undersea backbone is slipping into the danger zone](https://arstechnica.com/gadgets/2026/10/the-internets-undersea-backbone-is-slipping-into-to-the-danger-zone/)** - 海底ケーブルなど、インターネットを支える海底インフラのリスク上昇を扱った書籍の紹介。
- **[PC shipments fall 20.1 percent in "sharpest decline" since Q1 2023](https://arstechnica.com/information-technology/2026/10/pc-shipments-fall-20-1-percent-in-sharpest-decline-since-q1-2023/)** - PC 出荷台数が20.1%減と、2023年Q1以来の急減。下降サイクルの始まりかもしれないとの見方がある。
- **[A Cray-1 supercomputer replica from 30 "obsolete" Mac Minis](https://arstechnica.com/gadgets/2026/10/a-cray-1-supercomputer-replica-from-30-obsolete-mac-minis/)** - スペインのコンピュータ史博物館で、旧型 Mac mini 30台を使って Cray-1 のレプリカを作った事例。
- **[Microsoft event debuts new AI-friendly hardware and Windows changes](https://arstechnica.com/gadgets/2026/10/microsoft-event-debuts-new-ai-friendly-hardware-and-windows-changes/)** - Microsoft のイベントで、AI 向けハードウェアと Windows の変更が発表された。Windows と PC への AI 統合がさらに進む。

## 注目トピック
今日は「AI エージェントを前提にした防御と権限設計」が複数ソースに現れた。Scutum の注意喚起、ダミーエンドポイントによる攻撃エージェントの観察、dev.to の「計画は許可ではない」、Claude Code のフックが失敗時に block できる `onFailure` はいずれも、自動化された主体をどう制御・観測するかを扱う。

一方、足元の基本に戻る話題も目立った。SSRF の入口の整理、WAF の誤検知を狭く制御する運用、ホモグラフ URL、AVB のテスト鍵残存、再委託先の作業ミスによる誤ロスカットなど、鍵・検証・委託先管理といった地道な部分が事故の起点になっている。
