---
title: "Tech Feed ダイジェスト（2026年7月3日）"
date: "2026-07-02T22:17"
category: "summary"
summary: "Herdrによるエージェント多重化・Safari MCPサーバー・Cloudflare Monetization Gateway・Anthropic×Samsungチップ協議・GoogleのAI電力37%増など"
tags: ["ai", "agents", "aws", "security", "frontend", "devops", "browser"]
---

## はてなブックマーク (テクノロジー)

- **[tmuxでいいじゃんと思ってた僕がHerdr(fork)を常用しはじめた話](https://kazuph.github.io/blog/2026/05/28/tmux-herdr-agent-multiplexer/)** ([73users](https://b.hatena.ne.jp/entry/s/kazuph.github.io/blog/2026/05/28/tmux-herdr-agent-multiplexer/)) - tmuxで満足していた筆者が、複数のAIエージェントセッションを並行管理する専用マルチプレクサ「Herdr」のforkに乗り換えた経緯を紹介。エージェントを何本も走らせる運用が一般化し、汎用ターミナル多重化ツールでは足りない場面が増えてきたことがうかがえる。
- **[「コーディングはボトルネックだったためしがない」　AI駆動開発の盲点と成果が出ない理由、Gartnerが明かす](https://atmarkit.itmedia.co.jp/ait/articles/2607/02/news018.html)** ([34users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2607/02/news018.html)) - Gartnerの分析として、そもそもコーディング自体はソフトウェア開発のボトルネックではなかったため、AIでコーディングを高速化しても組織全体の生産性向上に直結しにくいと指摘。要件定義やレビュー、意思決定など他工程のボトルネックを見誤ると投資対効果が出ない点が語られている。
- **[「Chrome」の次回アップデートで「Manifest V2」が完全廃止へ--安全性低下の懸念も](https://japan.zdnet.com/article/35249774/)** ([21users](https://b.hatena.ne.jp/entry/s/japan.zdnet.com/article/35249774/)) - Chromeの拡張機能仕様Manifest V2が次回アップデートでついに完全廃止される。広告ブロッカーなど一部の拡張機能が新仕様Manifest V3で機能制限を受け、安全性やユーザー体験への懸念が拡張機能開発者から出ている。
- **[AIがウェブサイトに訪問するたびに課金できるシステム「Monetization Gateway」をCloudflareが発表](https://gigazine.net/news/20260702-cloudflare-monetization-gateway/)** ([11users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260702-cloudflare-monetization-gateway/)) - CloudflareがAIクローラー・エージェントのサイト訪問ごとに課金する仕組み「Monetization Gateway」を発表。パブリッシャーがAI企業からコンテンツ利用料を回収する新たな収益モデルとして、CDN事業者がゲートキーパー役を強めている。
- **[Introducing the Safari MCP server for web developers](https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/)** ([6users](https://b.hatena.ne.jp/entry/s/webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/)) - WebKitチームがWeb開発者向けにSafari専用のMCPサーバーを公開。AIコーディングエージェントがSafariの開発者ツールやレンダリング挙動に直接アクセスできるようになり、クロスブラウザ検証をエージェント経由で行う土台が整いつつある。

## Zenn

- **[AI時代のチーム開発フローは「小さく安全に流し続ける」こと](https://zenn.dev/nocall/articles/3f0fcbbed6348c)** - AIで実装速度が上がるほど差分の増加スピードも上がるため、変更を小さく保って安全にリリースし続ける体制づくりが重要だと説く記事。AI活用で開発速度が上がった分、逆にリリースプロセスの設計を丁寧にする必要があるという実務的な指摘。
- **[Syncthingでサーバー上のフォルダをローカルPCと同期する](https://zenn.dev/karaage0703/articles/907b11839dff2d)** - サーバー上でClaude CodeやOpenClawを24時間稼働させる運用が増える中、AIが生成したファイルをローカルPCから手軽に確認するためSyncthingで同期する構成を紹介。常駐エージェント運用特有の「生成物の受け渡し」課題への実践的な解決策。
- **[連動するフォームを TanStack Form で書く](https://zenn.dev/edash_tech_blog/articles/29679afbb3e8da)** - React Hook Formに続く選択肢としてTanStack Formを使い、項目間で値が連動する複雑なフォームを型安全に実装する方法を解説。非制御コンポーネントベースの設計思想を活かしつつ、複雑なバリデーションをどう構造化するかが具体的に示されている。
- **[ローカルLLMで「Pi」エージェントを動かす](https://zenn.dev/fuwamoekissaten/articles/bb5f5364838ced)** - クラウドAPIの課金を避けるため、ローカルLLM上で自律的に動くエージェント「Pi」を構築した記事。チャット型からエージェント型へ移行した結果生じる継続的な課金負担を、ローカル実行でどう回避するかという実践例。
- **[仕様の曖昧さをコードで共有する](https://zenn.dev/tan_go238/articles/c94a78a2dea391)** - 「仕様は最初から完全に決まっている」という技術書的な前提を疑い、曖昧なまま進む仕様をコードでどう共有し合意形成していくかを論じた記事。AIにコーディングを任せる機会が増えるほど、仕様の曖昧さがそのまま実装に紛れ込むリスクへの警鐘とも読める。

## Qiita

- **[トークンをケチるな、設計しろ：GitHub Copilotを賢く使うコンテキスト戦略](https://qiita.com/ochtum/items/d442ed23d24245b789a0)** - GitHub Copilotの精度を上げるには単にプロンプトを削ることではなく、渡すコンテキストを設計することが重要だと説く記事。何を・どの順序で・どこまでモデルに見せるかという「コンテキストエンジニアリング」の実践的な考え方がまとまっている。
- **[【CDK for Go】GitHub Actions OIDC + CDKで最小権限デプロイロールを設計](https://qiita.com/umekikazuya/items/a090e25a9cb9cfd7540a)** - GitHub ActionsからAWSへOIDC連携でデプロイする際、CDK for Goを使って最小権限のIAMロールを設計する具体的な手順を解説。長期的な認証情報を持たずCI/CDパイプラインを安全に構成したいチーム向けの実践的なリファレンス。
- **[正規化はパフォーマンスの敵？非正規化との付き合い方を徹底解説](https://qiita.com/Nao52/items/8568574542a4ca58a92e)** - RDBの正規化・非正規化のトレードオフを整理し、パフォーマンス要件に応じてどこまで非正規化を許容すべきかを解説した記事。「正規化すればするほど良い」という単純化された理解を、実際のクエリパターンに即して見直す内容になっている。
- **[cargo update前の一呼吸に！Crates.ioポリシー準拠のリリース日チェッカーをAIと作った話](https://qiita.com/torifukukaiou/items/b3c676f56146287b2034)** - Rustの依存クレートを更新する前に、Crates.ioのポリシーに沿ってリリース日や信頼性を確認できる簡易チェッカーをAIとペアで開発した記事。サプライチェーンリスクを意識した依存関係更新の運用を、軽量なツールで補う実践例。
- **[Claude Code のコンテキスト管理とトークン消費を抑える運用方法](https://qiita.com/Yasushi-Mo/items/0071f71ba102d2125c13)** - Claude Codeでのセッションが長引くとコンテキストが肥大化しトークン消費が急増する問題に対し、こまめな要約やタスク分割によって運用コストを抑える具体的なテクニックを紹介している。

## AWS 新着

- **[Amazon EC2 Dedicated Hosts now support AMD SEV-SNP](https://aws.amazon.com/about-aws/whats-new/2026/07/ec2-amd-sev-snp-dedicated-hosts)** (2026-07-02) - EC2 Dedicated HostsがAMDの機密コンピューティング技術SEV-SNPに対応した。専有ホスト上でメモリ暗号化を伴う機密ワークロードを実行できるようになり、規制の厳しい業界でのクラウド移行のハードルが下がる。
- **[Amazon ECS now provides real-time deployment observability in the AWS Management Console](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-aws-management-console/)** (2026-07-01) - Amazon ECSのデプロイ状況をマネジメントコンソール上でリアルタイムに可視化できるようになった。ローリングデプロイの進行状況やタスクの健全性をコンソールから直接追えるようになり、CLIやログを行き来する手間が減る。
- **[Amazon ECS now supports configurable deployment circuit breaker settings](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-circuit-breaker-settings/)** (2026-07-01) - ECSのデプロイサーキットブレーカーの発動条件を細かく設定できるようになった。異常なデプロイを自動ロールバックする閾値を環境ごとに調整できるようになり、誤検知によるロールバックと本当の障害の見逃しのバランスを取りやすくなる。
- **[AWS Config now supports 8 new resource types](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-config-new-resource-types)** (2026-07-02) - AWS ConfigがAPI Gateway、EC2、S3 Vectorsなどを含む8種類の新しいリソースタイプに対応した。構成監視・コンプライアンスチェックの対象範囲が広がり、新しいAWSサービスを使い始めた際のガバナンス整備がしやすくなる。
- **[Amazon Managed Service for Prometheus achieves FedRAMP High and DoD IL-4/5 authorization in AWS GovCloud (US)](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-managed-service-prometheus-fedramp-high/)** (2026-07-01) - Amazon Managed Service for PrometheusがAWS GovCloud (US)でFedRAMP HighおよびDoDのIL-4/5認証を取得した。機密度の高い政府系ワークロードでも、マネージドなメトリクス監視基盤をコンプライアンス要件を満たしたまま利用できるようになる。

## Lobsters

- **[The modern app](https://dbushell.com/2026/07/02/the-modern-app/)** (50pt) - 近年の「モダンなアプリ」がどんどん重く複雑になっている風潮に対する批判的なエッセイ。SPA・大量のJSバンドル・過剰な抽象化が本当にユーザー体験を良くしているのかを問い直し、シンプルなWebの価値を再評価すべきだと論じている。
- **[jj v0.43.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.43.0)** (40pt) - Gitの後継として注目される分散バージョン管理システムJujutsu（jj）の最新リリース。作業ツリーとコミットを分離した独自モデルの改善が続いており、Gitに代わる選択肢としての完成度が着実に高まっている。
- **[Artificial adventures](https://www.scattered-thoughts.net/writing/artificial-adventures/)** (40pt) - AIコーディングエージェントとの協業を通じて得た気づきを綴ったエッセイ。エージェントに任せることで得られる速度と、人間が理解・検証する責任とのバランスをどう取るべきかという、vibecoding時代の実践的な内省がまとめられている。
- **[Preventing token theft](https://codon.org.uk/~mjg59/blog/p/preventing-token-theft/)** (15pt) - OAuthトークンなどの認証情報が盗まれることを前提に、盗難後の悪用をどう防ぐかという設計思想を論じたセキュリティ記事。トークンの窃取そのものを完全には防げないという前提に立った多層防御の考え方が示されている。
- **[kernel asynchronous reads in PostgreSQL 19 (io_uring)](https://dev.to/franckpachot/iouring-buffered-reads-in-postgresql-19-iouring-mcn)** (12pt) - PostgreSQL 19で採用されるLinuxのio_uringを使った非同期読み込み機能を検証した記事。従来の同期的なバッファ読み込みに比べI/O待ちを削減できる仕組みを、実際のベンチマークとともに解説している。

## dev.to

- **[I built a production risk scanner in one day, here's what it caught](https://dev.to/mk_c/i-built-a-production-risk-scanner-in-one-day-heres-what-it-caught-1ad1)** - SRE・DevOpsエンジニア向けに、コード差分から本番環境への影響リスクをスコアリングするツール「BlastRadar」を1日で構築した記事。デプロイ前にリスクの高い変更を機械的に検出する軽量な仕組みとして紹介されている。
- **[Subagent Teams Need Handoff Receipts](https://dev.to/keesan/subagent-teams-need-handoff-receipts-3558)** - 複数のAIサブエージェントに役割分担させるマルチエージェント構成で、エージェント間の引き継ぎ内容が曖昧なまま進むと後工程で問題が起きやすいと指摘する記事。各エージェントの作業結果を検証可能な「受け渡し記録」として残すべきだという設計原則を提案している。
- **[Advanced C# Generics: Contravariance, Custom Comparers and Real Abstractions](https://dev.to/manoharij/advanced-c-generics-contravariance-custom-comparersand-real-abstractions-5711)** - C#ジェネリクスの反変性やカスタム比較子を使った実践的な抽象化パターンを解説する記事。基礎編に続く応用編として、型システムを活かした柔軟なAPI設計の具体例を示している。
- **[Ng-News 26/16: OpenNG Foundation, spartan/ui](https://dev.to/playfulprogramming-angular/ng-news-2616-openng-foundation-spartanui-1aim)** - Angularエコシステムの週次ニュースまとめ。SpectatorやElfなどのライブラリの新たな受け皿となる「OpenNG Foundation」の発足と、shadcn風の安定版コンポーネントライブラリ「spartan/ui」1.0のリリースが今週の目玉として紹介されている。
- **[Eloquent Events vs Domain Events: Why the Framework Hook Isn't Enough](https://dev.to/gabrielanhaia/eloquent-events-vs-domain-events-why-the-framework-hook-isnt-enough-3mbg)** - LaravelのEloquentイベントのようなフレームワーク組み込みのフックだけに頼ると、ドメインロジックがフレームワークに強く結合してしまう問題を指摘した記事。ドメインイベントとして明示的にモデリングすることで、フレームワークが変わってもロジックを守る設計を提案している。

## TechCrunch

- **[Anthropic is discussing a new custom chip with Samsung](https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/)** - AnthropicがSamsungとの間でカスタムAIチップの共同開発を協議していると報じられた。GPU供給への依存を減らし推論コストを抑えるため、モデル企業自身が専用ハードウェアの内製・共同開発に動く流れが加速している。
- **[A warning sign about AI's real cost, courtesy of Google and Amazon](https://techcrunch.com/2026/07/02/a-warning-sign-about-ais-real-cost-courtesy-of-google-and-amazon/)** - GoogleとAmazonの決算・設備投資動向から、AIインフラの実際のコスト負担がどれほど重くなっているかを読み解く記事。売上に直結しない巨額の設備投資が続く現状に、投資家からの警戒感が強まっていることを伝えている。
- **[Microsoft launches its own AI deployment company with $2.5 billion commitment](https://techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/)** - Microsoftが25億ドルを投じ、AIモデルの展開・運用に特化した新会社を立ち上げた。クラウド事業者自身がAIの導入支援ビジネスを内製化する動きで、企業向けAI導入コンサルティング市場の争奪戦が激しくなっている。
- **[US government says it got hacked — again](https://techcrunch.com/2026/07/02/us-government-says-it-got-hacked-again/)** - 米政府機関がまたも不正侵入被害を受けたと発表した。政府機関へのサイバー攻撃が繰り返し発生している実態を伝えており、重要インフラのセキュリティ対策強化の必要性を改めて浮き彫りにしている。
- **[IQM, Europe's first public quantum company, admits the future of the tech is uncertain](https://techcrunch.com/2026/07/02/iqm-europes-first-public-quantum-company-admits-the-future-of-the-tech-is-uncertain/)** - 欧州初の上場量子コンピューティング企業IQMが、量子技術の実用化時期についてなお不確実性が大きいと率直に認めた。investor向けの誇大な期待とは裏腹に、量子コンピューティングの商用化にはまだ時間がかかるという現実的な見方が示されている。

## Ars Technica

- **[Newly discovered PamStealer isn't your typical macOS malware](https://arstechnica.com/security/2026/07/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy/)** - macOSを狙う新種のマルウェア「PamStealer」が発見された。認証情報を盗み出す一般的な手口に加え、検知を逃れるための巧妙な偽装技術を組み合わせている点が従来のmacOSマルウェアと異なると報告されている。
- **[Google loses long-running appeal of record EU fine, will have to cough up $4.7 billion](https://arstechnica.com/gadgets/2026/07/google-loses-long-running-appeal-of-record-eu-fine-will-have-to-cough-up-4-7-billion/)** - GoogleがEUから科された過去最高額の制裁金47億ドルについて長年争ってきた控訴審で敗訴し、支払いが確定した。巨大テック企業に対するEUの独禁法執行が、長期の法廷闘争を経ても揺るがなかった事例として注目される。
- **[Google's AI buildout drove 37% increase in electricity use in 2025](https://arstechnica.com/ai/2026/07/googles-ai-buildout-drove-37-increase-in-electricity-use-in-2025/)** - Googleのデータセンター向け電力消費が、AIインフラ拡大により2025年に37%増加したことが明らかになった。生成AIの学習・推論需要が、大手クラウド事業者のエネルギー消費構造を急速に変えている実態を数値で裏付けている。
- **[Musk's X poses "serious risk to Americans' privacy," advocates warn FTC](https://arstechnica.com/tech-policy/2026/07/musks-x-poses-serious-risk-to-americans-privacy-advocates-warn-ftc/)** - プライバシー擁護団体が、Xのデータ収集・AI学習利用の実態が米国民のプライバシーに深刻なリスクをもたらしているとしてFTCに調査を要請した。SNSプラットフォームの投稿データがAIモデル学習に転用される際の同意・透明性の欠如が争点になっている。
- **[FAA proposal: Supersonic airliners can fly over US cities if they're quiet](https://arstechnica.com/gadgets/2026/07/faa-proposal-supersonic-airliners-can-fly-over-us-cities-if-theyre-quiet/)** - 米連邦航空局(FAA)が、騒音基準を満たせば超音速旅客機が米国内の都市上空を飛行できるようにする規則案を提示した。長年禁止されてきた陸上超音速飛行が、技術的な静音化を条件に解禁されようとしている。

## 注目トピック

今日目立つのは、AIをめぐる「境界線の再設計」が複数のレイヤーで同時進行している点だ。Cloudflareはサイト訪問ごとにAIへ課金する「Monetization Gateway」を発表し、パブリッシャーとAIクローラーの力関係に直接介入した。同時にWebKitはAI開発者向けにSafari MCPサーバーを公開し、AnthropicはSamsungとカスタムチップ開発を協議するなど、AIエージェントがブラウザやハードウェアといった従来人間向けだった基盤に食い込みつつある。一方でGoogleのAI関連電力消費が2025年に37%増加したという報告や、Google・Amazonの巨額設備投資に対する「AIの実コストへの警鐘」記事は、AI拡大の裏側にある物理的・財務的なコストの重さを改めて突きつけている。

もう一つの軸は、AI活用の「効き目」を冷静に見直す論調だ。Gartnerの分析として「コーディングはボトルネックだったためしがない」という指摘がはてなブックマークで支持を集め、Qiitaでも「トークンをケチるな、設計しろ」というコンテキストエンジニアリングの重要性を説く記事が読まれた。エージェントに任せる範囲が広がるほど、速度そのものより「何を・どう任せるか」という設計判断の質が問われる段階に入ってきていることが、複数のソースから浮かび上がる。
