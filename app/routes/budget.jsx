import { Stack, Text, Title } from "@mantine/core"
import React from "react"

export const meta = () => {
  return [{ title: "Budget | WealthForge" }]
}

export default function Budget() {
  return (
    <>
      <Stack align='center'>
        <Title>Budget</Title>
        <Text>Only Available for Premium Members</Text>
      </Stack>
    </>
  )
}
