# Ambient Agents

GitHub Actions の scheduled trigger で定期実行される Claude エージェント群。
結果は Astro の静的サイトとして GitHub Pages にデプロイされる。

## Adding a New Agent

`/create-agent` スキルを使用する。

## Git Workflow

- main ブランチに直接 push してよい（PR 不要）
- push すると `deploy.yml` が自動で Astro build → GitHub Pages デプロイ
- `git reset --hard` や `git checkout .` など、ローカルの変更を破棄する操作は絶対に行わないこと（ユーザーが明示的に指示した場合を除く）

## Dev Server

- ポート 4321 が既に使用中の場合、dev server は起動済みなので停止せずそのままアクセスすること

## Security

- このリポジトリおよび生成されたレポートはすべて公開される。秘匿情報（APIキー、トークン、パスワード、内部URLなど）は絶対にコードやレポートに含めてはならない

## Key Points

- エージェントは `src/content/reports/` 以外のファイルを変更してはならない
- ファイル名は `YYYY-MM-DD-HH-mm-<slug>.md` 形式（UTC時刻）
- エージェントは main に直接コミット・プッシュする
- OAuth トークンは `CLAUDE_CODE_OAUTH_TOKEN` シークレットで管理
