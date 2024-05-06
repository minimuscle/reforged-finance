import { Outlet, useOutletContext } from '@remix-run/react'
import { User } from '~/utils/types'

function Layout() {
  const user = useOutletContext<User>()
  return (
    <div>
      <h1>Layout</h1>
      <Outlet context={user} />
    </div>
  )
}

export default Layout
