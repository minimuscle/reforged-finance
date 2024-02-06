import {
  ActionIcon,
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
  BsChevronLeft,
  BsChevronRight,
  BsClipboard,
  BsClockHistory,
  BsCurrencyDollar,
} from "react-icons/bs/index.js"
import { LiaHandshake } from "react-icons/lia/index.js"
import UserMenu from "./UserMenu"
import DataDefer from "~/components/DataDefer"
import Logo from "~/assets/images/Logo.jpg"
import classes from "../_app.module.css"
import { useFetcher } from "@remix-run/react"
import { useContext } from "react"
import { CollapsedContext } from "~/utils/contexts/CollapsedContext"

export default function Sidebar({
  data,
  setIsCollapsed,
}: {
  data: any
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const fetcher = useFetcher()
  const isCollapsed = useContext(CollapsedContext)

  return (
    <Box className={`${classes.sidebar} ${isCollapsed && classes.collapsed}`}>
      <Flex h={"100%"} direction={"column"} gap={"md"}>
        <Group>
          <Image h={"auto"} w={"25px"} src={Logo} />
          <Title
            className={`${classes.title} ${isCollapsed && classes.collapsed}`}
            size={"h3"}
          >
            Reforge Finance
          </Title>
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
      <ActionIcon
        className={classes.chevron}
        radius="xl"
        color="gray"
        type="submit"
        onClick={() => {
          setIsCollapsed(!isCollapsed)
          fetcher.submit(
            { intent: "updateCollapsed", collapsed: !isCollapsed },
            { method: "POST", action: "/" }
          )
        }}
      >
        {isCollapsed ? <BsChevronRight /> : <BsChevronLeft />}
      </ActionIcon>
    </Box>
  )
}
