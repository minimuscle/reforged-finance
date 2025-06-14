import { account } from "api/account"
import { auth } from "api/auth"
import { Card } from "components/Card"
import { Input } from "components/Form/Input"
import { settingsQuery } from "routes/_app/settings/-queries/queryTree"
import styles from "./_settings.module.css"
import { IconCurrencyDollarAustralian } from "@tabler/icons-react"
import { IconCurrencyDollar } from "@tabler/icons-react"
import { Flex } from "components/Flex"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsGeneral = () => {
  /*****  QUERIES  *****/
  const { data: profile_details } = settingsQuery.getProfile.useSelectSuspenseQuery(void 0, ({ data }) => {
    return data
  })

  /*****  RENDER  *****/
  return (
    <Card heading="General" className={styles.settings}>
      <Flex direction="column" gap={15}>
        <Input.Autosave
          label="Employment Income"
          description="Your pre-tax yearly income from your main job"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
          leftSection={<IconCurrencyDollar size={18} />}
          type="number"
          thousandSeparator=","
        />
        <Input.Autosave
          label="Regular Net Income"
          description="Post-tax income you receive each pay"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
          leftSection={<IconCurrencyDollar size={18} />}
          type="number"
          thousandSeparator=","
        />
        <Input.Autosave
          label="Salary Frequency"
          description="How often you get paid"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
          leftSection={<IconCurrencyDollar size={18} />}
          type="number"
          thousandSeparator=","
        />
        <Input.Autosave
          label="Currency"
          disabled
          description="The currency you are paid in"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
          leftSection={<IconCurrencyDollar size={18} />}
          type="number"
          thousandSeparator=","
        />
      </Flex>
    </Card>
  )
}
