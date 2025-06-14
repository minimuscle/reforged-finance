import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "components/Templates/ComingSoon"

export const Route = createFileRoute("/_app/side-income/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ComingSoon title="Side Income" description="managing your side income" />
}
