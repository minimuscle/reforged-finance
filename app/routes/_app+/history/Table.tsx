import { Table } from '@mantine/core'
import { History } from '~/utils/types'

function dateFormat(epoch: number) {
  const date = new Date(epoch * 1000)

  //Return month and year
  return date.toLocaleString('en-AU', {
    month: 'long',
    year: 'numeric',
  })
}

export default function HistoryTable({ history }: any) {
  return (
    <Table withTableBorder striped stickyHeader highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Cash</Table.Th>
          <Table.Th>Debts</Table.Th>
          <Table.Th>Income</Table.Th>
          <Table.Th>Side-Income</Table.Th>
          <Table.Th>Super</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {history.map((item: History, key: number) => (
          <Table.Tr key={key}>
            <Table.Td>{dateFormat(item.date._seconds)}</Table.Td>
            <Table.Td>{item.cash}</Table.Td>
            <Table.Td>{item.debts}</Table.Td>
            <Table.Td>{item.income}</Table.Td>
            <Table.Td>{item.side_income}</Table.Td>
            <Table.Td>{item.super}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}
