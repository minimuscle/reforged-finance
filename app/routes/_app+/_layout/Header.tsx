import { ActionIcon, Title } from '@mantine/core'
import classes from './_layout.module.css'
import { MdMenu } from 'react-icons/md'
import { BiListOl } from 'react-icons/bi'
import { BsList, BsPlus } from 'react-icons/bs'

export default function Header() {
  return (
    <div className={classes.header}>
      <ActionIcon size={'lg'} variant='transparent' color='gray' aria-label='Settings'>
        <BsList style={{ width: 24, height: 24 }} />
      </ActionIcon>
      <Title>Reforged Finance</Title>
      <ActionIcon size={'lg'} variant='light' color='gray' aria-label='Settings'>
        <BsPlus style={{ width: 24, height: 24 }} />
      </ActionIcon>
    </div>
  )
}
