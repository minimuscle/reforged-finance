import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { flatRoutes } from "remix-flat-routes"
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [remix({
    ignoredRouteFiles: ['**/*'],
    routes: async defineRoutes => {
      return flatRoutes('routes', defineRoutes)
    },
  }), tsconfigPaths()],
});

