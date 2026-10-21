---
title: "Hacker News トップ10（2026年10月21日）"
date: "2026-10-21T17:03"
category: "summary"
summary: "PHP の重大 RCE 脆弱性と緊急リリース、eMudhra 中間 CA の脆弱な鍵、DuckDB 2.0 LTS などが話題"
tags: ["hackernews", "php", "security", "duckdb"]
---

## 1. [PHP 8.2.35](https://github.com/php/php-src/releases/tag/php-8.2.35)

**Score:** 682 | **Comments:** 275 | [Post](https://news.ycombinator.com/item?id=50180873)

認証なしのリモートコード実行につながる2件の重大脆弱性（CVE-2026-109618 / CVE-2026-109619）を修正するセキュリティリリース。完全な緩和策はなく、更新が唯一の対処。PHP 8.2 は 2026年12月31日にサポート終了予定。

> **関連:** #3「PHP2Shell: AI uncovers critical RCE in PHP」も参照（同一脆弱性の発見者による技術解説）
> **関連:** #5「Today's PHP Security Release, and How We're Strengthening PHP Security」も参照（同一脆弱性に対する PHP Foundation の声明）
> **関連:** #7「Patch the Planet」も参照（同一脆弱性の協調開示を主導した OpenAI の発表）

### Key Discussion Points

- **nr378**: Wiz・Calif・OpenAI による協調開示のようだと、関連記事のリンクをまとめた。
  - **esquire_900**: OpenAI とセキュリティ企業が2か月公表を伏せ、誰が先に修正を得るかを内輪で決めたうえ情報の封じ込めにも失敗した、と批判。
  - **chinathrow**: 情報漏えいの扱いが杜撰で、PR 目的に見えると指摘。
- **OscarCunningham**: 2つ目の脆弱性がありそうだとする投稿を紹介。
  - **dannyw**: パッチは `if (ZEND_HAS_OOM())` の分岐が大量に入る不格好なもので、見落としがありそうだと懸念。
  - **modeless**: Fil-C によるメモリ安全ビルドが実用的な防御になり得ると主張。
- **spenvo**: 公開から約2時間半経っても Docker の公式イメージが出ず、デプロイ方針を見直したくなったと不満。
  - **amykhar**: イメージは出たが今度は pecl に問題が出ていると報告。
- **basilgohar**: 20年の PHP ホスティングで、サーバーを先回りして止めたのは初めて。史上最悪級だと述べた。
  - **danso**: AI エージェントで脆弱性の発見と悪用が速くなった時代の、最も主流な事例だと指摘。
- **tux3**: GitHub Security Advisory の詳細が公開済みだと共有。
  - **simias**: PHP が longjmp() を使うことに皮肉を述べた。

## 2. [Eight Bits of Trust; eMudhra's CA keys cracked in milliseconds](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/)

**Score:** 618 | **Comments:** 272 | [Post](https://news.ycombinator.com/item?id=50177916)

eMudhra の中間 CA 8本の秘密鍵が「4」のような極端に弱い値で、公開証明書から1秒未満で復元できた。Chrome と Firefox は該当中間 CA をブロック済みで、Mozilla はルートを削除予定。一方で失効や CT を確認しない TLS クライアント、OS のバンドル、IoT 機器はなお信頼しており、curl・Python・Node が偽造証明書を受け入れる例も示された。ファームウェアを更新できない機器は 2039年7月の有効期限まで影響が残る。

### Key Discussion Points

- **jasonjayr**: 記事の「更新するだけ」という助言は、更新できない機器が本当の問題だという点を引用して指摘。
  - **panarky**: pip・Node・Bun など独自に証明書を同梱するツールや、Bun 製の Claude Code のような単体バイナリは OS の更新では直らないと指摘。
  - **__MatrixMan__**: ネット接続できるのにユーザーが証明書を入れられない機器は存在すべきでないと主張。
- **john_strinlai**: 最初の報告者 Wayne によると、発見には google/paranoid_crypto をそのまま使っただけで、CCADB の他の証明書は問題なしだったという。
  - **renhanxue**: そのリポジトリは 2026年8月にアーカイブ済みだと皮肉った。
- **jlmorton**: 信頼する CA が100もあるのは過剰だったのでは、と指摘。
  - **Scott_Helme_**（記事の著者）: ルートだけで約350、中間 CA を含めると3,600超が少なくとも1つの主要事業者に信頼されていると補足。
- **irusensei**: 弱い鍵を使えば、更新できない IoT 機器を脱獄できるのではと提案。
  - **Scott_Helme_**: 可能だが、同じ手口で第三者が通信を復号することもできると指摘。

## 3. [PHP2Shell: AI uncovers critical RCE in PHP](https://www.wiz.io/blog/php2shell-php-rce)

**Score:** 367 | **Comments:** 130 | [Post](https://news.ycombinator.com/item?id=50180836)

Wiz Research が PHP コアのメモリ安全性の欠陥2件（CVE-2026-109618 / CVE-2026-109619）を報告した。認証なしの RCE とメモリ開示につながり、PHP 5.4 以降のほぼ全バージョンが影響を受ける。原因は致命的エラー処理で壊れた状態が後続リクエストに残ることで、フロンティア AI モデルがエクスプロイト作成を大幅に楽にしたという。

> **関連:** #1「PHP 8.2.35」も参照（同一脆弱性の修正リリース）
> **関連:** #5「Today's PHP Security Release, and How We're Strengthening PHP Security」も参照（同一脆弱性に対する PHP Foundation の声明）
> **関連:** #7「Patch the Planet」も参照（同一脆弱性の協調開示を主導した OpenAI の発表）

### Key Discussion Points

- **fwlr**: OpenAI・Wiz・Calif・LCFR_HAX が独立に発見した形になっており、誰が最初かが不明だと整理。
  - **magnat**: Calif の報告と OpenAI の報告が同じ日（8月11日）で、同一の根本原因だったのは偶然が過ぎると疑問を呈した。
  - **ToValueFunfetti**: 学習データ経由で複数モデルに伝わったとは考えにくいと反論。
- **Topfi**: 報告から公開まで2か月かかった理由と、承認までの1か月が分からないと疑問を呈した。
  - **kylestanfield**: 6年前に修正済みのバグが今なぜ RCE になるのか、リンクは正しいのかと質問。
  - **varispeed**: 諜報機関が悪用している場合、捜査を終える猶予を与えるためではと推測。
- **airtnp**: Wiz と Calif の記事から、5〜6の問題が2つの CVE に対応するとまとめた。
  - **chuckadams**: どれもメモリ安全性の問題で、C は今の時代に適さないと主張。
- **WJW**: 両記事は解放後メモリを RCE にする手順を飛ばしているのでは、と質問。
  - **cowlevel**: ヒープを破壊できる攻撃者は、関数ポインタ上書きなどで実質RCEに到達できると防御側は想定すべきだと説明。
- **edh649**: Calif の方が Wiz より早く開示を始めた（8月11日対8月24日）ようで、関係者の動きが分かりにくいと指摘。
  - **geerlingguy**: AI 補助で書かれた技術記事が、要点に到達するまで長すぎると不満。

## 4. [DuckDB 2.0.0 LTS “Cinnamon Teal”](https://duckdb.org/2026/10/21/announcing-duckdb-200)

**Score:** 211 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50181136)

機能面を重視した LTS リリース。CONNECT 文を備えた Quack クライアント・サーバープロトコルや、オブジェクトストレージ向け非同期 I/O が入った。VARIANT 型、CLI のエージェントモード、PEG ベースの新 SQL パーサ（デフォルト）、トリガー、自前ホスト可能な拡張リポジトリ、ICU に代わる組み込みの時刻・照合サポートも追加された。

### Key Discussion Points

- **RobinL**: EC2 の高コア数マシンで大幅に速くなった。以前は 64 vCPU 付近で頭打ちだったが、今は 128〜192 vCPU でも使い切れる。
  - **gopalv**: 非同期 I/O でボトルネックが CPU やメモリ帯域に移るため、他の演算子の性能向上にも直結すると解説。
  - **dicey**: Splink 利用者として、Spark を使う場面がまだあるのか質問。
- **paoliniluis**: クライアント・サーバー構成が可能になり、多数のサーバーを使うデータ基盤の置き換えになり得ると期待。
  - **bambax**: サーバーといってもインプロセスのままで軽量なのが良いと評価。
  - **jtbaker**: HTTP サービス化して負荷分散や Cloud Run でのゼロスケールができるのが楽しみだと述べた。
- **nicoritschel**: アルファ版を小規模組織の集中分析サーバーとして本番運用中で、Postgres wire protocol や Arrow Flight で接続する拡張を作ったという。
- **mikkelam**: 勤務先での用途が見つからないと質問。
  - **skeeter2020**: GB・MB 規模のデータを個人やチーム単位で扱う場合に向くと回答。
  - **tcdent**: Rust 製プロファイラが書き出す Parquet を DuckDB で集計・結合していると紹介。
- **xnx**: 分析エンジンとしてだけでなく、データの取り込みや整形にも便利だと称賛。

## 5. [Today's PHP Security Release, and How We're Strengthening PHP Security](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/)

**Score:** 146 | **Comments:** 69 | [Post](https://news.ycombinator.com/item?id=50182987)

PHP Foundation が、2つの重大 CVE の修正リリースと経緯を説明した。OOM の欠陥は2024年の外部監査で見つかっていたが、修正が人員不足やトレードオフの対立で止まっていたことを「構造的な失敗」と認めた。セキュリティ担当の増員と意思決定プロセスの見直しを進めており、企業や自治体に資金支援を求めている。

> **関連:** #1「PHP 8.2.35」も参照（同一脆弱性の修正リリース）
> **関連:** #3「PHP2Shell: AI uncovers critical RCE in PHP」も参照（同一脆弱性の発見者による技術解説）
> **関連:** #7「Patch the Planet」も参照（同一脆弱性の協調開示を主導した OpenAI の発表）

### Key Discussion Points

- **ernubufiei**: Chainguard が解禁の6時間以上前に修正済みイメージを公開してエンバーゴを破ったことを、非常に問題だと批判。
- **bowersbros**: 解禁から2時間経っても Docker イメージが利用できないと不満。
- **dannyw**: リークを受けて Calif が踊るアニメ動画を公開したことに驚いた。
- **fg137**: エンバーゴ破りに結果が伴わなければ、同じことが繰り返されると指摘。
- **lol768**: 漏えい後の PoC が実際の攻撃にどこまで近かったのか疑問を呈した。

## 6. [Compromised LiteLLM 1.107.0 on PyPI Installs a Credential Stealer and Backdoor](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/)

**Score:** 145 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50181114)

PyPI の LiteLLM 1.107.0 は全7つの wheel に悪意あるファイル3つが含まれ、Python プロセスの起動ごとに認証情報窃取とバックドアが動く。SSH 鍵、クラウド／CI 認証情報、AI ツールのトークン、ブラウザのパスワード、LLM プロバイダのキーなどを外部に送信し、バックドアは1時間ごとに GitHub 上のファイルからサーバー先を取得してコードを実行する。SafeDep は BerriAI のリリースパイプラインが改変済みソースから wheel を作ったと中〜高い確度で見ている。リリースは PyPI から削除済み。

### Key Discussion Points

- **madamelic**: 攻撃者がどうやってファイルをリリースに紛れ込ませたのかが分からないと疑問を呈した。
  - **（返信）**: 有効な返信は取得できなかった。
- **hmokiguess**: メンテナの GitHub コメントを紹介。OSS ユーザーは 1.106.2 以前に固定すること、10月27日に開示予定の別の脆弱性を修正した非公開リリースがあることが書かれている。
- **baddash**: LiteLLM がまたニュースになっていると反応。
- **stbenjam**: uv や npm などは、公開から24〜48時間はインストールしないクールダウンをデフォルトにすべきだと提案。
- **tech_solver**: またかとして、メンテナの信頼性に疑問を述べた。

## 7. [Patch the Planet: global response coordination as agents uncover vulnerabilities](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/)

**Score:** 137 | **Comments:** 73 | [Post](https://news.ycombinator.com/item?id=50181175)

OpenAI の発表。研究者、メンテナ、インシデント対応者をつなぎ、オープンソース全体の重大な脆弱性への対応を支援する取り組み「Patch the Planet」を紹介している（RSS の説明文に基づく要約）。PHP の脆弱性の協調開示を主導した話として語られている。

> **関連:** #1「PHP 8.2.35」も参照（同一脆弱性の修正リリース）
> **関連:** #3「PHP2Shell: AI uncovers critical RCE in PHP」も参照（同一脆弱性の発見者による技術解説）
> **関連:** #5「Today's PHP Security Release, and How We're Strengthening PHP Security」も参照（同一脆弱性に対する PHP Foundation の声明）

### Key Discussion Points

- **nr378**: OpenAI は AI がすべてを成し遂げたように見せているが、Calif によれば特別なハーネスや非公開モデルは使われておらず、人間の知見が大きかったと指摘。
- **digitaltrees**: 問題を作った側が「お金を払えば解決する」と迫る構図だと皮肉った。
- **alper**: 古い版へのバックポートを人に尋ねるのは、コード生成企業として奇妙だと批判。
- **12837615**: 10億ドル分のトークンより、OSS の QA に直接資金を出す方が効果的だと主張。
- **grokx**: 名称は映画『Hackers』の「Hack the planet」由来だろうと指摘。

## 8. [Oregon lawmakers approve money to buy an iconic waterfall listed on Redfin](https://apnews.com/article/oregon-waterfall-for-sale-lawmakers-996de63462d49ec3ad9bee1629fb9488)

**Score:** 66 | **Comments:** 38 | [Post](https://news.ycombinator.com/item?id=50182526)

記事本文は取得できなかったため、コメントに基づく要約。オレゴン州の議員が、Redfin に出ていた有名な滝（Abiqua Falls）の購入に約210万ドルを承認した。所有者はベネディクト会修道士を支える非営利団体で、春に売りに出されていた。

### Key Discussion Points

- **toomuchtodo**: 公共の資産を公有地として守るための妥当な支出だと評価。
- **2OEH8eoCRo0**: 玄武岩が見えて美しいと感想。
- **cucumber3732842**: 無最低・無最高価格の公開オークションで、州の提示額が受け入れられたという経緯を引用。
- **SBNakta**: あるべき場所に戻った感じがすると歓迎。
- **BeetleB**: 太平洋岸北西部は住むには最悪だと、ジョーク交じりに語った。

## 9. [Tiny possum and glider thought extinct for 6000 years found in remote West Papua](https://www.bbc.com/news/articles/cp814l80pw2o)

**Score:** 29 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50162044)

記事本文は取得できなかったため、タイトルとコメントに基づく要約。約6000年前に絶滅したと考えられていた小型のフクロネズミ類とモモンガ類が、西パプアの奥地で見つかったという内容。

### Key Discussion Points

- **swiftcoder**: 林業会社に再び絶滅させられる前に、現地の先住権が森で確立されることを願う。
- **triyambakam**: パプアは驚くほど多様で、同様の発見がさらに続いても不思議ではないと述べた。

## 10. [Rust off Rails: The opinionated web stack for the AI era](https://rustoffrails.org/)

**Score:** 14 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50183727)

ライブラリではなく Markdown の指示書として提供される、Rust 製フルスタック Web アプリ向けの方針集。人間は要件を与え、コーディングエージェントがそれ以外を生成する。フォーマット、lint、テストが SQLite と Postgres の両方で通って初めて完了とみなす。

### Key Discussion Points

- **xutopia**: Rails の慣習を取り入れた Rust フレームワーク Loco が既にあり、この名称は紛らわしいと指摘。
  - **（返信）**: 有効な返信は取得できなかった。

## Trends

- **PHP の重大脆弱性が最大の話題**: #1・#3・#5・#7 は同じ PHP RCE（CVE-2026-109618 / 109619）の別側面で、修正リリース、発見者の技術解説、PHP Foundation の声明、OpenAI の協調開示を扱う。議論の中心は、AI による発見の実態、エンバーゴ破り、Docker イメージ遅延などの協調開示の運用だった。
- **サプライチェーンと信頼の基盤**: eMudhra の脆弱な CA 鍵（#2）と LiteLLM の PyPI 侵害（#6）は、更新できない機器や自動インストールの危うさを浮き彫りにした。
- **AI とソフトウェア**: 脆弱性発見への AI 利用（#3, #7）に加え、エージェント向けスタック（#10）や DuckDB 2.0 の CLI エージェントモード（#4）など、AI 前提の設計が広がっている。
