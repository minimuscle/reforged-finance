import { createFileRoute, Link } from '@tanstack/react-router'
import { Text } from 'components/Text'

export const Route = createFileRoute('/_guest/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_guest/login"!
      <Link to="/">Click here</Link>
      <Text h1>f</Text>
    </div>
  )
}
