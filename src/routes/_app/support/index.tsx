import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/support/")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/help!"
}
