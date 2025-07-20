import { account } from "api/account"
import { Input } from "components/Form/Input"
import { IconCurrencyDollar } from "@tabler/icons-react"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import { useAppContext } from "routes/-components/appContext"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsGeneral = () => {
  /*****  HOOKS  *****/
  const { user_data } = useAppContext()

  /*****  RENDER  *****/
  return (
    <Flex direction="column" gap={15}>
      <Input.Autosave
        label="Employment Income"
        description="Your pre-tax yearly income from your main job"
        defaultValue={user_data?.employment_income ?? ""}
        save={account.POST.profile}
        column="employment_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
      <Input.Autosave
        label="Regular Net Income"
        description="Post-tax income you receive each pay"
        defaultValue={user_data?.net_income ?? ""}
        save={account.POST.profile}
        column="net_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
      <Input.Autosave
        label="Salary Frequency"
        description="How often you get paid"
        defaultValue={user_data?.salary_frequency ?? ""}
        save={account.POST.profile}
        column="salary_frequency"
      />
      <Input.Autosave
        label="Currency"
        disabled
        description="The currency you are paid in"
        defaultValue={user_data?.currency ?? ""}
        save={account.POST.profile}
        column="currency"
      />
      <Text size="xs" color="info">
        Currency currently can't be updated
      </Text>
    </Flex>
  )
}
