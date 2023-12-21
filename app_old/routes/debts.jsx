import { Flex } from "@mantine/core"
import React from "react"
import DebtsList from "../components/Widgets/Debts/DebtsList"

export const meta = () => {
  return [{ title: "Debts | WealthFire" }]
}

export default function Debts() {
  return (
    <Flex gap="md" wrap="wrap">
      <DebtsList />
    </Flex>
  )
}
