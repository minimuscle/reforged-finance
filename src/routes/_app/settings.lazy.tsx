import * as React from "react"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/settings")({
  component: RouteComponent,
})

function RouteComponent() {
  return "Hello /_app/settings!"
}
