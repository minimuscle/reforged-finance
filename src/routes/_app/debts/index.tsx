import { createFileRoute } from "@tanstack/react-router"
import { Debts } from "containers/debts"

export const Route = createFileRoute("/_app/debts/")({
  component: Debts,
})
