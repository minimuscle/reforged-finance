import { createFileRoute } from "@tanstack/react-router"
import { Flex } from "components/Flex"
import { SettingsGeneral } from "routes/_app/settings/-components/general"
import { SettingsProfile } from "routes/_app/settings/-components/profile"
import { SettingsTargets } from "routes/_app/settings/-components/targets"

export const Route = createFileRoute("/_app/settings/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Flex fullWidth gap={15} wrap="wrap">
      <SettingsGeneral />
      <SettingsTargets />
      <SettingsProfile />
    </Flex>
  )
}
