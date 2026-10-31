---
title: "Tech Feed ダイジェスト（2026年11月1日）"
date: "2026-10-31T15:15"
category: "summary"
summary: "脆弱性の優先順位付け、npm 署名検証、Continuum GA、TypeScript 7.1 のネイティブコンパイラ計測など。Lobsters は取得結果が古く除外"
tags: ["security", "aws", "typescript", "ai", "supply-chain", "infrastructure"]
---

## はてなブックマーク (テクノロジー)

- **[もう「CVSSで重大→修正急務」は限界　「即対応」脆弱性を9割減らすGitHub推奨の優先順位付け基準](https://atmarkit.itmedia.co.jp/ait/articles/2610/30/news060.html)** ([147users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2610/30/news060.html)) - CVSS スコアだけで修正順を決める運用を見直し、「即対応」が必要な脆弱性を9割減らせるという GitHub 推奨の優先順位付け基準を紹介する記事。パッチ適用が追いつかない状況での現実的なトリアージ手法として参考になる。
- **[npm ci 時に常に npm audit signatures をする](https://blog.inorinrinrin.com/entry/dd84836d-72cc-2616-9c64-45a9ac6c425b)** ([15users](https://b.hatena.ne.jp/entry/s/blog.inorinrinrin.com/entry/dd84836d-72cc-2616-9c64-45a9ac6c425b)) - インストール時に毎回パッケージの署名・来歴を検証する運用の提案。サプライチェーン攻撃への対策を CI の `npm ci` に組み込む実践的なアプローチ。
- **[「ここ 3 年くらいの CloudWatch アップデート について丸っと解説します」というタイトルで登壇しました #devio2026](https://dev.classmethod.jp/articles/cloudwatc-upadte-summary-devio-2026/)** ([80users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/cloudwatc-upadte-summary-devio-2026/)) - 直近3年の CloudWatch の機能追加を一望できる登壇資料のまとめ。追い切れていない監視機能を棚卸しするのに向く。
- **[OpenAI CEOが個人PCにメモリを積むのは「かなりひどい」と発言。DRAMはクラウドに集約すべきと主張](https://gazlog.jp/entry/open-ai-ceo-memory-should-go-to-dc/)** ([166users](https://b.hatena.ne.jp/entry/s/gazlog.jp/entry/open-ai-ceo-memory-should-go-to-dc/)) - アルトマン CEO が、個人 PC の大容量 RAM は使われておらず、DRAM はデータセンターに集約すべきだと主張。AI 需要によるメモリ高騰とローカル AI の是非をめぐる議論の火種になっている。同じ発言をテクノエッジやすまほん!! も報じている。

## Zenn

- **[FlutterKaigi 2026 で生字幕を映像に載せて会場スクリーンに投影しました](https://zenn.dev/hiro_pon/articles/2f3b68ec60ddae)** - 登壇者の話をその場で文字起こし・翻訳し、スライドとカメラを合成した映像へ字幕として焼き込む構成の解説。各部屋に置いた「合成 Mac」を中心に、処理の流れを説明している。
- **[【最速解説】goda.vimでHello, worldする](https://zenn.dev/comamoca/articles/2026-10-30-trying-hello-world-with-goda-vim)** - Go で Vim プラグインを書けるようにする新作 goda.vim の入門。Deno で書く denops.vim の精神的後継という位置づけで、最小構成での動かし方を紹介している。
- **[【Apple Vision Pro】Immersive Spaceを閉じた後のonDisappear、シミュレーターと実機で桁違いだった件](https://zenn.dev/mrs1669/articles/20261031_visionos-dismiss-immersive-space)** - 重い Immersive Space では、シミュレーターだけ `onDisappear` が `dismissImmersiveSpace()` の await より 370〜780ms 遅れ、実機では 3〜6ms だったという実測報告。タイミング依存の挙動は実機で測るべきという教訓。
- **[NoSQLのスキーマ変更は読むときに受け止めよう](https://zenn.dev/michiharu/articles/9562dfd249c8e3)** - DynamoDB・Firestore・MongoDB などスキーマレスな DB で、データにスキーマバージョンを持たせて読み出し時に最新形式へ変換する手法。TypeScript と Zod の discriminatedUnion を使った例で示している。
- **[AIエージェントに設計書レビューを任せたらレビュワーは楽になった。でも現場は？？](https://zenn.dev/nttdata_tech/articles/6a06f484ebfab7)** - AI レビューでレビュワーの作業は1時間程度から数分〜数十分に減ったが、「判断」のコストが設計書を書いたエンジニア側に移っただけだったという考察。役割分担の再設計を論じている。

## Qiita

※ 以下はいずれもフィードの冒頭抜粋から読み取れる範囲での紹介。

- **[SSM Session Managerを使ってDBに接続する](https://qiita.com/j-yasukawa/items/701554f14fe8b02ff34e)** - プライベートサブネットの RDS/Aurora へ、踏み台 EC2 の22番ポート開放と SSH トンネルではなく Session Manager 経由で接続する運用の紹介。
- **[ADRを書いて、AIに "Why" を理解させよう【Architecture Decision Record】](https://qiita.com/tetsuro731/items/65590daa94499e705850)** - コードから「何を」は読み取れても「なぜその実装か」は伝わらないため、ADR で意思決定の背景を残して AI エージェントに渡す提案。
- **[誤ってマルウェアを実行してしまった私が、AIとREA（Reverse Engineer Anything）に救われた話](https://qiita.com/TOMOSIA-LinhND/items/3dec10762fcc224d9133)** - 有効化ツールを装ったマルウェアを実行してしまった体験と、AI を使った解析の記録。C2 サーバー関連の警告が冒頭に付いている。
- **[誰も秘密鍵を知らないアカウントを、Symbol の上で DKG して作った](https://qiita.com/HinaBlogChannel/items/4f35b1258fcea6af4055)** - 鍵を配るディーラーをなくすため、Symbol チェーン上で分散鍵生成（DKG）を実装したという実装記。
- **[LambdaをVPCの中と外の2つに分けるデュアルLambda構成にして学んだこと](https://qiita.com/shusaku009/items/f63bb5af714800ddbbc0)** - API Gateway + Lambda + RDS PostgreSQL 構成で、VPC 内外に Lambda を分ける設計を採用した際の学び。

## AWS 新着

- **[AWS Continuum for code vulnerabilities is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-for-code-vulnerabilities-is-now-generally-available)** (2026-10-22) - コードの脆弱性を発見・検証・優先順位付け・修正まで大規模に行う Continuum が GA。脆弱性対応の自動化を AWS が公式に提供する動き。
- **[Amazon ECS now supports GPU sharing with NVIDIA Multi-Process Service (MPS)](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-gpu-sharing-nvidia-mps/)** (2026-10-27) - 1枚の NVIDIA GPU 上で複数の ECS タスクを同時実行できるようになった。GPU の利用効率とコストに影響する。
- **[AWS WAF announces automatic SDK integration for Amazon CloudFront distributions](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-waf-automatic-sdk-integration-amazon-cloudfront/)** (2026-10-30) - 有効化すると CloudFront が配信 HTML に AWS WAF の JavaScript SDK の script タグを自動で追加する。アプリ側の変更なしで導入できる。
- **[AWS announces TorchNeuron: Native PyTorch Support for AWS Trainium (Public Beta)](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-announce-native-pytorch-support-trainium)** (2026-10-20) - 標準の PyTorch API で書いたモデルを Trainium 上で動かせる OSS のネイティブバックエンドが public beta になった。
- **[AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/)** (2026-10-22) - AgentCore Gateway の推論エンドポイントが InvokeModel 系 API に対応し、推論トラフィックのモデルフォールバックルーティングも使えるようになった。

## Lobsters

取得失敗。`/hottest.json` が 2016 年当時の古い記事を返し、現在の記事として扱えなかったため、このソースは採用しなかった。

## dev.to

- **[TypeScript 7.1 beta's native compiler checks a 353,000-line project in 2.8 seconds instead of 12.4](https://dev.to/alexgeorgiev17/typescript-71-betas-native-compiler-checks-a-353000-line-project-in-28-seconds-instead-of-124-3h91)** - Go 製の TypeScript 7 を実際の NestJS リポジトリで 6.0.3 と比較した結果、速度向上は2.5〜4.5倍にとどまり、公称の8〜12倍には届かなかったという計測。
- **[We took over ChatGPT accounts: the MathLive postMessage chain, and the 20-line audit for your own listeners](https://dev.to/slabb/we-took-over-chatgpt-accounts-the-mathlive-postmessage-chain-and-the-20-line-audit-for-your-own-442c)** - 共有リンク、送信元を検証しない数式キーボードライブラリ、iframe、YouTube oembed 経由の CSP バイパスをつないでセッショントークンを奪う攻撃チェーンの解説。自分の message リスナーを点検する短い監査コードも紹介している。
- **[Next.js 16 `use cache` Directive: Granular Caching at the Function Level and What It Replaces](https://dev.to/jsmanifest/nextjs-16-use-cache-directive-granular-caching-at-the-function-level-and-what-it-replaces-5d2o)** - 暗黙のキャッシュから `use cache` ディレクティブによる明示的な関数単位のキャッシュへの移行を扱う。cacheLife プロファイルや `unstable_cache` からの移行、本番のキャッシュストレージ構成にも触れている。
- **[Why Nvidia Put Mamba and Attention Together for Agents](https://dev.to/reidmarlow/why-nvidia-put-mamba-and-attention-together-for-agents-5225)** - Nvidia が公開した Nemotron 3.5 Super / Lightning の技術レポートを元に、エージェント用途で Mamba と Attention を組み合わせた設計の狙いを解説している。
- **[Build a production-style Autonomous SRE Command Center using Gemini 4 Argon](https://dev.to/gde/build-a-production-style-autonomous-sre-command-center-using-gemini-4-argon-759)** - 本番 Kubernetes クラスタで 5xx が出たときの障害対応を、Gemini 4 Argon に担わせる SRE コマンドセンターの構築例。

## TechCrunch

※ 他ソースとの重複や過去レポート掲載済みの記事を除くと、新規の技術記事は2件のみだった。

- **[Applebee's exposed customers' personal data after leaving database password in app](https://techcrunch.com/2026/10/30/applebees-exposed-customers-personal-data-after-leaving-database-password-in-app/)** - セキュリティ研究者が、Applebee's のアプリにデータベースの認証情報がハードコードされているのを発見し、顧客の個人データへ無制限にアクセスできた。クライアントアプリへのシークレット埋め込みという基本的な問題の典型例。
- **[South Korea's financial industry hit by fresh wave of cyberattacks](https://techcrunch.com/2026/10/28/south-koreas-financial-industry-hit-by-fresh-wave-of-cyberattacks/)** - 韓国の金融機関が新たなサイバー攻撃の波を受けた。記事は AI を使ったハッキングのリスクがアジアで高まっていると指摘している。

## Ars Technica

※ 他ソースとの重複や過去レポート掲載済みの記事を除くと、新規の技術記事は1件のみだった。

- **[PC shipments fall 20.1 percent in "sharpest decline" since Q1 2023](https://arstechnica.com/information-technology/2026/10/pc-shipments-fall-20-1-percent-in-sharpest-decline-since-q1-2023/)** - PC 出荷台数が前年同期比で20.1%減り、2023年第1四半期以来の最大の落ち込みとなった。「下落サイクルの始まりにすぎないかもしれない」との見方も紹介されている。AI 需要によるメモリ価格の高騰をめぐる議論ともつながる動き。

## 注目トピック

今回は、AI 時代に崩れつつある従来の運用前提を見直す記事が目立った。はてブでは CVSS だけに頼らない脆弱性の優先順位付けと `npm audit signatures` の常時実行がともに上位に入り、AWS 側でも Continuum の GA や WAF SDK の自動組み込みなど、脆弱性対応とセキュリティ実装の自動化が進んでいる。dev.to の MathLive postMessage チェーンや TechCrunch の Applebee's の件も、信頼境界とシークレット管理という基本の見直しを促している。

もう一つの流れは AI インフラの経済性で、アルトマン CEO のメモリ集約発言と PC 出荷の大幅減が、AI 需要によるメモリ価格高騰という同じ文脈で並んだ。一方、TypeScript 7.1 のネイティブコンパイラは実測で公称より控えめな2.5〜4.5倍の高速化にとどまった。性能の話題は、公称値より自分の環境での計測で判断すべきだという教訓になる。
