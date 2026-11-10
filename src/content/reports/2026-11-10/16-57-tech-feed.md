---
title: "Tech Feed ダイジェスト（2026年11月11日）"
date: "2026-11-10T16:57"
category: "summary"
summary: "Fable 5.2 プロンプト指針、ソフトバンクのAI脆弱性診断、CloudWatch PromQL アラーム、GoogleのTPU新チップ、N-able ゼロデイ公開など"
tags: ["ai", "security", "aws", "claude", "infrastructure", "postgres"]
---

## はてなブックマーク (テクノロジー)
- **[Claude Codeで最近使っているTips【2026/11】](https://zenn.dev/oikon/articles/claude-code-recipe)** ([406users](https://b.hatena.ne.jp/entry/s/zenn.dev/oikon/articles/claude-code-recipe)) - Claude Code の書籍を2冊出した著者による、2026年11月時点の実用 Tips 集。日々の運用で効く設定や使い方の更新点が整理されている。
- **[Claude Fable 5.2へのプロンプト](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prompting-claude-fable-5-2)** ([291users](https://b.hatena.ne.jp/entry/s/platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prompting-claude-fable-5-2)) - Anthropic 公式の Fable 5.2 向けプロンプト設計ガイド。旧モデル向けプロンプトの見直し観点を確認できる一次情報。同じ件を Qiita も実測ベースで別角度から報じている。
- **[ソフトバンク社長「自社システムをGPT-6 Astraで診断したら3.5万件の追加脆弱性を発見」と明かす](https://japan.cnet.com/article/35254620/)** ([172users](https://b.hatena.ne.jp/entry/s/japan.cnet.com/article/35254620/)) - AI による脆弱性探索が大規模システムで数万件規模の追加発見をもたらした事例。修正（パッチ適用）側の負荷が新たなボトルネックになりつつあることを示す。
- **[既存サービスの ECS タスクを read-only root filesystem & non-root 構成に作り変える](https://tech.mntsq.co.jp/entry/2026/11/10/113203)** ([38users](https://b.hatena.ne.jp/entry/s/tech.mntsq.co.jp/entry/2026/11/10/113203)) - 稼働中の ECS サービスにコンテナ堅牢化（読み取り専用ルートFS・非root実行）を後付けする際の手順と、書き込み先が必要なパスの洗い出しなど実務上の落とし穴を扱う。
- **[MCP を組み込んだアプリを手元で複数動かすための構成パターン](https://engineering.nature.global/entry/2026/11/mcp-architecture-patterns)** ([23users](https://b.hatena.ne.jp/entry/s/engineering.nature.global/entry/2026/11/mcp-architecture-patterns)) - MCP 対応アプリをローカルで複数同時に動かす際の構成パターンを整理した Nature のエンジニアリングブログ。

## Zenn
- **[AI ネイティブなデータ分析基盤を作った話（後編）](https://zenn.dev/pksha/articles/laplace-build-guide)** - PKSHA の SRE による分析基盤 Laplace の設計編。技術スタック紹介ではなく「何を守るためにどこへ境界を引いたか」に焦点を当てている。
- **[AIでテストカバレッジを23%から84%に引き上げた方法](https://zenn.dev/litalico/articles/20261029-test-with-ai)** - 1年半の取り組みを、CI・テスト文化の土台づくりから AI 活用（プロンプトとスキル、うまくいかなかった点）まで時系列で解説。
- **[GitHub rulesetのON/OFFで「マージ禁止期間」を作る](https://zenn.dev/yesodco/articles/yesod-github-ruleset-merge-freeze)** - リリース判定期間中に develop へのマージを止めるため、ruleset の有効/無効を切り替えて運用する実践例。
- **[脆弱性問題を解決するためにRustに移行するべきなのか？](https://zenn.dev/garasubo/articles/72340052cdd871)** - PHP2Shell を契機に出た「メモリ安全言語へ移行すべき」という意見を、現実的な観点から検証する考察記事。
- **[退屈なCoding AgentはMuseにやらせよう](https://zenn.dev/watany/articles/342b9815dd0553)** - Meta のパーソナルAIエージェント Muse を Claude や Codex との比較で語る使用感レポート。触ってみないと魅力が伝わらない点を掘り下げている。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[ひとりで作るOSSを、チームの基準でレビューする（Codex・Claude・CodeRabbit）](https://qiita.com/figueiredoluiz/items/1a043190d8f00d2ebda6)** - Rust 製のテスト重複検出ツール（vitest-dedup / cuke-dedup）を個人メンテする中で、複数の AI レビュアーを組み合わせてチーム水準のレビューを実現する運用を紹介。
- **[Reactのアンマウントはいつ起きる？位置と種類で理解する](https://qiita.com/shun123/items/586906ea13bc03bfcea6)** - 「props が変わったらアンマウントされるのか」といった疑問を、ツリー上の位置と要素の種類から整理する React の基礎解説。
- **[自分専用pre-commit hook風なことを簡単にやるtips](https://qiita.com/J-T_ky2g/items/b85911f0364f33459019)** - チーム全員に pre-commit hook を強制せず、push 時の静的解析忘れをエイリアスで防ぐ個人向けの小技。
- **[【AWS】RAG小、新機能全マシ、IAMカタメ、予算スクナメで](https://qiita.com/kikuziro/items/eb28e7084445ff060783)** - DynamoDB のベクトル検索など今年登場した RAG 向けアップデート6件を組み合わせ、検索システムを試作した記録。

## AWS 新着
- **[CloudWatch PromQL alarms now support EC2 and Application Auto Scaling](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-alarms-autoscaling-group-actions)** (2026-11-10) - PromQL ベースの CloudWatch アラームから EC2 Auto Scaling / Application Auto Scaling のステップ・シンプルスケーリングを直接起動できるようになった。Prometheus 流のメトリクス式でスケール制御が可能に。
- **[Amazon CloudWatch Logs announces account-level retention policies](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)** (2026-11-09) - アカウント単位の保持期間ポリシーで、全て、または一部のロググループの保存期間を一括設定できる。設定漏れによる無期限保持コストの抑制に有効。
- **[Amazon DocumentDB Serverless now provides up to 35% higher throughput](https://aws.amazon.com/about-aws/whats-new/2026/11/documentdb-serverless-platform-version-4/)** (2026-11-09) - プラットフォームバージョン4で最大35%スループットが向上。
- **[Amazon Redshift expands SUPER data type to store strings up to 16 million bytes](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-redshift-expands-super-to-16-million-bytes/)** (2026-11-06) - SUPER 型内の文字列が最大1,600万バイトまで格納可能に（データベースパラメータでオプトイン）。大きな半構造化データの取り込み制約が緩和される。
- **[Amazon OpenSearch Service optimized engine now supports agent traces](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-support-traces)** (2026-11-05) - OpenTelemetry を含むエージェントのトレースをログと同じ場所に集約し、リクエストやエージェントの動きを追跡できる。

## Lobsters
- **[Terminal2Shell: Critical flaw grants instant shell access on every major OS](https://terminal2shell.com/)** (131pt) - タグは satire。「ターミナルを開けばシェルが使える」という脆弱性報告のパロディで、過剰な脆弱性名の付け方への皮肉と思われる。
- **[You should try Gleam](https://nchagnet.eu/blog/you-should-try-gleam)** (34pt) - 型安全な関数型言語 Gleam を勧める紹介記事。
- **[Open Graph images with Astro and Typst](https://eaj.no/posts/open-graph-images-with-typst/)** (24pt) - 組版ツール Typst を使って Astro サイトの OGP 画像をビルド時に生成する手法。本サイトと同じ Astro 構成で参考になる。
- **[The hardest tarball](https://stoppels.ch/2026/11/07/the-hardest-tarball.html)** (22pt) - tarball 作成の難しさを掘り下げる Unix 系の技術記事。
- **[Building a networking switch ASIC chip](https://essenceia.github.io/projects/expresso/)** (19pt) - ネットワークスイッチ ASIC を自作するハードウェアプロジェクトの記録。

## dev.to
- **[Resizing a managed Postgres database while writing to it](https://dev.to/remdore/resizing-a-managed-postgres-database-while-writing-to-it-1g2n)** - 書き込みが継続する状態でマネージド Postgres をリサイズする際の挙動と注意点を検証した記事。
- **[UUIDv4 Is Not Free: Why Random Primary Keys Are Silently Crushing Your Write Performance](https://dev.to/johnnylemonny/uuidv4-is-not-free-why-random-primary-keys-are-silently-crushing-your-write-performance-2ea8)** - ランダムな UUIDv4 を主キーにするとインデックスの局所性が失われ書き込み性能が落ちる問題を解説。時系列順序を持つ ID への切り替えが論点。
- **[Node.js 26's Map.getOrInsertComputed is slower than the get-and-set it replaces](https://dev.to/alexgeorgiev17/nodejs-26s-mapgetorinsertcomputed-is-slower-than-the-get-and-set-it-replaces-2i35)** - 新 API の `getOrInsertComputed` が従来の get→set より遅いというベンチマーク結果の報告。
- **[Your Agent's Config Is a Dependency With No Lockfile](https://dev.to/debashish_ghosal/your-agents-config-is-a-dependency-with-no-lockfile-4j6l)** - AI エージェントの設定（プロンプトやルール類）はバージョン固定されない依存関係であり、セキュリティ・再現性のリスクになると指摘。
- **[Stop Asking LLMs to Do Math: Client-Side Functions in Flutter GenUI with bloc_signals](https://dev.to/gde/stop-asking-llms-to-do-math-client-side-functions-in-flutter-genui-with-blocsignals-23bh)** - 計算を LLM に任せず、クライアント側関数として実行するアーキテクチャを Flutter GenUI で示す。

## TechCrunch
- **[Google broadens its AI hardware portfolio with two new specialized chips](https://techcrunch.com/2026/11/10/google-broadens-its-ai-hardware-portfolio-with-two-new-specialized-chips/)** - 機密モデル学習向けとメモリ容量重視の2種の新 TPU を発表。AI 向けチップがユースケース別に分化している。
- **[N-able takes its remote access service offline after researcher publishes dozens of zero-day bugs](https://techcrunch.com/2026/11/10/n-able-takes-its-remote-access-service-offline-after-researcher-publishes-dozens-of-zero-day-bugs/)** - 研究者が多数のゼロデイを公開し、N-able はリモートアクセスサービスを停止。セルフホスト顧客にもサーバー停止を要請する事態となった。
- **[Adobe brings AI agents and new creative tools to Photoshop, Premiere, and Firefly](https://techcrunch.com/2026/11/10/adobe-adds-more-ai-to-its-products-and-launches-an-mcp/)** - Adobe が AI エージェント機能と MCP を投入。Firefly には Figma に対抗するプロトタイプビルダーも加わる。
- **[Cyberattacks threaten to make open-source AI a little less open, Hugging Face exec warns](https://techcrunch.com/2026/11/10/cyberattacks-threaten-to-make-open-source-ai-a-little-less-open-hugging-face-exec-warns/)** - オープン AI プラットフォームへの攻撃増加が、セキュリティ制限の強化と公開性の低下につながりかねないと Hugging Face の幹部が警告。
- **[After challenging Google's Android with Cyanogen, its co-founder takes aim at Windows for AI era](https://techcrunch.com/2026/11/10/after-challenging-googles-android-with-cyanogen-its-co-founder-takes-aim-at-windows-for-ai-era/)** - Cyanogen 共同創業者が、AI モデルやエージェントを多用するユーザー向けの無料 Windows 代替 OS「Kora」を準備中。

## Ars Technica
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みの Plex Media Server の脆弱性がマルウェア設置に悪用されている。早急なアップデートが必要。
- **[DeepMind reveals Gemini Robotics 2.5 and open safety benchmark "ASIMOV-jailbreak"](https://arstechnica.com/google/2026/11/deepmind-reveals-gemini-robotics-2-5-and-open-safety-benchmark-asimov-jailbreak/)** - ロボット制御向けモデルの新版と、ジェイルブレイク耐性を測るオープンな安全性ベンチマークを公開。
- **[ReactOS reaches major milestone with NTFS install support](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/)** - Windows 互換 OS の ReactOS が NTFS 上へのインストールに対応し、実用面で大きく前進。
- **[British soldier ignored order to pull his SIM card, then got blackmailed](https://arstechnica.com/security/2026/11/british-soldier-ignored-order-to-pull-his-sim-card-then-got-blackmailed/)** - SIM 抜去の指示を無視した兵士が脅迫された事例。モバイル端末の運用管理が攻撃経路になる教訓。

## 注目トピック
AI とセキュリティの交差が今回も目立った。ソフトバンクが GPT-6 Astra で自社システムを診断して3.5万件の追加脆弱性を見つけた話や、N-able のゼロデイ大量公開、Plex の悪用事例は、脆弱性の発見速度が上がる一方で、修正と配布が追いつかない構図を示している。Hugging Face 幹部の警告も、攻撃増加が OSS AI の公開性に影響しうることを指摘している。

開発現場では、Fable 5.2 の公式プロンプトガイドや Claude Code の運用 Tips、エージェント設定のロックファイル問題など、AI エージェントを前提にした運用の整備が進んでいる。インフラ面では CloudWatch の PromQL アラームによるオートスケールや、Google の用途別 TPU が、観測とスケーリング、AI 計算基盤の多様化を象徴している。
