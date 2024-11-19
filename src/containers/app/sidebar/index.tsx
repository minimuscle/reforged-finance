import "./_sidebar.scss"
import { NavButton } from "./components/navButton"
import { navOptions } from "./consts"
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Sidebar() {
  /*********  RENDER  *********/
  return (
    <div className="Sidebar">
      {navOptions.map((navOption) => (
        <NavButton key={navOption.label} {...navOption} />
      ))}
    </div>
  )
}
