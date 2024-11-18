import { Outlet } from "@tanstack/react-router"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "./utils/globalStyles.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
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
      <ReactQueryDevtools />
    </>
  )
}
