---
title: "Tech Feed ダイジェスト（2026年9月1日）"
date: "2026-09-01T14:09"
category: "summary"
summary: "npmサプライチェーン攻撃の対応記録とISPのDNSブロッキング顛末など、実際に手を動かした調査・対応の記録が目立った一日"
tags: ["security", "aws", "ai", "agent", "rust", "javascript", "networking"]
---

## はてなブックマーク (テクノロジー)

- **[J:COMを使っているとPlumeルーターによってDNSブロッキングされる可能性がある 18.204.152.241 問題の顛末](https://debiru.hatenablog.com/entry/20260831/jcom-plume-dns-blocking)** ([250users](https://b.hatena.ne.jp/entry/s/debiru.hatenablog.com/entry/20260831/jcom-plume-dns-blocking)) - ISP提供のPlumeルーターが特定の宛先へのDNSクエリをブロックしていた事象を、パケットキャプチャなどで実際に切り分けて原因を突き止めた調査記録。家庭用ルーターがユーザーの知らないところで通信を検閲しうるという、ネットワーク層のトラブルシューティング事例として読み応えがある。
- **[さくら136万件漏えい可能性、対象者へ通知メール続々](https://www.itmedia.co.jp/news/article/2609/01/2000001017/)** ([28users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2609/01/2000001017/)) - さくらインターネット関連サービスで約136万件の情報漏えいの可能性が発覚し、対象者への通知が進んでいると報じるニュース。国内クラウド事業者のインシデントとして、影響範囲の大きさが注目されている。
- **[Googleが売上や天気など複数のデータから未来を予測するAI「TimesFM-3」を公開、追加学習なしで予測可能](https://gigazine.net/news/20260901-google-timesfm-3/)** ([27users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260901-google-timesfm-3/)) - Googleが時系列予測に特化した基盤モデルTimesFM-3を公開。追加学習（ファインチューニング）なしでも売上・天気など多様な時系列データにゼロショットで予測を適用できる点が特徴で、時系列予測分野でも基盤モデル化が進んでいることを示している。
- **[GoogleがuBlock Originを含むManifest V2拡張機能をChromeウェブストアから削除](https://gigazine.net/news/20260901-manifest-v2-extensions/)** ([17users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260901-manifest-v2-extensions/)) - Chrome拡張機能の新仕様Manifest V3への移行に伴い、旧仕様のManifest V2で作られたuBlock Origin等の拡張機能がウェブストアから削除されたと報じる記事。ブラウザ拡張の権限モデル変更がエコシステムに与える影響を具体的に示す事例。
- **[Google Cloudのセキュリティ強化を爆速で！ - Google Cloud minimum viable secure platformのススメ](https://nealle-dev.hatenablog.com/entry/2026/09/01/180204)** ([19users](https://b.hatena.ne.jp/entry/s/nealle-dev.hatenablog.com/entry/2026/09/01/180204)) - Google Cloud環境で最低限押さえるべきセキュリティ設定を「minimum viable secure platform」という考え方で整理し、短期間で実装するための具体的な手順をまとめた記事。

## Zenn

- **[自作npmパッケージにマルウェアを公開されたときにやったこと](https://zenn.dev/7nohe/articles/npm-malware-incident-response)** - リリースワークフローの不備を突かれ、管理するnpmパッケージに悪意あるバージョンが10個公開されたサプライチェーン攻撃の対応記録。インストールした利用者への注意喚起に加え、到達可能な認証情報（npm・GitHubトークン、SSH鍵、クラウドのアクセスキー等）を全てローテーションすべきと具体的に呼びかけている。
- **[会話セッションを邪魔せずに Claude Code / Codex / Cursor を外部イベントで動かすCLIの作り方まとめ](https://zenn.dev/coji/articles/artifactshare-preview-claude-codex-cursor)** - ブラウザ上でファイルの要素をクリックして指摘を書くと、Claude Code・Codex・Cursorがその場でファイルを修正するCLIツールの実装解説。既存のAIエージェントとの対話セッションを邪魔せず、外部イベントから修正を差し込む仕組みをローカル完結で作った点が実践的。
- **[Google ADK・Microsoft Agent Framework・Amazon Strands の違いを偽のモデルサーバで測ってみた](https://zenn.dev/acntechjp/articles/930d899e62943e)** - 3大クラウドが出す競合するエージェントSDKを「同じHello Worldを書いて記法を比べる」次元ではなく、偽のモデルサーバーを立てて各SDKが勝手に注入するプロンプト量や会話履歴の再送量を実測比較した記事。選定の決定打となる定量データを提供している。
- **[Spannerのback joinを読み解く](https://zenn.dev/kauche/articles/23c490c3872f77)** - Spannerがsecondary indexで行を見つけた後にベーステーブルへ引き直すback joinの動作原理を解説。インデックスを使っていても応答時間が改善しないケースの原因と、back joinの発生条件・削減方法を整理している。
- **[数億の画像を溜めるS3のコストを、ストレージクラス使い分けでコスト削減する](https://zenn.dev/dely_jp/articles/22a2c10b2e130d)** - 溜まり続ける画像バケットのS3ストレージコストを、フォルダ（プレフィックス）ごとのアクセスパターンに応じてストレージクラスを使い分けることで約55%削減した事例。実際のコスト削減率を伴う具体的な最適化手法として参考になる。

## Qiita

- **[Claude Code でモデルを切り替えると、そのターンだけ書き直しが287倍](https://qiita.com/jqit_suwa/items/5fe930eb46d064b3da06)** - `/model` でモデルを切り替えた際に何が起きているかを、Claude Code 2.1.251で見えるようになったプロンプトキャッシュの数字を使って実測。キャッシュが効いているセッションの途中でモデルを切り替えると、そのターンの書き直しコストが287倍に跳ね上がることを定量的に示している。
- **[900件のテストが緑でも、本番では壊れる──LLM製プロダクトの品質保証で学んだこと](https://qiita.com/tanabata-kitajima/items/89edab6694989422af69)** - 実装もテストもLLMに書かせ、生成とは別系統のLLMにレビューさせる体制でDiscord常駐チャットボットを開発・運用した記録。テスト件数をMVP時点367件から現在1000件まで積み増しても、8月下旬に本番障害が発生したという、テストカバレッジと本番品質の乖離を扱っている。
- **[【JavaScript】usingがStage4になったので、ようやくリソース解放忘れから解放されるよ](https://qiita.com/rana_kualu/items/83783c6dd3b4b51fa77f)** - TC39のStage4に到達したJavaScriptの`using`宣言を解説。これまで`try/finally`で手動管理していたリソース解放を宣言的に書けるようになる仕組みを、うっかり解放を忘れる典型的なバグ例と対比しながら紹介している。
- **[「いい感じに分けといて」と頼まれたので、「いい感じ」を定義してみた](https://qiita.com/KYoshiyama/items/50f50f39fd0da34e3dce)** - シフトの公平な割り当てのような「いい感じにやっておいて」という曖昧な依頼を、制約条件と評価関数として形式化する試み。感覚的な要求を技術的に扱える問題設定に落とし込む思考過程を具体的に追っている。
- **[インフラエンジニアでもない私がGradleをいじってチームイベント向けの計測ツールを作った話](https://qiita.com/moyomoyomoyo/items/f67994a75b074350649f)** - チーム対抗でJUnitテストカバレッジの向上度を競うイベント向けに、Gradleをカスタマイズして計測ツールを自作した記録。専門外の領域でビルドツールを実務的に使いこなした具体例として参考になる。

## AWS 新着

- **[Amazon CloudWatch now supports warm-up periods for alarms](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-alarms-warmup-period)** (2026-09-01) - CloudWatchのメトリクスアラーム・ログアラームに、作成直後の一定時間評価を遅らせる「ウォームアップ期間」を設定できるようになった。新規リソースがメトリクス送信を開始するまでの間に発生する誤検知ノイズを減らす狙い。
- **[AWS Lambda recursive loop detection is now available in all commercial AWS Regions](https://aws.amazon.com/about-aws/whats-new/2026/08/lambda-recursion-regions)** (2026-08-31) - Lambda関数間の再帰的な呼び出しループを自動検知して停止するガードレール機能が、全商用リージョンに展開完了。デフォルトで有効になっており、意図しないコスト急増や無限ループ障害を未然に防ぐ。
- **[Amazon DocumentDB now supports direct major version upgrades to version 8.0](https://aws.amazon.com/about-aws/whats-new/2026/08/documentdb-major-version-upgrade-8-0/)** (2026-08-31) - MongoDB互換のDocumentDBが、3.6/4.0系から8.0への直接インプレースアップグレードに対応。中間バージョンを経由する必要がなくなり、大幅なアップグレード作業負荷が削減される。
- **[Amazon Cognito now supports machine-to-machine authorization without a user pool domain](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-get-client-token/)** (2026-08-31) - CognitoのM2M認可向けに新しいGetClientToken APIが追加され、ユーザープールドメインを設定しなくてもSDK・CLI・API経由でアクセストークンを取得できるようになった。サービス間認可のセットアップが簡素化される。
- **[AWS Workload Credentials Provider is now available as a one-click install for Linux and Windows](https://aws.amazon.com/about-aws/whats-new/2026/08/workload-credentials-provider-install/)** (2026-08-31) - Secrets Managerからシークレットを解決・キャッシュするAWS Workload Credentials Providerが、ソースからのビルドを要する多段階セットアップからワンクリックインストールに簡略化された。

## Lobsters

- **[VibeCoded AI-Slop License v1.0](https://gist.github.com/NicolasCARPi/3fd349ed1ed52ae6b835d5364cda4cd6)** (64pt) - AIに丸投げして生成された「vibe-coded」なコードに対し、利用者へ品質未検証であることの自覚を促す風刺的なOSSライセンス文書。AIコーディング時代の免責表記のあり方を皮肉交じりに問いかけ、コミュニティで活発な議論を呼んでいる。
- **[Janet 1.42.0](https://github.com/janet-lang/janet/releases/tag/v1.42.0)** (36pt) - LispファミリーのスクリプティングLLanguage「Janet」の最新リリース。組み込みやスクリプティング用途を意識した軽量Lisp処理系の着実なアップデートが続いている。
- **[RangeFrom, Part 2..: What I think is wrong about the design](https://erk.dev/2026/08/30/rangefrom-part-2)** (24pt, 40コメント) - Rustの`RangeFrom`（`a..`構文）の設計上の問題点を掘り下げるシリーズ第2弾。イテレータや境界チェックまわりの直感に反する挙動を具体例とともに批判的に検証しており、コメント欄でも活発な設計論争が起きている。
- **[Fine, I'll build my own text editor](https://dbushell.com/2026/09/01/text-editor/)** (24pt) - 既存のエディタに満足できず、自分でテキストエディタを一から実装し始めた経緯と設計判断を綴った記事。カーソル管理やバッファ設計など、エディタ実装特有の技術的な難所に触れている。
- **[This Month in KDE Linux: August 2026](https://blogs.kde.org/2026/08/31/this-month-in-kde-linux-august-2026/)** (7pt) - KDE Linuxディストリビューションの8月の開発進捗まとめ。イミュータブルOS設計を採用するKDE Linuxの機能追加・バグ修正状況を定期的に追える月次レポート。

## dev.to

- **[Kubeflow Without Kubernetes? Deploy a Complete MLOps Suite in 60 Seconds with Gubernator](https://dev.to/gde/kubeflow-without-kubernetes-deploy-a-complete-mlops-suite-in-60-seconds-with-gubernator-3moo)** - JupyterLab・MLflow・MinIO S3・Ollama推論をKubernetesなしで、軽量なDocker Compose構成のみで60秒起動できるツール「Gubernator」の紹介。MLOpsスタックの検証環境を手軽に立てたい場面向けの実装例。
- **[[Go in Practice] Writing Modern Go with AI: Testing JetBrains go-modern-guidelines and Refactoring a 1,039-line main.go](https://dev.to/gde/go-in-practice-writing-modern-go-with-ai-testing-jetbrains-go-modern-guidelines-and-refactoring-151o)** - 1,039行に肥大化したmain.goを、JetBrainsが提供するgo-modern-guidelinesをAIエージェントに読ませながらリファクタリングした実践記録。AIにコード整理を任せる際のガイドライン活用の具体例を示している。
- **[Wiring the Reasoning Loop: Gemini + Neo4j + MCP for Multi-Hop AI Agents](https://dev.to/gde/wiring-the-reasoning-loop-gemini-neo4j-mcp-for-multi-hop-ai-agents-51p9)** - 通常のRAGが抱えるハルシネーション問題を、グラフDBのNeo4jとMCPを組み合わせたマルチホップ推論エージェントで解決しようとする実装解説。単純なベクトル検索を超えた知識グラフ活用の構成例。
- **[Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)** - A2Aプロトコルにおける「Agent Card」のフィールドを異なるクラウドのエージェント実装間で実際に取得・比較した記事。仕様上は共通のはずのフィールドが実装ごとにどう解釈・出力されるかを具体的に検証している。
- **[Taking control of cluster security: A deep dive into GKE ClusterNetworkPolicy](https://dev.to/googlecloud/taking-control-of-cluster-security-a-deep-dive-into-gke-clusternetworkpolicy-536c)** - GKEのClusterNetworkPolicyを使って、プラットフォームチームが開発者の俊敏性を損なわずにクラスタ全体に一律のセキュリティガードレールを設定する方法を解説している。

## TechCrunch

- **[If space data centers feel far-fetched, why not interstellar travel?](https://techcrunch.com/2026/09/01/if-space-data-centers-feel-far-fetched-why-not-interstellar-travel/)** - 軌道上データセンターを手がけるStarcloudのチームが、アルファ・ケンタウリ座への探査機打ち上げという新たな高リスク宇宙プロジェクトに乗り出したと報じる記事。宇宙インフラ企業がデータセンター事業の延長で恒星間探査という異次元の技術目標を掲げている点が特徴的。同じ件をArs Technicaも「"できるだけ安く"アルファ・ケンタウリへのミッションを目指す民間グループ」という角度で別途報じている。
- **[Magna increases bet on battery swapping in India with $35M for Yuma](https://techcrunch.com/2026/08/31/magna-increases-bet-on-battery-swapping-in-india-with-35m-for-yuma/)** - 自動車部品大手Magnaが、インドのバッテリー交換スタートアップYuma Energyへの出資を累計8700万ドルまで積み増したと報じる記事。EVの充電待ち時間をなくすバッテリー交換インフラという要素技術への投資が加速している。
- **[FTC accuses Amazon of running a 'secret ad surcharge scheme' in new lawsuit](https://techcrunch.com/2026/08/31/ftc-accuses-amazon-of-running-a-secret-ad-surcharge-scheme-in-new-lawsuit/)** - AmazonがFTCと22州から、広告出稿する事業者に非開示の追加料金を課していたとして提訴されたと報じる記事。プラットフォームの広告課金ロジックの不透明性が法的リスクになり得る事例。

※ 他ソースとの重複を除いた新規記事が3件のみだった

## Ars Technica

- **[Without new landers or rovers, it's helicopters or bust for NASA's Mars program](https://arstechnica.com/space/2026/09/without-new-landers-or-rovers-its-helicopters-or-bust-for-nasas-mars-program/)** - 新型の着陸機・ローバーを開発する予算がない中、NASAの火星探査計画が21億ドル規模のヘリコプター機体「SR-1 Freedom」に活路を求めていると報じる記事。予算制約が探査機の設計方針そのものを規定している実情を伝えている。
- **[Raindrops are tiny lightning bolts, and they're corroding cars, study finds](https://arstechnica.com/science/2026/08/raindrops-are-tiny-lightning-bolts-and-theyre-corroding-cars-study-finds/)** - 雨粒が着地時に微小な放電（ミニ雷）を起こしており、これが車体表面の腐食を進める見落とされたメカニズムだと明らかにした研究を紹介する記事。材料の劣化要因として静電気的な効果が想定以上に効いている可能性を示している。

※ 他ソースとの重複を除いた新規記事が2件のみだった

## 注目トピック

今日目立ったのは、AIやクラウドの新機能発表そのものよりも、実際に手を動かして「何が起きたか」「何が壊れたか」を検証・記録した一次情報の濃さだった。Zennの「自作npmパッケージにマルウェアを公開されたときにやったこと」は、リリースワークフローの不備を突かれた実際のサプライチェーン攻撃への対応を、認証情報ローテーションの呼びかけまで含めて生々しく記録しており、はてなブックマークの「J:COMのDNSブロッキング顛末」も同様に、ISP側の不透明な通信制御をパケットレベルで切り分けた個人の調査記録だ。QiitaのClaude Codeのモデル切り替えコストを287倍という数字で示した記事や、900件のテストが緑でも本番で壊れたLLM製プロダクトの記録も、宣伝的な機能紹介ではなく実測・実運用の失敗から学んだ知見という点で共通している。

もう一つの軸は、AIエージェントを繋ぐ標準化の実装比較が地に足の着いた形で進んでいることだ。Zennの「Google ADK・Microsoft Agent Framework・Amazon Strandsの違いを偽のモデルサーバで測ってみた」は「同じHello Worldを書いて比べる」段階を超えて、プロンプト注入量や履歴再送量という定量指標で3大クラウドのエージェントSDKを比較し、dev.toの「Cross Cloud A2A Agent Card Field Comparison」もA2Aプロトコルの仕様が実装間でどう解釈されるかを実際に検証している。エージェント技術が「動くデモ」の段階から、選定基準となる実測データや相互運用性の細部を詰める段階に移りつつあることがうかがえる一日だった。
