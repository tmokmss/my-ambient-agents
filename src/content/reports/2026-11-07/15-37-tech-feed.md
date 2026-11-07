---
title: "Tech Feed ダイジェスト（2026年11月8日）"
date: "2026-11-07T15:37"
category: "summary"
summary: "AWS の Web 受信設計、ISUCON 2026 のエージェント優勝、Redshift SUPER 拡張、Plex 脆弱性の悪用などを収録"
tags: ["aws", "security", "ai", "isucon", "infrastructure", "typescript"]
---

## はてなブックマーク (テクノロジー)
- **[AWSでWebリクエストを受ける8パターンと「オリジンを裸にしない」設定プラクティス](https://zenn.dev/anfangd/articles/aws-web-ingress-origin-protection)** ([178users](https://b.hatena.ne.jp/entry/s/zenn.dev/anfangd/articles/aws-web-ingress-origin-protection)) - CloudFront・ALB・API Gateway など AWS の Web 受信構成を 8 パターンに整理し、オリジンへ CloudFront を迂回して直接アクセスされないようにする設定を解説する。
- **[毎朝のセキュリティ確認をAIに任せたら、判定の基準が「人が動く必要があるか」に変わった](https://zenn.dev/stock_inc/articles/ai-daily-security-check-criteria)** ([146users](https://b.hatena.ne.jp/entry/s/zenn.dev/stock_inc/articles/ai-daily-security-check-criteria)) - 日次のセキュリティ確認を AI に任せた運用記録。重大度ではなく「人間の対応が要るか」を判定基準にしたところ、通知の質が変わったという。
- **[120FPS達成が大変だった話。](https://project-asura.com/blog/archives/14007)** ([34users](https://b.hatena.ne.jp/entry/s/project-asura.com/blog/archives/14007)) - ゲーム／グラフィックス実装で 120FPS を達成するまでのボトルネック調査と最適化の過程をまとめた技術ブログ。
- **[運用しながら改善する LLM-as-a-Judge の構築](https://tech.timee.co.jp/entry/2026/11/05/101407)** ([5users](https://b.hatena.ne.jp/entry/s/tech.timee.co.jp/entry/2026/11/05/101407)) - LLM を評価者に使う仕組みを、本番運用しながら継続的に改善していくためのプロセスを紹介する。

## Zenn
- **[ISUCON 2026 で優勝しました（当日編）](https://zenn.dev/luvtechno/articles/isucon2026-competition-day)** - 1 人参加で、人間が介在しない（HOOTL）競技用エージェントを用意し 625,857 点で優勝した記録。ISUCON を完全自律のエージェントで勝ち切る例として注目される。
- **[Weight-Space Programming やってみた(やらせてみた)](https://zenn.dev/nwn/articles/cf9fe78aa33861)** - 大規模モデルが小型モデル（Qwen3.5-0.8B）の重みを編集したという論文の解釈を整理する。モデルがやったのは、コードで重みや活性を調べ、仮説を立てて編集し、結果を確かめることだと説明している。
- **[[TypeScript] パスエイリアスには Subpath Imports を使いたい](https://zenn.dev/mediba/articles/167e2a3f663889)** - tsconfig の `paths` ではなく、Node.js 標準の package.json `imports`（Subpath Imports）でエイリアスを定義する方針を解説する。
- **[.NET にも build.cs 欲しいんじゃーーー](https://zenn.dev/sator_imaging/articles/c10d8da7685308)** - ゲームランチャーで、期限切れドメインの CDN 上のスクリプトが改ざんされた事案を受け、実行時に最新版を取得する設計のリスクとビルド時スクリプトの必要性を論じる。
- **[Slurm は Kaggle で役に立つ](https://zenn.dev/pomcho555/articles/c455d086ec47af)** - GPU 1 枚の自宅環境でも、Slurm のジョブキューで学習ジョブを管理すると Kaggle の実験が捗るという実践談。

## Qiita
※ 冒頭抜粋に基づく紹介
- **[postgres:18 が起動直後に終了する原因：データディレクトリの場所が変わった（16 → 18 移行手順付き）](https://qiita.com/anderslee2020/items/3bcbb9bbae3b7322c728)** - 公式イメージ 18 でデータディレクトリの配置が変わり、旧設定のボリュームマウントだと起動直後に終了する問題と移行手順を扱う。
- **[無人で動かす claude -p に渡す道具を絞る](https://qiita.com/takamatt_ai/items/d9c67f245a794e659f30)** - cron などで無人実行する `claude -p` に、`--allowedTools` で git をサブコマンド単位に許可し、専用の `--settings` でフックだけ足す方法。
- **[Claude Code のコミット前フックで TruffleHog を実行し、シークレット入りのコミットを止める](https://qiita.com/CircleCIJapan/items/00c07ba3c040a8d2e84d)** - AI が生成したコミットへの秘匿情報混入を、pre-commit フックでのシークレットスキャンで防ぐ手順。
- **[【RTL】テストは成功しているのにactで囲めと警告された](https://qiita.com/ryu0947/items/59d3a7f4e032deea8212)** - React Testing Library でテストは通るのに `act` 警告が出る原因を扱うトラブルシューティング。
- **[AIの返事を43秒から10秒にした工夫](https://qiita.com/sheep6box/items/e3e0c443272e3568c86c)** - 音声対話デバイスの待ち時間を区間ごとに計測し、返答を文単位で分けて音声化することで 43 秒から約 10 秒に短縮した事例。

## AWS 新着
- **[Amazon Redshift expands SUPER data type to store strings up to 16 million bytes](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-redshift-expands-super-to-16-million-bytes/)** (2026-11-06) - SUPER 型内の文字列が最大 1,600 万バイトに拡張された。データベースパラメータでオプトインすると、半構造化データ取り込み時に適用される。
- **[Amazon Cognito announces 99.99% Service Level Agreement for the Plus feature plan](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-sla-update/)** (2026-11-05) - Plus プランのユーザープールの SLA が 99.9% から 99.99% に引き上げられた（11 月 1 日から）。
- **[Amazon FSx for Lustre delivers 16x higher metadata IOPS on Intelligent-Tiering file systems](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-fsx-for-lustre-intelligent-tiering-16x-higher-metadata-iops)** (2026-11-05) - Intelligent-Tiering のメタデータ IOPS 上限が最大 192,000 に（従来の 16 倍）。メタデータ負荷の高い HPC／ML 向けの改善。
- **[AWS Lambda now supports queues for Apache Kafka in self-managed Kafka event sources](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-queue-kafka-esm/)** (2026-11-02) - セルフマネージド Kafka や Confluent Cloud のイベントソースマッピングで、Kafka のキュー機能に対応した。
- **[Amazon MSK now supports TLS 1.3 for data in transit](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-msk-tls/)** (2026-10-30) - MSK Provisioned で、暗号化ポリシー経由で TLS 1.3 を選べるようになった。

## Lobsters
- **[The Port That Does Not Exist](https://acid.vegas/blog/the-port-that-does-not-exist/)** (51pt) - ネットワーキングのタグが付いた記事で、存在しないポートをめぐる挙動を掘り下げる。
- **[Progress Report: Linux 7.3 - Asahi Linux](https://asahilinux.org/2026/11/progress-report-7-3/)** (25pt) - Apple Silicon 向け Asahi Linux の Linux 7.3 に向けた進捗報告。
- **[Scriptable GeoDNS: leaving AWS for Bunny](https://vincent.bernat.ch/en/blog/2026-bunny-geodns)** (14pt) - AWS（Route 53）から Bunny の DNS へ移行し、スクリプトで GeoDNS を実現した事例。
- **[Forwarded Without Question: How Web Frameworks Overtrust the Forwarded Header](https://www.lkoskela.fi/blog/2026-11-05-forwarded-without-question/)** (3pt) - Web フレームワークが `Forwarded` ヘッダーを無条件に信頼する危険性を解説するセキュリティ記事。
- **[Just how far can the FOR UPDATE SKIP LOCKED Postgres queue go?](https://garbagecollected.io/posts/postgres-task-queue-where-it-breaks/)** (1pt) - `FOR UPDATE SKIP LOCKED` を使った Postgres タスクキューが、どの規模で破綻するかを検証する。

## dev.to
- **[Containerd 2.4's switch to klauspost's gzip decoder speeds up real image layers by 18%](https://dev.to/alexgeorgiev17/containerd-24s-switch-to-klausposts-gzip-decoder-speeds-up-real-image-layers-by-18-2jne)** - containerd 2.4 が Go 標準の gzip から klauspost/compress に切り替わったことで、実イメージのレイヤー展開が約 18% 速くなったというベンチマーク。
- **[An agent told me it deployed. I asked the server, and the containers were a day old](https://dev.to/chet103cc/an-agent-told-me-it-deployed-i-asked-the-server-and-the-containers-were-a-day-old-2b6i)** - エージェントの「デプロイ完了」報告を鵜呑みにせず、サーバー側で実際の状態を確認すべきだと示す失敗談。
- **[4 money bugs that bite AI agents (and how I fixed them in PurseString)](https://dev.to/suseendaran_nair_88f71da1/4-money-bugs-that-bite-ai-agents-and-how-i-fixed-them-in-pursestring-2ofm)** - AI エージェントに支払いを任せる OSS の MCP サーバーで遭遇した、金額処理のバグ 4 種と対策。
- **[Windows won't let you own Win+Shift+S. So I hooked the keyboard in Python.](https://dev.to/akhourianmolkumar/windows-wont-let-you-own-winshifts-so-i-hooked-the-keyboard-in-python-248c)** - Windows が予約するショートカットを、Python の低レベルキーボードフックで奪って独自スクショツールを起動する実装。
- **[Ubuntu Core Desktop Is Coming in 27.04 - And It Kills sudo apt](https://dev.to/taqui/ubuntu-core-desktop-is-coming-in-2704-and-it-kills-sudo-apt-but-maybe-that-is-the-point-3dp1)** - Ubuntu 27.04 の Core Desktop でパッケージ管理の流儀が変わる可能性を考察する。

## TechCrunch
- **[US government warns of 'ongoing cyber threat' amid mass hacks of industrial retail and military freezers](https://techcrunch.com/2026/11/05/us-government-warns-of-ongoing-cyber-threat-amid-mass-hacks-of-industrial-retail-and-military-freezers/)** - 米政府が、産業用・小売用・軍用冷凍庫への大規模ハッキングについて共同声明を出した。食品・運輸・医療に影響が及ぶ。Ars Technica も冷蔵庫のハッキングを別角度で報じている。
- **[The Duo apps are coming, says Apple](https://techcrunch.com/2026/11/06/the-duo-apps-are-coming-says-apple/)** - Apple によると Duo 向けに最適化されたアプリは 10 万本に達し、毎日数千本が追加されている。対応状況はアプリ開発者に関わる。
- **[Physicl raises $10M to make the digital world real enough for robots](https://techcrunch.com/2026/11/06/physicl-raises-10m-to-make-the-digital-world-real-enough-for-robots/)** - EC の商品 3D 化パイプラインを転用して、ロボット学習の sim-to-real ギャップを埋めようとするスタートアップ。

## Ars Technica
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みの 4 つの脆弱性を連鎖させた攻撃で、未パッチの Plex サーバーにマルウェアが仕込まれている。
- **[ReactOS reaches major milestone with NTFS install support](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/)** - Windows 互換 OS の ReactOS が、新しいドライバーで NTFS へのインストールに対応した。
- **[FAA to finally ditch floppy disks in what it calls "historic" tech upgrade](https://arstechnica.com/tech-policy/2026/11/faa-to-finally-ditch-floppy-disks-in-what-it-calls-historic-tech-upgrade/)** - FAA が 2028 年末までに 435 拠点の情報表示システムからフロッピーを廃止する。レガシー基盤の更新の例。

## 注目トピック
AI エージェントを前提にした「運用の足場づくり」が目立つ。ISUCON 2026 を人間なしのエージェントで優勝した事例、`claude -p` の許可ツールの絞り込み、pre-commit での秘匿情報検査、「デプロイ完了」報告を実サーバーで検証する話はどれも、エージェントに任せるほど権限の制限と結果の検証が重要になることを示している。

インフラ・セキュリティでは、AWS のオリジン保護設計や Forwarded ヘッダーの過信、Plex の脆弱性連鎖、冷凍庫への大規模ハッキングなど、公開面と信頼境界の見直しが共通テーマ。AWS 側も Cognito の SLA 引き上げ、MSK の TLS 1.3 対応など、信頼性と暗号化の底上げが続いている。
