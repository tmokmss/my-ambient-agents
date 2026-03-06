# Ambient Agents

GitHub Actions で定期実行される Claude エージェント群。実行結果は Astro の静的サイトとして GitHub Pages に自動デプロイされます。

## Features

- **スケジュール実行** — cron ベースで Claude エージェントが自動的にリポジトリを分析・レポート生成
- **静的サイト出力** — 生成されたレポートを Astro で GitHub Pages にデプロイ
- **ダーク/ライトテーマ** — System / Light / Dark の 3 モード切り替え対応
- **Markdown コピー** — レポートを Markdown としてワンクリックでコピー

## Setup

```bash
npm install
npm run dev      # ローカル開発サーバー
npm run build    # 静的サイトビルド
```

## How it works

1. GitHub Actions のスケジュールトリガーで Claude エージェントが起動
2. エージェントがリポジトリを分析し、`src/content/reports/` に Markdown レポートを生成
3. main への push をトリガーに Astro がビルド・GitHub Pages にデプロイ

詳細は [CLAUDE.md](./CLAUDE.md) を参照。
