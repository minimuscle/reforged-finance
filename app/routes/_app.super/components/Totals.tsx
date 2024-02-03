import { Badge, Paper, Stack, Table, Text, Title } from "@mantine/core"
import { formatter } from "~/utils/utils"
import useTotals from "./useTotals"

const Totals = () => {
  const {
    averageMonthlyDifference,
    monthlyCashSavings,
    yearlyCashSavings,
    predictedCash,
    predictedSavings,
  } = useTotals()
  const year = new Date().getFullYear()
  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
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
                  {formatter("AUD", monthlyCashSavings)}
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
                  {formatter("AUD", yearlyCashSavings)}
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
                  {formatter("AUD", averageMonthlyDifference)}
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
                  {formatter("AUD", predictedSavings)}
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
                  {formatter("AUD", predictedCash)}
                </Badge>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Stack>
    </Paper>
  )
}

export default Totals
