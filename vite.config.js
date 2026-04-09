import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  // Vite root is src/ so src/index.html is the template and is never
  // overwritten by build output — the built index.html goes to the repo root.
  root: "src",

  // GitHub Pages serves the site at /my-portfolio/
  base: "/my-portfolio/",

  build: {
    // Output built files to the repo root (for gh-pages deployment)
    outDir: "../",
    // Never empty the parent dir — it contains the source files!
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
