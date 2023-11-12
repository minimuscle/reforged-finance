import {
  Button,
  Flex,
  NavLink as Nav,
  Stack,
  ThemeIcon,
  Tooltip,
} from "@mantine/core"
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
import { useContext } from "react"
import { PremiumMemberContext } from "../../contexts/premiumMemberContext"
import PremiumPopup from "../PremiumPopup/PremiumPopup"
import { useDisclosure } from "@mantine/hooks"

function Sidebar() {
  const path = useLocation()
  const navigate = useNavigate()
  const premium = useContext(PremiumMemberContext)
  const [opened, { open, close }] = useDisclosure(false)

  function showPremiumPopup() {
    open()
  }

  return (
    <>
      <PremiumPopup opened={opened} close={close} />
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
          label="Cash (Coming Soon)"
          disabled
          active={path.pathname.toLowerCase() === "/cash"}
          leftSection={<PiCurrencyDollarSimpleBold />}
          onClick={() => navigate("/cash")}
        />
        <Nav
          className="navlink"
          label="Side Income (Coming Soon)"
          disabled
          active={path.pathname.toLowerCase() === "/side-income"}
          leftSection={<PiMoney />}
          onClick={() => navigate("/side-income")}
        />
        <Nav
          className="navlink"
          label="Liabilities / Debts (Coming Soon)"
          disabled
          active={path.pathname.toLowerCase() === "/debts"}
          leftSection={<HiOutlineTrendingDown />}
          onClick={() => navigate("/debts")}
        />
        <Nav
          className="navlink"
          label="Super (Coming Soon)"
          disabled
          active={path.pathname.toLowerCase() === "/super"}
          leftSection={<PiHandshakeFill />}
          onClick={() => navigate("/super")}
        />
        <Nav
          className="navlink"
          label="Budget (Coming Soon)"
          disabled
          active={path.pathname.toLowerCase() === "/budget"}
          leftSection={<TbReportMoney />}
          rightSection={
            <Tooltip withArrow label="Premium Feature">
              <ThemeIcon variant="white">
                <PiCrownFill color="orange" />
              </ThemeIcon>
            </Tooltip>
          }
          onClick={() => (premium ? navigate("/budget") : showPremiumPopup())}
        />
        <Nav
          className="navlink"
          label="Property (Coming Soon)"
          disabled
          active={path.pathname.toLowerCase() === "/budget"}
          leftSection={<TbReportMoney />}
          rightSection={
            <Tooltip withArrow label="Premium Feature">
              <ThemeIcon variant="white">
                <PiCrownFill color="orange" />
              </ThemeIcon>
            </Tooltip>
          }
          onClick={() => (premium ? navigate("/budget") : showPremiumPopup())}
        />
        <Nav
          className="navlink"
          label="Stocks (Coming Soon)"
          disabled
          active={path.pathname.toLowerCase() === "/budget"}
          leftSection={<TbReportMoney />}
          rightSection={
            <Tooltip withArrow label="Premium Feature">
              <ThemeIcon variant="white">
                <PiCrownFill color="orange" />
              </ThemeIcon>
            </Tooltip>
          }
          onClick={() => (premium ? navigate("/budget") : showPremiumPopup())}
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
          label="Get Premium (Coming Soon)"
          variant="filled"
          color={
            path.pathname.toLowerCase() === "/premium" ? "black" : "violet"
          }
          active
          leftSection={<PiCrownFill color="orange" />}
          onClick={() => navigate("/premium")}
        />
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
