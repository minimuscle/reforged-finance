import { _AutosaveInput } from "components/Form/Input/_Autosave"
import { InternalTextInput } from "components/Form/Input/internal/_default"
import { InternalPasswordInput } from "components/Form/Input/internal/password"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const Input = Object.assign(InternalTextInput, {
  Password: InternalPasswordInput,
  Autosave: _AutosaveInput,
})
