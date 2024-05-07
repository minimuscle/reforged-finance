import { LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { db } from '~/utils/db.server'
import { isSessionValid } from '~/utils/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const { decodedClaims } = await isSessionValid(request)
  if (!decodedClaims) {
    return null
  }
  const historyQuery = await db.collection('users').doc(decodedClaims.uid).collection('history').get()
  const history = historyQuery.docs.map((doc) => doc.data())
  return history
}

export default function History() {
  const history = useLoaderData()
  return (
    <div>
      <h1>History</h1>
      <ul>
        {history.map((item) => (
          <li key={item.id}>{item.test}</li>
        ))}
      </ul>
    </div>
  )
}
