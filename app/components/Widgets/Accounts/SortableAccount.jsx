import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Input,
  Menu,
  Paper,
  Popover,
  Text,
} from "@mantine/core"
import {
  RiCheckFill,
  RiDeleteBinFill,
  RiDraggable,
  RiDropFill,
  RiEditFill,
  RiMoreFill,
} from "react-icons/ri/index.js"
import "./Accounts.css"
import { moneyFormatter } from "../../../util/formatter"
import { useEffect, useState } from "react"
import { useFetcher } from "@remix-run/react"

const SortableAccount = (account) => {
  const [editing, setEditing] = useState(false)
  const fetcher = useFetcher()
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: account.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  useEffect(() => {
    setEditing(false)
  }, [fetcher.state])

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      styles={
        account.colour && {
          root: {
            borderLeft: `5px solid ${account.colour}`,
          },
        }
      }
      className='account'
      shadow='xs'
      withBorder
      p='sm'
      mb='10px'
    >
      <fetcher.Form method='POST'>
        <Grid>
          <Grid.Col span={5.5} align='left'>
            <Group>
              <ActionIcon
                {...attributes}
                {...listeners}
                color='gray'
                variant='transparent'
                m={"0 -5px"}
                onClick={() => setEditing(false)}
              >
                <RiDraggable />
              </ActionIcon>
              {editing ? (
                <Input name='name' defaultValue={account.name} />
              ) : (
                <Text>{account.name}</Text>
              )}
            </Group>
          </Grid.Col>
          <Grid.Col span={3} align='left'>
            {editing ? (
              <Input name='balance' defaultValue={account.balance} />
            ) : (
              <Text>{moneyFormatter.format(account.balance)}</Text>
            )}
          </Grid.Col>
          <Grid.Col span={2} align='left'>
            <input type='hidden' name='currency' value='AUD' />
            <input type='hidden' name='id' value={account.id} />
            <Text c='lightGray'>{account.currency}</Text>
          </Grid.Col>
          <Grid.Col span={1.5} align={editing ? "center" : "right"}>
            {editing ? (
              <ActionIcon
                color='green'
                variant='light'
                m={"0 -5px"}
                type='submit'
                name='_action'
                value='updateBank'
              >
                <RiCheckFill className='always' />
              </ActionIcon>
            ) : (
              <Menu position='top' shadow='md' withArrow>
                <Menu.Target>
                  <ActionIcon color='black' variant='transparent' m={"0 -5px"}>
                    <RiMoreFill />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => setEditing(true)}
                    leftSection={<RiEditFill />}
                  >
                    Edit
                  </Menu.Item>
                  <Menu.Item leftSection={<RiDropFill />}>Colour</Menu.Item>
                  <Menu.Item color='red' leftSection={<RiDeleteBinFill />}>
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
          </Grid.Col>
        </Grid>
      </fetcher.Form>
    </Paper>
  )
}

export default SortableAccount
