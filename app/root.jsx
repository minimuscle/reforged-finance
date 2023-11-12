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
  Image,
  Title,
  Anchor,
  Button,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import theme from "./util/theme"
import "./global.css"
import Sidebar from "./components/Sidebar/Sidebar"
import Logo from "./images/Logo.jpg"
import LogoButton from "./components/LogoButton/LogoButton"

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export default function App() {
  const [opened, { toggle }] = useDisclosure(false)

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
                <LogoButton />
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <Sidebar />
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
