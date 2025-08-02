import { NumberFormatter } from "@mantine/core"
import { DataTable } from "components/DataTable"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import { query } from "src/queries/queryTree"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Assets() {
  /*****  QUERIES  *****/
  const { data: history_data } = query.user.history.useSelectSuspenseQuery(void 0, ({ data }) => data ?? [])
  const cashValueChange = (history_data.at(-1)?.cash ?? 0) - (history_data.at(history_data.length - 2)?.cash ?? 0)
  const cashValueChangePercentage =
    ((cashValueChange / (history_data.at(history_data.length - 2)?.cash ?? 1)) * 100).toFixed(2) + "%"

  /*********  RENDER  *********/
  return (
    <DataTable>
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
          <DataTable.Col>
            <NumberFormatter prefix="$" value={history_data.at(-1)?.cash} allowNegative thousandSeparator />
          </DataTable.Col>
          <DataTable.Col>
            <Flex direction="column">
              <Text alignRight color={cashValueChange >= 0 ? "success" : "error"}>
                <NumberFormatter
                  prefix={cashValueChange >= 0 ? "+$" : "$"}
                  value={cashValueChange}
                  allowNegative
                  thousandSeparator
                />
              </Text>
              <Text alignRight size="xs" color="gray">
                (
                <NumberFormatter
                  value={cashValueChangePercentage}
                  allowNegative
                  decimalScale={2}
                  fixedDecimalScale
                  suffix="%"
                />
                )
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
