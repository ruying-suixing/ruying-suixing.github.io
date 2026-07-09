import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  // GitHub Pages 必须配置相对路径，防止资源404
  base: "./",
  plugins: [vue(), vueJsx(), eslintPlugin(), viteCompression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  envDir: "./",
  build: {
    // 可选：静态打包优化
    outDir: "dist",
    emptyOutDir: true
  },
  optimizeDeps: {
    include: ["@vueuse/head"]
  }
});