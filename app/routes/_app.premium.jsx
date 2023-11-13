import React from "react"
import { Center, Paper, Space, Stack, Table, Text, Title } from "@mantine/core"
import "../styles/styles.css"

export const meta = () => {
  return [{ title: "Premium | Personal Finance" }]
}

const data = [
  {
    year: 2021,
    month: "January",
    cash: 9723,
    super: 6881,
    debts: -49435,
    income: 4888,
  },
  {
    year: 2021,
    month: "Febuary",
    cash: 5723,
    super: 6881,
    debts: -49435,
    income: 4888,
  },
  {
    year: 2021,
    month: "March",
    cash: 7646,
    super: 8881,
    debts: -46435,
    income: 5022,
  },
]

export default function Premium() {
  return (
    <>
      <Stack align="center">
        <Title>Premium</Title>
        <Text>Get Premium</Text>
      </Stack>
    </>
  )
}
