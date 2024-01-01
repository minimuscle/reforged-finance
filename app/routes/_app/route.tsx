import { Outlet, useLoaderData } from "@remix-run/react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { LoaderFunctionArgs, redirect } from "@remix-run/node"
import { supabaseCreate } from "~/utils/supabase"
import styles from "./_app.module.css"
import { AppShell, Burger } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { history } from "~/utils/types"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabase = supabaseCreate(request)
  const session = await supabase.auth.getSession()
  const userSession = session?.data?.session?.user
  //Takes user to login page if not logged in
  if (!userSession) throw redirect("/login")
  const { data: user } = await supabase.from("profiles").select("*").single()
  const { data: lastMonthRes } = await supabase
    .from("history")
    .select("*")
    .order("date", { ascending: false })
    .limit(1)
  const lastMonth = lastMonthRes && (lastMonthRes[0] as history)
  const { data: cash } = await supabase
    .from("cash")
    .select("*")
    .order("weight", { ascending: true })
  //Takes user to setup page if not setup with a profile
  if (!user) throw redirect("/setup")

  return { user: user, lastMonth: lastMonth, cash: cash }
}

export const action = async () => {
  return null
  //return redirect("/login")
}

/**
 * This is the main layout of the application
 * It should contain the sidebar, header, footer, etc.
 * It should also contain the <Outlet /> component
 *
 */

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const [opened, { toggle }] = useDisclosure()
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={styles.header}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
      </AppShell.Header>
      <AppShell.Navbar className={styles.navbar}>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main className={styles.outlet}>
        <Outlet context={data} />
      </AppShell.Main>
    </AppShell>
  )
}
