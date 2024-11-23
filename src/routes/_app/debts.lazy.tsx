import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/debts")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/debts!"
}
