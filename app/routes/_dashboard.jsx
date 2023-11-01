import { Outlet } from "@remix-run/react"
import React from "react"

function Dashboard() {
  return (
    <div>
      dash
      <Outlet />
    </div>
  )
}

export default Dashboard
