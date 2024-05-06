import { useLoaderData } from '@remix-run/react'

export function loader() {
  return 'Hello from loader!'
}

export default function Loader() {
  const loader = useLoaderData<string>()
  return (
    <div>
      <h1>About</h1>
      <p>{loader}</p>
    </div>
  )
}
