import { _AutosaveInput } from "components/Form/Input/_Autosave"
import { _TextInput } from "components/Form/Input/_default"
import { _Input } from "components/Form/Input/_Input"
import { _PasswordInput } from "components/Form/Input/password"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const Input = Object.assign(_TextInput, {
  Password: _PasswordInput,
  Autosave: _AutosaveInput,
})
