import { Box } from '@mantine/core'
import DataDefer from '~/components/DataDefer'
import classes from './history.module.css'
import HistoryTable from './components/HistoryTable'
import Heading from '~/components/Heading'
import HistoryTableSkeleton from './components/HistoryTableSkeleton'

export default function History() {
  return (
    <Box className={classes.container}>
      <Heading title='History' />
      <DataDefer fallback={<HistoryTableSkeleton />}>
        <HistoryTable />
      </DataDefer>
    </Box>
  )
}
