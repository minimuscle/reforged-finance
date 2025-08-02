import { InternalTextInput } from "components/Form/Input/internal/_default"
import { InternalNumberInput } from "components/Form/Input/internal/number"
import { InternalPasswordInput } from "components/Form/Input/internal/password"
import { Input as InputType } from "components/Form/types"
import { useAutosave } from "utils/hooks/useAutosave"
import _ from "lodash"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type _AutosaveInput<TInsert> = InputType.Props & {
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
  switch (restProps.type) {
    case "number":
      return <InternalNumberInput onChange={(value: unknown) => autosave.save(value)} {..._.omit(restProps, "type")} />
    case "password":
      return <InternalPasswordInput onChange={(value: unknown) => autosave.save(value)} {...restProps} />
    case "text":
    default:
      return <InternalTextInput onChange={(value: unknown) => autosave.save(value)} {...restProps} />
  }
}
