import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  // GitHub Pages serves the site at /my-portfolio/
  base: "/my-portfolio/",

  build: {
    // Output built files to the repo root (for gh-pages deployment)
    outDir: ".",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        // Stable filenames (no hashes) so each build overwrites the previous
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
