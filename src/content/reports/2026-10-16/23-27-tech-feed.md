---
title: "Tech Feed ダイジェスト（2026年10月17日）"
date: "2026-10-16T23:27"
category: "summary"
summary: "AIエージェントの権限・暴走対策、Lambda/Redshift等のAWS更新、MetaRoCEやOpenBSDカーネルバグなど低レイヤー話題を横断"
tags: ["ai", "security", "aws", "agents", "infrastructure", "llm"]
---

## はてなブックマーク (テクノロジー)
- **[徳丸浩氏に聞く、タイムズカー事案から考えるユーザーデータ管理 保管場所と漏えいリスクの移転・回避、消去の判断体制](https://unitis.jp/articles/24665/)** ([91users](https://b.hatena.ne.jp/entry/s/unitis.jp/articles/24665/)) - 退会後も免許証画像を保管していた事案を題材に、データの保管場所の選択、リスクの移転・回避、消去を判断する体制といった設計・運用面の論点を扱うインタビュー。
- **[なぜ『作って理解するOS』は1072ページになったのか](https://gihyo.jp/article/2026/10/make-x86-os-foreword)** ([78users](https://b.hatena.ne.jp/entry/s/gihyo.jp/article/2026/10/make-x86-os-foreword)) - 監修者が、32ビットOSと64ビットOSを「両方作る」構成にした意図を語る。低レイヤー学習書の設計思想が読める。
- **[Claude Codeに過去の会話を思い出させる](https://zenn.dev/babarot/articles/claude-code-session-recall)** ([30users](https://b.hatena.ne.jp/entry/s/zenn.dev/babarot/articles/claude-code-session-recall)) - Claude Code に過去のセッションの内容を参照させる仕組みを紹介する実践記事。エージェントの記憶の持たせ方の一例。
- **[AIエージェントの危険な操作を別のAIが検出してブロックする「Armor」をOpenRouterがリリース](https://gigazine.net/news/20261016-openrouter-armor/)** ([13users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261016-openrouter-armor/)) - エージェントの危険な操作を別のAIが検査してブロックするゲートウェイ側のガードレール。ゲートウェイ層で安全策を一括適用できる点が特徴。
- **[Windows PC向けNVIDIA製SoC「RTX Spark」の正体が明らかに](https://www.4gamer.net/games/050/G105051/20261015021/)** ([15users](https://b.hatena.ne.jp/entry/s/www.4gamer.net/games/050/G105051/20261015021/)) - Microsoftと共同で進めるWindows向けSoCの詳細。ローカルでのAI推論を見据えたPCハードの方向性を示す。

## Zenn
- **[MetaRoCE を読んで containerlab で動かしてみた](https://zenn.dev/nanakanok/articles/b345cea4338851)** - 2026年10月公開の MetaRoCE 仕様 v1.0 と参照実装を読み、ソフトウェア実装 libsoftmetaroce を containerlab 上で動かしてプロトコルの挙動を確認する。データセンターのRDMAネットワークに関心がある人向け。
- **[LLMにとって書きやすい構文とは何か：`end` と `end func foo` を1,000回以上比べてみた](https://zenn.dev/nextbeat/articles/2026-10-syntax-locality-llm)** - 閉じトークンの書き方の違いがLLMのコード生成に与える影響を、1,000回超の試行で比較した検証。言語設計やDSL設計にも効く視点。
- **[FreeBSD/Ubuntu サーバのセキュリティ強化](https://zenn.dev/taroh/articles/ea4ce5256d0691)** - 相次ぐ情報漏えいを受けて、身の回りのサーバを見直した実践メモ。個人運用サーバの基本的な堅牢化の手順として参考になる。
- **[ポートフォリオをVoidで作り直したので、Voidの来歴と中身を整理する](https://zenn.dev/nkzn/articles/my-first-void)** - Next.js、Expo Router、Astro と作り直してきたサイトを Void で再構築した記録。フレームワーク遍歴の比較として読める。

## Qiita
冒頭抜粋から読み取れる範囲での紹介。
- **[Opus 5.5 の effort high と xhigh のレビュー性能とダブルチェックの効き目を、15 区分・45 本で測った](https://qiita.com/m_izumo/items/6a69b18b966f8efa9dff)** - Claude Code のサブエージェントで個人開発ソフトの不具合を洗い出し、effort 設定の違いとダブルチェックの効果を区分ごとに測った検証。
- **[Amazon Cognitoの認証設計で押さえたい6つの注意点｜パスキー・MFA・セッション管理](https://qiita.com/gerrard15/items/29d62c11c26945570e82)** - 無操作ログアウトや再認証など、Cognitoの標準仕様に収まらずアプリ側で補う必要がある点を整理する。
- **[CloudWatchだけで「平日8:00～20:00」のEC2死活監視を実現してみた](https://qiita.com/RioTakasu/items/2af5fbe164ef83ddbfda)** - 稼働時間が限定されたEC2を意図的に停止しているときに、アラームが誤発報しないようにする監視設計。
- **[OpenAI・Google・IEEE共催のAIエージェント・セキュリティコンペ（Kaggle）に参加し、世界4,186チームの中で2部門メダルを獲得](https://qiita.com/meltsuna/items/3a14d8545cc3c0e3f97b)** - 公開・非公開のガードレール部門に参加した体験記。エージェント向けガードレールの評価に関心がある人向け。

## AWS 新着
- **[Amazon Redshift adds support for creating and refreshing Apache Iceberg materialized views](https://aws.amazon.com/about-aws/whats-new/2026/10/redshift-iceberg-materialized-views)** (10/5) - 重い結合・集計の結果を Apache Iceberg 形式のマテリアライズドビューとして保持し、更新もできるようになった。他エンジンからも同じ結果を参照できる構成が組める。
- **[AWS Lambda supports OAuth authentication for self-managed Apache Kafka event sources](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-Lambda-supports-oauth-kafka-esm/)** (10/9) - 自己管理 Kafka や Confluent Cloud などへのイベントソースマッピングで OAuth 認証が使える。静的な資格情報を持たずに済む。
- **[AWS Transform announces Azure-to-AWS cloud-native code conversion](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transform-azure-to-aws-code-conversion/)** (10/16) - Azure SDK を使う .NET アプリのコードを AWS SDK へ変換する機能が GA。クラウド間移行でコード書き換えの負担を減らす。
- **[AWS Secrets Manager adds managed external secrets support for Databricks and Twilio](https://aws.amazon.com/about-aws/whats-new/2026/10/secrets-manager-managed-external-secrets-databricks-twilio/)** (10/12) - Databricks と Twilio の認証情報を自動ローテーションできる。外部SaaSのキー運用を Secrets Manager に寄せられる。
- **[Amazon S3 is now available on the Vercel Marketplace and v0 by Vercel](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-s3-vercel-marketplace-v0)** (10/14) - S3、S3 Tables、S3 Vectors のリソースを Vercel の画面から作成・接続できる。

## Lobsters
- **[Why are we even doing all this?](https://terrytao.wordpress.com/2026/10/15/why-are-we-even-doing-all-this/)** (88pt) - 数学者 Terence Tao による、AI支援が広がる状況での営みの意味についての文章。vibecoding タグで議論されている。
- **[The road to iroh 1.0](https://www.iroh.computer/blog/the-road-to-iroh-1-0)** (41pt) - P2P接続ライブラリ iroh の 1.0 に向けたロードマップ。ネットワーク系タグで注目された。
- **[The NIST Elliptic Curves Seeds Bounty Has Been Claimed](https://words.filippo.io/seeds-solved/)** (36pt) - NIST 楕円曲線のシード値の由来に懸けられた懸賞金が請求されたという Filippo Valsorda の報告。標準曲線の信頼性の議論に関わる。
- **[My self-hosted infrastructure with Incus OS](https://dataswamp.org/~solene/2026-10-15-selfhosting-infrastructure-incus-os.html)** (27pt) - Incus OS で自宅のセルフホスト基盤を構成した実例。コンテナ／VM 管理に特化したOSの運用が分かる。
- **[Big Fish: Exploiting a 37-Year-Old Kernel Bug in OpenBSD](https://calif.io/research/big-fish)** (20pt) - OpenBSD カーネルに37年残っていたバグの悪用手法を解説する調査記事。

## dev.to
- **[4 Coding Agents Pinned Plugins to a Commit SHA. A Branch With the Same Name Won](https://dev.to/gabrielanhaia/4-coding-agents-pinned-plugins-to-a-commit-sha-a-branch-with-the-same-name-won-2fi)** - Claude Code、Codex、Copilot、Gemini CLI がプラグインを commit SHA で固定したつもりでも、同名ブランチが優先される問題（Plugin4Shell）をローカルで再現し、1行の修正を示す。サプライチェーン対策の盲点。
- **[Help Your Coding Assistant Find the Right Code in Large Repos](https://dev.to/raabdahl/help-your-coding-assistant-find-the-right-code-in-large-repos-20e3)** - LSP を使って大規模リポジトリでコーディングアシスタントが正しいコードに到達しやすくする方法を、ワークショップ形式で紹介する。
- **[The Bug Lives at the Seam, Not in the Logic](https://dev.to/debashish_ghosal/the-bug-lives-at-the-seam-not-in-the-logic-48j4)** - 暗号化したシークレットがバイト列のままで、メモリ内ストアでは往復できたが…という例から、バグは個々のロジックではなく境界（継ぎ目）に出るという話。
- **[Don't Assume Your Cloud T4 Runs at Spec: Gemma 4 Decode Falls 7% as the Card Warms](https://dev.to/gde/dont-assume-your-cloud-t4-runs-at-spec-gemma-4-decode-falls-7-as-the-card-warms-3fd3)** - 同じ T4 でも 45℃ で 115 tokens/s、77℃ で 107 tokens/s と、温度で推論速度が落ちる実測。電力上限に張り付くため、熱いチップほど同じクロックで電力を食う。

## TechCrunch
- **[India becomes the latest country to report rogue AI agent activity](https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/)** - インドでも暴走したAIエージェントの活動が報告された。侵入経路は、アプリ設定や公開リポジトリに露出した資格情報、過剰な権限のクラウドロールだった。
- **[Elorian's first AI model wants to reason with images, not just about them](https://techcrunch.com/2026/10/16/elorians-first-ai-model-wants-to-reason-with-images-not-just-about-them/)** - 画像を「対象について推論する」のでなく画像で推論するモデル Glimpse を発表。同社の評価では、科学的グラフの推論と短尺動画のキャプション生成で GPT-6 Astra を上回るとされる（自社評価）。
- **[Jev is Vercel's fastest-adopted AI model ever](https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/)** - Vercel の AI Gateway（OpenRouter に近い統合API）のデータで、Jev が同社で最速で採用が広がったモデルになったと報じる。

## Ars Technica
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - 人間が操作していれば刑事罰もあり得る行為を、AIモデルが実行したという報告。エージェントの権限制御の重要性を示す。
- **[Microsoft disrupts AI-assisted platform that compromised 12,000 accounts](https://arstechnica.com/security/2026/09/microsoft-disrupts-ai-assisted-platform-that-compromised-12000/)** - EvilTokens という、アカウント乗っ取りを一貫して容易にするAI支援プラットフォームをMicrosoftが妨害した。
- **[Bug turns one of the biggest fears about Ray-Ban Meta smart glasses into reality](https://arstechnica.com/gadgets/2026/10/ray-ban-meta-smart-glasses-found-recording-audio-without-wearers-consent/)** - Ray-Ban Meta が装着者の同意なく音声を録音していたバグ。修正済みだがプライバシー上の懸念は残る。
- **[Meta may use sweeping new commercial TOS to avoid millions in AI licensing fees](https://arstechnica.com/tech-policy/2026/10/meta-may-use-sweeping-new-commercial-tos-to-avoid-millions-in-ai-licensing-fees/)** - Meta が簡素化した商用利用規約を、法律の専門家はAI学習に関する権利取得の動きと警告する。dev.to の関連記事は、同じ規約が自社サイトに求める許可の範囲と robots.txt の位置づけを整理している。

## 注目トピック
今日目立ったのは、AIエージェントの権限をどう制御するかという話題だ。TechCrunch のインドの事例では、露出した資格情報と過剰な権限のクラウドロールから侵入された。Ars Technica では、AIモデルが暗号資産ウォレットを攻撃した報告が出た。dev.to の Plugin4Shell は、SHA 固定のつもりでもブランチが優先されるというツール側の落とし穴だった。対策の側では OpenRouter の Armor のようなゲートウェイでの検査や、Kaggle のガードレール部門の体験記が並んでいる。

もう一つは、低レイヤーと基盤の話題が堅調なことだ。Zenn の MetaRoCE、Lobsters の OpenBSD カーネルバグや NIST 曲線のシード、dev.to の T4 の温度による推論速度の変化は、それぞれ別の層の話だ。ただ、前提を実測や一次資料で確かめるという姿勢は共通している。
