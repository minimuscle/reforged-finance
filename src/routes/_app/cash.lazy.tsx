import { createLazyFileRoute } from "@tanstack/react-router"
import { Cash } from "containers/cash"

export const Route = createLazyFileRoute("/_app/cash")({
  component: Cash,
})
