import { MutationFunction } from "@tanstack/react-query"
import { Input } from "components/Form/Input"
import { useAutosave } from "utils/hooks/useAutosave"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
interface _AutosaveInput<TInsert> {
  mutationFn: (attributes: TInsert) => Promise<unknown>
  column: keyof TInsert
}

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const _AutosaveInput = <TInsert extends Record<string, unknown>>({
  mutationFn,
  column,
}: _AutosaveInput<TInsert>) => {
  /*****  HOOKS  *****/
  const autosave = useAutosave({
    mutationFn: (value) => mutationFn({ [column]: value } as TInsert),
  })

  /*****  RENDER  *****/
  return <Input onChange={(e) => autosave.save(e.target.value)} />
}
