import { createFileRoute } from "@tanstack/react-router"
import { Premium } from "containers/premium"

export const Route = createFileRoute("/_app/premium/")({
  component: Premium,
})
