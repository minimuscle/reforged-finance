import { createFileRoute } from "@tanstack/react-router"
import { Login } from "./-components/login"

export const Route = createFileRoute("/_auth/login")({
  component: Login,
})
