import { createFileRoute } from "@tanstack/react-router"
import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { SettingsGeneral } from "routes/_app/settings/-components/general"
import { SettingsProfile } from "routes/_app/settings/-components/profile"
import { SettingsTargets } from "routes/_app/settings/-components/targets"
import styles from "./-components/_settings.module.css"
import { account } from "api/account"

export const Route = createFileRoute("/_app/settings/")({
  loader: ({ context: { queryClient } }) => {
    //TODO: This should be exported from the createQuery really, but that needs to be added to the context and also created with types
    // queryClient.ensureQueryData({ queryKey: settingsQueryKey.profile(), queryFn: account.GET.profile })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Flex fullWidth gap={15} wrap="wrap">
      <Card heading="General" className={styles.settings} noSpacing>
        <SettingsGeneral />
      </Card>
      <Card heading="Targets" className={styles.settings} noSpacing>
        <SettingsTargets />
      </Card>
      <Card heading="Profile" className={styles.settings} noSpacing>
        <SettingsProfile />
      </Card>
    </Flex>
  )
}
