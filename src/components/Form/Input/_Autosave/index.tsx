import { MutationFunction } from "@tanstack/react-query"
import { Input } from "components/Form/Input"
import { useAutosave } from "utils/hooks/useAutosave"

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
  /*****  HOOKS  *****/
  const autosave = useAutosave({ mutationFn })

  /*****  RENDER  *****/
  return <Input onChange={(e) => autosave.save(e.target.value)} />
}
