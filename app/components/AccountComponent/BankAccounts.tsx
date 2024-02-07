import { ActionIcon, Button, Group, Popover, Text } from "@mantine/core"
import classes from "./Account.module.css"
import {
  RiArrowRightSLine,
  RiDeleteBinLine,
  RiDropLine,
  RiMore2Line,
} from "react-icons/ri/index.js"
import { ColorSwatches } from "~/components/AccountComponent/ColorSwatches"
import { useFetcher } from "@remix-run/react"
import IncomeComponent from "./IncomeComponent"
import DebtComponent from "./DebtComponent"

const BankAccounts = ({
  totalBalance,
  data,
  type = "income",
}: {
  totalBalance: number
  data: any[]
  type: "income" | "debt"
}) => {
  const fetcher = useFetcher()
  return (
    <>
      {data.map((account, key) => {
        return (
          <Group
            style={{ borderLeft: `solid ${account.colour} 5px` }}
            className={classes.accountContainer}
            key={key}
          >
            {type === "income" ? (
              <IncomeComponent totalBalance={totalBalance} account={account} />
            ) : (
              <DebtComponent />
            )}
            <Popover position="top" shadow="md">
              <Popover.Target>
                <ActionIcon
                  className={classes.actionBtn}
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
                              intent: "updateData",
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
                        { intent: "deleteData", id: account.id },
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
