import { vitePlugin as remix } from "@remix-run/dev"
import { flatRoutes } from "remix-flat-routes"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    remix({
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes)
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
})
