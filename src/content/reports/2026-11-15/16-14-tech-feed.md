---
title: "Tech Feed ダイジェスト（2026年11月16日）"
date: "2026-11-15T16:14"
category: "summary"
summary: "個人開発CAD、AWS Athena システムテーブル、Microsoft 大規模障害、Rails の将来など、8ソースの技術トピックをまとめた。"
tags: ["ai", "aws", "infrastructure", "security", "rails", "webdev", "outage"]
---

## はてなブックマーク (テクノロジー)
- **[個人開発で5週間150万DL、AIと爆速で作るCAD「SolidCraft」 - FabScene](https://fabscene.com/new/interview/solidcraft-open-source-cad-ai-1-5m-downloads-brennen-herbruck/)** ([246users](https://b.hatena.ne.jp/entry/s/fabscene.com/new/interview/solidcraft-open-source-cad-ai-1-5m-downloads-brennen-herbruck/)) - 個人開発のオープンソース CAD が AI を活用した開発で短期間に大きなダウンロード数を獲得した、というインタビュー記事。AI 支援による開発速度と OSS 公開の相性を示す事例。
- **[自作フィードリーダーを作った - A Day in the Life](https://secon.dev/entry/2026/11/12/220000-my-own-feed-reader/)** ([158users](https://b.hatena.ne.jp/entry/s/secon.dev/entry/2026/11/12/220000-my-own-feed-reader/)) - 既存サービスに頼らず自分用のフィードリーダーを実装した開発記。小さな個人ツールを自作する流れが再び注目されていることがうかがえる。
- **[pingしながら問題の切り分けまでしてくれるspingが良さげかも](https://kawarimidoll.com/posts/202610201/)** ([107users](https://b.hatena.ne.jp/entry/s/kawarimidoll.com/posts/202610201/)) - ping の結果を見ながらネットワーク障害の切り分けまで支援してくれる CLI ツール「sping」の紹介。障害調査の初動を楽にしてくれそうなツール。
- **[AIが便利になればなるほど深刻になる「自動化の皮肉」に人間はどう対処すべきか](https://gigazine.net/news/20261115-ai-isnt-replacing-sres-its-deskilling/)** ([95users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261115-ai-isnt-replacing-sres-its-deskilling/)) - 自動化が進むほど人間の運用スキルが衰え、異常時に対応しにくくなるという古典的な論点を、SRE と AI の文脈で論じた記事。
- **[リトルの法則で考える障害時のキャパシティプランニング](https://zenn.dev/rea9r/articles/littles-law-capacity-planning)** ([6users](https://b.hatena.ne.jp/entry/s/zenn.dev/rea9r/articles/littles-law-capacity-planning)) - 待ち行列理論のリトルの法則を使い、障害時に必要な処理能力を見積もる考え方を解説している。

## Zenn
- **[フロントエンドのフレームワークを、安全に段階的に入れ替える](https://zenn.dev/yasuakiomokawa/articles/de83bb4c4ea928)** - React などで書いた画面を別フレームワークへ少しずつ移すための手順と feature flag の使い方を整理。途中で止めても安全かどうかを判断したいマネージャー向けの節も用意されている。
- **[PostgreSQLのバージョンアップ後に ANALYZE VERBOSE を実行する理由](https://zenn.dev/fusic/articles/e05247d244838e)** - メジャーバージョンアップ後に統計情報を更新する必要がある理由を、統計情報の役割と実行計画の関係から解説。手順を言われるまま実行している人向けの基礎整理。
- **[Skills を持つ単一エージェントは、サブエージェント構成より品質で上回ることが多い — Anthropic が示す移行の手順](https://zenn.dev/happy_elements/articles/201519107f93de)** - Anthropic のブログをもとに、サブエージェント構成をメインのエージェントループへ Skills とツールごと取り込む（fold）際の判断基準と手順をまとめている。

## Qiita
- **[Chromium Embedded Framework (CEF) のROMとRAMの使用量をローエンド機向けにどこまで削減できるか？](https://qiita.com/rairaii/items/bad396ec591698160afb)** - YouTube 再生と CEF API が動く状態を保ったまま、arm64 向けに配布物サイズとメモリ使用量をどこまで削れるかを検証した記事（冒頭抜粋より）。
- **[社長の一言は重い。RAGにも忖度させてみた（重み付け検索）](https://qiita.com/kikuziro/items/43b360420d0cdcbf190c)** - RAG のチャンクが全て同じ重みで扱われる問題に対し、発言者の立場で重みを付ける検索を試した実装記事（冒頭抜粋より）。
- **[AWS Client VPNの設定でハマったポイントとその過程で得た気づき](https://qiita.com/amarelo_n24/items/f9b563de2eeeb8d3f8cd)** - Ubuntu 24.04 から Client VPN 経由で EC2 上の Squid プロキシに接続できなかった原因を、セキュリティグループと ENI の観点から調べたトラブルシューティング（冒頭抜粋より）。
- **[【個人開発】第1回：Cloudflareで独自ドメインのメール受信環境を構築する！](https://qiita.com/kandu/items/73bfa5a8d2aedd3c0dd4)** - Cloudflare のサービスを組み合わせ、独自ドメインのメール受信を Workers で確認するところまでを構築する連載の第1回（冒頭抜粋より）。

## AWS 新着
- **[Amazon EKS Auto Mode now supports security groups for Pods](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-security-groups-for-pods/)** (2026-11-11) - EKS Auto Mode で Pod 単位に EC2 セキュリティグループを適用できるようになり、同一ノード上のワークロードごとに異なるネットワークルールを設定できる。
- **[Amazon Athena introduces system tables for observability, auditing, and usage analytics](https://aws.amazon.com/about-aws/whats-new/2026/11/athena-system-tables/)** (2026-11-09) - 有効化すると利用データが自動で記録され、可観測性・利用状況分析・監査に使えるシステムテーブルが提供される。
- **[CloudWatch PromQL alarms now support EC2 and Application Auto Scaling](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-alarms-autoscaling-group-actions)** (2026-11-10) - PromQL を使った CloudWatch アラームから EC2 / Application Auto Scaling のステップ・シンプルスケーリングポリシーを起動できるようになった。
- **[Amazon S3 Tables now support S3 server access logging](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-server-access-logging/)** (2026-11-10) - テーブルバケットへのリクエストの詳細記録を取得でき、テーブル操作・名前空間管理・データアクセスを追跡できる。
- **[Amazon Redshift expands SUPER data type to store strings up to 16 million bytes](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-redshift-expands-super-to-16-million-bytes/)** (2026-11-06) - SUPER 型内の個々の文字列を最大 16MB まで格納可能に。データベースパラメータでオプトインすると有効になる。

## Lobsters
- **[Memory management in 40 major C projects, a survey](https://theconsensus.dev/p/2026/11/08/c-memory-management-survey.html)** (14pt) - 主要な C プロジェクト40件のメモリ管理手法を調査した記事。実プロジェクトでのアロケーション設計の傾向をまとめて俯瞰できる。
- **[Let Me Let You Own Your Data](https://www.willett.io/posts/data/)** (38pt) - データベースとプライバシーのタグが付いた議論記事で、ユーザーが自分のデータを所有できる設計を扱う。コメントも28件と活発。
- **[FreeBSD bhyve Live Migration: Moving VMs Between Hosts](https://gyptazy.com/blog/freebsd-bhyve-live-migration-support-rfc/)** (12pt) - FreeBSD の hypervisor bhyve におけるライブマイグレーション対応（RFC）を紹介する記事。
- **[cursor:pointer on buttons](https://blog.kizu.dev/cursors/)** (18pt) - ボタンに `cursor: pointer` を付けるべきかをアクセシビリティと CSS の観点から論じた記事。コメントは10件。

## dev.to
- **[Long Live Rails](https://dev.to/ben/long-live-rails-3p21)** - Rails World 2026 で DHH が語った内容を受け、Rails の今後を Rust や AI との関係も含めて考察する記事。
- **[Jira said Done. It wasn't, and the bug showed up later. So I made Jira check first.](https://dev.to/wst2002rk/jira-said-done-it-wasnt-and-the-bug-showed-up-later-so-i-made-jira-check-first-9ed)** - PR マージと CI 通過の後でもバグが残る問題に対し、チケットを Done にする前に検証を挟む OSS ツールを作った事例。
- **[uv 0.13's tar-codec backend installs a 6,000-file sdist in 2.5 seconds instead of 3.8](https://dev.to/alexgeorgiev17/uv-013s-tar-codec-backend-installs-a-6000-file-sdist-in-25-seconds-instead-of-38-2ijc)** - uv 0.13 の新しい tar 展開バックエンドを計測し、6,000 ファイルの sdist で中央値 3.8 秒から 2.5 秒に短縮されたと報告。デバイスファイルのエントリが従来は黙って無視され、今は明確なエラーになる点も指摘している。
- **[Find the production agent failures that every health check misses](https://dev.to/googlecloud/find-the-production-agent-failures-that-every-health-check-misses-39j8)** - ヘルスチェックでは検出できない本番エージェントの失敗を拾い、必要なら原因コード行まで追跡する OSS の品質エージェント「AQuA」の紹介。
- **[ChatGPT Stopped Recommending This App Overnight. The Culprit Was a Domain Move (and One Regex)](https://dev.to/arshtechpro/chatgpt-stopped-recommending-this-app-overnight-the-culprit-was-a-domain-move-and-one-regex-5c3i)** - ドメイン移行と正規表現1つが原因で、ChatGPT 経由の流入が突然止まった iOS アプリの調査記録。

## TechCrunch
- **[Transportation secretary blames 'routine' equipment upgrade for grounding flights nationwide](https://techcrunch.com/2026/11/14/transportation-secretary-blames-routine-equipment-upgrade-for-grounding-flights-nationwide/)** - 米国全土の運航停止の原因を運輸長官が「定期的な機器更新」と説明し、FAA 長官は AI 関連の証拠はないと述べた。複数の航空路管制センターで通信障害が起きていたという。Ars Technica も同件の運航停止解除を別角度で報じている。
- **[Where was Nvidia's security team?](https://techcrunch.com/2026/11/14/where-was-nvidias-security-team/)** - Nvidia のセキュリティ責任者が8月に退任しており、日常会話レベルの情報漏えいは多くの企業の防諜体制では拾いにくい、と元諜報担当者が指摘する記事。

## Ars Technica
- **[Microsoft's global outage may be worse than Amazon's or CrowdStrike's, expert says](https://arstechnica.com/tech-policy/2026/11/microsoft-blames-failed-server-health-checks-not-hackers-for-global-outage/)** - Microsoft は原因を攻撃ではなく、サーバーのヘルスチェックの失敗だと説明した。政府・病院・裁判所などに影響が及んでおり、過去の大規模障害との比較も論じられている。TechCrunch も同件を別角度で報じている。
- **[Ukraine's fiber-optic drones get squeezed by AI data center demand](https://arstechnica.com/gadgets/2026/11/ukraines-fiber-optic-drones-get-squeezed-by-ai-data-center-demand/)** - 光ファイバーの供給を巡り、ウクライナ軍・ロシア軍・データセンターが中国産の供給を奪い合っているという、AI インフラ需要の波及を扱った記事。
- **[Enterprises keep buying software upgrades that IT thinks will make things worse](https://arstechnica.com/information-technology/2026/10/survey-enterprises-waste-28-percent-of-software-budgets-on-unwanted-upgrades/)** - 大企業の IT 責任者2,018人への調査から、ソフトウェア予算の約28%が望まれないアップグレードに費やされている実態を報じる。
- **[A Sam Altman parody offers an amusing lesson in memory management](https://arstechnica.com/gadgets/2026/11/a-sam-altman-parody-offers-an-amusing-lesson-in-memory-management/)** - パロディを題材に RAM の数字を検証し、メモリ管理の教訓を引き出す記事。

※ TechCrunch は72時間以内かつ技術的な中身のある記事が少なく、2件にとどめた。

## 注目トピック
今回は障害・運用の話題が目立った。Microsoft の世界規模の障害は、攻撃ではなくサーバーのヘルスチェック失敗が原因と説明されており、米国の全土運航停止も機器更新が原因とされた。どちらも単一の変更が広範囲に波及する構図で、はてブの「自動化の皮肉」やリトルの法則の記事とも、障害時の運用能力という点でつながる。

AI 開発の周辺では、Zenn のサブエージェントから単一エージェントへの fold、dev.to の本番エージェントの失敗検出や「Done」前の検証など、エージェントの品質を実行・検証で担保する考え方が複数のソースで共通して現れた。AWS でも Athena のシステムテーブルや CloudWatch PromQL アラームなど、可観測性を強化するアップデートが続いている。
