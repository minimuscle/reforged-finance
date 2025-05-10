import { Card } from "components/Card"
import { DataTable } from "components/DataTable"
import { Flex } from "components/Flex"
import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function HistoryTable() {
  return (
    <Card heading="History" subtitle="Overview of your cash" fullWidth>
      <DataTable>
        <DataTable.Head>
          <DataTable.Row>
            <DataTable.Heading>Date</DataTable.Heading>
            <DataTable.Heading>Total Cash</DataTable.Heading>
            <DataTable.Heading>Cash Gain</DataTable.Heading>
          </DataTable.Row>
        </DataTable.Head>
        <DataTable.Body>
          <DataTable.Row>
            <DataTable.Col>November 2023</DataTable.Col>
            <DataTable.Col>$1,000,000</DataTable.Col>
            <DataTable.Col>
              <Flex direction="column" align="flex-end">
                <Text color="success">+$46,542.23</Text>
                <Text color="gray-4">(24.53%)</Text>
              </Flex>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>October 2023</DataTable.Col>
            <DataTable.Col>$1,000,000</DataTable.Col>
            <DataTable.Col>
              <Flex direction="column" align="flex-end">
                <Text color="success">+$46,542.23</Text>
                <Text color="gray-4">(24.53%)</Text>
              </Flex>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>September 2023</DataTable.Col>
            <DataTable.Col>$1,000,000</DataTable.Col>
            <DataTable.Col>
              <Flex direction="column" align="flex-end">
                <Text color="success">+$46,542.23</Text>
                <Text color="gray-4">(24.53%)</Text>
              </Flex>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>August 2023</DataTable.Col>
            <DataTable.Col>$1,000,000</DataTable.Col>
            <DataTable.Col>
              <Flex direction="column" align="flex-end">
                <Text color="success">+$46,542.23</Text>
                <Text color="gray-4">(24.53%)</Text>
              </Flex>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>July 2023</DataTable.Col>
            <DataTable.Col>$1,000,000</DataTable.Col>
            <DataTable.Col>
              <Flex direction="column" align="flex-end">
                <Text color="success">+$46,542.23</Text>
                <Text color="gray-4">(24.53%)</Text>
              </Flex>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>June 2023</DataTable.Col>
            <DataTable.Col>$1,000,000</DataTable.Col>
            <DataTable.Col>
              <Flex direction="column" align="flex-end">
                <Text color="success">+$46,542.23</Text>
                <Text color="gray-4">(24.53%)</Text>
              </Flex>
            </DataTable.Col>
          </DataTable.Row>
        </DataTable.Body>
      </DataTable>
    </Card>
  )
}
