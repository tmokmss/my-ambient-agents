---
title: "Tech Feed ダイジェスト（2026年4月5日）"
date: "2026-04-05T09:51"
category: "summary"
summary: "Linux 7.0でPostgreSQL性能半減・Vibe Codingのバグ密度問題・RISC-V CFI拡張・DGX SparkでGemma 4ローカル実行など注目トピックを網羅"
tags: ["linux", "postgresql", "ai", "vibe-coding", "aws", "rag", "security", "rust", "frontend", "ev", "devops", "space"]
---

## はてなブックマーク (テクノロジー)

- **[Linux 7.0でPostgreSQL性能半減、修正困難か](https://joho-todai.com/linux-7-postgresql-performance-halved/)** ([263users](https://b.hatena.ne.jp/entry/s/joho-todai.com/linux-7-postgresql-performance-halved/)) - Linux 7.0で導入されたスケジューラの変更がPostgreSQLのクエリ処理性能を最大半減させることが判明。カーネル側とPG側どちらで修正すべきかが定まらず、アップグレードを検討するDB管理者に注意が必要な状況だ。

- **[ハーネスエンジニアリング、全員が違うことを言っている — 5社の解釈を並べてみた](https://zenn.dev/kenimo49/articles/harness-engineering-interpretations-2026)** ([162users](https://b.hatena.ne.jp/entry/s/zenn.dev/kenimo49/articles/harness-engineering-interpretations-2026)) - 「ハーネスエンジニアリング」の定義を5社の実践例から比較した記事。AIによるコード生成を効果的に制御・検証するための設計思想として各社解釈が異なり、業界横断の共通定義がいまだ確立していないことを浮き彫りにしている。

- **[YAMLの変更点を見落とさない！diffより強力なYAML差分確認ツール『dyff』のすすめ](https://tech-lab.sios.jp/archives/52303)** ([162users](https://b.hatena.ne.jp/entry/s/tech-lab.sios.jp/archives/52303)) - 通常の`diff`ではキー順序変更や構造的な等価変更が差分として表れてしまう問題を解決するCLIツール「dyff」を紹介。KubernetesのマニフェストやHelmチャートの差分確認に特に有効で、CI/CDパイプラインへの組み込み例も示されている。

- **[Microsoftがエンジニア全員にストップウォッチを配っていた時代の教訓](https://joho-todai.com/microsoft-engineers-stopwatch-lessons-productivity-era/)** ([149users](https://b.hatena.ne.jp/entry/s/joho-todai.com/microsoft-engineers-stopwatch-lessons-productivity-era/)) - Windows開発黎明期、Microsoftが生産性向上のためにエンジニア全員にストップウォッチを支給し作業時間を記録させていた時代の回顧録。測定文化の功罪と現代のAI生産性ツールが置き換えたものとを対比しており、ソフトウェア組織論として読み応えがある。

- **[Ubuntu 26.04 LTSの最低メモリ要件が6GBに引き上げ。4GBからの変更は8年ぶり](https://gazlog.com/entry/ubuntu-26-04-lts-memory-up/)** ([50users](https://b.hatena.ne.jp/entry/s/gazlog.com/entry/ubuntu-26-04-lts-memory-up/)) - 次期LTSであるUbuntu 26.04の最低RAM要件が4GBから6GBに変更される。2018年以来初の引き上げで、Wayland移行・systemd拡張・スナップ対応の累積による消費増大が背景にあり、古いハードウェアでのサーバー運用に影響が出る可能性がある。

## Zenn

- **[AIが書いたコードをレビューするな](https://zenn.dev/a_1ro/articles/4b0333e9d7b8f9)** - InfoQの調査を引用しつつ、AIが生成したコードをエンジニアが一行ずつレビューすることは「時間の無駄」であり、テストカバレッジ・型チェック・静的解析を通じた自動検証に移行すべきという主張。AIコード品質の担保をレビューではなくツールチェーンに委ねる新しい開発思想を提唱している。

- **[AIエージェント開発の新標準「ADLC」を読み解く — IBM×Anthropicのガイドへの共感と本番運用からの実践的フィードバック](https://zenn.dev/dxclab/articles/9f015ee80cd809)** - IBMとAnthropicが共同で策定したエージェント開発ライフサイクル（ADLC）の要点を整理し、PoC段階と本番運用段階でギャップが生じるポイントを実経験から補足した記事。監視・ロールバック・人間介入ポイントの設計が特に重要と指摘している。

- **[GitHub Copilot CLI の /fleet が面白い](https://zenn.dev/poipoionigiri/articles/73eb2b803b10d7)** - GitHub Copilot CLIの`/fleet`コマンドが複数ファイル・複数エンドポイントへの並列操作を自然言語で指示できる機能であることを実演。IDEに縛られないCLIベースのコードエディット自動化として、CI/CDスクリプト作成や大規模リファクタリングの効率化が期待できる。

- **[図面解析におけるマルチモーダル Graph RAG の有効性検証とデモアプリ開発](https://zenn.dev/exwzd/articles/20260324_graphrag_vs_standardrag)** - 建設図面のような構造化された視覚情報に対して、Standard RAGとGraph RAGの精度を実測比較した研究レポート。Graph RAGがエンティティ間の空間関係を保持できるため、複雑な図面クエリで標準RAGを大きく上回ることが示されている。

- **[DGX SparkでGemma 4 31Bをローカル動作させ、OpenClawから使う](https://zenn.dev/beef_and_rice/articles/cdb8b3f77f0704)** - NVIDIAのDGX Spark（デスクトップ向け高密度GPUユニット）でGemma 4 31Bをフル精度でローカル実行し、OpenClawエージェントのバックエンドとして利用するセットアップ手順を解説。クラウドLLM APIなしでエンタープライズ品質のエージェント環境を構築する実践例として参考になる。

## Qiita

- **[バイブコーディングの光と影 — 工数87%削減の裏にあるバグ密度1.7倍問題](https://qiita.com/nogataka/items/e619153909786c432314)** - AIコーディングでの工数削減効果を定量化する一方、同じコードベースのバグ密度が通常開発比1.7倍になっているというデータを報告。スピードと品質のトレードオフを数字で示した記事で、ヴァイブコーディング導入の判断軸として重要な知見を提供している。

- **[Googleが提唱したDESIGN.mdとは？ Claude CodeとDESIGN.mdでデモサイトをいくつか作ってみた](https://qiita.com/miruky/items/a6312c14e6352376ec00)** - Googleが提案する設計書フォーマット「DESIGN.md」の概要を解説し、Claude Codeと組み合わせてデモサイトを作る実験を報告。仕様ドキュメントをリポジトリに含めることでAIとの協業品質が向上するという考え方は、AIエージェント開発の標準プロセスとして注目されている。

- **[Claude Code向けの著名なSkillsを合成して「Super Skills」を作ってみた](https://qiita.com/takurot/items/98472032a3f4535c66b2)** - 複数のClaude Code Skillsを組み合わせて単一の「スーパースキル」にまとめる実験記録。依存するスキル同士の呼び出し順序や引数の受け渡しパターンを整理し、スキルコンポジションという新たな開発スタイルの可能性を示した実践的な内容だ。

- **[新登場の OCI Enterprise AI Agents で MCPを使ったエージェントを作ろう！](https://qiita.com/yuji-arakawa/items/d97ded3a9321aaeeb042)** - Oracle Cloud Infrastructure（OCI）がリリースしたエンタープライズ向けAIエージェントサービスでModel Context Protocol（MCP）を活用するエージェントを構築するハンズオン記事。AWSやAzure以外のクラウドでもMCPエコシステムが整備されつつあることを示す事例だ。

- **[FPGAの入出力タイミング制約を可視化するシミュレータを作った](https://qiita.com/MameMame777/items/9d6e19d36a3f49dc0dae)** - FPGAのI/Oタイミング解析は制約ファイル（.xdc）を手書きするため直感的でないことが多いが、その制約を視覚的に確認できるWebシミュレータをゼロから実装した記事。HDL開発者の試行錯誤を大幅に削減する自作ツールとして、ハードウェア系開発者から注目されている。

## AWS 新着

- **[AWS Glue Schema Registry is now available in three more AWS regions](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-gsr-3-more-regions/)** (2026-04-03) - サーバーレスなスキーマ管理サービス「AWS Glue Schema Registry」がさらに3リージョンで利用可能に。Kafka・MSK・Kinesis連携でのスキーマ進化管理がマルチリージョン構成でより扱いやすくなる。

- **[Amazon SageMaker Data Agent now supports geo-specific inference for Japan and Australia](https://aws.amazon.com/about-aws/whats-new/2026/03/sage-maker-da-infr-jp-au/)** (2026-04-01) - SageMaker Data Agentがリージョン内推論プロファイル（日本・オーストラリア）に対応。データ主権やレイテンシ要件の厳しい企業が、自然言語データ分析の推論リクエストを国内リージョンに留めて処理できるようになった。

- **[AWS Deadline Cloud now supports configurable job scheduling modes for queues](https://aws.amazon.com/about-aws/whats-new/2026/04/deadline-cloud-job-scheduling/)** (2026-04-02) - VFX・映像制作向けのフルマネージドレンダーファームサービスDeadline Cloudがジョブスケジューリングモードの設定を可能に。ワーカーリソースをジョブ横断で均等配分するか単一ジョブ優先にするかを制御でき、コスト効率と締め切り優先度のバランスを柔軟に調整できる。

- **[Announcing compute-optimized instance bundles for Amazon Lightsail](https://aws.amazon.com/about-aws/whats-new/2026/04/lightsail-compute-optimized-instances/)** (2026-04-02) - Lightsailに最大72 vCPUのコンピュート最適化インスタンスが7サイズ追加。これまでLightsailは汎用用途向けだったが、計算集約型ワークロードでも使いやすくなり、コスト予測しやすい定額制でのHPC的利用が可能になる。

- **[Amazon CloudWatch expands auto-enablement to Amazon CloudFront logs and 3 additional resource types](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-cloudfront-enablement/)** (2026-04-02) - CloudWatchの自動有効化機能がCloudFrontのアクセスログ・Security Hub CSPMファインディングログ・Bedrockモデル呼び出しログにも拡大。可観測性の設定漏れをゼロにする「デフォルトでログが取れている」状態の実現がさらに容易になる。

## Lobsters

- **[Writing Lisp is AI Resistant and I'm Sad](https://blog.djhaskin.com/blog/writing-lisp-is-ai-resistant-and-im-sad/)** (?pt) - LLMがLisp/Clojureのコードを苦手とする理由（マクロの多様性・S式の曖昧さ・巨大なエコシステム知識の不足）を論じた記事。「AI支援が効きにくい言語を使うことで、逆にコーディングに人間的意味を感じる」という皮肉な逆説が開発者コミュニティで共感を呼んでいる。

- **[The Cathedral, the Bazaar, and the Winchester Mystery House](https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html)** (?pt) - Eric Raymond の「伽藍とバザール」に第三のモデル「ウィンチェスター怪奇屋敷」を加えた考察。目的なく増築を繰り返す現代のLLM訓練パイプラインや大規模クラウドサービスが、機能的な混沌として成長し続ける構造をこのモデルで説明できると論じている。

- **[CVA6-CFI: A First Glance at RISC-V Control-Flow Integrity Extensions](https://arxiv.org/pdf/2602.04991)** (?pt) - RISC-Vアーキテクチャに制御フロー完全性（CFI）拡張を実装したCVA6プロセッサの評価論文。ROP/JOP攻撃をハードウェアレベルで防ぐCFI機能がRISC-Vオープンコアにどの程度のオーバーヘッドで実現できるかを計測しており、IoT・組み込みセキュリティの観点から注目されている。

- **[Roogle: A Rust API search engine](https://github.com/roogle-rs/roogle)** (?pt) - Haskellの「Hoogle」に着想を得た、型シグネチャでRustの関数・メソッドを検索するエンジン。「引数と戻り値の型だけわかっていて関数名がわからない」という状況を解決するツールで、Rustの型システムを最大限活用した開発体験改善に貢献する。

- **[Absurd In Production](https://lucumr.pocoo.org/2026/4/4/absurd-in-production/)** (?pt) - Flaskの作者Armin Ronacherによる「本番で使うには馬鹿げていると思っていた手法が実際には最善だった」という体験談集。不変インフラのブルーグリーンデプロイ・インメモリキャッシュの全廃・SQLiteのプロダクション利用など、教科書的な「べきでない」選択が実環境で機能した理由を論じている。

## dev.to

- **[I built a CLI to test Tauri apps because nothing else worked](https://dev.to/mpiton/i-built-a-cli-to-test-tauri-apps-because-nothing-else-worked-3915)** - Tauri v2アプリのE2Eテストに既存ツール（WebdriverIO等）が対応できず、独自CLIツールを自作した顛末を記録した記事。Tauriのネイティブウィンドウ操作の特殊性と、テストランナーの設計で直面したIPC通信の課題が詳しく共有されている。

- **[Environment Variables You're Leaking to the Frontend Without Knowing It](https://dev.to/sandeepbansod/environment-variables-youre-leaking-to-the-frontend-without-knowing-it-1hb9)** - Next.jsの`NEXT_PUBLIC_`プレフィックスをうっかり付けたAPIキーがビルド成果物に埋め込まれ公開されてしまう問題を解説。「テストのためだけ」のつもりが半年後もそのままになっているケースを指摘し、CI段階でシークレット漏洩を検知するgit-secrets等の自動チェック導入を推奨している。

- **[I Built a Voice AI with Sub-500ms Latency. Here's the Echo Cancellation Problem Nobody Talks About](https://dev.to/remi_etien/i-built-a-voice-ai-with-sub-500ms-latency-heres-the-echo-cancellation-problem-nobody-talks-about-14la)** - 500ms未満のレスポンスを実現した音声AIシステム構築の技術詳細と、自社スピーカーの音声がマイクに回り込む「エコーキャンセレーション問題」への対処法を共有。RNNoiseとWebRTC AECの組み合わせによる解決策と残課題が率直に述べられている。

## TechCrunch

- **[Peter Thiel's big bet on solar-powered cow collars](https://techcrunch.com/2026/04/04/unpacking-peter-thiels-big-bet-on-solar-powered-cow-collars/)** - Founders Fundが牧場管理スタートアップ「Halter」に2億2000万ドルを投資した経緯を解説。太陽光充電型の首輪センサーで牛の行動・健康・位置をリアルタイム管理し、農業IoTの実用化事例として農業テックへの大型投資を牽引する可能性が示されている。

- **[Tesla's Texas factory workforce reportedly shrunk 22% in 2025](https://techcrunch.com/2026/04/03/teslas-texas-factory-workforce-reportedly-shrunk-22-in-2025/)** - テキサス州ギガファクトリーの従業員数が2025年に22%減少（21,191人→16,506人）。2年連続の販売減少とCybercabへの注力シフトの中でリストラが続いており、Tesla製造体制の変革期が続いていることが確認された。

- **[People would rather have an Amazon warehouse in their backyard than a data center](https://techcrunch.com/2026/04/03/people-would-rather-have-an-amazon-warehouse-in-their-backyard-than-a-data-center/)** - 新設データセンターへの地域住民の反発が、Amazonの物流倉庫よりも強いという世論調査結果を紹介。大量の水消費・騒音・景観への懸念が「迷惑施設」感を増幅させており、AIインフラ拡張に対する社会的受容の問題が浮かび上がっている。

- **[The Facebook insider building content moderation for the AI era](https://techcrunch.com/2026/04/03/moonbounce-fundraise-content-moderation-for-the-ai-era/)** - Facebookの元コンテンツモデレーター幹部が設立したMoonbounceがシリーズA1200万ドルを調達。ポリシー文書をAI行動ルールに自動変換する「AI制御エンジン」を開発しており、AIエージェントのコンテンツ安全管理を人手依存から脱却させる新興市場を狙っている。

- **[Artemis II is NASA's last moon mission without Silicon Valley](https://techcrunch.com/2026/04/02/artemis-ii-is-nasas-last-moon-mission-without-silicon-valley/)** - 現在進行中のArtemis IIは従来の宇宙機関主導で実施されている最後のミッションとなる見込みで、次回以降はSpaceXとBlue Originが主要な役割を担う。民間宇宙企業が実質的に有人月探査を主導する時代への転換点として歴史的意義がある。

## Ars Technica

- **[Google Vids gets AI upgrade with Veo and Lyria models, directable AI avatars](https://arstechnica.com/ai/2026/04/google-vids-gets-ai-upgrade-with-veo-and-lyria-models-directable-ai-avatars/)** - Google WorkspaceのビデオツールVidsに動画生成モデル「Veo」と音楽生成モデル「Lyria」が統合され、指示可能なAIアバターも追加。企業向けのプレゼン・研修動画制作をAIが大幅に効率化できる基盤が整いつつあり、Office系ツールとの差別化要素として注目されている。

- **[OpenAI takes on another "side quest," buys tech-focused talk show TBPN](https://arstechnica.com/ai/2026/04/openai-takes-on-another-side-quest-buys-tech-focused-talk-show-tbpn/)** - OpenAIがテック系トークショー「TBPN」を買収し、ロサンゼルスを拠点に編集独立性を維持しながら運営する方針を発表。AIの安全性・技術政策・業界動向を扱うメディアを自社傘下に置くことで、ナラティブ形成への関与を強める動きとして受け止められている。

- **[SpaceX tries to convince FCC that Amazon put satellites into wrong altitude](https://arstechnica.com/tech-policy/2026/04/spacex-claims-amazon-leo-launches-could-crash-into-starlink-satellites/)** - SpaceXがFCCに対し、AmazonのKuiper衛星が不適切な高度に配置されてStarlinkと衝突リスクがあると主張。AmazonはSpaceX側がStarlinkの高度を後から変更したと反論しており、LEO（低軌道）の周回軌道をめぐる商業衛星同士の法的争いが激化している。

- **[EV adoption in America: Who's winning, who's losing?](https://arstechnica.com/cars/2026/04/ev-adoption-in-america-whos-winning-whos-losing/)** - 2026年Q1のEV販売データを分析した記事で、一部OEMは二桁成長を記録する一方でTeslaは続落。ブランド全体の電動化比率・充電インフラ整備の差・価格帯の違いが勝敗を分けており、EV市場の競争軸がテスラ一強から本格的な多極化へ移行していることが示されている。

- **[Renewables dominate 2025's newly installed generating capacity](https://arstechnica.com/science/2026/04/globally-86-percent-of-the-new-generating-capacity-was-renewable-in-2025/)** - 2025年に世界で新規導入された発電容量の86%が再生可能エネルギーであり、うち約4分の3が太陽光発電だったことが報告された。AIデータセンターの急増による電力需要増が化石燃料回帰の懸念を生んでいるが、実態は太陽光が圧倒的なペースで拡大し続けていることが改めて確認された。

## 注目トピック

今回のフィードを通じて浮かび上がる第一のテーマは、**AIコーディングの「量」から「質」へのシフト**だ。Vibe Codingで工数87%削減と引き換えにバグ密度が1.7倍になるというデータや、「AIが書いたコードはレビューではなく自動テストで品質を担保すべき」という主張、さらにDESIGN.mdによる仕様主導開発の提案まで、AIの生産性恩恵を認めた上で「どう品質を確保するか」という実践的な問いが主流になってきた。Claude CodeやGitHub Copilotが開発現場に浸透した次のステップとして、Super SkillsやADLCのようなエージェント活用の標準化・高度化に向けた動きも活発化している。

第二のテーマは**物理インフラとAIの緊張関係**だ。Linux 7.0のスケジューラ変更がPostgreSQL性能を半減させた問題は、OS・DB・ハードウェアの各層が独立して進化することで生じる予期せぬ衝突の典型例だ。一方、世界の新規発電容量の86%が再生可能エネルギーを占めるという事実はAIデータセンターの化石燃料回帰懸念を相対化し、地域住民がデータセンターをAmazon倉庫以上の「迷惑施設」と認識しているという世論調査は、AIインフラ拡張の社会的持続可能性という問いを突きつけている。技術的な進歩の速度と、それを受け入れる物理・社会インフラの整備速度のギャップが今後の主要な摩擦点となりそうだ。
