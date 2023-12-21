import { Heading } from "@radix-ui/themes"
import { Outlet } from "@remix-run/react"

/**
 * This is the main layout of the application
 * It should contain the sidebar, header, footer, etc.
 * It should also contain the <Outlet /> component
 *
 */

export default function Index() {
  return (
    <div>
      <Heading>App</Heading>
      <Outlet />
    </div>
  )
}
