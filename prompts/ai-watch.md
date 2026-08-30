現在の日本時間: ${JST_TIME}

AI・LLM の最新動向を1次ソースから収集し、日本語のデイリーレポートを生成せよ。

## 日付の扱い（重要）

各ニュース・記事の公開日（pubDate）を必ず確認し、以下のルールに従うこと:
- **過去24時間以内**: 最優先で取り上げる。ハイライトの候補になる。
- **過去2-3日以内**: 重要なものだけ取り上げる。
- **4日以上前**: 原則スキップ。よほど重大なニュース（新モデルリリース等）で、かつ過去のレポートで未掲載の場合のみ取り上げてよい。
- レポート本文で各ニュースに日付を明記すること（例: 3/5、3/3 など）。

## データソースと取得方法

以下のソースからデータを取得する。
注意: WebFetch ツールでブロックされるサイトがあるため、データ取得には curl コマンドを使うこと。

### 1. Anthropic ブログ / ニュース
- https://www.anthropic.com/news (一覧ページを1回取得するだけで全記事の公開日・URL・タイトルが取れる)
- **https://www.anthropic.com/rss.xml は存在しない（HTTP 404）ので探しに行かないこと。**
- **個別記事ページ（https://www.anthropic.com/news/<slug>）は取得しないこと。** JS レンダリング依存で公開日が取れず、時間の無駄になる。必要な情報はすべて一覧ページから得られる
- レスポンスは約470KBあるため、**そのまま読み込まず必ずパイプで絞り込むこと**。データは Next.js の RSC ペイロード内に `{"publishedOn":...,"slug":{"current":...},"title":...}` の形式（HTML 内では `\"` にエスケープされている）で埋め込まれているので、`\"` を `"` に戻してから以下で最新15件を抽出する:

```bash
curl -sL --max-time 90 https://www.anthropic.com/news | python3 -c 'import sys,re
s=sys.stdin.read().replace("\\\"", "\"")
p=re.compile(r"\"publishedOn\":\"(\d{4}-\d{2}-\d{2})[^\"]*\".*?\"current\":\"([a-z0-9\-]+)\".*?\"title\":\"(.*?)\"\}", re.S)
seen={}
for m in p.finditer(s): seen.setdefault(m.group(2), (m.group(1), m.group(3)))
for slug,(d,t) in sorted(seen.items(), key=lambda x: x[1][0], reverse=True)[:15]:
    print(f"{d}  https://www.anthropic.com/news/{slug}  {t}")'
```

- 出力は `公開日  URL  タイトル` の日付降順（200件超の記事から最新15件）なので、上位から順に上記の日付ルールに従って選別する
- 上記の抽出が空になる場合はサイト構成が変わった可能性があるため、深追いせずこのソースはスキップしてよい

### 2. OpenAI ブログ (RSS)
- https://openai.com/blog/rss.xml (RSS をパース。リダイレクトされるので curl -sL でフォローすること)
- 各 `<item>` から `<title>` / `<link>` / `<pubDate>` に加えて **`<description>`（CDATA の 1-2 文サマリー）も必ず取得する**。この description が「企業動向」セクションで OpenAI 記事を解説する際の一次情報源になる
- `<pubDate>` を確認し、上記の日付ルールに従って選別する
- **https://openai.com/index/<slug> の個別記事ページは取得しないこと。** Cloudflare のボット対策により curl では常に HTTP 403 が返り、User-Agent を変えても meta / og:description すら取得できないため、本文取得を試みるだけ時間の無駄になる。必要な情報は RSS の `<description>` から得ること
- 稀に `<description>` を持たない item があるので、その場合は `<title>` と `<category>` から書ける範囲に留め、推測で内容を断定しないこと

### 3. Google DeepMind ブログ (RSS)
- https://deepmind.google/blog/rss.xml (curl -sL で取得し、RSS をパースして `<item>` の `<title>` / `<link>` / `<pubDate>` を取得)
- `<pubDate>` は RFC 2822 形式（例: `Thu, 13 Aug 2026 17:04:18 +0000`）。これを確認し、上記の日付ルールに従って選別する
- https://deepmind.google/discover/blog/ は JS レンダリング依存で静的 HTML から記事一覧・公開日を取得できないため、フォールバック先として使わないこと

### 4. arxiv (AI/ML 新着論文)
- https://rss.arxiv.org/rss/cs.AI (RSS をパース)
- https://rss.arxiv.org/rss/cs.CL (RSS をパース)
- タイトル・著者・abstract から注目論文を選出

**空フィードは「取得失敗」ではない。** arxiv の RSS は `<skipDays><day>Saturday</day><day>Sunday</day></skipDays>` を持ち、
**土日 UTC は HTTP 200 のまま `<item>` 0 件（約900バイト）を返すのが正常な仕様**である。
このソースだけは「取得失敗時の対応」節のスキップ判断を適用せず、**必ず以下のフォールバックを試すこと**。
（実際、日曜実行のレポートで「注目論文」セクションが丸ごと欠落する事故が繰り返し起きている）

`<item>` が 0 件だったら、直近の発表バッチ（多くは金曜分）から以下のいずれかで論文を取得する:

**(a) recent 一覧ページ** — https://arxiv.org/list/cs.AI/recent / https://arxiv.org/list/cs.CL/recent
`<h3>` に発表バッチの日付（例: `Fri, 28 Aug 2026 (showing first 50 of 196 entries)`）が入る。**この日付をレポートに書く発表日として使う。**
素朴な正規表現では `list-title mathjax` クラスと改行のため 0 件になるので、以下の抽出を使うこと:

```bash
curl -sL --max-time 90 https://arxiv.org/list/cs.AI/recent | python3 -c 'import sys,re,html
s=sys.stdin.read()
d=re.search(r"<h3>(.*?)</h3>", s, re.S)
print("BATCH:", re.sub(r"\s+"," ",d.group(1)).strip() if d else "unknown")
p=re.compile(r"arXiv:(\d{4}\.\d{4,5}).*?list-title[^>]*>\s*<span[^>]*>Title:</span>\s*(.*?)\s*</div>.*?list-authors.>(.*?)</div>", re.S)
for m in list(p.finditer(s))[:20]:
    t=html.unescape(re.sub(r"\s+"," ",re.sub(r"<[^>]+>","",m.group(2))).strip())
    a=html.unescape(re.sub(r"\s+"," ",re.sub(r"<[^>]+>","",m.group(3))).strip())
    print(f"{m.group(1)}  {t}  |  {a[:80]}")'
```

- **この一覧ページには abstract が含まれない。** abstract を見て選ぶなら (b) を使うか、
  絞り込んだ数件だけ `https://arxiv.org/abs/<id>` を個別に取得する

**(b) export API（HTML パース不要・abstract 付き）** — 一覧ページの HTML 構造が変わって (a) が 0 件になった場合はこちらを使う:

```bash
curl -sL --max-time 90 "http://export.arxiv.org/api/query?search_query=cat:cs.AI&sortBy=submittedDate&sortOrder=descending&max_results=20" | python3 -c 'import sys,re
s=sys.stdin.read()
for e in re.findall(r"<entry>(.*?)</entry>", s, re.S):
    i=re.search(r"<id>(.*?)</id>",e,re.S).group(1)
    t=re.sub(r"\s+"," ",re.search(r"<title>(.*?)</title>",e,re.S).group(1)).strip()
    d=re.search(r"<published>(.*?)</published>",e,re.S).group(1)[:10]
    a=", ".join(re.findall(r"<name>(.*?)</name>",e,re.S)[:3])
    ab=re.sub(r"\s+"," ",re.search(r"<summary>(.*?)</summary>",e,re.S).group(1)).strip()
    print(f"{d}  {i}  {t}  |  {a}\n    {ab[:300]}")'
```

- `cat:cs.CL` に差し替えれば cs.CL も同様に取れる
- `<published>` は**投稿日**で、arxiv の**発表日**（一覧ページの `<h3>`）とは通常1日ずれる。日付を書くときは混同しないこと
- **日付ルールの扱い**: 週末フォールバック時は直近の発表バッチ（金曜分）が「最新」なので、
  4日以上前でない限り通常どおり取り上げてよい。既出の論文は「重複排除」節で直近レポートを読めば自然に除外される
- **フォールバックを使った回は、レポートの「注目論文」セクション冒頭にその旨を1行明記すること**
  （例: `arxiv RSS は週末休止のため、list ページより 8/28 発表分から選出。`）

### 5. Hugging Face トレンド
- https://huggingface.co/api/trending (JSON)
- トレンドのモデル・データセット・スペースから注目のものをピックアップ
- 各モデルのURLは https://huggingface.co/{id} の形式でリンクすること

### 6. LLM リーダーボード（LMArena）
- https://lmarena.ai/leaderboard (Chatbot Arena の現行公式サイト。Elo レーティングの変動を確認)
- **https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard は使用しないこと。** LMArena への移管後に更新が止まった静的スナップショットで、HTML は iframe/JS シェルのみのため curl では実データが一切取得できない
- レスポンスは約5MBあるため、**そのまま読み込まず必ずパイプで絞り込むこと**。データは Next.js の RSC ペイロード内に `{"rank":N,...,"modelDisplayName":...,"rating":...,"votes":...,"modelOrganization":...}` の形式（HTML 内では `\"` にエスケープされている）で埋め込まれているので、以下で上位10件を抽出する:

```bash
curl -sL --max-time 90 https://lmarena.ai/leaderboard | python3 -c 'import sys,re
s=sys.stdin.read()
p=re.compile(r"\\\"rank\\\":(\d+)[^}]*?\\\"modelDisplayName\\\":\\\"(.*?)\\\"[^}]*?\\\"rating\\\":([\d.]+)[^}]*?\\\"votes\\\":(\d+),\\\"modelOrganization\\\":\\\"(.*?)\\\"")
for m in list(p.finditer(s))[:10]:
    print(f"{m.group(1):>3} {m.group(2):<32} rating={float(m.group(3)):.0f} votes={m.group(4)} org={m.group(5)}")'
```

- 補助ソース: https://artificialanalysis.ai/leaderboards/models （Intelligence Index / Coding Index。同様に約4.4MBあるので要パイプ絞り込み）

```bash
curl -sL --max-time 90 https://artificialanalysis.ai/leaderboards/models | python3 -c 'import sys,re
s=sys.stdin.read()
p=re.compile(r"\\\"name\\\":\\\"(.*?)\\\"[^}]*?\\\"releaseDate\\\":\\\"([\d-]+)\\\"[^}]*?\\\"modelCreatorName\\\":\\\"(.*?)\\\"[^}]*?\\\"intelligenceIndex\\\":([\d.]+)")
r=[(float(m.group(4)),m.group(1),m.group(2),m.group(3)) for m in p.finditer(s)]
for x in sorted(r,reverse=True)[:10]:
    print(f"{x[0]:.1f} {x[1]} ({x[3]}, {x[2]})")'
```

- 上記の抽出が空になる場合はサイト構成が変わった可能性があるため、深追いせずこのソースはスキップしてよい

## 取得失敗時の対応

各ソースの取得が失敗した場合（HTTP エラー、パース不能など）は、そのソースをスキップしてレポートに「取得失敗」と明記する。
最低2ソース以上のデータが取得できればレポートを生成する。全ソース失敗の場合はレポートを生成しない。

ただし **arxiv RSS の空レスポンス（HTTP 200 / `<item>` 0 件）は取得失敗ではなく週末の仕様**なので、
ここでスキップせず「4. arxiv」節のフォールバックを実行すること。フォールバックも空だった場合に限りスキップ扱いとする。

## 重複排除

src/content/reports/ ディレクトリ以下を再帰的に検索し、ファイル名に "${AGENT_SLUG}" を含むものをパスの降順でソートし、直近3件を読み込む。
過去に取り上げたネタと同一または非常に類似したトピックは除外すること。
ただし、重要な続報（新モデルのベンチマーク結果発表など）は続報として取り上げてよい。

## レポート形式

output-report skill に従い src/content/reports/ にファイルを作成する。
- category: "${AGENT_CATEGORY}"
- title: "AI Watch（{日本時間の日付}）" の形式にする（例: AI Watch（2026年3月6日））
- slug: ${AGENT_SLUG} (例: src/content/reports/2026-03-06/22-00-${AGENT_SLUG}.md)
- tags: 記事の内容に応じて自由にタグをつける（例: "llm", "multimodal", "benchmark", "open-source", "safety", "agents" など）。ソース名をタグにする必要はない

本文の構造:

まず ## 今日のハイライト セクションで、最も重要なニュース1-2件を簡潔にまとめる。

次にソース別セクション:

## 企業動向
Anthropic, OpenAI, Google DeepMind のブログから新着があればまとめる。
新着がない場合はこのセクションを省略する。
- **[タイトル](url)** ({企業名}, {M/D}) - 日本語で内容の解説・意義
- OpenAI 記事の解説は RSS の `<description>` を要約・翻訳して書く（記事ページは取得できないため）

## 注目論文
arxiv から注目の論文を3-5件ピックアップ。
- **[タイトル](url)** ({著者略}, {M/D}) - 何が新しいのか・なぜ重要かを1-2文で解説
- `{M/D}` は arxiv の発表日。RSS が週末休止でフォールバックした回は、セクション冒頭にその旨を1行添える

## オープンソース・モデル
Hugging Face のトレンドから注目のモデル・ツールを3-5件ピックアップ。
- **[名前](url)** - 何ができるか・なぜ注目かを1-2文で解説

## ベンチマーク・リーダーボード
LMArena やその他ベンチマークの変動があれば報告。なければ省略。

最後に ## 所感 セクションで、全体を通じた AI 分野のトレンドや気づきを2-3文でコメントする。
