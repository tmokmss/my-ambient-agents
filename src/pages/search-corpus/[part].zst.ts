import zlib from "node:zlib";
import { getCollection } from "astro:content";
import { buildSearchText, monthOf } from "../../lib/search-text";

type Report = {
  id: string;
  data: { title: string; summary: string; tags?: string[]; date: Date };
  body?: string;
};

/**
 * 全文検索用コーパスを zstd 圧縮して配信する。
 *
 * gzip は窓が 32KB しかなく、数ヶ月にまたがる語句の繰り返しを拾えない。
 * 窓 8MB の zstd なら同じ内容が 9.1MB -> 5.4MB に縮む。
 * GitHub Pages は gzip しか返さないので、あらかじめ圧縮したものを配ってブラウザ側で復元する。
 *
 * ファイルは2つに固定する:
 *   archive … 当月より前のぶん。月に一度しか変わらないので長期キャッシュが効く
 *   current … 当月ぶん。レポート追加のたびに変わるが小さい
 */
const ZSTD_PARAMS = {
  [zlib.constants.ZSTD_c_compressionLevel]: 19,
  // windowLog=23 (8MB) は zstd の仕様が復元器に要求する上限。
  // これ以上広げても 0.7% しか縮まないうえ、復元側を選ぶようになる
  [zlib.constants.ZSTD_c_windowLog]: 23,
};

export async function getStaticPaths() {
  const reports = (await getCollection("reports")) as unknown as Report[];
  const latest = reports.reduce(
    (max, r) => (new Date(r.data.date) > max ? new Date(r.data.date) : max),
    new Date(0),
  );
  const currentMonth = monthOf(latest);
  const inCurrent = (r: Report) => monthOf(new Date(r.data.date)) === currentMonth;

  return [
    { params: { part: "archive" }, props: { list: reports.filter((r) => !inCurrent(r)) } },
    { params: { part: "current" }, props: { list: reports.filter(inCurrent) } },
  ];
}

export function GET({ props }: { props: { list: Report[] } }) {
  const docs = props.list
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .map((r) => [
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
