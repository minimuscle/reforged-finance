import { useDebouncer } from "@tanstack/react-pacer"
import { autosaveInputMutation } from "components/Autosave/Input/autosaveInputQuery"
import { MutationFunction } from "@tanstack/react-query"
import { Input } from "components/Form/Input"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
interface _AutosaveInput {
  mutationFn: MutationFunction
}

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const _AutosaveInput = ({ mutationFn }: _AutosaveInput) => {
  /*****  QUERIES  *****/
  const { mutate: autoSave } = autosaveInputMutation(mutationFn).useAutoSaveMutation()

  /*****  HOOKS  *****/
  const autosaveDebouncer = useDebouncer((value) => autoSave(value), { wait: 1000 })

  /*****  RENDER  *****/
  return <Input onChange={(e) => autosaveDebouncer.maybeExecute(e.target.value)} />
}
