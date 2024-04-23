import type { MetaFunction } from '@remix-run/node'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/utils/db.server'

export const meta: MetaFunction = () => {
  return [{ title: 'Reforged Finance' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export async function loader() {
  const docRef = await getDocs(collection(db, 'users'))
  return null
}

export default function Index() {
  return <div>New Reforged Finance Version 0.4.0</div>
}
