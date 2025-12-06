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
      <Text bold color="default">
        Default
      </Text>
      <Text bold color="grey">
        Grey
      </Text>
      <Text bold color="error">
        Error
      </Text>
      <Text bold color="warning">
        Warning
      </Text>
      <Text bold color="success">
        Success
      </Text>
      <Text bold color="info">
        Info
      </Text>
      <Text bold color="var(--purple-600)">
        Custom Color
      </Text>
    </div>
  )
}
