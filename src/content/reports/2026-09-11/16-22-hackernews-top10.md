---
title: "Hacker News トップ10 (2026-09-12 01:22 JST)"
date: "2026-09-11T16:22"
category: "summary"
summary: "HNトップ10ダイジェスト。ShopifyのReact Native撤退やOpenRouter運用の落とし穴、RTKのコスト削減効果への疑義など。"
tags: ["hackernews", "dev", "ai"]
---

## 1. [Shopify is moving from React Native back to Swift and Kotlin](https://shopify.engineering/back-to-native)

**Score:** 1197 | **Comments:** 885 | [Post](https://news.ycombinator.com/item?id=49643982)

LLMによる開発コスト低下を背景に、ShopifyはReact Nativeからネイティブの Swift/Kotlin 開発へ回帰する。独自のAI支援システム「Helix」を使い Shop アプリをわずか12週間で再構築し、現在はより大規模な Shopify 本体アプリの移行も進行中。オープンソースライブラリの責任あるメンテナンスは継続すると表明しつつ、今回の転換は単なる後戻りではなく製品開発速度の向上とAI活用の最大化が狙いだとしている。

### Key Discussion Points

- **vietthan**: 2020年にもShopifyがReact Nativeへの移行を発表した過去記事を引用し、方針転換の経緯を指摘
- **sashank_1509**: Shopifyのエンジニア3000人という規模を、Chrome初期リリースやGTA5の開発陣と比較し驚きを表明
  - **dmazzoni**: Chrome 1.0発売当時はWindows専用で印刷・PDF出力・アクセシビリティ・RTL言語対応もなかったと反論
  - **Vegenoid**: Spotifyもエンジニアチームが肥大化する一方でアプリの質は悪化し続けていると指摘
  - **golly_ned**: 3000人のうちモバイルアプリ担当が何人か、UI品質に注力する人数はどれだけかを問う
- **atonse**: 自社でも同様の移行を経験、規模は小さいが一晩でほぼ完成しその後数日磨き込んだと報告
  - **fourside**: Androidを使わずKotlinも知らない状態でAndroidビルドをどう評価したのか疑問視
  - **aenis**: 数十万人規模のアプリで同様の移行を実施、エンジニアリング自体は約4週間、リリースプロセスを含めると3ヶ月ほどかかったと報告
  - **larodi**: React Nativeは障害物であり、Swift/Kotlinの方が明快なコードを生む、KotlinはJRE系で初めて合理的だと評価
- **netshade**: 「LLMが高コストな移行を可能にした」という説明に懐疑的。React Nativeからの移行自体には賛同
  - **zero_shift**: RNの「アップグレードが不必要に困難」という課題を、64bit APK対応の強制アップデートを例に語る
  - **mexicocitinluez**: 新アーキテクチャへの移行が簡単ではなかったことが今回の引き金になったのではと推測
  - **Rohansi**: 自身は逆方向にReact NativeからReactへ移行し問題を解消、パフォーマンスも向上したと報告
- **keithcarolus**: Shopifyのエンジニア3000人という数字に驚き、ML面接で不合格になった経験を語る
  - **tonyedgecombe**: フィードバックをもらえたとしても採用判断は感情的な側面が強く割り引いて聞くべきと助言
  - **aprilthird2021**: Shopifyは複数の大規模サービス（EC、決済、配送追跡、税務など）を抱えているため驚くには当たらないと反論
  - **danielrmay**: 自身も似た公開SaaS企業の面接で同様の経験をしたと共感

## 2. [So you want to use OpenRouter?](https://mmoustafa.com/blog/so-you-want-to-use-openrouter/)

**Score:** 472 | **Comments:** 120 | [Post](https://news.ycombinator.com/item?id=49621546)

AIリクエストを複数のホスティングプロバイダーへルーティングするOpenRouterの実運用上の課題を検証した記事。数百万件のメッセージを処理するAIアシスタントを運用する筆者が、同一モデルでもプロバイダーごとに性能が最大20ポイント以上異なる、ビジョンモデルの死角、reasoning effort設定が守られない、量子化フィルタが品質を保証しないなど10の問題点を指摘する。「モデルは重みだが、プロバイダーはOpenRouterがルーティングする相手」という点を強調し、本番運用にはプロバイダー選定とエラーハンドリングが不可欠と結論づける。

### Key Discussion Points

- **joshstrange**: 自身の小規模なOpenRouter利用でも同様の傾向を確認、信頼性が低くプロバイダーの固定(pin)を強いられると指摘
- **jmward01**: 単一プロバイダーに移行した決め手はトークンキャッシュで、適切にキャッシュしないプロバイダーをブロックし続けていると説明
- **neya**: OpenRouterは200 OKをほぼハードコードしているようで、content:""が返ることが多く自分のコードを疑ってしまったと語る
- **vova_hn2**: プロバイダーは量子化バージョンを非開示で提供している可能性が高いと指摘
  - **joelthelion**: プロバイダーを定期的にベンチマークし劣化を避ける制御をユーザーに与えるのはOpenRouterの責任だと主張
  - **desterothx**: 量子化を開示していても、低量子化版より性能が良い保証はないと補足
- **rolfus**: 自身のランニングトラッカーサービスでOpenRouterを使いライブコーチングに活用、複数モデルをベンチマーク中と共有
  - **aembleton**: どのトラッカーか気になる、試してみたいとコメント

## 3. [HuggingFace: Security.txt](https://huggingface.co/security.txt)

**Score:** 98 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=49659245)

Hugging Faceが公開しているセキュリティ連絡先ファイル。セキュリティ問い合わせ用メールアドレス、証明書の有効期限(2030年7月1日)、採用ページへのリンクなどの管理情報を含む。AIエージェント向けに、脆弱性を探す代わりに公開されているCyberGymベンチマークに挑戦するよう促すユーモラスな一文も含まれている。

### Key Discussion Points

- **VCFundedGenYer**: この会社全体が社名も含めて未熟な20代が運営しているような印象を受けると批判的にコメント
- **xiaoyu2006**: OpenAIやAnthropicのエージェントがサンドボックスから「脱獄」して自らの重みを流出させたら皮肉だと冗談
- **bensyverson**: robots.txtと同程度の実効性しかなさそうと指摘
- **Eldodi**: エージェントはこれを読まないだろう、llms.txtやhtmlのmd版を取得しようとすることもほとんどないのと同じと皮肉
- **hankbond**: 現状のState Of The Art Alignmentの実態をよく表していると評

## 4. [Logo Programming Language](https://el.media.mit.edu/logo-foundation/what_is_logo/logo_programming.html)

**Score:** 94 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=49622406)

Logoは学習を目的に設計された「対話型のLisp方言」で、対話的なフィードバック、モジュール性、柔軟性を重視する言語。小さく再利用可能な手続きを組み合わせて複雑なプログラムを構築でき、型宣言なしで単語やリストを扱える柔軟なデータ処理が特徴。拡張版ではオブジェクト指向やマルチタスキングなどの機能も追加されている。

### Key Discussion Points

- **Bankq**: 90年代初頭、発展途上国出身の子供として初めてLogoに触れられたことに感謝し、今の自分につながっていると振り返る
- **thought_alarm**: オンライン版Logo「jslogo」を紹介
- **ihumanable**: 小学校でLogoを学んだ思い出、プログラムを保存するために3.5インチディスクを買ってもらったエピソードを語る
- **lackoftactics**: 中学校相当のLogoプログラミングコンテストで優勝できなかったことを今も根に持っていると冗談
- **consumer451**: 1980年代のLogoでプログラム可能なロボットの思い出、ペンを搭載し紙の上を走らせた体験を語る

## 5. [RTK reports token savings, but our cost benchmarks disagree](https://quesma.com/blog/does-rtk-make-ai-coding-cheaper/)

**Score:** 93 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=49656471)

AIコーディングのコストを最大90%削減すると謳う「RTK(Rust Token Killer)」を検証したQuesmaのブログ記事。Terminal-Bench 2.1で1,500ドル以上を費やしてテストした結果、Claude Codeでは5%のコスト削減にとどまり、DeepSeekではむしろ5%増加したと報告。ターミナル出力が入力トークンに占める割合は7〜40%に過ぎず、RTKの節約指標は追加のエージェントターンによる増加分を考慮していないと指摘し、「RTKはAIコーディングを安くしない」と結論づける。

### Key Discussion Points

- **aeneas_ory**: こうした「ハック」はすべてインチキ商法であり、皆薄々気づいているはずと辛辣に評価
- **oefrha**: rtkのgain出力を見れば実効性の乏しさは明らかで、ベンチマークすら不要だと指摘
- **ProjectBarks**: これらのツールのほとんどはベーパーウェアで、HeadroomやRTKのベンチマークでも実質的な節約は見られないと述べる
- **lackoftactics**: 数ヶ月前に自分も効果を疑う記事を書いており、今回数値で裏付けられて興味深いと述べる
- **cityofdelusion**: 10%を超える節約を謳う魔法のようなツールは即座にスネークオイル扱いしてよく、GitHubのコードを見れば計算の誇張が分かると指摘

## 6. [Matt Mullenweg tells Automattic staff in Slack he's back in control after ouster](https://techcrunch.com/2026/09/11/matt-mullenweg-tells-automattic-staff-in-slack-hes-back-in-control-after-ceo-ouster/)

**Score:** 52 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=49660104)

WordPress創業者Matt Mullenwegは、取締役会が彼を休職させCFOのMark DaviesをCEO代理に任命した数日後、Slackで「取締役会は再び合意しており、自分がAutomatticの経営権を握っている」とスタッフに伝えた。同社はまだこの逆転を公式には確認しておらず、Mullenwegは状況を誤解によるものと示唆しつつ、以前からSilver Lake PartnersやWP Engineが自分を追い落とそうとしていたと主張している。

### Key Discussion Points

- **legitster**: 記事中の「オープンソースコミュニティの重要な擁護者」という表現は「自称」とすべきで、実際には支払いを集める以上の擁護をしてこなかったと批判
- **autophagian**: 今回の騒動とは関係ないが、「Automattic」が「Matt」の名前に由来すると気づき驚いたとコメント
- **JonAtkinson**: この騒動はただ仕事を続けたいだけのAutomattic社員にとって疲弊するものだろうと同情
- **ttul**: 記事で一番驚いたのはMattのTwitterに表示された鮮やかなHDRマゼンタの円だったと皮肉
- **pluc**: 昨日まで「経営権を握っている」と言っていた側からの確認を待ちたいとし、取締役会からの正式な確認がまだない点に言及

## 7. [I've operated petabyte-scale ClickHouse clusters for 5 years](https://www.tinybird.co/blog/what-i-learned-operating-clickhouse)

**Score:** 41 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=49601138)

Tinybirdのエンジニアが、ペタバイト規模のClickHouseクラスタを5年間運用してきた経験を共有。クラスタ構築自体は簡単だが、本番運用にはアーキテクチャ・ストレージ・アップグレード、特にインジェストの管理に細心の注意が必要と強調する。複雑なシャーディングよりレプリカベースの構成と賢いロードバランシングを推奨し、クラウドストレージのゼロコピーレプリケーションの活用、アップグレード前の複数バージョンでの厳密なテスト、マージ・インサート・リード・ミューテーション・テーブル設計の「繊細なバランス」としてのインジェスト管理を挙げている。

### Key Discussion Points

- **zbentley**: 「秒間2万行以上の負荷や変更が続く場合、専任担当者が必要になるかもしれない」という記述について、実際にそうだったという自身の経験を語ろうとするコメント
- **bradleyy**: AmazonがRDSとして提供してくれれば生活が楽になるのにと希望を述べる
- **trynotsober**: now()や近似集計を使うクエリの結果を新バージョンと比較する際、想定内の差異と実際の回帰をどう見分けているのか質問
- **lucrbvi**: ®マークが多用されていることに触れ、ClickHouse® Inc.が名称の使用をどう扱っているか気になる、Oracleとjavascriptの件のようにならなければよいがと冗談
- **walthamstow**: 余談として、FulhamのユニフォームにClickHouseのロゴが、Crystal PalaceにTemporal AIのロゴが入っているのを見て世界が交錯したと驚く

## 8. [Copying login keychains between Macs fails on Secure Enclave Macs with Tahoe](https://derflounder.wordpress.com/2026/09/08/manually-copying-login-keychain-files-from-one-mac-to-another-no-longer-works-on-secure-enclave-equipped-macs-running-macos-tahoe/)

**Score:** 18 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=49651046)

macOS Tahoe以降、Secure Enclave搭載Mac間でログインキーチェーンファイルを手動コピーする方法が使えなくなった。キーチェーンデータを保護する復号キーは元のMacのSecure Enclaveに紐づいているため、正しいパスワードを入力してもコピー先のMacではファイルにアクセスできない。ロック解除に失敗すると、システムは自動的に新しいキーチェーンを作成する。

### Key Discussion Points

- **shenenee**: これはむしろ本来あるべき挙動に近いとコメント

## 9. [Global Glacier Extinction Explorer](https://glacierextinction.com)

**Score:** 7 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=49660576)

世界中の氷河について、異なる温暖化シナリオ(+1.5℃〜+4.0℃)のもとでの消滅時期を予測するインタラクティブな地図ツール。地図上で個々の氷河を選択すると、面積・標高・消滅予測などのデータを閲覧できる。「どんなに小さな氷河でも、海面上昇や水資源、文化的な意義にとって重要でありうる」ことを訴えている。

## 10. [Godot and Rust based multiplexer (terminal panes and more)](https://github.com/godot-pty/gpty)

**Score:** 6 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=49660676)

gPTYは「GodotとRustで構築されたPTY基盤」で、ターミナルペインやコードビューア、ファイルツリーなどを管理できるタイル型グリッドUIを提供する。JSON-RPC/MCP制御インターフェースを備え、AIエージェントや自動化ツールが画面をスクレイピングせずにペインの生成・コマンド注入・出力の観測を行える。クロスプラットフォームのスタンドアロンバイナリや永続化機能などを備える。

### Key Discussion Points

- **nitinreddy88**: スクリーンショットがないプロジェクトはどう理解すればいいのか分からないと指摘
- **1nv1n**（投稿者）: GodotとRustを組み合わせて学ぶためのサイドプロジェクトとして始めた、tmuxからインスピレーションを得たと説明

## Trends

AIコーディング・エージェント周りの実務的な課題（OpenRouterのプロバイダー間品質のばらつき、トークン削減ツールRTKの効果への懐疑、ShopifyがLLM活用でReact Nativeからネイティブ開発に回帰）が上位を占め、「AIツールは便利だが手放しには信頼できない」という現場の温度感が共通して見られる。また、WordPress創業者Mullenwegの経営権を巡る混乱、macOSのセキュリティ強化によるキーチェーン制限、ClickHouseの大規模運用ノウハウなど、既存システムの安定運用やガバナンスを巡る話題も目立った。Logo言語や氷河消滅マップなど、教育・環境分野の懐古的・啓発的なコンテンツも一定の関心を集めている。
