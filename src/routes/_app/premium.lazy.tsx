import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/premium")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/premium!"
}
