import { createFileRoute } from "@tanstack/react-router"
import { Settings } from "containers/settings"

export const Route = createFileRoute("/_app/settings/")({
  component: Settings,
})
