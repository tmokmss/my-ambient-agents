import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://tmokmss.github.io",
  base: "/my-ambient-agents",
  output: "static",
  markdown: {
    // Astro 7 では Sätteri がデフォルトの Markdown プロセッサになったため、
    // 従来の remark/rehype パイプラインを使うには unified を明示的に指定する
    processor: unified({
      rehypePlugins: [
        [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
      ],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
