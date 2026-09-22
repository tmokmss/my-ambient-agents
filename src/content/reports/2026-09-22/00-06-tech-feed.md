---
title: "Tech Feed ダイジェスト（2026年9月22日）"
date: "2026-09-22T00:06"
category: "summary"
summary: "はてブ・Zenn・Qiita・AWS・Lobsters・dev.to・TechCrunch・Ars Technicaを巡回。MetaのAIエージェント0-dayとAWSの料金体系変更が目立った"
tags: ["ai", "security", "aws", "cloud", "devops", "llm-agents"]
---

## はてなブックマーク (テクノロジー)

- **[テックリードとアーキテクトの違い、テックリードとEMの違い](https://mtx2s.hatenablog.com/entry/2026/09/21/182658)** ([138users](https://b.hatena.ne.jp/entry/s/mtx2s.hatenablog.com/entry/2026/09/21/182658)) - テックリード・アーキテクト・EMという3つの役割を、技術的な意思決定の権限範囲と責任の所在という観点から整理し、肩書きが曖昧なまま運用されがちな組織で起きる機能不全を指摘している。
- **[Claude Codeの Agent view とセッション間通信は使ったほうがいい](https://syu-m-5151.hatenablog.com/entry/2026/09/21/104258)** ([75users](https://b.hatena.ne.jp/entry/s/syu-m-5151.hatenablog.com/entry/2026/09/21/104258)) - Claude Codeで複数エージェントを並行運用する際に有用なAgent viewとセッション間通信の使い方を、実際の開発フローに即して解説している。
- **[CIDR が完全に重複する VPC 間で PrivateLink トンネルエンドポイントを試してみた](https://dev.classmethod.jp/articles/privatelink-tunnel-endpoint-cidr-overlap/)** ([17users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/privatelink-tunnel-endpoint-cidr-overlap/)) - 先日発表されたAWS PrivateLinkのTunnel Endpointを使うと、CIDRが重複する2つのVPC間でも接続できることを実機検証している。同じ機能をQiitaも図解による仕組み解説という別角度で報じている。
- **[Jev, Gemini, DistilBERT, LightGBMの分類性能を比較してみた](https://zenn.dev/xxkuboxx/articles/e232d267a76f43)** ([17users](https://b.hatena.ne.jp/entry/s/zenn.dev/xxkuboxx/articles/e232d267a76f43)) - 話題の意思決定特化モデルJevを、LLMベースのGeminiや従来の機械学習モデル（DistilBERT、LightGBM）と分類タスクで定量比較し、精度とレイテンシのトレードオフを示している。
- **[Windows 11 Homeでローカルアカウントを作成する新たな「抜け道」が発見される](https://garumax.com/windows-11-home-local-account-new-workaround)** ([19users](https://b.hatena.ne.jp/entry/s/garumax.com/windows-11-home-local-account-new-workaround)) - Microsoftアカウント必須化が進むWindows 11 Homeで、セットアップ時にローカルアカウントを作成できる新しい回避手順を検証している。

## Zenn

- **[PRのCI稼働時間を7割削減した話](https://zenn.dev/innovation/articles/e84f8ccca8e6da)** - AIエージェントによる実装でPRとテストコードが増え、CIの1run当たりの稼働時間が144分まで膨張した問題を、キャッシュ活用や並列化などの施策で39分まで削減した事例。
- **[Re: Vercel に Go サーバーを無料でデプロイできるんです！](https://zenn.dev/otakakot/articles/14d162ea65f67d)** - VercelのGoサポートがゼロコンフィグ化されたことを受け、以前の記事の内容を更新する形でシンプルなGoサーバーのデプロイ手順を再検証している。
- **[C# Kaigi 2026 参加レポート!!](https://zenn.dev/prozolic/articles/3bb3f91f7408cc)** - 初開催となったC#技術カンファレンスのレポートで、登壇者の視点から各セッションの内容を紹介している。
- **[最近話題のJevはBigQueryのAI関数を安くできるのか？](https://zenn.dev/jackojacko05/articles/08df79d47f4219)** - BigQueryのAI関数をJevに置き換えることで、大量の分類・ルーティング処理のコストを削減できるかをデータエンジニアの視点で検証している。

## Qiita

- **[AIコード補完はTab一発で比べない。「近傍→別関数→別ファイル」の編集経路を測る](https://qiita.com/heftykoo/items/9ff0d2d1a3ea30c2393e)** - AIコード補完の評価を「型が通るか」だけでなく、関連ファイルやテストまで含めた編集経路をどこまで正しく追従できるかで測るべきだと提案している。
- **[言葉で頼んで AI 0 回・約 1 秒、手順書をマクロに焼いたら日々の業務から AI が消えた話](https://qiita.com/shu15511551/items/4f037551f841d786c17d)** - PythonでExcelを操作するマクロにAIエージェントが確立した作業手順を落とし込み、日次の定型業務からAI呼び出し自体を排除した事例を紹介している。
- **[【ハーネス初心者向け】手軽にAIの作業効率をアップするためにインストールするべきもの5選](https://qiita.com/aganesy/items/6ce283ecca3aac85c0f9)** - AIエージェントに複雑な設定をさせなくても作業効率を上げられる、汎用的に使えるツール群を紹介している。

## AWS 新着

- **[AWS improves regional resiliency for root user sign-in](https://aws.amazon.com/about-aws/whats-new/2026/09/root-user-regional-resiliency/)** (2026-09-14) - ルートユーザーのサインインをus-east-1単独ではなく3リージョンに分散させ、単一リージョン障害時にアカウントへアクセスできなくなるリスクを下げる変更。
- **[AWS Direct Connect announces flat-rate pricing for dedicated connections](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-direct-connect-announces-flat-rate-pricing/)** (2026-09-15) - 10G/100G専有接続の課金体系を従量制からフラットレートに変更し、大容量帯域を常時利用する企業のコスト予測を容易にする。
- **[AWS Transform for .NET now generates unit tests for modernized code](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-transform-net-unit-tests)** (2026-09-10) - .NETモダナイゼーションツールが、変換後のテスト対象クラスに対するユニットテストを自動生成する機能を追加した。
- **[Amazon WorkSpaces adds support for NVIDIA Blackwell GPU instances](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-workspaces-nvidia-blackwell-gpu-instances/)** (2026-09-16) - 仮想デスクトップのWorkSpacesがNVIDIA RTX PRO Blackwell搭載のGraphics G7バンドルに対応し、リモート環境でのGPU集約ワークロードを強化した。
- **[AWS PCS now supports custom GRES, hardware topology, and MIG](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-pcs-gres-hardware-topology-mig/)** (2026-09-11) - HPC向けのAWS Parallel Computing ServiceがカスタムGRESやハードウェアトポロジ、GPUのMIG分割に対応し、Slurmクラスタでのきめ細かいリソース制御を可能にした。

## Lobsters

- **[Textbook review: Is Parallel Programming Hard, And, If So, What Can You Do About It?](https://ahelwer.ca/post/2026-09-21-concurrency-textbook/)** (28pt) - Paul McKenneyによる並行プログラミングの教科書のレビュー。メモリバリアやRCUなど低レベルな並行制御の考え方を体系的に学べる点を評価している。
- **[Lambda MicroEgg](https://www.philipzucker.com/lambda_miller_egg/)** (28pt) - 項書き換えの合同閉包アルゴリズム（congruence closure）をラムダ計算に応用し、形式手法の観点からeグラフの実装を解説している。
- **[Bot-free self-hosted analytics with GoatCounter on NixOS](https://vincent.bernat.ch/en/blog/2026-goatcounter)** (22pt) - プライバシー重視の軽量アクセス解析ツールGoatCounterをNixOS上でセルフホストし、ボットトラフィックを除去する設定を紹介している。
- **[Do you use :visited on links?](https://kevquirk.com/do-you-use-visited-on-links)** (22pt) - CSSの`:visited`疑似クラスがブラウザのプライバシー保護機能により大幅に制限されている現状と、それでも訪問済みリンクを示すべき理由を論じている。
- **[Windows Exploitation Techniques: Dangling COM Object Registrations](https://projectzero.google/2026/09/windows-dangling-com.html)** (4pt) - Google Project ZeroによるWindows調査で、削除されたCOMオブジェクトの登録情報が残存することを悪用する新しい権限昇格手法を解説している。

## dev.to

- **[One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)** - 1つのPython製MCPサーバーからApache Icebergの読み取り専用ツール群を、Polaris・BigLake・OneLake・Glue・S3 Tables・Horizonという6種類のカタログに接続できることを検証し、カタログごとに変わるのは認証とストレージ設定だけだと結論づけている。
- **[Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)** - 本番環境でLLMエージェントが失敗する原因は追加のRLHFだけでは解決できないとし、障害対応の実地訓練に近い形でエージェントに継続性の判断力を持たせる設計を提案している。
- **[How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)** - LLMがツール呼び出し（Function Calling）を行う際の内部的な仕組みを、リクエストの構造からステップバイステップで解説している。

## TechCrunch

- **[OpenAI forms math advisory group as its AI resolves more than 100 open problems](https://techcrunch.com/2026/09/21/openai-forms-math-advisory-group-as-its-ai-resolves-more-than-100-open-problems/)** - OpenAIのAIが100件超の未解決数学問題を解いたことを受け、研究の方向性を監督する数学諮問グループを設置した。ただしこのグループに研究のペースを落とす権限は与えられていない。
- **[Meta's AI agent has been blocked from using Amazon.com](https://techcrunch.com/2026/09/21/metas-ai-agent-has-been-blocked-from-using-amazon-com/)** - MetaのAIエージェントMuseがAmazon.comへのアクセスを遮断された。Amazonは自前の基盤モデルと推論基盤を持つため、競合エージェントに門戸を開く法的義務がない。
- **[Kairos Power gets up to $100M from Samsung group to build nuclear reactor for Google](https://techcrunch.com/2026/09/21/kairos-power-gets-up-to-100m-from-samsung-group-to-build-nuclear-reactor-for-google/)** - Google向けデータセンターの電源として、Kairos PowerがSamsung C&Tから最大1億ドルの出資を受け、50メガワット級の原子炉建設を進めている。AI需要を背景にした電力インフラ投資の一例。

## Ars Technica

- **[Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)** - 強い権限を持つMetaの新AIエージェントMuseに、単純なClickFix攻撃だけでエージェントを乗っ取れる深刻な0-day脆弱性が見つかった。
- **[US government website used Chinese model the FBI called "malicious"](https://arstechnica.com/tech-policy/2026/09/us-government-website-used-chinese-model-the-fbi-called-malicious/)** - 米連邦官報のウェブサイトが、FBIが「悪意がある」と警告していた中国製オープンソースAI検索ツールを一時的に使用していたことが判明した。
- **[FAA tees up $875M AI tool to help manage air traffic congestion](https://arstechnica.com/ai/2026/09/faa-tees-up-875m-ai-tool-to-help-manage-air-traffic-congestion/)** - 米連邦航空局が、まずワシントンD.C.周辺の空域混雑緩和にAIツールを試験導入し、その後全国展開する計画を進めている。
- **[Think twice before installing this device promising free movies](https://arstechnica.com/security/2026/08/how-some-media-streaming-devices-open-home-networks-to-a-world-of-harm/)** - 無料の映画視聴と引き換えに、家庭のネット回線をプロキシネットワークの一部として提供させるストリーミングデバイスの実態を検証している。
- **[VMware migration reduces Tottenham Hotspur's licensing fees by 85 percent](https://arstechnica.com/information-technology/2026/09/vmware-migration-reduces-tottenham-hotspurs-licensing-fees-by-85-percent/)** - Broadcomによる買収後のVMwareライセンス費用高騰を受け、プロサッカークラブが仮想化基盤を移行してライセンス費を85%削減した事例。

## 注目トピック

今日最も目立ったのは、AIエージェントのセキュリティリスクが具体化してきたことだ。Metaの新エージェントMuseは強力な権限を持つがゆえに単純なClickFix攻撃だけで乗っ取られる0-dayが見つかり、同時にAmazonからはプラットフォームアクセスを遮断されるなど、エージェントの権限設計と相互運用性の両面で摩擦が表面化している。米連邦官報サイトがFBIに危険視された中国製AIモデルを使っていた件も含め、「エージェントに何をどこまで任せるか」という設計判断が、機能追加の話から具体的なインシデント対応の話に移ってきている印象がある。

一方、日本の開発者コミュニティでは意思決定特化モデル「Jev」への関心が引き続き強く、はてブ・Zenn双方でGemini・DistilBERT・LightGBMとの性能比較やBigQueryでのコスト最適化など、実務適用を見据えた検証記事が増えてきた。AWSの新着では新機能よりもルートユーザーサインインの耐障害性改善やDirect Connectのフラットレート化など、成熟したクラウド事業者らしい信頼性・コスト構造の見直しが目立ち、派手な新サービス発表よりも地に足のついた改善が中心の一日だった。
