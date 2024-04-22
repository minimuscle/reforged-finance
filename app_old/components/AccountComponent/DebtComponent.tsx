import { Group, Space, Stack, Text } from "@mantine/core"
import EditableText from "../EditableText"
import { formatter } from "~/utils/utils"
import classes from "./Account.module.css"
import { useMemo } from "react"

const DebtComponent = ({
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
    <Group className={classes.maxSpaceDebts} gap={0}>
      <Stack className={classes.leftStack} gap={0}>
        <Text size="xs" c={"gray"} fw={700}>
          Name
        </Text>
        <EditableText value={account.name} id={account.id} fieldName="name" />
        {/* <Text size={"lg"}></Text> */}
        <Text size="sm" c={"gray"}>
          $ - {account.currency}
        </Text>
        <Space h={15} />
        <Text size="xs" c={"gray"} fw={700}>
          Annual Interest
        </Text>
        <EditableText
          value={account.annual_interest}
          id={account.id}
          fieldName="annual_interest"
          //TODO: Add "per annum" to the end of the input and /times a year for the below
        />
        <Space h={15} />
        <Text size="xs" c={"gray"} fw={700}>
          Interest Frequency
        </Text>
        <EditableText
          value={account.interest_frequency}
          id={account.id}
          fieldName="interest_frequency"
        />
      </Stack>
      <Stack className={classes.rightStack} gap={0}>
        <Text size="xs" c={"gray"} fw={700}>
          Current Balance
        </Text>
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
        <Space h={15} />
        <Text size="xs" c={"gray"} fw={700}>
          Starting Balance
        </Text>
        <EditableText
          value={formatter(account.currency, account.start_balance)}
          id={account.id}
          fieldName="start_balance"
          type="currency"
        />
        <Space h={15} />
        <Text size="xs" c={"gray"} fw={700}>
          Regular Payment
        </Text>
        <EditableText
          value={formatter(account.currency, account.regular_payment)}
          id={account.id}
          fieldName="regular_payment"
          type="currency"
        />
      </Stack>
    </Group>
  )
}

export default DebtComponent
