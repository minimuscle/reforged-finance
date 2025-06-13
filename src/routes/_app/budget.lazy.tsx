import { Budget } from "containers/budget"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/budget")({
  component: Budget,
})
