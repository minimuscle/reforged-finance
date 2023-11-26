import React from "react"
import { Space, Stack, Table, Text, Title } from "@mantine/core"
import "../styles/styles.css"
import { useLoaderData } from "@remix-run/react"
import { createSupabaseServerClient } from "../util/supabase.server"

export const meta = () => {
  return [{ title: "History | WealthForge" }]
}

export const loader = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })

  const { data } = await supabase.from("history").select("*")
  console.log(data)

  return {
    data,
  }
}

export default function History() {
  const { data } = useLoaderData()

  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
  })

  function getMonthName(monthNumber) {
    const date = new Date()
    date.setMonth(monthNumber - 1)

    return date.toLocaleString("en-US", {
      month: "long",
    })
  }

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
      <Table.Tr key={row.id}>
        <Table.Td>{row.year}</Table.Td>
        <Table.Td>{getMonthName(row.month)}</Table.Td>
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
      <Table.ScrollContainer bg="white" minWidth={750} type="native">
        <Table
          highlightOnHover
          striped
          withTableBorder
          className="table"
          h="100px"
          overflow="hidden"
        >
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
      </Table.ScrollContainer>
    </>
  )
}
