import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      utils: path.resolve(__dirname, "src/utils"),
      containers: path.resolve(__dirname, "src/containers"),
      routes: path.resolve(__dirname, "src/routes"),
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs', // This fixes the slow loading in dev due to dynamic imports that starts from verison 3.18.0
    },
  },
})
