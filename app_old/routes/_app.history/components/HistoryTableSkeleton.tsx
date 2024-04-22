import { Skeleton, Table } from '@mantine/core'

const HistoryTableSkeleton = () => {
  return (
    <>
      <Table
        verticalSpacing='md'
        stickyHeader
        withTableBorder
        highlightOnHover
        striped
        // borderColor={colorScheme === 'dark' ? '#29292a' : '#e5e7e9'}
        // highlightOnHoverColor={colorScheme === 'dark' ? '#36363c' : '#e5e6e8'}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Total Cash</Table.Th>
            <Table.Th>Cash Gain</Table.Th>
            <Table.Th>Savings Rate</Table.Th>
            <Table.Th>Super</Table.Th>
            <Table.Th>Super Gain</Table.Th>
            <Table.Th>Debts</Table.Th>
            <Table.Th>Income</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Skeleton />
            </Table.Td>
            <Table.Td>
              <Skeleton />
            </Table.Td>
            <Table.Td>
              <Skeleton />
            </Table.Td>
            <Table.Td>
              <Skeleton />
            </Table.Td>
            <Table.Td>
              <Skeleton />
            </Table.Td>
            <Table.Td>
              <Skeleton />
            </Table.Td>
            <Table.Td>
              <Skeleton />
            </Table.Td>
            <Table.Td>
              <Skeleton />
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  )
}

export default HistoryTableSkeleton
