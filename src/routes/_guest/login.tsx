import { createFileRoute, Link } from '@tanstack/react-router'
import { Flex } from 'components/Flex'
import { Padding } from 'components/Padding'
import { Text } from 'components/Text'
import { LoginForm } from 'routes/_guest/-components/loginForm'
import styles from './-components/login.module.css'

export const Route = createFileRoute('/_guest/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.container}>
      <Flex gap="sm" direction="column" fullWidth>
        <LoginForm />
        <Padding top={10}>
          <Text color="grey" size="xs">
            Don't have an account? <Link to="/signup">Sign up for FREE</Link>
          </Text>
        </Padding>
        {/* <Padding y={50}>
          <hr />
          OR
        </Padding>
        <Button color="slate-50">google</Button>
        <Button color="slate-50">Microsoft</Button> */}
      </Flex>
    </div>
  )
}
