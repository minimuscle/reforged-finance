import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/super")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/super!"
}
