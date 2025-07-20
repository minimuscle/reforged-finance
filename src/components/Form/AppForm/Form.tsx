import { FormHTMLAttributes } from "react"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type Form = React.FC<FormHTMLAttributes<HTMLFormElement>>

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const Form: Form = ({children, ...props}) => {
  return (
    <form {...props} onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit?.(e)
    }}>
      {children}
    </form>
  )
}