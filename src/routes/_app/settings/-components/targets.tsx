import { account } from "api/account"
import { Input } from "components/Form/Input"
import { Flex } from "components/Flex"
import { IconCurrencyDollar } from "@tabler/icons-react"
import { AppContext } from "routes/-components/appContext"
import { use } from "react"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsTargets = () => {
  /*****  HOOKS  *****/
  const { user_data } = use(AppContext)

  /*****  RENDER  *****/
  return (
    <Flex direction="column" gap={15}>
      <Input.Autosave
        label="Cash Goal"
        description="Set a goal to work towards"
        defaultValue={user_data?.cash_goal ?? 0}
        save={account.POST.profile}
        column="employment_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
      <Input.Autosave
        label="Emergency Fund Goal"
        description="How many months you want to save for. We recommend at least 12 months"
        defaultValue={user_data?.emergency_fund_goal ?? 0}
        save={account.POST.profile}
        column="employment_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
      <Input.Autosave
        description="How much are you saving for your home deposit?"
        defaultValue={user_data?.home_deposit_goal ?? 0}
        save={account.POST.profile}
        column="employment_income"
        leftSection={<IconCurrencyDollar size={18} />}
        type="number"
        thousandSeparator=","
      />
    </Flex>
  )
}
