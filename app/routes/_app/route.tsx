import { Outlet, useLoaderData } from "@remix-run/react"
import Sidebar from "./components/Sidebar"
import { LoaderFunctionArgs, redirect, defer } from "@remix-run/node"
import { supabaseCreate } from "~/utils/supabase"
import styles from "./_app.module.css"
import { Box, Flex, useMantineColorScheme } from "@mantine/core"
//import { useDisclosure } from "@mantine/hooks"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabase = supabaseCreate(request)

  const session = await supabase.auth.getSession()
  const userSession = session?.data?.session?.user
  //Takes user to login page if not logged in
  if (!userSession) throw redirect("/login")

  const data = Promise.all([
    supabase.from("profiles").select("*").single(),
    supabase.from("history").select("*"),
    supabase.from("cash").select("*"),
    supabase.from("budget").select("*"),
    //new Promise((resolve) => setTimeout(resolve, 2000)),
  ])

  return defer({ data })
}
export default function Index() {
  const data = useLoaderData<typeof loader>()
  const { colorScheme } = useMantineColorScheme()
  //const [opened, { toggle }] = useDisclosure()
  return (
    <Flex
      className={`${styles.app} ${
        colorScheme === "light" ? styles.light : styles.dark
      }`}
    >
      <Box className={styles.sidebar}>
        <Sidebar data={data} />
      </Box>
      <Box className={styles.content}>
        <Outlet context={data} />
      </Box>
    </Flex>
  )

  // <AppShell
  //   header={{ height: 60 }}
  //   navbar={{
  //     width: 250,
  //     breakpoint: "sm",
  //     collapsed: { mobile: !opened },
  //   }}
  //   padding="md"
  // >
  //   <AppShell.Header className={styles.header}>
  //     <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
  //     <Header />
  //   </AppShell.Header>
  //   <AppShell.Navbar className={styles.navbar}>
  //     <Sidebar data={data} />
  //   </AppShell.Navbar>
  //   <AppShell.Main className={styles.outlet}>
  //     <Outlet context={data} />
  //   </AppShell.Main>
  // </AppShell>
}
