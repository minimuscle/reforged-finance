import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'components/Card'
import { Flex } from 'components/Flex'
import { Grid } from 'components/Grid'

/******************************************************
 *   ROUTE START
 ******************************************************/
export const Route = createFileRoute('/_app/cash/')({
  component: RouteComponent,
})

/******************************************************
 *   ROUTE COMPONENT START
 ******************************************************/
function RouteComponent() {
  /***** RENDER *****/
  return (
    <Grid columns="repeat(4, 1fr)" gap={20}>
      <Grid.Col>
        <Flex direction="column" gap={20}>
          <Card>Savings Distribution</Card>
          <Card>Cash Accounts</Card>
        </Flex>
      </Grid.Col>
      <Grid.Col span={3}>
        <Grid columns="repeat(3, 1fr)" gap={20}>
          <Grid.Col>
            <Card>Savings This Month</Card>
          </Grid.Col>
          <Grid.Col>
            <Card>Average Savings Per Month</Card>
          </Grid.Col>
          <Grid.Col>
            <Card>Predicted EOY Savings</Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card>Cash Total</Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card>Savings History</Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card>Savings Rate</Card>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  )
}
