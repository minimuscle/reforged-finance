import { Divider, Flex, Space, Stack } from "@mantine/core"
import NavLink from "./Navlink"
import {
  RiBankLine,
  RiCashLine,
  RiDashboardLine,
  RiHistoryLine,
  RiSettings3Line,
  RiShakeHandsLine,
  RiSurveyLine,
  RiVipCrown2Fill,
  RiWalletLine,
} from "react-icons/ri/index.js"

export default function Sidebar() {
  return (
    <Flex h={"100%"} direction={"column"} gap={"md"}>
      <NavLink to="/" icon={<RiDashboardLine />}>
        Dashboard
      </NavLink>
      <NavLink to="/cash" icon={<RiWalletLine />}>
        Cash
      </NavLink>
      <NavLink to="/side-income" icon={<RiCashLine />}>
        Side Income
      </NavLink>
      <NavLink to="/debts" icon={<RiBankLine />}>
        Liabilities / Debts
      </NavLink>
      <NavLink to="/super" icon={<RiShakeHandsLine />}>
        Super
      </NavLink>
      <NavLink to="/budget" icon={<RiSurveyLine />}>
        Budget
      </NavLink>
      <NavLink to="/history" icon={<RiHistoryLine />}>
        History
      </NavLink>
      <Flex direction={"column"} h={"100%"} justify={"space-between"}>
        <Space />
        <Stack>
          <NavLink premium to="/premium" icon={<RiVipCrown2Fill />}>
            Get Premium
          </NavLink>
          <Divider />
          <NavLink to="/settings" icon={<RiSettings3Line />}>
            Settings
          </NavLink>
        </Stack>
      </Flex>
    </Flex>
  )
}
