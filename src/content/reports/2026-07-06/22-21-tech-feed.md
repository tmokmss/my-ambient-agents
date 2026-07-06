---
title: "Tech Feed ダイジェスト（2026年7月7日）"
date: "2026-07-06T22:21"
category: "summary"
summary: "決済代行の全東信が破産・オープン画像生成AI「Krea 2」・KLabが対ドローン防衛に参入・AWSがSageMaker HyperPodにDPD追加・Ars TechnicaはClaudeの秘密トラッカー騒動など"
tags: ["ai", "aws", "security", "devops", "rust", "infra"]
---

## はてなブックマーク (テクノロジー)

- **[クレカ決済代行の全東信が破産、端末が使用不可に　負債は1259億円で今年最大──帝国データバンク](https://www.itmedia.co.jp/news/articles/2607/06/news127.html)** ([203users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/06/news127.html)) - クレジットカード決済代行大手の全東信が負債1259億円で破産し、加盟店の決済端末が一斉に使用不能になった。決済インフラを外部の一社に依存することの脆弱性が、実際にサービス停止という形で顕在化した事例。
- **[無料の画像生成AI「Krea 2」が話題　実写もアニメもこなす新勢力](https://ascii.jp/elem/000/004/416/4416343/)** ([155users](https://b.hatena.ne.jp/entry/s/ascii.jp/elem/000/004/416/4416343/)) - 画像生成AI企業Kreaが独自開発したオープンモデル「Krea 2」が、実写からアニメ系まで幅広い絵柄を高品質に生成できると話題に。ローカルPC環境で動く最高品質級のモデルとして公開直後から注目を集めている。
- **[スマホゲーのKLab、防衛産業に参入　アラブで対ドローン防衛システム導入推進へ　提携先は「非開示」](https://www.itmedia.co.jp/news/articles/2607/06/news128.html)** ([99users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/06/news128.html)) - モバイルゲーム開発のKLabが、電波妨害技術などを応用した対ドローン防衛システムをUAEで導入推進すると発表。ゲーム開発で培ったリアルタイム制御技術が、AIによる脅威識別を含む軍事分野に転用される事例として異色。
- **[mise + age で環境変数を暗号化する](https://blog.sh1ma.dev/articles/20260706_mise_age_encrypt_env/)** ([48users](https://b.hatena.ne.jp/entry/s/blog.sh1ma.dev/articles/20260706_mise_age_encrypt_env/)) - ツールバージョン管理・タスクランナーのmiseと、シンプルな暗号化ツールageを組み合わせ、dotfilesやリポジトリに環境変数を安全に含める方法を解説した記事。秘密情報をリポジトリに置きたいが平文では困るという、開発環境構築の悩みに対する軽量な解決策を示している。
- **[AIが「安全」判定キノコに猛毒　食べた少年が一時危篤、中国湖北省](https://www.asahi.com/articles/ASV762TYLV76UHBI019M.html)** ([17users](https://b.hatena.ne.jp/entry/s/www.asahi.com/articles/ASV762TYLV76UHBI019M.html)) - 中国でAI画像判定アプリが毒キノコを「食べられる」と誤判定し、食べた少年が一時危篤になったと報じられた。生成AI・画像認識モデルの誤判定が人命に直結しうる分野での安全性検証の重要性を改めて突きつける事例。

## Zenn

- **[Claude Fable 5の挙動をOpus 4.8で再現する — 「賢さ」を検証ループの工程に置き換える](https://zenn.dev/ait/articles/fable-emu-opus-harness)** - 高性能だが利用期間が限られるClaude Fable 5の挙動を、常用可能なOpus 4.8上で疑似的に再現する試みを紹介した記事。旧世代向けの細かい指示を消すべきというFable 5のプロンプト指針を逆手に取り、モデルの「賢さ」を検証ループという工程設計に置き換える発想が興味深い。
- **[スマートグラス「Even G2」でAIコーディングツールを使う方法](https://zenn.dev/karaage0703/articles/2d61434fceb867)** - スマートグラスEven G2の公式Terminal ModeやEven AIのAdd Agent機能を使い、グラス経由でAIコーディングツールを操作する3つの方法を試した記事。実用性よりロマン重視と前置きしつつ、ウェアラブルデバイスからのエージェント操作という新しい入力インターフェースの可能性を具体的に示している。
- **[ELDEN RING NIGHTREIGNのマルチがラグいのは、ハズレのSteam中継サーバーを引いているからだった](https://zenn.dev/kikurage7/articles/8b4d12fe0b7198)** - オンラインゲームのマルチプレイで生じるラグの原因を、Steamの中継サーバー（リレー）の当たり外れという切り口で突き止めた調査記事。ゲーム側の実装ではなく、間に挟まるネットワークインフラの選択が体感品質を左右するという、原因切り分けの粘り強さが光る内容。
- **[dotfiles のススメ; mise と Renovate で開発環境を安全に最新に保つ編](https://zenn.dev/himkt/articles/b811e1ea846f99)** - NixOS/macOS用の設定ファイル群をGitHubで管理する著者が、miseによるツールバージョン管理とRenovateによる自動更新を組み合わせ、開発環境を安全に最新の状態に保つ運用を紹介した記事。手動更新のサボりがちな部分を自動化で埋める実践的な工夫がまとまっている。
- **[AIエージェント時代のターミナルマルチプレクサ「herdr」にtmuxから乗り換えた](https://zenn.dev/studypocket/articles/herdr-ai-agent-multiplexer)** - 長年tmuxを使ってきた開発者が、複数のAIコーディングエージェントを並行運用しやすいターミナルマルチプレクサ「herdr」に乗り換えた経緯を紹介した記事。人間向けに設計されてきたマルチプレクサが、AIエージェントを複数走らせる用途に合わせて再設計されつつある流れがうかがえる。

## Qiita

- **[インデックスを貼ったはずなのに速度が改善されない！？](https://qiita.com/yuuudaiiiiii/items/000aca3b7916271f0e9d)** - データベースにインデックスを追加したにもかかわらずクエリ速度が改善しなかった原因を調査した記事。EXPLAINの読み方だけでは見落としがちな、オプティマイザの判断や統計情報の古さといった落とし穴を扱っていると見られる。
- **[『めっちゃカメレオン』のサーバー代0円ってまじ？](https://qiita.com/i-icc/items/fb02ae5fa0848f4c511e)** - 個人開発サービスのインフラ費用をゼロ円に抑えた運用手法を紹介する記事。無料枠やサーバーレス構成を活用してランニングコストを切り詰める、個人開発者向けの実践的なコスト最適化の工夫が語られている。
- **[AI Agent 時代は「うまく指示する」より「未知を見つける」が大事](https://qiita.com/aktsmm/items/24e1db3b2930d56ba98c)** - AIエージェントを使いこなす上で、プロンプトを精緻に書く技術よりも、想定していなかった課題や抜け漏れを発見する能力の方が重要になってきているという主張の記事。エージェントに「何を指示するか」から「何を見つけさせるか」へ視点が移りつつあることを論じている。
- **[Deep Data SecurityとDatabase Vaultを組み合わせた多層アクセス制御](https://qiita.com/Western24/items/6bfef60a350fcc201f72)** - データベースの機微データ保護機能Deep Data Securityと、特権ユーザーの操作制限機能Database Vaultを組み合わせた多層防御のアクセス制御設計を解説した記事。単一の機能に頼らず複数の防御層を重ねるデータベースセキュリティの実践知見。
- **[【Claude Code】Stop Hook で Claude に対するイライラを減らそう](https://qiita.com/wataru86/items/6956026c7a8c4cb8945e)** - Claude CodeのStop Hookを活用し、意図しないタイミングで作業が止まってしまうストレスを軽減する設定方法を紹介した記事。エージェントの挙動そのものより、フックによる運用面の細かいチューニングで体感を改善する実践的なTips。

## AWS 新着

- **[Amazon SageMaker HyperPod now supports disaggregated prefill and decode](https://aws.amazon.com/about-aws/whats-new/2026/7/amazon-sagemaker-hyperpod-dpd/)** (2026-07-06) - LLM推論のプレフィル（プロンプト処理）とデコード（トークン生成）を別々のインスタンス群に分離して実行できる「Disaggregated Prefill and Decode」がSageMaker HyperPodに追加された。計算特性の異なる2フェーズを別々にスケールできるようになり、推論コストと処理速度の両立を狙える。
- **[AWS Certificate Manager now supports the ACME protocol for public certificates](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-certificate-manager-acme/)** (2026-07-06) - ACMがACMEプロトコルに対応し、有効期間45日のパブリックTLS証明書をACMEv2対応の任意のクライアントから発行できるようになった。Let's Encrypt的な短命証明書の自動更新フローを、AWSのマネージドPKI基盤上でそのまま使えるようになる。
- **[Amazon EC2 Dedicated Hosts now support AMD SEV-SNP](https://aws.amazon.com/about-aws/whats-new/2026/07/ec2-amd-sev-snp-dedicated-hosts/)** (2026-07-02) - EC2 Dedicated HostsがAMDのSEV-SNP（機密コンピューティング向けのメモリ暗号化・改ざん検知技術）に対応した。専有ハードウェア上でOSやハイパーバイザーからもメモリ内容を隠蔽したい、金融・医療分野などの機密ワークロードの選択肢が広がる。
- **[CloudWatch Application Signals now automatically captures errors, performance anomalies, and deployment events](https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-service-events/)** (2026-07-06) - CloudWatch Application Signalsが、例外・レイテンシの異常・デプロイイベントのスナップショットを自動で捕捉するようになった。障害発生時に手動でログを漁る前に、関数レベルの性能データとデプロイ履歴が自動的に紐付けられている状態になる。
- **[Amazon OpenSearch Service optimized for log analytics](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-opensearch-service-optimized-log-analytics/)** (2026-07-01) - ログ分析ワークロード専用に最適化された新エンジンがOpenSearch Serviceに追加され、社内ベンチマークで最大4倍の価格性能比を実現したという。大量のログを扱うOpenSearchクラスタのコストを、汎用エンジンのままより大きく圧縮できる可能性がある。

## Lobsters

- **[sneakerweb](https://sneakerweb.org/)** (55pt) - DNSサーバーもドメイン登録も使わず、Webサイトを物理メディア経由でユーザー間に転送し合う「並行Web」プロトコル、sneakerwebを紹介するプロジェクト。集めたサイトは通常のブラウザでオフライン閲覧でき、`.snk`ファイルとして他人と共有できる、中央インフラに依存しないWeb配布の実験的な試み。
- **[Mr. Baby Paint & accidentally discovering a new cellular automata](https://tekstien-marginaalien-keskus.aalto.fi/residenssi/heikki/blog/004-december-2/)** (36pt) - お絵描きツールを自作している過程で偶然新しいセルオートマトンを発見したという創作記録。意図した機能を実装しようとした副産物として、予期しない生成パターンに出会う個人開発ならではの発見の面白さが語られている。
- **[Web Security docs on MDN](https://openwebdocs.org/content/posts/security-docs-sovereign-tech-agency/)** (27pt) - MDNのWebセキュリティ関連ドキュメントの拡充が、ドイツ政府系のSovereign Tech Agencyの資金提供によって進められていることを伝えるOpen Web Docsの投稿。公的資金でオープンなWeb標準ドキュメントの空白地帯を埋めていく取り組みを紹介している。
- **[PREEMPT_NONE Is Dead; Your Postgres Probably Doesn't Care](https://thebuild.com/blog/preempt_none-is-dead-your-postgres-probably-doesnt-care/)** (18pt) - LinuxカーネルのプリエンプションモデルからPREEMPT_NONEが廃止される変更が、PostgreSQLの性能にどの程度影響するかを検証した記事。カーネルのスケジューリング変更が実際のDBワークロードにどこまで波及するかを、実測をもとに冷静に評価している。
- **[Caught a .git/config crawler](https://bruceediger.com/posts/git-config-spider/)** (16pt) - 自作のWebサイトジェネレータが、`.git/config`ファイルを狙ったクローラーのアクセスを捕捉した記録。gitがバージョン管理システムとして広く普及した結果、公開リポジトリの設定情報を漁ろうとする自動化されたスキャンが日常的に飛んでくる実情を具体的なログとともに示している。

## dev.to

- **[I needed cross-platform screen capture in Rust, so I built pinray](https://dev.to/agasta/i-needed-cross-platform-screen-capture-in-rust-so-i-built-pinray-4gi)** - Rustでクロスプラットフォームの画面キャプチャを実現しようとしたところ、既存クレート(scap、xcap、waycap-rs)がどれも要件を満たさなかったため、自作ライブラリ「pinray」を作った経験を綴った記事。OS間でAPIが大きく異なる画面キャプチャという地味だが厄介な領域の実装上の苦労が具体的に語られている。
- **[Hardening my own Nmap web UI: the security holes I shipped, and what actually saved me](https://dev.to/dipesthapa/i-shipped-an-unauthenticated-rce-in-my-own-port-scanner-heres-the-whole-chain-and-how-i-killed-35kl)** - Nmapベースのポートスキャナーに独自のWeb UIを被せたところ、認証なしでリモートコード実行が可能な脆弱性を自ら作り込んでしまった顛末と、その修正過程を赤裸々に公開した記事。FastAPIバックエンドとReactダッシュボード、バックグラウンドジョブというよくある構成に潜む攻撃経路を具体的に解説している。
- **[How I Cut My LLM API Bill by 40x: A Freelancer's Migration Story](https://dev.to/truelane/how-i-cut-my-llm-api-bill-by-40x-a-freelancers-migration-story-2n9)** - 月額487ドルに膨れ上がったOpenAIのAPI請求に驚いたフリーランス開発者が、モデル選定やキャッシュ戦略の見直しでコストを40分の1に削減した移行記録。LLM APIコストが個人開発者の採算を直撃する規模になっている実情と、その具体的な削減手法を扱っている。
- **[Stop guessing what to check in a PR — 51 items that actually matter (free, interactive, MIT)](https://dev.to/projekta2/stop-guessing-what-to-check-in-a-pr-51-items-that-actually-matter-free-interactive-mit-283o)** - 経験年数が長くても質が上がりにくいコードレビューという営みに対し、実際に効果があった51項目をチェックリスト化してMITライセンスで無料公開した記事。属人的になりがちなレビュー観点を、再利用可能な形式知として共有する試み。
- **[Building Milestone-Escrow Crowdfunding on Soroban](https://dev.to/berkebey01/building-milestone-escrow-crowdfunding-on-soroban-5hc)** - StellarのスマートコントラクトプラットフォームであるSorobanを使い、マイルストーン達成ごとに資金を段階的に解放するエスクロー型クラウドファンディングを構築した技術解説。複数のコントラクトが連携してXLMをカストディし、制作進捗に応じて資金を放出する設計が具体的に示されている。

## TechCrunch

- **[Vercel CEO Guillermo Rauch on the fight to split off models from agents](https://techcrunch.com/2026/07/06/vercel-ceo-guillermo-rauch-on-the-fight-to-split-off-models-from-agents/)** - VercelのCEOギレルモ・ラウク氏が、本番運用を最適化する際には結局モデル単体よりも価格性能比で見て選ぶべきだと語り、モデルとエージェント基盤を切り離して考える必要性を説いた。特定モデルへの依存を避け、エージェント側のアーキテクチャを独立して評価すべきという実務的な視点が示されている。
- **[Every major tech layoff in 2026 that has name-checked AI](https://techcrunch.com/2026/07/06/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/)** - 2026年に入って発表された、AIを理由として名指しした主要テック企業のレイオフを時系列でまとめた追跡記事。個別のニュースでは見えにくい、AIによる人員削減の規模と広がりを俯瞰できる内容になっている。
- **[If you use Google, you're training its AI. Here's how to opt out.](https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out/)** - Googleのプライバシー設定変更により、ユーザーのデータがより広くAI学習に利用されるようになったことを伝え、そのオプトアウト手順を解説した記事。日常的に使うサービスが気づかぬうちにAI学習データの供給源になっている実態への注意喚起。
- **[Reddit is using LLMs to solve a problem LLMs largely created](https://techcrunch.com/2026/07/06/reddit-is-using-llms-to-solve-a-problem-llms-largely-created/)** - LLMによって大量生成されたスパムやボット投稿に対抗するため、Reddit自身がLLMを使ってコンテンツの選別を行っているという皮肉な状況を報じた記事。AIが生んだ問題をAIで消火するという構図が、プラットフォーム運営の新しい常態になりつつあることを示している。
- **[Canadian spy agency says it hacked drug traffickers, extremists, and a ransomware gang last year](https://techcrunch.com/2026/07/06/canadian-spy-agency-says-it-hacked-drug-traffickers-extremists-and-a-ransomware-gang-last-year/)** - カナダの情報機関が、年次報告書の中で麻薬密売組織や過激派、ランサムウェアグループへのハッキング作戦を実施したと公表した。国家機関による攻撃的サイバー作戦の実態が、当局自らの報告書という形で明らかにされた点が注目される。

## Ars Technica

- **[Secret Claude tracker shocks users after Anthropic's anti-surveillance stance](https://arstechnica.com/tech-policy/2026/07/anthropic-outed-for-claude-tracker-that-secretly-monitored-chinese-users/)** - 監視技術に批判的な立場を掲げてきたAnthropicが、中国のユーザーを対象にひそかにトラッカーを仕込んでいたとして批判されている。担当エンジニアは「実験は終了した」と説明しているが、AI企業自身のプライバシー姿勢と実際の運用実態のギャップが問われる事案。
- **[UK regulator warns of "arms race" to keep up with AI use in financial services](https://arstechnica.com/ai/2026/07/uk-regulator-warns-of-arms-race-to-keep-up-with-ai-use-in-financial-services/)** - 英金融行動監視機構(FCA)の当局者が、個人の資産運用判断にAIを使う人が増える中、規制側の監視能力がAI活用の速度に追いつけない「軍拡競争」状態にあると警鐘を鳴らした。金融分野でのAI活用拡大に対し、監督権限の強化を求める議論が具体化している。
- **[F1 in Britain: Automated software to blame for crushing expectations](https://arstechnica.com/cars/2026/07/f1-in-britain-automated-software-to-blame-for-crushing-expectations/)** - F1イギリスGPで期待外れの展開になった原因が、セーフティカー導入判断などを担う自動化ソフトウェアにあったと報じられた。人間の判断を補助するはずの自動化システムが、かえって競技のドラマ性を損なう結果になった事例として取り上げられている。
- **[Katalyst's satellite rescue mission is now in pursuit of NASA's Swift](https://arstechnica.com/space/2026/07/katalysts-satellite-rescue-mission-is-now-in-pursuit-of-nasas-swift/)** - 衛星修理ミッションを手がけるKatalystの宇宙機Linkが、NASAの観測衛星Swiftとのランデブーに向けて追跡飛行を続けていると報じられた。軌道上での衛星修理・延命サービスという新しい商業宇宙ビジネスの実証が進んでいる様子を伝えている。
- **[The incredible shrinking Xbox: Five studios, 3,200 employees let go](https://arstechnica.com/gaming/2026/07/the-incredible-shrinking-xbox-five-studios-3200-employees-let-go/)** - Microsoftがゲーム部門の約20%にあたる5つのスタジオ・3200人規模の人員削減を発表し、主力フランチャイズへの集中に舵を切ったと報じられた。TechCrunchが伝えた「AIを理由にしたレイオフ」の潮流の中でも、具体的な規模と対象が明示された事例として位置づけられる。

## 注目トピック

今回のダイジェストで際立つのは、AIによる「判断の自動化」がもたらす実害と、それを検証・監督する仕組みへの関心がセットで浮上している点だ。中国湖北省では画像判定AIが毒キノコを「安全」と誤判定し少年が一時危篤になったと報じられ、英国ではFCAの当局者が金融分野でのAI活用に規制が追いつかない「軍拡競争」状態にあると警鐘を鳴らした。Ars TechnicaのF1記事も、セーフティカー判断を担う自動化ソフトウェアが競技結果を左右してしまった事例として同じ文脈にある。AIエージェントの実装力そのものより、判断を委ねた先でどう誤りを検知し監督責任を果たすかが、分野を問わず共通の課題として浮かび上がっている一日だった。

もう一つ見過ごせないのが、Ars Technicaが報じたAnthropic自身の「秘密トラッカー」騒動だ。監視技術に批判的な立場を掲げてきた企業が、中国ユーザーを対象にひそかにトラッキングを行っていたとされる件は、AI企業が説く理念と実際の運用との間にギャップが生じうることを示す事例として重い。同時にTechCrunchでは、AIを理由にした2026年のレイオフをまとめた追跡記事とともに、Microsoftがゲーム部門の5スタジオ・3200人を削減したことが伝えられ、投資と人員配置の両面でAI優先の再編が進んでいることがうかがえる。決済代行大手・全東信の破産による端末停止や、`.git/config`を狙う自動クローラーの捕捉といった地味な話題も、便利さの裏にある単一障害点や日常的な攻撃の存在を静かに思い出させる内容だった。
