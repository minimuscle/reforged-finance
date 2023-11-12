import { Outlet, useFetcher } from "@remix-run/react"
import { DatabaseContext } from "../contexts/DatabaseContext"
import { SupabaseContext } from "../contexts/SupabaseContext"
import { PremiumMemberContext } from "../contexts/premiumMemberContext"
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  MantineProvider,
  Text,
} from "@mantine/core"
import LoadDatabaseModal from "../components/LoadDatabaseModal/LoadDatabaseModal"
import LogoButton from "../components/LogoButton/LogoButton"
import Sidebar from "../components/Sidebar/Sidebar"
import { useDisclosure } from "@mantine/hooks"
import { useState, useContext } from "react"
import theme from "~/util/theme"
import { supabaseSignIn } from "../util/supabase"

const loginUser = async () => {
  console.log("Logging in user")
  const response = await supabaseSignIn()
  console.log(response)
}

function App() {
  const [opened, { toggle }] = useDisclosure(false)
  const [databaseSet, setDatabase] = useState(false)
  const [user, setUser] = useState(null)
  const fetcher = useFetcher()
  const supabase = useContext(SupabaseContext)

  const signUp = () => {
    supabase.auth.signUp({
      email: "joshthiele@live.com.au",
      password: "password",
    })
  }

  const login = () => {
    supabase.auth.signInWithPassword({
      email: "joshthiele@live.com.au",
      password: "password",
    })
  }

  const logout = () => {
    supabase.auth.signOut()
  }
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
                  <Button onClick={() => signUp()}>Sign Up</Button>
                  <Button onClick={() => login()}>Login</Button>
                  <Button onClick={() => logout()}>Logout</Button>
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
