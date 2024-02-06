import { Box, Title } from "@mantine/core"
import DataDefer from "~/components/DataDefer"
import classes from "./history.module.css"
import HistoryTable from "./components/HistoryTable"

export default function History() {
  return (
    <Box className={classes.container}>
      <Title className={classes.title}>History</Title>
      <DataDefer>
        <HistoryTable />
      </DataDefer>
    </Box>
  )
}
