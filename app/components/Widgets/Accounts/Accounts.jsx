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
import { useFetcher, useLoaderData } from "@remix-run/react"
import SortableAccount from "./SortableAccount"
import { useEffect, useState } from "react"
import {
  restrictToParentElement,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers"
import { RiCheckFill } from "react-icons/ri/index.js"

const Accounts = () => {
  const { cash } = useLoaderData()
  const [accounts, setAccounts] = useState(cash)
  const [editing, setEditing] = useState(false)
  const fetcher = useFetcher()

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
        console.log("account: ", account)
      })
      fetcher.submit(
        {
          _action: "updateBankOrder",
          accounts: JSON.stringify(newAccount),
        },
        { method: "POST" }
      )
      console.log("newAccount: ", newAccount)
    }
  }

  return (
    <Paper shadow='xl' p='md' withBorder w='40%' align='center'>
      <Title>Bank Accounts</Title>
      <Box mt='lg'>
        <Grid grow m='0 10px 10px 10px'>
          <Grid.Col span={5.5} align='left'>
            <Text size='sm' fw={700}>
              Account Name
            </Text>
          </Grid.Col>
          <Grid.Col span={3} align='left'>
            <Text size='sm' fw={700}>
              Account Balance
            </Text>
          </Grid.Col>
          <Grid.Col span={2} align='left'>
            <Text size='sm' fw={700}>
              Currency
            </Text>
          </Grid.Col>
          <Grid.Col span={1.5}></Grid.Col>
        </Grid>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={cash} strategy={verticalListSortingStrategy}>
            {accounts.map((account) => (
              <SortableAccount key={account.id} {...account} handle />
            ))}
          </SortableContext>
        </DndContext>
        {editing ? (
          <Paper className='account' shadow='xs' withBorder p='sm' mb='10px'>
            <fetcher.Form method='POST'>
              <Grid>
                <Grid.Col span={5.5} align='left'>
                  <Input name='bank_name' placeholder='Bank' />
                </Grid.Col>
                <Grid.Col span={3} align='left'>
                  <Input name='balance' type='number' placeholder='0' />
                </Grid.Col>
                <Grid.Col span={2} align='left'>
                  <input type='hidden' name='currency' value='AUD' />
                  <Text c='lightGray'>AUD</Text>
                </Grid.Col>
                <Grid.Col span={1.5} align={"center"}>
                  <ActionIcon
                    color='green'
                    variant='light'
                    m={"0 -5px"}
                    type='submit'
                    name='_action'
                    value='addBank'
                  >
                    <RiCheckFill className='always' />
                  </ActionIcon>
                </Grid.Col>
              </Grid>
            </fetcher.Form>
          </Paper>
        ) : (
          <Flex>
            <Button
              size='xs'
              color='gray'
              variant='light'
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
