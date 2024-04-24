import type { MetaFunction } from "@remix-run/node"
import { Link, useOutletContext } from "@remix-run/react"
import { User } from "~/utils/types"
export const meta: MetaFunction = () => {
  return [
    { title: "Reforged Finance" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const user = useOutletContext() as User
  return (
    <div>
      New Reforged Finance Version 0.4.0
      <br />
      <p>{user.name}</p>
      <Link to="/logout">Log Out</Link>
    </div>
  )
}
