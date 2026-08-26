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
- https://www.anthropic.com/news (HTML をパースして最新記事のタイトル・URL・公開日を取得)
- 公開日を確認し、上記の日付ルールに従って選別する

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
- **[タイトル](url)** ({著者略}) - 何が新しいのか・なぜ重要かを1-2文で解説

## オープンソース・モデル
Hugging Face のトレンドから注目のモデル・ツールを3-5件ピックアップ。
- **[名前](url)** - 何ができるか・なぜ注目かを1-2文で解説

## ベンチマーク・リーダーボード
LMArena やその他ベンチマークの変動があれば報告。なければ省略。

最後に ## 所感 セクションで、全体を通じた AI 分野のトレンドや気づきを2-3文でコメントする。
