import { createRouter } from "@tanstack/react-router"
import { queryClient } from "utils/queryClient"
import { routeTree } from "./routeTree.gen"

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    context: { queryClient },
  })

  return router
}
