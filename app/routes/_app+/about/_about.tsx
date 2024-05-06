import { Title } from '@mantine/core'
import { useLoaderData } from '@remix-run/react'

export function loader() {
  return 'Hello from loader!'
}

export default function Loader() {
  const loader = useLoaderData<string>()
  return (
    <div>
      <Title>About</Title>
      <p>{loader}</p>
    </div>
  )
}
