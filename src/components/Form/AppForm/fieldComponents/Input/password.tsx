import { PasswordInputProps, TextInputProps } from "@mantine/core"
import { useFieldContext } from "components/Form/AppForm"
import { Input } from "components/Form/Input"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type AppFormInputPassword = React.FC<PasswordInputProps>

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const InternalAppFormInputPassword: AppFormInputPassword = (props) => {
  /*****  HOOKS  *****/
  const { state, handleBlur, handleChange, form } = useFieldContext<string | number | readonly string[] | undefined>()
  const {
    value,
    meta: { errors, isDirty, isBlurred },
  } = state
  const shouldShowError = (isDirty && isBlurred) || form.state.submissionAttempts > 0

  /*****  RENDER  *****/
  return (
    <Input.Password
      {...props}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
      error={shouldShowError && errors?.[0]?.message}
    />
  )
}
