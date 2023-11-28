import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button, Paper } from "@mantine/core"

const SortableAccount = (account) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: account.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Paper withBorder>{account.name}</Paper>
    </div>
  )
}

export default SortableAccount
