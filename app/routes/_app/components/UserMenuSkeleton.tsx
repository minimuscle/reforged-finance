import { Avatar, Flex, Group, Skeleton, Stack, ThemeIcon } from '@mantine/core'
import classes from '../_app.module.css'
import { RiArrowRightSLine } from 'react-icons/ri/index.js'

export default function UserMenuSkeleton() {
  return (
    <Group className={classes.userButton}>
      <Flex className={classes.avatar}>
        <Avatar color='blue' radius={'md'} />
        <Stack className={classes.user}>
          <Skeleton />
          <Skeleton />
        </Stack>
      </Flex>
      <ThemeIcon className={classes.icon} variant='transparent' size={'md'}>
        <RiArrowRightSLine />
      </ThemeIcon>
    </Group>
  )
}
