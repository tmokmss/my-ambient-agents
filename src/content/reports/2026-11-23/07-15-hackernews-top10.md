---
title: "Hacker News トップ10 サマリー（2026年11月23日 16:15 JST）"
date: "2026-11-23T07:15"
category: "summary"
summary: "GTA 6 の鳥類図鑑、ローカルAI入門、Internet Archive 発のTV、リーマン予想の新証明、GL.iNet のセキュリティ通知など。"
tags: ["hackernews", "summary", "ai", "security"]
---

## 1. [The Birds of GTA 6: A Field Guide to Vice City and Leonida's Wildlife](https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife)

**Score:** 446 | **Comments:** 228 | [Post](https://news.ycombinator.com/item?id=50602843)

オーデュボン協会の寄稿者が、『GTA VI』の舞台ヴァイスシティに登場する60種の鳥を、ゲーム内の双眼鏡で探して図鑑を作った記事。南フロリダの景観や鳥の分布はおおむね説得力があるとする一方、絶滅危惧種のアメリカシロヅルが普通に飛んでいたり、フロリダに山があったりといった不正確さも指摘している。チェックリストは約1日で完了し、バードウォッチングは混沌としたゲームプレイのおまけだと結論づけている。

### Key Discussion Points

- **drewg123**: 家族や友人と遊べる協力プレイがあればもっと楽しいのに、と要望。ジェイソンとルシアを1人ずつ操作する形が物語にも合うという。
  - **refibrillator**: 物理演算と描画のコストがほぼ倍になるため、現行機では他を犠牲にしないと難しいと推測。PC の MOD なら実現しそうだとも述べた。
  - **Doohickey-d**: ハッカーやMOD制作者、再コンパイル勢、その LLM が、Rockstar が入れなかった機能を近いうちに追加するだろうと予想。
- **aliasxneo**: メインキャンペーンはクリア済み。サンドボックス要素の作り込みは驚異的だが、ストーリー重視の作りで、ストーリー班が勝った印象だという。
  - **josephg**: 自分は麻薬拠点の摘発や海上の宝探し、レースなどで遊んでおり、進行度はまだ15%程度。何がストーリー優位なのか分からないと反論。
  - **nerdjon**: 細部が至る所に作り込まれており、それが多くのゲームに残る「ゲームっぽさ」を消していると評価。
- **pugworthy**: ゲーム内には EV と充電ステーションがあり、盗んだ Tesla にロックされて警察署まで運ばれる動画も見たという。
  - **embedding-shape**: 盗難防止システムが働かない場合でも挙動が極端に悪く、現実の同社製品への皮肉だと思うと述べた。
  - **sick_of_slop**: 初めて盗んだときに FSD が作動し、そのまま停車させられて逮捕されたという。
- **semolino**: ゲームにはフロリダ固有種のフロリダ・スクラブジェイも登場する。実際にオカラのフロリダ・トレイルで見たことがあり、カラス科らしい賢さがあるという。
- **willcodeforfoo**: 9歳の子どもが運転して探索するだけで喜びそうなので、穏やかなモードが欲しいと希望した。
  - **asimovDev**: 12歳以上向けのシンプソンズの PS2 ゲームや、ガチャ要素のある基本無料の NTE を挙げ、課金要素の扱いは保護者次第だと述べた。

## 2. [A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth)

**Score:** 418 | **Comments:** 172 | [Post](https://news.ycombinator.com/item?id=50603845)

自宅の Windows PC で、ChatGPT のようなAIをプライベートかつ無料で動かす初心者向けガイド。Unsloth Desktop でモデルを提供し、RTX 5090（VRAM 32GB）に収まる圧縮版 Qwen3.8-27B を使う。GPU のサイズ別の目安表に加え、LAN アクセスとリモートパスワードを設定して、家族が各自の端末からチャットできるようにする方法も解説している。

### Key Discussion Points

- **_pdp_**: 今のローカルAIは「プラズマTVの時代」で、初期で重く高価だと表現。実用的なAIの大半が手元で動くまで約5年かかり、一部の超高性能モデルだけがクラウドに残ると予想し、macOS 向けのローカルAI基盤も開発中だという。
  - **oytis**: bitter lesson は今まで外れたことがないので同意しない。5年後に現在の最先端級が手元で動くなら、データセンターのモデルはさらに強力になるはずだと反論。
  - **9x39**: 今はまだAIの「飲み放題」期間で、巨額の評価額を正当化するにはトークン価格が5〜10倍になり、ローカルAIの損益分岐点が大きく上がると指摘。
- **tacoman**: Nvidia P40 は eBay で約300ドル、24GB の GDDR5 を積むので、ローカルAIを安く試すのに向くという。
  - **denkmoon**: 14 tok/s ではプロンプトを投げて翌日まで待つような速度ではないか、と疑問を呈した。
  - **calebkaiser**: 購入前に RunPod や Vast で単体GPUを借りて試す方法を勧めた。
- **montroser**: RTX 5090 は不要で、MoE 層をシステムRAMに逃がせば 12〜16GB の VRAM でも実用的な量子化版が動く。Dell T5820 に Tesla P100 を足して約850ドルの構成を例示。
  - **Aurornis**: 同条件で試したところ体験は大きく違うので、現実的に見るべきだと注意した。
  - **icedchai**: Strix Halo（128GB）で試しているが、特定用途やプライバシー要件がなければ月20ドルの Claude の契約のほうが良いという。
- **thangalin**: 春から、ローカルで動くコンテナ化 Web アプリで、フルキャストの声色を使い分けて自作オーディオブックを朗読させている。
  - **teravor**: デモの出来はひどいと評価。CPU だけで動く PocketTTS と1つの良い声で十分だとした。
  - **drillsteps5**: 「加齢」音声が実質ピッチ変更だけで、歌声も不自然だと批判。
- **galaxyLogic**: 学習に大量のメモリが要ることは知っているが、モデルの実行にも同じだけ要るのか、と質問。
  - **alex43578**: 小型モデルは必要メモリが少ないが、能力もほぼ比例して下がる。量子化や MoE で緩和できると答えた。

## 3. [Free alternative TV network built from the Internet Archive's forgotten videos](https://spelunkr.tv)

**Score:** 399 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50606192)

Internet Archive にある忘れられた動画を素材に、ケーブルTV風のチャンネルを編成する無料サービス（サイトの標語は「Cable TV, but weirder」）。サイト本文は取得できず、題名とコメントからの要約になる。コメントによると、子ども向けアニメの「Meddling kids」のようなジャンル別チャンネルがあり、動画は Internet Archive から直接配信される。

### Key Discussion Points

- **scribblesvurt**: IPTV やローカルファイル、文字多重放送にも対応するレトロTVプレーヤーを Android 向けに作っており、このサービスにも対応したいという。
- **wumms**: ライブに追いつくための 1.25 倍速などの再生速度設定が欲しい。追いついたら自動で等倍に戻る機能も希望。
- **pluto_modadic**: 各番組の元の放送日をサイトに表示してほしいという。
- **andsoitis**: Internet Archive から直接配信しているが、自社のUXを迂回する別UIを Archive 側がどう思うのか気になるという。
  - **switz**: 友人と13年間、Archive の Live Music Archive のフロントエンド relisten.net を非営利のFOSSで運営している。Archive は総じてこうした取り組みに好意的だと述べた。
  - **boomboomsubban**: 人気が出ても Archive の帯域への影響は小さいはずで、気にするほうが偽善的だと思うという。
- **panza**: サイトのチャットが何をするものか気になる。チャンネルごとの任意のチャットルームかと思ったという。

## 4. [A miniature San Francisco with live buses, planes and boats](https://smallsf.com/)

**Score:** 235 | **Comments:** 88 | [Post](https://news.ycombinator.com/item?id=50603589)

サンフランシスコを等角投影のイラスト風に描いた、ドラッグとズームで操作できるインタラクティブ地図。ライブの交通情報や船、飛行機、天気、シミュレートされた車の流れが重なる。制作者は、Google の3D都市タイルを等角視点でレンダリングし、画像モデルで各タイルを統一画風に描き直して、1枚の地図につなぎ、深度マップで車が建物の裏に隠れる表現も実現している。

### Key Discussion Points

- **consi**: 約1か月前に自分の街で同様のものを作ったという。LLM を使って約3時間で完成し、3Dモデルが手に入らない地域だったため、オンラインの写真からエージェントがループで作った。
- **Brajeshwar**: Claude Code で等角投影のミニチュア地図を作って遊んでおり、miniworld.marceloeduardo.com の作品に感銘を受けたという。
- **simonw**: ズームすると壊れている部分があり、たとえば Hayes Valley の Patricia's Green という公園が丸ごと欠けていると報告。
  - **dutilh**（投稿者）: 指摘を受けて修正したと報告した。
  - **dasil003**: 101号線と80号線の交差部で、水面の上を車が走るという別の不具合も報告。
- **Rocnubi**: 拡大すると、背景のように見える車の上を車が走り抜ける。
  - **JumpCrisscross**: 車同士がすり抜けるのを自分も見たという。
- **bmc7505**: SF在住なら、サウサリートのフェリー先にある Bay Model Visitor Center も面白いと紹介した。

## 5. [Cathedral floor emerges in Sudan, revealing one of the biggest medieval churches](https://apnews.com/article/sudan-antiquities-nubia-cathedral-1b16f67da881ee5592de4481ee55c527)

**Score:** 195 | **Comments:** 48 | [Post](https://news.ycombinator.com/item?id=50547698)

スーダンで中世の大聖堂の床面が現れ、最大級の中世教会の一つだと判明したという AP 通信の記事。記事本文は取得できなかった（Wayback にも有効なスナップショットなし）。コメントから、ホワイトハウスより大きい可能性があり、研究者がハギア・ソフィアに例えたことが分かる。

### Key Discussion Points

- **mikaTheThird**: アッシリア人として、ヌビア人は今も存在すると述べた。学校では「アラブの国」にはアラブ人しかいないと教わり、アラブ人以外の民族への迫害が主流メディアで報じられないのは悲しいという。
  - **wahern**: 推測だとしたうえで、米国でヌビア人というと20世紀半ばのブラックパワー運動を連想させ、米国のアフリカ系文化の特異な参照先としてコード化されたのではないかと述べた。
  - **senderista**: 新しいシリア政府下でのアッシリア人の扱いを質問。
- **Sid_Lmao**: ファラス大聖堂の壁画を挙げた。1960年代にアスワン・ダムの水没直前にポーランドの考古学者が発掘し、多くがワルシャワ国立博物館に所蔵されている。ポーランドは60年以上ヌビアで調査を続けている。
- **dhosek**: 規模の想像に苦労したが、シカゴのホーリー・ネーム大聖堂とほぼ同じ大きさのようだと、地図上で比較した。
  - **holgerschurig**: 米国の単位に固執せず、メートル法に慣れるべきだと返した。
- **lo_zamoyski**: ポーランドの考古学とスーダンとの関係は1950年代に始まる。カジミェシュ・ミハウォフスキ率いるワルシャワ大学のチームがファラスで中世大聖堂と150点以上の壁画を発掘したという補足。
- **teleforce**: 記事がハギア・ソフィアに例えた点を受け、オスマン帝国がそれに魅了されたことや、後の教会建築への影響に触れた。
  - **kimitonatsu**: ノートルダム・パリの着工は1163年で、コルドバのカスティーリャによる征服は1236年、スペイン無敵艦隊は1588年だと年代の誤りを指摘した。
  - **theothernewax**: コルドバのメスキータはモスクの中にルネサンス様式の大聖堂が置かれたもので、後世の教会がそれを手本にしたとは言えないとした。

## 6. [Masullo on the Riemann Hypothesis](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/)

**Score:** 180 | **Comments:** 94 | [Post](https://news.ycombinator.com/item?id=50598441)

John Baez のブログ記事。Alessandro Masullo が11月20日に公開した940ページの草稿は、Alain Connes の仕事を土台にした新しい跡公式で、リーマン予想と一般化リーマン予想を証明したと主張する。ゼロ点を対数微分の極と捉え直し、特別なテスト関数の極限でそれらが臨界線の右側に来ないことを示す構成だという。ただし素数2での計算が誤った極限を与えるように見えるなど、早い段階でギャップが指摘され、Masullo 自身も草稿が未完成であると認めている。

### Key Discussion Points

- **davesque**: 引用された「数論の専門家ではないので暫定的」という但し書きは重要だと指摘。誰が先に証明したかにかかわらず、12年を費やした Masullo の人生が安っぽく扱われるようで気の毒だと述べた。
  - **musebox35**: 「結果より過程」という考え方を自分は育てており、そのほうが現実的だと返した。
  - **weinzierl**: ラッセルがゲーデルの証明を知ったときと同じで、AI固有の話ではないと述べた。
- **shank-false-rin**: AIを算盤や電卓のような普通の道具と同列に比較してよいのか疑問だとした。独裁者が数学者に総当たりで証明させる例を挙げ、その成果を独裁者の功績と言えるのかと問うた。
  - **drrotmos**: 1700万行の Lean が最良の証明の書き方なのか、LLM が冗長なだけではないのかと疑問を呈した。
  - **lowdude**: 計算機を使わないと実行不可能な最適化や数値計算は LLM 以前からあり、その論法は成り立たないと返した。
- **dead_hn_theory**: AIの総当たりでは新しい洞察がほとんど得られないことが問題だという。
  - **slibhb**: AIが総当たりだという前提に疑問を呈した。リーマン予想の文脈ではAIが問題の新しい見方を生み出しているはずだと述べた。
  - **bambax**: Hugo Duminil-Copin らの立場と同じで、AIの総当たりは征服した土地が不毛になる焦土作戦のようだと述べた。
- **ComplexSystems**: 先に証明された AI の結果と競合して Masullo が功績を失うという前提に反発した。AIの助けなしに証明したのなら、その価値は別にあるはずだという。
  - **onetimeusename**: AIを使うかどうかで達成の重みは違い、AIなしの方が明らかに偉業だと述べた。
  - **chorsestudios**: AI支援の有無がなぜ重要なのか分からない。算盤で10年かけた人は、計算機で速く解いた人より評価されるのかと問うた。

## 7. [GL.iNet Security Notice 2026-11-20](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20)

**Score:** 166 | **Comments:** 77 | [Post](https://news.ycombinator.com/item?id=50604988)

GL.iNet のルーターと KVM の多数のモデルに関するセキュリティ通知。11月20日に、クラウドのリモート管理サービスの欠陥を第三者が悪用し、一部の機器にマルウェアを仕込んだことを確認したという。同社は攻撃経路は塞いだとしている。利用者は機種ごとの最新の安定版ファームウェアに更新すれば、初期化なしでマルウェアが除去される。感染はプロセス `crond -i /tmp/.log` の有無で確認できる。

### Key Discussion Points

- **drnick1**: クラウド接続型の機器はやめ、OpenWrt を入れるか古いPCで自作ルーターを組むべきだ、家電はリモートサービスに繋ぐべきでないと主張した。
  - **matheusmoreira**: GL.iNet の標準ファームは OpenWrt ベースで、素の OpenWrt を入れたら最高のルーターになったという。
  - **jgil**: 素の OpenWrt が必ずしもベンダー製より安全とは限らない。デフォルトでは Web UI が平文 HTTP で配信されるなどの例を挙げた。
  - **sneak**: GL.iNet 機はデフォルトではクラウド機能が無効で、クラウドは dyndns を不要にする任意機能だと指摘。
- **dsissitka**: 少なくとも昨年から侵害されていた形跡があるとして、GL.iNet フォーラムの報告スレッドを紹介した。
  - **CrimsonCape**: GL.iNet ルーターを使っているなら読むべきスレッドで、2025年12月から侵害されていたと補足した。
- **zdw**: 多くの GL.iNet 機は OpenWrt に対応しているが、KVM はそうではなく懸念があるという。
  - **abound**: Flint 2 で最初にやったのは素の OpenWrt の導入だという。
  - **rootusrootus**: 自分は何を見逃しているのかと思ったが、KVM が対象と知って納得したと返した。
- **Gobd**: こうした機器は常にクラウド接続やリモートアクセスを無効にすべきで、さもなくば時間の問題だと述べた。
  - **socalgal2**: Ubiquiti 機も初期状態ではローカル専用だと返した。
- **akerl_**: クラウド管理を無効にしている機器は安全なのか、通知からは不明だが安全だと推測しているという。
  - **kotaKat**: 影響はクラウドを使っていた人に限られるようで、自分の Comet と Comet Q は対象外だったと述べた。

## 8. [XNU Linux: Full OS X GUI Userspace on Linux](https://github.com/AFK-surf/xnulinux)

**Score:** 161 | **Comments:** 72 | [Post](https://news.ycombinator.com/item?id=50607261)

Apple が公開した macOS カーネル XNU をソースからビルドし、ロード可能モジュール（`xnu.ko`）として未改造の arm64 Linux カーネル内で動かすプロジェクト。ハイパーバイザーなしで macOS と Linux のプロセスが同じCPU上で並走し、macOS 27 のディスクを起動して loginwindow、Dock、Finder、Safari などが動く。Linux 側のインターフェースモジュール（`fki.ko`）が、メモリや GPU、ネットワークなどを XNU に貸し出す。

### Key Discussion Points

- **pcwalton**: 次の段階として、OS をハードウェア内の鍵で暗号化して出荷し、CPU が復号して命令キャッシュに置くだけにして、Apple の CPU 以外での利用を防ぐ手があり得るのでは、と述べた。
  - **Aurornis**: XNU は公開されたオープンソースであり、今回の件はその成果の上に成り立つと指摘した。
  - **CodeArtisan**: 任天堂が同様のことをしたが鍵が回収され、鍵の著作権で DMCA 削除を行えたと述べた。
  - **saagarjha**: 一部のコンソールではすでに行われているが、デバッグが不可能になるため他では実用的でないとした。
- **ajasmin**: XNU を KVM 上で動かす方法と比べてどうなのか気になる。ユーザー視点では VM に近いが、効率や統合面の利点があるかもしれないという。
- **darksim905**: 同じ手法を Windows の NTOSKRNL でもできるのかと質問した。
  - **jasomill**: Apple Silicon で仮想化なしの Windows を動かすには、主にドライバーの問題がある。UEFI は TianoCore で足りるが、Windows 用ドライバーは Microsoft の署名が必要だと説明した。
  - **wmf**: かつて Linux と Windows を同時に動かす CoLinux があったと紹介した。
- **zakisaad**: 4〜5年前なら言葉を失ったはずで、この種のプロジェクトが当たり前になったことが驚異的だ。熟練の操作者がいれば何でもできそうだという。
- **jsomedon**: Asahi Linux を MacBook で動かしつつ macOS のデスクトップにも半ネイティブでアクセスできるのか、と質問した。
  - **ZiiS**: まだ無理で、ページサイズと GPU が今のところ VM 利用に結びついていると返答した。

## 9. [LittleBit: Ultra Low-Bit Quantization via Latent Factorization (2025)](https://arxiv.org/abs/2506.13771)

**Score:** 32 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50569505)

LLM を重み1個あたり約0.1ビットまで圧縮する枠組み。重みを低ランクの潜在行列に分解して二値化し、学習された多段階の重要度パラメータや Dual-SVID 初期化、Residual Compensation で情報損失を補う。著者らは、Llama2-13B を 0.9GB 未満に縮められ、Llama2-7B では 0.7 ビット級の主要手法を上回り、FP16 比で最大 11.6 倍の推論高速化が得られるとしている。

### Key Discussion Points

- **murkt**: 130億パラメータが0.1ビット/重みで0.9GBになる計算が合わない。13B × 0.1 / 8 ≈ 0.16GB のはずで、FP16 から約160倍になるべきなのに11倍程度なのはなぜか、と疑問を呈した。
- **stev1983**: 難しい点は変換後に再学習が必要なことだと述べた。三値量子化のように学習中に使う QAT に応用できそうで、少なくとも一般知識モデルには有望に思えるという。
- **citbl**: 興味深いが、そのLLMはまだ実用に足るのか、と疑問を呈した。

## 10. [A Partial Evaluator for C](https://phoenix.labri.fr/software/tempo/)

**Score:** 28 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50607627)

IRISA/INRIA と LABRI の Compose プロジェクトが開発した C 言語の部分評価器 Tempo。入力のうち事前に分かっているものを指定すると、コードを解析して特殊化版を生成する。コンパイル時のソース変換と実行時のバイナリ生成の両方に対応し、OS、ネットワーク、コンピュータグラフィックス、科学計算などに応用されてきたという。

### Key Discussion Points

- **RossBencina**: Tempo のソースコードを探している途中で、LLVM ビットコード向けの部分評価器 LLPE（llpe.org）を見つけたと紹介した。

## Trends

- **AI の民主化と評価**: ローカルAIの入門ガイド（#2）、0.1ビット級の極端な量子化（#9）、AIが絡む数学の証明（#6）と、AIの手元化と成果の評価が並んだ。
- **ゲームと遊び心のあるクリエイション**: GTA 6 の鳥類図鑑（#1）、Internet Archive の動画を再編成したTV（#3）、SF のミニチュア地図（#4）のように、既存の素材を再構成して遊ぶ作品が上位に並んだ。
- **セキュリティとクラウド依存への警戒**: GL.iNet の件（#7）では、クラウド管理機能を切るか OpenWrt に移るべきだという声が目立った。
- **OS・コンパイラ技術**: XNU を Linux 上で動かす試み（#8）と C の部分評価器 Tempo（#10）は、システムソフトウェアの古くて新しい工夫を示す。
- **歴史・考古学**: スーダンの大聖堂（#5）には、ポーランド隊による長年の調査の補足が寄せられた。
