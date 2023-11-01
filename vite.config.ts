import { unstable_vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import vercel from "vite-plugin-vercel"

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), vercel()],
  ssr: {
    noExternal: ["react-icons"],
  },
})
