---
title: "Tech Feed ダイジェスト（2026年10月31日）"
date: "2026-10-30T15:49"
category: "summary"
summary: "Linuxカーネル脆弱性、Binance巨額流出、偽TLS証明書、AWS ASGの置換挙動変更など、8ソースの技術トピックを整理"
tags: ["security", "linux", "aws", "ai", "llm", "devops", "web", "tls"]
---

## はてなブックマーク (テクノロジー)
- **[メルセンヌ・ツイスタ。PythonやC++でも使われる、世界標準「擬似乱数」の設計思想【松本眞】](https://levtech.jp/media/detail_959/)** ([245users](https://b.hatena.ne.jp/entry/s/levtech.jp/media/detail_959/)) - Python や C++ の標準乱数としても採用されるメルセンヌ・ツイスタについて、開発者本人が設計思想を語るインタビュー。乱数生成器の周期や品質に対する考え方を知る手がかりになる。
- **[Linuxカーネルの重大な脆弱性（CVE-2026-98432）によるカーリルへの影響について – カーリルのブログ](https://blog.calil.jp/2026/10/linux-kernel.html)** ([156users](https://b.hatena.ne.jp/entry/s/blog.calil.jp/2026/10/linux-kernel.html)) - Linux カーネルの重大な脆弱性が自社サービスに与えた影響をまとめた事業者の報告。自社環境への影響範囲の見極め方の実例として参考になる。同じ件を piyolog も経緯整理の形で扱っている。
- **[個人情報を自社のDBに持たない設計は、どこまでできるのか - every Tech Blog](https://tech.every.tv/entry/2026/10/30/124255)** ([104users](https://b.hatena.ne.jp/entry/s/tech.every.tv/entry/2026/10/30/124255)) - 個人情報を自前の DB に保持しない設計をどこまで徹底できるかを検討した設計記事。漏えいリスクの低減と実装上の制約のトレードオフを扱う。
- **[Security notice — malicious version of Anthropic.claude-code (2.1.313) identified in the Cursor Extension Marketplace](https://cursor.com/blog/claude-code-extension-security-notice)** ([10users](https://b.hatena.ne.jp/entry/s/cursor.com/blog/claude-code-extension-security-notice)) - Cursor の拡張マーケットプレイスで、Claude Code を装った悪意あるバージョン（2.1.313）が見つかったという公式告知。エディタ拡張経由のサプライチェーン攻撃への警戒が必要。同じ件を Lobsters（86pt）や dev.to でも別角度で取り上げている。

## Zenn
- **[WASIじゃない、もう一つのインターフェース「WALI」という提案](https://zenn.dev/progate/articles/wali-webassembly-linux-interface)** - WebAssembly から Linux のシステムコール相当を扱うインターフェース「WALI」を、WASI との対比で紹介する記事。
- **[デバッグコードを脆弱性にしない方法](https://zenn.dev/yasuakiomokawa/articles/5a7188483acfe7)** - 開発用に仕込んだデバッグ用コードが本番で脆弱性になる事態を防ぐための考え方をまとめた記事。
- **[ローカルLLMは本当に騒がれてるほどか？ Qwen3.8-Flash-Nextの4bit版を家で動かして確かめた](https://zenn.dev/yumeno/articles/strata-flash-next-iq4xs-80gb)** - 話題のローカル LLM を 4bit 量子化で自宅マシンに載せ、実用性を検証した体験記。
- **[Claude Codeで「QAチーム」を組んだら、効いたのは「捨てる仕組み」だった](https://zenn.dev/sre_holdings/articles/d4acb079680a79)** - Claude Code で QA 役のエージェントを組んだ結果、AI だけが見つけた不具合と見逃しを比較し、出力を捨てる仕組みが効いたとする運用報告。
- **[IVRyのSREの取り組み 2026冬](https://zenn.dev/ivry/articles/70d4f05ce4ae5c)** - 電話 AI サービスを運営する IVRy の SRE チームによる、信頼性向上の取り組みの紹介。

## Qiita
- **[GA4 のイベントが「gtag.js の読み込み前」に静かに消えていた：Next.js の2サイトで見つけた3つの壊れ方と直し方](https://qiita.com/yamadagenki/items/d35d769e9771997de3be)** - Next.js の 2 サイトで GA4 のカスタムイベントがエラーなしに 0 件になっていた原因を調べ、3 つの壊れ方と修正をまとめたトラブルシューティング記事（冒頭抜粋より）。
- **[macOS のキーチェーンで ~/.zshrc に平文で書いた認証情報を撲滅しよう](https://qiita.com/megmogmog1965/items/0538e79c2077fcbd5b2d)** - `~/.zshrc` に直書きしたトークンや API キーを macOS キーチェーンへ移し、シェル起動時に取り出す方法。「値を書かず、取り出すコマンドを書く」置き換えが要点（冒頭抜粋より）。
- **[AIエージェントの承認スキップが怖いので、Docker Sandboxes(sbx)で隔離して安全に動かしてみた【Antigravity CLI】](https://qiita.com/na-tamura/items/193338c0a9154b01255f)** - 承認を省略するフラグ付きでエージェントを長時間走らせる際に、Docker Sandboxes で隔離して被害範囲を限定する検証記事。
- **[mapにparseIntを渡すと同じ文字列が別の数になる：第2引数の衝突をNode.jsで実測](https://qiita.com/ennagara128/items/b7a08481d51c7b809313)** - `['10','10','10'].map(parseInt)` が `[10, NaN, 2]` になる理由を、map が渡す第2引数（index）が parseInt の基数と衝突するためだと Node.js で実測して示す。

## AWS 新着
- **[AWS EC2 Auto Scaling now supports Launch Before Terminate at account-level to replace instances](https://aws.amazon.com/about-aws/whats-new/2026/10/ec2-auto-scaling-launch-before-terminate/)** (2026-10-26) - アカウント単位で「先に起動してから終了」を全 Auto Scaling グループの既定の置換動作にできる。置換中の容量低下を避けたい構成で設計判断に効く。
- **[AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs](https://aws.amazon.com/about-aws/whats-new/2026/10/glue-catalog-oauth-iceberg-rest/)** (2026-10-26) - Iceberg REST Catalog API に OAuth 2.0 ベアラートークン認証が使えるようになり、外部エンジンからの接続を標準的な認証方式で扱える。
- **[Amazon ECR now supports replication backfill for existing container images](https://aws.amazon.com/about-aws/whats-new/2026/10/replication-backfill-amazon-ecr)** (2026-10-26) - 既存のプライベートレジストリ内イメージを、設定済みのレプリケーション先へ遡って複製できる。新規 push だけだったレプリケーションの穴が埋まる。
- **[Amazon MSK Connect now supports updating connector plugins and worker configurations](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-msk-connect-update-plugin-worker-configurations)** (2026-10-29) - 既存コネクタのカスタムプラグインとワーカー設定を更新できるようになった。
- **[Amazon Managed Grafana now supports in-place upgrade to Grafana version 13.2](https://aws.amazon.com/about-aws/whats-new/2026/10/managed-grafana-upgrade-version-13-2/)** (2026-10-29) - Grafana 12.4 から 13.2 へのインプレースアップグレードに対応。OSS の 13.0〜13.2 の機能がまとめて使える。

## Lobsters
- **[If you love a website, back it up](http://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/)** (51pt) - 好きなウェブサイトは消えうるので自分でバックアップしておこう、という主張のブログ。web タグ。
- **[My favourite PowerMac is a Nintendo Wii](https://virtuallyfun.com/2026/10/29/my-favourite-powermac-is-a-nintendo-wii/)** (48pt) - 任天堂 Wii を PowerMac として捉えるレトロコンピューティング／リバースエンジニアリングの読み物。
- **[How curl was accidentally Turing-complete for nine months](https://seriot.ch/computation/curl.html)** (37pt) - curl が 9 か月間、意図せずチューリング完全になっていたことを検証した計算機科学系の記事。
- **[Do At-Proto Users Know This Is Public?](https://melaniekat.com/blog/public-on-pds/)** (36pt) - AT Protocol（Bluesky）で PDS 上のデータが公開される前提を、利用者が理解しているかを問うプライバシー面の考察。
- **[XSS in yarr RSS reader](https://0x67673068.me/xss-in-yarr/)** (9pt) - Go 製 RSS リーダー yarr で見つかった XSS の報告。フィード内容をどう描画するかが問われる典型例。

## dev.to
- **[Neon Realtime vs Supabase Realtime](https://dev.to/kubeden/neon-realtime-vs-supabase-realtime-410g)** - Neon が 10/15 に出した Realtime（SQL クエリを購読する方式）を Supabase Realtime と比較する記事。
- **[MoE Offloading Isn't Always Faster: I Tested 5 Models on a 16GB GPU](https://dev.to/sizzlebop/moe-offloading-isnt-always-faster-i-tested-5-models-on-a-16gb-gpu-498a)** - 16GB GPU で 5 つの MoE モデルを検証し、オフロードが常に速いわけではないことを示した実測記事。
- **[Zero Trust CI/CD: Keyless Bitbucket Deployment on Google Cloud](https://dev.to/gde/zero-trust-cicd-keyless-bitbucket-deployment-on-google-cloud-1ka1)** - 静的なサービスアカウントキーをやめ、Bitbucket から Google Cloud へキーレスでデプロイする構成の解説。
- **[Human-in-the-Loop Agents in Pure Dart: Genkit, MCP and an Approval Gate on Cloud Run](https://dev.to/gde/human-in-the-loop-agents-in-pure-dart-genkit-mcp-and-an-approval-gate-on-cloud-run-4gmc)** - Dart の Genkit と MCP で、実行前に人間の承認を挟むエージェントを Cloud Run に載せる実装例。
- **[How I stopped re-explaining my repo when switching between Claude Code, Codex, and Cursor](https://dev.to/rakkunn/how-i-stopped-re-explaining-my-repo-when-switching-between-claude-code-codex-and-cursor-5cem)** - 複数のコーディングエージェントを行き来する際に、リポジトリの説明をやり直さずに済ませる工夫の紹介。

## TechCrunch
- **[North Korean hackers blamed for stealing record $6.3B in Binance breach](https://techcrunch.com/2026/10/30/north-korean-hackers-blamed-for-stealing-record-6-3b-in-binance-breach/)** - Binance の従業員を足がかりにした侵入で、過去最大規模の約 63 億ドルが盗まれ、北朝鮮系ハッカーの関与が疑われている。Ars Technica も同じ件を別角度で報じている。
- **[Can AI data centers be mass-produced like cars? This startup aims to find out](https://techcrunch.com/2026/10/30/can-ai-data-centers-be-mass-produced-like-cars-and-online-in-48-hours-this-startup-aims-to-find-out/)** - Runware が AI データセンターを工場で量産し、短期間で稼働させる構想を進めている。
- **[As search traffic dries up, Reddit announces it's shifting to a logged-in experience](https://techcrunch.com/2026/10/29/as-search-traffic-dries-up-reddit-announces-its-shifting-to-a-logged-in-experience/)** - 検索流入の減少を受け、Reddit がログイン前提の体験へ移行する。クローラやスクレイピング前提のツールには影響しうる。
- **[DoorDash said it's only received 'several hundred' orders from AI agents](https://techcrunch.com/2026/10/30/doordash-said-its-only-received-several-hundred-orders-from-ai-agents/)** - DoorDash は第三者のエージェント開発者との連携に前向きだが、AI エージェント経由の注文はまだ数百件にとどまる。

## Ars Technica
- **[Hackers obtain counterfeit TLS certificates for Google and other large services](https://arstechnica.com/security/2026/10/hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services/)** - 3 つのドメインレジストリの侵害により、Google など大手サービスの偽 TLS 証明書が発行された。ドメイン検証に依存する証明書発行の信頼の連鎖が弱点になった事例。
- **[Intel gets waiver after worries fuzzy US ban on foreign-made robots may hit fabs](https://arstechnica.com/ai/2026/10/intel-gets-waiver-after-worries-fuzzy-us-ban-on-foreign-made-robots-may-hit-fabs/)** - 外国製ロボットの輸入規制が曖昧なため、半導体工場の搬送用ロボット車両に影響しうるとして Intel が適用除外を得た。
- **[As US ties fray, Europe plans first undersea cable link to Greenland](https://arstechnica.com/gadgets/2026/10/as-us-ties-fray-europe-plans-first-undersea-cable-link-to-greenland/)** - 欧州が米国を経由せず、カナダ・日本・韓国を結ぶ Pan-Arctic Cable を計画している。インターネット基盤の経路多様化の動き。
- **[Microsoft fixes a Windows 11 annoyance as PC revenue declines](https://arstechnica.com/gadgets/2026/10/windows-11-gets-right-click-menu-improvements-as-pc-revenue-slides/)** - 最新の Windows 11 更新で右クリックメニューが改善され、起動しない PC 向けのクラウド回復オプションも加わった。

## 注目トピック
セキュリティでは「信頼の連鎖」が複数の角度で揺らいでいる。Linux カーネルの重大な脆弱性（CVE-2026-98432）、ドメインレジストリ侵害による偽 TLS 証明書、Cursor 拡張マーケットプレイスに現れた偽 Claude Code と、OS・証明書・開発ツールのそれぞれが標的になった。Binance の約 63 億ドル流出も、従業員を足がかりにした侵入で北朝鮮系の関与が疑われている。依存コンポーネントの出所と更新経路を見直す契機になる。

もう一つの流れは、エージェント時代に合わせた基盤側の調整だ。AWS では Auto Scaling の置換動作や ECR のレプリケーション、Iceberg REST Catalog の OAuth 対応など運用の細部が詰められている。開発側でも、承認なしで走らせるエージェントを Docker Sandboxes で隔離する、人間の承認ゲートを実装に組み込むといった「安全に任せる」工夫が目立つ。Reddit のログイン必須化や DoorDash のエージェント注文の少なさは、Web 側がまだエージェントの流入に追いついていないことも示している。
