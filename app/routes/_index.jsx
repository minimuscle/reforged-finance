import React from "react"

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
