import { Group, Stack, Text } from "@mantine/core"
import { useMemo } from "react"
import useCash from "~/utils/hooks/useCash"
import { formatter } from "~/utils/utils"
import styles from "../cash.module.css"
import EditableText from "~/components/EditableText"

const BankAccounts = () => {
  const { cash, cashTotal } = useCash()
  console.log(cashTotal)
  const cashPercentage = useMemo(() => {
    return cash.map((account) => {
      return ((account.balance / cashTotal) * 100).toFixed(2) + "%"
    })
  }, [cash, cashTotal])

  console.log(cash)
  return (
    <>
      {cash.map((account, key) => {
        return (
          <Group
            style={{ borderLeft: `solid ${account.colour} 5px` }}
            className={styles.accountContainer}
            key={key}
            gap={0}
          >
            <Stack className={styles.leftStack} gap={0}>
              <EditableText
                value={account.name}
                id={account.id}
                fieldName="name"
              />
              {/* <Text size={"lg"}></Text> */}
              <Text size="sm" c={"gray"}>
                $ - {account.currency}
              </Text>
            </Stack>
            <Stack className={styles.rightStack} gap={0}>
              <EditableText
                value={formatter(account.currency, account.balance)}
                id={account.id}
                fieldName="balance"
                inputClassName={styles.balanceInput}
                type="currency"
              />
              <Text fw={700} size="md"></Text>
              <Text size="sm" c={"gray"}>
                {cashPercentage[key]}
              </Text>
            </Stack>
          </Group>
        )
      })}
    </>
  )
}

export default BankAccounts
