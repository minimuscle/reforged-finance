import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'components/Card'
import { Flex } from 'components/Flex'
import { Grid } from 'components/Grid'

/**********************************************************************************************************
 *   ROUTE START
 **********************************************************************************************************/
export const Route = createFileRoute('/_app/_dashboard/')({
  component: RouteComponent,
})

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
function RouteComponent() {
  return (
    <Grid columns="repeat(8, 1fr)" gap={20}>
      <Grid.Col span={5}>
        <Card>Net Worth Graph</Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card>Asset Distribution</Card>
      </Grid.Col>
      <Grid.Col span={2}>
        <Flex direction="column" gap={20}>
          <Card>Yearly Savings Rate</Card>
          <Card>Savings Goals</Card>
        </Flex>
      </Grid.Col>
      <Grid.Col span={6}>
        <Grid columns="repeat(6, 1fr)" gap={20}>
          <Grid.Col span={2}>
            <Card>Wealth Added</Card>
          </Grid.Col>
          <Grid.Col span={2}>
            <Card>Savings Change</Card>
          </Grid.Col>
          <Grid.Col span={2}>
            <Card>Yearly Savings</Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card>Asset Breakdown</Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card>Liability Breakdown</Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card>Historical Net Worth</Card>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  )
}
