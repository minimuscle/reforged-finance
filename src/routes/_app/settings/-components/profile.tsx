import { account } from "api/account"
import { auth } from "api/auth"
import { Card } from "components/Card"
import { Input } from "components/Form/Input"
import { settingsQuery } from "routes/_app/settings/-queries/queryTree"
import styles from "./_settings.module.css"
import { Flex } from "components/Flex"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsProfile = () => {
  /*****  QUERIES  *****/
  const { data: profile_details } = settingsQuery.getProfile.useSelectQuery(void 0, ({ data }) => {
    return data
  })

  /*****  RENDER  *****/
  return (
    <Card heading="Profile" className={styles.settings}>
      <Flex direction="column" gap={15}>
        <Input.Autosave
          label="Account Email"
          description="Used to login to your account. Cannot be changed"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
        />
        <Input.Autosave
          label="Email Delivery Address"
          description="We will send all delivery emails to this address"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
        />
        <Input.Autosave
          label="Your Name"
          description="Your name for use in emails and within this app."
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
        />
      </Flex>
    </Card>
  )
}
