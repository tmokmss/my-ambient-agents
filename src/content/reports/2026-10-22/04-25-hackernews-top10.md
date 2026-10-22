---
title: "Hacker News トップ10 サマライズ（2026年10月22日）"
date: "2026-10-22T04:25"
category: "summary"
summary: "LiteLLM の PyPI 汚染、Railway の情報漏えい、eMudhra CA 鍵漏えい、PHP/GitLab の重大脆弱性などセキュリティ話題が中心"
tags: ["hackernews", "security", "supply-chain", "llm"]
---

## 1. [Compromised LiteLLM 1.107.0 on PyPI Installs a Credential Stealer and Backdoor](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/)

**Score:** 460 | **Comments:** 157 | [Post](https://news.ycombinator.com/item?id=50181114)

PyPI 上の LiteLLM 1.107.0 の全7ホイールに、認証情報窃取コードとバックドアが仕込まれていた。`cook.pth` が Python プロセス起動のたびに SSH 鍵・クラウド認証情報・CI/CD シークレット・LLM プロバイダーキーなどを収集して外部へ送信し、`sitecustomize.py` が1時間ごとに第2段コードを取得・実行する。公開 GitHub のソースには該当コードがなく、BerriAI の非公開リリースパイプラインが改変されたソースからビルドしたと SafeDep は推定している（PyPI からは削除済み、1.106.2 は無害）。

### Key Discussion Points

- **linsomniac**: 偽の認証情報を置いて侵入を検知する canarytokens.org の存在を紹介。
  - **TacticalCoder**: 攻撃を受けたこと自体に価値を見いだし、囮のソフトウェアウォレットを置く発想に近いと補足。
- **crossroadsguy**: sandbox-exec や Lulu のルールでは防げない。許可ポップアップ疲れで何でも許可し、依存の大量インストールにも慣れてしまう。OS 側で対策すべきだと主張。
  - **isityettime**: サンドボックスで防げる。自分は Nono というツールを使い、プロキシ経由で認証情報を注入している。
  - **fdsjgfklsfd**: 認証が厳しすぎる現状を皮肉った。
- **rsanheim**: 1〜2年で LiteLLM への重大な攻撃は2回目（今年3月にも発生）。
  - **halJordan**: 侵害された一人は組織のオーナーで、セキュリティ文化が上層から欠けていると指摘。
  - **atmosx**: もうアップグレードせず旧バージョンに留まる、とのこと。
- **detente18**（LiteLLM 側）: 事態は封じ込め済みで、経緯をブログで公開したと報告。
  - **joshheitzman**: 「Claude Code が GitHub CLI の OAuth トークンを応答に埋め込む」という説明は苦しい。コーディングエージェントにシェル全権を与えるべきではないと批判。
  - **fny**: 新種の攻撃ではなく新種の怠慢だ。
- **pkulak**: コミット5.5万件のプロジェクトでなぜこうなるのか。
  - **Aurornis**: 公開コミットには該当コードがなく、ビルド・デプロイ系が侵害されたと見られる。

## 2. [Security Disclosure](https://blog.railway.com/p/security-disclosure-wednesday-october-21st)

**Score:** 369 | **Comments:** 211 | [Post](https://news.ycombinator.com/item?id=50188228)

Railway は、顧客の環境変数を保存するシステムで異常なアクセスを検知した。暗号化された環境変数に第三者がアクセスし、一部は復号された内容を取得された可能性がある。AI 推論プロバイダーを狙う、プラットフォーム企業への一連の攻撃の一部と見ており、上流プロバイダーに鍵の失効を依頼済み。顧客には環境変数と registry 認証情報のローテーションとログ確認を求めている。全デプロイは一時停止中。

### Key Discussion Points

- **vintagedave**: 欧州の早朝に鍵をローテーションしたが、デプロイ停止で新しい鍵を反映できずサービスが止まった。盗まれた鍵と壊れたサービスのどちらがましか、と嘆く。
  - **averrous**: 東南アジアでは午前9時45分で、顧客が怒っている。
  - **piazz**: 「デプロイ不可」を最初に告知すべきだった。
  - **dylanz**: 同様にデータストアの鍵を回して、アプリが壊れた。
- **vldszn**: PHP の RCE、eMudhra 証明書、Railway と重なった「セキュリティ的に荒れた一日」だと指摘。
  - **netvarun**: PingCap の件が最大かもしれないが注目されていない。
  - **tom1337**: GitLab の件もある。
- **theturtletalks**: Postiz の創業者が、鍵がすでに悪用されたのに Railway が沈黙していたと X で投稿している。
  - **lifeisloving**: 月商30万ドル規模の会社がなぜ Railway で動いているのか。
- **piazz**: OpenRouter の鍵が悪用されたが被害は2ドル程度。メール整理エージェントはこの通知を50通の定型メールに埋もれさせていた。
  - **phyzome**: エージェントにメールボックスを任せるのは危うい。
- **fbrncci**: 一年で初めて取った休暇の日に、担当する複数のスタックが一斉に影響を受けた。
  - **jazzyjackson / jjulius / Liuser**: 休暇を優先すべき。バス係数1は経営側の問題だ。

## 3. [mitmproxy adds --emudhra option](https://github.com/mitmproxy/mitmproxy/commit/169234499088fc2c414644a67efaed3d64ae2e3b)

**Score:** 332 | **Comments:** 88 | [Post](https://news.ycombinator.com/item?id=50189232)

mitmproxy に、漏えいした eMudhra の中間 CA 秘密鍵で証明書に署名する `--emudhra` オプションが追加された。鍵と相互署名ルートは `certs.py` に埋め込まれ、TLS ハンドシェイクのテストも付く。直前のコミットでは certifi バンドルから eMudhra の CA が削除されており、漏えいした信頼経路を実際に使える形にしたものだ。

### Key Discussion Points

- **Confiks**: 秘密鍵を同梱するだけで、リクエストごとのブルートフォースまではしていないのが惜しい。
  - **literalAardvark**: 通信側のコードしかなく、ブルートフォースは意味がない。
  - **cyphar**: 搬送・ハッシュ・署名のほうが、総当たりよりCPUを使うかもしれない。
- **zetazzed**: eMudhra は今どうなっているのか（訴訟、国有化、通常営業）。
  - **gmerc**: 寡占的な企業で、何も起きないだろう。
- **mhils**（mitmproxy 開発者）: HN に載るとは思わなかった。リリース 12.3 は公開済みで、`--emudhra` を渡すだけで使える。
- **CGamesPlay**: これは emSign ルート経路を使う。AAA ルート経路も有用で、古い IoT 機器には AAA が効く。
  - **mhils / codys**: AAA ルートを加える PR がすでにある。
- **shrubble**: スマートTVとメーカーの通信を傍受できるのか。
  - **the_snooze**: まだ eMudhra を信頼している機種なら可能。
  - **kevin_nisbet**: 独自 CA やピン留めを使う機器もある。
  - **quotemstr**: 比較的新しい機器や、CRL を確認する機器では難しい。

## 4. [There isn't an easy exploit for this PHP vulnerability](https://eliastaylor.com/noexploit/)

**Score:** 278 | **Comments:** 135 | [Post](https://news.ycombinator.com/item?id=50188948)

PHP の脆弱性を巡る騒ぎに対し、著者は「簡単な悪用手段は存在しない」と主張する。GitHub の PoC は標準構成の PHP では動かず、多くは LFI（ローカルファイルインクルージョン）が既にあることを前提としている。LLM が検証されていない悪用コードへの信頼を広めたこと、PHP コア関係者の強い警告、AI 時代の不安がパニックの原因だとし、Log4Shell 級ではないと述べる。

### Key Discussion Points

- **nemothekid**: 脆弱性の仕組みの解説が少なく、「Claude が危険と言った」だけで広まった印象がある。Heartbleed と比べ、実際の PoC も少ない。
  - **jdprgm**: 実際に大量の侵害が起きたのか疑問だ。
  - **letmevoteplease**: Calif と Wiz に詳しい解説がある。Claude は使われていない。
- **hn773746483**: SNS や自称専門家の煽りが大きい。CVSS 10 でも、すべての環境で使えるわけではない。
  - **iaaan**: セキュリティ業界は半分が SNS 上のペルソナ作りだ。
- **kgeist**: 試した PoC の一つは LFI が前提で、もう一つは stale write を起こすだけで RCE にはならなかった。
  - **bunderbunder**: 20年分の全バージョンに影響し、利用者全員が対象なので、深刻と見る根拠はある。
  - **fwlr**: 同日に OpenAI の脆弱性対応イニシアチブが発表された点も指摘。
- **nickysielicki**: WordPress、Joomla、Drupal の Docker イメージはいずれも悪用可能だった（Wiz）。
  - **wavemode**: 記事は RCE に至る過程が曖昧。
  - **Chaosvex**: 定番の三つ組だ、と皮肉った。
- **rectang**: PHP 公式の発表では RCE が確認済み。LLM がすぐ再現するだろうと予想。

## 5. [GitLab critical patch release](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/)

**Score:** 275 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=50185869)

GitLab 19.5.1 などのパッチリリース。重大な脆弱性は CVE-2026-110264（CVSS 10.0）の正規表現コンパイラの整数オーバーフローで、条件次第で未認証ユーザーによる任意コード実行につながり得る。セルフマネージド環境は直ちにアップグレードが必要で、GitLab.com と Dedicated は対応済み。高深刻度では、OmniAuth と LDAP の自動リンクによるアカウント乗っ取り、OAuth/OIDC discovery のキャッシュポイズニングも修正された。

### Key Discussion Points

- **jimmyl02**: joaxcar による優れた発見だが、これが今日一番の脆弱性ではない点が恐ろしい。
  - **xmcp123**: 2020年代なので、上位3つに入れれば運がいい。
  - **jacquesm**: 一時間もすればもっと大きなものが出る。
- **miduil**: 数週間で少なくとも二つ目の正規表現関連 CVE。未認証でも届く点が深刻だが、ログ確認の指針があるのは助かる。
  - **dvdkon**: 悪用には org-mode ファイルの描画が必要で、認証なしにできる経路がわからない。
- **ezekg**: GitLab の問題なのか Ruby の問題なのか判別できない。
  - **bradly**: Ruby の修正のバックポートかもしれない。
  - **pqdbr**: Rails かもしれない。
- **perlgeek**: 古い Perl のスタックオーバーフローと似た話か。なぜ独自の正規表現エンジンを持つのか。
  - **wiml**: GitLab は Ruby の Onigmo エンジンのフォークを同梱している。
- **beaconflint**: 台数の多い環境では `gitlab-rake gitlab:env:info` でノードごとのバージョンを確認できる。

## 6. [Rust Style Guide](https://google.github.io/styleguide/rustguide.html)

**Score:** 244 | **Comments:** 133 | [Post](https://news.ycombinator.com/item?id=50186010)

Google の Rust スタイルガイド。公式スタイルと Rust API Guidelines を基礎に、rustfmt の利用を求める。Rc/Arc や clone を避けて借用を優先すること、newtype や名前付きフィールドの活用、`unsafe` の局所化と `SAFETY:` コメント、公開 enum への `#[non_exhaustive]` などを規定する。Chromium 向けの方針として、小さな crate を推奨している。

### Key Discussion Points

- **japgolly**: 公開 enum に `#[non_exhaustive]` を勧めるのは疑問。新しいケース追加時にコンパイラが更新箇所を示す利点が失われる。
  - **ninkendo**: 後方互換を守るなら公開 enum の設計に慎重になる必要がある。
  - **akshayshah**: 単一チームなら妥当だが、巨大リポジトリや protobuf の enum 意味論とは合わない。
  - **i2talics**: 外すと変種追加が semver 破壊になる。エラー型は開いた enum、Option のようなものは閉じた enum が向く。
- **monocasa**: Chromium の「極小 crate、モジュールをネストしない」指針は、2010年代の「関数はできるだけ小さく」に似て不安だ。
  - **evmar**: Cargo では crate にコストがかかるが、Google 系ビルドでは細粒度のライブラリが普通。
  - **skohan**: crate はコンパイルの単位なので、再ビルド削減に効く。エージェントの grep にも有利かもしれない。
  - **i2talics**: crate の粒度は抽象化の設計を制約しない。
- **epage**: 「型名は修飾せず使う」は `IoError` のような冗長な名前を生む。一般的でない名前は修飾したい。
  - **Blikkentrekker**: ガイドは曖昧な場合の例外を認めている。
  - **wtetzner**: 一律のルールはどちらの方向でも良くない。
- **preommr**: Google の看板は以前ほど価値がない。
- **afdbcreid**: rust-analyzer では `#[rust_analyzer::prefer_underscore_import]` で拡張トレイトを `as _` で補完できる。

## 7. [Epic Games Inc v Apple Inc](https://www.judgments.fedcourt.gov.au/judgments/Judgments/fca/single/2026/2026fca1552)

**Score:** 109 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=50190168)

オーストラリア連邦裁判所の Epic Games 対 Apple 判決。サーバーが 403 を返し、Wayback にも有効なスナップショットがなかったため、コメントから推測した要約。iOS の代替配布経路（直接ダウンロードや代替ストア）を、Apple の公証と自動スキャンを条件に認める命令が含まれるようだ。アプリ内課金の手数料差にも言及があるとみられる。

### Key Discussion Points

- **isodev**: 自分のデバイスを自由に使えるという点で良い知らせ。豪州・ブラジル・EU・日本で代替ストアが使えれば、多くのインディーズには十分で、米国を無視する選択肢も考えられる。
- **Telaneo**: 命令の条文を引用。代替配布は、セキュリティ・プライバシー目的の自動スキャンと、Apple または適格な第三者による公証を条件とする。
- **andyferris**: 条項 9(c) は物販とデジタル商品の手数料差を無くす内容に読める。「合理的なコスト」の例外があり、Apple がどう悪意ある遵守をするかが焦点。
- **somerandom2407**: 代替ストアに誘導されても、そのアプリは使わなくなる。Apple の審査を信頼している。
- **shaboinkin**: 開発ツールの対価を、Apple が別の形で取ろうとするのではないか。

## 8. [Chain of Thought for Humans](https://www.boristhebrave.com/2026/10/18/chain-of-thought-for-humans/)

**Score:** 52 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50154100)

面接で候補者に思考を声に出してもらった経験から、著者はパズルゲーム The Witness で思考を声に出しながら解くことを試し、解く効率と没入感が上がったと報告する。ラバーダック・デバッグと同様に暗黙の前提が表に出て、恣意的な選択を戻りやすくなり、作業記憶の助けにもなりうるとする。ホーソン効果の可能性も認めつつ、約6,000人のメタ研究で中程度の効果があることを引用している。

### Key Discussion Points

- **mceachen**: 面接では「私をインターンだと思って考えを話してほしい」と明示し、候補者を安心させている。
- **xorvoid**: 難しい作業では自分用のメモに思考を書き出す。開始時の不安が減る。
- **jamienk**: 精神分析の自由連想は、言いたくないことを避けようとして難しい。
- **Waterluvian**: 面接で一番価値があるのは、候補者の思考過程を見ることだ。
- **algoth1**: 著者は内的独白が聞こえないタイプの人なのだろうか。

## 9. [The recently proposed o(n log n) integer multiplication algorithm [pdf]](https://web.maths.unsw.edu.au/~davidharvey/research/subnlogn.pdf)

**Score:** 48 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50190455)

整数乗算が O(n log n) より漸近的に速い（o(n log n)）とする最近の提案を論じる、David Harvey のメモ。PDF のため本文は取得せず、コメントで言及された Lean 形式化リポジトリの README と議論から要約した。README によれば、Mathlib のチューリングマシン上で、乗算が O(n (log n)^(1-κ)) 時間で動くことを Lean で証明している（κ は約 2^-14.38）。

### Key Discussion Points

- **jdb1729**: 記事の「Lean の形式証明はまだない」という点に対し、platypii とともに完全な形式化を行ったと報告（指数は改善中）。
- **jdb1729**: 固定有限体上の多項式乗算は新結果の直接の対象外。素数位数体上の DFT については同様の Lean 証明を得た。
- **flebron**: タイトルは小文字の o(n log n) が重要で、O(n log n) は FFT で既知だった。
- **MiroslavPokorny**: 結論は「主張はもっともらしいが、論文は読んでいない」。
- **Kapura**: 著者自身が論文を読みきれず、Fable に説明させて正しそうだと述べる点に、不健全さを感じる。

## 10. [Using LLM for confidence scoring is a bad idea](https://rumple.github.io/blog/2026/10/20/asking-llm-for-confidence.html)

**Score:** 28 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50176082)

LLM に自信度を数値で答えさせても、それは他の文章と同じ生成物で、証拠の強さを測った値ではなく、正解率と較正もされていないと論じる。同じ質問でも数値が揺れ、「本当に？」と聞くだけで変わる。代替として、根拠となる情報源の有無や複数回答の一致度といった観測可能な情報から、外部のルールで信頼度を計算し、実績と照合して較正することを勧める。

### Key Discussion Points

- **jrflo**: 悪いと断言するだけでなく、実際の精度データがほしい。LLM の自信度は案外外れていない可能性もある。
- **jvanderbot**: 入力クラスだけを出力語彙にして、次トークン確率を信頼度に使えないのか。
- **YmFzZTY0ZGFkZHk**: 勤務先は LLM に採点と信頼区間を出させているが、出力は信頼できない。
- **madrox**: 統計学では、モデル構築よりも出力の解釈に時間を使う。大規模データで信頼度の意味を忘れがちだ。
- **hexapus**: LLM は次トークン予測器で、推論の見た目を予測しているだけだと再確認すべきだ。

## Trends

- **セキュリティ事件の集中**: 1位 LiteLLM のサプライチェーン攻撃、2位 Railway の環境変数漏えい、3位 eMudhra の CA 秘密鍵、4位 PHP、5位 GitLab と、同日に重大インシデントが重なった。鍵のローテーションが新たな障害になるという Railway のコメントが印象的だった。
- **AI が絡む不安と過熱への懐疑**: LiteLLM では LLM キーが標的となり、PHP では「LLM が検証されていない悪用コードを広めた」という見方が出た。10位は LLM の自信度が信用できないという議論で、AI の出力を検証なしに信じることへの警戒が共通している。
- **規制とプラットフォーム**: 豪州の Epic 対 Apple 判決は、代替ストアと手数料を巡る流れが続いていることを示す。
- **開発者の作法**: Google の Rust スタイルガイドは、公開 enum や crate の粒度で意見が分かれた。思考の言語化（8位）や、乗算アルゴリズムの Lean 形式化（9位）も話題だった。
