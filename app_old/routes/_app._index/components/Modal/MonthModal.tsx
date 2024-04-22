import { Modal } from "@mantine/core"

const MonthModal = ({
  opened,
  close,
}: {
  opened: boolean
  close: () => void
}) => {
  return (
    <Modal title="Modal title" opened={opened} onClose={close}>
      Test
    </Modal>
  )
}

export default MonthModal
