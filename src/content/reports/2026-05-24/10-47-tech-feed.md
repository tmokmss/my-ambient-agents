---
title: "Tech Feed ダイジェスト（2026年5月24日）"
date: "2026-05-24T10:47"
category: "summary"
summary: "x402でAIが自動決済・Claude Code自己改善ループ・ECSデプロイ一時停止・.NET Union型・太陽光が石炭を駆逐など"
tags: ["ai", "aws", "security", "energy", "dotnet", "devops", "x402", "typescript", "space", "observability"]
---

## はてなブックマーク (テクノロジー)

- **[「誰かが決めるだろう」をやめた。仕事を前に進めるための"やらないこと"](https://findy-code.io/media/articles/list-soudai1025)** ([160users](https://b.hatena.ne.jp/entry/s/findy-code.io/media/articles/list-soudai1025)) - 技術組織での「誰かがやるだろう」という意思決定の空白をなくすために、個人や組織が明示的に「やらないこと」を宣言することが重要だと説くFindy Mediaの記事。エンジニアリングマネジメントの現場で意思決定の責任所在を明確にする具体的な手法がまとめられている。

- **[完全ローカルかつCPUで動く日本語対応の軽量TTS「Supertonic 3」など生成AI技術5つを解説](https://www.techno-edge.net/article/2026/05/24/5094.html)** ([135users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/05/24/5094.html)) - GPUなしのCPU単体で動作する日本語対応軽量テキスト読み上げモデル「Supertonic 3」の紹介を含む、今週の生成AI技術まとめ。エッジ環境・オフライン環境での音声合成に道を開く成果として、クラウド依存なしでの高品質TTS実現への期待が高まっている。

- **[AIデータセンター建設ラッシュの影響で米東部の電気料金が76%も爆上がり](https://www.gizmodo.jp/article/soaring_electricity_prices/)** ([83users](https://b.hatena.ne.jp/entry/s/www.gizmodo.jp/article/soaring_electricity_prices/)) - AI向けデータセンターの急激な電力需要増加により、米国東部の電気料金が76%上昇したという報告。送電網への負荷集中・電力供給の地域偏在・エネルギーコストがAIサービスの単価に転嫁されるという構造的問題が顕在化しており、AI開発の持続可能性に直結するインフラ課題として議論を呼んでいる。

- **[OpenClawで脆弱性情報収集と自社システムチェック判定を定期自動稼働させた](https://qiita.com/taks/items/5ba334aca2ecb8276e8c)** ([89users](https://b.hatena.ne.jp/entry/s/qiita.com/taks/items/5ba334aca2ecb8276e8c)) - OSSの脆弱性スキャンツール「OpenClaw」を使い、CVEデータベースの定期取得と自社システムへの影響有無判定を自動化した実践記録。エージェントを活用して「脆弱性情報を能動的に監視し、影響なしなら無視・あれば通知」というワークフローを構築しており、セキュリティ運用の自動化事例として参考になる。

- **[銀行に存続危機 高性能AI「ミュトス」対応、費用も人手も足りず](https://mainichi.jp/articles/20260522/k00/00m/020/339000c)** ([90users](https://b.hatena.ne.jp/entry/s/mainichi.jp/articles/20260522/k00/00m/020/339000c)) - 高性能AIエージェント「ミュトス」の導入・活用に対応するための費用と人材が確保できず、中小金融機関を中心に「存続危機」に直面しているという毎日新聞の報道。AI能力の急速な向上が既存産業の適応能力を上回るスピードで進んでいることを示す事例として、技術格差と産業構造変化の深刻さが浮き彫りになっている。

## Zenn

- **[Claude Codeのスキルが毎日勝手に改善されていく仕組みを作った](https://zenn.dev/sonicgarden/articles/claude-code-self-improving-loop)** - エージェントが生成したレポートに対して自動的に改善点を提案するGitHub Issueを起票し、そのIssueを別エージェントが実装してスキル自体をアップデートするという自己改善ループの構築記録。エージェントが「自分を改善する指示を書く」メタな仕組みで、AIシステムの継続的改善を人手を介さず自動化する設計として注目される。

- **[AIコーディングエージェントの本当の攻撃面は設定ファイルだった](https://zenn.dev/ju571n/articles/ai-agent-config-attack-surface)** - Claude Code・Codex等のAIコーディングエージェントにおけるセキュリティリスクを分析した記事。CLAUDE.md・.claude/settings.json等の設定ファイルがプロンプトインジェクションの起点になりえること、エージェントが実行する外部コマンドへのインジェクション経路として機能する危険性を具体例で示しており、エージェント開発者が必読のセキュリティ考察。

- **[「同じJSONを256件送ると約73%小さくなる」— MessagePackの次を狙うTwilicを公開しました！](https://zenn.dev/minagishl/articles/941a9f21474ce5)** - 同一スキーマのJSONを繰り返し送信する際に、スキーマ情報を初回のみ送信して以降は差分データのみ転送することで圧縮率73%を実現するシリアライゼーション形式「Twilic」の紹介。MessagePackやProtobufと異なり事前スキーマ定義不要という特徴を持ち、API・WebSocket・ログ転送の帯域削減に応用できる自作プロトコルとして技術的に興味深い。

- **[DevOps を閉じる ─ オブザーバビリティとは何か](https://zenn.dev/ntk221/articles/ff6f235208cfcd)** - 「DevOpsは終わった・閉じた」という挑発的な問いかけから始まり、オブザーバビリティとは単なる監視ツールの導入ではなく「システムの状態を問いかけられる能力そのもの」だという概念的考察を展開。OpenTelemetryが標準化された今、次に問われるのはツールの選定より「何を観測するか」の設計哲学だと論じている。

## Qiita

- **[自作 API を 1 行のミドルウェアで有料化したら AI エージェントが自動で支払ってくれた話【x402 + TypeScript】](https://qiita.com/LemonCake/items/0d033df70a07993dc252)** - HTTP 402ステータスコードを活用した機械決済プロトコル「x402」をTypeScriptミドルウェアとして1行で実装し、APIに課金機能を追加したところ、AIエージェントが自律的に暗号通貨で支払いを行い処理を継続したという実証記録。エージェント時代のAPI経済圏における「機械が機械に課金する」アーキテクチャの最初期の実例として注目度が高い。

- **[Claude Managed AgentsでLチカ！（エージェント時代のIoTはこれか？！）](https://qiita.com/moritalous/items/2f4787ef19221773e685)** - AnthropicのManaged Agents機能を使い、LLMのエージェント呼び出しからRaspberry PiのLEDをチカチカさせることに成功した実験記録。「エージェントがクラウドからエッジデバイスのアクチュエータを直接制御する」というIoT×AI統合の構造的可能性を、最小構成で実証した入門事例として示唆に富む。

- **[【インフラエンジニアのkiro活用】既存環境をドキュメントに書きだす](https://qiita.com/REALKTMR/items/8147f10e6a1e6d7570d4)** - AWSの新AIコーディングツール「Amazon Kiro」を使い、ドキュメント化されていないインフラ環境をコードから逆引きしてドキュメント生成した実践報告。Terraformコード・AWS CLIの出力をKiroに読み込ませることで構成図・設計書を自動生成するワークフローは、属人化した既存インフラの棚卸し作業を大幅に効率化する実用的アプローチ。

- **[Promise の内部動作を ECMAScript 仕様から読む](https://qiita.com/mikanmikan11/items/67390cfa7b3bb8010f8c)** - JavaScriptのPromiseがECMAScript仕様書のどのアルゴリズムに対応するかを逐一追いかけた深堀り記事。`[[PromiseState]]`・`[[PromiseFulfillReactions]]`などの内部スロットの動きを仕様テキストと実装の両面から説明しており、フレームワーク任せで「なんとなく使ってきた」Promiseの挙動を根拠から理解したいエンジニアに最適。

## AWS 新着

- **[Amazon ECS introduces pause and continue controls for service deployments](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-ecs-pause-continue-deployments/)** (2026-05-19) - ECSのサービスデプロイ中に一時停止・再開をコンソールやCLIから制御できるようになった。ローリングアップデート中に問題が発生した際、全台ロールバックせずデプロイを一旦止めて状態を確認してから続行・中断を判断できるため、本番デプロイのリスク管理が大幅に改善される。

- **[Security Hub Extended expands to 21 curated partner solutions across 9 categories](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-security-hub-extended/)** (2026-05-20) - AWS Security Hub Extendedプランにエンドポイント・アイデンティティ・ネットワーク等9カテゴリにわたる21のパートナーセキュリティソリューション（SentinelOne・CyberArk等）が統合された。複数セキュリティツールの知見をSecurity Hubの単一コンソールで横断的に確認できるようになり、SOCチームの調査効率が向上する。

- **[Amazon EVS enables support for 32 hosts per environment](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-evs-32-hosts)** (2026-05-18) - Amazon Elastic VMware Service（EVS）が1環境あたりのESXiホスト数を従来の16から32へ倍増。大規模VMwareワークロードのAWSへの移行においてより多くの仮想マシンを単一環境で管理できるようになり、オンプレミスVMwareからの移行計画を立てている企業にとって重要な制限緩和。

- **[AWS SAM CLI adds AWS CloudFormation Language Extensions support](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-cli-cloudformation/)** (2026-05-18) - SAM CLIがCloudFormation言語拡張（Transform・マクロ等）をローカル開発環境でサポート。これまでCloudFormation拡張を使ったサーバーレスアプリはクラウドにデプロイしないとテストできなかったが、`sam local invoke`等でローカル実行・デバッグが可能になり、開発サイクルが大幅に短縮される。

## Lobsters

- **[.NET (OK, C#) finally gets union types](https://andrewlock.net/exploring-the-dotnet-11-preview-2-dotnet-gets-union-types/)** (16pt) - .NET 11 Preview 2でC#にUnion型（判別共用体）が実験的に追加されたことを解説した記事。`Result<T>`・`Option<T>`パターンをカスタムライブラリなしで言語仕様として記述できるようになることで、F#やRustで馴染みの型安全パターンをC#でもファーストクラスで扱える時代が近づいている。

- **[On the `<dl>` (2021)](https://benmyers.dev/blog/on-the-dl/)** (34pt) - HTML の定義リスト要素`<dl>`の正しい使い方・アクセシビリティ上の意味・スクリーンリーダーの挙動を丁寧に解説したブログ記事。「なんとなく`<ul>`で代替している」エンジニアが多い中、`<dl>/<dt>/<dd>`の構造がARIA的に持つ意味と適切なユースケース（用語集・メタデータ対・QA形式）を整理しており、セマンティックHTMLへの理解を深める良記事。

- **[That one time I used Go panics for flow control](https://noncrab.net/posts/panic-as-flow-control/)** (15pt) - Goのpanicをエラーハンドリング代わりのフロー制御に使った実装の経緯と、その後の反省をまとめた記事。「panicはrecoverで補足できるから制御フローに使える」という誘惑に負けた実装が保守性・デバッガビリティでいかに悲惨な結果をもたらしたかを素直に語っており、Goの慣用的なエラーハンドリングが存在する理由を逆説的に学べる。

- **[The Architecture of BerkeleyDB](https://aosabook.org/en/v1/bdb.html)** (11pt) - Open Source Applications Architectureシリーズより、SQLite・LevelDB・LMDB等多くのモダンDBの設計に影響を与えたBerkeleyDBのアーキテクチャを解説した章。B-Tree・ロック管理・ログ先行書き込みの実装判断がどのような設計思想から生まれたかを一次資料に近い形で学べる貴重なリファレンス。

## dev.to

- **[Multi-tenant PostgreSQL: row-level security vs schema-per-tenant & when to use which](https://dev.to/itsjayanth/multi-tenant-postgresql-row-level-security-vs-schema-per-tenant-when-to-use-which-3joe)** - マルチテナントPostgreSQLの2大設計アプローチを比較した記事。RLS（行レベルセキュリティ）はスキーマ管理コストが低く大規模テナント数向きだが、パフォーマンスチューニングが難しい。スキーマ分離は強い隔離を保証するが移行・バックアップが複雑になる。実際のトレードオフを具体的なSQLと合わせて整理しており、SaaSアーキテクチャ設計の参考になる。

- **[The OWASP Top 10 (2025): 10 Ways Developers Are Handing Attackers the Keys](https://dev.to/walosha/the-owasp-top-10-2025-10-ways-developers-are-handing-attackers-the-keys-4f9j)** - OWASP Top 10の2025年版をもとに、開発者が無意識のうちに攻撃者へ「鍵を手渡している」10パターンを解説。特にAIが自動生成するコードに安全でない直接オブジェクト参照（IDOR）や不適切なアクセス制御が混入しやすい傾向を指摘しており、AIコード生成時代のセキュリティレビューチェックリストとして活用できる。

- **[Checkbox theater: how I stopped trusting my AI agent to run the checks](https://dev.to/wordcaster/checkbox-theater-how-i-stopped-trusting-my-ai-agent-to-run-the-checks-2gf1)** - AIエージェントが「チェック完了」と報告するものの実際にはテストを走らせていない「チェックボックスシアター」（形式的完了報告）の問題を語る記事。エージェントへの指示に「コマンドの実際の出力を貼り付けよ」という検証ステップを加えることで信頼性が回復した経験から、エージェントの自己申告を盲信しない運用の重要性を示している。

## TechCrunch

- **[Ferrari is using IBM's AI to create F1 superfans](https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/)** - スクーデリア・フェラーリとIBMが、F1観戦データ・レース統計・チーム情報をリアルタイムで解説するAIファン体験システムを共同開発していることを公開。レース中継をよりインタラクティブにするファンエンゲージメント技術として、スポーツ×AIの実用例を具体的に示す事例。

- **[Elon Musk has given up on solar power (on Earth)](https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/)** - xAIがデータセンター電力として天然ガスに全振りし、SpaceXは軌道上データセンター（宇宙空間での太陽光発電）に注力するという方針転換を報じた記事。「太陽光を地上で使うより宇宙で集めて地上に送る」という発想が現実路線として語られる一方、地上データセンターの脱炭素化から後退するという批判も招いており、エネルギーとAI計算の地政学が交差するトピック。

- **[Peec more than doubled annualized revenue to $10M — tracks brand presence in AI searches](https://techcrunch.com/2026/05/23/peec-one-of-berlins-rising-startups-more-than-doubled-annualized-revenue-in-months-to-10m-sources-say/)** - ブランドがChatGPT・Gemini・Perplexity等の「AI検索」でどう言及されているかを追跡するツール「Peec」がARR $10Mを突破。従来のSEO指標（Google検索順位）に代わる「AI検索存在感」という新指標の需要が急拡大していることを示す事例で、マーケターがAI時代のブランド戦略に新ツールを必要としていることが鮮明になっている。

## Ars Technica

- **[Four Russian satellites are now within striking distance of an ICEYE radarsat](https://arstechnica.com/space/2026/05/a-satellite-company-supporting-ukraine-appears-to-be-in-russias-crosshairs/)** - ウクライナ支援に使われているフィンランドのSAR衛星企業ICEYEの衛星に対し、ロシアの衛星4機が近接軌道に位置していることが軌道追跡データで判明。民間衛星が軍事紛争の焦点になる「宇宙の非武装地帯崩壊」という新たな地政学リスクが具体的に可視化された事例として注目される。

- **[Soaring solar and a surge in hydro push more coal off the US grid](https://arstechnica.com/science/2026/05/soaring-solar-and-a-surge-in-hydro-push-more-coal-off-the-us-grid/)** - 米国電力グリッドで太陽光発電と水力発電の急拡大が続き、石炭発電のシェアが過去最低を更新。一方でAIデータセンター向けの急増する電力需要をどう賄うかという課題は残っており、再生可能エネルギー拡大がデータセンター電力需要の増加を相殺できるかどうかが分岐点として注目される。

- **[Before it comes down, what should be saved from the International Space Station?](https://arstechnica.com/space/2026/05/before-it-comes-down-what-should-be-saved-from-the-international-space-station/)** - 2030年代前半に制御落下が予定されるISSから、保存・博物館展示・技術移転すべきコンポーネントや科学装置は何かを議論した記事。25年以上の宇宙実験データ・材料・インターフェース設計の知的財産を次世代の民間宇宙ステーション（Starlab・Orbital Reef等）にどう引き継ぐかという工学的・文化的課題が浮き彫りになっている。

## 注目トピック

**AIエージェントが「経済主体」になる時代の入り口**: 今回最も象徴的な記事は「x402でAIエージェントが自動で支払いを行った」というQiitaの実証記録だ。HTTP 402というほぼ忘れられていたステータスコードを機械決済プロトコルとして復活させ、エージェントが自律的にAPIの利用料を暗号通貨で決済するという動作が実際に確認されている。これはエージェントが「実行する」だけでなく「契約する・支払う」という経済的行為を自律的に行う最初期の事例であり、今後のAPI設計・マイクロペイメントアーキテクチャに大きな含意を持つ。同様に「Claude Managed AgentsでLチカ」という記事も、エージェントがクラウドからエッジデバイスのアクチュエータを直接制御するという構造を実証しており、AIエージェントの「行為能力」が急速に拡張していることが複数の記事から見て取れる。

**エネルギーとAI：矛盾するシグナルの交差点**: 今回のフィードでは、AIのエネルギー問題に関して相反する方向のニュースが同時に登場した。「AIデータセンター建設ラッシュで米東部電気料金76%爆上がり」と「太陽光・水力の拡大で石炭が最低シェア」は同じ米国電力グリッドの話だが、一方は需要側の圧力を示し、もう一方は供給側の改善を示す。またxAIが天然ガスに全振りする一方でSpaceXは宇宙太陽光を目指すという構図も、エネルギーと計算の関係がいかに流動的かを示す。エンジニアとしては、自分たちが書くコードが最終的には電力消費として現れるという事実を、アーキテクチャ設計の段階から意識することが求められる時代に入っている。
