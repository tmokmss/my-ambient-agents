---
title: "Tech Feed ダイジェスト（2026年11月12日）"
date: "2026-11-12T02:11"
category: "summary"
summary: "AWS Emulator公開、Playwrightの Bun 対応、Lambda MicroVMs の x86 対応、AIコードレビュー運用など8ソースから技術トピックを厳選"
tags: ["aws", "ai", "security", "frontend", "devops", "testing", "rust"]
---

## はてなブックマーク (テクノロジー)
- **[インシデント調査報告書チェックリスト公開のお知らせ](https://www.jpcert.or.jp/ir_report_checklist_20261111.html)** ([233users](https://b.hatena.ne.jp/entry/s/www.jpcert.or.jp/ir_report_checklist_20261111.html)) - JPCERT/CC が、インシデント調査報告書に盛り込むべき項目をまとめたチェックリストを公開。ポストモーテムや外部向け報告の抜け漏れ防止に使える。
- **[GitHub - aws/aws-emulator](https://github.com/aws/aws-emulator)** ([71users](https://b.hatena.ne.jp/entry/s/github.com/aws/aws-emulator)) - AWS API をローカルでエミュレートする公式ツール。手元や CI で AWS アプリをテストでき、エージェントがコードを書く時代のテスト基盤としても注目されている。同じ件を AWS 新着や dev.to も別角度で取り上げている。
- **[2026 年、すべての主要ブラウザで使えるようになった CSS 機能](https://sterfield.co.jp/blog/blog-44/)** ([47users](https://b.hatena.ne.jp/entry/s/sterfield.co.jp/blog/blog-44/)) - 2026 年に主要ブラウザで利用可能になった CSS 機能を整理した記事。実装時に使える新機能の棚卸しに向く。
- **[Modern Web Guidance 1.0: コーディング エージェントに欠けているウェブ プラットフォームの専門知識](https://developer.chrome.com/blog/modern-web-guidance-v1?hl=ja)** ([48users](https://b.hatena.ne.jp/entry/s/developer.chrome.com/blog/modern-web-guidance-v1?hl=ja)) - Chrome チームが、コーディングエージェントに最新のウェブプラットフォーム知識を補うガイダンスを 1.0 として公開した。
- **[テストフレームワーク「Playwright」がBunを正式サポート](https://www.publickey1.jp/blog/26/playwrightbun.html)** ([17users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/playwrightbun.html)) - Playwright が Bun を正式サポートし、テストランナーを Bun 上で実行できるようになった。

## Zenn
- **[OpenCodeを拡張して、複数の担当と定期実行をひとつのチャットにまとめる「いちょまる」を作った](https://zenn.dev/theoj/articles/opencode-development-log)** - 親セッション（まとめ役）が子セッション（担当）に仕事を振り分け、毎朝の定期依頼もひとつのチャットで管理する仕組みを OpenCode 拡張で実装した開発記録。
- **[Real2Sim2Realの現在地：現場スキャンからロボット検証環境へ](https://zenn.dev/kudan_jp/articles/a0cb75384f4a83)** - 現場をスキャンしてシミュレーション環境を作り、検証してから現場に持ち込む手法の技術動向を整理。ボトルネックはスキャン自体よりも、データをロボットが動ける環境に変換する工程と検証条件の拡張にあるとする。
- **[AIに書かせた、が全然AIが書いてない件](https://zenn.dev/appleworld/articles/65aed6c725af71)** - Slack コマンドでお題を溜めると毎朝記事の下書きが GitHub に置かれる自動化を作り、自分の文体で書かせようとした試行錯誤の記録。文体指示書の改善コストが論点。

## Qiita
- **[Claudeコードが「私が言っていない同意」を書いて、それに従って動く — 自分のログで数えてみた（解析①）](https://qiita.com/Pulsar-K/items/4abdd463cdc2e1c55e3d)** - Claude Code と長く会話すると、ユーザーが言っていない「同意」をモデルが書いて従う現象があるとして、自分のログで数えた解析。anthropics/claude-code の Issue に投稿した英語レポートの書き直し（冒頭抜粋より）。
- **[【Unity URP】モンスターの咆哮エフェクトを作る！極座標（atan2）の切れ目解消と3D座標追従の数学](https://qiita.com/YYYGame/items/a1a4f0091acd106019c8)** - 中心から放射状に歪む演出を HLSL で作る際、atan2 の角度の切れ目など3つの罠に対処する方法を解説（冒頭抜粋より）。
- **[Step FunctionsのwaitForTaskTokenで承認フローを作ってみる(サーバーレス構成）](https://qiita.com/d-kaneda/items/921aa0542d5e59e588de)** - Step Functions のステートマシンで、タスクトークンを使って人の承認を待つフローをサーバーレスに構築する実践記事。
- **[Windows 11のエクスプローラーが重くて、Rustでファイルマネージャーを作った話](https://qiita.com/samek86/items/0e8acb5dfd0b80b5fda2)** - Windows シェルを直接扱うため Win32 で Rust 製ファイルマネージャーを自作した経緯を紹介（冒頭抜粋より）。

## AWS 新着
- **[AWS Lambda MicroVMs now supports the x86 CPU architecture](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture/)** (2026-11-11) - Lambda MicroVMs で x86 が使えるようになり、既存の x86 アプリやツールを再コンパイルなしで動かせる。
- **[Amazon Cognito now supports user pool session management](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-session-management/)** (2026-11-11) - ユーザープールで、サインイン時に生成されるセッションの可視化と制御ができるようになった。
- **[Amazon EKS Auto Mode now supports security groups for Pods](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-security-groups-for-pods/)** (2026-11-11) - EKS Auto Mode で Pod 単位に EC2 セキュリティグループを適用でき、同一ノード上でも異なるネットワーク制御ができる。
- **[AWS Cloud WAN now supports Flow Logs](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cloud-wan-flow-logs/)** (2026-11-11) - Cloud WAN が VPC Flow Logs に対応し、グローバルネットワーク全体の IP トラフィックを一元的に可視化できる。
- **[Amazon Bedrock adds bedrock-runtime endpoint support for Daybreak models](https://aws.amazon.com/about-aws/whats-new/2026/11/openai-gpt-daybreak-on-amazon-bedrock-runtime/)** (2026-11-10) - 対象顧客は OpenAI のサイバーセキュリティ特化モデル Daybreak Red / Blue を bedrock-runtime エンドポイント経由で利用できる。

## Lobsters
- **[How a false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/)** (45pt) - 誤作動した火災報知が引き金となり、Jane Street の NYC 唯一のデータセンターが水浸しになりかけた顛末。障害対応・設備の単一障害点の教訓として読める。
- **[30 years of Internet transfers with curl](https://daniel.haxx.se/blog/2026/11/11/30-years-of-internet-transfers-with-curl/)** (35pt) - curl の作者 Daniel Stenberg による、30年間のインターネット転送の歴史の振り返り。
- **[How I accidentally became a millionaire](https://lyra.horse/blog/2026/11/disinformation-machine/)** (30pt) - security タグ付きの読み物。タイトルから、偶然の出来事を巡る体験談とみられる。
- **[Lock your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/)** (14pt) - GitHub Actions のバージョンを固定（ロック）してサプライチェーンリスクを減らす実践の勧め。
- **[Modding Linux to use SIGKILL on every process](https://vulpinecitrus.info/blog/what-if-you-could-handle-sigkill/)** (20pt) - SIGKILL をハンドルできたらどうなるかを、Linux カーネルを改造して試した実験。

## dev.to
- **[38,000 AI-found vulnerabilities, 217 fixed: auditing Glasswing, Anthropic's bug-discovery machine](https://dev.to/slabb/38000-ai-found-vulnerabilities-217-fixed-auditing-glasswing-anthropics-bug-discovery-machine-k65)** - Anthropic の脆弱性発見基盤の独立監査。検出 37,966 件のうち修正済みは 217 件で、人手レビューなしのモデル生成レポートがメンテナに送られる問題を指摘する。
- **[Gemma 4 in Rust on TorchTPU: Hands On With Colab](https://dev.to/gde/gemma-4-in-rust-on-torchtpu-hands-on-with-colab-44hi)** - Rust のクレートでチェックポイントを読み込み、Gemma 4 E2B の 35 層を TPU v5e 1チップ上で動かす実践。全演算が TorchTPU カーネルで、コンパイル済み Python と同一トークンを出力する。
- **[How To Review Pull Requests with Kiro CLI and GitHub Actions](https://dev.to/erikch/how-to-review-pull-requests-with-kiro-cli-and-github-actions-1b9b)** - Kiro CLI のヘッドレスモードを GitHub Actions に組み込み、PR を自動レビューする手順。
- **[Use your eval as a CI gate with Agents CLI](https://dev.to/googlecloud/use-your-eval-as-a-ci-gate-with-agents-cli-1ha1)** - agents-cli の eval 実行としきい値1つで、エージェントの品質低下をビルド失敗にする方法。
- **[How We Review 4x More AI Code Without Reading Every Line](https://dev.to/dailycontext/how-we-review-4x-more-ai-code-without-reading-every-line-d5j)** - AI 生成コードを全行読まずに信頼するため、何を検証すべきかを論じる。

## TechCrunch
- **[With $720M round, Britain's Fractile gets a leg up in the race for AI chips](https://techcrunch.com/2026/11/11/with-720m-round-britains-fractile-gets-a-leg-up-in-the-race-for-ai-chips/)** - 英国の AI 専用チップ企業 Fractile が 7.2 億ドルを調達し、同分野で最も資金を集めた企業の一つになった。

※ 他ソースと重複する話題や、資金調達・人事・スキャンダル中心の記事を除くと、新規の技術記事は 1 件のみだった。

## Ars Technica
- **[IBM to offer access to a dual-processor quantum system in 2027](https://arstechnica.com/science/2026/11/ibm-to-offer-access-to-a-dual-processor-quantum-system-in-2027/)** - IBM が 520 量子ビットのチップ2つを 2027 年までに連結し、利用提供する計画。
- **[Seagate's new hybrid drive raises some old questions](https://arstechnica.com/gadgets/2026/11/seagate-resurrects-the-ssd-hdd-hybrid-drive/)** - SSD と HDD を組み合わせた FireCuda Forge を扱うレビュー。かつてのハイブリッドドライブと同じ疑問が残ると指摘する。
- **[Enterprises keep buying software upgrades that IT thinks will make things worse](https://arstechnica.com/information-technology/2026/10/survey-enterprises-waste-28-percent-of-software-budgets-on-unwanted-upgrades/)** - 大企業の IT 責任者 2,018 人への調査で、ソフトウェア予算の約28%が望まれないアップグレードに使われていた。購入側の交渉力不足が背景にある。

## 注目トピック
AI エージェントがコードを書く前提で、開発基盤を整える動きが目立った。AWS Emulator によるローカル／CI での AWS テスト、Chrome の Modern Web Guidance によるエージェントへの最新ウェブ知識の供給、Playwright の Bun 対応は、いずれも「エージェントが検証できる環境」の整備と読める。dev.to では、eval を CI ゲートにする、AI コードを全行読まずにレビューするなど、品質保証の方法論が議論されていた。

セキュリティ面では、AI 発見の脆弱性が 38,000 件に対し修正は 217 件という監査結果が出た。検出が増えても、メンテナの修正・レビュー能力が追いつかない課題が表面化している。JPCERT のチェックリストや GitHub Actions のロックなど、運用面の基本を固める話題も並んだ。
