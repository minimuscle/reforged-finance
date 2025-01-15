import { Button } from "@mantine/core"
import { Card } from "components/Card"
import { Text } from "components/Text"
import "./_Dashboard.css"
import { TrendCard } from "containers/dashboard/components/trendCard"
import { Flex } from "components/Flex"
import { Table } from "components/Table"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Dashboard() {
  /*********  RENDER  *********/
  return (
    <>
      <Card
        fullWidth
        className="Dashboard__networth"
        heading="Net Worth"
        subtitle="An overview of your progress"
        actions={<Button color="sky">Export</Button>}
      >
        <Text>This is the main content section</Text>
      </Card>
      <Flex gap={20} fullWidth>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </Flex>
      <Card
        fullWidth
        className="Dashboard__assets"
        heading="Breakdown"
        subtitle="An overview of your assets and liabilities"
      >
        <Text size="xl">Assets</Text>
        <Table className="Dashboard__assetsTable">
          <Table.Head>
            <Table.Row>
              <Table.Heading>Type</Table.Heading>
              <Table.Heading>Total</Table.Heading>
              <Table.Heading>Gain</Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Col>Cash</Table.Col>
              <Table.Col>$1,000,000</Table.Col>
              <Table.Col>+$264.24</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Stocks + ETFs</Table.Col>
              <Table.Col>$1,000,000</Table.Col>
              <Table.Col>+$264.24</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Property</Table.Col>
              <Table.Col>$1,000,000</Table.Col>
              <Table.Col>+$264.24</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Super</Table.Col>
              <Table.Col>$1,000,000</Table.Col>
              <Table.Col>+$264.24</Table.Col>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>
    </>
  )
}
