/**
 * 全文検索用のテキスト正規化。
 * ビルド時（コーパス生成）とブラウザ側（クエリ解析）で同じ実装を共有する。
 */

/** 全角英数を半角に畳み、小文字化する。インデックスとクエリの両方に適用する */
export function normalizeForSearch(text: string): string {
  return text.normalize("NFKC").toLowerCase();
}

/** Markdown から検索対象のプレーンテキストを取り出す */
export function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[.*?\]\(.*?\)/g, " ")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/^#{1,6}\s+/gm, " ")
    .replace(/[*_~>]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** 1レポート分の検索対象テキスト（タイトル + 概要 + タグ + 本文） */
export function buildSearchText(report: {
  title: string;
  summary: string;
  tags?: string[];
  body: string;
}): string {
  return normalizeForSearch(
    [report.title, report.summary, (report.tags ?? []).join(" "), stripMarkdown(report.body)].join(" "),
  );
}

/** UTC の YYYY-MM */
export function monthOf(date: Date): string {
  return date.toISOString().slice(0, 7);
}
