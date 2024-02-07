import { Group, Stack, Text } from "@mantine/core"
import EditableText from "../EditableText"
import { formatter } from "~/utils/utils"
import classes from "./Account.module.css"
import { useMemo } from "react"

const IncomeComponent = ({
  totalBalance,
  account,
}: {
  totalBalance: number
  account: any
}) => {
  const percentage = useMemo(() => {
    return ((account.balance / totalBalance) * 100).toFixed(2) + "%"
  }, [account, totalBalance])

  return (
    <Group className={classes.maxSpace} gap={0}>
      <Stack className={classes.leftStack} gap={0}>
        <EditableText value={account.name} id={account.id} fieldName="name" />
        {/* <Text size={"lg"}></Text> */}
        <Text size="sm" c={"gray"}>
          $ - {account.currency}
        </Text>
      </Stack>
      <Stack className={classes.rightStack} gap={0}>
        <EditableText
          value={formatter(account.currency, account.balance)}
          id={account.id}
          fieldName="balance"
          inputClassName={classes.balanceInput}
          type="currency"
        />
        <Text fw={700} size="md"></Text>
        <Text size="sm" c={"gray"}>
          {percentage}
        </Text>
      </Stack>
    </Group>
  )
}

export default IncomeComponent
