import { Flex, Heading } from "@radix-ui/themes"
import { Outlet } from "@remix-run/react"
import Sidebar from "./Sidebar"
import Header from "./Header"

/**
 * This is the main layout of the application
 * It should contain the sidebar, header, footer, etc.
 * It should also contain the <Outlet /> component
 *
 */

export default function Index() {
  return (
    <div style={{ height: "100vh" }}>
      <Flex height={"100%"} direction={"column"}>
        <Header />
        <Flex grow={"1"}>
          <Sidebar />
          <Outlet />
        </Flex>
      </Flex>
    </div>
  )
}
