---
name: create-agent
description: 新しいエージェント（GitHub Actions ワークフロー）を追加する手順を案内する。ワークフローYAMLのテンプレート、プロンプト設定、カテゴリ追加の方法を含む。
---

# Create Agent

新しいエージェントを追加する手順。

## 1. プロンプトファイルを作成

`prompts/<agent-name>.md` にエージェント固有のプロンプトを記述する。

- `${AGENT_SLUG}`, `${AGENT_CATEGORY}` などの環境変数プレースホルダーが使える（`envsubst` で展開される）
- JST 時刻が必要な場合は `${JST_TIME}` を使う
- 共通のレポート出力形式は `.claude/skills/output-report/SKILL.md` に定義済み

## 2. ワークフローファイルを作成

`.github/workflows/<agent-name>.yml` を作成する。既存のワークフロー（例: `hackernews.yml`）をテンプレートとして使う:

```yaml
name: <Agent Display Name>

on:
  schedule:
    - cron: "<cron expression>"  # e.g. "0 0 * * 1" = 毎週月曜 00:00 UTC
  workflow_dispatch:

env:
  AGENT_SLUG: <slug>
  AGENT_CATEGORY: <category>

permissions:
  contents: write
  issues: write
  id-token: write

jobs:
  run-agent:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: ./.github/actions/load-prompt
        with:
          prompt-file: prompts/<agent-name>.md

      - uses: anthropics/claude-code-action@v1
        with:
          prompt: ${{ env.AGENT_PROMPT }}
          claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
          claude_args: "--dangerously-skip-permissions"
          show_full_output: true
```

## 3. レポートのカテゴリ追加

新しいカテゴリが必要な場合、以下の2箇所を更新する:
1. `src/pages/index.astro` の `categoryIcons` にアイコンを追加（`@lucide/astro` から import）
2. `.claude/skills/output-report/SKILL.md` の frontmatter schema の category 一覧

## 4. デプロイ

エージェントが main に直接 push → `deploy.yml` が自動でビルド・デプロイ。
