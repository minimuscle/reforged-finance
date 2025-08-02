import { NumberFormatter, Table } from "@mantine/core"
import { Text } from "components/Text"
import { query } from "src/queries/queryTree"
import { DB } from "utils/types"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type NumericKeys<T> = {
  [K in keyof T]-?: Exclude<T[K], null> extends number ? K : never // –? removes “optional” modifiers so we don’t lose any keys
}[keyof T]

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const HistoryTable = () => {
  /*****  QUERIES  *****/
  const { data: history_data } = query.user.history.useSelectSuspenseQuery(void 0, ({ data }) => data)

  /*****  FUNCTIONS  *****/
  const getCalculatedValue = (value: NumericKeys<DB.Row<"history">>, index: number) => {
    if (index === 0) return { changeValue: 0, changePercent: 0 }

    const currValue = history_data?.[index][value]
    const prevValue = history_data?.[index - 1][value]

    if (!currValue) return { changeValue: 0, changePercent: 0 }
    if (!prevValue) return { changeValue: 0, changePercent: 0 }

    const changeValue = currValue - prevValue
    const changePercent = changeValue / currValue
    return { changeValue, changePercent }
    // return history_data?.[index - 1][value]
  }

  /*****  RENDER  *****/
  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Td>Month</Table.Td>
          <Table.Td>Cash</Table.Td>
          <Table.Td>Cash Change</Table.Td>
          <Table.Td>Debts</Table.Td>
          <Table.Td>Debts Change</Table.Td>
          <Table.Td>Super</Table.Td>
          <Table.Td>Super Change</Table.Td>
          <Table.Td>Income</Table.Td>
          <Table.Td>Income Change</Table.Td>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {history_data?.map((item, index) => {
          const cash = getCalculatedValue("cash", index)
          const debts = getCalculatedValue("debts", index)
          const superAmount = getCalculatedValue("super", index)
          const income = getCalculatedValue("salaried_income", index)

          return (
            <Table.Tr>
              <Table.Td>
                <Text>
                  {/* {item.month.charAt(0).toLocaleUpperCase() + item.month.slice(1)} {item.year} */}
                  {item.date}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <NumberFormatter value={item.cash} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
              <Table.Td>
                <Text color={cash.changeValue >= 0 ? "success" : "error"}>
                  {cash.changeValue >= 0 ? "+" : "-"}
                  <NumberFormatter value={cash.changeValue} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <NumberFormatter value={item.debts} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <NumberFormatter value={item.cash} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <NumberFormatter value={item.super} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <NumberFormatter value={item.cash} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <NumberFormatter value={item.salaried_income} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <NumberFormatter value={item.cash} thousandSeparator prefix="$" decimalScale={2} />
                </Text>
              </Table.Td>
            </Table.Tr>
          )
        })}
      </Table.Tbody>
    </Table>
  )
}
