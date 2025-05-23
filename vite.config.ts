import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically open the report in the browser after build
      gzipSize: true, // Show GZIP size
      brotliSize: true, // Show Brotli size
      filename: "bundle-analysis.html", // Output report file name
    }),
  ],
  envDir: "./",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
