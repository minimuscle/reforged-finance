import { account } from "api/account"
import { Input } from "components/Form/Input"
import { Flex } from "components/Flex"
import { useAppContext } from "containers/app/appContext"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const SettingsProfile = () => {
  /*****  HOOKS  *****/
  const { user_data } = useAppContext()

  /*****  RENDER  *****/
  return (
    <Flex direction="column" gap={15}>
      <Input.Autosave
        label="Account Email"
        description="Used to login to your account. Cannot be changed"
        defaultValue={user_data.email ?? ""}
        save={account.POST.profile}
        column="employment_income"
      />
      <Input.Autosave
        label="Email Delivery Address"
        description="We will send all delivery emails to this address"
        defaultValue={user_data?.employment_income ?? ""}
        save={account.POST.profile}
        column="employment_income"
      />
      <Input.Autosave
        label="Your Name"
        description="Your name for use in emails and within this app."
        defaultValue={user_data?.employment_income ?? ""}
        save={account.POST.profile}
        column="employment_income"
      />
    </Flex>
  )
}
