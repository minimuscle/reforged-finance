import { Outlet } from "@remix-run/react"
import { DatabaseContext } from "../contexts/DatabaseContext"
import { PremiumMemberContext } from "../contexts/premiumMemberContext"
import {
  AppShell,
  Avatar,
  Burger,
  Group,
  MantineProvider,
  Text,
} from "@mantine/core"
import LoadDatabaseModal from "../components/LoadDatabaseModal/LoadDatabaseModal"
import LogoButton from "../components/LogoButton/LogoButton"
import Sidebar from "../components/Sidebar/Sidebar"
import { useDisclosure } from "@mantine/hooks"
import { useState } from "react"
import theme from "~/util/theme"

function App() {
  const [opened, { toggle }] = useDisclosure(false)
  const [databaseSet, setDatabase] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <DatabaseContext.Provider value={true}>
      <PremiumMemberContext.Provider>
        <MantineProvider theme={theme}>
          <LoadDatabaseModal close={toggle} setDatabase={setDatabase} />
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
              <Group h="100%" px="md" align="center">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <LogoButton />

                <Group pos="absolute" right={10}>
                  <Text align="right">User {user ? "" : "Not"} Logged In</Text>
                  <Avatar variant="outline" radius="xl" src="" />
                </Group>
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
      </PremiumMemberContext.Provider>
    </DatabaseContext.Provider>
  )
}

export default App
