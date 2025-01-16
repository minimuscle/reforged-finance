import { DataTable } from "components/DataTable"
import { Flex } from "components/Flex"
import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Assets() {
  /*********  RENDER  *********/
  return (
    <DataTable className="table">
      <DataTable.Head>
        <DataTable.Row>
          <DataTable.Heading>Type</DataTable.Heading>
          <DataTable.Heading>Total</DataTable.Heading>
          <DataTable.Heading>Gain</DataTable.Heading>
        </DataTable.Row>
      </DataTable.Head>
      <DataTable.Body>
        <DataTable.Row>
          <DataTable.Col>Cash</DataTable.Col>
          <DataTable.Col>$1,000,000</DataTable.Col>
          <DataTable.Col>
            <Flex direction="column">
              <Text alignRight>+$264.24</Text>
              <Text alignRight size="xs">
                (24.52%)
              </Text>
            </Flex>
          </DataTable.Col>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Col>Stocks + ETFs</DataTable.Col>
          <DataTable.Col>$1,000,000</DataTable.Col>
          <DataTable.Col>
            <Flex direction="column">
              <Text alignRight>+$264.24</Text>
              <Text alignRight size="xs">
                (24.52%)
              </Text>
            </Flex>
          </DataTable.Col>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Col>Property</DataTable.Col>
          <DataTable.Col>$1,000,000</DataTable.Col>
          <DataTable.Col>
            <Flex direction="column">
              <Text alignRight>+$264.24</Text>
              <Text alignRight size="xs">
                (24.52%)
              </Text>
            </Flex>
          </DataTable.Col>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Col>Super</DataTable.Col>
          <DataTable.Col>$1,000,000</DataTable.Col>
          <DataTable.Col>
            <Flex direction="column">
              <Text alignRight>+$264.24</Text>
              <Text alignRight size="xs">
                (24.52%)
              </Text>
            </Flex>
          </DataTable.Col>
        </DataTable.Row>
      </DataTable.Body>
    </DataTable>
  )
}
