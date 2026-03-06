import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tmokmss.github.io",
  base: "/my-ambient-agents",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
