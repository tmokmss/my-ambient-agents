---
title: "Hacker News トップ10 (2026-10-18)"
date: "2026-10-18T15:46"
category: "summary"
summary: "DeepSeek の検索/取得 API、Holmes ドキュメンタリー批評、Meta のスクレイピング規約などを含む HN 上位10件の要約"
tags: ["hackernews", "ai", "web-scraping", "hardware"]
---

## 1. [DeepSeek search and fetch – $0.75 per 1000 successful requests](https://api-docs.deepseek.com/guides/search/)

**Score:** 387 | **Comments:** 197 | [Post](https://news.ycombinator.com/item?id=50138531)

DeepSeek が自社検索エンジンによる Search API と、ページを Markdown で返す Fetch API を公開した。どちらも成功（HTTP 200）1,000リクエストあたり $0.75 で、1アカウント毎秒5リクエストの制限がある。DeepSeek Harness、Claude Code、Codex 経由のサーバー側呼び出しは 2026年11月1日まで無料。

### Key Discussion Points

- **nikvdp**: ホスト型検索プロバイダは何に使うのか。自作の searxng-ai-kit のほうが無料で安いと主張。
  - **hobofan**: 遅延の安定性やデータ処理の保証が必要な組織はホスト型を使う。社内機密の漏洩経路にもなるため。
  - **Havoc**: searxng はすぐレート制限され、結果も不安定なので使うのをやめた。
- **thombles / frenchtoast8**: 価格比較。Brave Search API は $5、Kagi API は $12（いずれも1,000件あたり）。
  - **wmchen**: Ceramic.ai は $0.25 で、OpenCode の MCP として十分使えている。
  - **PhilippGille**: Kagi の公式 MCP サーバーは LLM 利用を禁じる TOS と矛盾しているように見える。
- **Doohickey-d**: Cloudflare や Anubis の保護ページはどう扱うのか。
  - **weird-eye-issue**: 状況次第。米国の大手サービスは UA を明示するので簡単にブロックされる。
  - **czk**: camoufox と住宅用 IP の組み合わせが一般的。
- **dsco**: DeepSeek Flash を毎日使っており、最先端モデルとほぼ互角で、検索が差別化要素だと評価。
  - **redox99**: Opus 5.5 とは互角ではない。
  - **rjh29**: アプリ丸ごとの vibe coding では最先端ではないが、誘導しながらの作業には優秀。

## 2. [How the Elizabeth Holmes documentary "You Can See Everything" is deceiving](https://www.readtheprofile.com/p/elizabeth-holmes-documentary-you-can-see-everything)

**Score:** 249 | **Comments:** 313 | [Post](https://news.ycombinator.com/item?id=50137620)

Lance Oppenheim と Nathan Fielder によるエリザベス・ホームズのドキュメンタリーを論じた記事。カメラアングル、クローズアップ、編集、情報を明かす順序で観客の感情を誘導していると指摘する。人は先に感情で反応して後から事実を探すため、この映画は観客自身が欺かれやすいことを示す仕掛けになっている、という主張。

### Key Discussion Points

- **why_at**: 映画は薄く伸ばされた内容で、興味深い部分はすでに語られ尽くしており、記事ほど衝撃は受けなかった。
  - **Betelbuddy**: 著者はこの種の分析を仕事にしているから感銘を受けるのだろう。
  - **a3w**: 事実を扱った別のドキュメンタリーを知りたい。
- **samschooler**: 良くできた映画だが、記事が催眠術のように扱うのは言い過ぎ。
  - **nicce**: ホームズが最も人を操った人物とは限らず、もっと操作的な人物は大企業を率いている。
- **vvpan**: 女性のほうが法に厳しく追及されるという感想。
  - **mikebenfield / lelanthran**: データは逆で、司法制度には男性に不利な偏りがある。
  - **lazide**: 女性が起訴・有罪になるのは極めて稀。
- **dtagames**: 監督のフィールダーは偽の状況や偽ドキュメンタリーを得意とする人物で、記事はそこを書いていない。
  - **noah_buddy**: どんなドキュメンタリーも編集で特定の視点を押し出している。
- **zeraholladay**: 一般の人は芸術形式としてのドキュメンタリーを理解していない。
  - **WarmWash**: 映画のカットが時間の飛びだと認識できない人が多い。

## 3. [Legal experts warn Meta's new terms still grant broad scraping permissions](https://www.niemanlab.org/2026/10/legal-experts-warn-metas-new-terms-still-grant-broad-scraping-permissions-despite-language-changes/)

**Score:** 125 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=50139692)

Meta がビジネスアカウント向け新規約から「train」の語を削除し、用途を「広告およびビジネス製品」に限定した。ただし、アカウントに「関連する」ウェブサイトの広範なスクレイピングは引き続き可能で、robots.txt より優先されうると法律専門家は警告している。（元サイトは 403 のため、Wayback Machine の 2026-10-18 時点のスナップショットに基づく）

### Key Discussion Points

- **Retro_Dev**: Meta は robots.txt があっても既にスクレイピングしている。今回の変更はより強力なスクレイピングを正当化するためなのか。
- **Bender**: robots.txt に頼ってはならず、Meta のボットは見分けやすいので接続ごと遮断すべき。
- **Heronsunny**: UA によるブロックはもう無意味。meta-externalagent はローテーションし、一部は Meta 以外の ASN から来る。ASN と TLS JA4 の組み合わせで遮断したら効いた。
- **mitxela**: 許可があろうとなかろうと、どうせやるのだから規約は関係ない。

## 4. [Parser Combinators](https://t3.at/blog/2026-10-17-parser-combinators/)

**Score:** 125 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50139067)

正規表現と tree-sitter のような重いツールの中間にある手法として、パーサーコンビネータをアニメーション付きで解説する記事。文字列の一部を消費して値と残りを返す小さなパーサーを、連接・map・繰り返しなどで組み合わせる。例として ping コマンドの出力を型付きオブジェクトにパースし、同等の正規表現より読みやすく保守しやすいと主張する。

### Key Discussion Points

- **BoppreH**: Python なら、公式ドキュメントにない `re.Scanner` が正規表現ベースのトークナイザとして便利。
- **ArneCode**: アニメーションは直感的。ただしパーサージェネレータと比べ、値のマッピングや展開のコードが増える欠点がある。
- **marginalia_nu**: スライド形式で1ページにまとまっておらず、前の章を参照できず検索もできない。
- **boomlinde**: 最初のアドレスはホスト名の可能性もあり、IP 前提でパースすべきではない。複数の構文を受け付ける例を示す好機だった。
- **justinnk**: 「A Parser for Things is a function from Strings to Lists of Pairs of Things and Strings!」という詩を紹介。

## 5. [RepRapMicron](https://github.com/VikOlliver/RepRapMicron/wiki)

**Score:** 122 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=50141076)

RepRap 3D プリンタを拡張し、ミクロン級の造形を広く普及させるプロジェクト（μRepRap）。GCODE、GRBL、NEMA17 ステッピングモータなど身近な部品を使う。PIKA V0.02 では2Dでミクロン精度の再現性があり、可動範囲は X/Y/Z 軸とも約8mm。直径4μm未満の樹脂液滴の吐出系も動作する（README に基づく）。

### Key Discussion Points

- **CarVac**: 関連動画として YouTube を紹介。同チャンネルには前提技術の開発動画もある。
- **godber**: 「18か月後には自作 RAM が作れる」と皮肉混じりに期待。
- **swiftcoder**: ここまで厳しい公差が達成できるとは思わなかった。マイクロ製造の新しい波を期待。
- **le-mark**: 自分自身の1/1000サイズ版を作れるのか、そもそも目的は何か。
- **thenthenthen**: 市販部品の方針は理解できるが、使われている USB 顕微鏡は画質が悪い。

## 6. [Open MicroManipulator – A sub-micrometer 3D motion control plattform](https://github.com/0x23/MicroManipulatorStepper)

**Score:** 96 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50140001)

低コストで組み立てやすい、サブミクロン精度の XYZ マイクロマニピュレータ。パラレルキネマティクス構造と小型ボールジョイントで剛性と可動範囲を確保する。市販ステッピングモータを30 kHz のクローズドループで駆動し、「磁気ギア」方式でエンコーダ分解能を30倍にして50nm刻みの動きを実現する。G-code を USB シリアルで受け付ける。分解能と絶対精度は別物で、後者はかなり劣ると明記されている。

### Key Discussion Points

- **RobotToaster**: RepRapMicron も似たことをしていると紹介（#5 参照）。
- **option_greek**: 作者は伝説的。YouTube の連載が素晴らしいのに、宣伝もなく静かに公開している。

## 7. [Anthropic's proposed AI safety bill only kicks in if 50 deaths or $1B in damages](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-proposed-ai-safety-bill-only-kicks-in-if-50-deaths-or-usd1-billion-in-damages-are-on-the-line-proposal-would-effectively-make-the-commerce-department-the-only-agency-capable-of-stopping-an-ai-model)

**Score:** 66 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=50141429)

Anthropic が提案した AI 安全法案は、50人以上の死亡または10億ドル以上の損害が見込まれる場合にのみ発動し、商務省が事実上、AI モデルを止められる唯一の機関になるという。記事本文は取得時に切り詰められていたため、見出しと概要のみに基づく。

### Key Discussion Points

- **createful**: この種の「安全」法案はオープンソースモデルを危険と位置づけて排除する規制の虜（regulatory capture）。責任は運用企業が負うべき。
- **airstrike**: 次は「安全認証済みAI」に10億ドルの保険と監査を求め、大手だけが政府・企業向けに提供できるようになる。
- **arw0n**: Anthropic は何をしても世論で勝てない立場にある。
- **aabajian**: 高性能なオープンモデルは1万〜2.5万ドルのハードで動かせ、法で防ぐのはトレントの遮断のようなもの。
- **giancarlostoro**: 価値の小さい会社が AI 攻撃で潰されても、加害側が全責任を負うべき。

## 8. [Show HN: The Zelda timeline to catch up before the Ocarina of Time remake](https://legendofhyrule.com/)

**Score:** 42 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=50140769)

『ゼルダの伝説』シリーズの非公式ファンサイトで、各作品のストーリーを発売順に要約している。『時のオカリナ』以降は子供時代・大人時代・敗北した勇者の3つの時系列に分岐する構成を示す。

### Key Discussion Points

- **bovermyer**: 初代、リンクの冒険、神々のトライフォース、時のオカリナをクリアした。リメイクは Switch 2 専用なのか。
- **hyperhello**: 各作品は独立した出来事で、ランダムなデータをクラスタ分析しているようなものではないか。
- **sharkbot**: Faces of Evil、Wand of Gamelon、Crossbow Training、ハイラルウォリアーズ系も入れるべき。

## 9. [Websites are closing their doors to AI agents](https://www.theverge.com/ai-artificial-intelligence/1013195/ai-agents-blocked-web)

**Score:** 31 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50141657)

OpenAI、Meta、Google などが AI エージェントに何でも代行させようとしている一方で、人気サービスはそれを許していないという Verge の記事。（WebFetch は不可だったため、Wayback Machine のスナップショットで確認できた冒頭部分のみに基づく）

### Key Discussion Points

- **dawnerd**: 「自分たちはスクレイピングするが、されるのは嫌」という姿勢。小規模事業者のサイトは過負荷になり、結局 Cloudflare が得をする。
- **variety8675**: 競合との比較が容易になるため、Amazon のような企業はエージェントを締め出したがる。
  - **xnx**: 利便性の堀がなくなれば、会員価格や監視価格などで商取引はより敵対的になる。
- **BorisMelnik**: 将来はエージェント向けに広告や JS のない XML/JSON 版が用意されるだろう。
- **canucktrash669**: OpenAI のブラウザ操作は、Cloudflare や各クラウドに系統的にブロックされ使い物にならなくなった。

## 10. [Will it be a golden age or a dark age for mathematics (and science)?](https://terrytao.wordpress.com/2026/10/18/will-it-be-a-golden-age-or-a-dark-age-for-mathematics-and-science/)

**Score:** 24 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=50141681)

Terence Tao のブログに掲載されたゲスト記事（著者は Francesco Maggi）。LLM は強力な証明を出せるが、機械生成の証明は人間には読みにくく、人間による数学の理解が中心課題になると論じる。人間の数学者を増やす必要性や、功績・査読・学生の育成、フロンティア LLM の私的独占にも目を向け、公的に統治されたインフラで「黄金時代」を選ぶよう促す。

### Key Discussion Points

- **nestorD**: 数学を超えて示唆に富む。特に「秘密の共有」の指摘は印象的で、学習拒否の設定を入れる人はほとんどいない。
- **bananaflag**: Tao 本人が書いた記事が読みたい。
- **dfxm12**: 米国では教育・研究予算の削減や外国人研究者の締め出しですでに暗黒時代に向かっている。
- **simianwords**: LLM の効果が小さいなら、私的に管理されていても問題ないはずでは。
- **itsalwaysgood**: 暗黒時代は競争的で、黄金時代は協調的なシナリオだ。

## Trends

- **AI エージェントとウェブの摩擦**: DeepSeek の安価な検索/取得 API(#1)、Meta の規約変更(#3)、サイトによるエージェント遮断(#9)が、データアクセスの経済性と許可の問題で重なっている。
- **AI 規制と人間の役割**: Anthropic の法案(#7)や Tao のブログのゲスト記事(#10)では、大手への集中と規制の虜、人間の理解の維持が論点になっている。
- **ミクロン級の自作ハードウェア**: RepRapMicron(#5)と Open MicroManipulator(#6)は、市販部品でサブミクロン級の精度を狙っている。
- **解説記事・ファンサイト**: パーサーコンビネータ(#4)、Zelda 年表(#8)、ホームズ映画の批評(#2)のように、作り込まれた解説・批評が高く評価された。
