---
title: "Tech Feed ダイジェスト（2026年5月16日）"
date: "2026-05-16T10:23"
category: "summary"
summary: "Claude Code vs Codex競争激化・Lobsters LLM投稿禁止論争・AWS SCP拡張・Platform Engineering実践録・Git Is Not Fine など横断まとめ"
tags: ["ai", "devtools", "aws", "sre", "security", "rust", "claude-code", "mcp", "platform-engineering"]
---

## はてなブックマーク (テクノロジー)

- **[ワコム社長が西新宿オフィスを私物化、ダンススペースとして娘に提供か　"物言う株主"が解任提案](https://www.itmedia.co.jp/news/articles/2605/15/news109.html)** ([477users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2605/15/news109.html)) - ペン入力デバイスで世界的シェアを持つワコムの社長が、東京・西新宿の本社オフィス内に娘のためのダンスリハーサルスペースを私的に確保していたとするアクティビスト株主による告発。経営者のコーポレートガバナンス問題として、上場企業における経営の透明性を問う事例として注目を集めた。

- **[【最強入門】Claude Codeが強すぎる…非エンジニアこそ業務激変の「神設定」と活用5選](https://www.sbbit.jp/article/cont1/185291)** ([231users](https://b.hatena.ne.jp/entry/s/www.sbbit.jp/article/cont1/185291)) - 「コードが読めない非エンジニア」がClaude Codeを業務に活用するためのCLAUDE.md設定・スラッシュコマンド・ペルミッション管理など5つのユースケースを解説した実用記事。AIコーディングツールが技術者以外の業務変革にも波及し始めていることを示す注目事例。

- **[「涼宮ハルヒの憂鬱」視聴順を巡る4chan投稿→うっかり数学の未解決問題で歴史的発見　2021年論文化](https://www.itmedia.co.jp/news/articles/2605/16/news003.html)** ([193users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2605/16/news003.html)) - アニメのエピソード視聴順の最適化を議論していた4chanスレッドが、計らずも組み合わせ数学の未解決問題「スーパーパーミュテーション問題」の新たな下界を発見し、その後正式な数学論文として発表されるに至った異色の経緯を紹介。インターネット集合知が学術的発見につながった事例として広く共有された。

- **[本物のモネの絵の一部を出して「AI生成したよ」と言ったら、みんなが「本物とは似ても似つかない」とダメ出し](https://togetter.com/li/2697618)** ([78users](https://b.hatena.ne.jp/entry/s/togetter.com/li/2697618)) - モネの印象派作品をAI生成と偽って提示したところ「AIっぽくてリアリティがない」と批判が殺到した実験まとめ。「AIらしさ」という固定観念が判断を誤らせる認知バイアスを実演した社会実験として、AI生成コンテンツの真贋判定の困難さを示している。

- **[一人SREが歩んだPlatform Engineeringスモールスタート実践録 〜クラウドネイティブ会議版〜](https://speakerdeck.com/syossan27/ren-sregabu-ndaplatform-engineeringsumorusutatoshi-jian-lu-kuraudoneiteibuhui-yi-ban)** ([77users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/syossan27/ren-sregabu-ndaplatform-engineeringsumorusutatoshi-jian-lu-kuraudoneiteibuhui-yi-ban)) - 一人SREがPlatform Engineeringをゼロから立ち上げた実践録。理想的な組織体制が整わない状況でも「小さく始めて効果を見せる」アプローチでIDP（内部開発者プラットフォーム）を構築していく具体的な手順と判断基準がまとめられており、スモールチーム向け実践ガイドとして高評価。

## Zenn

- **[Elasticsearchでアイヌ語コーパスを作った](https://zenn.dev/neet/articles/031d5499e68685)** - アイヌ語のテキストコーパスをElasticsearchに投入し、形態素解析・検索インデックス構築まで実施したエンジニアリング事例。低リソース言語のデジタル化における技術的課題（トークナイザの欠如・文献の希少性）と解決策が具体的に示されており、言語技術と文化保存の交差点として興味深い取り組み。

- **[自前キャッシュをTanStack Queryに移行したらコードが半分になった](https://zenn.dev/hiroki0304/articles/tanstack-query-migration-custom-cache)** - 自作のフェッチ・キャッシュ・再検証ロジックをTanStack Queryに置き換えた移行事例。ボイラープレートが大幅削減された一方で、ライブラリの思想（stale-while-revalidate・キーベースのキャッシュ管理）に合わせてデータ設計を見直す必要があったポイントを具体的に解説している。

- **[Claude Code派だった僕がCodexに移る前に知りたかったこと](https://zenn.dev/gemcook/articles/e56eabc7ba2961)** - Claude CodeからOpenAI Codexへ移行検討する際の差異を整理した比較記事。モデルの応答スタイル・コスト・エージェントループの制御感・CLAUDE.md相当の設定方法など実際に使い比べた視点でまとめられており、どちらのツールを選ぶかの判断材料として実用的。

- **[たった数行でコード品質がグッと上がる、CLAUDE.md / AGENTS.md にいつも追記してるやつ](https://zenn.dev/peka2/articles/6dc7d5a87a99dd)** - CLAUDE.mdやAGENTS.mdに記述するだけでAIエージェントの出力品質が向上する設定パターンを紹介。「コメントを書くな」「テスト失敗時は根本原因を調べろ」など、AIの悪い癖を抑制する数行の記述がなぜ効くかも合わせて解説している。

- **[ログイン済みのChromeをそのままClaude Codeから操作する — playwright-cli attach](https://zenn.dev/optimisuke/articles/40529cd970cbf0)** - 既存のログインセッションを持つChromeブラウザにPlaywrightをアタッチし、Claude Codeのスキルとして呼び出す手法の実装記事。認証フローを都度再実装せずに済むため、社内ツール・SaaSのブラウザ自動化がより現実的になる実用テクニック。

## Qiita

- **[AWS上にセキュアかつ安価かつ使い捨て可能なリモート開発環境を構築した話 ― SSM × Spot Instance × CDK](https://qiita.com/kyonosuke/items/eee9eb3840d3f740f325?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - SSM Session Manager・EC2 Spot Instance・CDKを組み合わせてSSH不要・踏み台不要・使い捨て可能なリモート開発環境を実現した構成事例。セキュリティグループでの外部開放ゼロ、コスト削減、Spot Interruptionへの対処方法まで踏み込んだ実践的な記事。

- **[1行の変更でStrapiの本番DBを吹き飛ばした話](https://qiita.com/suu_u/items/9a7ab0a42599b998c3b3?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Strapiの設定ファイルで`database.connection.client`を誤って変更した結果、マイグレーション処理がデフォルトのSQLiteを本番DBとして認識し全データを消失させた体験談。デフォルト値の挙動とマイグレーションの副作用を理解せずに本番環境で設定変更する危険性を生々しく伝える反省録。

- **[単一HTMLで作ったサイトを自己解凍形式にする試み](https://qiita.com/uni928/items/39e8e3bbc327526ac20f?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 依存関係ゼロの単一HTMLファイルを、ダウンロードして開けばそのまま動く「自己解凍形式」として配布する仕組みを実装した技術実験。Service Workerを活用してローカルファイルシステムに仮想的なオリジンを持たせるアプローチが独創的で、オフライン配布ツールの実装例として参考になる。

- **[テスト・コミット・リバート（TCR）：Rubyのレガシーコードに立ち向かうための過激で実用的なワークフロー](https://qiita.com/tms-minhtang1/items/b5b3bd83169db7fa2903?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 「テストが通ればコミット、失敗すればコード全体をリバート」というKent Beck発祥のTCR（Test && Commit || Revert）ワークフローをRubyレガシーコードに適用した実践記事。小さなステップで安全に前進するアプローチがレガシー改善に特に有効な理由を実例で示している。

- **[Claude Code × Codex 共存セットアップ — ルール・Skills・hooks を一元管理する](https://qiita.com/kirozero/items/aec53be56a5427475969?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Claude CodeとOpenAI Codexを同一リポジトリで共存させるためのCLAUDE.md・AGENTS.md・共有Skillsの一元管理手法を解説。どちらのエージェントが呼ばれても同じルールセットとツールチェーンで動作させる構成として、マルチエージェント時代の設定管理の課題に答える実用記事。

## AWS 新着

- **[Amazon CloudWatch Logs announces increased query result limits](https://aws.amazon.com/about-aws/whats-new/2026/05/cloudwatch-logs-query-results/)** (2026-05-15) - Logs InsightsクエリがデフォルトのSCANED上限を超えて最大100,000件まで結果を取得できるようになった。大規模ログ分析でページングや繰り返しクエリが不要になるため、インシデント調査や長期トレンド分析が格段にやりやすくなる。

- **[AWS Organizations now supports higher quotas for service control policies (SCPs)](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-organizations-increased-scp-quotas/)** (2026-05-15) - SCPの最大ポリシー数・サイズ上限が引き上げられ、複雑なマルチアカウント権限境界の設計が従来より柔軟に構築できるようになった。ガードレールポリシーを細かく分割管理したい大規模組織にとって直接的な制約緩和となる。

- **[Amazon CloudFront announces support for OCSP Revocation for Mutual TLS (Viewer)](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-ocsp/)** (2026-05-14) - CloudFrontのmTLS（相互TLS）でクライアント証明書の失効確認（OCSP）が可能になった。証明書失効を即座に反映できるため、漏洩したクライアント証明書をリアルタイムにブロックするゼロトラスト設計の実装がよりセキュアになる。

- **[SageMaker AI now supports serverless model customization for Qwen3.6](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-sagemaker-ft-qwen3-6/)** (2026-05-14) - Alibaba製のQwen3.6（27Bパラメータ）モデルのSFT（教師あり微調整）とRLHFがAmazon SageMakerでサーバーレス実行できるようになった。大規模モデルのファインチューニングをインフラ管理なしに試せる環境が広がり、中国語・多言語タスクへの特化モデル開発が容易になる。

- **[Amazon EMR Serverless is now available in additional AWS Regions](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-emr-serverless-aws-regions/)** (2026-05-15) - EMR Serverlessがアジアパシフィック（ハイデラバード・マレーシア・ニュージーランド）など6リージョンに新規展開。大規模データ処理ワークロードをサーバーレスで実行できる地域が広がり、データレジデンシー要件を持つ組織の選択肢が増える。

## Lobsters

- **[LLM generated submissions should be disallowed](https://lobste.rs/s/29pm2f/llm_generated_submissions_should_be)** (262pt) - Lobstersコミュニティで最高スコアを獲得したメタ提案で、LLMで生成した投稿記事そのものを禁止すべきという議論。「人間が書いたコンテンツの議論と発見こそがLobstersの価値源泉だ」という主張と「判定が不可能」という反論が105件のコメントで展開され、テックコミュニティにおけるAI生成コンテンツ問題の縮図となっている。

- **[Git Is Not Fine](https://www.billjings.com/posts/title/git-is-not-fine/)** (34pt) - Gitのコマンド設計・エラーメッセージ・ステージング概念が初学者はもちろん熟練者にも直感に反する設計になっているという批判的考察。「git checkout」の多義性・`--force`フラグの危険な標準挙動・コミット履歴とブランチの概念的混乱など具体的な問題点を挙げ、代替設計の可能性を示唆する。

- **[Open Source Resistance](https://ossresistance.com/)** (30pt) - AI企業がオープンソースコードを大量に学習データとして使用しながらコントリビュートを行わない現状に抵抗するムーブメントのサイト。MITやApacheなどの既存ライセンスではAI学習に対する制御ができないという問題意識から、新しい形のソフトウェアライセンス設計の議論を喚起している。

- **[In what way if any are you a tech minimalist while maintaining your job/love for tech?](https://lobste.rs/s/kxmdvj/what_way_if_any_are_you_tech_minimalist)** (69pt) - 「仕事ではAWS・マイクロサービス・CI/CDなど複雑なスタックを扱いながら、プライベートではどこまでシンプルな技術を使えるか？」という問いかけスレッド。94件の回答で「個人プロジェクトはSQLite＋単一バイナリ」「スマホを持たない」など多様なテック・ミニマリズムの実践が語られる。

- **[5× faster fast_blur in image-rs](https://apas.tel/blog/optimizing-image-rs-blur)** (19pt) - Rustの画像処理ライブラリ`image-rs`のブラーフィルタを5倍高速化した最適化記事。SIMDインストリンシクス・キャッシュ効率・メモリアクセスパターンの改善をベンチマークで検証しており、Rustパフォーマンスチューニングの実践として参考になる。

## dev.to

- **[Claude Code didn't get worse. The harness did. And that ends one of the most common AI complaints of 2026.](https://dev.to/practiceoverflow/claude-code-didnt-get-worse-the-harness-did-and-that-ends-one-of-the-most-common-ai-complaints-od5)** - 「Claude Codeの精度が落ちた」という2026年上半期に頻出した不満の原因が、モデル本体ではなく周辺のハーネス（制御フレームワーク）側の設定や更新にあったと分析した記事。モデルとハーネスを分離して問題を切り分ける考え方は、AIツールのデバッグ手法として重要な視点を提供する。

- **[MCP just walked into enterprise SaaS like it belonged there, and most people missed it](https://dev.to/practiceoverflow/mcp-just-walked-into-enterprise-saas-like-it-belonged-there-and-most-people-missed-it-1jh5)** - FreshworksがMCP（Model Context Protocol）サポートをSaaSに組み込んだことで、エンタープライズSaaSとAIエージェントの統合が静かに加速しているという考察。MCPがAPIの代替ではなくオーケストレーション層として機能する点と、エンタープライズ導入での意味合いを解説している。

- **[SLOs, SLIs, and Error Budgets: A Practical Guide for SREs](https://dev.to/clouddevang/slos-slis-and-error-budgets-a-practical-guide-for-sres-5bmc)** - SRE実務者向けにSLI（サービスレベル指標）・SLO（目標）・エラーバジェットの概念を実際の設定例とAlertmanagerルールで解説した実践ガイド。「99.9%の可用性は月43分のダウンタイム予算」など具体的な数字で概念を定着させる構成で、SRE導入の入口として参照しやすい内容。

- **[OpenTelemetry in Practice: Vendor-Agnostic Observability at Scale](https://dev.to/clouddevang/opentelemetry-in-practice-vendor-agnostic-observability-at-scale-4c4m)** - Azure Application Insightsから始まったオブザーバビリティ基盤をOpenTelemetryベースに再設計した移行事例。ベンダーロックインを排除しつつトレース・メトリクス・ログの三本柱を一元管理するアーキテクチャ設計の判断基準を実体験から整理している。

- **[A 1.3B model just shipped that runs on your phone, and the labs obsessed with frontier scores won't see this story coming](https://dev.to/practiceoverflow/a-13b-model-just-shipped-that-runs-on-your-phone-and-the-labs-obsessed-with-frontier-scores-wont-1amh)** - スマートフォン上でオンデバイス動作する1.3Bパラメータの新モデルの登場は、フロンティアモデルのベンチマーク競争に目を向けがちなAI業界が見落としているエッジAIの現実的なトレンドを示すと主張する記事。プライバシー・レイテンシ・コストの観点でオンデバイスモデルが優位なユースケースの広がりを論じている。

## TechCrunch

- **[Silicon Valley's vacationland needs a new energy provider just as AI is driving prices up](https://techcrunch.com/2026/05/15/silicon-valleys-vacationland-needs-a-new-energy-provider-just-as-ai-is-driving-prices-up/)** (2026-05-15) - シリコンバレーの避暑地レイクタホがエネルギー供給会社の切り替えを迫られる中、AIデータセンターの急増による電力需要増大が電気料金をさらに押し上げている状況を報告。AIインフラ投資が物理的な電力インフラに与える波及効果が地域レベルで可視化された事例。

- **[Runway started by helping filmmakers — now it wants to beat Google at AI](https://techcrunch.com/2026/05/15/runway-started-by-helping-filmmakers-now-it-wants-to-beat-google-at-ai/)** (2026-05-15) - AI動画生成スタートアップのRunwayが「動画生成はワールドモデルへの道」と位置づけ、Googleに対抗する汎用AIプラットフォームを目指す戦略転換を語った。映像制作ツールから出発し世界モデル構築を目指す独自のロードマップは、大手AIラボとは異なるアプローチとして注目される。

- **[Osaurus brings both local and cloud AI models to your Mac](https://techcrunch.com/2026/05/15/osaurus-brings-both-local-and-cloud-ai-models-to-your-mac/)** (2026-05-15) - ローカルモデルとクラウドAPIを統合したMacアプリ「Osaurus」が、ユーザーのメモリ・ファイル・ツールを自機上に保持しながらどちらのモデルも呼び出せる設計を紹介。プライバシー重視のユーザーが機密データをクラウドに送らずにAIを活用できる実用解として位置づけられている。

- **[Elon Musk's SpaceXAI has been bleeding staff since its merger](https://techcrunch.com/2026/05/14/elon-musks-spacexai-has-been-bleeding-staff-since-its-merger/)** (2026-05-14) - SpaceXとxAIが合併して誕生したSpaceXAIから2月以降50名以上が離職しており、バーンアウト・リーダーシップ変更・文化的摩擦が原因として挙げられていると報告。AI人材獲得競争が激化する中での大規模人材流出は、組織統合の難しさとAI企業における人的資本リスクを浮き彫りにしている。

## Ars Technica

- **[Anthropic's $1.5B copyright settlement is getting messy as judge delays approval](https://arstechnica.com/tech-policy/2026/05/authors-fight-for-higher-payouts-from-anthropics-1-5b-copyright-settlement/)** (2026-05-15) - AnthropicがAIトレーニングデータの著作権侵害に対して提案した15億ドル規模の和解案に対し、著作権者が分配額の低さを理由に反発し裁判官が承認を延期した。AI企業の学習データ問題をめぐる法的決着の先例となる動きとして、オープンソース・コンテンツ産業双方が注視する。

- **[OpenAI feels "burned" by Apple's crappy ChatGPT integration, insiders say](https://arstechnica.com/tech-policy/2026/05/openai-feels-burned-by-apples-crappy-chatgpt-integration-insiders-say/)** (2026-05-15) - Apple IntelligenceへのChatGPT統合がAppleの制約により中途半端な実装になっており、OpenAI社内で不満が高まっているとする内部情報。「Siriの要求通りにカスタマイズしたが、結果として製品品質が下がった」という摩擦は、プラットフォームとAIサービスの協業モデルの難しさを示す具体例だ。

## 注目トピック

**AIコーディングツールの競争とエコシステム成熟**が今回の最大テーマだ。Claude CodeとOpenAI Codexの使い比べ・共存セットアップ・「ハーネスこそが品質を左右する」という洞察など、単なるモデル性能比較を超えた「AIエージェントをどう制御・設定・組み合わせるか」というエンジニアリング論が前面に出てきた。CLAUDE.md/AGENTS.mdの設定チューニングやMCPのエンタープライズSaaS統合が実務として定着しつつあり、AIツールがインフラ化する段階に差し掛かっていることを示している。

一方で**AIコンテンツへの反動**も顕著だ。Lobstersで「LLM生成投稿の全面禁止」が262ptと圧倒的支持を集め、arXivが AI ハルシネーション論文投稿者を1年禁止にする制度を導入したことはその典型だ。オープンソース学習データ問題（Anthropic著作権和解の紛糾・Open Source Resistance運動）も含め、AI普及の恩恵と摩擦が同時に加速している2026年の縮図がこの日のフィードには詰まっていた。
