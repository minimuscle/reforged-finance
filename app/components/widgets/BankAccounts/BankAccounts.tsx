import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { useRef } from "react"
import { useModel } from "~/utils/hooks/useModel"
import SingleAccount from "./SingleAccount"

export default function BankAccounts() {
  const { cash } = useModel()

  return (
    <Stack w={"100%"} h={"100%"}>
      <Flex align={"flex-end"} justify="space-between" gap="xl">
        <Title>Bank Accounts</Title>
        <Group>
          <Text fw="700">Total Balance:</Text>
          <Badge mb={"5px"} size="xl" variant="light" radius="sm">
            $1,200,000
          </Badge>
        </Group>
      </Flex>
      <Box pt={10} pr={5} h={"100%"} style={{ overflowY: "auto" }}>
        {cash.map((account) => (
          <SingleAccount key={account.id} account={account} />
        ))}
      </Box>
      <Box>
        <Button size="xs" variant="light" color="gray">
          Add Account
        </Button>
      </Box>
    </Stack>
  )
}
