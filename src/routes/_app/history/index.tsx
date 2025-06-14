import { createFileRoute } from "@tanstack/react-router"
import { History } from "containers/history"

export const Route = createFileRoute("/_app/history/")({
  component: History,
})
