import { createLazyFileRoute } from "@tanstack/react-router"
import { Dashboard } from "../../containers/dashboard"

export const Route = createLazyFileRoute("/_app/")({
  component: Dashboard,
})
