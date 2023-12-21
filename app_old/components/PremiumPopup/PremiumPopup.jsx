import {
  Button,
  Flex,
  Group,
  Modal,
  Space,
  Text,
  Title,
  Tooltip,
} from "@mantine/core"
import { PiCrownFill } from "react-icons/pi/index.js"
import "./PremiumPopup.css"

function PremiumPopup({ opened, close }) {
  return (
    <Modal.Root
      opened={opened}
      onClose={close}
      centered
      overlayProps={{
        backgroundOpacity: 0.75,
        blur: 3,
      }}
      size={"lg"}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>
            <Group>
              <PiCrownFill color="orange" size="1.25em" />
              <Text size="sm">Upgrade to use this feature</Text>
            </Group>
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Title order={4}>Premium Feature</Title>
          <Text>
            This feature is only available to premium members. Please upgrade to
            access this feature.
          </Text>
          <Space h="xl" />
          <Tooltip withArrow label="Premium Coming Soon">
            <Button fullWidth disabled color="violet">
              Buy Premium
            </Button>
          </Tooltip>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default PremiumPopup
