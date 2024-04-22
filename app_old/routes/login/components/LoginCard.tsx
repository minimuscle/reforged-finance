import {
  Box,
  Button,
  Paper,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core"
import styles from "./LoginCard.module.css"
import { Form, Link, useActionData } from "@remix-run/react"
import { action } from "../route"

export default function LoginCard() {
  const actionData = useActionData<typeof action>()
  const emailError = actionData?.errors?.email
  const passwordError = actionData?.errors?.password

  return (
    <Paper w={300} withBorder shadow="xs" p="xl">
      <Title size="h2" className={styles.heading}>
        Login
      </Title>
      <Space h="lg" />
      <Form method="post">
        <TextInput
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          name="email"
          //type="email"
          placeholder="Email"
          //required
          error={emailError}
        />
        <Space h="sm" />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          //required
          error={passwordError}
        />
        <Space h="sm" />
        <Box className={"forgot"}>
          <Link to="/forgot-password">Forgot password?</Link>
        </Box>

        <Space h="sm" />
        <Button fullWidth type="submit" color="teal">
          Login
        </Button>
        <Text className={styles.signup}>
          Don&apos;t have an account?{" "}
          <Link className={styles.signup} to="/signup">
            Signup
          </Link>
        </Text>
      </Form>
    </Paper>
  )
}
