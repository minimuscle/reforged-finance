import React from "react"

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Super() {
  return (
    <div>
      <h1>Super</h1>
    </div>
  )
}
