---
title: "Tech Feed ダイジェスト（2026年6月27日）"
date: "2026-06-27T11:02"
category: "summary"
summary: "Bluesky 4500万人突破・Anthropic Mythos 5 政府解禁・韓国全軍ドローン戦士化・Starlink米国モバイルサービス・OpenUI登場"
tags: ["bluesky", "ai", "llm", "security", "aws", "devops", "nix", "frontend", "agents", "military"]
---

## はてなブックマーク (テクノロジー)

- **[Bluesky、ユーザー数が4500万人を突破](https://www.watch.impress.co.jp/docs/news/2120504.html)** ([181users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/news/2120504.html)) - Blueskyがアクティブユーザー4500万人突破を発表した。X（旧Twitter）離脱の受け皿として急成長を続けており、AT Protocolによる分散型SNSが主流インフラとしての地位を着実に固めつつあることを示すマイルストーンだ。

- **[【M365 Copilot】自由にツールを使えない現場で始めるちょいRPA](https://qiita.com/yuyanz/items/5c96232d188ecfb2544b)** ([118users](https://b.hatena.ne.jp/entry/s/qiita.com/yuyanz/items/5c96232d188ecfb2544b)) - 独自ツール導入が難しい企業環境でもMicrosoft 365 CopilotとPower Automateを組み合わせてRPA的自動化を実現する実践記事。Excelや Teams・Outlookとの連携フローを自然言語で設計できるため、非エンジニアチームのAI活用入口として注目されている。

- **[手動診断でしか見つからない脆弱性の話](https://tech.mti.co.jp/entry/ac2026summer/0626)** ([50users](https://b.hatena.ne.jp/entry/s/tech.mti.co.jp/entry/ac2026summer/0626)) - 自動スキャンツールでは検出できず、熟練した手動ペネトレーションテストでのみ発見できる脆弱性の類型と実例が解説されている。ビジネスロジックの欠陥・複数脆弱性の連鎖・コンテキスト依存のアクセス制御抜けなど、セキュリティ自動化の限界を具体的に示す内容だ。

- **[Authorization Design as a User Story：権限設計を通して学ぶ業務フローとユーザーストーリーのポイント](https://developers.freee.co.jp/entry/authorization-design-as-a-user-story)** ([52users](https://b.hatena.ne.jp/entry/s/developers.freee.co.jp/entry/authorization-design-as-a-user-story)) - freeeが権限設計をユーザーストーリーとして先に定義するアプローチを紹介。「誰が何をできる・できない」の境界をプロダクト要件として明示することで実装後の権限漏れや過剰付与を防ぐ設計プロセスが、実例付きで解説されている。

- **[自衛隊、指揮統制にAI活用　米パランティア導入を検討、国産化も](https://www.asahi.com/articles/ASV6T3QJ0V6TUTFK00TM.html)** ([33users](https://b.hatena.ne.jp/entry/s/www.asahi.com/articles/ASV6T3QJ0V6TUTFK00TM.html)) - 日本の自衛隊がPalantirの軍用AI基盤導入を検討しているほか、国産代替システムの並行開発も進めていると報道された。軍事指揮統制系へのAI導入は意思決定の高速化と同時に誤判断リスクや自律的攻撃判断の倫理問題を孕む重大な政策決定だ。

## Zenn

- **[明日から始める、コーディングエージェント時代のフルスタック開発 — AWS Blocks のソースコードを読む](https://zenn.dev/aws_japan/articles/aws-blocks-source-reading)** - AWS Japan SAによるAWS Summit 2026補足記事。新機能「AWS Blocks」のソースコードを読みながら、コーディングエージェントとの協働でフルスタック開発を進める具体的なワークフローを解説しており、エージェントが生成したコードの構造理解を人間がどう担保するかという実践的な視点が参考になる。

- **[会議中に Claude が「次に聞くべきこと」を提案してくれる議事録アプリを作った](https://zenn.dev/uguisu_blog/articles/d777bd252bab6b)** - リアルタイム音声文字起こしをしながら「営業として・エンジニアとして次に何を確認すべきか」をClaudeがロール別にリアルタイム提案する議事録WebアプリAI-Gizirokuの開発記録。AI-in-the-loop型のミーティングアシスタントの実装アプローチとして実用的な先行事例だ。

- **[Generative UIにJSONは最適なのか？ OpenUIという選択肢](https://zenn.dev/sc30gsw/articles/d7320f1247b785)** - LLMがUIコンポーネントを動的に生成する「Generative UI」において、JSONスキーマ経由ではなくThesysが開発した専用プロトコルOpenUIを使う選択肢を検討した記事。A2UI・OpenGenerative UI等の競合と比較しながらアプローチの違いとトレードオフが整理されており、Generative UI実装の技術選定指針として有用だ。

- **[ViteのresolveIdで特定環境のビルドだけ不要モジュールをstub化してバンドル軽量化](https://zenn.dev/dress_code/articles/78667afa7c4fd9)** - Viteの`resolveId`フックを使って本番ビルド時にDexie.jsなどのモック・開発専用モジュールを空stubに差し替え、バンドルサイズを削減するテクニックを紹介。モードガードだけでは動的importが残る問題をプラグインレベルで根絶する方法として、フロントエンドビルド最適化の実践知識として価値が高い。

## Qiita

- **[AIエージェントにサボらせないSkillsの書き方 — 7つの設計手法＋サボり度測定Skill付き](https://qiita.com/nogataka/items/2783f25816699e8318cc)** - Claude Codeのエージェントが指示を曖昧に解釈して手を抜く「サボり」をスキル設計で防ぐ7つの手法を解説。成果物の明示・検証基準の埋め込み・失敗例提示・サボり度スコアリングスキルまで込みで公開しており、エージェント品質の再現性を設計段階で担保するアプローチが参考になる。

- **[ADCSのESC1〜ESC16を完全攻略する〜Active Directory証明書サービスの全脆弱性クラスを理解する〜](https://qiita.com/suzukengo/items/bece910ce5650c3a6be0)** - Active Directory証明書サービス（ADCS）に存在するESC1からESC16まで全16クラスの脆弱性を体系的に解説した記事。証明書テンプレートの設計ミスや権限委任の不備を突いてドメイン管理者権限を奪取するまでの攻撃経路が整理されており、Active Directory環境のセキュリティ評価に不可欠な知識が網羅されている。

- **[話題のトークン課金節約ライブラリ Headroom は本当に効果があるのか実測してみる](https://qiita.com/ksonoda/items/a1a97be8fed52c34ec89)** - LLMのコンテキストウィンドウを動的に圧縮してトークン消費を削減すると謳うライブラリ「Headroom」を実際のワークロードで検証した記事。削減率と応答品質の低下を数値で測定しており、コスト削減の実効性と精度トレードオフが明確に示されている。

- **[【AWS】DevOpsAgentでレビューを自動化する](https://qiita.com/Nana_777/items/31ef1d637150409a1990)** - AWS DevOpsAgentを使ってPull RequestのコードレビューをAIで自動化する設定と実際の動作を紹介した記事。CodeGuruベースのAIレビューコメントをPRへ自動投稿する仕組みとカスタマイズ方法が解説されており、CI/CDパイプラインへのAIレビュー統合の具体例として参考になる。

## AWS 新着

- **[Amazon EC2 announces AMI Watermarks for improved AMI governance](https://aws.amazon.com/about-aws/whats-new/2026/06/ec2-image-watermarks-allowed-images/)** (2026-06-24) - EC2のプライベートAMIにカスタム識別子（ウォーターマーク）を埋め込み、コピーや派生AMIにも自動的に引き継ぐ機能が追加された。Allowed Images設定と組み合わせることで組織が承認したゴールデンイメージ系統のみを利用強制でき、AMIサプライチェーンのガバナンス強化に役立つ。

- **[Amazon EMR Serverless now supports live configuration updates without application restarts](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-emr-serverless/)** (2026-06-24) - EMR Serverlessで最大キャパシティやカスタムイメージ設定をアプリケーション停止なしに変更できるようになった。設定変更のためにジョブを止める運用上の手間が不要になり、長時間バッチ処理を止めずにスケール調整できる点が大規模データ処理ワークロードで恩恵を受ける。

- **[AWS IoT Device SDK for Swift is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-iot-device-sdk-swift/)** (2026-06-24) - macOS・iOS・tvOSおよびLinux向けのSwiftネイティブIoT SDKがGAになった。これまでC/C++ラッパー経由でしかAWS IoTをSwiftから使えなかったが、純SwiftのAPIでMQTT接続・Shadow同期・Jobsサービスをネイティブに利用できる。

- **[Amazon Route 53 Global Resolver now supports sharing DNS Views between AWS Accounts](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-route-53-global-resolver/)** (2026-06-24) - Route 53 Global ResolverのDNSビューをAWS RAM経由でクロスアカウント共有できるようになった。マルチアカウント環境で一元管理したDNS解決ポリシーを各アカウントに適用でき、ランディングゾーン設計における名前解決の集中管理が実現しやすくなる。

## Lobsters

- **[NLNet Labs LLM Policy](https://nlnetlabs.nl/llm-policy/)** (36pt) - DNSソフトウェアで知られるNLNet LabsがLLMとの向き合い方を組織ポリシーとして明文化したドキュメント。コードレビューにLLMを使う際の承認基準・著作権帰属・セキュリティ評価義務など、OSSセキュリティ組織が先行して制度化した実例として、企業のAIポリシー策定の参考になる。

- **[Making devenv start fast, and the whole nixpkgs with it](https://devenv.sh/blog/2026/06/26/making-devenv-start-fast-and-the-whole-nixpkgs-with-it/)** (20pt) - Nix/devenvの開発環境起動を大幅に高速化した取り組みの詳細報告。nixpkgsの評価をレイジーにする改善でdevenv全体の初回起動が著しく短縮され、Nixベースの開発環境をチームに導入する際の最大の摩擦要因が解消されたことが技術的に解説されている。

- **[GuixPkgs: every Guix package, as a Nix flake](https://fzakaria.com/2026/06/25/guixpkgs-every-guix-package-as-a-nix-flake)** (26pt) - GNU Guixのパッケージリポジトリ全体をNix Flakeとして利用できるようにした実験的プロジェクト。GuixとNixは思想的に近いが互換性がなかったため、Guix固有パッケージをNix環境から呼び出せるようにする橋渡しとして評価されており、Linuxパッケージエコシステムの相互運用への具体的なアプローチとして注目される。

- **[ARIA, anti-patterns, and you](https://dbushell.com/2026/06/26/aria-anti-patterns-and-you/)** (17pt) - WAI-ARIAの誤用・過剰使用がアクセシビリティをかえって損なうアンチパターンをまとめた実践記事。`role="button"` をdiv要素に付与するだけでは本物のbuttonと同等にならない問題やaria-labelの誤配置など、スクリーンリーダーユーザーが実際に体験する問題が具体的なHTMLコード例で示されている。

## dev.to

- **[Priced Out by AI](https://dev.to/rawveg/priced-out-by-ai-2o36)** - AI学習・推論向けHBMメモリ需要の急増がスマートフォン向けRAM供給を圧迫し、一般消費者が手頃な価格のデバイスを入手しにくくなるという技術経済論を展開した記事。AIインフラの半導体需要が民生品市場に与える逆説的な影響をサムスン製造ラインの実態から論じており、AI普及の「コスト外部化」として読む価値がある。

- **[How I Implemented GPTQ from Scratch (and What I Learned)](https://dev.to/thokozani_buthelezi_2cd41/how-i-implemented-gptq-from-scratch-and-what-i-learned-39d9)** - nanoGPTモデルに対してGPTQ量子化アルゴリズムをゼロから実装し、61層を量子化した結果パープレキシティ劣化が1.1%に抑えられた実験報告。Hessianベースの重み更新計算から各レイヤーの量子化誤差補正まで内部動作を実装レベルで理解する過程が詳述されており、量子化理論の深い理解に役立つ内容だ。

- **[Distributed Scheduled Job Locking with Redis](https://dev.to/fathma/distributed-scheduled-job-locking-with-redis-3e39)** - 単一サーバーで動いていたスケジュールジョブを10台に水平スケールした際の重複実行問題をRedisの分散ロックで解決するパターンを解説した記事。SETNXベースの単純ロックからRedlockアルゴリズムまで段階的に発展させながら、プロセスクラッシュ時のデッドロックなど各手法の落とし穴も丁寧に説明されている。

- **[Structured Outputs: How We Stopped Parsing LLM Responses by Hand](https://dev.to/lycore/structured-outputs-how-we-stopped-parsing-llm-responses-by-hand-3lgb)** - 本番でLLMの応答を手動パースしていたチームがJSONスキーマ強制のStructured Outputsに移行してパース失敗率をほぼゼロにした実体験報告。Tool calling / response_formatの実装パターン・スキーマ設計のベストプラクティス・移行時の注意点が整理されており、LLMアプリの信頼性改善の参考になる。

## TechCrunch

- **[Trump Admin releases Anthropic Mythos to be used by more than 100 US companies, agencies](https://techcrunch.com/2026/06/26/trump-admin-releases-anthropic-mythos-to-be-used-by-more-than-100-us-companies-agencies/)** (2026-06-26) - トランプ政権がAnthropicの「Mythos 5」モデルを米国政府機関および100社以上の企業向けに正式展開すると発表した。政府が特定のAIモデルを公式承認して広範配備するという前例のない動きであり、AnthropicがOpenAIと並ぶ政府公認AIプロバイダとしての地位を固めた形だ。

- **[OpenAI limits GPT-5.6 rollout after government request, says restrictions shouldn't be the norm](https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/)** (2026-06-26) - OpenAIはホワイトハウスの要請を受けGPT-5.6を段階的・限定的にリリースすると発表したが、「こうした制限が常態化すべきでない」と異議も唱えた。政府のAI安全審査プロセスが製品リリーススケジュールに直接介入した具体例として、業界全体が注視している。

- **[Tesla settles FSD crash lawsuit as federal investigations continue](https://techcrunch.com/2026/06/26/tesla-settles-fsd-crash-lawsuit-as-federal-investigations-continue/)** (2026-06-26) - TeslaのFSD（Full Self-Driving）関連の衝突事故訴訟が示談で解決した一方、NHTSAによる連邦調査は継続されている。個別訴訟の解決が連邦規制の調査打ち切りを意味しないことが改めて示され、自動運転技術の法的責任フレームワークの整備が急がれる状況だ。

- **[Robotaxis drive miles just to get cleaned and charged; this new startup wants to fix that](https://techcrunch.com/2026/06/26/this-silicon-valley-startup-has-raised-10m-to-build-pitstops-to-clean-and-charge-robotaxis/)** (2026-06-26) - ロボタクシーが清掃・充電のために無駄に移動する問題を解決するため、専用ピットストップインフラを構築するスタートアップが1000万ドルを調達した。自律走行車の普及に伴い、車両メンテナンスインフラ自体がビジネスとして成立する新市場が生まれつつあることを示す事例だ。

## Ars Technica

- **[South Korea plans to train entire military as "drone warriors"](https://arstechnica.com/ai/2026/06/south-korea-plans-to-train-entire-military-as-drone-warriors/)** (2026-06-26) - 韓国軍が全軍人をドローン操縦・対ドローン戦技能を持つ「ドローン戦士」として訓練する計画を発表した。北朝鮮の無人機脅威に対応するための政策であり、軍事教育の根幹をドローン技術と電子戦に置き換える大規模なドクトリン転換として注目されている。

- **[Streaming services' obnoxiously loud ads become illegal on July 1 in California](https://arstechnica.com/gadgets/2026/06/streaming-services-obnoxiously-loud-ads-become-illegal-on-july-1-in-california/)** (2026-06-26) - カリフォルニア州が7月1日からストリーミングサービスにおける番組本編より音量が大きい広告を違法とする法律を施行する。テレビ放送にはFCCのラウドネス規制があったがNetflixなどストリーミングには未適用だったギャップを埋める動きで、他州への波及も予想される。

- **[SpaceX plans to launch Starlink mobile service in the US](https://arstechnica.com/space/2026/06/spacex-plans-to-launch-starlink-mobile-service-in-the-us/)** (2026-06-26) - SpaceXが既存スマートフォンで衛星に直接接続できる「Starlink Direct to Cell」モバイルサービスを米国向けに正式ローンチする計画を明らかにした。T-Mobileとの協業で地上キャリア圏外でもLTE接続を提供するこのサービスは、通信インフラの空白地帯を埋める可能性がある。

- **[Microsoft adds another year to Windows 10 extended update program](https://arstechnica.com/gadgets/2026/06/microsoft-adds-another-year-to-windows-10-extended-update-program/)** (2026-06-25) - MicrosoftがWindows 11のハードウェア要件を満たせないユーザー向けのWindows 10延長サポートプログラムをさらに1年延長すると発表した。数億台以上のWindows 10端末が依然として稼働する現実を受けた決定で、TPM 2.0非搭載機を抱える法人・教育機関に移行猶予が生まれる。

## 注目トピック

本日最大のニュースは**Anthropic Mythos 5のトランプ政権による公式展開**だ。政府機関・民間企業100社以上への配備という規模は、特定AIモデルが政府公認インフラとして制度化された初の事例に近く、AIガバナンスの新たなフェーズへの突入を意味する。同日にOpenAIがGPT-5.6リリースを政府要請で制限しながらも「常態化への反対」を表明した対照的な立場と合わせて読むと、AI安全性をめぐる政府・民間の力学が複雑な緊張関係に入ったことが見えてくる。はてなブックマークでも「アンソロピック：ミュトス5を復活」として国内でも注目されており、AnthropicとOpenAIの政府関係をめぐる競争が今後の重要テーマになるとみられる。

セキュリティと軍事の側面では**ドローン戦の制度化**が印象的な一日だ。韓国が全軍ドローン戦士化計画を発表し、日本では自衛隊へのPalantir AI導入が報道された。民間では手動診断にしか見つからない脆弱性の類型化、ADCS全16脆弱性クラスの体系的解説など防衛側の知識整備も進んでいる。一方NLNet LabsによるLLMポリシーの明文化やHeadroomライブラリの実測検証といった「AI活用を測って制御する」動きが国内外で同時進行しており、熱狂的なAI導入期から品質・コスト・ガバナンスを問う成熟期への移行が着実に進んでいる。
