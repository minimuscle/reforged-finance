import { Flex, Stack, Text, Title } from "@mantine/core"
import React from "react"
import MonthlyBudget from "../components/Widgets/Budget/MonthlyBudget"

export const meta = () => {
  return [{ title: "Budget | WealthFire" }]
}

export default function Budget() {
  return (
    <Flex gap="md" wrap="wrap">
      <MonthlyBudget />
    </Flex>
  )
}
