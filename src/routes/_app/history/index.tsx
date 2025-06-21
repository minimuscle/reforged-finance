import { createFileRoute } from "@tanstack/react-router"
import { Card } from "components/Card"
import { History } from "containers/history"
import { HistoryTable } from "routes/_app/history/-components/historyTable"

export const Route = createFileRoute("/_app/history/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Card heading="History" subtitle="An overview of your progress" fullWidth>
      <HistoryTable />
    </Card>
  )
}
