import { ActionIcon, Button, Group, Popover, Stack, Text } from "@mantine/core"
import { useMemo } from "react"
import useCash from "~/utils/hooks/useCash"
import { formatter } from "~/utils/utils"
import styles from "../../cash.module.css"
import EditableText from "~/components/EditableText"
import {
  RiArrowRightSLine,
  RiDeleteBinLine,
  RiDropLine,
  RiMore2Line,
} from "react-icons/ri/index.js"
import { ColorSwatches } from "~/components/widgets/BankAccounts/ColorSwatches"
import { useFetcher } from "@remix-run/react"

const BankAccounts = () => {
  const { cash, cashTotal } = useCash()
  const cashPercentage = useMemo(() => {
    return cash.map((account) => {
      return ((account.balance / cashTotal) * 100).toFixed(2) + "%"
    })
  }, [cash, cashTotal])
  const fetcher = useFetcher()
  return (
    <>
      {cash.map((account, key) => {
        return (
          <Group
            style={{ borderLeft: `solid ${account.colour} 5px` }}
            className={styles.accountContainer}
            key={key}
          >
            <Group className={styles.maxSpace} gap={0}>
              <Stack className={styles.leftStack} gap={0}>
                <EditableText
                  value={account.name}
                  id={account.id}
                  fieldName="name"
                />
                {/* <Text size={"lg"}></Text> */}
                <Text size="sm" c={"gray"}>
                  $ - {account.currency}
                </Text>
              </Stack>
              <Stack className={styles.rightStack} gap={0}>
                <EditableText
                  value={formatter(account.currency, account.balance)}
                  id={account.id}
                  fieldName="balance"
                  inputClassName={styles.balanceInput}
                  type="currency"
                />
                <Text fw={700} size="md"></Text>
                <Text size="sm" c={"gray"}>
                  {cashPercentage[key]}
                </Text>
              </Stack>
            </Group>
            <Popover position="top" shadow="md">
              <Popover.Target>
                <ActionIcon
                  className={styles.actionBtn}
                  disabled={account.pending}
                  variant="subtle"
                  color="gray"
                  aria-label="Settings"
                >
                  <RiMore2Line />
                </ActionIcon>
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
                              intent: "updateCash",
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
                        { intent: "deleteCash", id: account.id },
                        { method: "POST" }
                      )
                    }}
                  >
                    <Text size="sm">Delete</Text>
                  </Button>
                </Button.Group>
              </Popover.Dropdown>
            </Popover>
          </Group>
        )
      })}
    </>
  )
}

export default BankAccounts
