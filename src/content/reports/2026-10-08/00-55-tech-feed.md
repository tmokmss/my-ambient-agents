---
title: "Tech Feed ダイジェスト（2026年10月8日）"
date: "2026-10-08T00:55"
category: "summary"
summary: "IDCFクラウドのランサム被害、MCPやAIエージェント権限の議論、RSAの新攻撃手法、Claude Haiku 5.5のAWS提供などを横断整理"
tags: ["security", "ai", "aws", "llm", "devops", "claude-code"]
---

## はてなブックマーク (テクノロジー)
- **[相次ぐWEBシステムからの情報漏洩事案について](https://security.macnica.co.jp/blog/2026/10/web-incidents2026.html)** ([728users](https://b.hatena.ne.jp/entry/s/security.macnica.co.jp/blog/2026/10/web-incidents2026.html)) - 相次ぐ Web システム経由の情報漏洩事案を、セキュリティ研究センターが整理した解説。個別事案の報道ではなく、Web アプリ側の共通する弱点と対策を俯瞰したい開発者向けの記事。
- **[IDCFクラウドへのランサムウェア攻撃についてまとめてみた - piyolog](https://piyolog.hatenadiary.jp/entry/2026/10/08/070606)** ([85users](https://b.hatena.ne.jp/entry/s/piyolog.hatenadiary.jp/entry/2026/10/08/070606)) - IDCFクラウドで発生したランサムウェア被害の経緯を時系列で整理したまとめ。IaaS 基盤事業者の被害が多数の利用者に波及する形で、バックアップの分離や復旧手段の設計を見直す契機になる。
- **[手動テストを渡すだけでE2Eが完成する仕組みを作りました - kickflow Tech Blog](https://tech.kickflow.co.jp/entry/2026/10/06/105939)** ([68users](https://b.hatena.ne.jp/entry/s/tech.kickflow.co.jp/entry/2026/10/06/105939)) - 手動テスト手順を入力として E2E テストを自動生成する仕組みの紹介。テスト資産化のコストを下げる実践例として参考になる。
- **[AIによって開発されたオープンソースのAIアクセラレータ「openTPU」が登場](https://gigazine.net/news/20261007-opentpu/)** ([18users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261007-opentpu/)) - AI 自身が設計に関わったとされるオープンソースの AI アクセラレータ。ハードウェア設計へ AI 活用が及ぶ動きとして注目できる。
- **[Claude Code / Codex のトークン節約：同じ枠でもっと使える](https://zenn.dev/gakken_leap/articles/c67ca43199e63d)** ([20users](https://b.hatena.ne.jp/entry/s/zenn.dev/gakken_leap/articles/c67ca43199e63d)) - コーディングエージェントの利用枠を効率よく使うためのトークン節約テクニックをまとめた記事。

## Zenn
- **[ホームラボの GPU ノードの監視環境を構築する](https://zenn.dev/hyeonjae/articles/46d734a43c2c93)** - Node が Ready でも GPU が故障していることがある、という前提で GPU の状態を監視する取り組み。GPU のハードウェアエラー(Xid)がカーネルログにしか残らない点を踏まえた構築手順。
- **[Claude Codeの軽い作業をCodexへ回す：規則を書くだけでは0件でした](https://zenn.dev/yamato_snow/articles/claude-code-codex-sol-delegation)** - CLAUDE.md に委譲ルールを書いても、サブエージェント46件中 Codex への委譲は0件だったという検証。ラッパー・サブエージェント定義・知らせる hook の3つで委譲が回り始めた過程を紹介している。
- **[Claude Codeの「Claude Mods」とは？ 入れてみた3つのmodと、安全に入れる手順](https://zenn.dev/yoshihiko555/articles/ea2db6070058b3)** - Claude Code の公式拡張機構 Mods（TypeScript/JavaScript 関数でペイン追加やプロンプト書き換えが可能）の解説。plugin 経由で配布されるため、導入前に中身を確認する手順にも触れている。
- **[俺のAIプログラミング手法(2026/10/05)](https://zenn.dev/mizchi/articles/ai-coding-loop-formal)** - 人間の役割定義、評価指標の設計、AI の行動ログを観察してループを回すという棚卸し。評価指標が増えると CI が長くなるため優先度を明確にする、という指摘がある。

## Qiita
- **[Claude Code の Explore は、いつの間にか Haiku から本体と同じモデルに変わっていた。戻すと費用は21〜35%減](https://qiita.com/suwa_nobu/items/be41c19295ef0e58e7f2)** - 調査用 Explore サブエージェントのモデルが Haiku から本体と同じモデルになっていた点を指摘する記事。冒頭抜粋によれば、戻すと費用が21〜35%減るとのこと。
- **[Claude Codeのモデルを使い分けると成果物とトークンはどれくらい変わる？](https://qiita.com/inoyu-qiita/items/c86cfa9a4df7af042f9b)** - Opus＋Sonnet の使い分けと全部 Opus で同じ要件のアプリを作って比較する検証。設計と実装でモデルを分ける是非をデータで確かめる試み（冒頭抜粋の範囲）。
- **[DifyのRAGで検索スコアを回答許可に使わない：根拠を検査する品質ゲート](https://qiita.com/YushiYamamoto/items/b02276053e240b8f3d2e)** - 類似文書が検索できても旧版の手順など不適切な根拠で誤回答する問題に対し、検索スコアではなく根拠の妥当性を判定するゲートを置く設計。
- **[CORSエラーに遭遇したので、そもそもCORSとは何なのか理解する](https://qiita.com/megumi_i/items/9c9cbb97df7e4a631660)** - オリジン許可を追加しても別のエラーが出た経験から CORS の仕組みを整理する記事。トラブルシュートの入口として使える。

## AWS 新着
- **[Claude Haiku 5.5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-haiku-5-5-aws/)** (2026-10-07) - Claude 5.5 ファミリーで最速・高効率のモデルが AWS で利用可能に。サブエージェントや大量・低コスト処理向けとされる。GovCloud (US) にも同時提供。
- **[AWS Well-Architected Agent is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-well-architected-agent/)** (2026-10-01) - Trusted Advisor と Well-Architected Tool の次世代版となる AI エージェントがプレビュー開始。ワークロードの分析と最適化を担う。
- **[Amazon DynamoDB introduces filtered export to Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)** (2026-10-01) - S3 へのエクスポート時にフィルタ指定が可能に。分析用途で必要なデータだけを書き出せる。
- **[Serverless Storage on Amazon EMR Serverless now supports terabyte-scale shuffle](https://aws.amazon.com/about-aws/whats-new/2026/10/emr-serverless-terabyte-scale-shuffle/)** (2026-10-01) - ジョブあたりのシャッフル上限が 200GB から 1TB に拡大し、大規模ジョブの設計制約が緩む。
- **[AWS Control Tower AFT now supports plan-only customization runs](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-control-tower-aft/)** (2026-10-05) - Account Factory for Terraform で適用前に Terraform の変更内容をプレビューできるようになった。

## Lobsters
- **[C for Rust Programmers](https://bd103.dev/blog/2026-10-07-c-for-rust-programmers/)** (31pt) - Rust に慣れた開発者が C を読み書きするための対応表的なガイド（タグ: c, rust）。
- **[Calling a function in C without naming it](https://wiro.world/posts/calling-c-func-without-naming-it/)** (16pt) - 関数名を使わずに C の関数を呼び出す手法を扱う記事。タグは c, security。
- **[Zeroization, part 1: Wiping can make things worse](https://00f.net/2026/10/06/zeroization-1/)** (12pt) - 機密データのゼロ埋めが、コンパイラ最適化などの要因でかえって問題になり得ることを扱うシリーズ第1回（タグ: compilers, security）。
- **[rat's minimal register allocator](https://hexrat.cc/pages/blog/2026_10_07)** (13pt) - コンパイラの最小構成のレジスタ割り当て実装を解説する記事（タグ: compilers, performance）。
- **[On Git Refs](https://matklad.github.io/2026/10/07/git-ref.html)** (9pt) - matklad による Git の ref（参照）についての考察。

## dev.to
- **[The internet's root key rotates in five days. Your resolver may not be ready.](https://dev.to/slabb/the-internets-root-key-rotates-in-five-days-your-resolver-may-not-be-ready-3j8e)** - 10月11日に DNS ルートの KSK-2024 へ鍵が切り替わる。RFC 5011 の窓を逃したリゾルバは DNSSEC 検証に失敗するため、事前確認すべき項目を紹介。
- **[Where the four minutes go when a cluster adds a node](https://dev.to/remdore/where-the-four-minutes-go-when-a-cluster-adds-a-node-2pn9)** - Kubernetes のノード追加に約4分かかる内訳を分解する記事。オートスケールの遅延を設計に織り込む材料になる。
- **[I Linted 14 Public AI SDK Repos. 12 Ship a Call With No Token Ceiling.](https://dev.to/ofri-peretz/i-linted-14-public-ai-sdk-repos-12-ship-a-call-with-no-token-ceiling-2349)** - 14 の公開リポジトリ・116 の生成呼び出しを調べ、出力上限未設定の呼び出しが多いことを示した調査。コスト暴走対策として max tokens 設定を見直したい。
- **[Gemma 4 Inference on AWS: Bedrock, SageMaker, GPUs, Inferentia and Trainium Behind One Strands Agent](https://dev.to/gde/gemma-4-inference-on-aws-bedrock-sagemaker-gpus-inferentia-and-trainium-behind-one-strands-agent-2lnm)** - マネージド API から Neuron チップまで6通りのモデル提供方法を、1つの Strands エージェントから比較。
- **[Brunch Gem: Isolated Development Environments for Git Branches and Worktrees](https://dev.to/ciembor/brunch-gem-isolated-development-environments-for-git-branches-and-worktrees-4n38)** - ブランチを切り替えてもコードしか変わらない開発環境（DB 等）を、ブランチや worktree ごとに分離する Ruby gem。

## TechCrunch
- **[Microsoft releases new Nvidia-chip AI PCs with revamped Windows 11](https://techcrunch.com/2026/10/07/microsoft-releases-new-nvidia-chip-ai-pcs-with-revamped-windows-11/)** - Nvidia チップ搭載の Surface Laptop Ultra の仕様と価格を公開。AI モデルやエージェントをローカルで動かす設計の PC。Ars Technica も同イベントを別角度で報じている。
- **[Hackers steal 8 million citizens' records from Danish government database](https://techcrunch.com/2026/10/05/hackers-steal-8-million-citizens-records-from-danish-government-database/)** - デンマーク政府のデータベースから、氏名・住所・国民 ID を含む約800万人分の記録が盗まれた。
- **[Nous Research confirms it hit $1.5B valuation, launches AI agents for business users](https://techcrunch.com/2026/10/07/nous-research-confirms-it-hit-1-5b-valuation-launches-ai-agents-for-business-users/)** - Hermes Agent の開発元が9,000万ドルのシリーズ B を調達し、ビジネス向けエージェントを投入。
- **[ChatGPT is getting a lot more visual, with the launch of a new interface](https://techcrunch.com/2026/10/07/chatgpt-is-getting-a-lot-more-visual-with-the-launch-of-a-new-interface/)** - OpenAI がインタラクティブなビジュアルを扱える新 UI を投入。
- **[Google experiments with an AI-powered gaming platform](https://techcrunch.com/2026/10/07/google-experiments-with-an-ai-powered-gaming-platform/)** - Google Labs が、テキストプロンプトからブラウザゲームを作る「Playground」を試験中。

## Ars Technica
- **[There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)** - 従来は素因数分解が唯一の攻略経路と考えられていた RSA に、それ以外の新しい破り方が示されたという報道。暗号移行計画に関わる話題。
- **[Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)** - 強い権限を持つ Meta の AI アシスタント Muse が、単純な ClickFix 攻撃で完全に乗っ取られ得るという脆弱性。権限の大きいエージェントの攻撃面を示す事例。
- **[Memory executives expect RAM shortage to continue through 2028](https://arstechnica.com/information-technology/2026/10/memory-supplies-are-only-getting-tighter-micron-ceo-says/)** - Micron CEO らが RAM 不足は2028年まで続くとみており、2027年向け価格は2026年より大幅に高い。インフラ調達計画に影響する。
- **["Software is over": Bold AI developer takes aim at Adobe with open source clones](https://arstechnica.com/ai/2026/10/software-is-over-bold-ai-developer-takes-aim-at-adobe-with-open-source-clones/)** - Opus で作った Creative Cloud 代替の OSS クローン群の紹介。野心的だが未完成とされる。Lobsters に載った Photoshop の Rust クリーンルーム再実装も同系統の話題。
- **[TP-Link problems in US grow amid FCC router ban and four state lawsuits](https://arstechnica.com/tech-policy/2026/10/florida-sues-tp-link-claiming-it-hides-router-security-risks-and-links-to-china/)** - FCC のルーター販売禁止に加え、フロリダ州などが TP-Link を提訴。ネットワーク機器の調達規制の動きとして見ておきたい。

## 注目トピック
国内ではIDCFクラウドへのランサムウェア被害や、Web システムからの情報漏洩が連日話題になっている。基盤事業者の被害が多数の利用者へ波及する構図で、バックアップの分離や復旧手順の見直しが論点になる。海外でも、デンマーク政府DBの流出、Meta Muse の脆弱性、RSA への新しい攻撃手法など、セキュリティ関連の報道が目立った。

もう一つの軸は AI エージェントの運用設計。Claude Code の Mods やサブエージェントのモデル選択、Codex への委譲、Claude Haiku 5.5 の AWS 提供、Well-Architected Agent のプレビューなど、モデルの使い分けとコスト・権限の管理が実務の関心事になっている。dev.to の「出力上限なしの生成呼び出し」調査も、同じコスト管理の文脈にある。
