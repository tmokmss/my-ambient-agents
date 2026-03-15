---
title: "Tech Feed ダイジェスト（2026年3月15日）"
date: "2026-03-15T02:31"
category: "summary"
summary: "Claude Code/Skillsが国内テック界隈を席巻、AWSはSLO・SAM Kiro・Lambda Rust対応を発表。Vite+の爆速ESLintも話題。"
tags: ["ai", "claude-code", "aws", "llm", "security", "rust", "frontend", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[【入門記事】ClaudeCodeの中級者になりたい人は集合してください](https://qiita.com/K5K/items/72cc4282819ace823524)** (485users) - Claude Codeを実務で使い込むための中級テクニックをまとめた入門記事。フック設定やサブエージェント活用など、単なる「使い始め」を卒業するためのノウハウが凝縮されており、週末に一気読みされた模様。

- **[Claude Codeのエージェントチームを使うだけで大抵のことが出来るようになった](https://zenn.dev/n314/articles/e06f189f093902)** (300users) - Agent Teams機能の実戦投入レポート。複数サブエージェントがドキュメント・コード・DBを並列検索することで、単一エージェントでは難しかった複雑な実装タスクもこなせるようになったと報告している。

- **[MacBookで動くし、ぶっ壊れ性能。いま最強のローカルLLM「Qwen3.5」を解説しちゃう](https://www.gizmodo.jp/2026/03/qwen_3_5_9b_4b.html)** (250users) - アリババが2026年2〜3月にリリースしたQwen3.5シリーズ（9B/4B）をMacBookで実際に動かしたレビュー。クラウドAPI不要でこれだけの性能が出ることへの驚きが広がった。

- **[Coding Agent時代の開発ワークフローについてのまとめ](https://nyosegawa.github.io/posts/coding-agent-workflow-2026/)** (219users) - Coding Agentを前提とした開発ワークフローの変化を整理。Linter・Hookの設定方針から始まり、PRレビュープロセスをどう再設計するかまで実践的にまとめられている。

- **[たった200行の純粋なPythonコードだけで構成されGPTの学習と推論を実行できる「MicroGPT」をインタラクティブに解説](https://gigazine.net/news/20260314-microgpt-explained-interactively/)** (177users) - Andrej KarpathyのMicroGPTをビジュアルに解説した記事。依存ライブラリ0・200行のみという潔さがLLMの仕組みを理解したい人に刺さり急速に拡散。

## Zenn

- **[Coding Agent に loop して欲しいのは prdじゃない skill だ](https://zenn.dev/takumiyoshikawa/articles/6930a0e58bc196)** - Ralph Loop（後にHarness Engineering）のコンセプトを試した際に「PRDが粗悪すぎて機能しない」と感じた著者が、代わりにスキル定義を中心に長期実行する独自OSSを開発・公開した。エージェントにループさせるべき粒度の議論が活発。

- **[新登場したVite+が速すぎる！— ESLint 100倍、しかも Next.js でも動く](https://zenn.dev/ashunar0/articles/26d33059997e38)** - Viteの後継プロジェクト「Vite+」のESLint統合が従来比100倍の速度を達成したと報告。Next.jsとの互換性も確認されており、フロントエンド開発ツールチェーンの次世代候補として注目を集めている。

- **[Playwright + OWASP ZAP + Claude Code で E2E テストから脆弱性診断まで一気通貫でできるかやってみた](https://zenn.dev/rescuenow/articles/7192f8ca6ebe48)** - PlaywrightのE2Eテストスクリプト生成にClaude Codeを活用しつつ、OWASP ZAPをプロキシとして挟む構成で自動脆弱性診断を試みた実験記事。DevSecOpsの自動化事例として実践的な知見が多い。

- **[バグチケットに気づく頃にはもう直っている仕組みを作った](https://zenn.dev/notahotel/articles/399fc929f48d01)** - GitHubのIssue起票をトリガーにClaude Code Actionを自動発火させてバグ修正まで完結させるワークフローの構築例。「担当者がチケットを確認する前にPRが届いている」状態を実現。

- **[MySQLが好きな私が、今はPostgreSQLを勧めたい理由](https://zenn.dev/catatsuy/articles/f3721135c6f8f6)** - MySQL派の著者がPostgreSQLへの移行を推奨する理由を整理。クラウドサービスの充実度やJSON/フルテキスト検索機能の差、ライセンス動向の安心感などが論点。

## Qiita

- **[Claude Code Skills 完全活用ガイド 2026 — 個人最適化からチーム展開まで](https://qiita.com/nogataka/items/ad9995fb1b3db7055740)** - Skillsの設計思想から個人用カスタマイズ、チーム標準化・展開まで網羅した実践ガイド。Anthropic公式PDF（33ページ）の内容とも照合しており、2026年3月時点の決定版と呼べる内容。

- **[米国で話題のRAGのセキュリティ脅威についてまとめてみた](https://qiita.com/miruky/items/3c98999786c7dbd2b26a)** - RAG（Retrieval-Augmented Generation）に対するプロンプトインジェクション・データポイズニング・権限昇格などの攻撃手法を体系的に整理。AIコーディングとセキュリティの交差点として注目。

- **[AIコーディングの「理解負債」— 技術負債の次に来る落とし穴](https://qiita.com/nogataka/items/d85df55f384b06161af3)** - AIが生成したコードは動くが書いた人間が理解していない状態を「理解負債」と定義し、その蓄積がチームに与えるリスクを論じた記事。技術負債とは異なるレビュー文化の必要性を提唱。

- **[簡単コピペでClaude Codeに144種類のエージェントチームを作成](https://qiita.com/nogataka/items/5b5747f619e6eb745436)** - 40K stars超のOSS「agency-agents」を活用し、144個のAIエージェント定義をClaude Codeに取り込む手順を紹介。コピペ数行で専門エージェントチームを組めるという手軽さが話題。

## AWS 新着

- **[Amazon CloudWatch Application Signals adds new SLO capabilities](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-application-signals-adds-slo-capabilities/)** (Mar 13) - SLO推奨値の自動提案・サービス単位SLO・パフォーマンスレポート生成の3機能を追加。手動でしきい値を設定していた従来の運用を大幅に簡素化できる。

- **[Accelerate serverless application development with new SAM Kiro power](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-sam-kiro-power/)** (Mar 13) - SAMとKiroの統合により、サーバーレスアプリのスキャフォールディングからデプロイまでをAI支援で高速化。KiroはAWSが推進するコードエージェント連携の中核に位置づけられる。

- **[AWS Lambda Managed Instances now supports Rust](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-lambda-managed-instances-rust/)** (Mar 13) - Lambda Managed InstancesでRustのネイティブサポートが開始。コールドスタートの短縮とメモリ効率の改善が期待でき、パフォーマンス重視のサーバーレスワークロードに選択肢が広がった。

- **[AWS CDK Mixins is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-cdk-mixins-ga/)** (Mar 12) - CDK MixinsがGA。複数のConstructに共通の振る舞いを横断的に注入できるようになり、IaCコードの再利用性と保守性が向上する。

- **[Amazon Bedrock AgentCore Memory announces streaming notifications for long-term memory](https://aws.amazon.com/about-aws/whats-new/2026/03/bedrock-agentcore-memory-streaming/)** (Mar 12) - Bedrock AgentCore Memoryの長期記憶更新をストリーミングで通知する機能を追加。エージェントが記憶を更新した際にリアルタイムで関連システムへの通知が可能になった。

## Lobsters

- **[Lies I was Told About Collaborative Editing, Part 2: Why we don't use Yjs](https://www.moment.dev/blog/lies-i-was-told-pt-2)** - 協調編集ライブラリとして広く使われるYjsを採用しなかった理由をMomentが詳解。CRDT実装の複雑さとカスタムユースケースへの対応コストが主な論点で、独自実装を選択するまでの経緯を赤裸々に語っている。

- **[Torturing rustc by Emulating HKTs, Causing an Inductive Cycle and Borking the Compiler](https://www.harudagondi.space/blog/torturing-rustc-by-emulating-hkts/)** - RustでHigh-Kinded Types（HKT）をエミュレートしようとした際にコンパイラの帰納的サイクルバグを踏んだ顛末を記したディープダイブ記事。型システムの限界を探る実験として注目されている。

- **[Sunsetting Jazzband](https://jazzband.co/news/2026/03/14/sunsetting-jazzband)** - Pythonエコシステムの共同メンテナンス組織Jazzbandが終了を発表。OSS持続性・バーンアウト問題の象徴的な事例として議論を呼んでいる。

- **[Emacs and Vim in the Age of AI](https://batsov.com/articles/2026/03/09/emacs-and-vim-in-the-age-of-ai/)** - AI補完やコードエージェントが普及した時代においても、EmacsやVimがなぜ競争力を持ち続けるかを論じた記事。拡張性・テキスト操作の哲学的優位性が改めて評価されている。

- **[Developing a 2FA Desktop Client in Go](https://www.youtube.com/watch?v=HFu3CUtrOQ8)** - GoでTOTP対応の2FAデスクトップクライアントを作る過程をスクリーンキャストで解説。GUIツールキットの選定からQRコードパースまで実装例が具体的でGo入門者にも参考になる。

## dev.to

- **[LocalAI QuickStart: Run OpenAI-Compatible LLMs Locally](https://dev.to/rosgluk/localai-quickstart-run-openai-compatible-llms-locally-15d1)** - OpenAI互換APIを持つLocalAIをセットアップし、ローカルLLMを既存アプリにドロップイン置換する手順を解説。プライバシー重視・コスト削減を目的としたローカル推論の入門として人気。

- **[I Calculated What My $200/Month AI Subscription Actually Produced. Here's the Math.](https://dev.to/yurukusa/i-calculated-what-my-200month-ai-subscription-actually-produced-heres-the-math-1ohm)** - 月200ドルのAIサブスクリプション費用を実際のアウトプット（コード行数・節約時間・成果物）で割り算した実証記事。ROIを数値化することで「高い」か「安い」かを判断するフレームワークを提示している。

- **[Vertex AI in Modern Cloud Systems: From Managed Machine Learning to Generative AI](https://dev.to/maninderpreet_singh/vertex-ai-in-modern-cloud-systems-from-managed-machine-learning-to-generative-ai-244k)** - Google Cloud Vertex AIの全体像を、従来の管理型MLパイプラインから生成AI統合まで俯瞰した解説。GeminiモデルへのアクセスやVector Search・RAG構築との連携がどう変わったかを整理。

- **[The Value of Value Objects](https://dev.to/mckeondev/the-value-of-value-objects-28p8)** - ドメイン駆動設計（DDD）の値オブジェクトパターンをC#で実践的に解説。バリデーションをエンティティから切り離してコンストラクタに集約することで、不正な状態のオブジェクトが生まれない設計を実現する方法を示す。

- **[First Principles of AI Context](https://dev.to/craigtracey/first-principles-of-ai-context-4cmn)** - AIエージェントにとって「コンテキスト」とは何かをファーストプリンシプルから考察した記事。トークンウィンドウの制約・RAGとメモリの使い分け・コンテキスト汚染のリスクを整理した設計指針として参考になる。

## 注目トピック

**Claude Code / AIエージェント一色の国内テック界隈**

今週の国内テック情報を見渡すと、Claude Code・Skills・エージェントチームに関する記事が圧倒的多数を占める。はてなブックマーク上位3件のうち2件がClaude Code関連であり、QiitaやZennのトレンドも同様の傾向だ。特に注目すべき変化として、「AIが書いたコードを理解せずにマージしていく」という開発スタイルへの警鐘（「理解負債」）と、それに対処するためのSkills・エージェントチーム設計の精緻化という二つの方向性が同時進行している点がある。Anthropicが公式スキル設計ガイドを33ページで公開したことも後押しし、個人の設定最適化からチーム展開・セキュリティ設定まで議論の深度が増している。

**ローカルLLM・Rust・OSS持続性の国際トレンド**

国際的には、Qwen3.5のMacBook動作という「ローカルLLMがついに実用水準に達した」事例が日本でも大きく拡散した。AWSはLambda Managed InstancesへのRustサポートを追加し、クラウド側でもRustの採用が着実に進んでいる。一方でPythonエコシステムの共同メンテナンス組織Jazzbandの終了は、OSSの持続可能性に改めて注目を集めた。Yjs不採用やVite+の登場など、既存の「当たり前」ツールを問い直す動きも活発で、2026年春は技術スタックの再評価が加速している局面と言えそうだ。
