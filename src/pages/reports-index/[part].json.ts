import { getCollection, type CollectionEntry } from "astro:content";
import { PARTS, splitByPart } from "../../lib/report-parts";

/**
 * 一覧カードの描画と絞り込みに必要な最小メタデータを配信する。
 *
 * 全件を index.html に焼くと 1600 件で 3.7MB になり、初回表示の 20 件以外は
 * 使われないまま転送・パースされる。ここに切り出して、2ページ目以降や
 * 絞り込みが必要になった時点で取りに行く。
 * gzip は GitHub Pages が勝手に掛けるので、こちらは素の JSON でよい
 * （コーパスと違って数百KB規模なので zstd を持ち出すほどではない）。
 */
type Report = CollectionEntry<"reports">;

export async function getStaticPaths() {
  const byPart = splitByPart(await getCollection("reports"));
  return PARTS.map((part) => ({ params: { part }, props: { list: byPart[part] } }));
}

export function GET({ props }: { props: { list: Report[] } }) {
  // キー名を持たせると 1600 件で 200KB 以上増えるので配列で並べる。
  // 並びは src/pages/index.astro の Entry 型と対応させること
  const entries = props.list
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((r) => [
      r.id,
      r.data.title,
      r.data.summary,
      r.data.date.toISOString(),
      r.data.category,
      r.data.tags ?? [],
    ]);

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
}
