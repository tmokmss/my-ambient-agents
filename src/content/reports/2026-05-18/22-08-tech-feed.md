---
title: "Tech Feed ダイジェスト（2026年5月19日）"
date: "2026-05-18T22:08"
category: "summary"
summary: "Anthropic Stainless買収・Musk vs OpenAI判決・Grafanaコード盗難・パスキー大熱狂・AI slop bug bounty汚染・EC2 M3 Ultra Mac GAなど"
tags: ["ai", "security", "anthropic", "openai", "passkeys", "aws", "rust", "devtools", "devsec", "lobsters"]
---

## はてなブックマーク (テクノロジー)

- **[パスワードの時代が終わる理由 - パスキーの仕組みを図解でわかりやすく整理する](https://qiita.com/ktdatascience/items/78212f9f851ffe97f3d9)** ([530users](https://b.hatena.ne.jp/entry/s/qiita.com/ktdatascience/items/78212f9f851ffe97f3d9)) - WebAuthn/FIDO2 を基盤に、秘密鍵をデバイス内に閉じ込めて公開鍵のみをサーバに登録するパスキーの仕組みを図解で丁寧に説明した記事。フィッシング耐性・クロスデバイス同期・パスワードレスのトレードオフを整理しており、今週のはてブで圧倒的な人気を集めた。

- **[「ポンコツ」と呼ばれたM365 Copilotの逆転劇、GPT-5が転換点 活用の秘訣は"脱・プロンプト職人"](https://www.itmedia.co.jp/aiplus/articles/2605/15/news013.html)** ([147users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/articles/2605/15/news013.html)) - 当初は回答精度の低さで企業展開が進まなかった Microsoft 365 Copilot が、GPT-5 ベースへのアップグレードで評価が一変したと報告。プロンプトを細かく指定しなくても意図を汲んだ出力ができるようになり、「プロンプト職人が不要になる」という方向への転換点として注目される。

- **[凄すぎ…「Gemma 4×Claude Code活用術」、API料金ゼロでAIエージェント制作の全手順](https://www.sbbit.jp/article/cont1/185346)** ([82users](https://b.hatena.ne.jp/entry/s/www.sbbit.jp/article/cont1/185346)) - Google の Gemma 4 を Claude Code のバックエンドとして活用し、API コストをゼロに抑えながら AI エージェントを構築する手順を解説した記事。ローカルモデルと商用コーディングツールを組み合わせるコスト最適化パターンとして、AI 開発コストに敏感な個人開発者の注目を集めた。

- **[AI コーディングで secret を漏らさないための４層防御](https://zenn.dev/takna/articles/secret-leak-prevention-4-layer)** ([49users](https://b.hatena.ne.jp/entry/s/zenn.dev/takna/articles/secret-leak-prevention-4-layer)) - AI コーディングエージェントを使う際に API キー・認証情報が意図せず外部に送出されるリスクを「`.claudeignore` / git-secrets / 環境変数分離 / ネットワーク制限」の4段階で防ぐ実践ガイド。AI ツール導入時のセキュリティ設計で必読となる内容。

- **[あるバージョンのRHELを永遠に動かし続けられる。Red Hatが期限のないサポート「Red Hat Enterprise Linux Long-Life アドオン」発表](https://www.publickey1.jp/blog/26/rhelred_hatred_hat_enterprise_linux_long-life.html)** ([50users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/rhelred_hatred_hat_enterprise_linux_long-life.html)) - Red Hat が特定メジャーバージョンの RHEL を期限なく使い続けられる「Long-Life アドオン」を発表。通常の10年サポートサイクルを超えて、レガシーシステム・組み込み機器・規制対象インフラでの長期稼働を公式サポートする形になる。

## Zenn

- **[Snowflake-managed MCP ServerのOAuth認証への理解と権限設計](https://zenn.dev/finatext/articles/snowflake-managed-mcp-oauth-and-role-architecture)** - Snowflake が管理するMCPサーバに安全に接続するためのOAuth 2.0 フロー理解と、SnowflakeロールをMCPクライアントのスコープにどうマッピングするかを解説した記事。最小権限の原則を守りながら LLM から Snowflake データに安全にアクセスするアーキテクチャの設計指針として実践的。

- **[技術書を買わずに Claude Code を 1 ヶ月で実用化した学習法](https://zenn.dev/cnative_tkb/articles/2982caf77c4e1c)** - 書籍を購入せず公式ドキュメントと実際のプロジェクトだけで Claude Code を1ヶ月で実務投入した学習プロセスを整理した記事。「作りながら覚える」フローが AI コーディングツールとの相性が特に良い理由を経験ベースで説明しており、学習コスト削減の参考になる。

- **[日本円ステーブルコイン4種を整理した──JPYC・JPYSC・EJPY・Progmat Coin、結局どう違うのか](https://zenn.dev/komlock_lab/articles/japan-yen-stablecoin-landscape-2026)** - 2026 年に相次いで登場した日本円建てステーブルコイン4種の発行主体・担保スキーム・法的根拠・用途を横断比較した記事。資金決済法改正後の国内ステーブルコイン事情を整理しており、ブロックチェーン × 決済領域のエンジニア・企画担当者に必須の一覧。

- **[DDDの理想と決済システムの現実](https://zenn.dev/kotaroikeda/articles/e2276a1d45a55c)** - DDD の「1トランザクション1集約」原則を決済基盤に適用しようとした際、整合性・パフォーマンス・運用コストのトレードオフからあえてルールを破った経緯を考察した記事。AI 設計レビューが「正論だが現実に合わない」指摘を返してきたことをきっかけに設計哲学を深掘りしており、実務 DDD 設計者に刺さる内容。

- **[Rustで小さなリンカーを実装する](https://zenn.dev/skanehira/books/writing-a-tiny-linker-in-rust)** - 変数を終了ステータスとして使う実行バイナリを生成できる最小限のリンカーを Rust でゼロから実装し、リンカーの動作原理を理解するためのオンライン書籍。バイナリフォーマット・シンボル解決・セクション配置といった低レイヤーの知識を手を動かして習得できる実践教材として注目。

## Qiita

- **[専任情シスがいない20人規模の町工場で、自分たちでランサムウェア対策基盤を組む](https://qiita.com/masakai/items/d55a39ac35dca575b8ce)** - IT 専任担当者なしの中小製造業が、既存 Windows 環境を前提にランサムウェア対策を自力構築した実例。Windows Defender ATP・オフラインバックアップ・ネットワークセグメンテーションを予算限定で組み合わせた手順は、多くの中小企業のリアルな課題に直結する。

- **[NotebookLMの学習ノート作成をAIで自動化する](https://qiita.com/shin_takoyaki/items/0fb80d30daf31846a85f)** - Google NotebookLM で学習ノートを生成するプロセスをスクリプトで自動化し、複数ソースからの定期的なナレッジ蓄積ワークフローを構築した記事。AI ナレッジツールを「自動で育てる」インフラとして使う応用例として、学習自動化の第一歩として参考になる。

- **[🔥Hono × 🥟Bun × 🔼Next.jsでWebアプリ開発ハンズオン](https://qiita.com/tomo-ryo/items/3e0529f689bcb39ede97)** - 高速 Web フレームワーク Hono・JavaScript ランタイム Bun・フロントエンドフレームワーク Next.js を組み合わせた Web アプリ開発のハンズオン記事。TypeScript エコシステムの「新しいスタンダード」候補スタックを一気通貫で体験できる構成として注目。

- **[1割の"信頼される"エンジニアが実行している『ズレを防ぐ途中共有』](https://qiita.com/hitomin_poke/items/5d00c7dd1d690ee4f9bf)** - 要件定義から実装完了まで、作業中に意図的に「途中経過を共有する」ことで認識ズレを早期発見するプラクティスの解説。完成品を持ち込んでから手戻りする無駄を防ぐ具体的なタイミングと共有粒度が整理されており、チーム開発の生産性向上に直結する。

- **[Claude Codeのskillsアイデア大全20選](https://qiita.com/kamome_susume/items/d8919d94f55d86e9881c)** - Claude Code の `/` コマンドで呼び出せるスキル（カスタムエージェント動作）のアイデアを20種類まとめた記事。PR レビュー・テスト自動生成・ドキュメント更新・コスト見積もりなど実用的なユースケースを列挙しており、Claude Code 活用の幅を広げるヒント集として機能する。

## AWS 新着

- **[Announcing general availability of Amazon EC2 M3 Ultra Mac instances](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-ec2-m3-ultra-mac-instances-generally-available/)** (2026-05-14) - Mac Studio ハードウェアを搭載した EC2 M3 Ultra Mac インスタンスが GA。Apple Silicon の最上位チップを AWS 上でオンデマンド利用可能になり、iOS/macOS アプリの CI/CD パイプラインや Xcode ビルド環境のクラウド化が大幅に加速する見通し。

- **[Amazon Bedrock Introduces Advanced Prompt Optimization and Migration Tool](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-bedrock-advanced-prompt-optimization-migration-tool/)** (2026-05-14) - Bedrock がプロンプト最適化と異モデル間のマイグレーションを自動化するツールを追加。数日〜数週間かかっていたモデル移行時のプロンプト調整を自動化するもので、コスト削減・性能向上を目的にモデルを切り替える際の摩擦を大幅に低減する。

- **[AWS announces AWS Interconnect - multicloud connectivity with Oracle Cloud Infrastructure in preview](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-announces-AWS-interconnect-multicloud-oci-preview/)** (2026-05-15) - AWS と OCI 間をプライベートネットワークで直結する「AWS Interconnect」がパブリックプレビュー開始。インターネットを経由せず低レイテンシ・高帯域で2クラウドを接続でき、Oracle DB + AWS コンピューティングという構成をとる企業のマルチクラウド戦略を後押しする。

- **[Amazon Redshift adds ALTER TABLE for Iceberg tables and writes via the AWS Glue Data Catalog mount](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-alter-table-iceberg/)** (2026-05-18) - Redshift が Apache Iceberg テーブルへの直接書き込みと `ALTER TABLE` をサポート。Glue Data Catalog マウント経由でスキーマ変更・データ挿入が可能になり、レイクハウスアーキテクチャで Redshift をデータの書き込み先としても使えるようになる。

- **[Amazon SageMaker Studio now supports GPU capacity reservation through SageMaker Flexible Training Plans](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-sagemaker-training-plan-support-for-studio/)** (2026-05-18) - SageMaker Studio の JupyterLab/Code Editor から GPU キャパシティ予約（Flexible Training Plans）を直接設定できるように。GPU 不足が課題のモデルトレーニングにおいて、IDEを離れずにリソース確保から実験実行まで一気通貫で管理できる。

## Lobsters

- **[Researcher says Microsoft secretly built a backdoor into BitLocker](https://www.techspot.com/news/112410-security-researcher-microsoft-secretly-built-backdoor-bitlocker-releases.html)** (79pt) - セキュリティ研究者が、BitLocker に意図的なバックドアが仕込まれているとするコードを公開し Lobsters で大きな議論を呼んだ。政府機関向けの「合法的傍受」対応として実装された可能性が指摘されており、Windows エンタープライズの暗号化戦略の見直しを促す問題提起として注目度が高い。

- **[New design for the FreeBSD website](https://www.freebsd.org/)** (92pt) - FreeBSD 公式サイトがモダンデザインにリニューアルされ、Lobsters で最高スコアを記録。長年「時代遅れ」と言われ続けたデザインの刷新は、OSS プロジェクトのブランディング改善が技術コミュニティへのポジティブなシグナルになることを示している。

- **[The Quiet Renovation at Bitwarden](https://blog.ppb1701.com/the-quiet-renovation-at-bitwarden)** (42pt) - オープンソースのパスワードマネージャー Bitwarden が、UI/UX と内部アーキテクチャの両面で静かに大規模なリファクタリングを進めていることを分析した記事。表面的な機能追加よりも基盤の品質を着実に改善するアプローチがユーザーコミュニティに好意的に受け取られている。

- **[Haiku OS runs on M1 Macs now](https://www.osnews.com/story/144985/haiku-os-runs-on-m1-macs-now/)** (32pt) - BeOS 精神的後継の Haiku OS が Apple Silicon M1 Mac 上で動作するようになった。x86 専用だったHaiku の ARM 対応は困難とされてきただけに、コミュニティの技術的成果として注目されており、代替 OS の移植性向上という観点でも意義がある。

- **[A 16-byte x86 demo: Matrix rain with sound](https://hellmood.111mb.de//wake_up_16b_writeup.html)** (26pt) - わずか16バイトの x86 機械語でマトリックス風の「雨」アニメーションとサウンドを同時に実現したデモのライトアップ。ハードウェアの限界に挑むデモシーン文化の技術的な詳細解説として、低レイヤー・最適化好きのエンジニアの間で話題に。

## dev.to

- **[Surviving Azure Policies: Zero-Trust Hub & Spoke with Terraform](https://dev.to/dwoitzik/surviving-azure-policies-zero-trust-hub-spoke-with-terraform-2b6l)** - Azure Policy が Terraform 適用後に設定を書き換えてしまう問題を前提に、ゼロトラストのハブ＆スポーク構成を Terraform で安定維持するパターンを解説。「デプロイが成功してもポリシーに上書きされる」という Azure ならではの落とし穴と対策を実践的にまとめている。

- **[Streaming Ollama Responses in Next.js: The SSE Pattern That Actually Works](https://dev.to/pavelespitia/streaming-ollama-responses-in-nextjs-the-sse-pattern-that-actually-works-mik)** - Next.js と Ollama を組み合わせたローカル LLM のストリーミングレスポンスで、多くのチュートリアルが示す単純な `fetch` ループではなく SSE（Server-Sent Events）を使う正しい実装パターンを解説。バックプレッシャー処理・エラーハンドリングを含めた実用レベルの実装例が参考になる。

- **[What Gemma 4 Actually Unlocks for a Local Security Swarm](https://dev.to/mxguru1/what-gemma-4-actually-unlocks-for-a-local-security-swarm-and-why-i-dont-use-the-same-variant-nc8)** - Google Gemma 4 の複数バリアント（Gemma 4n / Gemma 4 27B 等）をセキュリティ分析タスクに特化した「スウォーム（群）」として組み合わせる実験記事。用途に応じてモデルサイズを使い分けるローカル LLM セキュリティスウォームの設計アプローチとして示唆に富む。

- **[DuckDB EC2 Optimization, Postgres FDW Pushdown, SQLite NetBeans Connectivity](https://dev.to/soytuber/duckdb-ec2-optimization-postgres-fdw-pushdown-sqlite-netbeans-connectivity-35l)** - DuckDB の EC2 インスタンスタイプ最適化・PostgreSQL の Foreign Data Wrapper によるクエリプッシュダウン・SQLite への NetBeans 接続という異種データベース3トピックを横断的にまとめたレポート。分析系 DB のパフォーマンスチューニングに携わるエンジニアへの実用情報として価値がある。

## TechCrunch

- **[Anthropic has acquired the dev tools startup used by OpenAI, Google, and Cloudflare](https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/)** (2026-05-18) - Anthropic が SDK 自動生成スタートアップ「Stainless」を買収。Stainless は OpenAI・Google・Cloudflare などが SDK のメンテナンスに使っており、その開発者ツールを Anthropic が取り込むことで Claude API のエコシステム強化を加速させる狙いがある。

- **[Elon Musk has lost his lawsuit against Sam Altman and OpenAI](https://techcrunch.com/2026/05/18/elon-musk-has-lost-his-lawsuit-against-sam-altman-and-openai/)** (2026-05-18) - イーロン・マスクが OpenAI と Sam Altman を訴えた裁判で、カリフォルニアの陪審員9人が全員一致でマスク側の主張を退け敗訴。「訴訟の提起が遅すぎた」という時効の問題が判決の根拠となり、マスクは即時控訴を表明した。

- **[Open source tool maker Grafana Labs says hackers stole its code, refuses to pay ransom](https://techcrunch.com/2026/05/18/open-source-tool-maker-grafana-labs-says-hackers-stole-its-code-refuses-to-pay-ransom/)** (2026-05-18) - Grafana Labs が攻撃者にソースコードを盗まれ、公開しなければ身代金を支払えと脅迫されたことを公表。OSS プロジェクトのコードは元々公開されているため身代金を払う合理性がないとして支払いを拒否。インフラツール企業へのランサム攻撃の新たな形として注目される。

- **[SandboxAQ brings its drug discovery models to Claude](https://techcrunch.com/2026/05/18/sandboxaq-brings-its-drug-discovery-models-to-claude-no-phd-in-computing-required/)** (2026-05-18) - 量子・AI 融合スタートアップ SandboxAQ が創薬向け分子シミュレーションモデルを Claude に統合。PhD なしのバイオ・創薬研究者が自然言語で高度な分子解析を実行できる環境を提供し、科学技術領域における LLM の専門特化統合という方向性を示す。

- **[NYC Health + Hospitals says hackers stole medical data and fingerprints during breach affecting at least 1.8 million people](https://techcrunch.com/2026/05/18/nyc-health-and-hospitals-says-hackers-stole-medical-data-and-fingerprints-during-breach-affecting-at-least-1-8-million-people/)** (2026-05-18) - ニューヨーク市の公立病院システムで少なくとも180万人の個人情報・医療データ・指紋スキャンが盗まれる大規模侵害が発生。生体認証データを含む医療情報漏洩は本人確認や保険詐欺の悪用リスクが特に深刻で、ヘルスケアセキュリティの脆弱性改めて浮き彫りに。

## Ars Technica

- **[Bug bounty businesses bombarded with AI slop](https://arstechnica.com/ai/2026/05/bug-bounty-businesses-bombarded-with-ai-slop/)** (2026-05-18) - AI が生成した低品質なバグレポートが企業のバグバウンティプログラムに殺到し、セキュリティ担当者のトリアージ負荷が急増している問題を報告。本物の脆弱性報告が埋もれるリスクがあり、バグバウンティプラットフォームは AI 生成レポートの自動フィルタリング機構の導入を急いでいる。

- **[Five years later, Windows 11 brings back much-missed taskbar options (and more)](https://arstechnica.com/gadgets/2026/05/five-years-later-windows-11-brings-back-much-missed-taskbar-options-and-more/)** (2026-05-18) - Windows 11 のリリース時に削除されて批判を浴びたタスクバーのカスタマイズオプション（ラベル表示・左揃えなど）が5年越しで復活。小型タスクバーや Start メニューのカスタマイズ強化も予定されており、ユーザー要望を長期間無視してきた設計姿勢への反省として評価されている。

- **[Anthropic's $1.5B copyright settlement is getting messy as judge delays approval](https://arstechnica.com/tech-policy/2026/05/authors-fight-for-higher-payouts-from-anthropics-1-5b-copyright-settlement/)** (2026-05-15) - Anthropic と作家・出版社の間で合意した15億ドルの著作権訴訟和解について、弁護士報酬3億2000万ドルの過大さを巡る紛争で裁判官が承認を保留。AI 学習データの著作権補償モデルがどのように制度化されるかを左右する重要な進捗として業界が注視している。

- **[Elon Musk took too long to sue OpenAI, jury unanimously agrees](https://arstechnica.com/tech-policy/2026/05/elon-musk-loses-trial-accusing-sam-altman-openai-of-stealing-a-charity/)** (2026-05-18) - マスク vs OpenAI 裁判の判決を Ars Technica も詳細に報道。「慈善団体を私物化された」とする主張が時効により退けられ、裁判官も即時に陪審の評決を支持。マスクは控訴予定だが、AI ガバナンスをめぐる法的論争の一つの節目として記録される。

## 注目トピック

今週最大のビジネスニュースは **Anthropic による Stainless 買収**だ。OpenAI・Google・Cloudflare という競合・パートナー企業も使っていた SDK 自動生成ツールを Anthropic が取り込んだことで、Claude API の開発者体験強化への本気度が伺える。同時に Elon Musk vs OpenAI の裁判が陪審員全員一致での敗訴という形で決着したことは、AI ガバナンスをめぐる法的争いがスタートアップ創業者間の倫理論争から純粋な法的問題に移行したことを示す節目となった。

セキュリティ面では **AI slop の bug bounty 汚染**が新しい脅威として浮上した。AI が大量生成した低品質バグレポートにより本物の脆弱性報告が埋もれるリスクは、バグバウンティというセキュリティエコシステムそのものへの信頼を揺るがす構造的問題だ。同時に Grafana Labs のコード盗難（身代金支払い拒否）・NYC 病院の180万人規模侵害など、インフラ・医療セクターへの攻撃が続いており、ランサムウェア対策の重要性は引き続き高い。開発者コミュニティでは**パスキーへの関心が急激に高まっており**、はてブ530ブックマークという圧倒的な数字がその関心の高さを示している。
