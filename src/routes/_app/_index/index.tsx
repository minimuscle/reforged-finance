import { createFileRoute } from "@tanstack/react-router"
import { Flex } from "components/Flex"
import { Breakdown } from "routes/_app/_index/-components/breakdown"
import { Networth } from "routes/_app/_index/-components/networth"
import { TrendCard } from "routes/_app/_index/-components/trendCard"
import { query } from "src/queries/queryTree"

export const Route = createFileRoute("/_app/_index/")({
  component: RouteComponent,
})

function RouteComponent() {
  /*****  QUERIES  *****/
  /*****  QUERIES  *****/
  const { data: history_data } = query.user.history.useSelectSuspenseQuery(void 0, ({ data }) => data ?? [])

  /*****  RENDER  *****/
  return (
    <>
      <Networth />
      <Flex gap={20} fullWidth>
        <TrendCard
          title="Networth Trend"
          value={history_data.at(-1)?.cash ?? 0}
          chartData={history_data.map((h) => h.cash)}
          percentage={
            ((history_data.at(-1)?.cash ?? 0) - (history_data.at(history_data.length - 2)?.cash ?? 0)) /
            (history_data.at(history_data.length - 2)?.cash ?? 1)
          }
        />
        <TrendCard
          onTrack={Boolean(history_data.at(-1)?.cash ?? 0 > 0)}
          title="Safety Net"
          value={history_data.at(-1)?.cash ?? 0}
          chartData={history_data.map((h) => h.cash)}
          percentage={
            ((history_data.at(-1)?.cash ?? 0) - (history_data.at(history_data.length - 2)?.cash ?? 0)) /
            (history_data.at(history_data.length - 2)?.cash ?? 1)
          }
        />
        <TrendCard
          onTrack={Boolean(history_data.at(-1)?.cash ?? 0 > 0)}
          title="Networth Trend"
          value={history_data.at(-1)?.cash ?? 0}
          chartData={history_data.map((h) => h.cash)}
          percentage={
            ((history_data.at(-1)?.cash ?? 0) - (history_data.at(history_data.length - 2)?.cash ?? 0)) /
            (history_data.at(history_data.length - 2)?.cash ?? 1)
          }
        />
      </Flex>
      <Breakdown />
    </>
  )
}
