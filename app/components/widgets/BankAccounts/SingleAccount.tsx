import {
  ActionIcon,
  Button,
  Flex,
  Paper,
  Popover,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import EditableText from "~/components/EditableText"
import { CashProps } from "~/utils/types"
import { formatter } from "~/utils/utils"
import styles from "./BankAccounts.module.css"
import {
  RiArrowRightSLine,
  RiDeleteBinLine,
  RiDraggable,
  RiDropLine,
  RiMore2Line,
} from "react-icons/ri/index.js"
import { useFetcher } from "@remix-run/react"
import { ColorSwatches } from "./ColorSwatches"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export default function SingleAccount({ account }: { account: CashProps }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: account.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    borderLeft: `solid ${account.colour} 5px`,
    backgroundColor: `color-mix(in srgb, ${account.colour} 10%, white)`,
  }
  const fetcher = useFetcher()

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      mb={10}
      withBorder
      shadow="xs"
      p={"sm"}
      className={styles.paper}
    >
      <div className={styles.grid}>
        <Flex w={"100%"} justify={"left"} align={"center"}>
          <ActionIcon
            {...attributes}
            {...listeners}
            variant="transparent"
            color="gray"
            className={styles.actionIcon}
          >
            <RiDraggable />
          </ActionIcon>
        </Flex>
        <Stack gap={0}>
          <Title
            className={styles.title}
            mb={-5}
            size={"x-small"}
            order={6}
            c={"gray"}
          >
            Account Name
          </Title>
          {account.pending ? (
            <Skeleton height={15} mt={6} w={"50%"} radius="md" />
          ) : (
            <EditableText
              value={account.name}
              id={account.id}
              fieldName="name"
            />
          )}
        </Stack>
        <Stack gap={0}>
          <Title
            className={styles.title}
            mb={-5}
            size={"x-small"}
            order={6}
            c={"gray"}
          >
            Balance
          </Title>
          {account.pending ? (
            <Skeleton height={15} mt={6} w={"50%"} radius="md" />
          ) : (
            <EditableText
              value={account.balance}
              id={account.id}
              formatter={formatter}
              type="currency"
              fieldName="balance"
            />
          )}
        </Stack>

        <Stack gap={0}>
          <Title
            className={styles.title}
            mb={-5}
            size={"x-small"}
            order={6}
            c={"gray"}
          >
            Currency
          </Title>
          {account.pending ? (
            <Skeleton height={15} mt={6} w={"50%"} radius="md" />
          ) : (
            <Text m={0}>{account.currency}</Text>
          )}
        </Stack>
        <Popover position="top" shadow="md">
          <Popover.Target>
            <Flex w={"100%"} justify={"right"} align={"center"}>
              <ActionIcon
                disabled={account.pending}
                variant="subtle"
                color="gray"
                aria-label="Settings"
              >
                <RiMore2Line />
              </ActionIcon>
            </Flex>
          </Popover.Target>
          <Popover.Dropdown p={0}>
            <Button.Group orientation="vertical">
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
                      fetcher.submit(
                        {
                          intent: "updateBankColour",
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
                    { intent: "deleteBank", id: account.id },
                    { method: "POST" }
                  )
                }}
              >
                <Text size="sm">Delete</Text>
              </Button>
            </Button.Group>
          </Popover.Dropdown>
        </Popover>
      </div>
    </Paper>
  )
}
