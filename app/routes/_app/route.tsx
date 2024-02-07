import { Outlet, useLoaderData } from "@remix-run/react"
import Sidebar from "./components/Sidebar"
import { LoaderFunctionArgs, redirect, defer } from "@remix-run/node"
import { supabaseCreate } from "~/utils/supabase"
import styles from "./_app.module.css"
import { Box, Flex } from "@mantine/core"
import { CollapsedContext } from "~/utils/contexts/CollapsedContext"
import { useState } from "react"
import { collapsedCookie } from "~/utils/cookies.server"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabase = supabaseCreate(request)

  //FIXME: This should not call the database on every page load, it should be cached
  const session = await supabase.auth.getSession()
  const userSession = session?.data?.session?.user
  //Takes user to login page if not logged in
  if (!userSession) throw redirect("/login")

  const cookie = request.headers.get("Cookie")
  const collapsed = await collapsedCookie.parse(cookie)
  console.log(collapsed)

  const data = Promise.all([
    supabase.from("profiles").select("*").single(),
    supabase.from("history").select("*"),
    supabase.from("cash").select("*"),
    supabase.from("budget").select("*"),
    supabase.from("super").select("*"),
  ])

  return defer({ isCollapsed: collapsed, data })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const [isCollapsed, setIsCollapsed] = useState(data.isCollapsed === "true")

  return (
    <CollapsedContext.Provider value={isCollapsed}>
      <Flex className={styles.app}>
        <Sidebar data={data} setIsCollapsed={setIsCollapsed} />
        <Box className={`${styles.content} ${isCollapsed && styles.collapsed}`}>
          <Outlet context={data} />
        </Box>
      </Flex>
    </CollapsedContext.Provider>
  )
}
