import { createLazyFileRoute } from "@tanstack/react-router"
import { Debts } from "containers/debts"

export const Route = createLazyFileRoute("/_app/debts")({
  component: Debts,
})
