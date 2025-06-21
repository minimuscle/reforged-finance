import { Table } from "@mantine/core"
import { query } from "src/queries/queryTree"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const HistoryTable = () => {
  /*****  QUERIES  *****/
  // const { data: history_data } = query.user

  /*****  RENDER  *****/
  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Th>Month</Table.Th>
        <Table.Th>Cash</Table.Th>
        <Table.Th>Cash Change</Table.Th>
        <Table.Th>Debts</Table.Th>
        <Table.Th>Debts Change</Table.Th>
        <Table.Th>Super</Table.Th>
        <Table.Th>Super Change</Table.Th>
        <Table.Th>Income</Table.Th>
        <Table.Th>Income Change</Table.Th>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>January 2011</Table.Td>
          <Table.Td>$300</Table.Td>
          <Table.Td>5%</Table.Td>
          <Table.Td>$132.43</Table.Td>
          <Table.Td>-4%</Table.Td>
          <Table.Td>$43,034.53</Table.Td>
          <Table.Td>+5%</Table.Td>
          <Table.Td>$75,000</Table.Td>
          <Table.Td>+$1203</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>January 2011</Table.Td>
          <Table.Td>$300</Table.Td>
          <Table.Td>5%</Table.Td>
          <Table.Td>$132.43</Table.Td>
          <Table.Td>-4%</Table.Td>
          <Table.Td>$43,034.53</Table.Td>
          <Table.Td>+5%</Table.Td>
          <Table.Td>$75,000</Table.Td>
          <Table.Td>+$1203</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>January 2011</Table.Td>
          <Table.Td>$300</Table.Td>
          <Table.Td>5%</Table.Td>
          <Table.Td>$132.43</Table.Td>
          <Table.Td>-4%</Table.Td>
          <Table.Td>$43,034.53</Table.Td>
          <Table.Td>+5%</Table.Td>
          <Table.Td>$75,000</Table.Td>
          <Table.Td>+$1203</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>January 2011</Table.Td>
          <Table.Td>$300</Table.Td>
          <Table.Td>5%</Table.Td>
          <Table.Td>$132.43</Table.Td>
          <Table.Td>-4%</Table.Td>
          <Table.Td>$43,034.53</Table.Td>
          <Table.Td>+5%</Table.Td>
          <Table.Td>$75,000</Table.Td>
          <Table.Td>+$1203</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>January 2011</Table.Td>
          <Table.Td>$300</Table.Td>
          <Table.Td>5%</Table.Td>
          <Table.Td>$132.43</Table.Td>
          <Table.Td>-4%</Table.Td>
          <Table.Td>$43,034.53</Table.Td>
          <Table.Td>+5%</Table.Td>
          <Table.Td>$75,000</Table.Td>
          <Table.Td>+$1203</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  )
}
