import {
  Button,
  Divider,
  Input,
  Modal,
  PasswordInput,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { Form, useActionData, useNavigate, Link } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { createSupabaseServerClient } from "../util/supabase.server"

export const action = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })
  const body = await request.formData()
  const email = body.get("email")
  const password = body.get("password")
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  if (error) {
    return error
  }

  return redirect("/")
}

function Login() {
  const action = useActionData()
  const navigate = useNavigate()

  return (
    <Modal
      opened={true}
      onClose={() => navigate("/")}
      centered
      overlayProps={{
        backgroundOpacity: 0.75,
        blur: 20,
      }}
      size={"sm"}
      withCloseButton={false}
    >
      <Title align="center">Login - {action?.email}</Title>
      <Space h="xl" />
      <Stack>
        <Form method="POST">
          <Input.Wrapper label="Email" mb="20px">
            <Input type="email" id="email" name="email" placeholder="Email" />
          </Input.Wrapper>
          <Input.Wrapper
            label="Password"
            mb="10px"
            description="UNSAFE - Currently sent as plaintext"
          >
            <PasswordInput
              mt="5px"
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
          </Input.Wrapper>
          <Link to="/forgot-password">
            <Text size="xs" align="right">
              Forgot Password?
            </Text>
          </Link>
          <Button fullWidth type="submit" mt="25px">
            Login
          </Button>
        </Form>
        <Text align="center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Text>
        <Divider my="xs" label="Or" labelPosition="center" />
        <Button fullWidth disabled type="submit" color="indigo">
          Login with Facebook (Coming Soon)
        </Button>
        <Button fullWidth disabled type="submit" color="grey">
          Login with Google (Coming Soon)
        </Button>
      </Stack>
    </Modal>
  )
}

export default Login
