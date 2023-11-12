import { Button, Flex, NavLink as Nav, Stack } from "@mantine/core"
import { RxDashboard, RxGear } from "react-icons/rx/index.js"
import { GrMoney, GrHistory } from "react-icons/gr/index.js"
import { HiOutlineTrendingDown } from "react-icons/hi/index.js"
import { TbReportMoney } from "react-icons/tb/index.js"
import {
  PiCurrencyDollarSimpleBold,
  PiHandshakeFill,
  PiMoney,
  PiClockCounterClockwiseBold,
  PiCrownFill,
} from "react-icons/pi/index.js"
import { Link, useLocation, useNavigate } from "@remix-run/react"
import "./Sidebar.css"

function Sidebar() {
  const path = useLocation()
  const navigate = useNavigate()
  return (
    <>
      {/** TODO: This should be dynamic due to what the user has selected? Possibly */}
      <Stack h="100%" className="navigation">
        <Nav
          className="navlink"
          label="Dashboard"
          active={path.pathname.toLowerCase() === "/"}
          leftSection={<RxDashboard />}
          onClick={() => navigate("/")}
        />

        <Nav
          className="navlink"
          label="Cash"
          active={path.pathname.toLowerCase() === "/cash"}
          leftSection={<PiCurrencyDollarSimpleBold />}
          onClick={() => navigate("/cash")}
        />
        <Nav
          className="navlink"
          label="Side Income"
          active={path.pathname.toLowerCase() === "/side-income"}
          leftSection={<PiMoney />}
          onClick={() => navigate("/side-income")}
        />
        <Nav
          className="navlink"
          label="Liabilities / Debts"
          active={path.pathname.toLowerCase() === "/debts"}
          leftSection={<HiOutlineTrendingDown />}
          onClick={() => navigate("/debts")}
        />
        <Nav
          className="navlink"
          label="Super"
          active={path.pathname.toLowerCase() === "/super"}
          leftSection={<PiHandshakeFill />}
          onClick={() => navigate("/super")}
        />
        <Nav
          className="navlink"
          label="Budget"
          active={path.pathname.toLowerCase() === "/budget"}
          leftSection={<TbReportMoney />}
          rightSection={<PiCrownFill color="orange" />}
          onClick={() => navigate("/budget")}
        />
        <Nav
          className="navlink"
          label="History"
          active={path.pathname.toLowerCase() === "/history"}
          leftSection={<PiClockCounterClockwiseBold />}
          onClick={() => navigate("/history")}
        />
        <Flex h="100%"></Flex>
        <Nav
          className="navlink"
          label="Settings"
          active={path.pathname.toLowerCase() === "/settings"}
          leftSection={<RxGear />}
          onClick={() => navigate("/settings")}
        />
      </Stack>
    </>
  )
}

export default Sidebar
