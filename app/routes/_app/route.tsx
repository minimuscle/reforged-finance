import { Outlet, useLoaderData } from "@remix-run/react"
import Sidebar from "./components/Sidebar"
import { LoaderFunctionArgs, redirect, defer } from "@remix-run/node"
import { supabaseCreate } from "~/utils/supabase"
import styles from "./_app.module.css"
import { Box, Flex } from "@mantine/core"

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
  ])

  return defer({ data })
}
export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <Flex className={styles.app}>
      <Box className={styles.sidebar}>
        <Sidebar data={data} />
      </Box>
      <Box className={styles.content}>
        <Outlet context={data} />
      </Box>
    </Flex>
  )
}
