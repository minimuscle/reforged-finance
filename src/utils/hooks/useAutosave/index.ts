import { useDebouncer } from "@tanstack/react-pacer"
import { MutationFunction } from "@tanstack/react-query"
import { autosaveInputMutation } from "utils/hooks/useAutosave/autosaveInputQuery"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
interface AutosaveProps<T> {
  mutationFn: MutationFunction<T>
  waitTime?: number
}

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export function useAutosave<T>({ mutationFn, waitTime = 1000 }: AutosaveProps<T>) {
  /*****  QUERIES  *****/
  const { mutate: autoSave } = autosaveInputMutation(mutationFn).useAutoSaveMutation()

  /*****  HOOKS  *****/
  const autosaveDebouncer = useDebouncer((value: T) => autoSave(value), { wait: waitTime })

  /*****  FUNCTIONS  *****/
  function save(value: T) {
    autosaveDebouncer.maybeExecute(value)
  }

  return { save }
}
