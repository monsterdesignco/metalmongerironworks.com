import { defineMDSveXConfig as defineConfig } from "mdsvex";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");
const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],

  layout: {
    home: path.join(dirname, "./src/lib/layouts/home-layout.svelte"),
    gallery: path.join(dirname, "./src/lib/layouts/gallery-layout.svelte"),
  },
});

export default config;
