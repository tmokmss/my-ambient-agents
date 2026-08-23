/**
 * ブラウザへ遅延配信するデータの分割単位。
 * 全文検索コーパス（search-corpus）と一覧メタデータ（reports-index）が同じ分割を共有する。
 *   archive … 最新レポートの月より前。月に一度しか変わらないのでキャッシュが効く
 *   current … 最新レポートの月。追加のたびに変わるが小さい
 */
export const PARTS = ["archive", "current"] as const;

export type Part = (typeof PARTS)[number];

/** UTC の YYYY-MM */
export function monthOf(date: Date): string {
  return date.toISOString().slice(0, 7);
}

/**
 * レポートを part ごとに振り分ける（各エンドポイントの getStaticPaths 用）。
 * ブラウザ側も PARTS を読むモジュールなので、astro:content には依存させない。
 * 日付を持つものなら何でも受ける形にしてある。
 */
export function splitByPart<T extends { data: { date: Date } }>(reports: T[]): Record<Part, T[]> {
  // 分割の境界は壁時計ではなく最新レポートの月から決める（ビルドが再現可能になる）
  const currentMonth = monthOf(
    reports.reduce((latest, r) => (r.data.date > latest ? r.data.date : latest), new Date(0)),
  );

  const byPart: Record<Part, T[]> = { archive: [], current: [] };
  for (const r of reports) {
    byPart[monthOf(r.data.date) === currentMonth ? "current" : "archive"].push(r);
  }
  return byPart;
}
