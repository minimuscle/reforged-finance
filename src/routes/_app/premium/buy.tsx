import { createFileRoute } from "@tanstack/react-router"
import { Buy } from "routes/_app/premium/-components/buy"

export const Route = createFileRoute("/_app/premium/buy")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Buy />
}
