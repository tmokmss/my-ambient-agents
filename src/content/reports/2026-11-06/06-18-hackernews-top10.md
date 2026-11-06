---
title: "Hacker News Top 10 (2026-11-06)"
date: "2026-11-06T06:18"
category: "summary"
summary: "musl の crypt() 経由で SSH 認証を突破する sshole、Claude Code のメール送信問題、MS Paint の RCE など"
tags: ["hackernews", "security", "ai", "claude-code"]
---

## 1. [sshole](https://sshhole.com)

**Score:** 2519 | **Comments:** 615 | [Post](https://news.ycombinator.com/item?id=50378228)

Alpine や OpenWrt などの musl ベースの Linux で、PAM なしの OpenSSH が、パスワード欄が `*`（ロック済み・鍵認証のみ）のアカウントに対して 257 バイト以上の任意のパスワードを受け入れてしまう脆弱性。musl の `crypt()` が失敗時に `*` を返し、SHA-512 crypt が 256 バイト超のパスワードを拒否するため、失敗結果がロック済みのハッシュ欄と一致してしまう。Alpine のクラウドイメージは既定ユーザーが passwordless `doas` を持つため影響が大きく、OpenSSH のアップグレードか `PasswordAuthentication no` で回避できる。

### Key Discussion Points

- **mpyne**: 攻撃者の狙いは `crypt($pw, $hash) == $hash` を成立させること。musl がエラー時に `*` を返すことと、OpenSSH が別ユーザーのハッシュを渡す経路が重なって成立する、と仕組みを解説。
  - **chuckadams**: `crypt()` の挙動は異常で、正規化ラッパーなしに今世紀のシステムで使うべきではない。
  - **amluto**: musl は `$ret == $hash` の用途では実は安全で、OpenSSL 側が変な経路を通って短さの検知結果を忘れるのが問題だと補足。
- **BoppreH**: 「パスワードなし」と「ハッシュ失敗」の両方に `*` を使うのは帯域内シグナリングの典型例で、同種の問題がまだ見つかるだろう。
  - **hedora**: 例外は制御フローを複雑にするので万能な解ではない。
  - **__MatrixMan__**: 型システムで用途の違う文字列を区別して混同を防げる。
- **amluto**: musl はこの種の失敗を既に回避していたが、全体像はもっと悪いと指摘。
  - **tchebb**: ソルトが `x` のケースでも `*` が返るだけで一致せず、コードは正しいはず、と反論。
- **aljgz**: 「マジック文字列を使わない」が原則。失敗は専用の失敗値で返すべき。
  - **saguntum**: Rust のような言語なら低レベルでも構造的に禁止できる。
- **nxobject**: musl が十分な監査なしに「便利さ」のため中核の暗号関数を変更してきたのは残念で、評価が少し下がった。
  - **rustyhancock**: AI が複雑なバグを見つける話に偏りがちだが、説明されれば誰でも気づく単純な落とし穴が多数ありそうだ。

## 2. [Claude Code sends your email address to websites](https://github.com/anthropics/claude-code/issues/107757)

**Score:** 839 | **Comments:** 276 | [Post](https://news.ycombinator.com/item?id=50385272)

Claude Code が Web 検索や curl 系コマンドの `User-Agent` にアカウントのメールアドレスを入れて送信していた問題。報告者の一部はスパムの増加と結びつけている。v2.1.317 以降は該当呼び出しの前に確認を求める組み込みモッド `cc-plugin-privacy` が既定で有効になり、Claude Code の担当者は次のリリースでモデルのコンテキストからメールアドレスを削除すると表明した。

### Key Discussion Points

- **varenc**: 多くの報告が SEC API 利用時に集中しており、SEC のドキュメントが User-Agent にメールを要求していることが原因ではないか、と調査結果を共有。
  - **T-R**: SEC データ用の連絡先メールを別に持っているが、個人メールが警告なしに送られたのを実際に確認した。
  - **devsda**: エージェント向けに 402 Payment Required がどう扱われるか気になる。
- **agentdev001**: 同種の過去 Issue（Max アカウントのメールがコンテキストに自動注入される件など）を一覧にして、再発であることを示した。
  - **neya**: Claude 擁護派が多いと皮肉った。
  - **beeandapenguin**: 決定論的フックが働かない件を挙げ、「高層ビルから紙の家になった」と評した。
- **mk89**: Claude に切り替えてから職場メールに名前入りのスパムが増えたと報告。
  - **crazygringo**: 既定で送るわけではなく、特定の用途でのみ起きる。因果は偶然の可能性が高い。
  - **weird-eye-issue**: LinkedIn や GitHub のスクレイピング、メールの推測検証が通常の原因。
- **mpoteat**: 数日前に把握し、2.1.317 以降に `cc-plugin-privacy` を入れて決定論的にブロックしていると説明。
  - **mkl**: 「we」は誰か。Anthropic はログインメールが system prompt に入っていることを以前から知らされていたはず。
  - **il**: そもそもなぜ既定動作だったのか。
- **lydia_hallie**（Claude Code 担当を名乗る）: @author タグの幻覚対策でメールをコンテキストに入れたのが原因で、curl の User-Agent に連絡先として入れてしまった。メールをコンテキストから削除する更新を来週初めにリリース予定。
  - **smashed**: サイトが「何をしているか説明せよ」と尋ねるようになれば、メール削除だけでは防げない。
  - **217**: 大規模な内部リソースがあるのに、修正が来週に持ち越されるのはなぜか。

## 3. [MS Paint Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-83844)

**Score:** 433 | **Comments:** 163 | [Post](https://news.ycombinator.com/item?id=50384233)

Microsoft Paint 11.0.0.0 以上 11.2605.91.0 未満に影響する境界外読み取り（CWE-125）による RCE で、認証なしの攻撃者がネットワーク経由でコードを実行できるとされる。cve.org のページは JS 描画のため、CVE 公開 API のレコードから要約した。詳細な攻撃経路は不明で、コメントでも議論になっている。

### Key Discussion Points

- **pasteleft**: Paint がリモートから、ユーザー操作なしにコードを実行できるのか。もっと情報が必要だ。
- **greyhound1**: 修正版は Microsoft Store から入手する必要があり、Windows Update には出なかった。
  - **gadrev**: Store の Paint ページを開いたら自動更新されたが、何が起きたかの表示はなかった。
  - **lossyalgo**: パッチのためにファイアウォールで Store を許可し直す必要があり面倒。
  - **Natsu**: 11.2609.401.0 と出たが、修正版かは Microsoft の説明が一貫せず不明。
- **everylostbit**: 影響は 11.0.0.0 以上 11.2605.91.0 未満のみで、古いバージョンなら安全そうだ。
  - **tjohns**: Paint が 11.2605 まで進んでいることに驚く。何を変えているのか。
  - **Kapura**: Windows 10 の mspaint はこの番号形式ではない。
- **xlayn**: なぜ Paint にネットワーク経由の攻撃面があるのか。
  - **gruez**: Microsoft のリンクにはその記述がなく、元の引用元は別だと推測。
- **protocolture**: 「ユーザー操作不要」なら Paint が起動していなくても、インストールされているだけで攻撃されうるのか。
  - **to11mtm**: インデックス作成やサムネイル描画に関係するのではないか、と仮説を提示。

## 4. [Window Sweaters](https://github.com/saragordic/window-sweaters)

**Score:** 288 | **Comments:** 92 | [Post](https://news.ycombinator.com/item?id=50381383)

macOS のウィンドウに編み物風のボーダーを付ける趣味のアプリ。アプリごとの配色やジグザグ柄、ボーダー幅の調整ができ、Homebrew か ZIP で入れる（Apple の公証は未取得）。README は「コーディングエージェントにインストールさせる」文言も案内している。

### Key Discussion Points

- **gordic_sara**: プロダクトデザイナーで、初めてのオープンソース。信頼面が気になるならソースからビルドできると説明し、デモ動画を README に追加したと報告。
  - **furyofantares**: 天気に応じて柄を変える自分版を作りたい。
  - **nico**: 素早く動画を追加したのは良い対応。
- **StilesCrisis**: 実際のスクリーンショットがなく、画像は空のウィンドウの合成画像ばかりなのは不思議。
  - **dvh**: 「写真が必要な記事ほど写真がない」という法則を引用。
  - **lpghatguy**: README の AI 生成モックは良く見えるが、実物はそう見えない。
- **hmokiguess**: Stage Manager との制約があり JankyBorders の利用をやめた。
- **AlotOfReading**: Android の UI に似た糸のボーダーとタイルを設定済みで、デスクトップにも広げるか迷っている。
- **Brajeshwar**: 冬の手の冷え対策には、デスクマット型のキーボードハンドウォーマーが良かった。

## 5. [The Hackintosh Reborn](https://www.naut.ca/blog/2026/11/05/the-hackintosh-reborn-with-ai/)

**Score:** 272 | **Comments:** 132 | [Post](https://news.ycombinator.com/item?id=50383057)

Apple が ARM に移行し macOS 27 で x86 のサポートを打ち切ったことで終わりかけた Hackintosh を、AI が再び活性化させているという記事。筆者は ThinkPad T490 上の macOS 26 で AI コーディングツールを使い初の iOS アプリを作った。Snapdragon ノートでの macOS や Switch OLED での iOS など、AI による最近の進展を紹介している。

### Key Discussion Points

- **justauserid**: かつては OS X を他のハードで動かしたかったが、今は Mac のハードで macOS 以外を動かしたい。
  - **colordrops**: パワーユーザー向けには Linux が商用 OS よりはるかに優れている。
  - **throwaway_new_1**: ハードが良くなった一方でソフトウェアが苦戦している。
- **ecshafer**: Mac のハードは最高だが macOS は好きではない。
  - **RunSet**: Asahi は Apple 由来のものを除去しないと表明しており、完全には消せない。
  - **keyle**: ARM ノートで Linux を動かす苦労を考えると、期待しすぎないほうがいい。
  - **nerdywordy**: Omarchy 4.5 が M1〜M3 をサポートし、新しい機種も作業中。
- **vielite1310**: Asahi Linux が M5 をサポートしてほしい。
  - **xnx**: 一番好きだったのは Bootcamp で使う 17 インチ MacBook Pro。
  - **turtlebits**: AI に adb で不要アプリを削除させるなど、気に入らない部分を直させればいい。
- **solarkraft**: iPad に macOS がないのは残念で、欲しいなら非 Apple ハードになる。
  - **RunSet**: 陳腐化した機種の bootloader は、e-waste 削減のため解除を義務づけるべき。
  - **y1n0**: iPad を Mac の外部画面にして使えるが、体験はひどい。
- **haunter**: ARM CPU のおかげで Mac が Switch 1/2 のゲームをネイティブ実行できるのは x86 の終わりの兆候。
  - **speed_spread**: 業界標準仕様に基づく ARM / RISC-V の開かれたエコシステムができるまでは信じない。

## 6. [Inkling 2 Small](https://thinkingmachines.ai/news/inkling-2-small/)

**Score:** 149 | **Comments:** 53 | [Post](https://news.ycombinator.com/item?id=50386338)

Thinking Machines Lab の Mixture-of-Experts モデル（総 594B、アクティブ 17B、画像入力、推論の強度設定対応）。Artificial Analysis Intelligence Index で 31 を記録し、エージェント型コーディングや視覚などの向上を謳う。現状は Tinker 上のクローズド提供で、外部の安全性テスト後に Apache 2.0 でウェイトを公開する予定。

### Key Discussion Points

- **Jackobrien**: 米国発として初めて実用水準になりうる open モデルで、12 ヶ月以内に Opus 5.5 級が出る期待がある。
- **epsteingpt**: 小規模チームが短期間で DeepSeek 4.1 を上回るモデルとチューニング基盤を作ったことに期待。
- **itkovian_**: 学習がすべて nvfp4 で行われ、この精度では最良のモデルで、速さの理由だと指摘。
- **a11r**: 自社が勝者でないベンチマーク表示は新鮮で、GLM 5.3 flash を上回る主張が本当なら印象的。
- **tcdent**: まだ SOTA ではないが、米国の open ウェイト陣営の進歩は速い。

## 7. [Pwn.college](https://pwn.college/)

**Score:** 66 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50387796)

Arizona State University が運営する、無料で実践型のサイバーセキュリティ教育プラットフォーム（「道場」）。学習者は dojo ごとの課題を解き、帯（belt）を獲得しながら進む。

### Key Discussion Points

- **bitforger**: hackthissite.org、OverTheWire、SmashTheStack など、類似の学習サイトを挙げて懐かしんだ。
- **Vaushite**: スコアボードの最高点が 10 で、チュートリアル完了時の点数と同じだと指摘。

## 8. [Closed AI models dominate the price-performance frontier](https://village.dev/blog/closed-ai-models-now-dominate-the-price-performance-frontier/)

**Score:** 49 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=50387546)

2026 年 10 月 31 日時点で、open-weight モデルが最良の買い得だった価格帯は 3%（6 月は 41%）に低下したと分析。これまで open が勝ったのは DeepSeek など安価な新モデルの直後のみだった。理由として、クローズド勢が旗艦を蒸留して安価版を作れること、価格帯ごとにファミリーを揃えること、大規模提供で推論が安いことを挙げる。

### Key Discussion Points

- **2001zhaozhao**: API 価格基準なら、サブスクは 15〜40 倍の割引になり、差はクローズド側にさらに有利になる。
- **gregwebs**: 汎用ベンチは個別タスクに当てはまらない。コーディングに限れば DeepSeek が多くのベンチで Pareto 最適。
- **wisty**: 安いモデルは旗艦の蒸留版が多く、元モデルの開発者が有利で、資金力もある。
- **hedora**: どの点がどのモデルか不明で、自前マシンでの限界コスト計算が分からず使えない。
- **yogthos**: 数か月で新しい open モデルが出て均衡は変わる。open は検証・カスタマイズでき、提供側の都合に左右されない点が重要。

## 9. [Nvidia Kubernetes Engine (NVKE)](https://github.com/dsx-ai-factory/nvke)

**Score:** 46 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50387738)

NVIDIA の GPU インフラ上でマネージド Kubernetes サービスを運用するための管理プレーン。各ワークロードクラスタが独自のコントロールプレーン、etcd、ノードプールを持つ。現在はプレビューで本番非推奨、実機の対応基盤は NVIDIA Infra Controller (NICo) のみ。

### Key Discussion Points

- **jimbokun**: 通常の Kubernetes でも GPU にデプロイできるのでは、と NVKE の位置づけを疑問視。
- **jeremy_carroll**: AI が書いた PR のようで、製品の説明ではなくデータの羅列だと README を批判。
- **random3**: OpenStack や EMC Rex-ray など昔の基盤製品を思い出した。

## 10. [How accurately did science fiction stories predict AI?](https://jamesyu.org/science-fiction-predictions-of-ai/)

**Score:** 18 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50388263)

約 50 の SF 作品を、AI の実際の発展にどれだけ近いかで採点（構築方法 40%、能力 35%、展開 25%）。1 位は Ted Chiang『The Lifecycle of Software Objects』、2 位は Heinlein『The Moon Is a Harsh Mistress』。トランスフォーマーやチャットボットから数学研究への道筋を予見した作品は少ないとする。

### Key Discussion Points

- **pugio**: 今の傾向では SF の未来を信じにくく、AI が発達しなかった理由を作るか、人間が何をしているのかを説明する必要がある。
- **NitpickLawyer**: Kim Stanley Robinson の『Aurora』は AI が目覚めていく過程の描写が秀逸。
- **andrewflnr**: Peter Watts が抜けているのは問題で、『Blindsight』の Rorschach の声は初期の LLM に似ている。
- **ajb**: 正統派ハード SF 作家のほうが、ファンタジー寄りの作家より予測が外れていた。
- **eesmith**: 記事中の Le Guin の引用（「SF は予測ではなく記述」）は都合のよい切り取りでは、と指摘。

## Trends

- **セキュリティ**: musl の `crypt()` と SSH の組み合わせ、MS Paint の RCE、Claude Code のメール送信と、「想定外の相互作用」や「既定動作」が穴になる話が上位に並んだ。コメントでは帯域内シグナリングやマジック文字列の危険性が繰り返し論じられた。
- **AI エージェントの副作用**: Claude Code の件は、エージェントが持つ情報がすべて外部に出うるという教訓を示した。Hackintosh の復活も AI が開発を後押ししている例。
- **AI モデル競争**: Inkling 2 Small（米国発の open ウェイト予定）と、クローズドモデルが価格性能で優位という分析が並び、open とクローズドの力関係が注目された。
- **関連グループなし**: トップ10内に同一イベントや同一製品を扱う記事の組はなかった。
