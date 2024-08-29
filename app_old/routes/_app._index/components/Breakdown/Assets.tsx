import { Table, Title } from '@mantine/core'

const Assets = () => {
  return (
    <>
      <Title>Assets</Title>
      <Table striped highlightOnHover withTableBorder stickyHeader>
        <Table.Thead>
          <Table.Tr>
            <Table.Td>Name</Table.Td>
            <Table.Td>Total ($)</Table.Td>
            <Table.Td>Gain ($)</Table.Td>
            <Table.Td>Gain (%)</Table.Td>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Cash</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Stocks</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Stocks</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Property</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Super</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
            <Table.Td>0</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  )
}

export default Assets
