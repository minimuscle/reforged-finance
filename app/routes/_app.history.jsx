import React from "react"
import { Center, Paper, Space, Stack, Table, Text, Title } from "@mantine/core"
import "../styles/styles.css"

export const meta = () => {
  return [
    { title: "History | Personal Finance" },
    { name: "description", content: "View Previous Months" },
  ]
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

export default function History() {
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  })

  const rows = data.map((row, index, array) => {
    const cashGainDollar = index !== 0 ? row.cash - array[index - 1]?.cash : 0
    const cashGainPercent =
      index !== 0
        ? Math.round((cashGainDollar / array[index - 1]?.cash) * 100)
        : 0

    const superGainDollar =
      index !== 0 ? row.super - array[index - 1]?.super : 0
    const superGainPercent =
      index !== 0
        ? Math.round((superGainDollar / array[index - 1]?.super) * 100)
        : 0

    return (
      <Table.Tr key={index}>
        <Table.Td>{row.year}</Table.Td>
        <Table.Td>{row.month}</Table.Td>
        <Table.Td>{formatter.format(row.cash)}</Table.Td>
        <Table.Td className={cashGainDollar >= 0 ? "positive" : "negative"}>
          {formatter.format(cashGainDollar)}
        </Table.Td>
        <Table.Td className={cashGainPercent >= 0 ? "positive" : "negative"}>
          {cashGainPercent}%
        </Table.Td>
        <Table.Td>{formatter.format(row.super)}</Table.Td>
        <Table.Td className={superGainDollar >= 0 ? "positive" : "negative"}>
          {formatter.format(superGainDollar)}
        </Table.Td>
        <Table.Td className={superGainPercent >= 0 ? "positive" : "negative"}>
          {superGainPercent}%
        </Table.Td>
        <Table.Td>{formatter.format(row.debts)}</Table.Td>
        <Table.Td>{formatter.format(row.income)}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <>
      <Stack align="center">
        <Title>History</Title>
        <Text>View Previous Months</Text>
      </Stack>
      <Space h="xl" />
      <Table highlightOnHover striped withTableBorder className="table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Month</Table.Th>
            <Table.Th>Cash</Table.Th>
            <Table.Th>Gain ($)</Table.Th>
            <Table.Th>Increase (%)</Table.Th>
            <Table.Th>Super</Table.Th>
            <Table.Th>Super Gain ($)</Table.Th>
            <Table.Th>Super Increase (%)</Table.Th>
            <Table.Th>Debts</Table.Th>
            <Table.Th>Income</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  )
}
