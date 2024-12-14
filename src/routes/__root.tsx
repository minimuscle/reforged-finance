import { createRootRouteWithContext, redirect } from "@tanstack/react-router"
import type { QueryClient } from "@tanstack/react-query"
import { App } from "../App"
import { auth } from "../api/auth"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  //Check if user is authenticated
  beforeLoad: async () => {
    const res = await auth.GET.session()
    if (!res && window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
      throw redirect({ to: "/login" })
    } else if (res && (window.location.pathname === "/login" || window.location.pathname === "/signup")) {
      throw redirect({ to: "/" })
    }
  },
  component: App,
})
