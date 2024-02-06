import { Paper, Table } from "@mantine/core"
import useHistory from "~/utils/hooks/useHistory"
import { formatter } from "~/utils/utils"
import classes from "../history.module.css"

const HistoryTable = () => {
  const { history } = useHistory()

  return (
    <Paper className={classes.totals} shadow="md">
      <Table
        verticalSpacing="md"
        stickyHeader
        withTableBorder
        highlightOnHover
        striped
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Total Cash</Table.Th>
            <Table.Th>Cash Gain</Table.Th>
            <Table.Th>Savings Rate</Table.Th>
            <Table.Th>Super</Table.Th>
            <Table.Th>Super Gain</Table.Th>
            <Table.Th>Debts</Table.Th>
            <Table.Th>Income</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {history.map((item, key) => {
            const date = new Date(item.date).toLocaleString("en-AU", {
              month: "short",
              year: "numeric",
            })
            const gain = item.cash - history[key - 1]?.cash
            const gainPercentage =
              key > 0 ? ((gain / history[key - 1]?.cash) * 100).toFixed(0) : 0
            const savingsRate =
              key > 0 ? ((gain / history[key - 1]?.income) * 100).toFixed(0) : 0

            const superGain = item.super - history[key - 1]?.super
            const superGainPercentage =
              key > 0
                ? ((superGain / history[key - 1]?.super) * 100).toFixed(0)
                : 0
            return (
              <Table.Tr key={key}>
                <Table.Td>{date}</Table.Td>
                <Table.Td>{formatter("AUD", item.cash)}</Table.Td>
                <Table.Td
                  className={`${
                    gain > 0 ? classes.positive : classes.negative
                  }`}
                >
                  {key > 0
                    ? `${formatter("AUD", gain)} ( 
                  ${gain > 0 ? "+" + gainPercentage : gainPercentage}
                  % )`
                    : "-"}
                </Table.Td>
                <Table.Td
                  className={`${
                    gain > 0 ? classes.positive : classes.negative
                  }`}
                >
                  {savingsRate}%
                </Table.Td>
                <Table.Td>{formatter("AUD", item.super)}</Table.Td>
                <Table.Td
                  className={`${
                    superGain > 0 ? classes.positive : classes.negative
                  }`}
                >
                  {key > 0
                    ? `${formatter("AUD", superGain)} ( 
                  ${
                    superGain > 0
                      ? "+" + superGainPercentage
                      : superGainPercentage
                  }
                  % )`
                    : "-"}
                </Table.Td>
                <Table.Td>{formatter("AUD", item.debts)}</Table.Td>
                <Table.Td>{formatter("AUD", item.income)}</Table.Td>
              </Table.Tr>
            )
          })}
        </Table.Tbody>
      </Table>
    </Paper>
  )
}

export default HistoryTable
