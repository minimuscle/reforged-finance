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
  Form,
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
import {
  createBrowserClient,
  createServerClient,
  parse,
  serialize,
} from "@supabase/ssr"
import { useState, useEffect } from "react"
import { PremiumMemberContext } from "./contexts/PremiumMemberContext"
import LoadDatabaseModal from "./components/LoadDatabaseModal/LoadDatabaseModal"
import LogoButton from "./components/LogoButton/LogoButton"
import Sidebar from "./components/Sidebar/Sidebar"
import { useDisclosure } from "@mantine/hooks"
import theme from "~/util/theme"
import SetupModal from "./components/Setup/SetupModal"

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export const loader = async ({ request }) => {
  const env = {
    DATABASE_URL: process.env.DATABASE_URL,
    DB_KEY: process.env.DB_KEY,
  }
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  const supabase = createServerClient(env.DATABASE_URL, env.DB_KEY, {
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
  })

  const { data: auth } = await supabase.auth.getUser()
  const { data: user } = await supabase.from("profiles").select().single()
  const { data: history } = await supabase
    .from("history")
    .select("*")
    .order("id", {
      ascending: true,
    })
  return {
    env,
    auth,
    user,
    history,
    headers,
  }
}

export default function App() {
  const { env, auth, user, history } = useLoaderData()
  const [supabase] = useState(() =>
    createBrowserClient(env.DATABASE_URL, env.DB_KEY)
  )
  const [opened, { toggle }] = useDisclosure(false)
  const [setupOpen, { toggle: setupToggle }] = useDisclosure(false)
  const [signUpOpen, { toggle: signUpToggle }] = useDisclosure(false)
  const res = useActionData()
  const [database, setDatabase] = useState(auth?.user?.id ? true : false)
  const [modalOpen, { toggle: modalToggle }] = useDisclosure(!database)
  const revalidator = useRevalidator()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      revalidator.revalidate()
      if (auth?.user?.id) {
        setDatabase(true)
      } else {
        setDatabase(false)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, database, auth?.user?.id])

  //check for "user" if null, then set SetupModal to open
  useEffect(() => {
    if (!user) {
      setupToggle()
    }
  }, [user])

  const signUp = () => {
    supabase.auth.signUp({
      email: "joshthiele@live.com.au",
      password: "password",
    })
  }
  /**/

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
          <PremiumMemberContext.Provider value={false}>
            <MantineProvider theme={theme}>
              <SetupModal opened={false} close={setupToggle} />
              <LoadDatabaseModal opened={false} close={modalToggle} />
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
                      <Form action="/new">
                        <Button type="submit">Add Month</Button>
                      </Form>
                      <Text align="right">
                        {user?.name || auth?.user?.email}
                      </Text>
                      <Avatar variant="light" color={"blue"} radius="xl" src="">
                        {user?.name?.charAt(0) || auth?.user?.email?.charAt(0)}
                      </Avatar>
                      {auth?.user ? (
                        <Button variant="light" onClick={() => logout()}>
                          Sign Out
                        </Button>
                      ) : (
                        <Button variant="light" onClick={() => login()}>
                          Log In
                        </Button>
                      )}
                    </Group>
                  </Group>
                </AppShell.Header>
                <AppShell.Navbar p="md">
                  <Sidebar />
                </AppShell.Navbar>
                <AppShell.Main>
                  <Outlet className="main" context={history} />
                </AppShell.Main>
              </AppShell>
            </MantineProvider>
          </PremiumMemberContext.Provider>
        </SupabaseContext.Provider>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}

//TODO: create a hook to get the data from the database in the right format
