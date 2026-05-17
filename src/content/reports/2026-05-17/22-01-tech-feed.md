---
title: "Tech Feed ダイジェスト（2026年5月18日）"
date: "2026-05-17T22:01"
category: "summary"
summary: "Bun Rust移行論争・Forgejo欧州躍進・ChatGPT家計簿接続・SiriプライバシーAI・Qwen3ローカル運用・ゲーム廃止禁止法案など"
tags: ["ai", "rust", "bun", "llm", "privacy", "security", "openai", "aws", "gaming", "oss"]
---

## はてなブックマーク (テクノロジー)

- **[筋が悪そうに見える方針に口を出す](https://konifar-zatsu.hatenadiary.jp/entry/2026/05/16/092704)** ([184users](https://b.hatena.ne.jp/entry/s/konifar-zatsu.hatenadiary.jp/entry/2026/05/16/092704)) - 「筋が悪い」と感じた意思決定にどう関わるべきかを考察したエンジニアリングマネジメント論。口を出すタイミング・方法・立場による効果の差を整理しており、自分の意見を組織に適切に届けるための実践的な視点を提供する。

- **[Bun が 6 日で Rust に書き換わった件](https://zenn.dev/ashunar0/articles/55a669c10e6a8d)** ([132users](https://b.hatena.ne.jp/entry/s/zenn.dev/ashunar0/articles/55a669c10e6a8d)) - JavaScript ランタイム Bun の一部コンポーネントがわずか 6 日で Zig から Rust に書き換えられたという出来事を解説した記事。「なぜ Zig から離れたのか」という問いを軸に、両言語の実用上のトレードオフが整理されている。

- **[データエンジニア向け Mermaid データモデル図 記法ガイド](https://zenn.dev/yuichi_dev/articles/217f4d3165d59f)** ([136users](https://b.hatena.ne.jp/entry/s/zenn.dev/yuichi_dev/articles/217f4d3165d59f)) - Mermaid.js の ER 図・フローチャート記法をデータモデル設計に活用する際の記法を体系的にまとめたガイド。コードとしてバージョン管理できるデータモデル図はドキュメント運用コストを大幅に下げるため、データエンジニアリングチームへの導入効果が高い。

- **[AI時代のコンピューター技術書 - golden-luckyの日記](https://golden-lucky.hatenablog.com/entry/2026/05/17/170605)** ([114users](https://b.hatena.ne.jp/entry/s/golden-lucky.hatenablog.com/entry/2026/05/17/170605)) - AI がコードを書いてくれる時代に「コンピューター技術書は何を伝えるべきか」を問い直したエッセイ。実装手順よりも概念・設計思想・理由の説明こそが書籍固有の価値になるという主張が多くのエンジニアの共感を集めた。

- **[「GitHubから離れる」—オランダ政府と個人開発者が同時にForgejoを選んだ理由](https://techfeed.io/entries/6a04e692b77ff536fc1f90d6)** ([65users](https://b.hatena.ne.jp/entry/s/techfeed.io/entries/6a04e692b77ff536fc1f90d6)) - GitHub への依存を懸念するオランダ政府機関と個人開発者がオープンソースの Git フォージ「Forgejo」に移行した背景を整理した記事。デジタル主権・データ管理・ベンダーロックインリスクという観点から、セルフホスト型ソフトウェアへの回帰傾向を示す。

## Zenn

- **[AIに同じ質問を3経路で投げたら、入力トークンが約1,200倍違った](https://zenn.dev/edinetdb/articles/ai-cost-input-tokens-structured-db)** - チャットUI・API直叩き・構造化DBからの文書参照という3つのアプローチで同じ質問をAIに送った際の入力トークン数を実測比較した記事。データの渡し方の設計次第でコストが3桁変わることを示す具体的な数値は、AI活用コスト最適化の実践的指針として価値がある。

- **[Vercelがシステムプログラミング言語「Zero」を公開した！](https://zenn.dev/tkithrta/articles/74b35b39c2bb5e)** - Vercel が新しいシステムプログラミング言語「Zero」を GitLab に公開したことへの分析記事。Rust/Zig と比較した設計思想の違いを検討しており、「フロントエンドインフラ企業がなぜ自社システム言語を作るのか」というツールチェーン垂直統合の流れを示す一例。

- **[Qwen3-30Bを動かし、社内LANにOpenAI互換APIとしてvLLMで公開してみた](https://zenn.dev/fusic/articles/779af66b5810a9)** - 24GB GPU 1 枚で Qwen3-30B を動かし、vLLM を使って社内 LAN で OpenAI 互換エンドポイントとして提供する構成をまとめた実践記事。既存の OpenAI API クライアントをそのままローカル LLM に向け替えられるため、プライバシーを保ちながら AI を社内展開するコストを大幅に削減できる。

## Qiita

- **[Claude Codeのskillsアイデア大全20選](https://qiita.com/kamome_susume/items/d8919d94f55d86e9881c)** - Claude Code の `/skills` 機能を活用した 20 通りのユースケースを横断的にまとめた記事。テスト自動化・ドキュメント生成・コードレビュー・インシデント対応など実務直結のパターンが揃っており、Claude Code の活用範囲を広げるアイデア集として実用的。

- **[専任情シスがいない20人規模の町工場で、自分たちでランサムウェア対策基盤を組む](https://qiita.com/masakai/items/d55a39ac35dca575b8ce)** - IT 専門家なしの中小製造業がゼロから構築したランサムウェア対策の具体策をまとめた記事。バックアップ設計・ネットワーク分離・従業員教育まで、予算制約のある現場での現実的なセキュリティ実装として、中小企業のセキュリティ担当者に参考になる。

- **[単一HTMLで作ったサイトを自己解凍形式にする試み](https://qiita.com/uni928/items/39e8e3bbc327526ac20f)** - HTML ファイル単体の中にアセット（画像・CSS・JS）を base64 エンコードで埋め込み、ブラウザ上でアーカイブとして配信・展開できる仕組みを実装した記事。デプロイ不要・サーバー不要でコンテンツを配布できるアプローチは、オフライン環境や簡易共有に応用できる面白いハック。

- **[NotebookLMの学習ノート作成をAIで自動化する](https://qiita.com/shin_takoyaki/items/0fb80d30daf31846a85f)** - Google NotebookLM への資料インポートとノート生成を API・スクリプトで自動化する方法を解説した記事。学習用コンテンツの前処理をパイプライン化し、大量の資料から高速にノートを生成するワークフローは、ナレッジベース構築の効率化に直結する。

## AWS 新着

- **[SageMaker AI now supports serverless model customization for Qwen3.6](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-sagemaker-ft-qwen3-6/)** (2026-05-14) - Alibaba Cloud の Qwen3.6 モデルのサーバーレスファインチューニングが SageMaker AI で利用可能になった。GPU インスタンスのプロビジョニングなしでモデルカスタマイズが行えるようになり、コスト効率の高いドメイン特化 LLM 構築の敷居が下がる。

- **[Amazon CloudFront announces support for OCSP Revocation for Mutual TLS (Viewer)](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-ocsp/)** (2026-05-14) - CloudFront の mTLS（相互 TLS 認証）で OCSP（Online Certificate Status Protocol）による証明書失効確認をサポートした。クライアント証明書の失効をリアルタイムに検証できるようになり、ゼロトラストアーキテクチャにおける証明書管理の堅牢性が向上する。

- **[Amazon CloudWatch Logs announces increased query result limits](https://aws.amazon.com/about-aws/whats-new/2026/05/cloudwatch-logs-query-results/)** (2026-05-15) - CloudWatch Logs Insights のクエリ結果件数上限が引き上げられた。高トラフィック環境や長期間のログ分析で途中でデータが切れてしまう問題が軽減され、大規模システムの運用調査がより実用的になる。

- **[AWS Organizations now supports higher quotas for service control policies (SCPs)](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-organizations-increased-scp-quotas/)** (2026-05-15) - AWS Organizations の SCP（サービスコントロールポリシー）に設定できる上限が拡張された。複数アカウントにわたる複雑な権限制御ルールを1つの組織で管理しやすくなり、大規模エンタープライズの AWS ガバナンス設計の柔軟性が増す。

## Lobsters

- **[Native all the way, until you need text](https://justsitandgrin.im/posts/native-all-the-way-until-you-need-text/)** (39pt) - macOS/Swift でネイティブ UI を徹底活用しようとしたところ、テキスト処理だけ壁に当たったという実体験の記録。Apple のテキスト処理 API の制約と Web ビューに頼らざるを得ない現実を整理しており、Swift ネイティブアプリ開発の実用上の落とし穴を示している。

- **[Go European — Discover European products and services](https://www.goeuropean.org/)** (26pt) - EU 製品・サービスの発見を支援するディレクトリサイト。米国テック企業への依存を減らしデジタル主権を守ろうという文脈で注目を集めており、Forgejo 移行の動きと連動する「欧州デジタル自立」トレンドを象徴するプロジェクト。

- **[Coding on Paper](https://wickstrom.tech/2026-05-16-coding-on-paper.html)** (21pt) - コーディングを画面ではなく紙に書くことで、思考の整理・設計の明確化・集中力の向上が得られるという実践記録。複雑化するデジタルツールへの依存に疑問を呈しながら、プログラミングの本質的な思考プロセスを問い直す視点を提供する。

- **[Claude Code managed to get Adobe Lightroom working on Linux](https://github.com/sander110419/lightroom-cc-on-linux)** (19pt) - Linux 上での Adobe Lightroom の動作を Claude Code を活用して実現したリポジトリ。Wine の設定・依存関係の解決・スクリプト自動化を AI エージェントが主体的に担い、人手では諦めていた環境構築を突破した事例として話題を集めた。

## dev.to

- **[What I learned building an AI agent loop in Go](https://dev.to/lucasnevespereira/what-i-learned-building-an-ai-agent-loop-in-go-5be0)** - Go 言語で AI エージェントのループ構造（ツール呼び出し→結果評価→次アクション決定）をフレームワーク非依存で自前実装した体験記。エラーハンドリング・トークン管理・ループ終了条件の設計ポイントが詳述されており、エージェント内部の仕組みを理解したい開発者に参考になる。

- **[Scraping dynamic pages with Python, Playwright and AWS Lambda](https://dev.to/lukzmu/scraping-dynamic-pages-with-python-playwright-and-aws-lambda-54f1)** - JavaScript でレンダリングされる動的ページを BeautifulSoup では取得できない問題を、Playwright をヘッドレスブラウザとして AWS Lambda 上で動かすことで解決した実装解説。コンテナイメージのサイズ削減やコールドスタート対策も含めた実運用に近い構成を紹介している。

- **[Can AI Agents Replace Enterprise Workflow Orchestration?](https://dev.to/pranay_ravi_b88172eac205c/can-ai-agents-replace-enterprise-workflow-orchestration-a-real-world-test-openclaw-n8n-claude-1hho)** - OpenClaw・n8n・Claude Dispatch を並べて企業ワークフロー自動化用途で比較検証した記事。シンプルな処理は AI エージェントで代替可能・複雑な条件分岐や可観測性は専用オーケストレーションツールが優位、という現実的な評価を下している。

## TechCrunch

- **[Apple's Siri revamp could include auto-deleting chats](https://techcrunch.com/2026/05/17/apples-siri-revamp-could-include-auto-deleting-chats/)** (2026-05-17) - Apple が開発中の次世代 Siri のリニューアルに、会話履歴の自動削除機能が含まれる可能性があると報じられた。プライバシーを競合他社との差別化軸として活用する Apple の戦略の延長線上にあり、ChatGPT のデータ保持モデルと対極的な設計思想が見える。

- **[OpenAI launches ChatGPT for personal finance, will let you connect bank accounts](https://techcrunch.com/2026/05/15/openai-launches-chatgpt-for-personal-finance-will-let-you-connect-bank-accounts/)** (2026-05-15) - OpenAI が個人向け資産管理・家計分析機能を ChatGPT に追加し、銀行口座と直接連携できるようにした。支出分析・ポートフォリオ評価・サブスクリプション把握などを自然言語で操作できるようになり、AI アシスタントが金融データに深く踏み込む重要な転換点を示している。

- **[A hotel check-in system left a million passports and driver's licenses open for anyone to see](https://techcrunch.com/2026/05/15/a-hotel-check-in-system-left-a-million-passports-and-drivers-licenses-open-for-anyone-to-see/)** (2026-05-15) - ホテルチェックインシステムを管理する企業がクラウドストレージをパブリック設定のままにしており、100 万件超のパスポートや運転免許証の画像が誰でもアクセス可能な状態に晒されていた。ID 管理システムにおける最小権限の原則の欠如が深刻な個人情報漏洩につながった典型事例。

- **[OpenAI co-founder Greg Brockman takes charge of product strategy](https://techcrunch.com/2026/05/16/openai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/)** (2026-05-16) - OpenAI 共同創業者の Greg Brockman がプロダクト戦略を統括することになった。ChatGPT と Codex（プログラミング製品）の統合計画が進む中での体制変更であり、OpenAI の製品ラインが AI エージェント中心に再編成される方向性を示唆している。

## Ars Technica

- **[The US is betting on AI to catch insider trading in prediction markets](https://arstechnica.com/tech-policy/2026/05/the-us-is-betting-on-ai-to-catch-insider-trading-in-prediction-markets/)** (2026-05-16) - 米 CFTC（商品先物取引委員会）が予測市場でのインサイダー取引を AI で検出するシステムの導入を表明した。政治選挙など高度に情報非対称な予測市場が投機的操作の温床となるリスクに対し、機械学習による異常検知で規制執行を強化しようとする取り組み。

- **[A revolutionary cancer treatment could transform autoimmune disease](https://arstechnica.com/science/2026/05/a-revolutionary-cancer-treatment-could-transform-autoimmune-disease/)** (2026-05-17) - 癌治療に使われる CAR-T 細胞療法を関節リウマチ・ループスなどの自己免疫疾患に応用する研究が進んでおり、根治の可能性を示す初期試験結果が報告された。免疫系を「リセット」するという発想の転換で、薬を飲み続けるしかなかった自己免疫疾患の治療パラダイムを変えうる知見として注目される。

- **[Bill to block publishers from killing online games advances in California](https://arstechnica.com/gaming/2026/05/bill-to-keep-online-games-playable-clears-key-hurdle-in-california/)** (2026-05-15) - オンラインゲームのサービス終了時にパブリッシャーがゲームを「プレイ不可能」な状態にすることを禁じるカリフォルニア州法案が重要な委員会を通過した。「購入したデジタルコンテンツは遊び続けられるべき」という権利を法制化しようとする動きで、旧型 Kindle サポート終了問題とも共鳴するデジタル所有権論争の最前線。

## 注目トピック

今回のフィードを貫く二大テーマは**「AI の金融・個人情報への深い介入」**と**「デジタル主権・所有権の再定義」**だ。OpenAI の ChatGPT 家計簿機能（銀行口座接続）と Apple の Siri プライバシー設計が同日に浮上し、AI アシスタントが金融データに接触する利便性と、百万件超のパスポートを晒したホテルシステムのリスクが表裏一体であることを浮き彫りにしている。一方、オランダ政府の Forgejo 移行・EU 製品ディレクトリ「Go European」・カリフォルニア州のゲーム廃止禁止法案という複数の動きが「企業依存から離れてデジタル資産を手元に取り戻す」という潮流を同時に示している。

技術トレンドでは**Qwen3 の急速な実用普及**が目立つ。Zenn での vLLM ローカル展開記事と AWS SageMaker の Qwen3.6 サーバーレスファインチューニング対応が同時に登場し、24GB GPU 1 枚から始められる高品質 LLM の選択肢が広がっている。また **Bun の Zig→Rust 移行と Vercel の自社言語「Zero」公開**は、ランタイム・フレームワーク企業がシステムプログラミングレイヤーまで自社制御を広げようとする垂直統合の流れを示しており、Zig・Rust 以外の「第三のシステム言語」が増えつつある新局面を告げている。
