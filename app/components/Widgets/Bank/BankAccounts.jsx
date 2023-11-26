import { ActionIcon, Input, Select, Table, Tooltip } from "@mantine/core"
import { useFetcher, useLoaderData } from "@remix-run/react"
import { useReducer, useState } from "react"
import { RiCheckFill, RiCloseFill, RiEditFill } from "react-icons/ri/index.js"

export const moneyFormatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  minimumFractionDigits: 0,
})

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload }
    case "balance":
      return { ...state, balance: action.payload }
    case "currency":
      return { ...state, currency: action.payload }
    default:
      throw new Error()
  }
}

const BankAccounts = () => {
  const [bankContent, editBank] = useState()
  const [bankItem, setBankItem] = useReducer(reducer, {
    name: "",
    balance: 0,
    currency: "AUD",
  })
  const fetcher = useFetcher()
  const { cash } = useLoaderData()

  console.log("bank", bankItem)

  return cash?.map((bank) => (
    <Table.Tr key={bank.id} className="rowHover">
      <Table.Td>
        {bankContent === bank.id ? (
          <Input
            defaultValue={bank?.name}
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
        {bankContent === bank.id ? (
          <Input
            maw="50%"
            defaultValue={moneyFormatter.format(bank?.balance)}
          />
        ) : (
          moneyFormatter.format(bank?.balance)
        )}
      </Table.Td>
      <Table.Td align="right">
        <Tooltip
          label="Save"
          className={bankContent === bank.id ? "" : "showButtons"}
        >
          <ActionIcon
            display={bankContent === bank.id ? "" : "none"}
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
            display={bankContent === bank.id ? "none" : ""}
            className="showButtons"
            variant="light"
            color="blue"
            aria-label="Edit"
            mr={"15px"}
            ml="-100px"
            onClick={() => {
              editBank(bank.id)
              setBankItem({ type: "name", payload: bank.name })
              setBankItem({ type: "currency", payload: bank.currency })
              setBankItem({ type: "balance", payload: bank.balance })
            }}
          >
            <RiEditFill />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          label="Cancel"
          className={bankContent === bank.id ? "" : "showButtons"}
        >
          <ActionIcon
            display={bankContent === bank.id ? "" : "none"}
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
        <Tooltip label="Delete" className="showButtons">
          <ActionIcon
            display={bankContent === bank.id ? "none" : ""}
            className="showButtons"
            variant="light"
            color="red"
            aria-label="Delete"
          >
            <RiCloseFill />
          </ActionIcon>
        </Tooltip>
      </Table.Td>
    </Table.Tr>
  ))
}

export default BankAccounts
