import { Badge, Box, Button, Group, Text, Title } from "@mantine/core"
import BankAccounts from "./BankAccounts"
import classes from "./Sidebar.module.css"
import { useFetcher } from "@remix-run/react"
import { FaPlus } from "react-icons/fa/index.js"
import useCash from "~/utils/hooks/useCash"
import { formatter } from "~/utils/utils"

//TODO: Have it slide out on load
const Sidebar = () => {
  const fetcher = useFetcher()
  const { cashTotal } = useCash()

  return (
    <Box className={`${classes.sidebar} ${false && classes.collapsed}`}>
      <Title className={classes.header} size={"h2"}>
        Bank Accounts
      </Title>
      <Group gap={0} className={classes.badge}>
        <Text fw={700}>Total Balance:</Text>
        <Badge size="xl" variant="light" radius="sm">
          <Text fw={700}>{formatter("AUD", cashTotal)}</Text>
        </Badge>
      </Group>
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
    </Box>
  )
}

export default Sidebar
