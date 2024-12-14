import { _Input } from "components/Form/Input/_Input"
import type { Input } from "components/Form/types"
import { useFormContext } from "react-hook-form"
import "./_HookFormInput.css"
import { Text } from "components/Text"
import clsx from "clsx"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _HookFormInput({ name, ...rest }: Input.HookFormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const className = clsx("HookFormInput", { error: Boolean(errors[name]) })

  return (
    <div className={className}>
      <_Input {...register(name)} {...rest} />
      <Text color="error" size="sm">
        {errors[name]?.message?.toString() || ""}
      </Text>
    </div>
  )
}
