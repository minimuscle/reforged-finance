import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { GlobalHeader } from 'routes/_app/-components/header'
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
      <Outlet />
    </div>
  )
}
