import { Avatar, Flex, Group, Menu, Stack, Switch, Text, ThemeIcon, Title, useMantineColorScheme } from '@mantine/core'
import { RiArrowRightSLine, RiSettings3Line, RiQuestionLine, RiLogoutBoxLine } from 'react-icons/ri/index.js'
import { useState } from 'react'
import { Link } from '@remix-run/react'
import classes from '../_app.module.css'
import useUser from '~/utils/hooks/useUser'

export default function UserMenu() {
  const { user } = useUser()
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  return (
    <Menu opened={opened} onChange={setOpened} offset={25} position='right-end' shadow='lg'>
      <Menu.Target>
        <Group className={classes.userButton}>
          <Flex className={classes.avatar}>
            <Avatar radius={'md'} />
            <Stack className={classes.user}>
              <Title size='h5'>{user.name}</Title>
              <Text size='xs'>{user.email}</Text>
            </Stack>
          </Flex>
          <ThemeIcon className={classes.icon} variant='transparent' size={'md'}>
            <RiArrowRightSLine />
          </ThemeIcon>
        </Group>
      </Menu.Target>

      <Menu.Dropdown className={classes.dropdown}>
        <Menu.Item
          component={Link}
          to={'/settings'}
          prefetch='intent'
          className={classes.menuItem}
          leftSection={<RiSettings3Line style={{ width: '16px', height: '100%' }} />}
        >
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<RiQuestionLine style={{ width: '16px', height: '100%' }} />}>Help</Menu.Item>
        <Menu.Divider />
        <Menu.Item closeMenuOnClick={false} component='div'>
          <Group>
            Dark Mode
            <Switch size='xs' onChange={() => toggleColorScheme()} defaultChecked={colorScheme === 'dark'} />
          </Group>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color='blue'
          leftSection={<RiLogoutBoxLine style={{ width: '16px', height: '100%' }} />}
          component={Link}
          to={'/logout'}
          className={classes.menuItem}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
