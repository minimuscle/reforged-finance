import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "components/Templates/ComingSoon"

export const Route = createFileRoute("/_app/super/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ComingSoon title="Superannuation" description="managing your super" />
}
