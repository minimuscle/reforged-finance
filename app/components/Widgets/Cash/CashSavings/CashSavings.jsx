import { Badge, Group, Paper, Stack, Table, Text, Title } from "@mantine/core"
import { moneyFormatter } from "../../../../util/formatter"
import { useLoaderData } from "@remix-run/react"

const CashSavings = () => {
  const { history } = useLoaderData()
  //get just the cash from last month and the month before
  const month = Intl.DateTimeFormat("en-US", { month: "2-digit" }).format(
    Date.now()
  )
  const year = Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    Date.now()
  )

  const lastMonth = history.find(
    (item) =>
      item.month == month - 1 && item.year == (month == 1 ? year - 1 : year) // This accounts for last month being December of the previous year
  )
  const thisMonth = history.find(
    (item) => item.month == month && item.year == year
  )

  //sort in case the month was added at a different time, ID might not be in order
  const thisYear = history
    .filter((item) => item.year == year)
    .sort((a, b) => a.month - b.month)

  const monthlyCashSavings = thisMonth.cash - lastMonth.cash
  const yearlyCashSavings =
    thisYear[thisYear.length - 1].cash - thisYear[0].cash

  //Get today's month
  const monthLong = Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(Date.now())
  return (
    <Paper shadow="xl" p="md" withBorder h="100%" miw="400px" align="center">
      <Stack justify="flex-start">
        <Title>{monthLong} Cash Savings</Title>
        <Table verticalSpacing="md" withTableBorder striped>
          <Table.Tbody>
            <Table.Tr c={monthlyCashSavings > 0 ? "green" : "red"}>
              <Table.Td>
                <Text>Cash Savings This Month</Text>
              </Table.Td>
              <Table.Td align="right">
                <Badge
                  color={monthlyCashSavings > 0 ? "green" : "red"}
                  variant="light"
                  size="xl"
                  radius="sm"
                >
                  {moneyFormatter.format(monthlyCashSavings)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr c={yearlyCashSavings > 0 ? "green" : "red"}>
              <Table.Td>
                <Text>Cash Savings This Year</Text>
              </Table.Td>
              <Table.Td align="right">
                <Badge
                  color={yearlyCashSavings > 0 ? "green" : "red"}
                  variant="light"
                  size="xl"
                  radius="sm"
                >
                  {moneyFormatter.format(yearlyCashSavings)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr c={yearlyCashSavings > 0 ? "green" : "red"}>
              <Table.Td>
                <Text>Average Cash Savings per Month</Text>
              </Table.Td>
              <Table.Td align="right">
                <Badge
                  color={yearlyCashSavings > 0 ? "green" : "red"}
                  variant="light"
                  size="xl"
                  radius="sm"
                >
                  {moneyFormatter.format(yearlyCashSavings)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text fw={700}>Average Cash Savings per Month</Text>
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
