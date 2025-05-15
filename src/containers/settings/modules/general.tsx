import { Autosave } from "components/Autosave"
import { Card } from "components/Card"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsGeneral = () => {
  return (
    <Card heading="General">
      <Autosave.Input />
    </Card>
  )
}
