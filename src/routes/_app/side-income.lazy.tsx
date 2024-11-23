import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/side-income")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/side-income!"
}
