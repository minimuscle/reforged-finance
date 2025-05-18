import { useDebouncer } from "@tanstack/react-pacer"
import { MutationFunction } from "@tanstack/react-query"
import { autosaveInputMutation } from "utils/hooks/useAutosave/autosaveInputQuery"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
interface AutosaveProps {
  mutationFn: MutationFunction
  waitTime?: number
}

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export function useAutosave({ mutationFn, waitTime = 1000 }: AutosaveProps) {
  /*****  QUERIES  *****/
  const { mutate: autoSave } = autosaveInputMutation(mutationFn).useAutoSaveMutation()

  /*****  HOOKS  *****/
  const autosaveDebouncer = useDebouncer((value) => autoSave(value), { wait: waitTime })

  /*****  FUNCTIONS  *****/
  function save(value: any) {
    autosaveDebouncer.maybeExecute(value)
  }

  return { save }
}
