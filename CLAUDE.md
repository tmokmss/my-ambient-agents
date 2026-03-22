# Ambient Agents

GitHub Actions の scheduled trigger で定期実行される Claude エージェント群。
結果は Astro の静的サイトとして GitHub Pages にデプロイされる。

## Adding a New Agent

`/create-agent` スキルを使用する。

## Git Workflow

- main ブランチに直接 push してよい（PR 不要）
- ただし implement-issue ワークフロー（Issue 自動実装）は PR を作成する
- push すると `deploy.yml` が自動で Astro build → GitHub Pages デプロイ
- `git reset --hard` や `git checkout .` など、ローカルの変更を破棄する操作は絶対に行わないこと（ユーザーが明示的に指示した場合を除く）

## Dev Server

- ポート 4321 が既に使用中の場合、dev server は起動済みなので停止せずそのままアクセスすること

## Security

- このリポジトリおよび生成されたレポートはすべて公開される。秘匿情報（APIキー、トークン、パスワード、内部URLなど）は絶対にコードやレポートに含めてはならない

## Self-Improvement

- エージェントはレポート生成・コミット・プッシュ完了後に、suggest-improvements skill に従い改善提案の Issue を起票すること

## Key Points

- エージェントは `src/content/reports/` 以外のファイルを変更してはならない
- ファイルは `src/content/reports/YYYY-MM-DD/HH-mm-<slug>.md` 形式で配置（UTC時刻）
- レポート生成エージェントは main に直接コミット・プッシュする
- Issue 実装エージェント（implement-issue）は PR を作成する
- OAuth トークンは `CLAUDE_CODE_OAUTH_TOKEN` シークレットで管理
