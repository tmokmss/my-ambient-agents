---
title: "Hacker News トップ10 サマリー（2026-05-15）"
date: "2026-05-15T04:12"
category: "summary"
summary: "VPNフィンガープリント、車載テレメトリ除去、ローカルLLM、M5カーネルエクスプロイト、eGPU Mac gaming など話題10選"
tags: ["hackernews", "security", "ai", "privacy", "hardware"]
---

## 1. [Mullvad exit IPs are surprisingly identifying](https://tmctmt.com/posts/mullvad-exit-ips-as-a-fingerprinting-vector/)

**Score:** 116 | **Comments:** 34 | [Post](https://news.ycombinator.com/item?id=48143880)

プライバシー重視VPNとして知られるMullvadのExit IPが、実はユーザー識別のフィンガープリンティングに使えることが判明した。WireGuardキーに基づいてIPアドレスが決定論的に割り当てられるため、異なるサーバーを経由しても同一ユーザーを99%以上の精度で特定できる。修正方法はシンプルで疑似乱数シードの追加が推奨されている。

### Key Discussion Points

- **solenoid0937**: 「これはまるで情報機関がVPNを設計した場合の仕様のようだ」と皮肉混じりに懸念を示す
- **VoidWhisperer**: サードパーティクライアントがリポジトリで公開されているキーローテーション機能を実装しない理由を疑問視
- **lorenzohess**: そもそもVPNの目的は訪問サイトに対する匿名性の提供ではなく、完全な匿名性にはTorを使うべきと指摘
- **linkregister**: Mullvadは管理者にとってBANが難しいホストだが、修正（疑似乱数シード追加）は数日以内に期待できると楽観的

---

## 2. [Removing the modem and GPS from my 2024 RAV4 hybrid](https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/)

**Score:** 687 | **Comments:** 399 | [Post](https://news.ycombinator.com/item?id=48138136)

著者がプライバシー保護のため2024年型RAV4 HybridからDCM（Data Communication Module）とGPSユニットを物理的に取り外した詳細レポート。Mozillaの調査でメーカーが「性行為、移民ステータス、人種、顔の表情、体重、遺伝情報」を収集していることが明らかになっており、除去後もBluetoothで接続した場合はトヨタへのテレメトリー送信が継続するため、USB接続のCarPlayのみを使用するとのこと。

### Key Discussion Points

- **codezero**: Bluetooth経由でテレメトリーが送信されるという主張に懐疑的、自動的には有効にならないはずと指摘
  - **phire**: Bluetoothテザリングは手動でパーソナルホットスポットを有効にしない限り機能しないと補足
- **nurple**: USBのCarPlayでもAppleとGoogleが独自に車両テレメトリーを収集しているという見落とされがちな事実を指摘
  - **embedding-shape**: 通信キャリア、クレジットカード、公共カメラとあらゆる場所で追跡されており「もうどうにでもなれ」という気分に
- **lucisferre**: 同じRAV4でCarPlayとのGPS連携が壊れていて同じ方向に向いていない問題を報告、トヨタに何度も報告しても拒否された経験を共有
  - **KennyBlanken**: 何度も報告するより民事訴訟を起こすべきと強く促す
- **everdrive**: 2024年型Ford Maverickはテレメトリーユニットのヒューズを外すだけでエラーコードが出ない簡単な方法があると紹介
  - **xattt**: KiaはディーラーコードでアクセスできるサービスメニューにMassachusettsモードがあり、テレメトリーを無効化できると紹介
- **Riany**: SOS/クラウド機能を失うのはコストだが、常時接続テレメトリーデバイスを所有することも問題であり、ソフトウェア設定と明確なプライバシー契約であるべきと主張

---

## 3. [A few words on DS4](https://antirez.com/news/165)

**Score:** 207 | **Comments:** 66 | [Post](https://news.ycombinator.com/item?id=48142108)

Redisの作者antirezが開発したDS4（DwarfStar4）は、DeepSeek V4を動かせるローカルLLM推論ランタイム。MacBook（96GB RAM）を主ターゲットにMetalバックエンドで動作し、NVIDIAのDGX Sparkにも対応。作者は「初めてローカルモデルをシリアスな用途に使えると感じた」と述べ、「AIは単なる提供サービスであってはならない」という哲学的立場を強調している。

### Key Discussion Points

- **gcr**: DS4はDeepSeek 4を実行できる小さいLLM推論ランタイムで96GB VRAMが必要と文脈を補足
  - **foresto**: DS4といえばゲームコントローラーの方が一般的に知られていると添える
- **karmakaze**: MetalがプライマリターゲットでDGX Spark向けCUDAサポートあり、llama.cppとGGMLへ謝辞。RAMオフロードは未対応でissueが立っていると指摘
- **zmmmmm**: DeepSeek V4 Proはコーディング用途に「十分な知性」の飽和点に近づいている。Anthropicのビジネスモデルが崩れる時点はどこかと疑問提起
  - **loeg**: 「より賢いモデルは小さいモデルが単純に到達できない問題を解ける」と反論、待ち時間を増やせば同等にはならないと主張
  - **jofzar**: 結局はコストの問題であり、現状のClaude 4.6の価格帯が「普通のビジネス」の上限に近いと現実的な視点を提示
- **FuckButtons**: Claudeに驚くほど近い性能。imatrix量子化がOpen Router等の推論バックエンドより優れており、自分のサーバープロセスを自覚した挙動は今まで見たことがないと驚き
  - **stavros**: 個人的なテストでDeepSeek V4 ProはSonnetよりコーディングが上（ただし遥かに遅くコストは大幅安）
- **somewhatrandom9**: 2〜3年後に16GB RAMのローカルデバイスで同等性能が動くか、新しいムーアの法則が生まれるかと期待と疑問
  - **hadlock**: 「640GBあれば誰にでも十分なはず」（Bill Gatesの有名な発言のパロディ）
  - **lwansbrough**: ワールドモデル（言語ではなく行動を予測するモデル）との組み合わせで真の知性に近づく可能性を議論

---

## 4. [First public macOS kernel memory corruption exploit on Apple M5](https://blog.calif.io/p/first-public-kernel-memory-corruption)

**Score:** 295 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=48139219)

Califチームが、AppleがARMのMemory Tagging Extension（MTE）を活用して5年・数十億ドルをかけて開発したMIE（Memory Integrity Enforcement）を5日間でバイパスするApple M5向け初の公開macOSカーネルメモリ破壊エクスプロイトを公開。AIシステム「Mythos Preview」が脆弱性発見と攻撃戦略に貢献し、小規模チーム＋AI能力が歴史的に巨大組織が必要だった作業を実現できることを示した。

### Key Discussion Points

- **jp0001**: LLMが今後数年間「Rube Goldberg式の複雑な脆弱性」を量産し続けるだろうと予言
- **dgellow**: 世界はLLMのセキュリティへの影響に備えられていない。55ページのレポートを読むのが楽しみと期待
  - **runlevel1**: LLM生成コードを理解せずに本番投入する開発者が急増しており、リーダーの無理な速度要求や人員整理が問題を加速させていると懸念
  - **iqihs**: ブルーチームやエンジニアが手をこまねいているわけではないと反論
- **vsgherzi**: 詳細が少ない。バグがどのようにMTEをすり抜けたのか非常に気になる
  - **dorianmariecom**: MTEの仕組みを解説（メモリ割り当てに秘密タグを付与し一致しない場合はクラッシュ）
  - **vsgherzi**: データオンリー攻撃（プログラムの動作を変えずに攻撃）であればMTEはトリガーされないと説明、Appleがfbounds checkingを使わなかった理由も疑問
- **yieldcrv**: 現状は$10万のバグバウンティだが、beta版macOSで不正アクセスとしてフレーミングすれば$150万になる可能性を示唆
  - **vsgherzi**: これはLPE（ローカル権限昇格）であってRCEではないと技術的に訂正
- **AgentME**: 「MozillaもAppleもMythosを宣伝するために偽の脆弱性を作っている」（皮肉）
  - **baq**: Ciscoも同様に誇張したCVEを発行した事例があると指摘
  - **bstsb**: Appleが作ったのではなく外部チームが報告したものだと訂正

---

## 5. [RTX 5090 and M4 MacBook Air: Can It Game?](https://scottjg.com/posts/2026-05-05-egpu-mac-gaming/)

**Score:** 517 | **Comments:** 139 | [Post](https://news.ycombinator.com/item?id=48137145)

RTX 5090をThunderbolt経由でM4 MacBook Airに外付け接続し、QEMU上のLinux VMにPCIパススルーしてx86エミュレーション（FEX-Emu）でゲームを実行する実験。Cyberpunk 2077の4KレイトレーシングがネイティブmacOSの3fpsから27fpsへ改善。LLM推論のプリフィル速度も最大120倍高速化し、ゲームよりもAI活用としての実用価値に注目が集まっている。

### Key Discussion Points

- **matthewfcarlson**: Apple Silicon Mac Proの開発時から長年VMチームにGPUパススルーを要望してきたと打ち明ける
  - **m132**: DriverKitインターフェースでPCIe BARのユーザースペースマッピングは既に可能で、あとはQEMUなどのVMMが対応するだけと補足
  - **scottjg**: Virtualization.frameworkがある程度GPUパススルーをサポートしており、最近QEMUにLinuxゲスト向けvirtio-gpuパッチも入ったと紹介
- **Aurornis**: LLM用途でのプリフィル速度改善こそが最大の実用的価値。4Kトークンのプロンプトで17秒→150ms（実質113倍高速）
  - **superlopuh**: なぜMacのTTFTがこれほど悪いのか、MLXの最適化不足も一因かと疑問
  - **Moosdijk**: 「120倍」と書かれているが正確には113倍とペダンティックに指摘
- **djmips**: Doom（OpenGL非対応で現macOSでは動かない）もMoltenVKへのVK_NV_glsl_shader追加でより少ない作業で動くのではと提案
  - **scottjg**: MoltenVKへの入門プロジェクトとして面白そう、Doomの問題が単一オペレーションなら遥かに簡単と反応
- **divbzero**: eGPUはApple Siliconで動かないと思っていた（Apple公式もIntelのみと記載）と驚き
  - **steelbrain**: macOS上で動いているのではなくLinux VMへのパススルーである点を明確化
- **geerlingguy**: tinygrad driverより遥かに優れた結果、Appleが1.5GB制限以上をサポートしてくれれば良いのにと希望
  - **scottjg**: TinyGradが遅い原因は自動運転ハードウェア向けに最適化が集中しているためで、オープンLLMモデル向けの最適化が不足していると推測

---

## 6. [Gyroflow: Video stabilization using gyroscope data](https://github.com/gyroflow/gyroflow)

**Score:** 19 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=48107766)

Gyroflowは、アクションカメラ（GoPro、Sony、Insta360など）が内部に記録したジャイロスコープデータを使ってビデオを安定化するオープンソースアプリ。GPUアクセラレーション、ローリングシャッター補正、10ビット動画レンダリングに対応し、Adobe Premiere・DaVinci Resolve・Final Cut Pro向けのプラグインも提供。Windows、Linux、macOS、Android、iOS対応。

### Key Discussion Points

- **Gigachad**: Sony A7 IIIはジャイロデータを記録しないため試すことができないと残念がる

---

## 7. [Codex is now in the ChatGPT mobile app](https://openai.com/index/work-with-codex-from-anywhere/)

**Score:** 238 | **Comments:** 116 | [Post](https://news.ycombinator.com/item?id=48140529)

OpenAIのコーディングエージェント「Codex」がChatGPTモバイルアプリに統合され、スマートフォンからいつでもコードを書かせることが可能になった。無料プランでも利用可能で、クラウド上のコードベースに対してリモートでエージェントを動かし、外出先でブランチ作業を進めてデスクトップで確認するというワークフローが実現できる。

### Key Discussion Points

- **pickleRick243**: コーディングエージェントに慣れると「バイブコーディング」（実際のコードを見ずにエージェントを方向付ける）が可能になり、外出先で下書きを用意しデスクトップでレビューする使い方が実用的
  - **nextaccountic**: ローカルに10GBのRustプロジェクトがある場合はどうするの？クラウドアップロードが必要かとの現実的な疑問
  - **LoganDark**: 1週間エージェントでgit管理ツールのリファクタリングを実施、コードを一度も直接読まずにエージェントのコメントから問題を指摘するだけで大部分が機能していると報告
- **Alifatisk**: Codexが無料プランに含まれているのは驚き。ただし全操作がトレーニングに使われる
  - **orionsbelt**: 「最初の一撃は無料（依存させるため）」と皮肉
  - **beering**: 設定でトレーニングを無効化できないかと質問
- **jumploops**: 数ヶ月間モバイルCodexを使用したが、キーボードと比べてエージェントへの指示が不十分になり技術的負債が増えると正直な感想
  - **keyle**: リモートマシンに対して電話で話しかけてコーディングして不満という状況を面白がる
  - **aiscoming**: 「えー」という言葉を多く使うのは話すスピードがタイプより速いためで、思考が追いつくのを待っているサインと分析
- **charlie90**: iOS/Androidは閉鎖的すぎてエージェントが活躍できないが、AI-nativeデバイスが数年内に登場し状況が変わると予測。Appleは今頃緊張しているだろう
  - **shepherdjerred**: コンパイルと実行ができれば高性能なiPadの使い道ができると期待
  - **adithyassekhar**: Androidはアクセシビリティ権限でアプリがデバイス操作を制御できると補足

---

## 8. [New Nginx Exploit](https://github.com/DepthFirstDisclosures/Nginx-Rift)

**Score:** 319 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=48138268)

CVE-2026-42945: NGINXのrewriteモジュールに2008年から潜んでいたクリティカルなヒープバッファオーバーフロー脆弱性が公開された。`rewrite`ディレクティブの長さ計算フェーズと実際のデータコピーフェーズで異なるエスケープ処理が行われる不一致が原因で、NGINX 0.6.27〜1.30.0が影響を受ける。修正版は1.31.0と1.30.1。公開されたPoCはASLR無効環境でのRCEを実証。

### Key Discussion Points

- **RagingCactus**: ASLRが有効なら安全と言うのは完全に誤り。ASLR回避は時間と技術の問題でありLLMエージェントが毎週その難易度を下げている。今すぐパッチを当てることを強調
  - **kro**: 遠隔から到達可能な脆弱性を軽く見るべきでない。ただしrewriteとsetの組み合わせは10年使ってきて一度も使ったことがないと前提条件の珍しさも言及
  - **easterncalculus**: 「AIがサイバーを解決する」と言う人々と過小評価する人々は同一層だろうと皮肉
- **danslo**: 前提条件は「rewriteディレクティブに?を含む置換文字列」＋「正規表現キャプチャグループを参照するsetディレクティブ」の組み合わせ
  - **argee**: nginx.confの具体的な設定例（該当箇所）をGitHubリンクで提示
  - **codedokode**: rewriteは最近使われることが少ない、PHPとApacheの時代の名残では？と疑問
- **neomantra**: F5公式情報と緩和策（unnamed captureをnamed captureに変更）、OpenResty向けパッチ情報も紹介
- **JSR_FDED**: 「クロスリクエストヒープ風水（heap feng shui）」という用語を初めて見たと驚く
- **jcalvinowens**: PoCがASLRを無効化していることをGitHubリンクで明示
  - **linkregister**: ワーカープロセスはmasterからforkされるため同一メモリレイアウト→繰り返しクラッシュから読み取りオラクルを作れる可能性があり、信頼性の高いDoSにもなると技術的解説

---

## 9. [Access to frontier AI will soon be limited by economic and security constraints](https://writing.antonleicht.me/p/cut-off)

**Score:** 15 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48143284)

Anton Leichtが、フロンティアAIへのアクセスが近い将来大きく制限されると主張する論考。主な要因は3つ：①AIモデルのAPIからの蒸留（競合他社への知識流出）・悪用リスクによるセキュリティ制約（Anthropicの「Mythos」サイバーセキュリティモデルは一部企業のみに公開）、②フロンティアモデルの計算コストが月次で上昇し続けているという本質的希少性、③米国政府による地政学的なアクセス管理。結果として米国企業を優遇した階層型アクセスシステムが生まれると予測する。

### Key Discussion Points

コメントなし。

---

## 10. [Tesla Wall Connector bootloader bypasses the firmware downgrade ratchet](https://www.synacktiv.com/en/publications/exploiting-the-tesla-wall-connector-from-its-charge-port-connector-part-2-bypassing)

**Score:** 75 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=48140953)

Synacktivの研究者がTesla Wall Connector Gen3のファームウェアダウングレード防止機構（セキュリティラチェット）をバイパスする手法を公開。アップデーターはラチェット値をチェックするがブートローダーはしないという設計上の欠陥を突き、古い署名済みファームウェアをブートさせることで過去にパッチされたUDSセキュリティ脆弱性（デバッグシェルやネットワーク認証情報へのアクセス）が再利用可能になる。

### Key Discussion Points

- **thejazzman**: Wall ConnectorがWiFiを失うと充電スケジュールが無視されて不規則に動作する問題に注意。従量課金（TOU）契約の利用者は車側で直接タイマーを設定すべきと警告
- **m463**: Gen3はガレージ内に「TeslaWallConnector_xxx」というWiFiアクセスポイントを常時放送するが無効化手段がなく、本記事はそのダウングレード回避策も塞いだものだと嘆く
- **mystraline**: 「所有者が自分のハードウェアを制御するためにファームウェアをダウングレードすることはハックではない」と原則論を主張
- **486sx33**: 「ウォールチャージャーのブートローダーをハックしたい理由は何か、友人のために聞いている」（皮肉混じりのジョーク）

---

## Trends

今週のHacker Newsトップ10に共通するテーマは**プライバシーとセキュリティへの強い関心**と**AI能力のコモディティ化**の二軸に集約される。

**プライバシー・セキュリティの側面**では、RAV4テレメトリー除去記事が687点という高スコアを獲得し、車両が常時データを送信していることへの反発が鮮明になった。Mullvad VPNのフィンガープリント問題、NginxのRCE脆弱性（18年物の欠陥）、Tesla Wall Connectorの研究はいずれも「信頼していたものが実は安全でなかった」という不信感を反映している。M5カーネルエクスプロイトは、AI支援によってゼロデイ発見のスピードと小規模化が進んでいることを示す象徴的な事例として注目を集めた。

**ローカルAI・AIコモディティ化の側面**では、antirezのDS4とRTX 5090 eGPUの記事が共に200点超えを達成し、「大手クラウドAPIに依存しない自前AI実行環境」への需要が高まっていることを示した。「フロンティアAIへのアクセスが制限される」という論考や「DeepSeekがSonnetに匹敵する」というコメントが示すように、AIの民主化と集権化の間の緊張関係がコミュニティの重大関心事となっている。
