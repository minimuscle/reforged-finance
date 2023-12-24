import {
  Box,
  Button,
  Input,
  Paper,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core"
import styles from "./LoginCard.module.css"
import { Link, useActionData } from "@remix-run/react"

export default function LoginCard() {
  const data = useActionData<T>()
  console.log(data)
  const emailError = data?.errors?.email
  const passwordError = data?.errors?.password

  return (
    <Paper w={300} withBorder shadow="xs" p="xl">
      <Title size="h2" className={styles.heading}>
        Login
      </Title>
      <Space h="lg" />
      <form method="post">
        <TextInput
          name="email"
          type="email"
          placeholder="Email"
          error={emailError}
        />
        <Space h="sm" />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          error={passwordError}
        />
        <Space h="sm" />
        <Box className={"forgot"}>
          <Link to="/forgot-password">Forgot password?</Link>
        </Box>

        <Space h="sm" />
        <Button fullWidth type="submit">
          Login
        </Button>
        <Text className={styles.signup}>
          Don&apos;t have an account?{" "}
          <Link className={styles.signup} to="/signup">
            Signup
          </Link>
        </Text>
      </form>
    </Paper>
  )
}
