---
title: "Tech Feed ダイジェスト（2026年5月17日）"
date: "2026-05-17T10:37"
category: "summary"
summary: "AI雇用論・ソーラーPDA Orion・ZigのAsync I/O・CTFシーン崩壊・Anthropic著作権和解遅延など横断まとめ"
tags: ["ai", "hardware", "security", "zig", "networking", "rust", "typescript", "passkey", "aws", "copyright", "llm"]
---

## はてなブックマーク (テクノロジー)

- **[「AIにできない仕事は残る」のは本当だけど、それはUber Eatsの配達員みたいな仕事になるかも｜けんすう](https://kensuu.com/n/n9d1229018d9c)** ([488users](https://b.hatena.ne.jp/entry/s/kensuu.com/n/n9d1229018d9c)) - 「AIが奪えない人間の仕事は残るが、その仕事の報酬が必ずしも高くなるとは限らない」という論考。育成コストの高いスキルより代替可能な単純労働に賃金が収束しやすい構造的問題を指摘し、「AI耐性のある仕事＝高賃金」という楽観論に冷静な視座を与える。

- **[ソーラー充電PDA「Orion」登場！STM32U575と3.16型Sharp Memory LCD搭載、Zaurus再来の自作端末](https://daily-gadget.net/gadgets/114176/)** ([84users](https://b.hatena.ne.jp/entry/s/daily-gadget.net/gadgets/114176/)) - STM32U575マイコン・3.16インチ Sharp Memory LCD・太陽光充電を組み合わせた自作PDA。極低消費電力のメモリ液晶でバッテリーなし運用を実現しており、組み込みホビイストから「現代のZaurus」として注目を集めた。

- **[一人暮らしこそOpenWrtをやれ！ (v6プラス理論編)](https://zenn.dev/calloc134/articles/newlife-openwrt-riron)** ([75users](https://b.hatena.ne.jp/entry/s/zenn.dev/calloc134/articles/newlife-openwrt-riron)) - IPv6 IPoEとMAP-E（v6プラス）の仕組みを丁寧に解説しつつ、OpenWrtルーターで構成する方法を理論編として整理した記事。ISPの制限を理解した上でホームネットワークを主体的に設計したいエンジニア向けの良質な入門ガイド。

- **[『作って学ぶAIエージェント』を書きました ── TypeScriptでコーディングエージェントを自作する本](https://blog.lai.so/build-ai-agent-book/)** ([74users](https://b.hatena.ne.jp/entry/s/blog.lai.so/build-ai-agent-book/)) - TypeScriptでLLMコーディングエージェントをゼロから実装する書籍の著者紹介記事。ツール呼び出し・コンテキスト管理・ループ制御など、エージェントの核心部分を素朴な実装から理解できる構成で、Claude Code/Codexの「中身」を知りたい開発者に向いている。

- **[データセンター、お金を払わず水を1億1000万リットル使用](https://www.gizmodo.jp/2026/05/georgia-data-center-secretly-guzzled-30-million-gallons-of-water-before-paying-a-dime.html)** ([23users](https://b.hatena.ne.jp/entry/s/www.gizmodo.jp/2026/05/georgia-data-center-secretly-guzzled-30-million-gallons-of-water-before-paying-a-dime.html)) - ジョージア州のデータセンターが料金を払う前に約3000万ガロン（約1億1000万リットル）の水を冷却目的で使用していたことが明らかになった。AI・クラウド需要拡大に伴うデータセンターの水資源消費問題として、インフラの環境負荷への関心が高まっている。

## Zenn

- **[DDDの理想と決済システムの現実](https://zenn.dev/kotaroikeda/articles/e2276a1d45a55c)** - 決済ドメインにDDDを適用する際に直面する「理想の集約境界」と「外部決済プロバイダーの制約」のギャップを整理した実践記事。Stripeの非同期イベントモデルがDDDのトランザクション境界と相性が悪い理由を具体的なコード例で解説している。

- **[【Rust】怖くないunsafe入門](https://zenn.dev/nuskey/articles/rust-introduction-to-unsafe)** - `unsafe`ブロックが必要な4つのケース（生ポインタの参照外し・FFI呼び出し・可変静的変数へのアクセス・unsafeトレイトの実装）を丁寧に解説し、「unsafeは悪ではなく局所的な責任の宣言だ」という視点でRust初学者の心理的障壁を下げる入門記事。

- **[RAGナレッジベース作成を簡単にしたくてツールを作った](https://zenn.dev/bathtimefish/articles/80a22a045795f0)** - PDF・Markdown・WebページからチャンクへのRAGパイプライン（分割→埋め込みベクトル化→インデックス登録）を手軽に実行できるCLIツールを自作した紹介記事。ローカルでのRAG実験コストを下げるアプローチとして、LLMアプリ開発の初期段階に役立つ。

- **[Andrej Karpathy氏のLLM Wikiを1ヶ月運用してわかった、LLMの知識を『繋げる力』](https://zenn.dev/tsurubee/articles/llm-wiki-connecting-knowledge)** - KarpathyのWiki形式LLM学習ドキュメントを1ヶ月使い続けた体験レポート。項目間のリンクをたどる学習スタイルが断片的なLLM知識を体系的に繋げる上で効果的だったと報告しており、LLM学習の指針として参考になる。

- **[Terraformの複数人開発でdev環境を安全に回す方法](https://zenn.dev/pksha/articles/terraform-multi-user-apply-conflict)** - 複数の開発者が同一Terraformステートを操作する際の競合・上書きリスクを防ぐ手法を解説。ステートロック・ワークスペース分離・CI/CDでのapply一本化など、チーム開発での具体的な衝突防止パターンをまとめている。

## Qiita

- **[パスワードの時代が終わる理由 - パスキーの仕組みを図解でわかりやすく整理する](https://qiita.com/ktdatascience/items/78212f9f851ffe97f3d9)** - FIDO2/WebAuthnとパスキーの技術的差異・公開鍵暗号の使われ方・フィッシング耐性の仕組みを図解でまとめた解説記事。「パスワードレス」実装を検討するエンジニア向けに、ブラウザ・OS・サーバー側の役割分担を整理した良質な概念解説。

- **[国会図書館のOCRをWebサービス化してみた - NDLOCR-Lite × Docker × FastAPI](https://qiita.com/ohtsuka-shota/items/b4ab80e6bc9f12549cad)** - 国立国会図書館公開の日本語特化OCRエンジン「NDLOCR-Lite」をDocker＋FastAPIでWebサービスとして包んだ実装記事。古い日本語印刷物に特化したOCRモデルをAPIとして立ち上げる手順を詳述しており、デジタルアーカイブ活用の実例として興味深い。

- **[果たしてCopilotで営業成績は上がるのか](https://qiita.com/sadabon444/items/026452114ad63efa9aa6)** - エンジニア向けツールではなくセールス業務にAIアシスタントを組み合わせた実証実験の考察記事。「コードを書く仕事以外でのCopilot効果測定」という視点が珍しく、AI導入効果を非技術部門でどう評価するかの議論のきっかけになる。

- **[【AWS】ロールベースによるレスポンスマスキングでセキュアなRAGを実現する](https://qiita.com/yakumo_09/items/2c32154c4de07cf94c65)** - Bedrock Knowledge BaseのRAGレスポンスを、ユーザーのIAMロールに応じてフィールドレベルでマスキングする実装パターンを解説。「誰がどの情報を閲覧できるか」をRAGの回答レベルで制御するエンタープライズ向けセキュアRAG設計として実用的。

## AWS 新着

- **[AWS Partner Central agents now accelerates opportunity creation](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-partner-central-agents-oppo)** (2026-05-15) - AWSパートナーポータルに自然言語で商談（オポチュニティ）を登録できるAIエージェントが追加された。コンテキストから適切なフィールドを補完する仕組みで、パートナー企業の案件入力工数と入力ミスを同時に削減できる。

- **[Amazon Managed Grafana now supports in-place upgrade to Grafana version 12.4](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-managed-grafana-v12-update/)** (2026-05-15) - Grafana 10.4から12.4へのインプレースアップグレードが数クリックで完了するようになった。Grafana 12系ではアラートグループの改善・新パネルタイプ・Data SourceのAPIキー管理刷新などが含まれており、マネージドサービスでの即日アップグレードが可能になる。

- **[Amazon Connect Cases now lets you edit related items and delete cases from the agent workspace](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-connect-cases-related-item/)** (2026-05-15) - Connectのカスタマーサポートエージェントワークスペースから、関連アイテムの編集・ケースの削除が管理者権限なしに直接行えるようになった。サポートオペレーターのワークフロー摩擦が減り、コンタクトセンター業務の効率化につながる改善。

## Lobsters

- **[Async I/O in Zig 0.16, today](https://lalinsky.com/2026/05/11/async-io-in-zig-016-today.html)** (33pt) - Zig 0.16でまだ公式サポート前の非同期I/Oを今すぐ使える方法を解説した記事。io_uringを直接バインドするアプローチでイベントループを実装し、Zigの低レベル制御とゼロコスト抽象化が非同期処理でどこまで通用するかを実演している。

- **[The CTF scene is dead](https://kabir.au/blog/the-ctf-scene-is-dead)** (32pt) - セキュリティCTF競技の参加者・主催者・コミュニティが急速に縮小している現状を論じた記事。「AI補助によるチート横行」「難易度インフレ」「スポンサー撤退」など複合要因を指摘し、セキュリティ教育コミュニティとしてのCTFの代替が必要だと主張している。

- **[The Futility of Lava Lamps: What Random Really Means](https://loup-vaillant.fr/articles/lava-lamps-and-randomness)** (22pt) - Cloudflareが乱数生成にラバランプを使うことで有名だが、「物理的なランダム性が本当に暗号学的ランダムネスに貢献しているのか？」を批判的に検証した記事。真の乱数とCSPRNGの違い・エントロピープールの仕組みから、物理乱数への神話的信頼を再検討する暗号理論的考察。

- **[Recent Kernel exploits, attack surface reduction, example IPSEC](https://www.openwall.com/lists/oss-security/2026/05/16/3)** (18pt) - oss-securityメーリングリストに投稿された、最近のLinuxカーネル脆弱性悪用事例（IPsec実装を含む）と攻撃面を減らすための設定・コンパイルオプションのまとめ。`CONFIG_*`フラグを使った機能の最小化や、eBPFとunprivileged名前空間の制限がカーネルハードニングにいかに有効かを整理している。

## dev.to

- **[Calling CUDA from Go without cgo](https://dev.to/eitamos_ring_0508146ca448/calling-cuda-from-go-without-cgo-1149)** - cgoによるC/C++バインディングを経由せずにGoからCUDAを呼び出す手法を解説した記事。Goの`syscall`パッケージでCUDAドライバAPIを直接呼び出す実装で、cgoの複雑なビルドシステムを回避しながらGPUアクセラレーションをGoアプリに組み込む手法として興味深い。

- **[How Uber Finds Nearby Drivers Using H3 Hexagonal Indexing](https://dev.to/vip20000/how-uber-finds-nearby-drivers-using-h3-hexagonal-indexing-4lhp)** - UberがH3（六角形地理インデックスシステム）を使って近傍ドライバーを高速に検索する仕組みを解説した記事。緯度経度を六角形セルIDに変換しセルIDのルックアップで近傍検索をO(1)に近づける設計は、位置情報サービスのバックエンド設計に広く応用できるパターン。

- **[The Hidden Cost of Every Query You Send](https://dev.to/talal_ahm2d/the-hidden-cost-of-every-query-you-send-5cnc)** - LLMへのAPIリクエスト1回あたりの電力消費・CO2排出・水冷コストを試算し、AIの急速な普及が電力網と水資源に与える影響を論じた記事。「1回のChatGPT質問は10回のGoogle検索分の電力を使う」という具体的な試算で、AIの環境コストを身近に理解させる内容。

## TechCrunch

- **[Marketing operating system Nectar Social raises $30M Series A led by Menlo](https://techcrunch.com/2026/05/16/marketing-operating-system-nectar-social-raises-30m-series-a-in-round-led-by-menlo/)** (2026-05-16) - AIを活用したマーケティング統合プラットフォーム「Nectar Social」がMenlo Ventures（Anthropicの投資家でもある）主導で3000万ドルのシリーズAを調達。Claude APIをコアに据えたマーケティングOSという位置付けで、AI特化型SaaSへの大型資金流入が続いていることを示す。

- **[Users turn to jailbreaking their older Kindles as Amazon ends support](https://techcrunch.com/2026/05/16/users-turn-to-jailbreaking-their-older-kindles-as-amazon-ends-support/)** (2026-05-16) - Amazonが旧型Kindleのサポートを終了したことを受け、ユーザーがカスタムファームウェアでデバイスを継続利用しようとしているという報告。デジタルデバイスの所有権とサポート終了後のユーザー権利という問題は、カリフォルニア州のオンラインゲーム保護法案と重なる「デジタル製品の長期利用権」をめぐる議論の一環。

## Ars Technica

- **[Anthropic's $1.5B copyright settlement is getting messy as judge delays approval](https://arstechnica.com/tech-policy/2026/05/authors-fight-for-higher-payouts-from-anthropics-1-5b-copyright-settlement/)** (2026-05-15) - Anthropicが著作者グループと合意した15億ドルの著作権和解について、作家側の一部が支払額の引き上げを求めて反発し、裁判所が承認を延期した。AI学習データの著作権補償の枠組みが業界標準となる可能性を持つ和解だけに、OpenAI・Googleなどの係争にも波及する注目案件。

- **[Russia pressures university students to become wartime drone pilots](https://arstechnica.com/gadgets/2026/05/russia-pressures-university-students-to-become-wartime-drone-pilots/)** (2026-05-15) - ロシアの大学が学生に軍のドローンパイロット訓練プログラムへの参加を事実上強制しているという報告。民間人のドローン操縦スキルが現代の非対称戦争で重要な軍事能力となっている現実を示す事例で、テクノロジーと安全保障の交差点として注目される。

- **[Solar power production undercut by coal pollution](https://arstechnica.com/science/2026/05/solar-power-production-undercut-by-coal-pollution/)** (2026-05-15) - 石炭発電所由来の大気汚染物質（微粒子）が太陽光パネルの発電量を最大20%低下させているという研究結果。「石炭から太陽光へ」の移行が進んでも並行して石炭を使い続ける地域では移行の効果が相殺される構造的問題を浮き彫りにしており、エネルギー転換の複雑さを示す知見。

## 注目トピック

今回のフィードを貫く横断テーマは**「AIのコスト・リスク・責任の可視化」**だ。dev.toの「クエリを送るたびにかかる隠れたコスト」・データセンター水資源問題・ソーラーパネル効率低下が重なり、AIインフラの環境コストへの関心が具体的な数値計算とともに語られ始めている。一方、Anthropicの著作権和解遅延・旧型Kindleのジェイルブレイクという2つのストーリーは「AIやデジタルプラットフォームが生み出した権利・所有権の新しい問い」を同時に提起している。

技術トレンドとしては**Zigへの関心の高まり**が目立つ。非同期I/OのZig実装記事がLobstersで高スコアを獲得し、BunのRust移行の文脈でもZigが対比として言及される場面が増えた。「Rust以外の低レベルシステム言語の実用的選択肢」としてZigが真剣に検討されるフェーズに入りつつある。セキュリティ面ではCTFコミュニティの衰退論・LinuxカーネルIPsec攻撃面・パスキー普及解説が同時に登場し、攻撃・防御・認証の三層で議論が活発化している。
