import { createLazyFileRoute } from "@tanstack/react-router"
import { Settings } from "containers/settings"

export const Route = createLazyFileRoute("/_app/settings")({
  component: Settings,
})
