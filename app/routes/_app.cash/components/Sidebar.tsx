import { Button, Title } from "@mantine/core"
import BankAccounts from "./BankAccounts"
import styles from "../cash.module.css"
import { useFetcher } from "@remix-run/react"
import { FaPlus } from "react-icons/fa/index.js"

const Sidebar = () => {
  const fetcher = useFetcher()
  return (
    <>
      <Title className={styles.header} size={"h2"}>
        Bank Accounts
      </Title>
      <BankAccounts />
      <fetcher.Form method="POST">
        <Button
          type="submit"
          name="intent"
          value="createCash"
          size="xs"
          variant="subtle"
          color="gray"
          leftSection={<FaPlus />}
        >
          Add Account
        </Button>
      </fetcher.Form>
    </>
  )
}

export default Sidebar
