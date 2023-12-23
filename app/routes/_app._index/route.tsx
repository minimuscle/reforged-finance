import { Box, Heading } from "@radix-ui/themes"
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
    <Box>
      <Heading>Hi</Heading>
      <Card>Hello</Card>
    </Box>
  )
}
