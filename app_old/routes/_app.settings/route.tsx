import { Box, Flex } from '@mantine/core'
import DataDefer from '~/components/DataDefer'
import classes from './settings.module.css'
import Profile from './components/Profile'
import Heading from '~/components/Heading'
import Income from './components/Income'
import Goals from './components/Goals'

export default function Settings() {
  return (
    <Box className={classes.container}>
      <Heading title='Settings' />
      <DataDefer>
        <Flex wrap='wrap' gap={20}>
          <Profile />
          <Income />
          <Goals />
        </Flex>
      </DataDefer>
    </Box>
  )
}
