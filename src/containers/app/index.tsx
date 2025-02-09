import { Outlet, useLocation } from "@tanstack/react-router"
import "./_app.css"
import { useContext, useState } from "react"
import clsx from "clsx"
import { Sidebar } from "containers/app/sidebar"
import { useAppViewport } from "utils/hooks/useAppViewport"
import { bottonNavOptions, navOptions, otherNavOptions } from "containers/app/sidebar/consts"
import { Text } from "components/Text"
import { motion } from "motion/react"
import { AppProvider, useAppContext } from "containers/app/appContext"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function App() {
  /**********  HOOKS  **********/
  const isMobile = useAppViewport(["xs"])
  const location = useLocation()
  const { isSidebarHidden } = useAppContext()

  /**********  CONSTS  **********/
  const heading =
    navOptions.find((nav) => nav.to === location.pathname)?.label ??
    bottonNavOptions.find((nav) => nav.to === location.pathname)?.label ??
    otherNavOptions.find((nav) => nav.to === location.pathname)?.label ??
    ""

  /*********  RENDER  *********/
  return (
    <motion.div className={clsx("App", { mobile: isMobile, SidebarHidden: isSidebarHidden })}>
      {!isMobile && <Sidebar />}
      <div className={clsx("AppContent", { SidebarHidden: isSidebarHidden })}>
        <div className="AppContent__header">
          <Text size="xxl" bold as="h1">
            {heading}
          </Text>
        </div>
        <div className="AppContent__outlet">
          <Outlet />
        </div>
      </div>
    </motion.div>
  )
}
