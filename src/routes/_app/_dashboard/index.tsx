import { createFileRoute } from '@tanstack/react-router'
import { Card } from '../../../components/Card'
import { Flex } from '../../../components/Flex'

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
    <Flex direction="column" gap={20}>
      <Flex gap={20}>
        <Card>Net Worth Graph</Card>
        <Card>Asset Distribution</Card>
      </Flex>
      <Flex gap={20}>
        <Flex direction="column" gap={20}>
          <Card>Yearly Savings Rate</Card>
          <Card>Savings Goals</Card>
        </Flex>
        <Flex direction="column" gap={20}>
          <Flex gap={20}>
            <Card>Wealth Added</Card>
            <Card>Savings Change</Card>
            <Card>Yearly Savings</Card>
          </Flex>
          <Flex gap={20}>
            <Card>Asset Breakdown</Card>
            <Card>Liability Breakdown</Card>
          </Flex>
          <Card>Historical Net Worth</Card>
        </Flex>
      </Flex>
    </Flex>
  )
}
