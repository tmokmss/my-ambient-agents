/**
 * 全文検索用のテキスト正規化。
 * ビルド時（コーパス生成）とブラウザ側（クエリ解析）で同じ実装を共有する。
 */

/**
 * 全角英数などの互換文字を畳む。インデックスとクエリの両方に適用する。
 * 大小文字は畳まない（ヒット箇所を原文のまま見せたいので、照合側を
 * case-insensitive にして揃える）。
 */
export function normalizeForSearch(text: string): string {
  return text.normalize("NFKC");
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

/**
 * 1レポート分の検索対象テキスト。
 * head（タイトル・概要・タグ）と body（本文）を分けてあるのは、
 * ヒット箇所のスニペットを本文からだけ切り出すため。
 * head の内容はカード上に既に見えていて、切り出しても代わり映えしない。
 */
export function buildSearchText(report: {
  title: string;
  summary: string;
  tags?: string[];
  body: string;
}): { head: string; body: string } {
  return {
    head: normalizeForSearch([report.title, report.summary, (report.tags ?? []).join(" ")].join(" ")),
    body: normalizeForSearch(stripMarkdown(report.body)),
  };
}

/** ブラウザへ配るコーパスの1件 */
export type SearchDoc = [id: string, head: string, body: string];

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
