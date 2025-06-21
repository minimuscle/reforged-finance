import { account } from "api/account"
import { Input } from "components/Form/Input"
import { Flex } from "components/Flex"
import { IconCurrencyDollar } from "@tabler/icons-react"
import { useAppContext } from "containers/app/appContext"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsTargets = () => {
  /*****  HOOKS  *****/
  const { user_data } = useAppContext()

  /*****  RENDER  *****/
  return (
    <Flex direction="column" gap={15}>
      <Input.Autosave
        label="Cash Goal"
        description="Set a goal to work towards"
        defaultValue={user_data?.employment_income ?? ""}
        save={account.POST.profile}
        column="employment_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
      <Input.Autosave
        label="Emergency Fund Goal"
        description="How many months you want to save for. We recommend at least 12 months"
        defaultValue={user_data?.employment_income ?? ""}
        save={account.POST.profile}
        column="employment_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
      <Input.Autosave
        description="How much are you saving for your home deposit?"
        defaultValue={user_data?.employment_income ?? ""}
        save={account.POST.profile}
        column="employment_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
    </Flex>
  )
}
