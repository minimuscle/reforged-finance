import { createFileRoute, Link } from '@tanstack/react-router'
import { Flex } from 'components/Flex'
import { Padding } from 'components/Padding'
import { Text } from 'components/Text'
import { SignupForm } from 'routes/_guest/-components/signupForm'
import styles from './-components/login.module.css'

export const Route = createFileRoute('/_guest/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.container}>
      <Flex gap="sm" direction="column" fullWidth>
        <SignupForm />
        <Padding top={10}>
          <Text color="grey" size="xs">
            Already have an account? <Link to="/login">Log in</Link>
          </Text>
        </Padding>
      </Flex>
    </div>
  )
}
