import { Button, Modal, Space, Stack, Text, Title } from "@mantine/core"
import { useNavigate } from "@remix-run/react"
function LoadDatabaseModal({ opened, toggle, login }) {
  const navigate = useNavigate()

  return (
    <>
      <Modal
        opened={opened}
        onClose={toggle}
        centered
        overlayProps={{
          backgroundOpacity: 0.75,
          blur: 20,
        }}
        size={"lg"}
        withCloseButton={false}
      >
        <Title align="center" order={4}>
          Connect to Your Database
        </Title>
        <Text align="center">
          Connect to your database below in order to use this program
        </Text>
        <Space h="xl" />
        <Stack>
          <Button
            fullWidth
            onClick={() => {
              navigate("/login")
            }}
          >
            Login to Connect Database
          </Button>
          <Button color="yellow" fullWidth>
            No Database Yet? Create One
          </Button>
        </Stack>
      </Modal>
    </>
  )
}

export default LoadDatabaseModal
