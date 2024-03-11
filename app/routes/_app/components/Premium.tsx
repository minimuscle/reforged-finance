import { Box, Group, Text, ThemeIcon, Title } from '@mantine/core'
import { Link } from '@remix-run/react'
import { RiVipCrown2Fill } from 'react-icons/ri/index.js'
import classes from '../_app.module.css'

export default function Premium() {
  return (
    <Box className={classes.premium}>
      <Group className={classes.pHeading}>
        <ThemeIcon variant='subtle'>
          <RiVipCrown2Fill />
        </ThemeIcon>
        <Title order={4}>Get Premium</Title>
      </Group>
      <Text size='sm'>Exports, budget tracking and much more</Text>
      <Link to='/premium' prefetch='intent'>
        Upgrade Now
      </Link>
    </Box>
  )
}
