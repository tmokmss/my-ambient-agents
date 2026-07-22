---
title: "Tech Feed ダイジェスト（2026年7月23日）"
date: "2026-07-22T22:15"
category: "summary"
summary: "半導体メモリ価格が10倍高騰、AIエージェントのループ運用と可観測性への関心が各所で高まる"
tags: ["ai", "security", "aws", "devops", "hardware"]
---

## はてなブックマーク (テクノロジー)

- **[DRAM、NANDの価格が10倍に…世界半導体市場の「異常」な急拡大を引き起こしているメモリ価格高騰の真因](https://jbpress.ismedia.jp/articles/-/96024)** ([146users](https://b.hatena.ne.jp/entry/s/jbpress.ismedia.jp/articles/-/96024)) - 生成AI向けデータセンター需要がDRAM・NANDの価格を10倍規模に押し上げているスーパーサイクルの構造を分析した記事。AIインフラ投資が半導体市場全体の需給を歪めている実態を伝えている。
- **[オントロジー：セマンティックWebからFDEのその先まで](https://d.nekoruri.jp/entry/2026/07/21/ontology)** ([44users](https://b.hatena.ne.jp/entry/s/d.nekoruri.jp/entry/2026/07/21/ontology)) - 2000年代のセマンティックWebから今日のAIエージェント向け知識表現（FDE）まで、オントロジーという概念がどう受け継がれてきたかを俯瞰した技術史的な考察記事。
- **[データベースmigration機構が無かったアプリケーションにsqldefを導入しました](https://techblog.timeleap.co.jp/entry/sqldef_is_coming_to_town)** ([39users](https://b.hatena.ne.jp/entry/s/techblog.timeleap.co.jp/entry/sqldef_is_coming_to_town)) - マイグレーション管理の仕組みを持たなかったレガシーアプリケーションに、スキーマ宣言型のマイグレーションツールsqldefを後から導入した実践記事。差分適用ベースのアプローチが既存運用への影響を抑えた。
- **[1年前に騒がれたFeliCaの脆弱性、JVNがようやく公表　深刻度は「高」](https://www.itmedia.co.jp/news/articles/2607/22/news103.html)** ([30users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/22/news103.html)) - 発見から1年越しで、日本の決済インフラを支えるFeliCaの脆弱性がJVNにより深刻度「高」として正式公表された。開示までのタイムラグ自体が調整の難しさを物語っている。
- **[Claude CodeにiOSシミュレータ連携機能追加。画面録画からスキルを作れる機能も](https://pc.watch.impress.co.jp/docs/news/2126861.html)** ([17users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2126861.html)) - Claude CodeにiOSシミュレータとの連携機能が追加され、画面操作の録画からエージェントが再利用可能な「スキル」を自動生成できるようになった。モバイル開発でのAIエージェント活用を広げる更新。

## Zenn

- **[成果物よりも「過程」を競う。生成AI Procthon 2026を開催して分かったこと](https://zenn.dev/serio/articles/c7cbdad5fc1dd1)** - 1か月にわたり開催された生成AIハッカソン「Procthon」の運営を振り返り、最終成果物ではなく試行錯誤の過程そのものを評価対象にする設計がもたらした学びをまとめた記事。
- **[Claude Codeを2時間おきに回してVS Code拡張mdエディタを育てるLoop Engineering実践](https://zenn.dev/green_tea/articles/e39e3726a449c9)** - Claude Codeを2時間ごとの定期実行で走らせ、人手を介さずVS Code拡張のMarkdownエディタを継続的に育てていくループエンジニアリングの実践記録。
- **[仕様駆動開発で起こる「仕様とコードのズレ」をハッシュで決定的に検出するツールを作った](https://zenn.dev/mrmtsntr/articles/artgraph-spec-code-drift)** - 仕様書・ドキュメント・コード・テスト間の乖離をハッシュ値により機械的かつ決定的に検出するCLIツール「artgraph」の開発記録。曖昧な目視レビューに頼らないドリフト検知アプローチが特徴。
- **[検索画面のUI設計で、バックエンドエンジニアが早めに口出しすべき3つのこと](https://zenn.dev/ncdc/articles/6c8eabde83cf0a)** - あいまい検索や並び替え条件を後からバックエンドで実装する段になって性能問題に直面した経験から、設計会議の初期段階で指摘すべき3つの観点を整理した記事。
- **[1-bit LLM「Bonsai」活用ガイド — 1.15GB で動く 8B モデルをローカルで使い倒す](https://zenn.dev/tkou15/articles/bonsai-1bit-llm-guide)** - Caltech発スタートアップPrismMLが公開した1-bit量子化の8BモデルBonsaiを、1.15GBという軽量フットプリントでローカル環境に導入し使い倒す手順を紹介した記事。

## Qiita

- **[[1, 10, 9, 2].sort() が [1, 10, 2, 9] を返した — JavaScriptのsortはデフォルトで数字を文字列として並べる](https://qiita.com/daisuke-nagata/items/1e1f7dfe684f224c88d6)** - JavaScriptの`Array.prototype.sort()`が既定で要素を文字列比較する仕様により、数値配列が意図しない順序になる典型的な落とし穴を解説した記事。比較関数を明示する重要性を再確認させる内容。
- **[ローカルLLM向けハードウェアを「容量・帯域・MoE・TTFT」で選ぶ](https://qiita.com/softbase/items/de82b236830298db334c)** - ローカルLLM実行環境を選定する際に、VRAM容量やメモリ帯域幅、MoEモデルの特性、初回トークン生成までの時間（TTFT）といった観点から機材を評価する方法を整理した記事。
- **[WordPress緊急脆弱性「wp2shell」対応手順 ― 確認・更新・侵害点検まで](https://qiita.com/BrainDirection/items/0ea9cf3cdfbdbfc94dd3)** - WordPressで発見された緊急脆弱性「wp2shell」について、脆弱性有無の確認からアップデート適用、侵害有無の点検までを実務向けに手順化した記事。
- **[Autonomous AI Database Serverless単体でどんなデータソースと連携できるのかを整理してみた](https://qiita.com/500InternalServerError/items/d21bb23ce96331d8122e)** - Oracle Autonomous AI Database Serverlessが単体で接続可能なデータソースの種類を実際に検証し整理した記事。マネージドDBとAI機能の連携範囲を把握する参考になる。
- **[個人開発に活かせる、動画生成AIで需要を確かめてから作成するという発想](https://qiita.com/sumomoo/items/700e37b3240717217b37)** - 個人開発でいきなり本実装に着手するのではなく、動画生成AIでプロトタイプ映像を作り需要を先に検証してから開発に進むアプローチを提案した記事。

## AWS 新着

- **[AWS Lambda durable functions now supports customer managed key encryption](https://aws.amazon.com/about-aws/whats-new/2026/07/durablefunctions-cmk/)** (2026-07-22) - Lambda durable functionsの実行状態データを、顧客管理のKMSキーで暗号化できるようになった。ステートフルなワークフロー基盤における秘匿情報管理の統制強化につながる。
- **[AWS Secrets Manager now publishes secret update notifications to Amazon EventBridge](https://aws.amazon.com/about-aws/whats-new/2026/07/secrets-manager-update-notifications/)** (2026-07-22) - Secrets Managerのシークレット値変更時に、自動でAmazon EventBridgeへイベントを発行できるようになった。ローテーション後の再デプロイなどイベント駆動な運用フローを組みやすくなる。
- **[Amazon EKS now supports EFA and placement groups on Amazon EKS Auto Mode and Karpenter](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-efa-placement-groups/)** (2026-07-22) - EKS Auto ModeとKarpenterでも、EC2の配置グループとElastic Fabric Adapter（EFA）を設定できるようになった。大規模分散学習など低遅延ネットワークを要するワークロードをEKS上で組みやすくなる。
- **[Amazon CloudWatch announces coding agent insights](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-coding-agent-insights/)** (2026-07-20) - CloudWatchに、AIコーディングエージェントの活動を可視化する「coding agent insights」が追加された。エンジニアリング組織がAIコーディングツールの成果や利用実態を定量的に把握できるようになる。
- **[Amazon Corretto July 2026 Quarterly Updates](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-corretto-july-2026-quarterly-updates/)** (2026-07-22) - AmazonのOpenJDKディストリビューションCorrettoの四半期定例アップデートが公開され、LTS・機能リリース双方にセキュリティ修正が適用された。Java運用チームは計画的な追随が必要になる。

## Lobsters

- **[So Reddit has decided that plain HTML is unsafe](https://www.cole-k.com/2026/07/21/reddit/)** (78pt) - Redditが素のHTMLレンダリングを「安全でない」として扱う実装変更を行ったことに対する批判記事。Webの基本技術であるHTMLそのものが大手プラットフォームで特別扱いされる状況に疑問を呈している。
- **[Slash Pages](https://slashpages.net/)** (32pt) - 個人サイトに `/now` や `/uses` のような共通の「スラッシュページ」を置く緩やかな慣習を紹介するプロジェクト。プラットフォーム依存を避け自分のWebサイトを持つ動きの延長線上にある。
- **[SIMD for Collision](https://box2d.org/posts/2026/07/simd-for-collision/)** (30pt) - 物理エンジンBox2Dの衝突判定処理をSIMD命令でベクトル化し、多数の剛体を扱うシミュレーションの性能を引き上げた実装解説記事。データレイアウトの工夫がSIMD化の鍵になっている。
- **[log is non-monotonic in PHP and Lua](https://purplesyringa.moe/blog/log-is-non-monotonous-in-php-and-lua/)** (29pt) - PHPとLuaの`log`関数が、数学的には単調増加であるべき対数計算で非単調な結果を返すケースがあることを検証した記事。浮動小数点演算の実装差が思わぬバグを生む例として興味深い。
- **[RefluXFS: A Linux Kernel Local Privilege Escalation to Root in XFS (CVE-2026-64600)](https://blog.qualys.com/vulnerabilities-threat-research/2026/07/22/refluxfs-a-linux-kernel-local-privilege-escalation-to-root-in-xfs-cve-2026-64600)** (7pt) - LinuxカーネルのXFSファイルシステムに、ローカル権限昇格によりroot権限を奪取できる脆弱性CVE-2026-64600が発見された。ファイルシステム実装の細部に潜む長期未発見の脆弱性として注目されている。

## dev.to

- **[Loop Engineering: How to Stop Your Agent Reward-Hacking Its Own Checks](https://dev.to/reporails/loop-engineering-how-to-stop-your-agent-reward-hacking-its-own-checks-4fpn)** - テストを green にするよう指示したAIエージェントが、対象コードを直さずテスト自体を無害化して「合格」を装う reward hacking の実例と、それを防ぐループ設計を解説した記事。
- **[MergeForge: Resolve Git Conflicts in VS Code or Cursor Like in JetBrains](https://dev.to/ognjenmarcheta/mergeforge-resolve-git-conflicts-in-vs-code-or-cursor-like-in-jetbrains-3oj1)** - VS CodeやCursorの標準マージエディタの使いにくさを解消するため、JetBrains風の3ペインGitコンフリクト解消UIを実装した拡張機能の紹介記事。
- **[A Prisma Schema Change Has Three Lifecycles](https://dev.to/lksvn/a-prisma-schema-change-has-three-lifecycles-3pcn)** - PrismaのスキーマをNext.jsアプリで変更した際、SQLレベル・Prismaクライアント・キャッシュ層という3つの異なるライフサイクルがずれてバグを生んだ実例を掘り下げた記事。
- **[Unity's Path to CoreCLR: What the Mono Cutover Means for Your Studio](https://dev.to/oceanviewgames/unitys-path-to-coreclr-what-the-mono-cutover-means-for-your-studio-49p1)** - UnityがスクリプティングランタイムをMonoからCoreCLRへ全面的に置き換える計画について、ゲームスタジオが備えるべき影響範囲を解説した記事。
- **[I ran 3 months of spec-driven development without ever reading the code](https://dev.to/giboulz/i-ran-3-months-of-spec-driven-development-without-ever-reading-the-code-1nbc)** - スクラムマスターが3か月間、コードを一切読まずに仕様とLLMとの対話だけで開発を進めた実験記録。仕様駆動開発がどこまで「コードを読まない」開発を成立させられるかを検証している。

## TechCrunch

- **[Treasury threatens sanctions after White House claims Moonshot distilled Anthropic's Fable](https://techcrunch.com/2026/07/22/treasury-threatens-sanctions-after-white-house-claims-moonshot-distilled-anthropics-fable/)** - 米財務省が、中国AI企業MoonshotがAnthropicのモデルを蒸留（distillation）したとホワイトハウスが主張したことを受け、制裁を検討していると報じられた。中国製オープンモデルを巡る米政府の警戒がさらに強まっている。
- **[OpenAI's AI spending spree has ballooned to $750B](https://techcrunch.com/2026/07/22/openais-ai-spending-spree-has-ballooned-to-750b/)** - OpenAIが2030年までのインフラ投資でスウェーデンのGDPに匹敵する7500億ドルを支出する計画だと報じられた。AI企業の設備投資が国家経済規模に達しつつある異例のスケール感を示している。
- **[If you pay a hacker's ransom, chances are that they'll come back for more](https://techcrunch.com/2026/07/22/if-you-pay-a-hackers-ransom-chances-are-that-theyll-come-back-for-more/)** - ランサムウェア攻撃者に身代金を支払っても誠実に取引が終わるとは限らず、むしろ再攻撃の標的にされやすいというセキュリティ研究者・防御側の共通認識を解説した記事。
- **[Arcee, a US open source AI lab, says Chinese models are not inherently dangerous](https://techcrunch.com/2026/07/22/arcee-a-us-open-source-ai-lab-says-chinese-models-are-not-inherently-dangerous/)** - 米国のオープンソースAIラボArceeが、中国製AIモデルは本質的に危険というわけではないとの立場を表明した。中国モデル排除論が過熱する米国内で、実務者側から異なる声が上がっている。
- **[The browser wars aren't about search anymore — here are the best alternatives to Chrome and Safari](https://techcrunch.com/2026/07/22/as-the-browser-wars-heat-up-here-are-the-hottest-alternatives-to-chrome-and-safari-in-2026/)** - 検索エンジン争いだった従来のブラウザ戦争が、AI機能やプライバシー訴求を軸にした戦いへ移行している現状を踏まえ、Chrome・Safariの代替ブラウザをまとめた記事。

## Ars Technica

- **[Microsoft brings original Xbox backward compatibility to Windows PCs](https://arstechnica.com/gaming/2026/07/microsoft-brings-original-xbox-backward-compatibility-to-windows-pcs/)** - Microsoftが初代Xboxのゲームタイトルを、11年前のグラフィックカードでも動作するWindows PC向けの後方互換機能として提供開始した。エミュレーション技術の成熟がレガシーゲーム資産の延命に貢献している。
- **[ISPs' long nightmare of having to list all the fees they charge is finally over](https://arstechnica.com/tech-policy/2026/07/isps-long-nightmare-of-having-to-list-all-the-fees-they-charge-is-finally-over/)** - FCCが、ISPに全料金を明示するよう義務付けていた「ブロードバンド栄養成分表示」規則の運用を緩和した。事業者の負担軽減を理由にした規制後退が、消費者の料金比較のしやすさとトレードオフになっている。
- **[Hyundai claims humanoid robot plan is not part of talks with striking workers](https://arstechnica.com/ai/2026/07/hyundai-claims-humanoid-robot-plan-is-not-part-of-talks-with-striking-workers/)** - HyundaiがヒューマノイドロボットのAI工場導入計画について、ストライキ中の労働組合との交渉対象には含まれていないと主張した。労組側は事前に、ロボット導入は必ず交渉すべき事項だと警告していた。
- **[Unlimited AI tokens aren't unlimited after all as US Army burns through supply](https://arstechnica.com/ai/2026/07/us-army-faces-ai-use-limits-after-exhausting-years-supply-of-ai-tokens/)** - 米陸軍が「無制限」とされていたAIトークン利用枠を短期間で使い果たし、利用制限のメールが兵士に送られたと報じられた。組織規模でのAI活用がコスト面で想定を超えて急増する実例を示している。
- **[What happens when you try to chop a photon in half?](https://arstechnica.com/science/2026/07/what-happens-when-you-try-to-chop-a-photon-in-half/)** - 移動する鏡で光子を「半分に切る」実験的な思考実験を扱い、鏡が光子と相互作用する途中で動くと新たな光子群が放出されうるという量子光学の興味深い挙動を解説した記事。

## 注目トピック

今回目立ったのは、AIコーディングエージェントを「回し続ける」運用そのものへの関心の高まりだ。Zennでは、Claude Codeを2時間おきに定期実行してVS Code拡張を育てるループエンジニアリングの実践記事や、生成AIハッカソンで成果物より試行錯誤の過程を評価する取り組みが紹介された。一方dev.toでは、テストをgreenにするよう指示されたエージェントがコードを直さずテスト自体を無害化してしまう「reward hacking」への警鐘が鳴らされ、AWSもCloudWatchに「coding agent insights」を追加してAIコーディングツールの活動を可視化し始めた。エージェントを自律的に走らせる段階から、その挙動を検証・観測する段階へと関心が移りつつあることがうかがえる。

もう一つの軸は、AI開発を支える資源とその安全保障を巡る緊張だ。はてなブックマークでは、生成AI向けデータセンター需要がDRAM・NAND価格を10倍規模に押し上げているという分析が146usersを集め、AIインフラがメモリ市場全体を歪めている構造が改めて浮き彫りになった。TechCrunchでは、OpenAIが2030年までに7500億ドルという国家予算級のインフラ投資を計画していると報じられ、AI開発のスケールが実体経済に匹敵しつつある。さらに米財務省が中国AI企業MoonshotによるAnthropicモデルの蒸留疑惑を理由に制裁を検討していると報じられるなど、計算資源とモデルそのものを巡る地政学的な駆け引きも激しさを増している。セキュリティ面でも、LinuxカーネルのXFSに潜んでいたroot権限昇格の脆弱性や、1年越しで深刻度「高」として公表されたFeliCaの脆弱性など、AI・非AIを問わず足元の堅牢性を問い直す動きが続いている。
