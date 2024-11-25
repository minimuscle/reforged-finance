import { Outlet, useLocation } from "@tanstack/react-router"
import "./_app.css"
import { useState } from "react"
import clsx from "clsx"
import { Sidebar } from "containers/app/sidebar"
import { useAppViewport } from "utils/hooks/useAppViewport"
import { navOptions } from "containers/app/sidebar/consts"
import { Text } from "components/Text"

export function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false)
  const isMobile = useAppViewport(["xs"])
  const location = useLocation()
  const heading = navOptions.find((nav) => nav.to === location.pathname)?.label

  console.log("isMobile", isMobile)
  return (
    <div className={clsx("App", isSidebarHidden && "SidebarHidden", { mobile: isMobile })}>
      {!isMobile && <Sidebar isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden} />}
      <div className="AppContent">
        <div className="AppContent__header">
          <Text size="xxl" bold as="h1">
            {heading}
          </Text>
        </div>
        <div className="AppContent__outlet">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
