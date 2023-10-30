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
import { RxDashboard } from "react-icons/rx"

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [opened, { toggle }] = useDisclosure(false)

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
              <Stack h="100%">
                <NavLink label="Dashboard" leftSection={<RxDashboard />} />
                <NavLink label="Cash" leftSection={<RxDashboard />} />
                <NavLink label="Side Income" leftSection={<RxDashboard />} />
                <NavLink
                  label="Liabilities / Debts"
                  leftSection={<RxDashboard />}
                />
                <NavLink label="Super" leftSection={<RxDashboard />} />
                <NavLink label="Budget" leftSection={<RxDashboard />} />
                <NavLink label="History" leftSection={<RxDashboard />} />
                <Flex h="100%"></Flex>
                <NavLink label="Settings" leftSection={<RxDashboard />} />
              </Stack>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
