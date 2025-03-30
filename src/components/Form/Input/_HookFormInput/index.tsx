import { _Input } from "components/Form/Input/_Input"
import type { Input } from "components/Form/types"
import { useFormContext } from "react-hook-form"
import styles from "./_HookFormInput.module.css"
import { Text } from "components/Text"
import clsx from "clsx"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _HookFormInput({ name, ...rest }: Input.HookFormInputProps) {
  /**********  HOOKS  **********/
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const className = clsx(styles.hookFormInput, { [styles.error]: Boolean(errors[name]) })

  /*********  RENDER  *********/
  return (
    <div className={className}>
      <_Input {...register(name)} {...rest} />
      <Text color="error" size="sm">
        {errors[name]?.message?.toString() || ""}
      </Text>
    </div>
  )
}
