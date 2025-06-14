import { CatchBoundary, Outlet } from "@tanstack/react-router"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "@mantine/charts/styles.css"
import "./utils/styles/globalStyles.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Notifications } from "@mantine/notifications"
import { AppProvider } from "containers/app/appContext"
import { ErrorBoundary } from "components/Templates/ErrorBoundary"

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
        <AppProvider>
          <Outlet />
        </AppProvider>
      </CatchBoundary>

      <Notifications position="top-right" />
      <ReactQueryDevtools />
    </>
  )
}
