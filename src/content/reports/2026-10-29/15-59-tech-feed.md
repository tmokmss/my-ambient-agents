---
title: "Tech Feed ダイジェスト（2026年10月30日）"
date: "2026-10-29T15:59"
category: "summary"
summary: "Cloudflare無料枠の考察、Deno 2.9のタスクキャッシュ、Lambda durable functionsの可観測性、Google AIの外部アプリ開放など"
tags: ["security", "ai", "aws", "cloudflare", "deno", "agents", "pqc", "infra"]
---

## はてなブックマーク (テクノロジー)
- **[Cloudflare はなんでこんなに無料で使わせてくれるの？ | ashunar0](https://ashunar0.dev/posts/cloudflare-free-plan/)** ([359users](https://b.hatena.ne.jp/entry/s/ashunar0.dev/posts/cloudflare-free-plan/)) - Cloudflare が無料プランを手厚く提供できる理由を考察した記事。インフラ事業者のビジネスモデルを知る手がかりになる。
- **[AIのコード解析を妨害するために「天安門事件」「台湾独立」「水道水に毒物混入」などのフレーズを大量に混入させる手法が発見される](https://gigazine.net/news/20261029-anti-ai-words-in-script/)** ([83users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261029-anti-ai-words-in-script/)) - スクリプトにセンシティブな語句を大量に埋め込み、LLM による解析を妨害する手法の報告。AI 解析を前提とした防御・調査への対抗策として注目される。
- **[Firefox の Intl.Segmenter で「メロス」を「彼」にすると「した」が文字扱いされなくなる - id:onk のはてなブログ](https://onk.hatenablog.jp/entry/2026/10/29/151858)** ([71users](https://b.hatena.ne.jp/entry/s/onk.hatenablog.jp/entry/2026/10/29/151858)) - Firefox の `Intl.Segmenter` による日本語の単語分割で、語の置換により境界判定が変わる挙動を検証した記事。
- **[VPNがあるのは外から分かるので狙われる。パッチ当てはもう自動化するしかない――日本ハッカー協会・杉浦隆幸代表理事が語る、AI時代のランサムウェア対処策](https://internet.watch.impress.co.jp/docs/event/2151590.html)** ([249users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/event/2151590.html)) - Security Days Fall 2026 の講演レポート。外部から見える VPN 機器が狙われるため、パッチ適用の自動化が不可欠という主張。
- **[Microsoft、「Copilot harness」を発表 ～「GitHub Copilot」基盤を全社共通化、プレビュー提供](https://forest.watch.impress.co.jp/docs/news/2152248.html)** ([17users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2152248.html)) - GitHub Copilot の基盤を全社共通化する Copilot harness がプレビュー提供。「GitHub Copilot SDK」は「Microsoft Copilot SDK」に改称される。

## Zenn
- **[KaniによるVerylコンパイラの形式検証](https://zenn.dev/dalance/articles/44a8f80ea0cfa1)** - ハードウェア記述言語 Veryl のコンパイラにある 4 値・可変長ビット幅の式評価を、Rust の検証ツール Kani で形式検証した事例。SystemVerilog の意味論への準拠確認が動機。
- **[Expo アプリを iPhone Duo に対応させる](https://zenn.dev/chot/articles/5718685fde3626)** - 折りたたみ iPhone Duo 向けに、2027年4月以降の App Store 提出で必要となる対応をシミュレーターで検証し、崩れた画面を直した記録（実機未検証）。
- **[OpenSearchのLLM-as-a-Judgeを日本語の商品検索で動かして、人手ラベルと比べてみた](https://zenn.dev/nextbeat/articles/c22b45b1d784b0)** - OpenSearch 3.1 の Search Relevance Workbench の LLM 判定機能を、ESCI の日本語データで人手ラベルと比較した検証。
- **[Kaigi on Rails で聞いた Local CI を試して、見送った話](https://zenn.dev/my_vision/articles/b46011780a6090)** - ローカル CI は Actions と同程度の速さで削減額も全体の 6.4% までだったため見送ったが、副産物として PR の RuboCop が 264 秒から 22 秒になった。
- **[PHP5.4 から PHP8.5へ](https://zenn.dev/ctrlzr/articles/5a88eb939b3bfd)** - CentOS 7 + PHP 5.4 のサービスを Docker の PHP 8.5 へ更新した手順。`mysql_*` ラッパー追加など、リファクタせず最小修正で移行する方針。

## Qiita
- **[耐量子暗号（PQC）入門：RFC 9964でJWTの署名はどう変わる？OpenSSLでML-DSAを試してみた](https://qiita.com/sc_sakamaki/items/c3f1aff917a514835d9c)** - ML-DSA を JOSE/COSE で使う RFC 9964 を題材に、OpenSSL で署名を試す内容（冒頭抜粋より）。
- **[パスキーはなぜ偽サイトに強い？登録とログインの流れを図で追う](https://qiita.com/kuma_3838/items/1781531150821e2f0491)** - パスキーの登録・ログインフローを図で追い、フィッシング耐性の理由を整理する記事（冒頭抜粋より）。
- **[Orchestrator型 vs 自己組織化型 ― Microsoft Research の OSS「Agensh」から考える、Agentic Workflow の行き先](https://qiita.com/shahin0809/items/145266dc899e8b490e59)** - 中央のオーケストレーターに頼らず 1,024 エージェントまで拡張する論文と OSS「Agensh」から、Agentic Workflow の設計方向を考察する。
- **[【Oracle】APEXlang × Claude CodeのOracle APEXアプリAI駆動開発](https://qiita.com/hayashi-ta/items/5bf54d90f017660b4c35)** - Oracle APEX 26.1 の新機能 APEXlang（アプリ定義をテキスト化）を使い、AI 駆動開発に応用する試み。
- **[「AIっぽいデザイン」はなぜ消えないのか ── Impeccableを読み解いて、同じ依頼で4通り作って比べた](https://qiita.com/jinxin4869/items/0e72c0b925b75f1c28c9)** - AI 生成デザインの「AIっぽさ」を取り除くスキル Impeccable を読み解き、同一依頼で 4 パターン作って比較した記事（冒頭抜粋より）。

## AWS 新着
- **[AWS Lambda durable functions now exports live telemetry for execution insights](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry/)** (2026-10-28) - Durable Execution Telemetry Exporter プラグインで、durable execution のステップ履歴を外部に送出し可観測性を高める。
- **[Amazon ECS Managed Instances adds cross-instance and Spot consolidation](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-managed-instances-consolidation/)** (2026-10-28) - インスタンスをまたぐ集約と Spot 集約でインフラ最適化を行う 2 つの更新。
- **[Structured outputs for Claude models available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)** (2026-10-20) - 全 Claude モデルで bedrock-runtime と bedrock-mantle の両エンドポイントが構造化出力に対応。
- **[AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat/)** (2026-10-23) - Regional Private NAT Gateway との統合で、アタッチメント上にマネージドな 1:1 NAT を提供。
- **[Amazon ElastiCache Serverless for Valkey now supports online migration with zero downtime](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-serverless-valkey-online-migration/)** (2026-10-20) - EC2 上の自前 Valkey / Redis OSS から、クライアントにエラーを返さずオンライン移行できる。

## Lobsters
- **[Why Is This Fingerprinting Script Creating Bioweapons?](https://nullpt.rs/fingerprinting-bioweapons)** (92pt) - フィンガープリント用スクリプトを解析するリバースエンジニアリング記事。難読化されたコードの挙動を追う。
- **[GitLab security incident: attempted exploitation of CVE-2026-97229](https://alpinelinux.org/posts/GitLab-security-incident-CVE-2026-97229.html)** (40pt) - Alpine Linux が公開した、自社 GitLab に対する CVE-2026-97229 の悪用未遂のインシデント報告。
- **[The case of the 9 bit AES key](https://v12.sh/blog/the-case-of-the-9bit-aes-key)** (29pt) - AES 鍵のエントロピーが 9 ビットしかなかった事例の解析。dev.to の同系統記事では、MuPDF が時刻シードの LCG から鍵を作っており 512 候補で復号できたと報告されている。
- **[The Future Trait Has A Missing State](https://blog.yoshuawuyts.com/the-future-trait-has-a-missing-state)** (16pt) - Rust の `Future` トレイトに欠けている状態についての設計議論。
- **[Qwenputer: a fully functioning, deterministic RISC-V CPU inside Qwen3.5](https://divagr.com/blog/qwenputer)** (18pt) - LLM の重み内部で決定論的に動く RISC-V CPU を実現した実験。

## dev.to
- **[Deno 2.9's task cache turns a 4-second build into a 10-millisecond skip](https://dev.to/alexgeorgiev17/deno-29s-task-cache-turns-a-4-second-build-into-a-10-millisecond-skip-43bn)** - `deno task` のキャッシュで 3.9 秒のビルドが 9ms に。ただし 3000 ファイルの入力ツリーではキャッシュ判定自体が約 4 倍遅くなる落とし穴も計測。
- **[Ghost in the Shell: Can a Log File Hijack an AI?](https://dev.to/gramli/ghost-in-the-shell-can-a-log-file-hijack-an-ai-3gk)** - ログファイル経由のプロンプトインジェクションで AI エージェントを乗っ取れるかを検証。
- **[AI Agents Can Get Approval and Still Do the Wrong Thing](https://dev.to/katul1512/ai-agents-can-get-approval-and-still-do-the-wrong-thing-4oon)** - 人間の承認は、承認対象の具体的な操作に束縛されなければセキュリティ境界にならないという指摘。
- **[How UPI Works: The ₹0 Magic Behind Every Scan-and-Pay (System Design)](https://dev.to/tejas164321/how-upi-works-the-0-magic-behind-every-scan-and-pay-system-design-38kl)** - インドの決済基盤 UPI の仕組みをシステム設計の観点で解説するシリーズ第 1 回。
- **[Accuracy vs Speed: Gemma 4 E2B Quantization Tradeoffs, BF16 to Q2_K](https://dev.to/gde/accuracy-vs-speed-gemma-4-e2b-quantization-tradeoffs-bf16-to-q2k-aea)** - Tesla T4 上で BF16 から Q2_K まで量子化し GSM8K 250 問で精度を比較。Q5_K_M 以上でスコアが維持される。

## TechCrunch
- **[As AI agents reshape the web, Google opens Gemini and Search to more apps](https://techcrunch.com/2026/10/28/as-ai-agents-reshape-the-web-google-opens-gemini-and-search-to-more-apps/)** - 企業が自社サービスを Google の AI 体験に載せられる新しい開発者プラットフォームを発表。アプリの発見・利用経路が変わる可能性がある。
- **[Anthropic just launched tools to show companies what their AI spending is buying](https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/)** - 企業が AI 支出の内訳と効果を把握できるツールを提供開始。IPO を控えた利用実態の可視化の一環。
- **[Deepgram acquires Pipecat-maker Daily to bolster its voice AI infrastructure](https://techcrunch.com/2026/10/29/deepgram-acquires-pipecat-maker-daily-to-bolster-its-voice-ai-infrastructure/)** - Deepgram が音声 AI フレームワーク Pipecat の開発元 Daily を買収。Pipecat は OSS のまま継続する方針。
- **[Agent identity startup Mintive lands Cowboy Ventures, Coatue, angels Jeff Dean, Andrej Karpathy](https://techcrunch.com/2026/10/29/agent-identity-startup-mintive-lands-cowboy-ventures-coatue-angels-jeff-dean-andrej-karpathy/)** - 企業内のエージェントを IT 部門が制御できるようにするエージェント ID 基盤。エージェントの権限管理が独立した課題になりつつある。

## Ars Technica
- **[Massive leak exposes 41,000 DHS workers and undercover ICE agents](https://arstechnica.com/security/2026/10/massive-leak-exposes-41000-dhs-workers-and-undercover-ice-agents/)** - DHS 職員約 41,000 人の個人情報が流出し、潜入捜査官や監視関連の情報も含まれる。TechCrunch も同じ件を別角度で報じている。
- **[Updated Google privacy policy says your Gmail might be used for advertising](https://arstechnica.com/gadgets/2026/10/updated-google-privacy-policy-says-your-gmail-might-be-used-for-advertising/)** - Personal Intelligence を有効にすると、広告ターゲティングに使えるデータが増えるとするプライバシーポリシー改定。
- **[China's snooping around Pacific undersea cables raises risks for Big Tech](https://arstechnica.com/gadgets/2026/10/google-and-meta-subsea-cables-among-most-at-risk-from-sabotage-in-pacific/)** - 米企業が所有する太平洋横断海底ケーブルが、破壊や盗聴のリスクにさらされている。
- **[Licensing costs driving 90 percent of VMware users to explore options: Survey](https://arstechnica.com/information-technology/2026/10/operational-complexity-a-top-barrier-for-vmware-migrations-survey/)** - ライセンス費用で VMware 利用者の 9 割が代替を検討する一方、運用の複雑さが移行の障壁になっている。

## 注目トピック
今日は AI エージェントの安全性と運用が複数のソースで共通の関心事だった。dev.to ではログ経由のプロンプトインジェクションや、承認が具体的な操作に結び付いていないと防御にならない問題が論じられ、はてブでは AI のコード解析を妨害する手法が話題になった。TechCrunch ではエージェント ID 基盤の資金調達や Google の AI 向けアプリ開放が報じられている。エージェントに権限を渡す前提で、ID・承認・可観測性をどう設計するかが課題になっている。

もう一つの流れは暗号と鍵の基礎の見直しだ。Qiita の ML-DSA / JWT、AWS の ML-KEM 対応、Lobsters の 9 ビット AES 鍵事例が、耐量子移行と実装品質の両面を示す。インフラでは Lambda durable functions の可観測性強化や ECS の集約など、運用コストを抑える機能追加が目立った。
