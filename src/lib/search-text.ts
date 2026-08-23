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

/**
 * 配信するコーパスの分割単位。ビルド側の生成とブラウザ側の取得が
 * 同じ定義を参照するようにして、片方だけ変えても気づけない状態を防ぐ。
 *   archive … 最新レポートの月より前。月に一度しか変わらないのでキャッシュが効く
 *   current … 最新レポートの月。追加のたびに変わるが小さい
 */
export const CORPUS_PARTS = ["archive", "current"] as const;

export type CorpusPart = (typeof CORPUS_PARTS)[number];
