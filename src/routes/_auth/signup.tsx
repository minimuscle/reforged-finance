import { createFileRoute } from "@tanstack/react-router"
import { Signup } from "./-components/signup"

export const Route = createFileRoute("/_auth/signup")({
  component: Signup,
})
