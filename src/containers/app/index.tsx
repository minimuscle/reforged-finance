import { Outlet } from "@tanstack/react-router"
import { Sidebar } from "./sidebar"
import "./_app.scss"

export function App() {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  )
}
