import { Outlet } from "@tanstack/react-router"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "./utils/styles/globalStyles.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Notifications } from "@mantine/notifications"
/******************************************************************
 *  CONSTS                                                        *
 ******************************************************************/

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function App() {
  /*********  RENDER  *********/
  return (
    <>
      <Outlet />
      <Notifications position="top-right" />
      <ReactQueryDevtools />
    </>
  )
}
