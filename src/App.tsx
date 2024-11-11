import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Outlet } from "@tanstack/react-router"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"

/******************************************************************
 *  CONSTS                                                        *
 ******************************************************************/
const queryClient = new QueryClient()

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function App() {
  /*********  RENDER  *********/
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
