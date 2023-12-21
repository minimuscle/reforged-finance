import { Button, Modal, Stack, Text, Title } from "@mantine/core"
import { useLoaderData, useNavigate } from "@remix-run/react"

const SetupModal = ({ opened, close }) => {
  const { user } = useLoaderData()
  const navigate = useNavigate()
  return (
    <Modal
      opened={opened}
      onClose={user ? close : () => {}}
      withCloseButton={false}
      centered
    >
      <Modal.Body>
        <Stack justify="center">
          <Title align="center">Setup Account</Title>
          <Text align="center">
            You need to setup your account first to be able to use this program.
            Click the button below to begin.
          </Text>
          <Button onClick={() => navigate("/setup")}>Begin Setup</Button>
        </Stack>
      </Modal.Body>
    </Modal>
  )
}

export default SetupModal
