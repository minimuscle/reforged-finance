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
import { useContext, useState } from "react"
import { DatabaseContext } from "../../contexts/DatabaseContext"
import Main from "../Auth/Main"

const getData = (type) => {
  switch (type) {
    case "login":
    case "signup":

    case "main":
    default:
      return <Main />
  }
}

function LoadDatabaseModal({ close, login }) {
  const database = useContext(DatabaseContext)
  const [type, setType] = useState("main")
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
      {getData(type)}
    </Modal>
  )
}

export default LoadDatabaseModal
