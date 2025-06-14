import { createFileRoute } from "@tanstack/react-router"
import { SettingsGeneral } from "routes/_app/settings/-components/general"
import { SettingsProfile } from "routes/_app/settings/-components/profile"
import { SettingsTargets } from "routes/_app/settings/-components/targets"

export const Route = createFileRoute("/_app/settings/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SettingsGeneral />
      <SettingsTargets />
      <SettingsProfile />
    </>
  )
}
