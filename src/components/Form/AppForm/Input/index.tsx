import { Input } from "components/Form/Input"
import { Input as InputProps } from "components/Form/types"
import React from "react"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type AppFormInput = React.FC<InputProps.InputProps>

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const AppFormInput: AppFormInput = (props) => {
  /*****  RENDER  *****/
  return <Input {...props} />
}
