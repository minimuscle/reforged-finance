import { createFileRoute } from "@tanstack/react-router"
import { Cash } from "containers/cash"

export const Route = createFileRoute("/_app/cash/")({
  component: Cash,
})
