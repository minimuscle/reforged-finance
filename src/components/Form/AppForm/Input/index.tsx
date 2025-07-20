import { TextInputProps } from "@mantine/core"
import { useFieldContext } from "components/Form/AppForm"
import { Input } from "components/Form/Input"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type AppFormInput = React.FC<TextInputProps>

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const _AppFormInput: AppFormInput = (props) => {
  /*****  HOOKS  *****/
  const field = useFieldContext<string | number | readonly string[] | undefined>()

  /*****  RENDER  *****/
  return <Input {...props} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
}
