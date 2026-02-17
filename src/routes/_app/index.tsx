import { createFileRoute } from '@tanstack/react-router'
import { Card } from '../../components/Card'
import { Flex } from '../../components/Flex'

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Flex gap={20}>
        <Card>Net Worth Graph</Card>
        <Card>Asset Distribution</Card>
      </Flex>
      <Flex>
        <Flex direction="column">
          <Card>Yearly Savings Rate</Card>
          <Card>Savings Goals</Card>
        </Flex>
        <Flex direction="column">
          <Flex>
            <Card>Wealth Added</Card>
            <Card>Savings Change</Card>
            <Card>Yearly Savings</Card>
          </Flex>
          <Flex>
            <Card>Asset Breakdown</Card>
            <Card>Liability Breakdown</Card>
          </Flex>
          <Card>Historical Net Worth</Card>
        </Flex>
      </Flex>
    </div>
  )
}
