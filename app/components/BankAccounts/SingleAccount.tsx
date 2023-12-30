import { Flex, Paper, Stack, Text, Title } from "@mantine/core"
import { CashProps } from "~/utils/types"
import { formatter } from "~/utils/utils"

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
      <Flex justify={"space-between"} gap={20} p={"0 100px 0 50px"}>
        <Stack gap={0}>
          <Title mb={-5} size={"x-small"} order={6} c={"gray"}>
            Account Name
          </Title>
          <Text m={0}>{account.name}</Text>
        </Stack>
        <Stack gap={0}>
          <Title mb={-5} size={"x-small"} order={6} c={"gray"}>
            Balance
          </Title>
          <Text m={0}>{formatter("AUD", account.balance)}</Text>
        </Stack>

        <Stack gap={0}>
          <Title mb={-5} size={"x-small"} order={6} c={"gray"}>
            Currency
          </Title>
          <Text m={0}>{account.currency}</Text>
        </Stack>
      </Flex>
    </Paper>
  )
}
