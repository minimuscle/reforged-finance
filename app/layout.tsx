"use client"

import "@mantine/core/styles.css"
import {
  MantineProvider,
  ColorSchemeScript,
  AppShell,
  Burger,
  Skeleton,
  Group,
  NavLink,
  Flex,
  Stack,
} from "@mantine/core"
import { theme } from "../theme"
import { useDisclosure } from "@mantine/hooks"
import { RxDashboard, RxGear } from "react-icons/rx"
import { GrMoney, GrHistory } from "react-icons/gr"
import { HiOutlineTrendingDown } from "react-icons/hi"
import { TbReportMoney } from "react-icons/tb"
import { PiCurrencyDollarSimpleBold, PiHandshakeFill } from "react-icons/pi"
import { usePathname, useRouter } from "next/navigation"
import "./global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [opened, { toggle }] = useDisclosure(false)
  const pathname = usePathname()
  const router = useRouter()

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                Logo
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              {/** TODO: This should be dynamic due to what the user has selected? Possibly */}
              <Stack h="100%" className="navigation">
                <NavLink
                  className="navlink"
                  label="Dashboard"
                  active={pathname.toLowerCase() === "/"}
                  leftSection={<RxDashboard />}
                  onClick={() => router.push("/")}
                />
                <NavLink
                  className="navlink"
                  label="Cash"
                  active={pathname.toLowerCase() === "/cash"}
                  leftSection={<PiCurrencyDollarSimpleBold />}
                  onClick={() => router.push("/cash")}
                />
                <NavLink
                  className="navlink"
                  label="Side Income"
                  active={pathname.toLowerCase() === "/side-income"}
                  leftSection={<GrMoney />}
                  onClick={() => router.push("/side-income")}
                />
                <NavLink
                  className="navlink"
                  label="Liabilities / Debts"
                  active={pathname.toLowerCase() === "/debts"}
                  leftSection={<HiOutlineTrendingDown />}
                  onClick={() => router.push("/debts")}
                />
                <NavLink
                  className="navlink"
                  label="Super"
                  active={pathname.toLowerCase() === "/super"}
                  leftSection={<PiHandshakeFill />}
                  onClick={() => router.push("/super")}
                />
                <NavLink
                  className="navlink"
                  label="Budget"
                  active={pathname.toLowerCase() === "/budget"}
                  leftSection={<TbReportMoney />}
                  onClick={() => router.push("/budget")}
                />
                <NavLink
                  className="navlink"
                  label="History"
                  active={pathname.toLowerCase() === "/history"}
                  leftSection={<GrHistory />}
                  onClick={() => router.push("/history")}
                />
                <Flex h="100%"></Flex>
                <NavLink
                  className="navlink"
                  label="Settings"
                  active={pathname.toLowerCase() === "/settings"}
                  leftSection={<RxGear />}
                  onClick={() => router.push("/settings")}
                />
              </Stack>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
