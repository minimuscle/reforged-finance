import { cssBundleHref } from "@remix-run/css-bundle"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
  useActionData,
} from "@remix-run/react"
import "@mantine/core/styles.css"
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  ColorSchemeScript,
  Group,
  MantineProvider,
  Text,
} from "@mantine/core"
import "./global.css"
import { SupabaseContext } from "./contexts/SupabaseContext"
import { createBrowserClient } from "@supabase/ssr"
import { useState, useEffect } from "react"
import { DatabaseContext } from "./contexts/DatabaseContext"
import { PremiumMemberContext } from "./contexts/PremiumMemberContext"
import LoadDatabaseModal from "./components/LoadDatabaseModal/LoadDatabaseModal"
import LogoButton from "./components/LogoButton/LogoButton"
import Sidebar from "./components/Sidebar/Sidebar"
import { useDisclosure } from "@mantine/hooks"
import theme from "~/util/theme"

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export const loader = async () => {
  const env = {
    DATABASE_URL: process.env.DATABASE_URL,
    DB_KEY: process.env.DB_KEY,
  }

  return { env }
}

export const action = async ({ request }) => {
  const body = await request.formData()
  return "hello"
}

export default function App() {
  const { env } = useLoaderData()
  const [supabase] = useState(() =>
    createBrowserClient(env.DATABASE_URL, env.DB_KEY)
  )
  const [opened, { toggle }] = useDisclosure(false)
  const [loginOpen, { toggle: loginToggle }] = useDisclosure(false)
  const [signUpOpen, { toggle: signUpToggle }] = useDisclosure(false)
  const { user } = useLoaderData()
  const res = useActionData()
  const [database, setDatabase] = useState(user?.user?.id ? true : false)
  const [modalOpen, { toggle: modalToggle }] = useDisclosure(!database)
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
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SupabaseContext.Provider value={supabase}>
          <DatabaseContext.Provider value={database}>
            <PremiumMemberContext.Provider>
              <MantineProvider theme={theme}>
                <LoadDatabaseModal
                  opened={modalOpen}
                  close={modalToggle}
                  login={login}
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
        </SupabaseContext.Provider>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}
