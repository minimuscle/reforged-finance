import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/history")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/history!"
}
