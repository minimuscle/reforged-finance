import {
  ActionIcon,
  Button,
  Flex,
  Menu,
  Paper,
  Popover,
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
  RiEditLine,
  RiMore2Line,
  RiMoreFill,
  RiPaletteLine,
} from "react-icons/ri/index.js"
import { useFetcher, useSubmit } from "@remix-run/react"
import { ColorSwatches } from "./ColorSwatches"

export default function SingleAccount({ account }: { account: CashProps }) {
  const fetcher = useFetcher()

  return (
    <Paper
      mb={10}
      withBorder
      shadow="xs"
      style={{
        borderLeft: `solid ${account.colour} 5px`,
        backgroundColor: `color-mix(in srgb, ${account.colour} 10%, white)`,
      }}
      p={"sm"}
      className={styles.paper}
    >
      <div className={styles.grid}>
        <Flex w={"100%"} justify={"left"} align={"center"}>
          <ActionIcon
            variant="subtle"
            color="gray"
            aria-label="Settings"
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
          <EditableText value={account.name} id={account.id} fieldName="name" />
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
          <EditableText
            value={account.balance}
            id={account.id}
            formatter={formatter}
            type="currency"
            fieldName="balance"
          />
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
          <Text m={0}>{account.currency}</Text>
        </Stack>
        <Popover position="top" shadow="md">
          <Popover.Target>
            <Flex w={"100%"} justify={"right"} align={"center"}>
              <ActionIcon variant="subtle" color="gray" aria-label="Settings">
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
        {/* <Menu shadow="md" width={200}>
          <Menu.Target>
            
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<RiPaletteLine />}
              rightSection={<RiArrowRightSLine />}
            >
              Colour
            </Menu.Item>
            <Menu.Item
              onClick={() => submitDelete()}
              name="intent"
              value="deleteBank"
              color="red"
              leftSection={<RiDeleteBinLine />}
            >
              Delete Bank
            </Menu.Item>
          </Menu.Dropdown>
        </Menu> */}
      </div>
    </Paper>
  )
}
