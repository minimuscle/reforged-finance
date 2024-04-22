import { Paper, Stack, Table, Title } from "@mantine/core"
import useHistory from "~/utils/hooks/useHistory"
import { formatter } from "~/utils/utils"
import classes from "../debts.module.css"

const DebtsHistoryTable = () => {
  const { history } = useHistory()
  const historyData = history.reverse()

  return (
    <Paper className={classes.totals} shadow="md" p={10} withBorder>
      <Stack>
        <Title>Liabilities History</Title>
        <Table.ScrollContainer className={classes.totalsTable} minWidth="100%">
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
                <Table.Th>Total Debt</Table.Th>
                <Table.Th>Debt Gain / Loss</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {historyData.map((item, key) => {
                const date = new Date(item.date).toLocaleString("en-AU", {
                  month: "short",
                  year: "numeric",
                })
                const gain = item.debts - history[key + 1]?.debts
                const gainPercentage =
                  key > 0
                    ? ((gain / history[key + 1]?.debts) * 100).toFixed(0)
                    : 0
                return (
                  <Table.Tr key={key}>
                    <Table.Td>{date}</Table.Td>
                    <Table.Td>{formatter("AUD", item.debts)}</Table.Td>
                    <Table.Td
                      className={`${
                        gain <= 0 ? classes.positive : classes.negative
                      }`}
                    >
                      {key < historyData.length - 1
                        ? `${formatter("AUD", gain)} ( 
                  ${gain > 0 ? "+" + gainPercentage : gainPercentage}
                  % )`
                        : "-"}
                    </Table.Td>
                  </Table.Tr>
                )
              })}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Stack>
    </Paper>
  )
}

export default DebtsHistoryTable
