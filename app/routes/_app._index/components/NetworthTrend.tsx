import { Badge, Group, Text } from '@mantine/core'
import Tile from './Tile'
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from 'react-icons/md/index.js'
import { formatter } from '~/utils/utils'
import useHistory from '~/utils/hooks/useHistory'
import { useEffect, useState } from 'react'

const NetworthTrend = () => {
  const { history } = useHistory()
  const [netWorth, setNetWorth] = useState('Update Month')
  const [change, setChange] = useState(0)

  useEffect(() => {
    if (history.length < 2) return
    const latestMonth = new Date(history[history.length - 1].date).getMonth()
    const currentMonth = new Date().getMonth()
    if (latestMonth === currentMonth) {
      const percent = (
        (1 -
          (history[history.length - 2]?.netWorth ?? 0) /
            (history[history.length - 1].netWorth ?? 0)) *
        100
      ).toFixed(2)

      const value =
        (history[history.length - 1].netWorth ?? 0) -
        (history[history.length - 2].netWorth ?? 0)
      setNetWorth(`${percent}%`)

      setChange(value)
    }
  }, [history])
  return (
    <Tile title='Networth Trend' footer={change && <Footer change={change} />}>
      {netWorth}
    </Tile>
  )
}

const Footer = ({ change }: { change: number }) => {
  console.log(change)
  return (
    <Group>
      <Badge
        leftSection={
          change >= 0 ? (
            <MdKeyboardDoubleArrowUp />
          ) : (
            <MdKeyboardDoubleArrowDown />
          )
        }
        radius='md'
        color={change >= 0 ? 'teal' : 'red'}
        size='xl'
        variant='light'
      >
        {formatter('AUD', change)}
      </Badge>
      <Text>Since last month</Text>
    </Group>
  )
}

export default NetworthTrend
