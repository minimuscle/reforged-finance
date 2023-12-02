import { Badge, Paper, Stack, Table, Text, Title } from "@mantine/core"
import { useLoaderData } from "@remix-run/react"
import { formatter } from "../../../../util"

const CashSavings = () => {
  const { history } = useLoaderData()

  const month = new Date(Date.now()).getMonth()
  const year = new Date(Date.now()).getFullYear()
  const lastMonth = history[history.length - 2] // Gets the second last month completed
  const thisMonth = history[history.length - 1] // Gets the last month completed, which if the user has done this month should be the current month

  const thisYear = history.filter(
    (item) => new Date(item.date).getFullYear() == year
  ) // gets just this year

  const monthlyCashSavings = thisMonth.cash - lastMonth.cash
  const yearlyCashSavings =
    thisYear[thisYear.length - 1].cash - thisYear[0].cash

  const cashSavings = []
  for (let i = 1; i < thisYear.length; i++) {
    cashSavings.push(thisYear[i].cash - thisYear[i - 1].cash)
  }
  const averageCashSavings = cashSavings.reduce((a, b) => a + b, 0)
  const averageMonthlyDifference = Math.round(
    averageCashSavings / thisYear.length
  )

  const predictedSavings =
    yearlyCashSavings + averageMonthlyDifference * (12 - month)
  const predictedCash = thisMonth.cash + averageMonthlyDifference

  return (
    <Paper shadow="xl" p="md" withBorder h="100%" miw="400px" align="center">
      <Stack justify="flex-start">
        <Title>{year} Cash Savings</Title>
        <Table verticalSpacing="md" withTableBorder striped>
          <Table.Tbody>
            <Table.Tr>
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
                  {formatter.format(monthlyCashSavings)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
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
                  {formatter.format(yearlyCashSavings)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text>Average Cash Savings per Month</Text>
              </Table.Td>
              <Table.Td align="right">
                <Badge
                  color={averageMonthlyDifference > 0 ? "green" : "red"}
                  variant="light"
                  size="xl"
                  radius="sm"
                >
                  {formatter.format(averageMonthlyDifference)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text>Predicted Cash Savings EOY</Text>
              </Table.Td>
              <Table.Td align="right">
                <Badge
                  color={predictedSavings > 0 ? "green" : "red"}
                  variant="light"
                  size="xl"
                  radius="sm"
                >
                  {formatter.format(predictedSavings)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text>Predicted Total Cash EOY</Text>
              </Table.Td>
              <Table.Td align="right">
                <Badge
                  color={predictedCash > 0 ? "blue" : "red"}
                  variant="light"
                  size="xl"
                  radius="sm"
                >
                  {formatter.format(predictedCash)}
                </Badge>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Stack>
    </Paper>
  )
}

export default CashSavings
