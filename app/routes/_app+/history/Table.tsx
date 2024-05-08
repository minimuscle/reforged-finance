import { Table } from '@mantine/core'

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
        {history.map((item: any) => (
          <Table.Tr key={item.id}>
            <Table.Td>{item.date}</Table.Td>
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
