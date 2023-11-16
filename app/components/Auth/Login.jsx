import {
  Button,
  Flex,
  Group,
  Modal,
  Space,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core"
import { PiCrownFill } from "react-icons/pi/index.js"
import { useContext, useState } from "react"
import { DatabaseContext } from "../../contexts/DatabaseContext"

function Login({ opened, close }) {
  const database = useContext(DatabaseContext)
  const [type, setType] = useState("main")
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      overlayProps={{
        backgroundOpacity: 0.75,
        blur: 20,
      }}
      size={"lg"}
      withCloseButton={false}
    >
      <Title align="center" order={4}>
        Login!
      </Title>
      <Text align="center">
        Connect to your database below in order to use this program
      </Text>
      <Space h="xl" />
      <Stack>
        <Button
          fullWidth
          onClick={() => {
            setType("login")
          }}
        >
          Login to Connect Database
        </Button>
        <Button color="yellow" fullWidth>
          No Database Yet? Create One
        </Button>
      </Stack>
    </Modal>
  )
}

export default Login
