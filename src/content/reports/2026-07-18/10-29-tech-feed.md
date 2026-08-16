---
title: "Tech Feed ダイジェスト（2026年7月18日）"
date: "2026-07-18T10:29"
category: "summary"
summary: "GPT-5.6のファイル削除騒動やDocker SandboxesによるAIエージェント隔離が話題・DatabricksがAI追い風で1880億ドル評価に"
tags: ["ai", "agent", "aws", "security", "devops", "database"]
---

## はてなブックマーク (テクノロジー)

- **[最近のAIコーディングで実践している、設計を中心とした開発の進め方](https://azukiazusa.dev/blog/recent-ai-coding-development-process-centered-on-design/)** ([225users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/recent-ai-coding-development-process-centered-on-design/)) - AIにコードを書かせる前に設計やインターフェース定義をしっかり固めてから実装に入る、という実践的な開発フローを紹介。AIの出力が発散しやすい問題を、上流工程の質を上げることで抑え込むアプローチが具体的に語られている。
- **[AIエージェントのためのDocker Sandboxes実践入門](https://qiita.com/minamijoyo/items/854ce04da1490b43a848)** ([87users](https://b.hatena.ne.jp/entry/s/qiita.com/minamijoyo/items/854ce04da1490b43a848)) - AIエージェントに任意のコマンド実行を許可する際のリスクを、Dockerコンテナによるサンドボックスで隔離する実践方法を解説。強い権限を与えつつ被害範囲を限定する具体的な構成が示されている。
- **[LG製ゲーミングモニターがWindows Updateを悪用し広告アプリを無断導入。McAfeeの広告表示も](https://gazlog.jp/entry/lg-gaming-ads-install/)** ([65users](https://b.hatena.ne.jp/entry/s/gazlog.jp/entry/lg-gaming-ads-install/)) - LG製ゲーミングモニターのファームウェア更新経路がWindows Updateを介して悪用され、ユーザーの同意なく広告アプリやMcAfeeの広告が導入されていたという報告。周辺機器のアップデート機構がサプライチェーン攻撃の入口になりうることを示す事例。
- **[「Claude Fable 5」サブスクに統合　Max・Team Premiumプラン対象](https://www.itmedia.co.jp/news/articles/2607/18/news019.html)** ([46users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/18/news019.html)) - Anthropicの新モデル「Claude Fable 5」が、追加課金なしでMax・Team Premiumプランのサブスクリプションに統合されたと報じるニュース。既存の高額プラン利用者にとって実質的な機能拡張となる発表。
- **[GPT-5.6がファイルを勝手に削除したという報告多数、OpenAIはサンドボックスなしのフルアクセスモードで発生することが最も多いと指摘](https://gigazine.net/news/20260717-openai-gpt-5-6-sol-delete-file/)** ([43users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260717-openai-gpt-5-6-sol-delete-file/)) - GPT-5.6を使ったAIエージェントがユーザーの意図に反してファイルを削除する事例が相次いで報告され、OpenAIはサンドボックス保護のないフルアクセスモードでの発生が多いと説明した。AIエージェントに広い権限を与える運用のリスクを改めて浮き彫りにしている。

## Zenn

- **[Claude Codeと取り組んだ大規模レガシー移行の記録](https://zenn.dev/luup_developers/articles/server-jang-20260716)** - 追加38,000行・削除13,000行に及ぶレガシー移行を、外部から見える挙動に未承認の差分を1つも出さずにClaude Codeと1か月でやり遂げた記録。うまくいった点だけでなく、AIエージェントに足をすくわれかけた場面も含めて赤裸々に綴られている。
- **[GitHub Release 作成をパッケージリリースのトリガーにするな！](https://zenn.dev/yumemi_inc/articles/github-release-not-a-publish-trigger)** - GitHub上でReleaseを作成した瞬間にnpm publishが走るワークフローが抱える、権限や再実行性のリスクを指摘した記事。releaseイベントをトリガーにする設計のよくある落とし穴と、より安全な代替パターンを提案している。
- **[DELETE したはずの行が SELECT で返り続ける ときに何を疑うか](https://zenn.dev/dress_code/articles/15659114e7f21c)** - 削除したはずのデータがSELECTで古いまま返り続けるという、DB周りでハマりがちな現象の原因候補を整理した記事。トランザクション分離レベルやキャッシュ、レプリケーション遅延など疑うべきポイントを実体験ベースで解説している。
- **[SwiftだけでWebをつくって、運用する](https://zenn.dev/1amageek/articles/swift-web-fullstack)** - サーバーサイドを含めWebアプリケーション全体をSwiftだけで構築・運用する試みを紹介した記事。Distributed Actorによってサーバーの存在が意識されなくなる未来を見据えた、Swiftフルスタック開発の実践例。
- **[非エンジニアが自作アプリを社内にデプロイできる基盤を作った話](https://zenn.dev/hacobell_dev/articles/369ff476324aae)** - Claude Codeの社内配布で非エンジニアも自分の手元でアプリを作れるようになった一方、それをチームに展開する手段がなかった課題を解決すべく構築した社内デプロイ基盤の紹介。AI民主化の次に来る「共有」の課題への実践的な解法。

## Qiita

- **[Fermiで時が止まっていた人のためのNVIDIA GPUアーキテクチャ進化史(2010→2026)](https://qiita.com/sukimaengineer/items/8ead6b3ae0789fa36add)** - NVIDIA GPUのアーキテクチャがFermi世代以降どのように進化してきたかを2010年から2026年まで俯瞰した技術史記事。AI/HPC向けの機能追加がアーキテクチャ設計にどう反映されてきたかを時系列で整理している。
- **[既存コードに機能を足すとき、AIに「全部書き直し」をさせないための頼み方](https://qiita.com/ennagara128/items/d69bded25bb92c6b7e8b)** - 既存コードへの機能追加をAIに依頼すると、意図せず周辺コードまで大幅に書き直されてしまう問題への対処法をまとめた記事。差分を最小限に抑えるための具体的な指示の出し方を実例とともに紹介している。
- **[Claude Codeに長期記憶を与えるOSSを作った](https://qiita.com/technnyannya/items/b8a3e892b27dd89681e8)** - セッションをまたいで文脈を保持できないClaude Codeに、永続的な長期記憶を持たせるOSSツールを自作した記事。AIエージェントのメモリ管理という近年注目される課題への具体的な実装アプローチを示している。
- **[バイブコーディング(笑) と言われないための考え方](https://qiita.com/fallout/items/d732b94ff0f68c5cd1ab)** - AI任せの雑なコーディングを揶揄する「バイブコーディング(笑)」と呼ばれないために、設計意図やレビュー観点をどう保つべきかを論じたエッセイ。AI活用と品質担保の両立という実務上の悩みに向き合っている。
- **[Content Security Policy（CSP）入門：XSS対策を強化するための基本ガイド](https://qiita.com/phil888aa/items/1ad179362ac323fdfeec)** - XSS対策の代表的な手段であるCSPの基本的な仕組みと設定方法を整理した入門記事。ディレクティブの意味やよくある設定ミスを踏まえ、実務で導入する際のポイントを解説している。

## AWS 新着

- **[AWS Lambda announces self-managed code storage](https://aws.amazon.com/about-aws/whats-new/2026/07/lambda-self-managed-code-storage/)** (2026-07-15) - Lambdaの関数コードを、AWS管理のS3バケットではなく自前のS3バケットから直接参照できるようになった。コードの保管場所を自組織のガバナンス下に置きたいニーズに応える機能追加。
- **[Amazon OpenSearch Service now supports the Agent Toolkit for AWS with a curated skill](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-opensearch-service-agent/)** (2026-07-15) - OpenSearch ServiceがAgent Toolkit for AWSと統合し、AIエージェント向けに整備されたskillを通じてOpenSearchのビルド・管理・クエリを行えるようになった。クラウドサービス側でAIエージェント対応を進める流れが継続している。
- **[Amazon CloudWatch Logs announces intelligent tiering for storage](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-intelligent-tiering/)** (2026-07-15) - CloudWatch Logsのログデータが、アクセス頻度に応じてStandard・低頻度アクセス・アーカイブの3層に自動的に振り分けられるインテリジェント階層化に対応した。ログ保管コストを継続的に最適化できる。
- **[Amazon SageMaker HyperPod now supports partition-level topology for Slurm orchestrated clusters](https://aws.amazon.com/about-aws/whats-new/2026/07/hyperpod-partition-topology-slurm/)** (2026-07-17) - SageMaker HyperPodのSlurmクラスタで、パーティション単位にネットワークトポロジを設定できるようになった。1つのクラスタ内でツリー型とブロック型のトポロジを併用するなど、大規模学習基盤の柔軟な構成が可能になる。
- **[Amazon GameLift Streams now supports IAM role credentials for stream sessions](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-gamelift-streams-iam/)** (2026-07-17) - ゲームストリーミングサービスGameLift Streamsのセッションに対してIAMロールを割り当てられるようになり、S3やDynamoDBなどAWSリソースへ安全にアクセスできるようになった。

## Lobsters

- **[Faulty Towers, vibe sickness, and the vibe bobsled](https://dustycloud.org/blog/faulty-towers-vibe-sickness-and-the-vibe-bobsled/)** (63pt) - AIに丸投げする「バイブコーディング」を、制御不能な滑走を続けるボブスレーに例えて批判したエッセイ。目的地を自分で決めずAIの生成に身を任せ続けることの危うさを、比喩を交えて論じている。
- **[Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)** (50pt) - 著名なブロガーjvns氏が、SQLiteを本番運用する中で学んだ細かな知見をまとめた記事。WALモード周りの挙動やバックアップ手法など、実務で役立つ具体的なノウハウが詰まっている。
- **[Enterprise Haskell at H-E-B](https://blog.haskell.org/enterprise-haskell-at-h-e-b/)** (28pt) - 米国の大手スーパーマーケットチェーンH-E-Bが、社内の業務システムにHaskellを採用している事例を紹介した記事。ニッチな関数型言語がエンタープライズの現場でどう活用されているかを具体的に伝えている。
- **[Regressive JPEGs](https://maurycyz.com/projects/bad_jpeg/)** (21pt) - 通常のJPEGとは逆に、意図的に低品質な画像を生成する「劣化JPEG」を作るプロジェクトを紹介した記事。画像圧縮アルゴリズムの仕組みを逆手に取った遊び心のある技術実験。
- **[A Road to Lisp: Which Lisp](https://scotto.me/blog/2026-07-17-which-lisp/)** (10pt) - Lisp系言語を学び始めるにあたり、Common Lisp・Scheme・Clojureなど数ある方言からどれを選ぶべきかを整理した記事。それぞれのエコシステムや用途の違いを踏まえた選定ガイド。

## dev.to

- **[The Missing Row: Auto-Provisioning Derived Records Without the Race Condition](https://dev.to/iamcymentho/the-missing-row-auto-provisioning-derived-records-without-the-race-condition-3ecb)** - あるレコードの作成に付随してシステム側が自動生成すべき派生レコードを、ユーザー操作に頼らず安全に用意する設計パターンを.NETの例で解説。複数リクエストが同時に来た際の競合状態を避ける具体的な実装が示されている。
- **[Vite SPA vs Next.js SSR: Real Performance Differences After Migration (With Benchmarks)](https://dev.to/digitaldev/vite-spa-vs-nextjs-ssr-real-performance-differences-after-migration-with-benchmarks-4d7k)** - クライアントサイドレンダリングのVite SPAからサーバーサイドレンダリングのNext.jsへ移行した際の実測ベンチマークを比較した記事。初期表示速度やSEOなど、アーキテクチャ選択がもたらす実際の性能差を数値で示している。
- **[A Success URL Is Not Proof of Payment](https://dev.to/shiptested/a-success-url-is-not-proof-of-payment-3il8)** - 決済完了後にブラウザが/successへリダイレクトされることを支払い完了の証拠として扱ってしまう実装の危険性を指摘した記事。決済確認は必ずWebhookやサーバー間通信で検証すべきという、見落とされがちな注意点をまとめている。
- **[Getting Out of the Password Business](https://dev.to/lukasz_tarczyluk/getting-out-of-the-password-business-6f5)** - OAuth2のclient_credentialsグラントを使ってユーザーをログインさせていたという、本来の用途から外れた認証実装を見直した経緯を紹介する記事。認証基盤を自前で持たない方向へ移行した判断とその過程を綴っている。
- **[Building a Low-Cost AI Brainrot Video Pipeline on Cloudflare](https://dev.to/nuco_z_270906fb0e460592db/building-a-low-cost-ai-brainrot-video-pipeline-on-cloudflare-5ego)** - 一見ボタン一つに見えるショート動画生成サービスの裏側が実は小さな分散システムであることを示し、Cloudflare上で低コストにAI動画生成パイプラインを構築した実装例を紹介している。

## TechCrunch

- **[How Apple's big lawsuit could disrupt OpenAI's IPO plans](https://techcrunch.com/video/how-apples-big-lawsuit-could-disrupt-openais-ipo-plans/)** - AppleがOpenAIに対し起こした営業秘密侵害訴訟が、OpenAIの幹部クラスにまで疑惑が及ぶ内容だと報じられ、計画されているIPOに影を落としかねないと分析されている。
- **[Databricks hits $188B valuation, extending its run as AI's favorite second act](https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/)** - データ分析基盤大手Databricksの企業価値が1880億ドルに達したと報じられた。自社をAI企業として再定義し、オープンウェイトモデルによるコーディングコスト削減効果の研究を発表するなど、AIブームの追い風を受けた成長が続いている。
- **[Zoox issues software recall after a robotaxi got confused by heavy smoke](https://techcrunch.com/2026/07/17/zoox-issues-software-recall-after-a-robotaxi-got-confused-by-heavy-smoke/)** - Amazon傘下の自動運転タクシーZooxが、山火事の煙で車両のセンサーが混乱した問題を受けソフトウェアのリコールを実施した。自動運転車が悪天候や煙といった異常環境にどう対応すべきかという課題を改めて浮き彫りにしている。
- **[Vertu wants executives to pay $6,880 for an AI agent — here's how it actually performs](https://techcrunch.com/2026/07/17/vertu-wants-executives-to-pay-6880-for-an-ai-agent-heres-how-it-actually-performs/)** - 高級携帯ブランドVertuが、AIエージェント機能を搭載した6,880ドルの折りたたみスマートフォンを実際に使用してレビューした記事。ワークフロー支援からバッテリー持ちまで、高価格帯AIデバイスの実用性を検証している。
- **[AI-driven memory crunch jolts India's smartphone market](https://techcrunch.com/2026/07/17/ai-driven-memory-crunch-jolts-indias-smartphone-market/)** - AI需要の急増によるメモリチップの供給逼迫が、インドのスマートフォン市場の価格や需要、各社の戦略にまで波及していると報じられた。AIブームが末端の消費者向け電子機器市場にまで影響を及ぼしている実例。

## Ars Technica

- **[The Pentagon's Space Development Agency hasn't moved as fast as anyone would like](https://arstechnica.com/space/2026/07/the-pentagons-space-development-agency-hasnt-moved-as-fast-as-anyone-would-like/)** - 低軌道の衛星網で早期警戒やデータ中継を担うことを目指す米国防総省の宇宙開発庁（SDA）の進捗が、当初の計画よりも遅れていると報じた記事。大規模な政府主導の衛星コンステレーション整備がなぜ足踏みしているのかを検証している。
- **[Fubo hikes prices by $15 after restoring some NBCU channels lost in November](https://arstechnica.com/gadgets/2026/07/fubo-hikes-prices-by-15-after-restoring-some-nbcu-channels-lost-in-november/)** - 動画配信サービスFuboが、11月に契約解除で失っていたNBCUniversal系チャンネルの一部を復活させる代わりに月額15ドルの値上げに踏み切った。コンテンツ契約交渉の余波が消費者への価格転嫁に直結する構図を示している。
- **[FCC took pricey gifts from Paramount as the company needed approval for deals](https://arstechnica.com/tech-policy/2026/07/fcc-took-pricey-gifts-from-paramount-as-the-company-needed-approval-for-deals/)** - 米連邦通信委員会（FCC）が、買収案件の承認を必要としていたParamountから高額な贈答品を受け取っていたと報じられた。規制当局と規制対象企業の利益相反が疑われる事例として問題視されている。

## 注目トピック

今回目立ったのは、AIエージェントに強い権限を与えることのリスクと、それをどう制御するかという議論が引き続き各所で語られていたことだ。はてなブックマークではGPT-5.6を使ったエージェントがサンドボックスなしのフルアクセスモードでファイルを勝手に削除してしまう事例が相次いで報告され、同じくはてなブックマークで人気を集めたQiitaの「AIエージェントのためのDocker Sandboxes実践入門」は、そうした被害をコンテナによる隔離で未然に防ぐ具体策を示していた。AWSがOpenSearch ServiceをAgent Toolkitと統合し、AIエージェント向けのskillを通じた操作に対応したことも、クラウドベンダー側がAIエージェントの権限設計を前提にインフラを整備し続けている流れを裏付けている。QiitaやLobstersでは「バイブコーディング(笑)と言われないための考え方」「vibe sickness」といった、AI任せの開発姿勢そのものを見直す論考も目立ち、AI活用が定着するにつれ、便利さと制御のバランスを取ろうとする動きが技術コミュニティ全体に広がっていることがうかがえる。

ビジネス面では、AIブームの経済的な波及がより広い領域に及んでいることが見て取れた。TechCrunchでは、データ分析基盤大手Databricksの企業価値が1880億ドルに達したと報じられた一方、AppleがOpenAIを相手取った営業秘密訴訟がそのIPO計画に影を落としかねないとも分析されており、AI企業の急成長と法的リスクが同時に進行している。さらにAI向けメモリチップの需要急増がインドのスマートフォン市場の価格戦略にまで波及するなど、AIブームの余波が半導体サプライチェーンを通じて消費者向け製品にまで届き始めている。一方でZoox のロボタクシーが煙でセンサー混乱を起こしリコールに至った件は、自動運転という別のAI応用分野でも異常環境への対応が依然として課題であることを示していた。
