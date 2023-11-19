import {
  Button,
  Center,
  Container,
  Flex,
  Modal,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { Form, useLoaderData, useNavigate } from "@remix-run/react"

const Setup = () => {
  const navigate = useNavigate()
  return (
    <Modal opened withCloseButton={false} fullScreen centered>
      <Container>
        <Center h="90dvh">
          <Stack justify="center">
            <Title align="center">Setup Account</Title>
            <Text align="center">
              The next few steps will guide you through setting up an account
              with us for the first time. <br />
              Please make sure to not leave this page until its done, as
              anything entered won't be saved until you finish
            </Text>
            <Form action="/" method="post">
              <Stack direction="horizontal" justify="center">
                <Button
                  onClick={() => navigate("/setup/step1")}
                  type="submit"
                  variant="outline"
                  color="blue"
                >
                  Begin Setup
                </Button>
              </Stack>
            </Form>
          </Stack>
        </Center>
      </Container>
    </Modal>
  )
}

export default Setup
