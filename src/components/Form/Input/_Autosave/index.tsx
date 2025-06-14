import { InputProps } from "@mantine/core"
import { Input } from "components/Form/Input"
import { Input as InputType } from "components/Form/types"
import { useAutosave } from "utils/hooks/useAutosave"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type _AutosaveInput<TInsert> = InputType.InputProps &
  InputProps & {
    save: (attributes: TInsert) => Promise<unknown>
    column: keyof TInsert
  }

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const _AutosaveInput = <TInsert extends Record<string, unknown>>({
  save: mutationFn,
  column,
  ...restProps
}: _AutosaveInput<TInsert>) => {
  /*****  HOOKS  *****/
  const autosave = useAutosave({
    mutationFn: (value) => mutationFn({ [column]: value } as TInsert),
  })

  /*****  RENDER  *****/
  return <Input onChange={(e) => autosave.save(e.target.value)} {...restProps} />
}
