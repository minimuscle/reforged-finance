import { _Input } from "components/Form/Input/_Input"
import type { Input } from "components/Form/types"
import { useFormContext } from "react-hook-form"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _HookFormInput({ name, ...rest }: Input.HookFormInputProps) {
  const { register } = useFormContext()

  return (
    <div className="HookForm">
      <_Input {...register(name)} {...rest} />
    </div>
  )
}
