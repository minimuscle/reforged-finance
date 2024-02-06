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
import SortableItem from "./SortableItem"
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
import useCash from "~/utils/hooks/useCash"
import { useMemo, useState } from "react"

type Props = {
  array: any[] //TODO: This should be cash or debt or something else
}

export default function Sortable({ array }: Props) {
  const [currentArray, setCurrentArray] = useState(array)

  const { cash }: { cash; cashTotal: string } = useCash()

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const oldIndex = array.findIndex((item) => item.id === active.id)
    const newIndex = array.findIndex((item) => item.id === over?.id)
    const newArray = arrayMove(cash, oldIndex, newIndex)
    newArray.forEach((item: any, index) => {
      item.weight = index
    })
    setCurrentArray(newArray)
  }

  return (
    <Box pt={10} pr={5} h={"100%"} style={{ overflowY: "auto" }}>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      >
        <SortableContext items={cash} strategy={verticalListSortingStrategy}>
          {array.map((item, index) => (
            <SortableItem key={index} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </Box>
  )
}
