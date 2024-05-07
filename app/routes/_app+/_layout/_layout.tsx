import { Box, Container, Divider } from '@mantine/core'
import { Outlet, useOutletContext } from '@remix-run/react'
import { User } from '~/utils/types'
import Header from './Header'
import classes from './_layout.module.css'

function Layout() {
  const user = useOutletContext<User>()
  return (
    <Container>
      {/** MOBILE LAYOUT VIEW */}
      <Box hiddenFrom='md'>
        <Header />
        <Divider className={classes.divider} />
      </Box>

      {/** DESKTOP LAYOUT VIEW */}
      <Box visibleFrom='md'></Box>

      {/** CONTENT SECTION */}
      <Box className={classes.content}>
        <Outlet context={user} />
      </Box>
    </Container>
  )
}

export default Layout
