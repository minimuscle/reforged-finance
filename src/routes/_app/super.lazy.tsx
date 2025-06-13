import { Super } from "containers/super"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/super")({
  component: Super,
})
