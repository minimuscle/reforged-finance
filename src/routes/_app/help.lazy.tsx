import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/help")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/help!"
}
