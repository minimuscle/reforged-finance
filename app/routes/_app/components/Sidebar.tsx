import {
  Box,
  Divider,
  Flex,
  Group,
  Image,
  Space,
  Stack,
  Title,
} from "@mantine/core"
import NavLink from "./Navlink"
import { RiBankLine, RiVipCrown2Fill } from "react-icons/ri/index.js"
import { RxDashboard } from "react-icons/rx/index.js"
import {
  BsCash,
  BsClipboard,
  BsClockHistory,
  BsCurrencyDollar,
} from "react-icons/bs/index.js"
import { LiaHandshake } from "react-icons/lia/index.js"
import UserMenu from "./UserMenu"
import DataDefer from "~/components/DataDefer"
import Logo from "~/assets/images/Logo.jpg"

export default function Sidebar({ data }: { data: any }) {
  return (
    <Flex h={"100%"} direction={"column"} gap={"md"}>
      <Group>
        <Image h={"auto"} w={"25px"} src={Logo} />
        <Title size={"h3"}>WealthFire</Title>
      </Group>
      <NavLink to="/" icon={<RxDashboard />}>
        Dashboard
      </NavLink>
      <NavLink to="/cash" icon={<BsCash />}>
        Cash
      </NavLink>
      <NavLink to="/side-income" icon={<BsCurrencyDollar />}>
        Side Income
      </NavLink>
      <NavLink to="/debts" icon={<RiBankLine />}>
        Liabilities / Debts
      </NavLink>
      <NavLink to="/super" icon={<LiaHandshake />}>
        Super
      </NavLink>
      <NavLink to="/budget" icon={<BsClipboard />}>
        Budget
      </NavLink>
      <NavLink to="/history" icon={<BsClockHistory />}>
        History
      </NavLink>
      <Flex direction={"column"} h={"100%"} justify={"space-between"}>
        <Space />
        <Stack>
          <NavLink premium to="/premium" icon={<RiVipCrown2Fill />}>
            Get Premium
          </NavLink>
          <Divider />
          <Box>
            <DataDefer data={data}>
              <UserMenu />
            </DataDefer>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  )
}
