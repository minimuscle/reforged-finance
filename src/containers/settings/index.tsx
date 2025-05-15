import { SettingsGeneral } from "containers/settings/modules/general"
import { SettingsProfile } from "containers/settings/modules/profile"
import { SettingsTargets } from "containers/settings/modules/targets"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const Settings = () => (
  <>
    <SettingsGeneral />
    <SettingsTargets />
    <SettingsProfile />
  </>
)
