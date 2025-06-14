import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./utils/query/queryClient"
import { MantineProvider } from "@mantine/core"
import { theme } from "./utils/theme"
import { ErrorBoundary } from "components/Templates/ErrorBoundary"
import { PostHogProvider } from "posthog-js/react"

/******************************************************************
 *  SETUP                                                         *
 ******************************************************************/
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: ErrorBoundary,
})

/******************************************************************
 *  DECLARATIONS                                                  *
 ******************************************************************/
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY!}
        options={{
          api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST!,
          defaults: "2025-05-24",
          person_profiles: "always",
        }}
      >
        <MantineProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </MantineProvider>
      </PostHogProvider>
    </StrictMode>
  )
}
