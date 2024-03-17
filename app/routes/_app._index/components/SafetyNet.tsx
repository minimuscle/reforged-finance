import { Badge, Group, Text } from '@mantine/core'
import Tile from './Tile'
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from 'react-icons/md/index.js'
import useHistory from '~/utils/hooks/useHistory'
import useUser from '~/utils/hooks/useUser'
import useTotals from '~/routes/_app.cash/hooks/useTotals'

const SafetyNet = () => {
  const { history } = useHistory()
  const { user } = useUser()
  const currentCash = history[history.length - 1]?.cash ?? 0
  const months = (currentCash / user?.netIncome).toFixed(0)

  //get cash from the first recorded month this year
  const firstMonth = history.find(
    (record) => new Date(record.date).getFullYear() === new Date().getFullYear()
  )
  const firstMonthCash = firstMonth?.cash ?? 0
  const firstMonthMonths = (firstMonthCash / user?.netIncome).toFixed(0)

  //Calculate saving per month
  const { averageCashSavings } = useTotals()

  return (
    <Tile
      title='Safety Net'
      footer={
        averageCashSavings && (
          <Footer
            months={parseInt(months)}
            firstMonths={parseInt(firstMonthMonths)}
          />
        )
      }
      rightComponent={
        <RightComponent
          months={parseInt(months)}
          firstMonths={parseInt(firstMonthMonths)}
        />
      }
    >
      {months} {months === '1' ? 'Month' : 'Months'}
    </Tile>
  )
}

const RightComponent = ({
  months,
  firstMonths,
}: {
  months: number
  firstMonths: number
}) => {
  return (
    <Badge
      radius='md'
      color={months - firstMonths >= 0 ? 'teal' : 'red'}
      size='xl'
      variant='light'
    >
      {months - firstMonths >= 0 ? 'On Track' : 'Off Track'}
    </Badge>
  )
}

const Footer = ({
  months,
  firstMonths,
}: {
  months: number
  firstMonths: number
}) => {
  return (
    <Group>
      <Badge
        leftSection={
          months - firstMonths >= 0 ? (
            <MdKeyboardDoubleArrowUp />
          ) : (
            <MdKeyboardDoubleArrowDown />
          )
        }
        radius='md'
        color={months - firstMonths >= 0 ? 'teal' : 'red'}
        size='xl'
        variant='light'
      >
        {months - firstMonths} Month{months - firstMonths === 1 ? 's' : ''}
      </Badge>
      <Text>Since January</Text>
    </Group>
  )
}

export default SafetyNet
