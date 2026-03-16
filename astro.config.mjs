import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://tmokmss.github.io",
  base: "/my-ambient-agents",
  output: "static",
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
