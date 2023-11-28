import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { Button, Paper, Title } from "@mantine/core"
import { useFetcher, useLoaderData } from "@remix-run/react"
import SortableAccount from "./SortableAccount"
import { useState } from "react"

const Accounts = () => {
  const { cash } = useLoaderData()
  const [accounts, setAccounts] = useState(cash)
  const fetcher = useFetcher()

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      const activeAccount = cash.find((item) => item.id === active.id)
      const overAccount = cash.find((item) => item.id === over.id)
      if (activeAccount.weight <= overAccount.weight) {
        activeAccount.weight = overAccount.weight + 1
      } else {
        activeAccount.weight = overAccount.weight - 1
      }
      //Update the database via action here
      fetcher.submit(
        {
          _action: "updateBank",
          id: activeAccount.id,
          weight: activeAccount.weight,
        },
        { method: "POST" }
      )

      const oldIndex = cash.findIndex((item) => item.id === active.id)
      const newIndex = cash.findIndex((item) => item.id === over.id)
      const newAccount = arrayMove(cash, oldIndex, newIndex)
      setAccounts(newAccount)
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Paper shadow="xl" p="md" withBorder w="50%" align="center">
        <Title>Bank Accounts</Title>
        <SortableContext items={cash} strategy={verticalListSortingStrategy}>
          {accounts.map((account) => (
            <SortableAccount key={account.id} {...account} />
          ))}
        </SortableContext>
      </Paper>
    </DndContext>
  )
}

export default Accounts
