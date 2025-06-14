import { account } from "api/account"
import { auth } from "api/auth"
import { Card } from "components/Card"
import { Input } from "components/Form/Input"
import { settingsQuery } from "routes/_app/settings/-queries/queryTree"
import styles from "./_settings.module.css"
import { Flex } from "components/Flex"
import { IconCurrencyDollar } from "@tabler/icons-react"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsTargets = () => {
  /*****  QUERIES  *****/
  const { data: profile_details } = settingsQuery.getProfile.useSelectQuery(void 0, ({ data }) => {
    return data
  })

  /*****  RENDER  *****/
  return (
    <Card heading="Targets" className={styles.settings}>
      <Flex direction="column" gap={15}>
        <Input.Autosave
          label="Cash Goal"
          description="Set a goal to work towards"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
          leftSection={<IconCurrencyDollar size={18} />}
          type="number"
          thousandSeparator=","
        />
        <Input.Autosave
          label="Emergency Fund Goal"
          description="How many months you want to save for. We recommend at least 12 months"
          defaultValue={profile_details?.employment_income ?? ""}
          save={account.POST.profile}
          column="employment_income"
          leftSection={<IconCurrencyDollar size={18} />}
          type="number"
          thousandSeparator=","
        />
        <Input.Autosave
          description="How much are you saving for your home deposit?"
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
