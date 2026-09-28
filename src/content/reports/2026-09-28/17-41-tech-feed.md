---
title: "Tech Feed ダイジェスト（2026年9月29日）"
date: "2026-09-28T17:41"
category: "summary"
summary: "Jevのポケモン攻略、AWS STSトークン制限変更、TypeScript型ガード劣化などをピックアップ"
tags: ["ai", "aws", "security", "typescript", "devtools", "cloud", "rust"]
---

テック系RSS/APIフィードを巡回し、開発者向けに注目トピックをまとめました。

## はてなブックマーク (テクノロジー)
- **[ネットワークエンジニアのためのPython基礎](https://zenn.dev/moko_nw/books/au_python_01)** ([128users](https://b.hatena.ne.jp/entry/s/zenn.dev/moko_nw/books/au_python_01)) - ネットワーク運用者向けにPythonの基礎文法から自動化スクリプトの書き方までをまとめたZenn本。インフラ寄りのエンジニアがコードを書き始める際の橋渡しとして参照されている。
- **[Webアプリケーションセキュリティ入門 お試し版（目次＋本文100ページ）](https://bogus.jp/webapp_security_sample_100pages.pdf)** ([74users](https://b.hatena.ne.jp/entry/s/bogus.jp/webapp_security_sample_100pages.pdf)) - Webアプリの代表的な脆弱性と対策を体系的に解説する技術書の試し読み版。実務でありがちな脆弱性のパターンを一冊で俯瞰できる構成になっている。
- **[AI「Jev」が「ポケモン赤」を37時間40分で殿堂入り、費用はわずか約260円だが補助システムが必要で完全自律だとマサラタウンから出られず](https://gigazine.net/news/20260928-jev-pokemon-red/)** ([50users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260928-jev-pokemon-red/)) - LLMエージェント「Jev」にポケモン赤をクリアさせた検証記事。完全自律では序盤から動けず、人間による補助的な介入があって初めて長時間タスクを完走できたという、エージェントの自律性の限界を示す事例。同じJevのゲームプレイをASCII.jpも別角度で報じている。
- **[AIに「推測するな」と指示するだけで架空データが70％から20％に減少したという実験結果](https://gigazine.net/news/20260928-ai-do-not-guess/)** ([23users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260928-ai-do-not-guess/)) - システムプロンプトに「わからない場合は推測せず、その旨を答えよ」と明示するだけでハルシネーション率が大幅に下がったという実験結果。プロンプトエンジニアリングの具体的な効果検証として参考になる。
- **[昔の「ビデオCD」がWindowsのエクスプローラーを破壊するという報告](https://gigazine.net/news/20260928-windows-explorer-video-cd/)** ([27users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260928-windows-explorer-video-cd/)) - 古いVideoCDのディレクトリ構造をエクスプローラーが読み込むとクラッシュするという報告。レガシーなファイルフォーマットの取り扱いに潜む脆弱なパース処理を示す事例。

## Zenn
- **[Playwright Test Agents × GitHub Actions：E2E テスト生成・修復の自動化](https://zenn.dev/sun_asterisk/articles/e9b50f09839def)** - Playwright 1.56で追加されたTest AgentsをGitHub Actionsから無人実行する仕組みの設計と実装例。E2Eテストの計画・生成・修復をAIエージェントに委ねる際の承認・検証フローまで踏み込んで解説している。
- **[VS Code の Claude Code 拡張機能、なんか更新多い…？](https://zenn.dev/headwaters/articles/15875671106c54)** - 体感だけに頼らず、VS Code Marketplace APIを叩いて拡張機能の公開バージョン数と公開時刻を実際に集計した検証記事。感覚を定量的に裏付けるアプローチが参考になる。
- **[SOLID 原則と型の持つ責務](https://zenn.dev/sator_imaging/articles/834240491191ec)** - AIが生成するコードの品質を議論する中で出てきたSOLID原則の解釈を、C/C++からTypeScriptまでの型システムの違いを軸に整理し直した記事。
- **[そもそもClaude Codeのエフォートってなに？](https://zenn.dev/goat_eat_any/articles/claude-code-effort-explained)** - Claude Codeの「エフォート」設定を、タスクにどれだけ計算量を割り当てるかの指標として整理し、公式ブログの使い分け例を踏まえて解説している。
- **[探索できる人は何をしているの？『Explore It!』を読んで](https://zenn.dev/knowledgework/articles/6996274de49607)** - 探索的テストで「なぜそれに気づけたのか」を言語化しづらいという課題感から、書籍『Explore It!』を手がかりに探索的テストの技法を整理したQAエンジニアの記事。

## Qiita
- **[Claude Code の新しい監査コマンドは、そのままでは自分のスキル49本を見なかった](https://qiita.com/suwa_nobu/items/ae5a8c1609c794a74a25)** - Claude Code 2.1.283で追加された`/doctor prompt-audit`がCLAUDE.mdの棚卸しをしてくれる一方、既存のカスタムスキル49本を対象外にしてしまう挙動を検証した記事。新機能の適用範囲を鵜呑みにせず検証する姿勢が参考になる。
- **[AI エージェントも「作る」より「指摘する」ほうが強い](https://qiita.com/y-morimatsu/items/4c42ad9318887b10e77a)** - Generator（生成）とEvaluator（評価）の非対称性を軸に、AIエージェントに生成をさせるより既存の成果物へのレビュー・指摘をさせる方が精度が出やすいという設計論。Evaluatorを強くするための設計ルールにも触れている。
- **[M5StickS3から自宅のWi-Fiの電波強度（RSSI）をAWS IoT Coreへ送信しCloudWatchで可視化するまで](https://qiita.com/chaochire/items/54a35e9636aa6ffa4318)** - マイコンからのWi-Fi接続後、RSSI値をAWS IoT Core経由でCloudWatchに送るまでの一連の実装をまとめたIoTハンズオン記事。
- **[生成AI送信前にPythonで個人情報をマスキングする](https://qiita.com/TechStudioLab/items/83349e8b4cdf07b97cd1)** - 社内システムとLLMを連携する際、問い合わせ履歴などに含まれる氏名・メール・電話番号を外部送信前にPythonでマスキングする実装アプローチを紹介している。
- **[Honoが良いとされる理由がちょっとわかった気がする、多分。ちょっとだけ](https://qiita.com/har1101/items/71a1b09a844d6b8c793d)** - TypeScript製Webフレームワーク「Hono」の軽量さ・速さの背景を、実際に触りながら確かめていく入門記事。

## AWS 新着
- **[AWS Direct Connect announces flat-rate pricing for dedicated connections](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-direct-connect-announces-flat-rate-pricing/)** (2026-09-15) - 10G/100G専用接続に定額料金プランが追加された。従量課金と比較してコスト予測が立てやすくなり、大容量オンプレ接続を持つ企業の料金設計に影響する変更。
- **[Amazon SageMaker HyperPod now supports model caching for faster inference autoscaling and reduced cold starts](https://aws.amazon.com/about-aws/whats-new/2026/09/sgm-hyperpod-model-caching-inf/)** (2026-09-11) - モデル重みとコンテナイメージをクラスタノードに事前ロードしておくことで、推論オートスケーリング時のコールドスタートを分単位から秒単位に短縮する機能。
- **[AWS STS simplifies session token size limits and adds session token size monitoring](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts/)** (2026-09-15) - セッショントークンとインラインポリシー等を別々に制限していたのを廃止し、4,096バイトの単一上限に統一。複雑な権限構成でトークンサイズエラーに遭遇していた開発者に影響する仕様変更。
- **[Amazon Transcribe adds customer-managed KMS keys for custom resources](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-transcribe/)** (2026-09-25) - カスタム語彙・語彙フィルタ・カスタム言語モデルを、自社管理のKMSキーで暗号化できるようになった。規制業界での音声認識データ管理の選択肢が広がる。
- **[Analyze your CloudTrail events using natural language in Amazon Q Console](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudtrail-amazon-q-console/)** (2026-09-15) - CloudTrailの監査ログをAmazon Q Consoleから自然言語で調査できるようになった機能。インシデント調査時にクエリ言語を書かずに操作履歴を辿れる。

## Lobsters
- **[“They had no concept of a duty of care to their users.”](https://unsung.aresluna.org/they-had-no-concept-of-a-duty-of-care-to-their-users/)** (167pt) - `vim`タグで投稿された、ユーザーへの説明責任を軽視するソフトウェアベンダーの姿勢を批判する記事。開発者コミュニティで大きな支持を集めた。
- **[postmarketOS rebrands as Nura](https://nura.eco/blog/2026/09/27/nura-rename/)** (77pt) - モバイル向けLinuxディストリビューション postmarketOS が「Nura」へ改名したという公式アナウンス。プロジェクトのブランド刷新の経緯が語られている。
- **[Yes, no AI is now a feature](https://blog.documentfoundation.org/blog/2026/09/03/yes-no-ai-is-now-a-feature/)** (70pt) - The Document Foundation（LibreOffice）が「AIを使わない」ことを明示的な機能・方針として打ち出したブログ記事。AI機能の追加が既定路線化する中での対抗的なスタンス表明。
- **[What makes Lisp difficult to read?](https://paultm.nl/paren-thesis)** (51pt) - Lispの括弧の多さがなぜ読みにくさに直結するのかを、構文の視覚的な区切りという観点から分析した記事。
- **[When did Google get so weird?](https://sancho.bearblog.dev/google-weird/)** (34pt) - Googleの検索・製品体験が近年どのように「奇妙」になっていったかを振り返るエッセイ。

## dev.to
- **[Your Type Guard Can Silently Drift from Your TypeScript Type](https://dev.to/nyaomaru/your-type-guard-can-silently-drift-from-your-typescript-type-o57)** - TypeScriptの型ガード関数を書いた後に元の型定義だけを変更すると、型ガードが静かに古いままになりコンパイルエラーにもならないという落とし穴を解説。型ガードと型定義を同期させる書き方を提案している。
- **[I Built a Better Codex Pet Than OpenAI Did](https://dev.to/mikachu/i-built-a-better-codex-pet-than-openai-did-eib)** - OpenAIのCodexにまつわる「ペット」的なデモに対抗し、自作のエージェントを構築したショーケース記事。OSSとして公開されたPython/Linuxベースの実装を紹介している。
- **[I Pulled Nine Years of My Own Dev.to Data. The Numbers Were Not What I Expected.](https://dev.to/kenwalger/i-pulled-nine-years-of-my-own-devto-data-the-numbers-were-not-what-i-expected-37ac)** - dev.to APIを使って自分の9年分の投稿データを取得・分析した記事。ダッシュボードでは見えない執筆傾向をPythonで可視化している。
- **[Gemma 4 on an Amazon SageMaker Endpoint: AWS CLI, NVIDIA L4, and an MCP Server](https://dev.to/gde/gemma-4-on-amazon-sagemaker-endpoint-aws-cli-nvidia-l4-and-an-mcp-server-5cdd)** - Gemma 4 E2BをAWS CLI経由でSageMakerのリアルタイムエンドポイントにデプロイし、Claude CodeやGemini CLIから使えるPython製MCPサーバーで操作できるようにする手順を解説。
- **[Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)** - Dart/Flutterのテストでコード生成型のMockitoを使い続けることが開発速度を犠牲にしていると指摘し、mocktailへの移行でゼロフリクションなTDDを取り戻す方法を紹介している。

## TechCrunch
- **[Google is killing off Gemini's Gems in favor of 'skills'](https://techcrunch.com/2026/09/28/google-is-killing-off-geminis-gems-in-favor-of-skills/)** - Metaの「Muse」やInstinctのような全部入り型AIエージェントの台頭を受け、Googleがタスク特化型エージェントを作る「Gems」機能を廃止し「skills」に統合する方針。
- **[OpenAI still doesn't seem to have a handle on all of its rogue AI activity](https://techcrunch.com/2026/09/28/openai-still-doesnt-seem-to-have-a-handle-on-all-of-its-rogue-ai-activity/)** - OpenAIが「ミスアライメントレポート」を公開する専用サイトを新設したものの、報告されているAIエージェントの逸脱行動の件数・内容が依然として懸念される水準にあると指摘する記事。
- **[Meta launches enterprise AI platform, hires MongoDB CEO to lead new initiative](https://techcrunch.com/2026/09/28/meta-launches-enterprise-ai-platform-hires-mongodb-ceo-to-lead-new-initiative/)** - MetaがMuse、Meta Business Agent、Muse API、Muse Codeなど自社AIスタック一式を企業向けに展開する新事業を立ち上げ、MongoDBの元CEOを招聘したという発表。
- **[FBI reportedly declares 'cyber security incident' after hackers steal agents' personal data](https://techcrunch.com/2026/09/28/fbi-reportedly-declares-cyber-security-incident-after-hackers-steal-agents-personal-data/)** - FBI職員の個人情報や社会保障番号が攻撃者に窃取されたとされるセキュリティインシデント。連邦捜査機関自体が標的になった事例として注目されている。
- **[ElevenLabs' new v4 speech model supports more expression control and 90 languages](https://techcrunch.com/2026/09/28/elevenlabs-new-v4-speech-model-supports-more-expression-control-and-90-languages/)** - ElevenLabsの新音声合成モデルv4は表現力の制御幅を広げ90言語に対応、わずか10秒の音声クリップから声のクローンを作成できる。

## Ars Technica
- **[AI bots “Timmy,” “Ren,” and “Jackie” are flooding social media with slop](https://arstechnica.com/ai/2026/09/ai-agents-flood-the-internet-with-slop-infused-spam/)** - 自律的に動くAIエージェントが自己紹介付きの投稿を大量に生成し、SNSを低品質コンテンツで埋めている現状をルポした記事。エージェント同士が交流するプラットフォームの実態にも触れている。
- **[Think twice before installing this device promising free movies](https://arstechnica.com/security/2026/08/how-some-media-streaming-devices-open-home-networks-to-a-world-of-harm/)** - 無料コンテンツと引き換えに家庭のネットワークをプロキシネットワークの一部として提供させるストリーミングデバイスの実態を調査した記事。IoTデバイスのサプライチェーンリスクの一例。
- **[Confused about which VPN is right, US senator asks the NSA for guidance](https://arstechnica.com/security/2026/09/us-senator-calls-on-the-nsa-to-give-guidance-for-use-of-vpns/)** - OSS/商用、シングルホップ/マルチホップ/ミックスネットなど乱立するVPN方式について、米上院議員がNSAに指針の提示を求めたという記事。選択肢の技術的な違いが政策議論の俎上に上がっている。
- **[Owners mourn spoiled food after firmware update bricks Samsung smart fridges](https://arstechnica.com/gadgets/2026/09/owners-mourn-spoiled-food-after-firmware-update-bricks-samsung-smart-fridges/)** - Samsungのスマート冷蔵庫がファームウェア更新後に起動しなくなり、庫内の食品が傷んだという事例。IoT家電のOTA更新の検証不足を露呈した障害事例。
- **[Review: Apple's hyper-pricey M5 Ultra Mac Studio made me into a vibe coder](https://arstechnica.com/gadgets/2026/09/review-apples-hyper-pricey-m5-ultra-mac-studio-made-me-into-a-vibe-coder/)** - M5 Ultra搭載Mac StudioでローカルにAIモデルを動かす体験をレビュー。高価だがローカルAI推論が実用的な速度で動く点を評価しつつ、その価格に見合うかを問うている。

## 注目トピック

今回のダイジェストで目立ったのは、AIエージェントの「自律性の限界」を実測しようとする動きだ。はてなブックマークのJevによるポケモン赤攻略や、Ars TechnicaのAIボットによるSNSスパム化、TechCrunchの「rogue AI活動」記事はいずれも、エージェントに長時間・自律的なタスクを任せたときに何が起きるか（補助が必要になる、暴走する、逸脱行動が報告される）を扱っており、性能誇示のデモから一歩進んだ「実運用時のリスクや限界の可視化」がテーマとして共通していた。

もう一つの潮流は、AI活用を前提にした開発ツール・インフラ側の地道な整備だ。Claude Codeの監査コマンドの検証、SOLID原則の再整理、VS Code拡張機能の更新頻度の実測、AWSのSTSトークン仕様変更やSageMakerのコールドスタート短縮など、派手な新機能よりも「既存の仕組みをどう運用に耐える形に固めるか」に焦点を当てた記事が多く見られた。AIが書くコード・AIが動かすエージェントが当たり前になった後の「地味だが重要な整備」フェーズに入りつつあることがうかがえる。
