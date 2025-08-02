import { createFileRoute } from "@tanstack/react-router"
import { Flex } from "components/Flex"
import { Breakdown } from "routes/_app/_index/-components/breakdown"
import { Networth } from "routes/_app/_index/-components/networth"
import { TrendCard } from "routes/_app/_index/-components/trendCard"

export const Route = createFileRoute("/_app/_index/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Networth />
      <Flex gap={20} fullWidth>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </Flex>
      <Breakdown />
    </>
  )
}
