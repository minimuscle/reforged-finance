import { account } from "api/account"
import { auth } from "api/auth"
import { Card } from "components/Card"
import { Input } from "components/Form/Input"
import { settingsQuery } from "routes/_app/settings/-queries/queryTree"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsGeneral = () => {
  /*****  QUERIES  *****/
  const { data: profile_details } = settingsQuery.getProfile.useSelectQuery(void 0, ({ data }) => {
    return data
  })

  /*****  RENDER  *****/
  return (
    <Card heading="General">
      <Input.Autosave
        defaultValue={profile_details?.employment_income ?? ""}
        save={account.POST.profile}
        column="employment_income"
      />
    </Card>
  )
}
