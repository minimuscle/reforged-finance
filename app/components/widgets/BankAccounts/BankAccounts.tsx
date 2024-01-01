import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { useModel } from "~/utils/hooks/useModel"
import SingleAccount from "./SingleAccount"
import { useFetcher } from "@remix-run/react"
import { CashProps } from "~/utils/types"

export default function BankAccounts() {
  const { cash, cashTotal } = useModel()
  const fetcher = useFetcher()

  return (
    <Stack w={"100%"} h={"100%"}>
      <Flex align={"flex-end"} justify="space-between" gap="xl">
        <Title>Bank Accounts</Title>
        <Group>
          <Text fw="700">Total Balance:</Text>
          <Badge mb={"5px"} size="xl" variant="light" radius="sm">
            {cashTotal}
          </Badge>
        </Group>
      </Flex>
      <Box pt={10} pr={5} h={"100%"} style={{ overflowY: "auto" }}>
        {cash.map((account: CashProps) => (
          <SingleAccount key={account.id} account={account} />
        ))}
      </Box>
      <Box>
        <fetcher.Form method="POST">
          <Button
            type="submit"
            name="intent"
            value="addBankAccount"
            size="xs"
            variant="light"
            color="gray"
          >
            Add Account
          </Button>
        </fetcher.Form>
      </Box>
    </Stack>
  )
}
