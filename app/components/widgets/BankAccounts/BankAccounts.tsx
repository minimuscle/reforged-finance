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
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers"

export default function BankAccounts() {
  const { cash, cashTotal }: { cash: CashProps[]; cashTotal: string } =
    useModel()
  const fetcher = useFetcher()

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const oldIndex = cash.findIndex((item) => item.id === active.id)
    const newIndex = cash.findIndex((item) => item.id === over?.id)
    const newAccount = arrayMove(cash, oldIndex, newIndex)
    newAccount.forEach((account, index) => {
      account.weight = index
    })
    fetcher.submit(
      {
        intent: "updateBankOrder",
        data: JSON.stringify(newAccount),
      },
      { method: "POST" }
    )
  }

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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={cash} strategy={verticalListSortingStrategy}>
            {cash.map((account: CashProps) => (
              <SingleAccount key={account.id} account={account} />
            ))}
          </SortableContext>
        </DndContext>
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
