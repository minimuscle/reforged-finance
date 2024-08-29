import { AreaChart } from '@mantine/charts'
import { useMemo } from 'react'
import useHistory from '~/utils/hooks/useHistory'
import { transformData } from '~/utils/utils'
import classes from '../../_index.module.css'
import ChartTooltip from '~/components/ChartTooltip.tsx/ChartTooltip'

const NetWorth = ({ filter }: { filter: string }) => {
  const { history } = useHistory()
  const historyData = useMemo(
    () => transformData(history, filter),
    [history, filter]
  )

  //TODO: Change this to an area chart with the negative red and positive green from Mantine
  return (
    <AreaChart
      className={classes.netWorthChart}
      data={historyData.slice(1)}
      dataKey='date'
      series={[{ name: 'netWorth', color: 'red.6' }]}
      curveType='linear'
      tooltipProps={{
        content: ({ label, payload }) => (
          <ChartTooltip payload={payload} label={label} name='Net Worth' />
        ),
      }}
    />
  )
}

export default NetWorth
