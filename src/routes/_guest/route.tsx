import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Heading } from 'components/Text/Heading'
import styles from './-components/_guest.module.css'

export const Route = createFileRoute('/_guest')({
  component: RouteComponent,
  beforeLoad: async ({ context: { supabase } }) => {
    const { data } = await supabase.auth.getUser()
    if (data.user) throw redirect({ to: '/' })
  },
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
