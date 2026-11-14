---
title: "Hacker News トップ10 ダイジェスト 2026-11-14"
date: "2026-11-14T17:54"
category: "summary"
summary: "古いスマホ vs Pi、KDE ドキュメンタリー、PyPI のセキュリティ表示刷新、非英語 LLM のエネルギー格差など"
tags: ["hackernews", "summary"]
---

## 1. [Why get an expensive Pi when I have an old phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/)

**Score:** 378 | **Comments:** 228 | [Post](https://news.ycombinator.com/item?id=50440709)

高解像度カメラ・GPS・マイコン制御が必要なプロジェクトで、Raspberry Pi＋各種 HAT を揃えるより中古スマホ（Redmi 13C 5G や Huawei Mate 30 5G、Taobao で約 ¥300〜500）を使う方が安いと論じる記事。スマホにはカメラ、GPS、ストレージ、時計、バッテリー、モバイル通信、タッチ画面が最初から入っており、USB-C 経由で PCB を制御できる。著者は Redmi をルート化してカメラ動作やスリープ復帰まで確認済み。

### Key Discussion Points

- **deng**: 最近は画面の壊れた中古ノート PC からマザーボードを取り出して使っている。安価で 16GB RAM のことも多く Pi より速いが、基板が大きく、冷却や消費電力の面で不利。
  - **throwaway_new_1**: Pi の目的は標準 GPIO 付きの安価な教育用コンピュータで、巨大なコミュニティと標準化が今の地位を支えている。
  - **macNchz**: Lenovo の Tiny 系超小型 PC は、バッテリーなしでイーサネット付きのノート PC 相当のハードで、企業放出品が安く出回る。自身も数年ホームサーバーにしている。
  - **madduci**: 発想は良いが消費電力は Pi が有利。古いスマホやノート PC はバッテリーがリスクになる。
- **asmodeuslucifer**: コンベア上の板を検知してブザーを鳴らす用途には、ESP32 と ToF センサー、ブザーで約 $10 で足りた。
- **Freak_NL**: Pi は量産ハードで 1 台でも 100 台でも同じように調達できる。中古スマホは数百台を同じ状態でそろえるのが難しく、これが最大の問題。
  - **bambax**: 実際には Pi は品薄で値上がりが続き、Zero のように入手不能なものもある。スマホで最も壊れやすいのは画面で、気にしなければバッテリー交換も容易になる。
  - **randomblock1**: スマホは日常使用に耐える堅牢さがあり、懸念はバッテリーだけ。充電制限やバイパス給電もできる。
- **cdetroye**: 古いスマホに Nerves（Erlang VM を載せた組み込み環境）を入れている。postmarketOS 対応機種から始め、Claude の助けを借りれば mainline Linux と多くのドライバが動く。
- **axegon_**: 筆者の言い分は理解できるが、Pi を選ぶ理由は OS。スマホにフル Linux を入れられるなら Pi は不要だが、ほとんどの機種では無理。

## 2. [KDE: The documentary [video]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c)

**Score:** 174 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=50496976)

KDE の歴史を扱うドキュメンタリー動画「The Story of Free Software Underdogs」。ページは JavaScript 必須の PeerTube で本文テキストが得られなかったため、タイトルとコメントに基づく紹介にとどまる。

### Key Discussion Points

- **blinkingled**: 自宅は KDE だけで運用している。Qt の基盤づくりから、文化も背景も違う人々を動機づけ続けることまで、C++ 製デスクトップ環境の難しさを示す研究対象として興味深いと述べる。
- **aeonik**: KDE4 への移行は非常に厳しかったが、Plasma はそこから大きく進化したと評価。
- **k0morebi**: 20 年以上使っており、リリース間の一貫性、安定性、カスタマイズ性が高く、新機能も商用 OS より先行すると評価。
  - **pimeys**: KDE 1〜3 のベータから使い、4 と 5 を飛ばして 6 に戻ってきた。他の環境を試しても数週間で KDE に戻る。
- **pelagicAustral**: KDE 3 以前のような見た目の DE がほしい。
  - **lproven**: Trinity Desktop や、それを組み込んだ Q4OS を紹介。
  - **blooalien**: Trinity DE は KDE 3 をフォークして保守しているもの。
- **vlowrian**: CultRepo のドキュメンタリー（C++、Java、Node.js、Kubernetes など）を勧める。

## 3. [PyPI's redesigned project pages with clearer security signals are now live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/)

**Score:** 97 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=50497892)

PyPI がプロジェクトページを刷新し、新しい「Security」タブで来歴（provenance）の状態を表示するようになった。状態は完全な来歴、来歴なし、そして不完全・不整合・変更・喪失の各警告に分かれる。2024 年に導入されたデジタル署名（attestation）が一般ユーザーに伝わりにくかった問題への対応で、リリースファイルとリリース履歴の表示も整理された。

### Key Discussion Points

- **time4tea**: 信頼の話が結局「大手クラウド」への集中とロックインにつながっており、Python らしくないのではと懸念。
- **djoldman**: 例として dlt（来歴なし）と datasette（来歴あり）の PyPI ページを挙げた。
- **mhils**: 来歴の露出強化を歓迎。Trusted Publishing が再利用可能ワークフローに未対応な点の解消を求める。
- **cowlevel**: これは、以前は無害だったプロジェクトの PyPI アカウントが乗っ取られたが署名鍵は奪われていないケースの検出であり、最初から悪意あるプロジェクトの検出ではないと指摘。
- **darkamaul**: 本題ではないが、ドキュメント基盤が Material for MkDocs から Zensical に移り、ユーザー基盤を遠ざけて fork を生んだのは残念だと述べる。

## 4. [Generative AI uses more energy on non-English text](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/)

**Score:** 97 | **Comments:** 65 | [Post](https://news.ycombinator.com/item?id=50441444)

ミシガン大学の研究（EMNLP 発表）によると、生成 AI は英語以外のテキストの生成に 1.4〜180 倍のエネルギーを使う。西欧言語の多くは 2 倍以下だが、ヒンディー語は 7.9 倍、ベンガル語は 15.3 倍で、非ラテン文字や学習データの少ない言語ほど差が大きい。エネルギー消費が多い言語ほど精度も低い傾向がある。対策として言語別モデルや翻訳パイプラインの導入が挙がっている。記事は Cloudflare チャレンジで取得できなかったため、Wayback のスナップショットに基づく。

### Key Discussion Points

- **vova_hn2**: 固定トークン集合の限界が原因で、H-Net のような手法に切り替えれば改善できる可能性がある。現状は言語間でトークン枠を奪い合うゼロサムになっている。
- **esperent**: 対象が Qwen 3、Gemma 3、Llama 3.1 の 3 つのオープンモデルだという重要な情報が記事の中盤まで出てこない。
- **load-bearing**: 関連するトークナイザー公平性の調査を紹介。英語でトークンを節約し、最後に翻訳するやり方をすでに取っている。
- **PhilipRoman**: 話者数を指標にすると英語やフランス語が有利に見える。非ネイティブ話者はネイティブの約 3 倍いて、学習データの多くも非ネイティブが書いている。
- **scottcha**: 論文の一部を自社環境の最新モデルで再現できた。測定値の表も添えている。

## 5. [Show HN: A terminal-native idle factory game, written in Rust with ratatui](https://gitlab.com/snipedbywifi/terminactory)

**Score:** 82 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50497132)

Terminactory は、銅・石炭・鉄を掘って精錬・加工・販売し、コンピュータや石油まで研究を進めるターミナル向けの放置型ファクトリーゲーム。戦闘や突発的な故障はなく、離席中も工場が稼働し続ける。AI エージェントと並べて使う想定で、エージェントがゲーム内にメッセージを送れる。Rust 1.88 以上と UTF-8 ターミナルが必要。

### Key Discussion Points

- **george_max**: 見た目は良いが、価値は「ターミナルで動く」ことだけではないか。10 分で飽きて Factorio を選ぶと思う。
- **Joker_vD**: エージェントからのメッセージ機能について、古くからあるローカルメールの仕組みが再発明され、ゲームプレイに組み込まれているのが面白いと述べる。
- **chaz6**: ASCII だけでなく Nerd Fonts のアイコンを使えるオプションがあると良い。

## 6. [Advancing science and engineering with Antigravity's /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/)

**Score:** 71 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=50496811)

Google Research が、マルチエージェント機能 Antigravity /teamwork の成果を紹介。Gemini 4 の各モデルと組み合わせ、数学、化学、システムソフト、ML エンジニアリングの未解決問題を人間の専門家と協働して扱ったとする。並列探索に Lean 4 や既存テストスイートなどの検証器を組み合わせ、各エージェントに必要なファイルとツールだけを渡して長時間タスクのコンテキスト散逸を防ぐ設計。ツールは外部にも公開される。

### Key Discussion Points

- **stbenjam**: /teamwork が Claude の dynamic workflows とどう違うのか分からない。Antigravity は auto mode もなく、ハーネスとして遅れていると感じる。
- **mirrokni**: /teamwork の一部は別のブログで発表済みで、今回の投稿は数学・科学・コーディングでの進展事例を示すものだと補足。
- **shmageggy**: 主張がつかみにくい記事だと批判。「OpenAI の 100 問のような取り組みを多分野で専門家と協働して行い、ツールも公開した」という趣旨だと推測している。
- **dava96**: Rust 書き直しが最適化前は C++ より 30% 遅かった点が興味深い。C++ 側を最適化した方が効果が大きかった可能性を指摘する。

## 7. [Show HN: Fursoy – Out-of-order RV64IMAFDV core in SystemVerilog (Linux 6.6)](https://github.com/FURSOY/fursoy-cpu)

**Score:** 30 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=50497137)

SystemVerilog で実装した 64 ビット 2-wide アウトオブオーダー RISC-V コア（RV64IMAFDV＋Zba/Zbb）。128 エントリの ROB、160 エントリの整数物理レジスタ、8 個の分岐チェックポイントを備え、Sv39 仮想メモリで mainline Linux 6.6.50 と BusyBox が起動する。Nangate 45nm で 500MHz の合成も行っている。

### Key Discussion Points

- **Findecanor**: r/RISCV に投稿すると、この種のプロジェクトにより多くの関心とコミュニティがある。
- **phendrenad2**: 一人のプロジェクトでアウトオブオーダーを実装したのは印象的。
- **fursoy**（投稿者）: Slice-1 の構成（5 マスタークロスバー、CLINT、PLIC、16550 UART、独自 SBI v2.0 ファームウェア、2-wide、128 エントリ ROB など）を説明した。
- **iberator**: Verilog は実ハードではなくエミュレーションに過ぎず、実際に作ってから評価したいと批判。

## 8. [Reverse engineering a vintage diode-transistor logic chip](https://www.righto.com/2026/11/signetics-st680a-dtl-nand.html)

**Score:** 22 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50416011)

Ken Shirriff が、CuriousMarc の古い部品の中から見つかった未識別の IC を顕微鏡で解析し、1965 年の Signetics 600 シリーズの ST680A（ダイオード・トランジスタ論理による 4 つの NAND ゲート）と特定した。Signetics が導入した初の樹脂製 DIP の歴史や、DTL の回路動作も解説している。

## 9. [Show HN: DeepSeek V3 in ~200 lines of pure Jax](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax)

**Score:** 19 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50497589)

DeepSeek-V3 のアーキテクチャを、Flax や PyTorch なしの純粋な JAX 190 行で実装したもの。MLA（トークンあたりのキャッシュを 480 から 144 に圧縮）、分離 RoPE、DeepSeekMoE（共有 1＋ルーティング 16、top-4）、補助損失なしの負荷分散、MTP を含む。パラメータ 36.2M（アクティブ 13.6M）のモデルを、パブリックドメインの探偵小説 207 冊で MacBook Air 上で学習している。

## 10. [Lovable apps expose passport details and more than 200K private messages](https://www.crissyfield.de/research/lovable-en/)

**Score:** 3 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50499017)

Crissy Field が Handelsblatt と協力し、Common Crawl から 2025 年 12 月〜2026 年 9 月の Lovable 製プロジェクト 159,041 件を調べた。うち 34,545 件が Supabase を使い、24,664 サイトがログインなしでデータベースのレコードを返していた。追加の読み取り専用リクエストで、7,403 サイト（30%）の 10,560 テーブルからメールアドレスを含むレコードが見つかった。ただし 30% は確定した漏えい率ではない。ドイツのフォーラムでは 8 万件超のプロフィールと 20 万件超のチャットが閲覧可能で、チケットや飲食の販売記録も露出していた。

## Trends

- **AI の影の面**: 非英語での消費エネルギー格差（#4）と、AI 生成アプリの深刻な情報露出（#10）が並ぶ。コストやセキュリティの責任が利用者側に偏る問題が見える。
- **AI エージェント周辺**: Google の multi-agent ツール（#6）、エージェントと並走するゲーム（#5）、小規模な DeepSeek 実装（#9）が上がった。
- **サプライチェーンの信頼**: PyPI の来歴表示（#3）では、信頼の中央集権化や対象範囲の限界が議論された。
- **ハードウェアと OSS の原点回帰**: 古いスマホの再利用（#1）、一人で作る OoO RISC-V コア（#7）、1965 年の DTL チップ解析（#8）、KDE の歴史（#2）と、手を動かす系の話題が続いた。
