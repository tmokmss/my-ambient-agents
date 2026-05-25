---
title: "Tech Feed ダイジェスト（2026年5月25日）"
date: "2026-05-25T12:39"
category: "summary"
summary: "Claude導入で激変した開発現場・Apple PICO画像圧縮AI・Aurora MySQL 8.4 GA・Flatpakのsystemd依存・SpaceX Starship V3初飛行など"
tags: ["ai", "security", "aws", "apple", "llm", "claude-code", "linux", "spacex", "devtools", "frontend"]
---

## はてなブックマーク (テクノロジー)

- **[「Claudeに任せてしまおう」たった1年で激変したソフトウェア開発](https://www.technologyreview.jp/s/383499/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/)** ([276users](https://b.hatena.ne.jp/entry/s/www.technologyreview.jp/s/383499/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/)) - MIT Tech Reviewが取り上げたAnthropicのCode with Claudeデモへの現場報告。「1年前は補完ツール、今は丸ごと任せる」という質的変化をエンジニア視点でまとめており、AIコーディングが「支援」から「委任」へシフトした転換点を象徴する内容。

- **[【悲報】100万台のAIサービスをスキャンしたら「史上最悪のセキュリティ」だった件](https://qiita.com/emi_ndk/items/0aac69d8a962d2413d9d)** ([306users](https://b.hatena.ne.jp/entry/s/qiita.com/emi_ndk/items/0aac69d8a962d2413d9d)) - 公開AI推論エンドポイント100万台規模をスキャンした調査で、認証なし・デフォルトクレデンシャル・モデルウェイト直接露出が蔓延していることが判明。「とりあえず動く」優先で公開された大量のAI APIが形成しているセキュリティ負債の実態を可視化した報告。

- **[Appleが画像圧縮AIコーデック「PICO」を発表、同じ画質でデータ量を最大3分の1に削減](https://gigazine.net/news/20260525-ml-pico/)** ([66users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260525-ml-pico/)) - AppleがMLベースの画像圧縮コーデック「PICO」を発表。従来コーデックと同等画質でファイルサイズを最大67%削減できるとされ、JPEG/WebP全盛の画像配信インフラに対してMLコーデックが本格参入してくる転換点となりうる。

- **[人間には普通の契約書に見えるのに「嘘のフォント」でAIだけ別の文章を読まされる「Noroboto」攻撃とは？](https://gigazine.net/news/20260525-noroboto/)** ([19users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260525-noroboto/)) - 人間の目には通常テキストに見えるが、AIのOCR・視覚認識には別内容を返す特殊フォントを使ったプロンプトインジェクション「Noroboto攻撃」の解説。文書レビューを自動化するAIエージェントを騙す新手法として、LLMのマルチモーダル入力に対する新しい攻撃面を示している。

- **[GPT-5.5匹敵のローカル翻訳AI「Hy-MT2-30B」が無料公開。1.8B軽量版でもMicrosoft有料翻訳APIを凌駕](https://www.techno-edge.net/article/2026/05/25/5098.html)** ([17users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/05/25/5098.html)) - 翻訳特化30Bパラメータモデル「Hy-MT2」がオープンソース公開。1.8B軽量版でもMicrosoftの商用翻訳APIを超えるという実測結果は、特定タスクに特化したSLMが汎用大規模モデルの有料APIと同等以上の性能を出せることを示す事例として注目される。

## Zenn

- **[GitHub サプライチェーン攻撃が怖すぎるので Socket.dev を試してみた](https://zenn.dev/tomodo_ysys/articles/socket-github-supply-chain-attack)** - npmパッケージ経由のサプライチェーン攻撃に対抗するためSocket.devを導入した実践記録。依存パッケージの異常な権限要求や難読化コードを自動検知する仕組みを解説しており、GitHub Actionsへの統合手順も含まれる。

- **[不可視文字による攻撃を防ぐにはパターンマッチだと厳しいという話](https://zenn.dev/ame_x/articles/16a5ddcef27c44)** - ゼロ幅スペース・Unicode方向制御文字などの不可視文字を使ったインジェクション攻撃に対し、正規表現パターンマッチングでは検出困難な理由を理論的に説明した記事。サニタイズは「許可リスト＋正規化」の組み合わせでなければ根本対策にならないという実践的結論が参考になる。

- **[WhisperローカルとGemini 2.5 Flashで講義録アプリを作った──構成と技術選定の解説](https://zenn.dev/haruto_miyakawa/articles/4b7754712b7585)** - ローカルWhisperで音声文字起こしを行い、Gemini 2.5 Flashで要約・構造化するパイプラインの構築記事。プライバシー要件でローカル処理を選んだWhisper部分と、精度重視でクラウドAPIを使うLLM部分の役割分担という設計判断の根拠が具体的に説明されている。

- **[AIに投げても解けなかったGPSアート自動生成を、最適化問題として組み立て直した話](https://zenn.dev/jiro3141/articles/9ad0cd28b076e9)** - 地図上でルートを描いてGPSアートを作る課題をLLMに投げても解けず、巡回セールスマン問題に落とし込んで解いた技術記事。「LLMが得意なこと・苦手なことを見極め、組み合わせる」という設計プロセスの実例として読める。

- **[大量の類似 Feature を持つ Enterprise なフロントエンド設計](https://zenn.dev/yuitonn/articles/f88ddcf21ce172)** - 数十〜数百の類似ページを抱えるエンタープライズ向けフロントエンドで、Feature単位の完全分離（縦割りアーキテクチャ）と共通コンポーネント管理のバランスを取るための設計指針をまとめた記事。スケールする組織での変更容易性確保に向けた実践的なモノレポ構成案を含む。

## Qiita

- **[「NODE_TLS_REJECT_UNAUTHORIZED=0」にサヨナラバイバイ！社内プロキシ配下でAWS CLIやNode.jsのTLSエラーを安全に直そう！](https://qiita.com/_YukiOgawa/items/97450486201b67a5882f)** - 社内プロキシ環境でのTLSエラー回避策として乱用される`NODE_TLS_REJECT_UNAUTHORIZED=0`の危険性を解説し、証明書バンドルの正しい設定方法（`NODE_EXTRA_CA_CERTS`・`AWS_CA_BUNDLE`）を体系化した実践ガイド。本番環境への誤適用による全TLS検証無効化は深刻なセキュリティリスクになるため、正規の解決策を示す価値がある。

- **[差分が見えるMarkdownビューアー「Markview Pulse」を作った話](https://qiita.com/syuji501/items/508f016f15ff8ed3ea3e)** - Markdownの変更前後をサイドバイサイドまたはインライン差分で表示できるブラウザベースのビューア「Markview Pulse」の開発経緯と実装解説。ドキュメントレビューやPRのMarkdownプレビュー改善ツールとして実用的で、Monaco Editorとdiff-matchライブラリの組み合わせ事例が参考になる。

- **[【実録】GitHub Copilotと一緒にインフラ開発したら生産性が向上した話 - Markdown+Git活用術](https://qiita.com/yamada-asuka/items/44b481ff51c62e1cae2c)** - GitHub CopilotをInfrastructure as Codeの文脈で活用した実践報告。TerraformやDockerfileの生成より「Markdownで意図を言語化→CopilotがHCLに変換→Gitで差分管理」というフローが実は最も効果的だったという逆説的な知見を共有している。

- **[Cognitoを使って既存システムにSSOログイン機能を追加したお話](https://qiita.com/Tom-Panasonic/items/ec440506ce5119fb1239)** - Amazon Cognitoを既存の独自認証システムに後付けする際のアーキテクチャ選択（ユーザープールのFederated Identity vs カスタム認証フロー）と、セッション管理の移行設計を詳しく解説した記事。既存ユーザーを無停止でCognito管理に移行する手順が特に参考になる。

## AWS 新着

- **[Amazon Aurora MySQL 8.4 is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-aurora-mysql/8-4/)** (2026-05-21) - Aurora MySQL互換エディションがMySQL 8.4（LTSバージョン）に対応してGA。MySQL 8.4はLong Term Supportリリースで長期保守が保証されており、Aurora上で安定したLTSトラックを維持しつつAurora固有のパフォーマンス最適化を享受できるようになった。

- **[AWS announces ExtendDB, an open source DynamoDB-compatible adapter](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-extenddb-dynamodb/)** (2026-05-20) - AWSがDynamoDB APIをプラグイン可能なバックエンドで実装するOSSプロジェクト「ExtendDB v0.1」を発表。PostgreSQLやSQLiteをストレージ層に差し替えつつDynamoDB互換APIを維持できる設計で、ベンダー依存軽減やローカル開発環境の改善に活用できる可能性がある。

- **[Amazon SageMaker AI now supports OpenAI-compatible APIs for inference endpoints](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-sagemaker-ai-openai-apis/)** (2026-05-21) - SageMaker推論エンドポイントがOpenAI互換APIをサポート。OpenAI SDKやLangChain等のOpenAI前提のコードをそのままSageMaker上のカスタムモデルに向け直せるようになり、オープンモデルへのマイグレーションコストが大幅に下がる。

- **[Amazon DocumentDB Serverless is now available on DocumentDB 8.0](https://aws.amazon.com/about-aws/whats-new/2026/5/docdb8-serverless)** (2026-05-20) - DocumentDB ServerlessがMongoDB互換v8.0に対応。オンデマンドスケーリングとv8.0の新機能（配列演算子の拡充・パフォーマンス改善）を組み合わせて使えるようになり、サーバーレスアーキテクチャでMongoDBワークロードを動かす選択肢が広がった。

## Lobsters

- **[The Eternal Sloptember](https://geohot.github.io//blog/jekyll/update/2026/05/24/the-eternal-sloptember.html)** (49pt) - tinygrad作者のgeorge hotzによるバイブコーディング批評エッセイ。AIが生成するコードの「動くが理解されていない」という状態を「永続的なsloptember（ダメなコード月間）」と呼び、理解を伴わない高速開発が長期的にソフトウェア品質をどう劣化させるかを論じた挑発的な記事。

- **[Flatpak will depend on systemd](https://www.osnews.com/story/145071/flatpak-will-depend-on-systemd/)** (26pt) - Flatpakが次バージョンからsystemdを必須依存にする方針を発表し、systemdを採用しないLinuxディストロ（Void Linux・Alpine Linux等）でFlatpakが動作しなくなる問題を報じる記事。Linuxデスクトップアプリ配布の事実上の標準であるFlatpakのsystemd化は、軽量・ミニマル路線のディストロユーザーに大きな影響を与える。

- **[JS Crossword - a crossword where the clue = eval(answer)](https://lyra.horse/fun/jscrossword/)** (35pt) - クロスワードの「ヒント」がJavaScriptの`eval()`で評価され、その評価結果がマス目の答えになるという実験的Webゲーム。JavaScriptの奇妙な型強制・暗黙変換・プロトタイプチェーンの知識がそのままパズルになっており、言語仕様の深い理解を楽しく問うユニークな実装。

- **[How my minimal, memory-safe Go rsync steers clear of vulnerabilities](https://michael.stapelberg.ch/posts/2026-05-24-minimal-memory-safe-go-rsync-vulns/)** (74pt) - C製rsyncの歴史的CVEを分析し、Go再実装（gokrazy/rsync）がメモリ安全性によってどの脆弱性を回避できるか・できないかを分類した記事。「メモリ安全言語への移行で脆弱性が何%減るか」の実測として参照価値が高く、安全なシステムプログラミング言語選択の判断材料になる。

## dev.to

- **[Inference Is Becoming the New Steady-State Cost Center](https://dev.to/ntctech/inference-is-becoming-the-new-steady-state-cost-center-44ne)** - AI推論コストがクラウド費用の「定常コスト」として定着しつつある実態を分析した記事。学習コストは一時的だが推論コストはユーザー増に比例して増え続けるため、モデル選定・キャッシュ戦略・バッチ処理最適化がインフラ設計の核心になるという観点を整理している。

- **[Why AI-Generated Code Is Always Good Enough — And Never Great](https://dev.to/harsh2644/why-ai-generated-code-is-always-good-enough-and-never-great-4lhn)** - AIが生成するコードが「動くが優れていない」理由を考察した記事。テストをパスし要件を満たすコードと「保守しやすく・意図が明確で・システムに溶け込む」コードの違いを論じており、AIをレビューなしで本番に投入する危険性を開発者視点で言語化している。

- **[What is the Difference Between Lattice-Based and Hash-Based Signatures?](https://dev.to/alaminrifat/what-is-the-difference-between-lattice-based-and-hash-based-signatures-11lb)** - 耐量子暗号の2大署名方式である格子ベース（CRYSTALS-Dilithiumなど）とハッシュベース（SPHINCS+など）の仕組みと使い分けを解説した入門記事。NISTが最終標準化した方式が実際にどう違うのかを明快に整理しており、ポスト量子暗号移行を検討する開発者の出発点として有用。

- **[Every Tool Eventually Becomes Tuesday](https://dev.to/evanlausier/every-tool-eventually-becomes-tuesday-47ak)** - 革新的だったはずのツールが「当たり前の月曜日」になる技術の陳腐化サイクルを論じたエッセイ。AIコーディングツールも数ヶ月で「あって当然」になりつつあることを指摘し、「ツールへの過度な投資より問題を理解する力」の重要性を訴える内容。

## TechCrunch

- **[SpaceX launches Starship V3 for the first time, but loses booster on return](https://techcrunch.com/2026/05/22/spacex-launches-starship-v3-for-the-first-time-but-loses-booster-on-return/)** - 強化版Starship V3の初打ち上げが実施され、上段スターシップは予定通り飛行したが第一段ブースター（Super Heavy）の帰還に失敗。Starship V3はV2比でペイロード能力が大幅に向上したバージョンで、SpaceXが月着陸・火星飛行に向けて必要とする能力拡張の第一歩となった。

- **[Everyone is navigating AI security in real time — even Google](https://techcrunch.com/2026/05/24/everyone-is-navigating-ai-security-in-real-time-even-google/)** - GoogleのAIセキュリティ担当者への取材を通じ「大企業でさえAIセキュリティのベストプラクティスを手探りで構築している」という現状を伝えるレポート。プロンプトインジェクション・エージェントの権限過剰・サードパーティモデル依存リスクへの対処が業界横断の課題であることを改めて示している。

- **[Spotify's AI bet: more of everything, less of what you want](https://techcrunch.com/2026/05/22/spotifys-ai-bet-more-of-everything-less-of-what-you-want/)** - SpotifyがAI機能を次々と追加しているが「ユーザーが本当に求める精度の高いレコメンドが改善されていない」という批評記事。コンテンツ制作支援AIの充実と発見性アルゴリズムの質の乖離を指摘しており、プラットフォームのAI戦略がユーザー価値よりサプライサイド（クリエイター囲い込み）に向いているという問題提起。

- **[Apple says Epic lawsuit shouldn't reshape App Store rules for all developers](https://techcrunch.com/2026/05/22/apple-says-epic-lawsuit-shouldnt-reshape-app-store-rules-for-all-developers/)** - EpicとAppleの長期訴訟でAppleが最高裁に「Epicへの差止命令はApp Store全体のルールを変えるものであってはならない」と申立てた。欧州DMAによる開放への動きと並行して、米国内での法廷闘争がApp Store政策に与える影響範囲の確定が焦点になっている。

## Ars Technica

- **[US's big bet on quantum computing may not be entirely legal](https://arstechnica.com/tech-policy/2026/05/uss-big-bet-on-quantum-computing-may-not-be-entirely-legal/)** - 米国政府が量子コンピューティング企業への大型投資プログラムを発表したが、使用した法的根拠が議会の承認を経ていない可能性があるとの指摘を報じる記事。量子ファウンドリー企業の設立を含む官民連携の正当性に疑義が呈されており、政策立案と技術投資の交差点での法的リスクを示している。

- **[Police boast of hacking VPN where criminals "believed themselves to be safe"](https://arstechnica.com/tech-policy/2026/05/police-boast-of-hacking-vpn-where-criminals-believed-themselves-to-be-safe/)** - 欧州当局がダークウェブ系VPNプロバイダーのインフラに侵入し、「安全と信じていた」犯罪者のトラフィックを傍受・ドメイン押収・運営者逮捕に至った作戦の詳細を報告。VPNが法執行機関に対して安全であるという前提が崩れつつあることを示す事例として、プライバシー技術の信頼性を問い直す内容。

- **[Trump abruptly cancels EO signing event after top AI firm CEOs declined to go](https://arstechnica.com/tech-policy/2026/05/trump-canceled-ai-safety-testing-eo-after-snub-from-tech-ceos/)** - AI安全テストを義務付ける大統領令の署名イベントに大手AI企業CEOが出席を断った後、トランプ大統領がイベントを中止したと報道。「イノベーションへの阻害」と反対したとされ、AI安全規制を巡る産業界と政府の緊張関係が表面化した形。

- **[Marketer that claimed it could tap devices for ad targeting will pay $880K settlement](https://arstechnica.com/tech-policy/2026/05/marketer-that-claimed-it-could-tap-devices-for-ad-targeting-will-pay-880k-settlement/)** - デバイスマイクを無断で広告ターゲティングに使用できると主張していたマーケティング会社がFTCとの和解で88万ドルを支払うことに合意。「アクティブリスニング広告」の都市伝説的疑惑に法的決着がつく事例となり、デバイスセンサーを用いた行動ターゲティングの法的境界線を示す判例として注目される。

## 注目トピック

**AIコーディングの「委任」段階への移行**：今回のフィードで最も一貫したテーマは、AIコーディングツールが「補完・提案」から「丸ごと委任」へと質的に変わったという現場認識だ。MIT Tech Reviewの「1年で激変したソフトウェア開発」（はてブ276users）、dev.toの「AIコードは常にgood enough、決してgreat ではない」論考、Lobstersのgeorge hotzによる「永続的なSloptember」批評は、それぞれ異なる角度から同じ転換点を指している。Microsoftが2026年のAI予算をClaude Codeで半年で消費したという報告（先日のdev.to）も踏まえると、エージェント型AIは開発ツールの選択肢ではなく「デフォルトの開発環境」になりつつある。

**セキュリティの同時多発リスク**：AWSの「ExtendDB」やSageMakerのOpenAI互換APIなどインフラの可搬性は高まる一方、100万台のAI APIスキャンで「史上最悪のセキュリティ」が明らかになった（はてブ306users）ことは、普及速度がセキュリティ基線の整備を上回っている現実を突きつける。「Noroboto攻撃」のような見えないフォントによるAI欺瞞・GitHubサプライチェーン攻撃（Socket.dev記事）・不可視文字インジェクションと、攻撃手法の多様化が急加速している。欧州当局によるVPNハッキングやFTCのデバイス盗聴和解判決も加わり、インフラ・アプリ・法制の三層全てでセキュリティ再設計が迫られる局面に入っている。
