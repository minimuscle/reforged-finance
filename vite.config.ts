import { defineConfig } from "vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import ReactCompiler from "babel-plugin-react-compiler"

export default defineConfig({
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
    }),
    react({
      babel: {
        plugins: [ReactCompiler],
      },
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      utils: path.resolve(__dirname, "src/utils"),
      containers: path.resolve(__dirname, "src/containers"),
      routes: path.resolve(__dirname, "src/routes"),
      api: path.resolve(__dirname, "src/api"),
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs", // This fixes the slow loading in dev due to dynamic imports that starts from verison 3.18.0
    },
  },
})
