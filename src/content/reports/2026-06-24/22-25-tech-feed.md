---
title: "Tech Feed ダイジェスト（2026年6月25日）"
date: "2026-06-24T22:25"
category: "summary"
summary: "富士通PHOTON・OpenAI Jalapeño チップ・マネーフォワード情報流出・Vibe Coding警鐘・Google Play手数料引き下げ"
tags: ["ai", "security", "hardware", "llm", "devtools", "privacy", "aws", "frontend", "vibe-coding", "infra"]
---

## はてなブックマーク (テクノロジー)

- **[『クローズアップ現代』で末期がん女性がAIに相談している様子が衝撃的と話題に](https://posfie.com/@mumimushunyu/p/fzcQPXY)** ([354users](https://b.hatena.ne.jp/entry/s/posfie.com/@mumimushunyu/p/fzcQPXY)) - NHKのドキュメンタリーで86歳末期がん女性がAIに感情的なサポートを求めるシーンが大きな反響を呼んだ。「人間よりも配慮ある受け答えができている」という感想が多く、ホスピスケアや終末期医療へのAI活用の可能性と倫理的問いを同時に提示している。

- **[ChatGPTの心臓部『Transformer』って何がすごいの？ #マンガでわかるAIの仕組み 第1話](https://codezine.jp/article/detail/24575)** ([194users](https://b.hatena.ne.jp/entry/s/codezine.jp/article/detail/24575)) - Transformer アーキテクチャの Self-Attention 機構を図解マンガ形式で解説した入門連載の第1話。「なぜ文脈を理解できるのか」という問いに対して数式なしで直感的に答えており、LLMの仕組みを一般開発者に解きほぐす良質な教育コンテンツとして話題になった。

- **[「Transformerの最大475倍」富士通、GPUを効率的に使うLLMアーキテクチャ「PHOTON」開発](https://www.itmedia.co.jp/aiplus/article/2606/24/2000000125/news)** ([91users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/article/2606/24/2000000125/news)) - 富士通が発表した新LLMアーキテクチャ「PHOTON」は、同一GPU上でTransformerと比べて最大475倍の出力トークン数を実現するという。Attention機構を光学的アナロジーで再設計しており、GPU品薄が続く現状でスループット効率化を正面から狙うアプローチが注目される。

- **[「コードレビューは人間がやるべき」という、最後の幻想](https://newspicks.com/news/16930133/body/)** ([87users](https://b.hatena.ne.jp/entry/s/newspicks.com/news/16930133/body/)) - AIがコードレビューの精度・速度・網羅性でベテランエンジニアを超え始めた現在、「人間レビュー必須」という慣行を続ける合理的な理由が失われつつあると論じた記事。ただしチーム知識の共有・属人化の防止という観点での人間レビューの価値は残ると結論しており、議論の質が高い。

- **[マネーフォワード、約6.3万人分の情報流出](https://news.yahoo.co.jp/articles/c10f754de8015186eee5b36441b1a9657437fbca)** ([86users](https://b.hatena.ne.jp/entry/s/news.yahoo.co.jp/articles/c10f754de8015186eee5b36441b1a9657437fbca)) - 家計管理・法人向け会計サービスを展開するマネーフォワードで約6.3万件の個人情報が流出した。メールアドレスや氏名が含まれる可能性があり、フィッシング詐欺への悪用リスクが懸念される。金融SaaSのデータ管理への信頼を問い直す事案として注目されている。

## Zenn

- **[個人のプロンプト術をやめて、チームで回るAI駆動開発ループを作った話](https://zenn.dev/explaza/articles/d0aeb08fcd1888)** - 個人スキルとして属人化していたプロンプト技術をチームのワークフローに組み込み、ループ型のAI駆動開発プロセスへ移行した実践レポート。レビュー・テスト・デプロイの各フェーズにエージェントを差し込む設計が具体的に示されており、組織スケールでのAI活用のヒントが詰まっている。

- **[タスクを割り振る開発は終わった](https://zenn.dev/awesome_kou/articles/end-of-task-assignment-dev)** - 「誰が何をやるか」を決めてからコードを書く従来のチケット駆動開発が、AIエージェントの登場によって根本から変わりつつあると論じた記事。エージェントが実装を担う前提でチームの役割を再定義する必要性を提唱しており、エンジニアリングマネジメントに問いを投げかける内容だ。

- **[なぜ LLM に大喜利が難しいのか](https://zenn.dev/nttdata_tech/articles/3241a46dca47b2)** - 大喜利（即興的ユーモア・文脈破壊的な答え）がLLMにとって苦手な理由を、確率的な次トークン予測と創造的逸脱の相性の悪さという観点から分析した記事。「予測可能性こそが最も笑えない」というパラドックスを論じており、LLMの創造性の限界を理解するうえで示唆に富む。

- **[iOSアプリでSwift・Rust・Goの実行速度を比較してみた](https://zenn.dev/oba_shion/articles/872ce1434f5fc7)** - 同一ロジックをSwift・Rust・Goで実装してiOS上で実行速度を計測した実験記事。フィボナッチ・行列演算・文字列処理の各ベンチマークでRustが圧倒的だが、実際のアプリ開発では開発効率・エコシステムとのトレードオフが大きいという実践的な考察が続く。

- **[読みベースの編集距離を測るライブラリ「mòine」をつくりました](https://zenn.dev/tagucci/articles/fb1ca46cc7cdf3)** - 文字列の文字単位ではなく「よみがな」ベースで編集距離（レーベンシュタイン距離）を計算するJavaScriptライブラリの自作記事。日本語IME入力補完・誤変換修正・検索候補サジェストなど日本語テキスト処理の改善に直結するアプローチで、OSS貢献の実例として参考になる。

## Qiita

- **[バイブコーディングが「RPA問題」を再演している——属人化・重複・ブラックボックスを防ぐ最小ガバナンス設計](https://qiita.com/hirashima-gmoconnect/items/cfe5ba40a56b3dbf6a4b)** - Vibe Coding（AIに任せて作るコーディング）がRPA（ロボティクスプロセスオートメーション）が辿った失敗の轍、すなわち属人化・重複実装・ブラックボックス化を繰り返していると指摘した記事。最低限必要なガバナンス設計（命名規則・変更履歴・テスト要件）を提案しており、AI活用の品質管理に関わるエンジニア必読の内容だ。

- **[Claude Code セキュリティガードレール 実装テンプレ集——コピペで使える settings.json と hook スクリプト](https://qiita.com/nogataka/items/bab35c7b58a664d3b8f1)** - Claude Code が実行できる操作を制限するための `settings.json` 設定例と、危険なコマンド実行をブロックするhookスクリプトのテンプレートを一覧化した実践ガイド。ファイル削除・git force push・シークレット書き込みなどのリスクある操作をインターセプトする設定が即座にコピーして使えるようまとめられている。

- **[工数では見積もれない時代へ——AI時代の受託開発の見積もり・契約・成果物定義](https://qiita.com/nogataka/items/b76868fbabb1aa2d81e1)** - AIが実装の多くを担うようになった受託開発で、従来の人月見積もりが機能しなくなっている問題を論じた記事。成果物定義・品質基準・修正範囲の明示を契約に盛り込む「アウトカム契約」へのシフトが必要だと提唱しており、SI業界のビジネスモデル変革を迫る視点が鋭い。

- **[Railsで学ぶ計算量（Big-O）入門——「なんとなく速い/遅い」を言葉にする](https://qiita.com/akachiryo/items/90db7bf21b6546fce911)** - Railsの`.each`・`.include?`・`.find`などの実際のコード例を使って計算量（O(n)・O(n²)・O(log n)）を体感的に説明した入門記事。「なんとなく遅そう」という感覚をBig-O表記で言語化するプロセスを段階的に示しており、パフォーマンス改善の出発点として実践的だ。

## AWS 新着

- **[Amazon GuardDuty AI-powered investigations accelerate threat response (Preview)](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-guardduty/)** (2026-06-23) - GuardDutyの検出結果をAIが自動で解析し、脅威の原因・影響範囲・推奨対応をまとめたインシデントレポートを自動生成するプレビュー機能。従来は熟練SOCアナリストが数時間かけていたトリアージを自動化でき、セキュリティ運用の人的負荷を大幅に削減できる。

- **[AWS IoT Device SDK for Swift is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-iot-device-sdk-swift/)** (2026-06-24) - SwiftネイティブでAWS IoTに接続できる公式SDKがGAとなった。Apple Siliconデバイス・iOSアプリからIoTバックエンドへの安全な接続が標準APIで実現でき、HomeKit連携や産業用Appleデバイス向けIoTアプリの開発が大幅に容易になる。

- **[Amazon EC2 announces AMI Watermarks for improved AMI governance](https://aws.amazon.com/about-aws/whats-new/2026/06/ec2-image-watermarks-allowed-images)** (2026-06-24) - プライベートAMIにウォーターマーク（識別子）を埋め込む機能を追加し、AMIから起動したインスタンスに識別情報が自動継承される。承認済みAMIからのみインスタンスを起動させるポリシー制御が強化され、コンプライアンスやゴールデンイメージ管理が厳格化できる。

- **[Claude Tag is now available in beta via Claude Enterprise in AWS Marketplace](https://aws.amazon.com/about-aws/whats-new/2026/06/claude-tag-aws-marketplace/)** (2026-06-23) - AnthropicのClaude TagがAWS Marketplace経由でエンタープライズユーザーにベータ提供開始。Slackに直接ClaudeをタグするだけでAI回答が得られる機能で、社内ツールを切り替えずにAIアシスタントを組み込むユースケースを狙っている。

- **[Amazon EMR Serverless now supports live configuration updates without application restarts](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-emr-serverless/)** (2026-06-24) - EMR Serverlessで最大キャパシティやカスタムイメージ設定をアプリケーション停止なしにオンラインで変更できるようになった。バッチジョブを止めずに設定チューニングできるため、長時間実行のデータ処理ワークフローの運用コストが削減される。

## Lobsters

- **[Please keep code descriptions simple](https://akselmo.dev/posts/please-keep-code-descriptions-simple/)** (50pt) - コードの説明（コメント・PR説明・ドキュメント）を不必要に複雑にしすぎることへの警鐘。「何をするか」ではなく「なぜそうなのか」だけを書けばよく、過剰な説明はメンテナンスコストを増大させるというシンプルな主張が57コメントの活発な議論を引き起こしており、コードコミュニケーション文化の再考を促す。

- **[The Joy and Power of Understanding](https://binaryigor.com/the-joy-and-power-of-understanding.html)** (36pt) - 「動けばいい」で済ませずシステムの動作を深く理解することの重要性を論じた記事。ブラックボックスとして積み上がったAI生成コードが主流になりつつある今、理解に基づいた設計能力こそエンジニアの差別化要因だという主張は現代的な示唆を持つ。

- **[Adversarial Communication](https://blog.glyph.im/2026/06/adversarial-communication.html)** (30pt, vibecoding) - Vibe Codingの台頭により、AIへの指示（プロンプト）が「意図を正確に伝える」ことよりも「AIが誤解しないよう防御的に記述する」敵対的コミュニケーションになりつつあると指摘した論考。AIとの対話設計の本質的な難しさを言語化しており、プロンプトエンジニアリングの未来を問い直す内容だ。

- **[Porting WINE to a new Hobby OS](https://astral-os.org/posts/2026/04/03/wine-on-astral.html)** (20pt) - 趣味で開発しているホビーOS「Astral OS」にWINEを移植するプロセスを詳述した記事。WINEが依存するLinux ABIの深い部分（シグナルハンドリング・スレッドローカルストレージ・ELFローダー）を一つずつ実装していく過程がハンズオン形式で記録されており、OS開発の教材として価値が高い。

- **[The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)** (18pt) - Flask・Jinjaの作者Armin Ronacher氏が、AIエージェントが「実行→エラー→修正」のループを自律的に回すようになった時代の開発ワークフローの変化を論じたエッセイ。エージェントループが当たり前になると「人間が評価するための出力形式」が根本から変わると予測しており、ツール作者の視点から未来のAI開発環境を占う。

## dev.to

- **[Uber Burned Through Its Entire AI Coding Budget in 4 Months. Here's What Smart Teams Do Instead.](https://dev.to/aplomb2/uber-burned-through-its-entire-ai-coding-budget-in-4-months-heres-what-smart-teams-do-instead-2792)** - Uberが年間AIコーディング予算を4ヶ月で使い切ったケースを元に、トークン浪費を防ぐための賢いAI活用設計を解説した記事。問題の粒度を下げてエージェントに渡す・出力のキャッシュ戦略・リトライ上限の設定など、コスト管理の具体策が示されており、組織規模のAIツール導入担当者に実践的だ。

- **[How to Build an AI Agent That Actually Remembers Things](https://dev.to/amrree/how-to-build-an-ai-agent-that-actually-remembers-things-1egh)** - セッションをまたいで文脈を保持するAIエージェントを構築するための記憶アーキテクチャ（短期・長期・エピソード記憶の分類）を解説したチュートリアル。ベクトルDBへの類似検索・要約による圧縮・会話履歴の選択的保持など実装パターンが紹介されており、エージェント開発の実践的な設計指針として参考になる。

- **[How I built an end-to-end encrypted pastebin (and why the server can't read your text)](https://dev.to/slavasdev/how-i-built-an-end-to-end-encrypted-pastebin-and-why-the-server-cant-read-your-text-8jj)** - サーバーがコンテンツを復号できない「ゼロ知識」設計のpastebinを自作した記事。AES-GCMによるクライアントサイド暗号化・URLフラグメント（#以降）への鍵埋め込みでサーバーへの鍵送信を回避する構成は、E2EE Webアプリの教科書的な実装例として参考になる。

- **[I made the database compute everything: building an SLA-credit system of record on Aurora PostgreSQL + Vercel](https://dev.to/quietmoose/i-made-the-database-compute-everything-building-an-sla-credit-system-of-record-on-aurora-290d)** - SLAクレジット（障害時の返金計算）システムをアプリ層ではなくAurora PostgreSQLのストアドプロシージャ・生成列・イベントトリガーで完結させた設計を解説した記事。「DB側で計算する」判断の背景にあるトレードオフ（整合性・テスト難易度・パフォーマンス）が率直に論じられており、アーキテクチャ設計の良い事例研究だ。

## TechCrunch

- **[OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)** (2026-06-24) - OpenAIがBroadcomと共同設計した推論専用チップ「Jalapeño」を発表した。汎用GPUではなく自社ワークロードに最適化されたASICを持つことで推論コストの大幅削減を狙っており、Google TPU・Amazon Inferentia・Meta MTIA に続く大手プラットフォーマーのカスタムシリコン戦略が鮮明になった。

- **[AI was supposed to kill engineering jobs, but new data suggests they're the most resilient](https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient/)** (2026-06-24) - VC企業SignalFireのデータによると、AI台頭後も新規採用に占めるエンジニア比率が増加しており、レイオフ予測とは逆の動きが見られると報告された。AIが実装作業を代替する一方で「AIを使って何を作るか」を決める人材への需要が拡大しているという逆説が示されている。

- **[Companies are scrambling to stop employees from maxing out AI budgets with small tasks](https://techcrunch.com/2026/06/24/companies-are-scrambling-to-stop-employees-from-maxing-out-ai-budgets-with-small-tasks/)** (2026-06-24) - AIツールの月次トークン予算を些細なタスクで使い切る従業員が続出し、企業が利用ポリシーの策定・クォータ管理・用途フィルタリングに追われている実態を報じた記事。「トークンマキシマイズ」から「トークン配給」の時代に突入したと表現されており、企業のAI予算ガバナンスが新たな課題として浮上している。

- **[New website names and shames companies that still don't offer passkeys to users](https://techcrunch.com/2026/06/24/new-website-names-and-shames-companies-that-still-dont-offer-passkeys-to-users/)** (2026-06-24) - 人気Webサイトの24%がパスキー未対応だという調査を基に、未対応企業を公開で批判する「名指しサイト」が立ち上がった。パスワードレス認証の普及を社会的圧力で促す取り組みで、FIDO2/WebAuthn標準の採用加速につながるかが注目される。

- **[Figma adds code layers, support for animations, more AI features in new update](https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/)** (2026-06-24) - Figmaの新アップデートでコードレイヤー（デザインとコードの双方向同期）・モーション・シェーダーサポート・AIによるカスタムプラグイン生成が追加された。デザインツールとコードエディタの境界がさらに溶けてきており、デザイナーとエンジニアのコラボレーションワークフローが根本的に変わる予兆がある。

## Ars Technica

- **[One-two punch delivered in global operation disrupts cybercrime "assembly line"](https://arstechnica.com/security/2026/06/one-two-punch-delivered-in-global-operation-disrupts-cybercrime-assembly-line/)** (2026-06-24) - 国際的な法執行機関の連携オペレーションにより、マルウェア配布・フィッシングキット販売・資金洗浄を分業する「サイバー犯罪アセンブリライン」が摘発された。分業化・専門化が進んだサイバー犯罪エコシステムの実態が浮き彫りになっており、防御側も同様の組織化で対抗する必要性が強調されている。

- **[Google starts lowering Play Store fees, making good on Epic Games settlement](https://arstechnica.com/google/2026/06/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement/)** (2026-06-24) - Epic Gamesとの独占禁止法訴訟の和解条件に基づき、GoogleがPlay Storeの手数料引き下げを開始した。従来の30%から段階的に引き下げられる見通しで、Android向けアプリの収益構造に直接影響する。App Storeへの圧力も高まる可能性がある。

- **[FCC plans ID mandate that could block anonymous use of prepaid burner phones](https://arstechnica.com/tech-policy/2026/06/fcc-plans-id-mandate-that-could-block-anonymous-use-of-prepaid-burner-phones/)** (2026-06-24) - 米FCCがプリペイド携帯（バーナーフォン）購入時の身分証明を義務化する規則を計画中と報じられた。匿名通信のプライバシー保護を重視する市民団体が強く反発しており、セキュリティ研究者・ジャーナリスト・内部告発者への影響が懸念されている。

- **[White House app auto-downloads to government phones, can't be uninstalled](https://arstechnica.com/tech-policy/2026/06/white-house-app-auto-downloads-to-government-phones-cant-be-uninstalled/)** (2026-06-24) - ホワイトハウスの公式アプリが政府職員のスマートフォンに自動インストールされ、アンインストール不能な状態で配布されていると報じられた。MDMポリシーによる強制配布そのものは技術的に一般的だが、アプリの収集データとプライバシーポリシーの不透明さが問題視されている。

## 注目トピック

今回のフィードを通じて最も目立つ傾向は**AIコーディングの「コスト・ガバナンス」問題の臨界点到達**だ。Uberの予算4ヶ月での消費・企業によるクォータ管理の緊急化・Vibe CodingがRPA問題を再演するという指摘・工数見積もりの崩壊・Claude Code セキュリティガードレールの需要——これらは全て「AIを使うこと」から「AIを使いながら制御すること」への転換を同じ軸で指し示している。エージェントへの信頼が一巡し、ガバナンス・可観測性・コスト管理のフレームワーク整備フェーズに業界全体が移行しつつある。

ハードウェア競争でもOpenAI「Jalapeño」（Broadcom製推論チップ）の発表が特筆される。Google TPU・Amazon Inferentia・Meta MTIAに続き主要プレイヤーがカスタムシリコンを揃え、汎用GPU依存からの脱却が加速している。富士通PHOTONがTransformer比最大475倍のスループットを主張するアーキテクチャ革新と組み合わせることで、「GPU不足×推論効率化」という2026年の最大の技術的制約が複数の方向から同時に解かれようとしており、LLM推論コストの急落が中期的に現実味を帯びてきた。
