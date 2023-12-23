import { Box, Flex } from "@radix-ui/themes"
import { Outlet } from "@remix-run/react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { LoaderFunctionArgs } from "@remix-run/node"
import { supabaseCreate } from "~/utils/supabase"
import styles from "./_app.module.css"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabase = supabaseCreate(request)
  return null
}

/**
 * This is the main layout of the application
 * It should contain the sidebar, header, footer, etc.
 * It should also contain the <Outlet /> component
 *
 */

export default function Index() {
  return (
    <div className={styles.container}>
      <Flex height={"100%"} direction={"column"}>
        <Header />
        <Flex className={styles.flex} grow={"1"}>
          <Sidebar />
          <Box className={styles.outlet}>
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </div>
  )
}
