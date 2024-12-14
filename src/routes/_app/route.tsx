import { createFileRoute } from "@tanstack/react-router"
import { App } from "../../containers/app"

export const Route = createFileRoute("/_app")({
  component: App,
})
