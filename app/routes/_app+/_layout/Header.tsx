import { ActionIcon, Drawer, Title } from '@mantine/core'
import classes from './_layout.module.css'
import { MdMenu } from 'react-icons/md'
import { BiListOl } from 'react-icons/bi'
import { BsList, BsPlus } from 'react-icons/bs'
import { useDisclosure } from '@mantine/hooks'
import { Link, NavLink } from '@remix-run/react'

export default function Header() {
  const [opened, { open, close }] = useDisclosure()

  return (
    <div className={classes.header}>
      <Drawer opened={opened} onClose={close} title='Reforged Finance'>
        <NavLink onClick={close} prefetch='viewport' to='/about'>
          About
        </NavLink>
      </Drawer>
      <ActionIcon onClick={open} size={'xl'} variant='transparent' color='gray' aria-label='Settings'>
        <BsList style={{ width: 28, height: 28 }} />
      </ActionIcon>
      <Link to='/'>
        <Title size={24}>Reforged Finance</Title>
      </Link>
      <ActionIcon size={'xl'} variant='light' color='gray' aria-label='Settings'>
        <BsPlus style={{ width: 28, height: 28 }} />
      </ActionIcon>
    </div>
  )
}
