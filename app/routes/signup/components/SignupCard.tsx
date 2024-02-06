import {
  Alert,
  Button,
  Paper,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core"
import styles from "./SignupCard.module.css"
import { Form, Link, useActionData } from "@remix-run/react"
import { action } from "../route"
import type { password } from "./SignupCardAction"
import MatchItem from "./MatchItem"

export default function SignupCard() {
  const actionData = useActionData<typeof action>()
  const emailError = actionData?.errors?.email
  const confirmPasswordError = actionData?.errors?.confirmPassword
  const passwordError: password | undefined = actionData?.errors?.password

  console.log(passwordError)

  const passwordErrorDisplay = () => {
    if (typeof passwordError === "object" && passwordError !== null) {
      // return an alert for each error, showing red if false, green if true
      return (
        <Alert color="blue" className={styles.alert}>
          Passwords must:
          <MatchItem completed={passwordError.minLength}>
            Be at least 8 characters long
          </MatchItem>
          <MatchItem completed={passwordError.containsUpperCase}>
            Contain at least one uppercase letter
          </MatchItem>
          <MatchItem completed={passwordError.containsLowerCase}>
            Contain at least one lowercase letter
          </MatchItem>
          <MatchItem completed={passwordError.containsNumber}>
            Contain at least one number
          </MatchItem>
          <MatchItem completed={passwordError.containsSpecialCharacter}>
            Contain at least one symbol
          </MatchItem>
        </Alert>
      )
    }
    if (
      typeof confirmPasswordError === "object" &&
      confirmPasswordError !== null
    ) {
      return (
        <Alert color="red" className={styles.alert} title="Error">
          {confirmPasswordError.error}
        </Alert>
      )
    }
  }

  return (
    <Paper w={350} withBorder shadow="xs" p="xl">
      <Title size="h2" className={styles.heading}>
        Sign Up
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
          error={
            typeof passwordError === "string" ? passwordError : !!passwordError
          }
        />
        <Space h="sm" />
        <TextInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          //required
          error={
            typeof confirmPasswordError === "string"
              ? confirmPasswordError
              : !!confirmPasswordError
          }
        />
        <Space h="sm" />
        {passwordErrorDisplay()}
        <Space h="sm" />
        <Button fullWidth type="submit" color="teal">
          Login
        </Button>
        <Text className={styles.signup}>
          Already have an account?{" "}
          <Link className={styles.signup} to="/login">
            Login
          </Link>
        </Text>
      </Form>
    </Paper>
  )
}
