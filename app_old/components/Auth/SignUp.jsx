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

function SignUp({ opened, close, login }) {
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
      <Title align="center">Sign Up</Title>
      <Space h="xl" />
      <Stack>
        <Form method="POST" action="/login">
          <Input.Wrapper label="Email" mb="20px">
            <Input type="email" placeholder="Email" />
          </Input.Wrapper>
          <Input.Wrapper label="Create Password" mb="20px">
            <PasswordInput type="password" placeholder="Create Password" />
          </Input.Wrapper>
          <Input.Wrapper label="Confirm Password" mb="10px">
            <PasswordInput type="password" placeholder="Confirm Password" />
          </Input.Wrapper>
          <Button fullWidth type="submit" mt="25px">
            Sign Up
          </Button>
        </Form>
        <Text align="center">
          Already have an account? <Link onClick={() => login()}>Login</Link>
        </Text>
        <Divider my="xs" label="Or" labelPosition="center" />
        <Button fullWidth disabled type="submit" color="indigo">
          Sign up with Facebook (Coming Soon)
        </Button>
        <Button fullWidth disabled type="submit" color="grey">
          Sign Up with Google (Coming Soon)
        </Button>
      </Stack>
    </Modal>
  )
}

export default SignUp
