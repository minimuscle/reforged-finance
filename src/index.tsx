import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./utils/queryClient"
import { MantineProvider } from "@mantine/core"
import { theme } from "./utils/theme"

/******************************************************************
 *  SETUP                                                         *
 ******************************************************************/
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
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
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </StrictMode>
  )
}
