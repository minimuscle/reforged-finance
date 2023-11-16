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
import { Form } from "@remix-run/react"
import { Link } from "react-router-dom"

function Login({ opened, close, signup }) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      overlayProps={{
        backgroundOpacity: 0.75,
        blur: 20,
      }}
      size={"sm"}
      withCloseButton={false}
    >
      <Title align="center">Login</Title>
      <Space h="xl" />
      <Stack>
        <Form method="POST" action="/login">
          <Input.Wrapper label="Email" mb="20px">
            <Input type="email" placeholder="Email" />
          </Input.Wrapper>
          <Input.Wrapper
            label="Password"
            mb="10px"
            description="UNSAFE - Currently sent as plaintext"
          >
            <PasswordInput mt="5px" type="password" placeholder="Password" />
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
          Don't have an account? <Link onClick={() => signup()}>Sign Up</Link>
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
