---
title: "Hacker News トップ10 (2026-10-31)"
date: "2026-10-31T05:16"
category: "summary"
summary: "Cursor 上の Claude Code 拡張バックドア、Northflank 侵害、Binance 63億ドル流出などセキュリティ事案が目立つ HN トップ10"
tags: ["hackernews", "security", "ai"]
---

## 1. [Backdoor in Claude Code for VS Code extension on the Cursor Marketplace](https://phorion.io/blog/offical-claude-code-vsx-compromise/)

**Score:** 850 | **Comments:** 512 | [Post](https://news.ycombinator.com/item?id=50300683)

Phorion が、Cursor Marketplace 上の Claude Code for VS Code 拡張（v2.1.312 / 2.1.313）に、攻撃者の SSH 公開鍵（`svc-telemetry`）を authorized_keys に追加して永続化するバックドアが仕込まれていたと報告した。macOS / Linux / Windows 向けのロジックを含む。Cursor は該当バージョンを削除し、ロイターによれば最大5000ユーザーに影響した。

### Key Discussion Points

- **felixrieseberg**: Anthropic の社員として、Anthropic のシステムや社員端末の侵害ではなく、Cursor のマーケットプレイスへのアクセスを悪用して改ざん版が公開されたと説明。公式チャネルのバージョンは影響なし。
  - **tzone**: Anthropic 製として表示されている以上、実質的に Anthropic ブランドの侵害だと指摘。
  - **Rapzid**: 資格情報の漏洩に言及があるのに、誰も責任を認めず経緯や再発防止の説明もないと批判。
- **jonas21**: Cursor のブログにある影響確認手順（authorized_keys に `svc-telemetry` があるか調べる）を共有。
- **AdrianCX**: ロイター報道を紹介。悪意ある版は約11時間公開され、Anthropic が開発したものではないと Cursor が説明している。
  - **ddworken**: Anthropic の社員として、Anthropic のシステム侵害ではなく、Cursor 利用者を狙った改ざん拡張だと再度説明。
  - **tekawade**: Anthropic の公式拡張は VS Code 向けのみで、Cursor 版は Cursor 側が配布する別物だと整理。
- **yubblegum**: 詳細が書かれた Phorion の元レポートを先に参照すべきだと指摘。
  - **stingraycharles**: sshd の起動も試みており、他にも何ができたか分からないと懸念。
- **xx_ns**: 影響が Open VSX と Cursor Marketplace に限られ、公式 Marketplace のビルドは無事なのかを疑問視。
  - **ddworken**: 影響は Cursor Marketplace 上のみで、公式 VS Code Marketplace と OpenVSX は対象外と回答。

## 2. [Northflank Breached](https://status.northflank.com)

**Score:** 396 | **Comments:** 294 | [Post](https://news.ycombinator.com/item?id=50305025)

PaaS の Northflank がセキュリティインシデントを公表。ステータスページでは、全環境変数が侵害された前提で、ワークロード・シークレットグループ・グローバルシークレットを直ちにローテーションするよう案内している。ユーザーが渡した AI API キーの不正使用報告もあり、全顧客に監査ログを有効化した。

### Key Discussion Points

- **jonathaneunice**: 9月以降だけで PingCAP/TiDB、Fireworks AI、Zeabur、OpenCode Console、Railway、Northflank と、マルチテナント SaaS への高速な攻撃が少なくとも6件続いていると警鐘。
  - **pwarner**: 大手クラウド内部の状況はどうなのか気になると発言。
  - **roundup**: 侵害を受けたスタートアップは次の資金調達で評価が下がるべきかと問いかけた。
- **dangoodmanUT**: インフラ系スタートアップは、こうした事件でハイパースケーラーへ回帰すると予想。
  - **digitaltrees**: 逆に自前ハードウェア＋OSS（dokku 等）に戻ると反論。攻撃面も見返りも小さくなる。
  - **bix6**: ハイパースケーラーが本当に安全かは逸話の域を出ないと指摘。
- **dangoodmanUT**: 環境変数を暗号化し、復号鍵をコードにハードコードする自衛策を紹介。
  - **steelframe**: 一時的にしか効かない「隠蔽によるセキュリティ」だと評価。
  - **harvey7**: ハードウェアでシークレットを保護するサービスを紹介。
- **zmmmmm**: 技術的セキュリティが成立しなくなる可能性に触れ、高額取引に数日かける等の行動的対策を想像。
  - **anonymous908213**: セキュリティが不可能になるという根拠はなく、橋の崩落を経て社会が真剣に取り組んだ歴史と同じだと反論。
- **hmokiguess**: Northflank とは何かと質問。
  - **quadrature**: 2019年創業のクラウドプラットフォームで、新しい会社ではないと回答。

## 3. [The $6.3B Binance hack was pulled off in just 20 minutes](https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/)

**Score:** 383 | **Comments:** 264 | [Post](https://news.ycombinator.com/item?id=50303172)

WIRED によると（Wayback のスナップショットに基づく）、現地時間木曜午後4時頃から、Binance のウォレットから複数のブロックチェーンをまたいで約63億ドルが引き出された。大半は約20分で流出し、準備は少なくとも36時間前から始まっていたという。Binance は入出金を停止し、約半分は凍結済み。調査会社は北朝鮮の関与を疑っている。

### Key Discussion Points

- **yunnpp**: 全額補償すると言っても、侵害された端末1台で数分で60億ドルが消えるのは Binance の過失ではないかと疑問。
  - **Waterluvian**: 顧客は訴えられるが、何の罪で訴追するのかという現実的な壁がある。
  - **voxic11**: 通常は被害者ではなく犯意のある側が訴追されると指摘。
- **minimaxa**: Cryptsy 創業者の事件を例に、政府は盗まれた資金の回収に動かなかったと不満。
  - **chaostheory**: 米中間に犯罪人引渡条約がなく、ロシアも同様だと補足。
- **lordnacho**: 実行は20分でも、準備は何年もの積み重ねで、強盗映画と同じ構図だと指摘。
  - **dboreham**: Binance のシステム知識が必要で、内部犯行の可能性が高いと推測。
- **vedanshchauhan9**: HuggingFace、Railway、PHP に続く連続事案で、流れが止まらなくなったと懸念。
- **jakaroo**: 実行が短時間なのは暗号資産ハックでは珍しくないと述べた。
  - **bink**: 開始時点から見れば非常に速く、自動化または事前の内部情報があったのではないかと反論。

## 4. [My favourite PowerMac is a Nintendo Wii](https://virtuallyfun.com/2026/10/29/my-favourite-powermac-is-a-nintendo-wii/)

**Score:** 271 | **Comments:** 77 | [Post](https://news.ycombinator.com/item?id=50307190)

Wii（PowerPC 搭載）上で Mac OS を動かす趣味の移植を紹介する記事。サイトが Cloudflare のチャレンジで本文を取得できなかったため、タイトルとコメントからの推測による要約である。

### Key Discussion Points

- **unfocused**: MarioKart Tour 終了を機に改造済みの Wii を更新したら、ソフトやオンライン機能が復活して驚いたと報告。Mac OS 移植が Open Shop Channel に載ることを期待。
  - **jedbrooke**: Wii はディスク配布でアップデート地獄や課金がなく、ゲーム機の頂点だったと評価。
- **unleaded**: 作者は NT for Macintosh や GC/Wii 向け NT 移植も手掛けた人物だと紹介。
- **VladVladikoff**: 逆に PowerMac を Wii にできるかと質問。
  - **RandallBrown**: 初期の Xbox 360 開発機は PowerMac G5 だったと関連情報を提示。
  - **odo1242**: Wii には別 OS を動かす2つのプロセッサがあり、簡単ではないと指摘。
- **deadnomore**: 現行 macOS にも旧 Mac OS 由来のコードが残っていると主張。
  - **StilesCrisis**: Carbon は廃止されたはずだと疑問。
  - **hassaanr**: 現行 macOS は NeXTSTEP 系で、クラシックではないと補足。

## 5. [Breaking the open web won't stop the bad bots](https://www.techpolicy.press/breaking-the-open-web-wont-stop-the-bad-bots/)

**Score:** 223 | **Comments:** 102 | [Post](https://news.ycombinator.com/item?id=50263837)

TechPolicy.Press の論考。AI 開発者による大量クロールに対抗するため、自動アクセスに身元と目的の開示を義務づける Stealth Bot Prohibition Act などの法案が提案されているが、有害なクロール自体は止められず、調査報道などの正当な自動収集を妨げると主張している。

### Key Discussion Points

- **thereader12**: 記事の一節を引用。身元を開示しても毎分1万回アクセスすれば有害で、匿名の調査報道クローラーは違法になるという矛盾を指摘。
  - **AnthonyMouse**: すべてのブラウザもコンピュータプログラムであり、法案の前提自体が理解不足だと批判。
  - **za_creature**: ボット対策でジオフェンスが増えており、トレードオフが存在すると指摘。
  - **Vaushite**: 身元が分かればブロックできるし、DDoS は既に違法だと主張。
- **09172307**: DataDome や Cloudflare のボット対策が無限ループになり、正当なユーザーの体験を壊していると指摘。
- **udbhavs**: 全面的な有料化や ID 必須にならない未来はあるかと質問。
  - **bluesnowmonkey**: マイクロペイメントの時代が来ると期待。
  - **ivanjermakov**: コンピュータ同士の通信が合法で可能な限り存続すると回答。
- **armchairhacker**: サーバー維持費程度のマイクロペイメントを提案。
- **beloch**: 問題は規模にあり、小規模なスクレイピングと大規模なものとで罰則を分けるべきだが、実現はしないだろうと述べた。
  - **za_creature**: 政治家は他の手を尽くした後に正しい判断をする、と皮肉混じりに返答。

## 6. [Show HN: A working Nintendo in ~1GB of Qwen weights](https://github.com/dbreunig/nesformer)

**Score:** 220 | **Comments:** 118 | [Post](https://news.ycombinator.com/item?id=50306442)

NES の 6502 CPU・2KB RAM・ROM を、標準的な Qwen3.5 のチェックポイントの重みにコンパイルしたプロジェクト。学習はせず、コンパイラが重みを計算する。モデルが CPU 実行ログを1トークンずつ予測してゲームを動かし、バンドルしたテストゲームでは従来のエミュレータと全フレームが一致する。実機より150〜290倍遅い。Qwenputer の手法に基づく。

### Key Discussion Points

- **dbreunig**: 作者。Opus 5.5 がたった2つのプロンプトで動く重みとコードを作り、conformance テストという高品質なオラクルが決め手だったと解説。
  - **giancarlostoro**: 自分のプロジェクトでも似た進め方をしていると共感。
  - **cadamsdotcom**: 良いオラクルの重要性は、人間にとっての教師や学位と同じだと感想。
- **armcat**: 小さな VM や Python インタプリタを重みの中に持てば、外部ツール呼び出しなしに matmul だけで実行できるのでは、と展望。
  - **kirubakaran**: 関連する Google の研究を紹介。
  - **manofmanysmiles**: 固定機能の領域を重みに固定したまま学習するアイデアを提案。
- **jacquesm**: 効率面では恐ろしいが、決定論的プログラムの効率の良さを再認識したと述べた。
  - **garciasn**: 2年前は玩具だった AI が、今では本番で使えるようになったと進化を振り返った。
- **pbohun**: LLM と通常プログラムの計算コストの差が分かる好例だと評価。
  - **jedbrooke**: 学習したエミュレーションではなく、正確なエミュレーションである点が違うと補足。
- **publlus_enigma**: README が明らかに AI 生成で読む気になれないと批判。

## 7. [Cloudflare Turnstile solver library (no headless browser required)](https://github.com/chris124567/cfsolve)

**Score:** 138 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=50277379)

ヘッドレスブラウザなしで Cloudflare Turnstile ウィジェットを解き、チャレンジページから `cf_clearance` クッキーを得る Rust 製のライブラリ兼 CLI。Safari や Chrome のプロファイルを使ってブラウザを偽装する。

### Key Discussion Points

- **costco**: 作者。欧州プロキシでは動かないとの報告があり、地域で配信内容が違う可能性があるので修正予定と説明。
- **paaloeye**: yt-dlp と同じく Cloudflare との終わりなき競争で、信頼性は高くないと指摘。
- **manofmanysmiles**: 以前作ったものも一時は動いたが、個別の回避は容易でも大規模運用はネットワーク全体の行動分析のため極めて難しいと経験を共有。
- **Onavo**: Anubis の PoW は node.crypto で1秒未満に解けるという豆知識。
- **publlus_enigma**: 人間より計算機の方が上手くこなす作業になったと皮肉った。

## 8. [Show HN: To Honor Sir Patrick Stewart, Enjoy the TNG Episode Guessing Game](https://tng.episodle.com/)

**Score:** 134 | **Comments:** 41 | [Post](https://news.ycombinator.com/item?id=50311686)

『スタートレック：新世代』のエピソードを当てるゲーム。サイトが Cloudflare のチャレンジで本文を取得できなかったため、タイトルとコメントからの推測による要約である。

### Key Discussion Points

- **Arainach**: 全文検索が肝で、あやふやな記憶でもエピソードに辿り着けると評価。
- **joeguilmette**: 何度も全話を見返しているのに1問も当てられなかったと報告。
- **karim79**: 良くできているが難しすぎる。スクリーンショットの入手方法（スクレイピングか ffmpeg か）が気になる。
- **mijowi**: 多肢選択式が欲しいと要望。
- **havaloc**: Star Trek 好きの2人によるポッドキャスト The Greatest Generation を紹介。

## 9. [Tell HN: Scribd Breached](https://news.ycombinator.com/item?id=50312756)

**Score:** 93 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=50312756)

投稿者が10月26日に受け取った Scribd（Slideshare、Everand、Fable の親会社）のセキュリティインシデント通知を共有。第三者が一部のユーザーデータにアクセスした可能性があるという内容で、Epiq 経由で送られた。

### Key Discussion Points

- **Buttons840**: 重要インフラにも赤チーム的な侵入試験が行われてほしいが、違法のため難しいと指摘。脆弱性を作ったのは AI ではなく、AI は発見の道具に過ぎないとも述べた。
- **kooi**: 個人情報の保存時暗号化に基準はあるのかと質問。
- **smurda**: 同じメールを10月30日に受信。全顧客に一斉通知しなかった理由や、10月1日の障害ページの存在を指摘。
- **bluecode**: もう誰も安全ではないと嘆いた。

## 10. [Longitudinal Changes In Wearable-Captured Physiology Before Sudden Cardiac Death](https://www.jacc.org/doi/epdf/10.1016/j.jaccas.2026.110397)

**Score:** 6 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50274885)

ウェアラブル端末で取得した生理データの経時変化を、心臓突然死の前で調べた症例報告（JACC Case Reports）。URL が PDF のため本文は取得せず、タイトルとコメントからの推測による要約である。

### Key Discussion Points

- **yonisto**: 「N = 1?」と、症例数の少なさを指摘。

## Trends

- **セキュリティ事案の連鎖**: Cursor 上の Claude Code 拡張のバックドア、Northflank 侵害、Binance の63億ドル流出、Scribd の漏洩と、サプライチェーンや SaaS 基盤への攻撃が上位に並んだ。コメントでは「9月以降だけで少なくとも6件」との指摘があり、攻撃の高速化と AI 関連キーの標的化が懸念されている。
- **ボットとオープンウェブ**: クロール規制法案への批判と Turnstile ソルバーが同時に上がり、ボット対策と正当な自動アクセスの攻防が続いている。
- **AI の遊び心ある実験**: Qwen の重みに NES を載せた nesformer や、Wii への Mac OS 移植など、古いハードウェアと最新技術を組み合わせた作品が人気だった。
