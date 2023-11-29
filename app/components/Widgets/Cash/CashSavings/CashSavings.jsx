import { Group, Paper, Stack, Table, Text, Title } from "@mantine/core"
import { moneyFormatter } from "../../../../util/formatter"
import { useLoaderData } from "@remix-run/react"

const CashSavings = () => {
  const { history } = useLoaderData()
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date()
  )
  return (
    <Paper shadow="xl" p="md" withBorder h="100%" align="center">
      <Stack justify="flex-start">
        <Title>{month} Cash Savings</Title>
        <Table verticalSpacing="md" withTableBorder striped>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Text fw={700}>Cash Savings This Month</Text>
              </Table.Td>
              <Table.Td>
                <Text align="right">{moneyFormatter.format(1000)}</Text>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text fw={700}>Cash Savings This Year</Text>
              </Table.Td>
              <Table.Td>
                <Text align="right">{moneyFormatter.format(1000)}</Text>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text fw={700}>Average Cash Savings</Text>
              </Table.Td>
              <Table.Td>
                <Text align="right">{moneyFormatter.format(1000)}</Text>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text fw={700}>Predicted Cash EOY</Text>
              </Table.Td>
              <Table.Td>
                <Text align="right">{moneyFormatter.format(1000)}</Text>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Stack>
    </Paper>
  )
}

export default CashSavings
