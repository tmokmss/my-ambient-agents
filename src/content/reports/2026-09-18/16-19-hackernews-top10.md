---
title: "Hacker News トップ10サマリー（2026-09-18）"
date: "2026-09-18T16:19"
category: "summary"
summary: "パスキー批判、Bend2のバイブコーディング論争、コーディングエージェントのharness設計研究など、AI周辺の議論がトップ10を席巻"
tags: ["hackernews", "ai", "security", "programming"]
---

Hacker News のトップストーリー上位10件（取得時点のスコア降順）をまとめました。

## 1. [I don't like passkeys](https://hawksley.dev/blog/i-dont-like-passkeys)

**Score:** 445 | **Comments:** 411 | [Post](https://news.ycombinator.com/item?id=49753211)

著者は、パスキーは企業向けにはフィッシング耐性という利点があるが、個人ユーザーにとっての本当のリスクはMITM攻撃ではなく永続的なアカウントロックアウトや端末紛失であり、パスキーはそれを防げないと主張。ハードウェアキーはバックアップが効かずスケールしない上、AppleやGoogleにアカウント停止されると全パスキーへのアクセスを失うといったプラットフォーム依存のリスクも指摘し、現時点ではランダム生成パスワード＋TOTPの方が実用的だと結論づけている。

### Key Discussion Points

- **drtz**: パスキーはパスワード使い回しやパスワードマネージャー未使用者を守るための技術で、複数端末利用時はパスワードマネージャーに保存するのが実質唯一の解になる。ユーザーの同意なくいつの間にか設定されてしまう点が最大の問題だと指摘。
  - **dspillett**: Amazonなどがしつこくパスキー登録を促し「後で」という選択肢が事実上存在しないと不満を述べ、実際に別のサイトで買い物をした体験を共有。
- **nunez**: 逆にパスキーはQOLを大きく改善したと反論。iCloud/Googleでの同期によりロックアウトのリスクは低く、それよりもメールのマジックリンク認証をやめてほしいと主張。
  - **kyle-rb**: 「メールはハッキングされやすい」という主張の根拠を問い、Gmailが乗っ取られればGoogle同期のパスキーにもアクセスされてしまうはずだと指摘。
- **hannasanarion**: サードパーティのパスワードマネージャー（Bitwardenなど）へのサポートが不十分で、Amazonはパスキーでログインしても新規パスキー作成をさらに促してくると指摘。
  - **jeroenhd**: Linux＋Firefoxの環境では同様の問題は起きないとし、環境依存の可能性を示唆。
- **elteto**: 技術自体は優れていても、大手テック企業が自社エコシステムへの囲い込み手段としてパスキーを利用している点を懸念。
- **torstenvl**: 個人にとって最大のリスクはMITM攻撃よりもアカウントロックアウトだという記事の視点に賛同し、パスキーは「ひどく不安全」とまで主張。
  - **bennetthilberg**: セキュアエンクレーブ＋生体認証＋オリジンバインディングの組み合わせはTOTPより優れていると反論。

## 2. [OpenJev](https://openjev.com/)

**Score:** 342 | **Comments:** 193 | [Post](https://news.ycombinator.com/item?id=49752041)

OpenJevは、TypeSafe社の非公開サービス「Jev」（ランタイムで定義された選択肢に確率を付与する意思決定特化モデル）のインターフェースをオープンモデルで再現した実装で、現在はSemIfと改名されている。OpenAIのstructured outputのように固定スキーマに従うだけでなく、各選択肢に確率スコアを返す点が特徴とされる。

### Key Discussion Points

- **prodigycorp**: ワンショットでバイブコーディングされたサイトにありがちな視覚的な雑然さ、無意味な埋め草テキストの多さを批判。
  - **binlog**: サイトの「unsloppify」ボタンを押しても、結局同じくらいバイブコーディングっぽい見た目のままだったと指摘。
- **mmastrac**: vLLMパッチでDiffusionGemmaをJev化した実装を試したところ、同等のレイテンシと評価スコアが出たと報告。小型モデル（Qwen3.6）は明確に性能が劣ったとも。
- **wuhhh**: OpenAIのstructured outputや旧Sonnetの類似機能と何が違うのか疑問視。GitHub上でも「Jevの未公開モデルは再現していない」と明記されている点を指摘。
  - **orbital-decay**: 非instruction-tunedな分類器であり生成はしないが、本質的には言語モデルだと説明（「BERT on crack」）。
- **kul_**: LLM生成サイトの見た目全般に対する嫌悪感を吐露。
  - **djaro**: デザインの「良し悪し」は時代ごとの連想で決まるものであり、LLMのデフォルトデザインは学習が進むほど「安っぽい」ものとして定着してしまうと分析。
- **wg0**: Jevの真の革新性は速度と、特定のトークン集合以外からトークンを生成しないことを保証できる点にあり、状態機械の駆動に応用できると評価。

## 3. [Bend 2 and the Vibe-Coding Trap](https://blog.liampwll.com/posts/bend_vibe_coding/)

**Score:** 275 | **Comments:** 202 | [Post](https://news.ycombinator.com/item?id=49753179)

著者は、プログラミング言語「Bend 2」が形式検証という既存分野を十分調査せずにAIに証明を書かせるアプローチを採ったため、既存手法（SPARK言語など）であれば442行にもなるAI生成の証明をわずか数行に削減できたはずだと主張。事前調査なしに直感（バイブ）だけで開発を進めると、先人の知見を見落とし非効率な解決策を生み出す危険があると論じている。

### Key Discussion Points

- **hmokiguess**: LLMは動くものを作るのは得意だが、「何を知らないか」に気づかせてくれない点が最大の課題だと共感。バイブコーディングはこの学習サイクルを速めるだけだとも。
  - **rozap**: 以前は自分で書いた拙いプログラムからも学びがあったが、今は学びなしに「動く駄作」だけが得られる状態になっていると同意。
- **pu_pe**: 元スレッド（Bendのリリース投稿）は内容よりも著者の実績や擁護コメントばかりが目立ち異様だったと指摘。デモもうまく動作していなかったとも。
  - **larodi**: 元スレッド自体が最初から「怪しさ」に満ちており、GitHubの星20kも履歴が失われている点を挙げる。
- **z7**: 記事は開発者が形式検証の分野を知らないと決めつけているが、著者のX投稿を見れば形式検証について何度も言及しており、その前提は誤りだと反論。
  - **f0e4c2f7**: 記事自体が「少し調べれば分かること」を調べずに書かれており、皮肉にも記事が批判する対象と同じ過ちを犯していると指摘。有名な「Dropboxコメント」を彷彿とさせるとも。
- **thomasahle**: GNATprove（SMTソルバーによるブルートフォース証明）なら自動で12件のチェックを証明でき、442行のLLM生成証明は不要だったと主張。ただしブルートフォース証明は規模が大きくなるとスケールしないため、これまで形式検証がニッチな分野だった理由でもあると補足。
  - **simonw**: 開発者は2018年からEthereumの形式検証プロジェクト「Formality」に携わっており、LLM登場以前から形式証明に精通していたことを示すGitHubリポジトリを提示。
- **johnfn**: 開発者が形式検証を知らないと非難する前に数分調べればすぐ反証が見つかったはずだと苦言。

## 4. [An Empirical Study of Harness Design for Coding Agents](https://arxiv.org/abs/2609.20804)

**Score:** 138 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=49753878)

固定の実行ループを持つ軽量なharness（コーディングエージェントの実行基盤）を用い、計画（planning）・行動空間（action space）・文脈管理という3要素を変化させて4モデル×176パターンを評価した研究。文脈管理（ルールベースの削除＋LLM要約の併用）がコンテキストオーバーフローの防止に大きく寄与し、計画機能は弱いモデルでは精度向上、強いモデルではコスト削減に働くことが分かった。

### Key Discussion Points

- **lieret**: harnessに関するこうした体系的研究は貴重だと歓迎しつつ、複雑なharnessが単純なエージェントを一貫して上回るベンチマークは実はそう多くないと指摘（自身はミニマルなエージェント実装の作者）。
- **gps372**: harnessの違いは車のエンジン以外の部品（タイヤ、ギアボックスなど）の違いに例えられ、同じモデルでもReActループやplan-and-executeなど設計次第で性能が変わると解説。
- **agentdev001**: 論文が「bash capable」の定義を明確にしていない点を批判。Bash以外のツールを追加する価値は厳密な検証なしには判断できないと指摘。
- **Aeroi**: 別のharnessベンチマークで高いパス率を出した経験から、ベンチマーク上の「最良」が実運用の最良を必ずしも意味しないと注意喚起。
- **vblanco**: 実験がNemotronとMistralモデルに限られており、Qwenやdeepseekなど現在主流のモデルが含まれていない点が惜しいと指摘。

## 5. [Cloudflare Quick Tunnels](https://try.cloudflare.com/)

**Score:** 103 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=49754785)

Cloudflare Quick Tunnelsは、アカウント登録やDNS設定なしに単一コマンドでローカル環境をインターネットに公開できる無料サービス。自動HTTPS・DDoS保護・グローバルルーティングを備え、デザインレビューやQA、CI/CD統合などチーム内の迅速な共有に向くとされている。

### Key Discussion Points

- **singpolyma3**: 最近はHTTPS以外の用途にも対応し始めているようだが、詳細が不明瞭だと指摘。
- **aliasxneo**: 以前Cloudflare Tunnelsを使っていたが、同社の規模拡大に伴い信頼度が下がってきていると懸念を表明。
- **dangoodmanUT**: レイテンシのばらつきが大きく、通常30〜50msの通信が115〜750msになることがあったと報告。
- **kincl**: Tailscaleの類似機能（Tailcat）と比較し、アカウント登録不要な点を評価。
- **whizzter**: 無料のプロキシサービスはスパム業者に悪用されブラックリスト入りして使えなくなる運命にあるのではと懸念。

## 6. [North Korean nuclear test sets off years of earthquakes](https://www.science.org/content/article/north-korean-nuclear-test-sets-years-earthquakes)

**Score:** 47 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=49755160)

北朝鮮の核実験が実施地点周辺で長期間にわたり群発地震を引き起こしているという内容の記事（本文は既知のペイウォールドメインでWaybackにもスナップショットが存在しなかったため、タイトルとコメントから内容を推測）。実験のエネルギーが小さな地震として何年もかけて放出され続けている点、それを通常の背景地震活動とどう区別するかが議論の焦点になっている。

### Key Discussion Points

- **margalabargala**: エネルギーが小さな地震として時間をかけて放出される方が、一度に大きな地震（M7クラス）が起きるより良いのではと肯定的に捉える。
- **ggg011012**: 実験からの遅延の長さに関心を寄せ、通常の背景地震活動と実験由来の地震をどう区別しているのか疑問を呈す。
- **ortusdux**: たまった歪みを核による地質工学で意図的に解放しようとする試みがいつ行われるかと問いかける。
- **SoftTalker**: 「地質学的不安定化ではなくゴジラを目覚めさせた」と冗談めかしてコメント。
- **elictronic**: 記事は人が実際に感じる地震とマグニチュード2程度の地震（本が落ちる程度）の違いを区別できていないと批判。

## 7. [The Shadows Lurking in the Equations – Underwater Islands](https://gods.art/articles/equation_shadows)

**Score:** 41 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=49721507)

方程式が厳密に成り立つ箇所だけを描く従来のグラフに対し、「ほぼ成り立つ」領域も誤差を色で表現する「ファジーグラフ」という可視化手法を提案する記事。この手法により、従来は見えなかった数学的構造（黒い穴や潜在的な解など）を発見できると主張している。

### Key Discussion Points

- **MarkLowenstein**: このような数学の探求方法は、単純な要素が一貫した構造を明らかにし、それが網羅的な計算を要するために過去の天才たちに見過ごされてきたという点で、将来の発見につながる可能性が高いと感じている。
- **simojo**: 可視化は面白いが、やや誤解を招く面もあると指摘。2D関係は常に3Dでプロットでき、z=0とすれば元の2D曲線が現れるだけで、「ファジー」とは実質z=0からの距離のヒートマップに過ぎないと分析。
- **0xdeadbeefbabe**: フラクタルに似ていると感想。
- **pfortuny**: 高解像度の等高線プロットの一種で、別の呼び名があるはずだと指摘。

## 8. [NATS publishes preliminary report on technical incident of 8 September](https://www.nats.aero/news/nats-publishes-preliminary-report-on-technical-incident-of-8-september/)

**Score:** 23 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=49754064)

英国の航空管制機関NATSが、2026年9月8日に発生した技術的インシデントの予備報告を公表。航空機コード（スコーク）割り当て処理中の約1ミリ秒のタイミング window でデータが破損し、ロンドン管制圏上空24,500フィート以上の便に影響、英国全域で6時間の制限が敷かれ数十万人の乗客に遅延が生じた。CEOは終始安全性は損なわれていなかったと強調している。

### Key Discussion Points

- **lukaslueg**: 報告書が詳細に踏み込んでいない点を残念がり、「約1ミリ秒のウィンドウ」という表現から、既製のメモリ競合状態＋スレッドのプリエンプションが原因ではと推測。
- **zrail**: 混同注意として、これは航空管制のNATSであり、pub/subシステムのNATSではないと補足。
- **macguillicuddy**: スコーク（4桁の識別コード）割り当て処理における1ミリ秒のレースコンディションがデータ破損を招いたようだと分析。「小さい」とされる1msも実務上は結構な時間だと皮肉る。
- **fotta**: 報告書本体（PDF）へのリンクを共有。

## 9. [Show HN: Rickub – The Smartest Git in the Universe](https://rickub.com/)

**Score:** 17 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=49755312)

Rickubは、GitHub/GitLabの代替を謳うホステッド型Gitプラットフォーム。コード管理、マージリクエスト、CI/CD、AIコードレビュー、コンテナレジストリなどを統合し、「GitHub/GitLabより高速・独立・安価」を売りにしている。

### Key Discussion Points

- **SrslyJosh**: サイトの謳い文句（「AIが差分の半分を書き、レビューやCI待ちに時間を取られる時代以前に設計された」）を皮肉り、質の低いAI生成物だと切り捨てる。
- **bfung**: バックエンドは不明だが、サイトの見た目がGoogle AI Studio（Gemini）で生成されたものに酷似していると指摘。
- **ivanjermakov**: プロプライエタリなGitホスティングはもう使わないと明言。
- **haburka**: 風刺なのかバイブコーディングされたただのランディングページなのか判別できないとし、VC出資のスタートアップでないことを願うとコメント。
- **woodrowbarlow**: 実態はGitea/Forgejoインスタンスに機能を追加しただけで、これは「GitHubの代替」であって「Gitの代替」ではなく、両者を混同させる打ち出し方は意図的ではと指摘。

## 10. [Mathematicians Build Long-Awaited Graph Sandwich](https://www.quantamagazine.org/mathematicians-build-long-awaited-graph-sandwich-20260918/)

**Score:** 15 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=49755095)

2004年に提唱された「グラフサンドイッチ予想」（複雑な正則グラフを2つの単純な二項グラフで挟めるか、という問題）を、Montgomery・Behague・Iľkovičの3人がエッジを1つずつ構築する手法で証明。二つの異なるランダムグラフ生成プロセスが実は深く結びついていることが示され、複雑ネットワークの構造理解が大きく前進した。

## Trends

トップ10のうち半数近く（OpenJev、Bend 2、コーディングエージェントのharness設計研究、Rickub）がAI・LLM関連で、特に「バイブコーディング」への批判的な視線が複数のスレッドで共通して見られた点が目立つ。OpenJevやRickubは「LLM生成っぽい見た目・文章」がコメント欄で繰り返し揶揄される一方、Bend 2を巡っては「事前調査を怠ったのはむしろ批判記事の側では」という逆転した議論も起きており、AI時代における「調査せず直感で判断すること」自体への警戒感がテーマとして浮かび上がった。またパスキー、Cloudflare Tunnels、NATSのインシデント報告など、日常的に使う認証・インフラ技術の使い勝手や信頼性を問う実務的な議論も上位に並んだ。
