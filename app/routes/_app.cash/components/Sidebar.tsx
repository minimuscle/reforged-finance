import { Title } from "@mantine/core"
import BankAccounts from "./BankAccounts"
import styles from "../cash.module.css"

const Sidebar = () => {
  return (
    <>
      <Title className={styles.header} size={"h2"}>
        Bank Accounts
      </Title>
      <BankAccounts />
    </>
  )
}

export default Sidebar
