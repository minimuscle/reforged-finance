import { ColorSwatches } from "../../../ColorSwatches/ColorSwatches"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  ActionIcon,
  Box,
  Button,
  ColorSwatch,
  Flex,
  Grid,
  Group,
  Input,
  Loader,
  Menu,
  NavLink,
  Paper,
  Popover,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core"
import {
  RiArrowRightLine,
  RiArrowRightSLine,
  RiCheckFill,
  RiDeleteBinFill,
  RiDeleteBinLine,
  RiDraggable,
  RiDropFill,
  RiDropLine,
  RiEditFill,
  RiEditLine,
  RiMoreFill,
} from "react-icons/ri/index.js"
import "./Accounts.css"
import { formatter } from "../../../../util"
import { useEffect, useState } from "react"
import { useFetcher } from "@remix-run/react"

const SortableAccount = (account) => {
  const [editing, setEditing] = useState(account.isEdit)
  const [colour, setColour] = useState(account.colour)
  const fetcher = useFetcher()
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: account.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  useEffect(() => {
    if (!account.isEdit) setEditing(false)
  }, [account])

  if (fetcher.formData?.get("_action") == "delete") return null

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      styles={
        account.colour && {
          root: {
            borderLeft: `5px solid ${colour}`,
          },
        }
      }
      className="account"
      shadow="xs"
      withBorder
      p="sm"
      mb="10px"
    >
      <fetcher.Form method="POST">
        <Grid>
          <Grid.Col span={5.5} align="left">
            <Group>
              <ActionIcon
                {...attributes}
                {...listeners}
                color="gray"
                variant="transparent"
                m={"0 -5px"}
                onClick={() => setEditing(false)}
              >
                <RiDraggable />
              </ActionIcon>
              {editing ? (
                <Input name="name" defaultValue={account.name} />
              ) : (
                <Text>{account.name}</Text>
              )}
            </Group>
          </Grid.Col>
          <Grid.Col span={4} align="left">
            {editing ? (
              <Input name="balance" defaultValue={account.balance} />
            ) : (
              <Text>{formatter.format(account.balance)}</Text>
            )}
          </Grid.Col>
          <Grid.Col span={1} align="left">
            <input type="hidden" name="currency" value="AUD" />
            <input type="hidden" name="id" value={account.id} />
            <Text c="lightGray">{account.currency}</Text>
          </Grid.Col>
          <Grid.Col span={1.5} align={editing ? "center" : "right"}>
            {editing ? (
              <ActionIcon
                color="green"
                variant="light"
                m={"0 -5px"}
                type="submit"
                name="_action"
                value="updateBank"
              >
                <RiCheckFill className="always" />
              </ActionIcon>
            ) : (
              <Popover position="top" shadow="md">
                <Popover.Target>
                  <ActionIcon color="black" variant="transparent" m={"0 -5px"}>
                    <RiMoreFill />
                  </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown p={0}>
                  <Button.Group orientation="vertical">
                    <Button
                      justify="left"
                      color="black"
                      variant="subtle"
                      onClick={() => setEditing(true)}
                      leftSection={<RiEditLine />}
                    >
                      <Text size="sm">Edit</Text>
                    </Button>
                    <Popover position="right" shadow="md" withArrow>
                      <Popover.Target>
                        <Button
                          color="black"
                          justify="left"
                          variant="subtle"
                          leftSection={<RiDropLine />}
                          rightSection={<RiArrowRightSLine />}
                        >
                          <Text size="sm">Colour</Text>
                        </Button>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <ColorSwatches
                          setColour={(colour) => {
                            setColour(colour)
                            fetcher.submit(
                              {
                                _action: "updateBankColour",
                                id: account.id,
                                colour: colour,
                              },
                              { method: "POST" }
                            )
                          }}
                        />
                      </Popover.Dropdown>
                    </Popover>
                    <Button
                      justify="left"
                      variant="subtle"
                      color="red"
                      leftSection={<RiDeleteBinLine />}
                      component="button"
                      onClick={() => {
                        fetcher.submit(
                          { _action: "delete", id: account.id },
                          { method: "POST" }
                        )
                      }}
                    >
                      <Text size="sm">Delete</Text>
                    </Button>
                  </Button.Group>
                </Popover.Dropdown>
              </Popover>
            )}
          </Grid.Col>
        </Grid>
      </fetcher.Form>
    </Paper>
  )
}

export default SortableAccount
