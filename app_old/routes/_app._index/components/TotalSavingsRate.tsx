import { Badge, Group, Text } from '@mantine/core'
import Tile from './Tile'
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from 'react-icons/md/index.js'
import { formatter } from '~/utils/utils'
import useUser from '~/utils/hooks/useUser'
import useTotals from '~/routes/_app.cash/hooks/useTotals'

const TotalSavingsRate = () => {
  const { user } = useUser()
  //Calculate saving per month
  const { yearlyCashSavings, averageMonthlyDifference } = useTotals()

  //convert averageMonthlyDifference to a percentage of savings
  const savingsRate = (averageMonthlyDifference / user?.netIncome) * 100 || 0

  return (
    <Tile
      title='Total Savings Rate'
      footer={
        yearlyCashSavings && <Footer averageCashSavings={yearlyCashSavings} />
      }
      rightComponent={<RightComponent months={averageMonthlyDifference} />}
    >
      {formatter('AUD', averageMonthlyDifference)} ({savingsRate.toFixed(0)}%)
    </Tile>
  )
}

const RightComponent = ({ months }: { months: number }) => {
  return (
    <Badge
      radius='md'
      color={months > 0 ? 'teal' : 'red'}
      size='xl'
      variant='light'
    >
      {months > 0 ? 'On Track' : 'Off Track'}
    </Badge>
  )
}

const Footer = ({ averageCashSavings }: { averageCashSavings: number }) => {
  return (
    <Group>
      <Badge
        leftSection={
          averageCashSavings >= 0 ? (
            <MdKeyboardDoubleArrowUp />
          ) : (
            <MdKeyboardDoubleArrowDown />
          )
        }
        radius='md'
        color={averageCashSavings >= 0 ? 'teal' : 'red'}
        size='xl'
        variant='light'
      >
        {formatter('AUD', averageCashSavings)}
      </Badge>
      <Text>Since January</Text>
    </Group>
  )
}

export default TotalSavingsRate
