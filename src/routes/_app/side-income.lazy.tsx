import { SideIncome } from "containers/side-income"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/side-income")({
  component: SideIncome,
})
