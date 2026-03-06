# Ambient Agents

GitHub Actions の scheduled trigger で定期実行される Claude エージェント群。
結果は Astro の静的サイトとして GitHub Pages にデプロイされる。

## Architecture

```
.github/
  workflows/
    <agent-name>.yml    # 各エージェントのワークフロー
    deploy.yml          # main push 時に Astro build → GitHub Pages
  skills/
    output-report.md    # レポート出力フォーマットの指示
src/
  content/reports/      # エージェントが生成する Markdown レポート
  content.config.ts     # Content Collection 定義
  layouts/              # Astro レイアウト
  pages/                # ページテンプレート
```

## Adding a New Agent

新しいエージェントを追加するには以下の手順に従う。

### 1. ワークフローファイルを作成

`.github/workflows/<agent-name>.yml` を作成する。`agent.yml` をテンプレートとして使う:

```yaml
name: <Agent Display Name>

on:
  schedule:
    - cron: "<cron expression>"  # e.g. "0 0 * * 1" = 毎週月曜 00:00 UTC
  workflow_dispatch:
    inputs:
      prompt:
        description: "Custom prompt for the agent"
        required: false
        type: string

permissions:
  contents: write
  pull-requests: write
  issues: read
  id-token: write

jobs:
  run-agent:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: anthropics/claude-code-action@v1
        with:
          prompt: |
            ${{ inputs.prompt || '<default prompt for this agent>' }}

            Use the skill defined in .github/skills/output-report.md for output format.
          claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
```

### 2. (任意) スキルファイルを追加

エージェント固有の出力指示が必要なら `.github/skills/<skill-name>.md` を作成し、
ワークフローの prompt 内で参照する。

共通のレポート出力形式は `.github/skills/output-report.md` に定義済み。

### 3. レポートのカテゴリ追加

新しいカテゴリが必要なら `output-report.md` の frontmatter schema に追加する:
- 現在の category: `summary | analysis | alert | maintenance`

### 4. デプロイ

エージェントが PR を作成 → レビュー・マージ → `deploy.yml` が自動でビルド・デプロイ。

## Report Frontmatter Schema

```yaml
---
title: "Report title"
date: "YYYY-MM-DD"
category: "summary | analysis | alert | maintenance"
summary: "One-line summary (max 120 chars)"
agent: "claude"
---
```

## Key Points

- エージェントは `src/content/reports/` 以外のファイルを変更してはならない
- ファイル名は `YYYY-MM-DD-<slug>.md` 形式
- エージェントは PR を作成し、直接 main にはコミットしない
- OAuth トークンは `CLAUDE_CODE_OAUTH_TOKEN` シークレットで管理
