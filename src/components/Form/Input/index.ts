import { _AutosaveInput } from "components/Form/Input/_Autosave"
import { _HookFormInput } from "components/Form/Input/_HookFormInput"
import { _Input } from "components/Form/Input/_Input"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const Input = Object.assign(_Input, {
  HookForm: _HookFormInput,
  Autosave: _AutosaveInput,
})
