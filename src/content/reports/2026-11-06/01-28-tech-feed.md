---
title: "Tech Feed ダイジェスト（2026年11月6日）"
date: "2026-11-06T01:28"
category: "summary"
summary: "OpenAIのサイバーセキュリティ特化モデル、DynamoDB一括投入、AIコード品質をlintや仕組みで守る話題など8ソースの技術トピック"
tags: ["ai", "security", "aws", "frontend", "devops", "database", "agents"]
---

## はてなブックマーク (テクノロジー)
- **[最近の HTML の新機能の紹介（2026 年版）](https://zenn.dev/socialplus/articles/50221eafb8a55a)** ([85users](https://b.hatena.ne.jp/entry/s/zenn.dev/socialplus/articles/50221eafb8a55a)) - 近年ブラウザに入った HTML の新機能を 2026 年時点で整理した記事。JS 実装に頼っていた UI を標準機能で置き換える判断材料になる。
- **[PR投げたらClaudeがレビューしてくれる仕組みを作ってみた](https://speakerdeck.com/kuracchi_enj1/yokohama-north-meetup-18)** ([57users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/kuracchi_enj1/yokohama-north-meetup-18)) - Pull Request を契機に Claude が自動レビューする仕組みの構築事例を紹介する LT 資料。
- **[続・ソフトウェアアーキテクトのための意思決定術: Decision Readiness, Revisited](https://speakerdeck.com/snoozer05/decision-readiness-revisited)** ([45users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/snoozer05/decision-readiness-revisited)) - AI によってソフトウェアアーキテクチャの意思決定の経済性がどう変わるかを論じる資料。実装コストが下がる中で「いつ決めるか」の見方を再検討している。
- **[Chopin](https://githubnext.com/projects/chopin/)** ([28users](https://b.hatena.ne.jp/entry/s/githubnext.com/projects/chopin/)) - GitHub Next が公開した実験プロジェクト。開発者向けの新しい試みとして話題になっている。
- **[税法を定理証明支援系 Lean で書いて、プロダクト実装を「全入力で」確かめる](https://developers.freee.co.jp/entry/lean-formal-verification-tax-law-qa)** ([9users](https://b.hatena.ne.jp/entry/s/developers.freee.co.jp/entry/lean-formal-verification-tax-law-qa)) - 税法のルールを Lean で形式化し、プロダクト実装が全入力に対して仕様どおりか検証する freee の取り組み。テストでは網羅できない領域への形式手法の適用例。

## Zenn
- **[AWSでデータレイクハウスを構築してApache Icebergの更新・履歴管理を検証した](https://zenn.dev/kkoch5t2/articles/aws-iceberg-lakehouse-lab)** - S3 / Glue Data Catalog / Athena / Iceberg を組み合わせ、更新・削除・Version Travel・ファイル最適化を一通り試した検証記事。S3 上の Parquet やメタデータも確認している。
- **[Slurm は Kaggle で役に立つ](https://zenn.dev/pomcho555/articles/c455d086ec47af)** - GPU クラスタ向けのジョブスケジューラ Slurm を、RTX 3090 1 枚の自宅環境での学習ジョブ管理に使った経験談。キューイングで GPU を空けずに回せる。
- **[手書き Provider 261 件を @riverpod へ全面移行した進め方](https://zenn.dev/jtcc/articles/riverpod-generator-migration)** - Flutter アプリの Riverpod Provider 261 件と StateNotifier 130 件の移行を、難所の先行検証と衝突しない PR 分割でレビュー可能にした進め方。
- **[git archive とハッシュ一覧の照合で、本番の手修正を上書きしないデプロイスクリプトを作る](https://zenn.dev/airiell/articles/git-archive-manifest-deploy)** - 本番での直接修正を消さないよう、反映前に追加・更新・削除の一覧を dry-run で見せるシェルベースのデプロイ手法。
- **[AI生成コードを本番品質に保つためのフロントエンド開発の仕組み](https://zenn.dev/sun_asterisk/articles/d4e4bc24974b99)** - Next.js + TypeScript を例に、品質はプロンプトよりも AI の外側の「仕組み」で決まるとして 4 層構成を紹介。仕様に書かれていない値を AI が推測で埋める問題への対処。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[【2026年11月版】Amazon Bedrockの安価なLLMを19個、RAGで徹底比較してみた](https://qiita.com/MURAMASA2470/items/0e59f2f6d037aa5e7ea8)** - 社内資料検索 RAG の回答モデルを Nova 2 Lite から見直し、Bedrock 上の安価な 19 モデルを比較。数字の読み違いや資料にない数字の生成が動機。
- **[高校生がNew Relic × ChatGPTでScyllaDBの1.1秒遅延を追ったら、CPU steal 72%が見えた](https://qiita.com/harupython/items/8db7460b05ac8705837d)** - ScyllaDB の読み取り遅延の原因を調べていくと OS の CPU steal に行き着いたという障害調査の記録。
- **[Cronを使わずに、ISRとオンデマンド再検証でAPIを更新する](https://qiita.com/okokok/items/f9e3e203f8913d852c89)** - Vercel の cron 枠が埋まっている状況で、ISR とオンデマンド再検証により外部 API のデータを更新する実装。
- **[「人が打ったときだけ動く」はずのスキルを、AI が自分で読んだ。](https://qiita.com/suwa_nobu/items/f09fceeb70b7a68aa4f7)** - 人間が明示的に呼ぶ想定のスキルを、Claude Code・Codex・Gemini CLI がそれぞれ自発的に読むかを 3 回ずつ試した検証。
- **[【インシデント対策】CloudWatchアラームの通知からAmazon Q Developerではメンションが付かないのでLambdaで付けて障害に気づける確率を上げた](https://qiita.com/Tukirukiki/items/88ed501f6f34fff1abaa)** - Slack 通知にメンションが付かず障害に気づけない問題を、Lambda でメンションを付与して補う運用改善。

## AWS 新着
- **[Amazon DynamoDB now supports bulk put items](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-dynamodb-now-supports-bulk-put-items/)** (2026-11-05) - S3 上のデータを既存の DynamoDB テーブルへ書き込む一括投入機能が GA。アプリ側での大量書き込みループが不要になる。
- **[AWS Security Hub now provides an SBOM inventory for your compute resources](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-sbom-inventory/)** (2026-11-06) - コンピュート資源上のソフトウェア構成を組織横断で継続的に把握できる SBOM インベントリ。脆弱性発生時の影響範囲調査に使える。
- **[AWS Systems Manager Parameter Store now allows organization and validation with built-in data types](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-ssm-parameter-store-allows-organization-validation-with-new-data-types/)** (2026-11-05) - 13 種の新データ型を追加し、作成・更新時に値が自動検証される。誤った設定値の混入を防げる。
- **[Announcing Web Answer on Amazon Bedrock AgentCore](https://aws.amazon.com/about-aws/whats-new/2026/11/web-answer-amazon-bedrock/)** (2026-11-05) - 自然言語の質問に対し、根拠付き・引用付きの回答を返すマネージドツールが GA。エージェントに Web 検索系の機能を組み込みやすくなる。
- **[IAM Roles Anywhere now supports automatic certificate revocation checking](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-roles-anywhere-cdp/)** (2026-11-05) - CRL 配布ポイント(CDP)による自動失効確認に対応。オンプレなど AWS 外ワークロードの証明書失効チェックを手動運用しなくて済む。

## Lobsters
- **[September in Servo: progress, rounded rectangles, and more](https://servo.org/blog/2026/11/05/september-in-servo/)** (56pt) - Rust 製ブラウザエンジン Servo の 9 月の進捗報告。角丸描画などレンダリング面の改善が中心。
- **[Software Line Specialist](https://lovro-bikic.github.io/software-line-specialist/)** (35pt) - AI とプログラミングを題材にしたサタイア記事。AI 時代のソフトウェア職のあり方を皮肉っている。
- **[GNU Mes and the 0.28 release](https://ekaitz.elenq.tech/fasterMes10.html)** (21pt) - ブートストラップ用の最小 Scheme インタプリタ兼 C コンパイラ GNU Mes 0.28 のリリースと高速化の話。
- **[SourceHut disabled registration bypass | CVE-2026-121728](https://blog.arusekk.pl/posts/srht-disabled-registration-bypass/)** (18pt) - 登録を無効化した SourceHut インスタンスでもアカウント登録できてしまう迂回の脆弱性報告。
- **[A Look at Datastar](https://noteflakes.com/articles/2026-11-04-datastar)** (16pt) - サーバー駆動の軽量ハイパーメディアライブラリ Datastar を Ruby 側から検討した記事。

※ 25 件中、多くが過去レポートで掲載済みのため新規は少なめ。

## dev.to
- **[Stop Hacking Base64 With btoa(). toBase64() Fixes It Natively.](https://dev.to/parsajiravand/stop-hacking-base64-with-btoa-tobase64-fixes-it-natively-2kkm)** - btoa() は絵文字で例外になり、バイト列の展開は巨大ファイルで落ちる。Uint8Array の toBase64()/fromBase64() なら文字列を介さず安全に変換できる。
- **[Your build attestation is a chain of custody, not a safety certificate](https://dev.to/cyclopt_dimitrisk/your-build-attestation-is-a-chain-of-custody-not-a-safety-certificate-41mm)** - ビルドの証明(attestation)は由来を示す記録であって安全性の保証ではない、とサプライチェーンセキュリティの過信を戒める記事。
- **[Find the production agent failures that every health check misses](https://dev.to/googlecloud/find-the-production-agent-failures-that-every-health-check-misses-39j8)** - ヘルスチェックでは拾えない本番エージェントの失敗を検出し、原因コード行まで追跡する OSS「AQuA」の紹介。
- **[Claude Code Ignoring CLAUDE.md? See What's in Its Context](https://dev.to/reporails/claude-code-ignoring-claudemd-see-whats-in-its-context-3j8m)** - ルールを無視されたら文言を直す前に、実際にコンテキストへ何が入っているかを確認すべきという調査手順。
- **[Android 17 on a 4.9 Kernel: LineageOS 24.0 on the Pixel 3a](https://dev.to/gde/android-17-on-a-49-kernel-lineageos-240-on-the-pixel-3a-1mok)** - Pixel 3a で古い 4.9 カーネルのまま Android 17 ベースの LineageOS を動かすための修正を整理した移植記録。

## TechCrunch
- **[OpenAI released a new cybersecurity model. Is that enough?](https://techcrunch.com/2026/11/05/openai-released-a-new-cybersecurity-model-is-that-enough/)** - OpenAI が新しいサイバーセキュリティ特化モデルを公開した一方、AI ラボが重要インフラ防御にどこまで貢献しているかが問われている。はてブでは同モデルが Firefox の未知の脆弱性 81 件を発見したとの報道も話題。
- **[Apple is reportedly cutting budgets for its internal AI usage](https://techcrunch.com/2026/11/04/apple-is-reportedly-cutting-budgets-for-its-internal-ai-usage/)** - トークンを使い倒す風潮が請求書で現実に直面し、Apple が社内 AI 利用予算を絞ったと報じられた。AI コストの管理が開発組織の課題になりつつある。
- **[Meta warns that election backlash against data centers could make AI expansion harder](https://techcrunch.com/2026/11/05/metas-warns-that-election-backlash-against-data-centers-could-make-ai-expansion-harder/)** - データセンター建設への政治的反発が AI インフラ拡張の制約になり得ると Meta が警告。

## Ars Technica
- **[Nintendo's biggest ROM chip supplier is bowing out of the business](https://arstechnica.com/gaming/2026/11/the-tech-memory-shortage-comes-for-nintendos-cartridge-supply-chain/)** - メモリ不足の波が任天堂のカートリッジ供給網にも及び、最大の ROM チップ供給元が撤退する。物理版ソフトのコストへの影響が論点。
- **[Microsoft fixes a Windows 11 annoyance as PC revenue declines](https://arstechnica.com/gadgets/2026/10/windows-11-gets-right-click-menu-improvements-as-pc-revenue-slides/)** - Windows 11 の右クリックメニュー改善に加え、起動しない PC 向けのクラウド復旧オプションが追加された。
- **[Reddit is moving to "a logged-in-only experience," CEO says](https://arstechnica.com/gadgets/2026/10/reddit-will-require-you-to-log-in-eventually-ceo-confirms/)** - Reddit は最終的にログイン必須へ移行する方針。検索流入が前四半期に大きく減ったことが背景にある。
- **[Enterprises keep buying software upgrades that IT thinks will make things worse](https://arstechnica.com/information-technology/2026/10/survey-enterprises-waste-28-percent-of-software-budgets-on-unwanted-upgrades/)** - IT 責任者 2,018 人の調査で、ソフトウェア予算の約 28% が望まれていないアップグレードに使われていると指摘。

## 注目トピック
今日目立つのは「AI が書く・動く前提で、その外側の仕組みをどう固めるか」という流れ。Zenn のフロントエンド品質の仕組み、dev.to の CLAUDE.md が効かない原因の調査、Qiita のスキルが自発的に読まれる検証、AQuA のような本番エージェントの失敗検出はいずれも、プロンプトの工夫だけに頼らず検証可能な層で守る方向を示す。形式手法(Lean)による全入力検証もその延長にある。

もう一つはセキュリティと AI コストの現実化。OpenAI のサイバー特化モデルが話題になる一方、サプライチェーン(attestation は安全の証明ではない)や AWS の SBOM インベントリなど防御側の可視化が進む。Apple の社内 AI 予算削減やデータセンター反発の報道は、AI 利用のコストとインフラ制約が開発現場の判断材料になりつつあることを示している。
