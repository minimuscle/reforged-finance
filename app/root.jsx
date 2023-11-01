import { cssBundleHref } from "@remix-run/css-bundle"
import React from "react"
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react"
import "@mantine/core/styles.css"
import {
  MantineProvider,
  ColorSchemeScript,
  AppShell,
  Burger,
  Skeleton,
  Group,
  NavLink as Nav,
  Flex,
  Stack,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { RxDashboard, RxGear } from "react-icons/rx"
import { GrMoney, GrHistory } from "react-icons/gr"
import { HiOutlineTrendingDown } from "react-icons/hi"
import { TbReportMoney } from "react-icons/tb"
import { PiCurrencyDollarSimpleBold, PiHandshakeFill } from "react-icons/pi"
import theme from "./util/theme"
import "./global.css"

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export default function App() {
  const [opened, { toggle }] = useDisclosure(false)
  const path = useLocation()

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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
                <Nav
                  className="navlink"
                  label="Dashboard"
                  active={path.pathname.toLowerCase() === "/"}
                  leftSection={<RxDashboard />}
                  //onClick={() => router.push("/")}
                ></Nav>
                <Nav
                  className="navlink"
                  label="Cash"
                  active={path.pathname.toLowerCase() === "/cash"}
                  leftSection={<PiCurrencyDollarSimpleBold />}
                  //onClick={() => router.push("/cash")}
                />
                <Nav
                  className="navlink"
                  label="Side Income"
                  active={path.pathname.toLowerCase() === "/side-income"}
                  leftSection={<GrMoney />}
                  //onClick={() => router.push("/side-income")}
                />
                <Nav
                  className="navlink"
                  label="Liabilities / Debts"
                  active={path.pathname.toLowerCase() === "/debts"}
                  leftSection={<HiOutlineTrendingDown />}
                  //onClick={() => router.push("/debts")}
                />
                <Nav
                  className="navlink"
                  label="Super"
                  active={path.pathname.toLowerCase() === "/super"}
                  leftSection={<PiHandshakeFill />}
                  //onClick={() => router.push("/super")}
                />
                <Nav
                  className="navlink"
                  label="Budget"
                  active={path.pathname.toLowerCase() === "/budget"}
                  leftSection={<TbReportMoney />}
                  //onClick={() => router.push("/budget")}
                />
                <Nav
                  className="navlink"
                  label="History"
                  active={path.pathname.toLowerCase() === "/history"}
                  leftSection={<GrHistory />}
                  //onClick={() => router.push("/history")}
                />
                <Flex h="100%"></Flex>
                <Nav
                  className="navlink"
                  label="Settings"
                  active={path.pathname.toLowerCase() === "/settings"}
                  leftSection={<RxGear />}
                  //onClick={() => router.push("/settings")}
                />
              </Stack>
            </AppShell.Navbar>
            <AppShell.Main>
              <Outlet />
            </AppShell.Main>
          </AppShell>
        </MantineProvider>

        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}
