import { auth } from "api/auth"
import { Card } from "components/Card"
import { Input } from "components/Form/Input"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsGeneral = () => {
  return (
    <Card heading="General">
      <Input.Autosave mutationFn={auth.POST.test} column="colname" />
    </Card>
  )
}
