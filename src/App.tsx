import { CatchBoundary, Outlet } from "@tanstack/react-router"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "@mantine/charts/styles.css"
import "./utils/styles/globalStyles.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Notifications } from "@mantine/notifications"
import { AppProvider } from "containers/app/appContext"
import { ErrorBoundary } from "components/Templates/ErrorBoundary"
import { Suspense } from "react"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function App() {
  /*********  RENDER  *********/
  return (
    <>
      <CatchBoundary
        getResetKey={() => "reset"}
        onCatch={(error) => console.error("error!!!", error)}
        errorComponent={ErrorBoundary}
      >
        <Suspense fallback={<h1>loading...</h1>}>
          <AppProvider>
            <Outlet />
          </AppProvider>
        </Suspense>
      </CatchBoundary>

      <Notifications position="top-right" />
      <ReactQueryDevtools />
    </>
  )
}
