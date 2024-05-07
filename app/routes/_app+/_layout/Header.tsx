import { ActionIcon, Divider, Drawer, Group, Stack, Title } from '@mantine/core'
import classes from './_layout.module.css'
import { BsList, BsPersonFill, BsPlus } from 'react-icons/bs'
import { useDisclosure } from '@mantine/hooks'
import { Link, NavLink } from '@remix-run/react'

export default function Header() {
  const [opened, { open, close }] = useDisclosure()

  return (
    <div className={classes.header}>
      <Drawer opened={opened} onClose={close} title='Reforged Finance'>
        <Stack>
          <NavLink onClick={close} prefetch='viewport' to='/'>
            Dashboard
          </NavLink>
          <NavLink onClick={close} prefetch='viewport' to='/cash'>
            Cash
          </NavLink>
          <NavLink onClick={close} prefetch='viewport' to='/budget'>
            Budget
          </NavLink>
          <NavLink onClick={close} prefetch='viewport' to='/debts'>
            Liabilities / Debts
          </NavLink>
          <NavLink onClick={close} prefetch='viewport' to='/super'>
            Super
          </NavLink>
          <NavLink onClick={close} prefetch='viewport' to='/side-income'>
            Side-Income
          </NavLink>
          <NavLink onClick={close} prefetch='viewport' to='/history'>
            History
          </NavLink>
          <Divider />
          <NavLink onClick={close} prefetch='viewport' to='/settings'>
            Settings
          </NavLink>
        </Stack>
      </Drawer>
      <ActionIcon onClick={open} size={'xl'} variant='transparent' color='gray' aria-label='Settings'>
        <BsList style={{ width: 28, height: 28 }} />
      </ActionIcon>
      <Link to='/'>
        <Title size={24}>Reforged Finance</Title>
      </Link>
      <Group>
        <ActionIcon size={'lg'} variant='light' radius='8px' color='gray' aria-label='Settings'>
          <BsPlus style={{ width: 28, height: 28 }} />
        </ActionIcon>
        <Divider orientation='vertical' />
        <ActionIcon size={'lg'} variant='outline' radius='100px' color='blue' aria-label='Settings'>
          <BsPersonFill style={{ width: 24, height: 24 }} />
        </ActionIcon>
      </Group>
    </div>
  )
}
