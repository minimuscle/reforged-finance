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
import "./LoadDatabaseModal.css"
import { useContext } from "react"
import { DatabaseContext } from "../../contexts/DatabaseContext"

function LoadDatabaseModal({ close, login }) {
  const database = useContext(DatabaseContext)
  return (
    <Modal
      opened={!database}
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
            //This is temp and should be removed
            login()
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

export default LoadDatabaseModal
