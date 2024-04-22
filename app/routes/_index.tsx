import type { MetaFunction } from "@remix-run/node"
import { db } from "~/utils/db.server"

export const meta: MetaFunction = () => {
  return [
    { title: "Reforged Finance" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export async function loader() {
  const data = await db.collection("users").get()
  const users = data.docs.map((doc) => doc.data())

  console.log(users)
  return null
}

export default function Index() {
  return <div>New Reforged Finance Version 0.4.0</div>
}
