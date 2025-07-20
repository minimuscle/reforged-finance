import { CatchBoundary, createRootRouteWithContext, Outlet, redirect } from "@tanstack/react-router"
import type { QueryClient } from "@tanstack/react-query"
import { auth } from "../api/auth"
import { ErrorBoundary } from "components/Templates/ErrorBoundary"
import { Suspense } from "react"
import { Notifications } from "@mantine/notifications"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "@mantine/charts/styles.css"
import "utils/styles/globalStyles.css"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  beforeLoad: async () => {
    const res = await auth.GET.session()
    if (!res && window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
      throw redirect({ to: "/login" })
    } else if (res && (window.location.pathname === "/login" || window.location.pathname === "/signup")) {
      throw redirect({ to: "/" })
    }
  },
  component: RouteComponent,
})

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
function RouteComponent() {
  return (
    <>
      <CatchBoundary
        getResetKey={() => "reset"}
        onCatch={(error) => console.error("error!!!", error)}
        errorComponent={ErrorBoundary}
      >
        <Suspense fallback={<h1>loading...</h1>}>
          <Outlet />
        </Suspense>
      </CatchBoundary>

      <Notifications position="top-right" />
      <ReactQueryDevtools />
    </>
  )
}
