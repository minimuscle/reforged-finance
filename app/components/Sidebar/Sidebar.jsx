import { Flex, NavLink as Nav, ThemeIcon, Tooltip } from "@mantine/core"
import { RxDashboard, RxGear } from "react-icons/rx/index.js"
import { HiOutlineTrendingDown } from "react-icons/hi/index.js"
import { TbReportMoney } from "react-icons/tb/index.js"
import {
  PiCurrencyDollarSimpleBold,
  PiHandshakeFill,
  PiMoney,
  PiClockCounterClockwiseBold,
  PiCrownFill,
} from "react-icons/pi/index.js"
import { RiRoadMapFill } from "react-icons/ri/index.js"
import { NavLink } from "@remix-run/react"
import "./Sidebar.css"

function Sidebar() {
  return (
    <>
      <NavLink to="/" className="navlink">
        {({ isActive }) => (
          <Nav
            label="Dashboard"
            active={isActive}
            leftSection={<RxDashboard />}
          />
        )}
      </NavLink>
      <NavLink to="/cash" className="navlink">
        {({ isActive }) => (
          <Nav
            label="Cash"
            active={isActive}
            leftSection={<PiCurrencyDollarSimpleBold />}
          />
        )}
      </NavLink>
      <NavLink to="/side-income" className="navlink">
        {({ isActive }) => (
          <Nav
            disabled
            label="Side Income"
            description="Coming Soon"
            active={isActive}
            leftSection={<PiMoney />}
          />
        )}
      </NavLink>
      <NavLink to="/debts" className="navlink">
        {({ isActive }) => (
          <Nav
            label="Liabilities / Debts"
            active={isActive}
            leftSection={<HiOutlineTrendingDown />}
          />
        )}
      </NavLink>
      <NavLink to="/super" className="navlink">
        {({ isActive }) => (
          <Nav
            disabled
            label="Super"
            description="Coming Soon"
            active={isActive}
            leftSection={<PiHandshakeFill />}
          />
        )}
      </NavLink>
      <NavLink to="/budget" className="navlink">
        {({ isActive }) => (
          <Nav
            label="Budget"
            description="Coming Soon"
            disabled
            active={isActive}
            leftSection={<TbReportMoney />}
            rightSection={
              <Tooltip withArrow label="Premium Feature">
                <ThemeIcon variant="white">
                  <PiCrownFill color="orange" />
                </ThemeIcon>
              </Tooltip>
            }
          />
        )}
      </NavLink>
      <NavLink to="/history" className="navlink">
        {({ isActive }) => (
          <Nav
            label="History"
            active={isActive}
            leftSection={<PiClockCounterClockwiseBold />}
          />
        )}
      </NavLink>
      <Flex h="100%"></Flex>
      <NavLink to="/roadmap" className="navlink">
        {({ isActive }) => (
          <Nav
            label="Roadmap"
            active={isActive}
            leftSection={<RiRoadMapFill />}
          />
        )}
      </NavLink>
      <NavLink to="/premium" className="navlink">
        {({ isActive }) => (
          <Nav
            active
            label="Get Premium"
            description="Coming Soon"
            variant="filled"
            color={isActive ? "black" : "violet"}
            leftSection={<PiCrownFill color="orange" />}
          />
        )}
      </NavLink>
      <NavLink to="/settings" className="navlink">
        {({ isActive }) => (
          <Nav label="Settings" active={isActive} leftSection={<RxGear />} />
        )}
      </NavLink>
    </>
  )
}

export default Sidebar
