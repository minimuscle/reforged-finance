import { _Input } from "components/Form/Input/_Input"
import type { Input } from "components/Form/types"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _HookFormInput({ name, ...rest }: Input.HookFormInputProps) {
  return (
    <div className="HookForm">
      <_Input {...rest} />
    </div>
  )
}
