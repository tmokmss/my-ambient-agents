---
title: "Tech Feed ダイジェスト（2026年10月25日）"
date: "2026-10-24T23:05"
category: "summary"
summary: "Brotli脆弱性HTTP2Shell、eMudhra失効証明書、Lambda Durable Go SDK GA、TorchNeuron、エージェントのAPIキー管理などを横断"
tags: ["security", "ai", "aws", "agents", "web", "tls"]
---

## はてなブックマーク (テクノロジー)
- **[JSがこんなに減る！ HTML・CSS最新技術2026](https://ics-ikeda.github.io/261024_vuefes_2026/)** ([113users](https://b.hatena.ne.jp/entry/s/ics-ikeda.github.io/261024_vuefes_2026/)) - VueFes 2026 の発表資料。HTML/CSS の新しいネイティブ機能で、従来 JavaScript で書いていた UI 挙動をどこまで置き換えられるかを整理した内容とみられる。
- **[「HTTP2Shell」CVE-2026-111497、Node.js・Python・Bun・Envoyに影響 Brotliの重大脆弱性と修正版を確認](https://rocket-boys.co.jp/security-measures-lab/brotli_cve-2026-111497_http2shell_20261024/)** ([19users](https://b.hatena.ne.jp/entry/s/rocket-boys.co.jp/security-measures-lab/brotli_cve-2026-111497_http2shell_20261024/)) - Brotli ライブラリの重大脆弱性が複数のランタイムやプロキシに波及。依存先ごとの修正版を確認して更新したい。Lobsters では Aikido が Python パッケージ側への影響を別角度で報じている。
- **[Building agents: When to fold subagents into your main agent loop](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop)** ([61users](https://b.hatena.ne.jp/entry/s/claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop)) - サブエージェントに分離すべきか、メインのエージェントループに畳み込むべきかの設計判断を扱うガイド。コンテキスト分離とオーケストレーションコストのトレードオフが論点。
- **[GitHub CLI が短命 token をサポートしても ghtkn が必要な理由](https://zenn.dev/shunsuke_suzuki/articles/ghtkn-advantage-over-gh-cli-expiring-token)** ([22users](https://b.hatena.ne.jp/entry/s/zenn.dev/shunsuke_suzuki/articles/ghtkn-advantage-over-gh-cli-expiring-token)) - 短命トークンによる GitHub 認証を gh CLI 標準機能と ghtkn で比較。長期 PAT を持たない運用の実務上の差が焦点。
- **[C言語を置き換える言語はどうあるべきか](https://blog.miz-ar.info/2026/10/replacing-c-language/)** ([27users](https://b.hatena.ne.jp/entry/s/blog.miz-ar.info/2026/10/replacing-c-language/)) - C の後継言語に求められる要件を考察するブログ。Lobsters の UB 議論とも通じる話題。

## Zenn
- **[MultiheadAttentionの高速経路がVRAMを18GB食っていた話](https://zenn.dev/genelab_999/articles/387bf151caf716)** - `nn.MultiheadAttention` は eval かつ勾配なしでマスクを渡すと、`need_weights=False` でも SDPA を使わず「ヘッド数×P×P」の注意行列を丸ごと作る。flash-attn が無い環境の代替経路で、3MP 画像でも追加 VRAM 18GB に達したという実測報告。
- **[リンクで確認した SNS のメール購読に、作り直さずに「解除の保護」を付ける](https://zenn.dev/sk8jp/articles/260e3c0fa07ed9)** - Amazon SNS の `AuthenticateOnUnsubscribe` は購読確認時にしか指定できず、メールのリンクで確認すると付かない。購読を作り直さずに解除を認証付きにする方法を扱う。
- **[Laravel を IdP にして Ory Hydra で SSO を組み、PHP 5.6 のレガシーアプリも認証ブローカーで乗せる](https://zenn.dev/sprix_it/articles/464d97d1ebdbfd)** - OIDC クライアントが動かない PHP 5 系アプリを、認証ブローカー経由で SSO に載せる構成をローカル検証し、コードも公開している。
- **[Gowin FPGAの配置配線オプションを実測比較 — ビルド時間とFmaxのバランス](https://zenn.dev/akiyukiokayasu/articles/66be017200e64e)** - Gowin EDA の place_option / route_option を変えて、ビルド時間と Fmax がどう動くかを同一 RTL で測定。公式ドキュメントでは分かりにくい選択指針を実測で示す。
- **[脆弱性管理の仕組みを整えた](https://zenn.dev/dress_code/articles/be5550254695cd)** - SOC2 Type2 の継続審査を踏まえ、プロダクトセキュリティの脆弱性管理運用を整備した事例。

## Qiita
- **[【S3 Files】ファイルシステムと S3 バケットの同期にかかる時間を測ってみた](https://qiita.com/ryu-ki/items/ac1152359bcf1217c1f5)** - S3 汎用バケットをファイルシステムとしてマウントできる Amazon S3 Files で、書き込みから S3 側への同期遅延を実測した検証記事（冒頭抜粋の範囲）。
- **[AIエージェント専用の技術ブログ基盤をHonoとCloudflare無料枠で作った](https://qiita.com/y-moriya/items/5181ec40e2180348565c)** - コーディングエージェントが解決したニッチなバグ知見がセッション終了で消える問題に対し、知見を蓄積する基盤を Hono と Cloudflare 無料枠で構築した話。
- **[MetaのMuseが日本で開始したのでMuse Gadgetsで遊ぼう](https://qiita.com/moritalous/items/840ed6c78ba0508142ef)** - Muse とハードウェアを連携させる Muse Gadgets SDK（現状 ESP32 と Linux 対応）を ESP32 で試す。
- **[Ciscoルータで検証するIEEE802.1X認証：基本編](https://qiita.com/MasanobuHiyoshi/items/b84b2805e3d7d4cbb7e3)** - 802.1X の構成要素と動作フローを整理し、Cisco ルータでの設定と動作キャプチャまで検証する。
- **[エラーは出ないのに数字が間違っている——データ分析で間違えやすい8つのポイントと見つけ方](https://qiita.com/ktdatascience/items/590daa27d9752a9f38fd)** - SQL は正常終了するのに結果が誤る「静かな間違い」の典型を、SQL 例つきで 8 つ整理する。

## AWS 新着
- **[Amazon DynamoDB Streams now supports timestamp-based stream processing](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-streams-timestamp-processing)** (2026-10-15) - 従来は保持期間内の最古位置からしか読めなかった Streams を、特定の時刻から読み始められるようになった。障害復旧時の再処理範囲を絞りやすい。
- **[AWS Lambda Durable Execution SDK for Go is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-go-sdk-support/)** (2026-10-15) - Lambda durable functions の Go SDK が GA。Go で長時間・多段のワークフローを耐障害に書ける。
- **[Amazon CloudWatch announces log routing and chained log parsers](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing/)** (2026-10-14) - パイプラインで条件付きルーティングとパーサの連鎖が可能になり、ログ変換と送信先 Log Group の振り分けを柔軟に制御できる。
- **[EC2 Image Builder now integrates with ASG for faster image builds](https://aws.amazon.com/about-aws/whats-new/2026/10/ec2-image-builder-asg-faster-builds/)** (2026-10-19) - 既存の Auto Scaling Group のインスタンスをイメージビルドに再利用でき、ビルド用インスタンスの起動・ブートストラップ時間を省ける。
- **[Amazon GuardDuty adds optional threat detection rules for Runtime Monitoring](https://aws.amazon.com/about-aws/whats-new/2026/10/guardduty-runtime-optional-detection-rules/)** (2026-10-19) - Runtime Monitoring で 50 以上のプロセス・ファイル・ネットワーク検知ルールを任意で有効化できる。

## Lobsters
- **[Indian government sites are serving revoked eMudhra certificates](https://captnemo.in/blog/2026/10/23/emsign-revoked-gov-in/)** (57pt) - 失効された eMudhra 発行の証明書を、インドの政府系サイトがなお配信していると指摘。失効が現場に反映されない運用上の問題を示す。Ars Technica は eMudhra が TLS 事業から撤退した件を、Zenn では脆弱な中間 CA 鍵（8bit 以下）を実際に求める記事を出している。
- **[Bringing uv and ty together](https://astral.sh/blog/uv-ty-integration)** (26pt) - Astral が uv と型チェッカー ty の連携を紹介。Python のプロジェクト環境と型検査をシームレスに繋ぐ方向性。
- **[Wild version 0.11.0 released](https://github.com/wild-linker/wild/releases/tag/0.11.0)** (25pt) - Rust 製高速リンカ Wild の 0.11.0。mac タグが付いており、macOS 対応の進展が注目点。
- **[Be Aware of What's in Your Logs](https://fireborn.mataroa.blog/blog/be-aware-of-whats-in-your-logs/)** (28pt) - ログに意図せず含まれる情報への注意喚起。デバッグ性と機微情報の混入のバランスを考えさせる。
- **[Balloting has completed for C++26. Unfortunately it was Disapproved](https://www.linkedin.com/posts/robertseacord_balloting-has-completed-for-c26-unfortunately-activity-7519795140887035918-5PWL)** (16pt) - C++26 の投票が否決されたとの報告。標準化プロセスの行方が気になるニュース。

## dev.to
- **[Gemma 4 on a 4 GB GPU in Plain PyTorch: From Out of Memory to Faster Than llama.cpp](https://dev.to/gde/gemma-4-on-a-4-gb-gpu-in-plain-pytorch-from-out-of-memory-to-faster-than-llamacpp-31jb)** - 4GB の GTX 1650 Ti では Gemma 4 E2B が 16bit で載らず、Transformers の 4bit 経路も初回 forward で OOM する。素の PyTorch で量子化と配置を工夫し llama.cpp より速くした過程を紹介。
- **[Your coding agent can read .env. Here's where the API keys should live instead.](https://dev.to/i4cstudio/your-coding-agent-can-read-env-heres-where-the-api-keys-should-live-instead-58m5)** - コーディングエージェントに shell を与えると `.env` の API キーを読めてしまう問題と、キーの置き場所の代替案を論じる。
- **[Why Long AI Coding Sessions Get Expensive (Quadratic Attention Explained)](https://dev.to/smit153/why-long-ai-coding-sessions-get-expensive-quadratic-attention-explained-1nfk)** - Attention の二次コストと、毎ターン会話全体を再送する構造が長いセッションを高くする理由を説明。プロンプトキャッシュが効く範囲と効かない範囲にも触れる。
- **[Autonomous agent loops with Gemini 4 Argon and GKE Agent Sandbox](https://dev.to/googlecloud/autonomous-agent-loops-with-gemini-4-argon-and-gke-agent-sandbox-running-untrusted-code-safely-at-2k60)** - LLM 生成の Python/Bash を GKE Agent Sandbox で隔離し、安全に大規模実行する構成。
- **[You know you can automate screen reader tests right?](https://dev.to/craigmorten/you-know-you-can-automate-screen-reader-tests-right-2dnk)** - アクセシビリティテストは自動と手動の二択ではなく、Playwright 等でスクリーンリーダー操作も自動化できるという提案。

## TechCrunch
- **[Block's new voice model sounds eerily human](https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/)** - Block が公開した音声モデルは MacBook M4 Max 上でローカル実行できると説明されている。オンデバイス音声生成の実用性を示す事例。
- **[PHP-ocalypse: How two critical web bugs almost broke the internet](https://techcrunch.com/2026/10/24/php-ocalypse-how-two-critical-web-bugs-almost-broke-the-internet/)** - PHP の重大バグ 2 件（PHP2Shell）が一時インターネット全体を脅かした経緯と、同種の事態が再び起こり得るという論調。Lobsters にも被害側の個人的な体験記（I want my Wednesday back）がある。
- **[Will AI expose the rickety infrastructure of the internet?](https://techcrunch.com/2026/10/24/will-ai-expose-the-rickety-infrastructure-of-the-internet/)** - AI による脆弱性発見の加速が、古い基盤ソフトの脆さを露呈させるかという論考。

## Ars Technica
- **[Hacks of 2 federal agencies in a month have spilled a bonanza of sensitive data](https://arstechnica.com/security/2026/10/hacks-of-2-federal-agencies-in-a-month-have-spilled-a-bonanza-of-sensitive-data/)** - 1 か月で米連邦機関 2 つが侵害され、大量の機微データが流出したという報道。
- **[The Internet's undersea backbone is slipping into the danger zone](https://arstechnica.com/gadgets/2026/10/the-internets-undersea-backbone-is-slipping-into-to-the-danger-zone/)** - 海底ケーブルなど海中インフラへのリスク上昇を扱う書籍紹介。インターネットの物理基盤の脆弱性という視点。
- **[Intel gets waiver after worries fuzzy US ban on foreign-made robots may hit fabs](https://arstechnica.com/ai/2026/10/intel-gets-waiver-after-worries-fuzzy-us-ban-on-foreign-made-robots-may-hit-fabs/)** - 海外製ロボット車両の規制が国内の半導体工場に及ぶ懸念から、Intel が適用除外を得た。

※ 過去レポートとの重複を除いた新規記事が少なく、Ars Technica は 3 件のみ。

## 注目トピック
この 1 日は、Brotli の重大脆弱性 HTTP2Shell と前週の PHP2Shell が、Node.js・Python・Envoy など広範な基盤の更新を迫った点が目立つ。TechCrunch の「AI が古い基盤の脆さを露呈させる」という論調は、脆弱性発見が加速する中で依存関係の更新運用が問われていることを示している。eMudhra の中間 CA 問題も、失効が現場に反映されない運用面の課題を浮き彫りにした。

AI エージェント周辺では、実行環境の隔離（GKE Agent Sandbox）、API キーをエージェントに渡さない設計、サブエージェントを分けるか畳み込むかの判断など、安全性と構成設計が実装レベルの話題になっている。AWS では Lambda durable functions の Go SDK GA や DynamoDB Streams の時刻指定読み出しなど、障害復旧と再処理を扱いやすくする更新が続いた。
