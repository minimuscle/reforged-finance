import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import finance from 'assets/images/_guest/loginBudget.svg'
import logo from 'assets/images/logo.svg'
import { Flex } from 'components/Flex'
import { Padding } from 'components/Padding'
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
    <Flex fullWidth className={styles.container}>
      <Flex align="center" direction="column" justify="center" fullHeight fullWidth className={styles.info}>
        <img src={finance} alt="" />
      </Flex>
      <Flex align="center" direction="column" className={styles.panel}>
        <img src={logo} alt="Logo" width={150} />
        <Heading h1 bold size={36}>
          Reforged Finance
        </Heading>
        <Heading h2 size={24} semiBold color="grey">
          Personal Wealth Tracker
        </Heading>
        <Padding xy={100}>
          <Outlet />
        </Padding>
      </Flex>
    </Flex>
  )
}
