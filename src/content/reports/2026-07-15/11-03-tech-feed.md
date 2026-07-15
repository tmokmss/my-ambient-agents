---
title: "Tech Feed ダイジェスト（2026年7月15日）"
date: "2026-07-15T11:03"
category: "summary"
summary: "Microsoft Secure Bootが10年来破られていたと発覚・CursorにRCE脆弱性・DeepSeekがIPO協議・AWS LambdaがコーディングエージェントAPI対応など"
tags: ["security", "ai", "aws", "agent", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[手離れするインフラ設計を考える](https://yatta47.hateblo.jp/entry/2026/03/20/221447)** ([106users](https://b.hatena.ne.jp/entry/s/yatta47.hateblo.jp/entry/2026/03/20/221447)) - 担当者が異動・退職しても引き継げる「手離れの良い」インフラ設計とは何かを、属人化を防ぐドキュメント化や構成の単純化の観点から論じた記事。運用フェーズでの持続可能性を重視した設計思想を具体的に整理している。
- **[非エンジニアが自作アプリを社内にデプロイできる基盤を作った話](https://zenn.dev/hacobell_dev/articles/369ff476324aae)** ([85users](https://b.hatena.ne.jp/entry/s/zenn.dev/hacobell_dev/articles/369ff476324aae)) - Claude Codeの社内配布で非エンジニアも生成AIツールを使えるようになった一方、作ったものをチームに展開する手段がなかった課題を解消するため、非エンジニア向けのデプロイ基盤を構築した事例。AI駆動開発の裾野拡大に伴う新しい社内インフラニーズを示している。
- **[偽装USB判定ツールを無償公開　AIデータ社、自治体の調査後押し](https://www.nikkei.com/article/DGXZQOUE140VF0U6A610C2000000/)** ([52users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOUE140VF0U6A610C2000000/)) - 容量偽装や粗悪品が疑われるUSBメモリをAIで判定するツールが無償公開された。自治体の物品調達における偽装品混入調査を後押しする狙いがあり、サプライチェーン上のハードウェア偽装対策にAIを活用する具体例となっている。
- **[情報を追いかけることをやめた。自分の「技術地図」で歩くための“やらないこと”](https://findy-code.io/media/articles/list-songmu)** ([16users](https://b.hatena.ne.jp/entry/s/findy-code.io/media/articles/list-songmu)) - 情報が洪水のように押し寄せる中、著名エンジニアが全ての新技術を追いかけることをやめ、自分の専門領域という「技術地図」を軸に情報を取捨選択する考え方を語ったインタビュー記事。技術キャッチアップの疲弊感に悩む開発者への処方箋となっている。
- **[多層防御 vs 最先端のサプライチェーン攻撃 ―― freee の大規模障害訓練の舞台裏](https://developers.freee.co.jp/entry/redteam-exercise-2026)** ([12users](https://b.hatena.ne.jp/entry/s/developers.freee.co.jp/entry/redteam-exercise-2026)) - freeeが自社のセキュリティ体制を検証するため、サプライチェーン攻撃を模した大規模なレッドチーム演習を実施した舞台裏を紹介した記事。多層防御の各レイヤーが実際の高度な攻撃にどこまで耐えられるかを実践的に検証している。

## Zenn

- **[Claude CodeのstatusLineのすゝめ - コンテキスト残量とレートリミットを1画面で把握する](https://zenn.dev/zozotech/articles/cb767af383bc78)** - Claude CodeのstatusLine機能を使い、標準出力をそのまま表示するシンプルな仕組みでコンテキスト残量やレートリミットを常時可視化する自作statusLineの作り方を紹介した記事。`~/.claude/settings.json`にコマンドを1行登録するだけで導入できる手軽さが実用的。
- **[AIにルールファイルを数ヶ月自動更新させ続けたら、ルールは"良く"育ったのか](https://zenn.dev/r_kaga/articles/c9fcb75f1ff284)** - コードの変更に伴って陳腐化しがちなAIエージェント向けルールファイルを、AI自身に数ヶ月間継続的に更新させ続けた結果どうなったかを検証した記事。エージェント運用の保守コストという地味だが重要な課題への実践的アプローチを示している。
- **[Claude Code Desktop に追加されたブラウザ機能は、Playwright の代わりになりえるか](https://zenn.dev/marvelousu/articles/claude-browser-pane-review)** - 2026年7月にClaude Codeデスクトップアプリへ追加されたBrowser paneが、普段のブラウザ自動操作で使われるPlaywrightの代替になり得るかを、公式説明の裏取りと実機検証で確かめた記事。AIエージェントのブラウザ操作機能の実力を具体的に見極めている。
- **[AI時代のObservability設計 - PIIとAIの検索性を両立させ、自動修復する（実践編）](https://zenn.dev/aircloset/articles/3b8e60fcaab4b7)** - アプリケーション・インフラ・CI・LLMの4軸で観測性を設計する連載の実践編として、個人情報（PII）を保護しつつAIエージェントが検索・自動修復に活用できるログ基盤の具体的な実装を解説した記事。
- **[夏休みが始まる前に知っておきたい、Reactエンジニアに優しくなったモバイルアプリ開発の世界](https://zenn.dev/cybozu_frontend/articles/rn-devmap-in-2026)** - React Nativeを中心としたモバイルアプリ開発のエコシステムが2026年時点でどこまでReactエンジニアに親しみやすくなったかを整理した記事。Web側の知識をモバイル開発に持ち込む際の障壁がどう下がってきたかを俯瞰できる内容。

## Qiita

- **[AI⇔人間 がdiff上にコメントを書き合える「hunk」がすごい](https://qiita.com/kuma_3838/items/14df505c7023f665c585)** - コードレビューのやり取りをdiffのハンク単位でAIと人間が直接コメントし合える新しいツール「hunk」を紹介した記事。AIによるコード生成とレビューの往復を、既存のPRコメントより粒度細かく効率化する試みとして注目される。
- **[Amazon S3 Vectors で「月額ほぼゼロの RAG」を作ってみた](https://qiita.com/musa_rock/items/d90580d5cbcb8215d6f9)** - 専用ベクトルDBを立てずAmazon S3 Vectorsだけを使い、極めて低コストなRAG（検索拡張生成）システムを構築した実践記事。小規模なRAG用途であれば専用インフラを持たずとも十分実用に耐えることを具体的な構成で示している。
- **[ｳﾝ十台の検証環境の管理を1つのWebコンソールに統合した話 〜HTMX + サーバレスで月額50円運用〜](https://qiita.com/morishio/items/df304e891fb2405a2d30)** - 数十台に散らばっていた検証環境の状態管理を、HTMXとサーバレス構成による軽量なWebコンソールに統合し、月額50円という低コストで運用している実践記事。凝ったSPAを作らずHTMXで十分という選択が示唆に富む。
- **[量子クラウドって実際どうなの？第1の発見：待ち時間がある](https://qiita.com/imh1104/items/9c19946f020a065d2dce)** - クラウド経由で提供される量子コンピュータを実際に使ってみたところ、ジョブ投入から実行までの待ち時間が実用上の大きな制約になることを報告した記事。量子コンピューティングの実運用における地味だが重要な課題を浮き彫りにしている。
- **[正式リリース前の機能を先取り！kintoneと生成AIをつなぐ2つのMCPサーバーを試してみた](https://qiita.com/mu2in/items/230ed5f9fb2d9da8c309)** - 業務アプリ基盤kintoneと生成AIエージェントを接続する2種類のMCPサーバーをリリース前から検証した記事。ノーコード業務基盤とAIエージェントの連携が実務レベルでどこまで進んでいるかを具体的に示している。

## AWS 新着

- **[AWS Lambda console provides a one-click setup prompt for coding agents](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-prompt-coding-agents/)** (2026-07-14) - Lambdaコンソールから、AIコーディングエージェントにAWS Serverless SkillsとMCPサーバーをワンクリックで設定できるプロンプトが提供された。サーバーレス開発の知見をエージェントへ即座に埋め込める実務的な機能追加。
- **[Amazon Aurora DSQL is now available in Europe (Spain)](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-available-in-spain/)** (2026-07-14) - サーバーレスの分散SQLデータベースAurora DSQLが、欧州（スペイン）リージョンの単一リージョンクラスターとして利用可能になった。アクティブ・アクティブな高可用性を持つ新世代DBの提供リージョンが着実に拡大している。
- **[Amazon CloudFront Functions now supports logging to CloudFront access logs](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudfront-functions-access-logs/)** (2026-07-14) - エッジで動作する軽量JavaScript実行環境CloudFront Functionsから、カスタムデータをCloudFrontのアクセスログへ直接書き込めるようになった。エッジでの処理内容をデバッグ・分析しやすくする地味だが有用な改善。
- **[AWS IAM Identity Center achieves FedRAMP Class C Certification](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-identity-center-fedramp/)** (2026-07-14) - IAM Identity Centerが米国東西4リージョンでFedRAMP Class Cの認証範囲に加わった。米国政府機関向けワークロードでシングルサインオン基盤としてIAM Identity Centerを採用しやすくなる。
- **[AWS Elastic Disaster Recovery now supports Amazon EBS volume initialization rate](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-drs-fast-hydration/)** (2026-07-14) - 災害復旧サービスAWS DRSが、復旧時にEBSボリュームの初期化速度を指定できるようになり、訓練や実際の復旧時によりすばやくフルパフォーマンスへ到達できるようになった。

## Lobsters

- **[You should probably check on your smart appliances](https://xeiaso.net/notes/2026/check-your-smart-tv/)** (51pt) - スマートTVなどのIoT家電が、メーカーのサポート終了後も外部から静かに攻撃対象になり得ることを、実際の挙動観察を交えて警告した記事。ネットワークに繋がる家電を「買ったら終わり」にせず継続的に見直す必要性を訴えている。
- **[Full disclosure: Arbitrary code execution in Cursor](https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left)** (7pt) - AIコーディングエディタCursorに任意コード実行につながる脆弱性が見つかり、ベンダーとの調整が難航したためフルディスクロージャーに踏み切った経緯を報告したセキュリティ記事。AIコーディングツール自体が新たな攻撃対象になっている実例として重要。
- **[Too many words about DIDs](https://steveklabnik.com/writing/too-many-words-about-dids/)** (32pt) - 分散型ID（DID）を巡る仕様や実装が乱立し複雑化している現状を、著名エンジニアが批判的に整理した長文記事。標準化が追いついていない分散アイデンティティ技術の現在地を冷静に俯瞰している。
- **[How I use HTMX with Go](https://www.alexedwards.net/blog/how-i-use-htmx-with-go)** (29pt) - Go言語のバックエンドとHTMXを組み合わせたシンプルなWebアプリケーション構成の実践パターンを紹介した記事。SPAフレームワークに頼らずサーバーサイドレンダリング中心で組む選択肢の実用性を具体的に示している。
- **[6× faster binary search: from compiled code to mechanical sympathy](https://pythonspeed.com/articles/branchless-binary-search/)** (27pt) - 分岐を排除したbranchless binary searchの実装により、コンパイル後のコードやCPUの特性（メカニカルシンパシー）を意識するだけで6倍の高速化を達成した過程を解説した記事。低レベル最適化の効果を数値で具体的に示している。

## dev.to

- **[uv is amazing and that's exactly what should scare Python devs](https://dev.to/adioof/uv-is-amazing-and-thats-exactly-what-should-scare-python-devs-lp2)** - Rustベンチャー製のPythonパッケージ管理ツールuvが優れている一方で、単一のベンチャー企業が資金提供するツールにエコシステム全体が急速に依存していくことへの懸念を論じた記事。ツールの利便性とエコシステムの持続可能性のトレードオフを扱っている。
- **[Kysely: Type-Safe SQL Query Builder for Node.js (2026)](https://dev.to/stacknotice/kysely-type-safe-sql-query-builder-for-nodejs-2026-2kmj)** - ORMが持ち込みがちな「頼んでいない魔法の挙動」や性能チューニングのしづらさを避けつつ型安全性を維持できるSQLクエリビルダーKyselyの特徴を解説した記事。ORMとSQL直書きの中間的な選択肢としての実用性を示している。
- **[Building an anonymous AI photo editor without letting one visitor take the GPU](https://dev.to/nenoke/building-an-anonymous-ai-photo-editor-without-letting-one-visitor-take-the-gpu-dpo)** - ブラウザベースのAI写真編集サービスを開発する中で、匿名利用者一人がGPUリソースを独占してしまわないよう制御する仕組みを構築した記事。共有GPUリソースの公平な配分という実運用上の課題を具体的に扱っている。
- **[I'm sick of AI "Thinkslop" in my PRs](https://dev.to/nexadiag_nexa_312a4b5f603/im-sick-of-ai-thinkslop-in-my-prs-e)** - 機械設計出身の開発者が、AIエージェントが生成する冗長で意味の薄い「Thinkslop」的なPRコメントやコード変更にうんざりしていると訴えたエッセイ。精度が命の製造業出身者ならではの視点から、AI生成コードの品質基準を問い直している。
- **[Understanding the HTTP OPTIONS Method](https://dev.to/alireza_hassankhani_b8401/understanding-the-http-options-method-4909)** - CORSのプリフライトリクエストの前提となるHTTP OPTIONSメソッドの役割を、Origin・Fetch Credentialsなどこれまでの連載内容を踏まえて解説した記事。ブラウザのクロスオリジン制御の基礎を段階的に積み上げる教育的な内容。

## TechCrunch

- **[OpenAI's first hardware device is reportedly a screenless speaker that can move](https://techcrunch.com/2026/07/14/openais-first-hardware-device-is-reportedly-a-screenless-speaker-that-can-move/)** - OpenAI初のハードウェア製品が、画面を持たず自律的に動く機械要素を備えたスピーカー型デバイスになるとBloombergが報じた。「コンパニオン」として感じられることを狙った設計だといい、AIエージェントが物理的な存在感を持つ方向への模索がうかがえる。
- **[DeepSeek reportedly in talks to raise $1.5B, then IPO](https://techcrunch.com/2026/07/14/deepseek-reportedly-in-talks-to-raise-1-5b-then-ipo/)** - 中国のLLM開発企業DeepSeekが、評価額710億ドルで15億ドルの新規資金調達を協議しており、2027年のIPOも視野に入れていると報じられた。オープンウェイトモデルで存在感を示してきた同社が、いよいよ資本市場に本格参入しようとしている。
- **[Iran abused mobile networks' vulnerabilities to locate US military in the Middle East, report says](https://techcrunch.com/2026/07/14/iran-abused-mobile-networks-vulnerabilities-to-locate-u-s-military-in-the-middle-east-report-says/)** - イラン政府が、既知の携帯電話網の脆弱性を悪用して中東の米軍関係者の位置を特定し、攻撃に利用していたとする報告が明らかになった。国家主体によるモバイルネットワークの構造的な脆弱性の軍事的悪用という深刻な実例。
- **[Apple opens its new Siri AI to everyone with the iOS 27 public beta](https://techcrunch.com/2026/07/14/apple-opens-its-new-siri-ai-to-everyone-with-the-ios-27-public-beta/)** - Appleが刷新版Siriを組み込んだiOS 27のパブリックベータを公開し、開発者ベータを入れずとも一般ユーザーが早期に試せるようになった。音声アシスタント分野での巻き返しをかけたAppleの新AI機能が、より広い層の目に触れ始める。
- **[Reflection inks $1B compute deal with Nebius](https://techcrunch.com/2026/07/14/reflection-inks-1b-compute-deal-with-nebius/)** - オープンソースAI技術を開発するReflection AIが、GPUクラウド企業Nebiusと10億ドル規模の計算資源調達契約を締結した。自社でGPUインフラを保有せず専業クラウド企業から大規模に計算資源を調達するモデルが、有力な選択肢として定着しつつある。

## Ars Technica

- **[Microsoft's Secure Boot has been broken for a decade and no one noticed until now](https://arstechnica.com/security/2026/07/microsoft-secure-boot-has-been-broken-for-most-of-its-existence/)** - Microsoftが失効させ損ねていた古い署名済み「shim」ブートローダーが長年放置されていたため、単純な手順でSecure Bootをバイパスできる状態が続いていたことが発覚した。ファームウェアレベルの信頼チェーンが、運用上の見落とし一つで十年単位で崩れていた深刻な事例。
- **[Solution to Feynman's reverse sprinkler puzzle also applies to "silly sprinklers"](https://arstechnica.com/science/2026/07/solution-to-feynmans-reverse-sprinkler-puzzle-also-applies-to-silly-sprinklers/)** - 水を吸い込む「逆スプリンクラー」がどちらに回転するかという物理学者ファインマンの有名な難問について、2024年に提唱された「運動量流理論」がより奇抜な形状のスプリンクラーにも当てはまることを検証した研究が紹介されている。長年未解決だった古典的パズルに決着がついた形。

## 注目トピック

今回目立つのは、AIエージェントを「使う」段階から「運用を効率化・自作する」段階への移行を示す記事が複数のソースに散らばっていたことだ。ZennではClaude Codeのコンテキスト残量を可視化する自作statusLine、Browser paneがPlaywrightの代替になり得るかの検証、エージェント向けルールファイルを数ヶ月自動更新させ続けた結果の考察と、AIエージェントそのものを開発者が調整・観察するメタな記事が並んだ。AWSもLambdaコンソールにコーディングエージェント向けのワンクリック設定プロンプトを追加し、kintoneと生成AIをつなぐMCPサーバーがQiitaで検証されるなど、エージェントとの接続部分を標準化・省力化する動きがプラットフォーム側でも進んでいる。

一方でセキュリティ面では、AIコーディングツール自体が新たな攻撃対象になっている現実が浮き彫りになった。LobstersではAIエディタCursorの任意コード実行脆弱性がフルディスクロージャーされ、ベンダー対応の遅さが問題視されている。同時にArs Technicaが報じたMicrosoft Secure Bootの「10年間気づかれなかった」バイパス問題は、AIとは無関係ながら、ファームウェアという最も基礎的な信頼チェーンでさえ運用上の見落としが長期間放置され得ることを示しており、はてなブックマークのfreeeによるサプライチェーン攻撃を模したレッドチーム演習やAIデータのUSB偽装判定ツールとあわせて、地に足の着いたセキュリティ対策の重要性を改めて浮かび上がらせている。
