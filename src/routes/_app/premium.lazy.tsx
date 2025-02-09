import { createLazyFileRoute } from "@tanstack/react-router"
import { Premium } from "containers/premium"

export const Route = createLazyFileRoute("/_app/premium")({
  component: Premium,
})
