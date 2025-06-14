import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "components/Templates/ComingSoon"

export const Route = createFileRoute("/_app/budget/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ComingSoon title="Budgeting" description="managing your budget" />
}
