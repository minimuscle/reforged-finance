import { Paper, Stack, Table, Title } from "@mantine/core"
import useHistory from "~/utils/hooks/useHistory"
import { formatter } from "~/utils/utils"
import classes from "../SideIncome.module.css"

const CashHistory = () => {
  const { history } = useHistory()
  const historyData = history.reverse()

  return (
    <Paper className={classes.totals} shadow="md" p={10} withBorder>
      <Stack>
        <Title>Income History</Title>
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
                <Table.Th>Total Super</Table.Th>
                <Table.Th>Income Gain</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {historyData.map((item, key) => {
                const date = new Date(item.date).toLocaleString("en-AU", {
                  month: "short",
                  year: "numeric",
                })
                const gain = item.super - history[key + 1]?.super
                const gainPercentage =
                  key > 0
                    ? ((gain / history[key + 1]?.super) * 100).toFixed(0)
                    : 0
                return (
                  <Table.Tr key={key}>
                    <Table.Td>{date}</Table.Td>
                    <Table.Td>{formatter("AUD", item.super)}</Table.Td>
                    <Table.Td
                      className={`${
                        gain > 0 ? classes.positive : classes.negative
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

export default CashHistory
