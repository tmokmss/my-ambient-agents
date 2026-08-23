import zlib from "node:zlib";
import { getCollection, type CollectionEntry } from "astro:content";
import { buildSearchText, CORPUS_PARTS, monthOf, type CorpusPart } from "../../lib/search-text";

/**
 * 全文検索用コーパスを zstd 圧縮して配信する。
 *
 * gzip は窓が 32KB しかなく、数ヶ月にまたがる語句の繰り返しを拾えない。
 * 窓 8MB の zstd なら同じ内容が 9.1MB -> 5.4MB に縮む。
 * GitHub Pages は gzip しか返さないので、あらかじめ圧縮したものを配ってブラウザ側で復元する。
 */
const ZSTD_PARAMS = {
  [zlib.constants.ZSTD_c_compressionLevel]: 19,
  // windowLog=23 (8MB) は zstd の仕様が復元器に要求する上限。
  // これ以上広げても 0.7% しか縮まないうえ、復元側を選ぶようになる
  [zlib.constants.ZSTD_c_windowLog]: 23,
};

type Report = CollectionEntry<"reports">;

export async function getStaticPaths() {
  const reports = await getCollection("reports");
  // 分割の境界は壁時計ではなく最新レポートの月から決める（ビルドが再現可能になる）
  const currentMonth = monthOf(
    reports.reduce((latest, r) => (r.data.date > latest ? r.data.date : latest), new Date(0)),
  );

  const byPart: Record<CorpusPart, Report[]> = { archive: [], current: [] };
  for (const r of reports) {
    byPart[monthOf(r.data.date) === currentMonth ? "current" : "archive"].push(r);
  }

  return CORPUS_PARTS.map((part) => ({ params: { part }, props: { list: byPart[part] } }));
}

export function GET({ props }: { props: { list: Report[] } }) {
  // 並び順は使われない（ブラウザ側は id の集合を作り、表示順は DOM の日付順のまま）
  const docs = props.list.map((r) => [
    r.id,
    buildSearchText({
      title: r.data.title,
      summary: r.data.summary,
      tags: r.data.tags,
      body: r.body ?? "",
    }),
  ]);

  const compressed = zlib.zstdCompressSync(Buffer.from(JSON.stringify(docs), "utf8"), {
    params: ZSTD_PARAMS,
  });

  return new Response(new Uint8Array(compressed), {
    headers: { "Content-Type": "application/zstd" },
  });
}
