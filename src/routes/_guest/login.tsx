import { createFileRoute, Link } from '@tanstack/react-router'
import { Card } from 'components/Card'
import { Text } from 'components/Text'
import { Heading } from 'components/Text/Heading'
import { LoginForm } from 'routes/_guest/-components/loginForm'

export const Route = createFileRoute('/_guest/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Card>
      <Heading bold>Sign in to your account</Heading>
      <LoginForm />
      <Text color="grey">
        Don't have an account? <Link to="/signup">Sign up for FREE</Link>
      </Text>
    </Card>
  )
}
