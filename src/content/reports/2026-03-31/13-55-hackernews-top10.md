---
title: "Hacker News トップ10 サマリー（2026年3月31日）"
date: "2026-03-31T13:55"
category: "summary"
summary: "npmサプライチェーン攻撃、Claude Codeソース流出、ArtemisII安全性問題など注目トピック上位10件"
tags: ["hackernews", "security", "ai", "space", "npm", "llm"]
---

## 1. [Axios compromised on NPM – Malicious versions drop remote access trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)

**Score:** 1214 | **Comments:** 445 | [Post](https://news.ycombinator.com/item?id=47582220)

2026年3月30〜31日、攻撃者がAxiosメンテナーのnpmアカウントを侵害し、`axios@1.14.1`と`axios@0.30.0.4`という悪意あるバージョンを公開した。直接Axios内にマルウェアを埋め込む代わりに、偽の依存パッケージ`plain-crypto-js@4.2.1`を注入し、postinstallスクリプトでmacOS・Windows・Linux向けのRAT（リモートアクセス型トロイの木馬）をドロップする巧妙な手口が使われた。悪意あるパッケージは公開後約2〜4時間で削除されたが、その間にインストールしたシステムは感染リスクにさらされた。

### Key Discussion Points

- **postalcoder**: `.npmrc`で`ignore-scripts=true`を設定するか、パッケージマネージャーの「最小リリース経過時間」設定を使用することを推奨。npm 11.10.0以降で利用可能。
  - **friendzis**: 「JavaScriptの初日か？」とJS界隈での設定形式の不統一をジョーク交じりに批判。
  - **flanbiscuit**: pnpmが先行実装、npmは2026年2月からv11.10.0で利用可能になったと補足。
- **bob1029**: HTTP・暗号・JSONなどの重要機能にサードパーティ依存しないファーストパーティツールエコシステムの重要性を主張。外部依存は「攻撃者の標的になる」と警告。
  - **afavour**: Node.jsはネイティブfetchを既にサポートしており、Axiosは不要と指摘。
- **woodruffw**: アカウント侵害後に他パッケージも連鎖的に攻撃される手口を解説。Trusted Publishingとクールダウン期間を防御策として提案。
  - **paustint**: 攻撃者がアカウント完全掌握後はTrusted Publishingも無効化できると警告。
- **h4ch1**: pnpm/bunのユーザーはpostinstallスクリプトを手動承認する必要があり、今回の攻撃を回避できた可能性があると指摘。

---

## 2. [Claude Code's source code has been leaked via a map file in their NPM registry](https://twitter.com/Fried_rice/status/2038894956459290963)

**Score:** 668 | **Comments:** 354 | [Post](https://news.ycombinator.com/item?id=47584540)

Claude CodeのnpmパッケージにJavaScriptのソースマップファイル（.map）が誤って含まれており、難読化されたバンドルから元のソースコードが復元可能な状態になっていたことが発覚した。Anthropicの開発ロードマップに関わる機能フラグや未公開機能の存在が明らかになった。記事はTwitter/Xに投稿されており、詳細な技術解析はコミュニティが行った。

### Key Discussion Points

- **bkryza**: ネガティブな感情語句を検出して記録するregexパターンがソースに存在することを指摘。「これらの語句は避けるべき…」とコメント。
  - **moontear**: 「WTF」をClaudeへの返答として使ったとき、Anthropicエンジニアが実際に確認できれば良いのにとユーモラスに返答。
- **cedws**: Anthropicの「蒸留防止」機能がClaude Codeに実装されていることを解説。有効化するとAPIリクエストにデコイのツール定義が注入される。
- **treexs**: 機能フラグから未公開の「kairos」というアシスタントモード、「The Buddy System」（ASCIIスプライトのコンパニオン生物）、「Undercover mode」（OSSへの貢献時に内部情報を隠す機能）が確認されたと報告。
  - **BoppreH**: 「Undercover mode」は人間を装うものであり、問題があると懸念を表明し、当該ソースファイルへのリンクを共有。
- **RodMiller**: 「1週間で2度目のAnthropicのセキュリティインシデント。先週はMythos/CMSリークがあった」と複数の流出事案を比較。
- **arrsingh**: Claude CodeがなぜRustで書かれていないのかと疑問を呈し、CLIエージェント開発でRustに落ち着いた経緯を共有。

---

## 3. [Artemis II is not safe to fly](https://idlewords.com/2026/03/artemis_ii_is_not_safe_to_fly.htm)

**Score:** 511 | **Comments:** 331 | [Post](https://news.ycombinator.com/item?id=47582043)

著者は、Artemis Iの再突入でヒートシールドに大規模なダメージ（Avcoatブロックが剥落し、ボルトが溶融）が発生したにもかかわらず、NASAが有人Artemis IIの飛行を強行しようとしていると主張する。NASAは追加テストを行う代わりに問題を再定義し、軌道変更で対処可能と主張しているが、将来のミッション向けにヒートシールド設計を刷新すると発表済みであり、これ自体がArtemis IIのシールドの不十分さを認めている。著者はChallengerおよびColumbiaと同種の組織的機能不全が繰り返されていると批判する。

### Key Discussion Points

- **chadd**: ハーバードの意思決定失敗に関する講義を引用し、「成功志向の計画立案」と政治的プレッシャーが1986年のChallengerから2026年まで繰り返されていると指摘。
  - **thesuitonym**: 「給料がかかっていると、人は物事を理解しようとしなくなる」とアプトンシンクレアの言葉を引用。
- **oritron**: ChallengerとColumbia両方で「想定外の故障モード」が「許容範囲内」と合理化されたパターンとの類似性を指摘し、無人ミッションとしてArtemis IIを実施すべきと主張。
  - **Mikhail_K**: Challengerの原因はO-ringではなくジョイント設計の欠陥という元NASA技術者の異論を紹介。
- **GMoromisato**: NASAのエンジニアと宇宙飛行士は安全と判断しており、過去の惨事とは状況が異なるとバランスのとれた見解を提示。
- **turtletontine**: 「60年前のアポロ計画で使われたヒートシールド素材は何で、なぜ今それでは不十分なのか？」と基本的な疑問を提起。

---

## 4. [Ollama is now powered by MLX on Apple Silicon in preview](https://ollama.com/blog/mlx)

**Score:** 419 | **Comments:** 196 | [Post](https://news.ycombinator.com/item?id=47582482)

OllamaがApple SiliconのMLXフレームワークに対応したプレビュー版を公開した。Unified Memory Architectureを活用することでプリフィルが約57%向上（1,154→1,810 tokens/sec）、デコード速度が約2倍（58→112 tokens/sec）になった。キャッシュの会話間再利用、インテリジェントチェックポイント、NVFP4量子化サポートなど実用的な改良も含む。M5・M5 Pro・M5 Max等の最新Appleシリコンで恩恵を受けられる。

### Key Discussion Points

- **franze**: Apple純正のオンデバイス基盤モデルを使うCLIツール「apfel」を作成したと紹介。4kコンテキストと厳しい安全ガードレールの制限があるが「外部に通信せずbashスクリプトで使える」メリットを強調。
  - **chid**: 「すごいね、試してみる」と好反応。
- **babblingfish**: 「デバイス上のLLMが未来。セキュリティ面で優れ、データセンターの推論需要超過問題と電力問題を解決する。ほとんどのユーザーにフロンティアモデル性能は不要」と展望を語る。
  - **jonhohle**: GoogleのGeminiが過去の検索から子供の名前や仕事の詳細を文脈なしで提示した不快な体験を共有し、ローカルLLMの重要性を痛感したと述べる。
- **a-dub**: 「1年前に試したとき不快なほど発熱したが、最近のMacBook Proではローカル推論は快適になったか？」と現状を質問。
- **Yukonv**: M5での性能改善に言及しつつ、SSD KVコールドキャッシングツールでセッションメモリ損失を防いでいると補足。

---

## 5. [Universal Claude.md – cut Claude output tokens](https://github.com/drona23/claude-token-efficient)

**Score:** 370 | **Comments:** 132 | [Post](https://news.ycombinator.com/item?id=47581701)

プロジェクトルートに配置する単一のmarkdownファイル`CLAUDE.md`で、Claudeの不要な出力パターン（「もちろんです！」等の冗長な前置き、蛇足な提案、過剰なUnicode使用など）を抑制する手法。ベンチマークによると出力トークンを約63%削減できるとされる。高量オートメーションパイプラインやエージェントループに特に有効で、探索的な作業には不向き。

### Key Discussion Points

- **btown**: 単発タスクのベンチマークはエージェントループでの実用性を反映しない可能性を指摘。Claudeの「準推論トークン」は反復プロジェクトでの一貫性維持に役立つかもしれないと主張。
  - **sillysaurusx**: `/handoff`スキルを作成し、セッション終了時に作業内容をmarkdownファイルとしてコミットして永続化する仕組みを紹介。
- **xianshou**: 「答えは常に1行目に。推論はその後に」という指示を紹介し、LLMがシーケンシャルに生成するため推論なし時の前置きは確証バイアスの反映に過ぎないと論じる。
  - **stingraycharles**: 圧縮されたchain-of-thought技術（arxiv論文を引用）の方が、単純な出力抑制よりも効率的と主張。
- **niklassheth**: 「誤りを正しいとして受け入れろ」という指示がモデルの有用なプッシュバックを排除し危険だと批判。

---

## 6. [Google's 200M-parameter time-series foundation model with 16k context](https://github.com/google-research/timesfm)

**Score:** 198 | **Comments:** 80 | [Post](https://news.ycombinator.com/item?id=47583045)

Google ResearchのTimesFM 2.5は、時系列予測向けのデコーダーonly基盤モデル。前バージョン（500Mパラメータ）より小型化しながら性能を向上させ、コンテキストウィンドウを2,048から16,000トークンに拡大した。オプションで30Mパラメータのquantile forecasting headを追加すると1,000ステップ先まで予測できる。PyTorch/JAX両対応で、CPU・GPU・TPU・Apple Siliconで動作する。ICML 2024発表の研究に基づく。

### Key Discussion Points

- **EmilStenstrom**: 「イタリアの卵の価格とグローバルなインフレを同じモデルで信頼して予測できるのか？汎用時系列モデルというコンセプト自体が奇妙に感じる」と疑問を呈する。
  - **teruakohatu**: 予測モデルはトレンド・季節性・残差に分解するものであり、地政学的紛争などのランダムな事象は予測できないと解説。
- **kuu**: 「タイトルに(2024)を追加してほしい、これは新しいニュースではない」とICML 2024発表済みコンテンツであることを指摘。
- **pplonski86**: ELI5でどのように動作するか、何データポイントを読み込めるかを質問。
- **konschubert**: 「将来のX時刻の天気予報データを使って電力価格を予測できるか？」と外部共変量の活用について具体的な質問を提起。

---

## 7. [Anthropic: Claude Code users hitting usage limits 'way faster than expected'](https://www.theregister.com/2026/03/31/anthropic_claude_code_limits/)

**Score:** 61 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=47586176)

Anthropicは、Claude Codeユーザーがクォータを想定以上のペースで消費していると公式に認め、調査中と発表した。Pro($200/年)ユーザーが月内で数日でクォータを使い切る事例や、Max 5プラン($100/月)ユーザーが1時間で全量を消費する事例が報告されている。3月28日に終了したピーク外2倍クォータのプロモーション終了、ピーク時のクォータ削減（約7%のユーザーに影響）、キャッシュ関連のバグ（コストを10〜20倍に増加させる可能性）が複合的な要因として挙げられている。

### Key Discussion Points

- **jdefr89**: 「LLMへの過度な依存がいつか大惨事を引き起こす。製品全体を単一のエンティティに依存するのは危険」と警鐘を鳴らす。
- **robviren**: 「Claude Codeはトークンの無駄遣いが多い。コンテキストの管理が出力品質に非常に重要」と実体験を共有。
- **p2hari**: 最近数ヶ月でサービスが使いにくくなったとしてClaude Proのサブスクリプションをキャンセルしたと報告。

---

## 8. [Audio tapes reveal mass rule-breaking in Milgram's obedience experiments](https://www.psypost.org/audio-tapes-reveal-mass-rule-breaking-in-milgram-s-obedience-experiments-2026-03-26/)

**Score:** 72 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=47555273)

スタンレー・ミルグラムの服従実験の音声テープ136本を分析した研究が、実験の解釈を根本から覆す発見をした。「服従」と分類された被験者の中で、実験手順を完全に遵守したケースは一つもなく、約48%の電気ショックシーケンスで手順違反が確認された。逆に「不服従」と分類された被験者の方が手順をより忠実に守っていた（違反率30.6%）。研究者は実験が「科学的権威への服従」ではなく「非公式な暴力」の場に変質していたと結論付けている。

### Key Discussion Points

- **crazygringo**: 手順の軽微な逸脱は実験の無効化にはならないと反論。「一箇所で手順を飛ばしたからといって科学的環境が崩壊したわけではない」と主張。
- **bambax**: 「もともと他者を傷つけることを楽しむ人々が、結果なしで行動できる機会として実験を利用しただけでは？」と動機の解釈を問う。
- **Mordisquitos**: 不服従者は被験者役の苦しみに集中するために手順を丁寧に守った可能性と、服従者はプレッシャー下で感情を麻痺させた可能性を提示。

---

## 9. [Open source CAD in the browser (Solvespace)](https://solvespace.com/webver.pl)

**Score:** 14 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47586614)

SolvespaceはオープンソースのパラメトリックCADソフトウェアで、ブラウザ上でWebAssembly版を試用できるようになった。2Dと3Dのスケッチ・制約ベースのモデリング・STEP/DXFエクスポートに対応し、ローカルインストール不要でブラウザから直接CADを利用できる点が注目される。コミュニティへの投稿であり、まだ議論は少ない。

---

## 10. [Combinators](https://tinyapl.rubenverg.com/docs/info/combinators)

**Score:** 17 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=47585974)

TinyAPLというAPL方言のコンビネータに関するドキュメントページ。関数型プログラミングにおけるコンビネータ（S、K、I、B、Cなど）の定義と使用例をAPL的な記法で説明している。特殊な配列指向言語に関心を持つプログラマー向けのニッチなテクニカルコンテンツで、まだ議論は少ない。

---

## Trends

今日のHacker Newsトップ10から見える主要な傾向：

1. **AIツールのエコシステムリスク**: npmサプライチェーン攻撃（axios）とClaude Codeのソース流出が同日にトップ入りし、急速に拡大するAIツールエコシステムへの依存リスクが顕在化。特にaxiosの件はスコア1200超という異例の注目度。

2. **Anthropicへの集中した関心**: Claude Codeソース流出・Claude.mdトークン最適化・Claude Code使用制限の3件がトップ10に並び、Anthropicとそのツールへのコミュニティの強い関心が見られる。

3. **ローカルAI推論の台頭**: OllamaのMLX対応とAppleデバイス上LLMの話題から、クラウド依存を回避したプライバシー重視のローカル推論への需要が高まっていることがわかる。

4. **安全・信頼への問い直し**: ArtemisII安全性問題、ミルグラム実験の再解釈、npmセキュリティと、「安全」とされていたものへの根本的な疑問が複数のストーリーに共通している。

5. **時系列AIの実用化**: GoogleのTimesFMが198ポイントを獲得し、LLM以外のドメイン特化型基盤モデルへの関心も根強いことを示している。
