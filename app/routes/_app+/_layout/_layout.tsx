import { Outlet } from "@remix-run/react"

export default function Layout() {
  return (
    <div className="hello">
      <h1>layout</h1>
      <Outlet />
    </div>
  )
}
