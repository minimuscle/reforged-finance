import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { db } from '~/utils/db.server'
import { isSessionValid } from '~/utils/session.server'
import { User } from '~/utils/types'

export const meta: MetaFunction = () => {
  return [{ title: 'Reforged Finance' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { decodedClaims } = await isSessionValid(request)
  return await (await db.collection('users').doc(decodedClaims.uid).get()).data()
}

export default function Index() {
  const user = useLoaderData() as User
  return (
    <div>
      New Reforged Finance Version 0.4.0
      <br />
      <p>{user.test}</p>
    </div>
  )
}
