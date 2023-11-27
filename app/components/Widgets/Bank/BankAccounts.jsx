import {
  ActionIcon,
  Button,
  Grid,
  Input,
  Paper,
  Select,
  Stack,
  Table,
  Tooltip,
  Title,
} from "@mantine/core"
import { Form, useFetcher, useLoaderData } from "@remix-run/react"
import { useReducer, useState } from "react"
import { RiCheckFill, RiCloseFill, RiEditFill } from "react-icons/ri/index.js"

export const moneyFormatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  minimumFractionDigits: 0,
})

const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      return { ...state, id: action.payload }
    case "name":
      return { ...state, name: action.payload }
    case "balance":
      return { ...state, balance: action.payload }
    case "currency":
      return { ...state, currency: action.payload }
    default:
      throw new Error("Type not found")
  }
}

//TODO: This should definitely not be a table but a component that can move around and a form that can be submitted

const BankAccounts = () => {
  const [bankId, editBank] = useState()
  const [bankItem, setBankItem] = useReducer(reducer, {
    _action: "updateBank",
    id: bankId,
    name: "",
    balance: 0,
    currency: "AUD",
  })
  const fetcher = useFetcher()
  const { cash } = useLoaderData()

  return (
    <Grid.Col span={6}>
      <Paper shadow="xl" p="md" withBorder>
        <Stack pos={"relative"}>
          <Button pos={"absolute"} right={0}>
            Add Account
          </Button>
          <Title align="center">Bank Accounts</Title>
          <Table
            borderColor="blue"
            className="tableBanks"
            highlightOnHover
            verticalSpacing="lg"
            withRowBorders={false}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Account Name</Table.Th>
                <Table.Th>Currency</Table.Th>
                <Table.Th>Balance</Table.Th>
                <Table.Th>{fetcher.state}</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {cash?.map((bank) => (
                <Table.Tr key={bank.id} className="rowHover">
                  <Table.Td>
                    {bankId === bank.id ? (
                      <Input
                        value={bankItem.name ? bankItem.name : bank?.name}
                        onChange={(e) =>
                          setBankItem({ type: "name", payload: e.target.value })
                        }
                      />
                    ) : (
                      bank?.name
                    )}
                  </Table.Td>
                  <Table.Td>
                    <Select
                      maw="85px"
                      value="AUD"
                      data={["AUD", "USD", "NZD", "EUR"]}
                      defaultValue={bank?.curency || "AUD"}
                      name="currency"
                      disabled
                      allowDeselect={false}
                    />
                  </Table.Td>
                  <Table.Td>
                    {bankId === bank.id ? (
                      <Input
                        maw="50%"
                        value={
                          bankItem.balance ? bankItem.balance : bank?.balance
                        }
                        onChange={(e) =>
                          setBankItem({
                            type: "balance",
                            payload: e.target.value,
                          })
                        }
                      />
                    ) : (
                      moneyFormatter.format(bank?.balance)
                    )}
                  </Table.Td>
                  <Table.Td align="right">
                    <fetcher.Form method="POST">
                      <Tooltip
                        label="Save"
                        className={bankId === bank.id ? "" : "showButtons"}
                      >
                        <ActionIcon
                          display={bankId === bank.id ? "" : "none"}
                          color="green"
                          aria-label="Save"
                          mr={"15px"}
                          ml="-100px"
                          onClick={() => {
                            editBank()
                            fetcher.submit(bankItem, { method: "POST" })
                          }}
                          tooltipLabel="Save"
                        >
                          <RiCheckFill />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip label="Edit" className="showButtons">
                        <ActionIcon
                          display={bankId === bank.id ? "none" : ""}
                          className="showButtons"
                          variant="light"
                          color="blue"
                          aria-label="Edit"
                          mr={"15px"}
                          ml="-100px"
                          onClick={() => {
                            editBank(bank.id)
                            setBankItem({ type: "id", payload: bank.id })
                            setBankItem({ type: "name", payload: bank.name })
                            setBankItem({
                              type: "currency",
                              payload: bank.currency,
                            })
                            setBankItem({
                              type: "balance",
                              payload: bank.balance,
                            })
                          }}
                        >
                          <RiEditFill />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip
                        label="Cancel"
                        className={bankId === bank.id ? "" : "showButtons"}
                      >
                        <ActionIcon
                          display={bankId === bank.id ? "" : "none"}
                          variant="filled"
                          color="red"
                          aria-label="Cancel"
                          onClick={() => {
                            editBank()
                          }}
                        >
                          <RiCloseFill />
                        </ActionIcon>
                      </Tooltip>
                      <input type="hidden" name="id" value={bank.id} />
                      <Tooltip label="Delete" className="showButtons">
                        <ActionIcon
                          display={bankId === bank.id ? "none" : ""}
                          className="showButtons"
                          variant="light"
                          color="red"
                          aria-label="Delete"
                          type="submit"
                          name="_action"
                          value="delete"
                        >
                          <RiCloseFill />
                        </ActionIcon>
                      </Tooltip>
                    </fetcher.Form>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Stack>
      </Paper>
    </Grid.Col>
  )
}

export default BankAccounts
