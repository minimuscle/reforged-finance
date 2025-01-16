import { DataTable } from "components/DataTable"
import { Flex } from "components/Flex"
import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Liabilities() {
  /*********  RENDER  *********/
  return (
    <DataTable className="table">
      <DataTable.Head>
        <DataTable.Row>
          <DataTable.Heading>Type</DataTable.Heading>
          <DataTable.Heading>Total Owing</DataTable.Heading>
          <DataTable.Heading>Change</DataTable.Heading>
        </DataTable.Row>
      </DataTable.Head>
      <DataTable.Body>
        <DataTable.Row>
          <DataTable.Col>
            <Text>HELP Loan</Text>
          </DataTable.Col>
          <DataTable.Col>
            <Text alignRight>$53,345.32</Text>
          </DataTable.Col>
          <DataTable.Col>
            <Flex direction="column">
              <Text alignRight color="red-6">
                +$2364.24
              </Text>
              <Text alignRight size="xs" color="gray-4">
                (24.52%)
              </Text>
            </Flex>
          </DataTable.Col>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Col>
            <Text>Car Loan</Text>
          </DataTable.Col>
          <DataTable.Col>
            <Text alignRight>$19,292.32</Text>
          </DataTable.Col>
          <DataTable.Col>
            <Flex direction="column">
              <Text alignRight color="green-6">
                -$264.24
              </Text>
              <Text alignRight size="xs" color="gray-4">
                (24.52%)
              </Text>
            </Flex>
          </DataTable.Col>
        </DataTable.Row>
      </DataTable.Body>
    </DataTable>
  )
}
