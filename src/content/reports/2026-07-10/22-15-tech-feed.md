---
title: "Tech Feed ダイジェスト（2026年7月11日）"
date: "2026-07-10T22:15"
category: "summary"
summary: "AWSがAIエージェント向けMCP自動化を拡充・GLM-5.2を25GBメモリで動かす推論エンジン登場・Apple対OpenAI提訴・仮想スレッドピニング事故など"
tags: ["ai", "agent", "aws", "security", "rust", "database"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Code・Codex用に、超爆速で超安全なサンドボックスを作る方法 - Qiita](https://qiita.com/Koukyosyumei/items/3bd4696237ea64c38971)** ([104users](https://b.hatena.ne.jp/entry/s/qiita.com/Koukyosyumei/items/3bd4696237ea64c38971)) - AI・セキュリティ研究者が、Claude CodeやCodexにシェルコマンドやネットワークアクセスを与える際のリスクを抑えるため、起動オーバーヘッドの小さい軽量サンドボックス構築手法を解説した記事。AIエージェントに強い権限を渡さざるを得ない場面で、速度と隔離強度を両立させる実装が具体的に示されている。
- **[「メールが届かなくても仕方ない」を普通にしませんか](https://xtech.nikkei.com/atcl/nxt/column/18/00138/063002060/)** ([96users](https://b.hatena.ne.jp/entry/s/xtech.nikkei.com/atcl/nxt/column/18/00138/063002060/)) - 迷惑メール対策の強化に伴いメールが正当な相手にも届かなくなる事象が増えている中、それを「仕方ない」で片付けず送信ドメイン認証（SPF/DKIM/DMARC）まわりの設定を見直すべきだと訴える記事。到達率の劣化を運用の宿命として諦めがちな現場への警鐘となっている。
- **[7440億パラメーターの巨大AI「GLM-5.2」をメモリ25GBの普通のPCで動かす推論エンジン「Colibrì」が登場](https://gigazine.net/news/20260710-colibri-glm/)** ([36users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260710-colibri-glm/)) - 7440億パラメータのMoEモデルGLM-5.2を、量子化やレイヤーオフロードなどの工夫でわずか25GBメモリの一般的なPC上で推論可能にする実行エンジン「Colibrì」が登場した。巨大モデルをクラウドGPU無しでローカル実行できる範囲が着実に広がっていることを示す事例。
- **[メールアドレスの所有権確認をブラウザ経由で一瞬で済ませる新機能「Email Verification Protocol(EVP)」をChromeが試験提供中](https://gigazine.net/news/20260710-chrome-email-verification-protocol/)** ([19users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260710-chrome-email-verification-protocol/)) - Chromeがブラウザ主導でメールアドレスの所有権を検証できる新プロトコル「EVP」を試験提供している。確認コードをメールで送受信する従来のワンタイムパスコード方式を省略し、ブラウザとメールプロバイダの連携だけで本人確認を完結させる狙いがある。
- **[SREの積み重ねがAI駆動開発のガードレールになった ― 7つの実践/SRE Guardrails The 7](https://speakerdeck.com/tomoyakitaura/sre-guardrails-the-7)** ([16users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/tomoyakitaura/sre-guardrails-the-7)) - AIエージェントに実装を任せる開発が広がる中、これまで培ってきたSREの実践（モニタリング・段階的リリース・ポストモーテムなど）が、AIの誤った変更を検知し被害を抑えるガードレールとして機能するという知見を7つの実践に整理した発表資料。

## Zenn

- **[DB にある推定4億件のログを消して 9TB のストレージ容量を削減した](https://zenn.dev/primenumber/articles/65fa80973cb6f2)** - サービスのジョブ画面表示用に溜め続けていた約4億件のログレコードがDBを圧迫していた問題に対し、実際に削除を実行して9TB分のストレージ容量を削減した記録。安全に大量削除を進めるための手順や検証の勘所が具体的に語られている。
- **[AI が自分の結論を正当化してくるので、デバイアスして自律的にFable 5 にセカンドオピニオンを聞くSkill を作った](https://zenn.dev/atrae/articles/08f2b2c3f2217d)** - コーディングエージェントが自分の出した結論を都合よく正当化しがちな傾向に対し、意図的にバイアスを取り除いた形で別モデル（Fable 5）にセカンドオピニオンを自動で求めるSkillを自作した記事。AIの判断を無条件に信頼せず、別視点で検証させる仕組みづくりの実例として参考になる。
- **[Agent Skills自動最適化の研究、中身はほぼ深層学習の訓練ループだった](https://zenn.dev/layerx/articles/9f25ec86a31730)** - コーディングエージェントに持たせるAgent Skillsを、ハーネスの工夫でエージェント自身の実行経験から学習・改善させる2026年上半期の研究動向を紹介した記事。スキルの自動最適化の仕組みが、実質的に深層学習の訓練ループと同じ構造を持つ点を指摘している。
- **[純関数・参照透過性・冪等性の違いが分からなくなったのでまとめる](https://zenn.dev/kkeeth/articles/pure-function-referential-transparency-idempotency)** - 関数型プログラミングを学び直す中で混同しやすい「純関数」「参照透過性」「冪等性」という3つの概念を、それぞれの定義と関係性に立ち返って整理した記事。曖昧なまま使われがちな用語を丁寧に切り分けている。
- **[自動テストの肥大化とどう向き合うか](https://zenn.dev/frontendflat/articles/automated-test-size-tradeoff)** - 自動テストを書き続けてきたチームが直面するCI実行時間の増大や偽陽性・偽陰性の増加という問題に対し、テストの取捨選択をどう考えるべきかを社内勉強会向けに整理した記事。テストのカバレッジと保守コストのトレードオフを具体的に論じている。

## Qiita

- **[ナレッジ83件を2時間で作った。でも腐るのは、もっと速かった](https://qiita.com/yamada-iknow/items/5e5ec4d5e96b12fbc75c)** - 自社プロダクトの案内AI向けに製品コードから83件のナレッジを2時間で生成したものの、わずか4日後の機能追加でナレッジが陳腐化してしまった経験を扱った記事。AIによるナレッジ生成の速さと、その鮮度を保つ運用の難しさのギャップを具体的に示している。
- **[15年前の『アジャイルサムライ』、AI時代に古びたのは"作るコスト"の教えだけだった](https://qiita.com/tatsuya582/items/88508215a8e22b169166)** - AIがコードを書く時代において、15年前の定番書『アジャイルサムライ』の教えがどこまで通用するかを検証した記事。「作るコストが高いから慎重に」という前提部分は古びた一方、要求の不確実性やチームでの合意形成に関する教えは今も通用すると整理している。
- **[プロンプトを頑張るな、リポジトリを育てろ：GitHub Copilotが迷わないコードベース設計](https://qiita.com/ochtum/items/28fc5b3dbf78b7795c80)** - 毎回プロンプトで前提を説明する運用ではなく、README・設計ドキュメント・命名規則などリポジトリ自体をAIが迷わない形に育てることで、Copilotなどのコーディングエージェントの精度を上げるアプローチを紹介した記事。
- **[「止めないシステム」は、結局なにを守る設計なのか？](https://qiita.com/mo__mo/items/c7e18f4dd3177b273555)** - 「サーバーが落ちない」「障害時に自動で切り替わる」といった可用性の追求が、本当に守るべきものは何かという問いに立ち返って設計の本質を論じた記事。可用性と一括りにされがちな要件を分解して考える視点を提供している。
- **[Redocly + Dockerで複数のOpenAPI YAMLを1つのドキュメントポータルに統合した話](https://qiita.com/dev-ogawa/items/cedbcac3599cfd970348)** - BaaS基盤の複数サービスに分散していたOpenAPI（YAML）定義を、RedoclyとDockerを組み合わせて1つのWebドキュメントポータルに統合した実践記事。ローカル環境での構築手順まで具体的に示されている。

## AWS 新着

- **[AWS DMS Schema Conversion now supports AI agent automation](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-dms-sc-ai-agent-automation-mcp-server/)** (2026-07-10) - AWS DMS Schema ConversionがAWS MCP Server経由のAIエージェント自動化に対応し、Kiro・Claude Code・CursorなどのAIコーディングエージェントからDBスキーマ変換作業を直接扱えるようになった。移行作業の一部をエージェントに委譲できる範囲が広がっている。
- **[Amazon EMR on EKS now supports Apache Spark troubleshooting agent](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-emr-eks-spark-troubleshooting/)** (2026-07-10) - Amazon EMR on EKSがApache Sparkのトラブルシューティングエージェントに対応し、データエンジニアが自然言語でジョブ失敗の原因分析やPySparkコードの修正提案を受けられるようになった。障害調査の初動をAIが肩代わりする形が広がっている。
- **[AWS Security Hub now offers Network Scanning to identify publicly reachable resources](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-network-scanning/)** (2026-07-08) - AWS Security Hubが、環境内でインターネットから到達可能なリソースを特定するNetwork Scanning機能を追加した。意図せず公開状態になっているリソースを能動的に検出し、露出面の管理を強化できる。
- **[Amazon SageMaker HyperPod now supports disaggregated prefill and decode](https://aws.amazon.com/about-aws/whats-new/2026/7/amazon-sagemaker-hyperpod-dpd/)** (2026-07-06) - SageMaker HyperPodがLLM推論のprefillフェーズとdecodeフェーズを別インスタンスに分離するDisaggregated Prefill and Decode（DPD）に対応した。フェーズごとに異なる計算特性に合わせてリソースを最適配分し、推論効率を高める狙いがある。
- **[Amazon Aurora DSQL change data capture (CDC) is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-cdc-ga/)** (2026-07-08) - Aurora DSQLのCDC機能が一般提供となり、DBの変更をリアルタイムでAmazon Kinesis Data Streamsへストリーミングできるようになった。イベント駆動アーキテクチャやデータ連携基盤にDSQLを組み込みやすくなる。

## Lobsters

- **[I Did Not Kill Stanley Lieber: How to draw (with 9front)](https://triapul.cz/automa/i_did_not_kill_stanley_lieber)** (66pt) - Plan 9系OS「9front」上でお絵描きツールを使って絵を描く様子を追った記事。実用性よりも、独自哲学を貫くニッチなOSコミュニティの文化と創作活動の結びつきを描いた読み物として支持を集めている。
- **[Hannah Montana Linux v26.0](https://gitlab.com/DecaCagle/hannahmontanalinux26)** (28pt) - ジョーク系ディストリビューション「Hannah Montana Linux」の最新版がリリースされた。ネタ企画として始まりながら年月をかけて更新が続いている、OSSコミュニティの遊び心が続くプロジェクト。
- **[Two Ways To Design](https://wiki.c2.com/?TwoWaysToDesign)** - ソフトウェア設計には「単純化して欠点をなくす」方向と「機能を積み上げて複雑さを受け入れる」方向の2つの流儀があるという古典的な設計論を扱ったWikiページ。設計判断の分かれ目を言語化する枠組みとして今なお参照されている。
- **[After 7 years in production, Scarf has reluctantly moved away from Haskell](https://avi.press/posts/2026-07-10-after-7-years-in-production-scarf-has-reluctantly-moved-away-from-haskell.html)** (10pt) - 7年間Haskellで本番運用してきたScarf社が、採用や実務での学習コストの高さを理由に、不本意ながらHaskellから離れることになった経緯を振り返った記事。言語の技術的な優位性だけでは持続的な採用が難しい現実を具体的に示している。
- **[Running 1000 tests in 1s (2022)](https://marvinh.dev/blog/running-1000-test-in-1s/)** (5pt) - JavaScriptのテストスイートを1000件・1秒以内で実行できるようにするための高速化手法をまとめた記事。並列化やモジュール解決の見直しなど、テスト実行時間がボトルネックになりがちな大規模プロジェクト向けの具体的な最適化テクニックを扱っている。

## dev.to

- **[When LangGraph Succeeds but Silently Goes Wrong](https://dev.to/labyrinthanalytics/when-langgraph-succeeds-but-silently-goes-wrong-4jnb)** - LangGraphで組んだパイプラインが「正常終了した」ことと「正しい結果を返した」ことを混同すると、クリーンな実行終了の裏で誤った出力が本番に流れ続ける危険があると指摘した記事。エージェントの実行成功判定だけに頼らない検証設計の必要性を論じている。
- **[Your Loom App Quietly Became a Thread Pool Again: A Field Guide to Virtual Thread Pinning](https://dev.to/maschiojv/your-loom-app-quietly-became-a-thread-pool-again-a-field-guide-to-virtual-thread-pinning-2a3f)** - JavaのProject Loomによる仮想スレッドへ移行したサービスが、synchronizedブロックなどが原因で仮想スレッドがOSスレッドに「ピン留め」され、実質的に従来のスレッドプールへ逆戻りしてしまった障害を追跡した記事。負荷試験が420リクエスト/秒で頭打ちになる原因究明の過程が具体的に語られている。
- **[The Background Task That Froze: A Serverless CPU-Throttling Mystery](https://dev.to/dalenguyen/the-background-task-that-froze-a-serverless-cpu-throttling-mystery-3j3d)** - Cloud Run上でAIエージェントを動かす際、レスポンス送信後にバックグラウンド処理を続けようとすると、デフォルトのリクエストベースCPUモードでは処理が途中で凍結してしまうという落とし穴を解説した記事。サーバーレス環境特有のCPUスロットリング挙動を理解せずに非同期処理を設計する危険性を示している。
- **[Devin, the "First AI Software Engineer," Failed 86% of Its Benchmark Tasks, and Then What](https://dev.to/vibeagentmaking/devin-the-first-ai-software-engineer-failed-86-of-its-benchmark-tasks-and-then-what-1h4a)** - 「最初のAIソフトウェアエンジニア」として月額500ドルで人間エンジニアの代替を掲げたDevinがSWE-benchで13.86%しか正答できなかった過去を振り返り、その後料金を大幅値下げして「人間監督付きツール」として評価額102億ドル企業に成長した経緯を分析した記事。
- **[How I replaced LLM calls with coding agent calls and saved money](https://dev.to/popiol/how-i-replaced-llm-calls-with-coding-agent-calls-and-saved-money-10p7)** - AIエージェントを構築する際、生のLLM API呼び出しの一部を既存のコーディングエージェント経由の呼び出しに置き換えることでコストを削減した実践記事。用途によってAPIの直接呼び出しとエージェント経由呼び出しを使い分ける工夫を具体的に紹介している。

## TechCrunch

- **[Apple sues OpenAI over alleged trade secret theft](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)** - AppleがOpenAIを相手取り、営業秘密の窃取があったとして提訴した。OpenAIの元従業員を含む同社上層部の主導で不正行為が行われたとAppleは主張しており、AI大手同士の人材・技術流出を巡る対立が法廷に持ち込まれた形。
- **[SK Hynix raises \$26.5B in the biggest foreign IPO in US history, is urged to build new US fabs](https://techcrunch.com/2026/07/10/sk-hynix-raises-26-5b-in-the-biggest-foreign-ipo-in-us-history-is-urged-to-build-new-us-fabs/)** - 韓国の半導体大手SK Hynixが米国史上最大規模となる265億ドルの外国企業IPOを実施した。AIチップ需要ブームを背景にした資本市場の動きであり、米国内での新工場建設を求める圧力も同時に高まっている。
- **[Oratomic raises \$300M to build a viable quantum computer that needs only 20K qubits](https://techcrunch.com/2026/07/10/oratomic-raises-300m-to-build-a-viable-quantum-computer-that-needs-only-20k-qubits/)** - 量子コンピュータスタートアップOratomicが、実用レベルの計算に必要な量子ビット数を2万個程度まで抑えるアプローチの開発に向けて3億ドルを調達した。数百万量子ビット級を目指す従来路線とは異なる、誤り耐性の設計効率を追求する方向性が注目されている。
- **[Hugging Face's CEO on why companies are done renting their AI](https://techcrunch.com/2026/07/10/hugging-faces-ceo-on-why-companies-are-done-renting-their-ai/)** - Hugging FaceのCEOが、企業がAIを外部にレンタルし続けるモデルから、オープンソースモデルを自社でホストして所有する方向へ移行しつつあると語った。同社がAI版GitHubのような存在として、モデルの共有・配布のハブに成長している背景を説明している。
- **[Bluesky's interim CEO, Toni Schneider, drops the 'interim'](https://techcrunch.com/2026/07/10/blueskys-interim-ceo-toni-schneider-drops-the-interim/)** - 分散型SNS Blueskyの暫定CEOを務めていたToni Schneider氏が、正式にCEO職を引き受けることになった。Automattic元CEOでもある同氏が、既存SNSとは一線を画す運営方針にコミットする姿勢を示した形。

## Ars Technica

- **[China recovered its first reusable rocket and showed a new way to do it](https://arstechnica.com/space/2026/07/china-recovered-its-first-reusable-rocket-and-showed-a-new-way-to-do-it/)** - 中国の国有宇宙企業が、打ち上げ後の軌道ロケットブースターの回収に初めて成功した。SpaceXとは異なる独自の回収方式を採用しており、再使用ロケット技術の実現手法が単一の正解に収斂しない可能性を示している。
- **[Ransomware negotiator hired to represent victims was working for the attackers](https://arstechnica.com/tech-policy/2026/07/ransomware-negotiator-helped-attackers-extort-his-own-clients-gets-6-year-sentence/)** - 被害企業側の代理人としてランサムウェア攻撃者との交渉を請け負っていた人物が、実際には攻撃側と結託して依頼主から金銭を騙し取っていたとして懲役6年の判決を受けた。インシデント対応業者そのものの信頼性検証が必要になりうる事例。
- **[Disable autoplay and infinite scroll or risk massive fines, EU tells Meta](https://arstechnica.com/tech-policy/2026/07/disable-auto-play-and-infinite-scroll-or-risk-massive-fines-eu-tells-meta/)** - EUがMetaに対し、自動再生や無限スクロールといった依存を誘発する機能をDigital Services Act違反と認定し、無効化しなければ多額の制裁金を科すと通告した。UXパターンの設計そのものが規制対象になりうることを示す事例。
- **[Firmware update bricks Hue Bridge Pro devices; Philips gives free replacements](https://arstechnica.com/gadgets/2026/07/firmware-update-bricks-hue-bridge-pro-devices-philips-gives-free-replacements/)** - Philips HueのスマートホームハブHue Bridge Proに配信されたファームウェア更新が、端末を起動不能にする不具合を引き起こした。IoT機器のOTAアップデートが持つ、ユーザー側では制御できないリスクを改めて示す事例で、Philipsは無償交換で対応している。
- **[Like a cheat code for your car: We investigate ECU tuning](https://arstechnica.com/cars/2026/07/like-a-cheat-code-for-your-car-we-investigate-ecu-tuning/)** - 自動車のECU（電子制御ユニット）をチューニングして性能を引き出す文化と、それを阻止しようとする自動車メーカー側のチップロックダウンとのいたちごっこを取材した記事。組み込み機器の改変を巡る攻防という点でセキュリティ領域とも重なるテーマを扱っている。

## 注目トピック

今回のダイジェストで際立つのは、AIエージェントに任せる作業範囲がインフラ運用の実務にまで着実に広がっている点だ。AWSはDMS Schema ConversionをKiro・Claude Code・Cursorなどからmcp経由で操作できるようにし、EMR on EKSには自然言語で障害原因を分析するSparkトラブルシューティングエージェントを追加した。一方ではてなブックマークの「Claude Code・Codexサンドボックス構築」やSREガードレールの発表資料、dev.toのLangGraphが「クリーンに終了したのに結果は間違っている」という静かな失敗モードを扱った記事が並び、エージェントに権限や判断を委ねるほど、その実行を隔離・検証する仕組みが同時に求められている実務の焦点が浮かび上がる。Javaの仮想スレッドピニング障害やCloud RunのCPUスロットリングの記事も、新しい実行モデルの「静かな落とし穴」を突いている点で軸を共有している。

もう一つの軸は、巨大AIモデルをより身近な環境で動かす技術と、それを支える資本・インフラの再編だ。GLM-5.2を25GBメモリの一般PCで動かす推論エンジン「Colibrì」や、SageMaker HyperPodのprefill/decode分離によるLLM推論最適化は、巨大モデルの実行コストを引き下げる方向性を示している。TechCrunchが報じたSK Hynixの265億ドルIPOやHugging FaceのCEOが語る「AIを借りるのではなく所有する」流れも合わせると、AIモデルの学習・推論を支える半導体とオープンソースエコシステム双方への投資が並行して進んでいることがうかがえる。Apple対OpenAIの営業秘密訴訟は、そうした競争が法廷闘争にまで及び始めたことを象徴する出来事だった。
