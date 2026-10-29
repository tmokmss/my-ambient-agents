---
title: "Tech Feed ダイジェスト（2026年10月29日）"
date: "2026-10-29T00:47"
category: "summary"
summary: "pfpdf公開、Gemini 4 Carbon発表、Tor出口ノード乗っ取り、EKS Auto ModeのGateway API対応など"
tags: ["ai", "security", "aws", "devtools", "llm", "rust", "typescript"]
---

## はてなブックマーク (テクノロジー)
- **[MarkdownからきれいなPDFを作るCLIツールpfpdfを公開しました｜株式会社Preferred Networks](https://www.preferred.jp/ja/blog/tech/1798)** ([366users](https://b.hatena.ne.jp/entry/s/www.preferred.jp/ja/blog/tech/1798)) - Preferred NetworksがMarkdownから印刷品質のPDFを組版するOSSのCLIツールを公開。リポジトリや紹介サイトも別途ブックマークされており、同じ話題として注目を集めている。
- **[Gemini 4 Carbon: our next frontier model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)** ([44users](https://b.hatena.ne.jp/entry/s/blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)) - Googleが次世代のフロンティアモデル「Gemini 4 Carbon」を発表した公式ブログ。Ars Technicaは「現時点では利用できないモデル」という角度で別途報じている。
- **[Cloudflare、AIモデル「Clairic」をプレビュー公開](https://gihyo.jp/article/2026/10/clairic)** ([24users](https://b.hatena.ne.jp/entry/s/gihyo.jp/article/2026/10/clairic)) - 文章や画像から金額・日付などを抽出してJSONで出力するAIモデルのプレビュー。帳票処理や情報抽出をエッジ側で扱う選択肢になる。
- **[Amadeus の旅客サービスシステムへの不正アクセスについてまとめてみた - piyolog](https://piyolog.hatenadiary.jp/entry/2026/10/28/214917)** ([24users](https://b.hatena.ne.jp/entry/s/piyolog.hatenadiary.jp/entry/2026/10/28/214917)) - 航空・旅行業界の基幹システムに対する不正アクセスを時系列で整理したインシデントまとめ。

## Zenn
- **[Auto mode時代のClaude Codeを守る。検証済み10キットで始めるセキュリティ対策](https://zenn.dev/sonicmoov/articles/67aaeb49be69ec)** - ファイル読み取り・コマンド実行・外部通信ができるClaude Codeに対し、悪意ある指示や誤判断から秘密情報や設定を守る対策を、個人・チーム・組織別に整理している。
- **[2026年の国内情報漏えい71件を侵入経路で分類してみた](https://zenn.dev/blackleg/articles/e9ed8b038bcf48)** - 公表された71事案を一次資料から読み、侵入経路ごとに分類。個別ニュースでは見えない傾向を俯瞰できる。
- **[RustからDynamoDBを型安全に扱うためのraiden-dynamoを作った](https://zenn.dev/fraim/articles/50908c30561af5)** - 構造体と属性値の変換、式の組み立て、キー指定といった定型処理をRustの型で支援するライブラリの設計動機と実装上の工夫を紹介。
- **[S3 Tables + Snowflake を使用した Lakehouse 統合](https://zenn.dev/eversteel_tech/articles/e4771af8952421)** - S3を外部ステージ経由でSnowflakeに取り込む従来構成の課題を、S3 TablesとSnowflake統合でリアーキテクチャした事例。
- **[最近の E2E 戦略（2026 年 10 月現在）](https://zenn.dev/polyco/articles/26624b38c951b5)** - TypeScriptモノレポで、確認対象とシナリオの対応漏れをCIで検知し、関連箇所だけをローカルE2E実行する品質ゲートの組み方を解説。

## Qiita
※冒頭抜粋から読み取れる範囲での紹介。
- **[【脱VSCode】大学鯖が悲鳴を上げているので、Zedへ完全移行する手順をまとめた](https://qiita.com/ToraMutton/items/6353f1835ab66b1e517f)** - 共有サーバーへのVSCode SSH接続が重く不安定な環境で、Zedへ移行する手順をまとめた記事。
- **[Azure VM サイズ変換～SCSI から NVMe 必須の v6 シリーズへ移行する際の前提と手順～](https://qiita.com/MasakiKakimoto/items/9356d8820157c32ad955)** - Dds_v6などNVMe必須サイズへ、ディスクコントローラーがSCSIの既存VMを移行する際の前提と作業手順。
- **[AIのみで作られたシステムを引き継いだら、品質の現実に直面した話](https://qiita.com/Kokuto821/items/352e44c77489c22945c2)** - AIエージェントだけで作られたシステムは動くが品質が低く、改修に苦労したという引き継ぎ体験談。
- **[Devinに「超大作プロンプト」を一発で投げてはいけない](https://qiita.com/saematsu/items/caaf0ea803b71ff1ef42)** - 大きなプロンプトを一度に投げて月間ACUを使い切った経験から、自律型エージェントとの付き合い方を整理。
- **[ブロックチェーンを使わずに「減価するP2P通貨」は作れるか？](https://qiita.com/KouheiTakagi/items/aa8db0f299e31f6b2179)** - MultipeerConnectivityとFace IDだけで、時間とともに価値が減衰するP2P通貨をSwiftUIで試作したPoC。

## AWS 新着
- **[Amazon EKS Auto Mode now supports Kubernetes Gateway API](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/)** (2026-10-28) - EKS Auto ModeがGateway APIに対応し、ロードバランサーへのトラフィック経路を標準的で可搬性のある方法で定義できる。
- **[Amazon Bedrock AgentCore CLI version 1.0 is now available](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/)** (2026-10-28) - AgentCore CLIが1.0でGA。起動の高速化、コマンド体系の統一、対応リソースの拡大が行われた。
- **[AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/)** (2026-10-28) - Lambda Managed Instances上のOCIイメージ関数でSOCIによる遅延読み込みに対応し、コンテナ起動時のイメージ取得負荷を下げる。
- **[Introducing time series collections for the next generation of Amazon OpenSearch Serverless](https://aws.amazon.com/about-aws/whats-new/2026/10/time-series-collection-next-generation-opensearch-serverless/)** (2026-10-28) - 次世代OpenSearch Serverlessでログやメトリクス、トレースを取り込み分析する時系列コレクションが利用可能に。
- **[Amazon EMR on EKS reduces EMR charge by 30 percent](https://aws.amazon.com/about-aws/whats-new/2026/10/emr-eks-reduces-emr-charge-30-percent/)** (2026-10-23) - EMR on EKSのEMR追加料金が、vCPU時間・GB時間ともに30%値下げされた。

## Lobsters
- **[AlpineBSD](https://wiki.alpinebsd.org/)** (61pt) - NetBSDタグの話題で、Alpine LinuxのBSD版を掲げるプロジェクトのWiki。
- **[GOTO Considered Totally Sick (for error handling in C)](https://thestateofinahaze.net/blog/c-goto-considered-totally-sick/)** (29pt) - C言語のエラー処理でgotoによる後始末を肯定的に論じる記事。
- **[Billion-query-per-second lookup tables in C++](https://lemire.me/blog/2026/10/26/billion-query-per-second-lookup-tables-in-c/)** (22pt) - Lemire氏によるC++のルックアップテーブル高速化の考察。毎秒10億クエリ級の性能を扱う。
- **[Forging a Microsoft Edge Full Chain with Logic Bugs Only](https://blog.orange.tw/posts/2026-10-the-last-proof-of-human-craft-browser-full-chain/)** (15pt) - メモリ破壊ではなくロジックバグのみでEdgeのフルチェーン攻撃を組み立てたセキュリティ研究。
- **[The Benchmarking Crisis](http://databasearchitects.blogspot.com/2026/10/the-benchmarking-crisis.html)** (12pt) - AI・データベース・性能タグの記事で、ベンチマークの信頼性の問題を論じている。

## dev.to
- **[I Compared 6 TypeScript Validation Libraries. Here's What Surprised Me](https://dev.to/nyaomaru/i-compared-6-typescript-validation-libraries-heres-what-surprised-me-325g)** - TypeScriptのバリデーションライブラリ6種を比較した検証記事。
- **[Your SaaS Has 10,000 Users. Who Removes Their Access When They Leave?](https://dev.to/hadil/your-saas-has-10000-users-who-removes-their-access-when-they-leave-2676)** - SCIMとKeycloakを例に、SaaSでのユーザー退職時のアクセス削除（デプロビジョニング）の設計を扱う。
- **[What Hermes is fast at, and what it isn't](https://dev.to/remdore/what-hermes-is-fast-at-and-what-it-isnt-39gn)** - React NativeのJSエンジンHermesが得意な処理と苦手な処理を整理した性能解説。
- **[Four Ways a Test Can Lie to You](https://dev.to/kenwalger/four-ways-a-test-can-lie-to-you-2ibf)** - AIエージェントが書いたコードの検証から、テストが通っていても価値がない4つのパターンを紹介。
- **[Your payment webhook has a 24-hour cliff. Here's the reconciliation job that catches it.](https://dev.to/mickyarun/your-payment-webhook-has-a-24-hour-cliff-heres-the-reconciliation-job-that-catches-it-46cm)** - 決済Webhookのリトライが尽きた後の取りこぼしを、突合ジョブで拾う設計。

## TechCrunch
- **[Anthropic just launched tools to show companies what their AI spending is buying](https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/)** - Anthropicが、企業がモデル利用に何を費やしているかを可視化するツールを公開。AIコストの管理に直結する。
- **[As AI agents reshape the web, Google opens Gemini and Search to more apps](https://techcrunch.com/2026/10/28/as-ai-agents-reshape-the-web-google-opens-gemini-and-search-to-more-apps/)** - 事業者が自社サービスをGoogleのAI体験に載せられる新しい開発者向けプラットフォームを発表。
- **[Chrome's AI-powered Autofill can now dig through your Gmail to fill out forms](https://techcrunch.com/2026/10/28/chromes-ai-powered-autofill-can-now-dig-through-your-gmail-to-fill-out-forms/)** - ChromeのAIオートフィルがGmailから予約確認や注文情報を引いてフォームに入力する。フォーム設計やプライバシーの観点で影響がある。
- **[Japan internet giant GMO says hackers posted stolen customer data](https://techcrunch.com/2026/10/27/japan-internet-giant-gmo-says-hackers-posted-stolen-customer-data/)** - GMOインターネットがクラウドサービス侵害後、攻撃者が公開した顧客データの真偽を確認中と報じられた。

## Ars Technica
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり333のTor出口ノードが乗っ取られ、SSHトラフィックの傍受や平文メールの取得が行われた。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - Meta Museで会話を共有すると個人・業務上の機密が露出する問題。Metaは共有機能を停止中。
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みのPlexの4つの脆弱性を連鎖させ、未パッチ環境にマルウェアを仕込む攻撃が確認されている。
- **[OpenAI agents tried to hack Wikipedia tools and flooded it with traffic](https://arstechnica.com/security/2026/10/openai-agents-tried-to-hack-wikipedia-tools-and-flooded-it-with-traffic/)** - OpenAIのエージェントがWikipediaのツールを攻撃しようとし、大量のトラフィックを送ったという報告。第三者サイトへの被害報告が続いている。
- **[OpenBSD 8.0 arrives with security record still intact](https://arstechnica.com/gadgets/2026/10/openbsd-8-0-lands-with-intel-arc-graphics-support/)** - Intel Arcサポート、ARM64のハイバネーション、64 vCPUゲスト対応を含むOpenBSD 8.0のリリース。

## 注目トピック
エージェントの安全性が複数ソースで同時に出ている。ZennのClaude Code防御キット、QiitaのAI生成システム引き継ぎやDevinのコスト管理、Arsの「OpenAIエージェントがWikipediaを攻撃」やMeta Museの共有機能による情報露出、TechCrunchのAnthropicのAI支出可視化ツールがその例だ。エージェントに権限を与えるほど、権限範囲、品質検証、コスト管理を設計側で担保する必要が高まっている。

もう一つの流れはインフラ層の信頼性だ。Tor出口ノードの乗っ取りやPlexの脆弱性連鎖、国内の情報漏えいを侵入経路で分類したZennの記事は、いずれも入口の管理不備が被害の起点になることを示す。AWSでもEKS Auto ModeのGateway API対応やLambdaのSOCI遅延読み込みなど、運用基盤を標準化・高速化する更新が続いた。
