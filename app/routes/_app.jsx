import {
  Outlet,
  useFetcher,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react"
import { DatabaseContext } from "../contexts/DatabaseContext"
import { SupabaseContext } from "../contexts/SupabaseContext"
import { PremiumMemberContext } from "../contexts/PremiumMemberContext"
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
import { useState, useContext, useEffect } from "react"
import theme from "~/util/theme"
import { supabaseSignIn } from "../util/supabase"
import { createServerClient, parse, serialize } from "@supabase/ssr"
import Login from "../components/Auth/Login"
import SignUp from "../components/Auth/SignUp"

const loginUser = async () => {
  console.log("Logging in user")
  const response = await supabaseSignIn()
  console.log(response)
}

export const loader = async ({ request }) => {
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  const supabase = createServerClient(
    process.env.DATABASE_URL,
    process.env.DB_KEY,
    {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          headers.append("Set-Cookie", serialize(key, value, options))
        },
        remove(key, options) {
          headers.append("Set-Cookie", serialize(key, "", options))
        },
      },
    }
  )

  const { data: user } = await supabase.auth.getUser()
  console.log(user)

  return {
    user,
    headers,
  }
}

function App() {
  const [opened, { toggle }] = useDisclosure(false)
  const [loginOpen, { toggle: loginToggle }] = useDisclosure(false)
  const [signUpOpen, { toggle: signUpToggle }] = useDisclosure(false)
  const { user } = useLoaderData()
  const [database, setDatabase] = useState(user?.user?.id ? true : false)
  const [modalOpen, { toggle: modalToggle }] = useDisclosure(!database)
  const supabase = useContext(SupabaseContext)
  const revalidator = useRevalidator()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      revalidator.revalidate()
      if (user?.user?.id) {
        setDatabase(true)
      } else {
        setDatabase(false)
      }
    })

    console.log("database: ", database)

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, database, user?.user?.id])

  const signUp = () => {
    supabase.auth.signUp({
      email: "joshthiele@live.com.au",
      password: "password",
    })
  }

  const login = () => {
    loginToggle()
    modalToggle()
    /*supabase.auth.signInWithPassword({
      email: "joshthiele@live.com.au",
      password: "password",
    })*/
  }

  const logout = () => {
    supabase.auth.signOut()
  }
  return (
    <DatabaseContext.Provider value={database}>
      <PremiumMemberContext.Provider>
        <MantineProvider theme={theme}>
          <LoadDatabaseModal
            opened={modalOpen}
            close={modalToggle}
            login={login}
          />
          <Login
            opened={loginOpen}
            close={() => {
              loginToggle()
              modalToggle()
            }}
            signup={() => {
              loginToggle()
              signUpToggle()
            }}
          />
          <SignUp
            opened={signUpOpen}
            close={() => {
              signUpToggle()
              modalToggle()
            }}
            login={() => {
              loginToggle()
              signUpToggle()
            }}
          />
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
                  <Text align="right">{user?.user?.email}</Text>
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
