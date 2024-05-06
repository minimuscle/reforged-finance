import { Container, Divider } from '@mantine/core'
import { Outlet, useOutletContext } from '@remix-run/react'
import { User } from '~/utils/types'
import Header from './Header'
import classes from './_layout.module.css'

function Layout() {
  const user = useOutletContext<User>()
  return (
    <div>
      {/** MOBILE LAYOUT VIEW */}
      <Container className={classes.mobile} hiddenFrom='md'>
        <Header />
        <Divider className={classes.divider} />
        <Outlet context={user} />
      </Container>

      {/** DESKTOP LAYOUT VIEW */}
      <Container visibleFrom='md'>
        <h1>Sidebar</h1>
        <Outlet context={user} />
      </Container>
    </div>
  )
}

export default Layout
