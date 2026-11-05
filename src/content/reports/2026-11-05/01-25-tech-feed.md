---
title: "Tech Feed ダイジェスト（2026年11月5日）"
date: "2026-11-05T01:25"
category: "summary"
summary: "Octoverse 2026、S3 Tables の Hive→Iceberg 移行、Cursor 拡張機能の改ざん、Binance 事件の手口など開発者向け注目記事"
tags: ["github", "aws", "security", "ai", "supply-chain", "rust", "zig", "postgres"]
---

## はてなブックマーク (テクノロジー)
- **[GitHubで最も使われている言語は2年連続TypeScript、プルリクの増加率はRust。GitHub Octoverse 2026](https://www.publickey1.jp/blog/26/github2typescriptrustosscc_switchomarchygithub_octoverse_2026.html)** ([24users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/github2typescriptrustosscc_switchomarchygithub_octoverse_2026.html)) - 最多利用言語は2年連続で TypeScript、PR の増加率が最も高いのは Rust。急成長した OSS として CC Switch や Omarchy が挙がっている。
- **[日本の全法令が「Git」の履歴に ～改正で何が変わったのかが一目瞭然](https://forest.watch.impress.co.jp/docs/serial/yajiuma/2153621.html)** ([47users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/serial/yajiuma/2153621.html)) - 法改正を Git の diff として可視化する試み。記事は Git の意外な弱点にも触れている。同じ題材を Zenn の個人記事も扱っている。
- **[AI駆動開発の次の段階: ソフトウェアファクトリー](https://qiita.com/Syoitu/items/9364a0a175893bb15219)** ([48users](https://b.hatena.ne.jp/entry/s/qiita.com/Syoitu/items/9364a0a175893bb15219)) - AI にコードを書かせる段階の次として、開発プロセス全体を工場のように組み立てる考え方を紹介する。
- **[2027年4月26日から変わる CloudWatch Logs の IAM ポリシーの評価方法を CloudWatch Logs IAM Policy Validator で確認する](https://kakakakakku.hatenablog.com/entry/2026/11/04/091507)** ([21users](https://b.hatena.ne.jp/entry/s/kakakakakku.hatenablog.com/entry/2026/11/04/091507)) - 2027年4月以降の評価方法の変更に備え、Validator で既存ポリシーへの影響を事前に確認する手順。
- **[無料でネット接続なしでもWikipedia・教科書・オフラインマップが検索できる「Project NOMAD」](https://gigazine.net/news/20261104-project-nomad/)** ([51users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261104-project-nomad/)) - Wikipedia や地図などをオフラインで検索でき、AI アシスタントも搭載したツール。

## Zenn
- **[C/Rust/Julia/Go/Java/JS/PyPy/LuaJIT 実行速度ベンチマーク](https://zenn.dev/trbx304/articles/34fec79781e39c)** - 同じアルゴリズムを多言語で書いて比較。行列積で Julia が C に勝つ、Rust は範囲の書き方で8倍差が出る、C は配列の並び順で2倍差が出るなどの結果。計測は各1回の簡易比較。
- **[AIにいきなり実装させない — kintoneカスタマイズ開発Skillのヒアリング設計](https://zenn.dev/genda_jp/articles/a5cbba3664748b)** - Claude の Agent Skills で kintone の JS カスタマイズを自動化。実装方法より、着手前に何を確定させるかというヒアリング設計が要点と述べている。
- **[GitHubのruleset移行時に注意したい、environment secretのブランチ保護仕様](https://zenn.dev/loglass/articles/a89a8d4ee86559)** - 従来のブランチ保護から ruleset へ移行する際の、environment secret に関わる保護仕様の注意点。
- **[NVIDIAの音声修復モデルRE-USEでポッドキャストのノイズ除去と文字起こしを比較してみた](https://zenn.dev/karaage0703/articles/podcast-reuse-whisper-workflow)** - 原音、音量調整のみ、RE-USE 修復後の3条件で Whisper の文字起こしを比較。

## Qiita
- **[EC2が起動できない！？原因は「AZ」だった話](https://qiita.com/AyaKunisawa/items/5af0d4f3c61e7dc4d27d)** - Terraform で東京リージョンの ap-northeast-1a に x8i.xlarge を作ろうとして apply が失敗した事例。冒頭抜粋によれば原因はアベイラビリティゾーンにある。
- **[Claude Codeの/model opusplan＋/advisor fableでOpus・Fable・Sonnetを自動で使い分けたら、めちゃめちゃ良かった](https://qiita.com/inoyu-qiita/items/d486f85b8333d5b324d9)** - 計画は Opus、助言は Fable、実装は Sonnet に自動で振り分ける運用を実務で試した記録。
- **[「AIのレビューだけでマージ、正直まだ怖い」と思ってたけど、条件次第ならアリかもしれない話](https://qiita.com/nobu34/items/a73129c6401ebae10960)** - AI がコードもレビューもするのに PR の山が減らない問題を出発点に、AI レビューのみでマージできる条件を考える。
- **[プロダクト検証基盤の整備に向けてテスト工程を支えるスキルを作成した](https://qiita.com/Mihyang_Cho/items/dfa26f98b73326734943)** - QA の立場から、テスト工程を効率化するスキルを作った取り組み。

## AWS 新着
- **[Amazon S3 Tables now provide a simple, cost-effective path for data lake modernization](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-managed-migration-hive-to-iceberg/)** (2026-11-04) - Apache Hive テーブルを Apache Iceberg へマネージドで移行できる。Iceberg の ACID トランザクション、スキーマ進化、タイムトラベルを使うための移行負担を下げる。
- **[AWS Step Functions workflows now available as AI agent tools](https://aws.amazon.com/about-aws/whats-new/2026/10/step-functions-workflows-ai-agent-tools/)** (2026-10-29) - Bedrock AgentCore Gateway 経由で、Step Functions のワークフローを AI エージェントのツールとして使える。実行の判断と入力はエージェント側が決める。
- **[Amazon Aurora now supports post-quantum TLS key exchange](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-postgresql-post-quantum-tls-key-exchange/)** (2026-10-29) - Aurora PostgreSQL が耐量子 TLS 鍵交換に対応した。
- **[Amazon ECS Managed Daemons can now collect json-file logs from application containers on Amazon ECS Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-ecs-managed-instances-json-file-log-driver/)** (2026-11-04) - ECS Managed Instances で json-file ログドライバーに対応し、Managed Daemons 用のログドライバーボリュームも追加された。
- **[Amazon RDS now supports per snapshot billing](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-rds-per-snapshot-billing/)** (2026-11-02) - これまで集約されていた RDS スナップショットの課金を、スナップショット単位で確認できる。

## Lobsters
- **[Zig 0.17.1 Released](https://ziglang.org/news/0.17.1-released/)** (42pt) - Zig のバグ修正リリース。
- **[Your Cryptography Conspiracy Theory Is Wrong](https://soatok.blog/2026/10/29/your-cryptography-conspiracy-theory-is-wrong/)** (44pt) - 暗号にまつわる陰謀論的な主張を、暗号の観点から検証して反論する。
- **[Introducing Adaptive Dark Mode](https://webkit.org/blog/18541/introducing-adaptive-dark-mode/)** (33pt) - WebKit が CSS / Web 向けの Adaptive Dark Mode を紹介する公式ブログ。
- **[Man-in-the-middle arbitrary code execution in Debian's apt](https://lists.debian.org/debian-security-announce/2026/msg00526.html)** (28pt) - Debian の apt に、中間者攻撃で任意コード実行につながる脆弱性。セキュリティアナウンスなのでアップデートの確認が必要。
- **[How to speed up the Rust compiler in November 2026](https://nnethercote.github.io/2026/11/04/how-to-speed-up-the-rust-compiler-in-november-2026.html)** (31pt) - Rust コンパイラの高速化に関する月次の進捗まとめ。

## dev.to
- **[After 5 years, Wasp 1.0 is coming: a 6-month plan for our full-stack JS framework](https://dev.to/wasp/after-5-years-wasp-10-is-coming-a-6-month-plan-for-our-full-stack-js-framework-4hlf)** - フルスタック JS フレームワーク Wasp が、約6か月後を目標に 1.0 を目指すロードマップ。
- **[Nuxt CLI v4 Is Great for AI Coding Agents](https://dev.to/erikch/nuxt-cli-v4-is-great-for-ai-coding-agents-5dhg)** - 開発サーバーが起動中でも、コーディングエージェントがその状態を扱いやすくなる Nuxt CLI v4 の改善。
- **[From `main.js` Leaks to Hidden Tailwind CSS v4 Bloat — How I Built `angular-bundle-guard`](https://dev.to/gde/from-mainjs-leaks-to-hidden-tailwind-css-v4-bloat-how-i-built-angular-bundle-guard-with-geg)** - Angular のバンドルに混入する不要なコードや Tailwind CSS v4 由来の肥大化を検出するツールの作成記。
- **[Part 4: The Alert That Could Never Fire](https://dev.to/ndcodes/part-4-the-alert-that-could-never-fire-3434)** - Prometheus の alerts.yml に書かれていたアラートが、構造上発火し得なかったという監視設定の落とし穴。
- **[How Hackers Weaponized DEV.to's Mention System to Spread a Phishing Scam](https://dev.to/ggle_in/how-hackers-weaponized-devtos-mention-system-to-spread-a-phishing-scam-1j7c)** - 「Mandatory user verification」を装うフィッシングが、メンション機能を悪用して拡散した手口の解説。

## TechCrunch
- **[Meta acquires AI coding startup Conductor](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/)** - Meta が、複数のエージェントチームでプロジェクトを並行開発させる Conductor を買収した。
- **[Hackers stole DreamHost customer files and inboxes during months-long attack](https://techcrunch.com/2026/11/04/hackers-stole-dreamhost-customer-files-and-inboxes-during-months-long-attack/)** - DreamHost は、脆弱性を悪用されて顧客のメールとファイルに数か月間アクセスされたと説明している。
- **[Almost no one uses AI agents to book their Uber, company says](https://techcrunch.com/2026/11/04/almost-no-one-uses-ai-agents-to-book-their-uber-company-says/)** - Uber によると、最繁忙週でも AI エージェント経由の配車は4人だった。エージェント連携の実需を測る材料になる。

※ 他ソースとの重複や過去掲載分を除くと、候補は3件だった。

## Ars Technica
- **[Anthropic VS code extension on Cursor backdoored for nearly 12 hours](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)** - Cursor 上の Anthropic の VS Code 拡張が約12時間バックドア化された。攻撃者が認証済みアカウントへアクセスした経路は不明のままで、拡張機能のサプライチェーンリスクを示す。
- **[Binance says hackers who stole billions in crypto spent months planning heist](https://arstechnica.com/information-technology/2026/11/binance-says-hackers-who-stole-billions-in-crypto-spent-months-planning-heist/)** - 手口はノート PC への感染、社内ツールの侵害、偽の採用面接など。TechCrunch も、北朝鮮の手口が以前から警告されていた点を別角度で報じている。
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - ターゲティング広告経由でゼロクリックのエクスプロイトが配信され、傭兵型スパイウェアが導入された。広告による配信が確認された最初の事例とみられる。
- **[Fridge hack costing millions and sparking fires stemmed from poor security](https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/)** - 700店舗のスーパーに被害が出た冷蔵設備への攻撃。原因はインターネットに露出した古い機器だった。TechCrunch は欧州で続く第2波を報じている。
- **[VMware releases vSphere Express for virtualization on up to 128 cores](https://arstechnica.com/information-technology/2026/11/vmware-releases-vsphere-express-for-virtualization-on-up-to-128-cores/)** - 128コアまでの仮想化向けに低価格帯の vSphere Express を投入した。下位顧客の声を受けた製品。

## 注目トピック
サプライチェーンと開発者ツールのセキュリティが目立つ。Cursor 上の公式拡張が約12時間改ざんされた件に加え、Debian の apt の脆弱性、Binance 事件での偽の採用面接や社内ツール侵害など、開発者の環境やツールが入口になる事例が続いた。エージェントについても、AWS が Step Functions をツール化し、Nuxt CLI がエージェント対応を進める一方、Uber では利用が4人にとどまるなど、基盤整備と実需の落差が見える。

もう一つの流れは、AI 時代の開発プロセスの見直しだ。Octoverse では TypeScript と Rust の伸びが示され、ソフトウェアファクトリーや AI のみでのレビュー・マージの是非が議論されている。コストと計測の面では RDS のスナップショット単位課金、S3 Tables の Hive→Iceberg 移行、Zig と Rust のツールチェーン改善が実務に近い話題だった。
