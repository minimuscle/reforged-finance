import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [devtools(), tsConfigPaths(), tanstackStart(), viteReact()],
  resolve: {
    alias: {
      components: "/src/components",
      utils: "/src/utils",
      routes: "/src/routes",
    },
  },
})
