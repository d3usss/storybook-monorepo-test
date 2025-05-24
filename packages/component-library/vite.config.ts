import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import preserveDirectives from "rollup-preserve-directives";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    emptyOutDir: false,
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      plugins: [preserveDirectives()],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
