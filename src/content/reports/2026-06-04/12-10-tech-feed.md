---
title: "Tech Feed ダイジェスト（2026年6月4日）"
date: "2026-06-04T12:10"
category: "summary"
summary: "polyfill.io攻撃が現在も継続・tmux×AIエージェント・EKS 1.36 GA・Next.js 16 Middleware・Waymoバッテリー再利用"
tags: ["security", "ai", "aws", "frontend", "devtools", "quantum", "llm", "typescript", "claude-code", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[東芝や無印良品など、複数の企業で「不審なログイン画面」　各社が注意呼びかけ　「polyfill.io」経由か](https://www.itmedia.co.jp/news/articles/2606/04/news102.html)** ([103users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2606/04/news102.html)) - 2024年にサプライチェーン攻撃に悪用されたCDN「polyfill.io」のスクリプトを放置しているWebサイトで、現在も偽ログイン画面を表示する攻撃が継続している。大企業サイトでも対応漏れが発覚しており、CDNや外部スクリプトの棚卸しとSRIハッシュによる整合性チェックの重要性を改めて示す事例。

- **[使い方は覚えなくていいから tmux を入れろ](https://zenn.dev/nasubikun/articles/tmux-for-ai-agents)** ([203users](https://b.hatena.ne.jp/entry/s/zenn.dev/nasubikun/articles/tmux-for-ai-agents)) - Claude Code・OpenAI Codexなどのエージェントに長時間コマンドを実行させる際、バックグラウンド実行とセッション永続化という2つの課題をtmuxで一挙に解決できるという実践的な主張。「コマンドを覚えなくても、入れておくだけでエージェントとの協働効率が変わる」というメッセージがAIエージェント活用者に刺さっている。

- **[東京大学松尾・岩澤研究室の「大規模言語モデル講座2025基礎編」の講義資料が無料公開](https://forest.watch.impress.co.jp/docs/news/2114180.html)** ([189users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2114180.html)) - LLMの基礎から最先端技術までをカバーする東大松尾研の講義スライドがWebで無償公開された。アテンション機構・RLHF・マルチモーダルまで体系的に網羅された学術品質の資料で、社内勉強会や自学習のリソースとして活用できる。「2026年版」の申し込みも同時に開始されている。

- **[誰も教えてくれないテスト自動化が普及しない理由](https://zenn.dev/acntechjp/articles/20260602_test-automation)** ([280users](https://b.hatena.ne.jp/entry/s/zenn.dev/acntechjp/articles/20260602_test-automation)) - テスト自動化が技術的には可能なのに現場に定着しない理由を、組織・文化・インセンティブ構造から分析した論考。「テストを書くコストは今、メリットは未来」という時間割引の非対称性と、品質の可視化が評価に結びつかない組織設計の問題を指摘しており、ツールの話ではなく人と組織の話として共感を集めている。

- **[マイクロソフト、AIエージェントにWindowsアプリ開発の知識を与える「Windows Development Skills」を一般提供開始](https://www.publickey1.jp/blog/26/aiwindowswindows_development_skills.html)** ([110users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/aiwindowswindows_development_skills.html)) - Windows APIや開発ツールに関する専門知識をAIエージェントに付与するMicrosoftのスキルパッケージ「Windows Development Skills」がGA。CopilotやAzure AI AgentサービスからWindowsアプリ開発の文脈でドキュメント参照・コード生成が行えるようになり、Windows向け開発の生産性向上を狙った動き。

## Zenn

- **[Claude Managed Agentsで「まずエンジニアに聞こう」を「まずbotに聞こう」に変えた](https://zenn.dev/dinii/articles/d7be3acc43d868)** - 月約80件のエンジニア宛て社内質問（dev-help）をClaude Managed Agentsで自動応答するbot化を実現した事例。ドキュメント検索・コードベース参照・Slack投稿の連携をエージェントのツール定義として記述した構成を解説しており、社内ナレッジベースを使った実務エージェント実装の参考になる。

- **[RTX 4080でローカルLLM 7モデルを実測したら「16GB VRAMの壁」が見えた](https://zenn.dev/seeda_yuto/articles/ollama-vs-vllm-rtx4080-benchmark)** - RTX 4080（16GB VRAM）環境でOllamaとvLLMの両バックエンドを使い7種のモデルを性能計測した実験。「gpt-oss:20b + Ollamaが16GBの最適解」という結論と、20Bを超えるモデルではVRAM超過でスワップが発生し実用速度を下回る実態を数値で示しており、ローカルLLM環境構築時の機材選定に直結するデータ。

- **[Polyfill.ioを放置したサイトで不審なダイアログが表示されている件](https://zenn.dev/roboin/articles/43a205f1249889)** - 2024年のpolyfill.ioサプライチェーン攻撃後もスクリプトタグを放置しているサイトで現在も偽ログインポップアップが表示され続けていることを、実際の挙動キャプチャとソース解析で詳述した記事。攻撃が「現在進行形」であることを技術的に確認できる一次情報として価値が高い。

- **[セマンティックな型宣言に意味はない](https://zenn.dev/toms74209200/articles/semantic-type-is-meaningless)** - TypeScriptにおける `type UserId = string` のような「意味的な別名型」は構造的部分型のため実際の型安全性を担保しないという問題を論じた記事。`interface` ではなく `type` によるエイリアスがブランド型（Branded Types）を使わない限り意味をなさない理由を、型システムの動作原理から説明しており、TypeScriptの型設計を再考するきっかけを提供している。

- **[Cloudflareは「AWSの代わり」になるのか？ ── インフラ経験者のための技術選定ガイド](https://zenn.dev/fitness_densuke/articles/2026-06-01-cloudflare-vs-aws-selection-guide)** - VPC・Lambda・S3・RDSなどAWSの主要コンポーネントに対応するCloudflare Workersの各サービスを対比し、どのユースケースで乗り換えが合理的かを解説した比較記事。エッジコンピューティング特化型のCloudflareが得意とするレイテンシ最小化ワークロードと、AWSのほうが依然優位なステートフルなバックエンドを整理しており、インフラ設計の意思決定に使えるガイドとなっている。

## Qiita

- **[SPAのトークン、localStorageに置いていい? OWASP ASVS 5.0で変わった答え](https://qiita.com/ntaka329/items/bf692f00526de0795160)** - フロントエンドのアクセストークン保管場所の定番論争に、OWASP ASVS 5.0の更新が新たな指針をもたらしたことを解説した記事。XSS対策が適切に施されているならlocalStorageも許容される旨の変更がなされており、「localStorageは絶対NG」という旧来の通説が条件付きで見直されたことを実際のOWASP文書と照合して確認している。

- **[Codex + Oracle DB SkillsでOracle Databaseの実行計画レビューをしてみた](https://qiita.com/shirok/items/45e2c49630fd002cf493)** - OpenAIのCodixとOracle公式の「Oracle DB Skills」プラグインを組み合わせ、SQLの実行計画（EXPLAIN PLAN）を自然言語で解説・改善提案させる実験記事。インデックス選択の誤りやフルスキャンの発生箇所をエージェントが特定し具体的な書き換え案を出力した事例で、DBAの省力化に向けたAI活用の具体的なワークフローを示している。

- **[俺的 Book of News キーノート編: Microsoft Build 2026 は「Agent を動かす層」が全部そろった回だった](https://qiita.com/aktsmm/items/4cc75c8bf629edfd0413)** - Build 2026の発表をAIエージェントの実行基盤という一貫した視点で分析した記事。Project Solara（エージェント向けAndroid OS）・Windows Development Skills・Scout（個人エージェント）・Azure AgentCoreという4レイヤーが「エージェントのOS・スキル・インターフェース・インフラ」としてそろったと整理しており、Microsoftの戦略的意図を鮮明に読み解いている。

## AWS 新着

- **[Amazon EKS and Amazon EKS Distro now supports Kubernetes version 1.36](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-distro-kubernetes-version-1-36)** (2026-06-02) - EKSとEKS DistroでKubernetes 1.36のサポートが開始された。1.36ではDynamic Resource Allocation（DRA）の安定化・Job API改善・kubectlのinteractive deleteコマンド追加などが含まれており、GPUやML加速チップのリソース管理をより柔軟に記述できるDRAの安定化はLLMワークロードのオーケストレーション改善に直接寄与する。

- **[Amazon ElastiCache for Valkey now supports durability](https://aws.amazon.com/about-aws/whats-new/2026/06/durability-amazon-elasticache)** (2026-06-02) - ElastiCacheのValkey（Redisのオープンソースfork）がデータ永続化をサポートした。マイクロ秒レイテンシのインメモリ性能を保ちつつ障害時のデータ消失を防げるようになり、「高速だが揮発性」という従来のElastiCacheの制約を超えたユースケース──セッション管理・リアルタイムランキング・在庫カウンターなど──での採用が広がる見通し。

- **[Amazon SageMaker Unified Studio now supports notebook scheduling](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-unified-studio/)** (2026-06-03) - SageMaker Unified StudioでJupyterノートブックをそのままcronスケジュール実行・パラメータ化・パイプライン化できるようになった。データ前処理・モデル評価・レポート生成などをノートブック単位で定期実行する運用が、追加のオーケストレーション基盤なしに実現でき、MLエンジニアの日常的な自動化コストが下がる。

- **[AWS IoT Device Management adds MQTT session data to connectivity status API](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-iot-device-management-mqtt/)** (2026-06-03) - IoT Device ManagementのConnectivity Status APIにMQTTセッションデータが追加された。デバイスの接続状態に加え、直近のセッション継続時間・切断理由・再接続回数といった詳細情報をAPIで取得できるようになり、IoTフリートの接続品質モニタリングと障害原因の特定が容易になる。

- **[Amazon RDS for Db2 launches support for IBM Db2 v12.1 and Db2 Community Edition](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-rds-db2-v12-community-edition)** (2026-06-03) - Amazon RDS for Db2がIBM Db2 v12.1をサポートし、同時にDb2 Community Edition（無償版）でもRDSの利用が可能になった。Db2 v12.1のAI/ML向けSQL拡張と無償エディション対応により、既存のDb2オンプレワークロードのAWSへの移行ハードルが大幅に下がっている。

## Lobsters

- **[My Software North Star](https://kristoff.it/blog/north-star/)** (49pt) - Zig言語コントリビュータのKristoff氏が、自身がソフトウェアを書く際に一貫して目指す「北極星」──「理解可能なシステムを作ること」──を論じたエッセイ。抽象化・ツール・プロセスはすべて理解可能性を高めるためにあるという一点に帰着させる思想は、AI生成コードが氾濫し「動くが理解できないコード」が増える現代への静かなカウンターとして読める。

- **[Safe Made Easy Pt.1: Single Ownership is (Not) Optional](https://ergeysay.github.io/safe-made-easy-pt1.html)** (23pt) - Rustの所有権（Single Ownership）モデルをC/C++開発者向けに「安全性のコスト」ではなく「デフォルトで安全になるための設計」として再解説したシリーズ記事の第1回。メモリ安全性の問題がなぜコンパイル時に検出できるのかを直感的なモデルで説明しており、Rustへの移行を検討している既存システム開発者への入口として評価が高い。

- **[A Post-Quantum Future for Let's Encrypt](https://letsencrypt.org/2026/06/03/pq-certs.html)** (24pt) - Let's EncryptがML-KEM（Kyber）・ML-DSA（Dilithium）を用いた耐量子暗号（PQC）証明書の発行ロードマップを公開した。証明書サイズの増大（現行の数倍）に対し圧縮や有効期間短縮で対処する方針も含まれており、WebのPKI全体を量子コンピュータ時代に向けて移行する取り組みが実装フェーズに入ったことを示す重要な発表。

- **[Full Disclosure: 1-Click GitHub Token Stealing via a VSCode Bug](https://blog.ammaraskar.com/github-token-stealing/)** (66pt) - VSCodeの拡張機能APIを悪用し、悪意ある拡張機能が1クリックでGitHub認証トークンを窃取できる脆弱性のフルディスクロージャー。ユーザー操作なしに認証情報を奪えるチェーンを詳述しており、MarketPlaceから無審査で配布されている拡張機能のリスクを実証した研究として注目されている。

## dev.to

- **[I Spent 48 Hours Debugging Multi-Turn LLM Memory Loss—Then Playwright + Pytest Locked It Down](https://dev.to/_eb7f2a654e97a60ae9f96e/i-spent-48-hours-debugging-multi-turn-llm-memory-loss-then-playwright-pytest-locked-it-down-1k2f)** - マルチターン対話型LLMチャットボットが「前の発言を覚えていない」バグを48時間かけて調査し、Playwright＋pytestで再現テストを構築した実践記録。セッションIDの不一致によるコンテキストリセットが原因だったと特定するまでの調査プロセスと、エンドツーエンドのシナリオテストで同種の問題を早期検出する仕組みを解説している。

- **[How I Cut My LLM API Bill by 90%: A Practical Guide to Multi-Provider Routing](https://dev.to/kaithorne/how-i-cut-my-llm-api-bill-by-90-a-practical-guide-to-multi-provider-routing-2b7n)** - 月$120のLLM API費用を$12に削減したマルチプロバイダールーティングの実装ガイド。タスクの複雑度に応じてHaiku・GPT-4o Mini・Gemini Flashなど低コストモデルに自動振り分けし、高精度が必要な場合のみ高性能モデルへフォールバックする構成を詳述。コスト最適化の定石として参考になる実践知。

- **[Next.js 16 Middleware: authorization patterns that scale and the ones that cause race conditions](https://dev.to/jtorchia/nextjs-16-middleware-authorization-patterns-that-scale-and-the-ones-that-cause-race-conditions-4pfk)** - Next.js 16のMiddlewareで認可を実装する際に起きやすいレースコンディションのパターンと、スケールする認可設計の実装例を解説した記事。Edge Runtimeで動作するMiddlewareの制約（外部DBアクセス不可など）を踏まえたJWTベース認可と、セッションキャッシュを利用したパターンの使い分けを整理している。

- **[S3 as a disk for agents: geesefs vs s3fs, measured](https://dev.to/pratikbin/s3-as-a-disk-for-agents-geesefs-vs-s3fs-measured-56a3)** - AIエージェントのワークスペースとしてS3バケットをFUSEマウントする用途でgeesesfsとs3fsのスループット・レイテンシ・整合性を実測比較した記事。geesesfsが大容量読み書きで圧倒的に優位な一方、s3fsは設定が簡単で小ファイル操作に強い傾向を示しており、エージェントがS3をローカルファイルシステムとして扱うインフラ設計の参考データとなる。

## TechCrunch

- **[Ultrahuman says hackers accessed customers' wellness data via internal tool](https://techcrunch.com/2026/06/03/ultrahuman-says-hackers-accessed-customers-wellness-data-via-internal-tool/)** - ウェアラブルリング「Ultrahuman Ring」のメーカーが、マルウェア感染した従業員PCから内部ツールの認証情報が盗まれ、顧客の健康データ（睡眠・心拍・活動量）にアクセスされたと発表。健康系ウェアラブルが管理する生体データの機密性と、内部ツールへのアクセス制御の脆弱性が改めて問われる事例。

- **[Instagram is alerting users who were targeted by hackers during AI chatbot attacks](https://techcrunch.com/2026/06/03/instagram-is-alerting-users-who-were-targeted-by-hackers-during-ai-chatbot-attacks/)** - Metaが修正済みと発表した後もInstagramのAIチャットサポートbotを通じてアカウントを乗っ取られるケースが継続していたことが発覚。Instagramがターゲットになったユーザーへの通知を開始した。AI対話システムが認証フローと接続される際の権限スコープ管理の難しさを示す事例で、AIチャットbotのセキュリティ設計の重要性を示している。

- **[Amazon will show AI product images when you search for some reason](https://techcrunch.com/2026/06/03/amazon-will-show-ai-product-images-when-you-search-for-some-reason/)** - Amazonが検索クエリに対してAI生成の「理想的な商品イメージ」を一致する実在商品と並べて表示する機能を導入することを発表。ユーザーが探しているものを「AI画像で示す」アプローチは、商品カタログの充実度を補完しつつ購買意図の明確化を図るものだが、実在商品との混同リスクやフィルターバブルへの懸念も指摘されている。

- **[Benchmark raises its first-ever growth fund as part of $2B capital raise](https://techcrunch.com/2026/06/03/benchmark-raises-its-first-ever-growth-fund-as-part-of-2b-capital-raise/)** - 20年以上にわたりファンド規模を約4.25億ドルに抑えてきた伝説的VCのBenchmarkが初のグロースファンドを含む総額20億ドルの資金調達を実施。少人数・小規模ファンドにこだわってきた同社の方針転換は、AI時代のスタートアップへの後期投資需要の高まりと、大型調達ラウンドへの対応を迫られた市場環境の変化を象徴している。

## Ars Technica

- **[Used Waymo robotaxi batteries become backup storage for power grids](https://arstechnica.com/science/2026/06/used-waymo-robotaxi-batteries-become-backup-storage-for-power-grids/)** (2026-06-04) - 走行可能距離が規定値を下回ったWaymoのロボタクシー用バッテリーを電力グリッドのバックアップストレージとして転用するプロジェクトが始動した。EVバッテリーのセカンドライフ活用は製造コストの一部を回収しつつ再生可能エネルギーの蓄電容量を増やす双方向のメリットがあり、EVフリートと電力インフラの統合的な循環モデルとして注目される。

- **[Microsoft, Atom Computing, EeroQ update their quantum computing progress](https://arstechnica.com/science/2026/06/microsoft-atom-computing-eeroq-update-their-quantum-computing-progress/)** (2026-06-03) - Microsoft（トポロジカル量子ビット）・Atom Computing（中性原子方式）・EeroQ（ヘリウム3電子方式）が各々の量子コンピューティング進捗を発表した。Microsoftはトポロジカルキュービットの論理誤り率改善を報告しており、複数のアーキテクチャが並走するなか誤り訂正能力が実用的な量子優位性への鍵となることが改めて確認されている。

- **[Microsoft's Project Solara is an Android OS designed for agents instead of apps](https://arstechnica.com/gadgets/2026/06/microsofts-project-solara-is-an-android-os-designed-for-agents-instead-of-apps/)** (2026-06-02) - Microsoftが「アプリを起動するのではなくエージェントが直接ハードウェアリソースを利用する」ことを想定して設計したAndroidベースのOS「Project Solara」を発表した。従来のAndroidがアプリのUIを人間が操作することを前提とする設計であるのに対し、Solaraはエージェントがカメラ・マイク・センサーをAPI経由で直接扱えることに最適化されており、エージェント時代のモバイルOSの設計思想の転換点となりうる。

- **[Mathematicians warn of AI threats to profession as industry encroaches](https://arstechnica.com/tech-policy/2026/06/mathematicians-warn-of-ai-threats-to-profession-as-industry-encroaches/)** (2026-06-02) - 数学者コミュニティが、AIが証明生成・定理探索に参入することで純粋数学の研究職が脅威にさらされると警告する声明を発表した。コーディング分野と同様に「AIが補助」から「AIが代替」へのシフトが起きつつある領域として、知的作業の自動化が学術・研究職に与える影響の最前線として議論を呼んでいる。

## 注目トピック

本日の横断的テーマとして最も目立つのは**サプライチェーン攻撃の長期継続性**だ。2024年に発覚したpolyfill.ioへの攻撃は2年以上経過した現在も被害を拡大し続けており、東芝・無印良品を含む複数の著名企業サイトで不審なログイン画面が表示されているという現実は衝撃的だ。外部CDNスクリプトの棚卸しを「一度対応すれば終わり」と考えていた組織の見直しが急務であり、SRI（Subresource Integrity）ハッシュの導入と定期的な外部依存関係監査が開発プロセスの標準として定着することが求められる。Ultrahuman・Instagram AIチャットbotを通じたアカウント侵害事例と合わせ、「既に修正済み」「既に対応済み」と思っていたインシデントが実は継続・再発しているという事態が複数のソースで報告されており、インシデント対応の「完了」基準の再定義が業界全体で必要な局面に来ている。

もう一つの重要テーマは**AIエージェント時代のOS・実行環境の再設計**だ。Microsoft Project SolaraがAndroidをエージェント向けに設計し直したのと同様に、Waymoバッテリーの電力グリッド転用・EKS 1.36のDRA安定化・ElastiCache Valkeyの永続化対応など、「人間が直接操作する」前提で設計されてきたインフラ各層がエージェントと自動化システムのニーズに合わせて順次更新されていく流れが鮮明になっている。tmuxの「使い方を覚えなくていい、入れておくだけでエージェントと協働できる」というメッセージはこの変化の象徴で、開発ツールのユーザーが人間からエージェントに移行する速度が加速する2026年の現状を端的に言い表している。
