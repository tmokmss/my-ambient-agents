---
title: "Tech Feed ダイジェスト（2026年9月20日）"
date: "2026-09-20T13:39"
category: "summary"
summary: "SQLite16年物バグの追跡からAWS STSのトークン制限変更、BGPハイジャック事故まで、開発者向け8ソースのダイジェスト"
tags: ["security", "aws", "infra", "ai", "performance", "devtools"]
---

## はてなブックマーク (テクノロジー)

- **[16年間放置されていたSQLiteのバグを突き止めた方法](https://gigazine.net/news/20260920-sqlite-wal-reset-bug/)** ([30users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260920-sqlite-wal-reset-bug/)) - SQLiteのWAL（Write-Ahead Log）リセット処理に16年間気づかれずに潜んでいたバグをどう特定したかを追った記事。低頻度にしか顕在化しない不具合の切り分けプロセス自体が参考になる。
- **[wkhtmltopdfの次どうするか問題2026](https://speakerdeck.com/willnet/wkhtmltopdf-no-tsugi-dou-suru-ka-mondai-2026)** ([63users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/willnet/wkhtmltopdf-no-tsugi-dou-suru-ka-mondai-2026)) - 開発が事実上停止しているHTML→PDF変換ツールwkhtmltopdfの後継をどう選ぶかを整理したスライド。長年使われてきたレガシーツールからの移行先選定という多くのプロダクトが直面する悩みを扱う。
- **[jsonize で JSON を Unix パイプラインの共通言語にする](https://debimate.jp/post/ja/2026-09-16-jsonize%E3%81%A7json%E3%82%92unix%E3%83%91%E3%82%A4%E3%83%97%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E5%85%B1%E9%80%9A%E8%A8%80%E8%AA%9E%E3%81%AB%E3%81%99%E3%82%8B/)** ([63users](https://b.hatena.ne.jp/entry/s/debimate.jp/post/ja/2026-09-16-jsonize%E3%81%A7json%E3%82%92unix%E3%83%91%E3%82%A4%E3%83%97%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E5%85%B1%E9%80%9A%E8%A8%80%E8%AA%9E%E3%81%AB%E3%81%99%E3%82%8B/)) - jsonizeというツールでJSONをUnixパイプラインの共通言語にする試み。テキストベースの伝統的なパイプ処理をJSON構造に置き換え、jqなどと組み合わせた堅牢なシェルパイプラインを構築する提案。
- **[bashka: Stop running unverified bash scripts to install software](https://github.com/dmtrKovalenko/bashka)** ([17users](https://b.hatena.ne.jp/entry/s/github.com/dmtrKovalenko/bashka)) - `curl <url> | bash` 形式のインストールスクリプトを実行前に静的検証するツール。挙動を検査しつつ、インストール済みソフトウェアの管理も行える。
- **[Reverse Engineering ChatGPT Web: How OpenAI Built for a Billion Users](https://performance.dev/chatgpt)** ([10users](https://b.hatena.ne.jp/entry/s/performance.dev/chatgpt)) - OpenAIがChatGPT Webを10億ユーザー規模で支えるためにどんなフロントエンド設計をしているかをリバースエンジニアリングで読み解いた記事。

## Zenn

- **[気軽にDGX Sparkでapt upgradeしたら壊れた話](https://zenn.dev/alpha_omega/articles/3f3ea4d14a0234)** - DGX Sparkで`apt upgrade`を実行した後にGPUドライバが読み込まれなくなったトラブルの切り分けと復旧手順、NVIDIAカーネルモジュールのパッケージ依存関係の整理をまとめたトラブルシューティング記録。
- **[MCP × Claude Code × BedrockでPlaywrightの自動化フローを構築](https://zenn.dev/hirata_infosys/articles/598068e56ae342)** - 直接のデータ更新が制限された既存システムに対し、Playwrightで既存のGUI画面を操作させることでAIエージェントによる業務自動化を実現した検証記事。MCP経由でClaude CodeとBedrockを組み合わせている。
- **[WebMCPを試してみた感想。フロントエンドの必須技術になりそうな予感。](https://zenn.dev/chot/articles/268804cd6694ab)** - 人間向けのGUIツール（CMSのデザインエディター）にWebMCPを組み込み、AIエージェントから直接操作できるようにした実験記事。フロントエンド開発における新しい設計パターンとしての可能性を検証している。
- **[【2026/9/17最新アプデ】Claude Docs が登場！Slides・Design と合わせて触ってみた](https://zenn.dev/canly/articles/7ac8cea14c20e8)** - Anthropicが公開したClaude Docs・Slidesと、会話の中から使えるようになったClaude Designのベータ版を実際に検証。公式ドキュメントと実際の挙動の差異も報告している。
- **[Ternary Bonsai 2 27BをM1Pro・16GBで動かす](https://zenn.dev/okame_rara/articles/bonsai_2_27b_m1)** - メモリ16GBのM1 Pro MacBook ProでTernary Bonsai 2 27Bを、公式のllama.cpp forkをソースからビルドして動かした検証記事。27Bクラスのモデルを一般的なノートPCで動かす際の環境構築の勘所をまとめている。

## Qiita

- **[生成AIセキュリティを学んで変わった「AIを安全に使う」という考え方](https://qiita.com/kf_webdev/items/cbd1d7bb724676a3b686)** - Prompt Injection、Jailbreak、情報漏洩、RAGのセキュリティといった生成AI特有の脅威モデルを、学習カリキュラムを通じて整理した記事。
- **[AIがテストを書ける時代、「何をテストしないか」をどう決めるか](https://qiita.com/y0us91/items/61edde2960bd6cdbdfa9)** - コーディングエージェントに実装を任せると自動生成されるテストが際限なく増えていく問題に対し、本当に必要なテストの見極め方を論じている。
- **[JevのオープンウェイトモデルOpenJevを開発した話](https://qiita.com/xeje/items/48c9835a3e5c7b3d5489)** - 重みも学習法の詳細も非公開のTypeSafe AI製「Jev」に対し、同等の型付き判断出力（Yes/No・選択・スコア）をHugging Face上のオープンウェイトモデルとして再現しようとした試み。

## AWS 新着

- **[AWS STS simplifies session token size limits and adds session token size monitoring](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts/)** (2026-09-15) - STSのセッショントークンサイズ制限を一本化し、4,096バイトの上限を一律で適用するよう変更。大きめのインラインポリシーを使っているアプリケーションは影響を受ける可能性がある。
- **[AWS Elastic Beanstalk introduces Cluster Mode to run multiple applications on shared infrastructure](https://aws.amazon.com/about-aws/whats-new/2026/09/elastic-beanstalk-cluster-mode/)** (2026-09-17) - 1つのアカウント内の共有インフラ上で複数アプリケーションを実行・管理できる新しいデプロイモード。ソースコードとDockerfileを渡すだけで複数アプリの運用をまとめられる。
- **[Amazon SageMaker HyperPod now supports model caching for faster inference autoscaling and reduced cold starts](https://aws.amazon.com/about-aws/whats-new/2026/09/sgm-hyperpod-model-caching-inf/)** (2026-09-11) - モデルの重みとコンテナイメージをクラスタノードに事前ロードしておくキャッシュ機構を追加。Podの起動が数分から数秒に短縮され、推論のオートスケーリングにおけるコールドスタートを緩和する。
- **[Amazon API Gateway now supports mutual TLS for backend integrations](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-api-gateway-mutual-tls-backend/)** (2026-09-08) - REST APIがバックエンドとのTLSハンドシェイクでACM証明書を提示できるようになり、mTLSでのバックエンド認証が可能になった。
- **[AWS Lambda now supports Graviton5-powered EC2 instances on Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-graviton5-ec2/)** (2026-09-09) - Lambda Managed InstancesでGraviton5世代のC9g/C9gd/M9g/M9gdインスタンスが利用可能になり、最新シリコンでのコスト・性能改善が見込める。

## Lobsters

- **[we have a year to fix security everywhere](https://jyn.dev/a-year-to-fix-security/)** (38pt) - AIコーディングエージェントの普及でコード生成量が爆発的に増える一方、脆弱性の作り込みも加速しており、業界が本気で対処すべき猶予は実質1年程度しかないと警鐘を鳴らすエッセイ。AI生成コードのセキュリティレビュー体制整備を訴えている。
- **[Thoughts on the Future of Web Browsers](https://sarahjamielewis.com/log/2026/future-of-web-browsers.html)** (34pt) - プライバシー研究者の視点から、ブラウザが今後担うべきアーキテクチャ上の役割を再定義しようとする考察エッセイ。
- **[V Language Review (2023)](https://n-skvortsov-1997.github.io/reviews/)** (20pt) - プログラミング言語Vの言語設計とエコシステムをレビューした記事。シンプルさを謳う言語が実運用でどこに引っかかるかを具体的に検証している。
- **[Faster JSON parsing with SVE2 on ARM processors](https://lemire.me/blog/2026/09/18/faster-json-parsing-with-sve2-on-arm-processors/)** (13pt) - simdjsonの開発者として知られるDaniel Lemire氏による、ARMのSVE2命令セットを使ったJSONパース高速化の解説。ベクトル命令を用いた低レベル最適化の実例。
- **[How Notion handles concurrent editing with CRDTs](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts)** (2pt) - NotionがCRDT（Conflict-free Replicated Data Type）を使ってリアルタイム共同編集の競合を解決している内部設計を解説した公式ブログ。

## dev.to

- **[Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys](https://dev.to/gde/serving-gemma-4-on-an-amd-mi300x-what-199-an-hour-buys-52h9)** - AMD Developer Cloud上のMI300XでGemma 4 E2Bを1時間1.99ドルで動かし、191.7GiBのVRAMを積んだカードが実際にどれだけのスループットを出すかをPython MCPツール経由で計測した検証記事。
- **[Running an AI Agent Locally: ADK, Gemma 4, and Docker Model Runner](https://dev.to/gde/running-an-ai-agent-locally-adk-gemma-4-and-docker-model-runner-44db)** - クラウドLLMをローカルのGemma 4に置き換え、同じエージェント・同じツール構成のままDocker Model Runnerで推論コストをゼロにした事例。
- **[Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)** - GKEがバイナリのロールアウトとAPIのfinalizationを切り離すことで、Kubernetesのマイナーバージョンアップグレードを安全にテスト・ロールバックできる仕組みを解説。
- **[Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)** - 典型的なアルゴリズム問題をステップバイステップの可視化付きで学べるOSSツール「DSA View」の紹介。

## TechCrunch

- **[The US Navy just told us what's on its tech wish list for the next several years](https://techcrunch.com/2026/09/19/even-mid-sprint-to-a-secret-flight-the-navys-tech-chief-had-a-pitch-for-investors/)** - 米海軍のCTOが、VCと共同投資する形でスタートアップの早期研究に資金を出す方針や5億6200万ドル規模の自律給油契約などの実例を挙げつつ、AIから量子技術まで軍が今後求める技術領域を語ったインタビュー記事。
- **[AI safety conversations have gotten unbelievable](https://techcrunch.com/2026/09/19/ai-safety-conversations-have-gotten-unbelievable/)** - 今週バイラルになった2つのAI安全性をめぐる会話を例に、AIの実力に関する事実と誇張の見分けがいかに難しくなっているかを論じた記事。

※ TechCrunchは取得した候補の大半が過去レポートと重複、または政治・消費者製品など開発者向けの技術的知見が薄い記事だったため、新規に扱えたのは2件のみだった。

## Ars Technica

- **[BGP hijack infecting networks caused by a comedy of errors that's not funny at all](https://arstechnica.com/security/2026/09/well-executed-bgp-attack-uses-hijacked-ips-to-infect-real-networks/)** - 実際に発生したBGPハイジャックが本番ソフトウェアに悪意あるコードを混入させた事例を解析。ハイジャックされたIPアドレスが悪用された経緯から得られる教訓を整理している。
- **[Iran strikes on Amazon data centers caused permanent loss of customer data](https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data/)** - イランによる攻撃がAWSのデータセンターに戦争被害をもたらし、AWSが設計上想定していた耐障害性の範囲を超える形で顧客データが恒久的に失われたと報告。クラウドのDR設計が前提とする被害シナリオの限界を示す事例。
- **[AI bots "Timmy," "Ren," and "Jackie" are flooding social media with slop](https://arstechnica.com/ai/2026/09/ai-agents-flood-the-internet-with-slop-infused-spam/)** - 自己紹介文に「AIエージェントです」と書くボット群が、AIエージェント向けの小規模SNSプラットフォーム上で大量の低品質コンテンツを生成し始めている実態を報告。
- **[ClickFix attacks infecting PCs and Macs are going viral](https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral/)** - 偽のエラー画面や認証画面を表示してユーザーに手動でコマンドを実行させ感染させる「ClickFix」という手口が、実装のシンプルさゆえに急速に広まっている。
- **[Microsoft exec called AI scraping the "largest theft of labor in human history"](https://arstechnica.com/tech-policy/2026/09/microsoft-exec-called-ai-scraping-the-largest-theft-of-labor-in-human-history/)** - MicrosoftとOpenAIの内部メールから、AIによるコンテンツスクレイピングがニュース業界を破壊しかねない「doomループ」への懸念が明らかになった。

## 注目トピック

国内コミュニティでは、TypeSafe AIが公開した「文章を生成しないAI」Jev（状態と質問を渡すと型付きの判断・確率を返すモデル）が引き続き圧倒的な話題を占めているが、Zenn・Qiitaの人気記事は過去3日ですでに解説・検証記事が大量に出尽くしており、今回は独自性のあるOpenJev（オープンウェイトでの再現）以外はあえて見送った。代わりに目立つのは、ローカルLLM運用（M1でのBonsai 2 27B、MI300XでのGemma 4提供）やAIエージェントを既存システムに組み込む実務パターン（Playwright自動化、WebMCP、ローカルGemma 4へのフォールバック）など、Jevブームの裏で進む地に足のついたAI実装の知見である。

セキュリティ面では、BGPハイジャックによる本番ソフトウェアへのコード混入、ClickFixのような「ユーザーに手動実行させる」ソーシャルエンジニアリング、AIエージェントが大量の低品質コンテンツを生成し始めている「slop」問題など、攻撃・悪用の手口が多様化している。インフラ面でも、AWSがSTSセッショントークン制限やHyperPodのモデルキャッシュ機構を通じて信頼性と性能のチューニングを続ける一方、イランによる攻撃がAWSデータセンターに恒久的なデータ損失をもたらした事例は、クラウドの耐障害性設計が現実の物理的リスクの前でどこまで通用するかを改めて問うものだ。
