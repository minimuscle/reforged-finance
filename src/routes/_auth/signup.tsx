import { createFileRoute } from "@tanstack/react-router"
import { Signup } from "../../containers/auth/modules/signup"

export const Route = createFileRoute("/_auth/signup")({
  component: Signup,
})
