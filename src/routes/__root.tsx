/// <reference types="vite/client" />
import { TanStackDevtools } from "@tanstack/react-devtools"
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools/production"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { getUser } from "api/serverFunctions"
import { StrictMode } from "react"
import { queryClient } from "utils/queryClient"
import { ReactChildren } from "utils/types/global"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Reforged Finance" },
    ],
  }),
  beforeLoad: () => getUser(),
  component: RootComponent,
  notFoundComponent: () => <div>404 Not Found</div>,
})

function RootComponent() {
  return (
    <StrictMode>
      <RootDocument>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <TanStackDevtools
            plugins={[
              {
                name: "TanStack Query",
                render: <ReactQueryDevtoolsPanel />,
              },
              {
                name: "TanStack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
              {
                name: "TanStack Form",
                render: <FormDevtoolsPanel />,
              },
            ]}
          />
        </QueryClientProvider>
      </RootDocument>
    </StrictMode>
  )
}

function RootDocument({ children }: ReactChildren) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
