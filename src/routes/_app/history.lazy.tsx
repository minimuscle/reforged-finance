import { createLazyFileRoute } from "@tanstack/react-router"
import { History } from "containers/history"

export const Route = createLazyFileRoute("/_app/history")({
  component: History,
})
