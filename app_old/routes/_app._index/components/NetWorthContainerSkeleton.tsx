import {
  Badge,
  Group,
  Paper,
  Skeleton,
  Space,
  Text,
  Title,
} from '@mantine/core'
import classes from '../_index.module.css'
import ChartFilters from '~/components/ChartFilters'
import { useState } from 'react'
const NetWorthContainerSkeleton = () => {
  const [active, setActive] = useState('ALL')

  return (
    <Paper className={classes.netWorthContainer}>
      <Group className={classes.header}>
        <Text className={classes.title}>Total Net Worth</Text>
        <Badge radius='md' color='gray' size='xl' variant='light'>
          <Skeleton h={20} w={100} />
        </Badge>
      </Group>

      <Title className={classes.netWorth}>
        <span>$</span>
        <Skeleton h={75} w={150} />
        {/* {formatter('AUD', netWorth).slice(1)} */}
      </Title>
      <Group className={classes.filters}>
        <Space />
        <ChartFilters active={active} setActive={setActive} />
      </Group>
    </Paper>
  )
}

export default NetWorthContainerSkeleton
