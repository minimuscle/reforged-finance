import { Divider, Flex } from "@mantine/core"
import "./_sidebar.scss"
import { NavButton } from "./components/navButton"
import { bottonNavOptions, navOptions } from "./consts"
import { Text } from "components/Text"
import { useState } from "react"
import { Icon } from "components/Icons"
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  /*********  RENDER  *********/
  return (
    <div className="Sidebar">
      <div className="Sidebar__toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <Icon.ShowSidebar /> : <Icon.HideSidebar />}
      </div>

      <div className="Sidebar__item">
        <div className="Sidebar__header">
          <Text>Reforged Finance</Text>
        </div>
        {navOptions.map((navOption) => (
          <NavButton key={navOption.label} {...navOption} />
        ))}
      </div>
      <div className="Sidebar__item">
        <Divider className="Sidebar__divider" />
        {bottonNavOptions.map((navOption) => (
          <NavButton key={navOption.label} {...navOption} />
        ))}
      </div>
    </div>
  )
}
