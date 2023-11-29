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
    .filter(
      (item) => item.year == year || (item.month == 12 && item.year == year - 1)
    )
    .sort((a, b) => {
      // Custom sorting logic
      if (a.year == year - 1 && a.month == 12) {
        return -1 // Move items with month "12" and year "year - 1" to the front
      } else if (b.year == year - 1 && b.month == 12) {
        return 1 // Move items with month "12" and year "year - 1" to the front
      } else {
        // Normal sorting based on month
        return a.month - b.month
      }
    })

  const sortedHistory = history
    .sort((a, b) => {
      // Compare by 'year'
      if (a.year !== b.year) {
        return a.year - b.year
      }
      // If 'year' is the same, compare by 'month'
      return a.month - b.month
    })
    .reverse()

  console.log(sortedHistory)

  const cashComparisons = []

  // Iterate over the array for 12 months
  for (let i = 0; i < 13; i++) {
    const currentMonthCash = sortedHistory[i].cash
    const previousMonthCash = sortedHistory[i + 1].cash
    // Compare the 'cash' values and push the result into the new array
    cashComparisons.push(currentMonthCash - previousMonthCash)
  }
  console.log("compare:", cashComparisons)
  const averageComparisonResult = cashComparisons.reduce(
    (acc, num) => acc + num,
    0
  )
  console.log("compareRes:", averageComparisonResult / cashComparisons.length)
  console.log(cashComparisons.length)

  const averageMonthlyDifference =
    averageComparisonResult / cashComparisons.length

  const monthlyCashSavings = thisMonth.cash - lastMonth.cash
  const yearlyCashSavings =
    thisYear[thisYear.length - 1].cash - thisYear[0].cash

  const predictedSavings =
    yearlyCashSavings + averageMonthlyDifference * (12 - month)
  const predictedCash = thisMonth.cash + predictedSavings

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
                  {moneyFormatter.format(monthlyCashSavings)}
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
                  {moneyFormatter.format(yearlyCashSavings)}
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
                  {moneyFormatter.format(averageMonthlyDifference)}
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
                  {moneyFormatter.format(predictedSavings)}
                </Badge>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Text>Predicted Total Cash EOY</Text>
              </Table.Td>
              <Table.Td align="right">
                <Badge
                  color={predictedCash > 0 ? "green" : "red"}
                  variant="light"
                  size="xl"
                  radius="sm"
                >
                  {moneyFormatter.format(predictedCash)}
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
