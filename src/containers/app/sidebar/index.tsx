import { Divider } from "@mantine/core"
import "./_sidebar.scss"
import { NavButton } from "./components/navButton"
import { bottonNavOptions, navOptions } from "./consts"
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Sidebar() {
  /*********  RENDER  *********/
  return (
    <div className="Sidebar">
      <div className="Sidebar__item">
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
