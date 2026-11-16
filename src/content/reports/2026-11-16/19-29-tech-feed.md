---
title: "Tech Feed ダイジェスト（2026年11月17日）"
date: "2026-11-16T19:29"
category: "summary"
summary: "パスキー実装の脆弱性調査、富岳への不正アクセス、AI攻撃ツールArtexのFBI警告、Gemini 4 Hydrogen、AWS各種アップデートなど"
tags: ["security", "ai", "aws", "passkey", "postgresql", "mcp", "export-controls"]
---

## はてなブックマーク (テクノロジー)
- **[パスワードより安全なはずが……パスキー対応103サイトを検証→全てに脆弱性　独大学の調査結果](https://www.itmedia.co.jp/news/article/2611/16/2000003199/)** ([392users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2611/16/2000003199/)) - ドイツの大学がパスキー対応103サイトを調べ、すべてに脆弱性が見つかったという調査結果の報道。パスキーは仕様自体ではなく、サイト側の実装が弱点になりうることを示しており、導入側は実装の検証が必要になる。
- **[スパコン「富岳」に不正アクセス　理研が明らかに](https://www.itmedia.co.jp/news/article/2611/16/2000003224/)** ([90users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2611/16/2000003224/)) - 理化学研究所が、スーパーコンピュータ「富岳」への不正アクセスがあったと公表。共有計算基盤のセキュリティ対策の観点で注目される。
- **[ZedのコントリビューションポリシーがAI激おこな件 - keroxpのScrapbox](https://scrapbox.io/keroxp/Zed%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC%E3%81%8CAI%E6%BF%80%E3%81%8A%E3%81%93%E3%81%AA%E4%BB%B6)** ([71users](https://b.hatena.ne.jp/entry/s/scrapbox.io/keroxp/Zed%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC%E3%81%8CAI%E6%BF%80%E3%81%8A%E3%81%93%E3%81%AA%E4%BB%B6)) - エディタ Zed のコントリビューションポリシーと AI 生成コードの扱いをめぐる話題。OSS が AI 製 PR をどう受け入れるかという運用面の論点。
- **[レビューは AI が書いて、人が選ぶ](https://blog.recruit.co.jp/data/articles/ai-review-skills/)** ([78users](https://b.hatena.ne.jp/entry/s/blog.recruit.co.jp/data/articles/ai-review-skills/)) - リクルートのデータ部門ブログ。AI にレビューコメントを生成させ、人間が採否を選ぶ運用についての記事。
- **[Protomaps: Self-hosting map tiles has gotten cheap and easy](https://bruceroettgers.eu/blog/protomaps/)** ([11users](https://b.hatena.ne.jp/entry/s/bruceroettgers.eu/blog/protomaps/)) - 地図タイルを Protomaps で自前ホスティングする際の手軽さとコスト面を解説する記事。

## Zenn
- **[AIエージェントは悪意ある指示を記憶するのか？— AgentCore Memory と Guardrails で検証](https://zenn.dev/takuyousou/articles/agentcore-memory-poisoning-guardrails)** - 外部資料に含まれる悪意ある指示が、エージェントの長期記憶（Memory）に保存されてしまうリスクを AgentCore Memory と Bedrock Guardrails で検証。プロンプトインジェクションの「その場で従わない」だけでは足りない点を扱う。
- **[mizchi/mutator を入れてみた](https://zenn.dev/polyco/articles/e05cb28c569801)** - AI が大量に書いたテストに意味のないものがどれだけあるかを、ミューテーションテストで計測。StrykerJS と条件を揃えた比較で高速だったことや、開発ワークフローの skill への組み込みも紹介している。
- **[GitHub IssueにArtifactとしてHTMLとMarkdownを添付できるようになった](https://zenn.dev/kesin11/articles/20261114_github_issue_artifact)** - Public Preview の「Issue Artifact」の紹介。Issue に HTML / Markdown を添付し、専用パネルでそのまま表示できる。
- **[サンドボックス内のAIエージェントにHerdrを安全に使わせたい](https://zenn.dev/naofumimurata/articles/nono-hc-proxy)** - nono のサンドボックス内で動かすエージェントに、ターミナルマルチプレクサ Herdr を使わせるためのプロキシ構成。許可を素通しにするとサンドボックスを抜けられてしまう問題への対処。
- **[Apple container で docker compose を動かす（DNS 名と SSH で簡単になった）](https://zenn.dev/7kaji/articles/a9e056ced5f0c1)** - container 1.0.0 当時にあった手間（カーネル差し替え、localhost 転送スクリプト）が、約5か月後の 1.7.1 でどう簡単になったかを再検証した記事。

## Qiita
- **[はじめてのAPIログ設計 — 「ログはあるのに調べられない」を防ぐには？](https://qiita.com/masashige0904/items/22f2836485ecc25ee527)** - 冒頭抜粋によると、CloudWatch Logs にログはあるが調査に必要な記録を探しにくい状況に向け、ログレベル・JSON 形式・ログライブラリの役割を整理する内容。
- **[日本語の脆弱性 DB は 4.6 日かかる。待てないので、46 秒でセキュリティ情報が載るようにした](https://qiita.com/songchong/items/fa50cc82e49b24925fe3)** - 自分に関係する脆弱性を早く知り、対応期限まで把握したいという目的で、IT連携マップのセキュリティ情報を短時間で掲載する仕組みを作った話（抜粋ベース）。
- **[PostgreSQLとFastAPIで作る、状態遷移を守る更新APIと履歴テーブル](https://qiita.com/takumi_engineer/items/5a2dffdff4af6e9f45ce)** - 「配達済」から「出発」へ戻るような不正遷移と同時更新の上書きを防ぐため、遷移ルールをテーブルで持ち、更新と履歴記録をまとめて扱う設計。
- **[【速報】Google「Gemini 4 Hydrogen」登場！Argon・Carbonとの比較で読み解く Gemini 4 シリーズまとめ](https://qiita.com/tomokoro/items/41cc59d0085fa03c5d52)** - 2026年11月12日に Google DeepMind が発表した Gemini 4 Hydrogen を、Argon・Carbon と比較して整理した記事。同じ件は dev.to でもコスト観点の比較記事が出ており、はてブでも話題になっている。
- **[AI駆動開発を導入するためのツールをAIで作ってみた](https://qiita.com/kizuku_tabata/items/79e3411b93aff5c46177)** - AI 生成コードが既存 OSS と似てしまう「OSS スニペット」問題に対応するため、チームで AI 開発を進めるためのツールを AI で作った話（抜粋ベース）。

## AWS 新着
- **[Amazon Cognito now supports user pool session management](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-session-management/)** (2026-11-11) - ユーザープールでサインイン時に確立されるセッションの可視化と制御が可能に。
- **[Amazon Bedrock AgentCore now offers a Web Search API](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-web-search-api/)** (2026-11-10) - 1回の API 呼び出しで Web 検索ができる Web Search API が GA。エージェントに検索機能を持たせる実装が簡単になる。
- **[Amazon Aurora and RDS now support Graviton5-based R9g database instances](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-aurora-rds-postgresql-mysql-mariadb-r9g-instances/)** (2026-11-12) - Graviton5 ベースの R9g インスタンスが Aurora（PostgreSQL / MySQL 互換）と RDS（PostgreSQL / MySQL / MariaDB）で GA。
- **[Amazon CloudWatch Logs announces account-level retention policies](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)** (2026-11-09) - 単一ポリシーで、アカウント内の全ロググループ（または一部）の保持期間を設定可能に。保持期間の設定漏れ対策になる。
- **[AWS Security Hub now provides an SBOM inventory for your compute resources](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-sbom-inventory/)** (2026-11-06) - コンピュートリソース上のソフトウェアパッケージについて、組織横断の SBOM インベントリを継続的に提供。

## Lobsters
- **[Migrating from GitHub to Codeberg](https://yorickpeterse.com/articles/migrating-from-github-to-codeberg/)** (53pt) - GitHub から Codeberg へリポジトリを移行した経験談。VCS ホスティング選択の参考になる。
- **[Paint in the memory of other programs](https://citrons.xyz/journal/2026-04-13)** (57pt) - 他プロセスのメモリを可視化・書き換えるという、プログラミングと可視化タグの付いた実験的な記事。
- **[Announcing Hegel-clj](https://aphyr.com/posts/428-announcing-hegel-clj)** (34pt) - Aphyr による Clojure 向けライブラリ Hegel-clj のリリース告知（testing タグ）。
- **[Universal XSS in uBlock Origin from website-driven element picker](https://iter.ca/post/ubo-uxss/)** (27pt) - ウェブサイト側から起動できる要素ピッカーを経由して、uBlock Origin で Universal XSS が成立する脆弱性の報告。
- **[Enabling the parallel frontend on nightly](https://blog.rust-lang.org/2026/11/16/enabling-parallel-frontend-on-nightly/)** (11pt) - Rust 公式ブログ。nightly で並列フロントエンドが有効化されるという告知で、コンパイル時間の改善が期待される。

## dev.to
- **[PostgreSQL 19's pg_plan_advice turned a 28ms query into 264ms under load](https://dev.to/alexgeorgiev17/postgresql-19s-pgplanadvice-turned-a-28ms-query-into-264ms-under-load-46o5)** - PostgreSQL 19 RC2 のプラン指定拡張 pg_plan_advice を検証。プランを強制すると10クライアント時のスループットが9倍悪化し、試した全シナリオでプランナー自身の選択のほうが良かったという結果。
- **[Your AI Agent Retried the Tool Call. The First One Had Already Succeeded.](https://dev.to/rudratosh/your-ai-agent-retried-the-tool-call-the-first-one-had-already-succeeded-3pke)** - タイムアウトは「呼び出し側が観測したこと」しか示さないため、AI エージェントのリトライで二重課金が起きうる。安定した操作 ID、冪等キー、照合（reconciliation）でリトライ安全にする設計を解説。
- **[When an import becomes a zip bomb: bundle regressions in Next.js](https://dev.to/bra31k/the-import-was-7-kib-the-regression-was-153-kib-4jbj)** - 7 KiB の import が 153 KiB のバンドル増加を招いた Next.js のバンドルサイズ退行の調査記録。
- **[Deploying new Temporal workflow code while workflows are running](https://dev.to/remdore/deploying-new-temporal-workflow-code-while-workflows-are-running-4150)** - 数分〜数か月動く Temporal ワークフローの実行中にコードを更新するときの考え方（Python、分散システム）。
- **[Orchestrating Agents: Less Freedom for the Model, More Certainty for You](https://dev.to/aws-builders/orchestrating-agents-less-freedom-for-the-model-more-certainty-for-you-4nl1)** - Strands のワークフローを9回実行し、タイムアウトが発火しない、失敗が成功100%と報告される、再開でステップが再実行されないなどの問題を確認した検証記事。

## TechCrunch
- **[FBI says Artex AI open-source hacking tool used to breach networks in 'under three hours'](https://techcrunch.com/2026/11/16/fbi-says-artex-ai-open-source-hacking-tool-used-to-breach-networks-in-under-three-hours/)** - FBI が、オープンソースの AI ハッキングツール Artex が米国の IT 大手や韓国の金融業界への攻撃に使われたと発表。侵入までの所要時間が3時間未満という点が脅威の本質。
- **[US tightens AI chip export controls to deter Chinese companies from accessing compute remotely](https://techcrunch.com/2026/11/16/us-tightens-ai-chip-export-controls-to-deter-chinese-companies-from-accessing-compute-remotely/)** - 暫定規則により、中国など制限対象国へコンピュートを提供しうる場合、AI チップの輸出にライセンスが必要に。リモートアクセス経由の迂回を塞ぐ狙い。Ars Technica も同じ件を別角度で報じている。
- **[OpenAI will embed safety researchers to investigate AI subversion](https://techcrunch.com/2026/11/16/openai-will-embed-apollo-researchers-to-investigate-ai-subversion/)** - OpenAI が Apollo Research の評価者6名を組み込み、モデルが妨害的な振る舞いをしないか調べる。アクセスや開示の制限により独立性に疑問が出ている。

※ 他ソースとの重複・掲載済み・72時間超を除いた新規記事が3件のみだった

## Ars Technica
- **[Ships loiter near subsea cables amid Iran's warnings to Trump](https://arstechnica.com/gadgets/2026/11/ships-loiter-near-subsea-cables-amid-irans-warnings-to-trump/)** - イランが、米国が軍事攻撃を再び拡大した場合に海底ケーブルを攻撃すると警告し、ケーブル付近に船舶が滞留していると報じる記事。通信インフラの物理的な脆弱性を示す話題。
- **[FAA expands AI advice to manage air traffic congestion across entire US airspace](https://arstechnica.com/features/2026/11/faa-expands-ai-advice-to-manage-air-traffic-congestion-across-entire-us-airspace/)** - FAA が AI による混雑管理のアドバイス機能を全米の空域に拡大。航空会社は評価する一方、管制官組合は関与していなかったという。

※ 他ソースとの重複・掲載済みを除いた新規記事が2件のみだった

## 注目トピック
セキュリティでは、パスキー対応103サイトすべてに脆弱性が見つかったという調査、理研「富岳」への不正アクセス、uBlock Origin の Universal XSS が並んだ。認証の仕組みが安全でも実装で崩れるという点が共通している。AI 攻撃ツール Artex が3時間未満で侵入に使われたという FBI の警告もあり、攻撃側の自動化が進んでいる。

AI エージェント周りでは、長期記憶への指示の混入（Zenn）、サンドボックスの突破防止（Zenn）、ツール呼び出しのリトライと冪等性（dev.to）、ワークフロー実行の失敗検知（dev.to）など、運用上の信頼性と安全性を扱う記事が目立った。AWS でも AgentCore の Web Search API や Cognito の機能追加があり、エージェント基盤の整備が続いている。
