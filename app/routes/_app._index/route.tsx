import { Heading } from "@radix-ui/themes"
import type { MetaFunction } from "@remix-run/node"
import { Card } from "@tremor/react"

export const meta: MetaFunction = () => {
  return [
    { title: "Wealthfire" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div>
      <Heading>Hi</Heading>
      <div style={{ width: "50%", marginLeft: "50px" }}>
        <Card>Hello</Card>
      </div>
    </div>
  )
}
