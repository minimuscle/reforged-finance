import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Padding } from 'components/Padding'
import { GlobalHeader } from 'routes/_app/-components/header'
import { PremiumBanner } from 'routes/_app/-components/premiumBanner'
import styles from './-components/app.module.css'

/******************************************************
 *   ROUTE START
 ******************************************************/
export const Route = createFileRoute('/_app')({
  component: RouteComponent,
  beforeLoad: async ({ context: { supabase } }) => {
    const { data } = await supabase.auth.getUser()
    if (!data.user) throw redirect({ to: '/login' })
  },
})

/******************************************************
 *   ROUTE COMPONENT START
 ******************************************************/
function RouteComponent() {
  /***** RENDER *****/
  return (
    <div className={styles.container}>
      <GlobalHeader />
      <PremiumBanner />
      <Padding top={20} className={styles.content}>
        <Outlet />
      </Padding>
    </div>
  )
}
