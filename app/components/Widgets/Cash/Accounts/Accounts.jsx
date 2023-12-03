import {
  DndContext,
  DragOverlay,
  closestCenter,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Input,
  Paper,
  Text,
  Title,
} from "@mantine/core"
import { useFetcher, useLoaderData, useOutletContext } from "@remix-run/react"
import SortableAccount from "./SortableAccount"
import { useEffect, useState } from "react"
import {
  restrictToParentElement,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers"
import { RiCheckFill } from "react-icons/ri/index.js"
import { formatter } from "../../../../util"

const Accounts = ({ isEdit = false }) => {
  const data = useOutletContext()
  console.log("data:", data)
  const cash = data.cash
  const [accounts, setAccounts] = useState(cash)
  const [editing, setEditing] = useState(false)
  const fetcher = useFetcher()

  const totalBalance = cash.reduce((total, account) => {
    return total + account.balance
  }, 0)

  useEffect(() => {
    setAccounts(cash)
    setEditing(false)
  }, [cash])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      const oldIndex = cash.findIndex((item) => item.id === active.id)
      const newIndex = cash.findIndex((item) => item.id === over.id)
      const newAccount = arrayMove(cash, oldIndex, newIndex)
      setAccounts(newAccount)
      newAccount.forEach((account, index) => {
        account.weight = index
      })
      fetcher.submit(
        {
          _action: "updateBankOrder",
          accounts: JSON.stringify(newAccount),
        },
        { method: "POST" }
      )
    }
  }

  return (
    <Paper shadow="xl" p="md" withBorder miw="600px" align="center">
      <Flex align={"flex-end"} justify="space-between" gap="xl">
        <Title>Bank Accounts</Title>
        <Group>
          <Text justify="right" fw="700">
            Total Balance:
          </Text>
          <Badge size="xl" variant="light" radius="sm">
            {formatter.format(totalBalance)}
          </Badge>
        </Group>
      </Flex>
      <Box mt="lg">
        <Grid grow m="0 10px 10px 10px">
          <Grid.Col span={5.5} align="left">
            <Text size="md" fw={700}>
              Account Name
            </Text>
          </Grid.Col>
          <Grid.Col span={4} align="left">
            <Text size="md" ml={-10} fw={700}>
              Account Balance
            </Text>
          </Grid.Col>
          <Grid.Col span={1} align="left">
            <Text size="md" ml={-20} fw={700}>
              Currency
            </Text>
          </Grid.Col>
          <Grid.Col span={0.5}></Grid.Col>
        </Grid>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={cash} strategy={verticalListSortingStrategy}>
            {accounts.map((account) => (
              <SortableAccount
                key={account.id}
                {...account}
                handle
                isEdit={isEdit}
              />
            ))}
          </SortableContext>
        </DndContext>
        {editing ? (
          <Paper className="account" shadow="xs" withBorder p="sm" mb="10px">
            <fetcher.Form method="POST">
              <Grid>
                <Grid.Col span={5.5} align="left">
                  <Input name="bank_name" placeholder="Bank" />
                </Grid.Col>
                <Grid.Col span={3.5} align="left">
                  <Input name="balance" type="number" placeholder="0" />
                </Grid.Col>
                <Grid.Col span={1.5} align="left">
                  <input type="hidden" name="currency" value="AUD" />
                  <Text c="lightGray">AUD</Text>
                </Grid.Col>
                <Grid.Col span={1.5} align={"center"}>
                  <ActionIcon
                    color="green"
                    variant="light"
                    m={"0 -5px"}
                    type="submit"
                    name="_action"
                    value="addBank"
                  >
                    <RiCheckFill className="always" />
                  </ActionIcon>
                </Grid.Col>
              </Grid>
            </fetcher.Form>
          </Paper>
        ) : (
          <Flex>
            <Button
              size="xs"
              color="gray"
              variant="light"
              onClick={() => setEditing(true)}
            >
              New Account
            </Button>
          </Flex>
        )}
      </Box>
    </Paper>
  )
}

export default Accounts
