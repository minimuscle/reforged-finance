import { Flex, Paper, Stack, Text, Title } from "@mantine/core"
import EditableText from "~/components/EditableText"
import { CashProps } from "~/utils/types"
import { formatter } from "~/utils/utils"
import styles from "./BankAccounts.module.css"

export default function SingleAccount({ account }: { account: CashProps }) {
  return (
    <Paper
      mb={10}
      withBorder
      shadow="xs"
      style={{
        borderLeft: `solid ${account.colour} 5px`,
        backgroundColor: `color-mix(in srgb, ${account.colour} 10%, white)`,
      }}
      p={"sm"}
    >
      <div className={styles.grid}>
        <Stack gap={0}>
          <Title
            className={styles.title}
            mb={-5}
            size={"x-small"}
            order={6}
            c={"gray"}
          >
            Account Name
          </Title>
          <EditableText value={account.name} id={account.id} fieldName="name" />
        </Stack>
        <Stack gap={0}>
          <Title mb={-5} size={"x-small"} order={6} c={"gray"}>
            Balance
          </Title>
          <EditableText
            value={account.balance}
            id={account.id}
            formatter={formatter}
            type="currency"
            fieldName="balance"
          />
        </Stack>

        <Stack gap={0}>
          <Title mb={-5} size={"x-small"} order={6} c={"gray"}>
            Currency
          </Title>
          <Text m={0}>{account.currency}</Text>
        </Stack>
      </div>
    </Paper>
  )
}
