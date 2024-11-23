import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/budget")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/budget!"
}
