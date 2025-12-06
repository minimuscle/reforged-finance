import { createFileRoute, Outlet } from '@tanstack/react-router'
import styles from './-components/_guest.module.css'
import { Heading } from 'components/Text/Heading'
import { Text } from 'components/Text'
import { Flex } from 'components/Flex'

export const Route = createFileRoute('/_guest')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Flex align="center" justify="center" direction="column" className={styles.container}>
      <Heading>Reforged Finance</Heading>
      <Heading h2>Personal Wealth Tracker</Heading>
      <Text>Hello</Text>
      <Outlet />
    </Flex>
  )
}
