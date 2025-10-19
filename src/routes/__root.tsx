/// <reference types="vite/client" />
import { TanStackDevtools } from "@tanstack/react-devtools"
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools/production"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { StrictMode } from "react"
import { ReactChildren } from "utils/types/global"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Reforged Finance" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <div>404 Not Found</div>,
})

const queryClient = new QueryClient()

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
