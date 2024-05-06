import type { MetaFunction } from '@remix-run/node'
import { Link, useLoaderData, useOutletContext } from '@remix-run/react'
import { User } from '~/utils/types'

export const meta: MetaFunction = () => {
  return [{ title: 'Reforged Finance' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  const user = useOutletContext<User>()
  const data = useLoaderData() as string
  return (
    <div>
      New Reforged Finance Version 0.4.0
      <br />
      <p>{user.name}</p>
      <p>{data}</p>
      <Link to='/logout'>Log Out</Link>
    </div>
  )
}
