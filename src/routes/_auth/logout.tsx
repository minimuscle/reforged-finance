import { createFileRoute, redirect } from "@tanstack/react-router"
import { auth } from "../../api/auth"

export const Route = createFileRoute("/_auth/logout")({
  beforeLoad: async () => {
    auth.POST.logout().then(() => {
      redirect({ to: "/login" })
    })
  },
})
